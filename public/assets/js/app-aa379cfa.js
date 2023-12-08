function Mr(t, e) {
    return function () {
        return t.apply(e, arguments);
    };
}
const { toString: Fo } = Object.prototype,
    { getPrototypeOf: Gn } = Object,
    Ye = ((t) => (e) => {
        const n = Fo.call(e);
        return t[n] || (t[n] = n.slice(8, -1).toLowerCase());
    })(Object.create(null)),
    tt = (t) => ((t = t.toLowerCase()), (e) => Ye(e) === t),
    Ge = (t) => (e) => typeof e === t,
    { isArray: Bt } = Array,
    ne = Ge("undefined");
function zo(t) {
    return (
        t !== null &&
        !ne(t) &&
        t.constructor !== null &&
        !ne(t.constructor) &&
        z(t.constructor.isBuffer) &&
        t.constructor.isBuffer(t)
    );
}
const Nr = tt("ArrayBuffer");
function $o(t) {
    let e;
    return (
        typeof ArrayBuffer < "u" && ArrayBuffer.isView
            ? (e = ArrayBuffer.isView(t))
            : (e = t && t.buffer && Nr(t.buffer)),
        e
    );
}
const qo = Ge("string"),
    z = Ge("function"),
    Br = Ge("number"),
    Qe = (t) => t !== null && typeof t == "object",
    Uo = (t) => t === !0 || t === !1,
    Le = (t) => {
        if (Ye(t) !== "object") return !1;
        const e = Gn(t);
        return (
            (e === null ||
                e === Object.prototype ||
                Object.getPrototypeOf(e) === null) &&
            !(Symbol.toStringTag in t) &&
            !(Symbol.iterator in t)
        );
    },
    Vo = tt("Date"),
    Ko = tt("File"),
    Wo = tt("Blob"),
    Jo = tt("FileList"),
    Xo = (t) => Qe(t) && z(t.pipe),
    Yo = (t) => {
        let e;
        return (
            t &&
            ((typeof FormData == "function" && t instanceof FormData) ||
                (z(t.append) &&
                    ((e = Ye(t)) === "formdata" ||
                        (e === "object" &&
                            z(t.toString) &&
                            t.toString() === "[object FormData]"))))
        );
    },
    Go = tt("URLSearchParams"),
    Qo = (t) =>
        t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function oe(t, e, { allOwnKeys: n = !1 } = {}) {
    if (t === null || typeof t > "u") return;
    let i, r;
    if ((typeof t != "object" && (t = [t]), Bt(t)))
        for (i = 0, r = t.length; i < r; i++) e.call(null, t[i], i, t);
    else {
        const s = n ? Object.getOwnPropertyNames(t) : Object.keys(t),
            o = s.length;
        let a;
        for (i = 0; i < o; i++) (a = s[i]), e.call(null, t[a], a, t);
    }
}
function Fr(t, e) {
    e = e.toLowerCase();
    const n = Object.keys(t);
    let i = n.length,
        r;
    for (; i-- > 0; ) if (((r = n[i]), e === r.toLowerCase())) return r;
    return null;
}
const zr = (() =>
        typeof globalThis < "u"
            ? globalThis
            : typeof self < "u"
            ? self
            : typeof window < "u"
            ? window
            : global)(),
    $r = (t) => !ne(t) && t !== zr;
function An() {
    const { caseless: t } = ($r(this) && this) || {},
        e = {},
        n = (i, r) => {
            const s = (t && Fr(e, r)) || r;
            Le(e[s]) && Le(i)
                ? (e[s] = An(e[s], i))
                : Le(i)
                ? (e[s] = An({}, i))
                : Bt(i)
                ? (e[s] = i.slice())
                : (e[s] = i);
        };
    for (let i = 0, r = arguments.length; i < r; i++)
        arguments[i] && oe(arguments[i], n);
    return e;
}
const Zo = (t, e, n, { allOwnKeys: i } = {}) => (
        oe(
            e,
            (r, s) => {
                n && z(r) ? (t[s] = Mr(r, n)) : (t[s] = r);
            },
            { allOwnKeys: i }
        ),
        t
    ),
    ta = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t),
    ea = (t, e, n, i) => {
        (t.prototype = Object.create(e.prototype, i)),
            (t.prototype.constructor = t),
            Object.defineProperty(t, "super", { value: e.prototype }),
            n && Object.assign(t.prototype, n);
    },
    na = (t, e, n, i) => {
        let r, s, o;
        const a = {};
        if (((e = e || {}), t == null)) return e;
        do {
            for (r = Object.getOwnPropertyNames(t), s = r.length; s-- > 0; )
                (o = r[s]),
                    (!i || i(o, t, e)) && !a[o] && ((e[o] = t[o]), (a[o] = !0));
            t = n !== !1 && Gn(t);
        } while (t && (!n || n(t, e)) && t !== Object.prototype);
        return e;
    },
    ia = (t, e, n) => {
        (t = String(t)),
            (n === void 0 || n > t.length) && (n = t.length),
            (n -= e.length);
        const i = t.indexOf(e, n);
        return i !== -1 && i === n;
    },
    ra = (t) => {
        if (!t) return null;
        if (Bt(t)) return t;
        let e = t.length;
        if (!Br(e)) return null;
        const n = new Array(e);
        for (; e-- > 0; ) n[e] = t[e];
        return n;
    },
    sa = (
        (t) => (e) =>
            t && e instanceof t
    )(typeof Uint8Array < "u" && Gn(Uint8Array)),
    oa = (t, e) => {
        const i = (t && t[Symbol.iterator]).call(t);
        let r;
        for (; (r = i.next()) && !r.done; ) {
            const s = r.value;
            e.call(t, s[0], s[1]);
        }
    },
    aa = (t, e) => {
        let n;
        const i = [];
        for (; (n = t.exec(e)) !== null; ) i.push(n);
        return i;
    },
    ca = tt("HTMLFormElement"),
    la = (t) =>
        t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, i, r) {
            return i.toUpperCase() + r;
        }),
    Zi = (
        ({ hasOwnProperty: t }) =>
        (e, n) =>
            t.call(e, n)
    )(Object.prototype),
    ua = tt("RegExp"),
    qr = (t, e) => {
        const n = Object.getOwnPropertyDescriptors(t),
            i = {};
        oe(n, (r, s) => {
            let o;
            (o = e(r, s, t)) !== !1 && (i[s] = o || r);
        }),
            Object.defineProperties(t, i);
    },
    da = (t) => {
        qr(t, (e, n) => {
            if (z(t) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
                return !1;
            const i = t[n];
            if (z(i)) {
                if (((e.enumerable = !1), "writable" in e)) {
                    e.writable = !1;
                    return;
                }
                e.set ||
                    (e.set = () => {
                        throw Error(
                            "Can not rewrite read-only method '" + n + "'"
                        );
                    });
            }
        });
    },
    fa = (t, e) => {
        const n = {},
            i = (r) => {
                r.forEach((s) => {
                    n[s] = !0;
                });
            };
        return Bt(t) ? i(t) : i(String(t).split(e)), n;
    },
    pa = () => {},
    ha = (t, e) => ((t = +t), Number.isFinite(t) ? t : e),
    vn = "abcdefghijklmnopqrstuvwxyz",
    tr = "0123456789",
    Ur = { DIGIT: tr, ALPHA: vn, ALPHA_DIGIT: vn + vn.toUpperCase() + tr },
    va = (t = 16, e = Ur.ALPHA_DIGIT) => {
        let n = "";
        const { length: i } = e;
        for (; t--; ) n += e[(Math.random() * i) | 0];
        return n;
    };
function _a(t) {
    return !!(
        t &&
        z(t.append) &&
        t[Symbol.toStringTag] === "FormData" &&
        t[Symbol.iterator]
    );
}
const ga = (t) => {
        const e = new Array(10),
            n = (i, r) => {
                if (Qe(i)) {
                    if (e.indexOf(i) >= 0) return;
                    if (!("toJSON" in i)) {
                        e[r] = i;
                        const s = Bt(i) ? [] : {};
                        return (
                            oe(i, (o, a) => {
                                const c = n(o, r + 1);
                                !ne(c) && (s[a] = c);
                            }),
                            (e[r] = void 0),
                            s
                        );
                    }
                }
                return i;
            };
        return n(t, 0);
    },
    ma = tt("AsyncFunction"),
    ya = (t) => t && (Qe(t) || z(t)) && z(t.then) && z(t.catch),
    f = {
        isArray: Bt,
        isArrayBuffer: Nr,
        isBuffer: zo,
        isFormData: Yo,
        isArrayBufferView: $o,
        isString: qo,
        isNumber: Br,
        isBoolean: Uo,
        isObject: Qe,
        isPlainObject: Le,
        isUndefined: ne,
        isDate: Vo,
        isFile: Ko,
        isBlob: Wo,
        isRegExp: ua,
        isFunction: z,
        isStream: Xo,
        isURLSearchParams: Go,
        isTypedArray: sa,
        isFileList: Jo,
        forEach: oe,
        merge: An,
        extend: Zo,
        trim: Qo,
        stripBOM: ta,
        inherits: ea,
        toFlatObject: na,
        kindOf: Ye,
        kindOfTest: tt,
        endsWith: ia,
        toArray: ra,
        forEachEntry: oa,
        matchAll: aa,
        isHTMLForm: ca,
        hasOwnProperty: Zi,
        hasOwnProp: Zi,
        reduceDescriptors: qr,
        freezeMethods: da,
        toObjectSet: fa,
        toCamelCase: la,
        noop: pa,
        toFiniteNumber: ha,
        findKey: Fr,
        global: zr,
        isContextDefined: $r,
        ALPHABET: Ur,
        generateString: va,
        isSpecCompliantForm: _a,
        toJSONObject: ga,
        isAsyncFn: ma,
        isThenable: ya,
    };
function O(t, e, n, i, r) {
    Error.call(this),
        Error.captureStackTrace
            ? Error.captureStackTrace(this, this.constructor)
            : (this.stack = new Error().stack),
        (this.message = t),
        (this.name = "AxiosError"),
        e && (this.code = e),
        n && (this.config = n),
        i && (this.request = i),
        r && (this.response = r);
}
f.inherits(O, Error, {
    toJSON: function () {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: f.toJSONObject(this.config),
            code: this.code,
            status:
                this.response && this.response.status
                    ? this.response.status
                    : null,
        };
    },
});
const Vr = O.prototype,
    Kr = {};
[
    "ERR_BAD_OPTION_VALUE",
    "ERR_BAD_OPTION",
    "ECONNABORTED",
    "ETIMEDOUT",
    "ERR_NETWORK",
    "ERR_FR_TOO_MANY_REDIRECTS",
    "ERR_DEPRECATED",
    "ERR_BAD_RESPONSE",
    "ERR_BAD_REQUEST",
    "ERR_CANCELED",
    "ERR_NOT_SUPPORT",
    "ERR_INVALID_URL",
].forEach((t) => {
    Kr[t] = { value: t };
});
Object.defineProperties(O, Kr);
Object.defineProperty(Vr, "isAxiosError", { value: !0 });
O.from = (t, e, n, i, r, s) => {
    const o = Object.create(Vr);
    return (
        f.toFlatObject(
            t,
            o,
            function (c) {
                return c !== Error.prototype;
            },
            (a) => a !== "isAxiosError"
        ),
        O.call(o, t.message, e, n, i, r),
        (o.cause = t),
        (o.name = t.name),
        s && Object.assign(o, s),
        o
    );
};
const ba = null;
function On(t) {
    return f.isPlainObject(t) || f.isArray(t);
}
function Wr(t) {
    return f.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function er(t, e, n) {
    return t
        ? t
              .concat(e)
              .map(function (r, s) {
                  return (r = Wr(r)), !n && s ? "[" + r + "]" : r;
              })
              .join(n ? "." : "")
        : e;
}
function wa(t) {
    return f.isArray(t) && !t.some(On);
}
const Ea = f.toFlatObject(f, {}, null, function (e) {
    return /^is[A-Z]/.test(e);
});
function Ze(t, e, n) {
    if (!f.isObject(t)) throw new TypeError("target must be an object");
    (e = e || new FormData()),
        (n = f.toFlatObject(
            n,
            { metaTokens: !0, dots: !1, indexes: !1 },
            !1,
            function (h, p) {
                return !f.isUndefined(p[h]);
            }
        ));
    const i = n.metaTokens,
        r = n.visitor || l,
        s = n.dots,
        o = n.indexes,
        c = (n.Blob || (typeof Blob < "u" && Blob)) && f.isSpecCompliantForm(e);
    if (!f.isFunction(r)) throw new TypeError("visitor must be a function");
    function u(v) {
        if (v === null) return "";
        if (f.isDate(v)) return v.toISOString();
        if (!c && f.isBlob(v))
            throw new O("Blob is not supported. Use a Buffer instead.");
        return f.isArrayBuffer(v) || f.isTypedArray(v)
            ? c && typeof Blob == "function"
                ? new Blob([v])
                : Buffer.from(v)
            : v;
    }
    function l(v, h, p) {
        let m = v;
        if (v && !p && typeof v == "object") {
            if (f.endsWith(h, "{}"))
                (h = i ? h : h.slice(0, -2)), (v = JSON.stringify(v));
            else if (
                (f.isArray(v) && wa(v)) ||
                ((f.isFileList(v) || f.endsWith(h, "[]")) && (m = f.toArray(v)))
            )
                return (
                    (h = Wr(h)),
                    m.forEach(function (w, y) {
                        !(f.isUndefined(w) || w === null) &&
                            e.append(
                                o === !0
                                    ? er([h], y, s)
                                    : o === null
                                    ? h
                                    : h + "[]",
                                u(w)
                            );
                    }),
                    !1
                );
        }
        return On(v) ? !0 : (e.append(er(p, h, s), u(v)), !1);
    }
    const d = [],
        _ = Object.assign(Ea, {
            defaultVisitor: l,
            convertValue: u,
            isVisitable: On,
        });
    function g(v, h) {
        if (!f.isUndefined(v)) {
            if (d.indexOf(v) !== -1)
                throw Error("Circular reference detected in " + h.join("."));
            d.push(v),
                f.forEach(v, function (m, b) {
                    (!(f.isUndefined(m) || m === null) &&
                        r.call(e, m, f.isString(b) ? b.trim() : b, h, _)) ===
                        !0 && g(m, h ? h.concat(b) : [b]);
                }),
                d.pop();
        }
    }
    if (!f.isObject(t)) throw new TypeError("data must be an object");
    return g(t), e;
}
function nr(t) {
    const e = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0",
    };
    return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function (i) {
        return e[i];
    });
}
function Qn(t, e) {
    (this._pairs = []), t && Ze(t, this, e);
}
const Jr = Qn.prototype;
Jr.append = function (e, n) {
    this._pairs.push([e, n]);
};
Jr.toString = function (e) {
    const n = e
        ? function (i) {
              return e.call(this, i, nr);
          }
        : nr;
    return this._pairs
        .map(function (r) {
            return n(r[0]) + "=" + n(r[1]);
        }, "")
        .join("&");
};
function xa(t) {
    return encodeURIComponent(t)
        .replace(/%3A/gi, ":")
        .replace(/%24/g, "$")
        .replace(/%2C/gi, ",")
        .replace(/%20/g, "+")
        .replace(/%5B/gi, "[")
        .replace(/%5D/gi, "]");
}
function Xr(t, e, n) {
    if (!e) return t;
    const i = (n && n.encode) || xa,
        r = n && n.serialize;
    let s;
    if (
        (r
            ? (s = r(e, n))
            : (s = f.isURLSearchParams(e)
                  ? e.toString()
                  : new Qn(e, n).toString(i)),
        s)
    ) {
        const o = t.indexOf("#");
        o !== -1 && (t = t.slice(0, o)),
            (t += (t.indexOf("?") === -1 ? "?" : "&") + s);
    }
    return t;
}
class Aa {
    constructor() {
        this.handlers = [];
    }
    use(e, n, i) {
        return (
            this.handlers.push({
                fulfilled: e,
                rejected: n,
                synchronous: i ? i.synchronous : !1,
                runWhen: i ? i.runWhen : null,
            }),
            this.handlers.length - 1
        );
    }
    eject(e) {
        this.handlers[e] && (this.handlers[e] = null);
    }
    clear() {
        this.handlers && (this.handlers = []);
    }
    forEach(e) {
        f.forEach(this.handlers, function (i) {
            i !== null && e(i);
        });
    }
}
const ir = Aa,
    Yr = {
        silentJSONParsing: !0,
        forcedJSONParsing: !0,
        clarifyTimeoutError: !1,
    },
    Oa = typeof URLSearchParams < "u" ? URLSearchParams : Qn,
    Sa = typeof FormData < "u" ? FormData : null,
    Ia = typeof Blob < "u" ? Blob : null,
    La = {
        isBrowser: !0,
        classes: { URLSearchParams: Oa, FormData: Sa, Blob: Ia },
        protocols: ["http", "https", "file", "blob", "url", "data"],
    },
    Gr = typeof window < "u" && typeof document < "u",
    Ca = ((t) => Gr && ["ReactNative", "NativeScript", "NS"].indexOf(t) < 0)(
        typeof navigator < "u" && navigator.product
    ),
    Ta = (() =>
        typeof WorkerGlobalScope < "u" &&
        self instanceof WorkerGlobalScope &&
        typeof self.importScripts == "function")(),
    ka = Object.freeze(
        Object.defineProperty(
            {
                __proto__: null,
                hasBrowserEnv: Gr,
                hasStandardBrowserEnv: Ca,
                hasStandardBrowserWebWorkerEnv: Ta,
            },
            Symbol.toStringTag,
            { value: "Module" }
        )
    ),
    G = { ...ka, ...La };
function Pa(t, e) {
    return Ze(
        t,
        new G.classes.URLSearchParams(),
        Object.assign(
            {
                visitor: function (n, i, r, s) {
                    return G.isNode && f.isBuffer(n)
                        ? (this.append(i, n.toString("base64")), !1)
                        : s.defaultVisitor.apply(this, arguments);
                },
            },
            e
        )
    );
}
function Ra(t) {
    return f
        .matchAll(/\w+|\[(\w*)]/g, t)
        .map((e) => (e[0] === "[]" ? "" : e[1] || e[0]));
}
function Da(t) {
    const e = {},
        n = Object.keys(t);
    let i;
    const r = n.length;
    let s;
    for (i = 0; i < r; i++) (s = n[i]), (e[s] = t[s]);
    return e;
}
function Qr(t) {
    function e(n, i, r, s) {
        let o = n[s++];
        const a = Number.isFinite(+o),
            c = s >= n.length;
        return (
            (o = !o && f.isArray(r) ? r.length : o),
            c
                ? (f.hasOwnProp(r, o) ? (r[o] = [r[o], i]) : (r[o] = i), !a)
                : ((!r[o] || !f.isObject(r[o])) && (r[o] = []),
                  e(n, i, r[o], s) && f.isArray(r[o]) && (r[o] = Da(r[o])),
                  !a)
        );
    }
    if (f.isFormData(t) && f.isFunction(t.entries)) {
        const n = {};
        return (
            f.forEachEntry(t, (i, r) => {
                e(Ra(i), r, n, 0);
            }),
            n
        );
    }
    return null;
}
function ja(t, e, n) {
    if (f.isString(t))
        try {
            return (e || JSON.parse)(t), f.trim(t);
        } catch (i) {
            if (i.name !== "SyntaxError") throw i;
        }
    return (n || JSON.stringify)(t);
}
const Zn = {
    transitional: Yr,
    adapter: ["xhr", "http"],
    transformRequest: [
        function (e, n) {
            const i = n.getContentType() || "",
                r = i.indexOf("application/json") > -1,
                s = f.isObject(e);
            if (
                (s && f.isHTMLForm(e) && (e = new FormData(e)), f.isFormData(e))
            )
                return r && r ? JSON.stringify(Qr(e)) : e;
            if (
                f.isArrayBuffer(e) ||
                f.isBuffer(e) ||
                f.isStream(e) ||
                f.isFile(e) ||
                f.isBlob(e)
            )
                return e;
            if (f.isArrayBufferView(e)) return e.buffer;
            if (f.isURLSearchParams(e))
                return (
                    n.setContentType(
                        "application/x-www-form-urlencoded;charset=utf-8",
                        !1
                    ),
                    e.toString()
                );
            let a;
            if (s) {
                if (i.indexOf("application/x-www-form-urlencoded") > -1)
                    return Pa(e, this.formSerializer).toString();
                if (
                    (a = f.isFileList(e)) ||
                    i.indexOf("multipart/form-data") > -1
                ) {
                    const c = this.env && this.env.FormData;
                    return Ze(
                        a ? { "files[]": e } : e,
                        c && new c(),
                        this.formSerializer
                    );
                }
            }
            return s || r
                ? (n.setContentType("application/json", !1), ja(e))
                : e;
        },
    ],
    transformResponse: [
        function (e) {
            const n = this.transitional || Zn.transitional,
                i = n && n.forcedJSONParsing,
                r = this.responseType === "json";
            if (e && f.isString(e) && ((i && !this.responseType) || r)) {
                const o = !(n && n.silentJSONParsing) && r;
                try {
                    return JSON.parse(e);
                } catch (a) {
                    if (o)
                        throw a.name === "SyntaxError"
                            ? O.from(
                                  a,
                                  O.ERR_BAD_RESPONSE,
                                  this,
                                  null,
                                  this.response
                              )
                            : a;
                }
            }
            return e;
        },
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: { FormData: G.classes.FormData, Blob: G.classes.Blob },
    validateStatus: function (e) {
        return e >= 200 && e < 300;
    },
    headers: {
        common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0,
        },
    },
};
f.forEach(["delete", "get", "head", "post", "put", "patch"], (t) => {
    Zn.headers[t] = {};
});
const ti = Zn,
    Ha = f.toObjectSet([
        "age",
        "authorization",
        "content-length",
        "content-type",
        "etag",
        "expires",
        "from",
        "host",
        "if-modified-since",
        "if-unmodified-since",
        "last-modified",
        "location",
        "max-forwards",
        "proxy-authorization",
        "referer",
        "retry-after",
        "user-agent",
    ]),
    Ma = (t) => {
        const e = {};
        let n, i, r;
        return (
            t &&
                t
                    .split(
                        `
`
                    )
                    .forEach(function (o) {
                        (r = o.indexOf(":")),
                            (n = o.substring(0, r).trim().toLowerCase()),
                            (i = o.substring(r + 1).trim()),
                            !(!n || (e[n] && Ha[n])) &&
                                (n === "set-cookie"
                                    ? e[n]
                                        ? e[n].push(i)
                                        : (e[n] = [i])
                                    : (e[n] = e[n] ? e[n] + ", " + i : i));
                    }),
            e
        );
    },
    rr = Symbol("internals");
function Vt(t) {
    return t && String(t).trim().toLowerCase();
}
function Ce(t) {
    return t === !1 || t == null ? t : f.isArray(t) ? t.map(Ce) : String(t);
}
function Na(t) {
    const e = Object.create(null),
        n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let i;
    for (; (i = n.exec(t)); ) e[i[1]] = i[2];
    return e;
}
const Ba = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function _n(t, e, n, i, r) {
    if (f.isFunction(i)) return i.call(this, e, n);
    if ((r && (e = n), !!f.isString(e))) {
        if (f.isString(i)) return e.indexOf(i) !== -1;
        if (f.isRegExp(i)) return i.test(e);
    }
}
function Fa(t) {
    return t
        .trim()
        .toLowerCase()
        .replace(/([a-z\d])(\w*)/g, (e, n, i) => n.toUpperCase() + i);
}
function za(t, e) {
    const n = f.toCamelCase(" " + e);
    ["get", "set", "has"].forEach((i) => {
        Object.defineProperty(t, i + n, {
            value: function (r, s, o) {
                return this[i].call(this, e, r, s, o);
            },
            configurable: !0,
        });
    });
}
class tn {
    constructor(e) {
        e && this.set(e);
    }
    set(e, n, i) {
        const r = this;
        function s(a, c, u) {
            const l = Vt(c);
            if (!l) throw new Error("header name must be a non-empty string");
            const d = f.findKey(r, l);
            (!d ||
                r[d] === void 0 ||
                u === !0 ||
                (u === void 0 && r[d] !== !1)) &&
                (r[d || c] = Ce(a));
        }
        const o = (a, c) => f.forEach(a, (u, l) => s(u, l, c));
        return (
            f.isPlainObject(e) || e instanceof this.constructor
                ? o(e, n)
                : f.isString(e) && (e = e.trim()) && !Ba(e)
                ? o(Ma(e), n)
                : e != null && s(n, e, i),
            this
        );
    }
    get(e, n) {
        if (((e = Vt(e)), e)) {
            const i = f.findKey(this, e);
            if (i) {
                const r = this[i];
                if (!n) return r;
                if (n === !0) return Na(r);
                if (f.isFunction(n)) return n.call(this, r, i);
                if (f.isRegExp(n)) return n.exec(r);
                throw new TypeError("parser must be boolean|regexp|function");
            }
        }
    }
    has(e, n) {
        if (((e = Vt(e)), e)) {
            const i = f.findKey(this, e);
            return !!(
                i &&
                this[i] !== void 0 &&
                (!n || _n(this, this[i], i, n))
            );
        }
        return !1;
    }
    delete(e, n) {
        const i = this;
        let r = !1;
        function s(o) {
            if (((o = Vt(o)), o)) {
                const a = f.findKey(i, o);
                a && (!n || _n(i, i[a], a, n)) && (delete i[a], (r = !0));
            }
        }
        return f.isArray(e) ? e.forEach(s) : s(e), r;
    }
    clear(e) {
        const n = Object.keys(this);
        let i = n.length,
            r = !1;
        for (; i--; ) {
            const s = n[i];
            (!e || _n(this, this[s], s, e, !0)) && (delete this[s], (r = !0));
        }
        return r;
    }
    normalize(e) {
        const n = this,
            i = {};
        return (
            f.forEach(this, (r, s) => {
                const o = f.findKey(i, s);
                if (o) {
                    (n[o] = Ce(r)), delete n[s];
                    return;
                }
                const a = e ? Fa(s) : String(s).trim();
                a !== s && delete n[s], (n[a] = Ce(r)), (i[a] = !0);
            }),
            this
        );
    }
    concat(...e) {
        return this.constructor.concat(this, ...e);
    }
    toJSON(e) {
        const n = Object.create(null);
        return (
            f.forEach(this, (i, r) => {
                i != null &&
                    i !== !1 &&
                    (n[r] = e && f.isArray(i) ? i.join(", ") : i);
            }),
            n
        );
    }
    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
        return Object.entries(this.toJSON()).map(([e, n]) => e + ": " + n)
            .join(`
`);
    }
    get [Symbol.toStringTag]() {
        return "AxiosHeaders";
    }
    static from(e) {
        return e instanceof this ? e : new this(e);
    }
    static concat(e, ...n) {
        const i = new this(e);
        return n.forEach((r) => i.set(r)), i;
    }
    static accessor(e) {
        const i = (this[rr] = this[rr] = { accessors: {} }).accessors,
            r = this.prototype;
        function s(o) {
            const a = Vt(o);
            i[a] || (za(r, o), (i[a] = !0));
        }
        return f.isArray(e) ? e.forEach(s) : s(e), this;
    }
}
tn.accessor([
    "Content-Type",
    "Content-Length",
    "Accept",
    "Accept-Encoding",
    "User-Agent",
    "Authorization",
]);
f.reduceDescriptors(tn.prototype, ({ value: t }, e) => {
    let n = e[0].toUpperCase() + e.slice(1);
    return {
        get: () => t,
        set(i) {
            this[n] = i;
        },
    };
});
f.freezeMethods(tn);
const et = tn;
function gn(t, e) {
    const n = this || ti,
        i = e || n,
        r = et.from(i.headers);
    let s = i.data;
    return (
        f.forEach(t, function (a) {
            s = a.call(n, s, r.normalize(), e ? e.status : void 0);
        }),
        r.normalize(),
        s
    );
}
function Zr(t) {
    return !!(t && t.__CANCEL__);
}
function ae(t, e, n) {
    O.call(this, t ?? "canceled", O.ERR_CANCELED, e, n),
        (this.name = "CanceledError");
}
f.inherits(ae, O, { __CANCEL__: !0 });
function $a(t, e, n) {
    const i = n.config.validateStatus;
    !n.status || !i || i(n.status)
        ? t(n)
        : e(
              new O(
                  "Request failed with status code " + n.status,
                  [O.ERR_BAD_REQUEST, O.ERR_BAD_RESPONSE][
                      Math.floor(n.status / 100) - 4
                  ],
                  n.config,
                  n.request,
                  n
              )
          );
}
const qa = G.hasStandardBrowserEnv
    ? {
          write(t, e, n, i, r, s) {
              const o = [t + "=" + encodeURIComponent(e)];
              f.isNumber(n) && o.push("expires=" + new Date(n).toGMTString()),
                  f.isString(i) && o.push("path=" + i),
                  f.isString(r) && o.push("domain=" + r),
                  s === !0 && o.push("secure"),
                  (document.cookie = o.join("; "));
          },
          read(t) {
              const e = document.cookie.match(
                  new RegExp("(^|;\\s*)(" + t + ")=([^;]*)")
              );
              return e ? decodeURIComponent(e[3]) : null;
          },
          remove(t) {
              this.write(t, "", Date.now() - 864e5);
          },
      }
    : {
          write() {},
          read() {
              return null;
          },
          remove() {},
      };
