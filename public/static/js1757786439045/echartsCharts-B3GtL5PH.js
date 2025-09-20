/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var rs = function(e, t) {
    return rs = Object.setPrototypeOf || {
        __proto__: []
    }
    instanceof Array && function(r, n) {
        r.__proto__ = n
    } || function(r, n) {
        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (r[i] = n[i])
    }, rs(e, t)
};

function W(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    rs(e, t);

    function r() {
        this.constructor = e
    }
    e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r)
}
var dd = function() {
        function e() {
            this.firefox = !1, this.ie = !1, this.edge = !1, this.newEdge = !1, this.weChat = !1
        }
        return e
    }(),
    pd = function() {
        function e() {
            this.browser = new dd, this.node = !1, this.wxa = !1, this.worker = !1, this.svgSupported = !1, this.touchEventsSupported = !1, this.pointerEventsSupported = !1, this.domSupported = !1, this.transformSupported = !1, this.transform3dSupported = !1, this.hasGlobalWindow = typeof window < "u"
        }
        return e
    }(),
    K = new pd;
typeof wx == "object" && typeof wx.getSystemInfoSync == "function" ? (K.wxa = !0, K.touchEventsSupported = !0) : typeof document > "u" && typeof self < "u" ? K.worker = !0 : !K.hasGlobalWindow || "Deno" in window ? (K.node = !0, K.svgSupported = !0) : gd(navigator.userAgent, K);

function gd(e, t) {
    var r = t.browser,
        n = e.match(/Firefox\/([\d.]+)/),
        i = e.match(/MSIE\s([\d.]+)/) || e.match(/Trident\/.+?rv:(([\d.]+))/),
        a = e.match(/Edge?\/([\d.]+)/),
        o = /micromessenger/i.test(e);
    n && (r.firefox = !0, r.version = n[1]), i && (r.ie = !0, r.version = i[1]), a && (r.edge = !0, r.version = a[1], r.newEdge = +a[1].split(".")[0] > 18), o && (r.weChat = !0), t.svgSupported = typeof SVGRect < "u", t.touchEventsSupported = "ontouchstart" in window && !r.ie && !r.edge, t.pointerEventsSupported = "onpointerdown" in window && (r.edge || r.ie && +r.version >= 11), t.domSupported = typeof document < "u";
    var s = document.documentElement.style;
    t.transform3dSupported = (r.ie && "transition" in s || r.edge || "WebKitCSSMatrix" in window && "m11" in new WebKitCSSMatrix || "MozPerspective" in s) && !("OTransition" in s), t.transformSupported = t.transform3dSupported || r.ie && +r.version >= 9
}
var Ks = 12,
    yd = "sans-serif",
    Cr = Ks + "px " + yd,
    md = 20,
    _d = 100,
    Sd = "007LLmW'55;N0500LLLLLLLLLL00NNNLzWW\\\\WQb\\0FWLg\\bWb\\WQ\\WrWWQ000CL5LLFLL0LL**F*gLLLL5F0LF\\FFF5.5N";

function wd(e) {
    var t = {};
    if (typeof JSON > "u") return t;
    for (var r = 0; r < e.length; r++) {
        var n = String.fromCharCode(r + 32),
            i = (e.charCodeAt(r) - md) / _d;
        t[n] = i
    }
    return t
}
var Td = wd(Sd),
    oi = {
        createCanvas: function() {
            return typeof document < "u" && document.createElement("canvas")
        },
        measureText: function() {
            var e, t;
            return function(r, n) {
                if (!e) {
                    var i = oi.createCanvas();
                    e = i && i.getContext("2d")
                }
                if (e) return t !== n && (t = e.font = n || Cr), e.measureText(r);
                r = r || "", n = n || Cr;
                var a = /((?:\d+)?\.?\d*)px/.exec(n),
                    o = a && +a[1] || Ks,
                    s = 0;
                if (n.indexOf("mono") >= 0) s = o * r.length;
                else
                    for (var u = 0; u < r.length; u++) {
                        var l = Td[r[u]];
                        s += l == null ? o : l * o
                    }
                return {
                    width: s
                }
            }
        }(),
        loadImage: function(e, t, r) {
            var n = new Image;
            return n.onload = t, n.onerror = r, n.src = e, n
        }
    },
    gh = Ze(["Function", "RegExp", "Date", "Error", "CanvasGradient", "CanvasPattern", "Image", "Canvas"], function(e, t) {
        return e["[object " + t + "]"] = !0, e
    }, {}),
    yh = Ze(["Int8", "Uint8", "Uint8Clamped", "Int16", "Uint16", "Int32", "Uint32", "Float32", "Float64"], function(e, t) {
        return e["[object " + t + "Array]"] = !0, e
    }, {}),
    an = Object.prototype.toString,
    Aa = Array.prototype,
    bd = Aa.forEach,
    Dd = Aa.filter,
    Qs = Aa.slice,
    Md = Aa.map,
    zu = (function() {}).constructor,
    ci = zu ? zu.prototype : null,
    Js = "__proto__",
    Cd = 2311;

function mh() {
    return Cd++
}

function _h() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    typeof console < "u" && console.error.apply(console, e)
}

function tt(e) {
    if (e == null || typeof e != "object") return e;
    var t = e,
        r = an.call(e);
    if (r === "[object Array]") {
        if (!zn(e)) {
            t = [];
            for (var n = 0, i = e.length; n < i; n++) t[n] = tt(e[n])
        }
    } else if (yh[r]) {
        if (!zn(e)) {
            var a = e.constructor;
            if (a.from) t = a.from(e);
            else {
                t = new a(e.length);
                for (var n = 0, i = e.length; n < i; n++) t[n] = e[n]
            }
        }
    } else if (!gh[r] && !zn(e) && !is(e)) {
        t = {};
        for (var o in e) e.hasOwnProperty(o) && o !== Js && (t[o] = tt(e[o]))
    }
    return t
}

function ct(e, t, r) {
    if (!H(t) || !H(e)) return r ? tt(t) : e;
    for (var n in t)
        if (t.hasOwnProperty(n) && n !== Js) {
            var i = e[n],
                a = t[n];
            H(a) && H(i) && !F(a) && !F(i) && !is(a) && !is(i) && !Hu(a) && !Hu(i) && !zn(a) && !zn(i) ? ct(i, a, r) : (r || !(n in e)) && (e[n] = tt(t[n]))
        }
    return e
}

function US(e, t) {
    for (var r = e[0], n = 1, i = e.length; n < i; n++) r = ct(r, e[n], t);
    return r
}

function I(e, t) {
    if (Object.assign) Object.assign(e, t);
    else
        for (var r in t) t.hasOwnProperty(r) && r !== Js && (e[r] = t[r]);
    return e
}

function dt(e, t, r) {
    for (var n = ht(t), i = 0, a = n.length; i < a; i++) {
        var o = n[i];
        (r ? t[o] != null : e[o] == null) && (e[o] = t[o])
    }
    return e
}

function ft(e, t) {
    if (e) {
        if (e.indexOf) return e.indexOf(t);
        for (var r = 0, n = e.length; r < n; r++)
            if (e[r] === t) return r
    }
    return -1
}

function Pd(e, t) {
    var r = e.prototype;

    function n() {}
    n.prototype = t.prototype, e.prototype = new n;
    for (var i in r) r.hasOwnProperty(i) && (e.prototype[i] = r[i]);
    e.prototype.constructor = e, e.superClass = t
}

function Ie(e, t, r) {
    if (e = "prototype" in e ? e.prototype : e, t = "prototype" in t ? t.prototype : t, Object.getOwnPropertyNames)
        for (var n = Object.getOwnPropertyNames(t), i = 0; i < n.length; i++) {
            var a = n[i];
            a !== "constructor" && (r ? t[a] != null : e[a] == null) && (e[a] = t[a])
        } else dt(e, t, r)
}

function Bt(e) {
    return !e || typeof e == "string" ? !1 : typeof e.length == "number"
}

function P(e, t, r) {
    if (e && t)
        if (e.forEach && e.forEach === bd) e.forEach(t, r);
        else if (e.length === +e.length)
        for (var n = 0, i = e.length; n < i; n++) t.call(r, e[n], n, e);
    else
        for (var a in e) e.hasOwnProperty(a) && t.call(r, e[a], a, e)
}

function Q(e, t, r) {
    if (!e) return [];
    if (!t) return tu(e);
    if (e.map && e.map === Md) return e.map(t, r);
    for (var n = [], i = 0, a = e.length; i < a; i++) n.push(t.call(r, e[i], i, e));
    return n
}

function Ze(e, t, r, n) {
    if (e && t) {
        for (var i = 0, a = e.length; i < a; i++) r = t.call(n, r, e[i], i, e);
        return r
    }
}

function ie(e, t, r) {
    if (!e) return [];
    if (!t) return tu(e);
    if (e.filter && e.filter === Dd) return e.filter(t, r);
    for (var n = [], i = 0, a = e.length; i < a; i++) t.call(r, e[i], i, e) && n.push(e[i]);
    return n
}

function YS(e, t, r) {
    if (e && t) {
        for (var n = 0, i = e.length; n < i; n++)
            if (t.call(r, e[n], n, e)) return e[n]
    }
}

function ht(e) {
    if (!e) return [];
    if (Object.keys) return Object.keys(e);
    var t = [];
    for (var r in e) e.hasOwnProperty(r) && t.push(r);
    return t
}

function Ad(e, t) {
    for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
    return function() {
        return e.apply(t, r.concat(Qs.call(arguments)))
    }
}
var Ct = ci && rt(ci.bind) ? ci.call.bind(ci.bind) : Ad;

function si(e) {
    for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
    return function() {
        return e.apply(this, t.concat(Qs.call(arguments)))
    }
}

function F(e) {
    return Array.isArray ? Array.isArray(e) : an.call(e) === "[object Array]"
}

function rt(e) {
    return typeof e == "function"
}

function X(e) {
    return typeof e == "string"
}

function ns(e) {
    return an.call(e) === "[object String]"
}

function at(e) {
    return typeof e == "number"
}

function H(e) {
    var t = typeof e;
    return t === "function" || !!e && t === "object"
}

function Hu(e) {
    return !!gh[an.call(e)]
}

function zt(e) {
    return !!yh[an.call(e)]
}

function is(e) {
    return typeof e == "object" && typeof e.nodeType == "number" && typeof e.ownerDocument == "object"
}

function js(e) {
    return e.colorStops != null
}

function WS(e) {
    return e.image != null
}

function XS(e) {
    return an.call(e) === "[object RegExp]"
}

function Rd(e) {
    return e !== e
}

function qS() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    for (var r = 0, n = e.length; r < n; r++)
        if (e[r] != null) return e[r]
}

function q(e, t) {
    return e ? ? t
}

function Bn(e, t, r) {
    return e ? ? t ? ? r
}

function tu(e) {
    for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
    return Qs.apply(e, t)
}

function Sh(e) {
    if (typeof e == "number") return [e, e, e, e];
    var t = e.length;
    return t === 2 ? [e[0], e[1], e[0], e[1]] : t === 3 ? [e[0], e[1], e[2], e[1]] : e
}

function Te(e, t) {
    if (!e) throw new Error(t)
}

function xe(e) {
    return e == null ? null : typeof e.trim == "function" ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
}
var wh = "__ec_primitive__";

function aa(e) {
    e[wh] = !0
}

function zn(e) {
    return e[wh]
}
var xd = function() {
        function e() {
            this.data = {}
        }
        return e.prototype.delete = function(t) {
            var r = this.has(t);
            return r && delete this.data[t], r
        }, e.prototype.has = function(t) {
            return this.data.hasOwnProperty(t)
        }, e.prototype.get = function(t) {
            return this.data[t]
        }, e.prototype.set = function(t, r) {
            return this.data[t] = r, this
        }, e.prototype.keys = function() {
            return ht(this.data)
        }, e.prototype.forEach = function(t) {
            var r = this.data;
            for (var n in r) r.hasOwnProperty(n) && t(r[n], n)
        }, e
    }(),
    Th = typeof Map == "function";

function Ld() {
    return Th ? new Map : new xd
}
var Id = function() {
    function e(t) {
        var r = F(t);
        this.data = Ld();
        var n = this;
        t instanceof e ? t.each(i) : t && P(t, i);

        function i(a, o) {
            r ? n.set(a, o) : n.set(o, a)
        }
    }
    return e.prototype.hasKey = function(t) {
        return this.data.has(t)
    }, e.prototype.get = function(t) {
        return this.data.get(t)
    }, e.prototype.set = function(t, r) {
        return this.data.set(t, r), r
    }, e.prototype.each = function(t, r) {
        this.data.forEach(function(n, i) {
            t.call(r, n, i)
        })
    }, e.prototype.keys = function() {
        var t = this.data.keys();
        return Th ? Array.from(t) : t
    }, e.prototype.removeKey = function(t) {
        this.data.delete(t)
    }, e
}();

function Z(e) {
    return new Id(e)
}

function Ed(e, t) {
    for (var r = new e.constructor(e.length + t.length), n = 0; n < e.length; n++) r[n] = e[n];
    for (var i = e.length, n = 0; n < t.length; n++) r[n + i] = t[n];
    return r
}

function Ra(e, t) {
    var r;
    if (Object.create) r = Object.create(e);
    else {
        var n = function() {};
        n.prototype = e, r = new n
    }
    return t && I(r, t), r
}

function $S(e) {
    var t = e.style;
    t.webkitUserSelect = "none", t.userSelect = "none", t.webkitTapHighlightColor = "rgba(0,0,0,0)", t["-webkit-touch-callout"] = "none"
}

function Pr(e, t) {
    return e.hasOwnProperty(t)
}

function Qt() {}
var Yi = 180 / Math.PI;

function on(e, t) {
    return e == null && (e = 0), t == null && (t = 0), [e, t]
}

function ZS(e, t) {
    return e[0] = t[0], e[1] = t[1], e
}

function Od(e) {
    return [e[0], e[1]]
}

function KS(e, t, r) {
    return e[0] = t, e[1] = r, e
}

function Gu(e, t, r) {
    return e[0] = t[0] + r[0], e[1] = t[1] + r[1], e
}

function QS(e, t, r, n) {
    return e[0] = t[0] + r[0] * n, e[1] = t[1] + r[1] * n, e
}

function kd(e, t, r) {
    return e[0] = t[0] - r[0], e[1] = t[1] - r[1], e
}

function Fd(e) {
    return Math.sqrt(Nd(e))
}

function Nd(e) {
    return e[0] * e[0] + e[1] * e[1]
}

function $a(e, t, r) {
    return e[0] = t[0] * r, e[1] = t[1] * r, e
}

function Bd(e, t) {
    var r = Fd(t);
    return r === 0 ? (e[0] = 0, e[1] = 0) : (e[0] = t[0] / r, e[1] = t[1] / r), e
}

function as(e, t) {
    return Math.sqrt((e[0] - t[0]) * (e[0] - t[0]) + (e[1] - t[1]) * (e[1] - t[1]))
}
var os = as;

function zd(e, t) {
    return (e[0] - t[0]) * (e[0] - t[0]) + (e[1] - t[1]) * (e[1] - t[1])
}
var Jr = zd;

function Za(e, t, r, n) {
    return e[0] = t[0] + n * (r[0] - t[0]), e[1] = t[1] + n * (r[1] - t[1]), e
}

function jr(e, t, r) {
    var n = t[0],
        i = t[1];
    return e[0] = r[0] * n + r[2] * i + r[4], e[1] = r[1] * n + r[3] * i + r[5], e
}

function qr(e, t, r) {
    return e[0] = Math.min(t[0], r[0]), e[1] = Math.min(t[1], r[1]), e
}

function $r(e, t, r) {
    return e[0] = Math.max(t[0], r[0]), e[1] = Math.max(t[1], r[1]), e
}
var Er = function() {
        function e(t, r) {
            this.target = t, this.topTarget = r && r.topTarget
        }
        return e
    }(),
    Hd = function() {
        function e(t) {
            this.handler = t, t.on("mousedown", this._dragStart, this), t.on("mousemove", this._drag, this), t.on("mouseup", this._dragEnd, this)
        }
        return e.prototype._dragStart = function(t) {
            for (var r = t.target; r && !r.draggable;) r = r.parent || r.__hostTarget;
            r && (this._draggingTarget = r, r.dragging = !0, this._x = t.offsetX, this._y = t.offsetY, this.handler.dispatchToElement(new Er(r, t), "dragstart", t.event))
        }, e.prototype._drag = function(t) {
            var r = this._draggingTarget;
            if (r) {
                var n = t.offsetX,
                    i = t.offsetY,
                    a = n - this._x,
                    o = i - this._y;
                this._x = n, this._y = i, r.drift(a, o, t), this.handler.dispatchToElement(new Er(r, t), "drag", t.event);
                var s = this.handler.findHover(n, i, r).target,
                    u = this._dropTarget;
                this._dropTarget = s, r !== s && (u && s !== u && this.handler.dispatchToElement(new Er(u, t), "dragleave", t.event), s && s !== u && this.handler.dispatchToElement(new Er(s, t), "dragenter", t.event))
            }
        }, e.prototype._dragEnd = function(t) {
            var r = this._draggingTarget;
            r && (r.dragging = !1), this.handler.dispatchToElement(new Er(r, t), "dragend", t.event), this._dropTarget && this.handler.dispatchToElement(new Er(this._dropTarget, t), "drop", t.event), this._draggingTarget = null, this._dropTarget = null
        }, e
    }(),
    Ee = function() {
        function e(t) {
            t && (this._$eventProcessor = t)
        }
        return e.prototype.on = function(t, r, n, i) {
            this._$handlers || (this._$handlers = {});
            var a = this._$handlers;
            if (typeof r == "function" && (i = n, n = r, r = null), !n || !t) return this;
            var o = this._$eventProcessor;
            r != null && o && o.normalizeQuery && (r = o.normalizeQuery(r)), a[t] || (a[t] = []);
            for (var s = 0; s < a[t].length; s++)
                if (a[t][s].h === n) return this;
            var u = {
                    h: n,
                    query: r,
                    ctx: i || this,
                    callAtLast: n.zrEventfulCallAtLast
                },
                l = a[t].length - 1,
                f = a[t][l];
            return f && f.callAtLast ? a[t].splice(l, 0, u) : a[t].push(u), this
        }, e.prototype.isSilent = function(t) {
            var r = this._$handlers;
            return !r || !r[t] || !r[t].length
        }, e.prototype.off = function(t, r) {
            var n = this._$handlers;
            if (!n) return this;
            if (!t) return this._$handlers = {}, this;
            if (r) {
                if (n[t]) {
                    for (var i = [], a = 0, o = n[t].length; a < o; a++) n[t][a].h !== r && i.push(n[t][a]);
                    n[t] = i
                }
                n[t] && n[t].length === 0 && delete n[t]
            } else delete n[t];
            return this
        }, e.prototype.trigger = function(t) {
            for (var r = [], n = 1; n < arguments.length; n++) r[n - 1] = arguments[n];
            if (!this._$handlers) return this;
            var i = this._$handlers[t],
                a = this._$eventProcessor;
            if (i)
                for (var o = r.length, s = i.length, u = 0; u < s; u++) {
                    var l = i[u];
                    if (!(a && a.filter && l.query != null && !a.filter(t, l.query))) switch (o) {
                        case 0:
                            l.h.call(l.ctx);
                            break;
                        case 1:
                            l.h.call(l.ctx, r[0]);
                            break;
                        case 2:
                            l.h.call(l.ctx, r[0], r[1]);
                            break;
                        default:
                            l.h.apply(l.ctx, r);
                            break
                    }
                }
            return a && a.afterTrigger && a.afterTrigger(t), this
        }, e.prototype.triggerWithContext = function(t) {
            for (var r = [], n = 1; n < arguments.length; n++) r[n - 1] = arguments[n];
            if (!this._$handlers) return this;
            var i = this._$handlers[t],
                a = this._$eventProcessor;
            if (i)
                for (var o = r.length, s = r[o - 1], u = i.length, l = 0; l < u; l++) {
                    var f = i[l];
                    if (!(a && a.filter && f.query != null && !a.filter(t, f.query))) switch (o) {
                        case 0:
                            f.h.call(s);
                            break;
                        case 1:
                            f.h.call(s, r[0]);
                            break;
                        case 2:
                            f.h.call(s, r[0], r[1]);
                            break;
                        default:
                            f.h.apply(s, r.slice(1, o - 1));
                            break
                    }
                }
            return a && a.afterTrigger && a.afterTrigger(t), this
        }, e
    }(),
    Gd = Math.log(2);

function ss(e, t, r, n, i, a) {
    var o = n + "-" + i,
        s = e.length;
    if (a.hasOwnProperty(o)) return a[o];
    if (t === 1) {
        var u = Math.round(Math.log((1 << s) - 1 & ~i) / Gd);
        return e[r][u]
    }
    for (var l = n | 1 << r, f = r + 1; n & 1 << f;) f++;
    for (var h = 0, c = 0, v = 0; c < s; c++) {
        var d = 1 << c;
        d & i || (h += (v % 2 ? -1 : 1) * e[r][c] * ss(e, t - 1, f, l, i | d, a), v++)
    }
    return a[o] = h, h
}

function Vu(e, t) {
    var r = [
            [e[0], e[1], 1, 0, 0, 0, -t[0] * e[0], -t[0] * e[1]],
            [0, 0, 0, e[0], e[1], 1, -t[1] * e[0], -t[1] * e[1]],
            [e[2], e[3], 1, 0, 0, 0, -t[2] * e[2], -t[2] * e[3]],
            [0, 0, 0, e[2], e[3], 1, -t[3] * e[2], -t[3] * e[3]],
            [e[4], e[5], 1, 0, 0, 0, -t[4] * e[4], -t[4] * e[5]],
            [0, 0, 0, e[4], e[5], 1, -t[5] * e[4], -t[5] * e[5]],
            [e[6], e[7], 1, 0, 0, 0, -t[6] * e[6], -t[6] * e[7]],
            [0, 0, 0, e[6], e[7], 1, -t[7] * e[6], -t[7] * e[7]]
        ],
        n = {},
        i = ss(r, 8, 0, 0, 0, n);
    if (i !== 0) {
        for (var a = [], o = 0; o < 8; o++)
            for (var s = 0; s < 8; s++) a[s] == null && (a[s] = 0), a[s] += ((o + s) % 2 ? -1 : 1) * ss(r, 7, o === 0 ? 1 : 0, 1 << o, 1 << s, n) / i * t[o];
        return function(u, l, f) {
            var h = l * a[6] + f * a[7] + 1;
            u[0] = (l * a[0] + f * a[1] + a[2]) / h, u[1] = (l * a[3] + f * a[4] + a[5]) / h
        }
    }
}
var Uu = "___zrEVENTSAVED",
    Ka = [];

function JS(e, t, r, n, i) {
    return us(Ka, t, n, i, !0) && us(e, r, Ka[0], Ka[1])
}

function us(e, t, r, n, i) {
    if (t.getBoundingClientRect && K.domSupported && !bh(t)) {
        var a = t[Uu] || (t[Uu] = {}),
            o = Vd(t, a),
            s = Ud(o, a, i);
        if (s) return s(e, r, n), !0
    }
    return !1
}

function Vd(e, t) {
    var r = t.markers;
    if (r) return r;
    r = t.markers = [];
    for (var n = ["left", "right"], i = ["top", "bottom"], a = 0; a < 4; a++) {
        var o = document.createElement("div"),
            s = o.style,
            u = a % 2,
            l = (a >> 1) % 2;
        s.cssText = ["position: absolute", "visibility: hidden", "padding: 0", "margin: 0", "border-width: 0", "user-select: none", "width:0", "height:0", n[u] + ":0", i[l] + ":0", n[1 - u] + ":auto", i[1 - l] + ":auto", ""].join("!important;"), e.appendChild(o), r.push(o)
    }
    return r
}

function Ud(e, t, r) {
    for (var n = r ? "invTrans" : "trans", i = t[n], a = t.srcCoords, o = [], s = [], u = !0, l = 0; l < 4; l++) {
        var f = e[l].getBoundingClientRect(),
            h = 2 * l,
            c = f.left,
            v = f.top;
        o.push(c, v), u = u && a && c === a[h] && v === a[h + 1], s.push(e[l].offsetLeft, e[l].offsetTop)
    }
    return u && i ? i : (t.srcCoords = o, t[n] = r ? Vu(s, o) : Vu(o, s))
}

function bh(e) {
    return e.nodeName.toUpperCase() === "CANVAS"
}
var Yd = /([&<>"'])/g,
    Wd = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    };

function Ut(e) {
    return e == null ? "" : (e + "").replace(Yd, function(t, r) {
        return Wd[r]
    })
}
var Xd = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    Qa = [],
    qd = K.browser.firefox && +K.browser.version.split(".")[0] < 39;

function ls(e, t, r, n) {
    return r = r || {}, n ? Yu(e, t, r) : qd && t.layerX != null && t.layerX !== t.offsetX ? (r.zrX = t.layerX, r.zrY = t.layerY) : t.offsetX != null ? (r.zrX = t.offsetX, r.zrY = t.offsetY) : Yu(e, t, r), r
}

function Yu(e, t, r) {
    if (K.domSupported && e.getBoundingClientRect) {
        var n = t.clientX,
            i = t.clientY;
        if (bh(e)) {
            var a = e.getBoundingClientRect();
            r.zrX = n - a.left, r.zrY = i - a.top;
            return
        } else if (us(Qa, e, n, i)) {
            r.zrX = Qa[0], r.zrY = Qa[1];
            return
        }
    }
    r.zrX = r.zrY = 0
}

function eu(e) {
    return e || window.event
}

function te(e, t, r) {
    if (t = eu(t), t.zrX != null) return t;
    var n = t.type,
        i = n && n.indexOf("touch") >= 0;
    if (i) {
        var o = n !== "touchend" ? t.targetTouches[0] : t.changedTouches[0];
        o && ls(e, o, t, r)
    } else {
        ls(e, t, t, r);
        var a = $d(t);
        t.zrDelta = a ? a / 120 : -(t.detail || 0) / 3
    }
    var s = t.button;
    return t.which == null && s !== void 0 && Xd.test(t.type) && (t.which = s & 1 ? 1 : s & 2 ? 3 : s & 4 ? 2 : 0), t
}

function $d(e) {
    var t = e.wheelDelta;
    if (t) return t;
    var r = e.deltaX,
        n = e.deltaY;
    if (r == null || n == null) return t;
    var i = Math.abs(n !== 0 ? n : r),
        a = n > 0 ? -1 : n < 0 ? 1 : r > 0 ? -1 : 1;
    return 3 * i * a
}

function Zd(e, t, r, n) {
    e.addEventListener(t, r, n)
}

function Kd(e, t, r, n) {
    e.removeEventListener(t, r, n)
}
var Qd = function(e) {
    e.preventDefault(), e.stopPropagation(), e.cancelBubble = !0
};

function jS(e) {
    return e.which === 2 || e.which === 3
}
var Jd = function() {
    function e() {
        this._track = []
    }
    return e.prototype.recognize = function(t, r, n) {
        return this._doTrack(t, r, n), this._recognize(t)
    }, e.prototype.clear = function() {
        return this._track.length = 0, this
    }, e.prototype._doTrack = function(t, r, n) {
        var i = t.touches;
        if (i) {
            for (var a = {
                    points: [],
                    touches: [],
                    target: r,
                    event: t
                }, o = 0, s = i.length; o < s; o++) {
                var u = i[o],
                    l = ls(n, u, {});
                a.points.push([l.zrX, l.zrY]), a.touches.push(u)
            }
            this._track.push(a)
        }
    }, e.prototype._recognize = function(t) {
        for (var r in Ja)
            if (Ja.hasOwnProperty(r)) {
                var n = Ja[r](this._track, t);
                if (n) return n
            }
    }, e
}();

function Wu(e) {
    var t = e[1][0] - e[0][0],
        r = e[1][1] - e[0][1];
    return Math.sqrt(t * t + r * r)
}

function jd(e) {
    return [(e[0][0] + e[1][0]) / 2, (e[0][1] + e[1][1]) / 2]
}
var Ja = {
    pinch: function(e, t) {
        var r = e.length;
        if (r) {
            var n = (e[r - 1] || {}).points,
                i = (e[r - 2] || {}).points || n;
            if (i && i.length > 1 && n && n.length > 1) {
                var a = Wu(n) / Wu(i);
                !isFinite(a) && (a = 1), t.pinchScale = a;
                var o = jd(n);
                return t.pinchX = o[0], t.pinchY = o[1], {
                    type: "pinch",
                    target: e[0].target,
                    event: t
                }
            }
        }
    }
};

function tn() {
    return [1, 0, 0, 1, 0, 0]
}

function Dh(e) {
    return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 1, e[4] = 0, e[5] = 0, e
}

function Mh(e, t) {
    return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e
}

function Wi(e, t, r) {
    var n = t[0] * r[0] + t[2] * r[1],
        i = t[1] * r[0] + t[3] * r[1],
        a = t[0] * r[2] + t[2] * r[3],
        o = t[1] * r[2] + t[3] * r[3],
        s = t[0] * r[4] + t[2] * r[5] + t[4],
        u = t[1] * r[4] + t[3] * r[5] + t[5];
    return e[0] = n, e[1] = i, e[2] = a, e[3] = o, e[4] = s, e[5] = u, e
}

function Xu(e, t, r) {
    return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4] + r[0], e[5] = t[5] + r[1], e
}

function tp(e, t, r, n) {
    n === void 0 && (n = [0, 0]);
    var i = t[0],
        a = t[2],
        o = t[4],
        s = t[1],
        u = t[3],
        l = t[5],
        f = Math.sin(r),
        h = Math.cos(r);
    return e[0] = i * h + s * f, e[1] = -i * f + s * h, e[2] = a * h + u * f, e[3] = -a * f + h * u, e[4] = h * (o - n[0]) + f * (l - n[1]) + n[0], e[5] = h * (l - n[1]) - f * (o - n[0]) + n[1], e
}

function ep(e, t, r) {
    var n = r[0],
        i = r[1];
    return e[0] = t[0] * n, e[1] = t[1] * i, e[2] = t[2] * n, e[3] = t[3] * i, e[4] = t[4] * n, e[5] = t[5] * i, e
}

function ru(e, t) {
    var r = t[0],
        n = t[2],
        i = t[4],
        a = t[1],
        o = t[3],
        s = t[5],
        u = r * o - a * n;
    return u ? (u = 1 / u, e[0] = o * u, e[1] = -a * u, e[2] = -n * u, e[3] = r * u, e[4] = (n * s - o * i) * u, e[5] = (a * i - r * s) * u, e) : null
}

function tw(e) {
    var t = tn();
    return Mh(t, e), t
}
var B = function() {
        function e(t, r) {
            this.x = t || 0, this.y = r || 0
        }
        return e.prototype.copy = function(t) {
            return this.x = t.x, this.y = t.y, this
        }, e.prototype.clone = function() {
            return new e(this.x, this.y)
        }, e.prototype.set = function(t, r) {
            return this.x = t, this.y = r, this
        }, e.prototype.equal = function(t) {
            return t.x === this.x && t.y === this.y
        }, e.prototype.add = function(t) {
            return this.x += t.x, this.y += t.y, this
        }, e.prototype.scale = function(t) {
            this.x *= t, this.y *= t
        }, e.prototype.scaleAndAdd = function(t, r) {
            this.x += t.x * r, this.y += t.y * r
        }, e.prototype.sub = function(t) {
            return this.x -= t.x, this.y -= t.y, this
        }, e.prototype.dot = function(t) {
            return this.x * t.x + this.y * t.y
        }, e.prototype.len = function() {
            return Math.sqrt(this.x * this.x + this.y * this.y)
        }, e.prototype.lenSquare = function() {
            return this.x * this.x + this.y * this.y
        }, e.prototype.normalize = function() {
            var t = this.len();
            return this.x /= t, this.y /= t, this
        }, e.prototype.distance = function(t) {
            var r = this.x - t.x,
                n = this.y - t.y;
            return Math.sqrt(r * r + n * n)
        }, e.prototype.distanceSquare = function(t) {
            var r = this.x - t.x,
                n = this.y - t.y;
            return r * r + n * n
        }, e.prototype.negate = function() {
            return this.x = -this.x, this.y = -this.y, this
        }, e.prototype.transform = function(t) {
            if (t) {
                var r = this.x,
                    n = this.y;
                return this.x = t[0] * r + t[2] * n + t[4], this.y = t[1] * r + t[3] * n + t[5], this
            }
        }, e.prototype.toArray = function(t) {
            return t[0] = this.x, t[1] = this.y, t
        }, e.prototype.fromArray = function(t) {
            this.x = t[0], this.y = t[1]
        }, e.set = function(t, r, n) {
            t.x = r, t.y = n
        }, e.copy = function(t, r) {
            t.x = r.x, t.y = r.y
        }, e.len = function(t) {
            return Math.sqrt(t.x * t.x + t.y * t.y)
        }, e.lenSquare = function(t) {
            return t.x * t.x + t.y * t.y
        }, e.dot = function(t, r) {
            return t.x * r.x + t.y * r.y
        }, e.add = function(t, r, n) {
            t.x = r.x + n.x, t.y = r.y + n.y
        }, e.sub = function(t, r, n) {
            t.x = r.x - n.x, t.y = r.y - n.y
        }, e.scale = function(t, r, n) {
            t.x = r.x * n, t.y = r.y * n
        }, e.scaleAndAdd = function(t, r, n, i) {
            t.x = r.x + n.x * i, t.y = r.y + n.y * i
        }, e.lerp = function(t, r, n, i) {
            var a = 1 - i;
            t.x = a * r.x + i * n.x, t.y = a * r.y + i * n.y
        }, e
    }(),
    di = Math.min,
    pi = Math.max,
    Je = new B,
    je = new B,
    tr = new B,
    er = new B,
    cn = new B,
    dn = new B,
    nt = function() {
        function e(t, r, n, i) {
            n < 0 && (t = t + n, n = -n), i < 0 && (r = r + i, i = -i), this.x = t, this.y = r, this.width = n, this.height = i
        }
        return e.prototype.union = function(t) {
            var r = di(t.x, this.x),
                n = di(t.y, this.y);
            isFinite(this.x) && isFinite(this.width) ? this.width = pi(t.x + t.width, this.x + this.width) - r : this.width = t.width, isFinite(this.y) && isFinite(this.height) ? this.height = pi(t.y + t.height, this.y + this.height) - n : this.height = t.height, this.x = r, this.y = n
        }, e.prototype.applyTransform = function(t) {
            e.applyTransform(this, this, t)
        }, e.prototype.calculateTransform = function(t) {
            var r = this,
                n = t.width / r.width,
                i = t.height / r.height,
                a = tn();
            return Xu(a, a, [-r.x, -r.y]), ep(a, a, [n, i]), Xu(a, a, [t.x, t.y]), a
        }, e.prototype.intersect = function(t, r) {
            if (!t) return !1;
            t instanceof e || (t = e.create(t));
            var n = this,
                i = n.x,
                a = n.x + n.width,
                o = n.y,
                s = n.y + n.height,
                u = t.x,
                l = t.x + t.width,
                f = t.y,
                h = t.y + t.height,
                c = !(a < u || l < i || s < f || h < o);
            if (r) {
                var v = 1 / 0,
                    d = 0,
                    g = Math.abs(a - u),
                    p = Math.abs(l - i),
                    y = Math.abs(s - f),
                    m = Math.abs(h - o),
                    _ = Math.min(g, p),
                    S = Math.min(y, m);
                a < u || l < i ? _ > d && (d = _, g < p ? B.set(dn, -g, 0) : B.set(dn, p, 0)) : _ < v && (v = _, g < p ? B.set(cn, g, 0) : B.set(cn, -p, 0)), s < f || h < o ? S > d && (d = S, y < m ? B.set(dn, 0, -y) : B.set(dn, 0, m)) : _ < v && (v = _, y < m ? B.set(cn, 0, y) : B.set(cn, 0, -m))
            }
            return r && B.copy(r, c ? cn : dn), c
        }, e.prototype.contain = function(t, r) {
            var n = this;
            return t >= n.x && t <= n.x + n.width && r >= n.y && r <= n.y + n.height
        }, e.prototype.clone = function() {
            return new e(this.x, this.y, this.width, this.height)
        }, e.prototype.copy = function(t) {
            e.copy(this, t)
        }, e.prototype.plain = function() {
            return {
                x: this.x,
                y: this.y,
                width: this.width,
                height: this.height
            }
        }, e.prototype.isFinite = function() {
            return isFinite(this.x) && isFinite(this.y) && isFinite(this.width) && isFinite(this.height)
        }, e.prototype.isZero = function() {
            return this.width === 0 || this.height === 0
        }, e.create = function(t) {
            return new e(t.x, t.y, t.width, t.height)
        }, e.copy = function(t, r) {
            t.x = r.x, t.y = r.y, t.width = r.width, t.height = r.height
        }, e.applyTransform = function(t, r, n) {
            if (!n) {
                t !== r && e.copy(t, r);
                return
            }
            if (n[1] < 1e-5 && n[1] > -1e-5 && n[2] < 1e-5 && n[2] > -1e-5) {
                var i = n[0],
                    a = n[3],
                    o = n[4],
                    s = n[5];
                t.x = r.x * i + o, t.y = r.y * a + s, t.width = r.width * i, t.height = r.height * a, t.width < 0 && (t.x += t.width, t.width = -t.width), t.height < 0 && (t.y += t.height, t.height = -t.height);
                return
            }
            Je.x = tr.x = r.x, Je.y = er.y = r.y, je.x = er.x = r.x + r.width, je.y = tr.y = r.y + r.height, Je.transform(n), er.transform(n), je.transform(n), tr.transform(n), t.x = di(Je.x, je.x, tr.x, er.x), t.y = di(Je.y, je.y, tr.y, er.y);
            var u = pi(Je.x, je.x, tr.x, er.x),
                l = pi(Je.y, je.y, tr.y, er.y);
            t.width = u - t.x, t.height = l - t.y
        }, e
    }(),
    Ch = "silent";

function rp(e, t, r) {
    return {
        type: e,
        event: r,
        target: t.target,
        topTarget: t.topTarget,
        cancelBubble: !1,
        offsetX: r.zrX,
        offsetY: r.zrY,
        gestureEvent: r.gestureEvent,
        pinchX: r.pinchX,
        pinchY: r.pinchY,
        pinchScale: r.pinchScale,
        wheelDelta: r.zrDelta,
        zrByTouch: r.zrByTouch,
        which: r.which,
        stop: np
    }
}

function np() {
    Qd(this.event)
}
var ip = function(e) {
        W(t, e);

        function t() {
            var r = e !== null && e.apply(this, arguments) || this;
            return r.handler = null, r
        }
        return t.prototype.dispose = function() {}, t.prototype.setCursor = function() {}, t
    }(Ee),
    pn = function() {
        function e(t, r) {
            this.x = t, this.y = r
        }
        return e
    }(),
    ap = ["click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"],
    ja = new nt(0, 0, 0, 0),
    Ph = function(e) {
        W(t, e);

        function t(r, n, i, a, o) {
            var s = e.call(this) || this;
            return s._hovered = new pn(0, 0), s.storage = r, s.painter = n, s.painterRoot = a, s._pointerSize = o, i = i || new ip, s.proxy = null, s.setHandlerProxy(i), s._draggingMgr = new Hd(s), s
        }
        return t.prototype.setHandlerProxy = function(r) {
            this.proxy && this.proxy.dispose(), r && (P(ap, function(n) {
                r.on && r.on(n, this[n], this)
            }, this), r.handler = this), this.proxy = r
        }, t.prototype.mousemove = function(r) {
            var n = r.zrX,
                i = r.zrY,
                a = Ah(this, n, i),
                o = this._hovered,
                s = o.target;
            s && !s.__zr && (o = this.findHover(o.x, o.y), s = o.target);
            var u = this._hovered = a ? new pn(n, i) : this.findHover(n, i),
                l = u.target,
                f = this.proxy;
            f.setCursor && f.setCursor(l ? l.cursor : "default"), s && l !== s && this.dispatchToElement(o, "mouseout", r), this.dispatchToElement(u, "mousemove", r), l && l !== s && this.dispatchToElement(u, "mouseover", r)
        }, t.prototype.mouseout = function(r) {
            var n = r.zrEventControl;
            n !== "only_globalout" && this.dispatchToElement(this._hovered, "mouseout", r), n !== "no_globalout" && this.trigger("globalout", {
                type: "globalout",
                event: r
            })
        }, t.prototype.resize = function() {
            this._hovered = new pn(0, 0)
        }, t.prototype.dispatch = function(r, n) {
            var i = this[r];
            i && i.call(this, n)
        }, t.prototype.dispose = function() {
            this.proxy.dispose(), this.storage = null, this.proxy = null, this.painter = null
        }, t.prototype.setCursorStyle = function(r) {
            var n = this.proxy;
            n.setCursor && n.setCursor(r)
        }, t.prototype.dispatchToElement = function(r, n, i) {
            r = r || {};
            var a = r.target;
            if (!(a && a.silent)) {
                for (var o = "on" + n, s = rp(n, r, i); a && (a[o] && (s.cancelBubble = !!a[o].call(a, s)), a.trigger(n, s), a = a.__hostTarget ? a.__hostTarget : a.parent, !s.cancelBubble););
                s.cancelBubble || (this.trigger(n, s), this.painter && this.painter.eachOtherLayer && this.painter.eachOtherLayer(function(u) {
                    typeof u[o] == "function" && u[o].call(u, s), u.trigger && u.trigger(n, s)
                }))
            }
        }, t.prototype.findHover = function(r, n, i) {
            var a = this.storage.getDisplayList(),
                o = new pn(r, n);
            if (qu(a, o, r, n, i), this._pointerSize && !o.target) {
                for (var s = [], u = this._pointerSize, l = u / 2, f = new nt(r - l, n - l, u, u), h = a.length - 1; h >= 0; h--) {
                    var c = a[h];
                    c !== i && !c.ignore && !c.ignoreCoarsePointer && (!c.parent || !c.parent.ignoreCoarsePointer) && (ja.copy(c.getBoundingRect()), c.transform && ja.applyTransform(c.transform), ja.intersect(f) && s.push(c))
                }
                if (s.length)
                    for (var v = 4, d = Math.PI / 12, g = Math.PI * 2, p = 0; p < l; p += v)
                        for (var y = 0; y < g; y += d) {
                            var m = r + p * Math.cos(y),
                                _ = n + p * Math.sin(y);
                            if (qu(s, o, m, _, i), o.target) return o
                        }
            }
            return o
        }, t.prototype.processGesture = function(r, n) {
            this._gestureMgr || (this._gestureMgr = new Jd);
            var i = this._gestureMgr;
            n === "start" && i.clear();
            var a = i.recognize(r, this.findHover(r.zrX, r.zrY, null).target, this.proxy.dom);
            if (n === "end" && i.clear(), a) {
                var o = a.type;
                r.gestureEvent = o;
                var s = new pn;
                s.target = a.target, this.dispatchToElement(s, o, a.event)
            }
        }, t
    }(Ee);
P(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"], function(e) {
    Ph.prototype[e] = function(t) {
        var r = t.zrX,
            n = t.zrY,
            i = Ah(this, r, n),
            a, o;
        if ((e !== "mouseup" || !i) && (a = this.findHover(r, n), o = a.target), e === "mousedown") this._downEl = o, this._downPoint = [t.zrX, t.zrY], this._upEl = o;
        else if (e === "mouseup") this._upEl = o;
        else if (e === "click") {
            if (this._downEl !== this._upEl || !this._downPoint || os(this._downPoint, [t.zrX, t.zrY]) > 4) return;
            this._downPoint = null
        }
        this.dispatchToElement(a, e, t)
    }
});

function op(e, t, r) {
    if (e[e.rectHover ? "rectContain" : "contain"](t, r)) {
        for (var n = e, i = void 0, a = !1; n;) {
            if (n.ignoreClip && (a = !0), !a) {
                var o = n.getClipPath();
                if (o && !o.contain(t, r)) return !1
            }
            n.silent && (i = !0);
            var s = n.__hostTarget;
            n = s || n.parent
        }
        return i ? Ch : !0
    }
    return !1
}

function qu(e, t, r, n, i) {
    for (var a = e.length - 1; a >= 0; a--) {
        var o = e[a],
            s = void 0;
        if (o !== i && !o.ignore && (s = op(o, r, n)) && (!t.topTarget && (t.topTarget = o), s !== Ch)) {
            t.target = o;
            break
        }
    }
}

function Ah(e, t, r) {
    var n = e.painter;
    return t < 0 || t > n.getWidth() || r < 0 || r > n.getHeight()
}
var Rh = 32,
    gn = 7;

function sp(e) {
    for (var t = 0; e >= Rh;) t |= e & 1, e >>= 1;
    return e + t
}

function $u(e, t, r, n) {
    var i = t + 1;
    if (i === r) return 1;
    if (n(e[i++], e[t]) < 0) {
        for (; i < r && n(e[i], e[i - 1]) < 0;) i++;
        up(e, t, i)
    } else
        for (; i < r && n(e[i], e[i - 1]) >= 0;) i++;
    return i - t
}

function up(e, t, r) {
    for (r--; t < r;) {
        var n = e[t];
        e[t++] = e[r], e[r--] = n
    }
}

function Zu(e, t, r, n, i) {
    for (n === t && n++; n < r; n++) {
        for (var a = e[n], o = t, s = n, u; o < s;) u = o + s >>> 1, i(a, e[u]) < 0 ? s = u : o = u + 1;
        var l = n - o;
        switch (l) {
            case 3:
                e[o + 3] = e[o + 2];
            case 2:
                e[o + 2] = e[o + 1];
            case 1:
                e[o + 1] = e[o];
                break;
            default:
                for (; l > 0;) e[o + l] = e[o + l - 1], l--
        }
        e[o] = a
    }
}

function to(e, t, r, n, i, a) {
    var o = 0,
        s = 0,
        u = 1;
    if (a(e, t[r + i]) > 0) {
        for (s = n - i; u < s && a(e, t[r + i + u]) > 0;) o = u, u = (u << 1) + 1, u <= 0 && (u = s);
        u > s && (u = s), o += i, u += i
    } else {
        for (s = i + 1; u < s && a(e, t[r + i - u]) <= 0;) o = u, u = (u << 1) + 1, u <= 0 && (u = s);
        u > s && (u = s);
        var l = o;
        o = i - u, u = i - l
    }
    for (o++; o < u;) {
        var f = o + (u - o >>> 1);
        a(e, t[r + f]) > 0 ? o = f + 1 : u = f
    }
    return u
}

function eo(e, t, r, n, i, a) {
    var o = 0,
        s = 0,
        u = 1;
    if (a(e, t[r + i]) < 0) {
        for (s = i + 1; u < s && a(e, t[r + i - u]) < 0;) o = u, u = (u << 1) + 1, u <= 0 && (u = s);
        u > s && (u = s);
        var l = o;
        o = i - u, u = i - l
    } else {
        for (s = n - i; u < s && a(e, t[r + i + u]) >= 0;) o = u, u = (u << 1) + 1, u <= 0 && (u = s);
        u > s && (u = s), o += i, u += i
    }
    for (o++; o < u;) {
        var f = o + (u - o >>> 1);
        a(e, t[r + f]) < 0 ? u = f : o = f + 1
    }
    return u
}

function lp(e, t) {
    var r = gn,
        n, i, a = 0,
        o = [];
    n = [], i = [];

    function s(v, d) {
        n[a] = v, i[a] = d, a += 1
    }

    function u() {
        for (; a > 1;) {
            var v = a - 2;
            if (v >= 1 && i[v - 1] <= i[v] + i[v + 1] || v >= 2 && i[v - 2] <= i[v] + i[v - 1]) i[v - 1] < i[v + 1] && v--;
            else if (i[v] > i[v + 1]) break;
            f(v)
        }
    }

    function l() {
        for (; a > 1;) {
            var v = a - 2;
            v > 0 && i[v - 1] < i[v + 1] && v--, f(v)
        }
    }

    function f(v) {
        var d = n[v],
            g = i[v],
            p = n[v + 1],
            y = i[v + 1];
        i[v] = g + y, v === a - 3 && (n[v + 1] = n[v + 2], i[v + 1] = i[v + 2]), a--;
        var m = eo(e[p], e, d, g, 0, t);
        d += m, g -= m, g !== 0 && (y = to(e[d + g - 1], e, p, y, y - 1, t), y !== 0 && (g <= y ? h(d, g, p, y) : c(d, g, p, y)))
    }

    function h(v, d, g, p) {
        var y = 0;
        for (y = 0; y < d; y++) o[y] = e[v + y];
        var m = 0,
            _ = g,
            S = v;
        if (e[S++] = e[_++], --p === 0) {
            for (y = 0; y < d; y++) e[S + y] = o[m + y];
            return
        }
        if (d === 1) {
            for (y = 0; y < p; y++) e[S + y] = e[_ + y];
            e[S + p] = o[m];
            return
        }
        for (var T = r, w, b, M;;) {
            w = 0, b = 0, M = !1;
            do
                if (t(e[_], o[m]) < 0) {
                    if (e[S++] = e[_++], b++, w = 0, --p === 0) {
                        M = !0;
                        break
                    }
                } else if (e[S++] = o[m++], w++, b = 0, --d === 1) {
                M = !0;
                break
            } while ((w | b) < T);
            if (M) break;
            do {
                if (w = eo(e[_], o, m, d, 0, t), w !== 0) {
                    for (y = 0; y < w; y++) e[S + y] = o[m + y];
                    if (S += w, m += w, d -= w, d <= 1) {
                        M = !0;
                        break
                    }
                }
                if (e[S++] = e[_++], --p === 0) {
                    M = !0;
                    break
                }
                if (b = to(o[m], e, _, p, 0, t), b !== 0) {
                    for (y = 0; y < b; y++) e[S + y] = e[_ + y];
                    if (S += b, _ += b, p -= b, p === 0) {
                        M = !0;
                        break
                    }
                }
                if (e[S++] = o[m++], --d === 1) {
                    M = !0;
                    break
                }
                T--
            } while (w >= gn || b >= gn);
            if (M) break;
            T < 0 && (T = 0), T += 2
        }
        if (r = T, r < 1 && (r = 1), d === 1) {
            for (y = 0; y < p; y++) e[S + y] = e[_ + y];
            e[S + p] = o[m]
        } else {
            if (d === 0) throw new Error;
            for (y = 0; y < d; y++) e[S + y] = o[m + y]
        }
    }

    function c(v, d, g, p) {
        var y = 0;
        for (y = 0; y < p; y++) o[y] = e[g + y];
        var m = v + d - 1,
            _ = p - 1,
            S = g + p - 1,
            T = 0,
            w = 0;
        if (e[S--] = e[m--], --d === 0) {
            for (T = S - (p - 1), y = 0; y < p; y++) e[T + y] = o[y];
            return
        }
        if (p === 1) {
            for (S -= d, m -= d, w = S + 1, T = m + 1, y = d - 1; y >= 0; y--) e[w + y] = e[T + y];
            e[S] = o[_];
            return
        }
        for (var b = r;;) {
            var M = 0,
                D = 0,
                C = !1;
            do
                if (t(o[_], e[m]) < 0) {
                    if (e[S--] = e[m--], M++, D = 0, --d === 0) {
                        C = !0;
                        break
                    }
                } else if (e[S--] = o[_--], D++, M = 0, --p === 1) {
                C = !0;
                break
            } while ((M | D) < b);
            if (C) break;
            do {
                if (M = d - eo(o[_], e, v, d, d - 1, t), M !== 0) {
                    for (S -= M, m -= M, d -= M, w = S + 1, T = m + 1, y = M - 1; y >= 0; y--) e[w + y] = e[T + y];
                    if (d === 0) {
                        C = !0;
                        break
                    }
                }
                if (e[S--] = o[_--], --p === 1) {
                    C = !0;
                    break
                }
                if (D = p - to(e[m], o, 0, p, p - 1, t), D !== 0) {
                    for (S -= D, _ -= D, p -= D, w = S + 1, T = _ + 1, y = 0; y < D; y++) e[w + y] = o[T + y];
                    if (p <= 1) {
                        C = !0;
                        break
                    }
                }
                if (e[S--] = e[m--], --d === 0) {
                    C = !0;
                    break
                }
                b--
            } while (M >= gn || D >= gn);
            if (C) break;
            b < 0 && (b = 0), b += 2
        }
        if (r = b, r < 1 && (r = 1), p === 1) {
            for (S -= d, m -= d, w = S + 1, T = m + 1, y = d - 1; y >= 0; y--) e[w + y] = e[T + y];
            e[S] = o[_]
        } else {
            if (p === 0) throw new Error;
            for (T = S - (p - 1), y = 0; y < p; y++) e[T + y] = o[y]
        }
    }
    return {
        mergeRuns: u,
        forceMergeRuns: l,
        pushRun: s
    }
}

function Xi(e, t, r, n) {
    r || (r = 0), n || (n = e.length);
    var i = n - r;
    if (!(i < 2)) {
        var a = 0;
        if (i < Rh) {
            a = $u(e, r, n, t), Zu(e, r, n, r + a, t);
            return
        }
        var o = lp(e, t),
            s = sp(i);
        do {
            if (a = $u(e, r, n, t), a < s) {
                var u = i;
                u > s && (u = s), Zu(e, r, r + u, r + a, t), a = u
            }
            o.pushRun(r, a), o.mergeRuns(), i -= a, r += a
        } while (i !== 0);
        o.forceMergeRuns()
    }
}
var Tr = 1,
    qi = 2,
    In = 4,
    Ku = !1;

function ro() {
    Ku || (Ku = !0, console.warn("z / z2 / zlevel of displayable is invalid, which may cause unexpected errors"))
}

function Qu(e, t) {
    return e.zlevel === t.zlevel ? e.z === t.z ? e.z2 - t.z2 : e.z - t.z : e.zlevel - t.zlevel
}
var fp = function() {
        function e() {
            this._roots = [], this._displayList = [], this._displayListLen = 0, this.displayableSortFunc = Qu
        }
        return e.prototype.traverse = function(t, r) {
            for (var n = 0; n < this._roots.length; n++) this._roots[n].traverse(t, r)
        }, e.prototype.getDisplayList = function(t, r) {
            r = r || !1;
            var n = this._displayList;
            return (t || !n.length) && this.updateDisplayList(r), n
        }, e.prototype.updateDisplayList = function(t) {
            this._displayListLen = 0;
            for (var r = this._roots, n = this._displayList, i = 0, a = r.length; i < a; i++) this._updateAndAddDisplayable(r[i], null, t);
            n.length = this._displayListLen, Xi(n, Qu)
        }, e.prototype._updateAndAddDisplayable = function(t, r, n) {
            if (!(t.ignore && !n)) {
                t.beforeUpdate(), t.update(), t.afterUpdate();
                var i = t.getClipPath();
                if (t.ignoreClip) r = null;
                else if (i) {
                    r ? r = r.slice() : r = [];
                    for (var a = i, o = t; a;) a.parent = o, a.updateTransform(), r.push(a), o = a, a = a.getClipPath()
                }
                if (t.childrenRef) {
                    for (var s = t.childrenRef(), u = 0; u < s.length; u++) {
                        var l = s[u];
                        t.__dirty && (l.__dirty |= Tr), this._updateAndAddDisplayable(l, r, n)
                    }
                    t.__dirty = 0
                } else {
                    var f = t;
                    r && r.length ? f.__clipPaths = r : f.__clipPaths && f.__clipPaths.length > 0 && (f.__clipPaths = []), isNaN(f.z) && (ro(), f.z = 0), isNaN(f.z2) && (ro(), f.z2 = 0), isNaN(f.zlevel) && (ro(), f.zlevel = 0), this._displayList[this._displayListLen++] = f
                }
                var h = t.getDecalElement && t.getDecalElement();
                h && this._updateAndAddDisplayable(h, r, n);
                var c = t.getTextGuideLine();
                c && this._updateAndAddDisplayable(c, r, n);
                var v = t.getTextContent();
                v && this._updateAndAddDisplayable(v, r, n)
            }
        }, e.prototype.addRoot = function(t) {
            t.__zr && t.__zr.storage === this || this._roots.push(t)
        }, e.prototype.delRoot = function(t) {
            if (t instanceof Array) {
                for (var r = 0, n = t.length; r < n; r++) this.delRoot(t[r]);
                return
            }
            var i = ft(this._roots, t);
            i >= 0 && this._roots.splice(i, 1)
        }, e.prototype.delAllRoots = function() {
            this._roots = [], this._displayList = [], this._displayListLen = 0
        }, e.prototype.getRoots = function() {
            return this._roots
        }, e.prototype.dispose = function() {
            this._displayList = null, this._roots = null
        }, e
    }(),
    fs;
fs = K.hasGlobalWindow && (window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.msRequestAnimationFrame && window.msRequestAnimationFrame.bind(window) || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame) || function(e) {
    return setTimeout(e, 16)
};
var Hn = {
        linear: function(e) {
            return e
        },
        quadraticIn: function(e) {
            return e * e
        },
        quadraticOut: function(e) {
            return e * (2 - e)
        },
        quadraticInOut: function(e) {
            return (e *= 2) < 1 ? .5 * e * e : -.5 * (--e * (e - 2) - 1)
        },
        cubicIn: function(e) {
            return e * e * e
        },
        cubicOut: function(e) {
            return --e * e * e + 1
        },
        cubicInOut: function(e) {
            return (e *= 2) < 1 ? .5 * e * e * e : .5 * ((e -= 2) * e * e + 2)
        },
        quarticIn: function(e) {
            return e * e * e * e
        },
        quarticOut: function(e) {
            return 1 - --e * e * e * e
        },
        quarticInOut: function(e) {
            return (e *= 2) < 1 ? .5 * e * e * e * e : -.5 * ((e -= 2) * e * e * e - 2)
        },
        quinticIn: function(e) {
            return e * e * e * e * e
        },
        quinticOut: function(e) {
            return --e * e * e * e * e + 1
        },
        quinticInOut: function(e) {
            return (e *= 2) < 1 ? .5 * e * e * e * e * e : .5 * ((e -= 2) * e * e * e * e + 2)
        },
        sinusoidalIn: function(e) {
            return 1 - Math.cos(e * Math.PI / 2)
        },
        sinusoidalOut: function(e) {
            return Math.sin(e * Math.PI / 2)
        },
        sinusoidalInOut: function(e) {
            return .5 * (1 - Math.cos(Math.PI * e))
        },
        exponentialIn: function(e) {
            return e === 0 ? 0 : Math.pow(1024, e - 1)
        },
        exponentialOut: function(e) {
            return e === 1 ? 1 : 1 - Math.pow(2, -10 * e)
        },
        exponentialInOut: function(e) {
            return e === 0 ? 0 : e === 1 ? 1 : (e *= 2) < 1 ? .5 * Math.pow(1024, e - 1) : .5 * (-Math.pow(2, -10 * (e - 1)) + 2)
        },
        circularIn: function(e) {
            return 1 - Math.sqrt(1 - e * e)
        },
        circularOut: function(e) {
            return Math.sqrt(1 - --e * e)
        },
        circularInOut: function(e) {
            return (e *= 2) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
        },
        elasticIn: function(e) {
            var t, r = .1,
                n = .4;
            return e === 0 ? 0 : e === 1 ? 1 : (!r || r < 1 ? (r = 1, t = n / 4) : t = n * Math.asin(1 / r) / (2 * Math.PI), -(r * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / n)))
        },
        elasticOut: function(e) {
            var t, r = .1,
                n = .4;
            return e === 0 ? 0 : e === 1 ? 1 : (!r || r < 1 ? (r = 1, t = n / 4) : t = n * Math.asin(1 / r) / (2 * Math.PI), r * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / n) + 1)
        },
        elasticInOut: function(e) {
            var t, r = .1,
                n = .4;
            return e === 0 ? 0 : e === 1 ? 1 : (!r || r < 1 ? (r = 1, t = n / 4) : t = n * Math.asin(1 / r) / (2 * Math.PI), (e *= 2) < 1 ? -.5 * (r * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / n)) : r * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / n) * .5 + 1)
        },
        backIn: function(e) {
            var t = 1.70158;
            return e * e * ((t + 1) * e - t)
        },
        backOut: function(e) {
            var t = 1.70158;
            return --e * e * ((t + 1) * e + t) + 1
        },
        backInOut: function(e) {
            var t = 2.5949095;
            return (e *= 2) < 1 ? .5 * (e * e * ((t + 1) * e - t)) : .5 * ((e -= 2) * e * ((t + 1) * e + t) + 2)
        },
        bounceIn: function(e) {
            return 1 - Hn.bounceOut(1 - e)
        },
        bounceOut: function(e) {
            return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
        },
        bounceInOut: function(e) {
            return e < .5 ? Hn.bounceIn(e * 2) * .5 : Hn.bounceOut(e * 2 - 1) * .5 + .5
        }
    },
    gi = Math.pow,
    Xe = Math.sqrt,
    xh = 1e-8,
    Lh = 1e-4,
    Ju = Xe(3),
    yi = 1 / 3,
    ye = on(),
    Kt = on(),
    en = on();

function Ue(e) {
    return e > -1e-8 && e < xh
}

function Ih(e) {
    return e > xh || e < -1e-8
}

function _t(e, t, r, n, i) {
    var a = 1 - i;
    return a * a * (a * e + 3 * i * t) + i * i * (i * n + 3 * a * r)
}

function ju(e, t, r, n, i) {
    var a = 1 - i;
    return 3 * (((t - e) * a + 2 * (r - t) * i) * a + (n - r) * i * i)
}

function Eh(e, t, r, n, i, a) {
    var o = n + 3 * (t - r) - e,
        s = 3 * (r - t * 2 + e),
        u = 3 * (t - e),
        l = e - i,
        f = s * s - 3 * o * u,
        h = s * u - 9 * o * l,
        c = u * u - 3 * s * l,
        v = 0;
    if (Ue(f) && Ue(h))
        if (Ue(s)) a[0] = 0;
        else {
            var d = -u / s;
            d >= 0 && d <= 1 && (a[v++] = d)
        }
    else {
        var g = h * h - 4 * f * c;
        if (Ue(g)) {
            var p = h / f,
                d = -s / o + p,
                y = -p / 2;
            d >= 0 && d <= 1 && (a[v++] = d), y >= 0 && y <= 1 && (a[v++] = y)
        } else if (g > 0) {
            var m = Xe(g),
                _ = f * s + 1.5 * o * (-h + m),
                S = f * s + 1.5 * o * (-h - m);
            _ < 0 ? _ = -gi(-_, yi) : _ = gi(_, yi), S < 0 ? S = -gi(-S, yi) : S = gi(S, yi);
            var d = (-s - (_ + S)) / (3 * o);
            d >= 0 && d <= 1 && (a[v++] = d)
        } else {
            var T = (2 * f * s - 3 * o * h) / (2 * Xe(f * f * f)),
                w = Math.acos(T) / 3,
                b = Xe(f),
                M = Math.cos(w),
                d = (-s - 2 * b * M) / (3 * o),
                y = (-s + b * (M + Ju * Math.sin(w))) / (3 * o),
                D = (-s + b * (M - Ju * Math.sin(w))) / (3 * o);
            d >= 0 && d <= 1 && (a[v++] = d), y >= 0 && y <= 1 && (a[v++] = y), D >= 0 && D <= 1 && (a[v++] = D)
        }
    }
    return v
}

function Oh(e, t, r, n, i) {
    var a = 6 * r - 12 * t + 6 * e,
        o = 9 * t + 3 * n - 3 * e - 9 * r,
        s = 3 * t - 3 * e,
        u = 0;
    if (Ue(o)) {
        if (Ih(a)) {
            var l = -s / a;
            l >= 0 && l <= 1 && (i[u++] = l)
        }
    } else {
        var f = a * a - 4 * o * s;
        if (Ue(f)) i[0] = -a / (2 * o);
        else if (f > 0) {
            var h = Xe(f),
                l = (-a + h) / (2 * o),
                c = (-a - h) / (2 * o);
            l >= 0 && l <= 1 && (i[u++] = l), c >= 0 && c <= 1 && (i[u++] = c)
        }
    }
    return u
}

function oa(e, t, r, n, i, a) {
    var o = (t - e) * i + e,
        s = (r - t) * i + t,
        u = (n - r) * i + r,
        l = (s - o) * i + o,
        f = (u - s) * i + s,
        h = (f - l) * i + l;
    a[0] = e, a[1] = o, a[2] = l, a[3] = h, a[4] = h, a[5] = f, a[6] = u, a[7] = n
}

function kh(e, t, r, n, i, a, o, s, u, l, f) {
    var h, c = .005,
        v = 1 / 0,
        d, g, p, y;
    ye[0] = u, ye[1] = l;
    for (var m = 0; m < 1; m += .05) Kt[0] = _t(e, r, i, o, m), Kt[1] = _t(t, n, a, s, m), p = Jr(ye, Kt), p < v && (h = m, v = p);
    v = 1 / 0;
    for (var _ = 0; _ < 32 && !(c < Lh); _++) d = h - c, g = h + c, Kt[0] = _t(e, r, i, o, d), Kt[1] = _t(t, n, a, s, d), p = Jr(Kt, ye), d >= 0 && p < v ? (h = d, v = p) : (en[0] = _t(e, r, i, o, g), en[1] = _t(t, n, a, s, g), y = Jr(en, ye), g <= 1 && y < v ? (h = g, v = y) : c *= .5);
    return f && (f[0] = _t(e, r, i, o, h), f[1] = _t(t, n, a, s, h)), Xe(v)
}

function hp(e, t, r, n, i, a, o, s, u) {
    for (var l = e, f = t, h = 0, c = 1 / u, v = 1; v <= u; v++) {
        var d = v * c,
            g = _t(e, r, i, o, d),
            p = _t(t, n, a, s, d),
            y = g - l,
            m = p - f;
        h += Math.sqrt(y * y + m * m), l = g, f = p
    }
    return h
}

function Dt(e, t, r, n) {
    var i = 1 - n;
    return i * (i * e + 2 * n * t) + n * n * r
}

function tl(e, t, r, n) {
    return 2 * ((1 - n) * (t - e) + n * (r - t))
}

function vp(e, t, r, n, i) {
    var a = e - 2 * t + r,
        o = 2 * (t - e),
        s = e - n,
        u = 0;
    if (Ue(a)) {
        if (Ih(o)) {
            var l = -s / o;
            l >= 0 && l <= 1 && (i[u++] = l)
        }
    } else {
        var f = o * o - 4 * a * s;
        if (Ue(f)) {
            var l = -o / (2 * a);
            l >= 0 && l <= 1 && (i[u++] = l)
        } else if (f > 0) {
            var h = Xe(f),
                l = (-o + h) / (2 * a),
                c = (-o - h) / (2 * a);
            l >= 0 && l <= 1 && (i[u++] = l), c >= 0 && c <= 1 && (i[u++] = c)
        }
    }
    return u
}

function Fh(e, t, r) {
    var n = e + r - 2 * t;
    return n === 0 ? .5 : (e - t) / n
}

function sa(e, t, r, n, i) {
    var a = (t - e) * n + e,
        o = (r - t) * n + t,
        s = (o - a) * n + a;
    i[0] = e, i[1] = a, i[2] = s, i[3] = s, i[4] = o, i[5] = r
}

function Nh(e, t, r, n, i, a, o, s, u) {
    var l, f = .005,
        h = 1 / 0;
    ye[0] = o, ye[1] = s;
    for (var c = 0; c < 1; c += .05) {
        Kt[0] = Dt(e, r, i, c), Kt[1] = Dt(t, n, a, c);
        var v = Jr(ye, Kt);
        v < h && (l = c, h = v)
    }
    h = 1 / 0;
    for (var d = 0; d < 32 && !(f < Lh); d++) {
        var g = l - f,
            p = l + f;
        Kt[0] = Dt(e, r, i, g), Kt[1] = Dt(t, n, a, g);
        var v = Jr(Kt, ye);
        if (g >= 0 && v < h) l = g, h = v;
        else {
            en[0] = Dt(e, r, i, p), en[1] = Dt(t, n, a, p);
            var y = Jr(en, ye);
            p <= 1 && y < h ? (l = p, h = y) : f *= .5
        }
    }
    return u && (u[0] = Dt(e, r, i, l), u[1] = Dt(t, n, a, l)), Xe(h)
}

function cp(e, t, r, n, i, a, o) {
    for (var s = e, u = t, l = 0, f = 1 / o, h = 1; h <= o; h++) {
        var c = h * f,
            v = Dt(e, r, i, c),
            d = Dt(t, n, a, c),
            g = v - s,
            p = d - u;
        l += Math.sqrt(g * g + p * p), s = v, u = d
    }
    return l
}
var dp = /cubic-bezier\(([0-9,\.e ]+)\)/;

function Bh(e) {
    var t = e && dp.exec(e);
    if (t) {
        var r = t[1].split(","),
            n = +xe(r[0]),
            i = +xe(r[1]),
            a = +xe(r[2]),
            o = +xe(r[3]);
        if (isNaN(n + i + a + o)) return;
        var s = [];
        return function(u) {
            return u <= 0 ? 0 : u >= 1 ? 1 : Eh(0, n, a, 1, u, s) && _t(0, i, o, 1, s[0])
        }
    }
}
var pp = function() {
        function e(t) {
            this._inited = !1, this._startTime = 0, this._pausedTime = 0, this._paused = !1, this._life = t.life || 1e3, this._delay = t.delay || 0, this.loop = t.loop || !1, this.onframe = t.onframe || Qt, this.ondestroy = t.ondestroy || Qt, this.onrestart = t.onrestart || Qt, t.easing && this.setEasing(t.easing)
        }
        return e.prototype.step = function(t, r) {
            if (this._inited || (this._startTime = t + this._delay, this._inited = !0), this._paused) {
                this._pausedTime += r;
                return
            }
            var n = this._life,
                i = t - this._startTime - this._pausedTime,
                a = i / n;
            a < 0 && (a = 0), a = Math.min(a, 1);
            var o = this.easingFunc,
                s = o ? o(a) : a;
            if (this.onframe(s), a === 1)
                if (this.loop) {
                    var u = i % n;
                    this._startTime = t - u, this._pausedTime = 0, this.onrestart()
                } else return !0;
            return !1
        }, e.prototype.pause = function() {
            this._paused = !0
        }, e.prototype.resume = function() {
            this._paused = !1
        }, e.prototype.setEasing = function(t) {
            this.easing = t, this.easingFunc = rt(t) ? t : Hn[t] || Bh(t)
        }, e
    }(),
    zh = function() {
        function e(t) {
            this.value = t
        }
        return e
    }(),
    gp = function() {
        function e() {
            this._len = 0
        }
        return e.prototype.insert = function(t) {
            var r = new zh(t);
            return this.insertEntry(r), r
        }, e.prototype.insertEntry = function(t) {
            this.head ? (this.tail.next = t, t.prev = this.tail, t.next = null, this.tail = t) : this.head = this.tail = t, this._len++
        }, e.prototype.remove = function(t) {
            var r = t.prev,
                n = t.next;
            r ? r.next = n : this.head = n, n ? n.prev = r : this.tail = r, t.next = t.prev = null, this._len--
        }, e.prototype.len = function() {
            return this._len
        }, e.prototype.clear = function() {
            this.head = this.tail = null, this._len = 0
        }, e
    }(),
    ui = function() {
        function e(t) {
            this._list = new gp, this._maxSize = 10, this._map = {}, this._maxSize = t
        }
        return e.prototype.put = function(t, r) {
            var n = this._list,
                i = this._map,
                a = null;
            if (i[t] == null) {
                var o = n.len(),
                    s = this._lastRemovedEntry;
                if (o >= this._maxSize && o > 0) {
                    var u = n.head;
                    n.remove(u), delete i[u.key], a = u.value, this._lastRemovedEntry = u
                }
                s ? s.value = r : s = new zh(r), s.key = t, n.insertEntry(s), i[t] = s
            }
            return a
        }, e.prototype.get = function(t) {
            var r = this._map[t],
                n = this._list;
            if (r != null) return r !== n.tail && (n.remove(r), n.insertEntry(r)), r.value
        }, e.prototype.clear = function() {
            this._list.clear(), this._map = {}
        }, e.prototype.len = function() {
            return this._list.len()
        }, e
    }(),
    el = {
        transparent: [0, 0, 0, 0],
        aliceblue: [240, 248, 255, 1],
        antiquewhite: [250, 235, 215, 1],
        aqua: [0, 255, 255, 1],
        aquamarine: [127, 255, 212, 1],
        azure: [240, 255, 255, 1],
        beige: [245, 245, 220, 1],
        bisque: [255, 228, 196, 1],
        black: [0, 0, 0, 1],
        blanchedalmond: [255, 235, 205, 1],
        blue: [0, 0, 255, 1],
        blueviolet: [138, 43, 226, 1],
        brown: [165, 42, 42, 1],
        burlywood: [222, 184, 135, 1],
        cadetblue: [95, 158, 160, 1],
        chartreuse: [127, 255, 0, 1],
        chocolate: [210, 105, 30, 1],
        coral: [255, 127, 80, 1],
        cornflowerblue: [100, 149, 237, 1],
        cornsilk: [255, 248, 220, 1],
        crimson: [220, 20, 60, 1],
        cyan: [0, 255, 255, 1],
        darkblue: [0, 0, 139, 1],
        darkcyan: [0, 139, 139, 1],
        darkgoldenrod: [184, 134, 11, 1],
        darkgray: [169, 169, 169, 1],
        darkgreen: [0, 100, 0, 1],
        darkgrey: [169, 169, 169, 1],
        darkkhaki: [189, 183, 107, 1],
        darkmagenta: [139, 0, 139, 1],
        darkolivegreen: [85, 107, 47, 1],
        darkorange: [255, 140, 0, 1],
        darkorchid: [153, 50, 204, 1],
        darkred: [139, 0, 0, 1],
        darksalmon: [233, 150, 122, 1],
        darkseagreen: [143, 188, 143, 1],
        darkslateblue: [72, 61, 139, 1],
        darkslategray: [47, 79, 79, 1],
        darkslategrey: [47, 79, 79, 1],
        darkturquoise: [0, 206, 209, 1],
        darkviolet: [148, 0, 211, 1],
        deeppink: [255, 20, 147, 1],
        deepskyblue: [0, 191, 255, 1],
        dimgray: [105, 105, 105, 1],
        dimgrey: [105, 105, 105, 1],
        dodgerblue: [30, 144, 255, 1],
        firebrick: [178, 34, 34, 1],
        floralwhite: [255, 250, 240, 1],
        forestgreen: [34, 139, 34, 1],
        fuchsia: [255, 0, 255, 1],
        gainsboro: [220, 220, 220, 1],
        ghostwhite: [248, 248, 255, 1],
        gold: [255, 215, 0, 1],
        goldenrod: [218, 165, 32, 1],
        gray: [128, 128, 128, 1],
        green: [0, 128, 0, 1],
        greenyellow: [173, 255, 47, 1],
        grey: [128, 128, 128, 1],
        honeydew: [240, 255, 240, 1],
        hotpink: [255, 105, 180, 1],
        indianred: [205, 92, 92, 1],
        indigo: [75, 0, 130, 1],
        ivory: [255, 255, 240, 1],
        khaki: [240, 230, 140, 1],
        lavender: [230, 230, 250, 1],
        lavenderblush: [255, 240, 245, 1],
        lawngreen: [124, 252, 0, 1],
        lemonchiffon: [255, 250, 205, 1],
        lightblue: [173, 216, 230, 1],
        lightcoral: [240, 128, 128, 1],
        lightcyan: [224, 255, 255, 1],
        lightgoldenrodyellow: [250, 250, 210, 1],
        lightgray: [211, 211, 211, 1],
        lightgreen: [144, 238, 144, 1],
        lightgrey: [211, 211, 211, 1],
        lightpink: [255, 182, 193, 1],
        lightsalmon: [255, 160, 122, 1],
        lightseagreen: [32, 178, 170, 1],
        lightskyblue: [135, 206, 250, 1],
        lightslategray: [119, 136, 153, 1],
        lightslategrey: [119, 136, 153, 1],
        lightsteelblue: [176, 196, 222, 1],
        lightyellow: [255, 255, 224, 1],
        lime: [0, 255, 0, 1],
        limegreen: [50, 205, 50, 1],
        linen: [250, 240, 230, 1],
        magenta: [255, 0, 255, 1],
        maroon: [128, 0, 0, 1],
        mediumaquamarine: [102, 205, 170, 1],
        mediumblue: [0, 0, 205, 1],
        mediumorchid: [186, 85, 211, 1],
        mediumpurple: [147, 112, 219, 1],
        mediumseagreen: [60, 179, 113, 1],
        mediumslateblue: [123, 104, 238, 1],
        mediumspringgreen: [0, 250, 154, 1],
        mediumturquoise: [72, 209, 204, 1],
        mediumvioletred: [199, 21, 133, 1],
        midnightblue: [25, 25, 112, 1],
        mintcream: [245, 255, 250, 1],
        mistyrose: [255, 228, 225, 1],
        moccasin: [255, 228, 181, 1],
        navajowhite: [255, 222, 173, 1],
        navy: [0, 0, 128, 1],
        oldlace: [253, 245, 230, 1],
        olive: [128, 128, 0, 1],
        olivedrab: [107, 142, 35, 1],
        orange: [255, 165, 0, 1],
        orangered: [255, 69, 0, 1],
        orchid: [218, 112, 214, 1],
        palegoldenrod: [238, 232, 170, 1],
        palegreen: [152, 251, 152, 1],
        paleturquoise: [175, 238, 238, 1],
        palevioletred: [219, 112, 147, 1],
        papayawhip: [255, 239, 213, 1],
        peachpuff: [255, 218, 185, 1],
        peru: [205, 133, 63, 1],
        pink: [255, 192, 203, 1],
        plum: [221, 160, 221, 1],
        powderblue: [176, 224, 230, 1],
        purple: [128, 0, 128, 1],
        red: [255, 0, 0, 1],
        rosybrown: [188, 143, 143, 1],
        royalblue: [65, 105, 225, 1],
        saddlebrown: [139, 69, 19, 1],
        salmon: [250, 128, 114, 1],
        sandybrown: [244, 164, 96, 1],
        seagreen: [46, 139, 87, 1],
        seashell: [255, 245, 238, 1],
        sienna: [160, 82, 45, 1],
        silver: [192, 192, 192, 1],
        skyblue: [135, 206, 235, 1],
        slateblue: [106, 90, 205, 1],
        slategray: [112, 128, 144, 1],
        slategrey: [112, 128, 144, 1],
        snow: [255, 250, 250, 1],
        springgreen: [0, 255, 127, 1],
        steelblue: [70, 130, 180, 1],
        tan: [210, 180, 140, 1],
        teal: [0, 128, 128, 1],
        thistle: [216, 191, 216, 1],
        tomato: [255, 99, 71, 1],
        turquoise: [64, 224, 208, 1],
        violet: [238, 130, 238, 1],
        wheat: [245, 222, 179, 1],
        white: [255, 255, 255, 1],
        whitesmoke: [245, 245, 245, 1],
        yellow: [255, 255, 0, 1],
        yellowgreen: [154, 205, 50, 1]
    };

function oe(e) {
    return e = Math.round(e), e < 0 ? 0 : e > 255 ? 255 : e
}

function yp(e) {
    return e = Math.round(e), e < 0 ? 0 : e > 360 ? 360 : e
}

function Qn(e) {
    return e < 0 ? 0 : e > 1 ? 1 : e
}

function no(e) {
    var t = e;
    return t.length && t.charAt(t.length - 1) === "%" ? oe(parseFloat(t) / 100 * 255) : oe(parseInt(t, 10))
}

function br(e) {
    var t = e;
    return t.length && t.charAt(t.length - 1) === "%" ? Qn(parseFloat(t) / 100) : Qn(parseFloat(t))
}

function io(e, t, r) {
    return r < 0 ? r += 1 : r > 1 && (r -= 1), r * 6 < 1 ? e + (t - e) * r * 6 : r * 2 < 1 ? t : r * 3 < 2 ? e + (t - e) * (2 / 3 - r) * 6 : e
}

function Ye(e, t, r) {
    return e + (t - e) * r
}

function qt(e, t, r, n, i) {
    return e[0] = t, e[1] = r, e[2] = n, e[3] = i, e
}

function hs(e, t) {
    return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e
}
var Hh = new ui(20),
    mi = null;

function Or(e, t) {
    mi && hs(mi, t), mi = Hh.put(e, mi || t.slice())
}

function se(e, t) {
    if (e) {
        t = t || [];
        var r = Hh.get(e);
        if (r) return hs(t, r);
        e = e + "";
        var n = e.replace(/ /g, "").toLowerCase();
        if (n in el) return hs(t, el[n]), Or(e, t), t;
        var i = n.length;
        if (n.charAt(0) === "#") {
            if (i === 4 || i === 5) {
                var a = parseInt(n.slice(1, 4), 16);
                if (!(a >= 0 && a <= 4095)) {
                    qt(t, 0, 0, 0, 1);
                    return
                }
                return qt(t, (a & 3840) >> 4 | (a & 3840) >> 8, a & 240 | (a & 240) >> 4, a & 15 | (a & 15) << 4, i === 5 ? parseInt(n.slice(4), 16) / 15 : 1), Or(e, t), t
            } else if (i === 7 || i === 9) {
                var a = parseInt(n.slice(1, 7), 16);
                if (!(a >= 0 && a <= 16777215)) {
                    qt(t, 0, 0, 0, 1);
                    return
                }
                return qt(t, (a & 16711680) >> 16, (a & 65280) >> 8, a & 255, i === 9 ? parseInt(n.slice(7), 16) / 255 : 1), Or(e, t), t
            }
            return
        }
        var o = n.indexOf("("),
            s = n.indexOf(")");
        if (o !== -1 && s + 1 === i) {
            var u = n.substr(0, o),
                l = n.substr(o + 1, s - (o + 1)).split(","),
                f = 1;
            switch (u) {
                case "rgba":
                    if (l.length !== 4) return l.length === 3 ? qt(t, +l[0], +l[1], +l[2], 1) : qt(t, 0, 0, 0, 1);
                    f = br(l.pop());
                case "rgb":
                    if (l.length >= 3) return qt(t, no(l[0]), no(l[1]), no(l[2]), l.length === 3 ? f : br(l[3])), Or(e, t), t;
                    qt(t, 0, 0, 0, 1);
                    return;
                case "hsla":
                    if (l.length !== 4) {
                        qt(t, 0, 0, 0, 1);
                        return
                    }
                    return l[3] = br(l[3]), vs(l, t), Or(e, t), t;
                case "hsl":
                    if (l.length !== 3) {
                        qt(t, 0, 0, 0, 1);
                        return
                    }
                    return vs(l, t), Or(e, t), t;
                default:
                    return
            }
        }
        qt(t, 0, 0, 0, 1)
    }
}

function vs(e, t) {
    var r = (parseFloat(e[0]) % 360 + 360) % 360 / 360,
        n = br(e[1]),
        i = br(e[2]),
        a = i <= .5 ? i * (n + 1) : i + n - i * n,
        o = i * 2 - a;
    return t = t || [], qt(t, oe(io(o, a, r + 1 / 3) * 255), oe(io(o, a, r) * 255), oe(io(o, a, r - 1 / 3) * 255), 1), e.length === 4 && (t[3] = e[3]), t
}

function mp(e) {
    if (e) {
        var t = e[0] / 255,
            r = e[1] / 255,
            n = e[2] / 255,
            i = Math.min(t, r, n),
            a = Math.max(t, r, n),
            o = a - i,
            s = (a + i) / 2,
            u, l;
        if (o === 0) u = 0, l = 0;
        else {
            s < .5 ? l = o / (a + i) : l = o / (2 - a - i);
            var f = ((a - t) / 6 + o / 2) / o,
                h = ((a - r) / 6 + o / 2) / o,
                c = ((a - n) / 6 + o / 2) / o;
            t === a ? u = c - h : r === a ? u = 1 / 3 + f - c : n === a && (u = 2 / 3 + h - f), u < 0 && (u += 1), u > 1 && (u -= 1)
        }
        var v = [u * 360, l, s];
        return e[3] != null && v.push(e[3]), v
    }
}

function rl(e, t) {
    var r = se(e);
    if (r) {
        for (var n = 0; n < 3; n++) t < 0 ? r[n] = r[n] * (1 - t) | 0 : r[n] = (255 - r[n]) * t + r[n] | 0, r[n] > 255 ? r[n] = 255 : r[n] < 0 && (r[n] = 0);
        return li(r, r.length === 4 ? "rgba" : "rgb")
    }
}

function ew(e, t, r) {
    if (!(!(t && t.length) || !(e >= 0 && e <= 1))) {
        r = r || [];
        var n = e * (t.length - 1),
            i = Math.floor(n),
            a = Math.ceil(n),
            o = t[i],
            s = t[a],
            u = n - i;
        return r[0] = oe(Ye(o[0], s[0], u)), r[1] = oe(Ye(o[1], s[1], u)), r[2] = oe(Ye(o[2], s[2], u)), r[3] = Qn(Ye(o[3], s[3], u)), r
    }
}

function rw(e, t, r) {
    if (!(!(t && t.length) || !(e >= 0 && e <= 1))) {
        var n = e * (t.length - 1),
            i = Math.floor(n),
            a = Math.ceil(n),
            o = se(t[i]),
            s = se(t[a]),
            u = n - i,
            l = li([oe(Ye(o[0], s[0], u)), oe(Ye(o[1], s[1], u)), oe(Ye(o[2], s[2], u)), Qn(Ye(o[3], s[3], u))], "rgba");
        return r ? {
            color: l,
            leftIndex: i,
            rightIndex: a,
            value: n
        } : l
    }
}

function nw(e, t, r, n) {
    var i = se(e);
    if (e) return i = mp(i), t != null && (i[0] = yp(t)), r != null && (i[1] = br(r)), n != null && (i[2] = br(n)), li(vs(i), "rgba")
}

function iw(e, t) {
    var r = se(e);
    if (r && t != null) return r[3] = Qn(t), li(r, "rgba")
}

function li(e, t) {
    if (!(!e || !e.length)) {
        var r = e[0] + "," + e[1] + "," + e[2];
        return (t === "rgba" || t === "hsva" || t === "hsla") && (r += "," + e[3]), t + "(" + r + ")"
    }
}

function ua(e, t) {
    var r = se(e);
    return r ? (.299 * r[0] + .587 * r[1] + .114 * r[2]) * r[3] / 255 + (1 - r[3]) * t : 0
}
var nl = new ui(100);

function il(e) {
    if (X(e)) {
        var t = nl.get(e);
        return t || (t = rl(e, -.1), nl.put(e, t)), t
    } else if (js(e)) {
        var r = I({}, e);
        return r.colorStops = Q(e.colorStops, function(n) {
            return {
                offset: n.offset,
                color: rl(n.color, -.1)
            }
        }), r
    }
    return e
}
var la = Math.round;

function aw(e) {
    var t;
    if (!e || e === "transparent") e = "none";
    else if (typeof e == "string" && e.indexOf("rgba") > -1) {
        var r = se(e);
        r && (e = "rgb(" + r[0] + "," + r[1] + "," + r[2] + ")", t = r[3])
    }
    return {
        color: e,
        opacity: t ? ? 1
    }
}
var _p = 1e-4;

function ow(e) {
    return e < _p && e > -1e-4
}

function _i(e) {
    return la(e * 1e3) / 1e3
}

function al(e) {
    return la(e * 1e4) / 1e4
}

function sw(e) {
    return "matrix(" + _i(e[0]) + "," + _i(e[1]) + "," + _i(e[2]) + "," + _i(e[3]) + "," + al(e[4]) + "," + al(e[5]) + ")"
}
var uw = {
    left: "start",
    right: "end",
    center: "middle",
    middle: "middle"
};

function lw(e, t, r) {
    return r === "top" ? e += t / 2 : r === "bottom" && (e -= t / 2), e
}

function fw(e) {
    return e && (e.shadowBlur || e.shadowOffsetX || e.shadowOffsetY)
}

function hw(e) {
    var t = e.style,
        r = e.getGlobalScale();
    return [t.shadowColor, (t.shadowBlur || 0).toFixed(2), (t.shadowOffsetX || 0).toFixed(2), (t.shadowOffsetY || 0).toFixed(2), r[0], r[1]].join(",")
}

function Sp(e) {
    return e && !!e.image
}

function wp(e) {
    return e && !!e.svgElement
}

function vw(e) {
    return Sp(e) || wp(e)
}

function Tp(e) {
    return e.type === "linear"
}

function bp(e) {
    return e.type === "radial"
}

function cw(e) {
    return e && (e.type === "linear" || e.type === "radial")
}

function dw(e) {
    return "url(#" + e + ")"
}

function pw(e) {
    var t = e.getGlobalScale(),
        r = Math.max(t[0], t[1]);
    return Math.max(Math.ceil(Math.log(r) / Math.log(10)), 1)
}

function gw(e) {
    var t = e.x || 0,
        r = e.y || 0,
        n = (e.rotation || 0) * Yi,
        i = q(e.scaleX, 1),
        a = q(e.scaleY, 1),
        o = e.skewX || 0,
        s = e.skewY || 0,
        u = [];
    return (t || r) && u.push("translate(" + t + "px," + r + "px)"), n && u.push("rotate(" + n + ")"), (i !== 1 || a !== 1) && u.push("scale(" + i + "," + a + ")"), (o || s) && u.push("skew(" + la(o * Yi) + "deg, " + la(s * Yi) + "deg)"), u.join(" ")
}
var yw = function() {
        return K.hasGlobalWindow && rt(window.btoa) ? function(e) {
            return window.btoa(unescape(encodeURIComponent(e)))
        } : typeof Buffer < "u" ? function(e) {
            return Buffer.from(e).toString("base64")
        } : function(e) {
            return null
        }
    }(),
    cs = Array.prototype.slice;

function Re(e, t, r) {
    return (t - e) * r + e
}

function ao(e, t, r, n) {
    for (var i = t.length, a = 0; a < i; a++) e[a] = Re(t[a], r[a], n);
    return e
}

function Dp(e, t, r, n) {
    for (var i = t.length, a = i && t[0].length, o = 0; o < i; o++) {
        e[o] || (e[o] = []);
        for (var s = 0; s < a; s++) e[o][s] = Re(t[o][s], r[o][s], n)
    }
    return e
}

function Si(e, t, r, n) {
    for (var i = t.length, a = 0; a < i; a++) e[a] = t[a] + r[a] * n;
    return e
}

function ol(e, t, r, n) {
    for (var i = t.length, a = i && t[0].length, o = 0; o < i; o++) {
        e[o] || (e[o] = []);
        for (var s = 0; s < a; s++) e[o][s] = t[o][s] + r[o][s] * n
    }
    return e
}

function Mp(e, t) {
    for (var r = e.length, n = t.length, i = r > n ? t : e, a = Math.min(r, n), o = i[a - 1] || {
            color: [0, 0, 0, 0],
            offset: 0
        }, s = a; s < Math.max(r, n); s++) i.push({
        offset: o.offset,
        color: o.color.slice()
    })
}

function Cp(e, t, r) {
    var n = e,
        i = t;
    if (!(!n.push || !i.push)) {
        var a = n.length,
            o = i.length;
        if (a !== o) {
            var s = a > o;
            if (s) n.length = o;
            else
                for (var u = a; u < o; u++) n.push(r === 1 ? i[u] : cs.call(i[u]))
        }
        for (var l = n[0] && n[0].length, u = 0; u < n.length; u++)
            if (r === 1) isNaN(n[u]) && (n[u] = i[u]);
            else
                for (var f = 0; f < l; f++) isNaN(n[u][f]) && (n[u][f] = i[u][f])
    }
}

function $i(e) {
    if (Bt(e)) {
        var t = e.length;
        if (Bt(e[0])) {
            for (var r = [], n = 0; n < t; n++) r.push(cs.call(e[n]));
            return r
        }
        return cs.call(e)
    }
    return e
}

function Zi(e) {
    return e[0] = Math.floor(e[0]) || 0, e[1] = Math.floor(e[1]) || 0, e[2] = Math.floor(e[2]) || 0, e[3] = e[3] == null ? 1 : e[3], "rgba(" + e.join(",") + ")"
}

function Pp(e) {
    return Bt(e && e[0]) ? 2 : 1
}
var wi = 0,
    Ki = 1,
    Gh = 2,
    En = 3,
    ds = 4,
    ps = 5,
    sl = 6;

function ul(e) {
    return e === ds || e === ps
}

function Ti(e) {
    return e === Ki || e === Gh
}
var yn = [0, 0, 0, 0],
    Ap = function() {
        function e(t) {
            this.keyframes = [], this.discrete = !1, this._invalid = !1, this._needsSort = !1, this._lastFr = 0, this._lastFrP = 0, this.propName = t
        }
        return e.prototype.isFinished = function() {
            return this._finished
        }, e.prototype.setFinished = function() {
            this._finished = !0, this._additiveTrack && this._additiveTrack.setFinished()
        }, e.prototype.needsAnimate = function() {
            return this.keyframes.length >= 1
        }, e.prototype.getAdditiveTrack = function() {
            return this._additiveTrack
        }, e.prototype.addKeyframe = function(t, r, n) {
            this._needsSort = !0;
            var i = this.keyframes,
                a = i.length,
                o = !1,
                s = sl,
                u = r;
            if (Bt(r)) {
                var l = Pp(r);
                s = l, (l === 1 && !at(r[0]) || l === 2 && !at(r[0][0])) && (o = !0)
            } else if (at(r) && !Rd(r)) s = wi;
            else if (X(r))
                if (!isNaN(+r)) s = wi;
                else {
                    var f = se(r);
                    f && (u = f, s = En)
                }
            else if (js(r)) {
                var h = I({}, u);
                h.colorStops = Q(r.colorStops, function(v) {
                    return {
                        offset: v.offset,
                        color: se(v.color)
                    }
                }), Tp(r) ? s = ds : bp(r) && (s = ps), u = h
            }
            a === 0 ? this.valType = s : (s !== this.valType || s === sl) && (o = !0), this.discrete = this.discrete || o;
            var c = {
                time: t,
                value: u,
                rawValue: r,
                percent: 0
            };
            return n && (c.easing = n, c.easingFunc = rt(n) ? n : Hn[n] || Bh(n)), i.push(c), c
        }, e.prototype.prepare = function(t, r) {
            var n = this.keyframes;
            this._needsSort && n.sort(function(g, p) {
                return g.time - p.time
            });
            for (var i = this.valType, a = n.length, o = n[a - 1], s = this.discrete, u = Ti(i), l = ul(i), f = 0; f < a; f++) {
                var h = n[f],
                    c = h.value,
                    v = o.value;
                h.percent = h.time / t, s || (u && f !== a - 1 ? Cp(c, v, i) : l && Mp(c.colorStops, v.colorStops))
            }
            if (!s && i !== ps && r && this.needsAnimate() && r.needsAnimate() && i === r.valType && !r._finished) {
                this._additiveTrack = r;
                for (var d = n[0].value, f = 0; f < a; f++) i === wi ? n[f].additiveValue = n[f].value - d : i === En ? n[f].additiveValue = Si([], n[f].value, d, -1) : Ti(i) && (n[f].additiveValue = i === Ki ? Si([], n[f].value, d, -1) : ol([], n[f].value, d, -1))
            }
        }, e.prototype.step = function(t, r) {
            if (!this._finished) {
                this._additiveTrack && this._additiveTrack._finished && (this._additiveTrack = null);
                var n = this._additiveTrack != null,
                    i = n ? "additiveValue" : "value",
                    a = this.valType,
                    o = this.keyframes,
                    s = o.length,
                    u = this.propName,
                    l = a === En,
                    f, h = this._lastFr,
                    c = Math.min,
                    v, d;
                if (s === 1) v = d = o[0];
                else {
                    if (r < 0) f = 0;
                    else if (r < this._lastFrP) {
                        var g = c(h + 1, s - 1);
                        for (f = g; f >= 0 && !(o[f].percent <= r); f--);
                        f = c(f, s - 2)
                    } else {
                        for (f = h; f < s && !(o[f].percent > r); f++);
                        f = c(f - 1, s - 2)
                    }
                    d = o[f + 1], v = o[f]
                }
                if (v && d) {
                    this._lastFr = f, this._lastFrP = r;
                    var p = d.percent - v.percent,
                        y = p === 0 ? 1 : c((r - v.percent) / p, 1);
                    d.easingFunc && (y = d.easingFunc(y));
                    var m = n ? this._additiveValue : l ? yn : t[u];
                    if ((Ti(a) || l) && !m && (m = this._additiveValue = []), this.discrete) t[u] = y < 1 ? v.rawValue : d.rawValue;
                    else if (Ti(a)) a === Ki ? ao(m, v[i], d[i], y) : Dp(m, v[i], d[i], y);
                    else if (ul(a)) {
                        var _ = v[i],
                            S = d[i],
                            T = a === ds;
                        t[u] = {
                            type: T ? "linear" : "radial",
                            x: Re(_.x, S.x, y),
                            y: Re(_.y, S.y, y),
                            colorStops: Q(_.colorStops, function(b, M) {
                                var D = S.colorStops[M];
                                return {
                                    offset: Re(b.offset, D.offset, y),
                                    color: Zi(ao([], b.color, D.color, y))
                                }
                            }),
                            global: S.global
                        }, T ? (t[u].x2 = Re(_.x2, S.x2, y), t[u].y2 = Re(_.y2, S.y2, y)) : t[u].r = Re(_.r, S.r, y)
                    } else if (l) ao(m, v[i], d[i], y), n || (t[u] = Zi(m));
                    else {
                        var w = Re(v[i], d[i], y);
                        n ? this._additiveValue = w : t[u] = w
                    }
                    n && this._addToTarget(t)
                }
            }
        }, e.prototype._addToTarget = function(t) {
            var r = this.valType,
                n = this.propName,
                i = this._additiveValue;
            r === wi ? t[n] = t[n] + i : r === En ? (se(t[n], yn), Si(yn, yn, i, 1), t[n] = Zi(yn)) : r === Ki ? Si(t[n], t[n], i, 1) : r === Gh && ol(t[n], t[n], i, 1)
        }, e
    }(),
    nu = function() {
        function e(t, r, n, i) {
            if (this._tracks = {}, this._trackKeys = [], this._maxTime = 0, this._started = 0, this._clip = null, this._target = t, this._loop = r, r && i) {
                _h("Can' use additive animation on looped animation.");
                return
            }
            this._additiveAnimators = i, this._allowDiscrete = n
        }
        return e.prototype.getMaxTime = function() {
            return this._maxTime
        }, e.prototype.getDelay = function() {
            return this._delay
        }, e.prototype.getLoop = function() {
            return this._loop
        }, e.prototype.getTarget = function() {
            return this._target
        }, e.prototype.changeTarget = function(t) {
            this._target = t
        }, e.prototype.when = function(t, r, n) {
            return this.whenWithKeys(t, r, ht(r), n)
        }, e.prototype.whenWithKeys = function(t, r, n, i) {
            for (var a = this._tracks, o = 0; o < n.length; o++) {
                var s = n[o],
                    u = a[s];
                if (!u) {
                    u = a[s] = new Ap(s);
                    var l = void 0,
                        f = this._getAdditiveTrack(s);
                    if (f) {
                        var h = f.keyframes,
                            c = h[h.length - 1];
                        l = c && c.value, f.valType === En && l && (l = Zi(l))
                    } else l = this._target[s];
                    if (l == null) continue;
                    t > 0 && u.addKeyframe(0, $i(l), i), this._trackKeys.push(s)
                }
                u.addKeyframe(t, $i(r[s]), i)
            }
            return this._maxTime = Math.max(this._maxTime, t), this
        }, e.prototype.pause = function() {
            this._clip.pause(), this._paused = !0
        }, e.prototype.resume = function() {
            this._clip.resume(), this._paused = !1
        }, e.prototype.isPaused = function() {
            return !!this._paused
        }, e.prototype.duration = function(t) {
            return this._maxTime = t, this._force = !0, this
        }, e.prototype._doneCallback = function() {
            this._setTracksFinished(), this._clip = null;
            var t = this._doneCbs;
            if (t)
                for (var r = t.length, n = 0; n < r; n++) t[n].call(this)
        }, e.prototype._abortedCallback = function() {
            this._setTracksFinished();
            var t = this.animation,
                r = this._abortedCbs;
            if (t && t.removeClip(this._clip), this._clip = null, r)
                for (var n = 0; n < r.length; n++) r[n].call(this)
        }, e.prototype._setTracksFinished = function() {
            for (var t = this._tracks, r = this._trackKeys, n = 0; n < r.length; n++) t[r[n]].setFinished()
        }, e.prototype._getAdditiveTrack = function(t) {
            var r, n = this._additiveAnimators;
            if (n)
                for (var i = 0; i < n.length; i++) {
                    var a = n[i].getTrack(t);
                    a && (r = a)
                }
            return r
        }, e.prototype.start = function(t) {
            if (!(this._started > 0)) {
                this._started = 1;
                for (var r = this, n = [], i = this._maxTime || 0, a = 0; a < this._trackKeys.length; a++) {
                    var o = this._trackKeys[a],
                        s = this._tracks[o],
                        u = this._getAdditiveTrack(o),
                        l = s.keyframes,
                        f = l.length;
                    if (s.prepare(i, u), s.needsAnimate())
                        if (!this._allowDiscrete && s.discrete) {
                            var h = l[f - 1];
                            h && (r._target[s.propName] = h.rawValue), s.setFinished()
                        } else n.push(s)
                }
                if (n.length || this._force) {
                    var c = new pp({
                        life: i,
                        loop: this._loop,
                        delay: this._delay || 0,
                        onframe: function(v) {
                            r._started = 2;
                            var d = r._additiveAnimators;
                            if (d) {
                                for (var g = !1, p = 0; p < d.length; p++)
                                    if (d[p]._clip) {
                                        g = !0;
                                        break
                                    }
                                g || (r._additiveAnimators = null)
                            }
                            for (var p = 0; p < n.length; p++) n[p].step(r._target, v);
                            var y = r._onframeCbs;
                            if (y)
                                for (var p = 0; p < y.length; p++) y[p](r._target, v)
                        },
                        ondestroy: function() {
                            r._doneCallback()
                        }
                    });
                    this._clip = c, this.animation && this.animation.addClip(c), t && c.setEasing(t)
                } else this._doneCallback();
                return this
            }
        }, e.prototype.stop = function(t) {
            if (this._clip) {
                var r = this._clip;
                t && r.onframe(1), this._abortedCallback()
            }
        }, e.prototype.delay = function(t) {
            return this._delay = t, this
        }, e.prototype.during = function(t) {
            return t && (this._onframeCbs || (this._onframeCbs = []), this._onframeCbs.push(t)), this
        }, e.prototype.done = function(t) {
            return t && (this._doneCbs || (this._doneCbs = []), this._doneCbs.push(t)), this
        }, e.prototype.aborted = function(t) {
            return t && (this._abortedCbs || (this._abortedCbs = []), this._abortedCbs.push(t)), this
        }, e.prototype.getClip = function() {
            return this._clip
        }, e.prototype.getTrack = function(t) {
            return this._tracks[t]
        }, e.prototype.getTracks = function() {
            var t = this;
            return Q(this._trackKeys, function(r) {
                return t._tracks[r]
            })
        }, e.prototype.stopTracks = function(t, r) {
            if (!t.length || !this._clip) return !0;
            for (var n = this._tracks, i = this._trackKeys, a = 0; a < t.length; a++) {
                var o = n[t[a]];
                o && !o.isFinished() && (r ? o.step(this._target, 1) : this._started === 1 && o.step(this._target, 0), o.setFinished())
            }
            for (var s = !0, a = 0; a < i.length; a++)
                if (!n[i[a]].isFinished()) {
                    s = !1;
                    break
                }
            return s && this._abortedCallback(), s
        }, e.prototype.saveTo = function(t, r, n) {
            if (t) {
                r = r || this._trackKeys;
                for (var i = 0; i < r.length; i++) {
                    var a = r[i],
                        o = this._tracks[a];
                    if (!(!o || o.isFinished())) {
                        var s = o.keyframes,
                            u = s[n ? 0 : s.length - 1];
                        u && (t[a] = $i(u.rawValue))
                    }
                }
            }
        }, e.prototype.__changeFinalValue = function(t, r) {
            r = r || ht(t);
            for (var n = 0; n < r.length; n++) {
                var i = r[n],
                    a = this._tracks[i];
                if (a) {
                    var o = a.keyframes;
                    if (o.length > 1) {
                        var s = o.pop();
                        a.addKeyframe(s.time, t[i]), a.prepare(this._maxTime, a.getAdditiveTrack())
                    }
                }
            }
        }, e
    }();

function Zr() {
    return new Date().getTime()
}
var Rp = function(e) {
        W(t, e);

        function t(r) {
            var n = e.call(this) || this;
            return n._running = !1, n._time = 0, n._pausedTime = 0, n._pauseStart = 0, n._paused = !1, r = r || {}, n.stage = r.stage || {}, n
        }
        return t.prototype.addClip = function(r) {
            r.animation && this.removeClip(r), this._head ? (this._tail.next = r, r.prev = this._tail, r.next = null, this._tail = r) : this._head = this._tail = r, r.animation = this
        }, t.prototype.addAnimator = function(r) {
            r.animation = this;
            var n = r.getClip();
            n && this.addClip(n)
        }, t.prototype.removeClip = function(r) {
            if (r.animation) {
                var n = r.prev,
                    i = r.next;
                n ? n.next = i : this._head = i, i ? i.prev = n : this._tail = n, r.next = r.prev = r.animation = null
            }
        }, t.prototype.removeAnimator = function(r) {
            var n = r.getClip();
            n && this.removeClip(n), r.animation = null
        }, t.prototype.update = function(r) {
            for (var n = Zr() - this._pausedTime, i = n - this._time, a = this._head; a;) {
                var o = a.next,
                    s = a.step(n, i);
                s && (a.ondestroy(), this.removeClip(a)), a = o
            }
            this._time = n, r || (this.trigger("frame", i), this.stage.update && this.stage.update())
        }, t.prototype._startLoop = function() {
            var r = this;
            this._running = !0;

            function n() {
                r._running && (fs(n), !r._paused && r.update())
            }
            fs(n)
        }, t.prototype.start = function() {
            this._running || (this._time = Zr(), this._pausedTime = 0, this._startLoop())
        }, t.prototype.stop = function() {
            this._running = !1
        }, t.prototype.pause = function() {
            this._paused || (this._pauseStart = Zr(), this._paused = !0)
        }, t.prototype.resume = function() {
            this._paused && (this._pausedTime += Zr() - this._pauseStart, this._paused = !1)
        }, t.prototype.clear = function() {
            for (var r = this._head; r;) {
                var n = r.next;
                r.prev = r.next = r.animation = null, r = n
            }
            this._head = this._tail = null
        }, t.prototype.isFinished = function() {
            return this._head == null
        }, t.prototype.animate = function(r, n) {
            n = n || {}, this.start();
            var i = new nu(r, n.loop);
            return this.addAnimator(i), i
        }, t
    }(Ee),
    xp = 300,
    oo = K.domSupported,
    so = function() {
        var e = ["click", "dblclick", "mousewheel", "wheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"],
            t = ["touchstart", "touchend", "touchmove"],
            r = {
                pointerdown: 1,
                pointerup: 1,
                pointermove: 1,
                pointerout: 1
            },
            n = Q(e, function(i) {
                var a = i.replace("mouse", "pointer");
                return r.hasOwnProperty(a) ? a : i
            });
        return {
            mouse: e,
            touch: t,
            pointer: n
        }
    }(),
    ll = {
        mouse: ["mousemove", "mouseup"],
        pointer: ["pointermove", "pointerup"]
    },
    fl = !1;

function gs(e) {
    var t = e.pointerType;
    return t === "pen" || t === "touch"
}

function Lp(e) {
    e.touching = !0, e.touchTimer != null && (clearTimeout(e.touchTimer), e.touchTimer = null), e.touchTimer = setTimeout(function() {
        e.touching = !1, e.touchTimer = null
    }, 700)
}

function uo(e) {
    e && (e.zrByTouch = !0)
}

function Ip(e, t) {
    return te(e.dom, new Ep(e, t), !0)
}

function Vh(e, t) {
    for (var r = t, n = !1; r && r.nodeType !== 9 && !(n = r.domBelongToZr || r !== t && r === e.painterRoot);) r = r.parentNode;
    return n
}
var Ep = function() {
        function e(t, r) {
            this.stopPropagation = Qt, this.stopImmediatePropagation = Qt, this.preventDefault = Qt, this.type = r.type, this.target = this.currentTarget = t.dom, this.pointerType = r.pointerType, this.clientX = r.clientX, this.clientY = r.clientY
        }
        return e
    }(),
    ee = {
        mousedown: function(e) {
            e = te(this.dom, e), this.__mayPointerCapture = [e.zrX, e.zrY], this.trigger("mousedown", e)
        },
        mousemove: function(e) {
            e = te(this.dom, e);
            var t = this.__mayPointerCapture;
            t && (e.zrX !== t[0] || e.zrY !== t[1]) && this.__togglePointerCapture(!0), this.trigger("mousemove", e)
        },
        mouseup: function(e) {
            e = te(this.dom, e), this.__togglePointerCapture(!1), this.trigger("mouseup", e)
        },
        mouseout: function(e) {
            e = te(this.dom, e);
            var t = e.toElement || e.relatedTarget;
            Vh(this, t) || (this.__pointerCapturing && (e.zrEventControl = "no_globalout"), this.trigger("mouseout", e))
        },
        wheel: function(e) {
            fl = !0, e = te(this.dom, e), this.trigger("mousewheel", e)
        },
        mousewheel: function(e) {
            fl || (e = te(this.dom, e), this.trigger("mousewheel", e))
        },
        touchstart: function(e) {
            e = te(this.dom, e), uo(e), this.__lastTouchMoment = new Date, this.handler.processGesture(e, "start"), ee.mousemove.call(this, e), ee.mousedown.call(this, e)
        },
        touchmove: function(e) {
            e = te(this.dom, e), uo(e), this.handler.processGesture(e, "change"), ee.mousemove.call(this, e)
        },
        touchend: function(e) {
            e = te(this.dom, e), uo(e), this.handler.processGesture(e, "end"), ee.mouseup.call(this, e), +new Date - +this.__lastTouchMoment < xp && ee.click.call(this, e)
        },
        pointerdown: function(e) {
            ee.mousedown.call(this, e)
        },
        pointermove: function(e) {
            gs(e) || ee.mousemove.call(this, e)
        },
        pointerup: function(e) {
            ee.mouseup.call(this, e)
        },
        pointerout: function(e) {
            gs(e) || ee.mouseout.call(this, e)
        }
    };
P(["click", "dblclick", "contextmenu"], function(e) {
    ee[e] = function(t) {
        t = te(this.dom, t), this.trigger(e, t)
    }
});
var ys = {
    pointermove: function(e) {
        gs(e) || ys.mousemove.call(this, e)
    },
    pointerup: function(e) {
        ys.mouseup.call(this, e)
    },
    mousemove: function(e) {
        this.trigger("mousemove", e)
    },
    mouseup: function(e) {
        var t = this.__pointerCapturing;
        this.__togglePointerCapture(!1), this.trigger("mouseup", e), t && (e.zrEventControl = "only_globalout", this.trigger("mouseout", e))
    }
};

function Op(e, t) {
    var r = t.domHandlers;
    K.pointerEventsSupported ? P(so.pointer, function(n) {
        Qi(t, n, function(i) {
            r[n].call(e, i)
        })
    }) : (K.touchEventsSupported && P(so.touch, function(n) {
        Qi(t, n, function(i) {
            r[n].call(e, i), Lp(t)
        })
    }), P(so.mouse, function(n) {
        Qi(t, n, function(i) {
            i = eu(i), t.touching || r[n].call(e, i)
        })
    }))
}

function kp(e, t) {
    K.pointerEventsSupported ? P(ll.pointer, r) : K.touchEventsSupported || P(ll.mouse, r);

    function r(n) {
        function i(a) {
            a = eu(a), Vh(e, a.target) || (a = Ip(e, a), t.domHandlers[n].call(e, a))
        }
        Qi(t, n, i, {
            capture: !0
        })
    }
}

function Qi(e, t, r, n) {
    e.mounted[t] = r, e.listenerOpts[t] = n, Zd(e.domTarget, t, r, n)
}

function lo(e) {
    var t = e.mounted;
    for (var r in t) t.hasOwnProperty(r) && Kd(e.domTarget, r, t[r], e.listenerOpts[r]);
    e.mounted = {}
}
var hl = function() {
        function e(t, r) {
            this.mounted = {}, this.listenerOpts = {}, this.touching = !1, this.domTarget = t, this.domHandlers = r
        }
        return e
    }(),
    Fp = function(e) {
        W(t, e);

        function t(r, n) {
            var i = e.call(this) || this;
            return i.__pointerCapturing = !1, i.dom = r, i.painterRoot = n, i._localHandlerScope = new hl(r, ee), oo && (i._globalHandlerScope = new hl(document, ys)), Op(i, i._localHandlerScope), i
        }
        return t.prototype.dispose = function() {
            lo(this._localHandlerScope), oo && lo(this._globalHandlerScope)
        }, t.prototype.setCursor = function(r) {
            this.dom.style && (this.dom.style.cursor = r || "default")
        }, t.prototype.__togglePointerCapture = function(r) {
            if (this.__mayPointerCapture = null, oo && +this.__pointerCapturing ^ +r) {
                this.__pointerCapturing = r;
                var n = this._globalHandlerScope;
                r ? kp(this, n) : lo(n)
            }
        }, t
    }(Ee),
    Uh = 1;
K.hasGlobalWindow && (Uh = Math.max(window.devicePixelRatio || window.screen && window.screen.deviceXDPI / window.screen.logicalXDPI || 1, 1));
var vl = Uh,
    ms = .4,
    _s = "#333",
    Ss = "#ccc",
    Np = "#eee",
    cl = Dh,
    Bp = 5e-5;

function rr(e) {
    return e > Bp || e < -5e-5
}
var nr = [],
    kr = [],
    fo = tn(),
    ho = Math.abs,
    iu = function() {
        function e() {}
        return e.prototype.getLocalTransform = function(t) {
            return e.getLocalTransform(this, t)
        }, e.prototype.setPosition = function(t) {
            this.x = t[0], this.y = t[1]
        }, e.prototype.setScale = function(t) {
            this.scaleX = t[0], this.scaleY = t[1]
        }, e.prototype.setSkew = function(t) {
            this.skewX = t[0], this.skewY = t[1]
        }, e.prototype.setOrigin = function(t) {
            this.originX = t[0], this.originY = t[1]
        }, e.prototype.needLocalTransform = function() {
            return rr(this.rotation) || rr(this.x) || rr(this.y) || rr(this.scaleX - 1) || rr(this.scaleY - 1) || rr(this.skewX) || rr(this.skewY)
        }, e.prototype.updateTransform = function() {
            var t = this.parent && this.parent.transform,
                r = this.needLocalTransform(),
                n = this.transform;
            if (!(r || t)) {
                n && (cl(n), this.invTransform = null);
                return
            }
            n = n || tn(), r ? this.getLocalTransform(n) : cl(n), t && (r ? Wi(n, t, n) : Mh(n, t)), this.transform = n, this._resolveGlobalScaleRatio(n)
        }, e.prototype._resolveGlobalScaleRatio = function(t) {
            var r = this.globalScaleRatio;
            if (r != null && r !== 1) {
                this.getGlobalScale(nr);
                var n = nr[0] < 0 ? -1 : 1,
                    i = nr[1] < 0 ? -1 : 1,
                    a = ((nr[0] - n) * r + n) / nr[0] || 0,
                    o = ((nr[1] - i) * r + i) / nr[1] || 0;
                t[0] *= a, t[1] *= a, t[2] *= o, t[3] *= o
            }
            this.invTransform = this.invTransform || tn(), ru(this.invTransform, t)
        }, e.prototype.getComputedTransform = function() {
            for (var t = this, r = []; t;) r.push(t), t = t.parent;
            for (; t = r.pop();) t.updateTransform();
            return this.transform
        }, e.prototype.setLocalTransform = function(t) {
            if (t) {
                var r = t[0] * t[0] + t[1] * t[1],
                    n = t[2] * t[2] + t[3] * t[3],
                    i = Math.atan2(t[1], t[0]),
                    a = Math.PI / 2 + i - Math.atan2(t[3], t[2]);
                n = Math.sqrt(n) * Math.cos(a), r = Math.sqrt(r), this.skewX = a, this.skewY = 0, this.rotation = -i, this.x = +t[4], this.y = +t[5], this.scaleX = r, this.scaleY = n, this.originX = 0, this.originY = 0
            }
        }, e.prototype.decomposeTransform = function() {
            if (this.transform) {
                var t = this.parent,
                    r = this.transform;
                t && t.transform && (t.invTransform = t.invTransform || tn(), Wi(kr, t.invTransform, r), r = kr);
                var n = this.originX,
                    i = this.originY;
                (n || i) && (fo[4] = n, fo[5] = i, Wi(kr, r, fo), kr[4] -= n, kr[5] -= i, r = kr), this.setLocalTransform(r)
            }
        }, e.prototype.getGlobalScale = function(t) {
            var r = this.transform;
            return t = t || [], r ? (t[0] = Math.sqrt(r[0] * r[0] + r[1] * r[1]), t[1] = Math.sqrt(r[2] * r[2] + r[3] * r[3]), r[0] < 0 && (t[0] = -t[0]), r[3] < 0 && (t[1] = -t[1]), t) : (t[0] = 1, t[1] = 1, t)
        }, e.prototype.transformCoordToLocal = function(t, r) {
            var n = [t, r],
                i = this.invTransform;
            return i && jr(n, n, i), n
        }, e.prototype.transformCoordToGlobal = function(t, r) {
            var n = [t, r],
                i = this.transform;
            return i && jr(n, n, i), n
        }, e.prototype.getLineScale = function() {
            var t = this.transform;
            return t && ho(t[0] - 1) > 1e-10 && ho(t[3] - 1) > 1e-10 ? Math.sqrt(ho(t[0] * t[3] - t[2] * t[1])) : 1
        }, e.prototype.copyTransform = function(t) {
            zp(this, t)
        }, e.getLocalTransform = function(t, r) {
            r = r || [];
            var n = t.originX || 0,
                i = t.originY || 0,
                a = t.scaleX,
                o = t.scaleY,
                s = t.anchorX,
                u = t.anchorY,
                l = t.rotation || 0,
                f = t.x,
                h = t.y,
                c = t.skewX ? Math.tan(t.skewX) : 0,
                v = t.skewY ? Math.tan(-t.skewY) : 0;
            if (n || i || s || u) {
                var d = n + s,
                    g = i + u;
                r[4] = -d * a - c * g * o, r[5] = -g * o - v * d * a
            } else r[4] = r[5] = 0;
            return r[0] = a, r[3] = o, r[1] = v * a, r[2] = c * o, l && tp(r, r, l), r[4] += n + f, r[5] += i + h, r
        }, e.initDefaultProps = function() {
            var t = e.prototype;
            t.scaleX = t.scaleY = t.globalScaleRatio = 1, t.x = t.y = t.originX = t.originY = t.skewX = t.skewY = t.rotation = t.anchorX = t.anchorY = 0
        }(), e
    }(),
    Jn = ["x", "y", "originX", "originY", "anchorX", "anchorY", "rotation", "scaleX", "scaleY", "skewX", "skewY"];

function zp(e, t) {
    for (var r = 0; r < Jn.length; r++) {
        var n = Jn[r];
        e[n] = t[n]
    }
}
var dl = {};

function Yt(e, t) {
    t = t || Cr;
    var r = dl[t];
    r || (r = dl[t] = new ui(500));
    var n = r.get(e);
    return n == null && (n = oi.measureText(e, t).width, r.put(e, n)), n
}

function pl(e, t, r, n) {
    var i = Yt(e, t),
        a = au(t),
        o = On(0, i, r),
        s = Xr(0, a, n),
        u = new nt(o, s, i, a);
    return u
}

function Hp(e, t, r, n) {
    var i = ((e || "") + "").split(`
`),
        a = i.length;
    if (a === 1) return pl(i[0], t, r, n);
    for (var o = new nt(0, 0, 0, 0), s = 0; s < i.length; s++) {
        var u = pl(i[s], t, r, n);
        s === 0 ? o.copy(u) : o.union(u)
    }
    return o
}

function On(e, t, r) {
    return r === "right" ? e -= t : r === "center" && (e -= t / 2), e
}

function Xr(e, t, r) {
    return r === "middle" ? e -= t / 2 : r === "bottom" && (e -= t), e
}

function au(e) {
    return Yt("国", e)
}

function nn(e, t) {
    return typeof e == "string" ? e.lastIndexOf("%") >= 0 ? parseFloat(e) / 100 * t : parseFloat(e) : e
}

function Yh(e, t, r) {
    var n = t.position || "inside",
        i = t.distance != null ? t.distance : 5,
        a = r.height,
        o = r.width,
        s = a / 2,
        u = r.x,
        l = r.y,
        f = "left",
        h = "top";
    if (n instanceof Array) u += nn(n[0], r.width), l += nn(n[1], r.height), f = null, h = null;
    else switch (n) {
        case "left":
            u -= i, l += s, f = "right", h = "middle";
            break;
        case "right":
            u += i + o, l += s, h = "middle";
            break;
        case "top":
            u += o / 2, l -= i, f = "center", h = "bottom";
            break;
        case "bottom":
            u += o / 2, l += a + i, f = "center";
            break;
        case "inside":
            u += o / 2, l += s, f = "center", h = "middle";
            break;
        case "insideLeft":
            u += i, l += s, h = "middle";
            break;
        case "insideRight":
            u += o - i, l += s, f = "right", h = "middle";
            break;
        case "insideTop":
            u += o / 2, l += i, f = "center";
            break;
        case "insideBottom":
            u += o / 2, l += a - i, f = "center", h = "bottom";
            break;
        case "insideTopLeft":
            u += i, l += i;
            break;
        case "insideTopRight":
            u += o - i, l += i, f = "right";
            break;
        case "insideBottomLeft":
            u += i, l += a - i, h = "bottom";
            break;
        case "insideBottomRight":
            u += o - i, l += a - i, f = "right", h = "bottom";
            break
    }
    return e = e || {}, e.x = u, e.y = l, e.align = f, e.verticalAlign = h, e
}
var vo = "__zr_normal__",
    co = Jn.concat(["ignore"]),
    Gp = Ze(Jn, function(e, t) {
        return e[t] = !0, e
    }, {
        ignore: !1
    }),
    Fr = {},
    Vp = new nt(0, 0, 0, 0),
    xa = function() {
        function e(t) {
            this.id = mh(), this.animators = [], this.currentStates = [], this.states = {}, this._init(t)
        }
        return e.prototype._init = function(t) {
            this.attr(t)
        }, e.prototype.drift = function(t, r, n) {
            switch (this.draggable) {
                case "horizontal":
                    r = 0;
                    break;
                case "vertical":
                    t = 0;
                    break
            }
            var i = this.transform;
            i || (i = this.transform = [1, 0, 0, 1, 0, 0]), i[4] += t, i[5] += r, this.decomposeTransform(), this.markRedraw()
        }, e.prototype.beforeUpdate = function() {}, e.prototype.afterUpdate = function() {}, e.prototype.update = function() {
            this.updateTransform(), this.__dirty && this.updateInnerText()
        }, e.prototype.updateInnerText = function(t) {
            var r = this._textContent;
            if (r && (!r.ignore || t)) {
                this.textConfig || (this.textConfig = {});
                var n = this.textConfig,
                    i = n.local,
                    a = r.innerTransformable,
                    o = void 0,
                    s = void 0,
                    u = !1;
                a.parent = i ? this : null;
                var l = !1;
                if (a.copyTransform(r), n.position != null) {
                    var f = Vp;
                    n.layoutRect ? f.copy(n.layoutRect) : f.copy(this.getBoundingRect()), i || f.applyTransform(this.transform), this.calculateTextPosition ? this.calculateTextPosition(Fr, n, f) : Yh(Fr, n, f), a.x = Fr.x, a.y = Fr.y, o = Fr.align, s = Fr.verticalAlign;
                    var h = n.origin;
                    if (h && n.rotation != null) {
                        var c = void 0,
                            v = void 0;
                        h === "center" ? (c = f.width * .5, v = f.height * .5) : (c = nn(h[0], f.width), v = nn(h[1], f.height)), l = !0, a.originX = -a.x + c + (i ? 0 : f.x), a.originY = -a.y + v + (i ? 0 : f.y)
                    }
                }
                n.rotation != null && (a.rotation = n.rotation);
                var d = n.offset;
                d && (a.x += d[0], a.y += d[1], l || (a.originX = -d[0], a.originY = -d[1]));
                var g = n.inside == null ? typeof n.position == "string" && n.position.indexOf("inside") >= 0 : n.inside,
                    p = this._innerTextDefaultStyle || (this._innerTextDefaultStyle = {}),
                    y = void 0,
                    m = void 0,
                    _ = void 0;
                g && this.canBeInsideText() ? (y = n.insideFill, m = n.insideStroke, (y == null || y === "auto") && (y = this.getInsideTextFill()), (m == null || m === "auto") && (m = this.getInsideTextStroke(y), _ = !0)) : (y = n.outsideFill, m = n.outsideStroke, (y == null || y === "auto") && (y = this.getOutsideFill()), (m == null || m === "auto") && (m = this.getOutsideStroke(y), _ = !0)), y = y || "#000", (y !== p.fill || m !== p.stroke || _ !== p.autoStroke || o !== p.align || s !== p.verticalAlign) && (u = !0, p.fill = y, p.stroke = m, p.autoStroke = _, p.align = o, p.verticalAlign = s, r.setDefaultTextStyle(p)), r.__dirty |= Tr, u && r.dirtyStyle(!0)
            }
        }, e.prototype.canBeInsideText = function() {
            return !0
        }, e.prototype.getInsideTextFill = function() {
            return "#fff"
        }, e.prototype.getInsideTextStroke = function(t) {
            return "#000"
        }, e.prototype.getOutsideFill = function() {
            return this.__zr && this.__zr.isDarkMode() ? Ss : _s
        }, e.prototype.getOutsideStroke = function(t) {
            var r = this.__zr && this.__zr.getBackgroundColor(),
                n = typeof r == "string" && se(r);
            n || (n = [255, 255, 255, 1]);
            for (var i = n[3], a = this.__zr.isDarkMode(), o = 0; o < 3; o++) n[o] = n[o] * i + (a ? 0 : 255) * (1 - i);
            return n[3] = 1, li(n, "rgba")
        }, e.prototype.traverse = function(t, r) {}, e.prototype.attrKV = function(t, r) {
            t === "textConfig" ? this.setTextConfig(r) : t === "textContent" ? this.setTextContent(r) : t === "clipPath" ? this.setClipPath(r) : t === "extra" ? (this.extra = this.extra || {}, I(this.extra, r)) : this[t] = r
        }, e.prototype.hide = function() {
            this.ignore = !0, this.markRedraw()
        }, e.prototype.show = function() {
            this.ignore = !1, this.markRedraw()
        }, e.prototype.attr = function(t, r) {
            if (typeof t == "string") this.attrKV(t, r);
            else if (H(t))
                for (var n = t, i = ht(n), a = 0; a < i.length; a++) {
                    var o = i[a];
                    this.attrKV(o, t[o])
                }
            return this.markRedraw(), this
        }, e.prototype.saveCurrentToNormalState = function(t) {
            this._innerSaveToNormal(t);
            for (var r = this._normalState, n = 0; n < this.animators.length; n++) {
                var i = this.animators[n],
                    a = i.__fromStateTransition;
                if (!(i.getLoop() || a && a !== vo)) {
                    var o = i.targetName,
                        s = o ? r[o] : r;
                    i.saveTo(s)
                }
            }
        }, e.prototype._innerSaveToNormal = function(t) {
            var r = this._normalState;
            r || (r = this._normalState = {}), t.textConfig && !r.textConfig && (r.textConfig = this.textConfig), this._savePrimaryToNormal(t, r, co)
        }, e.prototype._savePrimaryToNormal = function(t, r, n) {
            for (var i = 0; i < n.length; i++) {
                var a = n[i];
                t[a] != null && !(a in r) && (r[a] = this[a])
            }
        }, e.prototype.hasState = function() {
            return this.currentStates.length > 0
        }, e.prototype.getState = function(t) {
            return this.states[t]
        }, e.prototype.ensureState = function(t) {
            var r = this.states;
            return r[t] || (r[t] = {}), r[t]
        }, e.prototype.clearStates = function(t) {
            this.useState(vo, !1, t)
        }, e.prototype.useState = function(t, r, n, i) {
            var a = t === vo,
                o = this.hasState();
            if (!(!o && a)) {
                var s = this.currentStates,
                    u = this.stateTransition;
                if (!(ft(s, t) >= 0 && (r || s.length === 1))) {
                    var l;
                    if (this.stateProxy && !a && (l = this.stateProxy(t)), l || (l = this.states && this.states[t]), !l && !a) {
                        _h("State " + t + " not exists.");
                        return
                    }
                    a || this.saveCurrentToNormalState(l);
                    var f = !!(l && l.hoverLayer || i);
                    f && this._toggleHoverLayerFlag(!0), this._applyStateObj(t, l, this._normalState, r, !n && !this.__inHover && u && u.duration > 0, u);
                    var h = this._textContent,
                        c = this._textGuide;
                    return h && h.useState(t, r, n, f), c && c.useState(t, r, n, f), a ? (this.currentStates = [], this._normalState = {}) : r ? this.currentStates.push(t) : this.currentStates = [t], this._updateAnimationTargets(), this.markRedraw(), !f && this.__inHover && (this._toggleHoverLayerFlag(!1), this.__dirty &= -2), l
                }
            }
        }, e.prototype.useStates = function(t, r, n) {
            if (!t.length) this.clearStates();
            else {
                var i = [],
                    a = this.currentStates,
                    o = t.length,
                    s = o === a.length;
                if (s) {
                    for (var u = 0; u < o; u++)
                        if (t[u] !== a[u]) {
                            s = !1;
                            break
                        }
                }
                if (s) return;
                for (var u = 0; u < o; u++) {
                    var l = t[u],
                        f = void 0;
                    this.stateProxy && (f = this.stateProxy(l, t)), f || (f = this.states[l]), f && i.push(f)
                }
                var h = i[o - 1],
                    c = !!(h && h.hoverLayer || n);
                c && this._toggleHoverLayerFlag(!0);
                var v = this._mergeStates(i),
                    d = this.stateTransition;
                this.saveCurrentToNormalState(v), this._applyStateObj(t.join(","), v, this._normalState, !1, !r && !this.__inHover && d && d.duration > 0, d);
                var g = this._textContent,
                    p = this._textGuide;
                g && g.useStates(t, r, c), p && p.useStates(t, r, c), this._updateAnimationTargets(), this.currentStates = t.slice(), this.markRedraw(), !c && this.__inHover && (this._toggleHoverLayerFlag(!1), this.__dirty &= -2)
            }
        }, e.prototype.isSilent = function() {
            for (var t = this.silent, r = this.parent; !t && r;) {
                if (r.silent) {
                    t = !0;
                    break
                }
                r = r.parent
            }
            return t
        }, e.prototype._updateAnimationTargets = function() {
            for (var t = 0; t < this.animators.length; t++) {
                var r = this.animators[t];
                r.targetName && r.changeTarget(this[r.targetName])
            }
        }, e.prototype.removeState = function(t) {
            var r = ft(this.currentStates, t);
            if (r >= 0) {
                var n = this.currentStates.slice();
                n.splice(r, 1), this.useStates(n)
            }
        }, e.prototype.replaceState = function(t, r, n) {
            var i = this.currentStates.slice(),
                a = ft(i, t),
                o = ft(i, r) >= 0;
            a >= 0 ? o ? i.splice(a, 1) : i[a] = r : n && !o && i.push(r), this.useStates(i)
        }, e.prototype.toggleState = function(t, r) {
            r ? this.useState(t, !0) : this.removeState(t)
        }, e.prototype._mergeStates = function(t) {
            for (var r = {}, n, i = 0; i < t.length; i++) {
                var a = t[i];
                I(r, a), a.textConfig && (n = n || {}, I(n, a.textConfig))
            }
            return n && (r.textConfig = n), r
        }, e.prototype._applyStateObj = function(t, r, n, i, a, o) {
            var s = !(r && i);
            r && r.textConfig ? (this.textConfig = I({}, i ? this.textConfig : n.textConfig), I(this.textConfig, r.textConfig)) : s && n.textConfig && (this.textConfig = n.textConfig);
            for (var u = {}, l = !1, f = 0; f < co.length; f++) {
                var h = co[f],
                    c = a && Gp[h];
                r && r[h] != null ? c ? (l = !0, u[h] = r[h]) : this[h] = r[h] : s && n[h] != null && (c ? (l = !0, u[h] = n[h]) : this[h] = n[h])
            }
            if (!a)
                for (var f = 0; f < this.animators.length; f++) {
                    var v = this.animators[f],
                        d = v.targetName;
                    v.getLoop() || v.__changeFinalValue(d ? (r || n)[d] : r || n)
                }
            l && this._transitionState(t, u, o)
        }, e.prototype._attachComponent = function(t) {
            if (!(t.__zr && !t.__hostTarget) && t !== this) {
                var r = this.__zr;
                r && t.addSelfToZr(r), t.__zr = r, t.__hostTarget = this
            }
        }, e.prototype._detachComponent = function(t) {
            t.__zr && t.removeSelfFromZr(t.__zr), t.__zr = null, t.__hostTarget = null
        }, e.prototype.getClipPath = function() {
            return this._clipPath
        }, e.prototype.setClipPath = function(t) {
            this._clipPath && this._clipPath !== t && this.removeClipPath(), this._attachComponent(t), this._clipPath = t, this.markRedraw()
        }, e.prototype.removeClipPath = function() {
            var t = this._clipPath;
            t && (this._detachComponent(t), this._clipPath = null, this.markRedraw())
        }, e.prototype.getTextContent = function() {
            return this._textContent
        }, e.prototype.setTextContent = function(t) {
            var r = this._textContent;
            r !== t && (r && r !== t && this.removeTextContent(), t.innerTransformable = new iu, this._attachComponent(t), this._textContent = t, this.markRedraw())
        }, e.prototype.setTextConfig = function(t) {
            this.textConfig || (this.textConfig = {}), I(this.textConfig, t), this.markRedraw()
        }, e.prototype.removeTextConfig = function() {
            this.textConfig = null, this.markRedraw()
        }, e.prototype.removeTextContent = function() {
            var t = this._textContent;
            t && (t.innerTransformable = null, this._detachComponent(t), this._textContent = null, this._innerTextDefaultStyle = null, this.markRedraw())
        }, e.prototype.getTextGuideLine = function() {
            return this._textGuide
        }, e.prototype.setTextGuideLine = function(t) {
            this._textGuide && this._textGuide !== t && this.removeTextGuideLine(), this._attachComponent(t), this._textGuide = t, this.markRedraw()
        }, e.prototype.removeTextGuideLine = function() {
            var t = this._textGuide;
            t && (this._detachComponent(t), this._textGuide = null, this.markRedraw())
        }, e.prototype.markRedraw = function() {
            this.__dirty |= Tr;
            var t = this.__zr;
            t && (this.__inHover ? t.refreshHover() : t.refresh()), this.__hostTarget && this.__hostTarget.markRedraw()
        }, e.prototype.dirty = function() {
            this.markRedraw()
        }, e.prototype._toggleHoverLayerFlag = function(t) {
            this.__inHover = t;
            var r = this._textContent,
                n = this._textGuide;
            r && (r.__inHover = t), n && (n.__inHover = t)
        }, e.prototype.addSelfToZr = function(t) {
            if (this.__zr !== t) {
                this.__zr = t;
                var r = this.animators;
                if (r)
                    for (var n = 0; n < r.length; n++) t.animation.addAnimator(r[n]);
                this._clipPath && this._clipPath.addSelfToZr(t), this._textContent && this._textContent.addSelfToZr(t), this._textGuide && this._textGuide.addSelfToZr(t)
            }
        }, e.prototype.removeSelfFromZr = function(t) {
            if (this.__zr) {
                this.__zr = null;
                var r = this.animators;
                if (r)
                    for (var n = 0; n < r.length; n++) t.animation.removeAnimator(r[n]);
                this._clipPath && this._clipPath.removeSelfFromZr(t), this._textContent && this._textContent.removeSelfFromZr(t), this._textGuide && this._textGuide.removeSelfFromZr(t)
            }
        }, e.prototype.animate = function(t, r, n) {
            var i = t ? this[t] : this,
                a = new nu(i, r, n);
            return t && (a.targetName = t), this.addAnimator(a, t), a
        }, e.prototype.addAnimator = function(t, r) {
            var n = this.__zr,
                i = this;
            t.during(function() {
                i.updateDuringAnimation(r)
            }).done(function() {
                var a = i.animators,
                    o = ft(a, t);
                o >= 0 && a.splice(o, 1)
            }), this.animators.push(t), n && n.animation.addAnimator(t), n && n.wakeUp()
        }, e.prototype.updateDuringAnimation = function(t) {
            this.markRedraw()
        }, e.prototype.stopAnimation = function(t, r) {
            for (var n = this.animators, i = n.length, a = [], o = 0; o < i; o++) {
                var s = n[o];
                !t || t === s.scope ? s.stop(r) : a.push(s)
            }
            return this.animators = a, this
        }, e.prototype.animateTo = function(t, r, n) {
            po(this, t, r, n)
        }, e.prototype.animateFrom = function(t, r, n) {
            po(this, t, r, n, !0)
        }, e.prototype._transitionState = function(t, r, n, i) {
            for (var a = po(this, r, n, i), o = 0; o < a.length; o++) a[o].__fromStateTransition = t
        }, e.prototype.getBoundingRect = function() {
            return null
        }, e.prototype.getPaintRect = function() {
            return null
        }, e.initDefaultProps = function() {
            var t = e.prototype;
            t.type = "element", t.name = "", t.ignore = t.silent = t.isGroup = t.draggable = t.dragging = t.ignoreClip = t.__inHover = !1, t.__dirty = Tr;

            function r(n, i, a, o) {
                Object.defineProperty(t, n, {
                    get: function() {
                        if (!this[i]) {
                            var u = this[i] = [];
                            s(this, u)
                        }
                        return this[i]
                    },
                    set: function(u) {
                        this[a] = u[0], this[o] = u[1], this[i] = u, s(this, u)
                    }
                });

                function s(u, l) {
                    Object.defineProperty(l, 0, {
                        get: function() {
                            return u[a]
                        },
                        set: function(f) {
                            u[a] = f
                        }
                    }), Object.defineProperty(l, 1, {
                        get: function() {
                            return u[o]
                        },
                        set: function(f) {
                            u[o] = f
                        }
                    })
                }
            }
            Object.defineProperty && (r("position", "_legacyPos", "x", "y"), r("scale", "_legacyScale", "scaleX", "scaleY"), r("origin", "_legacyOrigin", "originX", "originY"))
        }(), e
    }();
Ie(xa, Ee);
Ie(xa, iu);

function po(e, t, r, n, i) {
    r = r || {};
    var a = [];
    Wh(e, "", e, t, r, n, a, i);
    var o = a.length,
        s = !1,
        u = r.done,
        l = r.aborted,
        f = function() {
            s = !0, o--, o <= 0 && (s ? u && u() : l && l())
        },
        h = function() {
            o--, o <= 0 && (s ? u && u() : l && l())
        };
    o || u && u(), a.length > 0 && r.during && a[0].during(function(d, g) {
        r.during(g)
    });
    for (var c = 0; c < a.length; c++) {
        var v = a[c];
        f && v.done(f), h && v.aborted(h), r.force && v.duration(r.duration), v.start(r.easing)
    }
    return a
}

function go(e, t, r) {
    for (var n = 0; n < r; n++) e[n] = t[n]
}

function Up(e) {
    return Bt(e[0])
}

function Yp(e, t, r) {
    if (Bt(t[r]))
        if (Bt(e[r]) || (e[r] = []), zt(t[r])) {
            var n = t[r].length;
            e[r].length !== n && (e[r] = new t[r].constructor(n), go(e[r], t[r], n))
        } else {
            var i = t[r],
                a = e[r],
                o = i.length;
            if (Up(i))
                for (var s = i[0].length, u = 0; u < o; u++) a[u] ? go(a[u], i[u], s) : a[u] = Array.prototype.slice.call(i[u]);
            else go(a, i, o);
            a.length = i.length
        }
    else e[r] = t[r]
}

function Wp(e, t) {
    return e === t || Bt(e) && Bt(t) && Xp(e, t)
}

function Xp(e, t) {
    var r = e.length;
    if (r !== t.length) return !1;
    for (var n = 0; n < r; n++)
        if (e[n] !== t[n]) return !1;
    return !0
}

function Wh(e, t, r, n, i, a, o, s) {
    for (var u = ht(n), l = i.duration, f = i.delay, h = i.additive, c = i.setToFinal, v = !H(a), d = e.animators, g = [], p = 0; p < u.length; p++) {
        var y = u[p],
            m = n[y];
        if (m != null && r[y] != null && (v || a[y]))
            if (H(m) && !Bt(m) && !js(m)) {
                if (t) {
                    s || (r[y] = m, e.updateDuringAnimation(t));
                    continue
                }
                Wh(e, y, r[y], m, i, a && a[y], o, s)
            } else g.push(y);
        else s || (r[y] = m, e.updateDuringAnimation(t), g.push(y))
    }
    var _ = g.length;
    if (!h && _)
        for (var S = 0; S < d.length; S++) {
            var T = d[S];
            if (T.targetName === t) {
                var w = T.stopTracks(g);
                if (w) {
                    var b = ft(d, T);
                    d.splice(b, 1)
                }
            }
        }
    if (i.force || (g = ie(g, function(A) {
            return !Wp(n[A], r[A])
        }), _ = g.length), _ > 0 || i.force && !o.length) {
        var M = void 0,
            D = void 0,
            C = void 0;
        if (s) {
            D = {}, c && (M = {});
            for (var S = 0; S < _; S++) {
                var y = g[S];
                D[y] = r[y], c ? M[y] = n[y] : r[y] = n[y]
            }
        } else if (c) {
            C = {};
            for (var S = 0; S < _; S++) {
                var y = g[S];
                C[y] = $i(r[y]), Yp(r, n, y)
            }
        }
        var T = new nu(r, !1, !1, h ? ie(d, function(x) {
            return x.targetName === t
        }) : null);
        T.targetName = t, i.scope && (T.scope = i.scope), c && M && T.whenWithKeys(0, M, g), C && T.whenWithKeys(0, C, g), T.whenWithKeys(l ? ? 500, s ? D : n, g).delay(f || 0), e.addAnimator(T, t), o.push(T)
    }
}
var sn = function(e) {
    W(t, e);

    function t(r) {
        var n = e.call(this) || this;
        return n.isGroup = !0, n._children = [], n.attr(r), n
    }
    return t.prototype.childrenRef = function() {
        return this._children
    }, t.prototype.children = function() {
        return this._children.slice()
    }, t.prototype.childAt = function(r) {
        return this._children[r]
    }, t.prototype.childOfName = function(r) {
        for (var n = this._children, i = 0; i < n.length; i++)
            if (n[i].name === r) return n[i]
    }, t.prototype.childCount = function() {
        return this._children.length
    }, t.prototype.add = function(r) {
        return r && r !== this && r.parent !== this && (this._children.push(r), this._doAdd(r)), this
    }, t.prototype.addBefore = function(r, n) {
        if (r && r !== this && r.parent !== this && n && n.parent === this) {
            var i = this._children,
                a = i.indexOf(n);
            a >= 0 && (i.splice(a, 0, r), this._doAdd(r))
        }
        return this
    }, t.prototype.replace = function(r, n) {
        var i = ft(this._children, r);
        return i >= 0 && this.replaceAt(n, i), this
    }, t.prototype.replaceAt = function(r, n) {
        var i = this._children,
            a = i[n];
        if (r && r !== this && r.parent !== this && r !== a) {
            i[n] = r, a.parent = null;
            var o = this.__zr;
            o && a.removeSelfFromZr(o), this._doAdd(r)
        }
        return this
    }, t.prototype._doAdd = function(r) {
        r.parent && r.parent.remove(r), r.parent = this;
        var n = this.__zr;
        n && n !== r.__zr && r.addSelfToZr(n), n && n.refresh()
    }, t.prototype.remove = function(r) {
        var n = this.__zr,
            i = this._children,
            a = ft(i, r);
        return a < 0 ? this : (i.splice(a, 1), r.parent = null, n && r.removeSelfFromZr(n), n && n.refresh(), this)
    }, t.prototype.removeAll = function() {
        for (var r = this._children, n = this.__zr, i = 0; i < r.length; i++) {
            var a = r[i];
            n && a.removeSelfFromZr(n), a.parent = null
        }
        return r.length = 0, this
    }, t.prototype.eachChild = function(r, n) {
        for (var i = this._children, a = 0; a < i.length; a++) {
            var o = i[a];
            r.call(n, o, a)
        }
        return this
    }, t.prototype.traverse = function(r, n) {
        for (var i = 0; i < this._children.length; i++) {
            var a = this._children[i],
                o = r.call(n, a);
            a.isGroup && !o && a.traverse(r, n)
        }
        return this
    }, t.prototype.addSelfToZr = function(r) {
        e.prototype.addSelfToZr.call(this, r);
        for (var n = 0; n < this._children.length; n++) {
            var i = this._children[n];
            i.addSelfToZr(r)
        }
    }, t.prototype.removeSelfFromZr = function(r) {
        e.prototype.removeSelfFromZr.call(this, r);
        for (var n = 0; n < this._children.length; n++) {
            var i = this._children[n];
            i.removeSelfFromZr(r)
        }
    }, t.prototype.getBoundingRect = function(r) {
        for (var n = new nt(0, 0, 0, 0), i = r || this._children, a = [], o = null, s = 0; s < i.length; s++) {
            var u = i[s];
            if (!(u.ignore || u.invisible)) {
                var l = u.getBoundingRect(),
                    f = u.getLocalTransform(a);
                f ? (nt.applyTransform(n, l, f), o = o || n.clone(), o.union(n)) : (o = o || l.clone(), o.union(l))
            }
        }
        return o || n
    }, t
}(xa);
sn.prototype.type = "group";
/*!
 * ZRender, a high performance 2d drawing library.
 *
 * Copyright (c) 2013, Baidu Inc.
 * All rights reserved.
 *
 * LICENSE
 * https://github.com/ecomfe/zrender/blob/master/LICENSE.txt
 */
var Ji = {},
    Xh = {};

function qp(e) {
    delete Xh[e]
}

function $p(e) {
    if (!e) return !1;
    if (typeof e == "string") return ua(e, 1) < ms;
    if (e.colorStops) {
        for (var t = e.colorStops, r = 0, n = t.length, i = 0; i < n; i++) r += ua(t[i].color, 1);
        return r /= n, r < ms
    }
    return !1
}
var Zp = function() {
    function e(t, r, n) {
        var i = this;
        this._sleepAfterStill = 10, this._stillFrameAccum = 0, this._needsRefresh = !0, this._needsRefreshHover = !0, this._darkMode = !1, n = n || {}, this.dom = r, this.id = t;
        var a = new fp,
            o = n.renderer || "canvas";
        Ji[o] || (o = ht(Ji)[0]), n.useDirtyRect = n.useDirtyRect == null ? !1 : n.useDirtyRect;
        var s = new Ji[o](r, a, n, t),
            u = n.ssr || s.ssrOnly;
        this.storage = a, this.painter = s;
        var l = !K.node && !K.worker && !u ? new Fp(s.getViewportRoot(), s.root) : null,
            f = n.useCoarsePointer,
            h = f == null || f === "auto" ? K.touchEventsSupported : !!f,
            c = 44,
            v;
        h && (v = q(n.pointerSize, c)), this.handler = new Ph(a, s, l, s.root, v), this.animation = new Rp({
            stage: {
                update: u ? null : function() {
                    return i._flush(!0)
                }
            }
        }), u || this.animation.start()
    }
    return e.prototype.add = function(t) {
        this._disposed || !t || (this.storage.addRoot(t), t.addSelfToZr(this), this.refresh())
    }, e.prototype.remove = function(t) {
        this._disposed || !t || (this.storage.delRoot(t), t.removeSelfFromZr(this), this.refresh())
    }, e.prototype.configLayer = function(t, r) {
        this._disposed || (this.painter.configLayer && this.painter.configLayer(t, r), this.refresh())
    }, e.prototype.setBackgroundColor = function(t) {
        this._disposed || (this.painter.setBackgroundColor && this.painter.setBackgroundColor(t), this.refresh(), this._backgroundColor = t, this._darkMode = $p(t))
    }, e.prototype.getBackgroundColor = function() {
        return this._backgroundColor
    }, e.prototype.setDarkMode = function(t) {
        this._darkMode = t
    }, e.prototype.isDarkMode = function() {
        return this._darkMode
    }, e.prototype.refreshImmediately = function(t) {
        this._disposed || (t || this.animation.update(!0), this._needsRefresh = !1, this.painter.refresh(), this._needsRefresh = !1)
    }, e.prototype.refresh = function() {
        this._disposed || (this._needsRefresh = !0, this.animation.start())
    }, e.prototype.flush = function() {
        this._disposed || this._flush(!1)
    }, e.prototype._flush = function(t) {
        var r, n = Zr();
        this._needsRefresh && (r = !0, this.refreshImmediately(t)), this._needsRefreshHover && (r = !0, this.refreshHoverImmediately());
        var i = Zr();
        r ? (this._stillFrameAccum = 0, this.trigger("rendered", {
            elapsedTime: i - n
        })) : this._sleepAfterStill > 0 && (this._stillFrameAccum++, this._stillFrameAccum > this._sleepAfterStill && this.animation.stop())
    }, e.prototype.setSleepAfterStill = function(t) {
        this._sleepAfterStill = t
    }, e.prototype.wakeUp = function() {
        this._disposed || (this.animation.start(), this._stillFrameAccum = 0)
    }, e.prototype.refreshHover = function() {
        this._needsRefreshHover = !0
    }, e.prototype.refreshHoverImmediately = function() {
        this._disposed || (this._needsRefreshHover = !1, this.painter.refreshHover && this.painter.getType() === "canvas" && this.painter.refreshHover())
    }, e.prototype.resize = function(t) {
        this._disposed || (t = t || {}, this.painter.resize(t.width, t.height), this.handler.resize())
    }, e.prototype.clearAnimation = function() {
        this._disposed || this.animation.clear()
    }, e.prototype.getWidth = function() {
        if (!this._disposed) return this.painter.getWidth()
    }, e.prototype.getHeight = function() {
        if (!this._disposed) return this.painter.getHeight()
    }, e.prototype.setCursorStyle = function(t) {
        this._disposed || this.handler.setCursorStyle(t)
    }, e.prototype.findHover = function(t, r) {
        if (!this._disposed) return this.handler.findHover(t, r)
    }, e.prototype.on = function(t, r, n) {
        return this._disposed || this.handler.on(t, r, n), this
    }, e.prototype.off = function(t, r) {
        this._disposed || this.handler.off(t, r)
    }, e.prototype.trigger = function(t, r) {
        this._disposed || this.handler.trigger(t, r)
    }, e.prototype.clear = function() {
        if (!this._disposed) {
            for (var t = this.storage.getRoots(), r = 0; r < t.length; r++) t[r] instanceof sn && t[r].removeSelfFromZr(this);
            this.storage.delAllRoots(), this.painter.clear()
        }
    }, e.prototype.dispose = function() {
        this._disposed || (this.animation.stop(), this.clear(), this.storage.dispose(), this.painter.dispose(), this.handler.dispose(), this.animation = this.storage = this.painter = this.handler = null, this._disposed = !0, qp(this.id))
    }, e
}();

function gl(e, t) {
    var r = new Zp(mh(), e, t);
    return Xh[r.id] = r, r
}

function Kp(e, t) {
    Ji[e] = t
}
var ws;

function mw(e) {
    if (typeof ws == "function") return ws(e)
}

function Qp(e) {
    ws = e
}
var Jp = 1e-4,
    qh = 20;

function jp(e) {
    return e.replace(/^\s+|\s+$/g, "")
}

function tg(e, t, r, n) {
    var i = t[0],
        a = t[1],
        o = r[0],
        s = r[1],
        u = a - i,
        l = s - o;
    if (u === 0) return l === 0 ? o : (o + s) / 2;
    if (n)
        if (u > 0) {
            if (e <= i) return o;
            if (e >= a) return s
        } else {
            if (e >= i) return o;
            if (e <= a) return s
        }
    else {
        if (e === i) return o;
        if (e === a) return s
    }
    return (e - i) / u * l + o
}

function lt(e, t) {
    switch (e) {
        case "center":
        case "middle":
            e = "50%";
            break;
        case "left":
        case "top":
            e = "0%";
            break;
        case "right":
        case "bottom":
            e = "100%";
            break
    }
    return X(e) ? jp(e).match(/%$/) ? parseFloat(e) / 100 * t : parseFloat(e) : e == null ? NaN : +e
}

function Ts(e, t, r) {
    return t == null && (t = 10), t = Math.min(Math.max(0, t), qh), e = (+e).toFixed(t), r ? e : +e
}

function _w(e) {
    return e.sort(function(t, r) {
        return t - r
    }), e
}

function Kr(e) {
    if (e = +e, isNaN(e)) return 0;
    if (e > 1e-14) {
        for (var t = 1, r = 0; r < 15; r++, t *= 10)
            if (Math.round(e * t) / t === e) return r
    }
    return eg(e)
}

function eg(e) {
    var t = e.toString().toLowerCase(),
        r = t.indexOf("e"),
        n = r > 0 ? +t.slice(r + 1) : 0,
        i = r > 0 ? r : t.length,
        a = t.indexOf("."),
        o = a < 0 ? 0 : i - 1 - a;
    return Math.max(0, o - n)
}

function Sw(e, t) {
    var r = Math.log,
        n = Math.LN10,
        i = Math.floor(r(e[1] - e[0]) / n),
        a = Math.round(r(Math.abs(t[1] - t[0])) / n),
        o = Math.min(Math.max(-i + a, 0), 20);
    return isFinite(o) ? o : 20
}

function rg(e, t) {
    var r = Ze(e, function(v, d) {
        return v + (isNaN(d) ? 0 : d)
    }, 0);
    if (r === 0) return [];
    for (var n = Math.pow(10, t), i = Q(e, function(v) {
            return (isNaN(v) ? 0 : v) / r * n * 100
        }), a = n * 100, o = Q(i, function(v) {
            return Math.floor(v)
        }), s = Ze(o, function(v, d) {
            return v + d
        }, 0), u = Q(i, function(v, d) {
            return v - o[d]
        }); s < a;) {
        for (var l = Number.NEGATIVE_INFINITY, f = null, h = 0, c = u.length; h < c; ++h) u[h] > l && (l = u[h], f = h);
        ++o[f], u[f] = 0, ++s
    }
    return Q(o, function(v) {
        return v / n
    })
}

function ng(e, t) {
    var r = Math.max(Kr(e), Kr(t)),
        n = e + t;
    return r > qh ? n : Ts(n, r)
}
var ww = 9007199254740991;

function Tw(e) {
    var t = Math.PI * 2;
    return (e % t + t) % t
}

function bw(e) {
    return e > -1e-4 && e < Jp
}
var ig = /^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d{1,2})(?::(\d{1,2})(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/;

function un(e) {
    if (e instanceof Date) return e;
    if (X(e)) {
        var t = ig.exec(e);
        if (!t) return new Date(NaN);
        if (t[8]) {
            var r = +t[4] || 0;
            return t[8].toUpperCase() !== "Z" && (r -= +t[8].slice(0, 3)), new Date(Date.UTC(+t[1], +(t[2] || 1) - 1, +t[3] || 1, r, +(t[5] || 0), +t[6] || 0, t[7] ? +t[7].substring(0, 3) : 0))
        } else return new Date(+t[1], +(t[2] || 1) - 1, +t[3] || 1, +t[4] || 0, +(t[5] || 0), +t[6] || 0, t[7] ? +t[7].substring(0, 3) : 0)
    } else if (e == null) return new Date(NaN);
    return new Date(Math.round(e))
}

function Dw(e) {
    return Math.pow(10, $h(e))
}

function $h(e) {
    if (e === 0) return 0;
    var t = Math.floor(Math.log(e) / Math.LN10);
    return e / Math.pow(10, t) >= 10 && t++, t
}

function Mw(e, t) {
    var r = $h(e),
        n = Math.pow(10, r),
        i = e / n,
        a;
    return i < 1.5 ? a = 1 : i < 2.5 ? a = 2 : i < 4 ? a = 3 : i < 7 ? a = 5 : a = 10, e = a * n, r >= -20 ? +e.toFixed(r < 0 ? -r : 0) : e
}

function Cw(e, t) {
    var r = (e.length - 1) * t + 1,
        n = Math.floor(r),
        i = +e[n - 1],
        a = r - n;
    return a ? i + a * (e[n] - i) : i
}

function Pw(e) {
    e.sort(function(u, l) {
        return s(u, l, 0) ? -1 : 1
    });
    for (var t = -1 / 0, r = 1, n = 0; n < e.length;) {
        for (var i = e[n].interval, a = e[n].close, o = 0; o < 2; o++) i[o] <= t && (i[o] = t, a[o] = o ? 1 : 1 - r), t = i[o], r = a[o];
        i[0] === i[1] && a[0] * a[1] !== 1 ? e.splice(n, 1) : n++
    }
    return e;

    function s(u, l, f) {
        return u.interval[f] < l.interval[f] || u.interval[f] === l.interval[f] && (u.close[f] - l.close[f] === (f ? -1 : 1) || !f && s(u, l, 1))
    }
}

function Ke(e) {
    var t = parseFloat(e);
    return t == e && (t !== 0 || !X(e) || e.indexOf("x") <= 0) ? t : NaN
}

function ag(e) {
    return !isNaN(Ke(e))
}

function Zh() {
    return Math.round(Math.random() * 9)
}

function Kh(e, t) {
    return t === 0 ? e : Kh(t, e % t)
}

function yl(e, t) {
    return e == null ? t : t == null ? e : e * t / Kh(e, t)
}

function Et(e) {
    throw new Error(e)
}

function ml(e, t, r) {
    return (t - e) * r + e
}
var Qh = "series\0",
    Jh = "\0_ec_\0";

function St(e) {
    return e instanceof Array ? e : e == null ? [] : [e]
}

function bs(e, t, r) {
    if (e) {
        e[t] = e[t] || {}, e.emphasis = e.emphasis || {}, e.emphasis[t] = e.emphasis[t] || {};
        for (var n = 0, i = r.length; n < i; n++) {
            var a = r[n];
            !e.emphasis[t].hasOwnProperty(a) && e[t].hasOwnProperty(a) && (e.emphasis[t][a] = e[t][a])
        }
    }
}
var _l = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "rich", "tag", "color", "textBorderColor", "textBorderWidth", "width", "height", "lineHeight", "align", "verticalAlign", "baseline", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY", "textShadowColor", "textShadowBlur", "textShadowOffsetX", "textShadowOffsetY", "backgroundColor", "borderColor", "borderWidth", "borderRadius", "padding"];

function La(e) {
    return H(e) && !F(e) && !(e instanceof Date) ? e.value : e
}

function og(e) {
    return H(e) && !(e instanceof Array)
}

function sg(e, t, r) {
    var n = r === "normalMerge",
        i = r === "replaceMerge",
        a = r === "replaceAll";
    e = e || [], t = (t || []).slice();
    var o = Z();
    P(t, function(u, l) {
        if (!H(u)) {
            t[l] = null;
            return
        }
    });
    var s = ug(e, o, r);
    return (n || i) && lg(s, e, o, t), n && fg(s, t), n || i ? hg(s, t, i) : a && vg(s, t), cg(s), s
}

function ug(e, t, r) {
    var n = [];
    if (r === "replaceAll") return n;
    for (var i = 0; i < e.length; i++) {
        var a = e[i];
        a && a.id != null && t.set(a.id, i), n.push({
            existing: r === "replaceMerge" || jn(a) ? null : a,
            newOption: null,
            keyInfo: null,
            brandNew: null
        })
    }
    return n
}

function lg(e, t, r, n) {
    P(n, function(i, a) {
        if (!(!i || i.id == null)) {
            var o = Gn(i.id),
                s = r.get(o);
            if (s != null) {
                var u = e[s];
                Te(!u.newOption, 'Duplicated option on id "' + o + '".'), u.newOption = i, u.existing = t[s], n[a] = null
            }
        }
    })
}

function fg(e, t) {
    P(t, function(r, n) {
        if (!(!r || r.name == null))
            for (var i = 0; i < e.length; i++) {
                var a = e[i].existing;
                if (!e[i].newOption && a && (a.id == null || r.id == null) && !jn(r) && !jn(a) && jh("name", a, r)) {
                    e[i].newOption = r, t[n] = null;
                    return
                }
            }
    })
}

function hg(e, t, r) {
    P(t, function(n) {
        if (n) {
            for (var i, a = 0;
                (i = e[a]) && (i.newOption || jn(i.existing) || i.existing && n.id != null && !jh("id", n, i.existing));) a++;
            i ? (i.newOption = n, i.brandNew = r) : e.push({
                newOption: n,
                brandNew: r,
                existing: null,
                keyInfo: null
            }), a++
        }
    })
}

function vg(e, t) {
    P(t, function(r) {
        e.push({
            newOption: r,
            brandNew: !0,
            existing: null,
            keyInfo: null
        })
    })
}

function cg(e) {
    var t = Z();
    P(e, function(r) {
        var n = r.existing;
        n && t.set(n.id, r)
    }), P(e, function(r) {
        var n = r.newOption;
        Te(!n || n.id == null || !t.get(n.id) || t.get(n.id) === r, "id duplicates: " + (n && n.id)), n && n.id != null && t.set(n.id, r), !r.keyInfo && (r.keyInfo = {})
    }), P(e, function(r, n) {
        var i = r.existing,
            a = r.newOption,
            o = r.keyInfo;
        if (H(a)) {
            if (o.name = a.name != null ? Gn(a.name) : i ? i.name : Qh + n, i) o.id = Gn(i.id);
            else if (a.id != null) o.id = Gn(a.id);
            else {
                var s = 0;
                do o.id = "\0" + o.name + "\0" + s++; while (t.get(o.id))
            }
            t.set(o.id, r)
        }
    })
}

function jh(e, t, r) {
    var n = ue(t[e], null),
        i = ue(r[e], null);
    return n != null && i != null && n === i
}

function Gn(e) {
    return ue(e, "")
}

function ue(e, t) {
    return e == null ? t : X(e) ? e : at(e) || ns(e) ? e + "" : t
}

function tv(e) {
    var t = e.name;
    return !!(t && t.indexOf(Qh))
}

function jn(e) {
    return e && e.id != null && Gn(e.id).indexOf(Jh) === 0
}

function Aw(e) {
    return Jh + e
}

function dg(e, t, r) {
    P(e, function(n) {
        var i = n.newOption;
        H(i) && (n.keyInfo.mainType = t, n.keyInfo.subType = pg(t, i, n.existing, r))
    })
}

function pg(e, t, r, n) {
    var i = t.type ? t.type : r ? r.subType : n.determineSubType(e, t);
    return i
}

function Rw(e, t) {
    var r = {},
        n = {};
    return i(e || [], r), i(t || [], n, r), [a(r), a(n)];

    function i(o, s, u) {
        for (var l = 0, f = o.length; l < f; l++) {
            var h = ue(o[l].seriesId, null);
            if (h == null) return;
            for (var c = St(o[l].dataIndex), v = u && u[h], d = 0, g = c.length; d < g; d++) {
                var p = c[d];
                v && v[p] ? v[p] = null : (s[h] || (s[h] = {}))[p] = 1
            }
        }
    }

    function a(o, s) {
        var u = [];
        for (var l in o)
            if (o.hasOwnProperty(l) && o[l] != null)
                if (s) u.push(+l);
                else {
                    var f = a(o[l], !0);
                    f.length && u.push({
                        seriesId: l,
                        dataIndex: f
                    })
                }
        return u
    }
}

function Ia(e, t) {
    if (t.dataIndexInside != null) return t.dataIndexInside;
    if (t.dataIndex != null) return F(t.dataIndex) ? Q(t.dataIndex, function(r) {
        return e.indexOfRawIndex(r)
    }) : e.indexOfRawIndex(t.dataIndex);
    if (t.name != null) return F(t.name) ? Q(t.name, function(r) {
        return e.indexOfName(r)
    }) : e.indexOfName(t.name)
}

function Pt() {
    var e = "__ec_inner_" + gg++;
    return function(t) {
        return t[e] || (t[e] = {})
    }
}
var gg = Zh();

function yo(e, t, r) {
    var n = ev(t, r),
        i = n.mainTypeSpecified,
        a = n.queryOptionMap,
        o = n.others,
        s = o,
        u = r ? r.defaultMainType : null;
    return !i && u && a.set(u, {}), a.each(function(l, f) {
        var h = Ea(e, f, l, {
            useDefault: u === f,
            enableAll: r && r.enableAll != null ? r.enableAll : !0,
            enableNone: r && r.enableNone != null ? r.enableNone : !0
        });
        s[f + "Models"] = h.models, s[f + "Model"] = h.models[0]
    }), s
}

function ev(e, t) {
    var r;
    if (X(e)) {
        var n = {};
        n[e + "Index"] = 0, r = n
    } else r = e;
    var i = Z(),
        a = {},
        o = !1;
    return P(r, function(s, u) {
        if (u === "dataIndex" || u === "dataIndexInside") {
            a[u] = s;
            return
        }
        var l = u.match(/^(\w+)(Index|Id|Name)$/) || [],
            f = l[1],
            h = (l[2] || "").toLowerCase();
        if (!(!f || !h || t && t.includeMainTypes && ft(t.includeMainTypes, f) < 0)) {
            o = o || !!f;
            var c = i.get(f) || i.set(f, {});
            c[h] = s
        }
    }), {
        mainTypeSpecified: o,
        queryOptionMap: i,
        others: a
    }
}
var ou = {
        useDefault: !0,
        enableAll: !1,
        enableNone: !1
    },
    xw = {
        useDefault: !1,
        enableAll: !0,
        enableNone: !0
    };

function Ea(e, t, r, n) {
    n = n || ou;
    var i = r.index,
        a = r.id,
        o = r.name,
        s = {
            models: null,
            specified: i != null || a != null || o != null
        };
    if (!s.specified) {
        var u = void 0;
        return s.models = n.useDefault && (u = e.getComponent(t)) ? [u] : [], s
    }
    return i === "none" || i === !1 ? (Te(n.enableNone, '`"none"` or `false` is not a valid value on index option.'), s.models = [], s) : (i === "all" && (Te(n.enableAll, '`"all"` is not a valid value on index option.'), i = a = o = null), s.models = e.queryComponents({
        mainType: t,
        index: i,
        id: a,
        name: o
    }), s)
}

function rv(e, t, r) {
    e.setAttribute ? e.setAttribute(t, r) : e[t] = r
}

function yg(e, t) {
    return e.getAttribute ? e.getAttribute(t) : e[t]
}

function Lw(e) {
    return e === "auto" ? K.domSupported ? "html" : "richText" : e || "html"
}

function Iw(e, t) {
    var r = Z(),
        n = [];
    return P(e, function(i) {
        var a = t(i);
        (r.get(a) || (n.push(a), r.set(a, []))).push(i)
    }), {
        keys: n,
        buckets: r
    }
}

function mg(e, t, r, n, i) {
    var a = t == null || t === "auto";
    if (n == null) return n;
    if (at(n)) {
        var o = ml(r || 0, n, i);
        return Ts(o, a ? Math.max(Kr(r || 0), Kr(n)) : t)
    } else {
        if (X(n)) return i < 1 ? r : n;
        for (var s = [], u = r, l = n, f = Math.max(u ? u.length : 0, l.length), h = 0; h < f; ++h) {
            var c = e.getDimensionInfo(h);
            if (c && c.type === "ordinal") s[h] = (i < 1 && u ? u : l)[h];
            else {
                var v = u && u[h] ? u[h] : 0,
                    d = l[h],
                    o = ml(v, d, i);
                s[h] = Ts(o, a ? Math.max(Kr(v), Kr(d)) : t)
            }
        }
        return s
    }
}
var _g = ".",
    ir = "___EC__COMPONENT__CONTAINER___",
    nv = "___EC__EXTENDED_CLASS___";

function _e(e) {
    var t = {
        main: "",
        sub: ""
    };
    if (e) {
        var r = e.split(_g);
        t.main = r[0] || "", t.sub = r[1] || ""
    }
    return t
}

function Sg(e) {
    Te(/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(e), 'componentType "' + e + '" illegal')
}

function wg(e) {
    return !!(e && e[nv])
}

function su(e, t) {
    e.$constructor = e, e.extend = function(r) {
        var n = this,
            i;
        return Tg(n) ? i = function(a) {
            W(o, a);

            function o() {
                return a.apply(this, arguments) || this
            }
            return o
        }(n) : (i = function() {
            (r.$constructor || n).apply(this, arguments)
        }, Pd(i, this)), I(i.prototype, r), i[nv] = !0, i.extend = this.extend, i.superCall = Mg, i.superApply = Cg, i.superClass = n, i
    }
}

function Tg(e) {
    return rt(e) && /^class\s/.test(Function.prototype.toString.call(e))
}

function iv(e, t) {
    e.extend = t.extend
}
var bg = Math.round(Math.random() * 10);

function Dg(e) {
    var t = ["__\0is_clz", bg++].join("_");
    e.prototype[t] = !0, e.isInstance = function(r) {
        return !!(r && r[t])
    }
}

function Mg(e, t) {
    for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
    return this.superClass.prototype[t].apply(e, r)
}

function Cg(e, t, r) {
    return this.superClass.prototype[t].apply(e, r)
}

function uu(e) {
    var t = {};
    e.registerClass = function(n) {
        var i = n.type || n.prototype.type;
        if (i) {
            Sg(i), n.prototype.type = i;
            var a = _e(i);
            if (!a.sub) t[a.main] = n;
            else if (a.sub !== ir) {
                var o = r(a);
                o[a.sub] = n
            }
        }
        return n
    }, e.getClass = function(n, i, a) {
        var o = t[n];
        if (o && o[ir] && (o = i ? o[i] : null), a && !o) throw new Error(i ? "Component " + n + "." + (i || "") + " is used but not imported." : n + ".type should be specified.");
        return o
    }, e.getClassesByMainType = function(n) {
        var i = _e(n),
            a = [],
            o = t[i.main];
        return o && o[ir] ? P(o, function(s, u) {
            u !== ir && a.push(s)
        }) : a.push(o), a
    }, e.hasClass = function(n) {
        var i = _e(n);
        return !!t[i.main]
    }, e.getAllClassMainTypes = function() {
        var n = [];
        return P(t, function(i, a) {
            n.push(a)
        }), n
    }, e.hasSubTypes = function(n) {
        var i = _e(n),
            a = t[i.main];
        return a && a[ir]
    };

    function r(n) {
        var i = t[n.main];
        return (!i || !i[ir]) && (i = t[n.main] = {}, i[ir] = !0), i
    }
}

function ti(e, t) {
    for (var r = 0; r < e.length; r++) e[r][1] || (e[r][1] = e[r][0]);
    return t = t || !1,
        function(n, i, a) {
            for (var o = {}, s = 0; s < e.length; s++) {
                var u = e[s][1];
                if (!(i && ft(i, u) >= 0 || a && ft(a, u) < 0)) {
                    var l = n.getShallow(u, t);
                    l != null && (o[e[s][0]] = l)
                }
            }
            return o
        }
}
var Pg = [
        ["fill", "color"],
        ["shadowBlur"],
        ["shadowOffsetX"],
        ["shadowOffsetY"],
        ["opacity"],
        ["shadowColor"]
    ],
    Ag = ti(Pg),
    Rg = function() {
        function e() {}
        return e.prototype.getAreaStyle = function(t, r) {
            return Ag(this, t, r)
        }, e
    }(),
    Ds = new ui(50);

function xg(e) {
    if (typeof e == "string") {
        var t = Ds.get(e);
        return t && t.image
    } else return e
}

function av(e, t, r, n, i) {
    if (e)
        if (typeof e == "string") {
            if (t && t.__zrImageSrc === e || !r) return t;
            var a = Ds.get(e),
                o = {
                    hostEl: r,
                    cb: n,
                    cbPayload: i
                };
            return a ? (t = a.image, !Oa(t) && a.pending.push(o)) : (t = oi.loadImage(e, Sl, Sl), t.__zrImageSrc = e, Ds.put(e, t.__cachedImgObj = {
                image: t,
                pending: [o]
            })), t
        } else return e;
    else return t
}

function Sl() {
    var e = this.__cachedImgObj;
    this.onload = this.onerror = this.__cachedImgObj = null;
    for (var t = 0; t < e.pending.length; t++) {
        var r = e.pending[t],
            n = r.cb;
        n && n(this, r.cbPayload), r.hostEl.dirty()
    }
    e.pending.length = 0
}

function Oa(e) {
    return e && e.width && e.height
}
var mo = /\{([a-zA-Z0-9_]+)\|([^}]*)\}/g;

function Lg(e, t, r, n, i, a) {
    if (!r) {
        e.text = "", e.isTruncated = !1;
        return
    }
    var o = (t + "").split(`
`);
    a = ov(r, n, i, a);
    for (var s = !1, u = {}, l = 0, f = o.length; l < f; l++) sv(u, o[l], a), o[l] = u.textLine, s = s || u.isTruncated;
    e.text = o.join(`
`), e.isTruncated = s
}

function ov(e, t, r, n) {
    n = n || {};
    var i = I({}, n);
    i.font = t, r = q(r, "..."), i.maxIterations = q(n.maxIterations, 2);
    var a = i.minChar = q(n.minChar, 0);
    i.cnCharWidth = Yt("国", t);
    var o = i.ascCharWidth = Yt("a", t);
    i.placeholder = q(n.placeholder, "");
    for (var s = e = Math.max(0, e - 1), u = 0; u < a && s >= o; u++) s -= o;
    var l = Yt(r, t);
    return l > s && (r = "", l = 0), s = e - l, i.ellipsis = r, i.ellipsisWidth = l, i.contentWidth = s, i.containerWidth = e, i
}

function sv(e, t, r) {
    var n = r.containerWidth,
        i = r.font,
        a = r.contentWidth;
    if (!n) {
        e.textLine = "", e.isTruncated = !1;
        return
    }
    var o = Yt(t, i);
    if (o <= n) {
        e.textLine = t, e.isTruncated = !1;
        return
    }
    for (var s = 0;; s++) {
        if (o <= a || s >= r.maxIterations) {
            t += r.ellipsis;
            break
        }
        var u = s === 0 ? Ig(t, a, r.ascCharWidth, r.cnCharWidth) : o > 0 ? Math.floor(t.length * a / o) : 0;
        t = t.substr(0, u), o = Yt(t, i)
    }
    t === "" && (t = r.placeholder), e.textLine = t, e.isTruncated = !0
}

function Ig(e, t, r, n) {
    for (var i = 0, a = 0, o = e.length; a < o && i < t; a++) {
        var s = e.charCodeAt(a);
        i += 0 <= s && s <= 127 ? r : n
    }
    return a
}

function Eg(e, t) {
    e != null && (e += "");
    var r = t.overflow,
        n = t.padding,
        i = t.font,
        a = r === "truncate",
        o = au(i),
        s = q(t.lineHeight, o),
        u = !!t.backgroundColor,
        l = t.lineOverflow === "truncate",
        f = !1,
        h = t.width,
        c;
    h != null && (r === "break" || r === "breakAll") ? c = e ? uv(e, t.font, h, r === "breakAll", 0).lines : [] : c = e ? e.split(`
`) : [];
    var v = c.length * s,
        d = q(t.height, v);
    if (v > d && l) {
        var g = Math.floor(d / s);
        f = f || c.length > g, c = c.slice(0, g)
    }
    if (e && a && h != null)
        for (var p = ov(h, i, t.ellipsis, {
                minChar: t.truncateMinChar,
                placeholder: t.placeholder
            }), y = {}, m = 0; m < c.length; m++) sv(y, c[m], p), c[m] = y.textLine, f = f || y.isTruncated;
    for (var _ = d, S = 0, m = 0; m < c.length; m++) S = Math.max(Yt(c[m], i), S);
    h == null && (h = S);
    var T = S;
    return n && (_ += n[0] + n[2], T += n[1] + n[3], h += n[1] + n[3]), u && (T = h), {
        lines: c,
        height: d,
        outerWidth: T,
        outerHeight: _,
        lineHeight: s,
        calculatedLineHeight: o,
        contentWidth: S,
        contentHeight: v,
        width: h,
        isTruncated: f
    }
}
var Og = function() {
        function e() {}
        return e
    }(),
    wl = function() {
        function e(t) {
            this.tokens = [], t && (this.tokens = t)
        }
        return e
    }(),
    kg = function() {
        function e() {
            this.width = 0, this.height = 0, this.contentWidth = 0, this.contentHeight = 0, this.outerWidth = 0, this.outerHeight = 0, this.lines = [], this.isTruncated = !1
        }
        return e
    }();

function Fg(e, t) {
    var r = new kg;
    if (e != null && (e += ""), !e) return r;
    for (var n = t.width, i = t.height, a = t.overflow, o = (a === "break" || a === "breakAll") && n != null ? {
            width: n,
            accumWidth: 0,
            breakAll: a === "breakAll"
        } : null, s = mo.lastIndex = 0, u;
        (u = mo.exec(e)) != null;) {
        var l = u.index;
        l > s && _o(r, e.substring(s, l), t, o), _o(r, u[2], t, o, u[1]), s = mo.lastIndex
    }
    s < e.length && _o(r, e.substring(s, e.length), t, o);
    var f = [],
        h = 0,
        c = 0,
        v = t.padding,
        d = a === "truncate",
        g = t.lineOverflow === "truncate",
        p = {};

    function y(U, $, z) {
        U.width = $, U.lineHeight = z, h += z, c = Math.max(c, $)
    }
    t: for (var m = 0; m < r.lines.length; m++) {
        for (var _ = r.lines[m], S = 0, T = 0, w = 0; w < _.tokens.length; w++) {
            var b = _.tokens[w],
                M = b.styleName && t.rich[b.styleName] || {},
                D = b.textPadding = M.padding,
                C = D ? D[1] + D[3] : 0,
                A = b.font = M.font || t.font;
            b.contentHeight = au(A);
            var x = q(M.height, b.contentHeight);
            if (b.innerHeight = x, D && (x += D[0] + D[2]), b.height = x, b.lineHeight = Bn(M.lineHeight, t.lineHeight, x), b.align = M && M.align || t.align, b.verticalAlign = M && M.verticalAlign || "middle", g && i != null && h + b.lineHeight > i) {
                var L = r.lines.length;
                w > 0 ? (_.tokens = _.tokens.slice(0, w), y(_, T, S), r.lines = r.lines.slice(0, m + 1)) : r.lines = r.lines.slice(0, m), r.isTruncated = r.isTruncated || r.lines.length < L;
                break t
            }
            var R = M.width,
                O = R == null || R === "auto";
            if (typeof R == "string" && R.charAt(R.length - 1) === "%") b.percentWidth = R, f.push(b), b.contentWidth = Yt(b.text, A);
            else {
                if (O) {
                    var E = M.backgroundColor,
                        G = E && E.image;
                    G && (G = xg(G), Oa(G) && (b.width = Math.max(b.width, G.width * x / G.height)))
                }
                var V = d && n != null ? n - T : null;
                V != null && V < b.width ? !O || V < C ? (b.text = "", b.width = b.contentWidth = 0) : (Lg(p, b.text, V - C, A, t.ellipsis, {
                    minChar: t.truncateMinChar
                }), b.text = p.text, r.isTruncated = r.isTruncated || p.isTruncated, b.width = b.contentWidth = Yt(b.text, A)) : b.contentWidth = Yt(b.text, A)
            }
            b.width += C, T += b.width, M && (S = Math.max(S, b.lineHeight))
        }
        y(_, T, S)
    }
    r.outerWidth = r.width = q(n, c), r.outerHeight = r.height = q(i, h), r.contentHeight = h, r.contentWidth = c, v && (r.outerWidth += v[1] + v[3], r.outerHeight += v[0] + v[2]);
    for (var m = 0; m < f.length; m++) {
        var b = f[m],
            k = b.percentWidth;
        b.width = parseInt(k, 10) / 100 * r.width
    }
    return r
}

function _o(e, t, r, n, i) {
    var a = t === "",
        o = i && r.rich[i] || {},
        s = e.lines,
        u = o.font || r.font,
        l = !1,
        f, h;
    if (n) {
        var c = o.padding,
            v = c ? c[1] + c[3] : 0;
        if (o.width != null && o.width !== "auto") {
            var d = nn(o.width, n.width) + v;
            s.length > 0 && d + n.accumWidth > n.width && (f = t.split(`
`), l = !0), n.accumWidth = d
        } else {
            var g = uv(t, u, n.width, n.breakAll, n.accumWidth);
            n.accumWidth = g.accumWidth + v, h = g.linesWidths, f = g.lines
        }
    } else f = t.split(`
`);
    for (var p = 0; p < f.length; p++) {
        var y = f[p],
            m = new Og;
        if (m.styleName = i, m.text = y, m.isLineHolder = !y && !a, typeof o.width == "number" ? m.width = o.width : m.width = h ? h[p] : Yt(y, u), !p && !l) {
            var _ = (s[s.length - 1] || (s[0] = new wl)).tokens,
                S = _.length;
            S === 1 && _[0].isLineHolder ? _[0] = m : (y || !S || a) && _.push(m)
        } else s.push(new wl([m]))
    }
}

function Ng(e) {
    var t = e.charCodeAt(0);
    return t >= 32 && t <= 591 || t >= 880 && t <= 4351 || t >= 4608 && t <= 5119 || t >= 7680 && t <= 8303
}
var Bg = Ze(",&?/;] ".split(""), function(e, t) {
    return e[t] = !0, e
}, {});

function zg(e) {
    return Ng(e) ? !!Bg[e] : !0
}

function uv(e, t, r, n, i) {
    for (var a = [], o = [], s = "", u = "", l = 0, f = 0, h = 0; h < e.length; h++) {
        var c = e.charAt(h);
        if (c === `
`) {
            u && (s += u, f += l), a.push(s), o.push(f), s = "", u = "", l = 0, f = 0;
            continue
        }
        var v = Yt(c, t),
            d = n ? !1 : !zg(c);
        if (a.length ? f + v > r : i + f + v > r) {
            f ? (s || u) && (d ? (s || (s = u, u = "", l = 0, f = l), a.push(s), o.push(f - l), u += c, l += v, s = "", f = l) : (u && (s += u, u = "", l = 0), a.push(s), o.push(f), s = c, f = v)) : d ? (a.push(u), o.push(l), u = c, l = v) : (a.push(c), o.push(v));
            continue
        }
        f += v, d ? (u += c, l += v) : (u && (s += u, u = "", l = 0), s += c)
    }
    return !a.length && !s && (s = e, u = "", l = 0), u && (s += u), s && (a.push(s), o.push(f)), a.length === 1 && (f += i), {
        accumWidth: f,
        lines: a,
        linesWidths: o
    }
}
var Ms = "__zr_style_" + Math.round(Math.random() * 10),
    Dr = {
        shadowBlur: 0,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowColor: "#000",
        opacity: 1,
        blend: "source-over"
    },
    ka = {
        style: {
            shadowBlur: !0,
            shadowOffsetX: !0,
            shadowOffsetY: !0,
            shadowColor: !0,
            opacity: !0
        }
    };
Dr[Ms] = !0;
var Tl = ["z", "z2", "invisible"],
    Hg = ["invisible"],
    fi = function(e) {
        W(t, e);

        function t(r) {
            return e.call(this, r) || this
        }
        return t.prototype._init = function(r) {
            for (var n = ht(r), i = 0; i < n.length; i++) {
                var a = n[i];
                a === "style" ? this.useStyle(r[a]) : e.prototype.attrKV.call(this, a, r[a])
            }
            this.style || this.useStyle({})
        }, t.prototype.beforeBrush = function() {}, t.prototype.afterBrush = function() {}, t.prototype.innerBeforeBrush = function() {}, t.prototype.innerAfterBrush = function() {}, t.prototype.shouldBePainted = function(r, n, i, a) {
            var o = this.transform;
            if (this.ignore || this.invisible || this.style.opacity === 0 || this.culling && Gg(this, r, n) || o && !o[0] && !o[3]) return !1;
            if (i && this.__clipPaths) {
                for (var s = 0; s < this.__clipPaths.length; ++s)
                    if (this.__clipPaths[s].isZeroArea()) return !1
            }
            if (a && this.parent)
                for (var u = this.parent; u;) {
                    if (u.ignore) return !1;
                    u = u.parent
                }
            return !0
        }, t.prototype.contain = function(r, n) {
            return this.rectContain(r, n)
        }, t.prototype.traverse = function(r, n) {
            r.call(n, this)
        }, t.prototype.rectContain = function(r, n) {
            var i = this.transformCoordToLocal(r, n),
                a = this.getBoundingRect();
            return a.contain(i[0], i[1])
        }, t.prototype.getPaintRect = function() {
            var r = this._paintRect;
            if (!this._paintRect || this.__dirty) {
                var n = this.transform,
                    i = this.getBoundingRect(),
                    a = this.style,
                    o = a.shadowBlur || 0,
                    s = a.shadowOffsetX || 0,
                    u = a.shadowOffsetY || 0;
                r = this._paintRect || (this._paintRect = new nt(0, 0, 0, 0)), n ? nt.applyTransform(r, i, n) : r.copy(i), (o || s || u) && (r.width += o * 2 + Math.abs(s), r.height += o * 2 + Math.abs(u), r.x = Math.min(r.x, r.x + s - o), r.y = Math.min(r.y, r.y + u - o));
                var l = this.dirtyRectTolerance;
                r.isZero() || (r.x = Math.floor(r.x - l), r.y = Math.floor(r.y - l), r.width = Math.ceil(r.width + 1 + l * 2), r.height = Math.ceil(r.height + 1 + l * 2))
            }
            return r
        }, t.prototype.setPrevPaintRect = function(r) {
            r ? (this._prevPaintRect = this._prevPaintRect || new nt(0, 0, 0, 0), this._prevPaintRect.copy(r)) : this._prevPaintRect = null
        }, t.prototype.getPrevPaintRect = function() {
            return this._prevPaintRect
        }, t.prototype.animateStyle = function(r) {
            return this.animate("style", r)
        }, t.prototype.updateDuringAnimation = function(r) {
            r === "style" ? this.dirtyStyle() : this.markRedraw()
        }, t.prototype.attrKV = function(r, n) {
            r !== "style" ? e.prototype.attrKV.call(this, r, n) : this.style ? this.setStyle(n) : this.useStyle(n)
        }, t.prototype.setStyle = function(r, n) {
            return typeof r == "string" ? this.style[r] = n : I(this.style, r), this.dirtyStyle(), this
        }, t.prototype.dirtyStyle = function(r) {
            r || this.markRedraw(), this.__dirty |= qi, this._rect && (this._rect = null)
        }, t.prototype.dirty = function() {
            this.dirtyStyle()
        }, t.prototype.styleChanged = function() {
            return !!(this.__dirty & qi)
        }, t.prototype.styleUpdated = function() {
            this.__dirty &= -3
        }, t.prototype.createStyle = function(r) {
            return Ra(Dr, r)
        }, t.prototype.useStyle = function(r) {
            r[Ms] || (r = this.createStyle(r)), this.__inHover ? this.__hoverStyle = r : this.style = r, this.dirtyStyle()
        }, t.prototype.isStyleObject = function(r) {
            return r[Ms]
        }, t.prototype._innerSaveToNormal = function(r) {
            e.prototype._innerSaveToNormal.call(this, r);
            var n = this._normalState;
            r.style && !n.style && (n.style = this._mergeStyle(this.createStyle(), this.style)), this._savePrimaryToNormal(r, n, Tl)
        }, t.prototype._applyStateObj = function(r, n, i, a, o, s) {
            e.prototype._applyStateObj.call(this, r, n, i, a, o, s);
            var u = !(n && a),
                l;
            if (n && n.style ? o ? a ? l = n.style : (l = this._mergeStyle(this.createStyle(), i.style), this._mergeStyle(l, n.style)) : (l = this._mergeStyle(this.createStyle(), a ? this.style : i.style), this._mergeStyle(l, n.style)) : u && (l = i.style), l)
                if (o) {
                    var f = this.style;
                    if (this.style = this.createStyle(u ? {} : f), u)
                        for (var h = ht(f), c = 0; c < h.length; c++) {
                            var v = h[c];
                            v in l && (l[v] = l[v], this.style[v] = f[v])
                        }
                    for (var d = ht(l), c = 0; c < d.length; c++) {
                        var v = d[c];
                        this.style[v] = this.style[v]
                    }
                    this._transitionState(r, {
                        style: l
                    }, s, this.getAnimationStyleProps())
                } else this.useStyle(l);
            for (var g = this.__inHover ? Hg : Tl, c = 0; c < g.length; c++) {
                var v = g[c];
                n && n[v] != null ? this[v] = n[v] : u && i[v] != null && (this[v] = i[v])
            }
        }, t.prototype._mergeStates = function(r) {
            for (var n = e.prototype._mergeStates.call(this, r), i, a = 0; a < r.length; a++) {
                var o = r[a];
                o.style && (i = i || {}, this._mergeStyle(i, o.style))
            }
            return i && (n.style = i), n
        }, t.prototype._mergeStyle = function(r, n) {
            return I(r, n), r
        }, t.prototype.getAnimationStyleProps = function() {
            return ka
        }, t.initDefaultProps = function() {
            var r = t.prototype;
            r.type = "displayable", r.invisible = !1, r.z = 0, r.z2 = 0, r.zlevel = 0, r.culling = !1, r.cursor = "pointer", r.rectHover = !1, r.incremental = !1, r._rect = null, r.dirtyRectTolerance = 0, r.__dirty = Tr | qi
        }(), t
    }(xa),
    So = new nt(0, 0, 0, 0),
    wo = new nt(0, 0, 0, 0);

function Gg(e, t, r) {
    return So.copy(e.getBoundingRect()), e.transform && So.applyTransform(e.transform), wo.width = t, wo.height = r, !So.intersect(wo)
}
var Ot = Math.min,
    kt = Math.max,
    To = Math.sin,
    bo = Math.cos,
    ar = Math.PI * 2,
    bi = on(),
    Di = on(),
    Mi = on();

function Ew(e, t, r) {
    if (e.length !== 0) {
        for (var n = e[0], i = n[0], a = n[0], o = n[1], s = n[1], u = 1; u < e.length; u++) n = e[u], i = Ot(i, n[0]), a = kt(a, n[0]), o = Ot(o, n[1]), s = kt(s, n[1]);
        t[0] = i, t[1] = o, r[0] = a, r[1] = s
    }
}

function bl(e, t, r, n, i, a) {
    i[0] = Ot(e, r), i[1] = Ot(t, n), a[0] = kt(e, r), a[1] = kt(t, n)
}
var Dl = [],
    Ml = [];

function Vg(e, t, r, n, i, a, o, s, u, l) {
    var f = Oh,
        h = _t,
        c = f(e, r, i, o, Dl);
    u[0] = 1 / 0, u[1] = 1 / 0, l[0] = -1 / 0, l[1] = -1 / 0;
    for (var v = 0; v < c; v++) {
        var d = h(e, r, i, o, Dl[v]);
        u[0] = Ot(d, u[0]), l[0] = kt(d, l[0])
    }
    c = f(t, n, a, s, Ml);
    for (var v = 0; v < c; v++) {
        var g = h(t, n, a, s, Ml[v]);
        u[1] = Ot(g, u[1]), l[1] = kt(g, l[1])
    }
    u[0] = Ot(e, u[0]), l[0] = kt(e, l[0]), u[0] = Ot(o, u[0]), l[0] = kt(o, l[0]), u[1] = Ot(t, u[1]), l[1] = kt(t, l[1]), u[1] = Ot(s, u[1]), l[1] = kt(s, l[1])
}

function Ug(e, t, r, n, i, a, o, s) {
    var u = Fh,
        l = Dt,
        f = kt(Ot(u(e, r, i), 1), 0),
        h = kt(Ot(u(t, n, a), 1), 0),
        c = l(e, r, i, f),
        v = l(t, n, a, h);
    o[0] = Ot(e, i, c), o[1] = Ot(t, a, v), s[0] = kt(e, i, c), s[1] = kt(t, a, v)
}

function Yg(e, t, r, n, i, a, o, s, u) {
    var l = qr,
        f = $r,
        h = Math.abs(i - a);
    if (h % ar < 1e-4 && h > 1e-4) {
        s[0] = e - r, s[1] = t - n, u[0] = e + r, u[1] = t + n;
        return
    }
    if (bi[0] = bo(i) * r + e, bi[1] = To(i) * n + t, Di[0] = bo(a) * r + e, Di[1] = To(a) * n + t, l(s, bi, Di), f(u, bi, Di), i = i % ar, i < 0 && (i = i + ar), a = a % ar, a < 0 && (a = a + ar), i > a && !o ? a += ar : i < a && o && (i += ar), o) {
        var c = a;
        a = i, i = c
    }
    for (var v = 0; v < a; v += Math.PI / 2) v > i && (Mi[0] = bo(v) * r + e, Mi[1] = To(v) * n + t, l(s, Mi, s), f(u, Mi, u))
}
var J = {
        M: 1,
        L: 2,
        C: 3,
        Q: 4,
        A: 5,
        Z: 6,
        R: 7
    },
    or = [],
    sr = [],
    ce = [],
    Fe = [],
    de = [],
    pe = [],
    Do = Math.min,
    Mo = Math.max,
    ur = Math.cos,
    lr = Math.sin,
    Pe = Math.abs,
    Cs = Math.PI,
    Ve = Cs * 2,
    Co = typeof Float32Array < "u",
    mn = [];

function Po(e) {
    var t = Math.round(e / Cs * 1e8) / 1e8;
    return t % 2 * Cs
}

function lv(e, t) {
    var r = Po(e[0]);
    r < 0 && (r += Ve);
    var n = r - e[0],
        i = e[1];
    i += n, !t && i - r >= Ve ? i = r + Ve : t && r - i >= Ve ? i = r - Ve : !t && r > i ? i = r + (Ve - Po(r - i)) : t && r < i && (i = r - (Ve - Po(i - r))), e[0] = r, e[1] = i
}
var Ar = function() {
    function e(t) {
        this.dpr = 1, this._xi = 0, this._yi = 0, this._x0 = 0, this._y0 = 0, this._len = 0, t && (this._saveData = !1), this._saveData && (this.data = [])
    }
    return e.prototype.increaseVersion = function() {
        this._version++
    }, e.prototype.getVersion = function() {
        return this._version
    }, e.prototype.setScale = function(t, r, n) {
        n = n || 0, n > 0 && (this._ux = Pe(n / vl / t) || 0, this._uy = Pe(n / vl / r) || 0)
    }, e.prototype.setDPR = function(t) {
        this.dpr = t
    }, e.prototype.setContext = function(t) {
        this._ctx = t
    }, e.prototype.getContext = function() {
        return this._ctx
    }, e.prototype.beginPath = function() {
        return this._ctx && this._ctx.beginPath(), this.reset(), this
    }, e.prototype.reset = function() {
        this._saveData && (this._len = 0), this._pathSegLen && (this._pathSegLen = null, this._pathLen = 0), this._version++
    }, e.prototype.moveTo = function(t, r) {
        return this._drawPendingPt(), this.addData(J.M, t, r), this._ctx && this._ctx.moveTo(t, r), this._x0 = t, this._y0 = r, this._xi = t, this._yi = r, this
    }, e.prototype.lineTo = function(t, r) {
        var n = Pe(t - this._xi),
            i = Pe(r - this._yi),
            a = n > this._ux || i > this._uy;
        if (this.addData(J.L, t, r), this._ctx && a && this._ctx.lineTo(t, r), a) this._xi = t, this._yi = r, this._pendingPtDist = 0;
        else {
            var o = n * n + i * i;
            o > this._pendingPtDist && (this._pendingPtX = t, this._pendingPtY = r, this._pendingPtDist = o)
        }
        return this
    }, e.prototype.bezierCurveTo = function(t, r, n, i, a, o) {
        return this._drawPendingPt(), this.addData(J.C, t, r, n, i, a, o), this._ctx && this._ctx.bezierCurveTo(t, r, n, i, a, o), this._xi = a, this._yi = o, this
    }, e.prototype.quadraticCurveTo = function(t, r, n, i) {
        return this._drawPendingPt(), this.addData(J.Q, t, r, n, i), this._ctx && this._ctx.quadraticCurveTo(t, r, n, i), this._xi = n, this._yi = i, this
    }, e.prototype.arc = function(t, r, n, i, a, o) {
        this._drawPendingPt(), mn[0] = i, mn[1] = a, lv(mn, o), i = mn[0], a = mn[1];
        var s = a - i;
        return this.addData(J.A, t, r, n, n, i, s, 0, o ? 0 : 1), this._ctx && this._ctx.arc(t, r, n, i, a, o), this._xi = ur(a) * n + t, this._yi = lr(a) * n + r, this
    }, e.prototype.arcTo = function(t, r, n, i, a) {
        return this._drawPendingPt(), this._ctx && this._ctx.arcTo(t, r, n, i, a), this
    }, e.prototype.rect = function(t, r, n, i) {
        return this._drawPendingPt(), this._ctx && this._ctx.rect(t, r, n, i), this.addData(J.R, t, r, n, i), this
    }, e.prototype.closePath = function() {
        this._drawPendingPt(), this.addData(J.Z);
        var t = this._ctx,
            r = this._x0,
            n = this._y0;
        return t && t.closePath(), this._xi = r, this._yi = n, this
    }, e.prototype.fill = function(t) {
        t && t.fill(), this.toStatic()
    }, e.prototype.stroke = function(t) {
        t && t.stroke(), this.toStatic()
    }, e.prototype.len = function() {
        return this._len
    }, e.prototype.setData = function(t) {
        var r = t.length;
        !(this.data && this.data.length === r) && Co && (this.data = new Float32Array(r));
        for (var n = 0; n < r; n++) this.data[n] = t[n];
        this._len = r
    }, e.prototype.appendPath = function(t) {
        t instanceof Array || (t = [t]);
        for (var r = t.length, n = 0, i = this._len, a = 0; a < r; a++) n += t[a].len();
        Co && this.data instanceof Float32Array && (this.data = new Float32Array(i + n));
        for (var a = 0; a < r; a++)
            for (var o = t[a].data, s = 0; s < o.length; s++) this.data[i++] = o[s];
        this._len = i
    }, e.prototype.addData = function(t, r, n, i, a, o, s, u, l) {
        if (this._saveData) {
            var f = this.data;
            this._len + arguments.length > f.length && (this._expandData(), f = this.data);
            for (var h = 0; h < arguments.length; h++) f[this._len++] = arguments[h]
        }
    }, e.prototype._drawPendingPt = function() {
        this._pendingPtDist > 0 && (this._ctx && this._ctx.lineTo(this._pendingPtX, this._pendingPtY), this._pendingPtDist = 0)
    }, e.prototype._expandData = function() {
        if (!(this.data instanceof Array)) {
            for (var t = [], r = 0; r < this._len; r++) t[r] = this.data[r];
            this.data = t
        }
    }, e.prototype.toStatic = function() {
        if (this._saveData) {
            this._drawPendingPt();
            var t = this.data;
            t instanceof Array && (t.length = this._len, Co && this._len > 11 && (this.data = new Float32Array(t)))
        }
    }, e.prototype.getBoundingRect = function() {
        ce[0] = ce[1] = de[0] = de[1] = Number.MAX_VALUE, Fe[0] = Fe[1] = pe[0] = pe[1] = -Number.MAX_VALUE;
        var t = this.data,
            r = 0,
            n = 0,
            i = 0,
            a = 0,
            o;
        for (o = 0; o < this._len;) {
            var s = t[o++],
                u = o === 1;
            switch (u && (r = t[o], n = t[o + 1], i = r, a = n), s) {
                case J.M:
                    r = i = t[o++], n = a = t[o++], de[0] = i, de[1] = a, pe[0] = i, pe[1] = a;
                    break;
                case J.L:
                    bl(r, n, t[o], t[o + 1], de, pe), r = t[o++], n = t[o++];
                    break;
                case J.C:
                    Vg(r, n, t[o++], t[o++], t[o++], t[o++], t[o], t[o + 1], de, pe), r = t[o++], n = t[o++];
                    break;
                case J.Q:
                    Ug(r, n, t[o++], t[o++], t[o], t[o + 1], de, pe), r = t[o++], n = t[o++];
                    break;
                case J.A:
                    var l = t[o++],
                        f = t[o++],
                        h = t[o++],
                        c = t[o++],
                        v = t[o++],
                        d = t[o++] + v;
                    o += 1;
                    var g = !t[o++];
                    u && (i = ur(v) * h + l, a = lr(v) * c + f), Yg(l, f, h, c, v, d, g, de, pe), r = ur(d) * h + l, n = lr(d) * c + f;
                    break;
                case J.R:
                    i = r = t[o++], a = n = t[o++];
                    var p = t[o++],
                        y = t[o++];
                    bl(i, a, i + p, a + y, de, pe);
                    break;
                case J.Z:
                    r = i, n = a;
                    break
            }
            qr(ce, ce, de), $r(Fe, Fe, pe)
        }
        return o === 0 && (ce[0] = ce[1] = Fe[0] = Fe[1] = 0), new nt(ce[0], ce[1], Fe[0] - ce[0], Fe[1] - ce[1])
    }, e.prototype._calculateLength = function() {
        var t = this.data,
            r = this._len,
            n = this._ux,
            i = this._uy,
            a = 0,
            o = 0,
            s = 0,
            u = 0;
        this._pathSegLen || (this._pathSegLen = []);
        for (var l = this._pathSegLen, f = 0, h = 0, c = 0; c < r;) {
            var v = t[c++],
                d = c === 1;
            d && (a = t[c], o = t[c + 1], s = a, u = o);
            var g = -1;
            switch (v) {
                case J.M:
                    a = s = t[c++], o = u = t[c++];
                    break;
                case J.L:
                    {
                        var p = t[c++],
                            y = t[c++],
                            m = p - a,
                            _ = y - o;
                        (Pe(m) > n || Pe(_) > i || c === r - 1) && (g = Math.sqrt(m * m + _ * _), a = p, o = y);
                        break
                    }
                case J.C:
                    {
                        var S = t[c++],
                            T = t[c++],
                            p = t[c++],
                            y = t[c++],
                            w = t[c++],
                            b = t[c++];g = hp(a, o, S, T, p, y, w, b, 10),
                        a = w,
                        o = b;
                        break
                    }
                case J.Q:
                    {
                        var S = t[c++],
                            T = t[c++],
                            p = t[c++],
                            y = t[c++];g = cp(a, o, S, T, p, y, 10),
                        a = p,
                        o = y;
                        break
                    }
                case J.A:
                    var M = t[c++],
                        D = t[c++],
                        C = t[c++],
                        A = t[c++],
                        x = t[c++],
                        L = t[c++],
                        R = L + x;
                    c += 1, d && (s = ur(x) * C + M, u = lr(x) * A + D), g = Mo(C, A) * Do(Ve, Math.abs(L)), a = ur(R) * C + M, o = lr(R) * A + D;
                    break;
                case J.R:
                    {
                        s = a = t[c++],
                        u = o = t[c++];
                        var O = t[c++],
                            E = t[c++];g = O * 2 + E * 2;
                        break
                    }
                case J.Z:
                    {
                        var m = s - a,
                            _ = u - o;g = Math.sqrt(m * m + _ * _),
                        a = s,
                        o = u;
                        break
                    }
            }
            g >= 0 && (l[h++] = g, f += g)
        }
        return this._pathLen = f, f
    }, e.prototype.rebuildPath = function(t, r) {
        var n = this.data,
            i = this._ux,
            a = this._uy,
            o = this._len,
            s, u, l, f, h, c, v = r < 1,
            d, g, p = 0,
            y = 0,
            m, _ = 0,
            S, T;
        if (!(v && (this._pathSegLen || this._calculateLength(), d = this._pathSegLen, g = this._pathLen, m = r * g, !m))) t: for (var w = 0; w < o;) {
            var b = n[w++],
                M = w === 1;
            switch (M && (l = n[w], f = n[w + 1], s = l, u = f), b !== J.L && _ > 0 && (t.lineTo(S, T), _ = 0), b) {
                case J.M:
                    s = l = n[w++], u = f = n[w++], t.moveTo(l, f);
                    break;
                case J.L:
                    {
                        h = n[w++],
                        c = n[w++];
                        var D = Pe(h - l),
                            C = Pe(c - f);
                        if (D > i || C > a) {
                            if (v) {
                                var A = d[y++];
                                if (p + A > m) {
                                    var x = (m - p) / A;
                                    t.lineTo(l * (1 - x) + h * x, f * (1 - x) + c * x);
                                    break t
                                }
                                p += A
                            }
                            t.lineTo(h, c), l = h, f = c, _ = 0
                        } else {
                            var L = D * D + C * C;
                            L > _ && (S = h, T = c, _ = L)
                        }
                        break
                    }
                case J.C:
                    {
                        var R = n[w++],
                            O = n[w++],
                            E = n[w++],
                            G = n[w++],
                            V = n[w++],
                            k = n[w++];
                        if (v) {
                            var A = d[y++];
                            if (p + A > m) {
                                var x = (m - p) / A;
                                oa(l, R, E, V, x, or), oa(f, O, G, k, x, sr), t.bezierCurveTo(or[1], sr[1], or[2], sr[2], or[3], sr[3]);
                                break t
                            }
                            p += A
                        }
                        t.bezierCurveTo(R, O, E, G, V, k),
                        l = V,
                        f = k;
                        break
                    }
                case J.Q:
                    {
                        var R = n[w++],
                            O = n[w++],
                            E = n[w++],
                            G = n[w++];
                        if (v) {
                            var A = d[y++];
                            if (p + A > m) {
                                var x = (m - p) / A;
                                sa(l, R, E, x, or), sa(f, O, G, x, sr), t.quadraticCurveTo(or[1], sr[1], or[2], sr[2]);
                                break t
                            }
                            p += A
                        }
                        t.quadraticCurveTo(R, O, E, G),
                        l = E,
                        f = G;
                        break
                    }
                case J.A:
                    var U = n[w++],
                        $ = n[w++],
                        z = n[w++],
                        vt = n[w++],
                        pt = n[w++],
                        Gt = n[w++],
                        he = n[w++],
                        Wt = !n[w++],
                        Vt = z > vt ? z : vt,
                        yt = Pe(z - vt) > .001,
                        st = pt + Gt,
                        N = !1;
                    if (v) {
                        var A = d[y++];
                        p + A > m && (st = pt + Gt * (m - p) / A, N = !0), p += A
                    }
                    if (yt && t.ellipse ? t.ellipse(U, $, z, vt, he, pt, st, Wt) : t.arc(U, $, Vt, pt, st, Wt), N) break t;
                    M && (s = ur(pt) * z + U, u = lr(pt) * vt + $), l = ur(st) * z + U, f = lr(st) * vt + $;
                    break;
                case J.R:
                    s = l = n[w], u = f = n[w + 1], h = n[w++], c = n[w++];
                    var Y = n[w++],
                        ve = n[w++];
                    if (v) {
                        var A = d[y++];
                        if (p + A > m) {
                            var gt = m - p;
                            t.moveTo(h, c), t.lineTo(h + Do(gt, Y), c), gt -= Y, gt > 0 && t.lineTo(h + Y, c + Do(gt, ve)), gt -= ve, gt > 0 && t.lineTo(h + Mo(Y - gt, 0), c + ve), gt -= Y, gt > 0 && t.lineTo(h, c + Mo(ve - gt, 0));
                            break t
                        }
                        p += A
                    }
                    t.rect(h, c, Y, ve);
                    break;
                case J.Z:
                    if (v) {
                        var A = d[y++];
                        if (p + A > m) {
                            var x = (m - p) / A;
                            t.lineTo(l * (1 - x) + s * x, f * (1 - x) + u * x);
                            break t
                        }
                        p += A
                    }
                    t.closePath(), l = s, f = u
            }
        }
    }, e.prototype.clone = function() {
        var t = new e,
            r = this.data;
        return t.data = r.slice ? r.slice() : Array.prototype.slice.call(r), t._len = this._len, t
    }, e.CMD = J, e.initDefaultProps = function() {
        var t = e.prototype;
        t._saveData = !0, t._ux = 0, t._uy = 0, t._pendingPtDist = 0, t._version = 0
    }(), e
}();

function Nr(e, t, r, n, i, a, o) {
    if (i === 0) return !1;
    var s = i,
        u = 0,
        l = e;
    if (o > t + s && o > n + s || o < t - s && o < n - s || a > e + s && a > r + s || a < e - s && a < r - s) return !1;
    if (e !== r) u = (t - n) / (e - r), l = (e * n - r * t) / (e - r);
    else return Math.abs(a - e) <= s / 2;
    var f = u * a - o + l,
        h = f * f / (u * u + 1);
    return h <= s / 2 * s / 2
}

function Wg(e, t, r, n, i, a, o, s, u, l, f) {
    if (u === 0) return !1;
    var h = u;
    if (f > t + h && f > n + h && f > a + h && f > s + h || f < t - h && f < n - h && f < a - h && f < s - h || l > e + h && l > r + h && l > i + h && l > o + h || l < e - h && l < r - h && l < i - h && l < o - h) return !1;
    var c = kh(e, t, r, n, i, a, o, s, l, f, null);
    return c <= h / 2
}

function Xg(e, t, r, n, i, a, o, s, u) {
    if (o === 0) return !1;
    var l = o;
    if (u > t + l && u > n + l && u > a + l || u < t - l && u < n - l && u < a - l || s > e + l && s > r + l && s > i + l || s < e - l && s < r - l && s < i - l) return !1;
    var f = Nh(e, t, r, n, i, a, s, u, null);
    return f <= l / 2
}
var Cl = Math.PI * 2;

function We(e) {
    return e %= Cl, e < 0 && (e += Cl), e
}
var _n = Math.PI * 2;

function qg(e, t, r, n, i, a, o, s, u) {
    if (o === 0) return !1;
    var l = o;
    s -= e, u -= t;
    var f = Math.sqrt(s * s + u * u);
    if (f - l > r || f + l < r) return !1;
    if (Math.abs(n - i) % _n < 1e-4) return !0;
    if (a) {
        var h = n;
        n = We(i), i = We(h)
    } else n = We(n), i = We(i);
    n > i && (i += _n);
    var c = Math.atan2(u, s);
    return c < 0 && (c += _n), c >= n && c <= i || c + _n >= n && c + _n <= i
}

function fr(e, t, r, n, i, a) {
    if (a > t && a > n || a < t && a < n || n === t) return 0;
    var o = (a - t) / (n - t),
        s = n < t ? 1 : -1;
    (o === 1 || o === 0) && (s = n < t ? .5 : -.5);
    var u = o * (r - e) + e;
    return u === i ? 1 / 0 : u > i ? s : 0
}
var Ne = Ar.CMD,
    hr = Math.PI * 2,
    $g = 1e-4;

function Zg(e, t) {
    return Math.abs(e - t) < $g
}
var At = [-1, -1, -1],
    Zt = [-1, -1];

function Kg() {
    var e = Zt[0];
    Zt[0] = Zt[1], Zt[1] = e
}

function Qg(e, t, r, n, i, a, o, s, u, l) {
    if (l > t && l > n && l > a && l > s || l < t && l < n && l < a && l < s) return 0;
    var f = Eh(t, n, a, s, l, At);
    if (f === 0) return 0;
    for (var h = 0, c = -1, v = void 0, d = void 0, g = 0; g < f; g++) {
        var p = At[g],
            y = p === 0 || p === 1 ? .5 : 1,
            m = _t(e, r, i, o, p);
        m < u || (c < 0 && (c = Oh(t, n, a, s, Zt), Zt[1] < Zt[0] && c > 1 && Kg(), v = _t(t, n, a, s, Zt[0]), c > 1 && (d = _t(t, n, a, s, Zt[1]))), c === 2 ? p < Zt[0] ? h += v < t ? y : -y : p < Zt[1] ? h += d < v ? y : -y : h += s < d ? y : -y : p < Zt[0] ? h += v < t ? y : -y : h += s < v ? y : -y)
    }
    return h
}

function Jg(e, t, r, n, i, a, o, s) {
    if (s > t && s > n && s > a || s < t && s < n && s < a) return 0;
    var u = vp(t, n, a, s, At);
    if (u === 0) return 0;
    var l = Fh(t, n, a);
    if (l >= 0 && l <= 1) {
        for (var f = 0, h = Dt(t, n, a, l), c = 0; c < u; c++) {
            var v = At[c] === 0 || At[c] === 1 ? .5 : 1,
                d = Dt(e, r, i, At[c]);
            d < o || (At[c] < l ? f += h < t ? v : -v : f += a < h ? v : -v)
        }
        return f
    } else {
        var v = At[0] === 0 || At[0] === 1 ? .5 : 1,
            d = Dt(e, r, i, At[0]);
        return d < o ? 0 : a < t ? v : -v
    }
}

function jg(e, t, r, n, i, a, o, s) {
    if (s -= t, s > r || s < -r) return 0;
    var u = Math.sqrt(r * r - s * s);
    At[0] = -u, At[1] = u;
    var l = Math.abs(n - i);
    if (l < 1e-4) return 0;
    if (l >= hr - 1e-4) {
        n = 0, i = hr;
        var f = a ? 1 : -1;
        return o >= At[0] + e && o <= At[1] + e ? f : 0
    }
    if (n > i) {
        var h = n;
        n = i, i = h
    }
    n < 0 && (n += hr, i += hr);
    for (var c = 0, v = 0; v < 2; v++) {
        var d = At[v];
        if (d + e > o) {
            var g = Math.atan2(s, d),
                f = a ? 1 : -1;
            g < 0 && (g = hr + g), (g >= n && g <= i || g + hr >= n && g + hr <= i) && (g > Math.PI / 2 && g < Math.PI * 1.5 && (f = -f), c += f)
        }
    }
    return c
}

function fv(e, t, r, n, i) {
    for (var a = e.data, o = e.len(), s = 0, u = 0, l = 0, f = 0, h = 0, c, v, d = 0; d < o;) {
        var g = a[d++],
            p = d === 1;
        switch (g === Ne.M && d > 1 && (r || (s += fr(u, l, f, h, n, i))), p && (u = a[d], l = a[d + 1], f = u, h = l), g) {
            case Ne.M:
                f = a[d++], h = a[d++], u = f, l = h;
                break;
            case Ne.L:
                if (r) {
                    if (Nr(u, l, a[d], a[d + 1], t, n, i)) return !0
                } else s += fr(u, l, a[d], a[d + 1], n, i) || 0;
                u = a[d++], l = a[d++];
                break;
            case Ne.C:
                if (r) {
                    if (Wg(u, l, a[d++], a[d++], a[d++], a[d++], a[d], a[d + 1], t, n, i)) return !0
                } else s += Qg(u, l, a[d++], a[d++], a[d++], a[d++], a[d], a[d + 1], n, i) || 0;
                u = a[d++], l = a[d++];
                break;
            case Ne.Q:
                if (r) {
                    if (Xg(u, l, a[d++], a[d++], a[d], a[d + 1], t, n, i)) return !0
                } else s += Jg(u, l, a[d++], a[d++], a[d], a[d + 1], n, i) || 0;
                u = a[d++], l = a[d++];
                break;
            case Ne.A:
                var y = a[d++],
                    m = a[d++],
                    _ = a[d++],
                    S = a[d++],
                    T = a[d++],
                    w = a[d++];
                d += 1;
                var b = !!(1 - a[d++]);
                c = Math.cos(T) * _ + y, v = Math.sin(T) * S + m, p ? (f = c, h = v) : s += fr(u, l, c, v, n, i);
                var M = (n - y) * S / _ + y;
                if (r) {
                    if (qg(y, m, S, T, T + w, b, t, M, i)) return !0
                } else s += jg(y, m, S, T, T + w, b, M, i);
                u = Math.cos(T + w) * _ + y, l = Math.sin(T + w) * S + m;
                break;
            case Ne.R:
                f = u = a[d++], h = l = a[d++];
                var D = a[d++],
                    C = a[d++];
                if (c = f + D, v = h + C, r) {
                    if (Nr(f, h, c, h, t, n, i) || Nr(c, h, c, v, t, n, i) || Nr(c, v, f, v, t, n, i) || Nr(f, v, f, h, t, n, i)) return !0
                } else s += fr(c, h, c, v, n, i), s += fr(f, v, f, h, n, i);
                break;
            case Ne.Z:
                if (r) {
                    if (Nr(u, l, f, h, t, n, i)) return !0
                } else s += fr(u, l, f, h, n, i);
                u = f, l = h;
                break
        }
    }
    return !r && !Zg(l, h) && (s += fr(u, l, f, h, n, i) || 0), s !== 0
}

function t0(e, t, r) {
    return fv(e, 0, !1, t, r)
}

function e0(e, t, r, n) {
    return fv(e, t, !0, r, n)
}
var hv = dt({
        fill: "#000",
        stroke: null,
        strokePercent: 1,
        fillOpacity: 1,
        strokeOpacity: 1,
        lineDashOffset: 0,
        lineWidth: 1,
        lineCap: "butt",
        miterLimit: 10,
        strokeNoScale: !1,
        strokeFirst: !1
    }, Dr),
    r0 = {
        style: dt({
            fill: !0,
            stroke: !0,
            strokePercent: !0,
            fillOpacity: !0,
            strokeOpacity: !0,
            lineDashOffset: !0,
            lineWidth: !0,
            miterLimit: !0
        }, ka.style)
    },
    Ao = Jn.concat(["invisible", "culling", "z", "z2", "zlevel", "parent"]),
    et = function(e) {
        W(t, e);

        function t(r) {
            return e.call(this, r) || this
        }
        return t.prototype.update = function() {
            var r = this;
            e.prototype.update.call(this);
            var n = this.style;
            if (n.decal) {
                var i = this._decalEl = this._decalEl || new t;
                i.buildPath === t.prototype.buildPath && (i.buildPath = function(u) {
                    r.buildPath(u, r.shape)
                }), i.silent = !0;
                var a = i.style;
                for (var o in n) a[o] !== n[o] && (a[o] = n[o]);
                a.fill = n.fill ? n.decal : null, a.decal = null, a.shadowColor = null, n.strokeFirst && (a.stroke = null);
                for (var s = 0; s < Ao.length; ++s) i[Ao[s]] = this[Ao[s]];
                i.__dirty |= Tr
            } else this._decalEl && (this._decalEl = null)
        }, t.prototype.getDecalElement = function() {
            return this._decalEl
        }, t.prototype._init = function(r) {
            var n = ht(r);
            this.shape = this.getDefaultShape();
            var i = this.getDefaultStyle();
            i && this.useStyle(i);
            for (var a = 0; a < n.length; a++) {
                var o = n[a],
                    s = r[o];
                o === "style" ? this.style ? I(this.style, s) : this.useStyle(s) : o === "shape" ? I(this.shape, s) : e.prototype.attrKV.call(this, o, s)
            }
            this.style || this.useStyle({})
        }, t.prototype.getDefaultStyle = function() {
            return null
        }, t.prototype.getDefaultShape = function() {
            return {}
        }, t.prototype.canBeInsideText = function() {
            return this.hasFill()
        }, t.prototype.getInsideTextFill = function() {
            var r = this.style.fill;
            if (r !== "none") {
                if (X(r)) {
                    var n = ua(r, 0);
                    return n > .5 ? _s : n > .2 ? Np : Ss
                } else if (r) return Ss
            }
            return _s
        }, t.prototype.getInsideTextStroke = function(r) {
            var n = this.style.fill;
            if (X(n)) {
                var i = this.__zr,
                    a = !!(i && i.isDarkMode()),
                    o = ua(r, 0) < ms;
                if (a === o) return n
            }
        }, t.prototype.buildPath = function(r, n, i) {}, t.prototype.pathUpdated = function() {
            this.__dirty &= -5
        }, t.prototype.getUpdatedPathProxy = function(r) {
            return !this.path && this.createPathProxy(), this.path.beginPath(), this.buildPath(this.path, this.shape, r), this.path
        }, t.prototype.createPathProxy = function() {
            this.path = new Ar(!1)
        }, t.prototype.hasStroke = function() {
            var r = this.style,
                n = r.stroke;
            return !(n == null || n === "none" || !(r.lineWidth > 0))
        }, t.prototype.hasFill = function() {
            var r = this.style,
                n = r.fill;
            return n != null && n !== "none"
        }, t.prototype.getBoundingRect = function() {
            var r = this._rect,
                n = this.style,
                i = !r;
            if (i) {
                var a = !1;
                this.path || (a = !0, this.createPathProxy());
                var o = this.path;
                (a || this.__dirty & In) && (o.beginPath(), this.buildPath(o, this.shape, !1), this.pathUpdated()), r = o.getBoundingRect()
            }
            if (this._rect = r, this.hasStroke() && this.path && this.path.len() > 0) {
                var s = this._rectStroke || (this._rectStroke = r.clone());
                if (this.__dirty || i) {
                    s.copy(r);
                    var u = n.strokeNoScale ? this.getLineScale() : 1,
                        l = n.lineWidth;
                    if (!this.hasFill()) {
                        var f = this.strokeContainThreshold;
                        l = Math.max(l, f ? ? 4)
                    }
                    u > 1e-10 && (s.width += l / u, s.height += l / u, s.x -= l / u / 2, s.y -= l / u / 2)
                }
                return s
            }
            return r
        }, t.prototype.contain = function(r, n) {
            var i = this.transformCoordToLocal(r, n),
                a = this.getBoundingRect(),
                o = this.style;
            if (r = i[0], n = i[1], a.contain(r, n)) {
                var s = this.path;
                if (this.hasStroke()) {
                    var u = o.lineWidth,
                        l = o.strokeNoScale ? this.getLineScale() : 1;
                    if (l > 1e-10 && (this.hasFill() || (u = Math.max(u, this.strokeContainThreshold)), e0(s, u / l, r, n))) return !0
                }
                if (this.hasFill()) return t0(s, r, n)
            }
            return !1
        }, t.prototype.dirtyShape = function() {
            this.__dirty |= In, this._rect && (this._rect = null), this._decalEl && this._decalEl.dirtyShape(), this.markRedraw()
        }, t.prototype.dirty = function() {
            this.dirtyStyle(), this.dirtyShape()
        }, t.prototype.animateShape = function(r) {
            return this.animate("shape", r)
        }, t.prototype.updateDuringAnimation = function(r) {
            r === "style" ? this.dirtyStyle() : r === "shape" ? this.dirtyShape() : this.markRedraw()
        }, t.prototype.attrKV = function(r, n) {
            r === "shape" ? this.setShape(n) : e.prototype.attrKV.call(this, r, n)
        }, t.prototype.setShape = function(r, n) {
            var i = this.shape;
            return i || (i = this.shape = {}), typeof r == "string" ? i[r] = n : I(i, r), this.dirtyShape(), this
        }, t.prototype.shapeChanged = function() {
            return !!(this.__dirty & In)
        }, t.prototype.createStyle = function(r) {
            return Ra(hv, r)
        }, t.prototype._innerSaveToNormal = function(r) {
            e.prototype._innerSaveToNormal.call(this, r);
            var n = this._normalState;
            r.shape && !n.shape && (n.shape = I({}, this.shape))
        }, t.prototype._applyStateObj = function(r, n, i, a, o, s) {
            e.prototype._applyStateObj.call(this, r, n, i, a, o, s);
            var u = !(n && a),
                l;
            if (n && n.shape ? o ? a ? l = n.shape : (l = I({}, i.shape), I(l, n.shape)) : (l = I({}, a ? this.shape : i.shape), I(l, n.shape)) : u && (l = i.shape), l)
                if (o) {
                    this.shape = I({}, this.shape);
                    for (var f = {}, h = ht(l), c = 0; c < h.length; c++) {
                        var v = h[c];
                        typeof l[v] == "object" ? this.shape[v] = l[v] : f[v] = l[v]
                    }
                    this._transitionState(r, {
                        shape: f
                    }, s)
                } else this.shape = l, this.dirtyShape()
        }, t.prototype._mergeStates = function(r) {
            for (var n = e.prototype._mergeStates.call(this, r), i, a = 0; a < r.length; a++) {
                var o = r[a];
                o.shape && (i = i || {}, this._mergeStyle(i, o.shape))
            }
            return i && (n.shape = i), n
        }, t.prototype.getAnimationStyleProps = function() {
            return r0
        }, t.prototype.isZeroArea = function() {
            return !1
        }, t.extend = function(r) {
            var n = function(a) {
                W(o, a);

                function o(s) {
                    var u = a.call(this, s) || this;
                    return r.init && r.init.call(u, s), u
                }
                return o.prototype.getDefaultStyle = function() {
                    return tt(r.style)
                }, o.prototype.getDefaultShape = function() {
                    return tt(r.shape)
                }, o
            }(t);
            for (var i in r) typeof r[i] == "function" && (n.prototype[i] = r[i]);
            return n
        }, t.initDefaultProps = function() {
            var r = t.prototype;
            r.type = "path", r.strokeContainThreshold = 5, r.segmentIgnoreThreshold = 0, r.subPixelOptimize = !1, r.autoBatch = !1, r.__dirty = Tr | qi | In
        }(), t
    }(fi),
    n0 = dt({
        strokeFirst: !0,
        font: Cr,
        x: 0,
        y: 0,
        textAlign: "left",
        textBaseline: "top",
        miterLimit: 2
    }, hv),
    fa = function(e) {
        W(t, e);

        function t() {
            return e !== null && e.apply(this, arguments) || this
        }
        return t.prototype.hasStroke = function() {
            var r = this.style,
                n = r.stroke;
            return n != null && n !== "none" && r.lineWidth > 0
        }, t.prototype.hasFill = function() {
            var r = this.style,
                n = r.fill;
            return n != null && n !== "none"
        }, t.prototype.createStyle = function(r) {
            return Ra(n0, r)
        }, t.prototype.setBoundingRect = function(r) {
            this._rect = r
        }, t.prototype.getBoundingRect = function() {
            var r = this.style;
            if (!this._rect) {
                var n = r.text;
                n != null ? n += "" : n = "";
                var i = Hp(n, r.font, r.textAlign, r.textBaseline);
                if (i.x += r.x || 0, i.y += r.y || 0, this.hasStroke()) {
                    var a = r.lineWidth;
                    i.x -= a / 2, i.y -= a / 2, i.width += a, i.height += a
                }
                this._rect = i
            }
            return this._rect
        }, t.initDefaultProps = function() {
            var r = t.prototype;
            r.dirtyRectTolerance = 10
        }(), t
    }(fi);
fa.prototype.type = "tspan";
var i0 = dt({
        x: 0,
        y: 0
    }, Dr),
    a0 = {
        style: dt({
            x: !0,
            y: !0,
            width: !0,
            height: !0,
            sx: !0,
            sy: !0,
            sWidth: !0,
            sHeight: !0
        }, ka.style)
    };

function o0(e) {
    return !!(e && typeof e != "string" && e.width && e.height)
}
var xr = function(e) {
    W(t, e);

    function t() {
        return e !== null && e.apply(this, arguments) || this
    }
    return t.prototype.createStyle = function(r) {
        return Ra(i0, r)
    }, t.prototype._getSize = function(r) {
        var n = this.style,
            i = n[r];
        if (i != null) return i;
        var a = o0(n.image) ? n.image : this.__image;
        if (!a) return 0;
        var o = r === "width" ? "height" : "width",
            s = n[o];
        return s == null ? a[r] : a[r] / a[o] * s
    }, t.prototype.getWidth = function() {
        return this._getSize("width")
    }, t.prototype.getHeight = function() {
        return this._getSize("height")
    }, t.prototype.getAnimationStyleProps = function() {
        return a0
    }, t.prototype.getBoundingRect = function() {
        var r = this.style;
        return this._rect || (this._rect = new nt(r.x || 0, r.y || 0, this.getWidth(), this.getHeight())), this._rect
    }, t
}(fi);
xr.prototype.type = "image";

function s0(e, t) {
    var r = t.x,
        n = t.y,
        i = t.width,
        a = t.height,
        o = t.r,
        s, u, l, f;
    i < 0 && (r = r + i, i = -i), a < 0 && (n = n + a, a = -a), typeof o == "number" ? s = u = l = f = o : o instanceof Array ? o.length === 1 ? s = u = l = f = o[0] : o.length === 2 ? (s = l = o[0], u = f = o[1]) : o.length === 3 ? (s = o[0], u = f = o[1], l = o[2]) : (s = o[0], u = o[1], l = o[2], f = o[3]) : s = u = l = f = 0;
    var h;
    s + u > i && (h = s + u, s *= i / h, u *= i / h), l + f > i && (h = l + f, l *= i / h, f *= i / h), u + l > a && (h = u + l, u *= a / h, l *= a / h), s + f > a && (h = s + f, s *= a / h, f *= a / h), e.moveTo(r + s, n), e.lineTo(r + i - u, n), u !== 0 && e.arc(r + i - u, n + u, u, -Math.PI / 2, 0), e.lineTo(r + i, n + a - l), l !== 0 && e.arc(r + i - l, n + a - l, l, 0, Math.PI / 2), e.lineTo(r + f, n + a), f !== 0 && e.arc(r + f, n + a - f, f, Math.PI / 2, Math.PI), e.lineTo(r, n + s), s !== 0 && e.arc(r + s, n + s, s, Math.PI, Math.PI * 1.5)
}
var Qr = Math.round;

function vv(e, t, r) {
    if (t) {
        var n = t.x1,
            i = t.x2,
            a = t.y1,
            o = t.y2;
        e.x1 = n, e.x2 = i, e.y1 = a, e.y2 = o;
        var s = r && r.lineWidth;
        return s && (Qr(n * 2) === Qr(i * 2) && (e.x1 = e.x2 = _r(n, s, !0)), Qr(a * 2) === Qr(o * 2) && (e.y1 = e.y2 = _r(a, s, !0))), e
    }
}

function cv(e, t, r) {
    if (t) {
        var n = t.x,
            i = t.y,
            a = t.width,
            o = t.height;
        e.x = n, e.y = i, e.width = a, e.height = o;
        var s = r && r.lineWidth;
        return s && (e.x = _r(n, s, !0), e.y = _r(i, s, !0), e.width = Math.max(_r(n + a, s, !1) - e.x, a === 0 ? 0 : 1), e.height = Math.max(_r(i + o, s, !1) - e.y, o === 0 ? 0 : 1)), e
    }
}

function _r(e, t, r) {
    if (!t) return e;
    var n = Qr(e * 2);
    return (n + Qr(t)) % 2 === 0 ? n / 2 : (n + (r ? 1 : -1)) / 2
}
var u0 = function() {
        function e() {
            this.x = 0, this.y = 0, this.width = 0, this.height = 0
        }
        return e
    }(),
    l0 = {},
    we = function(e) {
        W(t, e);

        function t(r) {
            return e.call(this, r) || this
        }
        return t.prototype.getDefaultShape = function() {
            return new u0
        }, t.prototype.buildPath = function(r, n) {
            var i, a, o, s;
            if (this.subPixelOptimize) {
                var u = cv(l0, n, this.style);
                i = u.x, a = u.y, o = u.width, s = u.height, u.r = n.r, n = u
            } else i = n.x, a = n.y, o = n.width, s = n.height;
            n.r ? s0(r, n) : r.rect(i, a, o, s)
        }, t.prototype.isZeroArea = function() {
            return !this.shape.width || !this.shape.height
        }, t
    }(et);
we.prototype.type = "rect";
var Pl = {
        fill: "#000"
    },
    Al = 2,
    f0 = {
        style: dt({
            fill: !0,
            stroke: !0,
            fillOpacity: !0,
            strokeOpacity: !0,
            lineWidth: !0,
            fontSize: !0,
            lineHeight: !0,
            width: !0,
            height: !0,
            textShadowColor: !0,
            textShadowBlur: !0,
            textShadowOffsetX: !0,
            textShadowOffsetY: !0,
            backgroundColor: !0,
            padding: !0,
            borderColor: !0,
            borderWidth: !0,
            borderRadius: !0
        }, ka.style)
    },
    Rr = function(e) {
        W(t, e);

        function t(r) {
            var n = e.call(this) || this;
            return n.type = "text", n._children = [], n._defaultStyle = Pl, n.attr(r), n
        }
        return t.prototype.childrenRef = function() {
            return this._children
        }, t.prototype.update = function() {
            e.prototype.update.call(this), this.styleChanged() && this._updateSubTexts();
            for (var r = 0; r < this._children.length; r++) {
                var n = this._children[r];
                n.zlevel = this.zlevel, n.z = this.z, n.z2 = this.z2, n.culling = this.culling, n.cursor = this.cursor, n.invisible = this.invisible
            }
        }, t.prototype.updateTransform = function() {
            var r = this.innerTransformable;
            r ? (r.updateTransform(), r.transform && (this.transform = r.transform)) : e.prototype.updateTransform.call(this)
        }, t.prototype.getLocalTransform = function(r) {
            var n = this.innerTransformable;
            return n ? n.getLocalTransform(r) : e.prototype.getLocalTransform.call(this, r)
        }, t.prototype.getComputedTransform = function() {
            return this.__hostTarget && (this.__hostTarget.getComputedTransform(), this.__hostTarget.updateInnerText(!0)), e.prototype.getComputedTransform.call(this)
        }, t.prototype._updateSubTexts = function() {
            this._childCursor = 0, p0(this.style), this.style.rich ? this._updateRichTexts() : this._updatePlainTexts(), this._children.length = this._childCursor, this.styleUpdated()
        }, t.prototype.addSelfToZr = function(r) {
            e.prototype.addSelfToZr.call(this, r);
            for (var n = 0; n < this._children.length; n++) this._children[n].__zr = r
        }, t.prototype.removeSelfFromZr = function(r) {
            e.prototype.removeSelfFromZr.call(this, r);
            for (var n = 0; n < this._children.length; n++) this._children[n].__zr = null
        }, t.prototype.getBoundingRect = function() {
            if (this.styleChanged() && this._updateSubTexts(), !this._rect) {
                for (var r = new nt(0, 0, 0, 0), n = this._children, i = [], a = null, o = 0; o < n.length; o++) {
                    var s = n[o],
                        u = s.getBoundingRect(),
                        l = s.getLocalTransform(i);
                    l ? (r.copy(u), r.applyTransform(l), a = a || r.clone(), a.union(r)) : (a = a || u.clone(), a.union(u))
                }
                this._rect = a || r
            }
            return this._rect
        }, t.prototype.setDefaultTextStyle = function(r) {
            this._defaultStyle = r || Pl
        }, t.prototype.setTextContent = function(r) {}, t.prototype._mergeStyle = function(r, n) {
            if (!n) return r;
            var i = n.rich,
                a = r.rich || i && {};
            return I(r, n), i && a ? (this._mergeRich(a, i), r.rich = a) : a && (r.rich = a), r
        }, t.prototype._mergeRich = function(r, n) {
            for (var i = ht(n), a = 0; a < i.length; a++) {
                var o = i[a];
                r[o] = r[o] || {}, I(r[o], n[o])
            }
        }, t.prototype.getAnimationStyleProps = function() {
            return f0
        }, t.prototype._getOrCreateChild = function(r) {
            var n = this._children[this._childCursor];
            return (!n || !(n instanceof r)) && (n = new r), this._children[this._childCursor++] = n, n.__zr = this.__zr, n.parent = this, n
        }, t.prototype._updatePlainTexts = function() {
            var r = this.style,
                n = r.font || Cr,
                i = r.padding,
                a = kl(r),
                o = Eg(a, r),
                s = Ro(r),
                u = !!r.backgroundColor,
                l = o.outerHeight,
                f = o.outerWidth,
                h = o.contentWidth,
                c = o.lines,
                v = o.lineHeight,
                d = this._defaultStyle;
            this.isTruncated = !!o.isTruncated;
            var g = r.x || 0,
                p = r.y || 0,
                y = r.align || d.align || "left",
                m = r.verticalAlign || d.verticalAlign || "top",
                _ = g,
                S = Xr(p, o.contentHeight, m);
            if (s || i) {
                var T = On(g, f, y),
                    w = Xr(p, l, m);
                s && this._renderBackground(r, r, T, w, f, l)
            }
            S += v / 2, i && (_ = Ol(g, y, i), m === "top" ? S += i[0] : m === "bottom" && (S -= i[2]));
            for (var b = 0, M = !1, D = El("fill" in r ? r.fill : (M = !0, d.fill)), C = Il("stroke" in r ? r.stroke : !u && (!d.autoStroke || M) ? (b = Al, d.stroke) : null), A = r.textShadowBlur > 0, x = r.width != null && (r.overflow === "truncate" || r.overflow === "break" || r.overflow === "breakAll"), L = o.calculatedLineHeight, R = 0; R < c.length; R++) {
                var O = this._getOrCreateChild(fa),
                    E = O.createStyle();
                O.useStyle(E), E.text = c[R], E.x = _, E.y = S, E.textAlign = y, E.textBaseline = "middle", E.opacity = r.opacity, E.strokeFirst = !0, A && (E.shadowBlur = r.textShadowBlur || 0, E.shadowColor = r.textShadowColor || "transparent", E.shadowOffsetX = r.textShadowOffsetX || 0, E.shadowOffsetY = r.textShadowOffsetY || 0), E.stroke = C, E.fill = D, C && (E.lineWidth = r.lineWidth || b, E.lineDash = r.lineDash, E.lineDashOffset = r.lineDashOffset || 0), E.font = n, xl(E, r), S += v, x && O.setBoundingRect(new nt(On(E.x, h, E.textAlign), Xr(E.y, L, E.textBaseline), h, L))
            }
        }, t.prototype._updateRichTexts = function() {
            var r = this.style,
                n = kl(r),
                i = Fg(n, r),
                a = i.width,
                o = i.outerWidth,
                s = i.outerHeight,
                u = r.padding,
                l = r.x || 0,
                f = r.y || 0,
                h = this._defaultStyle,
                c = r.align || h.align,
                v = r.verticalAlign || h.verticalAlign;
            this.isTruncated = !!i.isTruncated;
            var d = On(l, o, c),
                g = Xr(f, s, v),
                p = d,
                y = g;
            u && (p += u[3], y += u[0]);
            var m = p + a;
            Ro(r) && this._renderBackground(r, r, d, g, o, s);
            for (var _ = !!r.backgroundColor, S = 0; S < i.lines.length; S++) {
                for (var T = i.lines[S], w = T.tokens, b = w.length, M = T.lineHeight, D = T.width, C = 0, A = p, x = m, L = b - 1, R = void 0; C < b && (R = w[C], !R.align || R.align === "left");) this._placeToken(R, r, M, y, A, "left", _), D -= R.width, A += R.width, C++;
                for (; L >= 0 && (R = w[L], R.align === "right");) this._placeToken(R, r, M, y, x, "right", _), D -= R.width, x -= R.width, L--;
                for (A += (a - (A - p) - (m - x) - D) / 2; C <= L;) R = w[C], this._placeToken(R, r, M, y, A + R.width / 2, "center", _), A += R.width, C++;
                y += M
            }
        }, t.prototype._placeToken = function(r, n, i, a, o, s, u) {
            var l = n.rich[r.styleName] || {};
            l.text = r.text;
            var f = r.verticalAlign,
                h = a + i / 2;
            f === "top" ? h = a + r.height / 2 : f === "bottom" && (h = a + i - r.height / 2);
            var c = !r.isLineHolder && Ro(l);
            c && this._renderBackground(l, n, s === "right" ? o - r.width : s === "center" ? o - r.width / 2 : o, h - r.height / 2, r.width, r.height);
            var v = !!l.backgroundColor,
                d = r.textPadding;
            d && (o = Ol(o, s, d), h -= r.height / 2 - d[0] - r.innerHeight / 2);
            var g = this._getOrCreateChild(fa),
                p = g.createStyle();
            g.useStyle(p);
            var y = this._defaultStyle,
                m = !1,
                _ = 0,
                S = El("fill" in l ? l.fill : "fill" in n ? n.fill : (m = !0, y.fill)),
                T = Il("stroke" in l ? l.stroke : "stroke" in n ? n.stroke : !v && !u && (!y.autoStroke || m) ? (_ = Al, y.stroke) : null),
                w = l.textShadowBlur > 0 || n.textShadowBlur > 0;
            p.text = r.text, p.x = o, p.y = h, w && (p.shadowBlur = l.textShadowBlur || n.textShadowBlur || 0, p.shadowColor = l.textShadowColor || n.textShadowColor || "transparent", p.shadowOffsetX = l.textShadowOffsetX || n.textShadowOffsetX || 0, p.shadowOffsetY = l.textShadowOffsetY || n.textShadowOffsetY || 0), p.textAlign = s, p.textBaseline = "middle", p.font = r.font || Cr, p.opacity = Bn(l.opacity, n.opacity, 1), xl(p, l), T && (p.lineWidth = Bn(l.lineWidth, n.lineWidth, _), p.lineDash = q(l.lineDash, n.lineDash), p.lineDashOffset = n.lineDashOffset || 0, p.stroke = T), S && (p.fill = S);
            var b = r.contentWidth,
                M = r.contentHeight;
            g.setBoundingRect(new nt(On(p.x, b, p.textAlign), Xr(p.y, M, p.textBaseline), b, M))
        }, t.prototype._renderBackground = function(r, n, i, a, o, s) {
            var u = r.backgroundColor,
                l = r.borderWidth,
                f = r.borderColor,
                h = u && u.image,
                c = u && !h,
                v = r.borderRadius,
                d = this,
                g, p;
            if (c || r.lineHeight || l && f) {
                g = this._getOrCreateChild(we), g.useStyle(g.createStyle()), g.style.fill = null;
                var y = g.shape;
                y.x = i, y.y = a, y.width = o, y.height = s, y.r = v, g.dirtyShape()
            }
            if (c) {
                var m = g.style;
                m.fill = u || null, m.fillOpacity = q(r.fillOpacity, 1)
            } else if (h) {
                p = this._getOrCreateChild(xr), p.onload = function() {
                    d.dirtyStyle()
                };
                var _ = p.style;
                _.image = u.image, _.x = i, _.y = a, _.width = o, _.height = s
            }
            if (l && f) {
                var m = g.style;
                m.lineWidth = l, m.stroke = f, m.strokeOpacity = q(r.strokeOpacity, 1), m.lineDash = r.borderDash, m.lineDashOffset = r.borderDashOffset || 0, g.strokeContainThreshold = 0, g.hasFill() && g.hasStroke() && (m.strokeFirst = !0, m.lineWidth *= 2)
            }
            var S = (g || p).style;
            S.shadowBlur = r.shadowBlur || 0, S.shadowColor = r.shadowColor || "transparent", S.shadowOffsetX = r.shadowOffsetX || 0, S.shadowOffsetY = r.shadowOffsetY || 0, S.opacity = Bn(r.opacity, n.opacity, 1)
        }, t.makeFont = function(r) {
            var n = "";
            return d0(r) && (n = [r.fontStyle, r.fontWeight, c0(r.fontSize), r.fontFamily || "sans-serif"].join(" ")), n && xe(n) || r.textFont || r.font
        }, t
    }(fi),
    h0 = {
        left: !0,
        right: 1,
        center: 1
    },
    v0 = {
        top: 1,
        bottom: 1,
        middle: 1
    },
    Rl = ["fontStyle", "fontWeight", "fontSize", "fontFamily"];

function c0(e) {
    return typeof e == "string" && (e.indexOf("px") !== -1 || e.indexOf("rem") !== -1 || e.indexOf("em") !== -1) ? e : isNaN(+e) ? Ks + "px" : e + "px"
}

function xl(e, t) {
    for (var r = 0; r < Rl.length; r++) {
        var n = Rl[r],
            i = t[n];
        i != null && (e[n] = i)
    }
}

function d0(e) {
    return e.fontSize != null || e.fontFamily || e.fontWeight
}

function p0(e) {
    return Ll(e), P(e.rich, Ll), e
}

function Ll(e) {
    if (e) {
        e.font = Rr.makeFont(e);
        var t = e.align;
        t === "middle" && (t = "center"), e.align = t == null || h0[t] ? t : "left";
        var r = e.verticalAlign;
        r === "center" && (r = "middle"), e.verticalAlign = r == null || v0[r] ? r : "top";
        var n = e.padding;
        n && (e.padding = Sh(e.padding))
    }
}

function Il(e, t) {
    return e == null || t <= 0 || e === "transparent" || e === "none" ? null : e.image || e.colorStops ? "#000" : e
}

function El(e) {
    return e == null || e === "none" ? null : e.image || e.colorStops ? "#000" : e
}

function Ol(e, t, r) {
    return t === "right" ? e - r[1] : t === "center" ? e + r[3] / 2 - r[1] / 2 : e + r[3]
}

function kl(e) {
    var t = e.text;
    return t != null && (t += ""), t
}

function Ro(e) {
    return !!(e.backgroundColor || e.lineHeight || e.borderWidth && e.borderColor)
}
var Nt = Pt(),
    g0 = function(e, t, r, n) {
        if (n) {
            var i = Nt(n);
            i.dataIndex = r, i.dataType = t, i.seriesIndex = e, i.ssrType = "chart", n.type === "group" && n.traverse(function(a) {
                var o = Nt(a);
                o.seriesIndex = e, o.dataIndex = r, o.dataType = t, o.ssrType = "chart"
            })
        }
    },
    Fl = 1,
    Nl = {},
    dv = Pt(),
    lu = Pt(),
    fu = 0,
    Fa = 1,
    Na = 2,
    be = ["emphasis", "blur", "select"],
    ha = ["normal", "emphasis", "blur", "select"],
    y0 = 10,
    m0 = 9,
    Mr = "highlight",
    ji = "downplay",
    Vn = "select",
    ta = "unselect",
    Un = "toggleSelect";

function Br(e) {
    return e != null && e !== "none"
}

function Ba(e, t, r) {
    e.onHoverStateChange && (e.hoverState || 0) !== r && e.onHoverStateChange(t), e.hoverState = r
}

function pv(e) {
    Ba(e, "emphasis", Na)
}

function gv(e) {
    e.hoverState === Na && Ba(e, "normal", fu)
}

function hu(e) {
    Ba(e, "blur", Fa)
}

function yv(e) {
    e.hoverState === Fa && Ba(e, "normal", fu)
}

function _0(e) {
    e.selected = !0
}

function S0(e) {
    e.selected = !1
}

function Bl(e, t, r) {
    t(e, r)
}

function Oe(e, t, r) {
    Bl(e, t, r), e.isGroup && e.traverse(function(n) {
        Bl(n, t, r)
    })
}

function Ow(e, t) {
    switch (t) {
        case "emphasis":
            e.hoverState = Na;
            break;
        case "normal":
            e.hoverState = fu;
            break;
        case "blur":
            e.hoverState = Fa;
            break;
        case "select":
            e.selected = !0
    }
}

function w0(e, t, r, n) {
    for (var i = e.style, a = {}, o = 0; o < t.length; o++) {
        var s = t[o],
            u = i[s];
        a[s] = u ? ? (n && n[s])
    }
    for (var o = 0; o < e.animators.length; o++) {
        var l = e.animators[o];
        l.__fromStateTransition && l.__fromStateTransition.indexOf(r) < 0 && l.targetName === "style" && l.saveTo(a, t)
    }
    return a
}

function T0(e, t, r, n) {
    var i = r && ft(r, "select") >= 0,
        a = !1;
    if (e instanceof et) {
        var o = dv(e),
            s = i && o.selectFill || o.normalFill,
            u = i && o.selectStroke || o.normalStroke;
        if (Br(s) || Br(u)) {
            n = n || {};
            var l = n.style || {};
            l.fill === "inherit" ? (a = !0, n = I({}, n), l = I({}, l), l.fill = s) : !Br(l.fill) && Br(s) ? (a = !0, n = I({}, n), l = I({}, l), l.fill = il(s)) : !Br(l.stroke) && Br(u) && (a || (n = I({}, n), l = I({}, l)), l.stroke = il(u)), n.style = l
        }
    }
    if (n && n.z2 == null) {
        a || (n = I({}, n));
        var f = e.z2EmphasisLift;
        n.z2 = e.z2 + (f ? ? y0)
    }
    return n
}

function b0(e, t, r) {
    if (r && r.z2 == null) {
        r = I({}, r);
        var n = e.z2SelectLift;
        r.z2 = e.z2 + (n ? ? m0)
    }
    return r
}

function D0(e, t, r) {
    var n = ft(e.currentStates, t) >= 0,
        i = e.style.opacity,
        a = n ? null : w0(e, ["opacity"], t, {
            opacity: 1
        });
    r = r || {};
    var o = r.style || {};
    return o.opacity == null && (r = I({}, r), o = I({
        opacity: n ? i : a.opacity * .1
    }, o), r.style = o), r
}

function xo(e, t) {
    var r = this.states[e];
    if (this.style) {
        if (e === "emphasis") return T0(this, e, t, r);
        if (e === "blur") return D0(this, e, r);
        if (e === "select") return b0(this, e, r)
    }
    return r
}

function M0(e) {
    e.stateProxy = xo;
    var t = e.getTextContent(),
        r = e.getTextGuideLine();
    t && (t.stateProxy = xo), r && (r.stateProxy = xo)
}

function zl(e, t) {
    !wv(e, t) && !e.__highByOuter && Oe(e, pv)
}

function Hl(e, t) {
    !wv(e, t) && !e.__highByOuter && Oe(e, gv)
}

function Ps(e, t) {
    e.__highByOuter |= 1 << (t || 0), Oe(e, pv)
}

function As(e, t) {
    !(e.__highByOuter &= ~(1 << (t || 0))) && Oe(e, gv)
}

function C0(e) {
    Oe(e, hu)
}

function mv(e) {
    Oe(e, yv)
}

function _v(e) {
    Oe(e, _0)
}

function Sv(e) {
    Oe(e, S0)
}

function wv(e, t) {
    return e.__highDownSilentOnTouch && t.zrByTouch
}

function Tv(e) {
    var t = e.getModel(),
        r = [],
        n = [];
    t.eachComponent(function(i, a) {
        var o = lu(a),
            s = i === "series",
            u = s ? e.getViewOfSeriesModel(a) : e.getViewOfComponentModel(a);
        !s && n.push(u), o.isBlured && (u.group.traverse(function(l) {
            yv(l)
        }), s && r.push(a)), o.isBlured = !1
    }), P(n, function(i) {
        i && i.toggleBlurSeries && i.toggleBlurSeries(r, !1, t)
    })
}

function Rs(e, t, r, n) {
    var i = n.getModel();
    r = r || "coordinateSystem";

    function a(l, f) {
        for (var h = 0; h < f.length; h++) {
            var c = l.getItemGraphicEl(f[h]);
            c && mv(c)
        }
    }
    if (e != null && !(!t || t === "none")) {
        var o = i.getSeriesByIndex(e),
            s = o.coordinateSystem;
        s && s.master && (s = s.master);
        var u = [];
        i.eachSeries(function(l) {
            var f = o === l,
                h = l.coordinateSystem;
            h && h.master && (h = h.master);
            var c = h && s ? h === s : f;
            if (!(r === "series" && !f || r === "coordinateSystem" && !c || t === "series" && f)) {
                var v = n.getViewOfSeriesModel(l);
                if (v.group.traverse(function(p) {
                        p.__highByOuter && f && t === "self" || hu(p)
                    }), Bt(t)) a(l.getData(), t);
                else if (H(t))
                    for (var d = ht(t), g = 0; g < d.length; g++) a(l.getData(d[g]), t[d[g]]);
                u.push(l), lu(l).isBlured = !0
            }
        }), i.eachComponent(function(l, f) {
            if (l !== "series") {
                var h = n.getViewOfComponentModel(f);
                h && h.toggleBlurSeries && h.toggleBlurSeries(u, !0, i)
            }
        })
    }
}

function xs(e, t, r) {
    if (!(e == null || t == null)) {
        var n = r.getModel().getComponent(e, t);
        if (n) {
            lu(n).isBlured = !0;
            var i = r.getViewOfComponentModel(n);
            !i || !i.focusBlurEnabled || i.group.traverse(function(a) {
                hu(a)
            })
        }
    }
}

function P0(e, t, r) {
    var n = e.seriesIndex,
        i = e.getData(t.dataType);
    if (i) {
        var a = Ia(i, t);
        a = (F(a) ? a[0] : a) || 0;
        var o = i.getItemGraphicEl(a);
        if (!o)
            for (var s = i.count(), u = 0; !o && u < s;) o = i.getItemGraphicEl(u++);
        if (o) {
            var l = Nt(o);
            Rs(n, l.focus, l.blurScope, r)
        } else {
            var f = e.get(["emphasis", "focus"]),
                h = e.get(["emphasis", "blurScope"]);
            f != null && Rs(n, f, h, r)
        }
    }
}

function vu(e, t, r, n) {
    var i = {
        focusSelf: !1,
        dispatchers: null
    };
    if (e == null || e === "series" || t == null || r == null) return i;
    var a = n.getModel().getComponent(e, t);
    if (!a) return i;
    var o = n.getViewOfComponentModel(a);
    if (!o || !o.findHighDownDispatchers) return i;
    for (var s = o.findHighDownDispatchers(r), u, l = 0; l < s.length; l++)
        if (Nt(s[l]).focus === "self") {
            u = !0;
            break
        }
    return {
        focusSelf: u,
        dispatchers: s
    }
}

function A0(e, t, r) {
    var n = Nt(e),
        i = vu(n.componentMainType, n.componentIndex, n.componentHighDownName, r),
        a = i.dispatchers,
        o = i.focusSelf;
    a ? (o && xs(n.componentMainType, n.componentIndex, r), P(a, function(s) {
        return zl(s, t)
    })) : (Rs(n.seriesIndex, n.focus, n.blurScope, r), n.focus === "self" && xs(n.componentMainType, n.componentIndex, r), zl(e, t))
}

function R0(e, t, r) {
    Tv(r);
    var n = Nt(e),
        i = vu(n.componentMainType, n.componentIndex, n.componentHighDownName, r).dispatchers;
    i ? P(i, function(a) {
        return Hl(a, t)
    }) : Hl(e, t)
}

function x0(e, t, r) {
    if (Is(t)) {
        var n = t.dataType,
            i = e.getData(n),
            a = Ia(i, t);
        F(a) || (a = [a]), e[t.type === Un ? "toggleSelect" : t.type === Vn ? "select" : "unselect"](a, n)
    }
}

function Gl(e) {
    var t = e.getAllData();
    P(t, function(r) {
        var n = r.data,
            i = r.type;
        n.eachItemGraphicEl(function(a, o) {
            e.isSelected(o, i) ? _v(a) : Sv(a)
        })
    })
}

function L0(e) {
    var t = [];
    return e.eachSeries(function(r) {
        var n = r.getAllData();
        P(n, function(i) {
            i.data;
            var a = i.type,
                o = r.getSelectedDataIndices();
            if (o.length > 0) {
                var s = {
                    dataIndex: o,
                    seriesIndex: r.seriesIndex
                };
                a != null && (s.dataType = a), t.push(s)
            }
        })
    }), t
}

function I0(e, t, r) {
    bv(e, !0), Oe(e, M0), k0(e, t, r)
}

function E0(e) {
    bv(e, !1)
}

function O0(e, t, r, n) {
    n ? E0(e) : I0(e, t, r)
}

function k0(e, t, r) {
    var n = Nt(e);
    t != null ? (n.focus = t, n.blurScope = r) : n.focus && (n.focus = null)
}
var Vl = ["emphasis", "blur", "select"],
    F0 = {
        itemStyle: "getItemStyle",
        lineStyle: "getLineStyle",
        areaStyle: "getAreaStyle"
    };

function N0(e, t, r, n) {
    r = r || "itemStyle";
    for (var i = 0; i < Vl.length; i++) {
        var a = Vl[i],
            o = t.getModel([a, r]),
            s = e.ensureState(a);
        s.style = n ? n(o) : o[F0[r]]()
    }
}

function bv(e, t) {
    var r = t === !1,
        n = e;
    e.highDownSilentOnTouch && (n.__highDownSilentOnTouch = e.highDownSilentOnTouch), (!r || n.__highDownDispatcher) && (n.__highByOuter = n.__highByOuter || 0, n.__highDownDispatcher = !r)
}

function Ls(e) {
    return !!(e && e.__highDownDispatcher)
}

function kw(e, t, r) {
    var n = Nt(e);
    n.componentMainType = t.mainType, n.componentIndex = t.componentIndex, n.componentHighDownName = r
}

function B0(e) {
    var t = Nl[e];
    return t == null && Fl <= 32 && (t = Nl[e] = Fl++), t
}

function Is(e) {
    var t = e.type;
    return t === Vn || t === ta || t === Un
}

function Ul(e) {
    var t = e.type;
    return t === Mr || t === ji
}

function z0(e) {
    var t = dv(e);
    t.normalFill = e.style.fill, t.normalStroke = e.style.stroke;
    var r = e.states.select || {};
    t.selectFill = r.style && r.style.fill || null, t.selectStroke = r.style && r.style.stroke || null
}
var zr = Ar.CMD,
    H0 = [
        [],
        [],
        []
    ],
    Yl = Math.sqrt,
    G0 = Math.atan2;

function Dv(e, t) {
    if (t) {
        var r = e.data,
            n = e.len(),
            i, a, o, s, u, l, f = zr.M,
            h = zr.C,
            c = zr.L,
            v = zr.R,
            d = zr.A,
            g = zr.Q;
        for (o = 0, s = 0; o < n;) {
            switch (i = r[o++], s = o, a = 0, i) {
                case f:
                    a = 1;
                    break;
                case c:
                    a = 1;
                    break;
                case h:
                    a = 3;
                    break;
                case g:
                    a = 2;
                    break;
                case d:
                    var p = t[4],
                        y = t[5],
                        m = Yl(t[0] * t[0] + t[1] * t[1]),
                        _ = Yl(t[2] * t[2] + t[3] * t[3]),
                        S = G0(-t[1] / _, t[0] / m);
                    r[o] *= m, r[o++] += p, r[o] *= _, r[o++] += y, r[o++] *= m, r[o++] *= _, r[o++] += S, r[o++] += S, o += 2, s = o;
                    break;
                case v:
                    l[0] = r[o++], l[1] = r[o++], jr(l, l, t), r[s++] = l[0], r[s++] = l[1], l[0] += r[o++], l[1] += r[o++], jr(l, l, t), r[s++] = l[0], r[s++] = l[1]
            }
            for (u = 0; u < a; u++) {
                var T = H0[u];
                T[0] = r[o++], T[1] = r[o++], jr(T, T, t), r[s++] = T[0], r[s++] = T[1]
            }
        }
        e.increaseVersion()
    }
}
var Lo = Math.sqrt,
    Ci = Math.sin,
    Pi = Math.cos,
    Sn = Math.PI;

function Wl(e) {
    return Math.sqrt(e[0] * e[0] + e[1] * e[1])
}

function Es(e, t) {
    return (e[0] * t[0] + e[1] * t[1]) / (Wl(e) * Wl(t))
}

function Xl(e, t) {
    return (e[0] * t[1] < e[1] * t[0] ? -1 : 1) * Math.acos(Es(e, t))
}

function ql(e, t, r, n, i, a, o, s, u, l, f) {
    var h = u * (Sn / 180),
        c = Pi(h) * (e - r) / 2 + Ci(h) * (t - n) / 2,
        v = -1 * Ci(h) * (e - r) / 2 + Pi(h) * (t - n) / 2,
        d = c * c / (o * o) + v * v / (s * s);
    d > 1 && (o *= Lo(d), s *= Lo(d));
    var g = (i === a ? -1 : 1) * Lo((o * o * (s * s) - o * o * (v * v) - s * s * (c * c)) / (o * o * (v * v) + s * s * (c * c))) || 0,
        p = g * o * v / s,
        y = g * -s * c / o,
        m = (e + r) / 2 + Pi(h) * p - Ci(h) * y,
        _ = (t + n) / 2 + Ci(h) * p + Pi(h) * y,
        S = Xl([1, 0], [(c - p) / o, (v - y) / s]),
        T = [(c - p) / o, (v - y) / s],
        w = [(-1 * c - p) / o, (-1 * v - y) / s],
        b = Xl(T, w);
    if (Es(T, w) <= -1 && (b = Sn), Es(T, w) >= 1 && (b = 0), b < 0) {
        var M = Math.round(b / Sn * 1e6) / 1e6;
        b = Sn * 2 + M % 2 * Sn
    }
    f.addData(l, m, _, o, s, S, b, h, a)
}
var V0 = /([mlvhzcqtsa])([^mlvhzcqtsa]*)/ig,
    U0 = /-?([0-9]*\.)?[0-9]+([eE]-?[0-9]+)?/g;

function Y0(e) {
    var t = new Ar;
    if (!e) return t;
    var r = 0,
        n = 0,
        i = r,
        a = n,
        o, s = Ar.CMD,
        u = e.match(V0);
    if (!u) return t;
    for (var l = 0; l < u.length; l++) {
        for (var f = u[l], h = f.charAt(0), c = void 0, v = f.match(U0) || [], d = v.length, g = 0; g < d; g++) v[g] = parseFloat(v[g]);
        for (var p = 0; p < d;) {
            var y = void 0,
                m = void 0,
                _ = void 0,
                S = void 0,
                T = void 0,
                w = void 0,
                b = void 0,
                M = r,
                D = n,
                C = void 0,
                A = void 0;
            switch (h) {
                case "l":
                    r += v[p++], n += v[p++], c = s.L, t.addData(c, r, n);
                    break;
                case "L":
                    r = v[p++], n = v[p++], c = s.L, t.addData(c, r, n);
                    break;
                case "m":
                    r += v[p++], n += v[p++], c = s.M, t.addData(c, r, n), i = r, a = n, h = "l";
                    break;
                case "M":
                    r = v[p++], n = v[p++], c = s.M, t.addData(c, r, n), i = r, a = n, h = "L";
                    break;
                case "h":
                    r += v[p++], c = s.L, t.addData(c, r, n);
                    break;
                case "H":
                    r = v[p++], c = s.L, t.addData(c, r, n);
                    break;
                case "v":
                    n += v[p++], c = s.L, t.addData(c, r, n);
                    break;
                case "V":
                    n = v[p++], c = s.L, t.addData(c, r, n);
                    break;
                case "C":
                    c = s.C, t.addData(c, v[p++], v[p++], v[p++], v[p++], v[p++], v[p++]), r = v[p - 2], n = v[p - 1];
                    break;
                case "c":
                    c = s.C, t.addData(c, v[p++] + r, v[p++] + n, v[p++] + r, v[p++] + n, v[p++] + r, v[p++] + n), r += v[p - 2], n += v[p - 1];
                    break;
                case "S":
                    y = r, m = n, C = t.len(), A = t.data, o === s.C && (y += r - A[C - 4], m += n - A[C - 3]), c = s.C, M = v[p++], D = v[p++], r = v[p++], n = v[p++], t.addData(c, y, m, M, D, r, n);
                    break;
                case "s":
                    y = r, m = n, C = t.len(), A = t.data, o === s.C && (y += r - A[C - 4], m += n - A[C - 3]), c = s.C, M = r + v[p++], D = n + v[p++], r += v[p++], n += v[p++], t.addData(c, y, m, M, D, r, n);
                    break;
                case "Q":
                    M = v[p++], D = v[p++], r = v[p++], n = v[p++], c = s.Q, t.addData(c, M, D, r, n);
                    break;
                case "q":
                    M = v[p++] + r, D = v[p++] + n, r += v[p++], n += v[p++], c = s.Q, t.addData(c, M, D, r, n);
                    break;
                case "T":
                    y = r, m = n, C = t.len(), A = t.data, o === s.Q && (y += r - A[C - 4], m += n - A[C - 3]), r = v[p++], n = v[p++], c = s.Q, t.addData(c, y, m, r, n);
                    break;
                case "t":
                    y = r, m = n, C = t.len(), A = t.data, o === s.Q && (y += r - A[C - 4], m += n - A[C - 3]), r += v[p++], n += v[p++], c = s.Q, t.addData(c, y, m, r, n);
                    break;
                case "A":
                    _ = v[p++], S = v[p++], T = v[p++], w = v[p++], b = v[p++], M = r, D = n, r = v[p++], n = v[p++], c = s.A, ql(M, D, r, n, w, b, _, S, T, c, t);
                    break;
                case "a":
                    _ = v[p++], S = v[p++], T = v[p++], w = v[p++], b = v[p++], M = r, D = n, r += v[p++], n += v[p++], c = s.A, ql(M, D, r, n, w, b, _, S, T, c, t);
                    break
            }
        }(h === "z" || h === "Z") && (c = s.Z, t.addData(c), r = i, n = a), o = c
    }
    return t.toStatic(), t
}
var Mv = function(e) {
    W(t, e);

    function t() {
        return e !== null && e.apply(this, arguments) || this
    }
    return t.prototype.applyTransform = function(r) {}, t
}(et);

function Cv(e) {
    return e.setData != null
}

function Pv(e, t) {
    var r = Y0(e),
        n = I({}, t);
    return n.buildPath = function(i) {
        if (Cv(i)) {
            i.setData(r.data);
            var a = i.getContext();
            a && i.rebuildPath(a, 1)
        } else {
            var a = i;
            r.rebuildPath(a, 1)
        }
    }, n.applyTransform = function(i) {
        Dv(r, i), this.dirtyShape()
    }, n
}

function W0(e, t) {
    return new Mv(Pv(e, t))
}

function X0(e, t) {
    var r = Pv(e, t),
        n = function(i) {
            W(a, i);

            function a(o) {
                var s = i.call(this, o) || this;
                return s.applyTransform = r.applyTransform, s.buildPath = r.buildPath, s
            }
            return a
        }(Mv);
    return n
}

function q0(e, t) {
    for (var r = [], n = e.length, i = 0; i < n; i++) {
        var a = e[i];
        r.push(a.getUpdatedPathProxy(!0))
    }
    var o = new et(t);
    return o.createPathProxy(), o.buildPath = function(s) {
        if (Cv(s)) {
            s.appendPath(r);
            var u = s.getContext();
            u && s.rebuildPath(u, 1)
        }
    }, o
}

function Fw(e, t) {
    t = t || {};
    var r = new et;
    return e.shape && r.setShape(e.shape), r.setStyle(e.style), t.bakeTransform ? Dv(r.path, e.getComputedTransform()) : t.toLocal ? r.setLocalTransform(e.getComputedTransform()) : r.copyTransform(e), r.buildPath = e.buildPath, r.applyTransform = r.applyTransform, r.z = e.z, r.z2 = e.z2, r.zlevel = e.zlevel, r
}
var $0 = function() {
        function e() {
            this.cx = 0, this.cy = 0, this.r = 0
        }
        return e
    }(),
    za = function(e) {
        W(t, e);

        function t(r) {
            return e.call(this, r) || this
        }
        return t.prototype.getDefaultShape = function() {
            return new $0
        }, t.prototype.buildPath = function(r, n) {
            r.moveTo(n.cx + n.r, n.cy), r.arc(n.cx, n.cy, n.r, 0, Math.PI * 2)
        }, t
    }(et);
za.prototype.type = "circle";
var Z0 = function() {
        function e() {
            this.cx = 0, this.cy = 0, this.rx = 0, this.ry = 0
        }
        return e
    }(),
    cu = function(e) {
        W(t, e);

        function t(r) {
            return e.call(this, r) || this
        }
        return t.prototype.getDefaultShape = function() {
            return new Z0
        }, t.prototype.buildPath = function(r, n) {
            var i = .5522848,
                a = n.cx,
                o = n.cy,
                s = n.rx,
                u = n.ry,
                l = s * i,
                f = u * i;
            r.moveTo(a - s, o), r.bezierCurveTo(a - s, o - f, a - l, o - u, a, o - u), r.bezierCurveTo(a + l, o - u, a + s, o - f, a + s, o), r.bezierCurveTo(a + s, o + f, a + l, o + u, a, o + u), r.bezierCurveTo(a - l, o + u, a - s, o + f, a - s, o), r.closePath()
        }, t
    }(et);
cu.prototype.type = "ellipse";
var Av = Math.PI,
    Io = Av * 2,
    vr = Math.sin,
    Hr = Math.cos,
    K0 = Math.acos,
    wt = Math.atan2,
    $l = Math.abs,
    Yn = Math.sqrt,
    kn = Math.max,
    ge = Math.min,
    jt = 1e-4;

function Q0(e, t, r, n, i, a, o, s) {
    var u = r - e,
        l = n - t,
        f = o - i,
        h = s - a,
        c = h * u - f * l;
    if (!(c * c < jt)) return c = (f * (t - a) - h * (e - i)) / c, [e + c * u, t + c * l]
}

function Ai(e, t, r, n, i, a, o) {
    var s = e - r,
        u = t - n,
        l = (o ? a : -a) / Yn(s * s + u * u),
        f = l * u,
        h = -l * s,
        c = e + f,
        v = t + h,
        d = r + f,
        g = n + h,
        p = (c + d) / 2,
        y = (v + g) / 2,
        m = d - c,
        _ = g - v,
        S = m * m + _ * _,
        T = i - a,
        w = c * g - d * v,
        b = (_ < 0 ? -1 : 1) * Yn(kn(0, T * T * S - w * w)),
        M = (w * _ - m * b) / S,
        D = (-w * m - _ * b) / S,
        C = (w * _ + m * b) / S,
        A = (-w * m + _ * b) / S,
        x = M - p,
        L = D - y,
        R = C - p,
        O = A - y;
    return x * x + L * L > R * R + O * O && (M = C, D = A), {
        cx: M,
        cy: D,
        x0: -f,
        y0: -h,
        x1: M * (i / T - 1),
        y1: D * (i / T - 1)
    }
}

function J0(e) {
    var t;
    if (F(e)) {
        var r = e.length;
        if (!r) return e;
        r === 1 ? t = [e[0], e[0], 0, 0] : r === 2 ? t = [e[0], e[0], e[1], e[1]] : r === 3 ? t = e.concat(e[2]) : t = e
    } else t = [e, e, e, e];
    return t
}

function j0(e, t) {
    var r, n = kn(t.r, 0),
        i = kn(t.r0 || 0, 0),
        a = n > 0,
        o = i > 0;
    if (!(!a && !o)) {
        if (a || (n = i, i = 0), i > n) {
            var s = n;
            n = i, i = s
        }
        var u = t.startAngle,
            l = t.endAngle;
        if (!(isNaN(u) || isNaN(l))) {
            var f = t.cx,
                h = t.cy,
                c = !!t.clockwise,
                v = $l(l - u),
                d = v > Io && v % Io;
            if (d > jt && (v = d), !(n > jt)) e.moveTo(f, h);
            else if (v > Io - jt) e.moveTo(f + n * Hr(u), h + n * vr(u)), e.arc(f, h, n, u, l, !c), i > jt && (e.moveTo(f + i * Hr(l), h + i * vr(l)), e.arc(f, h, i, l, u, c));
            else {
                var g = void 0,
                    p = void 0,
                    y = void 0,
                    m = void 0,
                    _ = void 0,
                    S = void 0,
                    T = void 0,
                    w = void 0,
                    b = void 0,
                    M = void 0,
                    D = void 0,
                    C = void 0,
                    A = void 0,
                    x = void 0,
                    L = void 0,
                    R = void 0,
                    O = n * Hr(u),
                    E = n * vr(u),
                    G = i * Hr(l),
                    V = i * vr(l),
                    k = v > jt;
                if (k) {
                    var U = t.cornerRadius;
                    U && (r = J0(U), g = r[0], p = r[1], y = r[2], m = r[3]);
                    var $ = $l(n - i) / 2;
                    if (_ = ge($, y), S = ge($, m), T = ge($, g), w = ge($, p), D = b = kn(_, S), C = M = kn(T, w), (b > jt || M > jt) && (A = n * Hr(l), x = n * vr(l), L = i * Hr(u), R = i * vr(u), v < Av)) {
                        var z = Q0(O, E, L, R, A, x, G, V);
                        if (z) {
                            var vt = O - z[0],
                                pt = E - z[1],
                                Gt = A - z[0],
                                he = x - z[1],
                                Wt = 1 / vr(K0((vt * Gt + pt * he) / (Yn(vt * vt + pt * pt) * Yn(Gt * Gt + he * he))) / 2),
                                Vt = Yn(z[0] * z[0] + z[1] * z[1]);
                            D = ge(b, (n - Vt) / (Wt + 1)), C = ge(M, (i - Vt) / (Wt - 1))
                        }
                    }
                }
                if (!k) e.moveTo(f + O, h + E);
                else if (D > jt) {
                    var yt = ge(y, D),
                        st = ge(m, D),
                        N = Ai(L, R, O, E, n, yt, c),
                        Y = Ai(A, x, G, V, n, st, c);
                    e.moveTo(f + N.cx + N.x0, h + N.cy + N.y0), D < b && yt === st ? e.arc(f + N.cx, h + N.cy, D, wt(N.y0, N.x0), wt(Y.y0, Y.x0), !c) : (yt > 0 && e.arc(f + N.cx, h + N.cy, yt, wt(N.y0, N.x0), wt(N.y1, N.x1), !c), e.arc(f, h, n, wt(N.cy + N.y1, N.cx + N.x1), wt(Y.cy + Y.y1, Y.cx + Y.x1), !c), st > 0 && e.arc(f + Y.cx, h + Y.cy, st, wt(Y.y1, Y.x1), wt(Y.y0, Y.x0), !c))
                } else e.moveTo(f + O, h + E), e.arc(f, h, n, u, l, !c);
                if (!(i > jt) || !k) e.lineTo(f + G, h + V);
                else if (C > jt) {
                    var yt = ge(g, C),
                        st = ge(p, C),
                        N = Ai(G, V, A, x, i, -st, c),
                        Y = Ai(O, E, L, R, i, -yt, c);
                    e.lineTo(f + N.cx + N.x0, h + N.cy + N.y0), C < M && yt === st ? e.arc(f + N.cx, h + N.cy, C, wt(N.y0, N.x0), wt(Y.y0, Y.x0), !c) : (st > 0 && e.arc(f + N.cx, h + N.cy, st, wt(N.y0, N.x0), wt(N.y1, N.x1), !c), e.arc(f, h, i, wt(N.cy + N.y1, N.cx + N.x1), wt(Y.cy + Y.y1, Y.cx + Y.x1), c), yt > 0 && e.arc(f + Y.cx, h + Y.cy, yt, wt(Y.y1, Y.x1), wt(Y.y0, Y.x0), !c))
                } else e.lineTo(f + G, h + V), e.arc(f, h, i, l, u, c)
            }
            e.closePath()
        }
    }
}
var ty = function() {
        function e() {
            this.cx = 0, this.cy = 0, this.r0 = 0, this.r = 0, this.startAngle = 0, this.endAngle = Math.PI * 2, this.clockwise = !0, this.cornerRadius = 0
        }
        return e
    }(),
    hi = function(e) {
        W(t, e);

        function t(r) {
            return e.call(this, r) || this
        }
        return t.prototype.getDefaultShape = function() {
            return new ty
        }, t.prototype.buildPath = function(r, n) {
            j0(r, n)
        }, t.prototype.isZeroArea = function() {
            return this.shape.startAngle === this.shape.endAngle || this.shape.r === this.shape.r0
        }, t
    }(et);
hi.prototype.type = "sector";
var ey = function() {
        function e() {
            this.cx = 0, this.cy = 0, this.r = 0, this.r0 = 0
        }
        return e
    }(),
    du = function(e) {
        W(t, e);

        function t(r) {
            return e.call(this, r) || this
        }
        return t.prototype.getDefaultShape = function() {
            return new ey
        }, t.prototype.buildPath = function(r, n) {
            var i = n.cx,
                a = n.cy,
                o = Math.PI * 2;
            r.moveTo(i + n.r, a), r.arc(i, a, n.r, 0, o, !1), r.moveTo(i + n.r0, a), r.arc(i, a, n.r0, 0, o, !0)
        }, t
    }(et);
du.prototype.type = "ring";

function ry(e, t, r, n) {
    var i = [],
        a = [],
        o = [],
        s = [],
        u, l, f, h;
    if (n) {
        f = [1 / 0, 1 / 0], h = [-1 / 0, -1 / 0];
        for (var c = 0, v = e.length; c < v; c++) qr(f, f, e[c]), $r(h, h, e[c]);
        qr(f, f, n[0]), $r(h, h, n[1])
    }
    for (var c = 0, v = e.length; c < v; c++) {
        var d = e[c];
        if (r) u = e[c ? c - 1 : v - 1], l = e[(c + 1) % v];
        else if (c === 0 || c === v - 1) {
            i.push(Od(e[c]));
            continue
        } else u = e[c - 1], l = e[c + 1];
        kd(a, l, u), $a(a, a, t);
        var g = as(d, u),
            p = as(d, l),
            y = g + p;
        y !== 0 && (g /= y, p /= y), $a(o, a, -g), $a(s, a, p);
        var m = Gu([], d, o),
            _ = Gu([], d, s);
        n && ($r(m, m, f), qr(m, m, h), $r(_, _, f), qr(_, _, h)), i.push(m), i.push(_)
    }
    return r && i.push(i.shift()), i
}

function Rv(e, t, r) {
    var n = t.smooth,
        i = t.points;
    if (i && i.length >= 2) {
        if (n) {
            var a = ry(i, n, r, t.smoothConstraint);
            e.moveTo(i[0][0], i[0][1]);
            for (var o = i.length, s = 0; s < (r ? o : o - 1); s++) {
                var u = a[s * 2],
                    l = a[s * 2 + 1],
                    f = i[(s + 1) % o];
                e.bezierCurveTo(u[0], u[1], l[0], l[1], f[0], f[1])
            }
        } else {
            e.moveTo(i[0][0], i[0][1]);
            for (var s = 1, h = i.length; s < h; s++) e.lineTo(i[s][0], i[s][1])
        }
        r && e.closePath()
    }
}
var ny = function() {
        function e() {
            this.points = null, this.smooth = 0, this.smoothConstraint = null
        }
        return e
    }(),
    pu = function(e) {
        W(t, e);

        function t(r) {
            return e.call(this, r) || this
        }
        return t.prototype.getDefaultShape = function() {
            return new ny
        }, t.prototype.buildPath = function(r, n) {
            Rv(r, n, !0)
        }, t
    }(et);
pu.prototype.type = "polygon";
var iy = function() {
        function e() {
            this.points = null, this.percent = 1, this.smooth = 0, this.smoothConstraint = null
        }
        return e
    }(),
    vi = function(e) {
        W(t, e);

        function t(r) {
            return e.call(this, r) || this
        }
        return t.prototype.getDefaultStyle = function() {
            return {
                stroke: "#000",
                fill: null
            }
        }, t.prototype.getDefaultShape = function() {
            return new iy
        }, t.prototype.buildPath = function(r, n) {
            Rv(r, n, !1)
        }, t
    }(et);
vi.prototype.type = "polyline";
var ay = {},
    oy = function() {
        function e() {
            this.x1 = 0, this.y1 = 0, this.x2 = 0, this.y2 = 0, this.percent = 1
        }
        return e
    }(),
    Ha = function(e) {
        W(t, e);

        function t(r) {
            return e.call(this, r) || this
        }
        return t.prototype.getDefaultStyle = function() {
            return {
                stroke: "#000",
                fill: null
            }
        }, t.prototype.getDefaultShape = function() {
            return new oy
        }, t.prototype.buildPath = function(r, n) {
            var i, a, o, s;
            if (this.subPixelOptimize) {
                var u = vv(ay, n, this.style);
                i = u.x1, a = u.y1, o = u.x2, s = u.y2
            } else i = n.x1, a = n.y1, o = n.x2, s = n.y2;
            var l = n.percent;
            l !== 0 && (r.moveTo(i, a), l < 1 && (o = i * (1 - l) + o * l, s = a * (1 - l) + s * l), r.lineTo(o, s))
        }, t.prototype.pointAt = function(r) {
            var n = this.shape;
            return [n.x1 * (1 - r) + n.x2 * r, n.y1 * (1 - r) + n.y2 * r]
        }, t
    }(et);
Ha.prototype.type = "line";
var Lt = [],
    sy = function() {
        function e() {
            this.x1 = 0, this.y1 = 0, this.x2 = 0, this.y2 = 0, this.cpx1 = 0, this.cpy1 = 0, this.percent = 1
        }
        return e
    }();

function Zl(e, t, r) {
    var n = e.cpx2,
        i = e.cpy2;
    return n != null || i != null ? [(r ? ju : _t)(e.x1, e.cpx1, e.cpx2, e.x2, t), (r ? ju : _t)(e.y1, e.cpy1, e.cpy2, e.y2, t)] : [(r ? tl : Dt)(e.x1, e.cpx1, e.x2, t), (r ? tl : Dt)(e.y1, e.cpy1, e.y2, t)]
}
var gu = function(e) {
    W(t, e);

    function t(r) {
        return e.call(this, r) || this
    }
    return t.prototype.getDefaultStyle = function() {
        return {
            stroke: "#000",
            fill: null
        }
    }, t.prototype.getDefaultShape = function() {
        return new sy
    }, t.prototype.buildPath = function(r, n) {
        var i = n.x1,
            a = n.y1,
            o = n.x2,
            s = n.y2,
            u = n.cpx1,
            l = n.cpy1,
            f = n.cpx2,
            h = n.cpy2,
            c = n.percent;
        c !== 0 && (r.moveTo(i, a), f == null || h == null ? (c < 1 && (sa(i, u, o, c, Lt), u = Lt[1], o = Lt[2], sa(a, l, s, c, Lt), l = Lt[1], s = Lt[2]), r.quadraticCurveTo(u, l, o, s)) : (c < 1 && (oa(i, u, f, o, c, Lt), u = Lt[1], f = Lt[2], o = Lt[3], oa(a, l, h, s, c, Lt), l = Lt[1], h = Lt[2], s = Lt[3]), r.bezierCurveTo(u, l, f, h, o, s)))
    }, t.prototype.pointAt = function(r) {
        return Zl(this.shape, r, !1)
    }, t.prototype.tangentAt = function(r) {
        var n = Zl(this.shape, r, !0);
        return Bd(n, n)
    }, t
}(et);
gu.prototype.type = "bezier-curve";
var uy = function() {
        function e() {
            this.cx = 0, this.cy = 0, this.r = 0, this.startAngle = 0, this.endAngle = Math.PI * 2, this.clockwise = !0
        }
        return e
    }(),
    Ga = function(e) {
        W(t, e);

        function t(r) {
            return e.call(this, r) || this
        }
        return t.prototype.getDefaultStyle = function() {
            return {
                stroke: "#000",
                fill: null
            }
        }, t.prototype.getDefaultShape = function() {
            return new uy
        }, t.prototype.buildPath = function(r, n) {
            var i = n.cx,
                a = n.cy,
                o = Math.max(n.r, 0),
                s = n.startAngle,
                u = n.endAngle,
                l = n.clockwise,
                f = Math.cos(s),
                h = Math.sin(s);
            r.moveTo(f * o + i, h * o + a), r.arc(i, a, o, s, u, !l)
        }, t
    }(et);
Ga.prototype.type = "arc";
var ly = function(e) {
        W(t, e);

        function t() {
            var r = e !== null && e.apply(this, arguments) || this;
            return r.type = "compound", r
        }
        return t.prototype._updatePathDirty = function() {
            for (var r = this.shape.paths, n = this.shapeChanged(), i = 0; i < r.length; i++) n = n || r[i].shapeChanged();
            n && this.dirtyShape()
        }, t.prototype.beforeBrush = function() {
            this._updatePathDirty();
            for (var r = this.shape.paths || [], n = this.getGlobalScale(), i = 0; i < r.length; i++) r[i].path || r[i].createPathProxy(), r[i].path.setScale(n[0], n[1], r[i].segmentIgnoreThreshold)
        }, t.prototype.buildPath = function(r, n) {
            for (var i = n.paths || [], a = 0; a < i.length; a++) i[a].buildPath(r, i[a].shape, !0)
        }, t.prototype.afterBrush = function() {
            for (var r = this.shape.paths || [], n = 0; n < r.length; n++) r[n].pathUpdated()
        }, t.prototype.getBoundingRect = function() {
            return this._updatePathDirty.call(this), et.prototype.getBoundingRect.call(this)
        }, t
    }(et),
    xv = function() {
        function e(t) {
            this.colorStops = t || []
        }
        return e.prototype.addColorStop = function(t, r) {
            this.colorStops.push({
                offset: t,
                color: r
            })
        }, e
    }(),
    fy = function(e) {
        W(t, e);

        function t(r, n, i, a, o, s) {
            var u = e.call(this, o) || this;
            return u.x = r ? ? 0, u.y = n ? ? 0, u.x2 = i ? ? 1, u.y2 = a ? ? 0, u.type = "linear", u.global = s || !1, u
        }
        return t
    }(xv),
    hy = function(e) {
        W(t, e);

        function t(r, n, i, a, o) {
            var s = e.call(this, a) || this;
            return s.x = r ? ? .5, s.y = n ? ? .5, s.r = i ? ? .5, s.type = "radial", s.global = o || !1, s
        }
        return t
    }(xv),
    cr = [0, 0],
    dr = [0, 0],
    Ri = new B,
    xi = new B,
    va = function() {
        function e(t, r) {
            this._corners = [], this._axes = [], this._origin = [0, 0];
            for (var n = 0; n < 4; n++) this._corners[n] = new B;
            for (var n = 0; n < 2; n++) this._axes[n] = new B;
            t && this.fromBoundingRect(t, r)
        }
        return e.prototype.fromBoundingRect = function(t, r) {
            var n = this._corners,
                i = this._axes,
                a = t.x,
                o = t.y,
                s = a + t.width,
                u = o + t.height;
            if (n[0].set(a, o), n[1].set(s, o), n[2].set(s, u), n[3].set(a, u), r)
                for (var l = 0; l < 4; l++) n[l].transform(r);
            B.sub(i[0], n[1], n[0]), B.sub(i[1], n[3], n[0]), i[0].normalize(), i[1].normalize();
            for (var l = 0; l < 2; l++) this._origin[l] = i[l].dot(n[0])
        }, e.prototype.intersect = function(t, r) {
            var n = !0,
                i = !r;
            return Ri.set(1 / 0, 1 / 0), xi.set(0, 0), !this._intersectCheckOneSide(this, t, Ri, xi, i, 1) && (n = !1, i) || !this._intersectCheckOneSide(t, this, Ri, xi, i, -1) && (n = !1, i) || i || B.copy(r, n ? Ri : xi), n
        }, e.prototype._intersectCheckOneSide = function(t, r, n, i, a, o) {
            for (var s = !0, u = 0; u < 2; u++) {
                var l = this._axes[u];
                if (this._getProjMinMaxOnAxis(u, t._corners, cr), this._getProjMinMaxOnAxis(u, r._corners, dr), cr[1] < dr[0] || cr[0] > dr[1]) {
                    if (s = !1, a) return s;
                    var f = Math.abs(dr[0] - cr[1]),
                        h = Math.abs(cr[0] - dr[1]);
                    Math.min(f, h) > i.len() && (f < h ? B.scale(i, l, -f * o) : B.scale(i, l, h * o))
                } else if (n) {
                    var f = Math.abs(dr[0] - cr[1]),
                        h = Math.abs(cr[0] - dr[1]);
                    Math.min(f, h) < n.len() && (f < h ? B.scale(n, l, f * o) : B.scale(n, l, -h * o))
                }
            }
            return s
        }, e.prototype._getProjMinMaxOnAxis = function(t, r, n) {
            for (var i = this._axes[t], a = this._origin, o = r[0].dot(i) + a[t], s = o, u = o, l = 1; l < r.length; l++) {
                var f = r[l].dot(i) + a[t];
                s = Math.min(f, s), u = Math.max(f, u)
            }
            n[0] = s, n[1] = u
        }, e
    }(),
    vy = [],
    cy = function(e) {
        W(t, e);

        function t() {
            var r = e !== null && e.apply(this, arguments) || this;
            return r.notClear = !0, r.incremental = !0, r._displayables = [], r._temporaryDisplayables = [], r._cursor = 0, r
        }
        return t.prototype.traverse = function(r, n) {
            r.call(n, this)
        }, t.prototype.useStyle = function() {
            this.style = {}
        }, t.prototype.getCursor = function() {
            return this._cursor
        }, t.prototype.innerAfterBrush = function() {
            this._cursor = this._displayables.length
        }, t.prototype.clearDisplaybles = function() {
            this._displayables = [], this._temporaryDisplayables = [], this._cursor = 0, this.markRedraw(), this.notClear = !1
        }, t.prototype.clearTemporalDisplayables = function() {
            this._temporaryDisplayables = []
        }, t.prototype.addDisplayable = function(r, n) {
            n ? this._temporaryDisplayables.push(r) : this._displayables.push(r), this.markRedraw()
        }, t.prototype.addDisplayables = function(r, n) {
            n = n || !1;
            for (var i = 0; i < r.length; i++) this.addDisplayable(r[i], n)
        }, t.prototype.getDisplayables = function() {
            return this._displayables
        }, t.prototype.getTemporalDisplayables = function() {
            return this._temporaryDisplayables
        }, t.prototype.eachPendingDisplayable = function(r) {
            for (var n = this._cursor; n < this._displayables.length; n++) r && r(this._displayables[n]);
            for (var n = 0; n < this._temporaryDisplayables.length; n++) r && r(this._temporaryDisplayables[n])
        }, t.prototype.update = function() {
            this.updateTransform();
            for (var r = this._cursor; r < this._displayables.length; r++) {
                var n = this._displayables[r];
                n.parent = this, n.update(), n.parent = null
            }
            for (var r = 0; r < this._temporaryDisplayables.length; r++) {
                var n = this._temporaryDisplayables[r];
                n.parent = this, n.update(), n.parent = null
            }
        }, t.prototype.getBoundingRect = function() {
            if (!this._rect) {
                for (var r = new nt(1 / 0, 1 / 0, -1 / 0, -1 / 0), n = 0; n < this._displayables.length; n++) {
                    var i = this._displayables[n],
                        a = i.getBoundingRect().clone();
                    i.needLocalTransform() && a.applyTransform(i.getLocalTransform(vy)), r.union(a)
                }
                this._rect = r
            }
            return this._rect
        }, t.prototype.contain = function(r, n) {
            var i = this.transformCoordToLocal(r, n),
                a = this.getBoundingRect();
            if (a.contain(i[0], i[1]))
                for (var o = 0; o < this._displayables.length; o++) {
                    var s = this._displayables[o];
                    if (s.contain(r, n)) return !0
                }
            return !1
        }, t
    }(fi),
    Lv = Pt();

function dy(e, t, r, n, i) {
    var a;
    if (t && t.ecModel) {
        var o = t.ecModel.getUpdatePayload();
        a = o && o.animation
    }
    var s = t && t.isAnimationEnabled(),
        u = e === "update";
    if (s) {
        var l = void 0,
            f = void 0,
            h = void 0;
        n ? (l = q(n.duration, 200), f = q(n.easing, "cubicOut"), h = 0) : (l = t.getShallow(u ? "animationDurationUpdate" : "animationDuration"), f = t.getShallow(u ? "animationEasingUpdate" : "animationEasing"), h = t.getShallow(u ? "animationDelayUpdate" : "animationDelay")), a && (a.duration != null && (l = a.duration), a.easing != null && (f = a.easing), a.delay != null && (h = a.delay)), rt(h) && (h = h(r, i)), rt(l) && (l = l(r));
        var c = {
            duration: l || 0,
            delay: h,
            easing: f
        };
        return c
    } else return null
}

function yu(e, t, r, n, i, a, o) {
    var s = !1,
        u;
    rt(i) ? (o = a, a = i, i = null) : H(i) && (a = i.cb, o = i.during, s = i.isFrom, u = i.removeOpt, i = i.dataIndex);
    var l = e === "leave";
    l || t.stopAnimation("leave");
    var f = dy(e, n, i, l ? u || {} : null, n && n.getAnimationDelayParams ? n.getAnimationDelayParams(t, i) : null);
    if (f && f.duration > 0) {
        var h = f.duration,
            c = f.delay,
            v = f.easing,
            d = {
                duration: h,
                delay: c || 0,
                easing: v,
                done: a,
                force: !!a || !!o,
                setToFinal: !l,
                scope: e,
                during: o
            };
        s ? t.animateFrom(r, d) : t.animateTo(r, d)
    } else t.stopAnimation(), !s && t.attr(r), o && o(1), a && a()
}

function ei(e, t, r, n, i, a) {
    yu("update", e, t, r, n, i, a)
}

function Wn(e, t, r, n, i, a) {
    yu("enter", e, t, r, n, i, a)
}

function Xn(e) {
    if (!e.__zr) return !0;
    for (var t = 0; t < e.animators.length; t++) {
        var r = e.animators[t];
        if (r.scope === "leave") return !0
    }
    return !1
}

function Iv(e, t, r, n, i, a) {
    Xn(e) || yu("leave", e, t, r, n, i, a)
}

function Kl(e, t, r, n) {
    e.removeTextContent(), e.removeTextGuideLine(), Iv(e, {
        style: {
            opacity: 0
        }
    }, t, r, n)
}

function Ev(e, t, r) {
    function n() {
        e.parent && e.parent.remove(e)
    }
    e.isGroup ? e.traverse(function(i) {
        i.isGroup || Kl(i, t, r, n)
    }) : Kl(e, t, r, n)
}

function py(e) {
    Lv(e).oldStyle = e.style
}

function Nw(e) {
    return Lv(e).oldStyle
}
var ca = Math.max,
    da = Math.min,
    Os = {};

function gy(e) {
    return et.extend(e)
}
var yy = X0;

function my(e, t) {
    return yy(e, t)
}

function le(e, t) {
    Os[e] = t
}

function _y(e) {
    if (Os.hasOwnProperty(e)) return Os[e]
}

function mu(e, t, r, n) {
    var i = W0(e, t);
    return r && (n === "center" && (r = kv(r, i.getBoundingRect())), Fv(i, r)), i
}

function Ov(e, t, r) {
    var n = new xr({
        style: {
            image: e,
            x: t.x,
            y: t.y,
            width: t.width,
            height: t.height
        },
        onload: function(i) {
            if (r === "center") {
                var a = {
                    width: i.width,
                    height: i.height
                };
                n.setStyle(kv(t, a))
            }
        }
    });
    return n
}

function kv(e, t) {
    var r = t.width / t.height,
        n = e.height * r,
        i;
    n <= e.width ? i = e.height : (n = e.width, i = n / r);
    var a = e.x + e.width / 2,
        o = e.y + e.height / 2;
    return {
        x: a - n / 2,
        y: o - i / 2,
        width: n,
        height: i
    }
}
var Sy = q0;

function Fv(e, t) {
    if (e.applyTransform) {
        var r = e.getBoundingRect(),
            n = r.calculateTransform(t);
        e.applyTransform(n)
    }
}

function wy(e, t) {
    return vv(e, e, {
        lineWidth: t
    }), e
}

function Ty(e) {
    return cv(e.shape, e.shape, e.style), e
}
var by = _r;

function Dy(e, t) {
    for (var r = Dh([]); e && e !== t;) Wi(r, e.getLocalTransform(), r), e = e.parent;
    return r
}

function Nv(e, t, r) {
    return t && !Bt(t) && (t = iu.getLocalTransform(t)), r && (t = ru([], t)), jr([], e, t)
}

function My(e, t, r) {
    var n = t[4] === 0 || t[5] === 0 || t[0] === 0 ? 1 : Math.abs(2 * t[4] / t[0]),
        i = t[4] === 0 || t[5] === 0 || t[2] === 0 ? 1 : Math.abs(2 * t[4] / t[2]),
        a = [e === "left" ? -n : e === "right" ? n : 0, e === "top" ? -i : e === "bottom" ? i : 0];
    return a = Nv(a, t, r), Math.abs(a[0]) > Math.abs(a[1]) ? a[0] > 0 ? "right" : "left" : a[1] > 0 ? "bottom" : "top"
}

function Ql(e) {
    return !e.isGroup
}

function Cy(e) {
    return e.shape != null
}

function Py(e, t, r) {
    if (!e || !t) return;

    function n(o) {
        var s = {};
        return o.traverse(function(u) {
            Ql(u) && u.anid && (s[u.anid] = u)
        }), s
    }

    function i(o) {
        var s = {
            x: o.x,
            y: o.y,
            rotation: o.rotation
        };
        return Cy(o) && (s.shape = I({}, o.shape)), s
    }
    var a = n(e);
    t.traverse(function(o) {
        if (Ql(o) && o.anid) {
            var s = a[o.anid];
            if (s) {
                var u = i(o);
                o.attr(i(s)), ei(o, u, r, Nt(o).dataIndex)
            }
        }
    })
}

function Ay(e, t) {
    return Q(e, function(r) {
        var n = r[0];
        n = ca(n, t.x), n = da(n, t.x + t.width);
        var i = r[1];
        return i = ca(i, t.y), i = da(i, t.y + t.height), [n, i]
    })
}

function Ry(e, t) {
    var r = ca(e.x, t.x),
        n = da(e.x + e.width, t.x + t.width),
        i = ca(e.y, t.y),
        a = da(e.y + e.height, t.y + t.height);
    if (n >= r && a >= i) return {
        x: r,
        y: i,
        width: n - r,
        height: a - i
    }
}

function xy(e, t, r) {
    var n = I({
            rectHover: !0
        }, t),
        i = n.style = {
            strokeNoScale: !0
        };
    if (r = r || {
            x: -1,
            y: -1,
            width: 2,
            height: 2
        }, e) return e.indexOf("image://") === 0 ? (i.image = e.slice(8), dt(i, r), new xr(n)) : mu(e.replace("path://", ""), n, r, "center")
}

function Ly(e, t, r, n, i) {
    for (var a = 0, o = i[i.length - 1]; a < i.length; a++) {
        var s = i[a];
        if (Bv(e, t, r, n, s[0], s[1], o[0], o[1])) return !0;
        o = s
    }
}

function Bv(e, t, r, n, i, a, o, s) {
    var u = r - e,
        l = n - t,
        f = o - i,
        h = s - a,
        c = Eo(f, h, u, l);
    if (Iy(c)) return !1;
    var v = e - i,
        d = t - a,
        g = Eo(v, d, u, l) / c;
    if (g < 0 || g > 1) return !1;
    var p = Eo(v, d, f, h) / c;
    return !(p < 0 || p > 1)
}

function Eo(e, t, r, n) {
    return e * n - r * t
}

function Iy(e) {
    return e <= 1e-6 && e >= -1e-6
}

function Ey(e) {
    var t = e.itemTooltipOption,
        r = e.componentModel,
        n = e.itemName,
        i = X(t) ? {
            formatter: t
        } : t,
        a = r.mainType,
        o = r.componentIndex,
        s = {
            componentType: a,
            name: n,
            $vars: ["name"]
        };
    s[a + "Index"] = o;
    var u = e.formatterParamsExtra;
    u && P(ht(u), function(f) {
        Pr(s, f) || (s[f] = u[f], s.$vars.push(f))
    });
    var l = Nt(e.el);
    l.componentMainType = a, l.componentIndex = o, l.tooltipConfig = {
        name: n,
        option: dt({
            content: n,
            encodeHTMLContent: !0,
            formatterParams: s
        }, i)
    }
}

function Jl(e, t) {
    var r;
    e.isGroup && (r = t(e)), r || e.traverse(t)
}

function zv(e, t) {
    if (e)
        if (F(e))
            for (var r = 0; r < e.length; r++) Jl(e[r], t);
        else Jl(e, t)
}
le("circle", za);
le("ellipse", cu);
le("sector", hi);
le("ring", du);
le("polygon", pu);
le("polyline", vi);
le("rect", we);
le("line", Ha);
le("bezierCurve", gu);
le("arc", Ga);
const Bw = Object.freeze(Object.defineProperty({
    __proto__: null,
    Arc: Ga,
    BezierCurve: gu,
    BoundingRect: nt,
    Circle: za,
    CompoundPath: ly,
    Ellipse: cu,
    Group: sn,
    Image: xr,
    IncrementalDisplayable: cy,
    Line: Ha,
    LinearGradient: fy,
    OrientedBoundingRect: va,
    Path: et,
    Point: B,
    Polygon: pu,
    Polyline: vi,
    RadialGradient: hy,
    Rect: we,
    Ring: du,
    Sector: hi,
    Text: Rr,
    applyTransform: Nv,
    clipPointsByRect: Ay,
    clipRectByRect: Ry,
    createIcon: xy,
    extendPath: my,
    extendShape: gy,
    getShapeClass: _y,
    getTransform: Dy,
    groupTransition: Py,
    initProps: Wn,
    isElementRemoved: Xn,
    lineLineIntersect: Bv,
    linePolygonIntersect: Ly,
    makeImage: Ov,
    makePath: mu,
    mergePath: Sy,
    registerShape: le,
    removeElement: Iv,
    removeElementWithFadeOut: Ev,
    resizePath: Fv,
    setTooltipConfig: Ey,
    subPixelOptimize: by,
    subPixelOptimizeLine: wy,
    subPixelOptimizeRect: Ty,
    transformDirection: My,
    traverseElements: zv,
    updateProps: ei
}, Symbol.toStringTag, {
    value: "Module"
}));
var Va = {};

function Hv(e, t) {
    for (var r = 0; r < be.length; r++) {
        var n = be[r],
            i = t[n],
            a = e.ensureState(n);
        a.style = a.style || {}, a.style.text = i
    }
    var o = e.currentStates.slice();
    e.clearStates(!0), e.setStyle({
        text: t.normal
    }), e.useStates(o, !0)
}

function ks(e, t, r) {
    var n = e.labelFetcher,
        i = e.labelDataIndex,
        a = e.labelDimIndex,
        o = t.normal,
        s;
    n && (s = n.getFormattedLabel(i, "normal", null, a, o && o.get("formatter"), r != null ? {
        interpolatedValue: r
    } : null)), s == null && (s = rt(e.defaultText) ? e.defaultText(i, e, r) : e.defaultText);
    for (var u = {
            normal: s
        }, l = 0; l < be.length; l++) {
        var f = be[l],
            h = t[f];
        u[f] = q(n ? n.getFormattedLabel(i, f, null, a, h && h.get("formatter")) : null, s)
    }
    return u
}

function Oy(e, t, r, n) {
    r = r || Va;
    for (var i = e instanceof Rr, a = !1, o = 0; o < ha.length; o++) {
        var s = t[ha[o]];
        if (s && s.getShallow("show")) {
            a = !0;
            break
        }
    }
    var u = i ? e : e.getTextContent();
    if (a) {
        i || (u || (u = new Rr, e.setTextContent(u)), e.stateProxy && (u.stateProxy = e.stateProxy));
        var l = ks(r, t),
            f = t.normal,
            h = !!f.getShallow("show"),
            c = jl(f, n && n.normal, r, !1, !i);
        c.text = l.normal, i || e.setTextConfig(tf(f, r, !1));
        for (var o = 0; o < be.length; o++) {
            var v = be[o],
                s = t[v];
            if (s) {
                var d = u.ensureState(v),
                    g = !!q(s.getShallow("show"), h);
                if (g !== h && (d.ignore = !g), d.style = jl(s, n && n[v], r, !0, !i), d.style.text = l[v], !i) {
                    var p = e.ensureState(v);
                    p.textConfig = tf(s, r, !0)
                }
            }
        }
        u.silent = !!f.getShallow("silent"), u.style.x != null && (c.x = u.style.x), u.style.y != null && (c.y = u.style.y), u.ignore = !h, u.useStyle(c), u.dirty(), r.enableTextSetter && (_u(u).setLabelText = function(y) {
            var m = ks(r, t, y);
            Hv(u, m)
        })
    } else u && (u.ignore = !0);
    e.dirty()
}

function ky(e, t) {
    t = t || "label";
    for (var r = {
            normal: e.getModel(t)
        }, n = 0; n < be.length; n++) {
        var i = be[n];
        r[i] = e.getModel([i, t])
    }
    return r
}

function jl(e, t, r, n, i) {
    var a = {};
    return Fy(a, e, r, n, i), t && I(a, t), a
}

function tf(e, t, r) {
    t = t || {};
    var n = {},
        i, a = e.getShallow("rotate"),
        o = q(e.getShallow("distance"), r ? null : 5),
        s = e.getShallow("offset");
    return i = e.getShallow("position") || (r ? null : "inside"), i === "outside" && (i = t.defaultOutsidePosition || "top"), i != null && (n.position = i), s != null && (n.offset = s), a != null && (a *= Math.PI / 180, n.rotation = a), o != null && (n.distance = o), n.outsideFill = e.get("color") === "inherit" ? t.inheritColor || null : "auto", n
}

function Fy(e, t, r, n, i) {
    r = r || Va;
    var a = t.ecModel,
        o = a && a.option.textStyle,
        s = Ny(t),
        u;
    if (s) {
        u = {};
        for (var l in s)
            if (s.hasOwnProperty(l)) {
                var f = t.getModel(["rich", l]);
                af(u[l] = {}, f, o, r, n, i, !1, !0)
            }
    }
    u && (e.rich = u);
    var h = t.get("overflow");
    h && (e.overflow = h);
    var c = t.get("minMargin");
    c != null && (e.margin = c), af(e, t, o, r, n, i, !0, !1)
}

function Ny(e) {
    for (var t; e && e !== e.ecModel;) {
        var r = (e.option || Va).rich;
        if (r) {
            t = t || {};
            for (var n = ht(r), i = 0; i < n.length; i++) {
                var a = n[i];
                t[a] = 1
            }
        }
        e = e.parentModel
    }
    return t
}
var ef = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "textShadowColor", "textShadowBlur", "textShadowOffsetX", "textShadowOffsetY"],
    rf = ["align", "lineHeight", "width", "height", "tag", "verticalAlign", "ellipsis"],
    nf = ["padding", "borderWidth", "borderRadius", "borderDashOffset", "backgroundColor", "borderColor", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY"];

function af(e, t, r, n, i, a, o, s) {
    r = !i && r || Va;
    var u = n && n.inheritColor,
        l = t.getShallow("color"),
        f = t.getShallow("textBorderColor"),
        h = q(t.getShallow("opacity"), r.opacity);
    (l === "inherit" || l === "auto") && (u ? l = u : l = null), (f === "inherit" || f === "auto") && (u ? f = u : f = null), a || (l = l || r.color, f = f || r.textBorderColor), l != null && (e.fill = l), f != null && (e.stroke = f);
    var c = q(t.getShallow("textBorderWidth"), r.textBorderWidth);
    c != null && (e.lineWidth = c);
    var v = q(t.getShallow("textBorderType"), r.textBorderType);
    v != null && (e.lineDash = v);
    var d = q(t.getShallow("textBorderDashOffset"), r.textBorderDashOffset);
    d != null && (e.lineDashOffset = d), !i && h == null && !s && (h = n && n.defaultOpacity), h != null && (e.opacity = h), !i && !a && e.fill == null && n.inheritColor && (e.fill = n.inheritColor);
    for (var g = 0; g < ef.length; g++) {
        var p = ef[g],
            y = q(t.getShallow(p), r[p]);
        y != null && (e[p] = y)
    }
    for (var g = 0; g < rf.length; g++) {
        var p = rf[g],
            y = t.getShallow(p);
        y != null && (e[p] = y)
    }
    if (e.verticalAlign == null) {
        var m = t.getShallow("baseline");
        m != null && (e.verticalAlign = m)
    }
    if (!o || !n.disableBox) {
        for (var g = 0; g < nf.length; g++) {
            var p = nf[g],
                y = t.getShallow(p);
            y != null && (e[p] = y)
        }
        var _ = t.getShallow("borderType");
        _ != null && (e.borderDash = _), (e.backgroundColor === "auto" || e.backgroundColor === "inherit") && u && (e.backgroundColor = u), (e.borderColor === "auto" || e.borderColor === "inherit") && u && (e.borderColor = u)
    }
}

function By(e, t) {
    var r = t && t.getModel("textStyle");
    return xe([e.fontStyle || r && r.getShallow("fontStyle") || "", e.fontWeight || r && r.getShallow("fontWeight") || "", (e.fontSize || r && r.getShallow("fontSize") || 12) + "px", e.fontFamily || r && r.getShallow("fontFamily") || "sans-serif"].join(" "))
}
var _u = Pt();

function zw(e, t, r, n) {
    if (e) {
        var i = _u(e);
        i.prevValue = i.value, i.value = r;
        var a = t.normal;
        i.valueAnimation = a.get("valueAnimation"), i.valueAnimation && (i.precision = a.get("precision"), i.defaultInterpolatedText = n, i.statesModels = t)
    }
}

function Hw(e, t, r, n, i) {
    var a = _u(e);
    if (!a.valueAnimation || a.prevValue === a.value) return;
    var o = a.defaultInterpolatedText,
        s = q(a.interpolatedValue, a.prevValue),
        u = a.value;

    function l(f) {
        var h = mg(r, a.precision, s, u, f);
        a.interpolatedValue = f === 1 ? null : h;
        var c = ks({
            labelDataIndex: t,
            labelFetcher: i,
            defaultText: o ? o(h) : h + ""
        }, a.statesModels, h);
        Hv(e, c)
    }
    e.percent = 0, (a.prevValue == null ? Wn : ei)(e, {
        percent: 1
    }, n, t, null, l)
}
var zy = ["textStyle", "color"],
    Oo = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "padding", "lineHeight", "rich", "width", "height", "overflow"],
    ko = new Rr,
    Hy = function() {
        function e() {}
        return e.prototype.getTextColor = function(t) {
            var r = this.ecModel;
            return this.getShallow("color") || (!t && r ? r.get(zy) : null)
        }, e.prototype.getFont = function() {
            return By({
                fontStyle: this.getShallow("fontStyle"),
                fontWeight: this.getShallow("fontWeight"),
                fontSize: this.getShallow("fontSize"),
                fontFamily: this.getShallow("fontFamily")
            }, this.ecModel)
        }, e.prototype.getTextRect = function(t) {
            for (var r = {
                    text: t,
                    verticalAlign: this.getShallow("verticalAlign") || this.getShallow("baseline")
                }, n = 0; n < Oo.length; n++) r[Oo[n]] = this.getShallow(Oo[n]);
            return ko.useStyle(r), ko.update(), ko.getBoundingRect()
        }, e
    }(),
    Gv = [
        ["lineWidth", "width"],
        ["stroke", "color"],
        ["opacity"],
        ["shadowBlur"],
        ["shadowOffsetX"],
        ["shadowOffsetY"],
        ["shadowColor"],
        ["lineDash", "type"],
        ["lineDashOffset", "dashOffset"],
        ["lineCap", "cap"],
        ["lineJoin", "join"],
        ["miterLimit"]
    ],
    Gy = ti(Gv),
    Vy = function() {
        function e() {}
        return e.prototype.getLineStyle = function(t) {
            return Gy(this, t)
        }, e
    }(),
    Vv = [
        ["fill", "color"],
        ["stroke", "borderColor"],
        ["lineWidth", "borderWidth"],
        ["opacity"],
        ["shadowBlur"],
        ["shadowOffsetX"],
        ["shadowOffsetY"],
        ["shadowColor"],
        ["lineDash", "borderType"],
        ["lineDashOffset", "borderDashOffset"],
        ["lineCap", "borderCap"],
        ["lineJoin", "borderJoin"],
        ["miterLimit", "borderMiterLimit"]
    ],
    Uy = ti(Vv),
    Yy = function() {
        function e() {}
        return e.prototype.getItemStyle = function(t, r) {
            return Uy(this, t, r)
        }, e
    }(),
    xt = function() {
        function e(t, r, n) {
            this.parentModel = r, this.ecModel = n, this.option = t
        }
        return e.prototype.init = function(t, r, n) {}, e.prototype.mergeOption = function(t, r) {
            ct(this.option, t, !0)
        }, e.prototype.get = function(t, r) {
            return t == null ? this.option : this._doGet(this.parsePath(t), !r && this.parentModel)
        }, e.prototype.getShallow = function(t, r) {
            var n = this.option,
                i = n == null ? n : n[t];
            if (i == null && !r) {
                var a = this.parentModel;
                a && (i = a.getShallow(t))
            }
            return i
        }, e.prototype.getModel = function(t, r) {
            var n = t != null,
                i = n ? this.parsePath(t) : null,
                a = n ? this._doGet(i) : this.option;
            return r = r || this.parentModel && this.parentModel.getModel(this.resolveParentPath(i)), new e(a, r, this.ecModel)
        }, e.prototype.isEmpty = function() {
            return this.option == null
        }, e.prototype.restoreData = function() {}, e.prototype.clone = function() {
            var t = this.constructor;
            return new t(tt(this.option))
        }, e.prototype.parsePath = function(t) {
            return typeof t == "string" ? t.split(".") : t
        }, e.prototype.resolveParentPath = function(t) {
            return t
        }, e.prototype.isAnimationEnabled = function() {
            if (!K.node && this.option) {
                if (this.option.animation != null) return !!this.option.animation;
                if (this.parentModel) return this.parentModel.isAnimationEnabled()
            }
        }, e.prototype._doGet = function(t, r) {
            var n = this.option;
            if (!t) return n;
            for (var i = 0; i < t.length && !(t[i] && (n = n && typeof n == "object" ? n[t[i]] : null, n == null)); i++);
            return n == null && r && (n = r._doGet(this.resolveParentPath(t), r.parentModel)), n
        }, e
    }();
su(xt);
Dg(xt);
Ie(xt, Vy);
Ie(xt, Yy);
Ie(xt, Rg);
Ie(xt, Hy);
var Wy = Math.round(Math.random() * 10);

function Ua(e) {
    return [e || "", Wy++].join("_")
}

function Xy(e) {
    var t = {};
    e.registerSubTypeDefaulter = function(r, n) {
        var i = _e(r);
        t[i.main] = n
    }, e.determineSubType = function(r, n) {
        var i = n.type;
        if (!i) {
            var a = _e(r).main;
            e.hasSubTypes(r) && t[a] && (i = t[a](n))
        }
        return i
    }
}

function qy(e, t) {
    e.topologicalTravel = function(a, o, s, u) {
        if (!a.length) return;
        var l = r(o),
            f = l.graph,
            h = l.noEntryList,
            c = {};
        for (P(a, function(m) {
                c[m] = !0
            }); h.length;) {
            var v = h.pop(),
                d = f[v],
                g = !!c[v];
            g && (s.call(u, v, d.originalDeps.slice()), delete c[v]), P(d.successor, g ? y : p)
        }
        P(c, function() {
            var m = "";
            throw new Error(m)
        });

        function p(m) {
            f[m].entryCount--, f[m].entryCount === 0 && h.push(m)
        }

        function y(m) {
            c[m] = !0, p(m)
        }
    };

    function r(a) {
        var o = {},
            s = [];
        return P(a, function(u) {
            var l = n(o, u),
                f = l.originalDeps = t(u),
                h = i(f, a);
            l.entryCount = h.length, l.entryCount === 0 && s.push(u), P(h, function(c) {
                ft(l.predecessor, c) < 0 && l.predecessor.push(c);
                var v = n(o, c);
                ft(v.successor, c) < 0 && v.successor.push(u)
            })
        }), {
            graph: o,
            noEntryList: s
        }
    }

    function n(a, o) {
        return a[o] || (a[o] = {
            predecessor: [],
            successor: []
        }), a[o]
    }

    function i(a, o) {
        var s = [];
        return P(a, function(u) {
            ft(o, u) >= 0 && s.push(u)
        }), s
    }
}

function Gw(e, t) {
    return ct(ct({}, e, !0), t, !0)
}
const $y = {
        time: {
            month: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthAbbr: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayOfWeekAbbr: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
        },
        legend: {
            selector: {
                all: "All",
                inverse: "Inv"
            }
        },
        toolbox: {
            brush: {
                title: {
                    rect: "Box Select",
                    polygon: "Lasso Select",
                    lineX: "Horizontally Select",
                    lineY: "Vertically Select",
                    keep: "Keep Selections",
                    clear: "Clear Selections"
                }
            },
            dataView: {
                title: "Data View",
                lang: ["Data View", "Close", "Refresh"]
            },
            dataZoom: {
                title: {
                    zoom: "Zoom",
                    back: "Zoom Reset"
                }
            },
            magicType: {
                title: {
                    line: "Switch to Line Chart",
                    bar: "Switch to Bar Chart",
                    stack: "Stack",
                    tiled: "Tile"
                }
            },
            restore: {
                title: "Restore"
            },
            saveAsImage: {
                title: "Save as Image",
                lang: ["Right Click to Save Image"]
            }
        },
        series: {
            typeNames: {
                pie: "Pie chart",
                bar: "Bar chart",
                line: "Line chart",
                scatter: "Scatter plot",
                effectScatter: "Ripple scatter plot",
                radar: "Radar chart",
                tree: "Tree",
                treemap: "Treemap",
                boxplot: "Boxplot",
                candlestick: "Candlestick",
                k: "K line chart",
                heatmap: "Heat map",
                map: "Map",
                parallel: "Parallel coordinate map",
                lines: "Line graph",
                graph: "Relationship graph",
                sankey: "Sankey diagram",
                funnel: "Funnel chart",
                gauge: "Gauge",
                pictorialBar: "Pictorial bar",
                themeRiver: "Theme River Map",
                sunburst: "Sunburst",
                custom: "Custom chart",
                chart: "Chart"
            }
        },
        aria: {
            general: {
                withTitle: 'This is a chart about "{title}"',
                withoutTitle: "This is a chart"
            },
            series: {
                single: {
                    prefix: "",
                    withName: " with type {seriesType} named {seriesName}.",
                    withoutName: " with type {seriesType}."
                },
                multiple: {
                    prefix: ". It consists of {seriesCount} series count.",
                    withName: " The {seriesId} series is a {seriesType} representing {seriesName}.",
                    withoutName: " The {seriesId} series is a {seriesType}.",
                    separator: {
                        middle: "",
                        end: ""
                    }
                }
            },
            data: {
                allData: "The data is as follows: ",
                partialData: "The first {displayCnt} items are: ",
                withName: "the data for {name} is {value}",
                withoutName: "{value}",
                separator: {
                    middle: ", ",
                    end: ". "
                }
            }
        }
    },
    Zy = {
        time: {
            month: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
            monthAbbr: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
            dayOfWeek: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
            dayOfWeekAbbr: ["日", "一", "二", "三", "四", "五", "六"]
        },
        legend: {
            selector: {
                all: "全选",
                inverse: "反选"
            }
        },
        toolbox: {
            brush: {
                title: {
                    rect: "矩形选择",
                    polygon: "圈选",
                    lineX: "横向选择",
                    lineY: "纵向选择",
                    keep: "保持选择",
                    clear: "清除选择"
                }
            },
            dataView: {
                title: "数据视图",
                lang: ["数据视图", "关闭", "刷新"]
            },
            dataZoom: {
                title: {
                    zoom: "区域缩放",
                    back: "区域缩放还原"
                }
            },
            magicType: {
                title: {
                    line: "切换为折线图",
                    bar: "切换为柱状图",
                    stack: "切换为堆叠",
                    tiled: "切换为平铺"
                }
            },
            restore: {
                title: "还原"
            },
            saveAsImage: {
                title: "保存为图片",
                lang: ["右键另存为图片"]
            }
        },
        series: {
            typeNames: {
                pie: "饼图",
                bar: "柱状图",
                line: "折线图",
                scatter: "散点图",
                effectScatter: "涟漪散点图",
                radar: "雷达图",
                tree: "树图",
                treemap: "矩形树图",
                boxplot: "箱型图",
                candlestick: "K线图",
                k: "K线图",
                heatmap: "热力图",
                map: "地图",
                parallel: "平行坐标图",
                lines: "线图",
                graph: "关系图",
                sankey: "桑基图",
                funnel: "漏斗图",
                gauge: "仪表盘图",
                pictorialBar: "象形柱图",
                themeRiver: "主题河流图",
                sunburst: "旭日图",
                custom: "自定义图表",
                chart: "图表"
            }
        },
        aria: {
            general: {
                withTitle: "这是一个关于“{title}”的图表。",
                withoutTitle: "这是一个图表，"
            },
            series: {
                single: {
                    prefix: "",
                    withName: "图表类型是{seriesType}，表示{seriesName}。",
                    withoutName: "图表类型是{seriesType}。"
                },
                multiple: {
                    prefix: "它由{seriesCount}个图表系列组成。",
                    withName: "第{seriesId}个系列是一个表示{seriesName}的{seriesType}，",
                    withoutName: "第{seriesId}个系列是一个{seriesType}，",
                    separator: {
                        middle: "；",
                        end: "。"
                    }
                }
            },
            data: {
                allData: "其数据是——",
                partialData: "其中，前{displayCnt}项是——",
                withName: "{name}的数据是{value}",
                withoutName: "{value}",
                separator: {
                    middle: "，",
                    end: ""
                }
            }
        }
    };
var pa = "ZH",
    Su = "EN",
    rn = Su,
    ea = {},
    wu = {},
    Uv = K.domSupported ? function() {
        var e = (document.documentElement.lang || navigator.language || navigator.browserLanguage || rn).toUpperCase();
        return e.indexOf(pa) > -1 ? pa : rn
    }() : rn;

function Yv(e, t) {
    e = e.toUpperCase(), wu[e] = new xt(t), ea[e] = t
}

function Ky(e) {
    if (X(e)) {
        var t = ea[e.toUpperCase()] || {};
        return e === pa || e === Su ? tt(t) : ct(tt(t), tt(ea[rn]), !1)
    } else return ct(tt(e), tt(ea[rn]), !1)
}

function Qy(e) {
    return wu[e]
}

function Jy() {
    return wu[rn]
}
Yv(Su, $y);
Yv(pa, Zy);
var jy = 1e3,
    tm = jy * 60,
    em = tm * 60,
    rm = em * 24,
    Vw = rm * 365,
    Fn = {
        year: "{yyyy}",
        month: "{MMM}",
        day: "{d}",
        hour: "{HH}:{mm}",
        minute: "{HH}:{mm}",
        second: "{HH}:{mm}:{ss}",
        millisecond: "{HH}:{mm}:{ss} {SSS}",
        none: "{yyyy}-{MM}-{dd} {HH}:{mm}:{ss} {SSS}"
    },
    Li = "{yyyy}-{MM}-{dd}",
    Uw = {
        year: "{yyyy}",
        month: "{yyyy}-{MM}",
        day: Li,
        hour: Li + " " + Fn.hour,
        minute: Li + " " + Fn.minute,
        second: Li + " " + Fn.second,
        millisecond: Fn.none
    },
    Fo = ["year", "month", "day", "hour", "minute", "second", "millisecond"],
    nm = ["year", "half-year", "quarter", "month", "week", "half-week", "day", "half-day", "quarter-day", "hour", "minute", "second", "millisecond"];

function Be(e, t) {
    return e += "", "0000".substr(0, t - e.length) + e
}

function im(e) {
    switch (e) {
        case "half-year":
        case "quarter":
            return "month";
        case "week":
        case "half-week":
            return "day";
        case "half-day":
        case "quarter-day":
            return "hour";
        default:
            return e
    }
}

function Yw(e) {
    return e === im(e)
}

function Ww(e) {
    switch (e) {
        case "year":
        case "month":
            return "day";
        case "millisecond":
            return "millisecond";
        default:
            return "second"
    }
}

function Wv(e, t, r, n) {
    var i = un(e),
        a = i[qv(r)](),
        o = i[qn(r)]() + 1,
        s = Math.floor((o - 1) / 3) + 1,
        u = i[Tu(r)](),
        l = i["get" + (r ? "UTC" : "") + "Day"](),
        f = i[ga(r)](),
        h = (f - 1) % 12 + 1,
        c = i[bu(r)](),
        v = i[Du(r)](),
        d = i[Mu(r)](),
        g = f >= 12 ? "pm" : "am",
        p = g.toUpperCase(),
        y = n instanceof xt ? n : Qy(n || Uv) || Jy(),
        m = y.getModel("time"),
        _ = m.get("month"),
        S = m.get("monthAbbr"),
        T = m.get("dayOfWeek"),
        w = m.get("dayOfWeekAbbr");
    return (t || "").replace(/{a}/g, g + "").replace(/{A}/g, p + "").replace(/{yyyy}/g, a + "").replace(/{yy}/g, Be(a % 100 + "", 2)).replace(/{Q}/g, s + "").replace(/{MMMM}/g, _[o - 1]).replace(/{MMM}/g, S[o - 1]).replace(/{MM}/g, Be(o, 2)).replace(/{M}/g, o + "").replace(/{dd}/g, Be(u, 2)).replace(/{d}/g, u + "").replace(/{eeee}/g, T[l]).replace(/{ee}/g, w[l]).replace(/{e}/g, l + "").replace(/{HH}/g, Be(f, 2)).replace(/{H}/g, f + "").replace(/{hh}/g, Be(h + "", 2)).replace(/{h}/g, h + "").replace(/{mm}/g, Be(c, 2)).replace(/{m}/g, c + "").replace(/{ss}/g, Be(v, 2)).replace(/{s}/g, v + "").replace(/{SSS}/g, Be(d, 3)).replace(/{S}/g, d + "")
}

function Xw(e, t, r, n, i) {
    var a = null;
    if (X(r)) a = r;
    else if (rt(r)) a = r(e.value, t, {
        level: e.level
    });
    else {
        var o = I({}, Fn);
        if (e.level > 0)
            for (var s = 0; s < Fo.length; ++s) o[Fo[s]] = "{primary|" + o[Fo[s]] + "}";
        var u = r ? r.inherit === !1 ? r : dt(r, o) : o,
            l = Xv(e.value, i);
        if (u[l]) a = u[l];
        else if (u.inherit) {
            for (var f = nm.indexOf(l), s = f - 1; s >= 0; --s)
                if (u[l]) {
                    a = u[l];
                    break
                }
            a = a || o.none
        }
        if (F(a)) {
            var h = e.level == null ? 0 : e.level >= 0 ? e.level : a.length + e.level;
            h = Math.min(h, a.length - 1), a = a[h]
        }
    }
    return Wv(new Date(e.value), a, i, n)
}

function Xv(e, t) {
    var r = un(e),
        n = r[qn(t)]() + 1,
        i = r[Tu(t)](),
        a = r[ga(t)](),
        o = r[bu(t)](),
        s = r[Du(t)](),
        u = r[Mu(t)](),
        l = u === 0,
        f = l && s === 0,
        h = f && o === 0,
        c = h && a === 0,
        v = c && i === 1,
        d = v && n === 1;
    return d ? "year" : v ? "month" : c ? "day" : h ? "hour" : f ? "minute" : l ? "second" : "millisecond"
}

function qw(e, t, r) {
    var n = at(e) ? un(e) : e;
    switch (t = t || Xv(e, r), t) {
        case "year":
            return n[qv(r)]();
        case "half-year":
            return n[qn(r)]() >= 6 ? 1 : 0;
        case "quarter":
            return Math.floor((n[qn(r)]() + 1) / 4);
        case "month":
            return n[qn(r)]();
        case "day":
            return n[Tu(r)]();
        case "half-day":
            return n[ga(r)]() / 24;
        case "hour":
            return n[ga(r)]();
        case "minute":
            return n[bu(r)]();
        case "second":
            return n[Du(r)]();
        case "millisecond":
            return n[Mu(r)]()
    }
}

function qv(e) {
    return e ? "getUTCFullYear" : "getFullYear"
}

function qn(e) {
    return e ? "getUTCMonth" : "getMonth"
}

function Tu(e) {
    return e ? "getUTCDate" : "getDate"
}

function ga(e) {
    return e ? "getUTCHours" : "getHours"
}

function bu(e) {
    return e ? "getUTCMinutes" : "getMinutes"
}

function Du(e) {
    return e ? "getUTCSeconds" : "getSeconds"
}

function Mu(e) {
    return e ? "getUTCMilliseconds" : "getMilliseconds"
}

function $w(e) {
    return e ? "setUTCFullYear" : "setFullYear"
}

function Zw(e) {
    return e ? "setUTCMonth" : "setMonth"
}

function Kw(e) {
    return e ? "setUTCDate" : "setDate"
}

function Qw(e) {
    return e ? "setUTCHours" : "setHours"
}

function Jw(e) {
    return e ? "setUTCMinutes" : "setMinutes"
}

function jw(e) {
    return e ? "setUTCSeconds" : "setSeconds"
}

function tT(e) {
    return e ? "setUTCMilliseconds" : "setMilliseconds"
}

function am(e) {
    if (!ag(e)) return X(e) ? e : "-";
    var t = (e + "").split(".");
    return t[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,") + (t.length > 1 ? "." + t[1] : "")
}

function eT(e, t) {
    return e = (e || "").toLowerCase().replace(/-(.)/g, function(r, n) {
        return n.toUpperCase()
    }), t && e && (e = e.charAt(0).toUpperCase() + e.slice(1)), e
}
var $v = Sh;

function Fs(e, t, r) {
    var n = "{yyyy}-{MM}-{dd} {HH}:{mm}:{ss}";

    function i(f) {
        return f && xe(f) ? f : "-"
    }

    function a(f) {
        return !!(f != null && !isNaN(f) && isFinite(f))
    }
    var o = t === "time",
        s = e instanceof Date;
    if (o || s) {
        var u = o ? un(e) : e;
        if (isNaN(+u)) {
            if (s) return "-"
        } else return Wv(u, n, r)
    }
    if (t === "ordinal") return ns(e) ? i(e) : at(e) && a(e) ? e + "" : "-";
    var l = Ke(e);
    return a(l) ? am(l) : ns(e) ? i(e) : typeof e == "boolean" ? e + "" : "-"
}
var of = ["a", "b", "c", "d", "e", "f", "g"], No = function(e, t) {
    return "{" + e + (t ? ? "") + "}"
};

function om(e, t, r) {
    F(t) || (t = [t]);
    var n = t.length;
    if (!n) return "";
    for (var i = t[0].$vars || [], a = 0; a < i.length; a++) {
        var o = of [a];
        e = e.replace(No(o), No(o, 0))
    }
    for (var s = 0; s < n; s++)
        for (var u = 0; u < i.length; u++) {
            var l = t[s][i[u]];
            e = e.replace(No( of [u], s), r ? Ut(l) : l)
        }
    return e
}

function rT(e, t, r) {
    return P(t, function(n, i) {
        e = e.replace("{" + i + "}", n)
    }), e
}

function sm(e, t) {
    var r = X(e) ? {
            color: e,
            extraCssText: t
        } : e || {},
        n = r.color,
        i = r.type;
    t = r.extraCssText;
    var a = r.renderMode || "html";
    if (!n) return "";
    if (a === "html") return i === "subItem" ? '<span style="display:inline-block;vertical-align:middle;margin-right:8px;margin-left:3px;border-radius:4px;width:4px;height:4px;background-color:' + Ut(n) + ";" + (t || "") + '"></span>' : '<span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:' + Ut(n) + ";" + (t || "") + '"></span>';
    var o = r.markerId || "markerX";
    return {
        renderMode: a,
        content: "{" + o + "|}  ",
        style: i === "subItem" ? {
            width: 4,
            height: 4,
            borderRadius: 2,
            backgroundColor: n
        } : {
            width: 10,
            height: 10,
            borderRadius: 5,
            backgroundColor: n
        }
    }
}

function um(e, t) {
    return t = t || "transparent", X(e) ? e : H(e) && e.colorStops && (e.colorStops[0] || {}).color || t
}

function nT(e, t) {
    if (t === "_blank" || t === "blank") {
        var r = window.open();
        r.opener = null, r.location.href = e
    } else window.open(e, t)
}
var ra = P,
    lm = ["left", "right", "top", "bottom", "width", "height"],
    Sr = [
        ["width", "left", "right"],
        ["height", "top", "bottom"]
    ];

function Cu(e, t, r, n, i) {
    var a = 0,
        o = 0;
    n == null && (n = 1 / 0), i == null && (i = 1 / 0);
    var s = 0;
    t.eachChild(function(u, l) {
        var f = u.getBoundingRect(),
            h = t.childAt(l + 1),
            c = h && h.getBoundingRect(),
            v, d;
        if (e === "horizontal") {
            var g = f.width + (c ? -c.x + f.x : 0);
            v = a + g, v > n || u.newline ? (a = 0, v = g, o += s + r, s = f.height) : s = Math.max(s, f.height)
        } else {
            var p = f.height + (c ? -c.y + f.y : 0);
            d = o + p, d > i || u.newline ? (a += s + r, o = 0, d = p, s = f.width) : s = Math.max(s, f.width)
        }
        u.newline || (u.x = a, u.y = o, u.markRedraw(), e === "horizontal" ? a = v + r : o = d + r)
    })
}
var iT = Cu;
si(Cu, "vertical");
si(Cu, "horizontal");

function aT(e, t, r) {
    var n = t.width,
        i = t.height,
        a = lt(e.left, n),
        o = lt(e.top, i),
        s = lt(e.right, n),
        u = lt(e.bottom, i);
    return (isNaN(a) || isNaN(parseFloat(e.left))) && (a = 0), (isNaN(s) || isNaN(parseFloat(e.right))) && (s = n), (isNaN(o) || isNaN(parseFloat(e.top))) && (o = 0), (isNaN(u) || isNaN(parseFloat(e.bottom))) && (u = i), r = $v(r || 0), {
        width: Math.max(s - a - r[1] - r[3], 0),
        height: Math.max(u - o - r[0] - r[2], 0)
    }
}

function Zv(e, t, r) {
    r = $v(r || 0);
    var n = t.width,
        i = t.height,
        a = lt(e.left, n),
        o = lt(e.top, i),
        s = lt(e.right, n),
        u = lt(e.bottom, i),
        l = lt(e.width, n),
        f = lt(e.height, i),
        h = r[2] + r[0],
        c = r[1] + r[3],
        v = e.aspect;
    switch (isNaN(l) && (l = n - s - c - a), isNaN(f) && (f = i - u - h - o), v != null && (isNaN(l) && isNaN(f) && (v > n / i ? l = n * .8 : f = i * .8), isNaN(l) && (l = v * f), isNaN(f) && (f = l / v)), isNaN(a) && (a = n - s - l - c), isNaN(o) && (o = i - u - f - h), e.left || e.right) {
        case "center":
            a = n / 2 - l / 2 - r[3];
            break;
        case "right":
            a = n - l - c;
            break
    }
    switch (e.top || e.bottom) {
        case "middle":
        case "center":
            o = i / 2 - f / 2 - r[0];
            break;
        case "bottom":
            o = i - f - h;
            break
    }
    a = a || 0, o = o || 0, isNaN(l) && (l = n - c - a - (s || 0)), isNaN(f) && (f = i - h - o - (u || 0));
    var d = new nt(a + r[3], o + r[0], l, f);
    return d.margin = r, d
}

function oT(e, t, r, n, i, a) {
    var o = !i || !i.hv || i.hv[0],
        s = !i || !i.hv || i.hv[1],
        u = i && i.boundingMode || "all";
    if (a = a || e, a.x = e.x, a.y = e.y, !o && !s) return !1;
    var l;
    if (u === "raw") l = e.type === "group" ? new nt(0, 0, +t.width || 0, +t.height || 0) : e.getBoundingRect();
    else if (l = e.getBoundingRect(), e.needLocalTransform()) {
        var f = e.getLocalTransform();
        l = l.clone(), l.applyTransform(f)
    }
    var h = Zv(dt({
            width: l.width,
            height: l.height
        }, t), r, n),
        c = o ? h.x - l.x : 0,
        v = s ? h.y - l.y : 0;
    return u === "raw" ? (a.x = c, a.y = v) : (a.x += c, a.y += v), a === e && e.markRedraw(), !0
}

function sT(e, t) {
    return e[Sr[t][0]] != null || e[Sr[t][1]] != null && e[Sr[t][2]] != null
}

function ya(e) {
    var t = e.layoutMode || e.constructor.layoutMode;
    return H(t) ? t : t ? {
        type: t
    } : null
}

function ma(e, t, r) {
    var n = r && r.ignoreSize;
    !F(n) && (n = [n, n]);
    var i = o(Sr[0], 0),
        a = o(Sr[1], 1);
    l(Sr[0], e, i), l(Sr[1], e, a);

    function o(f, h) {
        var c = {},
            v = 0,
            d = {},
            g = 0,
            p = 2;
        if (ra(f, function(_) {
                d[_] = e[_]
            }), ra(f, function(_) {
                s(t, _) && (c[_] = d[_] = t[_]), u(c, _) && v++, u(d, _) && g++
            }), n[h]) return u(t, f[1]) ? d[f[2]] = null : u(t, f[2]) && (d[f[1]] = null), d;
        if (g === p || !v) return d;
        if (v >= p) return c;
        for (var y = 0; y < f.length; y++) {
            var m = f[y];
            if (!s(c, m) && s(e, m)) {
                c[m] = e[m];
                break
            }
        }
        return c
    }

    function s(f, h) {
        return f.hasOwnProperty(h)
    }

    function u(f, h) {
        return f[h] != null && f[h] !== "auto"
    }

    function l(f, h, c) {
        ra(f, function(v) {
            h[v] = c[v]
        })
    }
}

function Kv(e) {
    return fm({}, e)
}

function fm(e, t) {
    return t && e && ra(lm, function(r) {
        t.hasOwnProperty(r) && (e[r] = t[r])
    }), e
}
var hm = Pt(),
    it = function(e) {
        W(t, e);

        function t(r, n, i) {
            var a = e.call(this, r, n, i) || this;
            return a.uid = Ua("ec_cpt_model"), a
        }
        return t.prototype.init = function(r, n, i) {
            this.mergeDefaultAndTheme(r, i)
        }, t.prototype.mergeDefaultAndTheme = function(r, n) {
            var i = ya(this),
                a = i ? Kv(r) : {},
                o = n.getTheme();
            ct(r, o.get(this.mainType)), ct(r, this.getDefaultOption()), i && ma(r, a, i)
        }, t.prototype.mergeOption = function(r, n) {
            ct(this.option, r, !0);
            var i = ya(this);
            i && ma(this.option, r, i)
        }, t.prototype.optionUpdated = function(r, n) {}, t.prototype.getDefaultOption = function() {
            var r = this.constructor;
            if (!wg(r)) return r.defaultOption;
            var n = hm(this);
            if (!n.defaultOption) {
                for (var i = [], a = r; a;) {
                    var o = a.prototype.defaultOption;
                    o && i.push(o), a = a.superClass
                }
                for (var s = {}, u = i.length - 1; u >= 0; u--) s = ct(s, i[u], !0);
                n.defaultOption = s
            }
            return n.defaultOption
        }, t.prototype.getReferringComponents = function(r, n) {
            var i = r + "Index",
                a = r + "Id";
            return Ea(this.ecModel, r, {
                index: this.get(i, !0),
                id: this.get(a, !0)
            }, n)
        }, t.prototype.getBoxLayoutParams = function() {
            var r = this;
            return {
                left: r.get("left"),
                top: r.get("top"),
                right: r.get("right"),
                bottom: r.get("bottom"),
                width: r.get("width"),
                height: r.get("height")
            }
        }, t.prototype.getZLevelKey = function() {
            return ""
        }, t.prototype.setZLevel = function(r) {
            this.option.zlevel = r
        }, t.protoInitialize = function() {
            var r = t.prototype;
            r.type = "component", r.id = "", r.name = "", r.mainType = "", r.subType = "", r.componentIndex = 0
        }(), t
    }(xt);
iv(it, xt);
uu(it);
Xy(it);
qy(it, vm);

function vm(e) {
    var t = [];
    return P(it.getClassesByMainType(e), function(r) {
        t = t.concat(r.dependencies || r.prototype.dependencies || [])
    }), t = Q(t, function(r) {
        return _e(r).main
    }), e !== "dataset" && ft(t, "dataset") <= 0 && t.unshift("dataset"), t
}
var Qv = "";
typeof navigator < "u" && (Qv = navigator.platform || "");
var Gr = "rgba(0, 0, 0, 0.2)";
const cm = {
    darkMode: "auto",
    colorBy: "series",
    color: ["#5470c6", "#91cc75", "#fac858", "#ee6666", "#73c0de", "#3ba272", "#fc8452", "#9a60b4", "#ea7ccc"],
    gradientColor: ["#f6efa6", "#d88273", "#bf444c"],
    aria: {
        decal: {
            decals: [{
                color: Gr,
                dashArrayX: [1, 0],
                dashArrayY: [2, 5],
                symbolSize: 1,
                rotation: Math.PI / 6
            }, {
                color: Gr,
                symbol: "circle",
                dashArrayX: [
                    [8, 8],
                    [0, 8, 8, 0]
                ],
                dashArrayY: [6, 0],
                symbolSize: .8
            }, {
                color: Gr,
                dashArrayX: [1, 0],
                dashArrayY: [4, 3],
                rotation: -Math.PI / 4
            }, {
                color: Gr,
                dashArrayX: [
                    [6, 6],
                    [0, 6, 6, 0]
                ],
                dashArrayY: [6, 0]
            }, {
                color: Gr,
                dashArrayX: [
                    [1, 0],
                    [1, 6]
                ],
                dashArrayY: [1, 0, 6, 0],
                rotation: Math.PI / 4
            }, {
                color: Gr,
                symbol: "triangle",
                dashArrayX: [
                    [9, 9],
                    [0, 9, 9, 0]
                ],
                dashArrayY: [7, 2],
                symbolSize: .75
            }]
        }
    },
    textStyle: {
        fontFamily: Qv.match(/^Win/) ? "Microsoft YaHei" : "sans-serif",
        fontSize: 12,
        fontStyle: "normal",
        fontWeight: "normal"
    },
    blendMode: null,
    stateAnimation: {
        duration: 300,
        easing: "cubicOut"
    },
    animation: "auto",
    animationDuration: 1e3,
    animationDurationUpdate: 500,
    animationEasing: "cubicInOut",
    animationEasingUpdate: "cubicInOut",
    animationThreshold: 2e3,
    progressiveThreshold: 3e3,
    progressive: 400,
    hoverLayerThreshold: 3e3,
    useUTC: !1
};
var Jv = Z(["tooltip", "label", "itemName", "itemId", "itemGroupId", "itemChildGroupId", "seriesName"]),
    De = "original",
    Ht = "arrayRows",
    fe = "objectRows",
    Me = "keyedColumns",
    qe = "typedArray",
    jv = "unknown",
    Le = "column",
    ln = "row",
    mt = {
        Must: 1,
        Might: 2,
        Not: 3
    },
    tc = Pt();

function dm(e) {
    tc(e).datasetMap = Z()
}

function uT(e, t, r) {
    var n = {},
        i = Pu(t);
    if (!i || !e) return n;
    var a = [],
        o = [],
        s = t.ecModel,
        u = tc(s).datasetMap,
        l = i.uid + "_" + r.seriesLayoutBy,
        f, h;
    e = e.slice(), P(e, function(g, p) {
        var y = H(g) ? g : e[p] = {
            name: g
        };
        y.type === "ordinal" && f == null && (f = p, h = d(y)), n[y.name] = []
    });
    var c = u.get(l) || u.set(l, {
        categoryWayDim: h,
        valueWayDim: 0
    });
    P(e, function(g, p) {
        var y = g.name,
            m = d(g);
        if (f == null) {
            var _ = c.valueWayDim;
            v(n[y], _, m), v(o, _, m), c.valueWayDim += m
        } else if (f === p) v(n[y], 0, m), v(a, 0, m);
        else {
            var _ = c.categoryWayDim;
            v(n[y], _, m), v(o, _, m), c.categoryWayDim += m
        }
    });

    function v(g, p, y) {
        for (var m = 0; m < y; m++) g.push(p + m)
    }

    function d(g) {
        var p = g.dimsDef;
        return p ? p.length : 1
    }
    return a.length && (n.itemName = a), o.length && (n.seriesName = o), n
}

function pm(e, t, r) {
    var n = {},
        i = Pu(e);
    if (!i) return n;
    var a = t.sourceFormat,
        o = t.dimensionsDefine,
        s;
    (a === fe || a === Me) && P(o, function(f, h) {
        (H(f) ? f.name : f) === "name" && (s = h)
    });
    var u = function() {
        for (var f = {}, h = {}, c = [], v = 0, d = Math.min(5, r); v < d; v++) {
            var g = rc(t.data, a, t.seriesLayoutBy, o, t.startIndex, v);
            c.push(g);
            var p = g === mt.Not;
            if (p && f.v == null && v !== s && (f.v = v), (f.n == null || f.n === f.v || !p && c[f.n] === mt.Not) && (f.n = v), y(f) && c[f.n] !== mt.Not) return f;
            p || (g === mt.Might && h.v == null && v !== s && (h.v = v), (h.n == null || h.n === h.v) && (h.n = v))
        }

        function y(m) {
            return m.v != null && m.n != null
        }
        return y(f) ? f : y(h) ? h : null
    }();
    if (u) {
        n.value = [u.v];
        var l = s ? ? u.n;
        n.itemName = [l], n.seriesName = [l]
    }
    return n
}

function Pu(e) {
    var t = e.get("data", !0);
    if (!t) return Ea(e.ecModel, "dataset", {
        index: e.get("datasetIndex", !0),
        id: e.get("datasetId", !0)
    }, ou).models[0]
}

function gm(e) {
    return !e.get("transform", !0) && !e.get("fromTransformResult", !0) ? [] : Ea(e.ecModel, "dataset", {
        index: e.get("fromDatasetIndex", !0),
        id: e.get("fromDatasetId", !0)
    }, ou).models
}

function ec(e, t) {
    return rc(e.data, e.sourceFormat, e.seriesLayoutBy, e.dimensionsDefine, e.startIndex, t)
}

function rc(e, t, r, n, i, a) {
    var o, s = 5;
    if (zt(e)) return mt.Not;
    var u, l;
    if (n) {
        var f = n[a];
        H(f) ? (u = f.name, l = f.type) : X(f) && (u = f)
    }
    if (l != null) return l === "ordinal" ? mt.Must : mt.Not;
    if (t === Ht) {
        var h = e;
        if (r === ln) {
            for (var c = h[a], v = 0; v < (c || []).length && v < s; v++)
                if ((o = S(c[i + v])) != null) return o
        } else
            for (var v = 0; v < h.length && v < s; v++) {
                var d = h[i + v];
                if (d && (o = S(d[a])) != null) return o
            }
    } else if (t === fe) {
        var g = e;
        if (!u) return mt.Not;
        for (var v = 0; v < g.length && v < s; v++) {
            var p = g[v];
            if (p && (o = S(p[u])) != null) return o
        }
    } else if (t === Me) {
        var y = e;
        if (!u) return mt.Not;
        var c = y[u];
        if (!c || zt(c)) return mt.Not;
        for (var v = 0; v < c.length && v < s; v++)
            if ((o = S(c[v])) != null) return o
    } else if (t === De)
        for (var m = e, v = 0; v < m.length && v < s; v++) {
            var p = m[v],
                _ = La(p);
            if (!F(_)) return mt.Not;
            if ((o = S(_[a])) != null) return o
        }

    function S(T) {
        var w = X(T);
        if (T != null && Number.isFinite(Number(T)) && T !== "") return w ? mt.Might : mt.Not;
        if (w && T !== "-") return mt.Must
    }
    return mt.Not
}
var Ns = Z();

function lT(e, t) {
    Te(Ns.get(e) == null && t), Ns.set(e, t)
}

function ym(e, t, r) {
    var n = Ns.get(t);
    if (!n) return r;
    var i = n(e);
    return i ? r.concat(i) : r
}
var sf = Pt(),
    mm = Pt(),
    Au = function() {
        function e() {}
        return e.prototype.getColorFromPalette = function(t, r, n) {
            var i = St(this.get("color", !0)),
                a = this.get("colorLayer", !0);
            return nc(this, sf, i, a, t, r, n)
        }, e.prototype.clearColorPalette = function() {
            Sm(this, sf)
        }, e
    }();

function fT(e, t, r, n) {
    var i = St(e.get(["aria", "decal", "decals"]));
    return nc(e, mm, i, null, t, r, n)
}

function _m(e, t) {
    for (var r = e.length, n = 0; n < r; n++)
        if (e[n].length > t) return e[n];
    return e[r - 1]
}

function nc(e, t, r, n, i, a, o) {
    a = a || e;
    var s = t(a),
        u = s.paletteIdx || 0,
        l = s.paletteNameMap = s.paletteNameMap || {};
    if (l.hasOwnProperty(i)) return l[i];
    var f = o == null || !n ? r : _m(n, o);
    if (f = f || r, !(!f || !f.length)) {
        var h = f[u];
        return i && (l[i] = h), s.paletteIdx = (u + 1) % f.length, h
    }
}

function Sm(e, t) {
    t(e).paletteIdx = 0, t(e).paletteNameMap = {}
}
var Ii, wn, uf, lf = "\0_ec_inner",
    wm = 1,
    Ru = function(e) {
        W(t, e);

        function t() {
            return e !== null && e.apply(this, arguments) || this
        }
        return t.prototype.init = function(r, n, i, a, o, s) {
            a = a || {}, this.option = null, this._theme = new xt(a), this._locale = new xt(o), this._optionManager = s
        }, t.prototype.setOption = function(r, n, i) {
            var a = vf(n);
            this._optionManager.setOption(r, i, a), this._resetOption(null, a)
        }, t.prototype.resetOption = function(r, n) {
            return this._resetOption(r, vf(n))
        }, t.prototype._resetOption = function(r, n) {
            var i = !1,
                a = this._optionManager;
            if (!r || r === "recreate") {
                var o = a.mountOption(r === "recreate");
                !this.option || r === "recreate" ? uf(this, o) : (this.restoreData(), this._mergeOption(o, n)), i = !0
            }
            if ((r === "timeline" || r === "media") && this.restoreData(), !r || r === "recreate" || r === "timeline") {
                var s = a.getTimelineOption(this);
                s && (i = !0, this._mergeOption(s, n))
            }
            if (!r || r === "recreate" || r === "media") {
                var u = a.getMediaOption(this);
                u.length && P(u, function(l) {
                    i = !0, this._mergeOption(l, n)
                }, this)
            }
            return i
        }, t.prototype.mergeOption = function(r) {
            this._mergeOption(r, null)
        }, t.prototype._mergeOption = function(r, n) {
            var i = this.option,
                a = this._componentsMap,
                o = this._componentsCount,
                s = [],
                u = Z(),
                l = n && n.replaceMergeMainTypeMap;
            dm(this), P(r, function(h, c) {
                h != null && (it.hasClass(c) ? c && (s.push(c), u.set(c, !0)) : i[c] = i[c] == null ? tt(h) : ct(i[c], h, !0))
            }), l && l.each(function(h, c) {
                it.hasClass(c) && !u.get(c) && (s.push(c), u.set(c, !0))
            }), it.topologicalTravel(s, it.getAllClassMainTypes(), f, this);

            function f(h) {
                var c = ym(this, h, St(r[h])),
                    v = a.get(h),
                    d = v ? l && l.get(h) ? "replaceMerge" : "normalMerge" : "replaceAll",
                    g = sg(v, c, d);
                dg(g, h, it), i[h] = null, a.set(h, null), o.set(h, 0);
                var p = [],
                    y = [],
                    m = 0,
                    _;
                P(g, function(S, T) {
                    var w = S.existing,
                        b = S.newOption;
                    if (!b) w && (w.mergeOption({}, this), w.optionUpdated({}, !1));
                    else {
                        var M = h === "series",
                            D = it.getClass(h, S.keyInfo.subType, !M);
                        if (!D) return;
                        if (h === "tooltip") {
                            if (_) return;
                            _ = !0
                        }
                        if (w && w.constructor === D) w.name = S.keyInfo.name, w.mergeOption(b, this), w.optionUpdated(b, !1);
                        else {
                            var C = I({
                                componentIndex: T
                            }, S.keyInfo);
                            w = new D(b, this, this, C), I(w, C), S.brandNew && (w.__requireNewView = !0), w.init(b, this, this), w.optionUpdated(null, !0)
                        }
                    }
                    w ? (p.push(w.option), y.push(w), m++) : (p.push(void 0), y.push(void 0))
                }, this), i[h] = p, a.set(h, y), o.set(h, m), h === "series" && Ii(this)
            }
            this._seriesIndices || Ii(this)
        }, t.prototype.getOption = function() {
            var r = tt(this.option);
            return P(r, function(n, i) {
                if (it.hasClass(i)) {
                    for (var a = St(n), o = a.length, s = !1, u = o - 1; u >= 0; u--) a[u] && !jn(a[u]) ? s = !0 : (a[u] = null, !s && o--);
                    a.length = o, r[i] = a
                }
            }), delete r[lf], r
        }, t.prototype.getTheme = function() {
            return this._theme
        }, t.prototype.getLocaleModel = function() {
            return this._locale
        }, t.prototype.setUpdatePayload = function(r) {
            this._payload = r
        }, t.prototype.getUpdatePayload = function() {
            return this._payload
        }, t.prototype.getComponent = function(r, n) {
            var i = this._componentsMap.get(r);
            if (i) {
                var a = i[n || 0];
                if (a) return a;
                if (n == null) {
                    for (var o = 0; o < i.length; o++)
                        if (i[o]) return i[o]
                }
            }
        }, t.prototype.queryComponents = function(r) {
            var n = r.mainType;
            if (!n) return [];
            var i = r.index,
                a = r.id,
                o = r.name,
                s = this._componentsMap.get(n);
            if (!s || !s.length) return [];
            var u;
            return i != null ? (u = [], P(St(i), function(l) {
                s[l] && u.push(s[l])
            })) : a != null ? u = ff("id", a, s) : o != null ? u = ff("name", o, s) : u = ie(s, function(l) {
                return !!l
            }), hf(u, r)
        }, t.prototype.findComponents = function(r) {
            var n = r.query,
                i = r.mainType,
                a = s(n),
                o = a ? this.queryComponents(a) : ie(this._componentsMap.get(i), function(l) {
                    return !!l
                });
            return u(hf(o, r));

            function s(l) {
                var f = i + "Index",
                    h = i + "Id",
                    c = i + "Name";
                return l && (l[f] != null || l[h] != null || l[c] != null) ? {
                    mainType: i,
                    index: l[f],
                    id: l[h],
                    name: l[c]
                } : null
            }

            function u(l) {
                return r.filter ? ie(l, r.filter) : l
            }
        }, t.prototype.eachComponent = function(r, n, i) {
            var a = this._componentsMap;
            if (rt(r)) {
                var o = n,
                    s = r;
                a.each(function(h, c) {
                    for (var v = 0; h && v < h.length; v++) {
                        var d = h[v];
                        d && s.call(o, c, d, d.componentIndex)
                    }
                })
            } else
                for (var u = X(r) ? a.get(r) : H(r) ? this.findComponents(r) : null, l = 0; u && l < u.length; l++) {
                    var f = u[l];
                    f && n.call(i, f, f.componentIndex)
                }
        }, t.prototype.getSeriesByName = function(r) {
            var n = ue(r, null);
            return ie(this._componentsMap.get("series"), function(i) {
                return !!i && n != null && i.name === n
            })
        }, t.prototype.getSeriesByIndex = function(r) {
            return this._componentsMap.get("series")[r]
        }, t.prototype.getSeriesByType = function(r) {
            return ie(this._componentsMap.get("series"), function(n) {
                return !!n && n.subType === r
            })
        }, t.prototype.getSeries = function() {
            return ie(this._componentsMap.get("series"), function(r) {
                return !!r
            })
        }, t.prototype.getSeriesCount = function() {
            return this._componentsCount.get("series")
        }, t.prototype.eachSeries = function(r, n) {
            wn(this), P(this._seriesIndices, function(i) {
                var a = this._componentsMap.get("series")[i];
                r.call(n, a, i)
            }, this)
        }, t.prototype.eachRawSeries = function(r, n) {
            P(this._componentsMap.get("series"), function(i) {
                i && r.call(n, i, i.componentIndex)
            })
        }, t.prototype.eachSeriesByType = function(r, n, i) {
            wn(this), P(this._seriesIndices, function(a) {
                var o = this._componentsMap.get("series")[a];
                o.subType === r && n.call(i, o, a)
            }, this)
        }, t.prototype.eachRawSeriesByType = function(r, n, i) {
            return P(this.getSeriesByType(r), n, i)
        }, t.prototype.isSeriesFiltered = function(r) {
            return wn(this), this._seriesIndicesMap.get(r.componentIndex) == null
        }, t.prototype.getCurrentSeriesIndices = function() {
            return (this._seriesIndices || []).slice()
        }, t.prototype.filterSeries = function(r, n) {
            wn(this);
            var i = [];
            P(this._seriesIndices, function(a) {
                var o = this._componentsMap.get("series")[a];
                r.call(n, o, a) && i.push(a)
            }, this), this._seriesIndices = i, this._seriesIndicesMap = Z(i)
        }, t.prototype.restoreData = function(r) {
            Ii(this);
            var n = this._componentsMap,
                i = [];
            n.each(function(a, o) {
                it.hasClass(o) && i.push(o)
            }), it.topologicalTravel(i, it.getAllClassMainTypes(), function(a) {
                P(n.get(a), function(o) {
                    o && (a !== "series" || !Tm(o, r)) && o.restoreData()
                })
            })
        }, t.internalField = function() {
            Ii = function(r) {
                var n = r._seriesIndices = [];
                P(r._componentsMap.get("series"), function(i) {
                    i && n.push(i.componentIndex)
                }), r._seriesIndicesMap = Z(n)
            }, wn = function(r) {}, uf = function(r, n) {
                r.option = {}, r.option[lf] = wm, r._componentsMap = Z({
                    series: []
                }), r._componentsCount = Z();
                var i = n.aria;
                H(i) && i.enabled == null && (i.enabled = !0), bm(n, r._theme.option), ct(n, cm, !1), r._mergeOption(n, null)
            }
        }(), t
    }(xt);

function Tm(e, t) {
    if (t) {
        var r = t.seriesIndex,
            n = t.seriesId,
            i = t.seriesName;
        return r != null && e.componentIndex !== r || n != null && e.id !== n || i != null && e.name !== i
    }
}

function bm(e, t) {
    var r = e.color && !e.colorLayer;
    P(t, function(n, i) {
        i === "colorLayer" && r || it.hasClass(i) || (typeof n == "object" ? e[i] = e[i] ? ct(e[i], n, !1) : tt(n) : e[i] == null && (e[i] = n))
    })
}

function ff(e, t, r) {
    if (F(t)) {
        var n = Z();
        return P(t, function(a) {
            if (a != null) {
                var o = ue(a, null);
                o != null && n.set(a, !0)
            }
        }), ie(r, function(a) {
            return a && n.get(a[e])
        })
    } else {
        var i = ue(t, null);
        return ie(r, function(a) {
            return a && i != null && a[e] === i
        })
    }
}

function hf(e, t) {
    return t.hasOwnProperty("subType") ? ie(e, function(r) {
        return r && r.subType === t.subType
    }) : e
}

function vf(e) {
    var t = Z();
    return e && P(St(e.replaceMerge), function(r) {
        t.set(r, !0)
    }), {
        replaceMergeMainTypeMap: t
    }
}
Ie(Ru, Au);
var Dm = ["getDom", "getZr", "getWidth", "getHeight", "getDevicePixelRatio", "dispatchAction", "isSSR", "isDisposed", "on", "off", "getDataURL", "getConnectedDataURL", "getOption", "getId", "updateLabelLayout"],
    ic = function() {
        function e(t) {
            P(Dm, function(r) {
                this[r] = Ct(t[r], t)
            }, this)
        }
        return e
    }(),
    Bo = {},
    ac = function() {
        function e() {
            this._coordinateSystems = []
        }
        return e.prototype.create = function(t, r) {
            var n = [];
            P(Bo, function(i, a) {
                var o = i.create(t, r);
                n = n.concat(o || [])
            }), this._coordinateSystems = n
        }, e.prototype.update = function(t, r) {
            P(this._coordinateSystems, function(n) {
                n.update && n.update(t, r)
            })
        }, e.prototype.getCoordinateSystems = function() {
            return this._coordinateSystems.slice()
        }, e.register = function(t, r) {
            Bo[t] = r
        }, e.get = function(t) {
            return Bo[t]
        }, e
    }(),
    Mm = /^(min|max)?(.+)$/,
    Cm = function() {
        function e(t) {
            this._timelineOptions = [], this._mediaList = [], this._currentMediaIndices = [], this._api = t
        }
        return e.prototype.setOption = function(t, r, n) {
            t && (P(St(t.series), function(o) {
                o && o.data && zt(o.data) && aa(o.data)
            }), P(St(t.dataset), function(o) {
                o && o.source && zt(o.source) && aa(o.source)
            })), t = tt(t);
            var i = this._optionBackup,
                a = Pm(t, r, !i);
            this._newBaseOption = a.baseOption, i ? (a.timelineOptions.length && (i.timelineOptions = a.timelineOptions), a.mediaList.length && (i.mediaList = a.mediaList), a.mediaDefault && (i.mediaDefault = a.mediaDefault)) : this._optionBackup = a
        }, e.prototype.mountOption = function(t) {
            var r = this._optionBackup;
            return this._timelineOptions = r.timelineOptions, this._mediaList = r.mediaList, this._mediaDefault = r.mediaDefault, this._currentMediaIndices = [], tt(t ? r.baseOption : this._newBaseOption)
        }, e.prototype.getTimelineOption = function(t) {
            var r, n = this._timelineOptions;
            if (n.length) {
                var i = t.getComponent("timeline");
                i && (r = tt(n[i.getCurrentIndex()]))
            }
            return r
        }, e.prototype.getMediaOption = function(t) {
            var r = this._api.getWidth(),
                n = this._api.getHeight(),
                i = this._mediaList,
                a = this._mediaDefault,
                o = [],
                s = [];
            if (!i.length && !a) return s;
            for (var u = 0, l = i.length; u < l; u++) Am(i[u].query, r, n) && o.push(u);
            return !o.length && a && (o = [-1]), o.length && !xm(o, this._currentMediaIndices) && (s = Q(o, function(f) {
                return tt(f === -1 ? a.option : i[f].option)
            })), this._currentMediaIndices = o, s
        }, e
    }();

function Pm(e, t, r) {
    var n = [],
        i, a, o = e.baseOption,
        s = e.timeline,
        u = e.options,
        l = e.media,
        f = !!e.media,
        h = !!(u || s || o && o.timeline);
    o ? (a = o, a.timeline || (a.timeline = s)) : ((h || f) && (e.options = e.media = null), a = e), f && F(l) && P(l, function(v) {
        v && v.option && (v.query ? n.push(v) : i || (i = v))
    }), c(a), P(u, function(v) {
        return c(v)
    }), P(n, function(v) {
        return c(v.option)
    });

    function c(v) {
        P(t, function(d) {
            d(v, r)
        })
    }
    return {
        baseOption: a,
        timelineOptions: u || [],
        mediaDefault: i,
        mediaList: n
    }
}

function Am(e, t, r) {
    var n = {
            width: t,
            height: r,
            aspectratio: t / r
        },
        i = !0;
    return P(e, function(a, o) {
        var s = o.match(Mm);
        if (!(!s || !s[1] || !s[2])) {
            var u = s[1],
                l = s[2].toLowerCase();
            Rm(n[l], a, u) || (i = !1)
        }
    }), i
}

function Rm(e, t, r) {
    return r === "min" ? e >= t : r === "max" ? e <= t : e === t
}

function xm(e, t) {
    return e.join(",") === t.join(",")
}
var Jt = P,
    ri = H,
    cf = ["areaStyle", "lineStyle", "nodeStyle", "linkStyle", "chordStyle", "label", "labelLine"];

function zo(e) {
    var t = e && e.itemStyle;
    if (t)
        for (var r = 0, n = cf.length; r < n; r++) {
            var i = cf[r],
                a = t.normal,
                o = t.emphasis;
            a && a[i] && (e[i] = e[i] || {}, e[i].normal ? ct(e[i].normal, a[i]) : e[i].normal = a[i], a[i] = null), o && o[i] && (e[i] = e[i] || {}, e[i].emphasis ? ct(e[i].emphasis, o[i]) : e[i].emphasis = o[i], o[i] = null)
        }
}

function Mt(e, t, r) {
    if (e && e[t] && (e[t].normal || e[t].emphasis)) {
        var n = e[t].normal,
            i = e[t].emphasis;
        n && (r ? (e[t].normal = e[t].emphasis = null, dt(e[t], n)) : e[t] = n), i && (e.emphasis = e.emphasis || {}, e.emphasis[t] = i, i.focus && (e.emphasis.focus = i.focus), i.blurScope && (e.emphasis.blurScope = i.blurScope))
    }
}

function Nn(e) {
    Mt(e, "itemStyle"), Mt(e, "lineStyle"), Mt(e, "areaStyle"), Mt(e, "label"), Mt(e, "labelLine"), Mt(e, "upperLabel"), Mt(e, "edgeLabel")
}

function ut(e, t) {
    var r = ri(e) && e[t],
        n = ri(r) && r.textStyle;
    if (n)
        for (var i = 0, a = _l.length; i < a; i++) {
            var o = _l[i];
            n.hasOwnProperty(o) && (r[o] = n[o])
        }
}

function $t(e) {
    e && (Nn(e), ut(e, "label"), e.emphasis && ut(e.emphasis, "label"))
}

function Lm(e) {
    if (ri(e)) {
        zo(e), Nn(e), ut(e, "label"), ut(e, "upperLabel"), ut(e, "edgeLabel"), e.emphasis && (ut(e.emphasis, "label"), ut(e.emphasis, "upperLabel"), ut(e.emphasis, "edgeLabel"));
        var t = e.markPoint;
        t && (zo(t), $t(t));
        var r = e.markLine;
        r && (zo(r), $t(r));
        var n = e.markArea;
        n && $t(n);
        var i = e.data;
        if (e.type === "graph") {
            i = i || e.nodes;
            var a = e.links || e.edges;
            if (a && !zt(a))
                for (var o = 0; o < a.length; o++) $t(a[o]);
            P(e.categories, function(l) {
                Nn(l)
            })
        }
        if (i && !zt(i))
            for (var o = 0; o < i.length; o++) $t(i[o]);
        if (t = e.markPoint, t && t.data)
            for (var s = t.data, o = 0; o < s.length; o++) $t(s[o]);
        if (r = e.markLine, r && r.data)
            for (var u = r.data, o = 0; o < u.length; o++) F(u[o]) ? ($t(u[o][0]), $t(u[o][1])) : $t(u[o]);
        e.type === "gauge" ? (ut(e, "axisLabel"), ut(e, "title"), ut(e, "detail")) : e.type === "treemap" ? (Mt(e.breadcrumb, "itemStyle"), P(e.levels, function(l) {
            Nn(l)
        })) : e.type === "tree" && Nn(e.leaves)
    }
}

function Ae(e) {
    return F(e) ? e : e ? [e] : []
}

function df(e) {
    return (F(e) ? e[0] : e) || {}
}

function Im(e, t) {
    Jt(Ae(e.series), function(n) {
        ri(n) && Lm(n)
    });
    var r = ["xAxis", "yAxis", "radiusAxis", "angleAxis", "singleAxis", "parallelAxis", "radar"];
    t && r.push("valueAxis", "categoryAxis", "logAxis", "timeAxis"), Jt(r, function(n) {
        Jt(Ae(e[n]), function(i) {
            i && (ut(i, "axisLabel"), ut(i.axisPointer, "label"))
        })
    }), Jt(Ae(e.parallel), function(n) {
        var i = n && n.parallelAxisDefault;
        ut(i, "axisLabel"), ut(i && i.axisPointer, "label")
    }), Jt(Ae(e.calendar), function(n) {
        Mt(n, "itemStyle"), ut(n, "dayLabel"), ut(n, "monthLabel"), ut(n, "yearLabel")
    }), Jt(Ae(e.radar), function(n) {
        ut(n, "name"), n.name && n.axisName == null && (n.axisName = n.name, delete n.name), n.nameGap != null && n.axisNameGap == null && (n.axisNameGap = n.nameGap, delete n.nameGap)
    }), Jt(Ae(e.geo), function(n) {
        ri(n) && ($t(n), Jt(Ae(n.regions), function(i) {
            $t(i)
        }))
    }), Jt(Ae(e.timeline), function(n) {
        $t(n), Mt(n, "label"), Mt(n, "itemStyle"), Mt(n, "controlStyle", !0);
        var i = n.data;
        F(i) && P(i, function(a) {
            H(a) && (Mt(a, "label"), Mt(a, "itemStyle"))
        })
    }), Jt(Ae(e.toolbox), function(n) {
        Mt(n, "iconStyle"), Jt(n.feature, function(i) {
            Mt(i, "iconStyle")
        })
    }), ut(df(e.axisPointer), "label"), ut(df(e.tooltip).axisPointer, "label")
}

function Em(e, t) {
    for (var r = t.split(","), n = e, i = 0; i < r.length && (n = n && n[r[i]], n != null); i++);
    return n
}

function Om(e, t, r, n) {
    for (var i = t.split(","), a = e, o, s = 0; s < i.length - 1; s++) o = i[s], a[o] == null && (a[o] = {}), a = a[o];
    a[i[s]] == null && (a[i[s]] = r)
}

function pf(e) {
    e && P(km, function(t) {
        t[0] in e && !(t[1] in e) && (e[t[1]] = e[t[0]])
    })
}
var km = [
        ["x", "left"],
        ["y", "top"],
        ["x2", "right"],
        ["y2", "bottom"]
    ],
    Fm = ["grid", "geo", "parallel", "legend", "toolbox", "title", "visualMap", "dataZoom", "timeline"],
    Ho = [
        ["borderRadius", "barBorderRadius"],
        ["borderColor", "barBorderColor"],
        ["borderWidth", "barBorderWidth"]
    ];

function Tn(e) {
    var t = e && e.itemStyle;
    if (t)
        for (var r = 0; r < Ho.length; r++) {
            var n = Ho[r][1],
                i = Ho[r][0];
            t[n] != null && (t[i] = t[n])
        }
}

function gf(e) {
    e && e.alignTo === "edge" && e.margin != null && e.edgeDistance == null && (e.edgeDistance = e.margin)
}

function yf(e) {
    e && e.downplay && !e.blur && (e.blur = e.downplay)
}

function Nm(e) {
    e && e.focusNodeAdjacency != null && (e.emphasis = e.emphasis || {}, e.emphasis.focus == null && (e.emphasis.focus = "adjacency"))
}

function oc(e, t) {
    if (e)
        for (var r = 0; r < e.length; r++) t(e[r]), e[r] && oc(e[r].children, t)
}

function sc(e, t) {
    Im(e, t), e.series = St(e.series), P(e.series, function(r) {
        if (H(r)) {
            var n = r.type;
            if (n === "line") r.clipOverflow != null && (r.clip = r.clipOverflow);
            else if (n === "pie" || n === "gauge") {
                r.clockWise != null && (r.clockwise = r.clockWise), gf(r.label);
                var i = r.data;
                if (i && !zt(i))
                    for (var a = 0; a < i.length; a++) gf(i[a]);
                r.hoverOffset != null && (r.emphasis = r.emphasis || {}, (r.emphasis.scaleSize = null) && (r.emphasis.scaleSize = r.hoverOffset))
            } else if (n === "gauge") {
                var o = Em(r, "pointer.color");
                o != null && Om(r, "itemStyle.color", o)
            } else if (n === "bar") {
                Tn(r), Tn(r.backgroundStyle), Tn(r.emphasis);
                var i = r.data;
                if (i && !zt(i))
                    for (var a = 0; a < i.length; a++) typeof i[a] == "object" && (Tn(i[a]), Tn(i[a] && i[a].emphasis))
            } else if (n === "sunburst") {
                var s = r.highlightPolicy;
                s && (r.emphasis = r.emphasis || {}, r.emphasis.focus || (r.emphasis.focus = s)), yf(r), oc(r.data, yf)
            } else n === "graph" || n === "sankey" ? Nm(r) : n === "map" && (r.mapType && !r.map && (r.map = r.mapType), r.mapLocation && dt(r, r.mapLocation));
            r.hoverAnimation != null && (r.emphasis = r.emphasis || {}, r.emphasis && r.emphasis.scale == null && (r.emphasis.scale = r.hoverAnimation)), pf(r)
        }
    }), e.dataRange && (e.visualMap = e.dataRange), P(Fm, function(r) {
        var n = e[r];
        n && (F(n) || (n = [n]), P(n, function(i) {
            pf(i)
        }))
    })
}

function Bm(e) {
    var t = Z();
    e.eachSeries(function(r) {
        var n = r.get("stack");
        if (n) {
            var i = t.get(n) || t.set(n, []),
                a = r.getData(),
                o = {
                    stackResultDimension: a.getCalculationInfo("stackResultDimension"),
                    stackedOverDimension: a.getCalculationInfo("stackedOverDimension"),
                    stackedDimension: a.getCalculationInfo("stackedDimension"),
                    stackedByDimension: a.getCalculationInfo("stackedByDimension"),
                    isStackedByIndex: a.getCalculationInfo("isStackedByIndex"),
                    data: a,
                    seriesModel: r
                };
            if (!o.stackedDimension || !(o.isStackedByIndex || o.stackedByDimension)) return;
            i.length && a.setCalculationInfo("stackedOnSeries", i[i.length - 1].seriesModel), i.push(o)
        }
    }), t.each(zm)
}

function zm(e) {
    P(e, function(t, r) {
        var n = [],
            i = [NaN, NaN],
            a = [t.stackResultDimension, t.stackedOverDimension],
            o = t.data,
            s = t.isStackedByIndex,
            u = t.seriesModel.get("stackStrategy") || "samesign";
        o.modify(a, function(l, f, h) {
            var c = o.get(t.stackedDimension, h);
            if (isNaN(c)) return i;
            var v, d;
            s ? d = o.getRawIndex(h) : v = o.get(t.stackedByDimension, h);
            for (var g = NaN, p = r - 1; p >= 0; p--) {
                var y = e[p];
                if (s || (d = y.data.rawIndexOf(y.stackedByDimension, v)), d >= 0) {
                    var m = y.data.getByRawIndex(y.stackResultDimension, d);
                    if (u === "all" || u === "positive" && m > 0 || u === "negative" && m < 0 || u === "samesign" && c >= 0 && m > 0 || u === "samesign" && c <= 0 && m < 0) {
                        c = ng(c, m), g = m;
                        break
                    }
                }
            }
            return n[0] = c, n[1] = g, n
        })
    })
}
var Ya = function() {
    function e(t) {
        this.data = t.data || (t.sourceFormat === Me ? {} : []), this.sourceFormat = t.sourceFormat || jv, this.seriesLayoutBy = t.seriesLayoutBy || Le, this.startIndex = t.startIndex || 0, this.dimensionsDetectedCount = t.dimensionsDetectedCount, this.metaRawOption = t.metaRawOption;
        var r = this.dimensionsDefine = t.dimensionsDefine;
        if (r)
            for (var n = 0; n < r.length; n++) {
                var i = r[n];
                i.type == null && ec(this, n) === mt.Must && (i.type = "ordinal")
            }
    }
    return e
}();

function xu(e) {
    return e instanceof Ya
}

function Bs(e, t, r) {
    r = r || lc(e);
    var n = t.seriesLayoutBy,
        i = Gm(e, r, n, t.sourceHeader, t.dimensions),
        a = new Ya({
            data: e,
            sourceFormat: r,
            seriesLayoutBy: n,
            dimensionsDefine: i.dimensionsDefine,
            startIndex: i.startIndex,
            dimensionsDetectedCount: i.dimensionsDetectedCount,
            metaRawOption: tt(t)
        });
    return a
}

function uc(e) {
    return new Ya({
        data: e,
        sourceFormat: zt(e) ? qe : De
    })
}

function Hm(e) {
    return new Ya({
        data: e.data,
        sourceFormat: e.sourceFormat,
        seriesLayoutBy: e.seriesLayoutBy,
        dimensionsDefine: tt(e.dimensionsDefine),
        startIndex: e.startIndex,
        dimensionsDetectedCount: e.dimensionsDetectedCount
    })
}

function lc(e) {
    var t = jv;
    if (zt(e)) t = qe;
    else if (F(e)) {
        e.length === 0 && (t = Ht);
        for (var r = 0, n = e.length; r < n; r++) {
            var i = e[r];
            if (i != null) {
                if (F(i) || zt(i)) {
                    t = Ht;
                    break
                } else if (H(i)) {
                    t = fe;
                    break
                }
            }
        }
    } else if (H(e)) {
        for (var a in e)
            if (Pr(e, a) && Bt(e[a])) {
                t = Me;
                break
            }
    }
    return t
}

function Gm(e, t, r, n, i) {
    var a, o;
    if (!e) return {
        dimensionsDefine: mf(i),
        startIndex: o,
        dimensionsDetectedCount: a
    };
    if (t === Ht) {
        var s = e;
        n === "auto" || n == null ? _f(function(l) {
            l != null && l !== "-" && (X(l) ? o == null && (o = 1) : o = 0)
        }, r, s, 10) : o = at(n) ? n : n ? 1 : 0, !i && o === 1 && (i = [], _f(function(l, f) {
            i[f] = l != null ? l + "" : ""
        }, r, s, 1 / 0)), a = i ? i.length : r === ln ? s.length : s[0] ? s[0].length : null
    } else if (t === fe) i || (i = Vm(e));
    else if (t === Me) i || (i = [], P(e, function(l, f) {
        i.push(f)
    }));
    else if (t === De) {
        var u = La(e[0]);
        a = F(u) && u.length || 1
    }
    return {
        startIndex: o,
        dimensionsDefine: mf(i),
        dimensionsDetectedCount: a
    }
}

function Vm(e) {
    for (var t = 0, r; t < e.length && !(r = e[t++]););
    if (r) return ht(r)
}

function mf(e) {
    if (e) {
        var t = Z();
        return Q(e, function(r, n) {
            r = H(r) ? r : {
                name: r
            };
            var i = {
                name: r.name,
                displayName: r.displayName,
                type: r.type
            };
            if (i.name == null) return i;
            i.name += "", i.displayName == null && (i.displayName = i.name);
            var a = t.get(i.name);
            return a ? i.name += "-" + a.count++ : t.set(i.name, {
                count: 1
            }), i
        })
    }
}

function _f(e, t, r, n) {
    if (t === ln)
        for (var i = 0; i < r.length && i < n; i++) e(r[i] ? r[i][0] : null, i);
    else
        for (var a = r[0] || [], i = 0; i < a.length && i < n; i++) e(a[i], i)
}

function fc(e) {
    var t = e.sourceFormat;
    return t === fe || t === Me
}
var pr, gr, yr, Sf, wf, hc = function() {
        function e(t, r) {
            var n = xu(t) ? t : uc(t);
            this._source = n;
            var i = this._data = n.data;
            n.sourceFormat === qe && (this._offset = 0, this._dimSize = r, this._data = i), wf(this, i, n)
        }
        return e.prototype.getSource = function() {
            return this._source
        }, e.prototype.count = function() {
            return 0
        }, e.prototype.getItem = function(t, r) {}, e.prototype.appendData = function(t) {}, e.prototype.clean = function() {}, e.protoInitialize = function() {
            var t = e.prototype;
            t.pure = !1, t.persistent = !0
        }(), e.internalField = function() {
            var t;
            wf = function(o, s, u) {
                var l = u.sourceFormat,
                    f = u.seriesLayoutBy,
                    h = u.startIndex,
                    c = u.dimensionsDefine,
                    v = Sf[Lu(l, f)];
                if (I(o, v), l === qe) o.getItem = r, o.count = i, o.fillStorage = n;
                else {
                    var d = vc(l, f);
                    o.getItem = Ct(d, null, s, h, c);
                    var g = cc(l, f);
                    o.count = Ct(g, null, s, h, c)
                }
            };
            var r = function(o, s) {
                    o = o - this._offset, s = s || [];
                    for (var u = this._data, l = this._dimSize, f = l * o, h = 0; h < l; h++) s[h] = u[f + h];
                    return s
                },
                n = function(o, s, u, l) {
                    for (var f = this._data, h = this._dimSize, c = 0; c < h; c++) {
                        for (var v = l[c], d = v[0] == null ? 1 / 0 : v[0], g = v[1] == null ? -1 / 0 : v[1], p = s - o, y = u[c], m = 0; m < p; m++) {
                            var _ = f[m * h + c];
                            y[o + m] = _, _ < d && (d = _), _ > g && (g = _)
                        }
                        v[0] = d, v[1] = g
                    }
                },
                i = function() {
                    return this._data ? this._data.length / this._dimSize : 0
                };
            Sf = (t = {}, t[Ht + "_" + Le] = {
                pure: !0,
                appendData: a
            }, t[Ht + "_" + ln] = {
                pure: !0,
                appendData: function() {
                    throw new Error('Do not support appendData when set seriesLayoutBy: "row".')
                }
            }, t[fe] = {
                pure: !0,
                appendData: a
            }, t[Me] = {
                pure: !0,
                appendData: function(o) {
                    var s = this._data;
                    P(o, function(u, l) {
                        for (var f = s[l] || (s[l] = []), h = 0; h < (u || []).length; h++) f.push(u[h])
                    })
                }
            }, t[De] = {
                appendData: a
            }, t[qe] = {
                persistent: !1,
                pure: !0,
                appendData: function(o) {
                    this._data = o
                },
                clean: function() {
                    this._offset += this.count(), this._data = null
                }
            }, t);

            function a(o) {
                for (var s = 0; s < o.length; s++) this._data.push(o[s])
            }
        }(), e
    }(),
    Tf = function(e, t, r, n) {
        return e[n]
    },
    Um = (pr = {}, pr[Ht + "_" + Le] = function(e, t, r, n) {
        return e[n + t]
    }, pr[Ht + "_" + ln] = function(e, t, r, n, i) {
        n += t;
        for (var a = i || [], o = e, s = 0; s < o.length; s++) {
            var u = o[s];
            a[s] = u ? u[n] : null
        }
        return a
    }, pr[fe] = Tf, pr[Me] = function(e, t, r, n, i) {
        for (var a = i || [], o = 0; o < r.length; o++) {
            var s = r[o].name,
                u = e[s];
            a[o] = u ? u[n] : null
        }
        return a
    }, pr[De] = Tf, pr);

function vc(e, t) {
    var r = Um[Lu(e, t)];
    return r
}
var bf = function(e, t, r) {
        return e.length
    },
    Ym = (gr = {}, gr[Ht + "_" + Le] = function(e, t, r) {
        return Math.max(0, e.length - t)
    }, gr[Ht + "_" + ln] = function(e, t, r) {
        var n = e[0];
        return n ? Math.max(0, n.length - t) : 0
    }, gr[fe] = bf, gr[Me] = function(e, t, r) {
        var n = r[0].name,
            i = e[n];
        return i ? i.length : 0
    }, gr[De] = bf, gr);

function cc(e, t) {
    var r = Ym[Lu(e, t)];
    return r
}
var Go = function(e, t, r) {
        return e[t]
    },
    Wm = (yr = {}, yr[Ht] = Go, yr[fe] = function(e, t, r) {
        return e[r]
    }, yr[Me] = Go, yr[De] = function(e, t, r) {
        var n = La(e);
        return n instanceof Array ? n[t] : n
    }, yr[qe] = Go, yr);

function dc(e) {
    var t = Wm[e];
    return t
}

function Lu(e, t) {
    return e === Ht ? e + "_" + t : e
}

function _a(e, t, r) {
    if (e) {
        var n = e.getRawDataItem(t);
        if (n != null) {
            var i = e.getStore(),
                a = i.getSource().sourceFormat;
            if (r != null) {
                var o = e.getDimensionIndex(r),
                    s = i.getDimensionProperty(o);
                return dc(a)(n, o, s)
            } else {
                var u = n;
                return a === De && (u = La(n)), u
            }
        }
    }
}
var Xm = /\{@(.+?)\}/g,
    qm = function() {
        function e() {}
        return e.prototype.getDataParams = function(t, r) {
            var n = this.getData(r),
                i = this.getRawValue(t, r),
                a = n.getRawIndex(t),
                o = n.getName(t),
                s = n.getRawDataItem(t),
                u = n.getItemVisual(t, "style"),
                l = u && u[n.getItemVisual(t, "drawType") || "fill"],
                f = u && u.stroke,
                h = this.mainType,
                c = h === "series",
                v = n.userOutput && n.userOutput.get();
            return {
                componentType: h,
                componentSubType: this.subType,
                componentIndex: this.componentIndex,
                seriesType: c ? this.subType : null,
                seriesIndex: this.seriesIndex,
                seriesId: c ? this.id : null,
                seriesName: c ? this.name : null,
                name: o,
                dataIndex: a,
                data: s,
                dataType: r,
                value: i,
                color: l,
                borderColor: f,
                dimensionNames: v ? v.fullDimensions : null,
                encode: v ? v.encode : null,
                $vars: ["seriesName", "name", "value"]
            }
        }, e.prototype.getFormattedLabel = function(t, r, n, i, a, o) {
            r = r || "normal";
            var s = this.getData(n),
                u = this.getDataParams(t, n);
            if (o && (u.value = o.interpolatedValue), i != null && F(u.value) && (u.value = u.value[i]), !a) {
                var l = s.getItemModel(t);
                a = l.get(r === "normal" ? ["label", "formatter"] : [r, "label", "formatter"])
            }
            if (rt(a)) return u.status = r, u.dimensionIndex = i, a(u);
            if (X(a)) {
                var f = om(a, u);
                return f.replace(Xm, function(h, c) {
                    var v = c.length,
                        d = c;
                    d.charAt(0) === "[" && d.charAt(v - 1) === "]" && (d = +d.slice(1, v - 1));
                    var g = _a(s, t, d);
                    if (o && F(o.interpolatedValue)) {
                        var p = s.getDimensionIndex(d);
                        p >= 0 && (g = o.interpolatedValue[p])
                    }
                    return g != null ? g + "" : ""
                })
            }
        }, e.prototype.getRawValue = function(t, r) {
            return _a(this.getData(r), t)
        }, e.prototype.formatTooltip = function(t, r, n) {}, e
    }();

function hT(e) {
    var t, r;
    return H(e) ? e.type && (r = e) : t = e, {
        text: t,
        frag: r
    }
}

function $n(e) {
    return new $m(e)
}
var $m = function() {
        function e(t) {
            t = t || {}, this._reset = t.reset, this._plan = t.plan, this._count = t.count, this._onDirty = t.onDirty, this._dirty = !0
        }
        return e.prototype.perform = function(t) {
            var r = this._upstream,
                n = t && t.skip;
            if (this._dirty && r) {
                var i = this.context;
                i.data = i.outputData = r.context.outputData
            }
            this.__pipeline && (this.__pipeline.currentTask = this);
            var a;
            this._plan && !n && (a = this._plan(this.context));
            var o = f(this._modBy),
                s = this._modDataCount || 0,
                u = f(t && t.modBy),
                l = t && t.modDataCount || 0;
            (o !== u || s !== l) && (a = "reset");

            function f(m) {
                return !(m >= 1) && (m = 1), m
            }
            var h;
            (this._dirty || a === "reset") && (this._dirty = !1, h = this._doReset(n)), this._modBy = u, this._modDataCount = l;
            var c = t && t.step;
            if (r ? this._dueEnd = r._outputDueEnd : this._dueEnd = this._count ? this._count(this.context) : 1 / 0, this._progress) {
                var v = this._dueIndex,
                    d = Math.min(c != null ? this._dueIndex + c : 1 / 0, this._dueEnd);
                if (!n && (h || v < d)) {
                    var g = this._progress;
                    if (F(g))
                        for (var p = 0; p < g.length; p++) this._doProgress(g[p], v, d, u, l);
                    else this._doProgress(g, v, d, u, l)
                }
                this._dueIndex = d;
                var y = this._settedOutputEnd != null ? this._settedOutputEnd : d;
                this._outputDueEnd = y
            } else this._dueIndex = this._outputDueEnd = this._settedOutputEnd != null ? this._settedOutputEnd : this._dueEnd;
            return this.unfinished()
        }, e.prototype.dirty = function() {
            this._dirty = !0, this._onDirty && this._onDirty(this.context)
        }, e.prototype._doProgress = function(t, r, n, i, a) {
            Df.reset(r, n, i, a), this._callingProgress = t, this._callingProgress({
                start: r,
                end: n,
                count: n - r,
                next: Df.next
            }, this.context)
        }, e.prototype._doReset = function(t) {
            this._dueIndex = this._outputDueEnd = this._dueEnd = 0, this._settedOutputEnd = null;
            var r, n;
            !t && this._reset && (r = this._reset(this.context), r && r.progress && (n = r.forceFirstProgress, r = r.progress), F(r) && !r.length && (r = null)), this._progress = r, this._modBy = this._modDataCount = null;
            var i = this._downstream;
            return i && i.dirty(), n
        }, e.prototype.unfinished = function() {
            return this._progress && this._dueIndex < this._dueEnd
        }, e.prototype.pipe = function(t) {
            (this._downstream !== t || this._dirty) && (this._downstream = t, t._upstream = this, t.dirty())
        }, e.prototype.dispose = function() {
            this._disposed || (this._upstream && (this._upstream._downstream = null), this._downstream && (this._downstream._upstream = null), this._dirty = !1, this._disposed = !0)
        }, e.prototype.getUpstream = function() {
            return this._upstream
        }, e.prototype.getDownstream = function() {
            return this._downstream
        }, e.prototype.setOutputEnd = function(t) {
            this._outputDueEnd = this._settedOutputEnd = t
        }, e
    }(),
    Df = function() {
        var e, t, r, n, i, a = {
            reset: function(u, l, f, h) {
                t = u, e = l, r = f, n = h, i = Math.ceil(n / r), a.next = r > 1 && n > 0 ? s : o
            }
        };
        return a;

        function o() {
            return t < e ? t++ : null
        }

        function s() {
            var u = t % i * r + Math.ceil(t / i),
                l = t >= e ? null : u < n ? u : t;
            return t++, l
        }
    }();

function na(e, t) {
    var r = t && t.type;
    return r === "ordinal" ? e : (r === "time" && !at(e) && e != null && e !== "-" && (e = +un(e)), e == null || e === "" ? NaN : Number(e))
}
var Zm = Z({
    number: function(e) {
        return parseFloat(e)
    },
    time: function(e) {
        return +un(e)
    },
    trim: function(e) {
        return X(e) ? xe(e) : e
    }
});

function vT(e) {
    return Zm.get(e)
}
var pc = {
        lt: function(e, t) {
            return e < t
        },
        lte: function(e, t) {
            return e <= t
        },
        gt: function(e, t) {
            return e > t
        },
        gte: function(e, t) {
            return e >= t
        }
    },
    Km = function() {
        function e(t, r) {
            if (!at(r)) {
                var n = "";
                Et(n)
            }
            this._opFn = pc[t], this._rvalFloat = Ke(r)
        }
        return e.prototype.evaluate = function(t) {
            return at(t) ? this._opFn(t, this._rvalFloat) : this._opFn(Ke(t), this._rvalFloat)
        }, e
    }(),
    Qm = function() {
        function e(t, r) {
            var n = t === "desc";
            this._resultLT = n ? 1 : -1, r == null && (r = n ? "min" : "max"), this._incomparable = r === "min" ? -1 / 0 : 1 / 0
        }
        return e.prototype.evaluate = function(t, r) {
            var n = at(t) ? t : Ke(t),
                i = at(r) ? r : Ke(r),
                a = isNaN(n),
                o = isNaN(i);
            if (a && (n = this._incomparable), o && (i = this._incomparable), a && o) {
                var s = X(t),
                    u = X(r);
                s && (n = u ? t : 0), u && (i = s ? r : 0)
            }
            return n < i ? this._resultLT : n > i ? -this._resultLT : 0
        }, e
    }(),
    Jm = function() {
        function e(t, r) {
            this._rval = r, this._isEQ = t, this._rvalTypeof = typeof r, this._rvalFloat = Ke(r)
        }
        return e.prototype.evaluate = function(t) {
            var r = t === this._rval;
            if (!r) {
                var n = typeof t;
                n !== this._rvalTypeof && (n === "number" || this._rvalTypeof === "number") && (r = Ke(t) === this._rvalFloat)
            }
            return this._isEQ ? r : !r
        }, e
    }();

function cT(e, t) {
    return e === "eq" || e === "ne" ? new Jm(e === "eq", t) : Pr(pc, e) ? new Km(e, t) : null
}
var jm = function() {
    function e() {}
    return e.prototype.getRawData = function() {
        throw new Error("not supported")
    }, e.prototype.getRawDataItem = function(t) {
        throw new Error("not supported")
    }, e.prototype.cloneRawData = function() {}, e.prototype.getDimensionInfo = function(t) {}, e.prototype.cloneAllDimensionInfo = function() {}, e.prototype.count = function() {}, e.prototype.retrieveValue = function(t, r) {}, e.prototype.retrieveValueFromItem = function(t, r) {}, e.prototype.convertValue = function(t, r) {
        return na(t, r)
    }, e
}();

function t_(e, t) {
    var r = new jm,
        n = e.data,
        i = r.sourceFormat = e.sourceFormat,
        a = e.startIndex,
        o = "";
    e.seriesLayoutBy !== Le && Et(o);
    var s = [],
        u = {},
        l = e.dimensionsDefine;
    if (l) P(l, function(g, p) {
        var y = g.name,
            m = {
                index: p,
                name: y,
                displayName: g.displayName
            };
        if (s.push(m), y != null) {
            var _ = "";
            Pr(u, y) && Et(_), u[y] = m
        }
    });
    else
        for (var f = 0; f < e.dimensionsDetectedCount; f++) s.push({
            index: f
        });
    var h = vc(i, Le);
    t.__isBuiltIn && (r.getRawDataItem = function(g) {
        return h(n, a, s, g)
    }, r.getRawData = Ct(e_, null, e)), r.cloneRawData = Ct(r_, null, e);
    var c = cc(i, Le);
    r.count = Ct(c, null, n, a, s);
    var v = dc(i);
    r.retrieveValue = function(g, p) {
        var y = h(n, a, s, g);
        return d(y, p)
    };
    var d = r.retrieveValueFromItem = function(g, p) {
        if (g != null) {
            var y = s[p];
            if (y) return v(g, p, y.name)
        }
    };
    return r.getDimensionInfo = Ct(n_, null, s, u), r.cloneAllDimensionInfo = Ct(i_, null, s), r
}

function e_(e) {
    var t = e.sourceFormat;
    if (!Iu(t)) {
        var r = "";
        Et(r)
    }
    return e.data
}

function r_(e) {
    var t = e.sourceFormat,
        r = e.data;
    if (!Iu(t)) {
        var n = "";
        Et(n)
    }
    if (t === Ht) {
        for (var i = [], a = 0, o = r.length; a < o; a++) i.push(r[a].slice());
        return i
    } else if (t === fe) {
        for (var i = [], a = 0, o = r.length; a < o; a++) i.push(I({}, r[a]));
        return i
    }
}

function n_(e, t, r) {
    if (r != null) {
        if (at(r) || !isNaN(r) && !Pr(t, r)) return e[r];
        if (Pr(t, r)) return t[r]
    }
}

function i_(e) {
    return tt(e)
}
var gc = Z();

function a_(e) {
    e = tt(e);
    var t = e.type,
        r = "";
    t || Et(r);
    var n = t.split(":");
    n.length !== 2 && Et(r);
    var i = !1;
    n[0] === "echarts" && (t = n[1], i = !0), e.__isBuiltIn = i, gc.set(t, e)
}

function o_(e, t, r) {
    var n = St(e),
        i = n.length,
        a = "";
    i || Et(a);
    for (var o = 0, s = i; o < s; o++) {
        var u = n[o];
        t = s_(u, t), o !== s - 1 && (t.length = Math.max(t.length, 1))
    }
    return t
}

function s_(e, t, r, n) {
    var i = "";
    t.length || Et(i), H(e) || Et(i);
    var a = e.type,
        o = gc.get(a);
    o || Et(i);
    var s = Q(t, function(l) {
            return t_(l, o)
        }),
        u = St(o.transform({
            upstream: s[0],
            upstreamList: s,
            config: tt(e.config)
        }));
    return Q(u, function(l, f) {
        var h = "";
        H(l) || Et(h), l.data || Et(h);
        var c = lc(l.data);
        Iu(c) || Et(h);
        var v, d = t[0];
        if (d && f === 0 && !l.dimensions) {
            var g = d.startIndex;
            g && (l.data = d.data.slice(0, g).concat(l.data)), v = {
                seriesLayoutBy: Le,
                sourceHeader: g,
                dimensions: d.metaRawOption.dimensions
            }
        } else v = {
            seriesLayoutBy: Le,
            sourceHeader: 0,
            dimensions: l.dimensions
        };
        return Bs(l.data, v, null)
    })
}

function Iu(e) {
    return e === Ht || e === fe
}
var Wa = "undefined",
    u_ = typeof Uint32Array === Wa ? Array : Uint32Array,
    l_ = typeof Uint16Array === Wa ? Array : Uint16Array,
    yc = typeof Int32Array === Wa ? Array : Int32Array,
    Mf = typeof Float64Array === Wa ? Array : Float64Array,
    mc = {
        float: Mf,
        int: yc,
        ordinal: Array,
        number: Array,
        time: Mf
    },
    Vo;

function Vr(e) {
    return e > 65535 ? u_ : l_
}

function Ur() {
    return [1 / 0, -1 / 0]
}

function f_(e) {
    var t = e.constructor;
    return t === Array ? e.slice() : new t(e)
}

function Cf(e, t, r, n, i) {
    var a = mc[r || "float"];
    if (i) {
        var o = e[t],
            s = o && o.length;
        if (s !== n) {
            for (var u = new a(n), l = 0; l < s; l++) u[l] = o[l];
            e[t] = u
        }
    } else e[t] = new a(n)
}
var zs = function() {
        function e() {
            this._chunks = [], this._rawExtent = [], this._extent = [], this._count = 0, this._rawCount = 0, this._calcDimNameToIdx = Z()
        }
        return e.prototype.initData = function(t, r, n) {
            this._provider = t, this._chunks = [], this._indices = null, this.getRawIndex = this._getRawIdxIdentity;
            var i = t.getSource(),
                a = this.defaultDimValueGetter = Vo[i.sourceFormat];
            this._dimValueGetter = n || a, this._rawExtent = [], fc(i), this._dimensions = Q(r, function(o) {
                return {
                    type: o.type,
                    property: o.property
                }
            }), this._initDataFromProvider(0, t.count())
        }, e.prototype.getProvider = function() {
            return this._provider
        }, e.prototype.getSource = function() {
            return this._provider.getSource()
        }, e.prototype.ensureCalculationDimension = function(t, r) {
            var n = this._calcDimNameToIdx,
                i = this._dimensions,
                a = n.get(t);
            if (a != null) {
                if (i[a].type === r) return a
            } else a = i.length;
            return i[a] = {
                type: r
            }, n.set(t, a), this._chunks[a] = new mc[r || "float"](this._rawCount), this._rawExtent[a] = Ur(), a
        }, e.prototype.collectOrdinalMeta = function(t, r) {
            var n = this._chunks[t],
                i = this._dimensions[t],
                a = this._rawExtent,
                o = i.ordinalOffset || 0,
                s = n.length;
            o === 0 && (a[t] = Ur());
            for (var u = a[t], l = o; l < s; l++) {
                var f = n[l] = r.parseAndCollect(n[l]);
                isNaN(f) || (u[0] = Math.min(f, u[0]), u[1] = Math.max(f, u[1]))
            }
            i.ordinalMeta = r, i.ordinalOffset = s, i.type = "ordinal"
        }, e.prototype.getOrdinalMeta = function(t) {
            var r = this._dimensions[t],
                n = r.ordinalMeta;
            return n
        }, e.prototype.getDimensionProperty = function(t) {
            var r = this._dimensions[t];
            return r && r.property
        }, e.prototype.appendData = function(t) {
            var r = this._provider,
                n = this.count();
            r.appendData(t);
            var i = r.count();
            return r.persistent || (i += n), n < i && this._initDataFromProvider(n, i, !0), [n, i]
        }, e.prototype.appendValues = function(t, r) {
            for (var n = this._chunks, i = this._dimensions, a = i.length, o = this._rawExtent, s = this.count(), u = s + Math.max(t.length, r || 0), l = 0; l < a; l++) {
                var f = i[l];
                Cf(n, l, f.type, u, !0)
            }
            for (var h = [], c = s; c < u; c++)
                for (var v = c - s, d = 0; d < a; d++) {
                    var f = i[d],
                        g = Vo.arrayRows.call(this, t[v] || h, f.property, v, d);
                    n[d][c] = g;
                    var p = o[d];
                    g < p[0] && (p[0] = g), g > p[1] && (p[1] = g)
                }
            return this._rawCount = this._count = u, {
                start: s,
                end: u
            }
        }, e.prototype._initDataFromProvider = function(t, r, n) {
            for (var i = this._provider, a = this._chunks, o = this._dimensions, s = o.length, u = this._rawExtent, l = Q(o, function(m) {
                    return m.property
                }), f = 0; f < s; f++) {
                var h = o[f];
                u[f] || (u[f] = Ur()), Cf(a, f, h.type, r, n)
            }
            if (i.fillStorage) i.fillStorage(t, r, a, u);
            else
                for (var c = [], v = t; v < r; v++) {
                    c = i.getItem(v, c);
                    for (var d = 0; d < s; d++) {
                        var g = a[d],
                            p = this._dimValueGetter(c, l[d], v, d);
                        g[v] = p;
                        var y = u[d];
                        p < y[0] && (y[0] = p), p > y[1] && (y[1] = p)
                    }
                }!i.persistent && i.clean && i.clean(), this._rawCount = this._count = r, this._extent = []
        }, e.prototype.count = function() {
            return this._count
        }, e.prototype.get = function(t, r) {
            if (!(r >= 0 && r < this._count)) return NaN;
            var n = this._chunks[t];
            return n ? n[this.getRawIndex(r)] : NaN
        }, e.prototype.getValues = function(t, r) {
            var n = [],
                i = [];
            if (r == null) {
                r = t, t = [];
                for (var a = 0; a < this._dimensions.length; a++) i.push(a)
            } else i = t;
            for (var a = 0, o = i.length; a < o; a++) n.push(this.get(i[a], r));
            return n
        }, e.prototype.getByRawIndex = function(t, r) {
            if (!(r >= 0 && r < this._rawCount)) return NaN;
            var n = this._chunks[t];
            return n ? n[r] : NaN
        }, e.prototype.getSum = function(t) {
            var r = this._chunks[t],
                n = 0;
            if (r)
                for (var i = 0, a = this.count(); i < a; i++) {
                    var o = this.get(t, i);
                    isNaN(o) || (n += o)
                }
            return n
        }, e.prototype.getMedian = function(t) {
            var r = [];
            this.each([t], function(a) {
                isNaN(a) || r.push(a)
            });
            var n = r.sort(function(a, o) {
                    return a - o
                }),
                i = this.count();
            return i === 0 ? 0 : i % 2 === 1 ? n[(i - 1) / 2] : (n[i / 2] + n[i / 2 - 1]) / 2
        }, e.prototype.indexOfRawIndex = function(t) {
            if (t >= this._rawCount || t < 0) return -1;
            if (!this._indices) return t;
            var r = this._indices,
                n = r[t];
            if (n != null && n < this._count && n === t) return t;
            for (var i = 0, a = this._count - 1; i <= a;) {
                var o = (i + a) / 2 | 0;
                if (r[o] < t) i = o + 1;
                else if (r[o] > t) a = o - 1;
                else return o
            }
            return -1
        }, e.prototype.indicesOfNearest = function(t, r, n) {
            var i = this._chunks,
                a = i[t],
                o = [];
            if (!a) return o;
            n == null && (n = 1 / 0);
            for (var s = 1 / 0, u = -1, l = 0, f = 0, h = this.count(); f < h; f++) {
                var c = this.getRawIndex(f),
                    v = r - a[c],
                    d = Math.abs(v);
                d <= n && ((d < s || d === s && v >= 0 && u < 0) && (s = d, u = v, l = 0), v === u && (o[l++] = f))
            }
            return o.length = l, o
        }, e.prototype.getIndices = function() {
            var t, r = this._indices;
            if (r) {
                var n = r.constructor,
                    i = this._count;
                if (n === Array) {
                    t = new n(i);
                    for (var a = 0; a < i; a++) t[a] = r[a]
                } else t = new n(r.buffer, 0, i)
            } else {
                var n = Vr(this._rawCount);
                t = new n(this.count());
                for (var a = 0; a < t.length; a++) t[a] = a
            }
            return t
        }, e.prototype.filter = function(t, r) {
            if (!this._count) return this;
            for (var n = this.clone(), i = n.count(), a = Vr(n._rawCount), o = new a(i), s = [], u = t.length, l = 0, f = t[0], h = n._chunks, c = 0; c < i; c++) {
                var v = void 0,
                    d = n.getRawIndex(c);
                if (u === 0) v = r(c);
                else if (u === 1) {
                    var g = h[f][d];
                    v = r(g, c)
                } else {
                    for (var p = 0; p < u; p++) s[p] = h[t[p]][d];
                    s[p] = c, v = r.apply(null, s)
                }
                v && (o[l++] = d)
            }
            return l < i && (n._indices = o), n._count = l, n._extent = [], n._updateGetRawIdx(), n
        }, e.prototype.selectRange = function(t) {
            var r = this.clone(),
                n = r._count;
            if (!n) return this;
            var i = ht(t),
                a = i.length;
            if (!a) return this;
            var o = r.count(),
                s = Vr(r._rawCount),
                u = new s(o),
                l = 0,
                f = i[0],
                h = t[f][0],
                c = t[f][1],
                v = r._chunks,
                d = !1;
            if (!r._indices) {
                var g = 0;
                if (a === 1) {
                    for (var p = v[i[0]], y = 0; y < n; y++) {
                        var m = p[y];
                        (m >= h && m <= c || isNaN(m)) && (u[l++] = g), g++
                    }
                    d = !0
                } else if (a === 2) {
                    for (var p = v[i[0]], _ = v[i[1]], S = t[i[1]][0], T = t[i[1]][1], y = 0; y < n; y++) {
                        var m = p[y],
                            w = _[y];
                        (m >= h && m <= c || isNaN(m)) && (w >= S && w <= T || isNaN(w)) && (u[l++] = g), g++
                    }
                    d = !0
                }
            }
            if (!d)
                if (a === 1)
                    for (var y = 0; y < o; y++) {
                        var b = r.getRawIndex(y),
                            m = v[i[0]][b];
                        (m >= h && m <= c || isNaN(m)) && (u[l++] = b)
                    } else
                        for (var y = 0; y < o; y++) {
                            for (var M = !0, b = r.getRawIndex(y), D = 0; D < a; D++) {
                                var C = i[D],
                                    m = v[C][b];
                                (m < t[C][0] || m > t[C][1]) && (M = !1)
                            }
                            M && (u[l++] = r.getRawIndex(y))
                        }
            return l < o && (r._indices = u), r._count = l, r._extent = [], r._updateGetRawIdx(), r
        }, e.prototype.map = function(t, r) {
            var n = this.clone(t);
            return this._updateDims(n, t, r), n
        }, e.prototype.modify = function(t, r) {
            this._updateDims(this, t, r)
        }, e.prototype._updateDims = function(t, r, n) {
            for (var i = t._chunks, a = [], o = r.length, s = t.count(), u = [], l = t._rawExtent, f = 0; f < r.length; f++) l[r[f]] = Ur();
            for (var h = 0; h < s; h++) {
                for (var c = t.getRawIndex(h), v = 0; v < o; v++) u[v] = i[r[v]][c];
                u[o] = h;
                var d = n && n.apply(null, u);
                if (d != null) {
                    typeof d != "object" && (a[0] = d, d = a);
                    for (var f = 0; f < d.length; f++) {
                        var g = r[f],
                            p = d[f],
                            y = l[g],
                            m = i[g];
                        m && (m[c] = p), p < y[0] && (y[0] = p), p > y[1] && (y[1] = p)
                    }
                }
            }
        }, e.prototype.lttbDownSample = function(t, r) {
            var n = this.clone([t], !0),
                i = n._chunks,
                a = i[t],
                o = this.count(),
                s = 0,
                u = Math.floor(1 / r),
                l = this.getRawIndex(0),
                f, h, c, v = new(Vr(this._rawCount))(Math.min((Math.ceil(o / u) + 2) * 2, o));
            v[s++] = l;
            for (var d = 1; d < o - 1; d += u) {
                for (var g = Math.min(d + u, o - 1), p = Math.min(d + u * 2, o), y = (p + g) / 2, m = 0, _ = g; _ < p; _++) {
                    var S = this.getRawIndex(_),
                        T = a[S];
                    isNaN(T) || (m += T)
                }
                m /= p - g;
                var w = d,
                    b = Math.min(d + u, o),
                    M = d - 1,
                    D = a[l];
                f = -1, c = w;
                for (var C = -1, A = 0, _ = w; _ < b; _++) {
                    var S = this.getRawIndex(_),
                        T = a[S];
                    if (isNaN(T)) {
                        A++, C < 0 && (C = S);
                        continue
                    }
                    h = Math.abs((M - y) * (T - D) - (M - _) * (m - D)), h > f && (f = h, c = S)
                }
                A > 0 && A < b - w && (v[s++] = Math.min(C, c), c = Math.max(C, c)), v[s++] = c, l = c
            }
            return v[s++] = this.getRawIndex(o - 1), n._count = s, n._indices = v, n.getRawIndex = this._getRawIdx, n
        }, e.prototype.minmaxDownSample = function(t, r) {
            for (var n = this.clone([t], !0), i = n._chunks, a = Math.floor(1 / r), o = i[t], s = this.count(), u = new(Vr(this._rawCount))(Math.ceil(s / a) * 2), l = 0, f = 0; f < s; f += a) {
                var h = f,
                    c = o[this.getRawIndex(h)],
                    v = f,
                    d = o[this.getRawIndex(v)],
                    g = a;
                f + a > s && (g = s - f);
                for (var p = 0; p < g; p++) {
                    var y = this.getRawIndex(f + p),
                        m = o[y];
                    m < c && (c = m, h = f + p), m > d && (d = m, v = f + p)
                }
                var _ = this.getRawIndex(h),
                    S = this.getRawIndex(v);
                h < v ? (u[l++] = _, u[l++] = S) : (u[l++] = S, u[l++] = _)
            }
            return n._count = l, n._indices = u, n._updateGetRawIdx(), n
        }, e.prototype.downSample = function(t, r, n, i) {
            for (var a = this.clone([t], !0), o = a._chunks, s = [], u = Math.floor(1 / r), l = o[t], f = this.count(), h = a._rawExtent[t] = Ur(), c = new(Vr(this._rawCount))(Math.ceil(f / u)), v = 0, d = 0; d < f; d += u) {
                u > f - d && (u = f - d, s.length = u);
                for (var g = 0; g < u; g++) {
                    var p = this.getRawIndex(d + g);
                    s[g] = l[p]
                }
                var y = n(s),
                    m = this.getRawIndex(Math.min(d + i(s, y) || 0, f - 1));
                l[m] = y, y < h[0] && (h[0] = y), y > h[1] && (h[1] = y), c[v++] = m
            }
            return a._count = v, a._indices = c, a._updateGetRawIdx(), a
        }, e.prototype.each = function(t, r) {
            if (this._count)
                for (var n = t.length, i = this._chunks, a = 0, o = this.count(); a < o; a++) {
                    var s = this.getRawIndex(a);
                    switch (n) {
                        case 0:
                            r(a);
                            break;
                        case 1:
                            r(i[t[0]][s], a);
                            break;
                        case 2:
                            r(i[t[0]][s], i[t[1]][s], a);
                            break;
                        default:
                            for (var u = 0, l = []; u < n; u++) l[u] = i[t[u]][s];
                            l[u] = a, r.apply(null, l)
                    }
                }
        }, e.prototype.getDataExtent = function(t) {
            var r = this._chunks[t],
                n = Ur();
            if (!r) return n;
            var i = this.count(),
                a = !this._indices,
                o;
            if (a) return this._rawExtent[t].slice();
            if (o = this._extent[t], o) return o.slice();
            o = n;
            for (var s = o[0], u = o[1], l = 0; l < i; l++) {
                var f = this.getRawIndex(l),
                    h = r[f];
                h < s && (s = h), h > u && (u = h)
            }
            return o = [s, u], this._extent[t] = o, o
        }, e.prototype.getRawDataItem = function(t) {
            var r = this.getRawIndex(t);
            if (this._provider.persistent) return this._provider.getItem(r);
            for (var n = [], i = this._chunks, a = 0; a < i.length; a++) n.push(i[a][r]);
            return n
        }, e.prototype.clone = function(t, r) {
            var n = new e,
                i = this._chunks,
                a = t && Ze(t, function(s, u) {
                    return s[u] = !0, s
                }, {});
            if (a)
                for (var o = 0; o < i.length; o++) n._chunks[o] = a[o] ? f_(i[o]) : i[o];
            else n._chunks = i;
            return this._copyCommonProps(n), r || (n._indices = this._cloneIndices()), n._updateGetRawIdx(), n
        }, e.prototype._copyCommonProps = function(t) {
            t._count = this._count, t._rawCount = this._rawCount, t._provider = this._provider, t._dimensions = this._dimensions, t._extent = tt(this._extent), t._rawExtent = tt(this._rawExtent)
        }, e.prototype._cloneIndices = function() {
            if (this._indices) {
                var t = this._indices.constructor,
                    r = void 0;
                if (t === Array) {
                    var n = this._indices.length;
                    r = new t(n);
                    for (var i = 0; i < n; i++) r[i] = this._indices[i]
                } else r = new t(this._indices);
                return r
            }
            return null
        }, e.prototype._getRawIdxIdentity = function(t) {
            return t
        }, e.prototype._getRawIdx = function(t) {
            return t < this._count && t >= 0 ? this._indices[t] : -1
        }, e.prototype._updateGetRawIdx = function() {
            this.getRawIndex = this._indices ? this._getRawIdx : this._getRawIdxIdentity
        }, e.internalField = function() {
            function t(r, n, i, a) {
                return na(r[a], this._dimensions[a])
            }
            Vo = {
                arrayRows: t,
                objectRows: function(r, n, i, a) {
                    return na(r[n], this._dimensions[a])
                },
                keyedColumns: t,
                original: function(r, n, i, a) {
                    var o = r && (r.value == null ? r : r.value);
                    return na(o instanceof Array ? o[a] : o, this._dimensions[a])
                },
                typedArray: function(r, n, i, a) {
                    return r[a]
                }
            }
        }(), e
    }(),
    h_ = function() {
        function e(t) {
            this._sourceList = [], this._storeList = [], this._upstreamSignList = [], this._versionSignBase = 0, this._dirty = !0, this._sourceHost = t
        }
        return e.prototype.dirty = function() {
            this._setLocalSource([], []), this._storeList = [], this._dirty = !0
        }, e.prototype._setLocalSource = function(t, r) {
            this._sourceList = t, this._upstreamSignList = r, this._versionSignBase++, this._versionSignBase > 9e10 && (this._versionSignBase = 0)
        }, e.prototype._getVersionSign = function() {
            return this._sourceHost.uid + "_" + this._versionSignBase
        }, e.prototype.prepareSource = function() {
            this._isDirty() && (this._createSource(), this._dirty = !1)
        }, e.prototype._createSource = function() {
            this._setLocalSource([], []);
            var t = this._sourceHost,
                r = this._getUpstreamSourceManagers(),
                n = !!r.length,
                i, a;
            if (Ei(t)) {
                var o = t,
                    s = void 0,
                    u = void 0,
                    l = void 0;
                if (n) {
                    var f = r[0];
                    f.prepareSource(), l = f.getSource(), s = l.data, u = l.sourceFormat, a = [f._getVersionSign()]
                } else s = o.get("data", !0), u = zt(s) ? qe : De, a = [];
                var h = this._getSourceMetaRawOption() || {},
                    c = l && l.metaRawOption || {},
                    v = q(h.seriesLayoutBy, c.seriesLayoutBy) || null,
                    d = q(h.sourceHeader, c.sourceHeader),
                    g = q(h.dimensions, c.dimensions),
                    p = v !== c.seriesLayoutBy || !!d != !!c.sourceHeader || g;
                i = p ? [Bs(s, {
                    seriesLayoutBy: v,
                    sourceHeader: d,
                    dimensions: g
                }, u)] : []
            } else {
                var y = t;
                if (n) {
                    var m = this._applyTransform(r);
                    i = m.sourceList, a = m.upstreamSignList
                } else {
                    var _ = y.get("source", !0);
                    i = [Bs(_, this._getSourceMetaRawOption(), null)], a = []
                }
            }
            this._setLocalSource(i, a)
        }, e.prototype._applyTransform = function(t) {
            var r = this._sourceHost,
                n = r.get("transform", !0),
                i = r.get("fromTransformResult", !0);
            if (i != null) {
                var a = "";
                t.length !== 1 && Pf(a)
            }
            var o, s = [],
                u = [];
            return P(t, function(l) {
                l.prepareSource();
                var f = l.getSource(i || 0),
                    h = "";
                i != null && !f && Pf(h), s.push(f), u.push(l._getVersionSign())
            }), n ? o = o_(n, s, {
                datasetIndex: r.componentIndex
            }) : i != null && (o = [Hm(s[0])]), {
                sourceList: o,
                upstreamSignList: u
            }
        }, e.prototype._isDirty = function() {
            if (this._dirty) return !0;
            for (var t = this._getUpstreamSourceManagers(), r = 0; r < t.length; r++) {
                var n = t[r];
                if (n._isDirty() || this._upstreamSignList[r] !== n._getVersionSign()) return !0
            }
        }, e.prototype.getSource = function(t) {
            t = t || 0;
            var r = this._sourceList[t];
            if (!r) {
                var n = this._getUpstreamSourceManagers();
                return n[0] && n[0].getSource(t)
            }
            return r
        }, e.prototype.getSharedDataStore = function(t) {
            var r = t.makeStoreSchema();
            return this._innerGetDataStore(r.dimensions, t.source, r.hash)
        }, e.prototype._innerGetDataStore = function(t, r, n) {
            var i = 0,
                a = this._storeList,
                o = a[i];
            o || (o = a[i] = {});
            var s = o[n];
            if (!s) {
                var u = this._getUpstreamSourceManagers()[0];
                Ei(this._sourceHost) && u ? s = u._innerGetDataStore(t, r, n) : (s = new zs, s.initData(new hc(r, t.length), t)), o[n] = s
            }
            return s
        }, e.prototype._getUpstreamSourceManagers = function() {
            var t = this._sourceHost;
            if (Ei(t)) {
                var r = Pu(t);
                return r ? [r.getSourceManager()] : []
            } else return Q(gm(t), function(n) {
                return n.getSourceManager()
            })
        }, e.prototype._getSourceMetaRawOption = function() {
            var t = this._sourceHost,
                r, n, i;
            if (Ei(t)) r = t.get("seriesLayoutBy", !0), n = t.get("sourceHeader", !0), i = t.get("dimensions", !0);
            else if (!this._getUpstreamSourceManagers().length) {
                var a = t;
                r = a.get("seriesLayoutBy", !0), n = a.get("sourceHeader", !0), i = a.get("dimensions", !0)
            }
            return {
                seriesLayoutBy: r,
                sourceHeader: n,
                dimensions: i
            }
        }, e
    }();

function dT(e) {
    var t = e.option.transform;
    t && aa(e.option.transform)
}

function Ei(e) {
    return e.mainType === "series"
}

function Pf(e) {
    throw new Error(e)
}
var v_ = "line-height:1";

function _c(e) {
    var t = e.lineHeight;
    return t == null ? v_ : "line-height:" + Ut(t + "") + "px"
}

function Sc(e, t) {
    var r = e.color || "#6e7079",
        n = e.fontSize || 12,
        i = e.fontWeight || "400",
        a = e.color || "#464646",
        o = e.fontSize || 14,
        s = e.fontWeight || "900";
    return t === "html" ? {
        nameStyle: "font-size:" + Ut(n + "") + "px;color:" + Ut(r) + ";font-weight:" + Ut(i + ""),
        valueStyle: "font-size:" + Ut(o + "") + "px;color:" + Ut(a) + ";font-weight:" + Ut(s + "")
    } : {
        nameStyle: {
            fontSize: n,
            fill: r,
            fontWeight: i
        },
        valueStyle: {
            fontSize: o,
            fill: a,
            fontWeight: s
        }
    }
}
var c_ = [0, 10, 20, 30],
    d_ = ["", `
`, `

`, `


`];

function Hs(e, t) {
    return t.type = e, t
}

function Gs(e) {
    return e.type === "section"
}

function wc(e) {
    return Gs(e) ? p_ : g_
}

function Tc(e) {
    if (Gs(e)) {
        var t = 0,
            r = e.blocks.length,
            n = r > 1 || r > 0 && !e.noHeader;
        return P(e.blocks, function(i) {
            var a = Tc(i);
            a >= t && (t = a + +(n && (!a || Gs(i) && !i.noHeader)))
        }), t
    }
    return 0
}

function p_(e, t, r, n) {
    var i = t.noHeader,
        a = y_(Tc(t)),
        o = [],
        s = t.blocks || [];
    Te(!s || F(s)), s = s || [];
    var u = e.orderMode;
    if (t.sortBlocks && u) {
        s = s.slice();
        var l = {
            valueAsc: "asc",
            valueDesc: "desc"
        };
        if (Pr(l, u)) {
            var f = new Qm(l[u], null);
            s.sort(function(g, p) {
                return f.evaluate(g.sortParam, p.sortParam)
            })
        } else u === "seriesDesc" && s.reverse()
    }
    P(s, function(g, p) {
        var y = t.valueFormatter,
            m = wc(g)(y ? I(I({}, e), {
                valueFormatter: y
            }) : e, g, p > 0 ? a.html : 0, n);
        m != null && o.push(m)
    });
    var h = e.renderMode === "richText" ? o.join(a.richText) : Vs(n, o.join(""), i ? r : a.html);
    if (i) return h;
    var c = Fs(t.header, "ordinal", e.useUTC),
        v = Sc(n, e.renderMode).nameStyle,
        d = _c(n);
    return e.renderMode === "richText" ? bc(e, c, v) + a.richText + h : Vs(n, '<div style="' + v + ";" + d + ';">' + Ut(c) + "</div>" + h, r)
}

function g_(e, t, r, n) {
    var i = e.renderMode,
        a = t.noName,
        o = t.noValue,
        s = !t.markerType,
        u = t.name,
        l = e.useUTC,
        f = t.valueFormatter || e.valueFormatter || function(S) {
            return S = F(S) ? S : [S], Q(S, function(T, w) {
                return Fs(T, F(v) ? v[w] : v, l)
            })
        };
    if (!(a && o)) {
        var h = s ? "" : e.markupStyleCreator.makeTooltipMarker(t.markerType, t.markerColor || "#333", i),
            c = a ? "" : Fs(u, "ordinal", l),
            v = t.valueType,
            d = o ? [] : f(t.value, t.dataIndex),
            g = !s || !a,
            p = !s && a,
            y = Sc(n, i),
            m = y.nameStyle,
            _ = y.valueStyle;
        return i === "richText" ? (s ? "" : h) + (a ? "" : bc(e, c, m)) + (o ? "" : S_(e, d, g, p, _)) : Vs(n, (s ? "" : h) + (a ? "" : m_(c, !s, m)) + (o ? "" : __(d, g, p, _)), r)
    }
}

function pT(e, t, r, n, i, a) {
    if (e) {
        var o = wc(e),
            s = {
                useUTC: i,
                renderMode: r,
                orderMode: n,
                markupStyleCreator: t,
                valueFormatter: e.valueFormatter
            };
        return o(s, e, 0, a)
    }
}

function y_(e) {
    return {
        html: c_[e],
        richText: d_[e]
    }
}

function Vs(e, t, r) {
    var n = '<div style="clear:both"></div>',
        i = "margin: " + r + "px 0 0",
        a = _c(e);
    return '<div style="' + i + ";" + a + ';">' + t + n + "</div>"
}

function m_(e, t, r) {
    var n = t ? "margin-left:2px" : "";
    return '<span style="' + r + ";" + n + '">' + Ut(e) + "</span>"
}

function __(e, t, r, n) {
    var i = r ? "10px" : "20px",
        a = t ? "float:right;margin-left:" + i : "";
    return e = F(e) ? e : [e], '<span style="' + a + ";" + n + '">' + Q(e, function(o) {
        return Ut(o)
    }).join("&nbsp;&nbsp;") + "</span>"
}

function bc(e, t, r) {
    return e.markupStyleCreator.wrapRichTextStyle(t, r)
}

function S_(e, t, r, n, i) {
    var a = [i],
        o = n ? 10 : 20;
    return r && a.push({
        padding: [0, 0, 0, o],
        align: "right"
    }), e.markupStyleCreator.wrapRichTextStyle(F(t) ? t.join("  ") : t, a)
}

function w_(e, t) {
    var r = e.getData().getItemVisual(t, "style"),
        n = r[e.visualDrawType];
    return um(n)
}

function gT(e, t) {
    var r = e.get("padding");
    return r ? ? (t === "richText" ? [8, 10] : 10)
}
var yT = function() {
    function e() {
        this.richTextStyles = {}, this._nextStyleNameId = Zh()
    }
    return e.prototype._generateStyleName = function() {
        return "__EC_aUTo_" + this._nextStyleNameId++
    }, e.prototype.makeTooltipMarker = function(t, r, n) {
        var i = n === "richText" ? this._generateStyleName() : null,
            a = sm({
                color: r,
                type: t,
                renderMode: n,
                markerId: i
            });
        return X(a) ? a : (this.richTextStyles[i] = a.style, a.content)
    }, e.prototype.wrapRichTextStyle = function(t, r) {
        var n = {};
        F(r) ? P(r, function(a) {
            return I(n, a)
        }) : I(n, r);
        var i = this._generateStyleName();
        return this.richTextStyles[i] = n, "{" + i + "|" + t + "}"
    }, e
}();

function T_(e) {
    var t = e.series,
        r = e.dataIndex,
        n = e.multipleSeries,
        i = t.getData(),
        a = i.mapDimensionsAll("defaultedTooltip"),
        o = a.length,
        s = t.getRawValue(r),
        u = F(s),
        l = w_(t, r),
        f, h, c, v;
    if (o > 1 || u && !o) {
        var d = b_(s, t, r, a, l);
        f = d.inlineValues, h = d.inlineValueTypes, c = d.blocks, v = d.inlineValues[0]
    } else if (o) {
        var g = i.getDimensionInfo(a[0]);
        v = f = _a(i, r, a[0]), h = g.type
    } else v = f = u ? s[0] : s;
    var p = tv(t),
        y = p && t.name || "",
        m = i.getName(r),
        _ = n ? y : m;
    return Hs("section", {
        header: y,
        noHeader: n || !p,
        sortParam: v,
        blocks: [Hs("nameValue", {
            markerType: "item",
            markerColor: l,
            name: _,
            noName: !xe(_),
            value: f,
            valueType: h,
            dataIndex: r
        })].concat(c || [])
    })
}

function b_(e, t, r, n, i) {
    var a = t.getData(),
        o = Ze(e, function(h, c, v) {
            var d = a.getDimensionInfo(v);
            return h = h || d && d.tooltip !== !1 && d.displayName != null
        }, !1),
        s = [],
        u = [],
        l = [];
    n.length ? P(n, function(h) {
        f(_a(a, r, h), h)
    }) : P(e, f);

    function f(h, c) {
        var v = a.getDimensionInfo(c);
        !v || v.otherDims.tooltip === !1 || (o ? l.push(Hs("nameValue", {
            markerType: "subItem",
            markerColor: i,
            name: v.displayName,
            value: h,
            valueType: v.type
        })) : (s.push(h), u.push(v.type)))
    }
    return {
        inlineValues: s,
        inlineValueTypes: u,
        blocks: l
    }
}
var ze = Pt();

function Oi(e, t) {
    return e.getName(t) || e.getId(t)
}
var D_ = "__universalTransitionEnabled",
    Qe = function(e) {
        W(t, e);

        function t() {
            var r = e !== null && e.apply(this, arguments) || this;
            return r._selectedDataIndicesMap = {}, r
        }
        return t.prototype.init = function(r, n, i) {
            this.seriesIndex = this.componentIndex, this.dataTask = $n({
                count: C_,
                reset: P_
            }), this.dataTask.context = {
                model: this
            }, this.mergeDefaultAndTheme(r, i);
            var a = ze(this).sourceManager = new h_(this);
            a.prepareSource();
            var o = this.getInitialData(r, i);
            Rf(o, this), this.dataTask.context.data = o, ze(this).dataBeforeProcessed = o, Af(this), this._initSelectedMapFromData(o)
        }, t.prototype.mergeDefaultAndTheme = function(r, n) {
            var i = ya(this),
                a = i ? Kv(r) : {},
                o = this.subType;
            it.hasClass(o) && (o += "Series"), ct(r, n.getTheme().get(this.subType)), ct(r, this.getDefaultOption()), bs(r, "label", ["show"]), this.fillDataTextStyle(r.data), i && ma(r, a, i)
        }, t.prototype.mergeOption = function(r, n) {
            r = ct(this.option, r, !0), this.fillDataTextStyle(r.data);
            var i = ya(this);
            i && ma(this.option, r, i);
            var a = ze(this).sourceManager;
            a.dirty(), a.prepareSource();
            var o = this.getInitialData(r, n);
            Rf(o, this), this.dataTask.dirty(), this.dataTask.context.data = o, ze(this).dataBeforeProcessed = o, Af(this), this._initSelectedMapFromData(o)
        }, t.prototype.fillDataTextStyle = function(r) {
            if (r && !zt(r))
                for (var n = ["show"], i = 0; i < r.length; i++) r[i] && r[i].label && bs(r[i], "label", n)
        }, t.prototype.getInitialData = function(r, n) {}, t.prototype.appendData = function(r) {
            var n = this.getRawData();
            n.appendData(r.data)
        }, t.prototype.getData = function(r) {
            var n = Us(this);
            if (n) {
                var i = n.context.data;
                return r == null || !i.getLinkedData ? i : i.getLinkedData(r)
            } else return ze(this).data
        }, t.prototype.getAllData = function() {
            var r = this.getData();
            return r && r.getLinkedDataAll ? r.getLinkedDataAll() : [{
                data: r
            }]
        }, t.prototype.setData = function(r) {
            var n = Us(this);
            if (n) {
                var i = n.context;
                i.outputData = r, n !== this.dataTask && (i.data = r)
            }
            ze(this).data = r
        }, t.prototype.getEncode = function() {
            var r = this.get("encode", !0);
            if (r) return Z(r)
        }, t.prototype.getSourceManager = function() {
            return ze(this).sourceManager
        }, t.prototype.getSource = function() {
            return this.getSourceManager().getSource()
        }, t.prototype.getRawData = function() {
            return ze(this).dataBeforeProcessed
        }, t.prototype.getColorBy = function() {
            var r = this.get("colorBy");
            return r || "series"
        }, t.prototype.isColorBySeries = function() {
            return this.getColorBy() === "series"
        }, t.prototype.getBaseAxis = function() {
            var r = this.coordinateSystem;
            return r && r.getBaseAxis && r.getBaseAxis()
        }, t.prototype.formatTooltip = function(r, n, i) {
            return T_({
                series: this,
                dataIndex: r,
                multipleSeries: n
            })
        }, t.prototype.isAnimationEnabled = function() {
            var r = this.ecModel;
            if (K.node && !(r && r.ssr)) return !1;
            var n = this.getShallow("animation");
            return n && this.getData().count() > this.getShallow("animationThreshold") && (n = !1), !!n
        }, t.prototype.restoreData = function() {
            this.dataTask.dirty()
        }, t.prototype.getColorFromPalette = function(r, n, i) {
            var a = this.ecModel,
                o = Au.prototype.getColorFromPalette.call(this, r, n, i);
            return o || (o = a.getColorFromPalette(r, n, i)), o
        }, t.prototype.coordDimToDataDim = function(r) {
            return this.getRawData().mapDimensionsAll(r)
        }, t.prototype.getProgressive = function() {
            return this.get("progressive")
        }, t.prototype.getProgressiveThreshold = function() {
            return this.get("progressiveThreshold")
        }, t.prototype.select = function(r, n) {
            this._innerSelect(this.getData(n), r)
        }, t.prototype.unselect = function(r, n) {
            var i = this.option.selectedMap;
            if (i) {
                var a = this.option.selectedMode,
                    o = this.getData(n);
                if (a === "series" || i === "all") {
                    this.option.selectedMap = {}, this._selectedDataIndicesMap = {};
                    return
                }
                for (var s = 0; s < r.length; s++) {
                    var u = r[s],
                        l = Oi(o, u);
                    i[l] = !1, this._selectedDataIndicesMap[l] = -1
                }
            }
        }, t.prototype.toggleSelect = function(r, n) {
            for (var i = [], a = 0; a < r.length; a++) i[0] = r[a], this.isSelected(r[a], n) ? this.unselect(i, n) : this.select(i, n)
        }, t.prototype.getSelectedDataIndices = function() {
            if (this.option.selectedMap === "all") return [].slice.call(this.getData().getIndices());
            for (var r = this._selectedDataIndicesMap, n = ht(r), i = [], a = 0; a < n.length; a++) {
                var o = r[n[a]];
                o >= 0 && i.push(o)
            }
            return i
        }, t.prototype.isSelected = function(r, n) {
            var i = this.option.selectedMap;
            if (!i) return !1;
            var a = this.getData(n);
            return (i === "all" || i[Oi(a, r)]) && !a.getItemModel(r).get(["select", "disabled"])
        }, t.prototype.isUniversalTransitionEnabled = function() {
            if (this[D_]) return !0;
            var r = this.option.universalTransition;
            return r ? r === !0 ? !0 : r && r.enabled : !1
        }, t.prototype._innerSelect = function(r, n) {
            var i, a, o = this.option,
                s = o.selectedMode,
                u = n.length;
            if (!(!s || !u)) {
                if (s === "series") o.selectedMap = "all";
                else if (s === "multiple") {
                    H(o.selectedMap) || (o.selectedMap = {});
                    for (var l = o.selectedMap, f = 0; f < u; f++) {
                        var h = n[f],
                            c = Oi(r, h);
                        l[c] = !0, this._selectedDataIndicesMap[c] = r.getRawIndex(h)
                    }
                } else if (s === "single" || s === !0) {
                    var v = n[u - 1],
                        c = Oi(r, v);
                    o.selectedMap = (i = {}, i[c] = !0, i), this._selectedDataIndicesMap = (a = {}, a[c] = r.getRawIndex(v), a)
                }
            }
        }, t.prototype._initSelectedMapFromData = function(r) {
            if (!this.option.selectedMap) {
                var n = [];
                r.hasItemOption && r.each(function(i) {
                    var a = r.getRawDataItem(i);
                    a && a.selected && n.push(i)
                }), n.length > 0 && this._innerSelect(r, n)
            }
        }, t.registerClass = function(r) {
            return it.registerClass(r)
        }, t.protoInitialize = function() {
            var r = t.prototype;
            r.type = "series.__base__", r.seriesIndex = 0, r.ignoreStyleOnData = !1, r.hasSymbolVisual = !1, r.defaultSymbol = "circle", r.visualStyleAccessPath = "itemStyle", r.visualDrawType = "fill"
        }(), t
    }(it);
Ie(Qe, qm);
Ie(Qe, Au);
iv(Qe, it);

function Af(e) {
    var t = e.name;
    tv(e) || (e.name = M_(e) || t)
}

function M_(e) {
    var t = e.getRawData(),
        r = t.mapDimensionsAll("seriesName"),
        n = [];
    return P(r, function(i) {
        var a = t.getDimensionInfo(i);
        a.displayName && n.push(a.displayName)
    }), n.join(" ")
}

function C_(e) {
    return e.model.getRawData().count()
}

function P_(e) {
    var t = e.model;
    return t.setData(t.getRawData().cloneShallow()), A_
}

function A_(e, t) {
    t.outputData && e.end > t.outputData.count() && t.model.getRawData().cloneShallow(t.outputData)
}

function Rf(e, t) {
    P(Ed(e.CHANGABLE_METHODS, e.DOWNSAMPLE_METHODS), function(r) {
        e.wrapMethod(r, si(R_, t))
    })
}

function R_(e, t) {
    var r = Us(e);
    return r && r.setOutputEnd((t || this).count()), t
}

function Us(e) {
    var t = (e.ecModel || {}).scheduler,
        r = t && t.getPipeline(e.uid);
    if (r) {
        var n = r.currentTask;
        if (n) {
            var i = n.agentStubMap;
            i && (n = i.get(e.uid))
        }
        return n
    }
}
var ni = function() {
    function e() {
        this.group = new sn, this.uid = Ua("viewComponent")
    }
    return e.prototype.init = function(t, r) {}, e.prototype.render = function(t, r, n, i) {}, e.prototype.dispose = function(t, r) {}, e.prototype.updateView = function(t, r, n, i) {}, e.prototype.updateLayout = function(t, r, n, i) {}, e.prototype.updateVisual = function(t, r, n, i) {}, e.prototype.toggleBlurSeries = function(t, r, n) {}, e.prototype.eachRendered = function(t) {
        var r = this.group;
        r && r.traverse(t)
    }, e
}();
su(ni);
uu(ni);

function x_() {
    var e = Pt();
    return function(t) {
        var r = e(t),
            n = t.pipelineContext,
            i = !!r.large,
            a = !!r.progressiveRender,
            o = r.large = !!(n && n.large),
            s = r.progressiveRender = !!(n && n.progressiveRender);
        return (i !== o || a !== s) && "reset"
    }
}
var Dc = Pt(),
    L_ = x_(),
    $e = function() {
        function e() {
            this.group = new sn, this.uid = Ua("viewChart"), this.renderTask = $n({
                plan: I_,
                reset: E_
            }), this.renderTask.context = {
                view: this
            }
        }
        return e.prototype.init = function(t, r) {}, e.prototype.render = function(t, r, n, i) {}, e.prototype.highlight = function(t, r, n, i) {
            var a = t.getData(i && i.dataType);
            a && Lf(a, i, "emphasis")
        }, e.prototype.downplay = function(t, r, n, i) {
            var a = t.getData(i && i.dataType);
            a && Lf(a, i, "normal")
        }, e.prototype.remove = function(t, r) {
            this.group.removeAll()
        }, e.prototype.dispose = function(t, r) {}, e.prototype.updateView = function(t, r, n, i) {
            this.render(t, r, n, i)
        }, e.prototype.updateLayout = function(t, r, n, i) {
            this.render(t, r, n, i)
        }, e.prototype.updateVisual = function(t, r, n, i) {
            this.render(t, r, n, i)
        }, e.prototype.eachRendered = function(t) {
            zv(this.group, t)
        }, e.markUpdateMethod = function(t, r) {
            Dc(t).updateMethod = r
        }, e.protoInitialize = function() {
            var t = e.prototype;
            t.type = "chart"
        }(), e
    }();

function xf(e, t, r) {
    e && Ls(e) && (t === "emphasis" ? Ps : As)(e, r)
}

function Lf(e, t, r) {
    var n = Ia(e, t),
        i = t && t.highlightKey != null ? B0(t.highlightKey) : null;
    n != null ? P(St(n), function(a) {
        xf(e.getItemGraphicEl(a), r, i)
    }) : e.eachItemGraphicEl(function(a) {
        xf(a, r, i)
    })
}
su($e);
uu($e);

function I_(e) {
    return L_(e.model)
}

function E_(e) {
    var t = e.model,
        r = e.ecModel,
        n = e.api,
        i = e.payload,
        a = t.pipelineContext.progressiveRender,
        o = e.view,
        s = i && Dc(i).updateMethod,
        u = a ? "incrementalPrepareRender" : s && o[s] ? s : "render";
    return u !== "render" && o[u](t, r, n, i), O_[u]
}
var O_ = {
        incrementalPrepareRender: {
            progress: function(e, t) {
                t.view.incrementalRender(e, t.model, t.ecModel, t.api, t.payload)
            }
        },
        render: {
            forceFirstProgress: !0,
            progress: function(e, t) {
                t.view.render(t.model, t.ecModel, t.api, t.payload)
            }
        }
    },
    Sa = "\0__throttleOriginMethod",
    If = "\0__throttleRate",
    Ef = "\0__throttleType";

function Mc(e, t, r) {
    var n, i = 0,
        a = 0,
        o = null,
        s, u, l, f;
    t = t || 0;

    function h() {
        a = new Date().getTime(), o = null, e.apply(u, l || [])
    }
    var c = function() {
        for (var v = [], d = 0; d < arguments.length; d++) v[d] = arguments[d];
        n = new Date().getTime(), u = this, l = v;
        var g = f || t,
            p = f || r;
        f = null, s = n - (p ? i : a) - g, clearTimeout(o), p ? o = setTimeout(h, g) : s >= 0 ? h() : o = setTimeout(h, -s), i = n
    };
    return c.clear = function() {
        o && (clearTimeout(o), o = null)
    }, c.debounceNextCall = function(v) {
        f = v
    }, c
}

function mT(e, t, r, n) {
    var i = e[t];
    if (i) {
        var a = i[Sa] || i,
            o = i[Ef],
            s = i[If];
        if (s !== r || o !== n) {
            if (r == null || !n) return e[t] = a;
            i = e[t] = Mc(a, r, n === "debounce"), i[Sa] = a, i[Ef] = n, i[If] = r
        }
        return i
    }
}

function _T(e, t) {
    var r = e[t];
    r && r[Sa] && (r.clear && r.clear(), e[t] = r[Sa])
}
var Of = Pt(),
    kf = {
        itemStyle: ti(Vv, !0),
        lineStyle: ti(Gv, !0)
    },
    k_ = {
        lineStyle: "stroke",
        itemStyle: "fill"
    };

function Cc(e, t) {
    var r = e.visualStyleMapper || kf[t];
    return r || (console.warn("Unknown style type '" + t + "'."), kf.itemStyle)
}

function Pc(e, t) {
    var r = e.visualDrawType || k_[t];
    return r || (console.warn("Unknown style type '" + t + "'."), "fill")
}
var F_ = {
        createOnAllSeries: !0,
        performRawSeries: !0,
        reset: function(e, t) {
            var r = e.getData(),
                n = e.visualStyleAccessPath || "itemStyle",
                i = e.getModel(n),
                a = Cc(e, n),
                o = a(i),
                s = i.getShallow("decal");
            s && (r.setVisual("decal", s), s.dirty = !0);
            var u = Pc(e, n),
                l = o[u],
                f = rt(l) ? l : null,
                h = o.fill === "auto" || o.stroke === "auto";
            if (!o[u] || f || h) {
                var c = e.getColorFromPalette(e.name, null, t.getSeriesCount());
                o[u] || (o[u] = c, r.setVisual("colorFromPalette", !0)), o.fill = o.fill === "auto" || rt(o.fill) ? c : o.fill, o.stroke = o.stroke === "auto" || rt(o.stroke) ? c : o.stroke
            }
            if (r.setVisual("style", o), r.setVisual("drawType", u), !t.isSeriesFiltered(e) && f) return r.setVisual("colorFromPalette", !1), {
                dataEach: function(v, d) {
                    var g = e.getDataParams(d),
                        p = I({}, o);
                    p[u] = f(g), v.setItemVisual(d, "style", p)
                }
            }
        }
    },
    bn = new xt,
    N_ = {
        createOnAllSeries: !0,
        performRawSeries: !0,
        reset: function(e, t) {
            if (!(e.ignoreStyleOnData || t.isSeriesFiltered(e))) {
                var r = e.getData(),
                    n = e.visualStyleAccessPath || "itemStyle",
                    i = Cc(e, n),
                    a = r.getVisual("drawType");
                return {
                    dataEach: r.hasItemOption ? function(o, s) {
                        var u = o.getRawDataItem(s);
                        if (u && u[n]) {
                            bn.option = u[n];
                            var l = i(bn),
                                f = o.ensureUniqueItemVisual(s, "style");
                            I(f, l), bn.option.decal && (o.setItemVisual(s, "decal", bn.option.decal), bn.option.decal.dirty = !0), a in l && o.setItemVisual(s, "colorFromPalette", !1)
                        }
                    } : null
                }
            }
        }
    },
    B_ = {
        performRawSeries: !0,
        overallReset: function(e) {
            var t = Z();
            e.eachSeries(function(r) {
                var n = r.getColorBy();
                if (!r.isColorBySeries()) {
                    var i = r.type + "-" + n,
                        a = t.get(i);
                    a || (a = {}, t.set(i, a)), Of(r).scope = a
                }
            }), e.eachSeries(function(r) {
                if (!(r.isColorBySeries() || e.isSeriesFiltered(r))) {
                    var n = r.getRawData(),
                        i = {},
                        a = r.getData(),
                        o = Of(r).scope,
                        s = r.visualStyleAccessPath || "itemStyle",
                        u = Pc(r, s);
                    a.each(function(l) {
                        var f = a.getRawIndex(l);
                        i[f] = l
                    }), n.each(function(l) {
                        var f = i[l],
                            h = a.getItemVisual(f, "colorFromPalette");
                        if (h) {
                            var c = a.ensureUniqueItemVisual(f, "style"),
                                v = n.getName(l) || l + "",
                                d = n.count();
                            c[u] = r.getColorFromPalette(v, o, d)
                        }
                    })
                }
            })
        }
    },
    ki = Math.PI;

function z_(e, t) {
    t = t || {}, dt(t, {
        text: "loading",
        textColor: "#000",
        fontSize: 12,
        fontWeight: "normal",
        fontStyle: "normal",
        fontFamily: "sans-serif",
        maskColor: "rgba(255, 255, 255, 0.8)",
        showSpinner: !0,
        color: "#5470c6",
        spinnerRadius: 10,
        lineWidth: 5,
        zlevel: 0
    });
    var r = new sn,
        n = new we({
            style: {
                fill: t.maskColor
            },
            zlevel: t.zlevel,
            z: 1e4
        });
    r.add(n);
    var i = new Rr({
            style: {
                text: t.text,
                fill: t.textColor,
                fontSize: t.fontSize,
                fontWeight: t.fontWeight,
                fontStyle: t.fontStyle,
                fontFamily: t.fontFamily
            },
            zlevel: t.zlevel,
            z: 10001
        }),
        a = new we({
            style: {
                fill: "none"
            },
            textContent: i,
            textConfig: {
                position: "right",
                distance: 10
            },
            zlevel: t.zlevel,
            z: 10001
        });
    r.add(a);
    var o;
    return t.showSpinner && (o = new Ga({
        shape: {
            startAngle: -ki / 2,
            endAngle: -ki / 2 + .1,
            r: t.spinnerRadius
        },
        style: {
            stroke: t.color,
            lineCap: "round",
            lineWidth: t.lineWidth
        },
        zlevel: t.zlevel,
        z: 10001
    }), o.animateShape(!0).when(1e3, {
        endAngle: ki * 3 / 2
    }).start("circularInOut"), o.animateShape(!0).when(1e3, {
        startAngle: ki * 3 / 2
    }).delay(300).start("circularInOut"), r.add(o)), r.resize = function() {
        var s = i.getBoundingRect().width,
            u = t.showSpinner ? t.spinnerRadius : 0,
            l = (e.getWidth() - u * 2 - (t.showSpinner && s ? 10 : 0) - s) / 2 - (t.showSpinner && s ? 0 : 5 + s / 2) + (t.showSpinner ? 0 : s / 2) + (s ? 0 : u),
            f = e.getHeight() / 2;
        t.showSpinner && o.setShape({
            cx: l,
            cy: f
        }), a.setShape({
            x: l - u,
            y: f - u,
            width: u * 2,
            height: u * 2
        }), n.setShape({
            x: 0,
            y: 0,
            width: e.getWidth(),
            height: e.getHeight()
        })
    }, r.resize(), r
}
var Ac = function() {
    function e(t, r, n, i) {
        this._stageTaskMap = Z(), this.ecInstance = t, this.api = r, n = this._dataProcessorHandlers = n.slice(), i = this._visualHandlers = i.slice(), this._allHandlers = n.concat(i)
    }
    return e.prototype.restoreData = function(t, r) {
        t.restoreData(r), this._stageTaskMap.each(function(n) {
            var i = n.overallTask;
            i && i.dirty()
        })
    }, e.prototype.getPerformArgs = function(t, r) {
        if (t.__pipeline) {
            var n = this._pipelineMap.get(t.__pipeline.id),
                i = n.context,
                a = !r && n.progressiveEnabled && (!i || i.progressiveRender) && t.__idxInPipeline > n.blockIndex,
                o = a ? n.step : null,
                s = i && i.modDataCount,
                u = s != null ? Math.ceil(s / o) : null;
            return {
                step: o,
                modBy: u,
                modDataCount: s
            }
        }
    }, e.prototype.getPipeline = function(t) {
        return this._pipelineMap.get(t)
    }, e.prototype.updateStreamModes = function(t, r) {
        var n = this._pipelineMap.get(t.uid),
            i = t.getData(),
            a = i.count(),
            o = n.progressiveEnabled && r.incrementalPrepareRender && a >= n.threshold,
            s = t.get("large") && a >= t.get("largeThreshold"),
            u = t.get("progressiveChunkMode") === "mod" ? a : null;
        t.pipelineContext = n.context = {
            progressiveRender: o,
            modDataCount: u,
            large: s
        }
    }, e.prototype.restorePipelines = function(t) {
        var r = this,
            n = r._pipelineMap = Z();
        t.eachSeries(function(i) {
            var a = i.getProgressive(),
                o = i.uid;
            n.set(o, {
                id: o,
                head: null,
                tail: null,
                threshold: i.getProgressiveThreshold(),
                progressiveEnabled: a && !(i.preventIncremental && i.preventIncremental()),
                blockIndex: -1,
                step: Math.round(a || 700),
                count: 0
            }), r._pipe(i, i.dataTask)
        })
    }, e.prototype.prepareStageTasks = function() {
        var t = this._stageTaskMap,
            r = this.api.getModel(),
            n = this.api;
        P(this._allHandlers, function(i) {
            var a = t.get(i.uid) || t.set(i.uid, {}),
                o = "";
            Te(!(i.reset && i.overallReset), o), i.reset && this._createSeriesStageTask(i, a, r, n), i.overallReset && this._createOverallStageTask(i, a, r, n)
        }, this)
    }, e.prototype.prepareView = function(t, r, n, i) {
        var a = t.renderTask,
            o = a.context;
        o.model = r, o.ecModel = n, o.api = i, a.__block = !t.incrementalPrepareRender, this._pipe(r, a)
    }, e.prototype.performDataProcessorTasks = function(t, r) {
        this._performStageTasks(this._dataProcessorHandlers, t, r, {
            block: !0
        })
    }, e.prototype.performVisualTasks = function(t, r, n) {
        this._performStageTasks(this._visualHandlers, t, r, n)
    }, e.prototype._performStageTasks = function(t, r, n, i) {
        i = i || {};
        var a = !1,
            o = this;
        P(t, function(u, l) {
            if (!(i.visualType && i.visualType !== u.visualType)) {
                var f = o._stageTaskMap.get(u.uid),
                    h = f.seriesTaskMap,
                    c = f.overallTask;
                if (c) {
                    var v, d = c.agentStubMap;
                    d.each(function(p) {
                        s(i, p) && (p.dirty(), v = !0)
                    }), v && c.dirty(), o.updatePayload(c, n);
                    var g = o.getPerformArgs(c, i.block);
                    d.each(function(p) {
                        p.perform(g)
                    }), c.perform(g) && (a = !0)
                } else h && h.each(function(p, y) {
                    s(i, p) && p.dirty();
                    var m = o.getPerformArgs(p, i.block);
                    m.skip = !u.performRawSeries && r.isSeriesFiltered(p.context.model), o.updatePayload(p, n), p.perform(m) && (a = !0)
                })
            }
        });

        function s(u, l) {
            return u.setDirty && (!u.dirtyMap || u.dirtyMap.get(l.__pipeline.id))
        }
        this.unfinished = a || this.unfinished
    }, e.prototype.performSeriesTasks = function(t) {
        var r;
        t.eachSeries(function(n) {
            r = n.dataTask.perform() || r
        }), this.unfinished = r || this.unfinished
    }, e.prototype.plan = function() {
        this._pipelineMap.each(function(t) {
            var r = t.tail;
            do {
                if (r.__block) {
                    t.blockIndex = r.__idxInPipeline;
                    break
                }
                r = r.getUpstream()
            } while (r)
        })
    }, e.prototype.updatePayload = function(t, r) {
        r !== "remain" && (t.context.payload = r)
    }, e.prototype._createSeriesStageTask = function(t, r, n, i) {
        var a = this,
            o = r.seriesTaskMap,
            s = r.seriesTaskMap = Z(),
            u = t.seriesType,
            l = t.getTargetSeries;
        t.createOnAllSeries ? n.eachRawSeries(f) : u ? n.eachRawSeriesByType(u, f) : l && l(n, i).each(f);

        function f(h) {
            var c = h.uid,
                v = s.set(c, o && o.get(c) || $n({
                    plan: Y_,
                    reset: W_,
                    count: q_
                }));
            v.context = {
                model: h,
                ecModel: n,
                api: i,
                useClearVisual: t.isVisual && !t.isLayout,
                plan: t.plan,
                reset: t.reset,
                scheduler: a
            }, a._pipe(h, v)
        }
    }, e.prototype._createOverallStageTask = function(t, r, n, i) {
        var a = this,
            o = r.overallTask = r.overallTask || $n({
                reset: H_
            });
        o.context = {
            ecModel: n,
            api: i,
            overallReset: t.overallReset,
            scheduler: a
        };
        var s = o.agentStubMap,
            u = o.agentStubMap = Z(),
            l = t.seriesType,
            f = t.getTargetSeries,
            h = !0,
            c = !1,
            v = "";
        Te(!t.createOnAllSeries, v), l ? n.eachRawSeriesByType(l, d) : f ? f(n, i).each(d) : (h = !1, P(n.getSeries(), d));

        function d(g) {
            var p = g.uid,
                y = u.set(p, s && s.get(p) || (c = !0, $n({
                    reset: G_,
                    onDirty: U_
                })));
            y.context = {
                model: g,
                overallProgress: h
            }, y.agent = o, y.__block = h, a._pipe(g, y)
        }
        c && o.dirty()
    }, e.prototype._pipe = function(t, r) {
        var n = t.uid,
            i = this._pipelineMap.get(n);
        !i.head && (i.head = r), i.tail && i.tail.pipe(r), i.tail = r, r.__idxInPipeline = i.count++, r.__pipeline = i
    }, e.wrapStageHandler = function(t, r) {
        return rt(t) && (t = {
            overallReset: t,
            seriesType: $_(t)
        }), t.uid = Ua("stageHandler"), r && (t.visualType = r), t
    }, e
}();

function H_(e) {
    e.overallReset(e.ecModel, e.api, e.payload)
}

function G_(e) {
    return e.overallProgress && V_
}

function V_() {
    this.agent.dirty(), this.getDownstream().dirty()
}

function U_() {
    this.agent && this.agent.dirty()
}

function Y_(e) {
    return e.plan ? e.plan(e.model, e.ecModel, e.api, e.payload) : null
}

function W_(e) {
    e.useClearVisual && e.data.clearAllVisual();
    var t = e.resetDefines = St(e.reset(e.model, e.ecModel, e.api, e.payload));
    return t.length > 1 ? Q(t, function(r, n) {
        return Rc(n)
    }) : X_
}
var X_ = Rc(0);

function Rc(e) {
    return function(t, r) {
        var n = r.data,
            i = r.resetDefines[e];
        if (i && i.dataEach)
            for (var a = t.start; a < t.end; a++) i.dataEach(n, a);
        else i && i.progress && i.progress(t, n)
    }
}

function q_(e) {
    return e.data.count()
}

function $_(e) {
    wa = null;
    try {
        e(ii, xc)
    } catch {}
    return wa
}
var ii = {},
    xc = {},
    wa;
Lc(ii, Ru);
Lc(xc, ic);
ii.eachSeriesByType = ii.eachRawSeriesByType = function(e) {
    wa = e
};
ii.eachComponent = function(e) {
    e.mainType === "series" && e.subType && (wa = e.subType)
};

function Lc(e, t) {
    for (var r in t.prototype) e[r] = Qt
}
var Ff = ["#37A2DA", "#32C5E9", "#67E0E3", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#E062AE", "#E690D1", "#e7bcf3", "#9d96f5", "#8378EA", "#96BFFF"];
const Z_ = {
    color: Ff,
    colorLayer: [
        ["#37A2DA", "#ffd85c", "#fd7b5f"],
        ["#37A2DA", "#67E0E3", "#FFDB5C", "#ff9f7f", "#E062AE", "#9d96f5"],
        ["#37A2DA", "#32C5E9", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#e7bcf3", "#8378EA", "#96BFFF"], Ff
    ]
};
var bt = "#B9B8CE",
    Nf = "#100C2A",
    Fi = function() {
        return {
            axisLine: {
                lineStyle: {
                    color: bt
                }
            },
            splitLine: {
                lineStyle: {
                    color: "#484753"
                }
            },
            splitArea: {
                areaStyle: {
                    color: ["rgba(255,255,255,0.02)", "rgba(255,255,255,0.05)"]
                }
            },
            minorSplitLine: {
                lineStyle: {
                    color: "#20203B"
                }
            }
        }
    },
    Bf = ["#4992ff", "#7cffb2", "#fddd60", "#ff6e76", "#58d9f9", "#05c091", "#ff8a45", "#8d48e3", "#dd79ff"],
    Ic = {
        darkMode: !0,
        color: Bf,
        backgroundColor: Nf,
        axisPointer: {
            lineStyle: {
                color: "#817f91"
            },
            crossStyle: {
                color: "#817f91"
            },
            label: {
                color: "#fff"
            }
        },
        legend: {
            textStyle: {
                color: bt
            },
            pageTextStyle: {
                color: bt
            }
        },
        textStyle: {
            color: bt
        },
        title: {
            textStyle: {
                color: "#EEF1FA"
            },
            subtextStyle: {
                color: "#B9B8CE"
            }
        },
        toolbox: {
            iconStyle: {
                borderColor: bt
            }
        },
        dataZoom: {
            borderColor: "#71708A",
            textStyle: {
                color: bt
            },
            brushStyle: {
                color: "rgba(135,163,206,0.3)"
            },
            handleStyle: {
                color: "#353450",
                borderColor: "#C5CBE3"
            },
            moveHandleStyle: {
                color: "#B0B6C3",
                opacity: .3
            },
            fillerColor: "rgba(135,163,206,0.2)",
            emphasis: {
                handleStyle: {
                    borderColor: "#91B7F2",
                    color: "#4D587D"
                },
                moveHandleStyle: {
                    color: "#636D9A",
                    opacity: .7
                }
            },
            dataBackground: {
                lineStyle: {
                    color: "#71708A",
                    width: 1
                },
                areaStyle: {
                    color: "#71708A"
                }
            },
            selectedDataBackground: {
                lineStyle: {
                    color: "#87A3CE"
                },
                areaStyle: {
                    color: "#87A3CE"
                }
            }
        },
        visualMap: {
            textStyle: {
                color: bt
            }
        },
        timeline: {
            lineStyle: {
                color: bt
            },
            label: {
                color: bt
            },
            controlStyle: {
                color: bt,
                borderColor: bt
            }
        },
        calendar: {
            itemStyle: {
                color: Nf
            },
            dayLabel: {
                color: bt
            },
            monthLabel: {
                color: bt
            },
            yearLabel: {
                color: bt
            }
        },
        timeAxis: Fi(),
        logAxis: Fi(),
        valueAxis: Fi(),
        categoryAxis: Fi(),
        line: {
            symbol: "circle"
        },
        graph: {
            color: Bf
        },
        gauge: {
            title: {
                color: bt
            },
            axisLine: {
                lineStyle: {
                    color: [
                        [1, "rgba(207,212,219,0.2)"]
                    ]
                }
            },
            axisLabel: {
                color: bt
            },
            detail: {
                color: "#EEF1FA"
            }
        },
        candlestick: {
            itemStyle: {
                color: "#f64e56",
                color0: "#54ea92",
                borderColor: "#f64e56",
                borderColor0: "#54ea92"
            }
        }
    };
Ic.categoryAxis.splitLine.show = !1;
var K_ = function() {
        function e() {}
        return e.prototype.normalizeQuery = function(t) {
            var r = {},
                n = {},
                i = {};
            if (X(t)) {
                var a = _e(t);
                r.mainType = a.main || null, r.subType = a.sub || null
            } else {
                var o = ["Index", "Name", "Id"],
                    s = {
                        name: 1,
                        dataIndex: 1,
                        dataType: 1
                    };
                P(t, function(u, l) {
                    for (var f = !1, h = 0; h < o.length; h++) {
                        var c = o[h],
                            v = l.lastIndexOf(c);
                        if (v > 0 && v === l.length - c.length) {
                            var d = l.slice(0, v);
                            d !== "data" && (r.mainType = d, r[c.toLowerCase()] = u, f = !0)
                        }
                    }
                    s.hasOwnProperty(l) && (n[l] = u, f = !0), f || (i[l] = u)
                })
            }
            return {
                cptQuery: r,
                dataQuery: n,
                otherQuery: i
            }
        }, e.prototype.filter = function(t, r) {
            var n = this.eventInfo;
            if (!n) return !0;
            var i = n.targetEl,
                a = n.packedEvent,
                o = n.model,
                s = n.view;
            if (!o || !s) return !0;
            var u = r.cptQuery,
                l = r.dataQuery;
            return f(u, o, "mainType") && f(u, o, "subType") && f(u, o, "index", "componentIndex") && f(u, o, "name") && f(u, o, "id") && f(l, a, "name") && f(l, a, "dataIndex") && f(l, a, "dataType") && (!s.filterForExposedEvent || s.filterForExposedEvent(t, r.otherQuery, i, a));

            function f(h, c, v, d) {
                return h[v] == null || c[d || v] === h[v]
            }
        }, e.prototype.afterTrigger = function() {
            this.eventInfo = null
        }, e
    }(),
    Ys = ["symbol", "symbolSize", "symbolRotate", "symbolOffset"],
    zf = Ys.concat(["symbolKeepAspect"]),
    Q_ = {
        createOnAllSeries: !0,
        performRawSeries: !0,
        reset: function(e, t) {
            var r = e.getData();
            if (e.legendIcon && r.setVisual("legendIcon", e.legendIcon), !e.hasSymbolVisual) return;
            for (var n = {}, i = {}, a = !1, o = 0; o < Ys.length; o++) {
                var s = Ys[o],
                    u = e.get(s);
                rt(u) ? (a = !0, i[s] = u) : n[s] = u
            }
            if (n.symbol = n.symbol || e.defaultSymbol, r.setVisual(I({
                    legendIcon: e.legendIcon || n.symbol,
                    symbolKeepAspect: e.get("symbolKeepAspect")
                }, n)), t.isSeriesFiltered(e)) return;
            var l = ht(i);

            function f(h, c) {
                for (var v = e.getRawValue(c), d = e.getDataParams(c), g = 0; g < l.length; g++) {
                    var p = l[g];
                    h.setItemVisual(c, p, i[p](v, d))
                }
            }
            return {
                dataEach: a ? f : null
            }
        }
    },
    J_ = {
        createOnAllSeries: !0,
        performRawSeries: !0,
        reset: function(e, t) {
            if (!e.hasSymbolVisual || t.isSeriesFiltered(e)) return;
            var r = e.getData();

            function n(i, a) {
                for (var o = i.getItemModel(a), s = 0; s < zf.length; s++) {
                    var u = zf[s],
                        l = o.getShallow(u, !0);
                    l != null && i.setItemVisual(a, u, l)
                }
            }
            return {
                dataEach: r.hasItemOption ? n : null
            }
        }
    };

function j_(e, t, r) {
    switch (r) {
        case "color":
            var n = e.getItemVisual(t, "style");
            return n[e.getVisual("drawType")];
        case "opacity":
            return e.getItemVisual(t, "style").opacity;
        case "symbol":
        case "symbolSize":
        case "liftZ":
            return e.getItemVisual(t, r)
    }
}

function t1(e, t) {
    switch (t) {
        case "color":
            var r = e.getVisual("style");
            return r[e.getVisual("drawType")];
        case "opacity":
            return e.getVisual("style").opacity;
        case "symbol":
        case "symbolSize":
        case "liftZ":
            return e.getVisual(t)
    }
}

function ST(e, t, r, n) {
    switch (r) {
        case "color":
            var i = e.ensureUniqueItemVisual(t, "style");
            i[e.getVisual("drawType")] = n, e.setItemVisual(t, "colorFromPalette", !1);
            break;
        case "opacity":
            e.ensureUniqueItemVisual(t, "style").opacity = n;
            break;
        case "symbol":
        case "symbolSize":
        case "liftZ":
            e.setItemVisual(t, r, n);
            break
    }
}

function e1(e, t) {
    function r(n, i) {
        var a = [];
        return n.eachComponent({
            mainType: "series",
            subType: e,
            query: i
        }, function(o) {
            a.push(o.seriesIndex)
        }), a
    }
    P([
        [e + "ToggleSelect", "toggleSelect"],
        [e + "Select", "select"],
        [e + "UnSelect", "unselect"]
    ], function(n) {
        t(n[0], function(i, a, o) {
            i = I({}, i), o.dispatchAction(I(i, {
                type: n[1],
                seriesIndex: r(a, i)
            }))
        })
    })
}

function Yr(e, t, r, n, i) {
    var a = e + t;
    r.isSilent(a) || n.eachComponent({
        mainType: "series",
        subType: "pie"
    }, function(o) {
        for (var s = o.seriesIndex, u = o.option.selectedMap, l = i.selected, f = 0; f < l.length; f++)
            if (l[f].seriesIndex === s) {
                var h = o.getData(),
                    c = Ia(h, i.fromActionPayload);
                r.trigger(a, {
                    type: a,
                    seriesId: o.id,
                    name: F(c) ? h.getName(c[0]) : h.getName(c),
                    selected: X(u) ? u : I({}, u)
                })
            }
    })
}

function r1(e, t, r) {
    e.on("selectchanged", function(n) {
        var i = r.getModel();
        n.isFromClick ? (Yr("map", "selectchanged", t, i, n), Yr("pie", "selectchanged", t, i, n)) : n.fromAction === "select" ? (Yr("map", "selected", t, i, n), Yr("pie", "selected", t, i, n)) : n.fromAction === "unselect" && (Yr("map", "unselected", t, i, n), Yr("pie", "unselected", t, i, n))
    })
}

function Ni(e, t, r) {
    for (var n; e && !(t(e) && (n = e, r));) e = e.__hostTarget || e.parent;
    return n
}
var n1 = Math.round(Math.random() * 9),
    i1 = typeof Object.defineProperty == "function",
    a1 = function() {
        function e() {
            this._id = "__ec_inner_" + n1++
        }
        return e.prototype.get = function(t) {
            return this._guard(t)[this._id]
        }, e.prototype.set = function(t, r) {
            var n = this._guard(t);
            return i1 ? Object.defineProperty(n, this._id, {
                value: r,
                enumerable: !1,
                configurable: !0
            }) : n[this._id] = r, this
        }, e.prototype.delete = function(t) {
            return this.has(t) ? (delete this._guard(t)[this._id], !0) : !1
        }, e.prototype.has = function(t) {
            return !!this._guard(t)[this._id]
        }, e.prototype._guard = function(t) {
            if (t !== Object(t)) throw TypeError("Value of WeakMap is not a non-null object.");
            return t
        }, e
    }(),
    o1 = et.extend({
        type: "triangle",
        shape: {
            cx: 0,
            cy: 0,
            width: 0,
            height: 0
        },
        buildPath: function(e, t) {
            var r = t.cx,
                n = t.cy,
                i = t.width / 2,
                a = t.height / 2;
            e.moveTo(r, n - a), e.lineTo(r + i, n + a), e.lineTo(r - i, n + a), e.closePath()
        }
    }),
    s1 = et.extend({
        type: "diamond",
        shape: {
            cx: 0,
            cy: 0,
            width: 0,
            height: 0
        },
        buildPath: function(e, t) {
            var r = t.cx,
                n = t.cy,
                i = t.width / 2,
                a = t.height / 2;
            e.moveTo(r, n - a), e.lineTo(r + i, n), e.lineTo(r, n + a), e.lineTo(r - i, n), e.closePath()
        }
    }),
    u1 = et.extend({
        type: "pin",
        shape: {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        },
        buildPath: function(e, t) {
            var r = t.x,
                n = t.y,
                i = t.width / 5 * 3,
                a = Math.max(i, t.height),
                o = i / 2,
                s = o * o / (a - o),
                u = n - a + o + s,
                l = Math.asin(s / o),
                f = Math.cos(l) * o,
                h = Math.sin(l),
                c = Math.cos(l),
                v = o * .6,
                d = o * .7;
            e.moveTo(r - f, u + s), e.arc(r, u, o, Math.PI - l, Math.PI * 2 + l), e.bezierCurveTo(r + f - h * v, u + s + c * v, r, n - d, r, n), e.bezierCurveTo(r, n - d, r - f + h * v, u + s + c * v, r - f, u + s), e.closePath()
        }
    }),
    l1 = et.extend({
        type: "arrow",
        shape: {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        },
        buildPath: function(e, t) {
            var r = t.height,
                n = t.width,
                i = t.x,
                a = t.y,
                o = n / 3 * 2;
            e.moveTo(i, a), e.lineTo(i + o, a + r), e.lineTo(i, a + r / 4 * 3), e.lineTo(i - o, a + r), e.lineTo(i, a), e.closePath()
        }
    }),
    f1 = {
        line: Ha,
        rect: we,
        roundRect: we,
        square: we,
        circle: za,
        diamond: s1,
        pin: u1,
        arrow: l1,
        triangle: o1
    },
    h1 = {
        line: function(e, t, r, n, i) {
            i.x1 = e, i.y1 = t + n / 2, i.x2 = e + r, i.y2 = t + n / 2
        },
        rect: function(e, t, r, n, i) {
            i.x = e, i.y = t, i.width = r, i.height = n
        },
        roundRect: function(e, t, r, n, i) {
            i.x = e, i.y = t, i.width = r, i.height = n, i.r = Math.min(r, n) / 4
        },
        square: function(e, t, r, n, i) {
            var a = Math.min(r, n);
            i.x = e, i.y = t, i.width = a, i.height = a
        },
        circle: function(e, t, r, n, i) {
            i.cx = e + r / 2, i.cy = t + n / 2, i.r = Math.min(r, n) / 2
        },
        diamond: function(e, t, r, n, i) {
            i.cx = e + r / 2, i.cy = t + n / 2, i.width = r, i.height = n
        },
        pin: function(e, t, r, n, i) {
            i.x = e + r / 2, i.y = t + n / 2, i.width = r, i.height = n
        },
        arrow: function(e, t, r, n, i) {
            i.x = e + r / 2, i.y = t + n / 2, i.width = r, i.height = n
        },
        triangle: function(e, t, r, n, i) {
            i.cx = e + r / 2, i.cy = t + n / 2, i.width = r, i.height = n
        }
    },
    Ws = {};
P(f1, function(e, t) {
    Ws[t] = new e
});
var v1 = et.extend({
    type: "symbol",
    shape: {
        symbolType: "",
        x: 0,
        y: 0,
        width: 0,
        height: 0
    },
    calculateTextPosition: function(e, t, r) {
        var n = Yh(e, t, r),
            i = this.shape;
        return i && i.symbolType === "pin" && t.position === "inside" && (n.y = r.y + r.height * .4), n
    },
    buildPath: function(e, t, r) {
        var n = t.symbolType;
        if (n !== "none") {
            var i = Ws[n];
            i || (n = "rect", i = Ws[n]), h1[n](t.x, t.y, t.width, t.height, i.shape), i.buildPath(e, i.shape, r)
        }
    }
});

function c1(e, t) {
    if (this.type !== "image") {
        var r = this.style;
        this.__isEmptyBrush ? (r.stroke = e, r.fill = t || "#fff", r.lineWidth = 2) : this.shape.symbolType === "line" ? r.stroke = e : r.fill = e, this.markRedraw()
    }
}

function d1(e, t, r, n, i, a, o) {
    var s = e.indexOf("empty") === 0;
    s && (e = e.substr(5, 1).toLowerCase() + e.substr(6));
    var u;
    return e.indexOf("image://") === 0 ? u = Ov(e.slice(8), new nt(t, r, n, i), o ? "center" : "cover") : e.indexOf("path://") === 0 ? u = mu(e.slice(7), {}, new nt(t, r, n, i), o ? "center" : "cover") : u = new v1({
        shape: {
            symbolType: e,
            x: t,
            y: r,
            width: n,
            height: i
        }
    }), u.__isEmptyBrush = s, u.setColor = c1, a && u.setColor(a), u
}

function wT(e) {
    return F(e) || (e = [+e, +e]), [e[0] || 0, e[1] || 0]
}

function TT(e, t) {
    if (e != null) return F(e) || (e = [e, e]), [lt(e[0], t[0]) || 0, lt(q(e[1], e[0]), t[1]) || 0]
}

function wr(e) {
    return isFinite(e)
}

function p1(e, t, r) {
    var n = t.x == null ? 0 : t.x,
        i = t.x2 == null ? 1 : t.x2,
        a = t.y == null ? 0 : t.y,
        o = t.y2 == null ? 0 : t.y2;
    t.global || (n = n * r.width + r.x, i = i * r.width + r.x, a = a * r.height + r.y, o = o * r.height + r.y), n = wr(n) ? n : 0, i = wr(i) ? i : 1, a = wr(a) ? a : 0, o = wr(o) ? o : 0;
    var s = e.createLinearGradient(n, a, i, o);
    return s
}

function g1(e, t, r) {
    var n = r.width,
        i = r.height,
        a = Math.min(n, i),
        o = t.x == null ? .5 : t.x,
        s = t.y == null ? .5 : t.y,
        u = t.r == null ? .5 : t.r;
    t.global || (o = o * n + r.x, s = s * i + r.y, u = u * a), o = wr(o) ? o : .5, s = wr(s) ? s : .5, u = u >= 0 && wr(u) ? u : .5;
    var l = e.createRadialGradient(o, s, 0, o, s, u);
    return l
}

function Hf(e, t, r) {
    for (var n = t.type === "radial" ? g1(e, t, r) : p1(e, t, r), i = t.colorStops, a = 0; a < i.length; a++) n.addColorStop(i[a].offset, i[a].color);
    return n
}

function y1(e, t) {
    if (e === t || !e && !t) return !1;
    if (!e || !t || e.length !== t.length) return !0;
    for (var r = 0; r < e.length; r++)
        if (e[r] !== t[r]) return !0;
    return !1
}

function Bi(e) {
    return parseInt(e, 10)
}

function bT(e, t, r) {
    var n = ["width", "height"][t],
        i = ["clientWidth", "clientHeight"][t],
        a = ["paddingLeft", "paddingTop"][t],
        o = ["paddingRight", "paddingBottom"][t];
    if (r[n] != null && r[n] !== "auto") return parseFloat(r[n]);
    var s = document.defaultView.getComputedStyle(e);
    return (e[i] || Bi(s[n]) || Bi(e.style[n])) - (Bi(s[a]) || 0) - (Bi(s[o]) || 0) | 0
}

function m1(e, t) {
    return !e || e === "solid" || !(t > 0) ? null : e === "dashed" ? [4 * t, 2 * t] : e === "dotted" ? [t] : at(e) ? [e] : F(e) ? e : null
}

function Ec(e) {
    var t = e.style,
        r = t.lineDash && t.lineWidth > 0 && m1(t.lineDash, t.lineWidth),
        n = t.lineDashOffset;
    if (r) {
        var i = t.strokeNoScale && e.getLineScale ? e.getLineScale() : 1;
        i && i !== 1 && (r = Q(r, function(a) {
            return a / i
        }), n /= i)
    }
    return [r, n]
}
var _1 = new Ar(!0);

function Ta(e) {
    var t = e.stroke;
    return !(t == null || t === "none" || !(e.lineWidth > 0))
}

function Gf(e) {
    return typeof e == "string" && e !== "none"
}

function ba(e) {
    var t = e.fill;
    return t != null && t !== "none"
}

function Vf(e, t) {
    if (t.fillOpacity != null && t.fillOpacity !== 1) {
        var r = e.globalAlpha;
        e.globalAlpha = t.fillOpacity * t.opacity, e.fill(), e.globalAlpha = r
    } else e.fill()
}

function Uf(e, t) {
    if (t.strokeOpacity != null && t.strokeOpacity !== 1) {
        var r = e.globalAlpha;
        e.globalAlpha = t.strokeOpacity * t.opacity, e.stroke(), e.globalAlpha = r
    } else e.stroke()
}

function Yf(e, t, r) {
    var n = av(t.image, t.__image, r);
    if (Oa(n)) {
        var i = e.createPattern(n, t.repeat || "repeat");
        if (typeof DOMMatrix == "function" && i && i.setTransform) {
            var a = new DOMMatrix;
            a.translateSelf(t.x || 0, t.y || 0), a.rotateSelf(0, 0, (t.rotation || 0) * Yi), a.scaleSelf(t.scaleX || 1, t.scaleY || 1), i.setTransform(a)
        }
        return i
    }
}

function S1(e, t, r, n) {
    var i, a = Ta(r),
        o = ba(r),
        s = r.strokePercent,
        u = s < 1,
        l = !t.path;
    (!t.silent || u) && l && t.createPathProxy();
    var f = t.path || _1,
        h = t.__dirty;
    if (!n) {
        var c = r.fill,
            v = r.stroke,
            d = o && !!c.colorStops,
            g = a && !!v.colorStops,
            p = o && !!c.image,
            y = a && !!v.image,
            m = void 0,
            _ = void 0,
            S = void 0,
            T = void 0,
            w = void 0;
        (d || g) && (w = t.getBoundingRect()), d && (m = h ? Hf(e, c, w) : t.__canvasFillGradient, t.__canvasFillGradient = m), g && (_ = h ? Hf(e, v, w) : t.__canvasStrokeGradient, t.__canvasStrokeGradient = _), p && (S = h || !t.__canvasFillPattern ? Yf(e, c, t) : t.__canvasFillPattern, t.__canvasFillPattern = S), y && (T = h || !t.__canvasStrokePattern ? Yf(e, v, t) : t.__canvasStrokePattern, t.__canvasStrokePattern = S), d ? e.fillStyle = m : p && (S ? e.fillStyle = S : o = !1), g ? e.strokeStyle = _ : y && (T ? e.strokeStyle = T : a = !1)
    }
    var b = t.getGlobalScale();
    f.setScale(b[0], b[1], t.segmentIgnoreThreshold);
    var M, D;
    e.setLineDash && r.lineDash && (i = Ec(t), M = i[0], D = i[1]);
    var C = !0;
    (l || h & In) && (f.setDPR(e.dpr), u ? f.setContext(null) : (f.setContext(e), C = !1), f.reset(), t.buildPath(f, t.shape, n), f.toStatic(), t.pathUpdated()), C && f.rebuildPath(e, u ? s : 1), M && (e.setLineDash(M), e.lineDashOffset = D), n || (r.strokeFirst ? (a && Uf(e, r), o && Vf(e, r)) : (o && Vf(e, r), a && Uf(e, r))), M && e.setLineDash([])
}

function w1(e, t, r) {
    var n = t.__image = av(r.image, t.__image, t, t.onload);
    if (!(!n || !Oa(n))) {
        var i = r.x || 0,
            a = r.y || 0,
            o = t.getWidth(),
            s = t.getHeight(),
            u = n.width / n.height;
        if (o == null && s != null ? o = s * u : s == null && o != null ? s = o / u : o == null && s == null && (o = n.width, s = n.height), r.sWidth && r.sHeight) {
            var l = r.sx || 0,
                f = r.sy || 0;
            e.drawImage(n, l, f, r.sWidth, r.sHeight, i, a, o, s)
        } else if (r.sx && r.sy) {
            var l = r.sx,
                f = r.sy,
                h = o - l,
                c = s - f;
            e.drawImage(n, l, f, h, c, i, a, o, s)
        } else e.drawImage(n, i, a, o, s)
    }
}

function T1(e, t, r) {
    var n, i = r.text;
    if (i != null && (i += ""), i) {
        e.font = r.font || Cr, e.textAlign = r.textAlign, e.textBaseline = r.textBaseline;
        var a = void 0,
            o = void 0;
        e.setLineDash && r.lineDash && (n = Ec(t), a = n[0], o = n[1]), a && (e.setLineDash(a), e.lineDashOffset = o), r.strokeFirst ? (Ta(r) && e.strokeText(i, r.x, r.y), ba(r) && e.fillText(i, r.x, r.y)) : (ba(r) && e.fillText(i, r.x, r.y), Ta(r) && e.strokeText(i, r.x, r.y)), a && e.setLineDash([])
    }
}
var Wf = ["shadowBlur", "shadowOffsetX", "shadowOffsetY"],
    Xf = [
        ["lineCap", "butt"],
        ["lineJoin", "miter"],
        ["miterLimit", 10]
    ];

function Oc(e, t, r, n, i) {
    var a = !1;
    if (!n && (r = r || {}, t === r)) return !1;
    if (n || t.opacity !== r.opacity) {
        Ft(e, i), a = !0;
        var o = Math.max(Math.min(t.opacity, 1), 0);
        e.globalAlpha = isNaN(o) ? Dr.opacity : o
    }(n || t.blend !== r.blend) && (a || (Ft(e, i), a = !0), e.globalCompositeOperation = t.blend || Dr.blend);
    for (var s = 0; s < Wf.length; s++) {
        var u = Wf[s];
        (n || t[u] !== r[u]) && (a || (Ft(e, i), a = !0), e[u] = e.dpr * (t[u] || 0))
    }
    return (n || t.shadowColor !== r.shadowColor) && (a || (Ft(e, i), a = !0), e.shadowColor = t.shadowColor || Dr.shadowColor), a
}

function qf(e, t, r, n, i) {
    var a = ai(t, i.inHover),
        o = n ? null : r && ai(r, i.inHover) || {};
    if (a === o) return !1;
    var s = Oc(e, a, o, n, i);
    if ((n || a.fill !== o.fill) && (s || (Ft(e, i), s = !0), Gf(a.fill) && (e.fillStyle = a.fill)), (n || a.stroke !== o.stroke) && (s || (Ft(e, i), s = !0), Gf(a.stroke) && (e.strokeStyle = a.stroke)), (n || a.opacity !== o.opacity) && (s || (Ft(e, i), s = !0), e.globalAlpha = a.opacity == null ? 1 : a.opacity), t.hasStroke()) {
        var u = a.lineWidth,
            l = u / (a.strokeNoScale && t.getLineScale ? t.getLineScale() : 1);
        e.lineWidth !== l && (s || (Ft(e, i), s = !0), e.lineWidth = l)
    }
    for (var f = 0; f < Xf.length; f++) {
        var h = Xf[f],
            c = h[0];
        (n || a[c] !== o[c]) && (s || (Ft(e, i), s = !0), e[c] = a[c] || h[1])
    }
    return s
}

function b1(e, t, r, n, i) {
    return Oc(e, ai(t, i.inHover), r && ai(r, i.inHover), n, i)
}

function kc(e, t) {
    var r = t.transform,
        n = e.dpr || 1;
    r ? e.setTransform(n * r[0], n * r[1], n * r[2], n * r[3], n * r[4], n * r[5]) : e.setTransform(n, 0, 0, n, 0, 0)
}

function D1(e, t, r) {
    for (var n = !1, i = 0; i < e.length; i++) {
        var a = e[i];
        n = n || a.isZeroArea(), kc(t, a), t.beginPath(), a.buildPath(t, a.shape), t.clip()
    }
    r.allClipped = n
}

function M1(e, t) {
    return e && t ? e[0] !== t[0] || e[1] !== t[1] || e[2] !== t[2] || e[3] !== t[3] || e[4] !== t[4] || e[5] !== t[5] : !(!e && !t)
}
var $f = 1,
    Zf = 2,
    Kf = 3,
    Qf = 4;

function C1(e) {
    var t = ba(e),
        r = Ta(e);
    return !(e.lineDash || !(+t ^ +r) || t && typeof e.fill != "string" || r && typeof e.stroke != "string" || e.strokePercent < 1 || e.strokeOpacity < 1 || e.fillOpacity < 1)
}

function Ft(e, t) {
    t.batchFill && e.fill(), t.batchStroke && e.stroke(), t.batchFill = "", t.batchStroke = ""
}

function ai(e, t) {
    return t && e.__hoverStyle || e.style
}

function P1(e, t) {
    Xs(e, t, {
        inHover: !1,
        viewWidth: 0,
        viewHeight: 0
    }, !0)
}

function Xs(e, t, r, n) {
    var i = t.transform;
    if (!t.shouldBePainted(r.viewWidth, r.viewHeight, !1, !1)) {
        t.__dirty &= -2, t.__isRendered = !1;
        return
    }
    var a = t.__clipPaths,
        o = r.prevElClipPaths,
        s = !1,
        u = !1;
    if ((!o || y1(a, o)) && (o && o.length && (Ft(e, r), e.restore(), u = s = !0, r.prevElClipPaths = null, r.allClipped = !1, r.prevEl = null), a && a.length && (Ft(e, r), e.save(), D1(a, e, r), s = !0), r.prevElClipPaths = a), r.allClipped) {
        t.__isRendered = !1;
        return
    }
    t.beforeBrush && t.beforeBrush(), t.innerBeforeBrush();
    var l = r.prevEl;
    l || (u = s = !0);
    var f = t instanceof et && t.autoBatch && C1(t.style);
    s || M1(i, l.transform) ? (Ft(e, r), kc(e, t)) : f || Ft(e, r);
    var h = ai(t, r.inHover);
    t instanceof et ? (r.lastDrawType !== $f && (u = !0, r.lastDrawType = $f), qf(e, t, l, u, r), (!f || !r.batchFill && !r.batchStroke) && e.beginPath(), S1(e, t, h, f), f && (r.batchFill = h.fill || "", r.batchStroke = h.stroke || "")) : t instanceof fa ? (r.lastDrawType !== Kf && (u = !0, r.lastDrawType = Kf), qf(e, t, l, u, r), T1(e, t, h)) : t instanceof xr ? (r.lastDrawType !== Zf && (u = !0, r.lastDrawType = Zf), b1(e, t, l, u, r), w1(e, t, h)) : t.getTemporalDisplayables && (r.lastDrawType !== Qf && (u = !0, r.lastDrawType = Qf), A1(e, t, r)), f && n && Ft(e, r), t.innerAfterBrush(), t.afterBrush && t.afterBrush(), r.prevEl = t, t.__dirty = 0, t.__isRendered = !0
}

function A1(e, t, r) {
    var n = t.getDisplayables(),
        i = t.getTemporalDisplayables();
    e.save();
    var a = {
            prevElClipPaths: null,
            prevEl: null,
            allClipped: !1,
            viewWidth: r.viewWidth,
            viewHeight: r.viewHeight,
            inHover: r.inHover
        },
        o, s;
    for (o = t.getCursor(), s = n.length; o < s; o++) {
        var u = n[o];
        u.beforeBrush && u.beforeBrush(), u.innerBeforeBrush(), Xs(e, u, a, o === s - 1), u.innerAfterBrush(), u.afterBrush && u.afterBrush(), a.prevEl = u
    }
    for (var l = 0, f = i.length; l < f; l++) {
        var u = i[l];
        u.beforeBrush && u.beforeBrush(), u.innerBeforeBrush(), Xs(e, u, a, l === f - 1), u.innerAfterBrush(), u.afterBrush && u.afterBrush(), a.prevEl = u
    }
    t.clearTemporalDisplayables(), t.notClear = !0, e.restore()
}
var Uo = new a1,
    Jf = new ui(100),
    jf = ["symbol", "symbolSize", "symbolKeepAspect", "color", "backgroundColor", "dashArrayX", "dashArrayY", "maxTileWidth", "maxTileHeight"];

function th(e, t) {
    if (e === "none") return null;
    var r = t.getDevicePixelRatio(),
        n = t.getZr(),
        i = n.painter.type === "svg";
    e.dirty && Uo.delete(e);
    var a = Uo.get(e);
    if (a) return a;
    var o = dt(e, {
        symbol: "rect",
        symbolSize: 1,
        symbolKeepAspect: !0,
        color: "rgba(0, 0, 0, 0.2)",
        backgroundColor: null,
        dashArrayX: 5,
        dashArrayY: 5,
        rotation: 0,
        maxTileWidth: 512,
        maxTileHeight: 512
    });
    o.backgroundColor === "none" && (o.backgroundColor = null);
    var s = {
        repeat: "repeat"
    };
    return u(s), s.rotation = o.rotation, s.scaleX = s.scaleY = i ? 1 : 1 / r, Uo.set(e, s), e.dirty = !1, s;

    function u(l) {
        for (var f = [r], h = !0, c = 0; c < jf.length; ++c) {
            var v = o[jf[c]];
            if (v != null && !F(v) && !X(v) && !at(v) && typeof v != "boolean") {
                h = !1;
                break
            }
            f.push(v)
        }
        var d;
        if (h) {
            d = f.join(",") + (i ? "-svg" : "");
            var g = Jf.get(d);
            g && (i ? l.svgElement = g : l.image = g)
        }
        var p = Nc(o.dashArrayX),
            y = R1(o.dashArrayY),
            m = Fc(o.symbol),
            _ = x1(p),
            S = Bc(y),
            T = !i && oi.createCanvas(),
            w = i && {
                tag: "g",
                attrs: {},
                key: "dcl",
                children: []
            },
            b = D(),
            M;
        T && (T.width = b.width * r, T.height = b.height * r, M = T.getContext("2d")), C(), h && Jf.put(d, T || w), l.image = T, l.svgElement = w, l.svgWidth = b.width, l.svgHeight = b.height;

        function D() {
            for (var A = 1, x = 0, L = _.length; x < L; ++x) A = yl(A, _[x]);
            for (var R = 1, x = 0, L = m.length; x < L; ++x) R = yl(R, m[x].length);
            A *= R;
            var O = S * _.length * m.length;
            return {
                width: Math.max(1, Math.min(A, o.maxTileWidth)),
                height: Math.max(1, Math.min(O, o.maxTileHeight))
            }
        }

        function C() {
            M && (M.clearRect(0, 0, T.width, T.height), o.backgroundColor && (M.fillStyle = o.backgroundColor, M.fillRect(0, 0, T.width, T.height)));
            for (var A = 0, x = 0; x < y.length; ++x) A += y[x];
            if (A <= 0) return;
            for (var L = -S, R = 0, O = 0, E = 0; L < b.height;) {
                if (R % 2 === 0) {
                    for (var G = O / 2 % m.length, V = 0, k = 0, U = 0; V < b.width * 2;) {
                        for (var $ = 0, x = 0; x < p[E].length; ++x) $ += p[E][x];
                        if ($ <= 0) break;
                        if (k % 2 === 0) {
                            var z = (1 - o.symbolSize) * .5,
                                vt = V + p[E][k] * z,
                                pt = L + y[R] * z,
                                Gt = p[E][k] * o.symbolSize,
                                he = y[R] * o.symbolSize,
                                Wt = U / 2 % m[G].length;
                            Vt(vt, pt, Gt, he, m[G][Wt])
                        }
                        V += p[E][k], ++U, ++k, k === p[E].length && (k = 0)
                    }++E, E === p.length && (E = 0)
                }
                L += y[R], ++O, ++R, R === y.length && (R = 0)
            }

            function Vt(yt, st, N, Y, ve) {
                var gt = i ? 1 : r,
                    ke = d1(ve, yt * gt, st * gt, N * gt, Y * gt, o.color, o.symbolKeepAspect);
                if (i) {
                    var Ce = n.painter.renderOneToVNode(ke);
                    Ce && w.children.push(Ce)
                } else P1(M, ke)
            }
        }
    }
}

function Fc(e) {
    if (!e || e.length === 0) return [
        ["rect"]
    ];
    if (X(e)) return [
        [e]
    ];
    for (var t = !0, r = 0; r < e.length; ++r)
        if (!X(e[r])) {
            t = !1;
            break
        }
    if (t) return Fc([e]);
    for (var n = [], r = 0; r < e.length; ++r) X(e[r]) ? n.push([e[r]]) : n.push(e[r]);
    return n
}

function Nc(e) {
    if (!e || e.length === 0) return [
        [0, 0]
    ];
    if (at(e)) {
        var t = Math.ceil(e);
        return [
            [t, t]
        ]
    }
    for (var r = !0, n = 0; n < e.length; ++n)
        if (!at(e[n])) {
            r = !1;
            break
        }
    if (r) return Nc([e]);
    for (var i = [], n = 0; n < e.length; ++n)
        if (at(e[n])) {
            var t = Math.ceil(e[n]);
            i.push([t, t])
        } else {
            var t = Q(e[n], function(s) {
                return Math.ceil(s)
            });
            t.length % 2 === 1 ? i.push(t.concat(t)) : i.push(t)
        }
    return i
}

function R1(e) {
    if (!e || typeof e == "object" && e.length === 0) return [0, 0];
    if (at(e)) {
        var t = Math.ceil(e);
        return [t, t]
    }
    var r = Q(e, function(n) {
        return Math.ceil(n)
    });
    return e.length % 2 ? r.concat(r) : r
}

function x1(e) {
    return Q(e, function(t) {
        return Bc(t)
    })
}

function Bc(e) {
    for (var t = 0, r = 0; r < e.length; ++r) t += e[r];
    return e.length % 2 === 1 ? t * 2 : t
}

function L1(e, t) {
    e.eachRawSeries(function(r) {
        if (!e.isSeriesFiltered(r)) {
            var n = r.getData();
            n.hasItemVisual() && n.each(function(o) {
                var s = n.getItemVisual(o, "decal");
                if (s) {
                    var u = n.ensureUniqueItemVisual(o, "style");
                    u.decal = th(s, t)
                }
            });
            var i = n.getVisual("decal");
            if (i) {
                var a = n.getVisual("style");
                a.decal = th(i, t)
            }
        }
    })
}
var re = new Ee,
    zc = {};

function I1(e, t) {
    zc[e] = t
}

function E1(e) {
    return zc[e]
}
var O1 = 1,
    k1 = 800,
    F1 = 900,
    N1 = 1e3,
    B1 = 2e3,
    z1 = 5e3,
    Hc = 1e3,
    H1 = 1100,
    Eu = 2e3,
    Gc = 3e3,
    G1 = 4e3,
    Xa = 4500,
    V1 = 4600,
    U1 = 5e3,
    Y1 = 6e3,
    Vc = 7e3,
    W1 = {
        PROCESSOR: {
            FILTER: N1,
            SERIES_FILTER: k1,
            STATISTIC: z1
        },
        VISUAL: {
            LAYOUT: Hc,
            PROGRESSIVE_LAYOUT: H1,
            GLOBAL: Eu,
            CHART: Gc,
            POST_CHART_LAYOUT: V1,
            COMPONENT: G1,
            BRUSH: U1,
            CHART_ITEM: Xa,
            ARIA: Y1,
            DECAL: Vc
        }
    },
    Tt = "__flagInMainProcess",
    It = "__pendingUpdate",
    Yo = "__needsUpdateStatus",
    eh = /^[a-zA-Z0-9_]+$/,
    Wo = "__connectUpdateStatus",
    rh = 0,
    X1 = 1,
    q1 = 2;

function Uc(e) {
    return function() {
        for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        if (this.isDisposed()) {
            this.id;
            return
        }
        return Wc(this, e, t)
    }
}

function Yc(e) {
    return function() {
        for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return Wc(this, e, t)
    }
}

function Wc(e, t, r) {
    return r[0] = r[0] && r[0].toLowerCase(), Ee.prototype[t].apply(e, r)
}
var Xc = function(e) {
        W(t, e);

        function t() {
            return e !== null && e.apply(this, arguments) || this
        }
        return t
    }(Ee),
    qc = Xc.prototype;
qc.on = Yc("on");
qc.off = Yc("off");
var Wr, Xo, zi, He, qo, $o, Zo, Dn, Mn, nh, ih, Ko, ah, Hi, oh, $c, Xt, sh, Zc = function(e) {
        W(t, e);

        function t(r, n, i) {
            var a = e.call(this, new K_) || this;
            a._chartsViews = [], a._chartsMap = {}, a._componentsViews = [], a._componentsMap = {}, a._pendingActions = [], i = i || {}, X(n) && (n = Kc[n]), a._dom = r;
            var o = "canvas",
                s = "auto",
                u = !1;
            i.ssr && Qp(function(c) {
                var v = Nt(c),
                    d = v.dataIndex;
                if (d != null) {
                    var g = Z();
                    return g.set("series_index", v.seriesIndex), g.set("data_index", d), v.ssrType && g.set("ssr_type", v.ssrType), g
                }
            });
            var l = a._zr = gl(r, {
                renderer: i.renderer || o,
                devicePixelRatio: i.devicePixelRatio,
                width: i.width,
                height: i.height,
                ssr: i.ssr,
                useDirtyRect: q(i.useDirtyRect, u),
                useCoarsePointer: q(i.useCoarsePointer, s),
                pointerSize: i.pointerSize
            });
            a._ssr = i.ssr, a._throttledZrFlush = Mc(Ct(l.flush, l), 17), n = tt(n), n && sc(n, !0), a._theme = n, a._locale = Ky(i.locale || Uv), a._coordSysMgr = new ac;
            var f = a._api = oh(a);

            function h(c, v) {
                return c.__prio - v.__prio
            }
            return Xi(Ma, h), Xi(qs, h), a._scheduler = new Ac(a, f, qs, Ma), a._messageCenter = new Xc, a._initEvents(), a.resize = Ct(a.resize, a), l.animation.on("frame", a._onframe, a), nh(l, a), ih(l, a), aa(a), a
        }
        return t.prototype._onframe = function() {
            if (!this._disposed) {
                sh(this);
                var r = this._scheduler;
                if (this[It]) {
                    var n = this[It].silent;
                    this[Tt] = !0;
                    try {
                        Wr(this), He.update.call(this, null, this[It].updateParams)
                    } catch (u) {
                        throw this[Tt] = !1, this[It] = null, u
                    }
                    this._zr.flush(), this[Tt] = !1, this[It] = null, Dn.call(this, n), Mn.call(this, n)
                } else if (r.unfinished) {
                    var i = O1,
                        a = this._model,
                        o = this._api;
                    r.unfinished = !1;
                    do {
                        var s = +new Date;
                        r.performSeriesTasks(a), r.performDataProcessorTasks(a), $o(this, a), r.performVisualTasks(a), Hi(this, this._model, o, "remain", {}), i -= +new Date - s
                    } while (i > 0 && r.unfinished);
                    r.unfinished || this._zr.flush()
                }
            }
        }, t.prototype.getDom = function() {
            return this._dom
        }, t.prototype.getId = function() {
            return this.id
        }, t.prototype.getZr = function() {
            return this._zr
        }, t.prototype.isSSR = function() {
            return this._ssr
        }, t.prototype.setOption = function(r, n, i) {
            if (!this[Tt]) {
                if (this._disposed) {
                    this.id;
                    return
                }
                var a, o, s;
                if (H(n) && (i = n.lazyUpdate, a = n.silent, o = n.replaceMerge, s = n.transition, n = n.notMerge), this[Tt] = !0, !this._model || n) {
                    var u = new Cm(this._api),
                        l = this._theme,
                        f = this._model = new Ru;
                    f.scheduler = this._scheduler, f.ssr = this._ssr, f.init(null, null, null, l, this._locale, u)
                }
                this._model.setOption(r, {
                    replaceMerge: o
                }, $s);
                var h = {
                    seriesTransition: s,
                    optionChanged: !0
                };
                if (i) this[It] = {
                    silent: a,
                    updateParams: h
                }, this[Tt] = !1, this.getZr().wakeUp();
                else {
                    try {
                        Wr(this), He.update.call(this, null, h)
                    } catch (c) {
                        throw this[It] = null, this[Tt] = !1, c
                    }
                    this._ssr || this._zr.flush(), this[It] = null, this[Tt] = !1, Dn.call(this, a), Mn.call(this, a)
                }
            }
        }, t.prototype.setTheme = function() {}, t.prototype.getModel = function() {
            return this._model
        }, t.prototype.getOption = function() {
            return this._model && this._model.getOption()
        }, t.prototype.getWidth = function() {
            return this._zr.getWidth()
        }, t.prototype.getHeight = function() {
            return this._zr.getHeight()
        }, t.prototype.getDevicePixelRatio = function() {
            return this._zr.painter.dpr || K.hasGlobalWindow && window.devicePixelRatio || 1
        }, t.prototype.getRenderedCanvas = function(r) {
            return this.renderToCanvas(r)
        }, t.prototype.renderToCanvas = function(r) {
            r = r || {};
            var n = this._zr.painter;
            return n.getRenderedCanvas({
                backgroundColor: r.backgroundColor || this._model.get("backgroundColor"),
                pixelRatio: r.pixelRatio || this.getDevicePixelRatio()
            })
        }, t.prototype.renderToSVGString = function(r) {
            r = r || {};
            var n = this._zr.painter;
            return n.renderToString({
                useViewBox: r.useViewBox
            })
        }, t.prototype.getSvgDataURL = function() {
            if (K.svgSupported) {
                var r = this._zr,
                    n = r.storage.getDisplayList();
                return P(n, function(i) {
                    i.stopAnimation(null, !0)
                }), r.painter.toDataURL()
            }
        }, t.prototype.getDataURL = function(r) {
            if (this._disposed) {
                this.id;
                return
            }
            r = r || {};
            var n = r.excludeComponents,
                i = this._model,
                a = [],
                o = this;
            P(n, function(u) {
                i.eachComponent({
                    mainType: u
                }, function(l) {
                    var f = o._componentsMap[l.__viewId];
                    f.group.ignore || (a.push(f), f.group.ignore = !0)
                })
            });
            var s = this._zr.painter.getType() === "svg" ? this.getSvgDataURL() : this.renderToCanvas(r).toDataURL("image/" + (r && r.type || "png"));
            return P(a, function(u) {
                u.group.ignore = !1
            }), s
        }, t.prototype.getConnectedDataURL = function(r) {
            if (this._disposed) {
                this.id;
                return
            }
            var n = r.type === "svg",
                i = this.group,
                a = Math.min,
                o = Math.max,
                s = 1 / 0;
            if (uh[i]) {
                var u = s,
                    l = s,
                    f = -s,
                    h = -s,
                    c = [],
                    v = r && r.pixelRatio || this.getDevicePixelRatio();
                P(Kn, function(_, S) {
                    if (_.group === i) {
                        var T = n ? _.getZr().painter.getSvgDom().innerHTML : _.renderToCanvas(tt(r)),
                            w = _.getDom().getBoundingClientRect();
                        u = a(w.left, u), l = a(w.top, l), f = o(w.right, f), h = o(w.bottom, h), c.push({
                            dom: T,
                            left: w.left,
                            top: w.top
                        })
                    }
                }), u *= v, l *= v, f *= v, h *= v;
                var d = f - u,
                    g = h - l,
                    p = oi.createCanvas(),
                    y = gl(p, {
                        renderer: n ? "svg" : "canvas"
                    });
                if (y.resize({
                        width: d,
                        height: g
                    }), n) {
                    var m = "";
                    return P(c, function(_) {
                        var S = _.left - u,
                            T = _.top - l;
                        m += '<g transform="translate(' + S + "," + T + ')">' + _.dom + "</g>"
                    }), y.painter.getSvgRoot().innerHTML = m, r.connectedBackgroundColor && y.painter.setBackgroundColor(r.connectedBackgroundColor), y.refreshImmediately(), y.painter.toDataURL()
                } else return r.connectedBackgroundColor && y.add(new we({
                    shape: {
                        x: 0,
                        y: 0,
                        width: d,
                        height: g
                    },
                    style: {
                        fill: r.connectedBackgroundColor
                    }
                })), P(c, function(_) {
                    var S = new xr({
                        style: {
                            x: _.left * v - u,
                            y: _.top * v - l,
                            image: _.dom
                        }
                    });
                    y.add(S)
                }), y.refreshImmediately(), p.toDataURL("image/" + (r && r.type || "png"))
            } else return this.getDataURL(r)
        }, t.prototype.convertToPixel = function(r, n) {
            return qo(this, "convertToPixel", r, n)
        }, t.prototype.convertFromPixel = function(r, n) {
            return qo(this, "convertFromPixel", r, n)
        }, t.prototype.containPixel = function(r, n) {
            if (this._disposed) {
                this.id;
                return
            }
            var i = this._model,
                a, o = yo(i, r);
            return P(o, function(s, u) {
                u.indexOf("Models") >= 0 && P(s, function(l) {
                    var f = l.coordinateSystem;
                    if (f && f.containPoint) a = a || !!f.containPoint(n);
                    else if (u === "seriesModels") {
                        var h = this._chartsMap[l.__viewId];
                        h && h.containPoint && (a = a || h.containPoint(n, l))
                    }
                }, this)
            }, this), !!a
        }, t.prototype.getVisual = function(r, n) {
            var i = this._model,
                a = yo(i, r, {
                    defaultMainType: "series"
                }),
                o = a.seriesModel,
                s = o.getData(),
                u = a.hasOwnProperty("dataIndexInside") ? a.dataIndexInside : a.hasOwnProperty("dataIndex") ? s.indexOfRawIndex(a.dataIndex) : null;
            return u != null ? j_(s, u, n) : t1(s, n)
        }, t.prototype.getViewOfComponentModel = function(r) {
            return this._componentsMap[r.__viewId]
        }, t.prototype.getViewOfSeriesModel = function(r) {
            return this._chartsMap[r.__viewId]
        }, t.prototype._initEvents = function() {
            var r = this;
            P($1, function(n) {
                var i = function(a) {
                    var o = r.getModel(),
                        s = a.target,
                        u, l = n === "globalout";
                    if (l ? u = {} : s && Ni(s, function(d) {
                            var g = Nt(d);
                            if (g && g.dataIndex != null) {
                                var p = g.dataModel || o.getSeriesByIndex(g.seriesIndex);
                                return u = p && p.getDataParams(g.dataIndex, g.dataType, s) || {}, !0
                            } else if (g.eventData) return u = I({}, g.eventData), !0
                        }, !0), u) {
                        var f = u.componentType,
                            h = u.componentIndex;
                        (f === "markLine" || f === "markPoint" || f === "markArea") && (f = "series", h = u.seriesIndex);
                        var c = f && h != null && o.getComponent(f, h),
                            v = c && r[c.mainType === "series" ? "_chartsMap" : "_componentsMap"][c.__viewId];
                        u.event = a, u.type = n, r._$eventProcessor.eventInfo = {
                            targetEl: s,
                            packedEvent: u,
                            model: c,
                            view: v
                        }, r.trigger(n, u)
                    }
                };
                i.zrEventfulCallAtLast = !0, r._zr.on(n, i, r)
            }), P(Zn, function(n, i) {
                r._messageCenter.on(i, function(a) {
                    this.trigger(i, a)
                }, r)
            }), P(["selectchanged"], function(n) {
                r._messageCenter.on(n, function(i) {
                    this.trigger(n, i)
                }, r)
            }), r1(this._messageCenter, this, this._api)
        }, t.prototype.isDisposed = function() {
            return this._disposed
        }, t.prototype.clear = function() {
            if (this._disposed) {
                this.id;
                return
            }
            this.setOption({
                series: []
            }, !0)
        }, t.prototype.dispose = function() {
            if (this._disposed) {
                this.id;
                return
            }
            this._disposed = !0;
            var r = this.getDom();
            r && rv(this.getDom(), ku, "");
            var n = this,
                i = n._api,
                a = n._model;
            P(n._componentsViews, function(o) {
                o.dispose(a, i)
            }), P(n._chartsViews, function(o) {
                o.dispose(a, i)
            }), n._zr.dispose(), n._dom = n._model = n._chartsMap = n._componentsMap = n._chartsViews = n._componentsViews = n._scheduler = n._api = n._zr = n._throttledZrFlush = n._theme = n._coordSysMgr = n._messageCenter = null, delete Kn[n.id]
        }, t.prototype.resize = function(r) {
            if (!this[Tt]) {
                if (this._disposed) {
                    this.id;
                    return
                }
                this._zr.resize(r);
                var n = this._model;
                if (this._loadingFX && this._loadingFX.resize(), !!n) {
                    var i = n.resetOption("media"),
                        a = r && r.silent;
                    this[It] && (a == null && (a = this[It].silent), i = !0, this[It] = null), this[Tt] = !0;
                    try {
                        i && Wr(this), He.update.call(this, {
                            type: "resize",
                            animation: I({
                                duration: 0
                            }, r && r.animation)
                        })
                    } catch (o) {
                        throw this[Tt] = !1, o
                    }
                    this[Tt] = !1, Dn.call(this, a), Mn.call(this, a)
                }
            }
        }, t.prototype.showLoading = function(r, n) {
            if (this._disposed) {
                this.id;
                return
            }
            if (H(r) && (n = r, r = ""), r = r || "default", this.hideLoading(), !!Zs[r]) {
                var i = Zs[r](this._api, n),
                    a = this._zr;
                this._loadingFX = i, a.add(i)
            }
        }, t.prototype.hideLoading = function() {
            if (this._disposed) {
                this.id;
                return
            }
            this._loadingFX && this._zr.remove(this._loadingFX), this._loadingFX = null
        }, t.prototype.makeActionFromEvent = function(r) {
            var n = I({}, r);
            return n.type = Zn[r.type], n
        }, t.prototype.dispatchAction = function(r, n) {
            if (this._disposed) {
                this.id;
                return
            }
            if (H(n) || (n = {
                    silent: !!n
                }), !!Da[r.type] && this._model) {
                if (this[Tt]) {
                    this._pendingActions.push(r);
                    return
                }
                var i = n.silent;
                Zo.call(this, r, i);
                var a = n.flush;
                a ? this._zr.flush() : a !== !1 && K.browser.weChat && this._throttledZrFlush(), Dn.call(this, i), Mn.call(this, i)
            }
        }, t.prototype.updateLabelLayout = function() {
            re.trigger("series:layoutlabels", this._model, this._api, {
                updatedSeries: []
            })
        }, t.prototype.appendData = function(r) {
            if (this._disposed) {
                this.id;
                return
            }
            var n = r.seriesIndex,
                i = this.getModel(),
                a = i.getSeriesByIndex(n);
            a.appendData(r), this._scheduler.unfinished = !0, this.getZr().wakeUp()
        }, t.internalField = function() {
            Wr = function(h) {
                var c = h._scheduler;
                c.restorePipelines(h._model), c.prepareStageTasks(), Xo(h, !0), Xo(h, !1), c.plan()
            }, Xo = function(h, c) {
                for (var v = h._model, d = h._scheduler, g = c ? h._componentsViews : h._chartsViews, p = c ? h._componentsMap : h._chartsMap, y = h._zr, m = h._api, _ = 0; _ < g.length; _++) g[_].__alive = !1;
                c ? v.eachComponent(function(w, b) {
                    w !== "series" && S(b)
                }) : v.eachSeries(S);

                function S(w) {
                    var b = w.__requireNewView;
                    w.__requireNewView = !1;
                    var M = "_ec_" + w.id + "_" + w.type,
                        D = !b && p[M];
                    if (!D) {
                        var C = _e(w.type),
                            A = c ? ni.getClass(C.main, C.sub) : $e.getClass(C.sub);
                        D = new A, D.init(v, m), p[M] = D, g.push(D), y.add(D.group)
                    }
                    w.__viewId = D.__id = M, D.__alive = !0, D.__model = w, D.group.__ecComponentInfo = {
                        mainType: w.mainType,
                        index: w.componentIndex
                    }, !c && d.prepareView(D, w, v, m)
                }
                for (var _ = 0; _ < g.length;) {
                    var T = g[_];
                    T.__alive ? _++ : (!c && T.renderTask.dispose(), y.remove(T.group), T.dispose(v, m), g.splice(_, 1), p[T.__id] === T && delete p[T.__id], T.__id = T.group.__ecComponentInfo = null)
                }
            }, zi = function(h, c, v, d, g) {
                var p = h._model;
                if (p.setUpdatePayload(v), !d) {
                    P([].concat(h._componentsViews).concat(h._chartsViews), T);
                    return
                }
                var y = {};
                y[d + "Id"] = v[d + "Id"], y[d + "Index"] = v[d + "Index"], y[d + "Name"] = v[d + "Name"];
                var m = {
                    mainType: d,
                    query: y
                };
                g && (m.subType = g);
                var _ = v.excludeSeriesId,
                    S;
                _ != null && (S = Z(), P(St(_), function(w) {
                    var b = ue(w, null);
                    b != null && S.set(b, !0)
                })), p && p.eachComponent(m, function(w) {
                    var b = S && S.get(w.id) != null;
                    if (!b)
                        if (Ul(v))
                            if (w instanceof Qe) v.type === Mr && !v.notBlur && !w.get(["emphasis", "disabled"]) && P0(w, v, h._api);
                            else {
                                var M = vu(w.mainType, w.componentIndex, v.name, h._api),
                                    D = M.focusSelf,
                                    C = M.dispatchers;
                                v.type === Mr && D && !v.notBlur && xs(w.mainType, w.componentIndex, h._api), C && P(C, function(A) {
                                    v.type === Mr ? Ps(A) : As(A)
                                })
                            }
                    else Is(v) && w instanceof Qe && (x0(w, v, h._api), Gl(w), Xt(h))
                }, h), p && p.eachComponent(m, function(w) {
                    var b = S && S.get(w.id) != null;
                    b || T(h[d === "series" ? "_chartsMap" : "_componentsMap"][w.__viewId])
                }, h);

                function T(w) {
                    w && w.__alive && w[c] && w[c](w.__model, p, h._api, v)
                }
            }, He = {
                prepareAndUpdate: function(h) {
                    Wr(this), He.update.call(this, h, {
                        optionChanged: h.newOption != null
                    })
                },
                update: function(h, c) {
                    var v = this._model,
                        d = this._api,
                        g = this._zr,
                        p = this._coordSysMgr,
                        y = this._scheduler;
                    if (v) {
                        v.setUpdatePayload(h), y.restoreData(v, h), y.performSeriesTasks(v), p.create(v, d), y.performDataProcessorTasks(v, h), $o(this, v), p.update(v, d), r(v), y.performVisualTasks(v, h), Ko(this, v, d, h, c);
                        var m = v.get("backgroundColor") || "transparent",
                            _ = v.get("darkMode");
                        g.setBackgroundColor(m), _ != null && _ !== "auto" && g.setDarkMode(_), re.trigger("afterupdate", v, d)
                    }
                },
                updateTransform: function(h) {
                    var c = this,
                        v = this._model,
                        d = this._api;
                    if (v) {
                        v.setUpdatePayload(h);
                        var g = [];
                        v.eachComponent(function(y, m) {
                            if (y !== "series") {
                                var _ = c.getViewOfComponentModel(m);
                                if (_ && _.__alive)
                                    if (_.updateTransform) {
                                        var S = _.updateTransform(m, v, d, h);
                                        S && S.update && g.push(_)
                                    } else g.push(_)
                            }
                        });
                        var p = Z();
                        v.eachSeries(function(y) {
                            var m = c._chartsMap[y.__viewId];
                            if (m.updateTransform) {
                                var _ = m.updateTransform(y, v, d, h);
                                _ && _.update && p.set(y.uid, 1)
                            } else p.set(y.uid, 1)
                        }), r(v), this._scheduler.performVisualTasks(v, h, {
                            setDirty: !0,
                            dirtyMap: p
                        }), Hi(this, v, d, h, {}, p), re.trigger("afterupdate", v, d)
                    }
                },
                updateView: function(h) {
                    var c = this._model;
                    c && (c.setUpdatePayload(h), $e.markUpdateMethod(h, "updateView"), r(c), this._scheduler.performVisualTasks(c, h, {
                        setDirty: !0
                    }), Ko(this, c, this._api, h, {}), re.trigger("afterupdate", c, this._api))
                },
                updateVisual: function(h) {
                    var c = this,
                        v = this._model;
                    v && (v.setUpdatePayload(h), v.eachSeries(function(d) {
                        d.getData().clearAllVisual()
                    }), $e.markUpdateMethod(h, "updateVisual"), r(v), this._scheduler.performVisualTasks(v, h, {
                        visualType: "visual",
                        setDirty: !0
                    }), v.eachComponent(function(d, g) {
                        if (d !== "series") {
                            var p = c.getViewOfComponentModel(g);
                            p && p.__alive && p.updateVisual(g, v, c._api, h)
                        }
                    }), v.eachSeries(function(d) {
                        var g = c._chartsMap[d.__viewId];
                        g.updateVisual(d, v, c._api, h)
                    }), re.trigger("afterupdate", v, this._api))
                },
                updateLayout: function(h) {
                    He.update.call(this, h)
                }
            }, qo = function(h, c, v, d) {
                if (h._disposed) {
                    h.id;
                    return
                }
                for (var g = h._model, p = h._coordSysMgr.getCoordinateSystems(), y, m = yo(g, v), _ = 0; _ < p.length; _++) {
                    var S = p[_];
                    if (S[c] && (y = S[c](g, m, d)) != null) return y
                }
            }, $o = function(h, c) {
                var v = h._chartsMap,
                    d = h._scheduler;
                c.eachSeries(function(g) {
                    d.updateStreamModes(g, v[g.__viewId])
                })
            }, Zo = function(h, c) {
                var v = this,
                    d = this.getModel(),
                    g = h.type,
                    p = h.escapeConnect,
                    y = Da[g],
                    m = y.actionInfo,
                    _ = (m.update || "update").split(":"),
                    S = _.pop(),
                    T = _[0] != null && _e(_[0]);
                this[Tt] = !0;
                var w = [h],
                    b = !1;
                h.batch && (b = !0, w = Q(h.batch, function(R) {
                    return R = dt(I({}, R), h), R.batch = null, R
                }));
                var M = [],
                    D, C = Is(h),
                    A = Ul(h);
                if (A && Tv(this._api), P(w, function(R) {
                        if (D = y.action(R, v._model, v._api), D = D || I({}, R), D.type = m.event || D.type, M.push(D), A) {
                            var O = ev(h),
                                E = O.queryOptionMap,
                                G = O.mainTypeSpecified,
                                V = G ? E.keys()[0] : "series";
                            zi(v, S, R, V), Xt(v)
                        } else C ? (zi(v, S, R, "series"), Xt(v)) : T && zi(v, S, R, T.main, T.sub)
                    }), S !== "none" && !A && !C && !T) try {
                    this[It] ? (Wr(this), He.update.call(this, h), this[It] = null) : He[S].call(this, h)
                } catch (R) {
                    throw this[Tt] = !1, R
                }
                if (b ? D = {
                        type: m.event || g,
                        escapeConnect: p,
                        batch: M
                    } : D = M[0], this[Tt] = !1, !c) {
                    var x = this._messageCenter;
                    if (x.trigger(D.type, D), C) {
                        var L = {
                            type: "selectchanged",
                            escapeConnect: p,
                            selected: L0(d),
                            isFromClick: h.isFromClick || !1,
                            fromAction: h.type,
                            fromActionPayload: h
                        };
                        x.trigger(L.type, L)
                    }
                }
            }, Dn = function(h) {
                for (var c = this._pendingActions; c.length;) {
                    var v = c.shift();
                    Zo.call(this, v, h)
                }
            }, Mn = function(h) {
                !h && this.trigger("updated")
            }, nh = function(h, c) {
                h.on("rendered", function(v) {
                    c.trigger("rendered", v), h.animation.isFinished() && !c[It] && !c._scheduler.unfinished && !c._pendingActions.length && c.trigger("finished")
                })
            }, ih = function(h, c) {
                h.on("mouseover", function(v) {
                    var d = v.target,
                        g = Ni(d, Ls);
                    g && (A0(g, v, c._api), Xt(c))
                }).on("mouseout", function(v) {
                    var d = v.target,
                        g = Ni(d, Ls);
                    g && (R0(g, v, c._api), Xt(c))
                }).on("click", function(v) {
                    var d = v.target,
                        g = Ni(d, function(m) {
                            return Nt(m).dataIndex != null
                        }, !0);
                    if (g) {
                        var p = g.selected ? "unselect" : "select",
                            y = Nt(g);
                        c._api.dispatchAction({
                            type: p,
                            dataType: y.dataType,
                            dataIndexInside: y.dataIndex,
                            seriesIndex: y.seriesIndex,
                            isFromClick: !0
                        })
                    }
                })
            };

            function r(h) {
                h.clearColorPalette(), h.eachSeries(function(c) {
                    c.clearColorPalette()
                })
            }

            function n(h) {
                var c = [],
                    v = [],
                    d = !1;
                if (h.eachComponent(function(m, _) {
                        var S = _.get("zlevel") || 0,
                            T = _.get("z") || 0,
                            w = _.getZLevelKey();
                        d = d || !!w, (m === "series" ? v : c).push({
                            zlevel: S,
                            z: T,
                            idx: _.componentIndex,
                            type: m,
                            key: w
                        })
                    }), d) {
                    var g = c.concat(v),
                        p, y;
                    Xi(g, function(m, _) {
                        return m.zlevel === _.zlevel ? m.z - _.z : m.zlevel - _.zlevel
                    }), P(g, function(m) {
                        var _ = h.getComponent(m.type, m.idx),
                            S = m.zlevel,
                            T = m.key;
                        p != null && (S = Math.max(p, S)), T ? (S === p && T !== y && S++, y = T) : y && (S === p && S++, y = ""), p = S, _.setZLevel(S)
                    })
                }
            }
            Ko = function(h, c, v, d, g) {
                n(c), ah(h, c, v, d, g), P(h._chartsViews, function(p) {
                    p.__alive = !1
                }), Hi(h, c, v, d, g), P(h._chartsViews, function(p) {
                    p.__alive || p.remove(c, v)
                })
            }, ah = function(h, c, v, d, g, p) {
                P(p || h._componentsViews, function(y) {
                    var m = y.__model;
                    l(m, y), y.render(m, c, v, d), s(m, y), f(m, y)
                })
            }, Hi = function(h, c, v, d, g, p) {
                var y = h._scheduler;
                g = I(g || {}, {
                    updatedSeries: c.getSeries()
                }), re.trigger("series:beforeupdate", c, v, g);
                var m = !1;
                c.eachSeries(function(_) {
                    var S = h._chartsMap[_.__viewId];
                    S.__alive = !0;
                    var T = S.renderTask;
                    y.updatePayload(T, d), l(_, S), p && p.get(_.uid) && T.dirty(), T.perform(y.getPerformArgs(T)) && (m = !0), S.group.silent = !!_.get("silent"), o(_, S), Gl(_)
                }), y.unfinished = m || y.unfinished, re.trigger("series:layoutlabels", c, v, g), re.trigger("series:transition", c, v, g), c.eachSeries(function(_) {
                    var S = h._chartsMap[_.__viewId];
                    s(_, S), f(_, S)
                }), a(h, c), re.trigger("series:afterupdate", c, v, g)
            }, Xt = function(h) {
                h[Yo] = !0, h.getZr().wakeUp()
            }, sh = function(h) {
                h[Yo] && (h.getZr().storage.traverse(function(c) {
                    Xn(c) || i(c)
                }), h[Yo] = !1)
            };

            function i(h) {
                for (var c = [], v = h.currentStates, d = 0; d < v.length; d++) {
                    var g = v[d];
                    g === "emphasis" || g === "blur" || g === "select" || c.push(g)
                }
                h.selected && h.states.select && c.push("select"), h.hoverState === Na && h.states.emphasis ? c.push("emphasis") : h.hoverState === Fa && h.states.blur && c.push("blur"), h.useStates(c)
            }

            function a(h, c) {
                var v = h._zr,
                    d = v.storage,
                    g = 0;
                d.traverse(function(p) {
                    p.isGroup || g++
                }), g > c.get("hoverLayerThreshold") && !K.node && !K.worker && c.eachSeries(function(p) {
                    if (!p.preventUsingHoverLayer) {
                        var y = h._chartsMap[p.__viewId];
                        y.__alive && y.eachRendered(function(m) {
                            m.states.emphasis && (m.states.emphasis.hoverLayer = !0)
                        })
                    }
                })
            }

            function o(h, c) {
                var v = h.get("blendMode") || null;
                c.eachRendered(function(d) {
                    d.isGroup || (d.style.blend = v)
                })
            }

            function s(h, c) {
                if (!h.preventAutoZ) {
                    var v = h.get("z") || 0,
                        d = h.get("zlevel") || 0;
                    c.eachRendered(function(g) {
                        return u(g, v, d, -1 / 0), !0
                    })
                }
            }

            function u(h, c, v, d) {
                var g = h.getTextContent(),
                    p = h.getTextGuideLine(),
                    y = h.isGroup;
                if (y)
                    for (var m = h.childrenRef(), _ = 0; _ < m.length; _++) d = Math.max(u(m[_], c, v, d), d);
                else h.z = c, h.zlevel = v, d = Math.max(h.z2, d);
                if (g && (g.z = c, g.zlevel = v, isFinite(d) && (g.z2 = d + 2)), p) {
                    var S = h.textGuideLineConfig;
                    p.z = c, p.zlevel = v, isFinite(d) && (p.z2 = d + (S && S.showAbove ? 1 : -1))
                }
                return d
            }

            function l(h, c) {
                c.eachRendered(function(v) {
                    if (!Xn(v)) {
                        var d = v.getTextContent(),
                            g = v.getTextGuideLine();
                        v.stateTransition && (v.stateTransition = null), d && d.stateTransition && (d.stateTransition = null), g && g.stateTransition && (g.stateTransition = null), v.hasState() ? (v.prevStates = v.currentStates, v.clearStates()) : v.prevStates && (v.prevStates = null)
                    }
                })
            }

            function f(h, c) {
                var v = h.getModel("stateAnimation"),
                    d = h.isAnimationEnabled(),
                    g = v.get("duration"),
                    p = g > 0 ? {
                        duration: g,
                        delay: v.get("delay"),
                        easing: v.get("easing")
                    } : null;
                c.eachRendered(function(y) {
                    if (y.states && y.states.emphasis) {
                        if (Xn(y)) return;
                        if (y instanceof et && z0(y), y.__dirty) {
                            var m = y.prevStates;
                            m && y.useStates(m)
                        }
                        if (d) {
                            y.stateTransition = p;
                            var _ = y.getTextContent(),
                                S = y.getTextGuideLine();
                            _ && (_.stateTransition = p), S && (S.stateTransition = p)
                        }
                        y.__dirty && i(y)
                    }
                })
            }
            oh = function(h) {
                return new(function(c) {
                    W(v, c);

                    function v() {
                        return c !== null && c.apply(this, arguments) || this
                    }
                    return v.prototype.getCoordinateSystems = function() {
                        return h._coordSysMgr.getCoordinateSystems()
                    }, v.prototype.getComponentByElement = function(d) {
                        for (; d;) {
                            var g = d.__ecComponentInfo;
                            if (g != null) return h._model.getComponent(g.mainType, g.index);
                            d = d.parent
                        }
                    }, v.prototype.enterEmphasis = function(d, g) {
                        Ps(d, g), Xt(h)
                    }, v.prototype.leaveEmphasis = function(d, g) {
                        As(d, g), Xt(h)
                    }, v.prototype.enterBlur = function(d) {
                        C0(d), Xt(h)
                    }, v.prototype.leaveBlur = function(d) {
                        mv(d), Xt(h)
                    }, v.prototype.enterSelect = function(d) {
                        _v(d), Xt(h)
                    }, v.prototype.leaveSelect = function(d) {
                        Sv(d), Xt(h)
                    }, v.prototype.getModel = function() {
                        return h.getModel()
                    }, v.prototype.getViewOfComponentModel = function(d) {
                        return h.getViewOfComponentModel(d)
                    }, v.prototype.getViewOfSeriesModel = function(d) {
                        return h.getViewOfSeriesModel(d)
                    }, v
                }(ic))(h)
            }, $c = function(h) {
                function c(v, d) {
                    for (var g = 0; g < v.length; g++) {
                        var p = v[g];
                        p[Wo] = d
                    }
                }
                P(Zn, function(v, d) {
                    h._messageCenter.on(d, function(g) {
                        if (uh[h.group] && h[Wo] !== rh) {
                            if (g && g.escapeConnect) return;
                            var p = h.makeActionFromEvent(g),
                                y = [];
                            P(Kn, function(m) {
                                m !== h && m.group === h.group && y.push(m)
                            }), c(y, rh), P(y, function(m) {
                                m[Wo] !== X1 && m.dispatchAction(p)
                            }), c(y, q1)
                        }
                    })
                })
            }
        }(), t
    }(Ee),
    Ou = Zc.prototype;
Ou.on = Uc("on");
Ou.off = Uc("off");
Ou.one = function(e, t, r) {
    var n = this;

    function i() {
        for (var a = [], o = 0; o < arguments.length; o++) a[o] = arguments[o];
        t && t.apply && t.apply(this, a), n.off(e, i)
    }
    this.on.call(this, e, i, r)
};
var $1 = ["click", "dblclick", "mouseover", "mouseout", "mousemove", "mousedown", "mouseup", "globalout", "contextmenu"];
var Da = {},
    Zn = {},
    qs = [],
    $s = [],
    Ma = [],
    Kc = {},
    Zs = {},
    Kn = {},
    uh = {},
    Z1 = +new Date - 0,
    ku = "_echarts_instance_";

function DT(e, t, r) {
    {
        var n = K1(e);
        if (n) return n
    }
    var i = new Zc(e, t, r);
    return i.id = "ec_" + Z1++, Kn[i.id] = i, rv(e, ku, i.id), $c(i), re.trigger("afterinit", i), i
}

function K1(e) {
    return Kn[yg(e, ku)]
}

function Qc(e, t) {
    Kc[e] = t
}

function Jc(e) {
    ft($s, e) < 0 && $s.push(e)
}

function jc(e, t) {
    Nu(qs, e, t, B1)
}

function Q1(e) {
    Fu("afterinit", e)
}

function J1(e) {
    Fu("afterupdate", e)
}

function Fu(e, t) {
    re.on(e, t)
}

function fn(e, t, r) {
    rt(t) && (r = t, t = "");
    var n = H(e) ? e.type : [e, e = {
        event: t
    }][0];
    e.event = (e.event || n).toLowerCase(), t = e.event, !Zn[t] && (Te(eh.test(n) && eh.test(t)), Da[n] || (Da[n] = {
        action: r,
        actionInfo: e
    }), Zn[t] = n)
}

function j1(e, t) {
    ac.register(e, t)
}

function tS(e, t) {
    Nu(Ma, e, t, Hc, "layout")
}

function Lr(e, t) {
    Nu(Ma, e, t, Gc, "visual")
}
var lh = [];

function Nu(e, t, r, n, i) {
    if ((rt(t) || H(t)) && (r = t, t = n), !(ft(lh, r) >= 0)) {
        lh.push(r);
        var a = Ac.wrapStageHandler(r, i);
        a.__prio = t, a.__raw = r, e.push(a)
    }
}

function td(e, t) {
    Zs[e] = t
}

function eS(e, t, r) {
    var n = E1("registerMap");
    n && n(e, t, r)
}
var rS = a_;
Lr(Eu, F_);
Lr(Xa, N_);
Lr(Xa, B_);
Lr(Eu, Q_);
Lr(Xa, J_);
Lr(Vc, L1);
Jc(sc);
jc(F1, Bm);
td("default", z_);
fn({
    type: Mr,
    event: Mr,
    update: Mr
}, Qt);
fn({
    type: ji,
    event: ji,
    update: ji
}, Qt);
fn({
    type: Vn,
    event: Vn,
    update: Vn
}, Qt);
fn({
    type: ta,
    event: ta,
    update: ta
}, Qt);
fn({
    type: Un,
    event: Un,
    update: Un
}, Qt);
Qc("light", Z_);
Qc("dark", Ic);
var fh = [],
    nS = {
        registerPreprocessor: Jc,
        registerProcessor: jc,
        registerPostInit: Q1,
        registerPostUpdate: J1,
        registerUpdateLifecycle: Fu,
        registerAction: fn,
        registerCoordinateSystem: j1,
        registerLayout: tS,
        registerVisual: Lr,
        registerTransform: rS,
        registerLoading: td,
        registerMap: eS,
        registerImpl: I1,
        PRIORITY: W1,
        ComponentModel: it,
        ComponentView: ni,
        SeriesModel: Qe,
        ChartView: $e,
        registerComponentModel: function(e) {
            it.registerClass(e)
        },
        registerComponentView: function(e) {
            ni.registerClass(e)
        },
        registerSeriesModel: function(e) {
            Qe.registerClass(e)
        },
        registerChartView: function(e) {
            $e.registerClass(e)
        },
        registerSubTypeDefaulter: function(e, t) {
            it.registerSubTypeDefaulter(e, t)
        },
        registerPainter: function(e, t) {
            Kp(e, t)
        }
    };

function iS(e) {
    if (F(e)) {
        P(e, function(t) {
            iS(t)
        });
        return
    }
    ft(fh, e) >= 0 || (fh.push(e), rt(e) && (e = {
        install: e
    }), e.install(nS))
}

function Cn(e) {
    return e == null ? 0 : e.length || 1
}

function hh(e) {
    return e
}
var aS = function() {
        function e(t, r, n, i, a, o) {
            this._old = t, this._new = r, this._oldKeyGetter = n || hh, this._newKeyGetter = i || hh, this.context = a, this._diffModeMultiple = o === "multiple"
        }
        return e.prototype.add = function(t) {
            return this._add = t, this
        }, e.prototype.update = function(t) {
            return this._update = t, this
        }, e.prototype.updateManyToOne = function(t) {
            return this._updateManyToOne = t, this
        }, e.prototype.updateOneToMany = function(t) {
            return this._updateOneToMany = t, this
        }, e.prototype.updateManyToMany = function(t) {
            return this._updateManyToMany = t, this
        }, e.prototype.remove = function(t) {
            return this._remove = t, this
        }, e.prototype.execute = function() {
            this[this._diffModeMultiple ? "_executeMultiple" : "_executeOneToOne"]()
        }, e.prototype._executeOneToOne = function() {
            var t = this._old,
                r = this._new,
                n = {},
                i = new Array(t.length),
                a = new Array(r.length);
            this._initIndexMap(t, null, i, "_oldKeyGetter"), this._initIndexMap(r, n, a, "_newKeyGetter");
            for (var o = 0; o < t.length; o++) {
                var s = i[o],
                    u = n[s],
                    l = Cn(u);
                if (l > 1) {
                    var f = u.shift();
                    u.length === 1 && (n[s] = u[0]), this._update && this._update(f, o)
                } else l === 1 ? (n[s] = null, this._update && this._update(u, o)) : this._remove && this._remove(o)
            }
            this._performRestAdd(a, n)
        }, e.prototype._executeMultiple = function() {
            var t = this._old,
                r = this._new,
                n = {},
                i = {},
                a = [],
                o = [];
            this._initIndexMap(t, n, a, "_oldKeyGetter"), this._initIndexMap(r, i, o, "_newKeyGetter");
            for (var s = 0; s < a.length; s++) {
                var u = a[s],
                    l = n[u],
                    f = i[u],
                    h = Cn(l),
                    c = Cn(f);
                if (h > 1 && c === 1) this._updateManyToOne && this._updateManyToOne(f, l), i[u] = null;
                else if (h === 1 && c > 1) this._updateOneToMany && this._updateOneToMany(f, l), i[u] = null;
                else if (h === 1 && c === 1) this._update && this._update(f, l), i[u] = null;
                else if (h > 1 && c > 1) this._updateManyToMany && this._updateManyToMany(f, l), i[u] = null;
                else if (h > 1)
                    for (var v = 0; v < h; v++) this._remove && this._remove(l[v]);
                else this._remove && this._remove(l)
            }
            this._performRestAdd(o, i)
        }, e.prototype._performRestAdd = function(t, r) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n],
                    a = r[i],
                    o = Cn(a);
                if (o > 1)
                    for (var s = 0; s < o; s++) this._add && this._add(a[s]);
                else o === 1 && this._add && this._add(a);
                r[i] = null
            }
        }, e.prototype._initIndexMap = function(t, r, n, i) {
            for (var a = this._diffModeMultiple, o = 0; o < t.length; o++) {
                var s = "_ec_" + this[i](t[o], o);
                if (a || (n[o] = s), !!r) {
                    var u = r[s],
                        l = Cn(u);
                    l === 0 ? (r[s] = o, a && n.push(s)) : l === 1 ? r[s] = [u, o] : u.push(o)
                }
            }
        }, e
    }(),
    oS = function() {
        function e(t, r) {
            this._encode = t, this._schema = r
        }
        return e.prototype.get = function() {
            return {
                fullDimensions: this._getFullDimensionNames(),
                encode: this._encode
            }
        }, e.prototype._getFullDimensionNames = function() {
            return this._cachedDimNames || (this._cachedDimNames = this._schema ? this._schema.makeOutputDimensionNames() : []), this._cachedDimNames
        }, e
    }();

function sS(e, t) {
    var r = {},
        n = r.encode = {},
        i = Z(),
        a = [],
        o = [],
        s = {};
    P(e.dimensions, function(c) {
        var v = e.getDimensionInfo(c),
            d = v.coordDim;
        if (d) {
            var g = v.coordDimIndex;
            Qo(n, d)[g] = c, v.isExtraCoord || (i.set(d, 1), uS(v.type) && (a[0] = c), Qo(s, d)[g] = e.getDimensionIndex(v.name)), v.defaultTooltip && o.push(c)
        }
        Jv.each(function(p, y) {
            var m = Qo(n, y),
                _ = v.otherDims[y];
            _ != null && _ !== !1 && (m[_] = v.name)
        })
    });
    var u = [],
        l = {};
    i.each(function(c, v) {
        var d = n[v];
        l[v] = d[0], u = u.concat(d)
    }), r.dataDimsOnCoord = u, r.dataDimIndicesOnCoord = Q(u, function(c) {
        return e.getDimensionInfo(c).storeDimIndex
    }), r.encodeFirstDimNotExtra = l;
    var f = n.label;
    f && f.length && (a = f.slice());
    var h = n.tooltip;
    return h && h.length ? o = h.slice() : o.length || (o = a.slice()), n.defaultedLabel = a, n.defaultedTooltip = o, r.userOutput = new oS(s, t), r
}

function Qo(e, t) {
    return e.hasOwnProperty(t) || (e[t] = []), e[t]
}

function MT(e) {
    return e === "category" ? "ordinal" : e === "time" ? "time" : "float"
}

function uS(e) {
    return !(e === "ordinal" || e === "time")
}
var ia = function() {
        function e(t) {
            this.otherDims = {}, t != null && I(this, t)
        }
        return e
    }(),
    lS = Pt(),
    fS = {
        float: "f",
        int: "i",
        ordinal: "o",
        number: "n",
        time: "t"
    },
    ed = function() {
        function e(t) {
            this.dimensions = t.dimensions, this._dimOmitted = t.dimensionOmitted, this.source = t.source, this._fullDimCount = t.fullDimensionCount, this._updateDimOmitted(t.dimensionOmitted)
        }
        return e.prototype.isDimensionOmitted = function() {
            return this._dimOmitted
        }, e.prototype._updateDimOmitted = function(t) {
            this._dimOmitted = t, t && (this._dimNameMap || (this._dimNameMap = nd(this.source)))
        }, e.prototype.getSourceDimensionIndex = function(t) {
            return q(this._dimNameMap.get(t), -1)
        }, e.prototype.getSourceDimension = function(t) {
            var r = this.source.dimensionsDefine;
            if (r) return r[t]
        }, e.prototype.makeStoreSchema = function() {
            for (var t = this._fullDimCount, r = fc(this.source), n = !id(t), i = "", a = [], o = 0, s = 0; o < t; o++) {
                var u = void 0,
                    l = void 0,
                    f = void 0,
                    h = this.dimensions[s];
                if (h && h.storeDimIndex === o) u = r ? h.name : null, l = h.type, f = h.ordinalMeta, s++;
                else {
                    var c = this.getSourceDimension(o);
                    c && (u = r ? c.name : null, l = c.type)
                }
                a.push({
                    property: u,
                    type: l,
                    ordinalMeta: f
                }), r && u != null && (!h || !h.isCalculationCoord) && (i += n ? u.replace(/\`/g, "`1").replace(/\$/g, "`2") : u), i += "$", i += fS[l] || "f", f && (i += f.uid), i += "$"
            }
            var v = this.source,
                d = [v.seriesLayoutBy, v.startIndex, i].join("$$");
            return {
                dimensions: a,
                hash: d
            }
        }, e.prototype.makeOutputDimensionNames = function() {
            for (var t = [], r = 0, n = 0; r < this._fullDimCount; r++) {
                var i = void 0,
                    a = this.dimensions[n];
                if (a && a.storeDimIndex === r) a.isCalculationCoord || (i = a.name), n++;
                else {
                    var o = this.getSourceDimension(r);
                    o && (i = o.name)
                }
                t.push(i)
            }
            return t
        }, e.prototype.appendCalculationDimension = function(t) {
            this.dimensions.push(t), t.isCalculationCoord = !0, this._fullDimCount++, this._updateDimOmitted(!0)
        }, e
    }();

function hS(e) {
    return e instanceof ed
}

function rd(e) {
    for (var t = Z(), r = 0; r < (e || []).length; r++) {
        var n = e[r],
            i = H(n) ? n.name : n;
        i != null && t.get(i) == null && t.set(i, r)
    }
    return t
}

function nd(e) {
    var t = lS(e);
    return t.dimNameMap || (t.dimNameMap = rd(e.dimensionsDefine))
}

function id(e) {
    return e > 30
}
var Pn = H,
    Ge = Q,
    vS = typeof Int32Array > "u" ? Array : Int32Array,
    cS = "e\0\0",
    vh = -1,
    dS = ["hasItemOption", "_nameList", "_idList", "_invertedIndicesMap", "_dimSummary", "userOutput", "_rawData", "_dimValueGetter", "_nameDimIdx", "_idDimIdx", "_nameRepeatCount"],
    pS = ["_approximateExtent"],
    ch, Gi, An, Rn, Jo, xn, jo, gS = function() {
        function e(t, r) {
            this.type = "list", this._dimOmitted = !1, this._nameList = [], this._idList = [], this._visual = {}, this._layout = {}, this._itemVisuals = [], this._itemLayouts = [], this._graphicEls = [], this._approximateExtent = {}, this._calculationInfo = {}, this.hasItemOption = !1, this.TRANSFERABLE_METHODS = ["cloneShallow", "downSample", "minmaxDownSample", "lttbDownSample", "map"], this.CHANGABLE_METHODS = ["filterSelf", "selectRange"], this.DOWNSAMPLE_METHODS = ["downSample", "minmaxDownSample", "lttbDownSample"];
            var n, i = !1;
            hS(t) ? (n = t.dimensions, this._dimOmitted = t.isDimensionOmitted(), this._schema = t) : (i = !0, n = t), n = n || ["x", "y"];
            for (var a = {}, o = [], s = {}, u = !1, l = {}, f = 0; f < n.length; f++) {
                var h = n[f],
                    c = X(h) ? new ia({
                        name: h
                    }) : h instanceof ia ? h : new ia(h),
                    v = c.name;
                c.type = c.type || "float", c.coordDim || (c.coordDim = v, c.coordDimIndex = 0);
                var d = c.otherDims = c.otherDims || {};
                o.push(v), a[v] = c, l[v] != null && (u = !0), c.createInvertedIndices && (s[v] = []), d.itemName === 0 && (this._nameDimIdx = f), d.itemId === 0 && (this._idDimIdx = f), i && (c.storeDimIndex = f)
            }
            if (this.dimensions = o, this._dimInfos = a, this._initGetDimensionInfo(u), this.hostModel = r, this._invertedIndicesMap = s, this._dimOmitted) {
                var g = this._dimIdxToName = Z();
                P(o, function(p) {
                    g.set(a[p].storeDimIndex, p)
                })
            }
        }
        return e.prototype.getDimension = function(t) {
            var r = this._recognizeDimIndex(t);
            if (r == null) return t;
            if (r = t, !this._dimOmitted) return this.dimensions[r];
            var n = this._dimIdxToName.get(r);
            if (n != null) return n;
            var i = this._schema.getSourceDimension(r);
            if (i) return i.name
        }, e.prototype.getDimensionIndex = function(t) {
            var r = this._recognizeDimIndex(t);
            if (r != null) return r;
            if (t == null) return -1;
            var n = this._getDimInfo(t);
            return n ? n.storeDimIndex : this._dimOmitted ? this._schema.getSourceDimensionIndex(t) : -1
        }, e.prototype._recognizeDimIndex = function(t) {
            if (at(t) || t != null && !isNaN(t) && !this._getDimInfo(t) && (!this._dimOmitted || this._schema.getSourceDimensionIndex(t) < 0)) return +t
        }, e.prototype._getStoreDimIndex = function(t) {
            var r = this.getDimensionIndex(t);
            return r
        }, e.prototype.getDimensionInfo = function(t) {
            return this._getDimInfo(this.getDimension(t))
        }, e.prototype._initGetDimensionInfo = function(t) {
            var r = this._dimInfos;
            this._getDimInfo = t ? function(n) {
                return r.hasOwnProperty(n) ? r[n] : void 0
            } : function(n) {
                return r[n]
            }
        }, e.prototype.getDimensionsOnCoord = function() {
            return this._dimSummary.dataDimsOnCoord.slice()
        }, e.prototype.mapDimension = function(t, r) {
            var n = this._dimSummary;
            if (r == null) return n.encodeFirstDimNotExtra[t];
            var i = n.encode[t];
            return i ? i[r] : null
        }, e.prototype.mapDimensionsAll = function(t) {
            var r = this._dimSummary,
                n = r.encode[t];
            return (n || []).slice()
        }, e.prototype.getStore = function() {
            return this._store
        }, e.prototype.initData = function(t, r, n) {
            var i = this,
                a;
            if (t instanceof zs && (a = t), !a) {
                var o = this.dimensions,
                    s = xu(t) || Bt(t) ? new hc(t, o.length) : t;
                a = new zs;
                var u = Ge(o, function(l) {
                    return {
                        type: i._dimInfos[l].type,
                        property: l
                    }
                });
                a.initData(s, u, n)
            }
            this._store = a, this._nameList = (r || []).slice(), this._idList = [], this._nameRepeatCount = {}, this._doInit(0, a.count()), this._dimSummary = sS(this, this._schema), this.userOutput = this._dimSummary.userOutput
        }, e.prototype.appendData = function(t) {
            var r = this._store.appendData(t);
            this._doInit(r[0], r[1])
        }, e.prototype.appendValues = function(t, r) {
            var n = this._store.appendValues(t, r && r.length),
                i = n.start,
                a = n.end,
                o = this._shouldMakeIdFromName();
            if (this._updateOrdinalMeta(), r)
                for (var s = i; s < a; s++) {
                    var u = s - i;
                    this._nameList[s] = r[u], o && jo(this, s)
                }
        }, e.prototype._updateOrdinalMeta = function() {
            for (var t = this._store, r = this.dimensions, n = 0; n < r.length; n++) {
                var i = this._dimInfos[r[n]];
                i.ordinalMeta && t.collectOrdinalMeta(i.storeDimIndex, i.ordinalMeta)
            }
        }, e.prototype._shouldMakeIdFromName = function() {
            var t = this._store.getProvider();
            return this._idDimIdx == null && t.getSource().sourceFormat !== qe && !t.fillStorage
        }, e.prototype._doInit = function(t, r) {
            if (!(t >= r)) {
                var n = this._store,
                    i = n.getProvider();
                this._updateOrdinalMeta();
                var a = this._nameList,
                    o = this._idList,
                    s = i.getSource().sourceFormat,
                    u = s === De;
                if (u && !i.pure)
                    for (var l = [], f = t; f < r; f++) {
                        var h = i.getItem(f, l);
                        if (!this.hasItemOption && og(h) && (this.hasItemOption = !0), h) {
                            var c = h.name;
                            a[f] == null && c != null && (a[f] = ue(c, null));
                            var v = h.id;
                            o[f] == null && v != null && (o[f] = ue(v, null))
                        }
                    }
                if (this._shouldMakeIdFromName())
                    for (var f = t; f < r; f++) jo(this, f);
                ch(this)
            }
        }, e.prototype.getApproximateExtent = function(t) {
            return this._approximateExtent[t] || this._store.getDataExtent(this._getStoreDimIndex(t))
        }, e.prototype.setApproximateExtent = function(t, r) {
            r = this.getDimension(r), this._approximateExtent[r] = t.slice()
        }, e.prototype.getCalculationInfo = function(t) {
            return this._calculationInfo[t]
        }, e.prototype.setCalculationInfo = function(t, r) {
            Pn(t) ? I(this._calculationInfo, t) : this._calculationInfo[t] = r
        }, e.prototype.getName = function(t) {
            var r = this.getRawIndex(t),
                n = this._nameList[r];
            return n == null && this._nameDimIdx != null && (n = An(this, this._nameDimIdx, r)), n == null && (n = ""), n
        }, e.prototype._getCategory = function(t, r) {
            var n = this._store.get(t, r),
                i = this._store.getOrdinalMeta(t);
            return i ? i.categories[n] : n
        }, e.prototype.getId = function(t) {
            return Gi(this, this.getRawIndex(t))
        }, e.prototype.count = function() {
            return this._store.count()
        }, e.prototype.get = function(t, r) {
            var n = this._store,
                i = this._dimInfos[t];
            if (i) return n.get(i.storeDimIndex, r)
        }, e.prototype.getByRawIndex = function(t, r) {
            var n = this._store,
                i = this._dimInfos[t];
            if (i) return n.getByRawIndex(i.storeDimIndex, r)
        }, e.prototype.getIndices = function() {
            return this._store.getIndices()
        }, e.prototype.getDataExtent = function(t) {
            return this._store.getDataExtent(this._getStoreDimIndex(t))
        }, e.prototype.getSum = function(t) {
            return this._store.getSum(this._getStoreDimIndex(t))
        }, e.prototype.getMedian = function(t) {
            return this._store.getMedian(this._getStoreDimIndex(t))
        }, e.prototype.getValues = function(t, r) {
            var n = this,
                i = this._store;
            return F(t) ? i.getValues(Ge(t, function(a) {
                return n._getStoreDimIndex(a)
            }), r) : i.getValues(t)
        }, e.prototype.hasValue = function(t) {
            for (var r = this._dimSummary.dataDimIndicesOnCoord, n = 0, i = r.length; n < i; n++)
                if (isNaN(this._store.get(r[n], t))) return !1;
            return !0
        }, e.prototype.indexOfName = function(t) {
            for (var r = 0, n = this._store.count(); r < n; r++)
                if (this.getName(r) === t) return r;
            return -1
        }, e.prototype.getRawIndex = function(t) {
            return this._store.getRawIndex(t)
        }, e.prototype.indexOfRawIndex = function(t) {
            return this._store.indexOfRawIndex(t)
        }, e.prototype.rawIndexOf = function(t, r) {
            var n = t && this._invertedIndicesMap[t],
                i = n && n[r];
            return i == null || isNaN(i) ? vh : i
        }, e.prototype.indicesOfNearest = function(t, r, n) {
            return this._store.indicesOfNearest(this._getStoreDimIndex(t), r, n)
        }, e.prototype.each = function(t, r, n) {
            rt(t) && (n = r, r = t, t = []);
            var i = n || this,
                a = Ge(Rn(t), this._getStoreDimIndex, this);
            this._store.each(a, i ? Ct(r, i) : r)
        }, e.prototype.filterSelf = function(t, r, n) {
            rt(t) && (n = r, r = t, t = []);
            var i = n || this,
                a = Ge(Rn(t), this._getStoreDimIndex, this);
            return this._store = this._store.filter(a, i ? Ct(r, i) : r), this
        }, e.prototype.selectRange = function(t) {
            var r = this,
                n = {},
                i = ht(t);
            return P(i, function(a) {
                var o = r._getStoreDimIndex(a);
                n[o] = t[a]
            }), this._store = this._store.selectRange(n), this
        }, e.prototype.mapArray = function(t, r, n) {
            rt(t) && (n = r, r = t, t = []), n = n || this;
            var i = [];
            return this.each(t, function() {
                i.push(r && r.apply(this, arguments))
            }, n), i
        }, e.prototype.map = function(t, r, n, i) {
            var a = n || i || this,
                o = Ge(Rn(t), this._getStoreDimIndex, this),
                s = xn(this);
            return s._store = this._store.map(o, a ? Ct(r, a) : r), s
        }, e.prototype.modify = function(t, r, n, i) {
            var a = n || i || this,
                o = Ge(Rn(t), this._getStoreDimIndex, this);
            this._store.modify(o, a ? Ct(r, a) : r)
        }, e.prototype.downSample = function(t, r, n, i) {
            var a = xn(this);
            return a._store = this._store.downSample(this._getStoreDimIndex(t), r, n, i), a
        }, e.prototype.minmaxDownSample = function(t, r) {
            var n = xn(this);
            return n._store = this._store.minmaxDownSample(this._getStoreDimIndex(t), r), n
        }, e.prototype.lttbDownSample = function(t, r) {
            var n = xn(this);
            return n._store = this._store.lttbDownSample(this._getStoreDimIndex(t), r), n
        }, e.prototype.getRawDataItem = function(t) {
            return this._store.getRawDataItem(t)
        }, e.prototype.getItemModel = function(t) {
            var r = this.hostModel,
                n = this.getRawDataItem(t);
            return new xt(n, r, r && r.ecModel)
        }, e.prototype.diff = function(t) {
            var r = this;
            return new aS(t ? t.getStore().getIndices() : [], this.getStore().getIndices(), function(n) {
                return Gi(t, n)
            }, function(n) {
                return Gi(r, n)
            })
        }, e.prototype.getVisual = function(t) {
            var r = this._visual;
            return r && r[t]
        }, e.prototype.setVisual = function(t, r) {
            this._visual = this._visual || {}, Pn(t) ? I(this._visual, t) : this._visual[t] = r
        }, e.prototype.getItemVisual = function(t, r) {
            var n = this._itemVisuals[t],
                i = n && n[r];
            return i ? ? this.getVisual(r)
        }, e.prototype.hasItemVisual = function() {
            return this._itemVisuals.length > 0
        }, e.prototype.ensureUniqueItemVisual = function(t, r) {
            var n = this._itemVisuals,
                i = n[t];
            i || (i = n[t] = {});
            var a = i[r];
            return a == null && (a = this.getVisual(r), F(a) ? a = a.slice() : Pn(a) && (a = I({}, a)), i[r] = a), a
        }, e.prototype.setItemVisual = function(t, r, n) {
            var i = this._itemVisuals[t] || {};
            this._itemVisuals[t] = i, Pn(r) ? I(i, r) : i[r] = n
        }, e.prototype.clearAllVisual = function() {
            this._visual = {}, this._itemVisuals = []
        }, e.prototype.setLayout = function(t, r) {
            Pn(t) ? I(this._layout, t) : this._layout[t] = r
        }, e.prototype.getLayout = function(t) {
            return this._layout[t]
        }, e.prototype.getItemLayout = function(t) {
            return this._itemLayouts[t]
        }, e.prototype.setItemLayout = function(t, r, n) {
            this._itemLayouts[t] = n ? I(this._itemLayouts[t] || {}, r) : r
        }, e.prototype.clearItemLayouts = function() {
            this._itemLayouts.length = 0
        }, e.prototype.setItemGraphicEl = function(t, r) {
            var n = this.hostModel && this.hostModel.seriesIndex;
            g0(n, this.dataType, t, r), this._graphicEls[t] = r
        }, e.prototype.getItemGraphicEl = function(t) {
            return this._graphicEls[t]
        }, e.prototype.eachItemGraphicEl = function(t, r) {
            P(this._graphicEls, function(n, i) {
                n && t && t.call(r, n, i)
            })
        }, e.prototype.cloneShallow = function(t) {
            return t || (t = new e(this._schema ? this._schema : Ge(this.dimensions, this._getDimInfo, this), this.hostModel)), Jo(t, this), t._store = this._store, t
        }, e.prototype.wrapMethod = function(t, r) {
            var n = this[t];
            rt(n) && (this.__wrappedMethods = this.__wrappedMethods || [], this.__wrappedMethods.push(t), this[t] = function() {
                var i = n.apply(this, arguments);
                return r.apply(this, [i].concat(tu(arguments)))
            })
        }, e.internalField = function() {
            ch = function(t) {
                var r = t._invertedIndicesMap;
                P(r, function(n, i) {
                    var a = t._dimInfos[i],
                        o = a.ordinalMeta,
                        s = t._store;
                    if (o) {
                        n = r[i] = new vS(o.categories.length);
                        for (var u = 0; u < n.length; u++) n[u] = vh;
                        for (var u = 0; u < s.count(); u++) n[s.get(a.storeDimIndex, u)] = u
                    }
                })
            }, An = function(t, r, n) {
                return ue(t._getCategory(r, n), null)
            }, Gi = function(t, r) {
                var n = t._idList[r];
                return n == null && t._idDimIdx != null && (n = An(t, t._idDimIdx, r)), n == null && (n = cS + r), n
            }, Rn = function(t) {
                return F(t) || (t = t != null ? [t] : []), t
            }, xn = function(t) {
                var r = new e(t._schema ? t._schema : Ge(t.dimensions, t._getDimInfo, t), t.hostModel);
                return Jo(r, t), r
            }, Jo = function(t, r) {
                P(dS.concat(r.__wrappedMethods || []), function(n) {
                    r.hasOwnProperty(n) && (t[n] = r[n])
                }), t.__wrappedMethods = r.__wrappedMethods, P(pS, function(n) {
                    t[n] = tt(r[n])
                }), t._calculationInfo = I({}, r._calculationInfo)
            }, jo = function(t, r) {
                var n = t._nameList,
                    i = t._idList,
                    a = t._nameDimIdx,
                    o = t._idDimIdx,
                    s = n[r],
                    u = i[r];
                if (s == null && a != null && (n[r] = s = An(t, a, r)), u == null && o != null && (i[r] = u = An(t, o, r)), u == null && s != null) {
                    var l = t._nameRepeatCount,
                        f = l[s] = (l[s] || 0) + 1;
                    u = s, f > 1 && (u += "__ec__" + f), i[r] = u
                }
            }
        }(), e
    }();

function yS(e, t) {
    xu(e) || (e = uc(e)), t = t || {};
    var r = t.coordDimensions || [],
        n = t.dimensionsDefine || e.dimensionsDefine || [],
        i = Z(),
        a = [],
        o = _S(e, r, n, t.dimensionsCount),
        s = t.canOmitUnusedDimensions && id(o),
        u = n === e.dimensionsDefine,
        l = u ? nd(e) : rd(n),
        f = t.encodeDefine;
    !f && t.encodeDefaulter && (f = t.encodeDefaulter(e, o));
    for (var h = Z(f), c = new yc(o), v = 0; v < c.length; v++) c[v] = -1;

    function d(D) {
        var C = c[D];
        if (C < 0) {
            var A = n[D],
                x = H(A) ? A : {
                    name: A
                },
                L = new ia,
                R = x.name;
            R != null && l.get(R) != null && (L.name = L.displayName = R), x.type != null && (L.type = x.type), x.displayName != null && (L.displayName = x.displayName);
            var O = a.length;
            return c[D] = O, L.storeDimIndex = D, a.push(L), L
        }
        return a[C]
    }
    if (!s)
        for (var v = 0; v < o; v++) d(v);
    h.each(function(D, C) {
        var A = St(D).slice();
        if (A.length === 1 && !X(A[0]) && A[0] < 0) {
            h.set(C, !1);
            return
        }
        var x = h.set(C, []);
        P(A, function(L, R) {
            var O = X(L) ? l.get(L) : L;
            O != null && O < o && (x[R] = O, p(d(O), C, R))
        })
    });
    var g = 0;
    P(r, function(D) {
        var C, A, x, L;
        if (X(D)) C = D, L = {};
        else {
            L = D, C = L.name;
            var R = L.ordinalMeta;
            L.ordinalMeta = null, L = I({}, L), L.ordinalMeta = R, A = L.dimsDef, x = L.otherDims, L.name = L.coordDim = L.coordDimIndex = L.dimsDef = L.otherDims = null
        }
        var O = h.get(C);
        if (O !== !1) {
            if (O = St(O), !O.length)
                for (var E = 0; E < (A && A.length || 1); E++) {
                    for (; g < o && d(g).coordDim != null;) g++;
                    g < o && O.push(g++)
                }
            P(O, function(G, V) {
                var k = d(G);
                if (u && L.type != null && (k.type = L.type), p(dt(k, L), C, V), k.name == null && A) {
                    var U = A[V];
                    !H(U) && (U = {
                        name: U
                    }), k.name = k.displayName = U.name, k.defaultTooltip = U.defaultTooltip
                }
                x && dt(k.otherDims, x)
            })
        }
    });

    function p(D, C, A) {
        Jv.get(C) != null ? D.otherDims[C] = A : (D.coordDim = C, D.coordDimIndex = A, i.set(C, !0))
    }
    var y = t.generateCoord,
        m = t.generateCoordCount,
        _ = m != null;
    m = y ? m || 1 : 0;
    var S = y || "value";

    function T(D) {
        D.name == null && (D.name = D.coordDim)
    }
    if (s) P(a, function(D) {
        T(D)
    }), a.sort(function(D, C) {
        return D.storeDimIndex - C.storeDimIndex
    });
    else
        for (var w = 0; w < o; w++) {
            var b = d(w),
                M = b.coordDim;
            M == null && (b.coordDim = SS(S, i, _), b.coordDimIndex = 0, (!y || m <= 0) && (b.isExtraCoord = !0), m--), T(b), b.type == null && (ec(e, w) === mt.Must || b.isExtraCoord && (b.otherDims.itemName != null || b.otherDims.seriesName != null)) && (b.type = "ordinal")
        }
    return mS(a), new ed({
        source: e,
        dimensions: a,
        fullDimensionCount: o,
        dimensionOmitted: s
    })
}

function mS(e) {
    for (var t = Z(), r = 0; r < e.length; r++) {
        var n = e[r],
            i = n.name,
            a = t.get(i) || 0;
        a > 0 && (n.name = i + (a - 1)), a++, t.set(i, a)
    }
}

function _S(e, t, r, n) {
    var i = Math.max(e.dimensionsDetectedCount || 1, t.length, r.length, n || 0);
    return P(t, function(a) {
        var o;
        H(a) && (o = a.dimsDef) && (i = Math.max(i, o.length))
    }), i
}

function SS(e, t, r) {
    if (r || t.hasKey(e)) {
        for (var n = 0; t.hasKey(e + n);) n++;
        e += n
    }
    return t.set(e, !0), e
}
var Ln = Math.PI * 2,
    mr = Ar.CMD,
    wS = ["top", "right", "bottom", "left"];

function TS(e, t, r, n, i) {
    var a = r.width,
        o = r.height;
    switch (e) {
        case "top":
            n.set(r.x + a / 2, r.y - t), i.set(0, -1);
            break;
        case "bottom":
            n.set(r.x + a / 2, r.y + o + t), i.set(0, 1);
            break;
        case "left":
            n.set(r.x - t, r.y + o / 2), i.set(-1, 0);
            break;
        case "right":
            n.set(r.x + a + t, r.y + o / 2), i.set(1, 0);
            break
    }
}

function bS(e, t, r, n, i, a, o, s, u) {
    o -= e, s -= t;
    var l = Math.sqrt(o * o + s * s);
    o /= l, s /= l;
    var f = o * r + e,
        h = s * r + t;
    if (Math.abs(n - i) % Ln < 1e-4) return u[0] = f, u[1] = h, l - r;
    if (a) {
        var c = n;
        n = We(i), i = We(c)
    } else n = We(n), i = We(i);
    n > i && (i += Ln);
    var v = Math.atan2(s, o);
    if (v < 0 && (v += Ln), v >= n && v <= i || v + Ln >= n && v + Ln <= i) return u[0] = f, u[1] = h, l - r;
    var d = r * Math.cos(n) + e,
        g = r * Math.sin(n) + t,
        p = r * Math.cos(i) + e,
        y = r * Math.sin(i) + t,
        m = (d - o) * (d - o) + (g - s) * (g - s),
        _ = (p - o) * (p - o) + (y - s) * (y - s);
    return m < _ ? (u[0] = d, u[1] = g, Math.sqrt(m)) : (u[0] = p, u[1] = y, Math.sqrt(_))
}

function Ca(e, t, r, n, i, a, o, s) {
    var u = i - e,
        l = a - t,
        f = r - e,
        h = n - t,
        c = Math.sqrt(f * f + h * h);
    f /= c, h /= c;
    var v = u * f + l * h,
        d = v / c;
    s && (d = Math.min(Math.max(d, 0), 1)), d *= c;
    var g = o[0] = e + d * f,
        p = o[1] = t + d * h;
    return Math.sqrt((g - i) * (g - i) + (p - a) * (p - a))
}

function ad(e, t, r, n, i, a, o) {
    r < 0 && (e = e + r, r = -r), n < 0 && (t = t + n, n = -n);
    var s = e + r,
        u = t + n,
        l = o[0] = Math.min(Math.max(i, e), s),
        f = o[1] = Math.min(Math.max(a, t), u);
    return Math.sqrt((l - i) * (l - i) + (f - a) * (f - a))
}
var ne = [];

function DS(e, t, r) {
    var n = ad(t.x, t.y, t.width, t.height, e.x, e.y, ne);
    return r.set(ne[0], ne[1]), n
}

function MS(e, t, r) {
    for (var n = 0, i = 0, a = 0, o = 0, s, u, l = 1 / 0, f = t.data, h = e.x, c = e.y, v = 0; v < f.length;) {
        var d = f[v++];
        v === 1 && (n = f[v], i = f[v + 1], a = n, o = i);
        var g = l;
        switch (d) {
            case mr.M:
                a = f[v++], o = f[v++], n = a, i = o;
                break;
            case mr.L:
                g = Ca(n, i, f[v], f[v + 1], h, c, ne, !0), n = f[v++], i = f[v++];
                break;
            case mr.C:
                g = kh(n, i, f[v++], f[v++], f[v++], f[v++], f[v], f[v + 1], h, c, ne), n = f[v++], i = f[v++];
                break;
            case mr.Q:
                g = Nh(n, i, f[v++], f[v++], f[v], f[v + 1], h, c, ne), n = f[v++], i = f[v++];
                break;
            case mr.A:
                var p = f[v++],
                    y = f[v++],
                    m = f[v++],
                    _ = f[v++],
                    S = f[v++],
                    T = f[v++];
                v += 1;
                var w = !!(1 - f[v++]);
                s = Math.cos(S) * m + p, u = Math.sin(S) * _ + y, v <= 1 && (a = s, o = u);
                var b = (h - p) * _ / m + p;
                g = bS(p, y, _, S, S + T, w, b, c, ne), n = Math.cos(S + T) * m + p, i = Math.sin(S + T) * _ + y;
                break;
            case mr.R:
                a = n = f[v++], o = i = f[v++];
                var M = f[v++],
                    D = f[v++];
                g = ad(a, o, M, D, h, c, ne);
                break;
            case mr.Z:
                g = Ca(n, i, a, o, h, c, ne, !0), n = a, i = o;
                break
        }
        g < l && (l = g, r.set(ne[0], ne[1]))
    }
    return l
}
var ae = new B,
    j = new B,
    ot = new B,
    Se = new B,
    me = new B;

function CT(e, t) {
    if (e) {
        var r = e.getTextGuideLine(),
            n = e.getTextContent();
        if (n && r) {
            var i = e.textGuideLineConfig || {},
                a = [
                    [0, 0],
                    [0, 0],
                    [0, 0]
                ],
                o = i.candidates || wS,
                s = n.getBoundingRect().clone();
            s.applyTransform(n.getComputedTransform());
            var u = 1 / 0,
                l = i.anchor,
                f = e.getComputedTransform(),
                h = f && ru([], f),
                c = t.get("length2") || 0;
            l && ot.copy(l);
            for (var v = 0; v < o.length; v++) {
                var d = o[v];
                TS(d, 0, s, ae, Se), B.scaleAndAdd(j, ae, Se, c), j.transform(h);
                var g = e.getBoundingRect(),
                    p = l ? l.distance(j) : e instanceof et ? MS(j, e.path, ot) : DS(j, g, ot);
                p < u && (u = p, j.transform(f), ot.transform(f), ot.toArray(a[0]), j.toArray(a[1]), ae.toArray(a[2]))
            }
            od(a, t.get("minTurnAngle")), r.setShape({
                points: a
            })
        }
    }
}
var Pa = [],
    Rt = new B;

function od(e, t) {
    if (t <= 180 && t > 0) {
        t = t / 180 * Math.PI, ae.fromArray(e[0]), j.fromArray(e[1]), ot.fromArray(e[2]), B.sub(Se, ae, j), B.sub(me, ot, j);
        var r = Se.len(),
            n = me.len();
        if (!(r < .001 || n < .001)) {
            Se.scale(1 / r), me.scale(1 / n);
            var i = Se.dot(me),
                a = Math.cos(t);
            if (a < i) {
                var o = Ca(j.x, j.y, ot.x, ot.y, ae.x, ae.y, Pa, !1);
                Rt.fromArray(Pa), Rt.scaleAndAdd(me, o / Math.tan(Math.PI - t));
                var s = ot.x !== j.x ? (Rt.x - j.x) / (ot.x - j.x) : (Rt.y - j.y) / (ot.y - j.y);
                if (isNaN(s)) return;
                s < 0 ? B.copy(Rt, j) : s > 1 && B.copy(Rt, ot), Rt.toArray(e[1])
            }
        }
    }
}

function CS(e, t, r) {
    if (r <= 180 && r > 0) {
        r = r / 180 * Math.PI, ae.fromArray(e[0]), j.fromArray(e[1]), ot.fromArray(e[2]), B.sub(Se, j, ae), B.sub(me, ot, j);
        var n = Se.len(),
            i = me.len();
        if (!(n < .001 || i < .001)) {
            Se.scale(1 / n), me.scale(1 / i);
            var a = Se.dot(t),
                o = Math.cos(r);
            if (a < o) {
                var s = Ca(j.x, j.y, ot.x, ot.y, ae.x, ae.y, Pa, !1);
                Rt.fromArray(Pa);
                var u = Math.PI / 2,
                    l = Math.acos(me.dot(t)),
                    f = u + l - r;
                if (f >= u) B.copy(Rt, ot);
                else {
                    Rt.scaleAndAdd(me, s / Math.tan(Math.PI / 2 - f));
                    var h = ot.x !== j.x ? (Rt.x - j.x) / (ot.x - j.x) : (Rt.y - j.y) / (ot.y - j.y);
                    if (isNaN(h)) return;
                    h < 0 ? B.copy(Rt, j) : h > 1 && B.copy(Rt, ot)
                }
                Rt.toArray(e[1])
            }
        }
    }
}

function ts(e, t, r, n) {
    var i = r === "normal",
        a = i ? e : e.ensureState(r);
    a.ignore = t;
    var o = n.get("smooth");
    o && o === !0 && (o = .3), a.shape = a.shape || {}, o > 0 && (a.shape.smooth = o);
    var s = n.getModel("lineStyle").getLineStyle();
    i ? e.useStyle(s) : a.style = s
}

function PS(e, t) {
    var r = t.smooth,
        n = t.points;
    if (n)
        if (e.moveTo(n[0][0], n[0][1]), r > 0 && n.length >= 3) {
            var i = os(n[0], n[1]),
                a = os(n[1], n[2]);
            if (!i || !a) {
                e.lineTo(n[1][0], n[1][1]), e.lineTo(n[2][0], n[2][1]);
                return
            }
            var o = Math.min(i, a) * r,
                s = Za([], n[1], n[0], o / i),
                u = Za([], n[1], n[2], o / a),
                l = Za([], s, u, .5);
            e.bezierCurveTo(s[0], s[1], s[0], s[1], l[0], l[1]), e.bezierCurveTo(u[0], u[1], u[0], u[1], n[2][0], n[2][1])
        } else
            for (var f = 1; f < n.length; f++) e.lineTo(n[f][0], n[f][1])
}

function AS(e, t, r) {
    var n = e.getTextGuideLine(),
        i = e.getTextContent();
    if (!i) {
        n && e.removeTextGuideLine();
        return
    }
    for (var a = t.normal, o = a.get("show"), s = i.ignore, u = 0; u < ha.length; u++) {
        var l = ha[u],
            f = t[l],
            h = l === "normal";
        if (f) {
            var c = f.get("show"),
                v = h ? s : q(i.states[l] && i.states[l].ignore, s);
            if (v || !q(c, o)) {
                var d = h ? n : n && n.states[l];
                d && (d.ignore = !0), n && ts(n, !0, l, f);
                continue
            }
            n || (n = new vi, e.setTextGuideLine(n), !h && (s || !o) && ts(n, !0, "normal", t.normal), e.stateProxy && (n.stateProxy = e.stateProxy)), ts(n, !1, l, f)
        }
    }
    if (n) {
        dt(n.style, r), n.style.fill = null;
        var g = a.get("showAbove"),
            p = e.textGuideLineConfig = e.textGuideLineConfig || {};
        p.showAbove = g || !1, n.buildPath = PS
    }
}

function RS(e, t) {
    t = t || "labelLine";
    for (var r = {
            normal: e.getModel(t)
        }, n = 0; n < be.length; n++) {
        var i = be[n];
        r[i] = e.getModel([i, t])
    }
    return r
}

function PT(e) {
    for (var t = [], r = 0; r < e.length; r++) {
        var n = e[r];
        if (!n.defaultAttr.ignore) {
            var i = n.label,
                a = i.getComputedTransform(),
                o = i.getBoundingRect(),
                s = !a || a[1] < 1e-5 && a[2] < 1e-5,
                u = i.style.margin || 0,
                l = o.clone();
            l.applyTransform(a), l.x -= u / 2, l.y -= u / 2, l.width += u, l.height += u;
            var f = s ? new va(o, a) : null;
            t.push({
                label: i,
                labelLine: n.labelLine,
                rect: l,
                localRect: o,
                obb: f,
                priority: n.priority,
                defaultAttr: n.defaultAttr,
                layoutOption: n.computedLayoutOption,
                axisAligned: s,
                transform: a
            })
        }
    }
    return t
}

function sd(e, t, r, n, i, a) {
    var o = e.length;
    if (o < 2) return;
    e.sort(function(w, b) {
        return w.rect[t] - b.rect[t]
    });
    for (var s = 0, u, l = !1, f = 0; f < o; f++) {
        var h = e[f],
            c = h.rect;
        u = c[t] - s, u < 0 && (c[t] -= u, h.label[t] -= u, l = !0), s = c[t] + c[r]
    }
    var v = e[0],
        d = e[o - 1],
        g, p;
    y(), g < 0 && S(-g, .8), p < 0 && S(p, .8), y(), m(g, p, 1), m(p, g, -1), y(), g < 0 && T(-g), p < 0 && T(p);

    function y() {
        g = v.rect[t] - n, p = i - d.rect[t] - d.rect[r]
    }

    function m(w, b, M) {
        if (w < 0) {
            var D = Math.min(b, -w);
            if (D > 0) {
                _(D * M, 0, o);
                var C = D + w;
                C < 0 && S(-C * M, 1)
            } else S(-w * M, 1)
        }
    }

    function _(w, b, M) {
        w !== 0 && (l = !0);
        for (var D = b; D < M; D++) {
            var C = e[D],
                A = C.rect;
            A[t] += w, C.label[t] += w
        }
    }

    function S(w, b) {
        for (var M = [], D = 0, C = 1; C < o; C++) {
            var A = e[C - 1].rect,
                x = Math.max(e[C].rect[t] - A[t] - A[r], 0);
            M.push(x), D += x
        }
        if (D) {
            var L = Math.min(Math.abs(w) / D, b);
            if (w > 0)
                for (var C = 0; C < o - 1; C++) {
                    var R = M[C] * L;
                    _(R, 0, C + 1)
                } else
                    for (var C = o - 1; C > 0; C--) {
                        var R = M[C - 1] * L;
                        _(-R, C, o)
                    }
        }
    }

    function T(w) {
        var b = w < 0 ? -1 : 1;
        w = Math.abs(w);
        for (var M = Math.ceil(w / (o - 1)), D = 0; D < o - 1; D++)
            if (b > 0 ? _(M, 0, D + 1) : _(-M, o - D - 1, o), w -= M, w <= 0) return
    }
    return l
}

function AT(e, t, r, n) {
    return sd(e, "x", "width", t, r)
}

function xS(e, t, r, n) {
    return sd(e, "y", "height", t, r)
}

function RT(e) {
    var t = [];
    e.sort(function(g, p) {
        return p.priority - g.priority
    });
    var r = new nt(0, 0, 0, 0);

    function n(g) {
        if (!g.ignore) {
            var p = g.ensureState("emphasis");
            p.ignore == null && (p.ignore = !1)
        }
        g.ignore = !0
    }
    for (var i = 0; i < e.length; i++) {
        var a = e[i],
            o = a.axisAligned,
            s = a.localRect,
            u = a.transform,
            l = a.label,
            f = a.labelLine;
        r.copy(a.rect), r.width -= .1, r.height -= .1, r.x += .05, r.y += .05;
        for (var h = a.obb, c = !1, v = 0; v < t.length; v++) {
            var d = t[v];
            if (r.intersect(d.rect)) {
                if (o && d.axisAligned) {
                    c = !0;
                    break
                }
                if (d.obb || (d.obb = new va(d.localRect, d.transform)), h || (h = new va(s, u)), h.intersect(d.obb)) {
                    c = !0;
                    break
                }
            }
        }
        c ? (n(l), f && n(f)) : (l.attr("ignore", a.defaultAttr.ignore), f && f.attr("ignore", a.defaultAttr.labelGuideIgnore), t.push(a))
    }
}

function Vi(e, t, r) {
    var n = e.get("borderRadius");
    if (n == null) return r ? {
        cornerRadius: 0
    } : null;
    F(n) || (n = [n, n, n, n]);
    var i = Math.abs(t.r || 0 - t.r0 || 0);
    return {
        cornerRadius: Q(n, function(a) {
            return nn(a, i)
        })
    }
}
var dh = Math.PI * 2,
    Ui = Math.PI / 180;

function ud(e, t) {
    return Zv(e.getBoxLayoutParams(), {
        width: t.getWidth(),
        height: t.getHeight()
    })
}

function ld(e, t) {
    var r = ud(e, t),
        n = e.get("center"),
        i = e.get("radius");
    F(i) || (i = [0, i]);
    var a = lt(r.width, t.getWidth()),
        o = lt(r.height, t.getHeight()),
        s = Math.min(a, o),
        u = lt(i[0], s / 2),
        l = lt(i[1], s / 2),
        f, h, c = e.coordinateSystem;
    if (c) {
        var v = c.dataToPoint(n);
        f = v[0] || 0, h = v[1] || 0
    } else F(n) || (n = [n, n]), f = lt(n[0], a) + r.x, h = lt(n[1], o) + r.y;
    return {
        cx: f,
        cy: h,
        r0: u,
        r: l
    }
}

function LS(e, t, r) {
    t.eachSeriesByType(e, function(n) {
        var i = n.getData(),
            a = i.mapDimension("value"),
            o = ud(n, r),
            s = ld(n, r),
            u = s.cx,
            l = s.cy,
            f = s.r,
            h = s.r0,
            c = -n.get("startAngle") * Ui,
            v = n.get("endAngle"),
            d = n.get("padAngle") * Ui;
        v = v === "auto" ? c - dh : -v * Ui;
        var g = n.get("minAngle") * Ui,
            p = g + d,
            y = 0;
        i.each(a, function(G) {
            !isNaN(G) && y++
        });
        var m = i.getSum(a),
            _ = Math.PI / (m || y) * 2,
            S = n.get("clockwise"),
            T = n.get("roseType"),
            w = n.get("stillShowZeroSum"),
            b = i.getDataExtent(a);
        b[0] = 0;
        var M = S ? 1 : -1,
            D = [c, v],
            C = M * d / 2;
        lv(D, !S), c = D[0], v = D[1];
        var A = fd(n);
        A.startAngle = c, A.endAngle = v, A.clockwise = S;
        var x = Math.abs(v - c),
            L = x,
            R = 0,
            O = c;
        if (i.setLayout({
                viewRect: o,
                r: f
            }), i.each(a, function(G, V) {
                var k;
                if (isNaN(G)) {
                    i.setItemLayout(V, {
                        angle: NaN,
                        startAngle: NaN,
                        endAngle: NaN,
                        clockwise: S,
                        cx: u,
                        cy: l,
                        r0: h,
                        r: T ? NaN : f
                    });
                    return
                }
                T !== "area" ? k = m === 0 && w ? _ : G * _ : k = x / y, k < p ? (k = p, L -= p) : R += G;
                var U = O + M * k,
                    $ = 0,
                    z = 0;
                d > k ? ($ = O + M * k / 2, z = $) : ($ = O + C, z = U - C), i.setItemLayout(V, {
                    angle: k,
                    startAngle: $,
                    endAngle: z,
                    clockwise: S,
                    cx: u,
                    cy: l,
                    r0: h,
                    r: T ? tg(G, b, [h, f]) : f
                }), O = U
            }), L < dh && y)
            if (L <= .001) {
                var E = x / y;
                i.each(a, function(G, V) {
                    if (!isNaN(G)) {
                        var k = i.getItemLayout(V);
                        k.angle = E;
                        var U = 0,
                            $ = 0;
                        E < d ? (U = c + M * (V + 1 / 2) * E, $ = U) : (U = c + M * V * E + C, $ = c + M * (V + 1) * E - C), k.startAngle = U, k.endAngle = $
                    }
                })
            } else _ = L / R, O = c, i.each(a, function(G, V) {
                if (!isNaN(G)) {
                    var k = i.getItemLayout(V),
                        U = k.angle === p ? p : G * _,
                        $ = 0,
                        z = 0;
                    U < d ? ($ = O + M * U / 2, z = $) : ($ = O + C, z = O + M * U - C), k.startAngle = $, k.endAngle = z, O += M * U
                }
            })
    })
}
var fd = Pt();

function IS(e) {
    return {
        seriesType: e,
        reset: function(t, r) {
            var n = r.findComponents({
                mainType: "legend"
            });
            if (!(!n || !n.length)) {
                var i = t.getData();
                i.filterSelf(function(a) {
                    for (var o = i.getName(a), s = 0; s < n.length; s++)
                        if (!n[s].isSelected(o)) return !1;
                    return !0
                })
            }
        }
    }
}
var ES = Math.PI / 180;

function ph(e, t, r, n, i, a, o, s, u, l) {
    if (e.length < 2) return;

    function f(g) {
        for (var p = g.rB, y = p * p, m = 0; m < g.list.length; m++) {
            var _ = g.list[m],
                S = Math.abs(_.label.y - r),
                T = n + _.len,
                w = T * T,
                b = Math.sqrt(Math.abs((1 - S * S / y) * w)),
                M = t + (b + _.len2) * i,
                D = M - _.label.x,
                C = _.targetTextWidth - D * i;
            hd(_, C, !0), _.label.x = M
        }
    }

    function h(g) {
        for (var p = {
                list: [],
                maxY: 0
            }, y = {
                list: [],
                maxY: 0
            }, m = 0; m < g.length; m++)
            if (g[m].labelAlignTo === "none") {
                var _ = g[m],
                    S = _.label.y > r ? y : p,
                    T = Math.abs(_.label.y - r);
                if (T >= S.maxY) {
                    var w = _.label.x - t - _.len2 * i,
                        b = n + _.len,
                        M = Math.abs(w) < b ? Math.sqrt(T * T / (1 - w * w / b / b)) : b;
                    S.rB = M, S.maxY = T
                }
                S.list.push(_)
            }
        f(p), f(y)
    }
    for (var c = e.length, v = 0; v < c; v++)
        if (e[v].position === "outer" && e[v].labelAlignTo === "labelLine") {
            var d = e[v].label.x - l;
            e[v].linePoints[1][0] += d, e[v].label.x = l
        }
    xS(e, u, u + o) && h(e)
}

function OS(e, t, r, n, i, a, o, s) {
    for (var u = [], l = [], f = Number.MAX_VALUE, h = -Number.MAX_VALUE, c = 0; c < e.length; c++) {
        var v = e[c].label;
        es(e[c]) || (v.x < t ? (f = Math.min(f, v.x), u.push(e[c])) : (h = Math.max(h, v.x), l.push(e[c])))
    }
    for (var c = 0; c < e.length; c++) {
        var d = e[c];
        if (!es(d) && d.linePoints) {
            if (d.labelStyleWidth != null) continue;
            var v = d.label,
                g = d.linePoints,
                p = void 0;
            d.labelAlignTo === "edge" ? v.x < t ? p = g[2][0] - d.labelDistance - o - d.edgeDistance : p = o + i - d.edgeDistance - g[2][0] - d.labelDistance : d.labelAlignTo === "labelLine" ? v.x < t ? p = f - o - d.bleedMargin : p = o + i - h - d.bleedMargin : v.x < t ? p = v.x - o - d.bleedMargin : p = o + i - v.x - d.bleedMargin, d.targetTextWidth = p, hd(d, p)
        }
    }
    ph(l, t, r, n, 1, i, a, o, s, h), ph(u, t, r, n, -1, i, a, o, s, f);
    for (var c = 0; c < e.length; c++) {
        var d = e[c];
        if (!es(d) && d.linePoints) {
            var v = d.label,
                g = d.linePoints,
                y = d.labelAlignTo === "edge",
                m = v.style.padding,
                _ = m ? m[1] + m[3] : 0,
                S = v.style.backgroundColor ? 0 : _,
                T = d.rect.width + S,
                w = g[1][0] - g[2][0];
            y ? v.x < t ? g[2][0] = o + d.edgeDistance + T + d.labelDistance : g[2][0] = o + i - d.edgeDistance - T - d.labelDistance : (v.x < t ? g[2][0] = v.x + d.labelDistance : g[2][0] = v.x - d.labelDistance, g[1][0] = g[2][0] + w), g[1][1] = g[2][1] = v.y
        }
    }
}

function hd(e, t, r) {
    if (r === void 0 && (r = !1), e.labelStyleWidth == null) {
        var n = e.label,
            i = n.style,
            a = e.rect,
            o = i.backgroundColor,
            s = i.padding,
            u = s ? s[1] + s[3] : 0,
            l = i.overflow,
            f = a.width + (o ? 0 : u);
        if (t < f || r) {
            var h = a.height;
            if (l && l.match("break")) {
                n.setStyle("backgroundColor", null), n.setStyle("width", t - u);
                var c = n.getBoundingRect();
                n.setStyle("width", Math.ceil(c.width)), n.setStyle("backgroundColor", o)
            } else {
                var v = t - u,
                    d = t < f ? v : r ? v > e.unconstrainedWidth ? null : v : null;
                n.setStyle("width", d)
            }
            var g = n.getBoundingRect();
            a.width = g.width;
            var p = (n.style.margin || 0) + 2.1;
            a.height = g.height + p, a.y -= (a.height - h) / 2
        }
    }
}

function es(e) {
    return e.position === "center"
}

function kS(e) {
    var t = e.getData(),
        r = [],
        n, i, a = !1,
        o = (e.get("minShowLabelAngle") || 0) * ES,
        s = t.getLayout("viewRect"),
        u = t.getLayout("r"),
        l = s.width,
        f = s.x,
        h = s.y,
        c = s.height;

    function v(w) {
        w.ignore = !0
    }

    function d(w) {
        if (!w.ignore) return !0;
        for (var b in w.states)
            if (w.states[b].ignore === !1) return !0;
        return !1
    }
    t.each(function(w) {
        var b = t.getItemGraphicEl(w),
            M = b.shape,
            D = b.getTextContent(),
            C = b.getTextGuideLine(),
            A = t.getItemModel(w),
            x = A.getModel("label"),
            L = x.get("position") || A.get(["emphasis", "label", "position"]),
            R = x.get("distanceToLabelLine"),
            O = x.get("alignTo"),
            E = lt(x.get("edgeDistance"), l),
            G = x.get("bleedMargin"),
            V = A.getModel("labelLine"),
            k = V.get("length");
        k = lt(k, l);
        var U = V.get("length2");
        if (U = lt(U, l), Math.abs(M.endAngle - M.startAngle) < o) {
            P(D.states, v), D.ignore = !0, C && (P(C.states, v), C.ignore = !0);
            return
        }
        if (d(D)) {
            var $ = (M.startAngle + M.endAngle) / 2,
                z = Math.cos($),
                vt = Math.sin($),
                pt, Gt, he, Wt;
            n = M.cx, i = M.cy;
            var Vt = L === "inside" || L === "inner";
            if (L === "center") pt = M.cx, Gt = M.cy, Wt = "center";
            else {
                var yt = (Vt ? (M.r + M.r0) / 2 * z : M.r * z) + n,
                    st = (Vt ? (M.r + M.r0) / 2 * vt : M.r * vt) + i;
                if (pt = yt + z * 3, Gt = st + vt * 3, !Vt) {
                    var N = yt + z * (k + u - M.r),
                        Y = st + vt * (k + u - M.r),
                        ve = N + (z < 0 ? -1 : 1) * U,
                        gt = Y;
                    O === "edge" ? pt = z < 0 ? f + E : f + l - E : pt = ve + (z < 0 ? -R : R), Gt = gt, he = [
                        [yt, st],
                        [N, Y],
                        [ve, gt]
                    ]
                }
                Wt = Vt ? "center" : O === "edge" ? z > 0 ? "right" : "left" : z > 0 ? "left" : "right"
            }
            var ke = Math.PI,
                Ce = 0,
                hn = x.get("rotate");
            if (at(hn)) Ce = hn * (ke / 180);
            else if (L === "center") Ce = 0;
            else if (hn === "radial" || hn === !0) {
                var vd = z < 0 ? -$ + ke : -$;
                Ce = vd
            } else if (hn === "tangential" && L !== "outside" && L !== "outer") {
                var Ir = Math.atan2(z, vt);
                Ir < 0 && (Ir = ke * 2 + Ir);
                var cd = vt > 0;
                cd && (Ir = ke + Ir), Ce = Ir - ke
            }
            if (a = !!Ce, D.x = pt, D.y = Gt, D.rotation = Ce, D.setStyle({
                    verticalAlign: "middle"
                }), Vt) {
                D.setStyle({
                    align: Wt
                });
                var qa = D.states.select;
                qa && (qa.x += D.x, qa.y += D.y)
            } else {
                var vn = D.getBoundingRect().clone();
                vn.applyTransform(D.getComputedTransform());
                var Bu = (D.style.margin || 0) + 2.1;
                vn.y -= Bu / 2, vn.height += Bu, r.push({
                    label: D,
                    labelLine: C,
                    position: L,
                    len: k,
                    len2: U,
                    minTurnAngle: V.get("minTurnAngle"),
                    maxSurfaceAngle: V.get("maxSurfaceAngle"),
                    surfaceNormal: new B(z, vt),
                    linePoints: he,
                    textAlign: Wt,
                    labelDistance: R,
                    labelAlignTo: O,
                    edgeDistance: E,
                    bleedMargin: G,
                    rect: vn,
                    unconstrainedWidth: vn.width,
                    labelStyleWidth: D.style.width
                })
            }
            b.setTextConfig({
                inside: Vt
            })
        }
    }), !a && e.get("avoidLabelOverlap") && OS(r, n, i, u, l, c, f, h);
    for (var g = 0; g < r.length; g++) {
        var p = r[g],
            y = p.label,
            m = p.labelLine,
            _ = isNaN(y.x) || isNaN(y.y);
        if (y) {
            y.setStyle({
                align: p.textAlign
            }), _ && (P(y.states, v), y.ignore = !0);
            var S = y.states.select;
            S && (S.x += y.x, S.y += y.y)
        }
        if (m) {
            var T = p.linePoints;
            _ || !T ? (P(m.states, v), m.ignore = !0) : (od(T, p.minTurnAngle), CS(T, p.surfaceNormal, p.maxSurfaceAngle), m.setShape({
                points: T
            }), y.__hostTarget.textGuideLineConfig = {
                anchor: new B(T[0][0], T[0][1])
            })
        }
    }
}
var FS = function(e) {
        W(t, e);

        function t(r, n, i) {
            var a = e.call(this) || this;
            a.z2 = 2;
            var o = new Rr;
            return a.setTextContent(o), a.updateData(r, n, i, !0), a
        }
        return t.prototype.updateData = function(r, n, i, a) {
            var o = this,
                s = r.hostModel,
                u = r.getItemModel(n),
                l = u.getModel("emphasis"),
                f = r.getItemLayout(n),
                h = I(Vi(u.getModel("itemStyle"), f, !0), f);
            if (isNaN(h.startAngle)) {
                o.setShape(h);
                return
            }
            if (a) {
                o.setShape(h);
                var c = s.getShallow("animationType");
                s.ecModel.ssr ? (Wn(o, {
                    scaleX: 0,
                    scaleY: 0
                }, s, {
                    dataIndex: n,
                    isFrom: !0
                }), o.originX = h.cx, o.originY = h.cy) : c === "scale" ? (o.shape.r = f.r0, Wn(o, {
                    shape: {
                        r: f.r
                    }
                }, s, n)) : i != null ? (o.setShape({
                    startAngle: i,
                    endAngle: i
                }), Wn(o, {
                    shape: {
                        startAngle: f.startAngle,
                        endAngle: f.endAngle
                    }
                }, s, n)) : (o.shape.endAngle = f.startAngle, ei(o, {
                    shape: {
                        endAngle: f.endAngle
                    }
                }, s, n))
            } else py(o), ei(o, {
                shape: h
            }, s, n);
            o.useStyle(r.getItemVisual(n, "style")), N0(o, u);
            var v = (f.startAngle + f.endAngle) / 2,
                d = s.get("selectedOffset"),
                g = Math.cos(v) * d,
                p = Math.sin(v) * d,
                y = u.getShallow("cursor");
            y && o.attr("cursor", y), this._updateLabel(s, r, n), o.ensureState("emphasis").shape = I({
                r: f.r + (l.get("scale") && l.get("scaleSize") || 0)
            }, Vi(l.getModel("itemStyle"), f)), I(o.ensureState("select"), {
                x: g,
                y: p,
                shape: Vi(u.getModel(["select", "itemStyle"]), f)
            }), I(o.ensureState("blur"), {
                shape: Vi(u.getModel(["blur", "itemStyle"]), f)
            });
            var m = o.getTextGuideLine(),
                _ = o.getTextContent();
            m && I(m.ensureState("select"), {
                x: g,
                y: p
            }), I(_.ensureState("select"), {
                x: g,
                y: p
            }), O0(this, l.get("focus"), l.get("blurScope"), l.get("disabled"))
        }, t.prototype._updateLabel = function(r, n, i) {
            var a = this,
                o = n.getItemModel(i),
                s = o.getModel("labelLine"),
                u = n.getItemVisual(i, "style"),
                l = u && u.fill,
                f = u && u.opacity;
            Oy(a, ky(o), {
                labelFetcher: n.hostModel,
                labelDataIndex: i,
                inheritColor: l,
                defaultOpacity: f,
                defaultText: r.getFormattedLabel(i, "normal") || n.getName(i)
            });
            var h = a.getTextContent();
            a.setTextConfig({
                position: null,
                rotation: null
            }), h.attr({
                z2: 10
            });
            var c = r.get(["label", "position"]);
            if (c !== "outside" && c !== "outer") a.removeTextGuideLine();
            else {
                var v = this.getTextGuideLine();
                v || (v = new vi, this.setTextGuideLine(v)), AS(this, RS(o), {
                    stroke: l,
                    opacity: Bn(s.get(["lineStyle", "opacity"]), f, 1)
                })
            }
        }, t
    }(hi),
    NS = function(e) {
        W(t, e);

        function t() {
            var r = e !== null && e.apply(this, arguments) || this;
            return r.ignoreLabelLineUpdate = !0, r
        }
        return t.prototype.render = function(r, n, i, a) {
            var o = r.getData(),
                s = this._data,
                u = this.group,
                l;
            if (!s && o.count() > 0) {
                for (var f = o.getItemLayout(0), h = 1; isNaN(f && f.startAngle) && h < o.count(); ++h) f = o.getItemLayout(h);
                f && (l = f.startAngle)
            }
            if (this._emptyCircleSector && u.remove(this._emptyCircleSector), o.count() === 0 && r.get("showEmptyCircle")) {
                var c = fd(r),
                    v = new hi({
                        shape: I(ld(r, i), c)
                    });
                v.useStyle(r.getModel("emptyCircleStyle").getItemStyle()), this._emptyCircleSector = v, u.add(v)
            }
            o.diff(s).add(function(d) {
                var g = new FS(o, d, l);
                o.setItemGraphicEl(d, g), u.add(g)
            }).update(function(d, g) {
                var p = s.getItemGraphicEl(g);
                p.updateData(o, d, l), p.off("click"), u.add(p), o.setItemGraphicEl(d, p)
            }).remove(function(d) {
                var g = s.getItemGraphicEl(d);
                Ev(g, r, d)
            }).execute(), kS(r), r.get("animationTypeUpdate") !== "expansion" && (this._data = o)
        }, t.prototype.dispose = function() {}, t.prototype.containPoint = function(r, n) {
            var i = n.getData(),
                a = i.getItemLayout(0);
            if (a) {
                var o = r[0] - a.cx,
                    s = r[1] - a.cy,
                    u = Math.sqrt(o * o + s * s);
                return u <= a.r && u >= a.r0
            }
        }, t.type = "pie", t
    }($e);

function BS(e, t, r) {
    t = F(t) && {
        coordDimensions: t
    } || I({
        encodeDefine: e.getEncode()
    }, t);
    var n = e.getSource(),
        i = yS(n, t).dimensions,
        a = new gS(i, e);
    return a.initData(n, r), a
}
var zS = function() {
        function e(t, r) {
            this._getDataWithEncodedVisual = t, this._getRawData = r
        }
        return e.prototype.getAllNames = function() {
            var t = this._getRawData();
            return t.mapArray(t.getName)
        }, e.prototype.containName = function(t) {
            var r = this._getRawData();
            return r.indexOfName(t) >= 0
        }, e.prototype.indexOfName = function(t) {
            var r = this._getDataWithEncodedVisual();
            return r.indexOfName(t)
        }, e.prototype.getItemVisual = function(t, r) {
            var n = this._getDataWithEncodedVisual();
            return n.getItemVisual(t, r)
        }, e
    }(),
    HS = Pt(),
    GS = function(e) {
        W(t, e);

        function t() {
            return e !== null && e.apply(this, arguments) || this
        }
        return t.prototype.init = function(r) {
            e.prototype.init.apply(this, arguments), this.legendVisualProvider = new zS(Ct(this.getData, this), Ct(this.getRawData, this)), this._defaultLabelLine(r)
        }, t.prototype.mergeOption = function() {
            e.prototype.mergeOption.apply(this, arguments)
        }, t.prototype.getInitialData = function() {
            return BS(this, {
                coordDimensions: ["value"],
                encodeDefaulter: si(pm, this)
            })
        }, t.prototype.getDataParams = function(r) {
            var n = this.getData(),
                i = HS(n),
                a = i.seats;
            if (!a) {
                var o = [];
                n.each(n.mapDimension("value"), function(u) {
                    o.push(u)
                }), a = i.seats = rg(o, n.hostModel.get("percentPrecision"))
            }
            var s = e.prototype.getDataParams.call(this, r);
            return s.percent = a[r] || 0, s.$vars.push("percent"), s
        }, t.prototype._defaultLabelLine = function(r) {
            bs(r, "labelLine", ["show"]);
            var n = r.labelLine,
                i = r.emphasis.labelLine;
            n.show = n.show && r.label.show, i.show = i.show && r.emphasis.label.show
        }, t.type = "series.pie", t.defaultOption = {
            z: 2,
            legendHoverLink: !0,
            colorBy: "data",
            center: ["50%", "50%"],
            radius: [0, "75%"],
            clockwise: !0,
            startAngle: 90,
            endAngle: "auto",
            padAngle: 0,
            minAngle: 0,
            minShowLabelAngle: 0,
            selectedOffset: 10,
            percentPrecision: 2,
            stillShowZeroSum: !0,
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            width: null,
            height: null,
            label: {
                rotate: 0,
                show: !0,
                overflow: "truncate",
                position: "outer",
                alignTo: "none",
                edgeDistance: "25%",
                bleedMargin: 10,
                distanceToLabelLine: 5
            },
            labelLine: {
                show: !0,
                length: 15,
                length2: 15,
                smooth: !1,
                minTurnAngle: 90,
                maxSurfaceAngle: 90,
                lineStyle: {
                    width: 1,
                    type: "solid"
                }
            },
            itemStyle: {
                borderWidth: 1,
                borderJoin: "round"
            },
            showEmptyCircle: !0,
            emptyCircleStyle: {
                color: "lightgray",
                opacity: 1
            },
            labelLayout: {
                hideOverlap: !0
            },
            emphasis: {
                scale: !0,
                scaleSize: 5
            },
            avoidLabelOverlap: !0,
            animationType: "expansion",
            animationDuration: 1e3,
            animationTypeUpdate: "transition",
            animationEasingUpdate: "cubicInOut",
            animationDurationUpdate: 500,
            animationEasing: "cubicInOut"
        }, t
    }(Qe);

function VS(e) {
    return {
        seriesType: e,
        reset: function(t, r) {
            var n = t.getData();
            n.filterSelf(function(i) {
                var a = n.mapDimension("value"),
                    o = n.get(a, i);
                return !(at(o) && !isNaN(o) && o < 0)
            })
        }
    }
}

function xT(e) {
    e.registerChartView(NS), e.registerSeriesModel(GS), e1("pie", e.registerAction), e.registerLayout(si(LS, "pie")), e.registerProcessor(IS("pie")), e.registerProcessor(VS("pie"))
}
export {
    bu as $, Wv as A, Uw as B, ac as C, Ww as D, im as E, Xw as F, jy as G, tm as H, em as I, Vw as J, at as K, un as L, nm as M, Yw as N, rm as O, ie as P, jw as Q, tT as R, ou as S, Jw as T, Qw as U, Kw as V, Zw as W, qw as X, Mu as Y, Du as Z, W as _, hS as a, al as a$, ga as a0, Tu as a1, qn as a2, qv as a3, $w as a4, Dw as a5, nn as a6, Rd as a7, nt as a8, fr as a9, Hw as aA, ow as aB, xr as aC, aw as aD, Ec as aE, hv as aF, Ut as aG, ly as aH, Bh as aI, zp as aJ, I as aK, gw as aL, pw as aM, Ar as aN, il as aO, et as aP, fa as aQ, dw as aR, Cr as aS, lw as aT, au as aU, uw as aV, d0 as aW, c0 as aX, yd as aY, Tp as aZ, bp as a_, Dh as aa, Wi as ab, ru as ac, jr as ad, qr as ae, $r as af, Hp as ag, Pt as ah, Sw as ai, tg as aj, iu as ak, We as al, Nt as am, PT as an, AT as ao, xS as ap, RT as aq, AS as ar, RS as as, CT as at, Xn as au, _u as av, q as aw, Wn as ax, ft as ay, ei as az, uc as b, it as b$, Sp as b0, Te as b1, av as b2, tt as b3, sw as b4, cw as b5, vw as b6, mw as b7, fw as b8, hw as b9, TT as bA, Oy as bB, O0 as bC, Iv as bD, wT as bE, zv as bF, Eh as bG, _t as bH, we as bI, hi as bJ, Ct as bK, um as bL, N0 as bM, Ia as bN, $e as bO, Ow as bP, Rr as bQ, mg as bR, fy as bS, be as bT, rw as bU, Gw as bV, Yh as bW, Ev as bX, Vi as bY, zw as bZ, Mc as b_, bT as ba, yw as bb, Qt as bc, $S as bd, Tr as be, Ee as bf, vl as bg, oi as bh, js as bi, Hf as bj, WS as bk, Yf as bl, Xs as bm, P1 as bn, fs as bo, K as bp, ct as bq, _h as br, sn as bs, d1 as bt, Qe as bu, _a as bv, Ps as bw, As as bx, py as by, ky as bz, Z as c, aS as c$, Ie as c0, ya as c1, Kv as c2, ma as c3, qS as c4, Zv as c5, Tw as c6, jl as c7, Ey as c8, Ha as c9, xe as cA, ep as cB, Xu as cC, tn as cD, Ua as cE, fi as cF, M0 as cG, th as cH, kw as cI, y0 as cJ, pm as cK, Mh as cL, ZS as cM, US as cN, bs as cO, Ze as cP, Ni as cQ, e1 as cR, Ew as cS, Ed as cT, Fa as cU, gu as cV, ue as cW, fT as cX, St as cY, oT as cZ, aT as c_, wy as ca, xt as cb, tp as cc, bw as cd, ni as ce, Py as cf, iS as cg, YS as ch, pu as ci, vi as cj, Bw as ck, zS as cl, BS as cm, w_ as cn, Hs as co, za as cp, du as cq, Sy as cr, IS as cs, fn as ct, jS as cu, Qd as cv, Pr as cw, W0 as cx, cu as cy, hy as cz, De as d, sg as d$, nT as d0, Ls as d1, bv as d2, k0 as d3, ti as d4, Sh as d5, se as d6, li as d7, ew as d8, iw as d9, Ay as dA, Iw as dB, Cw as dC, Ht as dD, Et as dE, by as dF, tw as dG, os as dH, tl as dI, Nr as dJ, Xg as dK, ag as dL, ha as dM, rl as dN, dy as dO, Jn as dP, $i as dQ, Bt as dR, tf as dS, By as dT, mu as dU, _y as dV, xy as dW, $v as dX, sT as dY, rT as dZ, Qy as d_, nw as da, ww as db, Bn as dc, Od as dd, Bd as de, $a as df, on as dg, kd as dh, Fd as di, QS as dj, KS as dk, sa as dl, Dt as dm, Jr as dn, T_ as dp, lv as dq, g0 as dr, B as ds, Ke as dt, mT as du, _T as dv, Nv as dw, _w as dx, My as dy, Dy as dz, P as e, fm as e0, lm as e1, xw as e2, iT as e3, is as e4, Zd as e5, yo as e6, lT as e7, Aw as e8, eT as e9, Qm as eA, fe as eB, h_ as eC, dT as eD, Le as eE, oa as eF, Fw as eG, Za as eH, D_ as eI, Nw as eJ, xT as eK, DT as eL, te as ea, JS as eb, gT as ec, Lw as ed, yT as ee, hT as ef, pT as eg, om as eh, ev as ei, Ea as ej, j_ as ek, ST as el, Ly as em, qm as en, I0 as eo, na as ep, C0 as eq, mv as er, t1 as es, tv as et, Ws as eu, Rw as ev, Pw as ew, vT as ex, cT as ey, XS as ez, rt as f, si as g, gS as h, X as i, Q as j, MT as k, F as l, uT as m, La as n, uu as o, yS as p, H as q, Kr as r, Mw as s, Ts as t, $h as u, am as v, x_ as w, lt as x, ht as y, dt as z
};