"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [24456],
  {
    324456: function (e, t, s) {
      s.d(t, {
        g3: function () {
          return L;
        },
      });
      var a,
        i = s(824246),
        l = s(679892),
        n = s.n(l),
        r = s(298784),
        o = s.n(r),
        c = s(827378),
        d = s(959807),
        m = s.n(d),
        h = s(608438),
        p = s(220453),
        x = s(523428),
        b = s(792739),
        u = s(942662),
        f = s(332591),
        j = s(318308),
        g = s(977608),
        v = s(599789),
        k = s(285556),
        y = s(119684),
        w = s(604375),
        T = s(958008),
        N = s(344432),
        S = s(875333),
        P = s(559115);
      function O(e, t, s, a, i, l, n) {
        try {
          var r = e[l](n),
            o = r.value;
        } catch (c) {
          return void s(c);
        }
        r.done ? t(o) : m().resolve(o).then(a, i);
      }
      function _(e) {
        return function () {
          var t = this,
            s = arguments;
          return new (m())(function (a, i) {
            var l = e.apply(t, s);
            function n(e) {
              O(l, a, i, n, r, "next", e);
            }
            function r(e) {
              O(l, a, i, n, r, "throw", e);
            }
            n(void 0);
          });
        };
      }
      function C(e, t, s) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: s,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = s),
          e
        );
      }
      !(function (e) {
        (e.Remotasks = "Remotasks"), (e.OutlierProject = "Outlier (project)");
      })(a || (a = {}));
      const E = () =>
        (0, i.jsx)("div", { style: { display: "block", height: "20px" } });
      class A extends c.Component {
        noFilters() {
          return o().isEmpty(this.getUsedFilters());
        }
        needsTargetSubtask() {
          return (
            this.state.displayLocation ===
              v.AnnouncementDisplayLocation.TaskQueue &&
            !this.state.targetSubtaskId
          );
        }
        previewVisible() {
          return !!(
            this.state.name ||
            this.state.body ||
            this.state.acknowledgementText
          );
        }
        getUsedFilters() {
          return A.FILTER_STATE_KEYS.filter((e) => o().some(this.state[e]));
        }
        renderFilterExplanation() {
          var e, t, s;
          const l = this.state.reviewersOnly ? "reviewers" : "taskers",
            n = this.state.selectedTaskTypes.map((e) => e.label).join(" or "),
            r = this.state.selectedCustomers.map((e) => e.label).join(" and ");
          var o;
          const c =
              (null === (e = this.state.selectedOutlierProject) || void 0 === e
                ? void 0
                : e.label) ||
              (null !==
                (o =
                  null === (t = this.state.selectedProject) || void 0 === t
                    ? void 0
                    : t.label) && void 0 !== o
                ? o
                : null),
            d = this.state.projectList;
          var m;
          const h =
              null !==
                (m =
                  null === (s = this.state.selectedTeam) || void 0 === s
                    ? void 0
                    : s.label) && void 0 !== m
                ? m
                : null,
            p = this.getUsedFilters();
          let x = p.length
            ? "This will notify all "
            : this.state.activeTab === a.OutlierProject
            ? "Specifying a project below is mandatory. Anything else is optional"
            : "Must specify non-empty list of either task types or customers or a project or a worker team.";
          return (
            p.length &&
              (this.state.taskerEmails.length && (x += " selected "),
              (x += l),
              (x += h ? " from worker team " + h : ""),
              (x += " who can do " + (n.length ? n : "") + " tasks"),
              (x += r.length ? " from the customer(s) " + r : ""),
              (x += null === r || void 0 === r ? void 0 : r.length),
              c
                ? (x += c
                    ? " with permissions for the project " +
                      c +
                      " [Note that this is based on permissions, and not assignment]"
                    : "")
                : d.length > 0 &&
                  (x += ` will announce to ${d.length} projects. [Note that this is based on permissions, and not assignment]`)),
            (0, i.jsx)("p", {
              className: "explanation",
              children: (0, i.jsx)("strong", { children: x }),
            })
          );
        }
        render() {
          let e = null;
          const t = { __html: p.ZP.render(this.state.body) };
          if (this.state.lastSent) {
            var s;
            const t = this.state.sentTest
              ? `Would notify: ${this.state.lastSentCount} taskers`
              : `\u2705 Sending notifications to ${this.state.lastSentCount} taskers`;
            e = (0, i.jsxs)("div", {
              children: [
                (0, i.jsx)(E, {}),
                (0, i.jsx)("div", { children: t }),
                (0, i.jsx)("ul", {
                  children:
                    null === (s = this.state.sentList) || void 0 === s
                      ? void 0
                      : s.map((e) =>
                          (0, i.jsx)(
                            "li",
                            {
                              children: (0, i.jsx)("a", {
                                href: `/corp/lookup/${e}`,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: e,
                              }),
                            },
                            e
                          )
                        ),
                }),
              ],
            });
          }
          return (0, i.jsxs)("div", {
            className: "jsx-674207f97b9c76d",
            children: [
              (0, i.jsx)("h3", {
                className: "jsx-674207f97b9c76d",
                children: (0, i.jsxs)(w.bZ, {
                  severity: "warning",
                  children: [
                    "This tool will be deprecated in a few weeks. For managing communications, please proceed to the",
                    " ",
                    (0, i.jsx)("a", {
                      href: "https://dashboard.scale.com/corp/growth-center/communication/setup",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      "aria-label": "Navigate to the Communications Center",
                      className: "jsx-674207f97b9c76d",
                      children: "Communications Center",
                    }),
                    ". Use this link to set up a new broadcast communication. For assistance, contact the Growth Engineering team via #growth-eng-external.",
                  ],
                }),
              }),
              !this.props.onlyOutlierMode &&
                (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)("h1", {
                      className: "jsx-674207f97b9c76d body__title",
                      children: "Announcements ",
                    }),
                    (0, i.jsxs)("a", {
                      href: "https://docs.google.com/document/d/1ufebuSO5L3WiP2qfvtRe04uGEpr_8YkV6PbQiEHtMJw/edit#heading=h.akppaisn8g95",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "jsx-674207f97b9c76d",
                      children: [
                        "Tasker Comms Templates ",
                        (0, i.jsx)(b.G, { icon: "external-link" }),
                      ],
                    }),
                    " ",
                    !this.props.hideOutlier &&
                      (0, i.jsxs)(w.mQ, {
                        onClick: this.handleClickTabs,
                        defaultActiveTabIndex: 0,
                        children: [
                          (0, i.jsx)(w.OK, { label: a.Remotasks }),
                          (0, i.jsx)(w.OK, { label: a.OutlierProject }),
                        ],
                      }),
                    this.state.activeTab !== a.OutlierProject &&
                      (0, i.jsxs)(i.Fragment, {
                        children: [
                          (0, i.jsxs)("div", {
                            className:
                              "jsx-674207f97b9c76d horizontal__selects",
                            children: [
                              (0, i.jsxs)("fieldset", {
                                className:
                                  "jsx-674207f97b9c76d fieldset fieldset--long",
                                children: [
                                  (0, i.jsx)("label", {
                                    className: "jsx-674207f97b9c76d",
                                    children: "Filter by task types",
                                  }),
                                  (0, i.jsx)("div", {
                                    className: "jsx-674207f97b9c76d sp__1",
                                  }),
                                  (0, i.jsx)(h.Z, {
                                    instanceId: "email_taskFilter",
                                    placeholder: "Any task type",
                                    multi: !0,
                                    value: this.state.selectedTaskTypes,
                                    onChange: this.setTaskType,
                                    options: this.taskTypes,
                                  }),
                                ],
                              }),
                              (0, i.jsx)(S.ZP.Consumer, {
                                children: ({ isRemoAdmin: e }) =>
                                  !e &&
                                  (0, i.jsxs)("fieldset", {
                                    className:
                                      "jsx-674207f97b9c76d fieldset fieldset--long",
                                    children: [
                                      (0, i.jsx)("label", {
                                        className: "jsx-674207f97b9c76d",
                                        children: "Filter by customer (email)",
                                      }),
                                      (0, i.jsx)("div", {
                                        className: "jsx-674207f97b9c76d sp__1",
                                      }),
                                      (0, i.jsx)(h.Z, {
                                        instanceId: "email_customerFilter",
                                        loadOptions: this.searchCustomers,
                                        value: this.state.selectedCustomers,
                                        onChange: this.setSelectedCustomers,
                                        placeholder: "Any customer",
                                        multi: !0,
                                      }),
                                    ],
                                  }),
                              }),
                              this.state.activeTab === a.Remotasks &&
                                (0, i.jsxs)("fieldset", {
                                  className:
                                    "jsx-674207f97b9c76d fieldset fieldset--long",
                                  children: [
                                    (0, i.jsx)("label", {
                                      className: "jsx-674207f97b9c76d",
                                      children: "Filter by project",
                                    }),
                                    (0, i.jsx)("div", {
                                      className: "jsx-674207f97b9c76d sp__1",
                                    }),
                                    (0, i.jsx)(T.Z, {
                                      placeholder: "Select a project",
                                      onChange: this.setSelectedProject,
                                      value: this.state.selectedProject,
                                      width: "400px",
                                    }),
                                  ],
                                }),
                              this.state.activeTab === a.Remotasks &&
                                (0, i.jsxs)("fieldset", {
                                  className:
                                    "jsx-674207f97b9c76d fieldset fieldset--long",
                                  children: [
                                    (0, i.jsx)("label", {
                                      className: "jsx-674207f97b9c76d",
                                      children: "Multi Project Drop Box",
                                    }),
                                    (0, i.jsx)("div", {
                                      className: "jsx-674207f97b9c76d sp__1",
                                    }),
                                    (0, i.jsx)(w.oi, {
                                      fullWidth: !0,
                                      size: "large",
                                      label: "Project IDs",
                                      onChange: this.setProjectList,
                                      helperText: "Delimit any way you want",
                                    }),
                                  ],
                                }),
                              (0, i.jsxs)("fieldset", {
                                className:
                                  "jsx-674207f97b9c76d fieldset fieldset--long",
                                children: [
                                  (0, i.jsx)("label", {
                                    className: "jsx-674207f97b9c76d",
                                    children: "Filter by team",
                                  }),
                                  (0, i.jsx)("div", {
                                    className: "jsx-674207f97b9c76d sp__1",
                                  }),
                                  (0, i.jsx)(N.Z, {
                                    placeholder: "Select a team",
                                    onChange: this.setSelectedTeam,
                                    value: this.state.selectedTeam,
                                    width: "400px",
                                  }),
                                ],
                              }),
                              (0, i.jsx)("span", {
                                style: { width: "100%" },
                                className: "jsx-674207f97b9c76d",
                              }),
                              (0, i.jsxs)("fieldset", {
                                style: { margin: "10px 0" },
                                className:
                                  "jsx-674207f97b9c76d fieldset fieldset--long",
                                children: [
                                  (0, i.jsx)("label", {
                                    className: "jsx-674207f97b9c76d",
                                    children:
                                      "Taskers receiving announcements (email)",
                                  }),
                                  (0, i.jsx)("div", {
                                    className: "jsx-674207f97b9c76d sp__1",
                                  }),
                                  (0, i.jsx)(w.oi, {
                                    fullWidth: !0,
                                    size: "large",
                                    label: "Tasker Emails",
                                    defaultValue: this.state.taskerEmails,
                                    onChange: this.setTaskerEmails,
                                    helperText: "Delimit any way you want",
                                  }),
                                ],
                              }),
                              (0, i.jsxs)("fieldset", {
                                style: { margin: "10px 0" },
                                className:
                                  "jsx-674207f97b9c76d fieldset fieldset--long",
                                children: [
                                  (0, i.jsxs)("label", {
                                    className: "jsx-674207f97b9c76d",
                                    children: [
                                      (0, i.jsx)("input", {
                                        type: "checkbox",
                                        checked:
                                          this.state.enableExpirationField,
                                        onChange: () => {
                                          this.state.enableExpirationField &&
                                            this.setState({
                                              expirationTime: null,
                                              showDateError: !1,
                                            }),
                                            this.setState({
                                              enableExpirationField:
                                                !this.state
                                                  .enableExpirationField,
                                            });
                                        },
                                        className: "jsx-674207f97b9c76d",
                                      }),
                                      "Add Expiration Time (UTC)",
                                    ],
                                  }),
                                  this.state.showDateError &&
                                    (0, i.jsx)("span", {
                                      className:
                                        "jsx-674207f97b9c76d date-error-msg",
                                      children:
                                        "Please provide a date in the future",
                                    }),
                                  (0, i.jsx)("div", {
                                    className: "jsx-674207f97b9c76d sp__1",
                                  }),
                                  (0, i.jsx)(y.A, {
                                    disabled: !this.state.enableExpirationField,
                                    showTimeSelect: !0,
                                    calendarClassName: "date-time-picker",
                                    className: this.state.showDateError
                                      ? "date_time_picker_error_border"
                                      : "",
                                    dateFormat: "MM/dd/yyyy h:mm aa",
                                    onChange: (e) => {
                                      e instanceof Date
                                        ? this.setState({ expirationTime: e })
                                        : this.setState({
                                            expirationTime: null,
                                          });
                                    },
                                    selected: this.state.expirationTime,
                                    minDate: new Date(),
                                    filterTime: this.filterPassedTime,
                                  }),
                                ],
                              }),
                              (0, i.jsx)("div", {
                                className: "jsx-674207f97b9c76d hsp__3",
                              }),
                              (0, i.jsxs)("label", {
                                className: "jsx-674207f97b9c76d",
                                children: [
                                  (0, i.jsx)("input", {
                                    type: "checkbox",
                                    checked: this.state.isLegalAcknowledgement,
                                    onChange: this.setIsLegalAcknowledgement,
                                    className: "jsx-674207f97b9c76d",
                                  }),
                                  "Is Legal",
                                ],
                              }),
                              (0, i.jsxs)("label", {
                                className: "jsx-674207f97b9c76d",
                                children: [
                                  (0, i.jsx)("input", {
                                    type: "checkbox",
                                    checked: this.state.reviewersOnly,
                                    onChange: this.setReviewersOnly,
                                    className: "jsx-674207f97b9c76d",
                                  }),
                                  "Reviewers Only",
                                ],
                              }),
                            ],
                          }),
                          this.renderFilterExplanation(),
                          (0, i.jsx)(E, {}),
                          (0, i.jsx)("hr", {
                            className: "jsx-674207f97b9c76d",
                          }),
                        ],
                      }),
                  ],
                }),
              (0, i.jsxs)("div", {
                className:
                  "jsx-674207f97b9c76d composition-grid " +
                  (this.state.activeTab === a.OutlierProject
                    ? "outlier-grid"
                    : ""),
                children: [
                  (0, i.jsxs)("div", {
                    className: "jsx-674207f97b9c76d",
                    children: [
                      (0, i.jsxs)("fieldset", {
                        className:
                          "jsx-674207f97b9c76d fieldset fieldset--long",
                        children: [
                          (0, i.jsx)("label", {
                            className: "jsx-674207f97b9c76d",
                            children: "Select platform",
                          }),
                          (0, i.jsx)("div", {
                            className: "jsx-674207f97b9c76d sp__1",
                          }),
                          (0, i.jsx)(h.Z, {
                            disabled:
                              this.props.onlyOutlierMode ||
                              this.state.activeTab === a.OutlierProject,
                            multi: !1,
                            value: this.props.onlyOutlierMode
                              ? P.Z.find(
                                  (e) => e.value === v.TaskingPlatform.Outlier
                                )
                              : this.state.platform,
                            onChange: this.setPlatform,
                            options: P.Z,
                          }),
                        ],
                      }),
                      this.state.platform &&
                        (0, i.jsx)(L, { platform: this.state.platform }),
                    ],
                  }),
                  this.state.activeTab === a.OutlierProject &&
                    (0, i.jsxs)("fieldset", {
                      className: "jsx-674207f97b9c76d fieldset field-project",
                      children: [
                        (0, i.jsx)("label", {
                          className: "jsx-674207f97b9c76d",
                          children:
                            "Select Outlier project to send announcement to",
                        }),
                        (0, i.jsx)("div", {
                          className: "jsx-674207f97b9c76d sp__1",
                        }),
                        (0, i.jsx)(T.Z, {
                          disabled: this.props.onlyOutlierMode,
                          placeholder: "Select a project",
                          onChange: this.setSelectedOutlierProject,
                          value: this.state.selectedOutlierProject,
                          width: "400px",
                        }),
                      ],
                    }),
                  (0, i.jsxs)("fieldset", {
                    className: "jsx-674207f97b9c76d fieldset field-name",
                    children: [
                      (0, i.jsxs)("label", {
                        className: "jsx-674207f97b9c76d",
                        children: [
                          (0, i.jsx)("strong", {
                            className: "jsx-674207f97b9c76d",
                            children: "Name",
                          }),
                          " (used as title for the notification)",
                        ],
                      }),
                      (0, i.jsx)("div", {
                        className: "jsx-674207f97b9c76d sp__1",
                      }),
                      (0, i.jsx)("input", {
                        type: "text",
                        placeholder: "e.g. Trucks are not cars",
                        value: this.state.name,
                        onChange: this.setName,
                        className: "jsx-674207f97b9c76d",
                      }),
                    ],
                  }),
                  (0, i.jsxs)("fieldset", {
                    className: "jsx-674207f97b9c76d fieldset field-body",
                    children: [
                      (0, i.jsxs)("label", {
                        className: "jsx-674207f97b9c76d",
                        children: [
                          (0, i.jsx)("strong", {
                            className: "jsx-674207f97b9c76d",
                            children: "Body",
                          }),
                          " (supports markdown)",
                        ],
                      }),
                      (0, i.jsx)("div", {
                        className: "jsx-674207f97b9c76d sp__1",
                      }),
                      (0, i.jsx)("textarea", {
                        placeholder:
                          "This is the body of the notification you'd like to send to taskers",
                        value: this.state.body,
                        onChange: this.setBody,
                        className: "jsx-674207f97b9c76d",
                      }),
                    ],
                  }),
                  (0, i.jsxs)("fieldset", {
                    className: "jsx-674207f97b9c76d fieldset field-ack",
                    children: [
                      (0, i.jsxs)("label", {
                        className: "jsx-674207f97b9c76d",
                        children: [
                          (0, i.jsx)("strong", {
                            className: "jsx-674207f97b9c76d",
                            children: "Acknowledgement Text",
                          }),
                          ' (default is "',
                          " ",
                          this.state.defaultAcknowledgementText,
                          '")',
                        ],
                      }),
                      (0, i.jsx)("div", {
                        className: "jsx-674207f97b9c76d sp__1",
                      }),
                      (0, i.jsx)("input", {
                        type: "text",
                        placeholder: "e.g. I accept",
                        value: this.state.acknowledgementText,
                        onChange: this.setAcknowledgementText,
                        className: "jsx-674207f97b9c76d",
                      }),
                    ],
                  }),
                  this.state.activeTab === a.Remotasks &&
                    (0, i.jsxs)(w.xu, {
                      className: "config",
                      display: "flex",
                      children: [
                        (0, i.jsxs)(w.NI, {
                          component: "fieldset",
                          children: [
                            (0, i.jsx)(w.lX, { children: "Where to show" }),
                            (0, i.jsxs)(w.Ee, {
                              value: this.state.displayLocation,
                              onChange: this.setDisplayLocation,
                              children: [
                                (0, i.jsx)(w.Y8, {
                                  value:
                                    v.AnnouncementDisplayLocation.Dashboard,
                                  label: "Dashboard",
                                }),
                                (0, i.jsx)(w.Y8, {
                                  value:
                                    v.AnnouncementDisplayLocation.TaskQueue,
                                  label: "In the tasker's queue",
                                }),
                                (0, i.jsx)(w.Y8, {
                                  value: v.AnnouncementDisplayLocation.Dolphin,
                                  label: "Dolphin Tasker only",
                                }),
                              ],
                            }),
                          ],
                        }),
                        this.state.displayLocation ===
                          v.AnnouncementDisplayLocation.TaskQueue &&
                          (0, i.jsxs)("fieldset", {
                            className: "jsx-674207f97b9c76d fieldset",
                            children: [
                              (0, i.jsx)("label", {
                                className: "jsx-674207f97b9c76d",
                                children: (0, i.jsx)("strong", {
                                  className: "jsx-674207f97b9c76d",
                                  children: "Subtask ID",
                                }),
                              }),
                              (0, i.jsx)("div", {
                                className: "jsx-674207f97b9c76d sp__1",
                              }),
                              (0, i.jsx)("input", {
                                type: "text",
                                value: this.state.targetSubtaskId || "",
                                onChange: this.setSubtaskId,
                                className: "jsx-674207f97b9c76d",
                              }),
                            ],
                          }),
                      ],
                    }),
                  this.previewVisible() &&
                    (0, i.jsxs)(i.Fragment, {
                      children: [
                        (0, i.jsx)("div", {
                          className: "jsx-674207f97b9c76d preview-header",
                          children: "Preview:",
                        }),
                        (0, i.jsxs)(w.Xk, {
                          className: "preview",
                          component: w.xu,
                          display: "flex",
                          alignItems: "space-between",
                          flexDirection: "column",
                          children: [
                            (0, i.jsx)("h2", {
                              className: "jsx-674207f97b9c76d preview-name",
                              children: this.state.name,
                            }),
                            (0, i.jsx)("div", {
                              dangerouslySetInnerHTML: t,
                              className: "jsx-674207f97b9c76d preview-body",
                            }),
                            (0, i.jsx)(w.XZ, {
                              checked: !0,
                              disabled: !this.state.acknowledgementText,
                              label:
                                this.state.acknowledgementText ||
                                this.state.defaultAcknowledgementText,
                              labelPlacement: "end",
                              edge: "start",
                            }),
                          ],
                        }),
                        (0, i.jsxs)(w.xu, {
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "space-around",
                          className: "explain",
                          children: [
                            this.state.activeTab === a.Remotasks
                              ? (0, i.jsxs)("span", {
                                  className: "jsx-674207f97b9c76d",
                                  children: [
                                    "This announcement will appear",
                                    " ",
                                    this.state.displayLocation ===
                                    v.AnnouncementDisplayLocation.Dashboard
                                      ? "on the dashboard"
                                      : (0, i.jsxs)("span", {
                                          className: "jsx-674207f97b9c76d",
                                          children: [
                                            "in the queue ",
                                            (0, i.jsx)("em", {
                                              className: "jsx-674207f97b9c76d",
                                              children:
                                                "only when taskers open subtask",
                                            }),
                                            " ",
                                            (0, i.jsx)("strong", {
                                              className:
                                                "jsx-674207f97b9c76d " +
                                                ((this.state.targetSubtaskId
                                                  ? "target-subtask-id"
                                                  : "missing-subtask") || ""),
                                              children:
                                                this.state.targetSubtaskId ||
                                                "???",
                                            }),
                                          ],
                                        }),
                                    this.state.targetSubtaskId && ".",
                                  ],
                                })
                              : this.state.activeTab === a.OutlierProject
                              ? (0, i.jsx)("span", {
                                  className: "jsx-674207f97b9c76d",
                                  children:
                                    "This announcement will appear on the Onboarding view for the taskers in Outlier.",
                                })
                              : null,
                            this.state.isTesting &&
                              (0, i.jsx)("strong", {
                                className: "jsx-674207f97b9c76d",
                                children: "This announcement will not be sent.",
                              }),
                          ],
                        }),
                      ],
                    }),
                  (0, i.jsxs)("div", {
                    className: "jsx-674207f97b9c76d send-options",
                    children: [
                      (0, i.jsxs)("label", {
                        htmlFor: "test",
                        className: "jsx-674207f97b9c76d",
                        children: [
                          (0, i.jsx)("input", {
                            type: "checkbox",
                            name: "test",
                            id: "test",
                            checked: this.state.isTesting,
                            onChange: this.toggleTesting,
                            className: "jsx-674207f97b9c76d",
                          }),
                          "Test mode? (don't send)",
                        ],
                      }),
                      (0, i.jsx)(E, {}),
                      (0, i.jsx)(u.Z, {
                        primary: !0,
                        type: "button",
                        disabled:
                          this.state.activeTab === a.Remotasks
                            ? this.noFilters() ||
                              !this.state.name ||
                              !this.state.body ||
                              this.state.isSending ||
                              this.needsTargetSubtask()
                            : this.state.activeTab === a.OutlierProject &&
                              (!this.state.name ||
                                !this.state.body ||
                                this.state.isSending),
                        onClick: this.submit,
                        children: this.state.isSending
                          ? "Sending..."
                          : "Send Announcement",
                      }),
                    ],
                  }),
                ],
              }),
              e,
              (0, i.jsx)("br", { className: "jsx-674207f97b9c76d" }),
              (0, i.jsx)(n(), {
                id: "2b5410e07e4d5ea1",
                children:
                  ".date-time-picker .react-datepicker__time-box{width:100%!important}.date_time_picker_error_border{border:2px solid var(--color-RemoRed);-webkit-box-shadow:1px 1px 1px#ffff;-moz-box-shadow:1px 1px 1px#ffff;box-shadow:1px 1px 1px#ffff}",
              }),
              (0, i.jsx)(n(), {
                id: "b401539e02d02a77",
                children:
                  '.header.jsx-674207f97b9c76d{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.date-error-msg.jsx-674207f97b9c76d{color:var(--color-RemoRed)}.horizontal__selects.jsx-674207f97b9c76d{max-width:1600px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.composition-grid.jsx-674207f97b9c76d{display:grid;grid-template-columns:600px auto;grid-template-rows:auto;grid-template-areas:"tips options""name preview""body preview""ack  preview""send explain";grid-column-gap:128px;grid-row-gap:16px;margin-top:32px}.composition-grid.outlier-grid.jsx-674207f97b9c76d{display:grid;grid-template-columns:600px auto;grid-template-rows:auto;grid-template-areas:"tips    options""project preview""name    preview""body    preview""ack     preview""send    explain";grid-column-gap:128px;grid-row-gap:16px;margin-top:4px}.composition-grid.jsx-674207f97b9c76d .field-project.jsx-674207f97b9c76d{grid-area:project}.composition-grid.jsx-674207f97b9c76d .field-name.jsx-674207f97b9c76d{grid-area:name}.composition-grid.jsx-674207f97b9c76d .field-body.jsx-674207f97b9c76d{grid-area:body}.composition-grid.jsx-674207f97b9c76d .field-ack.jsx-674207f97b9c76d{grid-area:ack}.composition-grid.jsx-674207f97b9c76d .config{grid-area:options}.composition-grid.jsx-674207f97b9c76d .config>.jsx-674207f97b9c76d:not(:first-child){margin-left:64px}.composition-grid.jsx-674207f97b9c76d .preview-header.jsx-674207f97b9c76d{grid-area:options;-webkit-align-self:end;-ms-flex-item-align:end;align-self:end;text-transform:uppercase;letter-spacing:.5px;font-size:14px;font-weight:500;margin-left:8px}.composition-grid.jsx-674207f97b9c76d .preview{grid-area:preview;padding:32px;padding-right:0;min-height:100%;height:-webkit-fill-available}.composition-grid.jsx-674207f97b9c76d .preview-name.jsx-674207f97b9c76d{grid-area:preview-name;-webkit-align-self:end;-ms-flex-item-align:end;align-self:end;margin:0 0 16px}.composition-grid.jsx-674207f97b9c76d .preview-body.jsx-674207f97b9c76d{grid-area:preview-body;-webkit-align-self:start;-ms-flex-item-align:start;align-self:start;-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1;width:100%;margin-bottom:16px;overflow-y:auto}.composition-grid.jsx-674207f97b9c76d .options{grid-area:opts}.composition-grid.jsx-674207f97b9c76d .options .jsx-674207f97b9c76d:first-child{margin-left:64px!important}.composition-grid.jsx-674207f97b9c76d .send-options.jsx-674207f97b9c76d{grid-area:send}.composition-grid.jsx-674207f97b9c76d .explain{grid-area:explain}.composition-grid.jsx-674207f97b9c76d .explain .target-subtask-id.jsx-674207f97b9c76d{color:green}.composition-grid.jsx-674207f97b9c76d .explain .missing-subtask.jsx-674207f97b9c76d{color:red}label.jsx-674207f97b9c76d{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}input[type="checkbox"].jsx-674207f97b9c76d{margin-right:8px}',
              }),
            ],
          });
        }
        constructor(e) {
          super(e),
            (this.taskTypes = o().sortBy((0, f.Z)(j.Z), "value")),
            (this.taskerInputRef = c.createRef()),
            (this.setTaskType = (e) => {
              this.setState({ selectedTaskTypes: e });
            }),
            (this.setPlatform = (e) => {
              this.setState({ platform: e });
            });
          var t = this;
          (this.submit = _(function* () {
            var e, s, a, i;
            if (
              !window.confirm(
                "You're sure you composed the notification properly and used both proper english and proper markdown?"
              )
            )
              return;
            if (!t.state.name.length)
              return alert("Please set a name and try again");
            if (!(0, P.j)(t.state.platform, [t.state.name, t.state.body]))
              return;
            if (
              t.state.expirationTime &&
              t.state.expirationTime.getTime() <= new Date().getTime()
            )
              return (
                document.getElementsByClassName("content")[0].scrollTo(0, 0),
                void t.setState({ showDateError: !0 })
              );
            t.setState({ isSending: !0 });
            const l = o().map(t.state.selectedTaskTypes, "value"),
              n = o().map(t.state.selectedCustomers, "value");
            var r;
            r =
              null === (e = t.state.selectedProject) || void 0 === e
                ? void 0
                : e.value;
            var c;
            const d =
              null !==
                (c =
                  null === (s = t.state.selectedOutlierProject) || void 0 === s
                    ? void 0
                    : s.value) && void 0 !== c
                ? c
                : null;
            var h;
            const p =
                null !==
                  (h =
                    null === (a = t.state.selectedTeam) || void 0 === a
                      ? void 0
                      : a.value) && void 0 !== h
                  ? h
                  : null,
              x = t.state.taskerEmails,
              b = t.state.expirationTime
                ? t.state.expirationTime.getTime()
                : null,
              u = t.state.isLegalAcknowledgement
                ? v.AnnouncementDisplayType.LegalAcknowledgement
                : v.AnnouncementDisplayType.Standard;
            var f;
            const j =
                null !==
                  (f =
                    null === (i = t.state.platform) || void 0 === i
                      ? void 0
                      : i.value) && void 0 !== f
                  ? f
                  : null,
              g =
                t.state.projectList.length > 0 ? t.state.projectList : [d] || 0;
            yield m().map(
              g,
              (function () {
                var e = _(function* (e) {
                  const s = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var s = null != arguments[t] ? arguments[t] : {},
                        a = Object.keys(s);
                      "function" === typeof Object.getOwnPropertySymbols &&
                        (a = a.concat(
                          Object.getOwnPropertySymbols(s).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(
                              s,
                              e
                            ).enumerable;
                          })
                        )),
                        a.forEach(function (t) {
                          C(e, t, s[t]);
                        });
                    }
                    return e;
                  })(
                    {
                      taskTypes: l,
                      customers: n,
                      taskerEmails: x,
                      project: e,
                      workerTeam: p,
                      expirationTime: b,
                      displayType: u,
                      taskingPlatform: j,
                    },
                    o().pick(t.state, [
                      "isTesting",
                      "reviewersOnly",
                      "name",
                      "body",
                      "acknowledgementText",
                      "displayLocation",
                      "targetSubtaskId",
                    ])
                  );
                  d &&
                    (s.announcementType =
                      v.AnnouncementType.OutlierProjectAnnouncement);
                  try {
                    const { isTesting: e, scalers: a } = yield (0, k.ZP)(
                      null,
                      "corp-api/scalers/announcements/send",
                      { method: "POST", body: s }
                    );
                    t.setState({
                      lastSent: new Date(),
                      lastSentCount: a.length,
                      sentTest: e,
                      sentList: a,
                    }),
                      t.props.onSend && t.props.onSend(a);
                  } catch (a) {
                    (0, k.vj)(a, { handleHttp: !0 });
                  }
                });
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()
            ),
              t.setState({ isSending: !1 });
          })),
            (this.toggleTesting = (e) => {
              e.stopPropagation(), this.setState((0, x.Z)("isTesting"));
            }),
            (this.setName = (e) => {
              this.setState({ name: e.target.value });
            }),
            (this.setBody = (e) => {
              this.setState({ body: e.target.value });
            }),
            (this.setAcknowledgementText = (e) => {
              this.setState({ acknowledgementText: e.target.value });
            }),
            (this.setSubtaskId = (e) => {
              this.setState({ targetSubtaskId: e.target.value });
            }),
            (this.setDisplayLocation = (e) => {
              this.setState({ displayLocation: e });
            }),
            (this.setSelectedCustomers = (e) => {
              this.setState({ selectedCustomers: e });
            }),
            (this.setSelectedProject = (e) => {
              this.setState({ selectedProject: e });
            }),
            (this.setSelectedOutlierProject = (e) => {
              this.setState({ selectedOutlierProject: e });
            }),
            (this.setProjectList = ({ target: e }) => {
              this.setState({ projectList: (0, g.wq)(e.value) });
            }),
            (this.setSelectedTeam = (e) => {
              this.setState({ selectedTeam: e });
            }),
            (this.setReviewersOnly = () => {
              this.setState((0, x.Z)("reviewersOnly"));
            }),
            (this.searchCustomers = (function () {
              var e = _(function* (e) {
                try {
                  const { users: t } = yield (0, k.ZP)(
                    null,
                    "corp-api/find/customers",
                    { query: { search: e } }
                  );
                  return {
                    options: t.map((e) => ({ label: e.email, value: e.id })),
                  };
                } catch (t) {
                  (0, k.vj)(t, { handleHttp: !0 });
                }
                return [];
              });
              return function (t) {
                return e.apply(this, arguments);
              };
            })()),
            (this.handleClickTabs = (e, t) => {
              t === a.Remotasks
                ? this.setState({
                    activeTab: a.Remotasks,
                    selectedOutlierProject: null,
                    platform: void 0,
                  })
                : t === a.OutlierProject &&
                  this.setState({
                    activeTab: a.OutlierProject,
                    selectedProject: null,
                    platform: P.Z.find(
                      (e) => e.value === v.TaskingPlatform.Outlier
                    ),
                  });
            }),
            (this.filterPassedTime = (e) => {
              const t = new Date(),
                s = new Date(e);
              return t.getTime() < s.getTime();
            }),
            (this.setTaskerEmails = ({ target: e }) => {
              const t = (0, g.B)(e.value);
              this.setState({ taskerEmails: t });
            }),
            (this.setIsLegalAcknowledgement = () => {
              this.setState((0, x.Z)("isLegalAcknowledgement")),
                this.setState({
                  defaultAcknowledgementText: this.state.isLegalAcknowledgement
                    ? "I have read the above"
                    : "I agree to the new Terms of Use and Community Guidelines",
                });
            });
          const s = window.location.search,
            i = new URLSearchParams(s),
            l = i.get("recipients"),
            n = i.get("teamId"),
            r = i.get("teamName");
          this.state = {
            displayLocation: v.AnnouncementDisplayLocation.Dashboard,
            selectedTaskTypes: [],
            selectedCustomers: [],
            projectList: [],
            taskerEmails: l ? l.split(",") : [],
            reviewersOnly: !1,
            isLegalAcknowledgement: !1,
            defaultAcknowledgementText: "I have read the above",
            name: "",
            body: "",
            acknowledgementText: "",
            isSending: !1,
            isTesting: !1,
            selectedProject: null,
            selectedOutlierProject:
              this.props.onlyOutlierMode && this.props.outlierProjectId
                ? {
                    label: `${this.props.outlierProjectName} (${this.props.outlierProjectId})`,
                    value: this.props.outlierProjectId,
                  }
                : null,
            selectedTeam: n && r ? { label: r, value: n } : null,
            expirationTime: null,
            enableExpirationField: !1,
            showDateError: !1,
            activeTab: this.props.onlyOutlierMode
              ? a.OutlierProject
              : a.Remotasks,
            platform: this.props.onlyOutlierMode
              ? P.Z.find((e) => e.value === v.TaskingPlatform.Outlier)
              : void 0,
          };
        }
      }
      A.FILTER_STATE_KEYS = [
        "selectedTaskTypes",
        "selectedCustomers",
        "taskerEmails",
        "selectedProject",
        "projectList",
        "selectedOutlierProject",
        "selectedTeam",
      ];
      const L = ({ platform: e }) =>
        (0, i.jsxs)("div", {
          className: "jsx-7186b4a24be826c6 composition-tips",
          children: [
            "Reminders for composing announcements:",
            (0, i.jsxs)("ul", {
              className: "jsx-7186b4a24be826c6",
              children: [
                (0, i.jsxs)("li", {
                  className: "jsx-7186b4a24be826c6",
                  children: [
                    "Address our workers as either ",
                    (0, i.jsx)("strong", {
                      className: "jsx-7186b4a24be826c6",
                      children: e.taskers,
                    }),
                    " or",
                    " ",
                    (0, i.jsx)("strong", {
                      className: "jsx-7186b4a24be826c6",
                      children: "taskers",
                    }),
                    ".",
                  ],
                }),
                (0, i.jsxs)("li", {
                  className: "jsx-7186b4a24be826c6",
                  children: [
                    "Refer to yourself as ",
                    (0, i.jsxs)("strong", {
                      className: "jsx-7186b4a24be826c6",
                      children: [e.label, " Admin"],
                    }),
                    " or",
                    " ",
                    (0, i.jsxs)("strong", {
                      className: "jsx-7186b4a24be826c6",
                      children: ["Your ", e.label, " Team"],
                    }),
                    ".",
                  ],
                }),
                (0, i.jsx)("li", {
                  className: "jsx-7186b4a24be826c6",
                  children:
                    "DO NOT OVERUSE exclamation points or all caps!!!!!",
                }),
              ],
            }),
            (0, i.jsx)(n(), {
              id: "7186b4a24be826c6",
              children:
                ".composition-tips.jsx-7186b4a24be826c6{grid-area:tips;background:var(--bg-gray-light);-webkit-border-radius:var(--border-radius);-moz-border-radius:var(--border-radius);border-radius:var(--border-radius);padding:16px;font-weight:bold}.composition-tips.jsx-7186b4a24be826c6 strong.jsx-7186b4a24be826c6{opacity:.5}ul.jsx-7186b4a24be826c6,li.jsx-7186b4a24be826c6{line-height:1em}ul.jsx-7186b4a24be826c6{margin:0}li.jsx-7186b4a24be826c6{margin-top:16px}",
            }),
          ],
        });
      t.ZP = A;
    },
    559115: function (e, t, s) {
      s.d(t, {
        Z: function () {
          return l;
        },
        j: function () {
          return n;
        },
      });
      var a = s(997653),
        i = s(599789);
      const l = [
          {
            label: i.TaskingPlatform.Remotasks,
            value: i.TaskingPlatform.Remotasks,
            taskers: "Remotaskers",
            regex: /remotask/i,
          },
          {
            label: i.TaskingPlatform.Outlier,
            value: i.TaskingPlatform.Outlier,
            taskers: "Outliers",
            regex: /outlier/i,
          },
        ],
        n = (e, t) => {
          if (!e) return alert("Please select a platform and try again"), !1;
          const s = r(e, t);
          if (s) {
            if (
              !window.confirm(
                `HEY! Are you SURE you want to mention ${s} in your communication for ${e.label}?`
              )
            )
              return !1;
            (0, a.dO)(
              new Error("platform isolation violated on communication"),
              "communication-isolation",
              {
                texts: JSON.stringify(t),
                selectedPlatform: e,
                wrongPlatformReference: s,
              }
            );
          }
          return !0;
        },
        r = (e, t) => {
          let s;
          return (
            null === t ||
              void 0 === t ||
              t.forEach((t) => {
                l.forEach((a) => {
                  t && e.value !== a.value && a.regex.test(t) && (s = a.label);
                });
              }),
            s
          );
        };
    },
  },
]);