function Ua(t) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function Va(t, e) {
    return e ? t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "") : t;
}
function ts(t, e) {
    return t && !Ua(e) ? Va(t, e) : e;
}
const Ka = G.hasStandardBrowserEnv
    ? (function () {
          const e = /(msie|trident)/i.test(navigator.userAgent),
              n = document.createElement("a");
          let i;
          function r(s) {
              let o = s;
              return (
                  e && (n.setAttribute("href", o), (o = n.href)),
                  n.setAttribute("href", o),
                  {
                      href: n.href,
                      protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                      host: n.host,
                      search: n.search ? n.search.replace(/^\?/, "") : "",
                      hash: n.hash ? n.hash.replace(/^#/, "") : "",
                      hostname: n.hostname,
                      port: n.port,
                      pathname:
                          n.pathname.charAt(0) === "/"
                              ? n.pathname
                              : "/" + n.pathname,
                  }
              );
          }
          return (
              (i = r(window.location.href)),
              function (o) {
                  const a = f.isString(o) ? r(o) : o;
                  return a.protocol === i.protocol && a.host === i.host;
              }
          );
      })()
    : (function () {
          return function () {
              return !0;
          };
      })();
function Wa(t) {
    const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
    return (e && e[1]) || "";
}
function Ja(t, e) {
    t = t || 10;
    const n = new Array(t),
        i = new Array(t);
    let r = 0,
        s = 0,
        o;
    return (
        (e = e !== void 0 ? e : 1e3),
        function (c) {
            const u = Date.now(),
                l = i[s];
            o || (o = u), (n[r] = c), (i[r] = u);
            let d = s,
                _ = 0;
            for (; d !== r; ) (_ += n[d++]), (d = d % t);
            if (((r = (r + 1) % t), r === s && (s = (s + 1) % t), u - o < e))
                return;
            const g = l && u - l;
            return g ? Math.round((_ * 1e3) / g) : void 0;
        }
    );
}
function sr(t, e) {
    let n = 0;
    const i = Ja(50, 250);
    return (r) => {
        const s = r.loaded,
            o = r.lengthComputable ? r.total : void 0,
            a = s - n,
            c = i(a),
            u = s <= o;
        n = s;
        const l = {
            loaded: s,
            total: o,
            progress: o ? s / o : void 0,
            bytes: a,
            rate: c || void 0,
            estimated: c && o && u ? (o - s) / c : void 0,
            event: r,
        };
        (l[e ? "download" : "upload"] = !0), t(l);
    };
}
const Xa = typeof XMLHttpRequest < "u",
    Ya =
        Xa &&
        function (t) {
            return new Promise(function (n, i) {
                let r = t.data;
                const s = et.from(t.headers).normalize();
                let { responseType: o, withXSRFToken: a } = t,
                    c;
                function u() {
                    t.cancelToken && t.cancelToken.unsubscribe(c),
                        t.signal && t.signal.removeEventListener("abort", c);
                }
                let l;
                if (f.isFormData(r)) {
                    if (
                        G.hasStandardBrowserEnv ||
                        G.hasStandardBrowserWebWorkerEnv
                    )
                        s.setContentType(!1);
                    else if ((l = s.getContentType()) !== !1) {
                        const [h, ...p] = l
                            ? l
                                  .split(";")
                                  .map((m) => m.trim())
                                  .filter(Boolean)
                            : [];
                        s.setContentType(
                            [h || "multipart/form-data", ...p].join("; ")
                        );
                    }
                }
                let d = new XMLHttpRequest();
                if (t.auth) {
                    const h = t.auth.username || "",
                        p = t.auth.password
                            ? unescape(encodeURIComponent(t.auth.password))
                            : "";
                    s.set("Authorization", "Basic " + btoa(h + ":" + p));
                }
                const _ = ts(t.baseURL, t.url);
                d.open(
                    t.method.toUpperCase(),
                    Xr(_, t.params, t.paramsSerializer),
                    !0
                ),
                    (d.timeout = t.timeout);
                function g() {
                    if (!d) return;
                    const h = et.from(
                            "getAllResponseHeaders" in d &&
                                d.getAllResponseHeaders()
                        ),
                        m = {
                            data:
                                !o || o === "text" || o === "json"
                                    ? d.responseText
                                    : d.response,
                            status: d.status,
                            statusText: d.statusText,
                            headers: h,
                            config: t,
                            request: d,
                        };
                    $a(
                        function (w) {
                            n(w), u();
                        },
                        function (w) {
                            i(w), u();
                        },
                        m
                    ),
                        (d = null);
                }
                if (
                    ("onloadend" in d
                        ? (d.onloadend = g)
                        : (d.onreadystatechange = function () {
                              !d ||
                                  d.readyState !== 4 ||
                                  (d.status === 0 &&
                                      !(
                                          d.responseURL &&
                                          d.responseURL.indexOf("file:") === 0
                                      )) ||
                                  setTimeout(g);
                          }),
                    (d.onabort = function () {
                        d &&
                            (i(new O("Request aborted", O.ECONNABORTED, t, d)),
                            (d = null));
                    }),
                    (d.onerror = function () {
                        i(new O("Network Error", O.ERR_NETWORK, t, d)),
                            (d = null);
                    }),
                    (d.ontimeout = function () {
                        let p = t.timeout
                            ? "timeout of " + t.timeout + "ms exceeded"
                            : "timeout exceeded";
                        const m = t.transitional || Yr;
                        t.timeoutErrorMessage && (p = t.timeoutErrorMessage),
                            i(
                                new O(
                                    p,
                                    m.clarifyTimeoutError
                                        ? O.ETIMEDOUT
                                        : O.ECONNABORTED,
                                    t,
                                    d
                                )
                            ),
                            (d = null);
                    }),
                    G.hasStandardBrowserEnv &&
                        (a && f.isFunction(a) && (a = a(t)),
                        a || (a !== !1 && Ka(_))))
                ) {
                    const h =
                        t.xsrfHeaderName &&
                        t.xsrfCookieName &&
                        qa.read(t.xsrfCookieName);
                    h && s.set(t.xsrfHeaderName, h);
                }
                r === void 0 && s.setContentType(null),
                    "setRequestHeader" in d &&
                        f.forEach(s.toJSON(), function (p, m) {
                            d.setRequestHeader(m, p);
                        }),
                    f.isUndefined(t.withCredentials) ||
                        (d.withCredentials = !!t.withCredentials),
                    o && o !== "json" && (d.responseType = t.responseType),
                    typeof t.onDownloadProgress == "function" &&
                        d.addEventListener(
                            "progress",
                            sr(t.onDownloadProgress, !0)
                        ),
                    typeof t.onUploadProgress == "function" &&
                        d.upload &&
                        d.upload.addEventListener(
                            "progress",
                            sr(t.onUploadProgress)
                        ),
                    (t.cancelToken || t.signal) &&
                        ((c = (h) => {
                            d &&
                                (i(!h || h.type ? new ae(null, t, d) : h),
                                d.abort(),
                                (d = null));
                        }),
                        t.cancelToken && t.cancelToken.subscribe(c),
                        t.signal &&
                            (t.signal.aborted
                                ? c()
                                : t.signal.addEventListener("abort", c)));
                const v = Wa(_);
                if (v && G.protocols.indexOf(v) === -1) {
                    i(
                        new O(
                            "Unsupported protocol " + v + ":",
                            O.ERR_BAD_REQUEST,
                            t
                        )
                    );
                    return;
                }
                d.send(r || null);
            });
        },
    Sn = { http: ba, xhr: Ya };
f.forEach(Sn, (t, e) => {
    if (t) {
        try {
            Object.defineProperty(t, "name", { value: e });
        } catch {}
        Object.defineProperty(t, "adapterName", { value: e });
    }
});
const or = (t) => `- ${t}`,
    Ga = (t) => f.isFunction(t) || t === null || t === !1,
    es = {
        getAdapter: (t) => {
            t = f.isArray(t) ? t : [t];
            const { length: e } = t;
            let n, i;
            const r = {};
            for (let s = 0; s < e; s++) {
                n = t[s];
                let o;
                if (
                    ((i = n),
                    !Ga(n) &&
                        ((i = Sn[(o = String(n)).toLowerCase()]), i === void 0))
                )
                    throw new O(`Unknown adapter '${o}'`);
                if (i) break;
                r[o || "#" + s] = i;
            }
            if (!i) {
                const s = Object.entries(r).map(
                    ([a, c]) =>
                        `adapter ${a} ` +
                        (c === !1
                            ? "is not supported by the environment"
                            : "is not available in the build")
                );
                let o = e
                    ? s.length > 1
                        ? `since :
` +
                          s.map(or).join(`
`)
                        : " " + or(s[0])
                    : "as no adapter specified";
                throw new O(
                    "There is no suitable adapter to dispatch the request " + o,
                    "ERR_NOT_SUPPORT"
                );
            }
            return i;
        },
        adapters: Sn,
    };
function mn(t) {
    if (
        (t.cancelToken && t.cancelToken.throwIfRequested(),
        t.signal && t.signal.aborted)
    )
        throw new ae(null, t);
}
function ar(t) {
    return (
        mn(t),
        (t.headers = et.from(t.headers)),
        (t.data = gn.call(t, t.transformRequest)),
        ["post", "put", "patch"].indexOf(t.method) !== -1 &&
            t.headers.setContentType("application/x-www-form-urlencoded", !1),
        es
            .getAdapter(t.adapter || ti.adapter)(t)
            .then(
                function (i) {
                    return (
                        mn(t),
                        (i.data = gn.call(t, t.transformResponse, i)),
                        (i.headers = et.from(i.headers)),
                        i
                    );
                },
                function (i) {
                    return (
                        Zr(i) ||
                            (mn(t),
                            i &&
                                i.response &&
                                ((i.response.data = gn.call(
                                    t,
                                    t.transformResponse,
                                    i.response
                                )),
                                (i.response.headers = et.from(
                                    i.response.headers
                                )))),
                        Promise.reject(i)
                    );
                }
            )
    );
}
const cr = (t) => (t instanceof et ? t.toJSON() : t);
function Pt(t, e) {
    e = e || {};
    const n = {};
    function i(u, l, d) {
        return f.isPlainObject(u) && f.isPlainObject(l)
            ? f.merge.call({ caseless: d }, u, l)
            : f.isPlainObject(l)
            ? f.merge({}, l)
            : f.isArray(l)
            ? l.slice()
            : l;
    }
    function r(u, l, d) {
        if (f.isUndefined(l)) {
            if (!f.isUndefined(u)) return i(void 0, u, d);
        } else return i(u, l, d);
    }
    function s(u, l) {
        if (!f.isUndefined(l)) return i(void 0, l);
    }
    function o(u, l) {
        if (f.isUndefined(l)) {
            if (!f.isUndefined(u)) return i(void 0, u);
        } else return i(void 0, l);
    }
    function a(u, l, d) {
        if (d in e) return i(u, l);
        if (d in t) return i(void 0, u);
    }
    const c = {
        url: s,
        method: s,
        data: s,
        baseURL: o,
        transformRequest: o,
        transformResponse: o,
        paramsSerializer: o,
        timeout: o,
        timeoutMessage: o,
        withCredentials: o,
        withXSRFToken: o,
        adapter: o,
        responseType: o,
        xsrfCookieName: o,
        xsrfHeaderName: o,
        onUploadProgress: o,
        onDownloadProgress: o,
        decompress: o,
        maxContentLength: o,
        maxBodyLength: o,
        beforeRedirect: o,
        transport: o,
        httpAgent: o,
        httpsAgent: o,
        cancelToken: o,
        socketPath: o,
        responseEncoding: o,
        validateStatus: a,
        headers: (u, l) => r(cr(u), cr(l), !0),
    };
    return (
        f.forEach(Object.keys(Object.assign({}, t, e)), function (l) {
            const d = c[l] || r,
                _ = d(t[l], e[l], l);
            (f.isUndefined(_) && d !== a) || (n[l] = _);
        }),
        n
    );
}
const ns = "1.6.2",
    ei = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
    (t, e) => {
        ei[t] = function (i) {
            return typeof i === t || "a" + (e < 1 ? "n " : " ") + t;
        };
    }
);
const lr = {};
ei.transitional = function (e, n, i) {
    function r(s, o) {
        return (
            "[Axios v" +
            ns +
            "] Transitional option '" +
            s +
            "'" +
            o +
            (i ? ". " + i : "")
        );
    }
    return (s, o, a) => {
        if (e === !1)
            throw new O(
                r(o, " has been removed" + (n ? " in " + n : "")),
                O.ERR_DEPRECATED
            );
        return (
            n &&
                !lr[o] &&
                ((lr[o] = !0),
                console.warn(
                    r(
                        o,
                        " has been deprecated since v" +
                            n +
                            " and will be removed in the near future"
                    )
                )),
            e ? e(s, o, a) : !0
        );
    };
};
function Qa(t, e, n) {
    if (typeof t != "object")
        throw new O("options must be an object", O.ERR_BAD_OPTION_VALUE);
    const i = Object.keys(t);
    let r = i.length;
    for (; r-- > 0; ) {
        const s = i[r],
            o = e[s];
        if (o) {
            const a = t[s],
                c = a === void 0 || o(a, s, t);
            if (c !== !0)
                throw new O(
                    "option " + s + " must be " + c,
                    O.ERR_BAD_OPTION_VALUE
                );
            continue;
        }
        if (n !== !0) throw new O("Unknown option " + s, O.ERR_BAD_OPTION);
    }
}
const In = { assertOptions: Qa, validators: ei },
    ot = In.validators;
class De {
    constructor(e) {
        (this.defaults = e),
            (this.interceptors = { request: new ir(), response: new ir() });
    }
    request(e, n) {
        typeof e == "string" ? ((n = n || {}), (n.url = e)) : (n = e || {}),
            (n = Pt(this.defaults, n));
        const { transitional: i, paramsSerializer: r, headers: s } = n;
        i !== void 0 &&
            In.assertOptions(
                i,
                {
                    silentJSONParsing: ot.transitional(ot.boolean),
                    forcedJSONParsing: ot.transitional(ot.boolean),
                    clarifyTimeoutError: ot.transitional(ot.boolean),
                },
                !1
            ),
            r != null &&
                (f.isFunction(r)
                    ? (n.paramsSerializer = { serialize: r })
                    : In.assertOptions(
                          r,
                          { encode: ot.function, serialize: ot.function },
                          !0
                      )),
            (n.method = (
                n.method ||
                this.defaults.method ||
                "get"
            ).toLowerCase());
        let o = s && f.merge(s.common, s[n.method]);
        s &&
            f.forEach(
                ["delete", "get", "head", "post", "put", "patch", "common"],
                (v) => {
                    delete s[v];
                }
            ),
            (n.headers = et.concat(o, s));
        const a = [];
        let c = !0;
        this.interceptors.request.forEach(function (h) {
            (typeof h.runWhen == "function" && h.runWhen(n) === !1) ||
                ((c = c && h.synchronous), a.unshift(h.fulfilled, h.rejected));
        });
        const u = [];
        this.interceptors.response.forEach(function (h) {
            u.push(h.fulfilled, h.rejected);
        });
        let l,
            d = 0,
            _;
        if (!c) {
            const v = [ar.bind(this), void 0];
            for (
                v.unshift.apply(v, a),
                    v.push.apply(v, u),
                    _ = v.length,
                    l = Promise.resolve(n);
                d < _;

            )
                l = l.then(v[d++], v[d++]);
            return l;
        }
        _ = a.length;
        let g = n;
        for (d = 0; d < _; ) {
            const v = a[d++],
                h = a[d++];
            try {
                g = v(g);
            } catch (p) {
                h.call(this, p);
                break;
            }
        }
        try {
            l = ar.call(this, g);
        } catch (v) {
            return Promise.reject(v);
        }
        for (d = 0, _ = u.length; d < _; ) l = l.then(u[d++], u[d++]);
        return l;
    }
    getUri(e) {
        e = Pt(this.defaults, e);
        const n = ts(e.baseURL, e.url);
        return Xr(n, e.params, e.paramsSerializer);
    }
}
f.forEach(["delete", "get", "head", "options"], function (e) {
    De.prototype[e] = function (n, i) {
        return this.request(
            Pt(i || {}, { method: e, url: n, data: (i || {}).data })
        );
    };
});
f.forEach(["post", "put", "patch"], function (e) {
    function n(i) {
        return function (s, o, a) {
            return this.request(
                Pt(a || {}, {
                    method: e,
                    headers: i ? { "Content-Type": "multipart/form-data" } : {},
                    url: s,
                    data: o,
                })
            );
        };
    }
    (De.prototype[e] = n()), (De.prototype[e + "Form"] = n(!0));
});
const Te = De;
class ni {
    constructor(e) {
        if (typeof e != "function")
            throw new TypeError("executor must be a function.");
        let n;
        this.promise = new Promise(function (s) {
            n = s;
        });
        const i = this;
        this.promise.then((r) => {
            if (!i._listeners) return;
            let s = i._listeners.length;
            for (; s-- > 0; ) i._listeners[s](r);
            i._listeners = null;
        }),
            (this.promise.then = (r) => {
                let s;
                const o = new Promise((a) => {
                    i.subscribe(a), (s = a);
                }).then(r);
                return (
                    (o.cancel = function () {
                        i.unsubscribe(s);
                    }),
                    o
                );
            }),
            e(function (s, o, a) {
                i.reason || ((i.reason = new ae(s, o, a)), n(i.reason));
            });
    }
    throwIfRequested() {
        if (this.reason) throw this.reason;
    }
    subscribe(e) {
        if (this.reason) {
            e(this.reason);
            return;
        }
        this._listeners ? this._listeners.push(e) : (this._listeners = [e]);
    }
    unsubscribe(e) {
        if (!this._listeners) return;
        const n = this._listeners.indexOf(e);
        n !== -1 && this._listeners.splice(n, 1);
    }
    static source() {
        let e;
        return {
            token: new ni(function (r) {
                e = r;
            }),
            cancel: e,
        };
    }
}
const Za = ni;
function tc(t) {
    return function (n) {
        return t.apply(null, n);
    };
}
function ec(t) {
    return f.isObject(t) && t.isAxiosError === !0;
}
const Ln = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511,
};
Object.entries(Ln).forEach(([t, e]) => {
    Ln[e] = t;
});
const nc = Ln;
function is(t) {
    const e = new Te(t),
        n = Mr(Te.prototype.request, e);
    return (
        f.extend(n, Te.prototype, e, { allOwnKeys: !0 }),
        f.extend(n, e, null, { allOwnKeys: !0 }),
        (n.create = function (r) {
            return is(Pt(t, r));
        }),
        n
    );
}
const T = is(ti);
T.Axios = Te;
T.CanceledError = ae;
T.CancelToken = Za;
T.isCancel = Zr;
T.VERSION = ns;
T.toFormData = Ze;
T.AxiosError = O;
T.Cancel = T.CanceledError;
T.all = function (e) {
    return Promise.all(e);
};
T.spread = tc;
T.isAxiosError = ec;
T.mergeConfig = Pt;
T.AxiosHeaders = et;
T.formToJSON = (t) => Qr(f.isHTMLForm(t) ? new FormData(t) : t);
T.getAdapter = es.getAdapter;
T.HttpStatusCode = nc;
T.default = T;
const ic = T;
window.axios = ic;
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
$(document).ready(function () {
    $(".show-password").on("click", function () {
        const t = $(this).siblings("input").eq(0),
            e = $(this).children().eq(0);
        t.attr("type") === "password"
            ? (t.attr("type", "text"),
              e.removeClass("fa-eye-slash"),
              e.addClass("fa-eye"))
            : (t.attr("type", "password"),
              e.removeClass("fa-eye"),
              e.addClass("fa-eye-slash"));
    });
});
var rc = (function () {
        function t(e, n) {
            n === void 0 && (n = []),
                (this._eventType = e),
                (this._eventFunctions = n);
        }
        return (
            (t.prototype.init = function () {
                var e = this;
                this._eventFunctions.forEach(function (n) {
                    typeof window < "u" &&
                        window.addEventListener(e._eventType, n);
                });
            }),
            t
        );
    })(),
    sc = (function () {
        function t() {
            this._instances = {
                Accordion: {},
                Carousel: {},
                Collapse: {},
                Dial: {},
                Dismiss: {},
                Drawer: {},
                Dropdown: {},
                Modal: {},
                Popover: {},
                Tabs: {},
                Tooltip: {},
                InputCounter: {},
            };
        }
        return (
            (t.prototype.addInstance = function (e, n, i, r) {
                if ((r === void 0 && (r = !1), !this._instances[e]))
                    return (
                        console.warn(
                            "Flowbite: Component ".concat(e, " does not exist.")
                        ),
                        !1
                    );
                if (this._instances[e][i] && !r) {
                    console.warn(
                        "Flowbite: Instance with ID ".concat(
                            i,
                            " already exists."
                        )
                    );
                    return;
                }
                r &&
                    this._instances[e][i] &&
                    this._instances[e][i].destroyAndRemoveInstance(),
                    (this._instances[e][i || this._generateRandomId()] = n);
            }),
            (t.prototype.getAllInstances = function () {
                return this._instances;
            }),
            (t.prototype.getInstances = function (e) {
                return this._instances[e]
                    ? this._instances[e]
                    : (console.warn(
                          "Flowbite: Component ".concat(e, " does not exist.")
                      ),
                      !1);
            }),
            (t.prototype.getInstance = function (e, n) {
                if (this._componentAndInstanceCheck(e, n)) {
                    if (!this._instances[e][n]) {
                        console.warn(
                            "Flowbite: Instance with ID ".concat(
                                n,
                                " does not exist."
                            )
                        );
                        return;
                    }
                    return this._instances[e][n];
                }
            }),
            (t.prototype.destroyAndRemoveInstance = function (e, n) {
                this._componentAndInstanceCheck(e, n) &&
                    (this.destroyInstanceObject(e, n),
                    this.removeInstance(e, n));
            }),
            (t.prototype.removeInstance = function (e, n) {
                this._componentAndInstanceCheck(e, n) &&
                    delete this._instances[e][n];
            }),
            (t.prototype.destroyInstanceObject = function (e, n) {
                this._componentAndInstanceCheck(e, n) &&
                    this._instances[e][n].destroy();
            }),
            (t.prototype.instanceExists = function (e, n) {
                return !(!this._instances[e] || !this._instances[e][n]);
            }),
            (t.prototype._generateRandomId = function () {
                return Math.random().toString(36).substr(2, 9);
            }),
            (t.prototype._componentAndInstanceCheck = function (e, n) {
                return this._instances[e]
                    ? this._instances[e][n]
                        ? !0
                        : (console.warn(
                              "Flowbite: Instance with ID ".concat(
                                  n,
                                  " does not exist."
                              )
                          ),
                          !1)
                    : (console.warn(
                          "Flowbite: Component ".concat(e, " does not exist.")
                      ),
                      !1);
            }),
            t
        );
    })(),
    x = new sc();
typeof window < "u" && (window.FlowbiteInstances = x);
var je =
        (globalThis && globalThis.__assign) ||
        function () {
            return (
                (je =
                    Object.assign ||
                    function (t) {
                        for (var e, n = 1, i = arguments.length; n < i; n++) {
                            e = arguments[n];
                            for (var r in e)
                                Object.prototype.hasOwnProperty.call(e, r) &&
                                    (t[r] = e[r]);
                        }
                        return t;
                    }),
                je.apply(this, arguments)
            );
        },
    He = {
        alwaysOpen: !1,
        activeClasses:
            "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white",
        inactiveClasses: "text-gray-500 dark:text-gray-400",
        onOpen: function () {},
        onClose: function () {},
        onToggle: function () {},
    },
    oc = { id: null, override: !0 },
    rs = (function () {
        function t(e, n, i, r) {
            e === void 0 && (e = null),
                n === void 0 && (n = []),
                i === void 0 && (i = He),
                r === void 0 && (r = oc),
                (this._instanceId = r.id ? r.id : e.id),
                (this._accordionEl = e),
                (this._items = n),
                (this._options = je(je({}, He), i)),
                (this._initialized = !1),
                this.init(),
                x.addInstance("Accordion", this, this._instanceId, r.override);
        }
        return (
            (t.prototype.init = function () {
                var e = this;
                this._items.length &&
                    !this._initialized &&
                    (this._items.forEach(function (n) {
                        n.active && e.open(n.id);
                        var i = function () {
                            e.toggle(n.id);
                        };
                        n.triggerEl.addEventListener("click", i),
                            (n.clickHandler = i);
                    }),
                    (this._initialized = !0));
            }),
            (t.prototype.destroy = function () {
                this._items.length &&
                    this._initialized &&
                    (this._items.forEach(function (e) {
                        e.triggerEl.removeEventListener(
                            "click",
                            e.clickHandler
                        ),
                            delete e.clickHandler;
                    }),
                    (this._initialized = !1));
            }),
            (t.prototype.removeInstance = function () {
                x.removeInstance("Accordion", this._instanceId);
            }),
            (t.prototype.destroyAndRemoveInstance = function () {
                this.destroy(), this.removeInstance();
            }),
            (t.prototype.getItem = function (e) {
                return this._items.filter(function (n) {
                    return n.id === e;
                })[0];
            }),
            (t.prototype.open = function (e) {
                var n,
                    i,
                    r = this,
                    s = this.getItem(e);
                this._options.alwaysOpen ||
                    this._items.map(function (o) {
                        var a, c;
                        o !== s &&
                            ((a = o.triggerEl.classList).remove.apply(
                                a,
                                r._options.activeClasses.split(" ")
                            ),
                            (c = o.triggerEl.classList).add.apply(
                                c,
                                r._options.inactiveClasses.split(" ")
                            ),
                            o.targetEl.classList.add("hidden"),
                            o.triggerEl.setAttribute("aria-expanded", "false"),
                            (o.active = !1),
                            o.iconEl &&
                                o.iconEl.classList.remove("rotate-180"));
                    }),
                    (n = s.triggerEl.classList).add.apply(
                        n,
                        this._options.activeClasses.split(" ")
                    ),
                    (i = s.triggerEl.classList).remove.apply(
                        i,
                        this._options.inactiveClasses.split(" ")
                    ),
                    s.triggerEl.setAttribute("aria-expanded", "true"),
                    s.targetEl.classList.remove("hidden"),
                    (s.active = !0),
                    s.iconEl && s.iconEl.classList.add("rotate-180"),
                    this._options.onOpen(this, s);
            }),
            (t.prototype.toggle = function (e) {
                var n = this.getItem(e);
                n.active ? this.close(e) : this.open(e),
                    this._options.onToggle(this, n);
            }),
            (t.prototype.close = function (e) {
                var n,
                    i,
                    r = this.getItem(e);
                (n = r.triggerEl.classList).remove.apply(
                    n,
                    this._options.activeClasses.split(" ")
                ),
                    (i = r.triggerEl.classList).add.apply(
                        i,
                        this._options.inactiveClasses.split(" ")
                    ),
                    r.targetEl.classList.add("hidden"),
                    r.triggerEl.setAttribute("aria-expanded", "false"),
                    (r.active = !1),
                    r.iconEl && r.iconEl.classList.remove("rotate-180"),
                    this._options.onClose(this, r);
            }),
            t
        );
    })();
function ii() {
    document.querySelectorAll("[data-accordion]").forEach(function (t) {
        var e = t.getAttribute("data-accordion"),
            n = t.getAttribute("data-active-classes"),
            i = t.getAttribute("data-inactive-classes"),
            r = [];
        t.querySelectorAll("[data-accordion-target]").forEach(function (s) {
            if (s.closest("[data-accordion]") === t) {
                var o = {
                    id: s.getAttribute("data-accordion-target"),
                    triggerEl: s,
                    targetEl: document.querySelector(
                        s.getAttribute("data-accordion-target")
                    ),
                    iconEl: s.querySelector("[data-accordion-icon]"),
                    active: s.getAttribute("aria-expanded") === "true",
                };
                r.push(o);
            }
        }),
            new rs(t, r, {
                alwaysOpen: e === "open",
                activeClasses: n || He.activeClasses,
                inactiveClasses: i || He.inactiveClasses,
            });
    });
}
typeof window < "u" && ((window.Accordion = rs), (window.initAccordions = ii));
var Me =
        (globalThis && globalThis.__assign) ||
        function () {
            return (
                (Me =
                    Object.assign ||
                    function (t) {
                        for (var e, n = 1, i = arguments.length; n < i; n++) {
                            e = arguments[n];
                            for (var r in e)
                                Object.prototype.hasOwnProperty.call(e, r) &&
                                    (t[r] = e[r]);
                        }
                        return t;
                    }),
                Me.apply(this, arguments)
            );
        },
    ur = {
        onCollapse: function () {},
        onExpand: function () {},
        onToggle: function () {},
    },
    ac = { id: null, override: !0 },
    Cn = (function () {
        function t(e, n, i, r) {
            e === void 0 && (e = null),
                n === void 0 && (n = null),
                i === void 0 && (i = ur),
                r === void 0 && (r = ac),
                (this._instanceId = r.id ? r.id : e.id),
                (this._targetEl = e),
                (this._triggerEl = n),
                (this._options = Me(Me({}, ur), i)),
                (this._visible = !1),
                (this._initialized = !1),
                this.init(),
                x.addInstance("Collapse", this, this._instanceId, r.override);
        }
        return (
            (t.prototype.init = function () {
                var e = this;
                this._triggerEl &&
                    this._targetEl &&
                    !this._initialized &&
                    (this._triggerEl.hasAttribute("aria-expanded")
                        ? (this._visible =
                              this._triggerEl.getAttribute("aria-expanded") ===
                              "true")
                        : (this._visible =
                              !this._targetEl.classList.contains("hidden")),
                    (this._clickHandler = function () {
                        e.toggle();
                    }),
                    this._triggerEl.addEventListener(
                        "click",
                        this._clickHandler
                    ),
                    (this._initialized = !0));
            }),
            (t.prototype.destroy = function () {
                this._triggerEl &&
                    this._initialized &&
                    (this._triggerEl.removeEventListener(
                        "click",
                        this._clickHandler
                    ),
                    (this._initialized = !1));
            }),
            (t.prototype.removeInstance = function () {
                x.removeInstance("Collapse", this._instanceId);
            }),
            (t.prototype.destroyAndRemoveInstance = function () {
                this.destroy(), this.removeInstance();
            }),
            (t.prototype.collapse = function () {
                this._targetEl.classList.add("hidden"),
                    this._triggerEl &&
                        this._triggerEl.setAttribute("aria-expanded", "false"),
                    (this._visible = !1),
                    this._options.onCollapse(this);
            }),
            (t.prototype.expand = function () {
                this._targetEl.classList.remove("hidden"),
                    this._triggerEl &&
                        this._triggerEl.setAttribute("aria-expanded", "true"),
                    (this._visible = !0),
                    this._options.onExpand(this);
            }),
            (t.prototype.toggle = function () {
                this._visible ? this.collapse() : this.expand(),
                    this._options.onToggle(this);
            }),
            t
        );
    })();
