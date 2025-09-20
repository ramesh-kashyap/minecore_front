import {
    c as g,
    r as x,
    aH as _,
    x as S,
    t as h,
    y as n,
    q as w,
    aI as y,
    H as B,
    u as m
} from "./vant-V2yOc2eo.js";
import {
    e as D,
    a as F
} from "./eye_close-sF_BDyTX.js";
import {
    u as P
} from "./vuex-DiskWclD.js";
import {
    _ as C
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
const I = {
        class: "inp-con"
    },
    N = {
        class: "inp"
    },
    O = ["type", "maxlength", "placeholder"],
    T = {
        class: "icon"
    },
    b = ["src"],
    k = {
        __name: "PsdInp",
        props: {
            password: String,
            place: String,
            maxlength: Number,
            isNumber: {
                type: Boolean,
                default: !1
            }
        },
        emits: ["update:password", "inpFocus", "inpBlur"],
        setup(t, {
            emit: u
        }) {
            const p = P(),
                l = t,
                a = u,
                o = g({
                    get() {
                        return l.password
                    },
                    set(r) {
                        a("update:password", r)
                    }
                });

            function c() {
                p.commit("SET_PASSWORD_FOCUS", !0), a("inpFocus")
            }

            function d() {
                p.commit("SET_PASSWORD_FOCUS", !1), a("inpBlur")
            }

            function v() {
                l.isNumber && (o.value = o.value.replace(/\D/g, ""))
            }
            const s = x("password");
            return (r, e) => {
                const f = _("no-space");
                return h(), S("div", I, [n("div", N, [w(n("input", {
                    type: s.value,
                    "onUpdate:modelValue": e[0] || (e[0] = i => o.value = i),
                    maxlength: t.maxlength ? t.maxlength : 100,
                    placeholder: t.place ? t.place : r.$t("user.doc6"),
                    onFocus: c,
                    onBlur: d,
                    onInput: e[1] || (e[1] = i => v())
                }, null, 40, O), [
                    [y, o.value],
                    [f]
                ]), n("div", T, [e[3] || (e[3] = B(" 　")), n("img", {
                    src: s.value === "text" ? m(D) : m(F),
                    onClick: e[2] || (e[2] = i => s.value = s.value === "text" ? "password" : "text")
                }, null, 8, b)])])])
            }
        }
    },
    Y = C(k, [
        ["__scopeId", "data-v-877e6773"]
    ]);
export {
    Y as
    default
};