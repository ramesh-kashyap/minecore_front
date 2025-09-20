import {
    _ as E
} from "./index-Dl-Rd1IR.js";
import {
    c as w,
    r as o,
    o as b,
    b as y,
    x as _,
    t as x,
    aE as L,
    O as S
} from "./vant-V2yOc2eo.js";
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
const B = {
        __name: "FloatingBubble",
        props: {
            init: Object
        },
        setup(g) {
            const n = g,
                s = w(() => parseFloat(getComputedStyle(document.documentElement).fontSize)),
                v = o(null),
                m = o(!1),
                i = o({
                    x: 0,
                    y: 0
                }),
                u = o({
                    x: 0,
                    y: 0
                }),
                t = o(0),
                a = o(0),
                d = o(0),
                c = o(0),
                p = w(() => {
                    let e = c.value / s.value;
                    return t.value - e < n.init.bottom ? e = t.value - n.init.bottom : a.value && t.value - e > a.value && (e = t.value - a.value), e
                });

            function h(e) {
                a.value = window.innerHeight / s.value - v.value.clientHeight / s.value - n.init.top, m.value = !0, i.value = f(e), u.value = i.value
            }

            function l(e) {
                m.value && ((!e.touches || e.touches.length <= 0) && e.preventDefault(), u.value = f(e), u.value.x - i.value.x, c.value = u.value.y - i.value.y)
            }

            function r() {
                m.value = !1, t.value = t.value - p.value, c.value = 0
            }

            function f(e) {
                return e.touches && e.touches.length > 0 ? {
                    x: e.touches[0].clientX,
                    y: e.touches[0].clientY
                } : {
                    x: e.clientX,
                    y: e.clientY
                }
            }
            return b(() => {
                t.value = n.init.bottom, d.value = n.init.right, window.addEventListener("mousemove", l), window.addEventListener("mouseup", r), window.addEventListener("touchmove", l), window.addEventListener("touchend", r)
            }), y(() => {
                window.removeEventListener("mousemove", l), window.removeEventListener("mouseup", r), window.removeEventListener("touchmove", l), window.removeEventListener("touchend", r)
            }), (e, D) => (x(), _("div", {
                class: "touch-move-con",
                onMousedown: h,
                onTouchstart: h,
                ref_key: "touchDom",
                ref: v,
                style: S({
                    bottom: `${t.value-p.value}rem`,
                    right: `${d.value}rem`
                })
            }, [L(e.$slots, "default", {}, void 0, !0)], 36))
        }
    },
    G = E(B, [
        ["__scopeId", "data-v-6df70459"]
    ]);
export {
    G as
    default
};