function ri() {
    document.querySelectorAll("[data-collapse-toggle]").forEach(function (t) {
        var e = t.getAttribute("data-collapse-toggle"),
            n = document.getElementById(e);
        n
            ? x.instanceExists("Collapse", n.getAttribute("id"))
                ? new Cn(
                      n,
                      t,
                      {},
                      { id: n.getAttribute("id") + "_" + x._generateRandomId() }
                  )
                : new Cn(n, t)
            : console.error(
                  'The target element with id "'.concat(
                      e,
                      '" does not exist. Please check the data-collapse-toggle attribute.'
                  )
              );
    });
}
typeof window < "u" && ((window.Collapse = Cn), (window.initCollapses = ri));
var Et =
        (globalThis && globalThis.__assign) ||
        function () {
            return (
                (Et =
                    Object.assign ||
                    function (t) {
                        for (var e, n = 1, i = arguments.length; n < i; n++) {
                            e = arguments[n];
                            for (var r in e)
                                Object.prototype.hasOwnProperty.call(e, r) &&
                                    (t[r] = e[r]);
                        }
                        return t;
                    }),
                Et.apply(this, arguments)
            );
        },
    ke = {
        defaultPosition: 0,
        indicators: {
            items: [],
            activeClasses: "bg-white dark:bg-gray-800",
            inactiveClasses:
                "bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800",
        },
        interval: 3e3,
        onNext: function () {},
        onPrev: function () {},
        onChange: function () {},
    },
    cc = { id: null, override: !0 },
    ss = (function () {
        function t(e, n, i, r) {
            e === void 0 && (e = null),
                n === void 0 && (n = []),
                i === void 0 && (i = ke),
                r === void 0 && (r = cc),
                (this._instanceId = r.id ? r.id : e.id),
                (this._carouselEl = e),
                (this._items = n),
                (this._options = Et(Et(Et({}, ke), i), {
                    indicators: Et(Et({}, ke.indicators), i.indicators),
                })),
                (this._activeItem = this.getItem(
                    this._options.defaultPosition
                )),
                (this._indicators = this._options.indicators.items),
                (this._intervalDuration = this._options.interval),
                (this._intervalInstance = null),
                (this._initialized = !1),
                this.init(),
                x.addInstance("Carousel", this, this._instanceId, r.override);
        }
        return (
            (t.prototype.init = function () {
                var e = this;
                this._items.length &&
                    !this._initialized &&
                    (this._items.map(function (n) {
                        n.el.classList.add(
                            "absolute",
                            "inset-0",
                            "transition-transform",
                            "transform"
                        );
                    }),
                    this._getActiveItem()
                        ? this.slideTo(this._getActiveItem().position)
                        : this.slideTo(0),
                    this._indicators.map(function (n, i) {
                        n.el.addEventListener("click", function () {
                            e.slideTo(i);
                        });
                    }),
                    (this._initialized = !0));
            }),
            (t.prototype.destroy = function () {
                this._initialized && (this._initialized = !1);
            }),
            (t.prototype.removeInstance = function () {
                x.removeInstance("Carousel", this._instanceId);
            }),
            (t.prototype.destroyAndRemoveInstance = function () {
                this.destroy(), this.removeInstance();
            }),
            (t.prototype.getItem = function (e) {
                return this._items[e];
            }),
            (t.prototype.slideTo = function (e) {
                var n = this._items[e],
                    i = {
                        left:
                            n.position === 0
                                ? this._items[this._items.length - 1]
                                : this._items[n.position - 1],
                        middle: n,
                        right:
                            n.position === this._items.length - 1
                                ? this._items[0]
                                : this._items[n.position + 1],
                    };
                this._rotate(i),
                    this._setActiveItem(n),
                    this._intervalInstance && (this.pause(), this.cycle()),
                    this._options.onChange(this);
            }),
            (t.prototype.next = function () {
                var e = this._getActiveItem(),
                    n = null;
                e.position === this._items.length - 1
                    ? (n = this._items[0])
                    : (n = this._items[e.position + 1]),
                    this.slideTo(n.position),
                    this._options.onNext(this);
            }),
            (t.prototype.prev = function () {
                var e = this._getActiveItem(),
                    n = null;
                e.position === 0
                    ? (n = this._items[this._items.length - 1])
                    : (n = this._items[e.position - 1]),
                    this.slideTo(n.position),
                    this._options.onPrev(this);
            }),
            (t.prototype._rotate = function (e) {
                this._items.map(function (n) {
                    n.el.classList.add("hidden");
                }),
                    e.left.el.classList.remove(
                        "-translate-x-full",
                        "translate-x-full",
                        "translate-x-0",
                        "hidden",
                        "z-20"
                    ),
                    e.left.el.classList.add("-translate-x-full", "z-10"),
                    e.middle.el.classList.remove(
                        "-translate-x-full",
                        "translate-x-full",
                        "translate-x-0",
                        "hidden",
                        "z-10"
                    ),
                    e.middle.el.classList.add("translate-x-0", "z-20"),
                    e.right.el.classList.remove(
                        "-translate-x-full",
                        "translate-x-full",
                        "translate-x-0",
                        "hidden",
                        "z-20"
                    ),
                    e.right.el.classList.add("translate-x-full", "z-10");
            }),
            (t.prototype.cycle = function () {
                var e = this;
                typeof window < "u" &&
                    (this._intervalInstance = window.setInterval(function () {
                        e.next();
                    }, this._intervalDuration));
            }),
            (t.prototype.pause = function () {
                clearInterval(this._intervalInstance);
            }),
            (t.prototype._getActiveItem = function () {
                return this._activeItem;
            }),
            (t.prototype._setActiveItem = function (e) {
                var n,
                    i,
                    r = this;
                this._activeItem = e;
                var s = e.position;
                this._indicators.length &&
                    (this._indicators.map(function (o) {
                        var a, c;
                        o.el.setAttribute("aria-current", "false"),
                            (a = o.el.classList).remove.apply(
                                a,
                                r._options.indicators.activeClasses.split(" ")
                            ),
                            (c = o.el.classList).add.apply(
                                c,
                                r._options.indicators.inactiveClasses.split(" ")
                            );
                    }),
                    (n = this._indicators[s].el.classList).add.apply(
                        n,
                        this._options.indicators.activeClasses.split(" ")
                    ),
                    (i = this._indicators[s].el.classList).remove.apply(
                        i,
                        this._options.indicators.inactiveClasses.split(" ")
                    ),
                    this._indicators[s].el.setAttribute(
                        "aria-current",
                        "true"
                    ));
            }),
            t
        );
    })();
function si() {
    document.querySelectorAll("[data-carousel]").forEach(function (t) {
        var e = t.getAttribute("data-carousel-interval"),
            n = t.getAttribute("data-carousel") === "slide",
            i = [],
            r = 0;
        t.querySelectorAll("[data-carousel-item]").length &&
            Array.from(t.querySelectorAll("[data-carousel-item]")).map(
                function (u, l) {
                    i.push({ position: l, el: u }),
                        u.getAttribute("data-carousel-item") === "active" &&
                            (r = l);
                }
            );
        var s = [];
        t.querySelectorAll("[data-carousel-slide-to]").length &&
            Array.from(t.querySelectorAll("[data-carousel-slide-to]")).map(
                function (u) {
                    s.push({
                        position: parseInt(
                            u.getAttribute("data-carousel-slide-to")
                        ),
                        el: u,
                    });
                }
            );
        var o = new ss(t, i, {
            defaultPosition: r,
            indicators: { items: s },
            interval: e || ke.interval,
        });
        n && o.cycle();
        var a = t.querySelector("[data-carousel-next]"),
            c = t.querySelector("[data-carousel-prev]");
        a &&
            a.addEventListener("click", function () {
                o.next();
            }),
            c &&
                c.addEventListener("click", function () {
                    o.prev();
                });
    });
}
typeof window < "u" && ((window.Carousel = ss), (window.initCarousels = si));
var Ne =
        (globalThis && globalThis.__assign) ||
        function () {
            return (
                (Ne =
                    Object.assign ||
                    function (t) {
                        for (var e, n = 1, i = arguments.length; n < i; n++) {
                            e = arguments[n];
                            for (var r in e)
                                Object.prototype.hasOwnProperty.call(e, r) &&
                                    (t[r] = e[r]);
                        }
                        return t;
                    }),
                Ne.apply(this, arguments)
            );
        },
    dr = {
        transition: "transition-opacity",
        duration: 300,
        timing: "ease-out",
        onHide: function () {},
    },
    lc = { id: null, override: !0 },
    os = (function () {
        function t(e, n, i, r) {
            e === void 0 && (e = null),
                n === void 0 && (n = null),
                i === void 0 && (i = dr),
                r === void 0 && (r = lc),
                (this._instanceId = r.id ? r.id : e.id),
                (this._targetEl = e),
                (this._triggerEl = n),
                (this._options = Ne(Ne({}, dr), i)),
                (this._initialized = !1),
                this.init(),
                x.addInstance("Dismiss", this, this._instanceId, r.override);
        }
        return (
            (t.prototype.init = function () {
                var e = this;
                this._triggerEl &&
                    this._targetEl &&
                    !this._initialized &&
                    ((this._clickHandler = function () {
                        e.hide();
                    }),
                    this._triggerEl.addEventListener(
                        "click",
                        this._clickHandler
                    ),
                    (this._initialized = !0));
            }),
            (t.prototype.destroy = function () {
                this._triggerEl &&
                    this._initialized &&
                    (this._triggerEl.removeEventListener(
                        "click",
                        this._clickHandler
                    ),
                    (this._initialized = !1));
            }),
            (t.prototype.removeInstance = function () {
                x.removeInstance("Dismiss", this._instanceId);
            }),
            (t.prototype.destroyAndRemoveInstance = function () {
                this.destroy(), this.removeInstance();
            }),
            (t.prototype.hide = function () {
                var e = this;
                this._targetEl.classList.add(
                    this._options.transition,
                    "duration-".concat(this._options.duration),
                    this._options.timing,
                    "opacity-0"
                ),
                    setTimeout(function () {
                        e._targetEl.classList.add("hidden");
                    }, this._options.duration),
                    this._options.onHide(this, this._targetEl);
            }),
            t
        );
    })();
function oi() {
    document.querySelectorAll("[data-dismiss-target]").forEach(function (t) {
        var e = t.getAttribute("data-dismiss-target"),
            n = document.querySelector(e);
        n
            ? new os(n, t)
            : console.error(
                  'The dismiss element with id "'.concat(
                      e,
                      '" does not exist. Please check the data-dismiss-target attribute.'
                  )
              );
    });
}
typeof window < "u" && ((window.Dismiss = os), (window.initDismisses = oi));
var M = "top",
    U = "bottom",
    V = "right",
    N = "left",
    ai = "auto",
    ce = [M, U, V, N],
    Rt = "start",
    ie = "end",
    uc = "clippingParents",
    as = "viewport",
    Kt = "popper",
    dc = "reference",
    fr = ce.reduce(function (t, e) {
        return t.concat([e + "-" + Rt, e + "-" + ie]);
    }, []),
    cs = [].concat(ce, [ai]).reduce(function (t, e) {
        return t.concat([e, e + "-" + Rt, e + "-" + ie]);
    }, []),
    fc = "beforeRead",
    pc = "read",
    hc = "afterRead",
    vc = "beforeMain",
    _c = "main",
    gc = "afterMain",
    mc = "beforeWrite",
    yc = "write",
    bc = "afterWrite",
    wc = [fc, pc, hc, vc, _c, gc, mc, yc, bc];
function Z(t) {
    return t ? (t.nodeName || "").toLowerCase() : null;
}
function F(t) {
    if (t == null) return window;
    if (t.toString() !== "[object Window]") {
        var e = t.ownerDocument;
        return (e && e.defaultView) || window;
    }
    return t;
}
function Tt(t) {
    var e = F(t).Element;
    return t instanceof e || t instanceof Element;
}
function q(t) {
    var e = F(t).HTMLElement;
    return t instanceof e || t instanceof HTMLElement;
}
function ci(t) {
    if (typeof ShadowRoot > "u") return !1;
    var e = F(t).ShadowRoot;
    return t instanceof e || t instanceof ShadowRoot;
}
function Ec(t) {
    var e = t.state;
    Object.keys(e.elements).forEach(function (n) {
        var i = e.styles[n] || {},
            r = e.attributes[n] || {},
            s = e.elements[n];
        !q(s) ||
            !Z(s) ||
            (Object.assign(s.style, i),
            Object.keys(r).forEach(function (o) {
                var a = r[o];
                a === !1
                    ? s.removeAttribute(o)
                    : s.setAttribute(o, a === !0 ? "" : a);
            }));
    });
}
function xc(t) {
    var e = t.state,
        n = {
            popper: {
                position: e.options.strategy,
                left: "0",
                top: "0",
                margin: "0",
            },
            arrow: { position: "absolute" },
            reference: {},
        };
    return (
        Object.assign(e.elements.popper.style, n.popper),
        (e.styles = n),
        e.elements.arrow && Object.assign(e.elements.arrow.style, n.arrow),
        function () {
            Object.keys(e.elements).forEach(function (i) {
                var r = e.elements[i],
                    s = e.attributes[i] || {},
                    o = Object.keys(
                        e.styles.hasOwnProperty(i) ? e.styles[i] : n[i]
                    ),
                    a = o.reduce(function (c, u) {
                        return (c[u] = ""), c;
                    }, {});
                !q(r) ||
                    !Z(r) ||
                    (Object.assign(r.style, a),
                    Object.keys(s).forEach(function (c) {
                        r.removeAttribute(c);
                    }));
            });
        }
    );
}
const Ac = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: Ec,
    effect: xc,
    requires: ["computeStyles"],
};
function Q(t) {
    return t.split("-")[0];
}
var Ot = Math.max,
    Be = Math.min,
    Dt = Math.round;
