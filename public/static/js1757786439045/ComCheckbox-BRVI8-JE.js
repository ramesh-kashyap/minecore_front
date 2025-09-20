import {
    _ as p
} from "./index-Dl-Rd1IR.js";
import {
    c as B,
    z as i,
    A as Q,
    t as d,
    C as c,
    aE as E,
    y as w,
    u as r
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
const U = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAETSURBVHgBzZcLDYMwFEUfU1AHQ8IcrBJwsDoBB1jYnAwF3RQUCThgj0+XjowW0s/jJpeQtPScQIA0g99w7A17wTKjvmmNNtj7ckKOldg+UdXM/EYlhOtKDRcEcF1+wsMV6HIbBHKgy4VagGUwPQuqdNQCcIKIEUKMdSXKK1aWZa+DEra5ceHJBZbwqqpc16wPMsZ6znlMuF1AKTUuJKUcZSLA7QJmbBIecLvAsJBLwhNuF3BJBIC7BdYk6roOAd8m8E8iEHy7wJqEJ3yfwFIiAHy/wNDh41QURQh4f4jfcQeEoRZoDyHwBrqMAnegS6NPUu4LdZVpkkPa/aGcmZAtbomAaYt+nifk4J/O6Av7wD714Ad0Oxw6FxftlgAAAABJRU5ErkJggg==",
    g = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKDSURBVHgB7ZsxctNAFIb/tw7BAzOJaWhRThDlBCRDEZgU2OQAmBOEnIAcwZwg7qhA4yITKBjICaKcIKKlQXFmElDsfexTiEdaUlBivf1m7JGe1sX7pN11oZ/gkSRJ5wrtbotoFQYRGPGfSxHmi4yBHIScLFIiSsnao17vWVYdRDcH0rg17dcEs8PgDpoK02C7u7l7czoT8GH08dgZi6EA12d6bi83XvV6uZGCa36gpXnB3fV4ydzbKY+T5DCyhk69MZm7NHTTIb27YFIpfC/GZ2IMc8LBwedHRTF9wC0sM/O6u+991NYxzsf25wq9Tw77MLRf+W02tpdr89Tsv5AkX9wa9+sYFQkM6huQWa0PpWHTmhd6vQ0332lYrRFzbMhwbe677eIrGsrU4sQrRcZtC7UtbzK9OkNDacGmtQIhNv6ef3+x/QOKkG0wqha2tp58Q2Np+2tbZKAIWQj9mioBtxEEQDlBAJQTBEA5QQCUEwRAOUEAlBMEQDlBAJQTBEA5QQCUEwRAOUEAlBMEQDlBAJQTBEA5QQCUEwRAOUEAlBMEQDlBAJTzl4D9JGluXugWREBWLTxcXFpGQ5F0jFfKlE0BW3u6mUlCFKi9Q38xsY0NT01gvOnNToClrFpyhcYKMMY8rp4TkJop25N6kftNXAglGErXybEZLGlSSVOxKU6ryREqY6c0tNYeMWx+Byb3I6f/M0l5A9tlPwU4XjAUE+gle+GQwvJKmRxNRp/eWPAeNMEYbHef7l7vAnbxrTOUQgkSnZXm5bgUIFGSF8831yRYjEZDufvsSW54VvGHvHN/FlrAusTnJWNrQR2icn2IMF9k5TfLk82ZLHjn9mLkh0J/AyyR1lB/LuW2AAAAAElFTkSuQmCC",
    u = ["src"],
    C = {
        __name: "ComCheckbox",
        props: {
            checked: Boolean
        },
        emits: ["update:checked"],
        setup(s, {
            emit: a
        }) {
            const m = s,
                l = a,
                o = B({
                    get() {
                        return m.checked
                    },
                    set(A) {
                        l("update:checked", A)
                    }
                });
            return (A, t) => {
                const n = i("van-checkbox");
                return d(), Q(n, {
                    modelValue: o.value,
                    "onUpdate:modelValue": t[0] || (t[0] = e => o.value = e),
                    shape: "square",
                    "icon-size": "0.32rem",
                    "checked-color": "#39C692"
                }, {
                    icon: c(e => [w("img", {
                        class: "img-icon",
                        src: e.checked ? r(U) : r(g)
                    }, null, 8, u)]),
                    default: c(() => [E(A.$slots, "default", {}, void 0, !0)]),
                    _: 3
                }, 8, ["modelValue"])
            }
        }
    },
    D = p(C, [
        ["__scopeId", "data-v-2d8b0b61"]
    ]);
export {
    D as
    default
};