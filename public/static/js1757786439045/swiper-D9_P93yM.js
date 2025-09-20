function Z(e) {
    return e !== null && typeof e == "object" && "constructor" in e && e.constructor === Object
}

function Y(e = {}, t = {}) {
    Object.keys(t).forEach(s => {
        typeof e[s] > "u" ? e[s] = t[s] : Z(t[s]) && Z(e[s]) && Object.keys(t[s]).length > 0 && Y(e[s], t[s])
    })
}
const ae = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: {
        blur() {},
        nodeName: ""
    },
    querySelector() {
        return null
    },
    querySelectorAll() {
        return []
    },
    getElementById() {
        return null
    },
    createEvent() {
        return {
            initEvent() {}
        }
    },
    createElement() {
        return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute() {},
            getElementsByTagName() {
                return []
            }
        }
    },
    createElementNS() {
        return {}
    },
    importNode() {
        return null
    },
    location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
    }
};

function L() {
    const e = typeof document < "u" ? document : {};
    return Y(e, ae), e
}
const ge = {
    document: ae,
    navigator: {
        userAgent: ""
    },
    location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
    },
    history: {
        replaceState() {},
        pushState() {},
        go() {},
        back() {}
    },
    CustomEvent: function() {
        return this
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle() {
        return {
            getPropertyValue() {
                return ""
            }
        }
    },
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia() {
        return {}
    },
    requestAnimationFrame(e) {
        return typeof setTimeout > "u" ? (e(), null) : setTimeout(e, 0)
    },
    cancelAnimationFrame(e) {
        typeof setTimeout > "u" || clearTimeout(e)
    }
};

function P() {
    const e = typeof window < "u" ? window : {};
    return Y(e, ge), e
}

function ve(e) {
    const t = e.__proto__;
    Object.defineProperty(e, "__proto__", {
        get() {
            return t
        },
        set(s) {
            t.__proto__ = s
        }
    })
}
class D extends Array {
    constructor(t) {
        typeof t == "number" ? super(t) : (super(...t || []), ve(this))
    }
}

function B(e = []) {
    const t = [];
    return e.forEach(s => {
        Array.isArray(s) ? t.push(...B(s)) : t.push(s)
    }), t
}

function re(e, t) {
    return Array.prototype.filter.call(e, t)
}

function be(e) {
    const t = [];
    for (let s = 0; s < e.length; s += 1) t.indexOf(e[s]) === -1 && t.push(e[s]);
    return t
}

function Ce(e, t) {
    if (typeof e != "string") return [e];
    const s = [],
        i = t.querySelectorAll(e);
    for (let n = 0; n < i.length; n += 1) s.push(i[n]);
    return s
}

function v(e, t) {
    const s = P(),
        i = L();
    let n = [];
    if (!t && e instanceof D) return e;
    if (!e) return new D(n);
    if (typeof e == "string") {
        const a = e.trim();
        if (a.indexOf("<") >= 0 && a.indexOf(">") >= 0) {
            let l = "div";
            a.indexOf("<li") === 0 && (l = "ul"), a.indexOf("<tr") === 0 && (l = "tbody"), (a.indexOf("<td") === 0 || a.indexOf("<th") === 0) && (l = "tr"), a.indexOf("<tbody") === 0 && (l = "table"), a.indexOf("<option") === 0 && (l = "select");
            const d = i.createElement(l);
            d.innerHTML = a;
            for (let r = 0; r < d.childNodes.length; r += 1) n.push(d.childNodes[r])
        } else n = Ce(e.trim(), t || i)
    } else if (e.nodeType || e === s || e === i) n.push(e);
    else if (Array.isArray(e)) {
        if (e instanceof D) return e;
        n = e
    }
    return new D(be(n))
}
v.fn = D.prototype;

function Se(...e) {
    const t = B(e.map(s => s.split(" ")));
    return this.forEach(s => {
        s.classList.add(...t)
    }), this
}

function ye(...e) {
    const t = B(e.map(s => s.split(" ")));
    return this.forEach(s => {
        s.classList.remove(...t)
    }), this
}

function Te(...e) {
    const t = B(e.map(s => s.split(" ")));
    this.forEach(s => {
        t.forEach(i => {
            s.classList.toggle(i)
        })
    })
}

function Ee(...e) {
    const t = B(e.map(s => s.split(" ")));
    return re(this, s => t.filter(i => s.classList.contains(i)).length > 0).length > 0
}

function xe(e, t) {
    if (arguments.length === 1 && typeof e == "string") return this[0] ? this[0].getAttribute(e) : void 0;
    for (let s = 0; s < this.length; s += 1)
        if (arguments.length === 2) this[s].setAttribute(e, t);
        else
            for (const i in e) this[s][i] = e[i], this[s].setAttribute(i, e[i]);
    return this
}

function we(e) {
    for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
    return this
}

function $e(e) {
    for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
    return this
}

function Me(e) {
    for (let t = 0; t < this.length; t += 1) this[t].style.transitionDuration = typeof e != "string" ? `${e}ms` : e;
    return this
}

function Pe(...e) {
    let [t, s, i, n] = e;
    typeof e[1] == "function" && ([t, i, n] = e, s = void 0), n || (n = !1);

    function a(o) {
        const c = o.target;
        if (!c) return;
        const h = o.target.dom7EventData || [];
        if (h.indexOf(o) < 0 && h.unshift(o), v(c).is(s)) i.apply(c, h);
        else {
            const p = v(c).parents();
            for (let m = 0; m < p.length; m += 1) v(p[m]).is(s) && i.apply(p[m], h)
        }
    }

    function l(o) {
        const c = o && o.target ? o.target.dom7EventData || [] : [];
        c.indexOf(o) < 0 && c.unshift(o), i.apply(this, c)
    }
    const d = t.split(" ");
    let r;
    for (let o = 0; o < this.length; o += 1) {
        const c = this[o];
        if (s)
            for (r = 0; r < d.length; r += 1) {
                const h = d[r];
                c.dom7LiveListeners || (c.dom7LiveListeners = {}), c.dom7LiveListeners[h] || (c.dom7LiveListeners[h] = []), c.dom7LiveListeners[h].push({
                    listener: i,
                    proxyListener: a
                }), c.addEventListener(h, a, n)
            } else
                for (r = 0; r < d.length; r += 1) {
                    const h = d[r];
                    c.dom7Listeners || (c.dom7Listeners = {}), c.dom7Listeners[h] || (c.dom7Listeners[h] = []), c.dom7Listeners[h].push({
                        listener: i,
                        proxyListener: l
                    }), c.addEventListener(h, l, n)
                }
    }
    return this
}

function Le(...e) {
    let [t, s, i, n] = e;
    typeof e[1] == "function" && ([t, i, n] = e, s = void 0), n || (n = !1);
    const a = t.split(" ");
    for (let l = 0; l < a.length; l += 1) {
        const d = a[l];
        for (let r = 0; r < this.length; r += 1) {
            const o = this[r];
            let c;
            if (!s && o.dom7Listeners ? c = o.dom7Listeners[d] : s && o.dom7LiveListeners && (c = o.dom7LiveListeners[d]), c && c.length)
                for (let h = c.length - 1; h >= 0; h -= 1) {
                    const p = c[h];
                    i && p.listener === i || i && p.listener && p.listener.dom7proxy && p.listener.dom7proxy === i ? (o.removeEventListener(d, p.proxyListener, n), c.splice(h, 1)) : i || (o.removeEventListener(d, p.proxyListener, n), c.splice(h, 1))
                }
        }
    }
    return this
}

function ke(...e) {
    const t = P(),
        s = e[0].split(" "),
        i = e[1];
    for (let n = 0; n < s.length; n += 1) {
        const a = s[n];
        for (let l = 0; l < this.length; l += 1) {
            const d = this[l];
            if (t.CustomEvent) {
                const r = new t.CustomEvent(a, {
                    detail: i,
                    bubbles: !0,
                    cancelable: !0
                });
                d.dom7EventData = e.filter((o, c) => c > 0), d.dispatchEvent(r), d.dom7EventData = [], delete d.dom7EventData
            }
        }
    }
    return this
}

function Oe(e) {
    const t = this;

    function s(i) {
        i.target === this && (e.call(this, i), t.off("transitionend", s))
    }
    return e && t.on("transitionend", s), this
}

function Ie(e) {
    if (this.length > 0) {
        if (e) {
            const t = this.styles();
            return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
        }
        return this[0].offsetWidth
    }
    return null
}

function ze(e) {
    if (this.length > 0) {
        if (e) {
            const t = this.styles();
            return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
        }
        return this[0].offsetHeight
    }
    return null
}

function Ae() {
    if (this.length > 0) {
        const e = P(),
            t = L(),
            s = this[0],
            i = s.getBoundingClientRect(),
            n = t.body,
            a = s.clientTop || n.clientTop || 0,
            l = s.clientLeft || n.clientLeft || 0,
            d = s === e ? e.scrollY : s.scrollTop,
            r = s === e ? e.scrollX : s.scrollLeft;
        return {
            top: i.top + d - a,
            left: i.left + r - l
        }
    }
    return null
}

function De() {
    const e = P();
    return this[0] ? e.getComputedStyle(this[0], null) : {}
}

function Ge(e, t) {
    const s = P();
    let i;
    if (arguments.length === 1)
        if (typeof e == "string") {
            if (this[0]) return s.getComputedStyle(this[0], null).getPropertyValue(e)
        } else {
            for (i = 0; i < this.length; i += 1)
                for (const n in e) this[i].style[n] = e[n];
            return this
        }
    if (arguments.length === 2 && typeof e == "string") {
        for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
        return this
    }
    return this
}

function Ne(e) {
    return e ? (this.forEach((t, s) => {
        e.apply(t, [t, s])
    }), this) : this
}

function Be(e) {
    const t = re(this, e);
    return v(t)
}

function He(e) {
    if (typeof e > "u") return this[0] ? this[0].innerHTML : null;
    for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
    return this
}

function _e(e) {
    if (typeof e > "u") return this[0] ? this[0].textContent.trim() : null;
    for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
    return this
}

function Fe(e) {
    const t = P(),
        s = L(),
        i = this[0];
    let n, a;
    if (!i || typeof e > "u") return !1;
    if (typeof e == "string") {
        if (i.matches) return i.matches(e);
        if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
        if (i.msMatchesSelector) return i.msMatchesSelector(e);
        for (n = v(e), a = 0; a < n.length; a += 1)
            if (n[a] === i) return !0;
        return !1
    }
    if (e === s) return i === s;
    if (e === t) return i === t;
    if (e.nodeType || e instanceof D) {
        for (n = e.nodeType ? [e] : e, a = 0; a < n.length; a += 1)
            if (n[a] === i) return !0;
        return !1
    }
    return !1
}

function Ve() {
    let e = this[0],
        t;
    if (e) {
        for (t = 0;
            (e = e.previousSibling) !== null;) e.nodeType === 1 && (t += 1);
        return t
    }
}

function je(e) {
    if (typeof e > "u") return this;
    const t = this.length;
    if (e > t - 1) return v([]);
    if (e < 0) {
        const s = t + e;
        return s < 0 ? v([]) : v([this[s]])
    }
    return v([this[e]])
}

function We(...e) {
    let t;
    const s = L();
    for (let i = 0; i < e.length; i += 1) {
        t = e[i];
        for (let n = 0; n < this.length; n += 1)
            if (typeof t == "string") {
                const a = s.createElement("div");
                for (a.innerHTML = t; a.firstChild;) this[n].appendChild(a.firstChild)
            } else if (t instanceof D)
            for (let a = 0; a < t.length; a += 1) this[n].appendChild(t[a]);
        else this[n].appendChild(t)
    }
    return this
}

function Re(e) {
    const t = L();
    let s, i;
    for (s = 0; s < this.length; s += 1)
        if (typeof e == "string") {
            const n = t.createElement("div");
            for (n.innerHTML = e, i = n.childNodes.length - 1; i >= 0; i -= 1) this[s].insertBefore(n.childNodes[i], this[s].childNodes[0])
        } else if (e instanceof D)
        for (i = 0; i < e.length; i += 1) this[s].insertBefore(e[i], this[s].childNodes[0]);
    else this[s].insertBefore(e, this[s].childNodes[0]);
    return this
}

function qe(e) {
    return this.length > 0 ? e ? this[0].nextElementSibling && v(this[0].nextElementSibling).is(e) ? v([this[0].nextElementSibling]) : v([]) : this[0].nextElementSibling ? v([this[0].nextElementSibling]) : v([]) : v([])
}

function Xe(e) {
    const t = [];
    let s = this[0];
    if (!s) return v([]);
    for (; s.nextElementSibling;) {
        const i = s.nextElementSibling;
        e ? v(i).is(e) && t.push(i) : t.push(i), s = i
    }
    return v(t)
}

function Ye(e) {
    if (this.length > 0) {
        const t = this[0];
        return e ? t.previousElementSibling && v(t.previousElementSibling).is(e) ? v([t.previousElementSibling]) : v([]) : t.previousElementSibling ? v([t.previousElementSibling]) : v([])
    }
    return v([])
}

function Ue(e) {
    const t = [];
    let s = this[0];
    if (!s) return v([]);
    for (; s.previousElementSibling;) {
        const i = s.previousElementSibling;
        e ? v(i).is(e) && t.push(i) : t.push(i), s = i
    }
    return v(t)
}