function Tn() {
    var t = navigator.userAgentData;
    return t != null && t.brands && Array.isArray(t.brands)
        ? t.brands
              .map(function (e) {
                  return e.brand + "/" + e.version;
              })
              .join(" ")
        : navigator.userAgent;
}
function ls() {
    return !/^((?!chrome|android).)*safari/i.test(Tn());
}
function jt(t, e, n) {
    e === void 0 && (e = !1), n === void 0 && (n = !1);
    var i = t.getBoundingClientRect(),
        r = 1,
        s = 1;
    e &&
        q(t) &&
        ((r = (t.offsetWidth > 0 && Dt(i.width) / t.offsetWidth) || 1),
        (s = (t.offsetHeight > 0 && Dt(i.height) / t.offsetHeight) || 1));
    var o = Tt(t) ? F(t) : window,
        a = o.visualViewport,
        c = !ls() && n,
        u = (i.left + (c && a ? a.offsetLeft : 0)) / r,
        l = (i.top + (c && a ? a.offsetTop : 0)) / s,
        d = i.width / r,
        _ = i.height / s;
    return {
        width: d,
        height: _,
        top: l,
        right: u + d,
        bottom: l + _,
        left: u,
        x: u,
        y: l,
    };
}
function li(t) {
    var e = jt(t),
        n = t.offsetWidth,
        i = t.offsetHeight;
    return (
        Math.abs(e.width - n) <= 1 && (n = e.width),
        Math.abs(e.height - i) <= 1 && (i = e.height),
        { x: t.offsetLeft, y: t.offsetTop, width: n, height: i }
    );
}
function us(t, e) {
    var n = e.getRootNode && e.getRootNode();
    if (t.contains(e)) return !0;
    if (n && ci(n)) {
        var i = e;
        do {
            if (i && t.isSameNode(i)) return !0;
            i = i.parentNode || i.host;
        } while (i);
    }
    return !1;
}
function nt(t) {
    return F(t).getComputedStyle(t);
}
function Oc(t) {
    return ["table", "td", "th"].indexOf(Z(t)) >= 0;
}
function vt(t) {
    return ((Tt(t) ? t.ownerDocument : t.document) || window.document)
        .documentElement;
}
function en(t) {
    return Z(t) === "html"
        ? t
        : t.assignedSlot || t.parentNode || (ci(t) ? t.host : null) || vt(t);
}
function pr(t) {
    return !q(t) || nt(t).position === "fixed" ? null : t.offsetParent;
}
function Sc(t) {
    var e = /firefox/i.test(Tn()),
        n = /Trident/i.test(Tn());
    if (n && q(t)) {
        var i = nt(t);
        if (i.position === "fixed") return null;
    }
    var r = en(t);
    for (ci(r) && (r = r.host); q(r) && ["html", "body"].indexOf(Z(r)) < 0; ) {
        var s = nt(r);
        if (
            s.transform !== "none" ||
            s.perspective !== "none" ||
            s.contain === "paint" ||
            ["transform", "perspective"].indexOf(s.willChange) !== -1 ||
            (e && s.willChange === "filter") ||
            (e && s.filter && s.filter !== "none")
        )
            return r;
        r = r.parentNode;
    }
    return null;
}
function le(t) {
    for (var e = F(t), n = pr(t); n && Oc(n) && nt(n).position === "static"; )
        n = pr(n);
    return n &&
        (Z(n) === "html" || (Z(n) === "body" && nt(n).position === "static"))
        ? e
        : n || Sc(t) || e;
}
function ui(t) {
    return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
}
function Yt(t, e, n) {
    return Ot(t, Be(e, n));
}
function Ic(t, e, n) {
    var i = Yt(t, e, n);
    return i > n ? n : i;
}
function ds() {
    return { top: 0, right: 0, bottom: 0, left: 0 };
}
function fs(t) {
    return Object.assign({}, ds(), t);
}
function ps(t, e) {
    return e.reduce(function (n, i) {
        return (n[i] = t), n;
    }, {});
}
var Lc = function (e, n) {
    return (
        (e =
            typeof e == "function"
                ? e(Object.assign({}, n.rects, { placement: n.placement }))
                : e),
        fs(typeof e != "number" ? e : ps(e, ce))
    );
};
function Cc(t) {
    var e,
        n = t.state,
        i = t.name,
        r = t.options,
        s = n.elements.arrow,
        o = n.modifiersData.popperOffsets,
        a = Q(n.placement),
        c = ui(a),
        u = [N, V].indexOf(a) >= 0,
        l = u ? "height" : "width";
    if (!(!s || !o)) {
        var d = Lc(r.padding, n),
            _ = li(s),
            g = c === "y" ? M : N,
            v = c === "y" ? U : V,
            h =
                n.rects.reference[l] +
                n.rects.reference[c] -
                o[c] -
                n.rects.popper[l],
            p = o[c] - n.rects.reference[c],
            m = le(s),
            b = m ? (c === "y" ? m.clientHeight || 0 : m.clientWidth || 0) : 0,
            w = h / 2 - p / 2,
            y = d[g],
            E = b - _[l] - d[v],
            A = b / 2 - _[l] / 2 + w,
            S = Yt(y, A, E),
            P = c;
        n.modifiersData[i] =
            ((e = {}), (e[P] = S), (e.centerOffset = S - A), e);
    }
}
function Tc(t) {
    var e = t.state,
        n = t.options,
        i = n.element,
        r = i === void 0 ? "[data-popper-arrow]" : i;
    r != null &&
        ((typeof r == "string" &&
            ((r = e.elements.popper.querySelector(r)), !r)) ||
            (us(e.elements.popper, r) && (e.elements.arrow = r)));
}
const kc = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: Cc,
    effect: Tc,
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"],
};
function Ht(t) {
    return t.split("-")[1];
}
var Pc = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function Rc(t, e) {
    var n = t.x,
        i = t.y,
        r = e.devicePixelRatio || 1;
    return { x: Dt(n * r) / r || 0, y: Dt(i * r) / r || 0 };
}
function hr(t) {
    var e,
        n = t.popper,
        i = t.popperRect,
        r = t.placement,
        s = t.variation,
        o = t.offsets,
        a = t.position,
        c = t.gpuAcceleration,
        u = t.adaptive,
        l = t.roundOffsets,
        d = t.isFixed,
        _ = o.x,
        g = _ === void 0 ? 0 : _,
        v = o.y,
        h = v === void 0 ? 0 : v,
        p = typeof l == "function" ? l({ x: g, y: h }) : { x: g, y: h };
    (g = p.x), (h = p.y);
    var m = o.hasOwnProperty("x"),
        b = o.hasOwnProperty("y"),
        w = N,
        y = M,
        E = window;
    if (u) {
        var A = le(n),
            S = "clientHeight",
            P = "clientWidth";
        if (
            (A === F(n) &&
                ((A = vt(n)),
                nt(A).position !== "static" &&
                    a === "absolute" &&
                    ((S = "scrollHeight"), (P = "scrollWidth"))),
            (A = A),
            r === M || ((r === N || r === V) && s === ie))
        ) {
            y = U;
            var C =
                d && A === E && E.visualViewport
                    ? E.visualViewport.height
                    : A[S];
            (h -= C - i.height), (h *= c ? 1 : -1);
        }
        if (r === N || ((r === M || r === U) && s === ie)) {
            w = V;
            var L =
                d && A === E && E.visualViewport
                    ? E.visualViewport.width
                    : A[P];
            (g -= L - i.width), (g *= c ? 1 : -1);
        }
    }
    var D = Object.assign({ position: a }, u && Pc),
        K = l === !0 ? Rc({ x: g, y: h }, F(n)) : { x: g, y: h };
    if (((g = K.x), (h = K.y), c)) {
        var j;
        return Object.assign(
            {},
            D,
            ((j = {}),
            (j[y] = b ? "0" : ""),
            (j[w] = m ? "0" : ""),
            (j.transform =
                (E.devicePixelRatio || 1) <= 1
                    ? "translate(" + g + "px, " + h + "px)"
                    : "translate3d(" + g + "px, " + h + "px, 0)"),
            j)
        );
    }
    return Object.assign(
        {},
        D,
        ((e = {}),
        (e[y] = b ? h + "px" : ""),
        (e[w] = m ? g + "px" : ""),
        (e.transform = ""),
        e)
    );
}
function Dc(t) {
    var e = t.state,
        n = t.options,
        i = n.gpuAcceleration,
        r = i === void 0 ? !0 : i,
        s = n.adaptive,
        o = s === void 0 ? !0 : s,
        a = n.roundOffsets,
        c = a === void 0 ? !0 : a,
        u = {
            placement: Q(e.placement),
            variation: Ht(e.placement),
            popper: e.elements.popper,
            popperRect: e.rects.popper,
            gpuAcceleration: r,
            isFixed: e.options.strategy === "fixed",
        };
    e.modifiersData.popperOffsets != null &&
        (e.styles.popper = Object.assign(
            {},
            e.styles.popper,
            hr(
                Object.assign({}, u, {
                    offsets: e.modifiersData.popperOffsets,
                    position: e.options.strategy,
                    adaptive: o,
                    roundOffsets: c,
                })
            )
        )),
        e.modifiersData.arrow != null &&
            (e.styles.arrow = Object.assign(
                {},
                e.styles.arrow,
                hr(
                    Object.assign({}, u, {
                        offsets: e.modifiersData.arrow,
                        position: "absolute",
                        adaptive: !1,
                        roundOffsets: c,
                    })
                )
            )),
        (e.attributes.popper = Object.assign({}, e.attributes.popper, {
            "data-popper-placement": e.placement,
        }));
}
const jc = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: Dc,
    data: {},
};
var ye = { passive: !0 };
function Hc(t) {
    var e = t.state,
        n = t.instance,
        i = t.options,
        r = i.scroll,
        s = r === void 0 ? !0 : r,
        o = i.resize,
        a = o === void 0 ? !0 : o,
        c = F(e.elements.popper),
        u = [].concat(e.scrollParents.reference, e.scrollParents.popper);
    return (
        s &&
            u.forEach(function (l) {
                l.addEventListener("scroll", n.update, ye);
            }),
        a && c.addEventListener("resize", n.update, ye),
        function () {
            s &&
                u.forEach(function (l) {
                    l.removeEventListener("scroll", n.update, ye);
                }),
                a && c.removeEventListener("resize", n.update, ye);
        }
    );
}
const Mc = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function () {},
    effect: Hc,
    data: {},
};
var Nc = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Pe(t) {
    return t.replace(/left|right|bottom|top/g, function (e) {
        return Nc[e];
    });
}
var Bc = { start: "end", end: "start" };
function vr(t) {
    return t.replace(/start|end/g, function (e) {
        return Bc[e];
    });
}
function di(t) {
    var e = F(t),
        n = e.pageXOffset,
        i = e.pageYOffset;
    return { scrollLeft: n, scrollTop: i };
}
function fi(t) {
    return jt(vt(t)).left + di(t).scrollLeft;
}
function Fc(t, e) {
    var n = F(t),
        i = vt(t),
        r = n.visualViewport,
        s = i.clientWidth,
        o = i.clientHeight,
        a = 0,
        c = 0;
    if (r) {
        (s = r.width), (o = r.height);
        var u = ls();
        (u || (!u && e === "fixed")) && ((a = r.offsetLeft), (c = r.offsetTop));
    }
    return { width: s, height: o, x: a + fi(t), y: c };
}
function zc(t) {
    var e,
        n = vt(t),
        i = di(t),
        r = (e = t.ownerDocument) == null ? void 0 : e.body,
        s = Ot(
            n.scrollWidth,
            n.clientWidth,
            r ? r.scrollWidth : 0,
            r ? r.clientWidth : 0
        ),
        o = Ot(
            n.scrollHeight,
            n.clientHeight,
            r ? r.scrollHeight : 0,
            r ? r.clientHeight : 0
        ),
        a = -i.scrollLeft + fi(t),
        c = -i.scrollTop;
    return (
        nt(r || n).direction === "rtl" &&
            (a += Ot(n.clientWidth, r ? r.clientWidth : 0) - s),
        { width: s, height: o, x: a, y: c }
    );
}
function pi(t) {
    var e = nt(t),
        n = e.overflow,
        i = e.overflowX,
        r = e.overflowY;
    return /auto|scroll|overlay|hidden/.test(n + r + i);
}
function hs(t) {
    return ["html", "body", "#document"].indexOf(Z(t)) >= 0
        ? t.ownerDocument.body
        : q(t) && pi(t)
        ? t
        : hs(en(t));
}
function Gt(t, e) {
    var n;
    e === void 0 && (e = []);
    var i = hs(t),
        r = i === ((n = t.ownerDocument) == null ? void 0 : n.body),
        s = F(i),
        o = r ? [s].concat(s.visualViewport || [], pi(i) ? i : []) : i,
        a = e.concat(o);
    return r ? a : a.concat(Gt(en(o)));
}
function kn(t) {
    return Object.assign({}, t, {
        left: t.x,
        top: t.y,
        right: t.x + t.width,
        bottom: t.y + t.height,
    });
}
function $c(t, e) {
    var n = jt(t, !1, e === "fixed");
    return (
        (n.top = n.top + t.clientTop),
        (n.left = n.left + t.clientLeft),
        (n.bottom = n.top + t.clientHeight),
        (n.right = n.left + t.clientWidth),
        (n.width = t.clientWidth),
        (n.height = t.clientHeight),
        (n.x = n.left),
        (n.y = n.top),
        n
    );
}
function _r(t, e, n) {
    return e === as ? kn(Fc(t, n)) : Tt(e) ? $c(e, n) : kn(zc(vt(t)));
}
function qc(t) {
    var e = Gt(en(t)),
        n = ["absolute", "fixed"].indexOf(nt(t).position) >= 0,
        i = n && q(t) ? le(t) : t;
    return Tt(i)
        ? e.filter(function (r) {
              return Tt(r) && us(r, i) && Z(r) !== "body";
          })
        : [];
}
function Uc(t, e, n, i) {
    var r = e === "clippingParents" ? qc(t) : [].concat(e),
        s = [].concat(r, [n]),
        o = s[0],
        a = s.reduce(function (c, u) {
            var l = _r(t, u, i);
            return (
                (c.top = Ot(l.top, c.top)),
                (c.right = Be(l.right, c.right)),
                (c.bottom = Be(l.bottom, c.bottom)),
                (c.left = Ot(l.left, c.left)),
                c
            );
        }, _r(t, o, i));
    return (
        (a.width = a.right - a.left),
        (a.height = a.bottom - a.top),
        (a.x = a.left),
        (a.y = a.top),
        a
    );
}
function vs(t) {
    var e = t.reference,
        n = t.element,
        i = t.placement,
        r = i ? Q(i) : null,
        s = i ? Ht(i) : null,
        o = e.x + e.width / 2 - n.width / 2,
        a = e.y + e.height / 2 - n.height / 2,
        c;
    switch (r) {
        case M:
            c = { x: o, y: e.y - n.height };
            break;
        case U:
            c = { x: o, y: e.y + e.height };
            break;
        case V:
            c = { x: e.x + e.width, y: a };
            break;
        case N:
            c = { x: e.x - n.width, y: a };
            break;
        default:
            c = { x: e.x, y: e.y };
    }
    var u = r ? ui(r) : null;
    if (u != null) {
        var l = u === "y" ? "height" : "width";
        switch (s) {
            case Rt:
                c[u] = c[u] - (e[l] / 2 - n[l] / 2);
                break;
            case ie:
                c[u] = c[u] + (e[l] / 2 - n[l] / 2);
                break;
        }
    }
    return c;
}
function re(t, e) {
    e === void 0 && (e = {});
    var n = e,
        i = n.placement,
        r = i === void 0 ? t.placement : i,
        s = n.strategy,
        o = s === void 0 ? t.strategy : s,
        a = n.boundary,
        c = a === void 0 ? uc : a,
        u = n.rootBoundary,
        l = u === void 0 ? as : u,
        d = n.elementContext,
        _ = d === void 0 ? Kt : d,
        g = n.altBoundary,
        v = g === void 0 ? !1 : g,
        h = n.padding,
        p = h === void 0 ? 0 : h,
        m = fs(typeof p != "number" ? p : ps(p, ce)),
        b = _ === Kt ? dc : Kt,
        w = t.rects.popper,
        y = t.elements[v ? b : _],
        E = Uc(Tt(y) ? y : y.contextElement || vt(t.elements.popper), c, l, o),
        A = jt(t.elements.reference),
        S = vs({
            reference: A,
            element: w,
            strategy: "absolute",
            placement: r,
        }),
        P = kn(Object.assign({}, w, S)),
        C = _ === Kt ? P : A,
        L = {
            top: E.top - C.top + m.top,
            bottom: C.bottom - E.bottom + m.bottom,
            left: E.left - C.left + m.left,
            right: C.right - E.right + m.right,
        },
        D = t.modifiersData.offset;
    if (_ === Kt && D) {
        var K = D[r];
        Object.keys(L).forEach(function (j) {
            var _t = [V, U].indexOf(j) >= 0 ? 1 : -1,
                gt = [M, U].indexOf(j) >= 0 ? "y" : "x";
            L[j] += K[gt] * _t;
        });
    }
    return L;
}
function Vc(t, e) {
    e === void 0 && (e = {});
    var n = e,
        i = n.placement,
        r = n.boundary,
        s = n.rootBoundary,
        o = n.padding,
        a = n.flipVariations,
        c = n.allowedAutoPlacements,
        u = c === void 0 ? cs : c,
        l = Ht(i),
        d = l
            ? a
                ? fr
                : fr.filter(function (v) {
                      return Ht(v) === l;
                  })
            : ce,
        _ = d.filter(function (v) {
            return u.indexOf(v) >= 0;
        });
    _.length === 0 && (_ = d);
    var g = _.reduce(function (v, h) {
        return (
            (v[h] = re(t, {
                placement: h,
                boundary: r,
                rootBoundary: s,
                padding: o,
            })[Q(h)]),
            v
        );
    }, {});
    return Object.keys(g).sort(function (v, h) {
        return g[v] - g[h];
    });
}
function Kc(t) {
    if (Q(t) === ai) return [];
    var e = Pe(t);
    return [vr(t), e, vr(e)];
}
function Wc(t) {
    var e = t.state,
        n = t.options,
        i = t.name;
    if (!e.modifiersData[i]._skip) {
        for (
            var r = n.mainAxis,
                s = r === void 0 ? !0 : r,
                o = n.altAxis,
                a = o === void 0 ? !0 : o,
                c = n.fallbackPlacements,
                u = n.padding,
                l = n.boundary,
                d = n.rootBoundary,
                _ = n.altBoundary,
                g = n.flipVariations,
                v = g === void 0 ? !0 : g,
                h = n.allowedAutoPlacements,
                p = e.options.placement,
                m = Q(p),
                b = m === p,
                w = c || (b || !v ? [Pe(p)] : Kc(p)),
                y = [p].concat(w).reduce(function (kt, st) {
                    return kt.concat(
                        Q(st) === ai
                            ? Vc(e, {
                                  placement: st,
                                  boundary: l,
                                  rootBoundary: d,
                                  padding: u,
                                  flipVariations: v,
                                  allowedAutoPlacements: h,
                              })
                            : st
                    );
                }, []),
                E = e.rects.reference,
                A = e.rects.popper,
                S = new Map(),
                P = !0,
                C = y[0],
                L = 0;
            L < y.length;
            L++
        ) {
            var D = y[L],
                K = Q(D),
                j = Ht(D) === Rt,
                _t = [M, U].indexOf(K) >= 0,
                gt = _t ? "width" : "height",
                B = re(e, {
                    placement: D,
                    boundary: l,
                    rootBoundary: d,
                    altBoundary: _,
                    padding: u,
                }),
                W = _t ? (j ? V : N) : j ? U : M;
            E[gt] > A[gt] && (W = Pe(W));
            var he = Pe(W),
                mt = [];
            if (
                (s && mt.push(B[K] <= 0),
                a && mt.push(B[W] <= 0, B[he] <= 0),
                mt.every(function (kt) {
                    return kt;
                }))
            ) {
                (C = D), (P = !1);
                break;
            }
            S.set(D, mt);
        }
        if (P)
            for (
                var ve = v ? 3 : 1,
                    dn = function (st) {
                        var Ut = y.find(function (ge) {
                            var yt = S.get(ge);
                            if (yt)
                                return yt.slice(0, st).every(function (fn) {
                                    return fn;
                                });
                        });
                        if (Ut) return (C = Ut), "break";
                    },
                    qt = ve;
                qt > 0;
                qt--
            ) {
                var _e = dn(qt);
                if (_e === "break") break;
            }
        e.placement !== C &&
            ((e.modifiersData[i]._skip = !0),
            (e.placement = C),
            (e.reset = !0));
    }
}
const Jc = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: Wc,
    requiresIfExists: ["offset"],
    data: { _skip: !1 },
};
function gr(t, e, n) {
    return (
        n === void 0 && (n = { x: 0, y: 0 }),
        {
            top: t.top - e.height - n.y,
            right: t.right - e.width + n.x,
            bottom: t.bottom - e.height + n.y,
            left: t.left - e.width - n.x,
        }
    );
}
function mr(t) {
    return [M, V, U, N].some(function (e) {
        return t[e] >= 0;
    });
}
function Xc(t) {
    var e = t.state,
        n = t.name,
        i = e.rects.reference,
        r = e.rects.popper,
        s = e.modifiersData.preventOverflow,
        o = re(e, { elementContext: "reference" }),
        a = re(e, { altBoundary: !0 }),
        c = gr(o, i),
        u = gr(a, r, s),
        l = mr(c),
        d = mr(u);
    (e.modifiersData[n] = {
        referenceClippingOffsets: c,
        popperEscapeOffsets: u,
        isReferenceHidden: l,
        hasPopperEscaped: d,
    }),
        (e.attributes.popper = Object.assign({}, e.attributes.popper, {
            "data-popper-reference-hidden": l,
            "data-popper-escaped": d,
        }));
}
const Yc = {
    name: "hide",
    enabled: !0,
    phase: "main",
    requiresIfExists: ["preventOverflow"],
    fn: Xc,
};
function Gc(t, e, n) {
    var i = Q(t),
        r = [N, M].indexOf(i) >= 0 ? -1 : 1,
        s =
            typeof n == "function"
                ? n(Object.assign({}, e, { placement: t }))
                : n,
        o = s[0],
        a = s[1];
    return (
        (o = o || 0),
        (a = (a || 0) * r),
        [N, V].indexOf(i) >= 0 ? { x: a, y: o } : { x: o, y: a }
    );
}
function Qc(t) {
    var e = t.state,
        n = t.options,
        i = t.name,
        r = n.offset,
        s = r === void 0 ? [0, 0] : r,
        o = cs.reduce(function (l, d) {
            return (l[d] = Gc(d, e.rects, s)), l;
        }, {}),
        a = o[e.placement],
        c = a.x,
        u = a.y;
    e.modifiersData.popperOffsets != null &&
        ((e.modifiersData.popperOffsets.x += c),
        (e.modifiersData.popperOffsets.y += u)),
        (e.modifiersData[i] = o);
}
const Zc = {
    name: "offset",
    enabled: !0,
    phase: "main",
    requires: ["popperOffsets"],
    fn: Qc,
};
function tl(t) {
    var e = t.state,
        n = t.name;
    e.modifiersData[n] = vs({
        reference: e.rects.reference,
        element: e.rects.popper,
        strategy: "absolute",
        placement: e.placement,
    });
}
const el = {
    name: "popperOffsets",
    enabled: !0,
    phase: "read",
    fn: tl,
    data: {},
};
function nl(t) {
    return t === "x" ? "y" : "x";
}
function il(t) {
    var e = t.state,
        n = t.options,
        i = t.name,
        r = n.mainAxis,
        s = r === void 0 ? !0 : r,
        o = n.altAxis,
        a = o === void 0 ? !1 : o,
        c = n.boundary,
        u = n.rootBoundary,
        l = n.altBoundary,
        d = n.padding,
        _ = n.tether,
        g = _ === void 0 ? !0 : _,
        v = n.tetherOffset,
        h = v === void 0 ? 0 : v,
        p = re(e, { boundary: c, rootBoundary: u, padding: d, altBoundary: l }),
        m = Q(e.placement),
        b = Ht(e.placement),
        w = !b,
        y = ui(m),
        E = nl(y),
        A = e.modifiersData.popperOffsets,
        S = e.rects.reference,
        P = e.rects.popper,
        C =
            typeof h == "function"
                ? h(Object.assign({}, e.rects, { placement: e.placement }))
                : h,
        L =
            typeof C == "number"
                ? { mainAxis: C, altAxis: C }
                : Object.assign({ mainAxis: 0, altAxis: 0 }, C),
        D = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null,
        K = { x: 0, y: 0 };
    if (A) {
        if (s) {
            var j,
                _t = y === "y" ? M : N,
                gt = y === "y" ? U : V,
                B = y === "y" ? "height" : "width",
                W = A[y],
                he = W + p[_t],
                mt = W - p[gt],
                ve = g ? -P[B] / 2 : 0,
                dn = b === Rt ? S[B] : P[B],
                qt = b === Rt ? -P[B] : -S[B],
                _e = e.elements.arrow,
                kt = g && _e ? li(_e) : { width: 0, height: 0 },
                st = e.modifiersData["arrow#persistent"]
                    ? e.modifiersData["arrow#persistent"].padding
                    : ds(),
                Ut = st[_t],
                ge = st[gt],
                yt = Yt(0, S[B], kt[B]),
                fn = w
                    ? S[B] / 2 - ve - yt - Ut - L.mainAxis
                    : dn - yt - Ut - L.mainAxis,
                Do = w
                    ? -S[B] / 2 + ve + yt + ge + L.mainAxis
                    : qt + yt + ge + L.mainAxis,
                pn = e.elements.arrow && le(e.elements.arrow),
                jo = pn
                    ? y === "y"
                        ? pn.clientTop || 0
                        : pn.clientLeft || 0
                    : 0,
                Ui = (j = D == null ? void 0 : D[y]) != null ? j : 0,
                Ho = W + fn - Ui - jo,
                Mo = W + Do - Ui,
                Vi = Yt(g ? Be(he, Ho) : he, W, g ? Ot(mt, Mo) : mt);
            (A[y] = Vi), (K[y] = Vi - W);
        }
        if (a) {
            var Ki,
                No = y === "x" ? M : N,
                Bo = y === "x" ? U : V,
                bt = A[E],
                me = E === "y" ? "height" : "width",
                Wi = bt + p[No],
                Ji = bt - p[Bo],
                hn = [M, N].indexOf(m) !== -1,
                Xi = (Ki = D == null ? void 0 : D[E]) != null ? Ki : 0,
                Yi = hn ? Wi : bt - S[me] - P[me] - Xi + L.altAxis,
                Gi = hn ? bt + S[me] + P[me] - Xi - L.altAxis : Ji,
                Qi =
                    g && hn ? Ic(Yi, bt, Gi) : Yt(g ? Yi : Wi, bt, g ? Gi : Ji);
            (A[E] = Qi), (K[E] = Qi - bt);
        }
        e.modifiersData[i] = K;
    }
}
const rl = {
    name: "preventOverflow",
    enabled: !0,
    phase: "main",
    fn: il,
    requiresIfExists: ["offset"],
};
function sl(t) {
    return { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop };
}
function ol(t) {
    return t === F(t) || !q(t) ? di(t) : sl(t);
}
function al(t) {
    var e = t.getBoundingClientRect(),
        n = Dt(e.width) / t.offsetWidth || 1,
        i = Dt(e.height) / t.offsetHeight || 1;
    return n !== 1 || i !== 1;
}
function cl(t, e, n) {
    n === void 0 && (n = !1);
    var i = q(e),
        r = q(e) && al(e),
        s = vt(e),
        o = jt(t, r, n),
        a = { scrollLeft: 0, scrollTop: 0 },
        c = { x: 0, y: 0 };
    return (
        (i || (!i && !n)) &&
            ((Z(e) !== "body" || pi(s)) && (a = ol(e)),
            q(e)
                ? ((c = jt(e, !0)), (c.x += e.clientLeft), (c.y += e.clientTop))
                : s && (c.x = fi(s))),
        {
            x: o.left + a.scrollLeft - c.x,
            y: o.top + a.scrollTop - c.y,
            width: o.width,
            height: o.height,
        }
    );
}
function ll(t) {
    var e = new Map(),
        n = new Set(),
        i = [];
    t.forEach(function (s) {
        e.set(s.name, s);
    });
    function r(s) {
        n.add(s.name);
        var o = [].concat(s.requires || [], s.requiresIfExists || []);
        o.forEach(function (a) {
            if (!n.has(a)) {
                var c = e.get(a);
                c && r(c);
            }
        }),
            i.push(s);
    }
    return (
        t.forEach(function (s) {
            n.has(s.name) || r(s);
        }),
        i
    );
}
function ul(t) {
    var e = ll(t);
    return wc.reduce(function (n, i) {
        return n.concat(
            e.filter(function (r) {
                return r.phase === i;
            })
        );
    }, []);
}
function dl(t) {
    var e;
    return function () {
        return (
            e ||
                (e = new Promise(function (n) {
                    Promise.resolve().then(function () {
                        (e = void 0), n(t());
                    });
                })),
            e
        );
    };
}
function fl(t) {
    var e = t.reduce(function (n, i) {
        var r = n[i.name];
        return (
            (n[i.name] = r
                ? Object.assign({}, r, i, {
                      options: Object.assign({}, r.options, i.options),
                      data: Object.assign({}, r.data, i.data),
                  })
                : i),
            n
        );
    }, {});
    return Object.keys(e).map(function (n) {
        return e[n];
    });
}
var yr = { placement: "bottom", modifiers: [], strategy: "absolute" };
function br() {
    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
        e[n] = arguments[n];
    return !e.some(function (i) {
        return !(i && typeof i.getBoundingClientRect == "function");
    });
}
function pl(t) {
    t === void 0 && (t = {});
    var e = t,
        n = e.defaultModifiers,
        i = n === void 0 ? [] : n,
        r = e.defaultOptions,
        s = r === void 0 ? yr : r;
    return function (a, c, u) {
        u === void 0 && (u = s);
        var l = {
                placement: "bottom",
                orderedModifiers: [],
                options: Object.assign({}, yr, s),
                modifiersData: {},
                elements: { reference: a, popper: c },
                attributes: {},
                styles: {},
            },
            d = [],
            _ = !1,
            g = {
                state: l,
                setOptions: function (m) {
                    var b = typeof m == "function" ? m(l.options) : m;
                    h(),
                        (l.options = Object.assign({}, s, l.options, b)),
                        (l.scrollParents = {
                            reference: Tt(a)
                                ? Gt(a)
                                : a.contextElement
                                ? Gt(a.contextElement)
                                : [],
                            popper: Gt(c),
                        });
                    var w = ul(fl([].concat(i, l.options.modifiers)));
                    return (
                        (l.orderedModifiers = w.filter(function (y) {
                            return y.enabled;
                        })),
                        v(),
                        g.update()
                    );
                },
                forceUpdate: function () {
                    if (!_) {
                        var m = l.elements,
                            b = m.reference,
                            w = m.popper;
                        if (br(b, w)) {
                            (l.rects = {
                                reference: cl(
                                    b,
                                    le(w),
                                    l.options.strategy === "fixed"
                                ),
                                popper: li(w),
                            }),
                                (l.reset = !1),
                                (l.placement = l.options.placement),
                                l.orderedModifiers.forEach(function (L) {
                                    return (l.modifiersData[L.name] =
                                        Object.assign({}, L.data));
                                });
                            for (
                                var y = 0;
                                y < l.orderedModifiers.length;
                                y++
                            ) {
                                if (l.reset === !0) {
                                    (l.reset = !1), (y = -1);
                                    continue;
                                }
                                var E = l.orderedModifiers[y],
                                    A = E.fn,
                                    S = E.options,
                                    P = S === void 0 ? {} : S,
                                    C = E.name;
                                typeof A == "function" &&
                                    (l =
                                        A({
                                            state: l,
                                            options: P,
                                            name: C,
                                            instance: g,
                                        }) || l);
                            }
                        }
                    }
                },
                update: dl(function () {
                    return new Promise(function (p) {
                        g.forceUpdate(), p(l);
                    });
                }),
                destroy: function () {
                    h(), (_ = !0);
                },
            };
        if (!br(a, c)) return g;
        g.setOptions(u).then(function (p) {
            !_ && u.onFirstUpdate && u.onFirstUpdate(p);
        });
        function v() {
            l.orderedModifiers.forEach(function (p) {
                var m = p.name,
                    b = p.options,
                    w = b === void 0 ? {} : b,
                    y = p.effect;
                if (typeof y == "function") {
                    var E = y({ state: l, name: m, instance: g, options: w }),
                        A = function () {};
                    d.push(E || A);
                }
            });
        }
        function h() {
            d.forEach(function (p) {
                return p();
            }),
                (d = []);
        }
        return g;
    };
}
var hl = [Mc, el, jc, Ac, Zc, Jc, rl, kc, Yc],
    hi = pl({ defaultModifiers: hl }),
    ct =
        (globalThis && globalThis.__assign) ||
        function () {
            return (
                (ct =
                    Object.assign ||
                    function (t) {
                        for (var e, n = 1, i = arguments.length; n < i; n++) {
                            e = arguments[n];
                            for (var r in e)
                                Object.prototype.hasOwnProperty.call(e, r) &&
                                    (t[r] = e[r]);
                        }
                        return t;
                    }),
                ct.apply(this, arguments)
            );
        },
    be =
        (globalThis && globalThis.__spreadArray) ||
        function (t, e, n) {
            if (n || arguments.length === 2)
                for (var i = 0, r = e.length, s; i < r; i++)
                    (s || !(i in e)) &&
                        (s || (s = Array.prototype.slice.call(e, 0, i)),
                        (s[i] = e[i]));
            return t.concat(s || Array.prototype.slice.call(e));
        },
    lt = {
        placement: "bottom",
        triggerType: "click",
        offsetSkidding: 0,
        offsetDistance: 10,
        delay: 300,
        ignoreClickOutsideClass: !1,
        onShow: function () {},
        onHide: function () {},
        onToggle: function () {},
    },
    vl = { id: null, override: !0 },
    _s = (function () {
        function t(e, n, i, r) {
            e === void 0 && (e = null),
                n === void 0 && (n = null),
                i === void 0 && (i = lt),
                r === void 0 && (r = vl),
                (this._instanceId = r.id ? r.id : e.id),
                (this._targetEl = e),
                (this._triggerEl = n),
                (this._options = ct(ct({}, lt), i)),
                (this._popperInstance = null),
                (this._visible = !1),
                (this._initialized = !1),
                this.init(),
                x.addInstance("Dropdown", this, this._instanceId, r.override);
        }
        return (
            (t.prototype.init = function () {
                this._triggerEl &&
                    this._targetEl &&
                    !this._initialized &&
                    ((this._popperInstance = this._createPopperInstance()),
                    this._setupEventListeners(),
                    (this._initialized = !0));
            }),
            (t.prototype.destroy = function () {
                var e = this,
                    n = this._getTriggerEvents();
                this._options.triggerType === "click" &&
                    n.showEvents.forEach(function (i) {
                        e._triggerEl.removeEventListener(i, e._clickHandler);
                    }),
                    this._options.triggerType === "hover" &&
                        (n.showEvents.forEach(function (i) {
                            e._triggerEl.removeEventListener(
                                i,
                                e._hoverShowTriggerElHandler
                            ),
                                e._targetEl.removeEventListener(
                                    i,
                                    e._hoverShowTargetElHandler
                                );
                        }),
                        n.hideEvents.forEach(function (i) {
                            e._triggerEl.removeEventListener(
                                i,
                                e._hoverHideHandler
                            ),
                                e._targetEl.removeEventListener(
                                    i,
                                    e._hoverHideHandler
                                );
                        })),
                    this._popperInstance.destroy(),
                    (this._initialized = !1);
            }),
            (t.prototype.removeInstance = function () {
                x.removeInstance("Dropdown", this._instanceId);
            }),
            (t.prototype.destroyAndRemoveInstance = function () {
                this.destroy(), this.removeInstance();
            }),
            (t.prototype._setupEventListeners = function () {
                var e = this,
                    n = this._getTriggerEvents();
                (this._clickHandler = function () {
                    e.toggle();
                }),
                    this._options.triggerType === "click" &&
                        n.showEvents.forEach(function (i) {
                            e._triggerEl.addEventListener(i, e._clickHandler);
                        }),
                    (this._hoverShowTriggerElHandler = function (i) {
                        i.type === "click"
                            ? e.toggle()
                            : setTimeout(function () {
                                  e.show();
                              }, e._options.delay);
                    }),
                    (this._hoverShowTargetElHandler = function () {
                        e.show();
                    }),
                    (this._hoverHideHandler = function () {
                        setTimeout(function () {
                            e._targetEl.matches(":hover") || e.hide();
                        }, e._options.delay);
                    }),
                    this._options.triggerType === "hover" &&
                        (n.showEvents.forEach(function (i) {
                            e._triggerEl.addEventListener(
                                i,
                                e._hoverShowTriggerElHandler
                            ),
                                e._targetEl.addEventListener(
                                    i,
                                    e._hoverShowTargetElHandler
                                );
                        }),
                        n.hideEvents.forEach(function (i) {
                            e._triggerEl.addEventListener(
                                i,
                                e._hoverHideHandler
                            ),
                                e._targetEl.addEventListener(
                                    i,
                                    e._hoverHideHandler
                                );
                        }));
            }),
            (t.prototype._createPopperInstance = function () {
                return hi(this._triggerEl, this._targetEl, {
                    placement: this._options.placement,
                    modifiers: [
                        {
                            name: "offset",
                            options: {
                                offset: [
                                    this._options.offsetSkidding,
                                    this._options.offsetDistance,
                                ],
                            },
                        },
                    ],
                });
            }),
            (t.prototype._setupClickOutsideListener = function () {
                var e = this;
                (this._clickOutsideEventListener = function (n) {
                    e._handleClickOutside(n, e._targetEl);
                }),
                    document.body.addEventListener(
                        "click",
                        this._clickOutsideEventListener,
                        !0
                    );
            }),
            (t.prototype._removeClickOutsideListener = function () {
                document.body.removeEventListener(
                    "click",
                    this._clickOutsideEventListener,
                    !0
                );
            }),
            (t.prototype._handleClickOutside = function (e, n) {
                var i = e.target,
                    r = this._options.ignoreClickOutsideClass,
                    s = !1;
                if (r) {
                    var o = document.querySelectorAll(".".concat(r));
                    o.forEach(function (a) {
                        if (a.contains(i)) {
                            s = !0;
                            return;
                        }
                    });
                }
                i !== n &&
                    !n.contains(i) &&
                    !this._triggerEl.contains(i) &&
                    !s &&
                    this.isVisible() &&
                    this.hide();
            }),
            (t.prototype._getTriggerEvents = function () {
                switch (this._options.triggerType) {
                    case "hover":
                        return {
                            showEvents: ["mouseenter", "click"],
                            hideEvents: ["mouseleave"],
                        };
                    case "click":
                        return { showEvents: ["click"], hideEvents: [] };
                    case "none":
                        return { showEvents: [], hideEvents: [] };
                    default:
                        return { showEvents: ["click"], hideEvents: [] };
                }
            }),
            (t.prototype.toggle = function () {
                this.isVisible() ? this.hide() : this.show(),
                    this._options.onToggle(this);
            }),
            (t.prototype.isVisible = function () {
                return this._visible;
            }),
            (t.prototype.show = function () {
                this._targetEl.classList.remove("hidden"),
                    this._targetEl.classList.add("block"),
                    this._popperInstance.setOptions(function (e) {
                        return ct(ct({}, e), {
                            modifiers: be(
                                be([], e.modifiers, !0),
                                [{ name: "eventListeners", enabled: !0 }],
                                !1
                            ),
                        });
                    }),
                    this._setupClickOutsideListener(),
                    this._popperInstance.update(),
                    (this._visible = !0),
                    this._options.onShow(this);
            }),
            (t.prototype.hide = function () {
                this._targetEl.classList.remove("block"),
                    this._targetEl.classList.add("hidden"),
                    this._popperInstance.setOptions(function (e) {
                        return ct(ct({}, e), {
                            modifiers: be(
                                be([], e.modifiers, !0),
                                [{ name: "eventListeners", enabled: !1 }],
                                !1
                            ),
                        });
                    }),
                    (this._visible = !1),
                    this._removeClickOutsideListener(),
                    this._options.onHide(this);
            }),
            t
        );
    })();
function vi() {
    document.querySelectorAll("[data-dropdown-toggle]").forEach(function (t) {
        var e = t.getAttribute("data-dropdown-toggle"),
            n = document.getElementById(e);
        if (n) {
            var i = t.getAttribute("data-dropdown-placement"),
                r = t.getAttribute("data-dropdown-offset-skidding"),
                s = t.getAttribute("data-dropdown-offset-distance"),
                o = t.getAttribute("data-dropdown-trigger"),
                a = t.getAttribute("data-dropdown-delay"),
                c = t.getAttribute("data-dropdown-ignore-click-outside-class");
            new _s(n, t, {
                placement: i || lt.placement,
                triggerType: o || lt.triggerType,
                offsetSkidding: r ? parseInt(r) : lt.offsetSkidding,
                offsetDistance: s ? parseInt(s) : lt.offsetDistance,
                delay: a ? parseInt(a) : lt.delay,
                ignoreClickOutsideClass: c || lt.ignoreClickOutsideClass,
            });
        } else console.error('The dropdown element with id "'.concat(e, '" does not exist. Please check the data-dropdown-toggle attribute.'));
    });
}
typeof window < "u" && ((window.Dropdown = _s), (window.initDropdowns = vi));
var Fe =
        (globalThis && globalThis.__assign) ||
        function () {
            return (
                (Fe =
                    Object.assign ||
                    function (t) {
                        for (var e, n = 1, i = arguments.length; n < i; n++) {
                            e = arguments[n];
                            for (var r in e)
                                Object.prototype.hasOwnProperty.call(e, r) &&
                                    (t[r] = e[r]);
                        }
                        return t;
                    }),
                Fe.apply(this, arguments)
            );
        },
    ze = {
        placement: "center",
        backdropClasses:
            "bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40",
        backdrop: "dynamic",
        closable: !0,
        onHide: function () {},
        onShow: function () {},
        onToggle: function () {},
    },
    _l = { id: null, override: !0 },
    gs = (function () {
        function t(e, n, i) {
            e === void 0 && (e = null),
                n === void 0 && (n = ze),
                i === void 0 && (i = _l),
                (this._eventListenerInstances = []),
                (this._instanceId = i.id ? i.id : e.id),
                (this._targetEl = e),
                (this._options = Fe(Fe({}, ze), n)),
                (this._isHidden = !0),
                (this._backdropEl = null),
                (this._initialized = !1),
                this.init(),
                x.addInstance("Modal", this, this._instanceId, i.override);
        }
        return (
            (t.prototype.init = function () {
                var e = this;
                this._targetEl &&
                    !this._initialized &&
                    (this._getPlacementClasses().map(function (n) {
                        e._targetEl.classList.add(n);
                    }),
                    (this._initialized = !0));
            }),
            (t.prototype.destroy = function () {
                this._initialized &&
                    (this.removeAllEventListenerInstances(),
                    this._destroyBackdropEl(),
                    (this._initialized = !1));
            }),
            (t.prototype.removeInstance = function () {
                x.removeInstance("Modal", this._instanceId);
            }),
            (t.prototype.destroyAndRemoveInstance = function () {
                this.destroy(), this.removeInstance();
            }),
            (t.prototype._createBackdrop = function () {
                var e;
                if (this._isHidden) {
                    var n = document.createElement("div");
                    n.setAttribute("modal-backdrop", ""),
                        (e = n.classList).add.apply(
                            e,
                            this._options.backdropClasses.split(" ")
                        ),
                        document.querySelector("body").append(n),
                        (this._backdropEl = n);
                }
            }),
            (t.prototype._destroyBackdropEl = function () {
                this._isHidden ||
                    document.querySelector("[modal-backdrop]").remove();
            }),
            (t.prototype._setupModalCloseEventListeners = function () {
                var e = this;
                this._options.backdrop === "dynamic" &&
                    ((this._clickOutsideEventListener = function (n) {
                        e._handleOutsideClick(n.target);
                    }),
                    this._targetEl.addEventListener(
                        "click",
                        this._clickOutsideEventListener,
                        !0
                    )),
                    (this._keydownEventListener = function (n) {
                        n.key === "Escape" && e.hide();
                    }),
                    document.body.addEventListener(
                        "keydown",
                        this._keydownEventListener,
                        !0
                    );
            }),
            (t.prototype._removeModalCloseEventListeners = function () {
                this._options.backdrop === "dynamic" &&
                    this._targetEl.removeEventListener(
                        "click",
                        this._clickOutsideEventListener,
                        !0
                    ),
                    document.body.removeEventListener(
                        "keydown",
                        this._keydownEventListener,
                        !0
                    );
            }),
            (t.prototype._handleOutsideClick = function (e) {
                (e === this._targetEl ||
                    (e === this._backdropEl && this.isVisible())) &&
                    this.hide();
            }),
            (t.prototype._getPlacementClasses = function () {
                switch (this._options.placement) {
                    case "top-left":
                        return ["justify-start", "items-start"];
                    case "top-center":
                        return ["justify-center", "items-start"];
                    case "top-right":
                        return ["justify-end", "items-start"];
                    case "center-left":
                        return ["justify-start", "items-center"];
                    case "center":
                        return ["justify-center", "items-center"];
                    case "center-right":
                        return ["justify-end", "items-center"];
                    case "bottom-left":
                        return ["justify-start", "items-end"];
                    case "bottom-center":
                        return ["justify-center", "items-end"];
                    case "bottom-right":
                        return ["justify-end", "items-end"];
                    default:
                        return ["justify-center", "items-center"];
                }
            }),
            (t.prototype.toggle = function () {
                this._isHidden ? this.show() : this.hide(),
                    this._options.onToggle(this);
            }),
            (t.prototype.show = function () {
                this.isHidden &&
                    (this._targetEl.classList.add("flex"),
                    this._targetEl.classList.remove("hidden"),
                    this._targetEl.setAttribute("aria-modal", "true"),
                    this._targetEl.setAttribute("role", "dialog"),
                    this._targetEl.removeAttribute("aria-hidden"),
                    this._createBackdrop(),
                    (this._isHidden = !1),
                    this._options.closable &&
                        this._setupModalCloseEventListeners(),
                    document.body.classList.add("overflow-hidden"),
                    this._options.onShow(this));
            }),
            (t.prototype.hide = function () {
                this.isVisible &&
                    (this._targetEl.classList.add("hidden"),
                    this._targetEl.classList.remove("flex"),
                    this._targetEl.setAttribute("aria-hidden", "true"),
                    this._targetEl.removeAttribute("aria-modal"),
                    this._targetEl.removeAttribute("role"),
                    this._destroyBackdropEl(),
                    (this._isHidden = !0),
                    document.body.classList.remove("overflow-hidden"),
                    this._options.closable &&
                        this._removeModalCloseEventListeners(),
                    this._options.onHide(this));
            }),
            (t.prototype.isVisible = function () {
                return !this._isHidden;
            }),
            (t.prototype.isHidden = function () {
                return this._isHidden;
            }),
            (t.prototype.addEventListenerInstance = function (e, n, i) {
                this._eventListenerInstances.push({
                    element: e,
                    type: n,
                    handler: i,
                });
            }),
            (t.prototype.removeAllEventListenerInstances = function () {
                this._eventListenerInstances.map(function (e) {
                    e.element.removeEventListener(e.type, e.handler);
                }),
                    (this._eventListenerInstances = []);
            }),
            (t.prototype.getAllEventListenerInstances = function () {
                return this._eventListenerInstances;
            }),
            t
        );
    })();
