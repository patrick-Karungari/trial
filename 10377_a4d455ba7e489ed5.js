"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [10377],
  {
    355519: function (e, n, t) {
      Object.defineProperty(n, "__esModule", { value: !0 });
      var o = (function (e) {
        if (e && e.__esModule) return e;
        var n = {};
        if (null != e)
          for (var t in e)
            if (Object.prototype.hasOwnProperty.call(e, t)) {
              var o =
                Object.defineProperty && Object.getOwnPropertyDescriptor
                  ? Object.getOwnPropertyDescriptor(e, t)
                  : {};
              o.get || o.set ? Object.defineProperty(n, t, o) : (n[t] = e[t]);
            }
        return (n.default = e), n;
      })(t(305503));
      Object.keys(o).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in n && n[e] === o[e]) ||
            Object.defineProperty(n, e, {
              enumerable: !0,
              get: function () {
                return o[e];
              },
            }));
      });
    },
    305503: function (e, n) {
      var t, o;
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.InterviewStatus = n.InterviewMode = void 0),
        (n.InterviewMode = t),
        (function (e) {
          (e.LIVE = "LIVE"), (e.ASYNC = "ASYNC");
        })(t || (n.InterviewMode = t = {})),
        (n.InterviewStatus = o),
        (function (e) {
          (e.ToBeScheduled = "ToBeScheduled"),
            (e.Scheduled = "Scheduled"),
            (e.RescheduleNeeded = "RescheduleNeeded"),
            (e.Cancelled = "Cancelled"),
            (e.Completed = "Completed"),
            (e.NotStarted = "NotStarted"),
            (e.ReviewRequired = "ReviewRequired");
        })(o || (n.InterviewStatus = o = {}));
    },
    810377: function (e, n, t) {
      Object.defineProperty(n, "__esModule", { value: !0 });
      var o = {},
        i = p(t(800379));
      Object.keys(i).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(o, e) ||
            (e in n && n[e] === i[e]) ||
            Object.defineProperty(n, e, {
              enumerable: !0,
              get: function () {
                return i[e];
              },
            }));
      });
      var r = p(t(117683));
      Object.keys(r).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(o, e) ||
            (e in n && n[e] === r[e]) ||
            Object.defineProperty(n, e, {
              enumerable: !0,
              get: function () {
                return r[e];
              },
            }));
      });
      var a = p(t(720351));
      Object.keys(a).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(o, e) ||
            (e in n && n[e] === a[e]) ||
            Object.defineProperty(n, e, {
              enumerable: !0,
              get: function () {
                return a[e];
              },
            }));
      });
      var s = p(t(515779));
      function p(e) {
        if (e && e.__esModule) return e;
        var n = {};
        if (null != e)
          for (var t in e)
            if (Object.prototype.hasOwnProperty.call(e, t)) {
              var o =
                Object.defineProperty && Object.getOwnPropertyDescriptor
                  ? Object.getOwnPropertyDescriptor(e, t)
                  : {};
              o.get || o.set ? Object.defineProperty(n, t, o) : (n[t] = e[t]);
            }
        return (n.default = e), n;
      }
      Object.keys(s).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(o, e) ||
            (e in n && n[e] === s[e]) ||
            Object.defineProperty(n, e, {
              enumerable: !0,
              get: function () {
                return s[e];
              },
            }));
      });
    },
    27320: function (e, n) {
      var t, o;
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.OnboardingHookType = n.ConditionValueType = void 0),
        (n.ConditionValueType = t),
        (function (e) {
          (e.Boolean = "boolean"),
            (e.String = "string"),
            (e.Number = "number"),
            (e.CountryCodes = "country-code"),
            (e.USStateCodes = "us-state-code"),
            (e.Tag = "tags"),
            (e.SignupFlow = "signupFlow"),
            (e.ResumeScreenResult = "resume-screen-result"),
            (e.WorkerSource = "worker-source");
        })(t || (n.ConditionValueType = t = {})),
        (n.OnboardingHookType = o),
        (function (e) {
          (e.Email = "email"),
            (e.SMS = "sms"),
            (e.WorkerSkillGrant = "worker-skill-grant"),
            (e.TagGrant = "tag-grant");
        })(o || (n.OnboardingHookType = o = {}));
    },
    456349: function (e, n, t) {
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.CONDITION_USER_PROPERTIES = n.ConditionType = void 0);
      var o,
        i = t(27320);
      (n.ConditionType = o),
        (function (e) {
          (e.UserProperty = "user-property"),
            (e.StepOutput = "step-output"),
            (e.CatchAll = "catch-all"),
            (e.LoadBalancer = "load-balancer"),
            (e.WorkerSkill = "worker-skill"),
            (e.ResumeMetadata = "resume-metadata"),
            (e.UTM = "utm"),
            (e.QualificationList = "qualification-list");
        })(o || (n.ConditionType = o = {}));
      const r = [
        { prop: "tags", type: i.ConditionValueType.Tag },
        { prop: "utmSource", type: i.ConditionValueType.String },
        { prop: "countryCode", type: i.ConditionValueType.CountryCodes },
        { prop: "usStateCode", type: i.ConditionValueType.USStateCodes },
        { prop: "signupFlow", type: i.ConditionValueType.SignupFlow },
        { prop: "workerSource", type: i.ConditionValueType.WorkerSource },
      ];
      n.CONDITION_USER_PROPERTIES = r;
    },
    585352: function (e, n, t) {
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.TRANSITION_CONDITION_DEFS =
          n.STEP_CONFIG_DEFS =
          n.STEP_TYPE_DEFS =
            void 0);
      var o = t(371116),
        i = t(456349);
      const r = {
        [o.OnboardingStepType.Signup]: "Contributors sign up for an account",
        [o.OnboardingStepType.PhoneVerification]:
          "Contributors verify their account via two-factor authentication with a phone",
        [o.OnboardingStepType.LinkedInConnection]:
          "Contributors connect their LinkedIn profile",
        [o.OnboardingStepType.Persona]:
          "Contributors verify their identity by providing background info to Persona",
        [o.OnboardingStepType.SkillSelection]:
          "Contributors self-report worker skills",
        [o.OnboardingStepType.Course]: "Contributors are served a Scale course",
        [o.OnboardingStepType.Training]:
          "Contributors are served a Scale training",
        [o.OnboardingStepType.JoinSlack]:
          "Contributors are prompted to join the Outlier Slack workspace (only for users migrated from Remo)",
        [o.OnboardingStepType.Dummy]:
          "Dummy step for internal testing -- DO NOT USE in real flows",
        [o.OnboardingStepType.Benchmark]:
          "Contributors are served benchmarks from a project",
        [o.OnboardingStepType.ScheduleInterview]:
          "Contributors schedule an interview with Scale to onboard",
        [o.OnboardingStepType.AsyncInterview]:
          "Contributors answer questions asynchronously to demonstrate skills",
        [o.OnboardingStepType.SkillScreening]:
          "Contributors are screened for specific skills",
        [o.OnboardingStepType.InterviewOutcome]:
          "Await and act on the outcome of an interview",
        [o.OnboardingStepType.LoadBalancer]:
          "Contributors are equally distributed across destination steps",
        [o.OnboardingStepType.AwaitCourseOutcome]:
          "Await and act on the outcome of a course",
        [o.OnboardingStepType.TaskWall]:
          "Contributors must complete the project's task wall",
        [o.OnboardingStepType.TutorialBenchmark]:
          "Contributors must complete the project's tutorial benchmarks",
        [o.OnboardingStepType.BenchmarkWall]:
          "Contributors must complete the project's benchmark wall",
        [o.OnboardingStepType.ResumeCollection]:
          "Contributors must upload their resume for review",
        [o.OnboardingStepType.ResumeScreen]:
          "Contributors must have their resume screened",
        [o.OnboardingStepType.Allocated]:
          "Contributors are allocated to a project",
        [o.OnboardingStepType.JoinCommunity]:
          "Contributors are prompted to join the selected community",
      };
      n.STEP_TYPE_DEFS = r;
      const a = {
        [o.OnboardingStepType.Course]: {
          courseId: "Course to serve to contributors for the step",
          courseTitle: "Course title served on this step, internal use only",
        },
        [o.OnboardingStepType.Training]: {
          trainingFlowId: "Training to serve to contributors for the step",
          trainingTitle:
            "Training title served on this step, internal use only",
          qualificationId: "Qualification identifier, internal use only",
        },
        [o.OnboardingStepType.Benchmark]: {
          workerTeamId:
            "Worker team to which contributor will be assigned to temporarily to get served Benchmarks",
          projectId: "Project from which benchmarks will be served",
          sampleSize:
            "Compute accuracy based on the last sampleSize benchmarks completed",
        },
        [o.OnboardingStepType.ScheduleInterview]: {
          interviewId:
            "Interview config to use when having the contributor schedule the interview",
          finalizeCondition: "At what interview status to continue the step",
        },
        [o.OnboardingStepType.AsyncInterview]: {
          interviewId:
            "Async Interview config to use when having the contributor record their interview",
          finalizeCondition: "At what interview status to continue the step",
        },
        [o.OnboardingStepType.SkillScreening]: {
          screeningConfigId: "Screening config to use for this step",
        },
        [o.OnboardingStepType.InterviewOutcome]: {
          interviewId:
            "Interview config to use when awaiting the outcome of the interview",
        },
        [o.OnboardingStepType.AwaitCourseOutcome]: {
          courseId: "Course to serve to contributors for the step",
          courseTitle: "Course title served on this step, internal use only",
        },
        [o.OnboardingStepType.TaskWall]: {
          projectId: "Project to read task wall status from",
        },
        [o.OnboardingStepType.TutorialBenchmark]: {
          projectId: "Project to read tutorial benchmarks status from",
          reviewLevel: "Review level to check tutorial benchmarks for",
        },
        [o.OnboardingStepType.BenchmarkWall]: {
          projectId: "Project to read benchmark wall status from",
          reviewLevel: "Review level contributor has to pass bm wall for",
        },
        [o.OnboardingStepType.Allocated]: {},
        [o.OnboardingStepType.ResumeScreen]: {
          resumeScreeningConfigId:
            "Resume screening config to use for this step",
        },
        [o.OnboardingStepType.JoinCommunity]: {
          communityType: "Community type to join",
        },
      };
      n.STEP_CONFIG_DEFS = a;
      const s = {
        [i.ConditionType.UserProperty]:
          "Satisfied if the field on the user model matches the expected value",
        [i.ConditionType.StepOutput]:
          "Satisfied if the source step output matches the expected value",
        [i.ConditionType.CatchAll]:
          "Catch-all condition will be triggered if no other transition's conditions from the same source node are met",
        [i.ConditionType.LoadBalancer]:
          "Condition that routes contributors to the destination step with the least contributors",
        [i.ConditionType.WorkerSkill]:
          "Satisfied if worker skill matches on dimension and quality",
        [i.ConditionType.ResumeMetadata]:
          "Satisfied if resume metadata has the expected value for the specified field",
        [i.ConditionType.UTM]:
          "Satisfied if UTM has (one of) the expected value(s) for the specified field",
        [i.ConditionType.QualificationList]:
          "Satisfied if the contributor has not failed the specified qualification list",
      };
      n.TRANSITION_CONDITION_DEFS = s;
    },
    800379: function (e, n, t) {
      Object.defineProperty(n, "__esModule", { value: !0 });
      var o = {};
      n.OnboardingFlowType = void 0;
      var i = d(t(456349));
      Object.keys(i).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(o, e) ||
            (e in n && n[e] === i[e]) ||
            Object.defineProperty(n, e, {
              enumerable: !0,
              get: function () {
                return i[e];
              },
            }));
      });
      var r = d(t(371116));
      Object.keys(r).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(o, e) ||
            (e in n && n[e] === r[e]) ||
            Object.defineProperty(n, e, {
              enumerable: !0,
              get: function () {
                return r[e];
              },
            }));
      });
      var a = d(t(597966));
      Object.keys(a).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(o, e) ||
            (e in n && n[e] === a[e]) ||
            Object.defineProperty(n, e, {
              enumerable: !0,
              get: function () {
                return a[e];
              },
            }));
      });
      var s = d(t(27320));
      Object.keys(s).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(o, e) ||
            (e in n && n[e] === s[e]) ||
            Object.defineProperty(n, e, {
              enumerable: !0,
              get: function () {
                return s[e];
              },
            }));
      });
      var p = d(t(998318));
      Object.keys(p).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(o, e) ||
            (e in n && n[e] === p[e]) ||
            Object.defineProperty(n, e, {
              enumerable: !0,
              get: function () {
                return p[e];
              },
            }));
      });
      var c = d(t(721374));
      Object.keys(c).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(o, e) ||
            (e in n && n[e] === c[e]) ||
            Object.defineProperty(n, e, {
              enumerable: !0,
              get: function () {
                return c[e];
              },
            }));
      });
      var l,
        u = d(t(585352));
      function d(e) {
        if (e && e.__esModule) return e;
        var n = {};
        if (null != e)
          for (var t in e)
            if (Object.prototype.hasOwnProperty.call(e, t)) {
              var o =
                Object.defineProperty && Object.getOwnPropertyDescriptor
                  ? Object.getOwnPropertyDescriptor(e, t)
                  : {};
              o.get || o.set ? Object.defineProperty(n, t, o) : (n[t] = e[t]);
            }
        return (n.default = e), n;
      }
      Object.keys(u).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(o, e) ||
            (e in n && n[e] === u[e]) ||
            Object.defineProperty(n, e, {
              enumerable: !0,
              get: function () {
                return u[e];
              },
            }));
      }),
        (n.OnboardingFlowType = l),
        (function (e) {
          (e.Growth = "growth"), (e.Project = "project");
        })(l || (n.OnboardingFlowType = l = {}));
    },
    721374: function (e, n) {
      Object.defineProperty(n, "__esModule", { value: !0 });
    },
    371116: function (e, n, t) {
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.OnboardingStepStatus =
          n.CanonicalScreeningConfig =
          n.BypassableSteps =
          n.PlatformOnboardingStepToV1QualificationIdMap =
          n.OnboardingStepType =
          n.StepActor =
          n.CanonicalOcpDestination =
          n.DetailPanelTabs =
          n.FlowTerminusDestinationType =
          n.OnboardingFlowNodeType =
            void 0);
      var o,
        i,
        r,
        a,
        s,
        p,
        c = t(234334);
      (n.OnboardingFlowNodeType = o),
        (function (e) {
          (e.Terminus = "terminus"), (e.Step = "step");
        })(o || (n.OnboardingFlowNodeType = o = {})),
        (n.FlowTerminusDestinationType = i),
        (function (e) {
          (e.WorkerTeam = "worker-team"), (e.Flow = "flow"), (e.Noop = "noop");
        })(i || (n.FlowTerminusDestinationType = i = {})),
        (n.DetailPanelTabs = r),
        (function (e) {
          (e.View = "View"), (e.Edit = "Edit");
        })(r || (n.DetailPanelTabs = r = {})),
        (n.CanonicalOcpDestination = a),
        (function (e) {
          (e.GeneralReasoningFailedWorkerTeam =
            "general-reasoning-failed-worker-team"),
            (e.ResumeScreenFailedWorkerTeam =
              "resume-screen-failed-worker-team"),
            (e.ResumeScreenManualReviewWorkerTeam =
              "resume-screen-manual-review-worker-team");
        })(a || (n.CanonicalOcpDestination = a = {})),
        (n.StepActor = s),
        (function (e) {
          (e.Contributor = "contributor"), (e.Operator = "operator");
        })(s || (n.StepActor = s = {})),
        (n.OnboardingStepType = p),
        (function (e) {
          (e.Allocated = "allocated"),
            (e.Signup = "signup"),
            (e.PhoneVerification = "phone-verification"),
            (e.LinkedInConnection = "linkedin-connection"),
            (e.LoadBalancer = "load-balancer"),
            (e.Persona = "persona"),
            (e.SkillSelection = "skill-selection"),
            (e.Course = "course"),
            (e.Training = "training"),
            (e.JoinSlack = "join-slack"),
            (e.JoinCommunity = "join-community"),
            (e.Dummy = "dummy"),
            (e.Benchmark = "benchmark"),
            (e.ScheduleInterview = "schedule-interview"),
            (e.AsyncInterview = "async-interview"),
            (e.SkillScreening = "skill-screening"),
            (e.InterviewOutcome = "interview-outcome"),
            (e.AwaitCourseOutcome = "await-course-outcome"),
            (e.TaskWall = "task-wall"),
            (e.TutorialBenchmark = "tutorial-benchmark"),
            (e.BenchmarkWall = "benchmark-wall"),
            (e.ResumeCollection = "resume-collection"),
            (e.ResumeScreen = "resume-screen");
        })(p || (n.OnboardingStepType = p = {}));
      const l = {
        [p.PhoneVerification]: c.OutlierOnboardingStepsV1.PHONE_VERIFICATION,
        [p.LinkedInConnection]: c.OutlierOnboardingStepsV1.LINKEDIN_CONNECTION,
        [p.SkillSelection]: c.OutlierOnboardingStepsV1.WORKER_SKILLS,
        [p.Persona]: c.OutlierOnboardingStepsV1.PERSONA_VERIFICATION,
        [p.JoinSlack]: c.OutlierOnboardingStepsV1.JOIN_SLACK,
        [p.JoinCommunity]: c.OutlierOnboardingStepsV1.JOIN_COMMUNITY,
        [p.ResumeCollection]: c.OutlierOnboardingStepsV1.RESUME_COLLECTION,
        [p.SkillScreening]: c.OutlierOnboardingStepsV1.SKILL_SCREENING,
      };
      n.PlatformOnboardingStepToV1QualificationIdMap = l;
      const u = new Set([p.Course]);
      var d, g;
      (n.BypassableSteps = u),
        (n.CanonicalScreeningConfig = d),
        (function (e) {
          e.GeneralReasoning = "general-reasoning";
        })(d || (n.CanonicalScreeningConfig = d = {})),
        (n.OnboardingStepStatus = g),
        (function (e) {
          (e.Unstarted = "unstarted"),
            (e.InProgress = "in-progress"),
            (e.Bypassed = "bypassed"),
            (e.Skipped = "skipped"),
            (e.Completed = "completed");
        })(g || (n.OnboardingStepStatus = g = {}));
    },
    998318: function (e, n) {
      Object.defineProperty(n, "__esModule", { value: !0 });
    },
    597966: function (e, n) {
      var t;
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.OutlierOnboardingResultType = void 0),
        (n.OutlierOnboardingResultType = t),
        (function (e) {
          (e.NonApplicable = "non_applicable"),
            (e.Error = "error"),
            (e.InProgress = "in_progress"),
            (e.Completed = "completed"),
            (e.Failed = "failed"),
            (e.Disabled = "disabled"),
            (e.NotStarted = "not_started"),
            (e.Loading = "loading");
        })(t || (n.OutlierOnboardingResultType = t = {}));
    },
    117683: function (e, n, t) {
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.getStepOutputType = function (e, n) {
          switch (e) {
            case r.OnboardingStepType.PhoneVerification:
            case r.OnboardingStepType.Course:
              return ((e) =>
                e &&
                e.type === r.OnboardingStepType.Course &&
                e.courseTitle &&
                e.courseTitle.toLowerCase().includes("resume")
                  ? r.ConditionValueType.ResumeScreenResult
                  : r.ConditionValueType.Boolean)(n);
            case r.OnboardingStepType.LinkedInConnection:
            case r.OnboardingStepType.Training:
            case r.OnboardingStepType.JoinSlack:
            case r.OnboardingStepType.JoinCommunity:
            case r.OnboardingStepType.Persona:
            case r.OnboardingStepType.SkillSelection:
            case r.OnboardingStepType.Dummy:
            case r.OnboardingStepType.Signup:
            case r.OnboardingStepType.LoadBalancer:
            case r.OnboardingStepType.ScheduleInterview:
            case r.OnboardingStepType.AwaitCourseOutcome:
            case r.OnboardingStepType.TaskWall:
            case r.OnboardingStepType.TutorialBenchmark:
            case r.OnboardingStepType.BenchmarkWall:
            case r.OnboardingStepType.ResumeCollection:
            case r.OnboardingStepType.Allocated:
              return r.ConditionValueType.Boolean;
            case r.OnboardingStepType.AsyncInterview:
            case r.OnboardingStepType.InterviewOutcome:
            case r.OnboardingStepType.SkillScreening:
              return r.ConditionValueType.String;
            case r.OnboardingStepType.ResumeScreen:
              return r.ConditionValueType.ResumeScreenResult;
            default:
              throw new Error(`Unknown step type ${e}`);
          }
        }),
        (n.getStepActor = function (e) {
          switch (e) {
            case r.OnboardingStepType.Signup:
            case r.OnboardingStepType.PhoneVerification:
            case r.OnboardingStepType.LinkedInConnection:
            case r.OnboardingStepType.Course:
            case r.OnboardingStepType.Training:
            case r.OnboardingStepType.JoinSlack:
            case r.OnboardingStepType.JoinCommunity:
            case r.OnboardingStepType.Persona:
            case r.OnboardingStepType.SkillSelection:
            case r.OnboardingStepType.Dummy:
            case r.OnboardingStepType.LoadBalancer:
            case r.OnboardingStepType.ScheduleInterview:
            case r.OnboardingStepType.TaskWall:
            case r.OnboardingStepType.TutorialBenchmark:
            case r.OnboardingStepType.BenchmarkWall:
            case r.OnboardingStepType.ResumeCollection:
            case r.OnboardingStepType.Allocated:
              return r.StepActor.Contributor;
            case r.OnboardingStepType.InterviewOutcome:
            case r.OnboardingStepType.AwaitCourseOutcome:
            case r.OnboardingStepType.AsyncInterview:
            case r.OnboardingStepType.SkillScreening:
            case r.OnboardingStepType.ResumeScreen:
              return r.StepActor.Operator;
            default:
              throw new Error(`Unknown step type ${e}`);
          }
        }),
        (n.isStepStatusFinal = function (e) {
          switch (e) {
            case r.OnboardingStepStatus.Unstarted:
            case r.OnboardingStepStatus.InProgress:
              return !1;
            case r.OnboardingStepStatus.Skipped:
            case r.OnboardingStepStatus.Bypassed:
            case r.OnboardingStepStatus.Completed:
              return !0;
            default:
              throw new Error(`Unknown step status ${e}`);
          }
        }),
        (n.stepTypeRequiresConfig = function (e) {
          switch (e) {
            case r.OnboardingStepType.Course:
            case r.OnboardingStepType.Training:
            case r.OnboardingStepType.Benchmark:
            case r.OnboardingStepType.ScheduleInterview:
            case r.OnboardingStepType.AsyncInterview:
            case r.OnboardingStepType.SkillScreening:
            case r.OnboardingStepType.InterviewOutcome:
            case r.OnboardingStepType.AwaitCourseOutcome:
            case r.OnboardingStepType.TaskWall:
            case r.OnboardingStepType.TutorialBenchmark:
            case r.OnboardingStepType.BenchmarkWall:
            case r.OnboardingStepType.ResumeScreen:
            case r.OnboardingStepType.JoinCommunity:
              return !0;
            case r.OnboardingStepType.Signup:
            case r.OnboardingStepType.PhoneVerification:
            case r.OnboardingStepType.LinkedInConnection:
            case r.OnboardingStepType.JoinSlack:
            case r.OnboardingStepType.Persona:
            case r.OnboardingStepType.SkillSelection:
            case r.OnboardingStepType.LoadBalancer:
            case r.OnboardingStepType.Dummy:
            case r.OnboardingStepType.Allocated:
            case r.OnboardingStepType.ResumeCollection:
              return !1;
            default:
              throw new Error(`Unknown step type ${e}`);
          }
        }),
        (n.getFlowSteps = function (e) {
          return e.nodes.filter(
            (e) => e.type === r.OnboardingFlowNodeType.Step
          );
        }),
        (n.getNode = function (e, n) {
          return e.nodes.find((e) => e.name === n) || null;
        }),
        (n.serializeFlow = function (e) {
          return { ...e, _id: e._id.toString() };
        }),
        (n.serializeDraftFlow = function (e) {
          return {
            ...e,
            _id: e._id.toString(),
            originalFlowId: e.originalFlowId.toString(),
          };
        }),
        (n.makeEdgeIndex = function (e) {
          const n = {};
          for (const t of e.edges)
            n[t.sourceNode] || (n[t.sourceNode] = []), n[t.sourceNode].push(t);
          return n;
        }),
        (n.getRootStepForOnboardingFlow = async function (e) {
          if (!e || !e.nodes)
            throw new Error("No onboarding flow to get root step for");
          const n = new Set();
          for (const t of e.edges) n.add(t.destNode);
          if (n.size !== e.nodes.length - 1)
            throw new Error(
              "Onboarding flow " + e._id + " does not have one single root node"
            );
          for (const t of e.nodes) if (!n.has(t.name)) return t;
          throw new Error(
            "Could not find root node for onboarding flow " + e._id
          );
        }),
        (n.shouldShowOnboarding = function ({ result: e }) {
          switch (e) {
            case r.OutlierOnboardingResultType.Error:
            case r.OutlierOnboardingResultType.InProgress:
            case r.OutlierOnboardingResultType.Loading:
              return !0;
            case r.OutlierOnboardingResultType.NonApplicable:
            case r.OutlierOnboardingResultType.Completed:
            default:
              return !1;
          }
        }),
        (n.getEdgeCode = function (e) {
          return e.sourceNode + "->" + e.destNode;
        }),
        (n.getEdgeCodeFromSteps = function (e, n) {
          return e + "->" + n;
        }),
        (n.isCourseStepConfig = function (e) {
          return !!e && e.type === r.OnboardingStepType.Course;
        }),
        (n.isTrainingStepConfig = function (e) {
          return !!e && e.type === r.OnboardingStepType.Training;
        }),
        (n.isAwaitCourseOutcomeStepConfig = function (e) {
          return !!e && e.type === r.OnboardingStepType.AwaitCourseOutcome;
        }),
        (n.isBenchmarkAccuracyStepConfig = function (e) {
          return !!e && e.type === r.OnboardingStepType.Benchmark;
        }),
        (n.isScheduleInterviewStepConfig = function (e) {
          return !!e && e.type === r.OnboardingStepType.ScheduleInterview;
        }),
        (n.isAsyncInterviewStepConfig = function (e) {
          return !!e && e.type === r.OnboardingStepType.AsyncInterview;
        }),
        (n.isSkillScreeningStepConfig = function (e) {
          return !!e && e.type === r.OnboardingStepType.SkillScreening;
        }),
        (n.isInterviewOutcomeStepConfig = function (e) {
          return !!e && e.type === r.OnboardingStepType.InterviewOutcome;
        }),
        (n.isTaskWallStepConfig = function (e) {
          return !!e && e.type === r.OnboardingStepType.TaskWall;
        }),
        (n.isTutorialBenchmarkStepConfig = function (e) {
          return !!e && e.type === r.OnboardingStepType.TutorialBenchmark;
        }),
        (n.isBenchmarkWallStepConfig = function (e) {
          return !!e && e.type === r.OnboardingStepType.BenchmarkWall;
        }),
        (n.isAllocatedStepConfig = function (e) {
          return !!e && e.type === r.OnboardingStepType.Allocated;
        }),
        (n.isResumeScreenStepConfig = function (e) {
          return !!e && e.type === r.OnboardingStepType.ResumeScreen;
        }),
        (n.isJoinCommunityStepConfig = function (e) {
          return !!e && e.type === r.OnboardingStepType.JoinCommunity;
        }),
        (n.isStepBypassable = async function (e) {
          return r.BypassableSteps.has(e);
        }),
        (n.isDefaultFallback = function (e) {
          return (
            1 === e.conditions.length &&
            e.conditions[0].type === r.ConditionType.CatchAll
          );
        }),
        (n.getTopologicallySortedNodesFromFlow = function (e) {
          const { nodes: n, edges: t } = e,
            o = [],
            i = new Set(),
            r = (e) => {
              if (i.has(e)) return;
              i.add(e);
              const a = n.find((n) => n.name === e);
              if (!a) return;
              t.filter((n) => n.sourceNode === e).forEach((e) => r(e.destNode)),
                o.push(a);
            };
          return n.forEach((e) => r(e.name)), o.reverse();
        }),
        (n.ParseDuration = function (e) {
          const n = parseInt(e, 10),
            t = a.default.duration(n, "minutes");
          let o = "";
          t.asDays() >= 1 &&
            (o += `${Math.floor(t.asDays())} day${
              Math.floor(t.asDays()) > 1 ? "s" : ""
            } `);
          t.hours() > 0 && (o += `${t.hours()} hr `);
          t.minutes() > 0 && (o += `${t.minutes()} min`);
          return (o = o.trim()), o;
        }),
        (n.composeSignupFlowRequestBody =
          n.getNewFlowStarterConfig =
          n.RESUME_SCREEN_MANUAL_REVIEW_NODE_NAME =
          n.RESUME_SCREEN_FAILED_NODE_NAME =
          n.PERSONA_FAILED_WT_ID =
          n.VALID_TRIGGER_NODE_TYPES =
            void 0);
      var o,
        i = t(599789),
        r = t(800379),
        a = (o = t(161320)) && o.__esModule ? o : { default: o },
        s = t(167469);
      const p = [
        r.OnboardingStepType.Signup,
        r.OnboardingStepType.PhoneVerification,
        r.OnboardingStepType.LinkedInConnection,
        r.OnboardingStepType.Persona,
        r.OnboardingStepType.SkillSelection,
        r.OnboardingStepType.Course,
        r.OnboardingStepType.Training,
        r.OnboardingStepType.JoinSlack,
        r.OnboardingStepType.JoinCommunity,
        r.OnboardingStepType.Dummy,
        r.OnboardingStepType.ScheduleInterview,
        r.OnboardingStepType.AsyncInterview,
        r.OnboardingStepType.SkillScreening,
        r.OnboardingStepType.InterviewOutcome,
        r.OnboardingStepType.AwaitCourseOutcome,
      ];
      n.VALID_TRIGGER_NODE_TYPES = p;
      const c = "65a98319daa24011ec5051e9";
      n.PERSONA_FAILED_WT_ID = c;
      const l = "Resume Screen Failed";
      n.RESUME_SCREEN_FAILED_NODE_NAME = l;
      const u = "Resume Screen Human Review + Catch All";
      n.RESUME_SCREEN_MANUAL_REVIEW_NODE_NAME = u;
      n.getNewFlowStarterConfig = () => ({
        _id: "",
        name: `New Flow ${a.default(Date.now()).format("YYYY-MM-DD HH:mm")}`,
        version: -1,
        originalFlowId: "",
        isActive: !1,
        freeEdit: !1,
        nodes: [
          {
            stepType: r.OnboardingStepType.Signup,
            name: "Signup",
            externalName: "Signup",
            type: r.OnboardingFlowNodeType.Step,
          },
          {
            stepType: r.OnboardingStepType.PhoneVerification,
            name: "Phone Verification",
            externalName: "Phone Verification",
            type: r.OnboardingFlowNodeType.Step,
          },
          {
            stepType: r.OnboardingStepType.Persona,
            name: "Persona",
            externalName: "Persona",
            type: r.OnboardingFlowNodeType.Step,
          },
          {
            stepType: r.OnboardingStepType.ResumeCollection,
            name: "Resume Collection",
            externalName: "Resume Upload",
            type: r.OnboardingFlowNodeType.Step,
          },
          {
            stepType: r.OnboardingStepType.ResumeScreen,
            name: "Resume Screen",
            externalName: "Resume Processing",
            type: r.OnboardingFlowNodeType.Step,
            config: { type: r.OnboardingStepType.ResumeScreen },
          },
          {
            type: r.OnboardingFlowNodeType.Terminus,
            name: l,
            destinationType: r.FlowTerminusDestinationType.WorkerTeam,
            canonicalDestination:
              r.CanonicalOcpDestination.ResumeScreenFailedWorkerTeam,
            success: !1,
          },
          {
            type: r.OnboardingFlowNodeType.Terminus,
            name: u,
            destinationType: r.FlowTerminusDestinationType.WorkerTeam,
            canonicalDestination:
              r.CanonicalOcpDestination.ResumeScreenManualReviewWorkerTeam,
            success: !0,
          },
          {
            stepType: r.OnboardingStepType.SkillSelection,
            name: "Skill Selection",
            externalName: "Skill Selection",
            type: r.OnboardingFlowNodeType.Step,
          },
          {
            stepType: r.OnboardingStepType.SkillScreening,
            name: "General Reasoning Assessment",
            externalName: "General Reasoning Assessment (~12 mins)",
            externalDescription:
              "To ensure we can match you with a project on Outlier, we need to assess your English comprehension and justification skills. This will consist of short multiple choice, open text, and video questions.",
            type: r.OnboardingFlowNodeType.Step,
            config: {
              type: r.OnboardingStepType.SkillScreening,
              canonicalScreeningConfig:
                r.CanonicalScreeningConfig.GeneralReasoning,
            },
            disableDefaultFallbackValidation: !0,
          },
          {
            stepType: r.OnboardingStepType.JoinCommunity,
            name: "Join Community",
            externalName: "Join Community",
            type: r.OnboardingFlowNodeType.Step,
            config: {
              type: r.OnboardingStepType.JoinCommunity,
              communityType: i.CommunityType.Discourse,
            },
          },
          {
            stepType: r.OnboardingStepType.Dummy,
            name: "Custom Node",
            type: r.OnboardingFlowNodeType.Step,
          },
          {
            type: r.OnboardingFlowNodeType.Terminus,
            name: "Persona Failed",
            destinationType: r.FlowTerminusDestinationType.WorkerTeam,
            destinationId: c,
            success: !1,
          },
          {
            type: r.OnboardingFlowNodeType.Terminus,
            name: "General Reasoning Failed",
            destinationType: r.FlowTerminusDestinationType.WorkerTeam,
            canonicalDestination:
              r.CanonicalOcpDestination.GeneralReasoningFailedWorkerTeam,
            success: !1,
          },
        ],
        edges: [
          {
            name: "Signup -> Phone Verification",
            sourceNode: "Signup",
            destNode: "Phone Verification",
            conditions: [{ type: r.ConditionType.CatchAll }],
          },
          {
            name: "Phone Verification -> Persona",
            sourceNode: "Phone Verification",
            destNode: "Persona",
            conditions: [{ type: r.ConditionType.CatchAll }],
          },
          {
            name: "Persona -> Resume Collection",
            sourceNode: "Persona",
            destNode: "Resume Collection",
            conditions: [
              {
                type: r.ConditionType.StepOutput,
                value: { type: r.ConditionValueType.Boolean, value: !0 },
              },
            ],
          },
          {
            name: "Persona -> Persona Failed",
            sourceNode: "Persona",
            destNode: "Persona Failed",
            conditions: [
              {
                type: r.ConditionType.StepOutput,
                value: { type: r.ConditionValueType.Boolean, value: !1 },
              },
            ],
          },
          {
            name: "Resume Collection -> Resume Screen",
            sourceNode: "Resume Collection",
            destNode: "Resume Screen",
            conditions: [{ type: r.ConditionType.CatchAll }],
          },
          {
            name: "Resume Screen -> Resume Screen Failed",
            sourceNode: "Resume Screen",
            destNode: l,
            conditions: [
              {
                type: r.ConditionType.StepOutput,
                value: {
                  type: r.ConditionValueType.ResumeScreenResult,
                  value: s.ResumeScreeningResult.Fail,
                },
              },
            ],
          },
          {
            name: "Resume Screen -> Resume Screen Human Review + Catch All",
            sourceNode: "Resume Screen",
            destNode: u,
            conditions: [{ type: r.ConditionType.CatchAll }],
          },
          {
            name: "Resume Screen -> Skill Selection",
            sourceNode: "Resume Screen",
            destNode: "Skill Selection",
            conditions: [
              {
                type: r.ConditionType.StepOutput,
                value: {
                  type: r.ConditionValueType.ResumeScreenResult,
                  value: s.ResumeScreeningResult.Pass,
                },
              },
            ],
          },
          {
            name: "Skill Selection -> General Reasoning Assessment",
            sourceNode: "Skill Selection",
            destNode: "General Reasoning Assessment",
            conditions: [{ type: r.ConditionType.CatchAll }],
          },
          {
            name: "General Reasoning Assessment -> Join Community",
            sourceNode: "General Reasoning Assessment",
            destNode: "Join Community",
            conditions: [
              {
                type: r.ConditionType.StepOutput,
                value: { type: r.ConditionValueType.String, value: "Passed" },
              },
            ],
          },
          {
            name: "General Reasoning Assessment -> General Reasoning Failed",
            sourceNode: "General Reasoning Assessment",
            destNode: "General Reasoning Failed",
            conditions: [
              {
                type: r.ConditionType.StepOutput,
                value: { type: r.ConditionValueType.String, value: "Failed" },
              },
            ],
          },
          {
            name: "Join Community -> Custom Node",
            sourceNode: "Join Community",
            destNode: "Custom Node",
            conditions: [{ type: r.ConditionType.CatchAll }],
          },
        ],
      });
      n.composeSignupFlowRequestBody = (e, n) => ({
        name: e.name || "",
        workerSource: e.workerSource?.length ? e.workerSource : void 0,
        onboardingFlow: n,
        tags: e.tags?.map((e) => e.value) ?? [],
        requiresWhitelistedEmail: e.requiresWhitelistedEmail ?? !1,
        emails: e.emails,
        useWhitelistRegex: !!e.whitelistRegex?.regex?.length,
        whitelistRegex:
          (!!e.whitelistRegex?.regex?.length && {
            regex: e.whitelistRegex.regex,
            flags: e.whitelistRegex.flags ?? "",
          }) ||
          void 0,
        whitelistGreenhouseJobIds: e.whitelistGreenhouseJobIds,
        whitelistGreenhouseJobStageNames: e.whitelistGreenhouseJobStageNames,
        allowlistCountryCodes: e.allowlistCountryCodes?.sort(),
        destinationType: s.SignupFlowDestinationType.OnboardingFlow,
        active: !!n && e.active,
        workerSkillGrant:
          (e.workerSkillGrant?.workerSkillId &&
            e.workerSkillGrant?.status && {
              workerSkillId: e.workerSkillGrant.workerSkillId,
              status: e.workerSkillGrant.status,
            }) ||
          void 0,
      });
    },
    720351: function (e, n, t) {
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.validateTerminalNodeConfigs = c),
        (n.validateFlowStructure = function (e) {
          const n = e.edges,
            t = new Set(n.map((e) => e.sourceNode)),
            o = new Set(n.map((e) => e.destNode)),
            p = new Set(e.nodes.map((e) => e.name)),
            l = r.getFlowSteps(e),
            u = e.nodes
              .filter((e) => e.type === r.OnboardingFlowNodeType.Terminus)
              .map((e) => e),
            d = r.makeEdgeIndex(e),
            g = l
              .filter((e) => !t.has(e.name))
              .map((e) => ({
                type: i.FlowStructure,
                message: `Step ${e.name} has no transitions`,
              })),
            y = n
              .filter(({ conditions: e }) => 0 === e.length)
              .map(({ name: e }) => ({
                type: i.FlowStructure,
                message: `Transition ${e} has no conditions`,
              })),
            S = n
              .filter(
                ({ sourceNode: e, destNode: n }) => !p.has(n) || !p.has(e)
              )
              .map(({ name: e }) => ({
                type: i.FlowStructure,
                message: `Transition ${e} has dest or source missing`,
              })),
            m = u
              .filter((e) => d[e.name])
              .map((e) => ({
                type: i.FlowStructure,
                message: `Terminal node ${e.name} should have no transitions`,
              })),
            f = new Set([...p].filter((e) => !o.has(e))),
            T = [];
          1 !== f.size &&
            T.push({
              type: i.FlowStructure,
              message: `Flow should have exactly one root step, found ${f.size}`,
            });
          const O = u
              .filter((e) => !f.has(e.name))
              .filter((e) => !o.has(e.name))
              .map((e) => ({
                type: i.FlowStructure,
                message: `Terminal node ${e.name} is unreachable`,
              })),
            b = (function (e) {
              const n = [],
                t = {};
              for (const o of e)
                for (const e of o.conditions)
                  e.type === r.ConditionType.CatchAll &&
                    (o.conditions.length > 1 &&
                      n.push({
                        type: i.FlowStructure,
                        message: `Transition ${o.name} has a catch-all condition with other conditions`,
                      }),
                    t[o.sourceNode] || (t[o.sourceNode] = 0),
                    t[o.sourceNode]++);
              for (const o in t)
                t[o] > 1 &&
                  n.push({
                    type: i.FlowStructure,
                    message: `Node ${o} has multiple catch-all conditions`,
                  });
              return n;
            })(n),
            h = (function (e, n) {
              const t = new Set(
                  n
                    .filter((e) => e.type === r.OnboardingFlowNodeType.Terminus)
                    .map((e) => e.name)
                ),
                o = [],
                a = new Map(),
                s = new Set();
              let p = !1;
              function c(n, r) {
                if (t.has(n)) return !0;
                if (r.has(n))
                  return (
                    p ||
                      (o.push({
                        type: i.FlowStructure,
                        message: `Cycle detected at node ${n}`,
                      }),
                      (p = !0)),
                    !1
                  );
                if (a.has(n)) return a.get(n);
                r.add(n);
                let s = !0;
                const l = e[n] || [];
                if (0 !== l.length || t.has(n)) {
                  for (const e of l)
                    if (!c(e.destNode, new Set(r))) {
                      s = !1;
                      break;
                    }
                } else s = !1;
                return a.set(n, s), s;
              }
              for (const l of n)
                s.clear(),
                  l.type === r.OnboardingFlowNodeType.Terminus ||
                    c(l.name, s) ||
                    o.some((e) =>
                      e.message.includes(`Cycle detected at node ${l.name}`)
                    ) ||
                    o.push({
                      type: i.FlowStructure,
                      message: `Not all paths from node ${l.name} lead to a terminal node`,
                    });
              return o;
            })(d, e.nodes),
            w = s.default.groupBy(e.nodes, (e) => e.name),
            C = Object.entries(w)
              .filter(([e, n]) => n.length > 1)
              .map(([e, n]) => ({
                type: i.FlowStructure,
                message: `Node name ${e} is not unique`,
              })),
            v = s.default.groupBy(e.edges, (e) => e.name),
            k = Object.entries(v)
              .filter(([e, n]) => n.length > 1)
              .map(([e, n]) => ({
                type: i.FlowStructure,
                message: `Edge name ${e} is not unique`,
              })),
            I = Object.keys(w)
              .filter((e) => e in v)
              .map((e) => ({
                type: i.FlowStructure,
                message: `Node name ${e} has the same name as an edge`,
              })),
            N = l.flatMap((e) =>
              e.disableDefaultFallbackValidation
                ? []
                : (function (e, n) {
                    if (e.stepType === r.OnboardingStepType.LoadBalancer)
                      return [];
                    if (
                      r.getStepOutputType(e.stepType) ===
                      r.ConditionValueType.Boolean
                    ) {
                      if (!n.every(({ conditions: e }) => 1 === e.length))
                        return n.some(r.isDefaultFallback)
                          ? []
                          : [
                              {
                                type: i.FlowStructure,
                                message: `Should have at least one Default Fallback transition coming out of step ${e.name}`,
                              },
                            ];
                      const t = new Set([!0, !1]);
                      for (const e of n) {
                        const n = e.conditions[0];
                        n.type === r.ConditionType.StepOutput &&
                        n.value.type === r.ConditionValueType.Boolean
                          ? t.delete(n.value.value)
                          : n.type === r.ConditionType.CatchAll && t.clear();
                      }
                      return t.size > 0
                        ? [
                            {
                              type: i.FlowStructure,
                              message: `${e.name} needs a default fallback transition`,
                            },
                          ]
                        : [];
                    }
                    return n.some(r.isDefaultFallback)
                      ? []
                      : [
                          {
                            type: i.FlowStructure,
                            message: `Should have at least one Default Fallback transition coming out of step ${e.name}`,
                          },
                        ];
                  })(e, d[e.name] || [])
            ),
            R = (function (e) {
              const n = e
                  .filter(
                    (e) => r.stepTypeRequiresConfig(e.stepType) && !e.config
                  )
                  .map((e) => ({
                    type: i.StepConfig,
                    message: `Step ${e.name} is missing a config`,
                  })),
                t = e
                  .filter(
                    (e) =>
                      r.stepTypeRequiresConfig(e.stepType) &&
                      e.config &&
                      e.stepType !== e.config.type
                  )
                  .map((e) => ({
                    type: i.StepConfig,
                    message: `Step ${e.name} has a config of type ${e.config.type} but is expected to have a config of type ${e.stepType}`,
                  })),
                o = e
                  .filter((e) => !!e.config)
                  .flatMap((e) => {
                    switch (e.config.type) {
                      case r.OnboardingStepType.Course:
                        return e.config.courseId
                          ? []
                          : [
                              {
                                type: i.StepConfig,
                                message: `Step ${e.name} has a course config with missing courseId`,
                              },
                            ];
                      case r.OnboardingStepType.Training:
                        return e.config.trainingFlowId
                          ? []
                          : [
                              {
                                type: i.StepConfig,
                                message: `Step ${e.name} has a training config with missing trainingFlowId`,
                              },
                            ];
                      case r.OnboardingStepType.ScheduleInterview: {
                        const n = e.config,
                          t = [];
                        return (
                          n.interviewId ||
                            t.push({
                              type: i.StepConfig,
                              message: `Step ${e.name} has a schedule interview config with missing interviewId`,
                            }),
                          [
                            a.InterviewStatus.Scheduled,
                            a.InterviewStatus.Completed,
                          ].includes(n.finalizeCondition) ||
                            t.push({
                              type: i.StepConfig,
                              message: `Step ${e.name} has a schedule interview config with invalid finalizeCondition`,
                            }),
                          t
                        );
                      }
                      case r.OnboardingStepType.AsyncInterview: {
                        const n = e.config,
                          t = [];
                        return (
                          n.interviewId ||
                            t.push({
                              type: i.StepConfig,
                              message: `Step ${e.name} has an async interview config with missing interviewId`,
                            }),
                          [
                            a.InterviewStatus.ReviewRequired,
                            a.InterviewStatus.Completed,
                          ].includes(n.finalizeCondition) ||
                            t.push({
                              type: i.StepConfig,
                              message: `Step ${e.name} has an async interview config with invalid finalizeCondition`,
                            }),
                          t
                        );
                      }
                      case r.OnboardingStepType.SkillScreening: {
                        const n = e.config,
                          t = [];
                        return (
                          n.screeningConfigId ||
                            n.canonicalScreeningConfig ||
                            t.push({
                              type: i.StepConfig,
                              message: `Step ${e.name} has an skill screening config with missing screeningConfigId`,
                            }),
                          t
                        );
                      }
                      default:
                        return [];
                    }
                  });
              return [...n, ...t, ...o];
            })(l),
            _ = c(u),
            F = (function (e) {
              const n = [],
                t = e.nodes.filter(
                  (e) =>
                    e.type === r.OnboardingFlowNodeType.Step &&
                    e.stepType === r.OnboardingStepType.LoadBalancer
                ),
                o = e.edges.filter((e) =>
                  t.some((n) => n.name === e.sourceNode)
                );
              for (const a of o)
                (1 === a.conditions.length &&
                  a.conditions[0].type === r.ConditionType.LoadBalancer) ||
                  n.push({
                    type: i.StepConfig,
                    message: `Edge ${a.name} from Load Balancer step ${a.sourceNode} should only have one condition and be of type load balancer`,
                  });
              for (const r of t) {
                const e = o.filter((e) => e.sourceNode === r.name),
                  t = e.map((e) => {
                    const n = e.conditions[0];
                    return s.default.isUndefined(n.percentage)
                      ? "capacity"
                      : "percentage";
                  }),
                  a = new Set(t);
                if (1 === a.size)
                  if (a.has("capacity"))
                    e.some((e) => void 0 === e.conditions[0].capacity) ||
                      n.push({
                        type: i.StepConfig,
                        message: `Load Balancer step ${r.name} should have at least one edge with no capacity`,
                      });
                  else {
                    const t = e
                      .map((e) => e.conditions[0].percentage)
                      .reduce((e, n) => e + n, 0);
                    100 !== parseFloat(t.toFixed(6)) &&
                      n.push({
                        type: i.StepConfig,
                        message: `Load Balancer step ${r.name} should have edges with percentages adding up to 100`,
                      });
                  }
                else
                  n.push({
                    type: i.StepConfig,
                    message: `Load Balancer step ${r.name} should have edges of exclusively percentage or capacity type`,
                  });
              }
              return n;
            })(e),
            P = (function (e) {
              const n = r
                  .getTopologicallySortedNodesFromFlow(e)
                  .filter(
                    (e) =>
                      e.type === r.OnboardingFlowNodeType.Step &&
                      (e.stepType === r.OnboardingStepType.ScheduleInterview ||
                        e.stepType === r.OnboardingStepType.InterviewOutcome ||
                        e.stepType === r.OnboardingStepType.AsyncInterview)
                  ),
                t = new Set(),
                o = new Set(),
                a = [];
              for (const s of n) {
                const e = s.config?.interviewId;
                e
                  ? (s.stepType === r.OnboardingStepType.ScheduleInterview
                      ? (t.has(e) &&
                          a.push({
                            type: i.StepConfig,
                            message: `There are multiple schedule-interview steps with the same interviewID ${e}`,
                          }),
                        t.add(e))
                      : s.stepType === r.OnboardingStepType.AsyncInterview &&
                        (o.has(e) &&
                          a.push({
                            type: i.StepConfig,
                            message: `There are multiple async-interview steps with the same interviewID ${e}`,
                          }),
                        o.add(e)),
                    s.stepType === r.OnboardingStepType.InterviewOutcome &&
                      (t.has(e) ||
                        a.push({
                          type: i.StepConfig,
                          message: `There is no corresponding schedule-interview step for the interview-outcome ${s.name} with interviewID ${e}`,
                        }),
                      t.delete(e)))
                  : a.push({
                      type: i.StepConfig,
                      message: `Interview step ${s.name} is missing an interviewID`,
                    });
              }
              t.size > 0 &&
                a.push({
                  type: i.StepConfig,
                  message: `schedule-interview steps with these config ids do not have a corresponding interview-outcome step: ${Array.from(
                    t
                  ).join(", ")}`,
                });
              return a;
            })(e),
            E = (function (e) {
              const n = [],
                t = r
                  .getTopologicallySortedNodesFromFlow(e)
                  .filter(
                    (e) =>
                      e.type === r.OnboardingFlowNodeType.Step &&
                      e.stepType === r.OnboardingStepType.SkillScreening
                  ),
                o = new Set();
              for (const r of t) {
                const e = r.config,
                  t = e.screeningConfigId;
                t || e.canonicalScreeningConfig
                  ? o.has(e.canonicalScreeningConfig ?? t)
                    ? n.push({
                        type: i.StepConfig,
                        message: `There are multiple screening steps with the same screeningID ${t}`,
                      })
                    : o.add(e.canonicalScreeningConfig ?? t)
                  : n.push({
                      type: i.StepConfig,
                      message: `Screening step ${r.name} is missing an screeningConfigID`,
                    });
              }
              return n;
            })(e),
            A = (function (e) {
              const n = [],
                t = new Set();
              function o(a, s = !1, p = new Set()) {
                if (!p.has(a.name)) {
                  if (
                    (p.add(a.name),
                    a.stepType === r.OnboardingStepType.ResumeCollection &&
                      (s = !0),
                    a.stepType === r.OnboardingStepType.ResumeScreen)
                  ) {
                    s ||
                      n.push({
                        type: i.StepConfig,
                        message: `No resume collection step before resume screen step ${a.name}`,
                      });
                    const e = a.config?.resumeScreeningConfigId;
                    e &&
                      (t.has(e)
                        ? n.push({
                            type: i.StepConfig,
                            message: `There are multiple resume screen steps with the same resume screen ID ${e}`,
                          })
                        : t.add(e));
                  }
                  for (const n of e.edges)
                    if (n.sourceNode === a.name) {
                      o(
                        e.nodes.find((e) => e.name === n.destNode),
                        s,
                        p
                      );
                    }
                }
              }
              const a = r.getTopologicallySortedNodesFromFlow(e);
              return (
                o(a.filter((e) => e.type === r.OnboardingFlowNodeType.Step)[0]),
                n
              );
            })(e);
          return [
            ...g,
            ...b,
            ...O,
            ...y,
            ...S,
            ...h,
            ...m,
            ...T,
            ...C,
            ...I,
            ...k,
            ...N,
            ...R,
            ..._,
            ...F,
            ...P,
            ...E,
            ...A,
          ];
        }),
        (n.FlowValidationErrorType = void 0);
      var o,
        i,
        r = t(810377),
        a = t(355519),
        s = (o = t(298784)) && o.__esModule ? o : { default: o },
        p = t(742988);
      function c(e) {
        return e.flatMap((e) =>
          e.destinationId
            ? p.OUTLIER_TNS_FRAUD_WORKER_TEAM_IDS.includes(e.destinationId)
              ? [
                  {
                    type: i.TerminusConfig,
                    message: `Terminal node ${e.name} may not have a fraud holding worker team as destination`,
                  },
                ]
              : []
            : e.canonicalDestination ||
              e.destinationType === r.FlowTerminusDestinationType.Noop
            ? []
            : [
                {
                  type: i.TerminusConfig,
                  message: `Terminal node ${e.name} is missing a destinationId`,
                },
              ]
        );
      }
      (n.FlowValidationErrorType = i),
        (function (e) {
          (e.StepConfig = "step-config"),
            (e.TerminusConfig = "terminus-config"),
            (e.FlowStructure = "flow-structure");
        })(i || (n.FlowValidationErrorType = i = {}));
    },
  },
]);