function Ke(e) {
    const t = [];
    for (let s = 0; s < this.length; s += 1) this[s].parentNode !== null && (e ? v(this[s].parentNode).is(e) && t.push(this[s].parentNode) : t.push(this[s].parentNode));
    return v(t)
}

function Je(e) {
    const t = [];
    for (let s = 0; s < this.length; s += 1) {
        let i = this[s].parentNode;
        for (; i;) e ? v(i).is(e) && t.push(i) : t.push(i), i = i.parentNode
    }
    return v(t)
}

function Qe(e) {
    let t = this;
    return typeof e > "u" ? v([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
}

function Ze(e) {
    const t = [];
    for (let s = 0; s < this.length; s += 1) {
        const i = this[s].querySelectorAll(e);
        for (let n = 0; n < i.length; n += 1) t.push(i[n])
    }
    return v(t)
}

function et(e) {
    const t = [];
    for (let s = 0; s < this.length; s += 1) {
        const i = this[s].children;
        for (let n = 0; n < i.length; n += 1)(!e || v(i[n]).is(e)) && t.push(i[n])
    }
    return v(t)
}

function tt() {
    for (let e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
    return this
}
const ee = {
    addClass: Se,
    removeClass: ye,
    hasClass: Ee,
    toggleClass: Te,
    attr: xe,
    removeAttr: we,
    transform: $e,
    transition: Me,
    on: Pe,
    off: Le,
    trigger: ke,
    transitionEnd: Oe,
    outerWidth: Ie,
    outerHeight: ze,
    styles: De,
    offset: Ae,
    css: Ge,
    each: Ne,
    html: He,
    text: _e,
    is: Fe,
    index: Ve,
    eq: je,
    append: We,
    prepend: Re,
    next: qe,
    nextAll: Xe,
    prev: Ye,
    prevAll: Ue,
    parent: Ke,
    parents: Je,
    closest: Qe,
    find: Ze,
    children: et,
    filter: Be,
    remove: tt
};
Object.keys(ee).forEach(e => {
    Object.defineProperty(v.fn, e, {
        value: ee[e],
        writable: !0
    })
});

function st(e) {
    const t = e;
    Object.keys(t).forEach(s => {
        try {
            t[s] = null
        } catch {}
        try {
            delete t[s]
        } catch {}
    })
}

function F(e, t = 0) {
    return setTimeout(e, t)
}

function N() {
    return Date.now()
}

function it(e) {
    const t = P();
    let s;
    return t.getComputedStyle && (s = t.getComputedStyle(e, null)), !s && e.currentStyle && (s = e.currentStyle), s || (s = e.style), s
}

function nt(e, t = "x") {
    const s = P();
    let i, n, a;
    const l = it(e);
    return s.WebKitCSSMatrix ? (n = l.transform || l.webkitTransform, n.split(",").length > 6 && (n = n.split(", ").map(d => d.replace(",", ".")).join(", ")), a = new s.WebKitCSSMatrix(n === "none" ? "" : n)) : (a = l.MozTransform || l.OTransform || l.MsTransform || l.msTransform || l.transform || l.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), i = a.toString().split(",")), t === "x" && (s.WebKitCSSMatrix ? n = a.m41 : i.length === 16 ? n = parseFloat(i[12]) : n = parseFloat(i[4])), t === "y" && (s.WebKitCSSMatrix ? n = a.m42 : i.length === 16 ? n = parseFloat(i[13]) : n = parseFloat(i[5])), n || 0
}

function H(e) {
    return typeof e == "object" && e !== null && e.constructor && Object.prototype.toString.call(e).slice(8, -1) === "Object"
}

function at(e) {
    return typeof window < "u" && typeof window.HTMLElement < "u" ? e instanceof HTMLElement : e && (e.nodeType === 1 || e.nodeType === 11)
}

function I(...e) {
    const t = Object(e[0]),
        s = ["__proto__", "constructor", "prototype"];
    for (let i = 1; i < e.length; i += 1) {
        const n = e[i];
        if (n != null && !at(n)) {
            const a = Object.keys(Object(n)).filter(l => s.indexOf(l) < 0);
            for (let l = 0, d = a.length; l < d; l += 1) {
                const r = a[l],
                    o = Object.getOwnPropertyDescriptor(n, r);
                o !== void 0 && o.enumerable && (H(t[r]) && H(n[r]) ? n[r].__swiper__ ? t[r] = n[r] : I(t[r], n[r]) : !H(t[r]) && H(n[r]) ? (t[r] = {}, n[r].__swiper__ ? t[r] = n[r] : I(t[r], n[r])) : t[r] = n[r])
            }
        }
    }
    return t
}

function _(e, t, s) {
    e.style.setProperty(t, s)
}

function le({
    swiper: e,
    targetPosition: t,
    side: s
}) {
    const i = P(),
        n = -e.translate;
    let a = null,
        l;
    const d = e.params.speed;
    e.wrapperEl.style.scrollSnapType = "none", i.cancelAnimationFrame(e.cssModeFrameID);
    const r = t > n ? "next" : "prev",
        o = (h, p) => r === "next" && h >= p || r === "prev" && h <= p,
        c = () => {
            l = new Date().getTime(), a === null && (a = l);
            const h = Math.max(Math.min((l - a) / d, 1), 0),
                p = .5 - Math.cos(h * Math.PI) / 2;
            let m = n + p * (t - n);
            if (o(m, t) && (m = t), e.wrapperEl.scrollTo({
                    [s]: m
                }), o(m, t)) {
                e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
                    e.wrapperEl.style.overflow = "", e.wrapperEl.scrollTo({
                        [s]: m
                    })
                }), i.cancelAnimationFrame(e.cssModeFrameID);
                return
            }
            e.cssModeFrameID = i.requestAnimationFrame(c)
        };
    c()
}
let j;

function rt() {
    const e = P(),
        t = L();
    return {
        smoothScroll: t.documentElement && "scrollBehavior" in t.documentElement.style,
        touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch),
        passiveListener: function() {
            let i = !1;
            try {
                const n = Object.defineProperty({}, "passive", {
                    get() {
                        i = !0
                    }
                });
                e.addEventListener("testPassiveListener", null, n)
            } catch {}
            return i
        }(),
        gestures: function() {
            return "ongesturestart" in e
        }()
    }
}

function oe() {
    return j || (j = rt()), j
}
let W;

function lt({
    userAgent: e
} = {}) {
    const t = oe(),
        s = P(),
        i = s.navigator.platform,
        n = e || s.navigator.userAgent,
        a = {
            ios: !1,
            android: !1
        },
        l = s.screen.width,
        d = s.screen.height,
        r = n.match(/(Android);?[\s\/]+([\d.]+)?/);
    let o = n.match(/(iPad).*OS\s([\d_]+)/);
    const c = n.match(/(iPod)(.*OS\s([\d_]+))?/),
        h = !o && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
        p = i === "Win32";
    let m = i === "MacIntel";
    const g = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
    return !o && m && t.touch && g.indexOf(`${l}x${d}`) >= 0 && (o = n.match(/(Version)\/([\d.]+)/), o || (o = [0, 1, "13_0_0"]), m = !1), r && !p && (a.os = "android", a.android = !0), (o || h || c) && (a.os = "ios", a.ios = !0), a
}

function ot(e = {}) {
    return W || (W = lt(e)), W
}
let R;

function dt() {
    const e = P();

    function t() {
        const s = e.navigator.userAgent.toLowerCase();
        return s.indexOf("safari") >= 0 && s.indexOf("chrome") < 0 && s.indexOf("android") < 0
    }
    return {
        isSafari: t(),
        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
    }
}

function ct() {
    return R || (R = dt()), R
}

function ut({
    swiper: e,
    on: t,
    emit: s
}) {
    const i = P();
    let n = null,
        a = null;
    const l = () => {
            !e || e.destroyed || !e.initialized || (s("beforeResize"), s("resize"))
        },
        d = () => {
            !e || e.destroyed || !e.initialized || (n = new ResizeObserver(c => {
                a = i.requestAnimationFrame(() => {
                    const {
                        width: h,
                        height: p
                    } = e;
                    let m = h,
                        g = p;
                    c.forEach(({
                        contentBoxSize: u,
                        contentRect: f,
                        target: b
                    }) => {
                        b && b !== e.el || (m = f ? f.width : (u[0] || u).inlineSize, g = f ? f.height : (u[0] || u).blockSize)
                    }), (m !== h || g !== p) && l()
                })
            }), n.observe(e.el))
        },
        r = () => {
            a && i.cancelAnimationFrame(a), n && n.unobserve && e.el && (n.unobserve(e.el), n = null)
        },
        o = () => {
            !e || e.destroyed || !e.initialized || s("orientationchange")
        };
    t("init", () => {
        if (e.params.resizeObserver && typeof i.ResizeObserver < "u") {
            d();
            return
        }
        i.addEventListener("resize", l), i.addEventListener("orientationchange", o)
    }), t("destroy", () => {
        r(), i.removeEventListener("resize", l), i.removeEventListener("orientationchange", o)
    })
}

function ft({
    swiper: e,
    extendParams: t,
    on: s,
    emit: i
}) {
    const n = [],
        a = P(),
        l = (o, c = {}) => {
            const h = a.MutationObserver || a.WebkitMutationObserver,
                p = new h(m => {
                    if (m.length === 1) {
                        i("observerUpdate", m[0]);
                        return
                    }
                    const g = function() {
                        i("observerUpdate", m[0])
                    };
                    a.requestAnimationFrame ? a.requestAnimationFrame(g) : a.setTimeout(g, 0)
                });
            p.observe(o, {
                attributes: typeof c.attributes > "u" ? !0 : c.attributes,
                childList: typeof c.childList > "u" ? !0 : c.childList,
                characterData: typeof c.characterData > "u" ? !0 : c.characterData
            }), n.push(p)
        },
        d = () => {
            if (e.params.observer) {
                if (e.params.observeParents) {
                    const o = e.$el.parents();
                    for (let c = 0; c < o.length; c += 1) l(o[c])
                }
                l(e.$el[0], {
                    childList: e.params.observeSlideChildren
                }), l(e.$wrapperEl[0], {
                    attributes: !1
                })
            }
        },
        r = () => {
            n.forEach(o => {
                o.disconnect()
            }), n.splice(0, n.length)
        };
    t({
        observer: !1,
        observeParents: !1,
        observeSlideChildren: !1
    }), s("init", d), s("destroy", r)
}
const pt = {
    on(e, t, s) {
        const i = this;
        if (!i.eventsListeners || i.destroyed || typeof t != "function") return i;
        const n = s ? "unshift" : "push";
        return e.split(" ").forEach(a => {
            i.eventsListeners[a] || (i.eventsListeners[a] = []), i.eventsListeners[a][n](t)
        }), i
    },
    once(e, t, s) {
        const i = this;
        if (!i.eventsListeners || i.destroyed || typeof t != "function") return i;

        function n(...a) {
            i.off(e, n), n.__emitterProxy && delete n.__emitterProxy, t.apply(i, a)
        }
        return n.__emitterProxy = t, i.on(e, n, s)
    },
    onAny(e, t) {
        const s = this;
        if (!s.eventsListeners || s.destroyed || typeof e != "function") return s;
        const i = t ? "unshift" : "push";
        return s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[i](e), s
    },
    offAny(e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed || !t.eventsAnyListeners) return t;
        const s = t.eventsAnyListeners.indexOf(e);
        return s >= 0 && t.eventsAnyListeners.splice(s, 1), t
    },
    off(e, t) {
        const s = this;
        return !s.eventsListeners || s.destroyed || !s.eventsListeners || e.split(" ").forEach(i => {
            typeof t > "u" ? s.eventsListeners[i] = [] : s.eventsListeners[i] && s.eventsListeners[i].forEach((n, a) => {
                (n === t || n.__emitterProxy && n.__emitterProxy === t) && s.eventsListeners[i].splice(a, 1)
            })
        }), s
    },
    emit(...e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed || !t.eventsListeners) return t;
        let s, i, n;
        return typeof e[0] == "string" || Array.isArray(e[0]) ? (s = e[0], i = e.slice(1, e.length), n = t) : (s = e[0].events, i = e[0].data, n = e[0].context || t), i.unshift(n), (Array.isArray(s) ? s : s.split(" ")).forEach(l => {
            t.eventsAnyListeners && t.eventsAnyListeners.length && t.eventsAnyListeners.forEach(d => {
                d.apply(n, [l, ...i])
            }), t.eventsListeners && t.eventsListeners[l] && t.eventsListeners[l].forEach(d => {
                d.apply(n, i)
            })
        }), t
    }
};

function ht() {
    const e = this;
    let t, s;
    const i = e.$el;
    typeof e.params.width < "u" && e.params.width !== null ? t = e.params.width : t = i[0].clientWidth, typeof e.params.height < "u" && e.params.height !== null ? s = e.params.height : s = i[0].clientHeight, !(t === 0 && e.isHorizontal() || s === 0 && e.isVertical()) && (t = t - parseInt(i.css("padding-left") || 0, 10) - parseInt(i.css("padding-right") || 0, 10), s = s - parseInt(i.css("padding-top") || 0, 10) - parseInt(i.css("padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(s) && (s = 0), Object.assign(e, {
        width: t,
        height: s,
        size: e.isHorizontal() ? t : s
    }))
}

