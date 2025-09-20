import {
    c as v,
    r as b,
    aH as s,
    x as o,
    t as n,
    y as g,
    q as r,
    aI as p
} from "./vant-V2yOc2eo.js";
import {
    _ as y
} from "./index-Dl-Rd1IR.js";
import "./vuei18n-D9wp4BR5.js";
import "./corejs-C4iS2aBk.js";
import "./cryptojs-BILcvZe1.js";
import "./qrcodejs2fix-CnmRM6Pf.js";
import "./vueclipboard3-B8FgQfFB.js";
import "./platform-BLhi-gUF.js";
import "./deviceDetectorJs-DuFTjyXu.js";
import "./vuex-DiskWclD.js";
import "./vuerouter-C6Edv0ve.js";
import "./axios-DW_MHI2K.js";
import "./swiper-D9_P93yM.js";
import "./echartsCharts-B3GtL5PH.js";
import "./bignumberjs-JTMmK3Hb.js";
import "./validator-CEYFMF_C.js";
import "./vanttouchemulator-Cv_in60N.js";
const f = {
        class: "inp-con"
    },
    T = {
        class: "inp"
    },
    B = ["type", "disabled", "maxlength", "placeholder"],
    k = ["type", "disabled", "maxlength", "placeholder"],
    I = {
        __name: "modelInp",
        props: {
            inpText: String,
            place: String,
            maxlength: Number,
            disabled: Boolean,
            isNumber: {
                type: Boolean,
                default: !1
            }
        },
        emits: ["update:inpText"],
        setup(e, {
            emit: c
        }) {
            const u = e,
                x = c,
                t = v({
                    get() {
                        return u.inpText
                    },
                    set(a) {
                        x("update:inpText", a)
                    }
                }),
                m = b("text");
            return (a, l) => {
                const d = s("no-space"),
                    h = s("number-only");
                return n(), o("div", f, [g("div", T, [e.isNumber ? r((n(), o("input", {
                    key: 1,
                    type: m.value,
                    "onUpdate:modelValue": l[1] || (l[1] = i => t.value = i),
                    disabled: e.disabled,
                    maxlength: e.maxlength ? e.maxlength : 50,
                    placeholder: e.place ? e.place : a.$t("user.doc6")
                }, null, 8, k)), [
                    [p, t.value],
                    [d],
                    [h]
                ]) : r((n(), o("input", {
                    key: 0,
                    type: m.value,
                    "onUpdate:modelValue": l[0] || (l[0] = i => t.value = i),
                    disabled: e.disabled,
                    maxlength: e.maxlength ? e.maxlength : 50,
                    placeholder: e.place ? e.place : a.$t("user.doc6")
                }, null, 8, B)), [
                    [p, t.value],
                    [d]
                ])])])
            }
        }
    },
    J = y(I, [
        ["__scopeId", "data-v-7700cd8a"]
    ]);
export {
    J as
    default
};