(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [34701],
  {
    593539: function (t, e) {
      !(function (t) {
        "use strict";
        class e {
          constructor() {
            e.constructor_.apply(this, arguments);
          }
          static equalsWithTolerance(t, e, n) {
            return Math.abs(t - e) <= n;
          }
          getClass() {
            return e;
          }
          get interfaces_() {
            return [];
          }
        }
        function n(t) {
          this.message = t;
        }
        function s(t, e) {
          (this.low = 0 | e), (this.high = 0 | t);
        }
        function i() {}
        function r() {}
        function o() {}
        function l() {}
        function a() {}
        function c(t) {
          (this.name = "RuntimeException"),
            (this.message = t),
            (this.stack = new Error().stack),
            Error.call(this, t);
        }
        (e.constructor_ = function () {}),
          (s.toBinaryString = function (t) {
            let e,
              n = "";
            for (e = 2147483648; e > 0; e >>>= 1)
              n += (t.high & e) === e ? "1" : "0";
            for (e = 2147483648; e > 0; e >>>= 1)
              n += (t.low & e) === e ? "1" : "0";
            return n;
          }),
          (i.isNaN = (t) => Number.isNaN(t)),
          (i.isInfinite = (t) => !Number.isFinite(t)),
          (i.MAX_VALUE = Number.MAX_VALUE),
          "function" == typeof Float64Array && "function" == typeof Int32Array
            ? (function () {
                const t = new Float64Array(1),
                  e = new Int32Array(t.buffer);
                (i.doubleToLongBits = function (n) {
                  t[0] = n;
                  let i = 0 | e[0],
                    r = 0 | e[1];
                  return (
                    2146435072 == (2146435072 & r) &&
                      0 != (1048575 & r) &&
                      0 !== i &&
                      ((i = 0), (r = 2146959360)),
                    new s(r, i)
                  );
                }),
                  (i.longBitsToDouble = function (n) {
                    return (e[0] = n.low), (e[1] = n.high), t[0];
                  });
              })()
            : (function () {
                const t = Math.log2,
                  e = Math.floor,
                  n = Math.pow,
                  r = (function () {
                    for (let s = 53; s > 0; s--) {
                      const i = n(2, s) - 1;
                      if (e(t(i)) + 1 === s) return i;
                    }
                    return 0;
                  })();
                (i.doubleToLongBits = function (i) {
                  let o, l, a, c, h, u, g, d, _;
                  if (
                    (i < 0 || 1 / i === Number.NEGATIVE_INFINITY
                      ? ((u = 1 << 31), (i = -i))
                      : (u = 0),
                    0 === i)
                  )
                    return new s((d = u), (_ = 0));
                  if (i === 1 / 0) return new s((d = 2146435072 | u), (_ = 0));
                  if (i != i) return new s((d = 2146959360), (_ = 0));
                  if (((c = 0), (_ = 0), (o = e(i)) > 1))
                    if (o <= r)
                      (c = e(t(o))) <= 20
                        ? ((_ = 0), (d = (o << (20 - c)) & 1048575))
                        : ((_ = o % (l = n(2, (a = c - 20))) << (32 - a)),
                          (d = (o / l) & 1048575));
                    else
                      for (a = o, _ = 0; 0 !== (a = e((l = a / 2))); )
                        c++,
                          (_ >>>= 1),
                          (_ |= (1 & d) << 31),
                          (d >>>= 1),
                          l !== a && (d |= 524288);
                  if (
                    ((g = c + 1023),
                    (h = 0 === o),
                    (o = i - o),
                    c < 52 && 0 !== o)
                  )
                    for (a = 0; ; ) {
                      if (
                        ((l = 2 * o) >= 1
                          ? ((o = l - 1),
                            h ? (g--, (h = !1)) : ((a <<= 1), (a |= 1), c++))
                          : ((o = l),
                            h ? 0 == --g && (c++, (h = !1)) : ((a <<= 1), c++)),
                        20 === c)
                      )
                        (d |= a), (a = 0);
                      else if (52 === c) {
                        _ |= a;
                        break;
                      }
                      if (1 === l) {
                        c < 20
                          ? (d |= a << (20 - c))
                          : c < 52 && (_ |= a << (52 - c));
                        break;
                      }
                    }
                  return (d |= g << 20), new s((d |= u), _);
                }),
                  (i.longBitsToDouble = function (t) {
                    let e, s, i, r, o;
                    const l = t.high,
                      a = t.low;
                    for (
                      i = l & (1 << 31) ? -1 : 1,
                        r = ((2146435072 & l) >> 20) - 1023,
                        o = 0,
                        s = 1 << 19,
                        e = 1;
                      e <= 20;
                      e++
                    )
                      l & s && (o += n(2, -e)), (s >>>= 1);
                    for (s = 1 << 31, e = 21; e <= 52; e++)
                      a & s && (o += n(2, -e)), (s >>>= 1);
                    if (-1023 === r) {
                      if (0 === o) return 0 * i;
                      r = -1022;
                    } else {
                      if (1024 === r) return 0 === o ? i / 0 : NaN;
                      o += 1;
                    }
                    return i * o * n(2, r);
                  });
              })(),
          (c.prototype = Object.create(Error.prototype)),
          (c.prototype.constructor = Error);
        class h extends c {
          constructor() {
            super(), h.constructor_.apply(this, arguments);
          }
          getClass() {
            return h;
          }
          get interfaces_() {
            return [];
          }
        }
        h.constructor_ = function () {
          if (0 === arguments.length) c.constructor_.call(this);
          else if (1 === arguments.length) {
            const t = arguments[0];
            c.constructor_.call(this, t);
          }
        };
        class u {
          constructor() {
            u.constructor_.apply(this, arguments);
          }
          static shouldNeverReachHere() {
            if (0 === arguments.length) u.shouldNeverReachHere(null);
            else if (1 === arguments.length) {
              const t = arguments[0];
              throw new h(
                "Should never reach here" + (null !== t ? ": " + t : "")
              );
            }
          }
          static isTrue() {
            if (1 === arguments.length) {
              const t = arguments[0];
              u.isTrue(t, null);
            } else if (2 === arguments.length) {
              const t = arguments[1];
              if (!arguments[0]) throw null === t ? new h() : new h(t);
            }
          }
          static equals() {
            if (2 === arguments.length) {
              const t = arguments[0],
                e = arguments[1];
              u.equals(t, e, null);
            } else if (3 === arguments.length) {
              const t = arguments[0],
                e = arguments[1],
                n = arguments[2];
              if (!e.equals(t))
                throw new h(
                  "Expected " +
                    t +
                    " but encountered " +
                    e +
                    (null !== n ? ": " + n : "")
                );
            }
          }
          getClass() {
            return u;
          }
          get interfaces_() {
            return [];
          }
        }
        u.constructor_ = function () {};
        class g {
          constructor() {
            g.constructor_.apply(this, arguments);
          }
          static hashCode() {
            if (1 === arguments.length && "number" == typeof arguments[0]) {
              const t = arguments[0],
                e = i.doubleToLongBits(t);
              return Math.trunc(e ^ (e >>> 32));
            }
          }
          setOrdinate(t, e) {
            switch (t) {
              case g.X:
                this.x = e;
                break;
              case g.Y:
                this.y = e;
                break;
              case g.Z:
                this.z = e;
                break;
              default:
                throw new n("Invalid ordinate index: " + t);
            }
          }
          equals2D() {
            if (1 === arguments.length) {
              const t = arguments[0];
              return this.x === t.x && this.y === t.y;
            }
            if (2 === arguments.length) {
              const t = arguments[0],
                n = arguments[1];
              return (
                !!e.equalsWithTolerance(this.x, t.x, n) &&
                !!e.equalsWithTolerance(this.y, t.y, n)
              );
            }
          }
          getOrdinate(t) {
            switch (t) {
              case g.X:
                return this.x;
              case g.Y:
                return this.y;
              case g.Z:
                return this.z;
            }
            throw new n("Invalid ordinate index: " + t);
          }
          equals3D(t) {
            return (
              this.x === t.x &&
              this.y === t.y &&
              (this.z === t.z || (i.isNaN(this.z) && i.isNaN(t.z)))
            );
          }
          equals(t) {
            return t instanceof g && this.equals2D(t);
          }
          equalInZ(t, n) {
            return e.equalsWithTolerance(this.z, t.z, n);
          }
          compareTo(t) {
            const e = t;
            return this.x < e.x
              ? -1
              : this.x > e.x
              ? 1
              : this.y < e.y
              ? -1
              : this.y > e.y
              ? 1
              : 0;
          }
          clone() {
            try {
              return null;
            } catch (t) {
              if (t instanceof CloneNotSupportedException)
                return (
                  u.shouldNeverReachHere(
                    "this shouldn't happen because this class is Cloneable"
                  ),
                  null
                );
              throw t;
            }
          }
          copy() {
            return new g(this);
          }
          toString() {
            return "(" + this.x + ", " + this.y + ", " + this.z + ")";
          }
          distance3D(t) {
            const e = this.x - t.x,
              n = this.y - t.y,
              s = this.z - t.z;
            return Math.sqrt(e * e + n * n + s * s);
          }
          distance(t) {
            const e = this.x - t.x,
              n = this.y - t.y;
            return Math.sqrt(e * e + n * n);
          }
          hashCode() {
            let t = 17;
            return 37 * (t = 37 * t + g.hashCode(this.x)) + g.hashCode(this.y);
          }
          setCoordinate(t) {
            (this.x = t.x), (this.y = t.y), (this.z = t.z);
          }
          getClass() {
            return g;
          }
          get interfaces_() {
            return [r, o, a];
          }
        }
        class d {
          constructor() {
            d.constructor_.apply(this, arguments);
          }
          static compare(t, e) {
            return t < e
              ? -1
              : t > e
              ? 1
              : i.isNaN(t)
              ? i.isNaN(e)
                ? 0
                : -1
              : i.isNaN(e)
              ? 1
              : 0;
          }
          compare(t, e) {
            const n = t,
              s = e,
              i = d.compare(n.x, s.x);
            if (0 !== i) return i;
            const r = d.compare(n.y, s.y);
            return 0 !== r
              ? r
              : this._dimensionsToTest <= 2
              ? 0
              : d.compare(n.z, s.z);
          }
          getClass() {
            return d;
          }
          get interfaces_() {
            return [l];
          }
        }
        function _(t, e) {
          return t.interfaces_ && t.interfaces_.indexOf(e) > -1;
        }
        function p() {}
        function f(t) {
          this.message = t || "";
        }
        function m() {}
        function y(t) {
          this.message = t || "";
        }
        function x() {
          (this.array_ = []),
            arguments[0] instanceof p && this.addAll(arguments[0]);
        }
        (d.constructor_ = function () {
          if (((this._dimensionsToTest = 2), 0 === arguments.length))
            d.constructor_.call(this, 2);
          else if (1 === arguments.length) {
            const t = arguments[0];
            if (2 !== t && 3 !== t)
              throw new n("only 2 or 3 dimensions may be specified");
            this._dimensionsToTest = t;
          }
        }),
          (g.DimensionalComparator = d),
          (g.constructor_ = function () {
            if (
              ((this.x = null),
              (this.y = null),
              (this.z = null),
              0 === arguments.length)
            )
              g.constructor_.call(this, 0, 0);
            else if (1 === arguments.length) {
              const t = arguments[0];
              g.constructor_.call(this, t.x, t.y, t.z);
            } else if (2 === arguments.length) {
              const t = arguments[0],
                e = arguments[1];
              g.constructor_.call(this, t, e, g.NULL_ORDINATE);
            } else if (3 === arguments.length) {
              const t = arguments[0],
                e = arguments[1],
                n = arguments[2];
              (this.x = t), (this.y = e), (this.z = n);
            }
          }),
          (g.serialVersionUID = 0x5cbf2c235c7e5800),
          (g.NULL_ORDINATE = i.NaN),
          (g.X = 0),
          (g.Y = 1),
          (g.Z = 2),
          (p.prototype.add = function () {}),
          (p.prototype.addAll = function () {}),
          (p.prototype.isEmpty = function () {}),
          (p.prototype.iterator = function () {}),
          (p.prototype.size = function () {}),
          (p.prototype.toArray = function () {}),
          (p.prototype.remove = function () {}),
          (f.prototype = new Error()),
          (f.prototype.name = "IndexOutOfBoundsException"),
          (m.prototype = Object.create(p.prototype)),
          (m.prototype.constructor = m),
          (m.prototype.get = function () {}),
          (m.prototype.set = function () {}),
          (m.prototype.isEmpty = function () {}),
          (y.prototype = new Error()),
          (y.prototype.name = "NoSuchElementException"),
          (x.prototype = Object.create(m.prototype)),
          (x.prototype.constructor = x),
          (x.prototype.ensureCapacity = function () {}),
          (x.prototype.interfaces_ = [m, p]),
          (x.prototype.add = function (t) {
            return (
              1 === arguments.length
                ? this.array_.push(t)
                : this.array_.splice(arguments[0], 0, arguments[1]),
              !0
            );
          }),
          (x.prototype.clear = function () {
            this.array_ = [];
          }),
          (x.prototype.addAll = function (t) {
            for (let e = t.iterator(); e.hasNext(); ) this.add(e.next());
            return !0;
          }),
          (x.prototype.set = function (t, e) {
            const n = this.array_[t];
            return (this.array_[t] = e), n;
          }),
          (x.prototype.iterator = function () {
            return new E(this);
          }),
          (x.prototype.get = function (t) {
            if (t < 0 || t >= this.size()) throw new f();
            return this.array_[t];
          }),
          (x.prototype.isEmpty = function () {
            return 0 === this.array_.length;
          }),
          (x.prototype.size = function () {
            return this.array_.length;
          }),
          (x.prototype.toArray = function () {
            const t = [];
            for (let e = 0, n = this.array_.length; e < n; e++)
              t.push(this.array_[e]);
            return t;
          }),
          (x.prototype.remove = function (t) {
            let e = !1;
            for (let n = 0, s = this.array_.length; n < s; n++)
              if (this.array_[n] === t) {
                this.array_.splice(n, 1), (e = !0);
                break;
              }
            return e;
          }),
          (x.prototype.removeAll = function (t) {
            for (let e = t.iterator(); e.hasNext(); ) this.remove(e.next());
            return !0;
          });
        const E = function (t) {
          (this.arrayList_ = t), (this.position_ = 0);
        };
        (E.prototype.next = function () {
          if (this.position_ === this.arrayList_.size()) throw new y();
          return this.arrayList_.get(this.position_++);
        }),
          (E.prototype.hasNext = function () {
            return this.position_ < this.arrayList_.size();
          }),
          (E.prototype.set = function (t) {
            return this.arrayList_.set(this.position_ - 1, t);
          }),
          (E.prototype.remove = function () {
            this.arrayList_.remove(this.arrayList_.get(this.position_));
          });
        class I extends x {
          constructor() {
            super(), I.constructor_.apply(this, arguments);
          }
          getCoordinate(t) {
            return this.get(t);
          }
          addAll() {
            if (
              2 === arguments.length &&
              "boolean" == typeof arguments[1] &&
              _(arguments[0], p)
            ) {
              const t = arguments[1];
              let e = !1;
              for (let n = arguments[0].iterator(); n.hasNext(); )
                this.add(n.next(), t), (e = !0);
              return e;
            }
            return super.addAll.apply(this, arguments);
          }
          clone() {
            const t = super.clone.call(this);
            for (let e = 0; e < this.size(); e++) t.add(e, this.get(e).clone());
            return t;
          }
          toCoordinateArray() {
            return this.toArray(I.coordArrayType);
          }
          add() {
            if (1 === arguments.length) {
              const t = arguments[0];
              super.add.call(this, t);
            } else if (2 === arguments.length) {
              if (
                arguments[0] instanceof Array &&
                "boolean" == typeof arguments[1]
              ) {
                const t = arguments[0],
                  e = arguments[1];
                return this.add(t, e, !0), !0;
              }
              if (
                arguments[0] instanceof g &&
                "boolean" == typeof arguments[1]
              ) {
                const t = arguments[0];
                if (
                  !arguments[1] &&
                  this.size() >= 1 &&
                  this.get(this.size() - 1).equals2D(t)
                )
                  return null;
                super.add.call(this, t);
              } else if (
                arguments[0] instanceof Object &&
                "boolean" == typeof arguments[1]
              ) {
                const t = arguments[0],
                  e = arguments[1];
                return this.add(t, e), !0;
              }
            } else if (3 === arguments.length) {
              if (
                "boolean" == typeof arguments[2] &&
                arguments[0] instanceof Array &&
                "boolean" == typeof arguments[1]
              ) {
                const t = arguments[0],
                  e = arguments[1];
                if (arguments[2])
                  for (let n = 0; n < t.length; n++) this.add(t[n], e);
                else for (let n = t.length - 1; n >= 0; n--) this.add(t[n], e);
                return !0;
              }
              if (
                "boolean" == typeof arguments[2] &&
                Number.isInteger(arguments[0]) &&
                arguments[1] instanceof g
              ) {
                const t = arguments[0],
                  e = arguments[1];
                if (!arguments[2]) {
                  const n = this.size();
                  if (n > 0) {
                    if (t > 0 && this.get(t - 1).equals2D(e)) return null;
                    if (t < n && this.get(t).equals2D(e)) return null;
                  }
                }
                super.add.call(this, t, e);
              }
            } else if (4 === arguments.length) {
              const t = arguments[0],
                e = arguments[1],
                n = arguments[2],
                s = arguments[3];
              let i = 1;
              n > s && (i = -1);
              for (let r = n; r !== s; r += i) this.add(t[r], e);
              return !0;
            }
          }
          closeRing() {
            this.size() > 0 && this.add(new g(this.get(0)), !1);
          }
          getClass() {
            return I;
          }
          get interfaces_() {
            return [];
          }
        }
        (I.constructor_ = function () {
          if (0 === arguments.length);
          else if (1 === arguments.length) {
            const t = arguments[0];
            this.ensureCapacity(t.length), this.add(t, !0);
          } else if (2 === arguments.length) {
            const t = arguments[0],
              e = arguments[1];
            this.ensureCapacity(t.length), this.add(t, e);
          }
        }),
          (I.coordArrayType = new Array(0).fill(null));
        class N {
          constructor() {
            N.constructor_.apply(this, arguments);
          }
          static intersects() {
            if (3 === arguments.length) {
              const t = arguments[0],
                e = arguments[1],
                n = arguments[2];
              return (
                n.x >= (t.x < e.x ? t.x : e.x) &&
                n.x <= (t.x > e.x ? t.x : e.x) &&
                n.y >= (t.y < e.y ? t.y : e.y) &&
                n.y <= (t.y > e.y ? t.y : e.y)
              );
            }
            if (4 === arguments.length) {
              const t = arguments[0],
                e = arguments[1],
                n = arguments[2],
                s = arguments[3];
              let i = Math.min(n.x, s.x),
                r = Math.max(n.x, s.x),
                o = Math.min(t.x, e.x),
                l = Math.max(t.x, e.x);
              return (
                !(o > r) &&
                !(l < i) &&
                ((i = Math.min(n.y, s.y)),
                (r = Math.max(n.y, s.y)),
                (o = Math.min(t.y, e.y)),
                (l = Math.max(t.y, e.y)),
                !(o > r) && !(l < i))
              );
            }
          }
          getArea() {
            return this.getWidth() * this.getHeight();
          }
          equals(t) {
            if (!(t instanceof N)) return !1;
            const e = t;
            return this.isNull()
              ? e.isNull()
              : this._maxx === e.getMaxX() &&
                  this._maxy === e.getMaxY() &&
                  this._minx === e.getMinX() &&
                  this._miny === e.getMinY();
          }
          intersection(t) {
            if (this.isNull() || t.isNull() || !this.intersects(t))
              return new N();
            const e = this._minx > t._minx ? this._minx : t._minx,
              n = this._miny > t._miny ? this._miny : t._miny,
              s = this._maxx < t._maxx ? this._maxx : t._maxx,
              i = this._maxy < t._maxy ? this._maxy : t._maxy;
            return new N(e, s, n, i);
          }
          isNull() {
            return this._maxx < this._minx;
          }
          getMaxX() {
            return this._maxx;
          }
          covers() {
            if (1 === arguments.length) {
              if (arguments[0] instanceof g) {
                const t = arguments[0];
                return this.covers(t.x, t.y);
              }
              if (arguments[0] instanceof N) {
                const t = arguments[0];
                return (
                  !this.isNull() &&
                  !t.isNull() &&
                  t.getMinX() >= this._minx &&
                  t.getMaxX() <= this._maxx &&
                  t.getMinY() >= this._miny &&
                  t.getMaxY() <= this._maxy
                );
              }
            } else if (2 === arguments.length) {
              const t = arguments[0],
                e = arguments[1];
              return (
                !this.isNull() &&
                t >= this._minx &&
                t <= this._maxx &&
                e >= this._miny &&
                e <= this._maxy
              );
            }
          }
          intersects() {
            if (1 === arguments.length) {
              if (arguments[0] instanceof N) {
                const t = arguments[0];
                return (
                  !this.isNull() &&
                  !t.isNull() &&
                  !(
                    t._minx > this._maxx ||
                    t._maxx < this._minx ||
                    t._miny > this._maxy ||
                    t._maxy < this._miny
                  )
                );
              }
              if (arguments[0] instanceof g) {
                const t = arguments[0];
                return this.intersects(t.x, t.y);
              }
            } else if (2 === arguments.length) {
              if (arguments[0] instanceof g && arguments[1] instanceof g) {
                const t = arguments[0],
                  e = arguments[1];
                return (
                  !this.isNull() &&
                  !((t.x < e.x ? t.x : e.x) > this._maxx) &&
                  !((t.x > e.x ? t.x : e.x) < this._minx) &&
                  !((t.y < e.y ? t.y : e.y) > this._maxy) &&
                  !((t.y > e.y ? t.y : e.y) < this._miny)
                );
              }
              if (
                "number" == typeof arguments[0] &&
                "number" == typeof arguments[1]
              ) {
                const t = arguments[0],
                  e = arguments[1];
                return (
                  !this.isNull() &&
                  !(
                    t > this._maxx ||
                    t < this._minx ||
                    e > this._maxy ||
                    e < this._miny
                  )
                );
              }
            }
          }
          getMinY() {
            return this._miny;
          }
          getMinX() {
            return this._minx;
          }
          expandToInclude() {
            if (1 === arguments.length) {
              if (arguments[0] instanceof g) {
                const t = arguments[0];
                this.expandToInclude(t.x, t.y);
              } else if (arguments[0] instanceof N) {
                const t = arguments[0];
                if (t.isNull()) return null;
                this.isNull()
                  ? ((this._minx = t.getMinX()),
                    (this._maxx = t.getMaxX()),
                    (this._miny = t.getMinY()),
                    (this._maxy = t.getMaxY()))
                  : (t._minx < this._minx && (this._minx = t._minx),
                    t._maxx > this._maxx && (this._maxx = t._maxx),
                    t._miny < this._miny && (this._miny = t._miny),
                    t._maxy > this._maxy && (this._maxy = t._maxy));
              }
            } else if (2 === arguments.length) {
              const t = arguments[0],
                e = arguments[1];
              this.isNull()
                ? ((this._minx = t),
                  (this._maxx = t),
                  (this._miny = e),
                  (this._maxy = e))
                : (t < this._minx && (this._minx = t),
                  t > this._maxx && (this._maxx = t),
                  e < this._miny && (this._miny = e),
                  e > this._maxy && (this._maxy = e));
            }
          }
          minExtent() {
            if (this.isNull()) return 0;
            const t = this.getWidth(),
              e = this.getHeight();
            return t < e ? t : e;
          }
          getWidth() {
            return this.isNull() ? 0 : this._maxx - this._minx;
          }
          compareTo(t) {
            const e = t;
            return this.isNull()
              ? e.isNull()
                ? 0
                : -1
              : e.isNull()
              ? 1
              : this._minx < e._minx
              ? -1
              : this._minx > e._minx
              ? 1
              : this._miny < e._miny
              ? -1
              : this._miny > e._miny
              ? 1
              : this._maxx < e._maxx
              ? -1
              : this._maxx > e._maxx
              ? 1
              : this._maxy < e._maxy
              ? -1
              : this._maxy > e._maxy
              ? 1
              : 0;
          }
          translate(t, e) {
            if (this.isNull()) return null;
            this.init(
              this.getMinX() + t,
              this.getMaxX() + t,
              this.getMinY() + e,
              this.getMaxY() + e
            );
          }
          toString() {
            return (
              "Env[" +
              this._minx +
              " : " +
              this._maxx +
              ", " +
              this._miny +
              " : " +
              this._maxy +
              "]"
            );
          }
          setToNull() {
            (this._minx = 0),
              (this._maxx = -1),
              (this._miny = 0),
              (this._maxy = -1);
          }
          getHeight() {
            return this.isNull() ? 0 : this._maxy - this._miny;
          }
          maxExtent() {
            if (this.isNull()) return 0;
            const t = this.getWidth(),
              e = this.getHeight();
            return t > e ? t : e;
          }
          expandBy() {
            if (1 === arguments.length) {
              const t = arguments[0];
              this.expandBy(t, t);
            } else if (2 === arguments.length) {
              const t = arguments[0],
                e = arguments[1];
              if (this.isNull()) return null;
              (this._minx -= t),
                (this._maxx += t),
                (this._miny -= e),
                (this._maxy += e),
                (this._minx > this._maxx || this._miny > this._maxy) &&
                  this.setToNull();
            }
          }
          contains() {
            if (1 === arguments.length) {
              if (arguments[0] instanceof N) {
                const t = arguments[0];
                return this.covers(t);
              }
              if (arguments[0] instanceof g) {
                const t = arguments[0];
                return this.covers(t);
              }
            } else if (2 === arguments.length) {
              const t = arguments[0],
                e = arguments[1];
              return this.covers(t, e);
            }
          }
          centre() {
            return this.isNull()
              ? null
              : new g(
                  (this.getMinX() + this.getMaxX()) / 2,
                  (this.getMinY() + this.getMaxY()) / 2
                );
          }
          init() {
            if (0 === arguments.length) this.setToNull();
            else if (1 === arguments.length) {
              if (arguments[0] instanceof g) {
                const t = arguments[0];
                this.init(t.x, t.x, t.y, t.y);
              } else if (arguments[0] instanceof N) {
                const t = arguments[0];
                (this._minx = t._minx),
                  (this._maxx = t._maxx),
                  (this._miny = t._miny),
                  (this._maxy = t._maxy);
              }
            } else if (2 === arguments.length) {
              const t = arguments[0],
                e = arguments[1];
              this.init(t.x, e.x, t.y, e.y);
            } else if (4 === arguments.length) {
              const t = arguments[0],
                e = arguments[1],
                n = arguments[2],
                s = arguments[3];
              t < e
                ? ((this._minx = t), (this._maxx = e))
                : ((this._minx = e), (this._maxx = t)),
                n < s
                  ? ((this._miny = n), (this._maxy = s))
                  : ((this._miny = s), (this._maxy = n));
            }
          }
          getMaxY() {
            return this._maxy;
          }
          distance(t) {
            if (this.intersects(t)) return 0;
            let e = 0;
            this._maxx < t._minx
              ? (e = t._minx - this._maxx)
              : this._minx > t._maxx && (e = this._minx - t._maxx);
            let n = 0;
            return (
              this._maxy < t._miny
                ? (n = t._miny - this._maxy)
                : this._miny > t._maxy && (n = this._miny - t._maxy),
              0 === e ? n : 0 === n ? e : Math.sqrt(e * e + n * n)
            );
          }
          hashCode() {
            let t = 17;
            return (
              37 *
                (t =
                  37 *
                    (t =
                      37 * (t = 37 * t + g.hashCode(this._minx)) +
                      g.hashCode(this._maxx)) +
                  g.hashCode(this._miny)) +
              g.hashCode(this._maxy)
            );
          }
          getClass() {
            return N;
          }
          get interfaces_() {
            return [r, a];
          }
        }
        function C() {}
        (N.constructor_ = function () {
          if (
            ((this._minx = null),
            (this._maxx = null),
            (this._miny = null),
            (this._maxy = null),
            0 === arguments.length)
          )
            this.init();
          else if (1 === arguments.length) {
            if (arguments[0] instanceof g) {
              const t = arguments[0];
              this.init(t.x, t.x, t.y, t.y);
            } else if (arguments[0] instanceof N) {
              const t = arguments[0];
              this.init(t);
            }
          } else if (2 === arguments.length) {
            const t = arguments[0],
              e = arguments[1];
            this.init(t.x, e.x, t.y, e.y);
          } else if (4 === arguments.length) {
            const t = arguments[0],
              e = arguments[1],
              n = arguments[2],
              s = arguments[3];
            this.init(t, e, n, s);
          }
        }),
          (N.serialVersionUID = 0x51845cd552189800);
        class S extends C {
          constructor() {
            super(), S.constructor_.apply(this, arguments);
          }
          getClass() {
            return S;
          }
          get interfaces_() {
            return [];
          }
        }
        function w(t) {
          this.str = t;
        }
        function L(t) {
          this.value = t;
        }
        function T() {}
        (S.constructor_ = function () {
          C.constructor_.call(
            this,
            "Projective point not representable on the Cartesian plane."
          );
        }),
          (w.prototype.append = function (t) {
            this.str += t;
          }),
          (w.prototype.setCharAt = function (t, e) {
            this.str = this.str.substr(0, t) + e + this.str.substr(t + 1);
          }),
          (w.prototype.toString = function (t) {
            return this.str;
          }),
          (L.prototype.intValue = function () {
            return this.value;
          }),
          (L.prototype.compareTo = function (t) {
            return this.value < t ? -1 : this.value > t ? 1 : 0;
          }),
          (L.isNaN = (t) => Number.isNaN(t)),
          (T.isWhitespace = (t) => (t <= 32 && t >= 0) || 127 === t),
          (T.toUpperCase = (t) => t.toUpperCase());
        class R {
          constructor() {
            R.constructor_.apply(this, arguments);
          }
          static sqr(t) {
            return R.valueOf(t).selfMultiply(t);
          }
          static valueOf() {
            if ("string" == typeof arguments[0]) {
              const t = arguments[0];
              return R.parse(t);
            }
            if ("number" == typeof arguments[0]) return new R(arguments[0]);
          }
          static sqrt(t) {
            return R.valueOf(t).sqrt();
          }
          static parse(t) {
            let e = 0;
            const n = t.length;
            for (; T.isWhitespace(t.charAt(e)); ) e++;
            let s = !1;
            if (e < n) {
              const n = t.charAt(e);
              ("-" !== n && "+" !== n) || (e++, "-" === n && (s = !0));
            }
            const i = new R();
            let r = 0,
              o = 0,
              l = 0;
            for (; !(e >= n); ) {
              const n = t.charAt(e);
              if ((e++, T.isDigit(n))) {
                const t = n - "0";
                i.selfMultiply(R.TEN), i.selfAdd(t), r++;
              } else {
                if ("." !== n) {
                  if ("e" === n || "E" === n) {
                    const n = t.substring(e);
                    try {
                      l = L.parseInt(n);
                    } catch (e) {
                      throw e instanceof NumberFormatException
                        ? new NumberFormatException(
                            "Invalid exponent " + n + " in string " + t
                          )
                        : e;
                    }
                    break;
                  }
                  throw new NumberFormatException(
                    "Unexpected character '" +
                      n +
                      "' at position " +
                      e +
                      " in string " +
                      t
                  );
                }
                o = r;
              }
            }
            let a = i;
            const c = r - o - l;
            if (0 === c) a = i;
            else if (c > 0) {
              const t = R.TEN.pow(c);
              a = i.divide(t);
            } else if (c < 0) {
              const t = R.TEN.pow(-c);
              a = i.multiply(t);
            }
            return s ? a.negate() : a;
          }
          static createNaN() {
            return new R(i.NaN, i.NaN);
          }
          static copy(t) {
            return new R(t);
          }
          static magnitude(t) {
            const e = Math.abs(t),
              n = Math.log(e) / Math.log(10);
            let s = Math.trunc(Math.floor(n));
            return 10 * Math.pow(10, s) <= e && (s += 1), s;
          }
          static stringOfChar(t, e) {
            const n = new w();
            for (let s = 0; s < e; s++) n.append(t);
            return n.toString();
          }
          le(t) {
            return (
              this._hi < t._hi || (this._hi === t._hi && this._lo <= t._lo)
            );
          }
          extractSignificantDigits(t, e) {
            let n = this.abs(),
              s = R.magnitude(n._hi);
            const i = R.TEN.pow(s);
            (n = n.divide(i)).gt(R.TEN)
              ? ((n = n.divide(R.TEN)), (s += 1))
              : n.lt(R.ONE) && ((n = n.multiply(R.TEN)), (s -= 1));
            const r = s + 1,
              o = new w(),
              l = R.MAX_PRINT_DIGITS - 1;
            for (let a = 0; a <= l; a++) {
              t && a === r && o.append(".");
              const e = Math.trunc(n._hi);
              if (e < 0) break;
              let s = !1,
                i = 0;
              e > 9 ? ((s = !0), (i = "9")) : (i = "0" + e),
                o.append(i),
                (n = n.subtract(R.valueOf(e)).multiply(R.TEN)),
                s && n.selfAdd(R.TEN);
              let c = !0;
              const h = R.magnitude(n._hi);
              if ((h < 0 && Math.abs(h) >= l - a && (c = !1), !c)) break;
            }
            return (e[0] = s), o.toString();
          }
          sqr() {
            return this.multiply(this);
          }
          doubleValue() {
            return this._hi + this._lo;
          }
          subtract() {
            if (arguments[0] instanceof R) {
              const t = arguments[0];
              return this.add(t.negate());
            }
            if ("number" == typeof arguments[0]) {
              const t = arguments[0];
              return this.add(-t);
            }
          }
          equals() {
            if (1 === arguments.length && arguments[0] instanceof R) {
              const t = arguments[0];
              return this._hi === t._hi && this._lo === t._lo;
            }
          }
          isZero() {
            return 0 === this._hi && 0 === this._lo;
          }
          selfSubtract() {
            if (arguments[0] instanceof R) {
              const t = arguments[0];
              return this.isNaN() ? this : this.selfAdd(-t._hi, -t._lo);
            }
            if ("number" == typeof arguments[0]) {
              const t = arguments[0];
              return this.isNaN() ? this : this.selfAdd(-t, 0);
            }
          }
          getSpecialNumberString() {
            return this.isZero() ? "0.0" : this.isNaN() ? "NaN " : null;
          }
          min(t) {
            return this.le(t) ? this : t;
          }
          selfDivide() {
            if (1 === arguments.length) {
              if (arguments[0] instanceof R) {
                const t = arguments[0];
                return this.selfDivide(t._hi, t._lo);
              }
              if ("number" == typeof arguments[0]) {
                const t = arguments[0];
                return this.selfDivide(t, 0);
              }
            } else if (2 === arguments.length) {
              const t = arguments[0],
                e = arguments[1];
              let n = null,
                s = null,
                i = null,
                r = null,
                o = null,
                l = null,
                a = null,
                c = null;
              return (
                (o = this._hi / t),
                (n = (l = R.SPLIT * o) - o),
                (c = R.SPLIT * t),
                (c =
                  (n = l - n) * (i = c - (i = c - t)) -
                  (a = o * t) +
                  n * (r = t - i) +
                  (s = o - n) * i +
                  s * r),
                (c = o + (l = (this._hi - a - c + this._lo - o * e) / t)),
                (this._hi = c),
                (this._lo = o - c + l),
                this
              );
            }
          }
          dump() {
            return "DD<" + this._hi + ", " + this._lo + ">";
          }
          divide() {
            if (arguments[0] instanceof R) {
              const t = arguments[0];
              let e = null,
                n = null,
                s = null,
                i = null,
                r = null,
                o = null,
                l = null,
                a = null;
              return (
                (r = this._hi / t._hi),
                (e = (o = R.SPLIT * r) - r),
                (a = R.SPLIT * t._hi),
                (n = r - (e = o - e)),
                (s = a - t._hi),
                (l = r * t._hi),
                (a = e * (s = a - s) - l + e * (i = t._hi - s) + n * s + n * i),
                (o = (this._hi - l - a + this._lo - r * t._lo) / t._hi),
                new R((a = r + o), r - a + o)
              );
            }
            if ("number" == typeof arguments[0]) {
              const t = arguments[0];
              return i.isNaN(t) ? R.createNaN() : R.copy(this).selfDivide(t, 0);
            }
          }
          ge(t) {
            return (
              this._hi > t._hi || (this._hi === t._hi && this._lo >= t._lo)
            );
          }
          pow(t) {
            if (0 === t) return R.valueOf(1);
            let e = new R(this),
              n = R.valueOf(1),
              s = Math.abs(t);
            if (s > 1)
              for (; s > 0; )
                s % 2 == 1 && n.selfMultiply(e), (s /= 2) > 0 && (e = e.sqr());
            else n = e;
            return t < 0 ? n.reciprocal() : n;
          }
          ceil() {
            if (this.isNaN()) return R.NaN;
            const t = Math.ceil(this._hi);
            let e = 0;
            return t === this._hi && (e = Math.ceil(this._lo)), new R(t, e);
          }
          compareTo(t) {
            const e = t;
            return this._hi < e._hi
              ? -1
              : this._hi > e._hi
              ? 1
              : this._lo < e._lo
              ? -1
              : this._lo > e._lo
              ? 1
              : 0;
          }
          rint() {
            return this.isNaN() ? this : this.add(0.5).floor();
          }
          setValue() {
            if (arguments[0] instanceof R) {
              const t = arguments[0];
              return this.init(t), this;
            }
            if ("number" == typeof arguments[0]) {
              const t = arguments[0];
              return this.init(t), this;
            }
          }
          max(t) {
            return this.ge(t) ? this : t;
          }
          sqrt() {
            if (this.isZero()) return R.valueOf(0);
            if (this.isNegative()) return R.NaN;
            const t = 1 / Math.sqrt(this._hi),
              e = this._hi * t,
              n = R.valueOf(e),
              s = this.subtract(n.sqr())._hi * (0.5 * t);
            return n.add(s);
          }
          selfAdd() {
            if (1 === arguments.length) {
              if (arguments[0] instanceof R) {
                const t = arguments[0];
                return this.selfAdd(t._hi, t._lo);
              }
              if ("number" == typeof arguments[0]) {
                const t = arguments[0];
                let e = null,
                  n = null,
                  s = null,
                  i = null,
                  r = null,
                  o = null;
                return (
                  (i = (s = this._hi + t) - (r = s - this._hi)),
                  (n =
                    (o = (i = t - r + (this._hi - i)) + this._lo) +
                    (s - (e = s + o))),
                  (this._hi = e + n),
                  (this._lo = n + (e - this._hi)),
                  this
                );
              }
            } else if (2 === arguments.length) {
              const t = arguments[0],
                e = arguments[1];
              let n = null,
                s = null,
                i = null,
                r = null,
                o = null,
                l = null,
                a = null,
                c = null;
              (o = this._hi + t),
                (i = this._lo + e),
                (a = o - this._hi),
                (c = i - this._lo),
                (l = o - a),
                (r = i - c),
                (l = t - a + (this._hi - l)),
                (r = e - c + (this._lo - r));
              const h = (n = o + (a = l + i)) + (a = r + (s = a + (o - n))),
                u = a + (n - h);
              return (this._hi = h), (this._lo = u), this;
            }
          }
          selfMultiply() {
            if (1 === arguments.length) {
              if (arguments[0] instanceof R) {
                const t = arguments[0];
                return this.selfMultiply(t._hi, t._lo);
              }
              if ("number" == typeof arguments[0]) {
                const t = arguments[0];
                return this.selfMultiply(t, 0);
              }
            } else if (2 === arguments.length) {
              const t = arguments[0],
                e = arguments[1];
              let n = null,
                s = null,
                i = null,
                r = null,
                o = null,
                l = null;
              (n = (o = R.SPLIT * this._hi) - this._hi),
                (l = R.SPLIT * t),
                (n = o - n),
                (s = this._hi - n),
                (i = l - t);
              const a =
                  (o = this._hi * t) +
                  (l =
                    n * (i = l - i) -
                    o +
                    n * (r = t - i) +
                    s * i +
                    s * r +
                    (this._hi * e + this._lo * t)),
                c = l + (n = o - a);
              return (this._hi = a), (this._lo = c), this;
            }
          }
          selfSqr() {
            return this.selfMultiply(this);
          }
          floor() {
            if (this.isNaN()) return R.NaN;
            const t = Math.floor(this._hi);
            let e = 0;
            return t === this._hi && (e = Math.floor(this._lo)), new R(t, e);
          }
          negate() {
            return this.isNaN() ? this : new R(-this._hi, -this._lo);
          }
          clone() {
            try {
              return null;
            } catch (t) {
              if (t instanceof CloneNotSupportedException) return null;
              throw t;
            }
          }
          multiply() {
            if (arguments[0] instanceof R) {
              const t = arguments[0];
              return t.isNaN() ? R.createNaN() : R.copy(this).selfMultiply(t);
            }
            if ("number" == typeof arguments[0]) {
              const t = arguments[0];
              return i.isNaN(t)
                ? R.createNaN()
                : R.copy(this).selfMultiply(t, 0);
            }
          }
          isNaN() {
            return i.isNaN(this._hi);
          }
          intValue() {
            return Math.trunc(this._hi);
          }
          toString() {
            const t = R.magnitude(this._hi);
            return t >= -3 && t <= 20
              ? this.toStandardNotation()
              : this.toSciNotation();
          }
          toStandardNotation() {
            const t = this.getSpecialNumberString();
            if (null !== t) return t;
            const e = new Array(1).fill(null),
              n = this.extractSignificantDigits(!0, e),
              s = e[0] + 1;
            let i = n;
            if ("." === n.charAt(0)) i = "0" + n;
            else if (s < 0) i = "0." + R.stringOfChar("0", -s) + n;
            else if (-1 === n.indexOf(".")) {
              const t = s - n.length;
              i = n + R.stringOfChar("0", t) + ".0";
            }
            return this.isNegative() ? "-" + i : i;
          }
          reciprocal() {
            let t = null,
              e = null,
              n = null,
              s = null,
              i = null,
              r = null,
              o = null,
              l = null;
            (e = (i = 1 / this._hi) - (t = (r = R.SPLIT * i) - (t = r - i))),
              (n = (l = R.SPLIT * this._hi) - this._hi);
            const a =
              i +
              (r =
                (1 -
                  (o = i * this._hi) -
                  (l =
                    t * (n = l - n) -
                    o +
                    t * (s = this._hi - n) +
                    e * n +
                    e * s) -
                  i * this._lo) /
                this._hi);
            return new R(a, i - a + r);
          }
          toSciNotation() {
            if (this.isZero()) return R.SCI_NOT_ZERO;
            const t = this.getSpecialNumberString();
            if (null !== t) return t;
            const e = new Array(1).fill(null),
              n = this.extractSignificantDigits(!1, e),
              s = R.SCI_NOT_EXPONENT_CHAR + e[0];
            if ("0" === n.charAt(0))
              throw new IllegalStateException("Found leading zero: " + n);
            let i = "";
            n.length > 1 && (i = n.substring(1));
            const r = n.charAt(0) + "." + i;
            return this.isNegative() ? "-" + r + s : r + s;
          }
          abs() {
            return this.isNaN()
              ? R.NaN
              : this.isNegative()
              ? this.negate()
              : new R(this);
          }
          isPositive() {
            return this._hi > 0 || (0 === this._hi && this._lo > 0);
          }
          lt(t) {
            return this._hi < t._hi || (this._hi === t._hi && this._lo < t._lo);
          }
          add() {
            if (arguments[0] instanceof R) {
              const t = arguments[0];
              return R.copy(this).selfAdd(t);
            }
            if ("number" == typeof arguments[0]) {
              const t = arguments[0];
              return R.copy(this).selfAdd(t);
            }
          }
          init() {
            if (1 === arguments.length) {
              if ("number" == typeof arguments[0]) {
                const t = arguments[0];
                (this._hi = t), (this._lo = 0);
              } else if (arguments[0] instanceof R) {
                const t = arguments[0];
                (this._hi = t._hi), (this._lo = t._lo);
              }
            } else if (2 === arguments.length) {
              const t = arguments[0],
                e = arguments[1];
              (this._hi = t), (this._lo = e);
            }
          }
          gt(t) {
            return this._hi > t._hi || (this._hi === t._hi && this._lo > t._lo);
          }
          isNegative() {
            return this._hi < 0 || (0 === this._hi && this._lo < 0);
          }
          trunc() {
            return this.isNaN()
              ? R.NaN
              : this.isPositive()
              ? this.floor()
              : this.ceil();
          }
          signum() {
            return this._hi > 0
              ? 1
              : this._hi < 0
              ? -1
              : this._lo > 0
              ? 1
              : this._lo < 0
              ? -1
              : 0;
          }
          getClass() {
            return R;
          }
          get interfaces_() {
            return [a, r, o];
          }
        }
        (R.constructor_ = function () {
          if (((this._hi = 0), (this._lo = 0), 0 === arguments.length))
            this.init(0);
          else if (1 === arguments.length) {
            if ("number" == typeof arguments[0]) {
              const t = arguments[0];
              this.init(t);
            } else if (arguments[0] instanceof R) {
              const t = arguments[0];
              this.init(t);
            } else if ("string" == typeof arguments[0]) {
              const t = arguments[0];
              R.constructor_.call(this, R.parse(t));
            }
          } else if (2 === arguments.length) {
            const t = arguments[0],
              e = arguments[1];
            this.init(t, e);
          }
        }),
          (R.PI = new R(3.141592653589793, 12246467991473532e-32)),
          (R.TWO_PI = new R(6.283185307179586, 24492935982947064e-32)),
          (R.PI_2 = new R(1.5707963267948966, 6123233995736766e-32)),
          (R.E = new R(2.718281828459045, 14456468917292502e-32)),
          (R.NaN = new R(i.NaN, i.NaN)),
          (R.EPS = 123259516440783e-46),
          (R.SPLIT = 134217729),
          (R.MAX_PRINT_DIGITS = 32),
          (R.TEN = R.valueOf(10)),
          (R.ONE = R.valueOf(1)),
          (R.SCI_NOT_EXPONENT_CHAR = "E"),
          (R.SCI_NOT_ZERO = "0.0E0");
        class P {
          constructor() {
            P.constructor_.apply(this, arguments);
          }
          static orientationIndex(t, e, n) {
            const s = P.orientationIndexFilter(t, e, n);
            if (s <= 1) return s;
            const i = R.valueOf(e.x).selfAdd(-t.x),
              r = R.valueOf(e.y).selfAdd(-t.y),
              o = R.valueOf(n.x).selfAdd(-e.x),
              l = R.valueOf(n.y).selfAdd(-e.y);
            return i.selfMultiply(l).selfSubtract(r.selfMultiply(o)).signum();
          }
          static signOfDet2x2() {
            if (
              arguments[3] instanceof R &&
              arguments[2] instanceof R &&
              arguments[0] instanceof R &&
              arguments[1] instanceof R
            ) {
              const t = arguments[1],
                e = arguments[2],
                n = arguments[3];
              return arguments[0]
                .multiply(n)
                .selfSubtract(t.multiply(e))
                .signum();
            }
            if (
              "number" == typeof arguments[3] &&
              "number" == typeof arguments[2] &&
              "number" == typeof arguments[0] &&
              "number" == typeof arguments[1]
            ) {
              const t = arguments[0],
                e = arguments[1],
                n = arguments[2],
                s = arguments[3],
                i = R.valueOf(t),
                r = R.valueOf(e),
                o = R.valueOf(n),
                l = R.valueOf(s);
              return i.multiply(l).selfSubtract(r.multiply(o)).signum();
            }
          }
          static intersection(t, e, n, s) {
            const i = R.valueOf(s.y)
                .selfSubtract(n.y)
                .selfMultiply(R.valueOf(e.x).selfSubtract(t.x)),
              r = R.valueOf(s.x)
                .selfSubtract(n.x)
                .selfMultiply(R.valueOf(e.y).selfSubtract(t.y)),
              o = i.subtract(r),
              l = R.valueOf(s.x)
                .selfSubtract(n.x)
                .selfMultiply(R.valueOf(t.y).selfSubtract(n.y)),
              a = R.valueOf(s.y)
                .selfSubtract(n.y)
                .selfMultiply(R.valueOf(t.x).selfSubtract(n.x)),
              c = l.subtract(a).selfDivide(o).doubleValue(),
              h = R.valueOf(t.x)
                .selfAdd(R.valueOf(e.x).selfSubtract(t.x).selfMultiply(c))
                .doubleValue(),
              u = R.valueOf(e.x)
                .selfSubtract(t.x)
                .selfMultiply(R.valueOf(t.y).selfSubtract(n.y)),
              d = R.valueOf(e.y)
                .selfSubtract(t.y)
                .selfMultiply(R.valueOf(t.x).selfSubtract(n.x)),
              _ = u.subtract(d).selfDivide(o).doubleValue(),
              p = R.valueOf(n.y)
                .selfAdd(R.valueOf(s.y).selfSubtract(n.y).selfMultiply(_))
                .doubleValue();
            return new g(h, p);
          }
          static orientationIndexFilter(t, e, n) {
            let s = null;
            const i = (t.x - n.x) * (e.y - n.y),
              r = (t.y - n.y) * (e.x - n.x),
              o = i - r;
            if (i > 0) {
              if (r <= 0) return P.signum(o);
              s = i + r;
            } else {
              if (!(i < 0)) return P.signum(o);
              if (r >= 0) return P.signum(o);
              s = -i - r;
            }
            const l = P.DP_SAFE_EPSILON * s;
            return o >= l || -o >= l ? P.signum(o) : 2;
          }
          static signum(t) {
            return t > 0 ? 1 : t < 0 ? -1 : 0;
          }
          getClass() {
            return P;
          }
          get interfaces_() {
            return [];
          }
        }
        (P.constructor_ = function () {}), (P.DP_SAFE_EPSILON = 1e-15);
        class v {
          constructor() {
            v.constructor_.apply(this, arguments);
          }
          static index(t, e, n) {
            return P.orientationIndex(t, e, n);
          }
          static isCCW(t) {
            const e = t.length - 1;
            if (e < 3)
              throw new n(
                "Ring has fewer than 4 points, so orientation cannot be determined"
              );
            let s = t[0],
              i = 0;
            for (let n = 1; n <= e; n++) {
              const e = t[n];
              e.y > s.y && ((s = e), (i = n));
            }
            let r = i;
            do {
              (r -= 1) < 0 && (r = e);
            } while (t[r].equals2D(s) && r !== i);
            let o = i;
            do {
              o = (o + 1) % e;
            } while (t[o].equals2D(s) && o !== i);
            const l = t[r],
              a = t[o];
            if (l.equals2D(s) || a.equals2D(s) || l.equals2D(a)) return !1;
            const c = v.index(l, s, a);
            return 0 === c ? l.x > a.x : c > 0;
          }
          getClass() {
            return v;
          }
          get interfaces_() {
            return [];
          }
        }
        function O() {}
        (v.constructor_ = function () {}),
          (v.CLOCKWISE = -1),
          (v.RIGHT = v.CLOCKWISE),
          (v.COUNTERCLOCKWISE = 1),
          (v.LEFT = v.COUNTERCLOCKWISE),
          (v.COLLINEAR = 0),
          (v.STRAIGHT = v.COLLINEAR),
          (O.arraycopy = (t, e, n, s, i) => {
            let r = 0;
            for (let o = e; o < e + i; o++) (n[s + r] = t[o]), r++;
          }),
          (O.getProperty = (t) => ({ "line.separator": "\n" }[t]));
        class b {
          constructor() {
            b.constructor_.apply(this, arguments);
          }
          static intersection(t, e, n, s) {
            const r = t.y - e.y,
              o = e.x - t.x,
              l = t.x * e.y - e.x * t.y,
              a = n.y - s.y,
              c = s.x - n.x,
              h = n.x * s.y - s.x * n.y,
              u = r * c - a * o,
              d = (o * h - c * l) / u,
              _ = (a * l - r * h) / u;
            if (i.isNaN(d) || i.isInfinite(d) || i.isNaN(_) || i.isInfinite(_))
              throw new S();
            return new g(d, _);
          }
          getY() {
            const t = this.y / this.w;
            if (i.isNaN(t) || i.isInfinite(t)) throw new S();
            return t;
          }
          getX() {
            const t = this.x / this.w;
            if (i.isNaN(t) || i.isInfinite(t)) throw new S();
            return t;
          }
          getCoordinate() {
            const t = new g();
            return (t.x = this.getX()), (t.y = this.getY()), t;
          }
          getClass() {
            return b;
          }
          get interfaces_() {
            return [];
          }
        }
        b.constructor_ = function () {
          if (
            ((this.x = null),
            (this.y = null),
            (this.w = null),
            0 === arguments.length)
          )
            (this.x = 0), (this.y = 0), (this.w = 1);
          else if (1 === arguments.length) {
            const t = arguments[0];
            (this.x = t.x), (this.y = t.y), (this.w = 1);
          } else if (2 === arguments.length) {
            if (
              "number" == typeof arguments[0] &&
              "number" == typeof arguments[1]
            ) {
              const t = arguments[0],
                e = arguments[1];
              (this.x = t), (this.y = e), (this.w = 1);
            } else if (arguments[0] instanceof b && arguments[1] instanceof b) {
              const t = arguments[0],
                e = arguments[1];
              (this.x = t.y * e.w - e.y * t.w),
                (this.y = e.x * t.w - t.x * e.w),
                (this.w = t.x * e.y - e.x * t.y);
            } else if (arguments[0] instanceof g && arguments[1] instanceof g) {
              const t = arguments[0],
                e = arguments[1];
              (this.x = t.y - e.y),
                (this.y = e.x - t.x),
                (this.w = t.x * e.y - e.x * t.y);
            }
          } else if (3 === arguments.length) {
            const t = arguments[0],
              e = arguments[1],
              n = arguments[2];
            (this.x = t), (this.y = e), (this.w = n);
          } else if (4 === arguments.length) {
            const t = arguments[0],
              e = arguments[1],
              n = arguments[2],
              s = arguments[3],
              i = t.y - e.y,
              r = e.x - t.x,
              o = t.x * e.y - e.x * t.y,
              l = n.y - s.y,
              a = s.x - n.x,
              c = n.x * s.y - s.x * n.y;
            (this.x = r * c - a * o),
              (this.y = l * o - i * c),
              (this.w = i * a - l * r);
          }
        };
        class M {
          constructor() {
            M.constructor_.apply(this, arguments);
          }
          static log10(t) {
            const e = Math.log(t);
            return i.isInfinite(e) || i.isNaN(e) ? e : e / M.LOG_10;
          }
          static min(t, e, n, s) {
            let i = t;
            return e < i && (i = e), n < i && (i = n), s < i && (i = s), i;
          }
          static clamp() {
            if (
              "number" == typeof arguments[2] &&
              "number" == typeof arguments[0] &&
              "number" == typeof arguments[1]
            ) {
              const t = arguments[0],
                e = arguments[1],
                n = arguments[2];
              return t < e ? e : t > n ? n : t;
            }
            if (
              Number.isInteger(arguments[2]) &&
              Number.isInteger(arguments[0]) &&
              Number.isInteger(arguments[1])
            ) {
              const t = arguments[0],
                e = arguments[1],
                n = arguments[2];
              return t < e ? e : t > n ? n : t;
            }
          }
          static wrap(t, e) {
            return t < 0 ? e - (-t % e) : t % e;
          }
          static max() {
            if (3 === arguments.length) {
              const t = arguments[1],
                e = arguments[2];
              let n = arguments[0];
              return t > n && (n = t), e > n && (n = e), n;
            }
            if (4 === arguments.length) {
              const t = arguments[1],
                e = arguments[2],
                n = arguments[3];
              let s = arguments[0];
              return t > s && (s = t), e > s && (s = e), n > s && (s = n), s;
            }
          }
          static average(t, e) {
            return (t + e) / 2;
          }
          getClass() {
            return M;
          }
          get interfaces_() {
            return [];
          }
        }
        (M.constructor_ = function () {}), (M.LOG_10 = Math.log(10));
        class D {
          constructor() {
            D.constructor_.apply(this, arguments);
          }
          static segmentToSegment(t, e, n, s) {
            if (t.equals(e)) return D.pointToSegment(t, n, s);
            if (n.equals(s)) return D.pointToSegment(s, t, e);
            let i = !1;
            if (N.intersects(t, e, n, s)) {
              const r = (e.x - t.x) * (s.y - n.y) - (e.y - t.y) * (s.x - n.x);
              if (0 === r) i = !0;
              else {
                const o = (t.y - n.y) * (s.x - n.x) - (t.x - n.x) * (s.y - n.y),
                  l =
                    ((t.y - n.y) * (e.x - t.x) - (t.x - n.x) * (e.y - t.y)) / r,
                  a = o / r;
                (a < 0 || a > 1 || l < 0 || l > 1) && (i = !0);
              }
            } else i = !0;
            return i
              ? M.min(
                  D.pointToSegment(t, n, s),
                  D.pointToSegment(e, n, s),
                  D.pointToSegment(n, t, e),
                  D.pointToSegment(s, t, e)
                )
              : 0;
          }
          static pointToSegment(t, e, n) {
            if (e.x === n.x && e.y === n.y) return t.distance(e);
            const s = (n.x - e.x) * (n.x - e.x) + (n.y - e.y) * (n.y - e.y),
              i = ((t.x - e.x) * (n.x - e.x) + (t.y - e.y) * (n.y - e.y)) / s;
            if (i <= 0) return t.distance(e);
            if (i >= 1) return t.distance(n);
            const r =
              ((e.y - t.y) * (n.x - e.x) - (e.x - t.x) * (n.y - e.y)) / s;
            return Math.abs(r) * Math.sqrt(s);
          }
          static pointToLinePerpendicular(t, e, n) {
            const s = (n.x - e.x) * (n.x - e.x) + (n.y - e.y) * (n.y - e.y),
              i = ((e.y - t.y) * (n.x - e.x) - (e.x - t.x) * (n.y - e.y)) / s;
            return Math.abs(i) * Math.sqrt(s);
          }
          static pointToSegmentString(t, e) {
            if (0 === e.length)
              throw new n("Line array must contain at least one vertex");
            let s = t.distance(e[0]);
            for (let n = 0; n < e.length - 1; n++) {
              const i = D.pointToSegment(t, e[n], e[n + 1]);
              i < s && (s = i);
            }
            return s;
          }
          getClass() {
            return D;
          }
          get interfaces_() {
            return [];
          }
        }
        D.constructor_ = function () {};
        class A {
          constructor() {
            A.constructor_.apply(this, arguments);
          }
          setOrdinate(t, e, n) {}
          size() {}
          getOrdinate(t, e) {}
          getCoordinate() {}
          getCoordinateCopy(t) {}
          getDimension() {}
          getX(t) {}
          expandEnvelope(t) {}
          copy() {}
          getY(t) {}
          toCoordinateArray() {}
          getClass() {
            return A;
          }
          get interfaces_() {
            return [o];
          }
        }
        (A.constructor_ = function () {}),
          (A.X = 0),
          (A.Y = 1),
          (A.Z = 2),
          (A.M = 3);
        class F {
          constructor() {
            F.constructor_.apply(this, arguments);
          }
          create() {
            1 === arguments.length &&
              (arguments[0] instanceof Array || _(arguments[0], A));
          }
          getClass() {
            return F;
          }
          get interfaces_() {
            return [];
          }
        }
        F.constructor_ = function () {};
        class G {
          constructor() {
            G.constructor_.apply(this, arguments);
          }
          filter(t) {}
          getClass() {
            return G;
          }
          get interfaces_() {
            return [];
          }
        }
        G.constructor_ = function () {};
        class q {
          constructor() {
            q.constructor_.apply(this, arguments);
          }
          isGeometryCollection() {
            return this.getTypeCode() === q.TYPECODE_GEOMETRYCOLLECTION;
          }
          getFactory() {
            return this._factory;
          }
          getGeometryN(t) {
            return this;
          }
          getArea() {
            return 0;
          }
          isRectangle() {
            return !1;
          }
          equals() {
            if (arguments[0] instanceof q) {
              const t = arguments[0];
              return null !== t && this.equalsTopo(t);
            }
            if (arguments[0] instanceof Object) {
              const t = arguments[0];
              if (!(t instanceof q)) return !1;
              const e = t;
              return this.equalsExact(e);
            }
          }
          equalsExact(t) {
            return this === t || this.equalsExact(t, 0);
          }
          geometryChanged() {
            this.apply(q.geometryChangedFilter);
          }
          geometryChangedAction() {
            this._envelope = null;
          }
          equalsNorm(t) {
            return null !== t && this.norm().equalsExact(t.norm());
          }
          getLength() {
            return 0;
          }
          getNumGeometries() {
            return 1;
          }
          compareTo() {
            let t;
            if (1 === arguments.length) {
              const e = arguments[0];
              return (
                (t = e),
                this.getTypeCode() !== t.getTypeCode()
                  ? this.getTypeCode() - t.getTypeCode()
                  : this.isEmpty() && t.isEmpty()
                  ? 0
                  : this.isEmpty()
                  ? -1
                  : t.isEmpty()
                  ? 1
                  : this.compareToSameClass(e)
              );
            }
            if (2 === arguments.length) {
              const e = arguments[0],
                n = arguments[1];
              return (
                (t = e),
                this.getTypeCode() !== t.getTypeCode()
                  ? this.getTypeCode() - t.getTypeCode()
                  : this.isEmpty() && t.isEmpty()
                  ? 0
                  : this.isEmpty()
                  ? -1
                  : t.isEmpty()
                  ? 1
                  : this.compareToSameClass(e, n)
              );
            }
          }
          getUserData() {
            return this._userData;
          }
          getSRID() {
            return this._SRID;
          }
          getEnvelope() {
            return this.getFactory().toGeometry(this.getEnvelopeInternal());
          }
          checkNotGeometryCollection(t) {
            if (t.getTypeCode() === q.TYPECODE_GEOMETRYCOLLECTION)
              throw new n(
                "This method does not support GeometryCollection arguments"
              );
          }
          equal(t, e, n) {
            return 0 === n ? t.equals(e) : t.distance(e) <= n;
          }
          norm() {
            const t = this.copy();
            return t.normalize(), t;
          }
          getPrecisionModel() {
            return this._factory.getPrecisionModel();
          }
          getEnvelopeInternal() {
            return (
              null === this._envelope &&
                (this._envelope = this.computeEnvelopeInternal()),
              new N(this._envelope)
            );
          }
          setSRID(t) {
            this._SRID = t;
          }
          setUserData(t) {
            this._userData = t;
          }
          compare(t, e) {
            const n = t.iterator(),
              s = e.iterator();
            for (; n.hasNext() && s.hasNext(); ) {
              const t = n.next(),
                e = s.next(),
                i = t.compareTo(e);
              if (0 !== i) return i;
            }
            return n.hasNext() ? 1 : s.hasNext() ? -1 : 0;
          }
          hashCode() {
            return this.getEnvelopeInternal().hashCode();
          }
          isGeometryCollectionOrDerived() {
            return (
              this.getTypeCode() === q.TYPECODE_GEOMETRYCOLLECTION ||
              this.getTypeCode() === q.TYPECODE_MULTIPOINT ||
              this.getTypeCode() === q.TYPECODE_MULTILINESTRING ||
              this.getTypeCode() === q.TYPECODE_MULTIPOLYGON
            );
          }
          get interfaces_() {
            return [o, r, a];
          }
          getClass() {
            return q;
          }
          static hasNonEmptyElements(t) {
            for (let e = 0; e < t.length; e++) if (!t[e].isEmpty()) return !0;
            return !1;
          }
          static hasNullElements(t) {
            for (let e = 0; e < t.length; e++) if (null === t[e]) return !0;
            return !1;
          }
        }
        (q.constructor_ = function (t) {
          t &&
            ((this._envelope = null),
            (this._userData = null),
            (this._factory = t),
            (this._SRID = t.getSRID()));
        }),
          (q.serialVersionUID = 0x799ea46522854c00),
          (q.TYPECODE_POINT = 0),
          (q.TYPECODE_MULTIPOINT = 1),
          (q.TYPECODE_LINESTRING = 2),
          (q.TYPECODE_LINEARRING = 3),
          (q.TYPECODE_MULTILINESTRING = 4),
          (q.TYPECODE_POLYGON = 5),
          (q.TYPECODE_MULTIPOLYGON = 6),
          (q.TYPECODE_GEOMETRYCOLLECTION = 7),
          (q.TYPENAME_POINT = "Point"),
          (q.TYPENAME_MULTIPOINT = "MultiPoint"),
          (q.TYPENAME_LINESTRING = "LineString"),
          (q.TYPENAME_LINEARRING = "LinearRing"),
          (q.TYPENAME_MULTILINESTRING = "MultiLineString"),
          (q.TYPENAME_POLYGON = "Polygon"),
          (q.TYPENAME_MULTIPOLYGON = "MultiPolygon"),
          (q.TYPENAME_GEOMETRYCOLLECTION = "GeometryCollection"),
          (q.geometryChangedFilter = {
            get interfaces_() {
              return [G];
            },
            filter(t) {
              t.geometryChangedAction();
            },
          });
        class B {
          constructor() {
            B.constructor_.apply(this, arguments);
          }
          filter(t) {}
          getClass() {
            return B;
          }
          get interfaces_() {
            return [];
          }
        }
        B.constructor_ = function () {};
        class V {
          constructor() {
            V.constructor_.apply(this, arguments);
          }
          isInBoundary(t) {}
          getClass() {
            return V;
          }
          get interfaces_() {
            return [];
          }
        }
        class z {
          constructor() {
            z.constructor_.apply(this, arguments);
          }
          isInBoundary(t) {
            return t % 2 == 1;
          }
          getClass() {
            return z;
          }
          get interfaces_() {
            return [V];
          }
        }
        z.constructor_ = function () {};
        class Y {
          constructor() {
            Y.constructor_.apply(this, arguments);
          }
          isInBoundary(t) {
            return t > 0;
          }
          getClass() {
            return Y;
          }
          get interfaces_() {
            return [V];
          }
        }
        Y.constructor_ = function () {};
        class U {
          constructor() {
            U.constructor_.apply(this, arguments);
          }
          isInBoundary(t) {
            return t > 1;
          }
          getClass() {
            return U;
          }
          get interfaces_() {
            return [V];
          }
        }
        U.constructor_ = function () {};
        class k {
          constructor() {
            k.constructor_.apply(this, arguments);
          }
          isInBoundary(t) {
            return 1 === t;
          }
          getClass() {
            return k;
          }
          get interfaces_() {
            return [V];
          }
        }
        (k.constructor_ = function () {}),
          (V.Mod2BoundaryNodeRule = z),
          (V.EndPointBoundaryNodeRule = Y),
          (V.MultiValentEndPointBoundaryNodeRule = U),
          (V.MonoValentEndPointBoundaryNodeRule = k),
          (V.constructor_ = function () {}),
          (V.MOD2_BOUNDARY_RULE = new z()),
          (V.ENDPOINT_BOUNDARY_RULE = new Y()),
          (V.MULTIVALENT_ENDPOINT_BOUNDARY_RULE = new U()),
          (V.MONOVALENT_ENDPOINT_BOUNDARY_RULE = new k()),
          (V.OGC_SFS_BOUNDARY_RULE = V.MOD2_BOUNDARY_RULE);
        class X {
          constructor() {
            X.constructor_.apply(this, arguments);
          }
          static isRing(t) {
            return !(t.length < 4) && !!t[0].equals2D(t[t.length - 1]);
          }
          static ptNotInList(t, e) {
            for (let n = 0; n < t.length; n++) {
              const s = t[n];
              if (X.indexOf(s, e) < 0) return s;
            }
            return null;
          }
          static scroll(t, e) {
            const n = X.indexOf(e, t);
            if (n < 0) return null;
            const s = new Array(t.length).fill(null);
            O.arraycopy(t, n, s, 0, t.length - n),
              O.arraycopy(t, 0, s, t.length - n, n),
              O.arraycopy(s, 0, t, 0, t.length);
          }
          static equals() {
            if (2 === arguments.length) {
              const t = arguments[0],
                e = arguments[1];
              if (t === e) return !0;
              if (null === t || null === e) return !1;
              if (t.length !== e.length) return !1;
              for (let n = 0; n < t.length; n++)
                if (!t[n].equals(e[n])) return !1;
              return !0;
            }
            if (3 === arguments.length) {
              const t = arguments[0],
                e = arguments[1],
                n = arguments[2];
              if (t === e) return !0;
              if (null === t || null === e) return !1;
              if (t.length !== e.length) return !1;
              for (let s = 0; s < t.length; s++)
                if (0 !== n.compare(t[s], e[s])) return !1;
              return !0;
            }
          }
          static intersection(t, e) {
            const n = new I();
            for (let s = 0; s < t.length; s++)
              e.intersects(t[s]) && n.add(t[s], !0);
            return n.toCoordinateArray();
          }
          static hasRepeatedPoints(t) {
            for (let e = 1; e < t.length; e++)
              if (t[e - 1].equals(t[e])) return !0;
            return !1;
          }
          static removeRepeatedPoints(t) {
            return X.hasRepeatedPoints(t)
              ? new I(t, !1).toCoordinateArray()
              : t;
          }
          static reverse(t) {
            const e = t.length - 1,
              n = Math.trunc(e / 2);
            for (let s = 0; s <= n; s++) {
              const n = t[s];
              (t[s] = t[e - s]), (t[e - s] = n);
            }
          }
          static removeNull(t) {
            let e = 0;
            for (let i = 0; i < t.length; i++) null !== t[i] && e++;
            const n = new Array(e).fill(null);
            if (0 === e) return n;
            let s = 0;
            for (let i = 0; i < t.length; i++) null !== t[i] && (n[s++] = t[i]);
            return n;
          }
          static copyDeep() {
            if (1 === arguments.length) {
              const t = arguments[0],
                e = new Array(t.length).fill(null);
              for (let n = 0; n < t.length; n++) e[n] = new g(t[n]);
              return e;
            }
            if (5 === arguments.length) {
              const t = arguments[0],
                e = arguments[1],
                n = arguments[2],
                s = arguments[3],
                i = arguments[4];
              for (let r = 0; r < i; r++) n[s + r] = new g(t[e + r]);
            }
          }
          static isEqualReversed(t, e) {
            for (let n = 0; n < t.length; n++) {
              const s = t[n],
                i = e[t.length - n - 1];
              if (0 !== s.compareTo(i)) return !1;
            }
            return !0;
          }
          static envelope(t) {
            const e = new N();
            for (let n = 0; n < t.length; n++) e.expandToInclude(t[n]);
            return e;
          }
          static toCoordinateArray(t) {
            return t.toArray(X.coordArrayType);
          }
          static atLeastNCoordinatesOrNothing(t, e) {
            return e.length >= t ? e : [];
          }
          static indexOf(t, e) {
            for (let n = 0; n < e.length; n++) if (t.equals(e[n])) return n;
            return -1;
          }
          static increasingDirection(t) {
            for (let e = 0; e < Math.trunc(t.length / 2); e++) {
              const n = t.length - 1 - e,
                s = t[e].compareTo(t[n]);
              if (0 !== s) return s;
            }
            return 1;
          }
          static compare(t, e) {
            let n = 0;
            for (; n < t.length && n < e.length; ) {
              const s = t[n].compareTo(e[n]);
              if (0 !== s) return s;
              n++;
            }
            return n < e.length ? -1 : n < t.length ? 1 : 0;
          }
          static minCoordinate(t) {
            let e = null;
            for (let n = 0; n < t.length; n++)
              (null === e || e.compareTo(t[n]) > 0) && (e = t[n]);
            return e;
          }
          static extract(t, e, n) {
            e = M.clamp(e, 0, t.length);
            let s = (n = M.clamp(n, -1, t.length)) - e + 1;
            n < 0 && (s = 0), e >= t.length && (s = 0), n < e && (s = 0);
            const i = new Array(s).fill(null);
            if (0 === s) return i;
            let r = 0;
            for (let o = e; o <= n; o++) i[r++] = t[o];
            return i;
          }
          getClass() {
            return X;
          }
          get interfaces_() {
            return [];
          }
        }
        class H {
          constructor() {
            H.constructor_.apply(this, arguments);
          }
          compare(t, e) {
            const n = t,
              s = e;
            return X.compare(n, s);
          }
          getClass() {
            return H;
          }
          get interfaces_() {
            return [l];
          }
        }
        H.constructor_ = function () {};
        class W {
          constructor() {
            W.constructor_.apply(this, arguments);
          }
          compare(t, e) {
            const n = t,
              s = e;
            if (n.length < s.length) return -1;
            if (n.length > s.length) return 1;
            if (0 === n.length) return 0;
            const i = X.compare(n, s);
            return X.isEqualReversed(n, s) ? 0 : i;
          }
          OLDcompare(t, e) {
            const n = t,
              s = e;
            if (n.length < s.length) return -1;
            if (n.length > s.length) return 1;
            if (0 === n.length) return 0;
            const i = X.increasingDirection(n),
              r = X.increasingDirection(s);
            let o = i > 0 ? 0 : n.length - 1,
              l = r > 0 ? 0 : n.length - 1;
            for (let a = 0; a < n.length; a++) {
              const t = n[o].compareTo(s[l]);
              if (0 !== t) return t;
              (o += i), (l += r);
            }
            return 0;
          }
          getClass() {
            return W;
          }
          get interfaces_() {
            return [l];
          }
        }
        function j() {}
        function K() {}
        function Z(t) {
          this.message = t || "";
        }
        function Q() {}
        function J() {
          (this.array_ = []),
            arguments[0] instanceof p && this.addAll(arguments[0]);
        }
        (W.constructor_ = function () {}),
          (X.ForwardComparator = H),
          (X.BidirectionalComparator = W),
          (X.constructor_ = function () {}),
          (X.coordArrayType = new Array(0).fill(null)),
          (j.prototype.get = function () {}),
          (j.prototype.put = function () {}),
          (j.prototype.size = function () {}),
          (j.prototype.values = function () {}),
          (j.prototype.entrySet = function () {}),
          (K.prototype = new j()),
          (Z.prototype = new Error()),
          (Z.prototype.name = "OperationNotSupported"),
          (Q.prototype = new p()),
          (Q.prototype.contains = function () {}),
          (J.prototype = new Q()),
          (J.prototype.contains = function (t) {
            for (let e = 0, n = this.array_.length; e < n; e++)
              if (this.array_[e] === t) return !0;
            return !1;
          }),
          (J.prototype.add = function (t) {
            return !this.contains(t) && (this.array_.push(t), !0);
          }),
          (J.prototype.addAll = function (t) {
            for (let e = t.iterator(); e.hasNext(); ) this.add(e.next());
            return !0;
          }),
          (J.prototype.remove = function (t) {
            throw new Z();
          }),
          (J.prototype.size = function () {
            return this.array_.length;
          }),
          (J.prototype.isEmpty = function () {
            return 0 === this.array_.length;
          }),
          (J.prototype.toArray = function () {
            const t = [];
            for (let e = 0, n = this.array_.length; e < n; e++)
              t.push(this.array_[e]);
            return t;
          }),
          (J.prototype.iterator = function () {
            return new $(this);
          });
        const $ = function (t) {
          (this.hashSet_ = t), (this.position_ = 0);
        };
        ($.prototype.next = function () {
          if (this.position_ === this.hashSet_.size()) throw new y();
          return this.hashSet_.array_[this.position_++];
        }),
          ($.prototype.hasNext = function () {
            return this.position_ < this.hashSet_.size();
          }),
          ($.prototype.remove = function () {
            throw new Z();
          });
        const tt = 0;
        function et(t) {
          return null == t ? tt : t.color;
        }
        function nt(t) {
          return null == t ? null : t.parent;
        }
        function st(t, e) {
          null !== t && (t.color = e);
        }
        function it(t) {
          return null == t ? null : t.left;
        }
        function rt(t) {
          return null == t ? null : t.right;
        }
        function ot() {
          (this.root_ = null), (this.size_ = 0);
        }
        (ot.prototype = new K()),
          (ot.prototype.get = function (t) {
            for (var e = this.root_; null !== e; ) {
              var n = t.compareTo(e.key);
              if (n < 0) e = e.left;
              else {
                if (!(n > 0)) return e.value;
                e = e.right;
              }
            }
            return null;
          }),
          (ot.prototype.put = function (t, e) {
            if (null === this.root_)
              return (
                (this.root_ = {
                  key: t,
                  value: e,
                  left: null,
                  right: null,
                  parent: null,
                  color: tt,
                  getValue() {
                    return this.value;
                  },
                  getKey() {
                    return this.key;
                  },
                }),
                (this.size_ = 1),
                null
              );
            var n,
              s,
              i = this.root_;
            do {
              if (((n = i), (s = t.compareTo(i.key)) < 0)) i = i.left;
              else {
                if (!(s > 0)) {
                  var r = i.value;
                  return (i.value = e), r;
                }
                i = i.right;
              }
            } while (null !== i);
            var o = {
              key: t,
              left: null,
              right: null,
              value: e,
              parent: n,
              color: tt,
              getValue() {
                return this.value;
              },
              getKey() {
                return this.key;
              },
            };
            return (
              s < 0 ? (n.left = o) : (n.right = o),
              this.fixAfterInsertion(o),
              this.size_++,
              null
            );
          }),
          (ot.prototype.fixAfterInsertion = function (t) {
            let e;
            for (
              t.color = 1;
              null != t && t !== this.root_ && 1 === t.parent.color;

            )
              nt(t) === it(nt(nt(t)))
                ? 1 === et((e = rt(nt(nt(t)))))
                  ? (st(nt(t), tt),
                    st(e, tt),
                    st(nt(nt(t)), 1),
                    (t = nt(nt(t))))
                  : (t === rt(nt(t)) && ((t = nt(t)), this.rotateLeft(t)),
                    st(nt(t), tt),
                    st(nt(nt(t)), 1),
                    this.rotateRight(nt(nt(t))))
                : 1 === et((e = it(nt(nt(t)))))
                ? (st(nt(t), tt), st(e, tt), st(nt(nt(t)), 1), (t = nt(nt(t))))
                : (t === it(nt(t)) && ((t = nt(t)), this.rotateRight(t)),
                  st(nt(t), tt),
                  st(nt(nt(t)), 1),
                  this.rotateLeft(nt(nt(t))));
            this.root_.color = tt;
          }),
          (ot.prototype.values = function () {
            var t = new x(),
              e = this.getFirstEntry();
            if (null !== e)
              for (t.add(e.value); null !== (e = ot.successor(e)); )
                t.add(e.value);
            return t;
          }),
          (ot.prototype.entrySet = function () {
            var t = new J(),
              e = this.getFirstEntry();
            if (null !== e)
              for (t.add(e); null !== (e = ot.successor(e)); ) t.add(e);
            return t;
          }),
          (ot.prototype.rotateLeft = function (t) {
            if (null != t) {
              var e = t.right;
              (t.right = e.left),
                null != e.left && (e.left.parent = t),
                (e.parent = t.parent),
                null == t.parent
                  ? (this.root_ = e)
                  : t.parent.left === t
                  ? (t.parent.left = e)
                  : (t.parent.right = e),
                (e.left = t),
                (t.parent = e);
            }
          }),
          (ot.prototype.rotateRight = function (t) {
            if (null != t) {
              var e = t.left;
              (t.left = e.right),
                null != e.right && (e.right.parent = t),
                (e.parent = t.parent),
                null == t.parent
                  ? (this.root_ = e)
                  : t.parent.right === t
                  ? (t.parent.right = e)
                  : (t.parent.left = e),
                (e.right = t),
                (t.parent = e);
            }
          }),
          (ot.prototype.getFirstEntry = function () {
            var t = this.root_;
            if (null != t) for (; null != t.left; ) t = t.left;
            return t;
          }),
          (ot.successor = function (t) {
            let e;
            if (null === t) return null;
            if (null !== t.right) {
              for (e = t.right; null !== e.left; ) e = e.left;
              return e;
            }
            e = t.parent;
            for (var n = t; null !== e && n === e.right; )
              (n = e), (e = e.parent);
            return e;
          }),
          (ot.prototype.size = function () {
            return this.size_;
          }),
          (ot.prototype.containsKey = function (t) {
            for (var e = this.root_; null !== e; ) {
              var n = t.compareTo(e.key);
              if (n < 0) e = e.left;
              else {
                if (!(n > 0)) return !0;
                e = e.right;
              }
            }
            return !1;
          });
        class lt {
          constructor() {
            lt.constructor_.apply(this, arguments);
          }
          getClass() {
            return lt;
          }
          get interfaces_() {
            return [];
          }
        }
        function at() {}
        function ct() {
          (this.array_ = []),
            arguments[0] instanceof p && this.addAll(arguments[0]);
        }
        (lt.constructor_ = function () {}),
          (at.prototype = new Q()),
          (ct.prototype = new at()),
          (ct.prototype.contains = function (t) {
            for (let e = 0, n = this.array_.length; e < n; e++)
              if (0 === this.array_[e].compareTo(t)) return !0;
            return !1;
          }),
          (ct.prototype.add = function (t) {
            if (this.contains(t)) return !1;
            for (let e = 0, n = this.array_.length; e < n; e++)
              if (1 === this.array_[e].compareTo(t))
                return this.array_.splice(e, 0, t), !0;
            return this.array_.push(t), !0;
          }),
          (ct.prototype.addAll = function (t) {
            for (let e = t.iterator(); e.hasNext(); ) this.add(e.next());
            return !0;
          }),
          (ct.prototype.remove = function (t) {
            throw new Z();
          }),
          (ct.prototype.size = function () {
            return this.array_.length;
          }),
          (ct.prototype.isEmpty = function () {
            return 0 === this.array_.length;
          }),
          (ct.prototype.toArray = function () {
            const t = [];
            for (let e = 0, n = this.array_.length; e < n; e++)
              t.push(this.array_[e]);
            return t;
          }),
          (ct.prototype.iterator = function () {
            return new ht(this);
          });
        const ht = function (t) {
          (this.treeSet_ = t), (this.position_ = 0);
        };
        function ut() {}
        (ht.prototype.next = function () {
          if (this.position_ === this.treeSet_.size()) throw new y();
          return this.treeSet_.array_[this.position_++];
        }),
          (ht.prototype.hasNext = function () {
            return this.position_ < this.treeSet_.size();
          }),
          (ht.prototype.remove = function () {
            throw new Z();
          }),
          (ut.sort = function () {
            const t = arguments[0];
            let e, n, s, i;
            if (1 === arguments.length)
              (i = function (t, e) {
                return t.compareTo(e);
              }),
                t.sort(i);
            else if (2 === arguments.length)
              (s = arguments[1]),
                (i = function (t, e) {
                  return s.compare(t, e);
                }),
                t.sort(i);
            else if (3 === arguments.length) {
              (n = t.slice(arguments[1], arguments[2])).sort();
              const s = t
                .slice(0, arguments[1])
                .concat(n, t.slice(arguments[2], t.length));
              for (t.splice(0, t.length), e = 0; e < s.length; e++)
                t.push(s[e]);
            } else if (4 === arguments.length) {
              (n = t.slice(arguments[1], arguments[2])),
                (s = arguments[3]),
                (i = function (t, e) {
                  return s.compare(t, e);
                }),
                n.sort(i);
              const r = t
                .slice(0, arguments[1])
                .concat(n, t.slice(arguments[2], t.length));
              for (t.splice(0, t.length), e = 0; e < r.length; e++)
                t.push(r[e]);
            }
          }),
          (ut.asList = function (t) {
            const e = new x();
            for (let n = 0, s = t.length; n < s; n++) e.add(t[n]);
            return e;
          });
        class gt {
          constructor() {
            gt.constructor_.apply(this, arguments);
          }
          static toDimensionSymbol(t) {
            switch (t) {
              case gt.FALSE:
                return gt.SYM_FALSE;
              case gt.TRUE:
                return gt.SYM_TRUE;
              case gt.DONTCARE:
                return gt.SYM_DONTCARE;
              case gt.P:
                return gt.SYM_P;
              case gt.L:
                return gt.SYM_L;
              case gt.A:
                return gt.SYM_A;
            }
            throw new n("Unknown dimension value: " + t);
          }
          static toDimensionValue(t) {
            switch (T.toUpperCase(t)) {
              case gt.SYM_FALSE:
                return gt.FALSE;
              case gt.SYM_TRUE:
                return gt.TRUE;
              case gt.SYM_DONTCARE:
                return gt.DONTCARE;
              case gt.SYM_P:
                return gt.P;
              case gt.SYM_L:
                return gt.L;
              case gt.SYM_A:
                return gt.A;
            }
            throw new n("Unknown dimension symbol: " + t);
          }
          getClass() {
            return gt;
          }
          get interfaces_() {
            return [];
          }
        }
        (gt.constructor_ = function () {}),
          (gt.P = 0),
          (gt.L = 1),
          (gt.A = 2),
          (gt.FALSE = -1),
          (gt.TRUE = -2),
          (gt.DONTCARE = -3),
          (gt.SYM_FALSE = "F"),
          (gt.SYM_TRUE = "T"),
          (gt.SYM_DONTCARE = "*"),
          (gt.SYM_P = "0"),
          (gt.SYM_L = "1"),
          (gt.SYM_A = "2");
        class dt {
          constructor() {
            dt.constructor_.apply(this, arguments);
          }
          filter(t) {}
          getClass() {
            return dt;
          }
          get interfaces_() {
            return [];
          }
        }
        dt.constructor_ = function () {};
        class _t {
          constructor() {
            _t.constructor_.apply(this, arguments);
          }
          filter(t, e) {}
          isDone() {}
          isGeometryChanged() {}
          getClass() {
            return _t;
          }
          get interfaces_() {
            return [];
          }
        }
        _t.constructor_ = function () {};
        class pt extends q {
          constructor() {
            super(), pt.constructor_.apply(this, arguments);
          }
          computeEnvelopeInternal() {
            const t = new N();
            for (let e = 0; e < this._geometries.length; e++)
              t.expandToInclude(this._geometries[e].getEnvelopeInternal());
            return t;
          }
          getGeometryN(t) {
            return this._geometries[t];
          }
          getCoordinates() {
            const t = new Array(this.getNumPoints()).fill(null);
            let e = -1;
            for (let n = 0; n < this._geometries.length; n++) {
              const s = this._geometries[n].getCoordinates();
              for (let n = 0; n < s.length; n++) t[++e] = s[n];
            }
            return t;
          }
          getArea() {
            let t = 0;
            for (let e = 0; e < this._geometries.length; e++)
              t += this._geometries[e].getArea();
            return t;
          }
          equalsExact() {
            if (
              2 === arguments.length &&
              "number" == typeof arguments[1] &&
              arguments[0] instanceof q
            ) {
              const t = arguments[0],
                e = arguments[1];
              if (!this.isEquivalentClass(t)) return !1;
              const n = t;
              if (this._geometries.length !== n._geometries.length) return !1;
              for (let s = 0; s < this._geometries.length; s++)
                if (!this._geometries[s].equalsExact(n._geometries[s], e))
                  return !1;
              return !0;
            }
            return super.equalsExact.apply(this, arguments);
          }
          normalize() {
            for (let t = 0; t < this._geometries.length; t++)
              this._geometries[t].normalize();
            ut.sort(this._geometries);
          }
          getCoordinate() {
            return this.isEmpty() ? null : this._geometries[0].getCoordinate();
          }
          getBoundaryDimension() {
            let t = gt.FALSE;
            for (let e = 0; e < this._geometries.length; e++)
              t = Math.max(t, this._geometries[e].getBoundaryDimension());
            return t;
          }
          getTypeCode() {
            return q.TYPECODE_GEOMETRYCOLLECTION;
          }
          getDimension() {
            let t = gt.FALSE;
            for (let e = 0; e < this._geometries.length; e++)
              t = Math.max(t, this._geometries[e].getDimension());
            return t;
          }
          getLength() {
            let t = 0;
            for (let e = 0; e < this._geometries.length; e++)
              t += this._geometries[e].getLength();
            return t;
          }
          getNumPoints() {
            let t = 0;
            for (let e = 0; e < this._geometries.length; e++)
              t += this._geometries[e].getNumPoints();
            return t;
          }
          getNumGeometries() {
            return this._geometries.length;
          }
          reverse() {
            const t = this._geometries.length,
              e = new Array(t).fill(null);
            for (let n = 0; n < this._geometries.length; n++)
              e[n] = this._geometries[n].reverse();
            return this.getFactory().createGeometryCollection(e);
          }
          compareToSameClass() {
            if (1 === arguments.length) {
              const t = arguments[0],
                e = new ct(ut.asList(this._geometries)),
                n = new ct(ut.asList(t._geometries));
              return this.compare(e, n);
            }
            if (2 === arguments.length) {
              const t = arguments[1],
                e = arguments[0],
                n = this.getNumGeometries(),
                s = e.getNumGeometries();
              let i = 0;
              for (; i < n && i < s; ) {
                const n = this.getGeometryN(i),
                  s = e.getGeometryN(i),
                  r = n.compareToSameClass(s, t);
                if (0 !== r) return r;
                i++;
              }
              return i < n ? 1 : i < s ? -1 : 0;
            }
          }
          apply() {
            if (_(arguments[0], B)) {
              const t = arguments[0];
              for (let e = 0; e < this._geometries.length; e++)
                this._geometries[e].apply(t);
            } else if (_(arguments[0], _t)) {
              const t = arguments[0];
              if (0 === this._geometries.length) return null;
              for (
                let e = 0;
                e < this._geometries.length &&
                (this._geometries[e].apply(t), !t.isDone());
                e++
              );
              t.isGeometryChanged() && this.geometryChanged();
            } else if (_(arguments[0], dt)) {
              const t = arguments[0];
              t.filter(this);
              for (let e = 0; e < this._geometries.length; e++)
                this._geometries[e].apply(t);
            } else if (_(arguments[0], G)) {
              const t = arguments[0];
              t.filter(this);
              for (let e = 0; e < this._geometries.length; e++)
                this._geometries[e].apply(t);
            }
          }
          getBoundary() {
            return (
              this.checkNotGeometryCollection(this),
              u.shouldNeverReachHere(),
              null
            );
          }
          getGeometryType() {
            return q.TYPENAME_GEOMETRYCOLLECTION;
          }
          copy() {
            const t = new Array(this._geometries.length).fill(null);
            for (let e = 0; e < t.length; e++)
              t[e] = this._geometries[e].copy();
            return new pt(t, this._factory);
          }
          isEmpty() {
            for (let t = 0; t < this._geometries.length; t++)
              if (!this._geometries[t].isEmpty()) return !1;
            return !0;
          }
          getClass() {
            return pt;
          }
          get interfaces_() {
            return [];
          }
        }
        (pt.constructor_ = function () {
          if (((this._geometries = null), 0 === arguments.length));
          else if (2 === arguments.length) {
            let t = arguments[0];
            const e = arguments[1];
            if (
              (q.constructor_.call(this, e),
              null === t && (t = []),
              q.hasNullElements(t))
            )
              throw new n("geometries must not contain null elements");
            this._geometries = t;
          }
        }),
          (pt.serialVersionUID = -0x4f07bcb1f857d800);
        class ft extends pt {
          constructor() {
            super(), ft.constructor_.apply(this, arguments);
          }
          equalsExact() {
            if (
              2 === arguments.length &&
              "number" == typeof arguments[1] &&
              arguments[0] instanceof q
            ) {
              const t = arguments[0],
                e = arguments[1];
              return (
                !!this.isEquivalentClass(t) &&
                super.equalsExact.call(this, t, e)
              );
            }
            return super.equalsExact.apply(this, arguments);
          }
          getBoundaryDimension() {
            return this.isClosed() ? gt.FALSE : 0;
          }
          isClosed() {
            if (this.isEmpty()) return !1;
            for (let t = 0; t < this._geometries.length; t++)
              if (!this._geometries[t].isClosed()) return !1;
            return !0;
          }
          getTypeCode() {
            return q.TYPECODE_MULTILINESTRING;
          }
          getDimension() {
            return 1;
          }
          reverse() {
            const t = this._geometries.length,
              e = new Array(t).fill(null);
            for (let n = 0; n < this._geometries.length; n++)
              e[t - 1 - n] = this._geometries[n].reverse();
            return this.getFactory().createMultiLineString(e);
          }
          getBoundary() {
            return new mt(this).getBoundary();
          }
          getGeometryType() {
            return q.TYPENAME_MULTILINESTRING;
          }
          copy() {
            const t = new Array(this._geometries.length).fill(null);
            for (let e = 0; e < t.length; e++)
              t[e] = this._geometries[e].copy();
            return new ft(t, this._factory);
          }
          getClass() {
            return ft;
          }
          get interfaces_() {
            return [lt];
          }
        }
        (ft.constructor_ = function () {
          const t = arguments[0],
            e = arguments[1];
          pt.constructor_.call(this, t, e);
        }),
          (ft.serialVersionUID = 0x7155d2ab4afa8000);
        class mt {
          constructor() {
            mt.constructor_.apply(this, arguments);
          }
          static getBoundary() {
            return 1 === arguments.length
              ? new mt(arguments[0]).getBoundary()
              : 2 === arguments.length
              ? new mt(arguments[0], arguments[1]).getBoundary()
              : void 0;
          }
          boundaryMultiLineString(t) {
            if (this._geom.isEmpty()) return this.getEmptyMultiPoint();
            const e = this.computeBoundaryCoordinates(t);
            return 1 === e.length
              ? this._geomFact.createPoint(e[0])
              : this._geomFact.createMultiPointFromCoords(e);
          }
          getBoundary() {
            return this._geom instanceof Rt
              ? this.boundaryLineString(this._geom)
              : this._geom instanceof ft
              ? this.boundaryMultiLineString(this._geom)
              : this._geom.getBoundary();
          }
          boundaryLineString(t) {
            return this._geom.isEmpty()
              ? this.getEmptyMultiPoint()
              : t.isClosed()
              ? this._bnRule.isInBoundary(2)
                ? t.getStartPoint()
                : this._geomFact.createMultiPoint()
              : this._geomFact.createMultiPoint([
                  t.getStartPoint(),
                  t.getEndPoint(),
                ]);
          }
          getEmptyMultiPoint() {
            return this._geomFact.createMultiPoint();
          }
          computeBoundaryCoordinates(t) {
            const e = new x();
            this._endpointMap = new ot();
            for (let n = 0; n < t.getNumGeometries(); n++) {
              const e = t.getGeometryN(n);
              0 !== e.getNumPoints() &&
                (this.addEndpoint(e.getCoordinateN(0)),
                this.addEndpoint(e.getCoordinateN(e.getNumPoints() - 1)));
            }
            for (
              let n = this._endpointMap.entrySet().iterator();
              n.hasNext();

            ) {
              const t = n.next(),
                s = t.getValue().count;
              this._bnRule.isInBoundary(s) && e.add(t.getKey());
            }
            return X.toCoordinateArray(e);
          }
          addEndpoint(t) {
            let e = this._endpointMap.get(t);
            null === e && ((e = new yt()), this._endpointMap.put(t, e)),
              e.count++;
          }
          getClass() {
            return mt;
          }
          get interfaces_() {
            return [];
          }
        }
        mt.constructor_ = function () {
          if (
            ((this._geom = null),
            (this._geomFact = null),
            (this._bnRule = null),
            (this._endpointMap = null),
            1 === arguments.length)
          ) {
            const t = arguments[0];
            mt.constructor_.call(this, t, V.MOD2_BOUNDARY_RULE);
          } else if (2 === arguments.length) {
            const t = arguments[0],
              e = arguments[1];
            (this._geom = t),
              (this._geomFact = t.getFactory()),
              (this._bnRule = e);
          }
        };
        class yt {
          constructor() {
            yt.constructor_.apply(this, arguments);
          }
          getClass() {
            return yt;
          }
          get interfaces_() {
            return [];
          }
        }
        yt.constructor_ = function () {
          this.count = null;
        };
        class xt {
          constructor() {
            xt.constructor_.apply(this, arguments);
          }
          static ofLine(t) {
            const e = t.size();
            if (e <= 1) return 0;
            let n = 0;
            const s = new g();
            t.getCoordinate(0, s);
            let i = s.x,
              r = s.y;
            for (let o = 1; o < e; o++) {
              t.getCoordinate(o, s);
              const e = s.x,
                l = s.y,
                a = e - i,
                c = l - r;
              (n += Math.sqrt(a * a + c * c)), (i = e), (r = l);
            }
            return n;
          }
          getClass() {
            return xt;
          }
          get interfaces_() {
            return [];
          }
        }
        function Et() {}
        function It() {}
        function Nt() {}
        function Ct() {}
        function St() {}
        xt.constructor_ = function () {};
        class wt {
          constructor() {
            wt.constructor_.apply(this, arguments);
          }
          static chars(t, e) {
            const n = new Array(e).fill(null);
            for (let s = 0; s < e; s++) n[s] = t;
            return new String(n);
          }
          static getStackTrace() {
            if (1 === arguments.length) {
              const t = arguments[0],
                e = new Nt(),
                n = new Et(e);
              return t.printStackTrace(n), e.toString();
            }
            if (2 === arguments.length) {
              const e = arguments[0],
                n = arguments[1];
              let s = "";
              const i = new St(new It(wt.getStackTrace(e)));
              for (let r = 0; r < n; r++)
                try {
                  s += i.readLine() + wt.NEWLINE;
                } catch (t) {
                  if (!(t instanceof Ct)) throw t;
                  u.shouldNeverReachHere();
                }
              return s;
            }
          }
          static split(t, e) {
            const n = e.length,
              s = new x();
            let i = "" + t,
              r = i.indexOf(e);
            for (; r >= 0; ) {
              const t = i.substring(0, r);
              s.add(t), (r = (i = i.substring(r + n)).indexOf(e));
            }
            i.length > 0 && s.add(i);
            const o = new Array(s.size()).fill(null);
            for (let l = 0; l < o.length; l++) o[l] = s.get(l);
            return o;
          }
          static toString() {
            if (1 === arguments.length && "number" == typeof arguments[0]) {
              const t = arguments[0];
              return wt.SIMPLE_ORDINATE_FORMAT.format(t);
            }
          }
          static spaces(t) {
            return wt.chars(" ", t);
          }
          getClass() {
            return wt;
          }
          get interfaces_() {
            return [];
          }
        }
        function Lt(t) {
          this.str = t;
        }
        (wt.constructor_ = function () {}),
          (wt.NEWLINE = O.getProperty("line.separator")),
          (wt.SIMPLE_ORDINATE_FORMAT = new (function () {})("0.#")),
          (Lt.prototype.append = function (t) {
            this.str += t;
          }),
          (Lt.prototype.setCharAt = function (t, e) {
            this.str = this.str.substr(0, t) + e + this.str.substr(t + 1);
          }),
          (Lt.prototype.toString = function (t) {
            return this.str;
          });
        class Tt {
          constructor() {
            Tt.constructor_.apply(this, arguments);
          }
          static copyCoord(t, e, n, s) {
            const i = Math.min(t.getDimension(), n.getDimension());
            for (let r = 0; r < i; r++)
              n.setOrdinate(s, r, t.getOrdinate(e, r));
          }
          static isRing(t) {
            const e = t.size();
            return (
              0 === e ||
              (!(e <= 3) &&
                t.getOrdinate(0, A.X) === t.getOrdinate(e - 1, A.X) &&
                t.getOrdinate(0, A.Y) === t.getOrdinate(e - 1, A.Y))
            );
          }
          static isEqual(t, e) {
            const n = t.size();
            if (n !== e.size()) return !1;
            const s = Math.min(t.getDimension(), e.getDimension());
            for (let r = 0; r < n; r++)
              for (let n = 0; n < s; n++) {
                const s = t.getOrdinate(r, n),
                  o = e.getOrdinate(r, n);
                if (
                  t.getOrdinate(r, n) !== e.getOrdinate(r, n) &&
                  (!i.isNaN(s) || !i.isNaN(o))
                )
                  return !1;
              }
            return !0;
          }
          static extend(t, e, n) {
            const s = t.create(n, e.getDimension()),
              i = e.size();
            if ((Tt.copy(e, 0, s, 0, i), i > 0))
              for (let r = i; r < n; r++) Tt.copy(e, i - 1, s, r, 1);
            return s;
          }
          static reverse(t) {
            const e = t.size() - 1,
              n = Math.trunc(e / 2);
            for (let s = 0; s <= n; s++) Tt.swap(t, s, e - s);
          }
          static swap(t, e, n) {
            if (e === n) return null;
            for (let s = 0; s < t.getDimension(); s++) {
              const i = t.getOrdinate(e, s);
              t.setOrdinate(e, s, t.getOrdinate(n, s)), t.setOrdinate(n, s, i);
            }
          }
          static copy(t, e, n, s, i) {
            for (let r = 0; r < i; r++) Tt.copyCoord(t, e + r, n, s + r);
          }
          static toString() {
            if (1 === arguments.length && _(arguments[0], A)) {
              const t = arguments[0],
                e = t.size();
              if (0 === e) return "()";
              const n = t.getDimension(),
                s = new Lt();
              s.append("(");
              for (let i = 0; i < e; i++) {
                i > 0 && s.append(" ");
                for (let e = 0; e < n; e++)
                  e > 0 && s.append(","),
                    s.append(wt.toString(t.getOrdinate(i, e)));
              }
              return s.append(")"), s.toString();
            }
          }
          static ensureValidRing(t, e) {
            const n = e.size();
            return 0 === n
              ? e
              : n <= 3
              ? Tt.createClosedRing(t, e, 4)
              : e.getOrdinate(0, A.X) === e.getOrdinate(n - 1, A.X) &&
                e.getOrdinate(0, A.Y) === e.getOrdinate(n - 1, A.Y)
              ? e
              : Tt.createClosedRing(t, e, n + 1);
          }
          static createClosedRing(t, e, n) {
            const s = t.create(n, e.getDimension()),
              i = e.size();
            Tt.copy(e, 0, s, 0, i);
            for (let r = i; r < n; r++) Tt.copy(e, 0, s, r, 1);
            return s;
          }
          getClass() {
            return Tt;
          }
          get interfaces_() {
            return [];
          }
        }
        Tt.constructor_ = function () {};
        class Rt extends q {
          constructor() {
            super(), Rt.constructor_.apply(this, arguments);
          }
          computeEnvelopeInternal() {
            return this.isEmpty()
              ? new N()
              : this._points.expandEnvelope(new N());
          }
          isRing() {
            return this.isClosed() && this.isSimple();
          }
          getCoordinates() {
            return this._points.toCoordinateArray();
          }
          equalsExact() {
            if (
              2 === arguments.length &&
              "number" == typeof arguments[1] &&
              arguments[0] instanceof q
            ) {
              const t = arguments[0],
                e = arguments[1];
              if (!this.isEquivalentClass(t)) return !1;
              const n = t;
              if (this._points.size() !== n._points.size()) return !1;
              for (let s = 0; s < this._points.size(); s++)
                if (
                  !this.equal(
                    this._points.getCoordinate(s),
                    n._points.getCoordinate(s),
                    e
                  )
                )
                  return !1;
              return !0;
            }
            return super.equalsExact.apply(this, arguments);
          }
          normalize() {
            for (let t = 0; t < Math.trunc(this._points.size() / 2); t++) {
              const e = this._points.size() - 1 - t;
              if (
                !this._points
                  .getCoordinate(t)
                  .equals(this._points.getCoordinate(e))
              ) {
                if (
                  this._points
                    .getCoordinate(t)
                    .compareTo(this._points.getCoordinate(e)) > 0
                ) {
                  const t = this._points.copy();
                  Tt.reverse(t), (this._points = t);
                }
                return null;
              }
            }
          }
          getCoordinate() {
            return this.isEmpty() ? null : this._points.getCoordinate(0);
          }
          getBoundaryDimension() {
            return this.isClosed() ? gt.FALSE : 0;
          }
          isClosed() {
            return (
              !this.isEmpty() &&
              this.getCoordinateN(0).equals2D(
                this.getCoordinateN(this.getNumPoints() - 1)
              )
            );
          }
          getEndPoint() {
            return this.isEmpty()
              ? null
              : this.getPointN(this.getNumPoints() - 1);
          }
          getTypeCode() {
            return q.TYPECODE_LINESTRING;
          }
          getDimension() {
            return 1;
          }
          getLength() {
            return xt.ofLine(this._points);
          }
          getNumPoints() {
            return this._points.size();
          }
          reverse() {
            const t = this._points.copy();
            return Tt.reverse(t), this.getFactory().createLineString(t);
          }
          compareToSameClass() {
            if (1 === arguments.length) {
              const t = arguments[0];
              let e = 0,
                n = 0;
              for (; e < this._points.size() && n < t._points.size(); ) {
                const s = this._points
                  .getCoordinate(e)
                  .compareTo(t._points.getCoordinate(n));
                if (0 !== s) return s;
                e++, n++;
              }
              return e < this._points.size()
                ? 1
                : n < t._points.size()
                ? -1
                : 0;
            }
            if (2 === arguments.length) {
              const t = arguments[0];
              return arguments[1].compare(this._points, t._points);
            }
          }
          apply() {
            if (_(arguments[0], B)) {
              const t = arguments[0];
              for (let e = 0; e < this._points.size(); e++)
                t.filter(this._points.getCoordinate(e));
            } else if (_(arguments[0], _t)) {
              const t = arguments[0];
              if (0 === this._points.size()) return null;
              for (
                let e = 0;
                e < this._points.size() &&
                (t.filter(this._points, e), !t.isDone());
                e++
              );
              t.isGeometryChanged() && this.geometryChanged();
            } else
              (_(arguments[0], dt) || _(arguments[0], G)) &&
                arguments[0].filter(this);
          }
          getBoundary() {
            return new mt(this).getBoundary();
          }
          isEquivalentClass(t) {
            return t instanceof Rt;
          }
          getCoordinateN(t) {
            return this._points.getCoordinate(t);
          }
          getGeometryType() {
            return q.TYPENAME_LINESTRING;
          }
          copy() {
            return new Rt(this._points.copy(), this._factory);
          }
          getCoordinateSequence() {
            return this._points;
          }
          isEmpty() {
            return 0 === this._points.size();
          }
          init(t) {
            if (
              (null === t &&
                (t = this.getFactory()
                  .getCoordinateSequenceFactory()
                  .create([])),
              1 === t.size())
            )
              throw new n(
                "Invalid number of points in LineString (found " +
                  t.size() +
                  " - must be 0 or >= 2)"
              );
            this._points = t;
          }
          isCoordinate(t) {
            for (let e = 0; e < this._points.size(); e++)
              if (this._points.getCoordinate(e).equals(t)) return !0;
            return !1;
          }
          getStartPoint() {
            return this.isEmpty() ? null : this.getPointN(0);
          }
          getPointN(t) {
            return this.getFactory().createPoint(this._points.getCoordinate(t));
          }
          getClass() {
            return Rt;
          }
          get interfaces_() {
            return [lt];
          }
        }
        (Rt.constructor_ = function () {
          if (((this._points = null), 0 === arguments.length));
          else if (2 === arguments.length) {
            const t = arguments[0],
              e = arguments[1];
            q.constructor_.call(this, e), this.init(t);
          }
        }),
          (Rt.serialVersionUID = 0x2b2b51ba435c8e00);
        class Pt {
          constructor() {
            Pt.constructor_.apply(this, arguments);
          }
          getClass() {
            return Pt;
          }
          get interfaces_() {
            return [];
          }
        }
        Pt.constructor_ = function () {};
        class vt extends q {
          constructor() {
            super(), vt.constructor_.apply(this, arguments);
          }
          computeEnvelopeInternal() {
            if (this.isEmpty()) return new N();
            const t = new N();
            return (
              t.expandToInclude(
                this._coordinates.getX(0),
                this._coordinates.getY(0)
              ),
              t
            );
          }
          getCoordinates() {
            return this.isEmpty() ? [] : [this.getCoordinate()];
          }
          equalsExact() {
            if (
              2 === arguments.length &&
              "number" == typeof arguments[1] &&
              arguments[0] instanceof q
            ) {
              const t = arguments[0],
                e = arguments[1];
              return (
                !!this.isEquivalentClass(t) &&
                (!(!this.isEmpty() || !t.isEmpty()) ||
                  (this.isEmpty() === t.isEmpty() &&
                    this.equal(t.getCoordinate(), this.getCoordinate(), e)))
              );
            }
            return super.equalsExact.apply(this, arguments);
          }
          normalize() {}
          getCoordinate() {
            return 0 !== this._coordinates.size()
              ? this._coordinates.getCoordinate(0)
              : null;
          }
          getBoundaryDimension() {
            return gt.FALSE;
          }
          getTypeCode() {
            return q.TYPECODE_POINT;
          }
          getDimension() {
            return 0;
          }
          getNumPoints() {
            return this.isEmpty() ? 0 : 1;
          }
          reverse() {
            return this.copy();
          }
          getX() {
            if (null === this.getCoordinate())
              throw new IllegalStateException("getX called on empty Point");
            return this.getCoordinate().x;
          }
          compareToSameClass() {
            if (1 === arguments.length) {
              const t = arguments[0];
              return this.getCoordinate().compareTo(t.getCoordinate());
            }
            if (2 === arguments.length) {
              const t = arguments[0];
              return arguments[1].compare(this._coordinates, t._coordinates);
            }
          }
          apply() {
            if (_(arguments[0], B)) {
              const t = arguments[0];
              if (this.isEmpty()) return null;
              t.filter(this.getCoordinate());
            } else if (_(arguments[0], _t)) {
              const t = arguments[0];
              if (this.isEmpty()) return null;
              t.filter(this._coordinates, 0),
                t.isGeometryChanged() && this.geometryChanged();
            } else
              (_(arguments[0], dt) || _(arguments[0], G)) &&
                arguments[0].filter(this);
          }
          getBoundary() {
            return this.getFactory().createGeometryCollection();
          }
          getGeometryType() {
            return q.TYPENAME_POINT;
          }
          copy() {
            return new vt(this._coordinates.copy(), this._factory);
          }
          getCoordinateSequence() {
            return this._coordinates;
          }
          getY() {
            if (null === this.getCoordinate())
              throw new IllegalStateException("getY called on empty Point");
            return this.getCoordinate().y;
          }
          isEmpty() {
            return 0 === this._coordinates.size();
          }
          init(t) {
            null === t &&
              (t = this.getFactory().getCoordinateSequenceFactory().create([])),
              u.isTrue(t.size() <= 1),
              (this._coordinates = t);
          }
          isSimple() {
            return !0;
          }
          getClass() {
            return vt;
          }
          get interfaces_() {
            return [Pt];
          }
        }
        (vt.constructor_ = function () {
          this._coordinates = null;
          const t = arguments[0],
            e = arguments[1];
          q.constructor_.call(this, e), this.init(t);
        }),
          (vt.serialVersionUID = 0x44077bad161cbc00);
        class Ot {
          constructor() {
            Ot.constructor_.apply(this, arguments);
          }
          static ofRing() {
            if (arguments[0] instanceof Array) {
              const t = arguments[0];
              return Math.abs(Ot.ofRingSigned(t));
            }
            if (_(arguments[0], A)) {
              const t = arguments[0];
              return Math.abs(Ot.ofRingSigned(t));
            }
          }
          static ofRingSigned() {
            if (arguments[0] instanceof Array) {
              const t = arguments[0];
              if (t.length < 3) return 0;
              let e = 0;
              const n = t[0].x;
              for (let s = 1; s < t.length - 1; s++) {
                const i = t[s].x - n,
                  r = t[s + 1].y;
                e += i * (t[s - 1].y - r);
              }
              return e / 2;
            }
            if (_(arguments[0], A)) {
              const t = arguments[0],
                e = t.size();
              if (e < 3) return 0;
              const n = new g(),
                s = new g(),
                i = new g();
              t.getCoordinate(0, s), t.getCoordinate(1, i);
              const r = s.x;
              i.x -= r;
              let o = 0;
              for (let l = 1; l < e - 1; l++)
                (n.y = s.y),
                  (s.x = i.x),
                  (s.y = i.y),
                  t.getCoordinate(l + 1, i),
                  (i.x -= r),
                  (o += s.x * (n.y - i.y));
              return o / 2;
            }
          }
          getClass() {
            return Ot;
          }
          get interfaces_() {
            return [];
          }
        }
        Ot.constructor_ = function () {};
        class bt {
          constructor() {
            bt.constructor_.apply(this, arguments);
          }
          getClass() {
            return bt;
          }
          get interfaces_() {
            return [];
          }
        }
        bt.constructor_ = function () {};
        class Mt extends q {
          constructor() {
            super(), Mt.constructor_.apply(this, arguments);
          }
          computeEnvelopeInternal() {
            return this._shell.getEnvelopeInternal();
          }
          getCoordinates() {
            if (this.isEmpty()) return [];
            const t = new Array(this.getNumPoints()).fill(null);
            let e = -1;
            const n = this._shell.getCoordinates();
            for (let s = 0; s < n.length; s++) t[++e] = n[s];
            for (let s = 0; s < this._holes.length; s++) {
              const n = this._holes[s].getCoordinates();
              for (let s = 0; s < n.length; s++) t[++e] = n[s];
            }
            return t;
          }
          getArea() {
            let t = 0;
            t += Ot.ofRing(this._shell.getCoordinateSequence());
            for (let e = 0; e < this._holes.length; e++)
              t -= Ot.ofRing(this._holes[e].getCoordinateSequence());
            return t;
          }
          isRectangle() {
            if (0 !== this.getNumInteriorRing()) return !1;
            if (null === this._shell) return !1;
            if (5 !== this._shell.getNumPoints()) return !1;
            const t = this._shell.getCoordinateSequence(),
              e = this.getEnvelopeInternal();
            for (let i = 0; i < 5; i++) {
              const n = t.getX(i);
              if (n !== e.getMinX() && n !== e.getMaxX()) return !1;
              const s = t.getY(i);
              if (s !== e.getMinY() && s !== e.getMaxY()) return !1;
            }
            let n = t.getX(0),
              s = t.getY(0);
            for (let i = 1; i <= 4; i++) {
              const e = t.getX(i),
                r = t.getY(i);
              if ((e !== n) === (r !== s)) return !1;
              (n = e), (s = r);
            }
            return !0;
          }
          equalsExact() {
            if (
              2 === arguments.length &&
              "number" == typeof arguments[1] &&
              arguments[0] instanceof q
            ) {
              const t = arguments[0],
                e = arguments[1];
              if (!this.isEquivalentClass(t)) return !1;
              const n = t,
                s = this._shell,
                i = n._shell;
              if (!s.equalsExact(i, e)) return !1;
              if (this._holes.length !== n._holes.length) return !1;
              for (let r = 0; r < this._holes.length; r++)
                if (!this._holes[r].equalsExact(n._holes[r], e)) return !1;
              return !0;
            }
            return super.equalsExact.apply(this, arguments);
          }
          normalize() {
            if (0 === arguments.length) {
              this.normalize(this._shell, !0);
              for (let t = 0; t < this._holes.length; t++)
                this.normalize(this._holes[t], !1);
              ut.sort(this._holes);
            } else if (2 === arguments.length) {
              const t = arguments[0],
                e = arguments[1];
              if (t.isEmpty()) return null;
              const n = new Array(t.getCoordinates().length - 1).fill(null);
              O.arraycopy(t.getCoordinates(), 0, n, 0, n.length);
              const s = X.minCoordinate(t.getCoordinates());
              X.scroll(n, s),
                O.arraycopy(n, 0, t.getCoordinates(), 0, n.length),
                (t.getCoordinates()[n.length] = n[0]),
                v.isCCW(t.getCoordinates()) === e &&
                  X.reverse(t.getCoordinates());
            }
          }
          getCoordinate() {
            return this._shell.getCoordinate();
          }
          getNumInteriorRing() {
            return this._holes.length;
          }
          getBoundaryDimension() {
            return 1;
          }
          getTypeCode() {
            return q.TYPECODE_POLYGON;
          }
          getDimension() {
            return 2;
          }
          getLength() {
            let t = 0;
            t += this._shell.getLength();
            for (let e = 0; e < this._holes.length; e++)
              t += this._holes[e].getLength();
            return t;
          }
          getNumPoints() {
            let t = this._shell.getNumPoints();
            for (let e = 0; e < this._holes.length; e++)
              t += this._holes[e].getNumPoints();
            return t;
          }
          reverse() {
            const t = this.copy();
            (t._shell = this._shell.copy().reverse()),
              (t._holes = new Array(this._holes.length).fill(null));
            for (let e = 0; e < this._holes.length; e++)
              t._holes[e] = this._holes[e].copy().reverse();
            return t;
          }
          convexHull() {
            return this.getExteriorRing().convexHull();
          }
          compareToSameClass() {
            if (1 === arguments.length) {
              const t = arguments[0],
                e = this._shell,
                n = t._shell;
              return e.compareToSameClass(n);
            }
            if (2 === arguments.length) {
              const t = arguments[1],
                e = arguments[0],
                n = this._shell,
                s = e._shell,
                i = n.compareToSameClass(s, t);
              if (0 !== i) return i;
              const r = this.getNumInteriorRing(),
                o = e.getNumInteriorRing();
              let l = 0;
              for (; l < r && l < o; ) {
                const n = this.getInteriorRingN(l),
                  s = e.getInteriorRingN(l),
                  i = n.compareToSameClass(s, t);
                if (0 !== i) return i;
                l++;
              }
              return l < r ? 1 : l < o ? -1 : 0;
            }
          }
          apply() {
            if (_(arguments[0], B)) {
              const t = arguments[0];
              this._shell.apply(t);
              for (let e = 0; e < this._holes.length; e++)
                this._holes[e].apply(t);
            } else if (_(arguments[0], _t)) {
              const t = arguments[0];
              if ((this._shell.apply(t), !t.isDone()))
                for (
                  let e = 0;
                  e < this._holes.length &&
                  (this._holes[e].apply(t), !t.isDone());
                  e++
                );
              t.isGeometryChanged() && this.geometryChanged();
            } else if (_(arguments[0], dt)) arguments[0].filter(this);
            else if (_(arguments[0], G)) {
              const t = arguments[0];
              t.filter(this), this._shell.apply(t);
              for (let e = 0; e < this._holes.length; e++)
                this._holes[e].apply(t);
            }
          }
          getBoundary() {
            if (this.isEmpty())
              return this.getFactory().createMultiLineString();
            const t = new Array(this._holes.length + 1).fill(null);
            t[0] = this._shell;
            for (let e = 0; e < this._holes.length; e++)
              t[e + 1] = this._holes[e];
            return t.length <= 1
              ? this.getFactory().createLinearRing(t[0].getCoordinateSequence())
              : this.getFactory().createMultiLineString(t);
          }
          getGeometryType() {
            return q.TYPENAME_POLYGON;
          }
          copy() {
            const t = this._shell.copy(),
              e = new Array(this._holes.length).fill(null);
            for (let n = 0; n < this._holes.length; n++)
              e[n] = this._holes[n].copy();
            return new Mt(t, e, this._factory);
          }
          getExteriorRing() {
            return this._shell;
          }
          isEmpty() {
            return this._shell.isEmpty();
          }
          getInteriorRingN(t) {
            return this._holes[t];
          }
          getClass() {
            return Mt;
          }
          get interfaces_() {
            return [bt];
          }
        }
        (Mt.constructor_ = function () {
          (this._shell = null), (this._holes = null);
          let t = arguments[0],
            e = arguments[1];
          const s = arguments[2];
          if (
            (q.constructor_.call(this, s),
            null === t && (t = this.getFactory().createLinearRing()),
            null === e && (e = []),
            q.hasNullElements(e))
          )
            throw new n("holes must not contain null elements");
          if (t.isEmpty() && q.hasNonEmptyElements(e))
            throw new n("shell is empty but holes are not");
          (this._shell = t), (this._holes = e);
        }),
          (Mt.serialVersionUID = -0x307ffefd8dc97200);
        class Dt extends pt {
          constructor() {
            super(), Dt.constructor_.apply(this, arguments);
          }
          isValid() {
            return !0;
          }
          equalsExact() {
            if (
              2 === arguments.length &&
              "number" == typeof arguments[1] &&
              arguments[0] instanceof q
            ) {
              const t = arguments[0],
                e = arguments[1];
              return (
                !!this.isEquivalentClass(t) &&
                super.equalsExact.call(this, t, e)
              );
            }
            return super.equalsExact.apply(this, arguments);
          }
          getCoordinate() {
            if (1 === arguments.length && Number.isInteger(arguments[0])) {
              const t = arguments[0];
              return this._geometries[t].getCoordinate();
            }
            return super.getCoordinate.apply(this, arguments);
          }
          getBoundaryDimension() {
            return gt.FALSE;
          }
          getTypeCode() {
            return q.TYPECODE_MULTIPOINT;
          }
          getDimension() {
            return 0;
          }
          getBoundary() {
            return this.getFactory().createGeometryCollection();
          }
          getGeometryType() {
            return q.TYPENAME_MULTIPOINT;
          }
          copy() {
            const t = new Array(this._geometries.length).fill(null);
            for (let e = 0; e < t.length; e++)
              t[e] = this._geometries[e].copy();
            return new Dt(t, this._factory);
          }
          getClass() {
            return Dt;
          }
          get interfaces_() {
            return [Pt];
          }
        }
        (Dt.constructor_ = function () {
          const t = arguments[0],
            e = arguments[1];
          pt.constructor_.call(this, t, e);
        }),
          (Dt.serialVersionUID = -0x6fb1ed4162e0fc00);
        class At extends Rt {
          constructor() {
            super(), At.constructor_.apply(this, arguments);
          }
          getBoundaryDimension() {
            return gt.FALSE;
          }
          isClosed() {
            return !!this.isEmpty() || super.isClosed.call(this);
          }
          getTypeCode() {
            return q.TYPECODE_LINEARRING;
          }
          reverse() {
            const t = this._points.copy();
            return Tt.reverse(t), this.getFactory().createLinearRing(t);
          }
          validateConstruction() {
            if (!this.isEmpty() && !super.isClosed.call(this))
              throw new n(
                "Points of LinearRing do not form a closed linestring"
              );
            if (
              this.getCoordinateSequence().size() >= 1 &&
              this.getCoordinateSequence().size() < At.MINIMUM_VALID_SIZE
            )
              throw new n(
                "Invalid number of points in LinearRing (found " +
                  this.getCoordinateSequence().size() +
                  " - must be 0 or >= 4)"
              );
          }
          getGeometryType() {
            return q.TYPENAME_LINEARRING;
          }
          copy() {
            return new At(this._points.copy(), this._factory);
          }
          getClass() {
            return At;
          }
          get interfaces_() {
            return [];
          }
        }
        (At.constructor_ = function () {
          if (arguments[0] instanceof Array && arguments[1] instanceof Wt) {
            const t = arguments[0],
              e = arguments[1];
            At.constructor_.call(
              this,
              e.getCoordinateSequenceFactory().create(t),
              e
            );
          } else if (_(arguments[0], A) && arguments[1] instanceof Wt) {
            const t = arguments[0],
              e = arguments[1];
            Rt.constructor_.call(this, t, e), this.validateConstruction();
          }
        }),
          (At.MINIMUM_VALID_SIZE = 4),
          (At.serialVersionUID = -0x3b229e262367a600);
        class Ft extends pt {
          constructor() {
            super(), Ft.constructor_.apply(this, arguments);
          }
          equalsExact() {
            if (
              2 === arguments.length &&
              "number" == typeof arguments[1] &&
              arguments[0] instanceof q
            ) {
              const t = arguments[0],
                e = arguments[1];
              return (
                !!this.isEquivalentClass(t) &&
                super.equalsExact.call(this, t, e)
              );
            }
            return super.equalsExact.apply(this, arguments);
          }
          getBoundaryDimension() {
            return 1;
          }
          getTypeCode() {
            return q.TYPECODE_MULTIPOLYGON;
          }
          getDimension() {
            return 2;
          }
          reverse() {
            const t = this._geometries.length,
              e = new Array(t).fill(null);
            for (let n = 0; n < this._geometries.length; n++)
              e[n] = this._geometries[n].reverse();
            return this.getFactory().createMultiPolygon(e);
          }
          getBoundary() {
            if (this.isEmpty())
              return this.getFactory().createMultiLineString();
            const t = new x();
            for (let n = 0; n < this._geometries.length; n++) {
              const e = this._geometries[n].getBoundary();
              for (let n = 0; n < e.getNumGeometries(); n++)
                t.add(e.getGeometryN(n));
            }
            const e = new Array(t.size()).fill(null);
            return this.getFactory().createMultiLineString(t.toArray(e));
          }
          getGeometryType() {
            return q.TYPENAME_MULTIPOLYGON;
          }
          copy() {
            const t = new Array(this._geometries.length).fill(null);
            for (let e = 0; e < t.length; e++)
              t[e] = this._geometries[e].copy();
            return new Ft(t, this._factory);
          }
          getClass() {
            return Ft;
          }
          get interfaces_() {
            return [bt];
          }
        }
        (Ft.constructor_ = function () {
          const t = arguments[0],
            e = arguments[1];
          pt.constructor_.call(this, t, e);
        }),
          (Ft.serialVersionUID = -0x7a5aa1369171980);
        class Gt {
          constructor() {
            Gt.constructor_.apply(this, arguments);
          }
          setCopyUserData(t) {
            this._isUserDataCopied = t;
          }
          edit(t, e) {
            if (null === t) return null;
            const n = this.editInternal(t, e);
            return this._isUserDataCopied && n.setUserData(t.getUserData()), n;
          }
          editInternal(t, e) {
            return (
              null === this._factory && (this._factory = t.getFactory()),
              t instanceof pt
                ? this.editGeometryCollection(t, e)
                : t instanceof Mt
                ? this.editPolygon(t, e)
                : t instanceof vt || t instanceof Rt
                ? e.edit(t, this._factory)
                : (u.shouldNeverReachHere(
                    "Unsupported Geometry class: " + t.getClass().getName()
                  ),
                  null)
            );
          }
          editGeometryCollection(t, e) {
            const n = e.edit(t, this._factory),
              s = new x();
            for (let i = 0; i < n.getNumGeometries(); i++) {
              const t = this.edit(n.getGeometryN(i), e);
              null === t || t.isEmpty() || s.add(t);
            }
            return n.getClass() === Dt
              ? this._factory.createMultiPoint(s.toArray([]))
              : n.getClass() === ft
              ? this._factory.createMultiLineString(s.toArray([]))
              : n.getClass() === Ft
              ? this._factory.createMultiPolygon(s.toArray([]))
              : this._factory.createGeometryCollection(s.toArray([]));
          }
          editPolygon(t, e) {
            let n = e.edit(t, this._factory);
            if (
              (null === n && (n = this._factory.createPolygon()), n.isEmpty())
            )
              return n;
            const s = this.edit(n.getExteriorRing(), e);
            if (null === s || s.isEmpty()) return this._factory.createPolygon();
            const i = new x();
            for (let r = 0; r < n.getNumInteriorRing(); r++) {
              const t = this.edit(n.getInteriorRingN(r), e);
              null === t || t.isEmpty() || i.add(t);
            }
            return this._factory.createPolygon(s, i.toArray([]));
          }
          getClass() {
            return Gt;
          }
          get interfaces_() {
            return [];
          }
        }
        function qt() {}
        Gt.GeometryEditorOperation = qt;
        class Bt {
          constructor() {
            Bt.constructor_.apply(this, arguments);
          }
          edit(t, e) {
            return t;
          }
          getClass() {
            return Bt;
          }
          get interfaces_() {
            return [qt];
          }
        }
        Bt.constructor_ = function () {};
        class Vt {
          constructor() {
            Vt.constructor_.apply(this, arguments);
          }
          edit(t, e) {
            const n = this.edit(t.getCoordinates(), t);
            return t instanceof At
              ? null === n
                ? e.createLinearRing()
                : e.createLinearRing(n)
              : t instanceof Rt
              ? null === n
                ? e.createLineString()
                : e.createLineString(n)
              : t instanceof vt
              ? null === n || 0 === n.length
                ? e.createPoint()
                : e.createPoint(n[0])
              : t;
          }
          getClass() {
            return Vt;
          }
          get interfaces_() {
            return [qt];
          }
        }
        Vt.constructor_ = function () {};
        class zt {
          constructor() {
            zt.constructor_.apply(this, arguments);
          }
          edit(t, e) {
            return t instanceof At
              ? e.createLinearRing(this.edit(t.getCoordinateSequence(), t))
              : t instanceof Rt
              ? e.createLineString(this.edit(t.getCoordinateSequence(), t))
              : t instanceof vt
              ? e.createPoint(this.edit(t.getCoordinateSequence(), t))
              : t;
          }
          getClass() {
            return zt;
          }
          get interfaces_() {
            return [qt];
          }
        }
        (zt.constructor_ = function () {}),
          (Gt.NoOpGeometryOperation = Bt),
          (Gt.CoordinateOperation = Vt),
          (Gt.CoordinateSequenceOperation = zt),
          (Gt.constructor_ = function () {
            if (
              ((this._factory = null),
              (this._isUserDataCopied = !1),
              0 === arguments.length)
            );
            else if (1 === arguments.length) {
              const t = arguments[0];
              this._factory = t;
            }
          });
        class Yt {
          constructor() {
            Yt.constructor_.apply(this, arguments);
          }
          setOrdinate(t, e, s) {
            switch (e) {
              case A.X:
                this._coordinates[t].x = s;
                break;
              case A.Y:
                this._coordinates[t].y = s;
                break;
              case A.Z:
                this._coordinates[t].z = s;
                break;
              default:
                throw new n("invalid ordinateIndex");
            }
          }
          size() {
            return this._coordinates.length;
          }
          getOrdinate(t, e) {
            switch (e) {
              case A.X:
                return this._coordinates[t].x;
              case A.Y:
                return this._coordinates[t].y;
              case A.Z:
                return this._coordinates[t].z;
            }
            return i.NaN;
          }
          getCoordinate() {
            if (1 === arguments.length) {
              const t = arguments[0];
              return this._coordinates[t];
            }
            if (2 === arguments.length) {
              const t = arguments[0],
                e = arguments[1];
              (e.x = this._coordinates[t].x),
                (e.y = this._coordinates[t].y),
                (e.z = this._coordinates[t].z);
            }
          }
          getCoordinateCopy(t) {
            return new g(this._coordinates[t]);
          }
          getDimension() {
            return this._dimension;
          }
          getX(t) {
            return this._coordinates[t].x;
          }
          expandEnvelope(t) {
            for (let e = 0; e < this._coordinates.length; e++)
              t.expandToInclude(this._coordinates[e]);
            return t;
          }
          copy() {
            const t = new Array(this.size()).fill(null);
            for (let e = 0; e < this._coordinates.length; e++)
              t[e] = this._coordinates[e].copy();
            return new Yt(t, this._dimension);
          }
          toString() {
            if (this._coordinates.length > 0) {
              const t = new Lt(17 * this._coordinates.length);
              t.append("("), t.append(this._coordinates[0]);
              for (let e = 1; e < this._coordinates.length; e++)
                t.append(", "), t.append(this._coordinates[e]);
              return t.append(")"), t.toString();
            }
            return "()";
          }
          getY(t) {
            return this._coordinates[t].y;
          }
          toCoordinateArray() {
            return this._coordinates;
          }
          getClass() {
            return Yt;
          }
          get interfaces_() {
            return [A, a];
          }
        }
        (Yt.constructor_ = function () {
          if (
            ((this._dimension = 3),
            (this._coordinates = null),
            1 === arguments.length)
          ) {
            if (arguments[0] instanceof Array) {
              const t = arguments[0];
              Yt.constructor_.call(this, t, 3);
            } else if (Number.isInteger(arguments[0])) {
              const t = arguments[0];
              this._coordinates = new Array(t).fill(null);
              for (let e = 0; e < t; e++) this._coordinates[e] = new g();
            } else if (_(arguments[0], A)) {
              const t = arguments[0];
              if (null === t)
                return (this._coordinates = new Array(0).fill(null)), null;
              (this._dimension = t.getDimension()),
                (this._coordinates = new Array(t.size()).fill(null));
              for (let e = 0; e < this._coordinates.length; e++)
                this._coordinates[e] = t.getCoordinateCopy(e);
            }
          } else if (2 === arguments.length)
            if (
              arguments[0] instanceof Array &&
              Number.isInteger(arguments[1])
            ) {
              const t = arguments[0],
                e = arguments[1];
              (this._coordinates = t),
                (this._dimension = e),
                null === t && (this._coordinates = new Array(0).fill(null));
            } else if (
              Number.isInteger(arguments[0]) &&
              Number.isInteger(arguments[1])
            ) {
              const t = arguments[0],
                e = arguments[1];
              (this._coordinates = new Array(t).fill(null)),
                (this._dimension = e);
              for (let n = 0; n < t; n++) this._coordinates[n] = new g();
            }
        }),
          (Yt.serialVersionUID = -0xcb44a778db18e00);
        class Ut {
          constructor() {
            Ut.constructor_.apply(this, arguments);
          }
          static instance() {
            return Ut.instanceObject;
          }
          readResolve() {
            return Ut.instance();
          }
          create() {
            if (1 === arguments.length) {
              if (arguments[0] instanceof Array) return new Yt(arguments[0]);
              if (_(arguments[0], A)) return new Yt(arguments[0]);
            } else if (2 === arguments.length) {
              const t = arguments[0];
              let e = arguments[1];
              return e > 3 && (e = 3), e < 2 ? new Yt(t) : new Yt(t, e);
            }
          }
          getClass() {
            return Ut;
          }
          get interfaces_() {
            return [F, a];
          }
        }
        function kt() {
          this.map_ = new Map();
        }
        (Ut.constructor_ = function () {}),
          (Ut.serialVersionUID = -0x38e49fa6cf6f2e00),
          (Ut.instanceObject = new Ut()),
          (kt.prototype = new j()),
          (kt.prototype.get = function (t) {
            return this.map_.get(t) || null;
          }),
          (kt.prototype.put = function (t, e) {
            return this.map_.set(t, e), e;
          }),
          (kt.prototype.values = function () {
            const t = new x(),
              e = this.map_.values();
            let n = e.next();
            for (; !n.done; ) t.add(n.value), (n = e.next());
            return t;
          }),
          (kt.prototype.entrySet = function () {
            const t = new J();
            return this.map_.entries().forEach((e) => t.add(e)), t;
          }),
          (kt.prototype.size = function () {
            return this.map_.size();
          });
        class Xt {
          constructor() {
            Xt.constructor_.apply(this, arguments);
          }
          static mostPrecise(t, e) {
            return t.compareTo(e) >= 0 ? t : e;
          }
          equals(t) {
            if (!(t instanceof Xt)) return !1;
            const e = t;
            return this._modelType === e._modelType && this._scale === e._scale;
          }
          compareTo(t) {
            const e = t,
              n = this.getMaximumSignificantDigits(),
              s = e.getMaximumSignificantDigits();
            return new L(n).compareTo(new L(s));
          }
          getScale() {
            return this._scale;
          }
          isFloating() {
            return (
              this._modelType === Xt.FLOATING ||
              this._modelType === Xt.FLOATING_SINGLE
            );
          }
          getType() {
            return this._modelType;
          }
          toString() {
            let t = "UNKNOWN";
            return (
              this._modelType === Xt.FLOATING
                ? (t = "Floating")
                : this._modelType === Xt.FLOATING_SINGLE
                ? (t = "Floating-Single")
                : this._modelType === Xt.FIXED &&
                  (t = "Fixed (Scale=" + this.getScale() + ")"),
              t
            );
          }
          makePrecise() {
            if ("number" == typeof arguments[0]) {
              const t = arguments[0];
              return i.isNaN(t) || this._modelType === Xt.FLOATING_SINGLE
                ? t
                : this._modelType === Xt.FIXED
                ? Math.round(t * this._scale) / this._scale
                : t;
            }
            if (arguments[0] instanceof g) {
              const t = arguments[0];
              if (this._modelType === Xt.FLOATING) return null;
              (t.x = this.makePrecise(t.x)), (t.y = this.makePrecise(t.y));
            }
          }
          getMaximumSignificantDigits() {
            let t = 16;
            return (
              this._modelType === Xt.FLOATING
                ? (t = 16)
                : this._modelType === Xt.FLOATING_SINGLE
                ? (t = 6)
                : this._modelType === Xt.FIXED &&
                  (t =
                    1 +
                    Math.trunc(
                      Math.ceil(Math.log(this.getScale()) / Math.log(10))
                    )),
              t
            );
          }
          setScale(t) {
            this._scale = Math.abs(t);
          }
          getClass() {
            return Xt;
          }
          get interfaces_() {
            return [a, r];
          }
        }
        class Ht {
          constructor() {
            Ht.constructor_.apply(this, arguments);
          }
          readResolve() {
            return Ht.nameToTypeMap.get(this._name);
          }
          toString() {
            return this._name;
          }
          getClass() {
            return Ht;
          }
          get interfaces_() {
            return [a];
          }
        }
        (Ht.constructor_ = function () {
          this._name = null;
          const t = arguments[0];
          (this._name = t), Ht.nameToTypeMap.put(t, this);
        }),
          (Ht.serialVersionUID = -552860263173159e4),
          (Ht.nameToTypeMap = new kt()),
          (Xt.Type = Ht),
          (Xt.constructor_ = function () {
            if (
              ((this._modelType = null),
              (this._scale = null),
              0 === arguments.length)
            )
              this._modelType = Xt.FLOATING;
            else if (1 === arguments.length)
              if (arguments[0] instanceof Ht) {
                const t = arguments[0];
                (this._modelType = t), t === Xt.FIXED && this.setScale(1);
              } else if ("number" == typeof arguments[0]) {
                const t = arguments[0];
                (this._modelType = Xt.FIXED), this.setScale(t);
              } else if (arguments[0] instanceof Xt) {
                const t = arguments[0];
                (this._modelType = t._modelType), (this._scale = t._scale);
              }
          }),
          (Xt.serialVersionUID = 0x6bee6404e9a25c00),
          (Xt.FIXED = new Ht("FIXED")),
          (Xt.FLOATING = new Ht("FLOATING")),
          (Xt.FLOATING_SINGLE = new Ht("FLOATING SINGLE")),
          (Xt.maximumPreciseValue = 9007199254740992);
        class Wt {
          constructor() {
            Wt.constructor_.apply(this, arguments);
          }
          static toMultiPolygonArray(t) {
            const e = new Array(t.size()).fill(null);
            return t.toArray(e);
          }
          static toGeometryArray(t) {
            if (null === t) return null;
            const e = new Array(t.size()).fill(null);
            return t.toArray(e);
          }
          static getDefaultCoordinateSequenceFactory() {
            return Ut.instance();
          }
          static toMultiLineStringArray(t) {
            const e = new Array(t.size()).fill(null);
            return t.toArray(e);
          }
          static toLineStringArray(t) {
            const e = new Array(t.size()).fill(null);
            return t.toArray(e);
          }
          static toMultiPointArray(t) {
            const e = new Array(t.size()).fill(null);
            return t.toArray(e);
          }
          static toLinearRingArray(t) {
            const e = new Array(t.size()).fill(null);
            return t.toArray(e);
          }
          static toPointArray(t) {
            const e = new Array(t.size()).fill(null);
            return t.toArray(e);
          }
          static toPolygonArray(t) {
            const e = new Array(t.size()).fill(null);
            return t.toArray(e);
          }
          static createPointFromInternalCoord(t, e) {
            return (
              e.getPrecisionModel().makePrecise(t),
              e.getFactory().createPoint(t)
            );
          }
          toGeometry(t) {
            return t.isNull()
              ? this.createPoint()
              : t.getMinX() === t.getMaxX() && t.getMinY() === t.getMaxY()
              ? this.createPoint(new g(t.getMinX(), t.getMinY()))
              : t.getMinX() === t.getMaxX() || t.getMinY() === t.getMaxY()
              ? this.createLineString([
                  new g(t.getMinX(), t.getMinY()),
                  new g(t.getMaxX(), t.getMaxY()),
                ])
              : this.createPolygon(
                  this.createLinearRing([
                    new g(t.getMinX(), t.getMinY()),
                    new g(t.getMinX(), t.getMaxY()),
                    new g(t.getMaxX(), t.getMaxY()),
                    new g(t.getMaxX(), t.getMinY()),
                    new g(t.getMinX(), t.getMinY()),
                  ]),
                  null
                );
          }
          createLineString() {
            if (0 === arguments.length)
              return this.createLineString(
                this.getCoordinateSequenceFactory().create([])
              );
            if (1 === arguments.length) {
              if (arguments[0] instanceof Array) {
                const t = arguments[0];
                return this.createLineString(
                  null !== t
                    ? this.getCoordinateSequenceFactory().create(t)
                    : null
                );
              }
              if (_(arguments[0], A)) return new Rt(arguments[0], this);
            }
          }
          createMultiLineString() {
            return 0 === arguments.length
              ? new ft(null, this)
              : 1 === arguments.length
              ? new ft(arguments[0], this)
              : void 0;
          }
          buildGeometry(t) {
            let e = null,
              n = !1,
              s = !1;
            for (let r = t.iterator(); r.hasNext(); ) {
              const t = r.next(),
                i = t.getClass();
              null === e && (e = i),
                i !== e && (n = !0),
                t instanceof pt && (s = !0);
            }
            if (null === e) return this.createGeometryCollection();
            if (n || s)
              return this.createGeometryCollection(Wt.toGeometryArray(t));
            const i = t.iterator().next();
            if (t.size() > 1) {
              if (i instanceof Mt)
                return this.createMultiPolygon(Wt.toPolygonArray(t));
              if (i instanceof Rt)
                return this.createMultiLineString(Wt.toLineStringArray(t));
              if (i instanceof vt)
                return this.createMultiPoint(Wt.toPointArray(t));
              u.shouldNeverReachHere(
                "Unhandled class: " + i.getClass().getName()
              );
            }
            return i;
          }
          createMultiPointFromCoords(t) {
            return this.createMultiPoint(
              null !== t ? this.getCoordinateSequenceFactory().create(t) : null
            );
          }
          createPoint() {
            if (0 === arguments.length)
              return this.createPoint(
                this.getCoordinateSequenceFactory().create([])
              );
            if (1 === arguments.length) {
              if (arguments[0] instanceof g) {
                const t = arguments[0];
                return this.createPoint(
                  null !== t
                    ? this.getCoordinateSequenceFactory().create([t])
                    : null
                );
              }
              if (_(arguments[0], A)) return new vt(arguments[0], this);
            }
          }
          getCoordinateSequenceFactory() {
            return this._coordinateSequenceFactory;
          }
          createPolygon() {
            if (0 === arguments.length) return this.createPolygon(null, null);
            if (1 === arguments.length) {
              if (_(arguments[0], A)) {
                const t = arguments[0];
                return this.createPolygon(this.createLinearRing(t));
              }
              if (arguments[0] instanceof Array) {
                const t = arguments[0];
                return this.createPolygon(this.createLinearRing(t));
              }
              if (arguments[0] instanceof At) {
                const t = arguments[0];
                return this.createPolygon(t, null);
              }
            } else if (2 === arguments.length)
              return new Mt(arguments[0], arguments[1], this);
          }
          getSRID() {
            return this._SRID;
          }
          createGeometryCollection() {
            return 0 === arguments.length
              ? new pt(null, this)
              : 1 === arguments.length
              ? new pt(arguments[0], this)
              : void 0;
          }
          createGeometry(t) {
            return new Gt(this).edit(
              t,
              new jt(this._coordinateSequenceFactory)
            );
          }
          getPrecisionModel() {
            return this._precisionModel;
          }
          createLinearRing() {
            if (0 === arguments.length)
              return this.createLinearRing(
                this.getCoordinateSequenceFactory().create([])
              );
            if (1 === arguments.length) {
              if (arguments[0] instanceof Array) {
                const t = arguments[0];
                return this.createLinearRing(
                  null !== t
                    ? this.getCoordinateSequenceFactory().create(t)
                    : null
                );
              }
              if (_(arguments[0], A)) return new At(arguments[0], this);
            }
          }
          createMultiPolygon() {
            return 0 === arguments.length
              ? new Ft(null, this)
              : 1 === arguments.length
              ? new Ft(arguments[0], this)
              : void 0;
          }
          createMultiPoint() {
            if (0 === arguments.length) return new Dt(null, this);
            if (1 === arguments.length) {
              if (arguments[0] instanceof Array)
                return new Dt(arguments[0], this);
              if (_(arguments[0], A)) {
                const t = arguments[0];
                if (null === t)
                  return this.createMultiPoint(new Array(0).fill(null));
                const e = new Array(t.size()).fill(null);
                for (let n = 0; n < t.size(); n++) {
                  const s = this.getCoordinateSequenceFactory().create(
                    1,
                    t.getDimension()
                  );
                  Tt.copy(t, n, s, 0, 1), (e[n] = this.createPoint(s));
                }
                return this.createMultiPoint(e);
              }
            }
          }
          getClass() {
            return Wt;
          }
          get interfaces_() {
            return [a];
          }
        }
        class jt extends Gt.CoordinateSequenceOperation {
          constructor() {
            super(), jt.constructor_.apply(this, arguments);
          }
          edit() {
            if (
              2 === arguments.length &&
              arguments[1] instanceof q &&
              _(arguments[0], A)
            ) {
              const t = arguments[0];
              return this.coordinateSequenceFactory.create(t);
            }
            return super.edit.apply(this, arguments);
          }
          getClass() {
            return jt;
          }
          get interfaces_() {
            return [];
          }
        }
        (jt.constructor_ = function () {
          this.coordinateSequenceFactory = null;
          const t = arguments[0];
          this.coordinateSequenceFactory = t;
        }),
          (Wt.CloneOp = jt),
          (Wt.constructor_ = function () {
            if (
              ((this._precisionModel = null),
              (this._coordinateSequenceFactory = null),
              (this._SRID = null),
              0 === arguments.length)
            )
              Wt.constructor_.call(this, new Xt(), 0);
            else if (1 === arguments.length) {
              if (_(arguments[0], F)) {
                const t = arguments[0];
                Wt.constructor_.call(this, new Xt(), 0, t);
              } else if (arguments[0] instanceof Xt) {
                const t = arguments[0];
                Wt.constructor_.call(
                  this,
                  t,
                  0,
                  Wt.getDefaultCoordinateSequenceFactory()
                );
              }
            } else if (2 === arguments.length) {
              const t = arguments[0],
                e = arguments[1];
              Wt.constructor_.call(
                this,
                t,
                e,
                Wt.getDefaultCoordinateSequenceFactory()
              );
            } else if (3 === arguments.length) {
              const t = arguments[0],
                e = arguments[1],
                n = arguments[2];
              (this._precisionModel = t),
                (this._coordinateSequenceFactory = n),
                (this._SRID = e);
            }
          }),
          (Wt.serialVersionUID = -0x5ea75f2051eeb400);
        const Kt = {
          typeStr: /^\s*(\w+)\s*\(\s*(.*)\s*\)\s*$/,
          emptyTypeStr: /^\s*(\w+)\s*EMPTY\s*$/,
          spaces: /\s+/,
          parenComma: /\)\s*,\s*\(/,
          doubleParenComma: /\)\s*\)\s*,\s*\(\s*\(/,
          trimParens: /^\s*\(?(.*?)\)?\s*$/,
        };
        class Zt {
          constructor(t) {
            (this.geometryFactory = t || new Wt()),
              (this.precisionModel = this.geometryFactory.getPrecisionModel());
          }
          read(t) {
            var e, n, s;
            t = t.replace(/[\n\r]/g, " ");
            var i = Kt.typeStr.exec(t);
            if (
              (-1 !== t.search("EMPTY") &&
                ((i = Kt.emptyTypeStr.exec(t))[2] = void 0),
              i &&
                ((n = i[1].toLowerCase()),
                (s = i[2]),
                Jt[n] && (e = Jt[n].call(this, s))),
              void 0 === e)
            )
              throw new Error("Could not parse WKT " + t);
            return e;
          }
          write(t) {
            return this.extractGeometry(t);
          }
          extractGeometry(t) {
            var e = t.getGeometryType().toLowerCase();
            if (!Qt[e]) return null;
            var n = e.toUpperCase();
            return t.isEmpty()
              ? n + " EMPTY"
              : n + "(" + Qt[e].call(this, t) + ")";
          }
        }
        const Qt = {
            coordinate(t) {
              return this.precisionModel.makePrecise(t), t.x + " " + t.y;
            },
            point(t) {
              return Qt.coordinate.call(this, t._coordinates._coordinates[0]);
            },
            multipoint(t) {
              var e = [];
              for (let n = 0, s = t._geometries.length; n < s; ++n)
                e.push("(" + Qt.point.call(this, t._geometries[n]) + ")");
              return e.join(",");
            },
            linestring(t) {
              var e = [];
              for (let n = 0, s = t._points._coordinates.length; n < s; ++n)
                e.push(Qt.coordinate.call(this, t._points._coordinates[n]));
              return e.join(",");
            },
            linearring(t) {
              var e = [];
              for (let n = 0, s = t._points._coordinates.length; n < s; ++n)
                e.push(Qt.coordinate.call(this, t._points._coordinates[n]));
              return e.join(",");
            },
            multilinestring(t) {
              var e = [];
              for (let n = 0, s = t._geometries.length; n < s; ++n)
                e.push("(" + Qt.linestring.call(this, t._geometries[n]) + ")");
              return e.join(",");
            },
            polygon(t) {
              var e = [];
              e.push("(" + Qt.linestring.call(this, t._shell) + ")");
              for (let n = 0, s = t._holes.length; n < s; ++n)
                e.push("(" + Qt.linestring.call(this, t._holes[n]) + ")");
              return e.join(",");
            },
            multipolygon(t) {
              var e = [];
              for (let n = 0, s = t._geometries.length; n < s; ++n)
                e.push("(" + Qt.polygon.call(this, t._geometries[n]) + ")");
              return e.join(",");
            },
            geometrycollection(t) {
              var e = [];
              for (let n = 0, s = t._geometries.length; n < s; ++n)
                e.push(this.extractGeometry(t._geometries[n]));
              return e.join(",");
            },
          },
          Jt = {
            coord(t) {
              var e = t.trim().split(Kt.spaces),
                n = new g(Number.parseFloat(e[0]), Number.parseFloat(e[1]));
              return this.precisionModel.makePrecise(n), n;
            },
            point(t) {
              return void 0 === t
                ? this.geometryFactory.createPoint()
                : this.geometryFactory.createPoint(Jt.coord.call(this, t));
            },
            multipoint(t) {
              if (void 0 === t) return this.geometryFactory.createMultiPoint();
              var e,
                n = t.trim().split(","),
                s = [];
              for (let i = 0, r = n.length; i < r; ++i)
                (e = n[i].replace(Kt.trimParens, "$1")),
                  s.push(Jt.point.call(this, e));
              return this.geometryFactory.createMultiPoint(s);
            },
            linestring(t) {
              if (void 0 === t) return this.geometryFactory.createLineString();
              var e = t.trim().split(","),
                n = [];
              for (let s = 0, i = e.length; s < i; ++s)
                n.push(Jt.coord.call(this, e[s]));
              return this.geometryFactory.createLineString(n);
            },
            linearring(t) {
              if (void 0 === t) return this.geometryFactory.createLinearRing();
              var e = t.trim().split(","),
                n = [];
              for (let s = 0, i = e.length; s < i; ++s)
                n.push(Jt.coord.call(this, e[s]));
              return this.geometryFactory.createLinearRing(n);
            },
            multilinestring(t) {
              if (void 0 === t)
                return this.geometryFactory.createMultiLineString();
              var e,
                n = t.trim().split(Kt.parenComma),
                s = [];
              for (let i = 0, r = n.length; i < r; ++i)
                (e = n[i].replace(Kt.trimParens, "$1")),
                  s.push(Jt.linestring.call(this, e));
              return this.geometryFactory.createMultiLineString(s);
            },
            polygon(t) {
              if (void 0 === t) return this.geometryFactory.createPolygon();
              var e,
                n,
                s,
                i,
                r = t.trim().split(Kt.parenComma),
                o = [];
              for (let l = 0, a = r.length; l < a; ++l)
                (e = r[l].replace(Kt.trimParens, "$1")),
                  (n = Jt.linestring.call(this, e)),
                  (s = this.geometryFactory.createLinearRing(n._points)),
                  0 === l ? (i = s) : o.push(s);
              return this.geometryFactory.createPolygon(i, o);
            },
            multipolygon(t) {
              if (void 0 === t)
                return this.geometryFactory.createMultiPolygon();
              var e,
                n = t.trim().split(Kt.doubleParenComma),
                s = [];
              for (let i = 0, r = n.length; i < r; ++i)
                (e = n[i].replace(Kt.trimParens, "$1")),
                  s.push(Jt.polygon.call(this, e));
              return this.geometryFactory.createMultiPolygon(s);
            },
            geometrycollection(t) {
              if (void 0 === t)
                return this.geometryFactory.createGeometryCollection();
              var e = (t = t.replace(/,\s*([A-Za-z])/g, "|$1"))
                  .trim()
                  .split("|"),
                n = [];
              for (let s = 0, i = e.length; s < i; ++s) n.push(this.read(e[s]));
              return this.geometryFactory.createGeometryCollection(n);
            },
          };
        class $t {
          constructor(t) {
            this.parser = new Zt(t);
          }
          write(t) {
            return this.parser.write(t);
          }
          static toLineString(t, e) {
            if (2 !== arguments.length) throw new Error("Not implemented");
            return (
              "LINESTRING ( " + t.x + " " + t.y + ", " + e.x + " " + e.y + " )"
            );
          }
        }
        class te {
          constructor() {
            te.constructor_.apply(this, arguments);
          }
          static computeEdgeDistance(t, e, n) {
            const s = Math.abs(n.x - e.x),
              i = Math.abs(n.y - e.y);
            let r = -1;
            if (t.equals(e)) r = 0;
            else if (t.equals(n)) r = s > i ? s : i;
            else {
              const n = Math.abs(t.x - e.x),
                o = Math.abs(t.y - e.y);
              0 !== (r = s > i ? n : o) || t.equals(e) || (r = Math.max(n, o));
            }
            return (
              u.isTrue(!(0 === r && !t.equals(e)), "Bad distance calculation"),
              r
            );
          }
          static nonRobustComputeEdgeDistance(t, e, n) {
            const s = t.x - e.x,
              i = t.y - e.y,
              r = Math.sqrt(s * s + i * i);
            return (
              u.isTrue(
                !(0 === r && !t.equals(e)),
                "Invalid distance calculation"
              ),
              r
            );
          }
          getIndexAlongSegment(t, e) {
            return this.computeIntLineIndex(), this._intLineIndex[t][e];
          }
          getTopologySummary() {
            const t = new Lt();
            return (
              this.isEndPoint() && t.append(" endpoint"),
              this._isProper && t.append(" proper"),
              this.isCollinear() && t.append(" collinear"),
              t.toString()
            );
          }
          computeIntersection(t, e, n, s) {
            (this._inputLines[0][0] = t),
              (this._inputLines[0][1] = e),
              (this._inputLines[1][0] = n),
              (this._inputLines[1][1] = s),
              (this._result = this.computeIntersect(t, e, n, s));
          }
          getIntersectionNum() {
            return this._result;
          }
          computeIntLineIndex() {
            if (0 === arguments.length)
              null === this._intLineIndex &&
                ((this._intLineIndex = Array(2)
                  .fill()
                  .map(() => Array(2))),
                this.computeIntLineIndex(0),
                this.computeIntLineIndex(1));
            else if (1 === arguments.length) {
              const t = arguments[0];
              this.getEdgeDistance(t, 0) > this.getEdgeDistance(t, 1)
                ? ((this._intLineIndex[t][0] = 0),
                  (this._intLineIndex[t][1] = 1))
                : ((this._intLineIndex[t][0] = 1),
                  (this._intLineIndex[t][1] = 0));
            }
          }
          isProper() {
            return this.hasIntersection() && this._isProper;
          }
          setPrecisionModel(t) {
            this._precisionModel = t;
          }
          isInteriorIntersection() {
            if (0 === arguments.length)
              return (
                !!this.isInteriorIntersection(0) ||
                !!this.isInteriorIntersection(1)
              );
            if (1 === arguments.length) {
              const t = arguments[0];
              for (let e = 0; e < this._result; e++)
                if (
                  !this._intPt[e].equals2D(this._inputLines[t][0]) &&
                  !this._intPt[e].equals2D(this._inputLines[t][1])
                )
                  return !0;
              return !1;
            }
          }
          getIntersection(t) {
            return this._intPt[t];
          }
          isEndPoint() {
            return this.hasIntersection() && !this._isProper;
          }
          hasIntersection() {
            return this._result !== te.NO_INTERSECTION;
          }
          getEdgeDistance(t, e) {
            return te.computeEdgeDistance(
              this._intPt[e],
              this._inputLines[t][0],
              this._inputLines[t][1]
            );
          }
          isCollinear() {
            return this._result === te.COLLINEAR_INTERSECTION;
          }
          toString() {
            return (
              $t.toLineString(this._inputLines[0][0], this._inputLines[0][1]) +
              " - " +
              $t.toLineString(this._inputLines[1][0], this._inputLines[1][1]) +
              this.getTopologySummary()
            );
          }
          getEndpoint(t, e) {
            return this._inputLines[t][e];
          }
          isIntersection(t) {
            for (let e = 0; e < this._result; e++)
              if (this._intPt[e].equals2D(t)) return !0;
            return !1;
          }
          getIntersectionAlongSegment(t, e) {
            return (
              this.computeIntLineIndex(), this._intPt[this._intLineIndex[t][e]]
            );
          }
          getClass() {
            return te;
          }
          get interfaces_() {
            return [];
          }
        }
        (te.constructor_ = function () {
          (this._result = null),
            (this._inputLines = Array(2)
              .fill()
              .map(() => Array(2))),
            (this._intPt = new Array(2).fill(null)),
            (this._intLineIndex = null),
            (this._isProper = null),
            (this._pa = null),
            (this._pb = null),
            (this._precisionModel = null),
            (this._intPt[0] = new g()),
            (this._intPt[1] = new g()),
            (this._pa = this._intPt[0]),
            (this._pb = this._intPt[1]),
            (this._result = 0);
        }),
          (te.DONT_INTERSECT = 0),
          (te.DO_INTERSECT = 1),
          (te.COLLINEAR = 2),
          (te.NO_INTERSECTION = 0),
          (te.POINT_INTERSECTION = 1),
          (te.COLLINEAR_INTERSECTION = 2);
        class ee extends te {
          constructor() {
            super(), ee.constructor_.apply(this, arguments);
          }
          static nearestEndpoint(t, e, n, s) {
            let i = t,
              r = D.pointToSegment(t, n, s),
              o = D.pointToSegment(e, n, s);
            return (
              o < r && ((r = o), (i = e)),
              (o = D.pointToSegment(n, t, e)) < r && ((r = o), (i = n)),
              (o = D.pointToSegment(s, t, e)) < r && ((r = o), (i = s)),
              i
            );
          }
          isInSegmentEnvelopes(t) {
            const e = new N(this._inputLines[0][0], this._inputLines[0][1]),
              n = new N(this._inputLines[1][0], this._inputLines[1][1]);
            return e.contains(t) && n.contains(t);
          }
          computeIntersection() {
            if (3 !== arguments.length)
              return super.computeIntersection.apply(this, arguments);
            {
              const t = arguments[0],
                e = arguments[1],
                n = arguments[2];
              if (
                ((this._isProper = !1),
                N.intersects(e, n, t) &&
                  0 === v.index(e, n, t) &&
                  0 === v.index(n, e, t))
              )
                return (
                  (this._isProper = !0),
                  (t.equals(e) || t.equals(n)) && (this._isProper = !1),
                  (this._result = te.POINT_INTERSECTION),
                  null
                );
              this._result = te.NO_INTERSECTION;
            }
          }
          normalizeToMinimum(t, e, n, s, i) {
            (i.x = this.smallestInAbsValue(t.x, e.x, n.x, s.x)),
              (i.y = this.smallestInAbsValue(t.y, e.y, n.y, s.y)),
              (t.x -= i.x),
              (t.y -= i.y),
              (e.x -= i.x),
              (e.y -= i.y),
              (n.x -= i.x),
              (n.y -= i.y),
              (s.x -= i.x),
              (s.y -= i.y);
          }
          safeHCoordinateIntersection(t, e, n, s) {
            let i = null;
            try {
              i = b.intersection(t, e, n, s);
            } catch (r) {
              if (!(r instanceof S)) throw r;
              i = ee.nearestEndpoint(t, e, n, s);
            }
            return i;
          }
          intersection(t, e, n, s) {
            let i = this.intersectionWithNormalization(t, e, n, s);
            return (
              this.isInSegmentEnvelopes(i) ||
                (i = new g(ee.nearestEndpoint(t, e, n, s))),
              null !== this._precisionModel &&
                this._precisionModel.makePrecise(i),
              i
            );
          }
          smallestInAbsValue(t, e, n, s) {
            let i = t,
              r = Math.abs(i);
            return (
              Math.abs(e) < r && ((i = e), (r = Math.abs(e))),
              Math.abs(n) < r && ((i = n), (r = Math.abs(n))),
              Math.abs(s) < r && (i = s),
              i
            );
          }
          checkDD(t, e, n, s, i) {
            const r = P.intersection(t, e, n, s),
              o = this.isInSegmentEnvelopes(r);
            O.out.println("DD in env = " + o + "  --------------------- " + r),
              i.distance(r) > 1e-4 &&
                O.out.println("Distance = " + i.distance(r));
          }
          intersectionWithNormalization(t, e, n, s) {
            const i = new g(t),
              r = new g(e),
              o = new g(n),
              l = new g(s),
              a = new g();
            this.normalizeToEnvCentre(i, r, o, l, a);
            const c = this.safeHCoordinateIntersection(i, r, o, l);
            return (c.x += a.x), (c.y += a.y), c;
          }
          computeCollinearIntersection(t, e, n, s) {
            const i = N.intersects(t, e, n),
              r = N.intersects(t, e, s),
              o = N.intersects(n, s, t),
              l = N.intersects(n, s, e);
            return i && r
              ? ((this._intPt[0] = n),
                (this._intPt[1] = s),
                te.COLLINEAR_INTERSECTION)
              : o && l
              ? ((this._intPt[0] = t),
                (this._intPt[1] = e),
                te.COLLINEAR_INTERSECTION)
              : i && o
              ? ((this._intPt[0] = n),
                (this._intPt[1] = t),
                !n.equals(t) || r || l
                  ? te.COLLINEAR_INTERSECTION
                  : te.POINT_INTERSECTION)
              : i && l
              ? ((this._intPt[0] = n),
                (this._intPt[1] = e),
                !n.equals(e) || r || o
                  ? te.COLLINEAR_INTERSECTION
                  : te.POINT_INTERSECTION)
              : r && o
              ? ((this._intPt[0] = s),
                (this._intPt[1] = t),
                !s.equals(t) || i || l
                  ? te.COLLINEAR_INTERSECTION
                  : te.POINT_INTERSECTION)
              : r && l
              ? ((this._intPt[0] = s),
                (this._intPt[1] = e),
                !s.equals(e) || i || o
                  ? te.COLLINEAR_INTERSECTION
                  : te.POINT_INTERSECTION)
              : te.NO_INTERSECTION;
          }
          normalizeToEnvCentre(t, e, n, s, i) {
            const r = t.x < e.x ? t.x : e.x,
              o = t.y < e.y ? t.y : e.y,
              l = t.x > e.x ? t.x : e.x,
              a = t.y > e.y ? t.y : e.y,
              c = n.x < s.x ? n.x : s.x,
              h = n.y < s.y ? n.y : s.y,
              u = n.x > s.x ? n.x : s.x,
              g = n.y > s.y ? n.y : s.y,
              d = ((r > c ? r : c) + (l < u ? l : u)) / 2,
              _ = ((o > h ? o : h) + (a < g ? a : g)) / 2;
            (i.x = d),
              (i.y = _),
              (t.x -= i.x),
              (t.y -= i.y),
              (e.x -= i.x),
              (e.y -= i.y),
              (n.x -= i.x),
              (n.y -= i.y),
              (s.x -= i.x),
              (s.y -= i.y);
          }
          computeIntersect(t, e, n, s) {
            if (((this._isProper = !1), !N.intersects(t, e, n, s)))
              return te.NO_INTERSECTION;
            const i = v.index(t, e, n),
              r = v.index(t, e, s);
            if ((i > 0 && r > 0) || (i < 0 && r < 0)) return te.NO_INTERSECTION;
            const o = v.index(n, s, t),
              l = v.index(n, s, e);
            return (o > 0 && l > 0) || (o < 0 && l < 0)
              ? te.NO_INTERSECTION
              : 0 === i && 0 === r && 0 === o && 0 === l
              ? this.computeCollinearIntersection(t, e, n, s)
              : (0 === i || 0 === r || 0 === o || 0 === l
                  ? ((this._isProper = !1),
                    t.equals2D(n) || t.equals2D(s)
                      ? (this._intPt[0] = t)
                      : e.equals2D(n) || e.equals2D(s)
                      ? (this._intPt[0] = e)
                      : 0 === i
                      ? (this._intPt[0] = new g(n))
                      : 0 === r
                      ? (this._intPt[0] = new g(s))
                      : 0 === o
                      ? (this._intPt[0] = new g(t))
                      : 0 === l && (this._intPt[0] = new g(e)))
                  : ((this._isProper = !0),
                    (this._intPt[0] = this.intersection(t, e, n, s))),
                te.POINT_INTERSECTION);
          }
          getClass() {
            return ee;
          }
          get interfaces_() {
            return [];
          }
        }
        ee.constructor_ = function () {};
        class ne {
          constructor() {
            ne.constructor_.apply(this, arguments);
          }
          static midPoint(t, e) {
            return new g((t.x + e.x) / 2, (t.y + e.y) / 2);
          }
          minX() {
            return Math.min(this.p0.x, this.p1.x);
          }
          orientationIndex() {
            if (arguments[0] instanceof ne) {
              const t = arguments[0],
                e = v.index(this.p0, this.p1, t.p0),
                n = v.index(this.p0, this.p1, t.p1);
              return (e >= 0 && n >= 0) || (e <= 0 && n <= 0)
                ? Math.max(e, n)
                : 0;
            }
            if (arguments[0] instanceof g) {
              const t = arguments[0];
              return v.index(this.p0, this.p1, t);
            }
          }
          toGeometry(t) {
            return t.createLineString([this.p0, this.p1]);
          }
          isVertical() {
            return this.p0.x === this.p1.x;
          }
          equals(t) {
            if (!(t instanceof ne)) return !1;
            const e = t;
            return this.p0.equals(e.p0) && this.p1.equals(e.p1);
          }
          intersection(t) {
            const e = new ee();
            return (
              e.computeIntersection(this.p0, this.p1, t.p0, t.p1),
              e.hasIntersection() ? e.getIntersection(0) : null
            );
          }
          project() {
            if (arguments[0] instanceof g) {
              const t = arguments[0];
              if (t.equals(this.p0) || t.equals(this.p1)) return new g(t);
              const e = this.projectionFactor(t),
                n = new g();
              return (
                (n.x = this.p0.x + e * (this.p1.x - this.p0.x)),
                (n.y = this.p0.y + e * (this.p1.y - this.p0.y)),
                n
              );
            }
            if (arguments[0] instanceof ne) {
              const t = arguments[0],
                e = this.projectionFactor(t.p0),
                n = this.projectionFactor(t.p1);
              if (e >= 1 && n >= 1) return null;
              if (e <= 0 && n <= 0) return null;
              let s = this.project(t.p0);
              e < 0 && (s = this.p0), e > 1 && (s = this.p1);
              let i = this.project(t.p1);
              return (
                n < 0 && (i = this.p0), n > 1 && (i = this.p1), new ne(s, i)
              );
            }
          }
          normalize() {
            this.p1.compareTo(this.p0) < 0 && this.reverse();
          }
          angle() {
            return Math.atan2(this.p1.y - this.p0.y, this.p1.x - this.p0.x);
          }
          getCoordinate(t) {
            return 0 === t ? this.p0 : this.p1;
          }
          distancePerpendicular(t) {
            return D.pointToLinePerpendicular(t, this.p0, this.p1);
          }
          minY() {
            return Math.min(this.p0.y, this.p1.y);
          }
          midPoint() {
            return ne.midPoint(this.p0, this.p1);
          }
          projectionFactor(t) {
            if (t.equals(this.p0)) return 0;
            if (t.equals(this.p1)) return 1;
            const e = this.p1.x - this.p0.x,
              n = this.p1.y - this.p0.y,
              s = e * e + n * n;
            return s <= 0
              ? i.NaN
              : ((t.x - this.p0.x) * e + (t.y - this.p0.y) * n) / s;
          }
          closestPoints(t) {
            const e = this.intersection(t);
            if (null !== e) return [e, e];
            const n = new Array(2).fill(null);
            let s = i.MAX_VALUE,
              r = null;
            const o = this.closestPoint(t.p0);
            (s = o.distance(t.p0)), (n[0] = o), (n[1] = t.p0);
            const l = this.closestPoint(t.p1);
            (r = l.distance(t.p1)) < s && ((s = r), (n[0] = l), (n[1] = t.p1));
            const a = t.closestPoint(this.p0);
            (r = a.distance(this.p0)) < s &&
              ((s = r), (n[0] = this.p0), (n[1] = a));
            const c = t.closestPoint(this.p1);
            return (
              (r = c.distance(this.p1)) < s &&
                ((s = r), (n[0] = this.p1), (n[1] = c)),
              n
            );
          }
          closestPoint(t) {
            const e = this.projectionFactor(t);
            return e > 0 && e < 1
              ? this.project(t)
              : this.p0.distance(t) < this.p1.distance(t)
              ? this.p0
              : this.p1;
          }
          maxX() {
            return Math.max(this.p0.x, this.p1.x);
          }
          getLength() {
            return this.p0.distance(this.p1);
          }
          compareTo(t) {
            const e = t,
              n = this.p0.compareTo(e.p0);
            return 0 !== n ? n : this.p1.compareTo(e.p1);
          }
          reverse() {
            const t = this.p0;
            (this.p0 = this.p1), (this.p1 = t);
          }
          equalsTopo(t) {
            return (
              (this.p0.equals(t.p0) && this.p1.equals(t.p1)) ||
              (this.p0.equals(t.p1) && this.p1.equals(t.p0))
            );
          }
          lineIntersection(t) {
            try {
              return b.intersection(this.p0, this.p1, t.p0, t.p1);
            } catch (t) {
              if (!(t instanceof S)) throw t;
            }
            return null;
          }
          maxY() {
            return Math.max(this.p0.y, this.p1.y);
          }
          pointAlongOffset(t, e) {
            const n = this.p0.x + t * (this.p1.x - this.p0.x),
              s = this.p0.y + t * (this.p1.y - this.p0.y),
              i = this.p1.x - this.p0.x,
              r = this.p1.y - this.p0.y,
              o = Math.sqrt(i * i + r * r);
            let l = 0,
              a = 0;
            if (0 !== e) {
              if (o <= 0)
                throw new IllegalStateException(
                  "Cannot compute offset from zero-length line segment"
                );
              (l = (e * i) / o), (a = (e * r) / o);
            }
            return new g(n - a, s + l);
          }
          setCoordinates() {
            if (1 === arguments.length) {
              const t = arguments[0];
              this.setCoordinates(t.p0, t.p1);
            } else if (2 === arguments.length) {
              const t = arguments[0],
                e = arguments[1];
              (this.p0.x = t.x),
                (this.p0.y = t.y),
                (this.p1.x = e.x),
                (this.p1.y = e.y);
            }
          }
          segmentFraction(t) {
            let e = this.projectionFactor(t);
            return e < 0 ? (e = 0) : (e > 1 || i.isNaN(e)) && (e = 1), e;
          }
          toString() {
            return (
              "LINESTRING( " +
              this.p0.x +
              " " +
              this.p0.y +
              ", " +
              this.p1.x +
              " " +
              this.p1.y +
              ")"
            );
          }
          isHorizontal() {
            return this.p0.y === this.p1.y;
          }
          distance() {
            if (arguments[0] instanceof ne) {
              const t = arguments[0];
              return D.segmentToSegment(this.p0, this.p1, t.p0, t.p1);
            }
            if (arguments[0] instanceof g) {
              const t = arguments[0];
              return D.pointToSegment(t, this.p0, this.p1);
            }
          }
          pointAlong(t) {
            const e = new g();
            return (
              (e.x = this.p0.x + t * (this.p1.x - this.p0.x)),
              (e.y = this.p0.y + t * (this.p1.y - this.p0.y)),
              e
            );
          }
          hashCode() {
            let t = java.lang.Double.doubleToLongBits(this.p0.x);
            t ^= 31 * java.lang.Double.doubleToLongBits(this.p0.y);
            const e = Math.trunc(t) ^ Math.trunc(t >> 32);
            let n = java.lang.Double.doubleToLongBits(this.p1.x);
            return (
              (n ^= 31 * java.lang.Double.doubleToLongBits(this.p1.y)),
              e ^ Math.trunc(n) ^ Math.trunc(n >> 32)
            );
          }
          getClass() {
            return ne;
          }
          get interfaces_() {
            return [r, a];
          }
        }
        (ne.constructor_ = function () {
          if (((this.p0 = null), (this.p1 = null), 0 === arguments.length))
            ne.constructor_.call(this, new g(), new g());
          else if (1 === arguments.length) {
            const t = arguments[0];
            ne.constructor_.call(this, t.p0, t.p1);
          } else if (2 === arguments.length) {
            const t = arguments[0],
              e = arguments[1];
            (this.p0 = t), (this.p1 = e);
          } else if (4 === arguments.length) {
            const t = arguments[0],
              e = arguments[1],
              n = arguments[2],
              s = arguments[3];
            ne.constructor_.call(this, new g(t, e), new g(n, s));
          }
        }),
          (ne.serialVersionUID = 0x2d2172135f411c00);
        class se {
          constructor() {
            se.constructor_.apply(this, arguments);
          }
          static toLocationSymbol(t) {
            switch (t) {
              case se.EXTERIOR:
                return "e";
              case se.BOUNDARY:
                return "b";
              case se.INTERIOR:
                return "i";
              case se.NONE:
                return "-";
            }
            throw new n("Unknown location value: " + t);
          }
          getClass() {
            return se;
          }
          get interfaces_() {
            return [];
          }
        }
        (se.constructor_ = function () {}),
          (se.INTERIOR = 0),
          (se.BOUNDARY = 1),
          (se.EXTERIOR = 2),
          (se.NONE = -1);
        class ie {
          constructor() {
            ie.constructor_.apply(this, arguments);
          }
          static matches() {
            if (
              Number.isInteger(arguments[0]) &&
              "string" == typeof arguments[1]
            ) {
              const t = arguments[0],
                e = arguments[1];
              return (
                e === gt.SYM_DONTCARE ||
                (e === gt.SYM_TRUE && (t >= 0 || t === gt.TRUE)) ||
                (e === gt.SYM_FALSE && t === gt.FALSE) ||
                (e === gt.SYM_P && t === gt.P) ||
                (e === gt.SYM_L && t === gt.L) ||
                (e === gt.SYM_A && t === gt.A)
              );
            }
            if (
              "string" == typeof arguments[0] &&
              "string" == typeof arguments[1]
            ) {
              const t = arguments[1];
              return new ie(arguments[0]).matches(t);
            }
          }
          static isTrue(t) {
            return t >= 0 || t === gt.TRUE;
          }
          isIntersects() {
            return !this.isDisjoint();
          }
          isCovers() {
            return (
              (ie.isTrue(this._matrix[se.INTERIOR][se.INTERIOR]) ||
                ie.isTrue(this._matrix[se.INTERIOR][se.BOUNDARY]) ||
                ie.isTrue(this._matrix[se.BOUNDARY][se.INTERIOR]) ||
                ie.isTrue(this._matrix[se.BOUNDARY][se.BOUNDARY])) &&
              this._matrix[se.EXTERIOR][se.INTERIOR] === gt.FALSE &&
              this._matrix[se.EXTERIOR][se.BOUNDARY] === gt.FALSE
            );
          }
          isCoveredBy() {
            return (
              (ie.isTrue(this._matrix[se.INTERIOR][se.INTERIOR]) ||
                ie.isTrue(this._matrix[se.INTERIOR][se.BOUNDARY]) ||
                ie.isTrue(this._matrix[se.BOUNDARY][se.INTERIOR]) ||
                ie.isTrue(this._matrix[se.BOUNDARY][se.BOUNDARY])) &&
              this._matrix[se.INTERIOR][se.EXTERIOR] === gt.FALSE &&
              this._matrix[se.BOUNDARY][se.EXTERIOR] === gt.FALSE
            );
          }
          set() {
            if (1 === arguments.length) {
              const t = arguments[0];
              for (let e = 0; e < t.length; e++) {
                const n = Math.trunc(e / 3),
                  s = e % 3;
                this._matrix[n][s] = gt.toDimensionValue(t.charAt(e));
              }
            } else if (3 === arguments.length) {
              const t = arguments[0],
                e = arguments[1],
                n = arguments[2];
              this._matrix[t][e] = n;
            }
          }
          isContains() {
            return (
              ie.isTrue(this._matrix[se.INTERIOR][se.INTERIOR]) &&
              this._matrix[se.EXTERIOR][se.INTERIOR] === gt.FALSE &&
              this._matrix[se.EXTERIOR][se.BOUNDARY] === gt.FALSE
            );
          }
          setAtLeast() {
            if (1 === arguments.length) {
              const t = arguments[0];
              for (let e = 0; e < t.length; e++) {
                const n = Math.trunc(e / 3),
                  s = e % 3;
                this.setAtLeast(n, s, gt.toDimensionValue(t.charAt(e)));
              }
            } else if (3 === arguments.length) {
              const t = arguments[0],
                e = arguments[1],
                n = arguments[2];
              this._matrix[t][e] < n && (this._matrix[t][e] = n);
            }
          }
          setAtLeastIfValid(t, e, n) {
            t >= 0 && e >= 0 && this.setAtLeast(t, e, n);
          }
          isWithin() {
            return (
              ie.isTrue(this._matrix[se.INTERIOR][se.INTERIOR]) &&
              this._matrix[se.INTERIOR][se.EXTERIOR] === gt.FALSE &&
              this._matrix[se.BOUNDARY][se.EXTERIOR] === gt.FALSE
            );
          }
          isTouches(t, e) {
            return t > e
              ? this.isTouches(e, t)
              : ((t === gt.A && e === gt.A) ||
                  (t === gt.L && e === gt.L) ||
                  (t === gt.L && e === gt.A) ||
                  (t === gt.P && e === gt.A) ||
                  (t === gt.P && e === gt.L)) &&
                  this._matrix[se.INTERIOR][se.INTERIOR] === gt.FALSE &&
                  (ie.isTrue(this._matrix[se.INTERIOR][se.BOUNDARY]) ||
                    ie.isTrue(this._matrix[se.BOUNDARY][se.INTERIOR]) ||
                    ie.isTrue(this._matrix[se.BOUNDARY][se.BOUNDARY]));
          }
          isOverlaps(t, e) {
            return (t === gt.P && e === gt.P) || (t === gt.A && e === gt.A)
              ? ie.isTrue(this._matrix[se.INTERIOR][se.INTERIOR]) &&
                  ie.isTrue(this._matrix[se.INTERIOR][se.EXTERIOR]) &&
                  ie.isTrue(this._matrix[se.EXTERIOR][se.INTERIOR])
              : t === gt.L &&
                  e === gt.L &&
                  1 === this._matrix[se.INTERIOR][se.INTERIOR] &&
                  ie.isTrue(this._matrix[se.INTERIOR][se.EXTERIOR]) &&
                  ie.isTrue(this._matrix[se.EXTERIOR][se.INTERIOR]);
          }
          isEquals(t, e) {
            return (
              t === e &&
              ie.isTrue(this._matrix[se.INTERIOR][se.INTERIOR]) &&
              this._matrix[se.INTERIOR][se.EXTERIOR] === gt.FALSE &&
              this._matrix[se.BOUNDARY][se.EXTERIOR] === gt.FALSE &&
              this._matrix[se.EXTERIOR][se.INTERIOR] === gt.FALSE &&
              this._matrix[se.EXTERIOR][se.BOUNDARY] === gt.FALSE
            );
          }
          toString() {
            const t = new Lt("123456789");
            for (let e = 0; e < 3; e++)
              for (let n = 0; n < 3; n++)
                t.setCharAt(
                  3 * e + n,
                  gt.toDimensionSymbol(this._matrix[e][n])
                );
            return t.toString();
          }
          setAll(t) {
            for (let e = 0; e < 3; e++)
              for (let n = 0; n < 3; n++) this._matrix[e][n] = t;
          }
          get(t, e) {
            return this._matrix[t][e];
          }
          transpose() {
            let t = this._matrix[1][0];
            return (
              (this._matrix[1][0] = this._matrix[0][1]),
              (this._matrix[0][1] = t),
              (t = this._matrix[2][0]),
              (this._matrix[2][0] = this._matrix[0][2]),
              (this._matrix[0][2] = t),
              (t = this._matrix[2][1]),
              (this._matrix[2][1] = this._matrix[1][2]),
              (this._matrix[1][2] = t),
              this
            );
          }
          matches(t) {
            if (9 !== t.length) throw new n("Should be length 9: " + t);
            for (let e = 0; e < 3; e++)
              for (let n = 0; n < 3; n++)
                if (!ie.matches(this._matrix[e][n], t.charAt(3 * e + n)))
                  return !1;
            return !0;
          }
          add(t) {
            for (let e = 0; e < 3; e++)
              for (let n = 0; n < 3; n++) this.setAtLeast(e, n, t.get(e, n));
          }
          isDisjoint() {
            return (
              this._matrix[se.INTERIOR][se.INTERIOR] === gt.FALSE &&
              this._matrix[se.INTERIOR][se.BOUNDARY] === gt.FALSE &&
              this._matrix[se.BOUNDARY][se.INTERIOR] === gt.FALSE &&
              this._matrix[se.BOUNDARY][se.BOUNDARY] === gt.FALSE
            );
          }
          isCrosses(t, e) {
            return (t === gt.P && e === gt.L) ||
              (t === gt.P && e === gt.A) ||
              (t === gt.L && e === gt.A)
              ? ie.isTrue(this._matrix[se.INTERIOR][se.INTERIOR]) &&
                  ie.isTrue(this._matrix[se.INTERIOR][se.EXTERIOR])
              : (t === gt.L && e === gt.P) ||
                (t === gt.A && e === gt.P) ||
                (t === gt.A && e === gt.L)
              ? ie.isTrue(this._matrix[se.INTERIOR][se.INTERIOR]) &&
                ie.isTrue(this._matrix[se.EXTERIOR][se.INTERIOR])
              : t === gt.L &&
                e === gt.L &&
                0 === this._matrix[se.INTERIOR][se.INTERIOR];
          }
          getClass() {
            return ie;
          }
          get interfaces_() {
            return [o];
          }
        }
        ie.constructor_ = function () {
          if (((this._matrix = null), 0 === arguments.length))
            (this._matrix = Array(3)
              .fill()
              .map(() => Array(3))),
              this.setAll(gt.FALSE);
          else if (1 === arguments.length)
            if ("string" == typeof arguments[0]) {
              const t = arguments[0];
              ie.constructor_.call(this), this.set(t);
            } else if (arguments[0] instanceof ie) {
              const t = arguments[0];
              ie.constructor_.call(this),
                (this._matrix[se.INTERIOR][se.INTERIOR] =
                  t._matrix[se.INTERIOR][se.INTERIOR]),
                (this._matrix[se.INTERIOR][se.BOUNDARY] =
                  t._matrix[se.INTERIOR][se.BOUNDARY]),
                (this._matrix[se.INTERIOR][se.EXTERIOR] =
                  t._matrix[se.INTERIOR][se.EXTERIOR]),
                (this._matrix[se.BOUNDARY][se.INTERIOR] =
                  t._matrix[se.BOUNDARY][se.INTERIOR]),
                (this._matrix[se.BOUNDARY][se.BOUNDARY] =
                  t._matrix[se.BOUNDARY][se.BOUNDARY]),
                (this._matrix[se.BOUNDARY][se.EXTERIOR] =
                  t._matrix[se.BOUNDARY][se.EXTERIOR]),
                (this._matrix[se.EXTERIOR][se.INTERIOR] =
                  t._matrix[se.EXTERIOR][se.INTERIOR]),
                (this._matrix[se.EXTERIOR][se.BOUNDARY] =
                  t._matrix[se.EXTERIOR][se.BOUNDARY]),
                (this._matrix[se.EXTERIOR][se.EXTERIOR] =
                  t._matrix[se.EXTERIOR][se.EXTERIOR]);
            }
        };
        class re {
          constructor() {
            re.constructor_.apply(this, arguments);
          }
          static toDegrees(t) {
            return (180 * t) / Math.PI;
          }
          static normalize(t) {
            for (; t > Math.PI; ) t -= re.PI_TIMES_2;
            for (; t <= -Math.PI; ) t += re.PI_TIMES_2;
            return t;
          }
          static angle() {
            if (1 === arguments.length) {
              const t = arguments[0];
              return Math.atan2(t.y, t.x);
            }
            if (2 === arguments.length) {
              const t = arguments[0],
                e = arguments[1],
                n = e.x - t.x,
                s = e.y - t.y;
              return Math.atan2(s, n);
            }
          }
          static isAcute(t, e, n) {
            const s = t.x - e.x,
              i = t.y - e.y;
            return s * (n.x - e.x) + i * (n.y - e.y) > 0;
          }
          static isObtuse(t, e, n) {
            const s = t.x - e.x,
              i = t.y - e.y;
            return s * (n.x - e.x) + i * (n.y - e.y) < 0;
          }
          static interiorAngle(t, e, n) {
            const s = re.angle(e, t),
              i = re.angle(e, n);
            return Math.abs(i - s);
          }
          static normalizePositive(t) {
            if (t < 0) {
              for (; t < 0; ) t += re.PI_TIMES_2;
              t >= re.PI_TIMES_2 && (t = 0);
            } else {
              for (; t >= re.PI_TIMES_2; ) t -= re.PI_TIMES_2;
              t < 0 && (t = 0);
            }
            return t;
          }
          static angleBetween(t, e, n) {
            const s = re.angle(e, t),
              i = re.angle(e, n);
            return re.diff(s, i);
          }
          static diff(t, e) {
            let n = null;
            return (
              (n = t < e ? e - t : t - e) > Math.PI && (n = 2 * Math.PI - n), n
            );
          }
          static toRadians(t) {
            return (t * Math.PI) / 180;
          }
          static getTurn(t, e) {
            const n = Math.sin(e - t);
            return n > 0 ? re.COUNTERCLOCKWISE : n < 0 ? re.CLOCKWISE : re.NONE;
          }
          static angleBetweenOriented(t, e, n) {
            const s = re.angle(e, t),
              i = re.angle(e, n) - s;
            return i <= -Math.PI
              ? i + re.PI_TIMES_2
              : i > Math.PI
              ? i - re.PI_TIMES_2
              : i;
          }
          getClass() {
            return re;
          }
          get interfaces_() {
            return [];
          }
        }
        (re.constructor_ = function () {}),
          (re.PI_TIMES_2 = 2 * Math.PI),
          (re.PI_OVER_2 = Math.PI / 2),
          (re.PI_OVER_4 = Math.PI / 4),
          (re.COUNTERCLOCKWISE = v.COUNTERCLOCKWISE),
          (re.CLOCKWISE = v.CLOCKWISE),
          (re.NONE = v.COLLINEAR);
        class oe {
          constructor() {
            oe.constructor_.apply(this, arguments);
          }
          static area(t, e, n) {
            return Math.abs(
              ((n.x - t.x) * (e.y - t.y) - (e.x - t.x) * (n.y - t.y)) / 2
            );
          }
          static signedArea(t, e, n) {
            return ((n.x - t.x) * (e.y - t.y) - (e.x - t.x) * (n.y - t.y)) / 2;
          }
          static det(t, e, n, s) {
            return t * s - e * n;
          }
          static interpolateZ(t, e, n, s) {
            const i = e.x,
              r = e.y,
              o = n.x - i,
              l = s.x - i,
              a = n.y - r,
              c = s.y - r,
              h = o * c - l * a,
              u = t.x - i,
              g = t.y - r,
              d = (c * u - l * g) / h,
              _ = (-a * u + o * g) / h;
            return e.z + d * (n.z - e.z) + _ * (s.z - e.z);
          }
          static longestSideLength(t, e, n) {
            const s = t.distance(e),
              i = e.distance(n),
              r = n.distance(t);
            let o = s;
            return i > o && (o = i), r > o && (o = r), o;
          }
          static isAcute(t, e, n) {
            return (
              !!re.isAcute(t, e, n) &&
              !!re.isAcute(e, n, t) &&
              !!re.isAcute(n, t, e)
            );
          }
          static circumcentre(t, e, n) {
            const s = n.x,
              i = n.y,
              r = t.x - s,
              o = t.y - i,
              l = e.x - s,
              a = e.y - i,
              c = 2 * oe.det(r, o, l, a),
              h = oe.det(o, r * r + o * o, a, l * l + a * a),
              u = oe.det(r, r * r + o * o, l, l * l + a * a);
            return new g(s - h / c, i + u / c);
          }
          static perpendicularBisector(t, e) {
            const n = e.x - t.x,
              s = e.y - t.y,
              i = new b(t.x + n / 2, t.y + s / 2, 1),
              r = new b(t.x - s + n / 2, t.y + n + s / 2, 1);
            return new b(i, r);
          }
          static angleBisector(t, e, n) {
            const s = e.distance(t),
              i = s / (s + e.distance(n)),
              r = n.x - t.x,
              o = n.y - t.y;
            return new g(t.x + i * r, t.y + i * o);
          }
          static area3D(t, e, n) {
            const s = e.x - t.x,
              i = e.y - t.y,
              r = e.z - t.z,
              o = n.x - t.x,
              l = n.y - t.y,
              a = n.z - t.z,
              c = i * a - r * l,
              h = r * o - s * a,
              u = s * l - i * o,
              g = c * c + h * h + u * u;
            return Math.sqrt(g) / 2;
          }
          static centroid(t, e, n) {
            const s = (t.x + e.x + n.x) / 3,
              i = (t.y + e.y + n.y) / 3;
            return new g(s, i);
          }
          static inCentre(t, e, n) {
            const s = e.distance(n),
              i = t.distance(n),
              r = t.distance(e),
              o = s + i + r,
              l = (s * t.x + i * e.x + r * n.x) / o,
              a = (s * t.y + i * e.y + r * n.y) / o;
            return new g(l, a);
          }
          area() {
            return oe.area(this.p0, this.p1, this.p2);
          }
          signedArea() {
            return oe.signedArea(this.p0, this.p1, this.p2);
          }
          interpolateZ(t) {
            if (null === t) throw new n("Supplied point is null.");
            return oe.interpolateZ(t, this.p0, this.p1, this.p2);
          }
          longestSideLength() {
            return oe.longestSideLength(this.p0, this.p1, this.p2);
          }
          isAcute() {
            return oe.isAcute(this.p0, this.p1, this.p2);
          }
          circumcentre() {
            return oe.circumcentre(this.p0, this.p1, this.p2);
          }
          area3D() {
            return oe.area3D(this.p0, this.p1, this.p2);
          }
          centroid() {
            return oe.centroid(this.p0, this.p1, this.p2);
          }
          inCentre() {
            return oe.inCentre(this.p0, this.p1, this.p2);
          }
          getClass() {
            return oe;
          }
          get interfaces_() {
            return [];
          }
        }
        oe.constructor_ = function () {
          (this.p0 = null), (this.p1 = null), (this.p2 = null);
          const t = arguments[0],
            e = arguments[1],
            n = arguments[2];
          (this.p0 = t), (this.p1 = e), (this.p2 = n);
        };
        class le extends C {
          constructor() {
            super(), le.constructor_.apply(this, arguments);
          }
          getClass() {
            return le;
          }
          get interfaces_() {
            return [];
          }
        }
        le.constructor_ = function () {
          if (0 === arguments.length) C.constructor_.call(this);
          else if (1 === arguments.length) {
            const t = arguments[0];
            C.constructor_.call(this, t);
          }
        };
        class ae {
          constructor() {
            ae.constructor_.apply(this, arguments);
          }
          static translationInstance(t, e) {
            const n = new ae();
            return n.setToTranslation(t, e), n;
          }
          static shearInstance(t, e) {
            const n = new ae();
            return n.setToShear(t, e), n;
          }
          static reflectionInstance() {
            if (2 === arguments.length) {
              const t = arguments[0],
                e = arguments[1],
                n = new ae();
              return n.setToReflection(t, e), n;
            }
            if (4 === arguments.length) {
              const t = arguments[0],
                e = arguments[1],
                n = arguments[2],
                s = arguments[3],
                i = new ae();
              return i.setToReflection(t, e, n, s), i;
            }
          }
          static rotationInstance() {
            if (1 === arguments.length) {
              const t = arguments[0];
              return ae.rotationInstance(Math.sin(t), Math.cos(t));
            }
            if (2 === arguments.length) {
              const t = arguments[0],
                e = arguments[1],
                n = new ae();
              return n.setToRotation(t, e), n;
            }
            if (3 === arguments.length) {
              const t = arguments[0],
                e = arguments[1],
                n = arguments[2];
              return ae.rotationInstance(Math.sin(t), Math.cos(t), e, n);
            }
            if (4 === arguments.length) {
              const t = arguments[0],
                e = arguments[1],
                n = arguments[2],
                s = arguments[3],
                i = new ae();
              return i.setToRotation(t, e, n, s), i;
            }
          }
          static scaleInstance() {
            if (2 === arguments.length) {
              const t = arguments[0],
                e = arguments[1],
                n = new ae();
              return n.setToScale(t, e), n;
            }
            if (4 === arguments.length) {
              const t = arguments[0],
                e = arguments[1],
                n = arguments[2],
                s = arguments[3],
                i = new ae();
              return i.translate(-n, -s), i.scale(t, e), i.translate(n, s), i;
            }
          }
          setToReflectionBasic(t, e, s, i) {
            if (t === s && e === i)
              throw new n("Reflection line points must be distinct");
            const r = s - t,
              o = i - e,
              l = Math.sqrt(r * r + o * o),
              a = o / l,
              c = r / l,
              h = 2 * a * c,
              u = c * c - a * a;
            return (
              (this._m00 = u),
              (this._m01 = h),
              (this._m02 = 0),
              (this._m10 = h),
              (this._m11 = -u),
              (this._m12 = 0),
              this
            );
          }
          getInverse() {
            const t = this.getDeterminant();
            if (0 === t) throw new le("Transformation is non-invertible");
            const e = this._m11 / t,
              n = -this._m10 / t,
              s = -this._m01 / t,
              i = this._m00 / t,
              r = (this._m01 * this._m12 - this._m02 * this._m11) / t,
              o = (-this._m00 * this._m12 + this._m10 * this._m02) / t;
            return new ae(e, s, r, n, i, o);
          }
          compose(t) {
            const e = t._m00 * this._m00 + t._m01 * this._m10,
              n = t._m00 * this._m01 + t._m01 * this._m11,
              s = t._m00 * this._m02 + t._m01 * this._m12 + t._m02,
              i = t._m10 * this._m00 + t._m11 * this._m10,
              r = t._m10 * this._m01 + t._m11 * this._m11,
              o = t._m10 * this._m02 + t._m11 * this._m12 + t._m12;
            return (
              (this._m00 = e),
              (this._m01 = n),
              (this._m02 = s),
              (this._m10 = i),
              (this._m11 = r),
              (this._m12 = o),
              this
            );
          }
          equals(t) {
            if (null === t) return !1;
            if (!(t instanceof ae)) return !1;
            const e = t;
            return (
              this._m00 === e._m00 &&
              this._m01 === e._m01 &&
              this._m02 === e._m02 &&
              this._m10 === e._m10 &&
              this._m11 === e._m11 &&
              this._m12 === e._m12
            );
          }
          setToScale(t, e) {
            return (
              (this._m00 = t),
              (this._m01 = 0),
              (this._m02 = 0),
              (this._m10 = 0),
              (this._m11 = e),
              (this._m12 = 0),
              this
            );
          }
          isIdentity() {
            return (
              1 === this._m00 &&
              0 === this._m01 &&
              0 === this._m02 &&
              0 === this._m10 &&
              1 === this._m11 &&
              0 === this._m12
            );
          }
          scale(t, e) {
            return this.compose(ae.scaleInstance(t, e)), this;
          }
          setToIdentity() {
            return (
              (this._m00 = 1),
              (this._m01 = 0),
              (this._m02 = 0),
              (this._m10 = 0),
              (this._m11 = 1),
              (this._m12 = 0),
              this
            );
          }
          isGeometryChanged() {
            return !0;
          }
          setTransformation() {
            if (1 === arguments.length) {
              const t = arguments[0];
              return (
                (this._m00 = t._m00),
                (this._m01 = t._m01),
                (this._m02 = t._m02),
                (this._m10 = t._m10),
                (this._m11 = t._m11),
                (this._m12 = t._m12),
                this
              );
            }
            if (6 === arguments.length) {
              const t = arguments[0],
                e = arguments[1],
                n = arguments[2],
                s = arguments[3],
                i = arguments[4],
                r = arguments[5];
              return (
                (this._m00 = t),
                (this._m01 = e),
                (this._m02 = n),
                (this._m10 = s),
                (this._m11 = i),
                (this._m12 = r),
                this
              );
            }
          }
          setToRotation() {
            if (1 === arguments.length) {
              const t = arguments[0];
              return this.setToRotation(Math.sin(t), Math.cos(t)), this;
            }
            if (2 === arguments.length) {
              const t = arguments[0],
                e = arguments[1];
              return (
                (this._m00 = e),
                (this._m01 = -t),
                (this._m02 = 0),
                (this._m10 = t),
                (this._m11 = e),
                (this._m12 = 0),
                this
              );
            }
            if (3 === arguments.length) {
              const t = arguments[0],
                e = arguments[1],
                n = arguments[2];
              return this.setToRotation(Math.sin(t), Math.cos(t), e, n), this;
            }
            if (4 === arguments.length) {
              const t = arguments[0],
                e = arguments[1],
                n = arguments[2],
                s = arguments[3];
              return (
                (this._m00 = e),
                (this._m01 = -t),
                (this._m02 = n - n * e + s * t),
                (this._m10 = t),
                (this._m11 = e),
                (this._m12 = s - n * t - s * e),
                this
              );
            }
          }
          getMatrixEntries() {
            return [
              this._m00,
              this._m01,
              this._m02,
              this._m10,
              this._m11,
              this._m12,
            ];
          }
          filter(t, e) {
            this.transform(t, e);
          }
          rotate() {
            if (1 === arguments.length) {
              const t = arguments[0];
              return this.compose(ae.rotationInstance(t)), this;
            }
            if (2 === arguments.length) {
              const t = arguments[0],
                e = arguments[1];
              return this.compose(ae.rotationInstance(t, e)), this;
            }
            if (3 === arguments.length) {
              const t = arguments[0],
                e = arguments[1],
                n = arguments[2];
              return this.compose(ae.rotationInstance(t, e, n)), this;
            }
            if (4 === arguments.length) {
              const t = arguments[0],
                e = arguments[1];
              return this.compose(ae.rotationInstance(t, e)), this;
            }
          }
          getDeterminant() {
            return this._m00 * this._m11 - this._m01 * this._m10;
          }
          composeBefore(t) {
            const e = this._m00 * t._m00 + this._m01 * t._m10,
              n = this._m00 * t._m01 + this._m01 * t._m11,
              s = this._m00 * t._m02 + this._m01 * t._m12 + this._m02,
              i = this._m10 * t._m00 + this._m11 * t._m10,
              r = this._m10 * t._m01 + this._m11 * t._m11,
              o = this._m10 * t._m02 + this._m11 * t._m12 + this._m12;
            return (
              (this._m00 = e),
              (this._m01 = n),
              (this._m02 = s),
              (this._m10 = i),
              (this._m11 = r),
              (this._m12 = o),
              this
            );
          }
          setToShear(t, e) {
            return (
              (this._m00 = 1),
              (this._m01 = t),
              (this._m02 = 0),
              (this._m10 = e),
              (this._m11 = 1),
              (this._m12 = 0),
              this
            );
          }
          isDone() {
            return !1;
          }
          clone() {
            try {
              return null;
            } catch (t) {
              if (!(t instanceof C)) throw t;
              u.shouldNeverReachHere();
            }
            return null;
          }
          translate(t, e) {
            return this.compose(ae.translationInstance(t, e)), this;
          }
          setToReflection() {
            if (2 === arguments.length) {
              const t = arguments[0],
                e = arguments[1];
              if (0 === t && 0 === e)
                throw new n("Reflection vector must be non-zero");
              if (t === e)
                return (
                  (this._m00 = 0),
                  (this._m01 = 1),
                  (this._m02 = 0),
                  (this._m10 = 1),
                  (this._m11 = 0),
                  (this._m12 = 0),
                  this
                );
              const s = Math.sqrt(t * t + e * e),
                i = e / s,
                r = t / s;
              return (
                this.rotate(-i, r), this.scale(1, -1), this.rotate(i, r), this
              );
            }
            if (4 === arguments.length) {
              const t = arguments[0],
                e = arguments[1],
                s = arguments[2],
                i = arguments[3];
              if (t === s && e === i)
                throw new n("Reflection line points must be distinct");
              this.setToTranslation(-t, -e);
              const r = s - t,
                o = i - e,
                l = Math.sqrt(r * r + o * o),
                a = o / l,
                c = r / l;
              return (
                this.rotate(-a, c),
                this.scale(1, -1),
                this.rotate(a, c),
                this.translate(t, e),
                this
              );
            }
          }
          toString() {
            return (
              "AffineTransformation[[" +
              this._m00 +
              ", " +
              this._m01 +
              ", " +
              this._m02 +
              "], [" +
              this._m10 +
              ", " +
              this._m11 +
              ", " +
              this._m12 +
              "]]"
            );
          }
          setToTranslation(t, e) {
            return (
              (this._m00 = 1),
              (this._m01 = 0),
              (this._m02 = t),
              (this._m10 = 0),
              (this._m11 = 1),
              (this._m12 = e),
              this
            );
          }
          shear(t, e) {
            return this.compose(ae.shearInstance(t, e)), this;
          }
          transform() {
            if (1 === arguments.length) {
              const t = arguments[0].copy();
              return t.apply(this), t;
            }
            if (2 === arguments.length) {
              if (arguments[0] instanceof g && arguments[1] instanceof g) {
                const t = arguments[0],
                  e = arguments[1],
                  n = this._m00 * t.x + this._m01 * t.y + this._m02,
                  s = this._m10 * t.x + this._m11 * t.y + this._m12;
                return (e.x = n), (e.y = s), e;
              }
              if (_(arguments[0], A) && Number.isInteger(arguments[1])) {
                const t = arguments[0],
                  e = arguments[1],
                  n =
                    this._m00 * t.getOrdinate(e, 0) +
                    this._m01 * t.getOrdinate(e, 1) +
                    this._m02,
                  s =
                    this._m10 * t.getOrdinate(e, 0) +
                    this._m11 * t.getOrdinate(e, 1) +
                    this._m12;
                t.setOrdinate(e, 0, n), t.setOrdinate(e, 1, s);
              }
            }
          }
          reflect() {
            if (2 === arguments.length) {
              const t = arguments[0],
                e = arguments[1];
              return this.compose(ae.reflectionInstance(t, e)), this;
            }
            if (4 === arguments.length) {
              const t = arguments[0],
                e = arguments[1],
                n = arguments[2],
                s = arguments[3];
              return this.compose(ae.reflectionInstance(t, e, n, s)), this;
            }
          }
          getClass() {
            return ae;
          }
          get interfaces_() {
            return [o, _t];
          }
        }
        ae.constructor_ = function () {
          if (
            ((this._m00 = null),
            (this._m01 = null),
            (this._m02 = null),
            (this._m10 = null),
            (this._m11 = null),
            (this._m12 = null),
            0 === arguments.length)
          )
            this.setToIdentity();
          else if (1 === arguments.length) {
            if (arguments[0] instanceof Array) {
              const t = arguments[0];
              (this._m00 = t[0]),
                (this._m01 = t[1]),
                (this._m02 = t[2]),
                (this._m10 = t[3]),
                (this._m11 = t[4]),
                (this._m12 = t[5]);
            } else if (arguments[0] instanceof ae) {
              const t = arguments[0];
              this.setTransformation(t);
            }
          } else if (
            6 === arguments.length &&
            "number" == typeof arguments[5] &&
            "number" == typeof arguments[4] &&
            "number" == typeof arguments[3] &&
            "number" == typeof arguments[2] &&
            "number" == typeof arguments[0] &&
            "number" == typeof arguments[1]
          ) {
            const t = arguments[0],
              e = arguments[1],
              n = arguments[2],
              s = arguments[3],
              i = arguments[4],
              r = arguments[5];
            this.setTransformation(t, e, n, s, i, r);
          }
        };
        class ce {
          constructor() {
            ce.constructor_.apply(this, arguments);
          }
          static solve(t, e) {
            const s = e.length;
            if (t.length !== s || t[0].length !== s)
              throw new n("Matrix A is incorrectly sized");
            for (let n = 0; n < s; n++) {
              let i = n;
              for (let e = n + 1; e < s; e++)
                Math.abs(t[e][n]) > Math.abs(t[i][n]) && (i = e);
              if (0 === t[i][n]) return null;
              ce.swapRows(t, n, i), ce.swapRows(e, n, i);
              for (let r = n + 1; r < s; r++) {
                const i = t[r][n] / t[n][n];
                for (let e = s - 1; e >= n; e--) t[r][e] -= t[n][e] * i;
                e[r] -= e[n] * i;
              }
            }
            const i = new Array(s).fill(null);
            for (let n = s - 1; n >= 0; n--) {
              let r = 0;
              for (let e = n + 1; e < s; e++) r += t[n][e] * i[e];
              i[n] = (e[n] - r) / t[n][n];
            }
            return i;
          }
          static swapRows() {
            if (
              Number.isInteger(arguments[2]) &&
              arguments[0] instanceof Array &&
              Number.isInteger(arguments[1])
            ) {
              const t = arguments[0],
                e = arguments[1],
                n = arguments[2];
              if (e === n) return null;
              for (let s = 0; s < t[0].length; s++) {
                const i = t[e][s];
                (t[e][s] = t[n][s]), (t[n][s] = i);
              }
            } else if (
              Number.isInteger(arguments[2]) &&
              arguments[0] instanceof Array &&
              Number.isInteger(arguments[1])
            ) {
              const t = arguments[0],
                e = arguments[1],
                n = arguments[2];
              if (e === n) return null;
              const s = t[e];
              (t[e] = t[n]), (t[n] = s);
            }
          }
          getClass() {
            return ce;
          }
          get interfaces_() {
            return [];
          }
        }
        ce.constructor_ = function () {};
        class he {
          constructor() {
            he.constructor_.apply(this, arguments);
          }
          solve(t) {
            const e = [
              [this._src0.x, this._src0.y, 1],
              [this._src1.x, this._src1.y, 1],
              [this._src2.x, this._src2.y, 1],
            ];
            return ce.solve(e, t);
          }
          compute() {
            const t = [this._dest0.x, this._dest1.x, this._dest2.x],
              e = this.solve(t);
            if (null === e) return !1;
            (this._m00 = e[0]), (this._m01 = e[1]), (this._m02 = e[2]);
            const n = [this._dest0.y, this._dest1.y, this._dest2.y],
              s = this.solve(n);
            return (
              null !== s &&
              ((this._m10 = s[0]), (this._m11 = s[1]), (this._m12 = s[2]), !0)
            );
          }
          getTransformation() {
            return this.compute()
              ? new ae(
                  this._m00,
                  this._m01,
                  this._m02,
                  this._m10,
                  this._m11,
                  this._m12
                )
              : null;
          }
          getClass() {
            return he;
          }
          get interfaces_() {
            return [];
          }
        }
        he.constructor_ = function () {
          (this._src0 = null),
            (this._src1 = null),
            (this._src2 = null),
            (this._dest0 = null),
            (this._dest1 = null),
            (this._dest2 = null),
            (this._m00 = null),
            (this._m01 = null),
            (this._m02 = null),
            (this._m10 = null),
            (this._m11 = null),
            (this._m12 = null);
          const t = arguments[0],
            e = arguments[1],
            n = arguments[2],
            s = arguments[3],
            i = arguments[4],
            r = arguments[5];
          (this._src0 = t),
            (this._src1 = e),
            (this._src2 = n),
            (this._dest0 = s),
            (this._dest1 = i),
            (this._dest2 = r);
        };
        class ue {
          constructor() {
            ue.constructor_.apply(this, arguments);
          }
          static createFromBaseLines(t, e, n, s) {
            const i = new g(t.x + s.x - n.x, t.y + s.y - n.y),
              r = re.angleBetweenOriented(e, t, i),
              o = e.distance(t),
              l = s.distance(n);
            if (0 === o) return new ae();
            const a = l / o,
              c = ae.translationInstance(-t.x, -t.y);
            return c.rotate(r), c.scale(a, a), c.translate(n.x, n.y), c;
          }
          static createFromControlVectors() {
            if (2 === arguments.length) {
              if (arguments[0] instanceof g && arguments[1] instanceof g) {
                const t = arguments[0],
                  e = arguments[1],
                  n = e.x - t.x,
                  s = e.y - t.y;
                return ae.translationInstance(n, s);
              }
              if (
                arguments[0] instanceof Array &&
                arguments[1] instanceof Array
              ) {
                const t = arguments[0],
                  e = arguments[1];
                if (t.length !== e.length)
                  throw new n("Src and Dest arrays are not the same length");
                if (t.length <= 0) throw new n("Too few control points");
                if (t.length > 3) throw new n("Too many control points");
                return 1 === t.length
                  ? ue.createFromControlVectors(t[0], e[0])
                  : 2 === t.length
                  ? ue.createFromControlVectors(t[0], t[1], e[0], e[1])
                  : ue.createFromControlVectors(
                      t[0],
                      t[1],
                      t[2],
                      e[0],
                      e[1],
                      e[2]
                    );
              }
            } else {
              if (4 === arguments.length) {
                const t = arguments[0],
                  e = arguments[1],
                  n = arguments[2],
                  s = arguments[3],
                  i = new g(s.x - n.x, s.y - n.y),
                  r = re.angleBetweenOriented(e, t, i),
                  o = e.distance(t),
                  l = s.distance(n);
                if (0 === o) return null;
                const a = l / o,
                  c = ae.translationInstance(-t.x, -t.y);
                return c.rotate(r), c.scale(a, a), c.translate(n.x, n.y), c;
              }
              if (6 === arguments.length)
                return new he(
                  arguments[0],
                  arguments[1],
                  arguments[2],
                  arguments[3],
                  arguments[4],
                  arguments[5]
                ).getTransformation();
            }
          }
          getClass() {
            return ue;
          }
          get interfaces_() {
            return [];
          }
        }
        ue.constructor_ = function () {};
        class ge {
          constructor() {
            ge.constructor_.apply(this, arguments);
          }
          static getCoordinates(t) {
            const e = new x();
            return t.apply(new ge(e)), e;
          }
          filter(t) {
            (t instanceof Rt || t instanceof vt) &&
              this._coords.add(t.getCoordinate());
          }
          getClass() {
            return ge;
          }
          get interfaces_() {
            return [G];
          }
        }
        ge.constructor_ = function () {
          this._coords = null;
          const t = arguments[0];
          this._coords = t;
        };
        class de {
          constructor() {
            de.constructor_.apply(this, arguments);
          }
          static map(t, e) {
            return new de(e).map(t);
          }
          map(t) {
            const e = new x();
            for (let n = 0; n < t.getNumGeometries(); n++) {
              const s = this._mapOp.map(t.getGeometryN(n));
              s.isEmpty() || e.add(s);
            }
            return t
              .getFactory()
              .createGeometryCollection(Wt.toGeometryArray(e));
          }
          getClass() {
            return de;
          }
          get interfaces_() {
            return [];
          }
        }
        de.constructor_ = function () {
          this._mapOp = null;
          const t = arguments[0];
          this._mapOp = t;
        };
        class _e {
          constructor() {
            _e.constructor_.apply(this, arguments);
          }
          static combine() {
            if (1 === arguments.length) return new _e(arguments[0]).combine();
            if (2 === arguments.length) {
              const t = arguments[0],
                e = arguments[1];
              return new _e(_e.createList(t, e)).combine();
            }
            if (3 === arguments.length) {
              const t = arguments[0],
                e = arguments[1],
                n = arguments[2];
              return new _e(_e.createList(t, e, n)).combine();
            }
          }
          static extractFactory(t) {
            return t.isEmpty() ? null : t.iterator().next().getFactory();
          }
          static createList() {
            if (2 === arguments.length) {
              const t = arguments[0],
                e = arguments[1],
                n = new x();
              return n.add(t), n.add(e), n;
            }
            if (3 === arguments.length) {
              const t = arguments[0],
                e = arguments[1],
                n = arguments[2],
                s = new x();
              return s.add(t), s.add(e), s.add(n), s;
            }
          }
          extractElements(t, e) {
            if (null === t) return null;
            for (let n = 0; n < t.getNumGeometries(); n++) {
              const s = t.getGeometryN(n);
              (this._skipEmpty && s.isEmpty()) || e.add(s);
            }
          }
          combine() {
            const t = new x();
            for (let e = this._inputGeoms.iterator(); e.hasNext(); ) {
              const n = e.next();
              this.extractElements(n, t);
            }
            return 0 === t.size()
              ? null !== this._geomFactory
                ? this._geomFactory.createGeometryCollection()
                : null
              : this._geomFactory.buildGeometry(t);
          }
          getClass() {
            return _e;
          }
          get interfaces_() {
            return [];
          }
        }
        _e.constructor_ = function () {
          (this._geomFactory = null),
            (this._skipEmpty = !1),
            (this._inputGeoms = null);
          const t = arguments[0];
          (this._geomFactory = _e.extractFactory(t)), (this._inputGeoms = t);
        };
        class pe {
          constructor() {
            pe.constructor_.apply(this, arguments);
          }
          static isOfType(t, e) {
            return (
              t.getGeometryType() === e ||
              (e === q.TYPENAME_LINESTRING &&
                t.getGeometryType() === q.TYPENAME_LINEARRING)
            );
          }
          static extract() {
            if (2 === arguments.length) {
              const t = arguments[0],
                e = arguments[1];
              return pe.extract(t, e, new x());
            }
            if (3 === arguments.length) {
              if (
                _(arguments[2], m) &&
                arguments[0] instanceof q &&
                "string" == typeof arguments[1]
              ) {
                const t = arguments[0],
                  e = arguments[1],
                  n = arguments[2];
                return (
                  t.getGeometryType() === e
                    ? n.add(t)
                    : t instanceof pt && t.apply(new pe(e, n)),
                  n
                );
              }
              if (
                _(arguments[2], m) &&
                arguments[0] instanceof q &&
                arguments[1] instanceof Class
              ) {
                const t = arguments[0],
                  e = arguments[1],
                  n = arguments[2];
                return pe.extract(t, pe.toGeometryType(e), n);
              }
            }
          }
          filter(t) {
            (null === this._geometryType ||
              pe.isOfType(t, this._geometryType)) &&
              this._comps.add(t);
          }
          getClass() {
            return pe;
          }
          get interfaces_() {
            return [dt];
          }
        }
        pe.constructor_ = function () {
          (this._geometryType = null), (this._comps = null);
          const t = arguments[0],
            e = arguments[1];
          (this._geometryType = t), (this._comps = e);
        };
        class fe {
          constructor() {
            fe.constructor_.apply(this, arguments);
          }
          map(t) {}
          getClass() {
            return fe;
          }
          get interfaces_() {
            return [];
          }
        }
        fe.constructor_ = function () {};
        class me {
          constructor() {
            me.constructor_.apply(this, arguments);
          }
          static map() {
            if (arguments[0] instanceof q && _(arguments[1], fe)) {
              const t = arguments[0],
                e = arguments[1],
                n = new x();
              for (let s = 0; s < t.getNumGeometries(); s++) {
                const i = e.map(t.getGeometryN(s));
                null !== i && n.add(i);
              }
              return t.getFactory().buildGeometry(n);
            }
            if (_(arguments[0], p) && _(arguments[1], fe)) {
              const t = arguments[0],
                e = arguments[1],
                n = new x();
              for (let s = t.iterator(); s.hasNext(); ) {
                const t = s.next(),
                  i = e.map(t);
                null !== i && n.add(i);
              }
              return n;
            }
          }
          getClass() {
            return me;
          }
          get interfaces_() {
            return [];
          }
        }
        me.constructor_ = function () {};
        class ye {
          constructor() {
            ye.constructor_.apply(this, arguments);
          }
          transformPoint(t, e) {
            return this._factory.createPoint(
              this.transformCoordinates(t.getCoordinateSequence(), t)
            );
          }
          transformPolygon(t, e) {
            let n = !0;
            const s = this.transformLinearRing(t.getExteriorRing(), t);
            (null !== s && s instanceof At && !s.isEmpty()) || (n = !1);
            const i = new x();
            for (let r = 0; r < t.getNumInteriorRing(); r++) {
              const e = this.transformLinearRing(t.getInteriorRingN(r), t);
              null === e ||
                e.isEmpty() ||
                (e instanceof At || (n = !1), i.add(e));
            }
            if (n) return this._factory.createPolygon(s, i.toArray([]));
            {
              const t = new x();
              return (
                null !== s && t.add(s),
                t.addAll(i),
                this._factory.buildGeometry(t)
              );
            }
          }
          createCoordinateSequence(t) {
            return this._factory.getCoordinateSequenceFactory().create(t);
          }
          getInputGeometry() {
            return this._inputGeom;
          }
          transformMultiLineString(t, e) {
            const n = new x();
            for (let s = 0; s < t.getNumGeometries(); s++) {
              const e = this.transformLineString(t.getGeometryN(s), t);
              null !== e && (e.isEmpty() || n.add(e));
            }
            return this._factory.buildGeometry(n);
          }
          transformCoordinates(t, e) {
            return this.copy(t);
          }
          transformLineString(t, e) {
            return this._factory.createLineString(
              this.transformCoordinates(t.getCoordinateSequence(), t)
            );
          }
          transformMultiPoint(t, e) {
            const n = new x();
            for (let s = 0; s < t.getNumGeometries(); s++) {
              const e = this.transformPoint(t.getGeometryN(s), t);
              null !== e && (e.isEmpty() || n.add(e));
            }
            return this._factory.buildGeometry(n);
          }
          transformMultiPolygon(t, e) {
            const n = new x();
            for (let s = 0; s < t.getNumGeometries(); s++) {
              const e = this.transformPolygon(t.getGeometryN(s), t);
              null !== e && (e.isEmpty() || n.add(e));
            }
            return this._factory.buildGeometry(n);
          }
          copy(t) {
            return t.copy();
          }
          transformGeometryCollection(t, e) {
            const n = new x();
            for (let s = 0; s < t.getNumGeometries(); s++) {
              const e = this.transform(t.getGeometryN(s));
              null !== e &&
                ((this._pruneEmptyGeometry && e.isEmpty()) || n.add(e));
            }
            return this._preserveGeometryCollectionType
              ? this._factory.createGeometryCollection(Wt.toGeometryArray(n))
              : this._factory.buildGeometry(n);
          }
          transform(t) {
            if (
              ((this._inputGeom = t),
              (this._factory = t.getFactory()),
              t instanceof vt)
            )
              return this.transformPoint(t, null);
            if (t instanceof Dt) return this.transformMultiPoint(t, null);
            if (t instanceof At) return this.transformLinearRing(t, null);
            if (t instanceof Rt) return this.transformLineString(t, null);
            if (t instanceof ft) return this.transformMultiLineString(t, null);
            if (t instanceof Mt) return this.transformPolygon(t, null);
            if (t instanceof Ft) return this.transformMultiPolygon(t, null);
            if (t instanceof pt)
              return this.transformGeometryCollection(t, null);
            throw new n("Unknown Geometry subtype: " + t.getClass().getName());
          }
          transformLinearRing(t, e) {
            const n = this.transformCoordinates(t.getCoordinateSequence(), t);
            if (null === n) return this._factory.createLinearRing(null);
            const s = n.size();
            return s > 0 && s < 4 && !this._preserveType
              ? this._factory.createLineString(n)
              : this._factory.createLinearRing(n);
          }
          getClass() {
            return ye;
          }
          get interfaces_() {
            return [];
          }
        }
        ye.constructor_ = function () {
          (this._inputGeom = null),
            (this._factory = null),
            (this._pruneEmptyGeometry = !0),
            (this._preserveGeometryCollectionType = !0),
            (this._preserveCollections = !1),
            (this._preserveType = !1);
        };
        class xe {
          constructor() {
            xe.constructor_.apply(this, arguments);
          }
          static getGeometry(t) {
            return t.getFactory().buildGeometry(xe.getLines(t));
          }
          static getLines() {
            if (1 === arguments.length) {
              const t = arguments[0];
              return xe.getLines(t, new x());
            }
            if (2 === arguments.length) {
              const t = arguments[0],
                e = arguments[1];
              return (
                t instanceof Rt
                  ? e.add(t)
                  : t instanceof pt && t.apply(new xe(e)),
                e
              );
            }
          }
          filter(t) {
            t instanceof Rt && this._comps.add(t);
          }
          getClass() {
            return xe;
          }
          get interfaces_() {
            return [dt];
          }
        }
        xe.constructor_ = function () {
          this._comps = null;
          const t = arguments[0];
          this._comps = t;
        };
        class Ee {
          constructor() {
            Ee.constructor_.apply(this, arguments);
          }
          static getGeometry() {
            if (1 === arguments.length) {
              const t = arguments[0];
              return t.getFactory().buildGeometry(Ee.getLines(t));
            }
            if (2 === arguments.length) {
              const t = arguments[0],
                e = arguments[1];
              return t.getFactory().buildGeometry(Ee.getLines(t, e));
            }
          }
          static getLines() {
            if (1 === arguments.length) {
              const t = arguments[0];
              return Ee.getLines(t, !1);
            }
            if (2 === arguments.length) {
              if (_(arguments[0], p) && _(arguments[1], p)) {
                const t = arguments[1];
                for (let e = arguments[0].iterator(); e.hasNext(); ) {
                  const n = e.next();
                  Ee.getLines(n, t);
                }
                return t;
              }
              if (
                arguments[0] instanceof q &&
                "boolean" == typeof arguments[1]
              ) {
                const t = arguments[0],
                  e = arguments[1],
                  n = new x();
                return t.apply(new Ee(n, e)), n;
              }
              if (arguments[0] instanceof q && _(arguments[1], p)) {
                const t = arguments[0],
                  e = arguments[1];
                return t instanceof Rt ? e.add(t) : t.apply(new Ee(e)), e;
              }
            } else if (3 === arguments.length) {
              if (
                "boolean" == typeof arguments[2] &&
                _(arguments[0], p) &&
                _(arguments[1], p)
              ) {
                const t = arguments[1],
                  e = arguments[2];
                for (let n = arguments[0].iterator(); n.hasNext(); ) {
                  const s = n.next();
                  Ee.getLines(s, t, e);
                }
                return t;
              }
              if (
                "boolean" == typeof arguments[2] &&
                arguments[0] instanceof q &&
                _(arguments[1], p)
              ) {
                const t = arguments[1],
                  e = arguments[2];
                return arguments[0].apply(new Ee(t, e)), t;
              }
            }
          }
          filter(t) {
            if (this._isForcedToLineString && t instanceof At) {
              const e = t
                .getFactory()
                .createLineString(t.getCoordinateSequence());
              return this._lines.add(e), null;
            }
            t instanceof Rt && this._lines.add(t);
          }
          setForceToLineString(t) {
            this._isForcedToLineString = t;
          }
          getClass() {
            return Ee;
          }
          get interfaces_() {
            return [G];
          }
        }
        Ee.constructor_ = function () {
          if (
            ((this._lines = null),
            (this._isForcedToLineString = !1),
            1 === arguments.length)
          ) {
            const t = arguments[0];
            this._lines = t;
          } else if (2 === arguments.length) {
            const t = arguments[0],
              e = arguments[1];
            (this._lines = t), (this._isForcedToLineString = e);
          }
        };
        const Ie = {
          reverseOrder: function () {
            return { compare: (t, e) => e.compareTo(t) };
          },
          min: function (t) {
            return Ie.sort(t), t.get(0);
          },
          sort: function (t, e) {
            const n = t.toArray();
            e ? ut.sort(n, e) : ut.sort(n);
            const s = t.iterator();
            for (let i = 0, r = n.length; i < r; i++) s.next(), s.set(n[i]);
          },
          singletonList: function (t) {
            const e = new x();
            return e.add(t), e;
          },
        };
        class Ne {
          constructor() {
            Ne.constructor_.apply(this, arguments);
          }
          static getPoints() {
            if (1 === arguments.length) {
              const t = arguments[0];
              return t instanceof vt
                ? Ie.singletonList(t)
                : Ne.getPoints(t, new x());
            }
            if (2 === arguments.length) {
              const t = arguments[0],
                e = arguments[1];
              return (
                t instanceof vt
                  ? e.add(t)
                  : t instanceof pt && t.apply(new Ne(e)),
                e
              );
            }
          }
          filter(t) {
            t instanceof vt && this._pts.add(t);
          }
          getClass() {
            return Ne;
          }
          get interfaces_() {
            return [dt];
          }
        }
        Ne.constructor_ = function () {
          this._pts = null;
          const t = arguments[0];
          this._pts = t;
        };
        class Ce {
          constructor() {
            Ce.constructor_.apply(this, arguments);
          }
          static getPolygons() {
            if (1 === arguments.length) {
              const t = arguments[0];
              return Ce.getPolygons(t, new x());
            }
            if (2 === arguments.length) {
              const t = arguments[0],
                e = arguments[1];
              return (
                t instanceof Mt
                  ? e.add(t)
                  : t instanceof pt && t.apply(new Ce(e)),
                e
              );
            }
          }
          filter(t) {
            t instanceof Mt && this._comps.add(t);
          }
          getClass() {
            return Ce;
          }
          get interfaces_() {
            return [dt];
          }
        }
        Ce.constructor_ = function () {
          this._comps = null;
          const t = arguments[0];
          this._comps = t;
        };
        class Se {
          constructor() {
            Se.constructor_.apply(this, arguments);
          }
          applyTo(t) {
            for (let e = 0; e < t.getNumGeometries() && !this._isDone; e++) {
              const n = t.getGeometryN(e);
              if (n instanceof pt) this.applyTo(n);
              else if ((this.visit(n), this.isDone()))
                return (this._isDone = !0), null;
            }
          }
          getClass() {
            return Se;
          }
          get interfaces_() {
            return [];
          }
        }
        Se.constructor_ = function () {
          this._isDone = !1;
        };
        class we {
          constructor() {
            we.constructor_.apply(this, arguments);
          }
          createSupercircle(t) {
            const e = 1 / t,
              n = this._dim.getMinSize() / 2,
              s = this._dim.getCentre(),
              i = Math.pow(n, t),
              r = n,
              o = Math.pow(i / 2, e),
              l = Math.trunc(this._nPts / 8),
              a = new Array(8 * l + 1).fill(null),
              c = o / l;
            for (let g = 0; g <= l; g++) {
              let n = 0,
                o = r;
              if (0 !== g) {
                n = c * g;
                const s = Math.pow(n, t);
                o = Math.pow(i - s, e);
              }
              (a[g] = this.coordTrans(n, o, s)),
                (a[2 * l - g] = this.coordTrans(o, n, s)),
                (a[2 * l + g] = this.coordTrans(o, -n, s)),
                (a[4 * l - g] = this.coordTrans(n, -o, s)),
                (a[4 * l + g] = this.coordTrans(-n, -o, s)),
                (a[6 * l - g] = this.coordTrans(-o, -n, s)),
                (a[6 * l + g] = this.coordTrans(-o, n, s)),
                (a[8 * l - g] = this.coordTrans(-n, o, s));
            }
            a[a.length - 1] = new g(a[0]);
            const h = this._geomFact.createLinearRing(a),
              u = this._geomFact.createPolygon(h);
            return this.rotate(u);
          }
          setNumPoints(t) {
            this._nPts = t;
          }
          setBase(t) {
            this._dim.setBase(t);
          }
          setRotation(t) {
            this._rotationAngle = t;
          }
          setWidth(t) {
            this._dim.setWidth(t);
          }
          createEllipse() {
            const t = this._dim.getEnvelope(),
              e = t.getWidth() / 2,
              n = t.getHeight() / 2,
              s = t.getMinX() + e,
              i = t.getMinY() + n,
              r = new Array(this._nPts + 1).fill(null);
            let o = 0;
            for (let c = 0; c < this._nPts; c++) {
              const t = c * ((2 * Math.PI) / this._nPts),
                l = e * Math.cos(t) + s,
                a = n * Math.sin(t) + i;
              r[o++] = this.coord(l, a);
            }
            r[o] = new g(r[0]);
            const l = this._geomFact.createLinearRing(r),
              a = this._geomFact.createPolygon(l);
            return this.rotate(a);
          }
          coordTrans(t, e, n) {
            return this.coord(t + n.x, e + n.y);
          }
          createSquircle() {
            return this.createSupercircle(4);
          }
          setEnvelope(t) {
            this._dim.setEnvelope(t);
          }
          setCentre(t) {
            this._dim.setCentre(t);
          }
          createArc(t, e) {
            const n = this._dim.getEnvelope(),
              s = n.getWidth() / 2,
              i = n.getHeight() / 2,
              r = n.getMinX() + s,
              o = n.getMinY() + i;
            let l = e;
            (l <= 0 || l > 2 * Math.PI) && (l = 2 * Math.PI);
            const a = l / (this._nPts - 1),
              c = new Array(this._nPts).fill(null);
            let h = 0;
            for (let g = 0; g < this._nPts; g++) {
              const e = t + g * a,
                n = s * Math.cos(e) + r,
                l = i * Math.sin(e) + o;
              c[h++] = this.coord(n, l);
            }
            const u = this._geomFact.createLineString(c);
            return this.rotate(u);
          }
          rotate(t) {
            if (0 !== this._rotationAngle) {
              const e = ae.rotationInstance(
                this._rotationAngle,
                this._dim.getCentre().x,
                this._dim.getCentre().y
              );
              t.apply(e);
            }
            return t;
          }
          coord(t, e) {
            const n = new g(t, e);
            return this._precModel.makePrecise(n), n;
          }
          createArcPolygon(t, e) {
            const n = this._dim.getEnvelope(),
              s = n.getWidth() / 2,
              i = n.getHeight() / 2,
              r = n.getMinX() + s,
              o = n.getMinY() + i;
            let l = e;
            (l <= 0 || l > 2 * Math.PI) && (l = 2 * Math.PI);
            const a = l / (this._nPts - 1),
              c = new Array(this._nPts + 2).fill(null);
            let h = 0;
            c[h++] = this.coord(r, o);
            for (let d = 0; d < this._nPts; d++) {
              const e = t + a * d,
                n = s * Math.cos(e) + r,
                l = i * Math.sin(e) + o;
              c[h++] = this.coord(n, l);
            }
            c[h++] = this.coord(r, o);
            const u = this._geomFact.createLinearRing(c),
              g = this._geomFact.createPolygon(u);
            return this.rotate(g);
          }
          createRectangle() {
            let t = null,
              e = 0,
              n = Math.trunc(this._nPts / 4);
            n < 1 && (n = 1);
            const s = this._dim.getEnvelope().getWidth() / n,
              i = this._dim.getEnvelope().getHeight() / n,
              r = new Array(4 * n + 1).fill(null),
              o = this._dim.getEnvelope();
            for (t = 0; t < n; t++) {
              const n = o.getMinX() + t * s,
                i = o.getMinY();
              r[e++] = this.coord(n, i);
            }
            for (t = 0; t < n; t++) {
              const n = o.getMaxX(),
                s = o.getMinY() + t * i;
              r[e++] = this.coord(n, s);
            }
            for (t = 0; t < n; t++) {
              const n = o.getMaxX() - t * s,
                i = o.getMaxY();
              r[e++] = this.coord(n, i);
            }
            for (t = 0; t < n; t++) {
              const n = o.getMinX(),
                s = o.getMaxY() - t * i;
              r[e++] = this.coord(n, s);
            }
            r[e++] = new g(r[0]);
            const l = this._geomFact.createLinearRing(r),
              a = this._geomFact.createPolygon(l);
            return this.rotate(a);
          }
          createCircle() {
            return this.createEllipse();
          }
          setHeight(t) {
            this._dim.setHeight(t);
          }
          setSize(t) {
            this._dim.setSize(t);
          }
          getClass() {
            return we;
          }
          get interfaces_() {
            return [];
          }
        }
        class Le {
          constructor() {
            Le.constructor_.apply(this, arguments);
          }
          setBase(t) {
            this.base = t;
          }
          setWidth(t) {
            this.width = t;
          }
          getBase() {
            return this.base;
          }
          getWidth() {
            return this.width;
          }
          setEnvelope(t) {
            (this.width = t.getWidth()),
              (this.height = t.getHeight()),
              (this.base = new g(t.getMinX(), t.getMinY())),
              (this.centre = new g(t.centre()));
          }
          setCentre(t) {
            this.centre = t;
          }
          getMinSize() {
            return Math.min(this.width, this.height);
          }
          getEnvelope() {
            return null !== this.base
              ? new N(
                  this.base.x,
                  this.base.x + this.width,
                  this.base.y,
                  this.base.y + this.height
                )
              : null !== this.centre
              ? new N(
                  this.centre.x - this.width / 2,
                  this.centre.x + this.width / 2,
                  this.centre.y - this.height / 2,
                  this.centre.y + this.height / 2
                )
              : new N(0, this.width, 0, this.height);
          }
          getCentre() {
            return (
              null === this.centre &&
                (this.centre = new g(
                  this.base.x + this.width / 2,
                  this.base.y + this.height / 2
                )),
              this.centre
            );
          }
          getHeight() {
            return this.height;
          }
          setHeight(t) {
            this.height = t;
          }
          setSize(t) {
            (this.height = t), (this.width = t);
          }
          getClass() {
            return Le;
          }
          get interfaces_() {
            return [];
          }
        }
        (Le.constructor_ = function () {
          (this.base = null),
            (this.centre = null),
            (this.width = null),
            (this.height = null);
        }),
          (we.Dimensions = Le),
          (we.constructor_ = function () {
            if (
              ((this._geomFact = null),
              (this._precModel = null),
              (this._dim = new Le()),
              (this._nPts = 100),
              (this._rotationAngle = 0),
              0 === arguments.length)
            )
              we.constructor_.call(this, new Wt());
            else if (1 === arguments.length) {
              const t = arguments[0];
              (this._geomFact = t), (this._precModel = t.getPrecisionModel());
            }
          });
        class Te extends we {
          constructor() {
            super(), Te.constructor_.apply(this, arguments);
          }
          setNumArms(t) {
            this._numArms = t;
          }
          setArmLengthRatio(t) {
            this._armLengthRatio = t;
          }
          createSineStar() {
            const t = this._dim.getEnvelope(),
              e = t.getWidth() / 2;
            let n = this._armLengthRatio;
            n < 0 && (n = 0), n > 1 && (n = 1);
            const s = n * e,
              i = (1 - n) * e,
              r = t.getMinX() + e,
              o = t.getMinY() + e,
              l = new Array(this._nPts + 1).fill(null);
            let a = 0;
            for (let h = 0; h < this._nPts; h++) {
              const t = (h / this._nPts) * this._numArms,
                e = t - Math.floor(t),
                n = 2 * Math.PI * e,
                c = i + s * ((Math.cos(n) + 1) / 2),
                u = h * ((2 * Math.PI) / this._nPts),
                g = c * Math.cos(u) + r,
                d = c * Math.sin(u) + o;
              l[a++] = this.coord(g, d);
            }
            l[a] = new g(l[0]);
            const c = this._geomFact.createLinearRing(l);
            return this._geomFact.createPolygon(c);
          }
          getClass() {
            return Te;
          }
          get interfaces_() {
            return [];
          }
        }
        Te.constructor_ = function () {
          if (
            ((this._numArms = 8),
            (this._armLengthRatio = 0.5),
            0 === arguments.length)
          )
            we.constructor_.call(this);
          else if (1 === arguments.length) {
            const t = arguments[0];
            we.constructor_.call(this, t);
          }
        };
        var Re = Object.freeze({
            __proto__: null,
            AffineTransformation: ae,
            AffineTransformationBuilder: he,
            AffineTransformationFactory: ue,
            ComponentCoordinateExtracter: ge,
            GeometryCollectionMapper: de,
            GeometryCombiner: _e,
            GeometryEditor: Gt,
            GeometryExtracter: pe,
            GeometryMapper: me,
            GeometryTransformer: ye,
            LineStringExtracter: xe,
            LinearComponentExtracter: Ee,
            MapOp: fe,
            PointExtracter: Ne,
            PolygonExtracter: Ce,
            ShortCircuitedGeometryVisitor: Se,
            SineStarFactory: Te,
          }),
          Pe = Object.freeze({
            __proto__: null,
            Coordinate: g,
            CoordinateList: I,
            Envelope: N,
            LineSegment: ne,
            GeometryFactory: Wt,
            Geometry: q,
            Point: vt,
            LineString: Rt,
            LinearRing: At,
            Polygon: Mt,
            GeometryCollection: pt,
            MultiPoint: Dt,
            MultiLineString: ft,
            MultiPolygon: Ft,
            Dimension: gt,
            IntersectionMatrix: ie,
            PrecisionModel: Xt,
            Location: se,
            Triangle: oe,
            util: Re,
          });
        class ve {
          constructor() {
            ve.constructor_.apply(this, arguments);
          }
          getCoordinates() {
            return this._pt;
          }
          getCoordinate(t) {
            return this._pt[t];
          }
          setMinimum() {
            if (1 === arguments.length) {
              const t = arguments[0];
              this.setMinimum(t._pt[0], t._pt[1]);
            } else if (2 === arguments.length) {
              const t = arguments[0],
                e = arguments[1];
              if (this._isNull) return this.initialize(t, e), null;
              const n = t.distance(e);
              n < this._distance && this.initialize(t, e, n);
            }
          }
          initialize() {
            if (0 === arguments.length) this._isNull = !0;
            else if (2 === arguments.length) {
              const t = arguments[0],
                e = arguments[1];
              this._pt[0].setCoordinate(t),
                this._pt[1].setCoordinate(e),
                (this._distance = t.distance(e)),
                (this._isNull = !1);
            } else if (3 === arguments.length) {
              const t = arguments[0],
                e = arguments[1],
                n = arguments[2];
              this._pt[0].setCoordinate(t),
                this._pt[1].setCoordinate(e),
                (this._distance = n),
                (this._isNull = !1);
            }
          }
          toString() {
            return $t.toLineString(this._pt[0], this._pt[1]);
          }
          getDistance() {
            return this._distance;
          }
          setMaximum() {
            if (1 === arguments.length) {
              const t = arguments[0];
              this.setMaximum(t._pt[0], t._pt[1]);
            } else if (2 === arguments.length) {
              const t = arguments[0],
                e = arguments[1];
              if (this._isNull) return this.initialize(t, e), null;
              const n = t.distance(e);
              n > this._distance && this.initialize(t, e, n);
            }
          }
          getClass() {
            return ve;
          }
          get interfaces_() {
            return [];
          }
        }
        ve.constructor_ = function () {
          (this._pt = [new g(), new g()]),
            (this._distance = i.NaN),
            (this._isNull = !0);
        };
        class Oe {
          constructor() {
            Oe.constructor_.apply(this, arguments);
          }
          static computeDistance() {
            if (
              arguments[2] instanceof ve &&
              arguments[0] instanceof Rt &&
              arguments[1] instanceof g
            ) {
              const t = arguments[0],
                e = arguments[1],
                n = arguments[2],
                s = new ne(),
                i = t.getCoordinates();
              for (let r = 0; r < i.length - 1; r++) {
                s.setCoordinates(i[r], i[r + 1]);
                const t = s.closestPoint(e);
                n.setMinimum(t, e);
              }
            } else if (
              arguments[2] instanceof ve &&
              arguments[0] instanceof Mt &&
              arguments[1] instanceof g
            ) {
              const t = arguments[0],
                e = arguments[1],
                n = arguments[2];
              Oe.computeDistance(t.getExteriorRing(), e, n);
              for (let s = 0; s < t.getNumInteriorRing(); s++)
                Oe.computeDistance(t.getInteriorRingN(s), e, n);
            } else if (
              arguments[2] instanceof ve &&
              arguments[0] instanceof q &&
              arguments[1] instanceof g
            ) {
              const t = arguments[0],
                e = arguments[1],
                n = arguments[2];
              if (t instanceof Rt) Oe.computeDistance(t, e, n);
              else if (t instanceof Mt) Oe.computeDistance(t, e, n);
              else if (t instanceof pt) {
                const s = t;
                for (let t = 0; t < s.getNumGeometries(); t++) {
                  const i = s.getGeometryN(t);
                  Oe.computeDistance(i, e, n);
                }
              } else n.setMinimum(t.getCoordinate(), e);
            } else if (
              arguments[2] instanceof ve &&
              arguments[0] instanceof ne &&
              arguments[1] instanceof g
            ) {
              const t = arguments[1],
                e = arguments[2],
                n = arguments[0].closestPoint(t);
              e.setMinimum(n, t);
            }
          }
          getClass() {
            return Oe;
          }
          get interfaces_() {
            return [];
          }
        }
        Oe.constructor_ = function () {};
        class be {
          constructor() {
            be.constructor_.apply(this, arguments);
          }
          static distance() {
            if (2 === arguments.length)
              return new be(arguments[0], arguments[1]).distance();
            if (3 === arguments.length) {
              const t = arguments[2],
                e = new be(arguments[0], arguments[1]);
              return e.setDensifyFraction(t), e.distance();
            }
          }
          getCoordinates() {
            return this._ptDist.getCoordinates();
          }
          setDensifyFraction(t) {
            if (t > 1 || t <= 0)
              throw new n("Fraction is not in range (0.0 - 1.0]");
            this._densifyFrac = t;
          }
          compute(t, e) {
            this.computeOrientedDistance(t, e, this._ptDist),
              this.computeOrientedDistance(e, t, this._ptDist);
          }
          distance() {
            return this.compute(this._g0, this._g1), this._ptDist.getDistance();
          }
          computeOrientedDistance(t, e, n) {
            const s = new Me(e);
            if (
              (t.apply(s),
              n.setMaximum(s.getMaxPointDistance()),
              this._densifyFrac > 0)
            ) {
              const s = new De(e, this._densifyFrac);
              t.apply(s), n.setMaximum(s.getMaxPointDistance());
            }
          }
          orientedDistance() {
            return (
              this.computeOrientedDistance(this._g0, this._g1, this._ptDist),
              this._ptDist.getDistance()
            );
          }
          getClass() {
            return be;
          }
          get interfaces_() {
            return [];
          }
        }
        class Me {
          constructor() {
            Me.constructor_.apply(this, arguments);
          }
          filter(t) {
            this._minPtDist.initialize(),
              Oe.computeDistance(this._geom, t, this._minPtDist),
              this._maxPtDist.setMaximum(this._minPtDist);
          }
          getMaxPointDistance() {
            return this._maxPtDist;
          }
          getClass() {
            return Me;
          }
          get interfaces_() {
            return [B];
          }
        }
        Me.constructor_ = function () {
          (this._maxPtDist = new ve()),
            (this._minPtDist = new ve()),
            (this._euclideanDist = new Oe()),
            (this._geom = null);
          const t = arguments[0];
          this._geom = t;
        };
        class De {
          constructor() {
            De.constructor_.apply(this, arguments);
          }
          filter(t, e) {
            if (0 === e) return null;
            const n = t.getCoordinate(e - 1),
              s = t.getCoordinate(e),
              i = (s.x - n.x) / this._numSubSegs,
              r = (s.y - n.y) / this._numSubSegs;
            for (let o = 0; o < this._numSubSegs; o++) {
              const t = n.x + o * i,
                e = n.y + o * r,
                s = new g(t, e);
              this._minPtDist.initialize(),
                Oe.computeDistance(this._geom, s, this._minPtDist),
                this._maxPtDist.setMaximum(this._minPtDist);
            }
          }
          isDone() {
            return !1;
          }
          isGeometryChanged() {
            return !1;
          }
          getMaxPointDistance() {
            return this._maxPtDist;
          }
          getClass() {
            return De;
          }
          get interfaces_() {
            return [_t];
          }
        }
        (De.constructor_ = function () {
          (this._maxPtDist = new ve()),
            (this._minPtDist = new ve()),
            (this._geom = null),
            (this._numSubSegs = 0);
          const t = arguments[0],
            e = arguments[1];
          (this._geom = t), (this._numSubSegs = Math.trunc(Math.round(1 / e)));
        }),
          (be.MaxPointDistanceFilter = Me),
          (be.MaxDensifiedByFractionDistanceFilter = De),
          (be.constructor_ = function () {
            (this._g0 = null),
              (this._g1 = null),
              (this._ptDist = new ve()),
              (this._densifyFrac = 0);
            const t = arguments[0],
              e = arguments[1];
            (this._g0 = t), (this._g1 = e);
          });
        var Ae = Object.freeze({
          __proto__: null,
          DiscreteHausdorffDistance: be,
          DistanceToPoint: Oe,
          PointPairDistance: ve,
        });
        class Fe {
          constructor() {
            Fe.constructor_.apply(this, arguments);
          }
          visitItem(t) {}
          getClass() {
            return Fe;
          }
          get interfaces_() {
            return [];
          }
        }
        Fe.constructor_ = function () {};
        class Ge {
          constructor() {
            Ge.constructor_.apply(this, arguments);
          }
          locate(t) {}
          getClass() {
            return Ge;
          }
          get interfaces_() {
            return [];
          }
        }
        Ge.constructor_ = function () {};
        class qe {
          constructor() {
            qe.constructor_.apply(this, arguments);
          }
          getMin() {
            return this._min;
          }
          intersects(t, e) {
            return !(this._min > e || this._max < t);
          }
          getMax() {
            return this._max;
          }
          toString() {
            return $t.toLineString(new g(this._min, 0), new g(this._max, 0));
          }
          getClass() {
            return qe;
          }
          get interfaces_() {
            return [];
          }
        }
        class Be {
          constructor() {
            Be.constructor_.apply(this, arguments);
          }
          compare(t, e) {
            const n = t,
              s = e,
              i = (n._min + n._max) / 2,
              r = (s._min + s._max) / 2;
            return i < r ? -1 : i > r ? 1 : 0;
          }
          getClass() {
            return Be;
          }
          get interfaces_() {
            return [l];
          }
        }
        (Be.constructor_ = function () {}),
          (qe.NodeComparator = Be),
          (qe.constructor_ = function () {
            (this._min = i.POSITIVE_INFINITY),
              (this._max = i.NEGATIVE_INFINITY);
          });
        class Ve extends qe {
          constructor() {
            super(), Ve.constructor_.apply(this, arguments);
          }
          query(t, e, n) {
            if (!this.intersects(t, e)) return null;
            n.visitItem(this._item);
          }
          getClass() {
            return Ve;
          }
          get interfaces_() {
            return [];
          }
        }
        Ve.constructor_ = function () {
          this._item = null;
          const t = arguments[0],
            e = arguments[1],
            n = arguments[2];
          (this._min = t), (this._max = e), (this._item = n);
        };
        class ze extends qe {
          constructor() {
            super(), ze.constructor_.apply(this, arguments);
          }
          buildExtent(t, e) {
            (this._min = Math.min(t._min, e._min)),
              (this._max = Math.max(t._max, e._max));
          }
          query(t, e, n) {
            if (!this.intersects(t, e)) return null;
            null !== this._node1 && this._node1.query(t, e, n),
              null !== this._node2 && this._node2.query(t, e, n);
          }
          getClass() {
            return ze;
          }
          get interfaces_() {
            return [];
          }
        }
        ze.constructor_ = function () {
          (this._node1 = null), (this._node2 = null);
          const t = arguments[0],
            e = arguments[1];
          (this._node1 = t),
            (this._node2 = e),
            this.buildExtent(this._node1, this._node2);
        };
        class Ye {
          constructor() {
            Ye.constructor_.apply(this, arguments);
          }
          buildTree() {
            Ie.sort(this._leaves, new qe.NodeComparator());
            let t = this._leaves,
              e = null,
              n = new x();
            for (;;) {
              if ((this.buildLevel(t, n), 1 === n.size())) return n.get(0);
              (e = t), (t = n), (n = e);
            }
          }
          insert(t, e, n) {
            if (null !== this._root)
              throw new IllegalStateException(
                "Index cannot be added to once it has been queried"
              );
            this._leaves.add(new Ve(t, e, n));
          }
          query(t, e, n) {
            this.init(), this._root.query(t, e, n);
          }
          buildRoot() {
            if (null !== this._root) return null;
            this._root = this.buildTree();
          }
          printNode(t) {
            O.out.println(
              $t.toLineString(
                new g(t._min, this._level),
                new g(t._max, this._level)
              )
            );
          }
          init() {
            if (null !== this._root) return null;
            this.buildRoot();
          }
          buildLevel(t, e) {
            this._level++, e.clear();
            for (let n = 0; n < t.size(); n += 2) {
              const s = t.get(n);
              if (null === (n + 1 < t.size() ? t.get(n) : null)) e.add(s);
              else {
                const s = new ze(t.get(n), t.get(n + 1));
                e.add(s);
              }
            }
          }
          getClass() {
            return Ye;
          }
          get interfaces_() {
            return [];
          }
        }
        Ye.constructor_ = function () {
          (this._leaves = new x()), (this._root = null), (this._level = 0);
        };
        class Ue {
          constructor() {
            Ue.constructor_.apply(this, arguments);
          }
          visitItem(t) {
            this._items.add(t);
          }
          getItems() {
            return this._items;
          }
          getClass() {
            return Ue;
          }
          get interfaces_() {
            return [Fe];
          }
        }
        Ue.constructor_ = function () {
          this._items = new x();
        };
        class ke {
          constructor() {
            ke.constructor_.apply(this, arguments);
          }
          static locatePointInRing() {
            if (arguments[0] instanceof g && _(arguments[1], A)) {
              const t = arguments[1],
                e = new ke(arguments[0]),
                n = new g(),
                s = new g();
              for (let i = 1; i < t.size(); i++)
                if (
                  (t.getCoordinate(i, n),
                  t.getCoordinate(i - 1, s),
                  e.countSegment(n, s),
                  e.isOnSegment())
                )
                  return e.getLocation();
              return e.getLocation();
            }
            if (arguments[0] instanceof g && arguments[1] instanceof Array) {
              const t = arguments[1],
                e = new ke(arguments[0]);
              for (let n = 1; n < t.length; n++) {
                const s = t[n],
                  i = t[n - 1];
                if ((e.countSegment(s, i), e.isOnSegment()))
                  return e.getLocation();
              }
              return e.getLocation();
            }
          }
          countSegment(t, e) {
            if (t.x < this._p.x && e.x < this._p.x) return null;
            if (this._p.x === e.x && this._p.y === e.y)
              return (this._isPointOnSegment = !0), null;
            if (t.y === this._p.y && e.y === this._p.y) {
              let n = t.x,
                s = e.x;
              return (
                n > s && ((n = e.x), (s = t.x)),
                this._p.x >= n &&
                  this._p.x <= s &&
                  (this._isPointOnSegment = !0),
                null
              );
            }
            if (
              (t.y > this._p.y && e.y <= this._p.y) ||
              (e.y > this._p.y && t.y <= this._p.y)
            ) {
              let n = v.index(t, e, this._p);
              if (n === v.COLLINEAR) return (this._isPointOnSegment = !0), null;
              e.y < t.y && (n = -n), n === v.LEFT && this._crossingCount++;
            }
          }
          isPointInPolygon() {
            return this.getLocation() !== se.EXTERIOR;
          }
          getLocation() {
            return this._isPointOnSegment
              ? se.BOUNDARY
              : this._crossingCount % 2 == 1
              ? se.INTERIOR
              : se.EXTERIOR;
          }
          isOnSegment() {
            return this._isPointOnSegment;
          }
          getClass() {
            return ke;
          }
          get interfaces_() {
            return [];
          }
        }
        ke.constructor_ = function () {
          (this._p = null),
            (this._crossingCount = 0),
            (this._isPointOnSegment = !1);
          const t = arguments[0];
          this._p = t;
        };
        class Xe {
          constructor() {
            Xe.constructor_.apply(this, arguments);
          }
          locate(t) {
            const e = new ke(t),
              n = new He(e);
            return this._index.query(t.y, t.y, n), e.getLocation();
          }
          getClass() {
            return Xe;
          }
          get interfaces_() {
            return [Ge];
          }
        }
        class He {
          constructor() {
            He.constructor_.apply(this, arguments);
          }
          visitItem(t) {
            const e = t;
            this._counter.countSegment(e.getCoordinate(0), e.getCoordinate(1));
          }
          getClass() {
            return He;
          }
          get interfaces_() {
            return [Fe];
          }
        }
        He.constructor_ = function () {
          this._counter = null;
          const t = arguments[0];
          this._counter = t;
        };
        class We {
          constructor() {
            We.constructor_.apply(this, arguments);
          }
          init(t) {
            for (let e = Ee.getLines(t).iterator(); e.hasNext(); ) {
              const t = e.next().getCoordinates();
              this.addLine(t);
            }
          }
          addLine(t) {
            for (let e = 1; e < t.length; e++) {
              const n = new ne(t[e - 1], t[e]),
                s = Math.min(n.p0.y, n.p1.y),
                i = Math.max(n.p0.y, n.p1.y);
              this._index.insert(s, i, n);
            }
          }
          query() {
            if (2 === arguments.length) {
              const t = arguments[0],
                e = arguments[1],
                n = new Ue();
              return this._index.query(t, e, n), n.getItems();
            }
            if (3 === arguments.length) {
              const t = arguments[0],
                e = arguments[1],
                n = arguments[2];
              this._index.query(t, e, n);
            }
          }
          getClass() {
            return We;
          }
          get interfaces_() {
            return [];
          }
        }
        (We.constructor_ = function () {
          this._index = new Ye();
          const t = arguments[0];
          this.init(t);
        }),
          (Xe.SegmentVisitor = He),
          (Xe.IntervalIndexedGeometry = We),
          (Xe.constructor_ = function () {
            this._index = null;
            const t = arguments[0];
            if (!(_(t, bt) || t instanceof At))
              throw new n("Argument must be Polygonal or LinearRing");
            this._index = new We(t);
          });
        class je {
          constructor() {
            je.constructor_.apply(this, arguments);
          }
          static isOnLine() {
            if (arguments[0] instanceof g && _(arguments[1], A)) {
              const t = arguments[0],
                e = arguments[1],
                n = new ee(),
                s = new g(),
                i = new g(),
                r = e.size();
              for (let o = 1; o < r; o++)
                if (
                  (e.getCoordinate(o - 1, s),
                  e.getCoordinate(o, i),
                  n.computeIntersection(t, s, i),
                  n.hasIntersection())
                )
                  return !0;
              return !1;
            }
            if (arguments[0] instanceof g && arguments[1] instanceof Array) {
              const t = arguments[0],
                e = arguments[1],
                n = new ee();
              for (let s = 1; s < e.length; s++) {
                const i = e[s - 1],
                  r = e[s];
                if ((n.computeIntersection(t, i, r), n.hasIntersection()))
                  return !0;
              }
              return !1;
            }
          }
          static locateInRing(t, e) {
            return ke.locatePointInRing(t, e);
          }
          static isInRing(t, e) {
            return je.locateInRing(t, e) !== se.EXTERIOR;
          }
          getClass() {
            return je;
          }
          get interfaces_() {
            return [];
          }
        }
        function Ke() {}
        (je.constructor_ = function () {}),
          (Ke.prototype.hasNext = function () {}),
          (Ke.prototype.next = function () {}),
          (Ke.prototype.remove = function () {});
        class Ze {
          constructor() {
            Ze.constructor_.apply(this, arguments);
          }
          static isAtomic(t) {
            return !(t instanceof pt);
          }
          next() {
            if (this._atStart)
              return (
                (this._atStart = !1),
                Ze.isAtomic(this._parent) && this._index++,
                this._parent
              );
            if (null !== this._subcollectionIterator) {
              if (this._subcollectionIterator.hasNext())
                return this._subcollectionIterator.next();
              this._subcollectionIterator = null;
            }
            if (this._index >= this._max) throw new y();
            const t = this._parent.getGeometryN(this._index++);
            return t instanceof pt
              ? ((this._subcollectionIterator = new Ze(t)),
                this._subcollectionIterator.next())
              : t;
          }
          remove() {
            throw new UnsupportedOperationException(this.getClass().getName());
          }
          hasNext() {
            if (this._atStart) return !0;
            if (null !== this._subcollectionIterator) {
              if (this._subcollectionIterator.hasNext()) return !0;
              this._subcollectionIterator = null;
            }
            return !(this._index >= this._max);
          }
          getClass() {
            return Ze;
          }
          get interfaces_() {
            return [Ke];
          }
        }
        Ze.constructor_ = function () {
          (this._parent = null),
            (this._atStart = null),
            (this._max = null),
            (this._index = null),
            (this._subcollectionIterator = null);
          const t = arguments[0];
          (this._parent = t),
            (this._atStart = !0),
            (this._index = 0),
            (this._max = t.getNumGeometries());
        };
        class Qe {
          constructor() {
            Qe.constructor_.apply(this, arguments);
          }
          static locatePointInPolygon(t, e) {
            if (e.isEmpty()) return se.EXTERIOR;
            const n = e.getExteriorRing(),
              s = Qe.locatePointInRing(t, n);
            if (s !== se.INTERIOR) return s;
            for (let i = 0; i < e.getNumInteriorRing(); i++) {
              const n = e.getInteriorRingN(i),
                s = Qe.locatePointInRing(t, n);
              if (s === se.BOUNDARY) return se.BOUNDARY;
              if (s === se.INTERIOR) return se.EXTERIOR;
            }
            return se.INTERIOR;
          }
          static locatePointInRing(t, e) {
            return e.getEnvelopeInternal().intersects(t)
              ? je.locateInRing(t, e.getCoordinates())
              : se.EXTERIOR;
          }
          static containsPointInPolygon(t, e) {
            return se.EXTERIOR !== Qe.locatePointInPolygon(t, e);
          }
          static locateInGeometry(t, e) {
            if (e instanceof Mt) return Qe.locatePointInPolygon(t, e);
            if (e instanceof pt) {
              const n = new Ze(e);
              for (; n.hasNext(); ) {
                const s = n.next();
                if (s !== e) {
                  const e = Qe.locateInGeometry(t, s);
                  if (e !== se.EXTERIOR) return e;
                }
              }
            }
            return se.EXTERIOR;
          }
          static locate(t, e) {
            return e.isEmpty() ? se.EXTERIOR : Qe.locateInGeometry(t, e);
          }
          locate(t) {
            return Qe.locate(t, this._geom);
          }
          getClass() {
            return Qe;
          }
          get interfaces_() {
            return [Ge];
          }
        }
        Qe.constructor_ = function () {
          this._geom = null;
          const t = arguments[0];
          this._geom = t;
        };
        var Je = Object.freeze({
          __proto__: null,
          IndexedPointInAreaLocator: Xe,
          PointOnGeometryLocator: Ge,
          SimplePointInAreaLocator: Qe,
        });
        class $e {
          constructor() {
            $e.constructor_.apply(this, arguments);
          }
          measure(t, e) {}
          getClass() {
            return $e;
          }
          get interfaces_() {
            return [];
          }
        }
        $e.constructor_ = function () {};
        class tn {
          constructor() {
            tn.constructor_.apply(this, arguments);
          }
          measure(t, e) {
            return t.intersection(e).getArea() / t.union(e).getArea();
          }
          getClass() {
            return tn;
          }
          get interfaces_() {
            return [$e];
          }
        }
        tn.constructor_ = function () {};
        class en {
          constructor() {
            en.constructor_.apply(this, arguments);
          }
          static diagonalSize(t) {
            if (t.isNull()) return 0;
            const e = t.getWidth(),
              n = t.getHeight();
            return Math.sqrt(e * e + n * n);
          }
          measure(t, e) {
            const n = be.distance(t, e, en.DENSIFY_FRACTION),
              s = new N(t.getEnvelopeInternal());
            return (
              s.expandToInclude(e.getEnvelopeInternal()),
              1 - n / en.diagonalSize(s)
            );
          }
          getClass() {
            return en;
          }
          get interfaces_() {
            return [$e];
          }
        }
        (en.constructor_ = function () {}), (en.DENSIFY_FRACTION = 0.25);
        class nn {
          constructor() {
            nn.constructor_.apply(this, arguments);
          }
          static combine(t, e) {
            return Math.min(t, e);
          }
          getClass() {
            return nn;
          }
          get interfaces_() {
            return [];
          }
        }
        nn.constructor_ = function () {};
        var sn = Object.freeze({
          __proto__: null,
          AreaSimilarityMeasure: tn,
          HausdorffSimilarityMeasure: en,
          SimilarityMeasure: $e,
          SimilarityMeasureCombiner: nn,
        });
        class rn {
          constructor() {
            rn.constructor_.apply(this, arguments);
          }
          static area2(t, e, n) {
            return (e.x - t.x) * (n.y - t.y) - (n.x - t.x) * (e.y - t.y);
          }
          static centroid3(t, e, n, s) {
            return (s.x = t.x + e.x + n.x), (s.y = t.y + e.y + n.y), null;
          }
          static getCentroid(t) {
            return new rn(t).getCentroid();
          }
          setAreaBasePoint(t) {
            this._areaBasePt = t;
          }
          addPoint(t) {
            (this._ptCount += 1),
              (this._ptCentSum.x += t.x),
              (this._ptCentSum.y += t.y);
          }
          addLineSegments(t) {
            let e = 0;
            for (let n = 0; n < t.length - 1; n++) {
              const s = t[n].distance(t[n + 1]);
              if (0 === s) continue;
              e += s;
              const i = (t[n].x + t[n + 1].x) / 2;
              this._lineCentSum.x += s * i;
              const r = (t[n].y + t[n + 1].y) / 2;
              this._lineCentSum.y += s * r;
            }
            (this._totalLength += e),
              0 === e && t.length > 0 && this.addPoint(t[0]);
          }
          addHole(t) {
            const e = v.isCCW(t);
            for (let n = 0; n < t.length - 1; n++)
              this.addTriangle(this._areaBasePt, t[n], t[n + 1], e);
            this.addLineSegments(t);
          }
          getCentroid() {
            const t = new g();
            if (Math.abs(this._areasum2) > 0)
              (t.x = this._cg3.x / 3 / this._areasum2),
                (t.y = this._cg3.y / 3 / this._areasum2);
            else if (this._totalLength > 0)
              (t.x = this._lineCentSum.x / this._totalLength),
                (t.y = this._lineCentSum.y / this._totalLength);
            else {
              if (!(this._ptCount > 0)) return null;
              (t.x = this._ptCentSum.x / this._ptCount),
                (t.y = this._ptCentSum.y / this._ptCount);
            }
            return t;
          }
          addShell(t) {
            t.length > 0 && this.setAreaBasePoint(t[0]);
            const e = !v.isCCW(t);
            for (let n = 0; n < t.length - 1; n++)
              this.addTriangle(this._areaBasePt, t[n], t[n + 1], e);
            this.addLineSegments(t);
          }
          addTriangle(t, e, n, s) {
            const i = s ? 1 : -1;
            rn.centroid3(t, e, n, this._triangleCent3);
            const r = rn.area2(t, e, n);
            (this._cg3.x += i * r * this._triangleCent3.x),
              (this._cg3.y += i * r * this._triangleCent3.y),
              (this._areasum2 += i * r);
          }
          add() {
            if (arguments[0] instanceof Mt) {
              const t = arguments[0];
              this.addShell(t.getExteriorRing().getCoordinates());
              for (let e = 0; e < t.getNumInteriorRing(); e++)
                this.addHole(t.getInteriorRingN(e).getCoordinates());
            } else if (arguments[0] instanceof q) {
              const t = arguments[0];
              if (t.isEmpty()) return null;
              if (t instanceof vt) this.addPoint(t.getCoordinate());
              else if (t instanceof Rt)
                this.addLineSegments(t.getCoordinates());
              else if (t instanceof Mt) {
                const e = t;
                this.add(e);
              } else if (t instanceof pt) {
                const e = t;
                for (let t = 0; t < e.getNumGeometries(); t++)
                  this.add(e.getGeometryN(t));
              }
            }
          }
          getClass() {
            return rn;
          }
          get interfaces_() {
            return [];
          }
        }
        function on(t) {
          this.message = t || "";
        }
        function ln() {
          this.array_ = [];
        }
        (rn.constructor_ = function () {
          (this._areaBasePt = null),
            (this._triangleCent3 = new g()),
            (this._areasum2 = 0),
            (this._cg3 = new g()),
            (this._lineCentSum = new g()),
            (this._totalLength = 0),
            (this._ptCount = 0),
            (this._ptCentSum = new g());
          const t = arguments[0];
          (this._areaBasePt = null), this.add(t);
        }),
          (on.prototype = new Error()),
          (on.prototype.name = "EmptyStackException"),
          (ln.prototype = new m()),
          (ln.prototype.add = function (t) {
            return this.array_.push(t), !0;
          }),
          (ln.prototype.get = function (t) {
            if (t < 0 || t >= this.size()) throw new f();
            return this.array_[t];
          }),
          (ln.prototype.push = function (t) {
            return this.array_.push(t), t;
          }),
          (ln.prototype.pop = function (t) {
            if (0 === this.array_.length) throw new on();
            return this.array_.pop();
          }),
          (ln.prototype.peek = function () {
            if (0 === this.array_.length) throw new on();
            return this.array_[this.array_.length - 1];
          }),
          (ln.prototype.empty = function () {
            return 0 === this.array_.length;
          }),
          (ln.prototype.isEmpty = function () {
            return this.empty();
          }),
          (ln.prototype.search = function (t) {
            return this.array_.indexOf(t);
          }),
          (ln.prototype.size = function () {
            return this.array_.length;
          }),
          (ln.prototype.toArray = function () {
            for (var t = [], e = 0, n = this.array_.length; e < n; e++)
              t.push(this.array_[e]);
            return t;
          });
        class an {
          constructor() {
            an.constructor_.apply(this, arguments);
          }
          static filterCoordinates(t) {
            const e = new an();
            for (let n = 0; n < t.length; n++) e.filter(t[n]);
            return e.getCoordinates();
          }
          filter(t) {
            this.treeSet.contains(t) || (this.list.add(t), this.treeSet.add(t));
          }
          getCoordinates() {
            const t = new Array(this.list.size()).fill(null);
            return this.list.toArray(t);
          }
          getClass() {
            return an;
          }
          get interfaces_() {
            return [B];
          }
        }
        an.constructor_ = function () {
          (this.treeSet = new ct()), (this.list = new x());
        };
        class cn {
          constructor() {
            cn.constructor_.apply(this, arguments);
          }
          static extractCoordinates(t) {
            const e = new an();
            return t.apply(e), e.getCoordinates();
          }
          preSort(t) {
            let e = null;
            for (let n = 1; n < t.length; n++)
              (t[n].y < t[0].y || (t[n].y === t[0].y && t[n].x < t[0].x)) &&
                ((e = t[0]), (t[0] = t[n]), (t[n] = e));
            return ut.sort(t, 1, t.length, new hn(t[0])), t;
          }
          computeOctRing(t) {
            const e = this.computeOctPts(t),
              n = new I();
            return (
              n.add(e, !1),
              n.size() < 3 ? null : (n.closeRing(), n.toCoordinateArray())
            );
          }
          lineOrPolygon(t) {
            if (3 === (t = this.cleanRing(t)).length)
              return this._geomFactory.createLineString([t[0], t[1]]);
            const e = this._geomFactory.createLinearRing(t);
            return this._geomFactory.createPolygon(e);
          }
          cleanRing(t) {
            u.equals(t[0], t[t.length - 1]);
            const e = new x();
            let n = null;
            for (let i = 0; i <= t.length - 2; i++) {
              const s = t[i],
                r = t[i + 1];
              s.equals(r) ||
                (null !== n && this.isBetween(n, s, r)) ||
                (e.add(s), (n = s));
            }
            e.add(t[t.length - 1]);
            const s = new Array(e.size()).fill(null);
            return e.toArray(s);
          }
          isBetween(t, e, n) {
            if (0 !== v.index(t, e, n)) return !1;
            if (t.x !== n.x) {
              if (t.x <= e.x && e.x <= n.x) return !0;
              if (n.x <= e.x && e.x <= t.x) return !0;
            }
            if (t.y !== n.y) {
              if (t.y <= e.y && e.y <= n.y) return !0;
              if (n.y <= e.y && e.y <= t.y) return !0;
            }
            return !1;
          }
          reduce(t) {
            const e = this.computeOctRing(t);
            if (null === e) return t;
            const n = new ct();
            for (let i = 0; i < e.length; i++) n.add(e[i]);
            for (let i = 0; i < t.length; i++)
              je.isInRing(t[i], e) || n.add(t[i]);
            const s = X.toCoordinateArray(n);
            return s.length < 3 ? this.padArray3(s) : s;
          }
          getConvexHull() {
            if (0 === this._inputPts.length)
              return this._geomFactory.createGeometryCollection();
            if (1 === this._inputPts.length)
              return this._geomFactory.createPoint(this._inputPts[0]);
            if (2 === this._inputPts.length)
              return this._geomFactory.createLineString(this._inputPts);
            let t = this._inputPts;
            this._inputPts.length > 50 && (t = this.reduce(this._inputPts));
            const e = this.preSort(t),
              n = this.grahamScan(e),
              s = this.toCoordinateArray(n);
            return this.lineOrPolygon(s);
          }
          padArray3(t) {
            const e = new Array(3).fill(null);
            for (let n = 0; n < e.length; n++)
              n < t.length ? (e[n] = t[n]) : (e[n] = t[0]);
            return e;
          }
          computeOctPts(t) {
            const e = new Array(8).fill(null);
            for (let n = 0; n < e.length; n++) e[n] = t[0];
            for (let n = 1; n < t.length; n++)
              t[n].x < e[0].x && (e[0] = t[n]),
                t[n].x - t[n].y < e[1].x - e[1].y && (e[1] = t[n]),
                t[n].y > e[2].y && (e[2] = t[n]),
                t[n].x + t[n].y > e[3].x + e[3].y && (e[3] = t[n]),
                t[n].x > e[4].x && (e[4] = t[n]),
                t[n].x - t[n].y > e[5].x - e[5].y && (e[5] = t[n]),
                t[n].y < e[6].y && (e[6] = t[n]),
                t[n].x + t[n].y < e[7].x + e[7].y && (e[7] = t[n]);
            return e;
          }
          toCoordinateArray(t) {
            const e = new Array(t.size()).fill(null);
            for (let n = 0; n < t.size(); n++) {
              const s = t.get(n);
              e[n] = s;
            }
            return e;
          }
          grahamScan(t) {
            let e = null;
            const n = new ln();
            n.push(t[0]), n.push(t[1]), n.push(t[2]);
            for (let s = 3; s < t.length; s++) {
              for (e = n.pop(); !n.empty() && v.index(n.peek(), e, t[s]) > 0; )
                e = n.pop();
              n.push(e), n.push(t[s]);
            }
            return n.push(t[0]), n;
          }
          getClass() {
            return cn;
          }
          get interfaces_() {
            return [];
          }
        }
        class hn {
          constructor() {
            hn.constructor_.apply(this, arguments);
          }
          static polarCompare(t, e, n) {
            const s = e.x - t.x,
              i = e.y - t.y,
              r = n.x - t.x,
              o = n.y - t.y,
              l = v.index(t, e, n);
            if (l === v.COUNTERCLOCKWISE) return 1;
            if (l === v.CLOCKWISE) return -1;
            const a = s * s + i * i,
              c = r * r + o * o;
            return a < c ? -1 : a > c ? 1 : 0;
          }
          compare(t, e) {
            const n = t,
              s = e;
            return hn.polarCompare(this._origin, n, s);
          }
          getClass() {
            return hn;
          }
          get interfaces_() {
            return [l];
          }
        }
        (hn.constructor_ = function () {
          this._origin = null;
          const t = arguments[0];
          this._origin = t;
        }),
          (cn.RadialComparator = hn),
          (cn.constructor_ = function () {
            if (
              ((this._geomFactory = null),
              (this._inputPts = null),
              1 === arguments.length)
            ) {
              const t = arguments[0];
              cn.constructor_.call(
                this,
                cn.extractCoordinates(t),
                t.getFactory()
              );
            } else if (2 === arguments.length) {
              const t = arguments[0],
                e = arguments[1];
              (this._inputPts = an.filterCoordinates(t)),
                (this._geomFactory = e);
            }
          });
        class un {
          constructor() {
            un.constructor_.apply(this, arguments);
          }
          static centre(t) {
            return new g(
              un.avg(t.getMinX(), t.getMaxX()),
              un.avg(t.getMinY(), t.getMaxY())
            );
          }
          static avg(t, e) {
            return (t + e) / 2;
          }
          addPolygon(t) {
            if (t.isEmpty()) return null;
            let e = null,
              n = null;
            const s = this.horizontalBisector(t);
            if (0 === s.getLength()) (n = 0), (e = s.getCoordinate());
            else {
              const i = s.intersection(t),
                r = this.widestGeometry(i);
              (n = r.getEnvelopeInternal().getWidth()),
                (e = un.centre(r.getEnvelopeInternal()));
            }
            (null === this._interiorPoint || n > this._maxWidth) &&
              ((this._interiorPoint = e), (this._maxWidth = n));
          }
          getInteriorPoint() {
            return this._interiorPoint;
          }
          widestGeometry() {
            if (arguments[0] instanceof pt) {
              const t = arguments[0];
              if (t.isEmpty()) return t;
              let e = t.getGeometryN(0);
              for (let n = 1; n < t.getNumGeometries(); n++)
                t.getGeometryN(n).getEnvelopeInternal().getWidth() >
                  e.getEnvelopeInternal().getWidth() && (e = t.getGeometryN(n));
              return e;
            }
            if (arguments[0] instanceof q) {
              const t = arguments[0];
              return t instanceof pt ? this.widestGeometry(t) : t;
            }
          }
          horizontalBisector(t) {
            const e = t.getEnvelopeInternal(),
              n = gn.getBisectorY(t);
            return this._factory.createLineString([
              new g(e.getMinX(), n),
              new g(e.getMaxX(), n),
            ]);
          }
          add(t) {
            if (t instanceof Mt) this.addPolygon(t);
            else if (t instanceof pt) {
              const e = t;
              for (let t = 0; t < e.getNumGeometries(); t++)
                this.add(e.getGeometryN(t));
            }
          }
          getClass() {
            return un;
          }
          get interfaces_() {
            return [];
          }
        }
        class gn {
          constructor() {
            gn.constructor_.apply(this, arguments);
          }
          static getBisectorY(t) {
            return new gn(t).getBisectorY();
          }
          updateInterval(t) {
            t <= this._centreY
              ? t > this._loY && (this._loY = t)
              : t > this._centreY && t < this._hiY && (this._hiY = t);
          }
          getBisectorY() {
            this.process(this._poly.getExteriorRing());
            for (let t = 0; t < this._poly.getNumInteriorRing(); t++)
              this.process(this._poly.getInteriorRingN(t));
            return un.avg(this._hiY, this._loY);
          }
          process(t) {
            const e = t.getCoordinateSequence();
            for (let n = 0; n < e.size(); n++) {
              const t = e.getY(n);
              this.updateInterval(t);
            }
          }
          getClass() {
            return gn;
          }
          get interfaces_() {
            return [];
          }
        }
        (gn.constructor_ = function () {
          (this._poly = null),
            (this._centreY = null),
            (this._hiY = i.MAX_VALUE),
            (this._loY = -i.MAX_VALUE);
          const t = arguments[0];
          (this._poly = t),
            (this._hiY = t.getEnvelopeInternal().getMaxY()),
            (this._loY = t.getEnvelopeInternal().getMinY()),
            (this._centreY = un.avg(this._loY, this._hiY));
        }),
          (un.SafeBisectorFinder = gn),
          (un.constructor_ = function () {
            (this._factory = null),
              (this._interiorPoint = null),
              (this._maxWidth = 0);
            const t = arguments[0];
            (this._factory = t.getFactory()), this.add(t);
          });
        class dn {
          constructor() {
            dn.constructor_.apply(this, arguments);
          }
          addEndpoints() {
            if (arguments[0] instanceof q) {
              const t = arguments[0];
              if (t instanceof Rt) this.addEndpoints(t.getCoordinates());
              else if (t instanceof pt) {
                const e = t;
                for (let t = 0; t < e.getNumGeometries(); t++)
                  this.addEndpoints(e.getGeometryN(t));
              }
            } else if (arguments[0] instanceof Array) {
              const t = arguments[0];
              this.add(t[0]), this.add(t[t.length - 1]);
            }
          }
          getInteriorPoint() {
            return this._interiorPoint;
          }
          addInterior() {
            if (arguments[0] instanceof q) {
              const t = arguments[0];
              if (t instanceof Rt) this.addInterior(t.getCoordinates());
              else if (t instanceof pt) {
                const e = t;
                for (let t = 0; t < e.getNumGeometries(); t++)
                  this.addInterior(e.getGeometryN(t));
              }
            } else if (arguments[0] instanceof Array) {
              const t = arguments[0];
              for (let e = 1; e < t.length - 1; e++) this.add(t[e]);
            }
          }
          add(t) {
            const e = t.distance(this._centroid);
            e < this._minDistance &&
              ((this._interiorPoint = new g(t)), (this._minDistance = e));
          }
          getClass() {
            return dn;
          }
          get interfaces_() {
            return [];
          }
        }
        dn.constructor_ = function () {
          (this._centroid = null),
            (this._minDistance = i.MAX_VALUE),
            (this._interiorPoint = null);
          const t = arguments[0];
          t.isEmpty()
            ? (this._centroid = new g())
            : (this._centroid = rn.getCentroid(t)),
            this.addInterior(t),
            null === this._interiorPoint && this.addEndpoints(t);
        };
        class _n {
          constructor() {
            _n.constructor_.apply(this, arguments);
          }
          getInteriorPoint() {
            return this._interiorPoint;
          }
          add() {
            if (arguments[0] instanceof q) {
              const t = arguments[0];
              if (t instanceof vt) this.add(t.getCoordinate());
              else if (t instanceof pt) {
                const e = t;
                for (let t = 0; t < e.getNumGeometries(); t++)
                  this.add(e.getGeometryN(t));
              }
            } else if (arguments[0] instanceof g) {
              const t = arguments[0],
                e = t.distance(this._centroid);
              e < this._minDistance &&
                ((this._interiorPoint = new g(t)), (this._minDistance = e));
            }
          }
          getClass() {
            return _n;
          }
          get interfaces_() {
            return [];
          }
        }
        _n.constructor_ = function () {
          (this._centroid = null),
            (this._minDistance = i.MAX_VALUE),
            (this._interiorPoint = null);
          const t = arguments[0];
          (this._centroid = t.getCentroid().getCoordinate()), this.add(t);
        };
        class pn {
          constructor() {
            pn.constructor_.apply(this, arguments);
          }
          locateInPolygonRing(t, e) {
            return e.getEnvelopeInternal().intersects(t)
              ? je.locateInRing(t, e.getCoordinates())
              : se.EXTERIOR;
          }
          intersects(t, e) {
            return this.locate(t, e) !== se.EXTERIOR;
          }
          updateLocationInfo(t) {
            t === se.INTERIOR && (this._isIn = !0),
              t === se.BOUNDARY && this._numBoundaries++;
          }
          computeLocation(t, e) {
            if (
              (e instanceof vt &&
                this.updateLocationInfo(this.locateOnPoint(t, e)),
              e instanceof Rt)
            )
              this.updateLocationInfo(this.locateOnLineString(t, e));
            else if (e instanceof Mt)
              this.updateLocationInfo(this.locateInPolygon(t, e));
            else if (e instanceof ft) {
              const n = e;
              for (let e = 0; e < n.getNumGeometries(); e++) {
                const s = n.getGeometryN(e);
                this.updateLocationInfo(this.locateOnLineString(t, s));
              }
            } else if (e instanceof Ft) {
              const n = e;
              for (let e = 0; e < n.getNumGeometries(); e++) {
                const s = n.getGeometryN(e);
                this.updateLocationInfo(this.locateInPolygon(t, s));
              }
            } else if (e instanceof pt) {
              const n = new Ze(e);
              for (; n.hasNext(); ) {
                const s = n.next();
                s !== e && this.computeLocation(t, s);
              }
            }
          }
          locateOnPoint(t, e) {
            return e.getCoordinate().equals2D(t) ? se.INTERIOR : se.EXTERIOR;
          }
          locateOnLineString(t, e) {
            if (!e.getEnvelopeInternal().intersects(t)) return se.EXTERIOR;
            const n = e.getCoordinateSequence();
            return e.isClosed() ||
              (!t.equals(n.getCoordinate(0)) &&
                !t.equals(n.getCoordinate(n.size() - 1)))
              ? je.isOnLine(t, n)
                ? se.INTERIOR
                : se.EXTERIOR
              : se.BOUNDARY;
          }
          locateInPolygon(t, e) {
            if (e.isEmpty()) return se.EXTERIOR;
            const n = e.getExteriorRing(),
              s = this.locateInPolygonRing(t, n);
            if (s === se.EXTERIOR) return se.EXTERIOR;
            if (s === se.BOUNDARY) return se.BOUNDARY;
            for (let i = 0; i < e.getNumInteriorRing(); i++) {
              const n = e.getInteriorRingN(i),
                s = this.locateInPolygonRing(t, n);
              if (s === se.INTERIOR) return se.EXTERIOR;
              if (s === se.BOUNDARY) return se.BOUNDARY;
            }
            return se.INTERIOR;
          }
          locate(t, e) {
            return e.isEmpty()
              ? se.EXTERIOR
              : e instanceof Rt
              ? this.locateOnLineString(t, e)
              : e instanceof Mt
              ? this.locateInPolygon(t, e)
              : ((this._isIn = !1),
                (this._numBoundaries = 0),
                this.computeLocation(t, e),
                this._boundaryRule.isInBoundary(this._numBoundaries)
                  ? se.BOUNDARY
                  : this._numBoundaries > 0 || this._isIn
                  ? se.INTERIOR
                  : se.EXTERIOR);
          }
          getClass() {
            return pn;
          }
          get interfaces_() {
            return [];
          }
        }
        pn.constructor_ = function () {
          if (
            ((this._boundaryRule = V.OGC_SFS_BOUNDARY_RULE),
            (this._isIn = null),
            (this._numBoundaries = null),
            0 === arguments.length)
          );
          else if (1 === arguments.length) {
            const t = arguments[0];
            if (null === t) throw new n("Rule must be non-null");
            this._boundaryRule = t;
          }
        };
        class fn {
          constructor() {
            fn.constructor_.apply(this, arguments);
          }
          static pointWitMinAngleWithX(t, e) {
            let n = i.MAX_VALUE,
              s = null;
            for (let i = 0; i < t.length; i++) {
              const r = t[i];
              if (r === e) continue;
              const o = r.x - e.x;
              let l = r.y - e.y;
              l < 0 && (l = -l);
              const a = l / Math.sqrt(o * o + l * l);
              a < n && ((n = a), (s = r));
            }
            return s;
          }
          static lowestPoint(t) {
            let e = t[0];
            for (let n = 1; n < t.length; n++) t[n].y < e.y && (e = t[n]);
            return e;
          }
          static pointWithMinAngleWithSegment(t, e, n) {
            let s = i.MAX_VALUE,
              r = null;
            for (let i = 0; i < t.length; i++) {
              const o = t[i];
              if (o === e) continue;
              if (o === n) continue;
              const l = re.angleBetween(e, o, n);
              l < s && ((s = l), (r = o));
            }
            return r;
          }
          getRadius() {
            return this.compute(), this._radius;
          }
          getDiameter() {
            switch ((this.compute(), this._extremalPts.length)) {
              case 0:
                return this._input.getFactory().createLineString();
              case 1:
                return this._input.getFactory().createPoint(this._centre);
            }
            const t = this._extremalPts[0],
              e = this._extremalPts[1];
            return this._input.getFactory().createLineString([t, e]);
          }
          getExtremalPoints() {
            return this.compute(), this._extremalPts;
          }
          computeCirclePoints() {
            if (this._input.isEmpty())
              return (this._extremalPts = new Array(0).fill(null)), null;
            if (1 === this._input.getNumPoints()) {
              const t = this._input.getCoordinates();
              return (this._extremalPts = [new g(t[0])]), null;
            }
            const t = this._input.convexHull().getCoordinates();
            let e = t;
            if (
              (t[0].equals2D(t[t.length - 1]) &&
                ((e = new Array(t.length - 1).fill(null)),
                X.copyDeep(t, 0, e, 0, t.length - 1)),
              e.length <= 2)
            )
              return (this._extremalPts = X.copyDeep(e)), null;
            let n = fn.lowestPoint(e),
              s = fn.pointWitMinAngleWithX(e, n);
            for (let i = 0; i < e.length; i++) {
              const t = fn.pointWithMinAngleWithSegment(e, n, s);
              if (re.isObtuse(n, t, s))
                return (this._extremalPts = [new g(n), new g(s)]), null;
              if (re.isObtuse(t, n, s)) n = t;
              else {
                if (!re.isObtuse(t, s, n))
                  return (
                    (this._extremalPts = [new g(n), new g(s), new g(t)]), null
                  );
                s = t;
              }
            }
            u.shouldNeverReachHere(
              "Logic failure in Minimum Bounding Circle algorithm!"
            );
          }
          compute() {
            if (null !== this._extremalPts) return null;
            this.computeCirclePoints(),
              this.computeCentre(),
              null !== this._centre &&
                (this._radius = this._centre.distance(this._extremalPts[0]));
          }
          getFarthestPoints() {
            switch ((this.compute(), this._extremalPts.length)) {
              case 0:
                return this._input.getFactory().createLineString();
              case 1:
                return this._input.getFactory().createPoint(this._centre);
            }
            const t = this._extremalPts[0],
              e = this._extremalPts[this._extremalPts.length - 1];
            return this._input.getFactory().createLineString([t, e]);
          }
          getCircle() {
            if ((this.compute(), null === this._centre))
              return this._input.getFactory().createPolygon();
            const t = this._input.getFactory().createPoint(this._centre);
            return 0 === this._radius ? t : t.buffer(this._radius);
          }
          getCentre() {
            return this.compute(), this._centre;
          }
          computeCentre() {
            switch (this._extremalPts.length) {
              case 0:
                this._centre = null;
                break;
              case 1:
                this._centre = this._extremalPts[0];
                break;
              case 2:
                this._centre = new g(
                  (this._extremalPts[0].x + this._extremalPts[1].x) / 2,
                  (this._extremalPts[0].y + this._extremalPts[1].y) / 2
                );
                break;
              case 3:
                this._centre = oe.circumcentre(
                  this._extremalPts[0],
                  this._extremalPts[1],
                  this._extremalPts[2]
                );
            }
          }
          getClass() {
            return fn;
          }
          get interfaces_() {
            return [];
          }
        }
        fn.constructor_ = function () {
          (this._input = null),
            (this._extremalPts = null),
            (this._centre = null),
            (this._radius = 0);
          const t = arguments[0];
          this._input = t;
        };
        class mn {
          constructor() {
            mn.constructor_.apply(this, arguments);
          }
          static nextIndex(t, e) {
            return ++e >= t.length && (e = 0), e;
          }
          static computeC(t, e, n) {
            return t * n.y - e * n.x;
          }
          static getMinimumDiameter(t) {
            return new mn(t).getDiameter();
          }
          static getMinimumRectangle(t) {
            return new mn(t).getMinimumRectangle();
          }
          static computeSegmentForLine(t, e, n) {
            let s = null,
              i = null;
            return (
              Math.abs(e) > Math.abs(t)
                ? ((s = new g(0, n / e)), (i = new g(1, n / e - t / e)))
                : ((s = new g(n / t, 0)), (i = new g(n / t - e / t, 1))),
              new ne(s, i)
            );
          }
          getWidthCoordinate() {
            return this.computeMinimumDiameter(), this._minWidthPt;
          }
          getSupportingSegment() {
            return (
              this.computeMinimumDiameter(),
              this._inputGeom
                .getFactory()
                .createLineString([this._minBaseSeg.p0, this._minBaseSeg.p1])
            );
          }
          getDiameter() {
            if ((this.computeMinimumDiameter(), null === this._minWidthPt))
              return this._inputGeom.getFactory().createLineString();
            const t = this._minBaseSeg.project(this._minWidthPt);
            return this._inputGeom
              .getFactory()
              .createLineString([t, this._minWidthPt]);
          }
          computeWidthConvex(t) {
            (this._convexHullPts =
              t instanceof Mt
                ? t.getExteriorRing().getCoordinates()
                : t.getCoordinates()),
              0 === this._convexHullPts.length
                ? ((this._minWidth = 0),
                  (this._minWidthPt = null),
                  (this._minBaseSeg = null))
                : 1 === this._convexHullPts.length
                ? ((this._minWidth = 0),
                  (this._minWidthPt = this._convexHullPts[0]),
                  (this._minBaseSeg.p0 = this._convexHullPts[0]),
                  (this._minBaseSeg.p1 = this._convexHullPts[0]))
                : 2 === this._convexHullPts.length ||
                  3 === this._convexHullPts.length
                ? ((this._minWidth = 0),
                  (this._minWidthPt = this._convexHullPts[0]),
                  (this._minBaseSeg.p0 = this._convexHullPts[0]),
                  (this._minBaseSeg.p1 = this._convexHullPts[1]))
                : this.computeConvexRingMinDiameter(this._convexHullPts);
          }
          computeConvexRingMinDiameter(t) {
            this._minWidth = i.MAX_VALUE;
            let e = 1;
            const n = new ne();
            for (let s = 0; s < t.length - 1; s++)
              (n.p0 = t[s]),
                (n.p1 = t[s + 1]),
                (e = this.findMaxPerpDistance(t, n, e));
          }
          computeMinimumDiameter() {
            if (null !== this._minWidthPt) return null;
            if (this._isConvex) this.computeWidthConvex(this._inputGeom);
            else {
              const t = new cn(this._inputGeom).getConvexHull();
              this.computeWidthConvex(t);
            }
          }
          getLength() {
            return this.computeMinimumDiameter(), this._minWidth;
          }
          findMaxPerpDistance(t, e, n) {
            let s = e.distancePerpendicular(t[n]),
              i = s,
              r = n,
              o = r;
            for (; i >= s; )
              (s = i),
                (r = o),
                (o = mn.nextIndex(t, r)),
                (i = e.distancePerpendicular(t[o]));
            return (
              s < this._minWidth &&
                ((this._minPtIndex = r),
                (this._minWidth = s),
                (this._minWidthPt = t[this._minPtIndex]),
                (this._minBaseSeg = new ne(e))),
              r
            );
          }
          getMinimumRectangle() {
            if ((this.computeMinimumDiameter(), 0 === this._minWidth))
              return this._minBaseSeg.p0.equals2D(this._minBaseSeg.p1)
                ? this._inputGeom.getFactory().createPoint(this._minBaseSeg.p0)
                : this._minBaseSeg.toGeometry(this._inputGeom.getFactory());
            const t = this._minBaseSeg.p1.x - this._minBaseSeg.p0.x,
              e = this._minBaseSeg.p1.y - this._minBaseSeg.p0.y;
            let n = i.MAX_VALUE,
              s = -i.MAX_VALUE,
              r = i.MAX_VALUE,
              o = -i.MAX_VALUE;
            for (let i = 0; i < this._convexHullPts.length; i++) {
              const l = mn.computeC(t, e, this._convexHullPts[i]);
              l > s && (s = l), l < n && (n = l);
              const a = mn.computeC(-e, t, this._convexHullPts[i]);
              a > o && (o = a), a < r && (r = a);
            }
            const l = mn.computeSegmentForLine(-t, -e, o),
              a = mn.computeSegmentForLine(-t, -e, r),
              c = mn.computeSegmentForLine(-e, t, s),
              h = mn.computeSegmentForLine(-e, t, n),
              u = c.lineIntersection(l),
              g = h.lineIntersection(l),
              d = h.lineIntersection(a),
              _ = c.lineIntersection(a),
              p = this._inputGeom
                .getFactory()
                .createLinearRing([u, g, d, _, u]);
            return this._inputGeom.getFactory().createPolygon(p);
          }
          getClass() {
            return mn;
          }
          get interfaces_() {
            return [];
          }
        }
        mn.constructor_ = function () {
          if (
            ((this._inputGeom = null),
            (this._isConvex = null),
            (this._convexHullPts = null),
            (this._minBaseSeg = new ne()),
            (this._minWidthPt = null),
            (this._minPtIndex = null),
            (this._minWidth = 0),
            1 === arguments.length)
          ) {
            const t = arguments[0];
            mn.constructor_.call(this, t, !1);
          } else if (2 === arguments.length) {
            const t = arguments[0],
              e = arguments[1];
            (this._inputGeom = t), (this._isConvex = e);
          }
        };
        var yn = Object.freeze({
          __proto__: null,
          distance: Ae,
          locate: Je,
          match: sn,
          Angle: re,
          Area: Ot,
          Centroid: rn,
          ConvexHull: cn,
          Distance: D,
          InteriorPointArea: un,
          InteriorPointLine: dn,
          InteriorPointPoint: _n,
          Length: xt,
          Orientation: v,
          PointLocation: je,
          PointLocator: pn,
          RobustLineIntersector: ee,
          MinimumBoundingCircle: fn,
          MinimumDiameter: mn,
        });
        class xn {
          constructor() {
            xn.constructor_.apply(this, arguments);
          }
          static densifyPoints(t, e, n) {
            const s = new ne(),
              i = new I();
            for (let r = 0; r < t.length - 1; r++) {
              (s.p0 = t[r]), (s.p1 = t[r + 1]), i.add(s.p0, !1);
              const o = s.getLength(),
                l = Math.trunc(o / e) + 1;
              if (l > 1) {
                const t = o / l;
                for (let e = 1; e < l; e++) {
                  const r = (e * t) / o,
                    l = s.pointAlong(r);
                  n.makePrecise(l), i.add(l, !1);
                }
              }
            }
            return i.add(t[t.length - 1], !1), i.toCoordinateArray();
          }
          static densify(t, e) {
            const n = new xn(t);
            return n.setDistanceTolerance(e), n.getResultGeometry();
          }
          getResultGeometry() {
            return new En(this._distanceTolerance).transform(this._inputGeom);
          }
          setDistanceTolerance(t) {
            if (t <= 0) throw new n("Tolerance must be positive");
            this._distanceTolerance = t;
          }
          getClass() {
            return xn;
          }
          get interfaces_() {
            return [];
          }
        }
        class En extends ye {
          constructor() {
            super(), En.constructor_.apply(this, arguments);
          }
          transformMultiPolygon(t, e) {
            const n = super.transformMultiPolygon.call(this, t, e);
            return this.createValidArea(n);
          }
          transformPolygon(t, e) {
            const n = super.transformPolygon.call(this, t, e);
            return e instanceof Ft ? n : this.createValidArea(n);
          }
          transformCoordinates(t, e) {
            const n = t.toCoordinateArray();
            let s = xn.densifyPoints(
              n,
              this.distanceTolerance,
              e.getPrecisionModel()
            );
            return (
              e instanceof Rt &&
                1 === s.length &&
                (s = new Array(0).fill(null)),
              this._factory.getCoordinateSequenceFactory().create(s)
            );
          }
          createValidArea(t) {
            return t.buffer(0);
          }
          getClass() {
            return En;
          }
          get interfaces_() {
            return [];
          }
        }
        (En.constructor_ = function () {
          this.distanceTolerance = null;
          const t = arguments[0];
          this.distanceTolerance = t;
        }),
          (xn.DensifyTransformer = En),
          (xn.constructor_ = function () {
            (this._inputGeom = null), (this._distanceTolerance = null);
            const t = arguments[0];
            this._inputGeom = t;
          });
        var In = Object.freeze({ __proto__: null, Densifier: xn });
        class Nn {
          constructor() {
            Nn.constructor_.apply(this, arguments);
          }
          static isNorthern(t) {
            return t === Nn.NE || t === Nn.NW;
          }
          static isOpposite(t, e) {
            return t !== e && 2 === (t - e + 4) % 4;
          }
          static commonHalfPlane(t, e) {
            if (t === e) return t;
            if (2 === (t - e + 4) % 4) return -1;
            const n = t < e ? t : e;
            return 0 === n && 3 === (t > e ? t : e) ? 3 : n;
          }
          static isInHalfPlane(t, e) {
            return e === Nn.SE
              ? t === Nn.SE || t === Nn.SW
              : t === e || t === e + 1;
          }
          static quadrant() {
            if (
              "number" == typeof arguments[0] &&
              "number" == typeof arguments[1]
            ) {
              const t = arguments[0],
                e = arguments[1];
              if (0 === t && 0 === e)
                throw new n(
                  "Cannot compute the quadrant for point ( " +
                    t +
                    ", " +
                    e +
                    " )"
                );
              return t >= 0 ? (e >= 0 ? Nn.NE : Nn.SE) : e >= 0 ? Nn.NW : Nn.SW;
            }
            if (arguments[0] instanceof g && arguments[1] instanceof g) {
              const t = arguments[0],
                e = arguments[1];
              if (e.x === t.x && e.y === t.y)
                throw new n(
                  "Cannot compute the quadrant for two identical points " + t
                );
              return e.x >= t.x
                ? e.y >= t.y
                  ? Nn.NE
                  : Nn.SE
                : e.y >= t.y
                ? Nn.NW
                : Nn.SW;
            }
          }
          getClass() {
            return Nn;
          }
          get interfaces_() {
            return [];
          }
        }
        (Nn.constructor_ = function () {}),
          (Nn.NE = 0),
          (Nn.NW = 1),
          (Nn.SW = 2),
          (Nn.SE = 3);
        class Cn {
          constructor() {
            Cn.constructor_.apply(this, arguments);
          }
          static init(t, e) {
            if (
              null !== t._sym ||
              null !== e._sym ||
              null !== t._next ||
              null !== e._next
            )
              throw new IllegalStateException("Edges are already initialized");
            return t.init(e), t;
          }
          static create(t, e) {
            const n = new Cn(t),
              s = new Cn(e);
            return n.init(s), n;
          }
          find(t) {
            let e = this;
            do {
              if (null === e) return null;
              if (e.dest().equals2D(t)) return e;
              e = e.oNext();
            } while (e !== this);
            return null;
          }
          dest() {
            return this._sym._orig;
          }
          oNext() {
            return this._sym._next;
          }
          insert(t) {
            if (this.oNext() === this) return this.insertAfter(t), null;
            const e = this.compareTo(t);
            let n = this;
            do {
              const s = n.oNext();
              if (s.compareTo(t) !== e || s === this)
                return n.insertAfter(t), null;
              n = s;
            } while (n !== this);
            u.shouldNeverReachHere();
          }
          insertAfter(t) {
            u.equals(this._orig, t.orig());
            const e = this.oNext();
            this._sym.setNext(t), t.sym().setNext(e);
          }
          degree() {
            let t = 0,
              e = this;
            do {
              t++, (e = e.oNext());
            } while (e !== this);
            return t;
          }
          equals() {
            if (
              2 === arguments.length &&
              arguments[1] instanceof g &&
              arguments[0] instanceof g
            ) {
              const t = arguments[0],
                e = arguments[1];
              return this._orig.equals2D(t) && this._sym._orig.equals(e);
            }
          }
          deltaY() {
            return this._sym._orig.y - this._orig.y;
          }
          sym() {
            return this._sym;
          }
          prev() {
            return this._sym.next()._sym;
          }
          compareAngularDirection(t) {
            const e = this.deltaX(),
              n = this.deltaY(),
              s = t.deltaX(),
              i = t.deltaY();
            if (e === s && n === i) return 0;
            const r = Nn.quadrant(e, n),
              o = Nn.quadrant(s, i);
            return r > o
              ? 1
              : r < o
              ? -1
              : v.index(t._orig, t.dest(), this.dest());
          }
          prevNode() {
            let t = this;
            for (; 2 === t.degree(); ) if ((t = t.prev()) === this) return null;
            return t;
          }
          compareTo(t) {
            const e = t;
            return this.compareAngularDirection(e);
          }
          next() {
            return this._next;
          }
          setSym(t) {
            this._sym = t;
          }
          orig() {
            return this._orig;
          }
          toString() {
            return (
              "HE(" +
              this._orig.x +
              " " +
              this._orig.y +
              ", " +
              this._sym._orig.x +
              " " +
              this._sym._orig.y +
              ")"
            );
          }
          setNext(t) {
            this._next = t;
          }
          init(t) {
            this.setSym(t), t.setSym(this), this.setNext(t), t.setNext(this);
          }
          deltaX() {
            return this._sym._orig.x - this._orig.x;
          }
          getClass() {
            return Cn;
          }
          get interfaces_() {
            return [];
          }
        }
        Cn.constructor_ = function () {
          (this._orig = null), (this._sym = null), (this._next = null);
          const t = arguments[0];
          this._orig = t;
        };
        class Sn extends Cn {
          constructor() {
            super(), Sn.constructor_.apply(this, arguments);
          }
          static setMarkBoth(t, e) {
            t.setMark(e), t.sym().setMark(e);
          }
          static isMarked(t) {
            return t.isMarked();
          }
          static setMark(t, e) {
            t.setMark(e);
          }
          static markBoth(t) {
            t.mark(), t.sym().mark();
          }
          static mark(t) {
            t.mark();
          }
          mark() {
            this._isMarked = !0;
          }
          setMark(t) {
            this._isMarked = t;
          }
          isMarked() {
            return this._isMarked;
          }
          getClass() {
            return Sn;
          }
          get interfaces_() {
            return [];
          }
        }
        Sn.constructor_ = function () {
          this._isMarked = !1;
          const t = arguments[0];
          Cn.constructor_.call(this, t);
        };
        class wn {
          constructor() {
            wn.constructor_.apply(this, arguments);
          }
          static isValidEdge(t, e) {
            return 0 !== e.compareTo(t);
          }
          insert(t, e, n) {
            const s = this.create(t, e);
            null !== n ? n.insert(s) : this._vertexMap.put(t, s);
            const i = this._vertexMap.get(e);
            return (
              null !== i ? i.insert(s.sym()) : this._vertexMap.put(e, s.sym()),
              s
            );
          }
          create(t, e) {
            const n = this.createEdge(t),
              s = this.createEdge(e);
            return Cn.init(n, s), n;
          }
          createEdge(t) {
            return new Cn(t);
          }
          addEdge(t, e) {
            if (!wn.isValidEdge(t, e)) return null;
            const n = this._vertexMap.get(t);
            let s = null;
            return (
              null !== n && (s = n.find(e)),
              null !== s ? s : this.insert(t, e, n)
            );
          }
          getVertexEdges() {
            return this._vertexMap.values();
          }
          findEdge(t, e) {
            const n = this._vertexMap.get(t);
            return null === n ? null : n.find(e);
          }
          getClass() {
            return wn;
          }
          get interfaces_() {
            return [];
          }
        }
        wn.constructor_ = function () {
          this._vertexMap = new kt();
        };
        class Ln extends Sn {
          constructor() {
            super(), Ln.constructor_.apply(this, arguments);
          }
          setStart() {
            this._isStart = !0;
          }
          isStart() {
            return this._isStart;
          }
          getClass() {
            return Ln;
          }
          get interfaces_() {
            return [];
          }
        }
        Ln.constructor_ = function () {
          this._isStart = !1;
          const t = arguments[0];
          Sn.constructor_.call(this, t);
        };
        class Tn extends wn {
          constructor() {
            super(), Tn.constructor_.apply(this, arguments);
          }
          createEdge(t) {
            return new Ln(t);
          }
          getClass() {
            return Tn;
          }
          get interfaces_() {
            return [];
          }
        }
        Tn.constructor_ = function () {};
        class Rn {
          constructor() {
            Rn.constructor_.apply(this, arguments);
          }
          static dissolve(t) {
            const e = new Rn();
            return e.add(t), e.getResult();
          }
          addLine(t) {
            this._lines.add(
              this._factory.createLineString(t.toCoordinateArray())
            );
          }
          updateRingStartEdge(t) {
            return t.isStart() || (t = t.sym()).isStart()
              ? null === this._ringStartEdge
                ? ((this._ringStartEdge = t), null)
                : void (
                    t.orig().compareTo(this._ringStartEdge.orig()) < 0 &&
                    (this._ringStartEdge = t)
                  )
              : null;
          }
          getResult() {
            return null === this._result && this.computeResult(), this._result;
          }
          process(t) {
            let e = t.prevNode();
            null === e && (e = t), this.stackEdges(e), this.buildLines();
          }
          buildRing(t) {
            const e = new I();
            let n = t;
            for (e.add(n.orig().copy(), !1); 2 === n.sym().degree(); ) {
              const s = n.next();
              if (s === t) break;
              e.add(s.orig().copy(), !1), (n = s);
            }
            e.add(n.dest().copy(), !1), this.addLine(e);
          }
          buildLine(t) {
            const e = new I();
            let n = t;
            for (
              this._ringStartEdge = null,
                Sn.markBoth(n),
                e.add(n.orig().copy(), !1);
              2 === n.sym().degree();

            ) {
              this.updateRingStartEdge(n);
              const s = n.next();
              if (s === t) return this.buildRing(this._ringStartEdge), null;
              e.add(s.orig().copy(), !1), (n = s), Sn.markBoth(n);
            }
            e.add(n.dest().clone(), !1),
              this.stackEdges(n.sym()),
              this.addLine(e);
          }
          stackEdges(t) {
            let e = t;
            do {
              Sn.isMarked(e) || this._nodeEdgeStack.add(e), (e = e.oNext());
            } while (e !== t);
          }
          computeResult() {
            for (
              let t = this._graph.getVertexEdges().iterator();
              t.hasNext();

            ) {
              const e = t.next();
              Sn.isMarked(e) || this.process(e);
            }
            this._result = this._factory.buildGeometry(this._lines);
          }
          buildLines() {
            for (; !this._nodeEdgeStack.empty(); ) {
              const t = this._nodeEdgeStack.pop();
              Sn.isMarked(t) || this.buildLine(t);
            }
          }
          add() {
            if (arguments[0] instanceof q)
              arguments[0].apply(
                new (class {
                  get interfaces_() {
                    return [G];
                  }
                  filter(t) {
                    t instanceof Rt && this.add(t);
                  }
                })()
              );
            else if (_(arguments[0], p))
              for (let t = arguments[0].iterator(); t.hasNext(); ) {
                const e = t.next();
                this.add(e);
              }
            else if (arguments[0] instanceof Rt) {
              const t = arguments[0];
              null === this._factory && (this._factory = t.getFactory());
              const e = t.getCoordinateSequence();
              let n = !1;
              for (let s = 1; s < e.size(); s++) {
                const t = this._graph.addEdge(
                  e.getCoordinate(s - 1),
                  e.getCoordinate(s)
                );
                null !== t && (n || (t.setStart(), (n = !0)));
              }
            }
          }
          getClass() {
            return Rn;
          }
          get interfaces_() {
            return [];
          }
        }
        Rn.constructor_ = function () {
          (this._result = null),
            (this._factory = null),
            (this._graph = null),
            (this._lines = new x()),
            (this._nodeEdgeStack = new ln()),
            (this._ringStartEdge = null),
            (this._graph = new Tn());
        };
        var Pn = Object.freeze({ __proto__: null, LineDissolver: Rn });
        class vn {
          constructor() {
            vn.constructor_.apply(this, arguments);
          }
          static opposite(t) {
            return t === vn.LEFT ? vn.RIGHT : t === vn.RIGHT ? vn.LEFT : t;
          }
          getClass() {
            return vn;
          }
          get interfaces_() {
            return [];
          }
        }
        (vn.constructor_ = function () {}),
          (vn.ON = 0),
          (vn.LEFT = 1),
          (vn.RIGHT = 2);
        class On {
          constructor() {
            On.constructor_.apply(this, arguments);
          }
          computeIntersections(t, e) {
            this.mce.computeIntersectsForChain(
              this.chainIndex,
              t.mce,
              t.chainIndex,
              e
            );
          }
          getClass() {
            return On;
          }
          get interfaces_() {
            return [];
          }
        }
        On.constructor_ = function () {
          (this.mce = null), (this.chainIndex = null);
          const t = arguments[0],
            e = arguments[1];
          (this.mce = t), (this.chainIndex = e);
        };
        class bn {
          constructor() {
            bn.constructor_.apply(this, arguments);
          }
          isDelete() {
            return this._eventType === bn.DELETE;
          }
          setDeleteEventIndex(t) {
            this._deleteEventIndex = t;
          }
          getObject() {
            return this._obj;
          }
          compareTo(t) {
            const e = t;
            return this._xValue < e._xValue
              ? -1
              : this._xValue > e._xValue
              ? 1
              : this._eventType < e._eventType
              ? -1
              : this._eventType > e._eventType
              ? 1
              : 0;
          }
          getInsertEvent() {
            return this._insertEvent;
          }
          isInsert() {
            return this._eventType === bn.INSERT;
          }
          isSameLabel(t) {
            return null !== this._label && this._label === t._label;
          }
          getDeleteEventIndex() {
            return this._deleteEventIndex;
          }
          getClass() {
            return bn;
          }
          get interfaces_() {
            return [r];
          }
        }
        (bn.constructor_ = function () {
          if (
            ((this._label = null),
            (this._xValue = null),
            (this._eventType = null),
            (this._insertEvent = null),
            (this._deleteEventIndex = null),
            (this._obj = null),
            2 === arguments.length)
          ) {
            const t = arguments[0],
              e = arguments[1];
            (this._eventType = bn.DELETE),
              (this._xValue = t),
              (this._insertEvent = e);
          } else if (3 === arguments.length) {
            const t = arguments[0],
              e = arguments[1],
              n = arguments[2];
            (this._eventType = bn.INSERT),
              (this._label = t),
              (this._xValue = e),
              (this._obj = n);
          }
        }),
          (bn.INSERT = 1),
          (bn.DELETE = 2);
        class Mn {
          constructor() {
            Mn.constructor_.apply(this, arguments);
          }
          getClass() {
            return Mn;
          }
          get interfaces_() {
            return [];
          }
        }
        Mn.constructor_ = function () {};
        class Dn {
          constructor() {
            Dn.constructor_.apply(this, arguments);
          }
          static isAdjacentSegments(t, e) {
            return 1 === Math.abs(t - e);
          }
          isTrivialIntersection(t, e, n, s) {
            if (t === n && 1 === this._li.getIntersectionNum()) {
              if (Dn.isAdjacentSegments(e, s)) return !0;
              if (t.isClosed()) {
                const n = t.getNumPoints() - 1;
                if ((0 === e && s === n) || (0 === s && e === n)) return !0;
              }
            }
            return !1;
          }
          getProperIntersectionPoint() {
            return this._properIntersectionPoint;
          }
          setIsDoneIfProperInt(t) {
            this._isDoneWhenProperInt = t;
          }
          hasProperInteriorIntersection() {
            return this._hasProperInterior;
          }
          isBoundaryPointInternal(t, e) {
            for (let n = e.iterator(); n.hasNext(); ) {
              const e = n.next().getCoordinate();
              if (t.isIntersection(e)) return !0;
            }
            return !1;
          }
          hasProperIntersection() {
            return this._hasProper;
          }
          hasIntersection() {
            return this._hasIntersection;
          }
          isDone() {
            return this._isDone;
          }
          isBoundaryPoint(t, e) {
            return (
              null !== e &&
              (!!this.isBoundaryPointInternal(t, e[0]) ||
                !!this.isBoundaryPointInternal(t, e[1]))
            );
          }
          setBoundaryNodes(t, e) {
            (this._bdyNodes = new Array(2).fill(null)),
              (this._bdyNodes[0] = t),
              (this._bdyNodes[1] = e);
          }
          addIntersections(t, e, n, s) {
            if (t === n && e === s) return null;
            this.numTests++;
            const i = t.getCoordinates()[e],
              r = t.getCoordinates()[e + 1],
              o = n.getCoordinates()[s],
              l = n.getCoordinates()[s + 1];
            this._li.computeIntersection(i, r, o, l),
              this._li.hasIntersection() &&
                (this._recordIsolated && (t.setIsolated(!1), n.setIsolated(!1)),
                this._numIntersections++,
                this.isTrivialIntersection(t, e, n, s) ||
                  ((this._hasIntersection = !0),
                  (!this._includeProper && this._li.isProper()) ||
                    (t.addIntersections(this._li, e, 0),
                    n.addIntersections(this._li, s, 1)),
                  this._li.isProper() &&
                    ((this._properIntersectionPoint = this._li
                      .getIntersection(0)
                      .copy()),
                    (this._hasProper = !0),
                    this._isDoneWhenProperInt && (this._isDone = !0),
                    this.isBoundaryPoint(this._li, this._bdyNodes) ||
                      (this._hasProperInterior = !0))));
          }
          getClass() {
            return Dn;
          }
          get interfaces_() {
            return [];
          }
        }
        Dn.constructor_ = function () {
          (this._hasIntersection = !1),
            (this._hasProper = !1),
            (this._hasProperInterior = !1),
            (this._properIntersectionPoint = null),
            (this._li = null),
            (this._includeProper = null),
            (this._recordIsolated = null),
            (this._isSelfIntersection = null),
            (this._numIntersections = 0),
            (this.numTests = 0),
            (this._bdyNodes = null),
            (this._isDone = !1),
            (this._isDoneWhenProperInt = !1);
          const t = arguments[0],
            e = arguments[1],
            n = arguments[2];
          (this._li = t), (this._includeProper = e), (this._recordIsolated = n);
        };
        class An extends Mn {
          constructor() {
            super(), An.constructor_.apply(this, arguments);
          }
          prepareEvents() {
            Ie.sort(this.events);
            for (let t = 0; t < this.events.size(); t++) {
              const e = this.events.get(t);
              e.isDelete() && e.getInsertEvent().setDeleteEventIndex(t);
            }
          }
          computeIntersections() {
            if (1 === arguments.length) {
              const t = arguments[0];
              (this.nOverlaps = 0), this.prepareEvents();
              for (let e = 0; e < this.events.size(); e++) {
                const n = this.events.get(e);
                if (
                  (n.isInsert() &&
                    this.processOverlaps(e, n.getDeleteEventIndex(), n, t),
                  t.isDone())
                )
                  break;
              }
            } else if (3 === arguments.length)
              if (
                arguments[2] instanceof Dn &&
                _(arguments[0], m) &&
                _(arguments[1], m)
              ) {
                const t = arguments[0],
                  e = arguments[1],
                  n = arguments[2];
                this.addEdges(t, t),
                  this.addEdges(e, e),
                  this.computeIntersections(n);
              } else if (
                "boolean" == typeof arguments[2] &&
                _(arguments[0], m) &&
                arguments[1] instanceof Dn
              ) {
                const t = arguments[0],
                  e = arguments[1];
                arguments[2] ? this.addEdges(t, null) : this.addEdges(t),
                  this.computeIntersections(e);
              }
          }
          addEdge(t, e) {
            const n = t.getMonotoneChainEdge(),
              s = n.getStartIndexes();
            for (let i = 0; i < s.length - 1; i++) {
              const t = new On(n, i),
                s = new bn(e, n.getMinX(i), t);
              this.events.add(s), this.events.add(new bn(n.getMaxX(i), s));
            }
          }
          processOverlaps(t, e, n, s) {
            const i = n.getObject();
            for (let r = t; r < e; r++) {
              const t = this.events.get(r);
              if (t.isInsert()) {
                const e = t.getObject();
                n.isSameLabel(t) ||
                  (i.computeIntersections(e, s), this.nOverlaps++);
              }
            }
          }
          addEdges() {
            if (1 === arguments.length)
              for (let t = arguments[0].iterator(); t.hasNext(); ) {
                const e = t.next();
                this.addEdge(e, e);
              }
            else if (2 === arguments.length) {
              const t = arguments[1];
              for (let e = arguments[0].iterator(); e.hasNext(); ) {
                const n = e.next();
                this.addEdge(n, t);
              }
            }
          }
          getClass() {
            return An;
          }
          get interfaces_() {
            return [];
          }
        }
        An.constructor_ = function () {
          (this.events = new x()), (this.nOverlaps = null);
        };
        class Fn {
          constructor() {
            Fn.constructor_.apply(this, arguments);
          }
          setAllLocations(t) {
            for (let e = 0; e < this.location.length; e++) this.location[e] = t;
          }
          isNull() {
            for (let t = 0; t < this.location.length; t++)
              if (this.location[t] !== se.NONE) return !1;
            return !0;
          }
          setAllLocationsIfNull(t) {
            for (let e = 0; e < this.location.length; e++)
              this.location[e] === se.NONE && (this.location[e] = t);
          }
          isLine() {
            return 1 === this.location.length;
          }
          merge(t) {
            if (t.location.length > this.location.length) {
              const t = new Array(3).fill(null);
              (t[vn.ON] = this.location[vn.ON]),
                (t[vn.LEFT] = se.NONE),
                (t[vn.RIGHT] = se.NONE),
                (this.location = t);
            }
            for (let e = 0; e < this.location.length; e++)
              this.location[e] === se.NONE &&
                e < t.location.length &&
                (this.location[e] = t.location[e]);
          }
          getLocations() {
            return this.location;
          }
          flip() {
            if (this.location.length <= 1) return null;
            const t = this.location[vn.LEFT];
            (this.location[vn.LEFT] = this.location[vn.RIGHT]),
              (this.location[vn.RIGHT] = t);
          }
          toString() {
            const t = new w();
            return (
              this.location.length > 1 &&
                t.append(se.toLocationSymbol(this.location[vn.LEFT])),
              t.append(se.toLocationSymbol(this.location[vn.ON])),
              this.location.length > 1 &&
                t.append(se.toLocationSymbol(this.location[vn.RIGHT])),
              t.toString()
            );
          }
          setLocations(t, e, n) {
            (this.location[vn.ON] = t),
              (this.location[vn.LEFT] = e),
              (this.location[vn.RIGHT] = n);
          }
          get(t) {
            return t < this.location.length ? this.location[t] : se.NONE;
          }
          isArea() {
            return this.location.length > 1;
          }
          isAnyNull() {
            for (let t = 0; t < this.location.length; t++)
              if (this.location[t] === se.NONE) return !0;
            return !1;
          }
          setLocation() {
            if (1 === arguments.length) {
              const t = arguments[0];
              this.setLocation(vn.ON, t);
            } else if (2 === arguments.length) {
              const t = arguments[0],
                e = arguments[1];
              this.location[t] = e;
            }
          }
          init(t) {
            (this.location = new Array(t).fill(null)),
              this.setAllLocations(se.NONE);
          }
          isEqualOnSide(t, e) {
            return this.location[e] === t.location[e];
          }
          allPositionsEqual(t) {
            for (let e = 0; e < this.location.length; e++)
              if (this.location[e] !== t) return !1;
            return !0;
          }
          getClass() {
            return Fn;
          }
          get interfaces_() {
            return [];
          }
        }
        Fn.constructor_ = function () {
          if (((this.location = null), 1 === arguments.length)) {
            if (arguments[0] instanceof Array) {
              const t = arguments[0];
              this.init(t.length);
            } else if (Number.isInteger(arguments[0])) {
              const t = arguments[0];
              this.init(1), (this.location[vn.ON] = t);
            } else if (arguments[0] instanceof Fn) {
              const t = arguments[0];
              if ((this.init(t.location.length), null !== t))
                for (let e = 0; e < this.location.length; e++)
                  this.location[e] = t.location[e];
            }
          } else if (3 === arguments.length) {
            const t = arguments[0],
              e = arguments[1],
              n = arguments[2];
            this.init(3),
              (this.location[vn.ON] = t),
              (this.location[vn.LEFT] = e),
              (this.location[vn.RIGHT] = n);
          }
        };
        class Gn {
          constructor() {
            Gn.constructor_.apply(this, arguments);
          }
          static toLineLabel(t) {
            const e = new Gn(se.NONE);
            for (let n = 0; n < 2; n++) e.setLocation(n, t.getLocation(n));
            return e;
          }
          getGeometryCount() {
            let t = 0;
            return this.elt[0].isNull() || t++, this.elt[1].isNull() || t++, t;
          }
          setAllLocations(t, e) {
            this.elt[t].setAllLocations(e);
          }
          isNull(t) {
            return this.elt[t].isNull();
          }
          setAllLocationsIfNull() {
            if (1 === arguments.length) {
              const t = arguments[0];
              this.setAllLocationsIfNull(0, t),
                this.setAllLocationsIfNull(1, t);
            } else if (2 === arguments.length) {
              const t = arguments[0],
                e = arguments[1];
              this.elt[t].setAllLocationsIfNull(e);
            }
          }
          isLine(t) {
            return this.elt[t].isLine();
          }
          merge(t) {
            for (let e = 0; e < 2; e++)
              null === this.elt[e] && null !== t.elt[e]
                ? (this.elt[e] = new Fn(t.elt[e]))
                : this.elt[e].merge(t.elt[e]);
          }
          flip() {
            this.elt[0].flip(), this.elt[1].flip();
          }
          getLocation() {
            if (1 === arguments.length) {
              const t = arguments[0];
              return this.elt[t].get(vn.ON);
            }
            if (2 === arguments.length) {
              const t = arguments[0],
                e = arguments[1];
              return this.elt[t].get(e);
            }
          }
          toString() {
            const t = new w();
            return (
              null !== this.elt[0] &&
                (t.append("A:"), t.append(this.elt[0].toString())),
              null !== this.elt[1] &&
                (t.append(" B:"), t.append(this.elt[1].toString())),
              t.toString()
            );
          }
          isArea() {
            if (0 === arguments.length)
              return this.elt[0].isArea() || this.elt[1].isArea();
            if (1 === arguments.length) {
              const t = arguments[0];
              return this.elt[t].isArea();
            }
          }
          isAnyNull(t) {
            return this.elt[t].isAnyNull();
          }
          setLocation() {
            if (2 === arguments.length) {
              const t = arguments[0],
                e = arguments[1];
              this.elt[t].setLocation(vn.ON, e);
            } else if (3 === arguments.length) {
              const t = arguments[0],
                e = arguments[1],
                n = arguments[2];
              this.elt[t].setLocation(e, n);
            }
          }
          isEqualOnSide(t, e) {
            return (
              this.elt[0].isEqualOnSide(t.elt[0], e) &&
              this.elt[1].isEqualOnSide(t.elt[1], e)
            );
          }
          allPositionsEqual(t, e) {
            return this.elt[t].allPositionsEqual(e);
          }
          toLine(t) {
            this.elt[t].isArea() &&
              (this.elt[t] = new Fn(this.elt[t].location[0]));
          }
          getClass() {
            return Gn;
          }
          get interfaces_() {
            return [];
          }
        }
        Gn.constructor_ = function () {
          if (((this.elt = new Array(2).fill(null)), 1 === arguments.length)) {
            if (Number.isInteger(arguments[0])) {
              const t = arguments[0];
              (this.elt[0] = new Fn(t)), (this.elt[1] = new Fn(t));
            } else if (arguments[0] instanceof Gn) {
              const t = arguments[0];
              (this.elt[0] = new Fn(t.elt[0])),
                (this.elt[1] = new Fn(t.elt[1]));
            }
          } else if (2 === arguments.length) {
            const t = arguments[0],
              e = arguments[1];
            (this.elt[0] = new Fn(se.NONE)),
              (this.elt[1] = new Fn(se.NONE)),
              this.elt[t].setLocation(e);
          } else if (3 === arguments.length) {
            const t = arguments[0],
              e = arguments[1],
              n = arguments[2];
            (this.elt[0] = new Fn(t, e, n)), (this.elt[1] = new Fn(t, e, n));
          } else if (4 === arguments.length) {
            const t = arguments[0],
              e = arguments[1],
              n = arguments[2],
              s = arguments[3];
            (this.elt[0] = new Fn(se.NONE, se.NONE, se.NONE)),
              (this.elt[1] = new Fn(se.NONE, se.NONE, se.NONE)),
              this.elt[t].setLocations(e, n, s);
          }
        };
        class qn {
          constructor() {
            qn.constructor_.apply(this, arguments);
          }
          getSegmentIndex() {
            return this.segmentIndex;
          }
          getCoordinate() {
            return this.coord;
          }
          print(t) {
            t.print(this.coord),
              t.print(" seg # = " + this.segmentIndex),
              t.println(" dist = " + this.dist);
          }
          compareTo(t) {
            const e = t;
            return this.compare(e.segmentIndex, e.dist);
          }
          isEndPoint(t) {
            return (
              (0 === this.segmentIndex && 0 === this.dist) ||
              this.segmentIndex === t
            );
          }
          toString() {
            return (
              this.coord +
              " seg # = " +
              this.segmentIndex +
              " dist = " +
              this.dist
            );
          }
          getDistance() {
            return this.dist;
          }
          compare(t, e) {
            return this.segmentIndex < t
              ? -1
              : this.segmentIndex > t
              ? 1
              : this.dist < e
              ? -1
              : this.dist > e
              ? 1
              : 0;
          }
          getClass() {
            return qn;
          }
          get interfaces_() {
            return [r];
          }
        }
        qn.constructor_ = function () {
          (this.coord = null), (this.segmentIndex = null), (this.dist = null);
          const t = arguments[0],
            e = arguments[1],
            n = arguments[2];
          (this.coord = new g(t)), (this.segmentIndex = e), (this.dist = n);
        };
        class Bn {
          constructor() {
            Bn.constructor_.apply(this, arguments);
          }
          print(t) {
            t.println("Intersections:");
            for (let e = this.iterator(); e.hasNext(); ) e.next().print(t);
          }
          iterator() {
            return this._nodeMap.values().iterator();
          }
          addSplitEdges(t) {
            this.addEndpoints();
            const e = this.iterator();
            let n = e.next();
            for (; e.hasNext(); ) {
              const s = e.next(),
                i = this.createSplitEdge(n, s);
              t.add(i), (n = s);
            }
          }
          addEndpoints() {
            const t = this.edge.pts.length - 1;
            this.add(this.edge.pts[0], 0, 0), this.add(this.edge.pts[t], t, 0);
          }
          createSplitEdge(t, e) {
            let n = e.segmentIndex - t.segmentIndex + 2;
            const s = this.edge.pts[e.segmentIndex],
              i = e.dist > 0 || !e.coord.equals2D(s);
            i || n--;
            const r = new Array(n).fill(null);
            let o = 0;
            r[o++] = new g(t.coord);
            for (let l = t.segmentIndex + 1; l <= e.segmentIndex; l++)
              r[o++] = this.edge.pts[l];
            return i && (r[o] = e.coord), new kn(r, new Gn(this.edge._label));
          }
          add(t, e, n) {
            const s = new qn(t, e, n),
              i = this._nodeMap.get(s);
            return null !== i ? i : (this._nodeMap.put(s, s), s);
          }
          isIntersection(t) {
            for (let e = this.iterator(); e.hasNext(); )
              if (e.next().coord.equals(t)) return !0;
            return !1;
          }
          getClass() {
            return Bn;
          }
          get interfaces_() {
            return [];
          }
        }
        Bn.constructor_ = function () {
          (this._nodeMap = new ot()), (this.edge = null);
          const t = arguments[0];
          this.edge = t;
        };
        class Vn {
          constructor() {
            Vn.constructor_.apply(this, arguments);
          }
          static toIntArray(t) {
            const e = new Array(t.size()).fill(null);
            for (let n = 0; n < e.length; n++) e[n] = t.get(n).intValue();
            return e;
          }
          getChainStartIndices(t) {
            let e = 0;
            const n = new x();
            n.add(new L(e));
            do {
              const s = this.findChainEnd(t, e);
              n.add(new L(s)), (e = s);
            } while (e < t.length - 1);
            return Vn.toIntArray(n);
          }
          findChainEnd(t, e) {
            const n = Nn.quadrant(t[e], t[e + 1]);
            let s = e + 1;
            for (; s < t.length && Nn.quadrant(t[s - 1], t[s]) === n; ) s++;
            return s - 1;
          }
          getClass() {
            return Vn;
          }
          get interfaces_() {
            return [];
          }
        }
        Vn.constructor_ = function () {};
        class zn {
          constructor() {
            zn.constructor_.apply(this, arguments);
          }
          getCoordinates() {
            return this.pts;
          }
          getMaxX(t) {
            const e = this.pts[this.startIndex[t]].x,
              n = this.pts[this.startIndex[t + 1]].x;
            return e > n ? e : n;
          }
          getMinX(t) {
            const e = this.pts[this.startIndex[t]].x,
              n = this.pts[this.startIndex[t + 1]].x;
            return e < n ? e : n;
          }
          computeIntersectsForChain() {
            if (4 === arguments.length) {
              const t = arguments[0],
                e = arguments[1],
                n = arguments[2],
                s = arguments[3];
              this.computeIntersectsForChain(
                this.startIndex[t],
                this.startIndex[t + 1],
                e,
                e.startIndex[n],
                e.startIndex[n + 1],
                s
              );
            } else if (6 === arguments.length) {
              const t = arguments[0],
                e = arguments[1],
                n = arguments[2],
                s = arguments[3],
                i = arguments[4],
                r = arguments[5];
              if (e - t == 1 && i - s == 1)
                return r.addIntersections(this.e, t, n.e, s), null;
              if (!this.overlaps(t, e, n, s, i)) return null;
              const o = Math.trunc((t + e) / 2),
                l = Math.trunc((s + i) / 2);
              t < o &&
                (s < l && this.computeIntersectsForChain(t, o, n, s, l, r),
                l < i && this.computeIntersectsForChain(t, o, n, l, i, r)),
                o < e &&
                  (s < l && this.computeIntersectsForChain(o, e, n, s, l, r),
                  l < i && this.computeIntersectsForChain(o, e, n, l, i, r));
            }
          }
          overlaps(t, e, n, s, i) {
            return N.intersects(this.pts[t], this.pts[e], n.pts[s], n.pts[i]);
          }
          getStartIndexes() {
            return this.startIndex;
          }
          computeIntersects(t, e) {
            for (let n = 0; n < this.startIndex.length - 1; n++)
              for (let s = 0; s < t.startIndex.length - 1; s++)
                this.computeIntersectsForChain(n, t, s, e);
          }
          getClass() {
            return zn;
          }
          get interfaces_() {
            return [];
          }
        }
        zn.constructor_ = function () {
          (this.e = null), (this.pts = null), (this.startIndex = null);
          const t = arguments[0];
          (this.e = t), (this.pts = t.getCoordinates());
          const e = new Vn();
          this.startIndex = e.getChainStartIndices(this.pts);
        };
        class Yn {
          constructor() {
            Yn.constructor_.apply(this, arguments);
          }
          static depthAtLocation(t) {
            return t === se.EXTERIOR
              ? 0
              : t === se.INTERIOR
              ? 1
              : Yn.NULL_VALUE;
          }
          getDepth(t, e) {
            return this._depth[t][e];
          }
          setDepth(t, e, n) {
            this._depth[t][e] = n;
          }
          isNull() {
            if (0 === arguments.length) {
              for (let t = 0; t < 2; t++)
                for (let e = 0; e < 3; e++)
                  if (this._depth[t][e] !== Yn.NULL_VALUE) return !1;
              return !0;
            }
            if (1 === arguments.length) {
              const t = arguments[0];
              return this._depth[t][1] === Yn.NULL_VALUE;
            }
            if (2 === arguments.length) {
              const t = arguments[0],
                e = arguments[1];
              return this._depth[t][e] === Yn.NULL_VALUE;
            }
          }
          normalize() {
            for (let t = 0; t < 2; t++)
              if (!this.isNull(t)) {
                let e = this._depth[t][1];
                this._depth[t][2] < e && (e = this._depth[t][2]),
                  e < 0 && (e = 0);
                for (let n = 1; n < 3; n++) {
                  let s = 0;
                  this._depth[t][n] > e && (s = 1), (this._depth[t][n] = s);
                }
              }
          }
          getDelta(t) {
            return this._depth[t][vn.RIGHT] - this._depth[t][vn.LEFT];
          }
          getLocation(t, e) {
            return this._depth[t][e] <= 0 ? se.EXTERIOR : se.INTERIOR;
          }
          toString() {
            return (
              "A: " +
              this._depth[0][1] +
              "," +
              this._depth[0][2] +
              " B: " +
              this._depth[1][1] +
              "," +
              this._depth[1][2]
            );
          }
          add() {
            if (1 === arguments.length) {
              const t = arguments[0];
              for (let e = 0; e < 2; e++)
                for (let n = 1; n < 3; n++) {
                  const s = t.getLocation(e, n);
                  (s !== se.EXTERIOR && s !== se.INTERIOR) ||
                    (this.isNull(e, n)
                      ? (this._depth[e][n] = Yn.depthAtLocation(s))
                      : (this._depth[e][n] += Yn.depthAtLocation(s)));
                }
            } else if (3 === arguments.length) {
              const t = arguments[0],
                e = arguments[1];
              arguments[2] === se.INTERIOR && this._depth[t][e]++;
            }
          }
          getClass() {
            return Yn;
          }
          get interfaces_() {
            return [];
          }
        }
        (Yn.constructor_ = function () {
          this._depth = Array(2)
            .fill()
            .map(() => Array(3));
          for (let t = 0; t < 2; t++)
            for (let e = 0; e < 3; e++) this._depth[t][e] = Yn.NULL_VALUE;
        }),
          (Yn.NULL_VALUE = -1);
        class Un {
          constructor() {
            Un.constructor_.apply(this, arguments);
          }
          setVisited(t) {
            this._isVisited = t;
          }
          setInResult(t) {
            this._isInResult = t;
          }
          isCovered() {
            return this._isCovered;
          }
          isCoveredSet() {
            return this._isCoveredSet;
          }
          setLabel(t) {
            this._label = t;
          }
          getLabel() {
            return this._label;
          }
          setCovered(t) {
            (this._isCovered = t), (this._isCoveredSet = !0);
          }
          updateIM(t) {
            u.isTrue(
              this._label.getGeometryCount() >= 2,
              "found partial label"
            ),
              this.computeIM(t);
          }
          isInResult() {
            return this._isInResult;
          }
          isVisited() {
            return this._isVisited;
          }
          getClass() {
            return Un;
          }
          get interfaces_() {
            return [];
          }
        }
        Un.constructor_ = function () {
          if (
            ((this._label = null),
            (this._isInResult = !1),
            (this._isCovered = !1),
            (this._isCoveredSet = !1),
            (this._isVisited = !1),
            0 === arguments.length)
          );
          else if (1 === arguments.length) {
            const t = arguments[0];
            this._label = t;
          }
        };
        class kn extends Un {
          constructor() {
            super(), kn.constructor_.apply(this, arguments);
          }
          static updateIM() {
            if (
              !(
                2 === arguments.length &&
                arguments[1] instanceof ie &&
                arguments[0] instanceof Gn
              )
            )
              return super.updateIM.apply(this, arguments);
            {
              const t = arguments[0],
                e = arguments[1];
              e.setAtLeastIfValid(
                t.getLocation(0, vn.ON),
                t.getLocation(1, vn.ON),
                1
              ),
                t.isArea() &&
                  (e.setAtLeastIfValid(
                    t.getLocation(0, vn.LEFT),
                    t.getLocation(1, vn.LEFT),
                    2
                  ),
                  e.setAtLeastIfValid(
                    t.getLocation(0, vn.RIGHT),
                    t.getLocation(1, vn.RIGHT),
                    2
                  ));
            }
          }
          getDepth() {
            return this._depth;
          }
          getCollapsedEdge() {
            const t = new Array(2).fill(null);
            return (
              (t[0] = this.pts[0]),
              (t[1] = this.pts[1]),
              new kn(t, Gn.toLineLabel(this._label))
            );
          }
          isIsolated() {
            return this._isIsolated;
          }
          getCoordinates() {
            return this.pts;
          }
          setIsolated(t) {
            this._isIsolated = t;
          }
          setName(t) {
            this._name = t;
          }
          equals(t) {
            if (!(t instanceof kn)) return !1;
            const e = t;
            if (this.pts.length !== e.pts.length) return !1;
            let n = !0,
              s = !0,
              i = this.pts.length;
            for (let r = 0; r < this.pts.length; r++)
              if (
                (this.pts[r].equals2D(e.pts[r]) || (n = !1),
                this.pts[r].equals2D(e.pts[--i]) || (s = !1),
                !n && !s)
              )
                return !1;
            return !0;
          }
          getCoordinate() {
            if (0 === arguments.length)
              return this.pts.length > 0 ? this.pts[0] : null;
            if (1 === arguments.length) {
              const t = arguments[0];
              return this.pts[t];
            }
          }
          print(t) {
            t.print("edge " + this._name + ": "), t.print("LINESTRING (");
            for (let e = 0; e < this.pts.length; e++)
              e > 0 && t.print(","),
                t.print(this.pts[e].x + " " + this.pts[e].y);
            t.print(")  " + this._label + " " + this._depthDelta);
          }
          computeIM(t) {
            kn.updateIM(this._label, t);
          }
          isCollapsed() {
            return (
              !!this._label.isArea() &&
              3 === this.pts.length &&
              !!this.pts[0].equals(this.pts[2])
            );
          }
          isClosed() {
            return this.pts[0].equals(this.pts[this.pts.length - 1]);
          }
          getMaximumSegmentIndex() {
            return this.pts.length - 1;
          }
          getDepthDelta() {
            return this._depthDelta;
          }
          getNumPoints() {
            return this.pts.length;
          }
          printReverse(t) {
            t.print("edge " + this._name + ": ");
            for (let e = this.pts.length - 1; e >= 0; e--)
              t.print(this.pts[e] + " ");
            t.println("");
          }
          getMonotoneChainEdge() {
            return null === this._mce && (this._mce = new zn(this)), this._mce;
          }
          getEnvelope() {
            if (null === this._env) {
              this._env = new N();
              for (let t = 0; t < this.pts.length; t++)
                this._env.expandToInclude(this.pts[t]);
            }
            return this._env;
          }
          addIntersection(t, e, n, s) {
            const i = new g(t.getIntersection(s));
            let r = e,
              o = t.getEdgeDistance(n, s);
            const l = r + 1;
            if (l < this.pts.length) {
              const t = this.pts[l];
              i.equals2D(t) && ((r = l), (o = 0));
            }
            this.eiList.add(i, r, o);
          }
          toString() {
            const t = new Lt();
            t.append("edge " + this._name + ": "), t.append("LINESTRING (");
            for (let e = 0; e < this.pts.length; e++)
              e > 0 && t.append(","),
                t.append(this.pts[e].x + " " + this.pts[e].y);
            return (
              t.append(")  " + this._label + " " + this._depthDelta),
              t.toString()
            );
          }
          isPointwiseEqual(t) {
            if (this.pts.length !== t.pts.length) return !1;
            for (let e = 0; e < this.pts.length; e++)
              if (!this.pts[e].equals2D(t.pts[e])) return !1;
            return !0;
          }
          setDepthDelta(t) {
            this._depthDelta = t;
          }
          getEdgeIntersectionList() {
            return this.eiList;
          }
          addIntersections(t, e, n) {
            for (let s = 0; s < t.getIntersectionNum(); s++)
              this.addIntersection(t, e, n, s);
          }
          getClass() {
            return kn;
          }
          get interfaces_() {
            return [];
          }
        }
        kn.constructor_ = function () {
          if (
            ((this.pts = null),
            (this._env = null),
            (this.eiList = new Bn(this)),
            (this._name = null),
            (this._mce = null),
            (this._isIsolated = !0),
            (this._depth = new Yn()),
            (this._depthDelta = 0),
            1 === arguments.length)
          ) {
            const t = arguments[0];
            kn.constructor_.call(this, t, null);
          } else if (2 === arguments.length) {
            const t = arguments[0],
              e = arguments[1];
            (this.pts = t), (this._label = e);
          }
        };
        class Xn extends Un {
          constructor() {
            super(), Xn.constructor_.apply(this, arguments);
          }
          isIncidentEdgeInResult() {
            for (let t = this.getEdges().getEdges().iterator(); t.hasNext(); )
              if (t.next().getEdge().isInResult()) return !0;
            return !1;
          }
          isIsolated() {
            return 1 === this._label.getGeometryCount();
          }
          getCoordinate() {
            return this._coord;
          }
          print(t) {
            t.println("node " + this._coord + " lbl: " + this._label);
          }
          computeIM(t) {}
          computeMergedLocation(t, e) {
            let n = se.NONE;
            if (((n = this._label.getLocation(e)), !t.isNull(e))) {
              const s = t.getLocation(e);
              n !== se.BOUNDARY && (n = s);
            }
            return n;
          }
          setLabel() {
            if (
              2 !== arguments.length ||
              !Number.isInteger(arguments[1]) ||
              !Number.isInteger(arguments[0])
            )
              return super.setLabel.apply(this, arguments);
            {
              const t = arguments[0],
                e = arguments[1];
              null === this._label
                ? (this._label = new Gn(t, e))
                : this._label.setLocation(t, e);
            }
          }
          getEdges() {
            return this._edges;
          }
          mergeLabel() {
            if (arguments[0] instanceof Xn) {
              const t = arguments[0];
              this.mergeLabel(t._label);
            } else if (arguments[0] instanceof Gn) {
              const t = arguments[0];
              for (let e = 0; e < 2; e++) {
                const n = this.computeMergedLocation(t, e);
                this._label.getLocation(e) === se.NONE &&
                  this._label.setLocation(e, n);
              }
            }
          }
          add(t) {
            this._edges.insert(t), t.setNode(this);
          }
          setLabelBoundary(t) {
            if (null === this._label) return null;
            let e = se.NONE;
            null !== this._label && (e = this._label.getLocation(t));
            let n = null;
            switch (e) {
              case se.BOUNDARY:
                n = se.INTERIOR;
                break;
              case se.INTERIOR:
              default:
                n = se.BOUNDARY;
            }
            this._label.setLocation(t, n);
          }
          getClass() {
            return Xn;
          }
          get interfaces_() {
            return [];
          }
        }
        Xn.constructor_ = function () {
          (this._coord = null), (this._edges = null);
          const t = arguments[0],
            e = arguments[1];
          (this._coord = t),
            (this._edges = e),
            (this._label = new Gn(0, se.NONE));
        };
        class Hn {
          constructor() {
            Hn.constructor_.apply(this, arguments);
          }
          find(t) {
            return this.nodeMap.get(t);
          }
          addNode() {
            if (arguments[0] instanceof g) {
              const t = arguments[0];
              let e = this.nodeMap.get(t);
              return (
                null === e &&
                  ((e = this.nodeFact.createNode(t)), this.nodeMap.put(t, e)),
                e
              );
            }
            if (arguments[0] instanceof Xn) {
              const t = arguments[0],
                e = this.nodeMap.get(t.getCoordinate());
              return null === e
                ? (this.nodeMap.put(t.getCoordinate(), t), t)
                : (e.mergeLabel(t), e);
            }
          }
          print(t) {
            for (let e = this.iterator(); e.hasNext(); ) e.next().print(t);
          }
          iterator() {
            return this.nodeMap.values().iterator();
          }
          values() {
            return this.nodeMap.values();
          }
          getBoundaryNodes(t) {
            const e = new x();
            for (let n = this.iterator(); n.hasNext(); ) {
              const s = n.next();
              s.getLabel().getLocation(t) === se.BOUNDARY && e.add(s);
            }
            return e;
          }
          add(t) {
            const e = t.getCoordinate();
            this.addNode(e).add(t);
          }
          getClass() {
            return Hn;
          }
          get interfaces_() {
            return [];
          }
        }
        Hn.constructor_ = function () {
          (this.nodeMap = new ot()), (this.nodeFact = null);
          const t = arguments[0];
          this.nodeFact = t;
        };
        class Wn {
          constructor() {
            Wn.constructor_.apply(this, arguments);
          }
          compareDirection(t) {
            return this._dx === t._dx && this._dy === t._dy
              ? 0
              : this._quadrant > t._quadrant
              ? 1
              : this._quadrant < t._quadrant
              ? -1
              : v.index(t._p0, t._p1, this._p1);
          }
          getDy() {
            return this._dy;
          }
          getCoordinate() {
            return this._p0;
          }
          setNode(t) {
            this._node = t;
          }
          print(t) {
            const e = Math.atan2(this._dy, this._dx),
              n = this.getClass().getName(),
              s = n.lastIndexOf("."),
              i = n.substring(s + 1);
            t.print(
              "  " +
                i +
                ": " +
                this._p0 +
                " - " +
                this._p1 +
                " " +
                this._quadrant +
                ":" +
                e +
                "   " +
                this._label
            );
          }
          compareTo(t) {
            const e = t;
            return this.compareDirection(e);
          }
          getDirectedCoordinate() {
            return this._p1;
          }
          getDx() {
            return this._dx;
          }
          getLabel() {
            return this._label;
          }
          getEdge() {
            return this._edge;
          }
          getQuadrant() {
            return this._quadrant;
          }
          getNode() {
            return this._node;
          }
          toString() {
            const t = Math.atan2(this._dy, this._dx),
              e = this.getClass().getName(),
              n = e.lastIndexOf(".");
            return (
              "  " +
              e.substring(n + 1) +
              ": " +
              this._p0 +
              " - " +
              this._p1 +
              " " +
              this._quadrant +
              ":" +
              t +
              "   " +
              this._label
            );
          }
          computeLabel(t) {}
          init(t, e) {
            (this._p0 = t),
              (this._p1 = e),
              (this._dx = e.x - t.x),
              (this._dy = e.y - t.y),
              (this._quadrant = Nn.quadrant(this._dx, this._dy)),
              u.isTrue(
                !(0 === this._dx && 0 === this._dy),
                "EdgeEnd with identical endpoints found"
              );
          }
          getClass() {
            return Wn;
          }
          get interfaces_() {
            return [r];
          }
        }
        Wn.constructor_ = function () {
          if (
            ((this._edge = null),
            (this._label = null),
            (this._node = null),
            (this._p0 = null),
            (this._p1 = null),
            (this._dx = null),
            (this._dy = null),
            (this._quadrant = null),
            1 === arguments.length)
          ) {
            const t = arguments[0];
            this._edge = t;
          } else if (3 === arguments.length) {
            const t = arguments[0],
              e = arguments[1],
              n = arguments[2];
            Wn.constructor_.call(this, t, e, n, null);
          } else if (4 === arguments.length) {
            const t = arguments[0],
              e = arguments[1],
              n = arguments[2],
              s = arguments[3];
            Wn.constructor_.call(this, t), this.init(e, n), (this._label = s);
          }
        };
        class jn extends c {
          constructor() {
            if (1 === arguments.length) {
              const t = arguments[0];
              super(t), c.call(this, t);
            } else {
              if (2 !== arguments.length) throw Error();
              {
                const t = arguments[0],
                  e = arguments[1];
                super(jn.msgWithCoord(t, e)),
                  (this.name = "TopologyException"),
                  (this.pt = new g(e));
              }
            }
          }
          getCoordinate() {
            return this.pt;
          }
          get interfaces_() {
            return [];
          }
          getClass() {
            return jn;
          }
          static msgWithCoord(t, e) {
            return null !== e ? t + " [ " + e + " ]" : t;
          }
        }
        class Kn extends Wn {
          constructor() {
            super(), Kn.constructor_.apply(this, arguments);
          }
          static depthFactor(t, e) {
            return t === se.EXTERIOR && e === se.INTERIOR
              ? 1
              : t === se.INTERIOR && e === se.EXTERIOR
              ? -1
              : 0;
          }
          getNextMin() {
            return this._nextMin;
          }
          getDepth(t) {
            return this._depth[t];
          }
          setVisited(t) {
            this._isVisited = t;
          }
          computeDirectedLabel() {
            (this._label = new Gn(this._edge.getLabel())),
              this._isForward || this._label.flip();
          }
          getNext() {
            return this._next;
          }
          setDepth(t, e) {
            if (-999 !== this._depth[t] && this._depth[t] !== e)
              throw new jn(
                "assigned depths do not match",
                this.getCoordinate()
              );
            this._depth[t] = e;
          }
          isInteriorAreaEdge() {
            let t = !0;
            for (let e = 0; e < 2; e++)
              (this._label.isArea(e) &&
                this._label.getLocation(e, vn.LEFT) === se.INTERIOR &&
                this._label.getLocation(e, vn.RIGHT) === se.INTERIOR) ||
                (t = !1);
            return t;
          }
          setNextMin(t) {
            this._nextMin = t;
          }
          print(t) {
            super.print.call(this, t),
              t.print(" " + this._depth[vn.LEFT] + "/" + this._depth[vn.RIGHT]),
              t.print(" (" + this.getDepthDelta() + ")"),
              this._isInResult && t.print(" inResult");
          }
          setMinEdgeRing(t) {
            this._minEdgeRing = t;
          }
          isLineEdge() {
            const t = this._label.isLine(0) || this._label.isLine(1),
              e =
                !this._label.isArea(0) ||
                this._label.allPositionsEqual(0, se.EXTERIOR),
              n =
                !this._label.isArea(1) ||
                this._label.allPositionsEqual(1, se.EXTERIOR);
            return t && e && n;
          }
          setEdgeRing(t) {
            this._edgeRing = t;
          }
          getMinEdgeRing() {
            return this._minEdgeRing;
          }
          getDepthDelta() {
            let t = this._edge.getDepthDelta();
            return this._isForward || (t = -t), t;
          }
          setInResult(t) {
            this._isInResult = t;
          }
          getSym() {
            return this._sym;
          }
          isForward() {
            return this._isForward;
          }
          getEdge() {
            return this._edge;
          }
          printEdge(t) {
            this.print(t),
              t.print(" "),
              this._isForward
                ? this._edge.print(t)
                : this._edge.printReverse(t);
          }
          setSym(t) {
            this._sym = t;
          }
          setVisitedEdge(t) {
            this.setVisited(t), this._sym.setVisited(t);
          }
          setEdgeDepths(t, e) {
            let n = this.getEdge().getDepthDelta();
            this._isForward || (n = -n);
            let s = 1;
            t === vn.LEFT && (s = -1);
            const i = vn.opposite(t),
              r = e + n * s;
            this.setDepth(t, e), this.setDepth(i, r);
          }
          getEdgeRing() {
            return this._edgeRing;
          }
          isInResult() {
            return this._isInResult;
          }
          setNext(t) {
            this._next = t;
          }
          isVisited() {
            return this._isVisited;
          }
          getClass() {
            return Kn;
          }
          get interfaces_() {
            return [];
          }
        }
        Kn.constructor_ = function () {
          (this._isForward = null),
            (this._isInResult = !1),
            (this._isVisited = !1),
            (this._sym = null),
            (this._next = null),
            (this._nextMin = null),
            (this._edgeRing = null),
            (this._minEdgeRing = null),
            (this._depth = [0, -999, -999]);
          const t = arguments[0],
            e = arguments[1];
          if ((Wn.constructor_.call(this, t), (this._isForward = e), e))
            this.init(t.getCoordinate(0), t.getCoordinate(1));
          else {
            const e = t.getNumPoints() - 1;
            this.init(t.getCoordinate(e), t.getCoordinate(e - 1));
          }
          this.computeDirectedLabel();
        };
        class Zn {
          constructor() {
            Zn.constructor_.apply(this, arguments);
          }
          createNode(t) {
            return new Xn(t, null);
          }
          getClass() {
            return Zn;
          }
          get interfaces_() {
            return [];
          }
        }
        Zn.constructor_ = function () {};
        class Qn {
          constructor() {
            Qn.constructor_.apply(this, arguments);
          }
          static linkResultDirectedEdges(t) {
            for (let e = t.iterator(); e.hasNext(); )
              e.next().getEdges().linkResultDirectedEdges();
          }
          printEdges(t) {
            t.println("Edges:");
            for (let e = 0; e < this._edges.size(); e++) {
              t.println("edge " + e + ":");
              const n = this._edges.get(e);
              n.print(t), n.eiList.print(t);
            }
          }
          find(t) {
            return this._nodes.find(t);
          }
          addNode() {
            if (arguments[0] instanceof Xn) {
              const t = arguments[0];
              return this._nodes.addNode(t);
            }
            if (arguments[0] instanceof g) {
              const t = arguments[0];
              return this._nodes.addNode(t);
            }
          }
          getNodeIterator() {
            return this._nodes.iterator();
          }
          linkResultDirectedEdges() {
            for (let t = this._nodes.iterator(); t.hasNext(); )
              t.next().getEdges().linkResultDirectedEdges();
          }
          debugPrintln(t) {
            O.out.println(t);
          }
          isBoundaryNode(t, e) {
            const n = this._nodes.find(e);
            if (null === n) return !1;
            const s = n.getLabel();
            return null !== s && s.getLocation(t) === se.BOUNDARY;
          }
          linkAllDirectedEdges() {
            for (let t = this._nodes.iterator(); t.hasNext(); )
              t.next().getEdges().linkAllDirectedEdges();
          }
          matchInSameDirection(t, e, n, s) {
            return (
              !!t.equals(n) &&
              v.index(t, e, s) === v.COLLINEAR &&
              Nn.quadrant(t, e) === Nn.quadrant(n, s)
            );
          }
          getEdgeEnds() {
            return this._edgeEndList;
          }
          debugPrint(t) {
            O.out.print(t);
          }
          getEdgeIterator() {
            return this._edges.iterator();
          }
          findEdgeInSameDirection(t, e) {
            for (let n = 0; n < this._edges.size(); n++) {
              const s = this._edges.get(n),
                i = s.getCoordinates();
              if (this.matchInSameDirection(t, e, i[0], i[1])) return s;
              if (
                this.matchInSameDirection(
                  t,
                  e,
                  i[i.length - 1],
                  i[i.length - 2]
                )
              )
                return s;
            }
            return null;
          }
          insertEdge(t) {
            this._edges.add(t);
          }
          findEdgeEnd(t) {
            for (let e = this.getEdgeEnds().iterator(); e.hasNext(); ) {
              const n = e.next();
              if (n.getEdge() === t) return n;
            }
            return null;
          }
          addEdges(t) {
            for (let e = t.iterator(); e.hasNext(); ) {
              const t = e.next();
              this._edges.add(t);
              const n = new Kn(t, !0),
                s = new Kn(t, !1);
              n.setSym(s), s.setSym(n), this.add(n), this.add(s);
            }
          }
          add(t) {
            this._nodes.add(t), this._edgeEndList.add(t);
          }
          getNodes() {
            return this._nodes.values();
          }
          findEdge(t, e) {
            for (let n = 0; n < this._edges.size(); n++) {
              const s = this._edges.get(n),
                i = s.getCoordinates();
              if (t.equals(i[0]) && e.equals(i[1])) return s;
            }
            return null;
          }
          getClass() {
            return Qn;
          }
          get interfaces_() {
            return [];
          }
        }
        Qn.constructor_ = function () {
          if (
            ((this._edges = new x()),
            (this._nodes = null),
            (this._edgeEndList = new x()),
            0 === arguments.length)
          )
            this._nodes = new Hn(new Zn());
          else if (1 === arguments.length) {
            const t = arguments[0];
            this._nodes = new Hn(t);
          }
        };
        class Jn extends Qn {
          constructor() {
            super(), Jn.constructor_.apply(this, arguments);
          }
          static determineBoundary(t, e) {
            return t.isInBoundary(e) ? se.BOUNDARY : se.INTERIOR;
          }
          insertBoundaryPoint(t, e) {
            const n = this._nodes.addNode(e).getLabel();
            let s = 1,
              i = se.NONE;
            (i = n.getLocation(t, vn.ON)) === se.BOUNDARY && s++;
            const r = Jn.determineBoundary(this._boundaryNodeRule, s);
            n.setLocation(t, r);
          }
          computeSelfNodes() {
            if (2 === arguments.length) {
              const t = arguments[0],
                e = arguments[1];
              return this.computeSelfNodes(t, e, !1);
            }
            if (3 === arguments.length) {
              const t = arguments[1],
                e = arguments[2],
                n = new Dn(arguments[0], !0, !1);
              n.setIsDoneIfProperInt(e);
              const s = this.createEdgeSetIntersector(),
                i =
                  this._parentGeom instanceof At ||
                  this._parentGeom instanceof Mt ||
                  this._parentGeom instanceof Ft,
                r = t || !i;
              return (
                s.computeIntersections(this._edges, n, r),
                this.addSelfIntersectionNodes(this._argIndex),
                n
              );
            }
          }
          computeSplitEdges(t) {
            for (let e = this._edges.iterator(); e.hasNext(); )
              e.next().eiList.addSplitEdges(t);
          }
          computeEdgeIntersections(t, e, n) {
            const s = new Dn(e, n, !0);
            return (
              s.setBoundaryNodes(this.getBoundaryNodes(), t.getBoundaryNodes()),
              this.createEdgeSetIntersector().computeIntersections(
                this._edges,
                t._edges,
                s
              ),
              s
            );
          }
          getGeometry() {
            return this._parentGeom;
          }
          getBoundaryNodeRule() {
            return this._boundaryNodeRule;
          }
          hasTooFewPoints() {
            return this._hasTooFewPoints;
          }
          addPoint() {
            if (arguments[0] instanceof vt) {
              const t = arguments[0].getCoordinate();
              this.insertPoint(this._argIndex, t, se.INTERIOR);
            } else if (arguments[0] instanceof g) {
              const t = arguments[0];
              this.insertPoint(this._argIndex, t, se.INTERIOR);
            }
          }
          addPolygon(t) {
            this.addPolygonRing(t.getExteriorRing(), se.EXTERIOR, se.INTERIOR);
            for (let e = 0; e < t.getNumInteriorRing(); e++) {
              const n = t.getInteriorRingN(e);
              this.addPolygonRing(n, se.INTERIOR, se.EXTERIOR);
            }
          }
          addEdge(t) {
            this.insertEdge(t);
            const e = t.getCoordinates();
            this.insertPoint(this._argIndex, e[0], se.BOUNDARY),
              this.insertPoint(this._argIndex, e[e.length - 1], se.BOUNDARY);
          }
          addLineString(t) {
            const e = X.removeRepeatedPoints(t.getCoordinates());
            if (e.length < 2)
              return (
                (this._hasTooFewPoints = !0), (this._invalidPoint = e[0]), null
              );
            const n = new kn(e, new Gn(this._argIndex, se.INTERIOR));
            this._lineEdgeMap.put(t, n),
              this.insertEdge(n),
              u.isTrue(e.length >= 2, "found LineString with single point"),
              this.insertBoundaryPoint(this._argIndex, e[0]),
              this.insertBoundaryPoint(this._argIndex, e[e.length - 1]);
          }
          getInvalidPoint() {
            return this._invalidPoint;
          }
          getBoundaryPoints() {
            const t = this.getBoundaryNodes(),
              e = new Array(t.size()).fill(null);
            let n = 0;
            for (let s = t.iterator(); s.hasNext(); ) {
              const t = s.next();
              e[n++] = t.getCoordinate().copy();
            }
            return e;
          }
          getBoundaryNodes() {
            return (
              null === this._boundaryNodes &&
                (this._boundaryNodes = this._nodes.getBoundaryNodes(
                  this._argIndex
                )),
              this._boundaryNodes
            );
          }
          addSelfIntersectionNode(t, e, n) {
            if (this.isBoundaryNode(t, e)) return null;
            n === se.BOUNDARY && this._useBoundaryDeterminationRule
              ? this.insertBoundaryPoint(t, e)
              : this.insertPoint(t, e, n);
          }
          addPolygonRing(t, e, n) {
            if (t.isEmpty()) return null;
            const s = X.removeRepeatedPoints(t.getCoordinates());
            if (s.length < 4)
              return (
                (this._hasTooFewPoints = !0), (this._invalidPoint = s[0]), null
              );
            let i = e,
              r = n;
            v.isCCW(s) && ((i = n), (r = e));
            const o = new kn(s, new Gn(this._argIndex, se.BOUNDARY, i, r));
            this._lineEdgeMap.put(t, o),
              this.insertEdge(o),
              this.insertPoint(this._argIndex, s[0], se.BOUNDARY);
          }
          insertPoint(t, e, n) {
            const s = this._nodes.addNode(e),
              i = s.getLabel();
            null === i ? (s._label = new Gn(t, n)) : i.setLocation(t, n);
          }
          createEdgeSetIntersector() {
            return new An();
          }
          addSelfIntersectionNodes(t) {
            for (let e = this._edges.iterator(); e.hasNext(); ) {
              const n = e.next(),
                s = n.getLabel().getLocation(t);
              for (let e = n.eiList.iterator(); e.hasNext(); ) {
                const n = e.next();
                this.addSelfIntersectionNode(t, n.coord, s);
              }
            }
          }
          add() {
            if (!(1 === arguments.length && arguments[0] instanceof q))
              return super.add.apply(this, arguments);
            {
              const t = arguments[0];
              if (t.isEmpty()) return null;
              if (
                (t instanceof Ft && (this._useBoundaryDeterminationRule = !1),
                t instanceof Mt)
              )
                this.addPolygon(t);
              else if (t instanceof Rt) this.addLineString(t);
              else if (t instanceof vt) this.addPoint(t);
              else if (t instanceof Dt) this.addCollection(t);
              else if (t instanceof ft) this.addCollection(t);
              else if (t instanceof Ft) this.addCollection(t);
              else {
                if (!(t instanceof pt))
                  throw new UnsupportedOperationException(
                    t.getClass().getName()
                  );
                this.addCollection(t);
              }
            }
          }
          addCollection(t) {
            for (let e = 0; e < t.getNumGeometries(); e++) {
              const n = t.getGeometryN(e);
              this.add(n);
            }
          }
          locate(t) {
            return _(this._parentGeom, bt) &&
              this._parentGeom.getNumGeometries() > 50
              ? (null === this._areaPtLocator &&
                  (this._areaPtLocator = new Xe(this._parentGeom)),
                this._areaPtLocator.locate(t))
              : this._ptLocator.locate(t, this._parentGeom);
          }
          findEdge() {
            if (1 === arguments.length && arguments[0] instanceof Rt) {
              const t = arguments[0];
              return this._lineEdgeMap.get(t);
            }
            return super.findEdge.apply(this, arguments);
          }
          getClass() {
            return Jn;
          }
          get interfaces_() {
            return [];
          }
        }
        Jn.constructor_ = function () {
          if (
            ((this._parentGeom = null),
            (this._lineEdgeMap = new kt()),
            (this._boundaryNodeRule = null),
            (this._useBoundaryDeterminationRule = !0),
            (this._argIndex = null),
            (this._boundaryNodes = null),
            (this._hasTooFewPoints = !1),
            (this._invalidPoint = null),
            (this._areaPtLocator = null),
            (this._ptLocator = new pn()),
            2 === arguments.length)
          ) {
            const t = arguments[0],
              e = arguments[1];
            Jn.constructor_.call(this, t, e, V.OGC_SFS_BOUNDARY_RULE);
          } else if (3 === arguments.length) {
            const t = arguments[0],
              e = arguments[1],
              n = arguments[2];
            (this._argIndex = t),
              (this._parentGeom = e),
              (this._boundaryNodeRule = n),
              null !== e && this.add(e);
          }
        };
        var $n = Object.freeze({ __proto__: null, GeometryGraph: Jn });
        class ts {
          constructor() {
            ts.constructor_.apply(this, arguments);
          }
          visit(t) {}
          getClass() {
            return ts;
          }
          get interfaces_() {
            return [];
          }
        }
        ts.constructor_ = function () {};
        class es {
          constructor() {
            es.constructor_.apply(this, arguments);
          }
          isRepeated() {
            return this._count > 1;
          }
          getRight() {
            return this._right;
          }
          getCoordinate() {
            return this._p;
          }
          setLeft(t) {
            this._left = t;
          }
          getX() {
            return this._p.x;
          }
          getData() {
            return this._data;
          }
          getCount() {
            return this._count;
          }
          getLeft() {
            return this._left;
          }
          getY() {
            return this._p.y;
          }
          increment() {
            this._count = this._count + 1;
          }
          setRight(t) {
            this._right = t;
          }
          getClass() {
            return es;
          }
          get interfaces_() {
            return [];
          }
        }
        es.constructor_ = function () {
          if (
            ((this._p = null),
            (this._data = null),
            (this._left = null),
            (this._right = null),
            (this._count = null),
            2 === arguments.length)
          ) {
            const t = arguments[0],
              e = arguments[1];
            (this._p = new g(t)),
              (this._left = null),
              (this._right = null),
              (this._count = 1),
              (this._data = e);
          } else if (3 === arguments.length) {
            const t = arguments[0],
              e = arguments[1],
              n = arguments[2];
            (this._p = new g(t, e)),
              (this._left = null),
              (this._right = null),
              (this._count = 1),
              (this._data = n);
          }
        };
        class ns {
          constructor() {
            ns.constructor_.apply(this, arguments);
          }
          static toCoordinates() {
            if (1 === arguments.length) {
              const t = arguments[0];
              return ns.toCoordinates(t, !1);
            }
            if (2 === arguments.length) {
              const t = arguments[0],
                e = arguments[1],
                n = new I();
              for (let s = t.iterator(); s.hasNext(); ) {
                const t = s.next(),
                  i = e ? t.getCount() : 1;
                for (let e = 0; e < i; e++) n.add(t.getCoordinate(), !0);
              }
              return n.toCoordinateArray();
            }
          }
          insert() {
            if (1 === arguments.length) {
              const t = arguments[0];
              return this.insert(t, null);
            }
            if (2 === arguments.length) {
              const t = arguments[0],
                e = arguments[1];
              if (null === this._root)
                return (this._root = new es(t, e)), this._root;
              if (this._tolerance > 0) {
                const e = this.findBestMatchNode(t);
                if (null !== e) return e.increment(), e;
              }
              return this.insertExact(t, e);
            }
          }
          query() {
            if (1 === arguments.length) {
              const t = arguments[0],
                e = new x();
              return this.query(t, e), e;
            }
            if (2 === arguments.length)
              if (arguments[0] instanceof N && _(arguments[1], m)) {
                const t = arguments[0],
                  e = arguments[1];
                this.queryNode(
                  this._root,
                  t,
                  !0,
                  new (class {
                    get interfaces_() {
                      return [ts];
                    }
                    visit(t) {
                      e.add(t);
                    }
                  })()
                );
              } else if (arguments[0] instanceof N && _(arguments[1], ts)) {
                const t = arguments[0],
                  e = arguments[1];
                this.queryNode(this._root, t, !0, e);
              }
          }
          queryNode(t, e, n, s) {
            if (null === t) return null;
            let i = null,
              r = null,
              o = null;
            n
              ? ((i = e.getMinX()), (r = e.getMaxX()), (o = t.getX()))
              : ((i = e.getMinY()), (r = e.getMaxY()), (o = t.getY()));
            const l = o <= r;
            i < o && this.queryNode(t.getLeft(), e, !n, s),
              e.contains(t.getCoordinate()) && s.visit(t),
              l && this.queryNode(t.getRight(), e, !n, s);
          }
          findBestMatchNode(t) {
            const e = new ss(t, this._tolerance);
            return this.query(e.queryEnvelope(), e), e.getNode();
          }
          isEmpty() {
            return null === this._root;
          }
          insertExact(t, e) {
            let n = this._root,
              s = this._root,
              i = !0,
              r = !0;
            for (; null !== n; ) {
              if (
                null !== n &&
                t.distance(n.getCoordinate()) <= this._tolerance
              )
                return n.increment(), n;
              (r = i ? t.x < n.getX() : t.y < n.getY()),
                (s = n),
                (n = r ? n.getLeft() : n.getRight()),
                (i = !i);
            }
            this._numberOfNodes = this._numberOfNodes + 1;
            const o = new es(t, e);
            return r ? s.setLeft(o) : s.setRight(o), o;
          }
          getClass() {
            return ns;
          }
          get interfaces_() {
            return [];
          }
        }
        class ss {
          constructor() {
            ss.constructor_.apply(this, arguments);
          }
          visit(t) {
            const e = this._p.distance(t.getCoordinate());
            if (!(e <= this._tolerance)) return null;
            let n = !1;
            (null === this._matchNode ||
              e < this._matchDist ||
              (null !== this._matchNode &&
                e === this._matchDist &&
                t.getCoordinate().compareTo(this._matchNode.getCoordinate()) <
                  1)) &&
              (n = !0),
              n && ((this._matchNode = t), (this._matchDist = e));
          }
          queryEnvelope() {
            const t = new N(this._p);
            return t.expandBy(this._tolerance), t;
          }
          getNode() {
            return this._matchNode;
          }
          getClass() {
            return ss;
          }
          get interfaces_() {
            return [ts];
          }
        }
        (ss.constructor_ = function () {
          (this._tolerance = null),
            (this._matchNode = null),
            (this._matchDist = 0),
            (this._p = null);
          const t = arguments[0],
            e = arguments[1];
          (this._p = t), (this._tolerance = e);
        }),
          (ns.BestMatchVisitor = ss),
          (ns.constructor_ = function () {
            if (
              ((this._root = null),
              (this._numberOfNodes = null),
              (this._tolerance = null),
              0 === arguments.length)
            )
              ns.constructor_.call(this, 0);
            else if (1 === arguments.length) {
              const t = arguments[0];
              this._tolerance = t;
            }
          });
        var is = Object.freeze({ __proto__: null, KdTree: ns });
        class rs {
          constructor() {
            rs.constructor_.apply(this, arguments);
          }
          static getSubnodeIndex(t, e, n) {
            let s = -1;
            return (
              t.getMinX() >= e &&
                (t.getMinY() >= n && (s = 3), t.getMaxY() <= n && (s = 1)),
              t.getMaxX() <= e &&
                (t.getMinY() >= n && (s = 2), t.getMaxY() <= n && (s = 0)),
              s
            );
          }
          hasChildren() {
            for (let t = 0; t < 4; t++)
              if (null !== this._subnode[t]) return !0;
            return !1;
          }
          isPrunable() {
            return !(this.hasChildren() || this.hasItems());
          }
          addAllItems(t) {
            t.addAll(this._items);
            for (let e = 0; e < 4; e++)
              null !== this._subnode[e] && this._subnode[e].addAllItems(t);
            return t;
          }
          getNodeCount() {
            let t = 0;
            for (let e = 0; e < 4; e++)
              null !== this._subnode[e] && (t += this._subnode[e].size());
            return t + 1;
          }
          size() {
            let t = 0;
            for (let e = 0; e < 4; e++)
              null !== this._subnode[e] && (t += this._subnode[e].size());
            return t + this._items.size();
          }
          addAllItemsFromOverlapping(t, e) {
            if (!this.isSearchMatch(t)) return null;
            e.addAll(this._items);
            for (let n = 0; n < 4; n++)
              null !== this._subnode[n] &&
                this._subnode[n].addAllItemsFromOverlapping(t, e);
          }
          visitItems(t, e) {
            for (let n = this._items.iterator(); n.hasNext(); )
              e.visitItem(n.next());
          }
          hasItems() {
            return !this._items.isEmpty();
          }
          remove(t, e) {
            if (!this.isSearchMatch(t)) return !1;
            let n = !1;
            for (let s = 0; s < 4; s++)
              if (
                null !== this._subnode[s] &&
                (n = this._subnode[s].remove(t, e))
              ) {
                this._subnode[s].isPrunable() && (this._subnode[s] = null);
                break;
              }
            return n || this._items.remove(e);
          }
          visit(t, e) {
            if (!this.isSearchMatch(t)) return null;
            this.visitItems(t, e);
            for (let n = 0; n < 4; n++)
              null !== this._subnode[n] && this._subnode[n].visit(t, e);
          }
          getItems() {
            return this._items;
          }
          depth() {
            let t = 0;
            for (let e = 0; e < 4; e++)
              if (null !== this._subnode[e]) {
                const n = this._subnode[e].depth();
                n > t && (t = n);
              }
            return t + 1;
          }
          isEmpty() {
            let t = !0;
            if (this._items.isEmpty()) {
              for (let e = 0; e < 4; e++)
                if (null !== this._subnode[e] && !this._subnode[e].isEmpty()) {
                  t = !1;
                  break;
                }
            } else t = !1;
            return t;
          }
          add(t) {
            this._items.add(t);
          }
          getClass() {
            return rs;
          }
          get interfaces_() {
            return [a];
          }
        }
        function os() {}
        (rs.constructor_ = function () {
          (this._items = new x()), (this._subnode = new Array(4).fill(null));
        }),
          (os.exponent = function (t) {
            return (
              (function (t, e) {
                let n, s, i, r;
                const o = {
                    32: { d: 127, c: 128, b: 0, a: 0 },
                    64: { d: 32752, c: 0, b: 0, a: 0 },
                  },
                  l = { 32: 8, 64: 11 }[t];
                if (
                  (r ||
                    ((n = e < 0 || 1 / e < 0),
                    isFinite(e) ||
                      ((r = o[t]),
                      n && (r.d += 1 << (t / 4 - 1)),
                      (s = Math.pow(2, l) - 1),
                      (i = 0))),
                  !r)
                ) {
                  for (s = { 32: 127, 64: 1023 }[t], i = Math.abs(e); i >= 2; )
                    s++, (i /= 2);
                  for (; i < 1 && s > 0; ) s--, (i *= 2);
                  s <= 0 && (i /= 2),
                    32 === t &&
                      s > 254 &&
                      ((r = { d: n ? 255 : 127, c: 128, b: 0, a: 0 }),
                      (s = Math.pow(2, l) - 1),
                      (i = 0));
                }
                return s;
              })(64, t) - 1023
            );
          }),
          (os.powerOf2 = function (t) {
            return Math.pow(2, t);
          });
        class ls {
          constructor() {
            ls.constructor_.apply(this, arguments);
          }
          static computeQuadLevel(t) {
            const e = t.getWidth(),
              n = t.getHeight(),
              s = e > n ? e : n;
            return os.exponent(s) + 1;
          }
          getLevel() {
            return this._level;
          }
          computeKey() {
            if (1 === arguments.length) {
              const t = arguments[0];
              for (
                this._level = ls.computeQuadLevel(t),
                  this._env = new N(),
                  this.computeKey(this._level, t);
                !this._env.contains(t);

              )
                (this._level += 1), this.computeKey(this._level, t);
            } else if (2 === arguments.length) {
              const t = arguments[0],
                e = arguments[1],
                n = os.powerOf2(t);
              (this._pt.x = Math.floor(e.getMinX() / n) * n),
                (this._pt.y = Math.floor(e.getMinY() / n) * n),
                this._env.init(
                  this._pt.x,
                  this._pt.x + n,
                  this._pt.y,
                  this._pt.y + n
                );
            }
          }
          getEnvelope() {
            return this._env;
          }
          getCentre() {
            return new g(
              (this._env.getMinX() + this._env.getMaxX()) / 2,
              (this._env.getMinY() + this._env.getMaxY()) / 2
            );
          }
          getPoint() {
            return this._pt;
          }
          getClass() {
            return ls;
          }
          get interfaces_() {
            return [];
          }
        }
        ls.constructor_ = function () {
          (this._pt = new g()), (this._level = 0), (this._env = null);
          const t = arguments[0];
          this.computeKey(t);
        };
        class as extends rs {
          constructor() {
            super(), as.constructor_.apply(this, arguments);
          }
          static createNode(t) {
            const e = new ls(t);
            return new as(e.getEnvelope(), e.getLevel());
          }
          static createExpanded(t, e) {
            const n = new N(e);
            null !== t && n.expandToInclude(t._env);
            const s = as.createNode(n);
            return null !== t && s.insertNode(t), s;
          }
          find(t) {
            const e = rs.getSubnodeIndex(t, this._centrex, this._centrey);
            return -1 === e
              ? this
              : null !== this._subnode[e]
              ? this._subnode[e].find(t)
              : this;
          }
          isSearchMatch(t) {
            return null !== t && this._env.intersects(t);
          }
          getSubnode(t) {
            return (
              null === this._subnode[t] &&
                (this._subnode[t] = this.createSubnode(t)),
              this._subnode[t]
            );
          }
          getEnvelope() {
            return this._env;
          }
          getNode(t) {
            const e = rs.getSubnodeIndex(t, this._centrex, this._centrey);
            return -1 !== e ? this.getSubnode(e).getNode(t) : this;
          }
          createSubnode(t) {
            let e = 0,
              n = 0,
              s = 0,
              i = 0;
            switch (t) {
              case 0:
                (e = this._env.getMinX()),
                  (n = this._centrex),
                  (s = this._env.getMinY()),
                  (i = this._centrey);
                break;
              case 1:
                (e = this._centrex),
                  (n = this._env.getMaxX()),
                  (s = this._env.getMinY()),
                  (i = this._centrey);
                break;
              case 2:
                (e = this._env.getMinX()),
                  (n = this._centrex),
                  (s = this._centrey),
                  (i = this._env.getMaxY());
                break;
              case 3:
                (e = this._centrex),
                  (n = this._env.getMaxX()),
                  (s = this._centrey),
                  (i = this._env.getMaxY());
            }
            const r = new N(e, n, s, i);
            return new as(r, this._level - 1);
          }
          insertNode(t) {
            u.isTrue(null === this._env || this._env.contains(t._env));
            const e = rs.getSubnodeIndex(t._env, this._centrex, this._centrey);
            if (t._level === this._level - 1) this._subnode[e] = t;
            else {
              const n = this.createSubnode(e);
              n.insertNode(t), (this._subnode[e] = n);
            }
          }
          getClass() {
            return as;
          }
          get interfaces_() {
            return [];
          }
        }
        as.constructor_ = function () {
          (this._env = null),
            (this._centrex = null),
            (this._centrey = null),
            (this._level = null);
          const t = arguments[0],
            e = arguments[1];
          (this._env = t),
            (this._level = e),
            (this._centrex = (t.getMinX() + t.getMaxX()) / 2),
            (this._centrey = (t.getMinY() + t.getMaxY()) / 2);
        };
        class cs {
          constructor() {
            cs.constructor_.apply(this, arguments);
          }
          static isZeroWidth(t, e) {
            const n = e - t;
            if (0 === n) return !0;
            const s = n / Math.max(Math.abs(t), Math.abs(e));
            return os.exponent(s) <= cs.MIN_BINARY_EXPONENT;
          }
          getClass() {
            return cs;
          }
          get interfaces_() {
            return [];
          }
        }
        (cs.constructor_ = function () {}), (cs.MIN_BINARY_EXPONENT = -50);
        class hs extends rs {
          constructor() {
            super(), hs.constructor_.apply(this, arguments);
          }
          insert(t, e) {
            const n = rs.getSubnodeIndex(t, hs.origin.x, hs.origin.y);
            if (-1 === n) return this.add(e), null;
            const s = this._subnode[n];
            if (null === s || !s.getEnvelope().contains(t)) {
              const e = as.createExpanded(s, t);
              this._subnode[n] = e;
            }
            this.insertContained(this._subnode[n], t, e);
          }
          isSearchMatch(t) {
            return !0;
          }
          insertContained(t, e, n) {
            u.isTrue(t.getEnvelope().contains(e));
            const s = cs.isZeroWidth(e.getMinX(), e.getMaxX()),
              i = cs.isZeroWidth(e.getMinY(), e.getMaxY());
            let r = null;
            (r = s || i ? t.find(e) : t.getNode(e)).add(n);
          }
          getClass() {
            return hs;
          }
          get interfaces_() {
            return [];
          }
        }
        (hs.constructor_ = function () {}), (hs.origin = new g(0, 0));
        class us {
          constructor() {
            us.constructor_.apply(this, arguments);
          }
          insert(t, e) {}
          remove(t, e) {}
          query() {}
          getClass() {
            return us;
          }
          get interfaces_() {
            return [];
          }
        }
        us.constructor_ = function () {};
        class gs {
          constructor() {
            gs.constructor_.apply(this, arguments);
          }
          static ensureExtent(t, e) {
            let n = t.getMinX(),
              s = t.getMaxX(),
              i = t.getMinY(),
              r = t.getMaxY();
            return n !== s && i !== r
              ? t
              : (n === s && (s = (n -= e / 2) + e / 2),
                i === r && (r = (i -= e / 2) + e / 2),
                new N(n, s, i, r));
          }
          size() {
            return null !== this._root ? this._root.size() : 0;
          }
          insert(t, e) {
            this.collectStats(t);
            const n = gs.ensureExtent(t, this._minExtent);
            this._root.insert(n, e);
          }
          query() {
            if (1 === arguments.length) {
              const t = arguments[0],
                e = new Ue();
              return this.query(t, e), e.getItems();
            }
            if (2 === arguments.length) {
              const t = arguments[0],
                e = arguments[1];
              this._root.visit(t, e);
            }
          }
          queryAll() {
            const t = new x();
            return this._root.addAllItems(t), t;
          }
          remove(t, e) {
            const n = gs.ensureExtent(t, this._minExtent);
            return this._root.remove(n, e);
          }
          collectStats(t) {
            const e = t.getWidth();
            e < this._minExtent && e > 0 && (this._minExtent = e);
            const n = t.getHeight();
            n < this._minExtent && n > 0 && (this._minExtent = n);
          }
          depth() {
            return null !== this._root ? this._root.depth() : 0;
          }
          isEmpty() {
            return null === this._root || this._root.isEmpty();
          }
          getClass() {
            return gs;
          }
          get interfaces_() {
            return [us, a];
          }
        }
        (gs.constructor_ = function () {
          (this._root = null), (this._minExtent = 1), (this._root = new hs());
        }),
          (gs.serialVersionUID = -0x678b60c967a25400);
        var ds = Object.freeze({ __proto__: null, Quadtree: gs });
        class _s {
          constructor() {
            _s.constructor_.apply(this, arguments);
          }
          getBounds() {}
          getClass() {
            return _s;
          }
          get interfaces_() {
            return [];
          }
        }
        _s.constructor_ = function () {};
        class ps {
          constructor() {
            ps.constructor_.apply(this, arguments);
          }
          getItem() {
            return this._item;
          }
          getBounds() {
            return this._bounds;
          }
          getClass() {
            return ps;
          }
          get interfaces_() {
            return [_s, a];
          }
        }
        ps.constructor_ = function () {
          (this._bounds = null), (this._item = null);
          const t = arguments[0],
            e = arguments[1];
          (this._bounds = t), (this._item = e);
        };
        class fs {
          constructor() {
            fs.constructor_.apply(this, arguments);
          }
          poll() {
            if (this.isEmpty()) return null;
            const t = this._items.get(1);
            return (
              this._items.set(1, this._items.get(this._size)),
              (this._size -= 1),
              this.reorder(1),
              t
            );
          }
          size() {
            return this._size;
          }
          reorder(t) {
            let e = null;
            const n = this._items.get(t);
            for (
              ;
              2 * t <= this._size &&
              ((e = 2 * t) !== this._size &&
                this._items.get(e + 1).compareTo(this._items.get(e)) < 0 &&
                e++,
              this._items.get(e).compareTo(n) < 0);
              t = e
            )
              this._items.set(t, this._items.get(e));
            this._items.set(t, n);
          }
          clear() {
            (this._size = 0), this._items.clear();
          }
          peek() {
            return this.isEmpty() ? null : this._items.get(1);
          }
          isEmpty() {
            return 0 === this._size;
          }
          add(t) {
            this._items.add(null), (this._size += 1);
            let e = this._size;
            for (
              this._items.set(0, t);
              t.compareTo(this._items.get(Math.trunc(e / 2))) < 0;
              e /= 2
            )
              this._items.set(e, this._items.get(Math.trunc(e / 2)));
            this._items.set(e, t);
          }
          getClass() {
            return fs;
          }
          get interfaces_() {
            return [];
          }
        }
        fs.constructor_ = function () {
          (this._size = null),
            (this._items = null),
            (this._size = 0),
            (this._items = new x()),
            this._items.add(null);
        };
        class ms {
          constructor() {
            ms.constructor_.apply(this, arguments);
          }
          getLevel() {
            return this._level;
          }
          size() {
            return this._childBoundables.size();
          }
          getChildBoundables() {
            return this._childBoundables;
          }
          addChildBoundable(t) {
            u.isTrue(null === this._bounds), this._childBoundables.add(t);
          }
          isEmpty() {
            return this._childBoundables.isEmpty();
          }
          getBounds() {
            return (
              null === this._bounds && (this._bounds = this.computeBounds()),
              this._bounds
            );
          }
          getClass() {
            return ms;
          }
          get interfaces_() {
            return [_s, a];
          }
        }
        (ms.constructor_ = function () {
          if (
            ((this._childBoundables = new x()),
            (this._bounds = null),
            (this._level = null),
            0 === arguments.length)
          );
          else if (1 === arguments.length) {
            const t = arguments[0];
            this._level = t;
          }
        }),
          (ms.serialVersionUID = 0x5a1e55ec41369800);
        class ys {
          constructor() {
            ys.constructor_.apply(this, arguments);
          }
          static area(t) {
            return t.getBounds().getArea();
          }
          static isComposite(t) {
            return t instanceof ms;
          }
          expandToQueue(t, e) {
            const s = ys.isComposite(this._boundable1),
              i = ys.isComposite(this._boundable2);
            if (s && i)
              return ys.area(this._boundable1) > ys.area(this._boundable2)
                ? (this.expand(this._boundable1, this._boundable2, t, e), null)
                : (this.expand(this._boundable2, this._boundable1, t, e), null);
            if (s)
              return (
                this.expand(this._boundable1, this._boundable2, t, e), null
              );
            if (i)
              return (
                this.expand(this._boundable2, this._boundable1, t, e), null
              );
            throw new n("neither boundable is composite");
          }
          isLeaves() {
            return !(
              ys.isComposite(this._boundable1) ||
              ys.isComposite(this._boundable2)
            );
          }
          compareTo(t) {
            const e = t;
            return this._distance < e._distance
              ? -1
              : this._distance > e._distance
              ? 1
              : 0;
          }
          expand(t, e, n, s) {
            for (let i = t.getChildBoundables().iterator(); i.hasNext(); ) {
              const t = i.next(),
                r = new ys(t, e, this._itemDistance);
              r.getDistance() < s && n.add(r);
            }
          }
          getBoundable(t) {
            return 0 === t ? this._boundable1 : this._boundable2;
          }
          getDistance() {
            return this._distance;
          }
          distance() {
            return this.isLeaves()
              ? this._itemDistance.distance(this._boundable1, this._boundable2)
              : this._boundable1
                  .getBounds()
                  .distance(this._boundable2.getBounds());
          }
          getClass() {
            return ys;
          }
          get interfaces_() {
            return [r];
          }
        }
        ys.constructor_ = function () {
          (this._boundable1 = null),
            (this._boundable2 = null),
            (this._distance = null),
            (this._itemDistance = null);
          const t = arguments[0],
            e = arguments[1],
            n = arguments[2];
          (this._boundable1 = t),
            (this._boundable2 = e),
            (this._itemDistance = n),
            (this._distance = this.distance());
        };
        class xs {
          constructor() {
            xs.constructor_.apply(this, arguments);
          }
          static compareDoubles(t, e) {
            return t > e ? 1 : t < e ? -1 : 0;
          }
          queryInternal() {
            if (
              _(arguments[2], Fe) &&
              arguments[0] instanceof Object &&
              arguments[1] instanceof ms
            ) {
              const t = arguments[0],
                e = arguments[2],
                n = arguments[1].getChildBoundables();
              for (let s = 0; s < n.size(); s++) {
                const i = n.get(s);
                this.getIntersectsOp().intersects(i.getBounds(), t) &&
                  (i instanceof ms
                    ? this.queryInternal(t, i, e)
                    : i instanceof ps
                    ? e.visitItem(i.getItem())
                    : u.shouldNeverReachHere());
              }
            } else if (
              _(arguments[2], m) &&
              arguments[0] instanceof Object &&
              arguments[1] instanceof ms
            ) {
              const t = arguments[0],
                e = arguments[2],
                n = arguments[1].getChildBoundables();
              for (let s = 0; s < n.size(); s++) {
                const i = n.get(s);
                this.getIntersectsOp().intersects(i.getBounds(), t) &&
                  (i instanceof ms
                    ? this.queryInternal(t, i, e)
                    : i instanceof ps
                    ? e.add(i.getItem())
                    : u.shouldNeverReachHere());
              }
            }
          }
          getNodeCapacity() {
            return this._nodeCapacity;
          }
          lastNode(t) {
            return t.get(t.size() - 1);
          }
          size() {
            if (0 === arguments.length)
              return this.isEmpty() ? 0 : (this.build(), this.size(this._root));
            if (1 === arguments.length) {
              let t = 0;
              for (
                let e = arguments[0].getChildBoundables().iterator();
                e.hasNext();

              ) {
                const n = e.next();
                n instanceof ms
                  ? (t += this.size(n))
                  : n instanceof ps && (t += 1);
              }
              return t;
            }
          }
          removeItem(t, e) {
            let n = null;
            for (let s = t.getChildBoundables().iterator(); s.hasNext(); ) {
              const t = s.next();
              t instanceof ps && t.getItem() === e && (n = t);
            }
            return null !== n && (t.getChildBoundables().remove(n), !0);
          }
          itemsTree() {
            if (0 === arguments.length) {
              this.build();
              const t = this.itemsTree(this._root);
              return null === t ? new x() : t;
            }
            if (1 === arguments.length) {
              const t = arguments[0],
                e = new x();
              for (let n = t.getChildBoundables().iterator(); n.hasNext(); ) {
                const t = n.next();
                if (t instanceof ms) {
                  const n = this.itemsTree(t);
                  null !== n && e.add(n);
                } else
                  t instanceof ps
                    ? e.add(t.getItem())
                    : u.shouldNeverReachHere();
              }
              return e.size() <= 0 ? null : e;
            }
          }
          insert(t, e) {
            u.isTrue(
              !this._built,
              "Cannot insert items into an STR packed R-tree after it has been built."
            ),
              this._itemBoundables.add(new ps(t, e));
          }
          boundablesAtLevel() {
            if (1 === arguments.length) {
              const t = arguments[0],
                e = new x();
              return this.boundablesAtLevel(t, this._root, e), e;
            }
            if (3 === arguments.length) {
              const t = arguments[0],
                e = arguments[1],
                n = arguments[2];
              if ((u.isTrue(t > -2), e.getLevel() === t)) return n.add(e), null;
              for (let s = e.getChildBoundables().iterator(); s.hasNext(); ) {
                const e = s.next();
                e instanceof ms
                  ? this.boundablesAtLevel(t, e, n)
                  : (u.isTrue(e instanceof ps), -1 === t && n.add(e));
              }
              return null;
            }
          }
          query() {
            if (1 === arguments.length) {
              const t = arguments[0];
              this.build();
              const e = new x();
              return (
                this.isEmpty() ||
                  (this.getIntersectsOp().intersects(
                    this._root.getBounds(),
                    t
                  ) &&
                    this.queryInternal(t, this._root, e)),
                e
              );
            }
            if (2 === arguments.length) {
              const t = arguments[0],
                e = arguments[1];
              if ((this.build(), this.isEmpty())) return null;
              this.getIntersectsOp().intersects(this._root.getBounds(), t) &&
                this.queryInternal(t, this._root, e);
            }
          }
          build() {
            if (this._built) return null;
            (this._root = this._itemBoundables.isEmpty()
              ? this.createNode(0)
              : this.createHigherLevels(this._itemBoundables, -1)),
              (this._itemBoundables = null),
              (this._built = !0);
          }
          getRoot() {
            return this.build(), this._root;
          }
          remove() {
            if (2 === arguments.length) {
              const t = arguments[0],
                e = arguments[1];
              return (
                this.build(),
                !!this.getIntersectsOp().intersects(
                  this._root.getBounds(),
                  t
                ) && this.remove(t, this._root, e)
              );
            }
            if (3 === arguments.length) {
              const t = arguments[0],
                e = arguments[1],
                n = arguments[2];
              let s = this.removeItem(e, n);
              if (s) return !0;
              let i = null;
              for (let r = e.getChildBoundables().iterator(); r.hasNext(); ) {
                const e = r.next();
                if (
                  this.getIntersectsOp().intersects(e.getBounds(), t) &&
                  e instanceof ms &&
                  (s = this.remove(t, e, n))
                ) {
                  i = e;
                  break;
                }
              }
              return (
                null !== i &&
                  i.getChildBoundables().isEmpty() &&
                  e.getChildBoundables().remove(i),
                s
              );
            }
          }
          createHigherLevels(t, e) {
            u.isTrue(!t.isEmpty());
            const n = this.createParentBoundables(t, e + 1);
            return 1 === n.size()
              ? n.get(0)
              : this.createHigherLevels(n, e + 1);
          }
          depth() {
            if (0 === arguments.length)
              return this.isEmpty()
                ? 0
                : (this.build(), this.depth(this._root));
            if (1 === arguments.length) {
              let t = 0;
              for (
                let e = arguments[0].getChildBoundables().iterator();
                e.hasNext();

              ) {
                const n = e.next();
                if (n instanceof ms) {
                  const e = this.depth(n);
                  e > t && (t = e);
                }
              }
              return t + 1;
            }
          }
          createParentBoundables(t, e) {
            u.isTrue(!t.isEmpty());
            const n = new x();
            n.add(this.createNode(e));
            const s = new x(t);
            Ie.sort(s, this.getComparator());
            for (let i = s.iterator(); i.hasNext(); ) {
              const t = i.next();
              this.lastNode(n).getChildBoundables().size() ===
                this.getNodeCapacity() && n.add(this.createNode(e)),
                this.lastNode(n).addChildBoundable(t);
            }
            return n;
          }
          isEmpty() {
            return this._built
              ? this._root.isEmpty()
              : this._itemBoundables.isEmpty();
          }
          getClass() {
            return xs;
          }
          get interfaces_() {
            return [a];
          }
        }
        (xs.IntersectsOp = function () {}),
          (xs.constructor_ = function () {
            if (
              ((this._root = null),
              (this._built = !1),
              (this._itemBoundables = new x()),
              (this._nodeCapacity = null),
              0 === arguments.length)
            )
              xs.constructor_.call(this, xs.DEFAULT_NODE_CAPACITY);
            else if (1 === arguments.length) {
              const t = arguments[0];
              u.isTrue(t > 1, "Node capacity must be greater than 1"),
                (this._nodeCapacity = t);
            }
          }),
          (xs.serialVersionUID = -0x35ef64c82d4c5400),
          (xs.DEFAULT_NODE_CAPACITY = 10);
        class Es {
          constructor() {
            Es.constructor_.apply(this, arguments);
          }
          distance(t, e) {}
          getClass() {
            return Es;
          }
          get interfaces_() {
            return [];
          }
        }
        Es.constructor_ = function () {};
        class Is extends xs {
          constructor() {
            super(), Is.constructor_.apply(this, arguments);
          }
          static centreX(t) {
            return Is.avg(t.getMinX(), t.getMaxX());
          }
          static avg(t, e) {
            return (t + e) / 2;
          }
          static getItems(t) {
            const e = new Array(t.size()).fill(null);
            let n = 0;
            for (; !t.isEmpty(); ) {
              const s = t.poll();
              (e[n] = s.getBoundable(0).getItem()), n++;
            }
            return e;
          }
          static centreY(t) {
            return Is.avg(t.getMinY(), t.getMaxY());
          }
          createParentBoundablesFromVerticalSlices(t, e) {
            u.isTrue(t.length > 0);
            const n = new x();
            for (let s = 0; s < t.length; s++)
              n.addAll(this.createParentBoundablesFromVerticalSlice(t[s], e));
            return n;
          }
          createNode(t) {
            return new Ns(t);
          }
          size() {
            return 0 === arguments.length
              ? super.size.call(this)
              : super.size.apply(this, arguments);
          }
          insert() {
            if (
              !(
                2 === arguments.length &&
                arguments[1] instanceof Object &&
                arguments[0] instanceof N
              )
            )
              return super.insert.apply(this, arguments);
            {
              const t = arguments[0],
                e = arguments[1];
              if (t.isNull()) return null;
              super.insert.call(this, t, e);
            }
          }
          getIntersectsOp() {
            return Is.intersectsOp;
          }
          verticalSlices(t, e) {
            const n = Math.trunc(Math.ceil(t.size() / e)),
              s = new Array(e).fill(null),
              i = t.iterator();
            for (let r = 0; r < e; r++) {
              s[r] = new x();
              let t = 0;
              for (; i.hasNext() && t < n; ) {
                const e = i.next();
                s[r].add(e), t++;
              }
            }
            return s;
          }
          query() {
            if (1 === arguments.length) {
              const t = arguments[0];
              return super.query.call(this, t);
            }
            if (2 === arguments.length) {
              const t = arguments[0],
                e = arguments[1];
              super.query.call(this, t, e);
            }
          }
          getComparator() {
            return Is.yComparator;
          }
          createParentBoundablesFromVerticalSlice(t, e) {
            return super.createParentBoundables.call(this, t, e);
          }
          remove() {
            if (
              2 === arguments.length &&
              arguments[1] instanceof Object &&
              arguments[0] instanceof N
            ) {
              const t = arguments[0],
                e = arguments[1];
              return super.remove.call(this, t, e);
            }
            return super.remove.apply(this, arguments);
          }
          depth() {
            return 0 === arguments.length
              ? super.depth.call(this)
              : super.depth.apply(this, arguments);
          }
          createParentBoundables(t, e) {
            u.isTrue(!t.isEmpty());
            const n = Math.trunc(Math.ceil(t.size() / this.getNodeCapacity())),
              s = new x(t);
            Ie.sort(s, Is.xComparator);
            const i = this.verticalSlices(
              s,
              Math.trunc(Math.ceil(Math.sqrt(n)))
            );
            return this.createParentBoundablesFromVerticalSlices(i, e);
          }
          nearestNeighbour() {
            if (1 === arguments.length) {
              if (_(arguments[0], Es)) {
                const t = arguments[0],
                  e = new ys(this.getRoot(), this.getRoot(), t);
                return this.nearestNeighbour(e);
              }
              if (arguments[0] instanceof ys) {
                const t = arguments[0];
                return this.nearestNeighbour(t, i.POSITIVE_INFINITY);
              }
            } else if (2 === arguments.length) {
              if (arguments[0] instanceof Is && _(arguments[1], Es)) {
                const t = arguments[0],
                  e = arguments[1],
                  n = new ys(this.getRoot(), t.getRoot(), e);
                return this.nearestNeighbour(n);
              }
              if (
                arguments[0] instanceof ys &&
                "number" == typeof arguments[1]
              ) {
                const t = arguments[0];
                let e = arguments[1],
                  n = null;
                const s = new fs();
                for (s.add(t); !s.isEmpty() && e > 0; ) {
                  const t = s.poll(),
                    i = t.getDistance();
                  if (i >= e) break;
                  t.isLeaves() ? ((e = i), (n = t)) : t.expandToQueue(s, e);
                }
                return [
                  n.getBoundable(0).getItem(),
                  n.getBoundable(1).getItem(),
                ];
              }
              if (
                arguments[0] instanceof ys &&
                Number.isInteger(arguments[1])
              ) {
                const t = arguments[0],
                  e = arguments[1];
                return this.nearestNeighbour(t, i.POSITIVE_INFINITY, e);
              }
            } else if (3 === arguments.length) {
              if (
                _(arguments[2], Es) &&
                arguments[0] instanceof N &&
                arguments[1] instanceof Object
              ) {
                const t = arguments[2],
                  e = new ps(arguments[0], arguments[1]),
                  n = new ys(this.getRoot(), e, t);
                return this.nearestNeighbour(n)[0];
              }
              if (
                Number.isInteger(arguments[2]) &&
                arguments[0] instanceof ys &&
                "number" == typeof arguments[1]
              ) {
                const t = arguments[0],
                  e = arguments[2];
                let n = arguments[1];
                const s = new fs();
                s.add(t);
                const i = new fs();
                for (; !s.isEmpty() && n >= 0; ) {
                  const t = s.poll(),
                    r = t.getDistance();
                  if (r >= n) break;
                  t.isLeaves()
                    ? i.size() < e
                      ? i.add(t)
                      : (i.peek().getDistance() > r && (i.poll(), i.add(t)),
                        (n = i.peek().getDistance()))
                    : t.expandToQueue(s, n);
                }
                return Is.getItems(i);
              }
            } else if (4 === arguments.length) {
              const t = arguments[2],
                e = arguments[3],
                n = new ps(arguments[0], arguments[1]),
                s = new ys(this.getRoot(), n, t);
              return this.nearestNeighbour(s, e);
            }
          }
          getClass() {
            return Is;
          }
          get interfaces_() {
            return [us, a];
          }
        }
        class Ns extends ms {
          constructor() {
            super(), Ns.constructor_.apply(this, arguments);
          }
          computeBounds() {
            let t = null;
            for (let e = this.getChildBoundables().iterator(); e.hasNext(); ) {
              const n = e.next();
              null === t
                ? (t = new N(n.getBounds()))
                : t.expandToInclude(n.getBounds());
            }
            return t;
          }
          getClass() {
            return Ns;
          }
          get interfaces_() {
            return [];
          }
        }
        (Ns.constructor_ = function () {
          const t = arguments[0];
          ms.constructor_.call(this, t);
        }),
          (Is.STRtreeNode = Ns),
          (Is.constructor_ = function () {
            if (0 === arguments.length)
              Is.constructor_.call(this, Is.DEFAULT_NODE_CAPACITY);
            else if (1 === arguments.length) {
              const t = arguments[0];
              xs.constructor_.call(this, t);
            }
          }),
          (Is.serialVersionUID = 0x39920f7d5f261e0),
          (Is.xComparator = new (class {
            get interfaces_() {
              return [l];
            }
            compare(t, e) {
              return xs.compareDoubles(
                Is.centreX(t.getBounds()),
                Is.centreX(e.getBounds())
              );
            }
          })()),
          (Is.yComparator = new (class {
            get interfaces_() {
              return [l];
            }
            compare(t, e) {
              return xs.compareDoubles(
                Is.centreY(t.getBounds()),
                Is.centreY(e.getBounds())
              );
            }
          })()),
          (Is.intersectsOp = new (class {
            get interfaces_() {
              return [IntersectsOp];
            }
            intersects(t, e) {
              return t.intersects(e);
            }
          })()),
          (Is.DEFAULT_NODE_CAPACITY = 10);
        var Cs = Object.freeze({ __proto__: null, STRtree: Is }),
          Ss = Object.freeze({
            __proto__: null,
            kdtree: is,
            quadtree: ds,
            strtree: Cs,
          });
        const ws = [
          "Point",
          "MultiPoint",
          "LineString",
          "MultiLineString",
          "Polygon",
          "MultiPolygon",
        ];
        class Ls {
          constructor(t) {
            this.geometryFactory = t || new Wt();
          }
          read(t) {
            let e;
            const n = (e = "string" == typeof t ? JSON.parse(t) : t).type;
            if (!Ts[n]) throw new Error("Unknown GeoJSON type: " + e.type);
            return -1 !== ws.indexOf(n)
              ? Ts[n].call(this, e.coordinates)
              : "GeometryCollection" === n
              ? Ts[n].call(this, e.geometries)
              : Ts[n].call(this, e);
          }
          write(t) {
            const e = t.getGeometryType();
            if (!Rs[e]) throw new Error("Geometry is not supported");
            return Rs[e].call(this, t);
          }
        }
        const Ts = {
            Feature: function (t) {
              const e = {};
              for (const n in t) e[n] = t[n];
              if (t.geometry) {
                const n = t.geometry.type;
                if (!Ts[n]) throw new Error("Unknown GeoJSON type: " + t.type);
                e.geometry = this.read(t.geometry);
              }
              return t.bbox && (e.bbox = Ts.bbox.call(this, t.bbox)), e;
            },
            FeatureCollection: function (t) {
              const e = {};
              if (t.features) {
                e.features = [];
                for (let n = 0; n < t.features.length; ++n)
                  e.features.push(this.read(t.features[n]));
              }
              return t.bbox && (e.bbox = this.parse.bbox.call(this, t.bbox)), e;
            },
            coordinates: function (t) {
              const e = [];
              for (let n = 0; n < t.length; ++n) {
                const s = t[n];
                e.push(new g(s[0], s[1]));
              }
              return e;
            },
            bbox: function (t) {
              return this.geometryFactory.createLinearRing([
                new g(t[0], t[1]),
                new g(t[2], t[1]),
                new g(t[2], t[3]),
                new g(t[0], t[3]),
                new g(t[0], t[1]),
              ]);
            },
            Point: function (t) {
              const e = new g(t[0], t[1]);
              return this.geometryFactory.createPoint(e);
            },
            MultiPoint: function (t) {
              const e = [];
              for (let n = 0; n < t.length; ++n)
                e.push(Ts.Point.call(this, t[n]));
              return this.geometryFactory.createMultiPoint(e);
            },
            LineString: function (t) {
              const e = Ts.coordinates.call(this, t);
              return this.geometryFactory.createLineString(e);
            },
            MultiLineString: function (t) {
              const e = [];
              for (let n = 0; n < t.length; ++n)
                e.push(Ts.LineString.call(this, t[n]));
              return this.geometryFactory.createMultiLineString(e);
            },
            Polygon: function (t) {
              const e = Ts.coordinates.call(this, t[0]),
                n = this.geometryFactory.createLinearRing(e),
                s = [];
              for (let i = 1; i < t.length; ++i) {
                const e = t[i],
                  n = Ts.coordinates.call(this, e),
                  r = this.geometryFactory.createLinearRing(n);
                s.push(r);
              }
              return this.geometryFactory.createPolygon(n, s);
            },
            MultiPolygon: function (t) {
              const e = [];
              for (let n = 0; n < t.length; ++n) {
                const s = t[n];
                e.push(Ts.Polygon.call(this, s));
              }
              return this.geometryFactory.createMultiPolygon(e);
            },
            GeometryCollection: function (t) {
              const e = [];
              for (let n = 0; n < t.length; ++n) {
                const s = t[n];
                e.push(this.read(s));
              }
              return this.geometryFactory.createGeometryCollection(e);
            },
          },
          Rs = {
            coordinate: function (t) {
              return [t.x, t.y];
            },
            Point: function (t) {
              return {
                type: "Point",
                coordinates: Rs.coordinate.call(this, t.getCoordinate()),
              };
            },
            MultiPoint: function (t) {
              const e = [];
              for (let n = 0; n < t._geometries.length; ++n) {
                const s = t._geometries[n],
                  i = Rs.Point.call(this, s);
                e.push(i.coordinates);
              }
              return { type: "MultiPoint", coordinates: e };
            },
            LineString: function (t) {
              const e = [],
                n = t.getCoordinates();
              for (let s = 0; s < n.length; ++s) {
                const t = n[s];
                e.push(Rs.coordinate.call(this, t));
              }
              return { type: "LineString", coordinates: e };
            },
            MultiLineString: function (t) {
              const e = [];
              for (let n = 0; n < t._geometries.length; ++n) {
                const s = t._geometries[n],
                  i = Rs.LineString.call(this, s);
                e.push(i.coordinates);
              }
              return { type: "MultiLineString", coordinates: e };
            },
            Polygon: function (t) {
              const e = [],
                n = Rs.LineString.call(this, t._shell);
              e.push(n.coordinates);
              for (let s = 0; s < t._holes.length; ++s) {
                const n = t._holes[s],
                  i = Rs.LineString.call(this, n);
                e.push(i.coordinates);
              }
              return { type: "Polygon", coordinates: e };
            },
            MultiPolygon: function (t) {
              const e = [];
              for (let n = 0; n < t._geometries.length; ++n) {
                const s = t._geometries[n],
                  i = Rs.Polygon.call(this, s);
                e.push(i.coordinates);
              }
              return { type: "MultiPolygon", coordinates: e };
            },
            GeometryCollection: function (t) {
              const e = [];
              for (let n = 0; n < t._geometries.length; ++n) {
                const s = t._geometries[n],
                  i = s.getGeometryType();
                e.push(Rs[i].call(this, s));
              }
              return { type: "GeometryCollection", geometries: e };
            },
          };
        function Ps(t) {
          return [t.x, t.y];
        }
        var vs = Object.freeze({
          __proto__: null,
          GeoJSONReader: class {
            constructor(t) {
              this.parser = new Ls(t || new Wt());
            }
            read(t) {
              return this.parser.read(t);
            }
          },
          GeoJSONWriter: class {
            constructor() {
              this.parser = new Ls(this.geometryFactory);
            }
            write(t) {
              return this.parser.write(t);
            }
          },
          OL3Parser: class {
            constructor(t, e) {
              (this.geometryFactory = t || new Wt()),
                (this.ol = e || ("undefined" != typeof ol && ol));
            }
            inject(t, e, n, s, i, r, o, l) {
              this.ol = {
                geom: {
                  Point: t,
                  LineString: e,
                  LinearRing: n,
                  Polygon: s,
                  MultiPoint: i,
                  MultiLineString: r,
                  MultiPolygon: o,
                  GeometryCollection: l,
                },
              };
            }
            read(t) {
              const e = this.ol;
              return t instanceof e.geom.Point
                ? this.convertFromPoint(t)
                : t instanceof e.geom.LineString
                ? this.convertFromLineString(t)
                : t instanceof e.geom.LinearRing
                ? this.convertFromLinearRing(t)
                : t instanceof e.geom.Polygon
                ? this.convertFromPolygon(t)
                : t instanceof e.geom.MultiPoint
                ? this.convertFromMultiPoint(t)
                : t instanceof e.geom.MultiLineString
                ? this.convertFromMultiLineString(t)
                : t instanceof e.geom.MultiPolygon
                ? this.convertFromMultiPolygon(t)
                : t instanceof e.geom.GeometryCollection
                ? this.convertFromCollection(t)
                : void 0;
            }
            convertFromPoint(t) {
              const e = t.getCoordinates();
              return this.geometryFactory.createPoint(new g(e[0], e[1]));
            }
            convertFromLineString(t) {
              return this.geometryFactory.createLineString(
                t.getCoordinates().map(function (t) {
                  return new g(t[0], t[1]);
                })
              );
            }
            convertFromLinearRing(t) {
              return this.geometryFactory.createLinearRing(
                t.getCoordinates().map(function (t) {
                  return new g(t[0], t[1]);
                })
              );
            }
            convertFromPolygon(t) {
              const e = t.getLinearRings();
              let n = null;
              const s = [];
              for (let i = 0; i < e.length; i++) {
                const t = this.convertFromLinearRing(e[i]);
                0 === i ? (n = t) : s.push(t);
              }
              return this.geometryFactory.createPolygon(n, s);
            }
            convertFromMultiPoint(t) {
              const e = t.getPoints().map(function (t) {
                return this.convertFromPoint(t);
              }, this);
              return this.geometryFactory.createMultiPoint(e);
            }
            convertFromMultiLineString(t) {
              const e = t.getLineStrings().map(function (t) {
                return this.convertFromLineString(t);
              }, this);
              return this.geometryFactory.createMultiLineString(e);
            }
            convertFromMultiPolygon(t) {
              const e = t.getPolygons().map(function (t) {
                return this.convertFromPolygon(t);
              }, this);
              return this.geometryFactory.createMultiPolygon(e);
            }
            convertFromCollection(t) {
              const e = t.getGeometries().map(function (t) {
                return this.read(t);
              }, this);
              return this.geometryFactory.createGeometryCollection(e);
            }
            write(t) {
              return "Point" === t.getGeometryType()
                ? this.convertToPoint(t.getCoordinate())
                : "LineString" === t.getGeometryType()
                ? this.convertToLineString(t)
                : "LinearRing" === t.getGeometryType()
                ? this.convertToLinearRing(t)
                : "Polygon" === t.getGeometryType()
                ? this.convertToPolygon(t)
                : "MultiPoint" === t.getGeometryType()
                ? this.convertToMultiPoint(t)
                : "MultiLineString" === t.getGeometryType()
                ? this.convertToMultiLineString(t)
                : "MultiPolygon" === t.getGeometryType()
                ? this.convertToMultiPolygon(t)
                : "GeometryCollection" === t.getGeometryType()
                ? this.convertToCollection(t)
                : void 0;
            }
            convertToPoint(t) {
              return new this.ol.geom.Point([t.x, t.y]);
            }
            convertToLineString(t) {
              const e = t._points._coordinates.map(Ps);
              return new this.ol.geom.LineString(e);
            }
            convertToLinearRing(t) {
              const e = t._points._coordinates.map(Ps);
              return new this.ol.geom.LinearRing(e);
            }
            convertToPolygon(t) {
              const e = [t._shell._points._coordinates.map(Ps)];
              for (let n = 0; n < t._holes.length; n++)
                e.push(t._holes[n]._points._coordinates.map(Ps));
              return new this.ol.geom.Polygon(e);
            }
            convertToMultiPoint(t) {
              return new this.ol.geom.MultiPoint(t.getCoordinates().map(Ps));
            }
            convertToMultiLineString(t) {
              const e = [];
              for (let n = 0; n < t._geometries.length; n++)
                e.push(
                  this.convertToLineString(t._geometries[n]).getCoordinates()
                );
              return new this.ol.geom.MultiLineString(e);
            }
            convertToMultiPolygon(t) {
              const e = [];
              for (let n = 0; n < t._geometries.length; n++)
                e.push(
                  this.convertToPolygon(t._geometries[n]).getCoordinates()
                );
              return new this.ol.geom.MultiPolygon(e);
            }
            convertToCollection(t) {
              const e = [];
              for (let n = 0; n < t._geometries.length; n++) {
                const s = t._geometries[n];
                e.push(this.write(s));
              }
              return new this.ol.geom.GeometryCollection(e);
            }
          },
          WKTReader: class {
            constructor(t) {
              this.parser = new Zt(t || new Wt());
            }
            read(t) {
              return this.parser.read(t);
            }
          },
          WKTWriter: $t,
        });
        class Os {
          constructor() {
            Os.constructor_.apply(this, arguments);
          }
          static relativeSign(t, e) {
            return t < e ? -1 : t > e ? 1 : 0;
          }
          static compare(t, e, n) {
            if (e.equals2D(n)) return 0;
            const s = Os.relativeSign(e.x, n.x),
              i = Os.relativeSign(e.y, n.y);
            switch (t) {
              case 0:
                return Os.compareValue(s, i);
              case 1:
                return Os.compareValue(i, s);
              case 2:
                return Os.compareValue(i, -s);
              case 3:
                return Os.compareValue(-s, i);
              case 4:
                return Os.compareValue(-s, -i);
              case 5:
                return Os.compareValue(-i, -s);
              case 6:
                return Os.compareValue(-i, s);
              case 7:
                return Os.compareValue(s, -i);
            }
            return u.shouldNeverReachHere("invalid octant value"), 0;
          }
          static compareValue(t, e) {
            return t < 0 ? -1 : t > 0 ? 1 : e < 0 ? -1 : e > 0 ? 1 : 0;
          }
          getClass() {
            return Os;
          }
          get interfaces_() {
            return [];
          }
        }
        Os.constructor_ = function () {};
        class bs {
          constructor() {
            bs.constructor_.apply(this, arguments);
          }
          getCoordinate() {
            return this.coord;
          }
          print(t) {
            t.print(this.coord), t.print(" seg # = " + this.segmentIndex);
          }
          compareTo(t) {
            const e = t;
            return this.segmentIndex < e.segmentIndex
              ? -1
              : this.segmentIndex > e.segmentIndex
              ? 1
              : this.coord.equals2D(e.coord)
              ? 0
              : Os.compare(this._segmentOctant, this.coord, e.coord);
          }
          isEndPoint(t) {
            return (
              (0 === this.segmentIndex && !this._isInterior) ||
              this.segmentIndex === t
            );
          }
          isInterior() {
            return this._isInterior;
          }
          getClass() {
            return bs;
          }
          get interfaces_() {
            return [r];
          }
        }
        bs.constructor_ = function () {
          (this._segString = null),
            (this.coord = null),
            (this.segmentIndex = null),
            (this._segmentOctant = null),
            (this._isInterior = null);
          const t = arguments[0],
            e = arguments[1],
            n = arguments[2],
            s = arguments[3];
          (this._segString = t),
            (this.coord = new g(e)),
            (this.segmentIndex = n),
            (this._segmentOctant = s),
            (this._isInterior = !e.equals2D(t.getCoordinate(n)));
        };
        class Ms {
          constructor() {
            Ms.constructor_.apply(this, arguments);
          }
          getSplitCoordinates() {
            const t = new I();
            this.addEndpoints();
            const e = this.iterator();
            let n = e.next();
            for (; e.hasNext(); ) {
              const s = e.next();
              this.addEdgeCoordinates(n, s, t), (n = s);
            }
            return t.toCoordinateArray();
          }
          addCollapsedNodes() {
            const t = new x();
            this.findCollapsesFromInsertedNodes(t),
              this.findCollapsesFromExistingVertices(t);
            for (let e = t.iterator(); e.hasNext(); ) {
              const t = e.next().intValue();
              this.add(this._edge.getCoordinate(t), t);
            }
          }
          print(t) {
            t.println("Intersections:");
            for (let e = this.iterator(); e.hasNext(); ) e.next().print(t);
          }
          findCollapsesFromExistingVertices(t) {
            for (let e = 0; e < this._edge.size() - 2; e++) {
              const n = this._edge.getCoordinate(e),
                s =
                  (this._edge.getCoordinate(e + 1),
                  this._edge.getCoordinate(e + 2));
              n.equals2D(s) && t.add(new L(e + 1));
            }
          }
          addEdgeCoordinates(t, e, n) {
            e.segmentIndex, t.segmentIndex;
            const s = this._edge.getCoordinate(e.segmentIndex),
              i = e.isInterior() || !e.coord.equals2D(s);
            n.add(new g(t.coord), !1);
            for (let r = t.segmentIndex + 1; r <= e.segmentIndex; r++)
              n.add(this._edge.getCoordinate(r));
            i && n.add(new g(e.coord));
          }
          iterator() {
            return this._nodeMap.values().iterator();
          }
          addSplitEdges(t) {
            this.addEndpoints(), this.addCollapsedNodes();
            const e = this.iterator();
            let n = e.next();
            for (; e.hasNext(); ) {
              const s = e.next(),
                i = this.createSplitEdge(n, s);
              t.add(i), (n = s);
            }
          }
          findCollapseIndex(t, e, n) {
            if (!t.coord.equals2D(e.coord)) return !1;
            let s = e.segmentIndex - t.segmentIndex;
            return (
              e.isInterior() || s--,
              1 === s && ((n[0] = t.segmentIndex + 1), !0)
            );
          }
          findCollapsesFromInsertedNodes(t) {
            const e = new Array(1).fill(null),
              n = this.iterator();
            let s = n.next();
            for (; n.hasNext(); ) {
              const i = n.next();
              this.findCollapseIndex(s, i, e) && t.add(new L(e[0])), (s = i);
            }
          }
          getEdge() {
            return this._edge;
          }
          addEndpoints() {
            const t = this._edge.size() - 1;
            this.add(this._edge.getCoordinate(0), 0),
              this.add(this._edge.getCoordinate(t), t);
          }
          createSplitEdge(t, e) {
            let n = e.segmentIndex - t.segmentIndex + 2;
            const s = this._edge.getCoordinate(e.segmentIndex),
              i = e.isInterior() || !e.coord.equals2D(s);
            i || n--;
            const r = new Array(n).fill(null);
            let o = 0;
            r[o++] = new g(t.coord);
            for (let l = t.segmentIndex + 1; l <= e.segmentIndex; l++)
              r[o++] = this._edge.getCoordinate(l);
            return (
              i && (r[o] = new g(e.coord)), new Gs(r, this._edge.getData())
            );
          }
          add(t, e) {
            const n = new bs(this._edge, t, e, this._edge.getSegmentOctant(e)),
              s = this._nodeMap.get(n);
            return null !== s
              ? (u.isTrue(
                  s.coord.equals2D(t),
                  "Found equal nodes with different coordinates"
                ),
                s)
              : (this._nodeMap.put(n, n), n);
          }
          checkSplitEdgesCorrectness(t) {
            const e = this._edge.getCoordinates(),
              n = t.get(0).getCoordinate(0);
            if (!n.equals2D(e[0]))
              throw new c("bad split edge start point at " + n);
            const s = t.get(t.size() - 1).getCoordinates(),
              i = s[s.length - 1];
            if (!i.equals2D(e[e.length - 1]))
              throw new c("bad split edge end point at " + i);
          }
          getClass() {
            return Ms;
          }
          get interfaces_() {
            return [];
          }
        }
        Ms.constructor_ = function () {
          (this._nodeMap = new ot()), (this._edge = null);
          const t = arguments[0];
          this._edge = t;
        };
        class Ds {
          constructor() {
            Ds.constructor_.apply(this, arguments);
          }
          static octant() {
            if (
              "number" == typeof arguments[0] &&
              "number" == typeof arguments[1]
            ) {
              const t = arguments[0],
                e = arguments[1];
              if (0 === t && 0 === e)
                throw new n(
                  "Cannot compute the octant for point ( " + t + ", " + e + " )"
                );
              const s = Math.abs(t),
                i = Math.abs(e);
              return t >= 0
                ? e >= 0
                  ? s >= i
                    ? 0
                    : 1
                  : s >= i
                  ? 7
                  : 6
                : e >= 0
                ? s >= i
                  ? 3
                  : 2
                : s >= i
                ? 4
                : 5;
            }
            if (arguments[0] instanceof g && arguments[1] instanceof g) {
              const t = arguments[0],
                e = arguments[1],
                s = e.x - t.x,
                i = e.y - t.y;
              if (0 === s && 0 === i)
                throw new n(
                  "Cannot compute the octant for two identical points " + t
                );
              return Ds.octant(s, i);
            }
          }
          getClass() {
            return Ds;
          }
          get interfaces_() {
            return [];
          }
        }
        Ds.constructor_ = function () {};
        class As {
          constructor() {
            As.constructor_.apply(this, arguments);
          }
          getCoordinates() {}
          size() {}
          getCoordinate(t) {}
          isClosed() {}
          setData(t) {}
          getData() {}
          getClass() {
            return As;
          }
          get interfaces_() {
            return [];
          }
        }
        As.constructor_ = function () {};
        class Fs {
          constructor() {
            Fs.constructor_.apply(this, arguments);
          }
          addIntersection(t, e) {}
          getClass() {
            return Fs;
          }
          get interfaces_() {
            return [As];
          }
        }
        Fs.constructor_ = function () {};
        class Gs {
          constructor() {
            Gs.constructor_.apply(this, arguments);
          }
          static getNodedSubstrings() {
            if (1 === arguments.length) {
              const t = arguments[0],
                e = new x();
              return Gs.getNodedSubstrings(t, e), e;
            }
            if (2 === arguments.length) {
              const t = arguments[1];
              for (let e = arguments[0].iterator(); e.hasNext(); )
                e.next().getNodeList().addSplitEdges(t);
            }
          }
          getCoordinates() {
            return this._pts;
          }
          size() {
            return this._pts.length;
          }
          getCoordinate(t) {
            return this._pts[t];
          }
          isClosed() {
            return this._pts[0].equals(this._pts[this._pts.length - 1]);
          }
          getSegmentOctant(t) {
            return t === this._pts.length - 1
              ? -1
              : this.safeOctant(
                  this.getCoordinate(t),
                  this.getCoordinate(t + 1)
                );
          }
          setData(t) {
            this._data = t;
          }
          safeOctant(t, e) {
            return t.equals2D(e) ? 0 : Ds.octant(t, e);
          }
          getData() {
            return this._data;
          }
          addIntersection() {
            if (2 === arguments.length) {
              const t = arguments[0],
                e = arguments[1];
              this.addIntersectionNode(t, e);
            } else if (4 === arguments.length) {
              const t = arguments[1],
                e = arguments[3],
                n = new g(arguments[0].getIntersection(e));
              this.addIntersection(n, t);
            }
          }
          toString() {
            return $t.toLineString(new Yt(this._pts));
          }
          getNodeList() {
            return this._nodeList;
          }
          addIntersectionNode(t, e) {
            let n = e;
            const s = n + 1;
            if (s < this._pts.length) {
              const e = this._pts[s];
              t.equals2D(e) && (n = s);
            }
            return this._nodeList.add(t, n);
          }
          addIntersections(t, e, n) {
            for (let s = 0; s < t.getIntersectionNum(); s++)
              this.addIntersection(t, e, n, s);
          }
          getClass() {
            return Gs;
          }
          get interfaces_() {
            return [Fs];
          }
        }
        Gs.constructor_ = function () {
          (this._nodeList = new Ms(this)),
            (this._pts = null),
            (this._data = null);
          const t = arguments[0],
            e = arguments[1];
          (this._pts = t), (this._data = e);
        };
        class qs {
          constructor() {
            qs.constructor_.apply(this, arguments);
          }
          overlap() {
            if (2 === arguments.length);
            else if (4 === arguments.length) {
              const t = arguments[1],
                e = arguments[2],
                n = arguments[3];
              arguments[0].getLineSegment(t, this._overlapSeg1),
                e.getLineSegment(n, this._overlapSeg2),
                this.overlap(this._overlapSeg1, this._overlapSeg2);
            }
          }
          getClass() {
            return qs;
          }
          get interfaces_() {
            return [];
          }
        }
        qs.constructor_ = function () {
          (this._overlapSeg1 = new ne()), (this._overlapSeg2 = new ne());
        };
        class Bs {
          constructor() {
            Bs.constructor_.apply(this, arguments);
          }
          getLineSegment(t, e) {
            (e.p0 = this._pts[t]), (e.p1 = this._pts[t + 1]);
          }
          computeSelect(t, e, n, s) {
            const i = this._pts[e],
              r = this._pts[n];
            if (n - e == 1) return s.select(this, e), null;
            if (!t.intersects(i, r)) return null;
            const o = Math.trunc((e + n) / 2);
            e < o && this.computeSelect(t, e, o, s),
              o < n && this.computeSelect(t, o, n, s);
          }
          getCoordinates() {
            const t = new Array(this._end - this._start + 1).fill(null);
            let e = 0;
            for (let n = this._start; n <= this._end; n++)
              t[e++] = this._pts[n];
            return t;
          }
          computeOverlaps() {
            if (2 === arguments.length) {
              const t = arguments[0],
                e = arguments[1];
              this.computeOverlaps(
                this._start,
                this._end,
                t,
                t._start,
                t._end,
                e
              );
            } else if (6 === arguments.length) {
              const t = arguments[0],
                e = arguments[1],
                n = arguments[2],
                s = arguments[3],
                i = arguments[4],
                r = arguments[5];
              if (e - t == 1 && i - s == 1)
                return r.overlap(this, t, n, s), null;
              if (!this.overlaps(t, e, n, s, i)) return null;
              const o = Math.trunc((t + e) / 2),
                l = Math.trunc((s + i) / 2);
              t < o &&
                (s < l && this.computeOverlaps(t, o, n, s, l, r),
                l < i && this.computeOverlaps(t, o, n, l, i, r)),
                o < e &&
                  (s < l && this.computeOverlaps(o, e, n, s, l, r),
                  l < i && this.computeOverlaps(o, e, n, l, i, r));
            }
          }
          setId(t) {
            this._id = t;
          }
          select(t, e) {
            this.computeSelect(t, this._start, this._end, e);
          }
          getEnvelope() {
            if (null === this._env) {
              const t = this._pts[this._start],
                e = this._pts[this._end];
              this._env = new N(t, e);
            }
            return this._env;
          }
          overlaps(t, e, n, s, i) {
            return N.intersects(
              this._pts[t],
              this._pts[e],
              n._pts[s],
              n._pts[i]
            );
          }
          getEndIndex() {
            return this._end;
          }
          getStartIndex() {
            return this._start;
          }
          getContext() {
            return this._context;
          }
          getId() {
            return this._id;
          }
          getClass() {
            return Bs;
          }
          get interfaces_() {
            return [];
          }
        }
        Bs.constructor_ = function () {
          (this._pts = null),
            (this._start = null),
            (this._end = null),
            (this._env = null),
            (this._context = null),
            (this._id = null);
          const t = arguments[0],
            e = arguments[1],
            n = arguments[2],
            s = arguments[3];
          (this._pts = t),
            (this._start = e),
            (this._end = n),
            (this._context = s);
        };
        class Vs {
          constructor() {
            Vs.constructor_.apply(this, arguments);
          }
          static getChainStartIndices(t) {
            let e = 0;
            const n = new x();
            n.add(new L(e));
            do {
              const s = Vs.findChainEnd(t, e);
              n.add(new L(s)), (e = s);
            } while (e < t.length - 1);
            return Vs.toIntArray(n);
          }
          static findChainEnd(t, e) {
            let n = e;
            for (; n < t.length - 1 && t[n].equals2D(t[n + 1]); ) n++;
            if (n >= t.length - 1) return t.length - 1;
            const s = Nn.quadrant(t[n], t[n + 1]);
            let i = e + 1;
            for (
              ;
              i < t.length &&
              (t[i - 1].equals2D(t[i]) || Nn.quadrant(t[i - 1], t[i]) === s);

            )
              i++;
            return i - 1;
          }
          static getChains() {
            if (1 === arguments.length) {
              const t = arguments[0];
              return Vs.getChains(t, null);
            }
            if (2 === arguments.length) {
              const t = arguments[0],
                e = arguments[1],
                n = new x(),
                s = Vs.getChainStartIndices(t);
              for (let i = 0; i < s.length - 1; i++) {
                const r = new Bs(t, s[i], s[i + 1], e);
                n.add(r);
              }
              return n;
            }
          }
          static toIntArray(t) {
            const e = new Array(t.size()).fill(null);
            for (let n = 0; n < e.length; n++) e[n] = t.get(n).intValue();
            return e;
          }
          getClass() {
            return Vs;
          }
          get interfaces_() {
            return [];
          }
        }
        Vs.constructor_ = function () {};
        class zs {
          constructor() {
            zs.constructor_.apply(this, arguments);
          }
          computeNodes(t) {}
          getNodedSubstrings() {}
          getClass() {
            return zs;
          }
          get interfaces_() {
            return [];
          }
        }
        zs.constructor_ = function () {};
        class Ys {
          constructor() {
            Ys.constructor_.apply(this, arguments);
          }
          setSegmentIntersector(t) {
            this._segInt = t;
          }
          getClass() {
            return Ys;
          }
          get interfaces_() {
            return [zs];
          }
        }
        Ys.constructor_ = function () {
          if (((this._segInt = null), 0 === arguments.length));
          else if (1 === arguments.length) {
            const t = arguments[0];
            this.setSegmentIntersector(t);
          }
        };
        class Us extends Ys {
          constructor() {
            super(), Us.constructor_.apply(this, arguments);
          }
          getMonotoneChains() {
            return this._monoChains;
          }
          getNodedSubstrings() {
            return Gs.getNodedSubstrings(this._nodedSegStrings);
          }
          getIndex() {
            return this._index;
          }
          add(t) {
            for (
              let e = Vs.getChains(t.getCoordinates(), t).iterator();
              e.hasNext();

            ) {
              const t = e.next();
              t.setId(this._idCounter++),
                this._index.insert(t.getEnvelope(), t),
                this._monoChains.add(t);
            }
          }
          computeNodes(t) {
            this._nodedSegStrings = t;
            for (let e = t.iterator(); e.hasNext(); ) this.add(e.next());
            this.intersectChains();
          }
          intersectChains() {
            const t = new ks(this._segInt);
            for (let e = this._monoChains.iterator(); e.hasNext(); ) {
              const n = e.next();
              for (
                let e = this._index.query(n.getEnvelope()).iterator();
                e.hasNext();

              ) {
                const s = e.next();
                if (
                  (s.getId() > n.getId() &&
                    (n.computeOverlaps(s, t), this._nOverlaps++),
                  this._segInt.isDone())
                )
                  return null;
              }
            }
          }
          getClass() {
            return Us;
          }
          get interfaces_() {
            return [];
          }
        }
        class ks extends qs {
          constructor() {
            super(), ks.constructor_.apply(this, arguments);
          }
          overlap() {
            if (4 !== arguments.length)
              return super.overlap.apply(this, arguments);
            {
              const t = arguments[1],
                e = arguments[2],
                n = arguments[3],
                s = arguments[0].getContext(),
                i = e.getContext();
              this._si.processIntersections(s, t, i, n);
            }
          }
          getClass() {
            return ks;
          }
          get interfaces_() {
            return [];
          }
        }
        (ks.constructor_ = function () {
          this._si = null;
          const t = arguments[0];
          this._si = t;
        }),
          (Us.SegmentOverlapAction = ks),
          (Us.constructor_ = function () {
            if (
              ((this._monoChains = new x()),
              (this._index = new Is()),
              (this._idCounter = 0),
              (this._nodedSegStrings = null),
              (this._nOverlaps = 0),
              0 === arguments.length)
            );
            else if (1 === arguments.length) {
              const t = arguments[0];
              Ys.constructor_.call(this, t);
            }
          });
        class Xs {
          constructor() {
            Xs.constructor_.apply(this, arguments);
          }
          rescale() {
            if (_(arguments[0], p))
              for (let t = arguments[0].iterator(); t.hasNext(); ) {
                const e = t.next();
                this.rescale(e.getCoordinates());
              }
            else if (arguments[0] instanceof Array) {
              const t = arguments[0];
              let e = null,
                n = null;
              2 === t.length && ((e = new g(t[0])), (n = new g(t[1])));
              for (let s = 0; s < t.length; s++)
                (t[s].x = t[s].x / this._scaleFactor + this._offsetX),
                  (t[s].y = t[s].y / this._scaleFactor + this._offsetY);
              2 === t.length && t[0].equals2D(t[1]) && O.out.println(t);
            }
          }
          scale() {
            if (_(arguments[0], p)) {
              const t = arguments[0],
                e = new x(t.size());
              for (let n = t.iterator(); n.hasNext(); ) {
                const t = n.next();
                e.add(new Gs(this.scale(t.getCoordinates()), t.getData()));
              }
              return e;
            }
            if (arguments[0] instanceof Array) {
              const t = arguments[0],
                e = new Array(t.length).fill(null);
              for (let n = 0; n < t.length; n++)
                e[n] = new g(
                  Math.round((t[n].x - this._offsetX) * this._scaleFactor),
                  Math.round((t[n].y - this._offsetY) * this._scaleFactor),
                  t[n].z
                );
              return X.removeRepeatedPoints(e);
            }
          }
          isIntegerPrecision() {
            return 1 === this._scaleFactor;
          }
          getNodedSubstrings() {
            const t = this._noder.getNodedSubstrings();
            return this._isScaled && this.rescale(t), t;
          }
          computeNodes(t) {
            let e = t;
            this._isScaled && (e = this.scale(t)), this._noder.computeNodes(e);
          }
          getClass() {
            return Xs;
          }
          get interfaces_() {
            return [zs];
          }
        }
        Xs.constructor_ = function () {
          if (
            ((this._noder = null),
            (this._scaleFactor = null),
            (this._offsetX = null),
            (this._offsetY = null),
            (this._isScaled = !1),
            2 === arguments.length)
          ) {
            const t = arguments[0],
              e = arguments[1];
            Xs.constructor_.call(this, t, e, 0, 0);
          } else if (4 === arguments.length) {
            const t = arguments[0],
              e = arguments[1];
            (this._noder = t),
              (this._scaleFactor = e),
              (this._isScaled = !this.isIntegerPrecision());
          }
        };
        var Hs = Object.freeze({
          __proto__: null,
          MCIndexNoder: Us,
          ScaledNoder: Xs,
          SegmentString: As,
        });
        class Ws {
          constructor() {
            Ws.constructor_.apply(this, arguments);
          }
          static isSimple() {
            return 1 === arguments.length
              ? new Ws(arguments[0]).isSimple()
              : 2 === arguments.length
              ? new Ws(arguments[0], arguments[1]).isSimple()
              : void 0;
          }
          isSimpleMultiPoint(t) {
            if (t.isEmpty()) return !0;
            const e = new ct();
            for (let n = 0; n < t.getNumGeometries(); n++) {
              const s = t.getGeometryN(n).getCoordinate();
              if (e.contains(s)) return (this._nonSimpleLocation = s), !1;
              e.add(s);
            }
            return !0;
          }
          isSimplePolygonal(t) {
            for (let e = Ee.getLines(t).iterator(); e.hasNext(); ) {
              const t = e.next();
              if (!this.isSimpleLinearGeometry(t)) return !1;
            }
            return !0;
          }
          hasClosedEndpointIntersection(t) {
            const e = new ot();
            for (let n = t.getEdgeIterator(); n.hasNext(); ) {
              const t = n.next(),
                s = (t.getMaximumSegmentIndex(), t.isClosed()),
                i = t.getCoordinate(0);
              this.addEndpoint(e, i, s);
              const r = t.getCoordinate(t.getNumPoints() - 1);
              this.addEndpoint(e, r, s);
            }
            for (let n = e.values().iterator(); n.hasNext(); ) {
              const t = n.next();
              if (t.isClosed && 2 !== t.degree)
                return (this._nonSimpleLocation = t.getCoordinate()), !0;
            }
            return !1;
          }
          getNonSimpleLocation() {
            return this._nonSimpleLocation;
          }
          isSimpleLinearGeometry(t) {
            if (t.isEmpty()) return !0;
            const e = new Jn(0, t),
              n = new ee(),
              s = e.computeSelfNodes(n, !0);
            return (
              !s.hasIntersection() ||
              (s.hasProperIntersection()
                ? ((this._nonSimpleLocation = s.getProperIntersectionPoint()),
                  !1)
                : !this.hasNonEndpointIntersection(e) &&
                  (!this._isClosedEndpointsInInterior ||
                    !this.hasClosedEndpointIntersection(e)))
            );
          }
          hasNonEndpointIntersection(t) {
            for (let e = t.getEdgeIterator(); e.hasNext(); ) {
              const t = e.next(),
                n = t.getMaximumSegmentIndex();
              for (
                let e = t.getEdgeIntersectionList().iterator();
                e.hasNext();

              ) {
                const t = e.next();
                if (!t.isEndPoint(n))
                  return (this._nonSimpleLocation = t.getCoordinate()), !0;
              }
            }
            return !1;
          }
          addEndpoint(t, e, n) {
            let s = t.get(e);
            null === s && ((s = new js(e)), t.put(e, s)), s.addEndpoint(n);
          }
          computeSimple(t) {
            return (
              (this._nonSimpleLocation = null),
              !!t.isEmpty() ||
                (t instanceof Rt || t instanceof ft
                  ? this.isSimpleLinearGeometry(t)
                  : t instanceof Dt
                  ? this.isSimpleMultiPoint(t)
                  : _(t, bt)
                  ? this.isSimplePolygonal(t)
                  : !(t instanceof pt) || this.isSimpleGeometryCollection(t))
            );
          }
          isSimple() {
            return (
              (this._nonSimpleLocation = null),
              this.computeSimple(this._inputGeom)
            );
          }
          isSimpleGeometryCollection(t) {
            for (let e = 0; e < t.getNumGeometries(); e++) {
              const n = t.getGeometryN(e);
              if (!this.computeSimple(n)) return !1;
            }
            return !0;
          }
          getClass() {
            return Ws;
          }
          get interfaces_() {
            return [];
          }
        }
        class js {
          constructor() {
            js.constructor_.apply(this, arguments);
          }
          addEndpoint(t) {
            this.degree++, (this.isClosed |= t);
          }
          getCoordinate() {
            return this.pt;
          }
          getClass() {
            return js;
          }
          get interfaces_() {
            return [];
          }
        }
        (js.constructor_ = function () {
          (this.pt = null), (this.isClosed = null), (this.degree = null);
          const t = arguments[0];
          (this.pt = t), (this.isClosed = !1), (this.degree = 0);
        }),
          (Ws.EndpointInfo = js),
          (Ws.constructor_ = function () {
            if (
              ((this._inputGeom = null),
              (this._isClosedEndpointsInInterior = !0),
              (this._nonSimpleLocation = null),
              1 === arguments.length)
            ) {
              const t = arguments[0];
              this._inputGeom = t;
            } else if (2 === arguments.length) {
              const t = arguments[0],
                e = arguments[1];
              (this._inputGeom = t),
                (this._isClosedEndpointsInInterior = !e.isInBoundary(2));
            }
          });
        class Ks {
          constructor() {
            Ks.constructor_.apply(this, arguments);
          }
          static bufferDistanceError(t) {
            const e = Math.PI / 2 / t;
            return 1 - Math.cos(e / 2);
          }
          getEndCapStyle() {
            return this._endCapStyle;
          }
          isSingleSided() {
            return this._isSingleSided;
          }
          setQuadrantSegments(t) {
            (this._quadrantSegments = t),
              0 === this._quadrantSegments && (this._joinStyle = Ks.JOIN_BEVEL),
              this._quadrantSegments < 0 &&
                ((this._joinStyle = Ks.JOIN_MITRE),
                (this._mitreLimit = Math.abs(this._quadrantSegments))),
              t <= 0 && (this._quadrantSegments = 1),
              this._joinStyle !== Ks.JOIN_ROUND &&
                (this._quadrantSegments = Ks.DEFAULT_QUADRANT_SEGMENTS);
          }
          getJoinStyle() {
            return this._joinStyle;
          }
          setJoinStyle(t) {
            this._joinStyle = t;
          }
          setSimplifyFactor(t) {
            this._simplifyFactor = t < 0 ? 0 : t;
          }
          getSimplifyFactor() {
            return this._simplifyFactor;
          }
          getQuadrantSegments() {
            return this._quadrantSegments;
          }
          setEndCapStyle(t) {
            this._endCapStyle = t;
          }
          getMitreLimit() {
            return this._mitreLimit;
          }
          setMitreLimit(t) {
            this._mitreLimit = t;
          }
          setSingleSided(t) {
            this._isSingleSided = t;
          }
          getClass() {
            return Ks;
          }
          get interfaces_() {
            return [];
          }
        }
        (Ks.constructor_ = function () {
          if (
            ((this._quadrantSegments = Ks.DEFAULT_QUADRANT_SEGMENTS),
            (this._endCapStyle = Ks.CAP_ROUND),
            (this._joinStyle = Ks.JOIN_ROUND),
            (this._mitreLimit = Ks.DEFAULT_MITRE_LIMIT),
            (this._isSingleSided = !1),
            (this._simplifyFactor = Ks.DEFAULT_SIMPLIFY_FACTOR),
            0 === arguments.length)
          );
          else if (1 === arguments.length) {
            const t = arguments[0];
            this.setQuadrantSegments(t);
          } else if (2 === arguments.length) {
            const t = arguments[0],
              e = arguments[1];
            this.setQuadrantSegments(t), this.setEndCapStyle(e);
          } else if (4 === arguments.length) {
            const t = arguments[0],
              e = arguments[1],
              n = arguments[2],
              s = arguments[3];
            this.setQuadrantSegments(t),
              this.setEndCapStyle(e),
              this.setJoinStyle(n),
              this.setMitreLimit(s);
          }
        }),
          (Ks.CAP_ROUND = 1),
          (Ks.CAP_FLAT = 2),
          (Ks.CAP_SQUARE = 3),
          (Ks.JOIN_ROUND = 1),
          (Ks.JOIN_MITRE = 2),
          (Ks.JOIN_BEVEL = 3),
          (Ks.DEFAULT_QUADRANT_SEGMENTS = 8),
          (Ks.DEFAULT_MITRE_LIMIT = 5),
          (Ks.DEFAULT_SIMPLIFY_FACTOR = 0.01);
        class Zs {
          constructor() {
            Zs.constructor_.apply(this, arguments);
          }
          getCoordinate() {
            return this._minCoord;
          }
          getRightmostSide(t, e) {
            let n = this.getRightmostSideOfSegment(t, e);
            return (
              n < 0 && (n = this.getRightmostSideOfSegment(t, e - 1)),
              n < 0 &&
                ((this._minCoord = null), this.checkForRightmostCoordinate(t)),
              n
            );
          }
          findRightmostEdgeAtVertex() {
            const t = this._minDe.getEdge().getCoordinates();
            u.isTrue(
              this._minIndex > 0 && this._minIndex < t.length,
              "rightmost point expected to be interior vertex of edge"
            );
            const e = t[this._minIndex - 1],
              n = t[this._minIndex + 1],
              s = v.index(this._minCoord, n, e);
            let i = !1;
            ((e.y < this._minCoord.y &&
              n.y < this._minCoord.y &&
              s === v.COUNTERCLOCKWISE) ||
              (e.y > this._minCoord.y &&
                n.y > this._minCoord.y &&
                s === v.CLOCKWISE)) &&
              (i = !0),
              i && (this._minIndex = this._minIndex - 1);
          }
          getRightmostSideOfSegment(t, e) {
            const n = t.getEdge().getCoordinates();
            if (e < 0 || e + 1 >= n.length) return -1;
            if (n[e].y === n[e + 1].y) return -1;
            let s = vn.LEFT;
            return n[e].y < n[e + 1].y && (s = vn.RIGHT), s;
          }
          getEdge() {
            return this._orientedDe;
          }
          checkForRightmostCoordinate(t) {
            const e = t.getEdge().getCoordinates();
            for (let n = 0; n < e.length - 1; n++)
              (null === this._minCoord || e[n].x > this._minCoord.x) &&
                ((this._minDe = t),
                (this._minIndex = n),
                (this._minCoord = e[n]));
          }
          findRightmostEdgeAtNode() {
            const t = this._minDe.getNode().getEdges();
            (this._minDe = t.getRightmostEdge()),
              this._minDe.isForward() ||
                ((this._minDe = this._minDe.getSym()),
                (this._minIndex =
                  this._minDe.getEdge().getCoordinates().length - 1));
          }
          findEdge(t) {
            for (let e = t.iterator(); e.hasNext(); ) {
              const t = e.next();
              t.isForward() && this.checkForRightmostCoordinate(t);
            }
            u.isTrue(
              0 !== this._minIndex ||
                this._minCoord.equals(this._minDe.getCoordinate()),
              "inconsistency in rightmost processing"
            ),
              0 === this._minIndex
                ? this.findRightmostEdgeAtNode()
                : this.findRightmostEdgeAtVertex(),
              (this._orientedDe = this._minDe),
              this.getRightmostSide(this._minDe, this._minIndex) === vn.LEFT &&
                (this._orientedDe = this._minDe.getSym());
          }
          getClass() {
            return Zs;
          }
          get interfaces_() {
            return [];
          }
        }
        function Qs() {
          this.array_ = [];
        }
        (Zs.constructor_ = function () {
          (this._minIndex = -1),
            (this._minCoord = null),
            (this._minDe = null),
            (this._orientedDe = null);
        }),
          (Qs.prototype.addLast = function (t) {
            this.array_.push(t);
          }),
          (Qs.prototype.removeFirst = function () {
            return this.array_.shift();
          }),
          (Qs.prototype.isEmpty = function () {
            return 0 === this.array_.length;
          });
        class Js {
          constructor() {
            Js.constructor_.apply(this, arguments);
          }
          clearVisitedEdges() {
            for (let t = this._dirEdgeList.iterator(); t.hasNext(); )
              t.next().setVisited(!1);
          }
          getRightmostCoordinate() {
            return this._rightMostCoord;
          }
          computeNodeDepth(t) {
            let e = null;
            for (let n = t.getEdges().iterator(); n.hasNext(); ) {
              const t = n.next();
              if (t.isVisited() || t.getSym().isVisited()) {
                e = t;
                break;
              }
            }
            if (null === e)
              throw new jn(
                "unable to find edge to compute depths at " + t.getCoordinate()
              );
            t.getEdges().computeDepths(e);
            for (let n = t.getEdges().iterator(); n.hasNext(); ) {
              const t = n.next();
              t.setVisited(!0), this.copySymDepths(t);
            }
          }
          computeDepth(t) {
            this.clearVisitedEdges();
            const e = this._finder.getEdge();
            e.getNode(),
              e.getLabel(),
              e.setEdgeDepths(vn.RIGHT, t),
              this.copySymDepths(e),
              this.computeDepths(e);
          }
          create(t) {
            this.addReachable(t),
              this._finder.findEdge(this._dirEdgeList),
              (this._rightMostCoord = this._finder.getCoordinate());
          }
          findResultEdges() {
            for (let t = this._dirEdgeList.iterator(); t.hasNext(); ) {
              const e = t.next();
              e.getDepth(vn.RIGHT) >= 1 &&
                e.getDepth(vn.LEFT) <= 0 &&
                !e.isInteriorAreaEdge() &&
                e.setInResult(!0);
            }
          }
          computeDepths(t) {
            const e = new J(),
              n = new Qs(),
              s = t.getNode();
            for (n.addLast(s), e.add(s), t.setVisited(!0); !n.isEmpty(); ) {
              const t = n.removeFirst();
              e.add(t), this.computeNodeDepth(t);
              for (let s = t.getEdges().iterator(); s.hasNext(); ) {
                const t = s.next().getSym();
                if (t.isVisited()) continue;
                const i = t.getNode();
                e.contains(i) || (n.addLast(i), e.add(i));
              }
            }
          }
          compareTo(t) {
            const e = t;
            return this._rightMostCoord.x < e._rightMostCoord.x
              ? -1
              : this._rightMostCoord.x > e._rightMostCoord.x
              ? 1
              : 0;
          }
          getEnvelope() {
            if (null === this._env) {
              const t = new N();
              for (let e = this._dirEdgeList.iterator(); e.hasNext(); ) {
                const n = e.next().getEdge().getCoordinates();
                for (let e = 0; e < n.length - 1; e++) t.expandToInclude(n[e]);
              }
              this._env = t;
            }
            return this._env;
          }
          addReachable(t) {
            const e = new ln();
            for (e.add(t); !e.empty(); ) {
              const t = e.pop();
              this.add(t, e);
            }
          }
          copySymDepths(t) {
            const e = t.getSym();
            e.setDepth(vn.LEFT, t.getDepth(vn.RIGHT)),
              e.setDepth(vn.RIGHT, t.getDepth(vn.LEFT));
          }
          add(t, e) {
            t.setVisited(!0), this._nodes.add(t);
            for (let n = t.getEdges().iterator(); n.hasNext(); ) {
              const t = n.next();
              this._dirEdgeList.add(t);
              const s = t.getSym().getNode();
              s.isVisited() || e.push(s);
            }
          }
          getNodes() {
            return this._nodes;
          }
          getDirectedEdges() {
            return this._dirEdgeList;
          }
          getClass() {
            return Js;
          }
          get interfaces_() {
            return [r];
          }
        }
        Js.constructor_ = function () {
          (this._finder = null),
            (this._dirEdgeList = new x()),
            (this._nodes = new x()),
            (this._rightMostCoord = null),
            (this._env = null),
            (this._finder = new Zs());
        };
        class $s {
          constructor() {
            $s.constructor_.apply(this, arguments);
          }
          computeRing() {
            if (null !== this._ring) return null;
            const t = new Array(this._pts.size()).fill(null);
            for (let e = 0; e < this._pts.size(); e++) t[e] = this._pts.get(e);
            (this._ring = this._geometryFactory.createLinearRing(t)),
              (this._isHole = v.isCCW(this._ring.getCoordinates()));
          }
          isIsolated() {
            return 1 === this._label.getGeometryCount();
          }
          computePoints(t) {
            this._startDe = t;
            let e = t,
              n = !0;
            do {
              if (null === e) throw new jn("Found null DirectedEdge");
              if (e.getEdgeRing() === this)
                throw new jn(
                  "Directed Edge visited twice during ring-building at " +
                    e.getCoordinate()
                );
              this._edges.add(e);
              const t = e.getLabel();
              u.isTrue(t.isArea()),
                this.mergeLabel(t),
                this.addPoints(e.getEdge(), e.isForward(), n),
                (n = !1),
                this.setEdgeRing(e, this),
                (e = this.getNext(e));
            } while (e !== this._startDe);
          }
          getLinearRing() {
            return this._ring;
          }
          getCoordinate(t) {
            return this._pts.get(t);
          }
          computeMaxNodeDegree() {
            this._maxNodeDegree = 0;
            let t = this._startDe;
            do {
              const e = t.getNode().getEdges().getOutgoingDegree(this);
              e > this._maxNodeDegree && (this._maxNodeDegree = e),
                (t = this.getNext(t));
            } while (t !== this._startDe);
            this._maxNodeDegree *= 2;
          }
          addPoints(t, e, n) {
            const s = t.getCoordinates();
            if (e) {
              let t = 1;
              n && (t = 0);
              for (let e = t; e < s.length; e++) this._pts.add(s[e]);
            } else {
              let t = s.length - 2;
              n && (t = s.length - 1);
              for (let e = t; e >= 0; e--) this._pts.add(s[e]);
            }
          }
          isHole() {
            return this._isHole;
          }
          setInResult() {
            let t = this._startDe;
            do {
              t.getEdge().setInResult(!0), (t = t.getNext());
            } while (t !== this._startDe);
          }
          containsPoint(t) {
            const e = this.getLinearRing();
            if (!e.getEnvelopeInternal().contains(t)) return !1;
            if (!je.isInRing(t, e.getCoordinates())) return !1;
            for (let n = this._holes.iterator(); n.hasNext(); )
              if (n.next().containsPoint(t)) return !1;
            return !0;
          }
          addHole(t) {
            this._holes.add(t);
          }
          isShell() {
            return null === this._shell;
          }
          getLabel() {
            return this._label;
          }
          getEdges() {
            return this._edges;
          }
          getMaxNodeDegree() {
            return (
              this._maxNodeDegree < 0 && this.computeMaxNodeDegree(),
              this._maxNodeDegree
            );
          }
          getShell() {
            return this._shell;
          }
          mergeLabel() {
            if (1 === arguments.length) {
              const t = arguments[0];
              this.mergeLabel(t, 0), this.mergeLabel(t, 1);
            } else if (2 === arguments.length) {
              const t = arguments[1],
                e = arguments[0].getLocation(t, vn.RIGHT);
              if (e === se.NONE) return null;
              if (this._label.getLocation(t) === se.NONE)
                return this._label.setLocation(t, e), null;
            }
          }
          setShell(t) {
            (this._shell = t), null !== t && t.addHole(this);
          }
          toPolygon(t) {
            const e = new Array(this._holes.size()).fill(null);
            for (let n = 0; n < this._holes.size(); n++)
              e[n] = this._holes.get(n).getLinearRing();
            return t.createPolygon(this.getLinearRing(), e);
          }
          getClass() {
            return $s;
          }
          get interfaces_() {
            return [];
          }
        }
        $s.constructor_ = function () {
          if (
            ((this._startDe = null),
            (this._maxNodeDegree = -1),
            (this._edges = new x()),
            (this._pts = new x()),
            (this._label = new Gn(se.NONE)),
            (this._ring = null),
            (this._isHole = null),
            (this._shell = null),
            (this._holes = new x()),
            (this._geometryFactory = null),
            0 === arguments.length)
          );
          else if (2 === arguments.length) {
            const t = arguments[0],
              e = arguments[1];
            (this._geometryFactory = e),
              this.computePoints(t),
              this.computeRing();
          }
        };
        class ti extends $s {
          constructor() {
            super(), ti.constructor_.apply(this, arguments);
          }
          setEdgeRing(t, e) {
            t.setMinEdgeRing(e);
          }
          getNext(t) {
            return t.getNextMin();
          }
          getClass() {
            return ti;
          }
          get interfaces_() {
            return [];
          }
        }
        ti.constructor_ = function () {
          const t = arguments[0],
            e = arguments[1];
          $s.constructor_.call(this, t, e);
        };
        class ei extends $s {
          constructor() {
            super(), ei.constructor_.apply(this, arguments);
          }
          buildMinimalRings() {
            const t = new x();
            let e = this._startDe;
            do {
              if (null === e.getMinEdgeRing()) {
                const n = new ti(e, this._geometryFactory);
                t.add(n);
              }
              e = e.getNext();
            } while (e !== this._startDe);
            return t;
          }
          setEdgeRing(t, e) {
            t.setEdgeRing(e);
          }
          linkDirectedEdgesForMinimalEdgeRings() {
            let t = this._startDe;
            do {
              t.getNode().getEdges().linkMinimalDirectedEdges(this),
                (t = t.getNext());
            } while (t !== this._startDe);
          }
          getNext(t) {
            return t.getNext();
          }
          getClass() {
            return ei;
          }
          get interfaces_() {
            return [];
          }
        }
        ei.constructor_ = function () {
          const t = arguments[0],
            e = arguments[1];
          $s.constructor_.call(this, t, e);
        };
        class ni {
          constructor() {
            ni.constructor_.apply(this, arguments);
          }
          sortShellsAndHoles(t, e, n) {
            for (let s = t.iterator(); s.hasNext(); ) {
              const t = s.next();
              t.isHole() ? n.add(t) : e.add(t);
            }
          }
          computePolygons(t) {
            const e = new x();
            for (let n = t.iterator(); n.hasNext(); ) {
              const t = n.next().toPolygon(this._geometryFactory);
              e.add(t);
            }
            return e;
          }
          placeFreeHoles(t, e) {
            for (let n = e.iterator(); n.hasNext(); ) {
              const e = n.next();
              if (null === e.getShell()) {
                const n = this.findEdgeRingContaining(e, t);
                if (null === n)
                  throw new jn(
                    "unable to assign hole to a shell",
                    e.getCoordinate(0)
                  );
                e.setShell(n);
              }
            }
          }
          buildMinimalEdgeRings(t, e, n) {
            const s = new x();
            for (let i = t.iterator(); i.hasNext(); ) {
              const t = i.next();
              if (t.getMaxNodeDegree() > 2) {
                t.linkDirectedEdgesForMinimalEdgeRings();
                const s = t.buildMinimalRings(),
                  i = this.findShell(s);
                null !== i
                  ? (this.placePolygonHoles(i, s), e.add(i))
                  : n.addAll(s);
              } else s.add(t);
            }
            return s;
          }
          containsPoint(t) {
            for (let e = this._shellList.iterator(); e.hasNext(); )
              if (e.next().containsPoint(t)) return !0;
            return !1;
          }
          buildMaximalEdgeRings(t) {
            const e = new x();
            for (let n = t.iterator(); n.hasNext(); ) {
              const t = n.next();
              if (
                t.isInResult() &&
                t.getLabel().isArea() &&
                null === t.getEdgeRing()
              ) {
                const n = new ei(t, this._geometryFactory);
                e.add(n), n.setInResult();
              }
            }
            return e;
          }
          placePolygonHoles(t, e) {
            for (let n = e.iterator(); n.hasNext(); ) {
              const e = n.next();
              e.isHole() && e.setShell(t);
            }
          }
          getPolygons() {
            return this.computePolygons(this._shellList);
          }
          findEdgeRingContaining(t, e) {
            const n = t.getLinearRing(),
              s = n.getEnvelopeInternal(),
              i = n.getCoordinateN(0);
            let r = null,
              o = null;
            for (let l = e.iterator(); l.hasNext(); ) {
              const t = l.next(),
                e = t.getLinearRing(),
                n = e.getEnvelopeInternal();
              null !== r && (o = r.getLinearRing().getEnvelopeInternal());
              let a = !1;
              n.contains(s) && je.isInRing(i, e.getCoordinates()) && (a = !0),
                a && (null === r || o.contains(n)) && (r = t);
            }
            return r;
          }
          findShell(t) {
            let e = 0,
              n = null;
            for (let s = t.iterator(); s.hasNext(); ) {
              const t = s.next();
              t.isHole() || ((n = t), e++);
            }
            return (
              u.isTrue(e <= 1, "found two shells in MinimalEdgeRing list"), n
            );
          }
          add() {
            if (1 === arguments.length) {
              const t = arguments[0];
              this.add(t.getEdgeEnds(), t.getNodes());
            } else if (2 === arguments.length) {
              const t = arguments[0],
                e = arguments[1];
              Qn.linkResultDirectedEdges(e);
              const n = this.buildMaximalEdgeRings(t),
                s = new x(),
                i = this.buildMinimalEdgeRings(n, this._shellList, s);
              this.sortShellsAndHoles(i, this._shellList, s),
                this.placeFreeHoles(this._shellList, s);
            }
          }
          getClass() {
            return ni;
          }
          get interfaces_() {
            return [];
          }
        }
        ni.constructor_ = function () {
          (this._geometryFactory = null), (this._shellList = new x());
          const t = arguments[0];
          this._geometryFactory = t;
        };
        class si {
          constructor() {
            si.constructor_.apply(this, arguments);
          }
          static simplify(t, e) {
            return new si(t).simplify(e);
          }
          isDeletable(t, e, n, s) {
            const i = this._inputLine[t],
              r = this._inputLine[e],
              o = this._inputLine[n];
            return (
              !!this.isConcave(i, r, o) &&
              !!this.isShallow(i, r, o, s) &&
              this.isShallowSampled(i, r, t, n, s)
            );
          }
          deleteShallowConcavities() {
            let t = 1;
            this._inputLine.length;
            let e = this.findNextNonDeletedIndex(t),
              n = this.findNextNonDeletedIndex(e),
              s = !1;
            for (; n < this._inputLine.length; ) {
              let i = !1;
              this.isDeletable(t, e, n, this._distanceTol) &&
                ((this._isDeleted[e] = si.DELETE), (i = !0), (s = !0)),
                (t = i ? n : e),
                (e = this.findNextNonDeletedIndex(t)),
                (n = this.findNextNonDeletedIndex(e));
            }
            return s;
          }
          isShallowConcavity(t, e, n, s) {
            return (
              v.index(t, e, n) === this._angleOrientation &&
              D.pointToSegment(e, t, n) < s
            );
          }
          isShallowSampled(t, e, n, s, i) {
            let r = Math.trunc((s - n) / si.NUM_PTS_TO_CHECK);
            r <= 0 && (r = 1);
            for (let o = n; o < s; o += r)
              if (!this.isShallow(t, e, this._inputLine[o], i)) return !1;
            return !0;
          }
          isConcave(t, e, n) {
            return v.index(t, e, n) === this._angleOrientation;
          }
          simplify(t) {
            (this._distanceTol = Math.abs(t)),
              t < 0 && (this._angleOrientation = v.CLOCKWISE),
              (this._isDeleted = new Array(this._inputLine.length).fill(null));
            let e = !1;
            do {
              e = this.deleteShallowConcavities();
            } while (e);
            return this.collapseLine();
          }
          findNextNonDeletedIndex(t) {
            let e = t + 1;
            for (
              ;
              e < this._inputLine.length && this._isDeleted[e] === si.DELETE;

            )
              e++;
            return e;
          }
          isShallow(t, e, n, s) {
            return D.pointToSegment(e, t, n) < s;
          }
          collapseLine() {
            const t = new I();
            for (let e = 0; e < this._inputLine.length; e++)
              this._isDeleted[e] !== si.DELETE && t.add(this._inputLine[e]);
            return t.toCoordinateArray();
          }
          getClass() {
            return si;
          }
          get interfaces_() {
            return [];
          }
        }
        (si.constructor_ = function () {
          (this._inputLine = null),
            (this._distanceTol = null),
            (this._isDeleted = null),
            (this._angleOrientation = v.COUNTERCLOCKWISE);
          const t = arguments[0];
          this._inputLine = t;
        }),
          (si.INIT = 0),
          (si.DELETE = 1),
          (si.KEEP = 1),
          (si.NUM_PTS_TO_CHECK = 10);
        class ii {
          constructor() {
            ii.constructor_.apply(this, arguments);
          }
          getCoordinates() {
            return this._ptList.toArray(ii.COORDINATE_ARRAY_TYPE);
          }
          setPrecisionModel(t) {
            this._precisionModel = t;
          }
          addPt(t) {
            const e = new g(t);
            if ((this._precisionModel.makePrecise(e), this.isRedundant(e)))
              return null;
            this._ptList.add(e);
          }
          reverse() {}
          addPts(t, e) {
            if (e) for (let n = 0; n < t.length; n++) this.addPt(t[n]);
            else for (let n = t.length - 1; n >= 0; n--) this.addPt(t[n]);
          }
          isRedundant(t) {
            if (this._ptList.size() < 1) return !1;
            const e = this._ptList.get(this._ptList.size() - 1);
            return t.distance(e) < this._minimimVertexDistance;
          }
          toString() {
            return new Wt().createLineString(this.getCoordinates()).toString();
          }
          closeRing() {
            if (this._ptList.size() < 1) return null;
            const t = new g(this._ptList.get(0)),
              e = this._ptList.get(this._ptList.size() - 1);
            if (
              (this._ptList.size() >= 2 &&
                this._ptList.get(this._ptList.size() - 2),
              t.equals(e))
            )
              return null;
            this._ptList.add(t);
          }
          setMinimumVertexDistance(t) {
            this._minimimVertexDistance = t;
          }
          getClass() {
            return ii;
          }
          get interfaces_() {
            return [];
          }
        }
        (ii.constructor_ = function () {
          (this._ptList = null),
            (this._precisionModel = null),
            (this._minimimVertexDistance = 0),
            (this._ptList = new x());
        }),
          (ii.COORDINATE_ARRAY_TYPE = new Array(0).fill(null));
        class ri {
          constructor() {
            ri.constructor_.apply(this, arguments);
          }
          addNextSegment(t, e) {
            if (
              ((this._s0 = this._s1),
              (this._s1 = this._s2),
              (this._s2 = t),
              this._seg0.setCoordinates(this._s0, this._s1),
              this.computeOffsetSegment(
                this._seg0,
                this._side,
                this._distance,
                this._offset0
              ),
              this._seg1.setCoordinates(this._s1, this._s2),
              this.computeOffsetSegment(
                this._seg1,
                this._side,
                this._distance,
                this._offset1
              ),
              this._s1.equals(this._s2))
            )
              return null;
            const n = v.index(this._s0, this._s1, this._s2),
              s =
                (n === v.CLOCKWISE && this._side === vn.LEFT) ||
                (n === v.COUNTERCLOCKWISE && this._side === vn.RIGHT);
            0 === n
              ? this.addCollinear(e)
              : s
              ? this.addOutsideTurn(n, e)
              : this.addInsideTurn(n, e);
          }
          addLineEndCap(t, e) {
            const n = new ne(t, e),
              s = new ne();
            this.computeOffsetSegment(n, vn.LEFT, this._distance, s);
            const i = new ne();
            this.computeOffsetSegment(n, vn.RIGHT, this._distance, i);
            const r = e.x - t.x,
              o = e.y - t.y,
              l = Math.atan2(o, r);
            switch (this._bufParams.getEndCapStyle()) {
              case Ks.CAP_ROUND:
                this._segList.addPt(s.p1),
                  this.addDirectedFillet(
                    e,
                    l + Math.PI / 2,
                    l - Math.PI / 2,
                    v.CLOCKWISE,
                    this._distance
                  ),
                  this._segList.addPt(i.p1);
                break;
              case Ks.CAP_FLAT:
                this._segList.addPt(s.p1), this._segList.addPt(i.p1);
                break;
              case Ks.CAP_SQUARE:
                const t = new g();
                (t.x = Math.abs(this._distance) * Math.cos(l)),
                  (t.y = Math.abs(this._distance) * Math.sin(l));
                const n = new g(s.p1.x + t.x, s.p1.y + t.y),
                  r = new g(i.p1.x + t.x, i.p1.y + t.y);
                this._segList.addPt(n), this._segList.addPt(r);
            }
          }
          getCoordinates() {
            return this._segList.getCoordinates();
          }
          addMitreJoin(t, e, n, s) {
            let i = !0,
              r = null;
            try {
              (r = b.intersection(e.p0, e.p1, n.p0, n.p1)),
                (s <= 0 ? 1 : r.distance(t) / Math.abs(s)) >
                  this._bufParams.getMitreLimit() && (i = !1);
            } catch (t) {
              if (!(t instanceof S)) throw t;
              (r = new g(0, 0)), (i = !1);
            }
            i
              ? this._segList.addPt(r)
              : this.addLimitedMitreJoin(
                  e,
                  n,
                  s,
                  this._bufParams.getMitreLimit()
                );
          }
          addOutsideTurn(t, e) {
            if (
              this._offset0.p1.distance(this._offset1.p0) <
              this._distance * ri.OFFSET_SEGMENT_SEPARATION_FACTOR
            )
              return this._segList.addPt(this._offset0.p1), null;
            this._bufParams.getJoinStyle() === Ks.JOIN_MITRE
              ? this.addMitreJoin(
                  this._s1,
                  this._offset0,
                  this._offset1,
                  this._distance
                )
              : this._bufParams.getJoinStyle() === Ks.JOIN_BEVEL
              ? this.addBevelJoin(this._offset0, this._offset1)
              : (e && this._segList.addPt(this._offset0.p1),
                this.addCornerFillet(
                  this._s1,
                  this._offset0.p1,
                  this._offset1.p0,
                  t,
                  this._distance
                ),
                this._segList.addPt(this._offset1.p0));
          }
          createSquare(t) {
            this._segList.addPt(
              new g(t.x + this._distance, t.y + this._distance)
            ),
              this._segList.addPt(
                new g(t.x + this._distance, t.y - this._distance)
              ),
              this._segList.addPt(
                new g(t.x - this._distance, t.y - this._distance)
              ),
              this._segList.addPt(
                new g(t.x - this._distance, t.y + this._distance)
              ),
              this._segList.closeRing();
          }
          addSegments(t, e) {
            this._segList.addPts(t, e);
          }
          addFirstSegment() {
            this._segList.addPt(this._offset1.p0);
          }
          addCornerFillet(t, e, n, s, i) {
            const r = e.x - t.x,
              o = e.y - t.y;
            let l = Math.atan2(o, r);
            const a = n.x - t.x,
              c = n.y - t.y,
              h = Math.atan2(c, a);
            s === v.CLOCKWISE
              ? l <= h && (l += 2 * Math.PI)
              : l >= h && (l -= 2 * Math.PI),
              this._segList.addPt(e),
              this.addDirectedFillet(t, l, h, s, i),
              this._segList.addPt(n);
          }
          addLastSegment() {
            this._segList.addPt(this._offset1.p1);
          }
          initSideSegments(t, e, n) {
            (this._s1 = t),
              (this._s2 = e),
              (this._side = n),
              this._seg1.setCoordinates(t, e),
              this.computeOffsetSegment(
                this._seg1,
                n,
                this._distance,
                this._offset1
              );
          }
          addLimitedMitreJoin(t, e, n, s) {
            const i = this._seg0.p1,
              r = re.angle(i, this._seg0.p0),
              o =
                (re.angle(i, this._seg1.p1),
                re.angleBetweenOriented(this._seg0.p0, i, this._seg1.p1) / 2),
              l = re.normalize(r + o),
              a = re.normalize(l + Math.PI),
              c = s * n,
              h = n - c * Math.abs(Math.sin(o)),
              u = i.x + c * Math.cos(a),
              d = i.y + c * Math.sin(a),
              _ = new g(u, d),
              p = new ne(i, _),
              f = p.pointAlongOffset(1, h),
              m = p.pointAlongOffset(1, -h);
            this._side === vn.LEFT
              ? (this._segList.addPt(f), this._segList.addPt(m))
              : (this._segList.addPt(m), this._segList.addPt(f));
          }
          addDirectedFillet(t, e, n, s, i) {
            const r = s === v.CLOCKWISE ? -1 : 1,
              o = Math.abs(e - n),
              l = Math.trunc(o / this._filletAngleQuantum + 0.5);
            if (l < 1) return null;
            let a = null,
              c = null;
            (a = 0), (c = o / l);
            let h = 0;
            const u = new g();
            for (; h < o; ) {
              const n = e + r * h;
              (u.x = t.x + i * Math.cos(n)),
                (u.y = t.y + i * Math.sin(n)),
                this._segList.addPt(u),
                (h += c);
            }
          }
          computeOffsetSegment(t, e, n, s) {
            const i = e === vn.LEFT ? 1 : -1,
              r = t.p1.x - t.p0.x,
              o = t.p1.y - t.p0.y,
              l = Math.sqrt(r * r + o * o),
              a = (i * n * r) / l,
              c = (i * n * o) / l;
            (s.p0.x = t.p0.x - c),
              (s.p0.y = t.p0.y + a),
              (s.p1.x = t.p1.x - c),
              (s.p1.y = t.p1.y + a);
          }
          addInsideTurn(t, e) {
            if (
              (this._li.computeIntersection(
                this._offset0.p0,
                this._offset0.p1,
                this._offset1.p0,
                this._offset1.p1
              ),
              this._li.hasIntersection())
            )
              this._segList.addPt(this._li.getIntersection(0));
            else if (
              ((this._hasNarrowConcaveAngle = !0),
              this._offset0.p1.distance(this._offset1.p0) <
                this._distance * ri.INSIDE_TURN_VERTEX_SNAP_DISTANCE_FACTOR)
            )
              this._segList.addPt(this._offset0.p1);
            else {
              if (
                (this._segList.addPt(this._offset0.p1),
                this._closingSegLengthFactor > 0)
              ) {
                const t = new g(
                  (this._closingSegLengthFactor * this._offset0.p1.x +
                    this._s1.x) /
                    (this._closingSegLengthFactor + 1),
                  (this._closingSegLengthFactor * this._offset0.p1.y +
                    this._s1.y) /
                    (this._closingSegLengthFactor + 1)
                );
                this._segList.addPt(t);
                const e = new g(
                  (this._closingSegLengthFactor * this._offset1.p0.x +
                    this._s1.x) /
                    (this._closingSegLengthFactor + 1),
                  (this._closingSegLengthFactor * this._offset1.p0.y +
                    this._s1.y) /
                    (this._closingSegLengthFactor + 1)
                );
                this._segList.addPt(e);
              } else this._segList.addPt(this._s1);
              this._segList.addPt(this._offset1.p0);
            }
          }
          createCircle(t) {
            const e = new g(t.x + this._distance, t.y);
            this._segList.addPt(e),
              this.addDirectedFillet(t, 0, 2 * Math.PI, -1, this._distance),
              this._segList.closeRing();
          }
          addBevelJoin(t, e) {
            this._segList.addPt(t.p1), this._segList.addPt(e.p0);
          }
          init(t) {
            (this._distance = t),
              (this._maxCurveSegmentError =
                t * (1 - Math.cos(this._filletAngleQuantum / 2))),
              (this._segList = new ii()),
              this._segList.setPrecisionModel(this._precisionModel),
              this._segList.setMinimumVertexDistance(
                t * ri.CURVE_VERTEX_SNAP_DISTANCE_FACTOR
              );
          }
          addCollinear(t) {
            this._li.computeIntersection(
              this._s0,
              this._s1,
              this._s1,
              this._s2
            ),
              this._li.getIntersectionNum() >= 2 &&
                (this._bufParams.getJoinStyle() === Ks.JOIN_BEVEL ||
                this._bufParams.getJoinStyle() === Ks.JOIN_MITRE
                  ? (t && this._segList.addPt(this._offset0.p1),
                    this._segList.addPt(this._offset1.p0))
                  : this.addCornerFillet(
                      this._s1,
                      this._offset0.p1,
                      this._offset1.p0,
                      v.CLOCKWISE,
                      this._distance
                    ));
          }
          closeRing() {
            this._segList.closeRing();
          }
          hasNarrowConcaveAngle() {
            return this._hasNarrowConcaveAngle;
          }
          getClass() {
            return ri;
          }
          get interfaces_() {
            return [];
          }
        }
        (ri.constructor_ = function () {
          (this._maxCurveSegmentError = 0),
            (this._filletAngleQuantum = null),
            (this._closingSegLengthFactor = 1),
            (this._segList = null),
            (this._distance = 0),
            (this._precisionModel = null),
            (this._bufParams = null),
            (this._li = null),
            (this._s0 = null),
            (this._s1 = null),
            (this._s2 = null),
            (this._seg0 = new ne()),
            (this._seg1 = new ne()),
            (this._offset0 = new ne()),
            (this._offset1 = new ne()),
            (this._side = 0),
            (this._hasNarrowConcaveAngle = !1);
          const t = arguments[0],
            e = arguments[1],
            n = arguments[2];
          (this._precisionModel = t),
            (this._bufParams = e),
            (this._li = new ee()),
            (this._filletAngleQuantum = Math.PI / 2 / e.getQuadrantSegments()),
            e.getQuadrantSegments() >= 8 &&
              e.getJoinStyle() === Ks.JOIN_ROUND &&
              (this._closingSegLengthFactor = ri.MAX_CLOSING_SEG_LEN_FACTOR),
            this.init(n);
        }),
          (ri.OFFSET_SEGMENT_SEPARATION_FACTOR = 0.001),
          (ri.INSIDE_TURN_VERTEX_SNAP_DISTANCE_FACTOR = 0.001),
          (ri.CURVE_VERTEX_SNAP_DISTANCE_FACTOR = 1e-6),
          (ri.MAX_CLOSING_SEG_LEN_FACTOR = 80);
        class oi {
          constructor() {
            oi.constructor_.apply(this, arguments);
          }
          static copyCoordinates(t) {
            const e = new Array(t.length).fill(null);
            for (let n = 0; n < e.length; n++) e[n] = new g(t[n]);
            return e;
          }
          getOffsetCurve(t, e) {
            if (((this._distance = e), 0 === e)) return null;
            const n = e < 0,
              s = Math.abs(e),
              i = this.getSegGen(s);
            t.length <= 1
              ? this.computePointCurve(t[0], i)
              : this.computeOffsetCurve(t, n, i);
            const r = i.getCoordinates();
            return n && X.reverse(r), r;
          }
          computeSingleSidedBufferCurve(t, e, n) {
            const s = this.simplifyTolerance(this._distance);
            if (e) {
              n.addSegments(t, !0);
              const e = si.simplify(t, -s),
                i = e.length - 1;
              n.initSideSegments(e[i], e[i - 1], vn.LEFT), n.addFirstSegment();
              for (let t = i - 2; t >= 0; t--) n.addNextSegment(e[t], !0);
            } else {
              n.addSegments(t, !1);
              const e = si.simplify(t, s),
                i = e.length - 1;
              n.initSideSegments(e[0], e[1], vn.LEFT), n.addFirstSegment();
              for (let t = 2; t <= i; t++) n.addNextSegment(e[t], !0);
            }
            n.addLastSegment(), n.closeRing();
          }
          computeRingBufferCurve(t, e, n) {
            let s = this.simplifyTolerance(this._distance);
            e === vn.RIGHT && (s = -s);
            const i = si.simplify(t, s),
              r = i.length - 1;
            n.initSideSegments(i[r - 1], i[0], e);
            for (let o = 1; o <= r; o++) {
              const t = 1 !== o;
              n.addNextSegment(i[o], t);
            }
            n.closeRing();
          }
          computeLineBufferCurve(t, e) {
            const n = this.simplifyTolerance(this._distance),
              s = si.simplify(t, n),
              i = s.length - 1;
            e.initSideSegments(s[0], s[1], vn.LEFT);
            for (let l = 2; l <= i; l++) e.addNextSegment(s[l], !0);
            e.addLastSegment(), e.addLineEndCap(s[i - 1], s[i]);
            const r = si.simplify(t, -n),
              o = r.length - 1;
            e.initSideSegments(r[o], r[o - 1], vn.LEFT);
            for (let l = o - 2; l >= 0; l--) e.addNextSegment(r[l], !0);
            e.addLastSegment(), e.addLineEndCap(r[1], r[0]), e.closeRing();
          }
          computePointCurve(t, e) {
            switch (this._bufParams.getEndCapStyle()) {
              case Ks.CAP_ROUND:
                e.createCircle(t);
                break;
              case Ks.CAP_SQUARE:
                e.createSquare(t);
            }
          }
          getLineCurve(t, e) {
            if (
              ((this._distance = e), e < 0 && !this._bufParams.isSingleSided())
            )
              return null;
            if (0 === e) return null;
            const n = Math.abs(e),
              s = this.getSegGen(n);
            if (t.length <= 1) this.computePointCurve(t[0], s);
            else if (this._bufParams.isSingleSided()) {
              const n = e < 0;
              this.computeSingleSidedBufferCurve(t, n, s);
            } else this.computeLineBufferCurve(t, s);
            return s.getCoordinates();
          }
          getBufferParameters() {
            return this._bufParams;
          }
          simplifyTolerance(t) {
            return t * this._bufParams.getSimplifyFactor();
          }
          getRingCurve(t, e, n) {
            if (((this._distance = n), t.length <= 2))
              return this.getLineCurve(t, n);
            if (0 === n) return oi.copyCoordinates(t);
            const s = this.getSegGen(n);
            return this.computeRingBufferCurve(t, e, s), s.getCoordinates();
          }
          computeOffsetCurve(t, e, n) {
            const s = this.simplifyTolerance(this._distance);
            if (e) {
              const e = si.simplify(t, -s),
                i = e.length - 1;
              n.initSideSegments(e[i], e[i - 1], vn.LEFT), n.addFirstSegment();
              for (let t = i - 2; t >= 0; t--) n.addNextSegment(e[t], !0);
            } else {
              const e = si.simplify(t, s),
                i = e.length - 1;
              n.initSideSegments(e[0], e[1], vn.LEFT), n.addFirstSegment();
              for (let t = 2; t <= i; t++) n.addNextSegment(e[t], !0);
            }
            n.addLastSegment();
          }
          getSegGen(t) {
            return new ri(this._precisionModel, this._bufParams, t);
          }
          getClass() {
            return oi;
          }
          get interfaces_() {
            return [];
          }
        }
        oi.constructor_ = function () {
          (this._distance = 0),
            (this._precisionModel = null),
            (this._bufParams = null);
          const t = arguments[0],
            e = arguments[1];
          (this._precisionModel = t), (this._bufParams = e);
        };
        class li {
          constructor() {
            li.constructor_.apply(this, arguments);
          }
          findStabbedSegments() {
            if (1 === arguments.length) {
              const t = arguments[0],
                e = new x();
              for (let n = this._subgraphs.iterator(); n.hasNext(); ) {
                const s = n.next(),
                  i = s.getEnvelope();
                t.y < i.getMinY() ||
                  t.y > i.getMaxY() ||
                  this.findStabbedSegments(t, s.getDirectedEdges(), e);
              }
              return e;
            }
            if (3 === arguments.length)
              if (
                _(arguments[2], m) &&
                arguments[0] instanceof g &&
                arguments[1] instanceof Kn
              ) {
                const t = arguments[0],
                  e = arguments[1],
                  n = arguments[2],
                  s = e.getEdge().getCoordinates();
                for (let i = 0; i < s.length - 1; i++) {
                  if (
                    ((this._seg.p0 = s[i]),
                    (this._seg.p1 = s[i + 1]),
                    this._seg.p0.y > this._seg.p1.y && this._seg.reverse(),
                    Math.max(this._seg.p0.x, this._seg.p1.x) < t.x)
                  )
                    continue;
                  if (this._seg.isHorizontal()) continue;
                  if (t.y < this._seg.p0.y || t.y > this._seg.p1.y) continue;
                  if (v.index(this._seg.p0, this._seg.p1, t) === v.RIGHT)
                    continue;
                  let r = e.getDepth(vn.LEFT);
                  this._seg.p0.equals(s[i]) || (r = e.getDepth(vn.RIGHT));
                  const o = new ai(this._seg, r);
                  n.add(o);
                }
              } else if (
                _(arguments[2], m) &&
                arguments[0] instanceof g &&
                _(arguments[1], m)
              ) {
                const t = arguments[0],
                  e = arguments[2];
                for (let n = arguments[1].iterator(); n.hasNext(); ) {
                  const s = n.next();
                  s.isForward() && this.findStabbedSegments(t, s, e);
                }
              }
          }
          getDepth(t) {
            const e = this.findStabbedSegments(t);
            return 0 === e.size() ? 0 : Ie.min(e)._leftDepth;
          }
          getClass() {
            return li;
          }
          get interfaces_() {
            return [];
          }
        }
        class ai {
          constructor() {
            ai.constructor_.apply(this, arguments);
          }
          compareTo(t) {
            const e = t;
            if (this._upwardSeg.minX() >= e._upwardSeg.maxX()) return 1;
            if (this._upwardSeg.maxX() <= e._upwardSeg.minX()) return -1;
            let n = this._upwardSeg.orientationIndex(e._upwardSeg);
            return 0 !== n ||
              0 !== (n = -1 * e._upwardSeg.orientationIndex(this._upwardSeg))
              ? n
              : this._upwardSeg.compareTo(e._upwardSeg);
          }
          compareX(t, e) {
            const n = t.p0.compareTo(e.p0);
            return 0 !== n ? n : t.p1.compareTo(e.p1);
          }
          toString() {
            return this._upwardSeg.toString();
          }
          getClass() {
            return ai;
          }
          get interfaces_() {
            return [r];
          }
        }
        (ai.constructor_ = function () {
          (this._upwardSeg = null), (this._leftDepth = null);
          const t = arguments[0],
            e = arguments[1];
          (this._upwardSeg = new ne(t)), (this._leftDepth = e);
        }),
          (li.DepthSegment = ai),
          (li.constructor_ = function () {
            (this._subgraphs = null), (this._seg = new ne());
            const t = arguments[0];
            this._subgraphs = t;
          });
        class ci {
          constructor() {
            ci.constructor_.apply(this, arguments);
          }
          addPoint(t) {
            if (this._distance <= 0) return null;
            const e = t.getCoordinates(),
              n = this._curveBuilder.getLineCurve(e, this._distance);
            this.addCurve(n, se.EXTERIOR, se.INTERIOR);
          }
          addPolygon(t) {
            let e = this._distance,
              n = vn.LEFT;
            this._distance < 0 && ((e = -this._distance), (n = vn.RIGHT));
            const s = t.getExteriorRing(),
              i = X.removeRepeatedPoints(s.getCoordinates());
            if (
              this._distance < 0 &&
              this.isErodedCompletely(s, this._distance)
            )
              return null;
            if (this._distance <= 0 && i.length < 3) return null;
            this.addPolygonRing(i, e, n, se.EXTERIOR, se.INTERIOR);
            for (let r = 0; r < t.getNumInteriorRing(); r++) {
              const s = t.getInteriorRingN(r),
                i = X.removeRepeatedPoints(s.getCoordinates());
              (this._distance > 0 &&
                this.isErodedCompletely(s, -this._distance)) ||
                this.addPolygonRing(
                  i,
                  e,
                  vn.opposite(n),
                  se.INTERIOR,
                  se.EXTERIOR
                );
            }
          }
          isTriangleErodedCompletely(t, e) {
            const n = new oe(t[0], t[1], t[2]),
              s = n.inCentre();
            return D.pointToSegment(s, n.p0, n.p1) < Math.abs(e);
          }
          addLineString(t) {
            if (
              this._distance <= 0 &&
              !this._curveBuilder.getBufferParameters().isSingleSided()
            )
              return null;
            const e = X.removeRepeatedPoints(t.getCoordinates()),
              n = this._curveBuilder.getLineCurve(e, this._distance);
            this.addCurve(n, se.EXTERIOR, se.INTERIOR);
          }
          addCurve(t, e, n) {
            if (null === t || t.length < 2) return null;
            const s = new Gs(t, new Gn(0, se.BOUNDARY, e, n));
            this._curveList.add(s);
          }
          getCurves() {
            return this.add(this._inputGeom), this._curveList;
          }
          addPolygonRing(t, e, n, s, i) {
            if (0 === e && t.length < At.MINIMUM_VALID_SIZE) return null;
            let r = s,
              o = i;
            t.length >= At.MINIMUM_VALID_SIZE &&
              v.isCCW(t) &&
              ((r = i), (o = s), (n = vn.opposite(n)));
            const l = this._curveBuilder.getRingCurve(t, n, e);
            this.addCurve(l, r, o);
          }
          add(t) {
            if (t.isEmpty()) return null;
            if (t instanceof Mt) this.addPolygon(t);
            else if (t instanceof Rt) this.addLineString(t);
            else if (t instanceof vt) this.addPoint(t);
            else if (t instanceof Dt) this.addCollection(t);
            else if (t instanceof ft) this.addCollection(t);
            else if (t instanceof Ft) this.addCollection(t);
            else {
              if (!(t instanceof pt))
                throw new UnsupportedOperationException(t.getClass().getName());
              this.addCollection(t);
            }
          }
          isErodedCompletely(t, e) {
            const n = t.getCoordinates();
            if (n.length < 4) return e < 0;
            if (4 === n.length) return this.isTriangleErodedCompletely(n, e);
            const s = t.getEnvelopeInternal(),
              i = Math.min(s.getHeight(), s.getWidth());
            return e < 0 && 2 * Math.abs(e) > i;
          }
          addCollection(t) {
            for (let e = 0; e < t.getNumGeometries(); e++) {
              const n = t.getGeometryN(e);
              this.add(n);
            }
          }
          getClass() {
            return ci;
          }
          get interfaces_() {
            return [];
          }
        }
        ci.constructor_ = function () {
          (this._inputGeom = null),
            (this._distance = null),
            (this._curveBuilder = null),
            (this._curveList = new x());
          const t = arguments[0],
            e = arguments[1],
            n = arguments[2];
          (this._inputGeom = t), (this._distance = e), (this._curveBuilder = n);
        };
        class hi {
          constructor() {
            hi.constructor_.apply(this, arguments);
          }
          getNextCW(t) {
            this.getEdges();
            const e = this._edgeList.indexOf(t);
            let n = e - 1;
            return (
              0 === e && (n = this._edgeList.size() - 1), this._edgeList.get(n)
            );
          }
          propagateSideLabels(t) {
            let e = se.NONE;
            for (let s = this.iterator(); s.hasNext(); ) {
              const n = s.next().getLabel();
              n.isArea(t) &&
                n.getLocation(t, vn.LEFT) !== se.NONE &&
                (e = n.getLocation(t, vn.LEFT));
            }
            if (e === se.NONE) return null;
            let n = e;
            for (let s = this.iterator(); s.hasNext(); ) {
              const e = s.next(),
                i = e.getLabel();
              if (
                (i.getLocation(t, vn.ON) === se.NONE &&
                  i.setLocation(t, vn.ON, n),
                i.isArea(t))
              ) {
                const s = i.getLocation(t, vn.LEFT),
                  r = i.getLocation(t, vn.RIGHT);
                if (r !== se.NONE) {
                  if (r !== n)
                    throw new jn("side location conflict", e.getCoordinate());
                  s === se.NONE &&
                    u.shouldNeverReachHere(
                      "found single null side (at " + e.getCoordinate() + ")"
                    ),
                    (n = s);
                } else
                  u.isTrue(
                    i.getLocation(t, vn.LEFT) === se.NONE,
                    "found single null side"
                  ),
                    i.setLocation(t, vn.RIGHT, n),
                    i.setLocation(t, vn.LEFT, n);
              }
            }
          }
          getCoordinate() {
            const t = this.iterator();
            return t.hasNext() ? t.next().getCoordinate() : null;
          }
          print(t) {
            O.out.println("EdgeEndStar:   " + this.getCoordinate());
            for (let e = this.iterator(); e.hasNext(); ) e.next().print(t);
          }
          isAreaLabelsConsistent(t) {
            return (
              this.computeEdgeEndLabels(t.getBoundaryNodeRule()),
              this.checkAreaLabelsConsistent(0)
            );
          }
          checkAreaLabelsConsistent(t) {
            const e = this.getEdges();
            if (e.size() <= 0) return !0;
            const n = e.size() - 1,
              s = e.get(n).getLabel().getLocation(t, vn.LEFT);
            u.isTrue(s !== se.NONE, "Found unlabelled area edge");
            let i = s;
            for (let r = this.iterator(); r.hasNext(); ) {
              const e = r.next().getLabel();
              u.isTrue(e.isArea(t), "Found non-area edge");
              const n = e.getLocation(t, vn.LEFT),
                s = e.getLocation(t, vn.RIGHT);
              if (n === s) return !1;
              if (s !== i) return !1;
              i = n;
            }
            return !0;
          }
          findIndex(t) {
            this.iterator();
            for (let e = 0; e < this._edgeList.size(); e++)
              if (this._edgeList.get(e) === t) return e;
            return -1;
          }
          iterator() {
            return this.getEdges().iterator();
          }
          getEdges() {
            return (
              null === this._edgeList &&
                (this._edgeList = new x(this._edgeMap.values())),
              this._edgeList
            );
          }
          getLocation(t, e, n) {
            return (
              this._ptInAreaLocation[t] === se.NONE &&
                (this._ptInAreaLocation[t] = Qe.locate(e, n[t].getGeometry())),
              this._ptInAreaLocation[t]
            );
          }
          toString() {
            const t = new w();
            t.append("EdgeEndStar:   " + this.getCoordinate()), t.append("\n");
            for (let e = this.iterator(); e.hasNext(); ) {
              const n = e.next();
              t.append(n), t.append("\n");
            }
            return t.toString();
          }
          computeEdgeEndLabels(t) {
            for (let e = this.iterator(); e.hasNext(); )
              e.next().computeLabel(t);
          }
          computeLabelling(t) {
            this.computeEdgeEndLabels(t[0].getBoundaryNodeRule()),
              this.propagateSideLabels(0),
              this.propagateSideLabels(1);
            const e = [!1, !1];
            for (let n = this.iterator(); n.hasNext(); ) {
              const t = n.next().getLabel();
              for (let n = 0; n < 2; n++)
                t.isLine(n) && t.getLocation(n) === se.BOUNDARY && (e[n] = !0);
            }
            for (let n = this.iterator(); n.hasNext(); ) {
              const s = n.next(),
                i = s.getLabel();
              for (let n = 0; n < 2; n++)
                if (i.isAnyNull(n)) {
                  let r = se.NONE;
                  if (e[n]) r = se.EXTERIOR;
                  else {
                    const e = s.getCoordinate();
                    r = this.getLocation(n, e, t);
                  }
                  i.setAllLocationsIfNull(n, r);
                }
            }
          }
          getDegree() {
            return this._edgeMap.size();
          }
          insertEdgeEnd(t, e) {
            this._edgeMap.put(t, e), (this._edgeList = null);
          }
          getClass() {
            return hi;
          }
          get interfaces_() {
            return [];
          }
        }
        hi.constructor_ = function () {
          (this._edgeMap = new ot()),
            (this._edgeList = null),
            (this._ptInAreaLocation = [se.NONE, se.NONE]);
        };
        class ui extends hi {
          constructor() {
            super(), ui.constructor_.apply(this, arguments);
          }
          linkResultDirectedEdges() {
            this.getResultAreaEdges();
            let t = null,
              e = null,
              n = this._SCANNING_FOR_INCOMING;
            for (let s = 0; s < this._resultAreaEdgeList.size(); s++) {
              const i = this._resultAreaEdgeList.get(s),
                r = i.getSym();
              if (i.getLabel().isArea())
                switch ((null === t && i.isInResult() && (t = i), n)) {
                  case this._SCANNING_FOR_INCOMING:
                    if (!r.isInResult()) continue;
                    (e = r), (n = this._LINKING_TO_OUTGOING);
                    break;
                  case this._LINKING_TO_OUTGOING:
                    if (!i.isInResult()) continue;
                    e.setNext(i), (n = this._SCANNING_FOR_INCOMING);
                }
            }
            if (n === this._LINKING_TO_OUTGOING) {
              if (null === t)
                throw new jn("no outgoing dirEdge found", this.getCoordinate());
              u.isTrue(t.isInResult(), "unable to link last incoming dirEdge"),
                e.setNext(t);
            }
          }
          insert(t) {
            const e = t;
            this.insertEdgeEnd(e, e);
          }
          getRightmostEdge() {
            const t = this.getEdges(),
              e = t.size();
            if (e < 1) return null;
            const n = t.get(0);
            if (1 === e) return n;
            const s = t.get(e - 1),
              i = n.getQuadrant(),
              r = s.getQuadrant();
            return Nn.isNorthern(i) && Nn.isNorthern(r)
              ? n
              : Nn.isNorthern(i) || Nn.isNorthern(r)
              ? 0 !== n.getDy()
                ? n
                : 0 !== s.getDy()
                ? s
                : (u.shouldNeverReachHere(
                    "found two horizontal edges incident on node"
                  ),
                  null)
              : s;
          }
          print(t) {
            O.out.println("DirectedEdgeStar: " + this.getCoordinate());
            for (let e = this.iterator(); e.hasNext(); ) {
              const n = e.next();
              t.print("out "),
                n.print(t),
                t.println(),
                t.print("in "),
                n.getSym().print(t),
                t.println();
            }
          }
          getResultAreaEdges() {
            if (null !== this._resultAreaEdgeList)
              return this._resultAreaEdgeList;
            this._resultAreaEdgeList = new x();
            for (let t = this.iterator(); t.hasNext(); ) {
              const e = t.next();
              (e.isInResult() || e.getSym().isInResult()) &&
                this._resultAreaEdgeList.add(e);
            }
            return this._resultAreaEdgeList;
          }
          updateLabelling(t) {
            for (let e = this.iterator(); e.hasNext(); ) {
              const n = e.next().getLabel();
              n.setAllLocationsIfNull(0, t.getLocation(0)),
                n.setAllLocationsIfNull(1, t.getLocation(1));
            }
          }
          linkAllDirectedEdges() {
            this.getEdges();
            let t = null,
              e = null;
            for (let n = this._edgeList.size() - 1; n >= 0; n--) {
              const s = this._edgeList.get(n),
                i = s.getSym();
              null === e && (e = i), null !== t && i.setNext(t), (t = s);
            }
            e.setNext(t);
          }
          computeDepths() {
            if (1 === arguments.length) {
              const t = arguments[0],
                e = this.findIndex(t),
                n = t.getDepth(vn.LEFT),
                s = t.getDepth(vn.RIGHT),
                i = this.computeDepths(e + 1, this._edgeList.size(), n);
              if (this.computeDepths(0, e, i) !== s)
                throw new jn("depth mismatch at " + t.getCoordinate());
            } else if (3 === arguments.length) {
              const t = arguments[1];
              let e = arguments[2];
              for (let n = arguments[0]; n < t; n++) {
                const t = this._edgeList.get(n);
                t.setEdgeDepths(vn.RIGHT, e), (e = t.getDepth(vn.LEFT));
              }
              return e;
            }
          }
          mergeSymLabels() {
            for (let t = this.iterator(); t.hasNext(); ) {
              const e = t.next();
              e.getLabel().merge(e.getSym().getLabel());
            }
          }
          linkMinimalDirectedEdges(t) {
            let e = null,
              n = null,
              s = this._SCANNING_FOR_INCOMING;
            for (let i = this._resultAreaEdgeList.size() - 1; i >= 0; i--) {
              const r = this._resultAreaEdgeList.get(i),
                o = r.getSym();
              switch ((null === e && r.getEdgeRing() === t && (e = r), s)) {
                case this._SCANNING_FOR_INCOMING:
                  if (o.getEdgeRing() !== t) continue;
                  (n = o), (s = this._LINKING_TO_OUTGOING);
                  break;
                case this._LINKING_TO_OUTGOING:
                  if (r.getEdgeRing() !== t) continue;
                  n.setNextMin(r), (s = this._SCANNING_FOR_INCOMING);
              }
            }
            s === this._LINKING_TO_OUTGOING &&
              (u.isTrue(null !== e, "found null for first outgoing dirEdge"),
              u.isTrue(
                e.getEdgeRing() === t,
                "unable to link last incoming dirEdge"
              ),
              n.setNextMin(e));
          }
          getOutgoingDegree() {
            if (0 === arguments.length) {
              let t = 0;
              for (let e = this.iterator(); e.hasNext(); )
                e.next().isInResult() && t++;
              return t;
            }
            if (1 === arguments.length) {
              const t = arguments[0];
              let e = 0;
              for (let n = this.iterator(); n.hasNext(); )
                n.next().getEdgeRing() === t && e++;
              return e;
            }
          }
          getLabel() {
            return this._label;
          }
          findCoveredLineEdges() {
            let t = se.NONE;
            for (let n = this.iterator(); n.hasNext(); ) {
              const e = n.next(),
                s = e.getSym();
              if (!e.isLineEdge()) {
                if (e.isInResult()) {
                  t = se.INTERIOR;
                  break;
                }
                if (s.isInResult()) {
                  t = se.EXTERIOR;
                  break;
                }
              }
            }
            if (t === se.NONE) return null;
            let e = t;
            for (let n = this.iterator(); n.hasNext(); ) {
              const t = n.next(),
                s = t.getSym();
              t.isLineEdge()
                ? t.getEdge().setCovered(e === se.INTERIOR)
                : (t.isInResult() && (e = se.EXTERIOR),
                  s.isInResult() && (e = se.INTERIOR));
            }
          }
          computeLabelling(t) {
            super.computeLabelling.call(this, t),
              (this._label = new Gn(se.NONE));
            for (let e = this.iterator(); e.hasNext(); ) {
              const t = e.next().getEdge().getLabel();
              for (let e = 0; e < 2; e++) {
                const n = t.getLocation(e);
                (n !== se.INTERIOR && n !== se.BOUNDARY) ||
                  this._label.setLocation(e, se.INTERIOR);
              }
            }
          }
          getClass() {
            return ui;
          }
          get interfaces_() {
            return [];
          }
        }
        ui.constructor_ = function () {
          (this._resultAreaEdgeList = null),
            (this._label = null),
            (this._SCANNING_FOR_INCOMING = 1),
            (this._LINKING_TO_OUTGOING = 2);
        };
        class gi extends Zn {
          constructor() {
            super(), gi.constructor_.apply(this, arguments);
          }
          createNode(t) {
            return new Xn(t, new ui());
          }
          getClass() {
            return gi;
          }
          get interfaces_() {
            return [];
          }
        }
        gi.constructor_ = function () {};
        class di {
          constructor() {
            di.constructor_.apply(this, arguments);
          }
          static orientation(t) {
            return 1 === X.increasingDirection(t);
          }
          static compareOriented(t, e, n, s) {
            const i = e ? 1 : -1,
              r = s ? 1 : -1,
              o = e ? t.length : -1,
              l = s ? n.length : -1;
            let a = e ? 0 : t.length - 1,
              c = s ? 0 : n.length - 1;
            for (;;) {
              const e = t[a].compareTo(n[c]);
              if (0 !== e) return e;
              const s = (a += i) === o,
                h = (c += r) === l;
              if (s && !h) return -1;
              if (!s && h) return 1;
              if (s && h) return 0;
            }
          }
          compareTo(t) {
            const e = t;
            return di.compareOriented(
              this._pts,
              this._orientation,
              e._pts,
              e._orientation
            );
          }
          getClass() {
            return di;
          }
          get interfaces_() {
            return [r];
          }
        }
        di.constructor_ = function () {
          (this._pts = null), (this._orientation = null);
          const t = arguments[0];
          (this._pts = t), (this._orientation = di.orientation(t));
        };
        class _i {
          constructor() {
            _i.constructor_.apply(this, arguments);
          }
          print(t) {
            t.print("MULTILINESTRING ( ");
            for (let e = 0; e < this._edges.size(); e++) {
              const n = this._edges.get(e);
              e > 0 && t.print(","), t.print("(");
              const s = n.getCoordinates();
              for (let e = 0; e < s.length; e++)
                e > 0 && t.print(","), t.print(s[e].x + " " + s[e].y);
              t.println(")");
            }
            t.print(")  ");
          }
          addAll(t) {
            for (let e = t.iterator(); e.hasNext(); ) this.add(e.next());
          }
          findEdgeIndex(t) {
            for (let e = 0; e < this._edges.size(); e++)
              if (this._edges.get(e).equals(t)) return e;
            return -1;
          }
          iterator() {
            return this._edges.iterator();
          }
          getEdges() {
            return this._edges;
          }
          get(t) {
            return this._edges.get(t);
          }
          findEqualEdge(t) {
            const e = new di(t.getCoordinates());
            return this._ocaMap.get(e);
          }
          add(t) {
            this._edges.add(t);
            const e = new di(t.getCoordinates());
            this._ocaMap.put(e, t);
          }
          getClass() {
            return _i;
          }
          get interfaces_() {
            return [];
          }
        }
        _i.constructor_ = function () {
          (this._edges = new x()), (this._ocaMap = new ot());
        };
        class pi {
          constructor() {
            pi.constructor_.apply(this, arguments);
          }
          processIntersections(t, e, n, s) {}
          isDone() {}
          getClass() {
            return pi;
          }
          get interfaces_() {
            return [];
          }
        }
        pi.constructor_ = function () {};
        class fi {
          constructor() {
            fi.constructor_.apply(this, arguments);
          }
          static isAdjacentSegments(t, e) {
            return 1 === Math.abs(t - e);
          }
          isTrivialIntersection(t, e, n, s) {
            if (t === n && 1 === this._li.getIntersectionNum()) {
              if (fi.isAdjacentSegments(e, s)) return !0;
              if (t.isClosed()) {
                const n = t.size() - 1;
                if ((0 === e && s === n) || (0 === s && e === n)) return !0;
              }
            }
            return !1;
          }
          getProperIntersectionPoint() {
            return this._properIntersectionPoint;
          }
          hasProperInteriorIntersection() {
            return this._hasProperInterior;
          }
          getLineIntersector() {
            return this._li;
          }
          hasProperIntersection() {
            return this._hasProper;
          }
          processIntersections(t, e, n, s) {
            if (t === n && e === s) return null;
            this.numTests++;
            const i = t.getCoordinates()[e],
              r = t.getCoordinates()[e + 1],
              o = n.getCoordinates()[s],
              l = n.getCoordinates()[s + 1];
            this._li.computeIntersection(i, r, o, l),
              this._li.hasIntersection() &&
                (this.numIntersections++,
                this._li.isInteriorIntersection() &&
                  (this.numInteriorIntersections++, (this._hasInterior = !0)),
                this.isTrivialIntersection(t, e, n, s) ||
                  ((this._hasIntersection = !0),
                  t.addIntersections(this._li, e, 0),
                  n.addIntersections(this._li, s, 1),
                  this._li.isProper() &&
                    (this.numProperIntersections++,
                    (this._hasProper = !0),
                    (this._hasProperInterior = !0))));
          }
          hasIntersection() {
            return this._hasIntersection;
          }
          isDone() {
            return !1;
          }
          hasInteriorIntersection() {
            return this._hasInterior;
          }
          getClass() {
            return fi;
          }
          get interfaces_() {
            return [pi];
          }
        }
        fi.constructor_ = function () {
          (this._hasIntersection = !1),
            (this._hasProper = !1),
            (this._hasProperInterior = !1),
            (this._hasInterior = !1),
            (this._properIntersectionPoint = null),
            (this._li = null),
            (this._isSelfIntersection = null),
            (this.numIntersections = 0),
            (this.numInteriorIntersections = 0),
            (this.numProperIntersections = 0),
            (this.numTests = 0);
          const t = arguments[0];
          this._li = t;
        };
        class mi {
          constructor() {
            mi.constructor_.apply(this, arguments);
          }
          static depthDelta(t) {
            const e = t.getLocation(0, vn.LEFT),
              n = t.getLocation(0, vn.RIGHT);
            return e === se.INTERIOR && n === se.EXTERIOR
              ? 1
              : e === se.EXTERIOR && n === se.INTERIOR
              ? -1
              : 0;
          }
          static convertSegStrings(t) {
            const e = new Wt(),
              n = new x();
            for (; t.hasNext(); ) {
              const s = t.next(),
                i = e.createLineString(s.getCoordinates());
              n.add(i);
            }
            return e.buildGeometry(n);
          }
          setWorkingPrecisionModel(t) {
            this._workingPrecisionModel = t;
          }
          insertUniqueEdge(t) {
            const e = this._edgeList.findEqualEdge(t);
            if (null !== e) {
              const n = e.getLabel();
              let s = t.getLabel();
              e.isPointwiseEqual(t) || (s = new Gn(t.getLabel())).flip(),
                n.merge(s);
              const i = mi.depthDelta(s),
                r = e.getDepthDelta() + i;
              e.setDepthDelta(r);
            } else
              this._edgeList.add(t),
                t.setDepthDelta(mi.depthDelta(t.getLabel()));
          }
          buildSubgraphs(t, e) {
            const n = new x();
            for (let s = t.iterator(); s.hasNext(); ) {
              const t = s.next(),
                i = t.getRightmostCoordinate(),
                r = new li(n).getDepth(i);
              t.computeDepth(r),
                t.findResultEdges(),
                n.add(t),
                e.add(t.getDirectedEdges(), t.getNodes());
            }
          }
          createSubgraphs(t) {
            const e = new x();
            for (let n = t.getNodes().iterator(); n.hasNext(); ) {
              const t = n.next();
              if (!t.isVisited()) {
                const n = new Js();
                n.create(t), e.add(n);
              }
            }
            return Ie.sort(e, Ie.reverseOrder()), e;
          }
          createEmptyResultGeometry() {
            return this._geomFact.createPolygon();
          }
          getNoder(t) {
            if (null !== this._workingNoder) return this._workingNoder;
            const e = new Us(),
              n = new ee();
            return (
              n.setPrecisionModel(t), e.setSegmentIntersector(new fi(n)), e
            );
          }
          buffer(t, e) {
            let n = this._workingPrecisionModel;
            null === n && (n = t.getPrecisionModel()),
              (this._geomFact = t.getFactory());
            const s = new oi(n, this._bufParams),
              i = new ci(t, e, s).getCurves();
            if (i.size() <= 0) return this.createEmptyResultGeometry();
            this.computeNodedEdges(i, n),
              (this._graph = new Qn(new gi())),
              this._graph.addEdges(this._edgeList.getEdges());
            const r = this.createSubgraphs(this._graph),
              o = new ni(this._geomFact);
            this.buildSubgraphs(r, o);
            const l = o.getPolygons();
            return l.size() <= 0
              ? this.createEmptyResultGeometry()
              : this._geomFact.buildGeometry(l);
          }
          computeNodedEdges(t, e) {
            const n = this.getNoder(e);
            n.computeNodes(t);
            for (let s = n.getNodedSubstrings().iterator(); s.hasNext(); ) {
              const t = s.next(),
                e = t.getCoordinates();
              if (2 === e.length && e[0].equals2D(e[1])) continue;
              const n = t.getData(),
                i = new kn(t.getCoordinates(), new Gn(n));
              this.insertUniqueEdge(i);
            }
          }
          setNoder(t) {
            this._workingNoder = t;
          }
          getClass() {
            return mi;
          }
          get interfaces_() {
            return [];
          }
        }
        mi.constructor_ = function () {
          (this._bufParams = null),
            (this._workingPrecisionModel = null),
            (this._workingNoder = null),
            (this._geomFact = null),
            (this._graph = null),
            (this._edgeList = new _i());
          const t = arguments[0];
          this._bufParams = t;
        };
        class yi {
          constructor() {
            yi.constructor_.apply(this, arguments);
          }
          checkEndPtVertexIntersections() {
            if (0 === arguments.length)
              for (let t = this._segStrings.iterator(); t.hasNext(); ) {
                const e = t.next().getCoordinates();
                this.checkEndPtVertexIntersections(e[0], this._segStrings),
                  this.checkEndPtVertexIntersections(
                    e[e.length - 1],
                    this._segStrings
                  );
              }
            else if (2 === arguments.length) {
              const t = arguments[0];
              for (let e = arguments[1].iterator(); e.hasNext(); ) {
                const n = e.next().getCoordinates();
                for (let e = 1; e < n.length - 1; e++)
                  if (n[e].equals(t))
                    throw new c(
                      "found endpt/interior pt intersection at index " +
                        e +
                        " :pt " +
                        t
                    );
              }
            }
          }
          checkInteriorIntersections() {
            if (0 === arguments.length)
              for (let t = this._segStrings.iterator(); t.hasNext(); ) {
                const e = t.next();
                for (let t = this._segStrings.iterator(); t.hasNext(); ) {
                  const n = t.next();
                  this.checkInteriorIntersections(e, n);
                }
              }
            else if (2 === arguments.length) {
              const t = arguments[0],
                e = arguments[1],
                n = t.getCoordinates(),
                s = e.getCoordinates();
              for (let i = 0; i < n.length - 1; i++)
                for (let n = 0; n < s.length - 1; n++)
                  this.checkInteriorIntersections(t, i, e, n);
            } else if (4 === arguments.length) {
              const t = arguments[0],
                e = arguments[1],
                n = arguments[2],
                s = arguments[3];
              if (t === n && e === s) return null;
              const i = t.getCoordinates()[e],
                r = t.getCoordinates()[e + 1],
                o = n.getCoordinates()[s],
                l = n.getCoordinates()[s + 1];
              if (
                (this._li.computeIntersection(i, r, o, l),
                this._li.hasIntersection() &&
                  (this._li.isProper() ||
                    this.hasInteriorIntersection(this._li, i, r) ||
                    this.hasInteriorIntersection(this._li, o, l)))
              )
                throw new c(
                  "found non-noded intersection at " +
                    i +
                    "-" +
                    r +
                    " and " +
                    o +
                    "-" +
                    l
                );
            }
          }
          checkValid() {
            this.checkEndPtVertexIntersections(),
              this.checkInteriorIntersections(),
              this.checkCollapses();
          }
          checkCollapses() {
            if (0 === arguments.length)
              for (let t = this._segStrings.iterator(); t.hasNext(); ) {
                const e = t.next();
                this.checkCollapses(e);
              }
            else if (1 === arguments.length) {
              const t = arguments[0].getCoordinates();
              for (let e = 0; e < t.length - 2; e++)
                this.checkCollapse(t[e], t[e + 1], t[e + 2]);
            }
          }
          hasInteriorIntersection(t, e, n) {
            for (let s = 0; s < t.getIntersectionNum(); s++) {
              const i = t.getIntersection(s);
              if (!i.equals(e) && !i.equals(n)) return !0;
            }
            return !1;
          }
          checkCollapse(t, e, n) {
            if (t.equals(n))
              throw new c(
                "found non-noded collapse at " +
                  yi.fact.createLineString([t, e, n])
              );
          }
          getClass() {
            return yi;
          }
          get interfaces_() {
            return [];
          }
        }
        (yi.constructor_ = function () {
          (this._li = new ee()), (this._segStrings = null);
          const t = arguments[0];
          this._segStrings = t;
        }),
          (yi.fact = new Wt());
        class xi {
          constructor() {
            xi.constructor_.apply(this, arguments);
          }
          intersectsScaled(t, e) {
            const n = Math.min(t.x, e.x),
              s = Math.max(t.x, e.x),
              i = Math.min(t.y, e.y),
              r = Math.max(t.y, e.y),
              o =
                this._maxx < n ||
                this._minx > s ||
                this._maxy < i ||
                this._miny > r;
            if (o) return !1;
            const l = this.intersectsToleranceSquare(t, e);
            return u.isTrue(!(o && l), "Found bad envelope test"), l;
          }
          initCorners(t) {
            (this._minx = t.x - 0.5),
              (this._maxx = t.x + 0.5),
              (this._miny = t.y - 0.5),
              (this._maxy = t.y + 0.5),
              (this._corner[0] = new g(this._maxx, this._maxy)),
              (this._corner[1] = new g(this._minx, this._maxy)),
              (this._corner[2] = new g(this._minx, this._miny)),
              (this._corner[3] = new g(this._maxx, this._miny));
          }
          intersects(t, e) {
            return 1 === this._scaleFactor
              ? this.intersectsScaled(t, e)
              : (this.copyScaled(t, this._p0Scaled),
                this.copyScaled(e, this._p1Scaled),
                this.intersectsScaled(this._p0Scaled, this._p1Scaled));
          }
          scale(t) {
            return Math.round(t * this._scaleFactor);
          }
          getCoordinate() {
            return this._originalPt;
          }
          copyScaled(t, e) {
            (e.x = this.scale(t.x)), (e.y = this.scale(t.y));
          }
          getSafeEnvelope() {
            if (null === this._safeEnv) {
              const t = xi.SAFE_ENV_EXPANSION_FACTOR / this._scaleFactor;
              this._safeEnv = new N(
                this._originalPt.x - t,
                this._originalPt.x + t,
                this._originalPt.y - t,
                this._originalPt.y + t
              );
            }
            return this._safeEnv;
          }
          intersectsPixelClosure(t, e) {
            return (
              this._li.computeIntersection(
                t,
                e,
                this._corner[0],
                this._corner[1]
              ),
              !!this._li.hasIntersection() ||
                (this._li.computeIntersection(
                  t,
                  e,
                  this._corner[1],
                  this._corner[2]
                ),
                !!this._li.hasIntersection() ||
                  (this._li.computeIntersection(
                    t,
                    e,
                    this._corner[2],
                    this._corner[3]
                  ),
                  !!this._li.hasIntersection() ||
                    (this._li.computeIntersection(
                      t,
                      e,
                      this._corner[3],
                      this._corner[0]
                    ),
                    !!this._li.hasIntersection())))
            );
          }
          intersectsToleranceSquare(t, e) {
            let n = !1,
              s = !1;
            return (
              this._li.computeIntersection(
                t,
                e,
                this._corner[0],
                this._corner[1]
              ),
              !!this._li.isProper() ||
                (this._li.computeIntersection(
                  t,
                  e,
                  this._corner[1],
                  this._corner[2]
                ),
                !!this._li.isProper() ||
                  (this._li.hasIntersection() && (n = !0),
                  this._li.computeIntersection(
                    t,
                    e,
                    this._corner[2],
                    this._corner[3]
                  ),
                  !!this._li.isProper() ||
                    (this._li.hasIntersection() && (s = !0),
                    this._li.computeIntersection(
                      t,
                      e,
                      this._corner[3],
                      this._corner[0]
                    ),
                    !!this._li.isProper() ||
                      !(!n || !s) ||
                      !!t.equals(this._pt) ||
                      !!e.equals(this._pt))))
            );
          }
          addSnappedNode(t, e) {
            const n = t.getCoordinate(e),
              s = t.getCoordinate(e + 1);
            return (
              !!this.intersects(n, s) &&
              (t.addIntersection(this.getCoordinate(), e), !0)
            );
          }
          getClass() {
            return xi;
          }
          get interfaces_() {
            return [];
          }
        }
        (xi.constructor_ = function () {
          (this._li = null),
            (this._pt = null),
            (this._originalPt = null),
            (this._ptScaled = null),
            (this._p0Scaled = null),
            (this._p1Scaled = null),
            (this._scaleFactor = null),
            (this._minx = null),
            (this._maxx = null),
            (this._miny = null),
            (this._maxy = null),
            (this._corner = new Array(4).fill(null)),
            (this._safeEnv = null);
          const t = arguments[0],
            e = arguments[1],
            s = arguments[2];
          if (
            ((this._originalPt = t),
            (this._pt = t),
            (this._scaleFactor = e),
            (this._li = s),
            e <= 0)
          )
            throw new n("Scale factor must be non-zero");
          1 !== e &&
            ((this._pt = new g(this.scale(t.x), this.scale(t.y))),
            (this._p0Scaled = new g()),
            (this._p1Scaled = new g())),
            this.initCorners(this._pt);
        }),
          (xi.SAFE_ENV_EXPANSION_FACTOR = 0.75);
        class Ei {
          constructor() {
            Ei.constructor_.apply(this, arguments);
          }
          select() {
            if (1 === arguments.length);
            else if (2 === arguments.length) {
              const t = arguments[1];
              arguments[0].getLineSegment(t, this.selectedSegment),
                this.select(this.selectedSegment);
            }
          }
          getClass() {
            return Ei;
          }
          get interfaces_() {
            return [];
          }
        }
        Ei.constructor_ = function () {
          this.selectedSegment = new ne();
        };
        class Ii {
          constructor() {
            Ii.constructor_.apply(this, arguments);
          }
          snap() {
            if (1 === arguments.length) {
              const t = arguments[0];
              return this.snap(t, null, -1);
            }
            if (3 === arguments.length) {
              const t = arguments[0],
                e = arguments[1],
                n = arguments[2],
                s = t.getSafeEnvelope(),
                i = new Ni(t, e, n);
              return (
                this._index.query(
                  s,
                  new (class {
                    get interfaces_() {
                      return [Fe];
                    }
                    visitItem(t) {
                      t.select(s, i);
                    }
                  })()
                ),
                i.isNodeAdded()
              );
            }
          }
          getClass() {
            return Ii;
          }
          get interfaces_() {
            return [];
          }
        }
        class Ni extends Ei {
          constructor() {
            super(), Ni.constructor_.apply(this, arguments);
          }
          isNodeAdded() {
            return this._isNodeAdded;
          }
          select() {
            if (
              !(
                2 === arguments.length &&
                Number.isInteger(arguments[1]) &&
                arguments[0] instanceof Bs
              )
            )
              return super.select.apply(this, arguments);
            {
              const t = arguments[1],
                e = arguments[0].getContext();
              if (
                null !== this._parentEdge &&
                e === this._parentEdge &&
                t === this._hotPixelVertexIndex
              )
                return null;
              this._isNodeAdded = this._hotPixel.addSnappedNode(e, t);
            }
          }
          getClass() {
            return Ni;
          }
          get interfaces_() {
            return [];
          }
        }
        (Ni.constructor_ = function () {
          (this._hotPixel = null),
            (this._parentEdge = null),
            (this._hotPixelVertexIndex = null),
            (this._isNodeAdded = !1);
          const t = arguments[0],
            e = arguments[1],
            n = arguments[2];
          (this._hotPixel = t),
            (this._parentEdge = e),
            (this._hotPixelVertexIndex = n);
        }),
          (Ii.HotPixelSnapAction = Ni),
          (Ii.constructor_ = function () {
            this._index = null;
            const t = arguments[0];
            this._index = t;
          });
        class Ci {
          constructor() {
            Ci.constructor_.apply(this, arguments);
          }
          processIntersections(t, e, n, s) {
            if (t === n && e === s) return null;
            const i = t.getCoordinates()[e],
              r = t.getCoordinates()[e + 1],
              o = n.getCoordinates()[s],
              l = n.getCoordinates()[s + 1];
            if (
              (this._li.computeIntersection(i, r, o, l),
              this._li.hasIntersection() && this._li.isInteriorIntersection())
            ) {
              for (let t = 0; t < this._li.getIntersectionNum(); t++)
                this._interiorIntersections.add(this._li.getIntersection(t));
              t.addIntersections(this._li, e, 0),
                n.addIntersections(this._li, s, 1);
            }
          }
          isDone() {
            return !1;
          }
          getInteriorIntersections() {
            return this._interiorIntersections;
          }
          getClass() {
            return Ci;
          }
          get interfaces_() {
            return [pi];
          }
        }
        Ci.constructor_ = function () {
          (this._li = null), (this._interiorIntersections = null);
          const t = arguments[0];
          (this._li = t), (this._interiorIntersections = new x());
        };
        class Si {
          constructor() {
            Si.constructor_.apply(this, arguments);
          }
          checkCorrectness(t) {
            const e = Gs.getNodedSubstrings(t),
              n = new yi(e);
            try {
              n.checkValid();
            } catch (t) {
              if (!(t instanceof C)) throw t;
              t.printStackTrace();
            }
          }
          getNodedSubstrings() {
            return Gs.getNodedSubstrings(this._nodedSegStrings);
          }
          snapRound(t, e) {
            const n = this.findInteriorIntersections(t, e);
            this.computeIntersectionSnaps(n), this.computeVertexSnaps(t);
          }
          findInteriorIntersections(t, e) {
            const n = new Ci(e);
            return (
              this._noder.setSegmentIntersector(n),
              this._noder.computeNodes(t),
              n.getInteriorIntersections()
            );
          }
          computeVertexSnaps() {
            if (_(arguments[0], p))
              for (let t = arguments[0].iterator(); t.hasNext(); ) {
                const e = t.next();
                this.computeVertexSnaps(e);
              }
            else if (arguments[0] instanceof Gs) {
              const t = arguments[0],
                e = t.getCoordinates();
              for (let n = 0; n < e.length; n++) {
                const s = new xi(e[n], this._scaleFactor, this._li);
                this._pointSnapper.snap(s, t, n) && t.addIntersection(e[n], n);
              }
            }
          }
          computeNodes(t) {
            (this._nodedSegStrings = t),
              (this._noder = new Us()),
              (this._pointSnapper = new Ii(this._noder.getIndex())),
              this.snapRound(t, this._li);
          }
          computeIntersectionSnaps(t) {
            for (let e = t.iterator(); e.hasNext(); ) {
              const t = e.next(),
                n = new xi(t, this._scaleFactor, this._li);
              this._pointSnapper.snap(n);
            }
          }
          getClass() {
            return Si;
          }
          get interfaces_() {
            return [zs];
          }
        }
        Si.constructor_ = function () {
          (this._pm = null),
            (this._li = null),
            (this._scaleFactor = null),
            (this._noder = null),
            (this._pointSnapper = null),
            (this._nodedSegStrings = null);
          const t = arguments[0];
          (this._pm = t),
            (this._li = new ee()),
            this._li.setPrecisionModel(t),
            (this._scaleFactor = t.getScale());
        };
        class wi {
          constructor() {
            wi.constructor_.apply(this, arguments);
          }
          static bufferOp() {
            if (2 === arguments.length) {
              const t = arguments[1];
              return new wi(arguments[0]).getResultGeometry(t);
            }
            if (3 === arguments.length) {
              if (
                Number.isInteger(arguments[2]) &&
                arguments[0] instanceof q &&
                "number" == typeof arguments[1]
              ) {
                const t = arguments[1],
                  e = arguments[2],
                  n = new wi(arguments[0]);
                return n.setQuadrantSegments(e), n.getResultGeometry(t);
              }
              if (
                arguments[2] instanceof Ks &&
                arguments[0] instanceof q &&
                "number" == typeof arguments[1]
              ) {
                const t = arguments[1];
                return new wi(arguments[0], arguments[2]).getResultGeometry(t);
              }
            } else if (4 === arguments.length) {
              const t = arguments[1],
                e = arguments[2],
                n = arguments[3],
                s = new wi(arguments[0]);
              return (
                s.setQuadrantSegments(e),
                s.setEndCapStyle(n),
                s.getResultGeometry(t)
              );
            }
          }
          static precisionScaleFactor(t, e, n) {
            const s = t.getEnvelopeInternal(),
              i =
                M.max(
                  Math.abs(s.getMaxX()),
                  Math.abs(s.getMaxY()),
                  Math.abs(s.getMinX()),
                  Math.abs(s.getMinY())
                ) +
                2 * (e > 0 ? e : 0),
              r = n - Math.trunc(Math.log(i) / Math.log(10) + 1);
            return Math.pow(10, r);
          }
          bufferFixedPrecision(t) {
            const e = new Xs(new Si(new Xt(1)), t.getScale()),
              n = new mi(this._bufParams);
            n.setWorkingPrecisionModel(t),
              n.setNoder(e),
              (this._resultGeometry = n.buffer(this._argGeom, this._distance));
          }
          bufferReducedPrecision() {
            if (0 === arguments.length) {
              for (let e = wi.MAX_PRECISION_DIGITS; e >= 0; e--) {
                try {
                  this.bufferReducedPrecision(e);
                } catch (t) {
                  if (!(t instanceof jn)) throw t;
                  this._saveException = t;
                }
                if (null !== this._resultGeometry) return null;
              }
              throw this._saveException;
            }
            if (1 === arguments.length) {
              const t = arguments[0],
                e = wi.precisionScaleFactor(this._argGeom, this._distance, t),
                n = new Xt(e);
              this.bufferFixedPrecision(n);
            }
          }
          computeGeometry() {
            if ((this.bufferOriginalPrecision(), null !== this._resultGeometry))
              return null;
            const t = this._argGeom.getFactory().getPrecisionModel();
            t.getType() === Xt.FIXED
              ? this.bufferFixedPrecision(t)
              : this.bufferReducedPrecision();
          }
          setQuadrantSegments(t) {
            this._bufParams.setQuadrantSegments(t);
          }
          bufferOriginalPrecision() {
            try {
              const t = new mi(this._bufParams);
              this._resultGeometry = t.buffer(this._argGeom, this._distance);
            } catch (t) {
              if (!(t instanceof c)) throw t;
              this._saveException = t;
            }
          }
          getResultGeometry(t) {
            return (
              (this._distance = t), this.computeGeometry(), this._resultGeometry
            );
          }
          setEndCapStyle(t) {
            this._bufParams.setEndCapStyle(t);
          }
          getClass() {
            return wi;
          }
          get interfaces_() {
            return [];
          }
        }
        (wi.constructor_ = function () {
          if (
            ((this._argGeom = null),
            (this._distance = null),
            (this._bufParams = new Ks()),
            (this._resultGeometry = null),
            (this._saveException = null),
            1 === arguments.length)
          ) {
            const t = arguments[0];
            this._argGeom = t;
          } else if (2 === arguments.length) {
            const t = arguments[0],
              e = arguments[1];
            (this._argGeom = t), (this._bufParams = e);
          }
        }),
          (wi.CAP_ROUND = Ks.CAP_ROUND),
          (wi.CAP_BUTT = Ks.CAP_FLAT),
          (wi.CAP_FLAT = Ks.CAP_FLAT),
          (wi.CAP_SQUARE = Ks.CAP_SQUARE),
          (wi.MAX_PRECISION_DIGITS = 12);
        var Li = Object.freeze({
          __proto__: null,
          BufferOp: wi,
          BufferParameters: Ks,
        });
        class Ti {
          constructor() {
            Ti.constructor_.apply(this, arguments);
          }
          isInsideArea() {
            return this._segIndex === Ti.INSIDE_AREA;
          }
          getCoordinate() {
            return this._pt;
          }
          getGeometryComponent() {
            return this._component;
          }
          getSegmentIndex() {
            return this._segIndex;
          }
          getClass() {
            return Ti;
          }
          get interfaces_() {
            return [];
          }
        }
        (Ti.constructor_ = function () {
          if (
            ((this._component = null),
            (this._segIndex = null),
            (this._pt = null),
            2 === arguments.length)
          ) {
            const t = arguments[0],
              e = arguments[1];
            Ti.constructor_.call(this, t, Ti.INSIDE_AREA, e);
          } else if (3 === arguments.length) {
            const t = arguments[0],
              e = arguments[1],
              n = arguments[2];
            (this._component = t), (this._segIndex = e), (this._pt = n);
          }
        }),
          (Ti.INSIDE_AREA = -1);
        class Ri {
          constructor() {
            Ri.constructor_.apply(this, arguments);
          }
          static getLocations(t) {
            const e = new x();
            return t.apply(new Ri(e)), e;
          }
          filter(t) {
            (t instanceof vt || t instanceof Rt || t instanceof Mt) &&
              this._locations.add(new Ti(t, 0, t.getCoordinate()));
          }
          getClass() {
            return Ri;
          }
          get interfaces_() {
            return [dt];
          }
        }
        Ri.constructor_ = function () {
          this._locations = null;
          const t = arguments[0];
          this._locations = t;
        };
        class Pi {
          constructor() {
            Pi.constructor_.apply(this, arguments);
          }
          static distance(t, e) {
            return new Pi(t, e).distance();
          }
          static isWithinDistance(t, e, n) {
            return (
              !(
                t.getEnvelopeInternal().distance(e.getEnvelopeInternal()) > n
              ) && new Pi(t, e, n).distance() <= n
            );
          }
          static nearestPoints(t, e) {
            return new Pi(t, e).nearestPoints();
          }
          computeContainmentDistance() {
            if (0 === arguments.length) {
              const t = new Array(2).fill(null);
              if (
                (this.computeContainmentDistance(0, t),
                this._minDistance <= this._terminateDistance)
              )
                return null;
              this.computeContainmentDistance(1, t);
            } else if (2 === arguments.length) {
              const t = arguments[0],
                e = arguments[1],
                n = this._geom[t];
              if (n.getDimension() < 2) return null;
              const s = 1 - t,
                i = Ce.getPolygons(n);
              if (i.size() > 0) {
                const n = Ri.getLocations(this._geom[s]);
                if (
                  (this.computeContainmentDistance(n, i, e),
                  this._minDistance <= this._terminateDistance)
                )
                  return (
                    (this._minDistanceLocation[s] = e[0]),
                    (this._minDistanceLocation[t] = e[1]),
                    null
                  );
              }
            } else if (3 === arguments.length)
              if (
                arguments[2] instanceof Array &&
                _(arguments[0], m) &&
                _(arguments[1], m)
              ) {
                const t = arguments[0],
                  e = arguments[1],
                  n = arguments[2];
                for (let s = 0; s < t.size(); s++) {
                  const i = t.get(s);
                  for (let t = 0; t < e.size(); t++)
                    if (
                      (this.computeContainmentDistance(i, e.get(t), n),
                      this._minDistance <= this._terminateDistance)
                    )
                      return null;
                }
              } else if (
                arguments[2] instanceof Array &&
                arguments[0] instanceof Ti &&
                arguments[1] instanceof Mt
              ) {
                const t = arguments[0],
                  e = arguments[1],
                  n = arguments[2],
                  s = t.getCoordinate();
                if (se.EXTERIOR !== this._ptLocator.locate(s, e))
                  return (
                    (this._minDistance = 0),
                    (n[0] = t),
                    (n[1] = new Ti(e, s)),
                    null
                  );
              }
          }
          computeMinDistanceLinesPoints(t, e, n) {
            for (let s = 0; s < t.size(); s++) {
              const i = t.get(s);
              for (let t = 0; t < e.size(); t++) {
                const s = e.get(t);
                if (
                  (this.computeMinDistance(i, s, n),
                  this._minDistance <= this._terminateDistance)
                )
                  return null;
              }
            }
          }
          computeFacetDistance() {
            const t = new Array(2).fill(null),
              e = Ee.getLines(this._geom[0]),
              n = Ee.getLines(this._geom[1]),
              s = Ne.getPoints(this._geom[0]),
              i = Ne.getPoints(this._geom[1]);
            return (
              this.computeMinDistanceLines(e, n, t),
              this.updateMinDistance(t, !1),
              this._minDistance <= this._terminateDistance
                ? null
                : ((t[0] = null),
                  (t[1] = null),
                  this.computeMinDistanceLinesPoints(e, i, t),
                  this.updateMinDistance(t, !1),
                  this._minDistance <= this._terminateDistance
                    ? null
                    : ((t[0] = null),
                      (t[1] = null),
                      this.computeMinDistanceLinesPoints(n, s, t),
                      this.updateMinDistance(t, !0),
                      this._minDistance <= this._terminateDistance
                        ? null
                        : ((t[0] = null),
                          (t[1] = null),
                          this.computeMinDistancePoints(s, i, t),
                          void this.updateMinDistance(t, !1))))
            );
          }
          nearestLocations() {
            return this.computeMinDistance(), this._minDistanceLocation;
          }
          updateMinDistance(t, e) {
            if (null === t[0]) return null;
            e
              ? ((this._minDistanceLocation[0] = t[1]),
                (this._minDistanceLocation[1] = t[0]))
              : ((this._minDistanceLocation[0] = t[0]),
                (this._minDistanceLocation[1] = t[1]));
          }
          nearestPoints() {
            return (
              this.computeMinDistance(),
              [
                this._minDistanceLocation[0].getCoordinate(),
                this._minDistanceLocation[1].getCoordinate(),
              ]
            );
          }
          computeMinDistance() {
            if (0 === arguments.length) {
              if (null !== this._minDistanceLocation) return null;
              if (
                ((this._minDistanceLocation = new Array(2).fill(null)),
                this.computeContainmentDistance(),
                this._minDistance <= this._terminateDistance)
              )
                return null;
              this.computeFacetDistance();
            } else if (3 === arguments.length)
              if (
                arguments[2] instanceof Array &&
                arguments[0] instanceof Rt &&
                arguments[1] instanceof vt
              ) {
                const t = arguments[0],
                  e = arguments[1],
                  n = arguments[2];
                if (
                  t.getEnvelopeInternal().distance(e.getEnvelopeInternal()) >
                  this._minDistance
                )
                  return null;
                const s = t.getCoordinates(),
                  i = e.getCoordinate();
                for (let r = 0; r < s.length - 1; r++) {
                  const o = D.pointToSegment(i, s[r], s[r + 1]);
                  if (o < this._minDistance) {
                    this._minDistance = o;
                    const l = new ne(s[r], s[r + 1]).closestPoint(i);
                    (n[0] = new Ti(t, r, l)), (n[1] = new Ti(e, 0, i));
                  }
                  if (this._minDistance <= this._terminateDistance) return null;
                }
              } else if (
                arguments[2] instanceof Array &&
                arguments[0] instanceof Rt &&
                arguments[1] instanceof Rt
              ) {
                const t = arguments[0],
                  e = arguments[1],
                  n = arguments[2];
                if (
                  t.getEnvelopeInternal().distance(e.getEnvelopeInternal()) >
                  this._minDistance
                )
                  return null;
                const s = t.getCoordinates(),
                  i = e.getCoordinates();
                for (let r = 0; r < s.length - 1; r++)
                  for (let o = 0; o < i.length - 1; o++) {
                    const l = D.segmentToSegment(
                      s[r],
                      s[r + 1],
                      i[o],
                      i[o + 1]
                    );
                    if (l < this._minDistance) {
                      this._minDistance = l;
                      const a = new ne(s[r], s[r + 1]),
                        c = new ne(i[o], i[o + 1]),
                        h = a.closestPoints(c);
                      (n[0] = new Ti(t, r, h[0])), (n[1] = new Ti(e, o, h[1]));
                    }
                    if (this._minDistance <= this._terminateDistance)
                      return null;
                  }
              }
          }
          computeMinDistancePoints(t, e, n) {
            for (let s = 0; s < t.size(); s++) {
              const i = t.get(s);
              for (let t = 0; t < e.size(); t++) {
                const s = e.get(t),
                  r = i.getCoordinate().distance(s.getCoordinate());
                if (
                  (r < this._minDistance &&
                    ((this._minDistance = r),
                    (n[0] = new Ti(i, 0, i.getCoordinate())),
                    (n[1] = new Ti(s, 0, s.getCoordinate()))),
                  this._minDistance <= this._terminateDistance)
                )
                  return null;
              }
            }
          }
          distance() {
            if (null === this._geom[0] || null === this._geom[1])
              throw new n("null geometries are not supported");
            return this._geom[0].isEmpty() || this._geom[1].isEmpty()
              ? 0
              : (this.computeMinDistance(), this._minDistance);
          }
          computeMinDistanceLines(t, e, n) {
            for (let s = 0; s < t.size(); s++) {
              const i = t.get(s);
              for (let t = 0; t < e.size(); t++) {
                const s = e.get(t);
                if (
                  (this.computeMinDistance(i, s, n),
                  this._minDistance <= this._terminateDistance)
                )
                  return null;
              }
            }
          }
          getClass() {
            return Pi;
          }
          get interfaces_() {
            return [];
          }
        }
        Pi.constructor_ = function () {
          if (
            ((this._geom = null),
            (this._terminateDistance = 0),
            (this._ptLocator = new pn()),
            (this._minDistanceLocation = null),
            (this._minDistance = i.MAX_VALUE),
            2 === arguments.length)
          ) {
            const t = arguments[0],
              e = arguments[1];
            Pi.constructor_.call(this, t, e, 0);
          } else if (3 === arguments.length) {
            const t = arguments[0],
              e = arguments[1],
              n = arguments[2];
            (this._geom = new Array(2).fill(null)),
              (this._geom[0] = t),
              (this._geom[1] = e),
              (this._terminateDistance = n);
          }
        };
        var vi = Object.freeze({ __proto__: null, DistanceOp: Pi });
        class Oi {
          constructor() {
            Oi.constructor_.apply(this, arguments);
          }
          getCoordinates() {
            if (null === this._coordinates) {
              let t = 0,
                e = 0;
              const n = new I();
              for (let s = this._directedEdges.iterator(); s.hasNext(); ) {
                const i = s.next();
                i.getEdgeDirection() ? t++ : e++,
                  n.add(
                    i.getEdge().getLine().getCoordinates(),
                    !1,
                    i.getEdgeDirection()
                  );
              }
              (this._coordinates = n.toCoordinateArray()),
                e > t && X.reverse(this._coordinates);
            }
            return this._coordinates;
          }
          toLineString() {
            return this._factory.createLineString(this.getCoordinates());
          }
          add(t) {
            this._directedEdges.add(t);
          }
          getClass() {
            return Oi;
          }
          get interfaces_() {
            return [];
          }
        }
        Oi.constructor_ = function () {
          (this._factory = null),
            (this._directedEdges = new x()),
            (this._coordinates = null);
          const t = arguments[0];
          this._factory = t;
        };
        class bi {
          constructor() {
            bi.constructor_.apply(this, arguments);
          }
          static getComponentWithVisitedState(t, e) {
            for (; t.hasNext(); ) {
              const n = t.next();
              if (n.isVisited() === e) return n;
            }
            return null;
          }
          static setVisited(t, e) {
            for (; t.hasNext(); ) t.next().setVisited(e);
          }
          static setMarked(t, e) {
            for (; t.hasNext(); ) t.next().setMarked(e);
          }
          setVisited(t) {
            this._isVisited = t;
          }
          isMarked() {
            return this._isMarked;
          }
          setData(t) {
            this._data = t;
          }
          getData() {
            return this._data;
          }
          setMarked(t) {
            this._isMarked = t;
          }
          getContext() {
            return this._data;
          }
          isVisited() {
            return this._isVisited;
          }
          setContext(t) {
            this._data = t;
          }
          getClass() {
            return bi;
          }
          get interfaces_() {
            return [];
          }
        }
        bi.constructor_ = function () {
          (this._isMarked = !1), (this._isVisited = !1), (this._data = null);
        };
        class Mi extends bi {
          constructor() {
            super(), Mi.constructor_.apply(this, arguments);
          }
          static toEdges(t) {
            const e = new x();
            for (let n = t.iterator(); n.hasNext(); )
              e.add(n.next()._parentEdge);
            return e;
          }
          isRemoved() {
            return null === this._parentEdge;
          }
          compareDirection(t) {
            return this._quadrant > t._quadrant
              ? 1
              : this._quadrant < t._quadrant
              ? -1
              : v.index(t._p0, t._p1, this._p1);
          }
          getCoordinate() {
            return this._from.getCoordinate();
          }
          print(t) {
            const e = this.getClass().getName(),
              n = e.lastIndexOf("."),
              s = e.substring(n + 1);
            t.print(
              "  " +
                s +
                ": " +
                this._p0 +
                " - " +
                this._p1 +
                " " +
                this._quadrant +
                ":" +
                this._angle
            );
          }
          getDirectionPt() {
            return this._p1;
          }
          getAngle() {
            return this._angle;
          }
          compareTo(t) {
            const e = t;
            return this.compareDirection(e);
          }
          getFromNode() {
            return this._from;
          }
          getSym() {
            return this._sym;
          }
          setEdge(t) {
            this._parentEdge = t;
          }
          remove() {
            (this._sym = null), (this._parentEdge = null);
          }
          getEdge() {
            return this._parentEdge;
          }
          getQuadrant() {
            return this._quadrant;
          }
          setSym(t) {
            this._sym = t;
          }
          getToNode() {
            return this._to;
          }
          getEdgeDirection() {
            return this._edgeDirection;
          }
          getClass() {
            return Mi;
          }
          get interfaces_() {
            return [r];
          }
        }
        Mi.constructor_ = function () {
          if (
            ((this._parentEdge = null),
            (this._from = null),
            (this._to = null),
            (this._p0 = null),
            (this._p1 = null),
            (this._sym = null),
            (this._edgeDirection = null),
            (this._quadrant = null),
            (this._angle = null),
            0 === arguments.length)
          );
          else if (4 === arguments.length) {
            const t = arguments[0],
              e = arguments[1],
              n = arguments[2],
              s = arguments[3];
            (this._from = t),
              (this._to = e),
              (this._edgeDirection = s),
              (this._p0 = t.getCoordinate()),
              (this._p1 = n);
            const i = this._p1.x - this._p0.x,
              r = this._p1.y - this._p0.y;
            (this._quadrant = Nn.quadrant(i, r)),
              (this._angle = Math.atan2(r, i));
          }
        };
        class Di extends Mi {
          constructor() {
            super(), Di.constructor_.apply(this, arguments);
          }
          getNext() {
            return 2 !== this.getToNode().getDegree()
              ? null
              : this.getToNode().getOutEdges().getEdges().get(0) ===
                this.getSym()
              ? this.getToNode().getOutEdges().getEdges().get(1)
              : (u.isTrue(
                  this.getToNode().getOutEdges().getEdges().get(1) ===
                    this.getSym()
                ),
                this.getToNode().getOutEdges().getEdges().get(0));
          }
          getClass() {
            return Di;
          }
          get interfaces_() {
            return [];
          }
        }
        Di.constructor_ = function () {
          const t = arguments[0],
            e = arguments[1],
            n = arguments[2],
            s = arguments[3];
          Mi.constructor_.call(this, t, e, n, s);
        };
        class Ai extends bi {
          constructor() {
            super(), Ai.constructor_.apply(this, arguments);
          }
          isRemoved() {
            return null === this._dirEdge;
          }
          setDirectedEdges(t, e) {
            (this._dirEdge = [t, e]),
              t.setEdge(this),
              e.setEdge(this),
              t.setSym(e),
              e.setSym(t),
              t.getFromNode().addOutEdge(t),
              e.getFromNode().addOutEdge(e);
          }
          getDirEdge() {
            if (Number.isInteger(arguments[0])) {
              const t = arguments[0];
              return this._dirEdge[t];
            }
            if (arguments[0] instanceof Gi) {
              const t = arguments[0];
              return this._dirEdge[0].getFromNode() === t
                ? this._dirEdge[0]
                : this._dirEdge[1].getFromNode() === t
                ? this._dirEdge[1]
                : null;
            }
          }
          remove() {
            this._dirEdge = null;
          }
          getOppositeNode(t) {
            return this._dirEdge[0].getFromNode() === t
              ? this._dirEdge[0].getToNode()
              : this._dirEdge[1].getFromNode() === t
              ? this._dirEdge[1].getToNode()
              : null;
          }
          getClass() {
            return Ai;
          }
          get interfaces_() {
            return [];
          }
        }
        Ai.constructor_ = function () {
          if (((this._dirEdge = null), 0 === arguments.length));
          else if (2 === arguments.length) {
            const t = arguments[0],
              e = arguments[1];
            this.setDirectedEdges(t, e);
          }
        };
        class Fi {
          constructor() {
            Fi.constructor_.apply(this, arguments);
          }
          getNextEdge(t) {
            const e = this.getIndex(t);
            return this._outEdges.get(this.getIndex(e + 1));
          }
          getCoordinate() {
            const t = this.iterator();
            return t.hasNext() ? t.next().getCoordinate() : null;
          }
          iterator() {
            return this.sortEdges(), this._outEdges.iterator();
          }
          sortEdges() {
            this._sorted || (Ie.sort(this._outEdges), (this._sorted = !0));
          }
          remove(t) {
            this._outEdges.remove(t);
          }
          getEdges() {
            return this.sortEdges(), this._outEdges;
          }
          getNextCWEdge(t) {
            const e = this.getIndex(t);
            return this._outEdges.get(this.getIndex(e - 1));
          }
          getIndex() {
            if (arguments[0] instanceof Ai) {
              const t = arguments[0];
              this.sortEdges();
              for (let e = 0; e < this._outEdges.size(); e++)
                if (this._outEdges.get(e).getEdge() === t) return e;
              return -1;
            }
            if (arguments[0] instanceof Mi) {
              const t = arguments[0];
              this.sortEdges();
              for (let e = 0; e < this._outEdges.size(); e++)
                if (this._outEdges.get(e) === t) return e;
              return -1;
            }
            if (Number.isInteger(arguments[0])) {
              let t = arguments[0] % this._outEdges.size();
              return t < 0 && (t += this._outEdges.size()), t;
            }
          }
          add(t) {
            this._outEdges.add(t), (this._sorted = !1);
          }
          getDegree() {
            return this._outEdges.size();
          }
          getClass() {
            return Fi;
          }
          get interfaces_() {
            return [];
          }
        }
        Fi.constructor_ = function () {
          (this._outEdges = new x()), (this._sorted = !1);
        };
        class Gi extends bi {
          constructor() {
            super(), Gi.constructor_.apply(this, arguments);
          }
          static getEdgesBetween(t, e) {
            const n = new J(Mi.toEdges(t.getOutEdges().getEdges())),
              s = Mi.toEdges(e.getOutEdges().getEdges());
            return n.retainAll(s), n;
          }
          isRemoved() {
            return null === this._pt;
          }
          addOutEdge(t) {
            this._deStar.add(t);
          }
          getCoordinate() {
            return this._pt;
          }
          getOutEdges() {
            return this._deStar;
          }
          remove() {
            if (0 === arguments.length) this._pt = null;
            else if (1 === arguments.length) {
              const t = arguments[0];
              this._deStar.remove(t);
            }
          }
          getIndex(t) {
            return this._deStar.getIndex(t);
          }
          getDegree() {
            return this._deStar.getDegree();
          }
          getClass() {
            return Gi;
          }
          get interfaces_() {
            return [];
          }
        }
        Gi.constructor_ = function () {
          if (
            ((this._pt = null), (this._deStar = null), 1 === arguments.length)
          ) {
            const t = arguments[0];
            Gi.constructor_.call(this, t, new Fi());
          } else if (2 === arguments.length) {
            const t = arguments[0],
              e = arguments[1];
            (this._pt = t), (this._deStar = e);
          }
        };
        class qi extends Ai {
          constructor() {
            super(), qi.constructor_.apply(this, arguments);
          }
          getLine() {
            return this._line;
          }
          getClass() {
            return qi;
          }
          get interfaces_() {
            return [];
          }
        }
        qi.constructor_ = function () {
          this._line = null;
          const t = arguments[0];
          this._line = t;
        };
        class Bi {
          constructor() {
            Bi.constructor_.apply(this, arguments);
          }
          find(t) {
            return this._nodeMap.get(t);
          }
          iterator() {
            return this._nodeMap.values().iterator();
          }
          remove(t) {
            return this._nodeMap.remove(t);
          }
          values() {
            return this._nodeMap.values();
          }
          add(t) {
            return this._nodeMap.put(t.getCoordinate(), t), t;
          }
          getClass() {
            return Bi;
          }
          get interfaces_() {
            return [];
          }
        }
        Bi.constructor_ = function () {
          this._nodeMap = new ot();
        };
        class Vi {
          constructor() {
            Vi.constructor_.apply(this, arguments);
          }
          findNodesOfDegree(t) {
            const e = new x();
            for (let n = this.nodeIterator(); n.hasNext(); ) {
              const s = n.next();
              s.getDegree() === t && e.add(s);
            }
            return e;
          }
          dirEdgeIterator() {
            return this._dirEdges.iterator();
          }
          edgeIterator() {
            return this._edges.iterator();
          }
          remove() {
            if (arguments[0] instanceof Ai) {
              const t = arguments[0];
              this.remove(t.getDirEdge(0)),
                this.remove(t.getDirEdge(1)),
                this._edges.remove(t),
                t.remove();
            } else if (arguments[0] instanceof Mi) {
              const t = arguments[0],
                e = t.getSym();
              null !== e && e.setSym(null),
                t.getFromNode().remove(t),
                t.remove(),
                this._dirEdges.remove(t);
            } else if (arguments[0] instanceof Gi) {
              const t = arguments[0];
              for (
                let e = t.getOutEdges().getEdges().iterator();
                e.hasNext();

              ) {
                const t = e.next(),
                  n = t.getSym();
                null !== n && this.remove(n), this._dirEdges.remove(t);
                const s = t.getEdge();
                null !== s && this._edges.remove(s);
              }
              this._nodeMap.remove(t.getCoordinate()), t.remove();
            }
          }
          findNode(t) {
            return this._nodeMap.find(t);
          }
          getEdges() {
            return this._edges;
          }
          nodeIterator() {
            return this._nodeMap.iterator();
          }
          contains() {
            if (arguments[0] instanceof Ai) {
              const t = arguments[0];
              return this._edges.contains(t);
            }
            if (arguments[0] instanceof Mi) {
              const t = arguments[0];
              return this._dirEdges.contains(t);
            }
          }
          add() {
            if (arguments[0] instanceof Gi) {
              const t = arguments[0];
              this._nodeMap.add(t);
            } else if (arguments[0] instanceof Ai) {
              const t = arguments[0];
              this._edges.add(t),
                this.add(t.getDirEdge(0)),
                this.add(t.getDirEdge(1));
            } else if (arguments[0] instanceof Mi) {
              const t = arguments[0];
              this._dirEdges.add(t);
            }
          }
          getNodes() {
            return this._nodeMap.values();
          }
          getClass() {
            return Vi;
          }
          get interfaces_() {
            return [];
          }
        }
        Vi.constructor_ = function () {
          (this._edges = new J()),
            (this._dirEdges = new J()),
            (this._nodeMap = new Bi());
        };
        class zi extends Vi {
          constructor() {
            super(), zi.constructor_.apply(this, arguments);
          }
          addEdge(t) {
            if (t.isEmpty()) return null;
            const e = X.removeRepeatedPoints(t.getCoordinates());
            if (e.length <= 1) return null;
            const n = e[0],
              s = e[e.length - 1],
              i = this.getNode(n),
              r = this.getNode(s),
              o = new Di(i, r, e[1], !0),
              l = new Di(r, i, e[e.length - 2], !1),
              a = new qi(t);
            a.setDirectedEdges(o, l), this.add(a);
          }
          getNode(t) {
            let e = this.findNode(t);
            return null === e && ((e = new Gi(t)), this.add(e)), e;
          }
          getClass() {
            return zi;
          }
          get interfaces_() {
            return [];
          }
        }
        zi.constructor_ = function () {};
        class Yi {
          constructor() {
            Yi.constructor_.apply(this, arguments);
          }
          buildEdgeStringsForUnprocessedNodes() {
            for (let t = this._graph.getNodes().iterator(); t.hasNext(); ) {
              const e = t.next();
              e.isMarked() ||
                (u.isTrue(2 === e.getDegree()),
                this.buildEdgeStringsStartingAt(e),
                e.setMarked(!0));
            }
          }
          buildEdgeStringsForNonDegree2Nodes() {
            for (let t = this._graph.getNodes().iterator(); t.hasNext(); ) {
              const e = t.next();
              2 !== e.getDegree() &&
                (this.buildEdgeStringsStartingAt(e), e.setMarked(!0));
            }
          }
          buildEdgeStringsForObviousStartNodes() {
            this.buildEdgeStringsForNonDegree2Nodes();
          }
          getMergedLineStrings() {
            return this.merge(), this._mergedLineStrings;
          }
          buildEdgeStringsStartingAt(t) {
            for (let e = t.getOutEdges().iterator(); e.hasNext(); ) {
              const t = e.next();
              t.getEdge().isMarked() ||
                this._edgeStrings.add(this.buildEdgeStringStartingWith(t));
            }
          }
          merge() {
            if (null !== this._mergedLineStrings) return null;
            bi.setMarked(this._graph.nodeIterator(), !1),
              bi.setMarked(this._graph.edgeIterator(), !1),
              (this._edgeStrings = new x()),
              this.buildEdgeStringsForObviousStartNodes(),
              this.buildEdgeStringsForIsolatedLoops(),
              (this._mergedLineStrings = new x());
            for (let t = this._edgeStrings.iterator(); t.hasNext(); ) {
              const e = t.next();
              this._mergedLineStrings.add(e.toLineString());
            }
          }
          addLineString(t) {
            null === this._factory && (this._factory = t.getFactory()),
              this._graph.addEdge(t);
          }
          buildEdgeStringStartingWith(t) {
            const e = new Oi(this._factory);
            let n = t;
            do {
              e.add(n), n.getEdge().setMarked(!0), (n = n.getNext());
            } while (null !== n && n !== t);
            return e;
          }
          add() {
            if (arguments[0] instanceof q) {
              const t = arguments[0];
              for (let e = 0; e < t.getNumGeometries(); e++) {
                const n = t.getGeometryN(e);
                n instanceof Rt && this.addLineString(n);
              }
            } else if (_(arguments[0], p)) {
              const t = arguments[0];
              this._mergedLineStrings = null;
              for (let e = t.iterator(); e.hasNext(); ) {
                const t = e.next();
                this.add(t);
              }
            }
          }
          buildEdgeStringsForIsolatedLoops() {
            this.buildEdgeStringsForUnprocessedNodes();
          }
          getClass() {
            return Yi;
          }
          get interfaces_() {
            return [];
          }
        }
        Yi.constructor_ = function () {
          (this._graph = new zi()),
            (this._mergedLineStrings = null),
            (this._factory = null),
            (this._edgeStrings = null);
        };
        class Ui {
          constructor() {
            Ui.constructor_.apply(this, arguments);
          }
          dirEdgeIterator() {
            return this._dirEdges.iterator();
          }
          edgeIterator() {
            return this._edges.iterator();
          }
          getParent() {
            return this._parentGraph;
          }
          nodeIterator() {
            return this._nodeMap.iterator();
          }
          contains(t) {
            return this._edges.contains(t);
          }
          add(t) {
            if (this._edges.contains(t)) return null;
            this._edges.add(t),
              this._dirEdges.add(t.getDirEdge(0)),
              this._dirEdges.add(t.getDirEdge(1)),
              this._nodeMap.add(t.getDirEdge(0).getFromNode()),
              this._nodeMap.add(t.getDirEdge(1).getFromNode());
          }
          getClass() {
            return Ui;
          }
          get interfaces_() {
            return [];
          }
        }
        Ui.constructor_ = function () {
          (this._parentGraph = null),
            (this._edges = new J()),
            (this._dirEdges = new x()),
            (this._nodeMap = new Bi());
          const t = arguments[0];
          this._parentGraph = t;
        };
        class ki {
          constructor() {
            ki.constructor_.apply(this, arguments);
          }
          addReachable(t, e) {
            const n = new ln();
            for (n.add(t); !n.empty(); ) {
              const t = n.pop();
              this.addEdges(t, n, e);
            }
          }
          findSubgraph(t) {
            const e = new Ui(this._graph);
            return this.addReachable(t, e), e;
          }
          getConnectedSubgraphs() {
            const t = new x();
            bi.setVisited(this._graph.nodeIterator(), !1);
            for (let e = this._graph.edgeIterator(); e.hasNext(); ) {
              const n = e.next().getDirEdge(0).getFromNode();
              n.isVisited() || t.add(this.findSubgraph(n));
            }
            return t;
          }
          addEdges(t, e, n) {
            t.setVisited(!0);
            for (let s = t.getOutEdges().iterator(); s.hasNext(); ) {
              const t = s.next();
              n.add(t.getEdge());
              const i = t.getToNode();
              i.isVisited() || e.push(i);
            }
          }
          getClass() {
            return ki;
          }
          get interfaces_() {
            return [];
          }
        }
        ki.constructor_ = function () {
          this._graph = null;
          const t = arguments[0];
          this._graph = t;
        };
        class Xi {
          constructor() {
            Xi.constructor_.apply(this, arguments);
          }
          static findUnvisitedBestOrientedDE(t) {
            let e = null,
              n = null;
            for (let s = t.getOutEdges().iterator(); s.hasNext(); ) {
              const t = s.next();
              t.getEdge().isVisited() ||
                ((n = t), t.getEdgeDirection() && (e = t));
            }
            return null !== e ? e : n;
          }
          static findLowestDegreeNode(t) {
            let e = L.MAX_VALUE,
              n = null;
            for (let s = t.nodeIterator(); s.hasNext(); ) {
              const t = s.next();
              (null === n || t.getDegree() < e) &&
                ((e = t.getDegree()), (n = t));
            }
            return n;
          }
          static isSequenced(t) {
            if (!(t instanceof ft)) return !0;
            const e = t,
              n = new ct();
            let s = null;
            const i = new x();
            for (let r = 0; r < e.getNumGeometries(); r++) {
              const t = e.getGeometryN(r),
                o = t.getCoordinateN(0),
                l = t.getCoordinateN(t.getNumPoints() - 1);
              if (n.contains(o)) return !1;
              if (n.contains(l)) return !1;
              null !== s && (o.equals(s) || (n.addAll(i), i.clear())),
                i.add(o),
                i.add(l),
                (s = l);
            }
            return !0;
          }
          static reverse(t) {
            const e = t.getCoordinates(),
              n = new Array(e.length).fill(null),
              s = e.length;
            for (let i = 0; i < s; i++) n[s - 1 - i] = new g(e[i]);
            return t.getFactory().createLineString(n);
          }
          static sequence(t) {
            const e = new Xi();
            return e.add(t), e.getSequencedLineStrings();
          }
          addLine(t) {
            null === this._factory && (this._factory = t.getFactory()),
              this._graph.addEdge(t),
              this._lineCount++;
          }
          hasSequence(t) {
            let e = 0;
            for (let n = t.nodeIterator(); n.hasNext(); )
              n.next().getDegree() % 2 == 1 && e++;
            return e <= 2;
          }
          computeSequence() {
            if (this._isRun) return null;
            this._isRun = !0;
            const t = this.findSequences();
            if (null === t) return null;
            (this._sequencedGeometry = this.buildSequencedGeometry(t)),
              (this._isSequenceable = !0);
            const e = this._sequencedGeometry.getNumGeometries();
            u.isTrue(this._lineCount === e, "Lines were missing from result"),
              u.isTrue(
                this._sequencedGeometry instanceof Rt ||
                  this._sequencedGeometry instanceof ft,
                "Result is not lineal"
              );
          }
          findSequences() {
            const t = new x();
            for (
              let e = new ki(this._graph).getConnectedSubgraphs().iterator();
              e.hasNext();

            ) {
              const n = e.next();
              if (!this.hasSequence(n)) return null;
              {
                const e = this.findSequence(n);
                t.add(e);
              }
            }
            return t;
          }
          addReverseSubpath(t, e, n) {
            const s = t.getToNode();
            let i = null;
            for (;;) {
              e.add(t.getSym()),
                t.getEdge().setVisited(!0),
                (i = t.getFromNode());
              const n = Xi.findUnvisitedBestOrientedDE(i);
              if (null === n) break;
              t = n.getSym();
            }
            n && u.isTrue(i === s, "path not contiguous");
          }
          findSequence(t) {
            bi.setVisited(t.edgeIterator(), !1);
            const e = Xi.findLowestDegreeNode(t)
                .getOutEdges()
                .iterator()
                .next()
                .getSym(),
              n = new Qs(),
              s = n.listIterator();
            for (this.addReverseSubpath(e, s, !1); s.hasPrevious(); ) {
              const t = s.previous(),
                e = Xi.findUnvisitedBestOrientedDE(t.getFromNode());
              null !== e && this.addReverseSubpath(e.getSym(), s, !0);
            }
            return this.orient(n);
          }
          reverse(t) {
            const e = new Qs();
            for (let n = t.iterator(); n.hasNext(); ) {
              const t = n.next();
              e.addFirst(t.getSym());
            }
            return e;
          }
          orient(t) {
            const e = t.get(0),
              n = t.get(t.size() - 1),
              s = e.getFromNode(),
              i = n.getToNode();
            let r = !1;
            if (1 === s.getDegree() || 1 === i.getDegree()) {
              let t = !1;
              1 === n.getToNode().getDegree() &&
                !1 === n.getEdgeDirection() &&
                ((t = !0), (r = !0)),
                1 === e.getFromNode().getDegree() &&
                  !0 === e.getEdgeDirection() &&
                  ((t = !0), (r = !1)),
                t || (1 === e.getFromNode().getDegree() && (r = !0));
            }
            return r ? this.reverse(t) : t;
          }
          buildSequencedGeometry(t) {
            const e = new x();
            for (let n = t.iterator(); n.hasNext(); )
              for (let t = n.next().iterator(); t.hasNext(); ) {
                const n = t.next(),
                  s = n.getEdge().getLine();
                let i = s;
                n.getEdgeDirection() || s.isClosed() || (i = Xi.reverse(s)),
                  e.add(i);
              }
            return 0 === e.size()
              ? this._factory.createMultiLineString(new Array(0).fill(null))
              : this._factory.buildGeometry(e);
          }
          getSequencedLineStrings() {
            return this.computeSequence(), this._sequencedGeometry;
          }
          isSequenceable() {
            return this.computeSequence(), this._isSequenceable;
          }
          add() {
            if (_(arguments[0], p))
              for (let t = arguments[0].iterator(); t.hasNext(); ) {
                const e = t.next();
                this.add(e);
              }
            else
              arguments[0] instanceof q &&
                arguments[0].apply(
                  new (class {
                    get interfaces_() {
                      return [G];
                    }
                    filter(t) {
                      t instanceof Rt && this.addLine(t);
                    }
                  })()
                );
          }
          getClass() {
            return Xi;
          }
          get interfaces_() {
            return [];
          }
        }
        Xi.constructor_ = function () {
          (this._graph = new zi()),
            (this._factory = new Wt()),
            (this._lineCount = 0),
            (this._isRun = !1),
            (this._sequencedGeometry = null),
            (this._isSequenceable = !1);
        };
        var Hi = Object.freeze({
          __proto__: null,
          LineMerger: Yi,
          LineSequencer: Xi,
        });
        class Wi {
          constructor() {
            Wi.constructor_.apply(this, arguments);
          }
          static isClosed(t) {
            return !(t.length <= 1) && t[0].equals2D(t[t.length - 1]);
          }
          snapVertices(t, e) {
            const n = this._isClosed ? t.size() - 1 : t.size();
            for (let s = 0; s < n; s++) {
              const n = t.get(s),
                i = this.findSnapForVertex(n, e);
              null !== i &&
                (t.set(s, new g(i)),
                0 === s && this._isClosed && t.set(t.size() - 1, new g(i)));
            }
          }
          findSnapForVertex(t, e) {
            for (let n = 0; n < e.length; n++) {
              if (t.equals2D(e[n])) return null;
              if (t.distance(e[n]) < this._snapTolerance) return e[n];
            }
            return null;
          }
          snapTo(t) {
            const e = new I(this._srcPts);
            return (
              this.snapVertices(e, t),
              this.snapSegments(e, t),
              e.toCoordinateArray()
            );
          }
          snapSegments(t, e) {
            if (0 === e.length) return null;
            let n = e.length;
            e[0].equals2D(e[e.length - 1]) && (n = e.length - 1);
            for (let s = 0; s < n; s++) {
              const n = e[s],
                i = this.findSegmentIndexToSnap(n, t);
              i >= 0 && t.add(i + 1, new g(n), !1);
            }
          }
          findSegmentIndexToSnap(t, e) {
            let n = i.MAX_VALUE,
              s = -1;
            for (let i = 0; i < e.size() - 1; i++) {
              if (
                ((this._seg.p0 = e.get(i)),
                (this._seg.p1 = e.get(i + 1)),
                this._seg.p0.equals2D(t) || this._seg.p1.equals2D(t))
              ) {
                if (this._allowSnappingToSourceVertices) continue;
                return -1;
              }
              const r = this._seg.distance(t);
              r < this._snapTolerance && r < n && ((n = r), (s = i));
            }
            return s;
          }
          setAllowSnappingToSourceVertices(t) {
            this._allowSnappingToSourceVertices = t;
          }
          getClass() {
            return Wi;
          }
          get interfaces_() {
            return [];
          }
        }
        Wi.constructor_ = function () {
          if (
            ((this._snapTolerance = 0),
            (this._srcPts = null),
            (this._seg = new ne()),
            (this._allowSnappingToSourceVertices = !1),
            (this._isClosed = !1),
            arguments[0] instanceof Rt && "number" == typeof arguments[1])
          ) {
            const t = arguments[0],
              e = arguments[1];
            Wi.constructor_.call(this, t.getCoordinates(), e);
          } else if (
            arguments[0] instanceof Array &&
            "number" == typeof arguments[1]
          ) {
            const t = arguments[0],
              e = arguments[1];
            (this._srcPts = t),
              (this._isClosed = Wi.isClosed(t)),
              (this._snapTolerance = e);
          }
        };
        class ji {
          constructor() {
            ji.constructor_.apply(this, arguments);
          }
          static snap(t, e, n) {
            const s = new Array(2).fill(null),
              i = new ji(t);
            s[0] = i.snapTo(e, n);
            const r = new ji(e);
            return (s[1] = r.snapTo(s[0], n)), s;
          }
          static computeOverlaySnapTolerance() {
            if (1 === arguments.length) {
              const t = arguments[0];
              let e = ji.computeSizeBasedSnapTolerance(t);
              const n = t.getPrecisionModel();
              if (n.getType() === Xt.FIXED) {
                const t = ((1 / n.getScale()) * 2) / 1.415;
                t > e && (e = t);
              }
              return e;
            }
            if (2 === arguments.length) {
              const t = arguments[0],
                e = arguments[1];
              return Math.min(
                ji.computeOverlaySnapTolerance(t),
                ji.computeOverlaySnapTolerance(e)
              );
            }
          }
          static computeSizeBasedSnapTolerance(t) {
            const e = t.getEnvelopeInternal();
            return (
              Math.min(e.getHeight(), e.getWidth()) * ji.SNAP_PRECISION_FACTOR
            );
          }
          static snapToSelf(t, e, n) {
            return new ji(t).snapToSelf(e, n);
          }
          snapTo(t, e) {
            const n = this.extractTargetCoordinates(t);
            return new Ki(e, n).transform(this._srcGeom);
          }
          snapToSelf(t, e) {
            const n = this.extractTargetCoordinates(this._srcGeom),
              s = new Ki(t, n, !0).transform(this._srcGeom);
            let i = s;
            return e && _(i, bt) && (i = s.buffer(0)), i;
          }
          computeSnapTolerance(t) {
            return this.computeMinimumSegmentLength(t) / 10;
          }
          extractTargetCoordinates(t) {
            const e = new ct(),
              n = t.getCoordinates();
            for (let s = 0; s < n.length; s++) e.add(n[s]);
            return e.toArray(new Array(0).fill(null));
          }
          computeMinimumSegmentLength(t) {
            let e = i.MAX_VALUE;
            for (let n = 0; n < t.length - 1; n++) {
              const s = t[n].distance(t[n + 1]);
              s < e && (e = s);
            }
            return e;
          }
          getClass() {
            return ji;
          }
          get interfaces_() {
            return [];
          }
        }
        (ji.constructor_ = function () {
          this._srcGeom = null;
          const t = arguments[0];
          this._srcGeom = t;
        }),
          (ji.SNAP_PRECISION_FACTOR = 1e-9);
        class Ki extends ye {
          constructor() {
            super(), Ki.constructor_.apply(this, arguments);
          }
          snapLine(t, e) {
            const n = new Wi(t, this._snapTolerance);
            return (
              n.setAllowSnappingToSourceVertices(this._isSelfSnap), n.snapTo(e)
            );
          }
          transformCoordinates(t, e) {
            const n = t.toCoordinateArray(),
              s = this.snapLine(n, this._snapPts);
            return this._factory.getCoordinateSequenceFactory().create(s);
          }
          getClass() {
            return Ki;
          }
          get interfaces_() {
            return [];
          }
        }
        Ki.constructor_ = function () {
          if (
            ((this._snapTolerance = null),
            (this._snapPts = null),
            (this._isSelfSnap = !1),
            2 === arguments.length)
          ) {
            const t = arguments[0],
              e = arguments[1];
            (this._snapTolerance = t), (this._snapPts = e);
          } else if (3 === arguments.length) {
            const t = arguments[0],
              e = arguments[1],
              n = arguments[2];
            (this._snapTolerance = t),
              (this._snapPts = e),
              (this._isSelfSnap = n);
          }
        };
        var Zi = Object.freeze({
          __proto__: null,
          GeometrySnapper: ji,
          LineStringSnapper: Wi,
        });
        class Qi {
          constructor() {
            Qi.constructor_.apply(this, arguments);
          }
          getCoordinates() {
            return this._pts;
          }
          size() {
            return this._pts.length;
          }
          getCoordinate(t) {
            return this._pts[t];
          }
          isClosed() {
            return this._pts[0].equals(this._pts[this._pts.length - 1]);
          }
          getSegmentOctant(t) {
            return t === this._pts.length - 1
              ? -1
              : Ds.octant(this.getCoordinate(t), this.getCoordinate(t + 1));
          }
          setData(t) {
            this._data = t;
          }
          getData() {
            return this._data;
          }
          toString() {
            return $t.toLineString(new Yt(this._pts));
          }
          getClass() {
            return Qi;
          }
          get interfaces_() {
            return [As];
          }
        }
        Qi.constructor_ = function () {
          (this._pts = null), (this._data = null);
          const t = arguments[0],
            e = arguments[1];
          (this._pts = t), (this._data = e);
        };
        class Ji {
          constructor() {
            Ji.constructor_.apply(this, arguments);
          }
          static createAllIntersectionsFinder(t) {
            const e = new Ji(t);
            return e.setFindAllIntersections(!0), e;
          }
          static createAnyIntersectionFinder(t) {
            return new Ji(t);
          }
          static createIntersectionCounter(t) {
            const e = new Ji(t);
            return e.setFindAllIntersections(!0), e.setKeepIntersections(!1), e;
          }
          getInteriorIntersection() {
            return this._interiorIntersection;
          }
          setCheckEndSegmentsOnly(t) {
            this._isCheckEndSegmentsOnly = t;
          }
          getIntersectionSegments() {
            return this._intSegments;
          }
          count() {
            return this._intersectionCount;
          }
          getIntersections() {
            return this._intersections;
          }
          setFindAllIntersections(t) {
            this._findAllIntersections = t;
          }
          setKeepIntersections(t) {
            this._keepIntersections = t;
          }
          processIntersections(t, e, n, s) {
            if (!this._findAllIntersections && this.hasIntersection())
              return null;
            if (t === n && e === s) return null;
            if (
              this._isCheckEndSegmentsOnly &&
              !this.isEndSegment(t, e) &&
              !this.isEndSegment(n, s)
            )
              return null;
            const i = t.getCoordinates()[e],
              r = t.getCoordinates()[e + 1],
              o = n.getCoordinates()[s],
              l = n.getCoordinates()[s + 1];
            this._li.computeIntersection(i, r, o, l),
              this._li.hasIntersection() &&
                this._li.isInteriorIntersection() &&
                ((this._intSegments = new Array(4).fill(null)),
                (this._intSegments[0] = i),
                (this._intSegments[1] = r),
                (this._intSegments[2] = o),
                (this._intSegments[3] = l),
                (this._interiorIntersection = this._li.getIntersection(0)),
                this._keepIntersections &&
                  this._intersections.add(this._interiorIntersection),
                this._intersectionCount++);
          }
          isEndSegment(t, e) {
            return 0 === e || e >= t.size() - 2;
          }
          hasIntersection() {
            return null !== this._interiorIntersection;
          }
          isDone() {
            return (
              !this._findAllIntersections && null !== this._interiorIntersection
            );
          }
          getClass() {
            return Ji;
          }
          get interfaces_() {
            return [pi];
          }
        }
        Ji.constructor_ = function () {
          (this._findAllIntersections = !1),
            (this._isCheckEndSegmentsOnly = !1),
            (this._li = null),
            (this._interiorIntersection = null),
            (this._intSegments = null),
            (this._intersections = new x()),
            (this._intersectionCount = 0),
            (this._keepIntersections = !0);
          const t = arguments[0];
          (this._li = t), (this._interiorIntersection = null);
        };
        class $i {
          constructor() {
            $i.constructor_.apply(this, arguments);
          }
          static computeIntersections(t) {
            const e = new $i(t);
            return (
              e.setFindAllIntersections(!0), e.isValid(), e.getIntersections()
            );
          }
          execute() {
            if (null !== this._segInt) return null;
            this.checkInteriorIntersections();
          }
          getIntersections() {
            return this._segInt.getIntersections();
          }
          isValid() {
            return this.execute(), this._isValid;
          }
          setFindAllIntersections(t) {
            this._findAllIntersections = t;
          }
          checkInteriorIntersections() {
            (this._isValid = !0),
              (this._segInt = new Ji(this._li)),
              this._segInt.setFindAllIntersections(this._findAllIntersections);
            const t = new Us();
            if (
              (t.setSegmentIntersector(this._segInt),
              t.computeNodes(this._segStrings),
              this._segInt.hasIntersection())
            )
              return (this._isValid = !1), null;
          }
          checkValid() {
            if ((this.execute(), !this._isValid))
              throw new jn(
                this.getErrorMessage(),
                this._segInt.getInteriorIntersection()
              );
          }
          getErrorMessage() {
            if (this._isValid) return "no intersections found";
            const t = this._segInt.getIntersectionSegments();
            return (
              "found non-noded intersection between " +
              $t.toLineString(t[0], t[1]) +
              " and " +
              $t.toLineString(t[2], t[3])
            );
          }
          getClass() {
            return $i;
          }
          get interfaces_() {
            return [];
          }
        }
        $i.constructor_ = function () {
          (this._li = new ee()),
            (this._segStrings = null),
            (this._findAllIntersections = !1),
            (this._segInt = null),
            (this._isValid = !0);
          const t = arguments[0];
          this._segStrings = t;
        };
        class tr {
          constructor() {
            tr.constructor_.apply(this, arguments);
          }
          static toSegmentStrings(t) {
            const e = new x();
            for (let n = t.iterator(); n.hasNext(); ) {
              const t = n.next();
              e.add(new Qi(t.getCoordinates(), t));
            }
            return e;
          }
          static checkValid(t) {
            new tr(t).checkValid();
          }
          checkValid() {
            this._nv.checkValid();
          }
          getClass() {
            return tr;
          }
          get interfaces_() {
            return [];
          }
        }
        tr.constructor_ = function () {
          this._nv = null;
          const t = arguments[0];
          this._nv = new $i(tr.toSegmentStrings(t));
        };
        class er {
          constructor() {
            er.constructor_.apply(this, arguments);
          }
          collectLines(t) {
            for (
              let e = this._op.getGraph().getEdgeEnds().iterator();
              e.hasNext();

            ) {
              const n = e.next();
              this.collectLineEdge(n, t, this._lineEdgesList),
                this.collectBoundaryTouchEdge(n, t, this._lineEdgesList);
            }
          }
          labelIsolatedLine(t, e) {
            const n = this._ptLocator.locate(
              t.getCoordinate(),
              this._op.getArgGeometry(e)
            );
            t.getLabel().setLocation(e, n);
          }
          build(t) {
            return (
              this.findCoveredLineEdges(),
              this.collectLines(t),
              this.buildLines(t),
              this._resultLineList
            );
          }
          collectLineEdge(t, e, n) {
            const s = t.getLabel(),
              i = t.getEdge();
            t.isLineEdge() &&
              (t.isVisited() ||
                !hr.isResultOfOp(s, e) ||
                i.isCovered() ||
                (n.add(i), t.setVisitedEdge(!0)));
          }
          findCoveredLineEdges() {
            for (
              let t = this._op.getGraph().getNodes().iterator();
              t.hasNext();

            )
              t.next().getEdges().findCoveredLineEdges();
            for (
              let t = this._op.getGraph().getEdgeEnds().iterator();
              t.hasNext();

            ) {
              const e = t.next(),
                n = e.getEdge();
              if (e.isLineEdge() && !n.isCoveredSet()) {
                const t = this._op.isCoveredByA(e.getCoordinate());
                n.setCovered(t);
              }
            }
          }
          labelIsolatedLines(t) {
            for (let e = t.iterator(); e.hasNext(); ) {
              const t = e.next(),
                n = t.getLabel();
              t.isIsolated() &&
                (n.isNull(0)
                  ? this.labelIsolatedLine(t, 0)
                  : this.labelIsolatedLine(t, 1));
            }
          }
          buildLines(t) {
            for (let e = this._lineEdgesList.iterator(); e.hasNext(); ) {
              const t = e.next(),
                n =
                  (t.getLabel(),
                  this._geometryFactory.createLineString(t.getCoordinates()));
              this._resultLineList.add(n), t.setInResult(!0);
            }
          }
          collectBoundaryTouchEdge(t, e, n) {
            const s = t.getLabel();
            return t.isLineEdge() ||
              t.isVisited() ||
              t.isInteriorAreaEdge() ||
              t.getEdge().isInResult()
              ? null
              : (u.isTrue(
                  !(t.isInResult() || t.getSym().isInResult()) ||
                    !t.getEdge().isInResult()
                ),
                void (
                  hr.isResultOfOp(s, e) &&
                  e === hr.INTERSECTION &&
                  (n.add(t.getEdge()), t.setVisitedEdge(!0))
                ));
          }
          getClass() {
            return er;
          }
          get interfaces_() {
            return [];
          }
        }
        er.constructor_ = function () {
          (this._op = null),
            (this._geometryFactory = null),
            (this._ptLocator = null),
            (this._lineEdgesList = new x()),
            (this._resultLineList = new x());
          const t = arguments[0],
            e = arguments[1],
            n = arguments[2];
          (this._op = t), (this._geometryFactory = e), (this._ptLocator = n);
        };
        class nr {
          constructor() {
            nr.constructor_.apply(this, arguments);
          }
          filterCoveredNodeToPoint(t) {
            const e = t.getCoordinate();
            if (!this._op.isCoveredByLA(e)) {
              const t = this._geometryFactory.createPoint(e);
              this._resultPointList.add(t);
            }
          }
          extractNonCoveredResultNodes(t) {
            for (
              let e = this._op.getGraph().getNodes().iterator();
              e.hasNext();

            ) {
              const n = e.next();
              if (
                !n.isInResult() &&
                !n.isIncidentEdgeInResult() &&
                (0 === n.getEdges().getDegree() || t === hr.INTERSECTION)
              ) {
                const e = n.getLabel();
                hr.isResultOfOp(e, t) && this.filterCoveredNodeToPoint(n);
              }
            }
          }
          build(t) {
            return this.extractNonCoveredResultNodes(t), this._resultPointList;
          }
          getClass() {
            return nr;
          }
          get interfaces_() {
            return [];
          }
        }
        nr.constructor_ = function () {
          (this._op = null),
            (this._geometryFactory = null),
            (this._resultPointList = new x());
          const t = arguments[0],
            e = arguments[1];
          (this._op = t), (this._geometryFactory = e);
        };
        class sr {
          constructor() {
            (this._isFirst = !0),
              (this._commonMantissaBitsCount = 53),
              (this._commonBits = new s()),
              (this._commonSignExp = null);
          }
          getCommon() {
            return i.longBitsToDouble(this._commonBits);
          }
          add(t) {
            const e = i.doubleToLongBits(t);
            return this._isFirst
              ? ((this._commonBits = e),
                (this._commonSignExp = sr.signExpBits(this._commonBits)),
                (this._isFirst = !1),
                null)
              : sr.signExpBits(e) !== this._commonSignExp
              ? ((this._commonBits.high = 0), (this._commonBits.low = 0), null)
              : ((this._commonMantissaBitsCount =
                  sr.numCommonMostSigMantissaBits(this._commonBits, e)),
                void (this._commonBits = sr.zeroLowerBits(
                  this._commonBits,
                  64 - (12 + this._commonMantissaBitsCount)
                )));
          }
          toString() {
            if (1 === arguments.length) {
              const t = arguments[0],
                e = i.longBitsToDouble(t),
                n =
                  "0000000000000000000000000000000000000000000000000000000000000000" +
                  s.toBinaryString(t),
                r = n.substring(n.length - 64);
              return (
                r.substring(0, 1) +
                "  " +
                r.substring(1, 12) +
                "(exp) " +
                r.substring(12) +
                " [ " +
                e +
                " ]"
              );
            }
          }
          getClass() {
            return sr;
          }
          get interfaces_() {
            return [];
          }
          static getBit(t, e) {
            const n = 1 << e % 32;
            return e < 32
              ? 0 != (t.low & n)
                ? 1
                : 0
              : 0 != (t.high & n)
              ? 1
              : 0;
          }
          static signExpBits(t) {
            return t.high >>> 20;
          }
          static zeroLowerBits(t, e) {
            let n = "low";
            if ((e > 32 && ((t.low = 0), (e %= 32), (n = "high")), e > 0)) {
              const s = e < 32 ? ~((1 << e) - 1) : 0;
              t[n] &= s;
            }
            return t;
          }
          static numCommonMostSigMantissaBits(t, e) {
            let n = 0;
            for (let s = 52; s >= 0; s--) {
              if (sr.getBit(t, s) !== sr.getBit(e, s)) return n;
              n++;
            }
            return 52;
          }
        }
        class ir {
          constructor() {
            ir.constructor_.apply(this, arguments);
          }
          addCommonBits(t) {
            const e = new or(this._commonCoord);
            t.apply(e), t.geometryChanged();
          }
          removeCommonBits(t) {
            if (0 === this._commonCoord.x && 0 === this._commonCoord.y)
              return t;
            const e = new g(this._commonCoord);
            (e.x = -e.x), (e.y = -e.y);
            const n = new or(e);
            return t.apply(n), t.geometryChanged(), t;
          }
          getCommonCoordinate() {
            return this._commonCoord;
          }
          add(t) {
            t.apply(this._ccFilter),
              (this._commonCoord = this._ccFilter.getCommonCoordinate());
          }
          getClass() {
            return ir;
          }
          get interfaces_() {
            return [];
          }
        }
        class rr {
          constructor() {
            rr.constructor_.apply(this, arguments);
          }
          filter(t) {
            this._commonBitsX.add(t.x), this._commonBitsY.add(t.y);
          }
          getCommonCoordinate() {
            return new g(
              this._commonBitsX.getCommon(),
              this._commonBitsY.getCommon()
            );
          }
          getClass() {
            return rr;
          }
          get interfaces_() {
            return [B];
          }
        }
        rr.constructor_ = function () {
          (this._commonBitsX = new sr()), (this._commonBitsY = new sr());
        };
        class or {
          constructor() {
            or.constructor_.apply(this, arguments);
          }
          filter(t, e) {
            const n = t.getOrdinate(e, 0) + this.trans.x,
              s = t.getOrdinate(e, 1) + this.trans.y;
            t.setOrdinate(e, 0, n), t.setOrdinate(e, 1, s);
          }
          isDone() {
            return !1;
          }
          isGeometryChanged() {
            return !0;
          }
          getClass() {
            return or;
          }
          get interfaces_() {
            return [_t];
          }
        }
        (or.constructor_ = function () {
          this.trans = null;
          const t = arguments[0];
          this.trans = t;
        }),
          (ir.CommonCoordinateFilter = rr),
          (ir.Translater = or),
          (ir.constructor_ = function () {
            (this._commonCoord = null), (this._ccFilter = new rr());
          });
        class lr {
          constructor() {
            lr.constructor_.apply(this, arguments);
          }
          static overlayOp(t, e, n) {
            return new lr(t, e).getResultGeometry(n);
          }
          static union(t, e) {
            return lr.overlayOp(t, e, hr.UNION);
          }
          static intersection(t, e) {
            return lr.overlayOp(t, e, hr.INTERSECTION);
          }
          static symDifference(t, e) {
            return lr.overlayOp(t, e, hr.SYMDIFFERENCE);
          }
          static difference(t, e) {
            return lr.overlayOp(t, e, hr.DIFFERENCE);
          }
          selfSnap(t) {
            return new ji(t).snapTo(t, this._snapTolerance);
          }
          removeCommonBits(t) {
            (this._cbr = new ir()), this._cbr.add(t[0]), this._cbr.add(t[1]);
            const e = new Array(2).fill(null);
            return (
              (e[0] = this._cbr.removeCommonBits(t[0].copy())),
              (e[1] = this._cbr.removeCommonBits(t[1].copy())),
              e
            );
          }
          prepareResult(t) {
            return this._cbr.addCommonBits(t), t;
          }
          getResultGeometry(t) {
            const e = this.snap(this._geom),
              n = hr.overlayOp(e[0], e[1], t);
            return this.prepareResult(n);
          }
          checkValid(t) {
            t.isValid() || O.out.println("Snapped geometry is invalid");
          }
          computeSnapTolerance() {
            this._snapTolerance = ji.computeOverlaySnapTolerance(
              this._geom[0],
              this._geom[1]
            );
          }
          snap(t) {
            const e = this.removeCommonBits(t);
            return ji.snap(e[0], e[1], this._snapTolerance);
          }
          getClass() {
            return lr;
          }
          get interfaces_() {
            return [];
          }
        }
        lr.constructor_ = function () {
          (this._geom = new Array(2).fill(null)),
            (this._snapTolerance = null),
            (this._cbr = null);
          const t = arguments[0],
            e = arguments[1];
          (this._geom[0] = t), (this._geom[1] = e), this.computeSnapTolerance();
        };
        class ar {
          constructor() {
            ar.constructor_.apply(this, arguments);
          }
          static overlayOp(t, e, n) {
            return new ar(t, e).getResultGeometry(n);
          }
          static union(t, e) {
            return ar.overlayOp(t, e, hr.UNION);
          }
          static intersection(t, e) {
            return ar.overlayOp(t, e, hr.INTERSECTION);
          }
          static symDifference(t, e) {
            return ar.overlayOp(t, e, hr.SYMDIFFERENCE);
          }
          static difference(t, e) {
            return ar.overlayOp(t, e, hr.DIFFERENCE);
          }
          getResultGeometry(t) {
            let e = null,
              n = !1,
              s = null;
            try {
              (e = hr.overlayOp(this._geom[0], this._geom[1], t)), (n = !0);
            } catch (t) {
              if (!(t instanceof c)) throw t;
              s = t;
            }
            if (!n)
              try {
                e = lr.overlayOp(this._geom[0], this._geom[1], t);
              } catch (t) {
                throw t instanceof c ? s : t;
              }
            return e;
          }
          getClass() {
            return ar;
          }
          get interfaces_() {
            return [];
          }
        }
        ar.constructor_ = function () {
          this._geom = new Array(2).fill(null);
          const t = arguments[0],
            e = arguments[1];
          (this._geom[0] = t), (this._geom[1] = e);
        };
        class cr {
          constructor() {
            cr.constructor_.apply(this, arguments);
          }
          getArgGeometry(t) {
            return this._arg[t].getGeometry();
          }
          setComputationPrecision(t) {
            (this._resultPrecisionModel = t),
              this._li.setPrecisionModel(this._resultPrecisionModel);
          }
          getClass() {
            return cr;
          }
          get interfaces_() {
            return [];
          }
        }
        cr.constructor_ = function () {
          if (
            ((this._li = new ee()),
            (this._resultPrecisionModel = null),
            (this._arg = null),
            1 === arguments.length)
          ) {
            const t = arguments[0];
            this.setComputationPrecision(t.getPrecisionModel()),
              (this._arg = new Array(1).fill(null)),
              (this._arg[0] = new Jn(0, t));
          } else if (2 === arguments.length) {
            const t = arguments[0],
              e = arguments[1];
            cr.constructor_.call(this, t, e, V.OGC_SFS_BOUNDARY_RULE);
          } else if (3 === arguments.length) {
            const t = arguments[0],
              e = arguments[1],
              n = arguments[2];
            t.getPrecisionModel().compareTo(e.getPrecisionModel()) >= 0
              ? this.setComputationPrecision(t.getPrecisionModel())
              : this.setComputationPrecision(e.getPrecisionModel()),
              (this._arg = new Array(2).fill(null)),
              (this._arg[0] = new Jn(0, t, n)),
              (this._arg[1] = new Jn(1, e, n));
          }
        };
        class hr extends cr {
          constructor() {
            super(), hr.constructor_.apply(this, arguments);
          }
          static overlayOp(t, e, n) {
            return new hr(t, e).getResultGeometry(n);
          }
          static union(t, e) {
            if (t.isEmpty() || e.isEmpty()) {
              if (t.isEmpty() && e.isEmpty())
                return hr.createEmptyResult(hr.UNION, t, e, t.getFactory());
              if (t.isEmpty()) return e.copy();
              if (e.isEmpty()) return t.copy();
            }
            if (t.isGeometryCollection() || e.isGeometryCollection())
              throw new n(
                "This method does not support GeometryCollection arguments"
              );
            return ar.overlayOp(t, e, hr.UNION);
          }
          static intersection(t, e) {
            if (t.isEmpty() || e.isEmpty())
              return hr.createEmptyResult(
                hr.INTERSECTION,
                t,
                e,
                t.getFactory()
              );
            if (t.isGeometryCollection()) {
              const n = e;
              return de.map(
                t,
                new (class {
                  get interfaces_() {
                    return [fe];
                  }
                  map(t) {
                    return hr.intersection(t, n);
                  }
                })()
              );
            }
            return ar.overlayOp(t, e, hr.INTERSECTION);
          }
          static symDifference(t, e) {
            if (t.isEmpty() || e.isEmpty()) {
              if (t.isEmpty() && e.isEmpty())
                return hr.createEmptyResult(
                  hr.SYMDIFFERENCE,
                  t,
                  e,
                  t.getFactory()
                );
              if (t.isEmpty()) return e.copy();
              if (e.isEmpty()) return t.copy();
            }
            if (t.isGeometryCollection() || e.isGeometryCollection())
              throw new n(
                "This method does not support GeometryCollection arguments"
              );
            return ar.overlayOp(t, e, hr.SYMDIFFERENCE);
          }
          static resultDimension(t, e, n) {
            const s = e.getDimension(),
              i = n.getDimension();
            let r = -1;
            switch (t) {
              case hr.INTERSECTION:
                r = Math.min(s, i);
                break;
              case hr.UNION:
                r = Math.max(s, i);
                break;
              case hr.DIFFERENCE:
                r = s;
                break;
              case hr.SYMDIFFERENCE:
                r = Math.max(s, i);
            }
            return r;
          }
          static createEmptyResult(t, e, n, s) {
            let i = null;
            switch (hr.resultDimension(t, e, n)) {
              case -1:
                i = s.createGeometryCollection();
                break;
              case 0:
                i = s.createPoint();
                break;
              case 1:
                i = s.createLineString();
                break;
              case 2:
                i = s.createPolygon();
            }
            return i;
          }
          static difference(t, e) {
            if (t.isEmpty())
              return hr.createEmptyResult(hr.DIFFERENCE, t, e, t.getFactory());
            if (e.isEmpty()) return t.copy();
            if (t.isGeometryCollection() || e.isGeometryCollection())
              throw new n(
                "This method does not support GeometryCollection arguments"
              );
            return ar.overlayOp(t, e, hr.DIFFERENCE);
          }
          static isResultOfOp() {
            if (2 === arguments.length) {
              const t = arguments[0],
                e = arguments[1],
                n = t.getLocation(0),
                s = t.getLocation(1);
              return hr.isResultOfOp(n, s, e);
            }
            if (3 === arguments.length) {
              let t = arguments[0],
                e = arguments[1];
              const n = arguments[2];
              switch (
                (t === se.BOUNDARY && (t = se.INTERIOR),
                e === se.BOUNDARY && (e = se.INTERIOR),
                n)
              ) {
                case hr.INTERSECTION:
                  return t === se.INTERIOR && e === se.INTERIOR;
                case hr.UNION:
                  return t === se.INTERIOR || e === se.INTERIOR;
                case hr.DIFFERENCE:
                  return t === se.INTERIOR && e !== se.INTERIOR;
                case hr.SYMDIFFERENCE:
                  return (
                    (t === se.INTERIOR && e !== se.INTERIOR) ||
                    (t !== se.INTERIOR && e === se.INTERIOR)
                  );
              }
              return !1;
            }
          }
          insertUniqueEdge(t) {
            const e = this._edgeList.findEqualEdge(t);
            if (null !== e) {
              const n = e.getLabel();
              let s = t.getLabel();
              e.isPointwiseEqual(t) || (s = new Gn(t.getLabel())).flip();
              const i = e.getDepth();
              i.isNull() && i.add(n), i.add(s), n.merge(s);
            } else this._edgeList.add(t);
          }
          getGraph() {
            return this._graph;
          }
          cancelDuplicateResultEdges() {
            for (let t = this._graph.getEdgeEnds().iterator(); t.hasNext(); ) {
              const e = t.next(),
                n = e.getSym();
              e.isInResult() &&
                n.isInResult() &&
                (e.setInResult(!1), n.setInResult(!1));
            }
          }
          isCoveredByLA(t) {
            return (
              !!this.isCovered(t, this._resultLineList) ||
              !!this.isCovered(t, this._resultPolyList)
            );
          }
          computeGeometry(t, e, n, s) {
            const i = new x();
            return (
              i.addAll(t),
              i.addAll(e),
              i.addAll(n),
              i.isEmpty()
                ? hr.createEmptyResult(
                    s,
                    this._arg[0].getGeometry(),
                    this._arg[1].getGeometry(),
                    this._geomFact
                  )
                : this._geomFact.buildGeometry(i)
            );
          }
          mergeSymLabels() {
            for (let t = this._graph.getNodes().iterator(); t.hasNext(); )
              t.next().getEdges().mergeSymLabels();
          }
          isCovered(t, e) {
            for (let n = e.iterator(); n.hasNext(); ) {
              const e = n.next();
              if (this._ptLocator.locate(t, e) !== se.EXTERIOR) return !0;
            }
            return !1;
          }
          replaceCollapsedEdges() {
            const t = new x();
            for (let e = this._edgeList.iterator(); e.hasNext(); ) {
              const n = e.next();
              n.isCollapsed() && (e.remove(), t.add(n.getCollapsedEdge()));
            }
            this._edgeList.addAll(t);
          }
          updateNodeLabelling() {
            for (let t = this._graph.getNodes().iterator(); t.hasNext(); ) {
              const e = t.next(),
                n = e.getEdges().getLabel();
              e.getLabel().merge(n);
            }
          }
          getResultGeometry(t) {
            return this.computeOverlay(t), this._resultGeom;
          }
          insertUniqueEdges(t) {
            for (let e = t.iterator(); e.hasNext(); ) {
              const t = e.next();
              this.insertUniqueEdge(t);
            }
          }
          computeOverlay(t) {
            this.copyPoints(0),
              this.copyPoints(1),
              this._arg[0].computeSelfNodes(this._li, !1),
              this._arg[1].computeSelfNodes(this._li, !1),
              this._arg[0].computeEdgeIntersections(this._arg[1], this._li, !0);
            const e = new x();
            this._arg[0].computeSplitEdges(e),
              this._arg[1].computeSplitEdges(e),
              this.insertUniqueEdges(e),
              this.computeLabelsFromDepths(),
              this.replaceCollapsedEdges(),
              tr.checkValid(this._edgeList.getEdges()),
              this._graph.addEdges(this._edgeList.getEdges()),
              this.computeLabelling(),
              this.labelIncompleteNodes(),
              this.findResultAreaEdges(t),
              this.cancelDuplicateResultEdges();
            const n = new ni(this._geomFact);
            n.add(this._graph), (this._resultPolyList = n.getPolygons());
            const s = new er(this, this._geomFact, this._ptLocator);
            this._resultLineList = s.build(t);
            const i = new nr(this, this._geomFact, this._ptLocator);
            (this._resultPointList = i.build(t)),
              (this._resultGeom = this.computeGeometry(
                this._resultPointList,
                this._resultLineList,
                this._resultPolyList,
                t
              ));
          }
          labelIncompleteNode(t, e) {
            const n = this._ptLocator.locate(
              t.getCoordinate(),
              this._arg[e].getGeometry()
            );
            t.getLabel().setLocation(e, n);
          }
          copyPoints(t) {
            for (let e = this._arg[t].getNodeIterator(); e.hasNext(); ) {
              const n = e.next();
              this._graph
                .addNode(n.getCoordinate())
                .setLabel(t, n.getLabel().getLocation(t));
            }
          }
          findResultAreaEdges(t) {
            for (let e = this._graph.getEdgeEnds().iterator(); e.hasNext(); ) {
              const n = e.next(),
                s = n.getLabel();
              s.isArea() &&
                !n.isInteriorAreaEdge() &&
                hr.isResultOfOp(
                  s.getLocation(0, vn.RIGHT),
                  s.getLocation(1, vn.RIGHT),
                  t
                ) &&
                n.setInResult(!0);
            }
          }
          computeLabelsFromDepths() {
            for (let t = this._edgeList.iterator(); t.hasNext(); ) {
              const e = t.next(),
                n = e.getLabel(),
                s = e.getDepth();
              if (!s.isNull()) {
                s.normalize();
                for (let t = 0; t < 2; t++)
                  n.isNull(t) ||
                    !n.isArea() ||
                    s.isNull(t) ||
                    (0 === s.getDelta(t)
                      ? n.toLine(t)
                      : (u.isTrue(
                          !s.isNull(t, vn.LEFT),
                          "depth of LEFT side has not been initialized"
                        ),
                        n.setLocation(t, vn.LEFT, s.getLocation(t, vn.LEFT)),
                        u.isTrue(
                          !s.isNull(t, vn.RIGHT),
                          "depth of RIGHT side has not been initialized"
                        ),
                        n.setLocation(
                          t,
                          vn.RIGHT,
                          s.getLocation(t, vn.RIGHT)
                        )));
              }
            }
          }
          computeLabelling() {
            for (let t = this._graph.getNodes().iterator(); t.hasNext(); )
              t.next().getEdges().computeLabelling(this._arg);
            this.mergeSymLabels(), this.updateNodeLabelling();
          }
          labelIncompleteNodes() {
            for (let t = this._graph.getNodes().iterator(); t.hasNext(); ) {
              const e = t.next(),
                n = e.getLabel();
              e.isIsolated() &&
                (n.isNull(0)
                  ? this.labelIncompleteNode(e, 0)
                  : this.labelIncompleteNode(e, 1)),
                e.getEdges().updateLabelling(n);
            }
          }
          isCoveredByA(t) {
            return !!this.isCovered(t, this._resultPolyList);
          }
          getClass() {
            return hr;
          }
          get interfaces_() {
            return [];
          }
        }
        (hr.constructor_ = function () {
          (this._ptLocator = new pn()),
            (this._geomFact = null),
            (this._resultGeom = null),
            (this._graph = null),
            (this._edgeList = new _i()),
            (this._resultPolyList = new x()),
            (this._resultLineList = new x()),
            (this._resultPointList = new x());
          const t = arguments[0],
            e = arguments[1];
          cr.constructor_.call(this, t, e),
            (this._graph = new Qn(new gi())),
            (this._geomFact = t.getFactory());
        }),
          (hr.INTERSECTION = 1),
          (hr.UNION = 2),
          (hr.DIFFERENCE = 3),
          (hr.SYMDIFFERENCE = 4);
        var ur = Object.freeze({ __proto__: null, snap: Zi, OverlayOp: hr });
        class gr extends Mi {
          constructor() {
            super(), gr.constructor_.apply(this, arguments);
          }
          getNext() {
            return this._next;
          }
          isInRing() {
            return null !== this._edgeRing;
          }
          setRing(t) {
            this._edgeRing = t;
          }
          setLabel(t) {
            this._label = t;
          }
          getLabel() {
            return this._label;
          }
          setNext(t) {
            this._next = t;
          }
          getRing() {
            return this._edgeRing;
          }
          getClass() {
            return gr;
          }
          get interfaces_() {
            return [];
          }
        }
        gr.constructor_ = function () {
          (this._edgeRing = null), (this._next = null), (this._label = -1);
          const t = arguments[0],
            e = arguments[1],
            n = arguments[2],
            s = arguments[3];
          Mi.constructor_.call(this, t, e, n, s);
        };
        class dr extends Ai {
          constructor() {
            super(), dr.constructor_.apply(this, arguments);
          }
          getLine() {
            return this._line;
          }
          getClass() {
            return dr;
          }
          get interfaces_() {
            return [];
          }
        }
        dr.constructor_ = function () {
          this._line = null;
          const t = arguments[0];
          this._line = t;
        };
        class _r {
          constructor() {
            _r.constructor_.apply(this, arguments);
          }
          static findDifferentPoint(t, e) {
            for (let n = 0; n < t.length; n++) if (!t[n].equals(e)) return t[n];
            return null;
          }
          visitInteriorRing(t, e) {
            const n = t.getCoordinates(),
              s = n[0],
              i = _r.findDifferentPoint(n, s),
              r = e.findEdgeInSameDirection(s, i),
              o = e.findEdgeEnd(r);
            let l = null;
            o.getLabel().getLocation(0, vn.RIGHT) === se.INTERIOR
              ? (l = o)
              : o.getSym().getLabel().getLocation(0, vn.RIGHT) ===
                  se.INTERIOR && (l = o.getSym()),
              u.isTrue(
                null !== l,
                "unable to find dirEdge with Interior on RHS"
              ),
              this.visitLinkedDirectedEdges(l);
          }
          visitShellInteriors(t, e) {
            if (t instanceof Mt) {
              const n = t;
              this.visitInteriorRing(n.getExteriorRing(), e);
            }
            if (t instanceof Ft) {
              const n = t;
              for (let t = 0; t < n.getNumGeometries(); t++) {
                const s = n.getGeometryN(t);
                this.visitInteriorRing(s.getExteriorRing(), e);
              }
            }
          }
          getCoordinate() {
            return this._disconnectedRingcoord;
          }
          setInteriorEdgesInResult(t) {
            for (let e = t.getEdgeEnds().iterator(); e.hasNext(); ) {
              const t = e.next();
              t.getLabel().getLocation(0, vn.RIGHT) === se.INTERIOR &&
                t.setInResult(!0);
            }
          }
          visitLinkedDirectedEdges(t) {
            const e = t;
            let n = t;
            do {
              u.isTrue(null !== n, "found null Directed Edge"),
                n.setVisited(!0),
                (n = n.getNext());
            } while (n !== e);
          }
          buildEdgeRings(t) {
            const e = new x();
            for (let n = t.iterator(); n.hasNext(); ) {
              const t = n.next();
              if (t.isInResult() && null === t.getEdgeRing()) {
                const n = new ei(t, this._geometryFactory);
                n.linkDirectedEdgesForMinimalEdgeRings();
                const s = n.buildMinimalRings();
                e.addAll(s);
              }
            }
            return e;
          }
          hasUnvisitedShellEdge(t) {
            for (let e = 0; e < t.size(); e++) {
              const n = t.get(e);
              if (n.isHole()) continue;
              const s = n.getEdges();
              let i = s.get(0);
              if (i.getLabel().getLocation(0, vn.RIGHT) === se.INTERIOR)
                for (let t = 0; t < s.size(); t++)
                  if (!(i = s.get(t)).isVisited())
                    return (
                      (this._disconnectedRingcoord = i.getCoordinate()), !0
                    );
            }
            return !1;
          }
          isInteriorsConnected() {
            const t = new x();
            this._geomGraph.computeSplitEdges(t);
            const e = new Qn(new gi());
            e.addEdges(t),
              this.setInteriorEdgesInResult(e),
              e.linkResultDirectedEdges();
            const n = this.buildEdgeRings(e.getEdgeEnds());
            return (
              this.visitShellInteriors(this._geomGraph.getGeometry(), e),
              !this.hasUnvisitedShellEdge(n)
            );
          }
          getClass() {
            return _r;
          }
          get interfaces_() {
            return [];
          }
        }
        _r.constructor_ = function () {
          (this._geometryFactory = new Wt()),
            (this._geomGraph = null),
            (this._disconnectedRingcoord = null);
          const t = arguments[0];
          this._geomGraph = t;
        };
        class pr {
          constructor() {
            pr.constructor_.apply(this, arguments);
          }
          createEdgeEndForNext(t, e, n, s) {
            const i = n.segmentIndex + 1;
            if (i >= t.getNumPoints() && null === s) return null;
            let r = t.getCoordinate(i);
            null !== s && s.segmentIndex === n.segmentIndex && (r = s.coord);
            const o = new Wn(t, n.coord, r, new Gn(t.getLabel()));
            e.add(o);
          }
          createEdgeEndForPrev(t, e, n, s) {
            let i = n.segmentIndex;
            if (0 === n.dist) {
              if (0 === i) return null;
              i--;
            }
            let r = t.getCoordinate(i);
            null !== s && s.segmentIndex >= i && (r = s.coord);
            const o = new Gn(t.getLabel());
            o.flip();
            const l = new Wn(t, n.coord, r, o);
            e.add(l);
          }
          computeEdgeEnds() {
            if (1 === arguments.length) {
              const t = arguments[0],
                e = new x();
              for (let n = t; n.hasNext(); ) {
                const t = n.next();
                this.computeEdgeEnds(t, e);
              }
              return e;
            }
            if (2 === arguments.length) {
              const t = arguments[0],
                e = arguments[1],
                n = t.getEdgeIntersectionList();
              n.addEndpoints();
              const s = n.iterator();
              let i = null,
                r = null;
              if (!s.hasNext()) return null;
              let o = s.next();
              do {
                (i = r),
                  (r = o),
                  (o = null),
                  s.hasNext() && (o = s.next()),
                  null !== r &&
                    (this.createEdgeEndForPrev(t, e, r, i),
                    this.createEdgeEndForNext(t, e, r, o));
              } while (null !== r);
            }
          }
          getClass() {
            return pr;
          }
          get interfaces_() {
            return [];
          }
        }
        pr.constructor_ = function () {};
        class fr extends Wn {
          constructor() {
            super(), fr.constructor_.apply(this, arguments);
          }
          insert(t) {
            this._edgeEnds.add(t);
          }
          print(t) {
            t.println("EdgeEndBundle--\x3e Label: " + this._label);
            for (let e = this.iterator(); e.hasNext(); )
              e.next().print(t), t.println();
          }
          iterator() {
            return this._edgeEnds.iterator();
          }
          getEdgeEnds() {
            return this._edgeEnds;
          }
          computeLabelOn(t, e) {
            let n = 0,
              s = !1;
            for (let r = this.iterator(); r.hasNext(); ) {
              const e = r.next().getLabel().getLocation(t);
              e === se.BOUNDARY && n++, e === se.INTERIOR && (s = !0);
            }
            let i = se.NONE;
            s && (i = se.INTERIOR),
              n > 0 && (i = Jn.determineBoundary(e, n)),
              this._label.setLocation(t, i);
          }
          computeLabelSide(t, e) {
            for (let n = this.iterator(); n.hasNext(); ) {
              const s = n.next();
              if (s.getLabel().isArea()) {
                const n = s.getLabel().getLocation(t, e);
                if (n === se.INTERIOR)
                  return this._label.setLocation(t, e, se.INTERIOR), null;
                n === se.EXTERIOR && this._label.setLocation(t, e, se.EXTERIOR);
              }
            }
          }
          getLabel() {
            return this._label;
          }
          computeLabelSides(t) {
            this.computeLabelSide(t, vn.LEFT),
              this.computeLabelSide(t, vn.RIGHT);
          }
          updateIM(t) {
            kn.updateIM(this._label, t);
          }
          computeLabel(t) {
            let e = !1;
            for (let n = this.iterator(); n.hasNext(); )
              n.next().getLabel().isArea() && (e = !0);
            this._label = e
              ? new Gn(se.NONE, se.NONE, se.NONE)
              : new Gn(se.NONE);
            for (let n = 0; n < 2; n++)
              this.computeLabelOn(n, t), e && this.computeLabelSides(n);
          }
          getClass() {
            return fr;
          }
          get interfaces_() {
            return [];
          }
        }
        fr.constructor_ = function () {
          if (((this._edgeEnds = new x()), 1 === arguments.length)) {
            const t = arguments[0];
            fr.constructor_.call(this, null, t);
          } else if (2 === arguments.length) {
            const t = arguments[1];
            Wn.constructor_.call(
              this,
              t.getEdge(),
              t.getCoordinate(),
              t.getDirectedCoordinate(),
              new Gn(t.getLabel())
            ),
              this.insert(t);
          }
        };
        class mr extends hi {
          constructor() {
            super(), mr.constructor_.apply(this, arguments);
          }
          updateIM(t) {
            for (let e = this.iterator(); e.hasNext(); ) e.next().updateIM(t);
          }
          insert(t) {
            let e = this._edgeMap.get(t);
            null === e
              ? ((e = new fr(t)), this.insertEdgeEnd(t, e))
              : e.insert(t);
          }
          getClass() {
            return mr;
          }
          get interfaces_() {
            return [];
          }
        }
        mr.constructor_ = function () {};
        class yr extends Xn {
          constructor() {
            super(), yr.constructor_.apply(this, arguments);
          }
          updateIMFromEdges(t) {
            this._edges.updateIM(t);
          }
          computeIM(t) {
            t.setAtLeastIfValid(
              this._label.getLocation(0),
              this._label.getLocation(1),
              0
            );
          }
          getClass() {
            return yr;
          }
          get interfaces_() {
            return [];
          }
        }
        yr.constructor_ = function () {
          const t = arguments[0],
            e = arguments[1];
          Xn.constructor_.call(this, t, e);
        };
        class xr extends Zn {
          constructor() {
            super(), xr.constructor_.apply(this, arguments);
          }
          createNode(t) {
            return new yr(t, new mr());
          }
          getClass() {
            return xr;
          }
          get interfaces_() {
            return [];
          }
        }
        xr.constructor_ = function () {};
        class Er {
          constructor() {
            Er.constructor_.apply(this, arguments);
          }
          insertEdgeEnds(t) {
            for (let e = t.iterator(); e.hasNext(); ) {
              const t = e.next();
              this._nodes.add(t);
            }
          }
          getNodeIterator() {
            return this._nodes.iterator();
          }
          copyNodesAndLabels(t, e) {
            for (let n = t.getNodeIterator(); n.hasNext(); ) {
              const t = n.next();
              this._nodes
                .addNode(t.getCoordinate())
                .setLabel(e, t.getLabel().getLocation(e));
            }
          }
          build(t) {
            this.computeIntersectionNodes(t, 0), this.copyNodesAndLabels(t, 0);
            const e = new pr().computeEdgeEnds(t.getEdgeIterator());
            this.insertEdgeEnds(e);
          }
          computeIntersectionNodes(t, e) {
            for (let n = t.getEdgeIterator(); n.hasNext(); ) {
              const t = n.next(),
                s = t.getLabel().getLocation(e);
              for (
                let n = t.getEdgeIntersectionList().iterator();
                n.hasNext();

              ) {
                const t = n.next(),
                  i = this._nodes.addNode(t.coord);
                s === se.BOUNDARY
                  ? i.setLabelBoundary(e)
                  : i.getLabel().isNull(e) && i.setLabel(e, se.INTERIOR);
              }
            }
          }
          getClass() {
            return Er;
          }
          get interfaces_() {
            return [];
          }
        }
        Er.constructor_ = function () {
          this._nodes = new Hn(new xr());
        };
        class Ir {
          constructor() {
            Ir.constructor_.apply(this, arguments);
          }
          isNodeEdgeAreaLabelsConsistent() {
            for (let t = this._nodeGraph.getNodeIterator(); t.hasNext(); ) {
              const e = t.next();
              if (!e.getEdges().isAreaLabelsConsistent(this._geomGraph))
                return (this._invalidPoint = e.getCoordinate().copy()), !1;
            }
            return !0;
          }
          getInvalidPoint() {
            return this._invalidPoint;
          }
          hasDuplicateRings() {
            for (let t = this._nodeGraph.getNodeIterator(); t.hasNext(); )
              for (let e = t.next().getEdges().iterator(); e.hasNext(); ) {
                const t = e.next();
                if (t.getEdgeEnds().size() > 1)
                  return (
                    (this._invalidPoint = t.getEdge().getCoordinate(0)), !0
                  );
              }
            return !1;
          }
          isNodeConsistentArea() {
            const t = this._geomGraph.computeSelfNodes(this._li, !0, !0);
            return t.hasProperIntersection()
              ? ((this._invalidPoint = t.getProperIntersectionPoint()), !1)
              : (this._nodeGraph.build(this._geomGraph),
                this.isNodeEdgeAreaLabelsConsistent());
          }
          getClass() {
            return Ir;
          }
          get interfaces_() {
            return [];
          }
        }
        Ir.constructor_ = function () {
          (this._li = new ee()),
            (this._geomGraph = null),
            (this._nodeGraph = new Er()),
            (this._invalidPoint = null);
          const t = arguments[0];
          this._geomGraph = t;
        };
        class Nr {
          constructor() {
            Nr.constructor_.apply(this, arguments);
          }
          buildIndex() {
            this._index = new Is();
            for (let t = 0; t < this._rings.size(); t++) {
              const e = this._rings.get(t),
                n = e.getEnvelopeInternal();
              this._index.insert(n, e);
            }
          }
          getNestedPoint() {
            return this._nestedPt;
          }
          isNonNested() {
            this.buildIndex();
            for (let t = 0; t < this._rings.size(); t++) {
              const e = this._rings.get(t),
                n = e.getCoordinates(),
                s = this._index.query(e.getEnvelopeInternal());
              for (let t = 0; t < s.size(); t++) {
                const i = s.get(t),
                  r = i.getCoordinates();
                if (e === i) continue;
                if (
                  !e.getEnvelopeInternal().intersects(i.getEnvelopeInternal())
                )
                  continue;
                const o = Sr.findPtNotNode(n, i, this._graph);
                if (null !== o && je.isInRing(o, r))
                  return (this._nestedPt = o), !1;
              }
            }
            return !0;
          }
          add(t) {
            this._rings.add(t),
              this._totalEnv.expandToInclude(t.getEnvelopeInternal());
          }
          getClass() {
            return Nr;
          }
          get interfaces_() {
            return [];
          }
        }
        Nr.constructor_ = function () {
          (this._graph = null),
            (this._rings = new x()),
            (this._totalEnv = new N()),
            (this._index = null),
            (this._nestedPt = null);
          const t = arguments[0];
          this._graph = t;
        };
        class Cr {
          constructor() {
            Cr.constructor_.apply(this, arguments);
          }
          getErrorType() {
            return this._errorType;
          }
          getMessage() {
            return Cr.errMsg[this._errorType];
          }
          getCoordinate() {
            return this._pt;
          }
          toString() {
            let t = "";
            return (
              null !== this._pt && (t = " at or near point " + this._pt),
              this.getMessage() + t
            );
          }
          getClass() {
            return Cr;
          }
          get interfaces_() {
            return [];
          }
        }
        (Cr.constructor_ = function () {
          if (
            ((this._errorType = null),
            (this._pt = null),
            1 === arguments.length)
          ) {
            const t = arguments[0];
            Cr.constructor_.call(this, t, null);
          } else if (2 === arguments.length) {
            const t = arguments[0],
              e = arguments[1];
            (this._errorType = t), null !== e && (this._pt = e.copy());
          }
        }),
          (Cr.ERROR = 0),
          (Cr.REPEATED_POINT = 1),
          (Cr.HOLE_OUTSIDE_SHELL = 2),
          (Cr.NESTED_HOLES = 3),
          (Cr.DISCONNECTED_INTERIOR = 4),
          (Cr.SELF_INTERSECTION = 5),
          (Cr.RING_SELF_INTERSECTION = 6),
          (Cr.NESTED_SHELLS = 7),
          (Cr.DUPLICATE_RINGS = 8),
          (Cr.TOO_FEW_POINTS = 9),
          (Cr.INVALID_COORDINATE = 10),
          (Cr.RING_NOT_CLOSED = 11),
          (Cr.errMsg = [
            "Topology Validation Error",
            "Repeated Point",
            "Hole lies outside shell",
            "Holes are nested",
            "Interior is disconnected",
            "Self-intersection",
            "Ring Self-intersection",
            "Nested shells",
            "Duplicate Rings",
            "Too few distinct points in geometry component",
            "Invalid Coordinate",
            "Ring is not closed",
          ]);
        class Sr {
          constructor() {
            Sr.constructor_.apply(this, arguments);
          }
          static findPtNotNode(t, e, n) {
            const s = n.findEdge(e).getEdgeIntersectionList();
            for (let i = 0; i < t.length; i++) {
              const e = t[i];
              if (!s.isIntersection(e)) return e;
            }
            return null;
          }
          static isValid() {
            if (arguments[0] instanceof q)
              return new Sr(arguments[0]).isValid();
            if (arguments[0] instanceof g) {
              const t = arguments[0];
              return (
                !i.isNaN(t.x) &&
                !i.isInfinite(t.x) &&
                !i.isNaN(t.y) &&
                !i.isInfinite(t.y)
              );
            }
          }
          checkInvalidCoordinates() {
            if (arguments[0] instanceof Array) {
              const t = arguments[0];
              for (let e = 0; e < t.length; e++)
                if (!Sr.isValid(t[e]))
                  return (
                    (this._validErr = new Cr(Cr.INVALID_COORDINATE, t[e])), null
                  );
            } else if (arguments[0] instanceof Mt) {
              const t = arguments[0];
              if (
                (this.checkInvalidCoordinates(
                  t.getExteriorRing().getCoordinates()
                ),
                null !== this._validErr)
              )
                return null;
              for (let e = 0; e < t.getNumInteriorRing(); e++)
                if (
                  (this.checkInvalidCoordinates(
                    t.getInteriorRingN(e).getCoordinates()
                  ),
                  null !== this._validErr)
                )
                  return null;
            }
          }
          checkHolesNotNested(t, e) {
            const n = new Nr(e);
            for (let s = 0; s < t.getNumInteriorRing(); s++) {
              const e = t.getInteriorRingN(s);
              n.add(e);
            }
            n.isNonNested() ||
              (this._validErr = new Cr(Cr.NESTED_HOLES, n.getNestedPoint()));
          }
          checkConsistentArea(t) {
            const e = new Ir(t);
            if (!e.isNodeConsistentArea())
              return (
                (this._validErr = new Cr(
                  Cr.SELF_INTERSECTION,
                  e.getInvalidPoint()
                )),
                null
              );
            e.hasDuplicateRings() &&
              (this._validErr = new Cr(
                Cr.DUPLICATE_RINGS,
                e.getInvalidPoint()
              ));
          }
          isValid() {
            return (
              this.checkValid(this._parentGeometry), null === this._validErr
            );
          }
          checkShellInsideHole(t, e, n) {
            const s = t.getCoordinates(),
              i = e.getCoordinates(),
              r = Sr.findPtNotNode(s, e, n);
            if (null !== r && !je.isInRing(r, i)) return r;
            const o = Sr.findPtNotNode(i, t, n);
            return null !== o
              ? je.isInRing(o, s)
                ? o
                : null
              : (u.shouldNeverReachHere(
                  "points in shell and hole appear to be equal"
                ),
                null);
          }
          checkNoSelfIntersectingRings(t) {
            for (let e = t.getEdgeIterator(); e.hasNext(); ) {
              const t = e.next();
              if (
                (this.checkNoSelfIntersectingRing(t.getEdgeIntersectionList()),
                null !== this._validErr)
              )
                return null;
            }
          }
          checkConnectedInteriors(t) {
            const e = new _r(t);
            e.isInteriorsConnected() ||
              (this._validErr = new Cr(
                Cr.DISCONNECTED_INTERIOR,
                e.getCoordinate()
              ));
          }
          checkNoSelfIntersectingRing(t) {
            const e = new ct();
            let n = !0;
            for (let s = t.iterator(); s.hasNext(); ) {
              const t = s.next();
              if (n) n = !1;
              else {
                if (e.contains(t.coord))
                  return (
                    (this._validErr = new Cr(
                      Cr.RING_SELF_INTERSECTION,
                      t.coord
                    )),
                    null
                  );
                e.add(t.coord);
              }
            }
          }
          checkHolesInShell(t, e) {
            const n = t.getExteriorRing(),
              s = new Xe(n);
            for (let i = 0; i < t.getNumInteriorRing(); i++) {
              const r = t.getInteriorRingN(i),
                o = Sr.findPtNotNode(r.getCoordinates(), n, e);
              if (null === o) return null;
              if (se.EXTERIOR === s.locate(o))
                return (
                  (this._validErr = new Cr(Cr.HOLE_OUTSIDE_SHELL, o)), null
                );
            }
          }
          checkTooFewPoints(t) {
            if (t.hasTooFewPoints())
              return (
                (this._validErr = new Cr(
                  Cr.TOO_FEW_POINTS,
                  t.getInvalidPoint()
                )),
                null
              );
          }
          getValidationError() {
            return this.checkValid(this._parentGeometry), this._validErr;
          }
          checkValid() {
            if (arguments[0] instanceof vt) {
              const t = arguments[0];
              this.checkInvalidCoordinates(t.getCoordinates());
            } else if (arguments[0] instanceof Dt) {
              const t = arguments[0];
              this.checkInvalidCoordinates(t.getCoordinates());
            } else if (arguments[0] instanceof At) {
              const t = arguments[0];
              if (
                (this.checkInvalidCoordinates(t.getCoordinates()),
                null !== this._validErr)
              )
                return null;
              if ((this.checkClosedRing(t), null !== this._validErr))
                return null;
              const e = new Jn(0, t);
              if ((this.checkTooFewPoints(e), null !== this._validErr))
                return null;
              const n = new ee();
              e.computeSelfNodes(n, !0, !0),
                this.checkNoSelfIntersectingRings(e);
            } else if (arguments[0] instanceof Rt) {
              const t = arguments[0];
              if (
                (this.checkInvalidCoordinates(t.getCoordinates()),
                null !== this._validErr)
              )
                return null;
              const e = new Jn(0, t);
              this.checkTooFewPoints(e);
            } else if (arguments[0] instanceof Mt) {
              const t = arguments[0];
              if ((this.checkInvalidCoordinates(t), null !== this._validErr))
                return null;
              if ((this.checkClosedRings(t), null !== this._validErr))
                return null;
              const e = new Jn(0, t);
              if ((this.checkTooFewPoints(e), null !== this._validErr))
                return null;
              if ((this.checkConsistentArea(e), null !== this._validErr))
                return null;
              if (
                !this._isSelfTouchingRingFormingHoleValid &&
                (this.checkNoSelfIntersectingRings(e), null !== this._validErr)
              )
                return null;
              if ((this.checkHolesInShell(t, e), null !== this._validErr))
                return null;
              if ((this.checkHolesNotNested(t, e), null !== this._validErr))
                return null;
              this.checkConnectedInteriors(e);
            } else if (arguments[0] instanceof Ft) {
              const t = arguments[0];
              for (let n = 0; n < t.getNumGeometries(); n++) {
                const e = t.getGeometryN(n);
                if ((this.checkInvalidCoordinates(e), null !== this._validErr))
                  return null;
                if ((this.checkClosedRings(e), null !== this._validErr))
                  return null;
              }
              const e = new Jn(0, t);
              if ((this.checkTooFewPoints(e), null !== this._validErr))
                return null;
              if ((this.checkConsistentArea(e), null !== this._validErr))
                return null;
              if (
                !this._isSelfTouchingRingFormingHoleValid &&
                (this.checkNoSelfIntersectingRings(e), null !== this._validErr)
              )
                return null;
              for (let n = 0; n < t.getNumGeometries(); n++) {
                const s = t.getGeometryN(n);
                if ((this.checkHolesInShell(s, e), null !== this._validErr))
                  return null;
              }
              for (let n = 0; n < t.getNumGeometries(); n++) {
                const s = t.getGeometryN(n);
                if ((this.checkHolesNotNested(s, e), null !== this._validErr))
                  return null;
              }
              if ((this.checkShellsNotNested(t, e), null !== this._validErr))
                return null;
              this.checkConnectedInteriors(e);
            } else if (arguments[0] instanceof pt) {
              const t = arguments[0];
              for (let e = 0; e < t.getNumGeometries(); e++) {
                const n = t.getGeometryN(e);
                if ((this.checkValid(n), null !== this._validErr)) return null;
              }
            } else if (arguments[0] instanceof q) {
              const t = arguments[0];
              if (((this._validErr = null), t.isEmpty())) return null;
              if (t instanceof vt) this.checkValid(t);
              else if (t instanceof Dt) this.checkValid(t);
              else if (t instanceof At) this.checkValid(t);
              else if (t instanceof Rt) this.checkValid(t);
              else if (t instanceof Mt) this.checkValid(t);
              else if (t instanceof Ft) this.checkValid(t);
              else {
                if (!(t instanceof pt))
                  throw new UnsupportedOperationException(
                    t.getClass().getName()
                  );
                this.checkValid(t);
              }
            }
          }
          setSelfTouchingRingFormingHoleValid(t) {
            this._isSelfTouchingRingFormingHoleValid = t;
          }
          checkShellNotNested(t, e, n) {
            const s = t.getCoordinates(),
              i = e.getExteriorRing(),
              r = i.getCoordinates(),
              o = Sr.findPtNotNode(s, i, n);
            if (null === o) return null;
            if (!je.isInRing(o, r)) return null;
            if (e.getNumInteriorRing() <= 0)
              return (this._validErr = new Cr(Cr.NESTED_SHELLS, o)), null;
            let l = null;
            for (let a = 0; a < e.getNumInteriorRing(); a++) {
              const s = e.getInteriorRingN(a);
              if (null === (l = this.checkShellInsideHole(t, s, n)))
                return null;
            }
            this._validErr = new Cr(Cr.NESTED_SHELLS, l);
          }
          checkClosedRings(t) {
            if (
              (this.checkClosedRing(t.getExteriorRing()),
              null !== this._validErr)
            )
              return null;
            for (let e = 0; e < t.getNumInteriorRing(); e++)
              if (
                (this.checkClosedRing(t.getInteriorRingN(e)),
                null !== this._validErr)
              )
                return null;
          }
          checkClosedRing(t) {
            if (!t.isClosed()) {
              let e = null;
              t.getNumPoints() >= 1 && (e = t.getCoordinateN(0)),
                (this._validErr = new Cr(Cr.RING_NOT_CLOSED, e));
            }
          }
          checkShellsNotNested(t, e) {
            for (let n = 0; n < t.getNumGeometries(); n++) {
              const s = t.getGeometryN(n).getExteriorRing();
              for (let i = 0; i < t.getNumGeometries(); i++) {
                if (n === i) continue;
                const r = t.getGeometryN(i);
                if (
                  (this.checkShellNotNested(s, r, e), null !== this._validErr)
                )
                  return null;
              }
            }
          }
          getClass() {
            return Sr;
          }
          get interfaces_() {
            return [];
          }
        }
        Sr.constructor_ = function () {
          (this._parentGeometry = null),
            (this._isSelfTouchingRingFormingHoleValid = !1),
            (this._validErr = null);
          const t = arguments[0];
          this._parentGeometry = t;
        };
        class wr {
          constructor() {
            wr.constructor_.apply(this, arguments);
          }
          static findDirEdgesInRing(t) {
            let e = t;
            const n = new x();
            do {
              n.add(e),
                (e = e.getNext()),
                u.isTrue(null !== e, "found null DE in ring"),
                u.isTrue(e === t || !e.isInRing(), "found DE already in ring");
            } while (e !== t);
            return n;
          }
          static addEdge(t, e, n) {
            if (e) for (let s = 0; s < t.length; s++) n.add(t[s], !1);
            else for (let s = t.length - 1; s >= 0; s--) n.add(t[s], !1);
          }
          static findEdgeRingContaining(t, e) {
            const n = t.getRing(),
              s = n.getEnvelopeInternal();
            let i = n.getCoordinateN(0),
              r = null,
              o = null;
            for (let l = e.iterator(); l.hasNext(); ) {
              const t = l.next(),
                e = t.getRing(),
                a = e.getEnvelopeInternal();
              if (a.equals(s)) continue;
              if (!a.contains(s)) continue;
              i = X.ptNotInList(n.getCoordinates(), e.getCoordinates());
              let c = !1;
              je.isInRing(i, e.getCoordinates()) && (c = !0),
                c &&
                  (null === r || o.contains(a)) &&
                  (o = (r = t).getRing().getEnvelopeInternal());
            }
            return r;
          }
          isIncluded() {
            return this._isIncluded;
          }
          getCoordinates() {
            if (null === this._ringPts) {
              const t = new I();
              for (let e = this._deList.iterator(); e.hasNext(); ) {
                const n = e.next(),
                  s = n.getEdge();
                wr.addEdge(
                  s.getLine().getCoordinates(),
                  n.getEdgeDirection(),
                  t
                );
              }
              this._ringPts = t.toCoordinateArray();
            }
            return this._ringPts;
          }
          isIncludedSet() {
            return this._isIncludedSet;
          }
          isValid() {
            return (
              this.getCoordinates(),
              !(this._ringPts.length <= 3) &&
                (this.getRing(), Sr.isValid(this._ring))
            );
          }
          build(t) {
            let e = t;
            do {
              this.add(e),
                e.setRing(this),
                (e = e.getNext()),
                u.isTrue(null !== e, "found null DE in ring"),
                u.isTrue(e === t || !e.isInRing(), "found DE already in ring");
            } while (e !== t);
          }
          isOuterHole() {
            return !!this._isHole && !this.hasShell();
          }
          getPolygon() {
            let t = null;
            if (null !== this._holes) {
              t = new Array(this._holes.size()).fill(null);
              for (let e = 0; e < this._holes.size(); e++)
                t[e] = this._holes.get(e);
            }
            return this._factory.createPolygon(this._ring, t);
          }
          isHole() {
            return this._isHole;
          }
          isProcessed() {
            return this._isProcessed;
          }
          addHole() {
            if (arguments[0] instanceof At) {
              const t = arguments[0];
              null === this._holes && (this._holes = new x()),
                this._holes.add(t);
            } else if (arguments[0] instanceof wr) {
              const t = arguments[0];
              t.setShell(this);
              const e = t.getRing();
              null === this._holes && (this._holes = new x()),
                this._holes.add(e);
            }
          }
          setIncluded(t) {
            (this._isIncluded = t), (this._isIncludedSet = !0);
          }
          getOuterHole() {
            if (this.isHole()) return null;
            for (let t = 0; t < this._deList.size(); t++) {
              const e = this._deList.get(t).getSym().getRing();
              if (e.isOuterHole()) return e;
            }
            return null;
          }
          computeHole() {
            const t = this.getRing();
            this._isHole = v.isCCW(t.getCoordinates());
          }
          hasShell() {
            return null !== this._shell;
          }
          isOuterShell() {
            return null !== this.getOuterHole();
          }
          getLineString() {
            return (
              this.getCoordinates(),
              this._factory.createLineString(this._ringPts)
            );
          }
          toString() {
            return $t.toLineString(new Yt(this.getCoordinates()));
          }
          getShell() {
            return this.isHole() ? this._shell : this;
          }
          add(t) {
            this._deList.add(t);
          }
          getRing() {
            if (null !== this._ring) return this._ring;
            this.getCoordinates(),
              this._ringPts.length < 3 && O.out.println(this._ringPts);
            try {
              this._ring = this._factory.createLinearRing(this._ringPts);
            } catch (t) {
              if (!(t instanceof C)) throw t;
              O.out.println(this._ringPts);
            }
            return this._ring;
          }
          updateIncluded() {
            if (this.isHole()) return null;
            for (let t = 0; t < this._deList.size(); t++) {
              const e = this._deList.get(t).getSym().getRing().getShell();
              if (null !== e && e.isIncludedSet())
                return this.setIncluded(!e.isIncluded()), null;
            }
          }
          setShell(t) {
            this._shell = t;
          }
          setProcessed(t) {
            this._isProcessed = t;
          }
          getClass() {
            return wr;
          }
          get interfaces_() {
            return [];
          }
        }
        class Lr {
          constructor() {
            Lr.constructor_.apply(this, arguments);
          }
          compare(t, e) {
            const n = e;
            return t
              .getRing()
              .getEnvelope()
              .compareTo(n.getRing().getEnvelope());
          }
          getClass() {
            return Lr;
          }
          get interfaces_() {
            return [l];
          }
        }
        (Lr.constructor_ = function () {}),
          (wr.EnvelopeComparator = Lr),
          (wr.constructor_ = function () {
            (this._factory = null),
              (this._deList = new x()),
              (this._lowestEdge = null),
              (this._ring = null),
              (this._ringPts = null),
              (this._holes = null),
              (this._shell = null),
              (this._isHole = null),
              (this._isProcessed = !1),
              (this._isIncludedSet = !1),
              (this._isIncluded = !1);
            const t = arguments[0];
            this._factory = t;
          });
        class Tr extends Vi {
          constructor() {
            super(), Tr.constructor_.apply(this, arguments);
          }
          static findLabeledEdgeRings(t) {
            const e = new x();
            let n = 1;
            for (let s = t.iterator(); s.hasNext(); ) {
              const t = s.next();
              if (t.isMarked()) continue;
              if (t.getLabel() >= 0) continue;
              e.add(t);
              const i = wr.findDirEdgesInRing(t);
              Tr.label(i, n), n++;
            }
            return e;
          }
          static getDegreeNonDeleted(t) {
            let e = 0;
            for (let n = t.getOutEdges().getEdges().iterator(); n.hasNext(); )
              n.next().isMarked() || e++;
            return e;
          }
          static deleteAllEdges(t) {
            for (let e = t.getOutEdges().getEdges().iterator(); e.hasNext(); ) {
              const t = e.next();
              t.setMarked(!0);
              const n = t.getSym();
              null !== n && n.setMarked(!0);
            }
          }
          static label(t, e) {
            for (let n = t.iterator(); n.hasNext(); ) n.next().setLabel(e);
          }
          static computeNextCWEdges(t) {
            let e = null,
              n = null;
            for (let s = t.getOutEdges().getEdges().iterator(); s.hasNext(); ) {
              const t = s.next();
              t.isMarked() ||
                (null === e && (e = t),
                null !== n && n.getSym().setNext(t),
                (n = t));
            }
            null !== n && n.getSym().setNext(e);
          }
          static computeNextCCWEdges(t, e) {
            let n = null,
              s = null;
            const i = t.getOutEdges().getEdges();
            for (let r = i.size() - 1; r >= 0; r--) {
              const t = i.get(r),
                o = t.getSym();
              let l = null;
              t.getLabel() === e && (l = t);
              let a = null;
              o.getLabel() === e && (a = o),
                (null === l && null === a) ||
                  (null !== a && (s = a),
                  null !== l &&
                    (null !== s && (s.setNext(l), (s = null)),
                    null === n && (n = l)));
            }
            null !== s && (u.isTrue(null !== n), s.setNext(n));
          }
          static getDegree(t, e) {
            let n = 0;
            for (let s = t.getOutEdges().getEdges().iterator(); s.hasNext(); )
              s.next().getLabel() === e && n++;
            return n;
          }
          static findIntersectionNodes(t, e) {
            let n = t,
              s = null;
            do {
              const i = n.getFromNode();
              Tr.getDegree(i, e) > 1 && (null === s && (s = new x()), s.add(i)),
                (n = n.getNext()),
                u.isTrue(null !== n, "found null DE in ring"),
                u.isTrue(n === t || !n.isInRing(), "found DE already in ring");
            } while (n !== t);
            return s;
          }
          findEdgeRing(t) {
            const e = new wr(this._factory);
            return e.build(t), e;
          }
          computeDepthParity() {
            if (0 === arguments.length) for (;;) return null;
          }
          computeNextCWEdges() {
            for (let t = this.nodeIterator(); t.hasNext(); ) {
              const e = t.next();
              Tr.computeNextCWEdges(e);
            }
          }
          addEdge(t) {
            if (t.isEmpty()) return null;
            const e = X.removeRepeatedPoints(t.getCoordinates());
            if (e.length < 2) return null;
            const n = e[0],
              s = e[e.length - 1],
              i = this.getNode(n),
              r = this.getNode(s),
              o = new gr(i, r, e[1], !0),
              l = new gr(r, i, e[e.length - 2], !1),
              a = new dr(t);
            a.setDirectedEdges(o, l), this.add(a);
          }
          deleteCutEdges() {
            this.computeNextCWEdges(), Tr.findLabeledEdgeRings(this._dirEdges);
            const t = new x();
            for (let e = this._dirEdges.iterator(); e.hasNext(); ) {
              const n = e.next();
              if (n.isMarked()) continue;
              const s = n.getSym();
              if (n.getLabel() === s.getLabel()) {
                n.setMarked(!0), s.setMarked(!0);
                const e = n.getEdge();
                t.add(e.getLine());
              }
            }
            return t;
          }
          getEdgeRings() {
            this.computeNextCWEdges(), Tr.label(this._dirEdges, -1);
            const t = Tr.findLabeledEdgeRings(this._dirEdges);
            this.convertMaximalToMinimalEdgeRings(t);
            const e = new x();
            for (let n = this._dirEdges.iterator(); n.hasNext(); ) {
              const t = n.next();
              if (t.isMarked()) continue;
              if (t.isInRing()) continue;
              const s = this.findEdgeRing(t);
              e.add(s);
            }
            return e;
          }
          getNode(t) {
            let e = this.findNode(t);
            return null === e && ((e = new Gi(t)), this.add(e)), e;
          }
          convertMaximalToMinimalEdgeRings(t) {
            for (let e = t.iterator(); e.hasNext(); ) {
              const t = e.next(),
                n = t.getLabel(),
                s = Tr.findIntersectionNodes(t, n);
              if (null !== s)
                for (let e = s.iterator(); e.hasNext(); ) {
                  const t = e.next();
                  Tr.computeNextCCWEdges(t, n);
                }
            }
          }
          deleteDangles() {
            const t = this.findNodesOfDegree(1),
              e = new J(),
              n = new ln();
            for (let s = t.iterator(); s.hasNext(); ) n.push(s.next());
            for (; !n.isEmpty(); ) {
              const t = n.pop();
              Tr.deleteAllEdges(t);
              for (
                let s = t.getOutEdges().getEdges().iterator();
                s.hasNext();

              ) {
                const t = s.next();
                t.setMarked(!0);
                const i = t.getSym();
                null !== i && i.setMarked(!0);
                const r = t.getEdge();
                e.add(r.getLine());
                const o = t.getToNode();
                1 === Tr.getDegreeNonDeleted(o) && n.push(o);
              }
            }
            return e;
          }
          getClass() {
            return Tr;
          }
          get interfaces_() {
            return [];
          }
        }
        Tr.constructor_ = function () {
          this._factory = null;
          const t = arguments[0];
          this._factory = t;
        };
        class Rr {
          constructor() {
            Rr.constructor_.apply(this, arguments);
          }
          static findOuterShells(t) {
            for (let e = t.iterator(); e.hasNext(); ) {
              const t = e.next(),
                n = t.getOuterHole();
              null === n ||
                n.isProcessed() ||
                (t.setIncluded(!0), n.setProcessed(!0));
            }
          }
          static extractPolygons(t, e) {
            const n = new x();
            for (let s = t.iterator(); s.hasNext(); ) {
              const t = s.next();
              (e || t.isIncluded()) && n.add(t.getPolygon());
            }
            return n;
          }
          static assignHolesToShells(t, e) {
            for (let n = t.iterator(); n.hasNext(); ) {
              const t = n.next();
              Rr.assignHoleToShell(t, e);
            }
          }
          static assignHoleToShell(t, e) {
            const n = wr.findEdgeRingContaining(t, e);
            null !== n && n.addHole(t);
          }
          static findDisjointShells(t) {
            Rr.findOuterShells(t);
            let e = null;
            do {
              e = !1;
              for (let n = t.iterator(); n.hasNext(); ) {
                const t = n.next();
                t.isIncludedSet() ||
                  (t.updateIncluded(), t.isIncludedSet() || (e = !0));
              }
            } while (e);
          }
          getGeometry() {
            return (
              null === this._geomFactory && (this._geomFactory = new Wt()),
              this.polygonize(),
              this._extractOnlyPolygonal
                ? this._geomFactory.buildGeometry(this._polyList)
                : this._geomFactory.createGeometryCollection(
                    Wt.toGeometryArray(this._polyList)
                  )
            );
          }
          getInvalidRingLines() {
            return this.polygonize(), this._invalidRingLines;
          }
          findValidRings(t, e, n) {
            for (let s = t.iterator(); s.hasNext(); ) {
              const t = s.next();
              t.isValid() ? e.add(t) : n.add(t.getLineString());
            }
          }
          polygonize() {
            if (null !== this._polyList) return null;
            if (((this._polyList = new x()), null === this._graph)) return null;
            (this._dangles = this._graph.deleteDangles()),
              (this._cutEdges = this._graph.deleteCutEdges());
            const t = this._graph.getEdgeRings();
            let e = new x();
            (this._invalidRingLines = new x()),
              this._isCheckingRingsValid
                ? this.findValidRings(t, e, this._invalidRingLines)
                : (e = t),
              this.findShellsAndHoles(e),
              Rr.assignHolesToShells(this._holeList, this._shellList),
              Ie.sort(this._shellList, new wr.EnvelopeComparator());
            let n = !0;
            this._extractOnlyPolygonal &&
              (Rr.findDisjointShells(this._shellList), (n = !1)),
              (this._polyList = Rr.extractPolygons(this._shellList, n));
          }
          getDangles() {
            return this.polygonize(), this._dangles;
          }
          getCutEdges() {
            return this.polygonize(), this._cutEdges;
          }
          getPolygons() {
            return this.polygonize(), this._polyList;
          }
          add() {
            if (_(arguments[0], p))
              for (let t = arguments[0].iterator(); t.hasNext(); ) {
                const e = t.next();
                this.add(e);
              }
            else if (arguments[0] instanceof Rt) {
              const t = arguments[0];
              (this._geomFactory = t.getFactory()),
                null === this._graph &&
                  (this._graph = new Tr(this._geomFactory)),
                this._graph.addEdge(t);
            } else
              arguments[0] instanceof q &&
                arguments[0].apply(this._lineStringAdder);
          }
          setCheckRingsValid(t) {
            this._isCheckingRingsValid = t;
          }
          findShellsAndHoles(t) {
            (this._holeList = new x()), (this._shellList = new x());
            for (let e = t.iterator(); e.hasNext(); ) {
              const t = e.next();
              t.computeHole(),
                t.isHole() ? this._holeList.add(t) : this._shellList.add(t);
            }
          }
          getClass() {
            return Rr;
          }
          get interfaces_() {
            return [];
          }
        }
        class Pr {
          constructor() {
            Pr.constructor_.apply(this, arguments);
          }
          filter(t) {
            t instanceof Rt && this.p.add(t);
          }
          getClass() {
            return Pr;
          }
          get interfaces_() {
            return [G];
          }
        }
        (Pr.constructor_ = function () {
          this.p = null;
          const t = arguments[0];
          this.p = t;
        }),
          (Rr.LineStringAdder = Pr),
          (Rr.constructor_ = function () {
            if (
              ((this._lineStringAdder = new Pr(this)),
              (this._graph = null),
              (this._dangles = new x()),
              (this._cutEdges = new x()),
              (this._invalidRingLines = new x()),
              (this._holeList = null),
              (this._shellList = null),
              (this._polyList = null),
              (this._isCheckingRingsValid = !0),
              (this._extractOnlyPolygonal = null),
              (this._geomFactory = null),
              0 === arguments.length)
            )
              Rr.constructor_.call(this, !1);
            else if (1 === arguments.length) {
              const t = arguments[0];
              this._extractOnlyPolygonal = t;
            }
          });
        var vr = Object.freeze({ __proto__: null, Polygonizer: Rr });
        class Or {
          constructor() {
            Or.constructor_.apply(this, arguments);
          }
          insertEdgeEnds(t) {
            for (let e = t.iterator(); e.hasNext(); ) {
              const t = e.next();
              this._nodes.add(t);
            }
          }
          computeProperIntersectionIM(t, e) {
            const n = this._arg[0].getGeometry().getDimension(),
              s = this._arg[1].getGeometry().getDimension(),
              i = t.hasProperIntersection(),
              r = t.hasProperInteriorIntersection();
            2 === n && 2 === s
              ? i && e.setAtLeast("212101212")
              : 2 === n && 1 === s
              ? (i && e.setAtLeast("FFF0FFFF2"), r && e.setAtLeast("1FFFFF1FF"))
              : 1 === n && 2 === s
              ? (i && e.setAtLeast("F0FFFFFF2"), r && e.setAtLeast("1F1FFFFFF"))
              : 1 === n && 1 === s && r && e.setAtLeast("0FFFFFFFF");
          }
          labelIsolatedEdges(t, e) {
            for (let n = this._arg[t].getEdgeIterator(); n.hasNext(); ) {
              const t = n.next();
              t.isIsolated() &&
                (this.labelIsolatedEdge(t, e, this._arg[e].getGeometry()),
                this._isolatedEdges.add(t));
            }
          }
          labelIsolatedEdge(t, e, n) {
            if (n.getDimension() > 0) {
              const s = this._ptLocator.locate(t.getCoordinate(), n);
              t.getLabel().setAllLocations(e, s);
            } else t.getLabel().setAllLocations(e, se.EXTERIOR);
          }
          computeIM() {
            const t = new ie();
            if (
              (t.set(se.EXTERIOR, se.EXTERIOR, 2),
              !this._arg[0]
                .getGeometry()
                .getEnvelopeInternal()
                .intersects(this._arg[1].getGeometry().getEnvelopeInternal()))
            )
              return this.computeDisjointIM(t), t;
            this._arg[0].computeSelfNodes(this._li, !1),
              this._arg[1].computeSelfNodes(this._li, !1);
            const e = this._arg[0].computeEdgeIntersections(
              this._arg[1],
              this._li,
              !1
            );
            this.computeIntersectionNodes(0),
              this.computeIntersectionNodes(1),
              this.copyNodesAndLabels(0),
              this.copyNodesAndLabels(1),
              this.labelIsolatedNodes(),
              this.computeProperIntersectionIM(e, t);
            const n = new pr(),
              s = n.computeEdgeEnds(this._arg[0].getEdgeIterator());
            this.insertEdgeEnds(s);
            const i = n.computeEdgeEnds(this._arg[1].getEdgeIterator());
            return (
              this.insertEdgeEnds(i),
              this.labelNodeEdges(),
              this.labelIsolatedEdges(0, 1),
              this.labelIsolatedEdges(1, 0),
              this.updateIM(t),
              t
            );
          }
          labelNodeEdges() {
            for (let t = this._nodes.iterator(); t.hasNext(); )
              t.next().getEdges().computeLabelling(this._arg);
          }
          copyNodesAndLabels(t) {
            for (let e = this._arg[t].getNodeIterator(); e.hasNext(); ) {
              const n = e.next();
              this._nodes
                .addNode(n.getCoordinate())
                .setLabel(t, n.getLabel().getLocation(t));
            }
          }
          labelIntersectionNodes(t) {
            for (let e = this._arg[t].getEdgeIterator(); e.hasNext(); ) {
              const n = e.next(),
                s = n.getLabel().getLocation(t);
              for (
                let e = n.getEdgeIntersectionList().iterator();
                e.hasNext();

              ) {
                const n = e.next(),
                  i = this._nodes.find(n.coord);
                i.getLabel().isNull(t) &&
                  (s === se.BOUNDARY
                    ? i.setLabelBoundary(t)
                    : i.setLabel(t, se.INTERIOR));
              }
            }
          }
          labelIsolatedNode(t, e) {
            const n = this._ptLocator.locate(
              t.getCoordinate(),
              this._arg[e].getGeometry()
            );
            t.getLabel().setAllLocations(e, n);
          }
          computeIntersectionNodes(t) {
            for (let e = this._arg[t].getEdgeIterator(); e.hasNext(); ) {
              const n = e.next(),
                s = n.getLabel().getLocation(t);
              for (
                let e = n.getEdgeIntersectionList().iterator();
                e.hasNext();

              ) {
                const n = e.next(),
                  i = this._nodes.addNode(n.coord);
                s === se.BOUNDARY
                  ? i.setLabelBoundary(t)
                  : i.getLabel().isNull(t) && i.setLabel(t, se.INTERIOR);
              }
            }
          }
          labelIsolatedNodes() {
            for (let t = this._nodes.iterator(); t.hasNext(); ) {
              const e = t.next(),
                n = e.getLabel();
              u.isTrue(n.getGeometryCount() > 0, "node with empty label found"),
                e.isIsolated() &&
                  (n.isNull(0)
                    ? this.labelIsolatedNode(e, 0)
                    : this.labelIsolatedNode(e, 1));
            }
          }
          updateIM(t) {
            for (let e = this._isolatedEdges.iterator(); e.hasNext(); )
              e.next().updateIM(t);
            for (let e = this._nodes.iterator(); e.hasNext(); ) {
              const n = e.next();
              n.updateIM(t), n.updateIMFromEdges(t);
            }
          }
          computeDisjointIM(t) {
            const e = this._arg[0].getGeometry();
            e.isEmpty() ||
              (t.set(se.INTERIOR, se.EXTERIOR, e.getDimension()),
              t.set(se.BOUNDARY, se.EXTERIOR, e.getBoundaryDimension()));
            const n = this._arg[1].getGeometry();
            n.isEmpty() ||
              (t.set(se.EXTERIOR, se.INTERIOR, n.getDimension()),
              t.set(se.EXTERIOR, se.BOUNDARY, n.getBoundaryDimension()));
          }
          getClass() {
            return Or;
          }
          get interfaces_() {
            return [];
          }
        }
        Or.constructor_ = function () {
          (this._li = new ee()),
            (this._ptLocator = new pn()),
            (this._arg = null),
            (this._nodes = new Hn(new xr())),
            (this._im = null),
            (this._isolatedEdges = new x()),
            (this._invalidPoint = null);
          const t = arguments[0];
          this._arg = t;
        };
        class br {
          constructor() {
            br.constructor_.apply(this, arguments);
          }
          static contains(t, e) {
            return new br(t).contains(e);
          }
          isContainedInBoundary(t) {
            if (t instanceof Mt) return !1;
            if (t instanceof vt) return this.isPointContainedInBoundary(t);
            if (t instanceof Rt) return this.isLineStringContainedInBoundary(t);
            for (let e = 0; e < t.getNumGeometries(); e++) {
              const n = t.getGeometryN(e);
              if (!this.isContainedInBoundary(n)) return !1;
            }
            return !0;
          }
          isLineSegmentContainedInBoundary(t, e) {
            if (t.equals(e)) return this.isPointContainedInBoundary(t);
            if (t.x === e.x) {
              if (
                t.x === this._rectEnv.getMinX() ||
                t.x === this._rectEnv.getMaxX()
              )
                return !0;
            } else if (
              t.y === e.y &&
              (t.y === this._rectEnv.getMinY() ||
                t.y === this._rectEnv.getMaxY())
            )
              return !0;
            return !1;
          }
          isLineStringContainedInBoundary(t) {
            const e = t.getCoordinateSequence(),
              n = new g(),
              s = new g();
            for (let i = 0; i < e.size() - 1; i++)
              if (
                (e.getCoordinate(i, n),
                e.getCoordinate(i + 1, s),
                !this.isLineSegmentContainedInBoundary(n, s))
              )
                return !1;
            return !0;
          }
          isPointContainedInBoundary() {
            if (arguments[0] instanceof vt) {
              const t = arguments[0];
              return this.isPointContainedInBoundary(t.getCoordinate());
            }
            if (arguments[0] instanceof g) {
              const t = arguments[0];
              return (
                t.x === this._rectEnv.getMinX() ||
                t.x === this._rectEnv.getMaxX() ||
                t.y === this._rectEnv.getMinY() ||
                t.y === this._rectEnv.getMaxY()
              );
            }
          }
          contains(t) {
            return (
              !!this._rectEnv.contains(t.getEnvelopeInternal()) &&
              !this.isContainedInBoundary(t)
            );
          }
          getClass() {
            return br;
          }
          get interfaces_() {
            return [];
          }
        }
        br.constructor_ = function () {
          this._rectEnv = null;
          const t = arguments[0];
          this._rectEnv = t.getEnvelopeInternal();
        };
        class Mr {
          constructor() {
            Mr.constructor_.apply(this, arguments);
          }
          intersects(t, e) {
            const n = new N(t, e);
            if (!this._rectEnv.intersects(n)) return !1;
            if (this._rectEnv.intersects(t)) return !0;
            if (this._rectEnv.intersects(e)) return !0;
            if (t.compareTo(e) > 0) {
              const n = t;
              (t = e), (e = n);
            }
            let s = !1;
            return (
              e.y > t.y && (s = !0),
              s
                ? this._li.computeIntersection(
                    t,
                    e,
                    this._diagDown0,
                    this._diagDown1
                  )
                : this._li.computeIntersection(
                    t,
                    e,
                    this._diagUp0,
                    this._diagUp1
                  ),
              !!this._li.hasIntersection()
            );
          }
          getClass() {
            return Mr;
          }
          get interfaces_() {
            return [];
          }
        }
        Mr.constructor_ = function () {
          (this._li = new ee()),
            (this._rectEnv = null),
            (this._diagUp0 = null),
            (this._diagUp1 = null),
            (this._diagDown0 = null),
            (this._diagDown1 = null);
          const t = arguments[0];
          (this._rectEnv = t),
            (this._diagUp0 = new g(t.getMinX(), t.getMinY())),
            (this._diagUp1 = new g(t.getMaxX(), t.getMaxY())),
            (this._diagDown0 = new g(t.getMinX(), t.getMaxY())),
            (this._diagDown1 = new g(t.getMaxX(), t.getMinY()));
        };
        class Dr {
          constructor() {
            Dr.constructor_.apply(this, arguments);
          }
          static intersects(t, e) {
            return new Dr(t).intersects(e);
          }
          intersects(t) {
            if (!this._rectEnv.intersects(t.getEnvelopeInternal())) return !1;
            const e = new Ar(this._rectEnv);
            if ((e.applyTo(t), e.intersects())) return !0;
            const n = new Fr(this._rectangle);
            if ((n.applyTo(t), n.containsPoint())) return !0;
            const s = new Gr(this._rectangle);
            return s.applyTo(t), !!s.intersects();
          }
          getClass() {
            return Dr;
          }
          get interfaces_() {
            return [];
          }
        }
        Dr.constructor_ = function () {
          (this._rectangle = null), (this._rectEnv = null);
          const t = arguments[0];
          (this._rectangle = t), (this._rectEnv = t.getEnvelopeInternal());
        };
        class Ar extends Se {
          constructor() {
            super(), Ar.constructor_.apply(this, arguments);
          }
          isDone() {
            return !0 === this._intersects;
          }
          visit(t) {
            const e = t.getEnvelopeInternal();
            return this._rectEnv.intersects(e)
              ? this._rectEnv.contains(e) ||
                (e.getMinX() >= this._rectEnv.getMinX() &&
                  e.getMaxX() <= this._rectEnv.getMaxX()) ||
                (e.getMinY() >= this._rectEnv.getMinY() &&
                  e.getMaxY() <= this._rectEnv.getMaxY())
                ? ((this._intersects = !0), null)
                : void 0
              : null;
          }
          intersects() {
            return this._intersects;
          }
          getClass() {
            return Ar;
          }
          get interfaces_() {
            return [];
          }
        }
        Ar.constructor_ = function () {
          (this._rectEnv = null), (this._intersects = !1);
          const t = arguments[0];
          this._rectEnv = t;
        };
        class Fr extends Se {
          constructor() {
            super(), Fr.constructor_.apply(this, arguments);
          }
          isDone() {
            return !0 === this._containsPoint;
          }
          visit(t) {
            if (!(t instanceof Mt)) return null;
            const e = t.getEnvelopeInternal();
            if (!this._rectEnv.intersects(e)) return null;
            const n = new g();
            for (let s = 0; s < 4; s++)
              if (
                (this._rectSeq.getCoordinate(s, n),
                e.contains(n) && Qe.containsPointInPolygon(n, t))
              )
                return (this._containsPoint = !0), null;
          }
          containsPoint() {
            return this._containsPoint;
          }
          getClass() {
            return Fr;
          }
          get interfaces_() {
            return [];
          }
        }
        Fr.constructor_ = function () {
          (this._rectSeq = null),
            (this._rectEnv = null),
            (this._containsPoint = !1);
          const t = arguments[0];
          (this._rectSeq = t.getExteriorRing().getCoordinateSequence()),
            (this._rectEnv = t.getEnvelopeInternal());
        };
        class Gr extends Se {
          constructor() {
            super(), Gr.constructor_.apply(this, arguments);
          }
          intersects() {
            return this._hasIntersection;
          }
          isDone() {
            return !0 === this._hasIntersection;
          }
          visit(t) {
            const e = t.getEnvelopeInternal();
            if (!this._rectEnv.intersects(e)) return null;
            const n = Ee.getLines(t);
            this.checkIntersectionWithLineStrings(n);
          }
          checkIntersectionWithLineStrings(t) {
            for (let e = t.iterator(); e.hasNext(); ) {
              const t = e.next();
              if (
                (this.checkIntersectionWithSegments(t), this._hasIntersection)
              )
                return null;
            }
          }
          checkIntersectionWithSegments(t) {
            const e = t.getCoordinateSequence();
            for (let n = 1; n < e.size(); n++)
              if (
                (e.getCoordinate(n - 1, this._p0),
                e.getCoordinate(n, this._p1),
                this._rectIntersector.intersects(this._p0, this._p1))
              )
                return (this._hasIntersection = !0), null;
          }
          getClass() {
            return Gr;
          }
          get interfaces_() {
            return [];
          }
        }
        Gr.constructor_ = function () {
          (this._rectEnv = null),
            (this._rectIntersector = null),
            (this._hasIntersection = !1),
            (this._p0 = new g()),
            (this._p1 = new g());
          const t = arguments[0];
          (this._rectEnv = t.getEnvelopeInternal()),
            (this._rectIntersector = new Mr(this._rectEnv));
        };
        class qr extends cr {
          constructor() {
            super(), qr.constructor_.apply(this, arguments);
          }
          static covers(t, e) {
            return (
              !(2 === e.getDimension() && t.getDimension() < 2) &&
              !(
                1 === e.getDimension() &&
                t.getDimension() < 1 &&
                e.getLength() > 0
              ) &&
              !!t.getEnvelopeInternal().covers(e.getEnvelopeInternal()) &&
              (!!t.isRectangle() ||
                new qr(t, e).getIntersectionMatrix().isCovers())
            );
          }
          static intersects(t, e) {
            if (!t.getEnvelopeInternal().intersects(e.getEnvelopeInternal()))
              return !1;
            if (t.isRectangle()) return Dr.intersects(t, e);
            if (e.isRectangle()) return Dr.intersects(e, t);
            if (t.isGeometryCollection() || e.isGeometryCollection()) {
              for (let n = 0; n < t.getNumGeometries(); n++)
                for (let s = 0; s < e.getNumGeometries(); s++)
                  if (t.getGeometryN(n).intersects(e.getGeometryN(s)))
                    return !0;
              return !1;
            }
            return new qr(t, e).getIntersectionMatrix().isIntersects();
          }
          static touches(t, e) {
            return (
              !!t.getEnvelopeInternal().intersects(e.getEnvelopeInternal()) &&
              new qr(t, e)
                .getIntersectionMatrix()
                .isTouches(t.getDimension(), e.getDimension())
            );
          }
          static equalsTopo(t, e) {
            return (
              !!t.getEnvelopeInternal().equals(e.getEnvelopeInternal()) &&
              qr.relate(t, e).isEquals(t.getDimension(), e.getDimension())
            );
          }
          static relate() {
            return 2 === arguments.length
              ? new qr(arguments[0], arguments[1]).getIntersectionMatrix()
              : 3 === arguments.length
              ? new qr(
                  arguments[0],
                  arguments[1],
                  arguments[2]
                ).getIntersectionMatrix()
              : void 0;
          }
          static overlaps(t, e) {
            return (
              !!t.getEnvelopeInternal().intersects(e.getEnvelopeInternal()) &&
              new qr(t, e)
                .getIntersectionMatrix()
                .isOverlaps(t.getDimension(), e.getDimension())
            );
          }
          static crosses(t, e) {
            return (
              !!t.getEnvelopeInternal().intersects(e.getEnvelopeInternal()) &&
              new qr(t, e)
                .getIntersectionMatrix()
                .isCrosses(t.getDimension(), e.getDimension())
            );
          }
          static contains(t, e) {
            return (
              !(2 === e.getDimension() && t.getDimension() < 2) &&
              !(
                1 === e.getDimension() &&
                t.getDimension() < 1 &&
                e.getLength() > 0
              ) &&
              !!t.getEnvelopeInternal().contains(e.getEnvelopeInternal()) &&
              (t.isRectangle()
                ? br.contains(t, e)
                : new qr(t, e).getIntersectionMatrix().isContains())
            );
          }
          getIntersectionMatrix() {
            return this._relate.computeIM();
          }
          getClass() {
            return qr;
          }
          get interfaces_() {
            return [];
          }
        }
        qr.constructor_ = function () {
          if (((this._relate = null), 2 === arguments.length)) {
            const t = arguments[0],
              e = arguments[1];
            cr.constructor_.call(this, t, e),
              (this._relate = new Or(this._arg));
          } else if (3 === arguments.length) {
            const t = arguments[0],
              e = arguments[1],
              n = arguments[2];
            cr.constructor_.call(this, t, e, n),
              (this._relate = new Or(this._arg));
          }
        };
        var Br = Object.freeze({ __proto__: null, RelateOp: qr });
        class Vr {
          constructor() {
            Vr.constructor_.apply(this, arguments);
          }
          static union(t, e) {
            return new Vr(t, e).union();
          }
          union() {
            const t = new pn(),
              e = new ct();
            for (let i = 0; i < this._pointGeom.getNumGeometries(); i++) {
              const n = this._pointGeom.getGeometryN(i).getCoordinate();
              t.locate(n, this._otherGeom) === se.EXTERIOR && e.add(n);
            }
            if (0 === e.size()) return this._otherGeom;
            let n = null;
            const s = X.toCoordinateArray(e);
            return (
              (n =
                1 === s.length
                  ? this._geomFact.createPoint(s[0])
                  : this._geomFact.createMultiPointFromCoords(s)),
              _e.combine(n, this._otherGeom)
            );
          }
          getClass() {
            return Vr;
          }
          get interfaces_() {
            return [];
          }
        }
        Vr.constructor_ = function () {
          (this._pointGeom = null),
            (this._otherGeom = null),
            (this._geomFact = null);
          const t = arguments[0],
            e = arguments[1];
          (this._pointGeom = t),
            (this._otherGeom = e),
            (this._geomFact = e.getFactory());
        };
        class zr {
          constructor() {
            zr.constructor_.apply(this, arguments);
          }
          static restrictToPolygons(t) {
            if (_(t, bt)) return t;
            const e = Ce.getPolygons(t);
            return 1 === e.size()
              ? e.get(0)
              : t.getFactory().createMultiPolygon(Wt.toPolygonArray(e));
          }
          static getGeometry(t, e) {
            return e >= t.size() ? null : t.get(e);
          }
          static union(t) {
            return new zr(t).union();
          }
          reduceToGeometries(t) {
            const e = new x();
            for (let n = t.iterator(); n.hasNext(); ) {
              const t = n.next();
              let s = null;
              _(t, m) ? (s = this.unionTree(t)) : t instanceof q && (s = t),
                e.add(s);
            }
            return e;
          }
          extractByEnvelope(t, e, n) {
            const s = new x();
            for (let i = 0; i < e.getNumGeometries(); i++) {
              const r = e.getGeometryN(i);
              r.getEnvelopeInternal().intersects(t) ? s.add(r) : n.add(r);
            }
            return this._geomFactory.buildGeometry(s);
          }
          unionOptimized(t, e) {
            const n = t.getEnvelopeInternal(),
              s = e.getEnvelopeInternal();
            if (!n.intersects(s)) return _e.combine(t, e);
            if (t.getNumGeometries() <= 1 && e.getNumGeometries() <= 1)
              return this.unionActual(t, e);
            const i = n.intersection(s);
            return this.unionUsingEnvelopeIntersection(t, e, i);
          }
          union() {
            if (null === this._inputPolys)
              throw new IllegalStateException(
                "union() method cannot be called twice"
              );
            if (this._inputPolys.isEmpty()) return null;
            this._geomFactory = this._inputPolys.iterator().next().getFactory();
            const t = new Is(zr.STRTREE_NODE_CAPACITY);
            for (let n = this._inputPolys.iterator(); n.hasNext(); ) {
              const e = n.next();
              t.insert(e.getEnvelopeInternal(), e);
            }
            this._inputPolys = null;
            const e = t.itemsTree();
            return this.unionTree(e);
          }
          binaryUnion() {
            if (1 === arguments.length) {
              const t = arguments[0];
              return this.binaryUnion(t, 0, t.size());
            }
            if (3 === arguments.length) {
              const t = arguments[0],
                e = arguments[1],
                n = arguments[2];
              if (n - e <= 1) {
                const n = zr.getGeometry(t, e);
                return this.unionSafe(n, null);
              }
              if (n - e == 2)
                return this.unionSafe(
                  zr.getGeometry(t, e),
                  zr.getGeometry(t, e + 1)
                );
              {
                const s = Math.trunc((n + e) / 2),
                  i = this.binaryUnion(t, e, s),
                  r = this.binaryUnion(t, s, n);
                return this.unionSafe(i, r);
              }
            }
          }
          repeatedUnion(t) {
            let e = null;
            for (let n = t.iterator(); n.hasNext(); ) {
              const t = n.next();
              e = null === e ? t.copy() : e.union(t);
            }
            return e;
          }
          unionSafe(t, e) {
            return null === t && null === e
              ? null
              : null === t
              ? e.copy()
              : null === e
              ? t.copy()
              : this.unionOptimized(t, e);
          }
          unionActual(t, e) {
            return zr.restrictToPolygons(t.union(e));
          }
          unionTree(t) {
            const e = this.reduceToGeometries(t);
            return this.binaryUnion(e);
          }
          unionUsingEnvelopeIntersection(t, e, n) {
            const s = new x(),
              i = this.extractByEnvelope(n, t, s),
              r = this.extractByEnvelope(n, e, s),
              o = this.unionActual(i, r);
            return s.add(o), _e.combine(s);
          }
          bufferUnion() {
            if (1 === arguments.length) {
              const t = arguments[0];
              return t.get(0).getFactory().buildGeometry(t).buffer(0);
            }
            if (2 === arguments.length) {
              const t = arguments[0],
                e = arguments[1];
              return t.getFactory().createGeometryCollection([t, e]).buffer(0);
            }
          }
          getClass() {
            return zr;
          }
          get interfaces_() {
            return [];
          }
        }
        (zr.constructor_ = function () {
          (this._inputPolys = null), (this._geomFactory = null);
          const t = arguments[0];
          (this._inputPolys = t),
            null === this._inputPolys && (this._inputPolys = new x());
        }),
          (zr.STRTREE_NODE_CAPACITY = 4);
        class Yr {
          constructor() {
            Yr.constructor_.apply(this, arguments);
          }
          static union() {
            if (1 === arguments.length) {
              if (_(arguments[0], p)) return new Yr(arguments[0]).union();
              if (arguments[0] instanceof q)
                return new Yr(arguments[0]).union();
            } else if (2 === arguments.length)
              return new Yr(arguments[0], arguments[1]).union();
          }
          unionNoOpt(t) {
            const e = this._geomFact.createPoint();
            return ar.overlayOp(t, e, hr.UNION);
          }
          unionWithNull(t, e) {
            return null === t && null === e
              ? null
              : null === e
              ? t
              : null === t
              ? e
              : t.union(e);
          }
          extract() {
            if (_(arguments[0], p))
              for (let t = arguments[0].iterator(); t.hasNext(); ) {
                const e = t.next();
                this.extract(e);
              }
            else if (arguments[0] instanceof q) {
              const t = arguments[0];
              null === this._geomFact && (this._geomFact = t.getFactory()),
                pe.extract(t, q.TYPENAME_POLYGON, this._polygons),
                pe.extract(t, q.TYPENAME_LINESTRING, this._lines),
                pe.extract(t, q.TYPENAME_POINT, this._points);
            }
          }
          union() {
            if (null === this._geomFact) return null;
            let t = null;
            if (this._points.size() > 0) {
              const e = this._geomFact.buildGeometry(this._points);
              t = this.unionNoOpt(e);
            }
            let e = null;
            if (this._lines.size() > 0) {
              const t = this._geomFact.buildGeometry(this._lines);
              e = this.unionNoOpt(t);
            }
            let n = null;
            this._polygons.size() > 0 && (n = zr.union(this._polygons));
            const s = this.unionWithNull(e, n);
            let i = null;
            return null ===
              (i = null === t ? s : null === s ? t : Vr.union(t, s))
              ? this._geomFact.createGeometryCollection()
              : i;
          }
          getClass() {
            return Yr;
          }
          get interfaces_() {
            return [];
          }
        }
        Yr.constructor_ = function () {
          if (
            ((this._polygons = new x()),
            (this._lines = new x()),
            (this._points = new x()),
            (this._geomFact = null),
            1 === arguments.length)
          ) {
            if (_(arguments[0], p)) {
              const t = arguments[0];
              this.extract(t);
            } else if (arguments[0] instanceof q) {
              const t = arguments[0];
              this.extract(t);
            }
          } else if (2 === arguments.length) {
            const t = arguments[0],
              e = arguments[1];
            (this._geomFact = e), this.extract(t);
          }
        };
        var Ur = Object.freeze({ __proto__: null, UnaryUnionOp: Yr }),
          kr = Object.freeze({
            __proto__: null,
            IsValidOp: Sr,
            ConsistentAreaTester: Ir,
          }),
          Xr = Object.freeze({
            __proto__: null,
            BoundaryOp: mt,
            IsSimpleOp: Ws,
            buffer: Li,
            distance: vi,
            linemerge: Hi,
            overlay: ur,
            polygonize: vr,
            relate: Br,
            union: Ur,
            valid: kr,
          });
        class Hr extends Gt.CoordinateOperation {
          constructor() {
            super(), Hr.constructor_.apply(this, arguments);
          }
          edit() {
            if (
              2 === arguments.length &&
              arguments[1] instanceof q &&
              arguments[0] instanceof Array
            ) {
              const t = arguments[0],
                e = arguments[1];
              if (0 === t.length) return null;
              const n = new Array(t.length).fill(null);
              for (let o = 0; o < t.length; o++) {
                const e = new g(t[o]);
                this._targetPM.makePrecise(e), (n[o] = e);
              }
              const s = new I(n, !1).toCoordinateArray();
              let i = 0;
              e instanceof Rt && (i = 2), e instanceof At && (i = 4);
              let r = n;
              return this._removeCollapsed && (r = null), s.length < i ? r : s;
            }
            return super.edit.apply(this, arguments);
          }
          getClass() {
            return Hr;
          }
          get interfaces_() {
            return [];
          }
        }
        Hr.constructor_ = function () {
          (this._targetPM = null), (this._removeCollapsed = !0);
          const t = arguments[0],
            e = arguments[1];
          (this._targetPM = t), (this._removeCollapsed = e);
        };
        class Wr {
          constructor() {
            Wr.constructor_.apply(this, arguments);
          }
          static reduce(t, e) {
            return new Wr(e).reduce(t);
          }
          static reducePointwise(t, e) {
            const n = new Wr(e);
            return n.setPointwise(!0), n.reduce(t);
          }
          fixPolygonalTopology(t) {
            let e = t;
            this._changePrecisionModel ||
              (e = this.changePM(t, this._targetPM));
            const n = wi.bufferOp(e, 0);
            let s = n;
            return (
              this._changePrecisionModel ||
                (s = t.getFactory().createGeometry(n)),
              s
            );
          }
          reducePointwise(t) {
            let e = null;
            if (this._changePrecisionModel) {
              const n = this.createFactory(t.getFactory(), this._targetPM);
              e = new Gt(n);
            } else e = new Gt();
            let n = this._removeCollapsed;
            return (
              t.getDimension() >= 2 && (n = !0),
              e.edit(t, new Hr(this._targetPM, n))
            );
          }
          changePM(t, e) {
            return this.createEditor(t.getFactory(), e).edit(
              t,
              new Gt.NoOpGeometryOperation()
            );
          }
          setRemoveCollapsedComponents(t) {
            this._removeCollapsed = t;
          }
          createFactory(t, e) {
            return new Wt(e, t.getSRID(), t.getCoordinateSequenceFactory());
          }
          setChangePrecisionModel(t) {
            this._changePrecisionModel = t;
          }
          reduce(t) {
            const e = this.reducePointwise(t);
            return this._isPointwise
              ? e
              : _(e, bt)
              ? Sr.isValid(e)
                ? e
                : this.fixPolygonalTopology(e)
              : e;
          }
          setPointwise(t) {
            this._isPointwise = t;
          }
          createEditor(t, e) {
            if (t.getPrecisionModel() === e) return new Gt();
            const n = this.createFactory(t, e);
            return new Gt(n);
          }
          getClass() {
            return Wr;
          }
          get interfaces_() {
            return [];
          }
        }
        Wr.constructor_ = function () {
          (this._targetPM = null),
            (this._removeCollapsed = !0),
            (this._changePrecisionModel = !1),
            (this._isPointwise = !1);
          const t = arguments[0];
          this._targetPM = t;
        };
        var jr = Object.freeze({
          __proto__: null,
          GeometryPrecisionReducer: Wr,
        });
        class Kr {
          constructor() {
            Kr.constructor_.apply(this, arguments);
          }
          static simplify(t, e) {
            const n = new Kr(t);
            return n.setDistanceTolerance(e), n.simplify();
          }
          simplifySection(t, e) {
            if (t + 1 === e) return null;
            (this._seg.p0 = this._pts[t]), (this._seg.p1 = this._pts[e]);
            let n = -1,
              s = t;
            for (let i = t + 1; i < e; i++) {
              const t = this._seg.distance(this._pts[i]);
              t > n && ((n = t), (s = i));
            }
            if (n <= this._distanceTolerance)
              for (let i = t + 1; i < e; i++) this._usePt[i] = !1;
            else this.simplifySection(t, s), this.simplifySection(s, e);
          }
          setDistanceTolerance(t) {
            this._distanceTolerance = t;
          }
          simplify() {
            this._usePt = new Array(this._pts.length).fill(null);
            for (let e = 0; e < this._pts.length; e++) this._usePt[e] = !0;
            this.simplifySection(0, this._pts.length - 1);
            const t = new I();
            for (let e = 0; e < this._pts.length; e++)
              this._usePt[e] && t.add(new g(this._pts[e]));
            return t.toCoordinateArray();
          }
          getClass() {
            return Kr;
          }
          get interfaces_() {
            return [];
          }
        }
        Kr.constructor_ = function () {
          (this._pts = null),
            (this._usePt = null),
            (this._distanceTolerance = null),
            (this._seg = new ne());
          const t = arguments[0];
          this._pts = t;
        };
        class Zr {
          constructor() {
            Zr.constructor_.apply(this, arguments);
          }
          static simplify(t, e) {
            const n = new Zr(t);
            return n.setDistanceTolerance(e), n.getResultGeometry();
          }
          setEnsureValid(t) {
            this._isEnsureValidTopology = t;
          }
          getResultGeometry() {
            return this._inputGeom.isEmpty()
              ? this._inputGeom.copy()
              : new Qr(
                  this._isEnsureValidTopology,
                  this._distanceTolerance
                ).transform(this._inputGeom);
          }
          setDistanceTolerance(t) {
            if (t < 0) throw new n("Tolerance must be non-negative");
            this._distanceTolerance = t;
          }
          getClass() {
            return Zr;
          }
          get interfaces_() {
            return [];
          }
        }
        class Qr extends ye {
          constructor() {
            super(), Qr.constructor_.apply(this, arguments);
          }
          transformPolygon(t, e) {
            if (t.isEmpty()) return null;
            const n = super.transformPolygon.call(this, t, e);
            return e instanceof Ft ? n : this.createValidArea(n);
          }
          createValidArea(t) {
            return this._isEnsureValidTopology ? t.buffer(0) : t;
          }
          transformCoordinates(t, e) {
            const n = t.toCoordinateArray();
            let s = null;
            return (
              (s =
                0 === n.length
                  ? new Array(0).fill(null)
                  : Kr.simplify(n, this._distanceTolerance)),
              this._factory.getCoordinateSequenceFactory().create(s)
            );
          }
          transformMultiPolygon(t, e) {
            const n = super.transformMultiPolygon.call(this, t, e);
            return this.createValidArea(n);
          }
          transformLinearRing(t, e) {
            const n = e instanceof Mt,
              s = super.transformLinearRing.call(this, t, e);
            return !n || s instanceof At ? s : null;
          }
          getClass() {
            return Qr;
          }
          get interfaces_() {
            return [];
          }
        }
        (Qr.constructor_ = function () {
          (this._isEnsureValidTopology = !0), (this._distanceTolerance = null);
          const t = arguments[0],
            e = arguments[1];
          (this._isEnsureValidTopology = t), (this._distanceTolerance = e);
        }),
          (Zr.DPTransformer = Qr),
          (Zr.constructor_ = function () {
            (this._inputGeom = null),
              (this._distanceTolerance = null),
              (this._isEnsureValidTopology = !0);
            const t = arguments[0];
            this._inputGeom = t;
          });
        class Jr extends ne {
          constructor() {
            super(), Jr.constructor_.apply(this, arguments);
          }
          getIndex() {
            return this._index;
          }
          getParent() {
            return this._parent;
          }
          getClass() {
            return Jr;
          }
          get interfaces_() {
            return [];
          }
        }
        Jr.constructor_ = function () {
          if (
            ((this._parent = null),
            (this._index = null),
            2 === arguments.length)
          ) {
            const t = arguments[0],
              e = arguments[1];
            Jr.constructor_.call(this, t, e, null, -1);
          } else if (4 === arguments.length) {
            const t = arguments[0],
              e = arguments[1],
              n = arguments[2],
              s = arguments[3];
            ne.constructor_.call(this, t, e),
              (this._parent = n),
              (this._index = s);
          }
        };
        class $r {
          constructor() {
            $r.constructor_.apply(this, arguments);
          }
          static extractCoordinates(t) {
            const e = new Array(t.size() + 1).fill(null);
            let n = null;
            for (let s = 0; s < t.size(); s++) (n = t.get(s)), (e[s] = n.p0);
            return (e[e.length - 1] = n.p1), e;
          }
          addToResult(t) {
            this._resultSegs.add(t);
          }
          asLineString() {
            return this._parentLine
              .getFactory()
              .createLineString($r.extractCoordinates(this._resultSegs));
          }
          getResultSize() {
            const t = this._resultSegs.size();
            return 0 === t ? 0 : t + 1;
          }
          getParent() {
            return this._parentLine;
          }
          getSegment(t) {
            return this._segs[t];
          }
          getParentCoordinates() {
            return this._parentLine.getCoordinates();
          }
          getMinimumSize() {
            return this._minimumSize;
          }
          asLinearRing() {
            return this._parentLine
              .getFactory()
              .createLinearRing($r.extractCoordinates(this._resultSegs));
          }
          getSegments() {
            return this._segs;
          }
          init() {
            const t = this._parentLine.getCoordinates();
            this._segs = new Array(t.length - 1).fill(null);
            for (let e = 0; e < t.length - 1; e++) {
              const n = new Jr(t[e], t[e + 1], this._parentLine, e);
              this._segs[e] = n;
            }
          }
          getResultCoordinates() {
            return $r.extractCoordinates(this._resultSegs);
          }
          getClass() {
            return $r;
          }
          get interfaces_() {
            return [];
          }
        }
        $r.constructor_ = function () {
          if (
            ((this._parentLine = null),
            (this._segs = null),
            (this._resultSegs = new x()),
            (this._minimumSize = null),
            1 === arguments.length)
          ) {
            const t = arguments[0];
            $r.constructor_.call(this, t, 2);
          } else if (2 === arguments.length) {
            const t = arguments[0],
              e = arguments[1];
            (this._parentLine = t), (this._minimumSize = e), this.init();
          }
        };
        class to {
          constructor() {
            to.constructor_.apply(this, arguments);
          }
          remove(t) {
            this._index.remove(new N(t.p0, t.p1), t);
          }
          add() {
            if (arguments[0] instanceof $r) {
              const t = arguments[0].getSegments();
              for (let e = 0; e < t.length; e++) {
                const n = t[e];
                this.add(n);
              }
            } else if (arguments[0] instanceof ne) {
              const t = arguments[0];
              this._index.insert(new N(t.p0, t.p1), t);
            }
          }
          query(t) {
            const e = new N(t.p0, t.p1),
              n = new eo(t);
            return this._index.query(e, n), n.getItems();
          }
          getClass() {
            return to;
          }
          get interfaces_() {
            return [];
          }
        }
        to.constructor_ = function () {
          this._index = new gs();
        };
        class eo {
          constructor() {
            eo.constructor_.apply(this, arguments);
          }
          visitItem(t) {
            const e = t;
            N.intersects(e.p0, e.p1, this._querySeg.p0, this._querySeg.p1) &&
              this._items.add(t);
          }
          getItems() {
            return this._items;
          }
          getClass() {
            return eo;
          }
          get interfaces_() {
            return [Fe];
          }
        }
        eo.constructor_ = function () {
          (this._querySeg = null), (this._items = new x());
          const t = arguments[0];
          this._querySeg = t;
        };
        class no {
          constructor() {
            no.constructor_.apply(this, arguments);
          }
          static isInLineSection(t, e, n) {
            if (n.getParent() !== t.getParent()) return !1;
            const s = n.getIndex();
            return s >= e[0] && s < e[1];
          }
          flatten(t, e) {
            const n = this._linePts[t],
              s = this._linePts[e],
              i = new ne(n, s);
            return this.remove(this._line, t, e), this._outputIndex.add(i), i;
          }
          hasBadIntersection(t, e, n) {
            return (
              !!this.hasBadOutputIntersection(n) ||
              !!this.hasBadInputIntersection(t, e, n)
            );
          }
          setDistanceTolerance(t) {
            this._distanceTolerance = t;
          }
          simplifySection(t, e, n) {
            n += 1;
            const s = new Array(2).fill(null);
            if (t + 1 === e) {
              const e = this._line.getSegment(t);
              return this._line.addToResult(e), null;
            }
            let i = !0;
            this._line.getResultSize() < this._line.getMinimumSize() &&
              n + 1 < this._line.getMinimumSize() &&
              (i = !1);
            const r = new Array(1).fill(null),
              o = this.findFurthestPoint(this._linePts, t, e, r);
            r[0] > this._distanceTolerance && (i = !1);
            const l = new ne();
            if (
              ((l.p0 = this._linePts[t]),
              (l.p1 = this._linePts[e]),
              (s[0] = t),
              (s[1] = e),
              this.hasBadIntersection(this._line, s, l) && (i = !1),
              i)
            ) {
              const n = this.flatten(t, e);
              return this._line.addToResult(n), null;
            }
            this.simplifySection(t, o, n), this.simplifySection(o, e, n);
          }
          hasBadOutputIntersection(t) {
            for (let e = this._outputIndex.query(t).iterator(); e.hasNext(); ) {
              const n = e.next();
              if (this.hasInteriorIntersection(n, t)) return !0;
            }
            return !1;
          }
          findFurthestPoint(t, e, n, s) {
            const i = new ne();
            (i.p0 = t[e]), (i.p1 = t[n]);
            let r = -1,
              o = e;
            for (let l = e + 1; l < n; l++) {
              const e = t[l],
                n = i.distance(e);
              n > r && ((r = n), (o = l));
            }
            return (s[0] = r), o;
          }
          simplify(t) {
            (this._line = t),
              (this._linePts = t.getParentCoordinates()),
              this.simplifySection(0, this._linePts.length - 1, 0);
          }
          remove(t, e, n) {
            for (let s = e; s < n; s++) {
              const e = t.getSegment(s);
              this._inputIndex.remove(e);
            }
          }
          hasInteriorIntersection(t, e) {
            return (
              this._li.computeIntersection(t.p0, t.p1, e.p0, e.p1),
              this._li.isInteriorIntersection()
            );
          }
          hasBadInputIntersection(t, e, n) {
            for (let s = this._inputIndex.query(n).iterator(); s.hasNext(); ) {
              const i = s.next();
              if (this.hasInteriorIntersection(i, n)) {
                if (no.isInLineSection(t, e, i)) continue;
                return !0;
              }
            }
            return !1;
          }
          getClass() {
            return no;
          }
          get interfaces_() {
            return [];
          }
        }
        no.constructor_ = function () {
          (this._li = new ee()),
            (this._inputIndex = new to()),
            (this._outputIndex = new to()),
            (this._line = null),
            (this._linePts = null),
            (this._distanceTolerance = 0);
          const t = arguments[0],
            e = arguments[1];
          (this._inputIndex = t), (this._outputIndex = e);
        };
        class so {
          constructor() {
            so.constructor_.apply(this, arguments);
          }
          setDistanceTolerance(t) {
            this._distanceTolerance = t;
          }
          simplify(t) {
            for (let e = t.iterator(); e.hasNext(); )
              this._inputIndex.add(e.next());
            for (let e = t.iterator(); e.hasNext(); ) {
              const t = new no(this._inputIndex, this._outputIndex);
              t.setDistanceTolerance(this._distanceTolerance),
                t.simplify(e.next());
            }
          }
          getClass() {
            return so;
          }
          get interfaces_() {
            return [];
          }
        }
        so.constructor_ = function () {
          (this._inputIndex = new to()),
            (this._outputIndex = new to()),
            (this._distanceTolerance = 0);
        };
        class io {
          constructor() {
            io.constructor_.apply(this, arguments);
          }
          static simplify(t, e) {
            const n = new io(t);
            return n.setDistanceTolerance(e), n.getResultGeometry();
          }
          getResultGeometry() {
            return this._inputGeom.isEmpty()
              ? this._inputGeom.copy()
              : ((this._linestringMap = new kt()),
                this._inputGeom.apply(new oo(this)),
                this._lineSimplifier.simplify(this._linestringMap.values()),
                new ro(this._linestringMap).transform(this._inputGeom));
          }
          setDistanceTolerance(t) {
            if (t < 0) throw new n("Tolerance must be non-negative");
            this._lineSimplifier.setDistanceTolerance(t);
          }
          getClass() {
            return io;
          }
          get interfaces_() {
            return [];
          }
        }
        class ro extends ye {
          constructor() {
            super(), ro.constructor_.apply(this, arguments);
          }
          transformCoordinates(t, e) {
            if (0 === t.size()) return null;
            if (e instanceof Rt) {
              const t = this._linestringMap.get(e);
              return this.createCoordinateSequence(t.getResultCoordinates());
            }
            return super.transformCoordinates.call(this, t, e);
          }
          getClass() {
            return ro;
          }
          get interfaces_() {
            return [];
          }
        }
        ro.constructor_ = function () {
          this._linestringMap = null;
          const t = arguments[0];
          this._linestringMap = t;
        };
        class oo {
          constructor() {
            oo.constructor_.apply(this, arguments);
          }
          filter(t) {
            if (t instanceof Rt) {
              const e = t;
              if (e.isEmpty()) return null;
              const n = e.isClosed() ? 4 : 2,
                s = new $r(e, n);
              this.tps._linestringMap.put(e, s);
            }
          }
          getClass() {
            return oo;
          }
          get interfaces_() {
            return [G];
          }
        }
        (oo.constructor_ = function () {
          this.tps = null;
          const t = arguments[0];
          this.tps = t;
        }),
          (io.LineStringTransformer = ro),
          (io.LineStringMapBuilderFilter = oo),
          (io.constructor_ = function () {
            (this._inputGeom = null),
              (this._lineSimplifier = new so()),
              (this._linestringMap = null);
            const t = arguments[0];
            this._inputGeom = t;
          });
        class lo {
          constructor() {
            lo.constructor_.apply(this, arguments);
          }
          static simplify(t, e) {
            return new lo(t, e).simplify();
          }
          simplifyVertex(t) {
            let e = t,
              n = e.getArea(),
              s = null;
            for (; null !== e; ) {
              const t = e.getArea();
              t < n && ((n = t), (s = e)), (e = e._next);
            }
            return (
              null !== s && n < this._tolerance && s.remove(),
              t.isLive() ? n : -1
            );
          }
          simplify() {
            const t = ao.buildLine(this._pts);
            let e = this._tolerance;
            do {
              e = this.simplifyVertex(t);
            } while (e < this._tolerance);
            const n = t.getCoordinates();
            return n.length < 2 ? [n[0], new g(n[0])] : n;
          }
          getClass() {
            return lo;
          }
          get interfaces_() {
            return [];
          }
        }
        class ao {
          constructor() {
            ao.constructor_.apply(this, arguments);
          }
          static buildLine(t) {
            let e = null,
              n = null;
            for (let s = 0; s < t.length; s++) {
              const i = new ao(t[s]);
              null === e && (e = i),
                i.setPrev(n),
                null !== n && (n.setNext(i), n.updateArea()),
                (n = i);
            }
            return e;
          }
          getCoordinates() {
            const t = new I();
            let e = this;
            do {
              t.add(e._pt, !1), (e = e._next);
            } while (null !== e);
            return t.toCoordinateArray();
          }
          getArea() {
            return this._area;
          }
          updateArea() {
            if (null === this._prev || null === this._next)
              return (this._area = ao.MAX_AREA), null;
            this._area = Math.abs(
              oe.area(this._prev._pt, this._pt, this._next._pt)
            );
          }
          remove() {
            const t = this._prev,
              e = this._next;
            let n = null;
            return (
              null !== this._prev &&
                (this._prev.setNext(e),
                this._prev.updateArea(),
                (n = this._prev)),
              null !== this._next &&
                (this._next.setPrev(t),
                this._next.updateArea(),
                null === n && (n = this._next)),
              (this._isLive = !1),
              n
            );
          }
          isLive() {
            return this._isLive;
          }
          setPrev(t) {
            this._prev = t;
          }
          setNext(t) {
            this._next = t;
          }
          getClass() {
            return ao;
          }
          get interfaces_() {
            return [];
          }
        }
        (ao.constructor_ = function () {
          (this._pt = null),
            (this._prev = null),
            (this._next = null),
            (this._area = ao.MAX_AREA),
            (this._isLive = !0);
          const t = arguments[0];
          this._pt = t;
        }),
          (ao.MAX_AREA = i.MAX_VALUE),
          (lo.VWVertex = ao),
          (lo.constructor_ = function () {
            (this._pts = null), (this._tolerance = null);
            const t = arguments[0],
              e = arguments[1];
            (this._pts = t), (this._tolerance = e * e);
          });
        class co {
          constructor() {
            co.constructor_.apply(this, arguments);
          }
          static simplify(t, e) {
            const n = new co(t);
            return n.setDistanceTolerance(e), n.getResultGeometry();
          }
          setEnsureValid(t) {
            this._isEnsureValidTopology = t;
          }
          getResultGeometry() {
            return this._inputGeom.isEmpty()
              ? this._inputGeom.copy()
              : new ho(
                  this._isEnsureValidTopology,
                  this._distanceTolerance
                ).transform(this._inputGeom);
          }
          setDistanceTolerance(t) {
            if (t < 0) throw new n("Tolerance must be non-negative");
            this._distanceTolerance = t;
          }
          getClass() {
            return co;
          }
          get interfaces_() {
            return [];
          }
        }
        class ho extends ye {
          constructor() {
            super(), ho.constructor_.apply(this, arguments);
          }
          transformPolygon(t, e) {
            if (t.isEmpty()) return null;
            const n = super.transformPolygon.call(this, t, e);
            return e instanceof Ft ? n : this.createValidArea(n);
          }
          createValidArea(t) {
            return this._isEnsureValidTopology ? t.buffer(0) : t;
          }
          transformCoordinates(t, e) {
            const n = t.toCoordinateArray();
            let s = null;
            return (
              (s =
                0 === n.length
                  ? new Array(0).fill(null)
                  : lo.simplify(n, this._distanceTolerance)),
              this._factory.getCoordinateSequenceFactory().create(s)
            );
          }
          transformMultiPolygon(t, e) {
            const n = super.transformMultiPolygon.call(this, t, e);
            return this.createValidArea(n);
          }
          transformLinearRing(t, e) {
            const n = e instanceof Mt,
              s = super.transformLinearRing.call(this, t, e);
            return !n || s instanceof At ? s : null;
          }
          getClass() {
            return ho;
          }
          get interfaces_() {
            return [];
          }
        }
        (ho.constructor_ = function () {
          (this._isEnsureValidTopology = !0), (this._distanceTolerance = null);
          const t = arguments[0],
            e = arguments[1];
          (this._isEnsureValidTopology = t), (this._distanceTolerance = e);
        }),
          (co.VWTransformer = ho),
          (co.constructor_ = function () {
            (this._inputGeom = null),
              (this._distanceTolerance = null),
              (this._isEnsureValidTopology = !0);
            const t = arguments[0];
            this._inputGeom = t;
          });
        var uo = Object.freeze({
          __proto__: null,
          DouglasPeuckerSimplifier: Zr,
          TopologyPreservingSimplifier: io,
          VWSimplifier: co,
        });
        class go {
          constructor() {
            go.constructor_.apply(this, arguments);
          }
          static pointAlongReverse(t, e) {
            const n = new g();
            return (
              (n.x = t.p1.x - e * (t.p1.x - t.p0.x)),
              (n.y = t.p1.y - e * (t.p1.y - t.p0.y)),
              n
            );
          }
          splitAt() {
            if (1 === arguments.length) {
              const t = arguments[0],
                e = this._minimumLen / this._segLen;
              if (t.distance(this._seg.p0) < this._minimumLen)
                return (this._splitPt = this._seg.pointAlong(e)), null;
              if (t.distance(this._seg.p1) < this._minimumLen)
                return (
                  (this._splitPt = go.pointAlongReverse(this._seg, e)), null
                );
              this._splitPt = t;
            } else if (2 === arguments.length) {
              const t = arguments[0],
                e = arguments[1],
                n = this.getConstrainedLength(t) / this._segLen;
              e.equals2D(this._seg.p0)
                ? (this._splitPt = this._seg.pointAlong(n))
                : (this._splitPt = go.pointAlongReverse(this._seg, n));
            }
          }
          setMinimumLength(t) {
            this._minimumLen = t;
          }
          getConstrainedLength(t) {
            return t < this._minimumLen ? this._minimumLen : t;
          }
          getSplitPoint() {
            return this._splitPt;
          }
          getClass() {
            return go;
          }
          get interfaces_() {
            return [];
          }
        }
        go.constructor_ = function () {
          (this._seg = null),
            (this._segLen = null),
            (this._splitPt = null),
            (this._minimumLen = 0);
          const t = arguments[0];
          (this._seg = t), (this._segLen = t.getLength());
        };
        class _o {
          constructor() {
            _o.constructor_.apply(this, arguments);
          }
          findSplitPoint(t, e) {}
          getClass() {
            return _o;
          }
          get interfaces_() {
            return [];
          }
        }
        _o.constructor_ = function () {};
        class po {
          constructor() {
            po.constructor_.apply(this, arguments);
          }
          static projectedSplitPoint(t, e) {
            return t.getLineSegment().project(e);
          }
          findSplitPoint(t, e) {
            const n = t.getLineSegment(),
              s = n.getLength() / 2,
              i = new go(n),
              r = po.projectedSplitPoint(t, e);
            let o = 2 * r.distance(e) * 0.8;
            return (
              o > s && (o = s),
              i.setMinimumLength(o),
              i.splitAt(r),
              i.getSplitPoint()
            );
          }
          getClass() {
            return po;
          }
          get interfaces_() {
            return [_o];
          }
        }
        po.constructor_ = function () {};
        class fo {
          constructor() {
            fo.constructor_.apply(this, arguments);
          }
          static triArea(t, e, n) {
            return (e.x - t.x) * (n.y - t.y) - (e.y - t.y) * (n.x - t.x);
          }
          static isInCircleDDNormalized(t, e, n, s) {
            const i = R.valueOf(t.x).selfSubtract(s.x),
              r = R.valueOf(t.y).selfSubtract(s.y),
              o = R.valueOf(e.x).selfSubtract(s.x),
              l = R.valueOf(e.y).selfSubtract(s.y),
              a = R.valueOf(n.x).selfSubtract(s.x),
              c = R.valueOf(n.y).selfSubtract(s.y),
              h = i.multiply(l).selfSubtract(o.multiply(r)),
              u = o.multiply(c).selfSubtract(a.multiply(l)),
              g = a.multiply(r).selfSubtract(i.multiply(c)),
              d = i.multiply(i).selfAdd(r.multiply(r)),
              _ = o.multiply(o).selfAdd(l.multiply(l)),
              p = a.multiply(a).selfAdd(c.multiply(c));
            return (
              d
                .selfMultiply(u)
                .selfAdd(_.selfMultiply(g))
                .selfAdd(p.selfMultiply(h))
                .doubleValue() > 0
            );
          }
          static checkRobustInCircle(t, e, n, s) {
            const i = fo.isInCircleNonRobust(t, e, n, s),
              r = fo.isInCircleDDSlow(t, e, n, s),
              o = fo.isInCircleCC(t, e, n, s),
              l = oe.circumcentre(t, e, n);
            O.out.println(
              "p radius diff a = " +
                Math.abs(s.distance(l) - t.distance(l)) / t.distance(l)
            ),
              (i === r && i === o) ||
                (O.out.println(
                  "inCircle robustness failure (double result = " +
                    i +
                    ", DD result = " +
                    r +
                    ", CC result = " +
                    o +
                    ")"
                ),
                O.out.println($t.toLineString(new Yt([t, e, n, s]))),
                O.out.println(
                  "Circumcentre = " +
                    $t.toPoint(l) +
                    " radius = " +
                    t.distance(l)
                ),
                O.out.println(
                  "p radius diff a = " +
                    Math.abs(s.distance(l) / t.distance(l) - 1)
                ),
                O.out.println(
                  "p radius diff b = " +
                    Math.abs(s.distance(l) / e.distance(l) - 1)
                ),
                O.out.println(
                  "p radius diff c = " +
                    Math.abs(s.distance(l) / n.distance(l) - 1)
                ),
                O.out.println());
          }
          static isInCircleDDFast(t, e, n, s) {
            const i = R.sqr(t.x)
                .selfAdd(R.sqr(t.y))
                .selfMultiply(fo.triAreaDDFast(e, n, s)),
              r = R.sqr(e.x)
                .selfAdd(R.sqr(e.y))
                .selfMultiply(fo.triAreaDDFast(t, n, s)),
              o = R.sqr(n.x)
                .selfAdd(R.sqr(n.y))
                .selfMultiply(fo.triAreaDDFast(t, e, s)),
              l = R.sqr(s.x)
                .selfAdd(R.sqr(s.y))
                .selfMultiply(fo.triAreaDDFast(t, e, n));
            return (
              i.selfSubtract(r).selfAdd(o).selfSubtract(l).doubleValue() > 0
            );
          }
          static isInCircleCC(t, e, n, s) {
            const i = oe.circumcentre(t, e, n),
              r = t.distance(i);
            return s.distance(i) - r <= 0;
          }
          static isInCircleNormalized(t, e, n, s) {
            const i = t.x - s.x,
              r = t.y - s.y,
              o = e.x - s.x,
              l = e.y - s.y,
              a = n.x - s.x,
              c = n.y - s.y;
            return (
              (i * i + r * r) * (o * c - a * l) +
                (o * o + l * l) * (a * r - i * c) +
                (a * a + c * c) * (i * l - o * r) >
              0
            );
          }
          static isInCircleDDSlow(t, e, n, s) {
            const i = R.valueOf(s.x),
              r = R.valueOf(s.y),
              o = R.valueOf(t.x),
              l = R.valueOf(t.y),
              a = R.valueOf(e.x),
              c = R.valueOf(e.y),
              h = R.valueOf(n.x),
              u = R.valueOf(n.y),
              g = o
                .multiply(o)
                .add(l.multiply(l))
                .multiply(fo.triAreaDDSlow(a, c, h, u, i, r)),
              d = a
                .multiply(a)
                .add(c.multiply(c))
                .multiply(fo.triAreaDDSlow(o, l, h, u, i, r)),
              _ = h
                .multiply(h)
                .add(u.multiply(u))
                .multiply(fo.triAreaDDSlow(o, l, a, c, i, r)),
              p = i
                .multiply(i)
                .add(r.multiply(r))
                .multiply(fo.triAreaDDSlow(o, l, a, c, h, u));
            return g.subtract(d).add(_).subtract(p).doubleValue() > 0;
          }
          static isInCircleNonRobust(t, e, n, s) {
            return (
              (t.x * t.x + t.y * t.y) * fo.triArea(e, n, s) -
                (e.x * e.x + e.y * e.y) * fo.triArea(t, n, s) +
                (n.x * n.x + n.y * n.y) * fo.triArea(t, e, s) -
                (s.x * s.x + s.y * s.y) * fo.triArea(t, e, n) >
              0
            );
          }
          static isInCircleRobust(t, e, n, s) {
            return fo.isInCircleNormalized(t, e, n, s);
          }
          static triAreaDDSlow(t, e, n, s, i, r) {
            return n
              .subtract(t)
              .multiply(r.subtract(e))
              .subtract(s.subtract(e).multiply(i.subtract(t)));
          }
          static triAreaDDFast(t, e, n) {
            const s = R.valueOf(e.x)
                .selfSubtract(t.x)
                .selfMultiply(R.valueOf(n.y).selfSubtract(t.y)),
              i = R.valueOf(e.y)
                .selfSubtract(t.y)
                .selfMultiply(R.valueOf(n.x).selfSubtract(t.x));
            return s.selfSubtract(i);
          }
          getClass() {
            return fo;
          }
          get interfaces_() {
            return [];
          }
        }
        fo.constructor_ = function () {};
        class mo {
          constructor() {
            mo.constructor_.apply(this, arguments);
          }
          static interpolateZ() {
            if (3 === arguments.length) {
              const t = arguments[0],
                e = arguments[1],
                n = arguments[2],
                s = e.distance(n),
                i = t.distance(e),
                r = n.z - e.z;
              return e.z + r * (i / s);
            }
            if (4 === arguments.length) {
              const t = arguments[0],
                e = arguments[1],
                n = arguments[2],
                s = arguments[3],
                i = e.x,
                r = e.y,
                o = n.x - i,
                l = s.x - i,
                a = n.y - r,
                c = s.y - r,
                h = o * c - l * a,
                u = t.x - i,
                g = t.y - r,
                d = (c * u - l * g) / h,
                _ = (-a * u + o * g) / h;
              return e.z + d * (n.z - e.z) + _ * (s.z - e.z);
            }
          }
          circleCenter(t, e) {
            const n = new mo(this.getX(), this.getY()),
              s = this.bisector(n, t),
              i = this.bisector(t, e),
              r = new b(s, i);
            let o = null;
            try {
              o = new mo(r.getX(), r.getY());
            } catch (s) {
              if (!(s instanceof S)) throw s;
              O.err.println("a: " + n + "  b: " + t + "  c: " + e),
                O.err.println(s);
            }
            return o;
          }
          dot(t) {
            return this._p.x * t.getX() + this._p.y * t.getY();
          }
          magn() {
            return Math.sqrt(this._p.x * this._p.x + this._p.y * this._p.y);
          }
          getZ() {
            return this._p.z;
          }
          bisector(t, e) {
            const n = e.getX() - t.getX(),
              s = e.getY() - t.getY(),
              i = new b(t.getX() + n / 2, t.getY() + s / 2, 1),
              r = new b(t.getX() - s + n / 2, t.getY() + n + s / 2, 1);
            return new b(i, r);
          }
          equals() {
            if (1 === arguments.length) {
              const t = arguments[0];
              return this._p.x === t.getX() && this._p.y === t.getY();
            }
            if (2 === arguments.length) {
              const t = arguments[0],
                e = arguments[1];
              return this._p.distance(t.getCoordinate()) < e;
            }
          }
          getCoordinate() {
            return this._p;
          }
          isInCircle(t, e, n) {
            return fo.isInCircleRobust(t._p, e._p, n._p, this._p);
          }
          interpolateZValue(t, e, n) {
            const s = t.getX(),
              i = t.getY(),
              r = e.getX() - s,
              o = n.getX() - s,
              l = e.getY() - i,
              a = n.getY() - i,
              c = r * a - o * l,
              h = this.getX() - s,
              u = this.getY() - i,
              g = (a * h - o * u) / c,
              d = (-l * h + r * u) / c;
            return (
              t.getZ() + g * (e.getZ() - t.getZ()) + d * (n.getZ() - t.getZ())
            );
          }
          midPoint(t) {
            const e = (this._p.x + t.getX()) / 2,
              n = (this._p.y + t.getY()) / 2,
              s = (this._p.z + t.getZ()) / 2;
            return new mo(e, n, s);
          }
          rightOf(t) {
            return this.isCCW(t.dest(), t.orig());
          }
          isCCW(t, e) {
            return (
              (t._p.x - this._p.x) * (e._p.y - this._p.y) -
                (t._p.y - this._p.y) * (e._p.x - this._p.x) >
              0
            );
          }
          getX() {
            return this._p.x;
          }
          crossProduct(t) {
            return this._p.x * t.getY() - this._p.y * t.getX();
          }
          setZ(t) {
            this._p.z = t;
          }
          times(t) {
            return new mo(t * this._p.x, t * this._p.y);
          }
          cross() {
            return new mo(this._p.y, -this._p.x);
          }
          leftOf(t) {
            return this.isCCW(t.orig(), t.dest());
          }
          toString() {
            return "POINT (" + this._p.x + " " + this._p.y + ")";
          }
          sub(t) {
            return new mo(this._p.x - t.getX(), this._p.y - t.getY());
          }
          getY() {
            return this._p.y;
          }
          classify(t, e) {
            const n = e.sub(t),
              s = this.sub(t),
              i = n.crossProduct(s);
            return i > 0
              ? mo.LEFT
              : i < 0
              ? mo.RIGHT
              : n.getX() * s.getX() < 0 || n.getY() * s.getY() < 0
              ? mo.BEHIND
              : n.magn() < s.magn()
              ? mo.BEYOND
              : t.equals(this)
              ? mo.ORIGIN
              : e.equals(this)
              ? mo.DESTINATION
              : mo.BETWEEN;
          }
          sum(t) {
            return new mo(this._p.x + t.getX(), this._p.y + t.getY());
          }
          distance(t, e) {
            return Math.sqrt(
              Math.pow(e.getX() - t.getX(), 2) +
                Math.pow(e.getY() - t.getY(), 2)
            );
          }
          circumRadiusRatio(t, e) {
            const n = this.circleCenter(t, e),
              s = this.distance(n, t);
            let i = this.distance(this, t),
              r = this.distance(t, e);
            return (
              r < i && (i = r),
              (r = this.distance(e, this)) < i && (i = r),
              s / i
            );
          }
          getClass() {
            return mo;
          }
          get interfaces_() {
            return [];
          }
        }
        (mo.constructor_ = function () {
          if (((this._p = null), 1 === arguments.length)) {
            const t = arguments[0];
            this._p = new g(t);
          } else if (2 === arguments.length) {
            const t = arguments[0],
              e = arguments[1];
            this._p = new g(t, e);
          } else if (3 === arguments.length) {
            const t = arguments[0],
              e = arguments[1],
              n = arguments[2];
            this._p = new g(t, e, n);
          }
        }),
          (mo.LEFT = 0),
          (mo.RIGHT = 1),
          (mo.BEYOND = 2),
          (mo.BEHIND = 3),
          (mo.BETWEEN = 4),
          (mo.ORIGIN = 5),
          (mo.DESTINATION = 6);
        class yo extends mo {
          constructor() {
            super(), yo.constructor_.apply(this, arguments);
          }
          getConstraint() {
            return this._constraint;
          }
          setOnConstraint(t) {
            this._isOnConstraint = t;
          }
          merge(t) {
            t._isOnConstraint &&
              ((this._isOnConstraint = !0), (this._constraint = t._constraint));
          }
          isOnConstraint() {
            return this._isOnConstraint;
          }
          setConstraint(t) {
            (this._isOnConstraint = !0), (this._constraint = t);
          }
          getClass() {
            return yo;
          }
          get interfaces_() {
            return [];
          }
        }
        yo.constructor_ = function () {
          (this._isOnConstraint = null), (this._constraint = null);
          const t = arguments[0];
          mo.constructor_.call(this, t);
        };
        class xo {
          constructor() {
            xo.constructor_.apply(this, arguments);
          }
          static makeEdge(t, e) {
            const n = new xo(),
              s = new xo(),
              i = new xo(),
              r = new xo();
            (n._rot = s),
              (s._rot = i),
              (i._rot = r),
              (r._rot = n),
              n.setNext(n),
              s.setNext(r),
              i.setNext(i),
              r.setNext(s);
            const o = n;
            return o.setOrig(t), o.setDest(e), o;
          }
          static swap(t) {
            const e = t.oPrev(),
              n = t.sym().oPrev();
            xo.splice(t, e),
              xo.splice(t.sym(), n),
              xo.splice(t, e.lNext()),
              xo.splice(t.sym(), n.lNext()),
              t.setOrig(e.dest()),
              t.setDest(n.dest());
          }
          static splice(t, e) {
            const n = t.oNext().rot(),
              s = e.oNext().rot(),
              i = e.oNext(),
              r = t.oNext(),
              o = s.oNext(),
              l = n.oNext();
            t.setNext(i), e.setNext(r), n.setNext(o), s.setNext(l);
          }
          static connect(t, e) {
            const n = xo.makeEdge(t.dest(), e.orig());
            return xo.splice(n, t.lNext()), xo.splice(n.sym(), e), n;
          }
          equalsNonOriented(t) {
            return !!this.equalsOriented(t) || !!this.equalsOriented(t.sym());
          }
          toLineSegment() {
            return new ne(
              this._vertex.getCoordinate(),
              this.dest().getCoordinate()
            );
          }
          dest() {
            return this.sym().orig();
          }
          oNext() {
            return this._next;
          }
          equalsOriented(t) {
            return !(
              !this.orig().getCoordinate().equals2D(t.orig().getCoordinate()) ||
              !this.dest().getCoordinate().equals2D(t.dest().getCoordinate())
            );
          }
          dNext() {
            return this.sym().oNext().sym();
          }
          lPrev() {
            return this._next.sym();
          }
          rPrev() {
            return this.sym().oNext();
          }
          rot() {
            return this._rot;
          }
          oPrev() {
            return this._rot._next._rot;
          }
          sym() {
            return this._rot._rot;
          }
          setOrig(t) {
            this._vertex = t;
          }
          lNext() {
            return this.invRot().oNext().rot();
          }
          getLength() {
            return this.orig()
              .getCoordinate()
              .distance(this.dest().getCoordinate());
          }
          invRot() {
            return this._rot.sym();
          }
          setDest(t) {
            this.sym().setOrig(t);
          }
          setData(t) {
            this._data = t;
          }
          getData() {
            return this._data;
          }
          delete() {
            this._rot = null;
          }
          orig() {
            return this._vertex;
          }
          rNext() {
            return this._rot._next.invRot();
          }
          toString() {
            const t = this._vertex.getCoordinate(),
              e = this.dest().getCoordinate();
            return $t.toLineString(t, e);
          }
          isLive() {
            return null !== this._rot;
          }
          getPrimary() {
            return this.orig()
              .getCoordinate()
              .compareTo(this.dest().getCoordinate()) <= 0
              ? this
              : this.sym();
          }
          dPrev() {
            return this.invRot().oNext().invRot();
          }
          setNext(t) {
            this._next = t;
          }
          getClass() {
            return xo;
          }
          get interfaces_() {
            return [];
          }
        }
        xo.constructor_ = function () {
          (this._rot = null),
            (this._vertex = null),
            (this._next = null),
            (this._data = null);
        };
        class Eo {
          constructor() {
            Eo.constructor_.apply(this, arguments);
          }
          insertSite(t) {
            let e = this._subdiv.locate(t);
            if (this._subdiv.isVertexOfEdge(e, t)) return e;
            this._subdiv.isOnEdge(e, t.getCoordinate()) &&
              ((e = e.oPrev()), this._subdiv.delete(e.oNext()));
            let n = this._subdiv.makeEdge(e.orig(), t);
            xo.splice(n, e);
            const s = n;
            do {
              e = (n = this._subdiv.connect(e, n.sym())).oPrev();
            } while (e.lNext() !== s);
            for (;;) {
              const i = e.oPrev();
              if (
                i.dest().rightOf(e) &&
                t.isInCircle(e.orig(), i.dest(), e.dest())
              )
                xo.swap(e), (e = e.oPrev());
              else {
                if (e.oNext() === s) return n;
                e = e.oNext().lPrev();
              }
            }
          }
          insertSites(t) {
            for (let e = t.iterator(); e.hasNext(); ) {
              const t = e.next();
              this.insertSite(t);
            }
          }
          getClass() {
            return Eo;
          }
          get interfaces_() {
            return [];
          }
        }
        Eo.constructor_ = function () {
          (this._subdiv = null), (this._isUsingTolerance = !1);
          const t = arguments[0];
          (this._subdiv = t), (this._isUsingTolerance = t.getTolerance() > 0);
        };
        class Io {
          constructor() {
            Io.constructor_.apply(this, arguments);
          }
          locate(t) {}
          getClass() {
            return Io;
          }
          get interfaces_() {
            return [];
          }
        }
        Io.constructor_ = function () {};
        class No {
          constructor() {
            No.constructor_.apply(this, arguments);
          }
          init() {
            this._lastEdge = this.findEdge();
          }
          locate(t) {
            this._lastEdge.isLive() || this.init();
            const e = this._subdiv.locateFromEdge(t, this._lastEdge);
            return (this._lastEdge = e), e;
          }
          findEdge() {
            return this._subdiv.getEdges().iterator().next();
          }
          getClass() {
            return No;
          }
          get interfaces_() {
            return [Io];
          }
        }
        No.constructor_ = function () {
          (this._subdiv = null), (this._lastEdge = null);
          const t = arguments[0];
          (this._subdiv = t), this.init();
        };
        class Co extends c {
          constructor() {
            super(), Co.constructor_.apply(this, arguments);
          }
          static msgWithSpatial(t, e) {
            return null !== e ? t + " [ " + e + " ]" : t;
          }
          getSegment() {
            return this._seg;
          }
          getClass() {
            return Co;
          }
          get interfaces_() {
            return [];
          }
        }
        Co.constructor_ = function () {
          if (((this._seg = null), 1 === arguments.length)) {
            if ("string" == typeof arguments[0]) {
              const t = arguments[0];
              c.constructor_.call(this, t);
            } else if (arguments[0] instanceof ne) {
              const t = arguments[0];
              c.constructor_.call(
                this,
                "Locate failed to converge (at edge: " +
                  t +
                  ").  Possible causes include invalid Subdivision topology or very close sites"
              ),
                (this._seg = new ne(t));
            }
          } else if (2 === arguments.length) {
            const t = arguments[0],
              e = arguments[1];
            c.constructor_.call(this, Co.msgWithSpatial(t, e)),
              (this._seg = new ne(e));
          }
        };
        class So {
          constructor() {
            So.constructor_.apply(this, arguments);
          }
          visit(t) {}
          getClass() {
            return So;
          }
          get interfaces_() {
            return [];
          }
        }
        So.constructor_ = function () {};
        class wo {
          constructor() {
            wo.constructor_.apply(this, arguments);
          }
          static getTriangleEdges(t, e) {
            if (
              ((e[0] = t),
              (e[1] = e[0].lNext()),
              (e[2] = e[1].lNext()),
              e[2].lNext() !== e[0])
            )
              throw new n("Edges do not form a triangle");
          }
          getTriangleVertices(t) {
            const e = new Ro();
            return this.visitTriangles(e, t), e.getTriangleVertices();
          }
          isFrameVertex(t) {
            return (
              !!t.equals(this._frameVertex[0]) ||
              !!t.equals(this._frameVertex[1]) ||
              !!t.equals(this._frameVertex[2])
            );
          }
          isVertexOfEdge(t, e) {
            return !(
              !e.equals(t.orig(), this._tolerance) &&
              !e.equals(t.dest(), this._tolerance)
            );
          }
          connect(t, e) {
            const n = xo.connect(t, e);
            return this._quadEdges.add(n), n;
          }
          getVoronoiCellPolygon(t, e) {
            const n = new x(),
              s = t;
            do {
              const e = t.rot().orig().getCoordinate();
              n.add(e), (t = t.oPrev());
            } while (t !== s);
            const i = new I();
            i.addAll(n, !1),
              i.closeRing(),
              i.size() < 4 &&
                (O.out.println(i), i.add(i.get(i.size() - 1), !0));
            const r = i.toCoordinateArray(),
              o = e.createPolygon(e.createLinearRing(r)),
              l = s.orig();
            return o.setUserData(l.getCoordinate()), o;
          }
          setLocator(t) {
            this._locator = t;
          }
          initSubdiv() {
            const t = this.makeEdge(this._frameVertex[0], this._frameVertex[1]),
              e = this.makeEdge(this._frameVertex[1], this._frameVertex[2]);
            xo.splice(t.sym(), e);
            const n = this.makeEdge(this._frameVertex[2], this._frameVertex[0]);
            return xo.splice(e.sym(), n), xo.splice(n.sym(), t), t;
          }
          isFrameBorderEdge(t) {
            const e = new Array(3).fill(null);
            wo.getTriangleEdges(t, e);
            const n = new Array(3).fill(null);
            wo.getTriangleEdges(t.sym(), n);
            const s = t.lNext().dest();
            if (this.isFrameVertex(s)) return !0;
            const i = t.sym().lNext().dest();
            return !!this.isFrameVertex(i);
          }
          makeEdge(t, e) {
            const n = xo.makeEdge(t, e);
            return this._quadEdges.add(n), n;
          }
          visitTriangles(t, e) {
            this._visitedKey++;
            const n = new ln();
            n.push(this._startingEdge);
            const s = new J();
            for (; !n.empty(); ) {
              const i = n.pop();
              if (!s.contains(i)) {
                const r = this.fetchTriangleToVisit(i, n, e, s);
                null !== r && t.visit(r);
              }
            }
          }
          isFrameEdge(t) {
            return !(
              !this.isFrameVertex(t.orig()) && !this.isFrameVertex(t.dest())
            );
          }
          isOnEdge(t, e) {
            return (
              this._seg.setCoordinates(
                t.orig().getCoordinate(),
                t.dest().getCoordinate()
              ),
              this._seg.distance(e) < this._edgeCoincidenceTolerance
            );
          }
          getEnvelope() {
            return new N(this._frameEnv);
          }
          createFrame(t) {
            const e = t.getWidth(),
              n = t.getHeight();
            let s = 0;
            (s = e > n ? 10 * e : 10 * n),
              (this._frameVertex[0] = new mo(
                (t.getMaxX() + t.getMinX()) / 2,
                t.getMaxY() + s
              )),
              (this._frameVertex[1] = new mo(t.getMinX() - s, t.getMinY() - s)),
              (this._frameVertex[2] = new mo(t.getMaxX() + s, t.getMinY() - s)),
              (this._frameEnv = new N(
                this._frameVertex[0].getCoordinate(),
                this._frameVertex[1].getCoordinate()
              )),
              this._frameEnv.expandToInclude(
                this._frameVertex[2].getCoordinate()
              );
          }
          getTriangleCoordinates(t) {
            const e = new Po();
            return this.visitTriangles(e, t), e.getTriangles();
          }
          getVertices(t) {
            const e = new J();
            for (let n = this._quadEdges.iterator(); n.hasNext(); ) {
              const s = n.next(),
                i = s.orig();
              (!t && this.isFrameVertex(i)) || e.add(i);
              const r = s.dest();
              (!t && this.isFrameVertex(r)) || e.add(r);
            }
            return e;
          }
          fetchTriangleToVisit(t, e, n, s) {
            let i = t,
              r = 0,
              o = !1;
            do {
              (this._triEdges[r] = i), this.isFrameEdge(i) && (o = !0);
              const t = i.sym();
              s.contains(t) || e.push(t), s.add(i), r++, (i = i.lNext());
            } while (i !== t);
            return o && !n ? null : this._triEdges;
          }
          getEdges() {
            if (0 === arguments.length) return this._quadEdges;
            if (1 === arguments.length) {
              const t = arguments[0],
                e = this.getPrimaryEdges(!1),
                n = new Array(e.size()).fill(null);
              let s = 0;
              for (let i = e.iterator(); i.hasNext(); ) {
                const e = i.next();
                n[s++] = t.createLineString([
                  e.orig().getCoordinate(),
                  e.dest().getCoordinate(),
                ]);
              }
              return t.createMultiLineString(n);
            }
          }
          getVertexUniqueEdges(t) {
            const e = new x(),
              n = new J();
            for (let s = this._quadEdges.iterator(); s.hasNext(); ) {
              const i = s.next(),
                r = i.orig();
              n.contains(r) ||
                (n.add(r), (!t && this.isFrameVertex(r)) || e.add(i));
              const o = i.sym(),
                l = o.orig();
              n.contains(l) ||
                (n.add(l), (!t && this.isFrameVertex(l)) || e.add(o));
            }
            return e;
          }
          getTriangleEdges(t) {
            const e = new To();
            return this.visitTriangles(e, t), e.getTriangleEdges();
          }
          getPrimaryEdges(t) {
            this._visitedKey++;
            const e = new x(),
              n = new ln();
            n.push(this._startingEdge);
            const s = new J();
            for (; !n.empty(); ) {
              const i = n.pop();
              if (!s.contains(i)) {
                const r = i.getPrimary();
                (!t && this.isFrameEdge(r)) || e.add(r),
                  n.push(i.oNext()),
                  n.push(i.sym().oNext()),
                  s.add(i),
                  s.add(i.sym());
              }
            }
            return e;
          }
          delete(t) {
            xo.splice(t, t.oPrev()), xo.splice(t.sym(), t.sym().oPrev());
            const e = t.sym(),
              n = t.rot(),
              s = t.rot().sym();
            this._quadEdges.remove(t),
              this._quadEdges.remove(e),
              this._quadEdges.remove(n),
              this._quadEdges.remove(s),
              t.delete(),
              e.delete(),
              n.delete(),
              s.delete();
          }
          locateFromEdge(t, e) {
            let n = 0;
            const s = this._quadEdges.size();
            let i = e;
            for (;;) {
              if (++n > s) throw new Co(i.toLineSegment());
              if (t.equals(i.orig()) || t.equals(i.dest())) break;
              if (t.rightOf(i)) i = i.sym();
              else if (t.rightOf(i.oNext())) {
                if (t.rightOf(i.dPrev())) break;
                i = i.dPrev();
              } else i = i.oNext();
            }
            return i;
          }
          getTolerance() {
            return this._tolerance;
          }
          getVoronoiCellPolygons(t) {
            this.visitTriangles(new Lo(), !0);
            const e = new x();
            for (
              let n = this.getVertexUniqueEdges(!1).iterator();
              n.hasNext();

            ) {
              const s = n.next();
              e.add(this.getVoronoiCellPolygon(s, t));
            }
            return e;
          }
          getVoronoiDiagram(t) {
            const e = this.getVoronoiCellPolygons(t);
            return t.createGeometryCollection(Wt.toGeometryArray(e));
          }
          getTriangles(t) {
            const e = this.getTriangleCoordinates(!1),
              n = new Array(e.size()).fill(null);
            let s = 0;
            for (let i = e.iterator(); i.hasNext(); ) {
              const e = i.next();
              n[s++] = t.createPolygon(t.createLinearRing(e));
            }
            return t.createGeometryCollection(n);
          }
          insertSite(t) {
            let e = this.locate(t);
            if (
              t.equals(e.orig(), this._tolerance) ||
              t.equals(e.dest(), this._tolerance)
            )
              return e;
            let n = this.makeEdge(e.orig(), t);
            xo.splice(n, e);
            const s = n;
            do {
              e = (n = this.connect(e, n.sym())).oPrev();
            } while (e.lNext() !== s);
            return s;
          }
          locate() {
            if (1 === arguments.length) {
              if (arguments[0] instanceof mo) {
                const t = arguments[0];
                return this._locator.locate(t);
              }
              if (arguments[0] instanceof g) {
                const t = arguments[0];
                return this._locator.locate(new mo(t));
              }
            } else if (2 === arguments.length) {
              const t = arguments[0],
                e = arguments[1],
                n = this._locator.locate(new mo(t));
              if (null === n) return null;
              let s = n;
              n.dest().getCoordinate().equals2D(t) && (s = n.sym());
              let i = s;
              do {
                if (i.dest().getCoordinate().equals2D(e)) return i;
                i = i.oNext();
              } while (i !== s);
              return null;
            }
          }
          getClass() {
            return wo;
          }
          get interfaces_() {
            return [];
          }
        }
        class Lo {
          constructor() {
            Lo.constructor_.apply(this, arguments);
          }
          visit(t) {
            const e = t[0].orig().getCoordinate(),
              n = t[1].orig().getCoordinate(),
              s = t[2].orig().getCoordinate(),
              i = oe.circumcentre(e, n, s),
              r = new mo(i);
            for (let o = 0; o < 3; o++) t[o].rot().setOrig(r);
          }
          getClass() {
            return Lo;
          }
          get interfaces_() {
            return [So];
          }
        }
        Lo.constructor_ = function () {};
        class To {
          constructor() {
            To.constructor_.apply(this, arguments);
          }
          getTriangleEdges() {
            return this._triList;
          }
          visit(t) {
            this._triList.add(t);
          }
          getClass() {
            return To;
          }
          get interfaces_() {
            return [So];
          }
        }
        To.constructor_ = function () {
          this._triList = new x();
        };
        class Ro {
          constructor() {
            Ro.constructor_.apply(this, arguments);
          }
          visit(t) {
            this._triList.add([t[0].orig(), t[1].orig(), t[2].orig()]);
          }
          getTriangleVertices() {
            return this._triList;
          }
          getClass() {
            return Ro;
          }
          get interfaces_() {
            return [So];
          }
        }
        Ro.constructor_ = function () {
          this._triList = new x();
        };
        class Po {
          constructor() {
            Po.constructor_.apply(this, arguments);
          }
          checkTriangleSize(t) {
            let e = "";
            t.length >= 2
              ? (e = $t.toLineString(t[0], t[1]))
              : t.length >= 1 && (e = $t.toPoint(t[0]));
          }
          visit(t) {
            this._coordList.clear();
            for (let e = 0; e < 3; e++) {
              const n = t[e].orig();
              this._coordList.add(n.getCoordinate());
            }
            if (this._coordList.size() > 0) {
              this._coordList.closeRing();
              const t = this._coordList.toCoordinateArray();
              if (4 !== t.length) return null;
              this._triCoords.add(t);
            }
          }
          getTriangles() {
            return this._triCoords;
          }
          getClass() {
            return Po;
          }
          get interfaces_() {
            return [So];
          }
        }
        (Po.constructor_ = function () {
          (this._coordList = new I()), (this._triCoords = new x());
        }),
          (wo.TriangleCircumcentreVisitor = Lo),
          (wo.TriangleEdgesListVisitor = To),
          (wo.TriangleVertexListVisitor = Ro),
          (wo.TriangleCoordinatesVisitor = Po),
          (wo.constructor_ = function () {
            (this._visitedKey = 0),
              (this._quadEdges = new x()),
              (this._startingEdge = null),
              (this._tolerance = null),
              (this._edgeCoincidenceTolerance = null),
              (this._frameVertex = new Array(3).fill(null)),
              (this._frameEnv = null),
              (this._locator = null),
              (this._seg = new ne()),
              (this._triEdges = new Array(3).fill(null));
            const t = arguments[0],
              e = arguments[1];
            (this._tolerance = e),
              (this._edgeCoincidenceTolerance =
                e / wo.EDGE_COINCIDENCE_TOL_FACTOR),
              this.createFrame(t),
              (this._startingEdge = this.initSubdiv()),
              (this._locator = new No(this));
          }),
          (wo.EDGE_COINCIDENCE_TOL_FACTOR = 1e3);
        class vo {
          constructor() {
            vo.constructor_.apply(this, arguments);
          }
          getLineSegment() {
            return this._ls;
          }
          getEndZ() {
            return this._ls.getCoordinate(1).z;
          }
          getStartZ() {
            return this._ls.getCoordinate(0).z;
          }
          intersection(t) {
            return this._ls.intersection(t.getLineSegment());
          }
          getStart() {
            return this._ls.getCoordinate(0);
          }
          getEnd() {
            return this._ls.getCoordinate(1);
          }
          getEndY() {
            return this._ls.getCoordinate(1).y;
          }
          getStartX() {
            return this._ls.getCoordinate(0).x;
          }
          equalsTopo(t) {
            return this._ls.equalsTopo(t.getLineSegment());
          }
          getStartY() {
            return this._ls.getCoordinate(0).y;
          }
          setData(t) {
            this._data = t;
          }
          getData() {
            return this._data;
          }
          getEndX() {
            return this._ls.getCoordinate(1).x;
          }
          toString() {
            return this._ls.toString();
          }
          getClass() {
            return vo;
          }
          get interfaces_() {
            return [];
          }
        }
        vo.constructor_ = function () {
          if (
            ((this._ls = null), (this._data = null), 2 === arguments.length)
          ) {
            const t = arguments[0],
              e = arguments[1];
            this._ls = new ne(t, e);
          } else if (3 === arguments.length) {
            const t = arguments[0],
              e = arguments[1],
              n = arguments[2];
            (this._ls = new ne(t, e)), (this._data = n);
          } else if (6 === arguments.length) {
            const t = arguments[0],
              e = arguments[1],
              n = arguments[2],
              s = arguments[3],
              i = arguments[4],
              r = arguments[5];
            vo.constructor_.call(this, new g(t, e, n), new g(s, i, r));
          } else if (7 === arguments.length) {
            const t = arguments[0],
              e = arguments[1],
              n = arguments[2],
              s = arguments[3],
              i = arguments[4],
              r = arguments[5],
              o = arguments[6];
            vo.constructor_.call(this, new g(t, e, n), new g(s, i, r), o);
          }
        };
        class Oo {
          constructor() {
            Oo.constructor_.apply(this, arguments);
          }
          static computeVertexEnvelope(t) {
            const e = new N();
            for (let n = t.iterator(); n.hasNext(); ) {
              const t = n.next();
              e.expandToInclude(t.getCoordinate());
            }
            return e;
          }
          getInitialVertices() {
            return this._initialVertices;
          }
          getKDT() {
            return this._kdt;
          }
          enforceConstraints() {
            this.addConstraintVertices();
            let t = 0,
              e = 0;
            do {
              (e = this.enforceGabriel(this._segments)), t++;
            } while (e > 0 && t < Oo.MAX_SPLIT_ITER);
          }
          insertSites(t) {
            for (let e = t.iterator(); e.hasNext(); ) {
              const t = e.next();
              this.insertSite(t);
            }
          }
          getVertexFactory() {
            return this._vertexFactory;
          }
          getPointArray() {
            const t = new Array(
              this._initialVertices.size() + this._segVertices.size()
            ).fill(null);
            let e = 0;
            for (let n = this._initialVertices.iterator(); n.hasNext(); ) {
              const s = n.next();
              t[e++] = s.getCoordinate();
            }
            for (let n = this._segVertices.iterator(); n.hasNext(); ) {
              const s = n.next();
              t[e++] = s.getCoordinate();
            }
            return t;
          }
          setConstraints(t, e) {
            (this._segments = t), (this._segVertices = e);
          }
          computeConvexHull() {
            const t = new Wt(),
              e = this.getPointArray(),
              n = new cn(e, t);
            this._convexHull = n.getConvexHull();
          }
          addConstraintVertices() {
            this.computeConvexHull(), this.insertSites(this._segVertices);
          }
          findNonGabrielPoint(t) {
            const e = t.getStart(),
              n = t.getEnd(),
              s = new g((e.x + n.x) / 2, (e.y + n.y) / 2),
              r = e.distance(s),
              o = new N(s);
            o.expandBy(r);
            const l = this._kdt.query(o);
            let a = null,
              c = i.MAX_VALUE;
            for (let i = l.iterator(); i.hasNext(); ) {
              const t = i.next().getCoordinate();
              if (t.equals2D(e) || t.equals2D(n)) continue;
              const o = s.distance(t);
              if (o < r) {
                const e = o;
                (null === a || e < c) && ((a = t), (c = e));
              }
            }
            return a;
          }
          getConstraintSegments() {
            return this._segments;
          }
          setSplitPointFinder(t) {
            this._splitFinder = t;
          }
          getConvexHull() {
            return this._convexHull;
          }
          getTolerance() {
            return this._tolerance;
          }
          enforceGabriel(t) {
            const e = new x();
            let n = 0;
            const s = new x();
            for (let i = t.iterator(); i.hasNext(); ) {
              const t = i.next(),
                r = this.findNonGabrielPoint(t);
              if (null === r) continue;
              this._splitPt = this._splitFinder.findSplitPoint(t, r);
              const o = this.createVertex(this._splitPt, t);
              this.insertSite(o).getCoordinate().equals2D(this._splitPt);
              const l = new vo(
                  t.getStartX(),
                  t.getStartY(),
                  t.getStartZ(),
                  o.getX(),
                  o.getY(),
                  o.getZ(),
                  t.getData()
                ),
                a = new vo(
                  o.getX(),
                  o.getY(),
                  o.getZ(),
                  t.getEndX(),
                  t.getEndY(),
                  t.getEndZ(),
                  t.getData()
                );
              e.add(l), e.add(a), s.add(t), (n += 1);
            }
            return t.removeAll(s), t.addAll(e), n;
          }
          createVertex() {
            if (1 === arguments.length) {
              const t = arguments[0];
              let e = null;
              return (e =
                null !== this._vertexFactory
                  ? this._vertexFactory.createVertex(t, null)
                  : new yo(t));
            }
            if (2 === arguments.length) {
              const t = arguments[0],
                e = arguments[1];
              let n = null;
              return (
                (n =
                  null !== this._vertexFactory
                    ? this._vertexFactory.createVertex(t, e)
                    : new yo(t)).setOnConstraint(!0),
                n
              );
            }
          }
          getSubdivision() {
            return this._subdiv;
          }
          computeBoundingBox() {
            const t = Oo.computeVertexEnvelope(this._initialVertices),
              e = Oo.computeVertexEnvelope(this._segVertices),
              n = new N(t);
            n.expandToInclude(e);
            const s = 0.2 * n.getWidth(),
              i = 0.2 * n.getHeight(),
              r = Math.max(s, i);
            (this._computeAreaEnv = new N(n)), this._computeAreaEnv.expandBy(r);
          }
          setVertexFactory(t) {
            this._vertexFactory = t;
          }
          formInitialDelaunay() {
            this.computeBoundingBox(),
              (this._subdiv = new wo(this._computeAreaEnv, this._tolerance)),
              this._subdiv.setLocator(new No(this._subdiv)),
              (this._incDel = new Eo(this._subdiv)),
              this.insertSites(this._initialVertices);
          }
          insertSite() {
            if (arguments[0] instanceof yo) {
              const t = arguments[0],
                e = this._kdt.insert(t.getCoordinate(), t);
              if (e.isRepeated()) {
                const n = e.getData();
                return n.merge(t), n;
              }
              return this._incDel.insertSite(t), t;
            }
            if (arguments[0] instanceof g) {
              const t = arguments[0];
              this.insertSite(this.createVertex(t));
            }
          }
          getClass() {
            return Oo;
          }
          get interfaces_() {
            return [];
          }
        }
        (Oo.constructor_ = function () {
          (this._initialVertices = null),
            (this._segVertices = null),
            (this._segments = new x()),
            (this._subdiv = null),
            (this._incDel = null),
            (this._convexHull = null),
            (this._splitFinder = new po()),
            (this._kdt = null),
            (this._vertexFactory = null),
            (this._computeAreaEnv = null),
            (this._splitPt = null),
            (this._tolerance = null);
          const t = arguments[0],
            e = arguments[1];
          (this._initialVertices = new x(t)),
            (this._tolerance = e),
            (this._kdt = new ns(e));
        }),
          (Oo.MAX_SPLIT_ITER = 99);
        class bo {
          constructor() {
            bo.constructor_.apply(this, arguments);
          }
          static extractUniqueCoordinates(t) {
            if (null === t) return new I();
            const e = t.getCoordinates();
            return bo.unique(e);
          }
          static envelope(t) {
            const e = new N();
            for (let n = t.iterator(); n.hasNext(); ) {
              const t = n.next();
              e.expandToInclude(t);
            }
            return e;
          }
          static unique(t) {
            const e = X.copyDeep(t);
            return ut.sort(e), new I(e, !1);
          }
          static toVertices(t) {
            const e = new x();
            for (let n = t.iterator(); n.hasNext(); ) {
              const t = n.next();
              e.add(new mo(t));
            }
            return e;
          }
          create() {
            if (null !== this._subdiv) return null;
            const t = bo.envelope(this._siteCoords),
              e = bo.toVertices(this._siteCoords);
            (this._subdiv = new wo(t, this._tolerance)),
              new Eo(this._subdiv).insertSites(e);
          }
          setTolerance(t) {
            this._tolerance = t;
          }
          setSites() {
            if (arguments[0] instanceof q) {
              const t = arguments[0];
              this._siteCoords = bo.extractUniqueCoordinates(t);
            } else if (_(arguments[0], p)) {
              const t = arguments[0];
              this._siteCoords = bo.unique(X.toCoordinateArray(t));
            }
          }
          getEdges(t) {
            return this.create(), this._subdiv.getEdges(t);
          }
          getSubdivision() {
            return this.create(), this._subdiv;
          }
          getTriangles(t) {
            return this.create(), this._subdiv.getTriangles(t);
          }
          getClass() {
            return bo;
          }
          get interfaces_() {
            return [];
          }
        }
        bo.constructor_ = function () {
          (this._siteCoords = null),
            (this._tolerance = 0),
            (this._subdiv = null);
        };
        class Mo {
          constructor() {
            Mo.constructor_.apply(this, arguments);
          }
          static createConstraintSegments() {
            if (1 === arguments.length) {
              const t = arguments[0],
                e = Ee.getLines(t),
                n = new x();
              for (let s = e.iterator(); s.hasNext(); ) {
                const t = s.next();
                Mo.createConstraintSegments(t, n);
              }
              return n;
            }
            if (2 === arguments.length) {
              const t = arguments[1],
                e = arguments[0].getCoordinates();
              for (let n = 1; n < e.length; n++) t.add(new vo(e[n - 1], e[n]));
            }
          }
          createSiteVertices(t) {
            const e = new x();
            for (let n = t.iterator(); n.hasNext(); ) {
              const t = n.next();
              this._constraintVertexMap.containsKey(t) || e.add(new yo(t));
            }
            return e;
          }
          create() {
            if (null !== this._subdiv) return null;
            const t = bo.envelope(this._siteCoords);
            let e = new x();
            null !== this._constraintLines &&
              (t.expandToInclude(this._constraintLines.getEnvelopeInternal()),
              this.createVertices(this._constraintLines),
              (e = Mo.createConstraintSegments(this._constraintLines)));
            const n = this.createSiteVertices(this._siteCoords),
              s = new Oo(n, this._tolerance);
            s.setConstraints(e, new x(this._constraintVertexMap.values())),
              s.formInitialDelaunay(),
              s.enforceConstraints(),
              (this._subdiv = s.getSubdivision());
          }
          setTolerance(t) {
            this._tolerance = t;
          }
          setConstraints(t) {
            this._constraintLines = t;
          }
          setSites(t) {
            this._siteCoords = bo.extractUniqueCoordinates(t);
          }
          getEdges(t) {
            return this.create(), this._subdiv.getEdges(t);
          }
          getSubdivision() {
            return this.create(), this._subdiv;
          }
          getTriangles(t) {
            return this.create(), this._subdiv.getTriangles(t);
          }
          createVertices(t) {
            const e = t.getCoordinates();
            for (let n = 0; n < e.length; n++) {
              const t = new yo(e[n]);
              this._constraintVertexMap.put(e[n], t);
            }
          }
          getClass() {
            return Mo;
          }
          get interfaces_() {
            return [];
          }
        }
        Mo.constructor_ = function () {
          (this._siteCoords = null),
            (this._constraintLines = null),
            (this._tolerance = 0),
            (this._subdiv = null),
            (this._constraintVertexMap = new ot());
        };
        class Do {
          constructor() {
            Do.constructor_.apply(this, arguments);
          }
          static clipGeometryCollection(t, e) {
            const n = t.getFactory().toGeometry(e),
              s = new x();
            for (let i = 0; i < t.getNumGeometries(); i++) {
              const r = t.getGeometryN(i);
              let o = null;
              e.contains(r.getEnvelopeInternal())
                ? (o = r)
                : e.intersects(r.getEnvelopeInternal()) &&
                  (o = n.intersection(r)).setUserData(r.getUserData()),
                null === o || o.isEmpty() || s.add(o);
            }
            return t
              .getFactory()
              .createGeometryCollection(Wt.toGeometryArray(s));
          }
          create() {
            if (null !== this._subdiv) return null;
            const t = bo.envelope(this._siteCoords);
            this._diagramEnv = t;
            const e = Math.max(
              this._diagramEnv.getWidth(),
              this._diagramEnv.getHeight()
            );
            this._diagramEnv.expandBy(e),
              null !== this._clipEnv &&
                this._diagramEnv.expandToInclude(this._clipEnv);
            const n = bo.toVertices(this._siteCoords);
            (this._subdiv = new wo(t, this._tolerance)),
              new Eo(this._subdiv).insertSites(n);
          }
          getDiagram(t) {
            this.create();
            const e = this._subdiv.getVoronoiDiagram(t);
            return Do.clipGeometryCollection(e, this._diagramEnv);
          }
          setTolerance(t) {
            this._tolerance = t;
          }
          setSites() {
            if (arguments[0] instanceof q) {
              const t = arguments[0];
              this._siteCoords = bo.extractUniqueCoordinates(t);
            } else if (_(arguments[0], p)) {
              const t = arguments[0];
              this._siteCoords = bo.unique(X.toCoordinateArray(t));
            }
          }
          setClipEnvelope(t) {
            this._clipEnv = t;
          }
          getSubdivision() {
            return this.create(), this._subdiv;
          }
          getClass() {
            return Do;
          }
          get interfaces_() {
            return [];
          }
        }
        Do.constructor_ = function () {
          (this._siteCoords = null),
            (this._tolerance = 0),
            (this._subdiv = null),
            (this._clipEnv = null),
            (this._diagramEnv = null);
        };
        var Ao = Object.freeze({ __proto__: null, Vertex: mo }),
          Fo = Object.freeze({
            __proto__: null,
            ConformingDelaunayTriangulationBuilder: Mo,
            DelaunayTriangulationBuilder: bo,
            VoronoiDiagramBuilder: Do,
            quadedge: Ao,
          });
        class Go {
          constructor() {
            Go.constructor_.apply(this, arguments);
          }
          static getEndLocation(t) {
            const e = new Go();
            return e.setToEnd(t), e;
          }
          static pointAlongSegmentByFraction(t, e, n) {
            if (n <= 0) return t;
            if (n >= 1) return e;
            const s = (e.x - t.x) * n + t.x,
              i = (e.y - t.y) * n + t.y,
              r = (e.z - t.z) * n + t.z;
            return new g(s, i, r);
          }
          static compareLocationValues(t, e, n, s, i, r) {
            return t < s
              ? -1
              : t > s
              ? 1
              : e < i
              ? -1
              : e > i
              ? 1
              : n < r
              ? -1
              : n > r
              ? 1
              : 0;
          }
          getSegmentIndex() {
            return this._segmentIndex;
          }
          getComponentIndex() {
            return this._componentIndex;
          }
          isEndpoint(t) {
            const e = t.getGeometryN(this._componentIndex).getNumPoints() - 1;
            return (
              this._segmentIndex >= e ||
              (this._segmentIndex === e && this._segmentFraction >= 1)
            );
          }
          isValid(t) {
            if (
              this._componentIndex < 0 ||
              this._componentIndex >= t.getNumGeometries()
            )
              return !1;
            const e = t.getGeometryN(this._componentIndex);
            return (
              !(
                this._segmentIndex < 0 || this._segmentIndex > e.getNumPoints()
              ) &&
              (this._segmentIndex !== e.getNumPoints() ||
                0 === this._segmentFraction) &&
              !(this._segmentFraction < 0 || this._segmentFraction > 1)
            );
          }
          normalize() {
            this._segmentFraction < 0 && (this._segmentFraction = 0),
              this._segmentFraction > 1 && (this._segmentFraction = 1),
              this._componentIndex < 0 &&
                ((this._componentIndex = 0),
                (this._segmentIndex = 0),
                (this._segmentFraction = 0)),
              this._segmentIndex < 0 &&
                ((this._segmentIndex = 0), (this._segmentFraction = 0)),
              1 === this._segmentFraction &&
                ((this._segmentFraction = 0), (this._segmentIndex += 1));
          }
          toLowest(t) {
            const e = t.getGeometryN(this._componentIndex).getNumPoints() - 1;
            return this._segmentIndex < e
              ? this
              : new Go(this._componentIndex, e, 1, !1);
          }
          getCoordinate(t) {
            const e = t.getGeometryN(this._componentIndex),
              n = e.getCoordinateN(this._segmentIndex);
            if (this._segmentIndex >= e.getNumPoints() - 1) return n;
            const s = e.getCoordinateN(this._segmentIndex + 1);
            return Go.pointAlongSegmentByFraction(n, s, this._segmentFraction);
          }
          getSegmentFraction() {
            return this._segmentFraction;
          }
          getSegment(t) {
            const e = t.getGeometryN(this._componentIndex),
              n = e.getCoordinateN(this._segmentIndex);
            if (this._segmentIndex >= e.getNumPoints() - 1) {
              const t = e.getCoordinateN(e.getNumPoints() - 2);
              return new ne(t, n);
            }
            const s = e.getCoordinateN(this._segmentIndex + 1);
            return new ne(n, s);
          }
          clamp(t) {
            if (this._componentIndex >= t.getNumGeometries())
              return this.setToEnd(t), null;
            if (this._segmentIndex >= t.getNumPoints()) {
              const e = t.getGeometryN(this._componentIndex);
              (this._segmentIndex = e.getNumPoints() - 1),
                (this._segmentFraction = 1);
            }
          }
          setToEnd(t) {
            this._componentIndex = t.getNumGeometries() - 1;
            const e = t.getGeometryN(this._componentIndex);
            (this._segmentIndex = e.getNumPoints() - 1),
              (this._segmentFraction = 1);
          }
          compareTo(t) {
            const e = t;
            return this._componentIndex < e._componentIndex
              ? -1
              : this._componentIndex > e._componentIndex
              ? 1
              : this._segmentIndex < e._segmentIndex
              ? -1
              : this._segmentIndex > e._segmentIndex
              ? 1
              : this._segmentFraction < e._segmentFraction
              ? -1
              : this._segmentFraction > e._segmentFraction
              ? 1
              : 0;
          }
          copy() {
            return new Go(
              this._componentIndex,
              this._segmentIndex,
              this._segmentFraction
            );
          }
          toString() {
            return (
              "LinearLoc[" +
              this._componentIndex +
              ", " +
              this._segmentIndex +
              ", " +
              this._segmentFraction +
              "]"
            );
          }
          isOnSameSegment(t) {
            return (
              this._componentIndex === t._componentIndex &&
              (this._segmentIndex === t._segmentIndex ||
                (t._segmentIndex - this._segmentIndex == 1 &&
                  0 === t._segmentFraction) ||
                (this._segmentIndex - t._segmentIndex == 1 &&
                  0 === this._segmentFraction))
            );
          }
          snapToVertex(t, e) {
            if (this._segmentFraction <= 0 || this._segmentFraction >= 1)
              return null;
            const n = this.getSegmentLength(t),
              s = this._segmentFraction * n,
              i = n - s;
            s <= i && s < e
              ? (this._segmentFraction = 0)
              : i <= s && i < e && (this._segmentFraction = 1);
          }
          compareLocationValues(t, e, n) {
            return this._componentIndex < t
              ? -1
              : this._componentIndex > t
              ? 1
              : this._segmentIndex < e
              ? -1
              : this._segmentIndex > e
              ? 1
              : this._segmentFraction < n
              ? -1
              : this._segmentFraction > n
              ? 1
              : 0;
          }
          getSegmentLength(t) {
            const e = t.getGeometryN(this._componentIndex);
            let n = this._segmentIndex;
            this._segmentIndex >= e.getNumPoints() - 1 &&
              (n = e.getNumPoints() - 2);
            const s = e.getCoordinateN(n),
              i = e.getCoordinateN(n + 1);
            return s.distance(i);
          }
          isVertex() {
            return this._segmentFraction <= 0 || this._segmentFraction >= 1;
          }
          getClass() {
            return Go;
          }
          get interfaces_() {
            return [r];
          }
        }
        Go.constructor_ = function () {
          if (
            ((this._componentIndex = 0),
            (this._segmentIndex = 0),
            (this._segmentFraction = 0),
            0 === arguments.length)
          );
          else if (1 === arguments.length) {
            const t = arguments[0];
            (this._componentIndex = t._componentIndex),
              (this._segmentIndex = t._segmentIndex),
              (this._segmentFraction = t._segmentFraction);
          } else if (2 === arguments.length) {
            const t = arguments[0],
              e = arguments[1];
            Go.constructor_.call(this, 0, t, e);
          } else if (3 === arguments.length) {
            const t = arguments[0],
              e = arguments[1],
              n = arguments[2];
            (this._componentIndex = t),
              (this._segmentIndex = e),
              (this._segmentFraction = n),
              this.normalize();
          } else if (4 === arguments.length) {
            const t = arguments[0],
              e = arguments[1],
              n = arguments[2],
              s = arguments[3];
            (this._componentIndex = t),
              (this._segmentIndex = e),
              (this._segmentFraction = n),
              s && this.normalize();
          }
        };
        class qo {
          constructor() {
            qo.constructor_.apply(this, arguments);
          }
          static segmentEndVertexIndex(t) {
            return t.getSegmentFraction() > 0
              ? t.getSegmentIndex() + 1
              : t.getSegmentIndex();
          }
          getComponentIndex() {
            return this._componentIndex;
          }
          getLine() {
            return this._currentLine;
          }
          getVertexIndex() {
            return this._vertexIndex;
          }
          getSegmentEnd() {
            return this._vertexIndex < this.getLine().getNumPoints() - 1
              ? this._currentLine.getCoordinateN(this._vertexIndex + 1)
              : null;
          }
          next() {
            if (!this.hasNext()) return null;
            this._vertexIndex++,
              this._vertexIndex >= this._currentLine.getNumPoints() &&
                (this._componentIndex++,
                this.loadCurrentLine(),
                (this._vertexIndex = 0));
          }
          loadCurrentLine() {
            if (this._componentIndex >= this._numLines)
              return (this._currentLine = null), null;
            this._currentLine = this._linearGeom.getGeometryN(
              this._componentIndex
            );
          }
          getSegmentStart() {
            return this._currentLine.getCoordinateN(this._vertexIndex);
          }
          isEndOfLine() {
            return (
              !(this._componentIndex >= this._numLines) &&
              !(this._vertexIndex < this._currentLine.getNumPoints() - 1)
            );
          }
          hasNext() {
            return (
              !(this._componentIndex >= this._numLines) &&
              !(
                this._componentIndex === this._numLines - 1 &&
                this._vertexIndex >= this._currentLine.getNumPoints()
              )
            );
          }
          getClass() {
            return qo;
          }
          get interfaces_() {
            return [];
          }
        }
        qo.constructor_ = function () {
          if (
            ((this._linearGeom = null),
            (this._numLines = null),
            (this._currentLine = null),
            (this._componentIndex = 0),
            (this._vertexIndex = 0),
            1 === arguments.length)
          ) {
            const t = arguments[0];
            qo.constructor_.call(this, t, 0, 0);
          } else if (2 === arguments.length) {
            const t = arguments[0],
              e = arguments[1];
            qo.constructor_.call(
              this,
              t,
              e.getComponentIndex(),
              qo.segmentEndVertexIndex(e)
            );
          } else if (3 === arguments.length) {
            const t = arguments[0],
              e = arguments[1],
              s = arguments[2];
            if (!_(t, lt)) throw new n("Lineal geometry is required");
            (this._linearGeom = t),
              (this._numLines = t.getNumGeometries()),
              (this._componentIndex = e),
              (this._vertexIndex = s),
              this.loadCurrentLine();
          }
        };
        class Bo {
          constructor() {
            Bo.constructor_.apply(this, arguments);
          }
          static indexOf(t, e) {
            return new Bo(t).indexOf(e);
          }
          static indexOfAfter(t, e, n) {
            return new Bo(t).indexOfAfter(e, n);
          }
          indexOf(t) {
            return this.indexOfFromStart(t, null);
          }
          indexOfFromStart(t, e) {
            let n = i.MAX_VALUE,
              s = 0,
              r = 0,
              o = -1;
            const l = new ne();
            for (let i = new qo(this._linearGeom); i.hasNext(); i.next())
              if (!i.isEndOfLine()) {
                (l.p0 = i.getSegmentStart()), (l.p1 = i.getSegmentEnd());
                const a = l.distance(t),
                  c = l.segmentFraction(t),
                  h = i.getComponentIndex(),
                  u = i.getVertexIndex();
                a < n &&
                  (null === e || e.compareLocationValues(h, u, c) < 0) &&
                  ((s = h), (r = u), (o = c), (n = a));
              }
            return n === i.MAX_VALUE ? new Go(e) : new Go(s, r, o);
          }
          indexOfAfter(t, e) {
            if (null === e) return this.indexOf(t);
            const n = Go.getEndLocation(this._linearGeom);
            if (n.compareTo(e) <= 0) return n;
            const s = this.indexOfFromStart(t, e);
            return (
              u.isTrue(
                s.compareTo(e) >= 0,
                "computed location is before specified minimum location"
              ),
              s
            );
          }
          getClass() {
            return Bo;
          }
          get interfaces_() {
            return [];
          }
        }
        Bo.constructor_ = function () {
          this._linearGeom = null;
          const t = arguments[0];
          this._linearGeom = t;
        };
        class Vo {
          constructor() {
            Vo.constructor_.apply(this, arguments);
          }
          static indicesOf(t, e) {
            return new Vo(t).indicesOf(e);
          }
          indicesOf(t) {
            const e = t.getGeometryN(0).getCoordinateN(0),
              n = t.getGeometryN(t.getNumGeometries() - 1),
              s = n.getCoordinateN(n.getNumPoints() - 1),
              i = new Bo(this._linearGeom),
              r = new Array(2).fill(null);
            return (
              (r[0] = i.indexOf(e)),
              0 === t.getLength()
                ? (r[1] = r[0].copy())
                : (r[1] = i.indexOfAfter(s, r[0])),
              r
            );
          }
          getClass() {
            return Vo;
          }
          get interfaces_() {
            return [];
          }
        }
        Vo.constructor_ = function () {
          this._linearGeom = null;
          const t = arguments[0];
          this._linearGeom = t;
        };
        class zo {
          constructor() {
            zo.constructor_.apply(this, arguments);
          }
          getGeometry() {
            return this.endLine(), this._geomFact.buildGeometry(this._lines);
          }
          getLastCoordinate() {
            return this._lastPt;
          }
          endLine() {
            if (null === this._coordList) return null;
            if (this._ignoreInvalidLines && this._coordList.size() < 2)
              return (this._coordList = null), null;
            const t = this._coordList.toCoordinateArray();
            let e = t;
            this._fixInvalidLines && (e = this.validCoordinateSequence(t)),
              (this._coordList = null);
            let s = null;
            try {
              s = this._geomFact.createLineString(e);
            } catch (t) {
              if (!(t instanceof n)) throw t;
              if (!this._ignoreInvalidLines) throw t;
            }
            null !== s && this._lines.add(s);
          }
          setFixInvalidLines(t) {
            this._fixInvalidLines = t;
          }
          add() {
            if (1 === arguments.length) {
              const t = arguments[0];
              this.add(t, !0);
            } else if (2 === arguments.length) {
              const t = arguments[0],
                e = arguments[1];
              null === this._coordList && (this._coordList = new I()),
                this._coordList.add(t, e),
                (this._lastPt = t);
            }
          }
          setIgnoreInvalidLines(t) {
            this._ignoreInvalidLines = t;
          }
          validCoordinateSequence(t) {
            return t.length >= 2 ? t : [t[0], t[0]];
          }
          getClass() {
            return zo;
          }
          get interfaces_() {
            return [];
          }
        }
        zo.constructor_ = function () {
          (this._geomFact = null),
            (this._lines = new x()),
            (this._coordList = null),
            (this._ignoreInvalidLines = !1),
            (this._fixInvalidLines = !1),
            (this._lastPt = null);
          const t = arguments[0];
          this._geomFact = t;
        };
        class Yo {
          constructor() {
            Yo.constructor_.apply(this, arguments);
          }
          static extract(t, e, n) {
            return new Yo(t).extract(e, n);
          }
          computeLinear(t, e) {
            const n = new zo(this._line.getFactory());
            n.setFixInvalidLines(!0),
              t.isVertex() || n.add(t.getCoordinate(this._line));
            for (
              let s = new qo(this._line, t);
              s.hasNext() &&
              !(
                e.compareLocationValues(
                  s.getComponentIndex(),
                  s.getVertexIndex(),
                  0
                ) < 0
              );
              s.next()
            ) {
              const t = s.getSegmentStart();
              n.add(t), s.isEndOfLine() && n.endLine();
            }
            return (
              e.isVertex() || n.add(e.getCoordinate(this._line)),
              n.getGeometry()
            );
          }
          computeLine(t, e) {
            const n = this._line.getCoordinates(),
              s = new I();
            let i = t.getSegmentIndex();
            t.getSegmentFraction() > 0 && (i += 1);
            let r = e.getSegmentIndex();
            1 === e.getSegmentFraction() && (r += 1),
              r >= n.length && (r = n.length - 1),
              t.isVertex() || s.add(t.getCoordinate(this._line));
            for (let l = i; l <= r; l++) s.add(n[l]);
            e.isVertex() || s.add(e.getCoordinate(this._line)),
              s.size() <= 0 && s.add(t.getCoordinate(this._line));
            let o = s.toCoordinateArray();
            return (
              o.length <= 1 && (o = [o[0], o[0]]),
              this._line.getFactory().createLineString(o)
            );
          }
          extract(t, e) {
            return e.compareTo(t) < 0
              ? this.reverse(this.computeLinear(e, t))
              : this.computeLinear(t, e);
          }
          reverse(t) {
            return t instanceof Rt || t instanceof ft
              ? t.reverse()
              : (u.shouldNeverReachHere("non-linear geometry encountered"),
                null);
          }
          getClass() {
            return Yo;
          }
          get interfaces_() {
            return [];
          }
        }
        Yo.constructor_ = function () {
          this._line = null;
          const t = arguments[0];
          this._line = t;
        };
        class Uo {
          constructor() {
            Uo.constructor_.apply(this, arguments);
          }
          clampIndex(t) {
            const e = t.copy();
            return e.clamp(this._linearGeom), e;
          }
          project(t) {
            return Bo.indexOf(this._linearGeom, t);
          }
          checkGeometryType() {
            if (
              !(
                this._linearGeom instanceof Rt || this._linearGeom instanceof ft
              )
            )
              throw new n("Input geometry must be linear");
          }
          extractPoint() {
            if (1 === arguments.length)
              return arguments[0].getCoordinate(this._linearGeom);
            if (2 === arguments.length) {
              const t = arguments[1],
                e = arguments[0].toLowest(this._linearGeom);
              return e
                .getSegment(this._linearGeom)
                .pointAlongOffset(e.getSegmentFraction(), t);
            }
          }
          isValidIndex(t) {
            return t.isValid(this._linearGeom);
          }
          getEndIndex() {
            return Go.getEndLocation(this._linearGeom);
          }
          getStartIndex() {
            return new Go();
          }
          indexOfAfter(t, e) {
            return Bo.indexOfAfter(this._linearGeom, t, e);
          }
          extractLine(t, e) {
            return Yo.extract(this._linearGeom, t, e);
          }
          indexOf(t) {
            return Bo.indexOf(this._linearGeom, t);
          }
          indicesOf(t) {
            return Vo.indicesOf(this._linearGeom, t);
          }
          getClass() {
            return Uo;
          }
          get interfaces_() {
            return [];
          }
        }
        Uo.constructor_ = function () {
          this._linearGeom = null;
          const t = arguments[0];
          (this._linearGeom = t), this.checkGeometryType();
        };
        class ko {
          constructor() {
            ko.constructor_.apply(this, arguments);
          }
          static indexOf(t, e) {
            return new ko(t).indexOf(e);
          }
          static indexOfAfter(t, e, n) {
            return new ko(t).indexOfAfter(e, n);
          }
          indexOf(t) {
            return this.indexOfFromStart(t, -1);
          }
          indexOfFromStart(t, e) {
            let n = i.MAX_VALUE,
              s = e,
              r = 0;
            const o = new ne(),
              l = new qo(this._linearGeom);
            for (; l.hasNext(); ) {
              if (!l.isEndOfLine()) {
                (o.p0 = l.getSegmentStart()), (o.p1 = l.getSegmentEnd());
                const i = o.distance(t),
                  a = this.segmentNearestMeasure(o, t, r);
                i < n && a > e && ((s = a), (n = i)), (r += o.getLength());
              }
              l.next();
            }
            return s;
          }
          indexOfAfter(t, e) {
            if (e < 0) return this.indexOf(t);
            const n = this._linearGeom.getLength();
            if (n < e) return n;
            const s = this.indexOfFromStart(t, e);
            return (
              u.isTrue(
                s >= e,
                "computed index is before specified minimum index"
              ),
              s
            );
          }
          segmentNearestMeasure(t, e, n) {
            const s = t.projectionFactor(e);
            return s <= 0
              ? n
              : s <= 1
              ? n + s * t.getLength()
              : n + t.getLength();
          }
          getClass() {
            return ko;
          }
          get interfaces_() {
            return [];
          }
        }
        ko.constructor_ = function () {
          this._linearGeom = null;
          const t = arguments[0];
          this._linearGeom = t;
        };
        class Xo {
          constructor() {
            Xo.constructor_.apply(this, arguments);
          }
          static getLength(t, e) {
            return new Xo(t).getLength(e);
          }
          static getLocation() {
            if (2 === arguments.length) {
              const t = arguments[1];
              return new Xo(arguments[0]).getLocation(t);
            }
            if (3 === arguments.length) {
              const t = arguments[1],
                e = arguments[2];
              return new Xo(arguments[0]).getLocation(t, e);
            }
          }
          getLength(t) {
            let e = 0;
            const n = new qo(this._linearGeom);
            for (; n.hasNext(); ) {
              if (!n.isEndOfLine()) {
                const s = n.getSegmentStart(),
                  i = n.getSegmentEnd().distance(s);
                if (
                  t.getComponentIndex() === n.getComponentIndex() &&
                  t.getSegmentIndex() === n.getVertexIndex()
                )
                  return e + i * t.getSegmentFraction();
                e += i;
              }
              n.next();
            }
            return e;
          }
          resolveHigher(t) {
            if (!t.isEndpoint(this._linearGeom)) return t;
            let e = t.getComponentIndex();
            if (e >= this._linearGeom.getNumGeometries() - 1) return t;
            do {
              e++;
            } while (
              e < this._linearGeom.getNumGeometries() - 1 &&
              0 === this._linearGeom.getGeometryN(e).getLength()
            );
            return new Go(e, 0, 0);
          }
          getLocation() {
            if (1 === arguments.length) {
              const t = arguments[0];
              return this.getLocation(t, !0);
            }
            if (2 === arguments.length) {
              const t = arguments[0],
                e = arguments[1];
              let n = t;
              t < 0 && (n = this._linearGeom.getLength() + t);
              const s = this.getLocationForward(n);
              return e ? s : this.resolveHigher(s);
            }
          }
          getLocationForward(t) {
            if (t <= 0) return new Go();
            let e = 0;
            const n = new qo(this._linearGeom);
            for (; n.hasNext(); ) {
              if (n.isEndOfLine()) {
                if (e === t) {
                  const t = n.getComponentIndex(),
                    e = n.getVertexIndex();
                  return new Go(t, e, 0);
                }
              } else {
                const s = n.getSegmentStart(),
                  i = n.getSegmentEnd().distance(s);
                if (e + i > t) {
                  const s = (t - e) / i,
                    r = n.getComponentIndex(),
                    o = n.getVertexIndex();
                  return new Go(r, o, s);
                }
                e += i;
              }
              n.next();
            }
            return Go.getEndLocation(this._linearGeom);
          }
          getClass() {
            return Xo;
          }
          get interfaces_() {
            return [];
          }
        }
        Xo.constructor_ = function () {
          this._linearGeom = null;
          const t = arguments[0];
          this._linearGeom = t;
        };
        class Ho {
          constructor() {
            Ho.constructor_.apply(this, arguments);
          }
          clampIndex(t) {
            const e = this.positiveIndex(t),
              n = this.getStartIndex();
            if (e < n) return n;
            const s = this.getEndIndex();
            return e > s ? s : e;
          }
          locationOf() {
            if (1 === arguments.length) {
              const t = arguments[0];
              return Xo.getLocation(this._linearGeom, t);
            }
            if (2 === arguments.length) {
              const t = arguments[0],
                e = arguments[1];
              return Xo.getLocation(this._linearGeom, t, e);
            }
          }
          project(t) {
            return ko.indexOf(this._linearGeom, t);
          }
          positiveIndex(t) {
            return t >= 0 ? t : this._linearGeom.getLength() + t;
          }
          extractPoint() {
            if (1 === arguments.length) {
              const t = arguments[0];
              return Xo.getLocation(this._linearGeom, t).getCoordinate(
                this._linearGeom
              );
            }
            if (2 === arguments.length) {
              const t = arguments[0],
                e = arguments[1],
                n = Xo.getLocation(this._linearGeom, t).toLowest(
                  this._linearGeom
                );
              return n
                .getSegment(this._linearGeom)
                .pointAlongOffset(n.getSegmentFraction(), e);
            }
          }
          isValidIndex(t) {
            return t >= this.getStartIndex() && t <= this.getEndIndex();
          }
          getEndIndex() {
            return this._linearGeom.getLength();
          }
          getStartIndex() {
            return 0;
          }
          indexOfAfter(t, e) {
            return ko.indexOfAfter(this._linearGeom, t, e);
          }
          extractLine(t, e) {
            new Uo(this._linearGeom);
            const n = this.clampIndex(t),
              s = this.clampIndex(e),
              i = n === s,
              r = this.locationOf(n, i),
              o = this.locationOf(s);
            return Yo.extract(this._linearGeom, r, o);
          }
          indexOf(t) {
            return ko.indexOf(this._linearGeom, t);
          }
          indicesOf(t) {
            const e = Vo.indicesOf(this._linearGeom, t);
            return [
              Xo.getLength(this._linearGeom, e[0]),
              Xo.getLength(this._linearGeom, e[1]),
            ];
          }
          getClass() {
            return Ho;
          }
          get interfaces_() {
            return [];
          }
        }
        Ho.constructor_ = function () {
          this._linearGeom = null;
          const t = arguments[0];
          this._linearGeom = t;
        };
        var Wo = Object.freeze({
          __proto__: null,
          LengthIndexedLine: Ho,
          LengthLocationMap: Xo,
          LinearGeometryBuilder: zo,
          LinearIterator: qo,
          LinearLocation: Go,
          LocationIndexedLine: Uo,
        });
        class jo {
          constructor() {
            jo.constructor_.apply(this, arguments);
          }
          static transform(t, e) {
            const n = new x();
            for (let s = t.iterator(); s.hasNext(); )
              n.add(e.execute(s.next()));
            return n;
          }
          static select(t, e) {
            const n = new x();
            for (let s = t.iterator(); s.hasNext(); ) {
              const t = s.next();
              Boolean.TRUE.equals(e.execute(t)) && n.add(t);
            }
            return n;
          }
          static apply(t, e) {
            for (let n = t.iterator(); n.hasNext(); ) e.execute(n.next());
          }
          getClass() {
            return jo;
          }
          get interfaces_() {
            return [];
          }
        }
        (jo.Function = function () {}), (jo.constructor_ = function () {});
        class Ko {
          constructor() {
            Ko.constructor_.apply(this, arguments);
          }
          filter(t) {
            this.pts[this.n++] = t;
          }
          getCoordinates() {
            return this.pts;
          }
          getClass() {
            return Ko;
          }
          get interfaces_() {
            return [B];
          }
        }
        Ko.constructor_ = function () {
          (this.pts = null), (this.n = 0);
          const t = arguments[0];
          this.pts = new Array(t).fill(null);
        };
        class Zo {
          constructor() {
            Zo.constructor_.apply(this, arguments);
          }
          filter(t) {
            this._n++;
          }
          getCount() {
            return this._n;
          }
          getClass() {
            return Zo;
          }
          get interfaces_() {
            return [B];
          }
        }
        Zo.constructor_ = function () {
          this._n = 0;
        };
        class Qo {
          constructor() {
            Qo.constructor_.apply(this, arguments);
          }
          count(t) {
            const e = this._counts.get(t);
            return null === e ? 0 : e.count();
          }
          add(t) {
            const e = this._counts.get(t);
            null === e ? this._counts.put(t, new Jo(1)) : e.increment();
          }
          getClass() {
            return Qo;
          }
          get interfaces_() {
            return [];
          }
        }
        class Jo {
          constructor() {
            Jo.constructor_.apply(this, arguments);
          }
          count() {
            return this.count;
          }
          increment() {
            this.count++;
          }
          getClass() {
            return Jo;
          }
          get interfaces_() {
            return [];
          }
        }
        (Jo.constructor_ = function () {
          if (((this.count = 0), 0 === arguments.length));
          else if (1 === arguments.length) {
            const t = arguments[0];
            this.count = t;
          }
        }),
          (Qo.Counter = Jo),
          (Qo.constructor_ = function () {
            this._counts = new kt();
          });
        var $o = Object.freeze({
          __proto__: null,
          CollectionUtil: jo,
          CoordinateArrayFilter: Ko,
          CoordinateCountFilter: Zo,
          GeometricShapeFactory: we,
          NumberUtil: e,
          ObjectCounter: Qo,
          PriorityQueue: fs,
          StringUtil: wt,
          UniqueCoordinateArrayFilter: an,
        });
        class tl {
          get interfaces_() {
            return [];
          }
          getClass() {
            return tl;
          }
          static union(t, e) {
            if (t.isEmpty() || e.isEmpty()) {
              if (t.isEmpty() && e.isEmpty())
                return hr.createEmptyResult(hr.UNION, t, e, t.getFactory());
              if (t.isEmpty()) return e.copy();
              if (e.isEmpty()) return t.copy();
            }
            return (
              t.checkNotGeometryCollection(t),
              t.checkNotGeometryCollection(e),
              ar.overlayOp(t, e, hr.UNION)
            );
          }
        }
        (q.prototype.equalsTopo = function (t) {
          return (
            !!this.getEnvelopeInternal().equals(t.getEnvelopeInternal()) &&
            qr.relate(this, t).isEquals(this.getDimension(), t.getDimension())
          );
        }),
          (q.prototype.union = function () {
            if (0 === arguments.length) return Yr.union(this);
            if (1 === arguments.length) {
              const t = arguments[0];
              return tl.union(this, t);
            }
          }),
          (q.prototype.isValid = function () {
            return Sr.isValid(this);
          }),
          (q.prototype.intersection = function (t) {
            return hr.intersection(this, t);
          }),
          (q.prototype.covers = function (t) {
            return qr.covers(this, t);
          }),
          (q.prototype.coveredBy = function (t) {
            return qr.covers(t, this);
          }),
          (q.prototype.touches = function (t) {
            return qr.touches(this, t);
          }),
          (q.prototype.intersects = function (t) {
            return qr.intersects(this, t);
          }),
          (q.prototype.within = function (t) {
            return qr.contains(t, this);
          }),
          (q.prototype.overlaps = function (t) {
            return qr.overlaps(this, t);
          }),
          (q.prototype.disjoint = function (t) {
            return qr.disjoint(this, t);
          }),
          (q.prototype.crosses = function (t) {
            return qr.crosses(this, t);
          }),
          (q.prototype.buffer = function () {
            if (1 === arguments.length) {
              const t = arguments[0];
              return wi.bufferOp(this, t);
            }
            if (2 === arguments.length) {
              const t = arguments[0],
                e = arguments[1];
              return wi.bufferOp(this, t, e);
            }
            if (3 === arguments.length) {
              const t = arguments[0],
                e = arguments[1],
                n = arguments[2];
              return wi.bufferOp(this, t, e, n);
            }
          }),
          (q.prototype.convexHull = function () {
            return new cn(this).getConvexHull();
          }),
          (q.prototype.relate = function () {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
              e[n] = arguments[n];
            if (1 === arguments.length) {
              const t = arguments[0];
              return qr.relate(this, t);
            }
            if (2 === arguments.length) {
              const t = arguments[0],
                e = arguments[1];
              return qr.relate(this, t).matches(e);
            }
          }),
          (q.prototype.getCentroid = function () {
            if (this.isEmpty()) return this._factory.createPoint();
            const t = rn.getCentroid(this);
            return this.createPointFromInternalCoord(t, this);
          }),
          (q.prototype.getInteriorPoint = function () {
            if (this.isEmpty()) return this._factory.createPoint();
            let t = null;
            const e = this.getDimension(),
              n = (t =
                0 === e
                  ? new _n(this)
                  : 1 === e
                  ? new dn(this)
                  : new un(this)).getInteriorPoint();
            return this.createPointFromInternalCoord(n, this);
          }),
          (q.prototype.symDifference = function (t) {
            return hr.symDifference(this, t);
          }),
          (q.prototype.createPointFromInternalCoord = function (t, e) {
            return (
              e.getPrecisionModel().makePrecise(t),
              e.getFactory().createPoint(t)
            );
          }),
          (q.prototype.toText = function () {
            return new $t().write(this);
          }),
          (q.prototype.toString = function () {
            this.toText();
          }),
          (q.prototype.contains = function (t) {
            return qr.contains(this, t);
          }),
          (q.prototype.difference = function (t) {
            return hr.difference(this, t);
          }),
          (q.prototype.isSimple = function () {
            return new Ws(this).isSimple();
          }),
          (q.prototype.isWithinDistance = function (t, e) {
            return (
              !(
                this.getEnvelopeInternal().distance(t.getEnvelopeInternal()) > e
              ) && Pi.isWithinDistance(this, t, e)
            );
          }),
          (q.prototype.distance = function (t) {
            return Pi.distance(this, t);
          }),
          (q.prototype.isEquivalentClass = function (t) {
            return this.getClass() === t.getClass();
          }),
          (t.algorithm = yn),
          (t.densify = In),
          (t.dissolve = Pn),
          (t.geom = Pe),
          (t.geomgraph = $n),
          (t.index = Ss),
          (t.io = vs),
          (t.linearref = Wo),
          (t.noding = Hs),
          (t.operation = Xr),
          (t.precision = jr),
          (t.simplify = uo),
          (t.triangulate = Fo),
          (t.util = $o),
          (t.version = "2.1.0 (4e987e1)"),
          Object.defineProperty(t, "__esModule", { value: !0 });
      })(e);
    },
  },
]);
