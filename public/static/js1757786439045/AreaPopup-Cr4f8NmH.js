import {
    c as C,
    r as A,
    w as g,
    z as c,
    aH as G,
    A as I,
    t as i,
    C as U,
    y as n,
    H as b,
    G as f,
    j as _,
    q as w,
    x as p,
    B as L,
    aJ as M,
    v as T,
    F as j,
    J as F
} from "./vant-V2yOc2eo.js";
import {
    u as N
} from "./vuex-DiskWclD.js";
import {
    _ as J,
    a as Q
} from "./index-Dl-Rd1IR.js";
import "./vuei18n-D9wp4BR5.js";
import "./corejs-C4iS2aBk.js";
import "./cryptojs-BILcvZe1.js";
import "./qrcodejs2fix-CnmRM6Pf.js";
import "./vueclipboard3-B8FgQfFB.js";
import "./platform-BLhi-gUF.js";
import "./deviceDetectorJs-DuFTjyXu.js";
import "./vuerouter-C6Edv0ve.js";
import "./axios-DW_MHI2K.js";
import "./swiper-D9_P93yM.js";
import "./echartsCharts-B3GtL5PH.js";
import "./bignumberjs-JTMmK3Hb.js";
import "./validator-CEYFMF_C.js";
import "./vanttouchemulator-Cv_in60N.js";
const W = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAOVBMVEUAAAC7u7u6urq6urq7u7u8vLy6urq6urq6urq6urq6urq6urq8vLy4uLi/v7/BwcG7u7u8vLy6urriFnokAAAAEnRSTlMAYvn0mgnq4sjHiWlXJBgtS0m6ntQCAAAAt0lEQVQ4y4VTWxKEIAwrCMjLV+9/2F11p7WrTvLhRFIoKS0pYg85eZ9y6JHumMLAgiFMZBGrZwNfzSlz4RvKrPoy8gPGRfarbiPmX/7CLyjnPSq/oh7+PL/C726Dur8RDkRR/jZqJ2m0SmikLpyI3E7cl8iufsnQ9ohTb5ccWfghueOja5kS2wircyJj0v3r7GEATAEvCW3iQmmpVy31pqVGjwWfGzUMbDnUtLDt8eDg0cPDC8f/A+zNMG9Uvh0nAAAAAElFTkSuQmCC",
    $ = {
        class: "popup-con"
    },
    z = {
        class: "popup-title"
    },
    H = {
        class: "search-con"
    },
    K = ["placeholder"],
    O = {
        class: "list"
    },
    Z = ["onClick"],
    X = {
        key: 0,
        class: "ico"
    },
    Y = {
        class: "txt"
    },
    oo = {
        __name: "AreaPopup",
        props: {
            show: Boolean
        },
        emits: ["update:show"],
        setup(E, {
            emit: S
        }) {
            const {
                _getCountryList: k
            } = Q, h = N(), q = E, V = S, y = C(() => h.state.global.countryList), l = C({
                get() {
                    return q.show
                },
                set(e) {
                    V("update:show", e)
                }
            }), a = A(""), r = A([]), u = A([]);
            g(() => y.value, async e => {
                e.length === 0 && await k(), x(y.value)
            }, {
                immediate: !0
            });

            function x(e) {
                const o = e.filter((t, m, v) => m === v.findIndex(d => d.countryCode === t.countryCode));
                u.value = o, r.value = o, r.value.forEach(t => {
                    t.codename = t.name + t.mobilePrefix
                })
            }
            g(() => a.value, B);

            function B() {
                u.value = a.value !== "" ? P(a.value) : r.value
            }

            function P(e) {
                let o = [];
                for (let t = 0; t < r.value.length; t++) r.value[t].codename.indexOf(e) >= 0 && o.push(r.value[t]);
                return o
            }

            function R(e) {
                l.value = !1, h.commit("SET_AREAID", e)
            }
            return (e, o) => {
                const t = c("van-icon"),
                    m = c("ListEmpty"),
                    v = c("ComImage"),
                    d = c("van-popup"),
                    D = G("no-space");
                return i(), I(d, {
                    show: l.value,
                    "onUpdate:show": o[3] || (o[3] = s => l.value = s),
                    position: "bottom",
                    round: ""
                }, {
                    default: U(() => [n("div", $, [n("div", z, [b(f(e.$t("user.doc28")) + " ", 1), n("div", {
                        class: "cross",
                        onClick: o[0] || (o[0] = s => l.value = !1)
                    }, [_(t, {
                        name: "cross"
                    })])]), n("div", H, [o[5] || (o[5] = n("div", {
                        class: "ico"
                    }, null, -1)), w(n("input", {
                        class: "inp",
                        type: "text",
                        placeholder: e.$t("common.doc4"),
                        "onUpdate:modelValue": o[1] || (o[1] = s => a.value = s)
                    }, null, 8, K), [
                        [M, a.value],
                        [D]
                    ]), a.value != "" ? (i(), p("div", {
                        key: 0,
                        class: "closes",
                        onClick: o[2] || (o[2] = s => a.value = "")
                    }, o[4] || (o[4] = [n("img", {
                        src: W
                    }, null, -1)]))) : L("", !0)]), n("div", O, [w(_(m, {
                        desc: e.$t("user.doc29")
                    }, null, 8, ["desc"]), [
                        [T, u.value.length === 0]
                    ]), (i(!0), p(j, null, F(u.value, s => (i(), p("div", {
                        class: "item",
                        key: s.countryCode,
                        onClick: eo => R(s.mobilePrefix)
                    }, [s.iconUrl ? (i(), p("div", X, [_(v, {
                        class: "img",
                        src: s.iconUrl
                    }, null, 8, ["src"])])) : L("", !0), n("div", Y, f(s.name) + "（+" + f(s.mobilePrefix) + "）", 1)], 8, Z))), 128))])])]),
                    _: 1
                }, 8, ["show"])
            }
        }
    },
    Co = J(oo, [
        ["__scopeId", "data-v-8782dcf3"]
    ]);
export {
    Co as
    default
};