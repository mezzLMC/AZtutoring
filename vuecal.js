(function (t, e) {
    "object" === typeof exports && "object" === typeof module
        ? (module.exports = e(require("vue")))
        : "function" === typeof define && define.amd
        ? define([], e)
        : "object" === typeof exports
        ? (exports["vuecal"] = e(require("vue")))
        : (t["vuecal"] = e(t["Vue"]));
})("undefined" !== typeof self ? self : this, function (t) {
    return (function (t) {
        function e(e) {
            for (var n, r, a = e[0], s = e[1], o = 0, l = []; o < a.length; o++) (r = a[o]), Object.prototype.hasOwnProperty.call(i, r) && i[r] && l.push(i[r][0]), (i[r] = 0);
            for (n in s) Object.prototype.hasOwnProperty.call(s, n) && (t[n] = s[n]);
            u && u(e);
            while (l.length) l.shift()();
        }
        var n = {},
            i = { 40: 0 };
        function r(t) {
            return (
                a.p +
                "vuecal.umd.min." +
                ({
                    0: "i18n/ar",
                    1: "i18n/bg",
                    2: "i18n/bn",
                    3: "i18n/bs",
                    4: "i18n/ca",
                    5: "i18n/cs",
                    6: "i18n/da",
                    7: "i18n/de",
                    8: "i18n/el",
                    9: "i18n/es",
                    10: "i18n/fa",
                    11: "i18n/fr",
                    12: "i18n/he",
                    13: "i18n/hr",
                    14: "i18n/hu",
                    15: "i18n/id",
                    16: "i18n/is",
                    17: "i18n/it",
                    18: "i18n/ja",
                    19: "i18n/ka",
                    20: "i18n/ko",
                    21: "i18n/lt",
                    22: "i18n/mn",
                    23: "i18n/nl",
                    24: "i18n/no",
                    25: "i18n/pl",
                    26: "i18n/pt-br",
                    27: "i18n/ro",
                    28: "i18n/ru",
                    29: "i18n/sk",
                    30: "i18n/sl",
                    31: "i18n/sq",
                    32: "i18n/sr",
                    33: "i18n/sv",
                    34: "i18n/tr",
                    35: "i18n/uk",
                    36: "i18n/vi",
                    37: "i18n/zh-cn",
                    38: "i18n/zh-hk",
                    39: "drag-and-drop",
                }[t] || t) +
                ".js"
            );
        }
        function a(e) {
            if (n[e]) return n[e].exports;
            var i = (n[e] = { i: e, l: !1, exports: {} });
            return t[e].call(i.exports, i, i.exports, a), (i.l = !0), i.exports;
        }
        (a.e = function (t) {
            var e = [],
                n = i[t];
            if (0 !== n)
                if (n) e.push(n[2]);
                else {
                    var s = new Promise(function (e, r) {
                        n = i[t] = [e, r];
                    });
                    e.push((n[2] = s));
                    var o,
                        l = document.createElement("script");
                    (l.charset = "utf-8"), (l.timeout = 120), a.nc && l.setAttribute("nonce", a.nc), (l.src = r(t));
                    var u = new Error();
                    o = function (e) {
                        (l.onerror = l.onload = null), clearTimeout(c);
                        var n = i[t];
                        if (0 !== n) {
                            if (n) {
                                var r = e && ("load" === e.type ? "missing" : e.type),
                                    a = e && e.target && e.target.src;
                                (u.message = "Loading chunk " + t + " failed.\n(" + r + ": " + a + ")"), (u.name = "ChunkLoadError"), (u.type = r), (u.request = a), n[1](u);
                            }
                            i[t] = void 0;
                        }
                    };
                    var c = setTimeout(function () {
                        o({ type: "timeout", target: l });
                    }, 12e4);
                    (l.onerror = l.onload = o), document.head.appendChild(l);
                }
            return Promise.all(e);
        }),
            (a.m = t),
            (a.c = n),
            (a.d = function (t, e, n) {
                a.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
            }),
            (a.r = function (t) {
                "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
            }),
            (a.t = function (t, e) {
                if ((1 & e && (t = a(t)), 8 & e)) return t;
                if (4 & e && "object" === typeof t && t && t.__esModule) return t;
                var n = Object.create(null);
                if ((a.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t))
                    for (var i in t)
                        a.d(
                            n,
                            i,
                            function (e) {
                                return t[e];
                            }.bind(null, i)
                        );
                return n;
            }),
            (a.n = function (t) {
                var e =
                    t && t.__esModule
                        ? function () {
                              return t["default"];
                          }
                        : function () {
                              return t;
                          };
                return a.d(e, "a", e), e;
            }),
            (a.o = function (t, e) {
                return Object.prototype.hasOwnProperty.call(t, e);
            }),
            (a.p = ""),
            (a.oe = function (t) {
                throw (console.error(t), t);
            });
        var s = (("undefined" !== typeof self ? self : this)["webpackJsonpvuecal"] = ("undefined" !== typeof self ? self : this)["webpackJsonpvuecal"] || []),
            o = s.push.bind(s);
        (s.push = e), (s = s.slice());
        for (var l = 0; l < s.length; l++) e(s[l]);
        var u = o;
        return a((a.s = "fb15"));
    })({
        "00ee": function (t, e, n) {
            var i = n("b622"),
                r = i("toStringTag"),
                a = {};
            (a[r] = "z"), (t.exports = "[object z]" === String(a));
        },
        "0366": function (t, e, n) {
            var i = n("1c0b");
            t.exports = function (t, e, n) {
                if ((i(t), void 0 === e)) return t;
                switch (n) {
                    case 0:
                        return function () {
                            return t.call(e);
                        };
                    case 1:
                        return function (n) {
                            return t.call(e, n);
                        };
                    case 2:
                        return function (n, i) {
                            return t.call(e, n, i);
                        };
                    case 3:
                        return function (n, i, r) {
                            return t.call(e, n, i, r);
                        };
                }
                return function () {
                    return t.apply(e, arguments);
                };
            };
        },
        "057f": function (t, e, n) {
            var i = n("fc6a"),
                r = n("241c").f,
                a = {}.toString,
                s = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
                o = function (t) {
                    try {
                        return r(t);
                    } catch (e) {
                        return s.slice();
                    }
                };
            t.exports.f = function (t) {
                return s && "[object Window]" == a.call(t) ? o(t) : r(i(t));
            };
        },
        "06cf": function (t, e, n) {
            var i = n("83ab"),
                r = n("d1e7"),
                a = n("5c6c"),
                s = n("fc6a"),
                o = n("c04e"),
                l = n("5135"),
                u = n("0cfb"),
                c = Object.getOwnPropertyDescriptor;
            e.f = i
                ? c
                : function (t, e) {
                      if (((t = s(t)), (e = o(e, !0)), u))
                          try {
                              return c(t, e);
                          } catch (n) {}
                      if (l(t, e)) return a(!r.f.call(t, e), t[e]);
                  };
        },
        "0a96": function (t) {
            t.exports = JSON.parse(
                '{"weekDays":["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche"],"months":["Janvier","Fevrier","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"],"years":"Years","year":"Year","month":"Month","week":"Week","day":"Day","today":"Today","noEvent":"No Event","allDay":"All day","deleteEvent":"Delete","createEvent":"Create an event","dateFormat":"dddd MMMM D{S}, YYYY"}'
            );
        },
        "0cb2": function (t, e, n) {
            var i = n("7b0b"),
                r = Math.floor,
                a = "".replace,
                s = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
                o = /\$([$&'`]|\d{1,2})/g;
            t.exports = function (t, e, n, l, u, c) {
                var d = n + t.length,
                    f = l.length,
                    v = o;
                return (
                    void 0 !== u && ((u = i(u)), (v = s)),
                    a.call(c, v, function (i, a) {
                        var s;
                        switch (a.charAt(0)) {
                            case "$":
                                return "$";
                            case "&":
                                return t;
                            case "`":
                                return e.slice(0, n);
                            case "'":
                                return e.slice(d);
                            case "<":
                                s = u[a.slice(1, -1)];
                                break;
                            default:
                                var o = +a;
                                if (0 === o) return i;
                                if (o > f) {
                                    var c = r(o / 10);
                                    return 0 === c ? i : c <= f ? (void 0 === l[c - 1] ? a.charAt(1) : l[c - 1] + a.charAt(1)) : i;
                                }
                                s = l[o - 1];
                        }
                        return void 0 === s ? "" : s;
                    })
                );
            };
        },
        "0cfb": function (t, e, n) {
            var i = n("83ab"),
                r = n("d039"),
                a = n("cc12");
            t.exports =
                !i &&
                !r(function () {
                    return (
                        7 !=
                        Object.defineProperty(a("div"), "a", {
                            get: function () {
                                return 7;
                            },
                        }).a
                    );
                });
        },
        1148: function (t, e, n) {
            "use strict";
            var i = n("a691"),
                r = n("1d80");
            t.exports =
                "".repeat ||
                function (t) {
                    var e = String(r(this)),
                        n = "",
                        a = i(t);
                    if (a < 0 || a == 1 / 0) throw RangeError("Wrong number of repetitions");
                    for (; a > 0; (a >>>= 1) && (e += e)) 1 & a && (n += e);
                    return n;
                };
        },
        1276: function (t, e, n) {
            "use strict";
            var i = n("d784"),
                r = n("44e7"),
                a = n("825a"),
                s = n("1d80"),
                o = n("4840"),
                l = n("8aa5"),
                u = n("50c4"),
                c = n("14c3"),
                d = n("9263"),
                f = n("d039"),
                v = [].push,
                h = Math.min,
                p = 4294967295,
                y = !f(function () {
                    return !RegExp(p, "y");
                });
            i(
                "split",
                2,
                function (t, e, n) {
                    var i;
                    return (
                        (i =
                            "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length
                                ? function (t, n) {
                                      var i = String(s(this)),
                                          a = void 0 === n ? p : n >>> 0;
                                      if (0 === a) return [];
                                      if (void 0 === t) return [i];
                                      if (!r(t)) return e.call(i, t, a);
                                      var o,
                                          l,
                                          u,
                                          c = [],
                                          f = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""),
                                          h = 0,
                                          y = new RegExp(t.source, f + "g");
                                      while ((o = d.call(y, i))) {
                                          if (((l = y.lastIndex), l > h && (c.push(i.slice(h, o.index)), o.length > 1 && o.index < i.length && v.apply(c, o.slice(1)), (u = o[0].length), (h = l), c.length >= a))) break;
                                          y.lastIndex === o.index && y.lastIndex++;
                                      }
                                      return h === i.length ? (!u && y.test("")) || c.push("") : c.push(i.slice(h)), c.length > a ? c.slice(0, a) : c;
                                  }
                                : "0".split(void 0, 0).length
                                ? function (t, n) {
                                      return void 0 === t && 0 === n ? [] : e.call(this, t, n);
                                  }
                                : e),
                        [
                            function (e, n) {
                                var r = s(this),
                                    a = void 0 == e ? void 0 : e[t];
                                return void 0 !== a ? a.call(e, r, n) : i.call(String(r), e, n);
                            },
                            function (t, r) {
                                var s = n(i, t, this, r, i !== e);
                                if (s.done) return s.value;
                                var d = a(t),
                                    f = String(this),
                                    v = o(d, RegExp),
                                    m = d.unicode,
                                    g = (d.ignoreCase ? "i" : "") + (d.multiline ? "m" : "") + (d.unicode ? "u" : "") + (y ? "y" : "g"),
                                    b = new v(y ? d : "^(?:" + d.source + ")", g),
                                    w = void 0 === r ? p : r >>> 0;
                                if (0 === w) return [];
                                if (0 === f.length) return null === c(b, f) ? [f] : [];
                                var D = 0,
                                    _ = 0,
                                    E = [];
                                while (_ < f.length) {
                                    b.lastIndex = y ? _ : 0;
                                    var k,
                                        S = c(b, y ? f : f.slice(_));
                                    if (null === S || (k = h(u(b.lastIndex + (y ? 0 : _)), f.length)) === D) _ = l(f, _, m);
                                    else {
                                        if ((E.push(f.slice(D, _)), E.length === w)) return E;
                                        for (var x = 1; x <= S.length - 1; x++) if ((E.push(S[x]), E.length === w)) return E;
                                        _ = D = k;
                                    }
                                }
                                return E.push(f.slice(D)), E;
                            },
                        ]
                    );
                },
                !y
            );
        },
        "12cd": function (t, e, n) {},
        1332: function (t, e, n) {},
        "13d5": function (t, e, n) {
            "use strict";
            var i = n("23e7"),
                r = n("d58f").left,
                a = n("a640"),
                s = n("2d00"),
                o = n("605d"),
                l = a("reduce"),
                u = !o && s > 79 && s < 83;
            i(
                { target: "Array", proto: !0, forced: !l || u },
                {
                    reduce: function (t) {
                        return r(this, t, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
                    },
                }
            );
        },
        "14c3": function (t, e, n) {
            var i = n("c6b6"),
                r = n("9263");
            t.exports = function (t, e) {
                var n = t.exec;
                if ("function" === typeof n) {
                    var a = n.call(t, e);
                    if ("object" !== typeof a) throw TypeError("RegExp exec method returned something other than an Object or null");
                    return a;
                }
                if ("RegExp" !== i(t)) throw TypeError("RegExp#exec called on incompatible receiver");
                return r.call(t, e);
            };
        },
        "159b": function (t, e, n) {
            var i = n("da84"),
                r = n("fdbc"),
                a = n("17c2"),
                s = n("9112");
            for (var o in r) {
                var l = i[o],
                    u = l && l.prototype;
                if (u && u.forEach !== a)
                    try {
                        s(u, "forEach", a);
                    } catch (c) {
                        u.forEach = a;
                    }
            }
        },
        "17c2": function (t, e, n) {
            "use strict";
            var i = n("b727").forEach,
                r = n("a640"),
                a = r("forEach");
            t.exports = a
                ? [].forEach
                : function (t) {
                      return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
                  };
        },
        "19aa": function (t, e) {
            t.exports = function (t, e, n) {
                if (!(t instanceof e)) throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
                return t;
            };
        },
        "1be4": function (t, e, n) {
            var i = n("d066");
            t.exports = i("document", "documentElement");
        },
        "1c0b": function (t, e) {
            t.exports = function (t) {
                if ("function" != typeof t) throw TypeError(String(t) + " is not a function");
                return t;
            };
        },
        "1c7e": function (t, e, n) {
            var i = n("b622"),
                r = i("iterator"),
                a = !1;
            try {
                var s = 0,
                    o = {
                        next: function () {
                            return { done: !!s++ };
                        },
                        return: function () {
                            a = !0;
                        },
                    };
                (o[r] = function () {
                    return this;
                }),
                    Array.from(o, function () {
                        throw 2;
                    });
            } catch (l) {}
            t.exports = function (t, e) {
                if (!e && !a) return !1;
                var n = !1;
                try {
                    var i = {};
                    (i[r] = function () {
                        return {
                            next: function () {
                                return { done: (n = !0) };
                            },
                        };
                    }),
                        t(i);
                } catch (l) {}
                return n;
            };
        },
        "1d80": function (t, e) {
            t.exports = function (t) {
                if (void 0 == t) throw TypeError("Can't call method on " + t);
                return t;
            };
        },
        "1dde": function (t, e, n) {
            var i = n("d039"),
                r = n("b622"),
                a = n("2d00"),
                s = r("species");
            t.exports = function (t) {
                return (
                    a >= 51 ||
                    !i(function () {
                        var e = [],
                            n = (e.constructor = {});
                        return (
                            (n[s] = function () {
                                return { foo: 1 };
                            }),
                            1 !== e[t](Boolean).foo
                        );
                    })
                );
            };
        },
        2170: function (t, e, n) {},
        2266: function (t, e, n) {
            var i = n("825a"),
                r = n("e95a"),
                a = n("50c4"),
                s = n("0366"),
                o = n("35a1"),
                l = n("2a62"),
                u = function (t, e) {
                    (this.stopped = t), (this.result = e);
                };
            t.exports = function (t, e, n) {
                var c,
                    d,
                    f,
                    v,
                    h,
                    p,
                    y,
                    m = n && n.that,
                    g = !(!n || !n.AS_ENTRIES),
                    b = !(!n || !n.IS_ITERATOR),
                    w = !(!n || !n.INTERRUPTED),
                    D = s(e, m, 1 + g + w),
                    _ = function (t) {
                        return c && l(c), new u(!0, t);
                    },
                    E = function (t) {
                        return g ? (i(t), w ? D(t[0], t[1], _) : D(t[0], t[1])) : w ? D(t, _) : D(t);
                    };
                if (b) c = t;
                else {
                    if (((d = o(t)), "function" != typeof d)) throw TypeError("Target is not iterable");
                    if (r(d)) {
                        for (f = 0, v = a(t.length); v > f; f++) if (((h = E(t[f])), h && h instanceof u)) return h;
                        return new u(!1);
                    }
                    c = d.call(t);
                }
                p = c.next;
                while (!(y = p.call(c)).done) {
                    try {
                        h = E(y.value);
                    } catch (k) {
                        throw (l(c), k);
                    }
                    if ("object" == typeof h && h && h instanceof u) return h;
                }
                return new u(!1);
            };
        },
        "23cb": function (t, e, n) {
            var i = n("a691"),
                r = Math.max,
                a = Math.min;
            t.exports = function (t, e) {
                var n = i(t);
                return n < 0 ? r(n + e, 0) : a(n, e);
            };
        },
        "23e7": function (t, e, n) {
            var i = n("da84"),
                r = n("06cf").f,
                a = n("9112"),
                s = n("6eeb"),
                o = n("ce4e"),
                l = n("e893"),
                u = n("94ca");
            t.exports = function (t, e) {
                var n,
                    c,
                    d,
                    f,
                    v,
                    h,
                    p = t.target,
                    y = t.global,
                    m = t.stat;
                if (((c = y ? i : m ? i[p] || o(p, {}) : (i[p] || {}).prototype), c))
                    for (d in e) {
                        if (((v = e[d]), t.noTargetGet ? ((h = r(c, d)), (f = h && h.value)) : (f = c[d]), (n = u(y ? d : p + (m ? "." : "#") + d, t.forced)), !n && void 0 !== f)) {
                            if (typeof v === typeof f) continue;
                            l(v, f);
                        }
                        (t.sham || (f && f.sham)) && a(v, "sham", !0), s(c, d, v, t);
                    }
            };
        },
        "241c": function (t, e, n) {
            var i = n("ca84"),
                r = n("7839"),
                a = r.concat("length", "prototype");
            e.f =
                Object.getOwnPropertyNames ||
                function (t) {
                    return i(t, a);
                };
        },
        2532: function (t, e, n) {
            "use strict";
            var i = n("23e7"),
                r = n("5a34"),
                a = n("1d80"),
                s = n("ab13");
            i(
                { target: "String", proto: !0, forced: !s("includes") },
                {
                    includes: function (t) {
                        return !!~String(a(this)).indexOf(r(t), arguments.length > 1 ? arguments[1] : void 0);
                    },
                }
            );
        },
        "25f0": function (t, e, n) {
            "use strict";
            var i = n("6eeb"),
                r = n("825a"),
                a = n("d039"),
                s = n("ad6d"),
                o = "toString",
                l = RegExp.prototype,
                u = l[o],
                c = a(function () {
                    return "/a/b" != u.call({ source: "a", flags: "b" });
                }),
                d = u.name != o;
            (c || d) &&
                i(
                    RegExp.prototype,
                    o,
                    function () {
                        var t = r(this),
                            e = String(t.source),
                            n = t.flags,
                            i = String(void 0 === n && t instanceof RegExp && !("flags" in l) ? s.call(t) : n);
                        return "/" + e + "/" + i;
                    },
                    { unsafe: !0 }
                );
        },
        2626: function (t, e, n) {
            "use strict";
            var i = n("d066"),
                r = n("9bf2"),
                a = n("b622"),
                s = n("83ab"),
                o = a("species");
            t.exports = function (t) {
                var e = i(t),
                    n = r.f;
                s &&
                    e &&
                    !e[o] &&
                    n(e, o, {
                        configurable: !0,
                        get: function () {
                            return this;
                        },
                    });
            };
        },
        "2a62": function (t, e, n) {
            var i = n("825a");
            t.exports = function (t) {
                var e = t["return"];
                if (void 0 !== e) return i(e.call(t)).value;
            };
        },
        "2d00": function (t, e, n) {
            var i,
                r,
                a = n("da84"),
                s = n("342f"),
                o = a.process,
                l = o && o.versions,
                u = l && l.v8;
            u ? ((i = u.split(".")), (r = i[0] + i[1])) : s && ((i = s.match(/Edge\/(\d+)/)), (!i || i[1] >= 74) && ((i = s.match(/Chrome\/(\d+)/)), i && (r = i[1]))), (t.exports = r && +r);
        },
        "342f": function (t, e, n) {
            var i = n("d066");
            t.exports = i("navigator", "userAgent") || "";
        },
        "35a1": function (t, e, n) {
            var i = n("f5df"),
                r = n("3f8c"),
                a = n("b622"),
                s = a("iterator");
            t.exports = function (t) {
                if (void 0 != t) return t[s] || t["@@iterator"] || r[i(t)];
            };
        },
        "37e8": function (t, e, n) {
            var i = n("83ab"),
                r = n("9bf2"),
                a = n("825a"),
                s = n("df75");
            t.exports = i
                ? Object.defineProperties
                : function (t, e) {
                      a(t);
                      var n,
                          i = s(e),
                          o = i.length,
                          l = 0;
                      while (o > l) r.f(t, (n = i[l++]), e[n]);
                      return t;
                  };
        },
        "38cf": function (t, e, n) {
            var i = n("23e7"),
                r = n("1148");
            i({ target: "String", proto: !0 }, { repeat: r });
        },
        "3bbe": function (t, e, n) {
            var i = n("861d");
            t.exports = function (t) {
                if (!i(t) && null !== t) throw TypeError("Can't set " + String(t) + " as a prototype");
                return t;
            };
        },
        "3ca3": function (t, e, n) {
            "use strict";
            var i = n("6547").charAt,
                r = n("69f3"),
                a = n("7dd0"),
                s = "String Iterator",
                o = r.set,
                l = r.getterFor(s);
            a(
                String,
                "String",
                function (t) {
                    o(this, { type: s, string: String(t), index: 0 });
                },
                function () {
                    var t,
                        e = l(this),
                        n = e.string,
                        r = e.index;
                    return r >= n.length ? { value: void 0, done: !0 } : ((t = i(n, r)), (e.index += t.length), { value: t, done: !1 });
                }
            );
        },
        "3f8c": function (t, e) {
            t.exports = {};
        },
        "428f": function (t, e, n) {
            var i = n("da84");
            t.exports = i;
        },
        "44ad": function (t, e, n) {
            var i = n("d039"),
                r = n("c6b6"),
                a = "".split;
            t.exports = i(function () {
                return !Object("z").propertyIsEnumerable(0);
            })
                ? function (t) {
                      return "String" == r(t) ? a.call(t, "") : Object(t);
                  }
                : Object;
        },
        "44d2": function (t, e, n) {
            var i = n("b622"),
                r = n("7c73"),
                a = n("9bf2"),
                s = i("unscopables"),
                o = Array.prototype;
            void 0 == o[s] && a.f(o, s, { configurable: !0, value: r(null) }),
                (t.exports = function (t) {
                    o[s][t] = !0;
                });
        },
        "44e7": function (t, e, n) {
            var i = n("861d"),
                r = n("c6b6"),
                a = n("b622"),
                s = a("match");
            t.exports = function (t) {
                var e;
                return i(t) && (void 0 !== (e = t[s]) ? !!e : "RegExp" == r(t));
            };
        },
        4840: function (t, e, n) {
            var i = n("825a"),
                r = n("1c0b"),
                a = n("b622"),
                s = a("species");
            t.exports = function (t, e) {
                var n,
                    a = i(t).constructor;
                return void 0 === a || void 0 == (n = i(a)[s]) ? e : r(n);
            };
        },
        4930: function (t, e, n) {
            var i = n("605d"),
                r = n("2d00"),
                a = n("d039");
            t.exports =
                !!Object.getOwnPropertySymbols &&
                !a(function () {
                    return !Symbol.sham && (i ? 38 === r : r > 37 && r < 41);
                });
        },
        "4a53": function (t, e, n) {
            var i = {
                "./ar": ["cfcc", 0],
                "./ar.json": ["cfcc", 0],
                "./bg": ["1f0e", 1],
                "./bg.json": ["1f0e", 1],
                "./bn": ["d2d5", 2],
                "./bn.json": ["d2d5", 2],
                "./bs": ["e06f", 3],
                "./bs.json": ["e06f", 3],
                "./ca": ["aeaf", 4],
                "./ca.json": ["aeaf", 4],
                "./cs": ["442f", 5],
                "./cs.json": ["442f", 5],
                "./da": ["93f6", 6],
                "./da.json": ["93f6", 6],
                "./de": ["44ff", 7],
                "./de.json": ["44ff", 7],
                "./el": ["bac9", 8],
                "./el.json": ["bac9", 8],
                "./en": ["0a96"],
                "./en.json": ["0a96"],
                "./es": ["3541", 9],
                "./es.json": ["3541", 9],
                "./fa": ["e4ca", 10],
                "./fa.json": ["e4ca", 10],
                "./fr": ["d791", 11],
                "./fr.json": ["d791", 11],
                "./he": ["5f2c", 12],
                "./he.json": ["5f2c", 12],
                "./hr": ["2364", 13],
                "./hr.json": ["2364", 13],
                "./hu": ["0ade", 14],
                "./hu.json": ["0ade", 14],
                "./id": ["ad69", 15],
                "./id.json": ["ad69", 15],
                "./is": ["3ada", 16],
                "./is.json": ["3ada", 16],
                "./it": ["1412", 17],
                "./it.json": ["1412", 17],
                "./ja": ["e135", 18],
                "./ja.json": ["e135", 18],
                "./ka": ["2969", 19],
                "./ka.json": ["2969", 19],
                "./ko": ["03b7", 20],
                "./ko.json": ["03b7", 20],
                "./lt": ["a2f0", 21],
                "./lt.json": ["a2f0", 21],
                "./mn": ["956e", 22],
                "./mn.json": ["956e", 22],
                "./nl": ["9f37", 23],
                "./nl.json": ["9f37", 23],
                "./no": ["9efb", 24],
                "./no.json": ["9efb", 24],
                "./pl": ["e44c", 25],
                "./pl.json": ["e44c", 25],
                "./pt-br": ["dac8", 26],
                "./pt-br.json": ["dac8", 26],
                "./ro": ["0946", 27],
                "./ro.json": ["0946", 27],
                "./ru": ["d82c", 28],
                "./ru.json": ["d82c", 28],
                "./sk": ["1037", 29],
                "./sk.json": ["1037", 29],
                "./sl": ["c17e", 30],
                "./sl.json": ["c17e", 30],
                "./sq": ["09b8", 31],
                "./sq.json": ["09b8", 31],
                "./sr": ["65a6", 32],
                "./sr.json": ["65a6", 32],
                "./sv": ["1fd1", 33],
                "./sv.json": ["1fd1", 33],
                "./tr": ["20e4", 34],
                "./tr.json": ["20e4", 34],
                "./uk": ["7dc6", 35],
                "./uk.json": ["7dc6", 35],
                "./vi": ["5465", 36],
                "./vi.json": ["5465", 36],
                "./zh-cn": ["8035", 37],
                "./zh-cn.json": ["8035", 37],
                "./zh-hk": ["a5dc", 38],
                "./zh-hk.json": ["a5dc", 38],
            };
            function r(t) {
                if (!n.o(i, t))
                    return Promise.resolve().then(function () {
                        var e = new Error("Cannot find module '" + t + "'");
                        throw ((e.code = "MODULE_NOT_FOUND"), e);
                    });
                var e = i[t],
                    r = e[0];
                return Promise.all(e.slice(1).map(n.e)).then(function () {
                    return n.t(r, 3);
                });
            }
            (r.keys = function () {
                return Object.keys(i);
            }),
                (r.id = "4a53"),
                (t.exports = r);
        },
        "4d64": function (t, e, n) {
            var i = n("fc6a"),
                r = n("50c4"),
                a = n("23cb"),
                s = function (t) {
                    return function (e, n, s) {
                        var o,
                            l = i(e),
                            u = r(l.length),
                            c = a(s, u);
                        if (t && n != n) {
                            while (u > c) if (((o = l[c++]), o != o)) return !0;
                        } else for (; u > c; c++) if ((t || c in l) && l[c] === n) return t || c || 0;
                        return !t && -1;
                    };
                };
            t.exports = { includes: s(!0), indexOf: s(!1) };
        },
        "4de4": function (t, e, n) {
            "use strict";
            var i = n("23e7"),
                r = n("b727").filter,
                a = n("1dde"),
                s = a("filter");
            i(
                { target: "Array", proto: !0, forced: !s },
                {
                    filter: function (t) {
                        return r(this, t, arguments.length > 1 ? arguments[1] : void 0);
                    },
                }
            );
        },
        "4df4": function (t, e, n) {
            "use strict";
            var i = n("0366"),
                r = n("7b0b"),
                a = n("9bdd"),
                s = n("e95a"),
                o = n("50c4"),
                l = n("8418"),
                u = n("35a1");
            t.exports = function (t) {
                var e,
                    n,
                    c,
                    d,
                    f,
                    v,
                    h = r(t),
                    p = "function" == typeof this ? this : Array,
                    y = arguments.length,
                    m = y > 1 ? arguments[1] : void 0,
                    g = void 0 !== m,
                    b = u(h),
                    w = 0;
                if ((g && (m = i(m, y > 2 ? arguments[2] : void 0, 2)), void 0 == b || (p == Array && s(b)))) for (e = o(h.length), n = new p(e); e > w; w++) (v = g ? m(h[w], w) : h[w]), l(n, w, v);
                else for (d = b.call(h), f = d.next, n = new p(); !(c = f.call(d)).done; w++) (v = g ? a(d, m, [c.value, w], !0) : c.value), l(n, w, v);
                return (n.length = w), n;
            };
        },
        "50c4": function (t, e, n) {
            var i = n("a691"),
                r = Math.min;
            t.exports = function (t) {
                return t > 0 ? r(i(t), 9007199254740991) : 0;
            };
        },
        5135: function (t, e) {
            var n = {}.hasOwnProperty;
            t.exports = function (t, e) {
                return n.call(t, e);
            };
        },
        5319: function (t, e, n) {
            "use strict";
            var i = n("d784"),
                r = n("825a"),
                a = n("50c4"),
                s = n("a691"),
                o = n("1d80"),
                l = n("8aa5"),
                u = n("0cb2"),
                c = n("14c3"),
                d = Math.max,
                f = Math.min,
                v = function (t) {
                    return void 0 === t ? t : String(t);
                };
            i("replace", 2, function (t, e, n, i) {
                var h = i.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
                    p = i.REPLACE_KEEPS_$0,
                    y = h ? "$" : "$0";
                return [
                    function (n, i) {
                        var r = o(this),
                            a = void 0 == n ? void 0 : n[t];
                        return void 0 !== a ? a.call(n, r, i) : e.call(String(r), n, i);
                    },
                    function (t, i) {
                        if ((!h && p) || ("string" === typeof i && -1 === i.indexOf(y))) {
                            var o = n(e, t, this, i);
                            if (o.done) return o.value;
                        }
                        var m = r(t),
                            g = String(this),
                            b = "function" === typeof i;
                        b || (i = String(i));
                        var w = m.global;
                        if (w) {
                            var D = m.unicode;
                            m.lastIndex = 0;
                        }
                        var _ = [];
                        while (1) {
                            var E = c(m, g);
                            if (null === E) break;
                            if ((_.push(E), !w)) break;
                            var k = String(E[0]);
                            "" === k && (m.lastIndex = l(g, a(m.lastIndex), D));
                        }
                        for (var S = "", x = 0, C = 0; C < _.length; C++) {
                            E = _[C];
                            for (var O = String(E[0]), T = d(f(s(E.index), g.length), 0), M = [], j = 1; j < E.length; j++) M.push(v(E[j]));
                            var A = E.groups;
                            if (b) {
                                var W = [O].concat(M, T, g);
                                void 0 !== A && W.push(A);
                                var V = String(i.apply(void 0, W));
                            } else V = u(O, g, T, M, A, i);
                            T >= x && ((S += g.slice(x, T) + V), (x = T + O.length));
                        }
                        return S + g.slice(x);
                    },
                ];
            });
        },
        5530: function (t, e, n) {
            "use strict";
            n.d(e, "a", function () {
                return a;
            });
            n("b64b"), n("a4d3"), n("4de4"), n("e439"), n("159b"), n("dbb4");
            var i = n("ade3");
            function r(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    e &&
                        (i = i.filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })),
                        n.push.apply(n, i);
                }
                return n;
            }
            function a(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2
                        ? r(Object(n), !0).forEach(function (e) {
                              Object(i["a"])(t, e, n[e]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                        : r(Object(n)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                          });
                }
                return t;
            }
        },
        5692: function (t, e, n) {
            var i = n("c430"),
                r = n("c6cd");
            (t.exports = function (t, e) {
                return r[t] || (r[t] = void 0 !== e ? e : {});
            })("versions", []).push({ version: "3.9.1", mode: i ? "pure" : "global", copyright: "© 2021 Denis Pushkarev (zloirock.ru)" });
        },
        "56ef": function (t, e, n) {
            var i = n("d066"),
                r = n("241c"),
                a = n("7418"),
                s = n("825a");
            t.exports =
                i("Reflect", "ownKeys") ||
                function (t) {
                    var e = r.f(s(t)),
                        n = a.f;
                    return n ? e.concat(n(t)) : e;
                };
        },
        5899: function (t, e) {
            t.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff";
        },
        "58a8": function (t, e, n) {
            var i = n("1d80"),
                r = n("5899"),
                a = "[" + r + "]",
                s = RegExp("^" + a + a + "*"),
                o = RegExp(a + a + "*$"),
                l = function (t) {
                    return function (e) {
                        var n = String(i(e));
                        return 1 & t && (n = n.replace(s, "")), 2 & t && (n = n.replace(o, "")), n;
                    };
                };
            t.exports = { start: l(1), end: l(2), trim: l(3) };
        },
        "5a34": function (t, e, n) {
            var i = n("44e7");
            t.exports = function (t) {
                if (i(t)) throw TypeError("The method doesn't accept regular expressions");
                return t;
            };
        },
        "5c6c": function (t, e) {
            t.exports = function (t, e) {
                return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e };
            };
        },
        "605d": function (t, e, n) {
            var i = n("c6b6"),
                r = n("da84");
            t.exports = "process" == i(r.process);
        },
        6062: function (t, e, n) {
            "use strict";
            var i = n("6d61"),
                r = n("6566");
            t.exports = i(
                "Set",
                function (t) {
                    return function () {
                        return t(this, arguments.length ? arguments[0] : void 0);
                    };
                },
                r
            );
        },
        "61f2": function (t, e, n) {
            "use strict";
            n("12cd");
        },
        6547: function (t, e, n) {
            var i = n("a691"),
                r = n("1d80"),
                a = function (t) {
                    return function (e, n) {
                        var a,
                            s,
                            o = String(r(e)),
                            l = i(n),
                            u = o.length;
                        return l < 0 || l >= u
                            ? t
                                ? ""
                                : void 0
                            : ((a = o.charCodeAt(l)), a < 55296 || a > 56319 || l + 1 === u || (s = o.charCodeAt(l + 1)) < 56320 || s > 57343 ? (t ? o.charAt(l) : a) : t ? o.slice(l, l + 2) : s - 56320 + ((a - 55296) << 10) + 65536);
                    };
                };
            t.exports = { codeAt: a(!1), charAt: a(!0) };
        },
        6566: function (t, e, n) {
            "use strict";
            var i = n("9bf2").f,
                r = n("7c73"),
                a = n("e2cc"),
                s = n("0366"),
                o = n("19aa"),
                l = n("2266"),
                u = n("7dd0"),
                c = n("2626"),
                d = n("83ab"),
                f = n("f183").fastKey,
                v = n("69f3"),
                h = v.set,
                p = v.getterFor;
            t.exports = {
                getConstructor: function (t, e, n, u) {
                    var c = t(function (t, i) {
                            o(t, c, e), h(t, { type: e, index: r(null), first: void 0, last: void 0, size: 0 }), d || (t.size = 0), void 0 != i && l(i, t[u], { that: t, AS_ENTRIES: n });
                        }),
                        v = p(e),
                        y = function (t, e, n) {
                            var i,
                                r,
                                a = v(t),
                                s = m(t, e);
                            return (
                                s
                                    ? (s.value = n)
                                    : ((a.last = s = { index: (r = f(e, !0)), key: e, value: n, previous: (i = a.last), next: void 0, removed: !1 }),
                                      a.first || (a.first = s),
                                      i && (i.next = s),
                                      d ? a.size++ : t.size++,
                                      "F" !== r && (a.index[r] = s)),
                                t
                            );
                        },
                        m = function (t, e) {
                            var n,
                                i = v(t),
                                r = f(e);
                            if ("F" !== r) return i.index[r];
                            for (n = i.first; n; n = n.next) if (n.key == e) return n;
                        };
                    return (
                        a(c.prototype, {
                            clear: function () {
                                var t = this,
                                    e = v(t),
                                    n = e.index,
                                    i = e.first;
                                while (i) (i.removed = !0), i.previous && (i.previous = i.previous.next = void 0), delete n[i.index], (i = i.next);
                                (e.first = e.last = void 0), d ? (e.size = 0) : (t.size = 0);
                            },
                            delete: function (t) {
                                var e = this,
                                    n = v(e),
                                    i = m(e, t);
                                if (i) {
                                    var r = i.next,
                                        a = i.previous;
                                    delete n.index[i.index], (i.removed = !0), a && (a.next = r), r && (r.previous = a), n.first == i && (n.first = r), n.last == i && (n.last = a), d ? n.size-- : e.size--;
                                }
                                return !!i;
                            },
                            forEach: function (t) {
                                var e,
                                    n = v(this),
                                    i = s(t, arguments.length > 1 ? arguments[1] : void 0, 3);
                                while ((e = e ? e.next : n.first)) {
                                    i(e.value, e.key, this);
                                    while (e && e.removed) e = e.previous;
                                }
                            },
                            has: function (t) {
                                return !!m(this, t);
                            },
                        }),
                        a(
                            c.prototype,
                            n
                                ? {
                                      get: function (t) {
                                          var e = m(this, t);
                                          return e && e.value;
                                      },
                                      set: function (t, e) {
                                          return y(this, 0 === t ? 0 : t, e);
                                      },
                                  }
                                : {
                                      add: function (t) {
                                          return y(this, (t = 0 === t ? 0 : t), t);
                                      },
                                  }
                        ),
                        d &&
                            i(c.prototype, "size", {
                                get: function () {
                                    return v(this).size;
                                },
                            }),
                        c
                    );
                },
                setStrong: function (t, e, n) {
                    var i = e + " Iterator",
                        r = p(e),
                        a = p(i);
                    u(
                        t,
                        e,
                        function (t, e) {
                            h(this, { type: i, target: t, state: r(t), kind: e, last: void 0 });
                        },
                        function () {
                            var t = a(this),
                                e = t.kind,
                                n = t.last;
                            while (n && n.removed) n = n.previous;
                            return t.target && (t.last = n = n ? n.next : t.state.first)
                                ? "keys" == e
                                    ? { value: n.key, done: !1 }
                                    : "values" == e
                                    ? { value: n.value, done: !1 }
                                    : { value: [n.key, n.value], done: !1 }
                                : ((t.target = void 0), { value: void 0, done: !0 });
                        },
                        n ? "entries" : "values",
                        !n,
                        !0
                    ),
                        c(e);
                },
            };
        },
        "65f0": function (t, e, n) {
            var i = n("861d"),
                r = n("e8b5"),
                a = n("b622"),
                s = a("species");
            t.exports = function (t, e) {
                var n;
                return r(t) && ((n = t.constructor), "function" != typeof n || (n !== Array && !r(n.prototype)) ? i(n) && ((n = n[s]), null === n && (n = void 0)) : (n = void 0)), new (void 0 === n ? Array : n)(0 === e ? 0 : e);
            };
        },
        "69f3": function (t, e, n) {
            var i,
                r,
                a,
                s = n("7f9a"),
                o = n("da84"),
                l = n("861d"),
                u = n("9112"),
                c = n("5135"),
                d = n("c6cd"),
                f = n("f772"),
                v = n("d012"),
                h = o.WeakMap,
                p = function (t) {
                    return a(t) ? r(t) : i(t, {});
                },
                y = function (t) {
                    return function (e) {
                        var n;
                        if (!l(e) || (n = r(e)).type !== t) throw TypeError("Incompatible receiver, " + t + " required");
                        return n;
                    };
                };
            if (s) {
                var m = d.state || (d.state = new h()),
                    g = m.get,
                    b = m.has,
                    w = m.set;
                (i = function (t, e) {
                    return (e.facade = t), w.call(m, t, e), e;
                }),
                    (r = function (t) {
                        return g.call(m, t) || {};
                    }),
                    (a = function (t) {
                        return b.call(m, t);
                    });
            } else {
                var D = f("state");
                (v[D] = !0),
                    (i = function (t, e) {
                        return (e.facade = t), u(t, D, e), e;
                    }),
                    (r = function (t) {
                        return c(t, D) ? t[D] : {};
                    }),
                    (a = function (t) {
                        return c(t, D);
                    });
            }
            t.exports = { set: i, get: r, has: a, enforce: p, getterFor: y };
        },
        "6d61": function (t, e, n) {
            "use strict";
            var i = n("23e7"),
                r = n("da84"),
                a = n("94ca"),
                s = n("6eeb"),
                o = n("f183"),
                l = n("2266"),
                u = n("19aa"),
                c = n("861d"),
                d = n("d039"),
                f = n("1c7e"),
                v = n("d44e"),
                h = n("7156");
            t.exports = function (t, e, n) {
                var p = -1 !== t.indexOf("Map"),
                    y = -1 !== t.indexOf("Weak"),
                    m = p ? "set" : "add",
                    g = r[t],
                    b = g && g.prototype,
                    w = g,
                    D = {},
                    _ = function (t) {
                        var e = b[t];
                        s(
                            b,
                            t,
                            "add" == t
                                ? function (t) {
                                      return e.call(this, 0 === t ? 0 : t), this;
                                  }
                                : "delete" == t
                                ? function (t) {
                                      return !(y && !c(t)) && e.call(this, 0 === t ? 0 : t);
                                  }
                                : "get" == t
                                ? function (t) {
                                      return y && !c(t) ? void 0 : e.call(this, 0 === t ? 0 : t);
                                  }
                                : "has" == t
                                ? function (t) {
                                      return !(y && !c(t)) && e.call(this, 0 === t ? 0 : t);
                                  }
                                : function (t, n) {
                                      return e.call(this, 0 === t ? 0 : t, n), this;
                                  }
                        );
                    },
                    E = a(
                        t,
                        "function" != typeof g ||
                            !(
                                y ||
                                (b.forEach &&
                                    !d(function () {
                                        new g().entries().next();
                                    }))
                            )
                    );
                if (E) (w = n.getConstructor(e, t, p, m)), (o.REQUIRED = !0);
                else if (a(t, !0)) {
                    var k = new w(),
                        S = k[m](y ? {} : -0, 1) != k,
                        x = d(function () {
                            k.has(1);
                        }),
                        C = f(function (t) {
                            new g(t);
                        }),
                        O =
                            !y &&
                            d(function () {
                                var t = new g(),
                                    e = 5;
                                while (e--) t[m](e, e);
                                return !t.has(-0);
                            });
                    C ||
                        ((w = e(function (e, n) {
                            u(e, w, t);
                            var i = h(new g(), e, w);
                            return void 0 != n && l(n, i[m], { that: i, AS_ENTRIES: p }), i;
                        })),
                        (w.prototype = b),
                        (b.constructor = w)),
                        (x || O) && (_("delete"), _("has"), p && _("get")),
                        (O || S) && _(m),
                        y && b.clear && delete b.clear;
                }
                return (D[t] = w), i({ global: !0, forced: w != g }, D), v(w, t), y || n.setStrong(w, t, p), w;
            };
        },
        "6eeb": function (t, e, n) {
            var i = n("da84"),
                r = n("9112"),
                a = n("5135"),
                s = n("ce4e"),
                o = n("8925"),
                l = n("69f3"),
                u = l.get,
                c = l.enforce,
                d = String(String).split("String");
            (t.exports = function (t, e, n, o) {
                var l,
                    u = !!o && !!o.unsafe,
                    f = !!o && !!o.enumerable,
                    v = !!o && !!o.noTargetGet;
                "function" == typeof n && ("string" != typeof e || a(n, "name") || r(n, "name", e), (l = c(n)), l.source || (l.source = d.join("string" == typeof e ? e : ""))),
                    t !== i ? (u ? !v && t[e] && (f = !0) : delete t[e], f ? (t[e] = n) : r(t, e, n)) : f ? (t[e] = n) : s(e, n);
            })(Function.prototype, "toString", function () {
                return ("function" == typeof this && u(this).source) || o(this);
            });
        },
        7156: function (t, e, n) {
            var i = n("861d"),
                r = n("d2bb");
            t.exports = function (t, e, n) {
                var a, s;
                return r && "function" == typeof (a = e.constructor) && a !== n && i((s = a.prototype)) && s !== n.prototype && r(t, s), t;
            };
        },
        7371: function (t, e, n) {},
        7418: function (t, e) {
            e.f = Object.getOwnPropertySymbols;
        },
        "746f": function (t, e, n) {
            var i = n("428f"),
                r = n("5135"),
                a = n("e538"),
                s = n("9bf2").f;
            t.exports = function (t) {
                var e = i.Symbol || (i.Symbol = {});
                r(e, t) || s(e, t, { value: a.f(t) });
            };
        },
        7839: function (t, e) {
            t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
        },
        "7b0b": function (t, e, n) {
            var i = n("1d80");
            t.exports = function (t) {
                return Object(i(t));
            };
        },
        "7c73": function (t, e, n) {
            var i,
                r = n("825a"),
                a = n("37e8"),
                s = n("7839"),
                o = n("d012"),
                l = n("1be4"),
                u = n("cc12"),
                c = n("f772"),
                d = ">",
                f = "<",
                v = "prototype",
                h = "script",
                p = c("IE_PROTO"),
                y = function () {},
                m = function (t) {
                    return f + h + d + t + f + "/" + h + d;
                },
                g = function (t) {
                    t.write(m("")), t.close();
                    var e = t.parentWindow.Object;
                    return (t = null), e;
                },
                b = function () {
                    var t,
                        e = u("iframe"),
                        n = "java" + h + ":";
                    return (e.style.display = "none"), l.appendChild(e), (e.src = String(n)), (t = e.contentWindow.document), t.open(), t.write(m("document.F=Object")), t.close(), t.F;
                },
                w = function () {
                    try {
                        i = document.domain && new ActiveXObject("htmlfile");
                    } catch (e) {}
                    w = i ? g(i) : b();
                    var t = s.length;
                    while (t--) delete w[v][s[t]];
                    return w();
                };
            (o[p] = !0),
                (t.exports =
                    Object.create ||
                    function (t, e) {
                        var n;
                        return null !== t ? ((y[v] = r(t)), (n = new y()), (y[v] = null), (n[p] = t)) : (n = w()), void 0 === e ? n : a(n, e);
                    });
        },
        "7db0": function (t, e, n) {
            "use strict";
            var i = n("23e7"),
                r = n("b727").find,
                a = n("44d2"),
                s = "find",
                o = !0;
            s in [] &&
                Array(1)[s](function () {
                    o = !1;
                }),
                i(
                    { target: "Array", proto: !0, forced: o },
                    {
                        find: function (t) {
                            return r(this, t, arguments.length > 1 ? arguments[1] : void 0);
                        },
                    }
                ),
                a(s);
        },
        "7dd0": function (t, e, n) {
            "use strict";
            var i = n("23e7"),
                r = n("9ed3"),
                a = n("e163"),
                s = n("d2bb"),
                o = n("d44e"),
                l = n("9112"),
                u = n("6eeb"),
                c = n("b622"),
                d = n("c430"),
                f = n("3f8c"),
                v = n("ae93"),
                h = v.IteratorPrototype,
                p = v.BUGGY_SAFARI_ITERATORS,
                y = c("iterator"),
                m = "keys",
                g = "values",
                b = "entries",
                w = function () {
                    return this;
                };
            t.exports = function (t, e, n, c, v, D, _) {
                r(n, e, c);
                var E,
                    k,
                    S,
                    x = function (t) {
                        if (t === v && j) return j;
                        if (!p && t in T) return T[t];
                        switch (t) {
                            case m:
                                return function () {
                                    return new n(this, t);
                                };
                            case g:
                                return function () {
                                    return new n(this, t);
                                };
                            case b:
                                return function () {
                                    return new n(this, t);
                                };
                        }
                        return function () {
                            return new n(this);
                        };
                    },
                    C = e + " Iterator",
                    O = !1,
                    T = t.prototype,
                    M = T[y] || T["@@iterator"] || (v && T[v]),
                    j = (!p && M) || x(v),
                    A = ("Array" == e && T.entries) || M;
                if (
                    (A && ((E = a(A.call(new t()))), h !== Object.prototype && E.next && (d || a(E) === h || (s ? s(E, h) : "function" != typeof E[y] && l(E, y, w)), o(E, C, !0, !0), d && (f[C] = w))),
                    v == g &&
                        M &&
                        M.name !== g &&
                        ((O = !0),
                        (j = function () {
                            return M.call(this);
                        })),
                    (d && !_) || T[y] === j || l(T, y, j),
                    (f[e] = j),
                    v)
                )
                    if (((k = { values: x(g), keys: D ? j : x(m), entries: x(b) }), _)) for (S in k) (p || O || !(S in T)) && u(T, S, k[S]);
                    else i({ target: e, proto: !0, forced: p || O }, k);
                return k;
            };
        },
        "7f9a": function (t, e, n) {
            var i = n("da84"),
                r = n("8925"),
                a = i.WeakMap;
            t.exports = "function" === typeof a && /native code/.test(r(a));
        },
        "81d5": function (t, e, n) {
            "use strict";
            var i = n("7b0b"),
                r = n("23cb"),
                a = n("50c4");
            t.exports = function (t) {
                var e = i(this),
                    n = a(e.length),
                    s = arguments.length,
                    o = r(s > 1 ? arguments[1] : void 0, n),
                    l = s > 2 ? arguments[2] : void 0,
                    u = void 0 === l ? n : r(l, n);
                while (u > o) e[o++] = t;
                return e;
            };
        },
        "825a": function (t, e, n) {
            var i = n("861d");
            t.exports = function (t) {
                if (!i(t)) throw TypeError(String(t) + " is not an object");
                return t;
            };
        },
        "83ab": function (t, e, n) {
            var i = n("d039");
            t.exports = !i(function () {
                return (
                    7 !=
                    Object.defineProperty({}, 1, {
                        get: function () {
                            return 7;
                        },
                    })[1]
                );
            });
        },
        8418: function (t, e, n) {
            "use strict";
            var i = n("c04e"),
                r = n("9bf2"),
                a = n("5c6c");
            t.exports = function (t, e, n) {
                var s = i(e);
                s in t ? r.f(t, s, a(0, n)) : (t[s] = n);
            };
        },
        "857a": function (t, e, n) {
            var i = n("1d80"),
                r = /"/g;
            t.exports = function (t, e, n, a) {
                var s = String(i(t)),
                    o = "<" + e;
                return "" !== n && (o += " " + n + '="' + String(a).replace(r, "&quot;") + '"'), o + ">" + s + "</" + e + ">";
            };
        },
        "861d": function (t, e) {
            t.exports = function (t) {
                return "object" === typeof t ? null !== t : "function" === typeof t;
            };
        },
        8875: function (t, e, n) {
            var i, r, a;
            (function (n, s) {
                (r = []), (i = s), (a = "function" === typeof i ? i.apply(e, r) : i), void 0 === a || (t.exports = a);
            })("undefined" !== typeof self && self, function () {
                function t() {
                    var e = Object.getOwnPropertyDescriptor(document, "currentScript");
                    if (!e && "currentScript" in document && document.currentScript) return document.currentScript;
                    if (e && e.get !== t && document.currentScript) return document.currentScript;
                    try {
                        throw new Error();
                    } catch (v) {
                        var n,
                            i,
                            r,
                            a = /.*at [^(]*\((.*):(.+):(.+)\)$/gi,
                            s = /@([^@]*):(\d+):(\d+)\s*$/gi,
                            o = a.exec(v.stack) || s.exec(v.stack),
                            l = (o && o[1]) || !1,
                            u = (o && o[2]) || !1,
                            c = document.location.href.replace(document.location.hash, ""),
                            d = document.getElementsByTagName("script");
                        l === c && ((n = document.documentElement.outerHTML), (i = new RegExp("(?:[^\\n]+?\\n){0," + (u - 2) + "}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*", "i")), (r = n.replace(i, "$1").trim()));
                        for (var f = 0; f < d.length; f++) {
                            if ("interactive" === d[f].readyState) return d[f];
                            if (d[f].src === l) return d[f];
                            if (l === c && d[f].innerHTML && d[f].innerHTML.trim() === r) return d[f];
                        }
                        return null;
                    }
                }
                return t;
            });
        },
        8925: function (t, e, n) {
            var i = n("c6cd"),
                r = Function.toString;
            "function" != typeof i.inspectSource &&
                (i.inspectSource = function (t) {
                    return r.call(t);
                }),
                (t.exports = i.inspectSource);
        },
        "8aa5": function (t, e, n) {
            "use strict";
            var i = n("6547").charAt;
            t.exports = function (t, e, n) {
                return e + (n ? i(t, e).length : 1);
            };
        },
        "8bbf": function (e, n) {
            e.exports = t;
        },
        "90e3": function (t, e) {
            var n = 0,
                i = Math.random();
            t.exports = function (t) {
                return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++n + i).toString(36);
            };
        },
        9112: function (t, e, n) {
            var i = n("83ab"),
                r = n("9bf2"),
                a = n("5c6c");
            t.exports = i
                ? function (t, e, n) {
                      return r.f(t, e, a(1, n));
                  }
                : function (t, e, n) {
                      return (t[e] = n), t;
                  };
        },
        9263: function (t, e, n) {
            "use strict";
            var i = n("ad6d"),
                r = n("9f7f"),
                a = RegExp.prototype.exec,
                s = String.prototype.replace,
                o = a,
                l = (function () {
                    var t = /a/,
                        e = /b*/g;
                    return a.call(t, "a"), a.call(e, "a"), 0 !== t.lastIndex || 0 !== e.lastIndex;
                })(),
                u = r.UNSUPPORTED_Y || r.BROKEN_CARET,
                c = void 0 !== /()??/.exec("")[1],
                d = l || c || u;
            d &&
                (o = function (t) {
                    var e,
                        n,
                        r,
                        o,
                        d = this,
                        f = u && d.sticky,
                        v = i.call(d),
                        h = d.source,
                        p = 0,
                        y = t;
                    return (
                        f &&
                            ((v = v.replace("y", "")),
                            -1 === v.indexOf("g") && (v += "g"),
                            (y = String(t).slice(d.lastIndex)),
                            d.lastIndex > 0 && (!d.multiline || (d.multiline && "\n" !== t[d.lastIndex - 1])) && ((h = "(?: " + h + ")"), (y = " " + y), p++),
                            (n = new RegExp("^(?:" + h + ")", v))),
                        c && (n = new RegExp("^" + h + "$(?!\\s)", v)),
                        l && (e = d.lastIndex),
                        (r = a.call(f ? n : d, y)),
                        f ? (r ? ((r.input = r.input.slice(p)), (r[0] = r[0].slice(p)), (r.index = d.lastIndex), (d.lastIndex += r[0].length)) : (d.lastIndex = 0)) : l && r && (d.lastIndex = d.global ? r.index + r[0].length : e),
                        c &&
                            r &&
                            r.length > 1 &&
                            s.call(r[0], n, function () {
                                for (o = 1; o < arguments.length - 2; o++) void 0 === arguments[o] && (r[o] = void 0);
                            }),
                        r
                    );
                }),
                (t.exports = o);
        },
        "94ca": function (t, e, n) {
            var i = n("d039"),
                r = /#|\.prototype\./,
                a = function (t, e) {
                    var n = o[s(t)];
                    return n == u || (n != l && ("function" == typeof e ? i(e) : !!e));
                },
                s = (a.normalize = function (t) {
                    return String(t).replace(r, ".").toLowerCase();
                }),
                o = (a.data = {}),
                l = (a.NATIVE = "N"),
                u = (a.POLYFILL = "P");
            t.exports = a;
        },
        "95dd": function (t, e, n) {
            "use strict";
            n("7371");
        },
        9735: function (t, e, n) {
            "use strict";
            n("2170");
        },
        "99af": function (t, e, n) {
            "use strict";
            var i = n("23e7"),
                r = n("d039"),
                a = n("e8b5"),
                s = n("861d"),
                o = n("7b0b"),
                l = n("50c4"),
                u = n("8418"),
                c = n("65f0"),
                d = n("1dde"),
                f = n("b622"),
                v = n("2d00"),
                h = f("isConcatSpreadable"),
                p = 9007199254740991,
                y = "Maximum allowed index exceeded",
                m =
                    v >= 51 ||
                    !r(function () {
                        var t = [];
                        return (t[h] = !1), t.concat()[0] !== t;
                    }),
                g = d("concat"),
                b = function (t) {
                    if (!s(t)) return !1;
                    var e = t[h];
                    return void 0 !== e ? !!e : a(t);
                },
                w = !m || !g;
            i(
                { target: "Array", proto: !0, forced: w },
                {
                    concat: function (t) {
                        var e,
                            n,
                            i,
                            r,
                            a,
                            s = o(this),
                            d = c(s, 0),
                            f = 0;
                        for (e = -1, i = arguments.length; e < i; e++)
                            if (((a = -1 === e ? s : arguments[e]), b(a))) {
                                if (((r = l(a.length)), f + r > p)) throw TypeError(y);
                                for (n = 0; n < r; n++, f++) n in a && u(d, f, a[n]);
                            } else {
                                if (f >= p) throw TypeError(y);
                                u(d, f++, a);
                            }
                        return (d.length = f), d;
                    },
                }
            );
        },
        "9bdd": function (t, e, n) {
            var i = n("825a"),
                r = n("2a62");
            t.exports = function (t, e, n, a) {
                try {
                    return a ? e(i(n)[0], n[1]) : e(n);
                } catch (s) {
                    throw (r(t), s);
                }
            };
        },
        "9bf2": function (t, e, n) {
            var i = n("83ab"),
                r = n("0cfb"),
                a = n("825a"),
                s = n("c04e"),
                o = Object.defineProperty;
            e.f = i
                ? o
                : function (t, e, n) {
                      if ((a(t), (e = s(e, !0)), a(n), r))
                          try {
                              return o(t, e, n);
                          } catch (i) {}
                      if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
                      return "value" in n && (t[e] = n.value), t;
                  };
        },
        "9ed3": function (t, e, n) {
            "use strict";
            var i = n("ae93").IteratorPrototype,
                r = n("7c73"),
                a = n("5c6c"),
                s = n("d44e"),
                o = n("3f8c"),
                l = function () {
                    return this;
                };
            t.exports = function (t, e, n) {
                var u = e + " Iterator";
                return (t.prototype = r(i, { next: a(1, n) })), s(t, u, !1, !0), (o[u] = l), t;
            };
        },
        "9f7f": function (t, e, n) {
            "use strict";
            var i = n("d039");
            function r(t, e) {
                return RegExp(t, e);
            }
            (e.UNSUPPORTED_Y = i(function () {
                var t = r("a", "y");
                return (t.lastIndex = 2), null != t.exec("abcd");
            })),
                (e.BROKEN_CARET = i(function () {
                    var t = r("^r", "gy");
                    return (t.lastIndex = 2), null != t.exec("str");
                }));
        },
        a15b: function (t, e, n) {
            "use strict";
            var i = n("23e7"),
                r = n("44ad"),
                a = n("fc6a"),
                s = n("a640"),
                o = [].join,
                l = r != Object,
                u = s("join", ",");
            i(
                { target: "Array", proto: !0, forced: l || !u },
                {
                    join: function (t) {
                        return o.call(a(this), void 0 === t ? "," : t);
                    },
                }
            );
        },
        a434: function (t, e, n) {
            "use strict";
            var i = n("23e7"),
                r = n("23cb"),
                a = n("a691"),
                s = n("50c4"),
                o = n("7b0b"),
                l = n("65f0"),
                u = n("8418"),
                c = n("1dde"),
                d = c("splice"),
                f = Math.max,
                v = Math.min,
                h = 9007199254740991,
                p = "Maximum allowed length exceeded";
            i(
                { target: "Array", proto: !0, forced: !d },
                {
                    splice: function (t, e) {
                        var n,
                            i,
                            c,
                            d,
                            y,
                            m,
                            g = o(this),
                            b = s(g.length),
                            w = r(t, b),
                            D = arguments.length;
                        if ((0 === D ? (n = i = 0) : 1 === D ? ((n = 0), (i = b - w)) : ((n = D - 2), (i = v(f(a(e), 0), b - w))), b + n - i > h)) throw TypeError(p);
                        for (c = l(g, i), d = 0; d < i; d++) (y = w + d), y in g && u(c, d, g[y]);
                        if (((c.length = i), n < i)) {
                            for (d = w; d < b - i; d++) (y = d + i), (m = d + n), y in g ? (g[m] = g[y]) : delete g[m];
                            for (d = b; d > b - i + n; d--) delete g[d - 1];
                        } else if (n > i) for (d = b - i; d > w; d--) (y = d + i - 1), (m = d + n - 1), y in g ? (g[m] = g[y]) : delete g[m];
                        for (d = 0; d < n; d++) g[d + w] = arguments[d + 2];
                        return (g.length = b - i + n), c;
                    },
                }
            );
        },
        a4d3: function (t, e, n) {
            "use strict";
            var i = n("23e7"),
                r = n("da84"),
                a = n("d066"),
                s = n("c430"),
                o = n("83ab"),
                l = n("4930"),
                u = n("fdbf"),
                c = n("d039"),
                d = n("5135"),
                f = n("e8b5"),
                v = n("861d"),
                h = n("825a"),
                p = n("7b0b"),
                y = n("fc6a"),
                m = n("c04e"),
                g = n("5c6c"),
                b = n("7c73"),
                w = n("df75"),
                D = n("241c"),
                _ = n("057f"),
                E = n("7418"),
                k = n("06cf"),
                S = n("9bf2"),
                x = n("d1e7"),
                C = n("9112"),
                O = n("6eeb"),
                T = n("5692"),
                M = n("f772"),
                j = n("d012"),
                A = n("90e3"),
                W = n("b622"),
                V = n("e538"),
                H = n("746f"),
                I = n("d44e"),
                P = n("69f3"),
                L = n("b727").forEach,
                N = M("hidden"),
                Y = "Symbol",
                F = "prototype",
                R = W("toPrimitive"),
                $ = P.set,
                B = P.getterFor(Y),
                z = Object[F],
                U = r.Symbol,
                G = a("JSON", "stringify"),
                q = k.f,
                X = S.f,
                K = _.f,
                J = x.f,
                Q = T("symbols"),
                Z = T("op-symbols"),
                tt = T("string-to-symbol-registry"),
                et = T("symbol-to-string-registry"),
                nt = T("wks"),
                it = r.QObject,
                rt = !it || !it[F] || !it[F].findChild,
                at =
                    o &&
                    c(function () {
                        return (
                            7 !=
                            b(
                                X({}, "a", {
                                    get: function () {
                                        return X(this, "a", { value: 7 }).a;
                                    },
                                })
                            ).a
                        );
                    })
                        ? function (t, e, n) {
                              var i = q(z, e);
                              i && delete z[e], X(t, e, n), i && t !== z && X(z, e, i);
                          }
                        : X,
                st = function (t, e) {
                    var n = (Q[t] = b(U[F]));
                    return $(n, { type: Y, tag: t, description: e }), o || (n.description = e), n;
                },
                ot = u
                    ? function (t) {
                          return "symbol" == typeof t;
                      }
                    : function (t) {
                          return Object(t) instanceof U;
                      },
                lt = function (t, e, n) {
                    t === z && lt(Z, e, n), h(t);
                    var i = m(e, !0);
                    return h(n), d(Q, i) ? (n.enumerable ? (d(t, N) && t[N][i] && (t[N][i] = !1), (n = b(n, { enumerable: g(0, !1) }))) : (d(t, N) || X(t, N, g(1, {})), (t[N][i] = !0)), at(t, i, n)) : X(t, i, n);
                },
                ut = function (t, e) {
                    h(t);
                    var n = y(e),
                        i = w(n).concat(ht(n));
                    return (
                        L(i, function (e) {
                            (o && !dt.call(n, e)) || lt(t, e, n[e]);
                        }),
                        t
                    );
                },
                ct = function (t, e) {
                    return void 0 === e ? b(t) : ut(b(t), e);
                },
                dt = function (t) {
                    var e = m(t, !0),
                        n = J.call(this, e);
                    return !(this === z && d(Q, e) && !d(Z, e)) && (!(n || !d(this, e) || !d(Q, e) || (d(this, N) && this[N][e])) || n);
                },
                ft = function (t, e) {
                    var n = y(t),
                        i = m(e, !0);
                    if (n !== z || !d(Q, i) || d(Z, i)) {
                        var r = q(n, i);
                        return !r || !d(Q, i) || (d(n, N) && n[N][i]) || (r.enumerable = !0), r;
                    }
                },
                vt = function (t) {
                    var e = K(y(t)),
                        n = [];
                    return (
                        L(e, function (t) {
                            d(Q, t) || d(j, t) || n.push(t);
                        }),
                        n
                    );
                },
                ht = function (t) {
                    var e = t === z,
                        n = K(e ? Z : y(t)),
                        i = [];
                    return (
                        L(n, function (t) {
                            !d(Q, t) || (e && !d(z, t)) || i.push(Q[t]);
                        }),
                        i
                    );
                };
            if (
                (l ||
                    ((U = function () {
                        if (this instanceof U) throw TypeError("Symbol is not a constructor");
                        var t = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0,
                            e = A(t),
                            n = function (t) {
                                this === z && n.call(Z, t), d(this, N) && d(this[N], e) && (this[N][e] = !1), at(this, e, g(1, t));
                            };
                        return o && rt && at(z, e, { configurable: !0, set: n }), st(e, t);
                    }),
                    O(U[F], "toString", function () {
                        return B(this).tag;
                    }),
                    O(U, "withoutSetter", function (t) {
                        return st(A(t), t);
                    }),
                    (x.f = dt),
                    (S.f = lt),
                    (k.f = ft),
                    (D.f = _.f = vt),
                    (E.f = ht),
                    (V.f = function (t) {
                        return st(W(t), t);
                    }),
                    o &&
                        (X(U[F], "description", {
                            configurable: !0,
                            get: function () {
                                return B(this).description;
                            },
                        }),
                        s || O(z, "propertyIsEnumerable", dt, { unsafe: !0 }))),
                i({ global: !0, wrap: !0, forced: !l, sham: !l }, { Symbol: U }),
                L(w(nt), function (t) {
                    H(t);
                }),
                i(
                    { target: Y, stat: !0, forced: !l },
                    {
                        for: function (t) {
                            var e = String(t);
                            if (d(tt, e)) return tt[e];
                            var n = U(e);
                            return (tt[e] = n), (et[n] = e), n;
                        },
                        keyFor: function (t) {
                            if (!ot(t)) throw TypeError(t + " is not a symbol");
                            if (d(et, t)) return et[t];
                        },
                        useSetter: function () {
                            rt = !0;
                        },
                        useSimple: function () {
                            rt = !1;
                        },
                    }
                ),
                i({ target: "Object", stat: !0, forced: !l, sham: !o }, { create: ct, defineProperty: lt, defineProperties: ut, getOwnPropertyDescriptor: ft }),
                i({ target: "Object", stat: !0, forced: !l }, { getOwnPropertyNames: vt, getOwnPropertySymbols: ht }),
                i(
                    {
                        target: "Object",
                        stat: !0,
                        forced: c(function () {
                            E.f(1);
                        }),
                    },
                    {
                        getOwnPropertySymbols: function (t) {
                            return E.f(p(t));
                        },
                    }
                ),
                G)
            ) {
                var pt =
                    !l ||
                    c(function () {
                        var t = U();
                        return "[null]" != G([t]) || "{}" != G({ a: t }) || "{}" != G(Object(t));
                    });
                i(
                    { target: "JSON", stat: !0, forced: pt },
                    {
                        stringify: function (t, e, n) {
                            var i,
                                r = [t],
                                a = 1;
                            while (arguments.length > a) r.push(arguments[a++]);
                            if (((i = e), (v(e) || void 0 !== t) && !ot(t)))
                                return (
                                    f(e) ||
                                        (e = function (t, e) {
                                            if (("function" == typeof i && (e = i.call(this, t, e)), !ot(e))) return e;
                                        }),
                                    (r[1] = e),
                                    G.apply(null, r)
                                );
                        },
                    }
                );
            }
            U[F][R] || C(U[F], R, U[F].valueOf), I(U, Y), (j[N] = !0);
        },
        a630: function (t, e, n) {
            var i = n("23e7"),
                r = n("4df4"),
                a = n("1c7e"),
                s = !a(function (t) {
                    Array.from(t);
                });
            i({ target: "Array", stat: !0, forced: s }, { from: r });
        },
        a640: function (t, e, n) {
            "use strict";
            var i = n("d039");
            t.exports = function (t, e) {
                var n = [][t];
                return (
                    !!n &&
                    i(function () {
                        n.call(
                            null,
                            e ||
                                function () {
                                    throw 1;
                                },
                            1
                        );
                    })
                );
            };
        },
        a691: function (t, e) {
            var n = Math.ceil,
                i = Math.floor;
            t.exports = function (t) {
                return isNaN((t = +t)) ? 0 : (t > 0 ? i : n)(t);
            };
        },
        a9e3: function (t, e, n) {
            "use strict";
            var i = n("83ab"),
                r = n("da84"),
                a = n("94ca"),
                s = n("6eeb"),
                o = n("5135"),
                l = n("c6b6"),
                u = n("7156"),
                c = n("c04e"),
                d = n("d039"),
                f = n("7c73"),
                v = n("241c").f,
                h = n("06cf").f,
                p = n("9bf2").f,
                y = n("58a8").trim,
                m = "Number",
                g = r[m],
                b = g.prototype,
                w = l(f(b)) == m,
                D = function (t) {
                    var e,
                        n,
                        i,
                        r,
                        a,
                        s,
                        o,
                        l,
                        u = c(t, !1);
                    if ("string" == typeof u && u.length > 2)
                        if (((u = y(u)), (e = u.charCodeAt(0)), 43 === e || 45 === e)) {
                            if (((n = u.charCodeAt(2)), 88 === n || 120 === n)) return NaN;
                        } else if (48 === e) {
                            switch (u.charCodeAt(1)) {
                                case 66:
                                case 98:
                                    (i = 2), (r = 49);
                                    break;
                                case 79:
                                case 111:
                                    (i = 8), (r = 55);
                                    break;
                                default:
                                    return +u;
                            }
                            for (a = u.slice(2), s = a.length, o = 0; o < s; o++) if (((l = a.charCodeAt(o)), l < 48 || l > r)) return NaN;
                            return parseInt(a, i);
                        }
                    return +u;
                };
            if (a(m, !g(" 0o1") || !g("0b1") || g("+0x1"))) {
                for (
                    var _,
                        E = function (t) {
                            var e = arguments.length < 1 ? 0 : t,
                                n = this;
                            return n instanceof E &&
                                (w
                                    ? d(function () {
                                          b.valueOf.call(n);
                                      })
                                    : l(n) != m)
                                ? u(new g(D(e)), n, E)
                                : D(e);
                        },
                        k = i ? v(g) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),
                        S = 0;
                    k.length > S;
                    S++
                )
                    o(g, (_ = k[S])) && !o(E, _) && p(E, _, h(g, _));
                (E.prototype = b), (b.constructor = E), s(r, m, E);
            }
        },
        ab13: function (t, e, n) {
            var i = n("b622"),
                r = i("match");
            t.exports = function (t) {
                var e = /./;
                try {
                    "/./"[t](e);
                } catch (n) {
                    try {
                        return (e[r] = !1), "/./"[t](e);
                    } catch (i) {}
                }
                return !1;
            };
        },
        ac1f: function (t, e, n) {
            "use strict";
            var i = n("23e7"),
                r = n("9263");
            i({ target: "RegExp", proto: !0, forced: /./.exec !== r }, { exec: r });
        },
        ad6d: function (t, e, n) {
            "use strict";
            var i = n("825a");
            t.exports = function () {
                var t = i(this),
                    e = "";
                return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.dotAll && (e += "s"), t.unicode && (e += "u"), t.sticky && (e += "y"), e;
            };
        },
        ade3: function (t, e, n) {
            "use strict";
            function i(t, e, n) {
                return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
            }
            n.d(e, "a", function () {
                return i;
            });
        },
        ae93: function (t, e, n) {
            "use strict";
            var i,
                r,
                a,
                s = n("d039"),
                o = n("e163"),
                l = n("9112"),
                u = n("5135"),
                c = n("b622"),
                d = n("c430"),
                f = c("iterator"),
                v = !1,
                h = function () {
                    return this;
                };
            [].keys && ((a = [].keys()), "next" in a ? ((r = o(o(a))), r !== Object.prototype && (i = r)) : (v = !0));
            var p =
                void 0 == i ||
                s(function () {
                    var t = {};
                    return i[f].call(t) !== t;
                });
            p && (i = {}), (d && !p) || u(i, f) || l(i, f, h), (t.exports = { IteratorPrototype: i, BUGGY_SAFARI_ITERATORS: v });
        },
        af03: function (t, e, n) {
            var i = n("d039");
            t.exports = function (t) {
                return i(function () {
                    var e = ""[t]('"');
                    return e !== e.toLowerCase() || e.split('"').length > 3;
                });
            };
        },
        b041: function (t, e, n) {
            "use strict";
            var i = n("00ee"),
                r = n("f5df");
            t.exports = i
                ? {}.toString
                : function () {
                      return "[object " + r(this) + "]";
                  };
        },
        b0c0: function (t, e, n) {
            var i = n("83ab"),
                r = n("9bf2").f,
                a = Function.prototype,
                s = a.toString,
                o = /^\s*function ([^ (]*)/,
                l = "name";
            i &&
                !(l in a) &&
                r(a, l, {
                    configurable: !0,
                    get: function () {
                        try {
                            return s.call(this).match(o)[1];
                        } catch (t) {
                            return "";
                        }
                    },
                });
        },
        b2b6: function (t, e, n) {},
        b622: function (t, e, n) {
            var i = n("da84"),
                r = n("5692"),
                a = n("5135"),
                s = n("90e3"),
                o = n("4930"),
                l = n("fdbf"),
                u = r("wks"),
                c = i.Symbol,
                d = l ? c : (c && c.withoutSetter) || s;
            t.exports = function (t) {
                return (a(u, t) && (o || "string" == typeof u[t])) || (o && a(c, t) ? (u[t] = c[t]) : (u[t] = d("Symbol." + t))), u[t];
            };
        },
        b64b: function (t, e, n) {
            var i = n("23e7"),
                r = n("7b0b"),
                a = n("df75"),
                s = n("d039"),
                o = s(function () {
                    a(1);
                });
            i(
                { target: "Object", stat: !0, forced: o },
                {
                    keys: function (t) {
                        return a(r(t));
                    },
                }
            );
        },
        b727: function (t, e, n) {
            var i = n("0366"),
                r = n("44ad"),
                a = n("7b0b"),
                s = n("50c4"),
                o = n("65f0"),
                l = [].push,
                u = function (t) {
                    var e = 1 == t,
                        n = 2 == t,
                        u = 3 == t,
                        c = 4 == t,
                        d = 6 == t,
                        f = 7 == t,
                        v = 5 == t || d;
                    return function (h, p, y, m) {
                        for (var g, b, w = a(h), D = r(w), _ = i(p, y, 3), E = s(D.length), k = 0, S = m || o, x = e ? S(h, E) : n || f ? S(h, 0) : void 0; E > k; k++)
                            if ((v || k in D) && ((g = D[k]), (b = _(g, k, w)), t))
                                if (e) x[k] = b;
                                else if (b)
                                    switch (t) {
                                        case 3:
                                            return !0;
                                        case 5:
                                            return g;
                                        case 6:
                                            return k;
                                        case 2:
                                            l.call(x, g);
                                    }
                                else
                                    switch (t) {
                                        case 4:
                                            return !1;
                                        case 7:
                                            l.call(x, g);
                                    }
                        return d ? -1 : u || c ? c : x;
                    };
                };
            t.exports = { forEach: u(0), map: u(1), filter: u(2), some: u(3), every: u(4), find: u(5), findIndex: u(6), filterOut: u(7) };
        },
        bb2f: function (t, e, n) {
            var i = n("d039");
            t.exports = !i(function () {
                return Object.isExtensible(Object.preventExtensions({}));
            });
        },
        bee2: function (t, e, n) {
            "use strict";
            function i(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
                }
            }
            function r(t, e, n) {
                return e && i(t.prototype, e), n && i(t, n), t;
            }
            n.d(e, "a", function () {
                return r;
            });
        },
        c04e: function (t, e, n) {
            var i = n("861d");
            t.exports = function (t, e) {
                if (!i(t)) return t;
                var n, r;
                if (e && "function" == typeof (n = t.toString) && !i((r = n.call(t)))) return r;
                if ("function" == typeof (n = t.valueOf) && !i((r = n.call(t)))) return r;
                if (!e && "function" == typeof (n = t.toString) && !i((r = n.call(t)))) return r;
                throw TypeError("Can't convert object to primitive value");
            };
        },
        c430: function (t, e) {
            t.exports = !1;
        },
        c6b6: function (t, e) {
            var n = {}.toString;
            t.exports = function (t) {
                return n.call(t).slice(8, -1);
            };
        },
        c6cd: function (t, e, n) {
            var i = n("da84"),
                r = n("ce4e"),
                a = "__core-js_shared__",
                s = i[a] || r(a, {});
            t.exports = s;
        },
        c740: function (t, e, n) {
            "use strict";
            var i = n("23e7"),
                r = n("b727").findIndex,
                a = n("44d2"),
                s = "findIndex",
                o = !0;
            s in [] &&
                Array(1)[s](function () {
                    o = !1;
                }),
                i(
                    { target: "Array", proto: !0, forced: o },
                    {
                        findIndex: function (t) {
                            return r(this, t, arguments.length > 1 ? arguments[1] : void 0);
                        },
                    }
                ),
                a(s);
        },
        c8ba: function (t, e) {
            var n;
            n = (function () {
                return this;
            })();
            try {
                n = n || new Function("return this")();
            } catch (i) {
                "object" === typeof window && (n = window);
            }
            t.exports = n;
        },
        c96a: function (t, e, n) {
            "use strict";
            var i = n("23e7"),
                r = n("857a"),
                a = n("af03");
            i(
                { target: "String", proto: !0, forced: a("small") },
                {
                    small: function () {
                        return r(this, "small", "", "");
                    },
                }
            );
        },
        ca84: function (t, e, n) {
            var i = n("5135"),
                r = n("fc6a"),
                a = n("4d64").indexOf,
                s = n("d012");
            t.exports = function (t, e) {
                var n,
                    o = r(t),
                    l = 0,
                    u = [];
                for (n in o) !i(s, n) && i(o, n) && u.push(n);
                while (e.length > l) i(o, (n = e[l++])) && (~a(u, n) || u.push(n));
                return u;
            };
        },
        caad: function (t, e, n) {
            "use strict";
            var i = n("23e7"),
                r = n("4d64").includes,
                a = n("44d2");
            i(
                { target: "Array", proto: !0 },
                {
                    includes: function (t) {
                        return r(this, t, arguments.length > 1 ? arguments[1] : void 0);
                    },
                }
            ),
                a("includes");
        },
        cb29: function (t, e, n) {
            var i = n("23e7"),
                r = n("81d5"),
                a = n("44d2");
            i({ target: "Array", proto: !0 }, { fill: r }), a("fill");
        },
        cc12: function (t, e, n) {
            var i = n("da84"),
                r = n("861d"),
                a = i.document,
                s = r(a) && r(a.createElement);
            t.exports = function (t) {
                return s ? a.createElement(t) : {};
            };
        },
        ce4e: function (t, e, n) {
            var i = n("da84"),
                r = n("9112");
            t.exports = function (t, e) {
                try {
                    r(i, t, e);
                } catch (n) {
                    i[t] = e;
                }
                return e;
            };
        },
        d012: function (t, e) {
            t.exports = {};
        },
        d039: function (t, e) {
            t.exports = function (t) {
                try {
                    return !!t();
                } catch (e) {
                    return !0;
                }
            };
        },
        d066: function (t, e, n) {
            var i = n("428f"),
                r = n("da84"),
                a = function (t) {
                    return "function" == typeof t ? t : void 0;
                };
            t.exports = function (t, e) {
                return arguments.length < 2 ? a(i[t]) || a(r[t]) : (i[t] && i[t][e]) || (r[t] && r[t][e]);
            };
        },
        d1e7: function (t, e, n) {
            "use strict";
            var i = {}.propertyIsEnumerable,
                r = Object.getOwnPropertyDescriptor,
                a = r && !i.call({ 1: 2 }, 1);
            e.f = a
                ? function (t) {
                      var e = r(this, t);
                      return !!e && e.enumerable;
                  }
                : i;
        },
        d28b: function (t, e, n) {
            var i = n("746f");
            i("iterator");
        },
        d2bb: function (t, e, n) {
            var i = n("825a"),
                r = n("3bbe");
            t.exports =
                Object.setPrototypeOf ||
                ("__proto__" in {}
                    ? (function () {
                          var t,
                              e = !1,
                              n = {};
                          try {
                              (t = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set), t.call(n, []), (e = n instanceof Array);
                          } catch (a) {}
                          return function (n, a) {
                              return i(n), r(a), e ? t.call(n, a) : (n.__proto__ = a), n;
                          };
                      })()
                    : void 0);
        },
        d3b7: function (t, e, n) {
            var i = n("00ee"),
                r = n("6eeb"),
                a = n("b041");
            i || r(Object.prototype, "toString", a, { unsafe: !0 });
        },
        d44e: function (t, e, n) {
            var i = n("9bf2").f,
                r = n("5135"),
                a = n("b622"),
                s = a("toStringTag");
            t.exports = function (t, e, n) {
                t && !r((t = n ? t : t.prototype), s) && i(t, s, { configurable: !0, value: e });
            };
        },
        d4ec: function (t, e, n) {
            "use strict";
            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }
            n.d(e, "a", function () {
                return i;
            });
        },
        d58f: function (t, e, n) {
            var i = n("1c0b"),
                r = n("7b0b"),
                a = n("44ad"),
                s = n("50c4"),
                o = function (t) {
                    return function (e, n, o, l) {
                        i(n);
                        var u = r(e),
                            c = a(u),
                            d = s(u.length),
                            f = t ? d - 1 : 0,
                            v = t ? -1 : 1;
                        if (o < 2)
                            while (1) {
                                if (f in c) {
                                    (l = c[f]), (f += v);
                                    break;
                                }
                                if (((f += v), t ? f < 0 : d <= f)) throw TypeError("Reduce of empty array with no initial value");
                            }
                        for (; t ? f >= 0 : d > f; f += v) f in c && (l = n(l, c[f], f, u));
                        return l;
                    };
                };
            t.exports = { left: o(!1), right: o(!0) };
        },
        d784: function (t, e, n) {
            "use strict";
            n("ac1f");
            var i = n("6eeb"),
                r = n("d039"),
                a = n("b622"),
                s = n("9263"),
                o = n("9112"),
                l = a("species"),
                u = !r(function () {
                    var t = /./;
                    return (
                        (t.exec = function () {
                            var t = [];
                            return (t.groups = { a: "7" }), t;
                        }),
                        "7" !== "".replace(t, "$<a>")
                    );
                }),
                c = (function () {
                    return "$0" === "a".replace(/./, "$0");
                })(),
                d = a("replace"),
                f = (function () {
                    return !!/./[d] && "" === /./[d]("a", "$0");
                })(),
                v = !r(function () {
                    var t = /(?:)/,
                        e = t.exec;
                    t.exec = function () {
                        return e.apply(this, arguments);
                    };
                    var n = "ab".split(t);
                    return 2 !== n.length || "a" !== n[0] || "b" !== n[1];
                });
            t.exports = function (t, e, n, d) {
                var h = a(t),
                    p = !r(function () {
                        var e = {};
                        return (
                            (e[h] = function () {
                                return 7;
                            }),
                            7 != ""[t](e)
                        );
                    }),
                    y =
                        p &&
                        !r(function () {
                            var e = !1,
                                n = /a/;
                            return (
                                "split" === t &&
                                    ((n = {}),
                                    (n.constructor = {}),
                                    (n.constructor[l] = function () {
                                        return n;
                                    }),
                                    (n.flags = ""),
                                    (n[h] = /./[h])),
                                (n.exec = function () {
                                    return (e = !0), null;
                                }),
                                n[h](""),
                                !e
                            );
                        });
                if (!p || !y || ("replace" === t && (!u || !c || f)) || ("split" === t && !v)) {
                    var m = /./[h],
                        g = n(
                            h,
                            ""[t],
                            function (t, e, n, i, r) {
                                return e.exec === s ? (p && !r ? { done: !0, value: m.call(e, n, i) } : { done: !0, value: t.call(n, e, i) }) : { done: !1 };
                            },
                            { REPLACE_KEEPS_$0: c, REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: f }
                        ),
                        b = g[0],
                        w = g[1];
                    i(String.prototype, t, b),
                        i(
                            RegExp.prototype,
                            h,
                            2 == e
                                ? function (t, e) {
                                      return w.call(t, this, e);
                                  }
                                : function (t) {
                                      return w.call(t, this);
                                  }
                        );
                }
                d && o(RegExp.prototype[h], "sham", !0);
            };
        },
        d81d: function (t, e, n) {
            "use strict";
            var i = n("23e7"),
                r = n("b727").map,
                a = n("1dde"),
                s = a("map");
            i(
                { target: "Array", proto: !0, forced: !s },
                {
                    map: function (t) {
                        return r(this, t, arguments.length > 1 ? arguments[1] : void 0);
                    },
                }
            );
        },
        da84: function (t, e, n) {
            (function (e) {
                var n = function (t) {
                    return t && t.Math == Math && t;
                };
                t.exports =
                    n("object" == typeof globalThis && globalThis) ||
                    n("object" == typeof window && window) ||
                    n("object" == typeof self && self) ||
                    n("object" == typeof e && e) ||
                    (function () {
                        return this;
                    })() ||
                    Function("return this")();
            }.call(this, n("c8ba")));
        },
        dbb4: function (t, e, n) {
            var i = n("23e7"),
                r = n("83ab"),
                a = n("56ef"),
                s = n("fc6a"),
                o = n("06cf"),
                l = n("8418");
            i(
                { target: "Object", stat: !0, sham: !r },
                {
                    getOwnPropertyDescriptors: function (t) {
                        var e,
                            n,
                            i = s(t),
                            r = o.f,
                            u = a(i),
                            c = {},
                            d = 0;
                        while (u.length > d) (n = r(i, (e = u[d++]))), void 0 !== n && l(c, e, n);
                        return c;
                    },
                }
            );
        },
        dc34: function (t, e, n) {
            "use strict";
            n("b2b6");
        },
        ddb0: function (t, e, n) {
            var i = n("da84"),
                r = n("fdbc"),
                a = n("e260"),
                s = n("9112"),
                o = n("b622"),
                l = o("iterator"),
                u = o("toStringTag"),
                c = a.values;
            for (var d in r) {
                var f = i[d],
                    v = f && f.prototype;
                if (v) {
                    if (v[l] !== c)
                        try {
                            s(v, l, c);
                        } catch (p) {
                            v[l] = c;
                        }
                    if ((v[u] || s(v, u, d), r[d]))
                        for (var h in a)
                            if (v[h] !== a[h])
                                try {
                                    s(v, h, a[h]);
                                } catch (p) {
                                    v[h] = a[h];
                                }
                }
            }
        },
        df75: function (t, e, n) {
            var i = n("ca84"),
                r = n("7839");
            t.exports =
                Object.keys ||
                function (t) {
                    return i(t, r);
                };
        },
        e01a: function (t, e, n) {
            "use strict";
            var i = n("23e7"),
                r = n("83ab"),
                a = n("da84"),
                s = n("5135"),
                o = n("861d"),
                l = n("9bf2").f,
                u = n("e893"),
                c = a.Symbol;
            if (r && "function" == typeof c && (!("description" in c.prototype) || void 0 !== c().description)) {
                var d = {},
                    f = function () {
                        var t = arguments.length < 1 || void 0 === arguments[0] ? void 0 : String(arguments[0]),
                            e = this instanceof f ? new c(t) : void 0 === t ? c() : c(t);
                        return "" === t && (d[e] = !0), e;
                    };
                u(f, c);
                var v = (f.prototype = c.prototype);
                v.constructor = f;
                var h = v.toString,
                    p = "Symbol(test)" == String(c("test")),
                    y = /^Symbol\((.*)\)[^)]+$/;
                l(v, "description", {
                    configurable: !0,
                    get: function () {
                        var t = o(this) ? this.valueOf() : this,
                            e = h.call(t);
                        if (s(d, t)) return "";
                        var n = p ? e.slice(7, -1) : e.replace(y, "$1");
                        return "" === n ? void 0 : n;
                    },
                }),
                    i({ global: !0, forced: !0 }, { Symbol: f });
            }
        },
        e163: function (t, e, n) {
            var i = n("5135"),
                r = n("7b0b"),
                a = n("f772"),
                s = n("e177"),
                o = a("IE_PROTO"),
                l = Object.prototype;
            t.exports = s
                ? Object.getPrototypeOf
                : function (t) {
                      return (t = r(t)), i(t, o) ? t[o] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? l : null;
                  };
        },
        e177: function (t, e, n) {
            var i = n("d039");
            t.exports = !i(function () {
                function t() {}
                return (t.prototype.constructor = null), Object.getPrototypeOf(new t()) !== t.prototype;
            });
        },
        e260: function (t, e, n) {
            "use strict";
            var i = n("fc6a"),
                r = n("44d2"),
                a = n("3f8c"),
                s = n("69f3"),
                o = n("7dd0"),
                l = "Array Iterator",
                u = s.set,
                c = s.getterFor(l);
            (t.exports = o(
                Array,
                "Array",
                function (t, e) {
                    u(this, { type: l, target: i(t), index: 0, kind: e });
                },
                function () {
                    var t = c(this),
                        e = t.target,
                        n = t.kind,
                        i = t.index++;
                    return !e || i >= e.length ? ((t.target = void 0), { value: void 0, done: !0 }) : "keys" == n ? { value: i, done: !1 } : "values" == n ? { value: e[i], done: !1 } : { value: [i, e[i]], done: !1 };
                },
                "values"
            )),
                (a.Arguments = a.Array),
                r("keys"),
                r("values"),
                r("entries");
        },
        e2cc: function (t, e, n) {
            var i = n("6eeb");
            t.exports = function (t, e, n) {
                for (var r in e) i(t, r, e[r], n);
                return t;
            };
        },
        e439: function (t, e, n) {
            var i = n("23e7"),
                r = n("d039"),
                a = n("fc6a"),
                s = n("06cf").f,
                o = n("83ab"),
                l = r(function () {
                    s(1);
                }),
                u = !o || l;
            i(
                { target: "Object", stat: !0, forced: u, sham: !o },
                {
                    getOwnPropertyDescriptor: function (t, e) {
                        return s(a(t), e);
                    },
                }
            );
        },
        e538: function (t, e, n) {
            var i = n("b622");
            e.f = i;
        },
        e893: function (t, e, n) {
            var i = n("5135"),
                r = n("56ef"),
                a = n("06cf"),
                s = n("9bf2");
            t.exports = function (t, e) {
                for (var n = r(e), o = s.f, l = a.f, u = 0; u < n.length; u++) {
                    var c = n[u];
                    i(t, c) || o(t, c, l(e, c));
                }
            };
        },
        e8b5: function (t, e, n) {
            var i = n("c6b6");
            t.exports =
                Array.isArray ||
                function (t) {
                    return "Array" == i(t);
                };
        },
        e95a: function (t, e, n) {
            var i = n("b622"),
                r = n("3f8c"),
                a = i("iterator"),
                s = Array.prototype;
            t.exports = function (t) {
                return void 0 !== t && (r.Array === t || s[a] === t);
            };
        },
        f183: function (t, e, n) {
            var i = n("d012"),
                r = n("861d"),
                a = n("5135"),
                s = n("9bf2").f,
                o = n("90e3"),
                l = n("bb2f"),
                u = o("meta"),
                c = 0,
                d =
                    Object.isExtensible ||
                    function () {
                        return !0;
                    },
                f = function (t) {
                    s(t, u, { value: { objectID: "O" + ++c, weakData: {} } });
                },
                v = function (t, e) {
                    if (!r(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                    if (!a(t, u)) {
                        if (!d(t)) return "F";
                        if (!e) return "E";
                        f(t);
                    }
                    return t[u].objectID;
                },
                h = function (t, e) {
                    if (!a(t, u)) {
                        if (!d(t)) return !0;
                        if (!e) return !1;
                        f(t);
                    }
                    return t[u].weakData;
                },
                p = function (t) {
                    return l && y.REQUIRED && d(t) && !a(t, u) && f(t), t;
                },
                y = (t.exports = { REQUIRED: !1, fastKey: v, getWeakData: h, onFreeze: p });
            i[u] = !0;
        },
        f5df: function (t, e, n) {
            var i = n("00ee"),
                r = n("c6b6"),
                a = n("b622"),
                s = a("toStringTag"),
                o =
                    "Arguments" ==
                    r(
                        (function () {
                            return arguments;
                        })()
                    ),
                l = function (t, e) {
                    try {
                        return t[e];
                    } catch (n) {}
                };
            t.exports = i
                ? r
                : function (t) {
                      var e, n, i;
                      return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (n = l((e = Object(t)), s)) ? n : o ? r(e) : "Object" == (i = r(e)) && "function" == typeof e.callee ? "Arguments" : i;
                  };
        },
        f772: function (t, e, n) {
            var i = n("5692"),
                r = n("90e3"),
                a = i("keys");
            t.exports = function (t) {
                return a[t] || (a[t] = r(t));
            };
        },
        fb15: function (t, e, n) {
            "use strict";
            if ((n.r(e), "undefined" !== typeof window)) {
                var i = window.document.currentScript,
                    r = n("8875");
                (i = r()), "currentScript" in document || Object.defineProperty(document, "currentScript", { get: r });
                var a = i && i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);
                a && (n.p = a[1]);
            }
            var s = function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n(
                        "div",
                        { ref: "vuecal", staticClass: "vuecal__flex vuecal", class: t.cssClasses, attrs: { column: "", lang: t.locale } },
                        [
                            n("vuecal-header", {
                                attrs: {
                                    options: t.$props,
                                    "edit-events": t.editEvents,
                                    "view-props": { views: t.views, weekDaysInHeader: t.weekDaysInHeader },
                                    "week-days": t.weekDays,
                                    "has-splits": t.hasSplits,
                                    "day-splits": t.daySplits,
                                    "switch-to-narrower-view": t.switchToNarrowerView,
                                },
                                scopedSlots: t._u(
                                    [
                                        {
                                            key: "arrow-prev",
                                            fn: function () {
                                                return [t._t("arrow-prev", [t._v(" "), n("i", { staticClass: "angle" }), t._v(" ")])];
                                            },
                                            proxy: !0,
                                        },
                                        {
                                            key: "arrow-next",
                                            fn: function () {
                                                return [t._t("arrow-next", [t._v(" "), n("i", { staticClass: "angle" }), t._v(" ")])];
                                            },
                                            proxy: !0,
                                        },
                                        {
                                            key: "today-button",
                                            fn: function () {
                                                return [t._t("today-button", [n("span", { staticClass: "default" }, [t._v(t._s(t.texts.today))])])];
                                            },
                                            proxy: !0,
                                        },
                                        {
                                            key: "title",
                                            fn: function () {
                                                return [t._t("title", [t._v(t._s(t.viewTitle))], { title: t.viewTitle, view: t.view })];
                                            },
                                            proxy: !0,
                                        },
                                        {
                                            key: "weekday-heading",
                                            fn: function (e) {
                                                var n = e.heading,
                                                    i = e.view;
                                                return [t._t("weekday-heading", null, { heading: n, view: i })];
                                            },
                                        },
                                        {
                                            key: "split-label",
                                            fn: function (e) {
                                                var n = e.split;
                                                return [t._t("split-label", null, { split: n, view: t.view.id })];
                                            },
                                        },
                                    ],
                                    null,
                                    !0
                                ),
                            }),
                            t.hideBody
                                ? t._e()
                                : n(
                                      "div",
                                      { staticClass: "vuecal__flex vuecal__body", attrs: { grow: "" } },
                                      [
                                          n("transition", { attrs: { name: "slide-fade--" + t.transitionDirection, appear: t.transitions } }, [
                                              n(
                                                  "div",
                                                  { key: !!t.transitions && t.view.id, staticClass: "vuecal__flex", staticStyle: { "min-width": "100%" }, attrs: { column: "" } },
                                                  [
                                                      t.showAllDayEvents && t.hasTimeColumn && (!t.cellOrSplitMinWidth || (t.isDayView && !t.minSplitWidth))
                                                          ? n(
                                                                "all-day-bar",
                                                                t._b(
                                                                    {
                                                                        scopedSlots: t._u(
                                                                            [
                                                                                {
                                                                                    key: "event",
                                                                                    fn: function (e) {
                                                                                        var i = e.event,
                                                                                            r = e.view;
                                                                                        return [
                                                                                            t._t(
                                                                                                "event",
                                                                                                [
                                                                                                    t.editEvents.title && i.titleEditable
                                                                                                        ? n("div", {
                                                                                                              staticClass: "vuecal__event-title vuecal__event-title--edit",
                                                                                                              attrs: { contenteditable: "" },
                                                                                                              domProps: { innerHTML: t._s(i.title) },
                                                                                                              on: {
                                                                                                                  blur: function (e) {
                                                                                                                      return t.onEventTitleBlur(e, i);
                                                                                                                  },
                                                                                                              },
                                                                                                          })
                                                                                                        : i.title
                                                                                                        ? n("div", { staticClass: "vuecal__event-title", domProps: { innerHTML: t._s(i.title) } })
                                                                                                        : t._e(),
                                                                                                    !i.content || t.hasShortEvents || t.isShortMonthView
                                                                                                        ? t._e()
                                                                                                        : n("div", { staticClass: "vuecal__event-content", domProps: { innerHTML: t._s(i.content) } }),
                                                                                                ],
                                                                                                { view: r, event: i }
                                                                                            ),
                                                                                        ];
                                                                                    },
                                                                                },
                                                                            ],
                                                                            null,
                                                                            !0
                                                                        ),
                                                                    },
                                                                    "all-day-bar",
                                                                    t.allDayBar,
                                                                    !1
                                                                )
                                                            )
                                                          : t._e(),
                                                      n("div", { staticClass: "vuecal__bg", class: { vuecal__flex: !t.hasTimeColumn }, attrs: { column: "" } }, [
                                                          n("div", { staticClass: "vuecal__flex", attrs: { row: "", grow: "" } }, [
                                                              t.hasTimeColumn
                                                                  ? n(
                                                                        "div",
                                                                        { staticClass: "vuecal__time-column" },
                                                                        [
                                                                            t.showAllDayEvents && t.cellOrSplitMinWidth && (!t.isDayView || t.minSplitWidth)
                                                                                ? n("div", { staticClass: "vuecal__all-day-text", style: { height: t.allDayBar.height } }, [n("span", [t._v(t._s(t.texts.allDay))])])
                                                                                : t._e(),
                                                                            t._l(t.timeCells, function (e, i) {
                                                                                return n(
                                                                                    "div",
                                                                                    { key: i, staticClass: "vuecal__time-cell", style: "height: " + t.timeCellHeight + "px" },
                                                                                    [
                                                                                        t._t(
                                                                                            "time-cell",
                                                                                            [n("span", { staticClass: "vuecal__time-cell-line" }), n("span", { staticClass: "vuecal__time-cell-label" }, [t._v(t._s(e.label))])],
                                                                                            { hours: e.hours, minutes: e.minutes }
                                                                                        ),
                                                                                    ],
                                                                                    2
                                                                                );
                                                                            }),
                                                                        ],
                                                                        2
                                                                    )
                                                                  : t._e(),
                                                              t.showWeekNumbers && t.isMonthView
                                                                  ? n(
                                                                        "div",
                                                                        { staticClass: "vuecal__flex vuecal__week-numbers", attrs: { column: "" } },
                                                                        t._l(6, function (e) {
                                                                            return n(
                                                                                "div",
                                                                                { key: e, staticClass: "vuecal__flex vuecal__week-number-cell", attrs: { grow: "" } },
                                                                                [t._t("week-number-cell", [t._v(t._s(t.getWeekNumber(e - 1)))], { week: t.getWeekNumber(e - 1) })],
                                                                                2
                                                                            );
                                                                        }),
                                                                        0
                                                                    )
                                                                  : t._e(),
                                                              n(
                                                                  "div",
                                                                  {
                                                                      staticClass: "vuecal__flex vuecal__cells",
                                                                      class: t.view.id + "-view",
                                                                      attrs: { grow: "", wrap: !t.cellOrSplitMinWidth || !t.isWeekView, column: !!t.cellOrSplitMinWidth },
                                                                  },
                                                                  [
                                                                      t.cellOrSplitMinWidth && t.isWeekView
                                                                          ? n("weekdays-headings", {
                                                                                style: t.cellOrSplitMinWidth ? "min-width: " + t.cellOrSplitMinWidth + "px" : "",
                                                                                attrs: { "transition-direction": t.transitionDirection, "week-days": t.weekDays, "switch-to-narrower-view": t.switchToNarrowerView },
                                                                                scopedSlots: t._u(
                                                                                    [
                                                                                        {
                                                                                            key: "weekday-heading",
                                                                                            fn: function (e) {
                                                                                                var n = e.heading,
                                                                                                    i = e.view;
                                                                                                return [t._t("weekday-heading", null, { heading: n, view: i })];
                                                                                            },
                                                                                        },
                                                                                        {
                                                                                            key: "split-label",
                                                                                            fn: function (e) {
                                                                                                var n = e.split;
                                                                                                return [t._t("split-label", null, { split: n, view: t.view.id })];
                                                                                            },
                                                                                        },
                                                                                    ],
                                                                                    null,
                                                                                    !0
                                                                                ),
                                                                            })
                                                                          : t.hasSplits && t.stickySplitLabels && t.minSplitWidth
                                                                          ? n(
                                                                                "div",
                                                                                { staticClass: "vuecal__flex vuecal__split-days-headers", style: t.cellOrSplitMinWidth ? "min-width: " + t.cellOrSplitMinWidth + "px" : "" },
                                                                                t._l(t.daySplits, function (e, i) {
                                                                                    return n(
                                                                                        "div",
                                                                                        { key: i, staticClass: "day-split-header", class: e.class || !1 },
                                                                                        [t._t("split-label", [t._v(t._s(e.label))], { split: e, view: t.view.id })],
                                                                                        2
                                                                                    );
                                                                                }),
                                                                                0
                                                                            )
                                                                          : t._e(),
                                                                      t.showAllDayEvents && t.hasTimeColumn && ((t.isWeekView && t.cellOrSplitMinWidth) || (t.isDayView && t.hasSplits && t.minSplitWidth))
                                                                          ? n(
                                                                                "all-day-bar",
                                                                                t._b(
                                                                                    {
                                                                                        scopedSlots: t._u(
                                                                                            [
                                                                                                {
                                                                                                    key: "event",
                                                                                                    fn: function (e) {
                                                                                                        var i = e.event,
                                                                                                            r = e.view;
                                                                                                        return [
                                                                                                            t._t(
                                                                                                                "event",
                                                                                                                [
                                                                                                                    t.editEvents.title && i.titleEditable
                                                                                                                        ? n("div", {
                                                                                                                              staticClass: "vuecal__event-title vuecal__event-title--edit",
                                                                                                                              attrs: { contenteditable: "" },
                                                                                                                              domProps: { innerHTML: t._s(i.title) },
                                                                                                                              on: {
                                                                                                                                  blur: function (e) {
                                                                                                                                      return t.onEventTitleBlur(e, i);
                                                                                                                                  },
                                                                                                                              },
                                                                                                                          })
                                                                                                                        : i.title
                                                                                                                        ? n("div", { staticClass: "vuecal__event-title", domProps: { innerHTML: t._s(i.title) } })
                                                                                                                        : t._e(),
                                                                                                                    !i.content || t.hasShortEvents || t.isShortMonthView
                                                                                                                        ? t._e()
                                                                                                                        : n("div", { staticClass: "vuecal__event-content", domProps: { innerHTML: t._s(i.content) } }),
                                                                                                                ],
                                                                                                                { view: r, event: i }
                                                                                                            ),
                                                                                                        ];
                                                                                                    },
                                                                                                },
                                                                                            ],
                                                                                            null,
                                                                                            !0
                                                                                        ),
                                                                                    },
                                                                                    "all-day-bar",
                                                                                    t.allDayBar,
                                                                                    !1
                                                                                )
                                                                            )
                                                                          : t._e(),
                                                                      n(
                                                                          "div",
                                                                          {
                                                                              ref: "cells",
                                                                              staticClass: "vuecal__flex",
                                                                              style: t.cellOrSplitMinWidth ? "min-width: " + t.cellOrSplitMinWidth + "px" : "",
                                                                              attrs: { grow: "", wrap: !t.cellOrSplitMinWidth || !t.isWeekView },
                                                                          },
                                                                          t._l(t.viewCells, function (e, i) {
                                                                              return n(
                                                                                  "vuecal-cell",
                                                                                  {
                                                                                      key: i,
                                                                                      attrs: {
                                                                                          options: t.$props,
                                                                                          "edit-events": t.editEvents,
                                                                                          data: e,
                                                                                          "cell-width": t.hideWeekdays.length && (t.isWeekView || t.isMonthView) && t.cellWidth,
                                                                                          "min-timestamp": t.minTimestamp,
                                                                                          "max-timestamp": t.maxTimestamp,
                                                                                          "cell-splits": (t.hasSplits && t.daySplits) || [],
                                                                                      },
                                                                                      scopedSlots: t._u(
                                                                                          [
                                                                                              {
                                                                                                  key: "cell-content",
                                                                                                  fn: function (i) {
                                                                                                      var r = i.events,
                                                                                                          a = i.split,
                                                                                                          s = i.selectCell;
                                                                                                      return [
                                                                                                          t._t(
                                                                                                              "cell-content",
                                                                                                              [
                                                                                                                  a && !t.stickySplitLabels ? n("div", { staticClass: "split-label", domProps: { innerHTML: t._s(a.label) } }) : t._e(),
                                                                                                                  e.content ? n("div", { staticClass: "vuecal__cell-date", domProps: { innerHTML: t._s(e.content) } }) : t._e(),
                                                                                                                  ((t.isMonthView && !t.eventsOnMonthView) || (t.isYearsOrYearView && t.eventsCountOnYearView)) && r.length
                                                                                                                      ? n(
                                                                                                                            "div",
                                                                                                                            { staticClass: "vuecal__cell-events-count" },
                                                                                                                            [t._t("events-count", [t._v(t._s(r.length))], { view: t.view, events: r })],
                                                                                                                            2
                                                                                                                        )
                                                                                                                      : t._e(),
                                                                                                                  !t.cellOrSplitHasEvents(r, a) && t.isWeekOrDayView
                                                                                                                      ? n("div", { staticClass: "vuecal__no-event" }, [t._t("no-event", [t._v(t._s(t.texts.noEvent))])], 2)
                                                                                                                      : t._e(),
                                                                                                              ],
                                                                                                              { cell: e, view: t.view, goNarrower: s, events: r }
                                                                                                          ),
                                                                                                      ];
                                                                                                  },
                                                                                              },
                                                                                              {
                                                                                                  key: "event",
                                                                                                  fn: function (i) {
                                                                                                      var r = i.event,
                                                                                                          a = i.view;
                                                                                                      return [
                                                                                                          t._t(
                                                                                                              "event",
                                                                                                              [
                                                                                                                  t.editEvents.title && r.titleEditable
                                                                                                                      ? n("div", {
                                                                                                                            staticClass: "vuecal__event-title vuecal__event-title--edit",
                                                                                                                            attrs: { contenteditable: "" },
                                                                                                                            domProps: { innerHTML: t._s(r.title) },
                                                                                                                            on: {
                                                                                                                                blur: function (e) {
                                                                                                                                    return t.onEventTitleBlur(e, r);
                                                                                                                                },
                                                                                                                            },
                                                                                                                        })
                                                                                                                      : r.title
                                                                                                                      ? n("div", { staticClass: "vuecal__event-title", domProps: { innerHTML: t._s(r.title) } })
                                                                                                                      : t._e(),
                                                                                                                  !t.time || r.allDay || (t.isMonthView && (r.allDay || "short" === t.showAllDayEvents)) || t.isShortMonthView
                                                                                                                      ? t._e()
                                                                                                                      : n("div", { staticClass: "vuecal__event-time" }, [
                                                                                                                            t._v(t._s(t.utils.date.formatTime(r.start, t.TimeFormat))),
                                                                                                                            r.endTimeMinutes ? n("span", [t._v(" - " + t._s(t.utils.date.formatTime(r.end, t.TimeFormat, null, !0)))]) : t._e(),
                                                                                                                            r.daysCount > 1 && (r.segments[e.formattedDate] || {}).isFirstDay
                                                                                                                                ? n("small", { staticClass: "days-to-end" }, [
                                                                                                                                      t._v(" +" + t._s(r.daysCount - 1) + t._s((t.texts.day[0] || "").toLowerCase())),
                                                                                                                                  ])
                                                                                                                                : t._e(),
                                                                                                                        ]),
                                                                                                                  !r.content || (t.isMonthView && r.allDay && "short" === t.showAllDayEvents) || t.isShortMonthView
                                                                                                                      ? t._e()
                                                                                                                      : n("div", { staticClass: "vuecal__event-content", domProps: { innerHTML: t._s(r.content) } }),
                                                                                                              ],
                                                                                                              { view: a, event: r }
                                                                                                          ),
                                                                                                      ];
                                                                                                  },
                                                                                              },
                                                                                          ],
                                                                                          null,
                                                                                          !0
                                                                                      ),
                                                                                  },
                                                                                  [t._t("default")],
                                                                                  2
                                                                              );
                                                                          }),
                                                                          1
                                                                      ),
                                                                  ],
                                                                  1
                                                              ),
                                                          ]),
                                                      ]),
                                                  ],
                                                  1
                                              ),
                                          ]),
                                          t.ready ? t._e() : n("div", { staticClass: "vuecal__scrollbar-check" }, [n("div")]),
                                      ],
                                      1
                                  ),
                        ],
                        1
                    );
                },
                o = [],
                l = n("ade3");
            function u(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
                return i;
            }
            function c(t) {
                if (Array.isArray(t)) return u(t);
            }
            n("a4d3"), n("e01a"), n("d3b7"), n("d28b"), n("3ca3"), n("ddb0"), n("a630");
            function d(t) {
                if ("undefined" !== typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
            }
            n("fb6a"), n("b0c0");
            function f(t, e) {
                if (t) {
                    if ("string" === typeof t) return u(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? u(t, e) : void 0;
                }
            }
            function v() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            function h(t) {
                return c(t) || d(t) || f(t) || v();
            }
            function p(t) {
                return (
                    (p =
                        "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
                            ? function (t) {
                                  return typeof t;
                              }
                            : function (t) {
                                  return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                              }),
                    p(t)
                );
            }
            var y,
                m,
                g,
                b,
                w,
                D,
                _,
                E = n("5530"),
                k = (n("cb29"), n("a9e3"), n("caad"), n("99af"), n("a15b"), n("2532"), n("d81d"), n("4de4"), n("159b"), n("7db0"), n("1276"), n("ac1f"), n("5319"), n("38cf"), n("b64b"), n("c96a"), n("13d5"), n("d4ec")),
                S = n("bee2"),
                x = (n("25f0"), {}),
                C = {},
                O = (function () {
                    function t(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        Object(k["a"])(this, t),
                            Object(l["a"])(this, "texts", {}),
                            Object(l["a"])(this, "dateToMinutes", function (t) {
                                return 60 * t.getHours() + t.getMinutes();
                            }),
                            (b = this),
                            (this._texts = e),
                            n || !Date || Date.prototype.addDays || this._initDatePrototypes();
                    }
                    return (
                        Object(S["a"])(t, [
                            {
                                key: "_initDatePrototypes",
                                value: function () {
                                    (Date.prototype.addDays = function (t) {
                                        return b.addDays(this, t);
                                    }),
                                        (Date.prototype.subtractDays = function (t) {
                                            return b.subtractDays(this, t);
                                        }),
                                        (Date.prototype.addHours = function (t) {
                                            return b.addHours(this, t);
                                        }),
                                        (Date.prototype.subtractHours = function (t) {
                                            return b.subtractHours(this, t);
                                        }),
                                        (Date.prototype.addMinutes = function (t) {
                                            return b.addMinutes(this, t);
                                        }),
                                        (Date.prototype.subtractMinutes = function (t) {
                                            return b.subtractMinutes(this, t);
                                        }),
                                        (Date.prototype.getWeek = function () {
                                            return b.getWeek(this);
                                        }),
                                        (Date.prototype.isToday = function () {
                                            return b.isToday(this);
                                        }),
                                        (Date.prototype.isLeapYear = function () {
                                            return b.isLeapYear(this);
                                        }),
                                        (Date.prototype.format = function () {
                                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "YYYY-MM-DD";
                                            return b.formatDate(this, t);
                                        }),
                                        (Date.prototype.formatTime = function () {
                                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "HH:mm";
                                            return b.formatTime(this, t);
                                        });
                                },
                            },
                            {
                                key: "removePrototypes",
                                value: function () {
                                    delete Date.prototype.addDays,
                                        delete Date.prototype.subtractDays,
                                        delete Date.prototype.addHours,
                                        delete Date.prototype.subtractHours,
                                        delete Date.prototype.addMinutes,
                                        delete Date.prototype.subtractMinutes,
                                        delete Date.prototype.getWeek,
                                        delete Date.prototype.isToday,
                                        delete Date.prototype.isLeapYear,
                                        delete Date.prototype.format,
                                        delete Date.prototype.formatTime;
                                },
                            },
                            {
                                key: "updateTexts",
                                value: function (t) {
                                    this._texts = t;
                                },
                            },
                            {
                                key: "_todayFormatted",
                                value: function () {
                                    return m !== new Date().getDate() && ((y = new Date()), (m = y.getDate()), (g = "".concat(y.getFullYear(), "-").concat(y.getMonth(), "-").concat(y.getDate()))), g;
                                },
                            },
                            {
                                key: "addDays",
                                value: function (t, e) {
                                    var n = new Date(t.valueOf());
                                    return n.setDate(n.getDate() + e), n;
                                },
                            },
                            {
                                key: "subtractDays",
                                value: function (t, e) {
                                    var n = new Date(t.valueOf());
                                    return n.setDate(n.getDate() - e), n;
                                },
                            },
                            {
                                key: "addHours",
                                value: function (t, e) {
                                    var n = new Date(t.valueOf());
                                    return n.setHours(n.getHours() + e), n;
                                },
                            },
                            {
                                key: "subtractHours",
                                value: function (t, e) {
                                    var n = new Date(t.valueOf());
                                    return n.setHours(n.getHours() - e), n;
                                },
                            },
                            {
                                key: "addMinutes",
                                value: function (t, e) {
                                    var n = new Date(t.valueOf());
                                    return n.setMinutes(n.getMinutes() + e), n;
                                },
                            },
                            {
                                key: "subtractMinutes",
                                value: function (t, e) {
                                    var n = new Date(t.valueOf());
                                    return n.setMinutes(n.getMinutes() - e), n;
                                },
                            },
                            {
                                key: "getWeek",
                                value: function (t) {
                                    var e = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate())),
                                        n = e.getUTCDay() || 7;
                                    e.setUTCDate(e.getUTCDate() + 4 - n);
                                    var i = new Date(Date.UTC(e.getUTCFullYear(), 0, 1));
                                    return Math.ceil(((e - i) / 864e5 + 1) / 7);
                                },
                            },
                            {
                                key: "isToday",
                                value: function (t) {
                                    return "".concat(t.getFullYear(), "-").concat(t.getMonth(), "-").concat(t.getDate()) === this._todayFormatted();
                                },
                            },
                            {
                                key: "isLeapYear",
                                value: function (t) {
                                    var e = t.getFullYear();
                                    return !(e % 400) || (e % 100 && !(e % 4));
                                },
                            },
                            {
                                key: "getPreviousFirstDayOfWeek",
                                value: function () {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                                        e = arguments.length > 1 ? arguments[1] : void 0,
                                        n = (t && new Date(t.valueOf())) || new Date(),
                                        i = e ? 7 : 6;
                                    return n.setDate(n.getDate() - ((n.getDay() + i) % 7)), n;
                                },
                            },
                            {
                                key: "stringToDate",
                                value: function (t) {
                                    return t instanceof Date ? t : (10 === t.length && (t += " 00:00"), new Date(t.replace(/-/g, "/")));
                                },
                            },
                            {
                                key: "countDays",
                                value: function (t, e) {
                                    "string" === typeof t && (t = t.replace(/-/g, "/")), "string" === typeof e && (e = e.replace(/-/g, "/")), (t = new Date(t).setHours(0, 0, 0, 0)), (e = new Date(e).setHours(0, 0, 1, 0));
                                    var n = 60 * (new Date(e).getTimezoneOffset() - new Date(t).getTimezoneOffset()) * 1e3;
                                    return Math.ceil((e - t - n) / 864e5);
                                },
                            },
                            {
                                key: "datesInSameTimeStep",
                                value: function (t, e, n) {
                                    return Math.abs(t.getTime() - e.getTime()) <= 60 * n * 1e3;
                                },
                            },
                            {
                                key: "formatDate",
                                value: function (t) {
                                    var e = this,
                                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "YYYY-MM-DD",
                                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                                    if ((i || (i = this._texts), n || (n = "YYYY-MM-DD"), "YYYY-MM-DD" === n)) return this.formatDateLite(t);
                                    (x = {}), (C = {});
                                    var r = {
                                        YYYY: function () {
                                            return e._hydrateDateObject(t, i).YYYY;
                                        },
                                        YY: function () {
                                            return e._hydrateDateObject(t, i).YY();
                                        },
                                        M: function () {
                                            return e._hydrateDateObject(t, i).M;
                                        },
                                        MM: function () {
                                            return e._hydrateDateObject(t, i).MM();
                                        },
                                        MMM: function () {
                                            return e._hydrateDateObject(t, i).MMM();
                                        },
                                        MMMM: function () {
                                            return e._hydrateDateObject(t, i).MMMM();
                                        },
                                        MMMMG: function () {
                                            return e._hydrateDateObject(t, i).MMMMG();
                                        },
                                        D: function () {
                                            return e._hydrateDateObject(t, i).D;
                                        },
                                        DD: function () {
                                            return e._hydrateDateObject(t, i).DD();
                                        },
                                        S: function () {
                                            return e._hydrateDateObject(t, i).S();
                                        },
                                        d: function () {
                                            return e._hydrateDateObject(t, i).d;
                                        },
                                        dd: function () {
                                            return e._hydrateDateObject(t, i).dd();
                                        },
                                        ddd: function () {
                                            return e._hydrateDateObject(t, i).ddd();
                                        },
                                        dddd: function () {
                                            return e._hydrateDateObject(t, i).dddd();
                                        },
                                        HH: function () {
                                            return e._hydrateTimeObject(t, i).HH;
                                        },
                                        H: function () {
                                            return e._hydrateTimeObject(t, i).H;
                                        },
                                        hh: function () {
                                            return e._hydrateTimeObject(t, i).hh;
                                        },
                                        h: function () {
                                            return e._hydrateTimeObject(t, i).h;
                                        },
                                        am: function () {
                                            return e._hydrateTimeObject(t, i).am;
                                        },
                                        AM: function () {
                                            return e._hydrateTimeObject(t, i).AM;
                                        },
                                        mm: function () {
                                            return e._hydrateTimeObject(t, i).mm;
                                        },
                                        m: function () {
                                            return e._hydrateTimeObject(t, i).m;
                                        },
                                    };
                                    return n.replace(/(\{[a-zA-Z]+\}|[a-zA-Z]+)/g, function (t, e) {
                                        var n = r[e.replace(/\{|\}/g, "")];
                                        return void 0 !== n ? n() : e;
                                    });
                                },
                            },
                            {
                                key: "formatDateLite",
                                value: function (t) {
                                    var e = t.getMonth() + 1,
                                        n = t.getDate();
                                    return ""
                                        .concat(t.getFullYear(), "-")
                                        .concat(e < 10 ? "0" : "")
                                        .concat(e, "-")
                                        .concat(n < 10 ? "0" : "")
                                        .concat(n);
                                },
                            },
                            {
                                key: "formatTime",
                                value: function (t) {
                                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "HH:mm",
                                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                                        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                                        r = !1;
                                    if (i) {
                                        var a = [t.getHours(), t.getMinutes(), t.getSeconds()],
                                            s = a[0],
                                            o = a[1],
                                            l = a[2];
                                        s + o + l === 141 && (r = !0);
                                    }
                                    if (t instanceof Date && "HH:mm" === e) return r ? "24:00" : this.formatTimeLite(t);
                                    (C = {}), n || (n = this._texts);
                                    var u = this._hydrateTimeObject(t, n),
                                        c = e.replace(/(\{[a-zA-Z]+\}|[a-zA-Z]+)/g, function (t, e) {
                                            var n = u[e.replace(/\{|\}/g, "")];
                                            return void 0 !== n ? n : e;
                                        });
                                    return r ? c.replace("23:59", "24:00") : c;
                                },
                            },
                            {
                                key: "formatTimeLite",
                                value: function (t) {
                                    var e = t.getHours(),
                                        n = t.getMinutes();
                                    return "".concat((e < 10 ? "0" : "") + e, ":").concat((n < 10 ? "0" : "") + n);
                                },
                            },
                            {
                                key: "_nth",
                                value: function (t) {
                                    if (t > 3 && t < 21) return "th";
                                    switch (t % 10) {
                                        case 1:
                                            return "st";
                                        case 2:
                                            return "nd";
                                        case 3:
                                            return "rd";
                                        default:
                                            return "th";
                                    }
                                },
                            },
                            {
                                key: "_hydrateDateObject",
                                value: function (t, e) {
                                    var n = this;
                                    if (x.D) return x;
                                    var i = t.getFullYear(),
                                        r = t.getMonth() + 1,
                                        a = t.getDate(),
                                        s = t.getDay(),
                                        o = (s - 1 + 7) % 7;
                                    return (
                                        (x = {
                                            YYYY: i,
                                            YY: function () {
                                                return i.toString().substring(2);
                                            },
                                            M: r,
                                            MM: function () {
                                                return (r < 10 ? "0" : "") + r;
                                            },
                                            MMM: function () {
                                                return e.months[r - 1].substring(0, 3);
                                            },
                                            MMMM: function () {
                                                return e.months[r - 1];
                                            },
                                            MMMMG: function () {
                                                return (e.monthsGenitive || e.months)[r - 1];
                                            },
                                            D: a,
                                            DD: function () {
                                                return (a < 10 ? "0" : "") + a;
                                            },
                                            S: function () {
                                                return n._nth(a);
                                            },
                                            d: o + 1,
                                            dd: function () {
                                                return e.weekDays[o][0];
                                            },
                                            ddd: function () {
                                                return e.weekDays[o].substr(0, 3);
                                            },
                                            dddd: function () {
                                                return e.weekDays[o];
                                            },
                                        }),
                                        x
                                    );
                                },
                            },
                            {
                                key: "_hydrateTimeObject",
                                value: function (t, e) {
                                    if (C.am) return C;
                                    var n, i;
                                    t instanceof Date ? ((n = t.getHours()), (i = t.getMinutes())) : ((n = Math.floor(t / 60)), (i = Math.floor(t % 60)));
                                    var r = n % 12 ? n % 12 : 12,
                                        a = (e || { am: "am", pm: "pm" })[24 === n || n < 12 ? "am" : "pm"];
                                    return (C = { H: n, h: r, HH: (n < 10 ? "0" : "") + n, hh: (r < 10 ? "0" : "") + r, am: a, AM: a.toUpperCase(), m: i, mm: (i < 10 ? "0" : "") + i }), C;
                                },
                            },
                        ]),
                        t
                    );
                })(),
                T = 1440,
                M = function t(e) {
                    var n = this;
                    Object(k["a"])(this, t),
                        Object(l["a"])(this, "_vuecal", null),
                        Object(l["a"])(this, "selectCell", function () {
                            var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                e = arguments.length > 1 ? arguments[1] : void 0,
                                i = arguments.length > 2 ? arguments[2] : void 0;
                            n._vuecal.$emit("cell-click", i ? { date: e, split: i } : e),
                                n._vuecal.clickToNavigate || t
                                    ? n._vuecal.switchToNarrowerView()
                                    : n._vuecal.dblclickToNavigate &&
                                      "ontouchstart" in window &&
                                      (n._vuecal.domEvents.dblTapACell.taps++,
                                      setTimeout(function () {
                                          return (n._vuecal.domEvents.dblTapACell.taps = 0);
                                      }, n._vuecal.domEvents.dblTapACell.timeout),
                                      n._vuecal.domEvents.dblTapACell.taps >= 2 && ((n._vuecal.domEvents.dblTapACell.taps = 0), n._vuecal.switchToNarrowerView(), n._vuecal.$emit("cell-dblclick", i ? { date: e, split: i } : e)));
                        }),
                        Object(l["a"])(this, "keyPressEnterCell", function (t, e) {
                            n._vuecal.$emit("cell-keypress-enter", e ? { date: t, split: e } : t), n._vuecal.switchToNarrowerView();
                        }),
                        Object(l["a"])(this, "getPosition", function (t) {
                            var e = n._vuecal.$refs.cells.getBoundingClientRect(),
                                i = e.left,
                                r = e.top,
                                a = "ontouchstart" in window && t.touches ? t.touches[0] : t,
                                s = a.clientX,
                                o = a.clientY;
                            return { x: s - i, y: o - r };
                        }),
                        Object(l["a"])(this, "minutesAtCursor", function (t) {
                            var e = 0,
                                i = { x: 0, y: 0 },
                                r = n._vuecal.$props,
                                a = r.timeStep,
                                s = r.timeCellHeight,
                                o = r.timeFrom;
                            return "number" === typeof t ? (e = t) : "object" === p(t) && ((i = n.getPosition(t)), (e = Math.round((i.y * a) / parseInt(s) + o))), { minutes: Math.max(Math.min(e, T), 0), cursorCoords: i };
                        }),
                        (this._vuecal = e);
                },
                j = (n("6062"), n("a434"), n("c740"), n("8bbf")),
                A = n.n(j),
                W = 2,
                V = 1440,
                H = (function () {
                    function t(e, n) {
                        Object(k["a"])(this, t),
                            Object(l["a"])(this, "_vuecal", null),
                            Object(l["a"])(this, "eventDefaults", {
                                _eid: null,
                                start: "",
                                startTimeMinutes: 0,
                                end: "",
                                endTimeMinutes: 0,
                                title: "",
                                content: "",
                                background: !1,
                                allDay: !1,
                                segments: null,
                                repeat: null,
                                daysCount: 1,
                                deletable: !0,
                                deleting: !1,
                                titleEditable: !0,
                                resizable: !0,
                                resizing: !1,
                                draggable: !0,
                                dragging: !1,
                                draggingStatic: !1,
                                focused: !1,
                                class: "",
                            }),
                            (this._vuecal = e),
                            (w = n);
                    }
                    return (
                        Object(S["a"])(t, [
                            {
                                key: "createAnEvent",
                                value: function (t, e, n) {
                                    var i = this;
                                    if (("string" === typeof t && (t = w.stringToDate(t)), !(t instanceof Date))) return !1;
                                    var r = w.dateToMinutes(t);
                                    e = 1 * e || 60 * W;
                                    var a = r + e,
                                        s = w.addMinutes(new Date(t), e);
                                    n.end && ("string" === typeof n.end && (n.end = w.stringToDate(n.end)), (n.endTimeMinutes = w.dateToMinutes(n.end)));
                                    var o = Object(E["a"])(
                                        Object(E["a"])({}, this.eventDefaults),
                                        {},
                                        { _eid: "".concat(this._vuecal._uid, "_").concat(this._vuecal.eventIdIncrement++), start: t, startTimeMinutes: r, end: s, endTimeMinutes: a, segments: null },
                                        n
                                    );
                                    return "function" !== typeof this._vuecal.onEventCreate ||
                                        this._vuecal.onEventCreate(o, function () {
                                            return i.deleteAnEvent(o);
                                        })
                                        ? (o.startDateF !== o.endDateF && (o.daysCount = w.countDays(o.start, o.end)),
                                          this._vuecal.mutableEvents.push(o),
                                          this._vuecal.addEventsToView([o]),
                                          this._vuecal.emitWithEvent("event-create", o),
                                          this._vuecal.$emit("event-change", { event: this._vuecal.cleanupEvent(o), originalEvent: null }),
                                          o)
                                        : void 0;
                                },
                            },
                            {
                                key: "addEventSegment",
                                value: function (t) {
                                    t.segments || (A.a.set(t, "segments", {}), A.a.set(t.segments, w.formatDateLite(t.start), { start: t.start, startTimeMinutes: t.startTimeMinutes, endTimeMinutes: V, isFirstDay: !0, isLastDay: !1 }));
                                    var e = t.segments[w.formatDateLite(t.end)];
                                    e && ((e.isLastDay = !1), (e.endTimeMinutes = V));
                                    var n = w.addDays(t.end, 1),
                                        i = w.formatDateLite(n);
                                    return (
                                        n.setHours(0, 0, 0, 0),
                                        A.a.set(t.segments, i, { start: n, startTimeMinutes: 0, endTimeMinutes: t.endTimeMinutes, isFirstDay: !1, isLastDay: !0 }),
                                        (t.end = w.addMinutes(n, t.endTimeMinutes)),
                                        (t.daysCount = Object.keys(t.segments).length),
                                        i
                                    );
                                },
                            },
                            {
                                key: "removeEventSegment",
                                value: function (t) {
                                    var e = Object.keys(t.segments).length;
                                    if (e <= 1) return w.formatDateLite(t.end);
                                    A.a.delete(t.segments, w.formatDateLite(t.end)), e--;
                                    var n = w.subtractDays(t.end, 1),
                                        i = w.formatDateLite(n),
                                        r = t.segments[i];
                                    return e ? r && ((r.isLastDay = !0), (r.endTimeMinutes = t.endTimeMinutes)) : (t.segments = null), (t.daysCount = e || 1), (t.end = n), i;
                                },
                            },
                            {
                                key: "createEventSegments",
                                value: function (t, e, n) {
                                    var i,
                                        r,
                                        a,
                                        s = e.getTime(),
                                        o = n.getTime(),
                                        l = t.start.getTime(),
                                        u = t.end.getTime(),
                                        c = !1;
                                    t.end.getHours() || t.end.getMinutes() || (u -= 1e3),
                                        A.a.set(t, "segments", {}),
                                        t.repeat ? ((i = s), (r = Math.min(o, t.repeat.until ? w.stringToDate(t.repeat.until).getTime() : o))) : ((i = Math.max(s, l)), (r = Math.min(o, u)));
                                    while (i <= r) {
                                        var d = !1,
                                            f = w.addDays(new Date(i), 1).setHours(0, 0, 0, 0),
                                            v = void 0,
                                            h = void 0,
                                            p = void 0,
                                            y = void 0;
                                        if (t.repeat) {
                                            var m = new Date(i),
                                                g = w.formatDateLite(m);
                                            (c || (t.occurrences && t.occurrences[g])) && (c || ((l = t.occurrences[g].start), (a = new Date(l).setHours(0, 0, 0, 0)), (u = t.occurrences[g].end)), (c = !0), (d = !0)),
                                                (v = i === a),
                                                (h = g === w.formatDateLite(new Date(u))),
                                                (p = new Date(v ? l : i)),
                                                (y = w.formatDateLite(p)),
                                                h && (c = !1);
                                        } else (d = !0), (v = i === l), (h = r === u && f > r), (p = v ? t.start : new Date(i)), (y = w.formatDateLite(v ? t.start : p));
                                        d && A.a.set(t.segments, y, { start: p, startTimeMinutes: v ? t.startTimeMinutes : 0, endTimeMinutes: h ? t.endTimeMinutes : V, isFirstDay: v, isLastDay: h }), (i = f);
                                    }
                                    return t;
                                },
                            },
                            {
                                key: "deleteAnEvent",
                                value: function (t) {
                                    this._vuecal.emitWithEvent("event-delete", t),
                                        (this._vuecal.mutableEvents = this._vuecal.mutableEvents.filter(function (e) {
                                            return e._eid !== t._eid;
                                        })),
                                        (this._vuecal.view.events = this._vuecal.view.events.filter(function (e) {
                                            return e._eid !== t._eid;
                                        }));
                                },
                            },
                            {
                                key: "checkCellOverlappingEvents",
                                value: function (t, e) {
                                    var n = this;
                                    (_ = t.slice(0)),
                                        (D = {}),
                                        t.forEach(function (t) {
                                            _.shift(),
                                                D[t._eid] || A.a.set(D, t._eid, { overlaps: [], start: t.start, position: 0 }),
                                                (D[t._eid].position = 0),
                                                _.forEach(function (i) {
                                                    D[i._eid] || A.a.set(D, i._eid, { overlaps: [], start: i.start, position: 0 });
                                                    var r,
                                                        a,
                                                        s = n.eventInRange(i, t.start, t.end),
                                                        o = e.overlapsPerTimeStep ? w.datesInSameTimeStep(t.start, i.start, e.timeStep) : 1;
                                                    t.background || t.allDay || i.background || i.allDay || !s || !o
                                                        ? ((r = (D[t._eid] || { overlaps: [] }).overlaps.indexOf(i._eid)) > -1 && D[t._eid].overlaps.splice(r, 1),
                                                          (a = (D[i._eid] || { overlaps: [] }).overlaps.indexOf(t._eid)) > -1 && D[i._eid].overlaps.splice(a, 1),
                                                          D[i._eid].position--)
                                                        : (D[t._eid].overlaps.push(i._eid),
                                                          (D[t._eid].overlaps = h(new Set(D[t._eid].overlaps))),
                                                          D[i._eid].overlaps.push(t._eid),
                                                          (D[i._eid].overlaps = h(new Set(D[i._eid].overlaps))),
                                                          D[i._eid].position++);
                                                });
                                        });
                                    var i = 0,
                                        r = function (t) {
                                            var e = D[t],
                                                r = e.overlaps.map(function (t) {
                                                    return { id: t, start: D[t].start };
                                                });
                                            r.push({ id: t, start: e.start }),
                                                r.sort(function (t, e) {
                                                    return t.start < e.start ? -1 : t.start > e.start ? 1 : t.id > e.id ? -1 : 1;
                                                }),
                                                (e.position = r.findIndex(function (e) {
                                                    return e.id === t;
                                                })),
                                                (i = Math.max(n.getOverlapsStreak(e, D), i));
                                        };
                                    for (var a in D) r(a);
                                    return [D, i];
                                },
                            },
                            {
                                key: "getOverlapsStreak",
                                value: function (t) {
                                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                        n = t.overlaps.length + 1,
                                        i = [];
                                    return (
                                        t.overlaps.forEach(function (n) {
                                            if (!i.includes(n)) {
                                                var r = t.overlaps.filter(function (t) {
                                                    return t !== n;
                                                });
                                                r.forEach(function (t) {
                                                    e[t].overlaps.includes(n) || i.push(t);
                                                });
                                            }
                                        }),
                                        (i = h(new Set(i))),
                                        (n -= i.length),
                                        n
                                    );
                                },
                            },
                            {
                                key: "eventInRange",
                                value: function (t, e, n) {
                                    if (t.allDay || !this._vuecal.time) {
                                        var i = new Date(t.start).setHours(0, 0, 0, 0),
                                            r = new Date(t.end).setHours(23, 59, 0, 0);
                                        return r >= new Date(e).setHours(0, 0, 0, 0) && i <= new Date(n).setHours(0, 0, 0, 0);
                                    }
                                    var a = t.start.getTime(),
                                        s = t.end.getTime();
                                    return a < n.getTime() && s > e.getTime();
                                },
                            },
                        ]),
                        t
                    );
                })(),
                I = function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n(
                        "div",
                        { staticClass: "vuecal__header" },
                        [
                            t.options.hideViewSelector
                                ? t._e()
                                : n(
                                      "div",
                                      { staticClass: "vuecal__flex vuecal__menu", attrs: { role: "tablist", "aria-label": "Calendar views navigation" } },
                                      t._l(t.viewProps.views, function (e, i) {
                                          return e.enabled
                                              ? n(
                                                    "button",
                                                    {
                                                        staticClass: "vuecal__view-btn",
                                                        class: { "vuecal__view-btn--active": t.view.id === i, "vuecal__view-btn--highlighted": t.highlightedControl === i },
                                                        attrs: { type: "button", "aria-label": e.label + " view" },
                                                        on: {
                                                            dragenter: function (e) {
                                                                t.editEvents.drag && t.dnd && t.dnd.viewSelectorDragEnter(e, i, t.$data);
                                                            },
                                                            dragleave: function (e) {
                                                                t.editEvents.drag && t.dnd && t.dnd.viewSelectorDragLeave(e, i, t.$data);
                                                            },
                                                            click: function (e) {
                                                                return t.switchView(i, null, !0);
                                                            },
                                                        },
                                                    },
                                                    [t._v(t._s(e.label))]
                                                )
                                              : t._e();
                                      }),
                                      0
                                  ),
                            t.options.hideTitleBar
                                ? t._e()
                                : n("div", { staticClass: "vuecal__title-bar" }, [
                                      n(
                                          "button",
                                          {
                                              staticClass: "vuecal__arrow vuecal__arrow--prev",
                                              class: { "vuecal__arrow--highlighted": "previous" === t.highlightedControl },
                                              attrs: { type: "button", "aria-label": "Previous " + t.view.id },
                                              on: {
                                                  click: t.previous,
                                                  dragenter: function (e) {
                                                      t.editEvents.drag && t.dnd && t.dnd.viewSelectorDragEnter(e, "previous", t.$data);
                                                  },
                                                  dragleave: function (e) {
                                                      t.editEvents.drag && t.dnd && t.dnd.viewSelectorDragLeave(e, "previous", t.$data);
                                                  },
                                              },
                                          },
                                          [t._t("arrow-prev")],
                                          2
                                      ),
                                      n(
                                          "div",
                                          { staticClass: "vuecal__flex vuecal__title", attrs: { grow: "" } },
                                          [
                                              n(
                                                  t.options.transitions ? "transition" : "div",
                                                  { tag: "component", attrs: { name: "slide-fade--" + t.transitionDirection } },
                                                  [
                                                      n(
                                                          t.broaderView ? "button" : "span",
                                                          {
                                                              key: "" + t.view.id + t.view.startDate.toString(),
                                                              tag: "component",
                                                              attrs: { type: !!t.broaderView && "button", "aria-label": !!t.broaderView && "Go to " + t.broaderView + " view" },
                                                              on: {
                                                                  click: function (e) {
                                                                      t.broaderView && t.switchToBroaderView();
                                                                  },
                                                              },
                                                          },
                                                          [t._t("title")],
                                                          2
                                                      ),
                                                  ],
                                                  1
                                              ),
                                          ],
                                          1
                                      ),
                                      t.options.todayButton
                                          ? n(
                                                "button",
                                                {
                                                    staticClass: "vuecal__today-btn",
                                                    class: { "vuecal__today-btn--highlighted": "today" === t.highlightedControl },
                                                    attrs: { type: "button", "aria-label": "Today" },
                                                    on: {
                                                        click: t.goToToday,
                                                        dragenter: function (e) {
                                                            t.editEvents.drag && t.dnd && t.dnd.viewSelectorDragEnter(e, "today", t.$data);
                                                        },
                                                        dragleave: function (e) {
                                                            t.editEvents.drag && t.dnd && t.dnd.viewSelectorDragLeave(e, "today", t.$data);
                                                        },
                                                    },
                                                },
                                                [t._t("today-button")],
                                                2
                                            )
                                          : t._e(),
                                      n(
                                          "button",
                                          {
                                              staticClass: "vuecal__arrow vuecal__arrow--next",
                                              class: { "vuecal__arrow--highlighted": "next" === t.highlightedControl },
                                              attrs: { type: "button", "aria-label": "Next " + t.view.id },
                                              on: {
                                                  click: t.next,
                                                  dragenter: function (e) {
                                                      t.editEvents.drag && t.dnd && t.dnd.viewSelectorDragEnter(e, "next", t.$data);
                                                  },
                                                  dragleave: function (e) {
                                                      t.editEvents.drag && t.dnd && t.dnd.viewSelectorDragLeave(e, "next", t.$data);
                                                  },
                                              },
                                          },
                                          [t._t("arrow-next")],
                                          2
                                      ),
                                  ]),
                            t.viewProps.weekDaysInHeader
                                ? n("weekdays-headings", {
                                      attrs: { "week-days": t.weekDays, "transition-direction": t.transitionDirection, "switch-to-narrower-view": t.switchToNarrowerView },
                                      scopedSlots: t._u(
                                          [
                                              {
                                                  key: "weekday-heading",
                                                  fn: function (e) {
                                                      var n = e.heading,
                                                          i = e.view;
                                                      return [t._t("weekday-heading", null, { heading: n, view: i })];
                                                  },
                                              },
                                              {
                                                  key: "split-label",
                                                  fn: function (e) {
                                                      var n = e.split;
                                                      return [t._t("split-label", null, { split: n, view: t.view })];
                                                  },
                                              },
                                          ],
                                          null,
                                          !0
                                      ),
                                  })
                                : t._e(),
                            n("transition", { attrs: { name: "slide-fade--" + t.transitionDirection } }, [
                                t.showDaySplits
                                    ? n(
                                          "div",
                                          { staticClass: "vuecal__flex vuecal__split-days-headers" },
                                          t._l(t.daySplits, function (e, i) {
                                              return n("div", { key: i, staticClass: "day-split-header", class: e.class || !1 }, [t._t("split-label", [t._v(t._s(e.label))], { split: e, view: t.view.id })], 2);
                                          }),
                                          0
                                      )
                                    : t._e(),
                            ]),
                        ],
                        1
                    );
                },
                P = [],
                L = function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n(
                        "div",
                        { staticClass: "vuecal__flex vuecal__weekdays-headings" },
                        t._l(t.headings, function (e, i) {
                            return e.hide
                                ? t._e()
                                : n(
                                      "div",
                                      {
                                          key: i,
                                          staticClass: "vuecal__flex vuecal__heading",
                                          class: { today: e.today, clickable: t.cellHeadingsClickable },
                                          style: t.weekdayCellStyles,
                                          on: {
                                              click: function (n) {
                                                  "week" === t.view.id && t.selectCell(e.date, n);
                                              },
                                              dblclick: function (e) {
                                                  "week" === t.view.id && t.vuecal.dblclickToNavigate && t.switchToNarrowerView();
                                              },
                                          },
                                      },
                                      [
                                          n("transition", { attrs: { name: "slide-fade--" + t.transitionDirection, appear: t.vuecal.transitions } }, [
                                              n("div", { key: !!t.vuecal.transitions && i + "-" + e.dayOfMonth, staticClass: "vuecal__flex", attrs: { column: "" } }, [
                                                  n(
                                                      "div",
                                                      { staticClass: "vuecal__flex weekday-label", attrs: { grow: "" } },
                                                      [
                                                          t._t(
                                                              "weekday-heading",
                                                              [
                                                                  n("span", { staticClass: "full" }, [t._v(t._s(e.full))]),
                                                                  n("span", { staticClass: "small" }, [t._v(t._s(e.small))]),
                                                                  n("span", { staticClass: "xsmall" }, [t._v(t._s(e.xsmall))]),
                                                                  e.dayOfMonth ? n("span", [t._v(" " + t._s(e.dayOfMonth))]) : t._e(),
                                                              ],
                                                              { heading: t.cleanupHeading(e), view: t.view }
                                                          ),
                                                      ],
                                                      2
                                                  ),
                                                  t.vuecal.hasSplits && t.vuecal.stickySplitLabels
                                                      ? n(
                                                            "div",
                                                            { staticClass: "vuecal__flex vuecal__split-days-headers", attrs: { grow: "" } },
                                                            t._l(t.vuecal.daySplits, function (e, i) {
                                                                return n("div", { key: i, staticClass: "day-split-header", class: e.class || !1 }, [t._t("split-label", [t._v(t._s(e.label))], { split: e, view: t.view })], 2);
                                                            }),
                                                            0
                                                        )
                                                      : t._e(),
                                              ]),
                                          ]),
                                      ],
                                      1
                                  );
                        }),
                        0
                    );
                },
                N = [],
                Y = {
                    inject: ["vuecal", "utils", "view"],
                    props: {
                        transitionDirection: { type: String, default: "right" },
                        weekDays: {
                            type: Array,
                            default: function () {
                                return [];
                            },
                        },
                        switchToNarrowerView: { type: Function, default: function () {} },
                    },
                    methods: {
                        selectCell: function (t, e) {
                            t.getTime() !== this.view.selectedDate.getTime() && (this.view.selectedDate = t), this.utils.cell.selectCell(!1, t, e);
                        },
                        cleanupHeading: function (t) {
                            return Object(E["a"])({ label: t.full, date: t.date }, t.today ? { today: t.today } : {});
                        },
                    },
                    computed: {
                        headings: function () {
                            var t = this;
                            if (!["month", "week"].includes(this.view.id)) return [];
                            var e = !1,
                                n = this.weekDays.map(function (n, i) {
                                    var r = t.utils.date.addDays(t.view.startDate, i);
                                    return Object(E["a"])(
                                        { hide: n.hide, full: n.label, small: n.short || n.label.substr(0, 3), xsmall: n.short || n.label.substr(0, 1) },
                                        "week" === t.view.id ? { dayOfMonth: r.getDate(), date: r, today: !e && t.utils.date.isToday(r) && !e++ } : {}
                                    );
                                });
                            return n;
                        },
                        cellWidth: function () {
                            return (
                                100 /
                                (7 -
                                    this.weekDays.reduce(function (t, e) {
                                        return t + e.hide;
                                    }, 0))
                            );
                        },
                        weekdayCellStyles: function () {
                            return Object(E["a"])({}, this.vuecal.hideWeekdays.length ? { width: "".concat(this.cellWidth, "%") } : {});
                        },
                        cellHeadingsClickable: function () {
                            return "week" === this.view.id && (this.vuecal.clickToNavigate || this.vuecal.dblclickToNavigate);
                        },
                    },
                },
                F = Y;
            n("9735");
            function R(t, e, n, i, r, a, s, o) {
                var l,
                    u = "function" === typeof t ? t.options : t;
                if (
                    (e && ((u.render = e), (u.staticRenderFns = n), (u._compiled = !0)),
                    i && (u.functional = !0),
                    a && (u._scopeId = "data-v-" + a),
                    s
                        ? ((l = function (t) {
                              (t = t || (this.$vnode && this.$vnode.ssrContext) || (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)),
                                  t || "undefined" === typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__),
                                  r && r.call(this, t),
                                  t && t._registeredComponents && t._registeredComponents.add(s);
                          }),
                          (u._ssrRegister = l))
                        : r &&
                          (l = o
                              ? function () {
                                    r.call(this, (u.functional ? this.parent : this).$root.$options.shadowRoot);
                                }
                              : r),
                    l)
                )
                    if (u.functional) {
                        u._injectStyles = l;
                        var c = u.render;
                        u.render = function (t, e) {
                            return l.call(e), c(t, e);
                        };
                    } else {
                        var d = u.beforeCreate;
                        u.beforeCreate = d ? [].concat(d, l) : [l];
                    }
                return { exports: t, options: u };
            }
            var $ = R(F, L, N, !1, null, null, null),
                B = $.exports,
                z = {
                    inject: ["vuecal", "previous", "next", "switchView", "updateSelectedDate", "modules", "view"],
                    components: { WeekdaysHeadings: B },
                    props: {
                        options: {
                            type: Object,
                            default: function () {
                                return {};
                            },
                        },
                        editEvents: { type: Object, required: !0 },
                        hasSplits: { type: [Boolean, Number], default: !1 },
                        daySplits: {
                            type: Array,
                            default: function () {
                                return [];
                            },
                        },
                        viewProps: {
                            type: Object,
                            default: function () {
                                return {};
                            },
                        },
                        weekDays: {
                            type: Array,
                            default: function () {
                                return [];
                            },
                        },
                        switchToNarrowerView: { type: Function, default: function () {} },
                    },
                    data: function () {
                        return { highlightedControl: null };
                    },
                    methods: {
                        goToToday: function () {
                            this.updateSelectedDate(new Date(new Date().setHours(0, 0, 0, 0)));
                        },
                        switchToBroaderView: function () {
                            (this.transitionDirection = "left"), this.broaderView && this.switchView(this.broaderView);
                        },
                    },
                    computed: {
                        transitionDirection: {
                            get: function () {
                                return this.vuecal.transitionDirection;
                            },
                            set: function (t) {
                                this.vuecal.transitionDirection = t;
                            },
                        },
                        broaderView: function () {
                            var t = this.vuecal.enabledViews;
                            return t[t.indexOf(this.view.id) - 1];
                        },
                        showDaySplits: function () {
                            return "day" === this.view.id && this.hasSplits && this.options.stickySplitLabels && !this.options.minSplitWidth;
                        },
                        dnd: function () {
                            return this.modules.dnd;
                        },
                    },
                },
                U = z,
                G = (n("dc34"), R(U, I, P, !1, null, null, null)),
                q = G.exports,
                X = function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", { staticClass: "vuecal__flex vuecal__all-day", style: t.cellOrSplitMinWidth && { height: t.height } }, [
                        t.cellOrSplitMinWidth ? t._e() : n("div", { staticClass: "vuecal__all-day-text", staticStyle: { width: "3em" } }, [n("span", [t._v(t._s(t.label))])]),
                        n(
                            "div",
                            { staticClass: "vuecal__flex vuecal__cells", class: t.view.id + "-view", style: t.cellOrSplitMinWidth ? "min-width: " + t.cellOrSplitMinWidth + "px" : "", attrs: { grow: "" } },
                            t._l(t.cells, function (e, i) {
                                return n("vuecal-cell", {
                                    key: i,
                                    attrs: {
                                        options: t.options,
                                        "edit-events": t.editEvents,
                                        data: e,
                                        "all-day": !0,
                                        "cell-width": t.options.hideWeekdays.length && (t.vuecal.isWeekView || t.vuecal.isMonthView) && t.vuecal.cellWidth,
                                        "min-timestamp": t.options.minTimestamp,
                                        "max-timestamp": t.options.maxTimestamp,
                                        "cell-splits": t.daySplits,
                                    },
                                    scopedSlots: t._u(
                                        [
                                            {
                                                key: "event",
                                                fn: function (e) {
                                                    var n = e.event,
                                                        i = e.view;
                                                    return [t._t("event", null, { view: i, event: n })];
                                                },
                                            },
                                        ],
                                        null,
                                        !0
                                    ),
                                });
                            }),
                            1
                        ),
                    ]);
                },
                K = [],
                J = function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n(
                        "transition-group",
                        { staticClass: "vuecal__cell", class: t.cellClasses, style: t.cellStyles, attrs: { name: "slide-fade--" + t.transitionDirection, tag: "div", appear: t.options.transitions } },
                        [
                            t._l(t.splitsCount ? t.splits : 1, function (e, i) {
                                return n(
                                    "div",
                                    {
                                        key: t.options.transitions ? t.view.id + "-" + t.data.content + "-" + i : i,
                                        staticClass: "vuecal__flex vuecal__cell-content",
                                        class: t.splitsCount && t.splitClasses(e),
                                        attrs: { "data-split": !!t.splitsCount && e.id, column: "", tabindex: "0", "aria-label": t.data.content },
                                        on: {
                                            focus: function (e) {
                                                return t.onCellFocus(e);
                                            },
                                            keypress: function (e) {
                                                return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.onCellkeyPressEnter(e);
                                            },
                                            touchstart: function (n) {
                                                !t.isDisabled && t.onCellTouchStart(n, t.splitsCount ? e.id : null);
                                            },
                                            mousedown: function (n) {
                                                !t.isDisabled && t.onCellMouseDown(n, t.splitsCount ? e.id : null);
                                            },
                                            click: function (e) {
                                                !t.isDisabled && t.onCellClick(e);
                                            },
                                            dblclick: function (e) {
                                                !t.isDisabled && t.onCellDblClick(e);
                                            },
                                            contextmenu: function (e) {
                                                !t.isDisabled && t.options.cellContextmenu && t.onCellContextMenu(e);
                                            },
                                            dragenter: function (e) {
                                                !t.isDisabled && t.editEvents.drag && t.dnd && t.dnd.cellDragEnter(e, t.$data, t.data.startDate);
                                            },
                                            dragover: function (n) {
                                                !t.isDisabled && t.editEvents.drag && t.dnd && t.dnd.cellDragOver(n, t.$data, t.data.startDate, t.splitsCount ? e.id : null);
                                            },
                                            dragleave: function (e) {
                                                !t.isDisabled && t.editEvents.drag && t.dnd && t.dnd.cellDragLeave(e, t.$data, t.data.startDate);
                                            },
                                            drop: function (n) {
                                                !t.isDisabled && t.editEvents.drag && t.dnd && t.dnd.cellDragDrop(n, t.$data, t.data.startDate, t.splitsCount ? e.id : null);
                                            },
                                        },
                                    },
                                    [
                                        t.isWeekOrDayView && !t.allDay && t.specialHours.length
                                            ? t._l(t.specialHours, function (t, e) {
                                                  return n("div", { staticClass: "vuecal__special-hours", class: "vuecal__special-hours--day" + t.day + " " + t.class, style: "height: " + t.height + "px;top: " + t.top + "px" });
                                              })
                                            : t._e(),
                                        t._t("cell-content", null, {
                                            events: t.events,
                                            selectCell: function (e) {
                                                return t.selectCell(e, !0);
                                            },
                                            split: !!t.splitsCount && e,
                                        }),
                                        t.eventsCount && (t.isWeekOrDayView || ("month" === t.view.id && t.options.eventsOnMonthView))
                                            ? n(
                                                  "div",
                                                  { staticClass: "vuecal__cell-events" },
                                                  t._l(t.splitsCount ? e.events : t.events, function (i, r) {
                                                      return n("event", {
                                                          key: r,
                                                          attrs: {
                                                              "cell-formatted-date": t.data.formattedDate,
                                                              event: i,
                                                              "all-day": t.allDay,
                                                              "cell-events": t.splitsCount ? e.events : t.events,
                                                              overlaps: ((t.splitsCount ? e.overlaps[i._eid] : t.cellOverlaps[i._eid]) || []).overlaps,
                                                              "event-position": ((t.splitsCount ? e.overlaps[i._eid] : t.cellOverlaps[i._eid]) || []).position,
                                                              "overlaps-streak": t.splitsCount ? e.overlapsStreak : t.cellOverlapsStreak,
                                                          },
                                                          scopedSlots: t._u(
                                                              [
                                                                  {
                                                                      key: "event",
                                                                      fn: function (e) {
                                                                          var n = e.event,
                                                                              i = e.view;
                                                                          return [t._t("event", null, { view: i, event: n })];
                                                                      },
                                                                  },
                                                              ],
                                                              null,
                                                              !0
                                                          ),
                                                      });
                                                  }),
                                                  1
                                              )
                                            : t._e(),
                                    ],
                                    2
                                );
                            }),
                            t.timelineVisible
                                ? n("div", {
                                      key: t.options.transitions ? t.view.id + "-now-line" : "now-line",
                                      staticClass: "vuecal__now-line",
                                      style: "top: " + t.todaysTimePosition + "px",
                                      attrs: { title: t.utils.date.formatTime(t.vuecal.now) },
                                  })
                                : t._e(),
                        ],
                        2
                    );
                },
                Q = [];
            function Z(t) {
                if (Array.isArray(t)) return t;
            }
            function tt(t, e) {
                if ("undefined" !== typeof Symbol && Symbol.iterator in Object(t)) {
                    var n = [],
                        i = !0,
                        r = !1,
                        a = void 0;
                    try {
                        for (var s, o = t[Symbol.iterator](); !(i = (s = o.next()).done); i = !0) if ((n.push(s.value), e && n.length === e)) break;
                    } catch (l) {
                        (r = !0), (a = l);
                    } finally {
                        try {
                            i || null == o["return"] || o["return"]();
                        } finally {
                            if (r) throw a;
                        }
                    }
                    return n;
                }
            }
            function et() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            function nt(t, e) {
                return Z(t) || tt(t, e) || f(t, e) || et();
            }
            var it = function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n(
                        "div",
                        {
                            staticClass: "vuecal__event",
                            class: t.eventClasses,
                            style: t.eventStyles,
                            attrs: { tabindex: "0", draggable: t.draggable },
                            on: {
                                focus: t.focusEvent,
                                keypress: function (e) {
                                    return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : (e.stopPropagation(), t.onEnterKeypress(e));
                                },
                                mouseenter: t.onMouseEnter,
                                mouseleave: t.onMouseLeave,
                                touchstart: function (e) {
                                    return e.stopPropagation(), t.onTouchStart(e);
                                },
                                mousedown: function (e) {
                                    t.onMouseDown(e);
                                },
                                mouseup: t.onMouseUp,
                                touchend: t.onMouseUp,
                                touchmove: t.onTouchMove,
                                dblclick: t.onDblClick,
                                dragstart: function (e) {
                                    t.draggable && t.onDragStart(e);
                                },
                                dragend: function (e) {
                                    t.draggable && t.onDragEnd();
                                },
                            },
                        },
                        [
                            t.vuecal.editEvents.delete && t.event.deletable
                                ? n(
                                      "div",
                                      {
                                          staticClass: "vuecal__event-delete",
                                          on: {
                                              click: function (e) {
                                                  return e.stopPropagation(), t.deleteEvent(e);
                                              },
                                              touchstart: function (e) {
                                                  return e.stopPropagation(), t.touchDeleteEvent(e);
                                              },
                                          },
                                      },
                                      [t._v(t._s(t.vuecal.texts.deleteEvent))]
                                  )
                                : t._e(),
                            t._t("event", null, { event: t.event, view: t.view.id }),
                            t.resizable
                                ? n("div", {
                                      staticClass: "vuecal__event-resize-handle",
                                      attrs: { contenteditable: "false" },
                                      on: {
                                          mousedown: function (e) {
                                              return e.stopPropagation(), e.preventDefault(), t.onResizeHandleMouseDown(e);
                                          },
                                          touchstart: function (e) {
                                              return e.stopPropagation(), e.preventDefault(), t.onResizeHandleMouseDown(e);
                                          },
                                      },
                                  })
                                : t._e(),
                        ],
                        2
                    );
                },
                rt = [],
                at = {
                    inject: ["vuecal", "utils", "modules", "view", "domEvents", "editEvents"],
                    props: {
                        cellFormattedDate: { type: String, default: "" },
                        event: {
                            type: Object,
                            default: function () {
                                return {};
                            },
                        },
                        cellEvents: {
                            type: Array,
                            default: function () {
                                return [];
                            },
                        },
                        overlaps: {
                            type: Array,
                            default: function () {
                                return [];
                            },
                        },
                        eventPosition: { type: Number, default: 0 },
                        overlapsStreak: { type: Number, default: 0 },
                        allDay: { type: Boolean, default: !1 },
                    },
                    data: function () {
                        return { touch: { dragThreshold: 30, startX: 0, startY: 0, dragged: !1 } };
                    },
                    methods: {
                        onMouseDown: function (t) {
                            var e = this,
                                n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            if ("ontouchstart" in window && !n) return !1;
                            var i = this.domEvents,
                                r = i.clickHoldAnEvent,
                                a = i.focusAnEvent,
                                s = i.resizeAnEvent,
                                o = i.dragAnEvent;
                            if (a._eid === this.event._eid && r._eid === this.event._eid) return !0;
                            this.focusEvent(),
                                (r._eid = null),
                                this.vuecal.editEvents.delete &&
                                    this.event.deletable &&
                                    (r.timeoutId = setTimeout(function () {
                                        s._eid || o._eid || ((r._eid = e.event._eid), (e.event.deleting = !0));
                                    }, r.timeout));
                        },
                        onMouseUp: function (t) {
                            this.domEvents.focusAnEvent._eid !== this.event._eid || this.touch.dragged || (this.domEvents.focusAnEvent.mousedUp = !0), (this.touch.dragged = !1);
                        },
                        onMouseEnter: function (t) {
                            t.preventDefault(), this.vuecal.emitWithEvent("event-mouse-enter", this.event);
                        },
                        onMouseLeave: function (t) {
                            t.preventDefault(), this.vuecal.emitWithEvent("event-mouse-leave", this.event);
                        },
                        onTouchMove: function (t) {
                            if ("function" === typeof this.vuecal.onEventClick) {
                                var e = t.touches[0],
                                    n = e.clientX,
                                    i = e.clientY,
                                    r = this.touch,
                                    a = r.startX,
                                    s = r.startY,
                                    o = r.dragThreshold;
                                (Math.abs(n - a) > o || Math.abs(i - s) > o) && (this.touch.dragged = !0);
                            }
                        },
                        onTouchStart: function (t) {
                            (this.touch.startX = t.touches[0].clientX), (this.touch.startY = t.touches[0].clientY), this.onMouseDown(t, !0);
                        },
                        onEnterKeypress: function (t) {
                            if ("function" === typeof this.vuecal.onEventClick) return this.vuecal.onEventClick(this.event, t);
                        },
                        onDblClick: function (t) {
                            if ("function" === typeof this.vuecal.onEventDblclick) return this.vuecal.onEventDblclick(this.event, t);
                        },
                        onDragStart: function (t) {
                            this.dnd && this.dnd.eventDragStart(t, this.event);
                        },
                        onDragEnd: function () {
                            this.dnd && this.dnd.eventDragEnd(this.event);
                        },
                        onResizeHandleMouseDown: function () {
                            this.focusEvent(),
                                (this.domEvents.dragAnEvent._eid = null),
                                (this.domEvents.resizeAnEvent = Object.assign(this.domEvents.resizeAnEvent, {
                                    _eid: this.event._eid,
                                    start: (this.segment || this.event).start,
                                    split: this.event.split || null,
                                    segment: !!this.segment && this.utils.date.formatDateLite(this.segment.start),
                                    originalEnd: new Date((this.segment || this.event).end),
                                    originalEndTimeMinutes: this.event.endTimeMinutes,
                                })),
                                (this.event.resizing = !0);
                        },
                        deleteEvent: function () {
                            var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                            if ("ontouchstart" in window && !t) return !1;
                            this.utils.event.deleteAnEvent(this.event);
                        },
                        touchDeleteEvent: function (t) {
                            this.deleteEvent(!0);
                        },
                        cancelDeleteEvent: function () {
                            this.event.deleting = !1;
                        },
                        focusEvent: function () {
                            var t = this.domEvents.focusAnEvent,
                                e = t._eid;
                            if (e !== this.event._eid) {
                                if (e) {
                                    var n = this.view.events.find(function (t) {
                                        return t._eid === e;
                                    });
                                    n && (n.focused = !1);
                                }
                                this.vuecal.cancelDelete(), this.vuecal.emitWithEvent("event-focus", this.event), (t._eid = this.event._eid), (this.event.focused = !0);
                            }
                        },
                    },
                    computed: {
                        eventDimensions: function () {
                            var t = this.segment || this.event,
                                e = t.startTimeMinutes,
                                n = t.endTimeMinutes,
                                i = e - this.vuecal.timeFrom,
                                r = Math.max(Math.round((i * this.vuecal.timeCellHeight) / this.vuecal.timeStep), 0);
                            i = Math.min(n, this.vuecal.timeTo) - this.vuecal.timeFrom;
                            var a = Math.round((i * this.vuecal.timeCellHeight) / this.vuecal.timeStep),
                                s = Math.max(a - r, 5);
                            return { top: r, height: s };
                        },
                        eventStyles: function () {
                            if (this.event.allDay || !this.vuecal.time || !this.event.endTimeMinutes || "month" === this.view.id || this.allDay) return {};
                            var t = 100 / Math.min(this.overlaps.length + 1, this.overlapsStreak),
                                e = (100 / (this.overlaps.length + 1)) * this.eventPosition;
                            this.vuecal.minEventWidth && t < this.vuecal.minEventWidth && ((t = this.vuecal.minEventWidth), (e = ((100 - this.vuecal.minEventWidth) / this.overlaps.length) * this.eventPosition));
                            var n = this.eventDimensions,
                                i = n.top,
                                r = n.height;
                            return { top: "".concat(i, "px"), height: "".concat(r, "px"), width: "".concat(t, "%"), left: (this.event.left && "".concat(this.event.left, "px")) || "".concat(e, "%") };
                        },
                        eventClasses: function () {
                            var t,
                                e = this.segment || {},
                                n = e.isFirstDay,
                                i = e.isLastDay;
                            return (
                                (t = {}),
                                Object(l["a"])(t, this.event.class, !!this.event.class),
                                Object(l["a"])(t, "vuecal__event--focus", this.event.focused),
                                Object(l["a"])(t, "vuecal__event--resizing", this.event.resizing),
                                Object(l["a"])(t, "vuecal__event--background", this.event.background),
                                Object(l["a"])(t, "vuecal__event--deletable", this.event.deleting),
                                Object(l["a"])(t, "vuecal__event--all-day", this.event.allDay),
                                Object(l["a"])(t, "vuecal__event--dragging", !this.event.draggingStatic && this.event.dragging),
                                Object(l["a"])(t, "vuecal__event--static", this.event.dragging && this.event.draggingStatic),
                                Object(l["a"])(t, "vuecal__event--multiple-days", !!this.segment),
                                Object(l["a"])(t, "event-start", this.segment && n && !i),
                                Object(l["a"])(t, "event-middle", this.segment && !n && !i),
                                Object(l["a"])(t, "event-end", this.segment && i && !n),
                                t
                            );
                        },
                        segment: function () {
                            return (this.event.segments && this.event.segments[this.cellFormattedDate]) || null;
                        },
                        draggable: function () {
                            var t = this.event,
                                e = t.draggable,
                                n = t.background,
                                i = t.daysCount;
                            return this.vuecal.editEvents.drag && e && !n && 1 === i;
                        },
                        resizable: function () {
                            var t = this.vuecal,
                                e = t.editEvents,
                                n = t.time;
                            return e.resize && this.event.resizable && n && !this.allDay && (!this.segment || (this.segment && this.segment.isLastDay)) && "month" !== this.view.id;
                        },
                        dnd: function () {
                            return this.modules.dnd;
                        },
                    },
                },
                st = at,
                ot = (n("61f2"), R(st, it, rt, !1, null, null, null)),
                lt = ot.exports,
                ut = {
                    inject: ["vuecal", "utils", "modules", "view", "domEvents"],
                    components: { Event: lt },
                    props: {
                        options: {
                            type: Object,
                            default: function () {
                                return {};
                            },
                        },
                        editEvents: { type: Object, required: !0 },
                        data: { type: Object, required: !0 },
                        cellSplits: {
                            type: Array,
                            default: function () {
                                return [];
                            },
                        },
                        minTimestamp: { type: [Number, null], default: null },
                        maxTimestamp: { type: [Number, null], default: null },
                        cellWidth: { type: [Number, Boolean], default: !1 },
                        allDay: { type: Boolean, default: !1 },
                    },
                    data: function () {
                        return { cellOverlaps: {}, cellOverlapsStreak: 1, timeAtCursor: null, highlighted: !1, highlightedSplit: null };
                    },
                    methods: {
                        getSplitAtCursor: function (t) {
                            var e = t.target,
                                n = e.classList.contains("vuecal__cell-split"),
                                i = n ? e : this.vuecal.findAncestor(e, "vuecal__cell-split");
                            return i && ((i = i.attributes["data-split"].value), parseInt(i).toString() === i.toString() && (i = parseInt(i))), i || null;
                        },
                        splitClasses: function (t) {
                            return Object(l["a"])({ "vuecal__cell-split": !0, "vuecal__cell-split--highlighted": this.highlightedSplit === t.id }, t.class, !!t.class);
                        },
                        checkCellOverlappingEvents: function () {
                            if (this.options.time && this.eventsCount && !this.splitsCount)
                                if (1 === this.eventsCount) (this.cellOverlaps = []), (this.cellOverlapsStreak = 1);
                                else {
                                    var t = this.utils.event.checkCellOverlappingEvents(this.events, this.options),
                                        e = nt(t, 2);
                                    (this.cellOverlaps = e[0]), (this.cellOverlapsStreak = e[1]);
                                }
                        },
                        isDOMElementAnEvent: function (t) {
                            return this.vuecal.isDOMElementAnEvent(t);
                        },
                        selectCell: function (t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                n = this.splitsCount ? this.getSplitAtCursor(t) : null;
                            this.utils.cell.selectCell(e, this.timeAtCursor, n), (this.timeAtCursor = null);
                        },
                        onCellkeyPressEnter: function (t) {
                            this.isSelected || this.onCellFocus(t);
                            var e = this.splitsCount ? this.getSplitAtCursor(t) : null;
                            this.utils.cell.keyPressEnterCell(this.timeAtCursor, e), (this.timeAtCursor = null);
                        },
                        onCellFocus: function (t) {
                            if (!this.isSelected && !this.isDisabled) {
                                this.isSelected = this.data.startDate;
                                var e = this.splitsCount ? this.getSplitAtCursor(t) : null,
                                    n = this.timeAtCursor || this.data.startDate;
                                this.vuecal.$emit("cell-focus", e ? { date: n, split: e } : n);
                            }
                        },
                        onCellMouseDown: function (t) {
                            var e = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                            if ("ontouchstart" in window && !e) return !1;
                            this.isSelected || this.onCellFocus(t);
                            var n = this.domEvents,
                                i = n.clickHoldACell,
                                r = n.focusAnEvent;
                            (this.domEvents.cancelClickEventCreation = !1), (i.eventCreated = !1), (this.timeAtCursor = new Date(this.data.startDate));
                            var a = this.vuecal.minutesAtCursor(t),
                                s = a.minutes,
                                o = a.cursorCoords.y;
                            this.timeAtCursor.setMinutes(s);
                            var l = this.isDOMElementAnEvent(t.target);
                            !l &&
                                r._eid &&
                                ((
                                    this.view.events.find(function (t) {
                                        return t._eid === r._eid;
                                    }) || {}
                                ).focused = !1),
                                this.editEvents.create && !l && this.setUpEventCreation(t, o);
                        },
                        setUpEventCreation: function (t, e) {
                            if (this.options.dragToCreateEvent && ["week", "day"].includes(this.view.id)) {
                                var n = this.domEvents.dragCreateAnEvent;
                                if (((n.startCursorY = e), (n.split = this.splitsCount ? this.getSplitAtCursor(t) : null), (n.start = this.timeAtCursor), this.options.snapToTime)) {
                                    var i = 60 * this.timeAtCursor.getHours() + this.timeAtCursor.getMinutes(),
                                        r = i + this.options.snapToTime / 2;
                                    (i = r - (r % this.options.snapToTime)), n.start.setHours(0, i, 0, 0);
                                }
                            } else this.options.cellClickHold && ["month", "week", "day"].includes(this.view.id) && this.setUpCellHoldTimer(t);
                        },
                        setUpCellHoldTimer: function (t) {
                            var e = this,
                                n = this.domEvents.clickHoldACell;
                            (n.cellId = "".concat(this.vuecal._uid, "_").concat(this.data.formattedDate)),
                                (n.split = this.splitsCount ? this.getSplitAtCursor(t) : null),
                                (n.timeoutId = setTimeout(function () {
                                    if (n.cellId && !e.domEvents.cancelClickEventCreation) {
                                        var t = e.utils.event.createAnEvent(e.timeAtCursor, null, n.split ? { split: n.split } : {}),
                                            i = t._eid;
                                        n.eventCreated = i;
                                    }
                                }, n.timeout));
                        },
                        onCellTouchStart: function (t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                            this.onCellMouseDown(t, e, !0);
                        },
                        onCellClick: function (t) {
                            this.isDOMElementAnEvent(t.target) || this.selectCell(t);
                        },
                        onCellDblClick: function (t) {
                            var e = new Date(this.data.startDate);
                            e.setMinutes(this.vuecal.minutesAtCursor(t).minutes);
                            var n = this.splitsCount ? this.getSplitAtCursor(t) : null;
                            this.vuecal.$emit("cell-dblclick", n ? { date: e, split: n } : e), this.options.dblclickToNavigate && this.vuecal.switchToNarrowerView();
                        },
                        onCellContextMenu: function (t) {
                            t.stopPropagation(), t.preventDefault();
                            var e = new Date(this.data.startDate),
                                n = this.vuecal.minutesAtCursor(t),
                                i = n.cursorCoords,
                                r = n.minutes;
                            e.setMinutes(r);
                            var a = this.splitsCount ? this.getSplitAtCursor(t) : null;
                            this.vuecal.$emit("cell-contextmenu", Object(E["a"])(Object(E["a"])(Object(E["a"])({ date: e }, i), a || {}), {}, { e: t }));
                        },
                    },
                    computed: {
                        dnd: function () {
                            return this.modules.dnd;
                        },
                        nowInMinutes: function () {
                            return this.utils.date.dateToMinutes(this.vuecal.now);
                        },
                        isBeforeMinDate: function () {
                            return null !== this.minTimestamp && this.minTimestamp > this.data.endDate.getTime();
                        },
                        isAfterMaxDate: function () {
                            return this.maxTimestamp && this.maxTimestamp < this.data.startDate.getTime();
                        },
                        isDisabled: function () {
                            var t = this.options.disableDays,
                                e = this.vuecal.isYearsOrYearView;
                            return !(!t.length || !t.includes(this.data.formattedDate) || e) || this.isBeforeMinDate || this.isAfterMaxDate;
                        },
                        isSelected: {
                            get: function () {
                                var t = !1,
                                    e = this.view.selectedDate;
                                return (
                                    (t =
                                        "years" === this.view.id
                                            ? e.getFullYear() === this.data.startDate.getFullYear()
                                            : "year" === this.view.id
                                            ? e.getFullYear() === this.data.startDate.getFullYear() && e.getMonth() === this.data.startDate.getMonth()
                                            : e.getTime() === this.data.startDate.getTime()),
                                    t
                                );
                            },
                            set: function (t) {
                                this.view.selectedDate = t;
                            },
                        },
                        isWeekOrDayView: function () {
                            return ["week", "day"].includes(this.view.id);
                        },
                        transitionDirection: function () {
                            return this.vuecal.transitionDirection;
                        },
                        specialHours: function () {
                            var t = this;
                            return this.data.specialHours.map(function (e) {
                                var n = e.from,
                                    i = e.to;
                                return (n = Math.max(n, t.options.timeFrom)), (i = Math.min(i, t.options.timeTo)), Object(E["a"])(Object(E["a"])({}, e), {}, { height: (i - n) * t.timeScale, top: (n - t.options.timeFrom) * t.timeScale });
                            });
                        },
                        events: function () {
                            var t = this,
                                e = this.data,
                                n = e.startDate,
                                i = e.endDate,
                                r = [];
                            if (!["years", "year"].includes(this.view.id) || this.options.eventsCountOnYearView) {
                                var a;
                                if (((r = this.view.events.slice(0)), "month" === this.view.id)) (a = r).push.apply(a, h(this.view.outOfScopeEvents));
                                if (
                                    ((r = r.filter(function (e) {
                                        return t.utils.event.eventInRange(e, n, i);
                                    })),
                                    this.options.showAllDayEvents &&
                                        "month" !== this.view.id &&
                                        (r = r.filter(function (e) {
                                            return !!e.allDay === t.allDay;
                                        })),
                                    this.options.time && this.isWeekOrDayView && !this.allDay)
                                ) {
                                    var s = this.options,
                                        o = s.timeFrom,
                                        l = s.timeTo;
                                    r = r.filter(function (e) {
                                        var n = (e.daysCount > 1 && e.segments[t.data.formattedDate]) || {},
                                            i = 1 === e.daysCount && e.startTimeMinutes < l && e.endTimeMinutes > o,
                                            r = e.daysCount > 1 && n.startTimeMinutes < l && n.endTimeMinutes > o,
                                            a = !1;
                                        return e.allDay || i || r || a;
                                    });
                                }
                                !this.options.time ||
                                    !this.isWeekOrDayView ||
                                    (this.options.showAllDayEvents && this.allDay) ||
                                    r.sort(function (t, e) {
                                        return t.start < e.start ? -1 : 1;
                                    }),
                                    this.cellSplits.length || this.$nextTick(this.checkCellOverlappingEvents);
                            }
                            return r;
                        },
                        eventsCount: function () {
                            return this.events.length;
                        },
                        splits: function () {
                            var t = this;
                            return this.cellSplits.map(function (e, n) {
                                var i = t.events.filter(function (t) {
                                        return t.split === e.id;
                                    }),
                                    r = t.utils.event.checkCellOverlappingEvents(
                                        i.filter(function (t) {
                                            return !t.background && !t.allDay;
                                        }),
                                        t.options
                                    ),
                                    a = nt(r, 2),
                                    s = a[0],
                                    o = a[1];
                                return Object(E["a"])(Object(E["a"])({}, e), {}, { overlaps: s, overlapsStreak: o, events: i });
                            });
                        },
                        splitsCount: function () {
                            return this.splits.length;
                        },
                        cellClasses: function () {
                            var t;
                            return (
                                (t = {}),
                                Object(l["a"])(t, this.data.class, !!this.data.class),
                                Object(l["a"])(t, "vuecal__cell--current", this.data.current),
                                Object(l["a"])(t, "vuecal__cell--today", this.data.today),
                                Object(l["a"])(t, "vuecal__cell--out-of-scope", this.data.outOfScope),
                                Object(l["a"])(t, "vuecal__cell--before-min", this.isDisabled && this.isBeforeMinDate),
                                Object(l["a"])(t, "vuecal__cell--after-max", this.isDisabled && this.isAfterMaxDate),
                                Object(l["a"])(t, "vuecal__cell--disabled", this.isDisabled),
                                Object(l["a"])(t, "vuecal__cell--selected", this.isSelected),
                                Object(l["a"])(t, "vuecal__cell--highlighted", this.highlighted),
                                Object(l["a"])(t, "vuecal__cell--has-splits", this.splitsCount),
                                Object(l["a"])(t, "vuecal__cell--has-events", this.eventsCount),
                                t
                            );
                        },
                        cellStyles: function () {
                            return Object(E["a"])({}, this.cellWidth ? { width: "".concat(this.cellWidth, "%") } : {});
                        },
                        timelineVisible: function () {
                            var t = this.options,
                                e = t.time,
                                n = t.timeTo;
                            return this.data.today && this.isWeekOrDayView && e && !this.allDay && this.nowInMinutes <= n;
                        },
                        todaysTimePosition: function () {
                            if (this.data.today && this.options.time) {
                                var t = this.nowInMinutes - this.options.timeFrom;
                                return Math.round(t * this.timeScale);
                            }
                        },
                        timeScale: function () {
                            return this.options.timeCellHeight / this.options.timeStep;
                        },
                    },
                },
                ct = ut,
                dt = (n("95dd"), R(ct, J, Q, !1, null, null, null)),
                ft = dt.exports,
                vt = {
                    inject: ["vuecal", "view", "editEvents"],
                    components: { "vuecal-cell": ft },
                    props: {
                        options: { type: Object, required: !0 },
                        cells: { type: Array, required: !0 },
                        label: { type: String, required: !0 },
                        daySplits: {
                            type: Array,
                            default: function () {
                                return [];
                            },
                        },
                        shortEvents: { type: Boolean, default: !0 },
                        height: { type: String, default: "" },
                        cellOrSplitMinWidth: { type: Number, default: null },
                    },
                    computed: {
                        hasCellOrSplitWidth: function () {
                            return !!(this.options.minCellWidth || (this.daySplits.length && this.options.minSplitWidth));
                        },
                    },
                },
                ht = vt,
                pt = R(ht, X, K, !1, null, null, null),
                yt = pt.exports,
                mt = (n("1332"), 1440),
                gt = {
                    weekDays: Array(7).fill(""),
                    weekDaysShort: [],
                    months: Array(12).fill(""),
                    years: "",
                    year: "",
                    month: "",
                    week: "",
                    day: "",
                    today: "",
                    noEvent: "",
                    allDay: "",
                    deleteEvent: "",
                    createEvent: "",
                    dateFormat: "dddd MMMM D, YYYY",
                    am: "am",
                    pm: "pm",
                },
                bt = ["years", "year", "month", "week", "day"],
                wt = new O(gt),
                Dt = {
                    name: "vue-cal",
                    components: { "vuecal-cell": ft, "vuecal-header": q, WeekdaysHeadings: B, AllDayBar: yt },
                    provide: function () {
                        return {
                            vuecal: this,
                            utils: this.utils,
                            modules: this.modules,
                            previous: this.previous,
                            next: this.next,
                            switchView: this.switchView,
                            updateSelectedDate: this.updateSelectedDate,
                            editEvents: this.editEvents,
                            view: this.view,
                            domEvents: this.domEvents,
                        };
                    },
                    props: {
                        activeView: { type: String, default: "week" },
                        allDayBarHeight: { type: [String, Number], default: "25px" },
                        cellClickHold: { type: Boolean, default: !0 },
                        cellContextmenu: { type: Boolean, default: !1 },
                        clickToNavigate: { type: Boolean, default: !1 },
                        dblclickToNavigate: { type: Boolean, default: !0 },
                        disableDatePrototypes: { type: Boolean, default: !1 },
                        disableDays: {
                            type: Array,
                            default: function () {
                                return [];
                            },
                        },
                        disableViews: {
                            type: Array,
                            default: function () {
                                return [];
                            },
                        },
                        dragToCreateEvent: { type: Boolean, default: !0 },
                        dragToCreateThreshold: { type: Number, default: 15 },
                        editableEvents: { type: [Boolean, Object], default: !1 },
                        events: {
                            type: Array,
                            default: function () {
                                return [];
                            },
                        },
                        eventsCountOnYearView: { type: Boolean, default: !1 },
                        eventsOnMonthView: { type: [Boolean, String], default: !1 },
                        hideBody: { type: Boolean, default: !1 },
                        hideTitleBar: { type: Boolean, default: !1 },
                        hideViewSelector: { type: Boolean, default: !1 },
                        hideWeekdays: {
                            type: Array,
                            default: function () {
                                return [];
                            },
                        },
                        hideWeekends: { type: Boolean, default: !1 },
                        locale: { type: [String, Object], default: "en" },
                        maxDate: { type: [String, Date], default: "" },
                        minCellWidth: { type: Number, default: 0 },
                        minDate: { type: [String, Date], default: "" },
                        minEventWidth: { type: Number, default: 0 },
                        minSplitWidth: { type: Number, default: 0 },
                        onEventClick: { type: [Function, null], default: null },
                        onEventCreate: { type: [Function, null], default: null },
                        onEventDblclick: { type: [Function, null], default: null },
                        overlapsPerTimeStep: { type: Boolean, default: !1 },
                        resizeX: { type: Boolean, default: !1 },
                        selectedDate: { type: [String, Date], default: "" },
                        showAllDayEvents: { type: [Boolean, String], default: !1 },
                        showWeekNumbers: { type: [Boolean, String], default: !1 },
                        snapToTime: { type: Number, default: 0 },
                        small: { type: Boolean, default: !1 },
                        specialHours: {
                            type: Object,
                            default: function () {
                                return {};
                            },
                        },
                        splitDays: {
                            type: Array,
                            default: function () {
                                return [];
                            },
                        },
                        startWeekOnSunday: { type: Boolean, default: !1 },
                        stickySplitLabels: { type: Boolean, default: !1 },
                        time: { type: Boolean, default: !0 },
                        timeCellHeight: { type: Number, default: 40 },
                        timeFormat: { type: String, default: "" },
                        timeFrom: { type: Number, default: 0 },
                        timeStep: { type: Number, default: 60 },
                        timeTo: { type: Number, default: mt },
                        todayButton: { type: Boolean, default: !1 },
                        transitions: { type: Boolean, default: !0 },
                        twelveHour: { type: Boolean, default: !1 },
                        watchRealTime: { type: Boolean, default: !1 },
                        xsmall: { type: Boolean, default: !1 },
                    },
                    data: function () {
                        return {
                            ready: !1,
                            texts: Object(E["a"])({}, gt),
                            utils: { date: (!!this.disableDatePrototypes && wt.removePrototypes()) || wt, cell: null, event: null },
                            modules: { dnd: null },
                            view: { id: "", title: "", startDate: null, endDate: null, firstCellDate: null, lastCellDate: null, selectedDate: null, events: [] },
                            eventIdIncrement: 1,
                            now: new Date(),
                            timeTickerIds: [null, null],
                            domEvents: {
                                resizeAnEvent: { _eid: null, start: null, split: null, segment: null, originalEndTimeMinutes: 0, originalEnd: null, end: null, startCell: null, endCell: null },
                                dragAnEvent: { _eid: null },
                                dragCreateAnEvent: { startCursorY: null, start: null, split: null, event: null },
                                focusAnEvent: { _eid: null, mousedUp: !1 },
                                clickHoldAnEvent: { _eid: null, timeout: 1200, timeoutId: null },
                                dblTapACell: { taps: 0, timeout: 500 },
                                clickHoldACell: { cellId: null, split: null, timeout: 1200, timeoutId: null, eventCreated: !1 },
                                cancelClickEventCreation: !1,
                            },
                            mutableEvents: [],
                            transitionDirection: "right",
                        };
                    },
                    methods: {
                        loadLocale: function (t) {
                            var e = this;
                            if ("object" === p(this.locale)) return (this.texts = Object.assign({}, gt, t)), void this.utils.date.updateTexts(this.texts);
                            "en" === this.locale
                                ? (this.texts = Object.assign({}, gt, n("0a96")))
                                : n("4a53")("./" + t).then(function (t) {
                                      (e.texts = Object.assign({}, gt, t.default)), e.utils.date.updateTexts(e.texts);
                                  });
                        },
                        loadDragAndDrop: function () {
                            var t = this;
                            n.e(39)
                                .then(n.bind(null, "a691f"))
                                .then(function (e) {
                                    var n = e.DragAndDrop;
                                    t.modules.dnd = new n(t);
                                })
                                .catch(function () {
                                    return console.warn("Vue Cal: Missing drag & drop module.");
                                });
                        },
                        validateView: function (t) {
                            return (
                                bt.includes(t) || (console.error('Vue Cal: invalid active-view parameter provided: "'.concat(t, '".\nA valid view must be one of: ').concat(bt.join(", "), ".")), (t = "week")),
                                this.enabledViews.includes(t) || (console.warn('Vue Cal: the provided active-view "'.concat(t, '" is disabled. Using the "').concat(this.enabledViews[0], '" view instead.')), (t = this.enabledViews[0])),
                                t
                            );
                        },
                        switchToNarrowerView: function () {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                            this.transitionDirection = "right";
                            var e = this.enabledViews[this.enabledViews.indexOf(this.view.id) + 1];
                            e && this.switchView(e, t);
                        },
                        switchView: function (t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                            t = this.validateView(t);
                            var i = this.utils.date,
                                r = this.view.startDate && this.view.startDate.getTime();
                            if (this.transitions && n) {
                                if (this.view.id === t) return;
                                var a = this.enabledViews;
                                this.transitionDirection = a.indexOf(this.view.id) > a.indexOf(t) ? "left" : "right";
                            }
                            var s = this.view.id;
                            switch (((this.view.events = []), (this.view.id = t), (this.view.firstCellDate = null), (this.view.lastCellDate = null), e || (e = this.view.selectedDate || this.view.startDate), t)) {
                                case "years":
                                    (this.view.startDate = new Date(25 * Math.floor(e.getFullYear() / 25) || 2e3, 0, 1)), (this.view.endDate = new Date(this.view.startDate.getFullYear() + 25, 0, 1)), this.view.endDate.setSeconds(-1);
                                    break;
                                case "year":
                                    (this.view.startDate = new Date(e.getFullYear(), 0, 1)), (this.view.endDate = new Date(e.getFullYear() + 1, 0, 1)), this.view.endDate.setSeconds(-1);
                                    break;
                                case "month":
                                    (this.view.startDate = new Date(e.getFullYear(), e.getMonth(), 1)), (this.view.endDate = new Date(e.getFullYear(), e.getMonth() + 1, 1)), this.view.endDate.setSeconds(-1);
                                    var o = new Date(this.view.startDate);
                                    if (
                                        (o.getDay() !== (this.startWeekOnSunday ? 0 : 1) && (o = i.getPreviousFirstDayOfWeek(o, this.startWeekOnSunday)),
                                        (this.view.firstCellDate = o),
                                        (this.view.lastCellDate = i.addDays(o, 41)),
                                        this.view.lastCellDate.setHours(23, 59, 59, 0),
                                        this.hideWeekends)
                                    ) {
                                        if ([0, 6].includes(this.view.firstCellDate.getDay())) {
                                            var l = 6 !== this.view.firstCellDate.getDay() || this.startWeekOnSunday ? 1 : 2;
                                            this.view.firstCellDate = i.addDays(this.view.firstCellDate, l);
                                        }
                                        if ([0, 6].includes(this.view.startDate.getDay())) {
                                            var u = 6 === this.view.startDate.getDay() ? 2 : 1;
                                            this.view.startDate = i.addDays(this.view.startDate, u);
                                        }
                                        if ([0, 6].includes(this.view.lastCellDate.getDay())) {
                                            var c = 0 !== this.view.lastCellDate.getDay() || this.startWeekOnSunday ? 1 : 2;
                                            this.view.lastCellDate = i.subtractDays(this.view.lastCellDate, c);
                                        }
                                        if ([0, 6].includes(this.view.endDate.getDay())) {
                                            var d = 0 === this.view.endDate.getDay() ? 2 : 1;
                                            this.view.endDate = i.subtractDays(this.view.endDate, d);
                                        }
                                    }
                                    break;
                                case "week":
                                    e = i.getPreviousFirstDayOfWeek(e, this.startWeekOnSunday);
                                    var f = this.hideWeekends ? 5 : 7;
                                    (this.view.startDate = this.hideWeekends && this.startWeekOnSunday ? i.addDays(e, 1) : e),
                                        this.view.startDate.setHours(0, 0, 0, 0),
                                        (this.view.endDate = i.addDays(e, f)),
                                        this.view.endDate.setSeconds(-1);
                                    break;
                                case "day":
                                    (this.view.startDate = e), this.view.startDate.setHours(0, 0, 0, 0), (this.view.endDate = new Date(e)), this.view.endDate.setHours(23, 59, 59, 0);
                                    break;
                            }
                            this.addEventsToView();
                            var v = this.view.startDate && this.view.startDate.getTime();
                            if ((s !== t || v !== r) && (this.$emit("update:activeView", t), this.ready)) {
                                var h = this.view.startDate,
                                    p = Object(E["a"])(
                                        Object(E["a"])(
                                            { view: t, startDate: h, endDate: this.view.endDate },
                                            this.isMonthView ? { firstCellDate: this.view.firstCellDate, lastCellDate: this.view.lastCellDate, outOfScopeEvents: this.view.outOfScopeEvents.map(this.cleanupEvent) } : {}
                                        ),
                                        {},
                                        { events: this.view.events.map(this.cleanupEvent) },
                                        this.isWeekView ? { week: i.getWeek(this.startWeekOnSunday ? i.addDays(h, 1) : h) } : {}
                                    );
                                this.$emit("view-change", p);
                            }
                        },
                        previous: function () {
                            this.previousNext(!1);
                        },
                        next: function () {
                            this.previousNext();
                        },
                        previousNext: function () {
                            var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                                e = this.utils.date;
                            this.transitionDirection = t ? "right" : "left";
                            var n = t ? 1 : -1,
                                i = null,
                                r = this.view,
                                a = r.startDate,
                                s = r.id;
                            switch (s) {
                                case "years":
                                    i = new Date(a.getFullYear() + 25 * n, 0, 1);
                                    break;
                                case "year":
                                    i = new Date(a.getFullYear() + 1 * n, 1, 1);
                                    break;
                                case "month":
                                    i = new Date(a.getFullYear(), a.getMonth() + 1 * n, 1);
                                    break;
                                case "week":
                                    i = e[t ? "addDays" : "subtractDays"](e.getPreviousFirstDayOfWeek(a, this.startWeekOnSunday), 7);
                                    break;
                                case "day":
                                    i = e[t ? "addDays" : "subtractDays"](a, 1);
                                    break;
                            }
                            i && this.switchView(s, i);
                        },
                        addEventsToView: function () {
                            var t,
                                e = this,
                                n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                i = this.utils.event,
                                r = this.view,
                                a = r.startDate,
                                s = r.endDate,
                                o = r.firstCellDate,
                                l = r.lastCellDate;
                            if ((n.length || (this.view.events = []), (n = n.length ? n : h(this.mutableEvents)), n && (!this.isYearsOrYearView || this.eventsCountOnYearView))) {
                                var u = n.filter(function (t) {
                                    return i.eventInRange(t, a, s);
                                });
                                this.isYearsOrYearView ||
                                    (this.isMonthView && !this.eventsOnMonthView) ||
                                    (u = u.map(function (t) {
                                        return t.daysCount > 1 ? i.createEventSegments(t, o || a, l || s) : t;
                                    })),
                                    (t = this.view.events).push.apply(t, h(u)),
                                    this.isMonthView &&
                                        ((this.view.outOfScopeEvents = []),
                                        n.forEach(function (t) {
                                            (i.eventInRange(t, o, a) || i.eventInRange(t, s, l)) &&
                                                (e.view.events.some(function (e) {
                                                    return e._eid === t._eid;
                                                }) ||
                                                    e.view.outOfScopeEvents.push(t));
                                        }));
                            }
                        },
                        findAncestor: function (t, e) {
                            while ((t = t.parentElement) && !t.classList.contains(e));
                            return t;
                        },
                        isDOMElementAnEvent: function (t) {
                            return t.classList.contains("vuecal__event") || this.findAncestor(t, "vuecal__event");
                        },
                        onMouseMove: function (t) {
                            var e = this.domEvents,
                                n = e.resizeAnEvent,
                                i = e.dragAnEvent,
                                r = e.dragCreateAnEvent;
                            (null !== n._eid || null !== i._eid || r.start) && (t.preventDefault(), n._eid ? this.eventResizing(t) : this.dragToCreateEvent && r.start && this.eventDragCreation(t));
                        },
                        onMouseUp: function (t) {
                            var e = this.domEvents,
                                n = e.focusAnEvent,
                                i = e.resizeAnEvent,
                                r = e.clickHoldAnEvent,
                                a = e.clickHoldACell,
                                s = e.dragCreateAnEvent,
                                o = r._eid,
                                l = i._eid,
                                u = !1,
                                c = s.event,
                                d = s.start,
                                f = this.isDOMElementAnEvent(t.target),
                                v = n.mousedUp;
                            if (((n.mousedUp = !1), f && (this.domEvents.cancelClickEventCreation = !0), !a.eventCreated)) {
                                if (l) {
                                    var h = i.originalEnd,
                                        p = i.originalEndTimeMinutes,
                                        y = i.endTimeMinutes,
                                        m = this.view.events.find(function (t) {
                                            return t._eid === i._eid;
                                        });
                                    if (((u = y && y !== p), m && m.end.getTime() !== h.getTime())) {
                                        var g = this.mutableEvents.find(function (t) {
                                            return t._eid === i._eid;
                                        });
                                        (g.endTimeMinutes = m.endTimeMinutes), (g.end = m.end);
                                        var b = this.cleanupEvent(m),
                                            w = Object(E["a"])(Object(E["a"])({}, this.cleanupEvent(m)), {}, { end: h, endTimeMinutes: m.originalEndTimeMinutes });
                                        this.$emit("event-duration-change", { event: b, oldDate: i.originalEnd, originalEvent: w }), this.$emit("event-change", { event: b, originalEvent: w });
                                    }
                                    m && (m.resizing = !1),
                                        (i._eid = null),
                                        (i.start = null),
                                        (i.split = null),
                                        (i.segment = null),
                                        (i.originalEndTimeMinutes = null),
                                        (i.originalEnd = null),
                                        (i.endTimeMinutes = null),
                                        (i.startCell = null),
                                        (i.endCell = null);
                                } else d && (c && (this.emitWithEvent("event-drag-create", c), (s.event.resizing = !1)), (s.start = null), (s.split = null), (s.event = null));
                                f || l || this.unfocusEvent(), r.timeoutId && !o && (clearTimeout(r.timeoutId), (r.timeoutId = null)), a.timeoutId && (clearTimeout(a.timeoutId), (a.timeoutId = null));
                                var D = "function" === typeof this.onEventClick;
                                if (v && !u && !o && !c && D) {
                                    var _ = this.view.events.find(function (t) {
                                        return t._eid === n._eid;
                                    });
                                    return (
                                        !_ &&
                                            this.isMonthView &&
                                            (_ = this.view.outOfScopeEvents.find(function (t) {
                                                return t._eid === n._eid;
                                            })),
                                        _ && this.onEventClick(_, t)
                                    );
                                }
                            }
                        },
                        onKeyUp: function (t) {
                            27 === t.keyCode && this.cancelDelete();
                        },
                        eventResizing: function (t) {
                            var e = this.domEvents.resizeAnEvent,
                                n = this.view.events.find(function (t) {
                                    return t._eid === e._eid;
                                }) || { segments: {} },
                                i = this.minutesAtCursor(t),
                                r = i.minutes,
                                a = i.cursorCoords,
                                s = n.segments && n.segments[e.segment],
                                o = this.utils,
                                l = o.date,
                                u = o.event,
                                c = Math.max(r, this.timeFrom + 1, (s || n).startTimeMinutes + 1);
                            if (((n.endTimeMinutes = e.endTimeMinutes = c), this.snapToTime)) {
                                var d = n.endTimeMinutes + this.snapToTime / 2;
                                n.endTimeMinutes = d - (d % this.snapToTime);
                            }
                            if ((s && (s.endTimeMinutes = n.endTimeMinutes), n.end.setHours(0, n.endTimeMinutes, n.endTimeMinutes === mt ? -1 : 0, 0), this.resizeX && this.isWeekView)) {
                                n.daysCount = l.countDays(n.start, n.end);
                                var f = this.$refs.cells,
                                    v = f.offsetWidth / f.childElementCount,
                                    h = Math.floor(a.x / v);
                                if ((null === e.startCell && (e.startCell = h - (n.daysCount - 1)), e.endCell !== h)) {
                                    e.endCell = h;
                                    var p = l.addDays(n.start, h - e.startCell),
                                        y = Math.max(l.countDays(n.start, p), 1);
                                    if (y !== n.daysCount) {
                                        var m = null;
                                        (m = y > n.daysCount ? u.addEventSegment(n) : u.removeEventSegment(n)), (e.segment = m), (n.endTimeMinutes += 0.001);
                                    }
                                }
                            }
                            this.$emit("event-resizing", { _eid: n._eid, end: n.end, endTimeMinutes: n.endTimeMinutes });
                        },
                        eventDragCreation: function (t) {
                            var e = this.domEvents.dragCreateAnEvent,
                                n = e.start,
                                i = e.startCursorY,
                                r = e.split,
                                a = new Date(n),
                                s = this.minutesAtCursor(t),
                                o = s.minutes,
                                l = s.cursorCoords.y;
                            if (e.event || !(Math.abs(i - l) < this.dragToCreateThreshold))
                                if (e.event) {
                                    if ((a.setHours(0, o, o === mt ? -1 : 0, 0), this.snapToTime)) {
                                        var u = 60 * a.getHours() + a.getMinutes(),
                                            c = u + this.snapToTime / 2;
                                        (u = c - (c % this.snapToTime)), a.setHours(0, u, 0, 0);
                                    }
                                    var d = n < a,
                                        f = e.event;
                                    (f.start = d ? n : a), (f.end = d ? a : n), (f.startTimeMinutes = 60 * f.start.getHours() + f.start.getMinutes()), (f.endTimeMinutes = 60 * f.end.getHours() + f.end.getMinutes());
                                } else {
                                    if (((e.event = this.utils.event.createAnEvent(n, 1, { split: r })), !e.event)) return (e.start = null), (e.split = null), void (e.event = null);
                                    e.event.resizing = !0;
                                }
                        },
                        unfocusEvent: function () {
                            var t = this.domEvents,
                                e = t.focusAnEvent,
                                n = t.clickHoldAnEvent,
                                i = this.view.events.find(function (t) {
                                    return t._eid === (e._eid || n._eid);
                                });
                            (e._eid = null), (n._eid = null), i && ((i.focused = !1), (i.deleting = !1));
                        },
                        cancelDelete: function () {
                            var t = this.domEvents.clickHoldAnEvent;
                            if (t._eid) {
                                var e = this.view.events.find(function (e) {
                                    return e._eid === t._eid;
                                });
                                e && (e.deleting = !1), (t._eid = null), (t.timeoutId = null);
                            }
                        },
                        onEventTitleBlur: function (t, e) {
                            if (e.title !== t.target.innerHTML) {
                                var n = e.title;
                                e.title = t.target.innerHTML;
                                var i = this.cleanupEvent(e);
                                this.$emit("event-title-change", { event: i, oldTitle: n }), this.$emit("event-change", { event: i, originalEvent: Object(E["a"])(Object(E["a"])({}, i), {}, { title: n }) });
                            }
                        },
                        updateMutableEvents: function () {
                            var t = this,
                                e = this.utils.date;
                            (this.mutableEvents = []),
                                this.events.forEach(function (n) {
                                    var i = "string" === typeof n.start ? e.stringToDate(n.start) : n.start,
                                        r = e.formatDateLite(i),
                                        a = e.dateToMinutes(i),
                                        s = null;
                                    "string" === typeof n.end && n.end.includes("24:00") ? ((s = new Date(n.end.replace(" 24:00", ""))), s.setHours(23, 59, 59, 0)) : (s = "string" === typeof n.end ? e.stringToDate(n.end) : n.end);
                                    var o = e.formatDateLite(s),
                                        l = e.dateToMinutes(s);
                                    (l && l !== mt) || (!t.time || ("string" === typeof n.end && 10 === n.end.length) ? s.setHours(23, 59, 59, 0) : s.setSeconds(s.getSeconds() - 1), (o = e.formatDateLite(s)), (l = mt));
                                    var u = r !== o;
                                    (n = Object.assign(Object(E["a"])({}, t.utils.event.eventDefaults), n, {
                                        _eid: "".concat(t._uid, "_").concat(t.eventIdIncrement++),
                                        segments: u ? {} : null,
                                        start: i,
                                        startTimeMinutes: a,
                                        end: s,
                                        endTimeMinutes: l,
                                        daysCount: u ? e.countDays(i, s) : 1,
                                        class: n.class,
                                    })),
                                        t.mutableEvents.push(n);
                                });
                        },
                        minutesAtCursor: function (t) {
                            return this.utils.cell.minutesAtCursor(t);
                        },
                        createEvent: function (t, e) {
                            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                            return this.utils.event.createAnEvent(t, e, n);
                        },
                        cleanupEvent: function (t) {
                            t = Object(E["a"])({}, t);
                            var e = ["segments", "deletable", "deleting", "titleEditable", "resizable", "resizing", "draggable", "dragging", "draggingStatic", "focused"];
                            return (
                                e.forEach(function (e) {
                                    e in t && delete t[e];
                                }),
                                t.repeat || delete t.repeat,
                                t
                            );
                        },
                        emitWithEvent: function (t, e) {
                            this.$emit(t, this.cleanupEvent(e));
                        },
                        updateSelectedDate: function (t) {
                            if (((t = t && "string" === typeof t ? this.utils.date.stringToDate(t) : new Date(t)), t && t instanceof Date)) {
                                var e = this.view.selectedDate;
                                e && (this.transitionDirection = e.getTime() > t.getTime() ? "left" : "right"), t.setHours(0, 0, 0, 0), (e && e.getTime() === t.getTime()) || (this.view.selectedDate = t), this.switchView(this.view.id);
                            }
                        },
                        getWeekNumber: function (t) {
                            var e = this.utils.date,
                                n = this.firstCellDateWeekNumber,
                                i = n + t,
                                r = this.startWeekOnSunday ? 1 : 0;
                            return i > 52 ? e.getWeek(e.addDays(this.view.firstCellDate, 7 * t + r)) : i;
                        },
                        timeTick: function () {
                            (this.now = new Date()), (this.timeTickerIds[1] = setTimeout(this.timeTick, 6e4));
                        },
                        updateDateTexts: function () {
                            this.utils.date.updateTexts(this.texts);
                        },
                        alignWithScrollbar: function () {
                            if (!document.getElementById("vuecal-align-with-scrollbar")) {
                                var t = this.$refs.vuecal.getElementsByClassName("vuecal__scrollbar-check")[0],
                                    e = t.offsetWidth - t.children[0].offsetWidth;
                                if (e) {
                                    var n = document.createElement("style");
                                    (n.id = "vuecal-align-with-scrollbar"), (n.type = "text/css"), (n.innerHTML = ".vuecal__weekdays-headings,.vuecal__all-day {padding-right: ".concat(e, "px}")), document.head.appendChild(n);
                                }
                            }
                        },
                        cellOrSplitHasEvents: function (t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                            return (
                                t.length &&
                                ((!e && t.length) ||
                                    (e &&
                                        t.some(function (t) {
                                            return t.split === e.id;
                                        })))
                            );
                        },
                    },
                    created: function () {
                        (this.utils.cell = new M(this)),
                            (this.utils.event = new H(this, this.utils.date)),
                            this.loadLocale(this.locale),
                            this.editEvents.drag && this.loadDragAndDrop(),
                            this.updateMutableEvents(this.events),
                            (this.view.id = this.currentView),
                            this.selectedDate ? this.updateSelectedDate(this.selectedDate) : ((this.view.selectedDate = new Date()), this.switchView(this.currentView)),
                            this.time && this.watchRealTime && (this.timeTickerIds[0] = setTimeout(this.timeTick, 1e3 * (60 - this.now.getSeconds())));
                    },
                    mounted: function () {
                        var t = this.utils.date,
                            e = "ontouchstart" in window,
                            n = this.editEvents,
                            i = n.resize,
                            r = n.drag,
                            a = n.create,
                            s = n.delete,
                            o = n.title,
                            l = this.onEventClick && "function" === typeof this.onEventClick;
                        (i || r || a || s || o || l) && window.addEventListener(e ? "touchend" : "mouseup", this.onMouseUp),
                            (i || r || (a && this.dragToCreateEvent)) && window.addEventListener(e ? "touchmove" : "mousemove", this.onMouseMove, { passive: !1 }),
                            o && window.addEventListener("keyup", this.onKeyUp),
                            e &&
                                (this.$refs.vuecal.oncontextmenu = function (t) {
                                    t.preventDefault(), t.stopPropagation();
                                }),
                            this.hideBody || this.alignWithScrollbar();
                        var u = this.view.startDate,
                            c = Object(E["a"])(
                                Object(E["a"])({ view: this.view.id, startDate: u, endDate: this.view.endDate }, this.isMonthView ? { firstCellDate: this.view.firstCellDate, lastCellDate: this.view.lastCellDate } : {}),
                                {},
                                { events: this.view.events.map(this.cleanupEvent) },
                                this.isWeekView ? { week: t.getWeek(this.startWeekOnSunday ? t.addDays(u, 1) : u) } : {}
                            );
                        this.$emit("ready", c), (this.ready = !0);
                    },
                    beforeDestroy: function () {
                        var t = "ontouchstart" in window;
                        window.removeEventListener(t ? "touchmove" : "mousemove", this.onMouseMove, { passive: !1 }),
                            window.removeEventListener(t ? "touchend" : "mouseup", this.onMouseUp),
                            window.removeEventListener("keyup", this.onKeyUp),
                            this.timeTickerIds[0] && clearTimeout(this.timeTickerIds[0]),
                            this.timeTickerIds[1] && clearTimeout(this.timeTickerIds[1]),
                            (this.timeTickerIds = [null, null]);
                    },
                    computed: {
                        editEvents: function () {
                            return this.editableEvents && "object" === p(this.editableEvents)
                                ? { title: !!this.editableEvents.title, drag: !!this.editableEvents.drag, resize: !!this.editableEvents.resize, create: !!this.editableEvents.create, delete: !!this.editableEvents.delete }
                                : { title: !!this.editableEvents, drag: !!this.editableEvents, resize: !!this.editableEvents, create: !!this.editableEvents, delete: !!this.editableEvents };
                        },
                        views: function () {
                            return {
                                years: { label: this.texts.years, enabled: !this.disableViews.includes("years") },
                                year: { label: this.texts.year, enabled: !this.disableViews.includes("year") },
                                month: { label: this.texts.month, enabled: !this.disableViews.includes("month") },
                                week: { label: this.texts.week, enabled: !this.disableViews.includes("week") },
                                day: { label: this.texts.day, enabled: !this.disableViews.includes("day") },
                            };
                        },
                        currentView: function () {
                            return this.validateView(this.activeView);
                        },
                        enabledViews: function () {
                            var t = this;
                            return Object.keys(this.views).filter(function (e) {
                                return t.views[e].enabled;
                            });
                        },
                        hasTimeColumn: function () {
                            return this.time && this.isWeekOrDayView;
                        },
                        isShortMonthView: function () {
                            return this.isMonthView && "short" === this.eventsOnMonthView;
                        },
                        firstCellDateWeekNumber: function () {
                            var t = this.utils.date,
                                e = this.view.firstCellDate;
                            return t.getWeek(this.startWeekOnSunday ? t.addDays(e, 1) : e);
                        },
                        timeCells: function () {
                            for (var t = [], e = this.timeFrom, n = this.timeTo; e < n; e += this.timeStep) t.push({ hours: Math.floor(e / 60), minutes: e % 60, label: this.utils.date.formatTime(e, this.TimeFormat), value: e });
                            return t;
                        },
                        TimeFormat: function () {
                            return this.timeFormat || (this.twelveHour ? "h:mm{am}" : "HH:mm");
                        },
                        daySplits: function () {
                            return (
                                this.splitDays.filter(function (t) {
                                    return !t.hide;
                                }) || []
                            ).map(function (t, e) {
                                return Object(E["a"])(Object(E["a"])({}, t), {}, { id: t.id || e + 1 });
                            });
                        },
                        hasSplits: function () {
                            return this.daySplits.length && this.isWeekOrDayView;
                        },
                        hasShortEvents: function () {
                            return "short" === this.showAllDayEvents;
                        },
                        cellOrSplitMinWidth: function () {
                            var t = null;
                            return this.hasSplits && this.minSplitWidth ? (t = this.visibleDaysCount * this.minSplitWidth * this.daySplits.length) : this.minCellWidth && this.isWeekView && (t = this.visibleDaysCount * this.minCellWidth), t;
                        },
                        allDayBar: function () {
                            var t = this.allDayBarHeight || null;
                            return (
                                t && !isNaN(t) && (t += "px"),
                                {
                                    cells: this.viewCells,
                                    options: this.$props,
                                    label: this.texts.allDay,
                                    shortEvents: this.hasShortEvents,
                                    daySplits: (this.hasSplits && this.daySplits) || [],
                                    cellOrSplitMinWidth: this.cellOrSplitMinWidth,
                                    height: t,
                                }
                            );
                        },
                        minTimestamp: function () {
                            var t = null;
                            return this.minDate && "string" === typeof this.minDate ? (t = this.utils.date.stringToDate(this.minDate)) : this.minDate && this.minDate instanceof Date && (t = this.minDate), t ? t.getTime() : null;
                        },
                        maxTimestamp: function () {
                            var t = null;
                            return this.maxDate && "string" === typeof this.maxDate ? (t = this.utils.date.stringToDate(this.maxDate)) : this.maxDate && this.minDate instanceof Date && (t = this.maxDate), t ? t.getTime() : null;
                        },
                        weekDays: function () {
                            var t = this,
                                e = this.texts,
                                n = e.weekDays,
                                i = e.weekDaysShort,
                                r = void 0 === i ? [] : i;
                            return (
                                (n = n.slice(0).map(function (e, n) {
                                    return Object(E["a"])(Object(E["a"])({ label: e }, r.length ? { short: r[n] } : {}), {}, { hide: (t.hideWeekends && n >= 5) || (t.hideWeekdays.length && t.hideWeekdays.includes(n + 1)) });
                                })),
                                this.startWeekOnSunday && n.unshift(n.pop()),
                                n
                            );
                        },
                        weekDaysInHeader: function () {
                            return this.isMonthView || (this.isWeekView && !this.minCellWidth && !(this.hasSplits && this.minSplitWidth));
                        },
                        months: function () {
                            return this.texts.months.map(function (t) {
                                return { label: t };
                            });
                        },
                        specialDayHours: function () {
                            var t = this;
                            return this.specialHours && Object.keys(this.specialHours).length
                                ? Array(7)
                                      .fill("")
                                      .map(function (e, n) {
                                          var i = t.specialHours[n + 1] || [];
                                          return (
                                              Array.isArray(i) || (i = [i]),
                                              (e = []),
                                              i.forEach(function (t, i) {
                                                  var r = t.from,
                                                      a = t.to,
                                                      s = t.class;
                                                  e[i] = { day: n + 1, from: [null, void 0].includes(r) ? null : 1 * r, to: [null, void 0].includes(a) ? null : 1 * a, class: s || "" };
                                              }),
                                              e
                                          );
                                      })
                                : {};
                        },
                        viewTitle: function () {
                            var t = this.utils.date,
                                e = "",
                                n = this.view.startDate,
                                i = n.getFullYear(),
                                r = n.getMonth();
                            switch (this.view.id) {
                                case "years":
                                    e = this.texts.years;
                                    break;
                                case "year":
                                    e = i;
                                    break;
                                case "month":
                                    e = "".concat(this.months[r].label, " ").concat(i);
                                    break;
                                case "week":
                                    var a = this.view.endDate,
                                        s = n.getFullYear(),
                                        o = this.texts.months[n.getMonth()];
                                    this.xsmall && (o = o.substring(0, 3));
                                    var l = "".concat(o, " ").concat(s);
                                    if (a.getMonth() !== n.getMonth()) {
                                        var u = a.getFullYear(),
                                            c = this.texts.months[a.getMonth()];
                                        this.xsmall && (c = c.substring(0, 3)),
                                            (l =
                                                s === u
                                                    ? "".concat(o, " - ").concat(c, " ").concat(s)
                                                    : this.small
                                                    ? "".concat(o.substring(0, 3), " ").concat(s, " - ").concat(c.substring(0, 3), " ").concat(u)
                                                    : "".concat(o, " ").concat(s, " - ").concat(c, " ").concat(u));
                                    }
                                    e = ""
                                        .concat(this.texts.week, " ")
                                        .concat(t.getWeek(this.startWeekOnSunday ? t.addDays(n, 1) : n), " (")
                                        .concat(l, ")");
                                    break;
                                case "day":
                                    e = this.utils.date.formatDate(n, this.texts.dateFormat, this.texts);
                                    break;
                            }
                            return e;
                        },
                        viewCells: function () {
                            var t = this,
                                e = this.utils.date,
                                n = [],
                                i = null,
                                r = !1;
                            this.watchRealTime || (this.now = new Date());
                            var a = this.now;
                            switch (this.view.id) {
                                case "years":
                                    (i = this.view.startDate.getFullYear()),
                                        (n = Array.apply(null, Array(25)).map(function (t, n) {
                                            var r = new Date(i + n, 0, 1),
                                                s = new Date(i + n + 1, 0, 1);
                                            return s.setSeconds(-1), { startDate: r, formattedDate: e.formatDateLite(r), endDate: s, content: i + n, current: i + n === a.getFullYear() };
                                        }));
                                    break;
                                case "year":
                                    (i = this.view.startDate.getFullYear()),
                                        (n = Array.apply(null, Array(12)).map(function (n, r) {
                                            var s = new Date(i, r, 1),
                                                o = new Date(i, r + 1, 1);
                                            return (
                                                o.setSeconds(-1),
                                                { startDate: s, formattedDate: e.formatDateLite(s), endDate: o, content: t.xsmall ? t.months[r].label.substr(0, 3) : t.months[r].label, current: r === a.getMonth() && i === a.getFullYear() }
                                            );
                                        }));
                                    break;
                                case "month":
                                    var s = this.view.startDate.getMonth(),
                                        o = new Date(this.view.firstCellDate);
                                    (r = !1),
                                        (n = Array.apply(null, Array(42)).map(function (t, n) {
                                            var i = e.addDays(o, n),
                                                a = new Date(i);
                                            a.setHours(23, 59, 59, 0);
                                            var l = !r && e.isToday(i) && !r++;
                                            return { startDate: i, formattedDate: e.formatDateLite(i), endDate: a, content: i.getDate(), today: l, outOfScope: i.getMonth() !== s, class: "vuecal__cell--day".concat(i.getDay() || 7) };
                                        })),
                                        (this.hideWeekends || this.hideWeekdays.length) &&
                                            (n = n.filter(function (e) {
                                                var n = e.startDate.getDay() || 7;
                                                return !((t.hideWeekends && n >= 6) || (t.hideWeekdays.length && t.hideWeekdays.includes(n)));
                                            }));
                                    break;
                                case "week":
                                    r = !1;
                                    var l = this.view.startDate,
                                        u = this.weekDays;
                                    n = u
                                        .map(function (n, i) {
                                            var a = e.addDays(l, i),
                                                s = new Date(a);
                                            s.setHours(23, 59, 59, 0);
                                            var o = (a.getDay() || 7) - 1;
                                            return { startDate: a, formattedDate: e.formatDateLite(a), endDate: s, today: !r && e.isToday(a) && !r++, specialHours: t.specialDayHours[o] || [] };
                                        })
                                        .filter(function (t, e) {
                                            return !u[e].hide;
                                        });
                                    break;
                                case "day":
                                    var c = this.view.startDate,
                                        d = new Date(this.view.startDate);
                                    d.setHours(23, 59, 59, 0);
                                    var f = (c.getDay() || 7) - 1;
                                    n = [{ startDate: c, formattedDate: e.formatDateLite(c), endDate: d, today: e.isToday(c), specialHours: this.specialDayHours[f] || [] }];
                                    break;
                            }
                            return n;
                        },
                        visibleDaysCount: function () {
                            return this.isDayView
                                ? 1
                                : 7 -
                                      this.weekDays.reduce(function (t, e) {
                                          return t + e.hide;
                                      }, 0);
                        },
                        cellWidth: function () {
                            return 100 / this.visibleDaysCount;
                        },
                        cssClasses: function () {
                            var t,
                                e = this.domEvents,
                                n = e.resizeAnEvent,
                                i = e.dragAnEvent,
                                r = e.dragCreateAnEvent;
                            return (
                                (t = {}),
                                Object(l["a"])(t, "vuecal--".concat(this.view.id, "-view"), !0),
                                Object(l["a"])(t, "vuecal--".concat(this.locale), this.locale),
                                Object(l["a"])(t, "vuecal--no-time", !this.time),
                                Object(l["a"])(t, "vuecal--view-with-time", this.hasTimeColumn),
                                Object(l["a"])(t, "vuecal--week-numbers", this.showWeekNumbers && this.isMonthView),
                                Object(l["a"])(t, "vuecal--twelve-hour", this.twelveHour),
                                Object(l["a"])(t, "vuecal--click-to-navigate", this.clickToNavigate),
                                Object(l["a"])(t, "vuecal--hide-weekends", this.hideWeekends),
                                Object(l["a"])(t, "vuecal--split-days", this.hasSplits),
                                Object(l["a"])(t, "vuecal--sticky-split-labels", this.hasSplits && this.stickySplitLabels),
                                Object(l["a"])(t, "vuecal--overflow-x", (this.minCellWidth && this.isWeekView) || (this.hasSplits && this.minSplitWidth)),
                                Object(l["a"])(t, "vuecal--small", this.small),
                                Object(l["a"])(t, "vuecal--xsmall", this.xsmall),
                                Object(l["a"])(t, "vuecal--resizing-event", n._eid),
                                Object(l["a"])(t, "vuecal--drag-creating-event", r.event),
                                Object(l["a"])(t, "vuecal--dragging-event", i._eid),
                                Object(l["a"])(t, "vuecal--events-on-month-view", this.eventsOnMonthView),
                                Object(l["a"])(t, "vuecal--short-events", this.isMonthView && "short" === this.eventsOnMonthView),
                                Object(l["a"])(t, "vuecal--has-touch", "undefined" !== typeof window && "ontouchstart" in window),
                                t
                            );
                        },
                        isYearsOrYearView: function () {
                            return ["years", "year"].includes(this.view.id);
                        },
                        isYearsView: function () {
                            return "years" === this.view.id;
                        },
                        isYearView: function () {
                            return "year" === this.view.id;
                        },
                        isMonthView: function () {
                            return "month" === this.view.id;
                        },
                        isWeekOrDayView: function () {
                            return ["week", "day"].includes(this.view.id);
                        },
                        isWeekView: function () {
                            return "week" === this.view.id;
                        },
                        isDayView: function () {
                            return "day" === this.view.id;
                        },
                    },
                    watch: {
                        events: {
                            handler: function (t, e) {
                                this.updateMutableEvents(t), this.addEventsToView();
                            },
                            deep: !0,
                        },
                        locale: function (t) {
                            this.loadLocale(t);
                        },
                        selectedDate: function (t) {
                            this.updateSelectedDate(t);
                        },
                        activeView: function (t) {
                            this.switchView(t);
                        },
                    },
                },
                _t = Dt,
                Et = R(_t, s, o, !1, null, null, null),
                kt = Et.exports;
            e["default"] = kt;
        },
        fb6a: function (t, e, n) {
            "use strict";
            var i = n("23e7"),
                r = n("861d"),
                a = n("e8b5"),
                s = n("23cb"),
                o = n("50c4"),
                l = n("fc6a"),
                u = n("8418"),
                c = n("b622"),
                d = n("1dde"),
                f = d("slice"),
                v = c("species"),
                h = [].slice,
                p = Math.max;
            i(
                { target: "Array", proto: !0, forced: !f },
                {
                    slice: function (t, e) {
                        var n,
                            i,
                            c,
                            d = l(this),
                            f = o(d.length),
                            y = s(t, f),
                            m = s(void 0 === e ? f : e, f);
                        if (a(d) && ((n = d.constructor), "function" != typeof n || (n !== Array && !a(n.prototype)) ? r(n) && ((n = n[v]), null === n && (n = void 0)) : (n = void 0), n === Array || void 0 === n)) return h.call(d, y, m);
                        for (i = new (void 0 === n ? Array : n)(p(m - y, 0)), c = 0; y < m; y++, c++) y in d && u(i, c, d[y]);
                        return (i.length = c), i;
                    },
                }
            );
        },
        fc6a: function (t, e, n) {
            var i = n("44ad"),
                r = n("1d80");
            t.exports = function (t) {
                return i(r(t));
            };
        },
        fdbc: function (t, e) {
            t.exports = {
                CSSRuleList: 0,
                CSSStyleDeclaration: 0,
                CSSValueList: 0,
                ClientRectList: 0,
                DOMRectList: 0,
                DOMStringList: 0,
                DOMTokenList: 1,
                DataTransferItemList: 0,
                FileList: 0,
                HTMLAllCollection: 0,
                HTMLCollection: 0,
                HTMLFormElement: 0,
                HTMLSelectElement: 0,
                MediaList: 0,
                MimeTypeArray: 0,
                NamedNodeMap: 0,
                NodeList: 1,
                PaintRequestList: 0,
                Plugin: 0,
                PluginArray: 0,
                SVGLengthList: 0,
                SVGNumberList: 0,
                SVGPathSegList: 0,
                SVGPointList: 0,
                SVGStringList: 0,
                SVGTransformList: 0,
                SourceBufferList: 0,
                StyleSheetList: 0,
                TextTrackCueList: 0,
                TextTrackList: 0,
                TouchList: 0,
            };
        },
        fdbf: function (t, e, n) {
            var i = n("4930");
            t.exports = i && !Symbol.sham && "symbol" == typeof Symbol.iterator;
        },
    })["default"];
});
