(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [22826],
  {
    122826: function (t) {
      var e = function () {
          (this.Diff_Timeout = 1),
            (this.Diff_EditCost = 4),
            (this.Match_Threshold = 0.5),
            (this.Match_Distance = 1e3),
            (this.Patch_DeleteThreshold = 0.5),
            (this.Patch_Margin = 4),
            (this.Match_MaxBits = 32);
        },
        n = -1;
      (e.Diff = function (t, e) {
        return [t, e];
      }),
        (e.prototype.diff_main = function (t, n, i, r) {
          "undefined" == typeof r &&
            (r =
              this.Diff_Timeout <= 0
                ? Number.MAX_VALUE
                : new Date().getTime() + 1e3 * this.Diff_Timeout);
          var f = r;
          if (null == t || null == n)
            throw new Error("Null input. (diff_main)");
          if (t == n) return t ? [new e.Diff(0, t)] : [];
          "undefined" == typeof i && (i = !0);
          var h = i,
            s = this.diff_commonPrefix(t, n),
            a = t.substring(0, s);
          (t = t.substring(s)),
            (n = n.substring(s)),
            (s = this.diff_commonSuffix(t, n));
          var l = t.substring(t.length - s);
          (t = t.substring(0, t.length - s)),
            (n = n.substring(0, n.length - s));
          var g = this.diff_compute_(t, n, h, f);
          return (
            a && g.unshift(new e.Diff(0, a)),
            l && g.push(new e.Diff(0, l)),
            this.diff_cleanupMerge(g),
            g
          );
        }),
        (e.prototype.diff_compute_ = function (t, i, r, f) {
          var h;
          if (!t) return [new e.Diff(1, i)];
          if (!i) return [new e.Diff(n, t)];
          var s = t.length > i.length ? t : i,
            a = t.length > i.length ? i : t,
            l = s.indexOf(a);
          if (-1 != l)
            return (
              (h = [
                new e.Diff(1, s.substring(0, l)),
                new e.Diff(0, a),
                new e.Diff(1, s.substring(l + a.length)),
              ]),
              t.length > i.length && (h[0][0] = h[2][0] = n),
              h
            );
          if (1 == a.length) return [new e.Diff(n, t), new e.Diff(1, i)];
          var g = this.diff_halfMatch_(t, i);
          if (g) {
            var o = g[0],
              c = g[1],
              u = g[2],
              p = g[3],
              d = g[4],
              _ = this.diff_main(o, u, r, f),
              b = this.diff_main(c, p, r, f);
            return _.concat([new e.Diff(0, d)], b);
          }
          return r && t.length > 100 && i.length > 100
            ? this.diff_lineMode_(t, i, f)
            : this.diff_bisect_(t, i, f);
        }),
        (e.prototype.diff_lineMode_ = function (t, i, r) {
          var f = this.diff_linesToChars_(t, i);
          (t = f.chars1), (i = f.chars2);
          var h = f.lineArray,
            s = this.diff_main(t, i, !1, r);
          this.diff_charsToLines_(s, h),
            this.diff_cleanupSemantic(s),
            s.push(new e.Diff(0, ""));
          for (var a = 0, l = 0, g = 0, o = "", c = ""; a < s.length; ) {
            switch (s[a][0]) {
              case 1:
                g++, (c += s[a][1]);
                break;
              case n:
                l++, (o += s[a][1]);
                break;
              case 0:
                if (l >= 1 && g >= 1) {
                  s.splice(a - l - g, l + g), (a = a - l - g);
                  for (
                    var u = this.diff_main(o, c, !1, r), p = u.length - 1;
                    p >= 0;
                    p--
                  )
                    s.splice(a, 0, u[p]);
                  a += u.length;
                }
                (g = 0), (l = 0), (o = ""), (c = "");
            }
            a++;
          }
          return s.pop(), s;
        }),
        (e.prototype.diff_bisect_ = function (t, i, r) {
          for (
            var f = t.length,
              h = i.length,
              s = Math.ceil((f + h) / 2),
              a = s,
              l = 2 * s,
              g = new Array(l),
              o = new Array(l),
              c = 0;
            c < l;
            c++
          )
            (g[c] = -1), (o[c] = -1);
          (g[a + 1] = 0), (o[a + 1] = 0);
          for (
            var u = f - h, p = u % 2 != 0, d = 0, _ = 0, b = 0, v = 0, m = 0;
            m < s && !(new Date().getTime() > r);
            m++
          ) {
            for (var w = -m + d; w <= m - _; w += 2) {
              for (
                var x = a + w,
                  M =
                    (E =
                      w == -m || (w != m && g[x - 1] < g[x + 1])
                        ? g[x + 1]
                        : g[x - 1] + 1) - w;
                E < f && M < h && t.charAt(E) == i.charAt(M);

              )
                E++, M++;
              if (((g[x] = E), E > f)) _ += 2;
              else if (M > h) d += 2;
              else if (p) {
                if ((k = a + u - w) >= 0 && k < l && -1 != o[k])
                  if (E >= (D = f - o[k]))
                    return this.diff_bisectSplit_(t, i, E, M, r);
              }
            }
            for (var y = -m + b; y <= m - v; y += 2) {
              for (
                var D,
                  k = a + y,
                  A =
                    (D =
                      y == -m || (y != m && o[k - 1] < o[k + 1])
                        ? o[k + 1]
                        : o[k - 1] + 1) - y;
                D < f && A < h && t.charAt(f - D - 1) == i.charAt(h - A - 1);

              )
                D++, A++;
              if (((o[k] = D), D > f)) v += 2;
              else if (A > h) b += 2;
              else if (!p) {
                if ((x = a + u - y) >= 0 && x < l && -1 != g[x]) {
                  var E;
                  M = a + (E = g[x]) - x;
                  if (E >= (D = f - D))
                    return this.diff_bisectSplit_(t, i, E, M, r);
                }
              }
            }
          }
          return [new e.Diff(n, t), new e.Diff(1, i)];
        }),
        (e.prototype.diff_bisectSplit_ = function (t, e, n, i, r) {
          var f = t.substring(0, n),
            h = e.substring(0, i),
            s = t.substring(n),
            a = e.substring(i),
            l = this.diff_main(f, h, !1, r),
            g = this.diff_main(s, a, !1, r);
          return l.concat(g);
        }),
        (e.prototype.diff_linesToChars_ = function (t, e) {
          var n = [],
            i = {};
          function r(t) {
            for (var e = "", r = 0, h = -1, s = n.length; h < t.length - 1; ) {
              -1 == (h = t.indexOf("\n", r)) && (h = t.length - 1);
              var a = t.substring(r, h + 1);
              (i.hasOwnProperty ? i.hasOwnProperty(a) : void 0 !== i[a])
                ? (e += String.fromCharCode(i[a]))
                : (s == f && ((a = t.substring(r)), (h = t.length)),
                  (e += String.fromCharCode(s)),
                  (i[a] = s),
                  (n[s++] = a)),
                (r = h + 1);
            }
            return e;
          }
          n[0] = "";
          var f = 4e4,
            h = r(t);
          return (f = 65535), { chars1: h, chars2: r(e), lineArray: n };
        }),
        (e.prototype.diff_charsToLines_ = function (t, e) {
          for (var n = 0; n < t.length; n++) {
            for (var i = t[n][1], r = [], f = 0; f < i.length; f++)
              r[f] = e[i.charCodeAt(f)];
            t[n][1] = r.join("");
          }
        }),
        (e.prototype.diff_commonPrefix = function (t, e) {
          if (!t || !e || t.charAt(0) != e.charAt(0)) return 0;
          for (
            var n = 0, i = Math.min(t.length, e.length), r = i, f = 0;
            n < r;

          )
            t.substring(f, r) == e.substring(f, r) ? (f = n = r) : (i = r),
              (r = Math.floor((i - n) / 2 + n));
          return r;
        }),
        (e.prototype.diff_commonSuffix = function (t, e) {
          if (!t || !e || t.charAt(t.length - 1) != e.charAt(e.length - 1))
            return 0;
          for (
            var n = 0, i = Math.min(t.length, e.length), r = i, f = 0;
            n < r;

          )
            t.substring(t.length - r, t.length - f) ==
            e.substring(e.length - r, e.length - f)
              ? (f = n = r)
              : (i = r),
              (r = Math.floor((i - n) / 2 + n));
          return r;
        }),
        (e.prototype.diff_commonOverlap_ = function (t, e) {
          var n = t.length,
            i = e.length;
          if (0 == n || 0 == i) return 0;
          n > i ? (t = t.substring(n - i)) : n < i && (e = e.substring(0, n));
          var r = Math.min(n, i);
          if (t == e) return r;
          for (var f = 0, h = 1; ; ) {
            var s = t.substring(r - h),
              a = e.indexOf(s);
            if (-1 == a) return f;
            (h += a),
              (0 != a && t.substring(r - h) != e.substring(0, h)) ||
                ((f = h), h++);
          }
        }),
        (e.prototype.diff_halfMatch_ = function (t, e) {
          if (this.Diff_Timeout <= 0) return null;
          var n = t.length > e.length ? t : e,
            i = t.length > e.length ? e : t;
          if (n.length < 4 || 2 * i.length < n.length) return null;
          var r = this;
          function f(t, e, n) {
            for (
              var i,
                f,
                h,
                s,
                a = t.substring(n, n + Math.floor(t.length / 4)),
                l = -1,
                g = "";
              -1 != (l = e.indexOf(a, l + 1));

            ) {
              var o = r.diff_commonPrefix(t.substring(n), e.substring(l)),
                c = r.diff_commonSuffix(t.substring(0, n), e.substring(0, l));
              g.length < c + o &&
                ((g = e.substring(l - c, l) + e.substring(l, l + o)),
                (i = t.substring(0, n - c)),
                (f = t.substring(n + o)),
                (h = e.substring(0, l - c)),
                (s = e.substring(l + o)));
            }
            return 2 * g.length >= t.length ? [i, f, h, s, g] : null;
          }
          var h,
            s,
            a,
            l,
            g,
            o = f(n, i, Math.ceil(n.length / 4)),
            c = f(n, i, Math.ceil(n.length / 2));
          return o || c
            ? ((h = c ? (o && o[4].length > c[4].length ? o : c) : o),
              t.length > e.length
                ? ((s = h[0]), (a = h[1]), (l = h[2]), (g = h[3]))
                : ((l = h[0]), (g = h[1]), (s = h[2]), (a = h[3])),
              [s, a, l, g, h[4]])
            : null;
        }),
        (e.prototype.diff_cleanupSemantic = function (t) {
          for (
            var i = !1,
              r = [],
              f = 0,
              h = null,
              s = 0,
              a = 0,
              l = 0,
              g = 0,
              o = 0;
            s < t.length;

          )
            0 == t[s][0]
              ? ((r[f++] = s),
                (a = g),
                (l = o),
                (g = 0),
                (o = 0),
                (h = t[s][1]))
              : (1 == t[s][0] ? (g += t[s][1].length) : (o += t[s][1].length),
                h &&
                  h.length <= Math.max(a, l) &&
                  h.length <= Math.max(g, o) &&
                  (t.splice(r[f - 1], 0, new e.Diff(n, h)),
                  (t[r[f - 1] + 1][0] = 1),
                  f--,
                  (s = --f > 0 ? r[f - 1] : -1),
                  (a = 0),
                  (l = 0),
                  (g = 0),
                  (o = 0),
                  (h = null),
                  (i = !0))),
              s++;
          for (
            i && this.diff_cleanupMerge(t),
              this.diff_cleanupSemanticLossless(t),
              s = 1;
            s < t.length;

          ) {
            if (t[s - 1][0] == n && 1 == t[s][0]) {
              var c = t[s - 1][1],
                u = t[s][1],
                p = this.diff_commonOverlap_(c, u),
                d = this.diff_commonOverlap_(u, c);
              p >= d
                ? (p >= c.length / 2 || p >= u.length / 2) &&
                  (t.splice(s, 0, new e.Diff(0, u.substring(0, p))),
                  (t[s - 1][1] = c.substring(0, c.length - p)),
                  (t[s + 1][1] = u.substring(p)),
                  s++)
                : (d >= c.length / 2 || d >= u.length / 2) &&
                  (t.splice(s, 0, new e.Diff(0, c.substring(0, d))),
                  (t[s - 1][0] = 1),
                  (t[s - 1][1] = u.substring(0, u.length - d)),
                  (t[s + 1][0] = n),
                  (t[s + 1][1] = c.substring(d)),
                  s++),
                s++;
            }
            s++;
          }
        }),
        (e.prototype.diff_cleanupSemanticLossless = function (t) {
          function n(t, n) {
            if (!t || !n) return 6;
            var i = t.charAt(t.length - 1),
              r = n.charAt(0),
              f = i.match(e.nonAlphaNumericRegex_),
              h = r.match(e.nonAlphaNumericRegex_),
              s = f && i.match(e.whitespaceRegex_),
              a = h && r.match(e.whitespaceRegex_),
              l = s && i.match(e.linebreakRegex_),
              g = a && r.match(e.linebreakRegex_),
              o = l && t.match(e.blanklineEndRegex_),
              c = g && n.match(e.blanklineStartRegex_);
            return o || c
              ? 5
              : l || g
              ? 4
              : f && !s && a
              ? 3
              : s || a
              ? 2
              : f || h
              ? 1
              : 0;
          }
          for (var i = 1; i < t.length - 1; ) {
            if (0 == t[i - 1][0] && 0 == t[i + 1][0]) {
              var r = t[i - 1][1],
                f = t[i][1],
                h = t[i + 1][1],
                s = this.diff_commonSuffix(r, f);
              if (s) {
                var a = f.substring(f.length - s);
                (r = r.substring(0, r.length - s)),
                  (f = a + f.substring(0, f.length - s)),
                  (h = a + h);
              }
              for (
                var l = r, g = f, o = h, c = n(r, f) + n(f, h);
                f.charAt(0) === h.charAt(0);

              ) {
                (r += f.charAt(0)),
                  (f = f.substring(1) + h.charAt(0)),
                  (h = h.substring(1));
                var u = n(r, f) + n(f, h);
                u >= c && ((c = u), (l = r), (g = f), (o = h));
              }
              t[i - 1][1] != l &&
                (l ? (t[i - 1][1] = l) : (t.splice(i - 1, 1), i--),
                (t[i][1] = g),
                o ? (t[i + 1][1] = o) : (t.splice(i + 1, 1), i--));
            }
            i++;
          }
        }),
        (e.nonAlphaNumericRegex_ = /[^a-zA-Z0-9]/),
        (e.whitespaceRegex_ = /\s/),
        (e.linebreakRegex_ = /[\r\n]/),
        (e.blanklineEndRegex_ = /\n\r?\n$/),
        (e.blanklineStartRegex_ = /^\r?\n\r?\n/),
        (e.prototype.diff_cleanupEfficiency = function (t) {
          for (
            var i = !1,
              r = [],
              f = 0,
              h = null,
              s = 0,
              a = !1,
              l = !1,
              g = !1,
              o = !1;
            s < t.length;

          )
            0 == t[s][0]
              ? (t[s][1].length < this.Diff_EditCost && (g || o)
                  ? ((r[f++] = s), (a = g), (l = o), (h = t[s][1]))
                  : ((f = 0), (h = null)),
                (g = o = !1))
              : (t[s][0] == n ? (o = !0) : (g = !0),
                h &&
                  ((a && l && g && o) ||
                    (h.length < this.Diff_EditCost / 2 &&
                      a + l + g + o == 3)) &&
                  (t.splice(r[f - 1], 0, new e.Diff(n, h)),
                  (t[r[f - 1] + 1][0] = 1),
                  f--,
                  (h = null),
                  a && l
                    ? ((g = o = !0), (f = 0))
                    : ((s = --f > 0 ? r[f - 1] : -1), (g = o = !1)),
                  (i = !0))),
              s++;
          i && this.diff_cleanupMerge(t);
        }),
        (e.prototype.diff_cleanupMerge = function (t) {
          t.push(new e.Diff(0, ""));
          for (var i, r = 0, f = 0, h = 0, s = "", a = ""; r < t.length; )
            switch (t[r][0]) {
              case 1:
                h++, (a += t[r][1]), r++;
                break;
              case n:
                f++, (s += t[r][1]), r++;
                break;
              case 0:
                f + h > 1
                  ? (0 !== f &&
                      0 !== h &&
                      (0 !== (i = this.diff_commonPrefix(a, s)) &&
                        (r - f - h > 0 && 0 == t[r - f - h - 1][0]
                          ? (t[r - f - h - 1][1] += a.substring(0, i))
                          : (t.splice(0, 0, new e.Diff(0, a.substring(0, i))),
                            r++),
                        (a = a.substring(i)),
                        (s = s.substring(i))),
                      0 !== (i = this.diff_commonSuffix(a, s)) &&
                        ((t[r][1] = a.substring(a.length - i) + t[r][1]),
                        (a = a.substring(0, a.length - i)),
                        (s = s.substring(0, s.length - i)))),
                    (r -= f + h),
                    t.splice(r, f + h),
                    s.length && (t.splice(r, 0, new e.Diff(n, s)), r++),
                    a.length && (t.splice(r, 0, new e.Diff(1, a)), r++),
                    r++)
                  : 0 !== r && 0 == t[r - 1][0]
                  ? ((t[r - 1][1] += t[r][1]), t.splice(r, 1))
                  : r++,
                  (h = 0),
                  (f = 0),
                  (s = ""),
                  (a = "");
            }
          "" === t[t.length - 1][1] && t.pop();
          var l = !1;
          for (r = 1; r < t.length - 1; )
            0 == t[r - 1][0] &&
              0 == t[r + 1][0] &&
              (t[r][1].substring(t[r][1].length - t[r - 1][1].length) ==
              t[r - 1][1]
                ? ((t[r][1] =
                    t[r - 1][1] +
                    t[r][1].substring(0, t[r][1].length - t[r - 1][1].length)),
                  (t[r + 1][1] = t[r - 1][1] + t[r + 1][1]),
                  t.splice(r - 1, 1),
                  (l = !0))
                : t[r][1].substring(0, t[r + 1][1].length) == t[r + 1][1] &&
                  ((t[r - 1][1] += t[r + 1][1]),
                  (t[r][1] =
                    t[r][1].substring(t[r + 1][1].length) + t[r + 1][1]),
                  t.splice(r + 1, 1),
                  (l = !0))),
              r++;
          l && this.diff_cleanupMerge(t);
        }),
        (e.prototype.diff_xIndex = function (t, e) {
          var i,
            r = 0,
            f = 0,
            h = 0,
            s = 0;
          for (
            i = 0;
            i < t.length &&
            (1 !== t[i][0] && (r += t[i][1].length),
            t[i][0] !== n && (f += t[i][1].length),
            !(r > e));
            i++
          )
            (h = r), (s = f);
          return t.length != i && t[i][0] === n ? s : s + (e - h);
        }),
        (e.prototype.diff_prettyHtml = function (t) {
          for (
            var e = [], i = /&/g, r = /</g, f = />/g, h = /\n/g, s = 0;
            s < t.length;
            s++
          ) {
            var a = t[s][0],
              l = t[s][1]
                .replace(i, "&amp;")
                .replace(r, "&lt;")
                .replace(f, "&gt;")
                .replace(h, "&para;<br>");
            switch (a) {
              case 1:
                e[s] = '<ins style="background:#e6ffe6;">' + l + "</ins>";
                break;
              case n:
                e[s] = '<del style="background:#ffe6e6;">' + l + "</del>";
                break;
              case 0:
                e[s] = "<span>" + l + "</span>";
            }
          }
          return e.join("");
        }),
        (e.prototype.diff_text1 = function (t) {
          for (var e = [], n = 0; n < t.length; n++)
            1 !== t[n][0] && (e[n] = t[n][1]);
          return e.join("");
        }),
        (e.prototype.diff_text2 = function (t) {
          for (var e = [], i = 0; i < t.length; i++)
            t[i][0] !== n && (e[i] = t[i][1]);
          return e.join("");
        }),
        (e.prototype.diff_levenshtein = function (t) {
          for (var e = 0, i = 0, r = 0, f = 0; f < t.length; f++) {
            var h = t[f][0],
              s = t[f][1];
            switch (h) {
              case 1:
                i += s.length;
                break;
              case n:
                r += s.length;
                break;
              case 0:
                (e += Math.max(i, r)), (i = 0), (r = 0);
            }
          }
          return (e += Math.max(i, r));
        }),
        (e.prototype.diff_toDelta = function (t) {
          for (var e = [], i = 0; i < t.length; i++)
            switch (t[i][0]) {
              case 1:
                e[i] = "+" + encodeURI(t[i][1]);
                break;
              case n:
                e[i] = "-" + t[i][1].length;
                break;
              case 0:
                e[i] = "=" + t[i][1].length;
            }
          return e.join("\t").replace(/%20/g, " ");
        }),
        (e.prototype.diff_fromDelta = function (t, i) {
          for (
            var r = [], f = 0, h = 0, s = i.split(/\t/g), a = 0;
            a < s.length;
            a++
          ) {
            var l = s[a].substring(1);
            switch (s[a].charAt(0)) {
              case "+":
                try {
                  r[f++] = new e.Diff(1, decodeURI(l));
                } catch (c) {
                  throw new Error("Illegal escape in diff_fromDelta: " + l);
                }
                break;
              case "-":
              case "=":
                var g = parseInt(l, 10);
                if (isNaN(g) || g < 0)
                  throw new Error("Invalid number in diff_fromDelta: " + l);
                var o = t.substring(h, (h += g));
                "=" == s[a].charAt(0)
                  ? (r[f++] = new e.Diff(0, o))
                  : (r[f++] = new e.Diff(n, o));
                break;
              default:
                if (s[a])
                  throw new Error(
                    "Invalid diff operation in diff_fromDelta: " + s[a]
                  );
            }
          }
          if (h != t.length)
            throw new Error(
              "Delta length (" +
                h +
                ") does not equal source text length (" +
                t.length +
                ")."
            );
          return r;
        }),
        (e.prototype.match_main = function (t, e, n) {
          if (null == t || null == e || null == n)
            throw new Error("Null input. (match_main)");
          return (
            (n = Math.max(0, Math.min(n, t.length))),
            t == e
              ? 0
              : t.length
              ? t.substring(n, n + e.length) == e
                ? n
                : this.match_bitap_(t, e, n)
              : -1
          );
        }),
        (e.prototype.match_bitap_ = function (t, e, n) {
          if (e.length > this.Match_MaxBits)
            throw new Error("Pattern too long for this browser.");
          var i = this.match_alphabet_(e),
            r = this;
          function f(t, i) {
            var f = t / e.length,
              h = Math.abs(n - i);
            return r.Match_Distance ? f + h / r.Match_Distance : h ? 1 : f;
          }
          var h = this.Match_Threshold,
            s = t.indexOf(e, n);
          -1 != s &&
            ((h = Math.min(f(0, s), h)),
            -1 != (s = t.lastIndexOf(e, n + e.length)) &&
              (h = Math.min(f(0, s), h)));
          var a,
            l,
            g = 1 << (e.length - 1);
          s = -1;
          for (var o, c = e.length + t.length, u = 0; u < e.length; u++) {
            for (a = 0, l = c; a < l; )
              f(u, n + l) <= h ? (a = l) : (c = l),
                (l = Math.floor((c - a) / 2 + a));
            c = l;
            var p = Math.max(1, n - l + 1),
              d = Math.min(n + l, t.length) + e.length,
              _ = Array(d + 2);
            _[d + 1] = (1 << u) - 1;
            for (var b = d; b >= p; b--) {
              var v = i[t.charAt(b - 1)];
              if (
                ((_[b] =
                  0 === u
                    ? ((_[b + 1] << 1) | 1) & v
                    : (((_[b + 1] << 1) | 1) & v) |
                      ((o[b + 1] | o[b]) << 1) |
                      1 |
                      o[b + 1]),
                _[b] & g)
              ) {
                var m = f(u, b - 1);
                if (m <= h) {
                  if (((h = m), !((s = b - 1) > n))) break;
                  p = Math.max(1, 2 * n - s);
                }
              }
            }
            if (f(u + 1, n) > h) break;
            o = _;
          }
          return s;
        }),
        (e.prototype.match_alphabet_ = function (t) {
          for (var e = {}, n = 0; n < t.length; n++) e[t.charAt(n)] = 0;
          for (n = 0; n < t.length; n++)
            e[t.charAt(n)] |= 1 << (t.length - n - 1);
          return e;
        }),
        (e.prototype.patch_addContext_ = function (t, n) {
          if (0 != n.length) {
            if (null === t.start2) throw Error("patch not initialized");
            for (
              var i = n.substring(t.start2, t.start2 + t.length1), r = 0;
              n.indexOf(i) != n.lastIndexOf(i) &&
              i.length <
                this.Match_MaxBits - this.Patch_Margin - this.Patch_Margin;

            )
              (r += this.Patch_Margin),
                (i = n.substring(t.start2 - r, t.start2 + t.length1 + r));
            r += this.Patch_Margin;
            var f = n.substring(t.start2 - r, t.start2);
            f && t.diffs.unshift(new e.Diff(0, f));
            var h = n.substring(t.start2 + t.length1, t.start2 + t.length1 + r);
            h && t.diffs.push(new e.Diff(0, h)),
              (t.start1 -= f.length),
              (t.start2 -= f.length),
              (t.length1 += f.length + h.length),
              (t.length2 += f.length + h.length);
          }
        }),
        (e.prototype.patch_make = function (t, i, r) {
          var f, h;
          if (
            "string" == typeof t &&
            "string" == typeof i &&
            "undefined" == typeof r
          )
            (f = t),
              (h = this.diff_main(f, i, !0)).length > 2 &&
                (this.diff_cleanupSemantic(h), this.diff_cleanupEfficiency(h));
          else if (
            t &&
            "object" == typeof t &&
            "undefined" == typeof i &&
            "undefined" == typeof r
          )
            (h = t), (f = this.diff_text1(h));
          else if (
            "string" == typeof t &&
            i &&
            "object" == typeof i &&
            "undefined" == typeof r
          )
            (f = t), (h = i);
          else {
            if (
              "string" != typeof t ||
              "string" != typeof i ||
              !r ||
              "object" != typeof r
            )
              throw new Error("Unknown call format to patch_make.");
            (f = t), (h = r);
          }
          if (0 === h.length) return [];
          for (
            var s = [],
              a = new e.patch_obj(),
              l = 0,
              g = 0,
              o = 0,
              c = f,
              u = f,
              p = 0;
            p < h.length;
            p++
          ) {
            var d = h[p][0],
              _ = h[p][1];
            switch ((l || 0 === d || ((a.start1 = g), (a.start2 = o)), d)) {
              case 1:
                (a.diffs[l++] = h[p]),
                  (a.length2 += _.length),
                  (u = u.substring(0, o) + _ + u.substring(o));
                break;
              case n:
                (a.length1 += _.length),
                  (a.diffs[l++] = h[p]),
                  (u = u.substring(0, o) + u.substring(o + _.length));
                break;
              case 0:
                _.length <= 2 * this.Patch_Margin && l && h.length != p + 1
                  ? ((a.diffs[l++] = h[p]),
                    (a.length1 += _.length),
                    (a.length2 += _.length))
                  : _.length >= 2 * this.Patch_Margin &&
                    l &&
                    (this.patch_addContext_(a, c),
                    s.push(a),
                    (a = new e.patch_obj()),
                    (l = 0),
                    (c = u),
                    (g = o));
            }
            1 !== d && (g += _.length), d !== n && (o += _.length);
          }
          return l && (this.patch_addContext_(a, c), s.push(a)), s;
        }),
        (e.prototype.patch_deepCopy = function (t) {
          for (var n = [], i = 0; i < t.length; i++) {
            var r = t[i],
              f = new e.patch_obj();
            f.diffs = [];
            for (var h = 0; h < r.diffs.length; h++)
              f.diffs[h] = new e.Diff(r.diffs[h][0], r.diffs[h][1]);
            (f.start1 = r.start1),
              (f.start2 = r.start2),
              (f.length1 = r.length1),
              (f.length2 = r.length2),
              (n[i] = f);
          }
          return n;
        }),
        (e.prototype.patch_apply = function (t, e) {
          if (0 == t.length) return [e, []];
          t = this.patch_deepCopy(t);
          var i = this.patch_addPadding(t);
          (e = i + e + i), this.patch_splitMax(t);
          for (var r = 0, f = [], h = 0; h < t.length; h++) {
            var s,
              a,
              l = t[h].start2 + r,
              g = this.diff_text1(t[h].diffs),
              o = -1;
            if (
              (g.length > this.Match_MaxBits
                ? -1 !=
                    (s = this.match_main(
                      e,
                      g.substring(0, this.Match_MaxBits),
                      l
                    )) &&
                  (-1 ==
                    (o = this.match_main(
                      e,
                      g.substring(g.length - this.Match_MaxBits),
                      l + g.length - this.Match_MaxBits
                    )) ||
                    s >= o) &&
                  (s = -1)
                : (s = this.match_main(e, g, l)),
              -1 == s)
            )
              (f[h] = !1), (r -= t[h].length2 - t[h].length1);
            else if (
              ((f[h] = !0),
              (r = s - l),
              g ==
                (a =
                  -1 == o
                    ? e.substring(s, s + g.length)
                    : e.substring(s, o + this.Match_MaxBits)))
            )
              e =
                e.substring(0, s) +
                this.diff_text2(t[h].diffs) +
                e.substring(s + g.length);
            else {
              var c = this.diff_main(g, a, !1);
              if (
                g.length > this.Match_MaxBits &&
                this.diff_levenshtein(c) / g.length > this.Patch_DeleteThreshold
              )
                f[h] = !1;
              else {
                this.diff_cleanupSemanticLossless(c);
                for (var u, p = 0, d = 0; d < t[h].diffs.length; d++) {
                  var _ = t[h].diffs[d];
                  0 !== _[0] && (u = this.diff_xIndex(c, p)),
                    1 === _[0]
                      ? (e = e.substring(0, s + u) + _[1] + e.substring(s + u))
                      : _[0] === n &&
                        (e =
                          e.substring(0, s + u) +
                          e.substring(
                            s + this.diff_xIndex(c, p + _[1].length)
                          )),
                    _[0] !== n && (p += _[1].length);
                }
              }
            }
          }
          return [(e = e.substring(i.length, e.length - i.length)), f];
        }),
        (e.prototype.patch_addPadding = function (t) {
          for (var n = this.Patch_Margin, i = "", r = 1; r <= n; r++)
            i += String.fromCharCode(r);
          for (r = 0; r < t.length; r++) (t[r].start1 += n), (t[r].start2 += n);
          var f = t[0],
            h = f.diffs;
          if (0 == h.length || 0 != h[0][0])
            h.unshift(new e.Diff(0, i)),
              (f.start1 -= n),
              (f.start2 -= n),
              (f.length1 += n),
              (f.length2 += n);
          else if (n > h[0][1].length) {
            var s = n - h[0][1].length;
            (h[0][1] = i.substring(h[0][1].length) + h[0][1]),
              (f.start1 -= s),
              (f.start2 -= s),
              (f.length1 += s),
              (f.length2 += s);
          }
          if (
            0 == (h = (f = t[t.length - 1]).diffs).length ||
            0 != h[h.length - 1][0]
          )
            h.push(new e.Diff(0, i)), (f.length1 += n), (f.length2 += n);
          else if (n > h[h.length - 1][1].length) {
            s = n - h[h.length - 1][1].length;
            (h[h.length - 1][1] += i.substring(0, s)),
              (f.length1 += s),
              (f.length2 += s);
          }
          return i;
        }),
        (e.prototype.patch_splitMax = function (t) {
          for (var i = this.Match_MaxBits, r = 0; r < t.length; r++)
            if (!(t[r].length1 <= i)) {
              var f = t[r];
              t.splice(r--, 1);
              for (
                var h = f.start1, s = f.start2, a = "";
                0 !== f.diffs.length;

              ) {
                var l = new e.patch_obj(),
                  g = !0;
                for (
                  l.start1 = h - a.length,
                    l.start2 = s - a.length,
                    "" !== a &&
                      ((l.length1 = l.length2 = a.length),
                      l.diffs.push(new e.Diff(0, a)));
                  0 !== f.diffs.length && l.length1 < i - this.Patch_Margin;

                ) {
                  var o = f.diffs[0][0],
                    c = f.diffs[0][1];
                  1 === o
                    ? ((l.length2 += c.length),
                      (s += c.length),
                      l.diffs.push(f.diffs.shift()),
                      (g = !1))
                    : o === n &&
                      1 == l.diffs.length &&
                      0 == l.diffs[0][0] &&
                      c.length > 2 * i
                    ? ((l.length1 += c.length),
                      (h += c.length),
                      (g = !1),
                      l.diffs.push(new e.Diff(o, c)),
                      f.diffs.shift())
                    : ((c = c.substring(0, i - l.length1 - this.Patch_Margin)),
                      (l.length1 += c.length),
                      (h += c.length),
                      0 === o
                        ? ((l.length2 += c.length), (s += c.length))
                        : (g = !1),
                      l.diffs.push(new e.Diff(o, c)),
                      c == f.diffs[0][1]
                        ? f.diffs.shift()
                        : (f.diffs[0][1] = f.diffs[0][1].substring(c.length)));
                }
                a = (a = this.diff_text2(l.diffs)).substring(
                  a.length - this.Patch_Margin
                );
                var u = this.diff_text1(f.diffs).substring(
                  0,
                  this.Patch_Margin
                );
                "" !== u &&
                  ((l.length1 += u.length),
                  (l.length2 += u.length),
                  0 !== l.diffs.length && 0 === l.diffs[l.diffs.length - 1][0]
                    ? (l.diffs[l.diffs.length - 1][1] += u)
                    : l.diffs.push(new e.Diff(0, u))),
                  g || t.splice(++r, 0, l);
              }
            }
        }),
        (e.prototype.patch_toText = function (t) {
          for (var e = [], n = 0; n < t.length; n++) e[n] = t[n];
          return e.join("");
        }),
        (e.prototype.patch_fromText = function (t) {
          var i = [];
          if (!t) return i;
          for (
            var r = t.split("\n"),
              f = 0,
              h = /^@@ -(\d+),?(\d*) \+(\d+),?(\d*) @@$/;
            f < r.length;

          ) {
            var s = r[f].match(h);
            if (!s) throw new Error("Invalid patch string: " + r[f]);
            var a = new e.patch_obj();
            for (
              i.push(a),
                a.start1 = parseInt(s[1], 10),
                "" === s[2]
                  ? (a.start1--, (a.length1 = 1))
                  : "0" == s[2]
                  ? (a.length1 = 0)
                  : (a.start1--, (a.length1 = parseInt(s[2], 10))),
                a.start2 = parseInt(s[3], 10),
                "" === s[4]
                  ? (a.start2--, (a.length2 = 1))
                  : "0" == s[4]
                  ? (a.length2 = 0)
                  : (a.start2--, (a.length2 = parseInt(s[4], 10))),
                f++;
              f < r.length;

            ) {
              var l = r[f].charAt(0);
              try {
                var g = decodeURI(r[f].substring(1));
              } catch (o) {
                throw new Error("Illegal escape in patch_fromText: " + g);
              }
              if ("-" == l) a.diffs.push(new e.Diff(n, g));
              else if ("+" == l) a.diffs.push(new e.Diff(1, g));
              else if (" " == l) a.diffs.push(new e.Diff(0, g));
              else {
                if ("@" == l) break;
                if ("" !== l)
                  throw new Error('Invalid patch mode "' + l + '" in: ' + g);
              }
              f++;
            }
          }
          return i;
        }),
        ((e.patch_obj = function () {
          (this.diffs = []),
            (this.start1 = null),
            (this.start2 = null),
            (this.length1 = 0),
            (this.length2 = 0);
        }).prototype.toString = function () {
          for (
            var t,
              e = [
                "@@ -" +
                  (0 === this.length1
                    ? this.start1 + ",0"
                    : 1 == this.length1
                    ? this.start1 + 1
                    : this.start1 + 1 + "," + this.length1) +
                  " +" +
                  (0 === this.length2
                    ? this.start2 + ",0"
                    : 1 == this.length2
                    ? this.start2 + 1
                    : this.start2 + 1 + "," + this.length2) +
                  " @@\n",
              ],
              i = 0;
            i < this.diffs.length;
            i++
          ) {
            switch (this.diffs[i][0]) {
              case 1:
                t = "+";
                break;
              case n:
                t = "-";
                break;
              case 0:
                t = " ";
            }
            e[i + 1] = t + encodeURI(this.diffs[i][1]) + "\n";
          }
          return e.join("").replace(/%20/g, " ");
        }),
        (t.exports = e),
        (t.exports.diff_match_patch = e),
        (t.exports.DIFF_DELETE = n),
        (t.exports.DIFF_INSERT = 1),
        (t.exports.DIFF_EQUAL = 0);
    },
  },
]);
