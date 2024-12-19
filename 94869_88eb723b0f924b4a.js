"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [94869],
  {
    17556: function (e, t, n) {
      n.r(t),
        n.d(t, {
          capitalize: function () {
            return o.Z;
          },
          createChainedFunction: function () {
            return r.Z;
          },
          createSvgIcon: function () {
            return a.Z;
          },
          debounce: function () {
            return i.Z;
          },
          deprecatedPropType: function () {
            return s;
          },
          isMuiElement: function () {
            return l.Z;
          },
          ownerDocument: function () {
            return u.Z;
          },
          ownerWindow: function () {
            return c.Z;
          },
          requirePropFactory: function () {
            return d;
          },
          setRef: function () {
            return p.Z;
          },
          unstable_useId: function () {
            return h.Z;
          },
          unsupportedProp: function () {
            return m;
          },
          useControlled: function () {
            return f.Z;
          },
          useEventCallback: function () {
            return g.Z;
          },
          useForkRef: function () {
            return v.Z;
          },
          useIsFocusVisible: function () {
            return y.Z;
          },
        });
      var o = n(233056),
        r = n(514256),
        a = n(428291),
        i = n(588069);
      function s(e, t) {
        return function () {
          return null;
        };
      }
      var l = n(387526),
        u = n(244506),
        c = n(307872);
      function d(e) {
        return function () {
          return null;
        };
      }
      var p = n(214926);
      function m(e, t, n, o, r) {
        return null;
      }
      var f = n(209655),
        g = n(420926),
        v = n(601487),
        h = n(164294),
        y = n(270137);
    },
    332676: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return o.createSvgIcon;
          },
        });
      var o = n(17556);
    },
    44468: function (e, t, n) {
      var o = n(814484),
        r = n(197308),
        a = n(827378),
        i = n(479789),
        s = n(312480),
        l = n(707818),
        u = n(925608),
        c = n(922399),
        d = n(668036),
        p = n(23618),
        m = n(651546),
        f = n(824246);
      const g = [
          "edge",
          "children",
          "className",
          "color",
          "disabled",
          "disableFocusRipple",
          "size",
        ],
        v = (0, u.ZP)(d.Z, {
          name: "MuiIconButton",
          slot: "Root",
          overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [
              t.root,
              "default" !== n.color && t[`color${(0, p.Z)(n.color)}`],
              n.edge && t[`edge${(0, p.Z)(n.edge)}`],
              t[`size${(0, p.Z)(n.size)}`],
            ];
          },
        })(
          ({ theme: e, ownerState: t }) =>
            (0, r.Z)(
              {
                textAlign: "center",
                flex: "0 0 auto",
                fontSize: e.typography.pxToRem(24),
                padding: 8,
                borderRadius: "50%",
                overflow: "visible",
                color: (e.vars || e).palette.action.active,
                transition: e.transitions.create("background-color", {
                  duration: e.transitions.duration.shortest,
                }),
              },
              !t.disableRipple && {
                "&:hover": {
                  backgroundColor: e.vars
                    ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`
                    : (0, l.Fq)(
                        e.palette.action.active,
                        e.palette.action.hoverOpacity
                      ),
                  "@media (hover: none)": { backgroundColor: "transparent" },
                },
              },
              "start" === t.edge && {
                marginLeft: "small" === t.size ? -3 : -12,
              },
              "end" === t.edge && { marginRight: "small" === t.size ? -3 : -12 }
            ),
          ({ theme: e, ownerState: t }) => {
            var n;
            const o = null == (n = (e.vars || e).palette) ? void 0 : n[t.color];
            return (0, r.Z)(
              {},
              "inherit" === t.color && { color: "inherit" },
              "inherit" !== t.color &&
                "default" !== t.color &&
                (0, r.Z)(
                  { color: null == o ? void 0 : o.main },
                  !t.disableRipple && {
                    "&:hover": (0, r.Z)(
                      {},
                      o && {
                        backgroundColor: e.vars
                          ? `rgba(${o.mainChannel} / ${e.vars.palette.action.hoverOpacity})`
                          : (0, l.Fq)(o.main, e.palette.action.hoverOpacity),
                      },
                      {
                        "@media (hover: none)": {
                          backgroundColor: "transparent",
                        },
                      }
                    ),
                  }
                ),
              "small" === t.size && {
                padding: 5,
                fontSize: e.typography.pxToRem(18),
              },
              "large" === t.size && {
                padding: 12,
                fontSize: e.typography.pxToRem(28),
              },
              {
                [`&.${m.Z.disabled}`]: {
                  backgroundColor: "transparent",
                  color: (e.vars || e).palette.action.disabled,
                },
              }
            );
          }
        ),
        h = a.forwardRef(function (e, t) {
          const n = (0, c.Z)({ props: e, name: "MuiIconButton" }),
            {
              edge: a = !1,
              children: l,
              className: u,
              color: d = "default",
              disabled: h = !1,
              disableFocusRipple: y = !1,
              size: T = "medium",
            } = n,
            b = (0, o.Z)(n, g),
            C = (0, r.Z)({}, n, {
              edge: a,
              color: d,
              disabled: h,
              disableFocusRipple: y,
              size: T,
            }),
            E = ((e) => {
              const { classes: t, disabled: n, color: o, edge: r, size: a } = e,
                i = {
                  root: [
                    "root",
                    n && "disabled",
                    "default" !== o && `color${(0, p.Z)(o)}`,
                    r && `edge${(0, p.Z)(r)}`,
                    `size${(0, p.Z)(a)}`,
                  ],
                };
              return (0, s.Z)(i, m.r, t);
            })(C);
          return (0,
          f.jsx)(v, (0, r.Z)({ className: (0, i.Z)(E.root, u), centerRipple: !0, focusRipple: !y, disabled: h, ref: t, ownerState: C }, b, { children: l }));
        });
      t.Z = h;
    },
    651546: function (e, t, n) {
      n.d(t, {
        r: function () {
          return a;
        },
      });
      var o = n(561503),
        r = n(57739);
      function a(e) {
        return (0, r.Z)("MuiIconButton", e);
      }
      const i = (0, o.Z)("MuiIconButton", [
        "root",
        "disabled",
        "colorInherit",
        "colorPrimary",
        "colorSecondary",
        "colorError",
        "colorInfo",
        "colorSuccess",
        "colorWarning",
        "edgeStart",
        "edgeEnd",
        "sizeSmall",
        "sizeMedium",
        "sizeLarge",
      ]);
      t.Z = i;
    },
    549523: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return y;
        },
      });
      var o = n(197308),
        r = n(814484),
        a = n(827378),
        i = n(479789),
        s = n(312480),
        l = n(23618),
        u = n(922399),
        c = n(925608),
        d = n(561503),
        p = n(57739);
      function m(e) {
        return (0, p.Z)("MuiSvgIcon", e);
      }
      (0, d.Z)("MuiSvgIcon", [
        "root",
        "colorPrimary",
        "colorSecondary",
        "colorAction",
        "colorError",
        "colorDisabled",
        "fontSizeInherit",
        "fontSizeSmall",
        "fontSizeMedium",
        "fontSizeLarge",
      ]);
      var f = n(824246);
      const g = [
          "children",
          "className",
          "color",
          "component",
          "fontSize",
          "htmlColor",
          "inheritViewBox",
          "titleAccess",
          "viewBox",
        ],
        v = (0, c.ZP)("svg", {
          name: "MuiSvgIcon",
          slot: "Root",
          overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [
              t.root,
              "inherit" !== n.color && t[`color${(0, l.Z)(n.color)}`],
              t[`fontSize${(0, l.Z)(n.fontSize)}`],
            ];
          },
        })(({ theme: e, ownerState: t }) => {
          var n, o, r, a, i, s, l, u, c, d, p, m, f, g, v, h, y;
          return {
            userSelect: "none",
            width: "1em",
            height: "1em",
            display: "inline-block",
            fill: "currentColor",
            flexShrink: 0,
            transition:
              null == (n = e.transitions) || null == (o = n.create)
                ? void 0
                : o.call(n, "fill", {
                    duration:
                      null == (r = e.transitions) || null == (a = r.duration)
                        ? void 0
                        : a.shorter,
                  }),
            fontSize: {
              inherit: "inherit",
              small:
                (null == (i = e.typography) || null == (s = i.pxToRem)
                  ? void 0
                  : s.call(i, 20)) || "1.25rem",
              medium:
                (null == (l = e.typography) || null == (u = l.pxToRem)
                  ? void 0
                  : u.call(l, 24)) || "1.5rem",
              large:
                (null == (c = e.typography) || null == (d = c.pxToRem)
                  ? void 0
                  : d.call(c, 35)) || "2.1875rem",
            }[t.fontSize],
            color:
              null !=
              (p =
                null == (m = (e.vars || e).palette) || null == (f = m[t.color])
                  ? void 0
                  : f.main)
                ? p
                : {
                    action:
                      null == (g = (e.vars || e).palette) ||
                      null == (v = g.action)
                        ? void 0
                        : v.active,
                    disabled:
                      null == (h = (e.vars || e).palette) ||
                      null == (y = h.action)
                        ? void 0
                        : y.disabled,
                    inherit: void 0,
                  }[t.color],
          };
        }),
        h = a.forwardRef(function (e, t) {
          const n = (0, u.Z)({ props: e, name: "MuiSvgIcon" }),
            {
              children: a,
              className: c,
              color: d = "inherit",
              component: p = "svg",
              fontSize: h = "medium",
              htmlColor: y,
              inheritViewBox: T = !1,
              titleAccess: b,
              viewBox: C = "0 0 24 24",
            } = n,
            E = (0, r.Z)(n, g),
            k = (0, o.Z)({}, n, {
              color: d,
              component: p,
              fontSize: h,
              instanceFontSize: e.fontSize,
              inheritViewBox: T,
              viewBox: C,
            }),
            S = {};
          T || (S.viewBox = C);
          const P = ((e) => {
            const { color: t, fontSize: n, classes: o } = e,
              r = {
                root: [
                  "root",
                  "inherit" !== t && `color${(0, l.Z)(t)}`,
                  `fontSize${(0, l.Z)(n)}`,
                ],
              };
            return (0, s.Z)(r, m, o);
          })(k);
          return (0,
          f.jsxs)(v, (0, o.Z)({ as: p, className: (0, i.Z)(P.root, c), focusable: "false", color: y, "aria-hidden": !b || void 0, role: b ? "img" : void 0, ref: t }, S, E, { ownerState: k, children: [a, b ? (0, f.jsx)("title", { children: b }) : null] }));
        });
      h.muiName = "SvgIcon";
      var y = h;
    },
    902750: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return b;
        },
      });
      var o = n(814484),
        r = n(197308),
        a = n(827378),
        i = n(479789),
        s = n(893772),
        l = n(312480),
        u = n(925608),
        c = n(922399),
        d = n(23618),
        p = n(561503),
        m = n(57739);
      function f(e) {
        return (0, m.Z)("MuiTypography", e);
      }
      (0, p.Z)("MuiTypography", [
        "root",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "subtitle1",
        "subtitle2",
        "body1",
        "body2",
        "inherit",
        "button",
        "caption",
        "overline",
        "alignLeft",
        "alignRight",
        "alignCenter",
        "alignJustify",
        "noWrap",
        "gutterBottom",
        "paragraph",
      ]);
      var g = n(824246);
      const v = [
          "align",
          "className",
          "component",
          "gutterBottom",
          "noWrap",
          "paragraph",
          "variant",
          "variantMapping",
        ],
        h = (0, u.ZP)("span", {
          name: "MuiTypography",
          slot: "Root",
          overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [
              t.root,
              n.variant && t[n.variant],
              "inherit" !== n.align && t[`align${(0, d.Z)(n.align)}`],
              n.noWrap && t.noWrap,
              n.gutterBottom && t.gutterBottom,
              n.paragraph && t.paragraph,
            ];
          },
        })(({ theme: e, ownerState: t }) =>
          (0, r.Z)(
            { margin: 0 },
            t.variant && e.typography[t.variant],
            "inherit" !== t.align && { textAlign: t.align },
            t.noWrap && {
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            },
            t.gutterBottom && { marginBottom: "0.35em" },
            t.paragraph && { marginBottom: 16 }
          )
        ),
        y = {
          h1: "h1",
          h2: "h2",
          h3: "h3",
          h4: "h4",
          h5: "h5",
          h6: "h6",
          subtitle1: "h6",
          subtitle2: "h6",
          body1: "p",
          body2: "p",
          inherit: "p",
        },
        T = {
          primary: "primary.main",
          textPrimary: "text.primary",
          secondary: "secondary.main",
          textSecondary: "text.secondary",
          error: "error.main",
        };
      var b = a.forwardRef(function (e, t) {
        const n = (0, c.Z)({ props: e, name: "MuiTypography" }),
          a = ((e) => T[e] || e)(n.color),
          u = (0, s.Z)((0, r.Z)({}, n, { color: a })),
          {
            align: p = "inherit",
            className: m,
            component: b,
            gutterBottom: C = !1,
            noWrap: E = !1,
            paragraph: k = !1,
            variant: S = "body1",
            variantMapping: P = y,
          } = u,
          w = (0, o.Z)(u, v),
          I = (0, r.Z)({}, u, {
            align: p,
            color: a,
            className: m,
            component: b,
            gutterBottom: C,
            noWrap: E,
            paragraph: k,
            variant: S,
            variantMapping: P,
          }),
          A = b || (k ? "p" : P[S] || y[S]) || "span",
          x = ((e) => {
            const {
                align: t,
                gutterBottom: n,
                noWrap: o,
                paragraph: r,
                variant: a,
                classes: i,
              } = e,
              s = {
                root: [
                  "root",
                  a,
                  "inherit" !== e.align && `align${(0, d.Z)(t)}`,
                  n && "gutterBottom",
                  o && "noWrap",
                  r && "paragraph",
                ],
              };
            return (0, l.Z)(s, f, i);
          })(I);
        return (0,
        g.jsx)(h, (0, r.Z)({ as: A, ref: t, ownerState: I, className: (0, i.Z)(x.root, m) }, w));
      });
    },
    494776: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      n(827378);
      var o = n(96206),
        r = n(853126);
      function a() {
        return (0, o.Z)(r.Z);
      }
    },
    611934: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var o = n(197308),
        r = n(827378),
        a = n(549523),
        i = n(824246);
      function s(e, t) {
        function n(n, r) {
          return (0, i.jsx)(
            a.Z,
            (0, o.Z)({ "data-testid": `${t}Icon`, ref: r }, n, { children: e })
          );
        }
        return (n.muiName = a.Z.muiName), r.memo(r.forwardRef(n));
      }
    },
    893772: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var o = n(237491),
        r = n(341795),
        a = n(484483),
        i = n(286851);
      const s = ["sx"];
      function l(e) {
        const { sx: t } = e,
          n = (0, r.Z)(e, s),
          { systemProps: l, otherProps: u } = ((e) => {
            var t, n;
            const o = { systemProps: {}, otherProps: {} },
              r =
                null !=
                (t =
                  null == e || null == (n = e.theme)
                    ? void 0
                    : n.unstable_sxConfig)
                  ? t
                  : i.Z;
            return (
              Object.keys(e).forEach((t) => {
                r[t] ? (o.systemProps[t] = e[t]) : (o.otherProps[t] = e[t]);
              }),
              o
            );
          })(n);
        let c;
        return (
          (c = Array.isArray(t)
            ? [l, ...t]
            : "function" === typeof t
            ? (...e) => {
                const n = t(...e);
                return (0, a.P)(n) ? (0, o.Z)({}, l, n) : l;
              }
            : (0, o.Z)({}, l, t)),
          (0, o.Z)({}, u, { sx: c })
        );
      }
    },
    327999: function (e, t, n) {
      (t.wX = a),
        (t.Xd = function (e) {
          return a(e).length > 0;
        });
      var o = n(202466);
      const r = [
        "Aardvark",
        "Abacus",
        "Abra",
        "Aguila",
        "Airdale",
        "Airedale",
        "Albatross",
        "Alligator",
        "Allosaurus",
        "Alpaca",
        "Amsel",
        "Anaconda",
        "Anteater",
        "Antelope",
        "Aracari",
        "Armadillo",
        "Axolotl ",
        "Baboon",
        "Badger",
        "Barracuda",
        "Beaver",
        "Bee",
        "Boar",
        "Bulba",
        "Bulbasaur",
        "Camel",
        "Capybara",
        "Cardinal",
        "Cat",
        "Centipede",
        "Centipede",
        "Charmander",
        "Cheetah",
        "Cherry",
        "Chihuahua",
        "Chinchilla ",
        "Chipmunk",
        "Circus",
        "Condor",
        "Cougar",
        "Cow",
        "Crab",
        "Crayfish",
        "Deer",
        "Dog",
        "Dolphin",
        "Dove",
        "Dragon",
        "Drongo",
        "Elephant",
        "Elk",
        "Emu",
        "Falcon",
        "Ferret",
        "Firefly",
        "Flamingo",
        "Flounder",
        "Fox",
        "Frog",
        "Gaius",
        "Gazelle",
        "Gecko",
        "Geodude",
        "Giraffe",
        "Goat",
        "Goldfinch",
        "Goldfish",
        "Goose",
        "Gorilla",
        "Hammerhead",
        "Hedgeh(deprecated)",
        "Hedgehog",
        "Hippo",
        "Horse",
        "Ibex",
        "Ibis",
        "Iguana",
        "Imbe",
        "Impala",
        "Indri",
        "Iris",
        "Ivysaur",
        "Jackal",
        "Jackrabbit",
        "Koala",
        "Lazarus",
        "Lemur",
        "Leopard",
        "Lion",
        "Mallard",
        "Mamba",
        "Mammoth",
        "Manta",
        "Marlin",
        "Meerkat",
        "Merlin",
        "Mongoose",
        "Monkey",
        "Moose",
        "Mustang",
        "Narwhal",
        "Nazgul",
        "Nighthawk",
        "Nightingale",
        "Numbat",
        "Octopus",
        "Omega",
        "Orangutan",
        "Ostrich",
        "Otter",
        "Owl",
        "Oyster",
        "Panther",
        "Parr(deprecated)",
        "Parrot",
        "Partridge",
        "Peacock",
        "Pelican",
        "Penguin",
        "Platypus",
        "Quail",
        "Rabbit",
        "Racco(deprecated)",
        "Raccoon",
        "Rattle Snake",
        "Raven",
        "Rhino",
        "Roadrunner",
        "Sable",
        "Salamander",
        "Sandfish",
        "Seagull",
        "Seahorse",
        "Seal",
        "SeaMonkey",
        "Shark",
        "Shiba",
        "Simba",
        "Skunk",
        "Sloth",
        "Snow Leopard",
        "Snowberry",
        "Sparrow",
        "Squid",
        "Squirrel",
        "Stallion",
        "Stegosaurus",
        "Stingray",
        "Tiger",
        "Toucan",
        "Turtle",
        "Unicorn",
        "Urchin",
        "Venus",
        "Vertigo",
        "Vulture",
        "Wallaby",
        "Walrus",
        "Whale",
        "Woodpecker",
        "Yeti",
        "Zebra",
      ];
      function a(e) {
        return e ? o.extractWordsFromText(e, r) : [];
      }
    },
    318308: function (e, t, n) {
      t.Z = function (e, { workerFacing: t = !1, rapid: n = !1 } = {}) {
        if (!e) return "All";
        let o = r.default.get(i, [e, t ? "worker" : "customer"]);
        n &&
          e === a.TaskType.DataCollection &&
          (o = "Project Setup Incomplete");
        n && e === a.TaskType.TextCollection && (o = `${o} / Categorization`);
        o || t || (o = s[e]);
        return o || r.default.startCase(e);
      };
      var o,
        r = (o = n(298784)) && o.__esModule ? o : { default: o },
        a = n(167469);
      const i = {
          [a.TaskType.Annotation]: {
            customer: "2D Box Annotation",
            worker: "Box Annotation",
          },
          [a.TaskType.AudioCollection]: {
            customer: "Audio Collection",
            worker: "Audio Collection",
          },
          [a.TaskType.AudioTranscription]: {
            customer: "Audio Transcription",
            worker: "Audio Transcription",
          },
          [a.TaskType.Categorization]: {
            customer: "Categorization",
            worker: "Categorization",
          },
          [a.TaskType.Comparison]: {
            customer: "Comparison",
            worker: "Comparison",
          },
          [a.TaskType.ContentModel]: {
            customer: "Content Model",
            worker: "Content Model",
          },
          [a.TaskType.CuboidAnnotation]: {
            customer: "3D Cuboid Annotation",
            worker: "Cuboid Annotation",
          },
          [a.TaskType.DataCollection]: {
            customer: "Data Collection",
            worker: "Data Collection",
          },
          [a.TaskType.DocumentCorrection]: {
            customer: "Document Correction",
            worker: "Document Correction",
          },
          [a.TaskType.DocumentTranscription]: {
            customer: "Document Transcription",
            worker: "Document Transcription",
          },
          [a.TaskType.DocumentModel]: {
            customer: "Document Model",
            worker: "Document Model",
          },
          [a.TaskType.ImageAnnotation]: {
            customer: "General Image Annotation",
            worker: "Image Annotation",
          },
          [a.TaskType.LidarAnnotation]: {
            customer: "Lidar Annotation",
            worker: "Lidar Annotation",
          },
          [a.TaskType.LidarSegmentation]: {
            customer: "Lidar Segmentation",
            worker: "Lidar Segmentation",
          },
          [a.TaskType.LineAnnotation]: {
            customer: "Line & Spline Annotation",
            worker: "Line Annotation",
          },
          [a.TaskType.NamedEntityRecognition]: {
            customer: "Named Entity Recognition",
            worker: "Text Highlighting",
          },
          [a.TaskType.PointAnnotation]: {
            customer: "Point Annotation",
            worker: "Point Annotation",
          },
          [a.TaskType.PolygonAnnotation]: {
            customer: "Polygon Annotation",
            worker: "Polygon Annotation",
          },
          [a.TaskType.SegmentAnnotation]: {
            customer: "2D Semantic Segmentation",
            worker: "Image Segmentation",
          },
          [a.TaskType.TextCollection]: {
            customer: "Text Collection",
            worker: "Text Collection",
          },
          [a.TaskType.Transcription]: {
            customer: "OCR Transcription",
            worker: "Transcription",
          },
          [a.TaskType.VideoAnnotation]: {
            customer: "General Video Annotation",
            worker: "Video Annotation",
          },
          [a.TaskType.VideoBoxAnnotation]: {
            customer: "Video Box Annotation",
            worker: "Video Box Annotation",
          },
          [a.TaskType.VideoCaptioning]: {
            customer: "Video Captioning",
            worker: "Video Captioning",
          },
          [a.TaskType.VideoCuboidAnnotation]: {
            customer: "Video Cuboid Annotation",
            worker: "Video Cuboid Annotation",
          },
          [a.TaskType.VideoPolygonAnnotation]: {
            customer: "Video Polygon Annotation",
            worker: "Video Polygon Annotation",
          },
          [a.TaskType.VideoPlaybackAnnotation]: {
            customer: "Video Playback Annotation",
            worker: "Video Playback Annotation",
          },
          [a.TaskType.GenericDataCollection]: {
            customer: "Generic Data Collection",
            worker: "Generic Data Collection",
          },
          [a.TaskType.MultiModalTranscription]: {
            customer: "Multimodal Transcription",
            worker: "Multimodal Transcription",
          },
          [a.TaskType.LidarLinking]: {
            customer: "Lidar 2D/3D Linking",
            worker: "",
          },
          [a.TaskType.LidarStitching]: {
            customer: "Lidar Stitching",
            worker: "",
          },
          [a.TaskType.LidarTopdown]: { customer: "Lidar Topdown", worker: "" },
          [a.TaskType.FixAnnotation]: {
            customer: "Single Box Annotation",
            worker: "Classic - Single Box",
          },
          [a.TaskType.LaneAnnotation]: {
            customer: "Lane Annotation",
            worker: "Classic - Lanes",
          },
          [a.TaskType.PhoneCall]: {
            customer: "Phone Call",
            worker: "Classic - Phone Call",
          },
          [a.TaskType.Chat]: {
            customer: "Chat (Legacy)",
            worker: "Chat (Legacy)",
          },
          [a.TaskType.ChatExperimental]: { customer: "Chat", worker: "Chat" },
          [a.TaskType.ChatV2]: { customer: "Chat", worker: "Chat" },
          [a.TaskType.MultiChat]: {
            customer: "Multi-Chat",
            worker: "Multi-Chat",
          },
        },
        s = {
          "semantic-segmentation": "Semantic Segmentation",
          "sensor-fusion-cuboids": "Sensor Fusion Cuboids",
          "sensor-fusion-segmentation": "Sensor Fusion Segmentation",
          audiospeech: "Audio Speech",
          boxannotation: "2D Box Annotation",
          imageannotation: "Image Annotation",
          imagecategorization: "Image Categorization",
          imagerecognition: "Image Recognition",
          otherannotation: "Other Annotation",
          sentimentanalysis: "Sentiment & Intent Analysis",
          textcategorization: "Text Categorization",
          textclassification: "Text Classification",
          utterancecollection: "Utterance Collection",
          lidartopdown: "Lidar Top-Down Annotation",
        };
    },
    202466: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.extractWordsFromText =
          t.isValidObjectId =
          t.OBJECT_ID_REGEX =
            void 0);
      const n = /^[a-f\d]{24}$/i;
      t.OBJECT_ID_REGEX = n;
      t.isValidObjectId = (e) => n.test(e);
      t.extractWordsFromText = (e, t) => {
        const n = new RegExp(`(?<=\\b|_)(?:${t.join("|")})(?=\\b|_)`, "gi"),
          o = e.match(n) || [];
        return [...new Set(o.map((e) => e.toLowerCase()))];
      };
    },
    930640: function (e, t, n) {
      n.d(t, {
        J: function () {
          return V;
        },
      });
      var o,
        r,
        a = n(827378),
        i = n(257953),
        s = n(436616),
        l = n(492296),
        u = n(822652),
        c = n(507723),
        d = n(54518),
        p = n(904818),
        m = n(901635),
        f = n(562722),
        g = n(116490),
        v = n(70458),
        h = n(237957),
        y = n(26822),
        T = n(914784),
        b = n(711981),
        C = n(11119),
        E = n(437349),
        k = n(285804),
        S =
          (((r = S || {})[(r.Open = 0)] = "Open"),
          (r[(r.Closed = 1)] = "Closed"),
          r),
        P =
          (((o = P || {})[(o.TogglePopover = 0)] = "TogglePopover"),
          (o[(o.ClosePopover = 1)] = "ClosePopover"),
          (o[(o.SetButton = 2)] = "SetButton"),
          (o[(o.SetButtonId = 3)] = "SetButtonId"),
          (o[(o.SetPanel = 4)] = "SetPanel"),
          (o[(o.SetPanelId = 5)] = "SetPanelId"),
          o);
      let w = {
          0: (e) => ({
            ...e,
            popoverState: (0, i.E)(e.popoverState, { 0: 1, 1: 0 }),
          }),
          1: (e) => (1 === e.popoverState ? e : { ...e, popoverState: 1 }),
          2: (e, t) => (e.button === t.button ? e : { ...e, button: t.button }),
          3: (e, t) =>
            e.buttonId === t.buttonId ? e : { ...e, buttonId: t.buttonId },
          4: (e, t) => (e.panel === t.panel ? e : { ...e, panel: t.panel }),
          5: (e, t) =>
            e.panelId === t.panelId ? e : { ...e, panelId: t.panelId },
        },
        I = (0, a.createContext)(null);
      function A(e) {
        let t = (0, a.useContext)(I);
        if (null === t) {
          let t = new Error(
            `<${e} /> is missing a parent <Popover /> component.`
          );
          throw (Error.captureStackTrace && Error.captureStackTrace(t, A), t);
        }
        return t;
      }
      I.displayName = "PopoverContext";
      let x = (0, a.createContext)(null);
      function M(e) {
        let t = (0, a.useContext)(x);
        if (null === t) {
          let t = new Error(
            `<${e} /> is missing a parent <Popover /> component.`
          );
          throw (Error.captureStackTrace && Error.captureStackTrace(t, M), t);
        }
        return t;
      }
      x.displayName = "PopoverAPIContext";
      let R = (0, a.createContext)(null);
      function O() {
        return (0, a.useContext)(R);
      }
      R.displayName = "PopoverGroupContext";
      let Z = (0, a.createContext)(null);
      function L(e, t) {
        return (0, i.E)(t.type, w, e, t);
      }
      Z.displayName = "PopoverPanelContext";
      let B = s.AN.RenderStrategy | s.AN.Static;
      let N = s.AN.RenderStrategy | s.AN.Static;
      let z = (0, s.yV)(function (e, t) {
          var n;
          let o = (0, a.useRef)(null),
            r = (0, l.T)(
              t,
              (0, l.h)((e) => {
                o.current = e;
              })
            ),
            u = (0, a.useRef)([]),
            c = (0, a.useReducer)(L, {
              popoverState: 1,
              buttons: u,
              button: null,
              buttonId: null,
              panel: null,
              panelId: null,
              beforePanelSentinel: (0, a.createRef)(),
              afterPanelSentinel: (0, a.createRef)(),
            }),
            [
              {
                popoverState: d,
                button: f,
                buttonId: v,
                panel: T,
                panelId: C,
                beforePanelSentinel: k,
                afterPanelSentinel: S,
              },
              P,
            ] = c,
            w = (0, h.i)(null != (n = o.current) ? n : f),
            A = (0, a.useMemo)(() => {
              if (!f || !T) return !1;
              for (let i of document.querySelectorAll("body > *"))
                if (
                  Number(null == i ? void 0 : i.contains(f)) ^
                  Number(null == i ? void 0 : i.contains(T))
                )
                  return !0;
              let e = (0, p.GO)(),
                t = e.indexOf(f),
                n = (t + e.length - 1) % e.length,
                o = (t + 1) % e.length,
                r = e[n],
                a = e[o];
              return !T.contains(r) && !T.contains(a);
            }, [f, T]),
            M = (0, E.E)(v),
            R = (0, E.E)(C),
            Z = (0, a.useMemo)(
              () => ({ buttonId: M, panelId: R, close: () => P({ type: 1 }) }),
              [M, R, P]
            ),
            B = O(),
            N = null == B ? void 0 : B.registerPopover,
            z = (0, b.z)(() => {
              var e;
              return null !=
                (e = null == B ? void 0 : B.isFocusWithinPopoverGroup())
                ? e
                : (null == w ? void 0 : w.activeElement) &&
                    ((null == f ? void 0 : f.contains(w.activeElement)) ||
                      (null == T ? void 0 : T.contains(w.activeElement)));
            });
          (0, a.useEffect)(() => (null == N ? void 0 : N(Z)), [N, Z]),
            (0, y.O)(
              null == w ? void 0 : w.defaultView,
              "focus",
              (e) => {
                var t, n, o, r;
                0 === d &&
                  (z() ||
                    (f &&
                      T &&
                      e.target !== window &&
                      ((null !=
                        (n = null == (t = k.current) ? void 0 : t.contains) &&
                        n.call(t, e.target)) ||
                        (null !=
                          (r = null == (o = S.current) ? void 0 : o.contains) &&
                          r.call(o, e.target)) ||
                        P({ type: 1 }))));
              },
              !0
            ),
            (0, g.O)(
              [f, T],
              (e, t) => {
                P({ type: 1 }),
                  (0, p.sP)(t, p.tJ.Loose) ||
                    (e.preventDefault(), null == f || f.focus());
              },
              0 === d
            );
          let _ = (0, b.z)((e) => {
              P({ type: 1 });
              let t = e
                ? e instanceof HTMLElement
                  ? e
                  : "current" in e && e.current instanceof HTMLElement
                  ? e.current
                  : f
                : f;
              null == t || t.focus();
            }),
            D = (0, a.useMemo)(() => ({ close: _, isPortalled: A }), [_, A]),
            F = (0, a.useMemo)(() => ({ open: 0 === d, close: _ }), [d, _]),
            $ = e,
            V = { ref: r };
          return a.createElement(
            I.Provider,
            { value: c },
            a.createElement(
              x.Provider,
              { value: D },
              a.createElement(
                m.up,
                { value: (0, i.E)(d, { 0: m.ZM.Open, 1: m.ZM.Closed }) },
                (0, s.sY)({
                  ourProps: V,
                  theirProps: $,
                  slot: F,
                  defaultTag: "div",
                  name: "Popover",
                })
              )
            )
          );
        }),
        _ = (0, s.yV)(function (e, t) {
          let n = (0, u.M)(),
            { id: o = `headlessui-popover-button-${n}`, ...r } = e,
            [m, g] = A("Popover.Button"),
            { isPortalled: v } = M("Popover.Button"),
            y = (0, a.useRef)(null),
            E = `headlessui-focus-sentinel-${(0, u.M)()}`,
            k = O(),
            S = null == k ? void 0 : k.closeOthers,
            P = (0, a.useContext)(Z),
            w = null !== P && P === m.panelId;
          (0, a.useEffect)(() => {
            if (!w)
              return (
                g({ type: 3, buttonId: o }),
                () => {
                  g({ type: 3, buttonId: null });
                }
              );
          }, [w, o, g]);
          let [I] = (0, a.useState)(() => Symbol()),
            x = (0, l.T)(
              y,
              t,
              w
                ? null
                : (e) => {
                    if (e) m.buttons.current.push(I);
                    else {
                      let e = m.buttons.current.indexOf(I);
                      -1 !== e && m.buttons.current.splice(e, 1);
                    }
                    m.buttons.current.length > 1 &&
                      console.warn(
                        "You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported."
                      ),
                      e && g({ type: 2, button: e });
                  }
            ),
            R = (0, l.T)(y, t),
            L = (0, h.i)(y),
            B = (0, b.z)((e) => {
              var t, n, o;
              if (w) {
                if (1 === m.popoverState) return;
                switch (e.key) {
                  case c.R.Space:
                  case c.R.Enter:
                    e.preventDefault(),
                      null == (n = (t = e.target).click) || n.call(t),
                      g({ type: 1 }),
                      null == (o = m.button) || o.focus();
                }
              } else
                switch (e.key) {
                  case c.R.Space:
                  case c.R.Enter:
                    e.preventDefault(),
                      e.stopPropagation(),
                      1 === m.popoverState && (null == S || S(m.buttonId)),
                      g({ type: 0 });
                    break;
                  case c.R.Escape:
                    if (0 !== m.popoverState)
                      return null == S ? void 0 : S(m.buttonId);
                    if (
                      !y.current ||
                      (null != L &&
                        L.activeElement &&
                        !y.current.contains(L.activeElement))
                    )
                      return;
                    e.preventDefault(), e.stopPropagation(), g({ type: 1 });
                }
            }),
            N = (0, b.z)((e) => {
              w || (e.key === c.R.Space && e.preventDefault());
            }),
            z = (0, b.z)((t) => {
              var n, o;
              (0, d.P)(t.currentTarget) ||
                e.disabled ||
                (w
                  ? (g({ type: 1 }), null == (n = m.button) || n.focus())
                  : (t.preventDefault(),
                    t.stopPropagation(),
                    1 === m.popoverState && (null == S || S(m.buttonId)),
                    g({ type: 0 }),
                    null == (o = m.button) || o.focus()));
            }),
            _ = (0, b.z)((e) => {
              e.preventDefault(), e.stopPropagation();
            }),
            D = 0 === m.popoverState,
            F = (0, a.useMemo)(() => ({ open: D }), [D]),
            $ = (0, f.f)(e, y),
            V = w
              ? { ref: R, type: $, onKeyDown: B, onClick: z }
              : {
                  ref: x,
                  id: m.buttonId,
                  type: $,
                  "aria-expanded": e.disabled ? void 0 : 0 === m.popoverState,
                  "aria-controls": m.panel ? m.panelId : void 0,
                  onKeyDown: B,
                  onKeyUp: N,
                  onClick: z,
                  onMouseDown: _,
                },
            G = (0, C.l)(),
            W = (0, b.z)(() => {
              let e = m.panel;
              e &&
                (0, i.E)(G.current, {
                  [C.N.Forwards]: () => (0, p.jA)(e, p.TO.First),
                  [C.N.Backwards]: () => (0, p.jA)(e, p.TO.Last),
                }) === p.fE.Error &&
                (0, p.jA)(
                  (0, p.GO)().filter(
                    (e) => "true" !== e.dataset.headlessuiFocusGuard
                  ),
                  (0, i.E)(G.current, {
                    [C.N.Forwards]: p.TO.Next,
                    [C.N.Backwards]: p.TO.Previous,
                  }),
                  { relativeTo: m.button }
                );
            });
          return a.createElement(
            a.Fragment,
            null,
            (0, s.sY)({
              ourProps: V,
              theirProps: r,
              slot: F,
              defaultTag: "button",
              name: "Popover.Button",
            }),
            D &&
              !w &&
              v &&
              a.createElement(T._, {
                id: E,
                features: T.A.Focusable,
                "data-headlessui-focus-guard": !0,
                as: "button",
                type: "button",
                onFocus: W,
              })
          );
        }),
        D = (0, s.yV)(function (e, t) {
          let n = (0, u.M)(),
            { id: o = `headlessui-popover-overlay-${n}`, ...r } = e,
            [{ popoverState: i }, c] = A("Popover.Overlay"),
            p = (0, l.T)(t),
            f = (0, m.oJ)(),
            g = null !== f ? (f & m.ZM.Open) === m.ZM.Open : 0 === i,
            v = (0, b.z)((e) => {
              if ((0, d.P)(e.currentTarget)) return e.preventDefault();
              c({ type: 1 });
            }),
            h = (0, a.useMemo)(() => ({ open: 0 === i }), [i]);
          return (0,
          s.sY)({ ourProps: { ref: p, id: o, "aria-hidden": !0, onClick: v }, theirProps: r, slot: h, defaultTag: "div", features: B, visible: g, name: "Popover.Overlay" });
        }),
        F = (0, s.yV)(function (e, t) {
          let n = (0, u.M)(),
            {
              id: o = `headlessui-popover-panel-${n}`,
              focus: r = !1,
              ...d
            } = e,
            [f, g] = A("Popover.Panel"),
            { close: v, isPortalled: y } = M("Popover.Panel"),
            E = `headlessui-focus-sentinel-before-${(0, u.M)()}`,
            S = `headlessui-focus-sentinel-after-${(0, u.M)()}`,
            P = (0, a.useRef)(null),
            w = (0, l.T)(P, t, (e) => {
              g({ type: 4, panel: e });
            }),
            I = (0, h.i)(P);
          (0, k.e)(
            () => (
              g({ type: 5, panelId: o }),
              () => {
                g({ type: 5, panelId: null });
              }
            ),
            [o, g]
          );
          let x = (0, m.oJ)(),
            R =
              null !== x ? (x & m.ZM.Open) === m.ZM.Open : 0 === f.popoverState,
            O = (0, b.z)((e) => {
              var t;
              if (e.key === c.R.Escape) {
                if (
                  0 !== f.popoverState ||
                  !P.current ||
                  (null != I &&
                    I.activeElement &&
                    !P.current.contains(I.activeElement))
                )
                  return;
                e.preventDefault(),
                  e.stopPropagation(),
                  g({ type: 1 }),
                  null == (t = f.button) || t.focus();
              }
            });
          (0, a.useEffect)(() => {
            var t;
            e.static ||
              (1 === f.popoverState &&
                (null == (t = e.unmount) || t) &&
                g({ type: 4, panel: null }));
          }, [f.popoverState, e.unmount, e.static, g]),
            (0, a.useEffect)(() => {
              if (!r || 0 !== f.popoverState || !P.current) return;
              let e = null == I ? void 0 : I.activeElement;
              P.current.contains(e) || (0, p.jA)(P.current, p.TO.First);
            }, [r, P, f.popoverState]);
          let L = (0, a.useMemo)(
              () => ({ open: 0 === f.popoverState, close: v }),
              [f, v]
            ),
            B = {
              ref: w,
              id: o,
              onKeyDown: O,
              onBlur:
                r && 0 === f.popoverState
                  ? (e) => {
                      var t, n, o, r, a;
                      let i = e.relatedTarget;
                      i &&
                        P.current &&
                        ((null != (t = P.current) && t.contains(i)) ||
                          (g({ type: 1 }),
                          ((null !=
                            (o =
                              null == (n = f.beforePanelSentinel.current)
                                ? void 0
                                : n.contains) &&
                            o.call(n, i)) ||
                            (null !=
                              (a =
                                null == (r = f.afterPanelSentinel.current)
                                  ? void 0
                                  : r.contains) &&
                              a.call(r, i))) &&
                            i.focus({ preventScroll: !0 })));
                    }
                  : void 0,
              tabIndex: -1,
            },
            z = (0, C.l)(),
            _ = (0, b.z)(() => {
              let e = P.current;
              e &&
                (0, i.E)(z.current, {
                  [C.N.Forwards]: () => {
                    var t;
                    (0, p.jA)(e, p.TO.First) === p.fE.Error &&
                      (null == (t = f.afterPanelSentinel.current) || t.focus());
                  },
                  [C.N.Backwards]: () => {
                    var e;
                    null == (e = f.button) || e.focus({ preventScroll: !0 });
                  },
                });
            }),
            D = (0, b.z)(() => {
              let e = P.current;
              e &&
                (0, i.E)(z.current, {
                  [C.N.Forwards]: () => {
                    var e;
                    if (!f.button) return;
                    let t = (0, p.GO)(),
                      n = t.indexOf(f.button),
                      o = t.slice(0, n + 1),
                      r = [...t.slice(n + 1), ...o];
                    for (let a of r.slice())
                      if (
                        "true" === a.dataset.headlessuiFocusGuard ||
                        (null != (e = f.panel) && e.contains(a))
                      ) {
                        let e = r.indexOf(a);
                        -1 !== e && r.splice(e, 1);
                      }
                    (0, p.jA)(r, p.TO.First, { sorted: !1 });
                  },
                  [C.N.Backwards]: () => {
                    var t;
                    (0, p.jA)(e, p.TO.Previous) === p.fE.Error &&
                      (null == (t = f.button) || t.focus());
                  },
                });
            });
          return a.createElement(
            Z.Provider,
            { value: o },
            R &&
              y &&
              a.createElement(T._, {
                id: E,
                ref: f.beforePanelSentinel,
                features: T.A.Focusable,
                "data-headlessui-focus-guard": !0,
                as: "button",
                type: "button",
                onFocus: _,
              }),
            (0, s.sY)({
              ourProps: B,
              theirProps: d,
              slot: L,
              defaultTag: "div",
              features: N,
              visible: R,
              name: "Popover.Panel",
            }),
            R &&
              y &&
              a.createElement(T._, {
                id: S,
                ref: f.afterPanelSentinel,
                features: T.A.Focusable,
                "data-headlessui-focus-guard": !0,
                as: "button",
                type: "button",
                onFocus: D,
              })
          );
        }),
        $ = (0, s.yV)(function (e, t) {
          let n = (0, a.useRef)(null),
            o = (0, l.T)(n, t),
            [r, i] = (0, a.useState)([]),
            u = (0, b.z)((e) => {
              i((t) => {
                let n = t.indexOf(e);
                if (-1 !== n) {
                  let e = t.slice();
                  return e.splice(n, 1), e;
                }
                return t;
              });
            }),
            c = (0, b.z)((e) => (i((t) => [...t, e]), () => u(e))),
            d = (0, b.z)(() => {
              var e;
              let t = (0, v.r)(n);
              if (!t) return !1;
              let o = t.activeElement;
              return (
                !(null == (e = n.current) || !e.contains(o)) ||
                r.some((e) => {
                  var n, r;
                  return (
                    (null == (n = t.getElementById(e.buttonId.current))
                      ? void 0
                      : n.contains(o)) ||
                    (null == (r = t.getElementById(e.panelId.current))
                      ? void 0
                      : r.contains(o))
                  );
                })
              );
            }),
            p = (0, b.z)((e) => {
              for (let t of r) t.buttonId.current !== e && t.close();
            }),
            m = (0, a.useMemo)(
              () => ({
                registerPopover: c,
                unregisterPopover: u,
                isFocusWithinPopoverGroup: d,
                closeOthers: p,
              }),
              [c, u, d, p]
            ),
            f = (0, a.useMemo)(() => ({}), []),
            g = e,
            h = { ref: o };
          return a.createElement(
            R.Provider,
            { value: m },
            (0, s.sY)({
              ourProps: h,
              theirProps: g,
              slot: f,
              defaultTag: "div",
              name: "Popover.Group",
            })
          );
        }),
        V = Object.assign(z, { Button: _, Overlay: D, Panel: F, Group: $ });
    },
    986910: function (e, t, n) {
      n.d(t, {
        Ix: function () {
          return S;
        },
        Am: function () {
          return L;
        },
      });
      var o = n(827378),
        r = n(138944);
      const a = (e) => "number" == typeof e && !isNaN(e),
        i = (e) => "string" == typeof e,
        s = (e) => "function" == typeof e,
        l = (e) => (i(e) || s(e) ? e : null),
        u = (e) => (0, o.isValidElement)(e) || i(e) || s(e) || a(e);
      function c(e) {
        let {
          enter: t,
          exit: n,
          appendPosition: r = !1,
          collapse: a = !0,
          collapseDuration: i = 300,
        } = e;
        return function (e) {
          let {
            children: s,
            position: l,
            preventExitTransition: u,
            done: c,
            nodeRef: d,
            isIn: p,
          } = e;
          const m = r ? `${t}--${l}` : t,
            f = r ? `${n}--${l}` : n,
            g = (0, o.useRef)(0);
          return (
            (0, o.useLayoutEffect)(() => {
              const e = d.current,
                t = m.split(" "),
                n = (o) => {
                  o.target === d.current &&
                    (e.dispatchEvent(new Event("d")),
                    e.removeEventListener("animationend", n),
                    e.removeEventListener("animationcancel", n),
                    0 === g.current &&
                      "animationcancel" !== o.type &&
                      e.classList.remove(...t));
                };
              e.classList.add(...t),
                e.addEventListener("animationend", n),
                e.addEventListener("animationcancel", n);
            }, []),
            (0, o.useEffect)(() => {
              const e = d.current,
                t = () => {
                  e.removeEventListener("animationend", t),
                    a
                      ? (function (e, t, n) {
                          void 0 === n && (n = 300);
                          const { scrollHeight: o, style: r } = e;
                          requestAnimationFrame(() => {
                            (r.minHeight = "initial"),
                              (r.height = o + "px"),
                              (r.transition = `all ${n}ms`),
                              requestAnimationFrame(() => {
                                (r.height = "0"),
                                  (r.padding = "0"),
                                  (r.margin = "0"),
                                  setTimeout(t, n);
                              });
                          });
                        })(e, c, i)
                      : c();
                };
              p ||
                (u
                  ? t()
                  : ((g.current = 1),
                    (e.className += ` ${f}`),
                    e.addEventListener("animationend", t)));
            }, [p]),
            o.createElement(o.Fragment, null, s)
          );
        };
      }
      function d(e, t) {
        return {
          content: e.content,
          containerId: e.props.containerId,
          id: e.props.toastId,
          theme: e.props.theme,
          type: e.props.type,
          data: e.props.data || {},
          isLoading: e.props.isLoading,
          icon: e.props.icon,
          status: t,
        };
      }
      const p = {
          list: new Map(),
          emitQueue: new Map(),
          on(e, t) {
            return (
              this.list.has(e) || this.list.set(e, []),
              this.list.get(e).push(t),
              this
            );
          },
          off(e, t) {
            if (t) {
              const n = this.list.get(e).filter((e) => e !== t);
              return this.list.set(e, n), this;
            }
            return this.list.delete(e), this;
          },
          cancelEmit(e) {
            const t = this.emitQueue.get(e);
            return (
              t && (t.forEach(clearTimeout), this.emitQueue.delete(e)), this
            );
          },
          emit(e) {
            this.list.has(e) &&
              this.list.get(e).forEach((t) => {
                const n = setTimeout(() => {
                  t(...[].slice.call(arguments, 1));
                }, 0);
                this.emitQueue.has(e) || this.emitQueue.set(e, []),
                  this.emitQueue.get(e).push(n);
              });
          },
        },
        m = (e) => {
          let { theme: t, type: n, ...r } = e;
          return o.createElement("svg", {
            viewBox: "0 0 24 24",
            width: "100%",
            height: "100%",
            fill:
              "colored" === t
                ? "currentColor"
                : `var(--toastify-icon-color-${n})`,
            ...r,
          });
        },
        f = {
          info: function (e) {
            return o.createElement(
              m,
              { ...e },
              o.createElement("path", {
                d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z",
              })
            );
          },
          warning: function (e) {
            return o.createElement(
              m,
              { ...e },
              o.createElement("path", {
                d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z",
              })
            );
          },
          success: function (e) {
            return o.createElement(
              m,
              { ...e },
              o.createElement("path", {
                d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z",
              })
            );
          },
          error: function (e) {
            return o.createElement(
              m,
              { ...e },
              o.createElement("path", {
                d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z",
              })
            );
          },
          spinner: function () {
            return o.createElement("div", { className: "Toastify__spinner" });
          },
        };
      function g(e) {
        const [, t] = (0, o.useReducer)((e) => e + 1, 0),
          [n, r] = (0, o.useState)([]),
          c = (0, o.useRef)(null),
          m = (0, o.useRef)(new Map()).current,
          g = (e) => -1 !== n.indexOf(e),
          v = (0, o.useRef)({
            toastKey: 1,
            displayedToast: 0,
            count: 0,
            queue: [],
            props: e,
            containerId: null,
            isToastActive: g,
            getToast: (e) => m.get(e),
          }).current;
        function h(e) {
          let { containerId: t } = e;
          const { limit: n } = v.props;
          !n ||
            (t && v.containerId !== t) ||
            ((v.count -= v.queue.length), (v.queue = []));
        }
        function y(e) {
          r((t) => (null == e ? [] : t.filter((t) => t !== e)));
        }
        function T() {
          const {
            toastContent: e,
            toastProps: t,
            staleId: n,
          } = v.queue.shift();
          C(e, t, n);
        }
        function b(e, n) {
          let { delay: r, staleId: g, ...h } = n;
          if (
            !u(e) ||
            (function (e) {
              return (
                !c.current ||
                (v.props.enableMultiContainer &&
                  e.containerId !== v.props.containerId) ||
                (m.has(e.toastId) && null == e.updateId)
              );
            })(h)
          )
            return;
          const { toastId: b, updateId: E, data: k } = h,
            { props: S } = v,
            P = () => y(b),
            w = null == E;
          w && v.count++;
          const I = {
            ...S,
            style: S.toastStyle,
            key: v.toastKey++,
            ...h,
            toastId: b,
            updateId: E,
            data: k,
            closeToast: P,
            isIn: !1,
            className: l(h.className || S.toastClassName),
            bodyClassName: l(h.bodyClassName || S.bodyClassName),
            progressClassName: l(h.progressClassName || S.progressClassName),
            autoClose:
              !h.isLoading &&
              ((A = h.autoClose),
              (x = S.autoClose),
              !1 === A || (a(A) && A > 0) ? A : x),
            deleteToast() {
              const e = d(m.get(b), "removed");
              m.delete(b), p.emit(4, e);
              const n = v.queue.length;
              if (
                ((v.count =
                  null == b ? v.count - v.displayedToast : v.count - 1),
                v.count < 0 && (v.count = 0),
                n > 0)
              ) {
                const e = null == b ? v.props.limit : 1;
                if (1 === n || 1 === e) v.displayedToast++, T();
                else {
                  const t = e > n ? n : e;
                  v.displayedToast = t;
                  for (let e = 0; e < t; e++) T();
                }
              } else t();
            },
          };
          var A, x;
          (I.iconOut = (function (e) {
            let { theme: t, type: n, isLoading: r, icon: l } = e,
              u = null;
            const c = { theme: t, type: n };
            return (
              !1 === l ||
                (s(l)
                  ? (u = l(c))
                  : (0, o.isValidElement)(l)
                  ? (u = (0, o.cloneElement)(l, c))
                  : i(l) || a(l)
                  ? (u = l)
                  : r
                  ? (u = f.spinner())
                  : ((e) => e in f)(n) && (u = f[n](c))),
              u
            );
          })(I)),
            s(h.onOpen) && (I.onOpen = h.onOpen),
            s(h.onClose) && (I.onClose = h.onClose),
            (I.closeButton = S.closeButton),
            !1 === h.closeButton || u(h.closeButton)
              ? (I.closeButton = h.closeButton)
              : !0 === h.closeButton &&
                (I.closeButton = !u(S.closeButton) || S.closeButton);
          let M = e;
          (0, o.isValidElement)(e) && !i(e.type)
            ? (M = (0, o.cloneElement)(e, {
                closeToast: P,
                toastProps: I,
                data: k,
              }))
            : s(e) && (M = e({ closeToast: P, toastProps: I, data: k })),
            S.limit && S.limit > 0 && v.count > S.limit && w
              ? v.queue.push({ toastContent: M, toastProps: I, staleId: g })
              : a(r)
              ? setTimeout(() => {
                  C(M, I, g);
                }, r)
              : C(M, I, g);
        }
        function C(e, t, n) {
          const { toastId: o } = t;
          n && m.delete(n);
          const a = { content: e, props: t };
          m.set(o, a),
            r((e) => [...e, o].filter((e) => e !== n)),
            p.emit(4, d(a, null == a.props.updateId ? "added" : "updated"));
        }
        return (
          (0, o.useEffect)(
            () => (
              (v.containerId = e.containerId),
              p
                .cancelEmit(3)
                .on(0, b)
                .on(1, (e) => c.current && y(e))
                .on(5, h)
                .emit(2, v),
              () => {
                m.clear(), p.emit(3, v);
              }
            ),
            []
          ),
          (0, o.useEffect)(() => {
            (v.props = e), (v.isToastActive = g), (v.displayedToast = n.length);
          }),
          {
            getToastToRender: function (t) {
              const n = new Map(),
                o = Array.from(m.values());
              return (
                e.newestOnTop && o.reverse(),
                o.forEach((e) => {
                  const { position: t } = e.props;
                  n.has(t) || n.set(t, []), n.get(t).push(e);
                }),
                Array.from(n, (e) => t(e[0], e[1]))
              );
            },
            containerRef: c,
            isToastActive: g,
          }
        );
      }
      function v(e) {
        return e.targetTouches && e.targetTouches.length >= 1
          ? e.targetTouches[0].clientX
          : e.clientX;
      }
      function h(e) {
        return e.targetTouches && e.targetTouches.length >= 1
          ? e.targetTouches[0].clientY
          : e.clientY;
      }
      function y(e) {
        const [t, n] = (0, o.useState)(!1),
          [r, a] = (0, o.useState)(!1),
          i = (0, o.useRef)(null),
          l = (0, o.useRef)({
            start: 0,
            x: 0,
            y: 0,
            delta: 0,
            removalDistance: 0,
            canCloseOnClick: !0,
            canDrag: !1,
            boundingRect: null,
            didMove: !1,
          }).current,
          u = (0, o.useRef)(e),
          {
            autoClose: c,
            pauseOnHover: d,
            closeToast: p,
            onClick: m,
            closeOnClick: f,
          } = e;
        function g(t) {
          if (e.draggable) {
            "touchstart" === t.nativeEvent.type &&
              t.nativeEvent.preventDefault(),
              (l.didMove = !1),
              document.addEventListener("mousemove", C),
              document.addEventListener("mouseup", E),
              document.addEventListener("touchmove", C),
              document.addEventListener("touchend", E);
            const n = i.current;
            (l.canCloseOnClick = !0),
              (l.canDrag = !0),
              (l.boundingRect = n.getBoundingClientRect()),
              (n.style.transition = ""),
              (l.x = v(t.nativeEvent)),
              (l.y = h(t.nativeEvent)),
              "x" === e.draggableDirection
                ? ((l.start = l.x),
                  (l.removalDistance =
                    n.offsetWidth * (e.draggablePercent / 100)))
                : ((l.start = l.y),
                  (l.removalDistance =
                    n.offsetHeight *
                    (80 === e.draggablePercent
                      ? 1.5 * e.draggablePercent
                      : e.draggablePercent / 100)));
          }
        }
        function y(t) {
          if (l.boundingRect) {
            const { top: n, bottom: o, left: r, right: a } = l.boundingRect;
            "touchend" !== t.nativeEvent.type &&
            e.pauseOnHover &&
            l.x >= r &&
            l.x <= a &&
            l.y >= n &&
            l.y <= o
              ? b()
              : T();
          }
        }
        function T() {
          n(!0);
        }
        function b() {
          n(!1);
        }
        function C(n) {
          const o = i.current;
          l.canDrag &&
            o &&
            ((l.didMove = !0),
            t && b(),
            (l.x = v(n)),
            (l.y = h(n)),
            (l.delta =
              "x" === e.draggableDirection ? l.x - l.start : l.y - l.start),
            l.start !== l.x && (l.canCloseOnClick = !1),
            (o.style.transform = `translate${e.draggableDirection}(${l.delta}px)`),
            (o.style.opacity =
              "" + (1 - Math.abs(l.delta / l.removalDistance))));
        }
        function E() {
          document.removeEventListener("mousemove", C),
            document.removeEventListener("mouseup", E),
            document.removeEventListener("touchmove", C),
            document.removeEventListener("touchend", E);
          const t = i.current;
          if (l.canDrag && l.didMove && t) {
            if (((l.canDrag = !1), Math.abs(l.delta) > l.removalDistance))
              return a(!0), void e.closeToast();
            (t.style.transition = "transform 0.2s, opacity 0.2s"),
              (t.style.transform = `translate${e.draggableDirection}(0)`),
              (t.style.opacity = "1");
          }
        }
        (0, o.useEffect)(() => {
          u.current = e;
        }),
          (0, o.useEffect)(
            () => (
              i.current && i.current.addEventListener("d", T, { once: !0 }),
              s(e.onOpen) &&
                e.onOpen((0, o.isValidElement)(e.children) && e.children.props),
              () => {
                const e = u.current;
                s(e.onClose) &&
                  e.onClose(
                    (0, o.isValidElement)(e.children) && e.children.props
                  );
              }
            ),
            []
          ),
          (0, o.useEffect)(
            () => (
              e.pauseOnFocusLoss &&
                (document.hasFocus() || b(),
                window.addEventListener("focus", T),
                window.addEventListener("blur", b)),
              () => {
                e.pauseOnFocusLoss &&
                  (window.removeEventListener("focus", T),
                  window.removeEventListener("blur", b));
              }
            ),
            [e.pauseOnFocusLoss]
          );
        const k = {
          onMouseDown: g,
          onTouchStart: g,
          onMouseUp: y,
          onTouchEnd: y,
        };
        return (
          c && d && ((k.onMouseEnter = b), (k.onMouseLeave = T)),
          f &&
            (k.onClick = (e) => {
              m && m(e), l.canCloseOnClick && p();
            }),
          {
            playToast: T,
            pauseToast: b,
            isRunning: t,
            preventExitTransition: r,
            toastRef: i,
            eventHandlers: k,
          }
        );
      }
      function T(e) {
        let { closeToast: t, theme: n, ariaLabel: r = "close" } = e;
        return o.createElement(
          "button",
          {
            className: `Toastify__close-button Toastify__close-button--${n}`,
            type: "button",
            onClick: (e) => {
              e.stopPropagation(), t(e);
            },
            "aria-label": r,
          },
          o.createElement(
            "svg",
            { "aria-hidden": "true", viewBox: "0 0 14 16" },
            o.createElement("path", {
              fillRule: "evenodd",
              d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z",
            })
          )
        );
      }
      function b(e) {
        let {
          delay: t,
          isRunning: n,
          closeToast: a,
          type: i = "default",
          hide: l,
          className: u,
          style: c,
          controlledProgress: d,
          progress: p,
          rtl: m,
          isIn: f,
          theme: g,
        } = e;
        const v = l || (d && 0 === p),
          h = {
            ...c,
            animationDuration: `${t}ms`,
            animationPlayState: n ? "running" : "paused",
            opacity: v ? 0 : 1,
          };
        d && (h.transform = `scaleX(${p})`);
        const y = (0, r.default)(
            "Toastify__progress-bar",
            d
              ? "Toastify__progress-bar--controlled"
              : "Toastify__progress-bar--animated",
            `Toastify__progress-bar-theme--${g}`,
            `Toastify__progress-bar--${i}`,
            { "Toastify__progress-bar--rtl": m }
          ),
          T = s(u)
            ? u({ rtl: m, type: i, defaultClassName: y })
            : (0, r.default)(y, u);
        return o.createElement("div", {
          role: "progressbar",
          "aria-hidden": v ? "true" : "false",
          "aria-label": "notification timer",
          className: T,
          style: h,
          [d && p >= 1 ? "onTransitionEnd" : "onAnimationEnd"]:
            d && p < 1
              ? null
              : () => {
                  f && a();
                },
        });
      }
      const C = (e) => {
          const {
              isRunning: t,
              preventExitTransition: n,
              toastRef: a,
              eventHandlers: i,
            } = y(e),
            {
              closeButton: l,
              children: u,
              autoClose: c,
              onClick: d,
              type: p,
              hideProgressBar: m,
              closeToast: f,
              transition: g,
              position: v,
              className: h,
              style: C,
              bodyClassName: E,
              bodyStyle: k,
              progressClassName: S,
              progressStyle: P,
              updateId: w,
              role: I,
              progress: A,
              rtl: x,
              toastId: M,
              deleteToast: R,
              isIn: O,
              isLoading: Z,
              iconOut: L,
              closeOnClick: B,
              theme: N,
            } = e,
            z = (0, r.default)(
              "Toastify__toast",
              `Toastify__toast-theme--${N}`,
              `Toastify__toast--${p}`,
              { "Toastify__toast--rtl": x },
              { "Toastify__toast--close-on-click": B }
            ),
            _ = s(h)
              ? h({ rtl: x, position: v, type: p, defaultClassName: z })
              : (0, r.default)(z, h),
            D = !!A || !c,
            F = { closeToast: f, type: p, theme: N };
          let $ = null;
          return (
            !1 === l ||
              ($ = s(l)
                ? l(F)
                : (0, o.isValidElement)(l)
                ? (0, o.cloneElement)(l, F)
                : T(F)),
            o.createElement(
              g,
              {
                isIn: O,
                done: R,
                position: v,
                preventExitTransition: n,
                nodeRef: a,
              },
              o.createElement(
                "div",
                { id: M, onClick: d, className: _, ...i, style: C, ref: a },
                o.createElement(
                  "div",
                  {
                    ...(O && { role: I }),
                    className: s(E)
                      ? E({ type: p })
                      : (0, r.default)("Toastify__toast-body", E),
                    style: k,
                  },
                  null != L &&
                    o.createElement(
                      "div",
                      {
                        className: (0, r.default)("Toastify__toast-icon", {
                          "Toastify--animate-icon Toastify__zoom-enter": !Z,
                        }),
                      },
                      L
                    ),
                  o.createElement("div", null, u)
                ),
                $,
                o.createElement(b, {
                  ...(w && !D ? { key: `pb-${w}` } : {}),
                  rtl: x,
                  theme: N,
                  delay: c,
                  isRunning: t,
                  isIn: O,
                  closeToast: f,
                  hide: m,
                  type: p,
                  style: P,
                  className: S,
                  controlledProgress: D,
                  progress: A || 0,
                })
              )
            )
          );
        },
        E = function (e, t) {
          return (
            void 0 === t && (t = !1),
            {
              enter: `Toastify--animate Toastify__${e}-enter`,
              exit: `Toastify--animate Toastify__${e}-exit`,
              appendPosition: t,
            }
          );
        },
        k = c(E("bounce", !0)),
        S =
          (c(E("slide", !0)),
          c(E("zoom")),
          c(E("flip")),
          (0, o.forwardRef)((e, t) => {
            const {
                getToastToRender: n,
                containerRef: a,
                isToastActive: i,
              } = g(e),
              { className: u, style: c, rtl: d, containerId: p } = e;
            function m(e) {
              const t = (0, r.default)(
                "Toastify__toast-container",
                `Toastify__toast-container--${e}`,
                { "Toastify__toast-container--rtl": d }
              );
              return s(u)
                ? u({ position: e, rtl: d, defaultClassName: t })
                : (0, r.default)(t, l(u));
            }
            return (
              (0, o.useEffect)(() => {
                t && (t.current = a.current);
              }, []),
              o.createElement(
                "div",
                { ref: a, className: "Toastify", id: p },
                n((e, t) => {
                  const n = t.length
                    ? { ...c }
                    : { ...c, pointerEvents: "none" };
                  return o.createElement(
                    "div",
                    { className: m(e), style: n, key: `container-${e}` },
                    t.map((e, n) => {
                      let { content: r, props: a } = e;
                      return o.createElement(
                        C,
                        {
                          ...a,
                          isIn: i(a.toastId),
                          style: {
                            ...a.style,
                            "--nth": n + 1,
                            "--len": t.length,
                          },
                          key: `toast-${a.key}`,
                        },
                        r
                      );
                    })
                  );
                })
              )
            );
          }));
      (S.displayName = "ToastContainer"),
        (S.defaultProps = {
          position: "top-right",
          transition: k,
          autoClose: 5e3,
          closeButton: T,
          pauseOnHover: !0,
          pauseOnFocusLoss: !0,
          closeOnClick: !0,
          draggable: !0,
          draggablePercent: 80,
          draggableDirection: "x",
          role: "alert",
          theme: "light",
        });
      let P,
        w = new Map(),
        I = [],
        A = 1;
      function x() {
        return "" + A++;
      }
      function M(e) {
        return e && (i(e.toastId) || a(e.toastId)) ? e.toastId : x();
      }
      function R(e, t) {
        return (
          w.size > 0 ? p.emit(0, e, t) : I.push({ content: e, options: t }),
          t.toastId
        );
      }
      function O(e, t) {
        return { ...t, type: (t && t.type) || e, toastId: M(t) };
      }
      function Z(e) {
        return (t, n) => R(t, O(e, n));
      }
      function L(e, t) {
        return R(e, O("default", t));
      }
      (L.loading = (e, t) =>
        R(
          e,
          O("default", {
            isLoading: !0,
            autoClose: !1,
            closeOnClick: !1,
            closeButton: !1,
            draggable: !1,
            ...t,
          })
        )),
        (L.promise = function (e, t, n) {
          let o,
            { pending: r, error: a, success: l } = t;
          r &&
            (o = i(r) ? L.loading(r, n) : L.loading(r.render, { ...n, ...r }));
          const u = {
              isLoading: null,
              autoClose: null,
              closeOnClick: null,
              closeButton: null,
              draggable: null,
              delay: 100,
            },
            c = (e, t, r) => {
              if (null == t) return void L.dismiss(o);
              const a = { type: e, ...u, ...n, data: r },
                s = i(t) ? { render: t } : t;
              return (
                o ? L.update(o, { ...a, ...s }) : L(s.render, { ...a, ...s }), r
              );
            },
            d = s(e) ? e() : e;
          return (
            d.then((e) => c("success", l, e)).catch((e) => c("error", a, e)), d
          );
        }),
        (L.success = Z("success")),
        (L.info = Z("info")),
        (L.error = Z("error")),
        (L.warning = Z("warning")),
        (L.warn = L.warning),
        (L.dark = (e, t) => R(e, O("default", { theme: "dark", ...t }))),
        (L.dismiss = (e) => {
          w.size > 0
            ? p.emit(1, e)
            : (I = I.filter((t) => null != e && t.options.toastId !== e));
        }),
        (L.clearWaitingQueue = function (e) {
          return void 0 === e && (e = {}), p.emit(5, e);
        }),
        (L.isActive = (e) => {
          let t = !1;
          return (
            w.forEach((n) => {
              n.isToastActive && n.isToastActive(e) && (t = !0);
            }),
            t
          );
        }),
        (L.update = function (e, t) {
          void 0 === t && (t = {}),
            setTimeout(() => {
              const n = (function (e, t) {
                let { containerId: n } = t;
                const o = w.get(n || P);
                return o && o.getToast(e);
              })(e, t);
              if (n) {
                const { props: o, content: r } = n,
                  a = { ...o, ...t, toastId: t.toastId || e, updateId: x() };
                a.toastId !== e && (a.staleId = e);
                const i = a.render || r;
                delete a.render, R(i, a);
              }
            }, 0);
        }),
        (L.done = (e) => {
          L.update(e, { progress: 1 });
        }),
        (L.onChange = (e) => (
          p.on(4, e),
          () => {
            p.off(4, e);
          }
        )),
        (L.POSITION = {
          TOP_LEFT: "top-left",
          TOP_RIGHT: "top-right",
          TOP_CENTER: "top-center",
          BOTTOM_LEFT: "bottom-left",
          BOTTOM_RIGHT: "bottom-right",
          BOTTOM_CENTER: "bottom-center",
        }),
        (L.TYPE = {
          INFO: "info",
          SUCCESS: "success",
          WARNING: "warning",
          ERROR: "error",
          DEFAULT: "default",
        }),
        p
          .on(2, (e) => {
            (P = e.containerId || e),
              w.set(P, e),
              I.forEach((e) => {
                p.emit(0, e.content, e.options);
              }),
              (I = []);
          })
          .on(3, (e) => {
            w.delete(e.containerId || e),
              0 === w.size && p.off(0).off(1).off(5);
          });
    },
  },
]);