function _i() {
    document.querySelectorAll("[data-modal-target]").forEach(function (t) {
        var e = t.getAttribute("data-modal-target"),
            n = document.getElementById(e);
        if (n) {
            var i = n.getAttribute("data-modal-placement"),
                r = n.getAttribute("data-modal-backdrop");
            new gs(n, {
                placement: i || ze.placement,
                backdrop: r || ze.backdrop,
            });
        } else console.error("Modal with id ".concat(e, " does not exist. Are you sure that the data-modal-target attribute points to the correct modal id?."));
    }),
        document.querySelectorAll("[data-modal-toggle]").forEach(function (t) {
            var e = t.getAttribute("data-modal-toggle"),
                n = document.getElementById(e);
            if (n) {
                var i = x.getInstance("Modal", e);
                if (i) {
                    var r = function () {
                        i.toggle();
                    };
                    t.addEventListener("click", r),
                        i.addEventListenerInstance(t, "click", r);
                } else
                    console.error(
                        "Modal with id ".concat(
                            e,
                            " has not been initialized. Please initialize it using the data-modal-target attribute."
                        )
                    );
            } else console.error("Modal with id ".concat(e, " does not exist. Are you sure that the data-modal-toggle attribute points to the correct modal id?"));
        }),
        document.querySelectorAll("[data-modal-show]").forEach(function (t) {
            var e = t.getAttribute("data-modal-show"),
                n = document.getElementById(e);
            if (n) {
                var i = x.getInstance("Modal", e);
                if (i) {
                    var r = function () {
                        i.show();
                    };
                    t.addEventListener("click", r),
                        i.addEventListenerInstance(t, "click", r);
                } else
                    console.error(
                        "Modal with id ".concat(
                            e,
                            " has not been initialized. Please initialize it using the data-modal-target attribute."
                        )
                    );
            } else console.error("Modal with id ".concat(e, " does not exist. Are you sure that the data-modal-show attribute points to the correct modal id?"));
        }),
        document.querySelectorAll("[data-modal-hide]").forEach(function (t) {
            var e = t.getAttribute("data-modal-hide"),
                n = document.getElementById(e);
            if (n) {
                var i = x.getInstance("Modal", e);
                if (i) {
                    var r = function () {
                        i.hide();
                    };
                    t.addEventListener("click", r),
                        i.addEventListenerInstance(t, "click", r);
                } else
                    console.error(
                        "Modal with id ".concat(
                            e,
                            " has not been initialized. Please initialize it using the data-modal-target attribute."
                        )
                    );
            } else console.error("Modal with id ".concat(e, " does not exist. Are you sure that the data-modal-hide attribute points to the correct modal id?"));
        });
}
typeof window < "u" && ((window.Modal = gs), (window.initModals = _i));
var $e =
        (globalThis && globalThis.__assign) ||
        function () {
            return (
                ($e =
                    Object.assign ||
                    function (t) {
                        for (var e, n = 1, i = arguments.length; n < i; n++) {
                            e = arguments[n];
                            for (var r in e)
                                Object.prototype.hasOwnProperty.call(e, r) &&
                                    (t[r] = e[r]);
                        }
                        return t;
                    }),
                $e.apply(this, arguments)
            );
        },
    xt = {
        placement: "left",
        bodyScrolling: !1,
        backdrop: !0,
        edge: !1,
        edgeOffset: "bottom-[60px]",
        backdropClasses:
            "bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-30",
        onShow: function () {},
        onHide: function () {},
        onToggle: function () {},
    },
    gl = { id: null, override: !0 },
    ms = (function () {
        function t(e, n, i) {
            e === void 0 && (e = null),
                n === void 0 && (n = xt),
                i === void 0 && (i = gl),
                (this._eventListenerInstances = []),
                (this._instanceId = i.id ? i.id : e.id),
                (this._targetEl = e),
                (this._options = $e($e({}, xt), n)),
                (this._visible = !1),
                (this._initialized = !1),
                this.init(),
                x.addInstance("Drawer", this, this._instanceId, i.override);
        }
        return (
            (t.prototype.init = function () {
                var e = this;
                this._targetEl &&
                    !this._initialized &&
                    (this._targetEl.setAttribute("aria-hidden", "true"),
                    this._targetEl.classList.add("transition-transform"),
                    this._getPlacementClasses(this._options.placement).base.map(
                        function (n) {
                            e._targetEl.classList.add(n);
                        }
                    ),
                    (this._handleEscapeKey = function (n) {
                        n.key === "Escape" && e.isVisible() && e.hide();
                    }),
                    document.addEventListener("keydown", this._handleEscapeKey),
                    (this._initialized = !0));
            }),
            (t.prototype.destroy = function () {
                this._initialized &&
                    (this.removeAllEventListenerInstances(),
                    this._destroyBackdropEl(),
                    document.removeEventListener(
                        "keydown",
                        this._handleEscapeKey
                    ),
                    (this._initialized = !1));
            }),
            (t.prototype.removeInstance = function () {
                x.removeInstance("Drawer", this._instanceId);
            }),
            (t.prototype.destroyAndRemoveInstance = function () {
                this.destroy(), this.removeInstance();
            }),
            (t.prototype.hide = function () {
                var e = this;
                this._options.edge
                    ? (this._getPlacementClasses(
                          this._options.placement + "-edge"
                      ).active.map(function (n) {
                          e._targetEl.classList.remove(n);
                      }),
                      this._getPlacementClasses(
                          this._options.placement + "-edge"
                      ).inactive.map(function (n) {
                          e._targetEl.classList.add(n);
                      }))
                    : (this._getPlacementClasses(
                          this._options.placement
                      ).active.map(function (n) {
                          e._targetEl.classList.remove(n);
                      }),
                      this._getPlacementClasses(
                          this._options.placement
                      ).inactive.map(function (n) {
                          e._targetEl.classList.add(n);
                      })),
                    this._targetEl.setAttribute("aria-hidden", "true"),
                    this._targetEl.removeAttribute("aria-modal"),
                    this._targetEl.removeAttribute("role"),
                    this._options.bodyScrolling ||
                        document.body.classList.remove("overflow-hidden"),
                    this._options.backdrop && this._destroyBackdropEl(),
                    (this._visible = !1),
                    this._options.onHide(this);
            }),
            (t.prototype.show = function () {
                var e = this;
                this._options.edge
                    ? (this._getPlacementClasses(
                          this._options.placement + "-edge"
                      ).active.map(function (n) {
                          e._targetEl.classList.add(n);
                      }),
                      this._getPlacementClasses(
                          this._options.placement + "-edge"
                      ).inactive.map(function (n) {
                          e._targetEl.classList.remove(n);
                      }))
                    : (this._getPlacementClasses(
                          this._options.placement
                      ).active.map(function (n) {
                          e._targetEl.classList.add(n);
                      }),
                      this._getPlacementClasses(
                          this._options.placement
                      ).inactive.map(function (n) {
                          e._targetEl.classList.remove(n);
                      })),
                    this._targetEl.setAttribute("aria-modal", "true"),
                    this._targetEl.setAttribute("role", "dialog"),
                    this._targetEl.removeAttribute("aria-hidden"),
                    this._options.bodyScrolling ||
                        document.body.classList.add("overflow-hidden"),
                    this._options.backdrop && this._createBackdrop(),
                    (this._visible = !0),
                    this._options.onShow(this);
            }),
            (t.prototype.toggle = function () {
                this.isVisible() ? this.hide() : this.show();
            }),
            (t.prototype._createBackdrop = function () {
                var e,
                    n = this;
                if (!this._visible) {
                    var i = document.createElement("div");
                    i.setAttribute("drawer-backdrop", ""),
                        (e = i.classList).add.apply(
                            e,
                            this._options.backdropClasses.split(" ")
                        ),
                        document.querySelector("body").append(i),
                        i.addEventListener("click", function () {
                            n.hide();
                        });
                }
            }),
            (t.prototype._destroyBackdropEl = function () {
                this._visible &&
                    document.querySelector("[drawer-backdrop]").remove();
            }),
            (t.prototype._getPlacementClasses = function (e) {
                switch (e) {
                    case "top":
                        return {
                            base: ["top-0", "left-0", "right-0"],
                            active: ["transform-none"],
                            inactive: ["-translate-y-full"],
                        };
                    case "right":
                        return {
                            base: ["right-0", "top-0"],
                            active: ["transform-none"],
                            inactive: ["translate-x-full"],
                        };
                    case "bottom":
                        return {
                            base: ["bottom-0", "left-0", "right-0"],
                            active: ["transform-none"],
                            inactive: ["translate-y-full"],
                        };
                    case "left":
                        return {
                            base: ["left-0", "top-0"],
                            active: ["transform-none"],
                            inactive: ["-translate-x-full"],
                        };
                    case "bottom-edge":
                        return {
                            base: ["left-0", "top-0"],
                            active: ["transform-none"],
                            inactive: [
                                "translate-y-full",
                                this._options.edgeOffset,
                            ],
                        };
                    default:
                        return {
                            base: ["left-0", "top-0"],
                            active: ["transform-none"],
                            inactive: ["-translate-x-full"],
                        };
                }
            }),
            (t.prototype.isHidden = function () {
                return !this._visible;
            }),
            (t.prototype.isVisible = function () {
                return this._visible;
            }),
            (t.prototype.addEventListenerInstance = function (e, n, i) {
                this._eventListenerInstances.push({
                    element: e,
                    type: n,
                    handler: i,
                });
            }),
            (t.prototype.removeAllEventListenerInstances = function () {
                this._eventListenerInstances.map(function (e) {
                    e.element.removeEventListener(e.type, e.handler);
                }),
                    (this._eventListenerInstances = []);
            }),
            (t.prototype.getAllEventListenerInstances = function () {
                return this._eventListenerInstances;
            }),
            t
        );
    })();
function gi() {
    document.querySelectorAll("[data-drawer-target]").forEach(function (t) {
        var e = t.getAttribute("data-drawer-target"),
            n = document.getElementById(e);
        if (n) {
            var i = t.getAttribute("data-drawer-placement"),
                r = t.getAttribute("data-drawer-body-scrolling"),
                s = t.getAttribute("data-drawer-backdrop"),
                o = t.getAttribute("data-drawer-edge"),
                a = t.getAttribute("data-drawer-edge-offset");
            new ms(n, {
                placement: i || xt.placement,
                bodyScrolling: r ? r === "true" : xt.bodyScrolling,
                backdrop: s ? s === "true" : xt.backdrop,
                edge: o ? o === "true" : xt.edge,
                edgeOffset: a || xt.edgeOffset,
            });
        } else console.error("Drawer with id ".concat(e, " not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?"));
    }),
        document.querySelectorAll("[data-drawer-toggle]").forEach(function (t) {
            var e = t.getAttribute("data-drawer-toggle"),
                n = document.getElementById(e);
            if (n) {
                var i = x.getInstance("Drawer", e);
                if (i) {
                    var r = function () {
                        i.toggle();
                    };
                    t.addEventListener("click", r),
                        i.addEventListenerInstance(t, "click", r);
                } else
                    console.error(
                        "Drawer with id ".concat(
                            e,
                            " has not been initialized. Please initialize it using the data-drawer-target attribute."
                        )
                    );
            } else console.error("Drawer with id ".concat(e, " not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?"));
        }),
        document
            .querySelectorAll("[data-drawer-dismiss], [data-drawer-hide]")
            .forEach(function (t) {
                var e = t.getAttribute("data-drawer-dismiss")
                        ? t.getAttribute("data-drawer-dismiss")
                        : t.getAttribute("data-drawer-hide"),
                    n = document.getElementById(e);
                if (n) {
                    var i = x.getInstance("Drawer", e);
                    if (i) {
                        var r = function () {
                            i.hide();
                        };
                        t.addEventListener("click", r),
                            i.addEventListenerInstance(t, "click", r);
                    } else
                        console.error(
                            "Drawer with id ".concat(
                                e,
                                " has not been initialized. Please initialize it using the data-drawer-target attribute."
                            )
                        );
                } else console.error("Drawer with id ".concat(e, " not found. Are you sure that the data-drawer-target attribute points to the correct drawer id"));
            }),
        document.querySelectorAll("[data-drawer-show]").forEach(function (t) {
            var e = t.getAttribute("data-drawer-show"),
                n = document.getElementById(e);
            if (n) {
                var i = x.getInstance("Drawer", e);
                if (i) {
                    var r = function () {
                        i.show();
                    };
                    t.addEventListener("click", r),
                        i.addEventListenerInstance(t, "click", r);
                } else
                    console.error(
                        "Drawer with id ".concat(
                            e,
                            " has not been initialized. Please initialize it using the data-drawer-target attribute."
                        )
                    );
            } else console.error("Drawer with id ".concat(e, " not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?"));
        });
}
typeof window < "u" && ((window.Drawer = ms), (window.initDrawers = gi));
var qe =
        (globalThis && globalThis.__assign) ||
        function () {
            return (
                (qe =
                    Object.assign ||
                    function (t) {
                        for (var e, n = 1, i = arguments.length; n < i; n++) {
                            e = arguments[n];
                            for (var r in e)
                                Object.prototype.hasOwnProperty.call(e, r) &&
                                    (t[r] = e[r]);
                        }
                        return t;
                    }),
                qe.apply(this, arguments)
            );
        },
    wr = {
        defaultTabId: null,
        activeClasses:
            "text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500",
        inactiveClasses:
            "dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300",
        onShow: function () {},
    },
    ml = { id: null, override: !0 },
    ys = (function () {
        function t(e, n, i, r) {
            e === void 0 && (e = null),
                n === void 0 && (n = []),
                i === void 0 && (i = wr),
                r === void 0 && (r = ml),
                (this._instanceId = r.id ? r.id : e.id),
                (this._tabsEl = e),
                (this._items = n),
                (this._activeTab = i ? this.getTab(i.defaultTabId) : null),
                (this._options = qe(qe({}, wr), i)),
                (this._initialized = !1),
                this.init(),
                x.addInstance("Tabs", this, this._tabsEl.id, !0),
                x.addInstance("Tabs", this, this._instanceId, r.override);
        }
        return (
            (t.prototype.init = function () {
                var e = this;
                this._items.length &&
                    !this._initialized &&
                    (this._activeTab || this.setActiveTab(this._items[0]),
                    this.show(this._activeTab.id, !0),
                    this._items.map(function (n) {
                        n.triggerEl.addEventListener("click", function () {
                            e.show(n.id);
                        });
                    }));
            }),
            (t.prototype.destroy = function () {
                this._initialized && (this._initialized = !1);
            }),
            (t.prototype.removeInstance = function () {
                this.destroy(), x.removeInstance("Tabs", this._instanceId);
            }),
            (t.prototype.destroyAndRemoveInstance = function () {
                this.destroy(), this.removeInstance();
            }),
            (t.prototype.getActiveTab = function () {
                return this._activeTab;
            }),
            (t.prototype.setActiveTab = function (e) {
                this._activeTab = e;
            }),
            (t.prototype.getTab = function (e) {
                return this._items.filter(function (n) {
                    return n.id === e;
                })[0];
            }),
            (t.prototype.show = function (e, n) {
                var i,
                    r,
                    s = this;
                n === void 0 && (n = !1);
                var o = this.getTab(e);
                (o === this._activeTab && !n) ||
                    (this._items.map(function (a) {
                        var c, u;
                        a !== o &&
                            ((c = a.triggerEl.classList).remove.apply(
                                c,
                                s._options.activeClasses.split(" ")
                            ),
                            (u = a.triggerEl.classList).add.apply(
                                u,
                                s._options.inactiveClasses.split(" ")
                            ),
                            a.targetEl.classList.add("hidden"),
                            a.triggerEl.setAttribute("aria-selected", "false"));
                    }),
                    (i = o.triggerEl.classList).add.apply(
                        i,
                        this._options.activeClasses.split(" ")
                    ),
                    (r = o.triggerEl.classList).remove.apply(
                        r,
                        this._options.inactiveClasses.split(" ")
                    ),
                    o.triggerEl.setAttribute("aria-selected", "true"),
                    o.targetEl.classList.remove("hidden"),
                    this.setActiveTab(o),
                    this._options.onShow(this, o));
            }),
            t
        );
    })();
function mi() {
    document.querySelectorAll("[data-tabs-toggle]").forEach(function (t) {
        var e = [],
            n = null;
        t.querySelectorAll('[role="tab"]').forEach(function (i) {
            var r = i.getAttribute("aria-selected") === "true",
                s = {
                    id: i.getAttribute("data-tabs-target"),
                    triggerEl: i,
                    targetEl: document.querySelector(
                        i.getAttribute("data-tabs-target")
                    ),
                };
            e.push(s), r && (n = s.id);
        }),
            new ys(t, e, { defaultTabId: n });
    });
}
typeof window < "u" && ((window.Tabs = ys), (window.initTabs = mi));
var ut =
        (globalThis && globalThis.__assign) ||
        function () {
            return (
                (ut =
                    Object.assign ||
                    function (t) {
                        for (var e, n = 1, i = arguments.length; n < i; n++) {
                            e = arguments[n];
                            for (var r in e)
                                Object.prototype.hasOwnProperty.call(e, r) &&
                                    (t[r] = e[r]);
                        }
                        return t;
                    }),
                ut.apply(this, arguments)
            );
        },
    we =
        (globalThis && globalThis.__spreadArray) ||
        function (t, e, n) {
            if (n || arguments.length === 2)
                for (var i = 0, r = e.length, s; i < r; i++)
                    (s || !(i in e)) &&
                        (s || (s = Array.prototype.slice.call(e, 0, i)),
                        (s[i] = e[i]));
            return t.concat(s || Array.prototype.slice.call(e));
        },
    Ue = {
        placement: "top",
        triggerType: "hover",
        onShow: function () {},
        onHide: function () {},
        onToggle: function () {},
    },
    yl = { id: null, override: !0 },
    bs = (function () {
        function t(e, n, i, r) {
            e === void 0 && (e = null),
                n === void 0 && (n = null),
                i === void 0 && (i = Ue),
                r === void 0 && (r = yl),
                (this._instanceId = r.id ? r.id : e.id),
                (this._targetEl = e),
                (this._triggerEl = n),
                (this._options = ut(ut({}, Ue), i)),
                (this._popperInstance = null),
                (this._visible = !1),
                (this._initialized = !1),
                this.init(),
                x.addInstance("Tooltip", this, this._instanceId, r.override);
        }
        return (
            (t.prototype.init = function () {
                this._triggerEl &&
                    this._targetEl &&
                    !this._initialized &&
                    (this._setupEventListeners(),
                    (this._popperInstance = this._createPopperInstance()),
                    (this._initialized = !0));
            }),
            (t.prototype.destroy = function () {
                var e = this;
                if (this._initialized) {
                    var n = this._getTriggerEvents();
                    n.showEvents.forEach(function (i) {
                        e._triggerEl.removeEventListener(i, e._showHandler);
                    }),
                        n.hideEvents.forEach(function (i) {
                            e._triggerEl.removeEventListener(i, e._hideHandler);
                        }),
                        this._removeKeydownListener(),
                        this._removeClickOutsideListener(),
                        this._popperInstance && this._popperInstance.destroy(),
                        (this._initialized = !1);
                }
            }),
            (t.prototype.removeInstance = function () {
                x.removeInstance("Tooltip", this._instanceId);
            }),
            (t.prototype.destroyAndRemoveInstance = function () {
                this.destroy(), this.removeInstance();
            }),
            (t.prototype._setupEventListeners = function () {
                var e = this,
                    n = this._getTriggerEvents();
                (this._showHandler = function () {
                    e.show();
                }),
                    (this._hideHandler = function () {
                        e.hide();
                    }),
                    n.showEvents.forEach(function (i) {
                        e._triggerEl.addEventListener(i, e._showHandler);
                    }),
                    n.hideEvents.forEach(function (i) {
                        e._triggerEl.addEventListener(i, e._hideHandler);
                    });
            }),
            (t.prototype._createPopperInstance = function () {
                return hi(this._triggerEl, this._targetEl, {
                    placement: this._options.placement,
                    modifiers: [
                        { name: "offset", options: { offset: [0, 8] } },
                    ],
                });
            }),
            (t.prototype._getTriggerEvents = function () {
                switch (this._options.triggerType) {
                    case "hover":
                        return {
                            showEvents: ["mouseenter", "focus"],
                            hideEvents: ["mouseleave", "blur"],
                        };
                    case "click":
                        return {
                            showEvents: ["click", "focus"],
                            hideEvents: ["focusout", "blur"],
                        };
                    case "none":
                        return { showEvents: [], hideEvents: [] };
                    default:
                        return {
                            showEvents: ["mouseenter", "focus"],
                            hideEvents: ["mouseleave", "blur"],
                        };
                }
            }),
            (t.prototype._setupKeydownListener = function () {
                var e = this;
                (this._keydownEventListener = function (n) {
                    n.key === "Escape" && e.hide();
                }),
                    document.body.addEventListener(
                        "keydown",
                        this._keydownEventListener,
                        !0
                    );
            }),
            (t.prototype._removeKeydownListener = function () {
                document.body.removeEventListener(
                    "keydown",
                    this._keydownEventListener,
                    !0
                );
            }),
            (t.prototype._setupClickOutsideListener = function () {
                var e = this;
                (this._clickOutsideEventListener = function (n) {
                    e._handleClickOutside(n, e._targetEl);
                }),
                    document.body.addEventListener(
                        "click",
                        this._clickOutsideEventListener,
                        !0
                    );
            }),
            (t.prototype._removeClickOutsideListener = function () {
                document.body.removeEventListener(
                    "click",
                    this._clickOutsideEventListener,
                    !0
                );
            }),
            (t.prototype._handleClickOutside = function (e, n) {
                var i = e.target;
                i !== n &&
                    !n.contains(i) &&
                    !this._triggerEl.contains(i) &&
                    this.isVisible() &&
                    this.hide();
            }),
            (t.prototype.isVisible = function () {
                return this._visible;
            }),
            (t.prototype.toggle = function () {
                this.isVisible() ? this.hide() : this.show();
            }),
            (t.prototype.show = function () {
                this._targetEl.classList.remove("opacity-0", "invisible"),
                    this._targetEl.classList.add("opacity-100", "visible"),
                    this._popperInstance.setOptions(function (e) {
                        return ut(ut({}, e), {
                            modifiers: we(
                                we([], e.modifiers, !0),
                                [{ name: "eventListeners", enabled: !0 }],
                                !1
                            ),
                        });
                    }),
                    this._setupClickOutsideListener(),
                    this._setupKeydownListener(),
                    this._popperInstance.update(),
                    (this._visible = !0),
                    this._options.onShow(this);
            }),
            (t.prototype.hide = function () {
                this._targetEl.classList.remove("opacity-100", "visible"),
                    this._targetEl.classList.add("opacity-0", "invisible"),
                    this._popperInstance.setOptions(function (e) {
                        return ut(ut({}, e), {
                            modifiers: we(
                                we([], e.modifiers, !0),
                                [{ name: "eventListeners", enabled: !1 }],
                                !1
                            ),
                        });
                    }),
                    this._removeClickOutsideListener(),
                    this._removeKeydownListener(),
                    (this._visible = !1),
                    this._options.onHide(this);
            }),
            t
        );
    })();
function yi() {
    document.querySelectorAll("[data-tooltip-target]").forEach(function (t) {
        var e = t.getAttribute("data-tooltip-target"),
            n = document.getElementById(e);
        if (n) {
            var i = t.getAttribute("data-tooltip-trigger"),
                r = t.getAttribute("data-tooltip-placement");
            new bs(n, t, {
                placement: r || Ue.placement,
                triggerType: i || Ue.triggerType,
            });
        } else console.error('The tooltip element with id "'.concat(e, '" does not exist. Please check the data-tooltip-target attribute.'));
    });
}
typeof window < "u" && ((window.Tooltip = bs), (window.initTooltips = yi));
var dt =
        (globalThis && globalThis.__assign) ||
        function () {
            return (
                (dt =
                    Object.assign ||
                    function (t) {
                        for (var e, n = 1, i = arguments.length; n < i; n++) {
                            e = arguments[n];
                            for (var r in e)
                                Object.prototype.hasOwnProperty.call(e, r) &&
                                    (t[r] = e[r]);
                        }
                        return t;
                    }),
                dt.apply(this, arguments)
            );
        },
    Ee =
        (globalThis && globalThis.__spreadArray) ||
        function (t, e, n) {
            if (n || arguments.length === 2)
                for (var i = 0, r = e.length, s; i < r; i++)
                    (s || !(i in e)) &&
                        (s || (s = Array.prototype.slice.call(e, 0, i)),
                        (s[i] = e[i]));
            return t.concat(s || Array.prototype.slice.call(e));
        },
    Qt = {
        placement: "top",
        offset: 10,
        triggerType: "hover",
        onShow: function () {},
        onHide: function () {},
        onToggle: function () {},
    },
    bl = { id: null, override: !0 },
    ws = (function () {
        function t(e, n, i, r) {
            e === void 0 && (e = null),
                n === void 0 && (n = null),
                i === void 0 && (i = Qt),
                r === void 0 && (r = bl),
                (this._instanceId = r.id ? r.id : e.id),
                (this._targetEl = e),
                (this._triggerEl = n),
                (this._options = dt(dt({}, Qt), i)),
                (this._popperInstance = null),
                (this._visible = !1),
                (this._initialized = !1),
                this.init(),
                x.addInstance(
                    "Popover",
                    this,
                    r.id ? r.id : this._targetEl.id,
                    r.override
                );
        }
        return (
            (t.prototype.init = function () {
                this._triggerEl &&
                    this._targetEl &&
                    !this._initialized &&
                    (this._setupEventListeners(),
                    (this._popperInstance = this._createPopperInstance()),
                    (this._initialized = !0));
            }),
            (t.prototype.destroy = function () {
                var e = this;
                if (this._initialized) {
                    var n = this._getTriggerEvents();
                    n.showEvents.forEach(function (i) {
                        e._triggerEl.removeEventListener(i, e._showHandler),
                            e._targetEl.removeEventListener(i, e._showHandler);
                    }),
                        n.hideEvents.forEach(function (i) {
                            e._triggerEl.removeEventListener(i, e._hideHandler),
                                e._targetEl.removeEventListener(
                                    i,
                                    e._hideHandler
                                );
                        }),
                        this._removeKeydownListener(),
                        this._removeClickOutsideListener(),
                        this._popperInstance && this._popperInstance.destroy(),
                        (this._initialized = !1);
                }
            }),
            (t.prototype.removeInstance = function () {
                x.removeInstance("Popover", this._instanceId);
            }),
            (t.prototype.destroyAndRemoveInstance = function () {
                this.destroy(), this.removeInstance();
            }),
            (t.prototype._setupEventListeners = function () {
                var e = this,
                    n = this._getTriggerEvents();
                (this._showHandler = function () {
                    e.show();
                }),
                    (this._hideHandler = function () {
                        setTimeout(function () {
                            e._targetEl.matches(":hover") || e.hide();
                        }, 100);
                    }),
                    n.showEvents.forEach(function (i) {
                        e._triggerEl.addEventListener(i, e._showHandler),
                            e._targetEl.addEventListener(i, e._showHandler);
                    }),
                    n.hideEvents.forEach(function (i) {
                        e._triggerEl.addEventListener(i, e._hideHandler),
                            e._targetEl.addEventListener(i, e._hideHandler);
                    });
            }),
            (t.prototype._createPopperInstance = function () {
                return hi(this._triggerEl, this._targetEl, {
                    placement: this._options.placement,
                    modifiers: [
                        {
                            name: "offset",
                            options: { offset: [0, this._options.offset] },
                        },
                    ],
                });
            }),
            (t.prototype._getTriggerEvents = function () {
                switch (this._options.triggerType) {
                    case "hover":
                        return {
                            showEvents: ["mouseenter", "focus"],
                            hideEvents: ["mouseleave", "blur"],
                        };
                    case "click":
                        return {
                            showEvents: ["click", "focus"],
                            hideEvents: ["focusout", "blur"],
                        };
                    case "none":
                        return { showEvents: [], hideEvents: [] };
                    default:
                        return {
                            showEvents: ["mouseenter", "focus"],
                            hideEvents: ["mouseleave", "blur"],
                        };
                }
            }),
            (t.prototype._setupKeydownListener = function () {
                var e = this;
                (this._keydownEventListener = function (n) {
                    n.key === "Escape" && e.hide();
                }),
                    document.body.addEventListener(
                        "keydown",
                        this._keydownEventListener,
                        !0
                    );
            }),
            (t.prototype._removeKeydownListener = function () {
                document.body.removeEventListener(
                    "keydown",
                    this._keydownEventListener,
                    !0
                );
            }),
            (t.prototype._setupClickOutsideListener = function () {
                var e = this;
                (this._clickOutsideEventListener = function (n) {
                    e._handleClickOutside(n, e._targetEl);
                }),
                    document.body.addEventListener(
                        "click",
                        this._clickOutsideEventListener,
                        !0
                    );
            }),
            (t.prototype._removeClickOutsideListener = function () {
                document.body.removeEventListener(
                    "click",
                    this._clickOutsideEventListener,
                    !0
                );
            }),
            (t.prototype._handleClickOutside = function (e, n) {
                var i = e.target;
                i !== n &&
                    !n.contains(i) &&
                    !this._triggerEl.contains(i) &&
                    this.isVisible() &&
                    this.hide();
            }),
            (t.prototype.isVisible = function () {
                return this._visible;
            }),
            (t.prototype.toggle = function () {
                this.isVisible() ? this.hide() : this.show(),
                    this._options.onToggle(this);
            }),
            (t.prototype.show = function () {
                this._targetEl.classList.remove("opacity-0", "invisible"),
                    this._targetEl.classList.add("opacity-100", "visible"),
                    this._popperInstance.setOptions(function (e) {
                        return dt(dt({}, e), {
                            modifiers: Ee(
                                Ee([], e.modifiers, !0),
                                [{ name: "eventListeners", enabled: !0 }],
                                !1
                            ),
                        });
                    }),
                    this._setupClickOutsideListener(),
                    this._setupKeydownListener(),
                    this._popperInstance.update(),
                    (this._visible = !0),
                    this._options.onShow(this);
            }),
            (t.prototype.hide = function () {
                this._targetEl.classList.remove("opacity-100", "visible"),
                    this._targetEl.classList.add("opacity-0", "invisible"),
                    this._popperInstance.setOptions(function (e) {
                        return dt(dt({}, e), {
                            modifiers: Ee(
                                Ee([], e.modifiers, !0),
                                [{ name: "eventListeners", enabled: !1 }],
                                !1
                            ),
                        });
                    }),
                    this._removeClickOutsideListener(),
                    this._removeKeydownListener(),
                    (this._visible = !1),
                    this._options.onHide(this);
            }),
            t
        );
    })();
