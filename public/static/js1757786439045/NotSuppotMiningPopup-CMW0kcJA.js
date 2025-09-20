import {
    c as l,
    z as u,
    A as d,
    t as _,
    C as v,
    y as s,
    G as p,
    I as f
} from "./vant-V2yOc2eo.js";
import {
    u as S
} from "./vuerouter-C6Edv0ve.js";
import {
    u as w
} from "./vuex-DiskWclD.js";
import {
    _ as h
} from "./index-Dl-Rd1IR.js";
import "./vuei18n-D9wp4BR5.js";
import "./corejs-C4iS2aBk.js";
import "./cryptojs-BILcvZe1.js";
import "./qrcodejs2fix-CnmRM6Pf.js";
import "./vueclipboard3-B8FgQfFB.js";
import "./platform-BLhi-gUF.js";
import "./deviceDetectorJs-DuFTjyXu.js";
import "./axios-DW_MHI2K.js";
import "./swiper-D9_P93yM.js";
import "./echartsCharts-B3GtL5PH.js";
import "./bignumberjs-JTMmK3Hb.js";
import "./validator-CEYFMF_C.js";
import "./vanttouchemulator-Cv_in60N.js";
const N = {
        class: "popup-content"
    },
    P = {
        class: "title"
    },
    $ = {
        class: "tips"
    },
    b = {
        class: "bt-list"
    },
    g = {
        __name: "NotSuppotMiningPopup",
        setup(k) {
            const a = S(),
                e = w(),
                n = l(() => e.state.global.isNotAppPopupShow);

            function r() {
                e.commit("SET_IS_NOT_APP_SHOW", !1)
            }

            function m(o) {
                r(), a.push(o)
            }
            return (o, t) => {
                const c = u("van-popup");
                return _(), d(c, {
                    class: "popup",
                    show: n.value,
                    "onUpdate:show": t[2] || (t[2] = i => n.value = i),
                    "close-on-click-overlay": ""
                }, {
                    default: v(() => [s("div", N, [s("div", P, p(o.$t("common.doc56")), 1), s("div", $, p(o.$t("common.doc57")), 1), s("div", b, [s("div", {
                        class: "bt cancel",
                        onClick: t[0] || (t[0] = f(i => r(), ["stop"]))
                    }, p(o.$t("common.doc58")), 1), s("div", {
                        class: "bt query",
                        onClick: t[1] || (t[1] = i => m("/profile/download"))
                    }, p(o.$t("common.doc59")), 1)])])]),
                    _: 1
                }, 8, ["show"])
            }
        }
    },
    W = h(g, [
        ["__scopeId", "data-v-8fb8c9a7"]
    ]);
export {
    W as
    default
};