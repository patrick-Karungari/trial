"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [84769],
  {
    280742: function (e, s, t) {
      var r = t(824246);
      s.Z = ({ text: e, width: s }) =>
        (0, r.jsx)("div", {
          className: "font-medium text-xs leading-5 whitespace-normal",
          style: { maxWidth: `${s}px` },
          children: e,
        });
    },
    84769: function (e, s, t) {
      t.d(s, {
        Z: function () {
          return B;
        },
      });
      var r = t(824246),
        i = t(827378),
        n = t(161320),
        o = t.n(n),
        a = t(298784),
        l = t.n(a),
        c = (t(916353), t(713222)),
        d = t(776845),
        m = t(691067),
        u = t(582246);
      const h = (e, s) =>
        `${2 * s * Math.PI * e}, ${2 * s * Math.PI * (1 - e)}`;
      function x(e) {
        const { requirements: s, config: t } = e,
          r = Object.keys(t.requirements),
          i = r.length,
          n = "number" === typeof t.amount ? [0] : t.amount,
          o = n.reduce((e, s) => e + s, 0),
          a = r.map((e, r) => {
            const a = t.requirements[e][u.Ry[e]],
              l = "number" === typeof a ? [a] : a,
              c = s[e],
              d = u.Ry[e],
              m = null === c || void 0 === c ? void 0 : c.parameters[d];
            let x,
              p = 0;
            "number" === typeof m &&
              m &&
              (m < 1 && e === u.BR.Time
                ? ((p = m), (x = "minutes"))
                : (p = Math.floor(m)));
            let g = 0,
              f = 0;
            const j = n.map((e, s) => {
                const t = l[s];
                let r;
                const i = p >= f,
                  o = p - f;
                if (t)
                  if ("string" === typeof t) {
                    f++, (r = t);
                    "object" === typeof m && t in m && m[t] && p++;
                  } else f += t;
                const a = p >= f;
                return (
                  a
                    ? (g += n[s])
                    : i &&
                      o &&
                      (g += (n[s] * o) / ("string" === typeof t ? 1 : t)),
                  {
                    aggregate: f,
                    filled: a,
                    course:
                      c && r && "courseDocuments" in c
                        ? c.courseDocuments[r]
                        : void 0,
                  }
                );
              }),
              y = Math.min(g, o),
              v = Math.min(y / o, 1),
              b = 35 / i,
              N = b - Math.min(b - 2, ((1 / i) * 23 * 1) / i),
              w = N / 2,
              k = 65 - (r + 1) * w - r * w * 1.6;
            return {
              type: e,
              strokeWidth: N,
              r: k,
              strokeDasharray: h(v, k),
              label: d,
              value: x ? p : Math.min(p, f),
              valueSuffix: x,
              goal: f,
              milestones: j,
            };
          });
        let l = 0;
        const c = n.map((e, s) => {
          l += e;
          let t = !0;
          const r = [];
          a.forEach(({ milestones: e, type: i }) => {
            const { filled: n, aggregate: o, course: a } = e[s];
            n || (t = !1), r.push({ type: i, aggregate: o, course: a });
          });
          const i =
            !t && (0 === s || a.every(({ milestones: e }) => e[s - 1].filled));
          return {
            aggregateAmount: l,
            amount: e,
            isNext: i,
            filled: t,
            requirements: r,
          };
        });
        return { rings: a, milestones: c };
      }
      const p = (e, s, t) => {
          const r = 1 === e ? "day" : "days",
            i = 1 === s ? "hour" : "hours";
          return e > 0 || s > 0
            ? `${e} ${r} ${s} ${i}`
            : `${s} ${i} ${t} ${1 === t ? "minute" : "minutes"}`;
        },
        g = {
          hours: "hr",
          tasks: "tasks",
          attempts: "attempts",
          reviews: "reviews",
          courses: "courses",
          webinarSessions: "webinar sessions",
        };
      var f = t(551216),
        j = t(720227);
      const y = ({ milestone: e }) => {
        const { requirements: s, isNext: t, aggregateAmount: i, filled: n } = e;
        var o, a;
        return (0, r.jsxs)("div", {
          className: t ? "bg-gradient-to-l rounded-md" : "",
          children: [
            (0, r.jsxs)("div", {
              className: "flex items-center justify-between",
              children: [
                (0, r.jsx)("strong", {
                  children:
                    ((a = i),
                    (a / 100).toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })),
                }),
                n
                  ? (0, r.jsx)(c.J, {
                      icon: "check-circle",
                      variant: "success",
                    })
                  : t
                  ? (0, r.jsx)(c.J, {
                      icon: ["far", "check-circle"],
                      className: "opacity-30",
                    })
                  : (0, r.jsx)(c.J, { icon: "lock" }),
              ],
            }),
            (0, r.jsx)("div", {
              className: "p-2 pt-0",
              children: s
                .filter((e) => e.aggregate)
                .map(({ aggregate: e, type: s, course: i }) =>
                  (0, r.jsx)(
                    "p",
                    {
                      className: (0, j.m)(
                        n || t ? "" : "text-neutral-500",
                        "leading-6"
                      ),
                      children:
                        s === u.BR.Course && i
                          ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                (0, r.jsx)("strong", {
                                  children: "Complete Course: ",
                                }),
                                (0, r.jsx)("a", {
                                  className: "text-info-900",
                                  href: `/course?id=${i._id}`,
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  children: l().startCase(
                                    null !== (o = i.title) && void 0 !== o
                                      ? o
                                      : i.name
                                  ),
                                }),
                              ],
                            })
                          : (0, r.jsxs)("span", {
                              children: ["Complete ", e, " ", u.Ry[s]],
                            }),
                    },
                    s
                  )
                ),
            }),
          ],
        });
      };
      var v = ({ milestones: e, className: s }) => {
          const {
            completed: t,
            next: n,
            locked: o,
          } = (0, i.useMemo)(() => {
            const s = e.findLastIndex((e) => e.filled) + 1;
            return {
              completed: e && s > 0 ? e.slice(0, s) : [],
              next: e && s >= 0 ? e[s] : void 0,
              locked: e && s >= 0 && s < e.length ? e.slice(s + 1) : [],
            };
          }, [e]);
          return (0, r.jsxs)("div", {
            className: (0, j.m)("overflow-y-scroll", s),
            children: [
              t.length > 0 &&
                (0, r.jsx)(f.U, {
                  header: `Completed (${t.length})`,
                  className: "rounded-none bg-success-50",
                  children: t.map((e, s) => (0, r.jsx)(y, { milestone: e }, s)),
                }),
              n &&
                (0, r.jsx)("div", {
                  className: "px-4",
                  children: (0, r.jsx)(y, { milestone: n }),
                }),
              o.length > 0 &&
                (0, r.jsx)(f.U, {
                  header: `Upcoming (${o.length})`,
                  className: "rounded-none bg-neutral-100",
                  children: o.map((e, s) => (0, r.jsx)(y, { milestone: e }, s)),
                }),
            ],
          });
        },
        b = t(686677),
        N = t(554211),
        w = t(792739);
      var k = ({ mission: e, open: s, setOpen: t }) => {
          const {
              amount: n,
              startAt: a,
              endsAt: l,
              missionDurationHours: h,
              missionConfigType: p,
              projectId: g,
              projectName: f,
            } = e.config,
            j = (0, b.useRouter)(),
            y = (0, i.useMemo)(
              () => (o()(a).isAfter(e.createdAt) ? a : e.createdAt),
              [e.createdAt, a]
            ),
            k = (0, i.useMemo)(() => {
              const e = h ? o()(y).add(h, "hour") : void 0;
              return e ? o().min(o()(l), e).toISOString() : l;
            }, [y, h, l]),
            { rings: S, milestones: $ } = (0, i.useMemo)(() => x(e), [e]),
            M = (null === n || void 0 === n ? void 0 : n.length) > 1,
            C = (n[0] / 100).toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            }),
            R = "number" === typeof n ? n : n.reduce((e, s) => e + s, 0),
            A = {
              hour12: !0,
              timeZoneName: "short",
              year: "numeric",
              month: "short",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
            },
            E = (0, r.jsxs)("div", {
              children: [
                (0, r.jsx)("strong", { children: "Tasks:" }),
                " qualifying tasks include attempts or reviews submitted on Outlier (not including time spent on any third-party platforms).",
              ],
            }),
            T = {
              [u.BR.Time]: (0, r.jsxs)("div", {
                children: [
                  (0, r.jsx)("strong", { children: "Hours:" }),
                  " qualifying mission hours include hours working on submitted tasks in Outlier (not including time spent on courses or webinars) as well as any hours working off-platform as tracked in Hubstaff or Data Compute.",
                ],
              }),
              [u.BR.Task]: E,
              [u.BR.Attempt]: E,
              [u.BR.Review]: E,
              [u.BR.Course]: (0, r.jsxs)("div", {
                children: [
                  (0, r.jsx)("strong", { children: "Course:" }),
                  " qualifying course work in the form of completed assigned courses.",
                ],
              }),
              [u.BR.WebinarSession]: (0, r.jsxs)("div", {
                children: [
                  (0, r.jsx)("strong", { children: "Webinar:" }),
                  " qualifying webinar attendance in the form of assigned informational Zoom sessions.",
                ],
              }),
            },
            D = S.map(({ type: e }) => T[e]),
            B = (e) => new Date(e).toLocaleString("en-US", A),
            I = (0, N.ZP)("missions-modal-flag", {}, !1),
            O = [
              {
                icon: "play",
                title: "How do I opt in to this mission?",
                description: (0, r.jsx)("span", {
                  children:
                    "Any work you do that meets the mission requirements will automatically apply to the mission. There is no further action you need to take in order to activate or opt in to the mission.",
                }),
              },
              {
                icon: "badge-check",
                title: "What work meets this mission's requirements?",
                description: (0, r.jsx)("div", {
                  className: "space-y-2",
                  children: D,
                }),
              },
              {
                icon: "ban",
                title:
                  "What if I don't have enough work available to complete this mission?",
                description: (0, r.jsx)("span", {
                  children:
                    "We have attempted to ensure that you receive a mission only if there is sufficient work available to achieve the mission within the allotted time. However, please understand that work availability for all missions may change and is subject to customer demand.",
                }),
              },
              {
                icon: "clock",
                title: "Why is my progress not updating?",
                description: (0, r.jsx)("span", {
                  children:
                    "Progress on hours-based missions (including Hubstaff and Data Compute hours) may take up to 48 hours to update.",
                }),
              },
            ];
          return (0, r.jsx)(m.u, {
            open: s,
            onClose: () => {
              (j.query.id = []), t(!1);
            },
            title: e.config.name,
            children: (0, r.jsxs)("div", {
              className: "scale-tailwind -m-4 w-[640px]",
              children: [
                (0, r.jsx)("div", {
                  className:
                    "w-full bg-cover bg-center bg-no-repeat flex flex-col justify-center",
                  style: {
                    backgroundImage:
                      "url(/static/img/outlier/img/background.png)",
                  },
                  children: I
                    ? (0, r.jsx)("div", {
                        className: "flex justify-center items-center mt-4 mb-4",
                        children: (0, r.jsx)("img", {
                          src: "/static/img/outlier/img/mountain.png",
                          alt: "Mountain",
                        }),
                      })
                    : (0, r.jsx)("div", {
                        className:
                          "m-4 bg-utility-white shadow rounded-lg overflow-hidden",
                        children: (0, r.jsx)(v, { milestones: $ }),
                      }),
                }),
                (0, r.jsxs)("div", {
                  className: "p-4",
                  children: [
                    (0, r.jsxs)("div", {
                      className: "flex items-center text-xs font-medium mb-2",
                      children: [
                        (0, r.jsx)(c.J, {
                          icon: ["far", "calendar"],
                          size: "sm",
                          variant: "white",
                          hasBackground: !0,
                          className: "rounded-full mr-2",
                        }),
                        " ",
                        "Start Date: ",
                        B(y),
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      className: "flex items-center text-xs font-medium mb-2",
                      children: [
                        (0, r.jsx)(c.J, {
                          icon: ["far", "clock"],
                          size: "sm",
                          variant: "white",
                          hasBackground: !0,
                          className: "rounded-full mr-2",
                        }),
                        " ",
                        "End Date: ",
                        B(k),
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      className: "flex items-center text-xs font-medium",
                      children: [
                        (0, r.jsx)(c.J, {
                          icon: ["far", "coins"],
                          size: "sm",
                          variant: "white",
                          hasBackground: !0,
                          className: "rounded-full mr-2",
                        }),
                        " ",
                        "Reward:",
                        " ",
                        (M ? C + " - " : "") +
                          (R / 100).toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                          }),
                      ],
                    }),
                    I &&
                      p === u.G6.ProjectBased &&
                      g &&
                      f &&
                      (0, r.jsx)("div", {
                        className:
                          "flex items-top justify-left text-xs font-medium mt-4 border-t-[1px] border-neutral-200 pt-4 ",
                        children: (0, r.jsx)("div", {
                          className: "flex items-center justify-end",
                          children: (0, r.jsxs)("div", {
                            className:
                              "w-full p-4 shadow-sm backdrop-blur-lg bg-[#FFF7DE] rounded-lg flex-col justify-center items-start gap-2 inline-flex",
                            children: [
                              (0, r.jsxs)("div", {
                                className: "flex items-center gap-2",
                                children: [
                                  (0, r.jsx)(w.G, {
                                    className: "text-[#665625]",
                                    icon: "folder",
                                  }),
                                  (0, r.jsx)(d.ZT.Subtitle4, {
                                    className: "text-[#665625]",
                                    children: "Project-based-mission:",
                                  }),
                                ],
                              }),
                              (0, r.jsxs)(d.ZT.Caption, {
                                className: "text-[#665625]",
                                children: [
                                  "This mission is specific to ",
                                  f,
                                  " (",
                                  g,
                                  ") and cannot be transferred to another project. If you are unable to complete the mission due to reasons outside your control (e.g. due to project reassignment or lengthy EQ) you will be paid out for any completed or started milestones at time of mission expiration.",
                                ],
                              }),
                            ],
                          }),
                        }),
                      }),
                    I &&
                      (0, r.jsx)("div", {
                        className: "mb-2",
                        children: O.map((e, s) =>
                          (0, r.jsxs)(
                            "div",
                            {
                              className:
                                "flex items-top justify-left text-xs font-medium mt-4 border-t-[1px] border-neutral-200 pt-4 ",
                              children: [
                                (0, r.jsx)(c.J, {
                                  icon: ["far", e.icon],
                                  size: "sm",
                                  variant: "white",
                                  hasBackground: !0,
                                  className: "rounded-full mr-4",
                                }),
                                (0, r.jsxs)("div", {
                                  className: "flex-col",
                                  children: [
                                    (0, r.jsx)(d.ZT.Subtitle3, {
                                      color: "#374151",
                                      className: "font-medium text-sm",
                                      children: e.title,
                                    }),
                                    (0, r.jsx)(d.ZT.Paragraph3, {
                                      color: "#374151",
                                      className: "pt-2 text-xs font-normal",
                                      children: e.description,
                                    }),
                                  ],
                                }),
                              ],
                            },
                            s
                          )
                        ),
                      }),
                  ],
                }),
                !I &&
                  (0, r.jsx)("div", {
                    className:
                      "text-[11px] p-5 border-t-[1px] border-neutral-200 leading-4",
                    children: S.filter(({ type: e }) => u.NS[e]).map(
                      ({ type: e }, s) =>
                        (0, r.jsx)(
                          "div",
                          {
                            className: "flex items-center mb-2",
                            children: (0, r.jsxs)("div", {
                              children: [
                                (0, r.jsxs)("strong", {
                                  className: "capitalize",
                                  children: [u.Ry[e], ":"],
                                }),
                                " ",
                                u.NS[e],
                              ],
                            }),
                          },
                          s
                        )
                    ),
                  }),
              ],
            }),
          });
        },
        S = t(542280);
      function $(e, s, t) {
        return (
          s in e
            ? Object.defineProperty(e, s, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[s] = t),
          e
        );
      }
      function M(e) {
        for (var s = 1; s < arguments.length; s++) {
          var t = null != arguments[s] ? arguments[s] : {},
            r = Object.keys(t);
          "function" === typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(t).filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })
            )),
            r.forEach(function (s) {
              $(e, s, t[s]);
            });
        }
        return e;
      }
      const C = ({
          requirements: e,
          isNext: s,
          aggregateAmount: t,
          filled: i,
          select: n,
          goal: o,
          strokeWidth: a,
        }) => {
          const l = E(),
            d = (t / o) * 360,
            m = e
              .map(
                ({ type: e }) => `${u.oj[e].stopColor1}, ${u.oj[e].stopColor2}`
              )
              .join(", ");
          return (0, r.jsx)("div", {
            style: { transform: `translate(-50%, -100%) rotate(${d}deg)` },
            children: s
              ? (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)("div", {
                      style: {
                        transform: `translate(-30%, -${
                          155 - 0.5 * Math.abs(d - (d > 180 ? 270 : 90))
                        }%) rotate(-${d}deg)`,
                      },
                      className:
                        "p-0.5 px-1 text-center bg-neutral-200 text-neutral-800 rounded-sm text-[9px] absolute",
                      children: e
                        .filter((e) => e.aggregate)
                        .map(({ aggregate: e, type: s }) =>
                          (0, r.jsxs)(
                            "p",
                            {
                              className: "whitespace-nowrap",
                              style: { lineHeight: 1.5 },
                              children: [e, " ", g[u.Ry[s]]],
                            },
                            s
                          )
                        ),
                    }),
                    (0, r.jsx)("div", {
                      onMouseEnter: () => n(!0),
                      onMouseLeave: () => n(!1),
                      style: {
                        transform: "translate(-3%, -3%)",
                        backgroundImage: `linear-gradient(${m})`,
                        height: a,
                      },
                      className: l.nextMilestone,
                      children: (0, r.jsx)("div", {
                        style: { transform: `rotate(-${d}deg)` },
                        children: (0, r.jsx)(c.J, {
                          icon: "dollar-sign",
                          variant: "white",
                          size: "sm",
                        }),
                      }),
                    }),
                  ],
                })
              : (0, r.jsx)("div", {
                  style: {
                    backgroundImage: `linear-gradient(${m})`,
                    height: a,
                  },
                  className: i ? l.filledGap : l.gap,
                  onMouseEnter: () => n(!0),
                  onMouseLeave: () => n(!1),
                }),
          });
        },
        R = (e) =>
          (e / 100).toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          }),
        A = ({
          aggregateAmount: e,
          goal: s,
          filled: t,
          amount: i,
          requirements: n,
        }) => {
          const o = e / s,
            a = 360 * o;
          return o
            ? (0, r.jsx)("div", {
                style: {
                  height: 6,
                  transform: `translate(-50%, -100%) rotate(${a}deg)`,
                },
                children: (0, r.jsxs)("div", {
                  style: {
                    color: "white",
                    padding: 2,
                    borderRadius: 10,
                    display: "block",
                    position: "absolute",
                    width: "140px",
                    transformOrigin: "top left",
                    top: "-54.5px",
                    transform: `rotate(-${a}deg) translate(8px, 8px)`,
                  },
                  className: "bg-neutral-800",
                  children: [
                    (0, r.jsxs)("div", {
                      className: "flex items-center justify-between pl-2",
                      children: [
                        (0, r.jsx)("strong", { children: R(e) }),
                        t
                          ? (0, r.jsx)(c.J, {
                              icon: "check-circle",
                              variant: "success",
                            })
                          : (0, r.jsx)(c.J, {
                              icon: ["far", "check-circle"],
                              variant: "white",
                              className: "opacity-30",
                            }),
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      className: "px-2",
                      children: [
                        (0, r.jsx)("p", {
                          style: {
                            fontSize: ".7rem",
                            lineHeight: 0.5,
                            marginBottom: "1rem",
                          },
                          children: `(+${R(i)})`,
                        }),
                        n
                          .filter((e) => e.aggregate)
                          .map(({ aggregate: e, type: s }) =>
                            (0, r.jsxs)(
                              "p",
                              {
                                className: "flex justify-between mb-2",
                                style: { lineHeight: 1 },
                                children: [
                                  (0, r.jsx)("span", {
                                    children: l().capitalize(u.Ry[s]),
                                  }),
                                  (0, r.jsx)("strong", { children: e }),
                                ],
                              },
                              s
                            )
                          ),
                      ],
                    }),
                  ],
                }),
              })
            : null;
        },
        E = (0, S.ZL)({
          milestones: {
            "& > div": {
              height: 69.5,
              position: "absolute",
              left: "50%",
              top: "50%",
              transformOrigin: "bottom center",
              color: "red",
            },
          },
          gap: {
            width: 6,
            opacity: 0.6,
            background: "white",
            position: "relative",
            borderRadius: 20,
            "&:hover": {
              background: "white",
              opacity: 0.4,
              cursor: "pointer",
              top: 0,
            },
          },
          filledGap: {
            width: 6,
            background: "purple",
            opacity: 0.3,
            borderRadius: 20,
            position: "relative",
            "&:hover": { opacity: 0.7, cursor: "pointer" },
          },
          nextMilestone: {
            backgroundImage:
              "linear-gradient(to bottom right, #BE80BF, #8FA4BF)",
            borderRadius: "20px",
            border: "2px solid white",
            width: 22,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            "&:hover": { cursor: "pointer" },
          },
        });
      var T = ({ rings: e, milestones: s }) => {
        const t = E(),
          { 0: n, 1: o } = (0, i.useState)(),
          a = e.length,
          l = (0, i.useMemo)(() => s[s.length - 1].aggregateAmount, [s]),
          m = e.reduce((e, { r: s }) => e + s, 0) / a,
          h = (0, i.useMemo)(
            () => e.reduce((e, { strokeWidth: s }) => e + s, 0) / a,
            [e, a]
          ),
          x = (0, i.useMemo)(
            () => h + 18 * (a - 1) * Math.pow(0.9, a) + 10,
            [h, a]
          );
        return (0, r.jsxs)("div", {
          className: "flex-1 px-4",
          children: [
            (0, r.jsxs)("div", {
              className: `flex justify-center flex-col items-center relative my-5 ${t.milestones}`,
              children: [
                s.length > 1 &&
                  s.map((e, s) =>
                    (0, r.jsx)(
                      C,
                      M({}, e, {
                        goal: l,
                        strokeWidth: x,
                        select: (e) => o(e ? s : void 0),
                      }),
                      `${e}-${s}`
                    )
                  ),
                !!s &&
                  (n || 0 === n) &&
                  (0, r.jsx)(A, M({}, s[n], { goal: l, index: n })),
                (0, r.jsxs)("svg", {
                  width: 150,
                  height: 150,
                  children: [
                    (0, r.jsx)("circle", {
                      cx: 75,
                      cy: 75,
                      style: { stroke: "#EEEEEE", opacity: 0.4 },
                      r: m,
                      strokeWidth: x,
                      fill: "none",
                    }),
                    e.map(
                      (
                        {
                          type: e,
                          strokeWidth: s,
                          r: t,
                          strokeDasharray: n,
                          milestones: o,
                        },
                        a
                      ) => {
                        const l = e + "-" + a;
                        return (0, r.jsxs)(
                          i.Fragment,
                          {
                            children: [
                              (0, r.jsx)("defs", {
                                children: (0, r.jsxs)("linearGradient", {
                                  id: l,
                                  children: [
                                    (0, r.jsx)("stop", {
                                      offset: "0%",
                                      stopColor: u.oj[e].stopColor1,
                                    }),
                                    (0, r.jsx)("stop", {
                                      offset: "50%",
                                      stopColor: u.oj[e].stopColor2,
                                    }),
                                    (0, r.jsx)("stop", {
                                      offset: "100%",
                                      stopColor: u.oj[e].stopColor3,
                                    }),
                                  ],
                                }),
                              }),
                              (0, r.jsx)("circle", {
                                cx: 75,
                                cy: 75,
                                r: t,
                                strokeWidth: s,
                                fill: "none",
                                style: {
                                  stroke: `url(#${l})`,
                                  transform: "rotate(-90deg)",
                                  transformOrigin: "50%",
                                },
                                strokeDasharray: n,
                                strokeLinecap: o.length > 1 ? "butt" : "round",
                              }),
                              (0, r.jsx)("circle", {
                                cx: 75,
                                cy: 75,
                                style: { stroke: `url(#${l})`, opacity: 0.2 },
                                r: t,
                                strokeWidth: s,
                                fill: "none",
                              }),
                            ],
                          },
                          l
                        );
                      }
                    ),
                  ],
                }),
              ],
            }),
            (0, r.jsx)("div", {
              className: "flex flex-wrap my-3 gap-1",
              children: e.map(
                ({ label: e, value: s, valueSuffix: t, goal: i, type: n }) =>
                  (0, r.jsxs)(
                    "div",
                    {
                      className: "flex items-center ml-2",
                      children: [
                        (0, r.jsx)("div", {
                          className: "w-3 h-3 rounded mr-2",
                          style: {
                            backgroundImage: `linear-gradient(to bottom right, ${u.oj[n].stopColor1}, ${u.oj[n].stopColor2})`,
                          },
                        }),
                        (0, r.jsxs)("div", {
                          children: [
                            t ? `${Math.floor(60 * s)} ${t}` : s,
                            " of ",
                            i,
                            " ",
                            e,
                          ],
                        }),
                        e === u.hN.Hours &&
                          (0, r.jsx)("div", {
                            className: "ml-1",
                            children: (0, r.jsx)(c.J, {
                              icon: ["fas", "info-circle"],
                              size: "sm",
                              variant: "secondary",
                              tooltip: (0, r.jsx)("div", {
                                className: "w-[260px]",
                                children: (0, r.jsx)(d.ZT.Paragraph3, {
                                  className: "text-gray-50",
                                  children: u.NS[u.BR.Time],
                                }),
                              }),
                            }),
                          }),
                      ],
                    },
                    e
                  )
              ),
            }),
          ],
        });
      };
      t(280742);
      const D = (e) =>
        (e / 100).toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        });
      var B = ({ mission: e }) => {
        const s = (0, N.ZP)("missions-modal-flag", {}, !1),
          t = (0, b.useRouter)(),
          { status: n, createdAt: a, config: m } = e,
          {
            name: h,
            startAt: g,
            endsAt: f,
            amount: y,
            missionConfigType: v,
            missionDurationHours: w,
            projectId: S,
            projectName: $,
          } = m,
          { 0: M, 1: C } = (0, i.useState)(
            () => (t.query.id ? t.query.id[0] : void 0) === e._id
          ),
          R = "number" === typeof y ? y : y.reduce((e, s) => e + s, 0),
          A = (y.length > 1 ? "Up to " : "") + D(R),
          { rings: E, milestones: B } = (0, i.useMemo)(() => x(e), [e]),
          I = (0, i.useMemo)(() => {
            const e = B.findLast((e) => e.filled);
            return e ? e.aggregateAmount : 0;
          }, [B]),
          O = (0, i.useMemo)(() => (o()(g).isAfter(a) ? g : a), [a, g]),
          P = (0, i.useMemo)(() => {
            const e = w ? o()(O).add(w, "hour") : void 0;
            return e ? o().min(o()(f), e).toISOString() : f;
          }, [O, w, f]),
          {
            0: q,
            1: U,
            2: W,
            3: L,
          } = (0, i.useMemo)(
            () => [
              u.tT[n].icon,
              u.tT[n].background,
              u.tT[n].iconColor,
              u.tT[n].variant,
            ],
            [n]
          ),
          J = o()(P).diff(o()(), "hours"),
          Z = Math.floor(J / 24),
          z = J - 24 * Z,
          F = o()(P).diff(o()(), "minutes") - 60 * z - 24 * Z * 60,
          H = o()(O).diff(o()(), "hours"),
          _ = Math.floor(H / 24),
          G = H - 24 * _,
          V = o()(O).diff(o()(), "minutes") - 60 * H - 24 * _ * 60;
        return (0, r.jsxs)("div", {
          className:
            "bg-neutral-0 flex flex-col gap-2 shadow-lg border-[1px] border-neutral-100 rounded-lg",
          style: { maxWidth: "350px" },
          children: [
            (0, r.jsx)(k, { open: M, setOpen: C, mission: e }),
            (0, r.jsx)("p", {
              className: "px-4 font-medium pt-4",
              children: h,
            }),
            (0, r.jsxs)("div", {
              className: "flex pt-1 text-xs font-medium px-4",
              children: [
                (0, r.jsxs)("div", {
                  className: (0, j.m)(
                    "flex items-center  rounded-2xl px-2",
                    U,
                    W
                  ),
                  children: [
                    (0, r.jsx)(c.J, {
                      icon: ["far", q],
                      variant: L,
                      size: "sm",
                      className: "w-4",
                    }),
                    " ",
                    (0, r.jsxs)("div", {
                      className: "pl-1",
                      children: [
                        n === u.rs.ACTIVE
                          ? (0, r.jsxs)("div", {
                              children: [p(Z, z, F), " left"],
                            })
                          : n === u.rs.UPCOMING
                          ? (0, r.jsxs)("div", {
                              children: ["in ", p(_, G, V)],
                            })
                          : n === u.rs.PARTIALLY_EARNED
                          ? "Earned"
                          : l().capitalize(n),
                        " ",
                        I ? D(I) : "",
                      ],
                    }),
                  ],
                }),
                I !== R &&
                  (0, r.jsxs)("div", {
                    className:
                      "bg-success-50 flex items-center rounded-2xl text-success-600 ml-3 px-2",
                    children: [A, " Reward"],
                  }),
              ],
            }),
            (0, r.jsx)(T, { rings: E, milestones: B }),
            s &&
              v === u.G6.ProjectBased &&
              $ &&
              S &&
              (0, r.jsx)("div", {
                className:
                  "flex w-100 m-4 mt-0 p-1 justify-center bg-[#E1F5FE]",
                children: (0, r.jsx)(d.ZT.Paragraph3, {
                  className: "text-[#01579B] text-xs",
                  children: `This mission is specific to ${$} (${S}) and cannot be transferred to another project.`,
                }),
              }),
            (0, r.jsx)(c.J, {
              className: "w-100 m-3 mt-0",
              variant: "info",
              onClick: () => C(!0),
              children: "View Details",
            }),
          ],
        });
      };
    },
  },
]);