function bi() {
    document.querySelectorAll("[data-popover-target]").forEach(function (t) {
        var e = t.getAttribute("data-popover-target"),
            n = document.getElementById(e);
        if (n) {
            var i = t.getAttribute("data-popover-trigger"),
                r = t.getAttribute("data-popover-placement"),
                s = t.getAttribute("data-popover-offset");
            new ws(n, t, {
                placement: r || Qt.placement,
                offset: s ? parseInt(s) : Qt.offset,
                triggerType: i || Qt.triggerType,
            });
        } else console.error('The popover element with id "'.concat(e, '" does not exist. Please check the data-popover-target attribute.'));
    });
}
typeof window < "u" && ((window.Popover = ws), (window.initPopovers = bi));
var Ve =
        (globalThis && globalThis.__assign) ||
        function () {
            return (
                (Ve =
                    Object.assign ||
                    function (t) {
                        for (var e, n = 1, i = arguments.length; n < i; n++) {
                            e = arguments[n];
                            for (var r in e)
                                Object.prototype.hasOwnProperty.call(e, r) &&
                                    (t[r] = e[r]);
                        }
                        return t;
                    }),
                Ve.apply(this, arguments)
            );
        },
    Pn = {
        triggerType: "hover",
        onShow: function () {},
        onHide: function () {},
        onToggle: function () {},
    },
    wl = { id: null, override: !0 },
    Es = (function () {
        function t(e, n, i, r, s) {
            e === void 0 && (e = null),
                n === void 0 && (n = null),
                i === void 0 && (i = null),
                r === void 0 && (r = Pn),
                s === void 0 && (s = wl),
                (this._instanceId = s.id ? s.id : i.id),
                (this._parentEl = e),
                (this._triggerEl = n),
                (this._targetEl = i),
                (this._options = Ve(Ve({}, Pn), r)),
                (this._visible = !1),
                (this._initialized = !1),
                this.init(),
                x.addInstance("Dial", this, this._instanceId, s.override);
        }
        return (
            (t.prototype.init = function () {
                var e = this;
                if (this._triggerEl && this._targetEl && !this._initialized) {
                    var n = this._getTriggerEventTypes(
                        this._options.triggerType
                    );
                    (this._showEventHandler = function () {
                        e.show();
                    }),
                        n.showEvents.forEach(function (i) {
                            e._triggerEl.addEventListener(
                                i,
                                e._showEventHandler
                            ),
                                e._targetEl.addEventListener(
                                    i,
                                    e._showEventHandler
                                );
                        }),
                        (this._hideEventHandler = function () {
                            e._parentEl.matches(":hover") || e.hide();
                        }),
                        n.hideEvents.forEach(function (i) {
                            e._parentEl.addEventListener(
                                i,
                                e._hideEventHandler
                            );
                        }),
                        (this._initialized = !0);
                }
            }),
            (t.prototype.destroy = function () {
                var e = this;
                if (this._initialized) {
                    var n = this._getTriggerEventTypes(
                        this._options.triggerType
                    );
                    n.showEvents.forEach(function (i) {
                        e._triggerEl.removeEventListener(
                            i,
                            e._showEventHandler
                        ),
                            e._targetEl.removeEventListener(
                                i,
                                e._showEventHandler
                            );
                    }),
                        n.hideEvents.forEach(function (i) {
                            e._parentEl.removeEventListener(
                                i,
                                e._hideEventHandler
                            );
                        }),
                        (this._initialized = !1);
                }
            }),
            (t.prototype.removeInstance = function () {
                x.removeInstance("Dial", this._instanceId);
            }),
            (t.prototype.destroyAndRemoveInstance = function () {
                this.destroy(), this.removeInstance();
            }),
            (t.prototype.hide = function () {
                this._targetEl.classList.add("hidden"),
                    this._triggerEl &&
                        this._triggerEl.setAttribute("aria-expanded", "false"),
                    (this._visible = !1),
                    this._options.onHide(this);
            }),
            (t.prototype.show = function () {
                this._targetEl.classList.remove("hidden"),
                    this._triggerEl &&
                        this._triggerEl.setAttribute("aria-expanded", "true"),
                    (this._visible = !0),
                    this._options.onShow(this);
            }),
            (t.prototype.toggle = function () {
                this._visible ? this.hide() : this.show();
            }),
            (t.prototype.isHidden = function () {
                return !this._visible;
            }),
            (t.prototype.isVisible = function () {
                return this._visible;
            }),
            (t.prototype._getTriggerEventTypes = function (e) {
                switch (e) {
                    case "hover":
                        return {
                            showEvents: ["mouseenter", "focus"],
                            hideEvents: ["mouseleave", "blur"],
                        };
                    case "click":
                        return {
                            showEvents: ["click", "focus"],
                            hideEvents: ["focusout", "blur"],
                        };
                    case "none":
                        return { showEvents: [], hideEvents: [] };
                    default:
                        return {
                            showEvents: ["mouseenter", "focus"],
                            hideEvents: ["mouseleave", "blur"],
                        };
                }
            }),
            t
        );
    })();
function wi() {
    document.querySelectorAll("[data-dial-init]").forEach(function (t) {
        var e = t.querySelector("[data-dial-toggle]");
        if (e) {
            var n = e.getAttribute("data-dial-toggle"),
                i = document.getElementById(n);
            if (i) {
                var r = e.getAttribute("data-dial-trigger");
                new Es(t, e, i, { triggerType: r || Pn.triggerType });
            } else
                console.error(
                    "Dial with id ".concat(
                        n,
                        " does not exist. Are you sure that the data-dial-toggle attribute points to the correct modal id?"
                    )
                );
        } else console.error("Dial with id ".concat(t.id, " does not have a trigger element. Are you sure that the data-dial-toggle attribute exists?"));
    });
}
typeof window < "u" && ((window.Dial = Es), (window.initDials = wi));
var Ke =
        (globalThis && globalThis.__assign) ||
        function () {
            return (
                (Ke =
                    Object.assign ||
                    function (t) {
                        for (var e, n = 1, i = arguments.length; n < i; n++) {
                            e = arguments[n];
                            for (var r in e)
                                Object.prototype.hasOwnProperty.call(e, r) &&
                                    (t[r] = e[r]);
                        }
                        return t;
                    }),
                Ke.apply(this, arguments)
            );
        },
    Er = {
        minValue: null,
        maxValue: null,
        onIncrement: function () {},
        onDecrement: function () {},
    },
    El = { id: null, override: !0 },
    xs = (function () {
        function t(e, n, i, r, s) {
            e === void 0 && (e = null),
                n === void 0 && (n = null),
                i === void 0 && (i = null),
                r === void 0 && (r = Er),
                s === void 0 && (s = El),
                (this._instanceId = s.id ? s.id : e.id),
                (this._targetEl = e),
                (this._incrementEl = n),
                (this._decrementEl = i),
                (this._options = Ke(Ke({}, Er), r)),
                (this._initialized = !1),
                this.init(),
                x.addInstance(
                    "InputCounter",
                    this,
                    this._instanceId,
                    s.override
                );
        }
        return (
            (t.prototype.init = function () {
                var e = this;
                this._targetEl &&
                    !this._initialized &&
                    ((this._inputHandler = function (n) {
                        {
                            var i = n.target;
                            /^\d*$/.test(i.value) ||
                                (i.value = i.value.replace(/[^\d]/g, "")),
                                e._options.maxValue !== null &&
                                    parseInt(i.value) > e._options.maxValue &&
                                    (i.value = e._options.maxValue.toString()),
                                e._options.minValue !== null &&
                                    parseInt(i.value) < e._options.minValue &&
                                    (i.value = e._options.minValue.toString());
                        }
                    }),
                    (this._incrementClickHandler = function () {
                        e.increment();
                    }),
                    (this._decrementClickHandler = function () {
                        e.decrement();
                    }),
                    this._targetEl.addEventListener(
                        "input",
                        this._inputHandler
                    ),
                    this._incrementEl &&
                        this._incrementEl.addEventListener(
                            "click",
                            this._incrementClickHandler
                        ),
                    this._decrementEl &&
                        this._decrementEl.addEventListener(
                            "click",
                            this._decrementClickHandler
                        ),
                    (this._initialized = !0));
            }),
            (t.prototype.destroy = function () {
                this._targetEl &&
                    this._initialized &&
                    (this._targetEl.removeEventListener(
                        "input",
                        this._inputHandler
                    ),
                    this._incrementEl &&
                        this._incrementEl.removeEventListener(
                            "click",
                            this._incrementClickHandler
                        ),
                    this._decrementEl &&
                        this._decrementEl.removeEventListener(
                            "click",
                            this._decrementClickHandler
                        ),
                    (this._initialized = !1));
            }),
            (t.prototype.removeInstance = function () {
                x.removeInstance("InputCounter", this._instanceId);
            }),
            (t.prototype.destroyAndRemoveInstance = function () {
                this.destroy(), this.removeInstance();
            }),
            (t.prototype.getCurrentValue = function () {
                return parseInt(this._targetEl.value) || 0;
            }),
            (t.prototype.increment = function () {
                (this._options.maxValue !== null &&
                    this.getCurrentValue() >= this._options.maxValue) ||
                    ((this._targetEl.value = (
                        this.getCurrentValue() + 1
                    ).toString()),
                    this._options.onIncrement(this));
            }),
            (t.prototype.decrement = function () {
                (this._options.minValue !== null &&
                    this.getCurrentValue() <= this._options.minValue) ||
                    ((this._targetEl.value = (
                        this.getCurrentValue() - 1
                    ).toString()),
                    this._options.onDecrement(this));
            }),
            t
        );
    })();
function Ei() {
    document.querySelectorAll("[data-input-counter]").forEach(function (t) {
        var e = t.id,
            n = document.querySelector(
                '[data-input-counter-increment="' + e + '"]'
            ),
            i = document.querySelector(
                '[data-input-counter-decrement="' + e + '"]'
            ),
            r = t.getAttribute("data-input-counter-min"),
            s = t.getAttribute("data-input-counter-max");
        t
            ? x.instanceExists("InputCounter", t.getAttribute("id")) ||
              new xs(t, n || null, i || null, {
                  minValue: r ? parseInt(r) : null,
                  maxValue: s ? parseInt(s) : null,
              })
            : console.error(
                  'The target element with id "'.concat(
                      e,
                      '" does not exist. Please check the data-input-counter attribute.'
                  )
              );
    });
}
typeof window < "u" &&
    ((window.InputCounter = xs), (window.initInputCounters = Ei));
function xl() {
    ii(), ri(), si(), oi(), vi(), _i(), gi(), mi(), yi(), bi(), wi(), Ei();
}
typeof window < "u" && (window.initFlowbite = xl);
var Al = new rc("load", [ii, ri, si, oi, vi, _i, gi, mi, yi, bi, wi, Ei]);
Al.init();
var Rn = !1,
    Dn = !1,
    St = [],
    jn = -1;
function Ol(t) {
    Sl(t);
}
function Sl(t) {
    St.includes(t) || St.push(t), Il();
}
function As(t) {
    let e = St.indexOf(t);
    e !== -1 && e > jn && St.splice(e, 1);
}
function Il() {
    !Dn && !Rn && ((Rn = !0), queueMicrotask(Ll));
}
function Ll() {
    (Rn = !1), (Dn = !0);
    for (let t = 0; t < St.length; t++) St[t](), (jn = t);
    (St.length = 0), (jn = -1), (Dn = !1);
}
var Ft,
    zt,
    ue,
    Os,
    Hn = !0;
function Cl(t) {
    (Hn = !1), t(), (Hn = !0);
}
function Tl(t) {
    (Ft = t.reactive),
        (ue = t.release),
        (zt = (e) =>
            t.effect(e, {
                scheduler: (n) => {
                    Hn ? Ol(n) : n();
                },
            })),
        (Os = t.raw);
}
function xr(t) {
    zt = t;
}
function kl(t) {
    let e = () => {};
    return [
        (i) => {
            let r = zt(i);
            return (
                t._x_effects ||
                    ((t._x_effects = new Set()),
                    (t._x_runEffects = () => {
                        t._x_effects.forEach((s) => s());
                    })),
                t._x_effects.add(r),
                (e = () => {
                    r !== void 0 && (t._x_effects.delete(r), ue(r));
                }),
                r
            );
        },
        () => {
            e();
        },
    ];
}
function Zt(t, e, n = {}) {
    t.dispatchEvent(
        new CustomEvent(e, {
            detail: n,
            bubbles: !0,
            composed: !0,
            cancelable: !0,
        })
    );
}
function ft(t, e) {
    if (typeof ShadowRoot == "function" && t instanceof ShadowRoot) {
        Array.from(t.children).forEach((r) => ft(r, e));
        return;
    }
    let n = !1;
    if ((e(t, () => (n = !0)), n)) return;
    let i = t.firstElementChild;
    for (; i; ) ft(i, e), (i = i.nextElementSibling);
}
function it(t, ...e) {
    console.warn(`Alpine Warning: ${t}`, ...e);
}
var Ar = !1;
function Pl() {
    Ar &&
        it(
            "Alpine has already been initialized on this page. Calling Alpine.start() more than once can cause problems."
        ),
        (Ar = !0),
        document.body ||
            it(
                "Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"
            ),
        Zt(document, "alpine:init"),
        Zt(document, "alpine:initializing"),
        Li(),
        jl((e) => rt(e, ft)),
        Oi((e) => Ai(e)),
        js((e, n) => {
            Pi(e, n).forEach((i) => i());
        });
    let t = (e) => !nn(e.parentElement, !0);
    Array.from(document.querySelectorAll(Ls()))
        .filter(t)
        .forEach((e) => {
            rt(e);
        }),
        Zt(document, "alpine:initialized");
}
var xi = [],
    Ss = [];
function Is() {
    return xi.map((t) => t());
}
function Ls() {
    return xi.concat(Ss).map((t) => t());
}
function Cs(t) {
    xi.push(t);
}
function Ts(t) {
    Ss.push(t);
}
function nn(t, e = !1) {
    return rn(t, (n) => {
        if ((e ? Ls() : Is()).some((r) => n.matches(r))) return !0;
    });
}
function rn(t, e) {
    if (t) {
        if (e(t)) return t;
        if ((t._x_teleportBack && (t = t._x_teleportBack), !!t.parentElement))
            return rn(t.parentElement, e);
    }
}
function Rl(t) {
    return Is().some((e) => t.matches(e));
}
var ks = [];
function Dl(t) {
    ks.push(t);
}
function rt(t, e = ft, n = () => {}) {
    Yl(() => {
        e(t, (i, r) => {
            n(i, r),
                ks.forEach((s) => s(i, r)),
                Pi(i, i.attributes).forEach((s) => s()),
                i._x_ignore && r();
        });
    });
}
function Ai(t) {
    ft(t, (e) => {
        Ms(e), Hl(e);
    });
}
var Ps = [],
    Rs = [],
    Ds = [];
function jl(t) {
    Ds.push(t);
}
function Oi(t, e) {
    typeof e == "function"
        ? (t._x_cleanups || (t._x_cleanups = []), t._x_cleanups.push(e))
        : ((e = t), Rs.push(e));
}
function js(t) {
    Ps.push(t);
}
function Hs(t, e, n) {
    t._x_attributeCleanups || (t._x_attributeCleanups = {}),
        t._x_attributeCleanups[e] || (t._x_attributeCleanups[e] = []),
        t._x_attributeCleanups[e].push(n);
}
function Ms(t, e) {
    t._x_attributeCleanups &&
        Object.entries(t._x_attributeCleanups).forEach(([n, i]) => {
            (e === void 0 || e.includes(n)) &&
                (i.forEach((r) => r()), delete t._x_attributeCleanups[n]);
        });
}
function Hl(t) {
    if (t._x_cleanups) for (; t._x_cleanups.length; ) t._x_cleanups.pop()();
}
var Si = new MutationObserver(Ti),
    Ii = !1;
function Li() {
    Si.observe(document, {
        subtree: !0,
        childList: !0,
        attributes: !0,
        attributeOldValue: !0,
    }),
        (Ii = !0);
}
function Ns() {
    Ml(), Si.disconnect(), (Ii = !1);
}
var te = [],
    yn = !1;
function Ml() {
    (te = te.concat(Si.takeRecords())),
        te.length &&
            !yn &&
            ((yn = !0),
            queueMicrotask(() => {
                Nl(), (yn = !1);
            }));
}
function Nl() {
    Ti(te), (te.length = 0);
}
function R(t) {
    if (!Ii) return t();
    Ns();
    let e = t();
    return Li(), e;
}
var Ci = !1,
    We = [];
function Bl() {
    Ci = !0;
}
function Fl() {
    (Ci = !1), Ti(We), (We = []);
}
function Ti(t) {
    if (Ci) {
        We = We.concat(t);
        return;
    }
    let e = [],
        n = [],
        i = new Map(),
        r = new Map();
    for (let s = 0; s < t.length; s++)
        if (
            !t[s].target._x_ignoreMutationObserver &&
            (t[s].type === "childList" &&
                (t[s].addedNodes.forEach((o) => o.nodeType === 1 && e.push(o)),
                t[s].removedNodes.forEach(
                    (o) => o.nodeType === 1 && n.push(o)
                )),
            t[s].type === "attributes")
        ) {
            let o = t[s].target,
                a = t[s].attributeName,
                c = t[s].oldValue,
                u = () => {
                    i.has(o) || i.set(o, []),
                        i.get(o).push({ name: a, value: o.getAttribute(a) });
                },
                l = () => {
                    r.has(o) || r.set(o, []), r.get(o).push(a);
                };
            o.hasAttribute(a) && c === null
                ? u()
                : o.hasAttribute(a)
                ? (l(), u())
                : l();
        }
    r.forEach((s, o) => {
        Ms(o, s);
    }),
        i.forEach((s, o) => {
            Ps.forEach((a) => a(o, s));
        });
    for (let s of n) e.includes(s) || (Rs.forEach((o) => o(s)), Ai(s));
    e.forEach((s) => {
        (s._x_ignoreSelf = !0), (s._x_ignore = !0);
    });
    for (let s of e)
        n.includes(s) ||
            (s.isConnected &&
                (delete s._x_ignoreSelf,
                delete s._x_ignore,
                Ds.forEach((o) => o(s)),
                (s._x_ignore = !0),
                (s._x_ignoreSelf = !0)));
    e.forEach((s) => {
        delete s._x_ignoreSelf, delete s._x_ignore;
    }),
        (e = null),
        (n = null),
        (i = null),
        (r = null);
}
function Bs(t) {
    return fe(Mt(t));
}
function de(t, e, n) {
    return (
        (t._x_dataStack = [e, ...Mt(n || t)]),
        () => {
            t._x_dataStack = t._x_dataStack.filter((i) => i !== e);
        }
    );
}
function Mt(t) {
    return t._x_dataStack
        ? t._x_dataStack
        : typeof ShadowRoot == "function" && t instanceof ShadowRoot
        ? Mt(t.host)
        : t.parentNode
        ? Mt(t.parentNode)
        : [];
}
function fe(t) {
    return new Proxy({ objects: t }, zl);
}
var zl = {
    ownKeys({ objects: t }) {
        return Array.from(new Set(t.flatMap((e) => Object.keys(e))));
    },
    has({ objects: t }, e) {
        return e == Symbol.unscopables
            ? !1
            : t.some((n) => Object.prototype.hasOwnProperty.call(n, e));
    },
    get({ objects: t }, e, n) {
        return e == "toJSON"
            ? $l
            : Reflect.get(
                  t.find((i) => Object.prototype.hasOwnProperty.call(i, e)) ||
                      {},
                  e,
                  n
              );
    },
    set({ objects: t }, e, n, i) {
        const r =
                t.find((o) => Object.prototype.hasOwnProperty.call(o, e)) ||
                t[t.length - 1],
            s = Object.getOwnPropertyDescriptor(r, e);
        return s != null && s.set && s != null && s.get
            ? Reflect.set(r, e, n, i)
            : Reflect.set(r, e, n);
    },
};
function $l() {
    return Reflect.ownKeys(this).reduce(
        (e, n) => ((e[n] = Reflect.get(this, n)), e),
        {}
    );
}
function Fs(t) {
    let e = (i) => typeof i == "object" && !Array.isArray(i) && i !== null,
        n = (i, r = "") => {
            Object.entries(Object.getOwnPropertyDescriptors(i)).forEach(
                ([s, { value: o, enumerable: a }]) => {
                    if (a === !1 || o === void 0) return;
                    let c = r === "" ? s : `${r}.${s}`;
                    typeof o == "object" && o !== null && o._x_interceptor
                        ? (i[s] = o.initialize(t, c, s))
                        : e(o) && o !== i && !(o instanceof Element) && n(o, c);
                }
            );
        };
    return n(t);
}
function zs(t, e = () => {}) {
    let n = {
        initialValue: void 0,
        _x_interceptor: !0,
        initialize(i, r, s) {
            return t(
                this.initialValue,
                () => ql(i, r),
                (o) => Mn(i, r, o),
                r,
                s
            );
        },
    };
    return (
        e(n),
        (i) => {
            if (typeof i == "object" && i !== null && i._x_interceptor) {
                let r = n.initialize.bind(n);
                n.initialize = (s, o, a) => {
                    let c = i.initialize(s, o, a);
                    return (n.initialValue = c), r(s, o, a);
                };
            } else n.initialValue = i;
            return n;
        }
    );
}
function ql(t, e) {
    return e.split(".").reduce((n, i) => n[i], t);
}
function Mn(t, e, n) {
    if ((typeof e == "string" && (e = e.split(".")), e.length === 1))
        t[e[0]] = n;
    else {
        if (e.length === 0) throw error;
        return t[e[0]] || (t[e[0]] = {}), Mn(t[e[0]], e.slice(1), n);
    }
}
var $s = {};
function X(t, e) {
    $s[t] = e;
}
function Nn(t, e) {
    return (
        Object.entries($s).forEach(([n, i]) => {
            let r = null;
            function s() {
                if (r) return r;
                {
                    let [o, a] = Js(e);
                    return (r = { interceptor: zs, ...o }), Oi(e, a), r;
                }
            }
            Object.defineProperty(t, `$${n}`, {
                get() {
                    return i(e, s());
                },
                enumerable: !1,
            });
        }),
        t
    );
}
function Ul(t, e, n, ...i) {
    try {
        return n(...i);
    } catch (r) {
        se(r, t, e);
    }
}
function se(t, e, n = void 0) {
    Object.assign(t, { el: e, expression: n }),
        console.warn(
            `Alpine Expression Error: ${t.message}

${
    n
        ? 'Expression: "' +
          n +
          `"

`
        : ""
}`,
            e
        ),
        setTimeout(() => {
            throw t;
        }, 0);
}
var Re = !0;
function qs(t) {
    let e = Re;
    Re = !1;
    let n = t();
    return (Re = e), n;
}
function It(t, e, n = {}) {
    let i;
    return H(t, e)((r) => (i = r), n), i;
}
function H(...t) {
    return Us(...t);
}
var Us = Vs;
function Vl(t) {
    Us = t;
}
function Vs(t, e) {
    let n = {};
    Nn(n, t);
    let i = [n, ...Mt(t)],
        r = typeof e == "function" ? Kl(i, e) : Jl(i, e, t);
    return Ul.bind(null, t, e, r);
}
function Kl(t, e) {
    return (n = () => {}, { scope: i = {}, params: r = [] } = {}) => {
        let s = e.apply(fe([i, ...t]), r);
        Je(n, s);
    };
}
var bn = {};
function Wl(t, e) {
    if (bn[t]) return bn[t];
    let n = Object.getPrototypeOf(async function () {}).constructor,
        i =
            /^[\n\s]*if.*\(.*\)/.test(t.trim()) ||
            /^(let|const)\s/.test(t.trim())
                ? `(async()=>{ ${t} })()`
                : t,
        s = (() => {
            try {
                let o = new n(
                    ["__self", "scope"],
                    `with (scope) { __self.result = ${i} }; __self.finished = true; return __self.result;`
                );
                return (
                    Object.defineProperty(o, "name", {
                        value: `[Alpine] ${t}`,
                    }),
                    o
                );
            } catch (o) {
                return se(o, e, t), Promise.resolve();
            }
        })();
    return (bn[t] = s), s;
}
function Jl(t, e, n) {
    let i = Wl(e, n);
    return (r = () => {}, { scope: s = {}, params: o = [] } = {}) => {
        (i.result = void 0), (i.finished = !1);
        let a = fe([s, ...t]);
        if (typeof i == "function") {
            let c = i(i, a).catch((u) => se(u, n, e));
            i.finished
                ? (Je(r, i.result, a, o, n), (i.result = void 0))
                : c
                      .then((u) => {
                          Je(r, u, a, o, n);
                      })
                      .catch((u) => se(u, n, e))
                      .finally(() => (i.result = void 0));
        }
    };
}
function Je(t, e, n, i, r) {
    if (Re && typeof e == "function") {
        let s = e.apply(n, i);
        s instanceof Promise
            ? s.then((o) => Je(t, o, n, i)).catch((o) => se(o, r, e))
            : t(s);
    } else
        typeof e == "object" && e instanceof Promise
            ? e.then((s) => t(s))
            : t(e);
}
var ki = "x-";
function $t(t = "") {
    return ki + t;
}
function Xl(t) {
    ki = t;
}
var Bn = {};
function k(t, e) {
    return (
        (Bn[t] = e),
        {
            before(n) {
                if (!Bn[n]) {
                    console.warn(
                        "Cannot find directive `${directive}`. `${name}` will use the default order of execution"
                    );
                    return;
                }
                const i = At.indexOf(n);
                At.splice(i >= 0 ? i : At.indexOf("DEFAULT"), 0, t);
            },
        }
    );
}
function Pi(t, e, n) {
    if (((e = Array.from(e)), t._x_virtualDirectives)) {
        let s = Object.entries(t._x_virtualDirectives).map(([a, c]) => ({
                name: a,
                value: c,
            })),
            o = Ks(s);
        (s = s.map((a) =>
            o.find((c) => c.name === a.name)
                ? { name: `x-bind:${a.name}`, value: `"${a.value}"` }
                : a
        )),
            (e = e.concat(s));
    }
    let i = {};
    return e
        .map(Gs((s, o) => (i[s] = o)))
        .filter(Zs)
        .map(Ql(i, n))
        .sort(Zl)
        .map((s) => Gl(t, s));
}
function Ks(t) {
    return Array.from(t)
        .map(Gs())
        .filter((e) => !Zs(e));
}
var Fn = !1,
    Xt = new Map(),
    Ws = Symbol();
