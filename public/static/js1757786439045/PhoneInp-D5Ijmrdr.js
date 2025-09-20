import {
    c as m,
    r as k,
    z as u,
    aH as I,
    x as n,
    t as r,
    y as t,
    j as d,
    q as b,
    H as p,
    F as i,
    G as N,
    aJ as P
} from "./vant-V2yOc2eo.js";
import {
    u as S
} from "./vuex-DiskWclD.js";
import {
    _ as V
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
const B = {
        class: "inp-con"
    },
    D = {
        class: "inp"
    },
    A = ["placeholder"],
    C = {
        __name: "PhoneInp",
        props: {
            account: [Number, String]
        },
        emits: ["update:account"],
        setup(v, {
            emit: _
        }) {
            const f = S(),
                l = m(() => f.state.global.areaId),
                w = v,
                y = _,
                c = m({
                    get() {
                        return w.account
                    },
                    set(s) {
                        y("update:account", s)
                    }
                }),
                a = k(!1);
            return (s, o) => {
                const h = u("van-icon"),
                    x = u("AreaPopup"),
                    g = I("number-only");
                return r(), n(i, null, [t("div", B, [t("div", D, [t("div", {
                    class: "set_area",
                    onClick: o[0] || (o[0] = e => a.value = !0)
                }, [o[3] || (o[3] = p(" + ")), l.value ? (r(), n(i, {
                    key: 0
                }, [p(N(l.value), 1)], 64)) : (r(), n(i, {
                    key: 1
                }, [p("--")], 64)), d(h, {
                    name: "arrow-down",
                    class: "icon"
                })]), b(t("input", {
                    type: "text",
                    placeholder: s.$t("user.doc4"),
                    "onUpdate:modelValue": o[1] || (o[1] = e => c.value = e)
                }, null, 8, A), [
                    [P, c.value],
                    [g]
                ])])]), d(x, {
                    show: a.value,
                    "onUpdate:show": o[2] || (o[2] = e => a.value = e)
                }, null, 8, ["show"])], 64)
            }
        }
    },
    W = V(C, [
        ["__scopeId", "data-v-a2e94f62"]
    ]);
export {
    W as
    default
};