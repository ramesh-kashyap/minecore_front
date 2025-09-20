import {
    c as N
} from "./corejs-C4iS2aBk.js";
var k = {
    exports: {}
};
/*!
 * Platform.js v1.3.6
 * Copyright 2014-2020 Benjamin Tan
 * Copyright 2011-2013 John-David Dalton
 * Available under MIT license
 */
k.exports;
(function(I, D) {
    (function() {
        var q = {
                function: !0,
                object: !0
            },
            F = q[typeof window] && window || this,
            T = D,
            j = I && !I.nodeType && I,
            u = T && j && typeof N == "object" && N;
        u && (u.global === u || u.window === u || u.self === u) && (F = u);
        var J = Math.pow(2, 53) - 1,
            w = /\bOpera/,
            V = Object.prototype,
            Y = V.hasOwnProperty,
            z = V.toString;

        function H(i) {
            return i = String(i), i.charAt(0).toUpperCase() + i.slice(1)
        }

        function Z(i, a, f) {
            var d = {
                "10.0": "10",
                "6.4": "10 Technical Preview",
                "6.3": "8.1",
                "6.2": "8",
                "6.1": "Server 2008 R2 / 7",
                "6.0": "Server 2008 / Vista",
                "5.2": "Server 2003 / XP 64-bit",
                "5.1": "XP",
                "5.01": "2000 SP1",
                "5.0": "2000",
                "4.0": "NT",
                "4.90": "ME"
            };
            return a && f && /^Win/i.test(i) && !/^Windows Phone /i.test(i) && (d = d[/[\d.]+$/.exec(i)]) && (i = "Windows " + d), i = String(i), a && f && (i = i.replace(RegExp(a, "i"), f)), i = E(i.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/, " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1").split(" on ")[0]), i
        }

        function Q(i, a) {
            var f = -1,
                d = i ? i.length : 0;
            if (typeof d == "number" && d > -1 && d <= J)
                for (; ++f < d;) a(i[f], f, i);
            else C(i, a)
        }

        function E(i) {
            return i = G(i), /^(?:webOS|i(?:OS|P))/.test(i) ? i : H(i)
        }

        function C(i, a) {
            for (var f in i) Y.call(i, f) && a(i[f], f, i)
        }

        function g(i) {
            return i == null ? H(i) : z.call(i).slice(8, -1)
        }

        function ee(i, a) {
            var f = i != null ? typeof i[a] : "number";
            return !/^(?:boolean|number|string|undefined)$/.test(f) && (f == "object" ? !!i[a] : !0)
        }

        function h(i) {
            return String(i).replace(/([ -])(?!$)/g, "$1?")
        }

        function y(i, a) {
            var f = null;
            return Q(i, function(d, B) {
                f = a(f, d, B, i)
            }), f
        }

        function G(i) {
            return String(i).replace(/^ +| +$/g, "")
        }

        function P(i) {
            var a = F,
                f = i && typeof i == "object" && g(i) != "String";
            f && (a = i, i = null);
            var d = a.navigator || {},
                B = d.userAgent || "";
            i || (i = B);
            var ie = f ? !!d.likeChrome : /\bChrome\b/.test(i) && !/internal|\n/i.test(z.toString()),
                $ = "Object",
                te = f ? $ : "ScriptBridgingProxyObject",
                re = f ? $ : "Environment",
                ne = f && a.java ? "JavaPackage" : g(a.java),
                oe = f ? $ : "RuntimeObject",
                M = /\bJava/.test(ne) && a.java,
                ae = M && g(a.environment) == re,
                le = M ? "a" : "α",
                se = M ? "b" : "β",
                X = a.document || {},
                v = a.operamini || a.opera,
                W = w.test(W = f && v ? v["[[Class]]"] : g(v)) ? W : v = null,
                e, R = i,
                l = [],
                A = null,
                O = i == B,
                n = O && v && typeof v.version == "function" && v.version(),
                K, s = be([{
                    label: "EdgeHTML",
                    pattern: "Edge"
                }, "Trident", {
                    label: "WebKit",
                    pattern: "AppleWebKit"
                }, "iCab", "Presto", "NetFront", "Tasman", "KHTML", "Gecko"]),
                t = pe(["Adobe AIR", "Arora", "Avant Browser", "Breach", "Camino", "Electron", "Epiphany", "Fennec", "Flock", "Galeon", "GreenBrowser", "iCab", "Iceweasel", "K-Meleon", "Konqueror", "Lunascape", "Maxthon", {
                    label: "Microsoft Edge",
                    pattern: "(?:Edge|Edg|EdgA|EdgiOS)"
                }, "Midori", "Nook Browser", "PaleMoon", "PhantomJS", "Raven", "Rekonq", "RockMelt", {
                    label: "Samsung Internet",
                    pattern: "SamsungBrowser"
                }, "SeaMonkey", {
                    label: "Silk",
                    pattern: "(?:Cloud9|Silk-Accelerated)"
                }, "Sleipnir", "SlimBrowser", {
                    label: "SRWare Iron",
                    pattern: "Iron"
                }, "Sunrise", "Swiftfox", "Vivaldi", "Waterfox", "WebPositive", {
                    label: "Yandex Browser",
                    pattern: "YaBrowser"
                }, {
                    label: "UC Browser",
                    pattern: "UCBrowser"
                }, "Opera Mini", {
                    label: "Opera Mini",
                    pattern: "OPiOS"
                }, "Opera", {
                    label: "Opera",
                    pattern: "OPR"
                }, "Chromium", "Chrome", {
                    label: "Chrome",
                    pattern: "(?:HeadlessChrome)"
                }, {
                    label: "Chrome Mobile",
                    pattern: "(?:CriOS|CrMo)"
                }, {
                    label: "Firefox",
                    pattern: "(?:Firefox|Minefield)"
                }, {
                    label: "Firefox for iOS",
                    pattern: "FxiOS"
                }, {
                    label: "IE",
                    pattern: "IEMobile"
                }, {
                    label: "IE",
                    pattern: "MSIE"
                }, "Safari"]),
                o = _([{
                    label: "BlackBerry",
                    pattern: "BB10"
                }, "BlackBerry", {
                    label: "Galaxy S",
                    pattern: "GT-I9000"
                }, {
                    label: "Galaxy S2",
                    pattern: "GT-I9100"
                }, {
                    label: "Galaxy S3",
                    pattern: "GT-I9300"
                }, {
                    label: "Galaxy S4",
                    pattern: "GT-I9500"
                }, {
                    label: "Galaxy S5",
                    pattern: "SM-G900"
                }, {
                    label: "Galaxy S6",
                    pattern: "SM-G920"
                }, {
                    label: "Galaxy S6 Edge",
                    pattern: "SM-G925"
                }, {
                    label: "Galaxy S7",
                    pattern: "SM-G930"
                }, {
                    label: "Galaxy S7 Edge",
                    pattern: "SM-G935"
                }, "Google TV", "Lumia", "iPad", "iPod", "iPhone", "Kindle", {
                    label: "Kindle Fire",
                    pattern: "(?:Cloud9|Silk-Accelerated)"
                }, "Nexus", "Nook", "PlayBook", "PlayStation Vita", "PlayStation", "TouchPad", "Transformer", {
                    label: "Wii U",
                    pattern: "WiiU"
                }, "Wii", "Xbox One", {
                    label: "Xbox 360",
                    pattern: "Xbox"
                }, "Xoom"]),
                c = fe({
                    Apple: {
                        iPad: 1,
                        iPhone: 1,
                        iPod: 1
                    },
                    Alcatel: {},
                    Archos: {},
                    Amazon: {
                        Kindle: 1,
                        "Kindle Fire": 1
                    },
                    Asus: {
                        Transformer: 1
                    },
                    "Barnes & Noble": {
                        Nook: 1
                    },
                    BlackBerry: {
                        PlayBook: 1
                    },
                    Google: {
                        "Google TV": 1,
                        Nexus: 1
                    },
                    HP: {
                        TouchPad: 1
                    },
                    HTC: {},
                    Huawei: {},
                    Lenovo: {},
                    LG: {},
                    Microsoft: {
                        Xbox: 1,
                        "Xbox One": 1
                    },
                    Motorola: {
                        Xoom: 1
                    },
                    Nintendo: {
                        "Wii U": 1,
                        Wii: 1
                    },
                    Nokia: {
                        Lumia: 1
                    },
                    Oppo: {},
                    Samsung: {
                        "Galaxy S": 1,
                        "Galaxy S2": 1,
                        "Galaxy S3": 1,
                        "Galaxy S4": 1
                    },
                    Sony: {
                        PlayStation: 1,
                        "PlayStation Vita": 1
                    },
                    Xiaomi: {
                        Mi: 1,
                        Redmi: 1
                    }
                }),
                r = ce(["Windows Phone", "KaiOS", "Android", "CentOS", {
                    label: "Chrome OS",
                    pattern: "CrOS"
                }, "Debian", {
                    label: "DragonFly BSD",
                    pattern: "DragonFly"
                }, "Fedora", "FreeBSD", "Gentoo", "Haiku", "Kubuntu", "Linux Mint", "OpenBSD", "Red Hat", "SuSE", "Ubuntu", "Xubuntu", "Cygwin", "Symbian OS", "hpwOS", "webOS ", "webOS", "Tablet OS", "Tizen", "Linux", "Mac OS X", "Macintosh", "Mac", "Windows 98;", "Windows "]);

            function be(S) {
                return y(S, function(p, b) {
                    return p || RegExp("\\b" + (b.pattern || h(b)) + "\\b", "i").exec(i) && (b.label || b)
                })
            }

            function fe(S) {
                return y(S, function(p, b, m) {
                    return p || (b[o] || b[/^[a-z]+(?: +[a-z]+\b)*/i.exec(o)] || RegExp("\\b" + h(m) + "(?:\\b|\\w*\\d)", "i").exec(i)) && m
                })
            }

            function pe(S) {
                return y(S, function(p, b) {
                    return p || RegExp("\\b" + (b.pattern || h(b)) + "\\b", "i").exec(i) && (b.label || b)
                })
            }

            function ce(S) {
                return y(S, function(p, b) {
                    var m = b.pattern || h(b);
                    return !p && (p = RegExp("\\b" + m + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(i)) && (p = Z(p, m, b.label || b)), p
                })
            }

            function _(S) {
                return y(S, function(p, b) {
                    var m = b.pattern || h(b);
                    return !p && (p = RegExp("\\b" + m + " *\\d+[.\\w_]*", "i").exec(i) || RegExp("\\b" + m + " *\\w+-[\\w]*", "i").exec(i) || RegExp("\\b" + m + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(i)) && ((p = String(b.label && !RegExp(m, "i").test(b.label) ? b.label : p).split("/"))[1] && !/[\d.]+/.test(p[0]) && (p[0] += " " + p[1]), b = b.label || b, p = E(p[0].replace(RegExp(m, "i"), b).replace(RegExp("; *(?:" + b + "[_-])?", "i"), " ").replace(RegExp("(" + b + ")[-_.]?(\\w)", "i"), "$1 $2"))), p
                })
            }

            function U(S) {
                return y(S, function(p, b) {
                    return p || (RegExp(b + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(i) || 0)[1] || null
                })
            }

            function de() {
                return this.description || ""
            }
            if (s && (s = [s]), /\bAndroid\b/.test(r) && !o && (e = /\bAndroid[^;]*;(.*?)(?:Build|\) AppleWebKit)\b/i.exec(i)) && (o = G(e[1]).replace(/^[a-z]{2}-[a-z]{2};\s*/i, "") || null), c && !o ? o = _([c]) : c && o && (o = o.replace(RegExp("^(" + h(c) + ")[-_.\\s]", "i"), c + " ").replace(RegExp("^(" + h(c) + ")[-_.]?(\\w)", "i"), c + " $2")), (e = /\bGoogle TV\b/.exec(o)) && (o = e[0]), /\bSimulator\b/i.test(i) && (o = (o ? o + " " : "") + "Simulator"), t == "Opera Mini" && /\bOPiOS\b/.test(i) && l.push("running in Turbo/Uncompressed mode"), t == "IE" && /\blike iPhone OS\b/.test(i) ? (e = P(i.replace(/like iPhone OS/, "")), c = e.manufacturer, o = e.product) : /^iP/.test(o) ? (t || (t = "Safari"), r = "iOS" + ((e = / OS ([\d_]+)/i.exec(i)) ? " " + e[1].replace(/_/g, ".") : "")) : t == "Konqueror" && /^Linux\b/i.test(r) ? r = "Kubuntu" : c && c != "Google" && (/Chrome/.test(t) && !/\bMobile Safari\b/i.test(i) || /\bVita\b/.test(o)) || /\bAndroid\b/.test(r) && /^Chrome/.test(t) && /\bVersion\//i.test(i) ? (t = "Android Browser", r = /\bAndroid\b/.test(r) ? r : "Android") : t == "Silk" ? (/\bMobi/i.test(i) || (r = "Android", l.unshift("desktop mode")), /Accelerated *= *true/i.test(i) && l.unshift("accelerated")) : t == "UC Browser" && /\bUCWEB\b/.test(i) ? l.push("speed mode") : t == "PaleMoon" && (e = /\bFirefox\/([\d.]+)\b/.exec(i)) ? l.push("identifying as Firefox " + e[1]) : t == "Firefox" && (e = /\b(Mobile|Tablet|TV)\b/i.exec(i)) ? (r || (r = "Firefox OS"), o || (o = e[1])) : !t || (e = !/\bMinefield\b/i.test(i) && /\b(?:Firefox|Safari)\b/.exec(t)) ? (t && !o && /[\/,]|^[^(]+?\)/.test(i.slice(i.indexOf(e + "/") + 8)) && (t = null), (e = o || c || r) && (o || c || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(r)) && (t = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(r) ? r : e) + " Browser")) : t == "Electron" && (e = (/\bChrome\/([\d.]+)\b/.exec(i) || 0)[1]) && l.push("Chromium " + e), n || (n = U(["(?:Cloud9|CriOS|CrMo|Edge|Edg|EdgA|EdgiOS|FxiOS|HeadlessChrome|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$)|UCBrowser|YaBrowser)", "Version", h(t), "(?:Firefox|Minefield|NetFront)"])), (e = s == "iCab" && parseFloat(n) > 3 && "WebKit" || /\bOpera\b/.test(t) && (/\bOPR\b/.test(i) ? "Blink" : "Presto") || /\b(?:Midori|Nook|Safari)\b/i.test(i) && !/^(?:Trident|EdgeHTML)$/.test(s) && "WebKit" || !s && /\bMSIE\b/i.test(i) && (r == "Mac OS" ? "Tasman" : "Trident") || s == "WebKit" && /\bPlayStation\b(?! Vita\b)/i.test(t) && "NetFront") && (s = [e]), t == "IE" && (e = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(i) || 0)[1]) ? (t += " Mobile", r = "Windows Phone " + (/\+$/.test(e) ? e : e + ".x"), l.unshift("desktop mode")) : /\bWPDesktop\b/i.test(i) ? (t = "IE Mobile", r = "Windows Phone 8.x", l.unshift("desktop mode"), n || (n = (/\brv:([\d.]+)/.exec(i) || 0)[1])) : t != "IE" && s == "Trident" && (e = /\brv:([\d.]+)/.exec(i)) && (t && l.push("identifying as " + t + (n ? " " + n : "")), t = "IE", n = e[1]), O) {
                if (ee(a, "global"))
                    if (M && (e = M.lang.System, R = e.getProperty("os.arch"), r = r || e.getProperty("os.name") + " " + e.getProperty("os.version")), ae) {
                        try {
                            n = a.require("ringo/engine").version.join("."), t = "RingoJS"
                        } catch {
                            (e = a.system) && e.global.system == a.system && (t = "Narwhal", r || (r = e[0].os || null))
                        }
                        t || (t = "Rhino")
                    } else typeof a.process == "object" && !a.process.browser && (e = a.process) && (typeof e.versions == "object" && (typeof e.versions.electron == "string" ? (l.push("Node " + e.versions.node), t = "Electron", n = e.versions.electron) : typeof e.versions.nw == "string" && (l.push("Chromium " + n, "Node " + e.versions.node), t = "NW.js", n = e.versions.nw)), t || (t = "Node.js", R = e.arch, r = e.platform, n = /[\d.]+/.exec(e.version), n = n ? n[0] : null));
                else g(e = a.runtime) == te ? (t = "Adobe AIR", r = e.flash.system.Capabilities.os) : g(e = a.phantom) == oe ? (t = "PhantomJS", n = (e = e.version || null) && e.major + "." + e.minor + "." + e.patch) : typeof X.documentMode == "number" && (e = /\bTrident\/(\d+)/i.exec(i)) ? (n = [n, X.documentMode], (e = +e[1] + 4) != n[1] && (l.push("IE " + n[1] + " mode"), s && (s[1] = ""), n[1] = e), n = t == "IE" ? String(n[1].toFixed(1)) : n[0]) : typeof X.documentMode == "number" && /^(?:Chrome|Firefox)\b/.test(t) && (l.push("masking as " + t + " " + n), t = "IE", n = "11.0", s = ["Trident"], r = "Windows");
                r = r && E(r)
            }
            if (n && (e = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(n) || /(?:alpha|beta)(?: ?\d)?/i.exec(i + ";" + (O && d.appMinorVersion)) || /\bMinefield\b/i.test(i) && "a") && (A = /b/i.test(e) ? "beta" : "alpha", n = n.replace(RegExp(e + "\\+?$"), "") + (A == "beta" ? se : le) + (/\d+\+?/.exec(e) || "")), t == "Fennec" || t == "Firefox" && /\b(?:Android|Firefox OS|KaiOS)\b/.test(r)) t = "Firefox Mobile";
            else if (t == "Maxthon" && n) n = n.replace(/\.[\d.]+/, ".x");
            else if (/\bXbox\b/i.test(o)) o == "Xbox 360" && (r = null), o == "Xbox 360" && /\bIEMobile\b/.test(i) && l.unshift("mobile mode");
            else if ((/^(?:Chrome|IE|Opera)$/.test(t) || t && !o && !/Browser|Mobi/.test(t)) && (r == "Windows CE" || /Mobi/i.test(i))) t += " Mobile";
            else if (t == "IE" && O) try {
                a.external === null && l.unshift("platform preview")
            } catch {
                l.unshift("embedded")
            } else(/\bBlackBerry\b/.test(o) || /\bBB10\b/.test(i)) && (e = (RegExp(o.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(i) || 0)[1] || n) ? (e = [e, /BB10/.test(i)], r = (e[1] ? (o = null, c = "BlackBerry") : "Device Software") + " " + e[0], n = null) : this != C && o != "Wii" && (O && v || /Opera/.test(t) && /\b(?:MSIE|Firefox)\b/i.test(i) || t == "Firefox" && /\bOS X (?:\d+\.){2,}/.test(r) || t == "IE" && (r && !/^Win/.test(r) && n > 5.5 || /\bWindows XP\b/.test(r) && n > 8 || n == 8 && !/\bTrident\b/.test(i))) && !w.test(e = P.call(C, i.replace(w, "") + ";")) && e.name && (e = "ing as " + e.name + ((e = e.version) ? " " + e : ""), w.test(t) ? (/\bIE\b/.test(e) && r == "Mac OS" && (r = null), e = "identify" + e) : (e = "mask" + e, W ? t = E(W.replace(/([a-z])([A-Z])/g, "$1 $2")) : t = "Opera", /\bIE\b/.test(e) && (r = null), O || (n = null)), s = ["Presto"], l.push(e));
            (e = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(i) || 0)[1]) && (e = [parseFloat(e.replace(/\.(\d)$/, ".0$1")), e], t == "Safari" && e[1].slice(-1) == "+" ? (t = "WebKit Nightly", A = "alpha", n = e[1].slice(0, -1)) : (n == e[1] || n == (e[2] = (/\bSafari\/([\d.]+\+?)/i.exec(i) || 0)[1])) && (n = null), e[1] = (/\b(?:Headless)?Chrome\/([\d.]+)/i.exec(i) || 0)[1], e[0] == 537.36 && e[2] == 537.36 && parseFloat(e[1]) >= 28 && s == "WebKit" && (s = ["Blink"]), !O || !ie && !e[1] ? (s && (s[1] = "like Safari"), e = (e = e[0], e < 400 ? 1 : e < 500 ? 2 : e < 526 ? 3 : e < 533 ? 4 : e < 534 ? "4+" : e < 535 ? 5 : e < 537 ? 6 : e < 538 ? 7 : e < 601 ? 8 : e < 602 ? 9 : e < 604 ? 10 : e < 606 ? 11 : e < 608 ? 12 : "12")) : (s && (s[1] = "like Chrome"), e = e[1] || (e = e[0], e < 530 ? 1 : e < 532 ? 2 : e < 532.05 ? 3 : e < 533 ? 4 : e < 534.03 ? 5 : e < 534.07 ? 6 : e < 534.1 ? 7 : e < 534.13 ? 8 : e < 534.16 ? 9 : e < 534.24 ? 10 : e < 534.3 ? 11 : e < 535.01 ? 12 : e < 535.02 ? "13+" : e < 535.07 ? 15 : e < 535.11 ? 16 : e < 535.19 ? 17 : e < 536.05 ? 18 : e < 536.1 ? 19 : e < 537.01 ? 20 : e < 537.11 ? "21+" : e < 537.13 ? 23 : e < 537.18 ? 24 : e < 537.24 ? 25 : e < 537.36 ? 26 : s != "Blink" ? "27" : "28")), s && (s[1] += " " + (e += typeof e == "number" ? ".x" : /[.+]/.test(e) ? "" : "+")), t == "Safari" && (!n || parseInt(n) > 45) ? n = e : t == "Chrome" && /\bHeadlessChrome/i.test(i) && l.unshift("headless")), t == "Opera" && (e = /\bzbov|zvav$/.exec(r)) ? (t += " ", l.unshift("desktop mode"), e == "zvav" ? (t += "Mini", n = null) : t += "Mobile", r = r.replace(RegExp(" *" + e + "$"), "")) : t == "Safari" && /\bChrome\b/.exec(s && s[1]) ? (l.unshift("desktop mode"), t = "Chrome Mobile", n = null, /\bOS X\b/.test(r) ? (c = "Apple", r = "iOS 4.3+") : r = null) : /\bSRWare Iron\b/.test(t) && !n && (n = U("Chrome")), n && n.indexOf(e = /[\d.]+$/.exec(r)) == 0 && i.indexOf("/" + e + "-") > -1 && (r = G(r.replace(e, ""))), r && r.indexOf(t) != -1 && !RegExp(t + " OS").test(r) && (r = r.replace(RegExp(" *" + h(t) + " *"), "")), s && !/\b(?:Avant|Nook)\b/.test(t) && (/Browser|Lunascape|Maxthon/.test(t) || t != "Safari" && /^iOS/.test(r) && /\bSafari\b/.test(s[1]) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|SRWare Iron|Vivaldi|Web)/.test(t) && s[1]) && (e = s[s.length - 1]) && l.push(e), l.length && (l = ["(" + l.join("; ") + ")"]), c && o && o.indexOf(c) < 0 && l.push("on " + c), o && l.push((/^on /.test(l[l.length - 1]) ? "" : "on ") + o), r && (e = / ([\d.+]+)$/.exec(r), K = e && r.charAt(r.length - e[0].length - 1) == "/", r = {
                architecture: 32,
                family: e && !K ? r.replace(e[0], "") : r,
                version: e ? e[1] : null,
                toString: function() {
                    var S = this.version;
                    return this.family + (S && !K ? " " + S : "") + (this.architecture == 64 ? " 64-bit" : "")
                }
            }), (e = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(R)) && !/\bi686\b/i.test(R) ? (r && (r.architecture = 64, r.family = r.family.replace(RegExp(" *" + e), "")), t && (/\bWOW64\b/i.test(i) || O && /\w(?:86|32)$/.test(d.cpuClass || d.platform) && !/\bWin64; x64\b/i.test(i)) && l.unshift("32-bit")) : r && /^OS X/.test(r.family) && t == "Chrome" && parseFloat(n) >= 39 && (r.architecture = 64), i || (i = null);
            var x = {};
            return x.description = i, x.layout = s && s[0], x.manufacturer = c, x.name = t, x.prerelease = A, x.product = o, x.ua = i, x.version = t && n, x.os = r || {
                architecture: null,
                family: null,
                version: null,
                toString: function() {
                    return "null"
                }
            }, x.parse = P, x.toString = de, x.version && l.unshift(n), x.name && l.unshift(t), r && t && !(r == String(r).split(" ")[0] && (r == t.split(" ")[0] || o)) && l.push(o ? "(" + r + ")" : "on " + r), l.length && (x.description = l.join(" ")), x
        }
        var L = P();
        T && j ? C(L, function(i, a) {
            T[a] = i
        }) : F.platform = L
    }).call(N)
})(k, k.exports);
k.exports;