function Yl(t) {
    Fn = !0;
    let e = Symbol();
    (Ws = e), Xt.set(e, []);
    let n = () => {
            for (; Xt.get(e).length; ) Xt.get(e).shift()();
            Xt.delete(e);
        },
        i = () => {
            (Fn = !1), n();
        };
    t(n), i();
}
function Js(t) {
    let e = [],
        n = (a) => e.push(a),
        [i, r] = kl(t);
    return (
        e.push(r),
        [
            {
                Alpine: pe,
                effect: i,
                cleanup: n,
                evaluateLater: H.bind(H, t),
                evaluate: It.bind(It, t),
            },
            () => e.forEach((a) => a()),
        ]
    );
}
function Gl(t, e) {
    let n = () => {},
        i = Bn[e.type] || n,
        [r, s] = Js(t);
    Hs(t, e.original, s);
    let o = () => {
        t._x_ignore ||
            t._x_ignoreSelf ||
            (i.inline && i.inline(t, e, r),
            (i = i.bind(i, t, e, r)),
            Fn ? Xt.get(Ws).push(i) : i());
    };
    return (o.runCleanups = s), o;
}
var Xs =
        (t, e) =>
        ({ name: n, value: i }) => (
            n.startsWith(t) && (n = n.replace(t, e)), { name: n, value: i }
        ),
    Ys = (t) => t;
function Gs(t = () => {}) {
    return ({ name: e, value: n }) => {
        let { name: i, value: r } = Qs.reduce((s, o) => o(s), {
            name: e,
            value: n,
        });
        return i !== e && t(i, e), { name: i, value: r };
    };
}
var Qs = [];
function Ri(t) {
    Qs.push(t);
}
function Zs({ name: t }) {
    return to().test(t);
}
var to = () => new RegExp(`^${ki}([^:^.]+)\\b`);
function Ql(t, e) {
    return ({ name: n, value: i }) => {
        let r = n.match(to()),
            s = n.match(/:([a-zA-Z0-9\-_:]+)/),
            o = n.match(/\.[^.\]]+(?=[^\]]*$)/g) || [],
            a = e || t[n] || n;
        return {
            type: r ? r[1] : null,
            value: s ? s[1] : null,
            modifiers: o.map((c) => c.replace(".", "")),
            expression: i,
            original: a,
        };
    };
}
var zn = "DEFAULT",
    At = [
        "ignore",
        "ref",
        "data",
        "id",
        "bind",
        "init",
        "for",
        "model",
        "modelable",
        "transition",
        "show",
        "if",
        zn,
        "teleport",
    ];
function Zl(t, e) {
    let n = At.indexOf(t.type) === -1 ? zn : t.type,
        i = At.indexOf(e.type) === -1 ? zn : e.type;
    return At.indexOf(n) - At.indexOf(i);
}
var $n = [],
    Di = !1;