function mt() {
    const e = this;

    function t(y) {
        return e.isHorizontal() ? y : {
            width: "height",
            "margin-top": "margin-left",
            "margin-bottom ": "margin-right",
            "margin-left": "margin-top",
            "margin-right": "margin-bottom",
            "padding-left": "padding-top",
            "padding-right": "padding-bottom",
            marginRight: "marginBottom"
        }[y]
    }

    function s(y, T) {
        return parseFloat(y.getPropertyValue(t(T)) || 0)
    }
    const i = e.params,
        {
            $wrapperEl: n,
            size: a,
            rtlTranslate: l,
            wrongRTL: d
        } = e,
        r = e.virtual && i.virtual.enabled,
        o = r ? e.virtual.slides.length : e.slides.length,
        c = n.children(`.${e.params.slideClass}`),
        h = r ? e.virtual.slides.length : c.length;
    let p = [];
    const m = [],
        g = [];
    let u = i.slidesOffsetBefore;
    typeof u == "function" && (u = i.slidesOffsetBefore.call(e));
    let f = i.slidesOffsetAfter;
    typeof f == "function" && (f = i.slidesOffsetAfter.call(e));
    const b = e.snapGrid.length,
        C = e.slidesGrid.length;
    let S = i.spaceBetween,
        E = -u,
        x = 0,
        M = 0;
    if (typeof a > "u") return;
    typeof S == "string" && S.indexOf("%") >= 0 && (S = parseFloat(S.replace("%", "")) / 100 * a), e.virtualSize = -S, l ? c.css({
        marginLeft: "",
        marginBottom: "",
        marginTop: ""
    }) : c.css({
        marginRight: "",
        marginBottom: "",
        marginTop: ""
    }), i.centeredSlides && i.cssMode && (_(e.wrapperEl, "--swiper-centered-offset-before", ""), _(e.wrapperEl, "--swiper-centered-offset-after", ""));
    const O = i.grid && i.grid.rows > 1 && e.grid;
    O && e.grid.initSlides(h);
    let $;
    const A = i.slidesPerView === "auto" && i.breakpoints && Object.keys(i.breakpoints).filter(y => typeof i.breakpoints[y].slidesPerView < "u").length > 0;
    for (let y = 0; y < h; y += 1) {
        $ = 0;
        const T = c.eq(y);
        if (O && e.grid.updateSlide(y, T, h, t), T.css("display") !== "none") {
            if (i.slidesPerView === "auto") {
                A && (c[y].style[t("width")] = "");
                const w = getComputedStyle(T[0]),
                    k = T[0].style.transform,
                    V = T[0].style.webkitTransform;
                if (k && (T[0].style.transform = "none"), V && (T[0].style.webkitTransform = "none"), i.roundLengths) $ = e.isHorizontal() ? T.outerWidth(!0) : T.outerHeight(!0);
                else {
                    const U = s(w, "width"),
                        fe = s(w, "padding-left"),
                        pe = s(w, "padding-right"),
                        K = s(w, "margin-left"),
                        J = s(w, "margin-right"),
                        Q = w.getPropertyValue("box-sizing");
                    if (Q && Q === "border-box") $ = U + K + J;
                    else {
                        const {
                            clientWidth: he,
                            offsetWidth: me
                        } = T[0];
                        $ = U + fe + pe + K + J + (me - he)
                    }
                }
                k && (T[0].style.transform = k), V && (T[0].style.webkitTransform = V), i.roundLengths && ($ = Math.floor($))
            } else $ = (a - (i.slidesPerView - 1) * S) / i.slidesPerView, i.roundLengths && ($ = Math.floor($)), c[y] && (c[y].style[t("width")] = `${$}px`);
            c[y] && (c[y].swiperSlideSize = $), g.push($), i.centeredSlides ? (E = E + $ / 2 + x / 2 + S, x === 0 && y !== 0 && (E = E - a / 2 - S), y === 0 && (E = E - a / 2 - S), Math.abs(E) < 1 / 1e3 && (E = 0), i.roundLengths && (E = Math.floor(E)), M % i.slidesPerGroup === 0 && p.push(E), m.push(E)) : (i.roundLengths && (E = Math.floor(E)), (M - Math.min(e.params.slidesPerGroupSkip, M)) % e.params.slidesPerGroup === 0 && p.push(E), m.push(E), E = E + $ + S), e.virtualSize += $ + S, x = $, M += 1
        }
    }
    if (e.virtualSize = Math.max(e.virtualSize, a) + f, l && d && (i.effect === "slide" || i.effect === "coverflow") && n.css({
            width: `${e.virtualSize+i.spaceBetween}px`
        }), i.setWrapperSize && n.css({
            [t("width")]: `${e.virtualSize+i.spaceBetween}px`
        }), O && e.grid.updateWrapperSize($, p, t), !i.centeredSlides) {
        const y = [];
        for (let T = 0; T < p.length; T += 1) {
            let w = p[T];
            i.roundLengths && (w = Math.floor(w)), p[T] <= e.virtualSize - a && y.push(w)
        }
        p = y, Math.floor(e.virtualSize - a) - Math.floor(p[p.length - 1]) > 1 && p.push(e.virtualSize - a)
    }
    if (p.length === 0 && (p = [0]), i.spaceBetween !== 0) {
        const y = e.isHorizontal() && l ? "marginLeft" : t("marginRight");
        c.filter((T, w) => i.cssMode ? w !== c.length - 1 : !0).css({
            [y]: `${S}px`
        })
    }
    if (i.centeredSlides && i.centeredSlidesBounds) {
        let y = 0;
        g.forEach(w => {
            y += w + (i.spaceBetween ? i.spaceBetween : 0)
        }), y -= i.spaceBetween;
        const T = y - a;
        p = p.map(w => w < 0 ? -u : w > T ? T + f : w)
    }
    if (i.centerInsufficientSlides) {
        let y = 0;
        if (g.forEach(T => {
                y += T + (i.spaceBetween ? i.spaceBetween : 0)
            }), y -= i.spaceBetween, y < a) {
            const T = (a - y) / 2;
            p.forEach((w, k) => {
                p[k] = w - T
            }), m.forEach((w, k) => {
                m[k] = w + T
            })
        }
    }
    if (Object.assign(e, {
            slides: c,
            snapGrid: p,
            slidesGrid: m,
            slidesSizesGrid: g
        }), i.centeredSlides && i.cssMode && !i.centeredSlidesBounds) {
        _(e.wrapperEl, "--swiper-centered-offset-before", `${-p[0]}px`), _(e.wrapperEl, "--swiper-centered-offset-after", `${e.size/2-g[g.length-1]/2}px`);
        const y = -e.snapGrid[0],
            T = -e.slidesGrid[0];
        e.snapGrid = e.snapGrid.map(w => w + y), e.slidesGrid = e.slidesGrid.map(w => w + T)
    }
    if (h !== o && e.emit("slidesLengthChange"), p.length !== b && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), m.length !== C && e.emit("slidesGridLengthChange"), i.watchSlidesProgress && e.updateSlidesOffset(), !r && !i.cssMode && (i.effect === "slide" || i.effect === "fade")) {
        const y = `${i.containerModifierClass}backface-hidden`,
            T = e.$el.hasClass(y);
        h <= i.maxBackfaceHiddenSlides ? T || e.$el.addClass(y) : T && e.$el.removeClass(y)
    }
}

function gt(e) {
    const t = this,
        s = [],
        i = t.virtual && t.params.virtual.enabled;
    let n = 0,
        a;
    typeof e == "number" ? t.setTransition(e) : e === !0 && t.setTransition(t.params.speed);
    const l = d => i ? t.slides.filter(r => parseInt(r.getAttribute("data-swiper-slide-index"), 10) === d)[0] : t.slides.eq(d)[0];
    if (t.params.slidesPerView !== "auto" && t.params.slidesPerView > 1)
        if (t.params.centeredSlides)(t.visibleSlides || v([])).each(d => {
            s.push(d)
        });
        else
            for (a = 0; a < Math.ceil(t.params.slidesPerView); a += 1) {
                const d = t.activeIndex + a;
                if (d > t.slides.length && !i) break;
                s.push(l(d))
            } else s.push(l(t.activeIndex));
    for (a = 0; a < s.length; a += 1)
        if (typeof s[a] < "u") {
            const d = s[a].offsetHeight;
            n = d > n ? d : n
        }(n || n === 0) && t.$wrapperEl.css("height", `${n}px`)
}

function vt() {
    const e = this,
        t = e.slides;
    for (let s = 0; s < t.length; s += 1) t[s].swiperSlideOffset = e.isHorizontal() ? t[s].offsetLeft : t[s].offsetTop
}

