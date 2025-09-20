import {
    _ as e
} from "./index-Dl-Rd1IR.js";
import {
    z as i,
    A as n,
    t as r,
    C as m,
    H as d,
    G as l
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
const s = {
        __name: "ComBtn",
        props: {
            text: String,
            loading: Boolean,
            loadingText: String,
            disabled: {
                type: Boolean,
                default: !1
            }
        },
        setup(t) {
            return (o, p) => {
                const a = i("van-button");
                return r(), n(a, {
                    class: "com-btn",
                    disabled: t.disabled,
                    loading: t.loading,
                    "loading-text": t.loadingText ? t.loadingText : o.$t("load.submit")
                }, {
                    default: m(() => [d(l(t.text), 1)]),
                    _: 1
                }, 8, ["disabled", "loading", "loading-text"])
            }
        }
    },
    A = e(s, [
        ["__scopeId", "data-v-34dc7cc4"]
    ]);
export {
    A as
    default
};