function ji(t = () => {}) {
    return (
        queueMicrotask(() => {
            Di ||
                setTimeout(() => {
                    qn();
                });
        }),
        new Promise((e) => {
            $n.push(() => {
                t(), e();
            });
        })
    );
}
function qn() {
    for (Di = !1; $n.length; ) $n.shift()();
}
function tu() {
    Di = !0;
}
function Hi(t, e) {
    return Array.isArray(e)
        ? Or(t, e.join(" "))
        : typeof e == "object" && e !== null
        ? eu(t, e)
        : typeof e == "function"
        ? Hi(t, e())
        : Or(t, e);
}
function Or(t, e) {
    let n = (r) =>
            r
                .split(" ")
                .filter((s) => !t.classList.contains(s))
                .filter(Boolean),
        i = (r) => (
            t.classList.add(...r),
            () => {
                t.classList.remove(...r);
            }
        );
    return (e = e === !0 ? (e = "") : e || ""), i(n(e));
}
function eu(t, e) {
    let n = (a) => a.split(" ").filter(Boolean),
        i = Object.entries(e)
            .flatMap(([a, c]) => (c ? n(a) : !1))
            .filter(Boolean),
        r = Object.entries(e)
            .flatMap(([a, c]) => (c ? !1 : n(a)))
            .filter(Boolean),
        s = [],
        o = [];
    return (
        r.forEach((a) => {
            t.classList.contains(a) && (t.classList.remove(a), o.push(a));
        }),
        i.forEach((a) => {
            t.classList.contains(a) || (t.classList.add(a), s.push(a));
        }),
        () => {
            o.forEach((a) => t.classList.add(a)),
                s.forEach((a) => t.classList.remove(a));
        }
    );
}
function sn(t, e) {
    return typeof e == "object" && e !== null ? nu(t, e) : iu(t, e);
}
function nu(t, e) {
    let n = {};
    return (
        Object.entries(e).forEach(([i, r]) => {
            (n[i] = t.style[i]),
                i.startsWith("--") || (i = ru(i)),
                t.style.setProperty(i, r);
        }),
        setTimeout(() => {
            t.style.length === 0 && t.removeAttribute("style");
        }),
        () => {
            sn(t, n);
        }
    );
}
function iu(t, e) {
    let n = t.getAttribute("style", e);
    return (
        t.setAttribute("style", e),
        () => {
            t.setAttribute("style", n || "");
        }
    );
}
function ru(t) {
    return t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
function Un(t, e = () => {}) {
    let n = !1;
    return function () {
        n ? e.apply(this, arguments) : ((n = !0), t.apply(this, arguments));
    };
}
k(
    "transition",
    (t, { value: e, modifiers: n, expression: i }, { evaluate: r }) => {
        typeof i == "function" && (i = r(i)),
            i !== !1 &&
                (!i || typeof i == "boolean" ? ou(t, n, e) : su(t, i, e));
    }
);
function su(t, e, n) {
    eo(t, Hi, ""),
        {
            enter: (r) => {
                t._x_transition.enter.during = r;
            },
            "enter-start": (r) => {
                t._x_transition.enter.start = r;
            },
            "enter-end": (r) => {
                t._x_transition.enter.end = r;
            },
            leave: (r) => {
                t._x_transition.leave.during = r;
            },
            "leave-start": (r) => {
                t._x_transition.leave.start = r;
            },
            "leave-end": (r) => {
                t._x_transition.leave.end = r;
            },
        }[n](e);
}
function ou(t, e, n) {
    eo(t, sn);
    let i = !e.includes("in") && !e.includes("out") && !n,
        r = i || e.includes("in") || ["enter"].includes(n),
        s = i || e.includes("out") || ["leave"].includes(n);
    e.includes("in") && !i && (e = e.filter((m, b) => b < e.indexOf("out"))),
        e.includes("out") &&
            !i &&
            (e = e.filter((m, b) => b > e.indexOf("out")));
    let o = !e.includes("opacity") && !e.includes("scale"),
        a = o || e.includes("opacity"),
        c = o || e.includes("scale"),
        u = a ? 0 : 1,
        l = c ? Wt(e, "scale", 95) / 100 : 1,
        d = Wt(e, "delay", 0) / 1e3,
        _ = Wt(e, "origin", "center"),
        g = "opacity, transform",
        v = Wt(e, "duration", 150) / 1e3,
        h = Wt(e, "duration", 75) / 1e3,
        p = "cubic-bezier(0.4, 0.0, 0.2, 1)";
    r &&
        ((t._x_transition.enter.during = {
            transformOrigin: _,
            transitionDelay: `${d}s`,
            transitionProperty: g,
            transitionDuration: `${v}s`,
            transitionTimingFunction: p,
        }),
        (t._x_transition.enter.start = {
            opacity: u,
            transform: `scale(${l})`,
        }),
        (t._x_transition.enter.end = { opacity: 1, transform: "scale(1)" })),
        s &&
            ((t._x_transition.leave.during = {
                transformOrigin: _,
                transitionDelay: `${d}s`,
                transitionProperty: g,
                transitionDuration: `${h}s`,
                transitionTimingFunction: p,
            }),
            (t._x_transition.leave.start = {
                opacity: 1,
                transform: "scale(1)",
            }),
            (t._x_transition.leave.end = {
                opacity: u,
                transform: `scale(${l})`,
            }));
}
function eo(t, e, n = {}) {
    t._x_transition ||
        (t._x_transition = {
            enter: { during: n, start: n, end: n },
            leave: { during: n, start: n, end: n },
            in(i = () => {}, r = () => {}) {
                Vn(
                    t,
                    e,
                    {
                        during: this.enter.during,
                        start: this.enter.start,
                        end: this.enter.end,
                    },
                    i,
                    r
                );
            },
            out(i = () => {}, r = () => {}) {
                Vn(
                    t,
                    e,
                    {
                        during: this.leave.during,
                        start: this.leave.start,
                        end: this.leave.end,
                    },
                    i,
                    r
                );
            },
        });
}
window.Element.prototype._x_toggleAndCascadeWithTransitions = function (
    t,
    e,
    n,
    i
) {
    const r =
        document.visibilityState === "visible"
            ? requestAnimationFrame
            : setTimeout;
    let s = () => r(n);
    if (e) {
        t._x_transition && (t._x_transition.enter || t._x_transition.leave)
            ? t._x_transition.enter &&
              (Object.entries(t._x_transition.enter.during).length ||
                  Object.entries(t._x_transition.enter.start).length ||
                  Object.entries(t._x_transition.enter.end).length)
                ? t._x_transition.in(n)
                : s()
            : t._x_transition
            ? t._x_transition.in(n)
            : s();
        return;
    }
    (t._x_hidePromise = t._x_transition
        ? new Promise((o, a) => {
              t._x_transition.out(
                  () => {},
                  () => o(i)
              ),
                  t._x_transitioning.beforeCancel(() =>
                      a({ isFromCancelledTransition: !0 })
                  );
          })
        : Promise.resolve(i)),
        queueMicrotask(() => {
            let o = no(t);
            o
                ? (o._x_hideChildren || (o._x_hideChildren = []),
                  o._x_hideChildren.push(t))
                : r(() => {
                      let a = (c) => {
                          let u = Promise.all([
                              c._x_hidePromise,
                              ...(c._x_hideChildren || []).map(a),
                          ]).then(([l]) => l());
                          return (
                              delete c._x_hidePromise,
                              delete c._x_hideChildren,
                              u
                          );
                      };
                      a(t).catch((c) => {
                          if (!c.isFromCancelledTransition) throw c;
                      });
                  });
        });
};
function no(t) {
    let e = t.parentNode;
    if (e) return e._x_hidePromise ? e : no(e);
}
function Vn(
    t,
    e,
    { during: n, start: i, end: r } = {},
    s = () => {},
    o = () => {}
) {
    if (
        (t._x_transitioning && t._x_transitioning.cancel(),
        Object.keys(n).length === 0 &&
            Object.keys(i).length === 0 &&
            Object.keys(r).length === 0)
    ) {
        s(), o();
        return;
    }
    let a, c, u;
    au(t, {
        start() {
            a = e(t, i);
        },
        during() {
            c = e(t, n);
        },
        before: s,
        end() {
            a(), (u = e(t, r));
        },
        after: o,
        cleanup() {
            c(), u();
        },
    });
}
function au(t, e) {
    let n,
        i,
        r,
        s = Un(() => {
            R(() => {
                (n = !0),
                    i || e.before(),
                    r || (e.end(), qn()),
                    e.after(),
                    t.isConnected && e.cleanup(),
                    delete t._x_transitioning;
            });
        });
    (t._x_transitioning = {
        beforeCancels: [],
        beforeCancel(o) {
            this.beforeCancels.push(o);
        },
        cancel: Un(function () {
            for (; this.beforeCancels.length; ) this.beforeCancels.shift()();
            s();
        }),
        finish: s,
    }),
        R(() => {
            e.start(), e.during();
        }),
        tu(),
        requestAnimationFrame(() => {
            if (n) return;
            let o =
                    Number(
                        getComputedStyle(t)
                            .transitionDuration.replace(/,.*/, "")
                            .replace("s", "")
                    ) * 1e3,
                a =
                    Number(
                        getComputedStyle(t)
                            .transitionDelay.replace(/,.*/, "")
                            .replace("s", "")
                    ) * 1e3;
            o === 0 &&
                (o =
                    Number(
                        getComputedStyle(t).animationDuration.replace("s", "")
                    ) * 1e3),
                R(() => {
                    e.before();
                }),
                (i = !0),
                requestAnimationFrame(() => {
                    n ||
                        (R(() => {
                            e.end();
                        }),
                        qn(),
                        setTimeout(t._x_transitioning.finish, o + a),
                        (r = !0));
                });
        });
}
function Wt(t, e, n) {
    if (t.indexOf(e) === -1) return n;
    const i = t[t.indexOf(e) + 1];
    if (!i || (e === "scale" && isNaN(i))) return n;
    if (e === "duration" || e === "delay") {
        let r = i.match(/([0-9]+)ms/);
        if (r) return r[1];
    }
    return e === "origin" &&
        ["top", "right", "left", "center", "bottom"].includes(
            t[t.indexOf(e) + 2]
        )
        ? [i, t[t.indexOf(e) + 2]].join(" ")
        : i;
}
var pt = !1;
function on(t, e = () => {}) {
    return (...n) => (pt ? e(...n) : t(...n));
}
function cu(t) {
    return (...e) => pt && t(...e);
}
function lu(t, e) {
    t._x_dataStack &&
        ((e._x_dataStack = t._x_dataStack),
        e.setAttribute("data-has-alpine-state", !0)),
        (pt = !0),
        io(() => {
            rt(e, (n, i) => {
                i(n, () => {});
            });
        }),
        (pt = !1);
}
var Kn = !1;
function uu(t, e) {
    e._x_dataStack || (e._x_dataStack = t._x_dataStack),
        (pt = !0),
        (Kn = !0),
        io(() => {
            du(e);
        }),
        (pt = !1),
        (Kn = !1);
}
function du(t) {
    let e = !1;
    rt(t, (i, r) => {
        ft(i, (s, o) => {
            if (e && Rl(s)) return o();
            (e = !0), r(s, o);
        });
    });
}
function io(t) {
    let e = zt;
    xr((n, i) => {
        let r = e(n);
        return ue(r), () => {};
    }),
        t(),
        xr(e);
}
function fu(t) {
    return pt ? (Kn ? !0 : t.hasAttribute("data-has-alpine-state")) : !1;
}
function ro(t, e, n, i = []) {
    switch (
        (t._x_bindings || (t._x_bindings = Ft({})),
        (t._x_bindings[e] = n),
        (e = i.includes("camel") ? bu(e) : e),
        e)
    ) {
        case "value":
            pu(t, n);
            break;
        case "style":
            vu(t, n);
            break;
        case "class":
            hu(t, n);
            break;
        case "selected":
        case "checked":
            _u(t, e, n);
            break;
        default:
            so(t, e, n);
            break;
    }
}
function pu(t, e) {
    if (t.type === "radio")
        t.attributes.value === void 0 && (t.value = e),
            window.fromModel && (t.checked = Sr(t.value, e));
    else if (t.type === "checkbox")
        Number.isInteger(e)
            ? (t.value = e)
            : !Array.isArray(e) &&
              typeof e != "boolean" &&
              ![null, void 0].includes(e)
            ? (t.value = String(e))
            : Array.isArray(e)
            ? (t.checked = e.some((n) => Sr(n, t.value)))
            : (t.checked = !!e);
    else if (t.tagName === "SELECT") yu(t, e);
    else {
        if (t.value === e) return;
        t.value = e === void 0 ? "" : e;
    }
}
function hu(t, e) {
    t._x_undoAddedClasses && t._x_undoAddedClasses(),
        (t._x_undoAddedClasses = Hi(t, e));
}
function vu(t, e) {
    t._x_undoAddedStyles && t._x_undoAddedStyles(),
        (t._x_undoAddedStyles = sn(t, e));
}
function _u(t, e, n) {
    so(t, e, n), mu(t, e, n);
}
function so(t, e, n) {
    [null, void 0, !1].includes(n) && wu(e)
        ? t.removeAttribute(e)
        : (oo(e) && (n = e), gu(t, e, n));
}
function gu(t, e, n) {
    t.getAttribute(e) != n && t.setAttribute(e, n);
}
function mu(t, e, n) {
    t[e] !== n && (t[e] = n);
}
function yu(t, e) {
    const n = [].concat(e).map((i) => i + "");
    Array.from(t.options).forEach((i) => {
        i.selected = n.includes(i.value);
    });
}
function bu(t) {
    return t.toLowerCase().replace(/-(\w)/g, (e, n) => n.toUpperCase());
}
function Sr(t, e) {
    return t == e;
}
function oo(t) {
    return [
        "disabled",
        "checked",
        "required",
        "readonly",
        "hidden",
        "open",
        "selected",
        "autofocus",
        "itemscope",
        "multiple",
        "novalidate",
        "allowfullscreen",
        "allowpaymentrequest",
        "formnovalidate",
        "autoplay",
        "controls",
        "loop",
        "muted",
        "playsinline",
        "default",
        "ismap",
        "reversed",
        "async",
        "defer",
        "nomodule",
    ].includes(t);
}
function wu(t) {
    return ![
        "aria-pressed",
        "aria-checked",
        "aria-expanded",
        "aria-selected",
    ].includes(t);
}
function Eu(t, e, n) {
    return t._x_bindings && t._x_bindings[e] !== void 0
        ? t._x_bindings[e]
        : ao(t, e, n);
}
function xu(t, e, n, i = !0) {
    if (t._x_bindings && t._x_bindings[e] !== void 0) return t._x_bindings[e];
    if (t._x_inlineBindings && t._x_inlineBindings[e] !== void 0) {
        let r = t._x_inlineBindings[e];
        return (r.extract = i), qs(() => It(t, r.expression));
    }
    return ao(t, e, n);
}
function ao(t, e, n) {
    let i = t.getAttribute(e);
    return i === null
        ? typeof n == "function"
            ? n()
            : n
        : i === ""
        ? !0
        : oo(e)
        ? !![e, "true"].includes(i)
        : i;
}
function co(t, e) {
    var n;
    return function () {
        var i = this,
            r = arguments,
            s = function () {
                (n = null), t.apply(i, r);
            };
        clearTimeout(n), (n = setTimeout(s, e));
    };
}
function lo(t, e) {
    let n;
    return function () {
        let i = this,
            r = arguments;
        n || (t.apply(i, r), (n = !0), setTimeout(() => (n = !1), e));
    };
}
function uo({ get: t, set: e }, { get: n, set: i }) {
    let r = !0,
        s,
        o = zt(() => {
            const a = t(),
                c = n();
            if (r) i(wn(a)), (r = !1), (s = JSON.stringify(a));
            else {
                const u = JSON.stringify(a);
                u !== s
                    ? (i(wn(a)), (s = u))
                    : (e(wn(c)), (s = JSON.stringify(c)));
            }
            JSON.stringify(n()), JSON.stringify(t());
        });
    return () => {
        ue(o);
    };
}
function wn(t) {
    return typeof t == "object" ? JSON.parse(JSON.stringify(t)) : t;
}
function Au(t) {
    (Array.isArray(t) ? t : [t]).forEach((n) => n(pe));
}
var wt = {},
    Ir = !1;
function Ou(t, e) {
    if ((Ir || ((wt = Ft(wt)), (Ir = !0)), e === void 0)) return wt[t];
    (wt[t] = e),
        typeof e == "object" &&
            e !== null &&
            e.hasOwnProperty("init") &&
            typeof e.init == "function" &&
            wt[t].init(),
        Fs(wt[t]);
}
function Su() {
    return wt;
}
var fo = {};
function Iu(t, e) {
    let n = typeof e != "function" ? () => e : e;
    return t instanceof Element ? po(t, n()) : ((fo[t] = n), () => {});
}
function Lu(t) {
    return (
        Object.entries(fo).forEach(([e, n]) => {
            Object.defineProperty(t, e, {
                get() {
                    return (...i) => n(...i);
                },
            });
        }),
        t
    );
}
function po(t, e, n) {
    let i = [];
    for (; i.length; ) i.pop()();
    let r = Object.entries(e).map(([o, a]) => ({ name: o, value: a })),
        s = Ks(r);
    return (
        (r = r.map((o) =>
            s.find((a) => a.name === o.name)
                ? { name: `x-bind:${o.name}`, value: `"${o.value}"` }
                : o
        )),
        Pi(t, r, n).map((o) => {
            i.push(o.runCleanups), o();
        }),
        () => {
            for (; i.length; ) i.pop()();
        }
    );
}
var ho = {};
function Cu(t, e) {
    ho[t] = e;
}
function Tu(t, e) {
    return (
        Object.entries(ho).forEach(([n, i]) => {
            Object.defineProperty(t, n, {
                get() {
                    return (...r) => i.bind(e)(...r);
                },
                enumerable: !1,
            });
        }),
        t
    );
}
var ku = {
        get reactive() {
            return Ft;
        },
        get release() {
            return ue;
        },
        get effect() {
            return zt;
        },
        get raw() {
            return Os;
        },
        version: "3.13.2",
        flushAndStopDeferringMutations: Fl,
        dontAutoEvaluateFunctions: qs,
        disableEffectScheduling: Cl,
        startObservingMutations: Li,
        stopObservingMutations: Ns,
        setReactivityEngine: Tl,
        onAttributeRemoved: Hs,
        onAttributesAdded: js,
        closestDataStack: Mt,
        skipDuringClone: on,
        onlyDuringClone: cu,
        addRootSelector: Cs,
        addInitSelector: Ts,
        addScopeToNode: de,
        deferMutations: Bl,
        mapAttributes: Ri,
        evaluateLater: H,
        interceptInit: Dl,
        setEvaluator: Vl,
        mergeProxies: fe,
        extractProp: xu,
        findClosest: rn,
        onElRemoved: Oi,
        closestRoot: nn,
        destroyTree: Ai,
        interceptor: zs,
        transition: Vn,
        setStyles: sn,
        mutateDom: R,
        directive: k,
        entangle: uo,
        throttle: lo,
        debounce: co,
        evaluate: It,
        initTree: rt,
        nextTick: ji,
        prefixed: $t,
        prefix: Xl,
        plugin: Au,
        magic: X,
        store: Ou,
        start: Pl,
        clone: uu,
        cloneNode: lu,
        bound: Eu,
        $data: Bs,
        walk: ft,
        data: Cu,
        bind: Iu,
    },
    pe = ku;
function Pu(t, e) {
    const n = Object.create(null),
        i = t.split(",");
    for (let r = 0; r < i.length; r++) n[i[r]] = !0;
    return e ? (r) => !!n[r.toLowerCase()] : (r) => !!n[r];
}
var Ru = Object.freeze({}),
    Du = Object.prototype.hasOwnProperty,
    an = (t, e) => Du.call(t, e),
    Lt = Array.isArray,
    ee = (t) => vo(t) === "[object Map]",
    ju = (t) => typeof t == "string",
    Mi = (t) => typeof t == "symbol",
    cn = (t) => t !== null && typeof t == "object",
    Hu = Object.prototype.toString,
    vo = (t) => Hu.call(t),
    _o = (t) => vo(t).slice(8, -1),
    Ni = (t) =>
        ju(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t,
    Mu = (t) => {
        const e = Object.create(null);
        return (n) => e[n] || (e[n] = t(n));
    },
    Nu = Mu((t) => t.charAt(0).toUpperCase() + t.slice(1)),
    go = (t, e) => t !== e && (t === t || e === e),
    Wn = new WeakMap(),
    Jt = [],
    Y,
    Ct = Symbol("iterate"),
    Jn = Symbol("Map key iterate");
function Bu(t) {
    return t && t._isEffect === !0;
}
function Fu(t, e = Ru) {
    Bu(t) && (t = t.raw);
    const n = qu(t, e);
    return e.lazy || n(), n;
}
function zu(t) {
    t.active &&
        (mo(t), t.options.onStop && t.options.onStop(), (t.active = !1));
}
var $u = 0;
function qu(t, e) {
    const n = function () {
        if (!n.active) return t();
        if (!Jt.includes(n)) {
            mo(n);
            try {
                return Vu(), Jt.push(n), (Y = n), t();
            } finally {
                Jt.pop(), yo(), (Y = Jt[Jt.length - 1]);
            }
        }
    };
    return (
        (n.id = $u++),
        (n.allowRecurse = !!e.allowRecurse),
        (n._isEffect = !0),
        (n.active = !0),
        (n.raw = t),
        (n.deps = []),
        (n.options = e),
        n
    );
}
function mo(t) {
    const { deps: e } = t;
    if (e.length) {
        for (let n = 0; n < e.length; n++) e[n].delete(t);
        e.length = 0;
    }
}
var Nt = !0,
    Bi = [];
function Uu() {
    Bi.push(Nt), (Nt = !1);
}
function Vu() {
    Bi.push(Nt), (Nt = !0);
}
function yo() {
    const t = Bi.pop();
    Nt = t === void 0 ? !0 : t;
}
function J(t, e, n) {
    if (!Nt || Y === void 0) return;
    let i = Wn.get(t);
    i || Wn.set(t, (i = new Map()));
    let r = i.get(n);
    r || i.set(n, (r = new Set())),
        r.has(Y) ||
            (r.add(Y),
            Y.deps.push(r),
            Y.options.onTrack &&
                Y.options.onTrack({ effect: Y, target: t, type: e, key: n }));
}
function ht(t, e, n, i, r, s) {
    const o = Wn.get(t);
    if (!o) return;
    const a = new Set(),
        c = (l) => {
            l &&
                l.forEach((d) => {
                    (d !== Y || d.allowRecurse) && a.add(d);
                });
        };
    if (e === "clear") o.forEach(c);
    else if (n === "length" && Lt(t))
        o.forEach((l, d) => {
            (d === "length" || d >= i) && c(l);
        });
    else
        switch ((n !== void 0 && c(o.get(n)), e)) {
            case "add":
                Lt(t)
                    ? Ni(n) && c(o.get("length"))
                    : (c(o.get(Ct)), ee(t) && c(o.get(Jn)));
                break;
            case "delete":
                Lt(t) || (c(o.get(Ct)), ee(t) && c(o.get(Jn)));
                break;
            case "set":
                ee(t) && c(o.get(Ct));
                break;
        }
    const u = (l) => {
        l.options.onTrigger &&
            l.options.onTrigger({
                effect: l,
                target: t,
                key: n,
                type: e,
                newValue: i,
                oldValue: r,
                oldTarget: s,
            }),
            l.options.scheduler ? l.options.scheduler(l) : l();
    };
    a.forEach(u);
}
var Ku = Pu("__proto__,__v_isRef,__isVue"),
    bo = new Set(
        Object.getOwnPropertyNames(Symbol)
            .map((t) => Symbol[t])
            .filter(Mi)
    ),
    Wu = wo(),
    Ju = wo(!0),
    Lr = Xu();
function Xu() {
    const t = {};
    return (
        ["includes", "indexOf", "lastIndexOf"].forEach((e) => {
            t[e] = function (...n) {
                const i = I(this);
                for (let s = 0, o = this.length; s < o; s++)
                    J(i, "get", s + "");
                const r = i[e](...n);
                return r === -1 || r === !1 ? i[e](...n.map(I)) : r;
            };
        }),
        ["push", "pop", "shift", "unshift", "splice"].forEach((e) => {
            t[e] = function (...n) {
                Uu();
                const i = I(this)[e].apply(this, n);
                return yo(), i;
            };
        }),
        t
    );
}
function wo(t = !1, e = !1) {
    return function (i, r, s) {
        if (r === "__v_isReactive") return !t;
        if (r === "__v_isReadonly") return t;
        if (r === "__v_raw" && s === (t ? (e ? dd : Oo) : e ? ud : Ao).get(i))
            return i;
        const o = Lt(i);
        if (!t && o && an(Lr, r)) return Reflect.get(Lr, r, s);
        const a = Reflect.get(i, r, s);
        return (Mi(r) ? bo.has(r) : Ku(r)) || (t || J(i, "get", r), e)
            ? a
            : Xn(a)
            ? !o || !Ni(r)
                ? a.value
                : a
            : cn(a)
            ? t
                ? So(a)
                : qi(a)
            : a;
    };
}
var Yu = Gu();
function Gu(t = !1) {
    return function (n, i, r, s) {
        let o = n[i];
        if (!t && ((r = I(r)), (o = I(o)), !Lt(n) && Xn(o) && !Xn(r)))
            return (o.value = r), !0;
        const a = Lt(n) && Ni(i) ? Number(i) < n.length : an(n, i),
            c = Reflect.set(n, i, r, s);
        return (
            n === I(s) &&
                (a ? go(r, o) && ht(n, "set", i, r, o) : ht(n, "add", i, r)),
            c
        );
    };
}
function Qu(t, e) {
    const n = an(t, e),
        i = t[e],
        r = Reflect.deleteProperty(t, e);
    return r && n && ht(t, "delete", e, void 0, i), r;
}
function Zu(t, e) {
    const n = Reflect.has(t, e);
    return (!Mi(e) || !bo.has(e)) && J(t, "has", e), n;
}
function td(t) {
    return J(t, "iterate", Lt(t) ? "length" : Ct), Reflect.ownKeys(t);
}
var ed = { get: Wu, set: Yu, deleteProperty: Qu, has: Zu, ownKeys: td },
    nd = {
        get: Ju,
        set(t, e) {
            return (
                console.warn(
                    `Set operation on key "${String(
                        e
                    )}" failed: target is readonly.`,
                    t
                ),
                !0
            );
        },
        deleteProperty(t, e) {
            return (
                console.warn(
                    `Delete operation on key "${String(
                        e
                    )}" failed: target is readonly.`,
                    t
                ),
                !0
            );
        },
    },
    Fi = (t) => (cn(t) ? qi(t) : t),
    zi = (t) => (cn(t) ? So(t) : t),
    $i = (t) => t,
    ln = (t) => Reflect.getPrototypeOf(t);
function xe(t, e, n = !1, i = !1) {
    t = t.__v_raw;
    const r = I(t),
        s = I(e);
    e !== s && !n && J(r, "get", e), !n && J(r, "get", s);
    const { has: o } = ln(r),
        a = i ? $i : n ? zi : Fi;
    if (o.call(r, e)) return a(t.get(e));
    if (o.call(r, s)) return a(t.get(s));
    t !== r && t.get(e);
}
function Ae(t, e = !1) {
    const n = this.__v_raw,
        i = I(n),
        r = I(t);
    return (
        t !== r && !e && J(i, "has", t),
        !e && J(i, "has", r),
        t === r ? n.has(t) : n.has(t) || n.has(r)
    );
}
function Oe(t, e = !1) {
    return (
        (t = t.__v_raw), !e && J(I(t), "iterate", Ct), Reflect.get(t, "size", t)
    );
}
function Cr(t) {
    t = I(t);
    const e = I(this);
    return ln(e).has.call(e, t) || (e.add(t), ht(e, "add", t, t)), this;
}
function Tr(t, e) {
    e = I(e);
    const n = I(this),
        { has: i, get: r } = ln(n);
    let s = i.call(n, t);
    s ? xo(n, i, t) : ((t = I(t)), (s = i.call(n, t)));
    const o = r.call(n, t);
    return (
        n.set(t, e),
        s ? go(e, o) && ht(n, "set", t, e, o) : ht(n, "add", t, e),
        this
    );
}
function kr(t) {
    const e = I(this),
        { has: n, get: i } = ln(e);
    let r = n.call(e, t);
    r ? xo(e, n, t) : ((t = I(t)), (r = n.call(e, t)));
    const s = i ? i.call(e, t) : void 0,
        o = e.delete(t);
    return r && ht(e, "delete", t, void 0, s), o;
}
function Pr() {
    const t = I(this),
        e = t.size !== 0,
        n = ee(t) ? new Map(t) : new Set(t),
        i = t.clear();
    return e && ht(t, "clear", void 0, void 0, n), i;
}
function Se(t, e) {
    return function (i, r) {
        const s = this,
            o = s.__v_raw,
            a = I(o),
            c = e ? $i : t ? zi : Fi;
        return (
            !t && J(a, "iterate", Ct),
            o.forEach((u, l) => i.call(r, c(u), c(l), s))
        );
    };
}
function Ie(t, e, n) {
    return function (...i) {
        const r = this.__v_raw,
            s = I(r),
            o = ee(s),
            a = t === "entries" || (t === Symbol.iterator && o),
            c = t === "keys" && o,
            u = r[t](...i),
            l = n ? $i : e ? zi : Fi;
        return (
            !e && J(s, "iterate", c ? Jn : Ct),
            {
                next() {
                    const { value: d, done: _ } = u.next();
                    return _
                        ? { value: d, done: _ }
                        : { value: a ? [l(d[0]), l(d[1])] : l(d), done: _ };
                },
                [Symbol.iterator]() {
                    return this;
                },
            }
        );
    };
}
function at(t) {
    return function (...e) {
        {
            const n = e[0] ? `on key "${e[0]}" ` : "";
            console.warn(
                `${Nu(t)} operation ${n}failed: target is readonly.`,
                I(this)
            );
        }
        return t === "delete" ? !1 : this;
    };
}
function id() {
    const t = {
            get(s) {
                return xe(this, s);
            },
            get size() {
                return Oe(this);
            },
            has: Ae,
            add: Cr,
            set: Tr,
            delete: kr,
            clear: Pr,
            forEach: Se(!1, !1),
        },
        e = {
            get(s) {
                return xe(this, s, !1, !0);
            },
            get size() {
                return Oe(this);
            },
            has: Ae,
            add: Cr,
            set: Tr,
            delete: kr,
            clear: Pr,
            forEach: Se(!1, !0),
        },
        n = {
            get(s) {
                return xe(this, s, !0);
            },
            get size() {
                return Oe(this, !0);
            },
            has(s) {
                return Ae.call(this, s, !0);
            },
            add: at("add"),
            set: at("set"),
            delete: at("delete"),
            clear: at("clear"),
            forEach: Se(!0, !1),
        },
        i = {
            get(s) {
                return xe(this, s, !0, !0);
            },
            get size() {
                return Oe(this, !0);
            },
            has(s) {
                return Ae.call(this, s, !0);
            },
            add: at("add"),
            set: at("set"),
            delete: at("delete"),
            clear: at("clear"),
            forEach: Se(!0, !0),
        };
    return (
        ["keys", "values", "entries", Symbol.iterator].forEach((s) => {
            (t[s] = Ie(s, !1, !1)),
                (n[s] = Ie(s, !0, !1)),
                (e[s] = Ie(s, !1, !0)),
                (i[s] = Ie(s, !0, !0));
        }),
        [t, n, e, i]
    );
}
var [rd, sd, od, ad] = id();
function Eo(t, e) {
    const n = e ? (t ? ad : od) : t ? sd : rd;
    return (i, r, s) =>
        r === "__v_isReactive"
            ? !t
            : r === "__v_isReadonly"
            ? t
            : r === "__v_raw"
            ? i
            : Reflect.get(an(n, r) && r in i ? n : i, r, s);
}
var cd = { get: Eo(!1, !1) },
    ld = { get: Eo(!0, !1) };
function xo(t, e, n) {
    const i = I(n);
    if (i !== n && e.call(t, i)) {
        const r = _o(t);
        console.warn(
            `Reactive ${r} contains both the raw and reactive versions of the same object${
                r === "Map" ? " as keys" : ""
            }, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
        );
    }
}
var Ao = new WeakMap(),
    ud = new WeakMap(),
    Oo = new WeakMap(),
    dd = new WeakMap();
function fd(t) {
    switch (t) {
        case "Object":
        case "Array":
            return 1;
        case "Map":
        case "Set":
        case "WeakMap":
        case "WeakSet":
            return 2;
        default:
            return 0;
    }
}
function pd(t) {
    return t.__v_skip || !Object.isExtensible(t) ? 0 : fd(_o(t));
}
function qi(t) {
    return t && t.__v_isReadonly ? t : Io(t, !1, ed, cd, Ao);
}
function So(t) {
    return Io(t, !0, nd, ld, Oo);
}
function Io(t, e, n, i, r) {
    if (!cn(t))
        return console.warn(`value cannot be made reactive: ${String(t)}`), t;
    if (t.__v_raw && !(e && t.__v_isReactive)) return t;
    const s = r.get(t);
    if (s) return s;
    const o = pd(t);
    if (o === 0) return t;
    const a = new Proxy(t, o === 2 ? i : n);
    return r.set(t, a), a;
}
function I(t) {
    return (t && I(t.__v_raw)) || t;
}
function Xn(t) {
    return !!(t && t.__v_isRef === !0);
}
X("nextTick", () => ji);
X("dispatch", (t) => Zt.bind(Zt, t));
X("watch", (t, { evaluateLater: e, effect: n }) => (i, r) => {
    let s = e(i),
        o = !0,
        a,
        c = n(() =>
            s((u) => {
                JSON.stringify(u),
                    o
                        ? (a = u)
                        : queueMicrotask(() => {
                              r(u, a), (a = u);
                          }),
                    (o = !1);
            })
        );
    t._x_effects.delete(c);
});
X("store", Su);
X("data", (t) => Bs(t));
X("root", (t) => nn(t));
X(
    "refs",
    (t) => (t._x_refs_proxy || (t._x_refs_proxy = fe(hd(t))), t._x_refs_proxy)
);
function hd(t) {
    let e = [],
        n = t;
    for (; n; ) n._x_refs && e.push(n._x_refs), (n = n.parentNode);
    return e;
}
var En = {};
function Lo(t) {
    return En[t] || (En[t] = 0), ++En[t];
}
function vd(t, e) {
    return rn(t, (n) => {
        if (n._x_ids && n._x_ids[e]) return !0;
    });
}
function _d(t, e) {
    t._x_ids || (t._x_ids = {}), t._x_ids[e] || (t._x_ids[e] = Lo(e));
}
X("id", (t) => (e, n = null) => {
    let i = vd(t, e),
        r = i ? i._x_ids[e] : Lo(e);
    return n ? `${e}-${r}-${n}` : `${e}-${r}`;
});
X("el", (t) => t);
Co("Focus", "focus", "focus");
Co("Persist", "persist", "persist");
function Co(t, e, n) {
    X(e, (i) =>
        it(
            `You can't use [$${e}] without first installing the "${t}" plugin here: https://alpinejs.dev/plugins/${n}`,
            i
        )
    );
}
k(
    "modelable",
    (t, { expression: e }, { effect: n, evaluateLater: i, cleanup: r }) => {
        let s = i(e),
            o = () => {
                let l;
                return s((d) => (l = d)), l;
            },
            a = i(`${e} = __placeholder`),
            c = (l) => a(() => {}, { scope: { __placeholder: l } }),
            u = o();
        c(u),
            queueMicrotask(() => {
                if (!t._x_model) return;
                t._x_removeModelListeners.default();
                let l = t._x_model.get,
                    d = t._x_model.set,
                    _ = uo(
                        {
                            get() {
                                return l();
                            },
                            set(g) {
                                d(g);
                            },
                        },
                        {
                            get() {
                                return o();
                            },
                            set(g) {
                                c(g);
                            },
                        }
                    );
                r(_);
            });
    }
);
k("teleport", (t, { modifiers: e, expression: n }, { cleanup: i }) => {
    t.tagName.toLowerCase() !== "template" &&
        it("x-teleport can only be used on a <template> tag", t);
    let r = Rr(n),
        s = t.content.cloneNode(!0).firstElementChild;
    (t._x_teleport = s),
        (s._x_teleportBack = t),
        t.setAttribute("data-teleport-template", !0),
        s.setAttribute("data-teleport-target", !0),
        t._x_forwardEvents &&
            t._x_forwardEvents.forEach((a) => {
                s.addEventListener(a, (c) => {
                    c.stopPropagation(),
                        t.dispatchEvent(new c.constructor(c.type, c));
                });
            }),
        de(s, {}, t);
    let o = (a, c, u) => {
        u.includes("prepend")
            ? c.parentNode.insertBefore(a, c)
            : u.includes("append")
            ? c.parentNode.insertBefore(a, c.nextSibling)
            : c.appendChild(a);
    };
    R(() => {
        o(s, r, e), rt(s), (s._x_ignore = !0);
    }),
        (t._x_teleportPutBack = () => {
            let a = Rr(n);
            R(() => {
                o(t._x_teleport, a, e);
            });
        }),
        i(() => s.remove());
});
var gd = document.createElement("div");
function Rr(t) {
    let e = on(
        () => document.querySelector(t),
        () => gd
    )();
    return e || it(`Cannot find x-teleport element for selector: "${t}"`), e;
}
var To = () => {};
To.inline = (t, { modifiers: e }, { cleanup: n }) => {
    e.includes("self") ? (t._x_ignoreSelf = !0) : (t._x_ignore = !0),
        n(() => {
            e.includes("self") ? delete t._x_ignoreSelf : delete t._x_ignore;
        });
};
k("ignore", To);
k("effect", (t, { expression: e }, { effect: n }) => n(H(t, e)));
function Yn(t, e, n, i) {
    let r = t,
        s = (c) => i(c),
        o = {},
        a = (c, u) => (l) => u(c, l);
    if (
        (n.includes("dot") && (e = md(e)),
        n.includes("camel") && (e = yd(e)),
        n.includes("passive") && (o.passive = !0),
        n.includes("capture") && (o.capture = !0),
        n.includes("window") && (r = window),
        n.includes("document") && (r = document),
        n.includes("debounce"))
    ) {
        let c = n[n.indexOf("debounce") + 1] || "invalid-wait",
            u = Xe(c.split("ms")[0]) ? Number(c.split("ms")[0]) : 250;
        s = co(s, u);
    }
    if (n.includes("throttle")) {
        let c = n[n.indexOf("throttle") + 1] || "invalid-wait",
            u = Xe(c.split("ms")[0]) ? Number(c.split("ms")[0]) : 250;
        s = lo(s, u);
    }
    return (
        n.includes("prevent") &&
            (s = a(s, (c, u) => {
                u.preventDefault(), c(u);
            })),
        n.includes("stop") &&
            (s = a(s, (c, u) => {
                u.stopPropagation(), c(u);
            })),
        n.includes("self") &&
            (s = a(s, (c, u) => {
                u.target === t && c(u);
            })),
        (n.includes("away") || n.includes("outside")) &&
            ((r = document),
            (s = a(s, (c, u) => {
                t.contains(u.target) ||
                    (u.target.isConnected !== !1 &&
                        ((t.offsetWidth < 1 && t.offsetHeight < 1) ||
                            (t._x_isShown !== !1 && c(u))));
            }))),
        n.includes("once") &&
            (s = a(s, (c, u) => {
                c(u), r.removeEventListener(e, s, o);
            })),
        (s = a(s, (c, u) => {
            (wd(e) && Ed(u, n)) || c(u);
        })),
        r.addEventListener(e, s, o),
        () => {
            r.removeEventListener(e, s, o);
        }
    );
}
function md(t) {
    return t.replace(/-/g, ".");
}
function yd(t) {
    return t.toLowerCase().replace(/-(\w)/g, (e, n) => n.toUpperCase());
}
function Xe(t) {
    return !Array.isArray(t) && !isNaN(t);
}
function bd(t) {
    return [" ", "_"].includes(t)
        ? t
        : t
              .replace(/([a-z])([A-Z])/g, "$1-$2")
              .replace(/[_\s]/, "-")
              .toLowerCase();
}
function wd(t) {
    return ["keydown", "keyup"].includes(t);
}
function Ed(t, e) {
    let n = e.filter(
        (s) =>
            ![
                "window",
                "document",
                "prevent",
                "stop",
                "once",
                "capture",
            ].includes(s)
    );
    if (n.includes("debounce")) {
        let s = n.indexOf("debounce");
        n.splice(s, Xe((n[s + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
    }
    if (n.includes("throttle")) {
        let s = n.indexOf("throttle");
        n.splice(s, Xe((n[s + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
    }
    if (n.length === 0 || (n.length === 1 && Dr(t.key).includes(n[0])))
        return !1;
    const r = ["ctrl", "shift", "alt", "meta", "cmd", "super"].filter((s) =>
        n.includes(s)
    );
    return (
        (n = n.filter((s) => !r.includes(s))),
        !(
            r.length > 0 &&
            r.filter(
                (o) => (
                    (o === "cmd" || o === "super") && (o = "meta"), t[`${o}Key`]
                )
            ).length === r.length &&
            Dr(t.key).includes(n[0])
        )
    );
}
function Dr(t) {
    if (!t) return [];
    t = bd(t);
    let e = {
        ctrl: "control",
        slash: "/",
        space: " ",
        spacebar: " ",
        cmd: "meta",
        esc: "escape",
        up: "arrow-up",
        down: "arrow-down",
        left: "arrow-left",
        right: "arrow-right",
        period: ".",
        equal: "=",
        minus: "-",
        underscore: "_",
    };
    return (
        (e[t] = t),
        Object.keys(e)
            .map((n) => {
                if (e[n] === t) return n;
            })
            .filter((n) => n)
    );
}
k("model", (t, { modifiers: e, expression: n }, { effect: i, cleanup: r }) => {
    let s = t;
    e.includes("parent") && (s = t.parentNode);
    let o = H(s, n),
        a;
    typeof n == "string"
        ? (a = H(s, `${n} = __placeholder`))
        : typeof n == "function" && typeof n() == "string"
        ? (a = H(s, `${n()} = __placeholder`))
        : (a = () => {});
    let c = () => {
            let _;
            return o((g) => (_ = g)), jr(_) ? _.get() : _;
        },
        u = (_) => {
            let g;
            o((v) => (g = v)),
                jr(g) ? g.set(_) : a(() => {}, { scope: { __placeholder: _ } });
        };
    typeof n == "string" &&
        t.type === "radio" &&
        R(() => {
            t.hasAttribute("name") || t.setAttribute("name", n);
        });
    var l =
        t.tagName.toLowerCase() === "select" ||
        ["checkbox", "radio"].includes(t.type) ||
        e.includes("lazy")
            ? "change"
            : "input";
    let d = pt
        ? () => {}
        : Yn(t, l, e, (_) => {
              u(xd(t, e, _, c()));
          });
    if (
        (e.includes("fill") &&
            ([null, ""].includes(c()) ||
                (t.type === "checkbox" && Array.isArray(c()))) &&
            t.dispatchEvent(new Event(l, {})),
        t._x_removeModelListeners || (t._x_removeModelListeners = {}),
        (t._x_removeModelListeners.default = d),
        r(() => t._x_removeModelListeners.default()),
        t.form)
    ) {
        let _ = Yn(t.form, "reset", [], (g) => {
            ji(() => t._x_model && t._x_model.set(t.value));
        });
        r(() => _());
    }
    (t._x_model = {
        get() {
            return c();
        },
        set(_) {
            u(_);
        },
    }),
        (t._x_forceModelUpdate = (_) => {
            _ === void 0 && typeof n == "string" && n.match(/\./) && (_ = ""),
                (window.fromModel = !0),
                R(() => ro(t, "value", _)),
                delete window.fromModel;
        }),
        i(() => {
            let _ = c();
            (e.includes("unintrusive") &&
                document.activeElement.isSameNode(t)) ||
                t._x_forceModelUpdate(_);
        });
});
function xd(t, e, n, i) {
    return R(() => {
        if (n instanceof CustomEvent && n.detail !== void 0)
            return n.detail !== null && n.detail !== void 0
                ? n.detail
                : n.target.value;
        if (t.type === "checkbox")
            if (Array.isArray(i)) {
                let r = e.includes("number")
                    ? xn(n.target.value)
                    : n.target.value;
                return n.target.checked
                    ? i.concat([r])
                    : i.filter((s) => !Ad(s, r));
            } else return n.target.checked;
        else {
            if (t.tagName.toLowerCase() === "select" && t.multiple)
                return e.includes("number")
                    ? Array.from(n.target.selectedOptions).map((r) => {
                          let s = r.value || r.text;
                          return xn(s);
                      })
                    : Array.from(n.target.selectedOptions).map(
                          (r) => r.value || r.text
                      );
            {
                let r = n.target.value;
                return e.includes("number")
                    ? xn(r)
                    : e.includes("trim")
                    ? r.trim()
                    : r;
            }
        }
    });
}
function xn(t) {
    let e = t ? parseFloat(t) : null;
    return Od(e) ? e : t;
}
function Ad(t, e) {
    return t == e;
}
function Od(t) {
    return !Array.isArray(t) && !isNaN(t);
}
function jr(t) {
    return (
        t !== null &&
        typeof t == "object" &&
        typeof t.get == "function" &&
        typeof t.set == "function"
    );
}
k("cloak", (t) =>
    queueMicrotask(() => R(() => t.removeAttribute($t("cloak"))))
);
Ts(() => `[${$t("init")}]`);
k(
    "init",
    on((t, { expression: e }, { evaluate: n }) =>
        typeof e == "string" ? !!e.trim() && n(e, {}, !1) : n(e, {}, !1)
    )
);
k("text", (t, { expression: e }, { effect: n, evaluateLater: i }) => {
    let r = i(e);
    n(() => {
        r((s) => {
            R(() => {
                t.textContent = s;
            });
        });
    });
});
k("html", (t, { expression: e }, { effect: n, evaluateLater: i }) => {
    let r = i(e);
    n(() => {
        r((s) => {
            R(() => {
                (t.innerHTML = s),
                    (t._x_ignoreSelf = !0),
                    rt(t),
                    delete t._x_ignoreSelf;
            });
        });
    });
});
Ri(Xs(":", Ys($t("bind:"))));
var ko = (
    t,
    { value: e, modifiers: n, expression: i, original: r },
    { effect: s }
) => {
    if (!e) {
        let a = {};
        Lu(a),
            H(t, i)(
                (u) => {
                    po(t, u, r);
                },
                { scope: a }
            );
        return;
    }
    if (e === "key") return Sd(t, i);
    if (
        t._x_inlineBindings &&
        t._x_inlineBindings[e] &&
        t._x_inlineBindings[e].extract
    )
        return;
    let o = H(t, i);
    s(() =>
        o((a) => {
            a === void 0 && typeof i == "string" && i.match(/\./) && (a = ""),
                R(() => ro(t, e, a, n));
        })
    );
};
ko.inline = (t, { value: e, modifiers: n, expression: i }) => {
    e &&
        (t._x_inlineBindings || (t._x_inlineBindings = {}),
        (t._x_inlineBindings[e] = { expression: i, extract: !1 }));
};
k("bind", ko);
function Sd(t, e) {
    t._x_keyExpression = e;
}
Cs(() => `[${$t("data")}]`);
k("data", (t, { expression: e }, { cleanup: n }) => {
    if (fu(t)) return;
    e = e === "" ? "{}" : e;
    let i = {};
    Nn(i, t);
    let r = {};
    Tu(r, i);
    let s = It(t, e, { scope: r });
    (s === void 0 || s === !0) && (s = {}), Nn(s, t);
    let o = Ft(s);
    Fs(o);
    let a = de(t, o);
    o.init && It(t, o.init),
        n(() => {
            o.destroy && It(t, o.destroy), a();
        });
});
k("show", (t, { modifiers: e, expression: n }, { effect: i }) => {
    let r = H(t, n);
    t._x_doHide ||
        (t._x_doHide = () => {
            R(() => {
                t.style.setProperty(
                    "display",
                    "none",
                    e.includes("important") ? "important" : void 0
                );
            });
        }),
        t._x_doShow ||
            (t._x_doShow = () => {
                R(() => {
                    t.style.length === 1 && t.style.display === "none"
                        ? t.removeAttribute("style")
                        : t.style.removeProperty("display");
                });
            });
    let s = () => {
            t._x_doHide(), (t._x_isShown = !1);
        },
        o = () => {
            t._x_doShow(), (t._x_isShown = !0);
        },
        a = () => setTimeout(o),
        c = Un(
            (d) => (d ? o() : s()),
            (d) => {
                typeof t._x_toggleAndCascadeWithTransitions == "function"
                    ? t._x_toggleAndCascadeWithTransitions(t, d, o, s)
                    : d
                    ? a()
                    : s();
            }
        ),
        u,
        l = !0;
    i(() =>
        r((d) => {
            (!l && d === u) ||
                (e.includes("immediate") && (d ? a() : s()),
                c(d),
                (u = d),
                (l = !1));
        })
    );
});
k("for", (t, { expression: e }, { effect: n, cleanup: i }) => {
    let r = Ld(e),
        s = H(t, r.items),
        o = H(t, t._x_keyExpression || "index");
    (t._x_prevKeys = []),
        (t._x_lookup = {}),
        n(() => Id(t, r, s, o)),
        i(() => {
            Object.values(t._x_lookup).forEach((a) => a.remove()),
                delete t._x_prevKeys,
                delete t._x_lookup;
        });
});
function Id(t, e, n, i) {
    let r = (o) => typeof o == "object" && !Array.isArray(o),
        s = t;
    n((o) => {
        Cd(o) && o >= 0 && (o = Array.from(Array(o).keys(), (p) => p + 1)),
            o === void 0 && (o = []);
        let a = t._x_lookup,
            c = t._x_prevKeys,
            u = [],
            l = [];
        if (r(o))
            o = Object.entries(o).map(([p, m]) => {
                let b = Hr(e, m, p, o);
                i((w) => l.push(w), { scope: { index: p, ...b } }), u.push(b);
            });
        else
            for (let p = 0; p < o.length; p++) {
                let m = Hr(e, o[p], p, o);
                i((b) => l.push(b), { scope: { index: p, ...m } }), u.push(m);
            }
        let d = [],
            _ = [],
            g = [],
            v = [];
        for (let p = 0; p < c.length; p++) {
            let m = c[p];
            l.indexOf(m) === -1 && g.push(m);
        }
        c = c.filter((p) => !g.includes(p));
        let h = "template";
        for (let p = 0; p < l.length; p++) {
            let m = l[p],
                b = c.indexOf(m);
            if (b === -1) c.splice(p, 0, m), d.push([h, p]);
            else if (b !== p) {
                let w = c.splice(p, 1)[0],
                    y = c.splice(b - 1, 1)[0];
                c.splice(p, 0, y), c.splice(b, 0, w), _.push([w, y]);
            } else v.push(m);
            h = m;
        }
        for (let p = 0; p < g.length; p++) {
            let m = g[p];
            a[m]._x_effects && a[m]._x_effects.forEach(As),
                a[m].remove(),
                (a[m] = null),
                delete a[m];
        }
        for (let p = 0; p < _.length; p++) {
            let [m, b] = _[p],
                w = a[m],
                y = a[b],
                E = document.createElement("div");
            R(() => {
                y || it('x-for ":key" is undefined or invalid', s),
                    y.after(E),
                    w.after(y),
                    y._x_currentIfEl && y.after(y._x_currentIfEl),
                    E.before(w),
                    w._x_currentIfEl && w.after(w._x_currentIfEl),
                    E.remove();
            }),
                y._x_refreshXForScope(u[l.indexOf(b)]);
        }
        for (let p = 0; p < d.length; p++) {
            let [m, b] = d[p],
                w = m === "template" ? s : a[m];
            w._x_currentIfEl && (w = w._x_currentIfEl);
            let y = u[b],
                E = l[b],
                A = document.importNode(s.content, !0).firstElementChild,
                S = Ft(y);
            de(A, S, s),
                (A._x_refreshXForScope = (P) => {
                    Object.entries(P).forEach(([C, L]) => {
                        S[C] = L;
                    });
                }),
                R(() => {
                    w.after(A), rt(A);
                }),
                typeof E == "object" &&
                    it(
                        "x-for key cannot be an object, it must be a string or an integer",
                        s
                    ),
                (a[E] = A);
        }
        for (let p = 0; p < v.length; p++)
            a[v[p]]._x_refreshXForScope(u[l.indexOf(v[p])]);
        s._x_prevKeys = l;
    });
}
function Ld(t) {
    let e = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/,
        n = /^\s*\(|\)\s*$/g,
        i = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,
        r = t.match(i);
    if (!r) return;
    let s = {};
    s.items = r[2].trim();
    let o = r[1].replace(n, "").trim(),
        a = o.match(e);
    return (
        a
            ? ((s.item = o.replace(e, "").trim()),
              (s.index = a[1].trim()),
              a[2] && (s.collection = a[2].trim()))
            : (s.item = o),
        s
    );
}
function Hr(t, e, n, i) {
    let r = {};
    return (
        /^\[.*\]$/.test(t.item) && Array.isArray(e)
            ? t.item
                  .replace("[", "")
                  .replace("]", "")
                  .split(",")
                  .map((o) => o.trim())
                  .forEach((o, a) => {
                      r[o] = e[a];
                  })
            : /^\{.*\}$/.test(t.item) &&
              !Array.isArray(e) &&
              typeof e == "object"
            ? t.item
                  .replace("{", "")
                  .replace("}", "")
                  .split(",")
                  .map((o) => o.trim())
                  .forEach((o) => {
                      r[o] = e[o];
                  })
            : (r[t.item] = e),
        t.index && (r[t.index] = n),
        t.collection && (r[t.collection] = i),
        r
    );
}
function Cd(t) {
    return !Array.isArray(t) && !isNaN(t);
}
function Po() {}
Po.inline = (t, { expression: e }, { cleanup: n }) => {
    let i = nn(t);
    i._x_refs || (i._x_refs = {}),
        (i._x_refs[e] = t),
        n(() => delete i._x_refs[e]);
};
k("ref", Po);
k("if", (t, { expression: e }, { effect: n, cleanup: i }) => {
    t.tagName.toLowerCase() !== "template" &&
        it("x-if can only be used on a <template> tag", t);
    let r = H(t, e),
        s = () => {
            if (t._x_currentIfEl) return t._x_currentIfEl;
            let a = t.content.cloneNode(!0).firstElementChild;
            return (
                de(a, {}, t),
                R(() => {
                    t.after(a), rt(a);
                }),
                (t._x_currentIfEl = a),
                (t._x_undoIf = () => {
                    ft(a, (c) => {
                        c._x_effects && c._x_effects.forEach(As);
                    }),
                        a.remove(),
                        delete t._x_currentIfEl;
                }),
                a
            );
        },
        o = () => {
            t._x_undoIf && (t._x_undoIf(), delete t._x_undoIf);
        };
    n(() =>
        r((a) => {
            a ? s() : o();
        })
    ),
        i(() => t._x_undoIf && t._x_undoIf());
});
k("id", (t, { expression: e }, { evaluate: n }) => {
    n(e).forEach((r) => _d(t, r));
});
Ri(Xs("@", Ys($t("on:"))));
k(
    "on",
    on((t, { value: e, modifiers: n, expression: i }, { cleanup: r }) => {
        let s = i ? H(t, i) : () => {};
        t.tagName.toLowerCase() === "template" &&
            (t._x_forwardEvents || (t._x_forwardEvents = []),
            t._x_forwardEvents.includes(e) || t._x_forwardEvents.push(e));
        let o = Yn(t, e, n, (a) => {
            s(() => {}, { scope: { $event: a }, params: [a] });
        });
        r(() => o());
    })
);
un("Collapse", "collapse", "collapse");
un("Intersect", "intersect", "intersect");
un("Focus", "trap", "focus");
un("Mask", "mask", "mask");
function un(t, e, n) {
    k(e, (i) =>
        it(
            `You can't use [x-${e}] without first installing the "${t}" plugin here: https://alpinejs.dev/plugins/${n}`,
            i
        )
    );
}
pe.setEvaluator(Vs);
pe.setReactivityEngine({ reactive: qi, effect: Fu, release: zu, raw: I });
var Td = pe,
    Ro = Td;
window.Alpine = Ro;
Ro.start();
