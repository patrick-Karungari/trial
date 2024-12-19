"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [59612],
  {
    747450: function (e, t, n) {
      n.d(t, {
        u: function () {
          return i;
        },
        m: function () {
          return o;
        },
      });
      const i =
          "https://airtable.com/shrgrUUYpanXEOoor?prefill_RequestStatus-All=Backlog",
        o = "https://scaleapi.slack.com/archives/C02T81FBHSL";
    },
    366322: function (e, t, n) {
      n.d(t, {
        fH: function () {
          return d;
        },
        LO: function () {
          return p;
        },
        wX: function () {
          return m;
        },
      });
      var i = n(798748);
      const o = () => ({
          title: "Triage: Insufficient Capacity Allocations",
          children: [
            {
              title:
                "Are there enough permissions at each level on the project?",
              children: [
                {
                  text: "Check if there are enough attempters",
                  buttonText: "Permission & Assign: Attempters",
                  checklistType: i.dB.Action,
                  actionItem: i.tC.PermissionAndAssignAttempters,
                },
                {
                  text: "Check if there are enough reviewers",
                  buttonText: "Permission & Assign: Reviewers",
                  checklistType: i.dB.Action,
                  actionItem: i.tC.PermissionAndAssignReviewers,
                },
              ],
            },
          ],
        }),
        s = () => {
          const e = {
              text: "Do a quick sanity check of all the courses",
              buttonText: "All project courses",
              checklistType: i.dB.Action,
              actionItem: i.tC.AllProjectCourses,
            },
            t = {
              text: "Do a quick sanity check of the instruction updates changelog",
              buttonText: "Instruction update changelog",
              checklistType: i.dB.Action,
              actionItem: i.tC.InstructionUpdateChangelog,
            },
            n = {
              text: "Check course starts",
              buttonText: "Course starts",
              checklistType: i.dB.Action,
              actionItem: i.tC.CourseStarts,
            },
            o = {
              text: "Check for too many courses per new user",
              buttonText: "Course path",
              checklistType: i.dB.Action,
              actionItem: i.tC.CoursePath,
            };
          return {
            title: "Triage: Low Courses Conversion",
            children: [
              {
                title: "Are workers making progress through courses?",
                children: [
                  e,
                  t,
                  n,
                  {
                    text: "Check for blocking points in courses",
                    buttonText: "Course blocking points",
                    checklistType: i.dB.Action,
                    actionItem: i.tC.CourseBlockingPoints,
                  },
                  {
                    text: "Check course scenarios",
                    buttonText: "Course scenarios",
                    checklistType: i.dB.Action,
                    actionItem: i.tC.CourseScenarios,
                  },
                  o,
                ],
              },
            ],
          };
        },
        r = () => ({
          title: "Triage: Low Benchmark Conversion",
          children: [
            {
              title: "Are benchmark and disabling configs tuned properly?",
              children: [
                {
                  text: "Configure the mininum required number of benchmarks",
                  buttonText: "Tune min num benchmarks config",
                  checklistType: i.dB.Action,
                  actionItem: i.tC.TuneMinNumBenchmarksConfig,
                },
                {
                  text: "Configure the benchmark disabling thresholds",
                  buttonText: "Tune disabling thresholds config",
                  checklistType: i.dB.Action,
                  actionItem: i.tC.TuneDisablingThresholdConfig,
                },
              ],
            },
          ],
        }),
        a = () => ({
          title: "Triage: Low Instruction Item Benchchmark Conversion",
          children: [
            {
              title: "Are benchmark and disabling configs tuned properly?",
              children: [
                {
                  text: "Do a quick sanity check of all the instruction items",
                  buttonText: "All instruction items",
                  checklistType: i.dB.Action,
                  actionItem: i.tC.InstructionItemManager,
                },
                {
                  text: "Configure the mininum required number of instruction item benchmarks",
                  buttonText: "Tune min num instruction item benchmarks config",
                  checklistType: i.dB.Action,
                  actionItem: i.tC.TuneMinNumInstructionItemBenchmarksConfig,
                },
                {
                  text: "Configure the instruction item benchmark disabling thresholds",
                  buttonText:
                    "Tune instruction item disabling thresholds config",
                  checklistType: i.dB.Action,
                  actionItem: i.tC.TuneInstructionItemDisablingThresholdConfig,
                },
              ],
            },
          ],
        }),
        c = () => ({
          title: "Triage: Long Tail Tasks",
          children: [
            {
              title: "Are long tail tasks consuming excess resources?",
              children: [
                {
                  text: "Identify if long tail tasks are a problem for this queue",
                  buttonText: "LTT Dashboard",
                  checklistType: i.dB.Action,
                  actionItem: i.tC.CheckForLongTailTasks,
                },
                {
                  text: "Demote reviewers who frequently let through tasks you want to recall",
                  buttonText: "Demote reviewers",
                  checklistType: i.dB.Action,
                  actionItem: i.tC.DemoteSuspiciousReviewers,
                },
                {
                  text: "Assign long tail tasks to your trusted reviewers",
                  buttonText: "Assign LTT",
                  checklistType: i.dB.Action,
                  actionItem: i.tC.AssignTrustedWorkersLTT,
                },
                {
                  text: "Update project config to send rejected tasks back to the original attempter",
                  buttonText: "Project config",
                  checklistType: i.dB.Action,
                  actionItem: i.tC.CheckAssignRejectionsConfig,
                },
                {
                  text: "Speed audit long tail tasks from the past day",
                  buttonText: "Speed audit",
                  checklistType: i.dB.Action,
                  actionItem: i.tC.SpeedAuditLTT,
                },
              ],
            },
          ],
        }),
        l = (() => {
          const e = {
            title: "Overview",
            children: [
              {
                title: "This page is under construction. \ud83d\udea7",
                children: [],
              },
            ],
          };
          return { title: i.NZ.Overview, children: [e] };
        })(),
        d = (() => {
          const e = {
              title: "Workflow: Low Throughput",
              children: [
                {
                  title: "Is throughput blocked?",
                  children: [
                    {
                      text: "Check Corp Explain",
                      buttonText: "Corp Explain",
                      checklistType: i.dB.Action,
                      actionItem: i.tC.CorpExplain,
                    },
                    {
                      text: "Check Allocation Explain",
                      buttonText: "Allocation Explain",
                      checklistType: i.dB.Action,
                      actionItem: i.tC.AllocationExplain,
                    },
                    {
                      text: "Check for misconfigured configs and benchmark state",
                      buttonText: "Misconfigured supply levers",
                      checklistType: i.dB.Action,
                      actionItem: i.tC.MisconfiguredSupplyLevers,
                    },
                    {
                      text: "Check for throttles",
                      buttonText: "Throttles",
                      checklistType: i.dB.Action,
                      actionItem: i.tC.Throttles,
                    },
                    {
                      text: "Check whether long tail tasks are consuming excess resources",
                      buttonText: "Long tail tasks",
                      checklistType: i.dB.Triage,
                      triageItem: i.zZ.LongTailTasks,
                    },
                    {
                      text: "Check if contributors have paused your project",
                      buttonText: "Triage Contributor Choice",
                      checklistType: i.dB.Action,
                      actionItem: i.tC.TriagePausedPermissionGroup,
                    },
                  ],
                },
                {
                  title: "Low conversion from courses?",
                  children: [
                    {
                      text: "Check whether contributors are completing required courses",
                      buttonText: "Low courses conversion",
                      checklistType: i.dB.Triage,
                      triageItem: i.zZ.LowCoursesConversion,
                    },
                  ],
                },
                {
                  title:
                    "Low conversion from benchmarks and instruction item benchmarks?",
                  children: [
                    {
                      text: "Check whether contributors are meeting benchmark config requirements",
                      buttonText: "Low benchmark conversion",
                      checklistType: i.dB.Triage,
                      triageItem: i.zZ.LowBenchmarkConversion,
                    },
                    {
                      text: "Check whether contributors are meeting instruction item benchmark config requirements",
                      buttonText: "Low instruction item benchmark conversion",
                      checklistType: i.dB.Triage,
                      triageItem: i.zZ.LowInstructionItemBenchmarkConversion,
                    },
                  ],
                },
                {
                  title:
                    "Do I have enough capacity allocation? Did that damn allocation model give me crowd contributors?",
                  children: [
                    {
                      text: "Check if you have Tableau access",
                      buttonText: "Tableau Access",
                      checklistType: i.dB.Action,
                      actionItem: i.tC.TableauAccess,
                    },
                    {
                      text: "Check your manual and automated allocations",
                      buttonText: "Capacity Allocation",
                      checklistType: i.dB.Action,
                      actionItem: i.tC.CapacityAllocation,
                    },
                    {
                      text: "Add additional permissions and/or permissions on the project",
                      checklistType: i.dB.Triage,
                      buttonText: "Insufficient capacity allocations",
                      triageItem: i.zZ.InsufficientCapacityAllocations,
                    },
                  ],
                },
                {
                  title: "I'm here and still stuck. What do I do?",
                  children: [
                    {
                      text: "Consider consulting other Ops processes",
                      buttonText: "Check Ops processes",
                      checklistType: i.dB.Action,
                      actionItem: i.tC.ThroughputOpsProcesses,
                    },
                  ],
                },
              ],
            },
            t = {
              title: "Workflow: Linters",
              children: [
                {
                  title: "Check active linters",
                  children: [
                    {
                      text: "Check what linters the project currently has",
                      buttonText: "Active linters",
                      checklistType: i.dB.Action,
                      actionItem: i.tC.LinterConfig,
                    },
                    {
                      text: "Check if linters are blocking throughput",
                      buttonText: "Debug linters",
                      checklistType: i.dB.Action,
                      actionItem: i.tC.LinterDebugging,
                    },
                  ],
                },
                {
                  title: "Add new linters",
                  children: [
                    {
                      text: "Test linters before adding them to the project",
                      buttonText: "Test linters",
                      checklistType: i.dB.Action,
                      actionItem: i.tC.TuneLinters,
                    },
                    {
                      text: "Add new linters to the project",
                      buttonText: "Add linters",
                      checklistType: i.dB.Action,
                      actionItem: i.tC.LinterConfig,
                    },
                  ],
                },
                {
                  title:
                    "Take actions on tasks/contributors which failed linters",
                  children: [
                    {
                      text: "List and audit tasks which failed lint",
                      buttonText: "Audit lint results",
                      checklistType: i.dB.Action,
                      actionItem: i.tC.AuditLintResults,
                    },
                    {
                      text: "Send low quality tasks back to queue",
                      buttonText: "SBQ tasks",
                      checklistType: i.dB.Action,
                      actionItem: i.tC.MoveTasksInPipeline,
                    },
                    {
                      text: "Demote contributors who consistently fail linters",
                      buttonText: "Demote contributors",
                      checklistType: i.dB.Action,
                      actionItem: i.tC.PermissionAndAssignReviewers,
                    },
                    {
                      text: "Teach contributors by adding courses",
                      buttonText: "Add courses",
                      checklistType: i.dB.Action,
                      actionItem: i.tC.AllProjectCourses,
                    },
                    {
                      text: "Teach contributors by adding remedial courses",
                      buttonText: "Add remedial courses",
                      checklistType: i.dB.Action,
                      actionItem: i.tC.RemedialCourses,
                    },
                  ],
                },
              ],
            },
            n = o(),
            l = r(),
            d = a(),
            u = s(),
            p = c();
          return { title: i.NZ.Problems, children: [e, t, u, l, d, n, p] };
        })(),
        u =
          ((() => {
            const e = {
              title: "Zero Review + Spotter Pipeline: Setup Checklist",
              children: [
                {
                  title:
                    "Have you properly setup zero review + spotter for this queue?",
                  children: [
                    {
                      text: "Spotter Config: Save Initial Message Config",
                      buttonText: "",
                      checklistType: i.dB.Action,
                      actionItem: i.tC.PermissionAndAssignSuperAttempters,
                    },
                    {
                      text: "Spotter Config: Set Pipeline Configuration",
                      buttonText: "",
                      checklistType: i.dB.Action,
                      actionItem: i.tC.PermissionAndAssignSuperAttempters,
                    },
                    {
                      text: "Spotter Config: Set Spotter Payment",
                      buttonText: "",
                      checklistType: i.dB.Action,
                      actionItem: i.tC.PermissionAndAssignSuperAttempters,
                    },
                    {
                      text: '0r Config: Set up Task Holdings. Use the strategy "zeroReview", enable for all your active review layers (except for L10), and input the Send to Audit Stage Rate (1 - L10 sample rate). Example: if you want 10% of the SAs\u2019 tasks to go to L10 (spotters) then set the Send to Audit Stage Rate to 0.9.',
                      buttonText: "",
                      checklistType: i.dB.Action,
                      actionItem: i.tC.PermissionAndAssignSuperAttempters,
                    },
                    {
                      text: "0r Config: Confirm that Attempter pay is set up",
                      buttonText: "",
                      checklistType: i.dB.Action,
                      actionItem: i.tC.PermissionAndAssignSuperAttempters,
                    },
                    {
                      text: "Create a slack channel for all your spotters",
                      buttonText: "",
                      checklistType: i.dB.Action,
                      actionItem: i.tC.PermissionAndAssignSuperAttempters,
                    },
                    {
                      text: "Create a Notion webpage for your spotters. This is how you will share instructions, update common errors, share bonus information, and more. Message Shawn Farsai for access to the Notion workspace. You can create a new Spotter Webpage for your project in the table here. Make sure you use the template by clicking the `new` dropdown and picking the templated highlighted in the image below",
                      buttonText: "",
                      checklistType: i.dB.Action,
                      actionItem: i.tC.PermissionAndAssignSuperAttempters,
                    },
                  ],
                },
              ],
            };
            i.NZ.ZeroReviewSetupChecklist;
          })(),
          (() => {
            const e = {
              title: "",
              children: [
                {
                  title: "",
                  children: [
                    {
                      text: "Spend 1-2 hours spotting your own queue to learn the optimal workflow",
                      buttonText: "",
                      checklistType: i.dB.Action,
                      actionItem: i.tC.PermissionAndAssignSuperAttempters,
                    },
                    {
                      text: "Once you learn the workflow. Start filling out your Notion page with instructions and workflows for your spotters.",
                      buttonText: "",
                      checklistType: i.dB.Action,
                      actionItem: i.tC.PermissionAndAssignSuperAttempters,
                    },
                    {
                      text: "Find your spotters (don\u2019t give them spotter permissions yet)",
                      buttonText: "Permission Spotters",
                      checklistType: i.dB.Action,
                      actionItem: i.tC.PermissionAndAssignSpotters,
                    },
                    {
                      text: "Add them to slack, share the notion, and maybe even do an orientation webinar",
                      buttonText: "",
                      checklistType: i.dB.Action,
                      actionItem: i.tC.PermissionAndAssignSuperAttempters,
                    },
                    {
                      text: "Now give the spotters permissions",
                      buttonText: "Permission Spotters",
                      checklistType: i.dB.Action,
                      actionItem: i.tC.PermissionAndAssignSpotters,
                    },
                    {
                      text: "Promote Super Attempters",
                      buttonText: "Permission Super Attempters",
                      checklistType: i.dB.Action,
                      actionItem: i.tC.PermissionAndAssignSuperAttempters,
                    },
                  ],
                },
              ],
            };
            i.NZ.ZeroReviewSetupChecklist;
          })(),
          (() => {
            const e = {
              title: "Zero Review + Spotter Pipeline: Daily Checklist",
              children: [
                {
                  title:
                    "Are my super attempters and spotters performing well?",
                  children: [
                    {
                      text: "Check your Spotter TP and Spotter Send Rate",
                      buttonText: "",
                      checklistType: i.dB.Action,
                      actionItem: i.tC.TableauAccess,
                    },
                    {
                      text: "Not productive \u2192 Message those people in slack to see why they\u2019re not working. Maybe you need to set a higher quota or change the pay formula",
                      buttonText: "",
                      checklistType: i.dB.Action,
                      actionItem: i.tC.TableauAccess,
                      shouldIndent: !0,
                    },
                    {
                      text: "Some spotters have a low send rate",
                      buttonText: "Spotter Quality Manual Monitoring",
                      checklistType: i.dB.Action,
                      actionItem: i.tC.SpotterQualityManualMonitoring,
                      shouldIndent: !0,
                    },
                    {
                      text: "I need more spotters",
                      buttonText: "Permission & Assign: Spotters",
                      checklistType: i.dB.Action,
                      actionItem: i.tC.PermissionAndAssignSpotters,
                      shouldIndent: !0,
                    },
                    {
                      text: "Check your quality - QIR sores in the Deep dive dash",
                      buttonText: "",
                      checklistType: i.dB.Action,
                      actionItem: i.tC.TableauAccess,
                    },
                    {
                      text: "Is overall Spotters quality bad or just some spotters are bad?",
                      buttonText: "",
                      checklistType: i.dB.Action,
                      actionItem: i.tC.TableauAccess,
                      shouldIndent: !0,
                    },
                    {
                      text: "Some are bad",
                      buttonText: "Demote: Spotters to L1",
                      checklistType: i.dB.Action,
                      actionItem: i.tC.DemoteSpotters,
                      shouldDoubleIndent: !0,
                    },
                    {
                      text: "Overall quality is bad \u2192 You need to calibrate your spotters and teach them to be stricter. ",
                      buttonText: "Spotter Quality Manual Monitoring",
                      checklistType: i.dB.Action,
                      actionItem: i.tC.SpotterQualityManualMonitoring,
                      shouldDoubleIndent: !0,
                    },
                    {
                      text: "Are there common errors that everyone is making \u2192 Message in slack and explain to everyone the common error they should look for",
                      buttonText: "",
                      checklistType: i.dB.Action,
                      actionItem: i.tC.TableauAccess,
                      shouldDoubleIndent: !0,
                    },
                    {
                      text: "Is SAs quality bad?",
                      buttonText: "",
                      checklistType: i.dB.Action,
                      actionItem: i.tC.TableauAccess,
                      shouldIndent: !0,
                    },
                    {
                      text: "Demote Super Attempers",
                      buttonText: "Demote: Super Attempters to L0",
                      checklistType: i.dB.Action,
                      actionItem: i.tC.DemoteSuperAttempters,
                      shouldDoubleIndent: !0,
                    },
                    {
                      text: "Are your spotters leaving good inline comments? ",
                      buttonText: "",
                      checklistType: i.dB.Action,
                      actionItem: i.tC.DemoteSuperAttempters,
                    },
                    {
                      text: "Download spotter comments and analyze trends.",
                      buttonText: "Download spotter comments",
                      checklistType: i.dB.Action,
                      actionItem: i.tC.AnalyzeInlineComments,
                      shouldIndent: !0,
                    },
                    {
                      text: "Can we promote more attempters to SA?",
                      buttonText: "",
                      checklistType: i.dB.Action,
                      actionItem: i.tC.DemoteSuperAttempters,
                    },
                    {
                      text: "Find attempters to promote",
                      buttonText: "Permission & Assign: Super Attempters",
                      checklistType: i.dB.Action,
                      actionItem: i.tC.PermissionAndAssignSuperAttempters,
                      shouldIndent: !0,
                    },
                  ],
                },
              ],
            };
            i.NZ.ZeroReviewDailyChecklist;
          })(),
          [
            (() => {
              const e = {
                title: "Inline Tools",
                children: [
                  {
                    title: "Task Management",
                    children: [
                      {
                        text: "",
                        buttonText: "Send Tasks to Customer",
                        checklistType: i.dB.Action,
                        actionItem: i.tC.SendTasksToCustomer,
                      },
                      {
                        text: "",
                        buttonText: "Move Tasks in Pipeline",
                        checklistType: i.dB.Action,
                        actionItem: i.tC.MoveTasksInPipeline,
                      },
                      {
                        text: "",
                        buttonText: "Move Tasks in PipelineV3",
                        checklistType: i.dB.Action,
                        actionItem: i.tC.MoveTasksInPipelineV3,
                      },
                      {
                        text: "",
                        buttonText: "Quarantine/Unquarantine Tasks or Subtasks",
                        checklistType: i.dB.Action,
                        actionItem: i.tC.QuarantineAndUnquarantineSubtasks,
                      },
                      {
                        text: "",
                        buttonText: "Throttles",
                        checklistType: i.dB.Action,
                        actionItem: i.tC.Throttles,
                      },
                    ],
                    hideCheckboxes: !0,
                  },
                  {
                    title: "Permission Management",
                    children: [
                      {
                        text: "",
                        buttonText: "Worker Sources",
                        checklistType: i.dB.Action,
                        actionItem: i.tC.WorkerSources,
                      },
                      {
                        text: "",
                        buttonText: "Permission & Assign: Attempters",
                        checklistType: i.dB.Action,
                        actionItem: i.tC.PermissionAndAssignAttempters,
                      },
                      {
                        text: "",
                        buttonText: "Permission & Assign: Reviewers",
                        checklistType: i.dB.Action,
                        actionItem: i.tC.PermissionAndAssignReviewers,
                      },
                      {
                        text: "",
                        buttonText:
                          "Permission & Assign: PipelineV3 QIR Auditors",
                        checklistType: i.dB.Action,
                        actionItem:
                          i.tC.PermissionAndAssignPipelineV3QIRAuditors,
                      },
                      {
                        text: "",
                        buttonText: "Demote Reviewers to Attempters",
                        checklistType: i.dB.Action,
                        actionItem: i.tC.DemoteReviewers,
                      },
                      {
                        text: "",
                        buttonText: "Mass Disable Contributors",
                        checklistType: i.dB.Action,
                        actionItem: i.tC.MassDisableTaskers,
                      },
                      {
                        text: "",
                        buttonText: "Mass Unassign Contributors",
                        checklistType: i.dB.Action,
                        actionItem: i.tC.MassUnassignProject,
                      },
                      {
                        text: "[Advanced]",
                        buttonText: "Retroactive Enable/Disable",
                        checklistType: i.dB.Action,
                        actionItem: i.tC.RetroactiveEnableDisable,
                      },
                    ],
                    hideCheckboxes: !0,
                  },
                  {
                    title: "Troubleshooting",
                    children: [
                      {
                        text: "",
                        buttonText: "Corp Explain",
                        checklistType: i.dB.Action,
                        actionItem: i.tC.CorpExplain,
                      },
                      {
                        text: "",
                        buttonText: "Supply Lever Validity",
                        checklistType: i.dB.Action,
                        actionItem: i.tC.MisconfiguredSupplyLevers,
                      },
                      {
                        text: "",
                        buttonText: "Capacity Allocation View",
                        checklistType: i.dB.Action,
                        actionItem: i.tC.CapacityAllocation,
                      },
                    ],
                    hideCheckboxes: !0,
                  },
                ],
              };
              return { title: i.NZ.Throughput, children: [e] };
            })(),
            (() => {
              const e = {
                title: "Inline Tools",
                children: [
                  {
                    title: "",
                    children: [
                      {
                        text: "[TextCollection Only]",
                        buttonText: "Generate Confusion Matrix",
                        checklistType: i.dB.Action,
                        actionItem: i.tC.GenerateConfusionMatrix,
                      },
                    ],
                    hideCheckboxes: !0,
                  },
                ],
              };
              return { title: i.NZ.DisablingLinting, children: [e] };
            })(),
            (() => {
              const e = {
                title: "Inline Tools",
                children: [
                  {
                    title: "",
                    children: [
                      {
                        text: "",
                        buttonText: "Benchmark Serving Configs",
                        checklistType: i.dB.Action,
                        actionItem: i.tC.BenchmarkServingConfigs,
                      },
                      {
                        text: "",
                        buttonText: "Benchmark-Related Nice Configs",
                        checklistType: i.dB.Action,
                        actionItem: i.tC.BenchmarkNiceConfigs,
                      },
                      {
                        text: "",
                        buttonText: "Misconfigured Supply Levers",
                        checklistType: i.dB.Action,
                        actionItem: i.tC.MisconfiguredSupplyLevers,
                      },
                      {
                        text: "",
                        buttonText: "Configure Specific Benchmarks",
                        checklistType: i.dB.Action,
                        actionItem: i.tC.BenchmarkConfiguration,
                      },
                      {
                        text: "",
                        buttonText: "Instruction Item Manager",
                        checklistType: i.dB.Action,
                        actionItem: i.tC.InstructionItemManager,
                      },
                    ],
                    hideCheckboxes: !0,
                  },
                ],
              };
              return { title: i.NZ.Benchmarks, children: [e] };
            })(),
            (() => {
              const e = {
                title: "Inline Tools",
                children: [
                  {
                    title: "",
                    children: [
                      {
                        text: "[TextCollection Only]",
                        buttonText: "Personalized Courses",
                        checklistType: i.dB.Action,
                        actionItem: i.tC.PersonalizedCourses,
                      },
                      {
                        text: "[TextCollection Only]",
                        buttonText: "Generate Feedback Center",
                        checklistType: i.dB.Action,
                        actionItem: i.tC.GenerateFeedbackCenter,
                      },
                    ],
                    hideCheckboxes: !0,
                  },
                ],
              };
              return { title: i.NZ.Training, children: [e] };
            })(),
            (() => {
              const e = {
                title: "Incentives",
                children: [
                  {
                    title: "This is a monitoring/incentives section checklist",
                    children: [
                      {
                        text: "This is a triage checklist item (monitoring/incentives section)",
                        buttonText: "A triage button",
                        checklistType: i.dB.Triage,
                        triageItem: i.zZ.Placeholder,
                      },
                      {
                        text: "This is an action checklist item (monitoring/incentives section)",
                        buttonText: "An action button",
                        checklistType: i.dB.Action,
                        actionItem: i.tC.Placeholder,
                      },
                    ],
                  },
                ],
              };
              return { title: i.NZ.Incentives, children: [e] };
            })(),
          ]),
        p = {
          [i.zZ.InsufficientCapacityAllocations]: o(),
          [i.zZ.LowBenchmarkConversion]: r(),
          [i.zZ.LowInstructionItemBenchmarkConversion]: a(),
          [i.zZ.LowCoursesConversion]: s(),
          [i.zZ.Placeholder]: {
            title: "Triage: Placeholder -- TODO",
            children: [
              {
                title: "This is a placeholder section checklist",
                children: [
                  {
                    text: "This is a placeholder action item for placeholder triage",
                    buttonText: "A button",
                    checklistType: i.dB.Action,
                    actionItem: i.tC.Placeholder,
                  },
                ],
              },
            ],
          },
          [i.zZ.LongTailTasks]: c(),
        },
        m =
          ((() => {
            const e = {
              title: "Inline Tools",
              children: [
                {
                  title: "Permissions & Contributors",
                  children: [
                    {
                      text: "",
                      buttonText: "Permission & Assign: Super Attempters",
                      checklistType: i.dB.Action,
                      actionItem: i.tC.PermissionAndAssignSuperAttempters,
                    },
                    {
                      text: "",
                      buttonText: "Permission & Assign: Spotters",
                      checklistType: i.dB.Action,
                      actionItem: i.tC.PermissionAndAssignSpotters,
                    },
                    {
                      text: "",
                      buttonText: "Demote: Super Attempters to L0",
                      checklistType: i.dB.Action,
                      actionItem: i.tC.DemoteSuperAttempters,
                    },
                    {
                      text: "",
                      buttonText: "Demote: Spotters to L1",
                      checklistType: i.dB.Action,
                      actionItem: i.tC.DemoteSpotters,
                    },
                  ],
                  hideCheckboxes: !0,
                },
                {
                  title: "Task Management",
                  children: [
                    {
                      text: "",
                      buttonText: "Reserve Subtasks for Zero Review",
                      checklistType: i.dB.Action,
                      actionItem: i.tC.SubtaskReservation,
                    },
                    {
                      text: "",
                      buttonText: "Recall Super Attempter Tasks",
                      checklistType: i.dB.Action,
                      actionItem: i.tC.MoveTasksInPipeline,
                    },
                    {
                      text: "",
                      buttonText: "Release Audit Stages",
                      checklistType: i.dB.Action,
                      actionItem: i.tC.ReleaseAuditStages,
                    },
                  ],
                  hideCheckboxes: !0,
                },
                {
                  title: "Quality",
                  children: [
                    {
                      text: "",
                      buttonText: "Spotter Performance Decision Tree",
                      checklistType: i.dB.Action,
                      actionItem: i.tC.SpotterPerformanceDecisionTree,
                    },
                    {
                      text: "",
                      buttonText: "Spotter Quality Manual Monitoring",
                      checklistType: i.dB.Action,
                      actionItem: i.tC.SpotterQualityManualMonitoring,
                    },
                    {
                      text: "",
                      buttonText: "Spotter Audit Tool",
                      checklistType: i.dB.Action,
                      actionItem: i.tC.SpotterAuditTool,
                    },
                  ],
                  hideCheckboxes: !0,
                },
              ],
            };
            i.NZ.SpotterPipeline;
          })(),
          (() => {
            const e = {
              title: "Inline Tools",
              children: [
                {
                  title: "Permissions & Contributors",
                  children: [
                    {
                      text: "",
                      buttonText: "Promote: Attempters to Spotters",
                      checklistType: i.dB.Action,
                      actionItem: i.tC.PromoteAttemptersToSpotters,
                    },
                    {
                      text: "",
                      buttonText: "Demote: Spotters to Attempters",
                      checklistType: i.dB.Action,
                      actionItem: i.tC.DemoteSpottersToAttempters,
                    },
                  ],
                  hideCheckboxes: !0,
                },
              ],
            };
            i.NZ.Autopilot;
          })(),
          [l, d, ...u]);
    },
    59612: function (e, t, n) {
      n.d(t, {
        RV: function () {
          return we;
        },
        ZP: function () {
          return Be;
        },
      });
      var i = n(824246),
        o = n(792739),
        s = n(285556),
        r = n(271599),
        a = n(167469),
        c = n(372680),
        l = n(599789),
        d = n(39561),
        u = n(589593),
        p = n(958008),
        m = n(604375),
        h = n(629586),
        x = n(68649),
        g = n(161320),
        v = n.n(g),
        T = n(686677),
        j = n(827378),
        y = n(875333),
        f = n(700190),
        k = n(279220),
        b = n(411356),
        A = n(802638);
      function C(e, t, n, i, o, s, r) {
        try {
          var a = e[s](r),
            c = a.value;
        } catch (l) {
          return void n(l);
        }
        a.done ? t(c) : Promise.resolve(c).then(i, o);
      }
      const S = (0, x.ZL)({
        button: { marginLeft: 10, float: "right" },
        marginTop: { marginTop: 24 },
      });
      var I = ({
          projectId: e,
          isModalOpen: t,
          setModalOpen: n,
          taskType: o,
          projectDescription: r,
          setProjectDescription: c,
          isAttemptCompare: l,
          setIsAttemptCompare: d,
        }) => {
          const u = S(),
            { 0: p, 1: h } = (0, j.useState)(!1),
            x = (function () {
              var t,
                i =
                  ((t = function* () {
                    h(!0);
                    try {
                      yield (0, s.ZP)(
                        null,
                        "corp-api/update_project_description",
                        {
                          method: "POST",
                          body: {
                            description: r,
                            project: e,
                            isAttemptCompare: l,
                          },
                        }
                      ),
                        n(!1);
                    } catch (t) {
                      (0, s.vj)(t, { handleHttp: !0 });
                    } finally {
                      h(!1);
                    }
                  }),
                  function () {
                    var e = this,
                      n = arguments;
                    return new Promise(function (i, o) {
                      var s = t.apply(e, n);
                      function r(e) {
                        C(s, i, o, r, a, "next", e);
                      }
                      function a(e) {
                        C(s, i, o, r, a, "throw", e);
                      }
                      r(void 0);
                    });
                  });
              return function () {
                return i.apply(this, arguments);
              };
            })();
          return (0, i.jsxs)(A.u_, {
            isOpen: t,
            onRequestClose: () => n(!1),
            children: [
              (0, i.jsx)(A.xB, {
                onRequestClose: () => n(!1),
                children: "Update Project Description",
              }),
              (0, i.jsxs)(A.fe, {
                children: [
                  (0, i.jsx)(b.oH, {
                    value: r,
                    placeholder: r,
                    onChange: (e) => c(e.target.value),
                  }),
                  o === a.TaskType.Chat &&
                    (0, i.jsxs)("div", {
                      className: u.marginTop,
                      children: [
                        (0, i.jsx)(m.rs, {
                          label: "Is Attempt Compare",
                          checked: l,
                          onChange: () => d(!l),
                        }),
                        (0, i.jsxs)("p", {
                          children: [
                            "Attempt Compare projects include 1. response writing or rewriting during attempt, and 2. side-x-side comparison against SOTA model during review.",
                            " ",
                            (0, i.jsx)("a", {
                              href: "https://scale.atlassian.net/wiki/spaces/OP/pages/474120212/AttemptCompare+Pipeline",
                              children: "See Docs",
                            }),
                          ],
                        }),
                      ],
                    }),
                  (0, i.jsx)("br", {}),
                  (0, i.jsx)(b.zx, {
                    primary: !0,
                    type: "button",
                    disabled: p,
                    className: u.button,
                    onClick: x,
                    children: p ? "Loading..." : "Save",
                  }),
                  (0, i.jsx)("br", {}),
                ],
              }),
            ],
          });
        },
        w = n(623387),
        P = n(798748),
        N = n(635003),
        _ = n(819382),
        B = n(917821),
        E = n(478),
        R = n(366322),
        O = n(554211),
        D = n(500718),
        q = n(400417);
      function $(e, t, n, i, o, s, r) {
        try {
          var a = e[s](r),
            c = a.value;
        } catch (l) {
          return void n(l);
        }
        a.done ? t(c) : Promise.resolve(c).then(i, o);
      }
      const L = (e) => {
          const t = G(),
            n =
              e.activeScrollName === e.title
                ? t.selectedNavItemElement
                : t.navItemElem;
          return (0, i.jsx)("div", {
            children: (0, i.jsx)("a", {
              className: n,
              href: `#${e.title.replace(/\s+/g, "").toLowerCase()}`,
              children: e.title,
            }),
          });
        },
        M = (e) => {
          const t = G(),
            n = (0, T.useRouter)(),
            o =
              e.activeScrollName === e.title
                ? t.selectedNavItemElement
                : t.navItemElem;
          return (0, i.jsx)("div", {
            onClick: () => {
              n.push(e.link);
            },
            children: (0, i.jsxs)("a", {
              className: `${o}`,
              style: { display: "flex", alignItems: "start" },
              children: [
                e.redirectsToOpsHub &&
                  (0, i.jsx)("div", {
                    style: {
                      height: 23,
                      width: 23,
                      marginLeft: -5,
                      marginTop: -2,
                    },
                    children: (0, i.jsx)(q.o, {}),
                  }),
                (0, i.jsx)("div", { children: e.title }),
              ],
            }),
          });
        },
        Z = (e) => {
          const t = G(),
            n = (0, T.useRouter)();
          return (0, i.jsx)("div", {
            children:
              e.sectionTitle &&
              (0, i.jsxs)("div", {
                onClick: () => {
                  e.setActionItem && e.setActionItem(void 0),
                    e.sectionTitle === P.NZ.Problems
                      ? n.push(`/corp/qm/queue/${e.projectId}/problems`)
                      : n.push(`/corp/qm/queue/${e.projectId}/overview`);
                },
                children: [
                  (0, i.jsx)("div", {
                    className: t.navSection,
                    children: (0, i.jsx)(h.H3, {
                      children: e.sectionTitle.toUpperCase(),
                    }),
                  }),
                  e.sectionChildren.map((t) =>
                    (0, i.jsx)(
                      L,
                      { title: t.title, activeScrollName: e.activeScrollName },
                      e.sectionTitle + t.title
                    )
                  ),
                ],
              }),
          });
        },
        G = (0, x.ZL)({
          sectionTitle: {
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: "0.7px",
            margin: 0,
            padding: 8,
            marginTop: 12,
          },
          navMask: {
            position: "fixed",
            bottom: 0,
            width: 300,
            height: "50%",
            pointerEvents: "none",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 80%, rgba(255,255,255,0.9) 100%)",
          },
          navItemElem: {
            display: "block",
            color: "black",
            padding: "2px 0px",
            fontSize: 14,
            lineHeight: "20px",
            fontWeight: 400,
            borderRadius: 4,
            opacity: 0.65,
            transition: "all 120ms ease-out",
            "&:hover": { opacity: 1 },
          },
          selectedNavItemElement: {
            display: "block",
            color: "var(--color-RemoBlue)",
            padding: "2px 0px",
            fontSize: 14,
            lineHeight: "20px",
            fontWeight: 600,
            borderRadius: 4,
            opacity: 0.65,
            transition: "all 120ms ease-out",
            "&:hover": { opacity: 1 },
          },
          navSection: { marginTop: 24 },
          externalLink: { color: "black", fontSize: 14, fontWeight: 400 },
        });
      var W,
        z = (e) => {
          var t, n;
          const {
              projectId: o,
              activeScrollName: s,
              taskType: r,
              taskTemplateVersion: c,
              hasBaseProject: d,
              quickLinterTaskTypes: u,
              usesPipelineV3: p,
            } = e,
            { projectConfig: m } = (0, _.Z)(o),
            { project: x } = (0, B.Z)(o),
            g =
              (null === x || void 0 === x ? void 0 : x.businessUnit) ===
                l.BusinessUnit.GenerativeAIDataEngine &&
              (null === x || void 0 === x ? void 0 : x.businessUnitProduct) ===
                l.BusinessUnitProduct.RLHF,
            v = G(),
            T = (0, l.isContentAndLanguage)(r),
            j = T && -1 === c,
            y = [
              a.TaskType.DocumentTranscription,
              a.TaskType.NamedEntityRecognition,
              a.TaskType.GenericDataCollection,
              a.TaskType.ImageAnnotation,
            ].includes(r),
            f = T,
            b = T,
            A = (0, O.ZP)("enable-ontology-versioning", { projectId: o }, !1),
            { value: C } = (0, k.Z)(
              ((S = function* () {
                return (0, E.isTaxonomyManagementConfigEnabled)(o);
              }),
              function () {
                var e = this,
                  t = arguments;
                return new Promise(function (n, i) {
                  var o = S.apply(e, t);
                  function s(e) {
                    $(o, n, i, s, r, "next", e);
                  }
                  function r(e) {
                    $(o, n, i, s, r, "throw", e);
                  }
                  s(void 0);
                });
              }),
              [o]
            );
          var S;
          const I = A || C,
            w = r === a.TaskType.DocumentTranscription,
            q =
              !p ||
              [
                a.TaskType.TextCollection,
                a.TaskType.Chat,
                a.TaskType.MultiChat,
                a.TaskType.ChatExperimental,
                a.TaskType.ChatV2,
                a.TaskType.SensorFusion,
              ].includes(r),
            L =
              r === a.TaskType.TextCollection ||
              (0, l.isTaskType2D)(r) ||
              ((0, l.isTaskTypeLidar)(r) && r !== a.TaskType.LidarLinking),
            W = r === a.TaskType.TextCollection,
            z = !d && D.ALLOWED_PRODUCT_TYPES.includes(r),
            U = T,
            F =
              e.projectType === l.ProjectType.SelfServe ||
              (null === m ||
              void 0 === m ||
              null === (t = m.config) ||
              void 0 === t ||
              null === (n = t.nextGenInstructionsConfig) ||
              void 0 === n
                ? void 0
                : n.enabled.value),
            V = (0, O.ZP)(
              "project-documents-announcements",
              { projectId: o },
              !1
            );
          return (0, i.jsxs)("div", {
            children: [
              (0, i.jsxs)("div", {
                children: [
                  (0, i.jsx)("div", {
                    className: v.navSection,
                    children: (0, i.jsx)(h.H3, { children: "Project Setup" }),
                  }),
                  j &&
                    (0, i.jsx)(M, {
                      title: "Archetype Selector",
                      link: `/corp/qm/queue/${o}/archetypes`,
                      activeScrollName: s,
                    }),
                  I &&
                    (0, i.jsx)(M, {
                      title: "Ontology Manager",
                      link: `/corp/qm/queue/${o}/ontologyManager`,
                      activeScrollName: s,
                    }),
                  z &&
                    (0, i.jsx)(M, {
                      title: P.NZ.AVTaxonomyService,
                      link: `/corp/qm/queue/${o}/avTaxonomyService`,
                      activeScrollName: s,
                    }),
                  y &&
                    (0, i.jsx)(M, {
                      title: "Task Params Editor",
                      link: `/corp/qm/queue/${o}/params`,
                      activeScrollName: s,
                    }),
                  w &&
                    (0, i.jsx)(M, {
                      title: "Document Task Creator",
                      link: `/corp/qm/queue/${o}/documentTaskCreator`,
                      activeScrollName: s,
                    }),
                  q &&
                    g &&
                    (0, i.jsx)(M, {
                      title: "Pipeline Editor",
                      link: `/corp/genai-ops-hub/projects/${o}/${N.s4.Throughput}/${N.gQ.PipelineEditor}/${N.OJ.Editor}`,
                      activeScrollName: s,
                      redirectsToOpsHub: !0,
                    }),
                  g &&
                    (0, i.jsx)(M, {
                      title: "Project Roles and Responsibilities",
                      link: `/corp/genai-ops-hub/projects/${o}/${N.s4.Overview}`,
                      activeScrollName: s,
                      redirectsToOpsHub: !0,
                    }),
                  (0, i.jsx)(M, {
                    title: P.NZ.StaffingExceptionForm,
                    link: `/corp/qm/queue/${o}/staffingExceptionForm`,
                    activeScrollName: s,
                  }),
                  L &&
                    (0, i.jsx)(M, {
                      title: P.NZ.GraderConfigsEditor,
                      link: `/corp/qm/queue/${o}/graderConfigsEditor`,
                      activeScrollName: s,
                    }),
                  (0, i.jsx)(M, {
                    title: P.NZ.BillingVersionEditor,
                    link: `/corp/qm/queue/${o}/billingVersionEditor`,
                    activeScrollName: s,
                  }),
                  f &&
                    g &&
                    (0, i.jsx)(M, {
                      title: "Task Templates Editor",
                      link: `/corp/genai-ops-hub/projects/${o}/${N.s4.ChatTask}/${N.IW.Taxonomy}`,
                      activeScrollName: s,
                      redirectsToOpsHub: !0,
                    }),
                  F &&
                    (0, i.jsxs)(i.Fragment, {
                      children: [
                        g &&
                          (0, i.jsx)(M, {
                            title: P.NZ.InstructionsTaxonomy,
                            link: `/corp/genai-ops-hub/projects/${o}/${N.s4.Training}/${N.zR.Instructions}`,
                            activeScrollName: s,
                            redirectsToOpsHub: !0,
                          }),
                        (0, i.jsx)(M, {
                          title: P.NZ.ProjectTaxonomyVersions,
                          link: `/corp/qm/queue/${o}/versions`,
                          activeScrollName: s,
                        }),
                      ],
                    }),
                  (0, i.jsx)(M, {
                    title: P.NZ.PayRateCardPreview,
                    link: `/corp/qm/queue/${o}/payRateCardPreview`,
                  }),
                  g &&
                    (0, i.jsx)(M, {
                      title: P.NZ.Qualifications,
                      link: `/corp/genai-ops-hub/projects/${o}/${N.s4.ProjectConfig}/${N.$t.AllocationAndQualifications}/${N.Tg.Qualifications}`,
                      activeScrollName: s,
                      redirectsToOpsHub: !0,
                    }),
                  q &&
                    (0, i.jsx)(M, {
                      title: "Pipeline Editor (Old)",
                      link: `/corp/qm/queue/${o}/pipeline`,
                      activeScrollName: s,
                    }),
                  (0, i.jsx)(M, {
                    title: "Project Roles and Responsibilities (Old)",
                    link: `/corp/qm/queue/${o}/owners`,
                    activeScrollName: s,
                  }),
                  f &&
                    (0, i.jsx)(M, {
                      title: "Task Templates Editor (Old)",
                      link: `/corp/qm/queue/${o}/templates`,
                      activeScrollName: s,
                    }),
                  F &&
                    (0, i.jsx)(M, {
                      title: P.NZ.InstructionsTaxonomy + " (Old)",
                      link: `/corp/qm/queue/${o}/instructionsTaxonomy`,
                      activeScrollName: s,
                    }),
                  (0, i.jsx)(M, {
                    title: P.NZ.Qualifications + " (Old)",
                    link: `/corp/qm/queue/${o}/qualifications`,
                    activeScrollName: s,
                  }),
                ],
              }),
              V &&
                (0, i.jsxs)("div", {
                  className: v.navSection,
                  children: [
                    (0, i.jsx)(h.H3, { children: "Outlier" }),
                    (0, i.jsx)(M, {
                      title: P.NZ.ProjectDocumentsAndAnnouncements,
                      link: `/corp/qm/queue/${o}/projectDocumentsAndAnnouncements`,
                      activeScrollName: s,
                    }),
                  ],
                }),
              (0, i.jsxs)("div", {
                className: v.navSection,
                children: [
                  (0, i.jsx)(h.H3, { children: "Configs" }),
                  (0, i.jsx)(M, {
                    title: "Disabling & Linting",
                    link: `/corp/qm/queue/${o}/quality`,
                    activeScrollName: s,
                  }),
                  (0, i.jsx)(M, {
                    title: "Full Configs",
                    link: `/corp/qm/queue/${o}/config`,
                    activeScrollName: s,
                  }),
                  b &&
                    (0, i.jsx)(M, {
                      title: P.NZ.SpecializedReviewRouting,
                      link: `/corp/qm/queue/${o}/specializedReviewRouting`,
                      activeScrollName: s,
                    }),
                  u.has(r) &&
                    (0, i.jsx)(M, {
                      title: "Quick Linters",
                      link: `/corp/qm/queue/${o}/quick-linters`,
                      activeScrollName: s,
                    }),
                ],
              }),
              (0, i.jsx)("div", {
                className: v.navSection,
                children: (0, i.jsx)(h.H3, { children: "Data & Monitoring" }),
              }),
              (0, i.jsx)(M, {
                title: "Tasks",
                link: `/corp/qm/queue/${e.projectId}/tasks`,
                activeScrollName: s,
              }),
              (0, i.jsx)(M, {
                title: "Subtasks",
                link: `/corp/qm/queue/${e.projectId}/subtasks`,
                activeScrollName: s,
              }),
              (0, i.jsx)(M, {
                title: "Throughput",
                link: `/corp/qm/queue/${e.projectId}/throughput`,
                activeScrollName: s,
              }),
              (0, i.jsx)(M, {
                title: "Incident Flags",
                link: `/corp/qm/queue/${e.projectId}/incidentFlags`,
                activeScrollName: s,
              }),
              (0, i.jsx)(M, {
                title: "JSON Viewer",
                link: `/corp/qm/queue/${e.projectId}/jsonViewer`,
                activeScrollName: s,
              }),
              (0, i.jsx)(M, {
                title: P.NZ.QualityMetrics,
                link: `/corp/qm/queue/${e.projectId}/qualityMetrics`,
                activeScrollName: s,
              }),
              (0, i.jsx)(M, {
                title: P.NZ.WorkerPerformance,
                link: `/corp/qm/queue/${e.projectId}/workerPerformance`,
                activeScrollName: s,
              }),
              g &&
                (0, i.jsx)(M, {
                  title: `GenAI Ops Hub ${N.s4.Quality}`,
                  link: `/corp/genai-ops-hub/projects/${e.projectId}/${N.s4.Quality}/${N.v5.QualityMetricsReport}`,
                  activeScrollName: s,
                  redirectsToOpsHub: !0,
                }),
              U &&
                (0, i.jsx)(M, {
                  title: P.NZ.QueryPlayground,
                  link: `/corp/qm/queue/${e.projectId}/queryPlayground`,
                  activeScrollName: s,
                }),
              (0, i.jsx)(M, {
                title: P.NZ.ActionBatches,
                link: `/corp/qm/queue/${e.projectId}/actionBatches`,
                activeScrollName: s,
              }),
              g &&
                (0, i.jsx)(M, {
                  title: P.NZ.PaySandbox,
                  link: `/corp/genai-ops-hub/projects/${e.projectId}/${N.s4.Finance}/${N.qJ.PaySandbox}`,
                  activeScrollName: s,
                  redirectsToOpsHub: !0,
                }),
              (0, i.jsx)(M, {
                title: "Project channels/categories",
                link: `/corp/genai-ops-hub/community-management?project=${o}`,
                activeScrollName: s,
              }),
              (0, i.jsx)(M, {
                title: P.NZ.PaySandbox + " (Old)",
                link: `/corp/qm/queue/${e.projectId}/paySandbox`,
                activeScrollName: s,
              }),
              (0, i.jsx)("div", {
                className: v.navSection,
                children: (0, i.jsx)(h.H3, { children: "Actions" }),
              }),
              g &&
                (0, i.jsx)(M, {
                  title: P.NZ.DisableProject,
                  link: `/corp/genai-ops-hub/projects/${e.projectId}/${N.s4.Overview}`,
                  activeScrollName: s,
                  redirectsToOpsHub: !0,
                }),
              (0, i.jsx)(M, {
                title: P.NZ.DisableProject + " (Old)",
                link: `/corp/qm/queue/${e.projectId}/disable`,
                activeScrollName: s,
              }),
              (0, i.jsx)(M, {
                title: P.NZ.ActionDirectory,
                link: `/corp/qm/queue/${e.projectId}/actions`,
                activeScrollName: s,
              }),
              (0, i.jsx)("div", {
                className: v.navSection,
                children: (0, i.jsx)(h.H3, { children: "Project Levers" }),
              }),
              g &&
                (0, i.jsx)(M, {
                  title: "Benchmark Center (Gen AI)",
                  link: `/corp/genai-ops-hub/projects/${e.projectId}/${N.s4.BenchmarkCenter}/${N.IE.ProjectBenchmarks}`,
                  activeScrollName: s,
                  redirectsToOpsHub: !0,
                }),
              (0, i.jsx)(M, {
                title: "Benchmarks",
                link: `/corp/qm/queue/${e.projectId}/benchmarks`,
                activeScrollName: s,
              }),
              (0, i.jsx)(M, {
                title: "Prioritize",
                link: `/corp/qm/queue/${e.projectId}/priority`,
                activeScrollName: s,
              }),
              g &&
                (0, i.jsx)(M, {
                  title: "Incentives",
                  link: `/corp/genai-ops-hub/projects/${e.projectId}/${N.s4.Finance}/${N.qJ.StellarQualityIncentives}`,
                  activeScrollName: s,
                  redirectsToOpsHub: !0,
                }),
              (0, i.jsx)(M, {
                title: "Badges",
                link: `/corp/qm/queue/${e.projectId}/badges`,
                activeScrollName: s,
              }),
              g &&
                (0, i.jsx)(M, {
                  title: "Training",
                  link: `/corp/genai-ops-hub/projects/${e.projectId}/${N.s4.Training}/${N.zR.ActivationControlPanel}`,
                  activeScrollName: s,
                  redirectsToOpsHub: !0,
                }),
              (0, i.jsx)(M, {
                title: "Incentives (Old)",
                link: `/corp/qm/queue/${e.projectId}/incentives`,
                activeScrollName: s,
              }),
              (0, i.jsx)(M, {
                title: "Training (Old)",
                link: `/corp/qm/queue/${e.projectId}/training`,
                activeScrollName: s,
              }),
              (0, i.jsx)(M, {
                title: "Zero Review + Spotter Pipeline",
                link: `/corp/qm/queue/${e.projectId}/spotterPipeline`,
                activeScrollName: s,
              }),
              (0, i.jsx)(M, {
                title: "Autopilot",
                link: `/corp/qm/queue/${e.projectId}/autopilot`,
                activeScrollName: s,
              }),
              (0, i.jsx)(M, {
                title: "Rules",
                link: `/corp/qm/queue/${e.projectId}/rules`,
                activeScrollName: s,
              }),
              (0, i.jsx)(M, {
                title: "Reviewer Feedback",
                link: `/corp/qm/queue/${e.projectId}/reviewerFeedback`,
                activeScrollName: s,
              }),
              (0, i.jsx)(M, {
                title: "Speed Audit",
                link: `/corp/qm/queue/${e.projectId}/speedAudit`,
                activeScrollName: s,
              }),
              W &&
                (0, i.jsx)(M, {
                  title: P.NZ.BenchmarkSpeedAudit,
                  link: `/corp/qm/queue/${o}/benchmarkSpeedAudit`,
                  activeScrollName: s,
                }),
              (0, i.jsx)(M, {
                title: "Audit Dashboard",
                link: `/corp/qm/queue/${e.projectId}/auditDashboard`,
                activeScrollName: s,
              }),
              (0, i.jsx)(M, {
                title: "Task Support Ticket",
                link: `/corp/support_ticket/${e.projectId}`,
                activeScrollName: s,
              }),
              (0, i.jsx)(M, {
                title: P.NZ.TaskerOperations,
                link: `/corp/qm/queue/${e.projectId}/operations`,
                activeScrollName: s,
              }),
              (0, i.jsx)(
                Z,
                {
                  projectId: e.projectId,
                  sectionTitle: R.fH.title,
                  sectionChildren: R.fH.children,
                  activeScrollName: s,
                  setActionItem: e.setActionItem,
                },
                R.fH.title
              ),
              (0, i.jsx)("div", { className: v.navMask }),
            ],
          });
        },
        U = n(48725),
        F = n(665676);
      !(function (e) {
        (e[(e.MAIN_VIEW = 0)] = "MAIN_VIEW"),
          (e[(e.CREATE_TEAM_VIEW = 1)] = "CREATE_TEAM_VIEW"),
          (e[(e.ASSIGN_TEAM_VIEW = 2)] = "ASSIGN_TEAM_VIEW");
      })(W || (W = {}));
      const V = {
          [W.MAIN_VIEW]: "Create/Assign to Work Team(s)",
          [W.CREATE_TEAM_VIEW]: "Create Subteam",
          [W.ASSIGN_TEAM_VIEW]: "Assign Current Project to Team",
        },
        H = { severity: "success", content: "Successfully assigned!" },
        Q = { severity: "success", content: "Successfully created!" },
        J = {
          severity: "error",
          content: "something went wrong, please try again.",
        },
        K = "617709575ddbae6a1edab50d",
        Y = "Root Team";
      var X = n(298784),
        ee = n.n(X),
        te = n(637723),
        ne = n(747450);
      function ie(e, t, n, i, o, s, r) {
        try {
          var a = e[s](r),
            c = a.value;
        } catch (l) {
          return void n(l);
        }
        a.done ? t(c) : Promise.resolve(c).then(i, o);
      }
      function oe(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function se(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            i.forEach(function (t) {
              oe(e, t, n[t]);
            });
        }
        return e;
      }
      const re = (0, x.ZL)({
        container: {
          width: 400,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          "& label": { padding: "10px 0", fontSize: 16, fontWeight: "bold" },
        },
        actionWraper: { width: "100%" },
      });
      var ae = ({
          setCurrentStage: e,
          setAlertStatus: t,
          setAddedWorkerTeams: n,
          projectId: o,
          team: r,
          TeamSelector: a,
        }) => {
          const c = re(),
            { 0: d, 1: u } = (0, j.useState)(!1),
            { 0: p, 1: h } = (0, j.useState)({
              primaryTeamAssignments: [],
              secondaryTeamAssignments: [],
            }),
            x = ee().reverse([...l.RealReviewLevel]),
            { 0: g, 1: v } = (0, j.useState)({
              tier: l.ReviewTier.primaryTeamAssignments,
              level: null,
            }),
            { loading: T, response: y } = (0, f.h)(
              `corp-api/worker_teams/team/${r.id}/team_assignments`
            );
          (0, j.useEffect)(() => {
            if (!1 === T && !1 === d) {
              const e = [],
                t = [];
              null === y ||
                void 0 === y ||
                y.forEach(({ projectId: n, tier: i, reviewLevel: o }) => {
                  "Primary" === i
                    ? ee().isNil(o)
                      ? e.push({ projectId: n })
                      : e.push({ projectId: n, reviewLevel: o })
                    : "Secondary" === i &&
                      (ee().isNil(o)
                        ? t.push({ projectId: n })
                        : t.push({ projectId: n, reviewLevel: o }));
                }),
                h({ primaryTeamAssignments: e, secondaryTeamAssignments: t });
            }
          }, [T, d]);
          const k = (0, j.useCallback)(
            ((b = function* () {
              const a =
                g.level || 0 === g.level
                  ? { projectId: o, reviewLevel: g.level }
                  : { projectId: o };
              u(!0);
              try {
                const o = yield (0, s.ZP)(null, "internal/pay/guardrail", {
                  method: "GET",
                  query: a,
                });
                if (
                  !(null === o || void 0 === o ? void 0 : o.payConfigSetupDone)
                )
                  return (
                    t({
                      severity: J.severity,
                      content: (0, i.jsxs)("div", {
                        children: [
                          "It looks like the pay configuration in this project is not setup for",
                          ee().isNil(g.level)
                            ? " any review levels"
                            : " review level: " + g.level,
                          "!",
                          (0, i.jsxs)("span", {
                            style: { margin: "2px 0", display: "inline-block" },
                            children: [
                              "Please fill out",
                              " ",
                              (0, i.jsx)("a", {
                                rel: "noopener noreferrer",
                                target: "_blank",
                                href: ne.u,
                                children: "this form",
                              }),
                              " ",
                              "and our pay team will set it up. For questions, post in",
                              " ",
                              (0, i.jsx)("a", {
                                rel: "noopener noreferrer",
                                target: "_blank",
                                href: ne.m,
                                children: "#ops-pay",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    void u(!1)
                  );
                const c = yield (0, te.wO)("updateTeamConfigField", {
                  teamId: r.id,
                  key: g.tier,
                  value: [...p[g.tier], a],
                  isClear: !1,
                });
                if ((u(!1), "completed" === c.status))
                  c.jsonOutput.success
                    ? (t(H),
                      n((e) => {
                        const { primary: t, secondary: n } = e;
                        return g.tier === l.ReviewTier.primaryTeamAssignments
                          ? { primary: [...t, r.name], secondary: [...n] }
                          : { primary: [...t], secondary: [...n, r.name] };
                      }),
                      e(W.MAIN_VIEW))
                    : t({
                        severity: J.severity,
                        content: c.jsonOutput.message,
                      });
                else {
                  const e = c.jsonOutput;
                  t(e ? { severity: "error", content: e.message } : J);
                }
              } catch (d) {
                var c;
                u(!1),
                  t({
                    severity: "error",
                    content:
                      (null === (c = d.response) || void 0 === c
                        ? void 0
                        : c.message) || d,
                  }),
                  (0, s.cF)(d, "Failed to assign team a project.");
              }
              setTimeout(() => {
                t(null);
              }, 1e4);
            }),
            function () {
              var e = this,
                t = arguments;
              return new Promise(function (n, i) {
                var o = b.apply(e, t);
                function s(e) {
                  ie(o, n, i, s, r, "next", e);
                }
                function r(e) {
                  ie(o, n, i, s, r, "throw", e);
                }
                s(void 0);
              });
            }),
            [g.level, g.tier, o, r.id, r.name, p, t, n, e]
          );
          var b;
          return (0, i.jsxs)("div", {
            className: c.container,
            children: [
              (0, i.jsxs)("fieldset", {
                className: "fieldset fieldset--long",
                children: [
                  (0, i.jsx)("label", { children: "Choose Worker Team" }),
                  (0, i.jsx)(a, {}),
                ],
              }),
              T && (0, i.jsx)(m.$j, { size: "sm" }),
              (0, i.jsxs)("fieldset", {
                className: "fieldset fieldset--long",
                children: [
                  (0, i.jsx)("label", { children: "Review Tier" }),
                  (0, i.jsxs)(m.Ee, {
                    onChange: (e) => v(se({}, g, { tier: e })),
                    value: g.tier,
                    row: !0,
                    children: [
                      (0, i.jsx)(m.Y8, {
                        value: l.ReviewTier.primaryTeamAssignments,
                        labelPlacement: "end",
                        label: "Primary",
                        disabled: !1,
                      }),
                      (0, i.jsx)(m.Y8, {
                        value: l.ReviewTier.secondaryTeamAssignments,
                        labelPlacement: "end",
                        label: "Secondary",
                        disabled: !1,
                      }),
                    ],
                  }),
                ],
              }),
              (0, i.jsxs)("fieldset", {
                className: "fieldset fieldset--long",
                children: [
                  (0, i.jsx)("label", { children: "Review Level" }),
                  (0, i.jsxs)(m.Ph, {
                    label: "Review Level",
                    value: g.level,
                    onChange: (e) => {
                      v(se({}, g, { level: e.target.value }));
                    },
                    children: [
                      x.map((e) =>
                        (0, i.jsx)(
                          m.Wx,
                          {
                            value: e,
                            children: (0, l.getSanitizedReviewLevel)(e),
                          },
                          e
                        )
                      ),
                      (0, i.jsx)(
                        m.Wx,
                        { value: null, children: "All Layers" },
                        "all"
                      ),
                    ],
                  }),
                ],
              }),
              (0, i.jsx)(U.kX, {
                className: c.actionWraper,
                children: (0, i.jsx)(m.zx, {
                  type: "primary",
                  startIcon: d ? (0, i.jsx)(m.$j, { size: "sm" }) : null,
                  disabled: T || d,
                  onClick: k,
                  children: "Assign",
                }),
              }),
            ],
          });
        },
        ce = ae;
      const le = (0, x.ZL)({
        container: { width: 400 },
        buttonWrapper: {
          marginTop: 10,
          display: "flex",
          margin: "5px 0",
          justifyContent: "space-between",
          "& span": { fontWeight: "bold", color: "white" },
        },
        header: {
          "& h2": { display: "flex", justifyContent: "space-between" },
        },
        name: { padding: "5" },
        nameContainer: {
          "& > div": { display: "flex", flexDirection: "column" },
          "& span": {
            padding: "5px 8px",
            margin: 5,
            borderRadius: 20,
            color: "white",
            alignSelf: "baseline",
          },
        },
        primaryName: {
          borderRadius: 5,
          backgroundColor: "var(--color-RemoGray01)",
          padding: "10px 2px",
          height: 100,
          display: "flex",
          flexWrap: "wrap",
          alignContent: "start",
          "& span": { backgroundColor: "var(--color-LightPeriwinkle)" },
        },
        secondaryName: {
          borderRadius: 5,
          backgroundColor: "var(--color-RemoGray01)",
          padding: "10px 2px",
          height: 100,
          display: "flex",
          flexWrap: "wrap",
          alignContent: "start",
          "& span": { backgroundColor: "var(--color-LightMauve)" },
        },
      });
      var de = ({
        setCurrentStage: e,
        setAlertStatus: t,
        addedwokerTeams: n,
      }) => {
        const o = le();
        return (0, i.jsxs)("div", {
          className: o.container,
          children: [
            (0, i.jsxs)("div", {
              className: o.buttonWrapper,
              children: [
                (0, i.jsx)(m.zx, {
                  type: "info",
                  onClick: () => {
                    e(W.ASSIGN_TEAM_VIEW), t(null);
                  },
                  children: "assign to existing team",
                }),
                (0, i.jsx)(m.zx, {
                  type: "warning",
                  onClick: () => {
                    e(W.CREATE_TEAM_VIEW), t(null);
                  },
                  children: "create a new worker team",
                }),
              ],
            }),
            (0, i.jsxs)("div", {
              className: o.nameContainer,
              children: [
                (0, i.jsxs)("div", {
                  children: [
                    (0, i.jsx)("h3", { children: "primary" }),
                    (0, i.jsx)("div", {
                      className: o.primaryName,
                      children: n.primary.map((e) =>
                        (0, i.jsx)("span", { children: e }, e)
                      ),
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  children: [
                    (0, i.jsx)("h3", { children: "secondary" }),
                    (0, i.jsx)("div", {
                      className: o.secondaryName,
                      children: n.secondary.map((e) =>
                        (0, i.jsx)("span", { children: e }, e)
                      ),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
      function ue(e, t, n, i, o, s, r) {
        try {
          var a = e[s](r),
            c = a.value;
        } catch (l) {
          return void n(l);
        }
        a.done ? t(c) : Promise.resolve(c).then(i, o);
      }
      const pe = (0, x.ZL)({
        container: {
          width: 400,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          "& label": { padding: "10px 0", fontSize: 16, fontWeight: "bold" },
          "& input": { width: "80% !important" },
        },
        actionWraper: { width: "100%" },
      });
      var me = ({
          team: e,
          setTeam: t,
          setCurrentStage: n,
          setAlertStatus: o,
          TeamSelector: r,
        }) => {
          const a = pe(),
            { 0: c, 1: l } = (0, j.useState)(!1),
            { 0: d, 1: u } = (0, j.useState)("Untitled"),
            p = (function () {
              var i,
                r =
                  ((i = function* () {
                    l(!0);
                    try {
                      const i = yield (0, te.wO)("createSubteam", {
                        parentTeamId: e.id,
                        subteamName: d,
                      });
                      l(!1);
                      const s = i.jsonOutput;
                      "completed" === i.status && s.subteamId
                        ? (t({ id: s.subteamId, name: d }),
                          n(W.ASSIGN_TEAM_VIEW),
                          o(Q))
                        : o(s ? { severity: "error", content: s.message } : J);
                    } catch (i) {
                      l(!1),
                        o({ severity: "error", content: i.response.error }),
                        (0, s.cF)(i, "Failed to create a worker team.");
                    }
                    setTimeout(() => {
                      o(null);
                    }, 1e4);
                  }),
                  function () {
                    var e = this,
                      t = arguments;
                    return new Promise(function (n, o) {
                      var s = i.apply(e, t);
                      function r(e) {
                        ue(s, n, o, r, a, "next", e);
                      }
                      function a(e) {
                        ue(s, n, o, r, a, "throw", e);
                      }
                      r(void 0);
                    });
                  });
              return function () {
                return r.apply(this, arguments);
              };
            })();
          return (0, i.jsxs)("div", {
            className: a.container,
            children: [
              (0, i.jsxs)("fieldset", {
                className: "fieldset fieldset--long",
                children: [
                  (0, i.jsx)("label", { children: "Choose Parent Team" }),
                  (0, i.jsx)(r, {}),
                ],
              }),
              (0, i.jsxs)("fieldset", {
                className: "fieldset fieldset--long",
                children: [
                  (0, i.jsx)("label", { children: "Subteam Name" }),
                  (0, i.jsx)(m.oi, {
                    value: d,
                    onChange: (e) => {
                      u(e.target.value);
                    },
                    error: !d,
                  }),
                ],
              }),
              (0, i.jsx)(U.kX, {
                className: a.actionWraper,
                children: (0, i.jsxs)(m.zx, {
                  type: "primary",
                  disabled: c || !d,
                  onClick: p,
                  children: [c && (0, i.jsx)(m.$j, { size: "sm" }), "Create"],
                }),
              }),
            ],
          });
        },
        he = me;
      function xe(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function ge(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            i.forEach(function (t) {
              xe(e, t, n[t]);
            });
        }
        return e;
      }
      const ve = ({ team: e, setTeam: t, isOpen: n, setIsOpen: s }) =>
          (0, i.jsx)(m.J2, {
            tooltip: "View Worker Team Directory",
            targetOpen: (0, i.jsx)(m.zx, {
              fullWidth: !0,
              endIcon: (0, i.jsx)(o.G, { icon: "caret-up" }),
              children: e.name,
            }),
            targetClosed: (0, i.jsx)(m.zx, {
              fullWidth: !0,
              endIcon: (0, i.jsx)(o.G, { icon: "caret-down" }),
              children: e.name,
            }),
            width: 600,
            maxHeight: 450,
            isOpen: n,
            children: (0, i.jsx)(F.l, {
              teamId: e.id,
              TeamSelectButton: () =>
                (0, i.jsx)(m.Av, { type: "primary", children: "+" }),
              onSelectTeam: (e, n) => {
                t({ id: e, name: n }), s(!1);
              },
            }),
          }),
        Te = (0, x.ZL)({
          mainViewWrapper: { display: "flex" },
          header: {
            "& h2": { display: "flex" },
            "& span": { fontSize: 20, color: "var(--color-RemoBlue)" },
          },
          right: { "& span": { fontSize: 20 }, marginLeft: "auto" },
        });
      var je = ({
          setRefetchState: e,
          showTeamAssignmentDialog: t,
          setShowTeamAssignmentDialog: n,
          projectId: s,
        }) => {
          const r = Te(),
            { 0: a, 1: c } = (0, j.useState)(W.MAIN_VIEW),
            { 0: l, 1: d } = (0, j.useState)(null),
            { 0: u, 1: p } = (0, j.useState)({ primary: [], secondary: [] }),
            { 0: h, 1: x } = (0, j.useState)({ id: K, name: Y }),
            { 0: g, 1: v } = (0, j.useState)(!1);
          if (!t) return null;
          const T = {
            setCurrentStage: c,
            setAlertStatus: d,
            team: h,
            setTeam: x,
            TeamSelector: () =>
              (0, i.jsx)(ve, { team: h, setTeam: x, isOpen: g, setIsOpen: v }),
          };
          return (0, i.jsxs)(U.ZP, {
            open: t,
            children: [
              (0, i.jsxs)(U.$N, {
                className: r.header,
                children: [
                  a !== W.MAIN_VIEW &&
                    (0, i.jsx)(m.Av, {
                      onClick: () => c(W.MAIN_VIEW),
                      children: (0, i.jsx)(o.G, { icon: "caret-left" }),
                    }),
                  (0, i.jsx)("div", { children: V[a] }),
                  (0, i.jsx)(m.Av, {
                    className: r.right,
                    onClick: () => {
                      n(!1),
                        (u.primary.length || u.secondary.length) &&
                          (e((e) => ++e), p({ primary: [], secondary: [] }));
                    },
                    children: "\u2715",
                  }),
                ],
              }),
              (0, i.jsxs)(U.cZ, {
                children: [
                  l &&
                    (0, i.jsx)("div", {
                      style: { width: 400 },
                      children: (0, i.jsx)(m.bZ, {
                        severity: l.severity,
                        children: l.content,
                      }),
                    }),
                  a === W.MAIN_VIEW &&
                    (0, i.jsx)(de, ge({}, T, { addedwokerTeams: u })),
                  a === W.CREATE_TEAM_VIEW && (0, i.jsx)(he, ge({}, T)),
                  a === W.ASSIGN_TEAM_VIEW &&
                    (0, i.jsx)(
                      ce,
                      ge({}, T, { projectId: s, setAddedWorkerTeams: p })
                    ),
                ],
              }),
            ],
          });
        },
        ye = n(416534),
        fe = n(650906);
      function ke(e, t, n, i, o, s, r) {
        try {
          var a = e[s](r),
            c = a.value;
        } catch (l) {
          return void n(l);
        }
        a.done ? t(c) : Promise.resolve(c).then(i, o);
      }
      function be(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (i, o) {
            var s = e.apply(t, n);
            function r(e) {
              ke(s, i, o, r, a, "next", e);
            }
            function a(e) {
              ke(s, i, o, r, a, "throw", e);
            }
            r(void 0);
          });
        };
      }
      function Ae(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function Ce(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            i.forEach(function (t) {
              Ae(e, t, n[t]);
            });
        }
        return e;
      }
      const Se = new Set([
        a.TaskType.DocumentTranscription,
        a.TaskType.NamedEntityRecognition,
        a.TaskType.TextCollection,
        a.TaskType.ImageAnnotation,
        a.TaskType.Annotation,
        a.TaskType.PolygonAnnotation,
        a.TaskType.PointAnnotation,
        a.TaskType.LineAnnotation,
        a.TaskType.VideoPlaybackAnnotation,
        a.TaskType.VideoAnnotation,
        a.TaskType.VideoBoxAnnotation,
        a.TaskType.VideoCuboidAnnotation,
        a.TaskType.VideoPolygonAnnotation,
      ]);
      const Ie = ({
          projectId: e,
          projectIsActive: t,
          isLoading: n,
          projectDisabled: o,
          compact: s,
        }) => {
          const {
            title: r,
            description: a,
            className: c,
          } = (function (e, t) {
            const n = _e();
            let i,
              o = "",
              s = "";
            return (
              t
                ? ((i = n.disabledProject),
                  (s = "Disabled"),
                  (o = "Project is disabled"))
                : e
                ? ((i = n.enabledProject),
                  (s = "Enabled"),
                  (o = "Project is enabled"))
                : ((i = n.noActivityProject),
                  (s = "Inactive"),
                  (o =
                    "Project is enabled but hasn't been activity for 2+ weeks. This BLOCKS the queue, can be fixed by \"Bumping Project Activitiy\" in project's quick actions")),
              { title: s, description: o, className: i }
            );
          })(t, o);
          return (0, i.jsxs)("div", {
            children: [
              !s &&
                (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)(h.x, {
                      children: (0, i.jsx)("strong", {
                        children: "PROJECT STATUS ",
                      }),
                    }),
                    (0, i.jsx)("br", {}),
                  ],
                }),
              n
                ? (0, i.jsx)(m.D8, { color: "inherit", size: "20px" })
                : (0, i.jsx)(m.u, {
                    title: a,
                    children: (0, i.jsxs)("div", {
                      style: { display: "flex" },
                      children: [
                        (0, i.jsx)("div", { className: c }),
                        (0, i.jsx)(h.x, { children: r }),
                        (0, i.jsx)("div", {
                          children: (0, i.jsx)("a", {
                            href: `/corp/qm/queue/${e}/disable`,
                            children: " ",
                          }),
                        }),
                      ],
                    }),
                  }),
            ],
          });
        },
        we = ({ name: e, id: t, searchButton: n }) => {
          const { isRemoAdmin: r } = (0, y.bE)(),
            a = _e(),
            c = ((e, t) => {
              const { value: n } = (0, k.Z)(
                be(function* () {
                  if (e)
                    try {
                      const n = { search: e, exactName: !0 };
                      return (yield (0, s.ZP)(
                        null,
                        "corp-api/find/permissiongroups",
                        { query: n }
                      )).permissiongroups
                        .map((e) => e._id)
                        .filter((e) => e !== t);
                    } catch (n) {}
                }),
                [e, t]
              );
              return n;
            })(e, t),
            l = (0, j.useMemo)(
              () =>
                c
                  ? `Warning: Found ${c.length} other permission group(s) with the same name`
                  : "",
              [c]
            ),
            d = (0, j.useMemo)(() => (t ? 0 : 1), [t]);
          return !e || !c || c.length <= d
            ? (0, i.jsx)(i.Fragment, {})
            : !0 === n
            ? (0, i.jsx)(m.u, {
                title: l,
                children: (0, i.jsx)(m.hU, {
                  size: "small",
                  onClick: () => {
                    const t = new URL(window.location.href);
                    (t.pathname = "corp/search"),
                      t.searchParams.set("q", e),
                      window.open(t, "_blank");
                  },
                  children: (0, i.jsx)(o.G, {
                    icon: "engine-warning",
                    color: "var(--color-RemoRed)",
                  }),
                }),
              })
            : (0, i.jsxs)("div", {
                className: a.smallText,
                children: [
                  (0, i.jsx)(o.G, {
                    icon: "engine-warning",
                    color: "var(--color-RemoRed)",
                  }),
                  (0, i.jsxs)("i", {
                    style: { fontWeight: "bold" },
                    children: [" ", l, ":"],
                  }),
                  (0, i.jsx)("br", {}),
                  (0, i.jsx)("hr", {}),
                  c.map((e) =>
                    (0, i.jsx)(
                      "a",
                      {
                        style: { display: "block" },
                        href: `/${r ? "remoadmin/tools" : "corp"}/lookup/${e}`,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: e,
                      },
                      e
                    )
                  ),
                ],
              });
        },
        Pe = ({ contents: e }) =>
          (0, i.jsx)(m.hU, {
            size: "small",
            "data-tip": "Copy to clipboard",
            onClick: () => (0, r.v)(e, { excludeOuterQuotes: !0 }),
            children: (0, i.jsx)(o.G, { icon: "copy", color: "lightgrey" }),
          }),
        Ne = {
          marginTop: "2.5px",
          marginRight: "5px",
          padding: "5px",
          paddingRight: "2.5px",
          borderRadius: "50%",
          width: "12px",
          height: "12px",
        },
        _e = (0, x.ZL)({
          left: {
            width: 270,
            height: "100%",
            flexShrink: 0,
            zIndex: 1,
            top: 100,
            overflow: "auto",
            background: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            paddingRight: 8,
            marginLeft: -24,
            marginTop: -16,
          },
          branding: {
            background: "white",
            padding: 4,
            display: "flex",
            width: "100%",
            borderRadius: 8,
            cursor: "pointer",
            transition: "background 150ms ease-out",
            "&:hover": { background: "#f2f2f2" },
            marginBottom: 10,
          },
          projectFieldHeader: { display: "flex", alignItems: "center" },
          projectGenAIHeader: { marginTop: "8px", marginBottom: "8px" },
          projectGenAIUl: { margin: "auto", paddingLeft: "16px" },
          about: {
            background: "var(--color-RemoGray01)",
            borderRadius: 8,
            padding: "8px 16px",
            overflow: "hidden",
          },
          smallText: { fontSize: 12 },
          showCallout: { fontSize: 12, textAlign: "right", color: "black" },
          aboutSection: { marginTop: 8 },
          callout: {
            background: "var(--color-RemoGray01)",
            padding: 10,
            borderRadius: 8,
            marginTop: 24,
          },
          linkButtons: { width: "100%", marginTop: 12 },
          textBreak: {
            wordBreak: "break-all",
            overflow: "hidden",
            display: "inline-block",
          },
          projectName: {
            wordBreak: "break-all",
            overflow: "hidden",
            display: "inline-block",
            fontSize: "larger",
          },
          switchProject: { marginTop: 8 },
          projectStatusContainer: { textAlign: "center" },
          disabledProject: Ce({}, Ne, {
            backgroundColor: "var(--color-RemoRed)",
          }),
          noActivityProject: Ce({}, Ne, {
            backgroundColor: "var(--color-RemoGold)",
          }),
          enabledProject: Ce({}, Ne, {
            backgroundColor: "var(--color-RemoGreen)",
          }),
          assignModalButton: {
            color: "var(--color-RemoGreen)",
            fontWeight: "bold",
            "&:hover": { cursor: "pointer", textDecoration: "underline" },
          },
        });
      var Be = (e) => {
        var t, n, x, g, y, k, b, A, C, S, P, _, B, E, R;
        const { 0: O, 1: D } = (0, j.useState)(!1),
          { 0: q, 1: $ } = (0, j.useState)(!1),
          { 0: L, 1: M } = (0, j.useState)(!1),
          { 0: Z, 1: G } = (0, j.useState)(0),
          W = "false" !== localStorage.getItem("showCallout"),
          { 0: U, 1: F } = (0, j.useState)(W),
          { 0: V, 1: H } = (0, j.useState)([]),
          { 0: Q, 1: J } = (0, j.useState)([]),
          { 0: K, 1: Y } = (0, j.useState)([]),
          { 0: X, 1: ee } = (0, j.useState)(!1),
          { 0: te, 1: ne } = (0, j.useState)(!1),
          { 0: ie, 1: oe } = (0, j.useState)(""),
          { 0: se, 1: re } = (0, j.useState)(!1),
          { 0: ae, 1: ce } = (0, j.useState)(!1),
          le = _e(),
          de = e.project,
          { 0: ue, 1: pe } = (0, j.useState)(
            null === (t = e.project) || void 0 === t
              ? void 0
              : t.permissionGroup
          ),
          { 0: me, 1: he } = (0, j.useState)(
            (null === (n = e.project) || void 0 === n
              ? void 0
              : n.description) || ""
          ),
          { 0: xe, 1: ge } = (0, j.useState)(
            (null === (x = e.project) ||
            void 0 === x ||
            null === (g = x.metadata) ||
            void 0 === g ||
            null === (y = g.custom) ||
            void 0 === y
              ? void 0
              : y.isAttemptCompare) || !1
          ),
          ve = null === (k = e.project) || void 0 === k ? void 0 : k.name,
          Te = null === (b = e.project) || void 0 === b ? void 0 : b.id,
          ke =
            null === (A = e.project) || void 0 === A ? void 0 : A.subprojectMap,
          Ae =
            null === (C = e.project) || void 0 === C ? void 0 : C.baseProjectId,
          Ce =
            (null === (S = e.project) || void 0 === S
              ? void 0
              : S.genAIProjectTypes) || [],
          Ne =
            (null === (P = e.project) || void 0 === P
              ? void 0
              : P.genAIProjectMediums) || [],
          Be =
            (null === (_ = e.project) || void 0 === _
              ? void 0
              : _.genAIProjectUseCases) || [],
          Ee =
            (null === de || void 0 === de ? void 0 : de.taskType) ===
              a.TaskType.Chat ||
            (null === de || void 0 === de ? void 0 : de.taskType) ===
              a.TaskType.ChatExperimental ||
            (null === de || void 0 === de ? void 0 : de.taskType) ===
              a.TaskType.ChatV2,
          Re = (0, T.useRouter)(),
          Oe = (0, f.h)(`corp-api/worker_teams/list_teams_by_project/${Te}`, {
            refetchState: Z,
          }),
          De = (0, f.h)(`corp-api/project-groups?projectId=${Te}`),
          qe = Oe.response && [
            ...Oe.response.primary.map((e) => ({
              name: e.name,
              tier: "primary",
              id: e.id,
            })),
            ...Oe.response.secondary.map((e) => ({
              name: e.name,
              tier: "secondary",
              id: e.id,
            })),
            ...Oe.response.backup.map((e) => ({
              name: e.name,
              tier: "backup",
              id: e.id,
            })),
          ],
          $e = (0, fe.z)(
            null === de ||
              void 0 === de ||
              null === (B = de.metadata) ||
              void 0 === B
              ? void 0
              : B.maxCompletableTasks
          );
        return (
          (0, j.useEffect)(() => {
            function e() {
              return (e = be(function* () {
                ee(!0);
                const e = yield (0, s.ZP)(
                    null,
                    `corp-api/qm/project_roles/?project=${
                      null === de || void 0 === de ? void 0 : de.id
                    }&role=${c.Role.EM}`,
                    { method: "GET" }
                  ),
                  t = yield (0, s.ZP)(
                    null,
                    `corp-api/qm/project_roles/?project=${
                      null === de || void 0 === de ? void 0 : de.id
                    }&role=${c.Role.STO}`,
                    { method: "GET" }
                  ),
                  n = yield (0, s.ZP)(
                    null,
                    `corp-api/qm/project_roles/?project=${
                      null === de || void 0 === de ? void 0 : de.id
                    }&role=${c.Role.DRI}`,
                    { method: "GET" }
                  ),
                  i = e.filter(
                    (e) =>
                      (!e.stopDate || v()(e.stopDate).isAfter(v()())) &&
                      v()(e.startDate).isBefore(v()())
                  ),
                  o = t.filter(
                    (e) =>
                      (!e.stopDate || v()(e.stopDate).isAfter(v()())) &&
                      v()(e.startDate).isBefore(v()())
                  ),
                  r = n.filter(
                    (e) =>
                      (!e.stopDate || v()(e.stopDate).isAfter(v()())) &&
                      v()(e.startDate).isBefore(v()())
                  );
                H(i.map((e) => `${e.user.firstName} ${e.user.lastName}`)),
                  J(o.map((e) => `${e.user.firstName} ${e.user.lastName}`)),
                  Y(r.map((e) => `${e.user.firstName} ${e.user.lastName}`)),
                  ee(!1);
              })).apply(this, arguments);
            }
            !(function () {
              e.apply(this, arguments);
            })();
          }, [de]),
          (0, j.useEffect)(() => {
            function e() {
              return (e = be(function* () {
                try {
                  re(!0);
                  const e = yield (0, s.ZP)(
                    null,
                    `corp-api/project/${Te}/isActive`,
                    { method: "GET" }
                  );
                  ce(e);
                } catch (e) {
                  ce(!1);
                }
                re(!1);
              })).apply(this, arguments);
            }
            !(function () {
              e.apply(this, arguments);
            })();
          }, [de]),
          (0, j.useEffect)(() => {
            function e() {
              return (e = be(function* () {
                if (
                  (null === de || void 0 === de ? void 0 : de.projectType) ===
                  l.ProjectType.SelfServe
                ) {
                  ne(!0);
                  try {
                    const e = yield (0, s.ZP)(
                      null,
                      "corp-api/qm/projects/shadow_project",
                      { method: "POST", body: { project: de } }
                    );
                    oe(e);
                  } catch (e) {
                    oe("");
                  }
                  ne(!1);
                }
              })).apply(this, arguments);
            }
            !(function () {
              e.apply(this, arguments);
            })();
          }, [de]),
          (0, i.jsxs)("div", {
            className: le.left,
            children: [
              (0, i.jsx)(je, {
                showTeamAssignmentDialog: L,
                setShowTeamAssignmentDialog: M,
                projectId: null === de || void 0 === de ? void 0 : de.id,
                setRefetchState: G,
              }),
              (0, i.jsxs)("div", {
                children: [
                  (0, i.jsx)("div", {
                    className: le.branding,
                    children:
                      Te &&
                      (0, i.jsx)(d.Z, {
                        href: "/qm",
                        style: { color: "black" },
                        children: (0, i.jsx)("span", {
                          children: (0, i.jsx)(m.u, {
                            title: "See all your projects",
                            children: (0, i.jsx)("div", {
                              children: (0, i.jsxs)(h.H1, {
                                children: [
                                  " ",
                                  (0, i.jsx)(o.G, { icon: "chevron-left" }),
                                  (0, i.jsx)("span", {
                                    style: { marginLeft: "10px" },
                                    children: "Delivery Portal",
                                  }),
                                ],
                              }),
                            }),
                          }),
                        }),
                      }),
                  }),
                  (0, i.jsxs)("div", {
                    className: le.about,
                    children: [
                      Te &&
                        (0, i.jsxs)("div", {
                          children: [
                            (0, i.jsx)("div", {
                              children: (0, i.jsxs)("div", {
                                className: le.projectFieldHeader,
                                children: [
                                  (0, i.jsx)("strong", {
                                    style: {
                                      marginTop: "6px",
                                      marginBottom: "6px",
                                    },
                                    children: (0, i.jsx)(m.u, {
                                      title: "Go to Delivery Portal Home Page",
                                      children: (0, i.jsxs)("a", {
                                        href: `/corp/qm/queue/${Te}`,
                                        children: [
                                          (0, i.jsx)(o.G, { icon: "house" }),
                                          (0, i.jsx)("span", {
                                            style: { marginLeft: "5px" },
                                            children:
                                              "Project Delivery Portal Home",
                                          }),
                                        ],
                                      }),
                                    }),
                                  }),
                                  (0, i.jsx)("div", { className: "hsp__1" }),
                                ],
                              }),
                            }),
                            (0, i.jsx)("div", {
                              className: le.smallText,
                              children: (0, i.jsxs)("div", {
                                style: {
                                  display: "flex",
                                  alignItems: "flex-start",
                                },
                                children: [
                                  (0, i.jsx)("strong", {
                                    className: le.projectName,
                                    children: ve,
                                  }),
                                  (0, i.jsx)(Pe, { contents: ve }),
                                ],
                              }),
                            }),
                            (0, i.jsxs)("div", {
                              className: [
                                le.smallText,
                                le.projectFieldHeader,
                              ].join(" "),
                              children: [
                                (0, i.jsx)(h.x, {
                                  className: le.textBreak,
                                  children: Te,
                                }),
                                (0, i.jsx)(Pe, { contents: Te }),
                              ],
                            }),
                            Ee &&
                              xe &&
                              (0, i.jsx)("div", {
                                children: (0, i.jsx)(h.x, {
                                  className: le.textBreak,
                                  children: (0, i.jsx)("i", {
                                    children: "(Attempt Compare)",
                                  }),
                                }),
                              }),
                            Ee &&
                              (0, i.jsx)("div", {
                                style: { marginTop: "6px" },
                                children: (0, i.jsx)(d.Z, {
                                  target: "_blank",
                                  href: `/genai-ops-hub/projects/${Te}/${N.s4.Overview}`,
                                  children: (0, i.jsx)(ye.zx, {
                                    variant: "primary",
                                    className:
                                      "scaleui scale-theme scale-tailwind flex gap-1 items-center ",
                                    size: "lg",
                                    children: "View in GenAI Ops Hub",
                                  }),
                                }),
                              }),
                            Ee &&
                              !!Ce &&
                              (0, i.jsxs)("div", {
                                className: [
                                  le.smallText,
                                  le.projectFieldHeader,
                                  le.projectGenAIHeader,
                                ].join(" "),
                                children: [
                                  (0, i.jsxs)(h.x, {
                                    children: [
                                      (0, i.jsx)("strong", {
                                        children: "GEN AI PROJECT TYPE(S)",
                                      }),
                                      (0, i.jsxs)("ul", {
                                        className: le.projectGenAIUl,
                                        children: [
                                          Ce.map((e, t) =>
                                            (0, i.jsx)(
                                              "li",
                                              { children: e },
                                              `${e}-${t}`
                                            )
                                          ),
                                          0 === Ce.length &&
                                            (0, i.jsx)("li", {
                                              children: (0, i.jsx)("i", {
                                                children: "None",
                                              }),
                                            }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, i.jsx)(Pe, { contents: Ce.join(", ") }),
                                ],
                              }),
                            Ee &&
                              !!Ne &&
                              (0, i.jsxs)("div", {
                                className: [
                                  le.smallText,
                                  le.projectFieldHeader,
                                  le.projectGenAIHeader,
                                ].join(" "),
                                children: [
                                  (0, i.jsxs)(h.x, {
                                    children: [
                                      (0, i.jsx)("strong", {
                                        children: "GEN AI PROJECT MEDIUM(S)",
                                      }),
                                      (0, i.jsxs)("ul", {
                                        className: le.projectGenAIUl,
                                        children: [
                                          Ne.map((e, t) =>
                                            (0, i.jsx)(
                                              "li",
                                              { children: e },
                                              `${e}-${t}`
                                            )
                                          ),
                                          0 === Ne.length &&
                                            (0, i.jsx)("li", {
                                              children: (0, i.jsx)("i", {
                                                children: "None",
                                              }),
                                            }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, i.jsx)(Pe, { contents: Ne.join(", ") }),
                                ],
                              }),
                            Ee &&
                              !!Be &&
                              (0, i.jsxs)("div", {
                                className: [
                                  le.smallText,
                                  le.projectFieldHeader,
                                  le.projectGenAIHeader,
                                ].join(" "),
                                children: [
                                  (0, i.jsxs)(h.x, {
                                    children: [
                                      (0, i.jsx)("strong", {
                                        children: "GEN AI PROJECT USE CASE(S)",
                                      }),
                                      (0, i.jsxs)("ul", {
                                        className: le.projectGenAIUl,
                                        children: [
                                          Be.map((e, t) =>
                                            (0, i.jsx)(
                                              "li",
                                              { children: e },
                                              `${e}-${t}`
                                            )
                                          ),
                                          0 === Be.length &&
                                            (0, i.jsx)("li", {
                                              children: (0, i.jsx)("i", {
                                                children: "None",
                                              }),
                                            }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, i.jsx)(Pe, { contents: Be.join(", ") }),
                                ],
                              }),
                            (0, i.jsx)("div", {
                              className: le.smallText,
                              children:
                                (null === de || void 0 === de
                                  ? void 0
                                  : de.taskType) &&
                                (0, i.jsx)(u.Z, { type: de.taskType }),
                            }),
                            Ae &&
                              (0, i.jsx)("div", {
                                className: le.aboutSection,
                                children: (0, i.jsx)(d.Z, {
                                  href: `/lookup/${Ae}`,
                                  children: "BACK TO BASE PROJECT",
                                }),
                              }),
                            ke &&
                              (0, i.jsx)("div", {
                                className: le.aboutSection,
                                children: (0, i.jsx)("div", {
                                  children: (0, i.jsxs)(h.x, {
                                    children: [
                                      (0, i.jsx)("strong", {
                                        children: "SUBPROJECTS",
                                      }),
                                      Object.entries(ke).map(([e, t]) =>
                                        (0, i.jsx)(
                                          "div",
                                          {
                                            className: le.smallText,
                                            children: (0, i.jsx)(d.Z, {
                                              href: `/lookup/${t}`,
                                              children: e,
                                            }),
                                          },
                                          t
                                        )
                                      ),
                                    ],
                                  }),
                                }),
                              }),
                            U &&
                              (0, i.jsx)("div", {
                                children:
                                  ue &&
                                  (0, i.jsxs)("div", {
                                    className: le.aboutSection,
                                    children: [
                                      (0, i.jsx)(Ie, {
                                        projectId: Te,
                                        isLoading: se,
                                        projectIsActive: ae,
                                        projectDisabled: $e,
                                      }),
                                      (0, i.jsx)("div", { className: "sp__1" }),
                                      (0, i.jsxs)("div", {
                                        children: [
                                          (0, i.jsx)(h.x, {
                                            children: (0, i.jsx)("strong", {
                                              children: "PERMISSION GROUP",
                                            }),
                                          }),
                                          (0, i.jsx)(h.x, {
                                            className: le.smallText,
                                            children: "(external project name)",
                                          }),
                                          (0, i.jsx)(Pe, { contents: ue.id }),
                                        ],
                                      }),
                                      (0, i.jsxs)("div", {
                                        className: [
                                          le.smallText,
                                          le.textBreak,
                                        ].join(" "),
                                        children: [
                                          (0, i.jsxs)(h.x, {
                                            children: [
                                              ue.name,
                                              " (",
                                              ue.id,
                                              ")",
                                            ],
                                          }),
                                          (0, i.jsx)(m.hU, {
                                            size: "small",
                                            "data-tip":
                                              "Edit permission group name",
                                            onClick: () => D(!0),
                                            children: (0, i.jsx)(o.G, {
                                              icon: "pencil",
                                              color: "lightgrey",
                                            }),
                                          }),
                                        ],
                                      }),
                                      (0, i.jsx)(we, {
                                        name: ue.name,
                                        id: ue.id,
                                      }),
                                      (0, i.jsx)(w.Z, {
                                        projectId: Te,
                                        customer:
                                          null === de || void 0 === de
                                            ? void 0
                                            : de.taskCustomer.id,
                                        isModalOpen: O,
                                        hideModal: (e = "") => {
                                          e && pe({ id: ue.id, name: e }),
                                            D(!1);
                                        },
                                      }),
                                    ],
                                  }),
                              }),
                            Ee &&
                              (0, i.jsxs)("div", {
                                children: [
                                  (0, i.jsx)("div", {
                                    children: (0, i.jsx)(h.x, {
                                      children: (0, i.jsx)("strong", {
                                        children: "EXTERNAL DESCRIPTION",
                                      }),
                                    }),
                                  }),
                                  (0, i.jsxs)("div", {
                                    className: [
                                      le.smallText,
                                      le.projectFieldHeader,
                                    ].join(" "),
                                    style: {
                                      marginTop: "1vh",
                                      marginBottom: "1vh",
                                    },
                                    children: [
                                      (0, i.jsx)(h.x, {
                                        className: le.textBreak,
                                        children: (0, i.jsx)("i", {
                                          children: (
                                            null === me || void 0 === me
                                              ? void 0
                                              : me.length
                                          )
                                            ? me
                                            : "No Description",
                                        }),
                                      }),
                                      (0, i.jsx)(Pe, { contents: me }),
                                      (0, i.jsx)(m.hU, {
                                        size: "small",
                                        "data-tip":
                                          "Edit project description name",
                                        onClick: () => $(!0),
                                        children: (0, i.jsx)(o.G, {
                                          icon: "pencil",
                                          color: "lightgrey",
                                        }),
                                      }),
                                      (0, i.jsx)(I, {
                                        projectId: Te,
                                        isModalOpen: q,
                                        setModalOpen: $,
                                        taskType:
                                          null === de || void 0 === de
                                            ? void 0
                                            : de.taskType,
                                        projectDescription: me,
                                        setProjectDescription: he,
                                        isAttemptCompare: xe,
                                        setIsAttemptCompare: ge,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                          ],
                        }),
                      U &&
                        (0, i.jsxs)("div", {
                          children: [
                            (0, i.jsxs)("div", {
                              className: le.aboutSection,
                              children: [
                                (0, i.jsx)("div", {
                                  children: (0, i.jsxs)(h.x, {
                                    children: [
                                      (0, i.jsx)("strong", {
                                        children: "CUSTOMER",
                                      }),
                                      !!de &&
                                        (0, i.jsx)(Pe, {
                                          contents:
                                            null === de || void 0 === de
                                              ? void 0
                                              : de.taskCustomer.id,
                                        }),
                                    ],
                                  }),
                                }),
                                (null === de || void 0 === de
                                  ? void 0
                                  : de.taskCustomer.company) &&
                                  (0, i.jsx)("div", {
                                    className: le.smallText,
                                    children: (0, i.jsxs)(h.x, {
                                      children: [
                                        null === de || void 0 === de
                                          ? void 0
                                          : de.taskCustomer.company,
                                        " ",
                                      ],
                                    }),
                                  }),
                                (null === de || void 0 === de
                                  ? void 0
                                  : de.taskCustomer.email) &&
                                  (0, i.jsx)("div", {
                                    className: le.smallText,
                                    children: (0, i.jsxs)(h.x, {
                                      children: [
                                        null === de || void 0 === de
                                          ? void 0
                                          : de.taskCustomer.email,
                                        " ",
                                      ],
                                    }),
                                  }),
                                (0, i.jsx)("div", {
                                  className: le.smallText,
                                  children: (0, i.jsxs)(h.x, {
                                    children: [
                                      (null === de || void 0 === de
                                        ? void 0
                                        : de.taskCustomer.id) || "",
                                      " ",
                                    ],
                                  }),
                                }),
                                (0, i.jsx)("div", {
                                  className: le.smallText,
                                  children: (0, i.jsx)("a", {
                                    href: `/tasks?project=${
                                      null === de || void 0 === de
                                        ? void 0
                                        : de.id
                                    }&spoof=${
                                      null === de || void 0 === de
                                        ? void 0
                                        : de.taskCustomer.id
                                    }`,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: "Browse Tasks as Customer",
                                  }),
                                }),
                              ],
                            }),
                            (0, i.jsx)("div", {
                              className: le.aboutSection,
                              children: (0, i.jsx)("div", {
                                children: (0, i.jsxs)(h.x, {
                                  children: [
                                    (0, i.jsx)("strong", {
                                      children: "PROJECT OWNERS",
                                    }),
                                    X
                                      ? (0, i.jsx)("div", {
                                          className: le.smallText,
                                          children: (0, i.jsx)(m.D8, {
                                            color: "inherit",
                                            size: "20px",
                                          }),
                                        })
                                      : (0, i.jsxs)(i.Fragment, {
                                          children: [
                                            V.length > 0
                                              ? (0, i.jsx)(i.Fragment, {
                                                  children: V.map((e, t) =>
                                                    (0, i.jsxs)(
                                                      "div",
                                                      {
                                                        className: le.smallText,
                                                        children: [
                                                          e,
                                                          " ",
                                                          (0, i.jsx)("span", {
                                                            style: {
                                                              color:
                                                                "var(--color-RemoGray50)",
                                                            },
                                                            children: "(EM)",
                                                          }),
                                                        ],
                                                      },
                                                      `em-${t}`
                                                    )
                                                  ),
                                                })
                                              : (0, i.jsx)("div", {
                                                  className: le.smallText,
                                                  children: "No EM assigned",
                                                }),
                                            Q.length > 0
                                              ? (0, i.jsx)(i.Fragment, {
                                                  children: Q.map((e, t) =>
                                                    (0, i.jsxs)(
                                                      "div",
                                                      {
                                                        className: le.smallText,
                                                        children: [
                                                          e,
                                                          " ",
                                                          (0, i.jsx)("span", {
                                                            style: {
                                                              color:
                                                                "var(--color-RemoGray50)",
                                                            },
                                                            children: "(STO)",
                                                          }),
                                                        ],
                                                      },
                                                      `em-${t}`
                                                    )
                                                  ),
                                                })
                                              : (0, i.jsx)("div", {
                                                  className: le.smallText,
                                                  children: "No STO assigned",
                                                }),
                                            K.length > 0
                                              ? (0, i.jsx)(i.Fragment, {
                                                  children: K.map((e, t) =>
                                                    (0, i.jsxs)(
                                                      "div",
                                                      {
                                                        className: le.smallText,
                                                        children: [
                                                          e,
                                                          " ",
                                                          (0, i.jsx)("span", {
                                                            style: {
                                                              color:
                                                                "var(--color-RemoGray50)",
                                                            },
                                                            children:
                                                              "(Ops DRI)",
                                                          }),
                                                        ],
                                                      },
                                                      `opsdri-${t}`
                                                    )
                                                  ),
                                                })
                                              : (0, i.jsx)("div", {
                                                  className: le.smallText,
                                                  children:
                                                    "No Ops DRI assigned",
                                                }),
                                          ],
                                        }),
                                  ],
                                }),
                              }),
                            }),
                            (null === de || void 0 === de
                              ? void 0
                              : de.projectType) === l.ProjectType.SelfServe &&
                              (0, i.jsx)("div", {
                                className: le.aboutSection,
                                children: (0, i.jsx)("div", {
                                  children: (0, i.jsxs)(h.x, {
                                    children: [
                                      (0, i.jsxs)("strong", {
                                        children: [
                                          (
                                            null === de || void 0 === de
                                              ? void 0
                                              : de.name.includes(
                                                  "shadow_project"
                                                )
                                          )
                                            ? "MAIN"
                                            : "SHADOW",
                                          " PROJECT",
                                        ],
                                      }),
                                      te
                                        ? (0, i.jsx)("div", {
                                            className: le.smallText,
                                            children: (0, i.jsx)(m.D8, {
                                              color: "inherit",
                                              size: "20px",
                                            }),
                                          })
                                        : ie
                                        ? (0, i.jsx)("div", {
                                            className: le.smallText,
                                            children: (0, i.jsx)("a", {
                                              href: `/corp/lookup/${ie}`,
                                              target: "_blank",
                                              rel: "noopener noreferrer",
                                              children: ie,
                                            }),
                                          })
                                        : (0, i.jsx)("div", {
                                            className: le.smallText,
                                            children: "Not found",
                                          }),
                                    ],
                                  }),
                                }),
                              }),
                            (0, i.jsx)("div", {
                              className: le.aboutSection,
                              children: (0, i.jsx)("div", {
                                children: (0, i.jsxs)(h.x, {
                                  children: [
                                    (0, i.jsx)("strong", {
                                      children: "PROJECT SLA GROUPS",
                                    }),
                                    De.response &&
                                      De.response.map(({ name: e, id: t }) =>
                                        (0, i.jsx)(
                                          "div",
                                          {
                                            className: le.projectFieldHeader,
                                            children: (0, i.jsx)("a", {
                                              href: `/corp/project_group/${t}`,
                                              target: "_blank",
                                              rel: "noopener noreferrer",
                                              children: e,
                                            }),
                                          },
                                          t
                                        )
                                      ),
                                    !De &&
                                      (0, i.jsx)("div", {
                                        className: le.smallText,
                                        children: "Loading...",
                                      }),
                                  ],
                                }),
                              }),
                            }),
                            (0, i.jsx)("div", {
                              className: le.aboutSection,
                              children: (0, i.jsx)("div", {
                                children: (0, i.jsxs)(h.x, {
                                  children: [
                                    (0, i.jsx)("strong", {
                                      children: "WORKER TEAMS",
                                    }),
                                    (0, i.jsx)("div", {
                                      className: le.assignModalButton,
                                      onClick: () => {
                                        M(!0);
                                      },
                                      children: "Create/Connect Worker Team(s)",
                                    }),
                                    qe &&
                                      qe.map(({ name: e, tier: t, id: n }) =>
                                        (0, i.jsxs)(
                                          "div",
                                          {
                                            className: [
                                              le.smallText,
                                              le.textBreak,
                                            ].join(" "),
                                            children: [
                                              e,
                                              " (",
                                              t,
                                              ")",
                                              (0, i.jsx)(Pe, { contents: e }),
                                              (0, i.jsx)(m.hU, {
                                                size: "small",
                                                "data-tip":
                                                  "open corp team page",
                                                onClick: () =>
                                                  window.open(
                                                    `/corp/team/${n}`,
                                                    "_blank"
                                                  ),
                                                children: (0, i.jsx)(o.G, {
                                                  icon: "share-square",
                                                  color: "#73C2FB",
                                                }),
                                              }),
                                            ],
                                          },
                                          n
                                        )
                                      ),
                                    qe &&
                                      0 === qe.length &&
                                      (0, i.jsx)("div", {
                                        className: le.smallText,
                                        children:
                                          "No worker teams assigned to this project",
                                      }),
                                    !qe &&
                                      (0, i.jsx)("div", {
                                        className: le.smallText,
                                        children: "Loading...",
                                      }),
                                  ],
                                }),
                              }),
                            }),
                            (0, i.jsx)("div", {
                              className: le.aboutSection,
                              children: (0, i.jsxs)("div", {
                                children: [
                                  (0, i.jsx)("strong", {
                                    children: "QUALIFICATION LISTS",
                                  }),
                                  (0, i.jsx)("a", {
                                    href: `/corp/genai-ops-hub/projects/${Te}/project-config/allocation-and-qualifications/qualifications`,
                                    children: (0, i.jsx)(m.hU, {
                                      size: "small",
                                      "data-tip":
                                        "Edit project qualification lists",
                                      children: (0, i.jsx)(o.G, {
                                        icon: "pencil",
                                        color: "lightgrey",
                                      }),
                                    }),
                                  }),
                                  (0, i.jsx)("div", {
                                    className: le.smallText,
                                    children: (
                                      null === de ||
                                      void 0 === de ||
                                      null === (E = de.qualificationListIds) ||
                                      void 0 === E
                                        ? void 0
                                        : E.length
                                    )
                                      ? de.qualificationListIds.map((e) =>
                                          (0, i.jsxs)(
                                            j.Fragment,
                                            {
                                              children: [
                                                e,
                                                (0, i.jsx)(m.hU, {
                                                  size: "small",
                                                  "data-tip":
                                                    "Copy to clipboard",
                                                  onClick: () =>
                                                    (0, r.v)(e, {
                                                      excludeOuterQuotes: !0,
                                                    }),
                                                  children: (0, i.jsx)(o.G, {
                                                    icon: "copy",
                                                    color: "lightgrey",
                                                  }),
                                                }),
                                              ],
                                            },
                                            e
                                          )
                                        )
                                      : "None",
                                  }),
                                  (0, i.jsx)("strong", {
                                    children: "WORKER SKILLS",
                                  }),
                                  (0, i.jsx)("div", {
                                    className: le.smallText,
                                    children: (
                                      null === de ||
                                      void 0 === de ||
                                      null === (R = de.workerSkillNames) ||
                                      void 0 === R
                                        ? void 0
                                        : R.length
                                    )
                                      ? JSON.stringify(
                                          null === de || void 0 === de
                                            ? void 0
                                            : de.workerSkillNames
                                        )
                                      : "None",
                                  }),
                                ],
                              }),
                            }),
                            (0, i.jsx)("div", {
                              className: le.aboutSection,
                              children: (0, i.jsx)("a", {
                                href: `/corp/qm/queue/${Te}/config`,
                                children: "Full Configs",
                              }),
                            }),
                            Te &&
                              (0, i.jsx)(d.Z, {
                                href: `/lookup/${Te}?preventRedirect=true`,
                                children: (0, i.jsx)(m.zx, {
                                  className: le.linkButtons,
                                  children: "Back to old lookup",
                                }),
                              }),
                          ],
                        }),
                      (0, i.jsx)("div", {
                        className: le.showCallout,
                        children: (0, i.jsxs)("a", {
                          href: "#",
                          style: { color: "black" },
                          onClick: () => {
                            try {
                              localStorage.setItem(
                                "showCallout",
                                (!U).toString()
                              );
                            } catch (e) {}
                            F((e) => !e);
                          },
                          children: [
                            U ? "Collapse" : "More",
                            (0, i.jsx)(o.G, {
                              style: { marginLeft: "5px" },
                              icon: U
                                ? "chevron-double-up"
                                : "chevron-double-down",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className: le.switchProject,
                    children: [
                      (0, i.jsx)(h.H3, { children: "Switch Project" }),
                      (0, i.jsx)(p.Z, {
                        onChange: (e) => {
                          if (!e) return;
                          const t = Te
                            ? Re.asPath.replace(Te, e.value)
                            : "/corp/qm/queue/" + e.value;
                          Re.push({ pathname: t });
                        },
                        showProjectId: !0,
                        width: "100%",
                      }),
                    ],
                  }),
                  e.project &&
                    (0, i.jsx)(z, {
                      projectId: e.project.id,
                      taskType: e.project.taskType,
                      taskTemplateVersion: e.project.taskTemplateVersion,
                      projectType: e.project.projectType,
                      hasBaseProject: !!e.project.baseProjectId,
                      activeScrollName: e.activeSection,
                      setActionItem: e.setActionItem,
                      quickLinterTaskTypes: Se,
                      usesPipelineV3: e.project.usesPipelineV3,
                    }),
                ],
              }),
            ],
          })
        );
      };
    },
    798748: function (e, t, n) {
      var i, o, s, r;
      n.d(t, {
        NZ: function () {
          return i;
        },
        dB: function () {
          return o;
        },
        tC: function () {
          return s;
        },
        zZ: function () {
          return r;
        },
      }),
        (function (e) {
          (e.Overview = "Overview"),
            (e.SpotterPipeline = "Zero Review + Spotter Pipeline"),
            (e.ActiveSpotterMetrics = "Active Spotter Metrics"),
            (e.RecruitSpotters = "Recruit Spotters"),
            (e.GeneralConfig = "General Config"),
            (e.Throughput = "Throughput"),
            (e.DisablingLinting = "Disabling & Linting"),
            (e.Training = "Training"),
            (e.Incentives = "Incentives"),
            (e.Badges = "Badges"),
            (e.Problems = "Problems"),
            (e.Benchmarks = "Benchmarks"),
            (e.Subtasks = "Subtasks"),
            (e.ArchetypeSelector = "Archetype Selector"),
            (e.TaskParamsEditor = "Task Params Editor"),
            (e.TaskTemplatesEditor = "Task Templates Editor"),
            (e.SpecializedReviewRouting = "Specialized Routing"),
            (e.OntologyManager = "Ontology Manager"),
            (e.DocumentTaskCreator = "Document Task Creator"),
            (e.PipelineEditor = "Pipeline Editor"),
            (e.QualityLinters = "Quality - Linters"),
            (e.ZeroReviewSetupChecklist =
              "Zero Review + Spotter Pipeline Setup List"),
            (e.ZeroReviewDailyChecklist =
              "Zero Review + Spotter Pipeline Daily CheckLlst"),
            (e.Checklists = "CheckLists"),
            (e.InlineTools = "Inline Tools"),
            (e.Autopilot = "Autopilot"),
            (e.RuleEngine = "Rule Engine"),
            (e.JsonViewer = "JSON Viewer"),
            (e.IncidentFlags = "Incident Flags"),
            (e.Config = "Full Configs"),
            (e.QualityMetrics = "Quality Metrics"),
            (e.ReviewerFeedback = "Reviewer Feedback"),
            (e.SpeedAudit = "Speed Audit"),
            (e.ChatBulkAudit = "Chat Bulk Audit"),
            (e.BenchmarkSpeedAudit = "Benchmark Speed Audit"),
            (e.AuditDashboard = "Audit Dashboard"),
            (e.WorkerPerformance = "Worker Performance"),
            (e.LLMWorkerPerformance = "LLM Worker Quality Report"),
            (e.QueryPlayground = "Query Playground"),
            (e.GraderConfigsEditor = "Grader Configs Editor"),
            (e.ProjectOwners = "Project Owners"),
            (e.DisableProject = "Enable & Disable Project"),
            (e.Priority = "Queue Priority"),
            (e.Tasks = "Tasks"),
            (e.ActionDirectory = "Action Directory"),
            (e.QuickLinters = "Quick Linters"),
            (e.ActionBatches = "Action Batches"),
            (e.TaskerOperations = "Tasker Operations"),
            (e.ProjectTaxonomyVersions = "Project Taxonomy Versions"),
            (e.ProjectDocumentsAndAnnouncements =
              "Project Documents & Announcements"),
            (e.StaffingExceptionForm = "Staffing Exception Form"),
            (e.InstructionsTaxonomy =
              "Instructions/Taxonomy Editors (NextGen)"),
            (e.BillingVersionEditor = "Billing Versions"),
            (e.PayRateCardPreview = "Pay Rate Card Preview"),
            (e.Qualifications = "Qualifications"),
            (e.PaySandbox = "Pay Sandbox"),
            (e.AVTaxonomyService = "Taxonomies + Instructions (Teddy)");
        })(i || (i = {})),
        (function (e) {
          (e.Triage = "Triage"), (e.Action = "Action");
        })(o || (o = {})),
        (function (e) {
          (e.CorpExplain = "corp_explain"),
            (e.AllocationExplain = "allocation_explain"),
            (e.MisconfiguredSupplyLevers = "misconfigured_supply_levers"),
            (e.Throttles = "throttles"),
            (e.TableauAccess = "tableau_access"),
            (e.CapacityAllocation = "capacity_allocation"),
            (e.ThroughputOpsProcesses = "throughput_ops_processes"),
            (e.PermissionAndAssignAttempters =
              "permission_and_assign_attempters"),
            (e.PermissionAndAssignReviewers =
              "permission_and_assign_reviewers"),
            (e.PermissionAndAssignPipelineV3QIRAuditors =
              "permission_and_assign_pipeline_v3_qir_auditors"),
            (e.MassUnassignProject = "mass_unassign_project"),
            (e.WorkerSources = "worker_sources"),
            (e.Placeholder = "placeholder_action_item"),
            (e.RetroactiveEnableDisable = "retroactive_enable_disable"),
            (e.BenchmarkConfiguration = "benchmark_configuration"),
            (e.BenchmarkEnableOrDisable = "benchmark_enable_or_disable"),
            (e.BenchmarkServingConfigs = "benchmark_serving_configs"),
            (e.BenchmarkNiceConfigs = "benchmark_nice_configs"),
            (e.SendTasksToCustomer = "send_tasks_to_customer"),
            (e.QuarantineAndUnquarantineSubtasks =
              "quarantine_and_unquarantine_subtasks"),
            (e.MoveTasksInPipeline = "move_tasks_in_pipeline"),
            (e.MoveTasksInPipelineV3 = "move_tasks_in_pipeline_v3"),
            (e.TuneMinNumBenchmarksConfig = "tune_min_num_benchmarks_config"),
            (e.TuneDisablingThresholdConfig =
              "tune_disabling_threshold_config"),
            (e.TuneMinNumInstructionItemBenchmarksConfig =
              "tune_min_num_instruction_item_benchmarks_config"),
            (e.TuneInstructionItemDisablingThresholdConfig =
              "tune_instruction_item_disabling_threshold_config"),
            (e.AllProjectCourses = "all_project_courses"),
            (e.CourseStarts = "course_starts"),
            (e.CoursePath = "course_path"),
            (e.CourseBlockingPoints = "course_blocking_points"),
            (e.CourseScenarios = "course_scenarios"),
            (e.GenerateConfusionMatrix = "generate_confusion_matrix"),
            (e.GenerateFeedbackCenter = "generate_feedback_center"),
            (e.PersonalizedCourses = "personalized_courses"),
            (e.InstructionItemManager = "instruction_item_manager"),
            (e.InstructionUpdateChangelog = "instruction_update_changelog"),
            (e.CheckForLongTailTasks = "check_for_long_tail_tasks"),
            (e.DemoteSuspiciousReviewers = "demote_suspicious_reviewers"),
            (e.AssignTrustedWorkersLTT = "assign_trusted_reviewers"),
            (e.CheckAssignRejectionsConfig = "check_assign_rejections_config"),
            (e.SpeedAuditLTT = "speed_audit_ltt"),
            (e.TuneLinters = "tune_linters"),
            (e.LinterConfig = "linter_config"),
            (e.RemedialCourses = "remedial_courses"),
            (e.LinterDebugging = "linter_debugging"),
            (e.AuditLintResults = "audit_lint_results"),
            (e.PermissionAndAssignSuperAttempters =
              "permission_and_assign_super_attempters"),
            (e.PermissionAndAssignSpotters = "permission_and_assign_spotters"),
            (e.SubtaskReservation = "subtask_reservation"),
            (e.DemoteSuperAttempters = "demote_super_attempters"),
            (e.DemoteReviewers = "demote_reviewers"),
            (e.MassDisableTaskers = "mass_disable_taskers"),
            (e.DemoteSpotters = "demote_spotters"),
            (e.SendSuperAttempterTasks = "send_super_attempter_tasks"),
            (e.SendSpotterTasks = "send_spotter_tasks"),
            (e.SpotterPerformanceDecisionTree =
              "spotter_performance_decision_tree"),
            (e.SpotterQualityManualMonitoring =
              "spotter_quality_manual_monitoring"),
            (e.ReleaseAuditStages = "release_audit_stages"),
            (e.SpotterAuditTool = "spotter_audit_tool"),
            (e.PromoteAttemptersToSpotters = "promote_attempters_to_spotters"),
            (e.DemoteSpottersToAttempters = "demote_spotters_to_attempters"),
            (e.TriagePausedPermissionGroup = "triage_paused_permission_group"),
            (e.AnalyzeInlineComments = "analyze_inline_comments");
        })(s || (s = {})),
        (function (e) {
          (e.InsufficientCapacityAllocations =
            "insufficient_capacity_allocations"),
            (e.LowBenchmarkConversion = "low_benchmark_conversion"),
            (e.LowInstructionItemBenchmarkConversion =
              "low_instruction_item_benchmark_conversion"),
            (e.LowCoursesConversion = "low_courses_conversion"),
            (e.LongTailTasks = "long_tail_tasks"),
            (e.Placeholder = "placeholder_triage_item");
        })(r || (r = {}));
    },
    819382: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var i = n(418638),
        o = n(285556),
        s = n(827378);
      function r(e, t, n, i, o, s, r) {
        try {
          var a = e[s](r),
            c = a.value;
        } catch (l) {
          return void n(l);
        }
        a.done ? t(c) : Promise.resolve(c).then(i, o);
      }
      function a(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (i, o) {
            var s = e.apply(t, n);
            function a(e) {
              r(s, i, o, a, c, "next", e);
            }
            function c(e) {
              r(s, i, o, a, c, "throw", e);
            }
            a(void 0);
          });
        };
      }
      function c() {
        return (c = a(function* (e) {
          if (e)
            return yield (0, o.ZP)(
              null,
              `corp-api/lookup/${e}/config?project=${e}&type=project`,
              { method: "GET" }
            );
        })).apply(this, arguments);
      }
      function l(e) {
        const { 0: t, 1: n } = (0, s.useState)(!0),
          { 0: o, 1: r } = (0, s.useState)(void 0),
          l = (0, i.Z)(
            a(function* () {
              return (function (e) {
                return c.apply(this, arguments);
              })(e);
            }),
            [e]
          );
        (0, s.useEffect)(() => {
          l.loading || n(!1);
        }, [l.loading]),
          (0, s.useEffect)(() => {
            l.value && r(l.value);
          }, [l.value]);
        const d = (0, s.useCallback)(() => {
          l.retry();
        }, [l]);
        return {
          loadingConfig: t,
          errorConfig: l.error,
          projectConfig: o,
          retryConfig: d,
        };
      }
    },
    691165: function (e, t, n) {
      n.d(t, {
        X: function () {
          return u;
        },
      });
      var i = n(476101),
        o = n(324465),
        s = n(551620),
        r = n(986910),
        a = n(285556);
      function c(e) {
        var t, n;
        const i =
          null !==
            (n =
              null !== (t = null === e || void 0 === e ? void 0 : e.message) &&
              void 0 !== t
                ? t
                : null === e || void 0 === e
                ? void 0
                : e.toString()) && void 0 !== n
            ? n
            : `Unknown ${
                (null === e || void 0 === e ? void 0 : e.status)
                  ? `, status code: ${e.status}`
                  : ""
              }}`;
        r.Am.error(`Error: ${i}`), (0, a.cF)(e);
      }
      const l = new i.t({ onError: c }),
        d = new o.L({ onError: c }),
        u =
          "localhost" === window.location.hostname
            ? new s.S({
                queryCache: l,
                mutationCache: d,
                defaultOptions: {
                  queries: { retry: 1, refetchOnWindowFocus: !1 },
                },
              })
            : new s.S({
                queryCache: l,
                mutationCache: d,
                defaultOptions: {
                  queries: { refetchOnWindowFocus: !1, retry: !1 },
                },
              });
    },
    400417: function (e, t, n) {
      n.d(t, {
        o: function () {
          return r;
        },
      });
      var i = n(824246),
        o = {
          src: "/_next/static/media/techonology-3d.a1b3ec25.png",
          height: 2048,
          width: 2048,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAxElEQVR42mPo3/WciQEHWLr+MUSuZecTp8lLH8c3bnpkPmHhE6/ePY9tJi16HA9XGd51LKm+++7M4Kz9evkdt8JTJ19b1NTxoBOuoHHFXfOGRc90+469zp28/MWRjAUvQ7rm3beFK4htOO7bOutpaHDbkTNNjffPN0y+aVLceiMVrqBl9xObnmVP5ydPvxsa13/fsG3zo4Api5+nwBUENx9KLm+81Vkw9YJD28QHaWGNR9Nr2u51gyUrZ5/A6c1Fkw4wAgCztFuKn7NUFgAAAABJRU5ErkJggg==",
        },
        s = n(720227);
      const r = ({ className: e, logoImg: t = o, alt: n = "ops-hub-logo" }) =>
        (0, i.jsx)("img", {
          src: t.src,
          alt: n,
          className: (0, s.m)("h-4/5", e),
        });
    },
    665676: function (e, t, n) {
      n.d(t, {
        l: function () {
          return S;
        },
      });
      var i = n(824246),
        o = n(827378),
        s = n(335331),
        r = n(298784),
        a = n.n(r),
        c = n(68649),
        l = n(995632),
        d = n(604375),
        u = n(138944),
        p = n(792739),
        m = n(882693),
        h = n(285556),
        x = n(456552),
        g = n(691165),
        v = n(959807),
        T = n.n(v);
      function j(e, t, n, i, o, s, r) {
        try {
          var a = e[s](r),
            c = a.value;
        } catch (l) {
          return void n(l);
        }
        a.done ? t(c) : T().resolve(c).then(i, o);
      }
      function y(e) {
        return function () {
          var t = this,
            n = arguments;
          return new (T())(function (i, o) {
            var s = e.apply(t, n);
            function r(e) {
              j(s, i, o, r, a, "next", e);
            }
            function a(e) {
              j(s, i, o, r, a, "throw", e);
            }
            r(void 0);
          });
        };
      }
      var f = n(787989);
      function k(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function b(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            i.forEach(function (t) {
              k(e, t, n[t]);
            });
        }
        return e;
      }
      function A(e, t) {
        return Array.from({ length: e }, (e, n) => t(n));
      }
      const C = () =>
          (0, i.jsxs)("div", {
            className: "scaleui scale-theme p-2 flex gap-2",
            children: [
              (0, i.jsx)("div", {
                className: "flex-1",
                children: (0, i.jsx)(f.O, { className: "w-full p-3" }),
              }),
              (0, i.jsx)("div", {
                className: "flex-1 flex flex-col gap-2",
                children: A(4, (e) =>
                  (0, i.jsx)(f.O, { className: "w-full p-3" }, e)
                ),
              }),
              (0, i.jsx)("div", {
                className: "flex-1 flex flex-col gap-2 ",
                children: A(4, (e) =>
                  (0, i.jsx)(f.O, { className: "w-full p-3" }, e)
                ),
              }),
            ],
          }),
        S = ({
          teamId: e,
          isManager: t,
          TeamSelectButton: n,
          onSelectTeam: r,
        }) => {
          const c = I(),
            v = (0, o.useRef)(null),
            { 0: T, 1: j } = (0, o.useState)(e),
            { 0: f, 1: k } = (0, o.useState)({});
          let A;
          try {
            A = (0, s.k6)();
          } catch (q) {}
          const S = (0, o.useCallback)(
              (t) => {
                A && A.replace(A.location.pathname.replace(e, t));
              },
              [A, e]
            ),
            { data: w, isLoading: P } = (function ({
              teamId: e,
              cacheTeamsIds: t,
            }) {
              const n = ["teams", "worker-teams", e],
                i = g.X.getQueryData(n);
              return (0, x.useQuery)(
                n,
                y(function* () {
                  return yield (0,
                  h.ZP)(null, `corp-api/worker_teams/team_root/${e}`, { method: "POST", body: { cacheTeamsIds: t } });
                }),
                { enabled: !!e, initialData: i }
              );
            })({ teamId: T, cacheTeamsIds: a().keys(f) });
          (0, o.useEffect)(() => {
            if (0 === a().keys(f).length && w) k(w);
            else if (w)
              for (const e in w) e in f || k((t) => b({}, t, { [e]: w[e] }));
          }, [f, w, P]);
          const N = (0, o.useMemo)(() => {
              let e = T;
              const t = [],
                n = a().keys(f);
              for (
                n.length &&
                !n.includes(e) &&
                (e = a().find(n, (t) =>
                  a().includes(
                    f[t].subTeams.map((e) => e.id),
                    e
                  )
                ));
                e && e in f;

              )
                t.push(f[e]), (e = f[e].parentTeamId);
              return a().reverse(t);
            }, [f, T]),
            _ = (0, o.useMemo)(() => {
              if (0 === N.length) return [];
              return [[N[0]], ...N.map((e) => e.subTeams)]
                .map((e, t) =>
                  a()
                    .sortBy(e, "name")
                    .map((e) => {
                      var n;
                      return {
                        id: e.id,
                        highlighted:
                          e.id ===
                          (null === (n = N[t]) || void 0 === n ? void 0 : n.id),
                        selected: e.id === T,
                        name: e.name,
                        subTeams: e.subTeams,
                      };
                    })
                )
                .filter((e) => e.length > 0);
            }, [N, T]),
            B = (0, o.useCallback)((e, t) => {
              j(t);
            }, []);
          (0, o.useLayoutEffect)(() => {
            const e = v.current;
            if (!e) return;
            const t = e.scrollWidth;
            e.scrollTo({ left: t, behavior: "smooth" });
          }, [_]);
          const E = (e) =>
              e.length > 30 ? `...${e.substring(e.length - 27)}` : e,
            R = (0, o.useCallback)(
              (e) => {
                const t = f,
                  n = t[T],
                  i = (null === n || void 0 === n ? void 0 : n.parentTeamId)
                    ? t[null === n || void 0 === n ? void 0 : n.parentTeamId]
                    : void 0,
                  o = i ? a().sortBy(i.subTeams, "name") : void 0,
                  s = i ? a().findIndex(o, (e) => e.id === T) : -1;
                if ("ArrowLeft" === e.key) i && j(i.id);
                else if ("ArrowRight" === e.key)
                  (null === n || void 0 === n ? void 0 : n.subTeams[0]) &&
                    j(n.subTeams[0].id);
                else if ("ArrowUp" === e.key) i && o && s > 0 && j(o[s - 1].id);
                else {
                  if ("ArrowDown" !== e.key) return;
                  i && o && s < i.subTeams.length - 1 && j(o[s + 1].id);
                }
                e.stopPropagation(), e.preventDefault();
              },
              [T, f]
            ),
            [O, D] = (0, l.Z)(!1);
          return P && 0 === N.length
            ? (0, i.jsx)(C, {})
            : (0, i.jsxs)("div", {
                tabIndex: 0,
                className: c.container,
                onKeyDown: R,
                ref: v,
                children: [
                  _.filter((e) => e.length > 0).map((e, t) =>
                    (0, i.jsxs)(
                      "div",
                      {
                        className: c.column,
                        children: [
                          e.map(
                            ({
                              highlighted: e,
                              selected: t,
                              name: o,
                              id: s,
                              subTeams: a,
                            }) =>
                              (0, i.jsxs)(
                                "div",
                                {
                                  className: t && a.length && P ? c.row : "",
                                  children: [
                                    (0, i.jsxs)(
                                      "div",
                                      {
                                        className: (0, u.default)(c.node, {
                                          highlighted: e,
                                          selected: t,
                                        }),
                                        draggable: O,
                                        onClick: (e) => B(e, s),
                                        children: [
                                          (0, i.jsxs)("div", {
                                            children: [
                                              (0, i.jsx)("span", {
                                                className: "icon",
                                                children: (0, i.jsx)(p.G, {
                                                  icon:
                                                    a && a.length < 1
                                                      ? "users"
                                                      : "folder",
                                                }),
                                              }),
                                              (0, i.jsx)(d.u, {
                                                arrow: !0,
                                                placement: "top",
                                                title: o,
                                                enterDelay: 1e3,
                                                children: (0, i.jsx)("span", {
                                                  className: "text",
                                                  children: E(o),
                                                }),
                                              }),
                                            ],
                                          }),
                                          (0, i.jsx)("span", {
                                            className: "icon",
                                            onClick: () =>
                                              r ? r(s, E(o), o) : S(s),
                                            children: n
                                              ? (0, i.jsx)(n, {})
                                              : (0, i.jsx)(p.G, {
                                                  icon: "external-link",
                                                }),
                                          }),
                                        ],
                                      },
                                      s
                                    ),
                                    t && a.length && P
                                      ? (0, i.jsx)("span", {
                                          className: c.loadingIcon,
                                          children: (0, i.jsx)(d.D8, {
                                            size: 16,
                                          }),
                                        })
                                      : null,
                                  ],
                                },
                                s
                              )
                          ),
                          O &&
                            t === _.length - 1 &&
                            (0, i.jsx)("button", {
                              children: "Create Subteam (coming soon?)",
                            }),
                        ],
                      },
                      t
                    )
                  ),
                  t &&
                    (0, i.jsxs)("label", {
                      htmlFor: "switch",
                      children: [
                        (0, i.jsx)(m.Z, {
                          id: "switch",
                          value: O,
                          onChange: D,
                        }),
                        " Edit Mode (coming soon)",
                      ],
                    }),
                ],
              });
        },
        I = (0, c.ZL)({
          container: {
            display: "flex",
            overflow: "auto",
            outline: "none",
            minWidth: 1,
            "&:focus .selected": { backgroundColor: "#2564D9", color: "white" },
          },
          column: {
            display: "flex",
            flexBasis: 320,
            flexShrink: 0,
            flexDirection: "column",
            overflow: "auto",
            padding: "8px 20px",
            border: "1px solid #E6E6E6",
          },
          row: {
            display: "grid",
            gridTemplateColumns: "1fr 20px",
            alignItems: "center",
            width: "100%",
            gap: 2,
            "&:hover": { backgroundColor: "#F1F1F1" },
          },
          loadingIcon: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            width: "100%",
            height: "100%",
          },
          node: {
            display: "flex",
            padding: "8px 12px",
            cursor: "pointer",
            justifyContent: "space-between",
            "&.highlighted": { backgroundColor: "#DCDDDC" },
            "&.selected": { backgroundColor: "gray", color: "white" },
            "& .icon": {
              color: "#8CD0F7",
              marginRight: 4,
              minWidth: 12,
              width: 12,
            },
            "& .text": { overflow: "auto" },
          },
        });
    },
    478: function (e, t, n) {
      n.r(t),
        n.d(t, {
          getContentUnderstandingInsightsData: function () {
            return r;
          },
          storeContentUnderstandingInsightsData: function () {
            return c;
          },
          storeContentUnderstandingCustomizationJSON: function () {
            return d;
          },
          getContentUnderstandingCustomizationJSON: function () {
            return p;
          },
          refreshContentUnderstandingInsightsData: function () {
            return h;
          },
          isInsightsDashboardConfigEnabled: function () {
            return g;
          },
          isTaxonomyManagementConfigEnabled: function () {
            return T;
          },
          getTrendExplorerData: function () {
            return y;
          },
          getPresentationDashboard: function () {
            return k;
          },
          getPresentationDashboardPages: function () {
            return A;
          },
        });
      var i = n(285556);
      function o(e, t, n, i, o, s, r) {
        try {
          var a = e[s](r),
            c = a.value;
        } catch (l) {
          return void n(l);
        }
        a.done ? t(c) : Promise.resolve(c).then(i, o);
      }
      function s(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (i, s) {
            var r = e.apply(t, n);
            function a(e) {
              o(r, i, s, a, c, "next", e);
            }
            function c(e) {
              o(r, i, s, a, c, "throw", e);
            }
            a(void 0);
          });
        };
      }
      function r(e, t) {
        return a.apply(this, arguments);
      }
      function a() {
        return (a = s(function* (e, t) {
          return yield (0,
          i.ZP)(null, "internal/contentUnderstanding/dashboard-insights/fetch", { method: "POST", body: { projectId: e, filename: t } });
        })).apply(this, arguments);
      }
      function c(e, t, n, i, o, s) {
        return l.apply(this, arguments);
      }
      function l() {
        return (l = s(function* (e, t, n, o, s, r) {
          const { body: a } = yield (0, i.ZP)(
            null,
            "internal/contentUnderstanding/dashboard-insights/store",
            {
              method: "POST",
              body: {
                projectId: e,
                insightsFilename: t,
                s3InsightsKey: n,
                data: o,
                batchName: s,
                projectName: r,
              },
            }
          );
          return a;
        })).apply(this, arguments);
      }
      function d(e, t) {
        return u.apply(this, arguments);
      }
      function u() {
        return (u = s(function* (e, t) {
          const { body: n } = yield (0, i.ZP)(
            null,
            `internal/contentUnderstanding/dashboard-insights/store-customization-json/${e}`,
            { method: "POST", body: { value: t } }
          );
          return n;
        })).apply(this, arguments);
      }
      function p(e) {
        return m.apply(this, arguments);
      }
      function m() {
        return (m = s(function* (e) {
          const { body: t } = yield (0, i.ZP)(
            null,
            `internal/contentUnderstanding/dashboard-insights/fetch-customization-json/${e}`,
            { method: "GET" }
          );
          return t;
        })).apply(this, arguments);
      }
      function h(e) {
        return x.apply(this, arguments);
      }
      function x() {
        return (x = s(function* (e) {
          const { body: t } = yield (0, i.ZP)(
            null,
            `internal/contentUnderstanding/dashboard-insights/refresh/${e}`,
            { method: "POST" }
          );
          return t;
        })).apply(this, arguments);
      }
      function g(e) {
        return v.apply(this, arguments);
      }
      function v() {
        return (v = s(function* (e) {
          if (!e) return !1;
          const t = yield (0, i.ZP)(
            null,
            `internal/contentUnderstanding/dashboard-insights/is-config-enabled/${e}`,
            { method: "GET" }
          );
          return null !== t && void 0 !== t && t;
        })).apply(this, arguments);
      }
      function T(e) {
        return j.apply(this, arguments);
      }
      function j() {
        return (j = s(function* (e) {
          if (!e) return !1;
          const t = yield (0, i.ZP)(
            null,
            `internal/contentUnderstanding/taxonomy-management/is-config-enabled/${e}`,
            { method: "GET" }
          );
          return null !== t && void 0 !== t && t;
        })).apply(this, arguments);
      }
      function y(e, t) {
        return f.apply(this, arguments);
      }
      function f() {
        return (f = s(function* (e, t) {
          return yield (0,
          i.ZP)(null, `internal/contentUnderstanding/trend-explorer/fetch/${t}/${e}`, { method: "GET" });
        })).apply(this, arguments);
      }
      function k(e) {
        return b.apply(this, arguments);
      }
      function b() {
        return (b = s(function* (e) {
          return yield (0,
          i.ZP)(null, `internal/contentUnderstanding/dashboard/presentations/${e}`, { method: "GET" });
        })).apply(this, arguments);
      }
      function A() {
        return C.apply(this, arguments);
      }
      function C() {
        return (C = s(function* () {
          return yield (0,
          i.ZP)(null, "internal/contentUnderstanding/dashboard/presentations", { method: "GET" });
        })).apply(this, arguments);
      }
    },
    637723: function (e, t, n) {
      n.d(t, {
        wO: function () {
          return r;
        },
        Y_: function () {
          return c;
        },
        Ps: function () {
          return d;
        },
        OX: function () {
          return u;
        },
      });
      var i = n(285556);
      function o(e, t, n, i, o, s, r) {
        try {
          var a = e[s](r),
            c = a.value;
        } catch (l) {
          return void n(l);
        }
        a.done ? t(c) : Promise.resolve(c).then(i, o);
      }
      function s(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (i, s) {
            var r = e.apply(t, n);
            function a(e) {
              o(r, i, s, a, c, "next", e);
            }
            function c(e) {
              o(r, i, s, a, c, "throw", e);
            }
            a(void 0);
          });
        };
      }
      function r(e, t) {
        return a.apply(this, arguments);
      }
      function a() {
        return (a = s(function* (e, t) {
          return yield (0,
          i.ZP)(null, `corp-api/jobs/${e}`, { method: "POST", body: { name: e, input: JSON.stringify(t), metadata: { reason: `Invoked from ${window.location.href}` }, isAsync: !1 } });
        })).apply(this, arguments);
      }
      function c(e, t) {
        return l.apply(this, arguments);
      }
      function l() {
        return (l = s(function* (e, t) {
          return yield (0,
          i.ZP)(null, `corp-api/jobs/${e}`, { method: "POST", body: { name: e, input: JSON.stringify(t), metadata: { reason: `Invoked from ${window.location.href}` }, isAsync: !0 } });
        })).apply(this, arguments);
      }
      const d = (function () {
        var e = s(function* (e, t, n = !1, o = !1, s) {
          const r = s ? `toolbox/${e}` : `jobs/${e}-dynamicCorpJob`;
          return yield (0,
          i.ZP)(null, `corp-api/${r}`, { method: "POST", body: { name: e, input: JSON.stringify(t), metadata: { reason: "Used Dynamic Corp Page" }, isAsync: n, isPoll: o } });
        });
        return function (t, n) {
          return e.apply(this, arguments);
        };
      })();
      function u(e) {
        return p.apply(this, arguments);
      }
      function p() {
        return (p = s(function* (e) {
          return (0, i.ZP)(null, `corp-api/jobs/job/${e}`);
        })).apply(this, arguments);
      }
    },
  },
]);
