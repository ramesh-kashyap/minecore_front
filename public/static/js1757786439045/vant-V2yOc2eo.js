/**
 * @vue/shared v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
/*! #__NO_SIDE_EFFECTS__ */
function oa(e) {
    const t = Object.create(null);
    for (const n of e.split(",")) t[n] = 1;
    return n => n in t
}
const De = {},
    Kn = [],
    At = () => {},
    Vu = () => !1,
    Mi = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
    ia = e => e.startsWith("onUpdate:"),
    Ye = Object.assign,
    ra = (e, t) => {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1)
    },
    Lu = Object.prototype.hasOwnProperty,
    Ce = (e, t) => Lu.call(e, t),
    ce = Array.isArray,
    Gn = e => co(e) === "[object Map]",
    so = e => co(e) === "[object Set]",
    Ya = e => co(e) === "[object Date]",
    Nu = e => co(e) === "[object RegExp]",
    ge = e => typeof e == "function",
    Pe = e => typeof e == "string",
    St = e => typeof e == "symbol",
    Oe = e => e !== null && typeof e == "object",
    Cs = e => (Oe(e) || ge(e)) && ge(e.then) && ge(e.catch),
    Ts = Object.prototype.toString,
    co = e => Ts.call(e),
    Hu = e => co(e).slice(8, -1),
    _s = e => co(e) === "[object Object]",
    aa = e => Pe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
    _o = oa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
    Fi = e => {
        const t = Object.create(null);
        return n => t[n] || (t[n] = e(n))
    },
    zu = /-(\w)/g,
    yt = Fi(e => e.replace(zu, (t, n) => n ? n.toUpperCase() : "")),
    ju = /\B([A-Z])/g,
    Gt = Fi(e => e.replace(ju, "-$1").toLowerCase()),
    Vi = Fi(e => e.charAt(0).toUpperCase() + e.slice(1)),
    ir = Fi(e => e ? `on${Vi(e)}` : ""),
    ln = (e, t) => !Object.is(e, t),
    qn = (e, ...t) => {
        for (let n = 0; n < e.length; n++) e[n](...t)
    },
    Es = (e, t, n, o = !1) => {
        Object.defineProperty(e, t, {
            configurable: !0,
            enumerable: !1,
            writable: o,
            value: n
        })
    },
    pi = e => {
        const t = parseFloat(e);
        return isNaN(t) ? e : t
    },
    Wu = e => {
        const t = Pe(e) ? Number(e) : NaN;
        return isNaN(t) ? e : t
    };
let Ka;
const Li = () => Ka || (Ka = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});

function Ni(e) {
    if (ce(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) {
            const o = e[n],
                i = Pe(o) ? Gu(o) : Ni(o);
            if (i)
                for (const r in i) t[r] = i[r]
        }
        return t
    } else if (Pe(e) || Oe(e)) return e
}
const Uu = /;(?![^(]*\))/g,
    Yu = /:([^]+)/,
    Ku = /\/\*[^]*?\*\//g;

function Gu(e) {
    const t = {};
    return e.replace(Ku, "").split(Uu).forEach(n => {
        if (n) {
            const o = n.split(Yu);
            o.length > 1 && (t[o[0].trim()] = o[1].trim())
        }
    }), t
}

function qu(e) {
    if (!e) return "";
    if (Pe(e)) return e;
    let t = "";
    for (const n in e) {
        const o = e[n];
        if (Pe(o) || typeof o == "number") {
            const i = n.startsWith("--") ? n : Gt(n);
            t += `${i}:${o};`
        }
    }
    return t
}

function Hi(e) {
    let t = "";
    if (Pe(e)) t = e;
    else if (ce(e))
        for (let n = 0; n < e.length; n++) {
            const o = Hi(e[n]);
            o && (t += o + " ")
        } else if (Oe(e))
            for (const n in e) e[n] && (t += n + " ");
    return t.trim()
}
const Xu = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
    Zu = oa(Xu);

function ks(e) {
    return !!e || e === ""
}

function Ju(e, t) {
    if (e.length !== t.length) return !1;
    let n = !0;
    for (let o = 0; n && o < e.length; o++) n = $n(e[o], t[o]);
    return n
}

function $n(e, t) {
    if (e === t) return !0;
    let n = Ya(e),
        o = Ya(t);
    if (n || o) return n && o ? e.getTime() === t.getTime() : !1;
    if (n = St(e), o = St(t), n || o) return e === t;
    if (n = ce(e), o = ce(t), n || o) return n && o ? Ju(e, t) : !1;
    if (n = Oe(e), o = Oe(t), n || o) {
        if (!n || !o) return !1;
        const i = Object.keys(e).length,
            r = Object.keys(t).length;
        if (i !== r) return !1;
        for (const a in e) {
            const l = e.hasOwnProperty(a),
                s = t.hasOwnProperty(a);
            if (l && !s || !l && s || !$n(e[a], t[a])) return !1
        }
    }
    return String(e) === String(t)
}

function la(e, t) {
    return e.findIndex(n => $n(n, t))
}
const Ds = e => !!(e && e.__v_isRef === !0),
    Qu = e => Pe(e) ? e : e == null ? "" : ce(e) || Oe(e) && (e.toString === Ts || !ge(e.toString)) ? Ds(e) ? Qu(e.value) : JSON.stringify(e, Os, 2) : String(e),
    Os = (e, t) => Ds(t) ? Os(e, t.value) : Gn(t) ? {
        [`Map(${t.size})`]: [...t.entries()].reduce((n, [o, i], r) => (n[rr(o, r) + " =>"] = i, n), {})
    } : so(t) ? {
        [`Set(${t.size})`]: [...t.values()].map(n => rr(n))
    } : St(t) ? rr(t) : Oe(t) && !ce(t) && !_s(t) ? String(t) : t,
    rr = (e, t = "") => {
        var n;
        return St(e) ? `Symbol(${(n=e.description)!=null?n:t})` : e
    };
/**
 * @vue/reactivity v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
let ut;
class Is {
    constructor(t = !1) {
        this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = ut, !t && ut && (this.index = (ut.scopes || (ut.scopes = [])).push(this) - 1)
    }
    get active() {
        return this._active
    }
    pause() {
        if (this._active) {
            this._isPaused = !0;
            let t, n;
            if (this.scopes)
                for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].pause();
            for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].pause()
        }
    }
    resume() {
        if (this._active && this._isPaused) {
            this._isPaused = !1;
            let t, n;
            if (this.scopes)
                for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].resume();
            for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].resume()
        }
    }
    run(t) {
        if (this._active) {
            const n = ut;
            try {
                return ut = this, t()
            } finally {
                ut = n
            }
        }
    }
    on() {
        ut = this
    }
    off() {
        ut = this.parent
    }
    stop(t) {
        if (this._active) {
            this._active = !1;
            let n, o;
            for (n = 0, o = this.effects.length; n < o; n++) this.effects[n].stop();
            for (this.effects.length = 0, n = 0, o = this.cleanups.length; n < o; n++) this.cleanups[n]();
            if (this.cleanups.length = 0, this.scopes) {
                for (n = 0, o = this.scopes.length; n < o; n++) this.scopes[n].stop(!0);
                this.scopes.length = 0
            }
            if (!this.detached && this.parent && !t) {
                const i = this.parent.scopes.pop();
                i && i !== this && (this.parent.scopes[this.index] = i, i.index = this.index)
            }
            this.parent = void 0
        }
    }
}

function m0(e) {
    return new Is(e)
}

function ef() {
    return ut
}
let Ae;
const ar = new WeakSet;
class As {
    constructor(t) {
        this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ut && ut.active && ut.effects.push(this)
    }
    pause() {
        this.flags |= 64
    }
    resume() {
        this.flags & 64 && (this.flags &= -65, ar.has(this) && (ar.delete(this), this.trigger()))
    }
    notify() {
        this.flags & 2 && !(this.flags & 32) || this.flags & 8 || $s(this)
    }
    run() {
        if (!(this.flags & 1)) return this.fn();
        this.flags |= 2, Ga(this), Rs(this);
        const t = Ae,
            n = wt;
        Ae = this, wt = !0;
        try {
            return this.fn()
        } finally {
            Bs(this), Ae = t, wt = n, this.flags &= -3
        }
    }
    stop() {
        if (this.flags & 1) {
            for (let t = this.deps; t; t = t.nextDep) ua(t);
            this.deps = this.depsTail = void 0, Ga(this), this.onStop && this.onStop(), this.flags &= -2
        }
    }
    trigger() {
        this.flags & 64 ? ar.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty()
    }
    runIfDirty() {
        Dr(this) && this.run()
    }
    get dirty() {
        return Dr(this)
    }
}
let Ps = 0,
    Eo, ko;

function $s(e, t = !1) {
    if (e.flags |= 8, t) {
        e.next = ko, ko = e;
        return
    }
    e.next = Eo, Eo = e
}

function sa() {
    Ps++
}

function ca() {
    if (--Ps > 0) return;
    if (ko) {
        let t = ko;
        for (ko = void 0; t;) {
            const n = t.next;
            t.next = void 0, t.flags &= -9, t = n
        }
    }
    let e;
    for (; Eo;) {
        let t = Eo;
        for (Eo = void 0; t;) {
            const n = t.next;
            if (t.next = void 0, t.flags &= -9, t.flags & 1) try {
                t.trigger()
            } catch (o) {
                e || (e = o)
            }
            t = n
        }
    }
    if (e) throw e
}

function Rs(e) {
    for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t
}

function Bs(e) {
    let t, n = e.depsTail,
        o = n;
    for (; o;) {
        const i = o.prevDep;
        o.version === -1 ? (o === n && (n = i), ua(o), tf(o)) : t = o, o.dep.activeLink = o.prevActiveLink, o.prevActiveLink = void 0, o = i
    }
    e.deps = t, e.depsTail = n
}

function Dr(e) {
    for (let t = e.deps; t; t = t.nextDep)
        if (t.dep.version !== t.version || t.dep.computed && (Ms(t.dep.computed) || t.dep.version !== t.version)) return !0;
    return !!e._dirty
}

function Ms(e) {
    if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === $o)) return;
    e.globalVersion = $o;
    const t = e.dep;
    if (e.flags |= 2, t.version > 0 && !e.isSSR && e.deps && !Dr(e)) {
        e.flags &= -3;
        return
    }
    const n = Ae,
        o = wt;
    Ae = e, wt = !0;
    try {
        Rs(e);
        const i = e.fn(e._value);
        (t.version === 0 || ln(i, e._value)) && (e._value = i, t.version++)
    } catch (i) {
        throw t.version++, i
    } finally {
        Ae = n, wt = o, Bs(e), e.flags &= -3
    }
}

function ua(e, t = !1) {
    const {
        dep: n,
        prevSub: o,
        nextSub: i
    } = e;
    if (o && (o.nextSub = i, e.prevSub = void 0), i && (i.prevSub = o, e.nextSub = void 0), n.subs === e && (n.subs = o, !o && n.computed)) {
        n.computed.flags &= -5;
        for (let r = n.computed.deps; r; r = r.nextDep) ua(r, !0)
    }!t && !--n.sc && n.map && n.map.delete(n.key)
}

function tf(e) {
    const {
        prevDep: t,
        nextDep: n
    } = e;
    t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0)
}
let wt = !0;
const Fs = [];

function hn() {
    Fs.push(wt), wt = !1
}

function vn() {
    const e = Fs.pop();
    wt = e === void 0 ? !0 : e
}

function Ga(e) {
    const {
        cleanup: t
    } = e;
    if (e.cleanup = void 0, t) {
        const n = Ae;
        Ae = void 0;
        try {
            t()
        } finally {
            Ae = n
        }
    }
}
let $o = 0;
class nf {
    constructor(t, n) {
        this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0
    }
}
class fa {
    constructor(t) {
        this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0
    }
    track(t) {
        if (!Ae || !wt || Ae === this.computed) return;
        let n = this.activeLink;
        if (n === void 0 || n.sub !== Ae) n = this.activeLink = new nf(Ae, this), Ae.deps ? (n.prevDep = Ae.depsTail, Ae.depsTail.nextDep = n, Ae.depsTail = n) : Ae.deps = Ae.depsTail = n, Vs(n);
        else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
            const o = n.nextDep;
            o.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = o), n.prevDep = Ae.depsTail, n.nextDep = void 0, Ae.depsTail.nextDep = n, Ae.depsTail = n, Ae.deps === n && (Ae.deps = o)
        }
        return n
    }
    trigger(t) {
        this.version++, $o++, this.notify(t)
    }
    notify(t) {
        sa();
        try {
            for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify()
        } finally {
            ca()
        }
    }
}

function Vs(e) {
    if (e.dep.sc++, e.sub.flags & 4) {
        const t = e.dep.computed;
        if (t && !e.dep.subs) {
            t.flags |= 20;
            for (let o = t.deps; o; o = o.nextDep) Vs(o)
        }
        const n = e.dep.subs;
        n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e
    }
}
const wi = new WeakMap,
    In = Symbol(""),
    Or = Symbol(""),
    Ro = Symbol("");

function Xe(e, t, n) {
    if (wt && Ae) {
        let o = wi.get(e);
        o || wi.set(e, o = new Map);
        let i = o.get(n);
        i || (o.set(n, i = new fa), i.map = o, i.key = n), i.track()
    }
}

function Ft(e, t, n, o, i, r) {
    const a = wi.get(e);
    if (!a) {
        $o++;
        return
    }
    const l = s => {
        s && s.trigger()
    };
    if (sa(), t === "clear") a.forEach(l);
    else {
        const s = ce(e),
            u = s && aa(n);
        if (s && n === "length") {
            const c = Number(o);
            a.forEach((f, h) => {
                (h === "length" || h === Ro || !St(h) && h >= c) && l(f)
            })
        } else switch ((n !== void 0 || a.has(void 0)) && l(a.get(n)), u && l(a.get(Ro)), t) {
            case "add":
                s ? u && l(a.get("length")) : (l(a.get(In)), Gn(e) && l(a.get(Or)));
                break;
            case "delete":
                s || (l(a.get(In)), Gn(e) && l(a.get(Or)));
                break;
            case "set":
                Gn(e) && l(a.get(In));
                break
        }
    }
    ca()
}

function of (e, t) {
    const n = wi.get(e);
    return n && n.get(t)
}

function Ln(e) {
    const t = xe(e);
    return t === e ? t : (Xe(t, "iterate", Ro), gt(e) ? t : t.map(Ze))
}

function zi(e) {
    return Xe(e = xe(e), "iterate", Ro), e
}
const rf = {
    __proto__: null,
    [Symbol.iterator]() {
        return lr(this, Symbol.iterator, Ze)
    },
    concat(...e) {
        return Ln(this).concat(...e.map(t => ce(t) ? Ln(t) : t))
    },
    entries() {
        return lr(this, "entries", e => (e[1] = Ze(e[1]), e))
    },
    every(e, t) {
        return $t(this, "every", e, t, void 0, arguments)
    },
    filter(e, t) {
        return $t(this, "filter", e, t, n => n.map(Ze), arguments)
    },
    find(e, t) {
        return $t(this, "find", e, t, Ze, arguments)
    },
    findIndex(e, t) {
        return $t(this, "findIndex", e, t, void 0, arguments)
    },
    findLast(e, t) {
        return $t(this, "findLast", e, t, Ze, arguments)
    },
    findLastIndex(e, t) {
        return $t(this, "findLastIndex", e, t, void 0, arguments)
    },
    forEach(e, t) {
        return $t(this, "forEach", e, t, void 0, arguments)
    },
    includes(...e) {
        return sr(this, "includes", e)
    },
    indexOf(...e) {
        return sr(this, "indexOf", e)
    },
    join(e) {
        return Ln(this).join(e)
    },
    lastIndexOf(...e) {
        return sr(this, "lastIndexOf", e)
    },
    map(e, t) {
        return $t(this, "map", e, t, void 0, arguments)
    },
    pop() {
        return vo(this, "pop")
    },
    push(...e) {
        return vo(this, "push", e)
    },
    reduce(e, ...t) {
        return qa(this, "reduce", e, t)
    },
    reduceRight(e, ...t) {
        return qa(this, "reduceRight", e, t)
    },
    shift() {
        return vo(this, "shift")
    },
    some(e, t) {
        return $t(this, "some", e, t, void 0, arguments)
    },
    splice(...e) {
        return vo(this, "splice", e)
    },
    toReversed() {
        return Ln(this).toReversed()
    },
    toSorted(e) {
        return Ln(this).toSorted(e)
    },
    toSpliced(...e) {
        return Ln(this).toSpliced(...e)
    },
    unshift(...e) {
        return vo(this, "unshift", e)
    },
    values() {
        return lr(this, "values", Ze)
    }
};

function lr(e, t, n) {
    const o = zi(e),
        i = o[t]();
    return o !== e && !gt(e) && (i._next = i.next, i.next = () => {
        const r = i._next();
        return r.value && (r.value = n(r.value)), r
    }), i
}
const af = Array.prototype;

function $t(e, t, n, o, i, r) {
    const a = zi(e),
        l = a !== e && !gt(e),
        s = a[t];
    if (s !== af[t]) {
        const f = s.apply(e, r);
        return l ? Ze(f) : f
    }
    let u = n;
    a !== e && (l ? u = function(f, h) {
        return n.call(this, Ze(f), h, e)
    } : n.length > 2 && (u = function(f, h) {
        return n.call(this, f, h, e)
    }));
    const c = s.call(a, u, o);
    return l && i ? i(c) : c
}

function qa(e, t, n, o) {
    const i = zi(e);
    let r = n;
    return i !== e && (gt(e) ? n.length > 3 && (r = function(a, l, s) {
        return n.call(this, a, l, s, e)
    }) : r = function(a, l, s) {
        return n.call(this, a, Ze(l), s, e)
    }), i[t](r, ...o)
}

function sr(e, t, n) {
    const o = xe(e);
    Xe(o, "iterate", Ro);
    const i = o[t](...n);
    return (i === -1 || i === !1) && va(n[0]) ? (n[0] = xe(n[0]), o[t](...n)) : i
}

function vo(e, t, n = []) {
    hn(), sa();
    const o = xe(e)[t].apply(e, n);
    return ca(), vn(), o
}
const lf = oa("__proto__,__v_isRef,__isVue"),
    Ls = new Set(Object.getOwnPropertyNames(Symbol).filter(e => e !== "arguments" && e !== "caller").map(e => Symbol[e]).filter(St));

function sf(e) {
    St(e) || (e = String(e));
    const t = xe(this);
    return Xe(t, "has", e), t.hasOwnProperty(e)
}
class Ns {
    constructor(t = !1, n = !1) {
        this._isReadonly = t, this._isShallow = n
    }
    get(t, n, o) {
        if (n === "__v_skip") return t.__v_skip;
        const i = this._isReadonly,
            r = this._isShallow;
        if (n === "__v_isReactive") return !i;
        if (n === "__v_isReadonly") return i;
        if (n === "__v_isShallow") return r;
        if (n === "__v_raw") return o === (i ? r ? bf : Ws : r ? js : zs).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(o) ? t : void 0;
        const a = ce(t);
        if (!i) {
            let s;
            if (a && (s = rf[n])) return s;
            if (n === "hasOwnProperty") return sf
        }
        const l = Reflect.get(t, n, Ue(t) ? t : o);
        return (St(n) ? Ls.has(n) : lf(n)) || (i || Xe(t, "get", n), r) ? l : Ue(l) ? a && aa(n) ? l : l.value : Oe(l) ? i ? Us(l) : Ke(l) : l
    }
}
class Hs extends Ns {
    constructor(t = !1) {
        super(!1, t)
    }
    set(t, n, o, i) {
        let r = t[n];
        if (!this._isShallow) {
            const s = Rn(r);
            if (!gt(o) && !Rn(o) && (r = xe(r), o = xe(o)), !ce(t) && Ue(r) && !Ue(o)) return s ? !1 : (r.value = o, !0)
        }
        const a = ce(t) && aa(n) ? Number(n) < t.length : Ce(t, n),
            l = Reflect.set(t, n, o, Ue(t) ? t : i);
        return t === xe(i) && (a ? ln(o, r) && Ft(t, "set", n, o) : Ft(t, "add", n, o)), l
    }
    deleteProperty(t, n) {
        const o = Ce(t, n);
        t[n];
        const i = Reflect.deleteProperty(t, n);
        return i && o && Ft(t, "delete", n, void 0), i
    }
    has(t, n) {
        const o = Reflect.has(t, n);
        return (!St(n) || !Ls.has(n)) && Xe(t, "has", n), o
    }
    ownKeys(t) {
        return Xe(t, "iterate", ce(t) ? "length" : In), Reflect.ownKeys(t)
    }
}
class cf extends Ns {
    constructor(t = !1) {
        super(!0, t)
    }
    set(t, n) {
        return !0
    }
    deleteProperty(t, n) {
        return !0
    }
}
const uf = new Hs,
    ff = new cf,
    df = new Hs(!0);
const Ir = e => e,
    Xo = e => Reflect.getPrototypeOf(e);

function hf(e, t, n) {
    return function(...o) {
        const i = this.__v_raw,
            r = xe(i),
            a = Gn(r),
            l = e === "entries" || e === Symbol.iterator && a,
            s = e === "keys" && a,
            u = i[e](...o),
            c = n ? Ir : t ? Ar : Ze;
        return !t && Xe(r, "iterate", s ? Or : In), {
            next() {
                const {
                    value: f,
                    done: h
                } = u.next();
                return h ? {
                    value: f,
                    done: h
                } : {
                    value: l ? [c(f[0]), c(f[1])] : c(f),
                    done: h
                }
            },
            [Symbol.iterator]() {
                return this
            }
        }
    }
}

function Zo(e) {
    return function(...t) {
        return e === "delete" ? !1 : e === "clear" ? void 0 : this
    }
}

function vf(e, t) {
    const n = {
        get(i) {
            const r = this.__v_raw,
                a = xe(r),
                l = xe(i);
            e || (ln(i, l) && Xe(a, "get", i), Xe(a, "get", l));
            const {
                has: s
            } = Xo(a), u = t ? Ir : e ? Ar : Ze;
            if (s.call(a, i)) return u(r.get(i));
            if (s.call(a, l)) return u(r.get(l));
            r !== a && r.get(i)
        },
        get size() {
            const i = this.__v_raw;
            return !e && Xe(xe(i), "iterate", In), Reflect.get(i, "size", i)
        },
        has(i) {
            const r = this.__v_raw,
                a = xe(r),
                l = xe(i);
            return e || (ln(i, l) && Xe(a, "has", i), Xe(a, "has", l)), i === l ? r.has(i) : r.has(i) || r.has(l)
        },
        forEach(i, r) {
            const a = this,
                l = a.__v_raw,
                s = xe(l),
                u = t ? Ir : e ? Ar : Ze;
            return !e && Xe(s, "iterate", In), l.forEach((c, f) => i.call(r, u(c), u(f), a))
        }
    };
    return Ye(n, e ? {
        add: Zo("add"),
        set: Zo("set"),
        delete: Zo("delete"),
        clear: Zo("clear")
    } : {
        add(i) {
            !t && !gt(i) && !Rn(i) && (i = xe(i));
            const r = xe(this);
            return Xo(r).has.call(r, i) || (r.add(i), Ft(r, "add", i, i)), this
        },
        set(i, r) {
            !t && !gt(r) && !Rn(r) && (r = xe(r));
            const a = xe(this),
                {
                    has: l,
                    get: s
                } = Xo(a);
            let u = l.call(a, i);
            u || (i = xe(i), u = l.call(a, i));
            const c = s.call(a, i);
            return a.set(i, r), u ? ln(r, c) && Ft(a, "set", i, r) : Ft(a, "add", i, r), this
        },
        delete(i) {
            const r = xe(this),
                {
                    has: a,
                    get: l
                } = Xo(r);
            let s = a.call(r, i);
            s || (i = xe(i), s = a.call(r, i)), l && l.call(r, i);
            const u = r.delete(i);
            return s && Ft(r, "delete", i, void 0), u
        },
        clear() {
            const i = xe(this),
                r = i.size !== 0,
                a = i.clear();
            return r && Ft(i, "clear", void 0, void 0), a
        }
    }), ["keys", "values", "entries", Symbol.iterator].forEach(i => {
        n[i] = hf(i, e, t)
    }), n
}

function da(e, t) {
    const n = vf(e, t);
    return (o, i, r) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? o : Reflect.get(Ce(n, i) && i in o ? n : o, i, r)
}
const gf = {
        get: da(!1, !1)
    },
    mf = {
        get: da(!1, !0)
    },
    yf = {
        get: da(!0, !1)
    };
const zs = new WeakMap,
    js = new WeakMap,
    Ws = new WeakMap,
    bf = new WeakMap;

function pf(e) {
    switch (e) {
        case "Object":
        case "Array":
            return 1;
        case "Map":
        case "Set":
        case "WeakMap":
        case "WeakSet":
            return 2;
        default:
            return 0
    }
}

function wf(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : pf(Hu(e))
}

function Ke(e) {
    return Rn(e) ? e : ha(e, !1, uf, gf, zs)
}

function xf(e) {
    return ha(e, !1, df, mf, js)
}

function Us(e) {
    return ha(e, !0, ff, yf, Ws)
}

function ha(e, t, n, o, i) {
    if (!Oe(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
    const r = i.get(e);
    if (r) return r;
    const a = wf(e);
    if (a === 0) return e;
    const l = new Proxy(e, a === 2 ? o : n);
    return i.set(e, l), l
}

function Xn(e) {
    return Rn(e) ? Xn(e.__v_raw) : !!(e && e.__v_isReactive)
}

function Rn(e) {
    return !!(e && e.__v_isReadonly)
}

function gt(e) {
    return !!(e && e.__v_isShallow)
}

function va(e) {
    return e ? !!e.__v_raw : !1
}

function xe(e) {
    const t = e && e.__v_raw;
    return t ? xe(t) : e
}

function Sf(e) {
    return !Ce(e, "__v_skip") && Object.isExtensible(e) && Es(e, "__v_skip", !0), e
}
const Ze = e => Oe(e) ? Ke(e) : e,
    Ar = e => Oe(e) ? Us(e) : e;

function Ue(e) {
    return e ? e.__v_isRef === !0 : !1
}

function N(e) {
    return Ys(e, !1)
}

function y0(e) {
    return Ys(e, !0)
}

function Ys(e, t) {
    return Ue(e) ? e : new Cf(e, t)
}
class Cf {
    constructor(t, n) {
        this.dep = new fa, this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : xe(t), this._value = n ? t : Ze(t), this.__v_isShallow = n
    }
    get value() {
        return this.dep.track(), this._value
    }
    set value(t) {
        const n = this._rawValue,
            o = this.__v_isShallow || gt(t) || Rn(t);
        t = o ? t : xe(t), ln(t, n) && (this._rawValue = t, this._value = o ? t : Ze(t), this.dep.trigger())
    }
}

function eo(e) {
    return Ue(e) ? e.value : e
}
const Tf = {
    get: (e, t, n) => t === "__v_raw" ? e : eo(Reflect.get(e, t, n)),
    set: (e, t, n, o) => {
        const i = e[t];
        return Ue(i) && !Ue(n) ? (i.value = n, !0) : Reflect.set(e, t, n, o)
    }
};

function Ks(e) {
    return Xn(e) ? e : new Proxy(e, Tf)
}

function b0(e) {
    const t = ce(e) ? new Array(e.length) : {};
    for (const n in e) t[n] = Ef(e, n);
    return t
}
class _f {
    constructor(t, n, o) {
        this._object = t, this._key = n, this._defaultValue = o, this.__v_isRef = !0, this._value = void 0
    }
    get value() {
        const t = this._object[this._key];
        return this._value = t === void 0 ? this._defaultValue : t
    }
    set value(t) {
        this._object[this._key] = t
    }
    get dep() {
        return of(xe(this._object), this._key)
    }
}

function Ef(e, t, n) {
    const o = e[t];
    return Ue(o) ? o : new _f(e, t, n)
}
class kf {
    constructor(t, n, o) {
        this.fn = t, this.setter = n, this._value = void 0, this.dep = new fa(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = $o - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = o
    }
    notify() {
        if (this.flags |= 16, !(this.flags & 8) && Ae !== this) return $s(this, !0), !0
    }
    get value() {
        const t = this.dep.track();
        return Ms(this), t && (t.version = this.dep.version), this._value
    }
    set value(t) {
        this.setter && this.setter(t)
    }
}

function Df(e, t, n = !1) {
    let o, i;
    return ge(e) ? o = e : (o = e.get, i = e.set), new kf(o, i, n)
}
const Jo = {},
    xi = new WeakMap;
let En;

function Of(e, t = !1, n = En) {
    if (n) {
        let o = xi.get(n);
        o || xi.set(n, o = []), o.push(e)
    }
}

function If(e, t, n = De) {
    const {
        immediate: o,
        deep: i,
        once: r,
        scheduler: a,
        augmentJob: l,
        call: s
    } = n, u = S => i ? S : gt(S) || i === !1 || i === 0 ? Vt(S, 1) : Vt(S);
    let c, f, h, v, m = !1,
        w = !1;
    if (Ue(e) ? (f = () => e.value, m = gt(e)) : Xn(e) ? (f = () => u(e), m = !0) : ce(e) ? (w = !0, m = e.some(S => Xn(S) || gt(S)), f = () => e.map(S => {
            if (Ue(S)) return S.value;
            if (Xn(S)) return u(S);
            if (ge(S)) return s ? s(S, 2) : S()
        })) : ge(e) ? t ? f = s ? () => s(e, 2) : e : f = () => {
            if (h) {
                hn();
                try {
                    h()
                } finally {
                    vn()
                }
            }
            const S = En;
            En = c;
            try {
                return s ? s(e, 3, [v]) : e(v)
            } finally {
                En = S
            }
        } : f = At, t && i) {
        const S = f,
            T = i === !0 ? 1 / 0 : i;
        f = () => Vt(S(), T)
    }
    const g = ef(),
        x = () => {
            c.stop(), g && g.active && ra(g.effects, c)
        };
    if (r && t) {
        const S = t;
        t = (...T) => {
            S(...T), x()
        }
    }
    let y = w ? new Array(e.length).fill(Jo) : Jo;
    const C = S => {
        if (!(!(c.flags & 1) || !c.dirty && !S))
            if (t) {
                const T = c.run();
                if (i || m || (w ? T.some((O, z) => ln(O, y[z])) : ln(T, y))) {
                    h && h();
                    const O = En;
                    En = c;
                    try {
                        const z = [T, y === Jo ? void 0 : w && y[0] === Jo ? [] : y, v];
                        s ? s(t, 3, z) : t(...z), y = T
                    } finally {
                        En = O
                    }
                }
            } else c.run()
    };
    return l && l(C), c = new As(f), c.scheduler = a ? () => a(C, !1) : C, v = S => Of(S, !1, c), h = c.onStop = () => {
        const S = xi.get(c);
        if (S) {
            if (s) s(S, 4);
            else
                for (const T of S) T();
            xi.delete(c)
        }
    }, t ? o ? C(!0) : y = c.run() : a ? a(C.bind(null, !0), !0) : c.run(), x.pause = c.pause.bind(c), x.resume = c.resume.bind(c), x.stop = x, x
}

function Vt(e, t = 1 / 0, n) {
    if (t <= 0 || !Oe(e) || e.__v_skip || (n = n || new Set, n.has(e))) return e;
    if (n.add(e), t--, Ue(e)) Vt(e.value, t, n);
    else if (ce(e))
        for (let o = 0; o < e.length; o++) Vt(e[o], t, n);
    else if (so(e) || Gn(e)) e.forEach(o => {
        Vt(o, t, n)
    });
    else if (_s(e)) {
        for (const o in e) Vt(e[o], t, n);
        for (const o of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, o) && Vt(e[o], t, n)
    }
    return e
}
/**
 * @vue/runtime-core v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
function No(e, t, n, o) {
    try {
        return o ? e(...o) : e()
    } catch (i) {
        Ho(i, t, n)
    }
}

function Ct(e, t, n, o) {
    if (ge(e)) {
        const i = No(e, t, n, o);
        return i && Cs(i) && i.catch(r => {
            Ho(r, t, n)
        }), i
    }
    if (ce(e)) {
        const i = [];
        for (let r = 0; r < e.length; r++) i.push(Ct(e[r], t, n, o));
        return i
    }
}

function Ho(e, t, n, o = !0) {
    const i = t ? t.vnode : null,
        {
            errorHandler: r,
            throwUnhandledErrorInProduction: a
        } = t && t.appContext.config || De;
    if (t) {
        let l = t.parent;
        const s = t.proxy,
            u = `https://vuejs.org/error-reference/#runtime-${n}`;
        for (; l;) {
            const c = l.ec;
            if (c) {
                for (let f = 0; f < c.length; f++)
                    if (c[f](e, s, u) === !1) return
            }
            l = l.parent
        }
        if (r) {
            hn(), No(r, null, 10, [e, s, u]), vn();
            return
        }
    }
    Af(e, n, i, o, a)
}

function Af(e, t, n, o = !0, i = !1) {
    if (i) throw e;
    console.error(e)
}
const tt = [];
let Ot = -1;
const Zn = [];
let tn = null,
    Yn = 0;
const Gs = Promise.resolve();
let Si = null;

function Te(e) {
    const t = Si || Gs;
    return e ? t.then(this ? e.bind(this) : e) : t
}

function Pf(e) {
    let t = Ot + 1,
        n = tt.length;
    for (; t < n;) {
        const o = t + n >>> 1,
            i = tt[o],
            r = Bo(i);
        r < e || r === e && i.flags & 2 ? t = o + 1 : n = o
    }
    return t
}

function ga(e) {
    if (!(e.flags & 1)) {
        const t = Bo(e),
            n = tt[tt.length - 1];
        !n || !(e.flags & 2) && t >= Bo(n) ? tt.push(e) : tt.splice(Pf(t), 0, e), e.flags |= 1, qs()
    }
}

function qs() {
    Si || (Si = Gs.then(Zs))
}

function $f(e) {
    ce(e) ? Zn.push(...e) : tn && e.id === -1 ? tn.splice(Yn + 1, 0, e) : e.flags & 1 || (Zn.push(e), e.flags |= 1), qs()
}

function Xa(e, t, n = Ot + 1) {
    for (; n < tt.length; n++) {
        const o = tt[n];
        if (o && o.flags & 2) {
            if (e && o.id !== e.uid) continue;
            tt.splice(n, 1), n--, o.flags & 4 && (o.flags &= -2), o(), o.flags & 4 || (o.flags &= -2)
        }
    }
}

function Xs(e) {
    if (Zn.length) {
        const t = [...new Set(Zn)].sort((n, o) => Bo(n) - Bo(o));
        if (Zn.length = 0, tn) {
            tn.push(...t);
            return
        }
        for (tn = t, Yn = 0; Yn < tn.length; Yn++) {
            const n = tn[Yn];
            n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2
        }
        tn = null, Yn = 0
    }
}
const Bo = e => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;

function Zs(e) {
    try {
        for (Ot = 0; Ot < tt.length; Ot++) {
            const t = tt[Ot];
            t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), No(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2))
        }
    } finally {
        for (; Ot < tt.length; Ot++) {
            const t = tt[Ot];
            t && (t.flags &= -2)
        }
        Ot = -1, tt.length = 0, Xs(), Si = null, (tt.length || Zn.length) && Zs()
    }
}
let We = null,
    Js = null;

function Ci(e) {
    const t = We;
    return We = e, Js = e && e.type.__scopeId || null, t
}

function Rf(e, t = We, n) {
    if (!t || e._n) return e;
    const o = (...i) => {
        o._d && ul(-1);
        const r = Ci(t);
        let a;
        try {
            a = e(...i)
        } finally {
            Ci(r), o._d && ul(1)
        }
        return a
    };
    return o._n = !0, o._c = !0, o._d = !0, o
}

function Wt(e, t) {
    if (We === null) return e;
    const n = Gi(We),
        o = e.dirs || (e.dirs = []);
    for (let i = 0; i < t.length; i++) {
        let [r, a, l, s = De] = t[i];
        r && (ge(r) && (r = {
            mounted: r,
            updated: r
        }), r.deep && Vt(a), o.push({
            dir: r,
            instance: n,
            value: a,
            oldValue: void 0,
            arg: l,
            modifiers: s
        }))
    }
    return e
}

function wn(e, t, n, o) {
    const i = e.dirs,
        r = t && t.dirs;
    for (let a = 0; a < i.length; a++) {
        const l = i[a];
        r && (l.oldValue = r[a].value);
        let s = l.dir[o];
        s && (hn(), Ct(s, n, 8, [e.el, l, e, t]), vn())
    }
}
const Qs = Symbol("_vte"),
    ec = e => e.__isTeleport,
    Do = e => e && (e.disabled || e.disabled === ""),
    Za = e => e && (e.defer || e.defer === ""),
    Ja = e => typeof SVGElement < "u" && e instanceof SVGElement,
    Qa = e => typeof MathMLElement == "function" && e instanceof MathMLElement,
    Pr = (e, t) => {
        const n = e && e.to;
        return Pe(n) ? t ? t(n) : null : n
    },
    tc = {
        name: "Teleport",
        __isTeleport: !0,
        process(e, t, n, o, i, r, a, l, s, u) {
            const {
                mc: c,
                pc: f,
                pbc: h,
                o: {
                    insert: v,
                    querySelector: m,
                    createText: w,
                    createComment: g
                }
            } = u, x = Do(t.props);
            let {
                shapeFlag: y,
                children: C,
                dynamicChildren: S
            } = t;
            if (e == null) {
                const T = t.el = w(""),
                    O = t.anchor = w("");
                v(T, n, o), v(O, n, o);
                const z = ($, D) => {
                        y & 16 && (i && i.isCE && (i.ce._teleportTarget = $), c(C, $, D, i, r, a, l, s))
                    },
                    P = () => {
                        const $ = t.target = Pr(t.props, m),
                            D = nc($, t, w, v);
                        $ && (a !== "svg" && Ja($) ? a = "svg" : a !== "mathml" && Qa($) && (a = "mathml"), x || (z($, D), hi(t, !1)))
                    };
                x && (z(n, O), hi(t, !0)), Za(t.props) ? He(() => {
                    P(), t.el.__isMounted = !0
                }, r) : P()
            } else {
                if (Za(t.props) && !e.el.__isMounted) {
                    He(() => {
                        tc.process(e, t, n, o, i, r, a, l, s, u), delete e.el.__isMounted
                    }, r);
                    return
                }
                t.el = e.el, t.targetStart = e.targetStart;
                const T = t.anchor = e.anchor,
                    O = t.target = e.target,
                    z = t.targetAnchor = e.targetAnchor,
                    P = Do(e.props),
                    $ = P ? n : O,
                    D = P ? T : z;
                if (a === "svg" || Ja(O) ? a = "svg" : (a === "mathml" || Qa(O)) && (a = "mathml"), S ? (h(e.dynamicChildren, S, $, i, r, a, l), xa(e, t, !0)) : s || f(e, t, $, D, i, r, a, l, !1), x) P ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Qo(t, n, T, u, 1);
                else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
                    const p = t.target = Pr(t.props, m);
                    p && Qo(t, p, null, u, 0)
                } else P && Qo(t, O, z, u, 1);
                hi(t, x)
            }
        },
        remove(e, t, n, {
            um: o,
            o: {
                remove: i
            }
        }, r) {
            const {
                shapeFlag: a,
                children: l,
                anchor: s,
                targetStart: u,
                targetAnchor: c,
                target: f,
                props: h
            } = e;
            if (f && (i(u), i(c)), r && i(s), a & 16) {
                const v = r || !Do(h);
                for (let m = 0; m < l.length; m++) {
                    const w = l[m];
                    o(w, t, n, v, !!w.dynamicChildren)
                }
            }
        },
        move: Qo,
        hydrate: Bf
    };

function Qo(e, t, n, {
    o: {
        insert: o
    },
    m: i
}, r = 2) {
    r === 0 && o(e.targetAnchor, t, n);
    const {
        el: a,
        anchor: l,
        shapeFlag: s,
        children: u,
        props: c
    } = e, f = r === 2;
    if (f && o(a, t, n), (!f || Do(c)) && s & 16)
        for (let h = 0; h < u.length; h++) i(u[h], t, n, 2);
    f && o(l, t, n)
}

function Bf(e, t, n, o, i, r, {
    o: {
        nextSibling: a,
        parentNode: l,
        querySelector: s,
        insert: u,
        createText: c
    }
}, f) {
    const h = t.target = Pr(t.props, s);
    if (h) {
        const v = Do(t.props),
            m = h._lpa || h.firstChild;
        if (t.shapeFlag & 16)
            if (v) t.anchor = f(a(e), t, l(e), n, o, i, r), t.targetStart = m, t.targetAnchor = m && a(m);
            else {
                t.anchor = a(e);
                let w = m;
                for (; w;) {
                    if (w && w.nodeType === 8) {
                        if (w.data === "teleport start anchor") t.targetStart = w;
                        else if (w.data === "teleport anchor") {
                            t.targetAnchor = w, h._lpa = t.targetAnchor && a(t.targetAnchor);
                            break
                        }
                    }
                    w = a(w)
                }
                t.targetAnchor || nc(h, t, c, u), f(m && a(m), t, h, n, o, i, r)
            }
        hi(t, v)
    }
    return t.anchor && a(t.anchor)
}
const ji = tc;

function hi(e, t) {
    const n = e.ctx;
    if (n && n.ut) {
        let o, i;
        for (t ? (o = e.el, i = e.anchor) : (o = e.targetStart, i = e.targetAnchor); o && o !== i;) o.nodeType === 1 && o.setAttribute("data-v-owner", n.uid), o = o.nextSibling;
        n.ut()
    }
}

function nc(e, t, n, o) {
    const i = t.targetStart = n(""),
        r = t.targetAnchor = n("");
    return i[Qs] = r, e && (o(i, e), o(r, e)), r
}
const nn = Symbol("_leaveCb"),
    ei = Symbol("_enterCb");

function Mf() {
    const e = {
        isMounted: !1,
        isLeaving: !1,
        isUnmounting: !1,
        leavingVNodes: new Map
    };
    return Ge(() => {
        e.isMounted = !0
    }), Tt(() => {
        e.isUnmounting = !0
    }), e
}
const dt = [Function, Array],
    oc = {
        mode: String,
        appear: Boolean,
        persisted: Boolean,
        onBeforeEnter: dt,
        onEnter: dt,
        onAfterEnter: dt,
        onEnterCancelled: dt,
        onBeforeLeave: dt,
        onLeave: dt,
        onAfterLeave: dt,
        onLeaveCancelled: dt,
        onBeforeAppear: dt,
        onAppear: dt,
        onAfterAppear: dt,
        onAppearCancelled: dt
    },
    ic = e => {
        const t = e.subTree;
        return t.component ? ic(t.component) : t
    },
    Ff = {
        name: "BaseTransition",
        props: oc,
        setup(e, {
            slots: t
        }) {
            const n = bt(),
                o = Mf();
            return () => {
                const i = t.default && lc(t.default(), !0);
                if (!i || !i.length) return;
                const r = rc(i),
                    a = xe(e),
                    {
                        mode: l
                    } = a;
                if (o.isLeaving) return cr(r);
                const s = el(r);
                if (!s) return cr(r);
                let u = $r(s, a, o, n, f => u = f);
                s.type !== Qe && to(s, u);
                let c = n.subTree && el(n.subTree);
                if (c && c.type !== Qe && !rn(s, c) && ic(n).type !== Qe) {
                    let f = $r(c, a, o, n);
                    if (to(c, f), l === "out-in" && s.type !== Qe) return o.isLeaving = !0, f.afterLeave = () => {
                        o.isLeaving = !1, n.job.flags & 8 || n.update(), delete f.afterLeave, c = void 0
                    }, cr(r);
                    l === "in-out" && s.type !== Qe ? f.delayLeave = (h, v, m) => {
                        const w = ac(o, c);
                        w[String(c.key)] = c, h[nn] = () => {
                            v(), h[nn] = void 0, delete u.delayedLeave, c = void 0
                        }, u.delayedLeave = () => {
                            m(), delete u.delayedLeave, c = void 0
                        }
                    } : c = void 0
                } else c && (c = void 0);
                return r
            }
        }
    };

function rc(e) {
    let t = e[0];
    if (e.length > 1) {
        for (const n of e)
            if (n.type !== Qe) {
                t = n;
                break
            }
    }
    return t
}
const Vf = Ff;

function ac(e, t) {
    const {
        leavingVNodes: n
    } = e;
    let o = n.get(t.type);
    return o || (o = Object.create(null), n.set(t.type, o)), o
}

function $r(e, t, n, o, i) {
    const {
        appear: r,
        mode: a,
        persisted: l = !1,
        onBeforeEnter: s,
        onEnter: u,
        onAfterEnter: c,
        onEnterCancelled: f,
        onBeforeLeave: h,
        onLeave: v,
        onAfterLeave: m,
        onLeaveCancelled: w,
        onBeforeAppear: g,
        onAppear: x,
        onAfterAppear: y,
        onAppearCancelled: C
    } = t, S = String(e.key), T = ac(n, e), O = ($, D) => {
        $ && Ct($, o, 9, D)
    }, z = ($, D) => {
        const p = D[1];
        O($, D), ce($) ? $.every(_ => _.length <= 1) && p() : $.length <= 1 && p()
    }, P = {
        mode: a,
        persisted: l,
        beforeEnter($) {
            let D = s;
            if (!n.isMounted)
                if (r) D = g || s;
                else return;
            $[nn] && $[nn](!0);
            const p = T[S];
            p && rn(e, p) && p.el[nn] && p.el[nn](), O(D, [$])
        },
        enter($) {
            let D = u,
                p = c,
                _ = f;
            if (!n.isMounted)
                if (r) D = x || u, p = y || c, _ = C || f;
                else return;
            let A = !1;
            const X = $[ei] = le => {
                A || (A = !0, le ? O(_, [$]) : O(p, [$]), P.delayedLeave && P.delayedLeave(), $[ei] = void 0)
            };
            D ? z(D, [$, X]) : X()
        },
        leave($, D) {
            const p = String(e.key);
            if ($[ei] && $[ei](!0), n.isUnmounting) return D();
            O(h, [$]);
            let _ = !1;
            const A = $[nn] = X => {
                _ || (_ = !0, D(), X ? O(w, [$]) : O(m, [$]), $[nn] = void 0, T[p] === e && delete T[p])
            };
            T[p] = e, v ? z(v, [$, A]) : A()
        },
        clone($) {
            const D = $r($, t, n, o, i);
            return i && i(D), D
        }
    };
    return P
}

function cr(e) {
    if (zo(e)) return e = Ut(e), e.children = null, e
}

function el(e) {
    if (!zo(e)) return ec(e.type) && e.children ? rc(e.children) : e;
    const {
        shapeFlag: t,
        children: n
    } = e;
    if (n) {
        if (t & 16) return n[0];
        if (t & 32 && ge(n.default)) return n.default()
    }
}

function to(e, t) {
    e.shapeFlag & 6 && e.component ? (e.transition = t, to(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
}

function lc(e, t = !1, n) {
    let o = [],
        i = 0;
    for (let r = 0; r < e.length; r++) {
        let a = e[r];
        const l = n == null ? a.key : String(n) + String(a.key != null ? a.key : r);
        a.type === Je ? (a.patchFlag & 128 && i++, o = o.concat(lc(a.children, t, l))) : (t || a.type !== Qe) && o.push(l != null ? Ut(a, {
            key: l
        }) : a)
    }
    if (i > 1)
        for (let r = 0; r < o.length; r++) o[r].patchFlag = -2;
    return o
} /*! #__NO_SIDE_EFFECTS__ */
function re(e, t) {
    return ge(e) ? Ye({
        name: e.name
    }, t, {
        setup: e
    }) : e
}

function ma(e) {
    e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0]
}

function Ti(e, t, n, o, i = !1) {
    if (ce(e)) {
        e.forEach((m, w) => Ti(m, t && (ce(t) ? t[w] : t), n, o, i));
        return
    }
    if (An(o) && !i) {
        o.shapeFlag & 512 && o.type.__asyncResolved && o.component.subTree.component && Ti(e, t, n, o.component.subTree);
        return
    }
    const r = o.shapeFlag & 4 ? Gi(o.component) : o.el,
        a = i ? null : r,
        {
            i: l,
            r: s
        } = e,
        u = t && t.r,
        c = l.refs === De ? l.refs = {} : l.refs,
        f = l.setupState,
        h = xe(f),
        v = f === De ? () => !1 : m => Ce(h, m);
    if (u != null && u !== s && (Pe(u) ? (c[u] = null, v(u) && (f[u] = null)) : Ue(u) && (u.value = null)), ge(s)) No(s, l, 12, [a, c]);
    else {
        const m = Pe(s),
            w = Ue(s);
        if (m || w) {
            const g = () => {
                if (e.f) {
                    const x = m ? v(s) ? f[s] : c[s] : s.value;
                    i ? ce(x) && ra(x, r) : ce(x) ? x.includes(r) || x.push(r) : m ? (c[s] = [r], v(s) && (f[s] = c[s])) : (s.value = [r], e.k && (c[e.k] = s.value))
                } else m ? (c[s] = a, v(s) && (f[s] = a)) : w && (s.value = a, e.k && (c[e.k] = a))
            };
            a ? (g.id = -1, He(g, n)) : g()
        }
    }
}
const tl = e => e.nodeType === 8;
Li().requestIdleCallback;
Li().cancelIdleCallback;

function Lf(e, t) {
    if (tl(e) && e.data === "[") {
        let n = 1,
            o = e.nextSibling;
        for (; o;) {
            if (o.nodeType === 1) {
                if (t(o) === !1) break
            } else if (tl(o))
                if (o.data === "]") {
                    if (--n === 0) break
                } else o.data === "[" && n++;
            o = o.nextSibling
        }
    } else t(e)
}
const An = e => !!e.type.__asyncLoader; /*! #__NO_SIDE_EFFECTS__ */
function p0(e) {
    ge(e) && (e = {
        loader: e
    });
    const {
        loader: t,
        loadingComponent: n,
        errorComponent: o,
        delay: i = 200,
        hydrate: r,
        timeout: a,
        suspensible: l = !0,
        onError: s
    } = e;
    let u = null,
        c, f = 0;
    const h = () => (f++, u = null, v()),
        v = () => {
            let m;
            return u || (m = u = t().catch(w => {
                if (w = w instanceof Error ? w : new Error(String(w)), s) return new Promise((g, x) => {
                    s(w, () => g(h()), () => x(w), f + 1)
                });
                throw w
            }).then(w => m !== u && u ? u : (w && (w.__esModule || w[Symbol.toStringTag] === "Module") && (w = w.default), c = w, w)))
        };
    return re({
        name: "AsyncComponentWrapper",
        __asyncLoader: v,
        __asyncHydrate(m, w, g) {
            const x = r ? () => {
                const y = r(g, C => Lf(m, C));
                y && (w.bum || (w.bum = [])).push(y)
            } : g;
            c ? x() : v().then(() => !w.isUnmounted && x())
        },
        get __asyncResolved() {
            return c
        },
        setup() {
            const m = je;
            if (ma(m), c) return () => ur(c, m);
            const w = C => {
                u = null, Ho(C, m, 13, !o)
            };
            if (l && m.suspense || no) return v().then(C => () => ur(C, m)).catch(C => (w(C), () => o ? d(o, {
                error: C
            }) : null));
            const g = N(!1),
                x = N(),
                y = N(!!i);
            return i && setTimeout(() => {
                y.value = !1
            }, i), a != null && setTimeout(() => {
                if (!g.value && !x.value) {
                    const C = new Error(`Async component timed out after ${a}ms.`);
                    w(C), x.value = C
                }
            }, a), v().then(() => {
                g.value = !0, m.parent && zo(m.parent.vnode) && m.parent.update()
            }).catch(C => {
                w(C), x.value = C
            }), () => {
                if (g.value && c) return ur(c, m);
                if (x.value && o) return d(o, {
                    error: x.value
                });
                if (n && !y.value) return d(n)
            }
        }
    })
}

function ur(e, t) {
    const {
        ref: n,
        props: o,
        children: i,
        ce: r
    } = t.vnode, a = d(e, o, i);
    return a.ref = n, a.ce = r, delete t.vnode.ce, a
}
const zo = e => e.type.__isKeepAlive,
    Nf = {
        name: "KeepAlive",
        __isKeepAlive: !0,
        props: {
            include: [String, RegExp, Array],
            exclude: [String, RegExp, Array],
            max: [String, Number]
        },
        setup(e, {
            slots: t
        }) {
            const n = bt(),
                o = n.ctx;
            if (!o.renderer) return () => {
                const y = t.default && t.default();
                return y && y.length === 1 ? y[0] : y
            };
            const i = new Map,
                r = new Set;
            let a = null;
            const l = n.suspense,
                {
                    renderer: {
                        p: s,
                        m: u,
                        um: c,
                        o: {
                            createElement: f
                        }
                    }
                } = o,
                h = f("div");
            o.activate = (y, C, S, T, O) => {
                const z = y.component;
                u(y, C, S, 0, l), s(z.vnode, y, C, S, z, l, T, y.slotScopeIds, O), He(() => {
                    z.isDeactivated = !1, z.a && qn(z.a);
                    const P = y.props && y.props.onVnodeMounted;
                    P && vt(P, z.parent, y)
                }, l)
            }, o.deactivate = y => {
                const C = y.component;
                Ei(C.m), Ei(C.a), u(y, h, null, 1, l), He(() => {
                    C.da && qn(C.da);
                    const S = y.props && y.props.onVnodeUnmounted;
                    S && vt(S, C.parent, y), C.isDeactivated = !0
                }, l)
            };

            function v(y) {
                fr(y), c(y, n, l, !0)
            }

            function m(y) {
                i.forEach((C, S) => {
                    const T = Hr(C.type);
                    T && !y(T) && w(S)
                })
            }

            function w(y) {
                const C = i.get(y);
                C && (!a || !rn(C, a)) ? v(C) : a && fr(a), i.delete(y), r.delete(y)
            }
            ie(() => [e.include, e.exclude], ([y, C]) => {
                y && m(S => Co(y, S)), C && m(S => !Co(C, S))
            }, {
                flush: "post",
                deep: !0
            });
            let g = null;
            const x = () => {
                g != null && (ki(n.subTree.type) ? He(() => {
                    i.set(g, ti(n.subTree))
                }, n.subTree.suspense) : i.set(g, ti(n.subTree)))
            };
            return Ge(x), ya(x), Tt(() => {
                i.forEach(y => {
                    const {
                        subTree: C,
                        suspense: S
                    } = n, T = ti(C);
                    if (y.type === T.type && y.key === T.key) {
                        fr(T);
                        const O = T.component.da;
                        O && He(O, S);
                        return
                    }
                    v(y)
                })
            }), () => {
                if (g = null, !t.default) return a = null;
                const y = t.default(),
                    C = y[0];
                if (y.length > 1) return a = null, y;
                if (!Bn(C) || !(C.shapeFlag & 4) && !(C.shapeFlag & 128)) return a = null, C;
                let S = ti(C);
                if (S.type === Qe) return a = null, S;
                const T = S.type,
                    O = Hr(An(S) ? S.type.__asyncResolved || {} : T),
                    {
                        include: z,
                        exclude: P,
                        max: $
                    } = e;
                if (z && (!O || !Co(z, O)) || P && O && Co(P, O)) return S.shapeFlag &= -257, a = S, C;
                const D = S.key == null ? T : S.key,
                    p = i.get(D);
                return S.el && (S = Ut(S), C.shapeFlag & 128 && (C.ssContent = S)), g = D, p ? (S.el = p.el, S.component = p.component, S.transition && to(S, S.transition), S.shapeFlag |= 512, r.delete(D), r.add(D)) : (r.add(D), $ && r.size > parseInt($, 10) && w(r.values().next().value)), S.shapeFlag |= 256, a = S, ki(C.type) ? C : S
            }
        }
    },
    w0 = Nf;

function Co(e, t) {
    return ce(e) ? e.some(n => Co(n, t)) : Pe(e) ? e.split(",").includes(t) : Nu(e) ? (e.lastIndex = 0, e.test(t)) : !1
}

function gn(e, t) {
    sc(e, "a", t)
}

function qt(e, t) {
    sc(e, "da", t)
}

function sc(e, t, n = je) {
    const o = e.__wdc || (e.__wdc = () => {
        let i = n;
        for (; i;) {
            if (i.isDeactivated) return;
            i = i.parent
        }
        return e()
    });
    if (Wi(t, o, n), n) {
        let i = n.parent;
        for (; i && i.parent;) zo(i.parent.vnode) && Hf(o, t, n, i), i = i.parent
    }
}

function Hf(e, t, n, o) {
    const i = Wi(t, e, o, !0);
    jo(() => {
        ra(o[t], i)
    }, n)
}

function fr(e) {
    e.shapeFlag &= -257, e.shapeFlag &= -513
}

function ti(e) {
    return e.shapeFlag & 128 ? e.ssContent : e
}

function Wi(e, t, n = je, o = !1) {
    if (n) {
        const i = n[e] || (n[e] = []),
            r = t.__weh || (t.__weh = (...a) => {
                hn();
                const l = Wo(n),
                    s = Ct(t, n, e, a);
                return l(), vn(), s
            });
        return o ? i.unshift(r) : i.push(r), r
    }
}
const Xt = e => (t, n = je) => {
        (!no || e === "sp") && Wi(e, (...o) => t(...o), n)
    },
    zf = Xt("bm"),
    Ge = Xt("m"),
    cc = Xt("bu"),
    ya = Xt("u"),
    Tt = Xt("bum"),
    jo = Xt("um"),
    jf = Xt("sp"),
    Wf = Xt("rtg"),
    Uf = Xt("rtc");

function Yf(e, t = je) {
    Wi("ec", e, t)
}
const ba = "components",
    Kf = "directives";

function x0(e, t) {
    return pa(ba, e, !0, t) || e
}
const uc = Symbol.for("v-ndc");

function S0(e) {
    return Pe(e) ? pa(ba, e, !1) || e : e || uc
}

function Gf(e) {
    return pa(Kf, e)
}

function pa(e, t, n = !0, o = !1) {
    const i = We || je;
    if (i) {
        const r = i.type;
        if (e === ba) {
            const l = Hr(r, !1);
            if (l && (l === t || l === yt(t) || l === Vi(yt(t)))) return r
        }
        const a = nl(i[e] || r[e], t) || nl(i.appContext[e], t);
        return !a && o ? r : a
    }
}

function nl(e, t) {
    return e && (e[t] || e[yt(t)] || e[Vi(yt(t))])
}

function C0(e, t, n, o) {
    let i;
    const r = n,
        a = ce(e);
    if (a || Pe(e)) {
        const l = a && Xn(e);
        let s = !1;
        l && (s = !gt(e), e = zi(e)), i = new Array(e.length);
        for (let u = 0, c = e.length; u < c; u++) i[u] = t(s ? Ze(e[u]) : e[u], u, void 0, r)
    } else if (typeof e == "number") {
        i = new Array(e);
        for (let l = 0; l < e; l++) i[l] = t(l + 1, l, void 0, r)
    } else if (Oe(e))
        if (e[Symbol.iterator]) i = Array.from(e, (l, s) => t(l, s, void 0, r));
        else {
            const l = Object.keys(e);
            i = new Array(l.length);
            for (let s = 0, u = l.length; s < u; s++) {
                const c = l[s];
                i[s] = t(e[c], c, s, r)
            }
        }
    else i = [];
    return i
}

function T0(e, t, n = {}, o, i) {
    if (We.ce || We.parent && An(We.parent) && We.parent.ce) return t !== "default" && (n.name = t), Vr(), Lr(Je, null, [d("slot", n, o && o())], 64);
    let r = e[t];
    r && r._c && (r._d = !1), Vr();
    const a = r && fc(r(n)),
        l = n.key || a && a.key,
        s = Lr(Je, {
            key: (l && !St(l) ? l : `_${t}`) + (!a && o ? "_fb" : "")
        }, a || (o ? o() : []), a && e._ === 1 ? 64 : -2);
    return !i && s.scopeId && (s.slotScopeIds = [s.scopeId + "-s"]), r && r._c && (r._d = !0), s
}

function fc(e) {
    return e.some(t => Bn(t) ? !(t.type === Qe || t.type === Je && !fc(t.children)) : !0) ? e : null
}
const Rr = e => e ? Ac(e) ? Gi(e) : Rr(e.parent) : null,
    Oo = Ye(Object.create(null), {
        $: e => e,
        $el: e => e.vnode.el,
        $data: e => e.data,
        $props: e => e.props,
        $attrs: e => e.attrs,
        $slots: e => e.slots,
        $refs: e => e.refs,
        $parent: e => Rr(e.parent),
        $root: e => Rr(e.root),
        $host: e => e.ce,
        $emit: e => e.emit,
        $options: e => hc(e),
        $forceUpdate: e => e.f || (e.f = () => {
            ga(e.update)
        }),
        $nextTick: e => e.n || (e.n = Te.bind(e.proxy)),
        $watch: e => md.bind(e)
    }),
    dr = (e, t) => e !== De && !e.__isScriptSetup && Ce(e, t),
    qf = {
        get({
            _: e
        }, t) {
            if (t === "__v_skip") return !0;
            const {
                ctx: n,
                setupState: o,
                data: i,
                props: r,
                accessCache: a,
                type: l,
                appContext: s
            } = e;
            let u;
            if (t[0] !== "$") {
                const v = a[t];
                if (v !== void 0) switch (v) {
                    case 1:
                        return o[t];
                    case 2:
                        return i[t];
                    case 4:
                        return n[t];
                    case 3:
                        return r[t]
                } else {
                    if (dr(o, t)) return a[t] = 1, o[t];
                    if (i !== De && Ce(i, t)) return a[t] = 2, i[t];
                    if ((u = e.propsOptions[0]) && Ce(u, t)) return a[t] = 3, r[t];
                    if (n !== De && Ce(n, t)) return a[t] = 4, n[t];
                    Br && (a[t] = 0)
                }
            }
            const c = Oo[t];
            let f, h;
            if (c) return t === "$attrs" && Xe(e.attrs, "get", ""), c(e);
            if ((f = l.__cssModules) && (f = f[t])) return f;
            if (n !== De && Ce(n, t)) return a[t] = 4, n[t];
            if (h = s.config.globalProperties, Ce(h, t)) return h[t]
        },
        set({
            _: e
        }, t, n) {
            const {
                data: o,
                setupState: i,
                ctx: r
            } = e;
            return dr(i, t) ? (i[t] = n, !0) : o !== De && Ce(o, t) ? (o[t] = n, !0) : Ce(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = n, !0)
        },
        has({
            _: {
                data: e,
                setupState: t,
                accessCache: n,
                ctx: o,
                appContext: i,
                propsOptions: r
            }
        }, a) {
            let l;
            return !!n[a] || e !== De && Ce(e, a) || dr(t, a) || (l = r[0]) && Ce(l, a) || Ce(o, a) || Ce(Oo, a) || Ce(i.config.globalProperties, a)
        },
        defineProperty(e, t, n) {
            return n.get != null ? e._.accessCache[t] = 0 : Ce(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n)
        }
    };

function _0() {
    return Xf().slots
}

function Xf() {
    const e = bt();
    return e.setupContext || (e.setupContext = $c(e))
}

function ol(e) {
    return ce(e) ? e.reduce((t, n) => (t[n] = null, t), {}) : e
}
let Br = !0;

function Zf(e) {
    const t = hc(e),
        n = e.proxy,
        o = e.ctx;
    Br = !1, t.beforeCreate && il(t.beforeCreate, e, "bc");
    const {
        data: i,
        computed: r,
        methods: a,
        watch: l,
        provide: s,
        inject: u,
        created: c,
        beforeMount: f,
        mounted: h,
        beforeUpdate: v,
        updated: m,
        activated: w,
        deactivated: g,
        beforeDestroy: x,
        beforeUnmount: y,
        destroyed: C,
        unmounted: S,
        render: T,
        renderTracked: O,
        renderTriggered: z,
        errorCaptured: P,
        serverPrefetch: $,
        expose: D,
        inheritAttrs: p,
        components: _,
        directives: A,
        filters: X
    } = t;
    if (u && Jf(u, o, null), a)
        for (const G in a) {
            const Q = a[G];
            ge(Q) && (o[G] = Q.bind(n))
        }
    if (i) {
        const G = i.call(n, n);
        Oe(G) && (e.data = Ke(G))
    }
    if (Br = !0, r)
        for (const G in r) {
            const Q = r[G],
                be = ge(Q) ? Q.bind(n, n) : ge(Q.get) ? Q.get.bind(n, n) : At,
                ke = !ge(Q) && ge(Q.set) ? Q.set.bind(n) : At,
                Z = j({
                    get: be,
                    set: ke
                });
            Object.defineProperty(o, G, {
                enumerable: !0,
                configurable: !0,
                get: () => Z.value,
                set: R => Z.value = R
            })
        }
    if (l)
        for (const G in l) dc(l[G], o, n, G);
    if (s) {
        const G = ge(s) ? s.call(n) : s;
        Reflect.ownKeys(G).forEach(Q => {
            uo(Q, G[Q])
        })
    }
    c && il(c, e, "c");

    function L(G, Q) {
        ce(Q) ? Q.forEach(be => G(be.bind(n))) : Q && G(Q.bind(n))
    }
    if (L(zf, f), L(Ge, h), L(cc, v), L(ya, m), L(gn, w), L(qt, g), L(Yf, P), L(Uf, O), L(Wf, z), L(Tt, y), L(jo, S), L(jf, $), ce(D))
        if (D.length) {
            const G = e.exposed || (e.exposed = {});
            D.forEach(Q => {
                Object.defineProperty(G, Q, {
                    get: () => n[Q],
                    set: be => n[Q] = be
                })
            })
        } else e.exposed || (e.exposed = {});
    T && e.render === At && (e.render = T), p != null && (e.inheritAttrs = p), _ && (e.components = _), A && (e.directives = A), $ && ma(e)
}

function Jf(e, t, n = At) {
    ce(e) && (e = Mr(e));
    for (const o in e) {
        const i = e[o];
        let r;
        Oe(i) ? "default" in i ? r = Ht(i.from || o, i.default, !0) : r = Ht(i.from || o) : r = Ht(i), Ue(r) ? Object.defineProperty(t, o, {
            enumerable: !0,
            configurable: !0,
            get: () => r.value,
            set: a => r.value = a
        }) : t[o] = r
    }
}

function il(e, t, n) {
    Ct(ce(e) ? e.map(o => o.bind(t.proxy)) : e.bind(t.proxy), t, n)
}

function dc(e, t, n, o) {
    let i = o.includes(".") ? _c(n, o) : () => n[o];
    if (Pe(e)) {
        const r = t[e];
        ge(r) && ie(i, r)
    } else if (ge(e)) ie(i, e.bind(n));
    else if (Oe(e))
        if (ce(e)) e.forEach(r => dc(r, t, n, o));
        else {
            const r = ge(e.handler) ? e.handler.bind(n) : t[e.handler];
            ge(r) && ie(i, r, e)
        }
}

function hc(e) {
    const t = e.type,
        {
            mixins: n,
            extends: o
        } = t,
        {
            mixins: i,
            optionsCache: r,
            config: {
                optionMergeStrategies: a
            }
        } = e.appContext,
        l = r.get(t);
    let s;
    return l ? s = l : !i.length && !n && !o ? s = t : (s = {}, i.length && i.forEach(u => _i(s, u, a, !0)), _i(s, t, a)), Oe(t) && r.set(t, s), s
}

function _i(e, t, n, o = !1) {
    const {
        mixins: i,
        extends: r
    } = t;
    r && _i(e, r, n, !0), i && i.forEach(a => _i(e, a, n, !0));
    for (const a in t)
        if (!(o && a === "expose")) {
            const l = Qf[a] || n && n[a];
            e[a] = l ? l(e[a], t[a]) : t[a]
        }
    return e
}
const Qf = {
    data: rl,
    props: al,
    emits: al,
    methods: To,
    computed: To,
    beforeCreate: et,
    created: et,
    beforeMount: et,
    mounted: et,
    beforeUpdate: et,
    updated: et,
    beforeDestroy: et,
    beforeUnmount: et,
    destroyed: et,
    unmounted: et,
    activated: et,
    deactivated: et,
    errorCaptured: et,
    serverPrefetch: et,
    components: To,
    directives: To,
    watch: td,
    provide: rl,
    inject: ed
};

function rl(e, t) {
    return t ? e ? function() {
        return Ye(ge(e) ? e.call(this, this) : e, ge(t) ? t.call(this, this) : t)
    } : t : e
}

function ed(e, t) {
    return To(Mr(e), Mr(t))
}

function Mr(e) {
    if (ce(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
        return t
    }
    return e
}

function et(e, t) {
    return e ? [...new Set([].concat(e, t))] : t
}

function To(e, t) {
    return e ? Ye(Object.create(null), e, t) : t
}

function al(e, t) {
    return e ? ce(e) && ce(t) ? [...new Set([...e, ...t])] : Ye(Object.create(null), ol(e), ol(t ?? {})) : t
}

function td(e, t) {
    if (!e) return t;
    if (!t) return e;
    const n = Ye(Object.create(null), e);
    for (const o in t) n[o] = et(e[o], t[o]);
    return n
}

function vc() {
    return {
        app: null,
        config: {
            isNativeTag: Vu,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap,
        propsCache: new WeakMap,
        emitsCache: new WeakMap
    }
}
let nd = 0;

function od(e, t) {
    return function(o, i = null) {
        ge(o) || (o = Ye({}, o)), i != null && !Oe(i) && (i = null);
        const r = vc(),
            a = new WeakSet,
            l = [];
        let s = !1;
        const u = r.app = {
            _uid: nd++,
            _component: o,
            _props: i,
            _container: null,
            _context: r,
            _instance: null,
            version: Bd,
            get config() {
                return r.config
            },
            set config(c) {},
            use(c, ...f) {
                return a.has(c) || (c && ge(c.install) ? (a.add(c), c.install(u, ...f)) : ge(c) && (a.add(c), c(u, ...f))), u
            },
            mixin(c) {
                return r.mixins.includes(c) || r.mixins.push(c), u
            },
            component(c, f) {
                return f ? (r.components[c] = f, u) : r.components[c]
            },
            directive(c, f) {
                return f ? (r.directives[c] = f, u) : r.directives[c]
            },
            mount(c, f, h) {
                if (!s) {
                    const v = u._ceVNode || d(o, i);
                    return v.appContext = r, h === !0 ? h = "svg" : h === !1 && (h = void 0), e(v, c, h), s = !0, u._container = c, c.__vue_app__ = u, Gi(v.component)
                }
            },
            onUnmount(c) {
                l.push(c)
            },
            unmount() {
                s && (Ct(l, u._instance, 16), e(null, u._container), delete u._container.__vue_app__)
            },
            provide(c, f) {
                return r.provides[c] = f, u
            },
            runWithContext(c) {
                const f = Jn;
                Jn = u;
                try {
                    return c()
                } finally {
                    Jn = f
                }
            }
        };
        return u
    }
}
let Jn = null;

function uo(e, t) {
    if (je) {
        let n = je.provides;
        const o = je.parent && je.parent.provides;
        o === n && (n = je.provides = Object.create(o)), n[e] = t
    }
}

function Ht(e, t, n = !1) {
    const o = je || We;
    if (o || Jn) {
        const i = Jn ? Jn._context.provides : o ? o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : void 0;
        if (i && e in i) return i[e];
        if (arguments.length > 1) return n && ge(t) ? t.call(o && o.proxy) : t
    }
}
const gc = {},
    mc = () => Object.create(gc),
    yc = e => Object.getPrototypeOf(e) === gc;

function id(e, t, n, o = !1) {
    const i = {},
        r = mc();
    e.propsDefaults = Object.create(null), bc(e, t, i, r);
    for (const a in e.propsOptions[0]) a in i || (i[a] = void 0);
    n ? e.props = o ? i : xf(i) : e.type.props ? e.props = i : e.props = r, e.attrs = r
}

function rd(e, t, n, o) {
    const {
        props: i,
        attrs: r,
        vnode: {
            patchFlag: a
        }
    } = e, l = xe(i), [s] = e.propsOptions;
    let u = !1;
    if ((o || a > 0) && !(a & 16)) {
        if (a & 8) {
            const c = e.vnode.dynamicProps;
            for (let f = 0; f < c.length; f++) {
                let h = c[f];
                if (Yi(e.emitsOptions, h)) continue;
                const v = t[h];
                if (s)
                    if (Ce(r, h)) v !== r[h] && (r[h] = v, u = !0);
                    else {
                        const m = yt(h);
                        i[m] = Fr(s, l, m, v, e, !1)
                    }
                else v !== r[h] && (r[h] = v, u = !0)
            }
        }
    } else {
        bc(e, t, i, r) && (u = !0);
        let c;
        for (const f in l)(!t || !Ce(t, f) && ((c = Gt(f)) === f || !Ce(t, c))) && (s ? n && (n[f] !== void 0 || n[c] !== void 0) && (i[f] = Fr(s, l, f, void 0, e, !0)) : delete i[f]);
        if (r !== l)
            for (const f in r)(!t || !Ce(t, f)) && (delete r[f], u = !0)
    }
    u && Ft(e.attrs, "set", "")
}

function bc(e, t, n, o) {
    const [i, r] = e.propsOptions;
    let a = !1,
        l;
    if (t)
        for (let s in t) {
            if (_o(s)) continue;
            const u = t[s];
            let c;
            i && Ce(i, c = yt(s)) ? !r || !r.includes(c) ? n[c] = u : (l || (l = {}))[c] = u : Yi(e.emitsOptions, s) || (!(s in o) || u !== o[s]) && (o[s] = u, a = !0)
        }
    if (r) {
        const s = xe(n),
            u = l || De;
        for (let c = 0; c < r.length; c++) {
            const f = r[c];
            n[f] = Fr(i, s, f, u[f], e, !Ce(u, f))
        }
    }
    return a
}

function Fr(e, t, n, o, i, r) {
    const a = e[n];
    if (a != null) {
        const l = Ce(a, "default");
        if (l && o === void 0) {
            const s = a.default;
            if (a.type !== Function && !a.skipFactory && ge(s)) {
                const {
                    propsDefaults: u
                } = i;
                if (n in u) o = u[n];
                else {
                    const c = Wo(i);
                    o = u[n] = s.call(null, t), c()
                }
            } else o = s;
            i.ce && i.ce._setProp(n, o)
        }
        a[0] && (r && !l ? o = !1 : a[1] && (o === "" || o === Gt(n)) && (o = !0))
    }
    return o
}
const ad = new WeakMap;

function pc(e, t, n = !1) {
    const o = n ? ad : t.propsCache,
        i = o.get(e);
    if (i) return i;
    const r = e.props,
        a = {},
        l = [];
    let s = !1;
    if (!ge(e)) {
        const c = f => {
            s = !0;
            const [h, v] = pc(f, t, !0);
            Ye(a, h), v && l.push(...v)
        };
        !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c)
    }
    if (!r && !s) return Oe(e) && o.set(e, Kn), Kn;
    if (ce(r))
        for (let c = 0; c < r.length; c++) {
            const f = yt(r[c]);
            ll(f) && (a[f] = De)
        } else if (r)
            for (const c in r) {
                const f = yt(c);
                if (ll(f)) {
                    const h = r[c],
                        v = a[f] = ce(h) || ge(h) ? {
                            type: h
                        } : Ye({}, h),
                        m = v.type;
                    let w = !1,
                        g = !0;
                    if (ce(m))
                        for (let x = 0; x < m.length; ++x) {
                            const y = m[x],
                                C = ge(y) && y.name;
                            if (C === "Boolean") {
                                w = !0;
                                break
                            } else C === "String" && (g = !1)
                        } else w = ge(m) && m.name === "Boolean";
                    v[0] = w, v[1] = g, (w || Ce(v, "default")) && l.push(f)
                }
            }
    const u = [a, l];
    return Oe(e) && o.set(e, u), u
}

function ll(e) {
    return e[0] !== "$" && !_o(e)
}
const wc = e => e[0] === "_" || e === "$stable",
    wa = e => ce(e) ? e.map(It) : [It(e)],
    ld = (e, t, n) => {
        if (t._n) return t;
        const o = Rf((...i) => wa(t(...i)), n);
        return o._c = !1, o
    },
    xc = (e, t, n) => {
        const o = e._ctx;
        for (const i in e) {
            if (wc(i)) continue;
            const r = e[i];
            if (ge(r)) t[i] = ld(i, r, o);
            else if (r != null) {
                const a = wa(r);
                t[i] = () => a
            }
        }
    },
    Sc = (e, t) => {
        const n = wa(t);
        e.slots.default = () => n
    },
    Cc = (e, t, n) => {
        for (const o in t)(n || o !== "_") && (e[o] = t[o])
    },
    sd = (e, t, n) => {
        const o = e.slots = mc();
        if (e.vnode.shapeFlag & 32) {
            const i = t._;
            i ? (Cc(o, t, n), n && Es(o, "_", i, !0)) : xc(t, o)
        } else t && Sc(e, t)
    },
    cd = (e, t, n) => {
        const {
            vnode: o,
            slots: i
        } = e;
        let r = !0,
            a = De;
        if (o.shapeFlag & 32) {
            const l = t._;
            l ? n && l === 1 ? r = !1 : Cc(i, t, n) : (r = !t.$stable, xc(t, i)), a = t
        } else t && (Sc(e, t), a = {
            default: 1
        });
        if (r)
            for (const l in i) !wc(l) && a[l] == null && delete i[l]
    },
    He = Cd;

function ud(e) {
    return fd(e)
}

function fd(e, t) {
    const n = Li();
    n.__VUE__ = !0;
    const {
        insert: o,
        remove: i,
        patchProp: r,
        createElement: a,
        createText: l,
        createComment: s,
        setText: u,
        setElementText: c,
        parentNode: f,
        nextSibling: h,
        setScopeId: v = At,
        insertStaticContent: m
    } = e, w = (b, E, I, B = null, M = null, V = null, K = void 0, Y = null, U = !!E.dynamicChildren) => {
        if (b === E) return;
        b && !rn(b, E) && (B = k(b), R(b, M, V, !0), b = null), E.patchFlag === -2 && (U = !1, E.dynamicChildren = null);
        const {
            type: H,
            ref: he,
            shapeFlag: J
        } = E;
        switch (H) {
            case Ki:
                g(b, E, I, B);
                break;
            case Qe:
                x(b, E, I, B);
                break;
            case vr:
                b == null && y(E, I, B, K);
                break;
            case Je:
                _(b, E, I, B, M, V, K, Y, U);
                break;
            default:
                J & 1 ? T(b, E, I, B, M, V, K, Y, U) : J & 6 ? A(b, E, I, B, M, V, K, Y, U) : (J & 64 || J & 128) && H.process(b, E, I, B, M, V, K, Y, U, de)
        }
        he != null && M && Ti(he, b && b.ref, V, E || b, !E)
    }, g = (b, E, I, B) => {
        if (b == null) o(E.el = l(E.children), I, B);
        else {
            const M = E.el = b.el;
            E.children !== b.children && u(M, E.children)
        }
    }, x = (b, E, I, B) => {
        b == null ? o(E.el = s(E.children || ""), I, B) : E.el = b.el
    }, y = (b, E, I, B) => {
        [b.el, b.anchor] = m(b.children, E, I, B, b.el, b.anchor)
    }, C = ({
        el: b,
        anchor: E
    }, I, B) => {
        let M;
        for (; b && b !== E;) M = h(b), o(b, I, B), b = M;
        o(E, I, B)
    }, S = ({
        el: b,
        anchor: E
    }) => {
        let I;
        for (; b && b !== E;) I = h(b), i(b), b = I;
        i(E)
    }, T = (b, E, I, B, M, V, K, Y, U) => {
        E.type === "svg" ? K = "svg" : E.type === "math" && (K = "mathml"), b == null ? O(E, I, B, M, V, K, Y, U) : $(b, E, M, V, K, Y, U)
    }, O = (b, E, I, B, M, V, K, Y) => {
        let U, H;
        const {
            props: he,
            shapeFlag: J,
            transition: ue,
            dirs: ve
        } = b;
        if (U = b.el = a(b.type, V, he && he.is, he), J & 8 ? c(U, b.children) : J & 16 && P(b.children, U, null, B, M, hr(b, V), K, Y), ve && wn(b, null, B, "created"), z(U, b, b.scopeId, K, B), he) {
            for (const Ie in he) Ie !== "value" && !_o(Ie) && r(U, Ie, null, he[Ie], V, B);
            "value" in he && r(U, "value", null, he.value, V), (H = he.onVnodeBeforeMount) && vt(H, B, b)
        }
        ve && wn(b, null, B, "beforeMount");
        const we = dd(M, ue);
        we && ue.beforeEnter(U), o(U, E, I), ((H = he && he.onVnodeMounted) || we || ve) && He(() => {
            H && vt(H, B, b), we && ue.enter(U), ve && wn(b, null, B, "mounted")
        }, M)
    }, z = (b, E, I, B, M) => {
        if (I && v(b, I), B)
            for (let V = 0; V < B.length; V++) v(b, B[V]);
        if (M) {
            let V = M.subTree;
            if (E === V || ki(V.type) && (V.ssContent === E || V.ssFallback === E)) {
                const K = M.vnode;
                z(b, K, K.scopeId, K.slotScopeIds, M.parent)
            }
        }
    }, P = (b, E, I, B, M, V, K, Y, U = 0) => {
        for (let H = U; H < b.length; H++) {
            const he = b[H] = Y ? on(b[H]) : It(b[H]);
            w(null, he, E, I, B, M, V, K, Y)
        }
    }, $ = (b, E, I, B, M, V, K) => {
        const Y = E.el = b.el;
        let {
            patchFlag: U,
            dynamicChildren: H,
            dirs: he
        } = E;
        U |= b.patchFlag & 16;
        const J = b.props || De,
            ue = E.props || De;
        let ve;
        if (I && xn(I, !1), (ve = ue.onVnodeBeforeUpdate) && vt(ve, I, E, b), he && wn(E, b, I, "beforeUpdate"), I && xn(I, !0), (J.innerHTML && ue.innerHTML == null || J.textContent && ue.textContent == null) && c(Y, ""), H ? D(b.dynamicChildren, H, Y, I, B, hr(E, M), V) : K || Q(b, E, Y, null, I, B, hr(E, M), V, !1), U > 0) {
            if (U & 16) p(Y, J, ue, I, M);
            else if (U & 2 && J.class !== ue.class && r(Y, "class", null, ue.class, M), U & 4 && r(Y, "style", J.style, ue.style, M), U & 8) {
                const we = E.dynamicProps;
                for (let Ie = 0; Ie < we.length; Ie++) {
                    const _e = we[Ie],
                        st = J[_e],
                        rt = ue[_e];
                    (rt !== st || _e === "value") && r(Y, _e, st, rt, M, I)
                }
            }
            U & 1 && b.children !== E.children && c(Y, E.children)
        } else !K && H == null && p(Y, J, ue, I, M);
        ((ve = ue.onVnodeUpdated) || he) && He(() => {
            ve && vt(ve, I, E, b), he && wn(E, b, I, "updated")
        }, B)
    }, D = (b, E, I, B, M, V, K) => {
        for (let Y = 0; Y < E.length; Y++) {
            const U = b[Y],
                H = E[Y],
                he = U.el && (U.type === Je || !rn(U, H) || U.shapeFlag & 70) ? f(U.el) : I;
            w(U, H, he, null, B, M, V, K, !0)
        }
    }, p = (b, E, I, B, M) => {
        if (E !== I) {
            if (E !== De)
                for (const V in E) !_o(V) && !(V in I) && r(b, V, E[V], null, M, B);
            for (const V in I) {
                if (_o(V)) continue;
                const K = I[V],
                    Y = E[V];
                K !== Y && V !== "value" && r(b, V, Y, K, M, B)
            }
            "value" in I && r(b, "value", E.value, I.value, M)
        }
    }, _ = (b, E, I, B, M, V, K, Y, U) => {
        const H = E.el = b ? b.el : l(""),
            he = E.anchor = b ? b.anchor : l("");
        let {
            patchFlag: J,
            dynamicChildren: ue,
            slotScopeIds: ve
        } = E;
        ve && (Y = Y ? Y.concat(ve) : ve), b == null ? (o(H, I, B), o(he, I, B), P(E.children || [], I, he, M, V, K, Y, U)) : J > 0 && J & 64 && ue && b.dynamicChildren ? (D(b.dynamicChildren, ue, I, M, V, K, Y), (E.key != null || M && E === M.subTree) && xa(b, E, !0)) : Q(b, E, I, he, M, V, K, Y, U)
    }, A = (b, E, I, B, M, V, K, Y, U) => {
        E.slotScopeIds = Y, b == null ? E.shapeFlag & 512 ? M.ctx.activate(E, I, B, K, U) : X(E, I, B, M, V, K, U) : le(b, E, U)
    }, X = (b, E, I, B, M, V, K) => {
        const Y = b.component = Od(b, B, M);
        if (zo(b) && (Y.ctx.renderer = de), Id(Y, !1, K), Y.asyncDep) {
            if (M && M.registerDep(Y, L, K), !b.el) {
                const U = Y.subTree = d(Qe);
                x(null, U, E, I)
            }
        } else L(Y, b, E, I, M, V, K)
    }, le = (b, E, I) => {
        const B = E.component = b.component;
        if (xd(b, E, I))
            if (B.asyncDep && !B.asyncResolved) {
                G(B, E, I);
                return
            } else B.next = E, B.update();
        else E.el = b.el, B.vnode = E
    }, L = (b, E, I, B, M, V, K) => {
        const Y = () => {
            if (b.isMounted) {
                let {
                    next: J,
                    bu: ue,
                    u: ve,
                    parent: we,
                    vnode: Ie
                } = b; {
                    const kt = Tc(b);
                    if (kt) {
                        J && (J.el = Ie.el, G(b, J, K)), kt.asyncDep.then(() => {
                            b.isUnmounted || Y()
                        });
                        return
                    }
                }
                let _e = J,
                    st;
                xn(b, !1), J ? (J.el = Ie.el, G(b, J, K)) : J = Ie, ue && qn(ue), (st = J.props && J.props.onVnodeBeforeUpdate) && vt(st, we, J, Ie), xn(b, !0);
                const rt = sl(b),
                    Et = b.subTree;
                b.subTree = rt, w(Et, rt, f(Et.el), k(Et), b, M, V), J.el = rt.el, _e === null && Sd(b, rt.el), ve && He(ve, M), (st = J.props && J.props.onVnodeUpdated) && He(() => vt(st, we, J, Ie), M)
            } else {
                let J;
                const {
                    el: ue,
                    props: ve
                } = E, {
                    bm: we,
                    m: Ie,
                    parent: _e,
                    root: st,
                    type: rt
                } = b, Et = An(E);
                xn(b, !1), we && qn(we), !Et && (J = ve && ve.onVnodeBeforeMount) && vt(J, _e, E), xn(b, !0); {
                    st.ce && st.ce._injectChildStyle(rt);
                    const kt = b.subTree = sl(b);
                    w(null, kt, I, B, b, M, V), E.el = kt.el
                }
                if (Ie && He(Ie, M), !Et && (J = ve && ve.onVnodeMounted)) {
                    const kt = E;
                    He(() => vt(J, _e, kt), M)
                }(E.shapeFlag & 256 || _e && An(_e.vnode) && _e.vnode.shapeFlag & 256) && b.a && He(b.a, M), b.isMounted = !0, E = I = B = null
            }
        };
        b.scope.on();
        const U = b.effect = new As(Y);
        b.scope.off();
        const H = b.update = U.run.bind(U),
            he = b.job = U.runIfDirty.bind(U);
        he.i = b, he.id = b.uid, U.scheduler = () => ga(he), xn(b, !0), H()
    }, G = (b, E, I) => {
        E.component = b;
        const B = b.vnode.props;
        b.vnode = E, b.next = null, rd(b, E.props, B, I), cd(b, E.children, I), hn(), Xa(b), vn()
    }, Q = (b, E, I, B, M, V, K, Y, U = !1) => {
        const H = b && b.children,
            he = b ? b.shapeFlag : 0,
            J = E.children,
            {
                patchFlag: ue,
                shapeFlag: ve
            } = E;
        if (ue > 0) {
            if (ue & 128) {
                ke(H, J, I, B, M, V, K, Y, U);
                return
            } else if (ue & 256) {
                be(H, J, I, B, M, V, K, Y, U);
                return
            }
        }
        ve & 8 ? (he & 16 && ee(H, M, V), J !== H && c(I, J)) : he & 16 ? ve & 16 ? ke(H, J, I, B, M, V, K, Y, U) : ee(H, M, V, !0) : (he & 8 && c(I, ""), ve & 16 && P(J, I, B, M, V, K, Y, U))
    }, be = (b, E, I, B, M, V, K, Y, U) => {
        b = b || Kn, E = E || Kn;
        const H = b.length,
            he = E.length,
            J = Math.min(H, he);
        let ue;
        for (ue = 0; ue < J; ue++) {
            const ve = E[ue] = U ? on(E[ue]) : It(E[ue]);
            w(b[ue], ve, I, null, M, V, K, Y, U)
        }
        H > he ? ee(b, M, V, !0, !1, J) : P(E, I, B, M, V, K, Y, U, J)
    }, ke = (b, E, I, B, M, V, K, Y, U) => {
        let H = 0;
        const he = E.length;
        let J = b.length - 1,
            ue = he - 1;
        for (; H <= J && H <= ue;) {
            const ve = b[H],
                we = E[H] = U ? on(E[H]) : It(E[H]);
            if (rn(ve, we)) w(ve, we, I, null, M, V, K, Y, U);
            else break;
            H++
        }
        for (; H <= J && H <= ue;) {
            const ve = b[J],
                we = E[ue] = U ? on(E[ue]) : It(E[ue]);
            if (rn(ve, we)) w(ve, we, I, null, M, V, K, Y, U);
            else break;
            J--, ue--
        }
        if (H > J) {
            if (H <= ue) {
                const ve = ue + 1,
                    we = ve < he ? E[ve].el : B;
                for (; H <= ue;) w(null, E[H] = U ? on(E[H]) : It(E[H]), I, we, M, V, K, Y, U), H++
            }
        } else if (H > ue)
            for (; H <= J;) R(b[H], M, V, !0), H++;
        else {
            const ve = H,
                we = H,
                Ie = new Map;
            for (H = we; H <= ue; H++) {
                const ct = E[H] = U ? on(E[H]) : It(E[H]);
                ct.key != null && Ie.set(ct.key, H)
            }
            let _e, st = 0;
            const rt = ue - we + 1;
            let Et = !1,
                kt = 0;
            const ho = new Array(rt);
            for (H = 0; H < rt; H++) ho[H] = 0;
            for (H = ve; H <= J; H++) {
                const ct = b[H];
                if (st >= rt) {
                    R(ct, M, V, !0);
                    continue
                }
                let Dt;
                if (ct.key != null) Dt = Ie.get(ct.key);
                else
                    for (_e = we; _e <= ue; _e++)
                        if (ho[_e - we] === 0 && rn(ct, E[_e])) {
                            Dt = _e;
                            break
                        }
                Dt === void 0 ? R(ct, M, V, !0) : (ho[Dt - we] = H + 1, Dt >= kt ? kt = Dt : Et = !0, w(ct, E[Dt], I, null, M, V, K, Y, U), st++)
            }
            const Wa = Et ? hd(ho) : Kn;
            for (_e = Wa.length - 1, H = rt - 1; H >= 0; H--) {
                const ct = we + H,
                    Dt = E[ct],
                    Ua = ct + 1 < he ? E[ct + 1].el : B;
                ho[H] === 0 ? w(null, Dt, I, Ua, M, V, K, Y, U) : Et && (_e < 0 || H !== Wa[_e] ? Z(Dt, I, Ua, 2) : _e--)
            }
        }
    }, Z = (b, E, I, B, M = null) => {
        const {
            el: V,
            type: K,
            transition: Y,
            children: U,
            shapeFlag: H
        } = b;
        if (H & 6) {
            Z(b.component.subTree, E, I, B);
            return
        }
        if (H & 128) {
            b.suspense.move(E, I, B);
            return
        }
        if (H & 64) {
            K.move(b, E, I, de);
            return
        }
        if (K === Je) {
            o(V, E, I);
            for (let J = 0; J < U.length; J++) Z(U[J], E, I, B);
            o(b.anchor, E, I);
            return
        }
        if (K === vr) {
            C(b, E, I);
            return
        }
        if (B !== 2 && H & 1 && Y)
            if (B === 0) Y.beforeEnter(V), o(V, E, I), He(() => Y.enter(V), M);
            else {
                const {
                    leave: J,
                    delayLeave: ue,
                    afterLeave: ve
                } = Y, we = () => o(V, E, I), Ie = () => {
                    J(V, () => {
                        we(), ve && ve()
                    })
                };
                ue ? ue(V, we, Ie) : Ie()
            }
        else o(V, E, I)
    }, R = (b, E, I, B = !1, M = !1) => {
        const {
            type: V,
            props: K,
            ref: Y,
            children: U,
            dynamicChildren: H,
            shapeFlag: he,
            patchFlag: J,
            dirs: ue,
            cacheIndex: ve
        } = b;
        if (J === -2 && (M = !1), Y != null && Ti(Y, null, I, b, !0), ve != null && (E.renderCache[ve] = void 0), he & 256) {
            E.ctx.deactivate(b);
            return
        }
        const we = he & 1 && ue,
            Ie = !An(b);
        let _e;
        if (Ie && (_e = K && K.onVnodeBeforeUnmount) && vt(_e, E, b), he & 6) F(b.component, I, B);
        else {
            if (he & 128) {
                b.suspense.unmount(I, B);
                return
            }
            we && wn(b, null, E, "beforeUnmount"), he & 64 ? b.type.remove(b, E, I, de, B) : H && !H.hasOnce && (V !== Je || J > 0 && J & 64) ? ee(H, E, I, !1, !0) : (V === Je && J & 384 || !M && he & 16) && ee(U, E, I), B && W(b)
        }(Ie && (_e = K && K.onVnodeUnmounted) || we) && He(() => {
            _e && vt(_e, E, b), we && wn(b, null, E, "unmounted")
        }, I)
    }, W = b => {
        const {
            type: E,
            el: I,
            anchor: B,
            transition: M
        } = b;
        if (E === Je) {
            fe(I, B);
            return
        }
        if (E === vr) {
            S(b);
            return
        }
        const V = () => {
            i(I), M && !M.persisted && M.afterLeave && M.afterLeave()
        };
        if (b.shapeFlag & 1 && M && !M.persisted) {
            const {
                leave: K,
                delayLeave: Y
            } = M, U = () => K(I, V);
            Y ? Y(b.el, V, U) : U()
        } else V()
    }, fe = (b, E) => {
        let I;
        for (; b !== E;) I = h(b), i(b), b = I;
        i(E)
    }, F = (b, E, I) => {
        const {
            bum: B,
            scope: M,
            job: V,
            subTree: K,
            um: Y,
            m: U,
            a: H
        } = b;
        Ei(U), Ei(H), B && qn(B), M.stop(), V && (V.flags |= 8, R(K, b, E, I)), Y && He(Y, E), He(() => {
            b.isUnmounted = !0
        }, E), E && E.pendingBranch && !E.isUnmounted && b.asyncDep && !b.asyncResolved && b.suspenseId === E.pendingId && (E.deps--, E.deps === 0 && E.resolve())
    }, ee = (b, E, I, B = !1, M = !1, V = 0) => {
        for (let K = V; K < b.length; K++) R(b[K], E, I, B, M)
    }, k = b => {
        if (b.shapeFlag & 6) return k(b.component.subTree);
        if (b.shapeFlag & 128) return b.suspense.next();
        const E = h(b.anchor || b.el),
            I = E && E[Qs];
        return I ? h(I) : E
    };
    let ne = !1;
    const q = (b, E, I) => {
            b == null ? E._vnode && R(E._vnode, null, null, !0) : w(E._vnode || null, b, E, null, null, null, I), E._vnode = b, ne || (ne = !0, Xa(), Xs(), ne = !1)
        },
        de = {
            p: w,
            um: R,
            m: Z,
            r: W,
            mt: X,
            mc: P,
            pc: Q,
            pbc: D,
            n: k,
            o: e
        };
    return {
        render: q,
        hydrate: void 0,
        createApp: od(q)
    }
}

function hr({
    type: e,
    props: t
}, n) {
    return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n
}

function xn({
    effect: e,
    job: t
}, n) {
    n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5)
}

function dd(e, t) {
    return (!e || e && !e.pendingBranch) && t && !t.persisted
}

function xa(e, t, n = !1) {
    const o = e.children,
        i = t.children;
    if (ce(o) && ce(i))
        for (let r = 0; r < o.length; r++) {
            const a = o[r];
            let l = i[r];
            l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = i[r] = on(i[r]), l.el = a.el), !n && l.patchFlag !== -2 && xa(a, l)), l.type === Ki && (l.el = a.el)
        }
}

function hd(e) {
    const t = e.slice(),
        n = [0];
    let o, i, r, a, l;
    const s = e.length;
    for (o = 0; o < s; o++) {
        const u = e[o];
        if (u !== 0) {
            if (i = n[n.length - 1], e[i] < u) {
                t[o] = i, n.push(o);
                continue
            }
            for (r = 0, a = n.length - 1; r < a;) l = r + a >> 1, e[n[l]] < u ? r = l + 1 : a = l;
            u < e[n[r]] && (r > 0 && (t[o] = n[r - 1]), n[r] = o)
        }
    }
    for (r = n.length, a = n[r - 1]; r-- > 0;) n[r] = a, a = t[a];
    return n
}

function Tc(e) {
    const t = e.subTree.component;
    if (t) return t.asyncDep && !t.asyncResolved ? t : Tc(t)
}

function Ei(e) {
    if (e)
        for (let t = 0; t < e.length; t++) e[t].flags |= 8
}
const vd = Symbol.for("v-scx"),
    gd = () => Ht(vd);

function Ui(e, t) {
    return Sa(e, null, t)
}

function ie(e, t, n) {
    return Sa(e, t, n)
}

function Sa(e, t, n = De) {
    const {
        immediate: o,
        deep: i,
        flush: r,
        once: a
    } = n, l = Ye({}, n), s = t && o || !t && r !== "post";
    let u;
    if (no) {
        if (r === "sync") {
            const v = gd();
            u = v.__watcherHandles || (v.__watcherHandles = [])
        } else if (!s) {
            const v = () => {};
            return v.stop = At, v.resume = At, v.pause = At, v
        }
    }
    const c = je;
    l.call = (v, m, w) => Ct(v, c, m, w);
    let f = !1;
    r === "post" ? l.scheduler = v => {
        He(v, c && c.suspense)
    } : r !== "sync" && (f = !0, l.scheduler = (v, m) => {
        m ? v() : ga(v)
    }), l.augmentJob = v => {
        t && (v.flags |= 4), f && (v.flags |= 2, c && (v.id = c.uid, v.i = c))
    };
    const h = If(e, t, l);
    return no && (u ? u.push(h) : s && h()), h
}

function md(e, t, n) {
    const o = this.proxy,
        i = Pe(e) ? e.includes(".") ? _c(o, e) : () => o[e] : e.bind(o, o);
    let r;
    ge(t) ? r = t : (r = t.handler, n = t);
    const a = Wo(this),
        l = Sa(i, r.bind(o), n);
    return a(), l
}

function _c(e, t) {
    const n = t.split(".");
    return () => {
        let o = e;
        for (let i = 0; i < n.length && o; i++) o = o[n[i]];
        return o
    }
}
const yd = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${yt(t)}Modifiers`] || e[`${Gt(t)}Modifiers`];

function bd(e, t, ...n) {
    if (e.isUnmounted) return;
    const o = e.vnode.props || De;
    let i = n;
    const r = t.startsWith("update:"),
        a = r && yd(o, t.slice(7));
    a && (a.trim && (i = n.map(c => Pe(c) ? c.trim() : c)), a.number && (i = n.map(pi)));
    let l, s = o[l = ir(t)] || o[l = ir(yt(t))];
    !s && r && (s = o[l = ir(Gt(t))]), s && Ct(s, e, 6, i);
    const u = o[l + "Once"];
    if (u) {
        if (!e.emitted) e.emitted = {};
        else if (e.emitted[l]) return;
        e.emitted[l] = !0, Ct(u, e, 6, i)
    }
}

function Ec(e, t, n = !1) {
    const o = t.emitsCache,
        i = o.get(e);
    if (i !== void 0) return i;
    const r = e.emits;
    let a = {},
        l = !1;
    if (!ge(e)) {
        const s = u => {
            const c = Ec(u, t, !0);
            c && (l = !0, Ye(a, c))
        };
        !n && t.mixins.length && t.mixins.forEach(s), e.extends && s(e.extends), e.mixins && e.mixins.forEach(s)
    }
    return !r && !l ? (Oe(e) && o.set(e, null), null) : (ce(r) ? r.forEach(s => a[s] = null) : Ye(a, r), Oe(e) && o.set(e, a), a)
}

function Yi(e, t) {
    return !e || !Mi(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Ce(e, t[0].toLowerCase() + t.slice(1)) || Ce(e, Gt(t)) || Ce(e, t))
}

function sl(e) {
    const {
        type: t,
        vnode: n,
        proxy: o,
        withProxy: i,
        propsOptions: [r],
        slots: a,
        attrs: l,
        emit: s,
        render: u,
        renderCache: c,
        props: f,
        data: h,
        setupState: v,
        ctx: m,
        inheritAttrs: w
    } = e, g = Ci(e);
    let x, y;
    try {
        if (n.shapeFlag & 4) {
            const S = i || o,
                T = S;
            x = It(u.call(T, S, c, f, v, h, m)), y = l
        } else {
            const S = t;
            x = It(S.length > 1 ? S(f, {
                attrs: l,
                slots: a,
                emit: s
            }) : S(f, null)), y = t.props ? l : pd(l)
        }
    } catch (S) {
        Io.length = 0, Ho(S, e, 1), x = d(Qe)
    }
    let C = x;
    if (y && w !== !1) {
        const S = Object.keys(y),
            {
                shapeFlag: T
            } = C;
        S.length && T & 7 && (r && S.some(ia) && (y = wd(y, r)), C = Ut(C, y, !1, !0))
    }
    return n.dirs && (C = Ut(C, null, !1, !0), C.dirs = C.dirs ? C.dirs.concat(n.dirs) : n.dirs), n.transition && to(C, n.transition), x = C, Ci(g), x
}
const pd = e => {
        let t;
        for (const n in e)(n === "class" || n === "style" || Mi(n)) && ((t || (t = {}))[n] = e[n]);
        return t
    },
    wd = (e, t) => {
        const n = {};
        for (const o in e)(!ia(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
        return n
    };

function xd(e, t, n) {
    const {
        props: o,
        children: i,
        component: r
    } = e, {
        props: a,
        children: l,
        patchFlag: s
    } = t, u = r.emitsOptions;
    if (t.dirs || t.transition) return !0;
    if (n && s >= 0) {
        if (s & 1024) return !0;
        if (s & 16) return o ? cl(o, a, u) : !!a;
        if (s & 8) {
            const c = t.dynamicProps;
            for (let f = 0; f < c.length; f++) {
                const h = c[f];
                if (a[h] !== o[h] && !Yi(u, h)) return !0
            }
        }
    } else return (i || l) && (!l || !l.$stable) ? !0 : o === a ? !1 : o ? a ? cl(o, a, u) : !0 : !!a;
    return !1
}

function cl(e, t, n) {
    const o = Object.keys(t);
    if (o.length !== Object.keys(e).length) return !0;
    for (let i = 0; i < o.length; i++) {
        const r = o[i];
        if (t[r] !== e[r] && !Yi(n, r)) return !0
    }
    return !1
}

function Sd({
    vnode: e,
    parent: t
}, n) {
    for (; t;) {
        const o = t.subTree;
        if (o.suspense && o.suspense.activeBranch === e && (o.el = e.el), o === e)(e = t.vnode).el = n, t = t.parent;
        else break
    }
}
const ki = e => e.__isSuspense;

function Cd(e, t) {
    t && t.pendingBranch ? ce(e) ? t.effects.push(...e) : t.effects.push(e) : $f(e)
}
const Je = Symbol.for("v-fgt"),
    Ki = Symbol.for("v-txt"),
    Qe = Symbol.for("v-cmt"),
    vr = Symbol.for("v-stc"),
    Io = [];
let ft = null;

function Vr(e = !1) {
    Io.push(ft = e ? null : [])
}

function Td() {
    Io.pop(), ft = Io[Io.length - 1] || null
}
let Mo = 1;

function ul(e, t = !1) {
    Mo += e, e < 0 && ft && t && (ft.hasOnce = !0)
}

function kc(e) {
    return e.dynamicChildren = Mo > 0 ? ft || Kn : null, Td(), Mo > 0 && ft && ft.push(e), e
}

function E0(e, t, n, o, i, r) {
    return kc(Oc(e, t, n, o, i, r, !0))
}

function Lr(e, t, n, o, i) {
    return kc(d(e, t, n, o, i, !0))
}

function Bn(e) {
    return e ? e.__v_isVNode === !0 : !1
}

function rn(e, t) {
    return e.type === t.type && e.key === t.key
}
const Dc = ({
        key: e
    }) => e ?? null,
    vi = ({
        ref: e,
        ref_key: t,
        ref_for: n
    }) => (typeof e == "number" && (e = "" + e), e != null ? Pe(e) || Ue(e) || ge(e) ? {
        i: We,
        r: e,
        k: t,
        f: !!n
    } : e : null);

function Oc(e, t = null, n = null, o = 0, i = null, r = e === Je ? 0 : 1, a = !1, l = !1) {
    const s = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: t,
        key: t && Dc(t),
        ref: t && vi(t),
        scopeId: Js,
        slotScopeIds: null,
        children: n,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetStart: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: r,
        patchFlag: o,
        dynamicProps: i,
        dynamicChildren: null,
        appContext: null,
        ctx: We
    };
    return l ? (Ca(s, n), r & 128 && e.normalize(s)) : n && (s.shapeFlag |= Pe(n) ? 8 : 16), Mo > 0 && !a && ft && (s.patchFlag > 0 || r & 6) && s.patchFlag !== 32 && ft.push(s), s
}
const d = _d;

function _d(e, t = null, n = null, o = 0, i = null, r = !1) {
    if ((!e || e === uc) && (e = Qe), Bn(e)) {
        const l = Ut(e, t, !0);
        return n && Ca(l, n), Mo > 0 && !r && ft && (l.shapeFlag & 6 ? ft[ft.indexOf(e)] = l : ft.push(l)), l.patchFlag = -2, l
    }
    if ($d(e) && (e = e.__vccOpts), t) {
        t = Ed(t);
        let {
            class: l,
            style: s
        } = t;
        l && !Pe(l) && (t.class = Hi(l)), Oe(s) && (va(s) && !ce(s) && (s = Ye({}, s)), t.style = Ni(s))
    }
    const a = Pe(e) ? 1 : ki(e) ? 128 : ec(e) ? 64 : Oe(e) ? 4 : ge(e) ? 2 : 0;
    return Oc(e, t, n, o, i, a, r, !0)
}

function Ed(e) {
    return e ? va(e) || yc(e) ? Ye({}, e) : e : null
}

function Ut(e, t, n = !1, o = !1) {
    const {
        props: i,
        ref: r,
        patchFlag: a,
        children: l,
        transition: s
    } = e, u = t ? $e(i || {}, t) : i, c = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e.type,
        props: u,
        key: u && Dc(u),
        ref: t && t.ref ? n && r ? ce(r) ? r.concat(vi(t)) : [r, vi(t)] : vi(t) : r,
        scopeId: e.scopeId,
        slotScopeIds: e.slotScopeIds,
        children: l,
        target: e.target,
        targetStart: e.targetStart,
        targetAnchor: e.targetAnchor,
        staticCount: e.staticCount,
        shapeFlag: e.shapeFlag,
        patchFlag: t && e.type !== Je ? a === -1 ? 16 : a | 16 : a,
        dynamicProps: e.dynamicProps,
        dynamicChildren: e.dynamicChildren,
        appContext: e.appContext,
        dirs: e.dirs,
        transition: s,
        component: e.component,
        suspense: e.suspense,
        ssContent: e.ssContent && Ut(e.ssContent),
        ssFallback: e.ssFallback && Ut(e.ssFallback),
        el: e.el,
        anchor: e.anchor,
        ctx: e.ctx,
        ce: e.ce
    };
    return s && o && to(c, s.clone(c)), c
}

function Ic(e = " ", t = 0) {
    return d(Ki, null, e, t)
}

function k0(e = "", t = !1) {
    return t ? (Vr(), Lr(Qe, null, e)) : d(Qe, null, e)
}

function It(e) {
    return e == null || typeof e == "boolean" ? d(Qe) : ce(e) ? d(Je, null, e.slice()) : Bn(e) ? on(e) : d(Ki, null, String(e))
}

function on(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ut(e)
}

function Ca(e, t) {
    let n = 0;
    const {
        shapeFlag: o
    } = e;
    if (t == null) t = null;
    else if (ce(t)) n = 16;
    else if (typeof t == "object")
        if (o & 65) {
            const i = t.default;
            i && (i._c && (i._d = !1), Ca(e, i()), i._c && (i._d = !0));
            return
        } else {
            n = 32;
            const i = t._;
            !i && !yc(t) ? t._ctx = We : i === 3 && We && (We.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024))
        }
    else ge(t) ? (t = {
        default: t,
        _ctx: We
    }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [Ic(t)]) : n = 8);
    e.children = t, e.shapeFlag |= n
}

function $e(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
        const o = e[n];
        for (const i in o)
            if (i === "class") t.class !== o.class && (t.class = Hi([t.class, o.class]));
            else if (i === "style") t.style = Ni([t.style, o.style]);
        else if (Mi(i)) {
            const r = t[i],
                a = o[i];
            a && r !== a && !(ce(r) && r.includes(a)) && (t[i] = r ? [].concat(r, a) : a)
        } else i !== "" && (t[i] = o[i])
    }
    return t
}

function vt(e, t, n, o = null) {
    Ct(e, t, 7, [n, o])
}
const kd = vc();
let Dd = 0;

function Od(e, t, n) {
    const o = e.type,
        i = (t ? t.appContext : e.appContext) || kd,
        r = {
            uid: Dd++,
            vnode: e,
            type: o,
            parent: t,
            appContext: i,
            root: null,
            next: null,
            subTree: null,
            effect: null,
            update: null,
            job: null,
            scope: new Is(!0),
            render: null,
            proxy: null,
            exposed: null,
            exposeProxy: null,
            withProxy: null,
            provides: t ? t.provides : Object.create(i.provides),
            ids: t ? t.ids : ["", 0, 0],
            accessCache: null,
            renderCache: [],
            components: null,
            directives: null,
            propsOptions: pc(o, i),
            emitsOptions: Ec(o, i),
            emit: null,
            emitted: null,
            propsDefaults: De,
            inheritAttrs: o.inheritAttrs,
            ctx: De,
            data: De,
            props: De,
            attrs: De,
            slots: De,
            refs: De,
            setupState: De,
            setupContext: null,
            suspense: n,
            suspenseId: n ? n.pendingId : 0,
            asyncDep: null,
            asyncResolved: !1,
            isMounted: !1,
            isUnmounted: !1,
            isDeactivated: !1,
            bc: null,
            c: null,
            bm: null,
            m: null,
            bu: null,
            u: null,
            um: null,
            bum: null,
            da: null,
            a: null,
            rtg: null,
            rtc: null,
            ec: null,
            sp: null
        };
    return r.ctx = {
        _: r
    }, r.root = t ? t.root : r, r.emit = bd.bind(null, r), e.ce && e.ce(r), r
}
let je = null;
const bt = () => je || We;
let Di, Nr; {
    const e = Li(),
        t = (n, o) => {
            let i;
            return (i = e[n]) || (i = e[n] = []), i.push(o), r => {
                i.length > 1 ? i.forEach(a => a(r)) : i[0](r)
            }
        };
    Di = t("__VUE_INSTANCE_SETTERS__", n => je = n), Nr = t("__VUE_SSR_SETTERS__", n => no = n)
}
const Wo = e => {
        const t = je;
        return Di(e), e.scope.on(), () => {
            e.scope.off(), Di(t)
        }
    },
    fl = () => {
        je && je.scope.off(), Di(null)
    };

function Ac(e) {
    return e.vnode.shapeFlag & 4
}
let no = !1;

function Id(e, t = !1, n = !1) {
    t && Nr(t);
    const {
        props: o,
        children: i
    } = e.vnode, r = Ac(e);
    id(e, o, r, t), sd(e, i, n);
    const a = r ? Ad(e, t) : void 0;
    return t && Nr(!1), a
}

function Ad(e, t) {
    const n = e.type;
    e.accessCache = Object.create(null), e.proxy = new Proxy(e.ctx, qf);
    const {
        setup: o
    } = n;
    if (o) {
        hn();
        const i = e.setupContext = o.length > 1 ? $c(e) : null,
            r = Wo(e),
            a = No(o, e, 0, [e.props, i]),
            l = Cs(a);
        if (vn(), r(), (l || e.sp) && !An(e) && ma(e), l) {
            if (a.then(fl, fl), t) return a.then(s => {
                dl(e, s)
            }).catch(s => {
                Ho(s, e, 0)
            });
            e.asyncDep = a
        } else dl(e, a)
    } else Pc(e)
}

function dl(e, t, n) {
    ge(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Oe(t) && (e.setupState = Ks(t)), Pc(e)
}

function Pc(e, t, n) {
    const o = e.type;
    e.render || (e.render = o.render || At); {
        const i = Wo(e);
        hn();
        try {
            Zf(e)
        } finally {
            vn(), i()
        }
    }
}
const Pd = {
    get(e, t) {
        return Xe(e, "get", ""), e[t]
    }
};

function $c(e) {
    const t = n => {
        e.exposed = n || {}
    };
    return {
        attrs: new Proxy(e.attrs, Pd),
        slots: e.slots,
        emit: e.emit,
        expose: t
    }
}

function Gi(e) {
    return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Ks(Sf(e.exposed)), {
        get(t, n) {
            if (n in t) return t[n];
            if (n in Oo) return Oo[n](e)
        },
        has(t, n) {
            return n in t || n in Oo
        }
    })) : e.proxy
}

function Hr(e, t = !0) {
    return ge(e) ? e.displayName || e.name : e.name || t && e.__name
}

function $d(e) {
    return ge(e) && "__vccOpts" in e
}
const j = (e, t) => Df(e, t, no);

function Rd(e, t, n) {
    const o = arguments.length;
    return o === 2 ? Oe(t) && !ce(t) ? Bn(t) ? d(e, null, [t]) : d(e, t) : d(e, null, t) : (o > 3 ? n = Array.prototype.slice.call(arguments, 2) : o === 3 && Bn(n) && (n = [n]), d(e, t, n))
}
const Bd = "3.5.13";
/**
 * @vue/runtime-dom v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
let zr;
const hl = typeof window < "u" && window.trustedTypes;
if (hl) try {
    zr = hl.createPolicy("vue", {
        createHTML: e => e
    })
} catch {}
const Rc = zr ? e => zr.createHTML(e) : e => e,
    Md = "http://www.w3.org/2000/svg",
    Fd = "http://www.w3.org/1998/Math/MathML",
    Mt = typeof document < "u" ? document : null,
    vl = Mt && Mt.createElement("template"),
    Vd = {
        insert: (e, t, n) => {
            t.insertBefore(e, n || null)
        },
        remove: e => {
            const t = e.parentNode;
            t && t.removeChild(e)
        },
        createElement: (e, t, n, o) => {
            const i = t === "svg" ? Mt.createElementNS(Md, e) : t === "mathml" ? Mt.createElementNS(Fd, e) : n ? Mt.createElement(e, {
                is: n
            }) : Mt.createElement(e);
            return e === "select" && o && o.multiple != null && i.setAttribute("multiple", o.multiple), i
        },
        createText: e => Mt.createTextNode(e),
        createComment: e => Mt.createComment(e),
        setText: (e, t) => {
            e.nodeValue = t
        },
        setElementText: (e, t) => {
            e.textContent = t
        },
        parentNode: e => e.parentNode,
        nextSibling: e => e.nextSibling,
        querySelector: e => Mt.querySelector(e),
        setScopeId(e, t) {
            e.setAttribute(t, "")
        },
        insertStaticContent(e, t, n, o, i, r) {
            const a = n ? n.previousSibling : t.lastChild;
            if (i && (i === r || i.nextSibling))
                for (; t.insertBefore(i.cloneNode(!0), n), !(i === r || !(i = i.nextSibling)););
            else {
                vl.innerHTML = Rc(o === "svg" ? `<svg>${e}</svg>` : o === "mathml" ? `<math>${e}</math>` : e);
                const l = vl.content;
                if (o === "svg" || o === "mathml") {
                    const s = l.firstChild;
                    for (; s.firstChild;) l.appendChild(s.firstChild);
                    l.removeChild(s)
                }
                t.insertBefore(l, n)
            }
            return [a ? a.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
        }
    },
    Jt = "transition",
    go = "animation",
    Fo = Symbol("_vtc"),
    Bc = {
        name: String,
        type: String,
        css: {
            type: Boolean,
            default: !0
        },
        duration: [String, Number, Object],
        enterFromClass: String,
        enterActiveClass: String,
        enterToClass: String,
        appearFromClass: String,
        appearActiveClass: String,
        appearToClass: String,
        leaveFromClass: String,
        leaveActiveClass: String,
        leaveToClass: String
    },
    Ld = Ye({}, oc, Bc),
    Nd = e => (e.displayName = "Transition", e.props = Ld, e),
    Ta = Nd((e, {
        slots: t
    }) => Rd(Vf, Hd(e), t)),
    Sn = (e, t = []) => {
        ce(e) ? e.forEach(n => n(...t)) : e && e(...t)
    },
    gl = e => e ? ce(e) ? e.some(t => t.length > 1) : e.length > 1 : !1;

function Hd(e) {
    const t = {};
    for (const _ in e) _ in Bc || (t[_] = e[_]);
    if (e.css === !1) return t;
    const {
        name: n = "v",
        type: o,
        duration: i,
        enterFromClass: r = `${n}-enter-from`,
        enterActiveClass: a = `${n}-enter-active`,
        enterToClass: l = `${n}-enter-to`,
        appearFromClass: s = r,
        appearActiveClass: u = a,
        appearToClass: c = l,
        leaveFromClass: f = `${n}-leave-from`,
        leaveActiveClass: h = `${n}-leave-active`,
        leaveToClass: v = `${n}-leave-to`
    } = e, m = zd(i), w = m && m[0], g = m && m[1], {
        onBeforeEnter: x,
        onEnter: y,
        onEnterCancelled: C,
        onLeave: S,
        onLeaveCancelled: T,
        onBeforeAppear: O = x,
        onAppear: z = y,
        onAppearCancelled: P = C
    } = t, $ = (_, A, X, le) => {
        _._enterCancelled = le, Cn(_, A ? c : l), Cn(_, A ? u : a), X && X()
    }, D = (_, A) => {
        _._isLeaving = !1, Cn(_, f), Cn(_, v), Cn(_, h), A && A()
    }, p = _ => (A, X) => {
        const le = _ ? z : y,
            L = () => $(A, _, X);
        Sn(le, [A, L]), ml(() => {
            Cn(A, _ ? s : r), Rt(A, _ ? c : l), gl(le) || yl(A, o, w, L)
        })
    };
    return Ye(t, {
        onBeforeEnter(_) {
            Sn(x, [_]), Rt(_, r), Rt(_, a)
        },
        onBeforeAppear(_) {
            Sn(O, [_]), Rt(_, s), Rt(_, u)
        },
        onEnter: p(!1),
        onAppear: p(!0),
        onLeave(_, A) {
            _._isLeaving = !0;
            const X = () => D(_, A);
            Rt(_, f), _._enterCancelled ? (Rt(_, h), wl()) : (wl(), Rt(_, h)), ml(() => {
                _._isLeaving && (Cn(_, f), Rt(_, v), gl(S) || yl(_, o, g, X))
            }), Sn(S, [_, X])
        },
        onEnterCancelled(_) {
            $(_, !1, void 0, !0), Sn(C, [_])
        },
        onAppearCancelled(_) {
            $(_, !0, void 0, !0), Sn(P, [_])
        },
        onLeaveCancelled(_) {
            D(_), Sn(T, [_])
        }
    })
}

function zd(e) {
    if (e == null) return null;
    if (Oe(e)) return [gr(e.enter), gr(e.leave)]; {
        const t = gr(e);
        return [t, t]
    }
}

function gr(e) {
    return Wu(e)
}

function Rt(e, t) {
    t.split(/\s+/).forEach(n => n && e.classList.add(n)), (e[Fo] || (e[Fo] = new Set)).add(t)
}

function Cn(e, t) {
    t.split(/\s+/).forEach(o => o && e.classList.remove(o));
    const n = e[Fo];
    n && (n.delete(t), n.size || (e[Fo] = void 0))
}

function ml(e) {
    requestAnimationFrame(() => {
        requestAnimationFrame(e)
    })
}
let jd = 0;

function yl(e, t, n, o) {
    const i = e._endId = ++jd,
        r = () => {
            i === e._endId && o()
        };
    if (n != null) return setTimeout(r, n);
    const {
        type: a,
        timeout: l,
        propCount: s
    } = Wd(e, t);
    if (!a) return o();
    const u = a + "end";
    let c = 0;
    const f = () => {
            e.removeEventListener(u, h), r()
        },
        h = v => {
            v.target === e && ++c >= s && f()
        };
    setTimeout(() => {
        c < s && f()
    }, l + 1), e.addEventListener(u, h)
}

function Wd(e, t) {
    const n = window.getComputedStyle(e),
        o = m => (n[m] || "").split(", "),
        i = o(`${Jt}Delay`),
        r = o(`${Jt}Duration`),
        a = bl(i, r),
        l = o(`${go}Delay`),
        s = o(`${go}Duration`),
        u = bl(l, s);
    let c = null,
        f = 0,
        h = 0;
    t === Jt ? a > 0 && (c = Jt, f = a, h = r.length) : t === go ? u > 0 && (c = go, f = u, h = s.length) : (f = Math.max(a, u), c = f > 0 ? a > u ? Jt : go : null, h = c ? c === Jt ? r.length : s.length : 0);
    const v = c === Jt && /\b(transform|all)(,|$)/.test(o(`${Jt}Property`).toString());
    return {
        type: c,
        timeout: f,
        propCount: h,
        hasTransform: v
    }
}

function bl(e, t) {
    for (; e.length < t.length;) e = e.concat(e);
    return Math.max(...t.map((n, o) => pl(n) + pl(e[o])))
}

function pl(e) {
    return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3
}

function wl() {
    return document.body.offsetHeight
}

function Ud(e, t, n) {
    const o = e[Fo];
    o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t
}
const Oi = Symbol("_vod"),
    Mc = Symbol("_vsh"),
    un = {
        beforeMount(e, {
            value: t
        }, {
            transition: n
        }) {
            e[Oi] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : mo(e, t)
        },
        mounted(e, {
            value: t
        }, {
            transition: n
        }) {
            n && t && n.enter(e)
        },
        updated(e, {
            value: t,
            oldValue: n
        }, {
            transition: o
        }) {
            !t != !n && (o ? t ? (o.beforeEnter(e), mo(e, !0), o.enter(e)) : o.leave(e, () => {
                mo(e, !1)
            }) : mo(e, t))
        },
        beforeUnmount(e, {
            value: t
        }) {
            mo(e, t)
        }
    };

function mo(e, t) {
    e.style.display = t ? e[Oi] : "none", e[Mc] = !t
}
const Yd = Symbol(""),
    Kd = /(^|;)\s*display\s*:/;

function Gd(e, t, n) {
    const o = e.style,
        i = Pe(n);
    let r = !1;
    if (n && !i) {
        if (t)
            if (Pe(t))
                for (const a of t.split(";")) {
                    const l = a.slice(0, a.indexOf(":")).trim();
                    n[l] == null && gi(o, l, "")
                } else
                    for (const a in t) n[a] == null && gi(o, a, "");
        for (const a in n) a === "display" && (r = !0), gi(o, a, n[a])
    } else if (i) {
        if (t !== n) {
            const a = o[Yd];
            a && (n += ";" + a), o.cssText = n, r = Kd.test(n)
        }
    } else t && e.removeAttribute("style");
    Oi in e && (e[Oi] = r ? o.display : "", e[Mc] && (o.display = "none"))
}
const xl = /\s*!important$/;

function gi(e, t, n) {
    if (ce(n)) n.forEach(o => gi(e, t, o));
    else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n);
    else {
        const o = qd(e, t);
        xl.test(n) ? e.setProperty(Gt(o), n.replace(xl, ""), "important") : e[o] = n
    }
}
const Sl = ["Webkit", "Moz", "ms"],
    mr = {};

function qd(e, t) {
    const n = mr[t];
    if (n) return n;
    let o = yt(t);
    if (o !== "filter" && o in e) return mr[t] = o;
    o = Vi(o);
    for (let i = 0; i < Sl.length; i++) {
        const r = Sl[i] + o;
        if (r in e) return mr[t] = r
    }
    return t
}
const Cl = "http://www.w3.org/1999/xlink";

function Tl(e, t, n, o, i, r = Zu(t)) {
    o && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Cl, t.slice(6, t.length)) : e.setAttributeNS(Cl, t, n) : n == null || r && !ks(n) ? e.removeAttribute(t) : e.setAttribute(t, r ? "" : St(n) ? String(n) : n)
}

function _l(e, t, n, o, i) {
    if (t === "innerHTML" || t === "textContent") {
        n != null && (e[t] = t === "innerHTML" ? Rc(n) : n);
        return
    }
    const r = e.tagName;
    if (t === "value" && r !== "PROGRESS" && !r.includes("-")) {
        const l = r === "OPTION" ? e.getAttribute("value") || "" : e.value,
            s = n == null ? e.type === "checkbox" ? "on" : "" : String(n);
        (l !== s || !("_value" in e)) && (e.value = s), n == null && e.removeAttribute(t), e._value = n;
        return
    }
    let a = !1;
    if (n === "" || n == null) {
        const l = typeof e[t];
        l === "boolean" ? n = ks(n) : n == null && l === "string" ? (n = "", a = !0) : l === "number" && (n = 0, a = !0)
    }
    try {
        e[t] = n
    } catch {}
    a && e.removeAttribute(i || t)
}

function Lt(e, t, n, o) {
    e.addEventListener(t, n, o)
}

function Xd(e, t, n, o) {
    e.removeEventListener(t, n, o)
}
const El = Symbol("_vei");

function Zd(e, t, n, o, i = null) {
    const r = e[El] || (e[El] = {}),
        a = r[t];
    if (o && a) a.value = o;
    else {
        const [l, s] = Jd(t);
        if (o) {
            const u = r[t] = th(o, i);
            Lt(e, l, u, s)
        } else a && (Xd(e, l, a, s), r[t] = void 0)
    }
}
const kl = /(?:Once|Passive|Capture)$/;

function Jd(e) {
    let t;
    if (kl.test(e)) {
        t = {};
        let o;
        for (; o = e.match(kl);) e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0
    }
    return [e[2] === ":" ? e.slice(3) : Gt(e.slice(2)), t]
}
let yr = 0;
const Qd = Promise.resolve(),
    eh = () => yr || (Qd.then(() => yr = 0), yr = Date.now());

function th(e, t) {
    const n = o => {
        if (!o._vts) o._vts = Date.now();
        else if (o._vts <= n.attached) return;
        Ct(nh(o, n.value), t, 5, [o])
    };
    return n.value = e, n.attached = eh(), n
}

function nh(e, t) {
    if (ce(t)) {
        const n = e.stopImmediatePropagation;
        return e.stopImmediatePropagation = () => {
            n.call(e), e._stopped = !0
        }, t.map(o => i => !i._stopped && o && o(i))
    } else return t
}
const Dl = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123,
    oh = (e, t, n, o, i, r) => {
        const a = i === "svg";
        t === "class" ? Ud(e, o, a) : t === "style" ? Gd(e, n, o) : Mi(t) ? ia(t) || Zd(e, t, n, o, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : ih(e, t, o, a)) ? (_l(e, t, o), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Tl(e, t, o, a, r, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !Pe(o)) ? _l(e, yt(t), o, r, t) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), Tl(e, t, o, a))
    };

function ih(e, t, n, o) {
    if (o) return !!(t === "innerHTML" || t === "textContent" || t in e && Dl(t) && ge(n));
    if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
    if (t === "width" || t === "height") {
        const i = e.tagName;
        if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE") return !1
    }
    return Dl(t) && Pe(n) ? !1 : t in e
}
const fn = e => {
    const t = e.props["onUpdate:modelValue"] || !1;
    return ce(t) ? n => qn(t, n) : t
};

function rh(e) {
    e.target.composing = !0
}

function Ol(e) {
    const t = e.target;
    t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")))
}
const mt = Symbol("_assign"),
    Il = {
        created(e, {
            modifiers: {
                lazy: t,
                trim: n,
                number: o
            }
        }, i) {
            e[mt] = fn(i);
            const r = o || i.props && i.props.type === "number";
            Lt(e, t ? "change" : "input", a => {
                if (a.target.composing) return;
                let l = e.value;
                n && (l = l.trim()), r && (l = pi(l)), e[mt](l)
            }), n && Lt(e, "change", () => {
                e.value = e.value.trim()
            }), t || (Lt(e, "compositionstart", rh), Lt(e, "compositionend", Ol), Lt(e, "change", Ol))
        },
        mounted(e, {
            value: t
        }) {
            e.value = t ?? ""
        },
        beforeUpdate(e, {
            value: t,
            oldValue: n,
            modifiers: {
                lazy: o,
                trim: i,
                number: r
            }
        }, a) {
            if (e[mt] = fn(a), e.composing) return;
            const l = (r || e.type === "number") && !/^0\d/.test(e.value) ? pi(e.value) : e.value,
                s = t ?? "";
            l !== s && (document.activeElement === e && e.type !== "range" && (o && t === n || i && e.value.trim() === s) || (e.value = s))
        }
    },
    ah = {
        deep: !0,
        created(e, t, n) {
            e[mt] = fn(n), Lt(e, "change", () => {
                const o = e._modelValue,
                    i = oo(e),
                    r = e.checked,
                    a = e[mt];
                if (ce(o)) {
                    const l = la(o, i),
                        s = l !== -1;
                    if (r && !s) a(o.concat(i));
                    else if (!r && s) {
                        const u = [...o];
                        u.splice(l, 1), a(u)
                    }
                } else if (so(o)) {
                    const l = new Set(o);
                    r ? l.add(i) : l.delete(i), a(l)
                } else a(Fc(e, r))
            })
        },
        mounted: Al,
        beforeUpdate(e, t, n) {
            e[mt] = fn(n), Al(e, t, n)
        }
    };

function Al(e, {
    value: t,
    oldValue: n
}, o) {
    e._modelValue = t;
    let i;
    if (ce(t)) i = la(t, o.props.value) > -1;
    else if (so(t)) i = t.has(o.props.value);
    else {
        if (t === n) return;
        i = $n(t, Fc(e, !0))
    }
    e.checked !== i && (e.checked = i)
}
const lh = {
        created(e, {
            value: t
        }, n) {
            e.checked = $n(t, n.props.value), e[mt] = fn(n), Lt(e, "change", () => {
                e[mt](oo(e))
            })
        },
        beforeUpdate(e, {
            value: t,
            oldValue: n
        }, o) {
            e[mt] = fn(o), t !== n && (e.checked = $n(t, o.props.value))
        }
    },
    sh = {
        deep: !0,
        created(e, {
            value: t,
            modifiers: {
                number: n
            }
        }, o) {
            const i = so(t);
            Lt(e, "change", () => {
                const r = Array.prototype.filter.call(e.options, a => a.selected).map(a => n ? pi(oo(a)) : oo(a));
                e[mt](e.multiple ? i ? new Set(r) : r : r[0]), e._assigning = !0, Te(() => {
                    e._assigning = !1
                })
            }), e[mt] = fn(o)
        },
        mounted(e, {
            value: t
        }) {
            Pl(e, t)
        },
        beforeUpdate(e, t, n) {
            e[mt] = fn(n)
        },
        updated(e, {
            value: t
        }) {
            e._assigning || Pl(e, t)
        }
    };

function Pl(e, t) {
    const n = e.multiple,
        o = ce(t);
    if (!(n && !o && !so(t))) {
        for (let i = 0, r = e.options.length; i < r; i++) {
            const a = e.options[i],
                l = oo(a);
            if (n)
                if (o) {
                    const s = typeof l;
                    s === "string" || s === "number" ? a.selected = t.some(u => String(u) === String(l)) : a.selected = la(t, l) > -1
                } else a.selected = t.has(l);
            else if ($n(oo(a), t)) {
                e.selectedIndex !== i && (e.selectedIndex = i);
                return
            }
        }!n && e.selectedIndex !== -1 && (e.selectedIndex = -1)
    }
}

function oo(e) {
    return "_value" in e ? e._value : e.value
}

function Fc(e, t) {
    const n = t ? "_trueValue" : "_falseValue";
    return n in e ? e[n] : t
}
const D0 = {
    created(e, t, n) {
        ni(e, t, n, null, "created")
    },
    mounted(e, t, n) {
        ni(e, t, n, null, "mounted")
    },
    beforeUpdate(e, t, n, o) {
        ni(e, t, n, o, "beforeUpdate")
    },
    updated(e, t, n, o) {
        ni(e, t, n, o, "updated")
    }
};

function ch(e, t) {
    switch (e) {
        case "SELECT":
            return sh;
        case "TEXTAREA":
            return Il;
        default:
            switch (t) {
                case "checkbox":
                    return ah;
                case "radio":
                    return lh;
                default:
                    return Il
            }
    }
}

function ni(e, t, n, o, i) {
    const a = ch(e.tagName, n.props && n.props.type)[i];
    a && a(e, t, n, o)
}
const uh = ["ctrl", "shift", "alt", "meta"],
    fh = {
        stop: e => e.stopPropagation(),
        prevent: e => e.preventDefault(),
        self: e => e.target !== e.currentTarget,
        ctrl: e => !e.ctrlKey,
        shift: e => !e.shiftKey,
        alt: e => !e.altKey,
        meta: e => !e.metaKey,
        left: e => "button" in e && e.button !== 0,
        middle: e => "button" in e && e.button !== 1,
        right: e => "button" in e && e.button !== 2,
        exact: (e, t) => uh.some(n => e[`${n}Key`] && !t.includes(n))
    },
    O0 = (e, t) => {
        const n = e._withMods || (e._withMods = {}),
            o = t.join(".");
        return n[o] || (n[o] = (i, ...r) => {
            for (let a = 0; a < t.length; a++) {
                const l = fh[t[a]];
                if (l && l(i, t)) return
            }
            return e(i, ...r)
        })
    },
    dh = {
        esc: "escape",
        space: " ",
        up: "arrow-up",
        left: "arrow-left",
        right: "arrow-right",
        down: "arrow-down",
        delete: "backspace"
    },
    hh = (e, t) => {
        const n = e._withKeys || (e._withKeys = {}),
            o = t.join(".");
        return n[o] || (n[o] = i => {
            if (!("key" in i)) return;
            const r = Gt(i.key);
            if (t.some(a => a === r || dh[a] === r)) return e(i)
        })
    },
    vh = Ye({
        patchProp: oh
    }, Vd);
let $l;

function gh() {
    return $l || ($l = ud(vh))
}
const mh = (...e) => {
    const t = gh().createApp(...e),
        {
            mount: n
        } = t;
    return t.mount = o => {
        const i = bh(o);
        if (!i) return;
        const r = t._component;
        !ge(r) && !r.render && !r.template && (r.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
        const a = n(i, !1, yh(i));
        return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), a
    }, t
};

function yh(e) {
    if (e instanceof SVGElement) return "svg";
    if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml"
}

function bh(e) {
    return Pe(e) ? document.querySelector(e) : e
}

function jr() {}
const pe = Object.assign,
    Pt = typeof window < "u",
    Mn = e => e !== null && typeof e == "object",
    Re = e => e != null,
    io = e => typeof e == "function",
    _a = e => Mn(e) && io(e.then) && io(e.catch),
    Vo = e => Object.prototype.toString.call(e) === "[object Date]" && !Number.isNaN(e.getTime()),
    Vc = e => typeof e == "number" || /^\d+(\.\d+)?$/.test(e),
    ph = () => Pt ? /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()) : !1;

function Rl(e, t) {
    const n = t.split(".");
    let o = e;
    return n.forEach(i => {
        var r;
        o = Mn(o) && (r = o[i]) != null ? r : ""
    }), o
}

function Fe(e, t, n) {
    return t.reduce((o, i) => ((!n || e[i] !== void 0) && (o[i] = e[i]), o), {})
}
const sn = (e, t) => JSON.stringify(e) === JSON.stringify(t),
    Ii = e => Array.isArray(e) ? e : [e],
    ze = null,
    oe = [Number, String],
    te = {
        type: Boolean,
        default: !0
    },
    nt = e => ({
        type: e,
        required: !0
    }),
    dn = () => ({
        type: Array,
        default: () => []
    }),
    qi = e => ({
        type: Number,
        default: e
    }),
    ye = e => ({
        type: oe,
        default: e
    }),
    se = e => ({
        type: String,
        default: e
    });
var mn = typeof window < "u";

function lt(e) {
    return mn ? requestAnimationFrame(e) : -1
}

function Xi(e) {
    mn && cancelAnimationFrame(e)
}

function Dn(e) {
    lt(() => lt(e))
}
var wh = e => e === window,
    Bl = (e, t) => ({
        top: 0,
        left: 0,
        right: e,
        bottom: t,
        width: e,
        height: t
    }),
    Le = e => {
        const t = eo(e);
        if (wh(t)) {
            const n = t.innerWidth,
                o = t.innerHeight;
            return Bl(n, o)
        }
        return t != null && t.getBoundingClientRect ? t.getBoundingClientRect() : Bl(0, 0)
    };

function xh(e = !1) {
    const t = N(e);
    return [t, (o = !t.value) => {
        t.value = o
    }]
}

function yn(e) {
    const t = Ht(e, null);
    if (t) {
        const n = bt(),
            {
                link: o,
                unlink: i,
                internalChildren: r
            } = t;
        o(n), jo(() => i(n));
        const a = j(() => r.indexOf(n));
        return {
            parent: t,
            index: a
        }
    }
    return {
        parent: null,
        index: N(-1)
    }
}

function Sh(e) {
    const t = [],
        n = o => {
            Array.isArray(o) && o.forEach(i => {
                var r;
                Bn(i) && (t.push(i), (r = i.component) != null && r.subTree && (t.push(i.component.subTree), n(i.component.subTree.children)), i.children && n(i.children))
            })
        };
    return n(e), t
}
var Ml = (e, t) => {
    const n = e.indexOf(t);
    return n === -1 ? e.findIndex(o => t.key !== void 0 && t.key !== null && o.type === t.type && o.key === t.key) : n
};

function Ch(e, t, n) {
    const o = Sh(e.subTree.children);
    n.sort((r, a) => Ml(o, r.vnode) - Ml(o, a.vnode));
    const i = n.map(r => r.proxy);
    t.sort((r, a) => {
        const l = i.indexOf(r),
            s = i.indexOf(a);
        return l - s
    })
}

function Uo(e) {
    const t = Ke([]),
        n = Ke([]),
        o = bt();
    return {
        children: t,
        linkChildren: r => {
            uo(e, Object.assign({
                link: s => {
                    s.proxy && (n.push(s), t.push(s.proxy), Ch(o, t, n))
                },
                unlink: s => {
                    const u = n.indexOf(s);
                    t.splice(u, 1), n.splice(u, 1)
                },
                children: t,
                internalChildren: n
            }, r))
        }
    }
}
var Wr = 1e3,
    Ur = 60 * Wr,
    Yr = 60 * Ur,
    Fl = 24 * Yr;

function Th(e) {
    const t = Math.floor(e / Fl),
        n = Math.floor(e % Fl / Yr),
        o = Math.floor(e % Yr / Ur),
        i = Math.floor(e % Ur / Wr),
        r = Math.floor(e % Wr);
    return {
        total: e,
        days: t,
        hours: n,
        minutes: o,
        seconds: i,
        milliseconds: r
    }
}

function _h(e, t) {
    return Math.floor(e / 1e3) === Math.floor(t / 1e3)
}

function Eh(e) {
    let t, n, o, i;
    const r = N(e.time),
        a = j(() => Th(r.value)),
        l = () => {
            o = !1, Xi(t)
        },
        s = () => Math.max(n - Date.now(), 0),
        u = w => {
            var g, x;
            r.value = w, (g = e.onChange) == null || g.call(e, a.value), w === 0 && (l(), (x = e.onFinish) == null || x.call(e))
        },
        c = () => {
            t = lt(() => {
                o && (u(s()), r.value > 0 && c())
            })
        },
        f = () => {
            t = lt(() => {
                if (o) {
                    const w = s();
                    (!_h(w, r.value) || w === 0) && u(w), r.value > 0 && f()
                }
            })
        },
        h = () => {
            mn && (e.millisecond ? c() : f())
        },
        v = () => {
            o || (n = Date.now() + r.value, o = !0, h())
        },
        m = (w = e.time) => {
            l(), r.value = w
        };
    return Tt(l), gn(() => {
        i && (o = !0, i = !1, h())
    }), qt(() => {
        o && (l(), i = !0)
    }), {
        start: v,
        pause: l,
        reset: m,
        current: a
    }
}

function fo(e) {
    let t;
    Ge(() => {
        e(), Te(() => {
            t = !0
        })
    }), gn(() => {
        t && e()
    })
}

function it(e, t, n = {}) {
    if (!mn) return;
    const {
        target: o = window,
        passive: i = !1,
        capture: r = !1
    } = n;
    let a = !1,
        l;
    const s = f => {
            if (a) return;
            const h = eo(f);
            h && !l && (h.addEventListener(e, t, {
                capture: r,
                passive: i
            }), l = !0)
        },
        u = f => {
            if (a) return;
            const h = eo(f);
            h && l && (h.removeEventListener(e, t, r), l = !1)
        };
    jo(() => u(o)), qt(() => u(o)), fo(() => s(o));
    let c;
    return Ue(o) && (c = ie(o, (f, h) => {
        u(h), s(f)
    })), () => {
        c == null || c(), u(o), a = !0
    }
}

function Lc(e, t, n = {}) {
    if (!mn) return;
    const {
        eventName: o = "click"
    } = n;
    it(o, r => {
        (Array.isArray(e) ? e : [e]).every(s => {
            const u = eo(s);
            return u && !u.contains(r.target)
        }) && t(r)
    }, {
        target: document
    })
}
var oi, br;

function kh() {
    if (!oi && (oi = N(0), br = N(0), mn)) {
        const e = () => {
            oi.value = window.innerWidth, br.value = window.innerHeight
        };
        e(), window.addEventListener("resize", e, {
            passive: !0
        }), window.addEventListener("orientationchange", e, {
            passive: !0
        })
    }
    return {
        width: oi,
        height: br
    }
}
var Dh = /scroll|auto|overlay/i,
    Nc = mn ? window : void 0;

function Oh(e) {
    return e.tagName !== "HTML" && e.tagName !== "BODY" && e.nodeType === 1
}

function Hc(e, t = Nc) {
    let n = e;
    for (; n && n !== t && Oh(n);) {
        const {
            overflowY: o
        } = window.getComputedStyle(n);
        if (Dh.test(o)) return n;
        n = n.parentNode
    }
    return t
}

function Zi(e, t = Nc) {
    const n = N();
    return Ge(() => {
        e.value && (n.value = Hc(e.value, t))
    }), n
}
var ii;

function Ih() {
    if (!ii && (ii = N("visible"), mn)) {
        const e = () => {
            ii.value = document.hidden ? "hidden" : "visible"
        };
        e(), window.addEventListener("visibilitychange", e)
    }
    return ii
}
var zc = Symbol("van-field");

function Yo(e) {
    const t = Ht(zc, null);
    t && !t.customValue.value && (t.customValue.value = e, ie(e, () => {
        t.resetValidation(), t.validateWithTrigger("onChange")
    }))
}

function Ko(e) {
    const t = "scrollTop" in e ? e.scrollTop : e.pageYOffset;
    return Math.max(t, 0)
}

function Ai(e, t) {
    "scrollTop" in e ? e.scrollTop = t : e.scrollTo(e.scrollX, t)
}

function Ea() {
    return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
}

function ka(e) {
    Ai(window, e), Ai(document.body, e)
}

function Vl(e, t) {
    if (e === window) return 0;
    const n = t ? Ko(t) : Ea();
    return Le(e).top + n
}
const Ah = ph();

function Ph() {
    Ah && ka(Ea())
}
const Da = e => e.stopPropagation();

function ot(e, t) {
    (typeof e.cancelable != "boolean" || e.cancelable) && e.preventDefault(), t && Da(e)
}

function ro(e) {
    const t = eo(e);
    if (!t) return !1;
    const n = window.getComputedStyle(t),
        o = n.display === "none",
        i = t.offsetParent === null && n.position !== "fixed";
    return o || i
}
const {
    width: zt,
    height: cn
} = kh();

function Se(e) {
    if (Re(e)) return Vc(e) ? `${e}px` : String(e)
}

function bn(e) {
    if (Re(e)) {
        if (Array.isArray(e)) return {
            width: Se(e[0]),
            height: Se(e[1])
        };
        const t = Se(e);
        return {
            width: t,
            height: t
        }
    }
}

function Oa(e) {
    const t = {};
    return e !== void 0 && (t.zIndex = +e), t
}
let pr;

function $h() {
    if (!pr) {
        const e = document.documentElement,
            t = e.style.fontSize || window.getComputedStyle(e).fontSize;
        pr = parseFloat(t)
    }
    return pr
}

function Rh(e) {
    return e = e.replace(/rem/g, ""), +e * $h()
}

function Bh(e) {
    return e = e.replace(/vw/g, ""), +e * zt.value / 100
}

function Mh(e) {
    return e = e.replace(/vh/g, ""), +e * cn.value / 100
}

function Ia(e) {
    if (typeof e == "number") return e;
    if (Pt) {
        if (e.includes("rem")) return Rh(e);
        if (e.includes("vw")) return Bh(e);
        if (e.includes("vh")) return Mh(e)
    }
    return parseFloat(e)
}
const Fh = /-(\w)/g,
    jc = e => e.replace(Fh, (t, n) => n.toUpperCase()),
    Vh = e => e.replace(/([A-Z])/g, "-$1").toLowerCase().replace(/^-/, "");

function kn(e, t = 2) {
    let n = e + "";
    for (; n.length < t;) n = "0" + n;
    return n
}
const qe = (e, t, n) => Math.min(Math.max(e, t), n);

function Ll(e, t, n) {
    const o = e.indexOf(t);
    return o === -1 ? e : t === "-" && o !== 0 ? e.slice(0, o) : e.slice(0, o + 1) + e.slice(o).replace(n, "")
}

function Lh(e, t = !0, n = !0) {
    t ? e = Ll(e, ".", /\./g) : e = e.split(".")[0], n ? e = Ll(e, "-", /-/g) : e = e.replace(/-/, "");
    const o = t ? /[^-0-9.]/g : /[^-0-9]/g;
    return e.replace(o, "")
}

function Nh(e, t) {
    return Math.round((e + t) * 1e10) / 1e10
}
const {
    hasOwnProperty: Hh
} = Object.prototype;

function zh(e, t, n) {
    const o = t[n];
    Re(o) && (!Hh.call(e, n) || !Mn(o) ? e[n] = o : e[n] = Wc(Object(e[n]), o))
}

function Wc(e, t) {
    return Object.keys(t).forEach(n => {
        zh(e, t, n)
    }), e
}
var jh = {
    name: "姓名",
    tel: "电话",
    save: "保存",
    clear: "清空",
    cancel: "取消",
    confirm: "确认",
    delete: "删除",
    loading: "加载中...",
    noCoupon: "暂无优惠券",
    nameEmpty: "请填写姓名",
    addContact: "添加联系人",
    telInvalid: "请填写正确的电话",
    vanCalendar: {
        end: "结束",
        start: "开始",
        title: "日期选择",
        weekdays: ["日", "一", "二", "三", "四", "五", "六"],
        monthTitle: (e, t) => `${e}年${t}月`,
        rangePrompt: e => `最多选择 ${e} 天`
    },
    vanCascader: {
        select: "请选择"
    },
    vanPagination: {
        prev: "上一页",
        next: "下一页"
    },
    vanPullRefresh: {
        pulling: "下拉即可刷新...",
        loosing: "释放即可刷新..."
    },
    vanSubmitBar: {
        label: "合计:"
    },
    vanCoupon: {
        unlimited: "无门槛",
        discount: e => `${e}折`,
        condition: e => `满${e}元可用`
    },
    vanCouponCell: {
        title: "优惠券",
        count: e => `${e}张可用`
    },
    vanCouponList: {
        exchange: "兑换",
        close: "不使用",
        enable: "可用",
        disabled: "不可用",
        placeholder: "输入优惠码"
    },
    vanAddressEdit: {
        area: "地区",
        areaEmpty: "请选择地区",
        addressEmpty: "请填写详细地址",
        addressDetail: "详细地址",
        defaultAddress: "设为默认收货地址"
    },
    vanAddressList: {
        add: "新增地址"
    }
};
const Nl = N("zh-CN"),
    Hl = Ke({
        "zh-CN": jh
    }),
    Wh = {
        messages() {
            return Hl[Nl.value]
        },
        use(e, t) {
            Nl.value = e, this.add({
                [e]: t
            })
        },
        add(e = {}) {
            Wc(Hl, e)
        }
    };
var Uh = Wh;

function Yh(e) {
    const t = jc(e) + ".";
    return (n, ...o) => {
        const i = Uh.messages(),
            r = Rl(i, t + n) || Rl(i, n);
        return io(r) ? r(...o) : r
    }
}

function Kr(e, t) {
    return t ? typeof t == "string" ? ` ${e}--${t}` : Array.isArray(t) ? t.reduce((n, o) => n + Kr(e, o), "") : Object.keys(t).reduce((n, o) => n + (t[o] ? Kr(e, o) : ""), "") : ""
}

function Kh(e) {
    return (t, n) => (t && typeof t != "string" && (n = t, t = ""), t = t ? `${e}__${t}` : e, `${t}${Kr(t,n)}`)
}

function ae(e) {
    const t = `van-${e}`;
    return [t, Kh(t), Yh(t)]
}
const Vn = "van-hairline",
    Gh = `${Vn}--top`,
    Uc = `${Vn}--left`,
    qh = `${Vn}--right`,
    Xh = `${Vn}--bottom`,
    Yc = `${Vn}--surround`,
    Zh = `${Vn}--top-bottom`,
    Jh = `${Vn}-unset--top-bottom`,
    Fn = "van-haptics-feedback",
    Qh = Symbol("van-form"),
    ev = 500,
    zl = 5;

function Go(e, {
    args: t = [],
    done: n,
    canceled: o,
    error: i
}) {
    if (e) {
        const r = e.apply(null, t);
        _a(r) ? r.then(a => {
            a ? n() : o && o()
        }).catch(i || jr) : r ? n() : o && o()
    } else n()
}

function me(e) {
    return e.install = t => {
        const {
            name: n
        } = e;
        n && (t.component(n, e), t.component(jc(`-${n}`), e))
    }, e
}

function jl(e, t) {
    return e.reduce((n, o) => Math.abs(n - t) < Math.abs(o - t) ? n : o)
}
const Kc = Symbol();

function Ji(e) {
    const t = Ht(Kc, null);
    t && ie(t, n => {
        n && e()
    })
}
const Gc = (e, t) => {
    const n = N(),
        o = () => {
            n.value = Le(e).height
        };
    return Ge(() => {
        if (Te(o), t)
            for (let i = 1; i <= 3; i++) setTimeout(o, 100 * i)
    }), Ji(() => Te(o)), ie([zt, cn], o), n
};

function tv(e, t) {
    const n = Gc(e, !0);
    return o => d("div", {
        class: t("placeholder"),
        style: {
            height: n.value ? `${n.value}px` : void 0
        }
    }, [o()])
}
const [qc, Wl] = ae("action-bar"), Xc = Symbol(qc), nv = {
    placeholder: Boolean,
    safeAreaInsetBottom: te
};
var ov = re({
    name: qc,
    props: nv,
    setup(e, {
        slots: t
    }) {
        const n = N(),
            o = tv(n, Wl),
            {
                linkChildren: i
            } = Uo(Xc);
        i();
        const r = () => {
            var a;
            return d("div", {
                ref: n,
                class: [Wl(), {
                    "van-safe-area-bottom": e.safeAreaInsetBottom
                }]
            }, [(a = t.default) == null ? void 0 : a.call(t)])
        };
        return () => e.placeholder ? o(r) : r()
    }
});
const iv = me(ov);

function Ve(e) {
    const t = bt();
    t && pe(t.proxy, e)
}
const Qi = {
    to: [String, Object],
    url: String,
    replace: Boolean
};

function Zc({
    to: e,
    url: t,
    replace: n,
    $router: o
}) {
    e && o ? o[n ? "replace" : "push"](e) : t && (n ? location.replace(t) : location.href = t)
}

function Aa() {
    const e = bt().proxy;
    return () => Zc(e)
}
const [rv, Ul] = ae("badge"), av = {
    dot: Boolean,
    max: oe,
    tag: se("div"),
    color: String,
    offset: Array,
    content: oe,
    showZero: te,
    position: se("top-right")
};
var lv = re({
    name: rv,
    props: av,
    setup(e, {
        slots: t
    }) {
        const n = () => {
                if (t.content) return !0;
                const {
                    content: l,
                    showZero: s
                } = e;
                return Re(l) && l !== "" && (s || l !== 0 && l !== "0")
            },
            o = () => {
                const {
                    dot: l,
                    max: s,
                    content: u
                } = e;
                if (!l && n()) return t.content ? t.content() : Re(s) && Vc(u) && +u > +s ? `${s}+` : u
            },
            i = l => l.startsWith("-") ? l.replace("-", "") : `-${l}`,
            r = j(() => {
                const l = {
                    background: e.color
                };
                if (e.offset) {
                    const [s, u] = e.offset, {
                        position: c
                    } = e, [f, h] = c.split("-");
                    t.default ? (typeof u == "number" ? l[f] = Se(f === "top" ? u : -u) : l[f] = f === "top" ? Se(u) : i(u), typeof s == "number" ? l[h] = Se(h === "left" ? s : -s) : l[h] = h === "left" ? Se(s) : i(s)) : (l.marginTop = Se(u), l.marginLeft = Se(s))
                }
                return l
            }),
            a = () => {
                if (n() || e.dot) return d("div", {
                    class: Ul([e.position, {
                        dot: e.dot,
                        fixed: !!t.default
                    }]),
                    style: r.value
                }, [o()])
            };
        return () => {
            if (t.default) {
                const {
                    tag: l
                } = e;
                return d(l, {
                    class: Ul("wrapper")
                }, {
                    default: () => [t.default(), a()]
                })
            }
            return a()
        }
    }
});
const Jc = me(lv);
let Qc = 2e3;
const sv = () => ++Qc,
    cv = e => {
        Qc = e
    },
    [eu, uv] = ae("config-provider"),
    tu = Symbol(eu),
    fv = {
        tag: se("div"),
        theme: se("light"),
        zIndex: Number,
        themeVars: Object,
        themeVarsDark: Object,
        themeVarsLight: Object,
        themeVarsScope: se("local"),
        iconPrefix: String
    };

function dv(e) {
    return e.replace(/([a-zA-Z])(\d)/g, "$1-$2")
}

function hv(e) {
    const t = {};
    return Object.keys(e).forEach(n => {
        const o = dv(Vh(n));
        t[`--van-${o}`] = e[n]
    }), t
}

function ri(e = {}, t = {}) {
    Object.keys(e).forEach(n => {
        e[n] !== t[n] && document.documentElement.style.setProperty(n, e[n])
    }), Object.keys(t).forEach(n => {
        e[n] || document.documentElement.style.removeProperty(n)
    })
}
var vv = re({
    name: eu,
    props: fv,
    setup(e, {
        slots: t
    }) {
        const n = j(() => hv(pe({}, e.themeVars, e.theme === "dark" ? e.themeVarsDark : e.themeVarsLight)));
        if (Pt) {
            const o = () => {
                    document.documentElement.classList.add(`van-theme-${e.theme}`)
                },
                i = (r = e.theme) => {
                    document.documentElement.classList.remove(`van-theme-${r}`)
                };
            ie(() => e.theme, (r, a) => {
                a && i(a), o()
            }, {
                immediate: !0
            }), gn(o), qt(i), Tt(i), ie(n, (r, a) => {
                e.themeVarsScope === "global" && ri(r, a)
            }), ie(() => e.themeVarsScope, (r, a) => {
                a === "global" && ri({}, n.value), r === "global" && ri(n.value, {})
            }), e.themeVarsScope === "global" && ri(n.value, {})
        }
        return uo(tu, e), Ui(() => {
            e.zIndex !== void 0 && cv(e.zIndex)
        }), () => d(e.tag, {
            class: uv(),
            style: e.themeVarsScope === "local" ? n.value : void 0
        }, {
            default: () => {
                var o;
                return [(o = t.default) == null ? void 0 : o.call(t)]
            }
        })
    }
});
const [gv, Yl] = ae("icon"), mv = e => e == null ? void 0 : e.includes("/"), yv = {
    dot: Boolean,
    tag: se("i"),
    name: String,
    size: oe,
    badge: oe,
    color: String,
    badgeProps: Object,
    classPrefix: String
};
var bv = re({
    name: gv,
    props: yv,
    setup(e, {
        slots: t
    }) {
        const n = Ht(tu, null),
            o = j(() => e.classPrefix || (n == null ? void 0 : n.iconPrefix) || Yl());
        return () => {
            const {
                tag: i,
                dot: r,
                name: a,
                size: l,
                badge: s,
                color: u
            } = e, c = mv(a);
            return d(Jc, $e({
                dot: r,
                tag: i,
                class: [o.value, c ? "" : `${o.value}-${a}`],
                style: {
                    color: u,
                    fontSize: Se(l)
                },
                content: s
            }, e.badgeProps), {
                default: () => {
                    var f;
                    return [(f = t.default) == null ? void 0 : f.call(t), c && d("img", {
                        class: Yl("image"),
                        src: a
                    }, null)]
                }
            })
        }
    }
});
const Me = me(bv);
var pv = Me;
const [wv, Ao] = ae("loading"), xv = Array(12).fill(null).map((e, t) => d("i", {
    class: Ao("line", String(t + 1))
}, null)), Sv = d("svg", {
    class: Ao("circular"),
    viewBox: "25 25 50 50"
}, [d("circle", {
    cx: "50",
    cy: "50",
    r: "20",
    fill: "none"
}, null)]), Cv = {
    size: oe,
    type: se("circular"),
    color: String,
    vertical: Boolean,
    textSize: oe,
    textColor: String
};
var Tv = re({
    name: wv,
    props: Cv,
    setup(e, {
        slots: t
    }) {
        const n = j(() => pe({
                color: e.color
            }, bn(e.size))),
            o = () => {
                const r = e.type === "spinner" ? xv : Sv;
                return d("span", {
                    class: Ao("spinner", e.type),
                    style: n.value
                }, [t.icon ? t.icon() : r])
            },
            i = () => {
                var r;
                if (t.default) return d("span", {
                    class: Ao("text"),
                    style: {
                        fontSize: Se(e.textSize),
                        color: (r = e.textColor) != null ? r : e.color
                    }
                }, [t.default()])
            };
        return () => {
            const {
                type: r,
                vertical: a
            } = e;
            return d("div", {
                class: Ao([r, {
                    vertical: a
                }]),
                "aria-live": "polite",
                "aria-busy": !0
            }, [o(), i()])
        }
    }
});
const Zt = me(Tv),
    [_v, Nn] = ae("button"),
    Ev = pe({}, Qi, {
        tag: se("button"),
        text: String,
        icon: String,
        type: se("default"),
        size: se("normal"),
        color: String,
        block: Boolean,
        plain: Boolean,
        round: Boolean,
        square: Boolean,
        loading: Boolean,
        hairline: Boolean,
        disabled: Boolean,
        iconPrefix: String,
        nativeType: se("button"),
        loadingSize: oe,
        loadingText: String,
        loadingType: String,
        iconPosition: se("left")
    });
var kv = re({
    name: _v,
    props: Ev,
    emits: ["click"],
    setup(e, {
        emit: t,
        slots: n
    }) {
        const o = Aa(),
            i = () => n.loading ? n.loading() : d(Zt, {
                size: e.loadingSize,
                type: e.loadingType,
                class: Nn("loading")
            }, null),
            r = () => {
                if (e.loading) return i();
                if (n.icon) return d("div", {
                    class: Nn("icon")
                }, [n.icon()]);
                if (e.icon) return d(Me, {
                    name: e.icon,
                    class: Nn("icon"),
                    classPrefix: e.iconPrefix
                }, null)
            },
            a = () => {
                let u;
                if (e.loading ? u = e.loadingText : u = n.default ? n.default() : e.text, u) return d("span", {
                    class: Nn("text")
                }, [u])
            },
            l = () => {
                const {
                    color: u,
                    plain: c
                } = e;
                if (u) {
                    const f = {
                        color: c ? u : "white"
                    };
                    return c || (f.background = u), u.includes("gradient") ? f.border = 0 : f.borderColor = u, f
                }
            },
            s = u => {
                e.loading ? ot(u) : e.disabled || (t("click", u), o())
            };
        return () => {
            const {
                tag: u,
                type: c,
                size: f,
                block: h,
                round: v,
                plain: m,
                square: w,
                loading: g,
                disabled: x,
                hairline: y,
                nativeType: C,
                iconPosition: S
            } = e, T = [Nn([c, f, {
                plain: m,
                block: h,
                round: v,
                square: w,
                loading: g,
                disabled: x,
                hairline: y
            }]), {
                [Yc]: y
            }];
            return d(u, {
                type: C,
                class: T,
                style: l(),
                disabled: x,
                onClick: s
            }, {
                default: () => [d("div", {
                    class: Nn("content")
                }, [S === "left" && r(), a(), S === "right" && r()])]
            })
        }
    }
});
const Pi = me(kv),
    [Dv, Ov] = ae("action-bar-button"),
    Iv = pe({}, Qi, {
        type: String,
        text: String,
        icon: String,
        color: String,
        loading: Boolean,
        disabled: Boolean
    });
var Av = re({
    name: Dv,
    props: Iv,
    setup(e, {
        slots: t
    }) {
        const n = Aa(),
            {
                parent: o,
                index: i
            } = yn(Xc),
            r = j(() => {
                if (o) {
                    const l = o.children[i.value - 1];
                    return !(l && "isButton" in l)
                }
            }),
            a = j(() => {
                if (o) {
                    const l = o.children[i.value + 1];
                    return !(l && "isButton" in l)
                }
            });
        return Ve({
            isButton: !0
        }), () => {
            const {
                type: l,
                icon: s,
                text: u,
                color: c,
                loading: f,
                disabled: h
            } = e;
            return d(Pi, {
                class: Ov([l, {
                    last: a.value,
                    first: r.value
                }]),
                size: "large",
                type: l,
                icon: s,
                color: c,
                loading: f,
                disabled: h,
                onClick: n
            }, {
                default: () => [t.default ? t.default() : u]
            })
        }
    }
});
const Kl = me(Av),
    Pa = {
        show: Boolean,
        zIndex: oe,
        overlay: te,
        duration: oe,
        teleport: [String, Object],
        lockScroll: te,
        lazyRender: te,
        beforeClose: Function,
        overlayStyle: Object,
        overlayClass: ze,
        transitionAppear: Boolean,
        closeOnClickOverlay: te
    },
    Pv = Object.keys(Pa);

function $v(e, t) {
    return e > t ? "horizontal" : t > e ? "vertical" : ""
}

function pn() {
    const e = N(0),
        t = N(0),
        n = N(0),
        o = N(0),
        i = N(0),
        r = N(0),
        a = N(""),
        l = N(!0),
        s = () => a.value === "vertical",
        u = () => a.value === "horizontal",
        c = () => {
            n.value = 0, o.value = 0, i.value = 0, r.value = 0, a.value = "", l.value = !0
        };
    return {
        move: v => {
            const m = v.touches[0];
            n.value = (m.clientX < 0 ? 0 : m.clientX) - e.value, o.value = m.clientY - t.value, i.value = Math.abs(n.value), r.value = Math.abs(o.value);
            const w = 10;
            (!a.value || i.value < w && r.value < w) && (a.value = $v(i.value, r.value)), l.value && (i.value > zl || r.value > zl) && (l.value = !1)
        },
        start: v => {
            c(), e.value = v.touches[0].clientX, t.value = v.touches[0].clientY
        },
        reset: c,
        startX: e,
        startY: t,
        deltaX: n,
        deltaY: o,
        offsetX: i,
        offsetY: r,
        direction: a,
        isVertical: s,
        isHorizontal: u,
        isTap: l
    }
}
let yo = 0;
const Gl = "van-overflow-hidden";

function Rv(e, t) {
    const n = pn(),
        o = "01",
        i = "10",
        r = c => {
            n.move(c);
            const f = n.deltaY.value > 0 ? i : o,
                h = Hc(c.target, e.value),
                {
                    scrollHeight: v,
                    offsetHeight: m,
                    scrollTop: w
                } = h;
            let g = "11";
            w === 0 ? g = m >= v ? "00" : "01" : w + m >= v && (g = "10"), g !== "11" && n.isVertical() && !(parseInt(g, 2) & parseInt(f, 2)) && ot(c, !0)
        },
        a = () => {
            document.addEventListener("touchstart", n.start), document.addEventListener("touchmove", r, {
                passive: !1
            }), yo || document.body.classList.add(Gl), yo++
        },
        l = () => {
            yo && (document.removeEventListener("touchstart", n.start), document.removeEventListener("touchmove", r), yo--, yo || document.body.classList.remove(Gl))
        },
        s = () => t() && a(),
        u = () => t() && l();
    fo(s), qt(u), Tt(u), ie(t, c => {
        c ? a() : l()
    })
}

function nu(e) {
    const t = N(!1);
    return ie(e, n => {
        n && (t.value = n)
    }, {
        immediate: !0
    }), n => () => t.value ? n() : null
}
const Gr = () => {
        var e;
        const {
            scopeId: t
        } = ((e = bt()) == null ? void 0 : e.vnode) || {};
        return t ? {
            [t]: ""
        } : null
    },
    [Bv, Mv] = ae("overlay"),
    Fv = {
        show: Boolean,
        zIndex: oe,
        duration: oe,
        className: ze,
        lockScroll: te,
        lazyRender: te,
        customStyle: Object,
        teleport: [String, Object]
    };
var Vv = re({
    name: Bv,
    props: Fv,
    setup(e, {
        slots: t
    }) {
        const n = N(),
            o = nu(() => e.show || !e.lazyRender),
            i = a => {
                e.lockScroll && ot(a, !0)
            },
            r = o(() => {
                var a;
                const l = pe(Oa(e.zIndex), e.customStyle);
                return Re(e.duration) && (l.animationDuration = `${e.duration}s`), Wt(d("div", {
                    ref: n,
                    style: l,
                    class: [Mv(), e.className]
                }, [(a = t.default) == null ? void 0 : a.call(t)]), [
                    [un, e.show]
                ])
            });
        return it("touchmove", i, {
            target: n
        }), () => {
            const a = d(Ta, {
                name: "van-fade",
                appear: !0
            }, {
                default: r
            });
            return e.teleport ? d(ji, {
                to: e.teleport
            }, {
                default: () => [a]
            }) : a
        }
    }
});
const Lv = me(Vv),
    Nv = pe({}, Pa, {
        round: Boolean,
        position: se("center"),
        closeIcon: se("cross"),
        closeable: Boolean,
        transition: String,
        iconPrefix: String,
        closeOnPopstate: Boolean,
        closeIconPosition: se("top-right"),
        destroyOnClose: Boolean,
        safeAreaInsetTop: Boolean,
        safeAreaInsetBottom: Boolean
    }),
    [Hv, ql] = ae("popup");
var zv = re({
    name: Hv,
    inheritAttrs: !1,
    props: Nv,
    emits: ["open", "close", "opened", "closed", "keydown", "update:show", "clickOverlay", "clickCloseIcon"],
    setup(e, {
        emit: t,
        attrs: n,
        slots: o
    }) {
        let i, r;
        const a = N(),
            l = N(),
            s = nu(() => e.show || !e.lazyRender),
            u = j(() => {
                const O = {
                    zIndex: a.value
                };
                if (Re(e.duration)) {
                    const z = e.position === "center" ? "animationDuration" : "transitionDuration";
                    O[z] = `${e.duration}s`
                }
                return O
            }),
            c = () => {
                i || (i = !0, a.value = e.zIndex !== void 0 ? +e.zIndex : sv(), t("open"))
            },
            f = () => {
                i && Go(e.beforeClose, {
                    done() {
                        i = !1, t("close"), t("update:show", !1)
                    }
                })
            },
            h = O => {
                t("clickOverlay", O), e.closeOnClickOverlay && f()
            },
            v = () => {
                if (e.overlay) return d(Lv, $e({
                    show: e.show,
                    class: e.overlayClass,
                    zIndex: a.value,
                    duration: e.duration,
                    customStyle: e.overlayStyle,
                    role: e.closeOnClickOverlay ? "button" : void 0,
                    tabindex: e.closeOnClickOverlay ? 0 : void 0
                }, Gr(), {
                    onClick: h
                }), {
                    default: o["overlay-content"]
                })
            },
            m = O => {
                t("clickCloseIcon", O), f()
            },
            w = () => {
                if (e.closeable) return d(Me, {
                    role: "button",
                    tabindex: 0,
                    name: e.closeIcon,
                    class: [ql("close-icon", e.closeIconPosition), Fn],
                    classPrefix: e.iconPrefix,
                    onClick: m
                }, null)
            };
        let g;
        const x = () => {
                g && clearTimeout(g), g = setTimeout(() => {
                    t("opened")
                })
            },
            y = () => t("closed"),
            C = O => t("keydown", O),
            S = s(() => {
                var O;
                const {
                    destroyOnClose: z,
                    round: P,
                    position: $,
                    safeAreaInsetTop: D,
                    safeAreaInsetBottom: p,
                    show: _
                } = e;
                if (!(!_ && z)) return Wt(d("div", $e({
                    ref: l,
                    style: u.value,
                    role: "dialog",
                    tabindex: 0,
                    class: [ql({
                        round: P,
                        [$]: $
                    }), {
                        "van-safe-area-top": D,
                        "van-safe-area-bottom": p
                    }],
                    onKeydown: C
                }, n, Gr()), [(O = o.default) == null ? void 0 : O.call(o), w()]), [
                    [un, _]
                ])
            }),
            T = () => {
                const {
                    position: O,
                    transition: z,
                    transitionAppear: P
                } = e, $ = O === "center" ? "van-fade" : `van-popup-slide-${O}`;
                return d(Ta, {
                    name: z || $,
                    appear: P,
                    onAfterEnter: x,
                    onAfterLeave: y
                }, {
                    default: S
                })
            };
        return ie(() => e.show, O => {
            O && !i && (c(), n.tabindex === 0 && Te(() => {
                var z;
                (z = l.value) == null || z.focus()
            })), !O && i && (i = !1, t("close"))
        }), Ve({
            popupRef: l
        }), Rv(l, () => e.show && e.lockScroll), it("popstate", () => {
            e.closeOnPopstate && (f(), r = !1)
        }), Ge(() => {
            e.show && c()
        }), gn(() => {
            r && (t("update:show", !0), r = !1)
        }), qt(() => {
            e.show && e.teleport && (f(), r = !0)
        }), uo(Kc, () => e.show), () => e.teleport ? d(ji, {
            to: e.teleport
        }, {
            default: () => [v(), T()]
        }) : d(Je, null, [v(), T()])
    }
});
const qo = me(zv),
    [jv, Nt, Xl] = ae("picker"),
    ou = e => e.find(t => !t.disabled) || e[0];

function Wv(e, t) {
    const n = e[0];
    if (n) {
        if (Array.isArray(n)) return "multiple";
        if (t.children in n) return "cascade"
    }
    return "default"
}

function mi(e, t) {
    t = qe(t, 0, e.length);
    for (let n = t; n < e.length; n++)
        if (!e[n].disabled) return n;
    for (let n = t - 1; n >= 0; n--)
        if (!e[n].disabled) return n;
    return 0
}
const Zl = (e, t, n) => t !== void 0 && !!e.find(o => o[n.value] === t);

function qr(e, t, n) {
    const o = e.findIndex(r => r[n.value] === t),
        i = mi(e, o);
    return e[i]
}

function Uv(e, t, n) {
    const o = [];
    let i = {
            [t.children]: e
        },
        r = 0;
    for (; i && i[t.children];) {
        const a = i[t.children],
            l = n.value[r];
        if (i = Re(l) ? qr(a, l, t) : void 0, !i && a.length) {
            const s = ou(a)[t.value];
            i = qr(a, s, t)
        }
        r++, o.push(a)
    }
    return o
}

function Yv(e) {
    const {
        transform: t
    } = window.getComputedStyle(e), n = t.slice(7, t.length - 1).split(", ")[5];
    return Number(n)
}

function Kv(e) {
    return pe({
        text: "text",
        value: "value",
        children: "children"
    }, e)
}
const Jl = 200,
    Ql = 300,
    Gv = 15,
    [iu, wr] = ae("picker-column"),
    ru = Symbol(iu);
var qv = re({
    name: iu,
    props: {
        value: oe,
        fields: nt(Object),
        options: dn(),
        readonly: Boolean,
        allowHtml: Boolean,
        optionHeight: nt(Number),
        swipeDuration: nt(oe),
        visibleOptionNum: nt(oe)
    },
    emits: ["change", "clickOption", "scrollInto"],
    setup(e, {
        emit: t,
        slots: n
    }) {
        let o, i, r, a, l;
        const s = N(),
            u = N(),
            c = N(0),
            f = N(0),
            h = pn(),
            v = () => e.options.length,
            m = () => e.optionHeight * (+e.visibleOptionNum - 1) / 2,
            w = D => {
                let p = mi(e.options, D);
                const _ = -p * e.optionHeight,
                    A = () => {
                        p > v() - 1 && (p = mi(e.options, D));
                        const X = e.options[p][e.fields.value];
                        X !== e.value && t("change", X)
                    };
                o && _ !== c.value ? l = A : A(), c.value = _
            },
            g = () => e.readonly || !e.options.length,
            x = D => {
                o || g() || (l = null, f.value = Jl, w(D), t("clickOption", e.options[D]))
            },
            y = D => qe(Math.round(-D / e.optionHeight), 0, v() - 1),
            C = j(() => y(c.value)),
            S = (D, p) => {
                const _ = Math.abs(D / p);
                D = c.value + _ / .003 * (D < 0 ? -1 : 1);
                const A = y(D);
                f.value = +e.swipeDuration, w(A)
            },
            T = () => {
                o = !1, f.value = 0, l && (l(), l = null)
            },
            O = D => {
                if (!g()) {
                    if (h.start(D), o) {
                        const p = Yv(u.value);
                        c.value = Math.min(0, p - m())
                    }
                    f.value = 0, i = c.value, r = Date.now(), a = i, l = null
                }
            },
            z = D => {
                if (g()) return;
                h.move(D), h.isVertical() && (o = !0, ot(D, !0));
                const p = qe(i + h.deltaY.value, -(v() * e.optionHeight), e.optionHeight),
                    _ = y(p);
                _ !== C.value && t("scrollInto", e.options[_]), c.value = p;
                const A = Date.now();
                A - r > Ql && (r = A, a = p)
            },
            P = () => {
                if (g()) return;
                const D = c.value - a,
                    p = Date.now() - r;
                if (p < Ql && Math.abs(D) > Gv) {
                    S(D, p);
                    return
                }
                const A = y(c.value);
                f.value = Jl, w(A), setTimeout(() => {
                    o = !1
                }, 0)
            },
            $ = () => {
                const D = {
                    height: `${e.optionHeight}px`
                };
                return e.options.map((p, _) => {
                    const A = p[e.fields.text],
                        {
                            disabled: X
                        } = p,
                        le = p[e.fields.value],
                        L = {
                            role: "button",
                            style: D,
                            tabindex: X ? -1 : 0,
                            class: [wr("item", {
                                disabled: X,
                                selected: le === e.value
                            }), p.className],
                            onClick: () => x(_)
                        },
                        G = {
                            class: "van-ellipsis",
                            [e.allowHtml ? "innerHTML" : "textContent"]: A
                        };
                    return d("li", L, [n.option ? n.option(p, _) : d("div", G, null)])
                })
            };
        return yn(ru), Ve({
            stopMomentum: T
        }), Ui(() => {
            const D = o ? Math.floor(-c.value / e.optionHeight) : e.options.findIndex(A => A[e.fields.value] === e.value),
                p = mi(e.options, D),
                _ = -p * e.optionHeight;
            o && p < D && T(), c.value = _
        }), it("touchmove", z, {
            target: s
        }), () => d("div", {
            ref: s,
            class: wr(),
            onTouchstartPassive: O,
            onTouchend: P,
            onTouchcancel: P
        }, [d("ul", {
            ref: u,
            style: {
                transform: `translate3d(0, ${c.value+m()}px, 0)`,
                transitionDuration: `${f.value}ms`,
                transitionProperty: f.value ? "all" : "none"
            },
            class: wr("wrapper"),
            onTransitionend: T
        }, [$()])])
    }
});
const [Xv] = ae("picker-toolbar"), er = {
    title: String,
    cancelButtonText: String,
    confirmButtonText: String
}, Zv = ["cancel", "confirm", "title", "toolbar"], Jv = Object.keys(er);
var Qv = re({
    name: Xv,
    props: er,
    emits: ["confirm", "cancel"],
    setup(e, {
        emit: t,
        slots: n
    }) {
        const o = () => {
                if (n.title) return n.title();
                if (e.title) return d("div", {
                    class: [Nt("title"), "van-ellipsis"]
                }, [e.title])
            },
            i = () => t("cancel"),
            r = () => t("confirm"),
            a = () => {
                var s;
                const u = (s = e.cancelButtonText) != null ? s : Xl("cancel");
                if (!(!n.cancel && !u)) return d("button", {
                    type: "button",
                    class: [Nt("cancel"), Fn],
                    onClick: i
                }, [n.cancel ? n.cancel() : u])
            },
            l = () => {
                var s;
                const u = (s = e.confirmButtonText) != null ? s : Xl("confirm");
                if (!(!n.confirm && !u)) return d("button", {
                    type: "button",
                    class: [Nt("confirm"), Fn],
                    onClick: r
                }, [n.confirm ? n.confirm() : u])
            };
        return () => d("div", {
            class: Nt("toolbar")
        }, [n.toolbar ? n.toolbar() : [a(), o(), l()]])
    }
});
const eg = (e, t) => {
    const n = N(e());
    return ie(e, o => {
        o !== n.value && (n.value = o)
    }), ie(n, o => {
        o !== e() && t(o)
    }), n
};

function tg(e, t, n) {
    let o, i = 0;
    const r = e.scrollLeft,
        a = n === 0 ? 1 : Math.round(n * 1e3 / 16);
    let l = r;

    function s() {
        Xi(o)
    }

    function u() {
        l += (t - r) / a, e.scrollLeft = l, ++i < a && (o = lt(u))
    }
    return u(), s
}

function ng(e, t, n, o) {
    let i, r = Ko(e);
    const a = r < t,
        l = n === 0 ? 1 : Math.round(n * 1e3 / 16),
        s = (t - r) / l;

    function u() {
        Xi(i)
    }

    function c() {
        r += s, (a && r > t || !a && r < t) && (r = t), Ai(e, r), a && r < t || !a && r > t ? i = lt(c) : o && (i = lt(o))
    }
    return c(), u
}
let og = 0;

function tr() {
    const e = bt(),
        {
            name: t = "unknown"
        } = (e == null ? void 0 : e.type) || {};
    return `${t}-${++og}`
}

function au() {
    const e = N([]),
        t = [];
    return cc(() => {
        e.value = []
    }), [e, o => (t[o] || (t[o] = i => {
        e.value[o] = i
    }), t[o])]
}

function lu(e, t) {
    if (!Pt || !window.IntersectionObserver) return;
    const n = new IntersectionObserver(r => {
            t(r[0].intersectionRatio > 0)
        }, {
            root: document.body
        }),
        o = () => {
            e.value && n.observe(e.value)
        },
        i = () => {
            e.value && n.unobserve(e.value)
        };
    qt(i), Tt(i), fo(o)
}
const [ig, rg] = ae("sticky"), ag = {
    zIndex: oe,
    position: se("top"),
    container: Object,
    offsetTop: ye(0),
    offsetBottom: ye(0)
};
var lg = re({
    name: ig,
    props: ag,
    emits: ["scroll", "change"],
    setup(e, {
        emit: t,
        slots: n
    }) {
        const o = N(),
            i = Zi(o),
            r = Ke({
                fixed: !1,
                width: 0,
                height: 0,
                transform: 0
            }),
            a = N(!1),
            l = j(() => Ia(e.position === "top" ? e.offsetTop : e.offsetBottom)),
            s = j(() => {
                if (a.value) return;
                const {
                    fixed: h,
                    height: v,
                    width: m
                } = r;
                if (h) return {
                    width: `${m}px`,
                    height: `${v}px`
                }
            }),
            u = j(() => {
                if (!r.fixed || a.value) return;
                const h = pe(Oa(e.zIndex), {
                    width: `${r.width}px`,
                    height: `${r.height}px`,
                    [e.position]: `${l.value}px`
                });
                return r.transform && (h.transform = `translate3d(0, ${r.transform}px, 0)`), h
            }),
            c = h => t("scroll", {
                scrollTop: h,
                isFixed: r.fixed
            }),
            f = () => {
                if (!o.value || ro(o)) return;
                const {
                    container: h,
                    position: v
                } = e, m = Le(o), w = Ko(window);
                if (r.width = m.width, r.height = m.height, v === "top")
                    if (h) {
                        const g = Le(h),
                            x = g.bottom - l.value - r.height;
                        r.fixed = l.value > m.top && g.bottom > 0, r.transform = x < 0 ? x : 0
                    } else r.fixed = l.value > m.top;
                else {
                    const {
                        clientHeight: g
                    } = document.documentElement;
                    if (h) {
                        const x = Le(h),
                            y = g - x.top - l.value - r.height;
                        r.fixed = g - l.value < m.bottom && g > x.top, r.transform = y < 0 ? -y : 0
                    } else r.fixed = g - l.value < m.bottom
                }
                c(w)
            };
        return ie(() => r.fixed, h => t("change", h)), it("scroll", f, {
            target: i,
            passive: !0
        }), lu(o, f), ie([zt, cn], () => {
            !o.value || ro(o) || !r.fixed || (a.value = !0, Te(() => {
                const h = Le(o);
                r.width = h.width, r.height = h.height, a.value = !1
            }))
        }), () => {
            var h;
            return d("div", {
                ref: o,
                style: s.value
            }, [d("div", {
                class: rg({
                    fixed: r.fixed && !a.value
                }),
                style: u.value
            }, [(h = n.default) == null ? void 0 : h.call(n)])])
        }
    }
});
const sg = me(lg),
    [su, ai] = ae("swipe"),
    cg = {
        loop: te,
        width: oe,
        height: oe,
        vertical: Boolean,
        autoplay: ye(0),
        duration: ye(500),
        touchable: te,
        lazyRender: Boolean,
        initialSwipe: ye(0),
        indicatorColor: String,
        showIndicators: te,
        stopPropagation: te
    },
    cu = Symbol(su);
var ug = re({
    name: su,
    props: cg,
    emits: ["change", "dragStart", "dragEnd"],
    setup(e, {
        emit: t,
        slots: n
    }) {
        const o = N(),
            i = N(),
            r = Ke({
                rect: null,
                width: 0,
                height: 0,
                offset: 0,
                active: 0,
                swiping: !1
            });
        let a = !1;
        const l = pn(),
            {
                children: s,
                linkChildren: u
            } = Uo(cu),
            c = j(() => s.length),
            f = j(() => r[e.vertical ? "height" : "width"]),
            h = j(() => e.vertical ? l.deltaY.value : l.deltaX.value),
            v = j(() => r.rect ? (e.vertical ? r.rect.height : r.rect.width) - f.value * c.value : 0),
            m = j(() => f.value ? Math.ceil(Math.abs(v.value) / f.value) : c.value),
            w = j(() => c.value * f.value),
            g = j(() => (r.active + c.value) % c.value),
            x = j(() => {
                const Z = e.vertical ? "vertical" : "horizontal";
                return l.direction.value === Z
            }),
            y = j(() => {
                const Z = {
                    transitionDuration: `${r.swiping?0:e.duration}ms`,
                    transform: `translate${e.vertical?"Y":"X"}(${+r.offset.toFixed(2)}px)`
                };
                if (f.value) {
                    const R = e.vertical ? "height" : "width",
                        W = e.vertical ? "width" : "height";
                    Z[R] = `${w.value}px`, Z[W] = e[W] ? `${e[W]}px` : ""
                }
                return Z
            }),
            C = Z => {
                const {
                    active: R
                } = r;
                return Z ? e.loop ? qe(R + Z, -1, c.value) : qe(R + Z, 0, m.value) : R
            },
            S = (Z, R = 0) => {
                let W = Z * f.value;
                e.loop || (W = Math.min(W, -v.value));
                let fe = R - W;
                return e.loop || (fe = qe(fe, v.value, 0)), fe
            },
            T = ({
                pace: Z = 0,
                offset: R = 0,
                emitChange: W
            }) => {
                if (c.value <= 1) return;
                const {
                    active: fe
                } = r, F = C(Z), ee = S(F, R);
                if (e.loop) {
                    if (s[0] && ee !== v.value) {
                        const k = ee < v.value;
                        s[0].setOffset(k ? w.value : 0)
                    }
                    if (s[c.value - 1] && ee !== 0) {
                        const k = ee > 0;
                        s[c.value - 1].setOffset(k ? -w.value : 0)
                    }
                }
                r.active = F, r.offset = ee, W && F !== fe && t("change", g.value)
            },
            O = () => {
                r.swiping = !0, r.active <= -1 ? T({
                    pace: c.value
                }) : r.active >= c.value && T({
                    pace: -c.value
                })
            },
            z = () => {
                O(), l.reset(), Dn(() => {
                    r.swiping = !1, T({
                        pace: -1,
                        emitChange: !0
                    })
                })
            },
            P = () => {
                O(), l.reset(), Dn(() => {
                    r.swiping = !1, T({
                        pace: 1,
                        emitChange: !0
                    })
                })
            };
        let $;
        const D = () => clearTimeout($),
            p = () => {
                D(), +e.autoplay > 0 && c.value > 1 && ($ = setTimeout(() => {
                    P(), p()
                }, +e.autoplay))
            },
            _ = (Z = +e.initialSwipe) => {
                if (!o.value) return;
                const R = () => {
                    var W, fe;
                    if (!ro(o)) {
                        const F = {
                            width: o.value.offsetWidth,
                            height: o.value.offsetHeight
                        };
                        r.rect = F, r.width = +((W = e.width) != null ? W : F.width), r.height = +((fe = e.height) != null ? fe : F.height)
                    }
                    c.value && (Z = Math.min(c.value - 1, Z), Z === -1 && (Z = c.value - 1)), r.active = Z, r.swiping = !0, r.offset = S(Z), s.forEach(F => {
                        F.setOffset(0)
                    }), p()
                };
                ro(o) ? Te().then(R) : R()
            },
            A = () => _(r.active);
        let X;
        const le = Z => {
                !e.touchable || Z.touches.length > 1 || (l.start(Z), a = !1, X = Date.now(), D(), O())
            },
            L = Z => {
                e.touchable && r.swiping && (l.move(Z), x.value && (!e.loop && (r.active === 0 && h.value > 0 || r.active === c.value - 1 && h.value < 0) || (ot(Z, e.stopPropagation), T({
                    offset: h.value
                }), a || (t("dragStart", {
                    index: g.value
                }), a = !0))))
            },
            G = () => {
                if (!e.touchable || !r.swiping) return;
                const Z = Date.now() - X,
                    R = h.value / Z;
                if ((Math.abs(R) > .25 || Math.abs(h.value) > f.value / 2) && x.value) {
                    const fe = e.vertical ? l.offsetY.value : l.offsetX.value;
                    let F = 0;
                    e.loop ? F = fe > 0 ? h.value > 0 ? -1 : 1 : 0 : F = -Math[h.value > 0 ? "ceil" : "floor"](h.value / f.value), T({
                        pace: F,
                        emitChange: !0
                    })
                } else h.value && T({
                    pace: 0
                });
                a = !1, r.swiping = !1, t("dragEnd", {
                    index: g.value
                }), p()
            },
            Q = (Z, R = {}) => {
                O(), l.reset(), Dn(() => {
                    let W;
                    e.loop && Z === c.value ? W = r.active === 0 ? 0 : Z : W = Z % c.value, R.immediate ? Dn(() => {
                        r.swiping = !1
                    }) : r.swiping = !1, T({
                        pace: W - r.active,
                        emitChange: !0
                    })
                })
            },
            be = (Z, R) => {
                const W = R === g.value,
                    fe = W ? {
                        backgroundColor: e.indicatorColor
                    } : void 0;
                return d("i", {
                    style: fe,
                    class: ai("indicator", {
                        active: W
                    })
                }, null)
            },
            ke = () => {
                if (n.indicator) return n.indicator({
                    active: g.value,
                    total: c.value
                });
                if (e.showIndicators && c.value > 1) return d("div", {
                    class: ai("indicators", {
                        vertical: e.vertical
                    })
                }, [Array(c.value).fill("").map(be)])
            };
        return Ve({
            prev: z,
            next: P,
            state: r,
            resize: A,
            swipeTo: Q
        }), u({
            size: f,
            props: e,
            count: c,
            activeIndicator: g
        }), ie(() => e.initialSwipe, Z => _(+Z)), ie(c, () => _(r.active)), ie(() => e.autoplay, p), ie([zt, cn, () => e.width, () => e.height], A), ie(Ih(), Z => {
            Z === "visible" ? p() : D()
        }), Ge(_), gn(() => _(r.active)), Ji(() => _(r.active)), qt(D), Tt(D), it("touchmove", L, {
            target: i
        }), () => {
            var Z;
            return d("div", {
                ref: o,
                class: ai()
            }, [d("div", {
                ref: i,
                style: y.value,
                class: ai("track", {
                    vertical: e.vertical
                }),
                onTouchstartPassive: le,
                onTouchend: G,
                onTouchcancel: G
            }, [(Z = n.default) == null ? void 0 : Z.call(n)]), ke()])
        }
    }
});
const uu = me(ug),
    [fg, es] = ae("tabs");
var dg = re({
    name: fg,
    props: {
        count: nt(Number),
        inited: Boolean,
        animated: Boolean,
        duration: nt(oe),
        swipeable: Boolean,
        lazyRender: Boolean,
        currentIndex: nt(Number)
    },
    emits: ["change"],
    setup(e, {
        emit: t,
        slots: n
    }) {
        const o = N(),
            i = l => t("change", l),
            r = () => {
                var l;
                const s = (l = n.default) == null ? void 0 : l.call(n);
                return e.animated || e.swipeable ? d(uu, {
                    ref: o,
                    loop: !1,
                    class: es("track"),
                    duration: +e.duration * 1e3,
                    touchable: e.swipeable,
                    lazyRender: e.lazyRender,
                    showIndicators: !1,
                    onChange: i
                }, {
                    default: () => [s]
                }) : s
            },
            a = l => {
                const s = o.value;
                s && s.state.active !== l && s.swipeTo(l, {
                    immediate: !e.inited
                })
            };
        return ie(() => e.currentIndex, a), Ge(() => {
            a(e.currentIndex)
        }), Ve({
            swipeRef: o
        }), () => d("div", {
            class: es("content", {
                animated: e.animated || e.swipeable
            })
        }, [r()])
    }
});
const [fu, li] = ae("tabs"), hg = {
    type: se("line"),
    color: String,
    border: Boolean,
    sticky: Boolean,
    shrink: Boolean,
    active: ye(0),
    duration: ye(.3),
    animated: Boolean,
    ellipsis: te,
    swipeable: Boolean,
    scrollspy: Boolean,
    offsetTop: ye(0),
    background: String,
    lazyRender: te,
    showHeader: te,
    lineWidth: oe,
    lineHeight: oe,
    beforeChange: Function,
    swipeThreshold: ye(5),
    titleActiveColor: String,
    titleInactiveColor: String
}, du = Symbol(fu);
var vg = re({
    name: fu,
    props: hg,
    emits: ["change", "scroll", "rendered", "clickTab", "update:active"],
    setup(e, {
        emit: t,
        slots: n
    }) {
        let o, i, r, a, l;
        const s = N(),
            u = N(),
            c = N(),
            f = N(),
            h = tr(),
            v = Zi(s),
            [m, w] = au(),
            {
                children: g,
                linkChildren: x
            } = Uo(du),
            y = Ke({
                inited: !1,
                position: "",
                lineStyle: {},
                currentIndex: -1
            }),
            C = j(() => g.length > +e.swipeThreshold || !e.ellipsis || e.shrink),
            S = j(() => ({
                borderColor: e.color,
                background: e.background
            })),
            T = (F, ee) => {
                var k;
                return (k = F.name) != null ? k : ee
            },
            O = j(() => {
                const F = g[y.currentIndex];
                if (F) return T(F, y.currentIndex)
            }),
            z = j(() => Ia(e.offsetTop)),
            P = j(() => e.sticky ? z.value + o : 0),
            $ = F => {
                const ee = u.value,
                    k = m.value;
                if (!C.value || !ee || !k || !k[y.currentIndex]) return;
                const ne = k[y.currentIndex].$el,
                    q = ne.offsetLeft - (ee.offsetWidth - ne.offsetWidth) / 2;
                a && a(), a = tg(ee, q, F ? 0 : +e.duration)
            },
            D = () => {
                const F = y.inited;
                Te(() => {
                    const ee = m.value;
                    if (!ee || !ee[y.currentIndex] || e.type !== "line" || ro(s.value)) return;
                    const k = ee[y.currentIndex].$el,
                        {
                            lineWidth: ne,
                            lineHeight: q
                        } = e,
                        de = k.offsetLeft + k.offsetWidth / 2,
                        Ee = {
                            width: Se(ne),
                            backgroundColor: e.color,
                            transform: `translateX(${de}px) translateX(-50%)`
                        };
                    if (F && (Ee.transitionDuration = `${e.duration}s`), Re(q)) {
                        const b = Se(q);
                        Ee.height = b, Ee.borderRadius = b
                    }
                    y.lineStyle = Ee
                })
            },
            p = F => {
                const ee = F < y.currentIndex ? -1 : 1;
                for (; F >= 0 && F < g.length;) {
                    if (!g[F].disabled) return F;
                    F += ee
                }
            },
            _ = (F, ee) => {
                const k = p(F);
                if (!Re(k)) return;
                const ne = g[k],
                    q = T(ne, k),
                    de = y.currentIndex !== null;
                y.currentIndex !== k && (y.currentIndex = k, ee || $(), D()), q !== e.active && (t("update:active", q), de && t("change", q, ne.title)), r && !e.scrollspy && ka(Math.ceil(Vl(s.value) - z.value))
            },
            A = (F, ee) => {
                const k = g.find((q, de) => T(q, de) === F),
                    ne = k ? g.indexOf(k) : 0;
                _(ne, ee)
            },
            X = (F = !1) => {
                if (e.scrollspy) {
                    const ee = g[y.currentIndex].$el;
                    if (ee && v.value) {
                        const k = Vl(ee, v.value) - P.value;
                        i = !0, l && l(), l = ng(v.value, k, F ? 0 : +e.duration, () => {
                            i = !1
                        })
                    }
                }
            },
            le = (F, ee, k) => {
                const {
                    title: ne,
                    disabled: q
                } = g[ee], de = T(g[ee], ee);
                q || (Go(e.beforeChange, {
                    args: [de],
                    done: () => {
                        _(ee), X()
                    }
                }), Zc(F)), t("clickTab", {
                    name: de,
                    title: ne,
                    event: k,
                    disabled: q
                })
            },
            L = F => {
                r = F.isFixed, t("scroll", F)
            },
            G = F => {
                Te(() => {
                    A(F), X(!0)
                })
            },
            Q = () => {
                for (let F = 0; F < g.length; F++) {
                    const {
                        top: ee
                    } = Le(g[F].$el);
                    if (ee > P.value) return F === 0 ? 0 : F - 1
                }
                return g.length - 1
            },
            be = () => {
                if (e.scrollspy && !i) {
                    const F = Q();
                    _(F)
                }
            },
            ke = () => {
                if (e.type === "line" && g.length) return d("div", {
                    class: li("line"),
                    style: y.lineStyle
                }, null)
            },
            Z = () => {
                var F, ee, k;
                const {
                    type: ne,
                    border: q,
                    sticky: de
                } = e, Ee = [d("div", {
                    ref: de ? void 0 : c,
                    class: [li("wrap"), {
                        [Zh]: ne === "line" && q
                    }]
                }, [d("div", {
                    ref: u,
                    role: "tablist",
                    class: li("nav", [ne, {
                        shrink: e.shrink,
                        complete: C.value
                    }]),
                    style: S.value,
                    "aria-orientation": "horizontal"
                }, [(F = n["nav-left"]) == null ? void 0 : F.call(n), g.map(b => b.renderTitle(le)), ke(), (ee = n["nav-right"]) == null ? void 0 : ee.call(n)])]), (k = n["nav-bottom"]) == null ? void 0 : k.call(n)];
                return de ? d("div", {
                    ref: c
                }, [Ee]) : Ee
            },
            R = () => {
                D(), Te(() => {
                    var F, ee;
                    $(!0), (ee = (F = f.value) == null ? void 0 : F.swipeRef.value) == null || ee.resize()
                })
            };
        ie(() => [e.color, e.duration, e.lineWidth, e.lineHeight], D), ie(zt, R), ie(() => e.active, F => {
            F !== O.value && A(F)
        }), ie(() => g.length, () => {
            y.inited && (A(e.active), D(), Te(() => {
                $(!0)
            }))
        });
        const W = () => {
                A(e.active, !0), Te(() => {
                    y.inited = !0, c.value && (o = Le(c.value).height), $(!0)
                })
            },
            fe = (F, ee) => t("rendered", F, ee);
        return Ve({
            resize: R,
            scrollTo: G
        }), gn(D), Ji(D), fo(W), lu(s, D), it("scroll", be, {
            target: v,
            passive: !0
        }), x({
            id: h,
            props: e,
            setLine: D,
            scrollable: C,
            onRendered: fe,
            currentName: O,
            setTitleRefs: w,
            scrollIntoView: $
        }), () => d("div", {
            ref: s,
            class: li([e.type])
        }, [e.showHeader ? e.sticky ? d(sg, {
            container: s.value,
            offsetTop: z.value,
            onScroll: L
        }, {
            default: () => [Z()]
        }) : Z() : null, d(dg, {
            ref: f,
            count: g.length,
            inited: y.inited,
            animated: e.animated,
            duration: e.duration,
            swipeable: e.swipeable,
            lazyRender: e.lazyRender,
            currentIndex: y.currentIndex,
            onChange: _
        }, {
            default: () => {
                var F;
                return [(F = n.default) == null ? void 0 : F.call(n)]
            }
        })])
    }
});
const hu = Symbol(),
    gg = () => Ht(hu, null),
    [mg, ts] = ae("tab"),
    yg = re({
        name: mg,
        props: {
            id: String,
            dot: Boolean,
            type: String,
            color: String,
            title: String,
            badge: oe,
            shrink: Boolean,
            isActive: Boolean,
            disabled: Boolean,
            controls: String,
            scrollable: Boolean,
            activeColor: String,
            inactiveColor: String,
            showZeroBadge: te
        },
        setup(e, {
            slots: t
        }) {
            const n = j(() => {
                    const i = {},
                        {
                            type: r,
                            color: a,
                            disabled: l,
                            isActive: s,
                            activeColor: u,
                            inactiveColor: c
                        } = e;
                    a && r === "card" && (i.borderColor = a, l || (s ? i.backgroundColor = a : i.color = a));
                    const h = s ? u : c;
                    return h && (i.color = h), i
                }),
                o = () => {
                    const i = d("span", {
                        class: ts("text", {
                            ellipsis: !e.scrollable
                        })
                    }, [t.title ? t.title() : e.title]);
                    return e.dot || Re(e.badge) && e.badge !== "" ? d(Jc, {
                        dot: e.dot,
                        content: e.badge,
                        showZero: e.showZeroBadge
                    }, {
                        default: () => [i]
                    }) : i
                };
            return () => d("div", {
                id: e.id,
                role: "tab",
                class: [ts([e.type, {
                    grow: e.scrollable && !e.shrink,
                    shrink: e.shrink,
                    active: e.isActive,
                    disabled: e.disabled
                }])],
                style: n.value,
                tabindex: e.disabled ? void 0 : e.isActive ? 0 : -1,
                "aria-selected": e.isActive,
                "aria-disabled": e.disabled || void 0,
                "aria-controls": e.controls,
                "data-allow-mismatch": "attribute"
            }, [o()])
        }
    }),
    [bg, pg] = ae("swipe-item");
var wg = re({
    name: bg,
    setup(e, {
        slots: t
    }) {
        let n;
        const o = Ke({
                offset: 0,
                inited: !1,
                mounted: !1
            }),
            {
                parent: i,
                index: r
            } = yn(cu);
        if (!i) return;
        const a = j(() => {
                const u = {},
                    {
                        vertical: c
                    } = i.props;
                return i.size.value && (u[c ? "height" : "width"] = `${i.size.value}px`), o.offset && (u.transform = `translate${c?"Y":"X"}(${o.offset}px)`), u
            }),
            l = j(() => {
                const {
                    loop: u,
                    lazyRender: c
                } = i.props;
                if (!c || n) return !0;
                if (!o.mounted) return !1;
                const f = i.activeIndicator.value,
                    h = i.count.value - 1,
                    v = f === 0 && u ? h : f - 1,
                    m = f === h && u ? 0 : f + 1;
                return n = r.value === f || r.value === v || r.value === m, n
            }),
            s = u => {
                o.offset = u
            };
        return Ge(() => {
            Te(() => {
                o.mounted = !0
            })
        }), Ve({
            setOffset: s
        }), () => {
            var u;
            return d("div", {
                class: pg(),
                style: a.value
            }, [l.value ? (u = t.default) == null ? void 0 : u.call(t) : null])
        }
    }
});
const vu = me(wg),
    [xg, xr] = ae("tab"),
    Sg = pe({}, Qi, {
        dot: Boolean,
        name: oe,
        badge: oe,
        title: String,
        disabled: Boolean,
        titleClass: ze,
        titleStyle: [String, Object],
        showZeroBadge: te
    });
var Cg = re({
    name: xg,
    props: Sg,
    setup(e, {
        slots: t
    }) {
        const n = tr(),
            o = N(!1),
            i = bt(),
            {
                parent: r,
                index: a
            } = yn(du);
        if (!r) return;
        const l = () => {
                var m;
                return (m = e.name) != null ? m : a.value
            },
            s = () => {
                o.value = !0, r.props.lazyRender && Te(() => {
                    r.onRendered(l(), e.title)
                })
            },
            u = j(() => {
                const m = l() === r.currentName.value;
                return m && !o.value && s(), m
            }),
            c = N(""),
            f = N("");
        Ui(() => {
            const {
                titleClass: m,
                titleStyle: w
            } = e;
            c.value = m ? Hi(m) : "", f.value = w && typeof w != "string" ? qu(Ni(w)) : w
        });
        const h = m => d(yg, $e({
                key: n,
                id: `${r.id}-${a.value}`,
                ref: r.setTitleRefs(a.value),
                style: f.value,
                class: c.value,
                isActive: u.value,
                controls: n,
                scrollable: r.scrollable.value,
                activeColor: r.props.titleActiveColor,
                inactiveColor: r.props.titleInactiveColor,
                onClick: w => m(i.proxy, a.value, w)
            }, Fe(r.props, ["type", "color", "shrink"]), Fe(e, ["dot", "badge", "title", "disabled", "showZeroBadge"])), {
                title: t.title
            }),
            v = N(!u.value);
        return ie(u, m => {
            m ? v.value = !1 : Dn(() => {
                v.value = !0
            })
        }), ie(() => e.title, () => {
            r.setLine(), r.scrollIntoView()
        }), uo(hu, u), Ve({
            id: n,
            renderTitle: h
        }), () => {
            var m;
            const w = `${r.id}-${a.value}`,
                {
                    animated: g,
                    swipeable: x,
                    scrollspy: y,
                    lazyRender: C
                } = r.props;
            if (!t.default && !g) return;
            const S = y || u.value;
            if (g || x) return d(vu, {
                id: n,
                role: "tabpanel",
                class: xr("panel-wrapper", {
                    inactive: v.value
                }),
                tabindex: u.value ? 0 : -1,
                "aria-hidden": !u.value,
                "aria-labelledby": w,
                "data-allow-mismatch": "attribute"
            }, {
                default: () => {
                    var z;
                    return [d("div", {
                        class: xr("panel")
                    }, [(z = t.default) == null ? void 0 : z.call(t)])]
                }
            });
            const O = o.value || y || !C ? (m = t.default) == null ? void 0 : m.call(t) : null;
            return Wt(d("div", {
                id: n,
                role: "tabpanel",
                class: xr("panel"),
                tabindex: S ? 0 : -1,
                "aria-labelledby": w,
                "data-allow-mismatch": "attribute"
            }, [O]), [
                [un, S]
            ])
        }
    }
});
const I0 = me(Cg),
    A0 = me(vg),
    [Tg, P0] = ae("picker-group"),
    _g = Symbol(Tg);
pe({
    tabs: dn(),
    activeTab: ye(0),
    nextStepText: String,
    showToolbar: te
}, er);
const $a = pe({
        loading: Boolean,
        readonly: Boolean,
        allowHtml: Boolean,
        optionHeight: ye(44),
        showToolbar: te,
        swipeDuration: ye(1e3),
        visibleOptionNum: ye(6)
    }, er),
    Eg = pe({}, $a, {
        columns: dn(),
        modelValue: dn(),
        toolbarPosition: se("top"),
        columnsFieldNames: Object
    });
var kg = re({
    name: jv,
    props: Eg,
    emits: ["confirm", "cancel", "change", "scrollInto", "clickOption", "update:modelValue"],
    setup(e, {
        emit: t,
        slots: n
    }) {
        const o = N(),
            i = N(e.modelValue.slice(0)),
            {
                parent: r
            } = yn(_g),
            {
                children: a,
                linkChildren: l
            } = Uo(ru);
        l();
        const s = j(() => Kv(e.columnsFieldNames)),
            u = j(() => Ia(e.optionHeight)),
            c = j(() => Wv(e.columns, s.value)),
            f = j(() => {
                const {
                    columns: p
                } = e;
                switch (c.value) {
                    case "multiple":
                        return p;
                    case "cascade":
                        return Uv(p, s.value, i);
                    default:
                        return [p]
                }
            }),
            h = j(() => f.value.some(p => p.length)),
            v = j(() => f.value.map((p, _) => qr(p, i.value[_], s.value))),
            m = j(() => f.value.map((p, _) => p.findIndex(A => A[s.value.value] === i.value[_]))),
            w = (p, _) => {
                if (i.value[p] !== _) {
                    const A = i.value.slice(0);
                    A[p] = _, i.value = A
                }
            },
            g = () => ({
                selectedValues: i.value.slice(0),
                selectedOptions: v.value,
                selectedIndexes: m.value
            }),
            x = (p, _) => {
                w(_, p), c.value === "cascade" && i.value.forEach((A, X) => {
                    const le = f.value[X];
                    Zl(le, A, s.value) || w(X, le.length ? le[0][s.value.value] : void 0)
                }), Te(() => {
                    t("change", pe({
                        columnIndex: _
                    }, g()))
                })
            },
            y = (p, _) => {
                const A = {
                    columnIndex: _,
                    currentOption: p
                };
                t("clickOption", pe(g(), A)), t("scrollInto", A)
            },
            C = () => {
                a.forEach(_ => _.stopMomentum());
                const p = g();
                return Te(() => {
                    t("confirm", p)
                }), p
            },
            S = () => t("cancel", g()),
            T = () => f.value.map((p, _) => d(qv, {
                value: i.value[_],
                fields: s.value,
                options: p,
                readonly: e.readonly,
                allowHtml: e.allowHtml,
                optionHeight: u.value,
                swipeDuration: e.swipeDuration,
                visibleOptionNum: e.visibleOptionNum,
                onChange: A => x(A, _),
                onClickOption: A => y(A, _),
                onScrollInto: A => {
                    t("scrollInto", {
                        currentOption: A,
                        columnIndex: _
                    })
                }
            }, {
                option: n.option
            })),
            O = p => {
                if (h.value) {
                    const _ = {
                            height: `${u.value}px`
                        },
                        A = {
                            backgroundSize: `100% ${(p-u.value)/2}px`
                        };
                    return [d("div", {
                        class: Nt("mask"),
                        style: A
                    }, null), d("div", {
                        class: [Jh, Nt("frame")],
                        style: _
                    }, null)]
                }
            },
            z = () => {
                const p = u.value * +e.visibleOptionNum,
                    _ = {
                        height: `${p}px`
                    };
                return !e.loading && !h.value && n.empty ? n.empty() : d("div", {
                    ref: o,
                    class: Nt("columns"),
                    style: _
                }, [T(), O(p)])
            },
            P = () => {
                if (e.showToolbar && !r) return d(Qv, $e(Fe(e, Jv), {
                    onConfirm: C,
                    onCancel: S
                }), Fe(n, Zv))
            };
        ie(f, p => {
            p.forEach((_, A) => {
                _.length && !Zl(_, i.value[A], s.value) && w(A, ou(_)[s.value.value])
            })
        }, {
            immediate: !0
        });
        let $;
        return ie(() => e.modelValue, p => {
            !sn(p, i.value) && !sn(p, $) && (i.value = p.slice(0), $ = p.slice(0))
        }, {
            deep: !0
        }), ie(i, p => {
            sn(p, e.modelValue) || ($ = p.slice(0), t("update:modelValue", $))
        }, {
            immediate: !0
        }), it("touchmove", ot, {
            target: o
        }), Ve({
            confirm: C,
            getSelectedOptions: () => v.value
        }), () => {
            var p, _;
            return d("div", {
                class: Nt()
            }, [e.toolbarPosition === "top" ? P() : null, e.loading ? d(Zt, {
                class: Nt("loading")
            }, null) : null, (p = n["columns-top"]) == null ? void 0 : p.call(n), z(), (_ = n["columns-bottom"]) == null ? void 0 : _.call(n), e.toolbarPosition === "bottom" ? P() : null])
        }
    }
});
const Dg = me(kg),
    [Og, Hn] = ae("cell"),
    gu = {
        tag: se("div"),
        icon: String,
        size: String,
        title: oe,
        value: oe,
        label: oe,
        center: Boolean,
        isLink: Boolean,
        border: te,
        iconPrefix: String,
        valueClass: ze,
        labelClass: ze,
        titleClass: ze,
        titleStyle: null,
        arrowDirection: String,
        required: {
            type: [Boolean, String],
            default: null
        },
        clickable: {
            type: Boolean,
            default: null
        }
    },
    Ig = pe({}, gu, Qi);
var Ag = re({
    name: Og,
    props: Ig,
    setup(e, {
        slots: t
    }) {
        const n = Aa(),
            o = () => {
                if (t.label || Re(e.label)) return d("div", {
                    class: [Hn("label"), e.labelClass]
                }, [t.label ? t.label() : e.label])
            },
            i = () => {
                var s;
                if (t.title || Re(e.title)) {
                    const u = (s = t.title) == null ? void 0 : s.call(t);
                    return Array.isArray(u) && u.length === 0 ? void 0 : d("div", {
                        class: [Hn("title"), e.titleClass],
                        style: e.titleStyle
                    }, [u || d("span", null, [e.title]), o()])
                }
            },
            r = () => {
                const s = t.value || t.default;
                if (s || Re(e.value)) return d("div", {
                    class: [Hn("value"), e.valueClass]
                }, [s ? s() : d("span", null, [e.value])])
            },
            a = () => {
                if (t.icon) return t.icon();
                if (e.icon) return d(Me, {
                    name: e.icon,
                    class: Hn("left-icon"),
                    classPrefix: e.iconPrefix
                }, null)
            },
            l = () => {
                if (t["right-icon"]) return t["right-icon"]();
                if (e.isLink) {
                    const s = e.arrowDirection && e.arrowDirection !== "right" ? `arrow-${e.arrowDirection}` : "arrow";
                    return d(Me, {
                        name: s,
                        class: Hn("right-icon")
                    }, null)
                }
            };
        return () => {
            var s;
            const {
                tag: u,
                size: c,
                center: f,
                border: h,
                isLink: v,
                required: m
            } = e, w = (s = e.clickable) != null ? s : v, g = {
                center: f,
                required: !!m,
                clickable: w,
                borderless: !h
            };
            return c && (g[c] = !!c), d(u, {
                class: Hn(g),
                role: w ? "button" : void 0,
                tabindex: w ? 0 : void 0,
                onClick: n
            }, {
                default: () => {
                    var x;
                    return [a(), i(), r(), l(), (x = t.extra) == null ? void 0 : x.call(t)]
                }
            })
        }
    }
});
const Pg = me(Ag);

function mu(e) {
    return Array.isArray(e) ? !e.length : e === 0 ? !1 : !e
}

function $g(e, t) {
    if (mu(e)) {
        if (t.required) return !1;
        if (t.validateEmpty === !1) return !0
    }
    return !(t.pattern && !t.pattern.test(String(e)))
}

function Rg(e, t) {
    return new Promise(n => {
        const o = t.validator(e, t);
        if (_a(o)) {
            o.then(n);
            return
        }
        n(o)
    })
}

function ns(e, t) {
    const {
        message: n
    } = t;
    return io(n) ? n(e, t) : n || ""
}

function Bg({
    target: e
}) {
    e.composing = !0
}

function os({
    target: e
}) {
    e.composing && (e.composing = !1, e.dispatchEvent(new Event("input")))
}

function Mg(e, t) {
    const n = Ea();
    e.style.height = "auto";
    let o = e.scrollHeight;
    if (Mn(t)) {
        const {
            maxHeight: i,
            minHeight: r
        } = t;
        i !== void 0 && (o = Math.min(o, i)), r !== void 0 && (o = Math.max(o, r))
    }
    o && (e.style.height = `${o}px`, ka(n))
}

function Fg(e, t) {
    return e === "number" && (e = "text", t ?? (t = "decimal")), e === "digit" && (e = "tel", t ?? (t = "numeric")), {
        type: e,
        inputmode: t
    }
}

function Bt(e) {
    return [...e].length
}

function Sr(e, t) {
    return [...e].slice(0, t).join("")
}
const [Vg, ht] = ae("field"), Lg = {
    id: String,
    name: String,
    leftIcon: String,
    rightIcon: String,
    autofocus: Boolean,
    clearable: Boolean,
    maxlength: oe,
    max: Number,
    min: Number,
    formatter: Function,
    clearIcon: se("clear"),
    modelValue: ye(""),
    inputAlign: String,
    placeholder: String,
    autocomplete: String,
    autocapitalize: String,
    autocorrect: String,
    errorMessage: String,
    enterkeyhint: String,
    clearTrigger: se("focus"),
    formatTrigger: se("onChange"),
    spellcheck: {
        type: Boolean,
        default: null
    },
    error: {
        type: Boolean,
        default: null
    },
    disabled: {
        type: Boolean,
        default: null
    },
    readonly: {
        type: Boolean,
        default: null
    },
    inputmode: String
}, Ng = pe({}, gu, Lg, {
    rows: oe,
    type: se("text"),
    rules: Array,
    autosize: [Boolean, Object],
    labelWidth: oe,
    labelClass: ze,
    labelAlign: String,
    showWordLimit: Boolean,
    errorMessageAlign: String,
    colon: {
        type: Boolean,
        default: null
    }
});
var Hg = re({
    name: Vg,
    props: Ng,
    emits: ["blur", "focus", "clear", "keypress", "clickInput", "endValidate", "startValidate", "clickLeftIcon", "clickRightIcon", "update:modelValue"],
    setup(e, {
        emit: t,
        slots: n
    }) {
        const o = tr(),
            i = Ke({
                status: "unvalidated",
                focused: !1,
                validateMessage: ""
            }),
            r = N(),
            a = N(),
            l = N(),
            {
                parent: s
            } = yn(Qh),
            u = () => {
                var k;
                return String((k = e.modelValue) != null ? k : "")
            },
            c = k => {
                if (Re(e[k])) return e[k];
                if (s && Re(s.props[k])) return s.props[k]
            },
            f = j(() => {
                const k = c("readonly");
                if (e.clearable && !k) {
                    const ne = u() !== "",
                        q = e.clearTrigger === "always" || e.clearTrigger === "focus" && i.focused;
                    return ne && q
                }
                return !1
            }),
            h = j(() => l.value && n.input ? l.value() : e.modelValue),
            v = j(() => {
                var k;
                const ne = c("required");
                return ne === "auto" ? (k = e.rules) == null ? void 0 : k.some(q => q.required) : ne
            }),
            m = k => k.reduce((ne, q) => ne.then(() => {
                if (i.status === "failed") return;
                let {
                    value: de
                } = h;
                if (q.formatter && (de = q.formatter(de, q)), !$g(de, q)) {
                    i.status = "failed", i.validateMessage = ns(de, q);
                    return
                }
                if (q.validator) return mu(de) && q.validateEmpty === !1 ? void 0 : Rg(de, q).then(Ee => {
                    Ee && typeof Ee == "string" ? (i.status = "failed", i.validateMessage = Ee) : Ee === !1 && (i.status = "failed", i.validateMessage = ns(de, q))
                })
            }), Promise.resolve()),
            w = () => {
                i.status = "unvalidated", i.validateMessage = ""
            },
            g = () => t("endValidate", {
                status: i.status,
                message: i.validateMessage
            }),
            x = (k = e.rules) => new Promise(ne => {
                w(), k ? (t("startValidate"), m(k).then(() => {
                    i.status === "failed" ? (ne({
                        name: e.name,
                        message: i.validateMessage
                    }), g()) : (i.status = "passed", ne(), g())
                })) : ne()
            }),
            y = k => {
                if (s && e.rules) {
                    const {
                        validateTrigger: ne
                    } = s.props, q = Ii(ne).includes(k), de = e.rules.filter(Ee => Ee.trigger ? Ii(Ee.trigger).includes(k) : q);
                    de.length && x(de)
                }
            },
            C = k => {
                var ne;
                const {
                    maxlength: q
                } = e;
                if (Re(q) && Bt(k) > +q) {
                    const de = u();
                    if (de && Bt(de) === +q) return de;
                    const Ee = (ne = r.value) == null ? void 0 : ne.selectionEnd;
                    if (i.focused && Ee) {
                        const b = [...k],
                            E = b.length - +q;
                        return b.splice(Ee - E, E), b.join("")
                    }
                    return Sr(k, +q)
                }
                return k
            },
            S = (k, ne = "onChange") => {
                var q, de;
                const Ee = k;
                k = C(k);
                const b = Bt(Ee) - Bt(k);
                if (e.type === "number" || e.type === "digit") {
                    const I = e.type === "number";
                    if (k = Lh(k, I, I), ne === "onBlur" && k !== "" && (e.min !== void 0 || e.max !== void 0)) {
                        const B = qe(+k, (q = e.min) != null ? q : -1 / 0, (de = e.max) != null ? de : 1 / 0); + k !== B && (k = B.toString())
                    }
                }
                let E = 0;
                if (e.formatter && ne === e.formatTrigger) {
                    const {
                        formatter: I,
                        maxlength: B
                    } = e;
                    if (k = I(k), Re(B) && Bt(k) > +B && (k = Sr(k, +B)), r.value && i.focused) {
                        const {
                            selectionEnd: M
                        } = r.value, V = Sr(Ee, M);
                        E = Bt(I(V)) - Bt(V)
                    }
                }
                if (r.value && r.value.value !== k)
                    if (i.focused) {
                        let {
                            selectionStart: I,
                            selectionEnd: B
                        } = r.value;
                        if (r.value.value = k, Re(I) && Re(B)) {
                            const M = Bt(k);
                            b ? (I -= b, B -= b) : E && (I += E, B += E), r.value.setSelectionRange(Math.min(I, M), Math.min(B, M))
                        }
                    } else r.value.value = k;
                k !== e.modelValue && t("update:modelValue", k)
            },
            T = k => {
                k.target.composing || S(k.target.value)
            },
            O = () => {
                var k;
                return (k = r.value) == null ? void 0 : k.blur()
            },
            z = () => {
                var k;
                return (k = r.value) == null ? void 0 : k.focus()
            },
            P = () => {
                const k = r.value;
                e.type === "textarea" && e.autosize && k && Mg(k, e.autosize)
            },
            $ = k => {
                i.focused = !0, t("focus", k), Te(P), c("readonly") && O()
            },
            D = k => {
                i.focused = !1, S(u(), "onBlur"), t("blur", k), !c("readonly") && (y("onBlur"), Te(P), Ph())
            },
            p = k => t("clickInput", k),
            _ = k => t("clickLeftIcon", k),
            A = k => t("clickRightIcon", k),
            X = k => {
                ot(k), t("update:modelValue", ""), t("clear", k)
            },
            le = j(() => {
                if (typeof e.error == "boolean") return e.error;
                if (s && s.props.showError && i.status === "failed") return !0
            }),
            L = j(() => {
                const k = c("labelWidth"),
                    ne = c("labelAlign");
                if (k && ne !== "top") return {
                    width: Se(k)
                }
            }),
            G = k => {
                k.keyCode === 13 && (!(s && s.props.submitOnEnter) && e.type !== "textarea" && ot(k), e.type === "search" && O()), t("keypress", k)
            },
            Q = () => e.id || `${o}-input`,
            be = () => i.status,
            ke = () => {
                const k = ht("control", [c("inputAlign"), {
                    error: le.value,
                    custom: !!n.input,
                    "min-height": e.type === "textarea" && !e.autosize
                }]);
                if (n.input) return d("div", {
                    class: k,
                    onClick: p
                }, [n.input()]);
                const ne = {
                    id: Q(),
                    ref: r,
                    name: e.name,
                    rows: e.rows !== void 0 ? +e.rows : void 0,
                    class: k,
                    disabled: c("disabled"),
                    readonly: c("readonly"),
                    autofocus: e.autofocus,
                    placeholder: e.placeholder,
                    autocomplete: e.autocomplete,
                    autocapitalize: e.autocapitalize,
                    autocorrect: e.autocorrect,
                    enterkeyhint: e.enterkeyhint,
                    spellcheck: e.spellcheck,
                    "aria-labelledby": e.label ? `${o}-label` : void 0,
                    "data-allow-mismatch": "attribute",
                    onBlur: D,
                    onFocus: $,
                    onInput: T,
                    onClick: p,
                    onChange: os,
                    onKeypress: G,
                    onCompositionend: os,
                    onCompositionstart: Bg
                };
                return e.type === "textarea" ? d("textarea", $e(ne, {
                    inputmode: e.inputmode
                }), null) : d("input", $e(Fg(e.type, e.inputmode), ne), null)
            },
            Z = () => {
                const k = n["left-icon"];
                if (e.leftIcon || k) return d("div", {
                    class: ht("left-icon"),
                    onClick: _
                }, [k ? k() : d(Me, {
                    name: e.leftIcon,
                    classPrefix: e.iconPrefix
                }, null)])
            },
            R = () => {
                const k = n["right-icon"];
                if (e.rightIcon || k) return d("div", {
                    class: ht("right-icon"),
                    onClick: A
                }, [k ? k() : d(Me, {
                    name: e.rightIcon,
                    classPrefix: e.iconPrefix
                }, null)])
            },
            W = () => {
                if (e.showWordLimit && e.maxlength) {
                    const k = Bt(u());
                    return d("div", {
                        class: ht("word-limit")
                    }, [d("span", {
                        class: ht("word-num")
                    }, [k]), Ic("/"), e.maxlength])
                }
            },
            fe = () => {
                if (s && s.props.showErrorMessage === !1) return;
                const k = e.errorMessage || i.validateMessage;
                if (k) {
                    const ne = n["error-message"],
                        q = c("errorMessageAlign");
                    return d("div", {
                        class: ht("error-message", q)
                    }, [ne ? ne({
                        message: k
                    }) : k])
                }
            },
            F = () => {
                const k = c("labelWidth"),
                    ne = c("labelAlign"),
                    q = c("colon") ? ":" : "";
                if (n.label) return [n.label(), q];
                if (e.label) return d("label", {
                    id: `${o}-label`,
                    for: n.input ? void 0 : Q(),
                    "data-allow-mismatch": "attribute",
                    onClick: de => {
                        ot(de), z()
                    },
                    style: ne === "top" && k ? {
                        width: Se(k)
                    } : void 0
                }, [e.label + q])
            },
            ee = () => [d("div", {
                class: ht("body")
            }, [ke(), f.value && d(Me, {
                ref: a,
                name: e.clearIcon,
                class: ht("clear")
            }, null), R(), n.button && d("div", {
                class: ht("button")
            }, [n.button()])]), W(), fe()];
        return Ve({
            blur: O,
            focus: z,
            validate: x,
            formValue: h,
            resetValidation: w,
            getValidationStatus: be
        }), uo(zc, {
            customValue: l,
            resetValidation: w,
            validateWithTrigger: y
        }), ie(() => e.modelValue, () => {
            S(u()), w(), y("onChange"), Te(P)
        }), Ge(() => {
            S(u(), e.formatTrigger), Te(P)
        }), it("touchstart", X, {
            target: j(() => {
                var k;
                return (k = a.value) == null ? void 0 : k.$el
            })
        }), () => {
            const k = c("disabled"),
                ne = c("labelAlign"),
                q = Z(),
                de = () => {
                    const Ee = F();
                    return ne === "top" ? [q, Ee].filter(Boolean) : Ee || []
                };
            return d(Pg, {
                size: e.size,
                class: ht({
                    error: le.value,
                    disabled: k,
                    [`label-${ne}`]: ne
                }),
                center: e.center,
                border: e.border,
                isLink: e.isLink,
                clickable: e.clickable,
                titleStyle: L.value,
                valueClass: ht("value"),
                titleClass: [ht("label", [ne, {
                    required: v.value
                }]), e.labelClass],
                arrowDirection: e.arrowDirection
            }, {
                icon: q && ne !== "top" ? () => q : null,
                title: de,
                value: ee,
                extra: n.extra
            })
        }
    }
});
const $0 = me(Hg);
let bo = 0;

function zg(e) {
    e ? (bo || document.body.classList.add("van-toast--unclickable"), bo++) : bo && (bo--, bo || document.body.classList.remove("van-toast--unclickable"))
}
const [jg, zn] = ae("toast"), Wg = ["show", "overlay", "teleport", "transition", "overlayClass", "overlayStyle", "closeOnClickOverlay", "zIndex"], Ug = {
    icon: String,
    show: Boolean,
    type: se("text"),
    overlay: Boolean,
    message: oe,
    iconSize: oe,
    duration: qi(2e3),
    position: se("middle"),
    teleport: [String, Object],
    wordBreak: String,
    className: ze,
    iconPrefix: String,
    transition: se("van-fade"),
    loadingType: String,
    forbidClick: Boolean,
    overlayClass: ze,
    overlayStyle: Object,
    closeOnClick: Boolean,
    closeOnClickOverlay: Boolean,
    zIndex: oe
};
var yu = re({
    name: jg,
    props: Ug,
    emits: ["update:show"],
    setup(e, {
        emit: t,
        slots: n
    }) {
        let o, i = !1;
        const r = () => {
                const f = e.show && e.forbidClick;
                i !== f && (i = f, zg(i))
            },
            a = f => t("update:show", f),
            l = () => {
                e.closeOnClick && a(!1)
            },
            s = () => clearTimeout(o),
            u = () => {
                const {
                    icon: f,
                    type: h,
                    iconSize: v,
                    iconPrefix: m,
                    loadingType: w
                } = e;
                if (f || h === "success" || h === "fail") return d(Me, {
                    name: f || h,
                    size: v,
                    class: zn("icon"),
                    classPrefix: m
                }, null);
                if (h === "loading") return d(Zt, {
                    class: zn("loading"),
                    size: v,
                    type: w
                }, null)
            },
            c = () => {
                const {
                    type: f,
                    message: h
                } = e;
                if (n.message) return d("div", {
                    class: zn("text")
                }, [n.message()]);
                if (Re(h) && h !== "") return f === "html" ? d("div", {
                    key: 0,
                    class: zn("text"),
                    innerHTML: String(h)
                }, null) : d("div", {
                    class: zn("text")
                }, [h])
            };
        return ie(() => [e.show, e.forbidClick], r), ie(() => [e.show, e.type, e.message, e.duration], () => {
            s(), e.show && e.duration > 0 && (o = setTimeout(() => {
                a(!1)
            }, e.duration))
        }), Ge(r), jo(r), () => d(qo, $e({
            class: [zn([e.position, e.wordBreak === "normal" ? "break-normal" : e.wordBreak, {
                [e.type]: !e.icon
            }]), e.className],
            lockScroll: !1,
            onClick: l,
            onClosed: s,
            "onUpdate:show": a
        }, Fe(e, Wg)), {
            default: () => [u(), c()]
        })
    }
});

function Ra() {
    const e = Ke({
            show: !1
        }),
        t = i => {
            e.show = i
        },
        n = i => {
            pe(e, i, {
                transitionAppear: !0
            }), t(!0)
        },
        o = () => t(!1);
    return Ve({
        open: n,
        close: o,
        toggle: t
    }), {
        open: n,
        close: o,
        state: e,
        toggle: t
    }
}

function Ba(e) {
    const t = mh(e),
        n = document.createElement("div");
    return document.body.appendChild(n), {
        instance: t.mount(n),
        unmount() {
            t.unmount(), document.body.removeChild(n)
        }
    }
}
const Yg = {
    icon: "",
    type: "text",
    message: "",
    className: "",
    overlay: !1,
    onClose: void 0,
    onOpened: void 0,
    duration: 2e3,
    teleport: "body",
    iconSize: void 0,
    iconPrefix: void 0,
    position: "middle",
    transition: "van-fade",
    forbidClick: !1,
    loadingType: void 0,
    overlayClass: "",
    overlayStyle: void 0,
    closeOnClick: !1,
    closeOnClickOverlay: !1
};
let an = [],
    Kg = !1,
    Xr = pe({}, Yg);
const bu = new Map;

function pu(e) {
    return Mn(e) ? e : {
        message: e
    }
}

function Gg() {
    const {
        instance: e
    } = Ba({
        setup() {
            const t = N(""),
                {
                    open: n,
                    state: o,
                    close: i,
                    toggle: r
                } = Ra(),
                a = () => {},
                l = () => d(yu, $e(o, {
                    onClosed: a,
                    "onUpdate:show": r
                }), null);
            return ie(t, s => {
                o.message = s
            }), bt().render = l, {
                open: n,
                close: i,
                message: t
            }
        }
    });
    return e
}

function qg() {
    if (!an.length || Kg) {
        const e = Gg();
        an.push(e)
    }
    return an[an.length - 1]
}

function Zr(e = {}) {
    if (!Pt) return {};
    const t = qg(),
        n = pu(e);
    return t.open(pe({}, Xr, bu.get(n.type || Xr.type), n)), t
}
const Ma = e => t => Zr(pe({
        type: e
    }, pu(t))),
    R0 = Ma("loading"),
    B0 = Ma("success"),
    M0 = Ma("fail"),
    F0 = e => {
        an.length && (e ? (an.forEach(t => {
            t.close()
        }), an = []) : an[0].close())
    };

function V0(e, t) {
    typeof e == "string" ? bu.set(e, t) : pe(Xr, e)
}
me(yu);
const [Xg, Cr] = ae("switch"), Zg = {
    size: oe,
    loading: Boolean,
    disabled: Boolean,
    modelValue: ze,
    activeColor: String,
    inactiveColor: String,
    activeValue: {
        type: ze,
        default: !0
    },
    inactiveValue: {
        type: ze,
        default: !1
    }
};
var Jg = re({
    name: Xg,
    props: Zg,
    emits: ["change", "update:modelValue"],
    setup(e, {
        emit: t,
        slots: n
    }) {
        const o = () => e.modelValue === e.activeValue,
            i = () => {
                if (!e.disabled && !e.loading) {
                    const a = o() ? e.inactiveValue : e.activeValue;
                    t("update:modelValue", a), t("change", a)
                }
            },
            r = () => {
                if (e.loading) {
                    const a = o() ? e.activeColor : e.inactiveColor;
                    return d(Zt, {
                        class: Cr("loading"),
                        color: a
                    }, null)
                }
                if (n.node) return n.node()
            };
        return Yo(() => e.modelValue), () => {
            var a;
            const {
                size: l,
                loading: s,
                disabled: u,
                activeColor: c,
                inactiveColor: f
            } = e, h = o(), v = {
                fontSize: Se(l),
                backgroundColor: h ? c : f
            };
            return d("div", {
                role: "switch",
                class: Cr({
                    on: h,
                    loading: s,
                    disabled: u
                }),
                style: v,
                tabindex: u ? void 0 : 0,
                "aria-checked": h,
                onClick: i
            }, [d("div", {
                class: Cr("node")
            }, [r()]), (a = n.background) == null ? void 0 : a.call(n)])
        }
    }
});
const L0 = me(Jg),
    [wu, Qg] = ae("radio-group"),
    em = {
        shape: String,
        disabled: Boolean,
        iconSize: oe,
        direction: String,
        modelValue: ze,
        checkedColor: String
    },
    xu = Symbol(wu);
var tm = re({
    name: wu,
    props: em,
    emits: ["change", "update:modelValue"],
    setup(e, {
        emit: t,
        slots: n
    }) {
        const {
            linkChildren: o
        } = Uo(xu), i = r => t("update:modelValue", r);
        return ie(() => e.modelValue, r => t("change", r)), o({
            props: e,
            updateValue: i
        }), Yo(() => e.modelValue), () => {
            var r;
            return d("div", {
                class: Qg([e.direction]),
                role: "radiogroup"
            }, [(r = n.default) == null ? void 0 : r.call(n)])
        }
    }
});
const N0 = me(tm),
    [nm, H0] = ae("checkbox-group"),
    om = Symbol(nm),
    Fa = {
        name: ze,
        disabled: Boolean,
        iconSize: oe,
        modelValue: ze,
        checkedColor: String,
        labelPosition: String,
        labelDisabled: Boolean
    };
var Su = re({
    props: pe({}, Fa, {
        bem: nt(Function),
        role: String,
        shape: String,
        parent: Object,
        checked: Boolean,
        bindGroup: te,
        indeterminate: {
            type: Boolean,
            default: null
        }
    }),
    emits: ["click", "toggle"],
    setup(e, {
        emit: t,
        slots: n
    }) {
        const o = N(),
            i = h => {
                if (e.parent && e.bindGroup) return e.parent.props[h]
            },
            r = j(() => {
                if (e.parent && e.bindGroup) {
                    const h = i("disabled") || e.disabled;
                    if (e.role === "checkbox") {
                        const v = i("modelValue").length,
                            m = i("max"),
                            w = m && v >= +m;
                        return h || w && !e.checked
                    }
                    return h
                }
                return e.disabled
            }),
            a = j(() => i("direction")),
            l = j(() => {
                const h = e.checkedColor || i("checkedColor");
                if (h && e.checked && !r.value) return {
                    borderColor: h,
                    backgroundColor: h
                }
            }),
            s = j(() => e.shape || i("shape") || "round"),
            u = h => {
                const {
                    target: v
                } = h, m = o.value, w = m === v || (m == null ? void 0 : m.contains(v));
                !r.value && (w || !e.labelDisabled) && t("toggle"), t("click", h)
            },
            c = () => {
                var h, v;
                const {
                    bem: m,
                    checked: w,
                    indeterminate: g
                } = e, x = e.iconSize || i("iconSize");
                return d("div", {
                    ref: o,
                    class: m("icon", [s.value, {
                        disabled: r.value,
                        checked: w,
                        indeterminate: g
                    }]),
                    style: s.value !== "dot" ? {
                        fontSize: Se(x)
                    } : {
                        width: Se(x),
                        height: Se(x),
                        borderColor: (h = l.value) == null ? void 0 : h.borderColor
                    }
                }, [n.icon ? n.icon({
                    checked: w,
                    disabled: r.value
                }) : s.value !== "dot" ? d(Me, {
                    name: g ? "minus" : "success",
                    style: l.value
                }, null) : d("div", {
                    class: m("icon--dot__icon"),
                    style: {
                        backgroundColor: (v = l.value) == null ? void 0 : v.backgroundColor
                    }
                }, null)])
            },
            f = () => {
                const {
                    checked: h
                } = e;
                if (n.default) return d("span", {
                    class: e.bem("label", [e.labelPosition, {
                        disabled: r.value
                    }])
                }, [n.default({
                    checked: h,
                    disabled: r.value
                })])
            };
        return () => {
            const h = e.labelPosition === "left" ? [f(), c()] : [c(), f()];
            return d("div", {
                role: e.role,
                class: e.bem([{
                    disabled: r.value,
                    "label-disabled": e.labelDisabled
                }, a.value]),
                tabindex: r.value ? void 0 : 0,
                "aria-checked": e.checked,
                onClick: u
            }, [h])
        }
    }
});
const im = pe({}, Fa, {
        shape: String
    }),
    [rm, am] = ae("radio");
var lm = re({
    name: rm,
    props: im,
    emits: ["update:modelValue"],
    setup(e, {
        emit: t,
        slots: n
    }) {
        const {
            parent: o
        } = yn(xu), i = () => (o ? o.props.modelValue : e.modelValue) === e.name, r = () => {
            o ? o.updateValue(e.name) : t("update:modelValue", e.name)
        };
        return () => d(Su, $e({
            bem: am,
            role: "radio",
            parent: o,
            checked: i(),
            onToggle: r
        }, e), Fe(n, ["default", "icon"]))
    }
});
const z0 = me(lm),
    [sm, cm] = ae("checkbox"),
    um = pe({}, Fa, {
        shape: String,
        bindGroup: te,
        indeterminate: {
            type: Boolean,
            default: null
        }
    });
var fm = re({
    name: sm,
    props: um,
    emits: ["change", "update:modelValue"],
    setup(e, {
        emit: t,
        slots: n
    }) {
        const {
            parent: o
        } = yn(om), i = l => {
            const {
                name: s
            } = e, {
                max: u,
                modelValue: c
            } = o.props, f = c.slice();
            if (l) !(u && f.length >= +u) && !f.includes(s) && (f.push(s), e.bindGroup && o.updateValue(f));
            else {
                const h = f.indexOf(s);
                h !== -1 && (f.splice(h, 1), e.bindGroup && o.updateValue(f))
            }
        }, r = j(() => o && e.bindGroup ? o.props.modelValue.indexOf(e.name) !== -1 : !!e.modelValue), a = (l = !r.value) => {
            o && e.bindGroup ? i(l) : t("update:modelValue", l), e.indeterminate !== null && t("change", l)
        };
        return ie(() => e.modelValue, l => {
            e.indeterminate === null && t("change", l)
        }), Ve({
            toggle: a,
            props: e,
            checked: r
        }), Yo(() => e.modelValue), () => d(Su, $e({
            bem: cm,
            role: "checkbox",
            parent: o,
            checked: r.value,
            onToggle: a
        }, e), Fe(n, ["default", "icon"]))
    }
});
const j0 = me(fm),
    [dm, Be, jt] = ae("calendar"),
    hm = e => jt("monthTitle", e.getFullYear(), e.getMonth() + 1);

function On(e, t) {
    const n = e.getFullYear(),
        o = t.getFullYear();
    if (n === o) {
        const i = e.getMonth(),
            r = t.getMonth();
        return i === r ? 0 : i > r ? 1 : -1
    }
    return n > o ? 1 : -1
}

function at(e, t) {
    const n = On(e, t);
    if (n === 0) {
        const o = e.getDate(),
            i = t.getDate();
        return o === i ? 0 : o > i ? 1 : -1
    }
    return n
}
const ao = e => new Date(e),
    is = e => Array.isArray(e) ? e.map(ao) : ao(e);

function Va(e, t) {
    const n = ao(e);
    return n.setDate(n.getDate() + t), n
}

function La(e, t) {
    const n = ao(e);
    return n.setMonth(n.getMonth() + t), n.getDate() !== e.getDate() && n.setDate(0), n
}

function Cu(e, t) {
    const n = ao(e);
    return n.setFullYear(n.getFullYear() + t), n.getDate() !== e.getDate() && n.setDate(0), n
}
const Jr = e => Va(e, -1),
    Qr = e => Va(e, 1),
    rs = e => La(e, -1),
    as = e => La(e, 1),
    ls = e => Cu(e, -1),
    ss = e => Cu(e, 1),
    si = () => {
        const e = new Date;
        return e.setHours(0, 0, 0, 0), e
    };

function vm(e) {
    const t = e[0].getTime();
    return (e[1].getTime() - t) / (1e3 * 60 * 60 * 24) + 1
}

function gm(e, t = 0) {
    const n = new Date(e.getFullYear(), e.getMonth() + 1, 0),
        o = t + e.getDate() - 1,
        i = t + n.getDate() - 1;
    return Math.floor(o / 7) === Math.floor(i / 7)
}
const mm = pe({}, $a, {
        modelValue: dn(),
        filter: Function,
        formatter: {
            type: Function,
            default: (e, t) => t
        }
    }),
    ym = Object.keys($a);

function bm(e, t) {
    if (e < 0) return [];
    const n = Array(e);
    let o = -1;
    for (; ++o < e;) n[o] = t(o);
    return n
}
const Tu = (e, t) => 32 - new Date(e, t - 1, 32).getDate(),
    Tr = (e, t, n, o, i, r) => {
        const a = bm(t - e + 1, l => {
            const s = kn(e + l);
            return o(n, {
                text: s,
                value: s
            })
        });
        return i ? i(n, a, r) : a
    },
    pm = (e, t) => e.map((n, o) => {
        const i = t[o];
        if (i.length) {
            const r = +i[0].value,
                a = +i[i.length - 1].value;
            return kn(qe(+n, r, a))
        }
        return n
    }),
    [wm] = ae("calendar-day");
var xm = re({
    name: wm,
    props: {
        item: nt(Object),
        color: String,
        index: Number,
        offset: qi(0),
        rowHeight: String
    },
    emits: ["click", "clickDisabledDate"],
    setup(e, {
        emit: t,
        slots: n
    }) {
        const o = j(() => {
                const {
                    item: u,
                    index: c,
                    color: f,
                    offset: h,
                    rowHeight: v
                } = e, m = {
                    height: v
                };
                if (u.type === "placeholder") return m.width = "100%", m;
                if (c === 0 && (m.marginLeft = `${100*h/7}%`), f) switch (u.type) {
                    case "end":
                    case "start":
                    case "start-end":
                    case "multiple-middle":
                    case "multiple-selected":
                        m.background = f;
                        break;
                    case "middle":
                        m.color = f;
                        break
                }
                return u.date && gm(u.date, h) && (m.marginBottom = 0), m
            }),
            i = () => {
                e.item.type !== "disabled" ? t("click", e.item) : t("clickDisabledDate", e.item)
            },
            r = () => {
                const {
                    topInfo: u
                } = e.item;
                if (u || n["top-info"]) return d("div", {
                    class: Be("top-info")
                }, [n["top-info"] ? n["top-info"](e.item) : u])
            },
            a = () => {
                const {
                    bottomInfo: u
                } = e.item;
                if (u || n["bottom-info"]) return d("div", {
                    class: Be("bottom-info")
                }, [n["bottom-info"] ? n["bottom-info"](e.item) : u])
            },
            l = () => n.text ? n.text(e.item) : e.item.text,
            s = () => {
                const {
                    item: u,
                    color: c,
                    rowHeight: f
                } = e, {
                    type: h
                } = u, v = [r(), l(), a()];
                return h === "selected" ? d("div", {
                    class: Be("selected-day"),
                    style: {
                        width: f,
                        height: f,
                        background: c
                    }
                }, [v]) : v
            };
        return () => {
            const {
                type: u,
                className: c
            } = e.item;
            return u === "placeholder" ? d("div", {
                class: Be("day"),
                style: o.value
            }, null) : d("div", {
                role: "gridcell",
                style: o.value,
                class: [Be("day", u), c],
                tabindex: u === "disabled" ? void 0 : -1,
                onClick: i
            }, [s()])
        }
    }
});
const [Sm] = ae("calendar-month"), Cm = {
    date: nt(Date),
    type: String,
    color: String,
    minDate: Date,
    maxDate: Date,
    showMark: Boolean,
    rowHeight: oe,
    formatter: Function,
    lazyRender: Boolean,
    currentDate: [Date, Array],
    allowSameDay: Boolean,
    showSubtitle: Boolean,
    showMonthTitle: Boolean,
    firstDayOfWeek: Number
};
var Tm = re({
    name: Sm,
    props: Cm,
    emits: ["click", "clickDisabledDate"],
    setup(e, {
        emit: t,
        slots: n
    }) {
        const [o, i] = xh(), r = N(), a = N(), l = Gc(a), s = j(() => hm(e.date)), u = j(() => Se(e.rowHeight)), c = j(() => {
            const D = e.date.getDate(),
                _ = (e.date.getDay() - D % 7 + 8) % 7;
            return e.firstDayOfWeek ? (_ + 7 - e.firstDayOfWeek) % 7 : _
        }), f = j(() => Tu(e.date.getFullYear(), e.date.getMonth() + 1)), h = j(() => o.value || !e.lazyRender), v = () => s.value, m = D => {
            const p = _ => e.currentDate.some(A => at(A, _) === 0);
            if (p(D)) {
                const _ = Jr(D),
                    A = Qr(D),
                    X = p(_),
                    le = p(A);
                return X && le ? "multiple-middle" : X ? "end" : le ? "start" : "multiple-selected"
            }
            return ""
        }, w = D => {
            const [p, _] = e.currentDate;
            if (!p) return "";
            const A = at(D, p);
            if (!_) return A === 0 ? "start" : "";
            const X = at(D, _);
            return e.allowSameDay && A === 0 && X === 0 ? "start-end" : A === 0 ? "start" : X === 0 ? "end" : A > 0 && X < 0 ? "middle" : ""
        }, g = D => {
            const {
                type: p,
                minDate: _,
                maxDate: A,
                currentDate: X
            } = e;
            if (_ && at(D, _) < 0 || A && at(D, A) > 0) return "disabled";
            if (X === null) return "";
            if (Array.isArray(X)) {
                if (p === "multiple") return m(D);
                if (p === "range") return w(D)
            } else if (p === "single") return at(D, X) === 0 ? "selected" : "";
            return ""
        }, x = D => {
            if (e.type === "range") {
                if (D === "start" || D === "end") return jt(D);
                if (D === "start-end") return `${jt("start")}/${jt("end")}`
            }
        }, y = () => {
            if (e.showMonthTitle) return d("div", {
                class: Be("month-title")
            }, [n["month-title"] ? n["month-title"]({
                date: e.date,
                text: s.value
            }) : s.value])
        }, C = () => {
            if (e.showMark && h.value) return d("div", {
                class: Be("month-mark")
            }, [e.date.getMonth() + 1])
        }, S = j(() => {
            const D = Math.ceil((f.value + c.value) / 7);
            return Array(D).fill({
                type: "placeholder"
            })
        }), T = j(() => {
            const D = [],
                p = e.date.getFullYear(),
                _ = e.date.getMonth();
            for (let A = 1; A <= f.value; A++) {
                const X = new Date(p, _, A),
                    le = g(X);
                let L = {
                    date: X,
                    type: le,
                    text: A,
                    bottomInfo: x(le)
                };
                e.formatter && (L = e.formatter(L)), D.push(L)
            }
            return D
        }), O = j(() => T.value.filter(D => D.type === "disabled")), z = (D, p) => {
            if (r.value) {
                const _ = Le(r.value),
                    A = S.value.length,
                    le = (Math.ceil((p.getDate() + c.value) / 7) - 1) * _.height / A;
                Ai(D, _.top + le + D.scrollTop - Le(D).top)
            }
        }, P = (D, p) => d(xm, {
            item: D,
            index: p,
            color: e.color,
            offset: c.value,
            rowHeight: u.value,
            onClick: _ => t("click", _),
            onClickDisabledDate: _ => t("clickDisabledDate", _)
        }, Fe(n, ["top-info", "bottom-info", "text"])), $ = () => d("div", {
            ref: r,
            role: "grid",
            class: Be("days")
        }, [C(), (h.value ? T : S).value.map(P)]);
        return Ve({
            getTitle: v,
            getHeight: () => l.value,
            setVisible: i,
            scrollToDate: z,
            disabledDays: O
        }), () => d("div", {
            class: Be("month"),
            ref: a
        }, [y(), $()])
    }
});
const [_m] = ae("calendar-header");
var Em = re({
    name: _m,
    props: {
        date: Date,
        minDate: Date,
        maxDate: Date,
        title: String,
        subtitle: String,
        showTitle: Boolean,
        showSubtitle: Boolean,
        firstDayOfWeek: Number,
        switchMode: se("none")
    },
    emits: ["clickSubtitle", "panelChange"],
    setup(e, {
        slots: t,
        emit: n
    }) {
        const o = j(() => e.date && e.minDate && On(rs(e.date), e.minDate) < 0),
            i = j(() => e.date && e.minDate && On(ls(e.date), e.minDate) < 0),
            r = j(() => e.date && e.maxDate && On(as(e.date), e.maxDate) > 0),
            a = j(() => e.date && e.maxDate && On(ss(e.date), e.maxDate) > 0),
            l = () => {
                if (e.showTitle) {
                    const v = e.title || jt("title"),
                        m = t.title ? t.title() : v;
                    return d("div", {
                        class: Be("header-title")
                    }, [m])
                }
            },
            s = v => n("clickSubtitle", v),
            u = v => n("panelChange", v),
            c = v => {
                const m = e.switchMode === "year-month",
                    w = t[v ? "next-month" : "prev-month"],
                    g = t[v ? "next-year" : "prev-year"],
                    x = v ? r.value : o.value,
                    y = v ? a.value : i.value,
                    C = v ? "arrow" : "arrow-left",
                    S = v ? "arrow-double-right" : "arrow-double-left",
                    T = () => u((v ? as : rs)(e.date)),
                    O = () => u((v ? ss : ls)(e.date)),
                    z = d("view", {
                        class: Be("header-action", {
                            disabled: x
                        }),
                        onClick: x ? void 0 : T
                    }, [w ? w({
                        disabled: x
                    }) : d(Me, {
                        class: {
                            [Fn]: !x
                        },
                        name: C
                    }, null)]),
                    P = m && d("view", {
                        class: Be("header-action", {
                            disabled: y
                        }),
                        onClick: y ? void 0 : O
                    }, [g ? g({
                        disabled: y
                    }) : d(Me, {
                        class: {
                            [Fn]: !y
                        },
                        name: S
                    }, null)]);
                return v ? [z, P] : [P, z]
            },
            f = () => {
                if (e.showSubtitle) {
                    const v = t.subtitle ? t.subtitle({
                            date: e.date,
                            text: e.subtitle
                        }) : e.subtitle,
                        m = e.switchMode !== "none";
                    return d("div", {
                        class: Be("header-subtitle", {
                            "with-switch": m
                        }),
                        onClick: s
                    }, [m ? [c(), d("div", {
                        class: Be("header-subtitle-text")
                    }, [v]), c(!0)] : v])
                }
            },
            h = () => {
                const {
                    firstDayOfWeek: v
                } = e, m = jt("weekdays"), w = [...m.slice(v, 7), ...m.slice(0, v)];
                return d("div", {
                    class: Be("weekdays")
                }, [w.map(g => d("span", {
                    class: Be("weekday")
                }, [g]))])
            };
        return () => d("div", {
            class: Be("header")
        }, [l(), f(), h()])
    }
});
const km = {
    show: Boolean,
    type: se("single"),
    switchMode: se("none"),
    title: String,
    color: String,
    round: te,
    readonly: Boolean,
    poppable: te,
    maxRange: ye(null),
    position: se("bottom"),
    teleport: [String, Object],
    showMark: te,
    showTitle: te,
    formatter: Function,
    rowHeight: oe,
    confirmText: String,
    rangePrompt: String,
    lazyRender: te,
    showConfirm: te,
    defaultDate: [Date, Array],
    allowSameDay: Boolean,
    showSubtitle: te,
    closeOnPopstate: te,
    showRangePrompt: te,
    confirmDisabledText: String,
    closeOnClickOverlay: te,
    safeAreaInsetTop: Boolean,
    safeAreaInsetBottom: te,
    minDate: {
        type: Date,
        validator: Vo
    },
    maxDate: {
        type: Date,
        validator: Vo
    },
    firstDayOfWeek: {
        type: oe,
        default: 0,
        validator: e => e >= 0 && e <= 6
    }
};
var Dm = re({
    name: dm,
    props: km,
    emits: ["select", "confirm", "unselect", "monthShow", "overRange", "update:show", "clickSubtitle", "clickDisabledDate", "clickOverlay", "panelChange"],
    setup(e, {
        emit: t,
        slots: n
    }) {
        const o = j(() => e.switchMode !== "none"),
            i = j(() => !e.minDate && !o.value ? si() : e.minDate),
            r = j(() => !e.maxDate && !o.value ? La(si(), 6) : e.maxDate),
            a = (R, W = i.value, fe = r.value) => W && at(R, W) === -1 ? W : fe && at(R, fe) === 1 ? fe : R,
            l = (R = e.defaultDate) => {
                const {
                    type: W,
                    allowSameDay: fe
                } = e;
                if (R === null) return R;
                const F = si();
                if (W === "range") {
                    Array.isArray(R) || (R = []), R.length === 1 && at(R[0], F) === 1 && (R = []);
                    const ee = i.value,
                        k = r.value,
                        ne = a(R[0] || F, ee, k ? fe ? k : Jr(k) : void 0),
                        q = a(R[1] || (fe ? F : Qr(F)), ee ? fe ? ee : Qr(ee) : void 0);
                    return [ne, q]
                }
                return W === "multiple" ? Array.isArray(R) ? R.map(ee => a(ee)) : [a(F)] : ((!R || Array.isArray(R)) && (R = F), a(R))
            },
            s = () => {
                const R = Array.isArray(f.value) ? f.value[0] : f.value;
                return R || a(si())
            };
        let u;
        const c = N(),
            f = N(l()),
            h = N(s()),
            v = N(),
            [m, w] = au(),
            g = j(() => e.firstDayOfWeek ? +e.firstDayOfWeek % 7 : 0),
            x = j(() => {
                const R = [];
                if (!i.value || !r.value) return R;
                const W = new Date(i.value);
                W.setDate(1);
                do R.push(new Date(W)), W.setMonth(W.getMonth() + 1); while (On(W, r.value) !== 1);
                return R
            }),
            y = j(() => {
                if (f.value) {
                    if (e.type === "range") return !f.value[0] || !f.value[1];
                    if (e.type === "multiple") return !f.value.length
                }
                return !f.value
            }),
            C = () => f.value,
            S = () => {
                const R = Ko(c.value),
                    W = R + u,
                    fe = x.value.map((q, de) => m.value[de].getHeight()),
                    F = fe.reduce((q, de) => q + de, 0);
                if (W > F && R > 0) return;
                let ee = 0,
                    k;
                const ne = [-1, -1];
                for (let q = 0; q < x.value.length; q++) {
                    const de = m.value[q];
                    ee <= W && ee + fe[q] >= R && (ne[1] = q, k || (k = de, ne[0] = q), m.value[q].showed || (m.value[q].showed = !0, t("monthShow", {
                        date: de.date,
                        title: de.getTitle()
                    }))), ee += fe[q]
                }
                x.value.forEach((q, de) => {
                    const Ee = de >= ne[0] - 1 && de <= ne[1] + 1;
                    m.value[de].setVisible(Ee)
                }), k && (v.value = k)
            },
            T = R => {
                o.value ? h.value = R : lt(() => {
                    x.value.some((W, fe) => On(W, R) === 0 ? (c.value && m.value[fe].scrollToDate(c.value, R), !0) : !1), S()
                })
            },
            O = () => {
                if (!(e.poppable && !e.show))
                    if (f.value) {
                        const R = e.type === "single" ? f.value : f.value[0];
                        Vo(R) && T(R)
                    } else o.value || lt(S)
            },
            z = () => {
                e.poppable && !e.show || (o.value || lt(() => {
                    u = Math.floor(Le(c).height)
                }), O())
            },
            P = (R = l()) => {
                f.value = R, O()
            },
            $ = R => {
                const {
                    maxRange: W,
                    rangePrompt: fe,
                    showRangePrompt: F
                } = e;
                return W && vm(R) > +W ? (F && Zr(fe || jt("rangePrompt", W)), t("overRange"), !1) : !0
            },
            D = R => {
                h.value = R, t("panelChange", {
                    date: R
                })
            },
            p = () => {
                var R;
                return t("confirm", (R = f.value) != null ? R : is(f.value))
            },
            _ = (R, W) => {
                const fe = F => {
                    f.value = F, t("select", is(F))
                };
                if (W && e.type === "range" && !$(R)) {
                    fe([R[0], Va(R[0], +e.maxRange - 1)]);
                    return
                }
                fe(R), W && !e.showConfirm && p()
            },
            A = (R, W, fe) => {
                var F;
                return (F = R.find(ee => at(W, ee.date) === -1 && at(ee.date, fe) === -1)) == null ? void 0 : F.date
            },
            X = j(() => m.value.reduce((R, W) => {
                var fe, F;
                return R.push(...(F = (fe = W.disabledDays) == null ? void 0 : fe.value) != null ? F : []), R
            }, [])),
            le = R => {
                if (e.readonly || !R.date) return;
                const {
                    date: W
                } = R, {
                    type: fe
                } = e;
                if (fe === "range") {
                    if (!f.value) {
                        _([W]);
                        return
                    }
                    const [F, ee] = f.value;
                    if (F && !ee) {
                        const k = at(W, F);
                        if (k === 1) {
                            const ne = A(X.value, F, W);
                            if (ne) {
                                const q = Jr(ne);
                                at(F, q) === -1 ? _([F, q]) : _([W])
                            } else _([F, W], !0)
                        } else k === -1 ? _([W]) : e.allowSameDay && _([W, W], !0)
                    } else _([W])
                } else if (fe === "multiple") {
                    if (!f.value) {
                        _([W]);
                        return
                    }
                    const F = f.value,
                        ee = F.findIndex(k => at(k, W) === 0);
                    if (ee !== -1) {
                        const [k] = F.splice(ee, 1);
                        t("unselect", ao(k))
                    } else e.maxRange && F.length >= +e.maxRange ? Zr(e.rangePrompt || jt("rangePrompt", e.maxRange)) : _([...F, W])
                } else _(W, !0)
            },
            L = R => t("clickOverlay", R),
            G = R => t("update:show", R),
            Q = (R, W) => {
                const fe = W !== 0 || !e.showSubtitle;
                return d(Tm, $e({
                    ref: o.value ? v : w(W),
                    date: R,
                    currentDate: f.value,
                    showMonthTitle: fe,
                    firstDayOfWeek: g.value,
                    lazyRender: o.value ? !1 : e.lazyRender,
                    maxDate: r.value,
                    minDate: i.value
                }, Fe(e, ["type", "color", "showMark", "formatter", "rowHeight", "showSubtitle", "allowSameDay"]), {
                    onClick: le,
                    onClickDisabledDate: F => t("clickDisabledDate", F)
                }), Fe(n, ["top-info", "bottom-info", "month-title", "text"]))
            },
            be = () => {
                if (n.footer) return n.footer();
                if (e.showConfirm) {
                    const R = n["confirm-text"],
                        W = y.value,
                        fe = W ? e.confirmDisabledText : e.confirmText;
                    return d(Pi, {
                        round: !0,
                        block: !0,
                        type: "primary",
                        color: e.color,
                        class: Be("confirm"),
                        disabled: W,
                        nativeType: "button",
                        onClick: p
                    }, {
                        default: () => [R ? R({
                            disabled: W
                        }) : fe || jt("confirm")]
                    })
                }
            },
            ke = () => d("div", {
                class: [Be("footer"), {
                    "van-safe-area-bottom": e.safeAreaInsetBottom
                }]
            }, [be()]),
            Z = () => {
                var R, W;
                return d("div", {
                    class: Be()
                }, [d(Em, {
                    date: (R = v.value) == null ? void 0 : R.date,
                    maxDate: r.value,
                    minDate: i.value,
                    title: e.title,
                    subtitle: (W = v.value) == null ? void 0 : W.getTitle(),
                    showTitle: e.showTitle,
                    showSubtitle: e.showSubtitle,
                    switchMode: e.switchMode,
                    firstDayOfWeek: g.value,
                    onClickSubtitle: fe => t("clickSubtitle", fe),
                    onPanelChange: D
                }, Fe(n, ["title", "subtitle", "prev-month", "prev-year", "next-month", "next-year"])), d("div", {
                    ref: c,
                    class: Be("body"),
                    onScroll: o.value ? void 0 : S
                }, [o.value ? Q(h.value, 0) : x.value.map(Q)]), ke()])
            };
        return ie(() => e.show, z), ie(() => [e.type, e.minDate, e.maxDate, e.switchMode], () => P(l(f.value))), ie(() => e.defaultDate, R => {
            P(R)
        }), Ve({
            reset: P,
            scrollToDate: T,
            getSelectedDate: C
        }), fo(z), () => e.poppable ? d(qo, {
            show: e.show,
            class: Be("popup"),
            round: e.round,
            position: e.position,
            closeable: e.showTitle || e.showSubtitle,
            teleport: e.teleport,
            closeOnPopstate: e.closeOnPopstate,
            safeAreaInsetTop: e.safeAreaInsetTop,
            closeOnClickOverlay: e.closeOnClickOverlay,
            onClickOverlay: L,
            "onUpdate:show": G
        }, {
            default: Z
        }) : Z()
    }
});
const W0 = me(Dm),
    [Om, jn] = ae("image"),
    Im = {
        src: String,
        alt: String,
        fit: String,
        position: String,
        round: Boolean,
        block: Boolean,
        width: oe,
        height: oe,
        radius: oe,
        lazyLoad: Boolean,
        iconSize: oe,
        showError: te,
        errorIcon: se("photo-fail"),
        iconPrefix: String,
        showLoading: te,
        loadingIcon: se("photo"),
        crossorigin: String,
        referrerpolicy: String
    };
var Am = re({
    name: Om,
    props: Im,
    emits: ["load", "error"],
    setup(e, {
        emit: t,
        slots: n
    }) {
        const o = N(!1),
            i = N(!0),
            r = N(),
            {
                $Lazyload: a
            } = bt().proxy,
            l = j(() => {
                const g = {
                    width: Se(e.width),
                    height: Se(e.height)
                };
                return Re(e.radius) && (g.overflow = "hidden", g.borderRadius = Se(e.radius)), g
            });
        ie(() => e.src, () => {
            o.value = !1, i.value = !0
        });
        const s = g => {
                i.value && (i.value = !1, t("load", g))
            },
            u = () => {
                const g = new Event("load");
                Object.defineProperty(g, "target", {
                    value: r.value,
                    enumerable: !0
                }), s(g)
            },
            c = g => {
                o.value = !0, i.value = !1, t("error", g)
            },
            f = (g, x, y) => y ? y() : d(Me, {
                name: g,
                size: e.iconSize,
                class: x,
                classPrefix: e.iconPrefix
            }, null),
            h = () => {
                if (i.value && e.showLoading) return d("div", {
                    class: jn("loading")
                }, [f(e.loadingIcon, jn("loading-icon"), n.loading)]);
                if (o.value && e.showError) return d("div", {
                    class: jn("error")
                }, [f(e.errorIcon, jn("error-icon"), n.error)])
            },
            v = () => {
                if (o.value || !e.src) return;
                const g = {
                    alt: e.alt,
                    class: jn("img"),
                    style: {
                        objectFit: e.fit,
                        objectPosition: e.position
                    },
                    crossorigin: e.crossorigin,
                    referrerpolicy: e.referrerpolicy
                };
                return e.lazyLoad ? Wt(d("img", $e({
                    ref: r
                }, g), null), [
                    [Gf("lazy"), e.src]
                ]) : d("img", $e({
                    ref: r,
                    src: e.src,
                    onLoad: s,
                    onError: c
                }, g), null)
            },
            m = ({
                el: g
            }) => {
                const x = () => {
                    g === r.value && i.value && u()
                };
                r.value ? x() : Te(x)
            },
            w = ({
                el: g
            }) => {
                g === r.value && !o.value && c()
            };
        return a && Pt && (a.$on("loaded", m), a.$on("error", w), Tt(() => {
            a.$off("loaded", m), a.$off("error", w)
        })), Ge(() => {
            Te(() => {
                var g;
                (g = r.value) != null && g.complete && !e.lazyLoad && u()
            })
        }), () => {
            var g;
            return d("div", {
                class: jn({
                    round: e.round,
                    block: e.block
                }),
                style: l.value
            }, [v(), h(), (g = n.default) == null ? void 0 : g.call(n)])
        }
    }
});
const _u = me(Am),
    [Pm, ci] = ae("circle");
let $m = 0;
const cs = e => Math.min(Math.max(+e, 0), 100);

function Rm(e, t) {
    const n = e ? 1 : 0;
    return `M ${t/2} ${t/2} m 0, -500 a 500, 500 0 1, ${n} 0, 1000 a 500, 500 0 1, ${n} 0, -1000`
}
const Bm = {
    text: String,
    size: oe,
    fill: se("none"),
    rate: ye(100),
    speed: ye(0),
    color: [String, Object],
    clockwise: te,
    layerColor: String,
    currentRate: qi(0),
    strokeWidth: ye(40),
    strokeLinecap: String,
    startPosition: se("top")
};
var Mm = re({
    name: Pm,
    props: Bm,
    emits: ["update:currentRate"],
    setup(e, {
        emit: t,
        slots: n
    }) {
        const o = `van-circle-${$m++}`,
            i = j(() => +e.strokeWidth + 1e3),
            r = j(() => Rm(e.clockwise, i.value)),
            a = j(() => {
                const h = {
                    top: 0,
                    right: 90,
                    bottom: 180,
                    left: 270
                }[e.startPosition];
                if (h) return {
                    transform: `rotate(${h}deg)`
                }
            });
        ie(() => e.rate, f => {
            let h;
            const v = Date.now(),
                m = e.currentRate,
                w = cs(f),
                g = Math.abs((m - w) * 1e3 / +e.speed),
                x = () => {
                    const y = Date.now(),
                        S = Math.min((y - v) / g, 1) * (w - m) + m;
                    t("update:currentRate", cs(parseFloat(S.toFixed(1)))), (w > m ? S < w : S > w) && (h = lt(x))
                };
            e.speed ? (h && Xi(h), h = lt(x)) : t("update:currentRate", w)
        }, {
            immediate: !0
        });
        const l = () => {
                const {
                    strokeWidth: h,
                    currentRate: v,
                    strokeLinecap: m
                } = e, w = 3140 * v / 100, g = Mn(e.color) ? `url(#${o})` : e.color, x = {
                    stroke: g,
                    strokeWidth: `${+h+1}px`,
                    strokeLinecap: m,
                    strokeDasharray: `${w}px 3140px`
                };
                return d("path", {
                    d: r.value,
                    style: x,
                    class: ci("hover"),
                    stroke: g
                }, null)
            },
            s = () => {
                const f = {
                    fill: e.fill,
                    stroke: e.layerColor,
                    strokeWidth: `${e.strokeWidth}px`
                };
                return d("path", {
                    class: ci("layer"),
                    style: f,
                    d: r.value
                }, null)
            },
            u = () => {
                const {
                    color: f
                } = e;
                if (!Mn(f)) return;
                const h = Object.keys(f).sort((v, m) => parseFloat(v) - parseFloat(m)).map((v, m) => d("stop", {
                    key: m,
                    offset: v,
                    "stop-color": f[v]
                }, null));
                return d("defs", null, [d("linearGradient", {
                    id: o,
                    x1: "100%",
                    y1: "0%",
                    x2: "0%",
                    y2: "0%"
                }, [h])])
            },
            c = () => {
                if (n.default) return n.default();
                if (e.text) return d("div", {
                    class: ci("text")
                }, [e.text])
            };
        return () => d("div", {
            class: ci(),
            style: bn(e.size)
        }, [d("svg", {
            viewBox: `0 0 ${i.value} ${i.value}`,
            style: a.value
        }, [u(), s(), l()]), c()])
    }
});
const U0 = me(Mm),
    Y0 = me(vv);

function Fm(e, t) {
    const {
        days: n
    } = t;
    let {
        hours: o,
        minutes: i,
        seconds: r,
        milliseconds: a
    } = t;
    if (e.includes("DD") ? e = e.replace("DD", kn(n)) : o += n * 24, e.includes("HH") ? e = e.replace("HH", kn(o)) : i += o * 60, e.includes("mm") ? e = e.replace("mm", kn(i)) : r += i * 60, e.includes("ss") ? e = e.replace("ss", kn(r)) : a += r * 1e3, e.includes("S")) {
        const l = kn(a, 3);
        e.includes("SSS") ? e = e.replace("SSS", l) : e.includes("SS") ? e = e.replace("SS", l.slice(0, 2)) : e = e.replace("S", l.charAt(0))
    }
    return e
}
const [Vm, Lm] = ae("count-down"), Nm = {
    time: ye(0),
    format: se("HH:mm:ss"),
    autoStart: te,
    millisecond: Boolean
};
var Hm = re({
    name: Vm,
    props: Nm,
    emits: ["change", "finish"],
    setup(e, {
        emit: t,
        slots: n
    }) {
        const {
            start: o,
            pause: i,
            reset: r,
            current: a
        } = Eh({
            time: +e.time,
            millisecond: e.millisecond,
            onChange: u => t("change", u),
            onFinish: () => t("finish")
        }), l = j(() => Fm(e.format, a.value)), s = () => {
            r(+e.time), e.autoStart && o()
        };
        return ie(() => e.time, s, {
            immediate: !0
        }), Ve({
            start: o,
            pause: i,
            reset: s
        }), () => d("div", {
            role: "timer",
            class: Lm()
        }, [n.default ? n.default(a.value) : l.value])
    }
});
const K0 = me(Hm),
    [zm, ui] = ae("empty"),
    jm = {
        image: se("default"),
        imageSize: [Number, String, Array],
        description: String
    };
var Wm = re({
    name: zm,
    props: jm,
    setup(e, {
        slots: t
    }) {
        const n = () => {
                const x = t.description ? t.description() : e.description;
                if (x) return d("p", {
                    class: ui("description")
                }, [x])
            },
            o = () => {
                if (t.default) return d("div", {
                    class: ui("bottom")
                }, [t.default()])
            },
            i = tr(),
            r = x => `${i}-${x}`,
            a = x => `url(#${r(x)})`,
            l = (x, y, C) => d("stop", {
                "stop-color": x,
                offset: `${y}%`,
                "stop-opacity": C
            }, null),
            s = (x, y) => [l(x, 0), l(y, 100)],
            u = x => [d("defs", null, [d("radialGradient", {
                id: r(x),
                cx: "50%",
                cy: "54%",
                fx: "50%",
                fy: "54%",
                r: "297%",
                gradientTransform: "matrix(-.16 0 0 -.33 .58 .72)",
                "data-allow-mismatch": "attribute"
            }, [l("#EBEDF0", 0), l("#F2F3F5", 100, .3)])]), d("ellipse", {
                fill: a(x),
                opacity: ".8",
                cx: "80",
                cy: "140",
                rx: "46",
                ry: "8",
                "data-allow-mismatch": "attribute"
            }, null)],
            c = () => [d("defs", null, [d("linearGradient", {
                id: r("a"),
                x1: "64%",
                y1: "100%",
                x2: "64%",
                "data-allow-mismatch": "attribute"
            }, [l("#FFF", 0, .5), l("#F2F3F5", 100)])]), d("g", {
                opacity: ".8",
                "data-allow-mismatch": "children"
            }, [d("path", {
                d: "M36 131V53H16v20H2v58h34z",
                fill: a("a")
            }, null), d("path", {
                d: "M123 15h22v14h9v77h-31V15z",
                fill: a("a")
            }, null)])],
            f = () => [d("defs", null, [d("linearGradient", {
                id: r("b"),
                x1: "64%",
                y1: "97%",
                x2: "64%",
                y2: "0%",
                "data-allow-mismatch": "attribute"
            }, [l("#F2F3F5", 0, .3), l("#F2F3F5", 100)])]), d("g", {
                opacity: ".8",
                "data-allow-mismatch": "children"
            }, [d("path", {
                d: "M87 6c3 0 7 3 8 6a8 8 0 1 1-1 16H80a7 7 0 0 1-8-6c0-4 3-7 6-7 0-5 4-9 9-9Z",
                fill: a("b")
            }, null), d("path", {
                d: "M19 23c2 0 3 1 4 3 2 0 4 2 4 4a4 4 0 0 1-4 3v1h-7v-1l-1 1c-2 0-3-2-3-4 0-1 1-3 3-3 0-2 2-4 4-4Z",
                fill: a("b")
            }, null)])],
            h = () => d("svg", {
                viewBox: "0 0 160 160"
            }, [d("defs", {
                "data-allow-mismatch": "children"
            }, [d("linearGradient", {
                id: r(1),
                x1: "64%",
                y1: "100%",
                x2: "64%"
            }, [l("#FFF", 0, .5), l("#F2F3F5", 100)]), d("linearGradient", {
                id: r(2),
                x1: "50%",
                x2: "50%",
                y2: "84%"
            }, [l("#EBEDF0", 0), l("#DCDEE0", 100, 0)]), d("linearGradient", {
                id: r(3),
                x1: "100%",
                x2: "100%",
                y2: "100%"
            }, [s("#EAEDF0", "#DCDEE0")]), d("radialGradient", {
                id: r(4),
                cx: "50%",
                cy: "0%",
                fx: "50%",
                fy: "0%",
                r: "100%",
                gradientTransform: "matrix(0 1 -.54 0 .5 -.5)"
            }, [l("#EBEDF0", 0), l("#FFF", 100, 0)])]), d("g", {
                fill: "none"
            }, [c(), d("path", {
                fill: a(4),
                d: "M0 139h160v21H0z",
                "data-allow-mismatch": "attribute"
            }, null), d("path", {
                d: "M80 54a7 7 0 0 1 3 13v27l-2 2h-2a2 2 0 0 1-2-2V67a7 7 0 0 1 3-13z",
                fill: a(2),
                "data-allow-mismatch": "attribute"
            }, null), d("g", {
                opacity: ".6",
                "stroke-linecap": "round",
                "stroke-width": "7",
                "data-allow-mismatch": "children"
            }, [d("path", {
                d: "M64 47a19 19 0 0 0-5 13c0 5 2 10 5 13",
                stroke: a(3)
            }, null), d("path", {
                d: "M53 36a34 34 0 0 0 0 48",
                stroke: a(3)
            }, null), d("path", {
                d: "M95 73a19 19 0 0 0 6-13c0-5-2-9-6-13",
                stroke: a(3)
            }, null), d("path", {
                d: "M106 84a34 34 0 0 0 0-48",
                stroke: a(3)
            }, null)]), d("g", {
                transform: "translate(31 105)"
            }, [d("rect", {
                fill: "#EBEDF0",
                width: "98",
                height: "34",
                rx: "2"
            }, null), d("rect", {
                fill: "#FFF",
                x: "9",
                y: "8",
                width: "80",
                height: "18",
                rx: "1.1"
            }, null), d("rect", {
                fill: "#EBEDF0",
                x: "15",
                y: "12",
                width: "18",
                height: "6",
                rx: "1.1"
            }, null)])])]),
            v = () => d("svg", {
                viewBox: "0 0 160 160"
            }, [d("defs", {
                "data-allow-mismatch": "children"
            }, [d("linearGradient", {
                x1: "50%",
                x2: "50%",
                y2: "100%",
                id: r(5)
            }, [s("#F2F3F5", "#DCDEE0")]), d("linearGradient", {
                x1: "95%",
                y1: "48%",
                x2: "5.5%",
                y2: "51%",
                id: r(6)
            }, [s("#EAEDF1", "#DCDEE0")]), d("linearGradient", {
                y1: "45%",
                x2: "100%",
                y2: "54%",
                id: r(7)
            }, [s("#EAEDF1", "#DCDEE0")])]), c(), f(), d("g", {
                transform: "translate(36 50)",
                fill: "none"
            }, [d("g", {
                transform: "translate(8)"
            }, [d("rect", {
                fill: "#EBEDF0",
                opacity: ".6",
                x: "38",
                y: "13",
                width: "36",
                height: "53",
                rx: "2"
            }, null), d("rect", {
                fill: a(5),
                width: "64",
                height: "66",
                rx: "2",
                "data-allow-mismatch": "attribute"
            }, null), d("rect", {
                fill: "#FFF",
                x: "6",
                y: "6",
                width: "52",
                height: "55",
                rx: "1"
            }, null), d("g", {
                transform: "translate(15 17)",
                fill: a(6),
                "data-allow-mismatch": "attribute"
            }, [d("rect", {
                width: "34",
                height: "6",
                rx: "1"
            }, null), d("path", {
                d: "M0 14h34v6H0z"
            }, null), d("rect", {
                y: "28",
                width: "34",
                height: "6",
                rx: "1"
            }, null)])]), d("rect", {
                fill: a(7),
                y: "61",
                width: "88",
                height: "28",
                rx: "1",
                "data-allow-mismatch": "attribute"
            }, null), d("rect", {
                fill: "#F7F8FA",
                x: "29",
                y: "72",
                width: "30",
                height: "6",
                rx: "1"
            }, null)])]),
            m = () => d("svg", {
                viewBox: "0 0 160 160"
            }, [d("defs", null, [d("linearGradient", {
                x1: "50%",
                x2: "50%",
                y2: "100%",
                id: r(8),
                "data-allow-mismatch": "attribute"
            }, [s("#EAEDF1", "#DCDEE0")])]), c(), f(), u("c"), d("path", {
                d: "m59 60 21 21 21-21h3l9 9v3L92 93l21 21v3l-9 9h-3l-21-21-21 21h-3l-9-9v-3l21-21-21-21v-3l9-9h3Z",
                fill: a(8),
                "data-allow-mismatch": "attribute"
            }, null)]),
            w = () => d("svg", {
                viewBox: "0 0 160 160"
            }, [d("defs", {
                "data-allow-mismatch": "children"
            }, [d("linearGradient", {
                x1: "50%",
                y1: "100%",
                x2: "50%",
                id: r(9)
            }, [s("#EEE", "#D8D8D8")]), d("linearGradient", {
                x1: "100%",
                y1: "50%",
                y2: "50%",
                id: r(10)
            }, [s("#F2F3F5", "#DCDEE0")]), d("linearGradient", {
                x1: "50%",
                x2: "50%",
                y2: "100%",
                id: r(11)
            }, [s("#F2F3F5", "#DCDEE0")]), d("linearGradient", {
                x1: "50%",
                x2: "50%",
                y2: "100%",
                id: r(12)
            }, [s("#FFF", "#F7F8FA")])]), c(), f(), u("d"), d("g", {
                transform: "rotate(-45 113 -4)",
                fill: "none",
                "data-allow-mismatch": "children"
            }, [d("rect", {
                fill: a(9),
                x: "24",
                y: "52.8",
                width: "5.8",
                height: "19",
                rx: "1"
            }, null), d("rect", {
                fill: a(10),
                x: "22.1",
                y: "67.3",
                width: "9.9",
                height: "28",
                rx: "1"
            }, null), d("circle", {
                stroke: a(11),
                "stroke-width": "8",
                cx: "27",
                cy: "27",
                r: "27"
            }, null), d("circle", {
                fill: a(12),
                cx: "27",
                cy: "27",
                r: "16"
            }, null), d("path", {
                d: "M37 7c-8 0-15 5-16 12",
                stroke: a(11),
                "stroke-width": "3",
                opacity: ".5",
                "stroke-linecap": "round",
                transform: "rotate(45 29 13)"
            }, null)])]),
            g = () => {
                var x;
                if (t.image) return t.image();
                const y = {
                    error: m,
                    search: w,
                    network: h,
                    default: v
                };
                return ((x = y[e.image]) == null ? void 0 : x.call(y)) || d("img", {
                    src: e.image
                }, null)
            };
        return () => d("div", {
            class: ui()
        }, [d("div", {
            class: ui("image"),
            style: bn(e.imageSize)
        }, [g()]), n(), o()])
    }
});
const G0 = me(Wm),
    us = new Date().getFullYear(),
    [Um] = ae("date-picker"),
    Ym = pe({}, mm, {
        columnsType: {
            type: Array,
            default: () => ["year", "month", "day"]
        },
        minDate: {
            type: Date,
            default: () => new Date(us - 10, 0, 1),
            validator: Vo
        },
        maxDate: {
            type: Date,
            default: () => new Date(us + 10, 11, 31),
            validator: Vo
        }
    });
var Km = re({
    name: Um,
    props: Ym,
    emits: ["confirm", "cancel", "change", "update:modelValue"],
    setup(e, {
        emit: t,
        slots: n
    }) {
        const o = N(e.modelValue),
            i = N(!1),
            r = N(),
            a = j(() => i.value ? e.modelValue : o.value),
            l = T => T === e.minDate.getFullYear(),
            s = T => T === e.maxDate.getFullYear(),
            u = T => T === e.minDate.getMonth() + 1,
            c = T => T === e.maxDate.getMonth() + 1,
            f = T => {
                const {
                    minDate: O,
                    columnsType: z
                } = e, P = z.indexOf(T), $ = a.value[P];
                if ($) return +$;
                switch (T) {
                    case "year":
                        return O.getFullYear();
                    case "month":
                        return O.getMonth() + 1;
                    case "day":
                        return O.getDate()
                }
            },
            h = () => {
                const T = e.minDate.getFullYear(),
                    O = e.maxDate.getFullYear();
                return Tr(T, O, "year", e.formatter, e.filter, a.value)
            },
            v = () => {
                const T = f("year"),
                    O = l(T) ? e.minDate.getMonth() + 1 : 1,
                    z = s(T) ? e.maxDate.getMonth() + 1 : 12;
                return Tr(O, z, "month", e.formatter, e.filter, a.value)
            },
            m = () => {
                const T = f("year"),
                    O = f("month"),
                    z = l(T) && u(O) ? e.minDate.getDate() : 1,
                    P = s(T) && c(O) ? e.maxDate.getDate() : Tu(T, O);
                return Tr(z, P, "day", e.formatter, e.filter, a.value)
            },
            w = () => {
                var T;
                return (T = r.value) == null ? void 0 : T.confirm()
            },
            g = () => o.value,
            x = j(() => e.columnsType.map(T => {
                switch (T) {
                    case "year":
                        return h();
                    case "month":
                        return v();
                    case "day":
                        return m();
                    default:
                        return []
                }
            }));
        ie(o, T => {
            sn(T, e.modelValue) || t("update:modelValue", T)
        }), ie(() => e.modelValue, (T, O) => {
            i.value = sn(O, o.value), T = pm(T, x.value), sn(T, o.value) || (o.value = T), i.value = !1
        }, {
            immediate: !0
        });
        const y = (...T) => t("change", ...T),
            C = (...T) => t("cancel", ...T),
            S = (...T) => t("confirm", ...T);
        return Ve({
            confirm: w,
            getSelectedDate: g
        }), () => d(Dg, $e({
            ref: r,
            modelValue: o.value,
            "onUpdate:modelValue": T => o.value = T,
            columns: x.value,
            onChange: y,
            onCancel: C,
            onConfirm: S
        }, Fe(e, ym)), n)
    }
});
const q0 = me(Km),
    [Gm, pt, fi] = ae("dialog"),
    qm = pe({}, Pa, {
        title: String,
        theme: String,
        width: oe,
        message: [String, Function],
        callback: Function,
        allowHtml: Boolean,
        className: ze,
        transition: se("van-dialog-bounce"),
        messageAlign: String,
        closeOnPopstate: te,
        showCancelButton: Boolean,
        cancelButtonText: String,
        cancelButtonColor: String,
        cancelButtonDisabled: Boolean,
        confirmButtonText: String,
        confirmButtonColor: String,
        confirmButtonDisabled: Boolean,
        showConfirmButton: te,
        closeOnClickOverlay: Boolean,
        keyboardEnabled: te
    }),
    Xm = [...Pv, "transition", "closeOnPopstate"];
var Eu = re({
    name: Gm,
    props: qm,
    emits: ["confirm", "cancel", "keydown", "update:show"],
    setup(e, {
        emit: t,
        slots: n
    }) {
        const o = N(),
            i = Ke({
                confirm: !1,
                cancel: !1
            }),
            r = x => t("update:show", x),
            a = x => {
                var y;
                r(!1), (y = e.callback) == null || y.call(e, x)
            },
            l = x => () => {
                e.show && (t(x), e.beforeClose ? (i[x] = !0, Go(e.beforeClose, {
                    args: [x],
                    done() {
                        a(x), i[x] = !1
                    },
                    canceled() {
                        i[x] = !1
                    }
                })) : a(x))
            },
            s = l("cancel"),
            u = l("confirm"),
            c = hh(x => {
                var y, C;
                if (!e.keyboardEnabled || x.target !== ((C = (y = o.value) == null ? void 0 : y.popupRef) == null ? void 0 : C.value)) return;
                ({
                    Enter: e.showConfirmButton ? u : jr,
                    Escape: e.showCancelButton ? s : jr
                })[x.key](), t("keydown", x)
            }, ["enter", "esc"]),
            f = () => {
                const x = n.title ? n.title() : e.title;
                if (x) return d("div", {
                    class: pt("header", {
                        isolated: !e.message && !n.default
                    })
                }, [x])
            },
            h = x => {
                const {
                    message: y,
                    allowHtml: C,
                    messageAlign: S
                } = e, T = pt("message", {
                    "has-title": x,
                    [S]: S
                }), O = io(y) ? y() : y;
                return C && typeof O == "string" ? d("div", {
                    class: T,
                    innerHTML: O
                }, null) : d("div", {
                    class: T
                }, [O])
            },
            v = () => {
                if (n.default) return d("div", {
                    class: pt("content")
                }, [n.default()]);
                const {
                    title: x,
                    message: y,
                    allowHtml: C
                } = e;
                if (y) {
                    const S = !!(x || n.title);
                    return d("div", {
                        key: C ? 1 : 0,
                        class: pt("content", {
                            isolated: !S
                        })
                    }, [h(S)])
                }
            },
            m = () => d("div", {
                class: [Gh, pt("footer")]
            }, [e.showCancelButton && d(Pi, {
                size: "large",
                text: e.cancelButtonText || fi("cancel"),
                class: pt("cancel"),
                style: {
                    color: e.cancelButtonColor
                },
                loading: i.cancel,
                disabled: e.cancelButtonDisabled,
                onClick: s
            }, null), e.showConfirmButton && d(Pi, {
                size: "large",
                text: e.confirmButtonText || fi("confirm"),
                class: [pt("confirm"), {
                    [Uc]: e.showCancelButton
                }],
                style: {
                    color: e.confirmButtonColor
                },
                loading: i.confirm,
                disabled: e.confirmButtonDisabled,
                onClick: u
            }, null)]),
            w = () => d(iv, {
                class: pt("footer")
            }, {
                default: () => [e.showCancelButton && d(Kl, {
                    type: "warning",
                    text: e.cancelButtonText || fi("cancel"),
                    class: pt("cancel"),
                    color: e.cancelButtonColor,
                    loading: i.cancel,
                    disabled: e.cancelButtonDisabled,
                    onClick: s
                }, null), e.showConfirmButton && d(Kl, {
                    type: "danger",
                    text: e.confirmButtonText || fi("confirm"),
                    class: pt("confirm"),
                    color: e.confirmButtonColor,
                    loading: i.confirm,
                    disabled: e.confirmButtonDisabled,
                    onClick: u
                }, null)]
            }),
            g = () => n.footer ? n.footer() : e.theme === "round-button" ? w() : m();
        return () => {
            const {
                width: x,
                title: y,
                theme: C,
                message: S,
                className: T
            } = e;
            return d(qo, $e({
                ref: o,
                role: "dialog",
                class: [pt([C]), T],
                style: {
                    width: Se(x)
                },
                tabindex: 0,
                "aria-labelledby": y || S,
                onKeydown: c,
                "onUpdate:show": r
            }, Fe(e, Xm)), {
                default: () => [f(), v(), g()]
            })
        }
    }
});
let ea;
const Zm = {
    title: "",
    width: "",
    theme: null,
    message: "",
    overlay: !0,
    callback: null,
    teleport: "body",
    className: "",
    allowHtml: !1,
    lockScroll: !0,
    transition: void 0,
    beforeClose: null,
    overlayClass: "",
    overlayStyle: void 0,
    messageAlign: "",
    cancelButtonText: "",
    cancelButtonColor: null,
    cancelButtonDisabled: !1,
    confirmButtonText: "",
    confirmButtonColor: null,
    confirmButtonDisabled: !1,
    showConfirmButton: !0,
    showCancelButton: !1,
    closeOnPopstate: !0,
    closeOnClickOverlay: !1
};
let Jm = pe({}, Zm);

function Qm() {
    ({
        instance: ea
    } = Ba({
        setup() {
            const {
                state: t,
                toggle: n
            } = Ra();
            return () => d(Eu, $e(t, {
                "onUpdate:show": n
            }), null)
        }
    }))
}

function X0(e) {
    return Pt ? new Promise((t, n) => {
        ea || Qm(), ea.open(pe({}, Jm, e, {
            callback: o => {
                (o === "confirm" ? t : n)(o)
            }
        }))
    }) : Promise.resolve(void 0)
}
me(Eu);
const ey = {
        gap: qi(24),
        icon: String,
        axis: se("y"),
        magnetic: String,
        offset: {
            type: Object,
            default: () => ({
                x: -1,
                y: -1
            })
        },
        teleport: {
            type: [String, Object],
            default: "body"
        }
    },
    [ty, fs] = ae("floating-bubble");
var ny = re({
    name: ty,
    inheritAttrs: !1,
    props: ey,
    emits: ["click", "update:offset", "offsetChange"],
    setup(e, {
        slots: t,
        emit: n,
        attrs: o
    }) {
        const i = N(),
            r = N({
                x: 0,
                y: 0,
                width: 0,
                height: 0
            }),
            a = j(() => ({
                top: e.gap,
                right: zt.value - r.value.width - e.gap,
                bottom: cn.value - r.value.height - e.gap,
                left: e.gap
            })),
            l = N(!1);
        let s = !1;
        const u = j(() => {
                const C = {},
                    S = Se(r.value.x),
                    T = Se(r.value.y);
                return C.transform = `translate3d(${S}, ${T}, 0)`, (l.value || !s) && (C.transition = "none"), C
            }),
            c = () => {
                if (!y.value) return;
                const {
                    width: C,
                    height: S
                } = Le(i.value), {
                    offset: T
                } = e;
                r.value = {
                    x: T.x > -1 ? T.x : zt.value - C - e.gap,
                    y: T.y > -1 ? T.y : cn.value - S - e.gap,
                    width: C,
                    height: S
                }
            },
            f = pn();
        let h = 0,
            v = 0;
        const m = C => {
            f.start(C), l.value = !0, h = r.value.x, v = r.value.y
        };
        it("touchmove", C => {
            if (C.preventDefault(), f.move(C), e.axis !== "lock" && !f.isTap.value) {
                if (e.axis === "x" || e.axis === "xy") {
                    let T = h + f.deltaX.value;
                    T < a.value.left && (T = a.value.left), T > a.value.right && (T = a.value.right), r.value.x = T
                }
                if (e.axis === "y" || e.axis === "xy") {
                    let T = v + f.deltaY.value;
                    T < a.value.top && (T = a.value.top), T > a.value.bottom && (T = a.value.bottom), r.value.y = T
                }
                const S = Fe(r.value, ["x", "y"]);
                n("update:offset", S)
            }
        }, {
            target: i
        });
        const g = () => {
                l.value = !1, Te(() => {
                    if (e.magnetic === "x") {
                        const C = jl([a.value.left, a.value.right], r.value.x);
                        r.value.x = C
                    }
                    if (e.magnetic === "y") {
                        const C = jl([a.value.top, a.value.bottom], r.value.y);
                        r.value.y = C
                    }
                    if (!f.isTap.value) {
                        const C = Fe(r.value, ["x", "y"]);
                        n("update:offset", C), (h !== C.x || v !== C.y) && n("offsetChange", C)
                    }
                })
            },
            x = C => {
                f.isTap.value ? n("click", C) : C.stopPropagation()
            };
        Ge(() => {
            c(), Te(() => {
                s = !0
            })
        }), ie([zt, cn, () => e.gap, () => e.offset], c, {
            deep: !0
        });
        const y = N(!0);
        return gn(() => {
            y.value = !0
        }), qt(() => {
            e.teleport && (y.value = !1)
        }), () => {
            const C = Wt(d("div", $e({
                class: fs(),
                ref: i,
                onTouchstartPassive: m,
                onTouchend: g,
                onTouchcancel: g,
                onClickCapture: x,
                style: u.value
            }, o), [t.default ? t.default() : d(pv, {
                name: e.icon,
                class: fs("icon")
            }, null)]), [
                [un, y.value]
            ]);
            return e.teleport ? d(ji, {
                to: e.teleport
            }, {
                default: () => [C]
            }) : C
        }
    }
});
const Z0 = me(ny),
    ds = e => Math.sqrt((e[0].clientX - e[1].clientX) ** 2 + (e[0].clientY - e[1].clientY) ** 2),
    oy = e => ({
        x: (e[0].clientX + e[1].clientX) / 2,
        y: (e[0].clientY + e[1].clientY) / 2
    }),
    _r = ae("image-preview")[1],
    hs = 2.6,
    iy = {
        src: String,
        show: Boolean,
        active: Number,
        minZoom: nt(oe),
        maxZoom: nt(oe),
        rootWidth: nt(Number),
        rootHeight: nt(Number),
        disableZoom: Boolean,
        doubleScale: Boolean,
        closeOnClickImage: Boolean,
        closeOnClickOverlay: Boolean,
        vertical: Boolean
    };
var ry = re({
    props: iy,
    emits: ["scale", "close", "longPress"],
    setup(e, {
        emit: t,
        slots: n
    }) {
        const o = Ke({
                scale: 1,
                moveX: 0,
                moveY: 0,
                moving: !1,
                zooming: !1,
                initializing: !1,
                imageRatio: 0
            }),
            i = pn(),
            r = N(),
            a = N(),
            l = N(!1),
            s = N(!1);
        let u = 0;
        const c = j(() => {
                const {
                    scale: L,
                    moveX: G,
                    moveY: Q,
                    moving: be,
                    zooming: ke,
                    initializing: Z
                } = o, R = {
                    transitionDuration: ke || be || Z ? "0s" : ".3s"
                };
                return (L !== 1 || s.value) && (R.transform = `matrix(${L}, 0, 0, ${L}, ${G}, ${Q})`), R
            }),
            f = j(() => {
                if (o.imageRatio) {
                    const {
                        rootWidth: L,
                        rootHeight: G
                    } = e, Q = l.value ? G / o.imageRatio : L;
                    return Math.max(0, (o.scale * Q - L) / 2)
                }
                return 0
            }),
            h = j(() => {
                if (o.imageRatio) {
                    const {
                        rootWidth: L,
                        rootHeight: G
                    } = e, Q = l.value ? G : L * o.imageRatio;
                    return Math.max(0, (o.scale * Q - G) / 2)
                }
                return 0
            }),
            v = (L, G) => {
                var Q;
                if (L = qe(L, +e.minZoom, +e.maxZoom + 1), L !== o.scale) {
                    const be = L / o.scale;
                    if (o.scale = L, G) {
                        const ke = Le((Q = r.value) == null ? void 0 : Q.$el),
                            Z = {
                                x: ke.width * .5,
                                y: ke.height * .5
                            },
                            R = o.moveX - (G.x - ke.left - Z.x) * (be - 1),
                            W = o.moveY - (G.y - ke.top - Z.y) * (be - 1);
                        o.moveX = qe(R, -f.value, f.value), o.moveY = qe(W, -h.value, h.value)
                    } else o.moveX = 0, o.moveY = s.value ? u : 0;
                    t("scale", {
                        scale: L,
                        index: e.active
                    })
                }
            },
            m = () => {
                v(1)
            },
            w = () => {
                const L = o.scale > 1 ? 1 : 2;
                v(L, L === 2 || s.value ? {
                    x: i.startX.value,
                    y: i.startY.value
                } : void 0)
            };
        let g, x, y, C, S, T, O, z, P = !1;
        const $ = L => {
                const {
                    touches: G
                } = L;
                if (g = G.length, g === 2 && e.disableZoom) return;
                const {
                    offsetX: Q
                } = i;
                i.start(L), x = o.moveX, y = o.moveY, z = Date.now(), P = !1, o.moving = g === 1 && (o.scale !== 1 || s.value), o.zooming = g === 2 && !Q.value, o.zooming && (C = o.scale, S = ds(G))
            },
            D = L => {
                const {
                    touches: G
                } = L;
                if (i.move(L), o.moving) {
                    const {
                        deltaX: Q,
                        deltaY: be
                    } = i, ke = Q.value + x, Z = be.value + y;
                    if ((e.vertical ? i.isVertical() && Math.abs(Z) > h.value : i.isHorizontal() && Math.abs(ke) > f.value) && !P) {
                        o.moving = !1;
                        return
                    }
                    P = !0, ot(L, !0), o.moveX = qe(ke, -f.value, f.value), o.moveY = qe(Z, -h.value, h.value)
                }
                if (o.zooming && (ot(L, !0), G.length === 2)) {
                    const Q = ds(G),
                        be = C * Q / S;
                    T = oy(G), v(be, T)
                }
            },
            p = L => {
                var G;
                const Q = (G = a.value) == null ? void 0 : G.$el;
                if (!Q) return;
                const be = Q.firstElementChild,
                    ke = L.target === Q,
                    Z = be == null ? void 0 : be.contains(L.target);
                !e.closeOnClickImage && Z || !e.closeOnClickOverlay && ke || t("close")
            },
            _ = L => {
                if (g > 1) return;
                const G = Date.now() - z,
                    Q = 250;
                i.isTap.value && (G < Q ? e.doubleScale ? O ? (clearTimeout(O), O = null, w()) : O = setTimeout(() => {
                    p(L), O = null
                }, Q) : p(L) : G > ev && t("longPress"))
            },
            A = L => {
                let G = !1;
                if ((o.moving || o.zooming) && (G = !0, o.moving && x === o.moveX && y === o.moveY && (G = !1), !L.touches.length)) {
                    o.zooming && (o.moveX = qe(o.moveX, -f.value, f.value), o.moveY = qe(o.moveY, -h.value, h.value), o.zooming = !1), o.moving = !1, x = 0, y = 0, C = 1, o.scale < 1 && m();
                    const Q = +e.maxZoom;
                    o.scale > Q && v(Q, T)
                }
                ot(L, G), _(L), i.reset()
            },
            X = () => {
                const {
                    rootWidth: L,
                    rootHeight: G
                } = e, Q = G / L, {
                    imageRatio: be
                } = o;
                l.value = o.imageRatio > Q && be < hs, s.value = o.imageRatio > Q && be >= hs, s.value && (u = (be * L - G) / 2, o.moveY = u, o.initializing = !0, lt(() => {
                    o.initializing = !1
                })), m()
            },
            le = L => {
                const {
                    naturalWidth: G,
                    naturalHeight: Q
                } = L.target;
                o.imageRatio = Q / G, X()
            };
        return ie(() => e.active, m), ie(() => e.show, L => {
            L || m()
        }), ie(() => [e.rootWidth, e.rootHeight], X), it("touchmove", D, {
            target: j(() => {
                var L;
                return (L = a.value) == null ? void 0 : L.$el
            })
        }), Ve({
            resetScale: m
        }), () => {
            const L = {
                loading: () => d(Zt, {
                    type: "spinner"
                }, null)
            };
            return d(vu, {
                ref: a,
                class: _r("swipe-item"),
                onTouchstartPassive: $,
                onTouchend: A,
                onTouchcancel: A
            }, {
                default: () => [n.image ? d("div", {
                    class: _r("image-wrap")
                }, [n.image({
                    src: e.src,
                    onLoad: le,
                    style: c.value
                })]) : d(_u, {
                    ref: r,
                    src: e.src,
                    fit: "contain",
                    class: _r("image", {
                        vertical: l.value
                    }),
                    style: c.value,
                    onLoad: le
                }, L)]
            })
        }
    }
});
const [ay, Wn] = ae("image-preview"), ly = ["show", "teleport", "transition", "overlayStyle", "closeOnPopstate"], sy = {
    show: Boolean,
    loop: te,
    images: dn(),
    minZoom: ye(1 / 3),
    maxZoom: ye(3),
    overlay: te,
    vertical: Boolean,
    closeable: Boolean,
    showIndex: te,
    className: ze,
    closeIcon: se("clear"),
    transition: String,
    beforeClose: Function,
    doubleScale: te,
    overlayClass: ze,
    overlayStyle: Object,
    swipeDuration: ye(300),
    startPosition: ye(0),
    showIndicators: Boolean,
    closeOnPopstate: te,
    closeOnClickImage: te,
    closeOnClickOverlay: te,
    closeIconPosition: se("top-right"),
    teleport: [String, Object]
};
var ku = re({
    name: ay,
    props: sy,
    emits: ["scale", "close", "closed", "change", "longPress", "update:show"],
    setup(e, {
        emit: t,
        slots: n
    }) {
        const o = N(),
            i = N(),
            r = Ke({
                active: 0,
                rootWidth: 0,
                rootHeight: 0,
                disableZoom: !1
            }),
            a = () => {
                if (o.value) {
                    const C = Le(o.value.$el);
                    r.rootWidth = C.width, r.rootHeight = C.height, o.value.resize()
                }
            },
            l = C => t("scale", C),
            s = C => t("update:show", C),
            u = () => {
                Go(e.beforeClose, {
                    args: [r.active],
                    done: () => s(!1)
                })
            },
            c = C => {
                C !== r.active && (r.active = C, t("change", C))
            },
            f = () => {
                if (e.showIndex) return d("div", {
                    class: Wn("index")
                }, [n.index ? n.index({
                    index: r.active
                }) : `${r.active+1} / ${e.images.length}`])
            },
            h = () => {
                if (n.cover) return d("div", {
                    class: Wn("cover")
                }, [n.cover()])
            },
            v = () => {
                r.disableZoom = !0
            },
            m = () => {
                r.disableZoom = !1
            },
            w = () => d(uu, {
                ref: o,
                lazyRender: !0,
                loop: e.loop,
                class: Wn("swipe"),
                vertical: e.vertical,
                duration: e.swipeDuration,
                initialSwipe: e.startPosition,
                showIndicators: e.showIndicators,
                indicatorColor: "white",
                onChange: c,
                onDragEnd: m,
                onDragStart: v
            }, {
                default: () => [e.images.map((C, S) => d(ry, {
                    ref: T => {
                        S === r.active && (i.value = T)
                    },
                    src: C,
                    show: e.show,
                    active: r.active,
                    maxZoom: e.maxZoom,
                    minZoom: e.minZoom,
                    rootWidth: r.rootWidth,
                    rootHeight: r.rootHeight,
                    disableZoom: r.disableZoom,
                    doubleScale: e.doubleScale,
                    closeOnClickImage: e.closeOnClickImage,
                    closeOnClickOverlay: e.closeOnClickOverlay,
                    vertical: e.vertical,
                    onScale: l,
                    onClose: u,
                    onLongPress: () => t("longPress", {
                        index: S
                    })
                }, {
                    image: n.image
                }))]
            }),
            g = () => {
                if (e.closeable) return d(Me, {
                    role: "button",
                    name: e.closeIcon,
                    class: [Wn("close-icon", e.closeIconPosition), Fn],
                    onClick: u
                }, null)
            },
            x = () => t("closed"),
            y = (C, S) => {
                var T;
                return (T = o.value) == null ? void 0 : T.swipeTo(C, S)
            };
        return Ve({
            resetScale: () => {
                var C;
                (C = i.value) == null || C.resetScale()
            },
            swipeTo: y
        }), Ge(a), ie([zt, cn], a), ie(() => e.startPosition, C => c(+C)), ie(() => e.show, C => {
            const {
                images: S,
                startPosition: T
            } = e;
            C ? (c(+T), Te(() => {
                a(), y(+T, {
                    immediate: !0
                })
            })) : t("close", {
                index: r.active,
                url: S[r.active]
            })
        }), () => d(qo, $e({
            class: [Wn(), e.className],
            overlayClass: [Wn("overlay"), e.overlayClass],
            onClosed: x,
            "onUpdate:show": s
        }, Fe(e, ly)), {
            default: () => [g(), w(), f(), h()]
        })
    }
});
let yi;
const cy = {
    loop: !0,
    images: [],
    maxZoom: 3,
    minZoom: 1 / 3,
    onScale: void 0,
    onClose: void 0,
    onChange: void 0,
    vertical: !1,
    teleport: "body",
    className: "",
    showIndex: !0,
    closeable: !1,
    closeIcon: "clear",
    transition: void 0,
    beforeClose: void 0,
    doubleScale: !0,
    overlayStyle: void 0,
    overlayClass: void 0,
    startPosition: 0,
    swipeDuration: 300,
    showIndicators: !1,
    closeOnPopstate: !0,
    closeOnClickOverlay: !0,
    closeIconPosition: "top-right"
};

function uy() {
    ({
        instance: yi
    } = Ba({
        setup() {
            const {
                state: e,
                toggle: t
            } = Ra(), n = () => {
                e.images = []
            };
            return () => d(ku, $e(e, {
                onClosed: n,
                "onUpdate:show": t
            }), null)
        }
    }))
}
const fy = (e, t = 0) => {
    if (Pt) return yi || uy(), e = Array.isArray(e) ? {
        images: e,
        startPosition: t
    } : e, yi.open(pe({}, cy, e)), yi
};
me(ku);
const [dy, Un, hy] = ae("list"), vy = {
    error: Boolean,
    offset: ye(300),
    loading: Boolean,
    disabled: Boolean,
    finished: Boolean,
    scroller: Object,
    errorText: String,
    direction: se("down"),
    loadingText: String,
    finishedText: String,
    immediateCheck: te
};
var gy = re({
    name: dy,
    props: vy,
    emits: ["load", "update:error", "update:loading"],
    setup(e, {
        emit: t,
        slots: n
    }) {
        const o = N(e.loading),
            i = N(),
            r = N(),
            a = gg(),
            l = Zi(i),
            s = j(() => e.scroller || l.value),
            u = () => {
                Te(() => {
                    if (o.value || e.finished || e.disabled || e.error || (a == null ? void 0 : a.value) === !1) return;
                    const {
                        direction: m
                    } = e, w = +e.offset, g = Le(s);
                    if (!g.height || ro(i)) return;
                    let x = !1;
                    const y = Le(r);
                    m === "up" ? x = g.top - y.top <= w : x = y.bottom - g.bottom <= w, x && (o.value = !0, t("update:loading", !0), t("load"))
                })
            },
            c = () => {
                if (e.finished) {
                    const m = n.finished ? n.finished() : e.finishedText;
                    if (m) return d("div", {
                        class: Un("finished-text")
                    }, [m])
                }
            },
            f = () => {
                t("update:error", !1), u()
            },
            h = () => {
                if (e.error) {
                    const m = n.error ? n.error() : e.errorText;
                    if (m) return d("div", {
                        role: "button",
                        class: Un("error-text"),
                        tabindex: 0,
                        onClick: f
                    }, [m])
                }
            },
            v = () => {
                if (o.value && !e.finished && !e.disabled) return d("div", {
                    class: Un("loading")
                }, [n.loading ? n.loading() : d(Zt, {
                    class: Un("loading-icon")
                }, {
                    default: () => [e.loadingText || hy("loading")]
                })])
            };
        return ie(() => [e.loading, e.finished, e.error], u), a && ie(a, m => {
            m && u()
        }), ya(() => {
            o.value = e.loading
        }), Ge(() => {
            e.immediateCheck && u()
        }), Ve({
            check: u
        }), it("scroll", u, {
            target: s,
            passive: !0
        }), () => {
            var m;
            const w = (m = n.default) == null ? void 0 : m.call(n),
                g = d("div", {
                    ref: r,
                    class: Un("placeholder")
                }, null);
            return d("div", {
                ref: i,
                role: "feed",
                class: Un(),
                "aria-busy": o.value
            }, [e.direction === "down" ? w : g, v(), c(), h(), e.direction === "up" ? w : g])
        }
    }
});
const J0 = me(gy),
    [my, po] = ae("notice-bar"),
    yy = {
        text: String,
        mode: String,
        color: String,
        delay: ye(1),
        speed: ye(60),
        leftIcon: String,
        wrapable: Boolean,
        background: String,
        scrollable: {
            type: Boolean,
            default: null
        }
    };
var by = re({
    name: my,
    props: yy,
    emits: ["close", "replay"],
    setup(e, {
        emit: t,
        slots: n
    }) {
        let o = 0,
            i = 0,
            r;
        const a = N(),
            l = N(),
            s = Ke({
                show: !0,
                offset: 0,
                duration: 0
            }),
            u = () => {
                if (n["left-icon"]) return n["left-icon"]();
                if (e.leftIcon) return d(Me, {
                    class: po("left-icon"),
                    name: e.leftIcon
                }, null)
            },
            c = () => {
                if (e.mode === "closeable") return "cross";
                if (e.mode === "link") return "arrow"
            },
            f = g => {
                e.mode === "closeable" && (s.show = !1, t("close", g))
            },
            h = () => {
                if (n["right-icon"]) return n["right-icon"]();
                const g = c();
                if (g) return d(Me, {
                    name: g,
                    class: po("right-icon"),
                    onClick: f
                }, null)
            },
            v = () => {
                s.offset = o, s.duration = 0, lt(() => {
                    Dn(() => {
                        s.offset = -i, s.duration = (i + o) / +e.speed, t("replay")
                    })
                })
            },
            m = () => {
                const g = e.scrollable === !1 && !e.wrapable,
                    x = {
                        transform: s.offset ? `translateX(${s.offset}px)` : "",
                        transitionDuration: `${s.duration}s`
                    };
                return d("div", {
                    ref: a,
                    role: "marquee",
                    class: po("wrap")
                }, [d("div", {
                    ref: l,
                    style: x,
                    class: [po("content"), {
                        "van-ellipsis": g
                    }],
                    onTransitionend: v
                }, [n.default ? n.default() : e.text])])
            },
            w = () => {
                const {
                    delay: g,
                    speed: x,
                    scrollable: y
                } = e, C = Re(g) ? +g * 1e3 : 0;
                o = 0, i = 0, s.offset = 0, s.duration = 0, clearTimeout(r), r = setTimeout(() => {
                    if (!a.value || !l.value || y === !1) return;
                    const S = Le(a).width,
                        T = Le(l).width;
                    (y || T > S) && Dn(() => {
                        o = S, i = T, s.offset = -i, s.duration = i / +x
                    })
                }, C)
            };
        return Ji(w), fo(w), it("pageshow", w), Ve({
            reset: w
        }), ie(() => [e.text, e.scrollable], w), () => {
            const {
                color: g,
                wrapable: x,
                background: y
            } = e;
            return Wt(d("div", {
                role: "alert",
                class: po({
                    wrapable: x
                }),
                style: {
                    color: g,
                    background: y
                }
            }, [u(), m(), h()]), [
                [un, s.show]
            ])
        }
    }
});
const Q0 = me(by),
    [py, Po] = ae("key"),
    wy = d("svg", {
        class: Po("collapse-icon"),
        viewBox: "0 0 30 24"
    }, [d("path", {
        d: "M26 13h-2v2h2v-2zm-8-3h2V8h-2v2zm2-4h2V4h-2v2zm2 4h4V4h-2v4h-2v2zm-7 14 3-3h-6l3 3zM6 13H4v2h2v-2zm16 0H8v2h14v-2zm-12-3h2V8h-2v2zM28 0l1 1 1 1v15l-1 2H1l-1-2V2l1-1 1-1zm0 2H2v15h26V2zM6 4v2H4V4zm10 2h2V4h-2v2zM8 9v1H4V8zm8 0v1h-2V8zm-6-5v2H8V4zm4 0v2h-2V4z",
        fill: "currentColor"
    }, null)]),
    xy = d("svg", {
        class: Po("delete-icon"),
        viewBox: "0 0 32 22"
    }, [d("path", {
        d: "M28 0a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H10.4a2 2 0 0 1-1.4-.6L1 13.1c-.6-.5-.9-1.3-.9-2 0-1 .3-1.7.9-2.2L9 .6a2 2 0 0 1 1.4-.6zm0 2H10.4l-8.2 8.3a1 1 0 0 0-.3.7c0 .3.1.5.3.7l8.2 8.4H28a2 2 0 0 0 2-2V4c0-1.1-.9-2-2-2zm-5 4a1 1 0 0 1 .7.3 1 1 0 0 1 0 1.4L20.4 11l3.3 3.3c.2.2.3.5.3.7 0 .3-.1.5-.3.7a1 1 0 0 1-.7.3 1 1 0 0 1-.7-.3L19 12.4l-3.4 3.3a1 1 0 0 1-.6.3 1 1 0 0 1-.7-.3 1 1 0 0 1-.3-.7c0-.2.1-.5.3-.7l3.3-3.3-3.3-3.3A1 1 0 0 1 14 7c0-.3.1-.5.3-.7A1 1 0 0 1 15 6a1 1 0 0 1 .6.3L19 9.6l3.3-3.3A1 1 0 0 1 23 6z",
        fill: "currentColor"
    }, null)]);
var Er = re({
    name: py,
    props: {
        type: String,
        text: oe,
        color: String,
        wider: Boolean,
        large: Boolean,
        loading: Boolean
    },
    emits: ["press"],
    setup(e, {
        emit: t,
        slots: n
    }) {
        const o = N(!1),
            i = pn(),
            r = u => {
                i.start(u), o.value = !0
            },
            a = u => {
                i.move(u), i.direction.value && (o.value = !1)
            },
            l = u => {
                o.value && (n.default || ot(u), o.value = !1, t("press", e.text, e.type))
            },
            s = () => {
                if (e.loading) return d(Zt, {
                    class: Po("loading-icon")
                }, null);
                const u = n.default ? n.default() : e.text;
                switch (e.type) {
                    case "delete":
                        return u || xy;
                    case "extra":
                        return u || wy;
                    default:
                        return u
                }
            };
        return () => d("div", {
            class: Po("wrapper", {
                wider: e.wider
            }),
            onTouchstartPassive: r,
            onTouchmovePassive: a,
            onTouchend: l,
            onTouchcancel: l
        }, [d("div", {
            role: "button",
            tabindex: 0,
            class: Po([e.color, {
                large: e.large,
                active: o.value,
                delete: e.type === "delete"
            }])
        }, [s()])])
    }
});
const [Sy, Qt] = ae("number-keyboard"), Cy = {
    show: Boolean,
    title: String,
    theme: se("default"),
    zIndex: oe,
    teleport: [String, Object],
    maxlength: ye(1 / 0),
    modelValue: se(""),
    transition: te,
    blurOnClose: te,
    showDeleteKey: te,
    randomKeyOrder: Boolean,
    closeButtonText: String,
    deleteButtonText: String,
    closeButtonLoading: Boolean,
    hideOnClickOutside: te,
    safeAreaInsetBottom: te,
    extraKey: {
        type: [String, Array],
        default: ""
    }
};

function Ty(e) {
    for (let t = e.length - 1; t > 0; t--) {
        const n = Math.floor(Math.random() * (t + 1)),
            o = e[t];
        e[t] = e[n], e[n] = o
    }
    return e
}
var _y = re({
    name: Sy,
    inheritAttrs: !1,
    props: Cy,
    emits: ["show", "hide", "blur", "input", "close", "delete", "update:modelValue"],
    setup(e, {
        emit: t,
        slots: n,
        attrs: o
    }) {
        const i = N(),
            r = () => {
                const g = Array(9).fill("").map((x, y) => ({
                    text: y + 1
                }));
                return e.randomKeyOrder && Ty(g), g
            },
            a = () => [...r(), {
                text: e.extraKey,
                type: "extra"
            }, {
                text: 0
            }, {
                text: e.showDeleteKey ? e.deleteButtonText : "",
                type: e.showDeleteKey ? "delete" : ""
            }],
            l = () => {
                const g = r(),
                    {
                        extraKey: x
                    } = e,
                    y = Array.isArray(x) ? x : [x];
                return y.length === 0 ? g.push({
                    text: 0,
                    wider: !0
                }) : y.length === 1 ? g.push({
                    text: 0,
                    wider: !0
                }, {
                    text: y[0],
                    type: "extra"
                }) : y.length === 2 && g.push({
                    text: y[0],
                    type: "extra"
                }, {
                    text: 0
                }, {
                    text: y[1],
                    type: "extra"
                }), g
            },
            s = j(() => e.theme === "custom" ? l() : a()),
            u = () => {
                e.show && t("blur")
            },
            c = () => {
                t("close"), e.blurOnClose && u()
            },
            f = () => t(e.show ? "show" : "hide"),
            h = (g, x) => {
                if (g === "") {
                    x === "extra" && u();
                    return
                }
                const y = e.modelValue;
                x === "delete" ? (t("delete"), t("update:modelValue", y.slice(0, y.length - 1))) : x === "close" ? c() : y.length < +e.maxlength && (t("input", g), t("update:modelValue", y + g))
            },
            v = () => {
                const {
                    title: g,
                    theme: x,
                    closeButtonText: y
                } = e, C = n["title-left"], S = y && x === "default";
                if (g || S || C) return d("div", {
                    class: Qt("header")
                }, [C && d("span", {
                    class: Qt("title-left")
                }, [C()]), g && d("h2", {
                    class: Qt("title")
                }, [g]), S && d("button", {
                    type: "button",
                    class: [Qt("close"), Fn],
                    onClick: c
                }, [y])])
            },
            m = () => s.value.map(g => {
                const x = {};
                return g.type === "delete" && (x.default = n.delete), g.type === "extra" && (x.default = n["extra-key"]), d(Er, {
                    key: g.text,
                    text: g.text,
                    type: g.type,
                    wider: g.wider,
                    color: g.color,
                    onPress: h
                }, x)
            }),
            w = () => {
                if (e.theme === "custom") return d("div", {
                    class: Qt("sidebar")
                }, [e.showDeleteKey && d(Er, {
                    large: !0,
                    text: e.deleteButtonText,
                    type: "delete",
                    onPress: h
                }, {
                    default: n.delete
                }), d(Er, {
                    large: !0,
                    text: e.closeButtonText,
                    type: "close",
                    color: "blue",
                    loading: e.closeButtonLoading,
                    onPress: h
                }, null)])
            };
        return ie(() => e.show, g => {
            e.transition || t(g ? "show" : "hide")
        }), e.hideOnClickOutside && Lc(i, u, {
            eventName: "touchstart"
        }), () => {
            const g = v(),
                x = d(Ta, {
                    name: e.transition ? "van-slide-up" : ""
                }, {
                    default: () => [Wt(d("div", $e({
                        ref: i,
                        style: Oa(e.zIndex),
                        class: Qt({
                            unfit: !e.safeAreaInsetBottom,
                            "with-title": !!g
                        }),
                        onAnimationend: f,
                        onTouchstartPassive: Da
                    }, o), [g, d("div", {
                        class: Qt("body")
                    }, [d("div", {
                        class: Qt("keys")
                    }, [m()]), w()])]), [
                        [un, e.show]
                    ])]
                });
            return e.teleport ? d(ji, {
                to: e.teleport
            }, {
                default: () => [x]
            }) : x
        }
    }
});
const ep = me(_y),
    [Ey, wo] = ae("password-input"),
    ky = {
        info: String,
        mask: te,
        value: se(""),
        gutter: oe,
        length: ye(6),
        focused: Boolean,
        errorInfo: String
    };
var Dy = re({
    name: Ey,
    props: ky,
    emits: ["focus"],
    setup(e, {
        emit: t
    }) {
        const n = i => {
                i.stopPropagation(), t("focus", i)
            },
            o = () => {
                const i = [],
                    {
                        mask: r,
                        value: a,
                        gutter: l,
                        focused: s
                    } = e,
                    u = +e.length;
                for (let c = 0; c < u; c++) {
                    const f = a[c],
                        h = c !== 0 && !l,
                        v = s && c === a.length;
                    let m;
                    c !== 0 && l && (m = {
                        marginLeft: Se(l)
                    }), i.push(d("li", {
                        class: [{
                            [Uc]: h
                        }, wo("item", {
                            focus: v
                        })],
                        style: m
                    }, [r ? d("i", {
                        style: {
                            visibility: f ? "visible" : "hidden"
                        }
                    }, null) : f, v && d("div", {
                        class: wo("cursor")
                    }, null)]))
                }
                return i
            };
        return () => {
            const i = e.errorInfo || e.info;
            return d("div", {
                class: wo()
            }, [d("ul", {
                class: [wo("security"), {
                    [Yc]: !e.gutter
                }],
                onTouchstartPassive: n
            }, [o()]), i && d("div", {
                class: wo(e.errorInfo ? "error-info" : "info")
            }, [i])])
        }
    }
});
const tp = me(Dy);

function _t(e) {
    if (e == null) return window;
    if (e.toString() !== "[object Window]") {
        var t = e.ownerDocument;
        return t && t.defaultView || window
    }
    return e
}

function Na(e) {
    var t = _t(e).Element;
    return e instanceof t || e instanceof Element
}

function xt(e) {
    var t = _t(e).HTMLElement;
    return e instanceof t || e instanceof HTMLElement
}

function Du(e) {
    if (typeof ShadowRoot > "u") return !1;
    var t = _t(e).ShadowRoot;
    return e instanceof t || e instanceof ShadowRoot
}
var lo = Math.round;

function ta() {
    var e = navigator.userAgentData;
    return e != null && e.brands ? e.brands.map(function(t) {
        return t.brand + "/" + t.version
    }).join(" ") : navigator.userAgent
}

function Oy() {
    return !/^((?!chrome|android).)*safari/i.test(ta())
}

function $i(e, t, n) {
    t === void 0 && (t = !1), n === void 0 && (n = !1);
    var o = e.getBoundingClientRect(),
        i = 1,
        r = 1;
    t && xt(e) && (i = e.offsetWidth > 0 && lo(o.width) / e.offsetWidth || 1, r = e.offsetHeight > 0 && lo(o.height) / e.offsetHeight || 1);
    var a = Na(e) ? _t(e) : window,
        l = a.visualViewport,
        s = !Oy() && n,
        u = (o.left + (s && l ? l.offsetLeft : 0)) / i,
        c = (o.top + (s && l ? l.offsetTop : 0)) / r,
        f = o.width / i,
        h = o.height / r;
    return {
        width: f,
        height: h,
        top: c,
        right: u + f,
        bottom: c + h,
        left: u,
        x: u,
        y: c
    }
}

function Ou(e) {
    var t = _t(e),
        n = t.pageXOffset,
        o = t.pageYOffset;
    return {
        scrollLeft: n,
        scrollTop: o
    }
}

function Iy(e) {
    return {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    }
}

function Ay(e) {
    return e === _t(e) || !xt(e) ? Ou(e) : Iy(e)
}

function Yt(e) {
    return e ? (e.nodeName || "").toLowerCase() : null
}

function nr(e) {
    return ((Na(e) ? e.ownerDocument : e.document) || window.document).documentElement
}

function Py(e) {
    return $i(nr(e)).left + Ou(e).scrollLeft
}

function Kt(e) {
    return _t(e).getComputedStyle(e)
}

function Ha(e) {
    var t = Kt(e),
        n = t.overflow,
        o = t.overflowX,
        i = t.overflowY;
    return /auto|scroll|overlay|hidden/.test(n + i + o)
}

function $y(e) {
    var t = e.getBoundingClientRect(),
        n = lo(t.width) / e.offsetWidth || 1,
        o = lo(t.height) / e.offsetHeight || 1;
    return n !== 1 || o !== 1
}

function Ry(e, t, n) {
    n === void 0 && (n = !1);
    var o = xt(t),
        i = xt(t) && $y(t),
        r = nr(t),
        a = $i(e, i, n),
        l = {
            scrollLeft: 0,
            scrollTop: 0
        },
        s = {
            x: 0,
            y: 0
        };
    return (o || !o && !n) && ((Yt(t) !== "body" || Ha(r)) && (l = Ay(t)), xt(t) ? (s = $i(t, !0), s.x += t.clientLeft, s.y += t.clientTop) : r && (s.x = Py(r))), {
        x: a.left + l.scrollLeft - s.x,
        y: a.top + l.scrollTop - s.y,
        width: a.width,
        height: a.height
    }
}

function By(e) {
    var t = $i(e),
        n = e.offsetWidth,
        o = e.offsetHeight;
    return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), {
        x: e.offsetLeft,
        y: e.offsetTop,
        width: n,
        height: o
    }
}

function za(e) {
    return Yt(e) === "html" ? e : e.assignedSlot || e.parentNode || (Du(e) ? e.host : null) || nr(e)
}

function Iu(e) {
    return ["html", "body", "#document"].indexOf(Yt(e)) >= 0 ? e.ownerDocument.body : xt(e) && Ha(e) ? e : Iu(za(e))
}

function bi(e, t) {
    var n;
    t === void 0 && (t = []);
    var o = Iu(e),
        i = o === ((n = e.ownerDocument) == null ? void 0 : n.body),
        r = _t(o),
        a = i ? [r].concat(r.visualViewport || [], Ha(o) ? o : []) : o,
        l = t.concat(a);
    return i ? l : l.concat(bi(za(a)))
}

function My(e) {
    return ["table", "td", "th"].indexOf(Yt(e)) >= 0
}

function vs(e) {
    return !xt(e) || Kt(e).position === "fixed" ? null : e.offsetParent
}

function Fy(e) {
    var t = /firefox/i.test(ta()),
        n = /Trident/i.test(ta());
    if (n && xt(e)) {
        var o = Kt(e);
        if (o.position === "fixed") return null
    }
    var i = za(e);
    for (Du(i) && (i = i.host); xt(i) && ["html", "body"].indexOf(Yt(i)) < 0;) {
        var r = Kt(i);
        if (r.transform !== "none" || r.perspective !== "none" || r.contain === "paint" || ["transform", "perspective"].indexOf(r.willChange) !== -1 || t && r.willChange === "filter" || t && r.filter && r.filter !== "none") return i;
        i = i.parentNode
    }
    return null
}

function Au(e) {
    for (var t = _t(e), n = vs(e); n && My(n) && Kt(n).position === "static";) n = vs(n);
    return n && (Yt(n) === "html" || Yt(n) === "body" && Kt(n).position === "static") ? t : n || Fy(e) || t
}
var Qn = "top",
    Ri = "bottom",
    Lo = "right",
    Pn = "left",
    Pu = "auto",
    Vy = [Qn, Ri, Lo, Pn],
    $u = "start",
    Bi = "end",
    Ly = [].concat(Vy, [Pu]).reduce(function(e, t) {
        return e.concat([t, t + "-" + $u, t + "-" + Bi])
    }, []),
    Ny = "beforeRead",
    Hy = "read",
    zy = "afterRead",
    jy = "beforeMain",
    Wy = "main",
    Uy = "afterMain",
    Yy = "beforeWrite",
    Ky = "write",
    Gy = "afterWrite",
    na = [Ny, Hy, zy, jy, Wy, Uy, Yy, Ky, Gy];

function qy(e) {
    var t = new Map,
        n = new Set,
        o = [];
    e.forEach(function(r) {
        t.set(r.name, r)
    });

    function i(r) {
        n.add(r.name);
        var a = [].concat(r.requires || [], r.requiresIfExists || []);
        a.forEach(function(l) {
            if (!n.has(l)) {
                var s = t.get(l);
                s && i(s)
            }
        }), o.push(r)
    }
    return e.forEach(function(r) {
        n.has(r.name) || i(r)
    }), o
}

function Xy(e) {
    var t = qy(e);
    return na.reduce(function(n, o) {
        return n.concat(t.filter(function(i) {
            return i.phase === o
        }))
    }, [])
}

function Zy(e) {
    var t;
    return function() {
        return t || (t = new Promise(function(n) {
            Promise.resolve().then(function() {
                t = void 0, n(e())
            })
        })), t
    }
}

function en(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) n[o - 1] = arguments[o];
    return [].concat(n).reduce(function(i, r) {
        return i.replace(/%s/, r)
    }, e)
}
var Tn = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s',
    Jy = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available',
    gs = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];

function Qy(e) {
    e.forEach(function(t) {
        [].concat(Object.keys(t), gs).filter(function(n, o, i) {
            return i.indexOf(n) === o
        }).forEach(function(n) {
            switch (n) {
                case "name":
                    typeof t.name != "string" && console.error(en(Tn, String(t.name), '"name"', '"string"', '"' + String(t.name) + '"'));
                    break;
                case "enabled":
                    typeof t.enabled != "boolean" && console.error(en(Tn, t.name, '"enabled"', '"boolean"', '"' + String(t.enabled) + '"'));
                    break;
                case "phase":
                    na.indexOf(t.phase) < 0 && console.error(en(Tn, t.name, '"phase"', "either " + na.join(", "), '"' + String(t.phase) + '"'));
                    break;
                case "fn":
                    typeof t.fn != "function" && console.error(en(Tn, t.name, '"fn"', '"function"', '"' + String(t.fn) + '"'));
                    break;
                case "effect":
                    t.effect != null && typeof t.effect != "function" && console.error(en(Tn, t.name, '"effect"', '"function"', '"' + String(t.fn) + '"'));
                    break;
                case "requires":
                    t.requires != null && !Array.isArray(t.requires) && console.error(en(Tn, t.name, '"requires"', '"array"', '"' + String(t.requires) + '"'));
                    break;
                case "requiresIfExists":
                    Array.isArray(t.requiresIfExists) || console.error(en(Tn, t.name, '"requiresIfExists"', '"array"', '"' + String(t.requiresIfExists) + '"'));
                    break;
                case "options":
                case "data":
                    break;
                default:
                    console.error('PopperJS: an invalid property has been provided to the "' + t.name + '" modifier, valid properties are ' + gs.map(function(o) {
                        return '"' + o + '"'
                    }).join(", ") + '; but "' + n + '" was provided.')
            }
            t.requires && t.requires.forEach(function(o) {
                e.find(function(i) {
                    return i.name === o
                }) == null && console.error(en(Jy, String(t.name), o, o))
            })
        })
    })
}

function eb(e, t) {
    var n = new Set;
    return e.filter(function(o) {
        var i = t(o);
        if (!n.has(i)) return n.add(i), !0
    })
}

function or(e) {
    return e.split("-")[0]
}

function tb(e) {
    var t = e.reduce(function(n, o) {
        var i = n[o.name];
        return n[o.name] = i ? Object.assign({}, i, o, {
            options: Object.assign({}, i.options, o.options),
            data: Object.assign({}, i.data, o.data)
        }) : o, n
    }, {});
    return Object.keys(t).map(function(n) {
        return t[n]
    })
}

function Ru(e) {
    return e.split("-")[1]
}

function nb(e) {
    return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
}

function ob(e) {
    var t = e.reference,
        n = e.element,
        o = e.placement,
        i = o ? or(o) : null,
        r = o ? Ru(o) : null,
        a = t.x + t.width / 2 - n.width / 2,
        l = t.y + t.height / 2 - n.height / 2,
        s;
    switch (i) {
        case Qn:
            s = {
                x: a,
                y: t.y - n.height
            };
            break;
        case Ri:
            s = {
                x: a,
                y: t.y + t.height
            };
            break;
        case Lo:
            s = {
                x: t.x + t.width,
                y: l
            };
            break;
        case Pn:
            s = {
                x: t.x - n.width,
                y: l
            };
            break;
        default:
            s = {
                x: t.x,
                y: t.y
            }
    }
    var u = i ? nb(i) : null;
    if (u != null) {
        var c = u === "y" ? "height" : "width";
        switch (r) {
            case $u:
                s[u] = s[u] - (t[c] / 2 - n[c] / 2);
                break;
            case Bi:
                s[u] = s[u] + (t[c] / 2 - n[c] / 2);
                break
        }
    }
    return s
}
var ms = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.",
    ib = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.",
    ys = {
        placement: "bottom",
        modifiers: [],
        strategy: "absolute"
    };

function bs() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return !t.some(function(o) {
        return !(o && typeof o.getBoundingClientRect == "function")
    })
}

function rb(e) {
    e === void 0 && (e = {});
    var t = e,
        n = t.defaultModifiers,
        o = n === void 0 ? [] : n,
        i = t.defaultOptions,
        r = i === void 0 ? ys : i;
    return function(l, s, u) {
        u === void 0 && (u = r);
        var c = {
                placement: "bottom",
                orderedModifiers: [],
                options: Object.assign({}, ys, r),
                modifiersData: {},
                elements: {
                    reference: l,
                    popper: s
                },
                attributes: {},
                styles: {}
            },
            f = [],
            h = !1,
            v = {
                state: c,
                setOptions: function(x) {
                    var y = typeof x == "function" ? x(c.options) : x;
                    w(), c.options = Object.assign({}, r, c.options, y), c.scrollParents = {
                        reference: Na(l) ? bi(l) : l.contextElement ? bi(l.contextElement) : [],
                        popper: bi(s)
                    };
                    var C = Xy(tb([].concat(o, c.options.modifiers)));
                    c.orderedModifiers = C.filter(function(p) {
                        return p.enabled
                    }); {
                        var S = eb([].concat(C, c.options.modifiers), function(p) {
                            var _ = p.name;
                            return _
                        });
                        if (Qy(S), or(c.options.placement) === Pu) {
                            var T = c.orderedModifiers.find(function(p) {
                                var _ = p.name;
                                return _ === "flip"
                            });
                            T || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "))
                        }
                        var O = Kt(s),
                            z = O.marginTop,
                            P = O.marginRight,
                            $ = O.marginBottom,
                            D = O.marginLeft;
                        [z, P, $, D].some(function(p) {
                            return parseFloat(p)
                        }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "))
                    }
                    return m(), v.update()
                },
                forceUpdate: function() {
                    if (!h) {
                        var x = c.elements,
                            y = x.reference,
                            C = x.popper;
                        if (!bs(y, C)) {
                            console.error(ms);
                            return
                        }
                        c.rects = {
                            reference: Ry(y, Au(C), c.options.strategy === "fixed"),
                            popper: By(C)
                        }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(p) {
                            return c.modifiersData[p.name] = Object.assign({}, p.data)
                        });
                        for (var S = 0, T = 0; T < c.orderedModifiers.length; T++) {
                            if (S += 1, S > 100) {
                                console.error(ib);
                                break
                            }
                            if (c.reset === !0) {
                                c.reset = !1, T = -1;
                                continue
                            }
                            var O = c.orderedModifiers[T],
                                z = O.fn,
                                P = O.options,
                                $ = P === void 0 ? {} : P,
                                D = O.name;
                            typeof z == "function" && (c = z({
                                state: c,
                                options: $,
                                name: D,
                                instance: v
                            }) || c)
                        }
                    }
                },
                update: Zy(function() {
                    return new Promise(function(g) {
                        v.forceUpdate(), g(c)
                    })
                }),
                destroy: function() {
                    w(), h = !0
                }
            };
        if (!bs(l, s)) return console.error(ms), v;
        v.setOptions(u).then(function(g) {
            !h && u.onFirstUpdate && u.onFirstUpdate(g)
        });

        function m() {
            c.orderedModifiers.forEach(function(g) {
                var x = g.name,
                    y = g.options,
                    C = y === void 0 ? {} : y,
                    S = g.effect;
                if (typeof S == "function") {
                    var T = S({
                            state: c,
                            name: x,
                            instance: v,
                            options: C
                        }),
                        O = function() {};
                    f.push(T || O)
                }
            })
        }

        function w() {
            f.forEach(function(g) {
                return g()
            }), f = []
        }
        return v
    }
}
var di = {
    passive: !0
};

function ab(e) {
    var t = e.state,
        n = e.instance,
        o = e.options,
        i = o.scroll,
        r = i === void 0 ? !0 : i,
        a = o.resize,
        l = a === void 0 ? !0 : a,
        s = _t(t.elements.popper),
        u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
    return r && u.forEach(function(c) {
            c.addEventListener("scroll", n.update, di)
        }), l && s.addEventListener("resize", n.update, di),
        function() {
            r && u.forEach(function(c) {
                c.removeEventListener("scroll", n.update, di)
            }), l && s.removeEventListener("resize", n.update, di)
        }
}
var lb = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function() {},
    effect: ab,
    data: {}
};

function sb(e) {
    var t = e.state,
        n = e.name;
    t.modifiersData[n] = ob({
        reference: t.rects.reference,
        element: t.rects.popper,
        placement: t.placement
    })
}
var cb = {
        name: "popperOffsets",
        enabled: !0,
        phase: "read",
        fn: sb,
        data: {}
    },
    ub = {
        top: "auto",
        right: "auto",
        bottom: "auto",
        left: "auto"
    };

function fb(e) {
    var t = e.x,
        n = e.y,
        o = window,
        i = o.devicePixelRatio || 1;
    return {
        x: lo(t * i) / i || 0,
        y: lo(n * i) / i || 0
    }
}

function ps(e) {
    var t, n = e.popper,
        o = e.popperRect,
        i = e.placement,
        r = e.variation,
        a = e.offsets,
        l = e.position,
        s = e.gpuAcceleration,
        u = e.adaptive,
        c = e.roundOffsets,
        f = e.isFixed,
        h = a.x,
        v = h === void 0 ? 0 : h,
        m = a.y,
        w = m === void 0 ? 0 : m,
        g = typeof c == "function" ? c({
            x: v,
            y: w
        }) : {
            x: v,
            y: w
        };
    v = g.x, w = g.y;
    var x = a.hasOwnProperty("x"),
        y = a.hasOwnProperty("y"),
        C = Pn,
        S = Qn,
        T = window;
    if (u) {
        var O = Au(n),
            z = "clientHeight",
            P = "clientWidth";
        if (O === _t(n) && (O = nr(n), Kt(O).position !== "static" && l === "absolute" && (z = "scrollHeight", P = "scrollWidth")), O = O, i === Qn || (i === Pn || i === Lo) && r === Bi) {
            S = Ri;
            var $ = f && O === T && T.visualViewport ? T.visualViewport.height : O[z];
            w -= $ - o.height, w *= s ? 1 : -1
        }
        if (i === Pn || (i === Qn || i === Ri) && r === Bi) {
            C = Lo;
            var D = f && O === T && T.visualViewport ? T.visualViewport.width : O[P];
            v -= D - o.width, v *= s ? 1 : -1
        }
    }
    var p = Object.assign({
            position: l
        }, u && ub),
        _ = c === !0 ? fb({
            x: v,
            y: w
        }) : {
            x: v,
            y: w
        };
    if (v = _.x, w = _.y, s) {
        var A;
        return Object.assign({}, p, (A = {}, A[S] = y ? "0" : "", A[C] = x ? "0" : "", A.transform = (T.devicePixelRatio || 1) <= 1 ? "translate(" + v + "px, " + w + "px)" : "translate3d(" + v + "px, " + w + "px, 0)", A))
    }
    return Object.assign({}, p, (t = {}, t[S] = y ? w + "px" : "", t[C] = x ? v + "px" : "", t.transform = "", t))
}

function db(e) {
    var t = e.state,
        n = e.options,
        o = n.gpuAcceleration,
        i = o === void 0 ? !0 : o,
        r = n.adaptive,
        a = r === void 0 ? !0 : r,
        l = n.roundOffsets,
        s = l === void 0 ? !0 : l; {
        var u = Kt(t.elements.popper).transitionProperty || "";
        a && ["transform", "top", "right", "bottom", "left"].some(function(f) {
            return u.indexOf(f) >= 0
        }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "))
    }
    var c = {
        placement: or(t.placement),
        variation: Ru(t.placement),
        popper: t.elements.popper,
        popperRect: t.rects.popper,
        gpuAcceleration: i,
        isFixed: t.options.strategy === "fixed"
    };
    t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, ps(Object.assign({}, c, {
        offsets: t.modifiersData.popperOffsets,
        position: t.options.strategy,
        adaptive: a,
        roundOffsets: s
    })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, ps(Object.assign({}, c, {
        offsets: t.modifiersData.arrow,
        position: "absolute",
        adaptive: !1,
        roundOffsets: s
    })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
        "data-popper-placement": t.placement
    })
}
var hb = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: db,
    data: {}
};

function vb(e) {
    var t = e.state;
    Object.keys(t.elements).forEach(function(n) {
        var o = t.styles[n] || {},
            i = t.attributes[n] || {},
            r = t.elements[n];
        !xt(r) || !Yt(r) || (Object.assign(r.style, o), Object.keys(i).forEach(function(a) {
            var l = i[a];
            l === !1 ? r.removeAttribute(a) : r.setAttribute(a, l === !0 ? "" : l)
        }))
    })
}

function gb(e) {
    var t = e.state,
        n = {
            popper: {
                position: t.options.strategy,
                left: "0",
                top: "0",
                margin: "0"
            },
            arrow: {
                position: "absolute"
            },
            reference: {}
        };
    return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
        function() {
            Object.keys(t.elements).forEach(function(o) {
                var i = t.elements[o],
                    r = t.attributes[o] || {},
                    a = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : n[o]),
                    l = a.reduce(function(s, u) {
                        return s[u] = "", s
                    }, {});
                !xt(i) || !Yt(i) || (Object.assign(i.style, l), Object.keys(r).forEach(function(s) {
                    i.removeAttribute(s)
                }))
            })
        }
}
var mb = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: vb,
        effect: gb,
        requires: ["computeStyles"]
    },
    yb = [lb, cb, hb, mb],
    bb = rb({
        defaultModifiers: yb
    });

function pb(e, t, n) {
    var o = or(e),
        i = [Pn, Qn].indexOf(o) >= 0 ? -1 : 1,
        r = typeof n == "function" ? n(Object.assign({}, t, {
            placement: e
        })) : n,
        a = r[0],
        l = r[1];
    return a = a || 0, l = (l || 0) * i, [Pn, Lo].indexOf(o) >= 0 ? {
        x: l,
        y: a
    } : {
        x: a,
        y: l
    }
}

function wb(e) {
    var t = e.state,
        n = e.options,
        o = e.name,
        i = n.offset,
        r = i === void 0 ? [0, 0] : i,
        a = Ly.reduce(function(c, f) {
            return c[f] = pb(f, t.rects, r), c
        }, {}),
        l = a[t.placement],
        s = l.x,
        u = l.y;
    t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += s, t.modifiersData.popperOffsets.y += u), t.modifiersData[o] = a
}
var xb = {
    name: "offset",
    enabled: !0,
    phase: "main",
    requires: ["popperOffsets"],
    fn: wb
};
const [Sb, _n] = ae("popover"), Cb = ["overlay", "duration", "teleport", "overlayStyle", "overlayClass", "closeOnClickOverlay"], Tb = {
    show: Boolean,
    theme: se("light"),
    overlay: Boolean,
    actions: dn(),
    actionsDirection: se("vertical"),
    trigger: se("click"),
    duration: oe,
    showArrow: te,
    placement: se("bottom"),
    iconPrefix: String,
    overlayClass: ze,
    overlayStyle: Object,
    closeOnClickAction: te,
    closeOnClickOverlay: te,
    closeOnClickOutside: te,
    offset: {
        type: Array,
        default: () => [0, 8]
    },
    teleport: {
        type: [String, Object],
        default: "body"
    }
};
var _b = re({
    name: Sb,
    props: Tb,
    emits: ["select", "touchstart", "update:show"],
    setup(e, {
        emit: t,
        slots: n,
        attrs: o
    }) {
        let i;
        const r = N(),
            a = N(),
            l = N(),
            s = eg(() => e.show, y => t("update:show", y)),
            u = () => ({
                placement: e.placement,
                modifiers: [{
                    name: "computeStyles",
                    options: {
                        adaptive: !1,
                        gpuAcceleration: !1
                    }
                }, pe({}, xb, {
                    options: {
                        offset: e.offset
                    }
                })]
            }),
            c = () => a.value && l.value ? bb(a.value, l.value.popupRef.value, u()) : null,
            f = () => {
                Te(() => {
                    s.value && (i ? i.setOptions(u()) : (i = c(), Pt && (window.addEventListener("animationend", f), window.addEventListener("transitionend", f))))
                })
            },
            h = y => {
                s.value = y
            },
            v = () => {
                e.trigger === "click" && (s.value = !s.value)
            },
            m = (y, C) => {
                y.disabled || (t("select", y, C), e.closeOnClickAction && (s.value = !1))
            },
            w = () => {
                s.value && e.closeOnClickOutside && (!e.overlay || e.closeOnClickOverlay) && (s.value = !1)
            },
            g = (y, C) => n.action ? n.action({
                action: y,
                index: C
            }) : [y.icon && d(Me, {
                name: y.icon,
                classPrefix: e.iconPrefix,
                class: _n("action-icon")
            }, null), d("div", {
                class: [_n("action-text"), {
                    [Xh]: e.actionsDirection === "vertical"
                }]
            }, [y.text])],
            x = (y, C) => {
                const {
                    icon: S,
                    color: T,
                    disabled: O,
                    className: z
                } = y;
                return d("div", {
                    role: "menuitem",
                    class: [_n("action", {
                        disabled: O,
                        "with-icon": S
                    }), {
                        [qh]: e.actionsDirection === "horizontal"
                    }, z],
                    style: {
                        color: T
                    },
                    tabindex: O ? void 0 : 0,
                    "aria-disabled": O || void 0,
                    onClick: () => m(y, C)
                }, [g(y, C)])
            };
        return Ge(() => {
            f(), Ui(() => {
                var y;
                r.value = (y = l.value) == null ? void 0 : y.popupRef.value
            })
        }), Tt(() => {
            i && (Pt && (window.removeEventListener("animationend", f), window.removeEventListener("transitionend", f)), i.destroy(), i = null)
        }), ie(() => [s.value, e.offset, e.placement], f), Lc([a, r], w, {
            eventName: "touchstart"
        }), () => {
            var y;
            return d(Je, null, [d("span", {
                ref: a,
                class: _n("wrapper"),
                onClick: v
            }, [(y = n.reference) == null ? void 0 : y.call(n)]), d(qo, $e({
                ref: l,
                show: s.value,
                class: _n([e.theme]),
                position: "",
                transition: "van-popover-zoom",
                lockScroll: !1,
                "onUpdate:show": h
            }, o, Gr(), Fe(e, Cb)), {
                default: () => [e.showArrow && d("div", {
                    class: _n("arrow")
                }, null), d("div", {
                    role: "menu",
                    class: _n("content", e.actionsDirection)
                }, [n.default ? n.default() : e.actions.map(x)])]
            })])
        }
    }
});
const np = me(_b),
    [Eb, kr] = ae("progress"),
    kb = {
        color: String,
        inactive: Boolean,
        pivotText: String,
        textColor: String,
        showPivot: te,
        pivotColor: String,
        trackColor: String,
        strokeWidth: oe,
        percentage: {
            type: oe,
            default: 0,
            validator: e => +e >= 0 && +e <= 100
        }
    };
var Db = re({
    name: Eb,
    props: kb,
    setup(e) {
        const t = j(() => e.inactive ? void 0 : e.color),
            n = () => {
                const {
                    textColor: o,
                    pivotText: i,
                    pivotColor: r,
                    percentage: a
                } = e, l = i ?? `${a}%`;
                if (e.showPivot && l) {
                    const s = {
                        color: o,
                        left: `${+a}%`,
                        transform: `translate(-${+a}%,-50%)`,
                        background: r || t.value
                    };
                    return d("span", {
                        style: s,
                        class: kr("pivot", {
                            inactive: e.inactive
                        })
                    }, [l])
                }
            };
        return () => {
            const {
                trackColor: o,
                percentage: i,
                strokeWidth: r
            } = e, a = {
                background: o,
                height: Se(r)
            }, l = {
                width: `${i}%`,
                background: t.value
            };
            return d("div", {
                class: kr(),
                style: a
            }, [d("span", {
                class: kr("portion", {
                    inactive: e.inactive
                }),
                style: l
            }, null), n()])
        }
    }
});
const op = me(Db),
    [Ob, xo, Ib] = ae("pull-refresh"),
    Bu = 50,
    Ab = ["pulling", "loosing", "success"],
    Pb = {
        disabled: Boolean,
        modelValue: Boolean,
        headHeight: ye(Bu),
        successText: String,
        pullingText: String,
        loosingText: String,
        loadingText: String,
        pullDistance: oe,
        successDuration: ye(500),
        animationDuration: ye(300)
    };
var $b = re({
    name: Ob,
    props: Pb,
    emits: ["change", "refresh", "update:modelValue"],
    setup(e, {
        emit: t,
        slots: n
    }) {
        let o;
        const i = N(),
            r = N(),
            a = Zi(i),
            l = Ke({
                status: "normal",
                distance: 0,
                duration: 0
            }),
            s = pn(),
            u = () => {
                if (e.headHeight !== Bu) return {
                    height: `${e.headHeight}px`
                }
            },
            c = () => l.status !== "loading" && l.status !== "success" && !e.disabled,
            f = S => {
                const T = +(e.pullDistance || e.headHeight);
                return S > T && (S < T * 2 ? S = T + (S - T) / 2 : S = T * 1.5 + (S - T * 2) / 4), Math.round(S)
            },
            h = (S, T) => {
                const O = +(e.pullDistance || e.headHeight);
                l.distance = S, T ? l.status = "loading" : S === 0 ? l.status = "normal" : S < O ? l.status = "pulling" : l.status = "loosing", t("change", {
                    status: l.status,
                    distance: S
                })
            },
            v = () => {
                const {
                    status: S
                } = l;
                return S === "normal" ? "" : e[`${S}Text`] || Ib(S)
            },
            m = () => {
                const {
                    status: S,
                    distance: T
                } = l;
                if (n[S]) return n[S]({
                    distance: T
                });
                const O = [];
                return Ab.includes(S) && O.push(d("div", {
                    class: xo("text")
                }, [v()])), S === "loading" && O.push(d(Zt, {
                    class: xo("loading")
                }, {
                    default: v
                })), O
            },
            w = () => {
                l.status = "success", setTimeout(() => {
                    h(0)
                }, +e.successDuration)
            },
            g = S => {
                o = Ko(a.value) === 0, o && (l.duration = 0, s.start(S))
            },
            x = S => {
                c() && g(S)
            },
            y = S => {
                if (c()) {
                    o || g(S);
                    const {
                        deltaY: T
                    } = s;
                    s.move(S), o && T.value >= 0 && s.isVertical() && (ot(S), h(f(T.value)))
                }
            },
            C = () => {
                o && s.deltaY.value && c() && (l.duration = +e.animationDuration, l.status === "loosing" ? (h(+e.headHeight, !0), t("update:modelValue", !0), Te(() => t("refresh"))) : h(0))
            };
        return ie(() => e.modelValue, S => {
            l.duration = +e.animationDuration, S ? h(+e.headHeight, !0) : n.success || e.successText ? w() : h(0, !1)
        }), it("touchmove", y, {
            target: r
        }), () => {
            var S;
            const T = {
                transitionDuration: `${l.duration}ms`,
                transform: l.distance ? `translate3d(0,${l.distance}px, 0)` : ""
            };
            return d("div", {
                ref: i,
                class: xo()
            }, [d("div", {
                ref: r,
                class: xo("track"),
                style: T,
                onTouchstartPassive: x,
                onTouchend: C,
                onTouchcancel: C
            }, [d("div", {
                class: xo("head"),
                style: u()
            }, [m()]), (S = n.default) == null ? void 0 : S.call(n)])])
        }
    }
});
const ip = me($b),
    [Rb, Bb] = ae("skeleton-title"),
    Mb = {
        round: Boolean,
        titleWidth: oe
    };
var Fb = re({
    name: Rb,
    props: Mb,
    setup(e) {
        return () => d("h3", {
            class: Bb([{
                round: e.round
            }]),
            style: {
                width: Se(e.titleWidth)
            }
        }, null)
    }
});
const Vb = me(Fb);
var Lb = Vb;
const [Nb, Hb] = ae("skeleton-avatar"), zb = {
    avatarSize: oe,
    avatarShape: se("round")
};
var jb = re({
    name: Nb,
    props: zb,
    setup(e) {
        return () => d("div", {
            class: Hb([e.avatarShape]),
            style: bn(e.avatarSize)
        }, null)
    }
});
const Wb = me(jb);
var Ub = Wb;
const ja = "100%",
    Yb = {
        round: Boolean,
        rowWidth: {
            type: oe,
            default: ja
        }
    },
    [Kb, Gb] = ae("skeleton-paragraph");
var qb = re({
    name: Kb,
    props: Yb,
    setup(e) {
        return () => d("div", {
            class: Gb([{
                round: e.round
            }]),
            style: {
                width: e.rowWidth
            }
        }, null)
    }
});
const Xb = me(qb);
var Zb = Xb;
const [Jb, ws] = ae("skeleton"), Qb = "60%", e0 = {
    row: ye(0),
    round: Boolean,
    title: Boolean,
    titleWidth: oe,
    avatar: Boolean,
    avatarSize: oe,
    avatarShape: se("round"),
    loading: te,
    animate: te,
    rowWidth: {
        type: [Number, String, Array],
        default: ja
    }
};
var t0 = re({
    name: Jb,
    inheritAttrs: !1,
    props: e0,
    setup(e, {
        slots: t,
        attrs: n
    }) {
        const o = () => {
                if (e.avatar) return d(Ub, {
                    avatarShape: e.avatarShape,
                    avatarSize: e.avatarSize
                }, null)
            },
            i = () => {
                if (e.title) return d(Lb, {
                    round: e.round,
                    titleWidth: e.titleWidth
                }, null)
            },
            r = s => {
                const {
                    rowWidth: u
                } = e;
                return u === ja && s === +e.row - 1 ? Qb : Array.isArray(u) ? u[s] : u
            },
            a = () => Array(+e.row).fill("").map((s, u) => d(Zb, {
                key: u,
                round: e.round,
                rowWidth: Se(r(u))
            }, null)),
            l = () => t.template ? t.template() : d(Je, null, [o(), d("div", {
                class: ws("content")
            }, [i(), a()])]);
        return () => {
            var s;
            return e.loading ? d("div", $e({
                class: ws({
                    animate: e.animate,
                    round: e.round
                })
            }, n), [l()]) : (s = t.default) == null ? void 0 : s.call(t)
        }
    }
});
const rp = me(t0),
    [n0, xs] = ae("skeleton-image"),
    o0 = {
        imageSize: oe,
        imageShape: se("square")
    };
var i0 = re({
    name: n0,
    props: o0,
    setup(e) {
        return () => d("div", {
            class: xs([e.imageShape]),
            style: bn(e.imageSize)
        }, [d(Me, {
            name: "photo",
            class: xs("icon")
        }, null)])
    }
});
const ap = me(i0),
    [r0, So] = ae("slider"),
    a0 = {
        min: ye(0),
        max: ye(100),
        step: ye(1),
        range: Boolean,
        reverse: Boolean,
        disabled: Boolean,
        readonly: Boolean,
        vertical: Boolean,
        barHeight: oe,
        buttonSize: oe,
        activeColor: String,
        inactiveColor: String,
        modelValue: {
            type: [Number, Array],
            default: 0
        }
    };
var l0 = re({
    name: r0,
    props: a0,
    emits: ["change", "dragEnd", "dragStart", "update:modelValue"],
    setup(e, {
        emit: t,
        slots: n
    }) {
        let o, i, r;
        const a = N(),
            l = [N(), N()],
            s = N(),
            u = pn(),
            c = j(() => Number(e.max) - Number(e.min)),
            f = j(() => {
                const p = e.vertical ? "width" : "height";
                return {
                    background: e.inactiveColor,
                    [p]: Se(e.barHeight)
                }
            }),
            h = p => e.range && Array.isArray(p),
            v = () => {
                const {
                    modelValue: p,
                    min: _
                } = e;
                return h(p) ? `${(p[1]-p[0])*100/c.value}%` : `${(p-Number(_))*100/c.value}%`
            },
            m = () => {
                const {
                    modelValue: p,
                    min: _
                } = e;
                return h(p) ? `${(p[0]-Number(_))*100/c.value}%` : "0%"
            },
            w = j(() => {
                const _ = {
                    [e.vertical ? "height" : "width"]: v(),
                    background: e.activeColor
                };
                s.value && (_.transition = "none");
                const A = () => e.vertical ? e.reverse ? "bottom" : "top" : e.reverse ? "right" : "left";
                return _[A()] = m(), _
            }),
            g = p => {
                const _ = +e.min,
                    A = +e.max,
                    X = +e.step;
                p = qe(p, _, A);
                const le = Math.round((p - _) / X) * X;
                return Nh(_, le)
            },
            x = () => {
                const p = e.modelValue;
                h(p) ? r = p.map(g) : r = g(p)
            },
            y = p => {
                var _, A;
                const X = (_ = p[0]) != null ? _ : Number(e.min),
                    le = (A = p[1]) != null ? A : Number(e.max);
                return X > le ? [le, X] : [X, le]
            },
            C = (p, _) => {
                h(p) ? p = y(p).map(g) : p = g(p), sn(p, e.modelValue) || t("update:modelValue", p), _ && !sn(p, r) && t("change", p)
            },
            S = p => {
                if (p.stopPropagation(), e.disabled || e.readonly) return;
                x();
                const {
                    min: _,
                    reverse: A,
                    vertical: X,
                    modelValue: le
                } = e, L = Le(a), G = () => X ? A ? L.bottom - p.clientY : p.clientY - L.top : A ? L.right - p.clientX : p.clientX - L.left, Q = X ? L.height : L.width, be = Number(_) + G() / Q * c.value;
                if (h(le)) {
                    const [ke, Z] = le, R = (ke + Z) / 2;
                    be <= R ? C([be, Z], !0) : C([ke, be], !0)
                } else C(be, !0)
            },
            T = p => {
                e.disabled || e.readonly || (u.start(p), i = e.modelValue, x(), s.value = "start")
            },
            O = p => {
                if (e.disabled || e.readonly) return;
                s.value === "start" && t("dragStart", p), ot(p, !0), u.move(p), s.value = "dragging";
                const _ = Le(a),
                    A = e.vertical ? u.deltaY.value : u.deltaX.value,
                    X = e.vertical ? _.height : _.width;
                let le = A / X * c.value;
                if (e.reverse && (le = -le), h(r)) {
                    const L = e.reverse ? 1 - o : o;
                    i[L] = r[L] + le
                } else i = r + le;
                C(i)
            },
            z = p => {
                e.disabled || e.readonly || (s.value === "dragging" && (C(i, !0), t("dragEnd", p)), s.value = "")
            },
            P = p => typeof p == "number" ? So("button-wrapper", ["left", "right"][p]) : So("button-wrapper", e.reverse ? "left" : "right"),
            $ = (p, _) => {
                const A = s.value === "dragging";
                if (typeof _ == "number") {
                    const X = n[_ === 0 ? "left-button" : "right-button"];
                    let le;
                    if (A && Array.isArray(i) && (le = i[0] > i[1] ? o ^ 1 : o), X) return X({
                        value: p,
                        dragging: A,
                        dragIndex: le
                    })
                }
                return n.button ? n.button({
                    value: p,
                    dragging: A
                }) : d("div", {
                    class: So("button"),
                    style: bn(e.buttonSize)
                }, null)
            },
            D = p => {
                const _ = typeof p == "number" ? e.modelValue[p] : e.modelValue;
                return d("div", {
                    ref: l[p ?? 0],
                    role: "slider",
                    class: P(p),
                    tabindex: e.disabled ? void 0 : 0,
                    "aria-valuemin": e.min,
                    "aria-valuenow": _,
                    "aria-valuemax": e.max,
                    "aria-disabled": e.disabled || void 0,
                    "aria-readonly": e.readonly || void 0,
                    "aria-orientation": e.vertical ? "vertical" : "horizontal",
                    onTouchstartPassive: A => {
                        typeof p == "number" && (o = p), T(A)
                    },
                    onTouchend: z,
                    onTouchcancel: z,
                    onClick: Da
                }, [$(_, p)])
            };
        return C(e.modelValue), Yo(() => e.modelValue), l.forEach(p => {
            it("touchmove", O, {
                target: p
            })
        }), () => d("div", {
            ref: a,
            style: f.value,
            class: So({
                vertical: e.vertical,
                disabled: e.disabled
            }),
            onClick: S
        }, [d("div", {
            class: So("bar"),
            style: w.value
        }, [e.range ? [D(0), D(1)] : D()])])
    }
});
const lp = me(l0),
    [s0, Ne, c0] = ae("uploader");

function Ss(e, t) {
    return new Promise(n => {
        if (t === "file") {
            n();
            return
        }
        const o = new FileReader;
        o.onload = i => {
            n(i.target.result)
        }, t === "dataUrl" ? o.readAsDataURL(e) : t === "text" && o.readAsText(e)
    })
}

function Mu(e, t) {
    return Ii(e).some(n => n.file ? io(t) ? t(n.file) : n.file.size > +t : !1)
}

function u0(e, t) {
    const n = [],
        o = [];
    return e.forEach(i => {
        Mu(i, t) ? o.push(i) : n.push(i)
    }), {
        valid: n,
        invalid: o
    }
}
const f0 = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg|avif)/i,
    d0 = e => f0.test(e);

function Fu(e) {
    return e.isImage ? !0 : e.file && e.file.type ? e.file.type.indexOf("image") === 0 : e.url ? d0(e.url) : typeof e.content == "string" ? e.content.indexOf("data:image") === 0 : !1
}
var h0 = re({
    props: {
        name: oe,
        item: nt(Object),
        index: Number,
        imageFit: String,
        lazyLoad: Boolean,
        deletable: Boolean,
        reupload: Boolean,
        previewSize: [Number, String, Array],
        beforeDelete: Function
    },
    emits: ["delete", "preview", "reupload"],
    setup(e, {
        emit: t,
        slots: n
    }) {
        const o = () => {
                const {
                    status: c,
                    message: f
                } = e.item;
                if (c === "uploading" || c === "failed") {
                    const h = c === "failed" ? d(Me, {
                            name: "close",
                            class: Ne("mask-icon")
                        }, null) : d(Zt, {
                            class: Ne("loading")
                        }, null),
                        v = Re(f) && f !== "";
                    return d("div", {
                        class: Ne("mask")
                    }, [h, v && d("div", {
                        class: Ne("mask-message")
                    }, [f])])
                }
            },
            i = c => {
                const {
                    name: f,
                    item: h,
                    index: v,
                    beforeDelete: m
                } = e;
                c.stopPropagation(), Go(m, {
                    args: [h, {
                        name: f,
                        index: v
                    }],
                    done: () => t("delete")
                })
            },
            r = () => t("preview"),
            a = () => t("reupload"),
            l = () => {
                if (e.deletable && e.item.status !== "uploading") {
                    const c = n["preview-delete"];
                    return d("div", {
                        role: "button",
                        class: Ne("preview-delete", {
                            shadow: !c
                        }),
                        tabindex: 0,
                        "aria-label": c0("delete"),
                        onClick: i
                    }, [c ? c() : d(Me, {
                        name: "cross",
                        class: Ne("preview-delete-icon")
                    }, null)])
                }
            },
            s = () => {
                if (n["preview-cover"]) {
                    const {
                        index: c,
                        item: f
                    } = e;
                    return d("div", {
                        class: Ne("preview-cover")
                    }, [n["preview-cover"](pe({
                        index: c
                    }, f))])
                }
            },
            u = () => {
                const {
                    item: c,
                    lazyLoad: f,
                    imageFit: h,
                    previewSize: v,
                    reupload: m
                } = e;
                return Fu(c) ? d(_u, {
                    fit: h,
                    src: c.objectUrl || c.content || c.url,
                    class: Ne("preview-image"),
                    width: Array.isArray(v) ? v[0] : v,
                    height: Array.isArray(v) ? v[1] : v,
                    lazyLoad: f,
                    onClick: m ? a : r
                }, {
                    default: s
                }) : d("div", {
                    class: Ne("file"),
                    style: bn(e.previewSize)
                }, [d(Me, {
                    class: Ne("file-icon"),
                    name: "description"
                }, null), d("div", {
                    class: [Ne("file-name"), "van-ellipsis"]
                }, [c.file ? c.file.name : c.url]), s()])
            };
        return () => d("div", {
            class: Ne("preview")
        }, [u(), o(), l()])
    }
});
const v0 = {
    name: ye(""),
    accept: se("image/*"),
    capture: String,
    multiple: Boolean,
    disabled: Boolean,
    readonly: Boolean,
    lazyLoad: Boolean,
    maxCount: ye(1 / 0),
    imageFit: se("cover"),
    resultType: se("dataUrl"),
    uploadIcon: se("photograph"),
    uploadText: String,
    deletable: te,
    reupload: Boolean,
    afterRead: Function,
    showUpload: te,
    modelValue: dn(),
    beforeRead: Function,
    beforeDelete: Function,
    previewSize: [Number, String, Array],
    previewImage: te,
    previewOptions: Object,
    previewFullImage: te,
    maxSize: {
        type: [Number, String, Function],
        default: 1 / 0
    }
};
var g0 = re({
    name: s0,
    props: v0,
    emits: ["delete", "oversize", "clickUpload", "closePreview", "clickPreview", "clickReupload", "update:modelValue"],
    setup(e, {
        emit: t,
        slots: n
    }) {
        const o = N(),
            i = [],
            r = N(-1),
            a = N(!1),
            l = (P = e.modelValue.length) => ({
                name: e.name,
                index: P
            }),
            s = () => {
                o.value && (o.value.value = "")
            },
            u = P => {
                if (s(), Mu(P, e.maxSize))
                    if (Array.isArray(P)) {
                        const $ = u0(P, e.maxSize);
                        if (P = $.valid, t("oversize", $.invalid, l()), !P.length) return
                    } else {
                        t("oversize", P, l());
                        return
                    }
                if (P = Ke(P), r.value > -1) {
                    const $ = [...e.modelValue];
                    $.splice(r.value, 1, P), t("update:modelValue", $), r.value = -1
                } else t("update:modelValue", [...e.modelValue, ...Ii(P)]);
                e.afterRead && e.afterRead(P, l())
            },
            c = P => {
                const {
                    maxCount: $,
                    modelValue: D,
                    resultType: p
                } = e;
                if (Array.isArray(P)) {
                    const _ = +$ - D.length;
                    P.length > _ && (P = P.slice(0, _)), Promise.all(P.map(A => Ss(A, p))).then(A => {
                        const X = P.map((le, L) => {
                            const G = {
                                file: le,
                                status: "",
                                message: "",
                                objectUrl: URL.createObjectURL(le)
                            };
                            return A[L] && (G.content = A[L]), G
                        });
                        u(X)
                    })
                } else Ss(P, p).then(_ => {
                    const A = {
                        file: P,
                        status: "",
                        message: "",
                        objectUrl: URL.createObjectURL(P)
                    };
                    _ && (A.content = _), u(A)
                })
            },
            f = P => {
                const {
                    files: $
                } = P.target;
                if (e.disabled || !$ || !$.length) return;
                const D = $.length === 1 ? $[0] : [].slice.call($);
                if (e.beforeRead) {
                    const p = e.beforeRead(D, l());
                    if (!p) {
                        s();
                        return
                    }
                    if (_a(p)) {
                        p.then(_ => {
                            c(_ || D)
                        }).catch(s);
                        return
                    }
                }
                c(D)
            };
        let h;
        const v = () => t("closePreview"),
            m = P => {
                if (e.previewFullImage) {
                    const $ = e.modelValue.filter(Fu),
                        D = $.map(p => (p.objectUrl && !p.url && p.status !== "failed" && (p.url = p.objectUrl, i.push(p.url)), p.url)).filter(Boolean);
                    h = fy(pe({
                        images: D,
                        startPosition: $.indexOf(P),
                        onClose: v
                    }, e.previewOptions))
                }
            },
            w = () => {
                h && h.close()
            },
            g = (P, $) => {
                const D = e.modelValue.slice(0);
                D.splice($, 1), t("update:modelValue", D), t("delete", P, l($))
            },
            x = P => {
                a.value = !0, r.value = P, Te(() => z())
            },
            y = () => {
                a.value || (r.value = -1), a.value = !1
            },
            C = (P, $) => {
                const D = ["imageFit", "deletable", "reupload", "previewSize", "beforeDelete"],
                    p = pe(Fe(e, D), Fe(P, D, !0));
                return d(h0, $e({
                    item: P,
                    index: $,
                    onClick: () => t(e.reupload ? "clickReupload" : "clickPreview", P, l($)),
                    onDelete: () => g(P, $),
                    onPreview: () => m(P),
                    onReupload: () => x($)
                }, Fe(e, ["name", "lazyLoad"]), p), Fe(n, ["preview-cover", "preview-delete"]))
            },
            S = () => {
                if (e.previewImage) return e.modelValue.map(C)
            },
            T = P => t("clickUpload", P),
            O = () => {
                const P = e.modelValue.length < +e.maxCount,
                    $ = e.readonly ? null : d("input", {
                        ref: o,
                        type: "file",
                        class: Ne("input"),
                        accept: e.accept,
                        capture: e.capture,
                        multiple: e.multiple && r.value === -1,
                        disabled: e.disabled,
                        onChange: f,
                        onClick: y
                    }, null);
                return n.default ? Wt(d("div", {
                    class: Ne("input-wrapper"),
                    onClick: T
                }, [n.default(), $]), [
                    [un, P]
                ]) : Wt(d("div", {
                    class: Ne("upload", {
                        readonly: e.readonly
                    }),
                    style: bn(e.previewSize),
                    onClick: T
                }, [d(Me, {
                    name: e.uploadIcon,
                    class: Ne("upload-icon")
                }, null), e.uploadText && d("span", {
                    class: Ne("upload-text")
                }, [e.uploadText]), $]), [
                    [un, e.showUpload && P]
                ])
            },
            z = () => {
                o.value && !e.disabled && o.value.click()
            };
        return Tt(() => {
            i.forEach(P => URL.revokeObjectURL(P))
        }), Ve({
            chooseFile: z,
            reuploadFile: x,
            closeImagePreview: w
        }), Yo(() => e.modelValue), () => d("div", {
            class: Ne()
        }, [d("div", {
            class: Ne("wrapper", {
                disabled: e.disabled
            })
        }, [S(), O()])])
    }
});
const sp = me(g0);
export {
    _u as $, Lr as A, k0 as B, Rf as C, Ta as D, S0 as E, Je as F, Qu as G, Ic as H, O0 as I, C0 as J, w0 as K, Wh as L, gn as M, Tt as N, Ni as O, Hi as P, ji as Q, M0 as R, V0 as S, Ki as T, X0 as U, F0 as V, R0 as W, B0 as X, Pi as Y, qo as Z, Me as _, Ht as a, Zt as a0, J0 as a1, np as a2, $0 as a3, L0 as a4, K0 as a5, j0 as a6, Jc as a7, I0 as a8, A0 as a9, ya as aA, cc as aB, _0 as aC, qt as aD, T0 as aE, p0 as aF, mh as aG, Gf as aH, D0 as aI, Il as aJ, b0 as aK, hh as aL, Lv as aa, ip as ab, sp as ac, Dg as ad, Y0 as ae, G0 as af, tp as ag, ep as ah, W0 as ai, sg as aj, Z0 as ak, rp as al, Vb as am, ap as an, Wb as ao, Xb as ap, uu as aq, vu as ar, N0 as as, z0 as at, Q0 as au, op as av, q0 as aw, lp as ax, U0 as ay, Pg as az, jo as b, j as c, re as d, m0 as e, zf as f, bt as g, Rd as h, Ue as i, d as j, xf as k, Ke as l, Zr as m, Te as n, Ge as o, uo as p, Wt as q, N as r, y0 as s, Vr as t, eo as u, un as v, ie as w, E0 as x, Oc as y, x0 as z
};