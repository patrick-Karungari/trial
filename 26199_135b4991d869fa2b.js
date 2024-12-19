"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [26199],
  {
    626199: function (e, a, t) {
      (a.L7 = l),
        (a.Hz = E),
        (a.WG = function (e) {
          return e.map(E);
        });
      var n = T(t(298784)),
        i = t(599789),
        o = t(167469),
        s = t(204864),
        r = t(963494),
        _ = t(791257),
        c = T(t(210918)),
        d = t(762636);
      function T(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function l(e) {
        const a = Object.assign({}, e),
          t = a.type || a.taskType;
        if ([o.TaskType.NamedEntityRecognition].includes(t)) return a;
        const i =
            ("user" in e && e.user === c.default.SnowfallGov) ||
            d.preferNotConvertedStudio(a, e),
          _ = n.default.reverse(
            n.default.sortBy(a.attachmentS3Downloads, (e) =>
              i ? e.isConvertedImage : !e.isConvertedImage
            )
          ),
          T = new Map(n.default.map(_, (e) => [p(e.attachmentURL), e]));
        function l(e) {
          const a = T.get(p(e));
          return a ? a.s3URL : e;
        }
        if (
          t === o.TaskType.TextCollection ||
          (a.params.attachments && t === o.TaskType.GenericDataCollection)
        )
          a.params.attachments = a.params.attachments.map(function (e) {
            if (e.type === r.TextCollectionAttachmentType.PDF) {
              const t = n.default.filter(
                  a.attachmentS3Downloads,
                  (a) => a.attachmentURL === e.content
                ),
                i = n.default.find(
                  t,
                  (e) => "image/jpeg" === e.metadata?.mimeType
                ),
                o = n.default.find(t, (e) => !e.isConvertedImage);
              return {
                ...e,
                content: o?.s3URL ?? e.content,
                jpegUrl: i?.s3URL,
              };
            }
            return r.TextCollectionInternalAttachmentTypes.includes(e.type)
              ? { ...e, content: l(e.content) }
              : e;
          });
        else if (t === o.TaskType.DocumentTranscription)
          a.params.attachments = n.default.flatMap(a.params.attachments, (e) =>
            (function (e) {
              const t =
                n.default.find(a.attachmentS3Downloads, (a) =>
                  s.compareS3URLWithoutRegion(a.attachmentURL, e)
                )?.metadata?.totalFrames ?? 1;
              if (t <= 1) return [l(e)];
              const i = [];
              for (let o = 0; o < t; o++) {
                const t = n.default.find(
                  a.attachmentS3Downloads,
                  (a) =>
                    s.compareS3URLWithoutRegion(a.attachmentURL, e) &&
                    a.metadata?.frame === o
                );
                if (!t) return [e];
                i.push(t.s3URL);
              }
              return i;
            })(e)
          );
        else {
          if (t === o.TaskType.DocumentModel) return a;
          a.params.attachment
            ? (a.params.attachment = l(a.params.attachment))
            : a.params.attachments &&
              (a.params.attachments = a.params.attachments.map(l));
        }
        return (
          a.params.context_attachments &&
            (a.params.context_attachments = a.params.context_attachments.map(
              (e) => ({
                ...e,
                attachment: l(e.attachment),
                thumbnail: e.thumbnail ? l(e.thumbnail) : void 0,
              })
            )),
          a
        );
      }
      function E(e) {
        if (
          e.isNormalizedAssignment ||
          e.assignmentType === i.AssignmentType.Course
        )
          return { subtasks: [], ...e };
        const a = _.isLegacyReviewAssignment(e),
          t = a
            ? (function (e) {
                const a = {
                  ...e.subtask,
                  attemptId: e._id,
                  attemptVersion: e.attemptVersion,
                  fixResponse: e.response,
                  timeSpentSecs: e.timeSpentSecs,
                  attemptedBy: e.attemptedBy,
                  audioAlignment: e.audioAlignment,
                  isReviewFix: e.isReviewFix,
                  reviewers: e.reviewers,
                  instruction:
                    n.default.get(e, "benchmark.instruction") ||
                    n.default.get(e, "subtask.instruction") ||
                    e.instruction,
                  skippable: !0,
                  batchSkippable: e.batchSkippable,
                  batchSkipText: e.batchSkipText,
                  batch: e.batchId,
                  claimed_until: e.claimed_until,
                  rejectedReviewer: e.rejectedReviewer,
                  isEscalatedTask: e.isEscalatedTask,
                  lintVerdict: e.confidenceScores?.lintVerdict,
                  lintResults: e.confidenceScores?.lintResults,
                  bid: e.bid,
                  isScaleStudio: e.isScaleStudio,
                  isPipelineV3HumanNode: e.isPipelineV3HumanNode,
                  useMultiReplicaView: e.useMultiReplicaView,
                  canQuarantine: e.canQuarantine,
                  numEnforcedApprovals: e.numEnforcedApprovals,
                  childIds: e.childIds,
                  maxReplicasEditable: e.maxReplicasEditable,
                  canExitTask: e.canExitTask,
                };
                return (
                  e.assignmentType === i.AssignmentType.PipelineStage &&
                    ((a.assignmentType = i.AssignmentType.PipelineStage),
                    (a.attemptId = e.attemptId),
                    (a.id = e.id),
                    (a._id = e._id)),
                  e.rateConsent && (a.rateConsent = e.rateConsent),
                  a
                );
              })(e)
            : e,
          o = n.default.compact(
            n.default.map(t.attachmentS3Downloads, (e) => e.ocrTextUrl)
          );
        let s;
        try {
          s = l(t);
        } catch (r) {
          s = {};
        }
        return {
          subtasks: [],
          ...t,
          ...s,
          isReviewMode: a,
          isNormalizedAssignment: !0,
          ocrTextUrls: o,
        };
      }
      const p = (e) => {
        if (e.indexOf("?") > 0) return e;
        try {
          const a = s.fromS3Url(e);
          return void 0 === a.Key ? e : `s3://${a.Bucket}/${a.Key}`;
        } catch {
          return e;
        }
      };
    },
    762636: function (e, a, t) {
      Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.preferNotConvertedStudio = void 0);
      var n,
        i = (n = t(298784)) && n.__esModule ? n : { default: n },
        o = t(771835);
      a.preferNotConvertedStudio = (e, a) => {
        const t = e.type || e.taskType;
        if (!e.attachmentS3Downloads) return !1;
        const n = i.default.some(
          e.attachmentS3Downloads.map(
            (e) => "image/png" === e?.metadata?.mimeType
          )
        );
        return !!(
          "isScaleStudio" in a &&
          a.isScaleStudio &&
          n &&
          o.PREFER_UNCONVERTED_TASK_TYPES.includes(t)
        );
      };
    },
    791257: function (e, a) {
      Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.isLegacyReviewAssignment = function (e) {
          if (!e) return !1;
          if (Object.prototype.hasOwnProperty.call(e, "trainingType"))
            return !1;
          return (
            e.isReviewMode ||
            Object.prototype.hasOwnProperty.call(e, "taskType")
          );
        });
    },
    210918: function (e, a, t) {
      Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.isBulba = function (e) {
          return [i.BulbaAPI, i.BulbaInternal, i.Vertigo].includes(e);
        }),
        (a.isAnyGaiusCustomerId = function (e) {
          return [i.BulbaAPI, i.BulbaInternal, i.Vertigo].includes(e);
        }),
        (a.getEmojiNameFromId = function (e) {
          return o.default.findKey(i, (a) => a === e);
        }),
        (a.getLidarNickname = c),
        (a.getSpecificLidarNickname = function (e, a, t) {
          const n = c(e, a, t);
          if (n.emoji.includes(d.all.emoji)) return null;
          return n;
        }),
        (a.default =
          a.CLONE_TO_TEST_ALLOWED =
          a.SHOULD_LOG_ATTEMPT_IP_ADDRESS =
            void 0);
      var n,
        i,
        o = (n = t(298784)) && n.__esModule ? n : { default: n },
        s = t(167469);
      !(function (e) {
        (e.Aquarius = "5c1c2b4532b0ea001bf4da3d"),
          (e.Baboon = "5db2cd5055a4e31032682bbc"),
          (e.Cat = "5acf929a64e1d4002e0f935f"),
          (e.Bear = "5a723403456ed8003c67be86"),
          (e.Bee = "5bc63d6767eca8001344de1e"),
          (e.Swan = "59f9fa67b9ad8e0007866a85"),
          (e.Sheep = "58ed4d04612956060087d3d7"),
          (e.Dolphin = "5a011a3a9dbd8000077fe2ad"),
          (e.Dragon = "5c4f9253954f0c00379a376b"),
          (e.Mammoth = "594ab13cf54210060008fb06"),
          (e.Bunny = "59f11892c11cb20007a6998a"),
          (e.Cow = "593786157da82b0600b0cb91"),
          (e.Dragonfruit = "5e1e36d63eef5d0024b26df1"),
          (e.Unicorn = "5b2809b5f4f3650043b7a0aa"),
          (e.Tiger = "5c803c46b9a67b0030de0e2e"),
          (e.Turtle = "59c409466989a20007b2ab99"),
          (e.Panda = "5a74d68c4f2d42002edd7c5d"),
          (e.Rose = "5a42b6e83bdda1004395c030"),
          (e.Owl = "5b60afa449d5be00354b1a7b"),
          (e.Whale = "5b9c124a14765100185e5135"),
          (e.Parrot = "595e80c10f720e06006fdbcb"),
          (e.Aries = "5df45dd39de2830024d6511f"),
          (e.Goat = "5e458869388cce00106de423"),
          (e.Narwhal = "5cc9e854f2ea2f3e2b36dd99"),
          (e.Pegasus = "5e8e9fd6da5f2a002461602e"),
          (e.MammothMapping = "5d77bf3ee4d6310f31120843"),
          (e.SnowfallGov = "5f7ddfd978cbd700117b6693"),
          (e.SnowfallComm = "5ea22dd7d0d41600259e9ec1"),
          (e.Comet = "5e0116f83b4a3c002b614490"),
          (e.Pisces = "5f5a3367c8f71e003368cea2"),
          (e.Cherry = "5fa1e7f354260c0024f79aaa"),
          (e.CherryINF = "6165be39e7bd52002697ffe1"),
          (e.AlpacaScout = "5fd2a09881fc4d0026648184"),
          (e.Flamingo = "604fe254515cf9002c139543"),
          (e.FlamingoLDC = "62226cb1372263002bf2ff5f"),
          (e.Imbe = "602b6a5a2c4ed5001ffc8cc6"),
          (e.Goose = "631273594bb9c9001e219368"),
          (e.GooseInternal = "630e96d250502e0025f3bee5"),
          (e.BeeTTS = "619453fb628b9200344887e2"),
          (e.Meerkat = "5e7e3a9b880a410039891558"),
          (e.Crab = "61d74737b419c3002a50e31a"),
          (e.Firefly = "62841453dcebd300381e439d"),
          (e.Woodpecker = "6400fc7c4fe0877d5be8b6e0"),
          (e.Anteater = "635bf8d92ebd52001b8ddf88"),
          (e.DolphinDM = "64aee671a11f9ec0a712e9ab"),
          (e.DolphinDMTest = "64aee6c886bf0f6277623f99"),
          (e.DolpingDMY = "64b743ff8b1127dc02f3e12f"),
          (e.BulbaAPI = "6463e58315d308d12ddb5385"),
          (e.BulbaInternal = "6441799e5a80c2d2db8f059a"),
          (e.BulbaMagiInternal = "661ed3275679fe2e05db1573"),
          (e.Vertigo = "651cacc71df36808ab1c4077"),
          (e.BeeRLHF = "64b1f19c03acceba05b657ab"),
          (e.KendallTest = "609ad873258922001f6827ed"),
          (e.FatihTest = "602c313cc04b490033278471"),
          (e.Abra = "6430567a9751672ff435516e"),
          (e.Leopard = "618c480c1e800f0018e4a175"),
          (e.OTS = "65cbc42b32ffab95dd54b864"),
          (e.Nightingale = "662005ae508385f9a06bbbf5");
      })(i || (i = {}));
      const r = {
        [i.BeeTTS]: !0,
        [i.Goose]: !0,
        [i.GooseInternal]: !0,
        [i.Meerkat]: !0,
      };
      a.SHOULD_LOG_ATTEMPT_IP_ADDRESS = r;
      const _ = { [i.Bee]: !0, [i.Rose]: !0, [i.Panda]: !0 };
      function c(e, a, t) {
        let n = d.all;
        return (
          a && o.default.has(T, a)
            ? (n = T[a])
            : o.default.has(d, e) &&
              ((n = d[e]),
              t === s.TaskType.LidarSegmentation &&
                (n = {
                  name: n.name + " Segmentation",
                  emoji: n.emoji + " \ud83d\udd8c\ufe0f",
                })),
          n
        );
      }
      a.CLONE_TO_TEST_ALLOWED = _;
      const d = Object.freeze({
          "57fbc670e27e100600947ed7": { emoji: "\ud83e\udd87", name: "Bat" },
          "59c409466989a20007b2ab99": { emoji: "\ud83d\udc22", name: "Turtle" },
          "5a1603f8bcef210014ae86a1": {
            emoji: "\ud83d\udc18",
            name: "Elephant",
          },
          "58ed4d04612956060087d3d7": { emoji: "\ud83d\udc11", name: "Sheep" },
          "594ab13cf54210060008fb06": {
            emoji: "\ud83d\udc17",
            name: "Mammoth",
          },
          "5b9c2cdf36c379002dd94192": { emoji: "\ud83e\udd81", name: "Lion" },
          "59f9fa67b9ad8e0007866a85": { emoji: "\ud83e\udda2", name: "Swan" },
          "5a74d68c4f2d42002edd7c5d": { emoji: "\ud83d\udc3c", name: "Panda" },
          "59f11892c11cb20007a6998a": { emoji: "\ud83d\udc30", name: "Bunny" },
          "595e80c10f720e06006fdbcb": { emoji: "\ud83e\udd9c", name: "Parrot" },
          "599b58ccd852cb270030aee3": { emoji: "\ud83d\ude80", name: "Rocket" },
          "5acf929a64e1d4002e0f935f": { emoji: "\ud83d\udc31", name: "Cat" },
          "5b2809b5f4f3650043b7a0aa": {
            emoji: "\ud83e\udd84",
            name: "Unicorn",
          },
          "5a011a3a9dbd8000077fe2ad": {
            emoji: "\ud83d\udc2c",
            name: "Dolphin",
          },
          "576b77ca9643d1bbac62c2b2": { emoji: "\ud83d\ude97", name: "Car" },
          "5a723403456ed8003c67be86": { emoji: "\ud83d\udc3b", name: "Bear" },
          "5bc63d6767eca8001344de1e": { emoji: "\ud83d\udc1d", name: "Bee" },
          "5a7e2ba7e17ec6003cd090f1": { emoji: "\ud83d\udc15", name: "Dog" },
          "5b98992e4687c4003fd34b4f": {
            emoji: "\ud83e\udd92",
            name: "Giraffe",
          },
          "5c09b2f617a6ff002b621e21": { emoji: "\ud83e\udd91", name: "Squid" },
          "5ca516e8d89a9d0072a38dd1": {
            emoji: "\ud83e\udd8d",
            name: "Gorilla",
          },
          "5b7d8ab66f6e61731b6ef3ef": { emoji: "\ud83e\udd93", name: "Zebra" },
          "5b33b91000424400353b2f8c": { emoji: "\ud83e\udd8a", name: "Fox" },
          "5b9c124a14765100185e5135": { emoji: "\ud83d\udc33", name: "Whale" },
          "5b760c7a5db4f3002e0614a7": {
            emoji: "\ud83e\udd89",
            name: "Nighthawk",
          },
          "5c803c46b9a67b0030de0e2e": { emoji: "\ud83d\udc2f", name: "Tiger" },
          "5c4f9253954f0c00379a376b": { emoji: "\ud83d\udc32", name: "Dragon" },
          "5b762d7b9510bc0027e8c603": { emoji: "\ud83e\udd93", name: "Zebra" },
          "5cc9e854f2ea2f3e2b36dd99": {
            emoji: "\ud83d\udc0b",
            name: "Narwhal",
          },
          all: { emoji: "\ud83c\udf0e", name: "GLOBAL" },
        }),
        T = {
          "5bf3862f5550ef0081599543": {
            name: "Turtle Smoke/Exhaust",
            emoji: "\ud83d\udca8",
          },
          "5bea7a9c4704bfb0b5acc5e0": {
            name: "Cat Regular Task",
            emoji: "\ud83d\udc31 \ud83c\udfce\ufe0f",
          },
          "5bea7a9d4704bfb0b5acc5e1": {
            name: "Cat Poles and Wall Corners",
            emoji: "\ud83d\udc31 \ud83e\uddf1",
          },
          "5dd5a1b906309b104b5129af": { name: "Falcon", emoji: "\ud83e\udd85" },
          "5dc5ed7998dc7d103919032b": { name: "Falcon", emoji: "\ud83e\udd85" },
          "5ef374788c378b03fae437fb": { name: "Falcon", emoji: "\ud83e\udd85" },
          "5ece16222f2dc45f916cee4f": {
            name: "Whale Pre Split Pedestrians",
            emoji: "\ud83d\udc33",
          },
          "5ece16222f2dc45f916cee4e": {
            name: "Whale Pre Split Vehicles",
            emoji: "\ud83d\udc33",
          },
          "5ece16222f2dc45f916cee50": {
            name: "Whale Pre Split Signs",
            emoji: "\ud83d\udc33",
          },
          "5ecf25a6140639001f233bad": {
            name: "Whale Post Split Vehicle",
            emoji: "\ud83d\udc33",
          },
          "5ed1076e0660970010728560": {
            name: "Whale Post Split Pedestrian",
            emoji: "\ud83d\udc33",
          },
          "5ed19a925c40380017daa383": {
            name: "Whale Post Split Sign",
            emoji: "\ud83d\udc33",
          },
          "5ec03e6c3765ee4fc1900a8a": {
            name: "Whale Single Path Pedestrian",
            emoji: "\ud83d\udc33",
          },
          "5ec03e6c3765ee4fc1900a88": {
            name: "Whale Single Path Sign",
            emoji: "\ud83d\udc33",
          },
          "5ec03e6c3765ee4fc1900a89": {
            name: "Whale Single Path Vehicle",
            emoji: "\ud83d\udc33",
          },
          "5fa0d52b32a5fd98ff91dd90": {
            name: "Bee recall only sub specialization other",
            emoji: "\ud83d\udc1d ",
          },
          "5f7d5670f9e25e002e5a859a": {
            name: "Bee recall only",
            emoji: "\ud83d\udc1d ",
          },
          "5fa0d52932a5fd98ff91dd78": {
            name: "Bee recall only sub specialization pedestrian",
            emoji: "\ud83d\udc1d ",
          },
          "5fa0d53032a5fd98ff91ddc0": {
            name: "Bee recall only sub specialization other pre split",
            emoji: "\ud83d\udc1d ",
          },
          "5fa0d53432a5fd98ff91ddf0": {
            name: "Bee recall only sub specialization other post split",
            emoji: "\ud83d\udc1d ",
          },
          "5fa0d52a32a5fd98ff91dd84": {
            name: "Bee recall only sub specialization sign",
            emoji: "\ud83d\udc1d ",
          },
          "5fa0d53332a5fd98ff91dde4": {
            name: "Bee recall only sub specialization sign post split",
            emoji: "\ud83d\udc1d ",
          },
          "5fa0d53232a5fd98ff91ddd8": {
            name: "Bee recall only sub specialization pedestrian post split",
            emoji: "\ud83d\udc1d ",
          },
          "5fa0d52d32a5fd98ff91dda8": {
            name: "Bee recall only sub specialization pedestrian pre split",
            emoji: "\ud83d\udc1d ",
          },
          "5fa0d52f32a5fd98ff91ddb4": {
            name: "Bee recall only sub specialization sign pre split",
            emoji: "\ud83d\udc1d ",
          },
          "5fa0d52c32a5fd98ff91dd9c": {
            name: "Bee recall only sub specialization vehicle pre split",
            emoji: "\ud83d\udc1d ",
          },
          "5fa0d53132a5fd98ff91ddcc": {
            name: "Bee recall only sub specialization vehicle post split",
            emoji: "\ud83d\udc1d ",
          },
          "5fa0d52732a5fd98ff91dd75": {
            name: "Bee recall only sub specialization vehicle",
            emoji: "\ud83d\udc1d ",
          },
          "5ffe36ccc0c38c00268f4c61": {
            name: "Bee Honeycomb Parent",
            emoji: "\ud83c\udf6f ",
          },
          "5ffe40355fc04773a34048d9": {
            name: "Bee Honeycomb Downsampled",
            emoji: "\ud83c\udf6f ",
          },
          "5ffe40355fc04773a34048dc": {
            name: "Bee Honeycomb Cropped",
            emoji: "\ud83c\udf6f ",
          },
          "5ffe40365fc04773a34048ef": {
            name: "Bee Honeycomb Merged",
            emoji: "\ud83c\udf6f ",
          },
          "60edcb2e683771882e4c5105": {
            name: "Bee Video Pedestrians Group",
            emoji: "\ud83d\udc1d",
          },
          "607f62a35e07d9002dc75be2": {
            name: "Bee Video Pedestrians Group",
            emoji: "\ud83d\udc1d",
          },
          "60edcb32683771882e4c5111": {
            name: "Official Bee Lidar Group No Attributes",
            emoji: "\ud83d\udc1d",
          },
          "60edcb2f683771882e4c5109": {
            name: "Bee Video Statics Group",
            emoji: "\ud83d\udc1d",
          },
          "607f6ae23e97b10048a9bdfb": {
            name: "Bee Video Statics Group",
            emoji: "\ud83d\udc1d",
          },
          "60edcb2c683771882e4c5101": {
            name: "Bee Video Vehicles Group",
            emoji: "\ud83d\udc1d",
          },
          "607f6b301f0c7c003dda4e46": {
            name: "Bee Video Vehicles Group",
            emoji: "\ud83d\udc1d",
          },
          "606b50111befe80027ee58d0": {
            name: "Bee Missing Objects Only Group",
            emoji: "\ud83d\udc1d",
          },
        };
      var l = i;
      a.default = l;
    },
    741722: function (e, a, t) {
      Object.defineProperty(a, "__esModule", { value: !0 }),
        Object.defineProperty(a, "BenchmarkingFrequency", {
          enumerable: !0,
          get: function () {
            return i.BenchmarkingFrequency;
          },
        }),
        Object.defineProperty(a, "BenchmarkingTrigger", {
          enumerable: !0,
          get: function () {
            return i.BenchmarkingTrigger;
          },
        }),
        Object.defineProperty(a, "RapidAllocationProjectLayerMeta", {
          enumerable: !0,
          get: function () {
            return i.RapidAllocationProjectLayerMeta;
          },
        }),
        Object.defineProperty(a, "RapidAllocationProjectMeta", {
          enumerable: !0,
          get: function () {
            return i.RapidAllocationProjectMeta;
          },
        }),
        Object.defineProperty(a, "RapidAllocationReviewLevels", {
          enumerable: !0,
          get: function () {
            return i.RapidAllocationReviewLevels;
          },
        }),
        Object.defineProperty(a, "RapidAllocationProjectMetaKeysList", {
          enumerable: !0,
          get: function () {
            return i.RapidAllocationProjectMetaKeysList;
          },
        }),
        (a.TaskSearchEnabledTaskTypes =
          a.MappingFieldDetails =
          a.MappingField =
          a.QueryBlockType =
          a.getValidMappingFields =
          a.DataType =
          a.Operator =
          a.isThreeDCaptioningProject =
          a.TAXONOMY_FIELDS_WITH_DEFAULTS =
          a.TAXONOMY_FIELDS =
          a.RapidProjectPipelines =
          a.RapidPlugAndPlayDatasetId =
          a.RapidPlugAndPlayDatasetCustomer =
          a.getRapidPlugAndPlayWorkerTeam =
          a.getPNPUseThreeColumn =
          a.getPNPUseSpecialPay =
          a.getPNPUseNormalRapid =
          a.RapidPlugAndPlayCategory =
          a.processPlugAndPlayCSV =
          a.PNPSampleHypothesis =
          a.RapidPNPProcessCSV =
          a.RapidPNPPromptSelect =
          a.RapidPlugAndPlayType =
          a.RapidProjectUseCase =
          a.TaskerQualifierTags =
          a.RAPID_ALLOCATION_MODEL_TEAM_IDS =
          a.ItemType =
          a.BenchmarkAlertTypeToSeverity =
          a.BenchmarkAlertTypeToMessage =
          a.BenchmarkAlertType =
          a.SEVERITIES_IN_ORDER =
          a.QualityQueueSeverity =
          a.BmTypeDisplay =
          a.RapidWindowedMetricType =
          a.RapidAbsoluteMetricType =
          a.RapidMetricWindowSize =
          a.BENCHMARKING_USER_EMAIL =
          a.BatchType =
          a.TriggerStatus =
          a.MAX_HISTORY_LENGTH =
          a.STARTING_THRESHOLD_RANGE =
          a.ACCURACY_BUCKET_LENGTH =
          a.ThresholdType =
          a.IdempotencyKey =
          a.TRIGGER_DOCUMENTATION =
          a.TEMP_TASK_PREVIEW_ASSET_ID =
          a.TEMP_THUMBNAIL_ASSET_STATIC_ID =
          a.BM_ALERT_DISMISS_MS =
          a.BM_ALERT_STALENESS_MS =
          a.MAX_QUALITY_ITEMS =
          a.MAX_PARAM_CHUNKS =
          a.MAX_ASSETS_PER_SFN =
          a.DEPRECATION_MESSAGE =
            void 0);
      var n = t(742988),
        i = t(167469);
      a.DEPRECATION_MESSAGE = "Contact Scale support for new project creation";
      a.MAX_ASSETS_PER_SFN = 2e4;
      a.MAX_PARAM_CHUNKS = 10;
      a.MAX_QUALITY_ITEMS = 20;
      a.BM_ALERT_STALENESS_MS = 36e5;
      a.BM_ALERT_DISMISS_MS = 2592e5;
      a.TEMP_THUMBNAIL_ASSET_STATIC_ID = "tempThumbnailAssetStaticId";
      a.TEMP_TASK_PREVIEW_ASSET_ID = "tempTaskPreviewAssetId";
      const o = {
        [i.BenchmarkingTrigger.CalibrationBatch1]:
          "Launches calibration batch 1 from an empty state",
        [i.BenchmarkingTrigger.ProductionBatch1]:
          "Launches production batch 1 once calibration batch 1 is completed",
        [i.BenchmarkingTrigger.ReportCalibrationBatch1]:
          "Report the results of calibration batch 1 (to Redash and Slack)",
        [i.BenchmarkingTrigger.ReportProductionBatch1]:
          "Report the results of production batch 1 (to Redash and Slack)",
        [i.BenchmarkingTrigger.CalibrationBatch2AfterProduction1]:
          "Launches calibration batch 2 once production batch 1 is completed",
        [i.BenchmarkingTrigger.ProductionBatch2AfterProduction1]:
          "Launches production batch 2 after production batch 1 is completed",
        [i.BenchmarkingTrigger.ReportCalibrationBatch2]:
          "Report the results of calibration batch 2 (to Redash and Slack)",
        [i.BenchmarkingTrigger.ReportProductionBatch2]:
          "Report the results of production batch 2 (to Redash and Slack)",
      };
      var s, r;
      (a.TRIGGER_DOCUMENTATION = o),
        (a.IdempotencyKey = s),
        (function (e) {
          (e.calibrationBatch = "rapid-create-instruction-batch"),
            (e.regularBatch = "rapid-create-regular-batch");
        })(s || (a.IdempotencyKey = s = {})),
        (a.ThresholdType = r),
        (function (e) {
          (e.AttempterDemotion = "attempterDemotion"),
            (e.AttempterPromotion = "attempterPromotion"),
            (e.ReviewerDemotion = "reviewerDemotion");
        })(r || (a.ThresholdType = r = {}));
      a.ACCURACY_BUCKET_LENGTH = 101;
      a.STARTING_THRESHOLD_RANGE = 0.25;
      var _, c;
      (a.MAX_HISTORY_LENGTH = 100),
        (a.TriggerStatus = _),
        (function (e) {
          (e.Scheduled = "scheduled"),
            (e.Executed = "executed"),
            (e.Resolved = "resolved");
        })(_ || (a.TriggerStatus = _ = {})),
        (a.BatchType = c),
        (function (e) {
          (e.Calibration = "calibration"), (e.Production = "production");
        })(c || (a.BatchType = c = {}));
      var d, T, l, E, p;
      (a.BENCHMARKING_USER_EMAIL = "rapid_benchmarking@scale.com"),
        (a.RapidMetricWindowSize = d),
        (function (e) {
          (e[(e.L1 = 1)] = "L1"),
            (e[(e.L7 = 7)] = "L7"),
            (e[(e.L14 = 14)] = "L14"),
            (e[(e.L30 = 30)] = "L30"),
            (e[(e.L60 = 60)] = "L60");
        })(d || (a.RapidMetricWindowSize = d = {})),
        (a.RapidAbsoluteMetricType = T),
        (function (e) {
          (e.AttemptDisableThreshold = "attemptdisablethreshold"),
            (e.AttemptPromoteThreshold = "attemptpromotethreshold"),
            (e.TaskAttemptDisableThreshold = "taskattemptdisablethreshold"),
            (e.TaskAttemptPromoteThreshold = "taskattemptpromotethreshold"),
            (e.ReviewDemoteThreshold = "reviewdemotethreshold"),
            (e.EdgeCaseSubtasksCreated = "edgecasesubtaskscreated"),
            (e.EdgeCasesConfirmedByTaskers = "edgecasesconfirmedbytaskers"),
            (e.EdgeCasesApprovedByCustomer = "edgecasesapprovedbycustomer"),
            (e.EdgeCasesRejectedByCustomer = "edgecasesrejectedbycustomer"),
            (e.EdgeCasesFixedByCustomer = "edgecasesfixedbycustomer"),
            (e.RapidometerBMAccuracy = "rapidometerbmaccuracy"),
            (e.RapidometerCalibrationAccuracy =
              "rapidometercalibrationaccuracy"),
            (e.RapidometerProductionAccuracy = "rapidometerproductionaccuracy"),
            (e.RapidometerCalibrationTATSeconds =
              "rapidometercalibrationtatseconds"),
            (e.RapidometerProductionTATSeconds =
              "rapidometerproductiontatseconds"),
            (e.RapidometerCalibrationMargins = "rapidometercalibrationmargins"),
            (e.RapidometerProductionMargins = "rapidometerproductionmargins");
        })(T || (a.RapidAbsoluteMetricType = T = {})),
        (a.RapidWindowedMetricType = l),
        (function (e) {
          (e.AttemptDisableThreshold = "attemptdisablethreshold"),
            (e.AttemptPromoteThreshold = "attemptpromotethreshold"),
            (e.TaskAttemptDisableThreshold = "taskattemptdisablethreshold"),
            (e.TaskAttemptPromoteThreshold = "taskattemptpromotethreshold"),
            (e.ReviewDemoteThreshold = "reviewdemotethreshold"),
            (e.EstimatedDataUsability = "estimateddatausability"),
            (e.EdgeCasesPendingTaskerReview = "edgecasespendingtaskerreview"),
            (e.EdgeCasesPendingCustomerReview =
              "edgecasespendingcustomerreview"),
            (e.BenchmarkCompleteness = "benchmarkcompleteness"),
            (e.EmpiricalAcceptance = "empiricalacceptance"),
            (e.QualityQueueBlockingAlerts = "qualityqueueblockingalerts"),
            (e.QualityQueueSevereAlerts = "qualityqueueseverealerts"),
            (e.QualityQueueRegularAlerts = "qualityqueueregularalerts");
        })(l || (a.RapidWindowedMetricType = l = {})),
        (a.BmTypeDisplay = E),
        (function (e) {
          (e.Training = "Training"),
            (e.CustomCourseScenario = "Custom Course"),
            (e.Attempter = "Initial Phase"),
            (e.Reviewer = "Review Phase"),
            (e.Disabled = "Disabled");
        })(E || (a.BmTypeDisplay = E = {})),
        (a.QualityQueueSeverity = p),
        (function (e) {
          (e.Blocking = "Blocking"),
            (e.Severe = "Severe"),
            (e.Regular = "Regular");
        })(p || (a.QualityQueueSeverity = p = {}));
      const m = [p.Blocking, p.Severe, p.Regular];
      var A;
      (a.SEVERITIES_IN_ORDER = m),
        (a.BenchmarkAlertType = A),
        (function (e) {
          (e.TaxonomyMismatch = "Taxonomy Mismatch"),
            (e.NonemptyInitialResponse = "Nonempty Initial Response"),
            (e.EmptyExpectedResponse = "Empty Expected Response"),
            (e.EqualInitialExpectedResponses =
              "Equal Initial Expected Responses"),
            (e.HighPassRate = "High Pass Rate"),
            (e.LowPassRate = "Low Pass Rate"),
            (e.LowSignal = "Low Signal"),
            (e.NoConcepts = "No Concepts"),
            (e.FailsValidators = "Fails Validators");
        })(A || (a.BenchmarkAlertType = A = {}));
      const u = Object.freeze({
        [A.TaxonomyMismatch]:
          'This task has different taxonomy than your project. We strongly recommend retiring or clicking "Copy project taxonomy" and then "Save" to update this task since it is not a perfect representation of a real task.',
        [A.NonemptyInitialResponse]:
          "Initial phase tasks should have empty initial responses to properly represent real tasks.",
        [A.EmptyExpectedResponse]:
          "Review phase tasks should generally have non-empty expected responses to evaluate contributors on.",
        [A.EqualInitialExpectedResponses]:
          "This task has the same initial and expected response. Either edit the task such that the initial and expected responses differ or retire it.",
        [A.HighPassRate]:
          "This task has a very high pass rate. This may potentially indicate that it is too easy and is not a good indicator of contributor quality.",
        [A.LowPassRate]:
          "This task has a very low pass rate. This may potentially indicate that the expected response is not set up correctly.",
        [A.LowSignal]:
          "This task might not be a good differentiator of contributor quality. Consider retiring and replacing with other quality tasks.",
        [A.NoConcepts]:
          "Add concepts to improve quality signals across your quality tasks. Concepts describe the quality task.",
        [A.FailsValidators]:
          "This quality task fails a validator you've configured on your project. Either edit the validator or the expected response accordingly.",
      });
      a.BenchmarkAlertTypeToMessage = u;
      const f = Object.freeze({
        [A.TaxonomyMismatch]: p.Severe,
        [A.NonemptyInitialResponse]: p.Severe,
        [A.EmptyExpectedResponse]: p.Severe,
        [A.EqualInitialExpectedResponses]: p.Severe,
        [A.HighPassRate]: p.Regular,
        [A.LowPassRate]: p.Regular,
        [A.LowSignal]: p.Regular,
        [A.NoConcepts]: p.Regular,
        [A.FailsValidators]: p.Severe,
      });
      var I;
      (a.BenchmarkAlertTypeToSeverity = f),
        (a.ItemType = I),
        (function (e) {
          (e.CommonConfusion = "Common Confusion"),
            (e.QualityTaskAlert = "Quality Task Alert"),
            (e.RankResponses = "Rank Responses"),
            (e.LowEvaluationTaskCount = "Low Evaluation Task Count"),
            (e.TooManyTrainingTasks = "Too Many Training Tasks"),
            (e.EdgeCaseAlert = "Edge Case Alert"),
            (e.SuggestedEvaluationTask = "Suggested Evaluation Task");
        })(I || (a.ItemType = I = {}));
      const O = [n.RAPID_ROOT_TEAM_ID];
      var b, R, D;
      (a.RAPID_ALLOCATION_MODEL_TEAM_IDS = O),
        (a.TaskerQualifierTags = b),
        (function (e) {
          (e.AdultContentTag = "61f9c063560412276b5f8dfc"),
            (e.HipaaTag = "6123e64e069b5b0018b46eae"),
            (e.EuTag = "61aa748516890f001173e8b5"),
            (e.ExpertEnglish = "61df170965767f0065a6b61e"),
            (e.ExpertEnglishRapid = "61df68ca3b4bf6002bab39d8"),
            (e.ProfessionalEnglish = "63509acadc6d290034711b7c");
        })(b || (a.TaskerQualifierTags = b = {})),
        (a.RapidProjectUseCase = R),
        (function (e) {
          (e.ObjectDetection = "Object Detection"),
            (e.ContentClassification = "Content Classification"),
            (e.SemanticSegmentation = "Semantic Segmentation"),
            (e.ContentCollection = "Content Collection"),
            (e.NamedEntityRecognition = "Named Entity Recognition"),
            (e.ObjectAndEventDetection = "Object & Event Detection"),
            (e.TextGeneration = "Text Generation"),
            (e.Transcription = "Transcription"),
            (e.EntityExtraction = "Entity Extraction"),
            (e.InstanceSegmentation = "Instance Segmentation"),
            (e.AudioTranscription = "Audio Transcription"),
            (e.Lidar = "LiDAR"),
            (e.TextAutocompletion = "Text Autocompletion"),
            (e.Summarization = "Summarization"),
            (e.RLHF = "RLHF");
        })(R || (a.RapidProjectUseCase = R = {})),
        (a.RapidPlugAndPlayType = D),
        (function (e) {
          (e.Summarization = "Summarization"),
            (e.Generation = "Generation"),
            (e.GenerationLarge = "Generation (Large)"),
            (e.OpenQA = "Open QA"),
            (e.Brainstorming = "Brainstorming"),
            (e.Chat = "Chat"),
            (e.Rewrite = "Rewrite"),
            (e.Classification = "Classification"),
            (e.ClosedQA = "Closed QA"),
            (e.Extract = "Extract"),
            (e.DemonstrationCorrectUpload = "Demonstration Corrections"),
            (e.DemonstrationCorrectEndpoint =
              "Demonstration Corrections (endpoint)"),
            (e.ComparisonsUpload = "Comparisons"),
            (e.ComparisonsEndpoint = "Comparisons (endpoint)"),
            (e.CompletionVerification = "Completion Verification"),
            (e.RedTeaming = "Red Teaming"),
            (e.CompletionCitation = "Completion Citation"),
            (e.ResearchBasedCorrection = "Research-Based Correction");
        })(D || (a.RapidPlugAndPlayType = D = {}));
      const S = [
        D.Summarization,
        D.Generation,
        D.DemonstrationCorrectEndpoint,
        D.ComparisonsEndpoint,
      ];
      a.RapidPNPPromptSelect = S;
      const N = [D.DemonstrationCorrectUpload];
      a.RapidPNPProcessCSV = N;
      a.PNPSampleHypothesis =
        "(SAMPLE HYPOTHESIS) A seasoned developer would prefer using tabs over spaces.";
      var y;
      (a.processPlugAndPlayCSV = (e, a) => {
        const t = {},
          n = JSON.parse(e),
          i = Object.fromEntries(
            Object.entries(n)
              .filter(([e]) => e.startsWith("attachment"))
              .sort()
          ),
          o = Object.keys(i).length;
        if (0 === o) return;
        if (
          ((t.attachments = Object.keys(i).map((e, a) => ({
            type: "text",
            content: i[e],
            ...(o > 1 && { forms: [`form_${a}`] }),
          }))),
          1 === Object.keys(i).length)
        )
          t.fields = a.fields;
        else {
          const e = [];
          for (let t = 0; t < Object.keys(i).length; t++)
            e.push({
              field_id: `form_${t}`,
              type: "form",
              title: `Form ${t}`,
              fields: a.fields,
            });
          t.fields = e;
        }
        const s = Object.fromEntries(
          Object.entries(n)
            .filter(([e]) => e.startsWith("hypothesis"))
            .sort()
        );
        if (Object.keys(s).length !== Object.keys(i).length) return;
        let r = {},
          _ = 0;
        return (
          Object.keys(s).map((e) => {
            const a = JSON.parse(s[e]),
              t = {};
            Object.keys(a).map((e) => {
              const n = {},
                i = a[e];
              (n.response = [i]),
                (n.type = "text"),
                (n.field_id = e),
                (t[e] = n);
            }),
              Object.keys(s).length > 1
                ? ((r[`form_${_}`] = {
                    type: "field_set",
                    field_id: `form_${_}`,
                    response: [t],
                  }),
                  (_ += 1))
                : (r = t);
          }),
          (t.hypothesis = { annotations: r }),
          t
        );
      }),
        (a.RapidPlugAndPlayCategory = y),
        (function (e) {
          (e.Demonstration = "Demonstration"),
            (e.Comparison = "Comparison"),
            (e.Safety = "Safety");
        })(y || (a.RapidPlugAndPlayCategory = y = {}));
      a.getPNPUseNormalRapid = (e) =>
        !e || [D.ComparisonsUpload, D.CompletionVerification].includes(e);
      a.getPNPUseSpecialPay = (e) =>
        !!e && [D.Summarization, D.Generation].includes(e);
      a.getPNPUseThreeColumn = (e) =>
        !!e && !![D.Generation, D.Summarization].includes(e);
      a.getRapidPlugAndPlayWorkerTeam = (e) =>
        e === D.Summarization
          ? "63dc0aeb0bc32d8a6cdbcb03"
          : e === D.Generation
          ? "63dc0b07ef4eb650c7b05b3f"
          : e === D.DemonstrationCorrectUpload
          ? "64027ff72af7ab2ba56b8b90"
          : e === D.DemonstrationCorrectEndpoint
          ? "64027fe371b995b0e7735aeb"
          : e === D.ComparisonsEndpoint
          ? "6402801caf871b1d767524a1"
          : void 0;
      a.RapidPlugAndPlayDatasetCustomer = "628d4c56055d130017dca473";
      a.RapidPlugAndPlayDatasetId = ["ds_cfdd2q2g3bc00b1zxrq0"];
      const L = {
        [i.TaskPipelineName.StandardTask]: {
          customerFacingName: "Standard Pipeline",
          description:
            "A task undergoes 1 attempt where an initial response is created and 1 or more reviewer approves or edits this initial response",
          learnMoreUrl: "https://scale.com/docs/pipelines",
        },
        [i.TaskPipelineName.ConsensusTask]: {
          customerFacingName: "Consensus Pipeline",
          description:
            "A task undergoes multiple attempts and their initial responses are combined to form a final response",
          learnMoreUrl: "https://scale.com/docs/pipelines",
        },
        [i.TaskPipelineName.FreeformTextCollectionTask]: {
          customerFacingName: "Generation Pipeline",
          description:
            "A task undergoes 1 attempt and 1 review where the reviewer either accepts the task or send the task back to queue",
          learnMoreUrl:
            "https://scale.com/docs/pipelines#specialized-pipelines",
        },
        [i.TaskPipelineName.GenerationTask]: {
          customerFacingName: "Generation Pipeline (V2)",
          description:
            "A task undergoes 1 attempt and multiple reviews where the reviewers either accepts the task or send the task back to queue",
          learnMoreUrl:
            "https://scale.com/docs/pipelines#specialized-pipelines",
        },
        [i.TaskPipelineName.EvalPipeline]: {
          customerFacingName: "Evaluation Pipeline",
          description:
            "A task undergoes a collaborative generation phase where a labeler interacts with a chatbot through several turns. The quality of responses are then evaluated by a suite of reviewers",
          learnMoreUrl:
            "https://scale.com/docs/pipelines#specialized-pipelines",
        },
      };
      a.RapidProjectPipelines = L;
      a.TAXONOMY_FIELDS = [
        "allow_unlabeled",
        "allowed_geometries",
        "annotation_attributes",
        "annotation_grouping",
        "annotation_type",
        "attribute",
        "auto_generate_audio_transcriptions",
        "autoCritique",
        "autoSpec",
        "aiAssistant",
        "can_add_annotations",
        "can_add_base_annotations",
        "can_delete_annotations",
        "can_delete_base_annotations",
        "can_edit_annotation_labels",
        "can_edit_annotation_positions",
        "can_edit_annotations",
        "can_edit_base_annotation_attributes",
        "can_edit_base_annotation_labels",
        "can_edit_base_annotation_positions",
        "can_edit_base_annotations",
        "can_remove_base_annotations",
        "default_geometry",
        "events_to_annotate",
        "features",
        "fields",
        "frame_rate",
        "geometries",
        "global_attributes",
        "label_descriptions",
        "labels",
        "links",
        "linking_rules",
        "numberOfCompletions",
        "objects_to_annotate",
        "param_chunks",
        "skip_labels",
        "speakers",
        "type",
        "with_labels",
        "z_order_labels",
        "sticky_attachments",
        "merge_newlines",
        "preserve_trailing_punctuation",
        "allow_overlapping_annotations",
        "default_free_select",
        "padding",
        "paddingX",
        "paddingY",
        "relationships",
        "relationshipDefinitions",
        "isNEREnabled",
        "enableAutoTranscription",
        "annotatorDefinedSpeakers",
        "read_only_field_ids",
      ];
      a.TAXONOMY_FIELDS_WITH_DEFAULTS = [
        "can_add_annotations",
        "can_add_base_annotations",
        "can_delete_annotations",
        "can_delete_base_annotations",
        "can_edit_annotation_labels",
        "can_edit_annotation_positions",
        "can_edit_annotations",
        "can_edit_base_annotation_attributes",
        "can_edit_base_annotation_labels",
        "can_edit_base_annotation_positions",
        "can_edit_base_annotations",
        "can_remove_base_annotations",
        "frame_rate",
        "with_labels",
      ];
      var M, h;
      (a.isThreeDCaptioningProject = (e) =>
        ["62f30a59d48f14002b972071", "63b50a566757960024fb628b"].includes(
          e || ""
        )),
        (a.Operator = M),
        (function (e) {
          (e.CONTAINS_LIKE = "contains_like"),
            (e.CONTAINS_EXACT = "contains_exact"),
            (e.STARTS_WITH = "starts_with"),
            (e.IS = "is"),
            (e.LESS_THAN = "less_than"),
            (e.GREATER_THAN = "greater_than");
        })(M || (a.Operator = M = {})),
        (a.DataType = h),
        (function (e) {
          (e.Data = "data"),
            (e.Task = "task"),
            (e.ModelEval = "modelEval"),
            (e.ModelEvalPrompts = "modelEvalPrompts");
        })(h || (a.DataType = h = {}));
      var C, g;
      (a.getValidMappingFields = (e) => {
        switch (e) {
          case h.Data:
            return [g.Text, g.HasTask];
          case h.Task:
            return [
              g.ResponseFlattened,
              g.MetadataFlattened,
              g.Params,
              g.CreatedAt,
              g.CompletedAt,
              g.AuditStatus,
              g.Status,
            ];
          case h.ModelEval:
            return [g.MetadataFlattened];
          case h.ModelEvalPrompts:
            return [g.Text, g.MetadataFlattened];
        }
      }),
        (a.QueryBlockType = C),
        (function (e) {
          (e.Text = "text"),
            (e.Boolean = "boolean"),
            (e.KeyValue = "keyValue"),
            (e.Value = "value"),
            (e.Timestamp = "timestamp");
        })(C || (a.QueryBlockType = C = {})),
        (a.MappingField = g),
        (function (e) {
          (e.DocType = "doc_type"),
            (e.JoinField = "join_field"),
            (e.Id = "id"),
            (e.CreatedAt = "created_at"),
            (e.Customer = "customer"),
            (e.Projects = "projects"),
            (e.DisplayName = "display_name"),
            (e.ReferenceId = "reference_id"),
            (e.ItemUuid = "item_uuid"),
            (e.MetadataFlattened = "metadata_flattened"),
            (e.OriginalUrl = "original_url"),
            (e.MimeType = "mime_type"),
            (e.NucleusDatasets = "nucleus_datasets"),
            (e.StorageUrl = "storage_url"),
            (e.Text = "text"),
            (e.TruncatedTextKeyword = "truncated_text_keyword"),
            (e.Size = "size"),
            (e.UsedForLabeledExample = "used_for_labeled_example"),
            (e.PubliclyViewable = "publicly_viewable"),
            (e.HasTask = "has_task"),
            (e.ReferenceKey = "reference_key"),
            (e.Unprocessed = "unprocessed"),
            (e.IsStaticAsset = "is_static_asset"),
            (e.ResponseFlattened = "response_flattened"),
            (e.Batch = "batch"),
            (e.UniqueId = "unique_id"),
            (e.CompletedAt = "completed_at"),
            (e.Status = "status"),
            (e.AuditStatus = "audit_status"),
            (e.WorkStarted = "work_started"),
            (e.Params = "params"),
            (e.AttemptedBy = "attempted_by"),
            (e.AttemptedAt = "attempted_at"),
            (e.Accuracy = "accuracy"),
            (e.TimeSpentSecs = "time_spent_secs"),
            (e.TimeSpentLoadingSecs = "time_spent_loading_secs"),
            (e.OldTimeSpentSecs = "old_time_spent_secs"),
            (e.HeartbeatTimeSpentSecs = "heartbeat_time_spent_secs"),
            (e.HeartbeatFocusedTimeSpentSecs =
              "heartbeat_focused_time_spent_secs"),
            (e.HeartbeatActiveTimeSpentSecs =
              "heartbeat_active_time_spent_secs"),
            (e.V2TimeSpentSecs = "v2_time_spent_secs"),
            (e.V2ActiveTimeSpentSecs = "v2_active_time_spent_secs"),
            (e.Workspace = "workspace"),
            (e.Language = "language"),
            (e.UpdatedAt = "updated_at");
        })(g || (a.MappingField = g = {}));
      const P = {
        [g.Text]: {
          displayName: "Asset Text",
          alternateDisplayName: { [h.ModelEvalPrompts]: "Prompt Text" },
          icon: "text",
          type: C.Text,
          operators: [M.CONTAINS_LIKE, M.CONTAINS_EXACT, M.STARTS_WITH, M.IS],
          defaultQuery: { operator: M.CONTAINS_LIKE, term: "" },
        },
        [g.HasTask]: {
          displayName: "Asset Has Task",
          icon: "file",
          type: C.Boolean,
          defaultQuery: { term: "false" },
        },
        [g.ResponseFlattened]: {
          displayName: "Response Field",
          icon: "tags",
          type: C.KeyValue,
          operators: [M.CONTAINS_LIKE, M.CONTAINS_EXACT, M.STARTS_WITH, M.IS],
          defaultQuery: { key: "", operator: M.CONTAINS_LIKE, term: "" },
        },
        [g.MetadataFlattened]: {
          displayName: "Task Metadata",
          alternateDisplayName: {
            [h.ModelEval]: "Model Eval Metadata",
            [h.ModelEvalPrompts]: "Prompt Metadata",
          },
          icon: "table",
          type: C.KeyValue,
          operators: [M.CONTAINS_LIKE, M.CONTAINS_EXACT, M.STARTS_WITH, M.IS],
          defaultQuery: { key: "", operator: M.CONTAINS_LIKE, term: "" },
        },
        [g.Params]: {
          displayName: "Task Text",
          icon: "text",
          type: C.Text,
          operators: [M.CONTAINS_LIKE, M.CONTAINS_EXACT, M.STARTS_WITH, M.IS],
          defaultQuery: { operator: M.CONTAINS_LIKE, term: "" },
        },
        [g.AttemptedBy]: {
          displayName: "Attempted By",
          icon: "user",
          type: C.Value,
          defaultQuery: { term: "" },
        },
        [g.CreatedAt]: {
          displayName: "Created At",
          icon: "calendar",
          type: C.Timestamp,
          defaultQuery: {},
        },
        [g.CompletedAt]: {
          displayName: "Completed At",
          icon: "calendar-check",
          type: C.Timestamp,
          defaultQuery: {},
        },
        [g.AuditStatus]: {
          displayName: "Audit Status",
          icon: "check-circle",
          type: C.Value,
          defaultQuery: { term: "" },
        },
        [g.Status]: {
          displayName: "Task Status",
          icon: "spinner",
          type: C.Value,
          defaultQuery: { term: "" },
        },
      };
      a.MappingFieldDetails = P;
      const U = [i.TaskType.TextCollection, i.TaskType.NamedEntityRecognition];
      a.TaskSearchEnabledTaskTypes = U;
    },
    771835: function (e, a, t) {
      Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.viewOnlyTaskTypes =
          a.defaultClaimTimeByCustomer =
          a.recastTaskResponseAsLidarResponse =
          a.standardizeS3Url =
          a.S3UrlType =
          a.PREFER_UNCONVERTED_TASK_TYPES =
          a.EXCLUDED_RAPID_USE_CASES =
          a.STUDIO_PROJECT_PIPELINES =
          a.STUDIO_HIPAA_FILE_TYPES =
          a.STUDIO_HIPAA_TASK_TYPES =
          a.AUTO_ANNOTATE_ENDPOINTS =
          a.TAXONOMY_UPDATE_SECTION_TITLE =
          a.DEFAULT_LABELER_GROUP =
            void 0);
      var n = t(599789),
        i = t(167469),
        o = t(741722);
      a.DEFAULT_LABELER_GROUP = "All labelers (default)";
      a.TAXONOMY_UPDATE_SECTION_TITLE = "Custom Message";
      const s = {
        [i.TaskType.MultiModalTranscription]: "transcription-base-en-sync",
      };
      a.AUTO_ANNOTATE_ENDPOINTS = s;
      const r = [
        i.TaskType.ImageAnnotation,
        i.TaskType.SegmentAnnotation,
        i.TaskType.TextCollection,
      ];
      a.STUDIO_HIPAA_TASK_TYPES = r;
      const _ = [
        n.SelfServeSupportedAttachmentTypes.Image,
        n.SelfServeSupportedAttachmentTypes.Csv,
      ];
      a.STUDIO_HIPAA_FILE_TYPES = _;
      const c = [
        i.TaskPipelineName.StandardTask,
        i.TaskPipelineName.ConsensusTask,
      ];
      a.STUDIO_PROJECT_PIPELINES = c;
      const d = [
        o.RapidProjectUseCase.Transcription,
        o.RapidProjectUseCase.TextGeneration,
        o.RapidProjectUseCase.Lidar,
        o.RapidProjectUseCase.AudioTranscription,
      ];
      a.EXCLUDED_RAPID_USE_CASES = d;
      const T = [
        i.TaskType.ImageAnnotation,
        i.TaskType.SegmentAnnotation,
        i.TaskType.TextCollection,
      ];
      var l;
      (a.PREFER_UNCONVERTED_TASK_TYPES = T),
        (a.S3UrlType = l),
        (function (e) {
          (e.Public = "public"),
            (e.Unsigned = "unsigned"),
            (e.Signed = "signed");
        })(l || (a.S3UrlType = l = {}));
      a.standardizeS3Url = (e, a) => {
        const t = e.split("/");
        switch (a) {
          case l.Unsigned:
            return t[2] + t[3].slice(0, -3) + t[4];
          case l.Public:
            return t[3] + t[4] + t[2].split(".")[0];
          case l.Signed:
          default:
            return "";
        }
      };
      a.recastTaskResponseAsLidarResponse = (e) =>
        !e || "error" in e || "canceled" in e ? null : e;
      const E = new Map([
        ["61a5305c58b3d1002b08025a", 10080],
        ["61831618cf0734003a62eb48", 4320],
        ["63cab16bd6ab6e43baf5edd2", 20160],
      ]);
      a.defaultClaimTimeByCustomer = E;
      const p = new Set([
        i.TaskType.ImageAnnotation,
        i.TaskType.VideoPlaybackAnnotation,
        i.TaskType.TextCollection,
        i.TaskType.DocumentTranscription,
        i.TaskType.NamedEntityRecognition,
        i.TaskType.SegmentAnnotation,
        i.TaskType.MultiModalTranscription,
      ]);
      a.viewOnlyTaskTypes = p;
    },
    742988: function (e, a, t) {
      Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.FLAMINGO_MASS_MOVE_NOTIFICATION_SLACK_CHANNEL =
          a.WT_TYPES_ALLOWED_ASSIGNMENTS =
          a.WT_TYPES_ALLOWED_QLIST =
          a.DELETED_LOW_QUALITY_WT_IDS =
          a.DELETED_BAD_TASKER_WT_IDS =
          a.DUP_ACCOUNT_HOLDING_WT_IDS =
          a.LINKED_TO_LOW_QUALITY_WORKER_TEAM_IDS =
          a.OUTLIER_TNS_FRAUD_WORKER_TEAM_IDS =
          a.TEAM_IDS_TO_EXCLUDE_FROM_INACTIVITY_FUNNELS =
          a.DELETED_FRAUD_WT_MAP =
          a.OUTLIER_CONTRIBUTOR_MARKETPLACE_TEAM_ID =
          a.Z_PROJECT_SQUADS_PARENT =
          a.X_ONSITES_PARENT_TEAM =
          a.OFFBOARDING_ONSITE_CONTRIBUTOR_TEAM_ID =
          a.POPULOUS_LANGUAGES_OFF_PLATFORM_TEAM_ID =
          a.GAIUS_POPULOUS_OFF_PLATFORM_ROOT_TEAM_ID =
          a.REMO_DOLPHIN_OFF_PLATFORM_ROOT_TEAM_ID =
          a.OUTLIER_DOLPHIN_GENERALISTS_TEAM_ID =
          a.OUTLIER_DOLPHIN_CODERS_TEAM_ID =
          a.OUTLIER_DOLPHIN_EXPERTS_TEAM_ID =
          a.OUTLIER_DOLPHIN_ROOT_TEAM_ID =
          a.OUTLIER_ONBOARDING_ACCOUNT_CREATED_TEAM_ID_STAGING =
          a.OUTLIER_ONBOARDING_ACCOUNT_CREATED_TEAM_ID =
          a.OUTLIER_ONBOARDING_ROOT_TEAM_ID =
          a.OUTLIER_SANDBOX_TEAM_ID =
          a.OUTLIER_ROOT_TEAM_ID =
          a.DEFAULT_LAST_ONLINE_INACTIVE_DAYS_THRESHOLD =
          a.LIDAR_LABS_EXPERIMENT =
          a.DEFAULT_ROOT_FUNNEL_TYPE =
          a.RAPID_ROOT_TEAM_ID =
          a.BEE_TTS_ROOT_TEAM_ID =
          a.WORKER_TEAM_BYOW_TEAM_ID =
          a.REMO_DELETED_FRAUD_TEAM_ID =
          a.REMO_DELETED_LOW_QUALITY_TEAM_ID =
          a.REMO_DELETED_SYSTEM_ABUSE_TEAM_ID =
          a.REMO_DELETED_CHEATING_TEAM_ID =
          a.REMO_PARENT_DELETED_FRAUD_TEAM_ID =
          a.OUTLIER_PARENT_DELETED_FRAUD_TEAM_ID =
          a.OUTLIER_DEACTIVATED_FOR_INACTIVITY_TEAM_ID =
          a.OUTLIER_DELETED_LOW_QUALITY_TEAM_ID =
          a.OUTLIER_DELETED_SYSTEM_ABUSE_TEAM_ID =
          a.OUTLIER_DELETED_CHEATING_TEAM_ID =
          a.OUTLIER_DELETED_FRAUD_TEAM_ID =
          a.OUTLIER_OCP_HOLDING_TEAM_ID =
          a.OUTLIER_FAILED_SEON_TEAM_ID =
          a.REMO_FAILED_SEON_TEAM_ID =
          a.OUTLIER_FAILED_ID_REVERIFICATION_TEAM_ID =
          a.REMO_FAILED_ID_REVERIFICATION_TEAM_ID =
          a.OUTLIER_FAILED_ID_VERIFICATION_TEAM_ID =
          a.REMO_FAILED_ID_VERIFICATION_TEAM_ID =
          a.OUTLIER_TNS_SYSTEM_ABUSE_HOLDING_TEAM_ID =
          a.OUTLIER_TNS_HOLDING_LOCK_TEAM_ID =
          a.REMO_TNS_DUP_ACCOUNTS_LINKED_LOW_QUALITY =
          a.REMO_TNS_DUP_ACCOUNTS_LINKED_FRAUD =
          a.OUTLIER_TNS_DUP_ACCOUNTS_LINKED_LOW_QUALITY =
          a.OUTLIER_TNS_DUP_ACCOUNTS_LINKED_FRAUD =
          a.REMO_TNS_DUP_ACCOUNTS_TEAM_ID =
          a.OUTLIER_TNS_DUP_ACCOUNTS_TEAM_ID =
          a.OUTLIER_TNS_CHEATING_HOLDING_TEAM_ID =
          a.OUTLIER_TNS_NON_ENGLISH_RESUME_HOLDING_TEAM_ID =
          a.OUTLIER_TNS_HOLDING_TEAM_ID =
          a.OUTLIER_HOLDING_TEAM_ID =
          a.REMO_HOLDING_TEAM_ID =
          a.SANDBOX_TEAM_ID =
          a.GENAI_ROOT_TEAM_ID =
          a.FREE_AGENT_ROOT_TEAM_ID =
          a.FREE_AGENT_INACTIVE_TEAM_ID =
          a.ONBOARDING_ACCOUNT_CREATED_TEAM_ID =
          a.ONBOARDING_ROOT_TEAM_ID =
          a.ONBOARDING_PENDING_MATCH_TEAM_ID =
          a.ONBOARDING_ONBOARDED_TEAM_ID =
          a.ONBOARDING_LDR_TEAM_ID =
          a.ONBOARDING_INTRO_PROJECT_TEAM_ID =
          a.ONBOARDING_INTRO_COURSE_TEAM_ID =
          a.ONBOARDING_PROFILE_TEAM_ID =
          a.ROOT_TEAM_ID =
          a.EXPERT_FREE_AGENT_MISC_TEAM_ID =
          a.OTHER_FREE_AGENT_MISC_TEAM_ID =
          a.OUTLIER_BANNED_SYSTEM_ABUSE_TEAM_ID =
          a.REMO_BANNED_SYSTEM_ABUSE_TEAM_ID =
          a.OUTLIER_BANNED_CHEATING_TEAM_ID =
          a.REMO_BANNED_CHEATING_TEAM_ID =
          a.OUTLIER_BANNED_FRAUD_WITHOUT_PAY =
          a.OUTLIER_BANNED_FRAUD_TEAM_ID =
          a.REMO_BANNED_FRAUD_TEAM_ID =
          a.EXPERT_BANNED_TEAM_ID =
          a.OTHER_BANNED_TEAM_ID =
            void 0);
      var n = t(499796),
        i = t(599789),
        o = t(856145),
        s = t(18573);
      const r = "621051885a2f320025d8fefb";
      a.OTHER_BANNED_TEAM_ID = r;
      const _ = "6489fe29e5202d5d93a49a3c";
      a.EXPERT_BANNED_TEAM_ID = _;
      a.REMO_BANNED_FRAUD_TEAM_ID = "65f202e7e02f589d7f8583cc";
      a.OUTLIER_BANNED_FRAUD_TEAM_ID = "65f35cfcf329370a4b8355a2";
      a.OUTLIER_BANNED_FRAUD_WITHOUT_PAY = "66a2f25cf93985663f15f32e";
      a.REMO_BANNED_CHEATING_TEAM_ID = "65f2030104adc386047170d2";
      a.OUTLIER_BANNED_CHEATING_TEAM_ID = "65f35cef0d19dc01318c7184";
      a.REMO_BANNED_SYSTEM_ABUSE_TEAM_ID = "65f202f4a0e6f2e6f7ecb594";
      a.OUTLIER_BANNED_SYSTEM_ABUSE_TEAM_ID = "65f35d06ff8e511167d12dd4";
      a.OTHER_FREE_AGENT_MISC_TEAM_ID = "61d79d99fb0eaa00173f7f9e";
      a.EXPERT_FREE_AGENT_MISC_TEAM_ID = "6441d3e7ea109f8cfc408655";
      a.ROOT_TEAM_ID = "617709575ddbae6a1edab50d";
      a.ONBOARDING_PROFILE_TEAM_ID = "623cc4ec7c6314002bb8c9bc";
      a.ONBOARDING_INTRO_COURSE_TEAM_ID = "623cc4f98bc7f60011905dee";
      a.ONBOARDING_INTRO_PROJECT_TEAM_ID = "623cc51a1a2ac20017873ec1";
      a.ONBOARDING_LDR_TEAM_ID = "623cc5381e6212001e151022";
      a.ONBOARDING_ONBOARDED_TEAM_ID = "623cc64713bb2c00249b20d4";
      a.ONBOARDING_PENDING_MATCH_TEAM_ID = "6257867353d1430039530bbb";
      const c = "623a57cd51f8080011e52ee3";
      a.ONBOARDING_ROOT_TEAM_ID = c;
      a.ONBOARDING_ACCOUNT_CREATED_TEAM_ID = "625f514e5e90c10011c601cf";
      const d = "61f1f625c750e3003883ba4d";
      a.FREE_AGENT_INACTIVE_TEAM_ID = d;
      a.FREE_AGENT_ROOT_TEAM_ID = "61d79503a730a2446a6e0139";
      a.GENAI_ROOT_TEAM_ID = "6498684c03cb32554d43ac05";
      const T = "6189ec21cd7cd41b5e1d56a6";
      a.SANDBOX_TEAM_ID = T;
      a.REMO_HOLDING_TEAM_ID = "65a6c5f90967df17d999d0ae";
      a.OUTLIER_HOLDING_TEAM_ID = "65a707023a6d2f7fa45859dd";
      const l = "65a7071cc2367c62e84c3b01";
      a.OUTLIER_TNS_HOLDING_TEAM_ID = l;
      a.OUTLIER_TNS_NON_ENGLISH_RESUME_HOLDING_TEAM_ID =
        "670968674c5440b099c1a336";
      const E = "65a983d08080ff77e59e9727";
      a.OUTLIER_TNS_CHEATING_HOLDING_TEAM_ID = E;
      const p = "65b3eb831e8e881176c5eb87";
      a.OUTLIER_TNS_DUP_ACCOUNTS_TEAM_ID = p;
      const m = "65b3eb969df31e36ba886aa1";
      a.REMO_TNS_DUP_ACCOUNTS_TEAM_ID = m;
      const A = "6704103a2562d48f6c941e6f";
      a.OUTLIER_TNS_DUP_ACCOUNTS_LINKED_FRAUD = A;
      const u = "670410dbea757add979119a7";
      a.OUTLIER_TNS_DUP_ACCOUNTS_LINKED_LOW_QUALITY = u;
      const f = "670547d822dd5ef30399a688";
      a.REMO_TNS_DUP_ACCOUNTS_LINKED_FRAUD = f;
      const I = "670547f5f581fe8aba342a91";
      a.REMO_TNS_DUP_ACCOUNTS_LINKED_LOW_QUALITY = I;
      const O = "65f1e32ad3f5aafb22257c49";
      a.OUTLIER_TNS_HOLDING_LOCK_TEAM_ID = O;
      const b = "65c290b1ce9eaacb074fb21d";
      a.OUTLIER_TNS_SYSTEM_ABUSE_HOLDING_TEAM_ID = b;
      a.REMO_FAILED_ID_VERIFICATION_TEAM_ID = "64c15aff9cdd9b0e010907df";
      a.OUTLIER_FAILED_ID_VERIFICATION_TEAM_ID = "64b5bfd699f1f11d7e8b8cc0";
      a.REMO_FAILED_ID_REVERIFICATION_TEAM_ID = "65ea41bb4221664fe1511e63";
      a.OUTLIER_FAILED_ID_REVERIFICATION_TEAM_ID = "65b8633a1fce0a2c92fd499d";
      a.REMO_FAILED_SEON_TEAM_ID = "65b862a2a507ad38a6d43926";
      a.OUTLIER_FAILED_SEON_TEAM_ID = "65b863474ffb4206cac47dc1";
      a.OUTLIER_OCP_HOLDING_TEAM_ID = "65c3f4ed5c9add81c7fab588";
      const R = "6737acb1b9191d87f9b460f6";
      a.OUTLIER_DELETED_FRAUD_TEAM_ID = R;
      const D = "6737db83f436305d9a9e6e27";
      a.OUTLIER_DELETED_CHEATING_TEAM_ID = D;
      const S = "6737db7350da709e7c64560b";
      a.OUTLIER_DELETED_SYSTEM_ABUSE_TEAM_ID = S;
      const N = "6737db4a6305a0d5fd36c3d0";
      a.OUTLIER_DELETED_LOW_QUALITY_TEAM_ID = N;
      a.OUTLIER_DEACTIVATED_FOR_INACTIVITY_TEAM_ID = "6747455ea7109f1b1e0df7de";
      const y = "6737ac8d49312fa3fa2d0405";
      a.OUTLIER_PARENT_DELETED_FRAUD_TEAM_ID = y;
      const L = "6744ae13a7cc92e182cb8bbb";
      a.REMO_PARENT_DELETED_FRAUD_TEAM_ID = L;
      const M = "6744ae2fe7f91da5ff6dd3d1";
      a.REMO_DELETED_CHEATING_TEAM_ID = M;
      const h = "6744ae5c64584147906634d8";
      a.REMO_DELETED_SYSTEM_ABUSE_TEAM_ID = h;
      const C = "6744aecb0c87c467b57b957a";
      a.REMO_DELETED_LOW_QUALITY_TEAM_ID = C;
      const g = "6744ae92b155a3441746277f";
      a.REMO_DELETED_FRAUD_TEAM_ID = g;
      const P = "61fd7a5f2220b4001ec750dc";
      a.WORKER_TEAM_BYOW_TEAM_ID = P;
      const U = "61bcd8495aa7ad002eb94bc6";
      a.BEE_TTS_ROOT_TEAM_ID = U;
      const k = "61a7cf2b284cfa00125c9bae";
      a.RAPID_ROOT_TEAM_ID = k;
      const B = o.FunnelNodeType.SequentialSearch;
      a.DEFAULT_ROOT_FUNNEL_TYPE = B;
      a.LIDAR_LABS_EXPERIMENT = "629a739d87f726400787a3f3";
      a.DEFAULT_LAST_ONLINE_INACTIVE_DAYS_THRESHOLD = 30;
      const v = "643f43eb794a644a09b1c352";
      a.OUTLIER_ROOT_TEAM_ID = v;
      const F = "64406892a49ef48f92e26b07";
      a.OUTLIER_SANDBOX_TEAM_ID = F;
      const G = "6441d071493a58b63ca8db42";
      a.OUTLIER_ONBOARDING_ROOT_TEAM_ID = G;
      a.OUTLIER_ONBOARDING_ACCOUNT_CREATED_TEAM_ID = "6441d34f09a8a1eb7545f374";
      a.OUTLIER_ONBOARDING_ACCOUNT_CREATED_TEAM_ID_STAGING =
        "66172709e2c522dc46efdb11";
      a.OUTLIER_DOLPHIN_ROOT_TEAM_ID = "6491fa00617a9400abd84dec";
      a.OUTLIER_DOLPHIN_EXPERTS_TEAM_ID = "656756ec94c22d16cbc514a9";
      a.OUTLIER_DOLPHIN_CODERS_TEAM_ID = "6491ff1005a06ca7aa9f5f22";
      a.OUTLIER_DOLPHIN_GENERALISTS_TEAM_ID = "65675fc2465f102487242caa";
      a.REMO_DOLPHIN_OFF_PLATFORM_ROOT_TEAM_ID = "64650edf44f0b2eed09aa5f2";
      a.GAIUS_POPULOUS_OFF_PLATFORM_ROOT_TEAM_ID = "674e1f5119e08781084f4a69";
      a.POPULOUS_LANGUAGES_OFF_PLATFORM_TEAM_ID = "670fd7ba9a42f82839f042ba";
      a.OFFBOARDING_ONSITE_CONTRIBUTOR_TEAM_ID = "661e786b3cc4cb329c665701";
      a.X_ONSITES_PARENT_TEAM = "65a97c292219841f7245ff38";
      a.Z_PROJECT_SQUADS_PARENT = "65de42042bddf48760d19dfd";
      a.OUTLIER_CONTRIBUTOR_MARKETPLACE_TEAM_ID = "6669ddd4f3127a2e7e71b6cc";
      const j = {
        [i.AccountType.Expert]: {
          [s.BadTaskerType.Fraud]: R,
          [s.BadTaskerType.Cheater]: D,
          [s.BadTaskerType.SystemAbuser]: S,
          [s.BadTaskerType.LowQuality]: N,
        },
        [i.AccountType.Worker]: {
          [s.BadTaskerType.Fraud]: g,
          [s.BadTaskerType.Cheater]: M,
          [s.BadTaskerType.SystemAbuser]: h,
          [s.BadTaskerType.LowQuality]: C,
        },
      };
      a.DELETED_FRAUD_WT_MAP = j;
      const w = [k, U, P, r, _, d, c, T, F, G, v];
      a.TEAM_IDS_TO_EXCLUDE_FROM_INACTIVITY_FUNNELS = w;
      const H = [l, E, p, O, b, A, u, f, I, m];
      a.OUTLIER_TNS_FRAUD_WORKER_TEAM_IDS = H;
      const W = [u, I];
      a.LINKED_TO_LOW_QUALITY_WORKER_TEAM_IDS = W;
      const x = [p, m];
      a.DUP_ACCOUNT_HOLDING_WT_IDS = x;
      const V = [D, S, R, N, y, L, g, M, h, C];
      a.DELETED_BAD_TASKER_WT_IDS = V;
      const Q = [N, C];
      a.DELETED_LOW_QUALITY_WT_IDS = Q;
      const Y = [n.WorkerTeamTypes.SCREENING, n.WorkerTeamTypes.POOL];
      a.WT_TYPES_ALLOWED_QLIST = Y;
      const K = [n.WorkerTeamTypes.STANDARD, n.WorkerTeamTypes.POOL];
      a.WT_TYPES_ALLOWED_ASSIGNMENTS = K;
      a.FLAMINGO_MASS_MOVE_NOTIFICATION_SLACK_CHANNEL =
        "#temp-flamingo-too-many-cbs-moved";
    },
    856145: function (e, a) {
      var t, n, i;
      Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.GateType = a.FunnelEntryPoint = a.FunnelNodeType = void 0),
        (a.FunnelNodeType = t),
        (function (e) {
          (e.Leaf = "leaf"),
            (e.SequentialSearch = "sequential_search"),
            (e.OnboardingMatch = "onboarding_match"),
            (e.WeightedRandom = "weighted_random");
        })(t || (a.FunnelNodeType = t = {})),
        (a.FunnelEntryPoint = n),
        (function (e) {
          (e.ManualUpdate = "manual_update"),
            (e.OnCourseCompletion = "on_course_completion"),
            (e.OnBenchmarkSubmission = "on_benchmark_submission"),
            (e.OnTeamArrival = "on_team_arrival"),
            (e.RunTeamFunnelsCronJob = "run_team_funnels_cron_job"),
            (e.OnUpdateLastOnlineDatetime = "on_update_last_active_datetime"),
            (e.OnProfilingCompletion = "on_profiling_completion"),
            (e.OnTagging = "on_tagging"),
            (e.OnQualificationListInfoFetch =
              "on_qualification_list_info_fetch"),
            (e.OnEmptyQueue = "on_empty_queue"),
            (e.OnWorkerSkillEntryUpdate = "on_worker_skill_entry_update"),
            (e.OnMultiScreeningContinue = "on_multi_screening_continue");
        })(n || (a.FunnelEntryPoint = n = {})),
        (a.GateType = i),
        (function (e) {
          (e.AttempterSBQBased = "attempter_sbq_rate"),
            (e.ReviewerSBQBased = "reviewer_sbq_rate"),
            (e.WorkerStatus = "worker_status"),
            (e.SbqRate = "sbq_rate"),
            (e.IpCountryCodeOrs = "ip_country_code_ors"),
            (e.ExcludedWorkerTagsOrsOfAnds =
              "excluded_worker_tags_ors_of_ands"),
            (e.RequiredWorkerTagsAndsOfOrs =
              "required_worker_tags_ands_of_ors"),
            (e.ReviewLevel = "review_level"),
            (e.WorkerSkill = "worker_skill"),
            (e.BulbaTraining = "bulba_training"),
            (e.TeamQualificationListStatus = "team_qualification_list_status"),
            (e.CourseProgress = "course_progress"),
            (e.RequiredCourses = "required_courses"),
            (e.BenchmarkWall = "benchmark_wall"),
            (e.BenchmarkAccuracy = "benchmark_accuracy"),
            (e.CertificationExam = "certification_exam"),
            (e.MinUnclaimedAttemptSubtasks = "min_unclaimed_attempt_subtasks"),
            (e.NumFunneled = "num_funneled"),
            (e.WorkerSources = "worker_sources"),
            (e.IpCountryCode = "ip_country_code"),
            (e.AcquisitionCourse = "acquisition_course"),
            (e.LastOnline = "last_online"),
            (e.FunnelEntryPoints = "funnel_entry_points"),
            (e.TagName = "tag_name"),
            (e.OnboardingProfiling = "onboarding_profiling"),
            (e.IntroCourse = "intro_course"),
            (e.HasAcquisitionCourse = "has_acquisition_course"),
            (e.WorkerVerificationStatus = "worker_verification_status"),
            (e.SeonTransactionResult = "seon_transaction_result"),
            (e.EmptyBMQueue = "empty_bm_queue"),
            (e.WorkerSkillScore = "worker_skill_score"),
            (e.WorkerSkills = "worker_skills"),
            (e.UsStateCode = "us_state_code"),
            (e.UTMSources = "utm_sources"),
            (e.IsLinkedInVerified = "is_linkedin_verified"),
            (e.WorkerSkillsTier = "worker_skills_tier"),
            (e.TaskCompletion = "task_completion");
        })(i || (a.GateType = i = {}));
    },
    499796: function (e, a) {
      var t;
      Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.tierToInt = function (e, a) {
          const t = n.indexOf(e);
          if (-1 === t) return a;
          return t;
        }),
        (a.WorkerTeamAssignmentTiers =
          a.isHydratedWorkerTeam =
          a.WorkerTeamTypes =
            void 0),
        (a.WorkerTeamTypes = t),
        (function (e) {
          (e.STANDARD = "standard"),
            (e.SCREENING = "screening"),
            (e.STAGING = "staging"),
            (e.PENDING_REVIEW = "pending_review"),
            (e.POOL = "pool"),
            (e.FRAUD = "fraud"),
            (e.LOW_QUALITY = "low_quality"),
            (e.INACTIVE = "inactive");
        })(t || (a.WorkerTeamTypes = t = {}));
      a.isHydratedWorkerTeam = (e) => "config" in e;
      const n = ["Primary", "Secondary"];
      a.WorkerTeamAssignmentTiers = n;
    },
  },
]);
