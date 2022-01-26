/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 */
!function () {
    "use strict";
    var r = function (e) {
        if (null === e) return "null";
        if (e === undefined) return "undefined";
        var t = typeof e;
        return "object" == t && (Array.prototype.isPrototypeOf(e) || e.constructor && "Array" === e.constructor.name) ? "array" : "object" == t && (String.prototype.isPrototypeOf(e) || e.constructor && "String" === e.constructor.name) ? "string" : t
    }, t = function (e) {
        return {eq: e}
    }, s = t(function (e, t) {
        return e === t
    }), i = function (o) {
        return t(function (e, t) {
            if (e.length !== t.length) return !1;
            for (var n = e.length, r = 0; r < n; r++) if (!o.eq(e[r], t[r])) return !1;
            return !0
        })
    }, c = function (e, r) {
        return n = i(e), o = function (e) {
            return t = e, n = r, Array.prototype.slice.call(t).sort(n);
            var t, n
        }, t(function (e, t) {
            return n.eq(o(e), o(t))
        });
        var n, o
    }, u = function (u) {
        return t(function (e, t) {
            var n = Object.keys(e), r = Object.keys(t);
            if (!c(s).eq(n, r)) return !1;
            for (var o = n.length, i = 0; i < o; i++) {
                var a = n[i];
                if (!u.eq(e[a], t[a])) return !1
            }
            return !0
        })
    }, l = t(function (e, t) {
        if (e === t) return !0;
        var n = r(e);
        return n === r(t) && (-1 !== ["undefined", "boolean", "number", "string", "function", "xml", "null"].indexOf(n) ? e === t : "array" === n ? i(l).eq(e, t) : "object" === n && u(l).eq(e, t))
    }), te = function () {
    }, a = function (n, r) {
        return function () {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return n(r.apply(null, e))
        }
    }, S = function (e) {
        return function () {
            return e
        }
    }, o = function (e) {
        return e
    };

    function N(r) {
        for (var o = [], e = 1; e < arguments.length; e++) o[e - 1] = arguments[e];
        return function () {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            var n = o.concat(e);
            return r.apply(null, n)
        }
    }

    var e, n, f, d = function (t) {
            return function (e) {
                return !t(e)
            }
        }, m = function (e) {
            return function () {
                throw new Error(e)
            }
        }, p = function (e) {
            return e()
        }, y = function (e) {
            e()
        }, b = S(!1), w = S(!0), g = function () {
            return h
        }, h = (e = function (e) {
            return e.isNone()
        }, {
            fold: function (e, t) {
                return e()
            },
            is: b,
            isSome: b,
            isNone: w,
            getOr: f = function (e) {
                return e
            },
            getOrThunk: n = function (e) {
                return e()
            },
            getOrDie: function (e) {
                throw new Error(e || "error: getOrDie called on none.")
            },
            getOrNull: S(null),
            getOrUndefined: S(undefined),
            or: f,
            orThunk: n,
            map: g,
            each: te,
            bind: g,
            exists: b,
            forall: w,
            filter: g,
            equals: e,
            equals_: e,
            toArray: function () {
                return []
            },
            toString: S("none()")
        }), v = function (n) {
            var e = S(n), t = function () {
                return o
            }, r = function (e) {
                return e(n)
            }, o = {
                fold: function (e, t) {
                    return t(n)
                },
                is: function (e) {
                    return n === e
                },
                isSome: w,
                isNone: b,
                getOr: e,
                getOrThunk: e,
                getOrDie: e,
                getOrNull: e,
                getOrUndefined: e,
                or: t,
                orThunk: t,
                map: function (e) {
                    return v(e(n))
                },
                each: function (e) {
                    e(n)
                },
                bind: r,
                exists: r,
                forall: r,
                filter: function (e) {
                    return e(n) ? o : h
                },
                toArray: function () {
                    return [n]
                },
                toString: function () {
                    return "some(" + n + ")"
                },
                equals: function (e) {
                    return e.is(n)
                },
                equals_: function (e, t) {
                    return e.fold(b, function (e) {
                        return t(n, e)
                    })
                }
            };
            return o
        }, U = {
            some: v, none: g, from: function (e) {
                return null === e || e === undefined ? h : v(e)
            }
        }, C = function (r) {
            return function (e) {
                return n = typeof (t = e), (null === t ? "null" : "object" == n && (Array.prototype.isPrototypeOf(t) || t.constructor && "Array" === t.constructor.name) ? "array" : "object" == n && (String.prototype.isPrototypeOf(t) || t.constructor && "String" === t.constructor.name) ? "string" : n) === r;
                var t, n
            }
        }, x = function (t) {
            return function (e) {
                return typeof e === t
            }
        }, E = function (t) {
            return function (e) {
                return t === e
            }
        }, K = C("string"), k = C("object"), _ = C("array"), A = E(null), R = x("boolean"), T = E(undefined),
        X = function (e) {
            return null === e || e === undefined
        }, V = function (e) {
            return !X(e)
        }, D = x("function"), O = x("number"), B = Array.prototype.slice, P = Array.prototype.indexOf,
        L = Array.prototype.push, I = function (e, t) {
            return P.call(e, t)
        }, M = function (e, t) {
            return -1 < I(e, t)
        }, F = function (e, t) {
            for (var n = 0, r = e.length; n < r; n++) {
                if (t(e[n], n)) return !0
            }
            return !1
        }, z = function (e, t) {
            for (var n = e.length, r = new Array(n), o = 0; o < n; o++) {
                var i = e[o];
                r[o] = t(i, o)
            }
            return r
        }, Y = function (e, t) {
            for (var n = 0, r = e.length; n < r; n++) {
                t(e[n], n)
            }
        }, j = function (e, t) {
            for (var n = e.length - 1; 0 <= n; n--) {
                t(e[n], n)
            }
        }, H = function (e, t) {
            for (var n = [], r = 0, o = e.length; r < o; r++) {
                var i = e[r];
                t(i, r) && n.push(i)
            }
            return n
        }, q = function (e, t, n) {
            return j(e, function (e) {
                n = t(n, e)
            }), n
        }, $ = function (e, t, n) {
            return Y(e, function (e) {
                n = t(n, e)
            }), n
        }, W = function (e, t) {
            return function (e, t, n) {
                for (var r = 0, o = e.length; r < o; r++) {
                    var i = e[r];
                    if (t(i, r)) return U.some(i);
                    if (n(i, r)) break
                }
                return U.none()
            }(e, t, b)
        }, G = function (e, t) {
            for (var n = 0, r = e.length; n < r; n++) {
                if (t(e[n], n)) return U.some(n)
            }
            return U.none()
        }, J = function (e, t) {
            return function (e) {
                for (var t = [], n = 0, r = e.length; n < r; ++n) {
                    if (!_(e[n])) throw new Error("Arr.flatten item " + n + " was not an array, input: " + e);
                    L.apply(t, e[n])
                }
                return t
            }(z(e, t))
        }, Q = function (e, t) {
            for (var n = 0, r = e.length; n < r; ++n) {
                if (!0 !== t(e[n], n)) return !1
            }
            return !0
        }, Z = function (e) {
            var t = B.call(e, 0);
            return t.reverse(), t
        }, ee = function (e, t) {
            return H(e, function (e) {
                return !M(t, e)
            })
        }, ne = function (e, t) {
            return 0 <= t && t < e.length ? U.some(e[t]) : U.none()
        }, re = function (e) {
            return ne(e, 0)
        }, oe = function (e) {
            return ne(e, e.length - 1)
        }, ie = D(Array.from) ? Array.from : function (e) {
            return B.call(e)
        }, ae = Object.keys, ue = Object.hasOwnProperty, se = function (e, t) {
            for (var n = ae(e), r = 0, o = n.length; r < o; r++) {
                var i = n[r];
                t(e[i], i)
            }
        }, ce = function (e, n) {
            return le(e, function (e, t) {
                return {k: t, v: n(e, t)}
            })
        }, le = function (e, r) {
            var o = {};
            return se(e, function (e, t) {
                var n = r(e, t);
                o[n.k] = n.v
            }), o
        }, fe = function (n) {
            return function (e, t) {
                n[t] = e
            }
        }, de = function (e, n, r, o) {
            return se(e, function (e, t) {
                (n(e, t) ? r : o)(e, t)
            }), {}
        }, me = function (e, t) {
            var n = {}, r = {};
            return de(e, t, fe(n), fe(r)), {t: n, f: r}
        }, pe = function (e, t) {
            var n = {};
            return de(e, t, fe(n), te), n
        }, ge = function (e) {
            return n = function (e) {
                return e
            }, r = [], se(e, function (e, t) {
                r.push(n(e, t))
            }), r;
            var n, r
        }, he = function (e, t) {
            return ve(e, t) ? U.from(e[t]) : U.none()
        }, ve = function (e, t) {
            return ue.call(e, t)
        }, ye = function (e, t) {
            return ve(e, t) && e[t] !== undefined && null !== e[t]
        }, be = Array.isArray, Ce = function (e, t, n) {
            var r, o;
            if (!e) return !1;
            if (n = n || e, e.length !== undefined) {
                for (r = 0, o = e.length; r < o; r++) if (!1 === t.call(n, e[r], r, e)) return !1
            } else for (r in e) if (e.hasOwnProperty(r) && !1 === t.call(n, e[r], r, e)) return !1;
            return !0
        }, we = function (n, r) {
            var o = [];
            return Ce(n, function (e, t) {
                o.push(r(e, t, n))
            }), o
        }, xe = function (n, r) {
            var o = [];
            return Ce(n, function (e, t) {
                r && !r(e, t, n) || o.push(e)
            }), o
        }, Se = function (e, t) {
            if (e) for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
            return -1
        }, Ne = function (e, t, n, r) {
            for (var o = T(n) ? e[0] : n, i = 0; i < e.length; i++) o = t.call(r, o, e[i], i);
            return o
        }, Ee = function (e, t, n) {
            for (var r = 0, o = e.length; r < o; r++) if (t.call(n, e[r], r, e)) return r;
            return -1
        }, ke = function (e) {
            return e[e.length - 1]
        }, _e = function () {
            return (_e = Object.assign || function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }).apply(this, arguments)
        };

    function Ae() {
        for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
        for (var r = Array(e), o = 0, t = 0; t < n; t++) for (var i = arguments[t], a = 0, u = i.length; a < u; a++, o++) r[o] = i[a];
        return r
    }

    var Re, Te, De, Oe, Be, Pe, Le, Ie = function (e, t) {
            var n = function (e, t) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    if (r.test(t)) return r
                }
                return undefined
            }(e, t);
            if (!n) return {major: 0, minor: 0};
            var r = function (e) {
                return Number(t.replace(n, "$" + e))
            };
            return Fe(r(1), r(2))
        }, Me = function () {
            return Fe(0, 0)
        }, Fe = function (e, t) {
            return {major: e, minor: t}
        }, Ue = {
            nu: Fe, detect: function (e, t) {
                var n = String(t).toLowerCase();
                return 0 === e.length ? Me() : Ie(e, n)
            }, unknown: Me
        }, ze = function (e, t) {
            var n = String(t).toLowerCase();
            return W(e, function (e) {
                return e.search(n)
            })
        }, je = function (e, n) {
            return ze(e, n).map(function (e) {
                var t = Ue.detect(e.versionRegexes, n);
                return {current: e.name, version: t}
            })
        }, He = function (e, n) {
            return ze(e, n).map(function (e) {
                var t = Ue.detect(e.versionRegexes, n);
                return {current: e.name, version: t}
            })
        }, Ve = function (e, t) {
            return -1 !== e.indexOf(t)
        }, qe = function (e, t) {
            return n = e, o = 0, "" === (r = t) || n.length >= r.length && n.substr(o, o + r.length) === r;
            var n, r, o
        }, $e = function (t) {
            return function (e) {
                return e.replace(t, "")
            }
        }, We = $e(/^\s+|\s+$/g), Ke = $e(/^\s+/g), Xe = $e(/\s+$/g), Ye = /.*?version\/\ ?([0-9]+)\.([0-9]+).*/,
        Ge = function (t) {
            return function (e) {
                return Ve(e, t)
            }
        }, Je = [{
            name: "Edge", versionRegexes: [/.*?edge\/ ?([0-9]+)\.([0-9]+)$/], search: function (e) {
                return Ve(e, "edge/") && Ve(e, "chrome") && Ve(e, "safari") && Ve(e, "applewebkit")
            }
        }, {
            name: "Chrome", versionRegexes: [/.*?chrome\/([0-9]+)\.([0-9]+).*/, Ye], search: function (e) {
                return Ve(e, "chrome") && !Ve(e, "chromeframe")
            }
        }, {
            name: "IE",
            versionRegexes: [/.*?msie\ ?([0-9]+)\.([0-9]+).*/, /.*?rv:([0-9]+)\.([0-9]+).*/],
            search: function (e) {
                return Ve(e, "msie") || Ve(e, "trident")
            }
        }, {name: "Opera", versionRegexes: [Ye, /.*?opera\/([0-9]+)\.([0-9]+).*/], search: Ge("opera")}, {
            name: "Firefox",
            versionRegexes: [/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],
            search: Ge("firefox")
        }, {
            name: "Safari", versionRegexes: [Ye, /.*?cpu os ([0-9]+)_([0-9]+).*/], search: function (e) {
                return (Ve(e, "safari") || Ve(e, "mobile/")) && Ve(e, "applewebkit")
            }
        }], Qe = [{
            name: "Windows",
            search: Ge("win"),
            versionRegexes: [/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]
        }, {
            name: "iOS",
            search: function (e) {
                return Ve(e, "iphone") || Ve(e, "ipad")
            },
            versionRegexes: [/.*?version\/\ ?([0-9]+)\.([0-9]+).*/, /.*cpu os ([0-9]+)_([0-9]+).*/, /.*cpu iphone os ([0-9]+)_([0-9]+).*/]
        }, {name: "Android", search: Ge("android"), versionRegexes: [/.*?android\ ?([0-9]+)\.([0-9]+).*/]}, {
            name: "OSX",
            search: Ge("mac os x"),
            versionRegexes: [/.*?mac\ os\ x\ ?([0-9]+)_([0-9]+).*/]
        }, {name: "Linux", search: Ge("linux"), versionRegexes: []}, {
            name: "Solaris",
            search: Ge("sunos"),
            versionRegexes: []
        }, {name: "FreeBSD", search: Ge("freebsd"), versionRegexes: []}, {
            name: "ChromeOS",
            search: Ge("cros"),
            versionRegexes: [/.*?chrome\/([0-9]+)\.([0-9]+).*/]
        }], Ze = {browsers: S(Je), oses: S(Qe)}, et = "Firefox", tt = function (e) {
            var t = e.current, n = e.version, r = function (e) {
                return function () {
                    return t === e
                }
            };
            return {
                current: t,
                version: n,
                isEdge: r("Edge"),
                isChrome: r("Chrome"),
                isIE: r("IE"),
                isOpera: r("Opera"),
                isFirefox: r(et),
                isSafari: r("Safari")
            }
        }, nt = {
            unknown: function () {
                return tt({current: undefined, version: Ue.unknown()})
            },
            nu: tt,
            edge: S("Edge"),
            chrome: S("Chrome"),
            ie: S("IE"),
            opera: S("Opera"),
            firefox: S(et),
            safari: S("Safari")
        }, rt = "Windows", ot = "Android", it = "Solaris", at = "FreeBSD", ut = "ChromeOS", st = function (e) {
            var t = e.current, n = e.version, r = function (e) {
                return function () {
                    return t === e
                }
            };
            return {
                current: t,
                version: n,
                isWindows: r(rt),
                isiOS: r("iOS"),
                isAndroid: r(ot),
                isOSX: r("OSX"),
                isLinux: r("Linux"),
                isSolaris: r(it),
                isFreeBSD: r(at),
                isChromeOS: r(ut)
            }
        }, ct = {
            unknown: function () {
                return st({current: undefined, version: Ue.unknown()})
            },
            nu: st,
            windows: S(rt),
            ios: S("iOS"),
            android: S(ot),
            linux: S("Linux"),
            osx: S("OSX"),
            solaris: S(it),
            freebsd: S(at),
            chromeos: S(ut)
        }, lt = function (e, t) {
            var n, r, o, i, a, u, s, c, l, f, d, m, p = Ze.browsers(), g = Ze.oses(), h = je(p, e).fold(nt.unknown, nt.nu),
                v = He(g, e).fold(ct.unknown, ct.nu);
            return {
                browser: h,
                os: v,
                deviceType: (r = h, o = e, i = t, a = (n = v).isiOS() && !0 === /ipad/i.test(o), u = n.isiOS() && !a, s = n.isiOS() || n.isAndroid(), c = s || i("(pointer:coarse)"), l = a || !u && s && i("(min-device-width:768px)"), f = u || s && !l, d = r.isSafari() && n.isiOS() && !1 === /safari/i.test(o), m = !f && !l && !d, {
                    isiPad: S(a),
                    isiPhone: S(u),
                    isTablet: S(l),
                    isPhone: S(f),
                    isTouch: S(c),
                    isAndroid: n.isAndroid,
                    isiOS: n.isiOS,
                    isWebView: S(d),
                    isDesktop: S(m)
                })
            }
        }, ft = function (e) {
            return window.matchMedia(e).matches
        }, dt = (De = !(Re = function () {
            return lt(navigator.userAgent, ft)
        }), function () {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return De || (De = !0, Te = Re.apply(null, e)), Te
        }), mt = function () {
            return dt()
        }, pt = navigator.userAgent, gt = mt(), ht = gt.browser, vt = gt.os, yt = gt.deviceType,
        bt = /WebKit/.test(pt) && !ht.isEdge(),
        Ct = "FormData" in window && "FileReader" in window && "URL" in window && !!URL.createObjectURL,
        wt = -1 !== pt.indexOf("Windows Phone"), xt = {
            opera: ht.isOpera(),
            webkit: bt,
            ie: !(!ht.isIE() && !ht.isEdge()) && ht.version.major,
            gecko: ht.isFirefox(),
            mac: vt.isOSX() || vt.isiOS(),
            iOS: yt.isiPad() || yt.isiPhone(),
            android: vt.isAndroid(),
            contentEditable: !0,
            transparentSrc: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
            caretAfter: !0,
            range: window.getSelection && "Range" in window,
            documentMode: ht.isIE() ? document.documentMode || 7 : 10,
            fileApi: Ct,
            ceFalse: !0,
            cacheSuffix: null,
            container: null,
            experimentalShadowDom: !1,
            canHaveCSP: !ht.isIE(),
            desktop: yt.isDesktop(),
            windowsPhone: wt,
            browser: {
                current: ht.current,
                version: ht.version,
                isChrome: ht.isChrome,
                isEdge: ht.isEdge,
                isFirefox: ht.isFirefox,
                isIE: ht.isIE,
                isOpera: ht.isOpera,
                isSafari: ht.isSafari
            },
            os: {
                current: vt.current,
                version: vt.version,
                isAndroid: vt.isAndroid,
                isChromeOS: vt.isChromeOS,
                isFreeBSD: vt.isFreeBSD,
                isiOS: vt.isiOS,
                isLinux: vt.isLinux,
                isOSX: vt.isOSX,
                isSolaris: vt.isSolaris,
                isWindows: vt.isWindows
            },
            deviceType: {
                isDesktop: yt.isDesktop,
                isiPad: yt.isiPad,
                isiPhone: yt.isiPhone,
                isPhone: yt.isPhone,
                isTablet: yt.isTablet,
                isTouch: yt.isTouch,
                isWebView: yt.isWebView
            }
        }, St = /^\s*|\s*$/g, Nt = function (e) {
            return null === e || e === undefined ? "" : ("" + e).replace(St, "")
        }, Et = function (e, t) {
            return t ? !("array" !== t || !be(e)) || typeof e === t : e !== undefined
        }, kt = function (e, n, r, o) {
            o = o || this, e && (r && (e = e[r]), Ce(e, function (e, t) {
                return !1 !== n.call(o, e, t, r) && void kt(e, n, r, o)
            }))
        }, _t = {
            trim: Nt, isArray: be, is: Et, toArray: function (e) {
                if (be(e)) return e;
                for (var t = [], n = 0, r = e.length; n < r; n++) t[n] = e[n];
                return t
            }, makeMap: function (e, t, n) {
                var r;
                for (t = t || ",", "string" == typeof (e = e || []) && (e = e.split(t)), n = n || {}, r = e.length; r--;) n[e[r]] = {};
                return n
            }, each: Ce, map: we, grep: xe, inArray: Se, hasOwn: function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }, extend: function (e) {
                for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                for (var r = 0; r < t.length; r++) {
                    var o, i = t[r];
                    for (var a in i) {
                        !i.hasOwnProperty(a) || (o = i[a]) !== undefined && (e[a] = o)
                    }
                }
                return e
            }, create: function (e, t, n) {
                var r, o, i, a = this, u = 0,
                    s = (e = /^((static) )?([\w.]+)(:([\w.]+))?/.exec(e))[3].match(/(^|\.)(\w+)$/i)[2],
                    c = a.createNS(e[3].replace(/\.\w+$/, ""), n);
                if (!c[s]) {
                    if ("static" === e[2]) return c[s] = t, void (this.onCreate && this.onCreate(e[2], e[3], c[s]));
                    t[s] || (t[s] = te, u = 1), c[s] = t[s], a.extend(c[s].prototype, t), e[5] && (r = a.resolve(e[5]).prototype, o = e[5].match(/\.(\w+)$/i)[1], i = c[s], c[s] = u ? function () {
                        return r[o].apply(this, arguments)
                    } : function () {
                        return this.parent = r[o], i.apply(this, arguments)
                    }, c[s].prototype[s] = c[s], a.each(r, function (e, t) {
                        c[s].prototype[t] = r[t]
                    }), a.each(t, function (e, t) {
                        r[t] ? c[s].prototype[t] = function () {
                            return this.parent = r[t], e.apply(this, arguments)
                        } : t !== s && (c[s].prototype[t] = e)
                    })), a.each(t["static"], function (e, t) {
                        c[s][t] = e
                    })
                }
            }, walk: kt, createNS: function (e, t) {
                var n, r;
                for (t = t || window, e = e.split("."), n = 0; n < e.length; n++) t[r = e[n]] || (t[r] = {}), t = t[r];
                return t
            }, resolve: function (e, t) {
                var n, r;
                for (t = t || window, n = 0, r = (e = e.split(".")).length; n < r && (t = t[e[n]]); n++) ;
                return t
            }, explode: function (e, t) {
                return !e || Et(e, "array") ? e : we(e.split(t || ","), Nt)
            }, _addCacheSuffix: function (e) {
                var t = xt.cacheSuffix;
                return t && (e += (-1 === e.indexOf("?") ? "?" : "&") + t), e
            }
        }, At = function (e) {
            if (null === e || e === undefined) throw new Error("Node cannot be null or undefined");
            return {dom: e}
        }, Rt = {
            fromHtml: function (e, t) {
                var n = (t || document).createElement("div");
                if (n.innerHTML = e, !n.hasChildNodes() || 1 < n.childNodes.length) throw console.error("HTML does not have a single root node", e), new Error("HTML must have a single root node");
                return At(n.childNodes[0])
            }, fromTag: function (e, t) {
                var n = (t || document).createElement(e);
                return At(n)
            }, fromText: function (e, t) {
                var n = (t || document).createTextNode(e);
                return At(n)
            }, fromDom: At, fromPoint: function (e, t, n) {
                return U.from(e.dom.elementFromPoint(t, n)).map(At)
            }
        }, Tt = function (e, t) {
            for (var n = [], r = function (e) {
                return n.push(e), t(e)
            }, o = t(e); (o = o.bind(r)).isSome();) ;
            return n
        }, Dt = function (e, t) {
            var n = e.dom;
            if (1 !== n.nodeType) return !1;
            var r = n;
            if (r.matches !== undefined) return r.matches(t);
            if (r.msMatchesSelector !== undefined) return r.msMatchesSelector(t);
            if (r.webkitMatchesSelector !== undefined) return r.webkitMatchesSelector(t);
            if (r.mozMatchesSelector !== undefined) return r.mozMatchesSelector(t);
            throw new Error("Browser lacks native selectors")
        }, Ot = function (e) {
            return 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType || 0 === e.childElementCount
        }, Bt = function (e, t) {
            return e.dom === t.dom
        }, Pt = function (e, t) {
            return n = e.dom, r = t.dom, o = n, i = r, a = Node.DOCUMENT_POSITION_CONTAINED_BY, 0 != (o.compareDocumentPosition(i) & a);
            var n, r, o, i, a
        }, Lt = function (e, t) {
            return mt().browser.isIE() ? Pt(e, t) : (n = t, r = e.dom, o = n.dom, r !== o && r.contains(o));
            var n, r, o
        }, It = ("undefined" != typeof window || Function("return this;")(), function (e) {
            return e.dom.nodeName.toLowerCase()
        }), Mt = function (e) {
            return e.dom.nodeType
        }, Ft = function (t) {
            return function (e) {
                return Mt(e) === t
            }
        }, Ut = Ft(1), zt = Ft(3), jt = Ft(9), Ht = Ft(11), Vt = function (e) {
            return Rt.fromDom(e.dom.ownerDocument)
        }, qt = function (e) {
            return jt(e) ? e : Vt(e)
        }, $t = function (e) {
            return Rt.fromDom(qt(e).dom.defaultView)
        }, Wt = function (e) {
            return U.from(e.dom.parentNode).map(Rt.fromDom)
        }, Kt = function (e) {
            return U.from(e.dom.previousSibling).map(Rt.fromDom)
        }, Xt = function (e) {
            return U.from(e.dom.nextSibling).map(Rt.fromDom)
        }, Yt = function (e) {
            return Z(Tt(e, Kt))
        }, Gt = function (e) {
            return Tt(e, Xt)
        }, Jt = function (e) {
            return z(e.dom.childNodes, Rt.fromDom)
        }, Qt = function (e, t) {
            var n = e.dom.childNodes;
            return U.from(n[t]).map(Rt.fromDom)
        }, Zt = function (e) {
            return Qt(e, 0)
        }, en = function (e) {
            return Qt(e, e.dom.childNodes.length - 1)
        }, tn = function (e) {
            return Ht(e) && V(e.dom.host)
        }, nn = D(Element.prototype.attachShadow) && D(Node.prototype.getRootNode), rn = S(nn), on = nn ? function (e) {
            return Rt.fromDom(e.dom.getRootNode())
        } : qt, an = function (e) {
            return tn(e) ? e : function (e) {
                var t = e.dom.head;
                if (null === t || t === undefined) throw new Error("Head is not available yet");
                return Rt.fromDom(t)
            }(qt(e))
        }, un = function (e) {
            return Rt.fromDom(e.dom.host)
        }, sn = function (e) {
            return V(e.dom.shadowRoot)
        }, cn = function (t, n) {
            Wt(t).each(function (e) {
                e.dom.insertBefore(n.dom, t.dom)
            })
        }, ln = function (e, t) {
            Xt(e).fold(function () {
                Wt(e).each(function (e) {
                    dn(e, t)
                })
            }, function (e) {
                cn(e, t)
            })
        }, fn = function (t, n) {
            Zt(t).fold(function () {
                dn(t, n)
            }, function (e) {
                t.dom.insertBefore(n.dom, e.dom)
            })
        }, dn = function (e, t) {
            e.dom.appendChild(t.dom)
        }, mn = function (t, e) {
            Y(e, function (e) {
                dn(t, e)
            })
        }, pn = function (e) {
            e.dom.textContent = "", Y(Jt(e), function (e) {
                gn(e)
            })
        }, gn = function (e) {
            var t = e.dom;
            null !== t.parentNode && t.parentNode.removeChild(t)
        }, hn = function (e) {
            var t, n = Jt(e);
            0 < n.length && (t = e, Y(n, function (e) {
                cn(t, e)
            })), gn(e)
        }, vn = function (e) {
            var t = zt(e) ? e.dom.parentNode : e.dom;
            if (t === undefined || null === t || null === t.ownerDocument) return !1;
            var n, r, o, i, a = t.ownerDocument;
            return o = Rt.fromDom(t), i = on(o), (tn(i) ? U.some(i) : U.none()).fold(function () {
                return a.body.contains(t)
            }, (n = vn, r = un, function (e) {
                return n(r(e))
            }))
        }, yn = function (n, r) {
            return {
                left: n, top: r, translate: function (e, t) {
                    return yn(n + e, r + t)
                }
            }
        }, bn = yn, Cn = function (e, t) {
            return e !== undefined ? e : t !== undefined ? t : 0
        }, wn = function (e) {
            var t, n = e.dom, r = n.ownerDocument.body;
            return r === n ? bn(r.offsetLeft, r.offsetTop) : vn(e) ? (t = n.getBoundingClientRect(), bn(t.left, t.top)) : bn(0, 0)
        }, xn = function (e) {
            var t = e !== undefined ? e.dom : document, n = t.body.scrollLeft || t.documentElement.scrollLeft,
                r = t.body.scrollTop || t.documentElement.scrollTop;
            return bn(n, r)
        }, Sn = function (e, t, n) {
            var r = (n !== undefined ? n.dom : document).defaultView;
            r && r.scrollTo(e, t)
        }, Nn = function (e, t) {
            mt().browser.isSafari() && D(e.dom.scrollIntoViewIfNeeded) ? e.dom.scrollIntoViewIfNeeded(!1) : e.dom.scrollIntoView(t)
        }, En = function (e, t, n, r) {
            return {x: e, y: t, width: n, height: r, right: e + n, bottom: t + r}
        }, kn = function (e) {
            var t, n, r = e === undefined ? window : e, o = r.document, i = xn(Rt.fromDom(o));
            return n = (t = r) === undefined ? window : t, U.from(n.visualViewport).fold(function () {
                var e = r.document.documentElement, t = e.clientWidth, n = e.clientHeight;
                return En(i.left, i.top, t, n)
            }, function (e) {
                return En(Math.max(e.pageLeft, i.left), Math.max(e.pageTop, i.top), e.width, e.height)
            })
        }, _n = function (t) {
            return function (e) {
                return !!e && e.nodeType === t
            }
        }, An = function (e) {
            return !!e && !Object.getPrototypeOf(e)
        }, Rn = _n(1), Tn = function (e) {
            var n = e.map(function (e) {
                return e.toLowerCase()
            });
            return function (e) {
                if (e && e.nodeName) {
                    var t = e.nodeName.toLowerCase();
                    return M(n, t)
                }
                return !1
            }
        }, Dn = function (r, e) {
            var o = e.toLowerCase().split(" ");
            return function (e) {
                var t;
                if (Rn(e)) for (t = 0; t < o.length; t++) {
                    var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
                    if ((n ? n.getPropertyValue(r) : null) === o[t]) return !0
                }
                return !1
            }
        }, On = function (t) {
            return function (e) {
                return Rn(e) && e.hasAttribute(t)
            }
        }, Bn = function (e) {
            return Rn(e) && e.hasAttribute("data-mce-bogus")
        }, Pn = function (e) {
            return Rn(e) && "TABLE" === e.tagName
        }, Ln = function (t) {
            return function (e) {
                if (Rn(e)) {
                    if (e.contentEditable === t) return !0;
                    if (e.getAttribute("data-mce-contenteditable") === t) return !0
                }
                return !1
            }
        }, In = Tn(["textarea", "input"]), Mn = _n(3), Fn = _n(8), Un = _n(9), zn = _n(11), jn = Tn(["br"]),
        Hn = Tn(["img"]), Vn = Ln("true"), qn = Ln("false"), $n = Tn(["td", "th"]),
        Wn = Tn(["video", "audio", "object", "embed"]), Kn = function (e) {
            return e.style !== undefined && D(e.style.getPropertyValue)
        }, Xn = function (e, t, n) {
            if (!(K(n) || R(n) || O(n))) throw console.error("Invalid call to Attribute.set. Key ", t, ":: Value ", n, ":: Element ", e), new Error("Attribute value was not simple");
            e.setAttribute(t, n + "")
        }, Yn = function (e, t, n) {
            Xn(e.dom, t, n)
        }, Gn = function (e, t) {
            var n = e.dom;
            se(t, function (e, t) {
                Xn(n, t, e)
            })
        }, Jn = function (e, t) {
            var n = e.dom.getAttribute(t);
            return null === n ? undefined : n
        }, Qn = function (e, t) {
            return U.from(Jn(e, t))
        }, Zn = function (e, t) {
            e.dom.removeAttribute(t)
        }, er = function (e, t) {
            var n = e.dom;
            se(t, function (e, t) {
                !function (e, t, n) {
                    if (!K(n)) throw console.error("Invalid call to CSS.set. Property ", t, ":: Value ", n, ":: Element ", e), new Error("CSS value must be a string: " + n);
                    Kn(e) && e.style.setProperty(t, n)
                }(n, t, e)
            })
        }, tr = function (e, t) {
            var n = e.dom, r = window.getComputedStyle(n).getPropertyValue(t);
            return "" !== r || vn(e) ? r : nr(n, t)
        }, nr = function (e, t) {
            return Kn(e) ? e.style.getPropertyValue(t) : ""
        }, rr = function (e, t) {
            var n = e.dom, r = nr(n, t);
            return U.from(r).filter(function (e) {
                return 0 < e.length
            })
        }, or = function (e) {
            var t = {}, n = e.dom;
            if (Kn(n)) for (var r = 0; r < n.style.length; r++) {
                var o = n.style.item(r);
                t[o] = n.style[o]
            }
            return t
        }, ir = mt().browser, ar = function (e) {
            return W(e, Ut)
        }, ur = function (e, t) {
            return e.children && M(e.children, t)
        }, sr = function (e, t, n) {
            var r, o, i, a = 0, u = 0, s = e.ownerDocument;
            if (n = n || e, t) {
                if (n === e && t.getBoundingClientRect && "static" === tr(Rt.fromDom(e), "position")) return {
                    x: a = (o = t.getBoundingClientRect()).left + (s.documentElement.scrollLeft || e.scrollLeft) - s.documentElement.clientLeft,
                    y: u = o.top + (s.documentElement.scrollTop || e.scrollTop) - s.documentElement.clientTop
                };
                for (r = t; r && r !== n && r.nodeType && !ur(r, n);) a += r.offsetLeft || 0, u += r.offsetTop || 0, r = r.offsetParent;
                for (r = t.parentNode; r && r !== n && r.nodeType && !ur(r, n);) a -= r.scrollLeft || 0, u -= r.scrollTop || 0, r = r.parentNode;
                u += (i = Rt.fromDom(t), ir.isFirefox() && "table" === It(i) ? ar(Jt(i)).filter(function (e) {
                    return "caption" === It(e)
                }).bind(function (o) {
                    return ar(Gt(o)).map(function (e) {
                        var t = e.dom.offsetTop, n = o.dom.offsetTop, r = o.dom.offsetHeight;
                        return t <= n ? -r : 0
                    })
                }).getOr(0) : 0)
            }
            return {x: a, y: u}
        }, cr = {}, lr = {exports: cr};
    Oe = undefined, Be = cr, Pe = lr, Le = undefined, function (e) {
        "object" == typeof Be && void 0 !== Pe ? Pe.exports = e() : "function" == typeof Oe && Oe.amd ? Oe([], e) : ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).EphoxContactWrapper = e()
    }(function () {
        return function l(i, a, u) {
            function s(t, e) {
                if (!a[t]) {
                    if (!i[t]) {
                        var n = "function" == typeof Le && Le;
                        if (!e && n) return n(t, !0);
                        if (c) return c(t, !0);
                        var r = new Error("Cannot find module '" + t + "'");
                        throw r.code = "MODULE_NOT_FOUND", r
                    }
                    var o = a[t] = {exports: {}};
                    i[t][0].call(o.exports, function (e) {
                        return s(i[t][1][e] || e)
                    }, o, o.exports, l, i, a, u)
                }
                return a[t].exports
            }

            for (var c = "function" == typeof Le && Le, e = 0; e < u.length; e++) s(u[e]);
            return s
        }({
            1: [function (e, t, n) {
                var r, o, i = t.exports = {};

                function a() {
                    throw new Error("setTimeout has not been defined")
                }

                function u() {
                    throw new Error("clearTimeout has not been defined")
                }

                function s(e) {
                    if (r === setTimeout) return setTimeout(e, 0);
                    if ((r === a || !r) && setTimeout) return r = setTimeout, setTimeout(e, 0);
                    try {
                        return r(e, 0)
                    } catch (t) {
                        try {
                            return r.call(null, e, 0)
                        } catch (t) {
                            return r.call(this, e, 0)
                        }
                    }
                }

                !function () {
                    try {
                        r = "function" == typeof setTimeout ? setTimeout : a
                    } catch (e) {
                        r = a
                    }
                    try {
                        o = "function" == typeof clearTimeout ? clearTimeout : u
                    } catch (e) {
                        o = u
                    }
                }();
                var c, l = [], f = !1, d = -1;

                function m() {
                    f && c && (f = !1, c.length ? l = c.concat(l) : d = -1, l.length && p())
                }

                function p() {
                    if (!f) {
                        var e = s(m);
                        f = !0;
                        for (var t = l.length; t;) {
                            for (c = l, l = []; ++d < t;) c && c[d].run();
                            d = -1, t = l.length
                        }
                        c = null, f = !1, function (e) {
                            if (o === clearTimeout) return clearTimeout(e);
                            if ((o === u || !o) && clearTimeout) return o = clearTimeout, clearTimeout(e);
                            try {
                                o(e)
                            } catch (t) {
                                try {
                                    return o.call(null, e)
                                } catch (t) {
                                    return o.call(this, e)
                                }
                            }
                        }(e)
                    }
                }

                function g(e, t) {
                    this.fun = e, this.array = t
                }

                function h() {
                }

                i.nextTick = function (e) {
                    var t = new Array(arguments.length - 1);
                    if (1 < arguments.length) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                    l.push(new g(e, t)), 1 !== l.length || f || s(p)
                }, g.prototype.run = function () {
                    this.fun.apply(null, this.array)
                }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = h, i.addListener = h, i.once = h, i.off = h, i.removeListener = h, i.removeAllListeners = h, i.emit = h, i.prependListener = h, i.prependOnceListener = h, i.listeners = function (e) {
                    return []
                }, i.binding = function (e) {
                    throw new Error("process.binding is not supported")
                }, i.cwd = function () {
                    return "/"
                }, i.chdir = function (e) {
                    throw new Error("process.chdir is not supported")
                }, i.umask = function () {
                    return 0
                }
            }, {}], 2: [function (e, f, t) {
                (function (t) {
                    function r() {
                    }

                    function a(e) {
                        if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
                        if ("function" != typeof e) throw new TypeError("not a function");
                        this._state = 0, this._handled = !1, this._value = undefined, this._deferreds = [], l(e, this)
                    }

                    function o(r, o) {
                        for (; 3 === r._state;) r = r._value;
                        0 !== r._state ? (r._handled = !0, a._immediateFn(function () {
                            var e, t = 1 === r._state ? o.onFulfilled : o.onRejected;
                            if (null !== t) {
                                try {
                                    e = t(r._value)
                                } catch (n) {
                                    return void u(o.promise, n)
                                }
                                i(o.promise, e)
                            } else (1 === r._state ? i : u)(o.promise, r._value)
                        })) : r._deferreds.push(o)
                    }

                    function i(e, t) {
                        try {
                            if (t === e) throw new TypeError("A promise cannot be resolved with itself.");
                            if (t && ("object" == typeof t || "function" == typeof t)) {
                                var n = t.then;
                                if (t instanceof a) return e._state = 3, e._value = t, void s(e);
                                if ("function" == typeof n) return void l((r = n, o = t, function () {
                                    r.apply(o, arguments)
                                }), e)
                            }
                            e._state = 1, e._value = t, s(e)
                        } catch (i) {
                            u(e, i)
                        }
                        var r, o
                    }

                    function u(e, t) {
                        e._state = 2, e._value = t, s(e)
                    }

                    function s(e) {
                        2 === e._state && 0 === e._deferreds.length && a._immediateFn(function () {
                            e._handled || a._unhandledRejectionFn(e._value)
                        });
                        for (var t = 0, n = e._deferreds.length; t < n; t++) o(e, e._deferreds[t]);
                        e._deferreds = null
                    }

                    function c(e, t, n) {
                        this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = n
                    }

                    function l(e, t) {
                        var n = !1;
                        try {
                            e(function (e) {
                                n || (n = !0, i(t, e))
                            }, function (e) {
                                n || (n = !0, u(t, e))
                            })
                        } catch (r) {
                            if (n) return;
                            n = !0, u(t, r)
                        }
                    }

                    var e, n;
                    e = this, n = setTimeout, a.prototype["catch"] = function (e) {
                        return this.then(null, e)
                    }, a.prototype.then = function (e, t) {
                        var n = new this.constructor(r);
                        return o(this, new c(e, t, n)), n
                    }, a.all = function (e) {
                        var s = Array.prototype.slice.call(e);
                        return new a(function (o, i) {
                            if (0 === s.length) return o([]);
                            var a = s.length;
                            for (var e = 0; e < s.length; e++) !function u(t, e) {
                                try {
                                    if (e && ("object" == typeof e || "function" == typeof e)) {
                                        var n = e.then;
                                        if ("function" == typeof n) return void n.call(e, function (e) {
                                            u(t, e)
                                        }, i)
                                    }
                                    s[t] = e, 0 == --a && o(s)
                                } catch (r) {
                                    i(r)
                                }
                            }(e, s[e])
                        })
                    }, a.resolve = function (t) {
                        return t && "object" == typeof t && t.constructor === a ? t : new a(function (e) {
                            e(t)
                        })
                    }, a.reject = function (n) {
                        return new a(function (e, t) {
                            t(n)
                        })
                    }, a.race = function (o) {
                        return new a(function (e, t) {
                            for (var n = 0, r = o.length; n < r; n++) o[n].then(e, t)
                        })
                    }, a._immediateFn = "function" == typeof t ? function (e) {
                        t(e)
                    } : function (e) {
                        n(e, 0)
                    }, a._unhandledRejectionFn = function (e) {
                        "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
                    }, a._setImmediateFn = function (e) {
                        a._immediateFn = e
                    }, a._setUnhandledRejectionFn = function (e) {
                        a._unhandledRejectionFn = e
                    }, void 0 !== f && f.exports ? f.exports = a : e.Promise || (e.Promise = a)
                }).call(this, e("timers").setImmediate)
            }, {timers: 3}], 3: [function (s, e, c) {
                (function (e, t) {
                    var r = s("process/browser.js").nextTick, n = Function.prototype.apply, o = Array.prototype.slice,
                        i = {}, a = 0;

                    function u(e, t) {
                        this._id = e, this._clearFn = t
                    }

                    c.setTimeout = function () {
                        return new u(n.call(setTimeout, window, arguments), clearTimeout)
                    }, c.setInterval = function () {
                        return new u(n.call(setInterval, window, arguments), clearInterval)
                    }, c.clearTimeout = c.clearInterval = function (e) {
                        e.close()
                    }, u.prototype.unref = u.prototype.ref = function () {
                    }, u.prototype.close = function () {
                        this._clearFn.call(window, this._id)
                    }, c.enroll = function (e, t) {
                        clearTimeout(e._idleTimeoutId), e._idleTimeout = t
                    }, c.unenroll = function (e) {
                        clearTimeout(e._idleTimeoutId), e._idleTimeout = -1
                    }, c._unrefActive = c.active = function (e) {
                        clearTimeout(e._idleTimeoutId);
                        var t = e._idleTimeout;
                        0 <= t && (e._idleTimeoutId = setTimeout(function () {
                            e._onTimeout && e._onTimeout()
                        }, t))
                    }, c.setImmediate = "function" == typeof e ? e : function (e) {
                        var t = a++, n = !(arguments.length < 2) && o.call(arguments, 1);
                        return i[t] = !0, r(function () {
                            i[t] && (n ? e.apply(null, n) : e.call(null), c.clearImmediate(t))
                        }), t
                    }, c.clearImmediate = "function" == typeof t ? t : function (e) {
                        delete i[e]
                    }
                }).call(this, s("timers").setImmediate, s("timers").clearImmediate)
            }, {"process/browser.js": 1, timers: 3}], 4: [function (e, t, n) {
                var r = e("promise-polyfill"), o = "undefined" != typeof window ? window : Function("return this;")();
                t.exports = {boltExport: o.Promise || r}
            }, {"promise-polyfill": 2}]
        }, {}, [4])(4)
    });
    var fr = lr.exports.boltExport, dr = function (e) {
            var n = U.none(), t = [], r = function (e) {
                o() ? a(e) : t.push(e)
            }, o = function () {
                return n.isSome()
            }, i = function (e) {
                Y(e, a)
            }, a = function (t) {
                n.each(function (e) {
                    setTimeout(function () {
                        t(e)
                    }, 0)
                })
            };
            return e(function (e) {
                o() || (n = U.some(e), i(t), t = [])
            }), {
                get: r, map: function (n) {
                    return dr(function (t) {
                        r(function (e) {
                            t(n(e))
                        })
                    })
                }, isReady: o
            }
        }, mr = {
            nu: dr, pure: function (t) {
                return dr(function (e) {
                    e(t)
                })
            }
        }, pr = function (e) {
            setTimeout(function () {
                throw e
            }, 0)
        }, gr = function (n) {
            var e = function (e) {
                n().then(e, pr)
            };
            return {
                map: function (e) {
                    return gr(function () {
                        return n().then(e)
                    })
                }, bind: function (t) {
                    return gr(function () {
                        return n().then(function (e) {
                            return t(e).toPromise()
                        })
                    })
                }, anonBind: function (e) {
                    return gr(function () {
                        return n().then(function () {
                            return e.toPromise()
                        })
                    })
                }, toLazy: function () {
                    return mr.nu(e)
                }, toCached: function () {
                    var e = null;
                    return gr(function () {
                        return null === e && (e = n()), e
                    })
                }, toPromise: n, get: e
            }
        }, hr = function (e) {
            return gr(function () {
                return new fr(e)
            })
        }, vr = function (a, e) {
            return e(function (r) {
                var o = [], i = 0;
                0 === a.length ? r([]) : Y(a, function (e, t) {
                    var n;
                    e.get((n = t, function (e) {
                        o[n] = e, ++i >= a.length && r(o)
                    }))
                })
            })
        }, yr = function (n) {
            return {
                is: function (e) {
                    return n === e
                }, isValue: w, isError: b, getOr: S(n), getOrThunk: S(n), getOrDie: S(n), or: function (e) {
                    return yr(n)
                }, orThunk: function (e) {
                    return yr(n)
                }, fold: function (e, t) {
                    return t(n)
                }, map: function (e) {
                    return yr(e(n))
                }, mapError: function (e) {
                    return yr(n)
                }, each: function (e) {
                    e(n)
                }, bind: function (e) {
                    return e(n)
                }, exists: function (e) {
                    return e(n)
                }, forall: function (e) {
                    return e(n)
                }, toOptional: function () {
                    return U.some(n)
                }
            }
        }, br = function (n) {
            return {
                is: b, isValue: b, isError: w, getOr: o, getOrThunk: function (e) {
                    return e()
                }, getOrDie: function () {
                    return m(String(n))()
                }, or: function (e) {
                    return e
                }, orThunk: function (e) {
                    return e()
                }, fold: function (e, t) {
                    return e(n)
                }, map: function (e) {
                    return br(n)
                }, mapError: function (e) {
                    return br(e(n))
                }, each: te, bind: function (e) {
                    return br(n)
                }, exists: b, forall: w, toOptional: U.none
            }
        }, Cr = {
            value: yr, error: br, fromOption: function (e, t) {
                return e.fold(function () {
                    return br(t)
                }, yr)
            }
        }, wr = function (a) {
            if (!_(a)) throw new Error("cases must be an array");
            if (0 === a.length) throw new Error("there must be at least one case");
            var u = [], n = {};
            return Y(a, function (e, r) {
                var t = ae(e);
                if (1 !== t.length) throw new Error("one and only one name per case");
                var o = t[0], i = e[o];
                if (n[o] !== undefined) throw new Error("duplicate key detected:" + o);
                if ("cata" === o) throw new Error("cannot have a case named cata (sorry)");
                if (!_(i)) throw new Error("case arguments must be an array");
                u.push(o), n[o] = function () {
                    for (var n = [], e = 0; e < arguments.length; e++) n[e] = arguments[e];
                    var t = n.length;
                    if (t !== i.length) throw new Error("Wrong number of arguments to case " + o + ". Expected " + i.length + " (" + i + "), got " + t);
                    return {
                        fold: function () {
                            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                            if (e.length !== a.length) throw new Error("Wrong number of arguments to fold. Expected " + a.length + ", got " + e.length);
                            return e[r].apply(null, n)
                        }, match: function (e) {
                            var t = ae(e);
                            if (u.length !== t.length) throw new Error("Wrong number of arguments to match. Expected: " + u.join(",") + "\nActual: " + t.join(","));
                            if (!Q(u, function (e) {
                                return M(t, e)
                            })) throw new Error("Not all branches were specified when using match. Specified: " + t.join(", ") + "\nRequired: " + u.join(", "));
                            return e[o].apply(null, n)
                        }, log: function (e) {
                            console.log(e, {constructors: u, constructor: o, params: n})
                        }
                    }
                }
            }), n
        },
        xr = (wr([{bothErrors: ["error1", "error2"]}, {firstError: ["error1", "value2"]}, {secondError: ["value1", "error2"]}, {bothValues: ["value1", "value2"]}]), function (e) {
            return e.fold(o, o)
        });

    function Sr(e, t, n, r, o) {
        return e(n, r) ? U.some(n) : D(o) && o(n) ? U.none() : t(n, r, o)
    }

    var Nr, Er, kr, _r, Ar, Rr, Tr = function (e, t, n) {
        for (var r = e.dom, o = D(n) ? n : b; r.parentNode;) {
            r = r.parentNode;
            var i = Rt.fromDom(r);
            if (t(i)) return U.some(i);
            if (o(i)) break
        }
        return U.none()
    }, Dr = function (e, t, n) {
        return Sr(function (e, t) {
            return t(e)
        }, Tr, e, t, n)
    }, Or = function (e, t) {
        return W(e.dom.childNodes, function (e) {
            return t(Rt.fromDom(e))
        }).map(Rt.fromDom)
    }, Br = function (e, t, n) {
        return Tr(e, function (e) {
            return Dt(e, t)
        }, n)
    }, Pr = function (e, t) {
        return n = t, o = (r = e) === undefined ? document : r.dom, Ot(o) ? U.none() : U.from(o.querySelector(n)).map(Rt.fromDom);
        var n, r, o
    }, Lr = function (e, t, n) {
        return Sr(Dt, Br, e, t, n)
    }, Ir = window.Promise ? window.Promise : (Nr = function (n, r) {
        return function () {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            n.apply(r, e)
        }
    }, Er = Array.isArray || function (e) {
        return "[object Array]" === Object.prototype.toString.call(e)
    }, _r = (kr = function (e) {
        if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
        if ("function" != typeof e) throw new TypeError("not a function");
        this._state = null, this._value = null, this._deferreds = [], Ar(e, Nr(Fr, this), Nr(Ur, this))
    }).immediateFn || "function" == typeof setImmediate && setImmediate || function (e) {
        return setTimeout(e, 1)
    }, Ar = function (e, t, n) {
        var r = !1;
        try {
            e(function (e) {
                r || (r = !0, t(e))
            }, function (e) {
                r || (r = !0, n(e))
            })
        } catch (o) {
            if (r) return;
            r = !0, n(o)
        }
    }, kr.prototype["catch"] = function (e) {
        return this.then(null, e)
    }, kr.prototype.then = function (n, r) {
        var o = this;
        return new kr(function (e, t) {
            Mr.call(o, new jr(n, r, e, t))
        })
    }, kr.all = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var s = Array.prototype.slice.call(1 === e.length && Er(e[0]) ? e[0] : e);
        return new kr(function (o, i) {
            if (0 === s.length) return o([]);
            for (var a = s.length, u = function (t, e) {
                try {
                    if (e && ("object" == typeof e || "function" == typeof e)) {
                        var n = e.then;
                        if ("function" == typeof n) return void n.call(e, function (e) {
                            u(t, e)
                        }, i)
                    }
                    s[t] = e, 0 == --a && o(s)
                } catch (r) {
                    i(r)
                }
            }, e = 0; e < s.length; e++) u(e, s[e])
        })
    }, kr.resolve = function (t) {
        return t && "object" == typeof t && t.constructor === kr ? t : new kr(function (e) {
            e(t)
        })
    }, kr.reject = function (n) {
        return new kr(function (e, t) {
            t(n)
        })
    }, kr.race = function (o) {
        return new kr(function (e, t) {
            for (var n = 0, r = o.length; n < r; n++) o[n].then(e, t)
        })
    }, kr);

    function Mr(r) {
        var o = this;
        null !== this._state ? _r(function () {
            var e, t = o._state ? r.onFulfilled : r.onRejected;
            if (null !== t) {
                try {
                    e = t(o._value)
                } catch (n) {
                    return void r.reject(n)
                }
                r.resolve(e)
            } else (o._state ? r.resolve : r.reject)(o._value)
        }) : this._deferreds.push(r)
    }

    function Fr(e) {
        try {
            if (e === this) throw new TypeError("A promise cannot be resolved with itself.");
            if (e && ("object" == typeof e || "function" == typeof e)) {
                var t = e.then;
                if ("function" == typeof t) return void Ar(Nr(t, e), Nr(Fr, this), Nr(Ur, this))
            }
            this._state = !0, this._value = e, zr.call(this)
        } catch (n) {
            Ur.call(this, n)
        }
    }

    function Ur(e) {
        this._state = !1, this._value = e, zr.call(this)
    }

    function zr() {
        for (var e = 0, t = this._deferreds.length; e < t; e++) Mr.call(this, this._deferreds[e]);
        this._deferreds = null
    }

    function jr(e, t, n, r) {
        this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.resolve = n, this.reject = r
    }

    var Hr, Vr = function (e, t) {
        return "number" != typeof t && (t = 0), setTimeout(e, t)
    }, qr = function (e, t) {
        return "number" != typeof t && (t = 1), setInterval(e, t)
    }, $r = function (n, r) {
        var o, e = function () {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            clearTimeout(o), o = Vr(function () {
                n.apply(this, e)
            }, r)
        };
        return e.stop = function () {
            clearTimeout(o)
        }, e
    }, Wr = {
        requestAnimationFrame: function (e, t) {
            Rr ? Rr.then(e) : Rr = new Ir(function (e) {
                !function (e, t) {
                    for (var n = window.requestAnimationFrame, r = ["ms", "moz", "webkit"], o = 0; o < r.length && !n; o++) n = window[r[o] + "RequestAnimationFrame"];
                    (n = n || function (e) {
                        window.setTimeout(e, 0)
                    })(e, t)
                }(e, t = t || document.body)
            }).then(e)
        }, setTimeout: Vr, setInterval: qr, setEditorTimeout: function (e, t, n) {
            return Vr(function () {
                e.removed || t()
            }, n)
        }, setEditorInterval: function (e, t, n) {
            var r = qr(function () {
                e.removed ? clearInterval(r) : t()
            }, n);
            return r
        }, debounce: $r, throttle: $r, clearInterval: function (e) {
            return clearInterval(e)
        }, clearTimeout: function (e) {
            return clearTimeout(e)
        }
    }, Kr = function (m, p) {
        void 0 === p && (p = {});
        var g = 0, h = {}, v = Rt.fromDom(m), y = qt(v), b = p.maxLoadTime || 5e3, n = function (e, t, n) {
            var r, o = _t._addCacheSuffix(e), i = he(h, o).getOrThunk(function () {
                return {id: "mce-u" + g++, passed: [], failed: [], count: 0}
            });
            (h[o] = i).count++;
            var a, u, s, c = function (e, t) {
                for (var n = e.length; n--;) e[n]();
                i.status = t, i.passed = [], i.failed = [], r && (r.onload = null, r.onerror = null, r = null)
            }, l = function () {
                return c(i.passed, 2)
            }, f = function () {
                return c(i.failed, 3)
            }, d = function () {
                var e;
                e = d, function () {
                    for (var e = m.styleSheets, t = e.length; t--;) {
                        var n = e[t].ownerNode;
                        if (n && n.id === r.id) return l(), 1
                    }
                }() || (Date.now() - u < b ? Wr.setTimeout(e) : f())
            };
            t && i.passed.push(t), n && i.failed.push(n), 1 !== i.status && (2 !== i.status ? 3 !== i.status ? (i.status = 1, a = Rt.fromTag("link", y.dom), Gn(a, {
                rel: "stylesheet",
                type: "text/css",
                id: i.id
            }), u = Date.now(), p.contentCssCors && Yn(a, "crossOrigin", "anonymous"), p.referrerPolicy && Yn(a, "referrerpolicy", p.referrerPolicy), (r = a.dom).onload = d, r.onerror = f, s = a, dn(an(v), s), Yn(a, "href", o)) : f() : l())
        }, o = function (t) {
            return hr(function (e) {
                n(t, a(e, S(Cr.value(t))), a(e, S(Cr.error(t))))
            })
        }, t = function (e) {
            var r = _t._addCacheSuffix(e);
            he(h, r).each(function (e) {
                var t, n;
                0 == --e.count && (delete h[r], t = e.id, n = an(v), Pr(n, "#" + t).each(gn))
            })
        };
        return {
            load: n, loadAll: function (e, n, r) {
                var t;
                t = z(e, o), vr(t, hr).get(function (e) {
                    var t = function (e, t) {
                        for (var n = [], r = [], o = 0, i = e.length; o < i; o++) {
                            var a = e[o];
                            (t(a, o) ? n : r).push(a)
                        }
                        return {pass: n, fail: r}
                    }(e, function (e) {
                        return e.isValue()
                    });
                    0 < t.fail.length ? r(t.fail.map(xr)) : n(t.pass.map(xr))
                })
            }, unload: t, unloadAll: function (e) {
                Y(e, function (e) {
                    t(e)
                })
            }, _setReferrerPolicy: function (e) {
                p.referrerPolicy = e
            }
        }
    }, Xr = (Hr = new WeakMap, {
        forElement: function (e, t) {
            var n = on(e).dom;
            return U.from(Hr.get(n)).getOrThunk(function () {
                var e = Kr(n, t);
                return Hr.set(n, e), e
            })
        }
    }), Yr = (Gr.prototype.current = function () {
        return this.node
    }, Gr.prototype.next = function (e) {
        return this.node = this.findSibling(this.node, "firstChild", "nextSibling", e), this.node
    }, Gr.prototype.prev = function (e) {
        return this.node = this.findSibling(this.node, "lastChild", "previousSibling", e), this.node
    }, Gr.prototype.prev2 = function (e) {
        return this.node = this.findPreviousNode(this.node, "lastChild", "previousSibling", e), this.node
    }, Gr.prototype.findSibling = function (e, t, n, r) {
        var o, i;
        if (e) {
            if (!r && e[t]) return e[t];
            if (e !== this.rootNode) {
                if (o = e[n]) return o;
                for (i = e.parentNode; i && i !== this.rootNode; i = i.parentNode) if (o = i[n]) return o
            }
        }
    }, Gr.prototype.findPreviousNode = function (e, t, n, r) {
        var o, i, a;
        if (e) {
            if (o = e[n], this.rootNode && o === this.rootNode) return;
            if (o) {
                if (!r) for (a = o[t]; a; a = a[t]) if (!a[t]) return a;
                return o
            }
            if ((i = e.parentNode) && i !== this.rootNode) return i
        }
    }, Gr);

    function Gr(e, t) {
        this.node = e, this.rootNode = t, this.current = this.current.bind(this), this.next = this.next.bind(this), this.prev = this.prev.bind(this), this.prev2 = this.prev2.bind(this)
    }

    var Jr, Qr, Zr = function (t) {
            var n;
            return function (e) {
                return (n = n || function (e, t) {
                    for (var n = {}, r = 0, o = e.length; r < o; r++) {
                        var i = e[r];
                        n[String(i)] = t(i, r)
                    }
                    return n
                }(t, w)).hasOwnProperty(It(e))
            }
        }, eo = Zr(["h1", "h2", "h3", "h4", "h5", "h6"]),
        to = Zr(["article", "aside", "details", "div", "dt", "figcaption", "footer", "form", "fieldset", "header", "hgroup", "html", "main", "nav", "section", "summary", "body", "p", "dl", "multicol", "dd", "figure", "address", "center", "blockquote", "h1", "h2", "h3", "h4", "h5", "h6", "listing", "xmp", "pre", "plaintext", "menu", "dir", "ul", "ol", "li", "hr", "table", "tbody", "thead", "tfoot", "th", "tr", "td", "caption"]),
        no = function (e) {
            return Ut(e) && !to(e)
        }, ro = function (e) {
            return Ut(e) && "br" === It(e)
        },
        oo = Zr(["h1", "h2", "h3", "h4", "h5", "h6", "p", "div", "address", "pre", "form", "blockquote", "center", "dir", "fieldset", "header", "footer", "article", "section", "hgroup", "aside", "nav", "figure"]),
        io = Zr(["ul", "ol", "dl"]), ao = Zr(["li", "dd", "dt"]), uo = Zr(["thead", "tbody", "tfoot"]),
        so = Zr(["td", "th"]), co = Zr(["pre", "script", "textarea", "style"]), lo = "\ufeff", fo = "\xa0", mo = lo,
        po = function (e) {
            return e === lo
        }, go = function (e) {
            return e.replace(/\uFEFF/g, "")
        }, ho = Rn, vo = Mn, yo = function (e) {
            return vo(e) && (e = e.parentNode), ho(e) && e.hasAttribute("data-mce-caret")
        }, bo = function (e) {
            return vo(e) && po(e.data)
        }, Co = function (e) {
            return yo(e) || bo(e)
        }, wo = function (e) {
            return e.firstChild !== e.lastChild || !jn(e.firstChild)
        }, xo = function (e) {
            var t = e.container();
            return !!Mn(t) && (t.data.charAt(e.offset()) === mo || e.isAtStart() && bo(t.previousSibling))
        }, So = function (e) {
            var t = e.container();
            return !!Mn(t) && (t.data.charAt(e.offset() - 1) === mo || e.isAtEnd() && bo(t.nextSibling))
        }, No = function (e, t, n) {
            var r, o = t.ownerDocument.createElement(e);
            o.setAttribute("data-mce-caret", n ? "before" : "after"), o.setAttribute("data-mce-bogus", "all"), o.appendChild(((r = document.createElement("br")).setAttribute("data-mce-bogus", "1"), r));
            var i = t.parentNode;
            return n ? i.insertBefore(o, t) : t.nextSibling ? i.insertBefore(o, t.nextSibling) : i.appendChild(o), o
        }, Eo = function (e) {
            return vo(e) && e.data[0] === mo
        }, ko = function (e) {
            return vo(e) && e.data[e.data.length - 1] === mo
        }, _o = function (e) {
            return e && e.hasAttribute("data-mce-caret") ? (t = e.getElementsByTagName("br"), n = t[t.length - 1], Bn(n) && n.parentNode.removeChild(n), e.removeAttribute("data-mce-caret"), e.removeAttribute("data-mce-bogus"), e.removeAttribute("style"), e.removeAttribute("_moz_abspos"), e) : null;
            var t, n
        }, Ao = Vn, Ro = qn, To = jn, Do = Mn, Oo = Tn(["script", "style", "textarea"]),
        Bo = Tn(["img", "input", "textarea", "hr", "iframe", "video", "audio", "object", "embed"]), Po = Tn(["table"]),
        Lo = Co, Io = function (e) {
            return !Lo(e) && (Do(e) ? !Oo(e.parentNode) : Bo(e) || To(e) || Po(e) || Mo(e))
        }, Mo = function (e) {
            return !1 === (Rn(t = e) && "true" === t.getAttribute("unselectable")) && Ro(e);
            var t
        }, Fo = function (e, t) {
            return Io(e) && function (e, t) {
                for (e = e.parentNode; e && e !== t; e = e.parentNode) {
                    if (Mo(e)) return !1;
                    if (Ao(e)) return !0
                }
                return !0
            }(e, t)
        }, Uo = /^[ \t\r\n]*$/, zo = function (e) {
            return Uo.test(e)
        }, jo = function (e, t) {
            var n, r, o, i = Rt.fromDom(t), a = Rt.fromDom(e);
            return n = a, r = "pre,code", o = N(Bt, i), Br(n, r, o).isSome()
        }, Ho = function (e, t) {
            return Io(e) && !1 === (o = t, Mn(r = e) && zo(r.data) && !1 === jo(r, o)) || Rn(n = e) && "A" === n.nodeName && !n.hasAttribute("href") && (n.hasAttribute("name") || n.hasAttribute("id")) || Vo(e);
            var n, r, o
        }, Vo = On("data-mce-bookmark"), qo = On("data-mce-bogus"), $o = (Jr = "data-mce-bogus", Qr = "all", function (e) {
            return Rn(e) && e.getAttribute(Jr) === Qr
        }), Wo = function (e, t) {
            return void 0 === t && (t = !0), function (e, t) {
                var n, r = 0;
                if (Ho(e, e)) return !1;
                if (!(n = e.firstChild)) return !0;
                var o = new Yr(n, e);
                do {
                    if (t) {
                        if ($o(n)) {
                            n = o.next(!0);
                            continue
                        }
                        if (qo(n)) {
                            n = o.next();
                            continue
                        }
                    }
                    if (jn(n)) r++, n = o.next(); else {
                        if (Ho(n, e)) return !1;
                        n = o.next()
                    }
                } while (n);
                return r <= 1
            }(e.dom, t)
        }, Ko = function (e, t) {
            return V(e) && (Ho(e, t) || no(Rt.fromDom(e)))
        }, Xo = function (e) {
            return "span" === e.nodeName.toLowerCase() && "bookmark" === e.getAttribute("data-mce-type")
        }, Yo = function (e, t) {
            return Mn(e) && 0 < e.data.length && (o = new Yr(n = e, r = t).prev(!1), i = new Yr(n, r).next(!1), a = T(o) || Ko(o, r), u = T(i) || Ko(i, r), a && u);
            var n, r, o, i, a, u
        }, Go = function (e, t, n) {
            var r = n || t;
            if (Rn(t) && Xo(t)) return t;
            for (var o, i, a, u = t.childNodes, s = u.length - 1; 0 <= s; s--) Go(e, u[s], r);
            return !Rn(t) || 1 === (o = t.childNodes).length && Xo(o[0]) && t.parentNode.insertBefore(o[0], t), zn(a = t) || Un(a) || Ho(t, r) || Rn(i = t) && 0 < i.childNodes.length || Yo(t, r) || e.remove(t), t
        }, Jo = _t.makeMap, Qo = /[&<>\"\u0060\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
        Zo = /[<>&\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g, ei = /[<>&\"\']/g,
        ti = /&#([a-z0-9]+);?|&([a-z0-9]+);/gi, ni = {
            128: "\u20ac",
            130: "\u201a",
            131: "\u0192",
            132: "\u201e",
            133: "\u2026",
            134: "\u2020",
            135: "\u2021",
            136: "\u02c6",
            137: "\u2030",
            138: "\u0160",
            139: "\u2039",
            140: "\u0152",
            142: "\u017d",
            145: "\u2018",
            146: "\u2019",
            147: "\u201c",
            148: "\u201d",
            149: "\u2022",
            150: "\u2013",
            151: "\u2014",
            152: "\u02dc",
            153: "\u2122",
            154: "\u0161",
            155: "\u203a",
            156: "\u0153",
            158: "\u017e",
            159: "\u0178"
        }, ri = {'"': "&quot;", "'": "&#39;", "<": "&lt;", ">": "&gt;", "&": "&amp;", "`": "&#96;"},
        oi = {"&lt;": "<", "&gt;": ">", "&amp;": "&", "&quot;": '"', "&apos;": "'"}, ii = function (e, t) {
            var n, r, o, i = {};
            if (e) {
                for (e = e.split(","), t = t || 10, n = 0; n < e.length; n += 2) r = String.fromCharCode(parseInt(e[n], t)), ri[r] || (o = "&" + e[n + 1] + ";", i[r] = o, i[o] = r);
                return i
            }
        },
        ai = ii("50,nbsp,51,iexcl,52,cent,53,pound,54,curren,55,yen,56,brvbar,57,sect,58,uml,59,copy,5a,ordf,5b,laquo,5c,not,5d,shy,5e,reg,5f,macr,5g,deg,5h,plusmn,5i,sup2,5j,sup3,5k,acute,5l,micro,5m,para,5n,middot,5o,cedil,5p,sup1,5q,ordm,5r,raquo,5s,frac14,5t,frac12,5u,frac34,5v,iquest,60,Agrave,61,Aacute,62,Acirc,63,Atilde,64,Auml,65,Aring,66,AElig,67,Ccedil,68,Egrave,69,Eacute,6a,Ecirc,6b,Euml,6c,Igrave,6d,Iacute,6e,Icirc,6f,Iuml,6g,ETH,6h,Ntilde,6i,Ograve,6j,Oacute,6k,Ocirc,6l,Otilde,6m,Ouml,6n,times,6o,Oslash,6p,Ugrave,6q,Uacute,6r,Ucirc,6s,Uuml,6t,Yacute,6u,THORN,6v,szlig,70,agrave,71,aacute,72,acirc,73,atilde,74,auml,75,aring,76,aelig,77,ccedil,78,egrave,79,eacute,7a,ecirc,7b,euml,7c,igrave,7d,iacute,7e,icirc,7f,iuml,7g,eth,7h,ntilde,7i,ograve,7j,oacute,7k,ocirc,7l,otilde,7m,ouml,7n,divide,7o,oslash,7p,ugrave,7q,uacute,7r,ucirc,7s,uuml,7t,yacute,7u,thorn,7v,yuml,ci,fnof,sh,Alpha,si,Beta,sj,Gamma,sk,Delta,sl,Epsilon,sm,Zeta,sn,Eta,so,Theta,sp,Iota,sq,Kappa,sr,Lambda,ss,Mu,st,Nu,su,Xi,sv,Omicron,t0,Pi,t1,Rho,t3,Sigma,t4,Tau,t5,Upsilon,t6,Phi,t7,Chi,t8,Psi,t9,Omega,th,alpha,ti,beta,tj,gamma,tk,delta,tl,epsilon,tm,zeta,tn,eta,to,theta,tp,iota,tq,kappa,tr,lambda,ts,mu,tt,nu,tu,xi,tv,omicron,u0,pi,u1,rho,u2,sigmaf,u3,sigma,u4,tau,u5,upsilon,u6,phi,u7,chi,u8,psi,u9,omega,uh,thetasym,ui,upsih,um,piv,812,bull,816,hellip,81i,prime,81j,Prime,81u,oline,824,frasl,88o,weierp,88h,image,88s,real,892,trade,89l,alefsym,8cg,larr,8ch,uarr,8ci,rarr,8cj,darr,8ck,harr,8dl,crarr,8eg,lArr,8eh,uArr,8ei,rArr,8ej,dArr,8ek,hArr,8g0,forall,8g2,part,8g3,exist,8g5,empty,8g7,nabla,8g8,isin,8g9,notin,8gb,ni,8gf,prod,8gh,sum,8gi,minus,8gn,lowast,8gq,radic,8gt,prop,8gu,infin,8h0,ang,8h7,and,8h8,or,8h9,cap,8ha,cup,8hb,int,8hk,there4,8hs,sim,8i5,cong,8i8,asymp,8j0,ne,8j1,equiv,8j4,le,8j5,ge,8k2,sub,8k3,sup,8k4,nsub,8k6,sube,8k7,supe,8kl,oplus,8kn,otimes,8l5,perp,8m5,sdot,8o8,lceil,8o9,rceil,8oa,lfloor,8ob,rfloor,8p9,lang,8pa,rang,9ea,loz,9j0,spades,9j3,clubs,9j5,hearts,9j6,diams,ai,OElig,aj,oelig,b0,Scaron,b1,scaron,bo,Yuml,m6,circ,ms,tilde,802,ensp,803,emsp,809,thinsp,80c,zwnj,80d,zwj,80e,lrm,80f,rlm,80j,ndash,80k,mdash,80o,lsquo,80p,rsquo,80q,sbquo,80s,ldquo,80t,rdquo,80u,bdquo,810,dagger,811,Dagger,81g,permil,81p,lsaquo,81q,rsaquo,85c,euro", 32),
        ui = function (e, t) {
            return e.replace(t ? Qo : Zo, function (e) {
                return ri[e] || e
            })
        }, si = function (e, t) {
            return e.replace(t ? Qo : Zo, function (e) {
                return 1 < e.length ? "&#" + (1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320) + 65536) + ";" : ri[e] || "&#" + e.charCodeAt(0) + ";"
            })
        }, ci = function (e, t, n) {
            return n = n || ai, e.replace(t ? Qo : Zo, function (e) {
                return ri[e] || n[e] || e
            })
        }, li = {
            encodeRaw: ui, encodeAllRaw: function (e) {
                return ("" + e).replace(ei, function (e) {
                    return ri[e] || e
                })
            }, encodeNumeric: si, encodeNamed: ci, getEncodeFunc: function (e, t) {
                var n = ii(t) || ai, r = Jo(e.replace(/\+/g, ","));
                return r.named && r.numeric ? function (e, t) {
                    return e.replace(t ? Qo : Zo, function (e) {
                        return ri[e] !== undefined ? ri[e] : n[e] !== undefined ? n[e] : 1 < e.length ? "&#" + (1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320) + 65536) + ";" : "&#" + e.charCodeAt(0) + ";"
                    })
                } : r.named ? t ? function (e, t) {
                    return ci(e, t, n)
                } : ci : r.numeric ? si : ui
            }, decode: function (e) {
                return e.replace(ti, function (e, t) {
                    return t ? 65535 < (t = "x" === t.charAt(0).toLowerCase() ? parseInt(t.substr(1), 16) : parseInt(t, 10)) ? (t -= 65536, String.fromCharCode(55296 + (t >> 10), 56320 + (1023 & t))) : ni[t] || String.fromCharCode(t) : oi[e] || ai[e] || (n = e, (r = Rt.fromTag("div").dom).innerHTML = n, r.textContent || r.innerText || n);
                    var n, r
                })
            }
        }, fi = {}, di = {}, mi = _t.makeMap, pi = _t.each, gi = _t.extend, hi = _t.explode, vi = _t.inArray,
        yi = function (e, t) {
            return (e = _t.trim(e)) ? e.split(t || " ") : []
        }, bi = function (e, n) {
            var r;
            return e && (r = {}, "string" == typeof e && (e = {"*": e}), pi(e, function (e, t) {
                r[t] = r[t.toUpperCase()] = ("map" === n ? mi : hi)(e, /[, ]/)
            })), r
        }, Ci = function (i) {
            var e, s, t, n, r, o, a, c, u, l, S = {}, f = {}, N = [], d = {}, m = {}, p = function (e, t, n) {
                var r = i[e];
                return r ? r = mi(r, /[, ]/, mi(r.toUpperCase(), /[, ]/)) : (r = fi[e]) || (r = mi(t, " ", mi(t.toUpperCase(), " ")), r = gi(r, n), fi[e] = r), r
            }, g = (e = (i = i || {}).schema, c = {}, u = function (e, t, n) {
                var r, o, i = function (e, t) {
                    for (var n = {}, r = 0, o = e.length; r < o; r++) n[e[r]] = t || {};
                    return n
                };
                t = t || "", "string" == typeof (n = n || []) && (n = yi(n));
                for (var a = yi(e), u = a.length; u--;) o = {
                    attributes: i(r = yi([s, t].join(" "))),
                    attributesOrder: r,
                    children: i(n, di)
                }, c[a[u]] = o
            }, l = function (e, t) {
                for (var n, r, o, i = yi(e), a = i.length, u = yi(t); a--;) for (n = c[i[a]], r = 0, o = u.length; r < o; r++) n.attributes[u[r]] = {}, n.attributesOrder.push(u[r])
            }, fi[e] ? fi[e] : (s = "id accesskey class dir lang style tabindex title role", t = "address blockquote div dl fieldset form h1 h2 h3 h4 h5 h6 hr menu ol p pre table ul", n = "a abbr b bdo br button cite code del dfn em embed i iframe img input ins kbd label map noscript object q s samp script select small span strong sub sup textarea u var #text #comment", "html4" !== e && (s += " contenteditable contextmenu draggable dropzone hidden spellcheck translate", t += " article aside details dialog figure main header footer hgroup section nav", n += " audio canvas command datalist mark meter output picture progress time wbr video ruby bdi keygen"), "html5-strict" !== e && (s += " xml:lang", n = [n, a = "acronym applet basefont big font strike tt"].join(" "), pi(yi(a), function (e) {
                u(e, "", n)
            }), t = [t, o = "center dir isindex noframes"].join(" "), r = [t, n].join(" "), pi(yi(o), function (e) {
                u(e, "", r)
            })), r = r || [t, n].join(" "), u("html", "manifest", "head body"), u("head", "", "base command link meta noscript script style title"), u("title hr noscript br"), u("base", "href target"), u("link", "href rel media hreflang type sizes hreflang"), u("meta", "name http-equiv content charset"), u("style", "media type scoped"), u("script", "src async defer type charset"), u("body", "onafterprint onbeforeprint onbeforeunload onblur onerror onfocus onhashchange onload onmessage onoffline ononline onpagehide onpageshow onpopstate onresize onscroll onstorage onunload", r), u("address dt dd div caption", "", r), u("h1 h2 h3 h4 h5 h6 pre p abbr code var samp kbd sub sup i b u bdo span legend em strong small s cite dfn", "", n), u("blockquote", "cite", r), u("ol", "reversed start type", "li"), u("ul", "", "li"), u("li", "value", r), u("dl", "", "dt dd"), u("a", "href target rel media hreflang type", n), u("q", "cite", n), u("ins del", "cite datetime", r), u("img", "src sizes srcset alt usemap ismap width height"), u("iframe", "src name width height", r), u("embed", "src type width height"), u("object", "data type typemustmatch name usemap form width height", [r, "param"].join(" ")), u("param", "name value"), u("map", "name", [r, "area"].join(" ")), u("area", "alt coords shape href target rel media hreflang type"), u("table", "border", "caption colgroup thead tfoot tbody tr" + ("html4" === e ? " col" : "")), u("colgroup", "span", "col"), u("col", "span"), u("tbody thead tfoot", "", "tr"), u("tr", "", "td th"), u("td", "colspan rowspan headers", r), u("th", "colspan rowspan headers scope abbr", r), u("form", "accept-charset action autocomplete enctype method name novalidate target", r), u("fieldset", "disabled form name", [r, "legend"].join(" ")), u("label", "form for", n), u("input", "accept alt autocomplete checked dirname disabled form formaction formenctype formmethod formnovalidate formtarget height list max maxlength min multiple name pattern readonly required size src step type value width"), u("button", "disabled form formaction formenctype formmethod formnovalidate formtarget name type value", "html4" === e ? r : n), u("select", "disabled form multiple name required size", "option optgroup"), u("optgroup", "disabled label", "option"), u("option", "disabled label selected value"), u("textarea", "cols dirname disabled form maxlength name readonly required rows wrap"), u("menu", "type label", [r, "li"].join(" ")), u("noscript", "", r), "html4" !== e && (u("wbr"), u("ruby", "", [n, "rt rp"].join(" ")), u("figcaption", "", r), u("mark rt rp summary bdi", "", n), u("canvas", "width height", r), u("video", "src crossorigin poster preload autoplay mediagroup loop muted controls width height buffered", [r, "track source"].join(" ")), u("audio", "src crossorigin preload autoplay mediagroup loop muted controls buffered volume", [r, "track source"].join(" ")), u("picture", "", "img source"), u("source", "src srcset type media sizes"), u("track", "kind src srclang label default"), u("datalist", "", [n, "option"].join(" ")), u("article section nav aside main header footer", "", r), u("hgroup", "", "h1 h2 h3 h4 h5 h6"), u("figure", "", [r, "figcaption"].join(" ")), u("time", "datetime", n), u("dialog", "open", r), u("command", "type label icon disabled checked radiogroup command"), u("output", "for form name", n), u("progress", "value max", n), u("meter", "value min max low high optimum", n), u("details", "open", [r, "summary"].join(" ")), u("keygen", "autofocus challenge disabled form keytype name")), "html5-strict" !== e && (l("script", "language xml:space"), l("style", "xml:space"), l("object", "declare classid code codebase codetype archive standby align border hspace vspace"), l("embed", "align name hspace vspace"), l("param", "valuetype type"), l("a", "charset name rev shape coords"), l("br", "clear"), l("applet", "codebase archive code object alt name width height align hspace vspace"), l("img", "name longdesc align border hspace vspace"), l("iframe", "longdesc frameborder marginwidth marginheight scrolling align"), l("font basefont", "size color face"), l("input", "usemap align"), l("select"), l("textarea"), l("h1 h2 h3 h4 h5 h6 div p legend caption", "align"), l("ul", "type compact"), l("li", "type"), l("ol dl menu dir", "compact"), l("pre", "width xml:space"), l("hr", "align noshade size width"), l("isindex", "prompt"), l("table", "summary width frame rules cellspacing cellpadding align bgcolor"), l("col", "width align char charoff valign"), l("colgroup", "width align char charoff valign"), l("thead", "align char charoff valign"), l("tr", "align char charoff valign bgcolor"), l("th", "axis align char charoff valign nowrap bgcolor width height"), l("form", "accept"), l("td", "abbr axis scope align char charoff valign nowrap bgcolor width height"), l("tfoot", "align char charoff valign"), l("tbody", "align char charoff valign"), l("area", "nohref"), l("body", "background bgcolor text link vlink alink")), "html4" !== e && (l("input button select textarea", "autofocus"), l("input textarea", "placeholder"), l("a", "download"), l("link script img", "crossorigin"), l("img", "loading"), l("iframe", "sandbox seamless allowfullscreen loading")), pi(yi("a form meter progress dfn"), function (e) {
                c[e] && delete c[e].children[e]
            }), delete c.caption.children.table, delete c.script, fi[e] = c));
            !1 === i.verify_html && (i.valid_elements = "*[*]");
            var h = bi(i.valid_styles), v = bi(i.invalid_styles, "map"), y = bi(i.valid_classes, "map"),
                b = p("whitespace_elements", "pre script noscript style textarea video audio iframe object code"),
                C = p("self_closing_elements", "colgroup dd dt li option p td tfoot th thead tr"),
                w = p("short_ended_elements", "area base basefont br col frame hr img input isindex link meta param embed source wbr track"),
                x = p("boolean_attributes", "checked compact declare defer disabled ismap multiple nohref noresize noshade nowrap readonly selected autoplay loop controls"),
                E = "td th iframe video audio object script code", k = p("non_empty_elements", E + " pre", w),
                _ = p("move_caret_before_on_enter_elements", E + " table", w),
                A = p("text_block_elements", "h1 h2 h3 h4 h5 h6 p div address pre form blockquote center dir fieldset header footer article section hgroup aside main nav figure"),
                R = p("block_elements", "hr table tbody thead tfoot th tr td li ol ul caption dl dt dd noscript menu isindex option datalist select optgroup figcaption details summary", A),
                T = p("text_inline_elements", "span strong b em i font strike u var cite dfn code mark q sup sub samp");
            pi((i.special || "script noscript iframe noframes noembed title style textarea xmp").split(" "), function (e) {
                m[e] = new RegExp("</" + e + "[^>]*>", "gi")
            });
            var D = function (e) {
                return new RegExp("^" + e.replace(/([?+*])/g, ".$1") + "$")
            }, O = function (e) {
                var t, n, r, o, i, a, u, s, c, l, f, d, m, p, g, h, v, y,
                    b = /^([#+\-])?([^\[!\/]+)(?:\/([^\[!]+))?(?:(!?)\[([^\]]+)])?$/,
                    C = /^([!\-])?(\w+[\\:]:\w+|[^=:<]+)?(?:([=:<])(.*))?$/, w = /[*?+]/;
                if (e) {
                    var x = yi(e, ",");
                    for (S["@"] && (h = S["@"].attributes, v = S["@"].attributesOrder), t = 0, n = x.length; t < n; t++) if (i = b.exec(x[t])) {
                        if (p = i[1], c = i[2], g = i[3], s = i[5], a = {
                            attributes: d = {},
                            attributesOrder: m = []
                        }, "#" === p && (a.paddEmpty = !0), "-" === p && (a.removeEmpty = !0), "!" === i[4] && (a.removeEmptyAttrs = !0), h && (se(h, function (e, t) {
                            d[t] = e
                        }), m.push.apply(m, v)), s) for (r = 0, o = (s = yi(s, "|")).length; r < o; r++) if (i = C.exec(s[r])) {
                            if (u = {}, f = i[1], l = i[2].replace(/[\\:]:/g, ":"), p = i[3], y = i[4], "!" === f && (a.attributesRequired = a.attributesRequired || [], a.attributesRequired.push(l), u.required = !0), "-" === f) {
                                delete d[l], m.splice(vi(m, l), 1);
                                continue
                            }
                            p && ("=" === p && (a.attributesDefault = a.attributesDefault || [], a.attributesDefault.push({
                                name: l,
                                value: y
                            }), u.defaultValue = y), ":" === p && (a.attributesForced = a.attributesForced || [], a.attributesForced.push({
                                name: l,
                                value: y
                            }), u.forcedValue = y), "<" === p && (u.validValues = mi(y, "?"))), w.test(l) ? (a.attributePatterns = a.attributePatterns || [], u.pattern = D(l), a.attributePatterns.push(u)) : (d[l] || m.push(l), d[l] = u)
                        }
                        h || "@" !== c || (h = d, v = m), g && (a.outputName = c, S[g] = a), w.test(c) ? (a.pattern = D(c), N.push(a)) : S[c] = a
                    }
                }
            }, B = function (e) {
                S = {}, N = [], O(e), pi(g, function (e, t) {
                    f[t] = e.children
                })
            }, P = function (e) {
                var a = /^(~)?(.+)$/;
                e && (fi.text_block_elements = fi.block_elements = null, pi(yi(e, ","), function (e) {
                    var t, n = a.exec(e), r = "~" === n[1], o = r ? "span" : "div", i = n[2];
                    f[i] = f[o], d[i] = o, r || (R[i.toUpperCase()] = {}, R[i] = {}), S[i] || (t = S[o], delete (t = gi({}, t)).removeEmptyAttrs, delete t.removeEmpty, S[i] = t), pi(f, function (e, t) {
                        e[o] && (f[t] = e = gi({}, f[t]), e[i] = e[o])
                    })
                }))
            }, L = function (e) {
                var o = /^([+\-]?)([A-Za-z0-9_\-.\u00b7\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u037d\u037f-\u1fff\u200c-\u200d\u203f-\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]+)\[([^\]]+)]$/;
                fi[i.schema] = null, e && pi(yi(e, ","), function (e) {
                    var t, n, r = o.exec(e);
                    r && (n = r[1], t = n ? f[r[2]] : f[r[2]] = {"#comment": {}}, t = f[r[2]], pi(yi(r[3], "|"), function (e) {
                        "-" === n ? delete t[e] : t[e] = {}
                    }))
                })
            }, I = function (e) {
                var t, n = S[e];
                if (n) return n;
                for (t = N.length; t--;) if ((n = N[t]).pattern.test(e)) return n
            };
            i.valid_elements ? B(i.valid_elements) : (pi(g, function (e, t) {
                S[t] = {attributes: e.attributes, attributesOrder: e.attributesOrder}, f[t] = e.children
            }), "html5" !== i.schema && pi(yi("strong/b em/i"), function (e) {
                var t = yi(e, "/");
                S[t[1]].outputName = t[0]
            }), pi(yi("ol ul sub sup blockquote span font a table tbody strong em b i"), function (e) {
                S[e] && (S[e].removeEmpty = !0)
            }), pi(yi("p h1 h2 h3 h4 h5 h6 th td pre div address caption li"), function (e) {
                S[e].paddEmpty = !0
            }), pi(yi("span"), function (e) {
                S[e].removeEmptyAttrs = !0
            })), P(i.custom_elements), L(i.valid_children), O(i.extended_valid_elements), L("+ol[ul|ol],+ul[ul|ol]"), pi({
                dd: "dl",
                dt: "dl",
                li: "ul ol",
                td: "tr",
                th: "tr",
                tr: "tbody thead tfoot",
                tbody: "table",
                thead: "table",
                tfoot: "table",
                legend: "fieldset",
                area: "map",
                param: "video audio object"
            }, function (e, t) {
                S[t] && (S[t].parentsRequired = yi(e))
            }), i.invalid_elements && pi(hi(i.invalid_elements), function (e) {
                S[e] && delete S[e]
            }), I("span") || O("span[!data-mce-type|*]");
            return {
                children: f, elements: S, getValidStyles: function () {
                    return h
                }, getValidClasses: function () {
                    return y
                }, getBlockElements: function () {
                    return R
                }, getInvalidStyles: function () {
                    return v
                }, getShortEndedElements: function () {
                    return w
                }, getTextBlockElements: function () {
                    return A
                }, getTextInlineElements: function () {
                    return T
                }, getBoolAttrs: function () {
                    return x
                }, getElementRule: I, getSelfClosingElements: function () {
                    return C
                }, getNonEmptyElements: function () {
                    return k
                }, getMoveCaretBeforeOnEnterElements: function () {
                    return _
                }, getWhiteSpaceElements: function () {
                    return b
                }, getSpecialElements: function () {
                    return m
                }, isValidChild: function (e, t) {
                    var n = f[e.toLowerCase()];
                    return !(!n || !n[t.toLowerCase()])
                }, isValid: function (e, t) {
                    var n, r, o = I(e);
                    if (o) {
                        if (!t) return !0;
                        if (o.attributes[t]) return !0;
                        if (n = o.attributePatterns) for (r = n.length; r--;) if (n[r].pattern.test(e)) return !0
                    }
                    return !1
                }, getCustomElements: function () {
                    return d
                }, addValidElements: O, setValidElements: B, addCustomElements: P, addValidChildren: L
            }
        }, wi = function (e, t, n, r) {
            var o = function (e) {
                return 1 < (e = parseInt(e, 10).toString(16)).length ? e : "0" + e
            };
            return "#" + o(t) + o(n) + o(r)
        }, xi = function (b, e) {
            var s, c, C = this, w = /rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\s*\)/gi,
                x = /(?:url(?:(?:\(\s*\"([^\"]+)\"\s*\))|(?:\(\s*\'([^\']+)\'\s*\))|(?:\(\s*([^)\s]+)\s*\))))|(?:\'([^\']+)\')|(?:\"([^\"]+)\")/gi,
                S = /\s*([^:]+):\s*([^;]+);?/g, N = /\s+$/, E = {}, k = lo;
            b = b || {}, e && (s = e.getValidStyles(), c = e.getInvalidStyles());
            for (var t = ("\\\" \\' \\; \\: ; : " + k).split(" "), _ = 0; _ < t.length; _++) E[t[_]] = k + _, E[k + _] = t[_];
            return {
                toHex: function (e) {
                    return e.replace(w, wi)
                }, parse: function (e) {
                    var t, n, r, o, i, a, u, s, c = {}, l = b.url_converter, f = b.url_converter_scope || C,
                        d = function (e, t, n) {
                            var r = c[e + "-top" + t];
                            if (r) {
                                var o = c[e + "-right" + t];
                                if (o) {
                                    var i = c[e + "-bottom" + t];
                                    if (i) {
                                        var a = c[e + "-left" + t];
                                        if (a) {
                                            var u = [r, o, i, a];
                                            for (_ = u.length - 1; _-- && u[_] === u[_ + 1];) ;
                                            -1 < _ && n || (c[e + t] = -1 === _ ? u[0] : u.join(" "), delete c[e + "-top" + t], delete c[e + "-right" + t], delete c[e + "-bottom" + t], delete c[e + "-left" + t])
                                        }
                                    }
                                }
                            }
                        }, m = function (e) {
                            var t, n = c[e];
                            if (n) {
                                for (t = (n = n.split(" ")).length; t--;) if (n[t] !== n[0]) return !1;
                                return c[e] = n[0], !0
                            }
                        }, p = function (e) {
                            return o = !0, E[e]
                        }, g = function (e, t) {
                            return o && (e = e.replace(/\uFEFF[0-9]/g, function (e) {
                                return E[e]
                            })), t || (e = e.replace(/\\([\'\";:])/g, "$1")), e
                        }, h = function (e) {
                            return String.fromCharCode(parseInt(e.slice(1), 16))
                        }, v = function (e) {
                            return e.replace(/\\[0-9a-f]+/gi, h)
                        }, y = function (e, t, n, r, o, i) {
                            if (o = o || i) return "'" + (o = g(o)).replace(/\'/g, "\\'") + "'";
                            if (t = g(t || n || r), !b.allow_script_urls) {
                                var a = t.replace(/[\s\r\n]+/g, "");
                                if (/(java|vb)script:/i.test(a)) return "";
                                if (!b.allow_svg_data_urls && /^data:image\/svg/i.test(a)) return ""
                            }
                            return l && (t = l.call(f, t, "style")), "url('" + t.replace(/\'/g, "\\'") + "')"
                        };
                    if (e) {
                        for (e = (e = e.replace(/[\u0000-\u001F]/g, "")).replace(/\\[\"\';:\uFEFF]/g, p).replace(/\"[^\"]+\"|\'[^\']+\'/g, function (e) {
                            return e.replace(/[;:]/g, p)
                        }); t = S.exec(e);) if (S.lastIndex = t.index + t[0].length, n = t[1].replace(N, "").toLowerCase(), r = t[2].replace(N, ""), n && r) {
                            if (n = v(n), r = v(r), -1 !== n.indexOf(k) || -1 !== n.indexOf('"')) continue;
                            if (!b.allow_script_urls && ("behavior" === n || /expression\s*\(|\/\*|\*\//.test(r))) continue;
                            "font-weight" === n && "700" === r ? r = "bold" : "color" !== n && "background-color" !== n || (r = r.toLowerCase()), r = (r = r.replace(w, wi)).replace(x, y), c[n] = o ? g(r, !0) : r
                        }
                        d("border", "", !0), d("border", "-width"), d("border", "-color"), d("border", "-style"), d("padding", ""), d("margin", ""), i = "border", u = "border-style", s = "border-color", m(a = "border-width") && m(u) && m(s) && (c[i] = c[a] + " " + c[u] + " " + c[s], delete c[a], delete c[u], delete c[s]), "medium none" === c.border && delete c.border, "none" === c["border-image"] && delete c["border-image"]
                    }
                    return c
                }, serialize: function (i, a) {
                    var u = "", e = function (e) {
                        var t, n = s[e];
                        if (n) for (var r = 0, o = n.length; r < o; r++) e = n[r], (t = i[e]) && (u += (0 < u.length ? " " : "") + e + ": " + t + ";")
                    };
                    return a && s ? (e("*"), e(a)) : se(i, function (e, t) {
                        var n, r, o;
                        !e || c && (n = t, r = a, (o = c["*"]) && o[n] || (o = c[r]) && o[n]) || (u += (0 < u.length ? " " : "") + t + ": " + e + ";")
                    }), u
                }
            }
        }, Si = /^(?:mouse|contextmenu)|click/, Ni = {
            keyLocation: 1,
            layerX: 1,
            layerY: 1,
            returnValue: 1,
            webkitMovementX: 1,
            webkitMovementY: 1,
            keyIdentifier: 1,
            mozPressure: 1
        }, Ei = b, ki = w, _i = function (e, t, n, r) {
            e.addEventListener ? e.addEventListener(t, n, r || !1) : e.attachEvent && e.attachEvent("on" + t, n)
        }, Ai = function (e, t, n, r) {
            e.removeEventListener ? e.removeEventListener(t, n, r || !1) : e.detachEvent && e.detachEvent("on" + t, n)
        }, Ri = function (e, t) {
            var n, r, o, i, a, u, s = t || {};
            for (n in e) Ni[n] || (s[n] = e[n]);
            return s.target || (s.target = s.srcElement || document), s.composedPath && (s.composedPath = function () {
                return e.composedPath()
            }), e && (a = e, Si.test(a.type)) && e.pageX === undefined && e.clientX !== undefined && (o = (r = s.target.ownerDocument || document).documentElement, i = r.body, s.pageX = e.clientX + (o && o.scrollLeft || i && i.scrollLeft || 0) - (o && o.clientLeft || i && i.clientLeft || 0), s.pageY = e.clientY + (o && o.scrollTop || i && i.scrollTop || 0) - (o && o.clientTop || i && i.clientTop || 0)), s.preventDefault = function () {
                s.defaultPrevented = !0, s.isDefaultPrevented = ki, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
            }, s.stopPropagation = function () {
                s.cancelBubble = !0, s.isPropagationStopped = ki, e && (e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0)
            }, !(s.stopImmediatePropagation = function () {
                s.isImmediatePropagationStopped = ki, s.stopPropagation()
            }) == ((u = s).isDefaultPrevented === ki || u.isDefaultPrevented === Ei) && (s.isDefaultPrevented = !0 === s.defaultPrevented ? ki : Ei, s.isPropagationStopped = !0 === s.cancelBubble ? ki : Ei, s.isImmediatePropagationStopped = Ei), "undefined" == typeof s.metaKey && (s.metaKey = !1), s
        }, Ti = (Di.prototype.bind = function (e, t, n, r) {
            var o, i, a, u, s, c, l = this, f = window, d = function (e) {
                l.executeHandlers(Ri(e || f.event), o)
            };
            if (e && 3 !== e.nodeType && 8 !== e.nodeType) {
                e[l.expando] ? o = e[l.expando] : (o = l.count++, e[l.expando] = o, l.events[o] = {}), r = r || e;
                for (var m = t.split(" "), p = m.length; p--;) s = d, u = c = !1, "DOMContentLoaded" === (a = m[p]) && (a = "ready"), l.domLoaded && "ready" === a && "complete" === e.readyState ? n.call(r, Ri({type: a})) : (l.hasMouseEnterLeave || (u = l.mouseEnterLeave[a]) && (s = function (e) {
                    var t = e.currentTarget, n = e.relatedTarget;
                    if (n && t.contains) n = t.contains(n); else for (; n && n !== t;) n = n.parentNode;
                    n || ((e = Ri(e || f.event)).type = "mouseout" === e.type ? "mouseleave" : "mouseenter", e.target = t, l.executeHandlers(e, o))
                }), l.hasFocusIn || "focusin" !== a && "focusout" !== a || (c = !0, u = "focusin" === a ? "focus" : "blur", s = function (e) {
                    (e = Ri(e || f.event)).type = "focus" === e.type ? "focusin" : "focusout", l.executeHandlers(e, o)
                }), (i = l.events[o][a]) ? "ready" === a && l.domLoaded ? n(Ri({type: a})) : i.push({
                    func: n,
                    scope: r
                }) : (l.events[o][a] = i = [{
                    func: n,
                    scope: r
                }], i.fakeName = u, i.capture = c, i.nativeHandler = s, "ready" === a ? function (e, t, n) {
                    var r, o = e.document, i = {type: "ready"};
                    n.domLoaded ? t(i) : (r = function () {
                        Ai(e, "DOMContentLoaded", r), Ai(e, "load", r), n.domLoaded || (n.domLoaded = !0, t(i)), e = null
                    }, "complete" === o.readyState || "interactive" === o.readyState && o.body ? r() : _i(e, "DOMContentLoaded", r), n.domLoaded || _i(e, "load", r))
                }(e, s, l) : _i(e, u || a, s, c)));
                return e = i = null, n
            }
        }, Di.prototype.unbind = function (n, e, t) {
            var r, o, i;
            if (!n || 3 === n.nodeType || 8 === n.nodeType) return this;
            var a = n[this.expando];
            if (a) {
                if (i = this.events[a], e) {
                    for (var u, s, c, l, f = e.split(" "), d = f.length; d--;) if (l = i[o = f[d]]) {
                        if (t) for (r = l.length; r--;) l[r].func === t && (u = l.nativeHandler, s = l.fakeName, c = l.capture, (l = l.slice(0, r).concat(l.slice(r + 1))).nativeHandler = u, l.fakeName = s, l.capture = c, i[o] = l);
                        t && 0 !== l.length || (delete i[o], Ai(n, l.fakeName || o, l.nativeHandler, l.capture))
                    }
                } else se(i, function (e, t) {
                    Ai(n, e.fakeName || t, e.nativeHandler, e.capture)
                }), i = {};
                for (o in i) if (ve(i, o)) return this;
                delete this.events[a];
                try {
                    delete n[this.expando]
                } catch (m) {
                    n[this.expando] = null
                }
            }
            return this
        }, Di.prototype.fire = function (e, t, n) {
            var r;
            if (!e || 3 === e.nodeType || 8 === e.nodeType) return this;
            var o = Ri(null, n);
            for (o.type = t, o.target = e; (r = e[this.expando]) && this.executeHandlers(o, r), (e = e.parentNode || e.ownerDocument || e.defaultView || e.parentWindow) && !o.isPropagationStopped();) ;
            return this
        }, Di.prototype.clean = function (e) {
            var t, n;
            if (!e || 3 === e.nodeType || 8 === e.nodeType) return this;
            if (e[this.expando] && this.unbind(e), e.getElementsByTagName || (e = e.document), e && e.getElementsByTagName) for (this.unbind(e), t = (n = e.getElementsByTagName("*")).length; t--;) (e = n[t])[this.expando] && this.unbind(e);
            return this
        }, Di.prototype.destroy = function () {
            this.events = {}
        }, Di.prototype.cancel = function (e) {
            return e && (e.preventDefault(), e.stopImmediatePropagation()), !1
        }, Di.prototype.executeHandlers = function (e, t) {
            var n = this.events[t], r = n && n[e.type];
            if (r) for (var o = 0, i = r.length; o < i; o++) {
                var a = r[o];
                if (a && !1 === a.func.call(a.scope, e) && e.preventDefault(), e.isImmediatePropagationStopped()) return
            }
        }, Di.Event = new Di, Di);

    function Di() {
        this.domLoaded = !1, this.events = {}, this.count = 1, this.expando = "mce-data-" + (+new Date).toString(32), this.hasMouseEnterLeave = "onmouseenter" in document.documentElement, this.hasFocusIn = "onfocusin" in document.documentElement, this.count = 1
    }

    var Oi, Bi, Pi, Li, Ii, Mi, Fi, Ui, zi, ji, Hi, Vi, qi, $i, Wi, Ki, Xi, Yi = "sizzle" + -new Date,
        Gi = window.document, Ji = 0, Qi = 0, Zi = Da(), ea = Da(), ta = Da(), na = function (e, t) {
            return e === t && (ji = !0), 0
        }, ra = typeof undefined, oa = {}.hasOwnProperty, ia = [], aa = ia.pop, ua = ia.push, sa = ia.push, ca = ia.slice,
        la = ia.indexOf || function (e) {
            for (var t = 0, n = this.length; t < n; t++) if (this[t] === e) return t;
            return -1
        }, fa = "[\\x20\\t\\r\\n\\f]", da = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        ma = "\\[" + fa + "*(" + da + ")(?:" + fa + "*([*^$|!~]?=)" + fa + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + da + "))|)" + fa + "*\\]",
        pa = ":(" + da + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ma + ")*)|.*)\\)|)",
        ga = new RegExp("^" + fa + "+|((?:^|[^\\\\])(?:\\\\.)*)" + fa + "+$", "g"),
        ha = new RegExp("^" + fa + "*," + fa + "*"), va = new RegExp("^" + fa + "*([>+~]|" + fa + ")" + fa + "*"),
        ya = new RegExp("=" + fa + "*([^\\]'\"]*?)" + fa + "*\\]", "g"), ba = new RegExp(pa),
        Ca = new RegExp("^" + da + "$"), wa = {
            ID: new RegExp("^#(" + da + ")"),
            CLASS: new RegExp("^\\.(" + da + ")"),
            TAG: new RegExp("^(" + da + "|[*])"),
            ATTR: new RegExp("^" + ma),
            PSEUDO: new RegExp("^" + pa),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + fa + "*(even|odd|(([+-]|)(\\d*)n|)" + fa + "*(?:([+-]|)" + fa + "*(\\d+)|))" + fa + "*\\)|)", "i"),
            bool: new RegExp("^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$", "i"),
            needsContext: new RegExp("^" + fa + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + fa + "*((?:-\\d)?\\d*)" + fa + "*\\)|)(?=[^-]|$)", "i")
        }, xa = /^(?:input|select|textarea|button)$/i, Sa = /^h\d$/i, Na = /^[^{]+\{\s*\[native \w/,
        Ea = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ka = /[+~]/, _a = /'|\\/g,
        Aa = new RegExp("\\\\([\\da-f]{1,6}" + fa + "?|(" + fa + ")|.)", "ig"), Ra = function (e, t, n) {
            var r = "0x" + t - 65536;
            return r != r || n ? t : r < 0 ? String.fromCharCode(65536 + r) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        };
    try {
        sa.apply(ia = ca.call(Gi.childNodes), Gi.childNodes), ia[Gi.childNodes.length].nodeType
    } catch (_k) {
        sa = {
            apply: ia.length ? function (e, t) {
                ua.apply(e, ca.call(t))
            } : function (e, t) {
                for (var n = e.length, r = 0; e[n++] = t[r++];) ;
                e.length = n - 1
            }
        }
    }
    var Ta = function (e, t, n, r) {
        var o, i, a, u, s, c, l, f, d, m;
        if ((t ? t.ownerDocument || t : Gi) !== Vi && Hi(t), n = n || [], !e || "string" != typeof e) return n;
        if (1 !== (u = (t = t || Vi).nodeType) && 9 !== u) return [];
        if ($i && !r) {
            if (o = Ea.exec(e)) if (a = o[1]) {
                if (9 === u) {
                    if (!(i = t.getElementById(a)) || !i.parentNode) return n;
                    if (i.id === a) return n.push(i), n
                } else if (t.ownerDocument && (i = t.ownerDocument.getElementById(a)) && Xi(t, i) && i.id === a) return n.push(i), n
            } else {
                if (o[2]) return sa.apply(n, t.getElementsByTagName(e)), n;
                if ((a = o[3]) && Oi.getElementsByClassName) return sa.apply(n, t.getElementsByClassName(a)), n
            }
            if (Oi.qsa && (!Wi || !Wi.test(e))) {
                if (f = l = Yi, d = t, m = 9 === u && e, 1 === u && "object" !== t.nodeName.toLowerCase()) {
                    for (c = Ii(e), (l = t.getAttribute("id")) ? f = l.replace(_a, "\\$&") : t.setAttribute("id", f), f = "[id='" + f + "'] ", s = c.length; s--;) c[s] = f + Ma(c[s]);
                    d = ka.test(e) && La(t.parentNode) || t, m = c.join(",")
                }
                if (m) try {
                    return sa.apply(n, d.querySelectorAll(m)), n
                } catch (p) {
                } finally {
                    l || t.removeAttribute("id")
                }
            }
        }
        return Fi(e.replace(ga, "$1"), t, n, r)
    };

    function Da() {
        var n = [];

        function r(e, t) {
            return n.push(e + " ") > Bi.cacheLength && delete r[n.shift()], r[e + " "] = t
        }

        return r
    }

    function Oa(e) {
        return e[Yi] = !0, e
    }

    function Ba(e, t) {
        var n = t && e,
            r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || 1 << 31) - (~e.sourceIndex || 1 << 31);
        if (r) return r;
        if (n) for (; n = n.nextSibling;) if (n === t) return -1;
        return e ? 1 : -1
    }

    function Pa(a) {
        return Oa(function (i) {
            return i = +i, Oa(function (e, t) {
                for (var n, r = a([], e.length, i), o = r.length; o--;) e[n = r[o]] && (e[n] = !(t[n] = e[n]))
            })
        })
    }

    function La(e) {
        return e && typeof e.getElementsByTagName != ra && e
    }

    function Ia() {
    }

    function Ma(e) {
        for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
        return r
    }

    function Fa(a, e, t) {
        var u = e.dir, s = t && "parentNode" === u, c = Qi++;
        return e.first ? function (e, t, n) {
            for (; e = e[u];) if (1 === e.nodeType || s) return a(e, t, n)
        } : function (e, t, n) {
            var r, o, i = [Ji, c];
            if (n) {
                for (; e = e[u];) if ((1 === e.nodeType || s) && a(e, t, n)) return !0
            } else for (; e = e[u];) if (1 === e.nodeType || s) {
                if ((r = (o = e[Yi] || (e[Yi] = {}))[u]) && r[0] === Ji && r[1] === c) return i[2] = r[2];
                if ((o[u] = i)[2] = a(e, t, n)) return !0
            }
        }
    }

    function Ua(o) {
        return 1 < o.length ? function (e, t, n) {
            for (var r = o.length; r--;) if (!o[r](e, t, n)) return !1;
            return !0
        } : o[0]
    }

    function za(e, t, n, r, o) {
        for (var i, a = [], u = 0, s = e.length, c = null != t; u < s; u++) (i = e[u]) && (n && !n(i, r, o) || (a.push(i), c && t.push(u)));
        return a
    }

    function ja(m, p, g, h, v, e) {
        return h && !h[Yi] && (h = ja(h)), v && !v[Yi] && (v = ja(v, e)), Oa(function (e, t, n, r) {
            var o, i, a, u = [], s = [], c = t.length, l = e || function (e, t, n) {
                    for (var r = 0, o = t.length; r < o; r++) Ta(e, t[r], n);
                    return n
                }(p || "*", n.nodeType ? [n] : n, []), f = !m || !e && p ? l : za(l, u, m, n, r),
                d = g ? v || (e ? m : c || h) ? [] : t : f;
            if (g && g(f, d, n, r), h) for (o = za(d, s), h(o, [], n, r), i = o.length; i--;) (a = o[i]) && (d[s[i]] = !(f[s[i]] = a));
            if (e) {
                if (v || m) {
                    if (v) {
                        for (o = [], i = d.length; i--;) (a = d[i]) && o.push(f[i] = a);
                        v(null, d = [], o, r)
                    }
                    for (i = d.length; i--;) (a = d[i]) && -1 < (o = v ? la.call(e, a) : u[i]) && (e[o] = !(t[o] = a))
                }
            } else d = za(d === t ? d.splice(c, d.length) : d), v ? v(null, t, d, r) : sa.apply(t, d)
        })
    }

    Oi = Ta.support = {}, Li = Ta.isXML = function (e) {
        var t = e && (e.ownerDocument || e).documentElement;
        return !!t && "HTML" !== t.nodeName
    }, Hi = Ta.setDocument = function (e) {
        var t, s = e ? e.ownerDocument || e : Gi, n = s.defaultView;
        return s !== Vi && 9 === s.nodeType && s.documentElement ? (qi = (Vi = s).documentElement, $i = !Li(s), n && n !== function (e) {
            try {
                return e.top
            } catch (t) {
            }
            return null
        }(n) && (n.addEventListener ? n.addEventListener("unload", function () {
            Hi()
        }, !1) : n.attachEvent && n.attachEvent("onunload", function () {
            Hi()
        })), Oi.attributes = !0, Oi.getElementsByTagName = !0, Oi.getElementsByClassName = Na.test(s.getElementsByClassName), Oi.getById = !0, Bi.find.ID = function (e, t) {
            if (typeof t.getElementById != ra && $i) {
                var n = t.getElementById(e);
                return n && n.parentNode ? [n] : []
            }
        }, Bi.filter.ID = function (e) {
            var t = e.replace(Aa, Ra);
            return function (e) {
                return e.getAttribute("id") === t
            }
        }, Bi.find.TAG = Oi.getElementsByTagName ? function (e, t) {
            if (typeof t.getElementsByTagName != ra) return t.getElementsByTagName(e)
        } : function (e, t) {
            var n, r = [], o = 0, i = t.getElementsByTagName(e);
            if ("*" !== e) return i;
            for (; n = i[o++];) 1 === n.nodeType && r.push(n);
            return r
        }, Bi.find.CLASS = Oi.getElementsByClassName && function (e, t) {
            if ($i) return t.getElementsByClassName(e)
        }, Ki = [], Wi = [], Oi.disconnectedMatch = !0, Wi = Wi.length && new RegExp(Wi.join("|")), Ki = Ki.length && new RegExp(Ki.join("|")), t = Na.test(qi.compareDocumentPosition), Xi = t || Na.test(qi.contains) ? function (e, t) {
            var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
            return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
        } : function (e, t) {
            if (t) for (; t = t.parentNode;) if (t === e) return !0;
            return !1
        }, na = t ? function (e, t) {
            if (e === t) return ji = !0, 0;
            var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
            return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !Oi.sortDetached && t.compareDocumentPosition(e) === n ? e === s || e.ownerDocument === Gi && Xi(Gi, e) ? -1 : t === s || t.ownerDocument === Gi && Xi(Gi, t) ? 1 : zi ? la.call(zi, e) - la.call(zi, t) : 0 : 4 & n ? -1 : 1)
        } : function (e, t) {
            if (e === t) return ji = !0, 0;
            var n, r = 0, o = e.parentNode, i = t.parentNode, a = [e], u = [t];
            if (!o || !i) return e === s ? -1 : t === s ? 1 : o ? -1 : i ? 1 : zi ? la.call(zi, e) - la.call(zi, t) : 0;
            if (o === i) return Ba(e, t);
            for (n = e; n = n.parentNode;) a.unshift(n);
            for (n = t; n = n.parentNode;) u.unshift(n);
            for (; a[r] === u[r];) r++;
            return r ? Ba(a[r], u[r]) : a[r] === Gi ? -1 : u[r] === Gi ? 1 : 0
        }, s) : Vi
    }, Ta.matches = function (e, t) {
        return Ta(e, null, null, t)
    }, Ta.matchesSelector = function (e, t) {
        if ((e.ownerDocument || e) !== Vi && Hi(e), t = t.replace(ya, "='$1']"), Oi.matchesSelector && $i && (!Ki || !Ki.test(t)) && (!Wi || !Wi.test(t))) try {
            var n = (void 0).call(e, t);
            if (n || Oi.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
        } catch (_k) {
        }
        return 0 < Ta(t, Vi, null, [e]).length
    }, Ta.contains = function (e, t) {
        return (e.ownerDocument || e) !== Vi && Hi(e), Xi(e, t)
    }, Ta.attr = function (e, t) {
        (e.ownerDocument || e) !== Vi && Hi(e);
        var n = Bi.attrHandle[t.toLowerCase()],
            r = n && oa.call(Bi.attrHandle, t.toLowerCase()) ? n(e, t, !$i) : undefined;
        return r !== undefined ? r : Oi.attributes || !$i ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
    }, Ta.error = function (e) {
        throw new Error("Syntax error, unrecognized expression: " + e)
    }, Ta.uniqueSort = function (e) {
        var t, n = [], r = 0, o = 0;
        if (ji = !Oi.detectDuplicates, zi = !Oi.sortStable && e.slice(0), e.sort(na), ji) {
            for (; t = e[o++];) t === e[o] && (r = n.push(o));
            for (; r--;) e.splice(n[r], 1)
        }
        return zi = null, e
    }, Pi = Ta.getText = function (e) {
        var t, n = "", r = 0, o = e.nodeType;
        if (o) {
            if (1 === o || 9 === o || 11 === o) {
                if ("string" == typeof e.textContent) return e.textContent;
                for (e = e.firstChild; e; e = e.nextSibling) n += Pi(e)
            } else if (3 === o || 4 === o) return e.nodeValue
        } else for (; t = e[r++];) n += Pi(t);
        return n
    }, (Bi = Ta.selectors = {
        cacheLength: 50,
        createPseudo: Oa,
        match: wa,
        attrHandle: {},
        find: {},
        relative: {
            ">": {dir: "parentNode", first: !0},
            " ": {dir: "parentNode"},
            "+": {dir: "previousSibling", first: !0},
            "~": {dir: "previousSibling"}
        },
        preFilter: {
            ATTR: function (e) {
                return e[1] = e[1].replace(Aa, Ra), e[3] = (e[3] || e[4] || e[5] || "").replace(Aa, Ra), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
            }, CHILD: function (e) {
                return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || Ta.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && Ta.error(e[0]), e
            }, PSEUDO: function (e) {
                var t, n = !e[6] && e[2];
                return wa.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ba.test(n) && (t = Ii(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
            }
        },
        filter: {
            TAG: function (e) {
                var t = e.replace(Aa, Ra).toLowerCase();
                return "*" === e ? function () {
                    return !0
                } : function (e) {
                    return e.nodeName && e.nodeName.toLowerCase() === t
                }
            }, CLASS: function (e) {
                var t = Zi[e + " "];
                return t || (t = new RegExp("(^|" + fa + ")" + e + "(" + fa + "|$)")) && Zi(e, function (e) {
                    return t.test("string" == typeof e.className && e.className || typeof e.getAttribute != ra && e.getAttribute("class") || "")
                })
            }, ATTR: function (n, r, o) {
                return function (e) {
                    var t = Ta.attr(e, n);
                    return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === o : "!=" === r ? t !== o : "^=" === r ? o && 0 === t.indexOf(o) : "*=" === r ? o && -1 < t.indexOf(o) : "$=" === r ? o && t.slice(-o.length) === o : "~=" === r ? -1 < (" " + t + " ").indexOf(o) : "|=" === r && (t === o || t.slice(0, o.length + 1) === o + "-"))
                }
            }, CHILD: function (m, e, t, p, g) {
                var h = "nth" !== m.slice(0, 3), v = "last" !== m.slice(-4), y = "of-type" === e;
                return 1 === p && 0 === g ? function (e) {
                    return !!e.parentNode
                } : function (e, t, n) {
                    var r, o, i, a, u, s, c = h != v ? "nextSibling" : "previousSibling", l = e.parentNode,
                        f = y && e.nodeName.toLowerCase(), d = !n && !y;
                    if (l) {
                        if (h) {
                            for (; c;) {
                                for (i = e; i = i[c];) if (y ? i.nodeName.toLowerCase() === f : 1 === i.nodeType) return !1;
                                s = c = "only" === m && !s && "nextSibling"
                            }
                            return !0
                        }
                        if (s = [v ? l.firstChild : l.lastChild], v && d) {
                            for (u = (r = (o = l[Yi] || (l[Yi] = {}))[m] || [])[0] === Ji && r[1], a = r[0] === Ji && r[2], i = u && l.childNodes[u]; i = ++u && i && i[c] || (a = u = 0) || s.pop();) if (1 === i.nodeType && ++a && i === e) {
                                o[m] = [Ji, u, a];
                                break
                            }
                        } else if (d && (r = (e[Yi] || (e[Yi] = {}))[m]) && r[0] === Ji) a = r[1]; else for (; (i = ++u && i && i[c] || (a = u = 0) || s.pop()) && ((y ? i.nodeName.toLowerCase() !== f : 1 !== i.nodeType) || !++a || (d && ((i[Yi] || (i[Yi] = {}))[m] = [Ji, a]), i !== e));) ;
                        return (a -= g) === p || a % p == 0 && 0 <= a / p
                    }
                }
            }, PSEUDO: function (e, i) {
                var t, a = Bi.pseudos[e] || Bi.setFilters[e.toLowerCase()] || Ta.error("unsupported pseudo: " + e);
                return a[Yi] ? a(i) : 1 < a.length ? (t = [e, e, "", i], Bi.setFilters.hasOwnProperty(e.toLowerCase()) ? Oa(function (e, t) {
                    for (var n, r = a(e, i), o = r.length; o--;) e[n = la.call(e, r[o])] = !(t[n] = r[o])
                }) : function (e) {
                    return a(e, 0, t)
                }) : a
            }
        },
        pseudos: {
            not: Oa(function (e) {
                var r = [], o = [], u = Mi(e.replace(ga, "$1"));
                return u[Yi] ? Oa(function (e, t, n, r) {
                    for (var o, i = u(e, null, r, []), a = e.length; a--;) (o = i[a]) && (e[a] = !(t[a] = o))
                }) : function (e, t, n) {
                    return r[0] = e, u(r, null, n, o), r[0] = null, !o.pop()
                }
            }), has: Oa(function (t) {
                return function (e) {
                    return 0 < Ta(t, e).length
                }
            }), contains: Oa(function (t) {
                return t = t.replace(Aa, Ra), function (e) {
                    return -1 < (e.textContent || e.innerText || Pi(e)).indexOf(t)
                }
            }), lang: Oa(function (n) {
                return Ca.test(n || "") || Ta.error("unsupported lang: " + n), n = n.replace(Aa, Ra).toLowerCase(), function (e) {
                    var t;
                    do {
                        if (t = $i ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                    } while ((e = e.parentNode) && 1 === e.nodeType);
                    return !1
                }
            }), target: function (e) {
                var t = window.location && window.location.hash;
                return t && t.slice(1) === e.id
            }, root: function (e) {
                return e === qi
            }, focus: function (e) {
                return e === Vi.activeElement && (!Vi.hasFocus || Vi.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
            }, enabled: function (e) {
                return !1 === e.disabled
            }, disabled: function (e) {
                return !0 === e.disabled
            }, checked: function (e) {
                var t = e.nodeName.toLowerCase();
                return "input" === t && !!e.checked || "option" === t && !!e.selected
            }, selected: function (e) {
                return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            }, empty: function (e) {
                for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                return !0
            }, parent: function (e) {
                return !Bi.pseudos.empty(e)
            }, header: function (e) {
                return Sa.test(e.nodeName)
            }, input: function (e) {
                return xa.test(e.nodeName)
            }, button: function (e) {
                var t = e.nodeName.toLowerCase();
                return "input" === t && "button" === e.type || "button" === t
            }, text: function (e) {
                var t;
                return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
            }, first: Pa(function () {
                return [0]
            }), last: Pa(function (e, t) {
                return [t - 1]
            }), eq: Pa(function (e, t, n) {
                return [n < 0 ? n + t : n]
            }), even: Pa(function (e, t) {
                for (var n = 0; n < t; n += 2) e.push(n);
                return e
            }), odd: Pa(function (e, t) {
                for (var n = 1; n < t; n += 2) e.push(n);
                return e
            }), lt: Pa(function (e, t, n) {
                for (var r = n < 0 ? n + t : n; 0 <= --r;) e.push(r);
                return e
            }), gt: Pa(function (e, t, n) {
                for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                return e
            })
        }
    }).pseudos.nth = Bi.pseudos.eq, Y(["radio", "checkbox", "file", "password", "image"], function (e) {
        var t;
        Bi.pseudos[e] = (t = e, function (e) {
            return "input" === e.nodeName.toLowerCase() && e.type === t
        })
    }), Y(["submit", "reset"], function (e) {
        var n;
        Bi.pseudos[e] = (n = e, function (e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t || "button" === t) && e.type === n
        })
    }), Ia.prototype = Bi.filters = Bi.pseudos, Bi.setFilters = new Ia, Ii = Ta.tokenize = function (e, t) {
        var n, r, o, i, a, u, s, c = ea[e + " "];
        if (c) return t ? 0 : c.slice(0);
        for (a = e, u = [], s = Bi.preFilter; a;) {
            for (i in n && !(r = ha.exec(a)) || (r && (a = a.slice(r[0].length) || a), u.push(o = [])), n = !1, (r = va.exec(a)) && (n = r.shift(), o.push({
                value: n,
                type: r[0].replace(ga, " ")
            }), a = a.slice(n.length)), Bi.filter) Bi.filter.hasOwnProperty(i) && (!(r = wa[i].exec(a)) || s[i] && !(r = s[i](r)) || (n = r.shift(), o.push({
                value: n,
                type: i,
                matches: r
            }), a = a.slice(n.length)));
            if (!n) break
        }
        return t ? a.length : a ? Ta.error(e) : ea(e, u).slice(0)
    }, Mi = Ta.compile = function (e, t) {
        var n, h, v, y, b, r, o = [], i = [], a = ta[e + " "];
        if (!a) {
            for (n = (t = t || Ii(e)).length; n--;) (a = function f(e) {
                for (var o, t, n, r = e.length, i = Bi.relative[e[0].type], a = i || Bi.relative[" "], u = i ? 1 : 0, s = Fa(function (e) {
                    return e === o
                }, a, !0), c = Fa(function (e) {
                    return -1 < la.call(o, e)
                }, a, !0), l = [function (e, t, n) {
                    var r = !i && (n || t !== Ui) || ((o = t).nodeType ? s : c)(e, t, n);
                    return o = null, r
                }]; u < r; u++) if (t = Bi.relative[e[u].type]) l = [Fa(Ua(l), t)]; else {
                    if ((t = Bi.filter[e[u].type].apply(null, e[u].matches))[Yi]) {
                        for (n = ++u; n < r && !Bi.relative[e[n].type]; n++) ;
                        return ja(1 < u && Ua(l), 1 < u && Ma(e.slice(0, u - 1).concat({value: " " === e[u - 2].type ? "*" : ""})).replace(ga, "$1"), t, u < n && f(e.slice(u, n)), n < r && f(e = e.slice(n)), n < r && Ma(e))
                    }
                    l.push(t)
                }
                return Ua(l)
            }(t[n]))[Yi] ? o.push(a) : i.push(a);
            (a = ta(e, (h = i, y = 0 < (v = o).length, b = 0 < h.length, r = function (e, t, n, r, o) {
                var i, a, u, s = 0, c = "0", l = e && [], f = [], d = Ui, m = e || b && Bi.find.TAG("*", o),
                    p = Ji += null == d ? 1 : Math.random() || .1, g = m.length;
                for (o && (Ui = t !== Vi && t); c !== g && null != (i = m[c]); c++) {
                    if (b && i) {
                        for (a = 0; u = h[a++];) if (u(i, t, n)) {
                            r.push(i);
                            break
                        }
                        o && (Ji = p)
                    }
                    y && ((i = !u && i) && s--, e && l.push(i))
                }
                if (s += c, y && c !== s) {
                    for (a = 0; u = v[a++];) u(l, f, t, n);
                    if (e) {
                        if (0 < s) for (; c--;) l[c] || f[c] || (f[c] = aa.call(r));
                        f = za(f)
                    }
                    sa.apply(r, f), o && !e && 0 < f.length && 1 < s + v.length && Ta.uniqueSort(r)
                }
                return o && (Ji = p, Ui = d), l
            }, y ? Oa(r) : r))).selector = e
        }
        return a
    }, Fi = Ta.select = function (e, t, n, r) {
        var o, i, a, u, s, c = "function" == typeof e && e, l = !r && Ii(e = c.selector || e);
        if (n = n || [], 1 === l.length) {
            if (2 < (i = l[0] = l[0].slice(0)).length && "ID" === (a = i[0]).type && Oi.getById && 9 === t.nodeType && $i && Bi.relative[i[1].type]) {
                if (!(t = (Bi.find.ID(a.matches[0].replace(Aa, Ra), t) || [])[0])) return n;
                c && (t = t.parentNode), e = e.slice(i.shift().value.length)
            }
            for (o = wa.needsContext.test(e) ? 0 : i.length; o-- && (a = i[o], !Bi.relative[u = a.type]);) if ((s = Bi.find[u]) && (r = s(a.matches[0].replace(Aa, Ra), ka.test(i[0].type) && La(t.parentNode) || t))) {
                if (i.splice(o, 1), !(e = r.length && Ma(i))) return sa.apply(n, r), n;
                break
            }
        }
        return (c || Mi(e, l))(r, t, !$i, n, ka.test(e) && La(t.parentNode) || t), n
    }, Oi.sortStable = Yi.split("").sort(na).join("") === Yi, Oi.detectDuplicates = !!ji, Hi(), Oi.sortDetached = !0;
    var Ha = document, Va = Array.prototype.push, qa = Array.prototype.slice,
        $a = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, Wa = Ti.Event, Ka = _t.makeMap("children,contents,next,prev"),
        Xa = function (e) {
            return void 0 !== e
        }, Ya = function (e) {
            return "string" == typeof e
        }, Ga = function (e, t) {
            var n, r = (t = t || Ha).createElement("div"), o = t.createDocumentFragment();
            for (r.innerHTML = e; n = r.firstChild;) o.appendChild(n);
            return o
        }, Ja = function (e, t, n, r) {
            var o;
            if (Ya(t)) t = Ga(t, fu(e[0])); else if (t.length && !t.nodeType) {
                if (t = gu.makeArray(t), r) for (o = t.length - 1; 0 <= o; o--) Ja(e, t[o], n, r); else for (o = 0; o < t.length; o++) Ja(e, t[o], n, r);
                return e
            }
            if (t.nodeType) for (o = e.length; o--;) n.call(e[o], t);
            return e
        }, Qa = function (e, t) {
            return e && t && -1 !== (" " + e.className + " ").indexOf(" " + t + " ")
        }, Za = function (e, t, n) {
            var r, o;
            return t = gu(t)[0], e.each(function () {
                n && r === this.parentNode || (r = this.parentNode, o = t.cloneNode(!1), this.parentNode.insertBefore(o, this)), o.appendChild(this)
            }), e
        }, eu = _t.makeMap("fillOpacity fontWeight lineHeight opacity orphans widows zIndex zoom", " "),
        tu = _t.makeMap("checked compact declare defer disabled ismap multiple nohref noshade nowrap readonly selected", " "),
        nu = {"for": "htmlFor", "class": "className", readonly: "readOnly"}, ru = {"float": "cssFloat"}, ou = {},
        iu = {}, au = function (e, t) {
            return new gu.fn.init(e, t)
        }, uu = /^\s*|\s*$/g, su = function (e) {
            return null === e || e === undefined ? "" : ("" + e).replace(uu, "")
        }, cu = function (e, t) {
            var n, r, o, i;
            if (e) if ((n = e.length) === undefined) {
                for (r in e) if (e.hasOwnProperty(r) && (i = e[r], !1 === t.call(i, r, i))) break
            } else for (o = 0; o < n && (i = e[o], !1 !== t.call(i, o, i)); o++) ;
            return e
        }, lu = function (e, n) {
            var r = [];
            return cu(e, function (e, t) {
                n(t, e) && r.push(t)
            }), r
        }, fu = function (e) {
            return e ? 9 === e.nodeType ? e : e.ownerDocument : Ha
        };
    au.fn = au.prototype = {
        constructor: au, selector: "", context: null, length: 0, init: function (e, t) {
            var n, r, o = this;
            if (!e) return o;
            if (e.nodeType) return o.context = o[0] = e, o.length = 1, o;
            if (t && t.nodeType) o.context = t; else {
                if (t) return gu(e).attr(t);
                o.context = t = document
            }
            if (Ya(e)) {
                if (!(n = "<" === (o.selector = e).charAt(0) && ">" === e.charAt(e.length - 1) && 3 <= e.length ? [null, e, null] : $a.exec(e))) return gu(t).find(e);
                if (n[1]) for (r = Ga(e, fu(t)).firstChild; r;) Va.call(o, r), r = r.nextSibling; else {
                    if (!(r = fu(t).getElementById(n[2]))) return o;
                    if (r.id !== n[2]) return o.find(e);
                    o.length = 1, o[0] = r
                }
            } else this.add(e, !1);
            return o
        }, toArray: function () {
            return _t.toArray(this)
        }, add: function (e, t) {
            var n, r;
            if (Ya(e)) return this.add(gu(e));
            if (!1 !== t) for (n = gu.unique(this.toArray().concat(gu.makeArray(e))), this.length = n.length, r = 0; r < n.length; r++) this[r] = n[r]; else Va.apply(this, gu.makeArray(e));
            return this
        }, attr: function (t, n) {
            var e, r = this;
            if ("object" == typeof t) cu(t, function (e, t) {
                r.attr(e, t)
            }); else {
                if (!Xa(n)) {
                    if (r[0] && 1 === r[0].nodeType) {
                        if ((e = ou[t]) && e.get) return e.get(r[0], t);
                        if (tu[t]) return r.prop(t) ? t : undefined;
                        null === (n = r[0].getAttribute(t, 2)) && (n = undefined)
                    }
                    return n
                }
                this.each(function () {
                    var e;
                    if (1 === this.nodeType) {
                        if ((e = ou[t]) && e.set) return void e.set(this, n);
                        null === n ? this.removeAttribute(t, 2) : this.setAttribute(t, n, 2)
                    }
                })
            }
            return r
        }, removeAttr: function (e) {
            return this.attr(e, null)
        }, prop: function (e, t) {
            var n = this;
            if ("object" == typeof (e = nu[e] || e)) cu(e, function (e, t) {
                n.prop(e, t)
            }); else {
                if (!Xa(t)) return n[0] && n[0].nodeType && e in n[0] ? n[0][e] : t;
                this.each(function () {
                    1 === this.nodeType && (this[e] = t)
                })
            }
            return n
        }, css: function (n, r) {
            var e, o, i = this, t = function (e) {
                return e.replace(/-(\D)/g, function (e, t) {
                    return t.toUpperCase()
                })
            }, a = function (e) {
                return e.replace(/[A-Z]/g, function (e) {
                    return "-" + e
                })
            };
            if ("object" == typeof n) cu(n, function (e, t) {
                i.css(e, t)
            }); else if (Xa(r)) n = t(n), "number" != typeof r || eu[n] || (r = r.toString() + "px"), i.each(function () {
                var e = this.style;
                if ((o = iu[n]) && o.set) o.set(this, r); else {
                    try {
                        this.style[ru[n] || n] = r
                    } catch (t) {
                    }
                    null !== r && "" !== r || (e.removeProperty ? e.removeProperty(a(n)) : e.removeAttribute(n))
                }
            }); else {
                if (e = i[0], (o = iu[n]) && o.get) return o.get(e);
                if (!e.ownerDocument.defaultView) return e.currentStyle ? e.currentStyle[t(n)] : "";
                try {
                    return e.ownerDocument.defaultView.getComputedStyle(e, null).getPropertyValue(a(n))
                } catch (u) {
                    return undefined
                }
            }
            return i
        }, remove: function () {
            for (var e, t = this.length; t--;) e = this[t], Wa.clean(e), e.parentNode && e.parentNode.removeChild(e);
            return this
        }, empty: function () {
            for (var e, t = this.length; t--;) for (e = this[t]; e.firstChild;) e.removeChild(e.firstChild);
            return this
        }, html: function (e) {
            var t;
            if (Xa(e)) {
                t = this.length;
                try {
                    for (; t--;) this[t].innerHTML = e
                } catch (n) {
                    gu(this[t]).empty().append(e)
                }
                return this
            }
            return this[0] ? this[0].innerHTML : ""
        }, text: function (e) {
            var t;
            if (Xa(e)) {
                for (t = this.length; t--;) "innerText" in this[t] ? this[t].innerText = e : this[0].textContent = e;
                return this
            }
            return this[0] ? this[0].innerText || this[0].textContent : ""
        }, append: function () {
            return Ja(this, arguments, function (e) {
                (1 === this.nodeType || this.host && 1 === this.host.nodeType) && this.appendChild(e)
            })
        }, prepend: function () {
            return Ja(this, arguments, function (e) {
                (1 === this.nodeType || this.host && 1 === this.host.nodeType) && this.insertBefore(e, this.firstChild)
            }, !0)
        }, before: function () {
            return this[0] && this[0].parentNode ? Ja(this, arguments, function (e) {
                this.parentNode.insertBefore(e, this)
            }) : this
        }, after: function () {
            return this[0] && this[0].parentNode ? Ja(this, arguments, function (e) {
                this.parentNode.insertBefore(e, this.nextSibling)
            }, !0) : this
        }, appendTo: function (e) {
            return gu(e).append(this), this
        }, prependTo: function (e) {
            return gu(e).prepend(this), this
        }, replaceWith: function (e) {
            return this.before(e).remove()
        }, wrap: function (e) {
            return Za(this, e)
        }, wrapAll: function (e) {
            return Za(this, e, !0)
        }, wrapInner: function (e) {
            return this.each(function () {
                gu(this).contents().wrapAll(e)
            }), this
        }, unwrap: function () {
            return this.parent().each(function () {
                gu(this).replaceWith(this.childNodes)
            })
        }, clone: function () {
            var e = [];
            return this.each(function () {
                e.push(this.cloneNode(!0))
            }), gu(e)
        }, addClass: function (e) {
            return this.toggleClass(e, !0)
        }, removeClass: function (e) {
            return this.toggleClass(e, !1)
        }, toggleClass: function (o, i) {
            var e = this;
            return "string" != typeof o || (-1 !== o.indexOf(" ") ? cu(o.split(" "), function () {
                e.toggleClass(this, i)
            }) : e.each(function (e, t) {
                var n, r = Qa(t, o);
                r !== i && (n = t.className, r ? t.className = su((" " + n + " ").replace(" " + o + " ", " ")) : t.className += n ? " " + o : o)
            })), e
        }, hasClass: function (e) {
            return Qa(this[0], e)
        }, each: function (e) {
            return cu(this, e)
        }, on: function (e, t) {
            return this.each(function () {
                Wa.bind(this, e, t)
            })
        }, off: function (e, t) {
            return this.each(function () {
                Wa.unbind(this, e, t)
            })
        }, trigger: function (e) {
            return this.each(function () {
                "object" == typeof e ? Wa.fire(this, e.type, e) : Wa.fire(this, e)
            })
        }, show: function () {
            return this.css("display", "")
        }, hide: function () {
            return this.css("display", "none")
        }, slice: function () {
            return gu(qa.apply(this, arguments))
        }, eq: function (e) {
            return -1 === e ? this.slice(e) : this.slice(e, +e + 1)
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, find: function (e) {
            for (var t = [], n = 0, r = this.length; n < r; n++) gu.find(e, this[n], t);
            return gu(t)
        }, filter: function (n) {
            return gu("function" == typeof n ? lu(this.toArray(), function (e, t) {
                return n(t, e)
            }) : gu.filter(n, this.toArray()))
        }, closest: function (n) {
            var r = [];
            return n instanceof gu && (n = n[0]), this.each(function (e, t) {
                for (; t;) {
                    if ("string" == typeof n && gu(t).is(n)) {
                        r.push(t);
                        break
                    }
                    if (t === n) {
                        r.push(t);
                        break
                    }
                    t = t.parentNode
                }
            }), gu(r)
        }, offset: function (e) {
            var t, n, r, o, i = 0, a = 0;
            return e ? this.css(e) : ((t = this[0]) && (r = (n = t.ownerDocument).documentElement, t.getBoundingClientRect && (i = (o = t.getBoundingClientRect()).left + (r.scrollLeft || n.body.scrollLeft) - r.clientLeft, a = o.top + (r.scrollTop || n.body.scrollTop) - r.clientTop)), {
                left: i,
                top: a
            })
        }, push: Va, sort: Array.prototype.sort, splice: Array.prototype.splice
    }, _t.extend(au, {
        extend: _t.extend,
        makeArray: function (e) {
            return (t = e) && t === t.window || e.nodeType ? [e] : _t.toArray(e);
            var t
        },
        inArray: function (e, t) {
            var n;
            if (t.indexOf) return t.indexOf(e);
            for (n = t.length; n--;) if (t[n] === e) return n;
            return -1
        },
        isArray: _t.isArray,
        each: cu,
        trim: su,
        grep: lu,
        find: Ta,
        expr: Ta.selectors,
        unique: Ta.uniqueSort,
        text: Ta.getText,
        contains: Ta.contains,
        filter: function (e, t, n) {
            var r = t.length;
            for (n && (e = ":not(" + e + ")"); r--;) 1 !== t[r].nodeType && t.splice(r, 1);
            return t = 1 === t.length ? gu.find.matchesSelector(t[0], e) ? [t[0]] : [] : gu.find.matches(e, t)
        }
    });
    var du = function (e, t, n) {
        var r = [], o = e[t];
        for ("string" != typeof n && n instanceof gu && (n = n[0]); o && 9 !== o.nodeType;) {
            if (n !== undefined) {
                if (o === n) break;
                if ("string" == typeof n && gu(o).is(n)) break
            }
            1 === o.nodeType && r.push(o), o = o[t]
        }
        return r
    }, mu = function (e, t, n, r) {
        var o = [];
        for (r instanceof gu && (r = r[0]); e; e = e[t]) if (!n || e.nodeType === n) {
            if (r !== undefined) {
                if (e === r) break;
                if ("string" == typeof r && gu(e).is(r)) break
            }
            o.push(e)
        }
        return o
    }, pu = function (e, t, n) {
        for (e = e[t]; e; e = e[t]) if (e.nodeType === n) return e;
        return null
    };
    cu({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        }, parents: function (e) {
            return du(e, "parentNode")
        }, next: function (e) {
            return pu(e, "nextSibling", 1)
        }, prev: function (e) {
            return pu(e, "previousSibling", 1)
        }, children: function (e) {
            return mu(e.firstChild, "nextSibling", 1)
        }, contents: function (e) {
            return _t.toArray(("iframe" === e.nodeName ? e.contentDocument || e.contentWindow.document : e).childNodes)
        }
    }, function (r, o) {
        au.fn[r] = function (t) {
            var n = [];
            this.each(function () {
                var e = o.call(n, this, t, n);
                e && (gu.isArray(e) ? n.push.apply(n, e) : n.push(e))
            }), 1 < this.length && (Ka[r] || (n = gu.unique(n)), 0 === r.indexOf("parents") && (n = n.reverse()));
            var e = gu(n);
            return t ? e.filter(t) : e
        }
    }), cu({
        parentsUntil: function (e, t) {
            return du(e, "parentNode", t)
        }, nextUntil: function (e, t) {
            return mu(e, "nextSibling", 1, t).slice(1)
        }, prevUntil: function (e, t) {
            return mu(e, "previousSibling", 1, t).slice(1)
        }
    }, function (o, i) {
        au.fn[o] = function (t, e) {
            var n = [];
            this.each(function () {
                var e = i.call(n, this, t, n);
                e && (gu.isArray(e) ? n.push.apply(n, e) : n.push(e))
            }), 1 < this.length && (n = gu.unique(n), 0 !== o.indexOf("parents") && "prevUntil" !== o || (n = n.reverse()));
            var r = gu(n);
            return e ? r.filter(e) : r
        }
    }), au.fn.is = function (e) {
        return !!e && 0 < this.filter(e).length
    }, au.fn.init.prototype = au.fn, au.overrideDefaults = function (n) {
        var r, o = function (e, t) {
            return r = r || n(), 0 === arguments.length && (e = r.element), t = t || r.context, new o.fn.init(e, t)
        };
        return gu.extend(o, this), o
    }, au.attrHooks = ou, au.cssHooks = iu;
    var gu = au, hu = _t.each, vu = _t.grep, yu = xt.ie, bu = /^([a-z0-9],?)+$/i, Cu = function (e, t) {
        var n = t.attr("style"), r = (r = e.serialize(e.parse(n), t[0].nodeName)) || null;
        t.attr("data-mce-style", r)
    }, wu = function (e, t) {
        var n, r, o = 0;
        if (e) for (n = e.nodeType, e = e.previousSibling; e; e = e.previousSibling) r = e.nodeType, (!t || 3 !== r || r !== n && e.nodeValue.length) && (o++, n = r);
        return o
    }, xu = function (a, u) {
        void 0 === u && (u = {});
        var n, r, o, i, e, t, s = {}, c = window, l = {}, f = 0,
            d = Xr.forElement(Rt.fromDom(a), {contentCssCors: u.contentCssCors, referrerPolicy: u.referrerPolicy}),
            m = [], p = u.schema ? u.schema : Ci({}),
            g = xi({url_converter: u.url_converter, url_converter_scope: u.url_converter_scope}, u.schema),
            h = u.ownEvents ? new Ti : Ti.Event, v = p.getBlockElements(), y = gu.overrideDefaults(function () {
                return {context: a, element: $.getRoot()}
            }), b = function (e) {
                return e && a && K(e) ? a.getElementById(e) : e
            }, C = function (e) {
                return y("string" == typeof e ? b(e) : e)
            }, w = function (e, t, n) {
                var r, o, i = C(e);
                return i.length && (o = (r = W[t]) && r.get ? r.get(i, t) : i.attr(t)), void 0 === o && (o = n || ""), o
            }, x = function (e) {
                var t = b(e);
                return t ? t.attributes : []
            }, S = function (e, t, n) {
                "" === n && (n = null);
                var r, o = C(e), i = o.attr(t);
                o.length && ((r = W[t]) && r.set ? r.set(o, n, t) : o.attr(t, n), i !== n && u.onSetAttrib && u.onSetAttrib({
                    attrElm: o,
                    attrName: t,
                    attrValue: n
                }))
            }, N = function () {
                return u.root_element || a.body
            }, E = function (e, t) {
                return sr(a.body, b(e), t)
            }, k = function (e, t, n) {
                var r = C(e);
                return n ? r.css(t) : ("float" === (t = t.replace(/-(\D)/g, function (e, t) {
                    return t.toUpperCase()
                })) && (t = xt.browser.isIE() ? "styleFloat" : "cssFloat"), r[0] && r[0].style ? r[0].style[t] : undefined)
            }, _ = function (e) {
                var t, n;
                return e = b(e), t = k(e, "width"), n = k(e, "height"), -1 === t.indexOf("px") && (t = 0), -1 === n.indexOf("px") && (n = 0), {
                    w: parseInt(t, 10) || e.offsetWidth || e.clientWidth,
                    h: parseInt(n, 10) || e.offsetHeight || e.clientHeight
                }
            }, A = function (e, t) {
                if (!e) return !1;
                if (!Array.isArray(e)) {
                    if ("*" === t) return 1 === e.nodeType;
                    if (bu.test(t)) {
                        for (var n = t.toLowerCase().split(/,/), r = e.nodeName.toLowerCase(), o = n.length - 1; 0 <= o; o--) if (n[o] === r) return !0;
                        return !1
                    }
                    if (e.nodeType && 1 !== e.nodeType) return !1
                }
                var i = Array.isArray(e) ? e : [e];
                return 0 < Ta(t, i[0].ownerDocument || i[0], null, i).length
            }, R = function (e, t, n, r) {
                var o, i = [], a = b(e);
                for (r = r === undefined, n = n || ("BODY" !== N().nodeName ? N().parentNode : null), _t.is(t, "string") && (t = "*" === (o = t) ? function (e) {
                    return 1 === e.nodeType
                } : function (e) {
                    return A(e, o)
                }); a && !(a === n || X(a.nodeType) || Un(a) || zn(a));) {
                    if (!t || "function" == typeof t && t(a)) {
                        if (!r) return [a];
                        i.push(a)
                    }
                    a = a.parentNode
                }
                return r ? i : null
            }, T = function (e, t, n) {
                var r = t;
                if (e) for ("string" == typeof t && (r = function (e) {
                    return A(e, t)
                }), e = e[n]; e; e = e[n]) if ("function" == typeof r && r(e)) return e;
                return null
            }, D = function (e, n, r) {
                var o, t = "string" == typeof e ? b(e) : e;
                if (!t) return !1;
                if (_t.isArray(t) && (t.length || 0 === t.length)) return o = [], hu(t, function (e, t) {
                    e && o.push(n.call(r, "string" == typeof e ? b(e) : e, t))
                }), o;
                var i = r || this;
                return n.call(i, t)
            }, O = function (e, t) {
                C(e).each(function (e, n) {
                    hu(t, function (e, t) {
                        S(n, t, e)
                    })
                })
            }, B = function (e, r) {
                var t = C(e);
                yu ? t.each(function (e, t) {
                    if (!1 !== t.canHaveHTML) {
                        for (; t.firstChild;) t.removeChild(t.firstChild);
                        try {
                            t.innerHTML = "<br>" + r, t.removeChild(t.firstChild)
                        } catch (n) {
                            gu("<div></div>").html("<br>" + r).contents().slice(1).appendTo(t)
                        }
                        return r
                    }
                }) : t.html(r)
            }, P = function (e, n, r, o, i) {
                return D(e, function (e) {
                    var t = "string" == typeof n ? a.createElement(n) : n;
                    return O(t, r), o && ("string" != typeof o && o.nodeType ? t.appendChild(o) : "string" == typeof o && B(t, o)), i ? t : e.appendChild(t)
                })
            }, L = function (e, t, n) {
                return P(a.createElement(e), e, t, n, !0)
            }, I = li.encodeAllRaw, M = function (e, t) {
                var n = C(e);
                return t ? n.each(function () {
                    for (var e; e = this.firstChild;) 3 === e.nodeType && 0 === e.data.length ? this.removeChild(e) : this.parentNode.insertBefore(e, this)
                }).remove() : n.remove(), 1 < n.length ? n.toArray() : n[0]
            }, F = function (e, t, n) {
                C(e).toggleClass(t, n).each(function () {
                    "" === this.className && gu(this).attr("class", null)
                })
            }, U = function (t, e, n) {
                return D(e, function (e) {
                    return _t.is(e, "array") && (t = t.cloneNode(!0)), n && hu(vu(e.childNodes), function (e) {
                        t.appendChild(e)
                    }), e.parentNode.replaceChild(t, e)
                })
            }, z = function (e) {
                if (Rn(e)) {
                    var t = "a" === e.nodeName.toLowerCase() && !w(e, "href") && w(e, "id");
                    if (w(e, "name") || w(e, "data-mce-bookmark") || t) return !0
                }
                return !1
            }, j = function () {
                return a.createRange()
            }, H = function (e, t, n, r) {
                if (_t.isArray(e)) {
                    for (var o = e.length, i = []; o--;) i[o] = H(e[o], t, n, r);
                    return i
                }
                return !u.collect || e !== a && e !== c || m.push([e, t, n, r]), h.bind(e, t, n, r || $)
            }, V = function (e, t, n) {
                if (_t.isArray(e)) {
                    for (var r = e.length, o = []; r--;) o[r] = V(e[r], t, n);
                    return o
                }
                if (0 < m.length && (e === a || e === c)) for (r = m.length; r--;) {
                    var i = m[r];
                    e !== i[0] || t && t !== i[1] || n && n !== i[2] || h.unbind(i[0], i[1], i[2])
                }
                return h.unbind(e, t, n)
            }, q = function (e) {
                if (e && Rn(e)) {
                    var t = e.getAttribute("data-mce-contenteditable");
                    return t && "inherit" !== t ? t : "inherit" !== e.contentEditable ? e.contentEditable : null
                }
                return null
            }, $ = {
                doc: a,
                settings: u,
                win: c,
                files: l,
                stdMode: !0,
                boxModel: !0,
                styleSheetLoader: d,
                boundEvents: m,
                styles: g,
                schema: p,
                events: h,
                isBlock: function (e) {
                    if ("string" == typeof e) return !!v[e];
                    if (e) {
                        var t = e.nodeType;
                        if (t) return !(1 !== t || !v[e.nodeName])
                    }
                    return !1
                },
                $: y,
                $$: C,
                root: null,
                clone: function (t, e) {
                    if (!yu || 1 !== t.nodeType || e) return t.cloneNode(e);
                    var n = a.createElement(t.nodeName);
                    return hu(x(t), function (e) {
                        S(n, e.nodeName, w(t, e.nodeName))
                    }), n
                },
                getRoot: N,
                getViewPort: function (e) {
                    var t = kn(e);
                    return {x: t.x, y: t.y, w: t.width, h: t.height}
                },
                getRect: function (e) {
                    e = b(e);
                    var t = E(e), n = _(e);
                    return {x: t.x, y: t.y, w: n.w, h: n.h}
                },
                getSize: _,
                getParent: function (e, t, n) {
                    var r = R(e, t, n, !1);
                    return r && 0 < r.length ? r[0] : null
                },
                getParents: R,
                get: b,
                getNext: function (e, t) {
                    return T(e, t, "nextSibling")
                },
                getPrev: function (e, t) {
                    return T(e, t, "previousSibling")
                },
                select: function (e, t) {
                    return Ta(e, b(t) || u.root_element || a, [])
                },
                is: A,
                add: P,
                create: L,
                createHTML: function (e, t, n) {
                    var r, o = "";
                    for (r in o += "<" + e, t) t.hasOwnProperty(r) && null !== t[r] && "undefined" != typeof t[r] && (o += " " + r + '="' + I(t[r]) + '"');
                    return void 0 !== n ? o + ">" + n + "</" + e + ">" : o + " />"
                },
                createFragment: function (e) {
                    var t, n = a.createElement("div"), r = a.createDocumentFragment();
                    for (r.appendChild(n), e && (n.innerHTML = e); t = n.firstChild;) r.appendChild(t);
                    return r.removeChild(n), r
                },
                remove: M,
                setStyle: function (e, t, n) {
                    var r = K(t) ? C(e).css(t, n) : C(e).css(t);
                    u.update_styles && Cu(g, r)
                },
                getStyle: k,
                setStyles: function (e, t) {
                    var n = C(e).css(t);
                    u.update_styles && Cu(g, n)
                },
                removeAllAttribs: function (e) {
                    return D(e, function (e) {
                        for (var t = e.attributes, n = t.length - 1; 0 <= n; n--) e.removeAttributeNode(t.item(n))
                    })
                },
                setAttrib: S,
                setAttribs: O,
                getAttrib: w,
                getPos: E,
                parseStyle: function (e) {
                    return g.parse(e)
                },
                serializeStyle: function (e, t) {
                    return g.serialize(e, t)
                },
                addStyle: function (e) {
                    var t, n;
                    if ($ !== xu.DOM && a === document) {
                        if (s[e]) return;
                        s[e] = !0
                    }
                    (n = a.getElementById("mceDefaultStyles")) || ((n = a.createElement("style")).id = "mceDefaultStyles", n.type = "text/css", (t = a.getElementsByTagName("head")[0]).firstChild ? t.insertBefore(n, t.firstChild) : t.appendChild(n)), n.styleSheet ? n.styleSheet.cssText += e : n.appendChild(a.createTextNode(e))
                },
                loadCSS: function (e) {
                    Y((e = e || "").split(","), function (e) {
                        l[e] = !0, d.load(e, te)
                    })
                },
                addClass: function (e, t) {
                    C(e).addClass(t)
                },
                removeClass: function (e, t) {
                    F(e, t, !1)
                },
                hasClass: function (e, t) {
                    return C(e).hasClass(t)
                },
                toggleClass: F,
                show: function (e) {
                    C(e).show()
                },
                hide: function (e) {
                    C(e).hide()
                },
                isHidden: function (e) {
                    return "none" === C(e).css("display")
                },
                uniqueId: function (e) {
                    return (e || "mce_") + f++
                },
                setHTML: B,
                getOuterHTML: function (e) {
                    var t = "string" == typeof e ? b(e) : e;
                    return Rn(t) ? t.outerHTML : gu("<div></div>").append(gu(t).clone()).html()
                },
                setOuterHTML: function (e, t) {
                    C(e).each(function () {
                        try {
                            if ("outerHTML" in this) return void (this.outerHTML = t)
                        } catch (e) {
                        }
                        M(gu(this).html(t), !0)
                    })
                },
                decode: li.decode,
                encode: I,
                insertAfter: function (e, t) {
                    var r = b(t);
                    return D(e, function (e) {
                        var t = r.parentNode, n = r.nextSibling;
                        return n ? t.insertBefore(e, n) : t.appendChild(e), e
                    })
                },
                replace: U,
                rename: function (t, e) {
                    var n;
                    return t.nodeName !== e.toUpperCase() && (n = L(e), hu(x(t), function (e) {
                        S(n, e.nodeName, w(t, e.nodeName))
                    }), U(n, t, !0)), n || t
                },
                findCommonAncestor: function (e, t) {
                    for (var n, r = e; r;) {
                        for (n = t; n && r !== n;) n = n.parentNode;
                        if (r === n) break;
                        r = r.parentNode
                    }
                    return !r && e.ownerDocument ? e.ownerDocument.documentElement : r
                },
                toHex: function (e) {
                    return g.toHex(_t.trim(e))
                },
                run: D,
                getAttribs: x,
                isEmpty: function (e, t) {
                    var n, r, o = 0;
                    if (z(e)) return !1;
                    if (e = e.firstChild) {
                        var i = new Yr(e, e.parentNode), a = p ? p.getWhiteSpaceElements() : {};
                        t = t || (p ? p.getNonEmptyElements() : null);
                        do {
                            if (n = e.nodeType, Rn(e)) {
                                var u = e.getAttribute("data-mce-bogus");
                                if (u) {
                                    e = i.next("all" === u);
                                    continue
                                }
                                if (r = e.nodeName.toLowerCase(), t && t[r]) {
                                    if ("br" !== r) return !1;
                                    o++, e = i.next();
                                    continue
                                }
                                if (z(e)) return !1
                            }
                            if (8 === n) return !1;
                            if (3 === n && !zo(e.nodeValue)) return !1;
                            if (3 === n && e.parentNode && a[e.parentNode.nodeName] && zo(e.nodeValue)) return !1;
                            e = i.next()
                        } while (e)
                    }
                    return o <= 1
                },
                createRng: j,
                nodeIndex: wu,
                split: function (e, t, n) {
                    var r, o, i, a = j();
                    if (e && t) return a.setStart(e.parentNode, wu(e)), a.setEnd(t.parentNode, wu(t)), r = a.extractContents(), (a = j()).setStart(t.parentNode, wu(t) + 1), a.setEnd(e.parentNode, wu(e) + 1), o = a.extractContents(), (i = e.parentNode).insertBefore(Go($, r), e), n ? i.insertBefore(n, e) : i.insertBefore(t, e), i.insertBefore(Go($, o), e), M(e), n || t
                },
                bind: H,
                unbind: V,
                fire: function (e, t, n) {
                    return h.fire(e, t, n)
                },
                getContentEditable: q,
                getContentEditableParent: function (e) {
                    for (var t = N(), n = null; e && e !== t && null === (n = q(e)); e = e.parentNode) ;
                    return n
                },
                destroy: function () {
                    if (0 < m.length) for (var e = m.length; e--;) {
                        var t = m[e];
                        h.unbind(t[0], t[1], t[2])
                    }
                    se(l, function (e, t) {
                        d.unload(t), delete l[t]
                    }), Ta.setDocument && Ta.setDocument()
                },
                isChildOf: function (e, t) {
                    for (; e;) {
                        if (t === e) return !0;
                        e = e.parentNode
                    }
                    return !1
                },
                dumpRng: function (e) {
                    return "startContainer: " + e.startContainer.nodeName + ", startOffset: " + e.startOffset + ", endContainer: " + e.endContainer.nodeName + ", endOffset: " + e.endOffset
                }
            }, W = (n = g, o = function () {
                return $
            }, i = (r = u).keep_values, e = {
                set: function (e, t, n) {
                    r.url_converter && (t = r.url_converter.call(r.url_converter_scope || o(), t, n, e[0])), e.attr("data-mce-" + n, t).attr(n, t)
                }, get: function (e, t) {
                    return e.attr("data-mce-" + t) || e.attr(t)
                }
            }, t = {
                style: {
                    set: function (e, t) {
                        null === t || "object" != typeof t ? (i && e.attr("data-mce-style", t), null !== t && "string" == typeof t ? (e.removeAttr("style"), e.css(n.parse(t))) : e.attr("style", t)) : e.css(t)
                    }, get: function (e) {
                        var t = e.attr("data-mce-style") || e.attr("style");
                        return t = n.serialize(n.parse(t), e[0].nodeName)
                    }
                }
            }, i && (t.href = t.src = e), t);
        return $
    };
    xu.DOM = xu(document), xu.nodeIndex = wu;
    var Su = xu.DOM, Nu = _t.each, Eu = _t.grep, ku = (_u.prototype._setReferrerPolicy = function (e) {
        this.settings.referrerPolicy = e
    }, _u.prototype.loadScript = function (e, t, n) {
        var r = Su, o = function () {
            r.remove(i), a && (a.onerror = a.onload = a = null)
        }, i = r.uniqueId(), a = document.createElement("script");
        a.id = i, a.type = "text/javascript", a.src = _t._addCacheSuffix(e), this.settings.referrerPolicy && r.setAttrib(a, "referrerpolicy", this.settings.referrerPolicy), a.onload = function () {
            o(), t()
        }, a.onerror = function () {
            o(), D(n) ? n() : "undefined" != typeof console && console.log && console.log("Failed to load script: " + e)
        }, (document.getElementsByTagName("head")[0] || document.body).appendChild(a)
    }, _u.prototype.isDone = function (e) {
        return 2 === this.states[e]
    }, _u.prototype.markDone = function (e) {
        this.states[e] = 2
    }, _u.prototype.add = function (e, t, n, r) {
        var o = this.states[e];
        this.queue.push(e), o === undefined && (this.states[e] = 0), t && (this.scriptLoadedCallbacks[e] || (this.scriptLoadedCallbacks[e] = []), this.scriptLoadedCallbacks[e].push({
            success: t,
            failure: r,
            scope: n || this
        }))
    }, _u.prototype.load = function (e, t, n, r) {
        return this.add(e, t, n, r)
    }, _u.prototype.remove = function (e) {
        delete this.states[e], delete this.scriptLoadedCallbacks[e]
    }, _u.prototype.loadQueue = function (e, t, n) {
        this.loadScripts(this.queue, e, t, n)
    }, _u.prototype.loadScripts = function (n, e, t, r) {
        var o = this, i = [], a = function (t, e) {
            Nu(o.scriptLoadedCallbacks[e], function (e) {
                D(e[t]) && e[t].call(e.scope)
            }), o.scriptLoadedCallbacks[e] = undefined
        };
        o.queueLoadedCallbacks.push({success: e, failure: r, scope: t || this});
        var u = function () {
            var e, t = Eu(n);
            n.length = 0, Nu(t, function (e) {
                2 !== o.states[e] ? 3 !== o.states[e] ? 1 !== o.states[e] && (o.states[e] = 1, o.loading++, o.loadScript(e, function () {
                    o.states[e] = 2, o.loading--, a("success", e), u()
                }, function () {
                    o.states[e] = 3, o.loading--, i.push(e), a("failure", e), u()
                })) : a("failure", e) : a("success", e)
            }), o.loading || (e = o.queueLoadedCallbacks.slice(0), o.queueLoadedCallbacks.length = 0, Nu(e, function (e) {
                0 === i.length ? D(e.success) && e.success.call(e.scope) : D(e.failure) && e.failure.call(e.scope, i)
            }))
        };
        u()
    }, _u.ScriptLoader = new _u, _u);

    function _u(e) {
        void 0 === e && (e = {}), this.states = {}, this.queue = [], this.scriptLoadedCallbacks = {}, this.queueLoadedCallbacks = [], this.loading = 0, this.settings = e
    }

    var Au = function (e) {
        var t = e;
        return {
            get: function () {
                return t
            }, set: function (e) {
                t = e
            }
        }
    }, Ru = {}, Tu = Au("en"), Du = function () {
        return he(Ru, Tu.get())
    }, Ou = {
        getData: function () {
            return ce(Ru, function (e) {
                return _e({}, e)
            })
        }, setCode: function (e) {
            e && Tu.set(e)
        }, getCode: function () {
            return Tu.get()
        }, add: function (e, t) {
            var n = Ru[e];
            n || (Ru[e] = n = {}), se(t, function (e, t) {
                n[t.toLowerCase()] = e
            })
        }, translate: function (e) {
            var t, n, r = Du().getOr({}), o = function (e) {
                return D(e) ? Object.prototype.toString.call(e) : i(e) ? "" : "" + e
            }, i = function (e) {
                return "" === e || null === e || e === undefined
            }, a = function (e) {
                var t = o(e);
                return he(r, t.toLowerCase()).map(o).getOr(t)
            }, u = function (e) {
                return e.replace(/{context:\w+}$/, "")
            };
            if (i(e)) return "";
            if (k(t = e) && ve(t, "raw")) return o(e.raw);
            if (_(n = e) && 1 < n.length) {
                var s = e.slice(1);
                return u(a(e[0]).replace(/\{([0-9]+)\}/g, function (e, t) {
                    return ve(s, t) ? o(s[t]) : e
                }))
            }
            return u(a(e))
        }, isRtl: function () {
            return Du().bind(function (e) {
                return he(e, "_dir")
            }).exists(function (e) {
                return "rtl" === e
            })
        }, hasCode: function (e) {
            return ve(Ru, e)
        }
    }, Bu = function () {
        var o = [], r = {}, s = {}, i = [], c = function (t, n) {
            var e = H(i, function (e) {
                return e.name === t && e.state === n
            });
            Y(e, function (e) {
                return e.callback()
            })
        }, l = function (e) {
            var t;
            return s[e] && (t = s[e].dependencies), t || []
        }, f = function (e, t) {
            return "object" == typeof t ? t : "string" == typeof e ? {
                prefix: "",
                resource: t,
                suffix: ""
            } : {prefix: e.prefix, resource: t, suffix: e.suffix}
        }, d = function (o, i, a, u, e) {
            var t, n;
            r[o] || (0 !== (t = "string" == typeof i ? i : i.prefix + i.resource + i.suffix).indexOf("/") && -1 === t.indexOf("://") && (t = Bu.baseURL + "/" + t), r[o] = t.substring(0, t.lastIndexOf("/")), n = function () {
                var n, e, t, r;
                c(o, "loaded"), n = i, e = a, t = u, r = l(o), Y(r, function (e) {
                    var t = f(n, e);
                    d(t.resource, t, undefined, undefined)
                }), e && (t ? e.call(t) : e.call(ku))
            }, s[o] ? n() : ku.ScriptLoader.add(t, n, u, e))
        }, e = function (e, t, n) {
            void 0 === n && (n = "added"), ve(s, e) && "added" === n || ve(r, e) && "loaded" === n ? t() : i.push({
                name: e,
                state: n,
                callback: t
            })
        };
        return {
            items: o, urls: r, lookup: s, _listeners: i, get: function (e) {
                return s[e] ? s[e].instance : undefined
            }, dependencies: l, requireLangPack: function (t, n) {
                !1 !== Bu.languageLoad && e(t, function () {
                    var e = Ou.getCode();
                    !e || n && -1 === ("," + (n || "") + ",").indexOf("," + e + ",") || ku.ScriptLoader.add(r[t] + "/langs/" + e + ".js")
                }, "loaded")
            }, add: function (e, t, n) {
                var r = t;
                return o.push(r), s[e] = {instance: r, dependencies: n}, c(e, "added"), r
            }, remove: function (e) {
                delete r[e], delete s[e]
            }, createUrl: f, addComponents: function (e, t) {
                var n = r[e];
                Y(t, function (e) {
                    ku.ScriptLoader.add(n + "/" + e)
                })
            }, load: d, waitFor: e
        }
    };
    Bu.languageLoad = !0, Bu.baseURL = "", Bu.PluginManager = Bu(), Bu.ThemeManager = Bu();
    var Pu = function (n, r) {
            var o = null;
            return {
                cancel: function () {
                    null !== o && (clearTimeout(o), o = null)
                }, throttle: function () {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    null === o && (o = setTimeout(function () {
                        n.apply(null, e), o = null
                    }, r))
                }
            }
        }, Lu = function (n, r) {
            var o = null;
            return {
                cancel: function () {
                    null !== o && (clearTimeout(o), o = null)
                }, throttle: function () {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    null !== o && clearTimeout(o), o = setTimeout(function () {
                        n.apply(null, e), o = null
                    }, r)
                }
            }
        }, Iu = function (e, t) {
            var n = Jn(e, t);
            return n === undefined || "" === n ? [] : n.split(" ")
        }, Mu = function (e) {
            return e.dom.classList !== undefined
        }, Fu = function (e, t) {
            return o = t, i = Iu(n = e, r = "class").concat([o]), Yn(n, r, i.join(" ")), !0;
            var n, r, o, i
        }, Uu = function (e, t) {
            return o = t, 0 < (i = H(Iu(n = e, r = "class"), function (e) {
                return e !== o
            })).length ? Yn(n, r, i.join(" ")) : Zn(n, r), !1;
            var n, r, o, i
        }, zu = function (e, t) {
            Mu(e) ? e.dom.classList.add(t) : Fu(e, t)
        }, ju = function (e) {
            0 === (Mu(e) ? e.dom.classList : Iu(e, "class")).length && Zn(e, "class")
        }, Hu = function (e, t) {
            return Mu(e) && e.dom.classList.contains(t)
        }, Vu = function (e, t) {
            var n = [];
            return Y(Jt(e), function (e) {
                t(e) && (n = n.concat([e])), n = n.concat(Vu(e, t))
            }), n
        }, qu = function (e, t) {
            return n = t, o = (r = e) === undefined ? document : r.dom, Ot(o) ? [] : z(o.querySelectorAll(n), Rt.fromDom);
            var n, r, o
        }, $u = S("mce-annotation"), Wu = S("data-mce-annotation"), Ku = S("data-mce-annotation-uid"),
        Xu = function (r, e) {
            var t = r.selection.getRng(), n = Rt.fromDom(t.startContainer), o = Rt.fromDom(r.getBody()),
                i = e.fold(function () {
                    return "." + $u()
                }, function (e) {
                    return "[" + Wu() + '="' + e + '"]'
                }), a = Qt(n, t.startOffset).getOr(n), u = Lr(a, i, function (e) {
                    return Bt(e, o)
                }), s = function (e, t) {
                    return n = t, (r = e.dom) && r.hasAttribute && r.hasAttribute(n) ? U.some(Jn(e, t)) : U.none();
                    var n, r
                };
            return u.bind(function (e) {
                return s(e, "" + Ku()).bind(function (n) {
                    return s(e, "" + Wu()).map(function (e) {
                        var t = Yu(r, n);
                        return {uid: n, name: e, elements: t}
                    })
                })
            })
        }, Yu = function (e, t) {
            var n = Rt.fromDom(e.getBody());
            return qu(n, "[" + Ku() + '="' + t + '"]')
        }, Gu = function (i, e) {
            var a = Au({}), c = function (e, t) {
                u(e, function (e) {
                    return t(e), e
                })
            }, u = function (e, t) {
                var n = a.get(), r = t(n.hasOwnProperty(e) ? n[e] : {listeners: [], previous: Au(U.none())});
                n[e] = r, a.set(n)
            }, t = Lu(function () {
                var e, t, n, r = a.get(), o = (e = ae(r), (n = B.call(e, 0)).sort(t), n);
                Y(o, function (e) {
                    u(e, function (u) {
                        var s = u.previous.get();
                        return Xu(i, U.some(e)).fold(function () {
                            var t;
                            s.isSome() && (c(t = e, function (e) {
                                Y(e.listeners, function (e) {
                                    return e(!1, t)
                                })
                            }), u.previous.set(U.none()))
                        }, function (e) {
                            var t, n, r, o = e.uid, i = e.name, a = e.elements;
                            s.is(o) || (n = o, r = a, c(t = i, function (e) {
                                Y(e.listeners, function (e) {
                                    return e(!0, t, {
                                        uid: n, nodes: z(r, function (e) {
                                            return e.dom
                                        })
                                    })
                                })
                            }), u.previous.set(U.some(o)))
                        }), {previous: u.previous, listeners: u.listeners}
                    })
                })
            }, 30);
            i.on("remove", function () {
                t.cancel()
            }), i.on("NodeChange", function () {
                t.throttle()
            });
            return {
                addListener: function (e, t) {
                    u(e, function (e) {
                        return {previous: e.previous, listeners: e.listeners.concat([t])}
                    })
                }
            }
        }, Ju = function (e, n) {
            e.on("init", function () {
                e.serializer.addNodeFilter("span", function (e) {
                    Y(e, function (t) {
                        var e;
                        e = t, U.from(e.attr(Wu())).bind(n.lookup).each(function (e) {
                            !1 === e.persistent && t.unwrap()
                        })
                    })
                })
            })
        }, Qu = 0, Zu = function (e) {
            var t = (new Date).getTime();
            return e + "_" + Math.floor(1e9 * Math.random()) + ++Qu + String(t)
        }, es = function (e, t) {
            var n, r, o = Vt(e).dom, i = Rt.fromDom(o.createDocumentFragment()),
                a = (n = t, (r = (o || document).createElement("div")).innerHTML = n, Jt(Rt.fromDom(r)));
            mn(i, a), pn(e), dn(e, i)
        }, ts = function (e, t) {
            return Rt.fromDom(e.dom.cloneNode(t))
        }, ns = function (e) {
            return ts(e, !1)
        }, rs = function (e) {
            return ts(e, !0)
        }, os = function (e, t, n) {
            void 0 === n && (n = b);
            var r = new Yr(e, t), o = function (e) {
                for (var t; (t = r[e]()) && !Mn(t) && !n(t);) ;
                return U.from(t).filter(Mn)
            };
            return {
                current: function () {
                    return U.from(r.current()).filter(Mn)
                }, next: function () {
                    return o("next")
                }, prev: function () {
                    return o("prev")
                }, prev2: function () {
                    return o("prev2")
                }
            }
        }, is = function (t, e) {
            var i = e || function (e) {
                return t.isBlock(e) || jn(e) || qn(e)
            }, a = function (e, t, n, r) {
                if (Mn(e)) {
                    var o = r(e, t, e.data);
                    if (-1 !== o) return U.some({container: e, offset: o})
                }
                return n().bind(function (e) {
                    return a(e.container, e.offset, n, r)
                })
            };
            return {
                backwards: function (e, t, n, r) {
                    var o = os(e, r, i);
                    return a(e, t, function () {
                        return o.prev().map(function (e) {
                            return {container: e, offset: e.length}
                        })
                    }, n).getOrNull()
                }, forwards: function (e, t, n, r) {
                    var o = os(e, r, i);
                    return a(e, t, function () {
                        return o.next().map(function (e) {
                            return {container: e, offset: 0}
                        })
                    }, n).getOrNull()
                }
            }
        }, as = function (e, t, n) {
            return e.isSome() && t.isSome() ? U.some(n(e.getOrDie(), t.getOrDie())) : U.none()
        }, us = Math.round, ss = function (e) {
            return e ? {
                left: us(e.left),
                top: us(e.top),
                bottom: us(e.bottom),
                right: us(e.right),
                width: us(e.width),
                height: us(e.height)
            } : {left: 0, top: 0, bottom: 0, right: 0, width: 0, height: 0}
        }, cs = function (e, t) {
            return e = ss(e), t || (e.left = e.left + e.width), e.right = e.left, e.width = 0, e
        }, ls = function (e, t, n) {
            return 0 <= e && e <= Math.min(t.height, n.height) / 2
        }, fs = function (e, t) {
            var n = Math.min(t.height / 2, e.height / 2);
            return e.bottom - n < t.top || !(e.top > t.bottom) && ls(t.top - e.bottom, e, t)
        }, ds = function (e, t) {
            return e.top > t.bottom || !(e.bottom < t.top) && ls(t.bottom - e.top, e, t)
        }, ms = function (e, t, n) {
            return t >= e.left && t <= e.right && n >= e.top && n <= e.bottom
        }, ps = function (e) {
            var t = e.startContainer, n = e.startOffset;
            return t.hasChildNodes() && e.endOffset === n + 1 ? t.childNodes[n] : null
        }, gs = function (e, t) {
            return 1 === e.nodeType && e.hasChildNodes() && (t >= e.childNodes.length && (t = e.childNodes.length - 1), e = e.childNodes[t]), e
        },
        hs = new RegExp("[\u0300-\u036f\u0483-\u0487\u0488-\u0489\u0591-\u05bd\u05bf\u05c1-\u05c2\u05c4-\u05c5\u05c7\u0610-\u061a\u064b-\u065f\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7-\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u08e3-\u0902\u093a\u093c\u0941-\u0948\u094d\u0951-\u0957\u0962-\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2-\u09e3\u0a01-\u0a02\u0a3c\u0a41-\u0a42\u0a47-\u0a48\u0a4b-\u0a4d\u0a51\u0a70-\u0a71\u0a75\u0a81-\u0a82\u0abc\u0ac1-\u0ac5\u0ac7-\u0ac8\u0acd\u0ae2-\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62-\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c00\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55-\u0c56\u0c62-\u0c63\u0c81\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc-\u0ccd\u0cd5-\u0cd6\u0ce2-\u0ce3\u0d01\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62-\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb-\u0ebc\u0ec8-\u0ecd\u0f18-\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86-\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039-\u103a\u103d-\u103e\u1058-\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085-\u1086\u108d\u109d\u135d-\u135f\u1712-\u1714\u1732-\u1734\u1752-\u1753\u1772-\u1773\u17b4-\u17b5\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927-\u1928\u1932\u1939-\u193b\u1a17-\u1a18\u1a1b\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1ab0-\u1abd\u1abe\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80-\u1b81\u1ba2-\u1ba5\u1ba8-\u1ba9\u1bab-\u1bad\u1be6\u1be8-\u1be9\u1bed\u1bef-\u1bf1\u1c2c-\u1c33\u1c36-\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1cf4\u1cf8-\u1cf9\u1dc0-\u1df5\u1dfc-\u1dff\u200c-\u200d\u20d0-\u20dc\u20dd-\u20e0\u20e1\u20e2-\u20e4\u20e5-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302d\u302e-\u302f\u3099-\u309a\ua66f\ua670-\ua672\ua674-\ua67d\ua69e-\ua69f\ua6f0-\ua6f1\ua802\ua806\ua80b\ua825-\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\ua9e5\uaa29-\uaa2e\uaa31-\uaa32\uaa35-\uaa36\uaa43\uaa4c\uaa7c\uaab0\uaab2-\uaab4\uaab7-\uaab8\uaabe-\uaabf\uaac1\uaaec-\uaaed\uaaf6\uabe5\uabe8\uabed\ufb1e\ufe00-\ufe0f\ufe20-\ufe2f\uff9e-\uff9f]"),
        vs = function (e) {
            return "string" == typeof e && 768 <= e.charCodeAt(0) && hs.test(e)
        }, ys = Rn, bs = Io, Cs = Dn("display", "block table"), ws = Dn("float", "left right"), xs = function () {
            for (var n = [], e = 0; e < arguments.length; e++) n[e] = arguments[e];
            return function (e) {
                for (var t = 0; t < n.length; t++) if (!n[t](e)) return !1;
                return !0
            }
        }(ys, bs, d(ws)), Ss = d(Dn("white-space", "pre pre-line pre-wrap")), Ns = Mn, Es = jn, ks = xu.nodeIndex, _s = gs,
        As = function (e) {
            return "createRange" in e ? e.createRange() : xu.DOM.createRng()
        }, Rs = function (e) {
            return e && /[\r\n\t ]/.test(e)
        }, Ts = function (e) {
            return !!e.setStart && !!e.setEnd
        }, Ds = function (e) {
            var t, n = e.startContainer, r = e.startOffset;
            return !!(Rs(e.toString()) && Ss(n.parentNode) && Mn(n) && (t = n.data, Rs(t[r - 1]) || Rs(t[r + 1])))
        }, Os = function (e) {
            return 0 === e.left && 0 === e.right && 0 === e.top && 0 === e.bottom
        }, Bs = function (e) {
            var t = e.getClientRects(), n = 0 < t.length ? ss(t[0]) : ss(e.getBoundingClientRect());
            return !Ts(e) && Es(e) && Os(n) ? function (e) {
                var t = e.ownerDocument, n = As(t), r = t.createTextNode(fo), o = e.parentNode;
                o.insertBefore(r, e), n.setStart(r, 0), n.setEnd(r, 1);
                var i = ss(n.getBoundingClientRect());
                return o.removeChild(r), i
            }(e) : Os(n) && Ts(e) ? function (e) {
                var t = e.startContainer, n = e.endContainer, r = e.startOffset, o = e.endOffset;
                if (t === n && Mn(n) && 0 === r && 1 === o) {
                    var i = e.cloneRange();
                    return i.setEndAfter(n), Bs(i)
                }
                return null
            }(e) : n
        }, Ps = function (e, t) {
            var n = cs(e, t);
            return n.width = 1, n.right = n.left + 1, n
        }, Ls = function (e) {
            var t, n, r = [], o = function (e) {
                var t, n;
                0 !== e.height && (0 < r.length && (t = e, n = r[r.length - 1], t.left === n.left && t.top === n.top && t.bottom === n.bottom && t.right === n.right) || r.push(e))
            }, i = function (e, t) {
                var n = As(e.ownerDocument);
                if (t < e.data.length) {
                    if (vs(e.data[t])) return r;
                    if (vs(e.data[t - 1]) && (n.setStart(e, t), n.setEnd(e, t + 1), !Ds(n))) return o(Ps(Bs(n), !1)), r
                }
                0 < t && (n.setStart(e, t - 1), n.setEnd(e, t), Ds(n) || o(Ps(Bs(n), !1))), t < e.data.length && (n.setStart(e, t), n.setEnd(e, t + 1), Ds(n) || o(Ps(Bs(n), !0)))
            };
            if (Ns(e.container())) return i(e.container(), e.offset()), r;
            if (ys(e.container())) if (e.isAtEnd()) n = _s(e.container(), e.offset()), Ns(n) && i(n, n.data.length), xs(n) && !Es(n) && o(Ps(Bs(n), !1)); else {
                if (n = _s(e.container(), e.offset()), Ns(n) && i(n, 0), xs(n) && e.isAtEnd()) return o(Ps(Bs(n), !1)), r;
                t = _s(e.container(), e.offset() - 1), xs(t) && !Es(t) && (!Cs(t) && !Cs(n) && xs(n) || o(Ps(Bs(t), !1))), xs(n) && o(Ps(Bs(n), !0))
            }
            return r
        }, Is = function (t, n, e) {
            var r = function () {
                return e = e || Ls(Is(t, n))
            };
            return {
                container: S(t), offset: S(n), toRange: function () {
                    var e = As(t.ownerDocument);
                    return e.setStart(t, n), e.setEnd(t, n), e
                }, getClientRects: r, isVisible: function () {
                    return 0 < r().length
                }, isAtStart: function () {
                    return Ns(t), 0 === n
                }, isAtEnd: function () {
                    return Ns(t) ? n >= t.data.length : n >= t.childNodes.length
                }, isEqual: function (e) {
                    return e && t === e.container() && n === e.offset()
                }, getNode: function (e) {
                    return _s(t, e ? n - 1 : n)
                }
            }
        };
    Is.fromRangeStart = function (e) {
        return Is(e.startContainer, e.startOffset)
    }, Is.fromRangeEnd = function (e) {
        return Is(e.endContainer, e.endOffset)
    }, Is.after = function (e) {
        return Is(e.parentNode, ks(e) + 1)
    }, Is.before = function (e) {
        return Is(e.parentNode, ks(e))
    }, Is.isAbove = function (e, t) {
        return as(re(t.getClientRects()), oe(e.getClientRects()), fs).getOr(!1)
    }, Is.isBelow = function (e, t) {
        return as(oe(t.getClientRects()), re(e.getClientRects()), ds).getOr(!1)
    }, Is.isAtStart = function (e) {
        return !!e && e.isAtStart()
    }, Is.isAtEnd = function (e) {
        return !!e && e.isAtEnd()
    }, Is.isTextPosition = function (e) {
        return !!e && Mn(e.container())
    }, Is.isElementPosition = function (e) {
        return !1 === Is.isTextPosition(e)
    };
    var Ms, Fs, Us = function (e, t) {
            Mn(t) && 0 === t.data.length && e.remove(t)
        }, zs = function (e, t, n) {
            var r, o, i, a, u, s, c;
            zn(n) ? (i = e, a = t, u = n, s = U.from(u.firstChild), c = U.from(u.lastChild), a.insertNode(u), s.each(function (e) {
                return Us(i, e.previousSibling)
            }), c.each(function (e) {
                return Us(i, e.nextSibling)
            })) : (r = e, o = n, t.insertNode(o), Us(r, o.previousSibling), Us(r, o.nextSibling))
        }, js = Mn, Hs = Bn, Vs = xu.nodeIndex, qs = function (e) {
            var t = e.parentNode;
            return Hs(t) ? qs(t) : t
        }, $s = function (e) {
            return e ? Ne(e.childNodes, function (e, t) {
                return Hs(t) && "BR" !== t.nodeName ? e = e.concat($s(t)) : e.push(t), e
            }, []) : []
        }, Ws = function (t) {
            return function (e) {
                return t === e
            }
        }, Ks = function (e) {
            var t = js(e) ? "text()" : e.nodeName.toLowerCase();
            return t + "[" + function (e) {
                var r = $s(qs(e)), t = Ee(r, Ws(e), e);
                r = r.slice(0, t + 1);
                var n = Ne(r, function (e, t, n) {
                    return js(t) && js(r[n - 1]) && e++, e
                }, 0);
                return r = xe(r, Tn([e.nodeName])), (t = Ee(r, Ws(e), e)) - n
            }(e) + "]"
        }, Xs = function (e, t) {
            var n, r, o, i = [], a = t.container(), u = t.offset();
            return js(a) ? n = function (e, t) {
                for (; (e = e.previousSibling) && js(e);) t += e.data.length;
                return t
            }(a, u) : (u >= (r = a.childNodes).length ? (n = "after", u = r.length - 1) : n = "before", a = r[u]), i.push(Ks(a)), o = function (e, t, n) {
                var r = [];
                for (t = t.parentNode; t !== e && (!n || !n(t)); t = t.parentNode) r.push(t);
                return r
            }(e, a), o = xe(o, d(Bn)), (i = i.concat(we(o, Ks))).reverse().join("/") + "," + n
        }, Ys = function (e, t) {
            if (!t) return null;
            var n = t.split(","), r = n[0].split("/"), o = 1 < n.length ? n[1] : "before", i = Ne(r, function (e, t) {
                var n, r, o, i, a = /([\w\-\(\)]+)\[([0-9]+)\]/.exec(t);
                return a ? ("text()" === a[1] && (a[1] = "#text"), n = e, r = a[1], o = parseInt(a[2], 10), i = $s(n), i = xe(i, function (e, t) {
                    return !js(e) || !js(i[t - 1])
                }), (i = xe(i, Tn([r])))[o]) : null
            }, e);
            return i ? js(i) ? function (e, t) {
                for (var n, r = e, o = 0; js(r);) {
                    if (n = r.data.length, o <= t && t <= o + n) {
                        e = r, t -= o;
                        break
                    }
                    if (!js(r.nextSibling)) {
                        e = r, t = n;
                        break
                    }
                    o += n, r = r.nextSibling
                }
                return js(e) && t > e.data.length && (t = e.data.length), Is(e, t)
            }(i, parseInt(o, 10)) : (o = "after" === o ? Vs(i) + 1 : Vs(i), Is(i.parentNode, o)) : null
        }, Gs = qn, Js = function (e, t, n, r, o) {
            var i, a = r[o ? "startContainer" : "endContainer"], u = r[o ? "startOffset" : "endOffset"], s = [], c = 0,
                l = e.getRoot();
            for (Mn(a) ? s.push(n ? function (e, t, n) {
                for (var r = e(t.data.slice(0, n)).length, o = t.previousSibling; o && Mn(o); o = o.previousSibling) r += e(o.data).length;
                return r
            }(t, a, u) : u) : (u >= (i = a.childNodes).length && i.length && (c = 1, u = Math.max(0, i.length - 1)), s.push(e.nodeIndex(i[u], n) + c)); a && a !== l; a = a.parentNode) s.push(e.nodeIndex(a, n));
            return s
        }, Qs = function (e, t, n) {
            var r = 0;
            return _t.each(e.select(t), function (e) {
                if ("all" !== e.getAttribute("data-mce-bogus")) return e !== n && void r++
            }), r
        }, Zs = function (e, t) {
            var n, r = t ? "start" : "end", o = e[r + "Container"], i = e[r + "Offset"];
            Rn(o) && "TR" === o.nodeName && (o = (n = o.childNodes)[Math.min(t ? i : i - 1, n.length - 1)]) && (i = t ? 0 : o.childNodes.length, e["set" + (t ? "Start" : "End")](o, i))
        }, ec = function (e) {
            return Zs(e, !0), Zs(e, !1), e
        }, tc = function (e, t) {
            var n;
            if (Rn(e) && (e = gs(e, t), Gs(e))) return e;
            if (Co(e)) {
                if (Mn(e) && yo(e) && (e = e.parentNode), n = e.previousSibling, Gs(n)) return n;
                if (n = e.nextSibling, Gs(n)) return n
            }
        }, nc = function (e, t, n) {
            var r = n.getNode(), o = r ? r.nodeName : null, i = n.getRng();
            if (Gs(r) || "IMG" === o) return {name: o, index: Qs(n.dom, o, r)};
            var a, u, s, c, l, f, d, m = tc((a = i).startContainer, a.startOffset) || tc(a.endContainer, a.endOffset);
            return m ? {
                name: o = m.tagName,
                index: Qs(n.dom, o, m)
            } : (u = e, c = t, l = i, f = (s = n).dom, (d = {}).start = Js(f, u, c, l, !0), s.isCollapsed() || (d.end = Js(f, u, c, l, !1)), d)
        }, rc = function (e, t, n) {
            var r = {"data-mce-type": "bookmark", id: t, style: "overflow:hidden;line-height:0px"};
            return n ? e.create("span", r, "&#xFEFF;") : e.create("span", r)
        }, oc = function (e, t) {
            var n = e.dom, r = e.getRng(), o = n.uniqueId(), i = e.isCollapsed(), a = e.getNode(), u = a.nodeName;
            if ("IMG" === u) return {name: u, index: Qs(n, u, a)};
            var s, c = ec(r.cloneRange());
            i || (c.collapse(!1), s = rc(n, o + "_end", t), zs(n, c, s)), (r = ec(r)).collapse(!0);
            var l = rc(n, o + "_start", t);
            return zs(n, r, l), e.moveToBookmark({id: o, keep: !0}), {id: o}
        }, ic = function (e, t, n) {
            return 2 === t ? nc(go, n, e) : 3 === t ? (o = (r = e).getRng(), {
                start: Xs(r.dom.getRoot(), Is.fromRangeStart(o)),
                end: Xs(r.dom.getRoot(), Is.fromRangeEnd(o))
            }) : t ? {rng: e.getRng()} : oc(e, !1);
            var r, o
        }, ac = N(nc, o, !0), uc = xu.DOM, sc = function (e, t, n) {
            var r = e.getParam(t, n);
            if (-1 === r.indexOf("=")) return r;
            var o = e.getParam(t, "", "hash");
            return o.hasOwnProperty(e.id) ? o[e.id] : n
        }, cc = function (e) {
            return e.getParam("content_security_policy", "")
        }, lc = function (e) {
            if (e.getParam("force_p_newlines", !1)) return "p";
            var t = e.getParam("forced_root_block", "p");
            return !1 === t ? "" : !0 === t ? "p" : t
        }, fc = function (e) {
            return e.getParam("forced_root_block_attrs", {})
        }, dc = function (e) {
            return e.getParam("automatic_uploads", !0, "boolean")
        }, mc = function (e) {
            return e.getParam("icons", "", "string")
        }, pc = function (e) {
            return e.getParam("referrer_policy", "", "string")
        }, gc = function (e) {
            return e.getParam("language", "en", "string")
        }, hc = function (e) {
            return e.getParam("indent_use_margin", !1)
        }, vc = function (e) {
            var t = e.getParam("font_css", []);
            return _(t) ? t : z(t.split(","), We)
        }, yc = function (e) {
            var t = e.getParam("object_resizing");
            return !1 !== t && !xt.iOS && (K(t) ? t : "table,img,figure.image,div,video,iframe")
        }, bc = function (e) {
            return e.getParam("event_root")
        }, Cc = function (e) {
            return e.getParam("theme")
        }, wc = function (e) {
            return !1 !== e.getParam("inline_boundaries")
        }, xc = function (e) {
            return e.getParam("plugins", "", "string")
        }, Sc = Rn, Nc = Mn, Ec = function (e) {
            var t = e.parentNode;
            t && t.removeChild(e)
        }, kc = function (e) {
            var t = go(e);
            return {count: e.length - t.length, text: t}
        }, _c = function (e) {
            for (var t; -1 !== (t = e.data.lastIndexOf(mo));) e.deleteData(t, 1)
        }, Ac = function (e, t) {
            return Oc(e), t
        }, Rc = function (e, t) {
            var n, r, o = t.container(),
                i = (n = ie(o.childNodes), (-1 === (r = I(n, e)) ? U.none() : U.some(r)).map(function (e) {
                    return e < t.offset() ? Is(o, t.offset() - 1) : t
                }).getOr(t));
            return Oc(e), i
        }, Tc = function (e, t) {
            return Nc(e) && t.container() === e ? (r = t, o = kc((n = e).data.substr(0, r.offset())), i = kc(n.data.substr(r.offset())), 0 < (o.text + i.text).length ? (_c(n), Is(n, r.offset() - o.count)) : r) : Ac(e, t);
            var n, r, o, i
        }, Dc = function (e, t) {
            return Is.isTextPosition(t) ? Tc(e, t) : (n = e, ((r = t).container() === n.parentNode ? Rc : Ac)(n, r));
            var n, r
        }, Oc = function (e) {
            Sc(e) && Co(e) && (wo(e) ? e.removeAttribute("data-mce-caret") : Ec(e)), Nc(e) && (_c(e), 0 === e.data.length && Ec(e))
        }, Bc = mt().browser, Pc = qn, Lc = Wn, Ic = $n, Mc = function (e, t, n) {
            var r, o, i, a, u = cs(t.getBoundingClientRect(), n),
                s = "BODY" === e.tagName ? (r = e.ownerDocument.documentElement, o = e.scrollLeft || r.scrollLeft, e.scrollTop || r.scrollTop) : (a = e.getBoundingClientRect(), o = e.scrollLeft - a.left, e.scrollTop - a.top);
            return u.left += o, u.right += o, u.top += s, u.bottom += s, u.width = 1, 0 < (i = t.offsetWidth - t.clientWidth) && (n && (i *= -1), u.left += i, u.right += i), u
        }, Fc = function (e, i, a, t) {
            var n, u, s = Au(U.none()), r = lc(e), c = 0 < r.length ? r : "p", l = function () {
                !function (e) {
                    for (var t = qu(Rt.fromDom(e), "*[contentEditable=false],video,audio,embed,object"), n = 0; n < t.length; n++) {
                        var r, o = t[n].dom, i = o.previousSibling;
                        ko(i) && (1 === (r = i.data).length ? i.parentNode.removeChild(i) : i.deleteData(r.length - 1, 1)), i = o.nextSibling, Eo(i) && (1 === (r = i.data).length ? i.parentNode.removeChild(i) : i.deleteData(0, 1))
                    }
                }(i), u && (Oc(u), u = null), s.get().each(function (e) {
                    gu(e.caret).remove(), s.set(U.none())
                }), n && (Wr.clearInterval(n), n = null)
            }, f = function () {
                n = Wr.setInterval(function () {
                    t() ? gu("div.mce-visual-caret", i).toggleClass("mce-visual-caret-hidden") : gu("div.mce-visual-caret", i).addClass("mce-visual-caret-hidden")
                }, 500)
            };
            return {
                show: function (t, e) {
                    var n, r;
                    if (l(), Ic(e)) return null;
                    if (!a(e)) return u = function (e, t) {
                        var n, r = e.ownerDocument.createTextNode(mo), o = e.parentNode;
                        if (t) {
                            if (n = e.previousSibling, vo(n)) {
                                if (Co(n)) return n;
                                if (ko(n)) return n.splitText(n.data.length - 1)
                            }
                            o.insertBefore(r, e)
                        } else {
                            if (n = e.nextSibling, vo(n)) {
                                if (Co(n)) return n;
                                if (Eo(n)) return n.splitText(1), n
                            }
                            e.nextSibling ? o.insertBefore(r, e.nextSibling) : o.appendChild(r)
                        }
                        return r
                    }(e, t), r = e.ownerDocument.createRange(), zc(u.nextSibling) ? (r.setStart(u, 0), r.setEnd(u, 0)) : (r.setStart(u, 1), r.setEnd(u, 1)), r;
                    u = No(c, e, t), n = Mc(i, e, t), gu(u).css("top", n.top);
                    var o = gu('<div class="mce-visual-caret" data-mce-bogus="all"></div>').css(n).appendTo(i)[0];
                    return s.set(U.some({caret: o, element: e, before: t})), s.get().each(function (e) {
                        t && gu(e.caret).addClass("mce-visual-caret-before")
                    }), f(), (r = e.ownerDocument.createRange()).setStart(u, 0), r.setEnd(u, 0), r
                }, hide: l, getCss: function () {
                    return ".mce-visual-caret {position: absolute;background-color: black;background-color: currentcolor;}.mce-visual-caret-hidden {display: none;}*[data-mce-caret] {position: absolute;left: -1000px;right: auto;top: 0;margin: 0;padding: 0;}"
                }, reposition: function () {
                    s.get().each(function (e) {
                        var t = Mc(i, e.element, e.before);
                        gu(e.caret).css(_e({}, t))
                    })
                }, destroy: function () {
                    return Wr.clearInterval(n)
                }
            }
        }, Uc = function () {
            return Bc.isIE() || Bc.isEdge() || Bc.isFirefox()
        }, zc = function (e) {
            return Pc(e) || Lc(e)
        }, jc = function (e) {
            return zc(e) || Pn(e) && Uc()
        }, Hc = qn, Vc = Wn, qc = Dn("display", "block table table-cell table-caption list-item"), $c = Co, Wc = yo,
        Kc = Rn, Xc = Io, Yc = function (e, t) {
            for (var n; n = e(t);) if (!Wc(n)) return n;
            return null
        }, Gc = function (e, t, n, r, o) {
            var i = new Yr(e, r), a = Hc(e) || Wc(e);
            if (t < 0) {
                if (a && n(e = Yc(i.prev.bind(i), !0))) return e;
                for (; e = Yc(i.prev.bind(i), o);) if (n(e)) return e
            }
            if (0 < t) {
                if (a && n(e = Yc(i.next.bind(i), !0))) return e;
                for (; e = Yc(i.next.bind(i), o);) if (n(e)) return e
            }
            return null
        }, Jc = function (e, t) {
            for (; e && e !== t;) {
                if (qc(e)) return e;
                e = e.parentNode
            }
            return null
        }, Qc = function (e, t, n) {
            return Jc(e.container(), n) === Jc(t.container(), n)
        }, Zc = function (e, t) {
            if (!t) return null;
            var n = t.container(), r = t.offset();
            return Kc(n) ? n.childNodes[r + e] : null
        }, el = function (e, t) {
            var n = t.ownerDocument.createRange();
            return e ? (n.setStartBefore(t), n.setEndBefore(t)) : (n.setStartAfter(t), n.setEndAfter(t)), n
        }, tl = function (e, t, n) {
            for (var r, o, i, a = e ? "previousSibling" : "nextSibling"; n && n !== t;) {
                if (r = n[a], $c(r) && (r = r[a]), Hc(r) || Vc(r)) {
                    if (i = n, Jc(r, o = t) === Jc(i, o)) return r;
                    break
                }
                if (Xc(r)) break;
                n = n.parentNode
            }
            return null
        }, nl = N(el, !0), rl = N(el, !1), ol = function (e, t, n) {
            var r, o, i = N(tl, !0, t), a = N(tl, !1, t), u = n.startContainer, s = n.startOffset;
            if (yo(u)) {
                if (Kc(u) || (u = u.parentNode), "before" === (o = u.getAttribute("data-mce-caret")) && (r = u.nextSibling, jc(r))) return nl(r);
                if ("after" === o && (r = u.previousSibling, jc(r))) return rl(r)
            }
            if (!n.collapsed) return n;
            if (Mn(u)) {
                if ($c(u)) {
                    if (1 === e) {
                        if (r = a(u)) return nl(r);
                        if (r = i(u)) return rl(r)
                    }
                    if (-1 === e) {
                        if (r = i(u)) return rl(r);
                        if (r = a(u)) return nl(r)
                    }
                    return n
                }
                if (ko(u) && s >= u.data.length - 1) return 1 === e && (r = a(u)) ? nl(r) : n;
                if (Eo(u) && s <= 1) return -1 === e && (r = i(u)) ? rl(r) : n;
                if (s === u.data.length) return (r = a(u)) ? nl(r) : n;
                if (0 === s) return (r = i(u)) ? rl(r) : n
            }
            return n
        }, il = function (e, t) {
            return U.from(Zc(e ? 0 : -1, t)).filter(Hc)
        }, al = function (e, t, n) {
            var r = ol(e, t, n);
            return -1 === e ? Is.fromRangeStart(r) : Is.fromRangeEnd(r)
        }, ul = function (e) {
            return U.from(e.getNode()).map(Rt.fromDom)
        }, sl = function (e, t) {
            for (; t = e(t);) if (t.isVisible()) return t;
            return t
        }, cl = function (e, t) {
            var n = Qc(e, t);
            return !(n || !jn(e.getNode())) || n
        };
    (Fs = Ms = Ms || {})[Fs.Backwards = -1] = "Backwards", Fs[Fs.Forwards = 1] = "Forwards";
    var ll, fl, dl, ml, pl = qn, gl = Mn, hl = Rn, vl = jn, yl = Io, bl = function (e) {
        return Bo(e) || !!Mo(t = e) && !0 !== $(ie(t.getElementsByTagName("*")), function (e, t) {
            return e || Ao(t)
        }, !1);
        var t
    }, Cl = Fo, wl = function (e, t) {
        return e.hasChildNodes() && t < e.childNodes.length ? e.childNodes[t] : null
    }, xl = function (e, t) {
        if (0 < e) {
            if (yl(t.previousSibling) && !gl(t.previousSibling)) return Is.before(t);
            if (gl(t)) return Is(t, 0)
        }
        if (e < 0) {
            if (yl(t.nextSibling) && !gl(t.nextSibling)) return Is.after(t);
            if (gl(t)) return Is(t, t.data.length)
        }
        return !(e < 0) || vl(t) ? Is.before(t) : Is.after(t)
    }, Sl = function (e, t, n) {
        var r, o, i, a;
        if (!hl(n) || !t) return null;
        if (t.isEqual(Is.after(n)) && n.lastChild) {
            if (a = Is.after(n.lastChild), e < 0 && yl(n.lastChild) && hl(n.lastChild)) return vl(n.lastChild) ? Is.before(n.lastChild) : a
        } else a = t;
        var u, s, c, l = a.container(), f = a.offset();
        if (gl(l)) {
            if (e < 0 && 0 < f) return Is(l, --f);
            if (0 < e && f < l.length) return Is(l, ++f);
            r = l
        } else {
            if (e < 0 && 0 < f && (o = wl(l, f - 1), yl(o))) return !bl(o) && (i = Gc(o, e, Cl, o)) ? gl(i) ? Is(i, i.data.length) : Is.after(i) : gl(o) ? Is(o, o.data.length) : Is.before(o);
            if (0 < e && f < l.childNodes.length && (o = wl(l, f), yl(o))) return vl(o) ? (u = n, (c = (s = o).nextSibling) && yl(c) ? gl(c) ? Is(c, 0) : Is.before(c) : Sl(Ms.Forwards, Is.after(s), u)) : !bl(o) && (i = Gc(o, e, Cl, o)) ? gl(i) ? Is(i, 0) : Is.before(i) : gl(o) ? Is(o, 0) : Is.after(o);
            r = o || a.getNode()
        }
        if ((0 < e && a.isAtEnd() || e < 0 && a.isAtStart()) && (r = Gc(r, e, w, n, !0), Cl(r, n))) return xl(e, r);
        o = Gc(r, e, Cl, n);
        var d = ke(H(function (e, t) {
            for (var n = []; e && e !== t;) n.push(e), e = e.parentNode;
            return n
        }(l, n), pl));
        return !d || o && d.contains(o) ? o ? xl(e, o) : null : a = 0 < e ? Is.after(d) : Is.before(d)
    }, Nl = function (t) {
        return {
            next: function (e) {
                return Sl(Ms.Forwards, e, t)
            }, prev: function (e) {
                return Sl(Ms.Backwards, e, t)
            }
        }
    }, El = function (e) {
        return Is.isTextPosition(e) ? 0 === e.offset() : Io(e.getNode())
    }, kl = function (e) {
        if (Is.isTextPosition(e)) {
            var t = e.container();
            return e.offset() === t.data.length
        }
        return Io(e.getNode(!0))
    }, _l = function (e, t) {
        return !Is.isTextPosition(e) && !Is.isTextPosition(t) && e.getNode() === t.getNode(!0)
    }, Al = function (e, t, n) {
        return e ? !_l(t, n) && (r = t, !(!Is.isTextPosition(r) && jn(r.getNode()))) && kl(t) && El(n) : !_l(n, t) && El(t) && kl(n);
        var r
    }, Rl = function (e, t, n) {
        var r = Nl(t);
        return U.from(e ? r.next(n) : r.prev(n))
    }, Tl = function (t, n, r) {
        return Rl(t, n, r).bind(function (e) {
            return Qc(r, e, n) && Al(t, r, e) ? Rl(t, n, e) : U.some(e)
        })
    }, Dl = function (t, n, e, r) {
        return Tl(t, n, e).bind(function (e) {
            return r(e) ? Dl(t, n, e, r) : U.some(e)
        })
    }, Ol = function (e, t) {
        var n, r, o, i, a, u = e ? t.firstChild : t.lastChild;
        return Mn(u) ? U.some(Is(u, e ? 0 : u.data.length)) : u ? Io(u) ? U.some(e ? Is.before(u) : jn(a = u) ? Is.before(a) : Is.after(a)) : (r = t, o = u, i = (n = e) ? Is.before(o) : Is.after(o), Rl(n, r, i)) : U.none()
    }, Bl = N(Rl, !0), Pl = N(Rl, !1), Ll = N(Ol, !0), Il = N(Ol, !1), Ml = "_mce_caret", Fl = function (e) {
        return Rn(e) && e.id === Ml
    }, Ul = function (e, t) {
        for (; t && t !== e;) {
            if (t.id === Ml) return t;
            t = t.parentNode
        }
        return null
    }, zl = function (e, t) {
        return Rn(t) && e.isBlock(t) && !t.innerHTML && !xt.ie && (t.innerHTML = '<br data-mce-bogus="1" />'), t
    }, jl = function (e, t, n) {
        return !(!1 !== t.hasChildNodes() || !Ul(e, t)) && (o = n, i = (r = t).ownerDocument.createTextNode(mo), r.appendChild(i), o.setStart(i, 0), o.setEnd(i, 0), !0);
        var r, o, i
    }, Hl = function (e, t, n, r) {
        var o, i, a, u, s = n[t ? "start" : "end"], c = e.getRoot();
        if (s) {
            for (a = s[0], i = c, o = s.length - 1; 1 <= o; o--) {
                if (u = i.childNodes, jl(c, i, r)) return !0;
                if (s[o] > u.length - 1) return !!jl(c, i, r) || function (e, t) {
                    return Il(e).fold(b, function (e) {
                        return t.setStart(e.container(), e.offset()), t.setEnd(e.container(), e.offset()), !0
                    })
                }(i, r);
                i = u[s[o]]
            }
            3 === i.nodeType && (a = Math.min(s[0], i.nodeValue.length)), 1 === i.nodeType && (a = Math.min(s[0], i.childNodes.length)), t ? r.setStart(i, a) : r.setEnd(i, a)
        }
        return !0
    }, Vl = function (e) {
        return Mn(e) && 0 < e.data.length
    }, ql = function (e, t, n) {
        var r, o, i, a, u, s, c = e.get(n.id + "_" + t), l = n.keep;
        if (c) {
            if (r = c.parentNode, s = (u = (o = "start" === t ? l ? c.hasChildNodes() ? (r = c.firstChild, 1) : Vl(c.nextSibling) ? (r = c.nextSibling, 0) : Vl(c.previousSibling) ? (r = c.previousSibling, c.previousSibling.data.length) : (r = c.parentNode, e.nodeIndex(c) + 1) : e.nodeIndex(c) : l ? c.hasChildNodes() ? (r = c.firstChild, 1) : Vl(c.previousSibling) ? (r = c.previousSibling, c.previousSibling.data.length) : (r = c.parentNode, e.nodeIndex(c)) : e.nodeIndex(c), r), o), !l) {
                for (a = c.previousSibling, i = c.nextSibling, _t.each(_t.grep(c.childNodes), function (e) {
                    Mn(e) && (e.nodeValue = e.nodeValue.replace(/\uFEFF/g, ""))
                }); c = e.get(n.id + "_" + t);) e.remove(c, !0);
                a && i && a.nodeType === i.nodeType && Mn(a) && !xt.opera && (o = a.nodeValue.length, a.appendData(i.nodeValue), e.remove(i), u = a, s = o)
            }
            return U.some(Is(u, s))
        }
        return U.none()
    }, $l = function (e, t) {
        var n, r, o, i, a, u, s, c, l, f, d, m, p, g, h = e.dom;
        if (t) {
            if (g = t, _t.isArray(g.start)) return m = t, p = (d = h).createRng(), Hl(d, !0, m, p) && Hl(d, !1, m, p) ? U.some(p) : U.none();
            if (K(t.start)) return U.some((c = t, l = (s = h).createRng(), f = Ys(s.getRoot(), c.start), l.setStart(f.container(), f.offset()), f = Ys(s.getRoot(), c.end), l.setEnd(f.container(), f.offset()), l));
            if (t.hasOwnProperty("id")) return a = ql(o = h, "start", i = t), u = ql(o, "end", i), as(a, u.or(a), function (e, t) {
                var n = o.createRng();
                return n.setStart(zl(o, e.container()), e.offset()), n.setEnd(zl(o, t.container()), t.offset()), n
            });
            if (t.hasOwnProperty("name")) return n = h, r = t, U.from(n.select(r.name)[r.index]).map(function (e) {
                var t = n.createRng();
                return t.selectNode(e), t
            });
            if (t.hasOwnProperty("rng")) return U.some(t.rng)
        }
        return U.none()
    }, Wl = ic, Kl = function (t, e) {
        $l(t, e).each(function (e) {
            t.setRng(e)
        })
    }, Xl = function (e) {
        return Rn(e) && "SPAN" === e.tagName && "bookmark" === e.getAttribute("data-mce-type")
    }, Yl = (ll = fo, function (e) {
        return ll === e
    }), Gl = function (e) {
        return "" !== e && -1 !== " \f\n\r\t\x0B".indexOf(e)
    }, Jl = function (e) {
        return !Gl(e) && !Yl(e)
    }, Ql = function (e) {
        return !!e.nodeType
    }, Zl = function (e, t, n) {
        var r, o, i, a, u = n.startOffset, s = n.startContainer;
        if ((n.startContainer !== n.endContainer || !(a = n.startContainer.childNodes[n.startOffset]) || !/^(IMG)$/.test(a.nodeName)) && 1 === s.nodeType) for (u < (i = s.childNodes).length ? (s = i[u], r = new Yr(s, e.getParent(s, e.isBlock))) : (s = i[i.length - 1], (r = new Yr(s, e.getParent(s, e.isBlock))).next(!0)), o = r.current(); o; o = r.next()) if (3 === o.nodeType && !rf(o)) return n.setStart(o, 0), void t.setRng(n)
    }, ef = function (e, t, n) {
        if (e) {
            var r = t ? "nextSibling" : "previousSibling";
            for (e = n ? e : e[r]; e; e = e[r]) if (1 === e.nodeType || !rf(e)) return e
        }
    }, tf = function (e, t) {
        return Ql(t) && (t = t.nodeName), !!e.schema.getTextBlockElements()[t.toLowerCase()]
    }, nf = function (e, t, n) {
        return e.schema.isValidChild(t, n)
    }, rf = function (e, t) {
        if (void 0 === t && (t = !1), V(e) && Mn(e)) {
            var n = t ? e.data.replace(/ /g, "\xa0") : e.data;
            return zo(n)
        }
        return !1
    }, of = function (e, n) {
        return "string" != typeof e ? e = e(n) : n && (e = e.replace(/%(\w+)/g, function (e, t) {
            return n[t] || e
        })), e
    }, af = function (e, t) {
        return e = "" + ((e = e || "").nodeName || e), t = "" + ((t = t || "").nodeName || t), e.toLowerCase() === t.toLowerCase()
    }, uf = function (e, t, n) {
        return "color" !== n && "backgroundColor" !== n || (t = e.toHex(t)), "fontWeight" === n && 700 === t && (t = "bold"), "fontFamily" === n && (t = t.replace(/[\'\"]/g, "").replace(/,\s+/g, ",")), "" + t
    }, sf = function (e, t, n) {
        return uf(e, e.getStyle(t, n), n)
    }, cf = function (t, e) {
        var n;
        return t.getParent(e, function (e) {
            return (n = t.getStyle(e, "text-decoration")) && "none" !== n
        }), n
    }, lf = function (e, t, n) {
        return e.getParents(t, n, e.getRoot())
    }, ff = function (t, e, n) {
        var r = ["inline", "block", "selector", "attributes", "styles", "classes"], a = function (e) {
            return pe(e, function (e, t) {
                return F(r, function (e) {
                    return e === t
                })
            })
        };
        return F(t.formatter.get(e), function (e) {
            var i = a(e);
            return F(t.formatter.get(n), function (e) {
                var t, n, r, o = a(e);
                return t = i, n = o, void 0 === r && (r = l), u(r).eq(t, n)
            })
        })
    }, df = function (e) {
        return ye(e, "block")
    }, mf = function (e) {
        return ye(e, "selector")
    }, pf = function (e) {
        return ye(e, "inline")
    }, gf = Xl, hf = lf, vf = rf, yf = tf, bf = function (e, t) {
        for (var n = t; n;) {
            if (Rn(n) && e.getContentEditable(n)) return "false" === e.getContentEditable(n) ? n : t;
            n = n.parentNode
        }
        return t
    }, Cf = function (e, t, n, r) {
        for (var o = t.data, i = n; e ? 0 <= i : i < o.length; e ? i-- : i++) if (r(o.charAt(i))) return e ? i + 1 : i;
        return -1
    }, wf = function (e, t, n) {
        return Cf(e, t, n, function (e) {
            return Yl(e) || Gl(e)
        })
    }, xf = function (e, t, n) {
        return Cf(e, t, n, Jl)
    }, Sf = function (i, e, t, n, a, r) {
        var u, s = i.getParent(t, i.isBlock) || e, o = function (e, t, n) {
            var r = is(i), o = a ? r.backwards : r.forwards;
            return U.from(o(e, t, function (e, t) {
                return gf(e.parentNode) ? -1 : n(a, u = e, t)
            }, s))
        };
        return o(t, n, wf).bind(function (e) {
            return r ? o(e.container, e.offset + (a ? -1 : 0), xf) : U.some(e)
        }).orThunk(function () {
            return u ? U.some({container: u, offset: a ? 0 : u.length}) : U.none()
        })
    }, Nf = function (e, t, n, r, o) {
        Mn(r) && 0 === r.nodeValue.length && r[o] && (r = r[o]);
        for (var i = hf(e, r), a = 0; a < i.length; a++) for (var u = 0; u < t.length; u++) {
            var s = t[u];
            if (!("collapsed" in s && s.collapsed !== n.collapsed) && e.is(i[a], s.selector)) return i[a]
        }
        return r
    }, Ef = function (t, e, n, r) {
        var o, i, a = t.dom, u = a.getRoot();
        if (e[0].wrapper || (i = a.getParent(n, e[0].block, u)), i || (o = a.getParent(n, "LI,TD,TH"), i = a.getParent(Mn(n) ? n.parentNode : n, function (e) {
            return e !== u && yf(t, e)
        }, o)), i && e[0].wrapper && (i = hf(a, i, "ul,ol").reverse()[0] || i), !i) for (i = n; i[r] && !a.isBlock(i[r]) && (i = i[r], !af(i, "br"));) ;
        return i || n
    }, kf = function (e, t, n, r) {
        var o = n.parentNode;
        return !V(n[r]) && (!(o !== t && !X(o) && !e.isBlock(o)) || kf(e, t, o, r))
    }, _f = function (e, t, n, r, o) {
        var i, a, u = n, s = o ? "previousSibling" : "nextSibling", c = e.getRoot();
        if (Mn(n) && !vf(n) && (o ? 0 < r : r < n.data.length)) return n;
        for (; ;) {
            if (!t[0].block_expand && e.isBlock(u)) return u;
            for (i = u[s]; i; i = i[s]) {
                var l = Mn(i) && !kf(e, c, i, s);
                if (!gf(i) && (!jn(a = i) || !a.getAttribute("data-mce-bogus") || a.nextSibling) && !vf(i, l)) return u
            }
            if (u === c || u.parentNode === c) {
                n = u;
                break
            }
            u = u.parentNode
        }
        return n
    }, Af = function (e) {
        return gf(e.parentNode) || gf(e)
    }, Rf = function (e, t, n, r) {
        void 0 === r && (r = !1);
        var o = t.startContainer, i = t.startOffset, a = t.endContainer, u = t.endOffset, s = e.dom;
        return Rn(o) && o.hasChildNodes() && (o = gs(o, i), Mn(o) && (i = 0)), Rn(a) && a.hasChildNodes() && (a = gs(a, t.collapsed ? u : u - 1), Mn(a) && (u = a.nodeValue.length)), o = bf(s, o), a = bf(s, a), Af(o) && (o = gf(o) ? o : o.parentNode, o = t.collapsed ? o.previousSibling || o : o.nextSibling || o, Mn(o) && (i = t.collapsed ? o.length : 0)), Af(a) && (a = gf(a) ? a : a.parentNode, a = t.collapsed ? a.nextSibling || a : a.previousSibling || a, Mn(a) && (u = t.collapsed ? 0 : a.length)), t.collapsed && (Sf(s, e.getBody(), o, i, !0, r).each(function (e) {
            var t = e.container, n = e.offset;
            o = t, i = n
        }), Sf(s, e.getBody(), a, u, !1, r).each(function (e) {
            var t = e.container, n = e.offset;
            a = t, u = n
        })), (n[0].inline || n[0].block_expand) && (n[0].inline && Mn(o) && 0 !== i || (o = _f(s, n, o, i, !0)), n[0].inline && Mn(a) && u !== a.nodeValue.length || (a = _f(s, n, a, u, !1))), n[0].selector && !1 !== n[0].expand && !n[0].inline && (o = Nf(s, n, t, o, "previousSibling"), a = Nf(s, n, t, a, "nextSibling")), (n[0].block || n[0].selector) && (o = Ef(e, n, o, "previousSibling"), a = Ef(e, n, a, "nextSibling"), n[0].block && (s.isBlock(o) || (o = _f(s, n, o, i, !0)), s.isBlock(a) || (a = _f(s, n, a, u, !1)))), Rn(o) && (i = s.nodeIndex(o), o = o.parentNode), Rn(a) && (u = s.nodeIndex(a) + 1, a = a.parentNode), {
            startContainer: o,
            startOffset: i,
            endContainer: a,
            endOffset: u
        }
    }, Tf = function (e, t) {
        var n = e.childNodes;
        return t >= n.length ? t = n.length - 1 : t < 0 && (t = 0), n[t] || e
    }, Df = function (e, t, u) {
        var n = t.startContainer, r = t.startOffset, o = t.endContainer, i = t.endOffset, s = function (e) {
            var t = e[0];
            return 3 === t.nodeType && t === n && r >= t.nodeValue.length && e.splice(0, 1), t = e[e.length - 1], 0 === i && 0 < e.length && t === o && 3 === t.nodeType && e.splice(e.length - 1, 1), e
        }, c = function (e, t, n) {
            for (var r = []; e && e !== n; e = e[t]) r.push(e);
            return r
        }, a = function (e, t) {
            do {
                if (e.parentNode === t) return e;
                e = e.parentNode
            } while (e)
        }, l = function (e, t, n) {
            for (var r = n ? "nextSibling" : "previousSibling", o = e, i = o.parentNode; o && o !== t; o = i) {
                i = o.parentNode;
                var a = c(o === e ? o : o[r], r);
                a.length && (n || a.reverse(), u(s(a)))
            }
        };
        if (1 === n.nodeType && n.hasChildNodes() && (n = Tf(n, r)), 1 === o.nodeType && o.hasChildNodes() && (o = Tf(o, i - 1)), n === o) return u(s([n]));
        for (var f = e.findCommonAncestor(n, o), d = n; d; d = d.parentNode) {
            if (d === o) return l(n, f, !0);
            if (d === f) break
        }
        for (d = o; d; d = d.parentNode) {
            if (d === n) return l(o, f);
            if (d === f) break
        }
        var m = a(n, f) || n, p = a(o, f) || o;
        l(n, m, !0);
        var g = c(m === n ? m : m.nextSibling, "nextSibling", p === o ? p.nextSibling : p);
        g.length && u(s(g)), l(o, p)
    }, Of = function (e) {
        var t = [];
        if (e) for (var n = 0; n < e.rangeCount; n++) t.push(e.getRangeAt(n));
        return t
    }, Bf = function (e) {
        return H(J(e, function (e) {
            var t = ps(e);
            return t ? [Rt.fromDom(t)] : []
        }), so)
    }, Pf = function (e, t) {
        var n = qu(t, "td[data-mce-selected],th[data-mce-selected]");
        return 0 < n.length ? n : Bf(e)
    }, Lf = function (e) {
        return Pf(Of(e.selection.getSel()), Rt.fromDom(e.getBody()))
    }, If = function (t) {
        return Zt(t).fold(S([t]), function (e) {
            return [t].concat(If(e))
        })
    }, Mf = function (t) {
        return en(t).fold(S([t]), function (e) {
            return "br" === It(e) ? Kt(e).map(function (e) {
                return [t].concat(Mf(e))
            }).getOr([]) : [t].concat(Mf(e))
        })
    }, Ff = function (o, e) {
        return as((a = (i = e).startContainer, u = i.startOffset, Mn(a) ? 0 === u ? U.some(Rt.fromDom(a)) : U.none() : U.from(a.childNodes[u]).map(Rt.fromDom)), (n = (t = e).endContainer, r = t.endOffset, Mn(n) ? r === n.data.length ? U.some(Rt.fromDom(n)) : U.none() : U.from(n.childNodes[r - 1]).map(Rt.fromDom)), function (e, t) {
            var n = W(If(o), N(Bt, e)), r = W(Mf(o), N(Bt, t));
            return n.isSome() && r.isSome()
        }).getOr(!1);
        var t, n, r, i, a, u
    }, Uf = function (e, t, n, r) {
        var o = n, i = new Yr(n, o), a = pe(e.schema.getMoveCaretBeforeOnEnterElements(), function (e, t) {
            return !M(["td", "th", "table"], t.toLowerCase())
        });
        do {
            if (Mn(n) && 0 !== _t.trim(n.nodeValue).length) return void (r ? t.setStart(n, 0) : t.setEnd(n, n.nodeValue.length));
            if (a[n.nodeName]) return void (r ? t.setStartBefore(n) : "BR" === n.nodeName ? t.setEndBefore(n) : t.setEndAfter(n))
        } while (n = r ? i.next() : i.prev());
        "BODY" === o.nodeName && (r ? t.setStart(o, 0) : t.setEnd(o, o.childNodes.length))
    }, zf = function (e) {
        var t = e.selection.getSel();
        return t && 0 < t.rangeCount
    }, jf = function (r, o) {
        var e = Lf(r);
        0 < e.length ? Y(e, function (e) {
            var t = e.dom, n = r.dom.createRng();
            n.setStartBefore(t), n.setEndAfter(t), o(n, !0)
        }) : o(r.selection.getRng(), !1)
    }, Hf = function (e, t, n) {
        var r = oc(e, t);
        n(r), e.moveToBookmark(r)
    }, Vf = (fl = zt, dl = "text", {
        get: function (e) {
            if (!fl(e)) throw new Error("Can only get " + dl + " value of a " + dl + " node");
            return ml(e).getOr("")
        }, getOption: ml = function (e) {
            return fl(e) ? U.from(e.dom.nodeValue) : U.none()
        }, set: function (e, t) {
            if (!fl(e)) throw new Error("Can only set raw " + dl + " value of a " + dl + " node");
            e.dom.nodeValue = t
        }
    }), qf = function (e) {
        return Vf.get(e)
    }, $f = function (r, o, i, a) {
        return Wt(o).fold(function () {
            return "skipping"
        }, function (e) {
            return "br" === a || zt(n = o) && qf(n) === mo ? "valid" : Ut(t = o) && Hu(t, $u()) ? "existing" : Fl(o.dom) ? "caret" : nf(r, i, a) && nf(r, It(e), i) ? "valid" : "invalid-child";
            var t, n
        })
    }, Wf = function (e, t, n, r) {
        var o = t.uid, i = void 0 === o ? Zu("mce-annotation") : o, a = function (e, t) {
            var n = {};
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
            return n
        }(t, ["uid"]), u = Rt.fromTag("span", e);
        zu(u, $u()), Yn(u, "" + Ku(), i), Yn(u, "" + Wu(), n);
        var s, c = r(i, a), l = c.attributes, f = void 0 === l ? {} : l, d = c.classes, m = void 0 === d ? [] : d;
        return Gn(u, f), s = u, Y(m, function (e) {
            zu(s, e)
        }), u
    }, Kf = function (i, e, t, n, r) {
        var a = [], u = Wf(i.getDoc(), r, t, n), s = Au(U.none()), c = function () {
            s.set(U.none())
        }, l = function (e) {
            Y(e, o)
        }, o = function (e) {
            var t, n;
            switch ($f(i, e, "span", It(e))) {
                case"invalid-child":
                    c();
                    var r = Jt(e);
                    l(r), c();
                    break;
                case"valid":
                    var o = s.get().getOrThunk(function () {
                        var e = ns(u);
                        return a.push(e), s.set(U.some(e)), e
                    });
                    cn(t = e, n = o), dn(n, t)
            }
        };
        return Df(i.dom, e, function (e) {
            var t;
            c(), t = z(e, Rt.fromDom), l(t)
        }), a
    }, Xf = function (u, s, c, l) {
        u.undoManager.transact(function () {
            var e, t, n, r, o = u.selection, i = o.getRng(), a = 0 < Lf(u).length;
            i.collapsed && !a && (n = Rf(e = u, t = i, [{inline: !0}]), t.setStart(n.startContainer, n.startOffset), t.setEnd(n.endContainer, n.endOffset), e.selection.setRng(t)), o.getRng().collapsed && !a ? (r = Wf(u.getDoc(), l, s, c.decorate), es(r, fo), o.getRng().insertNode(r.dom), o.select(r.dom)) : Hf(o, !1, function () {
                jf(u, function (e) {
                    Kf(u, e, s, c.decorate, l)
                })
            })
        })
    }, Yf = function (u) {
        var n, r = (n = {}, {
            register: function (e, t) {
                n[e] = {name: e, settings: t}
            }, lookup: function (e) {
                return n.hasOwnProperty(e) ? U.from(n[e]).map(function (e) {
                    return e.settings
                }) : U.none()
            }
        });
        Ju(u, r);
        var o = Gu(u);
        return {
            register: function (e, t) {
                r.register(e, t)
            }, annotate: function (t, n) {
                r.lookup(t).each(function (e) {
                    Xf(u, t, e, n)
                })
            }, annotationChanged: function (e, t) {
                o.addListener(e, t)
            }, remove: function (e) {
                Xu(u, U.some(e)).each(function (e) {
                    var t = e.elements;
                    Y(t, hn)
                })
            }, getAll: function (e) {
                var t, n, r, o, i,
                    a = (t = u, n = e, r = Rt.fromDom(t.getBody()), o = qu(r, "[" + Wu() + '="' + n + '"]'), i = {}, Y(o, function (e) {
                        var t = Jn(e, Ku()), n = i.hasOwnProperty(t) ? i[t] : [];
                        i[t] = n.concat([e])
                    }), i);
                return ce(a, function (e) {
                    return z(e, function (e) {
                        return e.dom
                    })
                })
            }
        }
    }, Gf = function (e) {
        return {getBookmark: N(Wl, e), moveToBookmark: N(Kl, e)}
    };
    Gf.isBookmarkNode = Xl;
    var Jf = function (e, t) {
        for (; t && t !== e;) {
            if (Vn(t) || qn(t)) return t;
            t = t.parentNode
        }
        return null
    }, Qf = function (t, n, e) {
        if (e.collapsed) return !1;
        if (xt.browser.isIE() && e.startOffset === e.endOffset - 1 && e.startContainer === e.endContainer) {
            var r = e.startContainer.childNodes[e.startOffset];
            if (Rn(r)) return F(r.getClientRects(), function (e) {
                return ms(e, t, n)
            })
        }
        return F(e.getClientRects(), function (e) {
            return ms(e, t, n)
        })
    }, Zf = function (e, t, n) {
        return e.fire(t, n)
    }, ed = {
        BACKSPACE: 8,
        DELETE: 46,
        DOWN: 40,
        ENTER: 13,
        LEFT: 37,
        RIGHT: 39,
        SPACEBAR: 32,
        TAB: 9,
        UP: 38,
        END: 35,
        HOME: 36,
        modifierPressed: function (e) {
            return e.shiftKey || e.ctrlKey || e.altKey || ed.metaKeyPressed(e)
        },
        metaKeyPressed: function (e) {
            return xt.mac ? e.metaKey : e.ctrlKey && !e.altKey
        }
    }, td = qn, nd = function (r, l) {
        var f, d, m, p, c, g, h, v, y, b, C, w, x, S, N, E = "data-mce-selected", k = l.dom, _ = _t.each,
            A = l.getDoc(), R = document, T = Math.abs, D = Math.round, O = l.getBody(),
            B = {nw: [0, 0, -1, -1], ne: [1, 0, 1, -1], se: [1, 1, 1, 1], sw: [0, 1, -1, 1]}, P = function (e) {
                return e && ("IMG" === e.nodeName || l.dom.is(e, "figure.image"))
            }, L = function (e) {
                return Wn(e) || k.hasClass(e, "mce-preview-object")
            }, n = function (e) {
                var t = e.target;
                !function (e, t) {
                    if ("longpress" !== e.type && 0 !== e.type.indexOf("touch")) return P(e.target) && !Qf(e.clientX, e.clientY, t);
                    var n = e.touches[0];
                    return P(e.target) && !Qf(n.clientX, n.clientY, t)
                }(e, l.selection.getRng()) || e.isDefaultPrevented() || l.selection.select(t)
            }, I = function (e) {
                return k.is(e, "figure.image") ? [e.querySelector("img")] : k.hasClass(e, "mce-preview-object") && V(e.firstElementChild) ? [e, e.firstElementChild] : [e]
            }, M = function (e) {
                var t = yc(l);
                return !!t && ("false" !== e.getAttribute("data-mce-resize") && (e !== l.getBody() && (k.hasClass(e, "mce-preview-object") ? Dt(Rt.fromDom(e.firstElementChild), t) : Dt(Rt.fromDom(e), t))))
            }, a = function (e, t, n) {
                var r;
                V(n) && (r = I(e), Y(r, function (e) {
                    e.style[t] || !l.schema.isValid(e.nodeName.toLowerCase(), t) ? k.setStyle(e, t, n) : k.setAttrib(e, t, "" + n)
                }))
            }, F = function (e, t, n) {
                a(e, "width", t), a(e, "height", n)
            }, U = function (e) {
                var t, n, r, o, i, a, u, s = e.screenX - g, c = e.screenY - h;
                w = s * p[2] + v, x = c * p[3] + y, w = w < 5 ? 5 : w, x = x < 5 ? 5 : x, ((P(f) || L(f)) && !1 !== l.getParam("resize_img_proportional", !0, "boolean") ? !ed.modifierPressed(e) : ed.modifierPressed(e)) && (T(s) > T(c) ? (x = D(w * b), w = D(x / b)) : (w = D(x / b), x = D(w * b))), F(d, w, x), t = 0 < (t = p.startPos.x + s) ? t : 0, n = 0 < (n = p.startPos.y + c) ? n : 0, k.setStyles(m, {
                    left: t,
                    top: n,
                    display: "block"
                }), m.innerHTML = w + " &times; " + x, p[2] < 0 && d.clientWidth <= w && k.setStyle(d, "left", void 0 + (v - w)), p[3] < 0 && d.clientHeight <= x && k.setStyle(d, "top", void 0 + (y - x)), (s = O.scrollWidth - S) + (c = O.scrollHeight - N) !== 0 && k.setStyles(m, {
                    left: t - s,
                    top: n - c
                }), C || (r = l, o = f, i = v, a = y, u = "corner-" + p.name, r.fire("ObjectResizeStart", {
                    target: o,
                    width: i,
                    height: a,
                    origin: u
                }), C = !0)
            }, z = function () {
                var e, t, n, r, o, i = C;
                C = !1, i && (a(f, "width", w), a(f, "height", x)), k.unbind(A, "mousemove", U), k.unbind(A, "mouseup", z), R !== A && (k.unbind(R, "mousemove", U), k.unbind(R, "mouseup", z)), k.remove(d), k.remove(m), k.remove(c), u(f), i && (e = l, t = f, n = w, r = x, o = "corner-" + p.name, e.fire("ObjectResized", {
                    target: t,
                    width: n,
                    height: r,
                    origin: o
                }), k.setAttrib(f, "style", k.getAttrib(f, "style"))), l.nodeChanged()
            }, u = function (e) {
                H();
                var t = k.getPos(e, O), i = t.x, a = t.y, n = e.getBoundingClientRect(), u = n.width || n.right - n.left,
                    s = n.height || n.bottom - n.top;
                f !== e && (j(), f = e, w = x = 0);
                var r = l.fire("ObjectSelected", {target: e}), o = k.getAttrib(f, E, "1");
                M(e) && !r.isDefaultPrevented() ? _(B, function (r, o) {
                    var t = function (e) {
                        var t, n = I(f)[0];
                        g = e.screenX, h = e.screenY, v = n.clientWidth, y = n.clientHeight, b = y / v, (p = r).name = o, p.startPos = {
                            x: u * r[0] + i,
                            y: s * r[1] + a
                        }, S = O.scrollWidth, N = O.scrollHeight, c = k.add(O, "div", {"class": "mce-resize-backdrop"}), k.setStyles(c, {
                            position: "fixed",
                            left: "0",
                            top: "0",
                            width: "100%",
                            height: "100%"
                        }), d = L(t = f) ? k.create("img", {src: xt.transparentSrc}) : t.cloneNode(!0), k.addClass(d, "mce-clonedresizable"), k.setAttrib(d, "data-mce-bogus", "all"), d.contentEditable = "false", k.setStyles(d, {
                            left: i,
                            top: a,
                            margin: 0
                        }), F(d, u, s), d.removeAttribute(E), O.appendChild(d), k.bind(A, "mousemove", U), k.bind(A, "mouseup", z), R !== A && (k.bind(R, "mousemove", U), k.bind(R, "mouseup", z)), m = k.add(O, "div", {
                            "class": "mce-resize-helper",
                            "data-mce-bogus": "all"
                        }, v + " &times; " + y)
                    }, e = k.get("mceResizeHandle" + o);
                    e && k.remove(e), e = k.add(O, "div", {
                        id: "mceResizeHandle" + o,
                        "data-mce-bogus": "all",
                        "class": "mce-resizehandle",
                        unselectable: !0,
                        style: "cursor:" + o + "-resize; margin:0; padding:0"
                    }), 11 === xt.ie && (e.contentEditable = !1), k.bind(e, "mousedown", function (e) {
                        e.stopImmediatePropagation(), e.preventDefault(), t(e)
                    }), r.elm = e, k.setStyles(e, {
                        left: u * r[0] + i - e.offsetWidth / 2,
                        top: s * r[1] + a - e.offsetHeight / 2
                    })
                }) : j(), k.getAttrib(f, E) || f.setAttribute(E, o)
            }, j = function () {
                H(), f && f.removeAttribute(E), se(B, function (e, t) {
                    var n = k.get("mceResizeHandle" + t);
                    n && (k.unbind(n), k.remove(n))
                })
            }, o = function (e) {
                var t, n = function (e, t) {
                    if (e) do {
                        if (e === t) return !0
                    } while (e = e.parentNode)
                };
                C || l.removed || (_(k.select("img[data-mce-selected],hr[data-mce-selected]"), function (e) {
                    e.removeAttribute(E)
                }), t = "mousedown" === e.type ? e.target : r.getNode(), n(t = k.$(t).closest("table,img,figure.image,hr,video,span.mce-preview-object")[0], O) && (s(), n(r.getStart(!0), t) && n(r.getEnd(!0), t)) ? u(t) : j())
            }, i = function (e) {
                return td(Jf(l.getBody(), e))
            }, H = function () {
                se(B, function (e) {
                    e.elm && (k.unbind(e.elm), delete e.elm)
                })
            }, s = function () {
                try {
                    l.getDoc().execCommand("enableObjectResizing", !1, "false")
                } catch (e) {
                }
            };
        l.on("init", function () {
            var e;
            s(), (xt.browser.isIE() || xt.browser.isEdge()) && (l.on("mousedown click", function (e) {
                var t = e.target, n = t.nodeName;
                C || !/^(TABLE|IMG|HR)$/.test(n) || i(t) || (2 !== e.button && l.selection.select(t, "TABLE" === n), "mousedown" === e.type && l.nodeChanged())
            }), e = function (e) {
                var t = function (e) {
                    Wr.setEditorTimeout(l, function () {
                        return l.selection.select(e)
                    })
                };
                if (i(e.target) || Wn(e.target)) return e.preventDefault(), void t(e.target);
                /^(TABLE|IMG|HR)$/.test(e.target.nodeName) && (e.preventDefault(), "IMG" === e.target.tagName && t(e.target))
            }, k.bind(O, "mscontrolselect", e), l.on("remove", function () {
                return k.unbind(O, "mscontrolselect", e)
            }));
            var t = Wr.throttle(function (e) {
                l.composing || o(e)
            });
            l.on("nodechange ResizeEditor ResizeWindow ResizeContent drop FullscreenStateChanged", t), l.on("keyup compositionend", function (e) {
                f && "TABLE" === f.nodeName && t(e)
            }), l.on("hide blur", j), l.on("contextmenu longpress", n, !0)
        }), l.on("remove", H);
        return {
            isResizable: M, showResizeRect: u, hideResizeRect: j, updateResizeRect: o, destroy: function () {
                f = d = c = null
            }
        }
    }, rd = function (e) {
        return Vn(e) || qn(e)
    }, od = function (e, t, n) {
        var r, o, i, a, u, s = n;
        if (s.caretPositionFromPoint) (o = s.caretPositionFromPoint(e, t)) && ((r = n.createRange()).setStart(o.offsetNode, o.offset), r.collapse(!0)); else if (n.caretRangeFromPoint) r = n.caretRangeFromPoint(e, t); else if (s.body.createTextRange) {
            r = s.body.createTextRange();
            try {
                r.moveToPoint(e, t), r.collapse(!0)
            } catch (c) {
                r = function (e, n, t) {
                    var r, o = t.elementFromPoint(e, n), i = t.body.createTextRange();
                    if (o && "HTML" !== o.tagName || (o = t.body), i.moveToElementText(o), 0 < (r = (r = _t.toArray(i.getClientRects())).sort(function (e, t) {
                        return (e = Math.abs(Math.max(e.top - n, e.bottom - n))) - (t = Math.abs(Math.max(t.top - n, t.bottom - n)))
                    })).length) {
                        n = (r[0].bottom + r[0].top) / 2;
                        try {
                            return i.moveToPoint(e, n), i.collapse(!0), i
                        } catch (a) {
                        }
                    }
                    return null
                }(e, t, n)
            }
            return i = r, a = n.body, u = i && i.parentElement ? i.parentElement() : null, qn(function (e, t, n) {
                for (; e && e !== t;) {
                    if (n(e)) return e;
                    e = e.parentNode
                }
                return null
            }(u, a, rd)) ? null : i
        }
        return r
    }, id = function (e, t) {
        return e && t && e.startContainer === t.startContainer && e.startOffset === t.startOffset && e.endContainer === t.endContainer && e.endOffset === t.endOffset
    }, ad = function (e, t, n) {
        return null !== function (e, t, n) {
            for (; e && e !== t;) {
                if (n(e)) return e;
                e = e.parentNode
            }
            return null
        }(e, t, n)
    }, ud = function (e) {
        return e && "TABLE" === e.nodeName
    }, sd = function (e, t, n) {
        for (var r = new Yr(t, e.getParent(t.parentNode, e.isBlock) || e.getRoot()); t = r[n ? "prev" : "next"]();) if (jn(t)) return !0
    }, cd = function (e, t, n, r, o) {
        var i, a, u = e.getRoot(), s = e.schema.getNonEmptyElements(), c = e.getParent(o.parentNode, e.isBlock) || u;
        if (r && jn(o) && t && e.isEmpty(c)) return U.some(Is(o.parentNode, e.nodeIndex(o)));
        for (var l, f, d = new Yr(o, c); a = d[r ? "prev" : "next"]();) {
            if ("false" === e.getContentEditableParent(a) || (f = u, Co(l = a) && !1 === ad(l, f, Fl))) return U.none();
            if (Mn(a) && 0 < a.nodeValue.length) return !1 === function (e, t, n) {
                return ad(e, t, function (e) {
                    return e.nodeName === n
                })
            }(a, u, "A") ? U.some(Is(a, r ? a.nodeValue.length : 0)) : U.none();
            if (e.isBlock(a) || s[a.nodeName.toLowerCase()]) return U.none();
            i = a
        }
        return n && i ? U.some(Is(i, 0)) : U.none()
    }, ld = function (e, t, n, r) {
        var o, i, a, u, s = e.getRoot(), c = !1, l = r[(n ? "start" : "end") + "Container"],
            f = r[(n ? "start" : "end") + "Offset"], d = Rn(l) && f === l.childNodes.length,
            m = e.schema.getNonEmptyElements(), p = n;
        if (Co(l)) return U.none();
        if (Rn(l) && f > l.childNodes.length - 1 && (p = !1), Un(l) && (l = s, f = 0), l === s) {
            if (p && (o = l.childNodes[0 < f ? f - 1 : 0])) {
                if (Co(o)) return U.none();
                if (m[o.nodeName] || ud(o)) return U.none()
            }
            if (l.hasChildNodes()) {
                if (f = Math.min(!p && 0 < f ? f - 1 : f, l.childNodes.length - 1), l = l.childNodes[f], f = Mn(l) && d ? l.data.length : 0, !t && l === s.lastChild && ud(l)) return U.none();
                if (function (e, t) {
                    for (; t && t !== e;) {
                        if (qn(t)) return !0;
                        t = t.parentNode
                    }
                    return !1
                }(s, l) || Co(l)) return U.none();
                if (l.hasChildNodes() && !1 === ud(l)) {
                    var g = new Yr(o = l, s);
                    do {
                        if (qn(o) || Co(o)) {
                            c = !1;
                            break
                        }
                        if (Mn(o) && 0 < o.nodeValue.length) {
                            f = p ? 0 : o.nodeValue.length, l = o, c = !0;
                            break
                        }
                        if (m[o.nodeName.toLowerCase()] && (!(i = o) || !/^(TD|TH|CAPTION)$/.test(i.nodeName))) {
                            f = e.nodeIndex(o), l = o.parentNode, p || f++, c = !0;
                            break
                        }
                    } while (o = p ? g.next() : g.prev())
                }
            }
        }
        return t && (Mn(l) && 0 === f && cd(e, d, t, !0, l).each(function (e) {
            l = e.container(), f = e.offset(), c = !0
        }), Rn(l) && (!(o = (o = l.childNodes[f]) || l.childNodes[f - 1]) || !jn(o) || (u = "A", (a = o).previousSibling && a.previousSibling.nodeName === u) || sd(e, o, !1) || sd(e, o, !0) || cd(e, d, t, !0, o).each(function (e) {
            l = e.container(), f = e.offset(), c = !0
        }))), p && !t && Mn(l) && f === l.nodeValue.length && cd(e, d, t, !1, l).each(function (e) {
            l = e.container(), f = e.offset(), c = !0
        }), c ? U.some(Is(l, f)) : U.none()
    }, fd = function (e, t) {
        var n = t.collapsed, r = t.cloneRange(), o = Is.fromRangeStart(t);
        return ld(e, n, !0, r).each(function (e) {
            n && Is.isAbove(o, e) || r.setStart(e.container(), e.offset())
        }), n || ld(e, n, !1, r).each(function (e) {
            r.setEnd(e.container(), e.offset())
        }), n && r.collapse(!0), id(t, r) ? U.none() : U.some(r)
    }, dd = function (e, t) {
        return e.splitText(t)
    }, md = function (e) {
        var t = e.startContainer, n = e.startOffset, r = e.endContainer, o = e.endOffset;
        return t === r && Mn(t) ? 0 < n && n < t.nodeValue.length && (t = (r = dd(t, n)).previousSibling, n < o ? (t = r = dd(r, o -= n).previousSibling, o = r.nodeValue.length, n = 0) : o = 0) : (Mn(t) && 0 < n && n < t.nodeValue.length && (t = dd(t, n), n = 0), Mn(r) && 0 < o && o < r.nodeValue.length && (o = (r = dd(r, o).previousSibling).nodeValue.length)), {
            startContainer: t,
            startOffset: n,
            endContainer: r,
            endOffset: o
        }
    }, pd = function (n) {
        return {
            walk: function (e, t) {
                return Df(n, e, t)
            }, split: md, normalize: function (t) {
                return fd(n, t).fold(b, function (e) {
                    return t.setStart(e.startContainer, e.startOffset), t.setEnd(e.endContainer, e.endOffset), !0
                })
            }
        }
    };
    pd.compareRanges = id, pd.getCaretRangeFromPoint = od, pd.getSelectedNode = ps, pd.getNode = gs;
    var gd, hd, vd, yd, bd, Cd = (gd = "height", hd = function (e) {
            var t = e.dom;
            return vn(e) ? t.getBoundingClientRect().height : t.offsetHeight
        }, {
            set: function (e, t) {
                if (!O(t) && !t.match(/^[0-9]+$/)) throw new Error(gd + ".set accepts only positive integer values. Value was " + t);
                var n = e.dom;
                Kn(n) && (n.style[gd] = t + "px")
            }, get: vd = function (e) {
                var t = hd(e);
                if (t <= 0 || null === t) {
                    var n = tr(e, gd);
                    return parseFloat(n) || 0
                }
                return t
            }, getOuter: vd, aggregate: yd = function (o, e) {
                return $(e, function (e, t) {
                    var n = tr(o, t), r = n === undefined ? 0 : parseInt(n, 10);
                    return isNaN(r) ? e : e + r
                }, 0)
            }, max: function (e, t, n) {
                var r = yd(e, n);
                return r < t ? t - r : 0
            }
        }), wd = function (r, e) {
            return r.view(e).fold(S([]), function (e) {
                var t = r.owner(e), n = wd(r, t);
                return [e].concat(n)
            })
        }, xd =/* */Object.freeze({
            __proto__: null, view: function (e) {
                var t;
                return (e.dom === document ? U.none() : U.from(null === (t = e.dom.defaultView) || void 0 === t ? void 0 : t.frameElement)).map(Rt.fromDom)
            }, owner: qt
        }), Sd = function (e) {
            var t, n, r, o = Rt.fromDom(document), i = xn(o), a = (t = e, r = (n = xd).owner(t), wd(n, r)), u = wn(e),
                s = q(a, function (e, t) {
                    var n = wn(t);
                    return {left: e.left + n.left, top: e.top + n.top}
                }, {left: 0, top: 0});
            return bn(s.left + u.left + i.left, s.top + u.top + i.top)
        }, Nd = function (e) {
            return "textarea" === It(e)
        }, Ed = function (e, t) {
            var n, r = function (e) {
                var t = e.dom.ownerDocument, n = t.body, r = t.defaultView, o = t.documentElement;
                if (n === e.dom) return bn(n.offsetLeft, n.offsetTop);
                var i = Cn(null == r ? void 0 : r.pageYOffset, o.scrollTop),
                    a = Cn(null == r ? void 0 : r.pageXOffset, o.scrollLeft), u = Cn(o.clientTop, n.clientTop),
                    s = Cn(o.clientLeft, n.clientLeft);
                return wn(e).translate(a - s, i - u)
            }(e), o = (n = e, Cd.get(n));
            return {element: e, bottom: r.top + o, height: o, pos: r, cleanup: t}
        }, kd = function (e, t) {
            var n = function (e, t) {
                var n = Jt(e);
                if (0 === n.length || Nd(e)) return {element: e, offset: t};
                if (t < n.length && !Nd(n[t])) return {element: n[t], offset: 0};
                var r = n[n.length - 1];
                return Nd(r) ? {element: e, offset: t} : "img" === It(r) ? {element: r, offset: 1} : zt(r) ? {
                    element: r,
                    offset: qf(r).length
                } : {element: r, offset: Jt(r).length}
            }(e, t), r = Rt.fromHtml('<span data-mce-bogus="all">\ufeff</span>');
            return cn(n.element, r), Ed(r, function () {
                return gn(r)
            })
        }, _d = function (n, r, o, i) {
            Dd(n, function (e, t) {
                return Rd(n, r, o, i)
            }, o)
        }, Ad = function (e, t, n, r, o) {
            var i, a, u = {elm: r.element.dom, alignToTop: o};
            i = u, e.fire("ScrollIntoView", i).isDefaultPrevented() || (n(t, xn(t).top, r, o), a = u, e.fire("AfterScrollIntoView", a))
        }, Rd = function (e, t, n, r) {
            var o = Rt.fromDom(e.getBody()), i = Rt.fromDom(e.getDoc());
            o.dom.offsetWidth;
            var a = kd(Rt.fromDom(n.startContainer), n.startOffset);
            Ad(e, i, t, a, r), a.cleanup()
        }, Td = function (e, t, n, r) {
            var o, i = Rt.fromDom(e.getDoc());
            Ad(e, i, n, (o = t, Ed(Rt.fromDom(o), te)), r)
        }, Dd = function (e, t, n) {
            var r = n.startContainer, o = n.startOffset, i = n.endContainer, a = n.endOffset;
            t(Rt.fromDom(r), Rt.fromDom(i));
            var u = e.dom.createRng();
            u.setStart(r, o), u.setEnd(i, a), e.selection.setRng(n)
        }, Od = function (e, t, n, r) {
            var o, i = e.pos;
            n ? Sn(i.left, i.top, r) : (o = i.top - t + e.height, Sn(i.left, o, r))
        }, Bd = function (e, t, n, r, o) {
            var i = n + t, a = r.pos.top, u = r.bottom, s = n <= u - a;
            a < t ? Od(r, n, !1 !== o, e) : i < a ? Od(r, n, s ? !1 !== o : !0 === o, e) : i < u && !s && Od(r, n, !0 === o, e)
        }, Pd = function (e, t, n, r) {
            var o = e.dom.defaultView.innerHeight;
            Bd(e, t, o, n, r)
        }, Ld = function (e, t, n, r) {
            var o = e.dom.defaultView.innerHeight;
            Bd(e, t, o, n, r);
            var i = Sd(n.element), a = kn(window);
            i.top < a.y ? Nn(n.element, !1 !== r) : i.top > a.bottom && Nn(n.element, !0 === r)
        }, Id = function (e, t, n) {
            return _d(e, Pd, t, n)
        }, Md = function (e, t, n) {
            return Td(e, t, Pd, n)
        }, Fd = function (e, t, n) {
            return _d(e, Ld, t, n)
        }, Ud = function (e, t, n) {
            return Td(e, t, Ld, n)
        }, zd = function (e, t, n) {
            (e.inline ? Id : Fd)(e, t, n)
        }, jd = function (e) {
            var t = on(e).dom;
            return e.dom === t.activeElement
        }, Hd = function (e) {
            return void 0 === e && (e = Rt.fromDom(document)), U.from(e.dom.activeElement).map(Rt.fromDom)
        }, Vd = function (e, t, n, r) {
            return {start: e, soffset: t, finish: n, foffset: r}
        }, qd = wr([{before: ["element"]}, {on: ["element", "offset"]}, {after: ["element"]}]),
        $d = (qd.before, qd.on, qd.after, function (e) {
            return e.fold(o, o, o)
        }),
        Wd = wr([{domRange: ["rng"]}, {relative: ["startSitu", "finishSitu"]}, {exact: ["start", "soffset", "finish", "foffset"]}]),
        Kd = {
            domRange: Wd.domRange, relative: Wd.relative, exact: Wd.exact, exactFromRange: function (e) {
                return Wd.exact(e.start, e.soffset, e.finish, e.foffset)
            }, getWin: function (e) {
                var t = e.match({
                    domRange: function (e) {
                        return Rt.fromDom(e.startContainer)
                    }, relative: function (e, t) {
                        return $d(e)
                    }, exact: function (e, t, n, r) {
                        return e
                    }
                });
                return $t(t)
            }, range: Vd
        }, Xd = mt().browser, Yd = function (e, t) {
            var n = zt(t) ? qf(t).length : Jt(t).length + 1;
            return n < e ? n : e < 0 ? 0 : e
        }, Gd = function (e) {
            return Kd.range(e.start, Yd(e.soffset, e.start), e.finish, Yd(e.foffset, e.finish))
        }, Jd = function (e, t) {
            return !An(t.dom) && (Lt(e, t) || Bt(e, t))
        }, Qd = function (t) {
            return function (e) {
                return Jd(t, e.start) && Jd(t, e.finish)
            }
        }, Zd = function (e) {
            return !0 === e.inline || Xd.isIE()
        }, em = function (e) {
            return Kd.range(Rt.fromDom(e.startContainer), e.startOffset, Rt.fromDom(e.endContainer), e.endOffset)
        }, tm = function (e) {
            var t, n, r = $t(e);
            return t = r.dom, ((n = t.getSelection()) && 0 !== n.rangeCount ? U.from(n.getRangeAt(0)) : U.none()).map(em).filter(Qd(e))
        }, nm = function (e) {
            var t = document.createRange();
            try {
                return t.setStart(e.start.dom, e.soffset), t.setEnd(e.finish.dom, e.foffset), U.some(t)
            } catch (n) {
                return U.none()
            }
        }, rm = function (e) {
            var t = Zd(e) ? tm(Rt.fromDom(e.getBody())) : U.none();
            e.bookmark = t.isSome() ? t : e.bookmark
        }, om = function (r) {
            return (r.bookmark ? r.bookmark : U.none()).bind(function (e) {
                return t = Rt.fromDom(r.getBody()), n = e, U.from(n).filter(Qd(t)).map(Gd);
                var t, n
            }).bind(nm)
        }, im = {
            isEditorUIElement: function (e) {
                var t = e.className.toString();
                return -1 !== t.indexOf("tox-") || -1 !== t.indexOf("mce-")
            }
        }, am = function (n, e) {
            var t, r;
            mt().browser.isIE() ? (r = n).on("focusout", function () {
                rm(r)
            }) : (t = e, n.on("mouseup touchend", function (e) {
                t.throttle()
            })), n.on("keyup NodeChange", function (e) {
                var t;
                "nodechange" === (t = e).type && t.selectionChange || rm(n)
            })
        }, um = function (r) {
            var o = Pu(function () {
                rm(r)
            }, 0);
            r.on("init", function () {
                var e, t, n;
                r.inline && (e = r, t = o, n = function () {
                    t.throttle()
                }, xu.DOM.bind(document, "mouseup", n), e.on("remove", function () {
                    xu.DOM.unbind(document, "mouseup", n)
                })), am(r, o)
            }), r.on("remove", function () {
                o.cancel()
            })
        }, sm = xu.DOM, cm = function (t, e) {
            var n = t.getParam("custom_ui_selector", "", "string");
            return null !== sm.getParent(e, function (e) {
                return im.isEditorUIElement(e) || !!n && t.dom.is(e, n)
            })
        }, lm = function (n, e) {
            var t = e.editor;
            um(t), t.on("focusin", function () {
                var e = n.focusedEditor;
                e !== t && (e && e.fire("blur", {focusedEditor: t}), n.setActive(t), (n.focusedEditor = t).fire("focus", {blurredEditor: e}), t.focus(!0))
            }), t.on("focusout", function () {
                Wr.setEditorTimeout(t, function () {
                    var e = n.focusedEditor;
                    cm(t, function (e) {
                        try {
                            var t = on(Rt.fromDom(e.getElement()));
                            return Hd(t).fold(function () {
                                return document.body
                            }, function (e) {
                                return e.dom
                            })
                        } catch (n) {
                            return document.body
                        }
                    }(t)) || e !== t || (t.fire("blur", {focusedEditor: null}), n.focusedEditor = null)
                })
            }), bd || (bd = function (e) {
                var t = n.activeEditor;
                t && function (e) {
                    if (rn() && V(e.target)) {
                        var t = Rt.fromDom(e.target);
                        if (Ut(t) && sn(t) && e.composed && e.composedPath) {
                            var n = e.composedPath();
                            if (n) return re(n)
                        }
                    }
                    return U.from(e.target)
                }(e).each(function (e) {
                    e.ownerDocument === document && (e === document.body || cm(t, e) || n.focusedEditor !== t || (t.fire("blur", {focusedEditor: null}), n.focusedEditor = null))
                })
            }, sm.bind(document, "focusin", bd))
        }, fm = function (e, t) {
            e.focusedEditor === t.editor && (e.focusedEditor = null), e.activeEditor || (sm.unbind(document, "focusin", bd), bd = null)
        }, dm = function (t, e) {
            return ((n = e).collapsed ? U.from(gs(n.startContainer, n.startOffset)).map(Rt.fromDom) : U.none()).bind(function (e) {
                return uo(e) ? U.some(e) : !1 === Lt(t, e) ? U.some(t) : U.none()
            });
            var n
        }, mm = function (t, e) {
            dm(Rt.fromDom(t.getBody()), e).bind(function (e) {
                return Ll(e.dom)
            }).fold(function () {
                t.selection.normalize()
            }, function (e) {
                return t.selection.setRng(e.toRange())
            })
        }, pm = function (e) {
            if (e.setActive) try {
                e.setActive()
            } catch (t) {
                e.focus()
            } else e.focus()
        }, gm = function (e) {
            return jd(e) || Hd(on(t = e)).filter(function (e) {
                return t.dom.contains(e.dom)
            }).isSome();
            var t
        }, hm = function (r) {
            var e = on(Rt.fromDom(r.getElement()));
            return Hd(e).filter(function (e) {
                return t = e.dom, !((n = t.classList) !== undefined && (n.contains("tox-edit-area") || n.contains("tox-edit-area__iframe") || n.contains("mce-content-body"))) && cm(r, e.dom);
                var t, n
            }).isSome()
        }, vm = function (e) {
            return e.inline ? (n = e.getBody()) && gm(Rt.fromDom(n)) : (t = e).iframeElement && jd(Rt.fromDom(t.iframeElement));
            var t, n
        }, ym = function (t) {
            var e = t.selection, n = t.getBody(), r = e.getRng();
            t.quirks.refreshContentEditable(), t.bookmark !== undefined && !1 === vm(t) && om(t).each(function (e) {
                t.selection.setRng(e), r = e
            });
            var o, i, a = (o = t, i = e.getNode(), o.dom.getParent(i, function (e) {
                return "true" === o.dom.getContentEditable(e)
            }));
            if (t.$.contains(n, a)) return pm(a), mm(t, r), void bm(t);
            t.inline || (xt.opera || pm(n), t.getWin().focus()), (xt.gecko || t.inline) && (pm(n), mm(t, r)), bm(t)
        }, bm = function (e) {
            return e.editorManager.setActive(e)
        }, Cm = function (e, t, n, r, o) {
            var i = n ? t.startContainer : t.endContainer, a = n ? t.startOffset : t.endOffset;
            return U.from(i).map(Rt.fromDom).map(function (e) {
                return r && t.collapsed ? e : Qt(e, o(e, a)).getOr(e)
            }).bind(function (e) {
                return Ut(e) ? U.some(e) : Wt(e).filter(Ut)
            }).map(function (e) {
                return e.dom
            }).getOr(e)
        }, wm = function (e, t, n) {
            return Cm(e, t, !0, n, function (e, t) {
                return Math.min(e.dom.childNodes.length, t)
            })
        }, xm = function (e, t, n) {
            return Cm(e, t, !1, n, function (e, t) {
                return 0 < t ? t - 1 : t
            })
        }, Sm = function (e, t) {
            for (var n = e; e && Mn(e) && 0 === e.length;) e = t ? e.nextSibling : e.previousSibling;
            return e || n
        }, Nm = function (n, e) {
            return z(e, function (e) {
                var t = n.fire("GetSelectionRange", {range: e});
                return t.range !== e ? t.range : e
            })
        }, Em = {"#text": 3, "#comment": 8, "#cdata": 4, "#pi": 7, "#doctype": 10, "#document-fragment": 11},
        km = function (e, t, n) {
            var r = n ? "lastChild" : "firstChild", o = n ? "prev" : "next";
            if (e[r]) return e[r];
            if (e !== t) {
                var i = e[o];
                if (i) return i;
                for (var a = e.parent; a && a !== t; a = a.parent) if (i = a[o]) return i
            }
        }, _m = function (e) {
            var t = "a" === e.name && !e.attr("href") && e.attr("id");
            return e.attr("name") || e.attr("id") && !e.firstChild || e.attr("data-mce-bookmark") || t
        }, Am = (Rm.create = function (e, t) {
            var n = new Rm(e, Em[e] || 1);
            return t && se(t, function (e, t) {
                n.attr(t, e)
            }), n
        }, Rm.prototype.replace = function (e) {
            return e.parent && e.remove(), this.insert(e, this), this.remove(), this
        }, Rm.prototype.attr = function (e, t) {
            var n, r = this;
            if ("string" != typeof e) return e !== undefined && null !== e && se(e, function (e, t) {
                r.attr(t, e)
            }), r;
            if (n = r.attributes) {
                if (t === undefined) return n.map[e];
                if (null === t) {
                    if (e in n.map) {
                        delete n.map[e];
                        for (var o = n.length; o--;) if (n[o].name === e) return n.splice(o, 1), r
                    }
                    return r
                }
                if (e in n.map) {
                    for (o = n.length; o--;) if (n[o].name === e) {
                        n[o].value = t;
                        break
                    }
                } else n.push({name: e, value: t});
                return n.map[e] = t, r
            }
        }, Rm.prototype.clone = function () {
            var e, t = new Rm(this.name, this.type);
            if (e = this.attributes) {
                var n = [];
                n.map = {};
                for (var r = 0, o = e.length; r < o; r++) {
                    var i = e[r];
                    "id" !== i.name && (n[n.length] = {name: i.name, value: i.value}, n.map[i.name] = i.value)
                }
                t.attributes = n
            }
            return t.value = this.value, t.shortEnded = this.shortEnded, t
        }, Rm.prototype.wrap = function (e) {
            return this.parent.insert(e, this), e.append(this), this
        }, Rm.prototype.unwrap = function () {
            for (var e = this.firstChild; e;) {
                var t = e.next;
                this.insert(e, this, !0), e = t
            }
            this.remove()
        }, Rm.prototype.remove = function () {
            var e = this.parent, t = this.next, n = this.prev;
            return e && (e.firstChild === this ? (e.firstChild = t) && (t.prev = null) : n.next = t, e.lastChild === this ? (e.lastChild = n) && (n.next = null) : t.prev = n, this.parent = this.next = this.prev = null), this
        }, Rm.prototype.append = function (e) {
            e.parent && e.remove();
            var t = this.lastChild;
            return t ? ((t.next = e).prev = t, this.lastChild = e) : this.lastChild = this.firstChild = e, e.parent = this, e
        }, Rm.prototype.insert = function (e, t, n) {
            e.parent && e.remove();
            var r = t.parent || this;
            return n ? (t === r.firstChild ? r.firstChild = e : t.prev.next = e, e.prev = t.prev, (e.next = t).prev = e) : (t === r.lastChild ? r.lastChild = e : t.next.prev = e, e.next = t.next, (e.prev = t).next = e), e.parent = r, e
        }, Rm.prototype.getAll = function (e) {
            for (var t = [], n = this.firstChild; n; n = km(n, this)) n.name === e && t.push(n);
            return t
        }, Rm.prototype.empty = function () {
            if (this.firstChild) {
                for (var e = [], t = this.firstChild; t; t = km(t, this)) e.push(t);
                for (var n = e.length; n--;) (t = e[n]).parent = t.firstChild = t.lastChild = t.next = t.prev = null
            }
            return this.firstChild = this.lastChild = null, this
        }, Rm.prototype.isEmpty = function (e, t, n) {
            void 0 === t && (t = {});
            var r = this.firstChild;
            if (_m(this)) return !1;
            if (r) do {
                if (1 === r.type) {
                    if (r.attr("data-mce-bogus")) continue;
                    if (e[r.name]) return !1;
                    if (_m(r)) return !1
                }
                if (8 === r.type) return !1;
                if (3 === r.type && !function (e) {
                    if (zo(e.value)) {
                        var t = e.parent;
                        return !t || "span" === t.name && !t.attr("style") || !/^[ ]+$/.test(e.value)
                    }
                }(r)) return !1;
                if (3 === r.type && r.parent && t[r.parent.name] && zo(r.value)) return !1;
                if (n && n(r)) return !1
            } while (r = km(r, this));
            return !0
        }, Rm.prototype.walk = function (e) {
            return km(this, null, e)
        }, Rm);

    function Rm(e, t) {
        this.name = e, 1 === (this.type = t) && (this.attributes = [], this.attributes.map = {})
    }

    var Tm = function (e, t) {
        return e.replace(t.re, function (e) {
            return he(t.uris, e).getOr(e)
        })
    }, Dm = ["img", "video"], Om = function (e, t, n) {
        return !e.allow_html_data_urls && (/^data:image\//i.test(t) ? (r = e.allow_svg_data_urls, o = n, !(X(r) ? M(Dm, o) : r) && /^data:image\/svg\+xml/i.test(t)) : /^data:/i.test(t));
        var r, o
    }, Bm = function (e, t, n) {
        var r, o, i = 1, a = e.getShortEndedElements(),
            u = /<([!?\/])?([A-Za-z0-9\-_:.]+)(\s(?:[^'">]+(?:"[^"]*"|'[^']*'))*[^"'>]*(?:"[^">]*|'[^'>]*)?|\s*|\/)>/g;
        for (u.lastIndex = r = n; o = u.exec(t);) {
            if (r = u.lastIndex, "/" === o[1]) i--; else if (!o[1]) {
                if (o[2] in a) continue;
                i++
            }
            if (0 === i) break
        }
        return r
    }, Pm = function (W, K) {
        void 0 === K && (K = Ci()), !1 !== (W = W || {}).fix_self_closing && (W.fix_self_closing = !0);
        var X = W.comment ? W.comment : te, Y = W.cdata ? W.cdata : te, G = W.text ? W.text : te,
            J = W.start ? W.start : te, Q = W.end ? W.end : te, Z = W.pi ? W.pi : te, ee = W.doctype ? W.doctype : te,
            n = function (f, e) {
                void 0 === e && (e = "html");
                for (var t, i, n, d, r, o, a, m, u, s, c, l, p, g, h, v, y, b, C, w = f.html, x = 0, S = [], N = 0, E = li.decode, k = _t.makeMap("src,href,data,background,action,formaction,poster,xlink:href"), _ = /((java|vb)script|mhtml):/i, A = "html" === e ? 0 : 1, R = function (e) {
                    for (var t, n = S.length; n-- && S[n].name !== e;) ;
                    if (0 <= n) {
                        for (t = S.length - 1; n <= t; t--) (e = S[t]).valid && Q(e.name);
                        S.length = n
                    }
                }, T = function (e, t) {
                    return G(Tm(e, f), t)
                }, D = function (e) {
                    "" !== e && (">" === e.charAt(0) && (e = " " + e), W.allow_conditional_comments || "[if" !== e.substr(0, 3).toLowerCase() || (e = " " + e), X(Tm(e, f)))
                }, O = function (e, t) {
                    var n = e || "", r = !qe(n, "--"), o = function (e, t, n) {
                        void 0 === n && (n = 0);
                        var r = e.toLowerCase();
                        if (-1 !== r.indexOf("[if ", n) && (u = n, /^\s*\[if [\w\W]+\]>.*<!\[endif\](--!?)?>/.test(r.substr(u)))) {
                            var o = r.indexOf("[endif]", n);
                            return r.indexOf(">", o)
                        }
                        if (t) {
                            var i = r.indexOf(">", n);
                            return -1 !== i ? i : r.length
                        }
                        var a = /--!?>/g;
                        a.lastIndex = n;
                        var u, s = a.exec(e);
                        return s ? s.index + s[0].length : r.length
                    }(w, r, t);
                    return e = w.substr(t, o - t), D(r ? n + e : e), o + 1
                }, B = function (e, t, n, r, o) {
                    var i, a, u, s;
                    if (t = t.toLowerCase(), u = t in F ? t : E(n || r || o || ""), n = Tm(u, f), U && !m && !1 == (0 === (s = t).indexOf("data-") || 0 === s.indexOf("aria-"))) {
                        if (!(i = g[t]) && h) {
                            for (a = h.length; a-- && !(i = h[a]).pattern.test(t);) ;
                            -1 === a && (i = null)
                        }
                        if (!i) return;
                        if (i.validValues && !(n in i.validValues)) return
                    }
                    if (k[t] && !W.allow_script_urls) {
                        var c = n.replace(/[\s\u0000-\u001F]+/g, "");
                        try {
                            c = decodeURIComponent(c)
                        } catch (l) {
                            c = unescape(c)
                        }
                        if (_.test(c)) return;
                        if (Om(W, c, e)) return
                    }
                    m && (t in k || 0 === t.indexOf("on")) || (d.map[t] = n, d.push({name: t, value: n}))
                }, P = new RegExp("<(?:(?:!--([\\w\\W]*?)--!?>)|(?:!\\[CDATA\\[([\\w\\W]*?)\\]\\]>)|(?:![Dd][Oo][Cc][Tt][Yy][Pp][Ee]([\\w\\W]*?)>)|(?:!(--)?)|(?:\\?([^\\s\\/<>]+) ?([\\w\\W]*?)[?/]>)|(?:\\/([A-Za-z][A-Za-z0-9\\-_\\:\\.]*)>)|(?:([A-Za-z][A-Za-z0-9\\-_:.]*)(\\s(?:[^'\">]+(?:\"[^\"]*\"|'[^']*'))*[^\"'>]*(?:\"[^\">]*|'[^'>]*)?|\\s*|\\/)>))", "g"), L = /([\w:\-]+)(?:\s*=\s*(?:(?:\"((?:[^\"])*)\")|(?:\'((?:[^\'])*)\')|([^>\s]+)))?/g, I = K.getShortEndedElements(), M = W.self_closing_elements || K.getSelfClosingElements(), F = K.getBoolAttrs(), U = W.validate, z = W.remove_internals, j = W.fix_self_closing, H = K.getSpecialElements(), V = w + ">"; t = P.exec(V);) {
                    var q = t[0];
                    if (x < t.index && T(E(w.substr(x, t.index - x))), i = t[7]) ":" === (i = i.toLowerCase()).charAt(0) && (i = i.substr(1)), R(i); else if (i = t[8]) {
                        if (t.index + q.length > w.length) {
                            T(E(w.substr(t.index))), x = t.index + q.length;
                            continue
                        }
                        ":" === (i = i.toLowerCase()).charAt(0) && (i = i.substr(1)), u = i in I, j && M[i] && 0 < S.length && S[S.length - 1].name === i && R(i);
                        var $ = function (e, t) {
                            var n = e.exec(t);
                            if (n) {
                                var r = n[1], o = n[2];
                                return "string" == typeof r && "data-mce-bogus" === r.toLowerCase() ? o : null
                            }
                            return null
                        }(L, t[9]);
                        if (null !== $) {
                            if ("all" === $) {
                                x = Bm(K, w, P.lastIndex), P.lastIndex = x;
                                continue
                            }
                            c = !1
                        }
                        if (!U || (s = K.getElementRule(i))) {
                            if (c = !0, U && (g = s.attributes, h = s.attributePatterns), (p = t[9]) ? ((m = -1 !== p.indexOf("data-mce-type")) && z && (c = !1), (d = []).map = {}, p.replace(L, function (e, t, n, r, o) {
                                return B(i, t, n, r, o), ""
                            })) : (d = []).map = {}, U && !m) {
                                if (v = s.attributesRequired, y = s.attributesDefault, b = s.attributesForced, s.removeEmptyAttrs && !d.length && (c = !1), b) for (r = b.length; r--;) a = (l = b[r]).name, "{$uid}" === (C = l.value) && (C = "mce_" + N++), d.map[a] = C, d.push({
                                    name: a,
                                    value: C
                                });
                                if (y) for (r = y.length; r--;) (a = (l = y[r]).name) in d.map || ("{$uid}" === (C = l.value) && (C = "mce_" + N++), d.map[a] = C, d.push({
                                    name: a,
                                    value: C
                                }));
                                if (v) {
                                    for (r = v.length; r-- && !(v[r] in d.map);) ;
                                    -1 === r && (c = !1)
                                }
                                if (l = d.map["data-mce-bogus"]) {
                                    if ("all" === l) {
                                        x = Bm(K, w, P.lastIndex), P.lastIndex = x;
                                        continue
                                    }
                                    c = !1
                                }
                            }
                            c && J(i, d, u)
                        } else c = !1;
                        if (n = H[i]) {
                            n.lastIndex = x = t.index + q.length, x = (t = n.exec(w)) ? (c && (o = w.substr(x, t.index - x)), t.index + t[0].length) : (o = w.substr(x), w.length), c && (0 < o.length && T(o, !0), Q(i)), P.lastIndex = x;
                            continue
                        }
                        u || (p && p.indexOf("/") === p.length - 1 ? c && Q(i) : S.push({name: i, valid: c}))
                    } else if (i = t[1]) D(i); else if (i = t[2]) {
                        if (!(1 == A || W.preserve_cdata || 0 < S.length && K.isValidChild(S[S.length - 1].name, "#cdata"))) {
                            x = O("", t.index + 2), P.lastIndex = x;
                            continue
                        }
                        Y(i)
                    } else if (i = t[3]) ee(i); else {
                        if ((i = t[4]) || "<!" === q) {
                            x = O(i, t.index + q.length), P.lastIndex = x;
                            continue
                        }
                        if (i = t[5]) {
                            if (1 != A) {
                                x = O("?", t.index + 2), P.lastIndex = x;
                                continue
                            }
                            Z(i, t[6])
                        }
                    }
                    x = t.index + q.length
                }
                for (x < w.length && T(E(w.substr(x))), r = S.length - 1; 0 <= r; r--) (i = S[r]).valid && Q(i.name)
            };
        return {
            parse: function (e, t) {
                void 0 === t && (t = "html"), n(function (e) {
                    for (var t, n = /data:[^;]+;base64,([a-z0-9\+\/=]+)/gi, r = [], o = {}, i = Zu("img"), a = 0, u = 0; t = n.exec(e);) {
                        var s = t[0], c = i + "_" + u++;
                        o[c] = s, a < t.index && r.push(e.substr(a, t.index - a)), r.push(c), a = t.index + s.length
                    }
                    var l = new RegExp(i + "_[0-9]+", "g");
                    return 0 === a ? {
                        prefix: i,
                        uris: o,
                        html: e,
                        re: l
                    } : (a < e.length && r.push(e.substr(a)), {prefix: i, uris: o, html: r.join(""), re: l})
                }(e), t)
            }
        }
    };
    Pm.findEndTag = Bm;
    var Lm, Im, Mm = function (e, t) {
            var n, r, o, i, a, u, s, c = t, l = /<(\w+) [^>]*data-mce-bogus="all"[^>]*>/g, f = e.schema;
            a = e.getTempAttrs(), u = c, s = new RegExp(["\\s?(" + a.join("|") + ')="[^"]+"'].join("|"), "gi"), c = u.replace(s, "");
            for (var d = f.getShortEndedElements(); i = l.exec(c);) r = l.lastIndex, o = i[0].length, n = d[i[1]] ? r : Pm.findEndTag(f, c, r), c = c.substring(0, r - o) + c.substring(n), l.lastIndex = r - o;
            return go(c)
        }, Fm = Mm, Um = function (e, t, n, r) {
            var o, i, a, u, s;
            return t.format = n, t.get = !0, t.getInner = !0, t.no_events || e.fire("BeforeGetContent", t), o = "raw" === t.format ? _t.trim(Fm(e.serializer, r.innerHTML)) : "text" === t.format ? e.dom.isEmpty(r) ? "" : go(r.innerText || r.textContent) : "tree" === t.format ? e.serializer.serialize(r, t) : (a = (i = e).serializer.serialize(r, t), u = lc(i), s = new RegExp("^(<" + u + "[^>]*>(&nbsp;|&#160;|\\s|\xa0|<br \\/>|)<\\/" + u + ">[\r\n]*|<br \\/>[\r\n]*)$"), a.replace(s, "")), M(["text", "tree"], t.format) || co(Rt.fromDom(r)) ? t.content = o : t.content = _t.trim(o), t.no_events || e.fire("GetContent", t), t.content
        }, zm = _t.each, jm = function (o) {
            return {
                compare: function (e, t) {
                    if (e.nodeName !== t.nodeName) return !1;
                    var n = function (n) {
                        var r = {};
                        return zm(o.getAttribs(n), function (e) {
                            var t = e.nodeName.toLowerCase();
                            0 !== t.indexOf("_") && "style" !== t && 0 !== t.indexOf("data-") && (r[t] = o.getAttrib(n, t))
                        }), r
                    }, r = function (e, t) {
                        var n, r;
                        for (r in e) if (e.hasOwnProperty(r)) {
                            if (void 0 === (n = t[r])) return !1;
                            if (e[r] !== n) return !1;
                            delete t[r]
                        }
                        for (r in t) if (t.hasOwnProperty(r)) return !1;
                        return !0
                    };
                    return !!r(n(e), n(t)) && (!!r(o.parseStyle(o.getAttrib(e, "style")), o.parseStyle(o.getAttrib(t, "style"))) && (!Xl(e) && !Xl(t)))
                }
            }
        }, Hm = _t.makeMap, Vm = function (e) {
            var u = [], s = (e = e || {}).indent, c = Hm(e.indent_before || ""), l = Hm(e.indent_after || ""),
                f = li.getEncodeFunc(e.entity_encoding || "raw", e.entities), d = "html" === e.element_format;
            return {
                start: function (e, t, n) {
                    var r, o, i, a;
                    if (s && c[e] && 0 < u.length && 0 < (a = u[u.length - 1]).length && "\n" !== a && u.push("\n"), u.push("<", e), t) for (r = 0, o = t.length; r < o; r++) i = t[r], u.push(" ", i.name, '="', f(i.value, !0), '"');
                    u[u.length] = !n || d ? ">" : " />", n && s && l[e] && 0 < u.length && 0 < (a = u[u.length - 1]).length && "\n" !== a && u.push("\n")
                }, end: function (e) {
                    var t;
                    u.push("</", e, ">"), s && l[e] && 0 < u.length && 0 < (t = u[u.length - 1]).length && "\n" !== t && u.push("\n")
                }, text: function (e, t) {
                    0 < e.length && (u[u.length] = t ? e : f(e))
                }, cdata: function (e) {
                    u.push("<![CDATA[", e, "]]>")
                }, comment: function (e) {
                    u.push("\x3c!--", e, "--\x3e")
                }, pi: function (e, t) {
                    t ? u.push("<?", e, " ", f(t), "?>") : u.push("<?", e, "?>"), s && u.push("\n")
                }, doctype: function (e) {
                    u.push("<!DOCTYPE", e, ">", s ? "\n" : "")
                }, reset: function () {
                    u.length = 0
                }, getContent: function () {
                    return u.join("").replace(/\n$/, "")
                }
            }
        }, qm = function (t, p) {
            void 0 === p && (p = Ci());
            var g = Vm(t);
            (t = t || {}).validate = !("validate" in t) || t.validate;
            return {
                serialize: function (e) {
                    var f = t.validate, d = {
                        3: function (e) {
                            g.text(e.value, e.raw)
                        }, 8: function (e) {
                            g.comment(e.value)
                        }, 7: function (e) {
                            g.pi(e.name, e.value)
                        }, 10: function (e) {
                            g.doctype(e.value)
                        }, 4: function (e) {
                            g.cdata(e.value)
                        }, 11: function (e) {
                            if (e = e.firstChild) for (; m(e), e = e.next;) ;
                        }
                    };
                    g.reset();
                    var m = function (e) {
                        var t, n, r, o, i, a, u, s, c, l = d[e.type];
                        if (l) l(e); else {
                            if (t = e.name, n = e.shortEnded, r = e.attributes, f && r && 1 < r.length && ((a = []).map = {}, c = p.getElementRule(e.name))) {
                                for (u = 0, s = c.attributesOrder.length; u < s; u++) (o = c.attributesOrder[u]) in r.map && (i = r.map[o], a.map[o] = i, a.push({
                                    name: o,
                                    value: i
                                }));
                                for (u = 0, s = r.length; u < s; u++) (o = r[u].name) in a.map || (i = r.map[o], a.map[o] = i, a.push({
                                    name: o,
                                    value: i
                                }));
                                r = a
                            }
                            if (g.start(e.name, r, n), !n) {
                                if (e = e.firstChild) for (; m(e), e = e.next;) ;
                                g.end(t)
                            }
                        }
                    };
                    return 1 !== e.type || t.inner ? d[11](e) : m(e), g.getContent()
                }
            }
        }, $m = function (n, r, o) {
            return U.from(o.container()).filter(Mn).exists(function (e) {
                var t = n ? 0 : -1;
                return r(e.data.charAt(o.offset() + t))
            })
        }, Wm = N($m, !0, Gl), Km = N($m, !1, Gl), Xm = function (e) {
            var t = e.container();
            return Mn(t) && (0 === t.data.length || po(t.data) && Gf.isBookmarkNode(t.parentNode))
        }, Ym = function (t, n) {
            return function (e) {
                return U.from(Zc(t ? 0 : -1, e)).filter(n).isSome()
            }
        }, Gm = function (e) {
            return Hn(e) && "block" === tr(Rt.fromDom(e), "display")
        }, Jm = function (e) {
            return qn(e) && !(Rn(t = e) && "all" === t.getAttribute("data-mce-bogus"));
            var t
        }, Qm = Ym(!0, Gm), Zm = Ym(!1, Gm), ep = Ym(!0, Wn), tp = Ym(!1, Wn), np = Ym(!0, Pn), rp = Ym(!1, Pn),
        op = Ym(!0, Jm), ip = Ym(!1, Jm), ap = function (e) {
            var t = qu(e, "br"), n = H(function (e) {
                for (var t = [], n = e.dom; n;) t.push(Rt.fromDom(n)), n = n.lastChild;
                return t
            }(e).slice(-1), ro);
            t.length === n.length && Y(n, gn)
        }, up = function (e) {
            pn(e), dn(e, Rt.fromHtml('<br data-mce-bogus="1">'))
        }, sp = function (n) {
            en(n).each(function (t) {
                Kt(t).each(function (e) {
                    to(n) && ro(t) && to(e) && gn(t)
                })
            })
        }, cp = function (e, t, n) {
            return Lt(t, e) ? function (e, t) {
                for (var n = D(t) ? t : b, r = e.dom, o = []; null !== r.parentNode && r.parentNode !== undefined;) {
                    var i = r.parentNode, a = Rt.fromDom(i);
                    if (o.push(a), !0 === n(a)) break;
                    r = i
                }
                return o
            }(e, function (e) {
                return n(e) || Bt(e, t)
            }).slice(0, -1) : []
        }, lp = function (e, t) {
            return cp(e, t, b)
        }, fp = function (e, t) {
            return [e].concat(lp(e, t))
        }, dp = function (e, t, n) {
            return Dl(e, t, n, Xm)
        }, mp = function (e, t) {
            return W(fp(Rt.fromDom(t.container()), e), to)
        }, pp = function (e, n, r) {
            return dp(e, n.dom, r).forall(function (t) {
                return mp(n, r).fold(function () {
                    return !1 === Qc(t, r, n.dom)
                }, function (e) {
                    return !1 === Qc(t, r, n.dom) && Lt(e, Rt.fromDom(t.container()))
                })
            })
        }, gp = function (t, n, r) {
            return mp(n, r).fold(function () {
                return dp(t, n.dom, r).forall(function (e) {
                    return !1 === Qc(e, r, n.dom)
                })
            }, function (e) {
                return dp(t, e.dom, r).isNone()
            })
        }, hp = N(gp, !1), vp = N(gp, !0), yp = N(pp, !1), bp = N(pp, !0), Cp = function (e) {
            return ul(e).exists(ro)
        }, wp = function (e, t, n) {
            var r = H(fp(Rt.fromDom(n.container()), t), to), o = re(r).getOr(t);
            return Rl(e, o.dom, n).filter(Cp)
        }, xp = function (e, t) {
            return ul(t).exists(ro) || wp(!0, e, t).isSome()
        }, Sp = function (e, t) {
            return n = t, U.from(n.getNode(!0)).map(Rt.fromDom).exists(ro) || wp(!1, e, t).isSome();
            var n
        }, Np = N(wp, !1), Ep = N(wp, !0), kp = function (e) {
            return Is.isTextPosition(e) && !e.isAtStart() && !e.isAtEnd()
        }, _p = function (e, t) {
            var n = H(fp(Rt.fromDom(t.container()), e), to);
            return re(n).getOr(e)
        }, Ap = function (e, t) {
            return kp(t) ? Km(t) : Km(t) || Pl(_p(e, t).dom, t).exists(Km)
        }, Rp = function (e, t) {
            return kp(t) ? Wm(t) : Wm(t) || Bl(_p(e, t).dom, t).exists(Wm)
        }, Tp = function (e) {
            return ul(e).bind(function (e) {
                return Dr(e, Ut)
            }).exists(function (e) {
                return t = tr(e, "white-space"), M(["pre", "pre-wrap"], t);
                var t
            })
        }, Dp = function (e, t) {
            return r = t, Pl(e.dom, r).isNone() || (n = t, Bl(e.dom, n).isNone()) || hp(e, t) || vp(e, t) || Sp(e, t) || xp(e, t);
            var n, r
        }, Op = function (e, t) {
            return !Tp(t) && (hp(e, t) || yp(e, t) || Sp(e, t) || Ap(e, t))
        }, Bp = function (e, t) {
            return !Tp(t) && (vp(e, t) || bp(e, t) || xp(e, t) || Rp(e, t))
        }, Pp = function (e, t) {
            return Op(e, t) || Bp(e, (r = (n = t).container(), o = n.offset(), Mn(r) && o < r.data.length ? Is(r, o + 1) : n));
            var n, r, o
        }, Lp = function (e, t) {
            return Yl(e.charAt(t))
        }, Ip = function (e) {
            var t = e.container();
            return Mn(t) && Ve(t.data, fo)
        }, Mp = function (e) {
            var n, t = e.data, r = (n = t.split(""), z(n, function (e, t) {
                return Yl(e) && 0 < t && t < n.length - 1 && Jl(n[t - 1]) && Jl(n[t + 1]) ? " " : e
            }).join(""));
            return r !== t && (e.data = r, !0)
        }, Fp = function (l, e) {
            return U.some(e).filter(Ip).bind(function (e) {
                var t, n, r, o, i, a, u, s, c = e.container();
                return (i = l, u = (a = c).data, s = Is(a, 0), !(!Lp(u, 0) || Pp(i, s) || (a.data = " " + u.slice(1), 0)) || Mp(c) || (t = l, r = (n = c).data, o = Is(n, r.length - 1), !(!Lp(r, r.length - 1) || Pp(t, o) || (n.data = r.slice(0, -1) + " ", 0)))) ? U.some(e) : U.none()
            })
        }, Up = function (t) {
            var e = Rt.fromDom(t.getBody());
            t.selection.isCollapsed() && Fp(e, Is.fromRangeStart(t.selection.getRng())).each(function (e) {
                t.selection.setRng(e.toRange())
            })
        }, zp = function (e, t, n) {
            var r, o, i, a, u, s, c, l;
            0 !== n && (r = Rt.fromDom(e), o = Tr(r, to).getOr(r), i = e.data.slice(t, t + n), a = t + n >= e.data.length && Bp(o, Is(e, e.data.length)), u = 0 === t && Op(o, Is(e, 0)), e.replaceData(t, n, (c = u, l = a, $(s = i, function (e, t) {
                return Gl(t) || Yl(t) ? e.previousCharIsSpace || "" === e.str && c || e.str.length === s.length - 1 && l ? {
                    previousCharIsSpace: !1,
                    str: e.str + fo
                } : {previousCharIsSpace: !0, str: e.str + " "} : {previousCharIsSpace: !1, str: e.str + t}
            }, {previousCharIsSpace: !1, str: ""}).str)))
        }, jp = function (e, t) {
            var n = e.data.slice(t), r = n.length - Ke(n).length;
            return zp(e, t, r)
        }, Hp = function (e, t) {
            var n = e.data.slice(0, t), r = n.length - Xe(n).length;
            return zp(e, t - r, r)
        }, Vp = function (e, t, n, r) {
            void 0 === r && (r = !0);
            var o = Xe(e.data).length, i = r ? e : t, a = r ? t : e;
            return r ? i.appendData(a.data) : i.insertData(0, a.data), gn(Rt.fromDom(a)), n && jp(i, o), i
        }, qp = function (e, t) {
            return r = e, o = (n = t).container(), i = n.offset(), !1 === Is.isTextPosition(n) && o === r.parentNode && i > Is.before(r).offset() ? Is(t.container(), t.offset() - 1) : t;
            var n, r, o, i
        }, $p = function (e) {
            return Io(e.previousSibling) ? U.some((t = e.previousSibling, Mn(t) ? Is(t, t.data.length) : Is.after(t))) : e.previousSibling ? Il(e.previousSibling) : U.none();
            var t
        }, Wp = function (e) {
            return Io(e.nextSibling) ? U.some((t = e.nextSibling, Mn(t) ? Is(t, 0) : Is.before(t))) : e.nextSibling ? Ll(e.nextSibling) : U.none();
            var t
        }, Kp = function (r, o) {
            return $p(o).orThunk(function () {
                return Wp(o)
            }).orThunk(function () {
                return e = r, t = o, n = Is.before(t.previousSibling ? t.previousSibling : t.parentNode), Pl(e, n).fold(function () {
                    return Bl(e, Is.after(t))
                }, U.some);
                var e, t, n
            })
        }, Xp = function (n, r) {
            return Wp(r).orThunk(function () {
                return $p(r)
            }).orThunk(function () {
                return t = r, Bl(e = n, Is.after(t)).fold(function () {
                    return Pl(e, Is.before(t))
                }, U.some);
                var e, t
            })
        }, Yp = function (e, t, n) {
            return (e ? Xp : Kp)(t, n).map(N(qp, n))
        }, Gp = function (t, n, e) {
            e.fold(function () {
                t.focus()
            }, function (e) {
                t.selection.setRng(e.toRange(), n)
            })
        }, Jp = function (e, t) {
            return t && ve(e.schema.getBlockElements(), It(t))
        }, Qp = function (e) {
            if (Wo(e)) {
                var t = Rt.fromHtml('<br data-mce-bogus="1">');
                return pn(e), dn(e, t), U.some(Is.before(t.dom))
            }
            return U.none()
        }, Zp = function (e, t, a) {
            var n, r, o, i, u = Kt(e).filter(zt), s = Xt(e).filter(zt);
            return gn(e), r = s, o = t, i = function (e, t, n) {
                var r = e.dom, o = t.dom, i = r.data.length;
                return Vp(r, o, a), n.container() === o ? Is(r, i) : n
            }, ((n = u).isSome() && r.isSome() && o.isSome() ? U.some(i(n.getOrDie(), r.getOrDie(), o.getOrDie())) : U.none()).orThunk(function () {
                return a && (u.each(function (e) {
                    return Hp(e.dom, e.dom.length)
                }), s.each(function (e) {
                    return jp(e.dom, 0)
                })), t
            })
        }, eg = function (t, n, e, r) {
            void 0 === r && (r = !0);
            var o, i, a = Yp(n, t.getBody(), e.dom), u = Tr(e, N(Jp, t), (o = t.getBody(), function (e) {
                return e.dom === o
            })), s = Zp(e, a, (i = e, ve(t.schema.getTextInlineElements(), It(i))));
            t.dom.isEmpty(t.getBody()) ? (t.setContent(""), t.selection.setCursorLocation()) : u.bind(Qp).fold(function () {
                r && Gp(t, n, s)
            }, function (e) {
                r && Gp(t, n, U.some(e))
            })
        }, tg = function (e, t) {
            return {start: e, end: t}
        }, ng = wr([{removeTable: ["element"]}, {emptyCells: ["cells"]}, {deleteCellSelection: ["rng", "cell"]}]),
        rg = function (e, t) {
            return Lr(Rt.fromDom(e), "td,th", t)
        }, og = function (e, t) {
            return Br(e, "table", t)
        }, ig = function (e) {
            return !Bt(e.start, e.end)
        }, ag = function (e, t) {
            return og(e.start, t).bind(function (r) {
                return og(e.end, t).bind(function (e) {
                    return t = Bt(r, e), n = r, t ? U.some(n) : U.none();
                    var t, n
                })
            })
        }, ug = function (e) {
            return qu(e, "td,th")
        }, sg = function (r, e) {
            var t = rg(e.startContainer, r), n = rg(e.endContainer, r);
            return e.collapsed ? U.none() : as(t, n, tg).fold(function () {
                return t.fold(function () {
                    return n.bind(function (t) {
                        return og(t, r).bind(function (e) {
                            return re(ug(e)).map(function (e) {
                                return tg(e, t)
                            })
                        })
                    })
                }, function (t) {
                    return og(t, r).bind(function (e) {
                        return oe(ug(e)).map(function (e) {
                            return tg(t, e)
                        })
                    })
                })
            }, function (e) {
                return cg(r, e) ? U.none() : (n = r, og((t = e).start, n).bind(function (e) {
                    return oe(ug(e)).map(function (e) {
                        return tg(t.start, e)
                    })
                }));
                var t, n
            })
        }, cg = function (e, t) {
            return ag(t, e).isSome()
        }, lg = function (e, t, n) {
            return e.filter(function (e) {
                return ig(e) && cg(n, e)
            }).orThunk(function () {
                return sg(n, t)
            }).bind(function (e) {
                return ag(t = e, n).map(function (e) {
                    return {rng: t, table: e, cells: ug(e)}
                });
                var t
            })
        }, fg = function (e, t) {
            return G(e, function (e) {
                return Bt(e, t)
            })
        }, dg = function (e, r, o) {
            return e.filter(function (e) {
                return n = o, !ig(t = e) && ag(t, n).exists(function (e) {
                    var t = e.dom.rows;
                    return 1 === t.length && 1 === t[0].cells.length
                }) && Ff(e.start, r);
                var t, n
            }).map(function (e) {
                return e.start
            })
        }, mg = function (n) {
            return as(fg((r = n).cells, r.rng.start), fg(r.cells, r.rng.end), function (e, t) {
                return r.cells.slice(e, t + 1)
            }).map(function (e) {
                var t = n.cells;
                return e.length === t.length ? ng.removeTable(n.table) : ng.emptyCells(e)
            });
            var r
        }, pg = function (e, t) {
            var n, r, o, i, a, u = (n = e, function (e) {
                return Bt(n, e)
            }), s = (o = u, i = rg((r = t).startContainer, o), a = rg(r.endContainer, o), as(i, a, tg));
            return dg(s, t, u).map(function (e) {
                return ng.deleteCellSelection(t, e)
            }).orThunk(function () {
                return lg(s, t, u).bind(mg)
            })
        }, gg = function (e) {
            var t;
            return (8 === Mt(t = e) || "#comment" === It(t) ? Kt : en)(e).bind(gg).orThunk(function () {
                return U.some(e)
            })
        }, hg = function (e, t) {
            return Y(t, up), e.selection.setCursorLocation(t[0].dom, 0), !0
        }, vg = function (e, t, n) {
            t.deleteContents();
            var r, o, i = gg(n).getOr(n), a = Rt.fromDom(e.dom.getParent(i.dom, e.dom.isBlock));
            return Wo(a) && (up(a), e.selection.setCursorLocation(a.dom, 0)), Bt(n, a) || (r = Wt(a).is(n) ? [] : Wt(o = a).map(Jt).map(function (e) {
                return H(e, function (e) {
                    return !Bt(o, e)
                })
            }).getOr([]), Y(r.concat(Jt(n)), function (e) {
                Bt(e, a) || Lt(e, a) || gn(e)
            })), !0
        }, yg = function (e, t) {
            return eg(e, !1, t), !0
        }, bg = function (n, e, r, t) {
            return wg(e, t).fold(function () {
                return t = n, pg(e, r).map(function (e) {
                    return e.fold(N(yg, t), N(hg, t), N(vg, t))
                });
                var t
            }, function (e) {
                return xg(n, e)
            }).getOr(!1)
        }, Cg = function (e, t) {
            return W(fp(t, e), so)
        }, wg = function (e, t) {
            return W(fp(t, e), function (e) {
                return "caption" === It(e)
            })
        }, xg = function (e, t) {
            return up(t), e.selection.setCursorLocation(t.dom, 0), U.some(!0)
        }, Sg = function (u, s, c, l, f) {
            return Tl(c, u.getBody(), f).bind(function (e) {
                return o = c, i = f, a = e, Ll((r = l).dom).bind(function (t) {
                    return Il(r.dom).map(function (e) {
                        return o ? i.isEqual(t) && a.isEqual(e) : i.isEqual(e) && a.isEqual(t)
                    })
                }).getOr(!0) ? xg(u, l) : (t = l, n = e, wg(s, Rt.fromDom(n.getNode())).map(function (e) {
                    return !1 === Bt(e, t)
                }));
                var t, n, r, o, i, a
            }).or(U.some(!0))
        }, Ng = function (o, i, a, e) {
            var u = Is.fromRangeStart(o.selection.getRng());
            return Cg(a, e).bind(function (e) {
                return Wo(e) ? xg(o, e) : (t = a, n = e, r = u, Tl(i, o.getBody(), r).bind(function (e) {
                    return Cg(t, Rt.fromDom(e.getNode())).map(function (e) {
                        return !1 === Bt(e, n)
                    })
                }));
                var t, n, r
            }).getOr(!1)
        }, Eg = function (e, t) {
            return (e ? np : rp)(t)
        }, kg = function (a, u, r) {
            var s = Rt.fromDom(a.getBody());
            return wg(s, r).fold(function () {
                return Ng(a, u, s, r) || (e = a, t = u, n = Is.fromRangeStart(e.selection.getRng()), Eg(t, n) || Rl(t, e.getBody(), n).exists(function (e) {
                    return Eg(t, e)
                }));
                var e, t, n
            }, function (e) {
                return t = a, n = u, r = s, o = e, i = Is.fromRangeStart(t.selection.getRng()), (Wo(o) ? xg(t, o) : Sg(t, r, n, o, i)).getOr(!1);
                var t, n, r, o, i
            })
        }, _g = function (e, t) {
            var n, r, o, i, a, u = Rt.fromDom(e.selection.getStart(!0)), s = Lf(e);
            return e.selection.isCollapsed() && 0 === s.length ? kg(e, t, u) : (n = e, r = u, o = Rt.fromDom(n.getBody()), i = n.selection.getRng(), 0 !== (a = Lf(n)).length ? hg(n, a) : bg(n, o, i, r))
        }, Ag = function (a) {
            var u = Is.fromRangeStart(a), s = Is.fromRangeEnd(a), c = a.commonAncestorContainer;
            return Rl(!1, c, s).map(function (e) {
                return !Qc(u, s, c) && Qc(u, e, c) ? (t = u.container(), n = u.offset(), r = e.container(), o = e.offset(), (i = document.createRange()).setStart(t, n), i.setEnd(r, o), i) : a;
                var t, n, r, o, i
            }).getOr(a)
        }, Rg = function (e) {
            return e.collapsed ? e : Ag(e)
        }, Tg = function (e, t) {
            var n, r;
            return e.getBlockElements()[t.name] && ((r = t).firstChild && r.firstChild === r.lastChild) && ("br" === (n = t.firstChild).name || n.value === fo)
        }, Dg = function (e, t) {
            var n, r, o, i = t.firstChild, a = t.lastChild;
            return i && "meta" === i.name && (i = i.next), a && "mce_marker" === a.attr("id") && (a = a.prev), r = a, o = (n = e).getNonEmptyElements(), r && (r.isEmpty(o) || Tg(n, r)) && (a = a.prev), !(!i || i !== a) && ("ul" === i.name || "ol" === i.name)
        }, Og = function (e) {
            return e && e.firstChild && e.firstChild === e.lastChild && ((t = e.firstChild).data === fo || jn(t));
            var t
        }, Bg = function (e) {
            return 0 < e.length && (!(t = e[e.length - 1]).firstChild || Og(t)) ? e.slice(0, -1) : e;
            var t
        }, Pg = function (e, t) {
            var n = e.getParent(t, e.isBlock);
            return n && "LI" === n.nodeName ? n : null
        }, Lg = function (e, t) {
            var n = Is.after(e), r = Nl(t).prev(n);
            return r ? r.toRange() : null
        }, Ig = function (t, e, n) {
            var r, o, i, a, u = t.parentNode;
            return _t.each(e, function (e) {
                u.insertBefore(e, t)
            }), r = t, o = n, i = Is.before(r), (a = Nl(o).next(i)) ? a.toRange() : null
        }, Mg = function (e, o, i, t) {
            var n, r, a, u, s, c, l, f, d, m, p, g, h, v, y, b, C, w, x, S,
                N = (n = o, r = t, c = e.serialize(r), l = n.createFragment(c), u = (a = l).firstChild, s = a.lastChild, u && "META" === u.nodeName && u.parentNode.removeChild(u), s && "mce_marker" === s.id && s.parentNode.removeChild(s), a),
                E = Pg(o, i.startContainer), k = Bg((f = N.firstChild, _t.grep(f.childNodes, function (e) {
                    return "LI" === e.nodeName
                }))), _ = o.getRoot(), A = function (e) {
                    var t = Is.fromRangeStart(i), n = Nl(o.getRoot()), r = 1 === e ? n.prev(t) : n.next(t);
                    return !r || Pg(o, r.getNode()) !== E
                };
            return A(1) ? Ig(E, k, _) : A(2) ? (d = E, m = k, p = _, o.insertAfter(m.reverse(), d), Lg(m[0], p)) : (h = k, v = _, y = g = E, C = (b = i).cloneRange(), w = b.cloneRange(), C.setStartBefore(y), w.setEndAfter(y), x = [C.cloneContents(), w.cloneContents()], (S = g.parentNode).insertBefore(x[0], g), _t.each(h, function (e) {
                S.insertBefore(e, g)
            }), S.insertBefore(x[1], g), S.removeChild(g), Lg(h[h.length - 1], v))
        }, Fg = $n, Ug = function (e) {
            var t = e.dom, n = Rg(e.selection.getRng());
            e.selection.setRng(n);
            var r, o, i, a = t.getParent(n.startContainer, Fg);
            r = t, o = n, null !== (i = a) && i === r.getParent(o.endContainer, Fg) && Ff(Rt.fromDom(i), o) ? vg(e, n, Rt.fromDom(a)) : e.getDoc().execCommand("Delete", !1, null)
        }, zg = function (e, t, n) {
            var r, o, i, a, u, s, c, l, f, d = e.selection, m = e.dom;
            /^ | $/.test(t) && (s = m, c = d.getRng(), l = t, f = Rt.fromDom(s.getRoot()), l = Op(f, Is.fromRangeStart(c)) ? l.replace(/^ /, "&nbsp;") : l.replace(/^&nbsp;/, " "), t = l = Bp(f, Is.fromRangeEnd(c)) ? l.replace(/(&nbsp;| )(<br( \/)>)?$/, "&nbsp;") : l.replace(/&nbsp;(<br( \/)?>)?$/, " "));
            var p = e.parser, g = n.merge, h = qm({validate: e.getParam("validate")}, e.schema),
                v = '<span id="mce_marker" data-mce-type="bookmark">&#xFEFF;</span>',
                y = {content: t, format: "html", selection: !0, paste: n.paste};
            if ((y = e.fire("BeforeSetContent", y)).isDefaultPrevented()) e.fire("SetContent", {
                content: y.content,
                format: "html",
                selection: !0,
                paste: n.paste
            }); else {
                -1 === (t = y.content).indexOf("{$caret}") && (t += "{$caret}"), t = t.replace(/\{\$caret\}/, v);
                var b, C, w = (a = d.getRng()).startContainer || (a.parentElement ? a.parentElement() : null),
                    x = e.getBody();
                w === x && d.isCollapsed() && m.isBlock(x.firstChild) && (b = e, (C = x.firstChild) && !b.schema.getShortEndedElements()[C.nodeName]) && m.isEmpty(x.firstChild) && ((a = m.createRng()).setStart(x.firstChild, 0), a.setEnd(x.firstChild, 0), d.setRng(a)), d.isCollapsed() || Ug(e);
                var S, N, E, k, _, A, R, T, D, O, B, P, L, I,
                    M = {context: (r = d.getNode()).nodeName.toLowerCase(), data: n.data, insert: !0}, F = p.parse(t, M);
                if (!0 === n.paste && Dg(e.schema, F) && Pg(m, r)) return a = Mg(h, m, d.getRng(), F), d.setRng(a), void e.fire("SetContent", y);
                if (!function (e) {
                    for (var t = e; t = t.walk();) 1 === t.type && t.attr("data-mce-fragment", "1")
                }(F), "mce_marker" === (u = F.lastChild).attr("id")) for (u = (i = u).prev; u; u = u.walk(!0)) if (3 === u.type || !m.isBlock(u.name)) {
                    e.schema.isValidChild(u.parent.name, "span") && u.parent.insert(i, u, "br" === u.name);
                    break
                }
                if (e._selectionOverrides.showBlockCaretContainer(r), M.invalid) {
                    for (e.selection.setContent(v), r = d.getNode(), o = e.getBody(), 9 === r.nodeType ? r = u = o : u = r; u !== o;) u = (r = u).parentNode;
                    t = r === o ? o.innerHTML : m.getOuterHTML(r), t = h.serialize(p.parse(t.replace(/<span (id="mce_marker"|id=mce_marker).+?<\/span>/i, function () {
                        return h.serialize(F)
                    }))), r === o ? m.setHTML(o, t) : m.setOuterHTML(r, t)
                } else t = h.serialize(F), S = e, N = t, "all" === (E = r).getAttribute("data-mce-bogus") ? E.parentNode.insertBefore(S.dom.createFragment(N), E) : (k = E.firstChild, _ = E.lastChild, !k || k === _ && "BR" === k.nodeName ? S.dom.setHTML(E, N) : S.selection.setContent(N));
                R = g, O = (A = e).schema.getTextInlineElements(), B = A.dom, R && (T = A.getBody(), D = jm(B), _t.each(B.select("*[data-mce-fragment]"), function (e) {
                    for (var t = e.parentNode; t && t !== T; t = t.parentNode) O[e.nodeName.toLowerCase()] && D.compare(t, e) && B.remove(e, !0)
                })), function (n, e) {
                    var t, r, o = n.dom, i = n.selection;
                    if (e) {
                        i.scrollIntoView(e);
                        var a = function (e) {
                            for (var t = n.getBody(); e && e !== t; e = e.parentNode) if ("false" === o.getContentEditable(e)) return e;
                            return null
                        }(e);
                        if (a) return o.remove(e), i.select(a);
                        var u = o.createRng(), s = e.previousSibling;
                        s && 3 === s.nodeType ? (u.setStart(s, s.nodeValue.length), xt.ie || (r = e.nextSibling) && 3 === r.nodeType && (s.appendData(r.data), r.parentNode.removeChild(r))) : (u.setStartBefore(e), u.setEndBefore(e));
                        var c = o.getParent(e, o.isBlock);
                        o.remove(e), c && o.isEmpty(c) && (n.$(c).empty(), u.setStart(c, 0), u.setEnd(c, 0), Fg(c) || c.getAttribute("data-mce-fragment") || !(t = function (e) {
                            var t = Is.fromRangeStart(e);
                            if (t = Nl(n.getBody()).next(t)) return t.toRange()
                        }(u)) ? o.add(c, o.create("br", {"data-mce-bogus": "1"})) : (u = t, o.remove(c))), i.setRng(u)
                    }
                }(e, m.get("mce_marker")), P = e.getBody(), _t.each(P.getElementsByTagName("*"), function (e) {
                    e.removeAttribute("data-mce-fragment")
                }), L = m, I = d.getStart(), U.from(L.getParent(I, "td,th")).map(Rt.fromDom).each(sp), e.fire("SetContent", y), e.addVisual()
            }
        }, jg = function (e, t) {
            t(e), e.firstChild && jg(e.firstChild, t), e.next && jg(e.next, t)
        }, Hg = function (e, t, n) {
            var r = function (e, n, t) {
                var r = {}, o = {}, i = [];
                for (var a in t.firstChild && jg(t.firstChild, function (t) {
                    Y(e, function (e) {
                        e.name === t.name && (r[e.name] ? r[e.name].nodes.push(t) : r[e.name] = {filter: e, nodes: [t]})
                    }), Y(n, function (e) {
                        "string" == typeof t.attr(e.name) && (o[e.name] ? o[e.name].nodes.push(t) : o[e.name] = {
                            filter: e,
                            nodes: [t]
                        })
                    })
                }), r) r.hasOwnProperty(a) && i.push(r[a]);
                for (var u in o) o.hasOwnProperty(u) && i.push(o[u]);
                return i
            }(e, t, n);
            Y(r, function (t) {
                Y(t.filter.callbacks, function (e) {
                    e(t.nodes, t.filter.name, {})
                })
            })
        }, Vg = function (e) {
            return e instanceof Am
        }, qg = function (e, t) {
            var r;
            e.dom.setHTML(e.getBody(), t), vm(r = e) && Ll(r.getBody()).each(function (e) {
                var t = e.getNode(), n = Pn(t) ? Ll(t).getOr(e) : e;
                r.selection.setRng(n.toRange())
            })
        }, $g = function (u, s, c) {
            return c.format = c.format ? c.format : "html", c.set = !0, c.content = Vg(s) ? "" : s, c.no_events || u.fire("BeforeSetContent", c), Vg(s) || (s = c.content), U.from(u.getBody()).fold(S(s), function (e) {
                return Vg(s) ? function (e, t, n, r) {
                    Hg(e.parser.getNodeFilters(), e.parser.getAttributeFilters(), n);
                    var o = qm({validate: e.validate}, e.schema).serialize(n);
                    return r.content = co(Rt.fromDom(t)) ? o : _t.trim(o), qg(e, r.content), r.no_events || e.fire("SetContent", r), n
                }(u, e, s, c) : (t = u, n = e, o = c, 0 === (r = s).length || /^\s+$/.test(r) ? (a = '<br data-mce-bogus="1">', "TABLE" === n.nodeName ? r = "<tr><td>" + a + "</td></tr>" : /^(UL|OL)$/.test(n.nodeName) && (r = "<li>" + a + "</li>"), r = (i = lc(t)) && t.schema.isValidChild(n.nodeName.toLowerCase(), i.toLowerCase()) ? (r = a, t.dom.createHTML(i, fc(t), r)) : r || '<br data-mce-bogus="1">', qg(t, r), t.fire("SetContent", o)) : ("raw" !== o.format && (r = qm({validate: t.validate}, t.schema).serialize(t.parser.parse(r, {
                    isRootContent: !0,
                    insert: !0
                }))), o.content = co(Rt.fromDom(n)) ? r : _t.trim(r), qg(t, o.content), o.no_events || t.fire("SetContent", o)), o.content);
                var t, n, r, o, i, a
            })
        }, Wg = function (e, t) {
            return r = t, ((o = (n = e).dom).parentNode ? Or(Rt.fromDom(o.parentNode), function (e) {
                return !Bt(n, e) && r(e)
            }) : U.none()).isSome();
            var n, r, o
        }, Kg = function (e) {
            return D(e) ? e : b
        }, Xg = function (e, t, n) {
            var r = t(e), o = Kg(n);
            return r.orThunk(function () {
                return o(e) ? U.none() : function (e, t, n) {
                    for (var r = e.dom, o = Kg(n); r.parentNode;) {
                        r = r.parentNode;
                        var i = Rt.fromDom(r), a = t(i);
                        if (a.isSome()) return a;
                        if (o(i)) break
                    }
                    return U.none()
                }(e, t, o)
            })
        }, Yg = af, Gg = function (e, t, n) {
            var r = e.formatter.get(n);
            if (r) for (var o = 0; o < r.length; o++) if (!1 === r[o].inherit && e.dom.is(t, r[o].selector)) return !0;
            return !1
        }, Jg = function (t, e, n, r) {
            var o = t.dom.getRoot();
            return e !== o && (e = t.dom.getParent(e, function (e) {
                return !!Gg(t, e, n) || (e.parentNode === o || !!eh(t, e, n, r, !0))
            }), eh(t, e, n, r))
        }, Qg = function (e, t, n) {
            return !!Yg(t, n.inline) || (!!Yg(t, n.block) || (n.selector ? 1 === t.nodeType && e.is(t, n.selector) : void 0))
        }, Zg = function (e, t, n, r, o, i) {
            var a, u, s, c = n[r];
            if (n.onmatch) return n.onmatch(t, n, r);
            if (c) if ("undefined" == typeof c.length) {
                for (a in c) if (c.hasOwnProperty(a)) {
                    if (u = "attributes" === r ? e.getAttrib(t, a) : sf(e, t, a), o && !u && !n.exact) return;
                    if ((!o || n.exact) && !Yg(u, uf(e, of(c[a], i), a))) return
                }
            } else for (s = 0; s < c.length; s++) if ("attributes" === r ? e.getAttrib(t, c[s]) : sf(e, t, c[s])) return n;
            return n
        }, eh = function (e, t, n, r, o) {
            var i, a, u, s, c = e.formatter.get(n), l = e.dom;
            if (c && t) for (a = 0; a < c.length; a++) if (i = c[a], Qg(e.dom, t, i) && Zg(l, t, i, "attributes", o, r) && Zg(l, t, i, "styles", o, r)) {
                if (s = i.classes) for (u = 0; u < s.length; u++) if (!e.dom.hasClass(t, s[u])) return;
                return i
            }
        }, th = function (e, t, n, r) {
            if (r) return Jg(e, r, t, n);
            if (r = e.selection.getNode(), Jg(e, r, t, n)) return !0;
            var o = e.selection.getStart();
            return !(o === r || !Jg(e, o, t, n))
        }, nh = function (r, t) {
            var n = function (e) {
                return Bt(e, Rt.fromDom(r.getBody()))
            };
            return U.from(r.selection.getStart(!0)).bind(function (e) {
                return Xg(Rt.fromDom(e), function (n) {
                    return function (e, t) {
                        for (var n = 0; n < e.length; n++) {
                            var r = t(e[n], n);
                            if (r.isSome()) return r
                        }
                        return U.none()
                    }(t, function (e) {
                        return t = e, eh(r, n.dom, t) ? U.some(t) : U.none();
                        var t
                    })
                }, n)
            }).getOrNull()
        }, rh = function (o, i, e) {
            return $(e, function (e, t) {
                var n, r = (n = t, F(o.formatter.get(n), function (t) {
                    var n = function (e) {
                        return 1 < e.length && "%" === e.charAt(0)
                    };
                    return F(["styles", "attributes"], function (e) {
                        return he(t, e).exists(function (e) {
                            var t = _(e) ? e : ge(e);
                            return F(t, n)
                        })
                    })
                }));
                return o.formatter.matchNode(i, t, {}, r) ? e.concat([t]) : e
            }, [])
        }, oh = mo, ih = "_mce_caret", ah = function (e) {
            return 0 < function (e) {
                for (var t = []; e;) {
                    if (3 === e.nodeType && e.nodeValue !== oh || 1 < e.childNodes.length) return [];
                    1 === e.nodeType && t.push(e), e = e.firstChild
                }
                return t
            }(e).length
        }, uh = function (e) {
            if (e) {
                var t = new Yr(e, e);
                for (e = t.current(); e; e = t.next()) if (Mn(e)) return e
            }
            return null
        }, sh = function (e) {
            var t = Rt.fromTag("span");
            return Gn(t, {id: ih, "data-mce-bogus": "1", "data-mce-type": "format-caret"}), e && dn(t, Rt.fromText(oh)), t
        }, ch = function (e, t, n) {
            void 0 === n && (n = !0);
            var r, o, i, a, u, s, c, l, f = e.dom, d = e.selection;
            ah(t) ? eg(e, !1, Rt.fromDom(t), n) : (r = d.getRng(), o = f.getParent(t, f.isBlock), i = r.startContainer, a = r.startOffset, u = r.endContainer, s = r.endOffset, (l = uh(t)) && l.nodeValue.charAt(0) === oh && l.deleteData(0, 1), c = l, f.remove(t, !0), i === c && 0 < a && r.setStart(c, a - 1), u === c && 0 < s && r.setEnd(c, s - 1), o && f.isEmpty(o) && up(Rt.fromDom(o)), d.setRng(r))
        }, lh = function (e, t, n) {
            void 0 === n && (n = !0);
            var r = e.dom, o = e.selection;
            if (t) ch(e, t, n); else if (!(t = Ul(e.getBody(), o.getStart()))) for (; t = r.get(ih);) ch(e, t, !1)
        }, fh = function (e, t) {
            return e.appendChild(t), t
        }, dh = function (e, t) {
            var n = q(e, function (e, t) {
                return fh(e, t.cloneNode(!1))
            }, t);
            return fh(n, n.ownerDocument.createTextNode(oh))
        }, mh = function (e, t, n, r) {
            var o, i, a, u, s, c, l, f, d, m, p, g, h, v = e.dom, y = e.selection, b = [], C = y.getRng(),
                w = C.startContainer, x = C.startOffset, S = w;
            for (3 === w.nodeType && (x !== w.nodeValue.length && (o = !0), S = S.parentNode); S;) {
                if (eh(e, S, t, n, r)) {
                    i = S;
                    break
                }
                S.nextSibling && (o = !0), b.push(S), S = S.parentNode
            }
            i && (o ? (a = y.getBookmark(), C.collapse(!0), u = Rf(e, C, e.formatter.get(t), !0), u = md(u), e.formatter.remove(t, n, u, r), y.moveToBookmark(a)) : (s = Ul(e.getBody(), i), c = sh(!1).dom, m = c, p = null !== s ? s : i, g = (d = e).dom, (h = g.getParent(p, N(tf, d))) && g.isEmpty(h) ? p.parentNode.replaceChild(m, p) : (ap(Rt.fromDom(p)), g.isEmpty(p) ? p.parentNode.replaceChild(m, p) : g.insertAfter(m, p)), l = function (t, e, n, r, o, i) {
                var a = t.formatter, u = t.dom, s = H(ae(a.get()), function (e) {
                    return e !== r && !Ve(e, "removeformat")
                }), c = rh(t, n, s);
                if (0 < H(c, function (e) {
                    return !ff(t, e, r)
                }).length) {
                    var l = n.cloneNode(!1);
                    return u.add(e, l), a.remove(r, o, l, i), u.remove(l), U.some(l)
                }
                return U.none()
            }(e, c, i, t, n, r), f = dh(b.concat(l.toArray()), c), ch(e, s, !1), y.setCursorLocation(f, 1), v.isEmpty(i) && v.remove(i)))
        }, ph = function (i) {
            i.on("mouseup keydown", function (e) {
                var t, n, r, o;
                t = i, n = e.keyCode, r = t.selection, o = t.getBody(), lh(t, null, !1), 8 !== n && 46 !== n || !r.isCollapsed() || r.getStart().innerHTML !== oh || lh(t, Ul(o, r.getStart())), 37 !== n && 39 !== n || lh(t, Ul(o, r.getStart()))
            })
        }, gh = function (e, t) {
            return e.schema.getTextInlineElements().hasOwnProperty(It(t)) && !Fl(t.dom) && !Bn(t.dom)
        }, hh = {}, vh = xe, yh = Ce;
    Im = function (e) {
        var t, n = e.selection.getRng(), r = Tn(["pre"]);
        n.collapsed || (t = e.selection.getSelectedBlocks(), yh(vh(vh(t, r), function (e) {
            return r(e.previousSibling) && -1 !== Se(t, e.previousSibling)
        }), function (e) {
            var t, n;
            t = e.previousSibling, gu(n = e).remove(), gu(t).append("<br><br>").append(n.childNodes)
        }))
    }, hh[Lm = "pre"] || (hh[Lm] = []), hh[Lm].push(Im);
    var bh = _t.each, Ch = function (e) {
            return Rn(e) && !Xl(e) && !Fl(e) && !Bn(e)
        }, wh = function (e, t) {
            for (var n = e; n; n = n[t]) {
                if (Mn(n) && 0 !== n.nodeValue.length) return e;
                if (Rn(n) && !Xl(n)) return n
            }
            return e
        }, xh = function (e, t, n) {
            var r, o, i = jm(e);
            if (t && n && (t = wh(t, "previousSibling"), n = wh(n, "nextSibling"), i.compare(t, n))) {
                for (r = t.nextSibling; r && r !== n;) r = (o = r).nextSibling, t.appendChild(o);
                return e.remove(n), _t.each(_t.grep(n.childNodes), function (e) {
                    t.appendChild(e)
                }), t
            }
            return n
        }, Sh = function (e, t, n, r) {
            var o;
            r && !1 !== t.merge_siblings && (o = xh(e, ef(r), r), xh(e, o, ef(o, !0)))
        }, Nh = function (e, t, n) {
            bh(e.childNodes, function (e) {
                Ch(e) && (t(e) && n(e), e.hasChildNodes() && Nh(e, t, n))
            })
        }, Eh = function (t, n) {
            return function (e) {
                return !(!e || !sf(t, e, n))
            }
        }, kh = function (r, o, i) {
            return function (e) {
                var t, n;
                r.setStyle(e, o, i), "" === e.getAttribute("style") && e.removeAttribute("style"), t = r, "SPAN" === (n = e).nodeName && 0 === t.getAttribs(n).length && t.remove(n, !0)
            }
        }, _h = wr([{keep: []}, {rename: ["name"]}, {removed: []}]), Ah = /^(src|href|style)$/, Rh = _t.each, Th = af,
        Dh = function (e, t, n) {
            return e.isChildOf(t, n) && t !== n && !e.isBlock(n)
        }, Oh = function (e, t, n) {
            var r, o = t[n ? "startContainer" : "endContainer"], i = t[n ? "startOffset" : "endOffset"];
            return Rn(o) && (r = o.childNodes.length - 1, !n && i && i--, o = o.childNodes[r < i ? r : i]), Mn(o) && n && i >= o.nodeValue.length && (o = new Yr(o, e.getBody()).next() || o), Mn(o) && !n && 0 === i && (o = new Yr(o, e.getBody()).prev() || o), o
        }, Bh = function (e, t) {
            var n = t ? "firstChild" : "lastChild";
            if (/^(TR|TH|TD)$/.test(e.nodeName) && e[n]) {
                var r = e[n];
                return "TR" === e.nodeName && r[n] || r
            }
            return e
        }, Ph = function (e, t, n, r) {
            var o = e.create(n, r);
            return t.parentNode.insertBefore(o, t), o.appendChild(t), o
        }, Lh = function (e, t, n, r, o) {
            var i = Rt.fromDom(t), a = Rt.fromDom(e.create(r, o)), u = (n ? Gt : Yt)(i);
            return mn(a, u), n ? (cn(i, a), fn(a, i)) : (ln(i, a), dn(a, i)), a.dom
        }, Ih = function (e, t, n, r) {
            return !(t = ef(t, n, r)) || "BR" === t.nodeName || e.isBlock(t)
        }, Mh = function (e, r, o, t, i) {
            var n, a, u, s, c, l = e.dom;
            if (u = l, !(Th(s = t, (c = r).inline) || Th(s, c.block) || c.selector && (Rn(s) && u.is(s, c.selector)) || (a = t, r.links && "A" === a.nodeName))) return _h.keep();
            var f, d, m, p, g, h, v, y = t;
            if (r.inline && "all" === r.remove && _(r.preserve_attributes)) {
                var b = H(l.getAttribs(y), function (e) {
                    return M(r.preserve_attributes, e.name.toLowerCase())
                });
                if (l.removeAllAttribs(y), Y(b, function (e) {
                    return l.setAttrib(y, e.name, e.value)
                }), 0 < b.length) return _h.rename("span")
            }
            if ("all" !== r.remove) {
                Rh(r.styles, function (e, t) {
                    e = uf(l, of(e, o), t + ""), O(t) && (t = e, i = null), !r.remove_similar && i && !Th(sf(l, i, t), e) || l.setStyle(y, t, ""), n = !0
                }), n && "" === l.getAttrib(y, "style") && (y.removeAttribute("style"), y.removeAttribute("data-mce-style")), Rh(r.attributes, function (e, t) {
                    var n;
                    if (e = of(e, o), O(t) && (t = e, i = null), r.remove_similar || !i || Th(l.getAttrib(i, t), e)) {
                        if ("class" === t && (e = l.getAttrib(y, t)) && (n = "", Y(e.split(/\s+/), function (e) {
                            /mce\-\w+/.test(e) && (n += (n ? " " : "") + e)
                        }), n)) return void l.setAttrib(y, t, n);
                        "class" === t && y.removeAttribute("className"), Ah.test(t) && y.removeAttribute("data-mce-" + t), y.removeAttribute(t)
                    }
                }), Rh(r.classes, function (e) {
                    e = of(e, o), i && !l.hasClass(i, e) || l.removeClass(y, e)
                });
                for (var C = l.getAttribs(y), w = 0; w < C.length; w++) {
                    var x = C[w].nodeName;
                    if (0 !== x.indexOf("_") && 0 !== x.indexOf("data-")) return _h.keep()
                }
            }
            return "none" !== r.remove ? (f = e, m = r, g = (d = y).parentNode, h = f.dom, v = lc(f), m.block && (v ? g === h.getRoot() && (m.list_block && Th(d, m.list_block) || Y(ie(d.childNodes), function (e) {
                nf(f, v, e.nodeName.toLowerCase()) ? p ? p.appendChild(e) : (p = Ph(h, e, v), h.setAttribs(p, f.settings.forced_root_block_attrs)) : p = 0
            })) : h.isBlock(d) && !h.isBlock(g) && (Ih(h, d, !1) || Ih(h, d.firstChild, !0, !0) || d.insertBefore(h.create("br"), d.firstChild), Ih(h, d, !0) || Ih(h, d.lastChild, !1, !0) || d.appendChild(h.create("br")))), m.selector && m.inline && !Th(m.inline, d) || h.remove(d, !0), _h.removed()) : _h.keep()
        }, Fh = function (t, e, n, r, o) {
            return Mh(t, e, n, r, o).fold(b, function (e) {
                return t.dom.rename(r, e), !0
            }, w)
        }, Uh = function (e, t, n, r, o, i, a, u) {
            var s, c, l, f = e.dom;
            if (n) {
                for (var d = n.parentNode, m = r.parentNode; m && m !== d; m = m.parentNode) {
                    s = f.clone(m, !1);
                    for (var p = 0; p < t.length && null !== (s = function (t, e, n, r) {
                        return Mh(t, e, n, r, r).fold(S(r), function (e) {
                            return t.dom.createFragment().appendChild(r), t.dom.rename(r, e)
                        }, S(null))
                    }(e, t[p], u, s)); p++) ;
                    s && (c && s.appendChild(c), l = l || s, c = s)
                }
                !i || a.mixed && f.isBlock(n) || (r = f.split(n, r)), c && (o.parentNode.insertBefore(c, o), l.appendChild(o), a.inline && Sh(f, a, 0, c))
            }
            return r
        }, zh = function (s, c, l, e, f) {
            var t, d = s.formatter.get(c), m = d[0], i = !0, a = s.dom, n = s.selection, u = function (e) {
                var n, t, r, o, i, a,
                    u = (t = e, r = c, o = l, i = f, Y(lf((n = s).dom, t.parentNode).reverse(), function (e) {
                        var t;
                        a || "_start" === e.id || "_end" === e.id || (t = eh(n, e, r, o, i)) && !1 !== t.split && (a = e)
                    }), a);
                return Uh(s, d, u, e, e, !0, m, l)
            }, p = function (e) {
                var t, n;
                Rn(e) && a.getContentEditable(e) && (t = i, i = "true" === a.getContentEditable(e), n = !0);
                var r = ie(e.childNodes);
                if (i && !n) for (var o = 0; o < d.length && !Fh(s, d[o], l, e, e); o++) ;
                if (m.deep && r.length) {
                    for (o = 0; o < r.length; o++) p(r[o]);
                    n && (i = t)
                }
            }, g = function (e) {
                var t, n = a.get(e ? "_start" : "_end"), r = n[e ? "firstChild" : "lastChild"];
                return Xl(t = r) && Rn(t) && ("_start" === t.id || "_end" === t.id) && (r = r[e ? "firstChild" : "lastChild"]), Mn(r) && 0 === r.data.length && (r = e ? n.previousSibling || n.nextSibling : n.nextSibling || n.previousSibling), a.remove(n, !0), r
            }, r = function (e) {
                var t, n, r = Rf(s, e, d, e.collapsed);
                if (m.split) {
                    if (r = md(r), (t = Oh(s, r, !0)) !== (n = Oh(s, r))) {
                        if (t = Bh(t, !0), n = Bh(n, !1), Dh(a, t, n)) {
                            var o = U.from(t.firstChild).getOr(t);
                            return u(Lh(a, o, !0, "span", {id: "_start", "data-mce-type": "bookmark"})), void g(!0)
                        }
                        if (Dh(a, n, t)) {
                            o = U.from(n.lastChild).getOr(n);
                            return u(Lh(a, o, !1, "span", {id: "_end", "data-mce-type": "bookmark"})), void g(!1)
                        }
                        t = Ph(a, t, "span", {id: "_start", "data-mce-type": "bookmark"}), n = Ph(a, n, "span", {
                            id: "_end",
                            "data-mce-type": "bookmark"
                        });
                        var i = a.createRng();
                        i.setStartAfter(t), i.setEndBefore(n), Df(a, i, function (e) {
                            Y(e, function (e) {
                                Xl(e) || Xl(e.parentNode) || u(e)
                            })
                        }), u(t), u(n), t = g(!0), n = g()
                    } else t = n = u(t);
                    r.startContainer = t.parentNode ? t.parentNode : t, r.startOffset = a.nodeIndex(t), r.endContainer = n.parentNode ? n.parentNode : n, r.endOffset = a.nodeIndex(n) + 1
                }
                Df(a, r, function (e) {
                    Y(e, function (t) {
                        p(t);
                        Y(["underline", "line-through", "overline"], function (e) {
                            Rn(t) && s.dom.getStyle(t, "text-decoration") === e && t.parentNode && cf(a, t.parentNode) === e && Fh(s, {
                                deep: !1,
                                exact: !0,
                                inline: "span",
                                styles: {textDecoration: e}
                            }, null, t)
                        })
                    })
                })
            };
            if (e) Ql(e) ? ((t = a.createRng()).setStartBefore(e), t.setEndAfter(e), r(t)) : r(e); else if ("false" !== a.getContentEditable(n.getNode())) n.isCollapsed() && m.inline && !Lf(s).length ? mh(s, c, l, f) : (Hf(n, !0, function () {
                jf(s, r)
            }), m.inline && th(s, c, l, n.getStart()) && Zl(a, n, n.getRng()), s.nodeChanged()); else {
                e = n.getNode();
                for (var o = 0; o < d.length && (!d[o].ceFalseOverride || !Fh(s, d[o], l, e, e)); o++) ;
            }
        }, jh = _t.each, Hh = function (i, e, a, u) {
            jh(e, function (t) {
                var r, e, n, o;
                jh(i.dom.select(t.inline, u), function (e) {
                    Ch(e) && Fh(i, t, a, e, t.exact ? e : null)
                }), r = i.dom, n = u, (e = t).clear_child_styles && (o = e.links ? "*:not(a)" : "*", bh(r.select(o, n), function (n) {
                    Ch(n) && bh(e.styles, function (e, t) {
                        r.setStyle(n, t, "")
                    })
                }))
            })
        }, Vh = _t.each, qh = ye, $h = function (E, k, _, r) {
            var e, t, n, o, A = E.formatter.get(k), R = A[0], i = !r && E.selection.isCollapsed(), a = E.dom,
                u = E.selection, T = function (n, e) {
                    var t;
                    e = e || R, n && (e.onformat && e.onformat(n, e, _, r), Vh(e.styles, function (e, t) {
                        a.setStyle(n, t, of(e, _))
                    }), !e.styles || (t = a.getAttrib(n, "style")) && a.setAttrib(n, "data-mce-style", t), Vh(e.attributes, function (e, t) {
                        a.setAttrib(n, t, of(e, _))
                    }), Vh(e.classes, function (e) {
                        e = of(e, _), a.hasClass(n, e) || a.addClass(n, e)
                    }))
                }, m = function (e, t) {
                    var n = !1;
                    return !!mf(R) && (Vh(e, function (e) {
                        if (!("collapsed" in e && e.collapsed !== i)) return a.is(t, e.selector) && !Fl(t) ? (T(t, e), !(n = !0)) : void 0
                    }), n)
                }, s = function (S, e, t, c) {
                    var N = [], l = !0, f = R.inline || R.block, d = S.create(f);
                    T(d), Df(S, e, function (e) {
                        var u, s = function (e) {
                            var t = !1, n = l, r = e.nodeName.toLowerCase(), o = e.parentNode.nodeName.toLowerCase();
                            if (Rn(e) && S.getContentEditable(e) && (n = l, l = "true" === S.getContentEditable(e), t = !0), jn(e) && !function (e, t, n, r) {
                                if (e.getParam("format_empty_lines", !1, "boolean") && pf(t)) {
                                    var o = _e(_e({}, e.schema.getTextBlockElements()), {
                                        td: {},
                                        th: {},
                                        li: {},
                                        dt: {},
                                        dd: {},
                                        figcaption: {},
                                        caption: {},
                                        details: {},
                                        summary: {}
                                    }), i = Wg(Rt.fromDom(n), function (e) {
                                        return Fl(e.dom)
                                    });
                                    return ye(o, r) && Wo(Rt.fromDom(n.parentNode), !1) && !i
                                }
                                return !1
                            }(E, R, e, o)) return u = null, void (df(R) && S.remove(e));
                            if (R.wrapper && eh(E, e, k, _)) u = null; else {
                                if (l && !t && df(R) && !R.wrapper && tf(E, r) && nf(E, o, f)) {
                                    var i = S.rename(e, f);
                                    return T(i), N.push(i), void (u = null)
                                }
                                if (mf(R)) {
                                    var a = m(A, e);
                                    if (!qh(R, "inline") || a) return void (u = null)
                                }
                                !l || t || !nf(E, f, r) || !nf(E, o, f) || !c && 3 === e.nodeType && 1 === e.nodeValue.length && 65279 === e.nodeValue.charCodeAt(0) || Fl(e) || qh(R, "inline") && S.isBlock(e) ? (u = null, Vh(_t.grep(e.childNodes), s), t && (l = n), u = null) : (u || (u = S.clone(d, !1), e.parentNode.insertBefore(u, e), N.push(u)), u.appendChild(e))
                            }
                        };
                        Vh(e, s)
                    }), !0 === R.links && Vh(N, function (e) {
                        var t = function (e) {
                            "A" === e.nodeName && T(e, R), Vh(_t.grep(e.childNodes), t)
                        };
                        t(e)
                    }), Vh(N, function (e) {
                        var n, t, r, o, i, a, u, s, c, l, f, d, m, p, g, h, v, y, b, C, w = function (e) {
                            var n = !1;
                            return Vh(e.childNodes, function (e) {
                                if ((t = e) && 1 === t.nodeType && !Xl(t) && !Fl(t) && !Bn(t)) return n = e, !1;
                                var t
                            }), n
                        }, x = (n = 0, Vh(e.childNodes, function (e) {
                            var t;
                            V(t = e) && Mn(t) && 0 === t.length || Xl(e) || n++
                        }), n);
                        !(1 < N.length) && S.isBlock(e) || 0 !== x ? (pf(R) || R.wrapper) && (R.exact || 1 !== x || ((C = w(y = e)) && !Xl(C) && Qg(S, C, R) && (b = S.clone(C, !1), T(b), S.replace(b, y, !0), S.remove(C, !0)), e = b || y), Hh(E, A, _, e), p = R, g = k, h = _, eh(m = E, (v = e).parentNode, g, h) && Fh(m, p, h, v) || p.merge_with_parents && m.dom.getParent(v.parentNode, function (e) {
                            if (eh(m, e, g, h)) return Fh(m, p, h, v), !0
                        }), c = S, f = _, d = e, (l = R).styles && l.styles.backgroundColor && Nh(d, Eh(c, "fontSize"), kh(c, "backgroundColor", of(l.styles.backgroundColor, f))), i = S, u = e, s = function (e) {
                            var t;
                            1 === e.nodeType && e.parentNode && 1 === e.parentNode.nodeType && (t = cf(i, e.parentNode), i.getStyle(e, "color") && t ? i.setStyle(e, "text-decoration", t) : i.getStyle(e, "text-decoration") === t && i.setStyle(e, "text-decoration", null))
                        }, (a = R).styles && (a.styles.color || a.styles.textDecoration) && (_t.walk(u, s, "childNodes"), s(u)), t = S, o = e, "sub" !== (r = R).inline && "sup" !== r.inline || (Nh(o, Eh(t, "fontSize"), kh(t, "fontSize", "")), t.remove(t.select("sup" === r.inline ? "sub" : "sup", o), !0)), Sh(S, R, 0, e)) : S.remove(e, !0)
                    })
                };
            if ("false" !== a.getContentEditable(u.getNode())) {
                R && (r ? Ql(r) ? m(A, r) || ((e = a.createRng()).setStartBefore(r), e.setEndAfter(r), s(a, Rf(E, e, A), 0, !0)) : s(a, r, 0, !0) : i && pf(R) && !Lf(E).length ? function (e, t, n) {
                    var r, o = e.selection, i = o.getRng(), a = i.startOffset, u = i.startContainer.nodeValue,
                        s = Ul(e.getBody(), o.getStart());
                    s && (r = uh(s));
                    var c, l, f, d, m = /[^\s\u00a0\u00ad\u200b\ufeff]/;
                    u && 0 < a && a < u.length && m.test(u.charAt(a)) && m.test(u.charAt(a - 1)) ? (c = o.getBookmark(), i.collapse(!0), l = Rf(e, i, e.formatter.get(t)), l = md(l), e.formatter.apply(t, n, l), o.moveToBookmark(c)) : (s && r.nodeValue === oh || (f = e.getDoc(), d = sh(!0).dom, r = (s = f.importNode(d, !0)).firstChild, i.insertNode(s), a = 1), e.formatter.apply(t, n, s), o.setCursorLocation(r, a))
                }(E, k, _) : (t = u.getNode(), n = A[0], E.settings.forced_root_block || !n.defaultBlock || a.getParent(t, a.isBlock) || $h(E, n.defaultBlock), u.setRng(Rg(u.getRng())), Hf(u, !0, function (e) {
                    jf(E, function (e, t) {
                        var n = t ? e : Rf(E, e, A);
                        s(a, n)
                    })
                }), Zl(a, u, u.getRng()), E.nodeChanged()), o = E, yh(hh[k], function (e) {
                    e(o)
                }))
            } else {
                r = u.getNode();
                for (var c = 0, l = A.length; c < l; c++) {
                    var f = A[c];
                    if (f.ceFalseOverride && mf(f) && a.is(r, f.selector)) return void T(r, f)
                }
            }
        }, Wh = function (r, e, t, n) {
            var o = ae(t.get()), i = {}, a = {}, u = H(lf(r.dom, e), function (e) {
                return 1 === e.nodeType && !e.getAttribute("data-mce-bogus")
            });
            se(n, function (e, n) {
                _t.each(u, function (t) {
                    return r.formatter.matchNode(t, n, {}, e.similar) ? (-1 === o.indexOf(n) && (Y(e.callbacks, function (e) {
                        e(!0, {node: t, format: n, parents: u})
                    }), i[n] = e.callbacks), a[n] = e.callbacks, !1) : !Gg(r, t, n) && void 0
                })
            });
            var s = Kh(t.get(), a, e, u);
            t.set(_e(_e({}, i), s))
        }, Kh = function (e, n, r, o) {
            return me(e, function (e, t) {
                return !!ve(n, t) || (Y(e, function (e) {
                    e(!1, {node: r, format: t, parents: o})
                }), !1)
            }).t
        }, Xh = function (e, o, i, a, t) {
            var n, r, u, s, c, l, f, d;
            return null === o.get() && (r = e, u = Au({}), (n = o).set({}), r.on("NodeChange", function (e) {
                Wh(r, e.element, u, n.get())
            })), c = i, l = a, f = t, d = (s = o).get(), Y(c.split(","), function (e) {
                d[e] || (d[e] = {similar: f, callbacks: []}), d[e].callbacks.push(l)
            }), s.set(d), {
                unbind: function () {
                    return t = i, n = a, r = (e = o).get(), Y(t.split(","), function (e) {
                        r[e].callbacks = H(r[e].callbacks, function (e) {
                            return e !== n
                        }), 0 === r[e].callbacks.length && delete r[e]
                    }), void e.set(r);
                    var e, t, n, r
                }
            }
        }, Yh = function (e, t) {
            var n = (t || document).createDocumentFragment();
            return Y(e, function (e) {
                n.appendChild(e.dom)
            }), Rt.fromDom(n)
        }, Gh = function (e, t, n) {
            return {element: e, width: t, rows: n}
        }, Jh = function (e, t) {
            return {element: e, cells: t}
        }, Qh = function (e, t) {
            var n = parseInt(Jn(e, t), 10);
            return isNaN(n) ? 1 : n
        }, Zh = function (e) {
            return $(e, function (e, t) {
                return t.cells.length > e ? t.cells.length : e
            }, 0)
        }, ev = function (e, t) {
            for (var n = e.rows, r = 0; r < n.length; r++) for (var o = n[r].cells, i = 0; i < o.length; i++) if (Bt(o[i], t)) return U.some({
                x: i,
                y: r
            });
            return U.none()
        }, tv = function (e, t, n, r, o) {
            for (var i = [], a = e.rows, u = n; u <= o; u++) {
                var s = a[u].cells, c = t < r ? s.slice(t, r + 1) : s.slice(r, t + 1);
                i.push(Jh(a[u].element, c))
            }
            return i
        }, nv = function (e) {
            var o = Gh(ns(e), 0, []);
            return Y(qu(e, "tr"), function (n, r) {
                Y(qu(n, "td,th"), function (e, t) {
                    !function (e, t, n, r, o) {
                        for (var i = Qh(o, "rowspan"), a = Qh(o, "colspan"), u = e.rows, s = n; s < n + i; s++) {
                            u[s] || (u[s] = Jh(rs(r), []));
                            for (var c = t; c < t + a; c++) {
                                u[s].cells[c] = s === n && c === t ? o : ns(o)
                            }
                        }
                    }(o, function (e, t, n) {
                        for (; r = t, o = n, ((i = e.rows)[o] ? i[o].cells : [])[r];) t++;
                        var r, o, i;
                        return t
                    }(o, t, r), r, n, e)
                })
            }), Gh(o.element, Zh(o.rows), o.rows)
        }, rv = function (e) {
            return n = z((t = e).rows, function (e) {
                var t = z(e.cells, function (e) {
                    var t = rs(e);
                    return Zn(t, "colspan"), Zn(t, "rowspan"), t
                }), n = ns(e.element);
                return mn(n, t), n
            }), r = ns(t.element), o = Rt.fromTag("tbody"), mn(o, n), dn(r, o), r;
            var t, n, r, o
        }, ov = function (l, e, t) {
            return ev(l, e).bind(function (c) {
                return ev(l, t).map(function (e) {
                    return t = l, r = e, o = (n = c).x, i = n.y, a = r.x, u = r.y, s = i < u ? tv(t, o, i, a, u) : tv(t, o, u, a, i), Gh(t.element, Zh(s), s);
                    var t, n, r, o, i, a, u, s
                })
            })
        }, iv = function (t, n) {
            return W(t, function (e) {
                return "li" === It(e) && Ff(e, n)
            }).fold(S([]), function (e) {
                return W(t, function (e) {
                    return "ul" === It(e) || "ol" === It(e)
                }).map(function (e) {
                    var t = Rt.fromTag(It(e)), n = pe(or(e), function (e, t) {
                        return qe(t, "list-style")
                    });
                    return er(t, n), [Rt.fromTag("li"), t]
                }).getOr([])
            })
        }, av = function (e, t) {
            var n, r = Rt.fromDom(t.commonAncestorContainer), o = fp(r, e), i = H(o, function (e) {
                return no(e) || eo(e)
            }), a = iv(o, t), u = i.concat(a.length ? a : ao(n = r) ? Wt(n).filter(io).fold(S([]), function (e) {
                return [n, e]
            }) : io(n) ? [n] : []);
            return z(u, ns)
        }, uv = function () {
            return Yh([])
        }, sv = function (e, t) {
            return n = Rt.fromDom(t.cloneContents()), r = av(e, t), o = $(r, function (e, t) {
                return dn(t, e), t
            }, n), 0 < r.length ? Yh([o]) : o;
            var n, r, o
        }, cv = function (e, o) {
            return t = e, n = o[0], Br(n, "table", N(Bt, t)).bind(function (e) {
                var t = o[0], n = o[o.length - 1], r = nv(e);
                return ov(r, t, n).map(function (e) {
                    return Yh([rv(e)])
                })
            }).getOrThunk(uv);
            var t, n
        }, lv = function (e, t) {
            var n, r, o = Pf(t, e);
            return 0 < o.length ? cv(e, o) : (n = e, 0 < (r = t).length && r[0].collapsed ? uv() : sv(n, r[0]))
        }, fv = function (e, t) {
            return 0 <= t && t < e.length && Gl(e.charAt(t))
        }, dv = function (e, t) {
            var n = go(e.innerText);
            return t ? n.replace(/^[ \f\n\r\t\v]+/, "") : n
        }, mv = function (f) {
            return U.from(f.selection.getRng()).map(function (e) {
                var t = U.from(f.dom.getParent(e.commonAncestorContainer, f.dom.isBlock)), n = f.getBody(),
                    r = t.map(function (e) {
                        return e.nodeName
                    }).getOr("div").toLowerCase(), o = xt.browser.isIE() && "pre" !== r, i = f.dom.add(n, r, {
                        "data-mce-bogus": "all",
                        style: "overflow: hidden; opacity: 0;"
                    }, e.cloneContents()), a = dv(i, o), u = go(i.textContent);
                if (f.dom.remove(i), fv(u, 0) || fv(u, u.length - 1)) {
                    var s = t.getOr(n), c = dv(s, o), l = c.indexOf(a);
                    return -1 === l ? a : (fv(c, l - 1) ? " " : "") + a + (fv(c, l + a.length) ? " " : "")
                }
                return a
            }).getOr("")
        }, pv = function (e, t, n) {
            if (void 0 === n && (n = {}), n.get = !0, n.format = t, n.selection = !0, (n = e.fire("BeforeGetContent", n)).isDefaultPrevented()) return e.fire("GetContent", n), n.content;
            if ("text" === n.format) return mv(e);
            n.getInner = !0;
            var r, o, i, a, u, s, c,
                l = (o = n, i = (r = e).selection.getRng(), a = r.dom.create("body"), u = r.selection.getSel(), s = Nm(r, Of(u)), (c = o.contextual ? lv(Rt.fromDom(r.getBody()), s).dom : i.cloneContents()) && a.appendChild(c), r.selection.serializer.serialize(a, o));
            return "tree" === n.format ? l : (n.content = e.selection.isCollapsed() ? "" : l, e.fire("GetContent", n), n.content)
        }, gv = function (e) {
            return Rn(e) ? e.outerHTML : Mn(e) ? li.encodeRaw(e.data, !1) : Fn(e) ? "\x3c!--" + e.data + "--\x3e" : ""
        }, hv = function (e, t, n) {
            var r, o = function (e) {
                var t, n = document.createElement("div"), r = document.createDocumentFragment();
                for (e && (n.innerHTML = e); t = n.firstChild;) r.appendChild(t);
                return r
            }(t);
            e.hasChildNodes() && n < e.childNodes.length ? (r = e.childNodes[n]).parentNode.insertBefore(o, r) : e.appendChild(o)
        }, vv = function (e, o) {
            var i = 0;
            Y(e, function (e) {
                var t, n, r;
                0 === e[0] ? i++ : 1 === e[0] ? (hv(o, e[1], i), i++) : 2 === e[0] && (n = i, (t = o).hasChildNodes() && n < t.childNodes.length && (r = t.childNodes[n]).parentNode.removeChild(r))
            })
        }, yv = function (e, t) {
            var p, g, n, h, v, c, y, l, r, o = z(ie(t.childNodes), gv);
            return vv((g = e, n = (p = o).length + g.length + 2, h = new Array(n), v = new Array(n), c = function (e, t, n, r, o) {
                var i = l(e, t, n, r);
                if (null === i || i.start === t && i.diag === t - r || i.end === e && i.diag === e - n) for (var a = e, u = n; a < t || u < r;) a < t && u < r && p[a] === g[u] ? (o.push([0, p[a]]), ++a, ++u) : r - n < t - e ? (o.push([2, p[a]]), ++a) : (o.push([1, g[u]]), ++u); else {
                    c(e, i.start, n, i.start - i.diag, o);
                    for (var s = i.start; s < i.end; ++s) o.push([0, p[s]]);
                    c(i.end, t, i.end - i.diag, r, o)
                }
            }, y = function (e, t, n, r) {
                for (var o = e; o - t < r && o < n && p[o] === g[o - t];) ++o;
                return {start: e, end: o, diag: t}
            }, l = function (e, t, n, r) {
                var o = t - e, i = r - n;
                if (0 == o || 0 == i) return null;
                var a, u, s, c, l, f = o - i, d = i + o, m = (d % 2 == 0 ? d : 1 + d) / 2;
                for (h[1 + m] = e, v[1 + m] = t + 1, a = 0; a <= m; ++a) {
                    for (u = -a; u <= a; u += 2) {
                        for (s = u + m, u === -a || u !== a && h[s - 1] < h[s + 1] ? h[s] = h[s + 1] : h[s] = h[s - 1] + 1, l = (c = h[s]) - e + n - u; c < t && l < r && p[c] === g[l];) h[s] = ++c, ++l;
                        if (f % 2 != 0 && f - a <= u && u <= f + a && v[s - f] <= h[s]) return y(v[s - f], u + e - n, t, r)
                    }
                    for (u = f - a; u <= f + a; u += 2) {
                        for (s = u + m - f, u === f - a || u !== f + a && v[s + 1] <= v[s - 1] ? v[s] = v[s + 1] - 1 : v[s] = v[s - 1], l = (c = v[s] - 1) - e + n - u; e <= c && n <= l && p[c] === g[l];) v[s] = c--, l--;
                        if (f % 2 == 0 && -a <= u && u <= a && v[s] <= h[s + f]) return y(v[s], u + e - n, t, r)
                    }
                }
            }, r = [], c(0, p.length, 0, g.length, r), r), t), t
        }, bv = Au(U.none()), Cv = function (n) {
            var e, t = (e = n.getBody(), H(z(ie(e.childNodes), gv), function (e) {
                return 0 < e.length
            })), r = J(t, function (e) {
                var t = Mm(n.serializer, e);
                return 0 < t.length ? [t] : []
            }), o = r.join("");
            return -1 !== o.indexOf("</iframe>") ? {
                type: "fragmented",
                fragments: r,
                content: "",
                bookmark: null,
                beforeBookmark: null
            } : {type: "complete", fragments: null, content: o, bookmark: null, beforeBookmark: null}
        }, wv = function (e, t, n) {
            "fragmented" === t.type ? yv(t.fragments, e.getBody()) : e.setContent(t.content, {format: "raw"}), e.selection.moveToBookmark(n ? t.beforeBookmark : t.bookmark)
        }, xv = function (e) {
            return "fragmented" === e.type ? e.fragments.join("") : e.content
        }, Sv = function (e) {
            var t = Rt.fromTag("body", bv.get().getOrThunk(function () {
                var e = document.implementation.createHTMLDocument("undo");
                return bv.set(U.some(e)), e
            }));
            return es(t, xv(e)), Y(qu(t, "*[data-mce-bogus]"), hn), t.dom.innerHTML
        }, Nv = function (e, t) {
            return !(!e || !t) && (r = t, xv(e) === xv(r) || (n = t, Sv(e) === Sv(n)));
            var n, r
        }, Ev = function (e) {
            return 0 === e.get()
        }, kv = function (e, t, n) {
            Ev(n) && (e.typing = t)
        }, _v = function (e, t) {
            e.typing && (kv(e, !1, t), e.add())
        }, Av = function (f) {
            return {
                undoManager: {
                    beforeChange: function (e, t) {
                        return n = f, r = t, void (Ev(e) && r.set(U.some(ac(n.selection))));
                        var n, r
                    }, addUndoLevel: function (e, t, n, r, o, i) {
                        return function (e, t, n, r, o, i, a) {
                            var u = Cv(e);
                            if (i = i || {}, i = _t.extend(i, u), !1 === Ev(r) || e.removed) return null;
                            var s = t.data[n.get()];
                            if (e.fire("BeforeAddUndo", {
                                level: i,
                                lastLevel: s,
                                originalEvent: a
                            }).isDefaultPrevented()) return null;
                            if (s && Nv(s, i)) return null;
                            t.data[n.get()] && o.get().each(function (e) {
                                t.data[n.get()].beforeBookmark = e
                            });
                            var c = e.getParam("custom_undo_redo_levels", 0, "number");
                            if (c && t.data.length > c) {
                                for (var l = 0; l < t.data.length - 1; l++) t.data[l] = t.data[l + 1];
                                t.data.length--, n.set(t.data.length)
                            }
                            i.bookmark = ac(e.selection), n.get() < t.data.length - 1 && (t.data.length = n.get() + 1), t.data.push(i), n.set(t.data.length - 1);
                            var f = {level: i, lastLevel: s, originalEvent: a};
                            return 0 < n.get() ? (e.setDirty(!0), e.fire("AddUndo", f), e.fire("change", f)) : e.fire("AddUndo", f), i
                        }(f, e, t, n, r, o, i)
                    }, undo: function (e, t, n) {
                        return r = f, i = t, a = n, (o = e).typing && (o.add(), o.typing = !1, kv(o, !1, i)), 0 < a.get() && (a.set(a.get() - 1), u = o.data[a.get()], wv(r, u, !0), r.setDirty(!0), r.fire("Undo", {level: u})), u;
                        var r, o, i, a, u
                    }, redo: function (e, t) {
                        return n = f, o = t, (r = e).get() < o.length - 1 && (r.set(r.get() + 1), i = o[r.get()], wv(n, i, !1), n.setDirty(!0), n.fire("Redo", {level: i})), i;
                        var n, r, o, i
                    }, clear: function (e, t) {
                        return n = f, o = t, (r = e).data = [], o.set(0), r.typing = !1, void n.fire("ClearUndos");
                        var n, r, o
                    }, reset: function (e) {
                        return (t = e).clear(), void t.add();
                        var t
                    }, hasUndo: function (e, t) {
                        return n = f, r = e, 0 < t.get() || r.typing && r.data[0] && !Nv(Cv(n), r.data[0]);
                        var n, r
                    }, hasRedo: function (e, t) {
                        return n = e, t.get() < n.data.length - 1 && !n.typing;
                        var n
                    }, transact: function (e, t, n) {
                        return o = n, _v(r = e, t), r.beforeChange(), r.ignore(o), r.add();
                        var r, o
                    }, ignore: function (e, t) {
                        try {
                            e.set(e.get() + 1), t()
                        } finally {
                            e.set(e.get() - 1)
                        }
                    }, extra: function (e, t, n, r) {
                        return o = f, a = t, u = n, s = r, void ((i = e).transact(u) && (c = i.data[a.get()].bookmark, l = i.data[a.get() - 1], wv(o, l, !0), i.transact(s) && (i.data[a.get() - 1].beforeBookmark = c)));
                        var o, i, a, u, s, c, l
                    }
                }, formatter: {
                    match: function (e, t, n) {
                        return th(f, e, t, n)
                    }, matchAll: function (e, t) {
                        return o = e, i = t, a = [], u = {}, n = (r = f).selection.getStart(), r.dom.getParent(n, function (e) {
                            for (var t = 0; t < o.length; t++) {
                                var n = o[t];
                                !u[n] && eh(r, e, n, i) && (u[n] = !0, a.push(n))
                            }
                        }, r.dom.getRoot()), a;
                        var r, o, i, a, u, n
                    }, matchNode: function (e, t, n, r) {
                        return eh(f, e, t, n, r)
                    }, canApply: function (e) {
                        return function (e, t) {
                            var n, r, o, i, a, u = e.formatter.get(t), s = e.dom;
                            if (u) for (n = e.selection.getStart(), r = lf(s, n), i = u.length - 1; 0 <= i; i--) {
                                if (!(a = u[i].selector) || u[i].defaultBlock) return !0;
                                for (o = r.length - 1; 0 <= o; o--) if (s.is(r[o], a)) return !0
                            }
                            return !1
                        }(f, e)
                    }, closest: function (e) {
                        return nh(f, e)
                    }, apply: function (e, t, n) {
                        return $h(f, e, t, n)
                    }, remove: function (e, t, n, r) {
                        return zh(f, e, t, n, r)
                    }, toggle: function (e, t, n) {
                        return o = e, i = t, a = n, u = (r = f).formatter.get(o), void (!th(r, o, i, a) || "toggle" in u[0] && !u[0].toggle ? $h : zh)(r, o, i, a);
                        var r, o, i, a, u
                    }, formatChanged: function (e, t, n, r) {
                        return Xh(f, e, t, n, r)
                    }
                }, editor: {
                    getContent: function (e, t) {
                        return n = f, r = e, o = t, U.from(n.getBody()).fold(S("tree" === r.format ? new Am("body", 11) : ""), function (e) {
                            return Um(n, r, o, e)
                        });
                        var n, r, o
                    }, setContent: function (e, t) {
                        return $g(f, e, t)
                    }, insertContent: function (e, t) {
                        return zg(f, e, t)
                    }, addVisual: function (e) {
                        return t = e, a = (i = f).dom, n = V(t) ? t : i.getBody(), T(i.hasVisual) && (i.hasVisual = i.getParam("visual", !0, "boolean")), Y(a.select("table,a", n), function (e) {
                            switch (e.nodeName) {
                                case"TABLE":
                                    var t = i.getParam("visual_table_class", "mce-item-table", "string"),
                                        n = a.getAttrib(e, "border");
                                    n && "0" !== n || !i.hasVisual ? a.removeClass(e, t) : a.addClass(e, t);
                                    break;
                                case"A":
                                    var r, o;
                                    a.getAttrib(e, "href") || (r = a.getAttrib(e, "name") || e.id, o = i.getParam("visual_anchor_class", "mce-item-anchor", "string"), r && i.hasVisual ? a.addClass(e, o) : a.removeClass(e, o))
                            }
                        }), void i.fire("VisualAid", {element: t, hasVisual: i.hasVisual});
                        var i, t, a, n
                    }
                }, selection: {
                    getContent: function (e, t) {
                        return pv(f, e, t)
                    }
                }, raw: {
                    getModel: function () {
                        return U.none()
                    }
                }
            }
        }, Rv = function (e) {
            return ve(e.plugins, "rtc")
        }, Tv = function (e) {
            var c = e;
            return he(e.plugins, "rtc").fold(function () {
                return c.rtcInstance = Av(e), U.none()
            }, function (e) {
                return U.some(e.setup().then(function (e) {
                    var t, o, n, i, a, r, u, s;
                    return c.rtcInstance = (o = function (e) {
                        return k(e) ? e : {}
                    }, n = m("Unimplemented feature for rtc"), i = (t = e).undoManager, a = t.formatter, r = t.editor, u = t.selection, s = t.raw, {
                        undoManager: {
                            beforeChange: te, addUndoLevel: n, undo: function () {
                                return i.undo()
                            }, redo: function () {
                                return i.redo()
                            }, clear: function () {
                                return i.clear()
                            }, reset: function () {
                                return i.reset()
                            }, hasUndo: function () {
                                return i.hasUndo()
                            }, hasRedo: function () {
                                return i.hasRedo()
                            }, transact: function (e, t, n) {
                                return i.transact(n)
                            }, ignore: function (e, t) {
                                return i.ignore(t)
                            }, extra: function (e, t, n, r) {
                                return i.extra(n, r)
                            }
                        }, formatter: {
                            match: function (e, t, n) {
                                return a.match(e, o(t))
                            }, matchAll: n, matchNode: n, canApply: function (e) {
                                return a.canApply(e)
                            }, closest: function (e) {
                                return a.closest(e)
                            }, apply: function (e, t, n) {
                                return a.apply(e, o(t))
                            }, remove: function (e, t, n, r) {
                                return a.remove(e, o(t))
                            }, toggle: function (e, t, n) {
                                return a.toggle(e, o(t))
                            }, formatChanged: function (e, t, n, r) {
                                return a.formatChanged(t, n, r)
                            }
                        }, editor: {
                            getContent: function (e, t) {
                                return r.getContent(e)
                            }, setContent: function (e, t) {
                                return r.setContent(e, t)
                            }, insertContent: function (e, t) {
                                return r.insertContent(e)
                            }, addVisual: te
                        }, selection: {
                            getContent: function (e, t) {
                                return u.getContent(t)
                            }
                        }, raw: {
                            getModel: function () {
                                return U.some(s.getRawModel())
                            }
                        }
                    }), e.rtc.isRemote
                }, function (e) {
                    var t, n;
                    return c.rtcInstance = (t = S(null), n = S(""), {
                        undoManager: {
                            beforeChange: te,
                            addUndoLevel: t,
                            undo: t,
                            redo: t,
                            clear: te,
                            reset: te,
                            hasUndo: b,
                            hasRedo: b,
                            transact: t,
                            ignore: te,
                            extra: te
                        },
                        formatter: {
                            match: b,
                            matchAll: S([]),
                            matchNode: b,
                            canApply: b,
                            closest: n,
                            apply: te,
                            remove: te,
                            toggle: te,
                            formatChanged: S({unbind: te})
                        },
                        editor: {getContent: n, setContent: n, insertContent: te, addVisual: te},
                        selection: {getContent: n},
                        raw: {getModel: S(U.none())}
                    }), Ir.reject(e)
                }))
            })
        }, Dv = function (e) {
            return e.rtcInstance ? e.rtcInstance : Av(e)
        }, Ov = function (e) {
            var t = e.rtcInstance;
            if (t) return t;
            throw new Error("Failed to get RTC instance not yet initialized.")
        }, Bv = function (e, t) {
            void 0 === t && (t = {});
            var n, r, o = t.format ? t.format : "html";
            return n = o, r = t, Ov(e).selection.getContent(n, r)
        }, Pv = function (e) {
            return 0 === e.dom.length ? (gn(e), U.none()) : U.some(e)
        }, Lv = function (e, t, s, c) {
            e.bind(function (u) {
                return (c ? Hp : jp)(u.dom, c ? u.dom.length : 0), t.filter(zt).map(function (e) {
                    return t = e, n = s, r = c, o = u.dom, i = t.dom, a = r ? o.length : i.length, void (r ? (Vp(o, i, !1, !r), n.setStart(i, a)) : (Vp(i, o, !1, !r), n.setEnd(i, a)));
                    var t, n, r, o, i, a
                })
            }).orThunk(function () {
                var e;
                return (e = c, t.filter(function (e) {
                    return Gf.isBookmarkNode(e.dom)
                }).bind(e ? Xt : Kt).or(t).filter(zt)).map(function (e) {
                    return r = c, void Wt(n = e).each(function (e) {
                        var t = n.dom;
                        r && Op(e, Is(t, 0)) ? jp(t, 0) : !r && Bp(e, Is(t, t.length)) && Hp(t, t.length)
                    });
                    var n, r
                })
            })
        }, Iv = function (e, t, n) {
            void 0 === n && (n = {});
            var r, o, i = (r = t, _e(_e({format: "html"}, n), {set: !0, selection: !0, content: r}));
            i.no_events || !(i = e.fire("BeforeSetContent", i)).isDefaultPrevented() ? (n.content = function (e, t) {
                if ("raw" === t.format) return t.content;
                var n = e.selection.getRng(), r = e.dom.getParent(n.commonAncestorContainer, e.dom.isBlock),
                    o = r ? {context: r.nodeName.toLowerCase()} : {},
                    i = e.parser.parse(t.content, _e(_e({isRootContent: !0, forced_root_block: !1}, o), t));
                return qm({validate: e.validate}, e.schema).serialize(i)
            }(e, i), function (e, t) {
                var n = U.from(t.firstChild).map(Rt.fromDom), r = U.from(t.lastChild).map(Rt.fromDom);
                e.deleteContents(), e.insertNode(t);
                var o = n.bind(Kt).filter(zt).bind(Pv), i = r.bind(Xt).filter(zt).bind(Pv);
                Lv(o, n, e, !0), Lv(i, r, e, !1), e.collapse(!1)
            }(o = e.selection.getRng(), o.createContextualFragment(n.content)), e.selection.setRng(o), zd(e, o), i.no_events || e.fire("SetContent", i)) : e.fire("SetContent", i)
        }, Mv = function (e, t, n) {
            var r;
            e && e.hasOwnProperty(t) && (0 === (r = H(e[t], function (e) {
                return e !== n
            })).length ? delete e[t] : e[t] = r)
        };
    var Fv, Uv, zv = function (e) {
            return !!e.select
        }, jv = function (e) {
            return !(!e || !e.ownerDocument) && Lt(Rt.fromDom(e.ownerDocument), Rt.fromDom(e))
        }, Hv = function (u, s, e, c) {
            var l, f, i, n, a, d, r = function (e, t) {
                return a || (a = {}, d = {}, n.on("NodeChange", function (e) {
                    var n = e.element, r = i.getParents(n, null, i.getRoot()), o = {};
                    _t.each(a, function (e, n) {
                        _t.each(r, function (t) {
                            if (i.is(t, n)) return d[n] || (_t.each(e, function (e) {
                                e(!0, {node: t, selector: n, parents: r})
                            }), d[n] = e), o[n] = e, !1
                        })
                    }), _t.each(d, function (e, t) {
                        o[t] || (delete d[t], _t.each(e, function (e) {
                            e(!1, {node: n, selector: t, parents: r})
                        }))
                    })
                })), a[e] || (a[e] = []), a[e].push(t), {
                    unbind: function () {
                        Mv(a, e, t), Mv(d, e, t)
                    }
                }
            }, t = function (e, t) {
                return Iv(c, e, t)
            }, o = function (e) {
                var t = p();
                t.collapse(!!e), g(t)
            }, m = function () {
                return s.getSelection ? s.getSelection() : s.document.selection
            }, p = function () {
                var e, t, n, r = function (e, t, n) {
                    try {
                        return t.compareBoundaryPoints(e, n)
                    } catch (r) {
                        return -1
                    }
                }, o = s.document;
                if (c.bookmark !== undefined && !1 === vm(c)) {
                    var i = om(c);
                    if (i.isSome()) return i.map(function (e) {
                        return Nm(c, [e])[0]
                    }).getOr(o.createRange())
                }
                try {
                    (e = m()) && !An(e.anchorNode) && (t = 0 < e.rangeCount ? e.getRangeAt(0) : e.createRange ? e.createRange() : o.createRange(), t = Nm(c, [t])[0])
                } catch (a) {
                }
                return (t = t || (o.createRange ? o.createRange() : o.body.createTextRange())).setStart && 9 === t.startContainer.nodeType && t.collapsed && (n = u.getRoot(), t.setStart(n, 0), t.setEnd(n, 0)), l && f && (0 === r(t.START_TO_START, t, l) && 0 === r(t.END_TO_END, t, l) ? t = f : f = l = null), t
            }, g = function (e, t) {
                var n;
                if ((r = e) && (zv(r) || jv(r.startContainer) && jv(r.endContainer))) {
                    var r, o = zv(e) ? e : null;
                    if (o) {
                        f = null;
                        try {
                            o.select()
                        } catch (a) {
                        }
                    } else {
                        var i = m();
                        if (e = c.fire("SetSelectionRange", {range: e, forward: t}).range, i) {
                            f = e;
                            try {
                                i.removeAllRanges(), i.addRange(e)
                            } catch (a) {
                            }
                            !1 === t && i.extend && (i.collapse(e.endContainer, e.endOffset), i.extend(e.startContainer, e.startOffset)), l = 0 < i.rangeCount ? i.getRangeAt(0) : null
                        }
                        e.collapsed || e.startContainer !== e.endContainer || !i.setBaseAndExtent || xt.ie || e.endOffset - e.startOffset < 2 && e.startContainer.hasChildNodes() && (n = e.startContainer.childNodes[e.startOffset]) && "IMG" === n.tagName && (i.setBaseAndExtent(e.startContainer, e.startOffset, e.endContainer, e.endOffset), i.anchorNode === e.startContainer && i.focusNode === e.endContainer || i.setBaseAndExtent(n, 0, n, 1)), c.fire("AfterSetSelectionRange", {
                            range: e,
                            forward: t
                        })
                    }
                }
            }, h = function () {
                var e = m(), t = null == e ? void 0 : e.anchorNode, n = null == e ? void 0 : e.focusNode;
                if (!e || !t || !n || An(t) || An(n)) return !0;
                var r = u.createRng();
                r.setStart(t, e.anchorOffset), r.collapse(!0);
                var o = u.createRng();
                return o.setStart(n, e.focusOffset), o.collapse(!0), r.compareBoundaryPoints(r.START_TO_START, o) <= 0
            }, v = {
                bookmarkManager: null,
                controlSelection: null,
                dom: i = u,
                win: s,
                serializer: e,
                editor: n = c,
                collapse: o,
                setCursorLocation: function (e, t) {
                    var n = u.createRng();
                    V(e) && V(t) ? (n.setStart(e, t), n.setEnd(e, t), g(n), o(!1)) : (Uf(u, n, c.getBody(), !0), g(n))
                },
                getContent: function (e) {
                    return Bv(c, e)
                },
                setContent: t,
                getBookmark: function (e, t) {
                    return y.getBookmark(e, t)
                },
                moveToBookmark: function (e) {
                    return y.moveToBookmark(e)
                },
                select: function (e, t) {
                    var r, n, o;
                    return r = u, n = e, o = t, U.from(n).map(function (e) {
                        var t = r.nodeIndex(e), n = r.createRng();
                        return n.setStart(e.parentNode, t), n.setEnd(e.parentNode, t + 1), o && (Uf(r, n, e, !0), Uf(r, n, e, !1)), n
                    }).each(g), e
                },
                isCollapsed: function () {
                    var e = p(), t = m();
                    return !(!e || e.item) && (e.compareEndPoints ? 0 === e.compareEndPoints("StartToEnd", e) : !t || e.collapsed)
                },
                isForward: h,
                setNode: function (e) {
                    return t(u.getOuterHTML(e)), e
                },
                getNode: function () {
                    return function (e, t) {
                        var n, r;
                        if (!t) return e;
                        n = t.startContainer, r = t.endContainer;
                        var o = t.startOffset, i = t.endOffset, a = t.commonAncestorContainer;
                        return !t.collapsed && (n === r && i - o < 2 && n.hasChildNodes() && (a = n.childNodes[o]), 3 === n.nodeType && 3 === r.nodeType && (n = n.length === o ? Sm(n.nextSibling, !0) : n.parentNode, r = 0 === i ? Sm(r.previousSibling, !1) : r.parentNode, n && n === r)) ? n : a && 3 === a.nodeType ? a.parentNode : a
                    }(c.getBody(), p())
                },
                getSel: m,
                setRng: g,
                getRng: p,
                getStart: function (e) {
                    return wm(c.getBody(), p(), e)
                },
                getEnd: function (e) {
                    return xm(c.getBody(), p(), e)
                },
                getSelectedBlocks: function (e, t) {
                    return function (e, t, n, r) {
                        var o, i = [], a = e.getRoot();
                        if (n = e.getParent(n || wm(a, t, t.collapsed), e.isBlock), r = e.getParent(r || xm(a, t, t.collapsed), e.isBlock), n && n !== a && i.push(n), n && r && n !== r) for (var u = new Yr(o = n, a); (o = u.next()) && o !== r;) e.isBlock(o) && i.push(o);
                        return r && n !== r && r !== a && i.push(r), i
                    }(u, p(), e, t)
                },
                normalize: function () {
                    var e = p(), t = m();
                    if (1 < Of(t).length || !zf(c)) return e;
                    var n = fd(u, e);
                    return n.each(function (e) {
                        g(e, h())
                    }), n.getOr(e)
                },
                selectorChanged: function (e, t) {
                    return r(e, t), v
                },
                selectorChangedWithUnbind: r,
                getScrollContainer: function () {
                    for (var e, t = u.getRoot(); t && "BODY" !== t.nodeName;) {
                        if (t.scrollHeight > t.clientHeight) {
                            e = t;
                            break
                        }
                        t = t.parentNode
                    }
                    return e
                },
                scrollIntoView: function (e, t) {
                    return r = e, o = t, void ((n = c).inline ? Md : Ud)(n, r, o);
                    var n, r, o
                },
                placeCaretAt: function (e, t) {
                    return g(od(e, t, c.getDoc()))
                },
                getBoundingClientRect: function () {
                    var e = p();
                    return e.collapsed ? Is.fromRangeStart(e).getClientRects()[0] : e.getBoundingClientRect()
                },
                destroy: function () {
                    s = l = f = null, b.destroy()
                }
            }, y = Gf(v), b = nd(v, c);
            return v.bookmarkManager = y, v.controlSelection = b, v
        }, Vv = function (e, a, u) {
            e.addNodeFilter("font", function (e) {
                Y(e, function (e) {
                    var t, n = a.parse(e.attr("style")), r = e.attr("color"), o = e.attr("face"), i = e.attr("size");
                    r && (n.color = r), o && (n["font-family"] = o), i && (n["font-size"] = u[parseInt(e.attr("size"), 10) - 1]), e.name = "span", e.attr("style", a.serialize(n)), t = e, Y(["color", "face", "size"], function (e) {
                        t.attr(e, null)
                    })
                })
            })
        }, qv = function (e, t) {
            var n, r = xi();
            t.convert_fonts_to_spans && Vv(e, r, _t.explode(t.font_size_legacy_values)), n = r, e.addNodeFilter("strike", function (e) {
                Y(e, function (e) {
                    var t = n.parse(e.attr("style"));
                    t["text-decoration"] = "line-through", e.name = "span", e.attr("style", n.serialize(t))
                })
            })
        }, $v = function (e) {
            var t, n = decodeURIComponent(e).split(","), r = /data:([^;]+)/.exec(n[0]);
            return r && (t = r[1]), {type: t, data: n[1]}
        }, Wv = function (e, t) {
            var n;
            try {
                n = atob(t)
            } catch (_k) {
                return U.none()
            }
            for (var r = new Uint8Array(n.length), o = 0; o < r.length; o++) r[o] = n.charCodeAt(o);
            return U.some(new Blob([r], {type: e}))
        }, Kv = function (e) {
            return 0 === e.indexOf("blob:") ? (i = e, new Ir(function (e, t) {
                var n = function () {
                    t("Cannot convert " + i + " to Blob. Resource might not exist or is inaccessible.")
                };
                try {
                    var r = new XMLHttpRequest;
                    r.open("GET", i, !0), r.responseType = "blob", r.onload = function () {
                        200 === r.status ? e(r.response) : n()
                    }, r.onerror = n, r.send()
                } catch (o) {
                    n()
                }
            })) : 0 === e.indexOf("data:") ? (o = e, new Ir(function (e) {
                var t = $v(o), n = t.type, r = t.data;
                Wv(n, r).fold(function () {
                    return e(new Blob([]))
                }, e)
            })) : null;
            var i, o
        }, Xv = 0, Yv = function (e) {
            return (e || "blobid") + Xv++
        }, Gv = function (r, o, i, t) {
            var e, n, a, u, s;
            0 !== o.src.indexOf("blob:") ? (n = (e = $v(o.src)).data, a = e.type, u = n, (s = r.getByData(u, a)) ? i({
                image: o,
                blobInfo: s
            }) : Kv(o.src).then(function (e) {
                s = r.create(Yv(), e, u), r.add(s), i({image: o, blobInfo: s})
            }, function (e) {
                t(e)
            })) : (s = r.getByUri(o.src)) ? i({image: o, blobInfo: s}) : Kv(o.src).then(function (t) {
                var n;
                n = t, new Ir(function (e) {
                    var t = new FileReader;
                    t.onloadend = function () {
                        e(t.result)
                    }, t.readAsDataURL(n)
                }).then(function (e) {
                    u = $v(e).data, s = r.create(Yv(), t, u), r.add(s), i({image: o, blobInfo: s})
                })
            }, function (e) {
                t(e)
            })
        }, Jv = function (i, a) {
            var u = {};
            return {
                findAll: function (e, n) {
                    n = n || w;
                    var t, r = H((t = e) ? ie(t.getElementsByTagName("img")) : [], function (e) {
                        var t = e.src;
                        return xt.fileApi && !e.hasAttribute("data-mce-bogus") && !e.hasAttribute("data-mce-placeholder") && t && t !== xt.transparentSrc && (0 === t.indexOf("blob:") ? !i.isUploaded(t) && n(e) : 0 === t.indexOf("data:") && n(e))
                    }), o = z(r, function (n) {
                        if (u[n.src] !== undefined) return new Ir(function (t) {
                            u[n.src].then(function (e) {
                                return "string" == typeof e ? e : void t({image: n, blobInfo: e.blobInfo})
                            })
                        });
                        var e = new Ir(function (e, t) {
                            Gv(a, n, e, t)
                        }).then(function (e) {
                            return delete u[e.image.src], e
                        })["catch"](function (e) {
                            return delete u[n.src], e
                        });
                        return u[n.src] = e
                    });
                    return Ir.all(o)
                }
            }
        }, Qv = function (e, t, n, r) {
            (e.padd_empty_with_br || t.insert) && n[r.name] ? r.empty().append(new Am("br", 1)).shortEnded = !0 : r.empty().append(new Am("#text", 3)).value = fo
        }, Zv = function (e, t) {
            return e && e.firstChild && e.firstChild === e.lastChild && e.firstChild.name === t
        }, ey = function (r, e, t, n) {
            return n.isEmpty(e, t, function (e) {
                return t = e, (n = r.getElementRule(t.name)) && n.paddEmpty;
                var t, n
            })
        }, ty = function (e, o) {
            var i = o.blob_cache, t = function (t) {
                var e, n, r = t.attr("src");
                (e = t).attr("src") === xt.transparentSrc || e.attr("data-mce-placeholder") || t.attr("data-mce-bogus") || ((n = /data:([^;]+);base64,([a-z0-9\+\/=]+)/i.exec(r)) ? U.some({
                    type: n[1],
                    data: decodeURIComponent(n[2])
                }) : U.none()).filter(function () {
                    return function (e, t) {
                        if (t.images_dataimg_filter) {
                            var n = new Image;
                            return n.src = e.attr("src"), se(e.attributes.map, function (e, t) {
                                n.setAttribute(t, e)
                            }), t.images_dataimg_filter(n)
                        }
                        return !0
                    }(t, o)
                }).bind(function (e) {
                    var t = e.type, n = e.data;
                    return U.from(i.getByData(n, t)).orThunk(function () {
                        return Wv(t, n).map(function (e) {
                            var t = i.create(Yv(), e, n);
                            return i.add(t), t
                        })
                    })
                }).each(function (e) {
                    t.attr("src", e.blobUri())
                })
            };
            i && e.addAttributeFilter("src", function (e) {
                return Y(e, t)
            })
        }, ny = function (e, g) {
            var h = e.schema;
            g.remove_trailing_brs && e.addNodeFilter("br", function (e, t, n) {
                var r, o, i, a, u, s, c, l, f = e.length, d = _t.extend({}, h.getBlockElements()),
                    m = h.getNonEmptyElements(), p = h.getWhiteSpaceElements();
                for (d.body = 1, r = 0; r < f; r++) if (i = (o = e[r]).parent, d[o.parent.name] && o === i.lastChild) {
                    for (u = o.prev; u;) {
                        if ("span" !== (s = u.name) || "bookmark" !== u.attr("data-mce-type")) {
                            "br" === s && (o = null);
                            break
                        }
                        u = u.prev
                    }
                    o && (o.remove(), ey(h, m, p, i) && (c = h.getElementRule(i.name)) && (c.removeEmpty ? i.remove() : c.paddEmpty && Qv(g, n, d, i)))
                } else {
                    for (a = o; i && i.firstChild === a && i.lastChild === a && !d[(a = i).name];) i = i.parent;
                    a === i && !0 !== g.padd_empty_with_br && ((l = new Am("#text", 3)).value = fo, o.replace(l))
                }
            }), e.addAttributeFilter("href", function (e) {
                var t, n, r = e.length;
                if (!g.allow_unsafe_link_target) for (; r--;) {
                    var o = e[r];
                    "a" === o.name && "_blank" === o.attr("target") && o.attr("rel", (t = o.attr("rel"), n = t ? _t.trim(t) : "", /\b(noopener)\b/g.test(n) ? n : n.split(" ").filter(function (e) {
                        return 0 < e.length
                    }).concat(["noopener"]).sort().join(" ")))
                }
            }), g.allow_html_in_named_anchor || e.addAttributeFilter("id,name", function (e) {
                for (var t, n, r, o, i = e.length; i--;) if ("a" === (o = e[i]).name && o.firstChild && !o.attr("href")) for (r = o.parent, t = o.lastChild; n = t.prev, r.insert(t, o), t = n;) ;
            }), g.fix_list_elements && e.addNodeFilter("ul,ol", function (e) {
                for (var t, n, r, o = e.length; o--;) {
                    "ul" !== (r = (n = e[o]).parent).name && "ol" !== r.name || (n.prev && "li" === n.prev.name ? n.prev.append(n) : ((t = new Am("li", 1)).attr("style", "list-style-type: none"), n.wrap(t)))
                }
            }), g.validate && h.getValidClasses() && e.addAttributeFilter("class", function (e) {
                for (var t, n, r, o, i, a, u, s = e.length, c = h.getValidClasses(); s--;) {
                    for (n = (t = e[s]).attr("class").split(" "), i = "", r = 0; r < n.length; r++) o = n[r], u = !1, (a = c["*"]) && a[o] && (u = !0), a = c[t.name], !u && a && a[o] && (u = !0), u && (i && (i += " "), i += o);
                    i.length || (i = null), t.attr("class", i)
                }
            }), ty(e, g)
        }, ry = _t.makeMap, oy = _t.each, iy = _t.explode, ay = _t.extend, uy = function (A, R) {
            void 0 === R && (R = Ci());
            var T = {}, D = [], O = {}, B = {};
            (A = A || {}).validate = !("validate" in A) || A.validate, A.root_name = A.root_name || "body";
            var e, t, P = function (e) {
                var t, n, r = e.name;
                r in T && ((n = O[r]) ? n.push(e) : O[r] = [e]), t = D.length;
                for (; t--;) (r = D[t].name) in e.attributes.map && ((n = B[r]) ? n.push(e) : B[r] = [e]);
                return e
            }, n = {
                schema: R, addAttributeFilter: function (e, n) {
                    oy(iy(e), function (e) {
                        for (var t = 0; t < D.length; t++) if (D[t].name === e) return void D[t].callbacks.push(n);
                        D.push({name: e, callbacks: [n]})
                    })
                }, getAttributeFilters: function () {
                    return [].concat(D)
                }, addNodeFilter: function (e, n) {
                    oy(iy(e), function (e) {
                        var t = T[e];
                        t || (T[e] = t = []), t.push(n)
                    })
                }, getNodeFilters: function () {
                    var e = [];
                    for (var t in T) T.hasOwnProperty(t) && e.push({name: t, callbacks: T[t]});
                    return e
                }, filterNode: P, parse: function (e, u) {
                    var t, n, r, o, i, s, a, c, l = [];
                    u = u || {}, O = {}, B = {};
                    var f, d = ay(ry("script,style,head,html,body,title,meta,param"), R.getBlockElements()),
                        m = R.getNonEmptyElements(), p = R.children, g = A.validate,
                        h = "forced_root_block" in u ? u.forced_root_block : A.forced_root_block,
                        v = !1 === (f = h) ? "" : !0 === f ? "p" : f, y = R.getWhiteSpaceElements(), b = /^[ \t\r\n]+/,
                        C = /[ \t\r\n]+$/, w = /[ \t\r\n]+/g, x = /^[ \t\r\n]+$/,
                        S = y.hasOwnProperty(u.context) || y.hasOwnProperty(A.root_name), N = function (e, t) {
                            var n, r = new Am(e, t);
                            return e in T && ((n = O[e]) ? n.push(r) : O[e] = [r]), r
                        }, E = function (e) {
                            for (var t, n, r, o = R.getBlockElements(), i = e.prev; i && 3 === i.type;) {
                                if (0 < (n = i.value.replace(C, "")).length) return void (i.value = n);
                                if (t = i.next) {
                                    if (3 === t.type && t.value.length) {
                                        i = i.prev;
                                        continue
                                    }
                                    if (!o[t.name] && "script" !== t.name && "style" !== t.name) {
                                        i = i.prev;
                                        continue
                                    }
                                }
                                r = i.prev, i.remove(), i = r
                            }
                        }, k = Pm({
                            validate: g,
                            allow_html_data_urls: A.allow_html_data_urls,
                            allow_svg_data_urls: A.allow_svg_data_urls,
                            allow_script_urls: A.allow_script_urls,
                            allow_conditional_comments: A.allow_conditional_comments,
                            preserve_cdata: A.preserve_cdata,
                            self_closing_elements: function (e) {
                                var t, n = {};
                                for (t in e) "li" !== t && "p" !== t && (n[t] = e[t]);
                                return n
                            }(R.getSelfClosingElements()),
                            cdata: function (e) {
                                c.append(N("#cdata", 4)).value = e
                            },
                            text: function (e, t) {
                                var n, r, o;
                                S || (e = e.replace(w, " "), r = c.lastChild, o = d, r && (o[r.name] || "br" === r.name) && (e = e.replace(b, ""))), 0 !== e.length && ((n = N("#text", 3)).raw = !!t, c.append(n).value = e)
                            },
                            comment: function (e) {
                                c.append(N("#comment", 8)).value = e
                            },
                            pi: function (e, t) {
                                c.append(N(e, 7)).value = t, E(c)
                            },
                            doctype: function (e) {
                                c.append(N("#doctype", 10)).value = e, E(c)
                            },
                            start: function (e, t, n) {
                                var r, o, i, a, u = g ? R.getElementRule(e) : {};
                                if (u) {
                                    for ((r = N(u.outputName || e, 1)).attributes = t, r.shortEnded = n, c.append(r), (a = p[c.name]) && p[r.name] && !a[r.name] && l.push(r), o = D.length; o--;) (i = D[o].name) in t.map && ((s = B[i]) ? s.push(r) : B[i] = [r]);
                                    d[e] && E(r), n || (c = r), !S && y[e] && (S = !0)
                                }
                            },
                            end: function (e) {
                                var t, n, r, o, i, a = g ? R.getElementRule(e) : {};
                                if (a) {
                                    if (d[e] && !S) {
                                        if ((t = c.firstChild) && 3 === t.type) if (0 < (n = t.value.replace(b, "")).length) t.value = n, t = t.next; else for (r = t.next, t.remove(), t = r; t && 3 === t.type;) n = t.value, r = t.next, 0 !== n.length && !x.test(n) || (t.remove(), t = r), t = r;
                                        if ((t = c.lastChild) && 3 === t.type) if (0 < (n = t.value.replace(C, "")).length) t.value = n, t = t.prev; else for (r = t.prev, t.remove(), t = r; t && 3 === t.type;) n = t.value, r = t.prev, 0 !== n.length && !x.test(n) || (t.remove(), t = r), t = r
                                    }
                                    if (S && y[e] && (S = !1), a.removeEmpty && ey(R, m, y, c)) return o = c.parent, d[c.name] ? c.empty().remove() : c.unwrap(), void (c = o);
                                    a.paddEmpty && (Zv(i = c, "#text") && i.firstChild.value === fo || ey(R, m, y, c)) && Qv(A, u, d, c), c = c.parent
                                }
                            }
                        }, R), _ = c = new Am(u.context || A.root_name, 11);
                    if (k.parse(e, u.format), g && l.length && (u.context ? u.invalid = !0 : function (e) {
                        for (var t, n, r, o, i, a, u, s, c, l, f = ry("tr,td,th,tbody,thead,tfoot,table"), d = R.getNonEmptyElements(), m = R.getWhiteSpaceElements(), p = R.getTextBlockElements(), g = R.getSpecialElements(), h = 0; h < e.length; h++) if ((t = e[h]).parent && !t.fixed) if (p[t.name] && "li" === t.parent.name) {
                            for (c = t.next; c && p[c.name];) c.name = "li", c.fixed = !0, t.parent.insert(c, t.parent), c = c.next;
                            t.unwrap(t)
                        } else {
                            for (r = [t], n = t.parent; n && !R.isValidChild(n.name, t.name) && !f[n.name]; n = n.parent) r.push(n);
                            if (n && 1 < r.length) {
                                for (r.reverse(), o = i = P(r[0].clone()), s = 0; s < r.length - 1; s++) {
                                    for (R.isValidChild(i.name, r[s].name) ? (a = P(r[s].clone()), i.append(a)) : a = i, u = r[s].firstChild; u && u !== r[s + 1];) l = u.next, a.append(u), u = l;
                                    i = a
                                }
                                ey(R, d, m, o) ? n.insert(t, r[0], !0) : (n.insert(o, r[0], !0), n.insert(t, o)), n = r[0], (ey(R, d, m, n) || Zv(n, "br")) && n.empty().remove()
                            } else if (t.parent) {
                                if ("li" === t.name) {
                                    if ((c = t.prev) && ("ul" === c.name || "ol" === c.name)) {
                                        c.append(t);
                                        continue
                                    }
                                    if ((c = t.next) && ("ul" === c.name || "ol" === c.name)) {
                                        c.insert(t, c.firstChild, !0);
                                        continue
                                    }
                                    t.wrap(P(new Am("ul", 1)));
                                    continue
                                }
                                R.isValidChild(t.parent.name, "div") && R.isValidChild("div", t.name) ? t.wrap(P(new Am("div", 1))) : g[t.name] ? t.empty().remove() : t.unwrap()
                            }
                        }
                    }(l)), v && ("body" === _.name || u.isRootContent) && function () {
                        var e, t, n = _.firstChild, r = function (e) {
                            e && ((n = e.firstChild) && 3 === n.type && (n.value = n.value.replace(b, "")), (n = e.lastChild) && 3 === n.type && (n.value = n.value.replace(C, "")))
                        };
                        if (R.isValidChild(_.name, v.toLowerCase())) {
                            for (; n;) e = n.next, 3 === n.type || 1 === n.type && "p" !== n.name && !d[n.name] && !n.attr("data-mce-type") ? (t || ((t = N(v, 1)).attr(A.forced_root_block_attrs), _.insert(t, n)), t.append(n)) : (r(t), t = null), n = e;
                            r(t)
                        }
                    }(), !u.invalid) {
                        for (a in O) if (O.hasOwnProperty(a)) {
                            for (s = T[a], o = (t = O[a]).length; o--;) t[o].parent || t.splice(o, 1);
                            for (n = 0, r = s.length; n < r; n++) s[n](t, a, u)
                        }
                        for (n = 0, r = D.length; n < r; n++) if ((s = D[n]).name in B) {
                            for (o = (t = B[s.name]).length; o--;) t[o].parent || t.splice(o, 1);
                            for (o = 0, i = s.callbacks.length; o < i; o++) s.callbacks[o](t, s.name, u)
                        }
                    }
                    return _
                }
            };
            return ny(n, A), e = n, (t = A).inline_styles && qv(e, t), n
        }, sy = function (e, t, n) {
            return o = n, (r = e) && r.hasEventListeners("PreProcess") && !o.no_events ? function (e, t, n) {
                var r, o, i = e.dom;
                t = t.cloneNode(!0);
                var a, u, s = document.implementation;
                return s.createHTMLDocument && (r = s.createHTMLDocument(""), _t.each("BODY" === t.nodeName ? t.childNodes : [t], function (e) {
                    r.body.appendChild(r.importNode(e, !0))
                }), t = "BODY" !== t.nodeName ? r.body.firstChild : r.body, o = i.doc, i.doc = r), a = e, u = _e(_e({}, n), {node: t}), a.fire("PreProcess", u), o && (i.doc = o), t
            }(e, t, n) : t;
            var r, o
        }, cy = function (e, t, n) {
            -1 === _t.inArray(t, n) && (e.addAttributeFilter(n, function (e, t) {
                for (var n = e.length; n--;) e[n].attr(t, null)
            }), t.push(n))
        }, ly = function (e, t, n, r, o) {
            var i, a, u, s, c, l, f = (i = r, qm(t, n).serialize(i));
            return a = e, s = f, (u = o).no_events || !a ? s : (c = a, l = _e(_e({}, u), {content: s}), c.fire("PostProcess", l).content)
        }, fy = function (y, b) {
            var e = ["data-mce-selected"], C = b && b.dom ? b.dom : xu.DOM, w = b && b.schema ? b.schema : Ci(y);
            y.entity_encoding = y.entity_encoding || "named", y.remove_trailing_brs = !("remove_trailing_brs" in y) || y.remove_trailing_brs;
            var t, s, c, x = uy(y, w);
            s = y, c = C, (t = x).addAttributeFilter("data-mce-tabindex", function (e, t) {
                for (var n, r = e.length; r--;) (n = e[r]).attr("tabindex", n.attr("data-mce-tabindex")), n.attr(t, null)
            }), t.addAttributeFilter("src,href,style", function (e, t) {
                for (var n, r, o = e.length, i = "data-mce-" + t, a = s.url_converter, u = s.url_converter_scope; o--;) (r = (n = e[o]).attr(i)) !== undefined ? (n.attr(t, 0 < r.length ? r : null), n.attr(i, null)) : (r = n.attr(t), "style" === t ? r = c.serializeStyle(c.parseStyle(r), n.name) : a && (r = a.call(u, r, t, n.name)), n.attr(t, 0 < r.length ? r : null))
            }), t.addAttributeFilter("class", function (e) {
                for (var t, n, r = e.length; r--;) (n = (t = e[r]).attr("class")) && (n = t.attr("class").replace(/(?:^|\s)mce-item-\w+(?!\S)/g, ""), t.attr("class", 0 < n.length ? n : null))
            }), t.addAttributeFilter("data-mce-type", function (e, t, n) {
                for (var r, o = e.length; o--;) {
                    "bookmark" !== (r = e[o]).attr("data-mce-type") || n.cleanup || (U.from(r.firstChild).exists(function (e) {
                        return !po(e.value)
                    }) ? r.unwrap() : r.remove())
                }
            }), t.addNodeFilter("noscript", function (e) {
                for (var t, n = e.length; n--;) (t = e[n].firstChild) && (t.value = li.decode(t.value))
            }), t.addNodeFilter("script,style", function (e, t) {
                for (var n, r, o, i = e.length, a = function (e) {
                    return e.replace(/(<!--\[CDATA\[|\]\]-->)/g, "\n").replace(/^[\r\n]*|[\r\n]*$/g, "").replace(/^\s*((<!--)?(\s*\/\/)?\s*<!\[CDATA\[|(<!--\s*)?\/\*\s*<!\[CDATA\[\s*\*\/|(\/\/)?\s*<!--|\/\*\s*<!--\s*\*\/)\s*[\r\n]*/gi, "").replace(/\s*(\/\*\s*\]\]>\s*\*\/(-->)?|\s*\/\/\s*\]\]>(-->)?|\/\/\s*(-->)?|\]\]>|\/\*\s*-->\s*\*\/|\s*-->\s*)\s*$/g, "")
                }; i--;) r = (n = e[i]).firstChild ? n.firstChild.value : "", "script" === t ? ((o = n.attr("type")) && n.attr("type", "mce-no/type" === o ? null : o.replace(/^mce\-/, "")), "xhtml" === s.element_format && 0 < r.length && (n.firstChild.value = "// <![CDATA[\n" + a(r) + "\n// ]]>")) : "xhtml" === s.element_format && 0 < r.length && (n.firstChild.value = "\x3c!--\n" + a(r) + "\n--\x3e")
            }), t.addNodeFilter("#comment", function (e) {
                for (var t, n = e.length; n--;) t = e[n], s.preserve_cdata && 0 === t.value.indexOf("[CDATA[") ? (t.name = "#cdata", t.type = 4, t.value = c.decode(t.value.replace(/^\[CDATA\[|\]\]$/g, ""))) : 0 === t.value.indexOf("mce:protected ") && (t.name = "#text", t.type = 3, t.raw = !0, t.value = unescape(t.value).substr(14))
            }), t.addNodeFilter("xml:namespace,input", function (e, t) {
                for (var n, r = e.length; r--;) 7 === (n = e[r]).type ? n.remove() : 1 === n.type && ("input" !== t || n.attr("type") || n.attr("type", "text"))
            }), t.addAttributeFilter("data-mce-type", function (e) {
                Y(e, function (e) {
                    "format-caret" === e.attr("data-mce-type") && (e.isEmpty(t.schema.getNonEmptyElements()) ? e.remove() : e.unwrap())
                })
            }), t.addAttributeFilter("data-mce-src,data-mce-href,data-mce-style,data-mce-selected,data-mce-expando,data-mce-type,data-mce-resize,data-mce-placeholder", function (e, t) {
                for (var n = e.length; n--;) e[n].attr(t, null)
            });
            return {
                schema: w,
                addNodeFilter: x.addNodeFilter,
                addAttributeFilter: x.addAttributeFilter,
                serialize: function (e, t) {
                    void 0 === t && (t = {});
                    var n, r, o, i, a, u, s, c, l, f, d, m, p = _e({format: "html"}, t), g = sy(b, e, p),
                        h = (n = C, r = g, i = go((o = p).getInner ? r.innerHTML : n.getOuterHTML(r)), o.selection || co(Rt.fromDom(r)) ? i : _t.trim(i)),
                        v = (a = x, u = h, d = (s = p).selection ? _e({forced_root_block: !1}, s) : s, m = a.parse(u, d), l = function (e) {
                            return e && "br" === e.name
                        }, f = m.lastChild, !l(f) || l(c = f.prev) && (f.remove(), c.remove()), m);
                    return "tree" === p.format ? v : ly(b, y, w, v, p)
                },
                addRules: function (e) {
                    w.addValidElements(e)
                },
                setRules: function (e) {
                    w.setValidElements(e)
                },
                addTempAttr: N(cy, x, e),
                getTempAttrs: S(e),
                getNodeFilters: x.getNodeFilters,
                getAttributeFilters: x.getAttributeFilters
            }
        }, dy = function (e, t) {
            var n = fy(e, t);
            return {
                schema: n.schema,
                addNodeFilter: n.addNodeFilter,
                addAttributeFilter: n.addAttributeFilter,
                serialize: n.serialize,
                addRules: n.addRules,
                setRules: n.setRules,
                addTempAttr: n.addTempAttr,
                getTempAttrs: n.getTempAttrs,
                getNodeFilters: n.getNodeFilters,
                getAttributeFilters: n.getAttributeFilters
            }
        }, my = function (e, t) {
            void 0 === t && (t = {});
            var n, r, o = t.format ? t.format : "html";
            return n = t, r = o, Dv(e).editor.getContent(n, r)
        }, py = function (e, t, n) {
            return void 0 === n && (n = {}), r = t, o = n, Dv(e).editor.setContent(r, o);
            var r, o
        }, gy = xu.DOM, hy = function (e) {
            return U.from(e).each(function (e) {
                return e.destroy()
            })
        }, vy = function (e) {
            var t, n, r, o, i;
            e.removed || (t = e._selectionOverrides, n = e.editorUpload, r = e.getBody(), o = e.getElement(), r && e.save({is_removing: !0}), e.removed = !0, e.unbindAllNativeEvents(), e.hasHiddenInput && o && gy.remove(o.nextSibling), e.fire("remove"), e.editorManager.remove(e), !e.inline && r && (i = e, gy.setStyle(i.id, "display", i.orgDisplay)), e.fire("detach"), gy.remove(e.getContainer()), hy(t), hy(n), e.destroy())
        }, yy = function (e, t) {
            var n, r, o, i = e.selection, a = e.dom;
            e.destroyed || (t || e.removed ? (t || (e.editorManager.off("beforeunload", e._beforeUnload), e.theme && e.theme.destroy && e.theme.destroy(), hy(i), hy(a)), (r = (n = e).formElement) && (r._mceOldSubmit && (r.submit = r._mceOldSubmit, r._mceOldSubmit = null), gy.unbind(r, "submit reset", n.formEventDelegate)), (o = e).contentAreaContainer = o.formElement = o.container = o.editorContainer = null, o.bodyElement = o.contentDocument = o.contentWindow = null, o.iframeElement = o.targetElm = null, o.selection && (o.selection = o.selection.win = o.selection.dom = o.selection.dom.doc = null), e.destroyed = !0) : e.remove())
        }, by = Object.prototype.hasOwnProperty, Cy = (Fv = function (e, t) {
            return k(e) && k(t) ? Cy(e, t) : t
        }, function () {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            if (0 === e.length) throw new Error("Can't merge zero objects");
            for (var n = {}, r = 0; r < e.length; r++) {
                var o = e[r];
                for (var i in o) by.call(o, i) && (n[i] = Fv(n[i], o[i]))
            }
            return n
        }), wy = mt().deviceType, xy = wy.isTouch(), Sy = wy.isPhone(), Ny = wy.isTablet(),
        Ey = ["lists", "autolink", "autosave"], ky = {table_grid: !1, object_resizing: !1, resize: !1},
        _y = function (e) {
            var t = _(e) ? e.join(" ") : e, n = z(K(t) ? t.split(" ") : [], We);
            return H(n, function (e) {
                return 0 < e.length
            })
        }, Ay = function (n, e) {
            var t, r, o = me(e, function (e, t) {
                return M(n, t)
            });
            return t = o.t, r = o.f, {sections: S(t), settings: S(r)}
        }, Ry = function (e, t) {
            return e.sections().hasOwnProperty(t)
        }, Ty = function (e, t) {
            return he(e, "toolbar_mode").orThunk(function () {
                return he(e, "toolbar_drawer").map(function (e) {
                    return !1 === e ? "wrap" : e
                })
            }).getOr(t)
        }, Dy = function (e, t, n, r) {
            return e && (a = i = "mobile", u = (o = t).sections(), Ry(o, i) && u[i].theme === a) ? H(r, N(M, Ey)) : e && Ry(t, "mobile") ? r : n;
            var o, i, a, u
        }, Oy = function (e, t, n, r) {
            var o, i, a, u = _y(n.forced_plugins), s = _y(r.plugins), c = Ry(o = t, i = "mobile") ? o.sections()[i] : {},
                l = c.plugins ? _y(c.plugins) : s, f = Dy(e, t, s, l), d = (a = f, [].concat(_y(u)).concat(_y(a)));
            if (xt.browser.isIE() && M(d, "rtc")) throw new Error("RTC plugin is not supported on IE 11.");
            return _t.extend(r, {plugins: d.join(" ")})
        }, By = function (e, t, n, r, o) {
            var i, a, u, s, c, l, f, d = e ? {
                    mobile: (i = o.mobile || {}, a = t, u = {
                        resize: !1,
                        toolbar_mode: Ty(i, "scrolling"),
                        toolbar_sticky: !1
                    }, _e(_e(_e({}, ky), u), a ? {menubar: !1} : {}))
                } : {}, m = Ay(["mobile"], Cy(d, o)),
                p = _t.extend(n, r, m.settings(), (f = m, e && Ry(f, "mobile") ? function (e, t, n) {
                    void 0 === n && (n = {});
                    var r = e.sections(), o = r.hasOwnProperty(t) ? r[t] : {};
                    return _t.extend({}, n, o)
                }(m, "mobile") : {}), {
                    validate: !0,
                    external_plugins: (s = r, c = m.settings(), l = c.external_plugins ? c.external_plugins : {}, s && s.external_plugins ? _t.extend({}, s.external_plugins, l) : l)
                });
            return Oy(e, m, r, p)
        }, Py = function (e, t, n, r, o) {
            var i, a, u, s, c = (i = n, a = xy, u = e, s = {
                id: t,
                theme: "silver",
                toolbar_mode: Ty(o, "floating"),
                plugins: "",
                document_base_url: i,
                add_form_submit_trigger: !0,
                submit_patch: !0,
                add_unload_trigger: !0,
                convert_urls: !0,
                relative_urls: !0,
                remove_script_host: !0,
                object_resizing: !0,
                doctype: "<!DOCTYPE html>",
                visual: !0,
                font_size_legacy_values: "xx-small,small,medium,large,x-large,xx-large,300%",
                forced_root_block: "p",
                hidden_input: !0,
                inline_styles: !0,
                convert_fonts_to_spans: !0,
                indent: !0,
                indent_before: "p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,summary,article,hgroup,aside,figure,figcaption,option,optgroup,datalist",
                indent_after: "p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,summary,article,hgroup,aside,figure,figcaption,option,optgroup,datalist",
                entity_encoding: "named",
                url_converter: u.convertURL,
                url_converter_scope: u
            }, _e(_e({}, s), a ? ky : {}));
            return By(Sy || Ny, Sy, c, r, o)
        }, Ly = function (e, t, n) {
            return U.from(t.settings[n]).filter(e)
        }, Iy = function (e, t, n, r) {
            var o, i, a, u = t in e.settings ? e.settings[t] : n;
            return "hash" === r ? (a = {}, "string" == typeof (i = u) ? Y(0 < i.indexOf("=") ? i.split(/[;,](?![^=;,]*(?:[;,]|$))/) : i.split(","), function (e) {
                var t = e.split("=");
                1 < t.length ? a[_t.trim(t[0])] = _t.trim(t[1]) : a[_t.trim(t[0])] = _t.trim(t[0])
            }) : a = i, a) : "string" === r ? Ly(K, e, t).getOr(n) : "number" === r ? Ly(O, e, t).getOr(n) : "boolean" === r ? Ly(R, e, t).getOr(n) : "object" === r ? Ly(k, e, t).getOr(n) : "array" === r ? Ly(_, e, t).getOr(n) : "string[]" === r ? Ly((o = K, function (e) {
                return _(e) && Q(e, o)
            }), e, t).getOr(n) : "function" === r ? Ly(D, e, t).getOr(n) : u
        }, My = (Uv = {}, {
            add: function (e, t) {
                Uv[e] = t
            }, get: function (e) {
                return Uv[e] ? Uv[e] : {icons: {}}
            }, has: function (e) {
                return ve(Uv, e)
            }
        }), Fy = function (e, t) {
            return t.dom[e]
        }, Uy = function (e, t) {
            return parseInt(tr(t, e), 10)
        }, zy = N(Fy, "clientWidth"), jy = N(Fy, "clientHeight"), Hy = N(Uy, "margin-top"), Vy = N(Uy, "margin-left"),
        qy = function (e, t, n) {
            var r, o, i, a, u, s, c, l, f, d, m, p = Rt.fromDom(e.getBody()),
                g = e.inline ? p : (r = p, Rt.fromDom(qt(r).dom.documentElement)),
                h = (o = e.inline, a = t, u = n, s = (i = g).dom.getBoundingClientRect(), {
                    x: a - (o ? s.left + i.dom.clientLeft + Vy(i) : 0),
                    y: u - (o ? s.top + i.dom.clientTop + Hy(i) : 0)
                });
            return l = h.x, f = h.y, d = zy(c = g), m = jy(c), 0 <= l && 0 <= f && l <= d && f <= m
        }, $y = function (e) {
            var t, n = e.inline ? e.getBody() : e.getContentAreaContainer();
            return t = n, U.from(t).map(Rt.fromDom).map(vn).getOr(!1)
        }, Wy = function (n) {
            var t, o = [], i = function () {
                var e, t = n.theme;
                return t && t.getNotificationManagerImpl ? t.getNotificationManagerImpl() : {
                    open: e = function () {
                        throw new Error("Theme did not provide a NotificationManager implementation.")
                    }, close: e, reposition: e, getArgs: e
                }
            }, a = function () {
                return U.from(o[0])
            }, u = function () {
                0 < o.length && i().reposition(o)
            }, s = function (t) {
                G(o, function (e) {
                    return e === t
                }).each(function (e) {
                    o.splice(e, 1)
                })
            }, r = function (r, e) {
                if (void 0 === e && (e = !0), !n.removed && $y(n)) return e && n.fire("BeforeOpenNotification", {notification: r}), W(o, function (e) {
                    return t = i().getArgs(e), n = r, !(t.type !== n.type || t.text !== n.text || t.progressBar || t.timeout || n.progressBar || n.timeout);
                    var t, n
                }).getOrThunk(function () {
                    n.editorManager.setActive(n);
                    var e, t = i().open(r, function () {
                        s(t), u(), a().fold(function () {
                            return n.focus()
                        }, function (e) {
                            return Rt.fromDom(e.getEl()).dom.focus()
                        })
                    });
                    return e = t, o.push(e), u(), n.fire("OpenNotification", _e({}, t)), t
                })
            };
            return (t = n).on("SkinLoaded", function () {
                var e = t.getParam("service_message");
                e && r({text: e, type: "warning", timeout: 0}, !1)
            }), t.on("ResizeEditor ResizeWindow NodeChange", function () {
                Wr.requestAnimationFrame(u)
            }), t.on("remove", function () {
                Y(o.slice(), function (e) {
                    i().close(e)
                })
            }), {
                open: r, close: function () {
                    a().each(function (e) {
                        i().close(e), s(e), u()
                    })
                }, getNotifications: function () {
                    return o
                }
            }
        }, Ky = Bu.PluginManager, Xy = Bu.ThemeManager;
    var Yy, Gy, Jy = function (n) {
            var r = [], o = function () {
                var e, t = n.theme;
                return t && t.getWindowManagerImpl ? t.getWindowManagerImpl() : {
                    open: e = function () {
                        throw new Error("Theme did not provide a WindowManager implementation.")
                    }, openUrl: e, alert: e, confirm: e, close: e, getParams: e, setParams: e
                }
            }, i = function (n, r) {
                return function () {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    return r ? r.apply(n, e) : undefined
                }
            }, a = function (e) {
                var t;
                r.push(e), t = e, n.fire("OpenWindow", {dialog: t})
            }, u = function (t) {
                var e;
                e = t, n.fire("CloseWindow", {dialog: e}), 0 === (r = H(r, function (e) {
                    return e !== t
                })).length && n.focus()
            }, s = function (e) {
                n.editorManager.setActive(n), rm(n);
                var t = e();
                return a(t), t
            };
            return n.on("remove", function () {
                Y(r, function (e) {
                    o().close(e)
                })
            }), {
                open: function (e, t) {
                    return s(function () {
                        return o().open(e, t, u)
                    })
                }, openUrl: function (e) {
                    return s(function () {
                        return o().openUrl(e, u)
                    })
                }, alert: function (e, t, n) {
                    var r = o();
                    r.alert(e, i(n || r, t))
                }, confirm: function (e, t, n) {
                    var r = o();
                    r.confirm(e, i(n || r, t))
                }, close: function () {
                    U.from(r[r.length - 1]).each(function (e) {
                        o().close(e), u(e)
                    })
                }
            }
        }, Qy = function (e, t) {
            e.notificationManager.open({type: "error", text: t})
        }, Zy = function (e, t) {
            e._skinLoaded ? Qy(e, t) : e.on("SkinLoaded", function () {
                Qy(e, t)
            })
        }, eb = function (e, t, n) {
            Zf(e, t, {message: n}), console.error(n)
        }, tb = function (e, t, n) {
            return n ? "Failed to load " + e + ": " + n + " from url " + t : "Failed to load " + e + " url: " + t
        }, nb = function (e, t, n) {
            eb(e, "PluginLoadError", tb("plugin", t, n))
        }, rb = function (e) {
            for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            var r = window.console;
            r && (r.error ? r.error.apply(r, Ae([e], t)) : r.log.apply(r, Ae([e], t)))
        }, ob = function (e) {
            return ib(e, (n = (t = e).getParam("content_css"), K(n) ? z(n.split(","), We) : _(n) ? n : !1 === n || t.inline ? [] : ["default"]));
            var t, n
        }, ib = function (t, e) {
            var n = t.editorManager.baseURL + "/skins/content", r = "content" + t.editorManager.suffix + ".css",
                o = !0 === t.inline;
            return z(e, function (e) {
                return /^[a-z0-9\-]+$/i.test(e) && !o ? n + "/" + e + "/" + r : t.documentBaseURI.toAbsolute(e)
            })
        }, ab = function (e) {
            var t;
            e.contentCSS = e.contentCSS.concat(ob(e), ib(t = e, vc(t)))
        }, ub = function () {
            var n = {}, r = function (e, t) {
                return {status: e, resultUri: t}
            }, t = function (e) {
                return e in n
            };
            return {
                hasBlobUri: t, getResultUri: function (e) {
                    var t = n[e];
                    return t ? t.resultUri : null
                }, isPending: function (e) {
                    return !!t(e) && 1 === n[e].status
                }, isUploaded: function (e) {
                    return !!t(e) && 2 === n[e].status
                }, markPending: function (e) {
                    n[e] = r(1, null)
                }, markUploaded: function (e, t) {
                    n[e] = r(2, t)
                }, removeFailed: function (e) {
                    delete n[e]
                }, destroy: function () {
                    n = {}
                }
            }
        }, sb = 0, cb = function (e) {
            return e + sb++ + (t = function () {
                return Math.round(4294967295 * Math.random()).toString(36)
            }, "s" + (new Date).getTime().toString(36) + t() + t() + t());
            var t
        }, lb = function (u, s) {
            var o = {}, n = function (e, r, o, t) {
                var i = new XMLHttpRequest;
                i.open("POST", s.url), i.withCredentials = s.credentials, i.upload.onprogress = function (e) {
                    t(e.loaded / e.total * 100)
                }, i.onerror = function () {
                    o("Image upload failed due to a XHR Transport error. Code: " + i.status)
                }, i.onload = function () {
                    var e, t, n;
                    i.status < 200 || 300 <= i.status ? o("HTTP Error: " + i.status) : (e = JSON.parse(i.responseText)) && "string" == typeof e.location ? r((t = s.basePath, n = e.location, t ? t.replace(/\/$/, "") + "/" + n.replace(/^\//, "") : n)) : o("Invalid JSON: " + i.responseText)
                };
                var n = new FormData;
                n.append("file", e.blob(), e.filename()), i.send(n)
            }, c = function (e, t) {
                return {url: t, blobInfo: e, status: !0}
            }, l = function (e, t, n) {
                return {url: "", blobInfo: e, status: !1, error: {message: t, options: n}}
            }, f = function (e, t) {
                _t.each(o[e], function (e) {
                    e(t)
                }), delete o[e]
            }, r = function (e, r) {
                return e = _t.grep(e, function (e) {
                    return !u.isUploaded(e.blobUri())
                }), Ir.all(_t.map(e, function (e) {
                    return u.isPending(e.blobUri()) ? (n = e.blobUri(), new Ir(function (e) {
                        o[n] = o[n] || [], o[n].push(e)
                    })) : (i = e, t = s.handler, a = r, u.markPending(i.blobUri()), new Ir(function (r) {
                        var n;
                        try {
                            var o = function () {
                                n && n.close()
                            };
                            t(i, function (e) {
                                o(), u.markUploaded(i.blobUri(), e), f(i.blobUri(), c(i, e)), r(c(i, e))
                            }, function (e, t) {
                                var n = t || {};
                                o(), u.removeFailed(i.blobUri()), f(i.blobUri(), l(i, e, n)), r(l(i, e, n))
                            }, function (t) {
                                t < 0 || 100 < t || U.from(n).orThunk(function () {
                                    return U.from(a).map(p)
                                }).each(function (e) {
                                    (n = e).progressBar.value(t)
                                })
                            })
                        } catch (e) {
                            r(l(i, e.message, {}))
                        }
                    }));
                    var i, t, a, n
                }))
            };
            return !1 === D(s.handler) && (s.handler = n), {
                upload: function (e, t) {
                    return s.url || s.handler !== n ? r(e, t) : new Ir(function (e) {
                        e([])
                    })
                }
            }
        }, fb = function (e) {
            return function () {
                return e.notificationManager.open({
                    text: e.translate("Image uploading..."),
                    type: "info",
                    timeout: -1,
                    progressBar: !0
                })
            }
        }, db = function (e, t) {
            return lb(t, {
                url: e.getParam("images_upload_url", "", "string"),
                basePath: e.getParam("images_upload_base_path", "", "string"),
                credentials: e.getParam("images_upload_credentials", !1, "boolean"),
                handler: e.getParam("images_upload_handler", null, "function")
            })
        }, mb = function (s) {
            var n, i, e, t, r, o, c = (n = [], i = function (e) {
                if (!e.blob || !e.base64) throw new Error("blob and base64 representations of the image are required for BlobInfo to be created");
                var t = e.id || cb("blobid"), n = e.name || t, r = e.blob;
                return {
                    id: S(t),
                    name: S(n),
                    filename: S(e.filename || n + "." + ({
                        "image/jpeg": "jpg",
                        "image/jpg": "jpg",
                        "image/gif": "gif",
                        "image/png": "png",
                        "image/apng": "apng",
                        "image/avif": "avif",
                        "image/svg+xml": "svg",
                        "image/webp": "webp",
                        "image/bmp": "bmp",
                        "image/tiff": "tiff"
                    }[r.type.toLowerCase()] || "dat")),
                    blob: S(r),
                    base64: S(e.base64),
                    blobUri: S(e.blobUri || URL.createObjectURL(r)),
                    uri: S(e.uri)
                }
            }, {
                create: function (e, t, n, r, o) {
                    if (K(e)) return i({id: e, name: r, filename: o, blob: t, base64: n});
                    if (k(e)) return i(e);
                    throw new Error("Unknown input type")
                }, add: function (e) {
                    t(e.id()) || n.push(e)
                }, get: t = function (t) {
                    return e(function (e) {
                        return e.id() === t
                    })
                }, getByUri: function (t) {
                    return e(function (e) {
                        return e.blobUri() === t
                    })
                }, getByData: function (t, n) {
                    return e(function (e) {
                        return e.base64() === t && e.blob().type === n
                    })
                }, findFirst: e = function (e) {
                    return W(n, e).getOrUndefined()
                }, removeByUri: function (t) {
                    n = H(n, function (e) {
                        return e.blobUri() !== t || void URL.revokeObjectURL(e.blobUri())
                    })
                }, destroy: function () {
                    Y(n, function (e) {
                        URL.revokeObjectURL(e.blobUri())
                    }), n = []
                }
            }), a = ub(), u = [], l = function (n) {
                var r = Au(null);
                n.on("change AddUndo", function (e) {
                    r.set(_e({}, e.level))
                });
                return {
                    fireIfChanged: function () {
                        var t = n.undoManager.data;
                        oe(t).filter(function (e) {
                            return !Nv(r.get(), e)
                        }).each(function (e) {
                            n.setDirty(!0), n.fire("change", {level: e, lastLevel: ne(t, t.length - 2).getOrNull()})
                        })
                    }
                }
            }(s), f = function (t) {
                return function (e) {
                    return s.selection ? t(e) : []
                }
            }, d = function (e, t, n) {
                for (var r = 0; -1 !== (r = e.indexOf(t, r)) && (e = e.substring(0, r) + n + e.substr(r + t.length), r += n.length - t.length + 1), -1 !== r;) ;
                return e
            }, m = function (e, t, n) {
                var r = 'src="' + n + '"' + (n === xt.transparentSrc ? ' data-mce-placeholder="1"' : "");
                return e = d(e, 'src="' + t + '"', r), e = d(e, 'data-mce-src="' + t + '"', 'data-mce-src="' + n + '"')
            }, p = function (t, n) {
                Y(s.undoManager.data, function (e) {
                    "fragmented" === e.type ? e.fragments = z(e.fragments, function (e) {
                        return m(e, t, n)
                    }) : e.content = m(e.content, t, n)
                })
            }, g = function (e, t) {
                var n, r = s.convertURL(t, "src");
                p(e.src, t), s.$(e).attr({
                    src: s.getParam("images_reuse_filename", !1, "boolean") ? (n = t) + (-1 === n.indexOf("?") ? "?" : "&") + (new Date).getTime() : t,
                    "data-mce-src": r
                })
            }, h = function (n) {
                return r = r || db(s, a), b().then(f(function (u) {
                    var e = z(u, function (e) {
                        return e.blobInfo
                    });
                    return r.upload(e, fb(s)).then(f(function (e) {
                        var a = [], t = z(e, function (e, t) {
                            var n, r, o = u[t].blobInfo, i = u[t].image;
                            return e.status && s.getParam("images_replace_blob_uris", !0, "boolean") ? (c.removeByUri(i.src), g(i, e.url)) : e.error && (e.error.options.remove && (p(i.getAttribute("src"), xt.transparentSrc), a.push(i)), n = s, r = e.error.message, Zy(n, Ou.translate(["Failed to upload image: {0}", r]))), {
                                element: i,
                                status: e.status,
                                uploadUri: e.url,
                                blobInfo: o
                            }
                        });
                        return 0 < t.length && l.fireIfChanged(), 0 < a.length && (Rv(s) ? console.error("Removing images on failed uploads is currently unsupported for RTC") : s.undoManager.transact(function () {
                            Y(a, function (e) {
                                s.dom.remove(e), c.removeByUri(e.src)
                            })
                        })), n && n(t), t
                    }))
                }))
            }, v = function (e) {
                if (dc(s)) return h(e)
            }, y = function (t) {
                return !1 !== Q(u, function (e) {
                    return e(t)
                }) && (0 !== t.getAttribute("src").indexOf("data:") || s.getParam("images_dataimg_filter", w, "function")(t))
            }, b = function () {
                return (o = o || Jv(a, c)).findAll(s.getBody(), y).then(f(function (e) {
                    return e = H(e, function (e) {
                        return "string" != typeof e || void Zy(s, e)
                    }), Y(e, function (e) {
                        p(e.image.src, e.blobInfo.blobUri()), e.image.src = e.blobInfo.blobUri(), e.image.removeAttribute("data-mce-src")
                    }), e
                }))
            }, C = function (e) {
                return e.replace(/src="(blob:[^"]+)"/g, function (e, n) {
                    var t = a.getResultUri(n);
                    if (t) return 'src="' + t + '"';
                    var r = c.getByUri(n);
                    return (r = r || $(s.editorManager.get(), function (e, t) {
                        return e || t.editorUpload && t.editorUpload.blobCache.getByUri(n)
                    }, null)) ? 'src="data:' + r.blob().type + ";base64," + r.base64() + '"' : e
                })
            };
            return s.on("SetContent", function () {
                (dc(s) ? v : b)()
            }), s.on("RawSaveContent", function (e) {
                e.content = C(e.content)
            }), s.on("GetContent", function (e) {
                e.source_view || "raw" === e.format || "tree" === e.format || (e.content = C(e.content))
            }), s.on("PostRender", function () {
                s.parser.addNodeFilter("img", function (e) {
                    Y(e, function (e) {
                        var t, n = e.attr("src");
                        c.getByUri(n) || (t = a.getResultUri(n)) && e.attr("src", t)
                    })
                })
            }), {
                blobCache: c, addFilter: function (e) {
                    u.push(e)
                }, uploadImages: h, uploadImagesAuto: v, scanForImages: b, destroy: function () {
                    c.destroy(), a.destroy(), o = r = null
                }
            }
        }, pb = function (e) {
            var r, t, n = {}, o = function (e, t) {
                e && ("string" != typeof e ? _t.each(e, function (e, t) {
                    o(t, e)
                }) : (_(t) || (t = [t]), _t.each(t, function (e) {
                    "undefined" == typeof e.deep && (e.deep = !e.selector), "undefined" == typeof e.split && (e.split = !e.selector || e.inline), "undefined" == typeof e.remove && e.selector && !e.inline && (e.remove = "none"), e.selector && e.inline && (e.mixed = !0, e.block_expand = !0), "string" == typeof e.classes && (e.classes = e.classes.split(/\s+/))
                }), n[e] = t))
            };
            return o((r = e.dom, t = {
                valigntop: [{selector: "td,th", styles: {verticalAlign: "top"}}],
                valignmiddle: [{selector: "td,th", styles: {verticalAlign: "middle"}}],
                valignbottom: [{selector: "td,th", styles: {verticalAlign: "bottom"}}],
                alignleft: [{
                    selector: "figure.image",
                    collapsed: !1,
                    classes: "align-left",
                    ceFalseOverride: !0,
                    preview: "font-family font-size"
                }, {
                    selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",
                    styles: {textAlign: "left"},
                    inherit: !1,
                    preview: !1,
                    defaultBlock: "div"
                }, {selector: "img,table", collapsed: !1, styles: {"float": "left"}, preview: "font-family font-size"}],
                aligncenter: [{
                    selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",
                    styles: {textAlign: "center"},
                    inherit: !1,
                    preview: "font-family font-size",
                    defaultBlock: "div"
                }, {
                    selector: "figure.image",
                    collapsed: !1,
                    classes: "align-center",
                    ceFalseOverride: !0,
                    preview: "font-family font-size"
                }, {
                    selector: "img",
                    collapsed: !1,
                    styles: {display: "block", marginLeft: "auto", marginRight: "auto"},
                    preview: !1
                }, {
                    selector: "table",
                    collapsed: !1,
                    styles: {marginLeft: "auto", marginRight: "auto"},
                    preview: "font-family font-size"
                }],
                alignright: [{
                    selector: "figure.image",
                    collapsed: !1,
                    classes: "align-right",
                    ceFalseOverride: !0,
                    preview: "font-family font-size"
                }, {
                    selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",
                    styles: {textAlign: "right"},
                    inherit: !1,
                    preview: "font-family font-size",
                    defaultBlock: "div"
                }, {selector: "img,table", collapsed: !1, styles: {"float": "right"}, preview: "font-family font-size"}],
                alignjustify: [{
                    selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",
                    styles: {textAlign: "justify"},
                    inherit: !1,
                    defaultBlock: "div",
                    preview: "font-family font-size"
                }],
                bold: [{inline: "strong", remove: "all", preserve_attributes: ["class", "style"]}, {
                    inline: "span",
                    styles: {fontWeight: "bold"}
                }, {inline: "b", remove: "all", preserve_attributes: ["class", "style"]}],
                italic: [{inline: "em", remove: "all", preserve_attributes: ["class", "style"]}, {
                    inline: "span",
                    styles: {fontStyle: "italic"}
                }, {inline: "i", remove: "all", preserve_attributes: ["class", "style"]}],
                underline: [{inline: "span", styles: {textDecoration: "underline"}, exact: !0}, {
                    inline: "u",
                    remove: "all",
                    preserve_attributes: ["class", "style"]
                }],
                strikethrough: [{inline: "span", styles: {textDecoration: "line-through"}, exact: !0}, {
                    inline: "strike",
                    remove: "all",
                    preserve_attributes: ["class", "style"]
                }, {inline: "s", remove: "all", preserve_attributes: ["class", "style"]}],
                forecolor: {
                    inline: "span",
                    styles: {color: "%value"},
                    links: !0,
                    remove_similar: !0,
                    clear_child_styles: !0
                },
                hilitecolor: {
                    inline: "span",
                    styles: {backgroundColor: "%value"},
                    links: !0,
                    remove_similar: !0,
                    clear_child_styles: !0
                },
                fontname: {inline: "span", toggle: !1, styles: {fontFamily: "%value"}, clear_child_styles: !0},
                fontsize: {inline: "span", toggle: !1, styles: {fontSize: "%value"}, clear_child_styles: !0},
                lineheight: {
                    selector: "h1,h2,h3,h4,h5,h6,p,li,td,th,div",
                    defaultBlock: "p",
                    styles: {lineHeight: "%value"}
                },
                fontsize_class: {inline: "span", attributes: {"class": "%value"}},
                blockquote: {block: "blockquote", wrapper: !0, remove: "all"},
                subscript: {inline: "sub"},
                superscript: {inline: "sup"},
                code: {inline: "code"},
                link: {
                    inline: "a", selector: "a", remove: "all", split: !0, deep: !0, onmatch: function (e, t, n) {
                        return Rn(e) && e.hasAttribute("href")
                    }, onformat: function (n, e, t) {
                        _t.each(t, function (e, t) {
                            r.setAttrib(n, t, e)
                        })
                    }
                },
                removeformat: [{
                    selector: "b,strong,em,i,font,u,strike,s,sub,sup,dfn,code,samp,kbd,var,cite,mark,q,del,ins",
                    remove: "all",
                    split: !0,
                    expand: !1,
                    block_expand: !0,
                    deep: !0
                }, {
                    selector: "span",
                    attributes: ["style", "class"],
                    remove: "empty",
                    split: !0,
                    expand: !1,
                    deep: !0
                }, {selector: "*", attributes: ["style", "class"], split: !1, expand: !1, deep: !0}]
            }, _t.each("p h1 h2 h3 h4 h5 h6 div address pre div dt dd samp".split(/\s/), function (e) {
                t[e] = {block: e, remove: "all"}
            }), t)), o(e.getParam("formats")), {
                get: function (e) {
                    return e ? n[e] : n
                }, has: function (e) {
                    return ve(n, e)
                }, register: o, unregister: function (e) {
                    return e && n[e] && delete n[e], n
                }
            }
        }, gb = _t.each, hb = xu.DOM, vb = function (e, t) {
            var n, o, r, m = t && t.schema || Ci({}), p = function (e) {
                o = "string" == typeof e ? {name: e, classes: [], attrs: {}} : e;
                var t, n, r = hb.create(o.name);
                return t = r, (n = o).classes.length && hb.addClass(t, n.classes.join(" ")), hb.setAttribs(t, n.attrs), r
            }, g = function (n, e, t) {
                var r, o, i, a, u, s, c, l = 0 < e.length && e[0], f = l && l.name,
                    d = (a = f, u = "string" != typeof (i = n) ? i.nodeName.toLowerCase() : i, s = m.getElementRule(u), !(!(c = s && s.parentsRequired) || !c.length) && (a && -1 !== _t.inArray(c, a) ? a : c[0]));
                if (d) f === d ? (o = e[0], e = e.slice(1)) : o = d; else if (l) o = e[0], e = e.slice(1); else if (!t) return n;
                return o && (r = p(o)).appendChild(n), t && (r || (r = hb.create("div")).appendChild(n), _t.each(t, function (e) {
                    var t = p(e);
                    r.insertBefore(t, n)
                })), g(r, e, o && o.siblings)
            };
            return e && e.length ? (o = e[0], n = p(o), (r = hb.create("div")).appendChild(g(n, e.slice(1), o.siblings)), r) : ""
        }, yb = function (e) {
            var t, a = {classes: [], attrs: {}};
            return "*" !== (e = a.selector = _t.trim(e)) && (t = e.replace(/(?:([#\.]|::?)([\w\-]+)|(\[)([^\]]+)\]?)/g, function (e, t, n, r, o) {
                switch (t) {
                    case"#":
                        a.attrs.id = n;
                        break;
                    case".":
                        a.classes.push(n);
                        break;
                    case":":
                        -1 !== _t.inArray("checked disabled enabled read-only required".split(" "), n) && (a.attrs[n] = n)
                }
                var i;
                return "[" !== r || (i = o.match(/([\w\-]+)(?:\=\"([^\"]+))?/)) && (a.attrs[i[1]] = i[2]), ""
            })), a.name = t || "div", a
        }, bb = function (n, e) {
            var t, r, o, i = "",
                a = (o = n.getParam("preview_styles", "font-family font-size font-weight font-style text-decoration text-transform color background-color border border-radius outline text-shadow"), K(o) ? o : "");
            if ("" === a) return "";
            var u = function (e) {
                return e.replace(/%(\w+)/g, "")
            };
            if ("string" == typeof e) {
                if (!(e = n.formatter.get(e))) return;
                e = e[0]
            }
            if ("preview" in e) {
                var s = he(e, "preview");
                if (s.is(!1)) return "";
                a = s.getOr(a)
            }
            t = e.block || e.inline || "span";
            var c,
                l = (c = e.selector) && "string" == typeof c ? (c = (c = c.split(/\s*,\s*/)[0]).replace(/\s*(~\+|~|\+|>)\s*/g, "$1"), _t.map(c.split(/(?:>|\s+(?![^\[\]]+\]))/), function (e) {
                    var t = _t.map(e.split(/(?:~\+|~|\+)/), yb), n = t.pop();
                    return t.length && (n.siblings = t), n
                }).reverse()) : [], f = l.length ? (l[0].name || (l[0].name = t), t = e.selector, vb(l, n)) : vb([t], n),
                d = hb.select(t, f)[0] || f.firstChild;
            return gb(e.styles, function (e, t) {
                var n = u(e);
                n && hb.setStyle(d, t, n)
            }), gb(e.attributes, function (e, t) {
                var n = u(e);
                n && hb.setAttrib(d, t, n)
            }), gb(e.classes, function (e) {
                var t = u(e);
                hb.hasClass(d, t) || hb.addClass(d, t)
            }), n.fire("PreviewFormats"), hb.setStyles(f, {
                position: "absolute",
                left: -65535
            }), n.getBody().appendChild(f), r = hb.getStyle(n.getBody(), "fontSize", !0), r = /px$/.test(r) ? parseInt(r, 10) : 0, gb(a.split(" "), function (e) {
                var t = hb.getStyle(d, e, !0);
                if (!("background-color" === e && /transparent|rgba\s*\([^)]+,\s*0\)/.test(t) && (t = hb.getStyle(n.getBody(), e, !0), "#ffffff" === hb.toHex(t).toLowerCase()) || "color" === e && "#000000" === hb.toHex(t).toLowerCase())) {
                    if ("font-size" === e && /em|%$/.test(t)) {
                        if (0 === r) return;
                        t = parseFloat(t) / (/%$/.test(t) ? 100 : 1) * r + "px"
                    }
                    "border" === e && t && (i += "padding:0 2px;"), i += e + ":" + t + ";"
                }
            }), n.fire("AfterPreviewFormats"), hb.remove(f), i
        }, Cb = function (s) {
            var e = pb(s), u = Au(null);
            return function (e) {
                e.addShortcut("meta+b", "", "Bold"), e.addShortcut("meta+i", "", "Italic"), e.addShortcut("meta+u", "", "Underline");
                for (var t = 1; t <= 6; t++) e.addShortcut("access+" + t, "", ["FormatBlock", !1, "h" + t]);
                e.addShortcut("access+7", "", ["FormatBlock", !1, "p"]), e.addShortcut("access+8", "", ["FormatBlock", !1, "div"]), e.addShortcut("access+9", "", ["FormatBlock", !1, "address"])
            }(s), ph(s), {
                get: e.get,
                has: e.has,
                register: e.register,
                unregister: e.unregister,
                apply: function (e, t, n) {
                    var r, o, i;
                    r = e, o = t, i = n, Ov(s).formatter.apply(r, o, i)
                },
                remove: function (e, t, n, r) {
                    var o, i, a, u;
                    o = e, i = t, a = n, u = r, Ov(s).formatter.remove(o, i, a, u)
                },
                toggle: function (e, t, n) {
                    var r, o, i;
                    r = e, o = t, i = n, Ov(s).formatter.toggle(r, o, i)
                },
                match: function (e, t, n) {
                    return r = e, o = t, i = n, Ov(s).formatter.match(r, o, i);
                    var r, o, i
                },
                closest: function (e) {
                    return t = e, Ov(s).formatter.closest(t);
                    var t
                },
                matchAll: function (e, t) {
                    return n = e, r = t, Ov(s).formatter.matchAll(n, r);
                    var n, r
                },
                matchNode: function (e, t, n, r) {
                    return o = e, i = t, a = n, u = r, Ov(s).formatter.matchNode(o, i, a, u);
                    var o, i, a, u
                },
                canApply: function (e) {
                    return t = e, Ov(s).formatter.canApply(t);
                    var t
                },
                formatChanged: function (e, t, n) {
                    return r = u, o = e, i = t, void 0 === (a = n) && (a = !1), Ov(s).formatter.formatChanged(r, o, i, a);
                    var r, o, i, a
                },
                getCssText: N(bb, s)
            }
        }, wb = function (n, r, o) {
            var i = Au(!1), a = function (e) {
                kv(r, !1, o), r.add({}, e)
            };
            n.on("init", function () {
                r.add()
            }), n.on("BeforeExecCommand", function (e) {
                var t = e.command.toLowerCase();
                "undo" !== t && "redo" !== t && "mcerepaint" !== t && (_v(r, o), r.beforeChange())
            }), n.on("ExecCommand", function (e) {
                var t = e.command.toLowerCase();
                "undo" !== t && "redo" !== t && "mcerepaint" !== t && a(e)
            }), n.on("ObjectResizeStart cut", function () {
                r.beforeChange()
            }), n.on("SaveContent ObjectResized blur", a), n.on("dragend", a), n.on("keyup", function (e) {
                var t = e.keyCode;
                e.isDefaultPrevented() || ((33 <= t && t <= 36 || 37 <= t && t <= 40 || 45 === t || e.ctrlKey) && (a(), n.nodeChanged()), 46 !== t && 8 !== t || n.nodeChanged(), i.get() && r.typing && !1 === Nv(Cv(n), r.data[0]) && (!1 === n.isDirty() && (n.setDirty(!0), n.fire("change", {
                    level: r.data[0],
                    lastLevel: null
                })), n.fire("TypingUndo"), i.set(!1), n.nodeChanged()))
            }), n.on("keydown", function (e) {
                var t, n = e.keyCode;
                e.isDefaultPrevented() || (33 <= n && n <= 36 || 37 <= n && n <= 40 || 45 === n ? r.typing && a(e) : (t = e.ctrlKey && !e.altKey || e.metaKey, !(n < 16 || 20 < n) || 224 === n || 91 === n || r.typing || t || (r.beforeChange(), kv(r, !0, o), r.add({}, e), i.set(!0))))
            }), n.on("mousedown", function (e) {
                r.typing && a(e)
            });
            n.on("input", function (e) {
                var t, n;
                e.inputType && ("insertReplacementText" === e.inputType || "insertText" === (n = e).inputType && null === n.data || ("insertFromPaste" === (t = e).inputType || "insertFromDrop" === t.inputType)) && a(e)
            }), n.on("AddUndo Undo Redo ClearUndos", function (e) {
                e.isDefaultPrevented() || n.nodeChanged()
            })
        }, xb = function (s) {
            var e, c = Au(U.none()), l = Au(0), f = Au(0), d = {
                data: [], typing: !1, beforeChange: function () {
                    var e, t;
                    e = l, t = c, Ov(s).undoManager.beforeChange(e, t)
                }, add: function (e, t) {
                    return n = d, r = f, o = l, i = c, a = e, u = t, Ov(s).undoManager.addUndoLevel(n, r, o, i, a, u);
                    var n, r, o, i, a, u
                }, undo: function () {
                    return e = d, t = l, n = f, Ov(s).undoManager.undo(e, t, n);
                    var e, t, n
                }, redo: function () {
                    return e = s, t = f, n = d.data, Ov(e).undoManager.redo(t, n);
                    var e, t, n
                }, clear: function () {
                    var e, t;
                    e = d, t = f, Ov(s).undoManager.clear(e, t)
                }, reset: function () {
                    var e;
                    e = d, Ov(s).undoManager.reset(e)
                }, hasUndo: function () {
                    return e = d, t = f, Ov(s).undoManager.hasUndo(e, t);
                    var e, t
                }, hasRedo: function () {
                    return e = d, t = f, Ov(s).undoManager.hasRedo(e, t);
                    var e, t
                }, transact: function (e) {
                    return t = d, n = l, r = e, Ov(s).undoManager.transact(t, n, r);
                    var t, n, r
                }, ignore: function (e) {
                    var t, n;
                    t = l, n = e, Ov(s).undoManager.ignore(t, n)
                }, extra: function (e, t) {
                    var n, r, o, i;
                    n = d, r = f, o = e, i = t, Ov(s).undoManager.extra(n, r, o, i)
                }
            };
            return Rv(s) || wb(s, d, l), (e = s).addShortcut("meta+z", "", "Undo"), e.addShortcut("meta+y,meta+shift+z", "", "Redo"), d
        },
        Sb = [9, 27, ed.HOME, ed.END, 19, 20, 44, 144, 145, 33, 34, 45, 16, 17, 18, 91, 92, 93, ed.DOWN, ed.UP, ed.LEFT, ed.RIGHT].concat(xt.browser.isFirefox() ? [224] : []),
        Nb = "data-mce-placeholder", Eb = function (e) {
            return "keydown" === e.type || "keyup" === e.type
        }, kb = function (e) {
            var t = e.keyCode;
            return t === ed.BACKSPACE || t === ed.DELETE
        }, _b = function (a) {
            var e, u = a.dom, s = lc(a),
                c = (e = a).getParam("placeholder", uc.getAttrib(e.getElement(), "placeholder"), "string"),
                l = function (e, t) {
                    var n, r, o, i;
                    !function (e) {
                        if (Eb(e)) {
                            var t = e.keyCode;
                            return !kb(e) && (ed.metaKeyPressed(e) || e.altKey || 112 <= t && t <= 123 || M(Sb, t))
                        }
                        return !1
                    }(e) && (n = a.getBody(), r = !(Eb(o = e) && !(kb(o) || "keyup" === o.type && 229 === o.keyCode)) && function (e, t, n) {
                        if (Wo(Rt.fromDom(t), !1)) {
                            var r = "" === n, o = t.firstElementChild;
                            return !o || !e.getStyle(t.firstElementChild, "padding-left") && !e.getStyle(t.firstElementChild, "padding-right") && (r ? !e.isBlock(o) : n === o.nodeName.toLowerCase())
                        }
                        return !1
                    }(u, n, s), "" !== u.getAttrib(n, Nb) === r && !t || (u.setAttrib(n, Nb, r ? c : null), u.setAttrib(n, "aria-placeholder", r ? c : null), i = r, a.fire("PlaceholderToggle", {state: i}), a.on(r ? "keydown" : "keyup", l), a.off(r ? "keyup" : "keydown", l)))
                };
            c && a.on("init", function (e) {
                l(e, !0), a.on("change SetContent ExecCommand", l), a.on("paste", function (e) {
                    return Wr.setEditorTimeout(a, function () {
                        return l(e)
                    })
                })
            })
        }, Ab = /[\u0591-\u07FF\uFB1D-\uFDFF\uFE70-\uFEFC]/, Rb = function (e, t) {
            return Dt(Rt.fromDom(t), e.getParam("inline_boundaries_selector", "a[href],code,.mce-annotation", "string"))
        }, Tb = function (e) {
            return "rtl" === xu.DOM.getStyle(e, "direction", !0) || (t = e.textContent, Ab.test(t));
            var t
        }, Db = function (e, t, n) {
            var r, o, i, a = (r = e, o = t, i = n, H(xu.DOM.getParents(i.container(), "*", o), r));
            return U.from(a[a.length - 1])
        }, Ob = function (e, t) {
            if (!t) return t;
            var n = t.container(), r = t.offset();
            return e ? bo(n) ? Mn(n.nextSibling) ? Is(n.nextSibling, 0) : Is.after(n) : xo(t) ? Is(n, r + 1) : t : bo(n) ? Mn(n.previousSibling) ? Is(n.previousSibling, n.previousSibling.data.length) : Is.before(n) : So(t) ? Is(n, r - 1) : t
        }, Bb = N(Ob, !0), Pb = N(Ob, !1), Lb = function (e, t) {
            return Lt(e, t) ? Dr(t, function (e) {
                return oo(e) || ao(e)
            }, (n = e, function (e) {
                return Bt(n, Rt.fromDom(e.dom.parentNode))
            })) : U.none();
            var n
        }, Ib = function (e) {
            var t, n, r;
            e.dom.isEmpty(e.getBody()) && (e.setContent(""), n = (t = e).getBody(), r = n.firstChild && t.dom.isBlock(n.firstChild) ? n.firstChild : n, t.selection.setCursorLocation(r, 0))
        }, Mb = function (e, t) {
            return {from: e, to: t}
        }, Fb = function (e, t) {
            var n = Rt.fromDom(e), r = Rt.fromDom(t.container());
            return Lb(n, r).map(function (e) {
                return {block: e, position: t}
            })
        }, Ub = function (o, i, e) {
            var t = Fb(o, Is.fromRangeStart(e)), n = t.bind(function (e) {
                return Rl(i, o, e.position).bind(function (e) {
                    return Fb(o, e).map(function (e) {
                        return t = o, n = i, jn((r = e).position.getNode()) && !1 === Wo(r.block) ? Ol(!1, r.block.dom).bind(function (e) {
                            return e.isEqual(r.position) ? Rl(n, t, e).bind(function (e) {
                                return Fb(t, e)
                            }) : U.some(r)
                        }).getOr(r) : r;
                        var t, n, r
                    })
                })
            });
            return as(t, n, Mb).filter(function (e) {
                return !1 === Bt((r = e).from.block, r.to.block) && Wt((n = e).from.block).bind(function (t) {
                    return Wt(n.to.block).filter(function (e) {
                        return Bt(t, e)
                    })
                }).isSome() && (!1 === qn((t = e).from.block.dom) && !1 === qn(t.to.block.dom));
                var t, n, r
            })
        }, zb = function (e) {
            var t, n = (t = Jt(e), G(t, to).fold(function () {
                return t
            }, function (e) {
                return t.slice(0, e)
            }));
            return Y(n, gn), n
        }, jb = function (e, t) {
            var n = fp(t, e);
            return W(n.reverse(), function (e) {
                return Wo(e)
            }).each(gn)
        }, Hb = function (e, t, n, r) {
            if (Wo(n)) return up(n), Ll(n.dom);
            0 === H(Yt(r), function (e) {
                return !Wo(e)
            }).length && Wo(t) && cn(r, Rt.fromTag("br"));
            var o = Pl(n.dom, Is.before(r.dom));
            return Y(zb(t), function (e) {
                cn(r, e)
            }), jb(e, t), o
        }, Vb = function (e, t, n) {
            if (Wo(n)) return gn(n), Wo(t) && up(t), Ll(t.dom);
            var r = Il(n.dom);
            return Y(zb(t), function (e) {
                dn(n, e)
            }), jb(e, t), r
        }, qb = function (e, t) {
            return Lt(t, e) ? (n = fp(e, t), U.from(n[n.length - 1])) : U.none();
            var n
        }, $b = function (e, t) {
            Ol(e, t.dom).map(function (e) {
                return e.getNode()
            }).map(Rt.fromDom).filter(ro).each(gn)
        }, Wb = function (e, t, n) {
            return $b(!0, t), $b(!1, n), qb(t, n).fold(N(Vb, e, t, n), N(Hb, e, t, n))
        }, Kb = function (e, t, n, r) {
            return t ? Wb(e, r, n) : Wb(e, n, r)
        }, Xb = function (t, n) {
            var e, r, o, i = Rt.fromDom(t.getBody()),
                a = (e = i.dom, r = n, ((o = t.selection.getRng()).collapsed ? Ub(e, r, o) : U.none()).bind(function (e) {
                    return Kb(i, n, e.from.block, e.to.block)
                }));
            return a.each(function (e) {
                t.selection.setRng(e.toRange())
            }), a.isSome()
        }, Yb = function (e, t) {
            var n = Rt.fromDom(t), r = N(Bt, e);
            return Tr(n, so, r).isSome()
        }, Gb = function (e, t) {
            var n, r, o = Pl(e.dom, Is.fromRangeStart(t)).isNone(), i = Bl(e.dom, Is.fromRangeEnd(t)).isNone();
            return !(Yb(n = e, (r = t).startContainer) || Yb(n, r.endContainer)) && o && i
        }, Jb = function (e) {
            var n, r, o, t, i = Rt.fromDom(e.getBody()), a = e.selection.getRng();
            return Gb(i, a) ? ((t = e).setContent(""), t.selection.setCursorLocation(), !0) : (n = i, r = e.selection, o = r.getRng(), as(Lb(n, Rt.fromDom(o.startContainer)), Lb(n, Rt.fromDom(o.endContainer)), function (e, t) {
                return !1 === Bt(e, t) && (o.deleteContents(), Kb(n, !0, e, t).each(function (e) {
                    r.setRng(e.toRange())
                }), !0)
            }).getOr(!1))
        }, Qb = function (e, t) {
            return !e.selection.isCollapsed() && Jb(e)
        }, Zb = Vn, eC = qn, tC = function (e, t, n, r, o) {
            return U.from(t._selectionOverrides.showCaret(e, n, r, o))
        }, nC = function (e, t) {
            var n, r;
            return e.fire("BeforeObjectSelected", {target: t}).isDefaultPrevented() ? U.none() : U.some(((r = (n = t).ownerDocument.createRange()).selectNode(n), r))
        }, rC = function (e, t, n) {
            var r = ol(1, e.getBody(), t), o = Is.fromRangeStart(r), i = o.getNode();
            if (zc(i)) return tC(1, e, i, !o.isAtEnd(), !1);
            var a = o.getNode(!0);
            if (zc(a)) return tC(1, e, a, !1, !1);
            var u = e.dom.getParent(o.getNode(), function (e) {
                return eC(e) || Zb(e)
            });
            return zc(u) ? tC(1, e, u, !1, n) : U.none()
        }, oC = function (e, t, n) {
            return t.collapsed ? rC(e, t, n).getOr(t) : t
        }, iC = function (e) {
            return op(e) || ep(e)
        }, aC = function (e) {
            return ip(e) || tp(e)
        }, uC = function (n, r, e, t, o, i) {
            var a, u;
            return tC(t, n, i.getNode(!o), o, !0).each(function (e) {
                var t;
                r.collapsed ? (t = r.cloneRange(), o ? t.setEnd(e.startContainer, e.startOffset) : t.setStart(e.endContainer, e.endOffset), t.deleteContents()) : r.deleteContents(), n.selection.setRng(e)
            }), a = n.dom, Mn(u = e) && 0 === u.data.length && a.remove(u), !0
        }, sC = function (e, t) {
            var n = e.selection.getRng();
            if (!Mn(n.commonAncestorContainer)) return !1;
            var r = t ? Ms.Forwards : Ms.Backwards, o = Nl(e.getBody()), i = N(sl, t ? o.next : o.prev), a = t ? iC : aC,
                u = al(r, e.getBody(), n), s = Ob(t, i(u));
            if (!s || !cl(u, s)) return !1;
            if (a(s)) return uC(e, n, u.getNode(), r, t, s);
            var c = i(s);
            return !!(c && a(c) && cl(s, c)) && uC(e, n, u.getNode(), r, t, c)
        }, cC = wr([{remove: ["element"]}, {moveToElement: ["element"]}, {moveToPosition: ["position"]}]),
        lC = function (e, t, n, r) {
            var o = r.getNode(!1 === t);
            return Lb(Rt.fromDom(e), Rt.fromDom(n.getNode())).map(function (e) {
                return Wo(e) ? cC.remove(e.dom) : cC.moveToElement(o)
            }).orThunk(function () {
                return U.some(cC.moveToElement(o))
            })
        }, fC = function (u, s, c) {
            return Rl(s, u, c).bind(function (e) {
                return a = e.getNode(), so(Rt.fromDom(a)) || ao(Rt.fromDom(a)) ? U.none() : (t = u, o = e, i = function (e) {
                    return no(Rt.fromDom(e)) && !Qc(r, o, t)
                }, il(!(n = s), r = c).fold(function () {
                    return il(n, o).fold(b, i)
                }, i) ? U.none() : s && qn(e.getNode()) || !1 === s && qn(e.getNode(!0)) ? lC(u, s, c, e) : s && ip(c) || !1 === s && op(c) ? U.some(cC.moveToPosition(e)) : U.none());
                var t, n, r, o, i, a
            })
        }, dC = function (r, e, o) {
            return i = e, a = o.getNode(!1 === i), u = i ? "after" : "before", Rn(a) && a.getAttribute("data-mce-caret") === u ? (t = e, n = o.getNode(!1 === e), (t && qn(n.nextSibling) ? U.some(cC.moveToElement(n.nextSibling)) : !1 === t && qn(n.previousSibling) ? U.some(cC.moveToElement(n.previousSibling)) : U.none()).fold(function () {
                return fC(r, e, o)
            }, U.some)) : fC(r, e, o).bind(function (e) {
                return t = r, n = o, e.fold(function (e) {
                    return U.some(cC.remove(e))
                }, function (e) {
                    return U.some(cC.moveToElement(e))
                }, function (e) {
                    return Qc(n, e, t) ? U.none() : U.some(cC.moveToPosition(e))
                });
                var t, n
            });
            var t, n, i, a, u
        }, mC = function (e, t) {
            return U.from(Jf(e.getBody(), t))
        }, pC = function (a, u) {
            var e = a.selection.getNode();
            return mC(a, e).filter(qn).fold(function () {
                return e = a.getBody(), t = u, n = a.selection.getRng(), r = ol(t ? 1 : -1, e, n), o = Is.fromRangeStart(r), i = Rt.fromDom(e), (!1 === t && ip(o) ? U.some(cC.remove(o.getNode(!0))) : t && op(o) ? U.some(cC.remove(o.getNode())) : !1 === t && op(o) && Sp(i, o) ? Np(i, o).map(function (e) {
                    return cC.remove(e.getNode())
                }) : t && ip(o) && xp(i, o) ? Ep(i, o).map(function (e) {
                    return cC.remove(e.getNode())
                }) : dC(e, t, o)).exists(function (e) {
                    return e.fold(function (e) {
                        return o._selectionOverrides.hideFakeCaret(), eg(o, i, Rt.fromDom(e)), !0
                    }, (r = i = u, function (e) {
                        var t = r ? Is.before(e) : Is.after(e);
                        return n.selection.setRng(t.toRange()), !0
                    }), (t = n = o = a, function (e) {
                        return t.selection.setRng(e.toRange()), !0
                    }));
                    var t, n, r, o, i
                });
                var e, t, n, r, o, i
            }, w)
        }, gC = function (t, n) {
            var e = t.selection.getNode();
            return !!qn(e) && mC(t, e.parentNode).filter(qn).fold(function () {
                var e;
                return e = Rt.fromDom(t.getBody()), Y(qu(e, ".mce-offscreen-selection"), gn), eg(t, n, Rt.fromDom(t.selection.getNode())), Ib(t), !0
            }, w)
        }, hC = function (e) {
            var t, n = e.dom, r = e.selection, o = Jf(e.getBody(), r.getNode());
            return Vn(o) && n.isBlock(o) && n.isEmpty(o) && (t = n.create("br", {"data-mce-bogus": "1"}), n.setHTML(o, ""), o.appendChild(t), r.setRng(Is.before(t).toRange())), !0
        }, vC = function (e, t) {
            return (e.selection.isCollapsed() ? pC : gC)(e, t)
        }, yC = function (e, t) {
            return !!e.selection.isCollapsed() && (n = e, r = t, o = Is.fromRangeStart(n.selection.getRng()), Rl(r, n.getBody(), o).filter(function (e) {
                return (r ? Qm : Zm)(e)
            }).bind(function (e) {
                return U.from(Zc(r ? 0 : -1, e))
            }).exists(function (e) {
                return n.selection.select(e), !0
            }));
            var n, r, o
        }, bC = Mn, CC = function (e) {
            return bC(e) && e.data[0] === mo
        }, wC = function (e) {
            return bC(e) && e.data[e.data.length - 1] === mo
        }, xC = function (e) {
            return e.ownerDocument.createTextNode(mo)
        }, SC = function (e, t) {
            return (e ? function (e) {
                if (bC(e.previousSibling)) return wC(e.previousSibling) || e.previousSibling.appendData(mo), e.previousSibling;
                if (bC(e)) return CC(e) || e.insertData(0, mo), e;
                var t = xC(e);
                return e.parentNode.insertBefore(t, e), t
            } : function (e) {
                if (bC(e.nextSibling)) return CC(e.nextSibling) || e.nextSibling.insertData(0, mo), e.nextSibling;
                if (bC(e)) return wC(e) || e.appendData(mo), e;
                var t = xC(e);
                return e.nextSibling ? e.parentNode.insertBefore(t, e.nextSibling) : e.parentNode.appendChild(t), t
            })(t)
        }, NC = N(SC, !0), EC = N(SC, !1), kC = function (e, t) {
            return Mn(e.container()) ? SC(t, e.container()) : SC(t, e.getNode())
        }, _C = function (e, t) {
            var n = t.get();
            return n && e.container() === n && bo(n)
        }, AC = function (n, e) {
            return e.fold(function (e) {
                Oc(n.get());
                var t = NC(e);
                return n.set(t), U.some(Is(t, t.length - 1))
            }, function (e) {
                return Ll(e).map(function (e) {
                    if (_C(e, n)) return Is(n.get(), 1);
                    Oc(n.get());
                    var t = kC(e, !0);
                    return n.set(t), Is(t, 1)
                })
            }, function (e) {
                return Il(e).map(function (e) {
                    if (_C(e, n)) return Is(n.get(), n.get().length - 1);
                    Oc(n.get());
                    var t = kC(e, !1);
                    return n.set(t), Is(t, t.length - 1)
                })
            }, function (e) {
                Oc(n.get());
                var t = EC(e);
                return n.set(t), U.some(Is(t, 1))
            })
        }, RC = function (e, t) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n].apply(null, t);
                if (r.isSome()) return r
            }
            return U.none()
        }, TC = wr([{before: ["element"]}, {start: ["element"]}, {end: ["element"]}, {after: ["element"]}]),
        DC = function (e, t) {
            var n = Jc(t, e);
            return n || e
        }, OC = function (e, t, n) {
            var r = Bb(n), o = DC(t, r.container());
            return Db(e, o, r).fold(function () {
                return Bl(o, r).bind(N(Db, e, o)).map(function (e) {
                    return TC.before(e)
                })
            }, U.none)
        }, BC = function (e, t) {
            return null === Ul(e, t)
        }, PC = function (e, t, n) {
            return Db(e, t, n).filter(N(BC, t))
        }, LC = function (e, t, n) {
            var r = Pb(n);
            return PC(e, t, r).bind(function (e) {
                return Pl(e, r).isNone() ? U.some(TC.start(e)) : U.none()
            })
        }, IC = function (e, t, n) {
            var r = Bb(n);
            return PC(e, t, r).bind(function (e) {
                return Bl(e, r).isNone() ? U.some(TC.end(e)) : U.none()
            })
        }, MC = function (e, t, n) {
            var r = Pb(n), o = DC(t, r.container());
            return Db(e, o, r).fold(function () {
                return Pl(o, r).bind(N(Db, e, o)).map(function (e) {
                    return TC.after(e)
                })
            }, U.none)
        }, FC = function (e) {
            return !1 === Tb(zC(e))
        }, UC = function (e, t, n) {
            return RC([OC, LC, IC, MC], [e, t, n]).filter(FC)
        }, zC = function (e) {
            return e.fold(o, o, o, o)
        }, jC = function (e) {
            return e.fold(S("before"), S("start"), S("end"), S("after"))
        }, HC = function (e) {
            return e.fold(TC.before, TC.before, TC.after, TC.after)
        }, VC = function (e) {
            return e.fold(TC.start, TC.start, TC.end, TC.end)
        }, qC = function (a, e, u, t, n, s) {
            return as(Db(e, u, t), Db(e, u, n), function (e, t) {
                return e !== t && (r = t, o = Jc(e, n = u), i = Jc(r, n), o && o === i) ? TC.after(a ? e : t) : s;
                var n, r, o, i
            }).getOr(s)
        }, $C = function (e, r) {
            return e.fold(w, function (e) {
                return n = r, !(jC(t = e) === jC(n) && zC(t) === zC(n));
                var t, n
            })
        }, WC = function (e, t) {
            return e ? t.fold(a(U.some, TC.start), U.none, a(U.some, TC.after), U.none) : t.fold(U.none, a(U.some, TC.before), U.none, a(U.some, TC.end))
        }, KC = function (e, a, u, s) {
            var t = Ob(e, s), c = UC(a, u, t);
            return UC(a, u, t).bind(N(WC, e)).orThunk(function () {
                return n = a, r = u, o = c, i = Ob(t = e, s), Rl(t, r, i).map(N(Ob, t)).fold(function () {
                    return o.map(HC)
                }, function (e) {
                    return UC(n, r, e).map(N(qC, t, n, r, i, e)).filter(N($C, o))
                }).filter(FC);
                var t, n, r, o, i
            })
        }, XC = (N(KC, !1), N(KC, !0), function (e, t, n) {
            var r = e ? 1 : -1;
            return t.setRng(Is(n.container(), n.offset() + r).toRange()), t.getSel().modify("move", e ? "forward" : "backward", "word"), !0
        }), YC = function (e, t) {
            var n = t.selection.getRng(), r = e ? Is.fromRangeEnd(n) : Is.fromRangeStart(n);
            return !!D(t.selection.getSel().modify) && (e && xo(r) ? XC(!0, t.selection, r) : !(e || !So(r)) && XC(!1, t.selection, r))
        }, GC = function (e, t) {
            var n = e.dom.createRng();
            n.setStart(t.container(), t.offset()), n.setEnd(t.container(), t.offset()), e.selection.setRng(n)
        }, JC = function (e, t) {
            e ? t.setAttribute("data-mce-selected", "inline-boundary") : t.removeAttribute("data-mce-selected")
        }, QC = function (t, e, n) {
            return AC(e, n).map(function (e) {
                return GC(t, e), n
            })
        }, ZC = function (e, t) {
            var n, r;
            e.selection.isCollapsed() && !0 !== e.composing && t.get() && (n = Is.fromRangeStart(e.selection.getRng()), Is.isTextPosition(n) && !1 === (xo(r = n) || So(r)) && (GC(e, Dc(t.get(), n)), t.set(null)))
        }, ew = function (e, t, n) {
            return !!wc(e) && (o = t, i = n, a = (r = e).getBody(), u = Is.fromRangeStart(r.selection.getRng()), s = N(Rb, r), KC(i, s, a, u).bind(function (e) {
                return QC(r, o, e)
            }).isSome());
            var r, o, i, a, u, s
        }, tw = function (e, t, n) {
            return !!wc(t) && YC(e, t)
        }, nw = function (d) {
            var m = Au(null), p = N(Rb, d);
            return d.on("NodeChange", function (e) {
                var n, r, o, t, i, a, u, s, c, l, f;
                !wc(d) || xt.browser.isIE() && e.initial || (a = p, u = d.dom, s = e.parents, c = z(qu(Rt.fromDom(u.getRoot()), '*[data-mce-selected="inline-boundary"]'), function (e) {
                    return e.dom
                }), l = H(c, a), f = H(s, a), Y(ee(l, f), N(JC, !1)), Y(ee(f, l), N(JC, !0)), ZC(d, m), n = p, r = d, o = m, t = e.parents, r.selection.isCollapsed() && (i = H(t, n), Y(i, function (e) {
                    var t = Is.fromRangeStart(r.selection.getRng());
                    UC(n, r.getBody(), t).bind(function (e) {
                        return QC(r, o, e)
                    })
                })))
            }), m
        }, rw = N(tw, !0), ow = N(tw, !1), iw = function (t, n) {
            return function (e) {
                return AC(n, e).exists(function (e) {
                    return GC(t, e), !0
                })
            }
        }, aw = function (r, o, i, a) {
            var u = r.getBody(), s = N(Rb, r);
            r.undoManager.ignore(function () {
                var e, t, n;
                r.selection.setRng((e = i, t = a, (n = document.createRange()).setStart(e.container(), e.offset()), n.setEnd(t.container(), t.offset()), n)), r.execCommand("Delete"), UC(s, u, Is.fromRangeStart(r.selection.getRng())).map(VC).map(iw(r, o))
            }), r.nodeChanged()
        }, uw = function (n, r, i, o) {
            var e, t, a = (e = n.getBody(), t = o.container(), Jc(t, e) || e), u = N(Rb, n), s = UC(u, a, o);
            return s.bind(function (e) {
                return i ? e.fold(S(U.some(VC(e))), U.none, S(U.some(HC(e))), U.none) : e.fold(U.none, S(U.some(HC(e))), U.none, S(U.some(VC(e))))
            }).map(iw(n, r)).getOrThunk(function () {
                var t = Tl(i, a, o), e = t.bind(function (e) {
                    return UC(u, a, e)
                });
                return as(s, e, function () {
                    return Db(u, a, o).exists(function (e) {
                        return !!as(Ll(o = e), Il(o), function (e, t) {
                            var n = Ob(!0, e), r = Ob(!1, t);
                            return Bl(o, n).forall(function (e) {
                                return e.isEqual(r)
                            })
                        }).getOr(!0) && (eg(n, i, Rt.fromDom(e)), !0);
                        var o
                    })
                }).orThunk(function () {
                    return e.bind(function (e) {
                        return t.map(function (e) {
                            return i ? aw(n, r, o, e) : aw(n, r, e, o), !0
                        })
                    })
                }).getOr(!1)
            })
        }, sw = function (e, t, n) {
            if (e.selection.isCollapsed() && wc(e)) {
                var r = Is.fromRangeStart(e.selection.getRng());
                return uw(e, t, n, r)
            }
            return !1
        }, cw = function (e) {
            return 1 === Jt(e).length
        }, lw = function (e, t, n, r) {
            var o, i, a, u, s, c = N(gh, t), l = z(H(r, c), function (e) {
                return e.dom
            });
            0 === l.length ? eg(t, e, n) : (i = n.dom, a = l, u = sh(!1), s = dh(a, u.dom), cn(Rt.fromDom(i), u), gn(Rt.fromDom(i)), o = Is(s, 0), t.selection.setRng(o.toRange()))
        }, fw = function (r, o) {
            var t, e = Rt.fromDom(r.getBody()), n = Rt.fromDom(r.selection.getStart()),
                s = H((t = fp(n, e), G(t, to).fold(S(t), function (e) {
                    return t.slice(0, e)
                })), cw);
            return oe(s).exists(function (e) {
                var t, i, a, u, n = Is.fromRangeStart(r.selection.getRng());
                return i = o, a = n, u = e.dom, !(!as(Ll(u), Il(u), function (e, t) {
                    var n = Ob(!0, e), r = Ob(!1, t), o = Ob(!1, a);
                    return i ? Bl(u, o).exists(function (e) {
                        return e.isEqual(r) && a.isEqual(n)
                    }) : Pl(u, o).exists(function (e) {
                        return e.isEqual(n) && a.isEqual(r)
                    })
                }).getOr(!0) || Fl((t = e).dom) && ah(t.dom)) && (lw(o, r, e, s), !0)
            })
        }, dw = function (e, t) {
            return !!e.selection.isCollapsed() && fw(e, t)
        }, mw = function (e, t, n) {
            return e._selectionOverrides.hideFakeCaret(), eg(e, t, Rt.fromDom(n)), !0
        }, pw = function (e, t) {
            return e.selection.isCollapsed() ? (i = e, u = (a = t) ? ep : tp, s = a ? Ms.Forwards : Ms.Backwards, c = al(s, i.getBody(), i.selection.getRng()), u(c) ? mw(i, a, c.getNode(!a)) : U.from(Ob(a, c)).filter(function (e) {
                return u(e) && cl(c, e)
            }).exists(function (e) {
                return mw(i, a, e.getNode(!a))
            })) : (r = t, o = (n = e).selection.getNode(), !!Wn(o) && mw(n, r, o));
            var n, r, o, i, a, u, s, c
        }, gw = function (e) {
            var t = parseInt(e, 10);
            return isNaN(t) ? 0 : t
        }, hw = function (e, t) {
            return (e || "table" === It(t) ? "margin" : "padding") + ("rtl" === tr(t, "direction") ? "-right" : "-left")
        }, vw = function (e) {
            var r, t = bw(e);
            return !e.mode.isReadOnly() && (1 < t.length || (r = e, Q(t, function (e) {
                var t = hw(hc(r), e), n = rr(e, t).map(gw).getOr(0);
                return "false" !== r.dom.getContentEditable(e.dom) && 0 < n
            })))
        }, yw = function (e) {
            return io(e) || ao(e)
        }, bw = function (e) {
            return H(z(e.selection.getSelectedBlocks(), Rt.fromDom), function (e) {
                return !yw(e) && !Wt(e).map(yw).getOr(!1) && Dr(e, function (e) {
                    return Vn(e.dom) || qn(e.dom)
                }).exists(function (e) {
                    return Vn(e.dom)
                })
            })
        }, Cw = function (e, c) {
            var l = e.dom, t = e.selection, n = e.formatter, r = e.getParam("indentation", "40px", "string"),
                f = /[a-z%]+$/i.exec(r)[0], d = parseInt(r, 10), m = hc(e), o = lc(e);
            e.queryCommandState("InsertUnorderedList") || e.queryCommandState("InsertOrderedList") || "" !== o || l.getParent(t.getNode(), l.isBlock) || n.apply("div"), Y(bw(e), function (e) {
                var t, n, r, o, i, a, u, s;
                t = l, n = c, r = m, o = d, i = f, a = e.dom, s = hw(r, Rt.fromDom(a)), "outdent" === n ? (u = Math.max(0, gw(a.style[s]) - o), t.setStyle(a, s, u ? u + i : "")) : (u = gw(a.style[s]) + o + i, t.setStyle(a, s, u))
            })
        }, ww = function (e, t) {
            if (e.selection.isCollapsed() && vw(e)) {
                var n = e.dom, r = e.selection.getRng(), o = Is.fromRangeStart(r),
                    i = n.getParent(r.startContainer, n.isBlock);
                if (null !== i && hp(Rt.fromDom(i), o)) return Cw(e, "outdent"), !0
            }
            return !1
        }, xw = function (e, t) {
            e.getDoc().execCommand(t, !1, null)
        }, Sw = function (n, r) {
            n.addCommand("delete", function () {
                var e, t;
                t = r, ww(e = n) || vC(e, !1) || sC(e, !1) || sw(e, t, !1) || Xb(e, !1) || _g(e) || yC(e, !1) || pw(e, !1) || Qb(e) || dw(e, !1) || (xw(e, "Delete"), Ib(e))
            }), n.addCommand("forwardDelete", function () {
                var e, t;
                t = r, vC(e = n, !0) || sC(e, !0) || sw(e, t, !0) || Xb(e, !0) || _g(e) || yC(e, !0) || pw(e, !0) || Qb(e) || dw(e, !0) || xw(e, "ForwardDelete")
            })
        }, Nw = function (e) {
            return e.touches === undefined || 1 !== e.touches.length ? U.none() : U.some(e.touches[0])
        }, Ew = function (a) {
            var u = Au(U.none()), s = Au(!1), r = Lu(function (e) {
                a.fire("longpress", _e(_e({}, e), {type: "longpress"})), s.set(!0)
            }, 400);
            a.on("touchstart", function (n) {
                Nw(n).each(function (e) {
                    r.cancel();
                    var t = {x: e.clientX, y: e.clientY, target: n.target};
                    r.throttle(n), s.set(!1), u.set(U.some(t))
                })
            }, !0), a.on("touchmove", function (e) {
                r.cancel(), Nw(e).each(function (i) {
                    u.get().each(function (e) {
                        var t, n, r, o;
                        t = i, n = e, r = Math.abs(t.clientX - n.x), o = Math.abs(t.clientY - n.y), (5 < r || 5 < o) && (u.set(U.none()), s.set(!1), a.fire("longpresscancel"))
                    })
                })
            }, !0), a.on("touchend touchcancel", function (t) {
                r.cancel(), "touchcancel" !== t.type && u.get().filter(function (e) {
                    return e.target.isEqualNode(t.target)
                }).each(function () {
                    s.get() ? t.preventDefault() : a.fire("tap", _e(_e({}, t), {type: "tap"}))
                })
            }, !0)
        }, kw = function (e, t) {
            return e.hasOwnProperty(t.nodeName)
        }, _w = function (e) {
            var t, n, r, o = e.dom, i = e.selection, a = e.schema, u = a.getBlockElements(), s = i.getStart(),
                c = e.getBody(), l = lc(e);
            if (s && Rn(s) && l) {
                var f = c.nodeName.toLowerCase();
                if (a.isValidChild(f, l.toLowerCase()) && (d = u, m = c, p = s, !F(lp(Rt.fromDom(p), Rt.fromDom(m)), function (e) {
                    return kw(d, e.dom)
                }))) {
                    for (var d, m, p, g, h, v = i.getRng(), y = v.startContainer, b = v.startOffset, C = v.endContainer, w = v.endOffset, x = vm(e), s = c.firstChild; s;) if (g = u, Mn(h = s) || Rn(h) && !kw(g, h) && !Xl(h)) {
                        if (function (e, t) {
                            if (Mn(t)) {
                                if (0 === t.nodeValue.length) return !0;
                                if (/^\s+$/.test(t.nodeValue) && (!t.nextSibling || kw(e, t.nextSibling))) return !0
                            }
                            return !1
                        }(u, s)) {
                            s = (n = s).nextSibling, o.remove(n);
                            continue
                        }
                        t || (t = o.create(l, fc(e)), s.parentNode.insertBefore(t, s), r = !0), s = (n = s).nextSibling, t.appendChild(n)
                    } else t = null, s = s.nextSibling;
                    r && x && (v.setStart(y, b), v.setEnd(C, w), i.setRng(v), e.nodeChanged())
                }
            }
        }, Aw = function (e, t) {
            var n;
            t.hasAttribute("data-mce-caret") && (_o(t), (n = e).selection.setRng(n.selection.getRng()), e.selection.scrollIntoView(t))
        }, Rw = function (e, t) {
            var n, r = (n = e, Pr(Rt.fromDom(n.getBody()), "*[data-mce-caret]").fold(S(null), function (e) {
                return e.dom
            }));
            if (r) return "compositionstart" === t.type ? (t.preventDefault(), t.stopPropagation(), void Aw(e, r)) : void (wo(r) && (Aw(e, r), e.undoManager.add()))
        };
    (Gy = Yy = Yy || {})[Gy.Br = 0] = "Br", Gy[Gy.Block = 1] = "Block", Gy[Gy.Wrap = 2] = "Wrap", Gy[Gy.Eol = 3] = "Eol";
    var Tw, Dw, Ow = function (e, t) {
        return e === Ms.Backwards ? Z(t) : t
    }, Bw = function (e, t, n, r) {
        for (var o, i, a, u, s, c, l = Nl(n), f = r, d = []; f && (s = l, c = f, o = t === Ms.Forwards ? s.next(c) : s.prev(c));) {
            if (jn(o.getNode(!1))) return t === Ms.Forwards ? {
                positions: Ow(t, d).concat([o]),
                breakType: Yy.Br,
                breakAt: U.some(o)
            } : {positions: Ow(t, d), breakType: Yy.Br, breakAt: U.some(o)};
            if (o.isVisible()) {
                if (e(f, o)) {
                    var m = (i = t, a = f, jn((u = o).getNode(i === Ms.Forwards)) ? Yy.Br : !1 === Qc(a, u) ? Yy.Block : Yy.Wrap);
                    return {positions: Ow(t, d), breakType: m, breakAt: U.some(o)}
                }
                d.push(o), f = o
            } else f = o
        }
        return {positions: Ow(t, d), breakType: Yy.Eol, breakAt: U.none()}
    }, Pw = function (n, r, o, e) {
        return r(o, e).breakAt.map(function (e) {
            var t = r(o, e).positions;
            return n === Ms.Backwards ? t.concat(e) : [e].concat(t)
        }).getOr([])
    }, Lw = function (e, i) {
        return $(e, function (e, o) {
            return e.fold(function () {
                return U.some(o)
            }, function (r) {
                return as(re(r.getClientRects()), re(o.getClientRects()), function (e, t) {
                    var n = Math.abs(i - e.left);
                    return Math.abs(i - t.left) <= n ? o : r
                }).or(e)
            })
        }, U.none())
    }, Iw = function (t, e) {
        return re(e.getClientRects()).bind(function (e) {
            return Lw(t, e.left)
        })
    }, Mw = N(Bw, Is.isAbove, -1), Fw = N(Bw, Is.isBelow, 1), Uw = N(Pw, -1, Mw), zw = N(Pw, 1, Fw), jw = function (t) {
        var e = function (e) {
            return z(e, function (e) {
                return (e = ss(e)).node = t, e
            })
        };
        if (Rn(t)) return e(t.getClientRects());
        if (Mn(t)) {
            var n = t.ownerDocument.createRange();
            return n.setStart(t, 0), n.setEnd(t, t.data.length), e(n.getClientRects())
        }
    }, Hw = function (e) {
        return J(e, jw)
    };
    (Dw = Tw = Tw || {})[Dw.Up = -1] = "Up", Dw[Dw.Down = 1] = "Down";
    var Vw = function (o, i, a, e, u, t) {
        var s = 0, c = [], n = function (e) {
            var t, n, r = Hw([e]);
            for (-1 === o && (r = r.reverse()), t = 0; t < r.length; t++) if (n = r[t], !a(n, l)) {
                if (0 < c.length && i(n, ke(c)) && s++, n.line = s, u(n)) return !0;
                c.push(n)
            }
        }, l = ke(t.getClientRects());
        if (!l) return c;
        var r = t.getNode();
        return n(r), function (e, t, n, r) {
            for (; r = Gc(r, e, Fo, t);) if (n(r)) return
        }(o, e, n, r), c
    }, qw = N(Vw, Tw.Up, fs, ds), $w = N(Vw, Tw.Down, ds, fs), Ww = function (n) {
        return function (e) {
            return t = n, e.line > t;
            var t
        }
    }, Kw = function (n) {
        return function (e) {
            return t = n, e.line === t;
            var t
        }
    }, Xw = qn, Yw = Gc, Gw = function (e, t) {
        return Math.abs(e.left - t)
    }, Jw = function (e, t) {
        return Math.abs(e.right - t)
    }, Qw = function (e, t) {
        return e >= t.left && e <= t.right
    }, Zw = function (e, t) {
        return e >= t.top && e <= t.bottom
    }, ex = function (e, o) {
        return Ne(e, function (e, t) {
            var n = Math.min(Gw(e, o), Jw(e, o)), r = Math.min(Gw(t, o), Jw(t, o));
            return Qw(o, t) || !Qw(o, e) && (r === n && Xw(t.node) || r < n) ? t : e
        })
    }, tx = function (e, t, n, r, o) {
        var i = Yw(r, e, Fo, t, !o);
        do {
            if (!i || n(i)) return
        } while (i = Yw(i, e, Fo, t))
    }, nx = function (e, t, n) {
        var r, o, i = Hw(H(ie(e.getElementsByTagName("*")), jc)), a = H(i, N(Zw, n));
        if (u = ex(a, t)) {
            var u, s = !Pn(u.node) && !Wn(u.node);
            if ((u = ex(function (e, r, t) {
                void 0 === t && (t = !0);
                var o = [], n = function (t, e) {
                    var n = H(Hw([e]), function (e) {
                        return !t(e, r)
                    });
                    return o = o.concat(n), 0 === n.length
                };
                return o.push(r), tx(Tw.Up, e, N(n, fs), r.node, t), tx(Tw.Down, e, N(n, ds), r.node, t), o
            }(e, u, s), t)) && jc(u.node)) return o = t, {node: (r = u).node, before: Gw(r, o) < Jw(r, o)}
        }
        return null
    }, rx = function (e, t) {
        e.selection.setRng(t), zd(e, e.selection.getRng())
    }, ox = function (e, t, n) {
        return U.some(oC(e, t, n))
    }, ix = function (e, t, n, r, o, i) {
        var a = t === Ms.Forwards, u = Nl(e.getBody()), s = N(sl, a ? u.next : u.prev), c = a ? r : o;
        if (!n.collapsed) {
            var l = ps(n);
            if (i(l)) return tC(t, e, l, t === Ms.Backwards, !1)
        }
        var f = al(t, e.getBody(), n);
        if (c(f)) return nC(e, f.getNode(!a));
        var d = Ob(a, s(f)), m = yo(n.startContainer);
        if (!d) return m ? U.some(n) : U.none();
        if (c(d)) return tC(t, e, d.getNode(!a), a, !1);
        var p = s(d);
        return p && c(p) && cl(d, p) ? tC(t, e, p.getNode(!a), a, !1) : m ? ox(e, d.toRange(), !1) : U.none()
    }, ax = function (t, e, n, r, o, i) {
        var a = al(e, t.getBody(), n), u = ke(a.getClientRects()), s = e === Tw.Down;
        if (!u) return U.none();
        var c, l = (s ? $w : qw)(t.getBody(), Ww(1), a), f = H(l, Kw(1)), d = u.left, m = ex(f, d);
        if (m && i(m.node)) {
            var p = Math.abs(d - m.left), g = Math.abs(d - m.right);
            return tC(e, t, m.node, p < g, !1)
        }
        if (c = r(a) ? a.getNode() : o(a) ? a.getNode(!0) : ps(n)) {
            var h = function (e, t, n, r) {
                var o, i, a, u, s = Nl(t), c = [], l = 0, f = function (e) {
                        return ke(e.getClientRects())
                    }, d = 1 === e ? (o = s.next, i = ds, a = fs, Is.after(r)) : (o = s.prev, i = fs, a = ds, Is.before(r)),
                    m = f(d);
                do {
                    if (d.isVisible() && !a(u = f(d), m)) {
                        if (0 < c.length && i(u, ke(c)) && l++, (u = ss(u)).position = d, u.line = l, n(u)) return c;
                        c.push(u)
                    }
                } while (d = o(d));
                return c
            }(e, t.getBody(), Ww(1), c), v = ex(H(h, Kw(1)), d);
            if (v) return ox(t, v.position.toRange(), !1);
            if (v = ke(H(h, Kw(0)))) return ox(t, v.position.toRange(), !1)
        }
        return 0 === f.length ? ux(t, s).filter(s ? o : r).map(function (e) {
            return oC(t, e.toRange(), !1)
        }) : U.none()
    }, ux = function (e, t) {
        var n = e.selection.getRng(), r = e.getBody();
        if (t) {
            var o = Is.fromRangeEnd(n), i = Fw(r, o);
            return oe(i.positions)
        }
        o = Is.fromRangeStart(n), i = Mw(r, o);
        return re(i.positions)
    }, sx = function (t, e, n) {
        return ux(t, e).filter(n).exists(function (e) {
            return t.selection.setRng(e.toRange()), !0
        })
    }, cx = qn, lx = function (e, t, n) {
        var r, o, i = Nl(e.getBody()), a = N(sl, 1 === t ? i.next : i.prev);
        if (n.collapsed && "" !== lc(e)) {
            var u, s = e.dom.getParent(n.startContainer, "PRE");
            if (!s) return;
            a(Is.fromRangeStart(n)) || (o = (r = e).dom.create(lc(r)), (!xt.ie || 11 <= xt.ie) && (o.innerHTML = '<br data-mce-bogus="1">'), u = o, 1 === t ? e.$(s).after(u) : e.$(s).before(u), e.selection.select(u, !0), e.selection.collapse())
        }
    }, fx = function (e, t) {
        var n = t ? Ms.Forwards : Ms.Backwards, r = e.selection.getRng();
        return ix(e, n, r, op, ip, cx).orThunk(function () {
            return lx(e, n, r), U.none()
        })
    }, dx = function (e, t) {
        var n = t ? 1 : -1, r = e.selection.getRng();
        return ax(e, n, r, function (e) {
            return op(e) || np(e)
        }, function (e) {
            return ip(e) || rp(e)
        }, cx).orThunk(function () {
            return lx(e, n, r), U.none()
        })
    }, mx = function (t, e) {
        return fx(t, e).exists(function (e) {
            return rx(t, e), !0
        })
    }, px = function (t, e) {
        return dx(t, e).exists(function (e) {
            return rx(t, e), !0
        })
    }, gx = function (e, t) {
        return sx(e, t, t ? ip : op)
    }, hx = function (e) {
        return M(["figcaption"], It(e))
    }, vx = function (e) {
        var t = document.createRange();
        return t.setStartBefore(e.dom), t.setEndBefore(e.dom), t
    }, yx = function (e, t, n) {
        (n ? dn : fn)(e, t)
    }, bx = function (e, t, n, r) {
        return "" === t ? (l = e, f = r, d = Rt.fromTag("br"), yx(l, d, f), vx(d)) : (o = e, i = r, a = t, u = n, s = Rt.fromTag(a), c = Rt.fromTag("br"), Gn(s, u), dn(s, c), yx(o, s, i), vx(c));
        var o, i, a, u, s, c, l, f, d
    }, Cx = function (e, t, n) {
        return t ? (o = e.dom, Fw(o, n).breakAt.isNone()) : (r = e.dom, Mw(r, n).breakAt.isNone());
        var r, o
    }, wx = function (t, n) {
        var e, r, o = Rt.fromDom(t.getBody()), i = Is.fromRangeStart(t.selection.getRng()), a = lc(t), u = fc(t);
        return e = i, r = N(Bt, o), Dr(Rt.fromDom(e.container()), to, r).filter(hx).exists(function () {
            if (Cx(o, n, i)) {
                var e = bx(o, a, u, n);
                return t.selection.setRng(e), !0
            }
            return !1
        })
    }, xx = function (e, t) {
        return !!e.selection.isCollapsed() && wx(e, t)
    }, Sx = function (e, r) {
        return J(z(e, function (e) {
            return _e({shiftKey: !1, altKey: !1, ctrlKey: !1, metaKey: !1, keyCode: 0, action: te}, e)
        }), function (e) {
            return t = e, (n = r).keyCode === t.keyCode && n.shiftKey === t.shiftKey && n.altKey === t.altKey && n.ctrlKey === t.ctrlKey && n.metaKey === t.metaKey ? [e] : [];
            var t, n
        })
    }, Nx = function (e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        return function () {
            return e.apply(null, t)
        }
    }, Ex = function (e, t) {
        return W(Sx(e, t), function (e) {
            return e.action()
        })
    }, kx = function (t, e) {
        var n = e ? Ms.Forwards : Ms.Backwards, r = t.selection.getRng();
        return ix(t, n, r, ep, tp, Wn).exists(function (e) {
            return rx(t, e), !0
        })
    }, _x = function (t, e) {
        var n = e ? 1 : -1, r = t.selection.getRng();
        return ax(t, n, r, ep, tp, Wn).exists(function (e) {
            return rx(t, e), !0
        })
    }, Ax = function (e, t) {
        return sx(e, t, t ? tp : ep)
    }, Rx = function (o, e) {
        return J(e, function (e) {
            var t, n, r = (t = ss(e.getBoundingClientRect()), n = -1, {
                left: t.left - n,
                top: t.top - n,
                right: t.right + 2 * n,
                bottom: t.bottom + 2 * n,
                width: t.width + n,
                height: t.height + n
            });
            return [{x: r.left, y: o(r), cell: e}, {x: r.right, y: o(r), cell: e}]
        })
    }, Tx = function (e, t, n, r, o) {
        var i, a, u = qu(Rt.fromDom(n), "td,th,caption").map(function (e) {
            return e.dom
        }), s = H(Rx(e, u), function (e) {
            return t(e, o)
        });
        return i = r, a = o, $(s, function (e, r) {
            return e.fold(function () {
                return U.some(r)
            }, function (e) {
                var t = Math.sqrt(Math.abs(e.x - i) + Math.abs(e.y - a)),
                    n = Math.sqrt(Math.abs(r.x - i) + Math.abs(r.y - a));
                return U.some(n < t ? r : e)
            })
        }, U.none()).map(function (e) {
            return e.cell
        })
    }, Dx = N(Tx, function (e) {
        return e.bottom
    }, function (e, t) {
        return e.y < t
    }), Ox = N(Tx, function (e) {
        return e.top
    }, function (e, t) {
        return e.y > t
    }), Bx = function (t, n) {
        return re(n.getClientRects()).bind(function (e) {
            return Dx(t, e.left, e.top)
        }).bind(function (e) {
            return Iw(Il(t = e).map(function (e) {
                return Mw(t, e).positions.concat(e)
            }).getOr([]), n);
            var t
        })
    }, Px = function (t, n) {
        return oe(n.getClientRects()).bind(function (e) {
            return Ox(t, e.left, e.top)
        }).bind(function (e) {
            return Iw(Ll(t = e).map(function (e) {
                return [e].concat(Fw(t, e).positions)
            }).getOr([]), n);
            var t
        })
    }, Lx = function (e, t, n) {
        var r, o, i, a, u = e(t, n);
        return (a = u).breakType === Yy.Wrap && 0 === a.positions.length || !jn(n.getNode()) && ((i = u).breakType === Yy.Br && 1 === i.positions.length) ? (r = e, o = t, !u.breakAt.exists(function (e) {
            return r(o, e).breakAt.isSome()
        })) : u.breakAt.isNone()
    }, Ix = N(Lx, Mw), Mx = N(Lx, Fw), Fx = function (t, e, n, r) {
        var o, i, a, u, s = t.selection.getRng(), c = e ? 1 : -1;
        return !(!Uc() || (o = e, i = s, a = n, u = Is.fromRangeStart(i), !Ol(!o, a).exists(function (e) {
            return e.isEqual(u)
        }))) && (tC(c, t, n, !e, !1).each(function (e) {
            rx(t, e)
        }), !0)
    }, Ux = function (e, t) {
        var n = t.getNode(e);
        return Rn(n) && "TABLE" === n.nodeName ? U.some(n) : U.none()
    }, zx = function (u, s, c) {
        var e = Ux(!!s, c), t = !1 === s;
        e.fold(function () {
            return rx(u, c.toRange())
        }, function (a) {
            return Ol(t, u.getBody()).filter(function (e) {
                return e.isEqual(c)
            }).fold(function () {
                return rx(u, c.toRange())
            }, function (e) {
                return n = s, o = a, t = c, void ((i = lc(r = u)) ? r.undoManager.transact(function () {
                    var e = Rt.fromTag(i);
                    Gn(e, fc(r)), dn(e, Rt.fromTag("br")), (n ? ln : cn)(Rt.fromDom(o), e);
                    var t = r.dom.createRng();
                    t.setStart(e.dom, 0), t.setEnd(e.dom, 0), rx(r, t)
                }) : rx(r, t.toRange()));
                var n, r, o, t, i
            })
        })
    }, jx = function (e, t, n, r) {
        var o, i, a, u, s, c, l = e.selection.getRng(), f = Is.fromRangeStart(l), d = e.getBody();
        if (!t && Ix(r, f)) {
            var m = (u = d, Bx(s = n, c = f).orThunk(function () {
                return re(c.getClientRects()).bind(function (e) {
                    return Lw(Uw(u, Is.before(s)), e.left)
                })
            }).getOr(Is.before(s)));
            return zx(e, t, m), !0
        }
        if (t && Mx(r, f)) {
            m = (o = d, Px(i = n, a = f).orThunk(function () {
                return re(a.getClientRects()).bind(function (e) {
                    return Lw(zw(o, Is.after(i)), e.left)
                })
            }).getOr(Is.after(i)));
            return zx(e, t, m), !0
        }
        return !1
    }, Hx = function (n, r, o) {
        return U.from(n.dom.getParent(n.selection.getNode(), "td,th")).bind(function (t) {
            return U.from(n.dom.getParent(t, "table")).map(function (e) {
                return o(n, r, e, t)
            })
        }).getOr(!1)
    }, Vx = function (e, t) {
        return Hx(e, t, Fx)
    }, qx = function (e, t) {
        return Hx(e, t, jx)
    }, $x = function (i, a) {
        i.on("keydown", function (e) {
            var t, n, r, o;
            !1 === e.isDefaultPrevented() && (t = i, n = a, r = e, o = mt().os, Ex([{
                keyCode: ed.RIGHT,
                action: Nx(mx, t, !0)
            }, {keyCode: ed.LEFT, action: Nx(mx, t, !1)}, {keyCode: ed.UP, action: Nx(px, t, !1)}, {
                keyCode: ed.DOWN,
                action: Nx(px, t, !0)
            }, {keyCode: ed.RIGHT, action: Nx(Vx, t, !0)}, {keyCode: ed.LEFT, action: Nx(Vx, t, !1)}, {
                keyCode: ed.UP,
                action: Nx(qx, t, !1)
            }, {keyCode: ed.DOWN, action: Nx(qx, t, !0)}, {keyCode: ed.RIGHT, action: Nx(kx, t, !0)}, {
                keyCode: ed.LEFT,
                action: Nx(kx, t, !1)
            }, {keyCode: ed.UP, action: Nx(_x, t, !1)}, {keyCode: ed.DOWN, action: Nx(_x, t, !0)}, {
                keyCode: ed.RIGHT,
                action: Nx(ew, t, n, !0)
            }, {keyCode: ed.LEFT, action: Nx(ew, t, n, !1)}, {
                keyCode: ed.RIGHT,
                ctrlKey: !o.isOSX(),
                altKey: o.isOSX(),
                action: Nx(rw, t, n)
            }, {keyCode: ed.LEFT, ctrlKey: !o.isOSX(), altKey: o.isOSX(), action: Nx(ow, t, n)}, {
                keyCode: ed.UP,
                action: Nx(xx, t, !1)
            }, {keyCode: ed.DOWN, action: Nx(xx, t, !0)}], r).each(function (e) {
                r.preventDefault()
            }))
        })
    }, Wx = function (o, i) {
        o.on("keydown", function (e) {
            var t, n, r;
            !1 === e.isDefaultPrevented() && (t = o, n = i, r = e, Ex([{
                keyCode: ed.BACKSPACE,
                action: Nx(ww, t, !1)
            }, {keyCode: ed.BACKSPACE, action: Nx(vC, t, !1)}, {
                keyCode: ed.DELETE,
                action: Nx(vC, t, !0)
            }, {keyCode: ed.BACKSPACE, action: Nx(sC, t, !1)}, {
                keyCode: ed.DELETE,
                action: Nx(sC, t, !0)
            }, {keyCode: ed.BACKSPACE, action: Nx(sw, t, n, !1)}, {
                keyCode: ed.DELETE,
                action: Nx(sw, t, n, !0)
            }, {keyCode: ed.BACKSPACE, action: Nx(_g, t, !1)}, {
                keyCode: ed.DELETE,
                action: Nx(_g, t, !0)
            }, {keyCode: ed.BACKSPACE, action: Nx(yC, t, !1)}, {
                keyCode: ed.DELETE,
                action: Nx(yC, t, !0)
            }, {keyCode: ed.BACKSPACE, action: Nx(pw, t, !1)}, {
                keyCode: ed.DELETE,
                action: Nx(pw, t, !0)
            }, {keyCode: ed.BACKSPACE, action: Nx(Qb, t, !1)}, {
                keyCode: ed.DELETE,
                action: Nx(Qb, t, !0)
            }, {keyCode: ed.BACKSPACE, action: Nx(Xb, t, !1)}, {
                keyCode: ed.DELETE,
                action: Nx(Xb, t, !0)
            }, {keyCode: ed.BACKSPACE, action: Nx(dw, t, !1)}, {
                keyCode: ed.DELETE,
                action: Nx(dw, t, !0)
            }], r).each(function (e) {
                r.preventDefault()
            }))
        }), o.on("keyup", function (e) {
            var t, n;
            !1 === e.isDefaultPrevented() && (t = o, n = e, Ex([{
                keyCode: ed.BACKSPACE,
                action: Nx(hC, t)
            }, {keyCode: ed.DELETE, action: Nx(hC, t)}], n))
        })
    }, Kx = function (e, t) {
        var n, r, o = t, i = e.dom, a = e.schema.getMoveCaretBeforeOnEnterElements();
        if (t) {
            !/^(LI|DT|DD)$/.test(t.nodeName) || (r = function (e) {
                for (; e;) {
                    if (1 === e.nodeType || 3 === e.nodeType && e.data && /[\r\n\s]/.test(e.data)) return e;
                    e = e.nextSibling
                }
            }(t.firstChild)) && /^(UL|OL|DL)$/.test(r.nodeName) && t.insertBefore(i.doc.createTextNode(fo), t.firstChild);
            var u = i.createRng();
            if (t.normalize(), t.hasChildNodes()) {
                for (var s = new Yr(t, t); n = s.current();) {
                    if (Mn(n)) {
                        u.setStart(n, 0), u.setEnd(n, 0);
                        break
                    }
                    if (a[n.nodeName.toLowerCase()]) {
                        u.setStartBefore(n), u.setEndBefore(n);
                        break
                    }
                    o = n, n = s.next()
                }
                n || (u.setStart(o, 0), u.setEnd(o, 0))
            } else jn(t) ? t.nextSibling && i.isBlock(t.nextSibling) ? (u.setStartBefore(t), u.setEndBefore(t)) : (u.setStartAfter(t), u.setEndAfter(t)) : (u.setStart(t, 0), u.setEnd(t, 0));
            e.selection.setRng(u), zd(e, u)
        }
    }, Xx = function (e) {
        return U.from(e.dom.getParent(e.selection.getStart(!0), e.dom.isBlock))
    }, Yx = function (e, t) {
        return e && e.parentNode && e.parentNode.nodeName === t
    }, Gx = function (e) {
        return e && /^(OL|UL|LI)$/.test(e.nodeName)
    }, Jx = function (e) {
        var t = e.parentNode;
        return /^(LI|DT|DD)$/.test(t.nodeName) ? t : e
    }, Qx = function (e, t, n) {
        for (var r = e[n ? "firstChild" : "lastChild"]; r && !Rn(r);) r = r[n ? "nextSibling" : "previousSibling"];
        return r === t
    }, Zx = function (e, t, n, r, o) {
        var i, a, u, s, c, l, f, d, m, p = e.dom, g = e.selection.getRng();
        n !== e.getBody() && (Gx(i = n) && Gx(i.parentNode) && (o = "LI"), a = o ? t(o) : p.create("BR"), Qx(n, r, !0) && Qx(n, r, !1) ? Yx(n, "LI") ? (u = Jx(n), p.insertAfter(a, u), (null === (m = (d = n).parentNode) || void 0 === m ? void 0 : m.firstChild) === d ? p.remove(u) : p.remove(n)) : p.replace(a, n) : (Qx(n, r, !0) ? Yx(n, "LI") ? (p.insertAfter(a, Jx(n)), a.appendChild(p.doc.createTextNode(" ")), a.appendChild(n)) : n.parentNode.insertBefore(a, n) : Qx(n, r, !1) ? p.insertAfter(a, Jx(n)) : (n = Jx(n), (s = g.cloneRange()).setStartAfter(r), s.setEndAfter(n), c = s.extractContents(), "LI" === o && (f = "LI", (l = c).firstChild && l.firstChild.nodeName === f) ? (a = c.firstChild, p.insertAfter(c, n)) : (p.insertAfter(c, n), p.insertAfter(a, n))), p.remove(r)), Kx(e, a))
    }, eS = function (e) {
        e.innerHTML = '<br data-mce-bogus="1">'
    }, tS = function (e, t) {
        return e.nodeName === t || e.previousSibling && e.previousSibling.nodeName === t
    }, nS = function (e, t) {
        return t && e.isBlock(t) && !/^(TD|TH|CAPTION|FORM)$/.test(t.nodeName) && !/^(fixed|absolute)/i.test(t.style.position) && "true" !== e.getContentEditable(t)
    }, rS = function (e, t, n) {
        return !1 === Mn(t) ? n : e ? 1 === n && t.data.charAt(n - 1) === mo ? 0 : n : n === t.data.length - 1 && t.data.charAt(n) === mo ? t.data.length : n
    }, oS = function (e, t) {
        for (var n, r = e.getRoot(), o = t; o !== r && "false" !== e.getContentEditable(o);) "true" === e.getContentEditable(o) && (n = o), o = o.parentNode;
        return o !== r ? n : r
    }, iS = function (e, t) {
        var n = lc(e);
        n && n.toLowerCase() === t.tagName.toLowerCase() && function (e, o, t) {
            var i = e.dom;
            U.from(t.style).map(i.parseStyle).each(function (e) {
                var t = or(Rt.fromDom(o)), n = _e(_e({}, t), e);
                i.setStyles(o, n)
            });
            var n = U.from(t["class"]).map(function (e) {
                return e.split(/\s+/)
            }), r = U.from(o.className).map(function (e) {
                return H(e.split(/\s+/), function (e) {
                    return "" !== e
                })
            });
            as(n, r, function (t, e) {
                var n = H(e, function (e) {
                    return !M(t, e)
                }), r = Ae(t, n);
                i.setAttrib(o, "class", r.join(" "))
            });
            var a = ["style", "class"], u = pe(t, function (e, t) {
                return !M(a, t)
            });
            i.setAttribs(o, u)
        }(e, t, fc(e))
    }, aS = function (a, e) {
        var t, u, i, s, n, r, o, c, l, f = a.dom, d = a.schema, m = d.getNonEmptyElements(), p = a.selection.getRng(),
            g = function (e) {
                var t, n = u, r = d.getTextInlineElements(),
                    o = e || "TABLE" === c || "HR" === c ? f.create(e || N) : s.cloneNode(!1), i = o;
                if (!1 === a.getParam("keep_styles", !0)) f.setAttrib(o, "style", null), f.setAttrib(o, "class", null); else do {
                    if (r[n.nodeName]) {
                        if (Fl(n) || Xl(n)) continue;
                        t = n.cloneNode(!1), f.setAttrib(t, "id", ""), o.hasChildNodes() ? t.appendChild(o.firstChild) : i = t, o.appendChild(t)
                    }
                } while ((n = n.parentNode) && n !== E);
                return iS(a, o), eS(i), o
            }, h = function (e) {
                var t, n, r = rS(e, u, i);
                if (Mn(u) && (e ? 0 < r : r < u.nodeValue.length)) return !1;
                if (u.parentNode === s && l && !e) return !0;
                if (e && Rn(u) && u === s.firstChild) return !0;
                if (tS(u, "TABLE") || tS(u, "HR")) return l && !e || !l && e;
                var o = new Yr(u, s);
                for (Mn(u) && (e && 0 === r ? o.prev() : e || r !== u.nodeValue.length || o.next()); t = o.current();) {
                    if (Rn(t)) {
                        if (!t.getAttribute("data-mce-bogus") && (n = t.nodeName.toLowerCase(), m[n] && "br" !== n)) return !1
                    } else if (Mn(t) && !zo(t.nodeValue)) return !1;
                    e ? o.prev() : o.next()
                }
                return !0
            }, v = function () {
                n = /^(H[1-6]|PRE|FIGURE)$/.test(c) && "HGROUP" !== C ? g(N) : g(), a.getParam("end_container_on_empty_block", !1) && nS(f, o) && f.isEmpty(s) ? n = f.split(o, s) : f.insertAfter(n, s), Kx(a, n)
            };
        fd(f, p).each(function (e) {
            p.setStart(e.startContainer, e.startOffset), p.setEnd(e.endContainer, e.endOffset)
        }), u = p.startContainer, i = p.startOffset, N = lc(a);
        var y = !(!e || !e.shiftKey), b = !(!e || !e.ctrlKey);
        Rn(u) && u.hasChildNodes() && (l = i > u.childNodes.length - 1, u = u.childNodes[Math.min(i, u.childNodes.length - 1)] || u, i = l && Mn(u) ? u.nodeValue.length : 0);
        var C, w, x, S, N, E = oS(f, u);
        E && ((N && !y || !N && y) && (u = function (e, t, n, r, o) {
            var i, a, u, s, c, l, f = t || "P", d = e.dom, m = oS(d, r), p = d.getParent(r, d.isBlock);
            if (!p || !nS(d, p)) {
                if (c = (p = p || m) === e.getBody() || (l = p) && /^(TD|TH|CAPTION)$/.test(l.nodeName) ? p.nodeName.toLowerCase() : p.parentNode.nodeName.toLowerCase(), !p.hasChildNodes()) return i = d.create(f), iS(e, i), p.appendChild(i), n.setStart(i, 0), n.setEnd(i, 0), i;
                for (u = r; u.parentNode !== p;) u = u.parentNode;
                for (; u && !d.isBlock(u);) u = (a = u).previousSibling;
                if (a && e.schema.isValidChild(c, f.toLowerCase())) {
                    for (i = d.create(f), iS(e, i), a.parentNode.insertBefore(i, a), u = a; u && !d.isBlock(u);) s = u.nextSibling, i.appendChild(u), u = s;
                    n.setStart(r, o), n.setEnd(r, o)
                }
            }
            return r
        }(a, N, p, u, i)), s = f.getParent(u, f.isBlock), o = s ? f.getParent(s.parentNode, f.isBlock) : null, c = s ? s.nodeName.toUpperCase() : "", "LI" !== (C = o ? o.nodeName.toUpperCase() : "") || b || (o = (s = o).parentNode, c = C), /^(LI|DT|DD)$/.test(c) && f.isEmpty(s) ? Zx(a, g, o, s, N) : N && s === a.getBody() || (N = N || "P", yo(s) ? (n = _o(s), f.isEmpty(s) && eS(s), iS(a, n), Kx(a, n)) : h() ? v() : h(!0) ? (n = s.parentNode.insertBefore(g(), s), Kx(a, tS(s, "HR") ? n : s)) : ((S = (x = p).cloneRange()).setStart(x.startContainer, rS(!0, x.startContainer, x.startOffset)), S.setEnd(x.endContainer, rS(!1, x.endContainer, x.endOffset)), (t = S.cloneRange()).setEndAfter(s), r = t.extractContents(), w = r, Y(Vu(Rt.fromDom(w), zt), function (e) {
            var t = e.dom;
            t.nodeValue = go(t.nodeValue)
        }), function (e) {
            for (; Mn(e) && (e.nodeValue = e.nodeValue.replace(/^[\r\n]+/, "")), e = e.firstChild;) ;
        }(r), n = r.firstChild, f.insertAfter(r, s), function (e, t, n) {
            var r, o, i, a = n, u = [];
            if (a) {
                for (; a = a.firstChild;) {
                    if (e.isBlock(a)) return;
                    Rn(a) && !t[a.nodeName.toLowerCase()] && u.push(a)
                }
                for (r = u.length; r--;) !(a = u[r]).hasChildNodes() || a.firstChild === a.lastChild && "" === a.firstChild.nodeValue ? e.remove(a) : (o = e, (i = a) && "A" === i.nodeName && o.isEmpty(i) && e.remove(a))
            }
        }(f, m, n), function (e, t) {
            t.normalize();
            var n = t.lastChild;
            n && !/^(left|right)$/gi.test(e.getStyle(n, "float", !0)) || e.add(t, "br")
        }(f, s), f.isEmpty(s) && eS(s), n.normalize(), f.isEmpty(n) ? (f.remove(n), v()) : (iS(a, n), Kx(a, n))), f.setAttrib(n, "id", ""), a.fire("NewBlock", {newBlock: n})))
    }, uS = function (e, t, n) {
        var r = e.dom.createRng();
        n ? (r.setStartBefore(t), r.setEndBefore(t)) : (r.setStartAfter(t), r.setEndAfter(t)), e.selection.setRng(r), zd(e, r)
    }, sS = function (e, t) {
        var n, r, o = e.selection, i = e.dom, a = o.getRng();
        fd(i, a).each(function (e) {
            a.setStart(e.startContainer, e.startOffset), a.setEnd(e.endContainer, e.endOffset)
        });
        var u, s = a.startOffset, c = a.startContainer;
        1 === c.nodeType && c.hasChildNodes() && (u = s > c.childNodes.length - 1, c = c.childNodes[Math.min(s, c.childNodes.length - 1)] || c, s = u && 3 === c.nodeType ? c.nodeValue.length : 0);
        var l = i.getParent(c, i.isBlock), f = l ? i.getParent(l.parentNode, i.isBlock) : null,
            d = f ? f.nodeName.toUpperCase() : "", m = !(!t || !t.ctrlKey);
        "LI" !== d || m || (l = f), c && 3 === c.nodeType && s >= c.nodeValue.length && !function (e, t, n) {
            for (var r, o = new Yr(t, n), i = e.getNonEmptyElements(); r = o.next();) if (i[r.nodeName.toLowerCase()] || 0 < r.length) return !0
        }(e.schema, c, l) && (n = i.create("br"), a.insertNode(n), a.setStartAfter(n), a.setEndAfter(n), r = !0), n = i.create("br"), zs(i, a, n), uS(e, n, r), e.undoManager.add()
    }, cS = function (e, t) {
        var n = Rt.fromTag("br");
        cn(Rt.fromDom(t), n), e.undoManager.add()
    }, lS = function (e, t) {
        fS(e.getBody(), t) || ln(Rt.fromDom(t), Rt.fromTag("br"));
        var n = Rt.fromTag("br");
        ln(Rt.fromDom(t), n), uS(e, n.dom, !1), e.undoManager.add()
    }, fS = function (e, t) {
        return n = Is.after(t), !!jn(n.getNode()) || Bl(e, Is.after(t)).map(function (e) {
            return jn(e.getNode())
        }).getOr(!1);
        var n
    }, dS = function (e) {
        return e && "A" === e.nodeName && "href" in e
    }, mS = function (e) {
        return e.fold(b, dS, dS, b)
    }, pS = function (e, t) {
        t.fold(te, N(cS, e), N(lS, e), te)
    }, gS = function (e, t) {
        var n, r, o,
            i = (r = N(Rb, n = e), o = Is.fromRangeStart(n.selection.getRng()), UC(r, n.getBody(), o).filter(mS));
        i.isSome() ? i.each(N(pS, e)) : sS(e, t)
    }, hS = function (e, t) {
        return Xx(e).filter(function (e) {
            return 0 < t.length && Dt(Rt.fromDom(e), t)
        }).isSome()
    }, vS = wr([{br: []}, {block: []}, {none: []}]), yS = function (e, t) {
        return hS(n = e, n.getParam("no_newline_selector", ""));
        var n
    }, bS = function (n) {
        return function (e, t) {
            return "" === lc(e) === n
        }
    }, CS = function (n) {
        return function (e, t) {
            return Xx(e).filter(function (e) {
                return ao(Rt.fromDom(e))
            }).isSome() === n
        }
    }, wS = function (n, r) {
        return function (e, t) {
            return Xx(e).fold(S(""), function (e) {
                return e.nodeName.toUpperCase()
            }) === n.toUpperCase() === r
        }
    }, xS = function (e) {
        return wS("pre", e)
    }, SS = function (n) {
        return function (e, t) {
            return e.getParam("br_in_pre", !0) === n
        }
    }, NS = function (e, t) {
        return hS(n = e, n.getParam("br_newline_selector", ".mce-toc h2,figcaption,caption"));
        var n
    }, ES = function (e, t) {
        return t
    }, kS = function (e) {
        var t = lc(e), n = function (e, t) {
            for (var n, r = e.getRoot(), o = t; o !== r && "false" !== e.getContentEditable(o);) "true" === e.getContentEditable(o) && (n = o), o = o.parentNode;
            return o !== r ? n : r
        }(e.dom, e.selection.getStart());
        return n && e.schema.isValidChild(n.nodeName, t || "P")
    }, _S = function (e, t) {
        return function (n, r) {
            return $(e, function (e, t) {
                return e && t(n, r)
            }, !0) ? U.some(t) : U.none()
        }
    }, AS = function (e, t) {
        return RC([_S([yS], vS.none()), _S([wS("summary", !0)], vS.br()), _S([xS(!0), SS(!1), ES], vS.br()), _S([xS(!0), SS(!1)], vS.block()), _S([xS(!0), SS(!0), ES], vS.block()), _S([xS(!0), SS(!0)], vS.br()), _S([CS(!0), ES], vS.br()), _S([CS(!0)], vS.block()), _S([bS(!0), ES, kS], vS.block()), _S([bS(!0)], vS.br()), _S([NS], vS.br()), _S([bS(!1), ES], vS.br()), _S([kS], vS.block())], [e, !(!t || !t.shiftKey)]).getOr(vS.none())
    }, RS = function (e, t) {
        AS(e, t).fold(function () {
            gS(e, t)
        }, function () {
            aS(e, t)
        }, te)
    }, TS = function (o) {
        o.on("keydown", function (e) {
            var t, n, r;
            e.keyCode === ed.ENTER && (t = o, (n = e).isDefaultPrevented() || (n.preventDefault(), (r = t.undoManager).typing && (r.typing = !1, r.add()), t.undoManager.transact(function () {
                !1 === t.selection.isCollapsed() && t.execCommand("Delete"), RS(t, n)
            })))
        })
    }, DS = function (r) {
        r.on("keydown", function (e) {
            var t, n;
            !1 === e.isDefaultPrevented() && (t = r, n = e, Ex([{
                keyCode: ed.END,
                action: Nx(gx, t, !0)
            }, {keyCode: ed.HOME, action: Nx(gx, t, !1)}, {keyCode: ed.END, action: Nx(Ax, t, !0)}, {
                keyCode: ed.HOME,
                action: Nx(Ax, t, !1)
            }], n).each(function (e) {
                n.preventDefault()
            }))
        })
    }, OS = mt().browser, BS = function (t) {
        var e, n;
        e = t, n = Pu(function () {
            e.composing || Up(e)
        }, 0), OS.isIE() && (e.on("keypress", function (e) {
            n.throttle()
        }), e.on("remove", function (e) {
            n.cancel()
        })), t.on("input", function (e) {
            !1 === e.isComposing && Up(t)
        })
    }, PS = function (n, r) {
        var e = r.container(), t = r.offset();
        return Mn(e) ? (e.insertData(t, n), U.some(Is(e, t + n.length))) : ul(r).map(function (e) {
            var t = Rt.fromText(n);
            return (r.isAtEnd() ? ln : cn)(e, t), Is(t.dom, n.length)
        })
    }, LS = N(PS, fo), IS = N(PS, " "), MS = function (r, o) {
        return function (e) {
            return t = r, (!Tp(n = e) && (Dp(t, n) || Ap(t, n) || Rp(t, n)) ? LS : IS)(o);
            var t, n
        }
    }, FS = function (e) {
        var t, n, r = Is.fromRangeStart(e.selection.getRng()), o = Rt.fromDom(e.getBody());
        if (e.selection.isCollapsed()) {
            var i = N(Rb, e), a = Is.fromRangeStart(e.selection.getRng());
            return UC(i, e.getBody(), a).bind((n = o, function (e) {
                return e.fold(function (e) {
                    return Pl(n.dom, Is.before(e))
                }, function (e) {
                    return Ll(e)
                }, function (e) {
                    return Il(e)
                }, function (e) {
                    return Bl(n.dom, Is.after(e))
                })
            })).bind(MS(o, r)).exists((t = e, function (e) {
                return t.selection.setRng(e.toRange()), t.nodeChanged(), !0
            }))
        }
        return !1
    }, US = function (r) {
        r.on("keydown", function (e) {
            var t, n;
            !1 === e.isDefaultPrevented() && (t = r, n = e, Ex([{
                keyCode: ed.SPACEBAR,
                action: Nx(FS, t)
            }], n).each(function (e) {
                n.preventDefault()
            }))
        })
    }, zS = function (e) {
        var t, n = nw(e);
        return (t = e).on("keyup compositionstart", N(Rw, t)), $x(e, n), Wx(e, n), TS(e), US(e), BS(e), DS(e), n
    }, jS = (HS.prototype.nodeChanged = function (e) {
        var t, n, r, o = this.editor.selection;
        this.editor.initialized && o && !this.editor.getParam("disable_nodechange") && !this.editor.mode.isReadOnly() && (r = this.editor.getBody(), (t = o.getStart(!0) || r).ownerDocument === this.editor.getDoc() && this.editor.dom.isChildOf(t, r) || (t = r), n = [], this.editor.dom.getParent(t, function (e) {
            return e === r || void n.push(e)
        }), (e = e || {}).element = t, e.parents = n, this.editor.fire("NodeChange", e))
    }, HS.prototype.isSameElementPath = function (e) {
        var t, n = this.editor.$(e).parentsUntil(this.editor.getBody()).add(e);
        if (n.length === this.lastPath.length) {
            for (t = n.length; 0 <= t && n[t] === this.lastPath[t]; t--) ;
            if (-1 === t) return this.lastPath = n, !0
        }
        return this.lastPath = n, !1
    }, HS);

    function HS(r) {
        var o;
        this.lastPath = [], this.editor = r;
        var t = this;
        "onselectionchange" in r.getDoc() || r.on("NodeChange click mouseup keyup focus", function (e) {
            var t = r.selection.getRng(), n = {
                startContainer: t.startContainer,
                startOffset: t.startOffset,
                endContainer: t.endContainer,
                endOffset: t.endOffset
            };
            "nodechange" !== e.type && id(n, o) || r.fire("SelectionChange"), o = n
        }), r.on("contextmenu", function () {
            r.fire("SelectionChange")
        }), r.on("SelectionChange", function () {
            var e = r.selection.getStart(!0);
            !e || !xt.range && r.selection.isCollapsed() || zf(r) && !t.isSameElementPath(e) && r.dom.isChildOf(e, r.getBody()) && r.nodeChanged({selectionChange: !0})
        }), r.on("mouseup", function (e) {
            !e.isDefaultPrevented() && zf(r) && ("IMG" === r.selection.getNode().nodeName ? Wr.setEditorTimeout(r, function () {
                r.nodeChanged()
            }) : r.nodeChanged())
        })
    }

    var VS = function (e) {
        var t, n;
        (t = e).on("click", function (e) {
            t.dom.getParent(e.target, "details") && e.preventDefault()
        }), (n = e).parser.addNodeFilter("details", function (e) {
            Y(e, function (e) {
                e.attr("data-mce-open", e.attr("open")), e.attr("open", "open")
            })
        }), n.serializer.addNodeFilter("details", function (e) {
            Y(e, function (e) {
                var t = e.attr("data-mce-open");
                e.attr("open", K(t) ? t : null), e.attr("data-mce-open", null)
            })
        })
    }, qS = function (e) {
        return Rn(e) && oo(Rt.fromDom(e))
    }, $S = function (a) {
        a.on("click", function (e) {
            var t, n, r, o, i;
            3 <= e.detail && (r = (t = a).selection.getRng(), o = Is.fromRangeStart(r), i = Is.fromRangeEnd(r), Is.isElementPosition(o) && (n = o.container(), qS(n) && Ll(n).each(function (e) {
                return r.setStart(e.container(), e.offset())
            })), Is.isElementPosition(i) && (n = o.container(), qS(n) && Il(n).each(function (e) {
                return r.setEnd(e.container(), e.offset())
            })), t.selection.setRng(Rg(r)))
        })
    }, WS = function (e) {
        var t = e.getBoundingClientRect(), n = e.ownerDocument, r = n.documentElement, o = n.defaultView;
        return {top: t.top + o.pageYOffset - r.clientTop, left: t.left + o.pageXOffset - r.clientLeft}
    }, KS = function (e, t) {
        return n = (u = e).inline ? WS(u.getBody()) : {
            left: 0,
            top: 0
        }, a = (i = e).getBody(), r = i.inline ? {left: a.scrollLeft, top: a.scrollTop} : {
            left: 0,
            top: 0
        }, {
            pageX: (o = function (e, t) {
                if (t.target.ownerDocument === e.getDoc()) return {left: t.pageX, top: t.pageY};
                var n, r, o, i, a, u = WS(e.getContentAreaContainer()),
                    s = (r = (n = e).getBody(), o = n.getDoc().documentElement, i = {
                        left: r.scrollLeft,
                        top: r.scrollTop
                    }, a = {left: r.scrollLeft || o.scrollLeft, top: r.scrollTop || o.scrollTop}, n.inline ? i : a);
                return {left: t.pageX - u.left + s.left, top: t.pageY - u.top + s.top}
            }(e, t)).left - n.left + r.left, pageY: o.top - n.top + r.top
        };
        var n, r, o, i, a, u
    }, XS = qn, YS = Vn, GS = function (e) {
        e && e.parentNode && e.parentNode.removeChild(e)
    }, JS = function (u, s) {
        return function (e) {
            var t, n, r, o, i, a;
            0 === e.button && (t = W(s.dom.getParents(e.target), function () {
                for (var n = [], e = 0; e < arguments.length; e++) n[e] = arguments[e];
                return function (e) {
                    for (var t = 0; t < n.length; t++) if (n[t](e)) return !0;
                    return !1
                }
            }(XS, YS)).getOr(null), i = s.getBody(), XS(a = t) && a !== i && (n = s.dom.getPos(t), r = s.getBody(), o = s.getDoc().documentElement, u.set({
                element: t,
                dragging: !1,
                screenX: e.screenX,
                screenY: e.screenY,
                maxX: (s.inline ? r.scrollWidth : o.offsetWidth) - 2,
                maxY: (s.inline ? r.scrollHeight : o.offsetHeight) - 2,
                relX: e.pageX - n.x,
                relY: e.pageY - n.y,
                width: t.offsetWidth,
                height: t.offsetHeight,
                ghost: function (e, t, n, r) {
                    var o = e.dom, i = t.cloneNode(!0);
                    o.setStyles(i, {width: n, height: r}), o.setAttrib(i, "data-mce-selected", null);
                    var a = o.create("div", {
                        "class": "mce-drag-container",
                        "data-mce-bogus": "all",
                        unselectable: "on",
                        contenteditable: "false"
                    });
                    return o.setStyles(a, {
                        position: "absolute",
                        opacity: .5,
                        overflow: "hidden",
                        border: 0,
                        padding: 0,
                        margin: 0,
                        width: n,
                        height: r
                    }), o.setStyles(i, {margin: 0, boxSizing: "border-box"}), a.appendChild(i), a
                }(s, t, t.offsetWidth, t.offsetHeight)
            })))
        }
    }, QS = function (e, h) {
        var v = Wr.throttle(function (e, t) {
            h._selectionOverrides.hideFakeCaret(), h.selection.placeCaretAt(e, t)
        }, 0);
        return h.on("remove", v.stop), function (g) {
            return e.on(function (e) {
                var t, n, r, o, i, a, u, s, c, l, f, d, m,
                    p = Math.max(Math.abs(g.screenX - e.screenX), Math.abs(g.screenY - e.screenY));
                if (!e.dragging && 10 < p) {
                    if (h.fire("dragstart", {target: e.element}).isDefaultPrevented()) return;
                    e.dragging = !0, h.focus()
                }
                e.dragging && (d = e, t = {
                    pageX: (m = KS(h, g)).pageX - d.relX,
                    pageY: m.pageY + 5
                }, l = e.ghost, f = h.getBody(), l.parentNode !== f && f.appendChild(l), n = e.ghost, r = t, o = e.width, i = e.height, a = e.maxX, u = e.maxY, c = s = 0, n.style.left = r.pageX + "px", n.style.top = r.pageY + "px", r.pageX + o > a && (s = r.pageX + o - a), r.pageY + i > u && (c = r.pageY + i - u), n.style.width = o - s + "px", n.style.height = i - c + "px", v(g.clientX, g.clientY))
            })
        }
    }, ZS = function (e, l) {
        return function (c) {
            e.on(function (e) {
                var t, n, r, o, i, a, u, s;
                e.dragging && (u = (o = l).selection, s = u.getSel().getRangeAt(0).startContainer, i = 3 === s.nodeType ? s.parentNode : s, a = e.element, i === a || o.dom.isChildOf(i, a) || XS(i) || (n = e.element, (r = n.cloneNode(!0)).removeAttribute("data-mce-selected"), t = r, l.fire("drop", {
                    clientX: c.clientX,
                    clientY: c.clientY
                }).isDefaultPrevented() || l.undoManager.transact(function () {
                    GS(e.element), l.insertContent(l.dom.getOuterHTML(t)), l._selectionOverrides.hideFakeCaret()
                })))
            }), eN(e)
        }
    }, eN = function (e) {
        e.on(function (e) {
            GS(e.ghost)
        }), e.clear()
    }, tN = function (e) {
        var t, n, r, o = (t = Au(U.none()), {
            clear: function () {
                return t.set(U.none())
            }, set: function (e) {
                return t.set(U.some(e))
            }, isSet: function () {
                return t.get().isSome()
            }, on: function (e) {
                return t.get().each(e)
            }
        }), i = xu.DOM, a = document, u = JS(o, e), s = QS(o, e), c = ZS(o, e), l = (n = o, function () {
            n.on(function (e) {
                e.dragging && r.fire("dragend")
            }), eN(n)
        });
        (r = e).on("mousedown", u), e.on("mousemove", s), e.on("mouseup", c), i.bind(a, "mousemove", s), i.bind(a, "mouseup", l), e.on("remove", function () {
            i.unbind(a, "mousemove", s), i.unbind(a, "mouseup", l)
        })
    }, nN = function (e) {
        var n, i, a, u, t;
        tN(e), (n = e).on("drop", function (e) {
            var t = "undefined" != typeof e.clientX ? n.getDoc().elementFromPoint(e.clientX, e.clientY) : null;
            !XS(t) && "false" !== n.dom.getContentEditableParent(t) || e.preventDefault()
        }), e.getParam("block_unsupported_drop", !0, "boolean") && (a = function (e) {
            var t;
            e.isDefaultPrevented() || (t = e.dataTransfer) && (M(t.types, "Files") || 0 < t.files.length) && (e.preventDefault(), "drop" === e.type && Zy(i, "Dropped file type is not supported"))
        }, u = function (e) {
            cm(i, e.target) && a(e)
        }, t = function () {
            var t = xu.DOM, n = i.dom, r = document, o = i.inline ? i.getBody() : i.getDoc(), e = ["drop", "dragover"];
            Y(e, function (e) {
                t.bind(r, e, u), n.bind(o, e, a)
            }), i.on("remove", function () {
                Y(e, function (e) {
                    t.unbind(r, e, u), n.unbind(o, e, a)
                })
            })
        }, (i = e).on("init", function () {
            Wr.setEditorTimeout(i, t, 0)
        }))
    }, rN = Vn, oN = qn, iN = function (e, t) {
        return Jf(e.getBody(), t)
    }, aN = function (u) {
        var s, c = u.selection, l = u.dom, f = l.isBlock, d = u.getBody(), m = Fc(u, d, f, function () {
            return vm(u)
        }), p = "sel-" + l.uniqueId(), i = "data-mce-selected", g = function (e) {
            return e !== d && (oN(e) || Wn(e)) && l.isChildOf(e, d)
        }, h = function (e) {
            e && c.setRng(e)
        }, r = c.getRng, v = function (e, t, n, r) {
            return void 0 === r && (r = !0), u.fire("ShowCaret", {
                target: t,
                direction: e,
                before: n
            }).isDefaultPrevented() ? null : (r && c.scrollIntoView(t, -1 === e), m.show(n, t))
        }, t = function (e) {
            return Co(e) || Eo(e) || ko(e)
        }, y = function (e) {
            return t(e.startContainer) || t(e.endContainer)
        }, b = function (e) {
            var t = u.schema.getShortEndedElements(), n = l.createRng(), r = e.startContainer, o = e.startOffset,
                i = e.endContainer, a = e.endOffset;
            return ve(t, r.nodeName.toLowerCase()) ? 0 === o ? n.setStartBefore(r) : n.setStartAfter(r) : n.setStart(r, o), ve(t, i.nodeName.toLowerCase()) ? 0 === a ? n.setEndBefore(i) : n.setEndAfter(i) : n.setEnd(i, a), n
        }, C = function (e) {
            var t = e.cloneNode(!0), n = u.fire("ObjectSelected", {target: e, targetClone: t});
            if (n.isDefaultPrevented()) return null;
            var r = function (e, t, n) {
                var r = u.$, o = Pr(Rt.fromDom(u.getBody()), "#" + p).fold(function () {
                    return r([])
                }, function (e) {
                    return r([e.dom])
                });
                0 === o.length && (o = r('<div data-mce-bogus="all" class="mce-offscreen-selection"></div>').attr("id", p)).appendTo(u.getBody());
                var i = l.createRng();
                t === n && xt.ie ? (o.empty().append('<p style="font-size: 0" data-mce-bogus="all">\xa0</p>').append(t), i.setStartAfter(o[0].firstChild.firstChild), i.setEndAfter(t)) : (o.empty().append(fo).append(t).append(fo), i.setStart(o[0].firstChild, 1), i.setEnd(o[0].lastChild, 0)), o.css({top: l.getPos(e, u.getBody()).y}), o[0].focus();
                var a = c.getSel();
                return a.removeAllRanges(), a.addRange(i), i
            }(e, n.targetClone, t), o = Rt.fromDom(e);
            return Y(qu(Rt.fromDom(u.getBody()), "*[data-mce-selected]"), function (e) {
                Bt(o, e) || Zn(e, i)
            }), l.getAttrib(e, i) || e.setAttribute(i, "1"), s = e, S(), r
        }, w = function (e, t) {
            if (!e) return null;
            if (e.collapsed) {
                if (!y(e)) {
                    var n = t ? 1 : -1, r = al(n, d, e), o = r.getNode(!t);
                    if (jc(o)) return v(n, o, !!t && !r.isAtEnd(), !1);
                    var i = r.getNode(t);
                    if (jc(i)) return v(n, i, !t && !r.isAtEnd(), !1)
                }
                return null
            }
            var a = e.startContainer, u = e.startOffset, s = e.endOffset;
            if (3 === a.nodeType && 0 === u && oN(a.parentNode) && (a = a.parentNode, u = l.nodeIndex(a), a = a.parentNode), 1 !== a.nodeType) return null;
            if (s === u + 1 && a === e.endContainer) {
                var c = a.childNodes[u];
                if (g(c)) return C(c)
            }
            return null
        }, x = function () {
            s && s.removeAttribute(i), Pr(Rt.fromDom(u.getBody()), "#" + p).each(gn), s = null
        }, S = function () {
            m.hide()
        };
        return xt.ceFalse && function () {
            u.on("mouseup", function (e) {
                var t = r();
                t.collapsed && qy(u, e.clientX, e.clientY) && rC(u, t, !1).each(h)
            }), u.on("click", function (e) {
                var t = iN(u, e.target);
                t && (oN(t) && (e.preventDefault(), u.focus()), rN(t) && l.isChildOf(t, c.getNode()) && x())
            }), u.on("blur NewBlock", x), u.on("ResizeWindow FullscreenStateChanged", m.reposition);
            var a = function (e) {
                var t = Nl(e);
                if (!e.firstChild) return !1;
                var n, r = Is.before(e.firstChild), o = t.next(r);
                return o && !(op(n = o) || ip(n) || ep(n) || tp(n))
            }, i = function (e, t) {
                var n, r, o = l.getParent(e, f), i = l.getParent(t, f);
                return !(!o || e === i || !l.isChildOf(o, i) || !1 !== oN(iN(u, o))) || o && (n = o, r = i, !(l.getParent(n, f) === l.getParent(r, f))) && a(o)
            };
            u.on("tap", function (e) {
                var t = e.target, n = iN(u, t);
                oN(n) ? (e.preventDefault(), nC(u, n).each(w)) : g(t) && nC(u, t).each(w)
            }, !0), u.on("mousedown", function (e) {
                var t, n, r, o = e.target;
                o !== d && "HTML" !== o.nodeName && !l.isChildOf(o, d) || !1 === qy(u, e.clientX, e.clientY) || ((t = iN(u, o)) ? oN(t) ? (e.preventDefault(), nC(u, t).each(w)) : (x(), rN(t) && e.shiftKey || Qf(e.clientX, e.clientY, c.getRng()) || (S(), c.placeCaretAt(e.clientX, e.clientY))) : g(o) ? nC(u, o).each(w) : !1 === jc(o) && (x(), S(), (n = nx(d, e.clientX, e.clientY)) && (i(o, n.node) || (e.preventDefault(), r = v(1, n.node, n.before, !1), u.getBody().focus(), h(r)))))
            }), u.on("keypress", function (e) {
                ed.modifierPressed(e) || oN(c.getNode()) && e.preventDefault()
            }), u.on("GetSelectionRange", function (e) {
                var t = e.range;
                if (s) {
                    if (!s.parentNode) return void (s = null);
                    (t = t.cloneRange()).selectNode(s), e.range = t
                }
            }), u.on("SetSelectionRange", function (e) {
                e.range = b(e.range);
                var t = w(e.range, e.forward);
                t && (e.range = t)
            });
            var n, e, o;
            u.on("AfterSetSelectionRange", function (e) {
                var t, n = e.range, r = n.startContainer.parentNode;
                y(n) || "mcepastebin" === r.id || S(), t = r, l.hasClass(t, "mce-offscreen-selection") || x()
            }), u.on("copy", function (e) {
                var t, n, r = e.clipboardData;
                e.isDefaultPrevented() || !e.clipboardData || xt.ie || (t = (n = l.get(p)) ? n.getElementsByTagName("*")[0] : n) && (e.preventDefault(), r.clearData(), r.setData("text/html", t.outerHTML), r.setData("text/plain", t.outerText || t.innerText))
            }), nN(u), e = Pu(function () {
                var e, t;
                n.removed || !n.getBody().contains(document.activeElement) || (e = n.selection.getRng()).collapsed && (t = oC(n, e, !1), n.selection.setRng(t))
            }, 0), (n = u).on("focus", function () {
                e.throttle()
            }), n.on("blur", function () {
                e.cancel()
            }), (o = u).on("init", function () {
                o.on("focusin", function (e) {
                    var t, n, r = e.target;
                    Wn(r) && (t = Jf(o.getBody(), r), n = qn(t) ? t : r, o.selection.getNode() !== n && nC(o, n).each(function (e) {
                        return o.selection.setRng(e)
                    }))
                })
            })
        }(), {
            showCaret: v, showBlockCaretContainer: function (e) {
                e.hasAttribute("data-mce-caret") && (_o(e), h(r()), c.scrollIntoView(e))
            }, hideFakeCaret: S, destroy: function () {
                m.destroy(), s = null
            }
        }
    }, uN = function (u) {
        var s, n, r, o = _t.each, c = ed.BACKSPACE, l = ed.DELETE, f = u.dom, d = u.selection, e = u.parser,
            t = xt.gecko, i = xt.ie, a = xt.webkit, m = "data:text/mce-internal,", p = i ? "Text" : "URL",
            g = function (e, t) {
                try {
                    u.getDoc().execCommand(e, !1, t)
                } catch (n) {
                }
            }, h = function (e) {
                return e.isDefaultPrevented()
            }, v = function () {
                u.shortcuts.add("meta+a", null, "SelectAll")
            }, y = function () {
                u.on("keydown", function (e) {
                    if (!h(e) && e.keyCode === c && d.isCollapsed() && 0 === d.getRng().startOffset) {
                        var t = d.getNode().previousSibling;
                        if (t && t.nodeName && "table" === t.nodeName.toLowerCase()) return e.preventDefault(), !1
                    }
                })
            }, b = function () {
                u.inline || (u.contentStyles.push("body {min-height: 150px}"), u.on("click", function (e) {
                    var t;
                    if ("HTML" === e.target.nodeName) {
                        if (11 < xt.ie) return void u.getBody().focus();
                        t = u.selection.getRng(), u.getBody().focus(), u.selection.setRng(t), u.selection.normalize(), u.nodeChanged()
                    }
                }))
            }, C = te;
        return u.on("keydown", function (e) {
            var t;
            if (!h(e) && e.keyCode === ed.BACKSPACE) {
                var n = (t = d.getRng()).startContainer, r = t.startOffset, o = f.getRoot(), i = n;
                if (t.collapsed && 0 === r) {
                    for (; i && i.parentNode && i.parentNode.firstChild === i && i.parentNode !== o;) i = i.parentNode;
                    "BLOCKQUOTE" === i.tagName && (u.formatter.toggle("blockquote", null, i), (t = f.createRng()).setStart(n, 0), t.setEnd(n, 0), d.setRng(t))
                }
            }
        }), s = function (e) {
            var t = f.create("body"), n = e.cloneContents();
            return t.appendChild(n), d.serializer.serialize(t, {format: "html"})
        }, u.on("keydown", function (e) {
            var t, n, r, o, i, a = e.keyCode;
            if (!h(e) && (a === l || a === c)) {
                if (t = u.selection.isCollapsed(), n = u.getBody(), t && !f.isEmpty(n)) return;
                if (!t && (r = u.selection.getRng(), o = s(r), (i = f.createRng()).selectNode(u.getBody()), o !== s(i))) return;
                e.preventDefault(), u.setContent(""), n.firstChild && f.isBlock(n.firstChild) ? u.selection.setCursorLocation(n.firstChild, 0) : u.selection.setCursorLocation(n, 0), u.nodeChanged()
            }
        }), xt.windowsPhone || u.on("keyup focusin mouseup", function (e) {
            ed.modifierPressed(e) || d.normalize()
        }, !0), a && (u.inline || f.bind(u.getDoc(), "mousedown mouseup", function (e) {
            var t;
            if (e.target === u.getDoc().documentElement) if (t = d.getRng(), u.getBody().focus(), "mousedown" === e.type) {
                if (Co(t.startContainer)) return;
                d.placeCaretAt(e.clientX, e.clientY)
            } else d.setRng(t)
        }), u.on("click", function (e) {
            var t = e.target;
            /^(IMG|HR)$/.test(t.nodeName) && "false" !== f.getContentEditableParent(t) && (e.preventDefault(), u.selection.select(t), u.nodeChanged()), "A" === t.nodeName && f.hasClass(t, "mce-item-anchor") && (e.preventDefault(), d.select(t))
        }), lc(u) && u.on("init", function () {
            g("DefaultParagraphSeparator", lc(u))
        }), u.on("init", function () {
            u.dom.bind(u.getBody(), "submit", function (e) {
                e.preventDefault()
            })
        }), y(), e.addNodeFilter("br", function (e) {
            for (var t = e.length; t--;) "Apple-interchange-newline" === e[t].attr("class") && e[t].remove()
        }), xt.iOS ? (u.inline || u.on("keydown", function () {
            document.activeElement === document.body && u.getWin().focus()
        }), b(), u.on("click", function (e) {
            var t = e.target;
            do {
                if ("A" === t.tagName) return void e.preventDefault()
            } while (t = t.parentNode)
        }), u.contentStyles.push(".mce-content-body {-webkit-touch-callout: none}")) : v()), 11 <= xt.ie && (b(), y()), xt.ie && (v(), g("AutoUrlDetect", !1), u.on("dragstart", function (e) {
            var t, n, r;
            (t = e).dataTransfer && (u.selection.isCollapsed() && "IMG" === t.target.tagName && d.select(t.target), 0 < (n = u.selection.getContent()).length && (r = m + escape(u.id) + "," + escape(n), t.dataTransfer.setData(p, r)))
        }), u.on("drop", function (e) {
            var t, n, r, o, i, a;
            h(e) || (t = (i = e).dataTransfer && (a = i.dataTransfer.getData(p)) && 0 <= a.indexOf(m) ? (a = a.substr(m.length).split(","), {
                id: unescape(a[0]),
                html: unescape(a[1])
            }) : null) && t.id !== u.id && (e.preventDefault(), n = od(e.x, e.y, u.getDoc()), d.setRng(n), r = t.html, o = !0, u.queryCommandSupported("mceInsertClipboardContent") ? u.execCommand("mceInsertClipboardContent", !1, {
                content: r,
                internal: o
            }) : u.execCommand("mceInsertContent", !1, r))
        })), t && (u.on("keydown", function (e) {
            if (!h(e) && e.keyCode === c) {
                if (!u.getBody().getElementsByTagName("hr").length) return;
                if (d.isCollapsed() && 0 === d.getRng().startOffset) {
                    var t = d.getNode(), n = t.previousSibling;
                    if ("HR" === t.nodeName) return f.remove(t), void e.preventDefault();
                    n && n.nodeName && "hr" === n.nodeName.toLowerCase() && (f.remove(n), e.preventDefault())
                }
            }
        }), Range.prototype.getClientRects || u.on("mousedown", function (e) {
            var t;
            h(e) || "HTML" !== e.target.nodeName || ((t = u.getBody()).blur(), Wr.setEditorTimeout(u, function () {
                t.focus()
            }))
        }), n = function () {
            var e = f.getAttribs(d.getStart().cloneNode(!1));
            return function () {
                var t = d.getStart();
                t !== u.getBody() && (f.setAttrib(t, "style", null), o(e, function (e) {
                    t.setAttributeNode(e.cloneNode(!0))
                }))
            }
        }, r = function () {
            return !d.isCollapsed() && f.getParent(d.getStart(), f.isBlock) !== f.getParent(d.getEnd(), f.isBlock)
        }, u.on("keypress", function (e) {
            var t;
            if (!h(e) && (8 === e.keyCode || 46 === e.keyCode) && r()) return t = n(), u.getDoc().execCommand("delete", !1, null), t(), e.preventDefault(), !1
        }), f.bind(u.getDoc(), "cut", function (e) {
            var t;
            !h(e) && r() && (t = n(), Wr.setEditorTimeout(u, function () {
                t()
            }))
        }), u.getParam("readonly") || u.on("BeforeExecCommand mousedown", function () {
            g("StyleWithCSS", !1), g("enableInlineTableEditing", !1), yc(u) || g("enableObjectResizing", !1)
        }), u.on("SetContent ExecCommand", function (e) {
            "setcontent" !== e.type && "mceInsertLink" !== e.command || o(f.select("a"), function (e) {
                var t = e.parentNode, n = f.getRoot();
                if (t.lastChild === e) {
                    for (; t && !f.isBlock(t);) {
                        if (t.parentNode.lastChild !== t || t === n) return;
                        t = t.parentNode
                    }
                    f.add(t, "br", {"data-mce-bogus": 1})
                }
            })
        }), u.contentStyles.push("img:-moz-broken {-moz-force-broken-image-icon:1;min-width:24px;min-height:24px}"), xt.mac && u.on("keydown", function (e) {
            !ed.metaKeyPressed(e) || e.shiftKey || 37 !== e.keyCode && 39 !== e.keyCode || (e.preventDefault(), u.selection.getSel().modify("move", 37 === e.keyCode ? "backward" : "forward", "lineboundary"))
        }), y()), {
            refreshContentEditable: C, isHidden: function () {
                if (!t || u.removed) return !1;
                var e = u.selection.getSel();
                return !e || !e.rangeCount || 0 === e.rangeCount
            }
        }
    }, sN = xu.DOM, cN = function (e) {
        return pe(e, function (e) {
            return !1 === T(e)
        })
    }, lN = function (e) {
        var t, n = e.settings, r = e.editorUpload.blobCache;
        return cN({
            allow_conditional_comments: n.allow_conditional_comments,
            allow_html_data_urls: n.allow_html_data_urls,
            allow_svg_data_urls: n.allow_svg_data_urls,
            allow_html_in_named_anchor: n.allow_html_in_named_anchor,
            allow_script_urls: n.allow_script_urls,
            allow_unsafe_link_target: n.allow_unsafe_link_target,
            convert_fonts_to_spans: n.convert_fonts_to_spans,
            fix_list_elements: n.fix_list_elements,
            font_size_legacy_values: n.font_size_legacy_values,
            forced_root_block: n.forced_root_block,
            forced_root_block_attrs: n.forced_root_block_attrs,
            padd_empty_with_br: n.padd_empty_with_br,
            preserve_cdata: n.preserve_cdata,
            remove_trailing_brs: n.remove_trailing_brs,
            inline_styles: n.inline_styles,
            root_name: (t = e).inline ? t.getElement().nodeName.toLowerCase() : undefined,
            validate: !0,
            blob_cache: r,
            images_dataimg_filter: n.images_dataimg_filter
        })
    }, fN = function (u) {
        var e = u.dom.getRoot();
        u.inline || zf(u) && u.selection.getStart(!0) !== e || Ll(e).each(function (e) {
            var t, n, r, o, i = e.getNode(), a = Pn(i) ? Ll(i).getOr(e) : e;
            xt.browser.isIE() ? (t = u, n = a.toRange(), r = Rt.fromDom(t.getBody()), o = (Zd(t) ? U.from(n) : U.none()).map(em).filter(Qd(r)), t.bookmark = o.isSome() ? o : t.bookmark) : u.selection.setRng(a.toRange())
        })
    }, dN = function (e) {
        var t;
        e.bindPendingEventDelegates(), e.initialized = !0, e.fire("Init"), e.focus(!0), fN(e), e.nodeChanged({initial: !0}), e.execCallback("init_instance_callback", e), (t = e).settings.auto_focus && Wr.setEditorTimeout(t, function () {
            var e = !0 === t.settings.auto_focus ? t : t.editorManager.get(t.settings.auto_focus);
            e.destroyed || e.focus()
        }, 100)
    }, mN = function (e) {
        return e.inline ? e.ui.styleSheetLoader : e.dom.styleSheetLoader
    }, pN = function (e, t) {
        var n, r, o, i, a = mN(e), u = vc(e), s = function () {
            a.unloadAll(t), e.inline || e.ui.styleSheetLoader.unloadAll(u)
        }, c = function () {
            e.removed ? s() : (e.on("remove", s), dN(e))
        };
        Ir.all((n = e, r = t, o = u, i = [new Ir(function (e, t) {
            return mN(n).loadAll(r, e, t)
        })], n.inline ? i : i.concat([new Ir(function (e, t) {
            return n.ui.styleSheetLoader.loadAll(o, e, t)
        })]))).then(c)["catch"](c)
    }, gN = function (t, e) {
        var n = t.settings, r = t.getDoc(), o = t.getBody();
        n.browser_spellcheck || n.gecko_spellcheck || (r.body.spellcheck = !1, sN.setAttrib(o, "spellcheck", "false")), t.quirks = uN(t), t.fire("PostRender");
        var i, a, u, s, c, l, f = t.getParam("directionality", Ou.isRtl() ? "rtl" : undefined);
        f !== undefined && (o.dir = f), n.protect && t.on("BeforeSetContent", function (t) {
            _t.each(n.protect, function (e) {
                t.content = t.content.replace(e, function (e) {
                    return "\x3c!--mce:protected " + escape(e) + "--\x3e"
                })
            })
        }), t.on("SetContent", function () {
            t.addVisual(t.getBody())
        }), !1 === e && t.load({
            initial: !0,
            format: "html"
        }), t.startContent = t.getContent({format: "raw"}), t.on("compositionstart compositionend", function (e) {
            t.composing = "compositionstart" === e.type
        }), 0 < t.contentStyles.length && (i = "", _t.each(t.contentStyles, function (e) {
            i += e + "\r\n"
        }), t.dom.addStyle(i)), pN(t, t.contentCSS), n.content_style && (a = t, u = n.content_style, s = Rt.fromDom(a.getBody()), c = an(on(s)), l = Rt.fromTag("style"), Yn(l, "type", "text/css"), dn(l, Rt.fromText(u)), dn(c, l), a.on("remove", function () {
            gn(l)
        }))
    }, hN = function (t, e) {
        var n = t.settings, r = t.getElement(), o = t.getDoc();
        n.inline || (t.getElement().style.visibility = t.orgVisibility), e || t.inline || (o.open(), o.write(t.iframeHTML), o.close()), t.inline && (sN.addClass(r, "mce-content-body"), t.contentDocument = o = document, t.contentWindow = window, t.bodyElement = r, t.contentAreaContainer = r);
        var u, i, a, s, c = t.getBody();
        c.disabled = !0, t.readonly = !!n.readonly, t.readonly || (t.inline && "static" === sN.getStyle(c, "position", !0) && (c.style.position = "relative"), c.contentEditable = t.getParam("content_editable_state", !0)), c.disabled = !1, t.editorUpload = mb(t), t.schema = Ci(n), t.dom = xu(o, {
            keep_values: !0,
            url_converter: t.convertURL,
            url_converter_scope: t,
            hex_colors: n.force_hex_style_colors,
            update_styles: !0,
            root_element: t.inline ? t.getBody() : null,
            collect: function () {
                return t.inline
            },
            schema: t.schema,
            contentCssCors: t.getParam("content_css_cors", !1, "boolean"),
            referrerPolicy: pc(t),
            onSetAttrib: function (e) {
                t.fire("SetAttrib", e)
            }
        }), t.parser = ((i = uy(lN(u = t), u.schema)).addAttributeFilter("src,href,style,tabindex", function (e, t) {
            for (var n, r, o = e.length, i = u.dom, a = "data-mce-" + t; o--;) if ((r = (n = e[o]).attr(t)) && !n.attr(a)) {
                if (0 === r.indexOf("data:") || 0 === r.indexOf("blob:")) continue;
                "style" === t ? ((r = i.serializeStyle(i.parseStyle(r), n.name)).length || (r = null), n.attr(a, r), n.attr(t, r)) : "tabindex" === t ? (n.attr(a, r), n.attr(t, null)) : n.attr(a, u.convertURL(r, t, n.name))
            }
        }), i.addNodeFilter("script", function (e) {
            for (var t = e.length; t--;) {
                var n = e[t], r = n.attr("type") || "no/type";
                0 !== r.indexOf("mce-") && n.attr("type", "mce-" + r)
            }
        }), u.settings.preserve_cdata && i.addNodeFilter("#cdata", function (e) {
            for (var t = e.length; t--;) {
                var n = e[t];
                n.type = 8, n.name = "#comment", n.value = "[CDATA[" + u.dom.encode(n.value) + "]]"
            }
        }), i.addNodeFilter("p,h1,h2,h3,h4,h5,h6,div", function (e) {
            for (var t = e.length, n = u.schema.getNonEmptyElements(); t--;) {
                var r = e[t];
                r.isEmpty(n) && 0 === r.getAll("br").length && (r.append(new Am("br", 1)).shortEnded = !0)
            }
        }), i), t.serializer = dy((s = (a = t).settings, _e(_e({}, lN(a)), cN({
            url_converter: s.url_converter,
            url_converter_scope: s.url_converter_scope,
            element_format: s.element_format,
            entities: s.entities,
            entity_encoding: s.entity_encoding,
            indent: s.indent,
            indent_after: s.indent_after,
            indent_before: s.indent_before,
            block_elements: s.block_elements,
            boolean_attributes: s.boolean_attributes,
            custom_elements: s.custom_elements,
            extended_valid_elements: s.extended_valid_elements,
            invalid_elements: s.invalid_elements,
            invalid_styles: s.invalid_styles,
            move_caret_before_on_enter_elements: s.move_caret_before_on_enter_elements,
            non_empty_elements: s.non_empty_elements,
            schema: s.schema,
            self_closing_elements: s.self_closing_elements,
            short_ended_elements: s.short_ended_elements,
            special: s.special,
            text_block_elements: s.text_block_elements,
            text_inline_elements: s.text_inline_elements,
            valid_children: s.valid_children,
            valid_classes: s.valid_classes,
            valid_elements: s.valid_elements,
            valid_styles: s.valid_styles,
            verify_html: s.verify_html,
            whitespace_elements: s.whitespace_elements
        }))), t), t.selection = Hv(t.dom, t.getWin(), t.serializer, t), t.annotator = Yf(t), t.formatter = Cb(t), t.undoManager = xb(t), t._nodeChangeDispatcher = new jS(t), t._selectionOverrides = aN(t), Ew(t), VS(t), Rv(t) || $S(t);
        var l, f, d = Rv(l = t) ? Au(null) : zS(l);
        Sw(t, d), lc(f = t) && f.on("NodeChange", N(_w, f)), _b(t), t.fire("PreInit"), Tv(t).fold(function () {
            gN(t, !1)
        }, function (e) {
            t.setProgressState(!0), e.then(function (e) {
                t.setProgressState(!1), gN(t, e)
            }, function (e) {
                t.notificationManager.open({type: "error", text: String(e)}), gN(t, !0)
            })
        })
    }, vN = xu.DOM, yN = function (e) {
        var t = e.getParam("doctype", "<!DOCTYPE html>") + "<html><head>";
        e.getParam("document_base_url", "") !== e.documentBaseUrl && (t += '<base href="' + e.documentBaseURI.getURI() + '" />'), t += '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />';
        var n = sc(e, "body_id", "tinymce"), r = sc(e, "body_class", "");
        return cc(e) && (t += '<meta http-equiv="Content-Security-Policy" content="' + cc(e) + '" />'), t += '</head><body id="' + n + '" class="mce-content-body ' + r + '" data-id="' + e.id + '"><br></body></html>'
    }, bN = function (e, t) {
        var n, r, o, i, a = e.editorManager.translate("Rich Text Area. Press ALT-0 for help."),
            u = (n = e.id, r = a, t.height, o = e.getParam("iframe_attrs", {}), i = Rt.fromTag("iframe"), Gn(i, o), Gn(i, {
                id: n + "_ifr",
                frameBorder: "0",
                allowTransparency: "true",
                title: r
            }), zu(i, "tox-edit-area__iframe"), i.dom);
        u.onload = function () {
            u.onload = null, e.fire("load")
        };
        var s = function (e, t) {
            if (document.domain !== window.location.hostname && xt.browser.isIE()) {
                var n = cb("mce");
                e[n] = function () {
                    hN(e)
                };
                var r = 'javascript:(function(){document.open();document.domain="' + document.domain + '";var ed = window.parent.tinymce.get("' + e.id + '");document.write(ed.iframeHTML);document.close();ed.' + n + "(true);})()";
                return vN.setAttrib(t, "src", r), !0
            }
            return !1
        }(e, u);
        return e.contentAreaContainer = t.iframeContainer, e.iframeElement = u, e.iframeHTML = yN(e), vN.add(t.iframeContainer, u), s
    }, CN = xu.DOM, wN = function (t, n, e) {
        var r = Ky.get(e), o = Ky.urls[e] || t.documentBaseUrl.replace(/\/$/, "");
        if (e = _t.trim(e), r && -1 === _t.inArray(n, e)) {
            if (_t.each(Ky.dependencies(e), function (e) {
                wN(t, n, e)
            }), t.plugins[e]) return;
            try {
                var i = new r(t, o, t.$);
                (t.plugins[e] = i).init && (i.init(t, o), n.push(e))
            } catch (_k) {
                !function (e, t, n) {
                    var r = Ou.translate(["Failed to initialize plugin: {0}", t]);
                    Zf(e, "PluginLoadError", {message: r}), rb(r, n), Zy(e, r)
                }(t, e, _k)
            }
        }
    }, xN = function (e) {
        return e.replace(/^\-/, "")
    }, SN = function (e) {
        return {editorContainer: e, iframeContainer: e, api: {}}
    }, NN = function (e) {
        var t, n, r = e.getElement();
        return e.inline ? SN(null) : (t = r, n = CN.create("div"), CN.insertAfter(n, t), SN(n))
    }, EN = function (e) {
        var t, n, r, o = e.getElement();
        return e.orgDisplay = o.style.display, K(Cc(e)) ? e.theme.renderUI() : D(Cc(e)) ? (n = (t = e).getElement(), (r = Cc(t)(t, n)).editorContainer.nodeType && (r.editorContainer.id = r.editorContainer.id || t.id + "_parent"), r.iframeContainer && r.iframeContainer.nodeType && (r.iframeContainer.id = r.iframeContainer.id || t.id + "_iframecontainer"), r.height = r.iframeHeight ? r.iframeHeight : n.offsetHeight, r) : NN(e)
    }, kN = function (e) {
        var n, t, r, o, i, a, u, s, c;
        e.fire("ScriptsLoaded"), n = e, t = _t.trim(mc(n)), r = n.ui.registry.getAll().icons, o = _e(_e({}, My.get("default").icons), My.get(t).icons), se(o, function (e, t) {
            ve(r, t) || n.ui.registry.addIcon(t, e)
        }), u = Cc(i = e), K(u) ? (i.settings.theme = xN(u), a = Xy.get(u), i.theme = new a(i, Xy.urls[u]), i.theme.init && i.theme.init(i, Xy.urls[u] || i.documentBaseUrl.replace(/\/$/, ""), i.$)) : i.theme = {}, s = e, c = [], _t.each(xc(s).split(/[ ,]/), function (e) {
            wN(s, c, xN(e))
        });
        var l, f, d, m = EN(e);
        l = e, f = U.from(m.api).getOr({}), d = {
            show: U.from(f.show).getOr(te),
            hide: U.from(f.hide).getOr(te),
            disable: U.from(f.disable).getOr(te),
            isDisabled: U.from(f.isDisabled).getOr(b),
            enable: function () {
                l.mode.isReadOnly() || U.from(f.enable).map(y)
            }
        }, l.ui = _e(_e({}, l.ui), d);
        var p, g, h, v = {editorContainer: m.editorContainer, iframeContainer: m.iframeContainer};
        return e.editorContainer = v.editorContainer ? v.editorContainer : null, ab(e), e.inline ? hN(e) : (h = bN(p = e, g = v), g.editorContainer && (vN.get(g.editorContainer).style.display = p.orgDisplay, p.hidden = vN.isHidden(g.editorContainer)), p.getElement().style.display = "none", vN.setAttrib(p.id, "aria-hidden", "true"), void (h || hN(p)))
    }, _N = xu.DOM, AN = function (e) {
        return "-" === e.charAt(0)
    }, RN = function (e, t) {
        var n, r = gc(t), o = t.getParam("language_url", "", "string");
        !1 === Ou.hasCode(r) && "en" !== r && (n = "" !== o ? o : t.editorManager.baseURL + "/langs/" + r + ".js", e.add(n, te, undefined, function () {
            eb(t, "LanguageLoadError", tb("language", n, r))
        }))
    }, TN = function (t, e, n) {
        return U.from(e).filter(function (e) {
            return 0 < e.length && !My.has(e)
        }).map(function (e) {
            return {url: t.editorManager.baseURL + "/icons/" + e + "/icons" + n + ".js", name: U.some(e)}
        })
    }, DN = function (e, o, t) {
        var n, r = TN(o, "default", t), i = (n = o, U.from(n.getParam("icons_url", "", "string")).filter(function (e) {
            return 0 < e.length
        }).map(function (e) {
            return {url: e, name: U.none()}
        }).orThunk(function () {
            return TN(o, mc(o), "")
        }));
        Y(function (e) {
            for (var t = [], n = function (e) {
                t.push(e)
            }, r = 0; r < e.length; r++) e[r].each(n);
            return t
        }([r, i]), function (r) {
            e.add(r.url, te, undefined, function () {
                var e, t, n;
                e = o, t = r.url, n = r.name.getOrUndefined(), eb(e, "IconsLoadError", tb("icons", t, n))
            })
        })
    }, ON = function (e, t) {
        var n, r, o, i, a, u, s = ku.ScriptLoader;
        n = s, o = t, i = function () {
            var r, o;
            RN(s, e), DN(s, e, t), r = e, o = t, _t.each(r.getParam("external_plugins"), function (e, t) {
                Ky.load(t, e, te, undefined, function () {
                    nb(r, e, t)
                }), r.settings.plugins += " " + t
            }), _t.each(xc(r).split(/[ ,]/), function (e) {
                var t, n;
                (e = _t.trim(e)) && !Ky.urls[e] && (AN(e) ? (e = e.substr(1, e.length), t = Ky.dependencies(e), _t.each(t, function (e) {
                    var t = {prefix: "plugins/", resource: e, suffix: "/plugin" + o + ".js"}, n = Ky.createUrl(t, e);
                    Ky.load(n.resource, n, te, undefined, function () {
                        nb(r, n.prefix + n.resource + n.suffix, n.resource)
                    })
                })) : (n = {
                    prefix: "plugins/",
                    resource: e,
                    suffix: "/plugin" + o + ".js"
                }, Ky.load(e, n, te, undefined, function () {
                    nb(r, n.prefix + n.resource + n.suffix, e)
                })))
            }), s.loadQueue(function () {
                e.removed || kN(e)
            }, e, function () {
                e.removed || kN(e)
            })
        }, u = Cc(r = e), K(u) ? (AN(u) || Xy.urls.hasOwnProperty(u) || ((a = r.getParam("theme_url")) ? Xy.load(u, r.documentBaseURI.toAbsolute(a)) : Xy.load(u, "themes/" + u + "/theme" + o + ".js")), n.loadQueue(function () {
            Xy.waitFor(u, i)
        })) : i()
    }, BN = function (t) {
        var e = t.id;
        Ou.setCode(gc(t));
        var n, r, o, i, a, u = function () {
            _N.unbind(window, "ready", u), t.render()
        };
        Ti.Event.domLoaded ? t.getElement() && xt.contentEditable && (n = Rt.fromDom(t.getElement()), r = $(n.dom.attributes, function (e, t) {
            return e[t.name] = t.value, e
        }, {}), t.on("remove", function () {
            j(n.dom.attributes, function (e) {
                return Zn(n, e.name), 0
            }), Gn(n, r)
        }), t.ui.styleSheetLoader = (o = n, i = t, Xr.forElement(o, {
            contentCssCors: i.getParam("content_css_cors"),
            referrerPolicy: pc(i)
        })), t.getParam("inline") ? t.inline = !0 : (t.orgVisibility = t.getElement().style.visibility, t.getElement().style.visibility = "hidden"), (a = t.getElement().form || _N.getParent(e, "form")) && (t.formElement = a, t.getParam("hidden_input") && !In(t.getElement()) && (_N.insertAfter(_N.create("input", {
            type: "hidden",
            name: e
        }), e), t.hasHiddenInput = !0), t.formEventDelegate = function (e) {
            t.fire(e.type, e)
        }, _N.bind(a, "submit reset", t.formEventDelegate), t.on("reset", function () {
            t.resetContent()
        }), !t.getParam("submit_patch") || a.submit.nodeType || a.submit.length || a._mceOldSubmit || (a._mceOldSubmit = a.submit, a.submit = function () {
            return t.editorManager.triggerSave(), t.setDirty(!1), a._mceOldSubmit(a)
        })), t.windowManager = Jy(t), t.notificationManager = Wy(t), "xml" === t.getParam("encoding") && t.on("GetContent", function (e) {
            e.save && (e.content = _N.encode(e.content))
        }), t.getParam("add_form_submit_trigger") && t.on("submit", function () {
            t.initialized && t.save()
        }), t.getParam("add_unload_trigger") && (t._beforeUnload = function () {
            !t.initialized || t.destroyed || t.isHidden() || t.save({format: "raw", no_events: !0, set_dirty: !1})
        }, t.editorManager.on("BeforeUnload", t._beforeUnload)), t.editorManager.add(t), ON(t, t.suffix)) : _N.bind(window, "ready", u)
    }, PN = function (e, t) {
        return n = t, Ov(e).editor.addVisual(n);
        var n
    }, LN = {"font-size": "size", "font-family": "face"}, IN = function (n, t, e) {
        return Xg(Rt.fromDom(e), function (e) {
            return rr(t = e, n).orThunk(function () {
                return "font" === It(t) ? he(LN, n).bind(function (e) {
                    return Qn(t, e)
                }) : U.none()
            });
            var t
        }, function (e) {
            return Bt(Rt.fromDom(t), e)
        })
    }, MN = function (o) {
        return function (r, e) {
            return U.from(e).map(Rt.fromDom).filter(Ut).bind(function (e) {
                return IN(o, r, e.dom).or((t = o, n = e.dom, U.from(xu.DOM.getStyle(n, t, !0))));
                var t, n
            }).getOr("")
        }
    }, FN = MN("font-size"), UN = a(function (e) {
        return e.replace(/[\'\"\\]/g, "").replace(/,\s+/g, ",")
    }, MN("font-family")), zN = function (e) {
        return Ll(e.getBody()).map(function (e) {
            var t = e.container();
            return Mn(t) ? t.parentNode : t
        })
    }, jN = function (e, t) {
        return n = e, U.from(n.selection.getRng()).bind(function (e) {
            var t = n.getBody();
            return e.startContainer === t && 0 === e.startOffset ? U.none() : U.from(n.selection.getStart(!0))
        }).orThunk(N(zN, e)).map(Rt.fromDom).filter(Ut).map(t);
        var n
    }, HN = function (e, t) {
        if (/^[0-9.]+$/.test(t)) {
            var n = parseInt(t, 10);
            if (1 <= n && n <= 7) {
                var r = (a = e, _t.explode(a.getParam("font_size_style_values", "xx-small,x-small,small,medium,large,x-large,xx-large"))),
                    o = (i = e, _t.explode(i.getParam("font_size_classes", "")));
                return o ? o[n - 1] || t : r[n - 1] || t
            }
            return t
        }
        return t;
        var i, a
    }, VN = function (e, t) {
        var n, r = HN(e, t);
        e.formatter.toggle("fontname", {
            value: (n = r.split(/\s*,\s*/), z(n, function (e) {
                return -1 === e.indexOf(" ") || qe(e, '"') || qe(e, "'") ? e : "'" + e + "'"
            }).join(","))
        }), e.nodeChanged()
    }, qN = function (e, t) {
        var n, r, o, i, a = "string" != typeof (n = t) ? (r = _t.extend({
            paste: n.paste,
            data: {paste: n.paste}
        }, n), {content: n.content, details: r}) : {content: n, details: {}};
        o = a.content, i = a.details, Dv(e).editor.insertContent(o, i)
    }, $N = _t.each, WN = _t.map, KN = _t.inArray, XN = (YN.prototype.execCommand = function (t, n, r, e) {
        var o, i, a = !1, u = this;
        if (!u.editor.removed) {
            if (/^(mceAddUndoLevel|mceEndUndoLevel|mceBeginUndoLevel|mceRepaint)$/.test(t) || e && e.skip_focus ? (i = u.editor, om(i).each(function (e) {
                return i.selection.setRng(e)
            })) : u.editor.focus(), (e = u.editor.fire("BeforeExecCommand", {
                command: t,
                ui: n,
                value: r
            })).isDefaultPrevented()) return !1;
            var s = t.toLowerCase();
            if (o = u.commands.exec[s]) return o(s, n, r), u.editor.fire("ExecCommand", {
                command: t,
                ui: n,
                value: r
            }), !0;
            if ($N(this.editor.plugins, function (e) {
                if (e.execCommand && e.execCommand(t, n, r)) return u.editor.fire("ExecCommand", {
                    command: t,
                    ui: n,
                    value: r
                }), !(a = !0)
            }), a) return a;
            if (u.editor.theme && u.editor.theme.execCommand && u.editor.theme.execCommand(t, n, r)) return u.editor.fire("ExecCommand", {
                command: t,
                ui: n,
                value: r
            }), !0;
            try {
                a = u.editor.getDoc().execCommand(t, n, r)
            } catch (c) {
            }
            return !!a && (u.editor.fire("ExecCommand", {command: t, ui: n, value: r}), !0)
        }
    }, YN.prototype.queryCommandState = function (e) {
        var t;
        if (!this.editor.quirks.isHidden() && !this.editor.removed) {
            if (e = e.toLowerCase(), t = this.commands.state[e]) return t(e);
            try {
                return this.editor.getDoc().queryCommandState(e)
            } catch (n) {
            }
            return !1
        }
    }, YN.prototype.queryCommandValue = function (e) {
        var t;
        if (!this.editor.quirks.isHidden() && !this.editor.removed) {
            if (e = e.toLowerCase(), t = this.commands.value[e]) return t(e);
            try {
                return this.editor.getDoc().queryCommandValue(e)
            } catch (n) {
            }
        }
    }, YN.prototype.addCommands = function (e, n) {
        void 0 === n && (n = "exec");
        var r = this;
        $N(e, function (t, e) {
            $N(e.toLowerCase().split(","), function (e) {
                r.commands[n][e] = t
            })
        })
    }, YN.prototype.addCommand = function (e, o, i) {
        var a = this;
        e = e.toLowerCase(), this.commands.exec[e] = function (e, t, n, r) {
            return o.call(i || a.editor, t, n, r)
        }
    }, YN.prototype.queryCommandSupported = function (e) {
        if (e = e.toLowerCase(), this.commands.exec[e]) return !0;
        try {
            return this.editor.getDoc().queryCommandSupported(e)
        } catch (t) {
        }
        return !1
    }, YN.prototype.addQueryStateHandler = function (e, t, n) {
        var r = this;
        e = e.toLowerCase(), this.commands.state[e] = function () {
            return t.call(n || r.editor)
        }
    }, YN.prototype.addQueryValueHandler = function (e, t, n) {
        var r = this;
        e = e.toLowerCase(), this.commands.value[e] = function () {
            return t.call(n || r.editor)
        }
    }, YN.prototype.hasCustomCommand = function (e) {
        return e = e.toLowerCase(), !!this.commands.exec[e]
    }, YN.prototype.execNativeCommand = function (e, t, n) {
        return t === undefined && (t = !1), n === undefined && (n = null), this.editor.getDoc().execCommand(e, t, n)
    }, YN.prototype.isFormatMatch = function (e) {
        return this.editor.formatter.match(e)
    }, YN.prototype.toggleFormat = function (e, t) {
        this.editor.formatter.toggle(e, t ? {value: t} : undefined), this.editor.nodeChanged()
    }, YN.prototype.storeSelection = function (e) {
        this.selectionBookmark = this.editor.selection.getBookmark(e)
    }, YN.prototype.restoreSelection = function () {
        this.editor.selection.moveToBookmark(this.selectionBookmark)
    }, YN.prototype.setupCommands = function (i) {
        var a = this;
        this.addCommands({
            "mceResetDesignMode,mceBeginUndoLevel": te, "mceEndUndoLevel,mceAddUndoLevel": function () {
                i.undoManager.add()
            }, "Cut,Copy,Paste": function (e) {
                var t, n, r = i.getDoc();
                try {
                    a.execNativeCommand(e)
                } catch (o) {
                    t = !0
                }
                "paste" !== e || r.queryCommandEnabled(e) || (t = !0), !t && r.queryCommandSupported(e) || (n = i.translate("Your browser doesn't support direct access to the clipboard. Please use the Ctrl+X/C/V keyboard shortcuts instead."), xt.mac && (n = n.replace(/Ctrl\+/g, "\u2318+")), i.notificationManager.open({
                    text: n,
                    type: "error"
                }))
            }, unlink: function () {
                var e;
                i.selection.isCollapsed() ? (e = i.dom.getParent(i.selection.getStart(), "a")) && i.dom.remove(e, !0) : i.formatter.remove("link")
            }, "JustifyLeft,JustifyCenter,JustifyRight,JustifyFull,JustifyNone": function (e) {
                var t = e.substring(7);
                "full" === t && (t = "justify"), $N("left,center,right,justify".split(","), function (e) {
                    t !== e && i.formatter.remove("align" + e)
                }), "none" !== t && a.toggleFormat("align" + t)
            }, "InsertUnorderedList,InsertOrderedList": function (e) {
                var t;
                a.execNativeCommand(e);
                var n = i.dom.getParent(i.selection.getNode(), "ol,ul");
                n && (t = n.parentNode, /^(H[1-6]|P|ADDRESS|PRE)$/.test(t.nodeName) && (a.storeSelection(), i.dom.split(t, n), a.restoreSelection()))
            }, "Bold,Italic,Underline,Strikethrough,Superscript,Subscript": function (e) {
                a.toggleFormat(e)
            }, "ForeColor,HiliteColor": function (e, t, n) {
                a.toggleFormat(e, n)
            }, FontName: function (e, t, n) {
                VN(i, n)
            }, FontSize: function (e, t, n) {
                var r, o;
                o = n, (r = i).formatter.toggle("fontsize", {value: HN(r, o)}), r.nodeChanged()
            }, LineHeight: function (e, t, n) {
                var r, o;
                o = n, (r = i).undoManager.transact(function () {
                    r.formatter.toggle("lineheight", {value: String(o)}), r.nodeChanged()
                })
            }, RemoveFormat: function (e) {
                i.formatter.remove(e)
            }, mceBlockQuote: function () {
                a.toggleFormat("blockquote")
            }, FormatBlock: function (e, t, n) {
                return a.toggleFormat(n || "p")
            }, mceCleanup: function () {
                var e = i.selection.getBookmark();
                i.setContent(i.getContent()), i.selection.moveToBookmark(e)
            }, mceRemoveNode: function (e, t, n) {
                var r = n || i.selection.getNode();
                r !== i.getBody() && (a.storeSelection(), i.dom.remove(r, !0), a.restoreSelection())
            }, mceSelectNodeDepth: function (e, t, n) {
                var r = 0;
                i.dom.getParent(i.selection.getNode(), function (e) {
                    if (1 === e.nodeType && r++ === n) return i.selection.select(e), !1
                }, i.getBody())
            }, mceSelectNode: function (e, t, n) {
                i.selection.select(n)
            }, mceInsertContent: function (e, t, n) {
                qN(i, n)
            }, mceInsertRawHTML: function (e, t, n) {
                i.selection.setContent("tiny_mce_marker");
                var r = i.getContent();
                i.setContent(r.replace(/tiny_mce_marker/g, function () {
                    return n
                }))
            }, mceInsertNewLine: function (e, t, n) {
                RS(i, n)
            }, mceToggleFormat: function (e, t, n) {
                a.toggleFormat(n)
            }, mceSetContent: function (e, t, n) {
                i.setContent(n)
            }, "Indent,Outdent": function (e) {
                Cw(i, e)
            }, mceRepaint: te, InsertHorizontalRule: function () {
                i.execCommand("mceInsertContent", !1, "<hr />")
            }, mceToggleVisualAid: function () {
                i.hasVisual = !i.hasVisual, i.addVisual()
            }, mceReplaceContent: function (e, t, n) {
                i.execCommand("mceInsertContent", !1, n.replace(/\{\$selection\}/g, i.selection.getContent({format: "text"})))
            }, mceInsertLink: function (e, t, n) {
                "string" == typeof n && (n = {href: n});
                var r = i.dom.getParent(i.selection.getNode(), "a");
                n.href = n.href.replace(/ /g, "%20"), r && n.href || i.formatter.remove("link"), n.href && i.formatter.apply("link", n, r)
            }, selectAll: function () {
                var e, t = i.dom.getParent(i.selection.getStart(), Vn);
                t && ((e = i.dom.createRng()).selectNodeContents(t), i.selection.setRng(e))
            }, mceNewDocument: function () {
                i.setContent("")
            }, InsertLineBreak: function (e, t, n) {
                return gS(i, n), !0
            }
        });
        var e = function (r) {
            return function () {
                var e = i.selection,
                    t = e.isCollapsed() ? [i.dom.getParent(e.getNode(), i.dom.isBlock)] : e.getSelectedBlocks(),
                    n = WN(t, function (e) {
                        return !!i.formatter.matchNode(e, r)
                    });
                return -1 !== KN(n, !0)
            }
        };
        a.addCommands({
            JustifyLeft: e("alignleft"),
            JustifyCenter: e("aligncenter"),
            JustifyRight: e("alignright"),
            JustifyFull: e("alignjustify"),
            "Bold,Italic,Underline,Strikethrough,Superscript,Subscript": function (e) {
                return a.isFormatMatch(e)
            },
            mceBlockQuote: function () {
                return a.isFormatMatch("blockquote")
            },
            Outdent: function () {
                return vw(i)
            },
            "InsertUnorderedList,InsertOrderedList": function (e) {
                var t = i.dom.getParent(i.selection.getNode(), "ul,ol");
                return t && ("insertunorderedlist" === e && "UL" === t.tagName || "insertorderedlist" === e && "OL" === t.tagName)
            }
        }, "state"), a.addCommands({
            Undo: function () {
                i.undoManager.undo()
            }, Redo: function () {
                i.undoManager.redo()
            }
        }), a.addQueryValueHandler("FontName", function () {
            return jN(t = i, function (e) {
                return UN(t.getBody(), e.dom)
            }).getOr("");
            var t
        }, this), a.addQueryValueHandler("FontSize", function () {
            return jN(t = i, function (e) {
                return FN(t.getBody(), e.dom)
            }).getOr("");
            var t
        }, this), a.addQueryValueHandler("LineHeight", function () {
            return jN(t = i, function (n) {
                var e = Rt.fromDom(t.getBody());
                return Xg(n, function (e) {
                    return rr(e, "line-height")
                }, N(Bt, e)).getOrThunk(function () {
                    var e = parseFloat(tr(n, "line-height")), t = parseFloat(tr(n, "font-size"));
                    return String(e / t)
                })
            }).getOr("");
            var t
        }, this)
    }, YN);

    function YN(e) {
        this.commands = {state: {}, exec: {}, value: {}}, this.editor = e, this.setupCommands(e)
    }

    var GN = "data-mce-contenteditable", JN = function (e, t, n) {
            var r, o;
            Hu(e, t) && !1 === n ? (o = t, Mu(r = e) ? r.dom.classList.remove(o) : Uu(r, o), ju(r)) : n && zu(e, t)
        }, QN = function (e, t, n) {
            try {
                e.getDoc().execCommand(t, !1, String(n))
            } catch (r) {
            }
        }, ZN = function (e, t) {
            e.dom.contentEditable = t ? "true" : "false"
        }, eE = function (e, t) {
            var n, r, o, i = Rt.fromDom(e.getBody());
            JN(i, "mce-content-readonly", t), t ? (e.selection.controlSelection.hideResizeRect(), e._selectionOverrides.hideFakeCaret(), o = e, U.from(o.selection.getNode()).each(function (e) {
                e.removeAttribute("data-mce-selected")
            }), e.readonly = !0, ZN(i, !1), Y(qu(i, '*[contenteditable="true"]'), function (e) {
                Yn(e, GN, "true"), ZN(e, !1)
            })) : (e.readonly = !1, ZN(i, !0), Y(qu(i, "*[" + GN + '="true"]'), function (e) {
                Zn(e, GN), ZN(e, !0)
            }), QN(e, "StyleWithCSS", !1), QN(e, "enableInlineTableEditing", !1), QN(e, "enableObjectResizing", !1), (vm(r = e) || hm(r)) && e.focus(), (n = e).selection.setRng(n.selection.getRng()), e.nodeChanged())
        }, tE = function (e) {
            return e.readonly
        }, nE = function (t) {
            t.parser.addAttributeFilter("contenteditable", function (e) {
                tE(t) && Y(e, function (e) {
                    e.attr(GN, e.attr("contenteditable")), e.attr("contenteditable", "false")
                })
            }), t.serializer.addAttributeFilter(GN, function (e) {
                tE(t) && Y(e, function (e) {
                    e.attr("contenteditable", e.attr(GN))
                })
            }), t.serializer.addTempAttr(GN)
        }, rE = function (a, u) {
            var e, t;
            "click" !== u.type || ed.metaKeyPressed(u) || (e = Rt.fromDom(u.target), t = a, Lr(e, "a", function (e) {
                return Bt(e, Rt.fromDom(t.getBody()))
            }).bind(function (e) {
                return Qn(e, "href")
            }).each(function (e) {
                var t, n, r, o, i;
                u.preventDefault(), /^#/.test(e) ? (t = a.dom.select(e + ',[name="' + (qe(n = e, r = "#") ? (o = n, i = r.length, o.substring(i)) : n) + '"]')).length && a.selection.scrollIntoView(t[0], !0) : window.open(e, "_blank", "rel=noopener noreferrer,menubar=yes,toolbar=yes,location=yes,status=yes,resizable=yes,scrollbars=yes")
            }))
        },
        oE = _t.makeMap("focus blur focusin focusout click dblclick mousedown mouseup mousemove mouseover beforepaste paste cut copy selectionchange mouseout mouseenter mouseleave wheel keydown keypress keyup input beforeinput contextmenu dragstart dragend dragover draggesture dragdrop drop drag submit compositionstart compositionend compositionupdate touchstart touchmove touchend touchcancel", " "),
        iE = (aE.isNative = function (e) {
            return !!oE[e.toLowerCase()]
        }, aE.prototype.fire = function (e, t) {
            var n = e.toLowerCase(), r = t || {};
            r.type = n, r.target || (r.target = this.scope), r.preventDefault || (r.preventDefault = function () {
                r.isDefaultPrevented = w
            }, r.stopPropagation = function () {
                r.isPropagationStopped = w
            }, r.stopImmediatePropagation = function () {
                r.isImmediatePropagationStopped = w
            }, r.isDefaultPrevented = b, r.isPropagationStopped = b, r.isImmediatePropagationStopped = b), this.settings.beforeFire && this.settings.beforeFire(r);
            var o = this.bindings[n];
            if (o) for (var i = 0, a = o.length; i < a; i++) {
                var u = o[i];
                if (u.once && this.off(n, u.func), r.isImmediatePropagationStopped()) return r.stopPropagation(), r;
                if (!1 === u.func.call(this.scope, r)) return r.preventDefault(), r
            }
            return r
        }, aE.prototype.on = function (e, t, n, r) {
            if (!1 === t && (t = b), t) {
                var o = {func: t};
                r && _t.extend(o, r);
                for (var i = e.toLowerCase().split(" "), a = i.length; a--;) {
                    var u = i[a], s = this.bindings[u];
                    s || (s = this.bindings[u] = [], this.toggleEvent(u, !0)), n ? s.unshift(o) : s.push(o)
                }
            }
            return this
        }, aE.prototype.off = function (e, t) {
            var n = this;
            if (e) for (var r = e.toLowerCase().split(" "), o = r.length; o--;) {
                var i = r[o], a = this.bindings[i];
                if (!i) return se(this.bindings, function (e, t) {
                    n.toggleEvent(t, !1), delete n.bindings[t]
                }), this;
                if (a) {
                    if (t) for (var u = a.length; u--;) a[u].func === t && (a = a.slice(0, u).concat(a.slice(u + 1)), this.bindings[i] = a); else a.length = 0;
                    a.length || (this.toggleEvent(e, !1), delete this.bindings[i])
                }
            } else se(this.bindings, function (e, t) {
                n.toggleEvent(t, !1)
            }), this.bindings = {};
            return this
        }, aE.prototype.once = function (e, t, n) {
            return this.on(e, t, n, {once: !0})
        }, aE.prototype.has = function (e) {
            return e = e.toLowerCase(), !(!this.bindings[e] || 0 === this.bindings[e].length)
        }, aE);

    function aE(e) {
        this.bindings = {}, this.settings = e || {}, this.scope = this.settings.scope || this, this.toggleEvent = this.settings.toggleEvent || b
    }

    var uE, sE = function (n) {
        return n._eventDispatcher || (n._eventDispatcher = new iE({
            scope: n, toggleEvent: function (e, t) {
                iE.isNative(e) && n.toggleNativeEvent && n.toggleNativeEvent(e, t)
            }
        })), n._eventDispatcher
    }, cE = {
        fire: function (e, t, n) {
            if (this.removed && "remove" !== e && "detach" !== e) return t;
            var r = sE(this).fire(e, t);
            if (!1 !== n && this.parent) for (var o = this.parent(); o && !r.isPropagationStopped();) o.fire(e, r, !1), o = o.parent();
            return r
        }, on: function (e, t, n) {
            return sE(this).on(e, t, n)
        }, off: function (e, t) {
            return sE(this).off(e, t)
        }, once: function (e, t) {
            return sE(this).once(e, t)
        }, hasEventListeners: function (e) {
            return sE(this).has(e)
        }
    }, lE = xu.DOM, fE = function (e, t) {
        if ("selectionchange" === t) return e.getDoc();
        if (!e.inline && /^mouse|touch|click|contextmenu|drop|dragover|dragend/.test(t)) return e.getDoc().documentElement;
        var n = bc(e);
        return n ? (e.eventRoot || (e.eventRoot = lE.select(n)[0]), e.eventRoot) : e.getBody()
    }, dE = function (e, t, n) {
        var r;
        (r = e).hidden || tE(r) ? tE(e) && rE(e, n) : e.fire(t, n)
    }, mE = function (i, a) {
        var e;
        if (i.delegates || (i.delegates = {}), !i.delegates[a] && !i.removed) {
            var t = fE(i, a);
            if (bc(i)) {
                if (uE || (uE = {}, i.editorManager.on("removeEditor", function () {
                    i.editorManager.activeEditor || uE && (se(uE, function (e, t) {
                        i.dom.unbind(fE(i, t))
                    }), uE = null)
                })), uE[a]) return;
                e = function (e) {
                    for (var t = e.target, n = i.editorManager.get(), r = n.length; r--;) {
                        var o = n[r].getBody();
                        o !== t && !lE.isChildOf(t, o) || dE(n[r], a, e)
                    }
                }, uE[a] = e, lE.bind(t, a, e)
            } else e = function (e) {
                dE(i, a, e)
            }, lE.bind(t, a, e), i.delegates[a] = e
        }
    }, pE = _e(_e({}, cE), {
        bindPendingEventDelegates: function () {
            var t = this;
            _t.each(t._pendingNativeEvents, function (e) {
                mE(t, e)
            })
        }, toggleNativeEvent: function (e, t) {
            var n = this;
            "focus" !== e && "blur" !== e && (t ? n.initialized ? mE(n, e) : n._pendingNativeEvents ? n._pendingNativeEvents.push(e) : n._pendingNativeEvents = [e] : n.initialized && (n.dom.unbind(fE(n, e), e, n.delegates[e]), delete n.delegates[e]))
        }, unbindAllNativeEvents: function () {
            var n = this, e = n.getBody(), t = n.dom;
            n.delegates && (se(n.delegates, function (e, t) {
                n.dom.unbind(fE(n, t), t, e)
            }), delete n.delegates), !n.inline && e && t && (e.onload = null, t.unbind(n.getWin()), t.unbind(n.getDoc())), t && (t.unbind(e), t.unbind(n.getContainer()))
        }
    }), gE = ["design", "readonly"], hE = function (e, t, n, r) {
        var o, i = n[t.get()], a = n[r];
        try {
            a.activate()
        } catch (_k) {
            return void console.error("problem while activating editor mode " + r + ":", _k)
        }
        i.deactivate(), i.editorReadOnly !== a.editorReadOnly && eE(e, a.editorReadOnly), t.set(r), o = r, e.fire("SwitchMode", {mode: o})
    }, vE = function (t) {
        var e, n, r = Au("design"), o = Au({
            design: {activate: te, deactivate: te, editorReadOnly: !1},
            readonly: {activate: te, deactivate: te, editorReadOnly: !0}
        });
        return (e = t).serializer ? nE(e) : e.on("PreInit", function () {
            nE(e)
        }), (n = t).on("ShowCaret", function (e) {
            tE(n) && e.preventDefault()
        }), n.on("ObjectSelected", function (e) {
            tE(n) && e.preventDefault()
        }), {
            isReadOnly: function () {
                return tE(t)
            }, set: function (e) {
                return function (e, t, n, r) {
                    if (r !== n.get()) {
                        if (!ve(t, r)) throw new Error("Editor mode '" + r + "' is invalid");
                        e.initialized ? hE(e, n, t, r) : e.on("init", function () {
                            return hE(e, n, t, r)
                        })
                    }
                }(t, o.get(), r, e)
            }, get: function () {
                return r.get()
            }, register: function (e, t) {
                o.set(function (e, t, n) {
                    var r;
                    if (M(gE, t)) throw new Error("Cannot override default mode " + t);
                    return _e(_e({}, e), ((r = {})[t] = _e(_e({}, n), {
                        deactivate: function () {
                            try {
                                n.deactivate()
                            } catch (_k) {
                                console.error("problem while deactivating editor mode " + t + ":", _k)
                            }
                        }
                    }), r))
                }(o.get(), e, t))
            }
        }
    }, yE = _t.each, bE = _t.explode, CE = {
        f1: 112,
        f2: 113,
        f3: 114,
        f4: 115,
        f5: 116,
        f6: 117,
        f7: 118,
        f8: 119,
        f9: 120,
        f10: 121,
        f11: 122,
        f12: 123
    }, wE = _t.makeMap("alt,ctrl,shift,meta,access"), xE = function (e) {
        var t, n = {};
        yE(bE(e.toLowerCase(), "+"), function (e) {
            e in wE ? n[e] = !0 : /^[0-9]{2,}$/.test(e) ? n.keyCode = parseInt(e, 10) : (n.charCode = e.charCodeAt(0), n.keyCode = CE[e] || e.toUpperCase().charCodeAt(0))
        });
        var r = [n.keyCode];
        for (t in wE) n[t] ? r.push(t) : n[t] = !1;
        return n.id = r.join(","), n.access && (n.alt = !0, xt.mac ? n.ctrl = !0 : n.shift = !0), n.meta && (xt.mac ? n.meta = !0 : (n.ctrl = !0, n.meta = !1)), n
    }, SE = (NE.prototype.add = function (e, n, t, r) {
        var o = this, i = o.normalizeCommandFunc(t);
        return yE(bE(_t.trim(e)), function (e) {
            var t = o.createShortcut(e, n, i, r);
            o.shortcuts[t.id] = t
        }), !0
    }, NE.prototype.remove = function (e) {
        var t = this.createShortcut(e);
        return !!this.shortcuts[t.id] && (delete this.shortcuts[t.id], !0)
    }, NE.prototype.normalizeCommandFunc = function (e) {
        var t = this, n = e;
        return "string" == typeof n ? function () {
            t.editor.execCommand(n, !1, null)
        } : _t.isArray(n) ? function () {
            t.editor.execCommand(n[0], n[1], n[2])
        } : n
    }, NE.prototype.createShortcut = function (e, t, n, r) {
        var o = _t.map(bE(e, ">"), xE);
        return o[o.length - 1] = _t.extend(o[o.length - 1], {
            func: n,
            scope: r || this.editor
        }), _t.extend(o[0], {desc: this.editor.translate(t), subpatterns: o.slice(1)})
    }, NE.prototype.hasModifier = function (e) {
        return e.altKey || e.ctrlKey || e.metaKey
    }, NE.prototype.isFunctionKey = function (e) {
        return "keydown" === e.type && 112 <= e.keyCode && e.keyCode <= 123
    }, NE.prototype.matchShortcut = function (e, t) {
        return !!t && t.ctrl === e.ctrlKey && t.meta === e.metaKey && t.alt === e.altKey && t.shift === e.shiftKey && !!(e.keyCode === t.keyCode || e.charCode && e.charCode === t.charCode) && (e.preventDefault(), !0)
    }, NE.prototype.executeShortcutAction = function (e) {
        return e.func ? e.func.call(e.scope) : null
    }, NE);

    function NE(e) {
        this.shortcuts = {}, this.pendingPatterns = [], this.editor = e;
        var n = this;
        e.on("keyup keypress keydown", function (t) {
            !n.hasModifier(t) && !n.isFunctionKey(t) || t.isDefaultPrevented() || (yE(n.shortcuts, function (e) {
                if (n.matchShortcut(t, e)) return n.pendingPatterns = e.subpatterns.slice(0), "keydown" === t.type && n.executeShortcutAction(e), !0
            }), n.matchShortcut(t, n.pendingPatterns[0]) && (1 === n.pendingPatterns.length && "keydown" === t.type && n.executeShortcutAction(n.pendingPatterns[0]), n.pendingPatterns.shift()))
        })
    }

    var EE = function () {
            var e, t, n, r, o, i, a, u, s = (t = {}, n = {}, r = {}, o = {}, i = {}, a = {}, {
                addButton: (u = function (n, r) {
                    return function (e, t) {
                        return n[e.toLowerCase()] = _e(_e({}, t), {type: r})
                    }
                })(e = {}, "button"),
                addGroupToolbarButton: u(e, "grouptoolbarbutton"),
                addToggleButton: u(e, "togglebutton"),
                addMenuButton: u(e, "menubutton"),
                addSplitButton: u(e, "splitbutton"),
                addMenuItem: u(t, "menuitem"),
                addNestedMenuItem: u(t, "nestedmenuitem"),
                addToggleMenuItem: u(t, "togglemenuitem"),
                addAutocompleter: u(n, "autocompleter"),
                addContextMenu: u(o, "contextmenu"),
                addContextToolbar: u(i, "contexttoolbar"),
                addContextForm: u(i, "contextform"),
                addSidebar: u(a, "sidebar"),
                addIcon: function (e, t) {
                    return r[e.toLowerCase()] = t
                },
                getAll: function () {
                    return {
                        buttons: e,
                        menuItems: t,
                        icons: r,
                        popups: n,
                        contextMenus: o,
                        contextToolbars: i,
                        sidebars: a
                    }
                }
            });
            return {
                addAutocompleter: s.addAutocompleter,
                addButton: s.addButton,
                addContextForm: s.addContextForm,
                addContextMenu: s.addContextMenu,
                addContextToolbar: s.addContextToolbar,
                addIcon: s.addIcon,
                addMenuButton: s.addMenuButton,
                addMenuItem: s.addMenuItem,
                addNestedMenuItem: s.addNestedMenuItem,
                addSidebar: s.addSidebar,
                addSplitButton: s.addSplitButton,
                addToggleButton: s.addToggleButton,
                addGroupToolbarButton: s.addGroupToolbarButton,
                addToggleMenuItem: s.addToggleMenuItem,
                getAll: s.getAll
            }
        }, kE = _t.each, _E = _t.trim,
        AE = "source protocol authority userInfo user password host port relative path directory file query anchor".split(" "),
        RE = {ftp: 21, http: 80, https: 443, mailto: 25}, TE = (DE.parseDataUri = function (e) {
            var t, n = decodeURIComponent(e).split(","), r = /data:([^;]+)/.exec(n[0]);
            return r && (t = r[1]), {type: t, data: n[1]}
        }, DE.getDocumentBaseUrl = function (e) {
            var t = 0 !== e.protocol.indexOf("http") && "file:" !== e.protocol ? e.href : e.protocol + "//" + e.host + e.pathname;
            return /^[^:]+:\/\/\/?[^\/]+\//.test(t) && (t = t.replace(/[\?#].*$/, "").replace(/[\/\\][^\/]+$/, ""), /[\/\\]$/.test(t) || (t += "/")), t
        }, DE.prototype.setPath = function (e) {
            var t = /^(.*?)\/?(\w+)?$/.exec(e);
            this.path = t[0], this.directory = t[1], this.file = t[2], this.source = "", this.getURI()
        }, DE.prototype.toRelative = function (e) {
            var t;
            if ("./" === e) return e;
            var n = new DE(e, {base_uri: this});
            if ("mce_host" !== n.host && this.host !== n.host && n.host || this.port !== n.port || this.protocol !== n.protocol && "" !== n.protocol) return n.getURI();
            var r = this.getURI(), o = n.getURI();
            return r === o || "/" === r.charAt(r.length - 1) && r.substr(0, r.length - 1) === o ? r : (t = this.toRelPath(this.path, n.path), n.query && (t += "?" + n.query), n.anchor && (t += "#" + n.anchor), t)
        }, DE.prototype.toAbsolute = function (e, t) {
            var n = new DE(e, {base_uri: this});
            return n.getURI(t && this.isSameOrigin(n))
        }, DE.prototype.isSameOrigin = function (e) {
            if (this.host == e.host && this.protocol == e.protocol) {
                if (this.port == e.port) return !0;
                var t = RE[this.protocol];
                if (t && (this.port || t) == (e.port || t)) return !0
            }
            return !1
        }, DE.prototype.toRelPath = function (e, t) {
            var n, r, o = 0, i = "", a = e.substring(0, e.lastIndexOf("/")).split("/"), u = t.split("/");
            if (a.length >= u.length) for (n = 0, r = a.length; n < r; n++) if (n >= u.length || a[n] !== u[n]) {
                o = n + 1;
                break
            }
            if (a.length < u.length) for (n = 0, r = u.length; n < r; n++) if (n >= a.length || a[n] !== u[n]) {
                o = n + 1;
                break
            }
            if (1 === o) return t;
            for (n = 0, r = a.length - (o - 1); n < r; n++) i += "../";
            for (n = o - 1, r = u.length; n < r; n++) i += n !== o - 1 ? "/" + u[n] : u[n];
            return i
        }, DE.prototype.toAbsPath = function (e, t) {
            var n, r, o = 0, i = [], a = /\/$/.test(t) ? "/" : "", u = e.split("/"), s = t.split("/");
            for (kE(u, function (e) {
                e && i.push(e)
            }), u = i, n = s.length - 1, i = []; 0 <= n; n--) 0 !== s[n].length && "." !== s[n] && (".." !== s[n] ? 0 < o ? o-- : i.push(s[n]) : o++);
            return 0 !== (r = (n = u.length - o) <= 0 ? Z(i).join("/") : u.slice(0, n).join("/") + "/" + Z(i).join("/")).indexOf("/") && (r = "/" + r), a && r.lastIndexOf("/") !== r.length - 1 && (r += a), r
        }, DE.prototype.getURI = function (e) {
            var t;
            return void 0 === e && (e = !1), this.source && !e || (t = "", e || (this.protocol ? t += this.protocol + "://" : t += "//", this.userInfo && (t += this.userInfo + "@"), this.host && (t += this.host), this.port && (t += ":" + this.port)), this.path && (t += this.path), this.query && (t += "?" + this.query), this.anchor && (t += "#" + this.anchor), this.source = t), this.source
        }, DE);

    function DE(e, t) {
        e = _E(e), this.settings = t || {};
        var n, r, o, i, a = this.settings.base_uri, u = this;
        /^([\w\-]+):([^\/]{2})/i.test(e) || /^\s*#/.test(e) ? u.source = e : (n = 0 === e.indexOf("//"), 0 !== e.indexOf("/") || n || (e = (a && a.protocol || "http") + "://mce_host" + e), /^[\w\-]*:?\/\//.test(e) || (r = this.settings.base_uri ? this.settings.base_uri.path : new DE(document.location.href).directory, e = this.settings.base_uri && "" == this.settings.base_uri.protocol ? "//mce_host" + u.toAbsPath(r, e) : (o = /([^#?]*)([#?]?.*)/.exec(e), (a && a.protocol || "http") + "://mce_host" + u.toAbsPath(r, o[1]) + o[2])), e = e.replace(/@@/g, "(mce_at)"), i = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@\/]*):?([^:@\/]*))?@)?(\[[a-zA-Z0-9:.%]+\]|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(e), kE(AE, function (e, t) {
            var n = (n = i[t]) && n.replace(/\(mce_at\)/g, "@@");
            u[e] = n
        }), a && (u.protocol || (u.protocol = a.protocol), u.userInfo || (u.userInfo = a.userInfo), u.port || "mce_host" !== u.host || (u.port = a.port), u.host && "mce_host" !== u.host || (u.host = a.host), u.source = ""), n && (u.protocol = ""))
    }

    var OE = xu.DOM, BE = _t.extend, PE = _t.each, LE = _t.resolve, IE = xt.ie,
        ME = (FE.prototype.render = function () {
            BN(this)
        }, FE.prototype.focus = function (e) {
            var t, n;
            n = e, (t = this).removed || (n ? bm : ym)(t)
        }, FE.prototype.hasFocus = function () {
            return vm(this)
        }, FE.prototype.execCallback = function (e) {
            for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            var r, o = this.settings[e];
            if (o) return this.callbackLookup && (r = this.callbackLookup[e]) && (o = r.func, r = r.scope), "string" == typeof o && (r = (r = o.replace(/\.\w+$/, "")) ? LE(r) : 0, o = LE(o), this.callbackLookup = this.callbackLookup || {}, this.callbackLookup[e] = {
                func: o,
                scope: r
            }), o.apply(r || this, t)
        }, FE.prototype.translate = function (e) {
            return Ou.translate(e)
        }, FE.prototype.getParam = function (e, t, n) {
            return Iy(this, e, t, n)
        }, FE.prototype.hasPlugin = function (e, t) {
            return !(!M(xc(this).split(/[ ,]/), e) || t && Ky.get(e) === undefined)
        }, FE.prototype.nodeChanged = function (e) {
            this._nodeChangeDispatcher.nodeChanged(e)
        }, FE.prototype.addCommand = function (e, t, n) {
            this.editorCommands.addCommand(e, t, n)
        }, FE.prototype.addQueryStateHandler = function (e, t, n) {
            this.editorCommands.addQueryStateHandler(e, t, n)
        }, FE.prototype.addQueryValueHandler = function (e, t, n) {
            this.editorCommands.addQueryValueHandler(e, t, n)
        }, FE.prototype.addShortcut = function (e, t, n, r) {
            this.shortcuts.add(e, t, n, r)
        }, FE.prototype.execCommand = function (e, t, n, r) {
            return this.editorCommands.execCommand(e, t, n, r)
        }, FE.prototype.queryCommandState = function (e) {
            return this.editorCommands.queryCommandState(e)
        }, FE.prototype.queryCommandValue = function (e) {
            return this.editorCommands.queryCommandValue(e)
        }, FE.prototype.queryCommandSupported = function (e) {
            return this.editorCommands.queryCommandSupported(e)
        }, FE.prototype.show = function () {
            this.hidden && (this.hidden = !1, this.inline ? this.getBody().contentEditable = "true" : (OE.show(this.getContainer()), OE.hide(this.id)), this.load(), this.fire("show"))
        }, FE.prototype.hide = function () {
            var e = this, t = e.getDoc();
            e.hidden || (IE && t && !e.inline && t.execCommand("SelectAll"), e.save(), e.inline ? (e.getBody().contentEditable = "false", e === e.editorManager.focusedEditor && (e.editorManager.focusedEditor = null)) : (OE.hide(e.getContainer()), OE.setStyle(e.id, "display", e.orgDisplay)), e.hidden = !0, e.fire("hide"))
        }, FE.prototype.isHidden = function () {
            return !!this.hidden
        }, FE.prototype.setProgressState = function (e, t) {
            this.fire("ProgressState", {state: e, time: t})
        }, FE.prototype.load = function (e) {
            var t = this.getElement();
            if (this.removed) return "";
            if (t) {
                (e = e || {}).load = !0;
                var n = In(t) ? t.value : t.innerHTML, r = this.setContent(n, e);
                return e.element = t, e.no_events || this.fire("LoadContent", e), e.element = t = null, r
            }
        }, FE.prototype.save = function (e) {
            var t, n, r = this, o = r.getElement();
            if (o && r.initialized && !r.removed) return (e = e || {}).save = !0, e.element = o, e.content = r.getContent(e), e.no_events || r.fire("SaveContent", e), "raw" === e.format && r.fire("RawSaveContent", e), t = e.content, In(o) ? o.value = t : (!e.is_removing && r.inline || (o.innerHTML = t), (n = OE.getParent(r.id, "form")) && PE(n.elements, function (e) {
                if (e.name === r.id) return e.value = t, !1
            })), e.element = o = null, !1 !== e.set_dirty && r.setDirty(!1), t
        }, FE.prototype.setContent = function (e, t) {
            return py(this, e, t)
        }, FE.prototype.getContent = function (e) {
            return my(this, e)
        }, FE.prototype.insertContent = function (e, t) {
            t && (e = BE({content: e}, t)), this.execCommand("mceInsertContent", !1, e)
        }, FE.prototype.resetContent = function (e) {
            e === undefined ? py(this, this.startContent, {format: "raw"}) : py(this, e), this.undoManager.reset(), this.setDirty(!1), this.nodeChanged()
        }, FE.prototype.isDirty = function () {
            return !this.isNotDirty
        }, FE.prototype.setDirty = function (e) {
            var t = !this.isNotDirty;
            this.isNotDirty = !e, e && e !== t && this.fire("dirty")
        }, FE.prototype.getContainer = function () {
            return this.container || (this.container = OE.get(this.editorContainer || this.id + "_parent")), this.container
        }, FE.prototype.getContentAreaContainer = function () {
            return this.contentAreaContainer
        }, FE.prototype.getElement = function () {
            return this.targetElm || (this.targetElm = OE.get(this.id)), this.targetElm
        }, FE.prototype.getWin = function () {
            var e;
            return this.contentWindow || (e = this.iframeElement) && (this.contentWindow = e.contentWindow), this.contentWindow
        }, FE.prototype.getDoc = function () {
            var e;
            return this.contentDocument || (e = this.getWin()) && (this.contentDocument = e.document), this.contentDocument
        }, FE.prototype.getBody = function () {
            var e = this.getDoc();
            return this.bodyElement || (e ? e.body : null)
        }, FE.prototype.convertURL = function (e, t, n) {
            var r = this.settings;
            return r.urlconverter_callback ? this.execCallback("urlconverter_callback", e, n, !0, t) : !r.convert_urls || n && "LINK" === n.nodeName || 0 === e.indexOf("file:") || 0 === e.length ? e : r.relative_urls ? this.documentBaseURI.toRelative(e) : e = this.documentBaseURI.toAbsolute(e, r.remove_script_host)
        }, FE.prototype.addVisual = function (e) {
            PN(this, e)
        }, FE.prototype.remove = function () {
            vy(this)
        }, FE.prototype.destroy = function (e) {
            yy(this, e)
        }, FE.prototype.uploadImages = function (e) {
            return this.editorUpload.uploadImages(e)
        }, FE.prototype._scanForImages = function () {
            return this.editorUpload.scanForImages()
        }, FE.prototype.addButton = function () {
            throw new Error("editor.addButton has been removed in tinymce 5x, use editor.ui.registry.addButton or editor.ui.registry.addToggleButton or editor.ui.registry.addSplitButton instead")
        }, FE.prototype.addSidebar = function () {
            throw new Error("editor.addSidebar has been removed in tinymce 5x, use editor.ui.registry.addSidebar instead")
        }, FE.prototype.addMenuItem = function () {
            throw new Error("editor.addMenuItem has been removed in tinymce 5x, use editor.ui.registry.addMenuItem instead")
        }, FE.prototype.addContextToolbar = function () {
            throw new Error("editor.addContextToolbar has been removed in tinymce 5x, use editor.ui.registry.addContextToolbar instead")
        }, FE);

    function FE(e, t, n) {
        var r = this;
        this.plugins = {}, this.contentCSS = [], this.contentStyles = [], this.loadedCSS = {}, this.isNotDirty = !1, this.editorManager = n, this.documentBaseUrl = n.documentBaseURL, BE(this, pE), this.settings = Py(this, e, this.documentBaseUrl, n.defaultSettings, t), this.settings.suffix && (n.suffix = this.settings.suffix), this.suffix = n.suffix, this.settings.base_url && n._setBaseUrl(this.settings.base_url), this.baseUri = n.baseURI, this.settings.referrer_policy && (ku.ScriptLoader._setReferrerPolicy(this.settings.referrer_policy), xu.DOM.styleSheetLoader._setReferrerPolicy(this.settings.referrer_policy)), Bu.languageLoad = this.settings.language_load, Bu.baseURL = n.baseURL, this.id = e, this.setDirty(!1), this.documentBaseURI = new TE(this.settings.document_base_url, {base_uri: this.baseUri}), this.baseURI = this.baseUri, this.inline = !!this.settings.inline, this.shortcuts = new SE(this), this.editorCommands = new XN(this), this.settings.cache_suffix && (xt.cacheSuffix = this.settings.cache_suffix.replace(/^[\?\&]+/, "")), this.ui = {
            registry: EE(),
            styleSheetLoader: undefined,
            show: te,
            hide: te,
            enable: te,
            disable: te,
            isDisabled: b
        };
        var o = vE(this);
        this.mode = o, this.setMode = o.set, n.fire("SetupEditor", {editor: this}), this.execCallback("setup", this), this.$ = gu.overrideDefaults(function () {
            return {context: r.inline ? r.getBody() : r.getDoc(), element: r.getBody()}
        })
    }

    var UE, zE = xu.DOM, jE = _t.explode, HE = _t.each, VE = _t.extend, qE = 0, $E = !1, WE = [], KE = [],
        XE = function (t) {
            var n = t.type;
            HE(QE.get(), function (e) {
                switch (n) {
                    case"scroll":
                        e.fire("ScrollWindow", t);
                        break;
                    case"resize":
                        e.fire("ResizeWindow", t)
                }
            })
        }, YE = function (e) {
            e !== $E && (e ? gu(window).on("resize scroll", XE) : gu(window).off("resize scroll", XE), $E = e)
        }, GE = function (t) {
            var e = KE;
            delete WE[t.id];
            for (var n = 0; n < WE.length; n++) if (WE[n] === t) {
                WE.splice(n, 1);
                break
            }
            return KE = H(KE, function (e) {
                return t !== e
            }), QE.activeEditor === t && (QE.activeEditor = 0 < KE.length ? KE[0] : null), QE.focusedEditor === t && (QE.focusedEditor = null), e.length !== KE.length
        }, JE = "CSS1Compat" !== document.compatMode, QE = _e(_e({}, cE), {
            baseURI: null,
            baseURL: null,
            defaultSettings: {},
            documentBaseURL: null,
            suffix: null,
            $: gu,
            majorVersion: "5",
            minorVersion: "7.1",
            releaseDate: "2021-03-17",
            editors: WE,
            i18n: Ou,
            activeEditor: null,
            focusedEditor: null,
            settings: {},
            setup: function () {
                var e, t = "", n = TE.getDocumentBaseUrl(document.location);
                /^[^:]+:\/\/\/?[^\/]+\//.test(n) && (n = n.replace(/[\?#].*$/, "").replace(/[\/\\][^\/]+$/, ""), /[\/\\]$/.test(n) || (n += "/"));
                var r, o = window.tinymce || window.tinyMCEPreInit;
                if (o) e = o.base || o.baseURL, t = o.suffix; else {
                    for (var i, a = document.getElementsByTagName("script"), u = 0; u < a.length; u++) {
                        if ("" !== (i = a[u].src || "")) {
                            var s = i.substring(i.lastIndexOf("/"));
                            if (/tinymce(\.full|\.jquery|)(\.min|\.dev|)\.js/.test(i)) {
                                -1 !== s.indexOf(".min") && (t = ".min"), e = i.substring(0, i.lastIndexOf("/"));
                                break
                            }
                        }
                    }
                    !e && document.currentScript && (-1 !== (i = document.currentScript.src).indexOf(".min") && (t = ".min"), e = i.substring(0, i.lastIndexOf("/")))
                }
                this.baseURL = new TE(n).toAbsolute(e), this.documentBaseURL = n, this.baseURI = new TE(this.baseURL), this.suffix = t, (r = this).on("AddEditor", N(lm, r)), r.on("RemoveEditor", N(fm, r))
            },
            overrideDefaults: function (e) {
                var t = e.base_url;
                t && this._setBaseUrl(t);
                var n = e.suffix;
                e.suffix && (this.suffix = n);
                var r = (this.defaultSettings = e).plugin_base_urls;
                r !== undefined && se(r, function (e, t) {
                    Bu.PluginManager.urls[t] = e
                })
            },
            init: function (r) {
                var n, u = this,
                    s = _t.makeMap("area base basefont br col frame hr img input isindex link meta param embed source wbr track colgroup option table tbody tfoot thead tr th td script noscript style textarea video audio iframe object menu", " "),
                    c = function (e) {
                        var t = e.id;
                        return t || (t = he(e, "name").filter(function (e) {
                            return !zE.get(e)
                        }).getOrThunk(zE.uniqueId), e.setAttribute("id", t)), t
                    }, l = function (e, t) {
                        return t.constructor === RegExp ? t.test(e.className) : zE.hasClass(e, t)
                    }, f = function (e) {
                        n = e
                    }, e = function () {
                        var o, i = 0, a = [], n = function (e, t, n) {
                            var r = new ME(e, t, u);
                            a.push(r), r.on("init", function () {
                                ++i === o.length && f(a)
                            }), r.targetElm = r.targetElm || n, r.render()
                        };
                        zE.unbind(window, "ready", e), function (e) {
                            var t = r[e];
                            if (t) t.apply(u, [])
                        }("onpageload"), o = gu.unique(function (t) {
                            var n = [];
                            if (xt.browser.isIE() && xt.browser.version.major < 11) return rb("TinyMCE does not support the browser you are using. For a list of supported browsers please see: https://www.tinymce.com/docs/get-started/system-requirements/"), [];
                            if (JE) return rb("Failed to initialize the editor as the document is not in standards mode. TinyMCE requires standards mode."), [];
                            if (t.types) return HE(t.types, function (e) {
                                n = n.concat(zE.select(e.selector))
                            }), n;
                            if (t.selector) return zE.select(t.selector);
                            if (t.target) return [t.target];
                            switch (t.mode) {
                                case"exact":
                                    var e = t.elements || "";
                                    0 < e.length && HE(jE(e), function (t) {
                                        var e = zE.get(t);
                                        e ? n.push(e) : HE(document.forms, function (e) {
                                            HE(e.elements, function (e) {
                                                e.name === t && (t = "mce_editor_" + qE++, zE.setAttrib(e, "id", t), n.push(e))
                                            })
                                        })
                                    });
                                    break;
                                case"textareas":
                                case"specific_textareas":
                                    HE(zE.select("textarea"), function (e) {
                                        t.editor_deselector && l(e, t.editor_deselector) || t.editor_selector && !l(e, t.editor_selector) || n.push(e)
                                    })
                            }
                            return n
                        }(r)), r.types ? HE(r.types, function (t) {
                            _t.each(o, function (e) {
                                return !zE.is(e, t.selector) || (n(c(e), VE({}, r, t), e), !1)
                            })
                        }) : (_t.each(o, function (e) {
                            var t;
                            (t = u.get(e.id)) && t.initialized && !(t.getContainer() || t.getBody()).parentNode && (GE(t), t.unbindAllNativeEvents(), t.destroy(!0), t.removed = !0, t = null)
                        }), 0 === (o = _t.grep(o, function (e) {
                            return !u.get(e.id)
                        })).length ? f([]) : HE(o, function (e) {
                            var t;
                            t = e, r.inline && t.tagName.toLowerCase() in s ? rb("Could not initialize inline editor on invalid inline target element", e) : n(c(e), r, e)
                        }))
                    };
                return u.settings = r, zE.bind(window, "ready", e), new Ir(function (t) {
                    n ? t(n) : f = function (e) {
                        t(e)
                    }
                })
            },
            get: function (t) {
                return 0 === arguments.length ? KE.slice(0) : K(t) ? W(KE, function (e) {
                    return e.id === t
                }).getOr(null) : O(t) && KE[t] ? KE[t] : null
            },
            add: function (e) {
                var n = this;
                return WE[e.id] === e || (null === n.get(e.id) && ("length" !== e.id && (WE[e.id] = e), WE.push(e), KE.push(e)), YE(!0), n.activeEditor = e, n.fire("AddEditor", {editor: e}), UE || (UE = function (e) {
                    var t = n.fire("BeforeUnload");
                    if (t.returnValue) return e.preventDefault(), e.returnValue = t.returnValue, t.returnValue
                }, window.addEventListener("beforeunload", UE))), e
            },
            createEditor: function (e, t) {
                return this.add(new ME(e, t, this))
            },
            remove: function (e) {
                var t, n, r = this;
                if (e) {
                    if (!K(e)) return n = e, A(r.get(n.id)) ? null : (GE(n) && r.fire("RemoveEditor", {editor: n}), 0 === KE.length && window.removeEventListener("beforeunload", UE), n.remove(), YE(0 < KE.length), n);
                    HE(zE.select(e), function (e) {
                        (n = r.get(e.id)) && r.remove(n)
                    })
                } else for (t = KE.length - 1; 0 <= t; t--) r.remove(KE[t])
            },
            execCommand: function (e, t, n) {
                var r = this.get(n);
                switch (e) {
                    case"mceAddEditor":
                        return this.get(n) || new ME(n, this.settings, this).render(), !0;
                    case"mceRemoveEditor":
                        return r && r.remove(), !0;
                    case"mceToggleEditor":
                        return r ? (r.isHidden() ? r.show() : r.hide(), !0) : (this.execCommand("mceAddEditor", !1, n), !0)
                }
                return !!this.activeEditor && this.activeEditor.execCommand(e, t, n)
            },
            triggerSave: function () {
                HE(KE, function (e) {
                    e.save()
                })
            },
            addI18n: function (e, t) {
                Ou.add(e, t)
            },
            translate: function (e) {
                return Ou.translate(e)
            },
            setActive: function (e) {
                var t = this.activeEditor;
                this.activeEditor !== e && (t && t.fire("deactivate", {relatedTarget: e}), e.fire("activate", {relatedTarget: t})), this.activeEditor = e
            },
            _setBaseUrl: function (e) {
                this.baseURL = new TE(this.documentBaseURL).toAbsolute(e.replace(/\/+$/, "")), this.baseURI = new TE(this.baseURL)
            }
        });
    QE.setup();
    var ZE, ek, tk, nk, rk = Math.min, ok = Math.max, ik = Math.round, ak = function (e, t, n) {
        var r = t.x, o = t.y, i = e.w, a = e.h, u = t.w, s = t.h, c = (n || "").split("");
        return "b" === c[0] && (o += s), "r" === c[1] && (r += u), "c" === c[0] && (o += ik(s / 2)), "c" === c[1] && (r += ik(u / 2)), "b" === c[3] && (o -= a), "r" === c[4] && (r -= i), "c" === c[3] && (o -= ik(a / 2)), "c" === c[4] && (r -= ik(i / 2)), uk(r, o, i, a)
    }, uk = function (e, t, n, r) {
        return {x: e, y: t, w: n, h: r}
    }, sk = {
        inflate: function (e, t, n) {
            return uk(e.x - t, e.y - n, e.w + 2 * t, e.h + 2 * n)
        }, relativePosition: ak, findBestRelativePosition: function (e, t, n, r) {
            for (var o, i = 0; i < r.length; i++) if ((o = ak(e, t, r[i])).x >= n.x && o.x + o.w <= n.w + n.x && o.y >= n.y && o.y + o.h <= n.h + n.y) return r[i];
            return null
        }, intersect: function (e, t) {
            var n = ok(e.x, t.x), r = ok(e.y, t.y), o = rk(e.x + e.w, t.x + t.w), i = rk(e.y + e.h, t.y + t.h);
            return o - n < 0 || i - r < 0 ? null : uk(n, r, o - n, i - r)
        }, clamp: function (e, t, n) {
            var r = e.x, o = e.y, i = e.x + e.w, a = e.y + e.h, u = t.x + t.w, s = t.y + t.h, c = ok(0, t.x - r),
                l = ok(0, t.y - o), f = ok(0, i - u), d = ok(0, a - s);
            return r += c, o += l, n && (i += c, a += l, r -= f, o -= d), uk(r, o, (i -= f) - r, (a -= d) - o)
        }, create: uk, fromClientRect: function (e) {
            return uk(e.left, e.top, e.width, e.height)
        }
    }, ck = (ZE = {}, ek = {}, {
        load: function (r, o) {
            var i = 'Script at URL "' + o + '" failed to load',
                a = 'Script at URL "' + o + "\" did not call `tinymce.Resource.add('" + r + "', data)` within 1 second";
            if (ZE[r] !== undefined) return ZE[r];
            var e = new Ir(function (e, t) {
                var n = function (e, t, n) {
                    void 0 === n && (n = 1e3);
                    var r = !1, o = null, i = function (n) {
                        return function () {
                            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                            r || (r = !0, null !== o && (clearTimeout(o), o = null), n.apply(null, e))
                        }
                    }, a = i(e), u = i(t);
                    return {
                        start: function () {
                            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                            r || null !== o || (o = setTimeout(function () {
                                return u.apply(null, e)
                            }, n))
                        }, resolve: a, reject: u
                    }
                }(e, t);
                ek[r] = n.resolve, ku.ScriptLoader.loadScript(o, function () {
                    return n.start(a)
                }, function () {
                    return n.reject(i)
                })
            });
            return ZE[r] = e
        }, add: function (e, t) {
            ek[e] !== undefined && (ek[e](t), delete ek[e]), ZE[e] = Ir.resolve(t)
        }
    }), lk = _t.each, fk = _t.extend, dk = function () {
    };
    dk.extend = tk = function (n) {
        var o = this.prototype, r = function () {
            var e, t, n;
            if (!nk && (this.init && this.init.apply(this, arguments), t = this.Mixins)) for (e = t.length; e--;) (n = t[e]).init && n.init.apply(this, arguments)
        }, t = function () {
            return this
        };
        nk = !0;
        var i = new this;
        return nk = !1, n.Mixins && (lk(n.Mixins, function (e) {
            for (var t in e) "init" !== t && (n[t] = e[t])
        }), o.Mixins && (n.Mixins = o.Mixins.concat(n.Mixins))), n.Methods && lk(n.Methods.split(","), function (e) {
            n[e] = t
        }), n.Properties && lk(n.Properties.split(","), function (e) {
            var t = "_" + e;
            n[e] = function (e) {
                return e !== undefined ? (this[t] = e, this) : this[t]
            }
        }), n.Statics && lk(n.Statics, function (e, t) {
            r[t] = e
        }), n.Defaults && o.Defaults && (n.Defaults = fk({}, o.Defaults, n.Defaults)), se(n, function (e, t) {
            var n, r;
            "function" == typeof e && o[t] ? i[t] = (n = t, r = e, function () {
                var e = this._super;
                this._super = o[n];
                var t = r.apply(this, arguments);
                return this._super = e, t
            }) : i[t] = e
        }), r.prototype = i, (r.constructor = r).extend = tk, r
    };
    var mk = Math.min, pk = Math.max, gk = Math.round, hk = {
        serialize: function (e) {
            var t = JSON.stringify(e);
            return K(t) ? t.replace(/[\u0080-\uFFFF]/g, function (e) {
                var t = e.charCodeAt(0).toString(16);
                return "\\u" + "0000".substring(t.length) + t
            }) : t
        }, parse: function (e) {
            try {
                return JSON.parse(e)
            } catch (t) {
            }
        }
    }, vk = {
        callbacks: {}, count: 0, send: function (t) {
            var n = this, r = xu.DOM, o = t.count !== undefined ? t.count : n.count, i = "tinymce_jsonp_" + o;
            n.callbacks[o] = function (e) {
                r.remove(i), delete n.callbacks[o], t.callback(e)
            }, r.add(r.doc.body, "script", {id: i, src: t.url, type: "text/javascript"}), n.count++
        }
    }, yk = _e(_e({}, cE), {
        send: function (e) {
            var t, n = 0, r = function () {
                !e.async || 4 === t.readyState || 1e4 < n++ ? (e.success && n < 1e4 && 200 === t.status ? e.success.call(e.success_scope, "" + t.responseText, t, e) : e.error && e.error.call(e.error_scope, 1e4 < n ? "TIMED_OUT" : "GENERAL", t, e), t = null) : Wr.setTimeout(r, 10)
            };
            if (e.scope = e.scope || this, e.success_scope = e.success_scope || e.scope, e.error_scope = e.error_scope || e.scope, e.async = !1 !== e.async, e.data = e.data || "", yk.fire("beforeInitialize", {settings: e}), (t = new XMLHttpRequest).overrideMimeType && t.overrideMimeType(e.content_type), t.open(e.type || (e.data ? "POST" : "GET"), e.url, e.async), e.crossDomain && (t.withCredentials = !0), e.content_type && t.setRequestHeader("Content-Type", e.content_type), e.requestheaders && _t.each(e.requestheaders, function (e) {
                t.setRequestHeader(e.key, e.value)
            }), t.setRequestHeader("X-Requested-With", "XMLHttpRequest"), (t = yk.fire("beforeSend", {
                xhr: t,
                settings: e
            }).xhr).send(e.data), !e.async) return r();
            Wr.setTimeout(r, 10)
        }
    }), bk = _t.extend, Ck = (wk.sendRPC = function (e) {
        return (new wk).send(e)
    }, wk.prototype.send = function (e) {
        var n = e.error, r = e.success, o = bk(this.settings, e);
        o.success = function (e, t) {
            void 0 === (e = hk.parse(e)) && (e = {error: "JSON Parse error."}), e.error ? n.call(o.error_scope || o.scope, e.error, t) : r.call(o.success_scope || o.scope, e.result)
        }, o.error = function (e, t) {
            n && n.call(o.error_scope || o.scope, e, t)
        }, o.data = hk.serialize({
            id: e.id || "c" + this.count++,
            method: e.method,
            params: e.params
        }), o.content_type = "application/json", yk.send(o)
    }, wk);

    function wk(e) {
        this.settings = bk({}, e), this.count = 0
    }

    try {
        var xk, Sk = "__storage_test__";
        (xk = window.localStorage).setItem(Sk, Sk), xk.removeItem(Sk)
    } catch (_k) {
        xk = function () {
            return n = {}, r = [], e = {
                getItem: function (e) {
                    var t = n[e];
                    return t || null
                }, setItem: function (e, t) {
                    r.push(e), n[e] = String(t)
                }, key: function (e) {
                    return r[e]
                }, removeItem: function (t) {
                    r = r.filter(function (e) {
                        return e === t
                    }), delete n[t]
                }, clear: function () {
                    r = [], n = {}
                }, length: 0
            }, Object.defineProperty(e, "length", {
                get: function () {
                    return r.length
                }, configurable: !1, enumerable: !1
            }), e;
            var n, r, e
        }()
    }
    var Nk, Ek = {
        geom: {Rect: sk},
        util: {
            Promise: Ir,
            Delay: Wr,
            Tools: _t,
            VK: ed,
            URI: TE,
            Class: dk,
            EventDispatcher: iE,
            Observable: cE,
            I18n: Ou,
            XHR: yk,
            JSON: hk,
            JSONRequest: Ck,
            JSONP: vk,
            LocalStorage: xk,
            Color: function (e) {
                var n = {}, u = 0, s = 0, c = 0, t = function (e) {
                    var t;
                    return "object" == typeof e ? "r" in e ? (u = e.r, s = e.g, c = e.b) : "v" in e && function (e, t, n) {
                        if (e = (parseInt(e, 10) || 0) % 360, t = parseInt(t, 10) / 100, n = parseInt(n, 10) / 100, t = pk(0, mk(t, 1)), n = pk(0, mk(n, 1)), 0 !== t) {
                            var r = e / 60, o = n * t, i = o * (1 - Math.abs(r % 2 - 1)), a = n - o;
                            switch (Math.floor(r)) {
                                case 0:
                                    u = o, s = i, c = 0;
                                    break;
                                case 1:
                                    u = i, s = o, c = 0;
                                    break;
                                case 2:
                                    u = 0, s = o, c = i;
                                    break;
                                case 3:
                                    u = 0, s = i, c = o;
                                    break;
                                case 4:
                                    u = i, s = 0, c = o;
                                    break;
                                case 5:
                                    u = o, s = 0, c = i;
                                    break;
                                default:
                                    u = s = c = 0
                            }
                            u = gk(255 * (u + a)), s = gk(255 * (s + a)), c = gk(255 * (c + a))
                        } else u = s = c = gk(255 * n)
                    }(e.h, e.s, e.v) : (t = /rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)[^\)]*\)/gi.exec(e)) ? (u = parseInt(t[1], 10), s = parseInt(t[2], 10), c = parseInt(t[3], 10)) : (t = /#([0-F]{2})([0-F]{2})([0-F]{2})/gi.exec(e)) ? (u = parseInt(t[1], 16), s = parseInt(t[2], 16), c = parseInt(t[3], 16)) : (t = /#([0-F])([0-F])([0-F])/gi.exec(e)) && (u = parseInt(t[1] + t[1], 16), s = parseInt(t[2] + t[2], 16), c = parseInt(t[3] + t[3], 16)), u = u < 0 ? 0 : 255 < u ? 255 : u, s = s < 0 ? 0 : 255 < s ? 255 : s, c = c < 0 ? 0 : 255 < c ? 255 : c, n
                };
                return e && t(e), n.toRgb = function () {
                    return {r: u, g: s, b: c}
                }, n.toHsv = function () {
                    return e = u, t = s, n = c, o = 0, i = mk(e /= 255, mk(t /= 255, n /= 255)), a = pk(e, pk(t, n)), i === a ? {
                        h: 0,
                        s: 0,
                        v: 100 * (o = i)
                    } : (r = (a - i) / a, {
                        h: gk(60 * ((e === i ? 3 : n === i ? 1 : 5) - (e === i ? t - n : n === i ? e - t : n - e) / ((o = a) - i))),
                        s: gk(100 * r),
                        v: gk(100 * o)
                    });
                    var e, t, n, r, o, i, a
                }, n.toHex = function () {
                    var e = function (e) {
                        return 1 < (e = parseInt(e, 10).toString(16)).length ? e : "0" + e
                    };
                    return "#" + e(u) + e(s) + e(c)
                }, n.parse = t, n
            },
            ImageUploader: function (n) {
                var e = ub(), r = db(n, e);
                return {
                    upload: function (e, t) {
                        return void 0 === t && (t = !0), r.upload(e, t ? fb(n) : undefined)
                    }
                }
            }
        },
        dom: {
            EventUtils: Ti,
            Sizzle: Ta,
            DomQuery: gu,
            TreeWalker: Yr,
            TextSeeker: is,
            DOMUtils: xu,
            ScriptLoader: ku,
            RangeUtils: pd,
            Serializer: dy,
            StyleSheetLoader: Kr,
            ControlSelection: nd,
            BookmarkManager: Gf,
            Selection: Hv,
            Event: Ti.Event
        },
        html: {
            Styles: xi,
            Entities: li,
            Node: Am,
            Schema: Ci,
            SaxParser: Pm,
            DomParser: uy,
            Writer: Vm,
            Serializer: qm
        },
        Env: xt,
        AddOnManager: Bu,
        Annotator: Yf,
        Formatter: Cb,
        UndoManager: xb,
        EditorCommands: XN,
        WindowManager: Jy,
        NotificationManager: Wy,
        EditorObservable: pE,
        Shortcuts: SE,
        Editor: ME,
        FocusManager: im,
        EditorManager: QE,
        DOM: xu.DOM,
        ScriptLoader: ku.ScriptLoader,
        PluginManager: Ky,
        ThemeManager: Xy,
        IconManager: My,
        Resource: ck,
        trim: _t.trim,
        isArray: _t.isArray,
        is: _t.is,
        toArray: _t.toArray,
        makeMap: _t.makeMap,
        each: _t.each,
        map: _t.map,
        grep: _t.grep,
        inArray: _t.inArray,
        extend: _t.extend,
        create: _t.create,
        walk: _t.walk,
        createNS: _t.createNS,
        resolve: _t.resolve,
        explode: _t.explode,
        _addCacheSuffix: _t._addCacheSuffix,
        isOpera: xt.opera,
        isWebKit: xt.webkit,
        isIE: xt.ie,
        isGecko: xt.gecko,
        isMac: xt.mac
    }, kk = _t.extend(QE, Ek);
    Nk = kk, window.tinymce = Nk, window.tinyMCE = Nk, function (e) {
        if ("object" == typeof module) try {
            module.exports = e
        } catch (t) {
        }
    }(kk)
}();

/* Ephox Fluffy plugin
 *
 * Copyright 2010-2016 Ephox Corporation.  All rights reserved.
 *
 * Version: 2.5.0-13
 */

!function () {
    "use strict";

    function o(n) {
        return function () {
            return n
        }
    }

    function n() {
        return f
    }

    var u = "undefined" != typeof window ? window : Function("return this;")(), t = function (n, t) {
        return {isRequired: n, applyPatch: t}
    }, i = function (i, o) {
        return function () {
            for (var n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];
            var r = o.apply(this, n), e = void 0 === r ? n : r;
            return i.apply(this, e)
        }
    }, r = function (n, t) {
        if (n) for (var r = 0; r < t.length; r++) t[r].isRequired(n) && t[r].applyPatch(n);
        return n
    }, a = o(!1), c = o(!0), f = {
        fold: function (n, t) {
            return n()
        }, is: a, isSome: a, isNone: c, getOr: s, getOrThunk: l, getOrDie: function (n) {
            throw new Error(n || "error: getOrDie called on none.")
        }, getOrNull: o(null), getOrUndefined: o(void 0), or: s, orThunk: l, map: n, each: function () {
        }, bind: n, exists: a, forall: c, filter: n, equals: e, equals_: e, toArray: function () {
            return []
        }, toString: o("none()")
    };

    function e(n) {
        return n.isNone()
    }

    function l(n) {
        return n()
    }

    function s(n) {
        return n
    }

    function g(e) {
        return function (n) {
            return r = typeof (t = n), (null === t ? "null" : "object" == r && (Array.prototype.isPrototypeOf(t) || t.constructor && "Array" === t.constructor.name) ? "array" : "object" == r && (String.prototype.isPrototypeOf(t) || t.constructor && "String" === t.constructor.name) ? "string" : r) === e;
            var t, r
        }
    }

    function d(n, t) {
        return r = n, e = t, -1 < D.call(r, e);
        var r, e
    }

    function p(n, t) {
        return function (n) {
            for (var t = [], r = 0, e = n.length; r < e; ++r) {
                if (!A(n[r])) throw new Error("Arr.flatten item " + r + " was not an array, input: " + n);
                P.apply(t, n[r])
            }
            return t
        }(function (n, t) {
            for (var r = n.length, e = new Array(r), i = 0; i < r; i++) {
                var o = n[i];
                e[i] = t(o, i)
            }
            return e
        }(n, t))
    }

    function v(u) {
        return function () {
            for (var n = new Array(arguments.length), t = 0; t < n.length; t++) n[t] = arguments[t];
            if (0 === n.length) throw new Error("Can't merge zero objects");
            for (var r = {}, e = 0; e < n.length; e++) {
                var i = n[e];
                for (var o in i) U.call(i, o) && (r[o] = u(r[o], i[o]))
            }
            return r
        }
    }

    function h(n, t) {
        for (var r = T(n), e = 0, i = r.length; e < i; e++) {
            var o = r[e];
            t(n[o], o)
        }
    }

    function y(r) {
        return function (n, t) {
            r[t] = n
        }
    }

    function m(n, t) {
        var r, e, i, o = {}, u = {};
        return r = t, e = y(o), i = y(u), h(n, function (n, t) {
            (r(n, t) ? e : i)(n, t)
        }), {t: o, f: u}
    }

    function E(n, t) {
        return C(n, t) ? j(n[t]) : S()
    }

    function w(n) {
        if (_(n) || "" === n) return [];
        var t = A(n) ? p(n, function (n) {
            return n.split(/[\s+,]/)
        }) : n.split(/[\s+,]/);
        return p(t, function (n) {
            return 0 < n.length ? [n.trim()] : []
        })
    }

    function O(n, t) {
        var r = N(n, t), e = w(t.plugins), i = E(r, "custom_plugin_urls").getOr({}), o = m(i, function (n, t) {
            return d(e, t)
        }), u = E(r, "external_plugins").getOr({}), a = {};
        h(o.t, function (n, t) {
            a[t] = n
        });
        var c = R(a, u);
        return R(t, 0 === T(c).length ? {} : {external_plugins: c})
    }

    var M, b = function (r) {
            function n() {
                return i
            }

            function t(n) {
                return n(r)
            }

            var e = o(r), i = {
                fold: function (n, t) {
                    return t(r)
                },
                is: function (n) {
                    return r === n
                },
                isSome: c,
                isNone: a,
                getOr: e,
                getOrThunk: e,
                getOrDie: e,
                getOrNull: e,
                getOrUndefined: e,
                or: n,
                orThunk: n,
                map: function (n) {
                    return b(n(r))
                },
                each: function (n) {
                    n(r)
                },
                bind: t,
                exists: t,
                forall: t,
                filter: function (n) {
                    return n(r) ? i : f
                },
                toArray: function () {
                    return [r]
                },
                toString: function () {
                    return "some(" + r + ")"
                },
                equals: function (n) {
                    return n.is(r)
                },
                equals_: function (n, t) {
                    return n.fold(a, function (n) {
                        return t(r, n)
                    })
                }
            };
            return i
        }, S = n, j = function (n) {
            return null == n ? f : b(n)
        }, x = g("object"), A = g("array"), _ = (M = void 0, function (n) {
            return M === n
        }), D = Array.prototype.indexOf, P = Array.prototype.push, U = Object.prototype.hasOwnProperty,
        N = v(function (n, t) {
            return x(n) && x(t) ? N(n, t) : t
        }), R = v(function (n, t) {
            return t
        }), T = Object.keys, q = Object.hasOwnProperty, C = function (n, t) {
            return q.call(n, t)
        }, I = {
            getCustomPluginUrls: O, patch: t(function () {
                return !0
            }, function (r) {
                r.EditorManager.init = i(r.EditorManager.init, function (n) {
                    return [O(r.defaultSettings, n)]
                }), r.EditorManager.createEditor = i(r.EditorManager.createEditor, function (n, t) {
                    return [n, O(r.defaultSettings, t)]
                })
            })
        };

    function k() {
        for (var n = 0, t = 0, r = arguments.length; t < r; t++) n += arguments[t].length;
        var e = Array(n), i = 0;
        for (t = 0; t < r; t++) for (var o = arguments[t], u = 0, a = o.length; u < a; u++, i++) e[i] = o[u];
        return e
    }

    function L(n, t) {
        return function (n, t) {
            for (var r = null != t ? t : u, e = 0; e < n.length && null != r; ++e) r = r[n[e]];
            return r
        }(n.split("."), t)
    }

    function V(n) {
        return parseInt(n, 10)
    }

    function z(n, t) {
        var r = n - t;
        return 0 == r ? 0 : 0 < r ? 1 : -1
    }

    function B(n, t, r) {
        return {major: n, minor: t, patch: r}
    }

    function F(n) {
        var t = /([0-9]+)\.([0-9]+)\.([0-9]+)(?:(\-.+)?)/.exec(n);
        return t ? B(V(t[1]), V(t[2]), V(t[3])) : B(0, 0, 0)
    }

    function $(n, t) {
        return !!n && -1 === function (n, t) {
            var r = z(n.major, t.major);
            if (0 !== r) return r;
            var e = z(n.minor, t.minor);
            if (0 !== e) return e;
            var i = z(n.patch, t.patch);
            return 0 !== i ? i : 0
        }(F([(r = n).majorVersion, r.minorVersion].join(".").split(".").slice(0, 3).join(".")), F(t));
        var r
    }

    function G(o) {
        return function (n) {
            var t = L("tinymce.util.Tools", u), r = w(n.plugins), e = o.defaultSettings.forced_plugins || [],
                i = 0 < e.length ? r.concat(e) : r;
            return [t.extend({}, n, {plugins: i})]
        }
    }

    function H() {
        return (new Date).getTime()
    }

    function J(e) {
        return function () {
            var n, t,
                r = (t = "position", (((n = e).currentStyle ? n.currentStyle[t] : window.getComputedStyle(n, null)[t]) || "").toLowerCase());
            return "absolute" === r || "fixed" === r
        }
    }

    function K(n) {
        n.parentNode.removeChild(n)
    }

    function Q(n, t) {
        n.notificationManager ? n.notificationManager.open({
            text: t,
            type: "warning",
            timeout: 0,
            icon: ""
        }) : n.windowManager.alert(t)
    }

    function W(n) {
        var t, r, e = L("tinymce.util.URI", u);
        (t = n.base_url) && (this.baseURL = new e(this.documentBaseURL).toAbsolute(t.replace(/\/+$/, "")), this.baseURI = new e(this.baseURL)), r = n.suffix, n.suffix && (this.suffix = r), this.defaultSettings = n
    }

    function X(n) {
        return [L("tinymce.util.Tools", u).extend({}, this.defaultSettings, n)]
    }

    function Y(n) {
        r(n, [en.patch, on.patch, Z.patch, I.patch])
    }

    var Z = {
        patch: t(function (n) {
            return $(n, "4.7.0")
        }, function (r) {
            r.EditorManager.init = i(r.EditorManager.init, G(r.EditorManager)), r.EditorManager.createEditor = i(r.EditorManager.createEditor, function (n, t) {
                return k([n], G(r.EditorManager)(t))
            })
        })
    }, nn = function (n, t, r, e, i) {
        var o, u = H();
        o = setInterval(function () {
            n() && (clearInterval(o), t()), H() - u > i && (clearInterval(o), r())
        }, e)
    }, tn = function (n, t) {
        var r, e = ((r = document.createElement("div")).style.display = "none", r.className = "mce-floatpanel", r);
        document.body.appendChild(e), nn(J(e), function () {
            K(e), n()
        }, function () {
            K(e), t()
        }, 10, 5e3)
    }, rn = function (n) {
        n.EditorManager.on("AddEditor", function (n) {
            var t = n.editor, r = t.settings.service_message;
            r && tn(function () {
                Q(t, r)
            }, function () {
                alert(r)
            })
        })
    }, en = {
        patch: t(function (n) {
            return "function" != typeof n.overrideDefaults
        }, function (r) {
            rn(r), r.overrideDefaults = W, r.EditorManager.init = i(r.EditorManager.init, X), r.EditorManager.createEditor = i(r.EditorManager.createEditor, function (n, t) {
                return k([n], X.call(r, t))
            })
        })
    }, on = {
        patch: t(function (n) {
            return $(n, "4.5.0")
        }, function (n) {
            var e;
            n.overrideDefaults = i(n.overrideDefaults, (e = n, function (n) {
                var t = n.plugin_base_urls;
                for (var r in t) e.PluginManager.urls[r] = t[r]
            }))
        })
    };
    Y(u.tinymce)
}();

(function (cloudSettings) {
    tinymce.overrideDefaults(cloudSettings);
})({
    "rtc_tenant_id": "invalid-origin",
    "imagetools_proxy": "https://imageproxy.tiny.cloud/2/image",
    "suffix": ".min",
    "linkchecker_service_url": "https://hyperlinking.tiny.cloud",
    "spellchecker_rpc_url": "https://spelling.tiny.cloud",
    "spellchecker_api_key": "invalid-origin",
    "tinydrive_service_url": "https://catalog.tiny.cloud",
    "api_key": "invalid-origin",
    "imagetools_api_key": "invalid-origin",
    "tinydrive_api_key": "invalid-origin",
    "forced_plugins": ["chiffer"],
    "referrer_policy": "origin",
    "content_css_cors": true,
    "custom_plugin_urls": {},
    "chiffer_snowplow_service_url": "https://sp.tinymce.com/i",
    "mediaembed_api_key": "invalid-origin",
    "rtc_service_url": "https://rtc.tiny.cloud",
    "linkchecker_api_key": "invalid-origin",
    "mediaembed_service_url": "https://hyperlinking.tiny.cloud",
    "service_message": "This domain is not registered with Tiny Cloud.  Please review \u003ca target=\"_blank\" href=\"https://www.tiny.cloud/my-account\"\u003eyour approved domains\u003c/a\u003e."
});
tinymce.baseURL = "https://cdn.tiny.cloud/1/invalid-origin/tinymce/5.7.1-108"

/* Ephox chiffer plugin
*
* Copyright 2010-2019 Tiny Technologies Inc. All rights reserved.
*
* Version: 1.6.0-13
*/

!function () {
    "use strict";

    function o() {
    }

    function i() {
        return (new Date).getTime()
    }

    function t(t, n) {
        var r, c, e, n = (r = t, c = n, {
            send: function (t, n, e) {
                var t = "?aid=" + c + "&tna=tinymce_cloud&p=web&dtm=" + n + "&stm=" + i() + "&tz=" + ("undefined" != typeof Intl ? encodeURIComponent(Intl.DateTimeFormat().resolvedOptions().timeZone) : "N%2FA") + "&e=se&se_ca=" + t,
                    o = document.createElement("img");
                o.src = r.chiffer_snowplow_service_url + t;
                t = function (t) {
                    return function () {
                        o.onload = null, o.onerror = null, e(t)
                    }
                };
                o.onload = t(!0), o.onerror = t(!1)
            }
        });
        return e = n, {
            sendStat: function (t) {
                return function () {
                    e.send(t, i(), o)
                }
            }
        }
    }

    var e, n, r, c, u, a = (e = "string", function (t) {
        return t = typeof (n = t), (null === n ? "null" : "object" == t && (Array.prototype.isPrototypeOf(n) || n.constructor && "Array" === n.constructor.name) ? "array" : "object" == t && (String.prototype.isPrototypeOf(n) || n.constructor && "String" === n.constructor.name) ? "string" : t) === e;
        var n
    });
    r = tinymce.defaultSettings, c = {load: o}, u = function (t) {
        t = t.api_key;
        return a(t) ? t : void 0
    }(r), c = void 0 === u ? c : ((n = t(r, u)).sendStat("script_load")(), {
        load: function (t) {
            t.once("init", n.sendStat("init")), t.once("focus", n.sendStat("focus")), t.on("ExportPdf", n.sendStat("export_pdf")), t.on("PastePreProcess", function (t) {
                null == t.source || n.sendStat("powerpaste_" + t.source)()
            })
        }
    }), tinymce.PluginManager.add("chiffer", c.load)
}();
