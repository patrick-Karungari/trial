(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [15342, 55739],
  {
    371954: function (d, u, e) {
      var o = e(911873).default;
      function f(d) {
        if ("function" !== typeof WeakMap) return null;
        var u = new WeakMap(),
          e = new WeakMap();
        return (f = function (d) {
          return d ? e : u;
        })(d);
      }
      (d.exports = function (d, u) {
        if (!u && d && d.__esModule) return d;
        if (null === d || ("object" !== o(d) && "function" !== typeof d))
          return { default: d };
        var e = f(u);
        if (e && e.has(d)) return e.get(d);
        var t = {},
          n = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var c in d)
          if ("default" !== c && Object.prototype.hasOwnProperty.call(d, c)) {
            var a = n ? Object.getOwnPropertyDescriptor(d, c) : null;
            a && (a.get || a.set)
              ? Object.defineProperty(t, c, a)
              : (t[c] = d[c]);
          }
        return (t.default = d), e && e.set(d, t), t;
      }),
        (d.exports.__esModule = !0),
        (d.exports.default = d.exports);
    },
    628746: function (d, u, e) {
      "use strict";
      u.s7 = u.FR = void 0;
      var o = c(e(298784)),
        f = c(e(161320)),
        t = c(e(951154)),
        n = e(599789);
      function c(d) {
        return d && d.__esModule ? d : { default: d };
      }
      const a = (d) =>
        d.hyperwalletBankAccountToken
          ? d.hyperwalletBankAccountToken
          : d.hyperwalletPaypalToken
          ? d.hyperwalletPaypalToken
          : d.paypalEmail
          ? d.paypalEmail
          : d.airtmEmail
          ? d.airtmEmail
          : void 0;
      function s(d) {
        return (function (d) {
          return d && "object" === typeof d && "_id" in d;
        })(d)
          ? d._id.toString()
          : d.toString();
      }
      u.FR = a;
      u.s7 = (d) =>
        !(d?.tags?.map(s) ?? []).includes(n.TEST_ACCOUNT_TAG_ID) &&
        !d.isCorporateUser &&
        d.workerSource !== n.WorkerSource.ScaleAPI &&
        !!d.genAiTasker &&
        (void 0 === d.workerSource ||
          d.workerSource === n.WorkerSource.Crowd ||
          d.workerSource === n.WorkerSource.CrowdExperiment) &&
        void 0 === a(d);
    },
    504456: function (d, u, e) {
      "use strict";
      Object.defineProperty(u, "__esModule", { value: !0 }),
        Object.defineProperty(u, "RemoAdminTool", {
          enumerable: !0,
          get: function () {
            return n.RemoAdminTool;
          },
        }),
        (u.isFTEOrContractorEmail =
          u.dataModeDefinitions =
          u.checkDataScope =
          u.getDefaultPersona =
          u.checkRemoAdminToolPermission =
          u.containsProject =
          u.containsTools =
          u.getToolSet =
          u.getAllowedToolsForDataMode =
          u.getToolLabel =
          u.getLabelFor =
          u.isDefaultTool =
          u.dataModeClearsOtherTools =
          u.getToolsForDataMode =
          u.tlTools =
          u.tsmTools =
          u.defaultTools =
          u.remoAdminLookupTools =
          u.permissionsOfLookupType =
          u.RemoAdminLookupType =
          u.RemoAdminToolType =
          u.RemoAdminPersonaHistoryActionType =
          u.isRemoAdminSelfServe =
          u.DefaultDataScope =
          u.RemoAdminPersonaDataScope =
          u.ProjectActionTools =
          u.globalTools =
          u.getToolCategory =
          u.RemoAdminToolCategory =
            void 0);
      var o,
        f,
        t = (o = e(298784)) && o.__esModule ? o : { default: o },
        n = e(167469);
      (u.RemoAdminToolCategory = f),
        (function (d) {
          (d.Pay = "pay"),
            (d.Quality = "quality"),
            (d.Other = "other"),
            (d.Fraud = "fraud");
        })(f || (u.RemoAdminToolCategory = f = {}));
      const c = new Set([
          n.RemoAdminTool.BatchDownloadPayoutConfigs,
          n.RemoAdminTool.BatchUploadPayoutConfigs,
          n.RemoAdminTool.CreateOrUpdatePaymentAmounts,
          n.RemoAdminTool.RecalculateWorkAndPayouts,
          n.RemoAdminTool.WorkSubmissionPayRecalculation,
          n.RemoAdminTool.UpdatePaymentStatus,
        ]),
        a = new Set([
          n.RemoAdminTool.SendTasksToCustomer,
          n.RemoAdminTool.LookupAnyUser,
          n.RemoAdminTool.LookupCorpUser,
          n.RemoAdminTool.LookupCustomer,
          n.RemoAdminTool.LookupRemoAdmin,
          n.RemoAdminTool.SpoofTasker,
        ]),
        s = new Set([
          n.RemoAdminTool.FraudCenter,
          n.RemoAdminTool.MassBan,
          n.RemoAdminTool.MassUnban,
        ]),
        r = new Set(
          Object.entries(n.RemoAdminTool)
            .filter(([d, u]) => !c.has(u) && !a.has(u) && !s.has(u))
            .map(([d, u]) => u)
        ),
        i = { [f.Pay]: c, [f.Quality]: a, [f.Other]: r, [f.Fraud]: s },
        l = Object.values(f),
        m = Object.fromEntries(
          Object.values(n.RemoAdminTool).map((d) => {
            const u = l.find((u) => i[u].has(d));
            return [d, u ?? f.Other];
          })
        );
      u.getToolCategory = (d) => m[d];
      const p = [n.RemoAdminTool.Lookup, n.RemoAdminTool.LookupTasker],
        b = [
          n.RemoAdminTool.NewTasker,
          n.RemoAdminTool.NewProject,
          n.RemoAdminTool.Undisable,
          n.RemoAdminTool.Unexclude,
          n.RemoAdminTool.SpoofTasker,
          n.RemoAdminTool.UploadFilesToS3,
          n.RemoAdminTool.TaskerScreeningGrading,
          n.RemoAdminTool.GetHubstaffWorklogs,
        ];
      u.globalTools = b;
      const _ = [n.RemoAdminTool.MoveTasksInPipeline];
      var T;
      (u.ProjectActionTools = _),
        (u.RemoAdminPersonaDataScope = T),
        (function (d) {
          (d.BootcampTrainingAndMgmt = "bootcamp_training_and_mgmt"),
            (d.FraudAuditor = "fraud_auditor"),
            (d.QA = "qa"),
            (d.QAPlus = "qa_plus"),
            (d.QIR = "qir"),
            (d.QM = "qm"),
            (d.TLPPH = "tl_pph"),
            (d.TSM = "tsm"),
            (d.TSMEngagementDRI = "tsm_engagement_dri");
        })(T || (u.RemoAdminPersonaDataScope = T = {}));
      const A = Object.entries(T)
          .map(([d, u]) => u)
          .filter((d) => d !== T.QA),
        E = T.QA;
      u.DefaultDataScope = E;
      var S, R, h;
      (u.isRemoAdminSelfServe = (d) => {
        const u = d.dataScope || E,
          e = A.includes(u),
          o = (d.tools ?? []).filter((d) => !P(d));
        return e || o.length > 0;
      }),
        (u.RemoAdminPersonaHistoryActionType = S),
        (function (d) {
          (d.Add = "add"), (d.Remove = "remove"), (d.Modify = "modify");
        })(S || (u.RemoAdminPersonaHistoryActionType = S = {})),
        (u.RemoAdminToolType = R),
        (function (d) {
          (d.Global = "global"), (d.Project = "project"), (d.Widget = "widget");
        })(R || (u.RemoAdminToolType = R = {})),
        (u.RemoAdminLookupType = h),
        (function (d) {
          (d.auditplus = "auditplus"),
            (d.course = "course"),
            (d.corpjob = "corpjob"),
            (d.payable = "payable"),
            (d.pipelineStage = "pipelineStage"),
            (d.project = "project"),
            (d.task = "task"),
            (d.teams = "teams"),
            (d.subtask = "subtask"),
            (d.tag = "tag"),
            (d.trainingscenario = "trainingscenario"),
            (d.trainingattempt = "trainingattempt"),
            (d.taskattempt = "taskattempt"),
            (d.taskreview = "taskreview"),
            (d.pipelinev3humannode = "pipelinev3humannode"),
            (d.taskPipelineNode = "taskPipelineNode"),
            (d.taskPipelineResource = "taskPipelineResource"),
            (d.taskPipelineExecution = "taskPipelineExecution"),
            (d.qaoperation = "qaoperation"),
            (d.qaoperationnode = "qaoperationnode"),
            (d.sensorFusionUnificationProject = "sensorfusionunifiedproject"),
            (d.sensorFusionUnificationStageDefinition =
              "sensorfusionstagedefinition"),
            (d.sensorFusionUnificationSubstageDefinition =
              "sensorfusionsubstagedefinition"),
            (d.sensorFusionUnificationTask = "sensorfusionunifiedtask"),
            (d.sensorFusionUnificationStageInstance =
              "sensorfusionstageinstance"),
            (d.sensorFusionUnificationSubstageInstance =
              "sensorfusionsubstageinstance"),
            (d.tasker = "tasker"),
            (d.customer = "customer");
        })(h || (u.RemoAdminLookupType = h = {}));
      const g = {
        ...Object.fromEntries(
          [
            h.pipelineStage,
            h.taskPipelineNode,
            h.pipelinev3humannode,
            h.taskPipelineResource,
            h.taskPipelineExecution,
            h.task,
            h.subtask,
            h.trainingscenario,
            h.trainingattempt,
            h.taskattempt,
            h.taskreview,
            h.sensorFusionUnificationProject,
            h.sensorFusionUnificationTask,
            h.sensorFusionUnificationStageDefinition,
            h.sensorFusionUnificationSubstageDefinition,
            h.sensorFusionUnificationStageInstance,
            h.sensorFusionUnificationSubstageInstance,
          ].map((d) => [d, { tools: [n.RemoAdminTool.Lookup] }])
        ),
        [h.auditplus]: { tools: [n.RemoAdminTool.Lookup], dataScopes: [T.QIR] },
        [h.corpjob]: {
          tools: [n.RemoAdminTool.Lookup],
          dataScopes: [T.QIR, T.QM],
        },
        [h.course]: {
          tools: [n.RemoAdminTool.Courses, n.RemoAdminTool.ProjectTraining],
        },
        [h.customer]: {
          tools: [n.RemoAdminTool.LookupTasker, n.RemoAdminTool.LookupAnyUser],
          dataScopes: [T.QIR],
        },
        [h.payable]: {
          tools: [n.RemoAdminTool.LookupTasker, n.RemoAdminTool.LookupAnyUser],
        },
        [h.project]: { tools: [n.RemoAdminTool.Lookup], dataScopes: [T.QIR] },
        [h.teams]: { tools: [n.RemoAdminTool.Teams] },
        [h.tag]: {
          tools: [n.RemoAdminTool.LookupTasker, n.RemoAdminTool.LookupAnyUser],
        },
        [h.tasker]: {
          tools: [n.RemoAdminTool.LookupTasker, n.RemoAdminTool.LookupAnyUser],
        },
        [h.qaoperation]: {
          tools: [n.RemoAdminTool.LookupTasker, n.RemoAdminTool.LookupAnyUser],
          dataScopes: [T.QM, T.TSMEngagementDRI],
        },
        [h.qaoperationnode]: {
          tools: [n.RemoAdminTool.LookupTasker, n.RemoAdminTool.LookupAnyUser],
          dataScopes: [T.QM, T.TSMEngagementDRI],
        },
      };
      u.permissionsOfLookupType = g;
      const C = t.default.uniq(
        t.default.flatMap(Object.values(g), (d) => d.tools)
      );
      u.remoAdminLookupTools = C;
      const O = [
        ...p,
        n.RemoAdminTool.SpeedAudit,
        n.RemoAdminTool.ChatBulkAudit,
        n.RemoAdminTool.SpecializedRouting,
        n.RemoAdminTool.CreateScenario,
        n.RemoAdminTool.Create3DScenario,
        n.RemoAdminTool.EditScenario,
        n.RemoAdminTool.Edit3DScenario,
        n.RemoAdminTool.AuditTasker,
      ];
      u.defaultTools = O;
      const N = [
        ...O,
        n.RemoAdminTool.Announcements,
        n.RemoAdminTool.AssignAttempters,
        n.RemoAdminTool.BackfillCourseProgress,
        n.RemoAdminTool.BackfillCourseV2Progress,
        n.RemoAdminTool.DeliveryPortalSubtasks,
        n.RemoAdminTool.Explain,
        n.RemoAdminTool.MassDisableWorkers,
        n.RemoAdminTool.MassUnassignSubtasks,
        n.RemoAdminTool.SkipTaskerOnboarding,
        n.RemoAdminTool.SpoofTasker,
        n.RemoAdminTool.ProjectSubtaskFilter,
        n.RemoAdminTool.ProjectTasks,
        n.RemoAdminTool.Teams,
        n.RemoAdminTool.Undisable,
        n.RemoAdminTool.WebinarSessions,
        n.RemoAdminTool.WorkerManager,
        n.RemoAdminTool.SphereWorkspaceProvisioner,
      ];
      u.tsmTools = N;
      const I = t.default.without(N, n.RemoAdminTool.WorkerManager);
      u.tlTools = I;
      const v = {
          [T.BootcampTrainingAndMgmt]: { restrictToList: !1, tools: O },
          [T.FraudAuditor]: {
            restrictToList: !0,
            tools: [n.RemoAdminTool.FraudCenter, ...p],
          },
          [T.QA]: { restrictToList: !1, tools: O },
          [T.QAPlus]: { restrictToList: !1, tools: O },
          [T.QIR]: { restrictToList: !1, tools: O },
          [T.QM]: { restrictToList: !1, tools: O },
          [T.TLPPH]: { restrictToList: !1, tools: I },
          [T.TSM]: { restrictToList: !1, tools: N },
          [T.TSMEngagementDRI]: { restrictToList: !1, tools: N },
        },
        M = {};
      u.getToolsForDataMode = (d) => v[d].tools;
      u.dataModeClearsOtherTools = (d) => v[d].restrictToList;
      const L = new Set(O),
        P = (d) => L.has(d);
      u.isDefaultTool = P;
      const k = (d) => t.default.startCase(t.default.camelCase(d));
      u.getLabelFor = k;
      u.getToolLabel = (d) => {
        const [u] = t.default
          .entries(n.RemoAdminTool)
          .find(([u, e]) => e === d) ?? [""];
        return k(u);
      };
      const y = t.default
        .entries(n.RemoAdminTool)
        .map(([d, u]) => ({ label: k(d), value: u }));
      u.getAllowedToolsForDataMode = (d) =>
        y.filter(({ value: u }) => M[u]?.includes(d) ?? !0);
      const D = (d) => new Set(d?.tools?.filter((d) => !!d) ?? []);
      u.getToolSet = D;
      const U = (d, u, e) => {
        const o = !!e,
          f = !o,
          t = D(d);
        for (const n of u) {
          const d = t.has(n);
          if (d && f) return !0;
          if (!d && o) return !1;
        }
        return !!o;
      };
      u.containsTools = U;
      const w = (d, u) => {
        if (d.applyToAllProjects) return !0;
        return (d.projects ?? [])
          .map((d) => d.toString())
          .some((d) => d === String(u));
      };
      u.containsProject = w;
      u.checkRemoAdminToolPermission = (d, u, e, o) => {
        if (!u || 0 === u.length) return !0;
        if (!d || !d.length) return !1;
        const f = e ? d.filter((d) => w(d, e)) : d;
        for (const t of f) {
          const d = !o?.length || !!o.find((d) => d === t.dataScope);
          if (U(t, u) && d) return !0;
        }
        return !1;
      };
      u.getDefaultPersona = (d) => {
        for (const u of d) if (u.enabled) return u;
      };
      const K = {
        [T.FraudAuditor]: "fraud_auditor",
        [T.QA]: "qa",
        [T.QAPlus]: "qaplus",
        [T.QM]: "qm",
        [T.QIR]: "qir",
        [T.TSM]: "tsm",
        [T.TSMEngagementDRI]: "tsmDRI",
        [T.TLPPH]: "tl_pph",
        [T.BootcampTrainingAndMgmt]: "bootcamp",
      };
      u.checkDataScope = (d, u) => {
        const { dataScope: e } = d;
        return !!e && u.includes(K[e]);
      };
      const j = {
        [T.BootcampTrainingAndMgmt]: {
          label: "Bootcamp Trainer/Manager",
          description:
            "Datamode reserved for Bootcamp Staff and Trainers. Provides access to basic tooling, advanced tooling (individual tooling must be requested) + the ability to create and assign operations. Includes self-serve access to tooling, so operations can but don\u2019t have to be created/assigned for this datamode. Does not display personal or customer information. Individual projects must be requested for users. Pay is handled externally. ",
          hidesPII: !0,
        },
        [T.FraudAuditor]: {
          label: "Fraud Auditor",
          description:
            "Datamode reserved for Fraud Auditors. Provides access to Fraud Center.",
          hidesPII: !0,
        },
        [T.QA]: {
          description:
            "Base datamode for external users. Provides access to basic tooling (speed audit, create scenario, audit tasker, and generic instructions). Can do Tasker/Task Lookup. Operations must be created and assigned to them. Does not display personal or customer information. Individual projects must be requested for users. Payment via corp, must be set up on payout configs.",
          label: "QA",
          hidesPII: !0,
        },
        [T.QAPlus]: {
          description:
            "Datamode for more experienced external users. Provides access to basic tooling and advanced tooling (individual tooling must be requested). Includes self-serve access to tooling, so operations can but don\u2019t have to be created/assigned for this datamode. Does not display personal or customer information. Individual projects must be requested for users. Payment handled by RemoAdmin team.",
          label: "QA Plus",
          hidesPII: !0,
        },
        [T.QIR]: {
          description:
            "Datamode reserved for QIR Remoadmins. Provides access to basic tooling and advanced tooling (individual tooling must be requested). Includes self-serve access to tooling, so operations can but don\u2019t have to be created/assigned for this datamode. Displays personal and customer information. Individual projects can be requested for users or access can be granted to all projects. Pay is handled externally.",
          label: "QIR",
          hidesPII: !1,
        },
        [T.QM]: {
          description:
            "Datamode reserved for Scale FTEs and Contractors. This datamode is built for QMs who will create and assign operations to other RemoAdmins. Provides access to basic tooling, advanced tooling (individual tooling must be requested) + the ability to create and assign operations. Includes self-serve access to tooling, so operations can but don\u2019t have to be created/assigned for this datamode. Displays personal and customer information. Individual projects can be requested for users or access can be granted to all projects. Pay is handled externally.",
          label: "QM / Operator",
          hidesPII: !1,
        },
        [T.TLPPH]: {
          description:
            "Datamode reserved for TLs and PPH workers. Provides access to basic tooling, advanced tooling (individual tooling must be requested). Includes self-serve access to tooling, so operations can but don\u2019t have to be created/assigned for this datamode. Includes all tools from TSM with the exception of Worker Manager. Does not display personal information. Individual projects must be requested for users. Pay is handled externally.",
          label: "PPH",
          hidesPII: !0,
        },
        [T.TSM]: {
          description:
            "Datamode reserved for TSMs. Provides access to basic tooling, advanced tooling (individual tooling must be requested), and POD health view. Includes self-serve access to tooling, so operations can but don\u2019t have to be created/assigned for this datamode. Displays personal information. Individual projects must be requested for users. Pay is handled externally.",
          label: "TSM",
          hidesPII: !1,
        },
        [T.TSMEngagementDRI]: {
          description:
            "Datamode reserved for TSMs. Provides access to basic tooling, advanced tooling (individual tooling must be requested), POD health view and the ability to create tags. Includes self-serve access to tooling, so operations can but don\u2019t have to be created/assigned for this datamode. Displays personal and/or customer information. Individual projects must be requested for users. Pay is handled externally.",
          label: "TSM Engagement DRI",
          hidesPII: !1,
        },
      };
      u.dataModeDefinitions = j;
      u.isFTEOrContractorEmail = (d) =>
        d.endsWith("scale.com") || d.endsWith("scaleapi.com");
    },
    557950: function (d, u, e) {
      "use strict";
      Object.defineProperty(u, "__esModule", { value: !0 }),
        (u.BLACKLIST_WT_IDS =
          u.ERROR_RATE_LIMIT_EXCEEDED =
          u.ERROR_CHANNEL_NOT_FOUND =
          u.ERROR_ALREADY_IN_CHANNEL =
          u.ERROR_NOT_IN_CHANNEL =
          u.ERROR_NOT_SUPPORTED =
          u.ERROR_USER_NOT_FOUND =
          u.ERROR_CANT_INVITE =
          u.EXPERT_SLACK_TAG =
          u.TSM_TAG =
          u.LOCATION_MASKED_TAG =
          u.DEFAULT_CHANNELS =
          u.EXPERTS_COMMUNITY_BOT_MEMBER_ID =
          u.REMOTASKS_COMMUNITY_BOT_MEMBER_ID =
          u.PROJECT_CONNECT_COMMUNITY_BOT_MEMBER_ID =
          u.DAYS_NOT_SHOW_MODAL =
          u.SLACK_EXPERT_COMMUNITY_LINK_DASHBOARD =
          u.SLACK_EXPERT_COMMUNITY_LINK_FOR_MEMBERS =
          u.DISCOURSE_COMMUNITY_LOGIN_LINK =
          u.SLACK_COMMUNITY_LINK_FOR_MEMBERS =
          u.CHANGE_TITLE_EXAMPLE =
          u.ASK_PERMISSION_LINK =
          u.SearchOptions =
          u.ChannelOptions =
          u.ChannelType =
          u.SLACK_AUTHENTICATED_USERS =
          u.SLACK_CACHE_TWO_MINUTES_TTL =
          u.SLACK_CACHE_ONE_HOUR_TTL =
          u.SLACK_CACHE_ONE_DAY_TTL =
          u.UNHANDLED_EMAILS_KEY =
          u.ALL_EXPERT_SLACK_CHANNELS =
          u.ALL_SLACK_CHANNELS_SYNC_COUNT =
          u.ALL_SLACK_CHANNELS =
          u.CHANNEL_OBJ_CACHE_KEY =
          u.REMOTASKS_PENDING_YNC_CHANNELS_KEY =
          u.EXPERTS_PENDING_SYNC_CHANNELS_KEY =
          u.SLACK_INVITE_LINK_REMOTASKS_KEY =
          u.SLACK_INVITE_LINK_EXPERT_KEY =
          u.SLACK_CHANNEL_ADMIN_TAG_NAME =
          u.SLACK_WORKSPACE_ADMIN_TAG_NAME =
          u.ALL_ANY_EVERY =
          u.BATCH_SEARCH_SIZE =
          u.BATCH_INVITE_SIZE =
          u.SHEET_ID =
          u.REMOVE_ACTION_EMOJI =
          u.COMMUNITY_WORKSPACE_ADMINS_USER_GROUP_ID =
          u.EXPERT_WORKSPACE_TEAM_ID =
          u.COMMUNITY_WORKSPACE_TEAM_ID =
          u.PROJECT_CONNECT_WORKSPACE_TEAM_ID =
          u.defaultChannnelTypes =
            void 0);
      var o,
        f = (o = e(449961)) && o.__esModule ? o : { default: o };
      u.defaultChannnelTypes = [
        "Announcements",
        "Attempters",
        "Reviewers",
        "Help",
      ];
      u.PROJECT_CONNECT_WORKSPACE_TEAM_ID = "T03FD2CL0K1";
      u.COMMUNITY_WORKSPACE_TEAM_ID = "T036A6R3BHT";
      u.EXPERT_WORKSPACE_TEAM_ID = "T04NSCKKTHC";
      u.COMMUNITY_WORKSPACE_ADMINS_USER_GROUP_ID = "S03MP0KB5L5";
      u.REMOVE_ACTION_EMOJI = "p01nt";
      u.SHEET_ID = "1K5PFM-BSTZGk42Qdrov_osaYTkRcGPEOf4BhKngUWIY";
      u.BATCH_INVITE_SIZE = 800;
      u.BATCH_SEARCH_SIZE = 2e5;
      const t = [null, void 0];
      u.ALL_ANY_EVERY = t;
      u.SLACK_WORKSPACE_ADMIN_TAG_NAME = "slack_workspace_admin";
      u.SLACK_CHANNEL_ADMIN_TAG_NAME = "slack_channel_admin";
      u.SLACK_INVITE_LINK_EXPERT_KEY = "slack_invite_link_expert";
      u.SLACK_INVITE_LINK_REMOTASKS_KEY = "slack_invite_link_remotasks";
      u.EXPERTS_PENDING_SYNC_CHANNELS_KEY = "pending_sync_channels_sfn_expert";
      u.REMOTASKS_PENDING_YNC_CHANNELS_KEY =
        "pending_sync_channels_sfn_remotasks";
      u.CHANNEL_OBJ_CACHE_KEY = "channelNameCacheKey";
      u.ALL_SLACK_CHANNELS = "allSlackChannels";
      u.ALL_SLACK_CHANNELS_SYNC_COUNT = "all_slack_channels_sync_count";
      u.ALL_EXPERT_SLACK_CHANNELS = "allExpertSlackChannels";
      u.UNHANDLED_EMAILS_KEY = "unhandledEmailsKey";
      u.SLACK_CACHE_ONE_DAY_TTL = 86400;
      u.SLACK_CACHE_ONE_HOUR_TTL = 3600;
      u.SLACK_CACHE_TWO_MINUTES_TTL = 120;
      var n, c, a;
      (u.SLACK_AUTHENTICATED_USERS = [
        "U03JB7YTSAG",
        "U06BY3RCF7Z",
        "U06BV5TQVH8",
        "U05F0LP4SEL",
        "U03JYRCQNAU",
      ]),
        (u.ChannelType = n),
        (function (d) {
          (d.Expert = "expert"), (d.Remotask = "remotask");
        })(n || (u.ChannelType = n = {})),
        (u.ChannelOptions = c),
        (function (d) {
          (d.reviewLevels = "reviewLevels"),
            (d.workerSources = "workerSources"),
            (d.countries = "countries"),
            (d.tierStatuses = "tierStatuses"),
            (d.tags = "tags"),
            (d.requireAllTags = "requireAllTags"),
            (d.communities = "communities");
        })(c || (u.ChannelOptions = c = {})),
        (u.SearchOptions = a),
        (function (d) {
          (d.Email = "Email"),
            (d.SlackEmail = "Slack Email"),
            (d.SlackId = "Slack Id");
        })(a || (u.SearchOptions = a = {}));
      const s = `https://slack.com/oauth/v2/authorize?user_scope=users.profile:write&client_id=${
        f.default.has("opsEfficiency.slack.remotasks.clientId")
          ? f.default.get("opsEfficiency.slack.remotasks.clientId")
          : ""
      }`;
      u.ASK_PERMISSION_LINK = s;
      u.CHANGE_TITLE_EXAMPLE =
        "https://static.remotasks.com/uploads/62d6fe1d6f9fcd00326cc326/Profile.png";
      u.SLACK_COMMUNITY_LINK_FOR_MEMBERS = "https://www.remotasks.com/RCInvite";
      u.DISCOURSE_COMMUNITY_LOGIN_LINK =
        "https://community.remotasks.com/login";
      u.SLACK_EXPERT_COMMUNITY_LINK_FOR_MEMBERS =
        "https://app.outlier.ai/en/expert/ECInvite";
      u.SLACK_EXPERT_COMMUNITY_LINK_DASHBOARD = "/expert/ECInvite";
      u.DAYS_NOT_SHOW_MODAL = [0, 3, 6];
      u.PROJECT_CONNECT_COMMUNITY_BOT_MEMBER_ID = "U03JYRCQNAU";
      u.REMOTASKS_COMMUNITY_BOT_MEMBER_ID = "U053GAGV9JL";
      u.EXPERTS_COMMUNITY_BOT_MEMBER_ID = "U05F0LP4SEL";
      u.DEFAULT_CHANNELS = ["C03NCTBQXRQ", "C03GRMWMVS4", "C047TL6RKU0"];
      u.LOCATION_MASKED_TAG = "63d9a2e168713ddb03ececb4";
      u.TSM_TAG = "64431213d82e82067dfa96c3";
      u.EXPERT_SLACK_TAG = "6477f14a2c02f3c6474a9d9a";
      u.ERROR_CANT_INVITE = "cant_invite";
      u.ERROR_USER_NOT_FOUND = "user_not_found";
      u.ERROR_NOT_SUPPORTED = "not_supported";
      u.ERROR_NOT_IN_CHANNEL = "not_in_channel";
      u.ERROR_ALREADY_IN_CHANNEL = "already_in_channel";
      u.ERROR_CHANNEL_NOT_FOUND = "channel_not_found";
      u.ERROR_RATE_LIMIT_EXCEEDED = "slack_webapi_rate_limited_error";
      u.BLACKLIST_WT_IDS = [
        "65bc44f78638177c1d7eca1d",
        "65f1e338a308b22f1681a7f6",
        "621051885a2f320025d8fefb",
        "65f202e7e02f589d7f8583cc",
        "65f1e32ad3f5aafb22257c49",
        "65bc4870d56908f701b33acb",
        "65f2030104adc386047170d2",
        "65f202f4a0e6f2e6f7ecb594",
        "65f35d06ff8e511167d12dd4",
        "65f35cef0d19dc01318c7184",
        "6489fe29e5202d5d93a49a3c",
        "65f1e2ef6e29e0a7ec1f5618",
        "65f1e270f095a8ec272c6ed7",
      ];
    },
    655839: function (d) {
      "use strict";
      var u = {
          childContextTypes: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0,
        },
        e = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0,
        },
        o = Object.defineProperty,
        f = Object.getOwnPropertyNames,
        t = Object.getOwnPropertySymbols,
        n = Object.getOwnPropertyDescriptor,
        c = Object.getPrototypeOf,
        a = c && c(Object);
      d.exports = function d(s, r, i) {
        if ("string" !== typeof r) {
          if (a) {
            var l = c(r);
            l && l !== a && d(s, l, i);
          }
          var m = f(r);
          t && (m = m.concat(t(r)));
          for (var p = 0; p < m.length; ++p) {
            var b = m[p];
            if (!u[b] && !e[b] && (!i || !i[b])) {
              var _ = n(r, b);
              try {
                o(s, b, _);
              } catch (T) {}
            }
          }
          return s;
        }
        return s;
      };
    },
    951154: function (d, u, e) {
      (d.exports = e(869262)).tz.load(e(511565));
    },
    869262: function (d, u, e) {
      var o, f, t;
      !(function (n, c) {
        "use strict";
        d.exports
          ? (d.exports = c(e(161320)))
          : ((f = [e(161320)]),
            void 0 ===
              (t = "function" === typeof (o = c) ? o.apply(u, f) : o) ||
              (d.exports = t));
      })(0, function (d) {
        "use strict";
        void 0 === d.version && d.default && (d = d.default);
        var u,
          e = {},
          o = {},
          f = {},
          t = {},
          n = {};
        (d && "string" === typeof d.version) ||
          M(
            "Moment Timezone requires Moment.js. See https://momentjs.com/timezone/docs/#/use-it/browser/"
          );
        var c = d.version.split("."),
          a = +c[0],
          s = +c[1];
        function r(d) {
          return d > 96 ? d - 87 : d > 64 ? d - 29 : d - 48;
        }
        function i(d) {
          var u = 0,
            e = d.split("."),
            o = e[0],
            f = e[1] || "",
            t = 1,
            n = 0,
            c = 1;
          for (45 === d.charCodeAt(0) && ((u = 1), (c = -1)); u < o.length; u++)
            n = 60 * n + r(o.charCodeAt(u));
          for (u = 0; u < f.length; u++)
            (t /= 60), (n += r(f.charCodeAt(u)) * t);
          return n * c;
        }
        function l(d) {
          for (var u = 0; u < d.length; u++) d[u] = i(d[u]);
        }
        function m(d, u) {
          var e,
            o = [];
          for (e = 0; e < u.length; e++) o[e] = d[u[e]];
          return o;
        }
        function p(d) {
          var u = d.split("|"),
            e = u[2].split(" "),
            o = u[3].split(""),
            f = u[4].split(" ");
          return (
            l(e),
            l(o),
            l(f),
            (function (d, u) {
              for (var e = 0; e < u; e++)
                d[e] = Math.round((d[e - 1] || 0) + 6e4 * d[e]);
              d[u - 1] = 1 / 0;
            })(f, o.length),
            {
              name: u[0],
              abbrs: m(u[1].split(" "), o),
              offsets: m(e, o),
              untils: f,
              population: 0 | u[5],
            }
          );
        }
        function b(d) {
          d && this._set(p(d));
        }
        function _(d, u) {
          (this.name = d), (this.zones = u);
        }
        function T(d) {
          var u = d.toTimeString(),
            e = u.match(/\([a-z ]+\)/i);
          "GMT" ===
            (e =
              e && e[0]
                ? (e = e[0].match(/[A-Z]/g))
                  ? e.join("")
                  : void 0
                : (e = u.match(/[A-Z]{3,5}/g))
                ? e[0]
                : void 0) && (e = void 0),
            (this.at = +d),
            (this.abbr = e),
            (this.offset = d.getTimezoneOffset());
        }
        function A(d) {
          (this.zone = d), (this.offsetScore = 0), (this.abbrScore = 0);
        }
        function E(d, u) {
          for (var e, o; (o = 6e4 * (((u.at - d.at) / 12e4) | 0)); )
            (e = new T(new Date(d.at + o))).offset === d.offset
              ? (d = e)
              : (u = e);
          return d;
        }
        function S(d, u) {
          return d.offsetScore !== u.offsetScore
            ? d.offsetScore - u.offsetScore
            : d.abbrScore !== u.abbrScore
            ? d.abbrScore - u.abbrScore
            : d.zone.population !== u.zone.population
            ? u.zone.population - d.zone.population
            : u.zone.name.localeCompare(d.zone.name);
        }
        function R(d, u) {
          var e, o;
          for (l(u), e = 0; e < u.length; e++)
            (o = u[e]), (n[o] = n[o] || {}), (n[o][d] = !0);
        }
        function h(d) {
          var u,
            e,
            o,
            f = d.length,
            c = {},
            a = [];
          for (u = 0; u < f; u++)
            for (e in (o = n[d[u].offset] || {}))
              o.hasOwnProperty(e) && (c[e] = !0);
          for (u in c) c.hasOwnProperty(u) && a.push(t[u]);
          return a;
        }
        function g() {
          try {
            var d = Intl.DateTimeFormat().resolvedOptions().timeZone;
            if (d && d.length > 3) {
              var u = t[C(d)];
              if (u) return u;
              M(
                "Moment Timezone found " +
                  d +
                  " from the Intl api, but did not have that data loaded."
              );
            }
          } catch (r) {}
          var e,
            o,
            f,
            n = (function () {
              var d,
                u,
                e,
                o = new Date().getFullYear() - 2,
                f = new T(new Date(o, 0, 1)),
                t = [f];
              for (e = 1; e < 48; e++)
                (u = new T(new Date(o, e, 1))).offset !== f.offset &&
                  ((d = E(f, u)),
                  t.push(d),
                  t.push(new T(new Date(d.at + 6e4)))),
                  (f = u);
              for (e = 0; e < 4; e++)
                t.push(new T(new Date(o + e, 0, 1))),
                  t.push(new T(new Date(o + e, 6, 1)));
              return t;
            })(),
            c = n.length,
            a = h(n),
            s = [];
          for (o = 0; o < a.length; o++) {
            for (e = new A(N(a[o]), c), f = 0; f < c; f++)
              e.scoreOffsetAt(n[f]);
            s.push(e);
          }
          return s.sort(S), s.length > 0 ? s[0].zone.name : void 0;
        }
        function C(d) {
          return (d || "").toLowerCase().replace(/\//g, "_");
        }
        function O(d) {
          var u, o, f, n;
          for ("string" === typeof d && (d = [d]), u = 0; u < d.length; u++)
            (n = C((o = (f = d[u].split("|"))[0]))),
              (e[n] = d[u]),
              (t[n] = o),
              R(n, f[2].split(" "));
        }
        function N(d, u) {
          d = C(d);
          var f,
            n = e[d];
          return n instanceof b
            ? n
            : "string" === typeof n
            ? ((n = new b(n)), (e[d] = n), n)
            : o[d] && u !== N && (f = N(o[d], N))
            ? ((n = e[d] = new b())._set(f), (n.name = t[d]), n)
            : null;
        }
        function I(d) {
          var u, e, f, n;
          for ("string" === typeof d && (d = [d]), u = 0; u < d.length; u++)
            (f = C((e = d[u].split("|"))[0])),
              (n = C(e[1])),
              (o[f] = n),
              (t[f] = e[0]),
              (o[n] = f),
              (t[n] = e[1]);
        }
        function v(d) {
          var u = "X" === d._f || "x" === d._f;
          return !(!d._a || void 0 !== d._tzm || u);
        }
        function M(d) {
          "undefined" !== typeof console &&
            "function" === typeof console.error &&
            console.error(d);
        }
        function L(u) {
          var e = Array.prototype.slice.call(arguments, 0, -1),
            o = arguments[arguments.length - 1],
            f = N(o),
            t = d.utc.apply(null, e);
          return (
            f && !d.isMoment(u) && v(t) && t.add(f.parse(t), "minutes"),
            t.tz(o),
            t
          );
        }
        (a < 2 || (2 === a && s < 6)) &&
          M(
            "Moment Timezone requires Moment.js >= 2.6.0. You are using Moment.js " +
              d.version +
              ". See momentjs.com"
          ),
          (b.prototype = {
            _set: function (d) {
              (this.name = d.name),
                (this.abbrs = d.abbrs),
                (this.untils = d.untils),
                (this.offsets = d.offsets),
                (this.population = d.population);
            },
            _index: function (d) {
              var u,
                e = +d,
                o = this.untils;
              for (u = 0; u < o.length; u++) if (e < o[u]) return u;
            },
            countries: function () {
              var d = this.name;
              return Object.keys(f).filter(function (u) {
                return -1 !== f[u].zones.indexOf(d);
              });
            },
            parse: function (d) {
              var u,
                e,
                o,
                f,
                t = +d,
                n = this.offsets,
                c = this.untils,
                a = c.length - 1;
              for (f = 0; f < a; f++)
                if (
                  ((u = n[f]),
                  (e = n[f + 1]),
                  (o = n[f ? f - 1 : f]),
                  u < e && L.moveAmbiguousForward
                    ? (u = e)
                    : u > o && L.moveInvalidForward && (u = o),
                  t < c[f] - 6e4 * u)
                )
                  return n[f];
              return n[a];
            },
            abbr: function (d) {
              return this.abbrs[this._index(d)];
            },
            offset: function (d) {
              return (
                M("zone.offset has been deprecated in favor of zone.utcOffset"),
                this.offsets[this._index(d)]
              );
            },
            utcOffset: function (d) {
              return this.offsets[this._index(d)];
            },
          }),
          (A.prototype.scoreOffsetAt = function (d) {
            (this.offsetScore += Math.abs(
              this.zone.utcOffset(d.at) - d.offset
            )),
              this.zone.abbr(d.at).replace(/[^A-Z]/g, "") !== d.abbr &&
                this.abbrScore++;
          }),
          (L.version = "0.5.34"),
          (L.dataVersion = ""),
          (L._zones = e),
          (L._links = o),
          (L._names = t),
          (L._countries = f),
          (L.add = O),
          (L.link = I),
          (L.load = function (d) {
            O(d.zones),
              I(d.links),
              (function (d) {
                var u, e, o, t;
                if (d && d.length)
                  for (u = 0; u < d.length; u++)
                    (e = (t = d[u].split("|"))[0].toUpperCase()),
                      (o = t[1].split(" ")),
                      (f[e] = new _(e, o));
              })(d.countries),
              (L.dataVersion = d.version);
          }),
          (L.zone = N),
          (L.zoneExists = function d(u) {
            return (
              d.didShowError ||
                ((d.didShowError = !0),
                M(
                  "moment.tz.zoneExists('" +
                    u +
                    "') has been deprecated in favor of !moment.tz.zone('" +
                    u +
                    "')"
                )),
              !!N(u)
            );
          }),
          (L.guess = function (d) {
            return (u && !d) || (u = g()), u;
          }),
          (L.names = function () {
            var d,
              u = [];
            for (d in t)
              t.hasOwnProperty(d) && (e[d] || e[o[d]]) && t[d] && u.push(t[d]);
            return u.sort();
          }),
          (L.Zone = b),
          (L.unpack = p),
          (L.unpackBase60 = i),
          (L.needsOffset = v),
          (L.moveInvalidForward = !0),
          (L.moveAmbiguousForward = !1),
          (L.countries = function () {
            return Object.keys(f);
          }),
          (L.zonesForCountry = function (d, u) {
            var e;
            if (((e = (e = d).toUpperCase()), !(d = f[e] || null))) return null;
            var o = d.zones.sort();
            return u
              ? o.map(function (d) {
                  return { name: d, offset: N(d).utcOffset(new Date()) };
                })
              : o;
          });
        var P,
          k = d.fn;
        function y(d) {
          return function () {
            return this._z ? this._z.abbr(this) : d.call(this);
          };
        }
        function D(d) {
          return function () {
            return (this._z = null), d.apply(this, arguments);
          };
        }
        (d.tz = L),
          (d.defaultZone = null),
          (d.updateOffset = function (u, e) {
            var o,
              f = d.defaultZone;
            if (
              (void 0 === u._z &&
                (f &&
                  v(u) &&
                  !u._isUTC &&
                  ((u._d = d.utc(u._a)._d), u.utc().add(f.parse(u), "minutes")),
                (u._z = f)),
              u._z)
            )
              if (
                ((o = u._z.utcOffset(u)),
                Math.abs(o) < 16 && (o /= 60),
                void 0 !== u.utcOffset)
              ) {
                var t = u._z;
                u.utcOffset(-o, e), (u._z = t);
              } else u.zone(o, e);
          }),
          (k.tz = function (u, e) {
            if (u) {
              if ("string" !== typeof u)
                throw new Error(
                  "Time zone name must be a string, got " +
                    u +
                    " [" +
                    typeof u +
                    "]"
                );
              return (
                (this._z = N(u)),
                this._z
                  ? d.updateOffset(this, e)
                  : M(
                      "Moment Timezone has no data for " +
                        u +
                        ". See http://momentjs.com/timezone/docs/#/data-loading/."
                    ),
                this
              );
            }
            if (this._z) return this._z.name;
          }),
          (k.zoneName = y(k.zoneName)),
          (k.zoneAbbr = y(k.zoneAbbr)),
          (k.utc = D(k.utc)),
          (k.local = D(k.local)),
          (k.utcOffset =
            ((P = k.utcOffset),
            function () {
              return (
                arguments.length > 0 && (this._z = null),
                P.apply(this, arguments)
              );
            })),
          (d.tz.setDefault = function (u) {
            return (
              (a < 2 || (2 === a && s < 9)) &&
                M(
                  "Moment Timezone setDefault() requires Moment.js >= 2.9.0. You are using Moment.js " +
                    d.version +
                    "."
                ),
              (d.defaultZone = u ? N(u) : null),
              d
            );
          });
        var U = d.momentProperties;
        return (
          "[object Array]" === Object.prototype.toString.call(U)
            ? (U.push("_z"), U.push("_a"))
            : U && (U._z = null),
          d
        );
      });
    },
    149791: function (d, u) {
      "use strict";
      var e = (function () {
        var d = {
            base: "https://twemoji.maxcdn.com/v/14.0.2/",
            ext: ".png",
            size: "72x72",
            className: "emoji",
            convert: {
              fromCodePoint: function (d) {
                var u = "string" === typeof d ? parseInt(d, 16) : d;
                if (u < 65536) return c(u);
                return c(55296 + ((u -= 65536) >> 10), 56320 + (1023 & u));
              },
              toCodePoint: T,
            },
            onerror: function () {
              this.parentNode &&
                this.parentNode.replaceChild(a(this.alt, !1), this);
            },
            parse: function (u, e) {
              (e && "function" !== typeof e) || (e = { callback: e });
              return ("string" === typeof u ? m : l)(u, {
                callback: e.callback || s,
                attributes:
                  "function" === typeof e.attributes ? e.attributes : b,
                base: "string" === typeof e.base ? e.base : d.base,
                ext: e.ext || d.ext,
                size:
                  e.folder ||
                  ((o = e.size || d.size),
                  "number" === typeof o ? o + "x" + o : o),
                className: e.className || d.className,
                onerror: e.onerror || d.onerror,
              });
              var o;
            },
            replace: _,
            test: function (d) {
              e.lastIndex = 0;
              var u = e.test(d);
              return (e.lastIndex = 0), u;
            },
          },
          u = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            "'": "&#39;",
            '"': "&quot;",
          },
          e =
            /(?:\ud83d\udc68\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffc-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb\udffd-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb-\udffd\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb-\udffe]|\ud83d\udc68\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc68\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc68\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffc-\udfff]|\ud83e\uddd1\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb\udffd-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb-\udffd\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d[\udc68\udc69]|\ud83e\udef1\ud83c\udffb\u200d\ud83e\udef2\ud83c[\udffc-\udfff]|\ud83e\udef1\ud83c\udffc\u200d\ud83e\udef2\ud83c[\udffb\udffd-\udfff]|\ud83e\udef1\ud83c\udffd\u200d\ud83e\udef2\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\udef1\ud83c\udffe\u200d\ud83e\udef2\ud83c[\udffb-\udffd\udfff]|\ud83e\udef1\ud83c\udfff\u200d\ud83e\udef2\ud83c[\udffb-\udffe]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc68|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d[\udc68\udc69]|\ud83e\uddd1\u200d\ud83e\udd1d\u200d\ud83e\uddd1|\ud83d\udc6b\ud83c[\udffb-\udfff]|\ud83d\udc6c\ud83c[\udffb-\udfff]|\ud83d\udc6d\ud83c[\udffb-\udfff]|\ud83d\udc8f\ud83c[\udffb-\udfff]|\ud83d\udc91\ud83c[\udffb-\udfff]|\ud83e\udd1d\ud83c[\udffb-\udfff]|\ud83d[\udc6b-\udc6d\udc8f\udc91]|\ud83e\udd1d)|(?:\ud83d[\udc68\udc69]|\ud83e\uddd1)(?:\ud83c[\udffb-\udfff])?\u200d(?:\u2695\ufe0f|\u2696\ufe0f|\u2708\ufe0f|\ud83c[\udf3e\udf73\udf7c\udf84\udf93\udfa4\udfa8\udfeb\udfed]|\ud83d[\udcbb\udcbc\udd27\udd2c\ude80\ude92]|\ud83e[\uddaf-\uddb3\uddbc\uddbd])|(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75]|\u26f9)((?:\ud83c[\udffb-\udfff]|\ufe0f)\u200d[\u2640\u2642]\ufe0f)|(?:\ud83c[\udfc3\udfc4\udfca]|\ud83d[\udc6e\udc70\udc71\udc73\udc77\udc81\udc82\udc86\udc87\ude45-\ude47\ude4b\ude4d\ude4e\udea3\udeb4-\udeb6]|\ud83e[\udd26\udd35\udd37-\udd39\udd3d\udd3e\uddb8\uddb9\uddcd-\uddcf\uddd4\uddd6-\udddd])(?:\ud83c[\udffb-\udfff])?\u200d[\u2640\u2642]\ufe0f|(?:\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f|\ud83c\udff3\ufe0f\u200d\ud83c\udf08|\ud83d\ude36\u200d\ud83c\udf2b\ufe0f|\u2764\ufe0f\u200d\ud83d\udd25|\u2764\ufe0f\u200d\ud83e\ude79|\ud83c\udff4\u200d\u2620\ufe0f|\ud83d\udc15\u200d\ud83e\uddba|\ud83d\udc3b\u200d\u2744\ufe0f|\ud83d\udc41\u200d\ud83d\udde8|\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc6f\u200d\u2640\ufe0f|\ud83d\udc6f\u200d\u2642\ufe0f|\ud83d\ude2e\u200d\ud83d\udca8|\ud83d\ude35\u200d\ud83d\udcab|\ud83e\udd3c\u200d\u2640\ufe0f|\ud83e\udd3c\u200d\u2642\ufe0f|\ud83e\uddde\u200d\u2640\ufe0f|\ud83e\uddde\u200d\u2642\ufe0f|\ud83e\udddf\u200d\u2640\ufe0f|\ud83e\udddf\u200d\u2642\ufe0f|\ud83d\udc08\u200d\u2b1b)|[#*0-9]\ufe0f?\u20e3|(?:[\xa9\xae\u2122\u265f]\ufe0f)|(?:\ud83c[\udc04\udd70\udd71\udd7e\udd7f\ude02\ude1a\ude2f\ude37\udf21\udf24-\udf2c\udf36\udf7d\udf96\udf97\udf99-\udf9b\udf9e\udf9f\udfcd\udfce\udfd4-\udfdf\udff3\udff5\udff7]|\ud83d[\udc3f\udc41\udcfd\udd49\udd4a\udd6f\udd70\udd73\udd76-\udd79\udd87\udd8a-\udd8d\udda5\udda8\uddb1\uddb2\uddbc\uddc2-\uddc4\uddd1-\uddd3\udddc-\uddde\udde1\udde3\udde8\uddef\uddf3\uddfa\udecb\udecd-\udecf\udee0-\udee5\udee9\udef0\udef3]|[\u203c\u2049\u2139\u2194-\u2199\u21a9\u21aa\u231a\u231b\u2328\u23cf\u23ed-\u23ef\u23f1\u23f2\u23f8-\u23fa\u24c2\u25aa\u25ab\u25b6\u25c0\u25fb-\u25fe\u2600-\u2604\u260e\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262a\u262e\u262f\u2638-\u263a\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267b\u267f\u2692-\u2697\u2699\u269b\u269c\u26a0\u26a1\u26a7\u26aa\u26ab\u26b0\u26b1\u26bd\u26be\u26c4\u26c5\u26c8\u26cf\u26d1\u26d3\u26d4\u26e9\u26ea\u26f0-\u26f5\u26f8\u26fa\u26fd\u2702\u2708\u2709\u270f\u2712\u2714\u2716\u271d\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u2764\u27a1\u2934\u2935\u2b05-\u2b07\u2b1b\u2b1c\u2b50\u2b55\u3030\u303d\u3297\u3299])(?:\ufe0f|(?!\ufe0e))|(?:(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75\udd90]|[\u261d\u26f7\u26f9\u270c\u270d])(?:\ufe0f|(?!\ufe0e))|(?:\ud83c[\udf85\udfc2-\udfc4\udfc7\udfca]|\ud83d[\udc42\udc43\udc46-\udc50\udc66-\udc69\udc6e\udc70-\udc78\udc7c\udc81-\udc83\udc85-\udc87\udcaa\udd7a\udd95\udd96\ude45-\ude47\ude4b-\ude4f\udea3\udeb4-\udeb6\udec0\udecc]|\ud83e[\udd0c\udd0f\udd18-\udd1c\udd1e\udd1f\udd26\udd30-\udd39\udd3d\udd3e\udd77\uddb5\uddb6\uddb8\uddb9\uddbb\uddcd-\uddcf\uddd1-\udddd\udec3-\udec5\udef0-\udef6]|[\u270a\u270b]))(?:\ud83c[\udffb-\udfff])?|(?:\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc77\udb40\udc6c\udb40\udc73\udb40\udc7f|\ud83c\udde6\ud83c[\udde8-\uddec\uddee\uddf1\uddf2\uddf4\uddf6-\uddfa\uddfc\uddfd\uddff]|\ud83c\udde7\ud83c[\udde6\udde7\udde9-\uddef\uddf1-\uddf4\uddf6-\uddf9\uddfb\uddfc\uddfe\uddff]|\ud83c\udde8\ud83c[\udde6\udde8\udde9\uddeb-\uddee\uddf0-\uddf5\uddf7\uddfa-\uddff]|\ud83c\udde9\ud83c[\uddea\uddec\uddef\uddf0\uddf2\uddf4\uddff]|\ud83c\uddea\ud83c[\udde6\udde8\uddea\uddec\udded\uddf7-\uddfa]|\ud83c\uddeb\ud83c[\uddee-\uddf0\uddf2\uddf4\uddf7]|\ud83c\uddec\ud83c[\udde6\udde7\udde9-\uddee\uddf1-\uddf3\uddf5-\uddfa\uddfc\uddfe]|\ud83c\udded\ud83c[\uddf0\uddf2\uddf3\uddf7\uddf9\uddfa]|\ud83c\uddee\ud83c[\udde8-\uddea\uddf1-\uddf4\uddf6-\uddf9]|\ud83c\uddef\ud83c[\uddea\uddf2\uddf4\uddf5]|\ud83c\uddf0\ud83c[\uddea\uddec-\uddee\uddf2\uddf3\uddf5\uddf7\uddfc\uddfe\uddff]|\ud83c\uddf1\ud83c[\udde6-\udde8\uddee\uddf0\uddf7-\uddfb\uddfe]|\ud83c\uddf2\ud83c[\udde6\udde8-\udded\uddf0-\uddff]|\ud83c\uddf3\ud83c[\udde6\udde8\uddea-\uddec\uddee\uddf1\uddf4\uddf5\uddf7\uddfa\uddff]|\ud83c\uddf4\ud83c\uddf2|\ud83c\uddf5\ud83c[\udde6\uddea-\udded\uddf0-\uddf3\uddf7-\uddf9\uddfc\uddfe]|\ud83c\uddf6\ud83c\udde6|\ud83c\uddf7\ud83c[\uddea\uddf4\uddf8\uddfa\uddfc]|\ud83c\uddf8\ud83c[\udde6-\uddea\uddec-\uddf4\uddf7-\uddf9\uddfb\uddfd-\uddff]|\ud83c\uddf9\ud83c[\udde6\udde8\udde9\uddeb-\udded\uddef-\uddf4\uddf7\uddf9\uddfb\uddfc\uddff]|\ud83c\uddfa\ud83c[\udde6\uddec\uddf2\uddf3\uddf8\uddfe\uddff]|\ud83c\uddfb\ud83c[\udde6\udde8\uddea\uddec\uddee\uddf3\uddfa]|\ud83c\uddfc\ud83c[\uddeb\uddf8]|\ud83c\uddfd\ud83c\uddf0|\ud83c\uddfe\ud83c[\uddea\uddf9]|\ud83c\uddff\ud83c[\udde6\uddf2\uddfc]|\ud83c[\udccf\udd8e\udd91-\udd9a\udde6-\uddff\ude01\ude32-\ude36\ude38-\ude3a\ude50\ude51\udf00-\udf20\udf2d-\udf35\udf37-\udf7c\udf7e-\udf84\udf86-\udf93\udfa0-\udfc1\udfc5\udfc6\udfc8\udfc9\udfcf-\udfd3\udfe0-\udff0\udff4\udff8-\udfff]|\ud83d[\udc00-\udc3e\udc40\udc44\udc45\udc51-\udc65\udc6a\udc6f\udc79-\udc7b\udc7d-\udc80\udc84\udc88-\udc8e\udc90\udc92-\udca9\udcab-\udcfc\udcff-\udd3d\udd4b-\udd4e\udd50-\udd67\udda4\uddfb-\ude44\ude48-\ude4a\ude80-\udea2\udea4-\udeb3\udeb7-\udebf\udec1-\udec5\uded0-\uded2\uded5-\uded7\udedd-\udedf\udeeb\udeec\udef4-\udefc\udfe0-\udfeb\udff0]|\ud83e[\udd0d\udd0e\udd10-\udd17\udd20-\udd25\udd27-\udd2f\udd3a\udd3c\udd3f-\udd45\udd47-\udd76\udd78-\uddb4\uddb7\uddba\uddbc-\uddcc\uddd0\uddde-\uddff\ude70-\ude74\ude78-\ude7c\ude80-\ude86\ude90-\udeac\udeb0-\udeba\udec0-\udec2\uded0-\uded9\udee0-\udee7]|[\u23e9-\u23ec\u23f0\u23f3\u267e\u26ce\u2705\u2728\u274c\u274e\u2753-\u2755\u2795-\u2797\u27b0\u27bf\ue50a])|\ufe0f/g,
          o = /\uFE0F/g,
          f = String.fromCharCode(8205),
          t = /[&<>'"]/g,
          n = /^(?:iframe|noframes|noscript|script|select|style|textarea)$/,
          c = String.fromCharCode;
        return d;
        function a(d, u) {
          return document.createTextNode(u ? d.replace(o, "") : d);
        }
        function s(d, u) {
          return "".concat(u.base, u.size, "/", d, u.ext);
        }
        function r(d, u) {
          for (var e, o, f = d.childNodes, t = f.length; t--; )
            3 === (o = (e = f[t]).nodeType)
              ? u.push(e)
              : 1 !== o ||
                "ownerSVGElement" in e ||
                n.test(e.nodeName.toLowerCase()) ||
                r(e, u);
          return u;
        }
        function i(d) {
          return T(d.indexOf(f) < 0 ? d.replace(o, "") : d);
        }
        function l(d, u) {
          for (
            var o,
              f,
              t,
              n,
              c,
              s,
              l,
              m,
              p,
              b,
              _,
              T,
              A,
              E = r(d, []),
              S = E.length;
            S--;

          ) {
            for (
              t = !1,
                n = document.createDocumentFragment(),
                s = (c = E[S]).nodeValue,
                m = 0;
              (l = e.exec(s));

            ) {
              if (
                ((p = l.index) !== m && n.appendChild(a(s.slice(m, p), !0)),
                (T = i((_ = l[0]))),
                (m = p + _.length),
                (A = u.callback(T, u)),
                T && A)
              ) {
                for (f in (((b = new Image()).onerror = u.onerror),
                b.setAttribute("draggable", "false"),
                (o = u.attributes(_, T))))
                  o.hasOwnProperty(f) &&
                    0 !== f.indexOf("on") &&
                    !b.hasAttribute(f) &&
                    b.setAttribute(f, o[f]);
                (b.className = u.className),
                  (b.alt = _),
                  (b.src = A),
                  (t = !0),
                  n.appendChild(b);
              }
              b || n.appendChild(a(_, !1)), (b = null);
            }
            t &&
              (m < s.length && n.appendChild(a(s.slice(m), !0)),
              c.parentNode.replaceChild(n, c));
          }
          return d;
        }
        function m(d, u) {
          return _(d, function (d) {
            var e,
              o,
              f = d,
              n = i(d),
              c = u.callback(n, u);
            if (n && c) {
              for (o in ((f = "<img ".concat(
                'class="',
                u.className,
                '" ',
                'draggable="false" ',
                'alt="',
                d,
                '"',
                ' src="',
                c,
                '"'
              )),
              (e = u.attributes(d, n))))
                e.hasOwnProperty(o) &&
                  0 !== o.indexOf("on") &&
                  -1 === f.indexOf(" " + o + "=") &&
                  (f = f.concat(" ", o, '="', e[o].replace(t, p), '"'));
              f = f.concat("/>");
            }
            return f;
          });
        }
        function p(d) {
          return u[d];
        }
        function b() {
          return null;
        }
        function _(d, u) {
          return String(d).replace(e, u);
        }
        function T(d, u) {
          for (var e = [], o = 0, f = 0, t = 0; t < d.length; )
            (o = d.charCodeAt(t++)),
              f
                ? (e.push(
                    (65536 + ((f - 55296) << 10) + (o - 56320)).toString(16)
                  ),
                  (f = 0))
                : 55296 <= o && o <= 56319
                ? (f = o)
                : e.push(o.toString(16));
          return e.join(u || "-");
        }
      })();
      u.Z = e;
    },
  },
]);