function bt(e = this && this.translate || 0) {
    const t = this,
        s = t.params,
        {
            slides: i,
            rtlTranslate: n,
            snapGrid: a
        } = t;
    if (i.length === 0) return;
    typeof i[0].swiperSlideOffset > "u" && t.updateSlidesOffset();
    let l = -e;
    n && (l = e), i.removeClass(s.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
    for (let d = 0; d < i.length; d += 1) {
        const r = i[d];
        let o = r.swiperSlideOffset;
        s.cssMode && s.centeredSlides && (o -= i[0].swiperSlideOffset);
        const c = (l + (s.centeredSlides ? t.minTranslate() : 0) - o) / (r.swiperSlideSize + s.spaceBetween),
            h = (l - a[0] + (s.centeredSlides ? t.minTranslate() : 0) - o) / (r.swiperSlideSize + s.spaceBetween),
            p = -(l - o),
            m = p + t.slidesSizesGrid[d];
        (p >= 0 && p < t.size - 1 || m > 1 && m <= t.size || p <= 0 && m >= t.size) && (t.visibleSlides.push(r), t.visibleSlidesIndexes.push(d), i.eq(d).addClass(s.slideVisibleClass)), r.progress = n ? -c : c, r.originalProgress = n ? -h : h
    }
    t.visibleSlides = v(t.visibleSlides)
}

function Ct(e) {
    const t = this;
    if (typeof e > "u") {
        const o = t.rtlTranslate ? -1 : 1;
        e = t && t.translate && t.translate * o || 0
    }
    const s = t.params,
        i = t.maxTranslate() - t.minTranslate();
    let {
        progress: n,
        isBeginning: a,
        isEnd: l
    } = t;
    const d = a,
        r = l;
    i === 0 ? (n = 0, a = !0, l = !0) : (n = (e - t.minTranslate()) / i, a = n <= 0, l = n >= 1), Object.assign(t, {
        progress: n,
        isBeginning: a,
        isEnd: l
    }), (s.watchSlidesProgress || s.centeredSlides && s.autoHeight) && t.updateSlidesProgress(e), a && !d && t.emit("reachBeginning toEdge"), l && !r && t.emit("reachEnd toEdge"), (d && !a || r && !l) && t.emit("fromEdge"), t.emit("progress", n)
}

function St() {
    const e = this,
        {
            slides: t,
            params: s,
            $wrapperEl: i,
            activeIndex: n,
            realIndex: a
        } = e,
        l = e.virtual && s.virtual.enabled;
    t.removeClass(`${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`);
    let d;
    l ? d = e.$wrapperEl.find(`.${s.slideClass}[data-swiper-slide-index="${n}"]`) : d = t.eq(n), d.addClass(s.slideActiveClass), s.loop && (d.hasClass(s.slideDuplicateClass) ? i.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${a}"]`).addClass(s.slideDuplicateActiveClass) : i.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${a}"]`).addClass(s.slideDuplicateActiveClass));
    let r = d.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass);
    s.loop && r.length === 0 && (r = t.eq(0), r.addClass(s.slideNextClass));
    let o = d.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass);
    s.loop && o.length === 0 && (o = t.eq(-1), o.addClass(s.slidePrevClass)), s.loop && (r.hasClass(s.slideDuplicateClass) ? i.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${r.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass) : i.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${r.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass), o.hasClass(s.slideDuplicateClass) ? i.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass) : i.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass)), e.emitSlidesClasses()
}

function yt(e) {
    const t = this,
        s = t.rtlTranslate ? t.translate : -t.translate,
        {
            slidesGrid: i,
            snapGrid: n,
            params: a,
            activeIndex: l,
            realIndex: d,
            snapIndex: r
        } = t;
    let o = e,
        c;
    if (typeof o > "u") {
        for (let p = 0; p < i.length; p += 1) typeof i[p + 1] < "u" ? s >= i[p] && s < i[p + 1] - (i[p + 1] - i[p]) / 2 ? o = p : s >= i[p] && s < i[p + 1] && (o = p + 1) : s >= i[p] && (o = p);
        a.normalizeSlideIndex && (o < 0 || typeof o > "u") && (o = 0)
    }
    if (n.indexOf(s) >= 0) c = n.indexOf(s);
    else {
        const p = Math.min(a.slidesPerGroupSkip, o);
        c = p + Math.floor((o - p) / a.slidesPerGroup)
    }
    if (c >= n.length && (c = n.length - 1), o === l) {
        c !== r && (t.snapIndex = c, t.emit("snapIndexChange"));
        return
    }
    const h = parseInt(t.slides.eq(o).attr("data-swiper-slide-index") || o, 10);
    Object.assign(t, {
        snapIndex: c,
        realIndex: h,
        previousIndex: l,
        activeIndex: o
    }), t.emit("activeIndexChange"), t.emit("snapIndexChange"), d !== h && t.emit("realIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange")
}

function Tt(e) {
    const t = this,
        s = t.params,
        i = v(e).closest(`.${s.slideClass}`)[0];
    let n = !1,
        a;
    if (i) {
        for (let l = 0; l < t.slides.length; l += 1)
            if (t.slides[l] === i) {
                n = !0, a = l;
                break
            }
    }
    if (i && n) t.clickedSlide = i, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(v(i).attr("data-swiper-slide-index"), 10) : t.clickedIndex = a;
    else {
        t.clickedSlide = void 0, t.clickedIndex = void 0;
        return
    }
    s.slideToClickedSlide && t.clickedIndex !== void 0 && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
}
const Et = {
    updateSize: ht,
    updateSlides: mt,
    updateAutoHeight: gt,
    updateSlidesOffset: vt,
    updateSlidesProgress: bt,
    updateProgress: Ct,
    updateSlidesClasses: St,
    updateActiveIndex: yt,
    updateClickedSlide: Tt
};

function xt(e = this.isHorizontal() ? "x" : "y") {
    const t = this,
        {
            params: s,
            rtlTranslate: i,
            translate: n,
            $wrapperEl: a
        } = t;
    if (s.virtualTranslate) return i ? -n : n;
    if (s.cssMode) return n;
    let l = nt(a[0], e);
    return i && (l = -l), l || 0
}

function wt(e, t) {
    const s = this,
        {
            rtlTranslate: i,
            params: n,
            $wrapperEl: a,
            wrapperEl: l,
            progress: d
        } = s;
    let r = 0,
        o = 0;
    const c = 0;
    s.isHorizontal() ? r = i ? -e : e : o = e, n.roundLengths && (r = Math.floor(r), o = Math.floor(o)), n.cssMode ? l[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -r : -o : n.virtualTranslate || a.transform(`translate3d(${r}px, ${o}px, ${c}px)`), s.previousTranslate = s.translate, s.translate = s.isHorizontal() ? r : o;
    let h;
    const p = s.maxTranslate() - s.minTranslate();
    p === 0 ? h = 0 : h = (e - s.minTranslate()) / p, h !== d && s.updateProgress(e), s.emit("setTranslate", s.translate, t)
}

function $t() {
    return -this.snapGrid[0]
}

function Mt() {
    return -this.snapGrid[this.snapGrid.length - 1]
}

function Pt(e = 0, t = this.params.speed, s = !0, i = !0, n) {
    const a = this,
        {
            params: l,
            wrapperEl: d
        } = a;
    if (a.animating && l.preventInteractionOnTransition) return !1;
    const r = a.minTranslate(),
        o = a.maxTranslate();
    let c;
    if (i && e > r ? c = r : i && e < o ? c = o : c = e, a.updateProgress(c), l.cssMode) {
        const h = a.isHorizontal();
        if (t === 0) d[h ? "scrollLeft" : "scrollTop"] = -c;
        else {
            if (!a.support.smoothScroll) return le({
                swiper: a,
                targetPosition: -c,
                side: h ? "left" : "top"
            }), !0;
            d.scrollTo({
                [h ? "left" : "top"]: -c,
                behavior: "smooth"
            })
        }
        return !0
    }
    return t === 0 ? (a.setTransition(0), a.setTranslate(c), s && (a.emit("beforeTransitionStart", t, n), a.emit("transitionEnd"))) : (a.setTransition(t), a.setTranslate(c), s && (a.emit("beforeTransitionStart", t, n), a.emit("transitionStart")), a.animating || (a.animating = !0, a.onTranslateToWrapperTransitionEnd || (a.onTranslateToWrapperTransitionEnd = function(p) {
        !a || a.destroyed || p.target === this && (a.$wrapperEl[0].removeEventListener("transitionend", a.onTranslateToWrapperTransitionEnd), a.$wrapperEl[0].removeEventListener("webkitTransitionEnd", a.onTranslateToWrapperTransitionEnd), a.onTranslateToWrapperTransitionEnd = null, delete a.onTranslateToWrapperTransitionEnd, s && a.emit("transitionEnd"))
    }), a.$wrapperEl[0].addEventListener("transitionend", a.onTranslateToWrapperTransitionEnd), a.$wrapperEl[0].addEventListener("webkitTransitionEnd", a.onTranslateToWrapperTransitionEnd))), !0
}
const Lt = {
    getTranslate: xt,
    setTranslate: wt,
    minTranslate: $t,
    maxTranslate: Mt,
    translateTo: Pt
};

function kt(e, t) {
    const s = this;
    s.params.cssMode || s.$wrapperEl.transition(e), s.emit("setTransition", e, t)
}

function de({
    swiper: e,
    runCallbacks: t,
    direction: s,
    step: i
}) {
    const {
        activeIndex: n,
        previousIndex: a
    } = e;
    let l = s;
    if (l || (n > a ? l = "next" : n < a ? l = "prev" : l = "reset"), e.emit(`transition${i}`), t && n !== a) {
        if (l === "reset") {
            e.emit(`slideResetTransition${i}`);
            return
        }
        e.emit(`slideChangeTransition${i}`), l === "next" ? e.emit(`slideNextTransition${i}`) : e.emit(`slidePrevTransition${i}`)
    }
}

function Ot(e = !0, t) {
    const s = this,
        {
            params: i
        } = s;
    i.cssMode || (i.autoHeight && s.updateAutoHeight(), de({
        swiper: s,
        runCallbacks: e,
        direction: t,
        step: "Start"
    }))
}

function It(e = !0, t) {
    const s = this,
        {
            params: i
        } = s;
    s.animating = !1, !i.cssMode && (s.setTransition(0), de({
        swiper: s,
        runCallbacks: e,
        direction: t,
        step: "End"
    }))
}
const zt = {
    setTransition: kt,
    transitionStart: Ot,
    transitionEnd: It
};

function At(e = 0, t = this.params.speed, s = !0, i, n) {
    if (typeof e != "number" && typeof e != "string") throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);
    if (typeof e == "string") {
        const S = parseInt(e, 10);
        if (!isFinite(S)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
        e = S
    }
    const a = this;
    let l = e;
    l < 0 && (l = 0);
    const {
        params: d,
        snapGrid: r,
        slidesGrid: o,
        previousIndex: c,
        activeIndex: h,
        rtlTranslate: p,
        wrapperEl: m,
        enabled: g
    } = a;
    if (a.animating && d.preventInteractionOnTransition || !g && !i && !n) return !1;
    const u = Math.min(a.params.slidesPerGroupSkip, l);
    let f = u + Math.floor((l - u) / a.params.slidesPerGroup);
    f >= r.length && (f = r.length - 1);
    const b = -r[f];
    if (d.normalizeSlideIndex)
        for (let S = 0; S < o.length; S += 1) {
            const E = -Math.floor(b * 100),
                x = Math.floor(o[S] * 100),
                M = Math.floor(o[S + 1] * 100);
            typeof o[S + 1] < "u" ? E >= x && E < M - (M - x) / 2 ? l = S : E >= x && E < M && (l = S + 1) : E >= x && (l = S)
        }
    if (a.initialized && l !== h && (!a.allowSlideNext && b < a.translate && b < a.minTranslate() || !a.allowSlidePrev && b > a.translate && b > a.maxTranslate() && (h || 0) !== l)) return !1;
    l !== (c || 0) && s && a.emit("beforeSlideChangeStart"), a.updateProgress(b);
    let C;
    if (l > h ? C = "next" : l < h ? C = "prev" : C = "reset", p && -b === a.translate || !p && b === a.translate) return a.updateActiveIndex(l), d.autoHeight && a.updateAutoHeight(), a.updateSlidesClasses(), d.effect !== "slide" && a.setTranslate(b), C !== "reset" && (a.transitionStart(s, C), a.transitionEnd(s, C)), !1;
    if (d.cssMode) {
        const S = a.isHorizontal(),
            E = p ? b : -b;
        if (t === 0) {
            const x = a.virtual && a.params.virtual.enabled;
            x && (a.wrapperEl.style.scrollSnapType = "none", a._immediateVirtual = !0), m[S ? "scrollLeft" : "scrollTop"] = E, x && requestAnimationFrame(() => {
                a.wrapperEl.style.scrollSnapType = "", a._swiperImmediateVirtual = !1
            })
        } else {
            if (!a.support.smoothScroll) return le({
                swiper: a,
                targetPosition: E,
                side: S ? "left" : "top"
            }), !0;
            m.scrollTo({
                [S ? "left" : "top"]: E,
                behavior: "smooth"
            })
        }
        return !0
    }
    return a.setTransition(t), a.setTranslate(b), a.updateActiveIndex(l), a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, i), a.transitionStart(s, C), t === 0 ? a.transitionEnd(s, C) : a.animating || (a.animating = !0, a.onSlideToWrapperTransitionEnd || (a.onSlideToWrapperTransitionEnd = function(E) {
        !a || a.destroyed || E.target === this && (a.$wrapperEl[0].removeEventListener("transitionend", a.onSlideToWrapperTransitionEnd), a.$wrapperEl[0].removeEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd), a.onSlideToWrapperTransitionEnd = null, delete a.onSlideToWrapperTransitionEnd, a.transitionEnd(s, C))
    }), a.$wrapperEl[0].addEventListener("transitionend", a.onSlideToWrapperTransitionEnd), a.$wrapperEl[0].addEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd)), !0
}

function Dt(e = 0, t = this.params.speed, s = !0, i) {
    if (typeof e == "string") {
        const l = parseInt(e, 10);
        if (!isFinite(l)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
        e = l
    }
    const n = this;
    let a = e;
    return n.params.loop && (a += n.loopedSlides), n.slideTo(a, t, s, i)
}

function Gt(e = this.params.speed, t = !0, s) {
    const i = this,
        {
            animating: n,
            enabled: a,
            params: l
        } = i;
    if (!a) return i;
    let d = l.slidesPerGroup;
    l.slidesPerView === "auto" && l.slidesPerGroup === 1 && l.slidesPerGroupAuto && (d = Math.max(i.slidesPerViewDynamic("current", !0), 1));
    const r = i.activeIndex < l.slidesPerGroupSkip ? 1 : d;
    if (l.loop) {
        if (n && l.loopPreventsSlide) return !1;
        i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft
    }
    return l.rewind && i.isEnd ? i.slideTo(0, e, t, s) : i.slideTo(i.activeIndex + r, e, t, s)
}

function Nt(e = this.params.speed, t = !0, s) {
    const i = this,
        {
            params: n,
            animating: a,
            snapGrid: l,
            slidesGrid: d,
            rtlTranslate: r,
            enabled: o
        } = i;
    if (!o) return i;
    if (n.loop) {
        if (a && n.loopPreventsSlide) return !1;
        i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft
    }
    const c = r ? i.translate : -i.translate;

    function h(f) {
        return f < 0 ? -Math.floor(Math.abs(f)) : Math.floor(f)
    }
    const p = h(c),
        m = l.map(f => h(f));
    let g = l[m.indexOf(p) - 1];
    if (typeof g > "u" && n.cssMode) {
        let f;
        l.forEach((b, C) => {
            p >= b && (f = C)
        }), typeof f < "u" && (g = l[f > 0 ? f - 1 : f])
    }
    let u = 0;
    if (typeof g < "u" && (u = d.indexOf(g), u < 0 && (u = i.activeIndex - 1), n.slidesPerView === "auto" && n.slidesPerGroup === 1 && n.slidesPerGroupAuto && (u = u - i.slidesPerViewDynamic("previous", !0) + 1, u = Math.max(u, 0))), n.rewind && i.isBeginning) {
        const f = i.params.virtual && i.params.virtual.enabled && i.virtual ? i.virtual.slides.length - 1 : i.slides.length - 1;
        return i.slideTo(f, e, t, s)
    }
    return i.slideTo(u, e, t, s)
}

function Bt(e = this.params.speed, t = !0, s) {
    const i = this;
    return i.slideTo(i.activeIndex, e, t, s)
}

function Ht(e = this.params.speed, t = !0, s, i = .5) {
    const n = this;
    let a = n.activeIndex;
    const l = Math.min(n.params.slidesPerGroupSkip, a),
        d = l + Math.floor((a - l) / n.params.slidesPerGroup),
        r = n.rtlTranslate ? n.translate : -n.translate;
    if (r >= n.snapGrid[d]) {
        const o = n.snapGrid[d],
            c = n.snapGrid[d + 1];
        r - o > (c - o) * i && (a += n.params.slidesPerGroup)
    } else {
        const o = n.snapGrid[d - 1],
            c = n.snapGrid[d];
        r - o <= (c - o) * i && (a -= n.params.slidesPerGroup)
    }
    return a = Math.max(a, 0), a = Math.min(a, n.slidesGrid.length - 1), n.slideTo(a, e, t, s)
}

function _t() {
    const e = this,
        {
            params: t,
            $wrapperEl: s
        } = e,
        i = t.slidesPerView === "auto" ? e.slidesPerViewDynamic() : t.slidesPerView;
    let n = e.clickedIndex,
        a;
    if (t.loop) {
        if (e.animating) return;
        a = parseInt(v(e.clickedSlide).attr("data-swiper-slide-index"), 10), t.centeredSlides ? n < e.loopedSlides - i / 2 || n > e.slides.length - e.loopedSlides + i / 2 ? (e.loopFix(), n = s.children(`.${t.slideClass}[data-swiper-slide-index="${a}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), F(() => {
            e.slideTo(n)
        })) : e.slideTo(n) : n > e.slides.length - i ? (e.loopFix(), n = s.children(`.${t.slideClass}[data-swiper-slide-index="${a}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), F(() => {
            e.slideTo(n)
        })) : e.slideTo(n)
    } else e.slideTo(n)
}
const Ft = {
    slideTo: At,
    slideToLoop: Dt,
    slideNext: Gt,
    slidePrev: Nt,
    slideReset: Bt,
    slideToClosest: Ht,
    slideToClickedSlide: _t
};

function Vt() {
    const e = this,
        t = L(),
        {
            params: s,
            $wrapperEl: i
        } = e,
        n = i.children().length > 0 ? v(i.children()[0].parentNode) : i;
    n.children(`.${s.slideClass}.${s.slideDuplicateClass}`).remove();
    let a = n.children(`.${s.slideClass}`);
    if (s.loopFillGroupWithBlank) {
        const r = s.slidesPerGroup - a.length % s.slidesPerGroup;
        if (r !== s.slidesPerGroup) {
            for (let o = 0; o < r; o += 1) {
                const c = v(t.createElement("div")).addClass(`${s.slideClass} ${s.slideBlankClass}`);
                n.append(c)
            }
            a = n.children(`.${s.slideClass}`)
        }
    }
    s.slidesPerView === "auto" && !s.loopedSlides && (s.loopedSlides = a.length), e.loopedSlides = Math.ceil(parseFloat(s.loopedSlides || s.slidesPerView, 10)), e.loopedSlides += s.loopAdditionalSlides, e.loopedSlides > a.length && e.params.loopedSlidesLimit && (e.loopedSlides = a.length);
    const l = [],
        d = [];
    a.each((r, o) => {
        v(r).attr("data-swiper-slide-index", o)
    });
    for (let r = 0; r < e.loopedSlides; r += 1) {
        const o = r - Math.floor(r / a.length) * a.length;
        d.push(a.eq(o)[0]), l.unshift(a.eq(a.length - o - 1)[0])
    }
    for (let r = 0; r < d.length; r += 1) n.append(v(d[r].cloneNode(!0)).addClass(s.slideDuplicateClass));
    for (let r = l.length - 1; r >= 0; r -= 1) n.prepend(v(l[r].cloneNode(!0)).addClass(s.slideDuplicateClass))
}

function jt() {
    const e = this;
    e.emit("beforeLoopFix");
    const {
        activeIndex: t,
        slides: s,
        loopedSlides: i,
        allowSlidePrev: n,
        allowSlideNext: a,
        snapGrid: l,
        rtlTranslate: d
    } = e;
    let r;
    e.allowSlidePrev = !0, e.allowSlideNext = !0;
    const c = -l[t] - e.getTranslate();
    t < i ? (r = s.length - i * 3 + t, r += i, e.slideTo(r, 0, !1, !0) && c !== 0 && e.setTranslate((d ? -e.translate : e.translate) - c)) : t >= s.length - i && (r = -s.length + t + i, r += i, e.slideTo(r, 0, !1, !0) && c !== 0 && e.setTranslate((d ? -e.translate : e.translate) - c)), e.allowSlidePrev = n, e.allowSlideNext = a, e.emit("loopFix")
}

function Wt() {
    const e = this,
        {
            $wrapperEl: t,
            params: s,
            slides: i
        } = e;
    t.children(`.${s.slideClass}.${s.slideDuplicateClass},.${s.slideClass}.${s.slideBlankClass}`).remove(), i.removeAttr("data-swiper-slide-index")
}
const Rt = {
    loopCreate: Vt,
    loopFix: jt,
    loopDestroy: Wt
};

function qt(e) {
    const t = this;
    if (t.support.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
    const s = t.params.touchEventsTarget === "container" ? t.el : t.wrapperEl;
    s.style.cursor = "move", s.style.cursor = e ? "grabbing" : "grab"
}

function Xt() {
    const e = this;
    e.support.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e[e.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "")
}
const Yt = {
    setGrabCursor: qt,
    unsetGrabCursor: Xt
};

function Ut(e, t = this) {
    function s(i) {
        if (!i || i === L() || i === P()) return null;
        i.assignedSlot && (i = i.assignedSlot);
        const n = i.closest(e);
        return !n && !i.getRootNode ? null : n || s(i.getRootNode().host)
    }
    return s(t)
}

function Kt(e) {
    const t = this,
        s = L(),
        i = P(),
        n = t.touchEventsData,
        {
            params: a,
            touches: l,
            enabled: d
        } = t;
    if (!d || t.animating && a.preventInteractionOnTransition) return;
    !t.animating && a.cssMode && a.loop && t.loopFix();
    let r = e;
    r.originalEvent && (r = r.originalEvent);
    let o = v(r.target);
    if (a.touchEventsTarget === "wrapper" && !o.closest(t.wrapperEl).length || (n.isTouchEvent = r.type === "touchstart", !n.isTouchEvent && "which" in r && r.which === 3) || !n.isTouchEvent && "button" in r && r.button > 0 || n.isTouched && n.isMoved) return;
    const c = !!a.noSwipingClass && a.noSwipingClass !== "",
        h = e.composedPath ? e.composedPath() : e.path;
    c && r.target && r.target.shadowRoot && h && (o = v(h[0]));
    const p = a.noSwipingSelector ? a.noSwipingSelector : `.${a.noSwipingClass}`,
        m = !!(r.target && r.target.shadowRoot);
    if (a.noSwiping && (m ? Ut(p, o[0]) : o.closest(p)[0])) {
        t.allowClick = !0;
        return
    }
    if (a.swipeHandler && !o.closest(a.swipeHandler)[0]) return;
    l.currentX = r.type === "touchstart" ? r.targetTouches[0].pageX : r.pageX, l.currentY = r.type === "touchstart" ? r.targetTouches[0].pageY : r.pageY;
    const g = l.currentX,
        u = l.currentY,
        f = a.edgeSwipeDetection || a.iOSEdgeSwipeDetection,
        b = a.edgeSwipeThreshold || a.iOSEdgeSwipeThreshold;
    if (f && (g <= b || g >= i.innerWidth - b))
        if (f === "prevent") e.preventDefault();
        else return;
    if (Object.assign(n, {
            isTouched: !0,
            isMoved: !1,
            allowTouchCallbacks: !0,
            isScrolling: void 0,
            startMoving: void 0
        }), l.startX = g, l.startY = u, n.touchStartTime = N(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, a.threshold > 0 && (n.allowThresholdMove = !1), r.type !== "touchstart") {
        let C = !0;
        o.is(n.focusableElements) && (C = !1, o[0].nodeName === "SELECT" && (n.isTouched = !1)), s.activeElement && v(s.activeElement).is(n.focusableElements) && s.activeElement !== o[0] && s.activeElement.blur();
        const S = C && t.allowTouchMove && a.touchStartPreventDefault;
        (a.touchStartForcePreventDefault || S) && !o[0].isContentEditable && r.preventDefault()
    }
    t.params.freeMode && t.params.freeMode.enabled && t.freeMode && t.animating && !a.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", r)
}

function Jt(e) {
    const t = L(),
        s = this,
        i = s.touchEventsData,
        {
            params: n,
            touches: a,
            rtlTranslate: l,
            enabled: d
        } = s;
    if (!d) return;
    let r = e;
    if (r.originalEvent && (r = r.originalEvent), !i.isTouched) {
        i.startMoving && i.isScrolling && s.emit("touchMoveOpposite", r);
        return
    }
    if (i.isTouchEvent && r.type !== "touchmove") return;
    const o = r.type === "touchmove" && r.targetTouches && (r.targetTouches[0] || r.changedTouches[0]),
        c = r.type === "touchmove" ? o.pageX : r.pageX,
        h = r.type === "touchmove" ? o.pageY : r.pageY;
    if (r.preventedByNestedSwiper) {
        a.startX = c, a.startY = h;
        return
    }
    if (!s.allowTouchMove) {
        v(r.target).is(i.focusableElements) || (s.allowClick = !1), i.isTouched && (Object.assign(a, {
            startX: c,
            startY: h,
            currentX: c,
            currentY: h
        }), i.touchStartTime = N());
        return
    }
    if (i.isTouchEvent && n.touchReleaseOnEdges && !n.loop) {
        if (s.isVertical()) {
            if (h < a.startY && s.translate <= s.maxTranslate() || h > a.startY && s.translate >= s.minTranslate()) {
                i.isTouched = !1, i.isMoved = !1;
                return
            }
        } else if (c < a.startX && s.translate <= s.maxTranslate() || c > a.startX && s.translate >= s.minTranslate()) return
    }
    if (i.isTouchEvent && t.activeElement && r.target === t.activeElement && v(r.target).is(i.focusableElements)) {
        i.isMoved = !0, s.allowClick = !1;
        return
    }
    if (i.allowTouchCallbacks && s.emit("touchMove", r), r.targetTouches && r.targetTouches.length > 1) return;
    a.currentX = c, a.currentY = h;
    const p = a.currentX - a.startX,
        m = a.currentY - a.startY;
    if (s.params.threshold && Math.sqrt(p ** 2 + m ** 2) < s.params.threshold) return;
    if (typeof i.isScrolling > "u") {
        let b;
        s.isHorizontal() && a.currentY === a.startY || s.isVertical() && a.currentX === a.startX ? i.isScrolling = !1 : p * p + m * m >= 25 && (b = Math.atan2(Math.abs(m), Math.abs(p)) * 180 / Math.PI, i.isScrolling = s.isHorizontal() ? b > n.touchAngle : 90 - b > n.touchAngle)
    }
    if (i.isScrolling && s.emit("touchMoveOpposite", r), typeof i.startMoving > "u" && (a.currentX !== a.startX || a.currentY !== a.startY) && (i.startMoving = !0), i.isScrolling) {
        i.isTouched = !1;
        return
    }
    if (!i.startMoving) return;
    s.allowClick = !1, !n.cssMode && r.cancelable && r.preventDefault(), n.touchMoveStopPropagation && !n.nested && r.stopPropagation(), i.isMoved || (n.loop && !n.cssMode && s.loopFix(), i.startTranslate = s.getTranslate(), s.setTransition(0), s.animating && s.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, n.grabCursor && (s.allowSlideNext === !0 || s.allowSlidePrev === !0) && s.setGrabCursor(!0), s.emit("sliderFirstMove", r)), s.emit("sliderMove", r), i.isMoved = !0;
    let g = s.isHorizontal() ? p : m;
    a.diff = g, g *= n.touchRatio, l && (g = -g), s.swipeDirection = g > 0 ? "prev" : "next", i.currentTranslate = g + i.startTranslate;
    let u = !0,
        f = n.resistanceRatio;
    if (n.touchReleaseOnEdges && (f = 0), g > 0 && i.currentTranslate > s.minTranslate() ? (u = !1, n.resistance && (i.currentTranslate = s.minTranslate() - 1 + (-s.minTranslate() + i.startTranslate + g) ** f)) : g < 0 && i.currentTranslate < s.maxTranslate() && (u = !1, n.resistance && (i.currentTranslate = s.maxTranslate() + 1 - (s.maxTranslate() - i.startTranslate - g) ** f)), u && (r.preventedByNestedSwiper = !0), !s.allowSlideNext && s.swipeDirection === "next" && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !s.allowSlidePrev && s.swipeDirection === "prev" && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), !s.allowSlidePrev && !s.allowSlideNext && (i.currentTranslate = i.startTranslate), n.threshold > 0)
        if (Math.abs(g) > n.threshold || i.allowThresholdMove) {
            if (!i.allowThresholdMove) {
                i.allowThresholdMove = !0, a.startX = a.currentX, a.startY = a.currentY, i.currentTranslate = i.startTranslate, a.diff = s.isHorizontal() ? a.currentX - a.startX : a.currentY - a.startY;
                return
            }
        } else {
            i.currentTranslate = i.startTranslate;
            return
        }!n.followFinger || n.cssMode || ((n.freeMode && n.freeMode.enabled && s.freeMode || n.watchSlidesProgress) && (s.updateActiveIndex(), s.updateSlidesClasses()), s.params.freeMode && n.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(), s.updateProgress(i.currentTranslate), s.setTranslate(i.currentTranslate))
}

function Qt(e) {
    const t = this,
        s = t.touchEventsData,
        {
            params: i,
            touches: n,
            rtlTranslate: a,
            slidesGrid: l,
            enabled: d
        } = t;
    if (!d) return;
    let r = e;
    if (r.originalEvent && (r = r.originalEvent), s.allowTouchCallbacks && t.emit("touchEnd", r), s.allowTouchCallbacks = !1, !s.isTouched) {
        s.isMoved && i.grabCursor && t.setGrabCursor(!1), s.isMoved = !1, s.startMoving = !1;
        return
    }
    i.grabCursor && s.isMoved && s.isTouched && (t.allowSlideNext === !0 || t.allowSlidePrev === !0) && t.setGrabCursor(!1);
    const o = N(),
        c = o - s.touchStartTime;
    if (t.allowClick) {
        const C = r.path || r.composedPath && r.composedPath();
        t.updateClickedSlide(C && C[0] || r.target), t.emit("tap click", r), c < 300 && o - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", r)
    }
    if (s.lastClickTime = N(), F(() => {
            t.destroyed || (t.allowClick = !0)
        }), !s.isTouched || !s.isMoved || !t.swipeDirection || n.diff === 0 || s.currentTranslate === s.startTranslate) {
        s.isTouched = !1, s.isMoved = !1, s.startMoving = !1;
        return
    }
    s.isTouched = !1, s.isMoved = !1, s.startMoving = !1;
    let h;
    if (i.followFinger ? h = a ? t.translate : -t.translate : h = -s.currentTranslate, i.cssMode) return;
    if (t.params.freeMode && i.freeMode.enabled) {
        t.freeMode.onTouchEnd({
            currentPos: h
        });
        return
    }
    let p = 0,
        m = t.slidesSizesGrid[0];
    for (let C = 0; C < l.length; C += C < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup) {
        const S = C < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
        typeof l[C + S] < "u" ? h >= l[C] && h < l[C + S] && (p = C, m = l[C + S] - l[C]) : h >= l[C] && (p = C, m = l[l.length - 1] - l[l.length - 2])
    }
    let g = null,
        u = null;
    i.rewind && (t.isBeginning ? u = t.params.virtual && t.params.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (g = 0));
    const f = (h - l[p]) / m,
        b = p < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
    if (c > i.longSwipesMs) {
        if (!i.longSwipes) {
            t.slideTo(t.activeIndex);
            return
        }
        t.swipeDirection === "next" && (f >= i.longSwipesRatio ? t.slideTo(i.rewind && t.isEnd ? g : p + b) : t.slideTo(p)), t.swipeDirection === "prev" && (f > 1 - i.longSwipesRatio ? t.slideTo(p + b) : u !== null && f < 0 && Math.abs(f) > i.longSwipesRatio ? t.slideTo(u) : t.slideTo(p))
    } else {
        if (!i.shortSwipes) {
            t.slideTo(t.activeIndex);
            return
        }
        t.navigation && (r.target === t.navigation.nextEl || r.target === t.navigation.prevEl) ? r.target === t.navigation.nextEl ? t.slideTo(p + b) : t.slideTo(p) : (t.swipeDirection === "next" && t.slideTo(g !== null ? g : p + b), t.swipeDirection === "prev" && t.slideTo(u !== null ? u : p))
    }
}

function te() {
    const e = this,
        {
            params: t,
            el: s
        } = e;
    if (s && s.offsetWidth === 0) return;
    t.breakpoints && e.setBreakpoint();
    const {
        allowSlideNext: i,
        allowSlidePrev: n,
        snapGrid: a
    } = e;
    e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), (t.slidesPerView === "auto" || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), e.allowSlidePrev = n, e.allowSlideNext = i, e.params.watchOverflow && a !== e.snapGrid && e.checkOverflow()
}

function Zt(e) {
    const t = this;
    t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
}

function es() {
    const e = this,
        {
            wrapperEl: t,
            rtlTranslate: s,
            enabled: i
        } = e;
    if (!i) return;
    e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, e.translate === 0 && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
    let n;
    const a = e.maxTranslate() - e.minTranslate();
    a === 0 ? n = 0 : n = (e.translate - e.minTranslate()) / a, n !== e.progress && e.updateProgress(s ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
}
let se = !1;

function ts() {}
const ce = (e, t) => {
    const s = L(),
        {
            params: i,
            touchEvents: n,
            el: a,
            wrapperEl: l,
            device: d,
            support: r
        } = e,
        o = !!i.nested,
        c = t === "on" ? "addEventListener" : "removeEventListener",
        h = t;
    if (!r.touch) a[c](n.start, e.onTouchStart, !1), s[c](n.move, e.onTouchMove, o), s[c](n.end, e.onTouchEnd, !1);
    else {
        const p = n.start === "touchstart" && r.passiveListener && i.passiveListeners ? {
            passive: !0,
            capture: !1
        } : !1;
        a[c](n.start, e.onTouchStart, p), a[c](n.move, e.onTouchMove, r.passiveListener ? {
            passive: !1,
            capture: o
        } : o), a[c](n.end, e.onTouchEnd, p), n.cancel && a[c](n.cancel, e.onTouchEnd, p)
    }(i.preventClicks || i.preventClicksPropagation) && a[c]("click", e.onClick, !0), i.cssMode && l[c]("scroll", e.onScroll), i.updateOnWindowResize ? e[h](d.ios || d.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", te, !0) : e[h]("observerUpdate", te, !0)
};

function ss() {
    const e = this,
        t = L(),
        {
            params: s,
            support: i
        } = e;
    e.onTouchStart = Kt.bind(e), e.onTouchMove = Jt.bind(e), e.onTouchEnd = Qt.bind(e), s.cssMode && (e.onScroll = es.bind(e)), e.onClick = Zt.bind(e), i.touch && !se && (t.addEventListener("touchstart", ts), se = !0), ce(e, "on")
}

function is() {
    ce(this, "off")
}
const ns = {
        attachEvents: ss,
        detachEvents: is
    },
    ie = (e, t) => e.grid && t.grid && t.grid.rows > 1;

function as() {
    const e = this,
        {
            activeIndex: t,
            initialized: s,
            loopedSlides: i = 0,
            params: n,
            $el: a
        } = e,
        l = n.breakpoints;
    if (!l || l && Object.keys(l).length === 0) return;
    const d = e.getBreakpoint(l, e.params.breakpointsBase, e.el);
    if (!d || e.currentBreakpoint === d) return;
    const o = (d in l ? l[d] : void 0) || e.originalParams,
        c = ie(e, n),
        h = ie(e, o),
        p = n.enabled;
    c && !h ? (a.removeClass(`${n.containerModifierClass}grid ${n.containerModifierClass}grid-column`), e.emitContainerClasses()) : !c && h && (a.addClass(`${n.containerModifierClass}grid`), (o.grid.fill && o.grid.fill === "column" || !o.grid.fill && n.grid.fill === "column") && a.addClass(`${n.containerModifierClass}grid-column`), e.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach(f => {
        const b = n[f] && n[f].enabled,
            C = o[f] && o[f].enabled;
        b && !C && e[f].disable(), !b && C && e[f].enable()
    });
    const m = o.direction && o.direction !== n.direction,
        g = n.loop && (o.slidesPerView !== n.slidesPerView || m);
    m && s && e.changeDirection(), I(e.params, o);
    const u = e.params.enabled;
    Object.assign(e, {
        allowTouchMove: e.params.allowTouchMove,
        allowSlideNext: e.params.allowSlideNext,
        allowSlidePrev: e.params.allowSlidePrev
    }), p && !u ? e.disable() : !p && u && e.enable(), e.currentBreakpoint = d, e.emit("_beforeBreakpoint", o), g && s && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - i + e.loopedSlides, 0, !1)), e.emit("breakpoint", o)
}

function rs(e, t = "window", s) {
    if (!e || t === "container" && !s) return;
    let i = !1;
    const n = P(),
        a = t === "window" ? n.innerHeight : s.clientHeight,
        l = Object.keys(e).map(d => {
            if (typeof d == "string" && d.indexOf("@") === 0) {
                const r = parseFloat(d.substr(1));
                return {
                    value: a * r,
                    point: d
                }
            }
            return {
                value: d,
                point: d
            }
        });
    l.sort((d, r) => parseInt(d.value, 10) - parseInt(r.value, 10));
    for (let d = 0; d < l.length; d += 1) {
        const {
            point: r,
            value: o
        } = l[d];
        t === "window" ? n.matchMedia(`(min-width: ${o}px)`).matches && (i = r) : o <= s.clientWidth && (i = r)
    }
    return i || "max"
}
const ls = {
    setBreakpoint: as,
    getBreakpoint: rs
};

function os(e, t) {
    const s = [];
    return e.forEach(i => {
        typeof i == "object" ? Object.keys(i).forEach(n => {
            i[n] && s.push(t + n)
        }) : typeof i == "string" && s.push(t + i)
    }), s
}

function ds() {
    const e = this,
        {
            classNames: t,
            params: s,
            rtl: i,
            $el: n,
            device: a,
            support: l
        } = e,
        d = os(["initialized", s.direction, {
            "pointer-events": !l.touch
        }, {
            "free-mode": e.params.freeMode && s.freeMode.enabled
        }, {
            autoheight: s.autoHeight
        }, {
            rtl: i
        }, {
            grid: s.grid && s.grid.rows > 1
        }, {
            "grid-column": s.grid && s.grid.rows > 1 && s.grid.fill === "column"
        }, {
            android: a.android
        }, {
            ios: a.ios
        }, {
            "css-mode": s.cssMode
        }, {
            centered: s.cssMode && s.centeredSlides
        }, {
            "watch-progress": s.watchSlidesProgress
        }], s.containerModifierClass);
    t.push(...d), n.addClass([...t].join(" ")), e.emitContainerClasses()
}

function cs() {
    const e = this,
        {
            $el: t,
            classNames: s
        } = e;
    t.removeClass(s.join(" ")), e.emitContainerClasses()
}
const us = {
    addClasses: ds,
    removeClasses: cs
};

function fs(e, t, s, i, n, a) {
    const l = P();
    let d;

    function r() {
        a && a()
    }!v(e).parent("picture")[0] && (!e.complete || !n) && t ? (d = new l.Image, d.onload = r, d.onerror = r, i && (d.sizes = i), s && (d.srcset = s), t && (d.src = t)) : r()
}

function ps() {
    const e = this;
    e.imagesToLoad = e.$el.find("img");

    function t() {
        typeof e > "u" || e === null || !e || e.destroyed || (e.imagesLoaded !== void 0 && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
    }
    for (let s = 0; s < e.imagesToLoad.length; s += 1) {
        const i = e.imagesToLoad[s];
        e.loadImage(i, i.currentSrc || i.getAttribute("src"), i.srcset || i.getAttribute("srcset"), i.sizes || i.getAttribute("sizes"), !0, t)
    }
}
const hs = {
    loadImage: fs,
    preloadImages: ps
};

function ms() {
    const e = this,
        {
            isLocked: t,
            params: s
        } = e,
        {
            slidesOffsetBefore: i
        } = s;
    if (i) {
        const n = e.slides.length - 1,
            a = e.slidesGrid[n] + e.slidesSizesGrid[n] + i * 2;
        e.isLocked = e.size > a
    } else e.isLocked = e.snapGrid.length === 1;
    s.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked), s.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
}
const gs = {
        checkOverflow: ms
    },
    ne = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        enabled: !0,
        focusableElements: "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopedSlidesLimit: !0,
        loopFillGroupWithBlank: !1,
        loopPreventsSlide: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0,
        _emitClasses: !1
    };

function vs(e, t) {
    return function(i = {}) {
        const n = Object.keys(i)[0],
            a = i[n];
        if (typeof a != "object" || a === null) {
            I(t, i);
            return
        }
        if (["navigation", "pagination", "scrollbar"].indexOf(n) >= 0 && e[n] === !0 && (e[n] = {
                auto: !0
            }), !(n in e && "enabled" in a)) {
            I(t, i);
            return
        }
        e[n] === !0 && (e[n] = {
            enabled: !0
        }), typeof e[n] == "object" && !("enabled" in e[n]) && (e[n].enabled = !0), e[n] || (e[n] = {
            enabled: !1
        }), I(t, i)
    }
}
const q = {
        eventsEmitter: pt,
        update: Et,
        translate: Lt,
        transition: zt,
        slide: Ft,
        loop: Rt,
        grabCursor: Yt,
        events: ns,
        breakpoints: ls,
        checkOverflow: gs,
        classes: us,
        images: hs
    },
    X = {};
class z {
    constructor(...t) {
        let s, i;
        if (t.length === 1 && t[0].constructor && Object.prototype.toString.call(t[0]).slice(8, -1) === "Object" ? i = t[0] : [s, i] = t, i || (i = {}), i = I({}, i), s && !i.el && (i.el = s), i.el && v(i.el).length > 1) {
            const d = [];
            return v(i.el).each(r => {
                const o = I({}, i, {
                    el: r
                });
                d.push(new z(o))
            }), d
        }
        const n = this;
        n.__swiper__ = !0, n.support = oe(), n.device = ot({
            userAgent: i.userAgent
        }), n.browser = ct(), n.eventsListeners = {}, n.eventsAnyListeners = [], n.modules = [...n.__modules__], i.modules && Array.isArray(i.modules) && n.modules.push(...i.modules);
        const a = {};
        n.modules.forEach(d => {
            d({
                swiper: n,
                extendParams: vs(i, a),
                on: n.on.bind(n),
                once: n.once.bind(n),
                off: n.off.bind(n),
                emit: n.emit.bind(n)
            })
        });
        const l = I({}, ne, a);
        return n.params = I({}, l, X, i), n.originalParams = I({}, n.params), n.passedParams = I({}, i), n.params && n.params.on && Object.keys(n.params.on).forEach(d => {
            n.on(d, n.params.on[d])
        }), n.params && n.params.onAny && n.onAny(n.params.onAny), n.$ = v, Object.assign(n, {
            enabled: n.params.enabled,
            el: s,
            classNames: [],
            slides: v(),
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal() {
                return n.params.direction === "horizontal"
            },
            isVertical() {
                return n.params.direction === "vertical"
            },
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            allowSlideNext: n.params.allowSlideNext,
            allowSlidePrev: n.params.allowSlidePrev,
            touchEvents: function() {
                const r = ["touchstart", "touchmove", "touchend", "touchcancel"],
                    o = ["pointerdown", "pointermove", "pointerup"];
                return n.touchEventsTouch = {
                    start: r[0],
                    move: r[1],
                    end: r[2],
                    cancel: r[3]
                }, n.touchEventsDesktop = {
                    start: o[0],
                    move: o[1],
                    end: o[2]
                }, n.support.touch || !n.params.simulateTouch ? n.touchEventsTouch : n.touchEventsDesktop
            }(),
            touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                focusableElements: n.params.focusableElements,
                lastClickTime: N(),
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                isTouchEvent: void 0,
                startMoving: void 0
            },
            allowClick: !0,
            allowTouchMove: n.params.allowTouchMove,
            touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0
            },
            imagesToLoad: [],
            imagesLoaded: 0
        }), n.emit("_swiper"), n.params.init && n.init(), n
    }
    enable() {
        const t = this;
        t.enabled || (t.enabled = !0, t.params.grabCursor && t.setGrabCursor(), t.emit("enable"))
    }
    disable() {
        const t = this;
        t.enabled && (t.enabled = !1, t.params.grabCursor && t.unsetGrabCursor(), t.emit("disable"))
    }
    setProgress(t, s) {
        const i = this;
        t = Math.min(Math.max(t, 0), 1);
        const n = i.minTranslate(),
            l = (i.maxTranslate() - n) * t + n;
        i.translateTo(l, typeof s > "u" ? 0 : s), i.updateActiveIndex(), i.updateSlidesClasses()
    }
    emitContainerClasses() {
        const t = this;
        if (!t.params._emitClasses || !t.el) return;
        const s = t.el.className.split(" ").filter(i => i.indexOf("swiper") === 0 || i.indexOf(t.params.containerModifierClass) === 0);
        t.emit("_containerClasses", s.join(" "))
    }
    getSlideClasses(t) {
        const s = this;
        return s.destroyed ? "" : t.className.split(" ").filter(i => i.indexOf("swiper-slide") === 0 || i.indexOf(s.params.slideClass) === 0).join(" ")
    }
    emitSlidesClasses() {
        const t = this;
        if (!t.params._emitClasses || !t.el) return;
        const s = [];
        t.slides.each(i => {
            const n = t.getSlideClasses(i);
            s.push({
                slideEl: i,
                classNames: n
            }), t.emit("_slideClass", i, n)
        }), t.emit("_slideClasses", s)
    }
    slidesPerViewDynamic(t = "current", s = !1) {
        const i = this,
            {
                params: n,
                slides: a,
                slidesGrid: l,
                slidesSizesGrid: d,
                size: r,
                activeIndex: o
            } = i;
        let c = 1;
        if (n.centeredSlides) {
            let h = a[o].swiperSlideSize,
                p;
            for (let m = o + 1; m < a.length; m += 1) a[m] && !p && (h += a[m].swiperSlideSize, c += 1, h > r && (p = !0));
            for (let m = o - 1; m >= 0; m -= 1) a[m] && !p && (h += a[m].swiperSlideSize, c += 1, h > r && (p = !0))
        } else if (t === "current")
            for (let h = o + 1; h < a.length; h += 1)(s ? l[h] + d[h] - l[o] < r : l[h] - l[o] < r) && (c += 1);
        else
            for (let h = o - 1; h >= 0; h -= 1) l[o] - l[h] < r && (c += 1);
        return c
    }
    update() {
        const t = this;
        if (!t || t.destroyed) return;
        const {
            snapGrid: s,
            params: i
        } = t;
        i.breakpoints && t.setBreakpoint(), t.updateSize(), t.updateSlides(), t.updateProgress(), t.updateSlidesClasses();

        function n() {
            const l = t.rtlTranslate ? t.translate * -1 : t.translate,
                d = Math.min(Math.max(l, t.maxTranslate()), t.minTranslate());
            t.setTranslate(d), t.updateActiveIndex(), t.updateSlidesClasses()
        }
        let a;
        t.params.freeMode && t.params.freeMode.enabled ? (n(), t.params.autoHeight && t.updateAutoHeight()) : ((t.params.slidesPerView === "auto" || t.params.slidesPerView > 1) && t.isEnd && !t.params.centeredSlides ? a = t.slideTo(t.slides.length - 1, 0, !1, !0) : a = t.slideTo(t.activeIndex, 0, !1, !0), a || n()), i.watchOverflow && s !== t.snapGrid && t.checkOverflow(), t.emit("update")
    }
    changeDirection(t, s = !0) {
        const i = this,
            n = i.params.direction;
        return t || (t = n === "horizontal" ? "vertical" : "horizontal"), t === n || t !== "horizontal" && t !== "vertical" || (i.$el.removeClass(`${i.params.containerModifierClass}${n}`).addClass(`${i.params.containerModifierClass}${t}`), i.emitContainerClasses(), i.params.direction = t, i.slides.each(a => {
            t === "vertical" ? a.style.width = "" : a.style.height = ""
        }), i.emit("changeDirection"), s && i.update()), i
    }
    changeLanguageDirection(t) {
        const s = this;
        s.rtl && t === "rtl" || !s.rtl && t === "ltr" || (s.rtl = t === "rtl", s.rtlTranslate = s.params.direction === "horizontal" && s.rtl, s.rtl ? (s.$el.addClass(`${s.params.containerModifierClass}rtl`), s.el.dir = "rtl") : (s.$el.removeClass(`${s.params.containerModifierClass}rtl`), s.el.dir = "ltr"), s.update())
    }
    mount(t) {
        const s = this;
        if (s.mounted) return !0;
        const i = v(t || s.params.el);
        if (t = i[0], !t) return !1;
        t.swiper = s;
        const n = () => `.${(s.params.wrapperClass||"").trim().split(" ").join(".")}`;
        let l = (() => {
            if (t && t.shadowRoot && t.shadowRoot.querySelector) {
                const d = v(t.shadowRoot.querySelector(n()));
                return d.children = r => i.children(r), d
            }
            return i.children ? i.children(n()) : v(i).children(n())
        })();
        if (l.length === 0 && s.params.createElements) {
            const r = L().createElement("div");
            l = v(r), r.className = s.params.wrapperClass, i.append(r), i.children(`.${s.params.slideClass}`).each(o => {
                l.append(o)
            })
        }
        return Object.assign(s, {
            $el: i,
            el: t,
            $wrapperEl: l,
            wrapperEl: l[0],
            mounted: !0,
            rtl: t.dir.toLowerCase() === "rtl" || i.css("direction") === "rtl",
            rtlTranslate: s.params.direction === "horizontal" && (t.dir.toLowerCase() === "rtl" || i.css("direction") === "rtl"),
            wrongRTL: l.css("display") === "-webkit-box"
        }), !0
    }
    init(t) {
        const s = this;
        return s.initialized || s.mount(t) === !1 || (s.emit("beforeInit"), s.params.breakpoints && s.setBreakpoint(), s.addClasses(), s.params.loop && s.loopCreate(), s.updateSize(), s.updateSlides(), s.params.watchOverflow && s.checkOverflow(), s.params.grabCursor && s.enabled && s.setGrabCursor(), s.params.preloadImages && s.preloadImages(), s.params.loop ? s.slideTo(s.params.initialSlide + s.loopedSlides, 0, s.params.runCallbacksOnInit, !1, !0) : s.slideTo(s.params.initialSlide, 0, s.params.runCallbacksOnInit, !1, !0), s.attachEvents(), s.initialized = !0, s.emit("init"), s.emit("afterInit")), s
    }
    destroy(t = !0, s = !0) {
        const i = this,
            {
                params: n,
                $el: a,
                $wrapperEl: l,
                slides: d
            } = i;
        return typeof i.params > "u" || i.destroyed || (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), n.loop && i.loopDestroy(), s && (i.removeClasses(), a.removeAttr("style"), l.removeAttr("style"), d && d.length && d.removeClass([n.slideVisibleClass, n.slideActiveClass, n.slideNextClass, n.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach(r => {
            i.off(r)
        }), t !== !1 && (i.$el[0].swiper = null, st(i)), i.destroyed = !0), null
    }
    static extendDefaults(t) {
        I(X, t)
    }
    static get extendedDefaults() {
        return X
    }
    static get defaults() {
        return ne
    }
    static installModule(t) {
        z.prototype.__modules__ || (z.prototype.__modules__ = []);
        const s = z.prototype.__modules__;
        typeof t == "function" && s.indexOf(t) < 0 && s.push(t)
    }
    static use(t) {
        return Array.isArray(t) ? (t.forEach(s => z.installModule(s)), z) : (z.installModule(t), z)
    }
}
Object.keys(q).forEach(e => {
    Object.keys(q[e]).forEach(t => {
        z.prototype[t] = q[e][t]
    })
});
z.use([ut, ft]);

function ue(e, t, s, i) {
    const n = L();
    return e.params.createElements && Object.keys(i).forEach(a => {
        if (!s[a] && s.auto === !0) {
            let l = e.$el.children(`.${i[a]}`)[0];
            l || (l = n.createElement("div"), l.className = i[a], e.$el.append(l)), s[a] = l, t[a] = l
        }
    }), s
}

function bs({
    swiper: e,
    extendParams: t,
    on: s,
    emit: i
}) {
    t({
        navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
            navigationDisabledClass: "swiper-navigation-disabled"
        }
    }), e.navigation = {
        nextEl: null,
        $nextEl: null,
        prevEl: null,
        $prevEl: null
    };

    function n(m) {
        let g;
        return m && (g = v(m), e.params.uniqueNavElements && typeof m == "string" && g.length > 1 && e.$el.find(m).length === 1 && (g = e.$el.find(m))), g
    }

    function a(m, g) {
        const u = e.params.navigation;
        m && m.length > 0 && (m[g ? "addClass" : "removeClass"](u.disabledClass), m[0] && m[0].tagName === "BUTTON" && (m[0].disabled = g), e.params.watchOverflow && e.enabled && m[e.isLocked ? "addClass" : "removeClass"](u.lockClass))
    }

    function l() {
        if (e.params.loop) return;
        const {
            $nextEl: m,
            $prevEl: g
        } = e.navigation;
        a(g, e.isBeginning && !e.params.rewind), a(m, e.isEnd && !e.params.rewind)
    }

    function d(m) {
        m.preventDefault(), !(e.isBeginning && !e.params.loop && !e.params.rewind) && (e.slidePrev(), i("navigationPrev"))
    }

    function r(m) {
        m.preventDefault(), !(e.isEnd && !e.params.loop && !e.params.rewind) && (e.slideNext(), i("navigationNext"))
    }

    function o() {
        const m = e.params.navigation;
        if (e.params.navigation = ue(e, e.originalParams.navigation, e.params.navigation, {
                nextEl: "swiper-button-next",
                prevEl: "swiper-button-prev"
            }), !(m.nextEl || m.prevEl)) return;
        const g = n(m.nextEl),
            u = n(m.prevEl);
        g && g.length > 0 && g.on("click", r), u && u.length > 0 && u.on("click", d), Object.assign(e.navigation, {
            $nextEl: g,
            nextEl: g && g[0],
            $prevEl: u,
            prevEl: u && u[0]
        }), e.enabled || (g && g.addClass(m.lockClass), u && u.addClass(m.lockClass))
    }

    function c() {
        const {
            $nextEl: m,
            $prevEl: g
        } = e.navigation;
        m && m.length && (m.off("click", r), m.removeClass(e.params.navigation.disabledClass)), g && g.length && (g.off("click", d), g.removeClass(e.params.navigation.disabledClass))
    }
    s("init", () => {
        e.params.navigation.enabled === !1 ? p() : (o(), l())
    }), s("toEdge fromEdge lock unlock", () => {
        l()
    }), s("destroy", () => {
        c()
    }), s("enable disable", () => {
        const {
            $nextEl: m,
            $prevEl: g
        } = e.navigation;
        m && m[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass), g && g[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass)
    }), s("click", (m, g) => {
        const {
            $nextEl: u,
            $prevEl: f
        } = e.navigation, b = g.target;
        if (e.params.navigation.hideOnClick && !v(b).is(f) && !v(b).is(u)) {
            if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === b || e.pagination.el.contains(b))) return;
            let C;
            u ? C = u.hasClass(e.params.navigation.hiddenClass) : f && (C = f.hasClass(e.params.navigation.hiddenClass)), i(C === !0 ? "navigationShow" : "navigationHide"), u && u.toggleClass(e.params.navigation.hiddenClass), f && f.toggleClass(e.params.navigation.hiddenClass)
        }
    });
    const h = () => {
            e.$el.removeClass(e.params.navigation.navigationDisabledClass), o(), l()
        },
        p = () => {
            e.$el.addClass(e.params.navigation.navigationDisabledClass), c()
        };
    Object.assign(e.navigation, {
        enable: h,
        disable: p,
        update: l,
        init: o,
        destroy: c
    })
}

function G(e = "") {
    return `.${e.trim().replace(/([\.:!\/])/g,"\\$1").replace(/ /g,".")}`
}

function Cs({
    swiper: e,
    extendParams: t,
    on: s,
    emit: i
}) {
    const n = "swiper-pagination";
    t({
        pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: u => u,
            formatFractionTotal: u => u,
            bulletClass: `${n}-bullet`,
            bulletActiveClass: `${n}-bullet-active`,
            modifierClass: `${n}-`,
            currentClass: `${n}-current`,
            totalClass: `${n}-total`,
            hiddenClass: `${n}-hidden`,
            progressbarFillClass: `${n}-progressbar-fill`,
            progressbarOppositeClass: `${n}-progressbar-opposite`,
            clickableClass: `${n}-clickable`,
            lockClass: `${n}-lock`,
            horizontalClass: `${n}-horizontal`,
            verticalClass: `${n}-vertical`,
            paginationDisabledClass: `${n}-disabled`
        }
    }), e.pagination = {
        el: null,
        $el: null,
        bullets: []
    };
    let a, l = 0;

    function d() {
        return !e.params.pagination.el || !e.pagination.el || !e.pagination.$el || e.pagination.$el.length === 0
    }

    function r(u, f) {
        const {
            bulletActiveClass: b
        } = e.params.pagination;
        u[f]().addClass(`${b}-${f}`)[f]().addClass(`${b}-${f}-${f}`)
    }

    function o() {
        const u = e.rtl,
            f = e.params.pagination;
        if (d()) return;
        const b = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
            C = e.pagination.$el;
        let S;
        const E = e.params.loop ? Math.ceil((b - e.loopedSlides * 2) / e.params.slidesPerGroup) : e.snapGrid.length;
        if (e.params.loop ? (S = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup), S > b - 1 - e.loopedSlides * 2 && (S -= b - e.loopedSlides * 2), S > E - 1 && (S -= E), S < 0 && e.params.paginationType !== "bullets" && (S = E + S)) : typeof e.snapIndex < "u" ? S = e.snapIndex : S = e.activeIndex || 0, f.type === "bullets" && e.pagination.bullets && e.pagination.bullets.length > 0) {
            const x = e.pagination.bullets;
            let M, O, $;
            if (f.dynamicBullets && (a = x.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0), C.css(e.isHorizontal() ? "width" : "height", `${a*(f.dynamicMainBullets+4)}px`), f.dynamicMainBullets > 1 && e.previousIndex !== void 0 && (l += S - (e.previousIndex - e.loopedSlides || 0), l > f.dynamicMainBullets - 1 ? l = f.dynamicMainBullets - 1 : l < 0 && (l = 0)), M = Math.max(S - l, 0), O = M + (Math.min(x.length, f.dynamicMainBullets) - 1), $ = (O + M) / 2), x.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(A => `${f.bulletActiveClass}${A}`).join(" ")), C.length > 1) x.each(A => {
                const y = v(A),
                    T = y.index();
                T === S && y.addClass(f.bulletActiveClass), f.dynamicBullets && (T >= M && T <= O && y.addClass(`${f.bulletActiveClass}-main`), T === M && r(y, "prev"), T === O && r(y, "next"))
            });
            else {
                const A = x.eq(S),
                    y = A.index();
                if (A.addClass(f.bulletActiveClass), f.dynamicBullets) {
                    const T = x.eq(M),
                        w = x.eq(O);
                    for (let k = M; k <= O; k += 1) x.eq(k).addClass(`${f.bulletActiveClass}-main`);
                    if (e.params.loop)
                        if (y >= x.length) {
                            for (let k = f.dynamicMainBullets; k >= 0; k -= 1) x.eq(x.length - k).addClass(`${f.bulletActiveClass}-main`);
                            x.eq(x.length - f.dynamicMainBullets - 1).addClass(`${f.bulletActiveClass}-prev`)
                        } else r(T, "prev"), r(w, "next");
                    else r(T, "prev"), r(w, "next")
                }
            }
            if (f.dynamicBullets) {
                const A = Math.min(x.length, f.dynamicMainBullets + 4),
                    y = (a * A - a) / 2 - $ * a,
                    T = u ? "right" : "left";
                x.css(e.isHorizontal() ? T : "top", `${y}px`)
            }
        }
        if (f.type === "fraction" && (C.find(G(f.currentClass)).text(f.formatFractionCurrent(S + 1)), C.find(G(f.totalClass)).text(f.formatFractionTotal(E))), f.type === "progressbar") {
            let x;
            f.progressbarOpposite ? x = e.isHorizontal() ? "vertical" : "horizontal" : x = e.isHorizontal() ? "horizontal" : "vertical";
            const M = (S + 1) / E;
            let O = 1,
                $ = 1;
            x === "horizontal" ? O = M : $ = M, C.find(G(f.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${O}) scaleY(${$})`).transition(e.params.speed)
        }
        f.type === "custom" && f.renderCustom ? (C.html(f.renderCustom(e, S + 1, E)), i("paginationRender", C[0])) : i("paginationUpdate", C[0]), e.params.watchOverflow && e.enabled && C[e.isLocked ? "addClass" : "removeClass"](f.lockClass)
    }

    function c() {
        const u = e.params.pagination;
        if (d()) return;
        const f = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
            b = e.pagination.$el;
        let C = "";
        if (u.type === "bullets") {
            let S = e.params.loop ? Math.ceil((f - e.loopedSlides * 2) / e.params.slidesPerGroup) : e.snapGrid.length;
            e.params.freeMode && e.params.freeMode.enabled && !e.params.loop && S > f && (S = f);
            for (let E = 0; E < S; E += 1) u.renderBullet ? C += u.renderBullet.call(e, E, u.bulletClass) : C += `<${u.bulletElement} class="${u.bulletClass}"></${u.bulletElement}>`;
            b.html(C), e.pagination.bullets = b.find(G(u.bulletClass))
        }
        u.type === "fraction" && (u.renderFraction ? C = u.renderFraction.call(e, u.currentClass, u.totalClass) : C = `<span class="${u.currentClass}"></span> / <span class="${u.totalClass}"></span>`, b.html(C)), u.type === "progressbar" && (u.renderProgressbar ? C = u.renderProgressbar.call(e, u.progressbarFillClass) : C = `<span class="${u.progressbarFillClass}"></span>`, b.html(C)), u.type !== "custom" && i("paginationRender", e.pagination.$el[0])
    }

    function h() {
        e.params.pagination = ue(e, e.originalParams.pagination, e.params.pagination, {
            el: "swiper-pagination"
        });
        const u = e.params.pagination;
        if (!u.el) return;
        let f = v(u.el);
        f.length !== 0 && (e.params.uniqueNavElements && typeof u.el == "string" && f.length > 1 && (f = e.$el.find(u.el), f.length > 1 && (f = f.filter(b => v(b).parents(".swiper")[0] === e.el))), u.type === "bullets" && u.clickable && f.addClass(u.clickableClass), f.addClass(u.modifierClass + u.type), f.addClass(e.isHorizontal() ? u.horizontalClass : u.verticalClass), u.type === "bullets" && u.dynamicBullets && (f.addClass(`${u.modifierClass}${u.type}-dynamic`), l = 0, u.dynamicMainBullets < 1 && (u.dynamicMainBullets = 1)), u.type === "progressbar" && u.progressbarOpposite && f.addClass(u.progressbarOppositeClass), u.clickable && f.on("click", G(u.bulletClass), function(C) {
            C.preventDefault();
            let S = v(this).index() * e.params.slidesPerGroup;
            e.params.loop && (S += e.loopedSlides), e.slideTo(S)
        }), Object.assign(e.pagination, {
            $el: f,
            el: f[0]
        }), e.enabled || f.addClass(u.lockClass))
    }

    function p() {
        const u = e.params.pagination;
        if (d()) return;
        const f = e.pagination.$el;
        f.removeClass(u.hiddenClass), f.removeClass(u.modifierClass + u.type), f.removeClass(e.isHorizontal() ? u.horizontalClass : u.verticalClass), e.pagination.bullets && e.pagination.bullets.removeClass && e.pagination.bullets.removeClass(u.bulletActiveClass), u.clickable && f.off("click", G(u.bulletClass))
    }
    s("init", () => {
        e.params.pagination.enabled === !1 ? g() : (h(), c(), o())
    }), s("activeIndexChange", () => {
        (e.params.loop || typeof e.snapIndex > "u") && o()
    }), s("snapIndexChange", () => {
        e.params.loop || o()
    }), s("slidesLengthChange", () => {
        e.params.loop && (c(), o())
    }), s("snapGridLengthChange", () => {
        e.params.loop || (c(), o())
    }), s("destroy", () => {
        p()
    }), s("enable disable", () => {
        const {
            $el: u
        } = e.pagination;
        u && u[e.enabled ? "removeClass" : "addClass"](e.params.pagination.lockClass)
    }), s("lock unlock", () => {
        o()
    }), s("click", (u, f) => {
        const b = f.target,
            {
                $el: C
            } = e.pagination;
        if (e.params.pagination.el && e.params.pagination.hideOnClick && C && C.length > 0 && !v(b).hasClass(e.params.pagination.bulletClass)) {
            if (e.navigation && (e.navigation.nextEl && b === e.navigation.nextEl || e.navigation.prevEl && b === e.navigation.prevEl)) return;
            const S = C.hasClass(e.params.pagination.hiddenClass);
            i(S === !0 ? "paginationShow" : "paginationHide"), C.toggleClass(e.params.pagination.hiddenClass)
        }
    });
    const m = () => {
            e.$el.removeClass(e.params.pagination.paginationDisabledClass), e.pagination.$el && e.pagination.$el.removeClass(e.params.pagination.paginationDisabledClass), h(), c(), o()
        },
        g = () => {
            e.$el.addClass(e.params.pagination.paginationDisabledClass), e.pagination.$el && e.pagination.$el.addClass(e.params.pagination.paginationDisabledClass), p()
        };
    Object.assign(e.pagination, {
        enable: m,
        disable: g,
        render: c,
        update: o,
        init: h,
        destroy: p
    })
}

