(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [84819, 29872],
  {
    277488: function (e, t, n) {
      "use strict";
      n.d(t, {
        A: function () {
          return r;
        },
      });
      var o = n(824246);
      const r = ({ explanation: e, iconSrc: t, updatedStyling: n }) =>
        (0, o.jsxs)("div", {
          className:
            "flex flex-col w-full border border-neutral-200 rounded-lg " +
            (n ? "items-center justify-center" : ""),
          children: [
            (0, o.jsx)("div", {
              className:
                "flex items-center justify-center p-[4rem] " +
                (n
                  ? ""
                  : "bg-utility-offWhite rounded-t-lg border-b border-neutral-200"),
              children: (0, o.jsx)("img", { className: "h-[160px]", src: t }),
            }),
            (0, o.jsx)("div", {
              className: "" + (n ? "px-6 pb-6" : "p-6"),
              children: e,
            }),
          ],
        });
    },
    364984: function (e, t, n) {
      "use strict";
      n.d(t, {
        S: function () {
          return A;
        },
      });
      var o = n(824246),
        r = n(719031),
        i = n(277488),
        a = n(827378),
        s = n(416534),
        u = n(691067),
        c = n(713222),
        l = n(339389),
        d = n(792739),
        f = n(61714),
        p = n(338415),
        C = n(527565);
      var m = n(138944),
        y = n(75254);
      const h = 10 ** 6,
        _ = ({ open: e, onClose: t }) => {
          const [n, r] = (0, a.useState)(""),
            [i, _] = (0, a.useState)([]),
            b = (0, a.useRef)(null),
            { mutate: v, isLoading: O } = (() => {
              const e = (0, f.NL)();
              return (0, p.D)({
                mutationFn: async (e) => {
                  const t = new FormData();
                  e.files.forEach((e) => {
                    t.append("file", e);
                  }),
                    t.append("reason", e.reason),
                    await (0, C.ZP)(
                      "internal/violations-review/create_idv_review",
                      { method: "POST", body: t }
                    );
                },
                onSuccess: async () => {
                  await e.invalidateQueries({
                    queryKey: ["can-submit-review"],
                  }),
                    await e.invalidateQueries({ queryKey: ["review-status"] });
                },
              });
            })(),
            E = (0, a.useMemo)(
              () =>
                i.reduce((e, t) => e + t.size, 0) > y.vY
                  ? "Files must not exceed 10MB."
                  : "",
              [i]
            ),
            I = (e) =>
              e.size > h
                ? `${(e.size / h).toFixed(2)} MB`
                : `${(e.size / 1e3).toFixed(2)} KB`,
            g = !!(n.length < 30 || O || E);
          return (0, o.jsx)(u.u, {
            className: "scaleui scale-tailwind outlier-theme",
            innerClassName: "max-w-[580px]",
            onClose: t,
            open: e || O,
            hideTitle: !0,
            children: (0, o.jsxs)("div", {
              className: "flex flex-col items-center p-4",
              children: [
                (0, o.jsx)(c.J, {
                  rounded: !0,
                  icon: ["far", "times"],
                  onClick: t,
                  className:
                    "ml-auto hover:bg-misc-periwinkle5 focus:bg-misc-periwinkle5",
                }),
                (0, o.jsx)("div", {
                  className: "font-medium text-xl mb-2",
                  children: "File an appeal",
                }),
                (0, o.jsx)("div", {
                  className: "text-neutral-500 mb-4 text-center",
                  children:
                    "Please detail why you believe the verification result is incorrect. Your appeal will be reviewed within two business days.",
                }),
                (0, o.jsx)(l.K, {
                  className: "w-full mb-4",
                  placeholder: "Reason",
                  value: n,
                  onChange: (e) => r(e.target.value),
                }),
                (0, o.jsxs)("div", {
                  className: "items-start w-full",
                  children: [
                    (0, o.jsxs)("div", {
                      className:
                        "flex items-center " + (i.length ? "mb-2" : "mb-8"),
                      children: [
                        (0, o.jsxs)(s.zx, {
                          className:
                            "pr-2 bg-white border-[1px] border-neutral-300 text-neutral-800 hover:bg-neutral-50",
                          onClick: () => {
                            b.current && b.current.click();
                          },
                          children: [
                            (0, o.jsx)(c.J, {
                              rounded: !0,
                              icon: ["far", "upload"],
                              className: "text-neutral-200",
                            }),
                            (0, o.jsx)("div", {
                              className: "text-xs pr-2",
                              children: "Upload Files",
                            }),
                          ],
                        }),
                        (0, o.jsx)("div", {
                          className: "text-[10px] text-neutral-500 pl-2",
                          children: `Supported file types: .png, .jpg, .pdf (Up to ${y.kS} files, 10MB total)`,
                        }),
                      ],
                    }),
                    i.map((e, t) =>
                      (0, o.jsxs)(
                        "div",
                        {
                          className: "text-[12px] flex items-center h-5",
                          children: [
                            e.name,
                            " (",
                            I(e),
                            ")",
                            (0, o.jsx)(c.J, {
                              rounded: !0,
                              icon: ["far", "trash"],
                              onClick: () =>
                                ((e) => {
                                  const t = new DataTransfer();
                                  for (let o = 0; o < i.length; o++) {
                                    const n = i[o];
                                    e !== o && t.items.add(n);
                                  }
                                  const n = t.files;
                                  b.current &&
                                    (n.length
                                      ? (b.current.files = n)
                                      : (b.current.value = ""),
                                    _(Array.from(n)));
                                })(t),
                              iconClassName: "text-[12px] leading-1",
                            }),
                          ],
                        },
                        e.name
                      )
                    ),
                    E &&
                      (0, o.jsxs)("div", {
                        className:
                          "text-[12px] flex items-center text-danger-500 mt-2",
                        children: [
                          (0, o.jsx)(d.G, {
                            className: "p-0 mr-2 rounded-full bg-danger-50",
                            icon: "circle-exclamation",
                          }),
                          E,
                        ],
                      }),
                    (0, o.jsx)("input", {
                      style: { display: "none" },
                      id: "appeal-file-upload",
                      ref: b,
                      type: "file",
                      accept:
                        "application/pdf, image/png, image/jpg, image/jpeg",
                      onChange: (e) =>
                        ((e) => {
                          const t = e.target.files;
                          if (t) {
                            const e = [];
                            for (let n = 0; n < y.kS; n++)
                              t.length > n && e.push(t[n]);
                            _(e);
                          }
                        })(e),
                      multiple: !0,
                    }),
                  ],
                }),
                (0, o.jsx)(s.zx, {
                  className: (0, m.default)(
                    "text-utility-white bg-[#1B0030] hover:bg-[#1B0030] mt-8",
                    g
                      ? "bg-neutral-0 hover:bg-neutral-0 text-neutral-400 border-neutral-400 border-[1px] cursor-not-allowed"
                      : ""
                  ),
                  size: "lg",
                  onClick: () => {
                    v({ files: i, reason: n }), t();
                  },
                  disabled: g,
                  isLoading: O,
                  children: "Submit",
                }),
              ],
            }),
          });
        };
      var b = n(389401);
      var v = n(824385);
      const O = ({ userId: e, logEvent: t }) => {
          const [n, i] = (0, a.useState)(!1),
            {
              data: u,
              isLoading: c,
              isFetching: l,
            } = (0, b.a)(["can-submit-review"], async () =>
              (0, C.ZP)("/internal/violations-review/can_submit_idv_appeal")
            ),
            d =
              (0, r.B)("show-appeals-on-persona-failure", { userId: e }, !1)
                .data &&
              u &&
              !l &&
              !c;
          return (
            d && t && t(v.j.PostPersonaCommsViewEvent, { userId: e }),
            (0, o.jsxs)(o.Fragment, {
              children: [
                (0, o.jsxs)("div", {
                  className: "w-full text-neutral-500",
                  children: [
                    (0, o.jsxs)("div", {
                      className:
                        "text-base leading-4 " +
                        (d ? "border-b-[1px] pb-8 border-neutral-200" : ""),
                      children: [
                        (0, o.jsx)("p", {
                          children:
                            "You\u2019ve reached the maximum number of attempts to verify your identity. Unfortunately, this means you cannot proceed.",
                        }),
                        (0, o.jsx)("br", {}),
                        (0, o.jsx)("p", {
                          children:
                            "Common reasons why your verification may have been unsuccessful:",
                        }),
                        (0, o.jsxs)("ul", {
                          className: "list-disc ml-6",
                          children: [
                            (0, o.jsxs)("li", {
                              children: [
                                "The ID you submitted is from a different country than your current location.",
                                " ",
                                (0, o.jsx)("a", {
                                  href: "https://outlier.ai/legal/working-location-policy",
                                  children: (0, o.jsx)("u", {
                                    children: "Working Location Policy",
                                  }),
                                }),
                              ],
                            }),
                            (0, o.jsx)("li", {
                              children:
                                "You submitted a temporary ID (eg. temporary residence ID) or a non-government issued ID (eg. student ID).",
                            }),
                            (0, o.jsx)("li", {
                              children:
                                "You submitted an electronic version of your ID instead of a physical copy.",
                            }),
                            (0, o.jsx)("li", {
                              children: "Your ID has expired.",
                            }),
                          ],
                        }),
                        (0, o.jsx)("br", {}),
                        (0, o.jsx)("p", {
                          children:
                            "If your verification failed due to any of these reasons, you will not be permitted to work on Outlier. This policy is strictly enforced, and we do not make exceptions. Our Support team will not be able to assist you further if you fail to meet these requirements.",
                        }),
                      ],
                    }),
                    d &&
                      (0, o.jsxs)(o.Fragment, {
                        children: [
                          (0, o.jsx)("div", {
                            className: "text-base mt-8",
                            children:
                              "If you still believe the verification result is incorrect, please file an appeal.",
                          }),
                          (0, o.jsx)(s.zx, {
                            className:
                              "border-[1px] border-neutral-200 mt-2 text-neutral-600 text-sm w-[117px]",
                            variant: "outline",
                            onClick: () => i(!0),
                            children: "File an appeal",
                          }),
                        ],
                      }),
                  ],
                }),
                (0, o.jsx)(_, { open: n, onClose: () => i(!1) }),
              ],
            })
          );
        },
        E = ({ userId: e, logEvent: t }) =>
          (0, o.jsx)(i.A, {
            explanation: (0, o.jsxs)("div", {
              className: "space-y-6",
              children: [
                (0, o.jsx)("div", {
                  className: "font-bold text-xl",
                  children: "Identity verification unsuccessful",
                }),
                (0, o.jsx)(O, { userId: e, logEvent: t }),
              ],
            }),
            iconSrc: "/static/img/outlier/3d-flag.svg",
          }),
        I = () =>
          (0, o.jsx)(i.A, {
            explanation: (0, o.jsxs)("div", {
              className: "space-y-6",
              children: [
                (0, o.jsx)("div", {
                  className: "font-bold text-xl",
                  children: "ID verification failed",
                }),
                (0, o.jsxs)("div", {
                  children: [
                    "Unfortunately, you've exceeded the maximum number of attempts to verify your identity, and we will not be able to create your account. If this is the result of a technical failure or you need further assistance, please contact our support team by clicking the",
                    " ",
                    (0, o.jsx)("b", { children: "Need help" }),
                    " button in the bottom left corner of this screen.",
                  ],
                }),
              ],
            }),
            iconSrc: "/static/img/outlier/3d-flag.svg",
          }),
        g = () =>
          (0, o.jsx)(i.A, {
            explanation: (0, o.jsxs)("div", {
              className: "text-center",
              children: [
                (0, o.jsx)("div", {
                  className: "font-medium text-3xl mb-4",
                  children: "Your appeal is under review",
                }),
                (0, o.jsx)("div", {
                  className: "font-normal text-base text-neutral-500 mb-4",
                  children:
                    "Your appeal will be reviewed within two business days.",
                }),
                (0, o.jsxs)("div", {
                  className:
                    "rounded-md bg-misc-periwinkle5 mt-auto p-3 flex items-center mb-8",
                  children: [
                    (0, o.jsx)("div", {
                      className: "flex pr-2",
                      children: (0, o.jsx)(c.J, {
                        icon: ["far", "circle-exclamation"],
                        className: "w-4 h-4",
                        iconClassName: "text-brand-lightPeriwinkle",
                      }),
                    }),
                    (0, o.jsx)("div", {
                      className: "flex text-sm font-normal",
                      children:
                        "Contacting support during this process will not expedite the process.",
                    }),
                  ],
                }),
              ],
            }),
            iconSrc: "/static/img/outlier/3d-envelope-with-blue-refresh.svg",
            updatedStyling: !0,
          }),
        T = () =>
          (0, o.jsx)(i.A, {
            explanation: (0, o.jsxs)("div", {
              className: "text-center",
              children: [
                (0, o.jsx)("div", {
                  className: "font-medium text-3xl mb-4 w-[560px]",
                  children:
                    "Your appeal re: identity verification has been denied",
                }),
                (0, o.jsx)("div", {
                  className: "font-normal text-base text-neutral-500 mb-4",
                  children:
                    "This decision is final. Thank you for understanding.",
                }),
              ],
            }),
            iconSrc: "/static/img/outlier/3d-red-x-over-yellow-circle.svg",
            updatedStyling: !0,
          });
      var N = n(722030);
      const A = ({ userId: e, logEvent: t }) => {
        const { data: n, isLoading: i } = (0, r.B)(
            "show-post-persona-comms",
            { userId: e },
            !1
          ),
          {
            data: a,
            isLoading: s,
            isFetching: u,
          } = (0, b.a)(["review-status"], async () =>
            (0, C.ZP)("/internal/violations-review/idv_review_status", {
              method: "GET",
            })
          );
        !i &&
          t &&
          t(
            v.j.PostPersonaCommsViewEvent,
            n ? { userId: e, newScreens: !0 } : { userId: e, newScreens: !1 }
          );
        return (0, o.jsx)("div", {
          className: "w-[54rem]",
          children:
            s || u || i
              ? (0, o.jsx)(N.$, {
                  className:
                    "absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2",
                  size: "lg",
                })
              : a === y.km.Pending
              ? (0, o.jsx)(g, {})
              : a === y.km.Reviewed
              ? (0, o.jsx)(T, {})
              : n
              ? (0, o.jsx)(E, { userId: e, logEvent: t })
              : (0, o.jsx)(I, {}),
        });
      };
    },
    75254: function (e, t) {
      "use strict";
      t.km = t.kS = t.vY = void 0;
      t.vY = 10485760;
      var n, o, r, i, a;
      (t.kS = 2),
        (t.km = n),
        (function (e) {
          (e.Pending = "pending"),
            (e.InReview = "in_review"),
            (e.Reviewed = "reviewed");
        })(n || (t.km = n = {})),
        (function (e) {
          e.ExternalAppeal = "external_appeal";
        })(o || (o = {})),
        (function (e) {
          e.IdVerification = "id_verification";
        })(r || (r = {})),
        (function (e) {
          e.Persona = "persona";
        })(i || (i = {})),
        (function (e) {
          (e.IdVerificationApproved = "id_verification_approved"),
            (e.IdVerificationDeclined = "id_verification_declined");
        })(a || (a = {}));
    },
    18573: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.makeRecentPhoneVerificationCacheKey = function (e) {
          return `auth_recent_phone_verification:${e}`;
        }),
        (t.PERSONA_BYPASS_TAGS =
          t.BadTaskerType =
          t.LANGUAGES_COUNTRIES_QUALIFICATION =
          t.CODING_COUNTRIES_QUALIFICATION =
          t.SPECIALIST_COUNTRIES_QUALIFICATION =
          t.GENERALIST_COUNTRIES_QUALIFICATION =
          t.NOT_TRAVELING_QUALIFICATION =
          t.IDV_ID_USER_COUNTRY_MATCH_QUALIFICATION =
          t.IDV_DATABASE_CHECK_IF_APPLICABLE_QUALIFICATION =
          t.IDV_NO_ELECTRONIC_REPLICA_QUALIFICATION =
          t.ATTEMPTED_TO_CREATE_DUP_GROUP =
          t.PersonaVerificationCheck =
          t.schoolEmailRegex =
          t.NON_ENGLISH_RESUME_WT =
          t.RECENT_PHONE_VERIFICATION_CACHE_TTL_SECS =
          t.RECENT_PHONE_VERIFICATION_CACHE_KEY_PREFIX =
          t.ACCOUNT_DELETE_2FA_REQUIRED_MINUTES =
          t.MAX_TRAVEL_DAYS_PER_YEAR =
          t.TNSIgnoreTags =
          t.TNS_SEON_SCORE_IGNORE_TAG_ID =
          t.TNS_VPN_ALLOWED_TAG_ID =
          t.ALL_ALLOWED_COUNTRIES =
          t.COUNTRIES_BY_GROUP =
          t.GROUP_3_COUNTRY_CODES =
          t.GROUP_2_COUNTRY_CODES =
          t.GROUP_1_COUNTRY_CODES =
          t.GROUP_3_NAME =
          t.GROUP_2_NAME =
          t.GROUP_1_NAME =
          t.FLAG_RESTRICT_SIGNUP_FLOW_COUNTRIES =
          t.FLAG_RESTRICT_GROUP_3_COUNTRY_SIGNUP =
          t.FLAG_RESTRICT_GROUP_2_COUNTRY_SIGNUP =
            void 0);
      var o = n(167469);
      t.FLAG_RESTRICT_GROUP_2_COUNTRY_SIGNUP =
        "restrict-group-2-country-signup";
      t.FLAG_RESTRICT_GROUP_3_COUNTRY_SIGNUP =
        "restrict-group-3-country-signup";
      t.FLAG_RESTRICT_SIGNUP_FLOW_COUNTRIES = "restrict-signup-flow-countries";
      const r = "Group 1 (low risk)";
      t.GROUP_1_NAME = r;
      const i = "Group 2 (medium risk)";
      t.GROUP_2_NAME = i;
      const a = "Group 3 (high risk)";
      t.GROUP_3_NAME = a;
      const s = [
        o.CountryCode.US,
        o.CountryCode.CA,
        o.CountryCode.PR,
        o.CountryCode.MX,
        o.CountryCode.GB,
        o.CountryCode.AU,
        o.CountryCode.NZ,
        o.CountryCode.AR,
      ];
      t.GROUP_1_COUNTRY_CODES = s;
      const u = [
        o.CountryCode.PH,
        o.CountryCode.PE,
        o.CountryCode.CO,
        o.CountryCode.BR,
      ];
      t.GROUP_2_COUNTRY_CODES = u;
      const c = [
        o.CountryCode.IN,
        o.CountryCode.DZ,
        o.CountryCode.CM,
        o.CountryCode.EG,
        o.CountryCode.MG,
        o.CountryCode.MW,
        o.CountryCode.MA,
        o.CountryCode.ZA,
        o.CountryCode.TZ,
        o.CountryCode.BH,
        o.CountryCode.BD,
        o.CountryCode.KH,
        o.CountryCode.ID,
        o.CountryCode.IL,
        o.CountryCode.JP,
        o.CountryCode.JO,
        o.CountryCode.MY,
        o.CountryCode.MV,
        o.CountryCode.QA,
        o.CountryCode.SA,
        o.CountryCode.SG,
        o.CountryCode.KR,
        o.CountryCode.TW,
        o.CountryCode.TH,
        o.CountryCode.TR,
        o.CountryCode.AE,
        o.CountryCode.VN,
        o.CountryCode.AL,
        o.CountryCode.AD,
        o.CountryCode.AT,
        o.CountryCode.BE,
        o.CountryCode.BA,
        o.CountryCode.BG,
        o.CountryCode.IC,
        o.CountryCode.HR,
        o.CountryCode.CY,
        o.CountryCode.CZ,
        o.CountryCode.DK,
        o.CountryCode.EE,
        o.CountryCode.FO,
        o.CountryCode.FI,
        o.CountryCode.AX,
        o.CountryCode.FR,
        o.CountryCode.DE,
        o.CountryCode.GI,
        o.CountryCode.GR,
        o.CountryCode.GG,
        o.CountryCode.JE,
        o.CountryCode.HU,
        o.CountryCode.IS,
        o.CountryCode.IE,
        o.CountryCode.IM,
        o.CountryCode.IT,
        o.CountryCode.XK,
        o.CountryCode.LV,
        o.CountryCode.LI,
        o.CountryCode.LT,
        o.CountryCode.LU,
        o.CountryCode.MT,
        o.CountryCode.MC,
        o.CountryCode.ME,
        o.CountryCode.NL,
        o.CountryCode.NO,
        o.CountryCode.PL,
        o.CountryCode.PT,
        o.CountryCode.MK,
        o.CountryCode.RO,
        o.CountryCode.SM,
        o.CountryCode.RS,
        o.CountryCode.SK,
        o.CountryCode.SI,
        o.CountryCode.ES,
        o.CountryCode.SE,
        o.CountryCode.CH,
        o.CountryCode.VA,
        o.CountryCode.BS,
        o.CountryCode.BB,
        o.CountryCode.BZ,
        o.CountryCode.BM,
        o.CountryCode.KY,
        o.CountryCode.CR,
        o.CountryCode.DO,
        o.CountryCode.SV,
        o.CountryCode.GL,
        o.CountryCode.GT,
        o.CountryCode.HT,
        o.CountryCode.HN,
        o.CountryCode.JM,
        o.CountryCode.MS,
        o.CountryCode.NI,
        o.CountryCode.PA,
        o.CountryCode.KN,
        o.CountryCode.LC,
        o.CountryCode.TT,
        o.CountryCode.VG,
        o.CountryCode.VI,
        o.CountryCode.AS,
        o.CountryCode.BO,
        o.CountryCode.CL,
        o.CountryCode.EC,
        o.CountryCode.GF,
        o.CountryCode.GY,
        o.CountryCode.PY,
        o.CountryCode.SR,
        o.CountryCode.UY,
        o.CountryCode.VE,
      ];
      t.GROUP_3_COUNTRY_CODES = c;
      const l = { [r]: s, [i]: u, [a]: c };
      t.COUNTRIES_BY_GROUP = l;
      const d = [...s, ...u, ...c];
      t.ALL_ALLOWED_COUNTRIES = d;
      t.TNS_VPN_ALLOWED_TAG_ID = "65ca676da317aacc833c1c83";
      var f;
      (t.TNS_SEON_SCORE_IGNORE_TAG_ID = "6619825cba17570719d4ca01"),
        (t.TNSIgnoreTags = f),
        (function (e) {
          (e.seon_score = "6619825cba17570719d4ca01"),
            (e.mismatch_pii = "6618b371cbac322cfa7f1781"),
            (e.name_mismatch_id = "65b31c850ab66a9aff0e7fe1"),
            (e.name_mismatch_greenhouse = "6618b3679cad6085cd5f9047"),
            (e.name_mismatch_linkedin = "6618b36175284e400d3ce10a"),
            (e.name_mismatch_willo = "663bf29bdf634016986009af"),
            (e.shared_airtm = "65b806708013d1a172d9d838"),
            (e.reverification_wo_id = "663d1af0eb0fb6c8e330cb77"),
            (e.fraud_ml = "664d1101ea287d3517111cb1"),
            (e.name_mismatch_average = "6618f75db58a2e291e5fae32");
        })(f || (t.TNSIgnoreTags = f = {}));
      t.MAX_TRAVEL_DAYS_PER_YEAR = 180;
      t.ACCOUNT_DELETE_2FA_REQUIRED_MINUTES = 15;
      const p = "auth_recent_phone_verification";
      t.RECENT_PHONE_VERIFICATION_CACHE_KEY_PREFIX = p;
      t.RECENT_PHONE_VERIFICATION_CACHE_TTL_SECS = 900;
      t.NON_ENGLISH_RESUME_WT = "670968674c5440b099c1a336";
      var C;
      (t.schoolEmailRegex =
        /^.+@(.+?\.)?(edu|helsinki\.fi|ac\.uk|ac\.in|utoronto\.ca|ki\.se|edu\.eg|yorku\.ca|edu\.co)$/i),
        (t.PersonaVerificationCheck = C),
        (function (e) {
          (e.IdAamvaDatabaseLookup = "id_aamva_database_lookup"),
            (e.IdAccountComparison = "id_account_comparison"),
            (e.IdAgeComparison = "id_age_comparison"),
            (e.IdAgeInconsistencyDetection = "id_age_inconsistency_detection"),
            (e.IdAttributeComparison = "id_attribute_comparison"),
            (e.IdBarcodeDetection = "id_barcode_detection"),
            (e.IdBarcodeInconsistencyDetection =
              "id_barcode_inconsistency_detection"),
            (e.IdBlurDetection = "id_blur_detection"),
            (e.IdColorInconsistencyDetection =
              "id_color_inconsistency_detection"),
            (e.IdCompromisedDetection = "id_compromised_detection"),
            (e.IdDisallowedCountryDetection =
              "id_disallowed_country_detection"),
            (e.IdDisallowedTypeDetection = "id_disallowed_type_detection"),
            (e.IdDoubleSideDetection = "id_double_side_detection"),
            (e.IdElectronicReplicaDetection =
              "id_electronic_replica_detection"),
            (e.IdEntityDetection = "id_entity_detection"),
            (e.IdExpiredDetection = "id_expired_detection"),
            (e.IdExtractionInconsistencyDetection =
              "id_extraction_inconsistency_detection"),
            (e.IdExtractedPropertiesDetection =
              "id_extracted_properties_detection"),
            (e.IdFabricationDetection = "id_fabrication_detection"),
            (e.IdGlareDetection = "id_glare_detection"),
            (e.IdHandwritingDetection = "id_handwriting_detection"),
            (e.IdInconsistentRepeatDetection =
              "id_inconsistent_repeat_detection"),
            (e.IdInquiryComparison = "id_inquiry_comparison"),
            (e.IdMrzDetection = "id_mrz_detection"),
            (e.IdMrzInconsistencyDetection = "id_mrz_inconsistency_detection"),
            (e.IdNumberFormatInconsistencyDetection =
              "id_number_format_inconsistency_detection"),
            (e.IdPaperDetection = "id_paper_detection"),
            (e.IdPoBoxDetection = "id_po_box_detection"),
            (e.IdPortraitClarityDetection = "id_portrait_clarity_detection"),
            (e.IdPortraitDetection = "id_portrait_detection"),
            (e.IdPublicFigureDetection = "id_public_figure_detection"),
            (e.IdRealIdDetection = "id_real_id_detection"),
            (e.IdRepeatDetection = "id_repeat_detection"),
            (e.IdSelfieComparison = "id_selfie_comparison"),
            (e.IdTamperDetection = "id_tamper_detection"),
            (e.IdUnprocessableSubmissionDetection =
              "id_unprocessable_submission_detection"),
            (e.IdValidDatesDetection = "id_valid_dates_detection"),
            (e.IdVideoQualityDetection = "id_video_quality_detection"),
            (e.IdExperimentalModelDetection =
              "id_experimental_model_detection"),
            (e.IdCornerDetection = "id_corner_detection"),
            (e.SelfiePoseDetection = "selfie_pose_detection"),
            (e.SelfieLivenessDetection = "selfie_liveness_detection");
        })(C || (t.PersonaVerificationCheck = C = {}));
      t.ATTEMPTED_TO_CREATE_DUP_GROUP = "attempted_dup_group_creation";
      t.IDV_NO_ELECTRONIC_REPLICA_QUALIFICATION = "673cebbd6edddec5406b741e";
      t.IDV_DATABASE_CHECK_IF_APPLICABLE_QUALIFICATION =
        "673cebbd6edddec5406b7421";
      t.IDV_ID_USER_COUNTRY_MATCH_QUALIFICATION = "673cebbd6edddec5406b7424";
      t.NOT_TRAVELING_QUALIFICATION = "673cebbd6edddec5406b7427";
      t.GENERALIST_COUNTRIES_QUALIFICATION = "673cf2f1095a2188d2ad63b0";
      t.SPECIALIST_COUNTRIES_QUALIFICATION = "673cf2f1095a2188d2ad63b3";
      t.CODING_COUNTRIES_QUALIFICATION = "673cf2f1095a2188d2ad63b6";
      var m;
      (t.LANGUAGES_COUNTRIES_QUALIFICATION = "673cf2f1095a2188d2ad63b9"),
        (t.BadTaskerType = m),
        (function (e) {
          (e.Fraud = "is_fraud"),
            (e.Cheater = "is_cheater"),
            (e.SystemAbuser = "is_system_abuser"),
            (e.LowQuality = "is_low_quality");
        })(m || (t.BadTaskerType = m = {}));
      t.PERSONA_BYPASS_TAGS = [
        "675b2af5a269179de62012b0",
        "675b2afa7c45d32b8c9849f4",
        "675b2affb68261bf0678dac2",
        "67478d787a9bff9d69f1938f",
        "67467762cacf5260048a0dc2",
        "674677587aef5e4a84a6b8c1",
        "674677486f379368c32c5879",
        "6746604240b46ffe870508fb",
        "67465ecbefb1480575e930d8",
        "67465b7f7df850bd718b416b",
        "67465771d5995d391be8a136",
        "674656c6b1819216c4b3a2fc",
        "67465238b7716557e8aa80d3",
        "674651748c37dba5a1acca4f",
        "67463f2afb2da87e429a0db5",
        "67463f2500d2e9d350b1398f",
        "67463f279ecf3ac010e53ac5",
        "67463f1ae35c45eb21f2eac2",
        "67463f225a3ea04ed5ecf26e",
        "67463f1e8b1cd8bd775fdb0f",
        "675b24a836cdcf4b613e9805",
        "675b24e59064da0f74513acb",
        "675b24f368afbf12350ced37",
        "675b25053078cc5d7abee04f",
        "675b61519e06dcebc8847956",
        "675b61577830c6ea2e662a29",
      ];
    },
    350615: function (e, t) {
      "use strict";
      t.Fs = void 0;
      t.Fs = "Tasker account is not verified";
    },
    761077: function (e, t) {
      "use strict";
      var n;
      (t.xC = void 0),
        (t.xC = n),
        (function (e) {
          (e.Classic = "classic"),
            (e.LidarLite = "lidarlite"),
            (e.Annabel = "annabel"),
            (e.VideoCaptioning = "videocaptioning");
        })(n || (t.xC = n = {}));
    },
    204864: function (e, t, n) {
      "use strict";
      var o = n(127061),
        r = n(830816).Buffer;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.sample = function (e, t) {
          const n = e.filter((e, n) => n % t === 0);
          (e.length - 1) % t > 0 && n.push(e[e.length - 1]);
          return n;
        }),
        (t.base64StringToTypedArray = function (e, t) {
          if (l) {
            const n = r.from(e, "base64");
            return new t(
              n.buffer,
              n.byteOffset,
              n.length / t.BYTES_PER_ELEMENT
            );
          }
          {
            const n = i.default.decode(e);
            return new t(n);
          }
        }),
        (t.typedArrayToBase64String = function (e) {
          return l
            ? r.from(e.buffer).toString("base64")
            : i.default.encode(e.buffer);
        }),
        (t.flattenTypedArrays = function (e, t) {
          if (!e.length) return new t();
          const n = [];
          for (const o of e) n.push(...o);
          return t.from(n);
        }),
        (t.compareS3URLWithoutRegion = function (e, t) {
          const n = y(e),
            o = y(t);
          if (void 0 === n.Key || void 0 === o.Key) return e === t;
          return n.Bucket === o.Bucket && n.Key === o.Key;
        }),
        (t.fromS3Url = y),
        (t.toS3Url = h),
        (t.s3UrlToHTTPUrl = function (e) {
          const { Bucket: t, Key: n, Region: o } = y(e);
          if (!t || !n) return e;
          return h(t, n, "bucket-in-host", o);
        }),
        (t.attemptWithRetry = async function (e, t = 60, n = 3, o) {
          for (let i = 0; i < n; i++)
            try {
              return await e();
            } catch (r) {
              if (!(i + 1 < n)) throw r;
              o?.(i + 1), await _(1e3 * t);
            }
          throw new Error("impossible");
        }),
        (t.retryWithBackoff = async function (e, t) {
          let n = t?.retries ?? 3,
            o = t?.delayMs ?? 1e3;
          const r = t?.maxDelayMs ?? 6e4;
          let i;
          t?.disableJitter || (await _(1e3 * Math.random()));
          for (; n > 0; )
            try {
              return await e();
            } catch (a) {
              n--, (i = a), await _(o), (o = Math.min(2 * o, r));
            }
          if (void 0 !== t?.defaultValue) return t.defaultValue;
          throw i || new Error("Retry failed with unknown error.");
        }),
        (t.getStackTrace = b),
        (t.getCallSite = function () {
          const e = b({ skipLines: 2 }),
            [t, n] = e.split("\n").map((e) => e.split(" ")[1]);
          return {
            message: `${t} was called by ${n}`,
            stack: e,
            currentFn: t,
            caller: n,
          };
        }),
        (t.getStackBreadcrumbs = function ({
          logFile: e = !1,
          skipLines: t = 2,
        } = {}) {
          const n = b({ skipLines: t })
            .split("\n")
            .map((e) => e.split(" ")[1]);
          e || n.pop();
          return a.default.reverse(n).join(" > ");
        }),
        (t.fixStringIndentation = function (e) {
          const t = e.split("\n"),
            n = t[0].match(/^\s{2,}/g)?.length;
          if (!n) return e;
          if (t.every((e) => e.startsWith(t[0].slice(0, n))))
            return t.map((e) => e.slice(0, n)).join("\n");
          return e;
        }),
        (t.initializeRecordWithKeysFromEnum = function (e, t) {
          return a.default.fromPairs(a.default.values(e).map((e) => [e, t]));
        }),
        (t.enumValues = function (e) {
          return Object.keys(e)
            .filter((e) => Number.isNaN(+e))
            .map((t) => e[t]);
        }),
        (t.generateRandomSlug = function (e = 12) {
          const t =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
          let n = "";
          for (let o = 0; o < e; o++) {
            const e = Math.floor(Math.random() * t.length);
            n += t.charAt(e);
          }
          return n;
        }),
        (t.makeJsonCompatible =
          t.parseAnythingSeparatedIds =
          t.sleep =
          t.asyncTimeout =
          t.mapToTypedArrays =
            void 0);
      var i = c(n(188718)),
        a = c(n(298784)),
        s = c(n(137131)),
        u = n(312093);
      function c(e) {
        return e && e.__esModule ? e : { default: e };
      }
      const l = "undefined" !== typeof o ? o : 0;
      t.mapToTypedArrays = (e) => e.map((e) => Float32Array.from(e));
      t.asyncTimeout = async (e) => new Promise((t) => setTimeout(t, e));
      const d = {
          "(us|eu|ap|sa|ca|me)\\-\\w+\\-\\d+": "amazonaws.com",
          "cn\\-\\w+\\-\\d+": "amazonaws.com.cn",
          "us\\-gov\\-\\w+\\-\\d+": "amazonaws.com",
          "us\\-iso\\-\\w+\\-\\d+": "c2s.ic.gov",
          "us\\-isob\\-\\w+\\-\\d+": "sc2s.sgov.gov",
        },
        f = "((" + a.default.keys(d).join(")|(") + "))",
        p =
          "(" +
          a.default
            .uniq(a.default.values(d))
            .map((e) => e.replace(/\./g, "\\."))
            .join("|") +
          ")",
        C = new RegExp(`^([a-z0-9-.]+).s3([.-](dualstack\\.)?${f})?\\.${p}$`),
        m = new RegExp(`^s3([.-](dualstack\\.)?${f})?\\.${p}$`);
      function y(e) {
        const t = s.default.parse(e);
        try {
          t.pathname = decodeURIComponent(t.pathname || "");
        } catch (r) {
          return { Bucket: void 0, Key: void 0, Region: void 0 };
        }
        if (!t.hostname || !t.pathname)
          return { Bucket: void 0, Key: void 0, Region: void 0 };
        if ("s3:" === t.protocol)
          return {
            Bucket: t.hostname,
            Key: t.pathname.slice(1),
            Region: void 0,
          };
        const n = t.hostname.match(C);
        if (n) return { Bucket: n[1], Key: t.pathname.slice(1), Region: n[4] };
        const o = t.hostname.match(m);
        if (o) {
          const e = t.pathname.split("/");
          return { Bucket: e[1], Key: e.slice(2).join("/"), Region: o[3] };
        }
        return { Bucket: void 0, Key: void 0, Region: void 0 };
      }
      function h(e, t, n = "bucket-in-host", o) {
        const r =
            a.default.find(d, (e, t) => !!o?.match(new RegExp(`^${t}$`))) ??
            "amazonaws.com",
          i = encodeURIComponent(t).replace(/%2F/g, "/");
        switch (n) {
          case "bucket-in-host":
            return `https://${e}.s3.${o ? `${o}.` : ""}${r}/${i}`;
          case "s3":
            return `s3://${e}/${i}`;
        }
      }
      const _ = (e) =>
        new Promise((t) => {
          setTimeout(t, e);
        });
      function b({ skipLines: e = 0 } = {}) {
        const t = (new Error().stack || "").split("\n").map((e) => e.trim());
        return t
          .splice("Error" === t[0] ? 2 : 1)
          .slice(e)
          .join("\n");
      }
      t.sleep = _;
      t.parseAnythingSeparatedIds = (e) => {
        const t = e.match(/[^,\s]+/g) || [];
        return a.default.uniq(t);
      };
      const v = (e) =>
        u.G.isString(e) || u.G.isNumber(e) || u.G.isBoolean(e) || null === e
          ? e
          : u.G.isDate(e)
          ? e.toISOString()
          : u.G.isArray(e)
          ? e.flatMap((e) => {
              if (null === e) return [null];
              const t = v(e);
              return null !== t ? [t] : [];
            })
          : u.G.isObject(e)
          ? Object.fromEntries(
              Object.entries(e).flatMap((e) => {
                const [t, n] = e;
                if (null === n) return [[t, null]];
                const o = v(n);
                return null !== o ? [[t, o]] : [];
              })
            )
          : null;
      t.makeJsonCompatible = v;
    },
    188718: function (e, t) {
      !(function () {
        "use strict";
        for (
          var e =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            n = new Uint8Array(256),
            o = 0;
          o < e.length;
          o++
        )
          n[e.charCodeAt(o)] = o;
        (t.encode = function (t) {
          var n,
            o = new Uint8Array(t),
            r = o.length,
            i = "";
          for (n = 0; n < r; n += 3)
            (i += e[o[n] >> 2]),
              (i += e[((3 & o[n]) << 4) | (o[n + 1] >> 4)]),
              (i += e[((15 & o[n + 1]) << 2) | (o[n + 2] >> 6)]),
              (i += e[63 & o[n + 2]]);
          return (
            r % 3 === 2
              ? (i = i.substring(0, i.length - 1) + "=")
              : r % 3 === 1 && (i = i.substring(0, i.length - 2) + "=="),
            i
          );
        }),
          (t.decode = function (e) {
            var t,
              o,
              r,
              i,
              a,
              s = 0.75 * e.length,
              u = e.length,
              c = 0;
            "=" === e[e.length - 1] && (s--, "=" === e[e.length - 2] && s--);
            var l = new ArrayBuffer(s),
              d = new Uint8Array(l);
            for (t = 0; t < u; t += 4)
              (o = n[e.charCodeAt(t)]),
                (r = n[e.charCodeAt(t + 1)]),
                (i = n[e.charCodeAt(t + 2)]),
                (a = n[e.charCodeAt(t + 3)]),
                (d[c++] = (o << 2) | (r >> 4)),
                (d[c++] = ((15 & r) << 4) | (i >> 2)),
                (d[c++] = ((3 & i) << 6) | (63 & a));
            return l;
          });
      })();
    },
    401792: function (e, t, n) {
      var o;
      !(function () {
        "use strict";
        var r = !(
            "undefined" === typeof window ||
            !window.document ||
            !window.document.createElement
          ),
          i = {
            canUseDOM: r,
            canUseWorkers: "undefined" !== typeof Worker,
            canUseEventListeners:
              r && !(!window.addEventListener && !window.attachEvent),
            canUseViewport: r && !!window.screen,
          };
        void 0 ===
          (o = function () {
            return i;
          }.call(t, n, t, e)) || (e.exports = o);
      })();
    },
    648628: function (e) {
      var t = 1e3,
        n = 60 * t,
        o = 60 * n,
        r = 24 * o,
        i = 7 * r,
        a = 365.25 * r;
      function s(e, t, n, o) {
        var r = t >= 1.5 * n;
        return Math.round(e / n) + " " + o + (r ? "s" : "");
      }
      e.exports = function (e, u) {
        u = u || {};
        var c = typeof e;
        if ("string" === c && e.length > 0)
          return (function (e) {
            if ((e = String(e)).length > 100) return;
            var s =
              /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
                e
              );
            if (!s) return;
            var u = parseFloat(s[1]);
            switch ((s[2] || "ms").toLowerCase()) {
              case "years":
              case "year":
              case "yrs":
              case "yr":
              case "y":
                return u * a;
              case "weeks":
              case "week":
              case "w":
                return u * i;
              case "days":
              case "day":
              case "d":
                return u * r;
              case "hours":
              case "hour":
              case "hrs":
              case "hr":
              case "h":
                return u * o;
              case "minutes":
              case "minute":
              case "mins":
              case "min":
              case "m":
                return u * n;
              case "seconds":
              case "second":
              case "secs":
              case "sec":
              case "s":
                return u * t;
              case "milliseconds":
              case "millisecond":
              case "msecs":
              case "msec":
              case "ms":
                return u;
              default:
                return;
            }
          })(e);
        if ("number" === c && isFinite(e))
          return u.long
            ? (function (e) {
                var i = Math.abs(e);
                if (i >= r) return s(e, i, r, "day");
                if (i >= o) return s(e, i, o, "hour");
                if (i >= n) return s(e, i, n, "minute");
                if (i >= t) return s(e, i, t, "second");
                return e + " ms";
              })(e)
            : (function (e) {
                var i = Math.abs(e);
                if (i >= r) return Math.round(e / r) + "d";
                if (i >= o) return Math.round(e / o) + "h";
                if (i >= n) return Math.round(e / n) + "m";
                if (i >= t) return Math.round(e / t) + "s";
                return e + "ms";
              })(e);
        throw new Error(
          "val is not a non-empty string or a valid number. val=" +
            JSON.stringify(e)
        );
      };
    },
    585325: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.bodyOpenClassName = t.portalClassName = void 0);
      var o =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var o in n)
                Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
            }
            return e;
          },
        r = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                "value" in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o);
            }
          }
          return function (t, n, o) {
            return n && e(t.prototype, n), o && e(t, o), t;
          };
        })(),
        i = n(827378),
        a = p(i),
        s = p(n(331542)),
        u = p(n(723615)),
        c = p(n(156302)),
        l = (function (e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          return (t.default = e), t;
        })(n(952202)),
        d = n(363486),
        f = p(d);
      function p(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function C(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function m(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" !== typeof t && "function" !== typeof t) ? e : t;
      }
      var y = (t.portalClassName = "ReactModalPortal"),
        h = (t.bodyOpenClassName = "ReactModal__Body--open"),
        _ = void 0 !== s.default.createPortal,
        b = _
          ? s.default.createPortal
          : s.default.unstable_renderSubtreeIntoContainer;
      function v(e) {
        return e();
      }
      var O = (function (e) {
        function t() {
          var e, n, r;
          C(this, t);
          for (var i = arguments.length, u = Array(i), l = 0; l < i; l++)
            u[l] = arguments[l];
          return (
            (n = r =
              m(
                this,
                (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                  e,
                  [this].concat(u)
                )
              )),
            (r.removePortal = function () {
              !_ && s.default.unmountComponentAtNode(r.node),
                v(r.props.parentSelector).removeChild(r.node);
            }),
            (r.portalRef = function (e) {
              r.portal = e;
            }),
            (r.renderPortal = function (e) {
              var n = b(
                r,
                a.default.createElement(
                  c.default,
                  o({ defaultStyles: t.defaultStyles }, e)
                ),
                r.node
              );
              r.portalRef(n);
            }),
            m(r, n)
          );
        }
        return (
          (function (e, t) {
            if ("function" !== typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof t
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(t, e),
          r(
            t,
            [
              {
                key: "componentDidMount",
                value: function () {
                  d.canUseDOM &&
                    (_ || (this.node = document.createElement("div")),
                    (this.node.className = this.props.portalClassName),
                    v(this.props.parentSelector).appendChild(this.node),
                    !_ && this.renderPortal(this.props));
                },
              },
              {
                key: "componentWillReceiveProps",
                value: function (e) {
                  if (d.canUseDOM) {
                    var t = e.isOpen;
                    if (this.props.isOpen || t) {
                      var n = v(this.props.parentSelector),
                        o = v(e.parentSelector);
                      o !== n &&
                        (n.removeChild(this.node), o.appendChild(this.node)),
                        !_ && this.renderPortal(e);
                    }
                  }
                },
              },
              {
                key: "componentWillUpdate",
                value: function (e) {
                  d.canUseDOM &&
                    e.portalClassName !== this.props.portalClassName &&
                    (this.node.className = e.portalClassName);
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  if (d.canUseDOM && this.node && this.portal) {
                    var e = this.portal.state,
                      t = Date.now(),
                      n =
                        e.isOpen &&
                        this.props.closeTimeoutMS &&
                        (e.closesAt || t + this.props.closeTimeoutMS);
                    n
                      ? (e.beforeClose || this.portal.closeWithTimeout(),
                        setTimeout(this.removePortal, n - t))
                      : this.removePortal();
                  }
                },
              },
              {
                key: "render",
                value: function () {
                  return d.canUseDOM && _
                    ? (!this.node &&
                        _ &&
                        (this.node = document.createElement("div")),
                      b(
                        a.default.createElement(
                          c.default,
                          o(
                            {
                              ref: this.portalRef,
                              defaultStyles: t.defaultStyles,
                            },
                            this.props
                          )
                        ),
                        this.node
                      ))
                    : null;
                },
              },
            ],
            [
              {
                key: "setAppElement",
                value: function (e) {
                  l.setElement(e);
                },
              },
            ]
          ),
          t
        );
      })(i.Component);
      (O.propTypes = {
        isOpen: u.default.bool.isRequired,
        style: u.default.shape({
          content: u.default.object,
          overlay: u.default.object,
        }),
        portalClassName: u.default.string,
        bodyOpenClassName: u.default.string,
        className: u.default.oneOfType([
          u.default.string,
          u.default.shape({
            base: u.default.string.isRequired,
            afterOpen: u.default.string.isRequired,
            beforeClose: u.default.string.isRequired,
          }),
        ]),
        overlayClassName: u.default.oneOfType([
          u.default.string,
          u.default.shape({
            base: u.default.string.isRequired,
            afterOpen: u.default.string.isRequired,
            beforeClose: u.default.string.isRequired,
          }),
        ]),
        appElement: u.default.instanceOf(f.default),
        onAfterOpen: u.default.func,
        onRequestClose: u.default.func,
        closeTimeoutMS: u.default.number,
        ariaHideApp: u.default.bool,
        shouldFocusAfterRender: u.default.bool,
        shouldCloseOnOverlayClick: u.default.bool,
        shouldReturnFocusAfterClose: u.default.bool,
        parentSelector: u.default.func,
        aria: u.default.object,
        role: u.default.string,
        contentLabel: u.default.string,
        shouldCloseOnEsc: u.default.bool,
      }),
        (O.defaultProps = {
          isOpen: !1,
          portalClassName: y,
          bodyOpenClassName: h,
          ariaHideApp: !0,
          closeTimeoutMS: 0,
          shouldFocusAfterRender: !0,
          shouldCloseOnEsc: !0,
          shouldCloseOnOverlayClick: !0,
          shouldReturnFocusAfterClose: !0,
          parentSelector: function () {
            return document.body;
          },
        }),
        (O.defaultStyles = {
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(255, 255, 255, 0.75)",
          },
          content: {
            position: "absolute",
            top: "40px",
            left: "40px",
            right: "40px",
            bottom: "40px",
            border: "1px solid #ccc",
            background: "#fff",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            borderRadius: "4px",
            outline: "none",
            padding: "20px",
          },
        }),
        (t.default = O);
    },
    156302: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var o in n)
                Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
            }
            return e;
          },
        r =
          "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" === typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              },
        i = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                "value" in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o);
            }
          }
          return function (t, n, o) {
            return n && e(t.prototype, n), o && e(t, o), t;
          };
        })(),
        a = n(827378),
        s = y(a),
        u = y(n(723615)),
        c = m(n(741259)),
        l = y(n(16303)),
        d = m(n(952202)),
        f = m(n(268787)),
        p = m(n(740131)),
        C = y(n(363486));
      function m(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return (t.default = e), t;
      }
      function y(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var h = {
          overlay: "ReactModal__Overlay",
          content: "ReactModal__Content",
        },
        _ = (function (e) {
          function t(e) {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t);
            var n = (function (e, t) {
              if (!e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return !t || ("object" !== typeof t && "function" !== typeof t)
                ? e
                : t;
            })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return (
              (n.setFocusAfterRender = function (e) {
                n.focusAfterRender = n.props.shouldFocusAfterRender && e;
              }),
              (n.setOverlayRef = function (e) {
                n.overlay = e;
              }),
              (n.setContentRef = function (e) {
                n.content = e;
              }),
              (n.afterClose = function () {
                var e = n.props,
                  t = e.appElement,
                  o = e.ariaHideApp;
                p.remove(n.props.bodyOpenClassName),
                  o && f.totalCount() < 1 && d.show(t),
                  n.props.shouldFocusAfterRender &&
                    (n.props.shouldReturnFocusAfterClose
                      ? (c.returnFocus(), c.teardownScopedFocus())
                      : c.popWithoutFocus());
              }),
              (n.open = function () {
                n.beforeOpen(),
                  n.state.afterOpen && n.state.beforeClose
                    ? (clearTimeout(n.closeTimer),
                      n.setState({ beforeClose: !1 }))
                    : (n.props.shouldFocusAfterRender &&
                        (c.setupScopedFocus(n.node), c.markForFocusLater()),
                      n.setState({ isOpen: !0 }, function () {
                        n.setState({ afterOpen: !0 }),
                          n.props.isOpen &&
                            n.props.onAfterOpen &&
                            n.props.onAfterOpen();
                      }));
              }),
              (n.close = function () {
                n.props.closeTimeoutMS > 0
                  ? n.closeWithTimeout()
                  : n.closeWithoutTimeout();
              }),
              (n.focusContent = function () {
                return n.content && !n.contentHasFocus() && n.content.focus();
              }),
              (n.closeWithTimeout = function () {
                var e = Date.now() + n.props.closeTimeoutMS;
                n.setState({ beforeClose: !0, closesAt: e }, function () {
                  n.closeTimer = setTimeout(
                    n.closeWithoutTimeout,
                    n.state.closesAt - Date.now()
                  );
                });
              }),
              (n.closeWithoutTimeout = function () {
                n.setState(
                  {
                    beforeClose: !1,
                    isOpen: !1,
                    afterOpen: !1,
                    closesAt: null,
                  },
                  n.afterClose
                );
              }),
              (n.handleKeyDown = function (e) {
                9 === e.keyCode && (0, l.default)(n.content, e),
                  n.props.shouldCloseOnEsc &&
                    27 === e.keyCode &&
                    (e.stopPropagation(), n.requestClose(e));
              }),
              (n.handleOverlayOnClick = function (e) {
                null === n.shouldClose && (n.shouldClose = !0),
                  n.shouldClose &&
                    n.props.shouldCloseOnOverlayClick &&
                    (n.ownerHandlesClose()
                      ? n.requestClose(e)
                      : n.focusContent()),
                  (n.shouldClose = null),
                  (n.moveFromContentToOverlay = null);
              }),
              (n.handleOverlayOnMouseUp = function () {
                null === n.moveFromContentToOverlay && (n.shouldClose = !1);
              }),
              (n.handleContentOnMouseUp = function () {
                n.shouldClose = !1;
              }),
              (n.handleOverlayOnMouseDown = function (e) {
                n.props.shouldCloseOnOverlayClick ||
                  e.target != n.overlay ||
                  e.preventDefault(),
                  (n.moveFromContentToOverlay = !1);
              }),
              (n.handleContentOnClick = function () {
                n.shouldClose = !1;
              }),
              (n.handleContentOnMouseDown = function () {
                (n.shouldClose = !1), (n.moveFromContentToOverlay = !1);
              }),
              (n.requestClose = function (e) {
                return n.ownerHandlesClose() && n.props.onRequestClose(e);
              }),
              (n.ownerHandlesClose = function () {
                return n.props.onRequestClose;
              }),
              (n.shouldBeClosed = function () {
                return !n.state.isOpen && !n.state.beforeClose;
              }),
              (n.contentHasFocus = function () {
                return (
                  document.activeElement === n.content ||
                  n.content.contains(document.activeElement)
                );
              }),
              (n.buildClassName = function (e, t) {
                var o =
                    "object" === ("undefined" === typeof t ? "undefined" : r(t))
                      ? t
                      : {
                          base: h[e],
                          afterOpen: h[e] + "--after-open",
                          beforeClose: h[e] + "--before-close",
                        },
                  i = o.base;
                return (
                  n.state.afterOpen && (i = i + " " + o.afterOpen),
                  n.state.beforeClose && (i = i + " " + o.beforeClose),
                  "string" === typeof t && t ? i + " " + t : i
                );
              }),
              (n.ariaAttributes = function (e) {
                return Object.keys(e).reduce(function (t, n) {
                  return (t["aria-" + n] = e[n]), t;
                }, {});
              }),
              (n.state = { afterOpen: !1, beforeClose: !1 }),
              (n.shouldClose = null),
              (n.moveFromContentToOverlay = null),
              n
            );
          }
          return (
            (function (e, t) {
              if ("function" !== typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function, not " +
                    typeof t
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            })(t, e),
            i(t, [
              {
                key: "componentDidMount",
                value: function () {
                  this.props.isOpen &&
                    (this.setFocusAfterRender(!0), this.open());
                },
              },
              {
                key: "componentWillReceiveProps",
                value: function (e) {
                  !this.props.isOpen && e.isOpen
                    ? (this.setFocusAfterRender(!0), this.open())
                    : this.props.isOpen && !e.isOpen && this.close();
                },
              },
              {
                key: "componentDidUpdate",
                value: function () {
                  this.focusAfterRender &&
                    (this.focusContent(), this.setFocusAfterRender(!1));
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this.afterClose(), clearTimeout(this.closeTimer);
                },
              },
              {
                key: "beforeOpen",
                value: function () {
                  var e = this.props,
                    t = e.appElement,
                    n = e.ariaHideApp,
                    o = e.bodyOpenClassName;
                  p.add(o), n && d.hide(t);
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.className,
                    n = e.overlayClassName,
                    r = e.defaultStyles,
                    i = t ? {} : r.content,
                    a = n ? {} : r.overlay;
                  return this.shouldBeClosed()
                    ? null
                    : s.default.createElement(
                        "div",
                        {
                          ref: this.setOverlayRef,
                          className: this.buildClassName("overlay", n),
                          style: o({}, a, this.props.style.overlay),
                          onClick: this.handleOverlayOnClick,
                          onMouseDown: this.handleOverlayOnMouseDown,
                          onMouseUp: this.handleOverlayOnMouseUp,
                          "aria-modal": "true",
                        },
                        s.default.createElement(
                          "div",
                          o(
                            {
                              ref: this.setContentRef,
                              style: o({}, i, this.props.style.content),
                              className: this.buildClassName("content", t),
                              tabIndex: "-1",
                              onKeyDown: this.handleKeyDown,
                              onMouseDown: this.handleContentOnMouseDown,
                              onMouseUp: this.handleContentOnMouseUp,
                              onClick: this.handleContentOnClick,
                              role: this.props.role,
                              "aria-label": this.props.contentLabel,
                            },
                            this.ariaAttributes(this.props.aria || {})
                          ),
                          this.props.children
                        )
                      );
                },
              },
            ]),
            t
          );
        })(a.Component);
      (_.defaultProps = { style: { overlay: {}, content: {} } }),
        (_.propTypes = {
          isOpen: u.default.bool.isRequired,
          defaultStyles: u.default.shape({
            content: u.default.object,
            overlay: u.default.object,
          }),
          style: u.default.shape({
            content: u.default.object,
            overlay: u.default.object,
          }),
          className: u.default.oneOfType([u.default.string, u.default.object]),
          overlayClassName: u.default.oneOfType([
            u.default.string,
            u.default.object,
          ]),
          bodyOpenClassName: u.default.string,
          ariaHideApp: u.default.bool,
          appElement: u.default.instanceOf(C.default),
          onAfterOpen: u.default.func,
          onRequestClose: u.default.func,
          closeTimeoutMS: u.default.number,
          shouldFocusAfterRender: u.default.bool,
          shouldCloseOnOverlayClick: u.default.bool,
          shouldReturnFocusAfterClose: u.default.bool,
          role: u.default.string,
          contentLabel: u.default.string,
          aria: u.default.object,
          children: u.default.node,
          shouldCloseOnEsc: u.default.bool,
        }),
        (t.default = _),
        (e.exports = t.default);
    },
    952202: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.assertNodeList = s),
        (t.setElement = function (e) {
          var t = e;
          if ("string" === typeof t) {
            var n = document.querySelectorAll(t);
            s(n, t), (t = "length" in n ? n[0] : n);
          }
          return (a = t || a);
        }),
        (t.validateElement = u),
        (t.hide = function (e) {
          u(e) && (e || a).setAttribute("aria-hidden", "true");
        }),
        (t.show = function (e) {
          u(e) && (e || a).removeAttribute("aria-hidden");
        }),
        (t.documentNotReadyOrSSRTesting = function () {
          a = null;
        }),
        (t.resetForTesting = function () {
          a = null;
        });
      var o,
        r = n(851280),
        i = (o = r) && o.__esModule ? o : { default: o };
      var a = null;
      function s(e, t) {
        if (!e || !e.length)
          throw new Error(
            "react-modal: No elements were found for selector " + t + "."
          );
      }
      function u(e) {
        return (
          !(!e && !a) ||
          ((0, i.default)(
            !1,
            [
              "react-modal: App element is not defined.",
              "Please use `Modal.setAppElement(el)` or set `appElement={el}`.",
              "This is needed so screen readers don't see main content",
              "when modal is opened. It is not recommended, but you can opt-out",
              "by setting `ariaHideApp={false}`.",
            ].join(" ")
          ),
          !1)
        );
      }
    },
    740131: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.add = function (e) {
          e.split(" ")
            .map(o.add)
            .forEach(function (e) {
              return document.body.classList.add(e);
            });
        }),
        (t.remove = function (e) {
          var t = o.get();
          e.split(" ")
            .map(o.remove)
            .filter(function (e) {
              return 0 === t[e];
            })
            .forEach(function (e) {
              return document.body.classList.remove(e);
            });
        });
      var o = (function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return (t.default = e), t;
      })(n(268787));
    },
    741259: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.handleBlur = c),
        (t.handleFocus = l),
        (t.markForFocusLater = function () {
          a.push(document.activeElement);
        }),
        (t.returnFocus = function () {
          var e = null;
          try {
            return void (0 !== a.length && (e = a.pop()).focus());
          } catch (t) {
            console.warn(
              [
                "You tried to return focus to",
                e,
                "but it is not in the DOM anymore",
              ].join(" ")
            );
          }
        }),
        (t.popWithoutFocus = function () {
          a.length > 0 && a.pop();
        }),
        (t.setupScopedFocus = function (e) {
          (s = e),
            window.addEventListener
              ? (window.addEventListener("blur", c, !1),
                document.addEventListener("focus", l, !0))
              : (window.attachEvent("onBlur", c),
                document.attachEvent("onFocus", l));
        }),
        (t.teardownScopedFocus = function () {
          (s = null),
            window.addEventListener
              ? (window.removeEventListener("blur", c),
                document.removeEventListener("focus", l))
              : (window.detachEvent("onBlur", c),
                document.detachEvent("onFocus", l));
        });
      var o,
        r = n(314072),
        i = (o = r) && o.__esModule ? o : { default: o };
      var a = [],
        s = null,
        u = !1;
      function c() {
        u = !0;
      }
      function l() {
        if (u) {
          if (((u = !1), !s)) return;
          setTimeout(function () {
            s.contains(document.activeElement) ||
              ((0, i.default)(s)[0] || s).focus();
          }, 0);
        }
      }
    },
    268787: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.get = function () {
          return n;
        }),
        (t.add = function (e) {
          n[e] || (n[e] = 0);
          return (n[e] += 1), e;
        }),
        (t.remove = function (e) {
          n[e] && (n[e] -= 1);
          return e;
        }),
        (t.totalCount = function () {
          return Object.keys(n).reduce(function (e, t) {
            return e + n[t];
          }, 0);
        });
      var n = {};
    },
    363486: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.canUseDOM = void 0);
      var o,
        r = n(401792);
      var i = ((o = r) && o.__esModule ? o : { default: o }).default,
        a = i.canUseDOM ? window.HTMLElement : {};
      t.canUseDOM = i.canUseDOM;
      t.default = a;
    },
    16303: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e, t) {
          var n = (0, i.default)(e);
          if (!n.length) return void t.preventDefault();
          var o,
            r = t.shiftKey,
            a = n[0],
            s = n[n.length - 1];
          if (e === document.activeElement) return;
          s !== document.activeElement || r || (o = a);
          a === document.activeElement && r && (o = s);
          if (o) return t.preventDefault(), void o.focus();
          var u = /(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent);
          if (
            null == u ||
            "Chrome" == u[1] ||
            null != /\biPod\b|\biPad\b/g.exec(navigator.userAgent)
          )
            return;
          var c = n.indexOf(document.activeElement);
          c > -1 && (c += r ? -1 : 1);
          t.preventDefault(), n[c].focus();
        });
      var o,
        r = n(314072),
        i = (o = r) && o.__esModule ? o : { default: o };
      e.exports = t.default;
    },
    314072: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e) {
          return [].slice.call(e.querySelectorAll("*"), 0).filter(i);
        });
      var n = /input|select|textarea|button|object/;
      function o(e) {
        var t = e.offsetWidth <= 0 && e.offsetHeight <= 0;
        if (t && !e.innerHTML) return !0;
        var n = window.getComputedStyle(e);
        return t
          ? "visible" !== n.getPropertyValue("overflow")
          : "none" == n.getPropertyValue("display");
      }
      function r(e, t) {
        var r = e.nodeName.toLowerCase();
        return (
          ((n.test(r) && !e.disabled) || ("a" === r && e.href) || t) &&
          (function (e) {
            for (var t = e; t && t !== document.body; ) {
              if (o(t)) return !1;
              t = t.parentNode;
            }
            return !0;
          })(e)
        );
      }
      function i(e) {
        var t = e.getAttribute("tabindex");
        null === t && (t = void 0);
        var n = isNaN(t);
        return (n || t >= 0) && r(e, !n);
      }
      e.exports = t.default;
    },
    761403: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o,
        r = n(585325),
        i = (o = r) && o.__esModule ? o : { default: o };
      (t.default = i.default), (e.exports = t.default);
    },
    851280: function (e) {
      "use strict";
      e.exports = function () {};
    },
    208528: function (e, t, n) {
      "use strict";
      var o = n(827378);
      t.Z = function (e) {
        var t = o.useState(e),
          n = t[0],
          r = t[1];
        return [
          n,
          o.useCallback(
            function (e) {
              r(
                "boolean" === typeof e
                  ? e
                  : function (e) {
                      return !e;
                    }
              );
            },
            [r]
          ),
        ];
      };
    },
  },
]);