function Ss({
    swiper: e,
    extendParams: t,
    on: s,
    emit: i
}) {
    let n;
    e.autoplay = {
        running: !1,
        paused: !1
    }, t({
        autoplay: {
            enabled: !1,
            delay: 3e3,
            waitForTransition: !0,
            disableOnInteraction: !0,
            stopOnLastSlide: !1,
            reverseDirection: !1,
            pauseOnMouseEnter: !1
        }
    });

    function a() {
        if (!e.size) {
            e.autoplay.running = !1, e.autoplay.paused = !1;
            return
        }
        const u = e.slides.eq(e.activeIndex);
        let f = e.params.autoplay.delay;
        u.attr("data-swiper-autoplay") && (f = u.attr("data-swiper-autoplay") || e.params.autoplay.delay), clearTimeout(n), n = F(() => {
            let b;
            e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), b = e.slidePrev(e.params.speed, !0, !0), i("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? d() : (b = e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), i("autoplay")) : (b = e.slidePrev(e.params.speed, !0, !0), i("autoplay")) : e.params.loop ? (e.loopFix(), b = e.slideNext(e.params.speed, !0, !0), i("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? d() : (b = e.slideTo(0, e.params.speed, !0, !0), i("autoplay")) : (b = e.slideNext(e.params.speed, !0, !0), i("autoplay")), (e.params.cssMode && e.autoplay.running || b === !1) && a()
        }, f)
    }

    function l() {
        return typeof n < "u" || e.autoplay.running ? !1 : (e.autoplay.running = !0, i("autoplayStart"), a(), !0)
    }

    function d() {
        return !e.autoplay.running || typeof n > "u" ? !1 : (n && (clearTimeout(n), n = void 0), e.autoplay.running = !1, i("autoplayStop"), !0)
    }

    function r(u) {
        e.autoplay.running && (e.autoplay.paused || (n && clearTimeout(n), e.autoplay.paused = !0, u === 0 || !e.params.autoplay.waitForTransition ? (e.autoplay.paused = !1, a()) : ["transitionend", "webkitTransitionEnd"].forEach(f => {
            e.$wrapperEl[0].addEventListener(f, c)
        })))
    }

    function o() {
        const u = L();
        u.visibilityState === "hidden" && e.autoplay.running && r(), u.visibilityState === "visible" && e.autoplay.paused && (a(), e.autoplay.paused = !1)
    }

    function c(u) {
        !e || e.destroyed || !e.$wrapperEl || u.target === e.$wrapperEl[0] && (["transitionend", "webkitTransitionEnd"].forEach(f => {
            e.$wrapperEl[0].removeEventListener(f, c)
        }), e.autoplay.paused = !1, e.autoplay.running ? a() : d())
    }

    function h() {
        e.params.autoplay.disableOnInteraction ? d() : (i("autoplayPause"), r()), ["transitionend", "webkitTransitionEnd"].forEach(u => {
            e.$wrapperEl[0].removeEventListener(u, c)
        })
    }

    function p() {
        e.params.autoplay.disableOnInteraction || (e.autoplay.paused = !1, i("autoplayResume"), a())
    }

    function m() {
        e.params.autoplay.pauseOnMouseEnter && (e.$el.on("mouseenter", h), e.$el.on("mouseleave", p))
    }

    function g() {
        e.$el.off("mouseenter", h), e.$el.off("mouseleave", p)
    }
    s("init", () => {
        e.params.autoplay.enabled && (l(), L().addEventListener("visibilitychange", o), m())
    }), s("beforeTransitionStart", (u, f, b) => {
        e.autoplay.running && (b || !e.params.autoplay.disableOnInteraction ? e.autoplay.pause(f) : d())
    }), s("sliderFirstMove", () => {
        e.autoplay.running && (e.params.autoplay.disableOnInteraction ? d() : r())
    }), s("touchEnd", () => {
        e.params.cssMode && e.autoplay.paused && !e.params.autoplay.disableOnInteraction && a()
    }), s("destroy", () => {
        g(), e.autoplay.running && d(), L().removeEventListener("visibilitychange", o)
    }), Object.assign(e.autoplay, {
        pause: r,
        run: a,
        start: l,
        stop: d
    })
}
export {
    Ss as A, bs as N, Cs as P, z as S
};