(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[86], {
    2711: function (e, t, i) {
        e.exports = function () {
            "use strict";
            var e = "undefined" != typeof window ? window : void 0 !== i.g ? i.g : "undefined" != typeof self ? self : {},
                t = "Expected a function", r = NaN, s = /^\s+|\s+$/g, a = /^[-+]0x[0-9a-f]+$/i, n = /^0b[01]+$/i,
                l = /^0o[0-7]+$/i, o = parseInt, d = "object" == typeof e && e && e.Object === Object && e,
                u = "object" == typeof self && self && self.Object === Object && self,
                c = d || u || Function("return this")(), p = Object.prototype.toString, h = Math.max, f = Math.min,
                m = function () {
                    return c.Date.now()
                };

            function g(e) {
                var t = typeof e;
                return !!e && ("object" == t || "function" == t)
            }

            function v(e) {
                if ("number" == typeof e) return e;
                if ("symbol" == typeof (t = e) || t && "object" == typeof t && "[object Symbol]" == p.call(t)) return r;
                if (g(e)) {
                    var t, i = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = g(i) ? i + "" : i
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = e.replace(s, "");
                var d = n.test(e);
                return d || l.test(e) ? o(e.slice(2), d ? 2 : 8) : a.test(e) ? r : +e
            }

            var b = function (e, i, r) {
                    var s = !0, a = !0;
                    if ("function" != typeof e) throw TypeError(t);
                    return g(r) && (s = "leading" in r ? !!r.leading : s, a = "trailing" in r ? !!r.trailing : a), function (e, i, r) {
                        var s, a, n, l, o, d, u = 0, c = !1, p = !1, b = !0;
                        if ("function" != typeof e) throw TypeError(t);

                        function y(t) {
                            var i = s, r = a;
                            return s = a = void 0, u = t, l = e.apply(r, i)
                        }

                        function w(e) {
                            var t = e - d;
                            return void 0 === d || t >= i || t < 0 || p && e - u >= n
                        }

                        function S() {
                            var e, t = m();
                            if (w(t)) return x(t);
                            o = setTimeout(S, (e = i - (t - d), p ? f(e, n - (t - u)) : e))
                        }

                        function x(e) {
                            return o = void 0, b && s ? y(e) : (s = a = void 0, l)
                        }

                        function E() {
                            var e, t = m(), r = w(t);
                            if (s = arguments, a = this, d = t, r) {
                                if (void 0 === o) return u = e = d, o = setTimeout(S, i), c ? y(e) : l;
                                if (p) return o = setTimeout(S, i), y(d)
                            }
                            return void 0 === o && (o = setTimeout(S, i)), l
                        }

                        return i = v(i) || 0, g(r) && (c = !!r.leading, n = (p = "maxWait" in r) ? h(v(r.maxWait) || 0, i) : n, b = "trailing" in r ? !!r.trailing : b), E.cancel = function () {
                            void 0 !== o && clearTimeout(o), u = 0, s = d = a = o = void 0
                        }, E.flush = function () {
                            return void 0 === o ? l : x(m())
                        }, E
                    }(e, i, {leading: s, maxWait: i, trailing: a})
                }, y = NaN, w = /^\s+|\s+$/g, S = /^[-+]0x[0-9a-f]+$/i, x = /^0b[01]+$/i, E = /^0o[0-7]+$/i, T = parseInt,
                C = "object" == typeof e && e && e.Object === Object && e,
                k = "object" == typeof self && self && self.Object === Object && self,
                M = C || k || Function("return this")(), P = Object.prototype.toString, _ = Math.max, O = Math.min,
                L = function () {
                    return M.Date.now()
                };

            function A(e) {
                var t = typeof e;
                return !!e && ("object" == t || "function" == t)
            }

            function z(e) {
                if ("number" == typeof e) return e;
                if ("symbol" == typeof (t = e) || t && "object" == typeof t && "[object Symbol]" == P.call(t)) return y;
                if (A(e)) {
                    var t, i = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = A(i) ? i + "" : i
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = e.replace(w, "");
                var r = x.test(e);
                return r || E.test(e) ? T(e.slice(2), r ? 2 : 8) : S.test(e) ? y : +e
            }

            var $ = function (e, t, i) {
                var r, s, a, n, l, o, d = 0, u = !1, c = !1, p = !0;
                if ("function" != typeof e) throw TypeError("Expected a function");

                function h(t) {
                    var i = r, a = s;
                    return r = s = void 0, d = t, n = e.apply(a, i)
                }

                function f(e) {
                    var i = e - o;
                    return void 0 === o || i >= t || i < 0 || c && e - d >= a
                }

                function m() {
                    var e, i = L();
                    if (f(i)) return g(i);
                    l = setTimeout(m, (e = t - (i - o), c ? O(e, a - (i - d)) : e))
                }

                function g(e) {
                    return l = void 0, p && r ? h(e) : (r = s = void 0, n)
                }

                function v() {
                    var e, i = L(), a = f(i);
                    if (r = arguments, s = this, o = i, a) {
                        if (void 0 === l) return d = e = o, l = setTimeout(m, t), u ? h(e) : n;
                        if (c) return l = setTimeout(m, t), h(o)
                    }
                    return void 0 === l && (l = setTimeout(m, t)), n
                }

                return t = z(t) || 0, A(i) && (u = !!i.leading, a = (c = "maxWait" in i) ? _(z(i.maxWait) || 0, t) : a, p = "trailing" in i ? !!i.trailing : p), v.cancel = function () {
                    void 0 !== l && clearTimeout(l), d = 0, r = o = s = l = void 0
                }, v.flush = function () {
                    return void 0 === l ? n : g(L())
                }, v
            }, I = function () {
            };

            function j(e) {
                e && e.forEach(function (e) {
                    var t = Array.prototype.slice.call(e.addedNodes), i = Array.prototype.slice.call(e.removedNodes);
                    if (function e(t) {
                        var i = void 0, r = void 0;
                        for (i = 0; i < t.length; i += 1) if ((r = t[i]).dataset && r.dataset.aos || r.children && e(r.children)) return !0;
                        return !1
                    }(t.concat(i))) return I()
                })
            }

            function N() {
                return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
            }

            var D = {
                    isSupported: function () {
                        return !!N()
                    }, ready: function (e, t) {
                        var i = window.document, r = new (N())(j);
                        I = t, r.observe(i.documentElement, {childList: !0, subtree: !0, removedNodes: !0})
                    }
                }, F = function (e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }, G = function () {
                    function e(e, t) {
                        for (var i = 0; i < t.length; i++) {
                            var r = t[i];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }

                    return function (t, i, r) {
                        return i && e(t.prototype, i), r && e(t, r), t
                    }
                }(), V = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var i = arguments[t];
                        for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r])
                    }
                    return e
                },
                R = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
                H = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                B = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
                q = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;

            function W() {
                return navigator.userAgent || navigator.vendor || window.opera || ""
            }

            var Y = new (function () {
                function e() {
                    F(this, e)
                }

                return G(e, [{
                    key: "phone", value: function () {
                        var e = W();
                        return !(!R.test(e) && !H.test(e.substr(0, 4)))
                    }
                }, {
                    key: "mobile", value: function () {
                        var e = W();
                        return !(!B.test(e) && !q.test(e.substr(0, 4)))
                    }
                }, {
                    key: "tablet", value: function () {
                        return this.mobile() && !this.phone()
                    }
                }, {
                    key: "ie11", value: function () {
                        return "-ms-scroll-limit" in document.documentElement.style && "-ms-ime-align" in document.documentElement.style
                    }
                }]), e
            }()), X = function (e, t) {
                var i = void 0;
                return Y.ie11() ? (i = document.createEvent("CustomEvent")).initCustomEvent(e, !0, !0, {detail: t}) : i = new CustomEvent(e, {detail: t}), document.dispatchEvent(i)
            }, U = function (e) {
                return e.forEach(function (e, t) {
                    var i, r, s, a, n, l;
                    return i = window.pageYOffset, r = e.options, s = e.position, a = e.node, e.data, n = function () {
                        var t;
                        e.animated && ((t = r.animatedClassNames) && t.forEach(function (e) {
                            return a.classList.remove(e)
                        }), X("aos:out", a), e.options.id && X("aos:in:" + e.options.id, a), e.animated = !1)
                    }, void (r.mirror && i >= s.out && !r.once ? n() : i >= s.in ? e.animated || ((l = r.animatedClassNames) && l.forEach(function (e) {
                        return a.classList.add(e)
                    }), X("aos:in", a), e.options.id && X("aos:in:" + e.options.id, a), e.animated = !0) : e.animated && !r.once && n())
                })
            }, Z = function (e) {
                for (var t = 0, i = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);) t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0), i += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0), e = e.offsetParent;
                return {top: i, left: t}
            }, K = function (e, t, i) {
                var r = e.getAttribute("data-aos-" + t);
                if (void 0 !== r) {
                    if ("true" === r) return !0;
                    if ("false" === r) return !1
                }
                return r || i
            }, J = function () {
                var e = document.querySelectorAll("[data-aos]");
                return Array.prototype.map.call(e, function (e) {
                    return {node: e}
                })
            }, Q = [], ee = !1, et = {
                offset: 120,
                delay: 0,
                easing: "ease",
                duration: 400,
                disable: !1,
                once: !1,
                mirror: !1,
                anchorPlacement: "top-bottom",
                startEvent: "DOMContentLoaded",
                animatedClassName: "aos-animate",
                initClassName: "aos-init",
                useClassNames: !1,
                disableMutationObserver: !1,
                throttleDelay: 99,
                debounceDelay: 50
            }, ei = function () {
                return document.all && !window.atob
            }, er = function () {
                var e, t;
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (ee = !0), ee && (e = Q, t = et, e.forEach(function (e, i) {
                    var r, s, a, n, l, o = K(e.node, "mirror", t.mirror), d = K(e.node, "once", t.once),
                        u = K(e.node, "id"), c = t.useClassNames && e.node.getAttribute("data-aos"),
                        p = [t.animatedClassName].concat(c ? c.split(" ") : []).filter(function (e) {
                            return "string" == typeof e
                        });
                    t.initClassName && e.node.classList.add(t.initClassName), e.position = {
                        in: function (e, t, i) {
                            var r = window.innerHeight, s = K(e, "anchor"), a = K(e, "anchor-placement"),
                                n = Number(K(e, "offset", a ? 0 : t)), l = e;
                            s && document.querySelectorAll(s) && (l = document.querySelectorAll(s)[0]);
                            var o = Z(l).top - r;
                            switch (a || i) {
                                case"top-bottom":
                                    break;
                                case"center-bottom":
                                    o += l.offsetHeight / 2;
                                    break;
                                case"bottom-bottom":
                                    o += l.offsetHeight;
                                    break;
                                case"top-center":
                                    o += r / 2;
                                    break;
                                case"center-center":
                                    o += r / 2 + l.offsetHeight / 2;
                                    break;
                                case"bottom-center":
                                    o += r / 2 + l.offsetHeight;
                                    break;
                                case"top-top":
                                    o += r;
                                    break;
                                case"bottom-top":
                                    o += r + l.offsetHeight;
                                    break;
                                case"center-top":
                                    o += r + l.offsetHeight / 2
                            }
                            return o + n
                        }(e.node, t.offset, t.anchorPlacement),
                        out: o && (r = e.node, s = t.offset, window.innerHeight, a = K(r, "anchor"), n = K(r, "offset", s), l = r, a && document.querySelectorAll(a) && (l = document.querySelectorAll(a)[0]), Z(l).top + l.offsetHeight - n)
                    }, e.options = {once: d, mirror: o, animatedClassNames: p, id: u}
                }), U(Q = e), window.addEventListener("scroll", b(function () {
                    U(Q, et.once)
                }, et.throttleDelay)))
            }, es = function () {
                if (Q = J(), en(et.disable) || ei()) return ea();
                er()
            }, ea = function () {
                Q.forEach(function (e, t) {
                    e.node.removeAttribute("data-aos"), e.node.removeAttribute("data-aos-easing"), e.node.removeAttribute("data-aos-duration"), e.node.removeAttribute("data-aos-delay"), et.initClassName && e.node.classList.remove(et.initClassName), et.animatedClassName && e.node.classList.remove(et.animatedClassName)
                })
            }, en = function (e) {
                return !0 === e || "mobile" === e && Y.mobile() || "phone" === e && Y.phone() || "tablet" === e && Y.tablet() || "function" == typeof e && !0 === e()
            };
            return {
                init: function (e) {
                    return et = V(et, e), Q = J(), et.disableMutationObserver || D.isSupported() || (console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '), et.disableMutationObserver = !0), et.disableMutationObserver || D.ready("[data-aos]", es), en(et.disable) || ei() ? ea() : (document.querySelector("body").setAttribute("data-aos-easing", et.easing), document.querySelector("body").setAttribute("data-aos-duration", et.duration), document.querySelector("body").setAttribute("data-aos-delay", et.delay), -1 === ["DOMContentLoaded", "load"].indexOf(et.startEvent) ? document.addEventListener(et.startEvent, function () {
                        er(!0)
                    }) : window.addEventListener("load", function () {
                        er(!0)
                    }), "DOMContentLoaded" === et.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1 && er(!0), window.addEventListener("resize", $(er, et.debounceDelay, !0)), window.addEventListener("orientationchange", $(er, et.debounceDelay, !0)), Q)
                }, refresh: er, refreshHard: es
            }
        }()
    }, 1342: function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), function (e, t) {
            for (var i in t) Object.defineProperty(e, i, {enumerable: !0, get: t[i]})
        }(t, {
            noSSR: function () {
                return n
            }, default: function () {
                return l
            }
        });
        let r = i(8754), s = (i(7294), r._(i(4304)));

        function a(e) {
            return {default: (null == e ? void 0 : e.default) || e}
        }

        function n(e, t) {
            return delete t.webpack, delete t.modules, e(t)
        }

        function l(e, t) {
            let i = s.default, r = {
                loading: e => {
                    let {error: t, isLoading: i, pastDelay: r} = e;
                    return null
                }
            };
            e instanceof Promise ? r.loader = () => e : "function" == typeof e ? r.loader = e : "object" == typeof e && (r = {...r, ...e}), r = {...r, ...t};
            let l = r.loader;
            return (r.loadableGenerated && (r = {...r, ...r.loadableGenerated}, delete r.loadableGenerated), "boolean" != typeof r.ssr || r.ssr) ? i({
                ...r,
                loader: () => null != l ? l().then(a) : Promise.resolve(a(() => null))
            }) : (delete r.webpack, delete r.modules, n(i, r))
        }

        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {value: !0}), Object.assign(t.default, t), e.exports = t.default)
    }, 43: function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), Object.defineProperty(t, "LoadableContext", {
            enumerable: !0,
            get: function () {
                return a
            }
        });
        let r = i(8754), s = r._(i(7294)), a = s.default.createContext(null)
    }, 4304: function (e, t, i) {
        "use strict";
        /**
         @copyright (c) 2017-present James Kyle <me@thejameskyle.com>
          MIT License
          Permission is hereby granted, free of charge, to any person obtaining
          a copy of this software and associated documentation files (the
          "Software"), to deal in the Software without restriction, including
          without limitation the rights to use, copy, modify, merge, publish,
          distribute, sublicense, and/or sell copies of the Software, and to
          permit persons to whom the Software is furnished to do so, subject to
          the following conditions:
          The above copyright notice and this permission notice shall be
          included in all copies or substantial portions of the Software.
          THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
          EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
          MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
          NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
          LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
          OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
          WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
         */Object.defineProperty(t, "__esModule", {value: !0}), Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function () {
                return h
            }
        });
        let r = i(8754), s = r._(i(7294)), a = i(43), n = [], l = [], o = !1;

        function d(e) {
            let t = e(), i = {loading: !0, loaded: null, error: null};
            return i.promise = t.then(e => (i.loading = !1, i.loaded = e, e)).catch(e => {
                throw i.loading = !1, i.error = e, e
            }), i
        }

        class u {
            promise() {
                return this._res.promise
            }

            retry() {
                this._clearTimeouts(), this._res = this._loadFn(this._opts.loader), this._state = {
                    pastDelay: !1,
                    timedOut: !1
                };
                let {_res: e, _opts: t} = this;
                e.loading && ("number" == typeof t.delay && (0 === t.delay ? this._state.pastDelay = !0 : this._delay = setTimeout(() => {
                    this._update({pastDelay: !0})
                }, t.delay)), "number" == typeof t.timeout && (this._timeout = setTimeout(() => {
                    this._update({timedOut: !0})
                }, t.timeout))), this._res.promise.then(() => {
                    this._update({}), this._clearTimeouts()
                }).catch(e => {
                    this._update({}), this._clearTimeouts()
                }), this._update({})
            }

            _update(e) {
                this._state = {
                    ...this._state,
                    error: this._res.error,
                    loaded: this._res.loaded,
                    loading: this._res.loading, ...e
                }, this._callbacks.forEach(e => e())
            }

            _clearTimeouts() {
                clearTimeout(this._delay), clearTimeout(this._timeout)
            }

            getCurrentValue() {
                return this._state
            }

            subscribe(e) {
                return this._callbacks.add(e), () => {
                    this._callbacks.delete(e)
                }
            }

            constructor(e, t) {
                this._loadFn = e, this._opts = t, this._callbacks = new Set, this._delay = null, this._timeout = null, this.retry()
            }
        }

        function c(e) {
            return function (e, t) {
                let i = Object.assign({
                    loader: null,
                    loading: null,
                    delay: 200,
                    timeout: null,
                    webpack: null,
                    modules: null
                }, t), r = null;

                function n() {
                    if (!r) {
                        let t = new u(e, i);
                        r = {
                            getCurrentValue: t.getCurrentValue.bind(t),
                            subscribe: t.subscribe.bind(t),
                            retry: t.retry.bind(t),
                            promise: t.promise.bind(t)
                        }
                    }
                    return r.promise()
                }

                if (!o) {
                    let e = i.webpack ? i.webpack() : i.modules;
                    e && l.push(t => {
                        for (let i of e) if (t.includes(i)) return n()
                    })
                }

                function d(e, t) {
                    !function () {
                        n();
                        let e = s.default.useContext(a.LoadableContext);
                        e && Array.isArray(i.modules) && i.modules.forEach(t => {
                            e(t)
                        })
                    }();
                    let l = s.default.useSyncExternalStore(r.subscribe, r.getCurrentValue, r.getCurrentValue);
                    return s.default.useImperativeHandle(t, () => ({retry: r.retry}), []), s.default.useMemo(() => {
                        var t;
                        return l.loading || l.error ? s.default.createElement(i.loading, {
                            isLoading: l.loading,
                            pastDelay: l.pastDelay,
                            timedOut: l.timedOut,
                            error: l.error,
                            retry: r.retry
                        }) : l.loaded ? s.default.createElement((t = l.loaded) && t.default ? t.default : t, e) : null
                    }, [e, l])
                }

                return d.preload = () => n(), d.displayName = "LoadableComponent", s.default.forwardRef(d)
            }(d, e)
        }

        function p(e, t) {
            let i = [];
            for (; e.length;) {
                let r = e.pop();
                i.push(r(t))
            }
            return Promise.all(i).then(() => {
                if (e.length) return p(e, t)
            })
        }

        c.preloadAll = () => new Promise((e, t) => {
            p(n).then(e, t)
        }), c.preloadReady = e => (void 0 === e && (e = []), new Promise(t => {
            let i = () => (o = !0, t());
            p(l, e).then(i, i)
        })), window.__NEXT_PRELOADREADY = c.preloadReady;
        let h = c
    }, 9840: function () {
    }, 6735: function () {
    }, 2261: function () {
    }, 5152: function (e, t, i) {
        e.exports = i(1342)
    }, 5194: function (e, t, i) {
        "use strict";
        i.d(t, {
            Z: function () {
                return K
            }
        });
        var r = i(7294);
        let s = e => Array.isArray(e), a = e => s(e) ? e : [e], n = function (e) {
            let t = function (e) {
                return a(e).forEach(e => {
                    var t;
                    return s.set(Symbol(null == (t = e.char) ? void 0 : t.innerText), i({...e}))
                }), this
            }, i = e => (e.shouldPauseCursor = function () {
                return !!(this.typeable || this.cursorable || this.deletable)
            }, e), r = () => Array.from(s.values()), s = new Map;
            return t(e), {
                add: t,
                set: function (e, t) {
                    let r = [...s.keys()];
                    s.set(r[e], i(t))
                },
                wipe: function () {
                    s = new Map, t(e)
                },
                reset: function () {
                    s.forEach(e => delete e.done)
                },
                destroy: e => s.delete(e),
                done: (e, t = !1) => t ? s.delete(e) : s.get(e).done = !0,
                getItems: (e = !1) => e ? r() : r().filter(e => !e.done),
                getQueue: () => s,
                getTypeable: () => r().filter(e => e.typeable)
            }
        }, l = e => Array.from(e), o = e => document.createTextNode(e), d = e => ([...e.childNodes].forEach(e => {
            if (e.nodeValue) {
                [...e.nodeValue].forEach(t => {
                    e.parentNode.insertBefore(o(t), e)
                }), e.remove();
                return
            }
            d(e)
        }), e), u = e => {
            let t = document.implementation.createHTMLDocument();
            return t.body.innerHTML = e, d(t.body)
        }, c = "data-typeit-id", p = "ti-cursor", h = {started: !1, completed: !1, frozen: !1, destroyed: !1}, f = {
            breakLines: !0,
            cursor: {
                autoPause: !0,
                autoPauseDelay: 500,
                animation: {
                    frames: [0, 0, 1].map(e => ({opacity: e})),
                    options: {iterations: 1 / 0, easing: "steps(2, start)", fill: "forwards"}
                }
            },
            cursorChar: "|",
            cursorSpeed: 1e3,
            deleteSpeed: null,
            html: !0,
            lifeLike: !0,
            loop: !1,
            loopDelay: 750,
            nextStringDelay: 750,
            speed: 100,
            startDelay: 250,
            startDelete: !1,
            strings: [],
            waitUntilVisible: !1,
            beforeString: () => {
            },
            afterString: () => {
            },
            beforeStep: () => {
            },
            afterStep: () => {
            },
            afterComplete: () => {
            }
        }, m = `[${c}]:before {content: '.'; display: inline-block; width: 0; visibility: hidden;}`;

        function g(e, t = !1, i = !1) {
            let r, s = e.querySelector(`.${p}`), a = document.createTreeWalker(e, NodeFilter.SHOW_ALL, {
                acceptNode: e => {
                    var t, r;
                    if (s && i) {
                        if (null == (t = e.classList) ? void 0 : t.contains(p)) return NodeFilter.FILTER_ACCEPT;
                        if (s.contains(e)) return NodeFilter.FILTER_REJECT
                    }
                    return (null == (r = e.classList) ? void 0 : r.contains(p)) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
                }
            }), n = [];
            for (; r = a.nextNode();) r.originalParent || (r.originalParent = r.parentNode), n.push(r);
            return t ? n.reverse() : n
        }

        let v = e => document.createElement(e), b = (e, t = "") => {
                let i = v("style");
                i.id = t, i.appendChild(o(e)), document.head.appendChild(i)
            }, y = e => (s(e) || (e = [e / 2, e / 2]), e),
            w = (e, t) => Math.abs(Math.random() * (e + t - (e - t)) + (e - t)), S = e => e / 2,
            x = e => (e.forEach(clearTimeout), []), E = () => Math.random().toString().substring(2, 9),
            T = e => "value" in e, C = e => T(e) ? l(e.value) : g(e, !0).filter(e => !(e.childNodes.length > 0)),
            k = (e, t) => {
                new IntersectionObserver((i, r) => {
                    i.forEach(i => {
                        i.isIntersecting && (t(), r.unobserve(e))
                    })
                }, {threshold: 1}).observe(e)
            }, M = e => "function" == typeof e ? e() : e, P = e => Number.isInteger(e),
            _ = (e, t = document, i = !1) => t[`querySelector${i ? "All" : ""}`](e),
            O = e => /body/i.test(null == e ? void 0 : e.tagName), L = (e, t) => {
                if (T(e)) {
                    e.value = `${e.value}${t.textContent}`;
                    return
                }
                t.innerHTML = "";
                let i = O(t.originalParent) ? e : t.originalParent || e;
                i.insertBefore(t, _("." + p, i) || null)
            }, A = (e, t, i) => Math.min(Math.max(t + e, 0), i.length), z = (e, t) => Object.assign({}, e, t),
            $ = (e, t) => {
                if (!e) return;
                let i = e.parentNode;
                (i.childNodes.length > 1 || i.isSameNode(t) ? e : i).remove()
            }, I = (e, t, i) => {
                let r = t[i - 1], s = _(`.${p}`, e);
                (e = (null == r ? void 0 : r.parentNode) || e).insertBefore(s, r || null)
            }, j = e => /<(.+)>(.*?)<\/(.+)>/.test(e.outerHTML), N = (e, t, i) => new Promise(r => {
                let s = async () => {
                    await e(), r()
                };
                i.push(setTimeout(s, t || 0))
            }), D = {
                "font-family": "",
                "font-weight": "",
                "font-size": "",
                "font-style": "",
                "line-height": "",
                color: "",
                transform: "translateX(-.125em)"
            }, F = (e, t) => {
                let i = `[${c}='${e}']`, r = `${i} .${p}`, s = getComputedStyle(t),
                    a = Object.entries(D).reduce((e, [t, i]) => `${e} ${t}: var(--ti-cursor-${t}, ${i || s[t]});`, "");
                b(`${r} { display: inline-block; width: 0; ${a} }`, e)
            }, G = (e, t) => Array(t).fill(e), V = ({queueItems: e, selector: t, cursorPosition: i, to: r}) => {
                if (P(t)) return -1 * t;
                let s = /END/i.test(r), a = t ? [...e].reverse().findIndex(({char: e}) => {
                    let i = e.parentElement, r = i.matches(t);
                    return !!s && !!r || r && i.firstChild.isSameNode(e)
                }) : -1;
                return a < 0 && (a = s ? 0 : e.length - 1), a - i + (s ? 0 : 1)
            }, R = e => new Promise(t => {
                requestAnimationFrame(async () => {
                    t(await e())
                })
            }), H = e => null == e ? void 0 : e.getAnimations().find(t => t.id === e.dataset.tiAnimationId),
            B = ({cursor: e, frames: t, options: i}) => {
                let r = e.animate(t, i);
                return r.pause(), r.id = e.dataset.tiAnimationId, R(() => {
                    R(() => {
                        r.play()
                    })
                }), r
            }, q = ({cursor: e, options: t, cursorOptions: i}) => {
                let r;
                if (!e || !i) return;
                let s = H(e);
                s && (t.delay = s.effect.getComputedTiming().delay, r = s.currentTime, s.cancel());
                let a = B({cursor: e, frames: i.animation.frames, options: t});
                return r && (a.currentTime = r), a
            }, W = e => {
                var t;
                return null == (t = e.func) ? void 0 : t.call(null)
            }, Y = async ({index: e, queueItems: t, wait: i, cursor: r, cursorOptions: s}) => {
                let a, n = t[e][1], l = [], o = e, d = n, u = () => d && !d.delay, c = n.shouldPauseCursor() && s.autoPause;
                for (; u();) l.push(d), u() && o++, d = t[o] ? t[o][1] : null;
                if (l.length) return await R(async () => {
                    for (let e of l) await W(e)
                }), o - 1;
                let p = H(r);
                return p && (a = {...p.effect.getComputedTiming(), delay: c ? s.autoPauseDelay : 0}), await i(async () => {
                    p && c && p.cancel(), await R(() => {
                        W(n)
                    })
                }, n.delay), await q({cursor: r, options: a, cursorOptions: s}), e
            }, X = e => {
                var t, i;
                if ("object" == typeof e) {
                    let r = {}, {frames: s, options: a} = f.cursor.animation;
                    return r.animation = e.animation || {}, r.animation.frames = (null == (t = e.animation) ? void 0 : t.frames) || s, r.animation.options = z(a, (null == (i = e.animation) ? void 0 : i.options) || {}), r.autoPause = e.autoPause ?? f.cursor.autoPause, r.autoPauseDelay = e.autoPauseDelay || f.cursor.autoPauseDelay, r
                }
                return !0 === e ? f.cursor : e
            }, U = function (e, t = {}) {
                var i;
                let r, s = async (e, t, i = !1) => {
                        eu.frozen && await new Promise(e => {
                            this.unfreeze = () => {
                                eu.frozen = !1, e()
                            }
                        }), i || await ec.beforeStep(this), await N(e, t, el), i || await ec.afterStep(this)
                    }, c = (e, t) => Y({index: e, queueItems: t, wait: s, cursor: em, cursorOptions: ec.cursor}),
                    O = e => $(e, en), D = () => T(en), R = (e = 0) => (function (e) {
                        let {speed: t, deleteSpeed: i, lifeLike: r} = e;
                        return i = null !== i ? i : t / 3, r ? [w(t, S(t)), w(i, S(i))] : [t, i]
                    })(ec)[e], H = () => C(en), q = (e = {}) => {
                        let t = e.delay;
                        t && eh.add({delay: t})
                    }, W = (e, t) => (eh.add(e), q(t), this), U = () => ed ?? eo,
                    Z = (e = {}) => [{func: () => er(e)}, {func: () => er(ec)}], K = e => {
                        let t = ec.nextStringDelay;
                        eh.add([{delay: t[0]}, ...e, {delay: t[1]}])
                    }, J = async () => {
                        if (!D() && em && en.appendChild(em), ef) {
                            F(ep, en), em.dataset.tiAnimationId = ep;
                            let {animation: e} = ec.cursor, {frames: t, options: i} = e;
                            B({frames: t, cursor: em, options: {duration: ec.cursorSpeed, ...i}})
                        }
                    }, Q = async e => {
                        let t = U();
                        t && await et({value: t});
                        let i = H().map(e => [Symbol(), {func: ea, delay: R(1), deletable: !0, shouldPauseCursor: () => !0}]);
                        for (let e = 0; e < i.length; e++) await c(e, i);
                        eh.reset(), eh.set(0, {delay: e})
                    }, ee = async (e = !0) => {
                        eu.started = !0;
                        let t = t => {
                            eh.done(t, !e)
                        };
                        try {
                            let i = [...eh.getQueue()];
                            for (let e = 0; e < i.length; e++) {
                                let [r, s] = i[e];
                                if (!s.done) {
                                    if (!s.deletable || s.deletable && H().length) {
                                        let r = await c(e, i);
                                        Array(r - e).fill(e + 1).map((e, t) => e + t).forEach(e => {
                                            let [r] = i[e];
                                            t(r)
                                        }), e = r
                                    }
                                    t(r)
                                }
                            }
                            if (!e) return this;
                            if (eu.completed = !0, await ec.afterComplete(this), !ec.loop) throw "";
                            let r = ec.loopDelay;
                            s(async () => {
                                await Q(r[0]), ee()
                            }, r[1])
                        } catch (e) {
                        }
                        return this
                    }, et = async e => {
                        eo = A(e, eo, H()), I(en, H(), eo)
                    }, ei = e => L(en, e), er = async e => ec = z(ec, e), es = async () => {
                        if (D()) {
                            en.value = "";
                            return
                        }
                        H().forEach(O)
                    }, ea = () => {
                        let e = H();
                        e.length && (D() ? en.value = en.value.slice(0, -1) : O(e[eo]))
                    };
                this.break = function (e) {
                    return W({func: () => ei(v("BR")), typeable: !0}, e)
                }, this.delete = function (e = null, t = {}) {
                    e = M(e);
                    let i = Z(t), r = e, {instant: s, to: a} = t, n = eh.getTypeable(),
                        l = null === r ? n.length : P(r) ? r : V({queueItems: n, selector: r, cursorPosition: U(), to: a});
                    return W([i[0], ...G({func: ea, delay: s ? 0 : R(1), deletable: !0}, l), i[1]], t)
                }, this.empty = function (e = {}) {
                    return W({func: es}, e)
                }, this.exec = function (e, t = {}) {
                    let i = Z(t);
                    return W([i[0], {func: () => e(this)}, i[1]], t)
                }, this.move = function (e, t = {}) {
                    e = M(e);
                    let i = Z(t), {instant: r, to: s} = t,
                        a = V({queueItems: eh.getTypeable(), selector: null === e ? "" : e, to: s, cursorPosition: U()}),
                        n = a < 0 ? -1 : 1;
                    return ed = U() + a, W([i[0], ...G({
                        func: () => et(n),
                        delay: r ? 0 : R(),
                        cursorable: !0
                    }, Math.abs(a)), i[1]], t)
                }, this.options = function (e, t = {}) {
                    return er(e = M(e)), W({}, t)
                }, this.pause = function (e, t = {}) {
                    return W({delay: M(e)}, t)
                }, this.type = function (e, t = {}) {
                    e = M(e);
                    let {instant: i} = t, r = Z(t), s = (function (e, t = !0) {
                        return t ? g(u(e)) : l(e).map(o)
                    })(e, ec.html).map(e => ({
                        func: () => ei(e),
                        char: e,
                        delay: i || j(e) ? 0 : R(),
                        typeable: e.nodeType === Node.TEXT_NODE
                    }));
                    return W([r[0], {func: async () => await ec.beforeString(e, this)}, ...s, {func: async () => await ec.afterString(e, this)}, r[1]], t)
                }, this.is = function (e) {
                    return eu[e]
                }, this.destroy = function (e = !0) {
                    el = x(el), M(e) && em && O(em), eu.destroyed = !0
                }, this.freeze = function () {
                    eu.frozen = !0
                }, this.unfreeze = () => {
                }, this.reset = function (e) {
                    for (let t in this.is("destroyed") || this.destroy(), e ? (eh.wipe(), e(this)) : eh.reset(), eo = 0, eu) eu[t] = !1;
                    return en[D() ? "value" : "innerHTML"] = "", this
                }, this.go = function () {
                    return eu.started || ((J(), ec.waitUntilVisible) ? k(en, ee.bind(this)) : ee()), this
                }, this.flush = function (e = () => {
                }) {
                    return J(), ee(!1).then(e), this
                }, this.getQueue = () => eh, this.getOptions = () => ec, this.updateOptions = e => er(e), this.getElement = () => en;
                let en = "string" == typeof e ? _(e) : e, el = [], eo = 0, ed = null, eu = z({}, h);
                t.cursor = X(t.cursor ?? f.cursor);
                let ec = z(f, t);
                ec = z(ec, {html: !D() && ec.html, nextStringDelay: y(ec.nextStringDelay), loopDelay: y(ec.loopDelay)});
                let ep = E(), eh = n([{delay: ec.startDelay}]);
                en.dataset.typeitId = ep, b(m);
                let ef = !!ec.cursor && !D(), em = (() => {
                    if (D()) return;
                    let e = v("span");
                    return (e.className = p, ef) ? e.innerHTML = u(ec.cursorChar).innerHTML : e.style.visibility = "hidden", e
                })();
                ec.strings = (i = a(ec.strings), (r = en.innerHTML) ? (en.innerHTML = "", ec.startDelete) ? (en.innerHTML = r, d(en), K(G({
                    func: ea,
                    delay: R(1),
                    deletable: !0
                }, H().length)), i) : r.replace(/<!--(.+?)-->/g, "").trim().split(/<br(?:\s*?)(?:\/)?>/).concat(i) : i), ec.strings.length && (() => {
                    let e = ec.strings.filter(e => !!e);
                    e.forEach((t, i) => {
                        this.type(t), i + 1 !== e.length && K(ec.breakLines ? [{
                            func: () => ei(v("BR")),
                            typeable: !0
                        }] : G({func: ea, delay: R(1)}, eh.getTypeable().length))
                    })
                })()
            }, Z = (0, r.forwardRef)((e, t) => {
                let {as: i} = e;
                return r.createElement(i, {ref: t, ...e})
            }), K = e => {
                let t = (0, r.useRef)(null), i = (0, r.useRef)(null), {
                    options: s,
                    children: a,
                    getBeforeInit: n,
                    getAfterInit: l,
                    ...o
                } = e, [d, u] = (0, r.useState)(!0), [c, p] = (0, r.useState)(null);
                return (0, r.useEffect)(() => {
                    (function () {
                        let e = Object.assign({}, s);
                        a && t.current && (e.strings = t.current.innerHTML), p(e)
                    })(), u(!1)
                }, [s]), (0, r.useEffect)(() => {
                    var e;
                    c && ((null == (e = i.current) ? void 0 : e.updateOptions(c)) || (i.current = new U(t.current, c), i.current = n(i.current), i.current.go(), i.current = l(i.current)))
                }, [c]), (0, r.useEffect)(() => () => {
                    var e;
                    return null == (e = i.current) ? void 0 : e.destroy()
                }, []), r.createElement(Z, {ref: t, children: d ? a : null, style: {opacity: d ? 0 : 1}, ...o})
            };
        K.defaultProps = {as: "span", options: {}, getBeforeInit: e => e, getAfterInit: e => e}
    }, 9926: function (e, t, i) {
        "use strict";
        i.d(t, {
            q: function () {
                return tp
            }
        });
        var r, s, a, n = i(7294), l = Object.defineProperty, o = {};
        ((e, t) => {
            for (var i in t) l(e, i, {get: t[i], enumerable: !0})
        })(o, {
            assign: () => j,
            colors: () => z,
            createStringInterpolator: () => r,
            skipAnimation: () => $,
            to: () => s,
            willAdvance: () => I
        });
        var d = C(), u = e => S(e, d), c = C();
        u.write = e => S(e, c);
        var p = C();
        u.onStart = e => S(e, p);
        var h = C();
        u.onFrame = e => S(e, h);
        var f = C();
        u.onFinish = e => S(e, f);
        var m = [];
        u.setTimeout = (e, t) => {
            let i = u.now() + t, r = () => {
                let e = m.findIndex(e => e.cancel == r);
                ~e && m.splice(e, 1), y -= ~e ? 1 : 0
            }, s = {time: i, handler: e, cancel: r};
            return m.splice(g(i), 0, s), y += 1, x(), s
        };
        var g = e => ~(~m.findIndex(t => t.time > e) || ~m.length);
        u.cancel = e => {
            p.delete(e), h.delete(e), f.delete(e), d.delete(e), c.delete(e)
        }, u.sync = e => {
            w = !0, u.batchedUpdates(e), w = !1
        }, u.throttle = e => {
            let t;

            function i() {
                try {
                    e(...t)
                } finally {
                    t = null
                }
            }

            function r(...e) {
                t = e, u.onStart(i)
            }

            return r.handler = e, r.cancel = () => {
                p.delete(i), t = null
            }, r
        };
        var v = "undefined" != typeof window ? window.requestAnimationFrame : () => {
        };
        u.use = e => v = e, u.now = "undefined" != typeof performance ? () => performance.now() : Date.now, u.batchedUpdates = e => e(), u.catch = console.error, u.frameLoop = "always", u.advance = () => {
            "demand" !== u.frameLoop ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : T()
        };
        var b = -1, y = 0, w = !1;

        function S(e, t) {
            w ? (t.delete(e), e(0)) : (t.add(e), x())
        }

        function x() {
            b < 0 && (b = 0, "demand" !== u.frameLoop && v(E))
        }

        function E() {
            ~b && (v(E), u.batchedUpdates(T))
        }

        function T() {
            let e = b;
            b = u.now();
            let t = g(b);
            if (t && (k(m.splice(0, t), e => e.handler()), y -= t), !y) {
                b = -1;
                return
            }
            p.flush(), d.flush(e ? Math.min(64, b - e) : 16.667), h.flush(), c.flush(), f.flush()
        }

        function C() {
            let e = new Set, t = e;
            return {
                add(i) {
                    y += t != e || e.has(i) ? 0 : 1, e.add(i)
                }, delete: i => (y -= t == e && e.has(i) ? 1 : 0, e.delete(i)), flush(i) {
                    t.size && (e = new Set, y -= t.size, k(t, t => t(i) && e.add(t)), y += e.size, t = e)
                }
            }
        }

        function k(e, t) {
            e.forEach(e => {
                try {
                    t(e)
                } catch (e) {
                    u.catch(e)
                }
            })
        }

        var M = (e, t, i) => Object.defineProperty(e, t, {value: i, writable: !0, configurable: !0}), P = {
            arr: Array.isArray,
            obj: e => !!e && "Object" === e.constructor.name,
            fun: e => "function" == typeof e,
            str: e => "string" == typeof e,
            num: e => "number" == typeof e,
            und: e => void 0 === e
        }, _ = (e, t) => e.forEach(t);

        function O(e, t, i) {
            if (P.arr(e)) {
                for (let r = 0; r < e.length; r++) t.call(i, e[r], `${r}`);
                return
            }
            for (let r in e) e.hasOwnProperty(r) && t.call(i, e[r], r)
        }

        var L = e => P.und(e) ? [] : P.arr(e) ? e : [e],
            A = () => "undefined" == typeof window || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
            z = null, $ = !1, I = function () {
            }, j = e => {
                e.to && (s = e.to), e.now && (u.now = e.now), void 0 !== e.colors && (z = e.colors), null != e.skipAnimation && ($ = e.skipAnimation), e.createStringInterpolator && (r = e.createStringInterpolator), e.requestAnimationFrame && u.use(e.requestAnimationFrame), e.batchedUpdates && (u.batchedUpdates = e.batchedUpdates), e.willAdvance && (I = e.willAdvance), e.frameLoop && (u.frameLoop = e.frameLoop)
            }, N = new Set, D = [], F = [], G = 0, V = {
                get idle() {
                    return !N.size && !D.length
                }, start(e) {
                    G > e.priority ? (N.add(e), u.onStart(R)) : (H(e), u(q))
                }, advance: q, sort(e) {
                    if (G) u.onFrame(() => V.sort(e)); else {
                        let t = D.indexOf(e);
                        ~t && (D.splice(t, 1), B(e))
                    }
                }, clear() {
                    D = [], N.clear()
                }
            };

        function R() {
            N.forEach(H), N.clear(), u(q)
        }

        function H(e) {
            D.includes(e) || B(e)
        }

        function B(e) {
            D.splice(function (e, t) {
                let i = e.findIndex(t);
                return i < 0 ? e.length : i
            }(D, t => t.priority > e.priority), 0, e)
        }

        function q(e) {
            let t = F;
            for (let i = 0; i < D.length; i++) {
                let r = D[i];
                G = r.priority, r.idle || (I(r), r.advance(e), r.idle || t.push(r))
            }
            return G = 0, (F = D).length = 0, (D = t).length > 0
        }

        var W = "[-+]?\\d*\\.?\\d+", Y = W + "%";

        function X(...e) {
            return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)"
        }

        var U = RegExp("rgb" + X(W, W, W)), Z = RegExp("rgba" + X(W, W, W, W)), K = RegExp("hsl" + X(W, Y, Y)),
            J = RegExp("hsla" + X(W, Y, Y, W)), Q = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            ee = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, et = /^#([0-9a-fA-F]{6})$/,
            ei = /^#([0-9a-fA-F]{8})$/;

        function er(e, t, i) {
            return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6) ? e + (t - e) * 6 * i : i < .5 ? t : i < 2 / 3 ? e + (t - e) * (2 / 3 - i) * 6 : e
        }

        function es(e, t, i) {
            let r = i < .5 ? i * (1 + t) : i + t - i * t, s = 2 * i - r, a = er(s, r, e + 1 / 3), n = er(s, r, e),
                l = er(s, r, e - 1 / 3);
            return Math.round(255 * a) << 24 | Math.round(255 * n) << 16 | Math.round(255 * l) << 8
        }

        function ea(e) {
            let t = parseInt(e, 10);
            return t < 0 ? 0 : t > 255 ? 255 : t
        }

        function en(e) {
            let t = parseFloat(e);
            return (t % 360 + 360) % 360 / 360
        }

        function el(e) {
            let t = parseFloat(e);
            return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t)
        }

        function eo(e) {
            let t = parseFloat(e);
            return t < 0 ? 0 : t > 100 ? 1 : t / 100
        }

        function ed(e) {
            let t;
            let i = "number" == typeof e ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = et.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : z && void 0 !== z[e] ? z[e] : (t = U.exec(e)) ? (ea(t[1]) << 24 | ea(t[2]) << 16 | ea(t[3]) << 8 | 255) >>> 0 : (t = Z.exec(e)) ? (ea(t[1]) << 24 | ea(t[2]) << 16 | ea(t[3]) << 8 | el(t[4])) >>> 0 : (t = Q.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = ei.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = ee.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = K.exec(e)) ? (255 | es(en(t[1]), eo(t[2]), eo(t[3]))) >>> 0 : (t = J.exec(e)) ? (es(en(t[1]), eo(t[2]), eo(t[3])) | el(t[4])) >>> 0 : null;
            if (null === i) return e;
            i = i || 0;
            let r = (4278190080 & i) >>> 24, s = (16711680 & i) >>> 16, a = (65280 & i) >>> 8, n = (255 & i) / 255;
            return `rgba(${r}, ${s}, ${a}, ${n})`
        }

        var eu = (e, t, i) => {
                if (P.fun(e)) return e;
                if (P.arr(e)) return eu({range: e, output: t, extrapolate: i});
                if (P.str(e.output[0])) return r(e);
                let s = e.output, a = e.range || [0, 1], n = e.extrapolateLeft || e.extrapolate || "extend",
                    l = e.extrapolateRight || e.extrapolate || "extend", o = e.easing || (e => e);
                return t => {
                    let i = function (e, t) {
                        for (var i = 1; i < t.length - 1 && !(t[i] >= e); ++i) ;
                        return i - 1
                    }(t, a);
                    return function (e, t, i, r, s, a, n, l, o) {
                        let d = o ? o(e) : e;
                        if (d < t) {
                            if ("identity" === n) return d;
                            "clamp" === n && (d = t)
                        }
                        if (d > i) {
                            if ("identity" === l) return d;
                            "clamp" === l && (d = i)
                        }
                        return r === s ? r : t === i ? e <= t ? r : s : (t === -1 / 0 ? d = -d : i === 1 / 0 ? d -= t : d = (d - t) / (i - t), d = a(d), r === -1 / 0 ? d = -d : s === 1 / 0 ? d += r : d = d * (s - r) + r, d)
                    }(t, a[i], a[i + 1], s[i], s[i + 1], o, n, l, e.map)
                }
            }, ec = Symbol.for("FluidValue.get"), ep = Symbol.for("FluidValue.observers"), eh = e => !!(e && e[ec]),
            ef = e => e && e[ec] ? e[ec]() : e;

        function em(e, t) {
            let i = e[ep];
            i && i.forEach(e => {
                e.eventObserved ? e.eventObserved(t) : e(t)
            })
        }

        var eg = class {
            constructor(e) {
                if (!e && !(e = this.get)) throw Error("Unknown getter");
                ev(this, e)
            }
        }, ev = (e, t) => ew(e, ec, t);

        function eb(e, t) {
            if (e[ec]) {
                let i = e[ep];
                i || ew(e, ep, i = new Set), !i.has(t) && (i.add(t), e.observerAdded && e.observerAdded(i.size, t))
            }
            return t
        }

        function ey(e, t) {
            let i = e[ep];
            if (i && i.has(t)) {
                let r = i.size - 1;
                r ? i.delete(t) : e[ep] = null, e.observerRemoved && e.observerRemoved(r, t)
            }
        }

        var ew = (e, t, i) => Object.defineProperty(e, t, {value: i, writable: !0, configurable: !0}),
            eS = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
            ex = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
            eE = RegExp(`(${eS.source})(%|[a-z]+)`, "i"),
            eT = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
            eC = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/, ek = e => {
                let [t, i] = eM(e);
                if (!t || A()) return e;
                let r = window.getComputedStyle(document.documentElement).getPropertyValue(t);
                if (r) return r.trim();
                if (i && i.startsWith("--")) {
                    let e = window.getComputedStyle(document.documentElement).getPropertyValue(i);
                    if (e) return e
                } else if (i && eC.test(i)) return ek(i); else if (i) return i;
                return e
            }, eM = e => {
                let t = eC.exec(e);
                if (!t) return [,];
                let [, i, r] = t;
                return [i, r]
            }, eP = (e, t, i, r, s) => `rgba(${Math.round(t)}, ${Math.round(i)}, ${Math.round(r)}, ${s})`, e_ = e => {
                a || (a = z ? RegExp(`(${Object.keys(z).join("|")})(?!\\w)`, "g") : /^\b$/);
                let t = e.output.map(e => ef(e).replace(eC, ek).replace(ex, ed).replace(a, ed)),
                    i = t.map(e => e.match(eS).map(Number)), r = i[0].map((e, t) => i.map(e => {
                        if (!(t in e)) throw Error('The arity of each "output" value must be equal');
                        return e[t]
                    })), s = r.map(t => eu({...e, output: t}));
                return e => {
                    let i = !eE.test(t[0]) && t.find(e => eE.test(e))?.replace(eS, ""), r = 0;
                    return t[0].replace(eS, () => `${s[r++](e)}${i || ""}`).replace(eT, eP)
                }
            }, eO = "react-spring: ", eL = e => {
                let t = !1;
                if ("function" != typeof e) throw TypeError(`${eO}once requires a function parameter`);
                return (...i) => {
                    t || (e(...i), t = !0)
                }
            }, eA = eL(console.warn);

        function ez(e) {
            return P.str(e) && ("#" == e[0] || /\d/.test(e) || !A() && eC.test(e) || e in (z || {}))
        }

        eL(console.warn);
        var e$ = A() ? n.useEffect : n.useLayoutEffect, eI = () => {
                let e = (0, n.useRef)(!1);
                return e$(() => (e.current = !0, () => {
                    e.current = !1
                }), []), e
            }, ej = e => (0, n.useEffect)(e, eN), eN = [], eD = Symbol.for("Animated:node"), eF = e => !!e && e[eD] === e,
            eG = e => e && e[eD], eV = (e, t) => M(e, eD, t), eR = e => e && e[eD] && e[eD].getPayload(), eH = class {
                constructor() {
                    eV(this, this)
                }

                getPayload() {
                    return this.payload || []
                }
            }, eB = class extends eH {
                constructor(e) {
                    super(), this._value = e, this.done = !0, this.durationProgress = 0, P.num(this._value) && (this.lastPosition = this._value)
                }

                static create(e) {
                    return new eB(e)
                }

                getPayload() {
                    return [this]
                }

                getValue() {
                    return this._value
                }

                setValue(e, t) {
                    return P.num(e) && (this.lastPosition = e, t && (e = Math.round(e / t) * t, this.done && (this.lastPosition = e))), this._value !== e && (this._value = e, !0)
                }

                reset() {
                    let {done: e} = this;
                    this.done = !1, P.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, e && (this.lastVelocity = null), this.v0 = null)
                }
            }, eq = class extends eB {
                constructor(e) {
                    super(0), this._string = null, this._toString = eu({output: [e, e]})
                }

                static create(e) {
                    return new eq(e)
                }

                getValue() {
                    let e = this._string;
                    return null == e ? this._string = this._toString(this._value) : e
                }

                setValue(e) {
                    if (P.str(e)) {
                        if (e == this._string) return !1;
                        this._string = e, this._value = 1
                    } else {
                        if (!super.setValue(e)) return !1;
                        this._string = null
                    }
                    return !0
                }

                reset(e) {
                    e && (this._toString = eu({output: [this.getValue(), e]})), this._value = 0, super.reset()
                }
            }, eW = {dependencies: null}, eY = class extends eH {
                constructor(e) {
                    super(), this.source = e, this.setValue(e)
                }

                getValue(e) {
                    let t = {};
                    return O(this.source, (i, r) => {
                        eF(i) ? t[r] = i.getValue(e) : eh(i) ? t[r] = ef(i) : e || (t[r] = i)
                    }), t
                }

                setValue(e) {
                    this.source = e, this.payload = this._makePayload(e)
                }

                reset() {
                    this.payload && _(this.payload, e => e.reset())
                }

                _makePayload(e) {
                    if (e) {
                        let t = new Set;
                        return O(e, this._addToPayload, t), Array.from(t)
                    }
                }

                _addToPayload(e) {
                    eW.dependencies && eh(e) && eW.dependencies.add(e);
                    let t = eR(e);
                    t && _(t, e => this.add(e))
                }
            }, eX = class extends eY {
                constructor(e) {
                    super(e)
                }

                static create(e) {
                    return new eX(e)
                }

                getValue() {
                    return this.source.map(e => e.getValue())
                }

                setValue(e) {
                    let t = this.getPayload();
                    return e.length == t.length ? t.map((t, i) => t.setValue(e[i])).some(Boolean) : (super.setValue(e.map(eU)), !0)
                }
            };

        function eU(e) {
            let t = ez(e) ? eq : eB;
            return t.create(e)
        }

        var eZ = (e, t) => {
                let i = !P.fun(e) || e.prototype && e.prototype.isReactComponent;
                return (0, n.forwardRef)((r, s) => {
                    let a = (0, n.useRef)(null), l = i && (0, n.useCallback)(e => {
                        a.current = (s && (P.fun(s) ? s(e) : s.current = e), e)
                    }, [s]), [o, d] = function (e, t) {
                        let i = new Set;
                        return eW.dependencies = i, e.style && (e = {
                            ...e,
                            style: t.createAnimatedStyle(e.style)
                        }), e = new eY(e), eW.dependencies = null, [e, i]
                    }(r, t), c = function () {
                        let e = (0, n.useState)()[1], t = eI();
                        return () => {
                            t.current && e(Math.random())
                        }
                    }(), p = () => {
                        let e = a.current;
                        if (i && !e) return;
                        let r = !!e && t.applyAnimatedValues(e, o.getValue(!0));
                        !1 === r && c()
                    }, h = new eK(p, d), f = (0, n.useRef)();
                    e$(() => (f.current = h, _(d, e => eb(e, h)), () => {
                        f.current && (_(f.current.deps, e => ey(e, f.current)), u.cancel(f.current.update))
                    })), (0, n.useEffect)(p, []), ej(() => () => {
                        let e = f.current;
                        _(e.deps, t => ey(t, e))
                    });
                    let m = t.getComponentProps(o.getValue());
                    return n.createElement(e, {...m, ref: l})
                })
            }, eK = class {
                constructor(e, t) {
                    this.update = e, this.deps = t
                }

                eventObserved(e) {
                    "change" == e.type && u.write(this.update)
                }
            }, eJ = Symbol.for("AnimatedComponent"),
            eQ = e => P.str(e) ? e : e && P.str(e.displayName) ? e.displayName : P.fun(e) && e.name || null,
            e0 = e => e instanceof e2, e1 = 1, e2 = class extends eg {
                constructor() {
                    super(...arguments), this.id = e1++, this._priority = 0
                }

                get priority() {
                    return this._priority
                }

                set priority(e) {
                    this._priority != e && (this._priority = e, this._onPriorityChange(e))
                }

                get() {
                    let e = eG(this);
                    return e && e.getValue()
                }

                to(...e) {
                    return o.to(this, e)
                }

                interpolate(...e) {
                    return eA(`${eO}The "interpolate" function is deprecated in v9 (use "to" instead)`), o.to(this, e)
                }

                toJSON() {
                    return this.get()
                }

                observerAdded(e) {
                    1 == e && this._attach()
                }

                observerRemoved(e) {
                    0 == e && this._detach()
                }

                _attach() {
                }

                _detach() {
                }

                _onChange(e, t = !1) {
                    em(this, {type: "change", parent: this, value: e, idle: t})
                }

                _onPriorityChange(e) {
                    this.idle || V.sort(this), em(this, {type: "priority", parent: this, priority: e})
                }
            };
        Symbol.for("SpringPhase");
        var e5 = ({children: e, ...t}) => {
            let i = (0, n.useContext)(e3), r = t.pause || !!i.pause, s = t.immediate || !!i.immediate;
            t = function (e, t) {
                let [i] = (0, n.useState)(() => ({inputs: t, result: e()})), r = (0, n.useRef)(), s = r.current, a = s;
                if (a) {
                    let i = !!(t && a.inputs && function (e, t) {
                        if (e.length !== t.length) return !1;
                        for (let i = 0; i < e.length; i++) if (e[i] !== t[i]) return !1;
                        return !0
                    }(t, a.inputs));
                    i || (a = {inputs: t, result: e()})
                } else a = i;
                return (0, n.useEffect)(() => {
                    r.current = a, s == i && (i.inputs = i.result = void 0)
                }, [a]), a.result
            }(() => ({pause: r, immediate: s}), [r, s]);
            let {Provider: a} = e3;
            return n.createElement(a, {value: t}, e)
        }, e3 = (Object.assign(e5, n.createContext({})), e5.Provider._context = e5, e5.Consumer._context = e5, e5);
        e5.Provider = e3.Provider, e5.Consumer = e3.Consumer;
        var e4 = class extends e2 {
            constructor(e, t) {
                super(), this.source = e, this.idle = !0, this._active = new Set, this.calc = eu(...t);
                let i = this._get(), r = function (e) {
                    let t = eG(e);
                    return t ? t.constructor : P.arr(e) ? eX : ez(e) ? eq : eB
                }(i);
                eV(this, r.create(i))
            }

            advance(e) {
                let t = this._get(), i = this.get();
                !function (e, t) {
                    if (P.arr(e)) {
                        if (!P.arr(t) || e.length !== t.length) return !1;
                        for (let i = 0; i < e.length; i++) if (e[i] !== t[i]) return !1;
                        return !0
                    }
                    return e === t
                }(t, i) && (eG(this).setValue(t), this._onChange(t, this.idle)), !this.idle && e9(this._active) && e8(this)
            }

            _get() {
                let e = P.arr(this.source) ? this.source.map(ef) : L(ef(this.source));
                return this.calc(...e)
            }

            _start() {
                this.idle && !e9(this._active) && (this.idle = !1, _(eR(this), e => {
                    e.done = !1
                }), o.skipAnimation ? (u.batchedUpdates(() => this.advance()), e8(this)) : V.start(this))
            }

            _attach() {
                let e = 1;
                _(L(this.source), t => {
                    eh(t) && eb(t, this), e0(t) && (t.idle || this._active.add(t), e = Math.max(e, t.priority + 1))
                }), this.priority = e, this._start()
            }

            _detach() {
                _(L(this.source), e => {
                    eh(e) && ey(e, this)
                }), this._active.clear(), e8(this)
            }

            eventObserved(e) {
                "change" == e.type ? e.idle ? this.advance() : (this._active.add(e.parent), this._start()) : "idle" == e.type ? this._active.delete(e.parent) : "priority" == e.type && (this.priority = L(this.source).reduce((e, t) => Math.max(e, (e0(t) ? t.priority : 0) + 1), 0))
            }
        };

        function e7(e) {
            return !1 !== e.idle
        }

        function e9(e) {
            return !e.size || Array.from(e).every(e7)
        }

        function e8(e) {
            e.idle || (e.idle = !0, _(eR(e), e => {
                e.done = !0
            }), em(e, {type: "idle", parent: e}))
        }

        o.assign({createStringInterpolator: e_, to: (e, t) => new e4(e, t)}), V.advance;
        var e6 = i(3935), te = /^--/, tt = {}, ti = {
            animationIterationCount: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0
        }, tr = (e, t) => e + t.charAt(0).toUpperCase() + t.substring(1), ts = ["Webkit", "Ms", "Moz", "O"];
        ti = Object.keys(ti).reduce((e, t) => (ts.forEach(i => e[tr(i, t)] = e[t]), e), ti);
        var ta = /^(matrix|translate|scale|rotate|skew)/, tn = /^(translate)/, tl = /^(rotate|skew)/,
            to = (e, t) => P.num(e) && 0 !== e ? e + t : e,
            td = (e, t) => P.arr(e) ? e.every(e => td(e, t)) : P.num(e) ? e === t : parseFloat(e) === t,
            tu = class extends eY {
                constructor({x: e, y: t, z: i, ...r}) {
                    let s = [], a = [];
                    (e || t || i) && (s.push([e || 0, t || 0, i || 0]), a.push(e => [`translate3d(${e.map(e => to(e, "px")).join(",")})`, td(e, 0)])), O(r, (e, t) => {
                        if ("transform" === t) s.push([e || ""]), a.push(e => [e, "" === e]); else if (ta.test(t)) {
                            if (delete r[t], P.und(e)) return;
                            let i = tn.test(t) ? "px" : tl.test(t) ? "deg" : "";
                            s.push(L(e)), a.push("rotate3d" === t ? ([e, t, r, s]) => [`rotate3d(${e},${t},${r},${to(s, i)})`, td(s, 0)] : e => [`${t}(${e.map(e => to(e, i)).join(",")})`, td(e, t.startsWith("scale") ? 1 : 0)])
                        }
                    }), s.length && (r.transform = new tc(s, a)), super(r)
                }
            }, tc = class extends eg {
                constructor(e, t) {
                    super(), this.inputs = e, this.transforms = t, this._value = null
                }

                get() {
                    return this._value || (this._value = this._get())
                }

                _get() {
                    let e = "", t = !0;
                    return _(this.inputs, (i, r) => {
                        let s = ef(i[0]), [a, n] = this.transforms[r](P.arr(s) ? s : i.map(ef));
                        e += " " + a, t = t && n
                    }), t ? "none" : e
                }

                observerAdded(e) {
                    1 == e && _(this.inputs, e => _(e, e => eh(e) && eb(e, this)))
                }

                observerRemoved(e) {
                    0 == e && _(this.inputs, e => _(e, e => eh(e) && ey(e, this)))
                }

                eventObserved(e) {
                    "change" == e.type && (this._value = null), em(this, e)
                }
            };
        o.assign({
            batchedUpdates: e6.unstable_batchedUpdates, createStringInterpolator: e_, colors: {
                transparent: 0,
                aliceblue: 4042850303,
                antiquewhite: 4209760255,
                aqua: 16777215,
                aquamarine: 2147472639,
                azure: 4043309055,
                beige: 4126530815,
                bisque: 4293182719,
                black: 255,
                blanchedalmond: 4293643775,
                blue: 65535,
                blueviolet: 2318131967,
                brown: 2771004159,
                burlywood: 3736635391,
                burntsienna: 3934150143,
                cadetblue: 1604231423,
                chartreuse: 2147418367,
                chocolate: 3530104575,
                coral: 4286533887,
                cornflowerblue: 1687547391,
                cornsilk: 4294499583,
                crimson: 3692313855,
                cyan: 16777215,
                darkblue: 35839,
                darkcyan: 9145343,
                darkgoldenrod: 3095792639,
                darkgray: 2846468607,
                darkgreen: 6553855,
                darkgrey: 2846468607,
                darkkhaki: 3182914559,
                darkmagenta: 2332068863,
                darkolivegreen: 1433087999,
                darkorange: 4287365375,
                darkorchid: 2570243327,
                darkred: 2332033279,
                darksalmon: 3918953215,
                darkseagreen: 2411499519,
                darkslateblue: 1211993087,
                darkslategray: 793726975,
                darkslategrey: 793726975,
                darkturquoise: 13554175,
                darkviolet: 2483082239,
                deeppink: 4279538687,
                deepskyblue: 12582911,
                dimgray: 1768516095,
                dimgrey: 1768516095,
                dodgerblue: 512819199,
                firebrick: 2988581631,
                floralwhite: 4294635775,
                forestgreen: 579543807,
                fuchsia: 4278255615,
                gainsboro: 3705462015,
                ghostwhite: 4177068031,
                gold: 4292280575,
                goldenrod: 3668254975,
                gray: 2155905279,
                green: 8388863,
                greenyellow: 2919182335,
                grey: 2155905279,
                honeydew: 4043305215,
                hotpink: 4285117695,
                indianred: 3445382399,
                indigo: 1258324735,
                ivory: 4294963455,
                khaki: 4041641215,
                lavender: 3873897215,
                lavenderblush: 4293981695,
                lawngreen: 2096890111,
                lemonchiffon: 4294626815,
                lightblue: 2916673279,
                lightcoral: 4034953471,
                lightcyan: 3774873599,
                lightgoldenrodyellow: 4210742015,
                lightgray: 3553874943,
                lightgreen: 2431553791,
                lightgrey: 3553874943,
                lightpink: 4290167295,
                lightsalmon: 4288707327,
                lightseagreen: 548580095,
                lightskyblue: 2278488831,
                lightslategray: 2005441023,
                lightslategrey: 2005441023,
                lightsteelblue: 2965692159,
                lightyellow: 4294959359,
                lime: 16711935,
                limegreen: 852308735,
                linen: 4210091775,
                magenta: 4278255615,
                maroon: 2147483903,
                mediumaquamarine: 1724754687,
                mediumblue: 52735,
                mediumorchid: 3126187007,
                mediumpurple: 2473647103,
                mediumseagreen: 1018393087,
                mediumslateblue: 2070474495,
                mediumspringgreen: 16423679,
                mediumturquoise: 1221709055,
                mediumvioletred: 3340076543,
                midnightblue: 421097727,
                mintcream: 4127193855,
                mistyrose: 4293190143,
                moccasin: 4293178879,
                navajowhite: 4292783615,
                navy: 33023,
                oldlace: 4260751103,
                olive: 2155872511,
                olivedrab: 1804477439,
                orange: 4289003775,
                orangered: 4282712319,
                orchid: 3664828159,
                palegoldenrod: 4008225535,
                palegreen: 2566625535,
                paleturquoise: 2951671551,
                palevioletred: 3681588223,
                papayawhip: 4293907967,
                peachpuff: 4292524543,
                peru: 3448061951,
                pink: 4290825215,
                plum: 3718307327,
                powderblue: 2967529215,
                purple: 2147516671,
                rebeccapurple: 1714657791,
                red: 4278190335,
                rosybrown: 3163525119,
                royalblue: 1097458175,
                saddlebrown: 2336560127,
                salmon: 4202722047,
                sandybrown: 4104413439,
                seagreen: 780883967,
                seashell: 4294307583,
                sienna: 2689740287,
                silver: 3233857791,
                skyblue: 2278484991,
                slateblue: 1784335871,
                slategray: 1887473919,
                slategrey: 1887473919,
                snow: 4294638335,
                springgreen: 16744447,
                steelblue: 1182971135,
                tan: 3535047935,
                teal: 8421631,
                thistle: 3636451583,
                tomato: 4284696575,
                turquoise: 1088475391,
                violet: 4001558271,
                wheat: 4125012991,
                white: 4294967295,
                whitesmoke: 4126537215,
                yellow: 4294902015,
                yellowgreen: 2597139199
            }
        });
        var tp = ((e, {
            applyAnimatedValues: t = () => !1,
            createAnimatedStyle: i = e => new eY(e),
            getComponentProps: r = e => e
        } = {}) => {
            let s = {applyAnimatedValues: t, createAnimatedStyle: i, getComponentProps: r}, a = e => {
                let t = eQ(e) || "Anonymous";
                return (e = P.str(e) ? a[e] || (a[e] = eZ(e, s)) : e[eJ] || (e[eJ] = eZ(e, s))).displayName = `Animated(${t})`, e
            };
            return O(e, (t, i) => {
                P.arr(e) && (i = eQ(t)), a[i] = a(t)
            }), {animated: a}
        })(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], {
            applyAnimatedValues: function (e, t) {
                if (!e.nodeType || !e.setAttribute) return !1;
                let i = "filter" === e.nodeName || e.parentNode && "filter" === e.parentNode.nodeName, {
                        style: r,
                        children: s,
                        scrollTop: a,
                        scrollLeft: n,
                        viewBox: l,
                        ...o
                    } = t, d = Object.values(o),
                    u = Object.keys(o).map(t => i || e.hasAttribute(t) ? t : tt[t] || (tt[t] = t.replace(/([A-Z])/g, e => "-" + e.toLowerCase())));
                for (let t in void 0 !== s && (e.textContent = s), r) if (r.hasOwnProperty(t)) {
                    var c;
                    let i = null == (c = r[t]) || "boolean" == typeof c || "" === c ? "" : "number" != typeof c || 0 === c || te.test(t) || ti.hasOwnProperty(t) && ti[t] ? ("" + c).trim() : c + "px";
                    te.test(t) ? e.style.setProperty(t, i) : e.style[t] = i
                }
                u.forEach((t, i) => {
                    e.setAttribute(t, d[i])
                }), void 0 !== a && (e.scrollTop = a), void 0 !== n && (e.scrollLeft = n), void 0 !== l && e.setAttribute("viewBox", l)
            }, createAnimatedStyle: e => new tu(e), getComponentProps: ({scrollTop: e, scrollLeft: t, ...i}) => i
        }).animated
    }, 2546: function (e, t, i) {
        "use strict";
        i.d(t, {
            tq: function () {
                return b
            }, o5: function () {
                return w
            }
        });
        var r = i(7294), s = i(67);

        function a(e) {
            return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
        }

        function n(e, t) {
            let i = ["__proto__", "constructor", "prototype"];
            Object.keys(t).filter(e => 0 > i.indexOf(e)).forEach(i => {
                void 0 === e[i] ? e[i] = t[i] : a(t[i]) && a(e[i]) && Object.keys(t[i]).length > 0 ? t[i].__swiper__ ? e[i] = t[i] : n(e[i], t[i]) : e[i] = t[i]
            })
        }

        function l(e = {}) {
            return e.navigation && void 0 === e.navigation.nextEl && void 0 === e.navigation.prevEl
        }

        function o(e = {}) {
            return e.pagination && void 0 === e.pagination.el
        }

        function d(e = {}) {
            return e.scrollbar && void 0 === e.scrollbar.el
        }

        function u(e = "") {
            let t = e.split(" ").map(e => e.trim()).filter(e => !!e), i = [];
            return t.forEach(e => {
                0 > i.indexOf(e) && i.push(e)
            }), i.join(" ")
        }

        let c = ["eventsPrefix", "injectStyles", "injectStylesUrls", "modules", "init", "_direction", "oneWayMovement", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "_spaceBetween", "_slidesPerView", "maxBackfaceHiddenSlides", "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_loop", "loopedSlides", "loopPreventsSliding", "_rewind", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideActiveClass", "slideVisibleClass", "slideNextClass", "slidePrevClass", "wrapperClass", "lazyPreloaderClass", "lazyPreloadPrevNext", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", "a11y", "_autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "virtual", "zoom", "control"];

        function p(e) {
            return e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
        }

        let h = e => {
            e && !e.destroyed && e.params.virtual && (!e.params.virtual || e.params.virtual.enabled) && (e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate())
        };

        function f(e, t) {
            return "undefined" == typeof window ? (0, r.useEffect)(e, t) : (0, r.useLayoutEffect)(e, t)
        }

        let m = (0, r.createContext)(null), g = (0, r.createContext)(null);

        function v() {
            return (v = Object.assign ? Object.assign.bind() : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = arguments[t];
                    for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r])
                }
                return e
            }).apply(this, arguments)
        }

        let b = (0, r.forwardRef)(function (e, t) {
            let {
                    className: i,
                    tag: m = "div",
                    wrapperTag: b = "div",
                    children: y,
                    onSwiper: w,
                    ...S
                } = void 0 === e ? {} : e,
                x = !1, [E, T] = (0, r.useState)("swiper"), [C, k] = (0, r.useState)(null), [M, P] = (0, r.useState)(!1),
                _ = (0, r.useRef)(!1), O = (0, r.useRef)(null), L = (0, r.useRef)(null), A = (0, r.useRef)(null),
                z = (0, r.useRef)(null), $ = (0, r.useRef)(null), I = (0, r.useRef)(null), j = (0, r.useRef)(null),
                N = (0, r.useRef)(null), {params: D, passedParams: F, rest: G, events: V} = function (e = {}, t = !0) {
                    let i = {on: {}}, r = {}, l = {};
                    n(i, s.ZP.defaults), n(i, s.ZP.extendedDefaults), i._emitClasses = !0, i.init = !1;
                    let o = {}, d = c.map(e => e.replace(/_/, "")), u = Object.assign({}, e);
                    return Object.keys(u).forEach(s => {
                        void 0 !== e[s] && (d.indexOf(s) >= 0 ? a(e[s]) ? (i[s] = {}, l[s] = {}, n(i[s], e[s]), n(l[s], e[s])) : (i[s] = e[s], l[s] = e[s]) : 0 === s.search(/on[A-Z]/) && "function" == typeof e[s] ? t ? r[`${s[2].toLowerCase()}${s.substr(3)}`] = e[s] : i.on[`${s[2].toLowerCase()}${s.substr(3)}`] = e[s] : o[s] = e[s])
                    }), ["navigation", "pagination", "scrollbar"].forEach(e => {
                        !0 === i[e] && (i[e] = {}), !1 === i[e] && delete i[e]
                    }), {params: i, passedParams: l, rest: o, events: r}
                }(S), {slides: R, slots: H} = function (e) {
                    let t = [], i = {"container-start": [], "container-end": [], "wrapper-start": [], "wrapper-end": []};
                    return r.Children.toArray(e).forEach(e => {
                        if (p(e)) t.push(e); else if (e.props && e.props.slot && i[e.props.slot]) i[e.props.slot].push(e); else if (e.props && e.props.children) {
                            let s = function e(t) {
                                let i = [];
                                return r.Children.toArray(t).forEach(t => {
                                    p(t) ? i.push(t) : t.props && t.props.children && e(t.props.children).forEach(e => i.push(e))
                                }), i
                            }(e.props.children);
                            s.length > 0 ? s.forEach(e => t.push(e)) : i["container-end"].push(e)
                        } else i["container-end"].push(e)
                    }), {slides: t, slots: i}
                }(y), B = () => {
                    P(!M)
                };
            Object.assign(D.on, {
                _containerClasses(e, t) {
                    T(t)
                }
            });
            let q = () => {
                Object.assign(D.on, V), x = !0;
                let e = {...D};
                if (delete e.wrapperClass, L.current = new s.ZP(e), L.current.virtual && L.current.params.virtual.enabled) {
                    L.current.virtual.slides = R;
                    let e = {cache: !1, slides: R, renderExternal: k, renderExternalUpdate: !1};
                    n(L.current.params.virtual, e), n(L.current.originalParams.virtual, e)
                }
            };
            O.current || q(), L.current && L.current.on("_beforeBreakpoint", B);
            let W = () => {
                !x && V && L.current && Object.keys(V).forEach(e => {
                    L.current.on(e, V[e])
                })
            }, Y = () => {
                V && L.current && Object.keys(V).forEach(e => {
                    L.current.off(e, V[e])
                })
            };
            return (0, r.useEffect)(() => () => {
                L.current && L.current.off("_beforeBreakpoint", B)
            }), (0, r.useEffect)(() => {
                !_.current && L.current && (L.current.emitSlidesClasses(), _.current = !0)
            }), f(() => {
                if (t && (t.current = O.current), O.current) return L.current.destroyed && q(), function ({
                                                                                                              el: e,
                                                                                                              nextEl: t,
                                                                                                              prevEl: i,
                                                                                                              paginationEl: r,
                                                                                                              scrollbarEl: s,
                                                                                                              swiper: a
                                                                                                          }, n) {
                    l(n) && t && i && (a.params.navigation.nextEl = t, a.originalParams.navigation.nextEl = t, a.params.navigation.prevEl = i, a.originalParams.navigation.prevEl = i), o(n) && r && (a.params.pagination.el = r, a.originalParams.pagination.el = r), d(n) && s && (a.params.scrollbar.el = s, a.originalParams.scrollbar.el = s), a.init(e)
                }({
                    el: O.current,
                    nextEl: $.current,
                    prevEl: I.current,
                    paginationEl: j.current,
                    scrollbarEl: N.current,
                    swiper: L.current
                }, D), w && w(L.current), () => {
                    L.current && !L.current.destroyed && L.current.destroy(!0, !1)
                }
            }, []), f(() => {
                W();
                let e = function (e, t, i, r, s) {
                    let n = [];
                    if (!t) return n;
                    let l = e => {
                        0 > n.indexOf(e) && n.push(e)
                    };
                    if (i && r) {
                        let e = r.map(s), t = i.map(s);
                        e.join("") !== t.join("") && l("children"), r.length !== i.length && l("children")
                    }
                    let o = c.filter(e => "_" === e[0]).map(e => e.replace(/_/, ""));
                    return o.forEach(i => {
                        if (i in e && i in t) {
                            if (a(e[i]) && a(t[i])) {
                                let r = Object.keys(e[i]), s = Object.keys(t[i]);
                                r.length !== s.length ? l(i) : (r.forEach(r => {
                                    e[i][r] !== t[i][r] && l(i)
                                }), s.forEach(r => {
                                    e[i][r] !== t[i][r] && l(i)
                                }))
                            } else e[i] !== t[i] && l(i)
                        }
                    }), n
                }(F, A.current, R, z.current, e => e.key);
                return A.current = F, z.current = R, e.length && L.current && !L.current.destroyed && function ({
                                                                                                                    swiper: e,
                                                                                                                    slides: t,
                                                                                                                    passedParams: i,
                                                                                                                    changedParams: r,
                                                                                                                    nextEl: s,
                                                                                                                    prevEl: l,
                                                                                                                    scrollbarEl: o,
                                                                                                                    paginationEl: d
                                                                                                                }) {
                    let u, c, p, h, f, m, g, v;
                    let b = r.filter(e => "children" !== e && "direction" !== e && "wrapperClass" !== e), {
                        params: y,
                        pagination: w,
                        navigation: S,
                        scrollbar: x,
                        virtual: E,
                        thumbs: T
                    } = e;
                    r.includes("thumbs") && i.thumbs && i.thumbs.swiper && y.thumbs && !y.thumbs.swiper && (u = !0), r.includes("controller") && i.controller && i.controller.control && y.controller && !y.controller.control && (c = !0), r.includes("pagination") && i.pagination && (i.pagination.el || d) && (y.pagination || !1 === y.pagination) && w && !w.el && (p = !0), r.includes("scrollbar") && i.scrollbar && (i.scrollbar.el || o) && (y.scrollbar || !1 === y.scrollbar) && x && !x.el && (h = !0), r.includes("navigation") && i.navigation && (i.navigation.prevEl || l) && (i.navigation.nextEl || s) && (y.navigation || !1 === y.navigation) && S && !S.prevEl && !S.nextEl && (f = !0);
                    let C = t => {
                        e[t] && (e[t].destroy(), "navigation" === t ? (e.isElement && (e[t].prevEl.remove(), e[t].nextEl.remove()), y[t].prevEl = void 0, y[t].nextEl = void 0, e[t].prevEl = void 0, e[t].nextEl = void 0) : (e.isElement && e[t].el.remove(), y[t].el = void 0, e[t].el = void 0))
                    };
                    if (r.includes("loop") && e.isElement && (y.loop && !i.loop ? m = !0 : !y.loop && i.loop ? g = !0 : v = !0), b.forEach(e => {
                        if (a(y[e]) && a(i[e])) n(y[e], i[e]), ("navigation" === e || "pagination" === e || "scrollbar" === e) && "enabled" in i[e] && !i[e].enabled && C(e); else {
                            let t = i[e];
                            (!0 === t || !1 === t) && ("navigation" === e || "pagination" === e || "scrollbar" === e) ? !1 === t && C(e) : y[e] = i[e]
                        }
                    }), b.includes("controller") && !c && e.controller && e.controller.control && y.controller && y.controller.control && (e.controller.control = y.controller.control), r.includes("children") && t && E && y.virtual.enabled && (E.slides = t, E.update(!0)), r.includes("children") && t && y.loop && (v = !0), u) {
                        let e = T.init();
                        e && T.update(!0)
                    }
                    c && (e.controller.control = y.controller.control), p && (e.isElement && (!d || "string" == typeof d) && ((d = document.createElement("div")).classList.add("swiper-pagination"), e.el.shadowEl.appendChild(d)), d && (y.pagination.el = d), w.init(), w.render(), w.update()), h && (e.isElement && (!o || "string" == typeof o) && ((o = document.createElement("div")).classList.add("swiper-scrollbar"), e.el.shadowEl.appendChild(o)), o && (y.scrollbar.el = o), x.init(), x.updateSize(), x.setTranslate()), f && (e.isElement && (s && "string" != typeof s || ((s = document.createElement("div")).classList.add("swiper-button-next"), e.el.shadowEl.appendChild(s)), l && "string" != typeof l || ((l = document.createElement("div")).classList.add("swiper-button-prev"), e.el.shadowEl.appendChild(l))), s && (y.navigation.nextEl = s), l && (y.navigation.prevEl = l), S.init(), S.update()), r.includes("allowSlideNext") && (e.allowSlideNext = i.allowSlideNext), r.includes("allowSlidePrev") && (e.allowSlidePrev = i.allowSlidePrev), r.includes("direction") && e.changeDirection(i.direction, !1), (m || v) && e.loopDestroy(), (g || v) && e.loopCreate(), e.update()
                }({
                    swiper: L.current,
                    slides: R,
                    passedParams: F,
                    changedParams: e,
                    nextEl: $.current,
                    prevEl: I.current,
                    scrollbarEl: N.current,
                    paginationEl: j.current
                }), () => {
                    Y()
                }
            }), f(() => {
                h(L.current)
            }, [C]), r.createElement(m, v({
                ref: O,
                className: u(`${E}${i ? ` ${i}` : ""}`)
            }, G), r.createElement(g.Provider, {value: L.current}, H["container-start"], r.createElement(b, {
                className: function (e = "") {
                    return e ? e.includes("swiper-wrapper") ? e : `swiper-wrapper ${e}` : "swiper-wrapper"
                }(D.wrapperClass)
            }, H["wrapper-start"], D.virtual ? function (e, t, i) {
                if (!i) return null;
                let s = e => {
                        let i = e;
                        return e < 0 ? i = t.length + e : i >= t.length && (i -= t.length), i
                    },
                    a = e.isHorizontal() ? {[e.rtlTranslate ? "right" : "left"]: `${i.offset}px`} : {top: `${i.offset}px`}, {
                        from: n,
                        to: l
                    } = i, o = e.params.loop ? -t.length : 0, d = e.params.loop ? 2 * t.length : t.length, u = [];
                for (let e = o; e < d; e += 1) e >= n && e <= l && u.push(t[s(e)]);
                return u.map((t, i) => r.cloneElement(t, {swiper: e, style: a, key: `slide-${i}`}))
            }(L.current, R, C) : R.map((e, t) => r.cloneElement(e, {
                swiper: L.current,
                swiperSlideIndex: t
            })), H["wrapper-end"]), l(D) && r.createElement(r.Fragment, null, r.createElement("div", {
                ref: I,
                className: "swiper-button-prev"
            }), r.createElement("div", {
                ref: $,
                className: "swiper-button-next"
            })), d(D) && r.createElement("div", {
                ref: N,
                className: "swiper-scrollbar"
            }), o(D) && r.createElement("div", {ref: j, className: "swiper-pagination"}), H["container-end"]))
        });

        function y() {
            return (y = Object.assign ? Object.assign.bind() : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = arguments[t];
                    for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r])
                }
                return e
            }).apply(this, arguments)
        }

        b.displayName = "Swiper";
        let w = (0, r.forwardRef)(function (e, t) {
            let {
                    tag: i = "div",
                    children: s,
                    className: a = "",
                    swiper: n,
                    zoom: l,
                    lazy: o,
                    virtualIndex: d,
                    swiperSlideIndex: c,
                    ...p
                } = void 0 === e ? {} : e,
                h = (0, r.useRef)(null), [g, v] = (0, r.useState)("swiper-slide"), [b, w] = (0, r.useState)(!1);

            function S(e, t, i) {
                t === h.current && v(i)
            }

            f(() => {
                if (void 0 !== c && (h.current.swiperSlideIndex = c), t && (t.current = h.current), h.current && n) {
                    if (n.destroyed) {
                        "swiper-slide" !== g && v("swiper-slide");
                        return
                    }
                    return n.on("_slideClass", S), () => {
                        n && n.off("_slideClass", S)
                    }
                }
            }), f(() => {
                n && h.current && !n.destroyed && v(n.getSlideClasses(h.current))
            }, [n]);
            let x = {
                isActive: g.indexOf("swiper-slide-active") >= 0,
                isVisible: g.indexOf("swiper-slide-visible") >= 0,
                isPrev: g.indexOf("swiper-slide-prev") >= 0,
                isNext: g.indexOf("swiper-slide-next") >= 0
            }, E = () => "function" == typeof s ? s(x) : s;
            return r.createElement(i, y({
                ref: h,
                className: u(`${g}${a ? ` ${a}` : ""}`),
                "data-swiper-slide-index": d,
                onLoad: () => {
                    w(!0)
                }
            }, p), l && r.createElement(m.Provider, {value: x}, r.createElement("div", {
                className: "swiper-zoom-container",
                "data-swiper-zoom": "number" == typeof l ? l : void 0
            }, E(), o && !b && r.createElement("div", {className: "swiper-lazy-preloader"}))), !l && r.createElement(m.Provider, {value: x}, E(), o && !b && r.createElement("div", {className: "swiper-lazy-preloader"})))
        });
        w.displayName = "SwiperSlide"
    }, 67: function (e, t, i) {
        "use strict";
        let r, s, a;

        function n(e) {
            return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
        }

        function l(e = {}, t = {}) {
            Object.keys(t).forEach(i => {
                void 0 === e[i] ? e[i] = t[i] : n(t[i]) && n(e[i]) && Object.keys(t[i]).length > 0 && l(e[i], t[i])
            })
        }

        i.d(t, {
            lI: function () {
                return U
            }, tl: function () {
                return Y
            }, ZP: function () {
                return q
            }
        });
        let o = {
            body: {},
            addEventListener() {
            },
            removeEventListener() {
            },
            activeElement: {
                blur() {
                }, nodeName: ""
            },
            querySelector: () => null,
            querySelectorAll: () => [],
            getElementById: () => null,
            createEvent: () => ({
                initEvent() {
                }
            }),
            createElement: () => ({
                children: [], childNodes: [], style: {}, setAttribute() {
                }, getElementsByTagName: () => []
            }),
            createElementNS: () => ({}),
            importNode: () => null,
            location: {hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: ""}
        };

        function d() {
            let e = "undefined" != typeof document ? document : {};
            return l(e, o), e
        }

        let u = {
            document: o,
            navigator: {userAgent: ""},
            location: {hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: ""},
            history: {
                replaceState() {
                }, pushState() {
                }, go() {
                }, back() {
                }
            },
            CustomEvent: function () {
                return this
            },
            addEventListener() {
            },
            removeEventListener() {
            },
            getComputedStyle: () => ({getPropertyValue: () => ""}),
            Image() {
            },
            Date() {
            },
            screen: {},
            setTimeout() {
            },
            clearTimeout() {
            },
            matchMedia: () => ({}),
            requestAnimationFrame: e => "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
            cancelAnimationFrame(e) {
                "undefined" != typeof setTimeout && clearTimeout(e)
            }
        };

        function c() {
            let e = "undefined" != typeof window ? window : {};
            return l(e, u), e
        }

        function p(e, t = 0) {
            return setTimeout(e, t)
        }

        function h() {
            return Date.now()
        }

        function f(e) {
            return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
        }

        function m(...e) {
            let t = Object(e[0]), i = ["__proto__", "constructor", "prototype"];
            for (let r = 1; r < e.length; r += 1) {
                let s = e[r];
                if (null != s && ("undefined" != typeof window && void 0 !== window.HTMLElement ? !(s instanceof HTMLElement) : !s || 1 !== s.nodeType && 11 !== s.nodeType)) {
                    let e = Object.keys(Object(s)).filter(e => 0 > i.indexOf(e));
                    for (let i = 0, r = e.length; i < r; i += 1) {
                        let r = e[i], a = Object.getOwnPropertyDescriptor(s, r);
                        void 0 !== a && a.enumerable && (f(t[r]) && f(s[r]) ? s[r].__swiper__ ? t[r] = s[r] : m(t[r], s[r]) : !f(t[r]) && f(s[r]) ? (t[r] = {}, s[r].__swiper__ ? t[r] = s[r] : m(t[r], s[r])) : t[r] = s[r])
                    }
                }
            }
            return t
        }

        function g(e, t, i) {
            e.style.setProperty(t, i)
        }

        function v({swiper: e, targetPosition: t, side: i}) {
            let r;
            let s = c(), a = -e.translate, n = null, l = e.params.speed;
            e.wrapperEl.style.scrollSnapType = "none", s.cancelAnimationFrame(e.cssModeFrameID);
            let o = t > a ? "next" : "prev", d = (e, t) => "next" === o && e >= t || "prev" === o && e <= t, u = () => {
                r = new Date().getTime(), null === n && (n = r);
                let o = Math.max(Math.min((r - n) / l, 1), 0), c = a + (.5 - Math.cos(o * Math.PI) / 2) * (t - a);
                if (d(c, t) && (c = t), e.wrapperEl.scrollTo({[i]: c}), d(c, t)) {
                    e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
                        e.wrapperEl.style.overflow = "", e.wrapperEl.scrollTo({[i]: c})
                    }), s.cancelAnimationFrame(e.cssModeFrameID);
                    return
                }
                e.cssModeFrameID = s.requestAnimationFrame(u)
            };
            u()
        }

        function b(e) {
            return e.querySelector(".swiper-slide-transform") || e.shadowEl && e.shadowEl.querySelector(".swiper-slide-transform") || e
        }

        function y(e, t = "") {
            return [...e.children].filter(e => e.matches(t))
        }

        function w(e, t = []) {
            let i = document.createElement(e);
            return i.classList.add(...Array.isArray(t) ? t : [t]), i
        }

        function S(e, t) {
            let i = c();
            return i.getComputedStyle(e, null).getPropertyValue(t)
        }

        function x(e) {
            let t, i = e;
            if (i) {
                for (t = 0; null !== (i = i.previousSibling);) 1 === i.nodeType && (t += 1);
                return t
            }
        }

        function E(e, t) {
            let i = [], r = e.parentElement;
            for (; r;) t ? r.matches(t) && i.push(r) : i.push(r), r = r.parentElement;
            return i
        }

        function T(e, t, i) {
            let r = c();
            return i ? e["width" === t ? "offsetWidth" : "offsetHeight"] + parseFloat(r.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-right" : "margin-top")) + parseFloat(r.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-left" : "margin-bottom")) : e.offsetWidth
        }

        function C() {
            return r || (r = function () {
                let e = c(), t = d();
                return {
                    smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior" in t.documentElement.style,
                    touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch)
                }
            }()), r
        }

        let k = (e, t) => {
            if (!e || e.destroyed || !e.params) return;
            let i = t.closest(e.isElement ? "swiper-slide" : `.${e.params.slideClass}`);
            if (i) {
                let t = i.querySelector(`.${e.params.lazyPreloaderClass}`);
                t && t.remove()
            }
        }, M = (e, t) => {
            if (!e.slides[t]) return;
            let i = e.slides[t].querySelector('[loading="lazy"]');
            i && i.removeAttribute("loading")
        }, P = e => {
            if (!e || e.destroyed || !e.params) return;
            let t = e.params.lazyPreloadPrevNext, i = e.slides.length;
            if (!i || !t || t < 0) return;
            t = Math.min(t, i);
            let r = "auto" === e.params.slidesPerView ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView),
                s = e.activeIndex;
            if (e.params.grid && e.params.grid.rows > 1) {
                let i = [s - t];
                i.push(...Array.from({length: t}).map((e, t) => s + r + t)), e.slides.forEach((t, r) => {
                    i.includes(t.column) && M(e, r)
                });
                return
            }
            let a = s + r - 1;
            if (e.params.rewind || e.params.loop) for (let r = s - t; r <= a + t; r += 1) {
                let t = (r % i + i) % i;
                (t < s || t > a) && M(e, t)
            } else for (let r = Math.max(s - t, 0); r <= Math.min(a + t, i - 1); r += 1) r !== s && (r > a || r < s) && M(e, r)
        };

        function _({swiper: e, runCallbacks: t, direction: i, step: r}) {
            let {activeIndex: s, previousIndex: a} = e, n = i;
            if (n || (n = s > a ? "next" : s < a ? "prev" : "reset"), e.emit(`transition${r}`), t && s !== a) {
                if ("reset" === n) {
                    e.emit(`slideResetTransition${r}`);
                    return
                }
                e.emit(`slideChangeTransition${r}`), "next" === n ? e.emit(`slideNextTransition${r}`) : e.emit(`slidePrevTransition${r}`)
            }
        }

        function O(e) {
            let t = d(), i = c(), r = this.touchEventsData;
            r.evCache.push(e);
            let {params: s, touches: a, enabled: n} = this;
            if (!n || !s.simulateTouch && "mouse" === e.pointerType || this.animating && s.preventInteractionOnTransition) return;
            !this.animating && s.cssMode && s.loop && this.loopFix();
            let l = e;
            l.originalEvent && (l = l.originalEvent);
            let o = l.target;
            if ("wrapper" === s.touchEventsTarget && !this.wrapperEl.contains(o) || "which" in l && 3 === l.which || "button" in l && l.button > 0 || r.isTouched && r.isMoved) return;
            let u = !!s.noSwipingClass && "" !== s.noSwipingClass, p = e.composedPath ? e.composedPath() : e.path;
            u && l.target && l.target.shadowRoot && p && (o = p[0]);
            let f = s.noSwipingSelector ? s.noSwipingSelector : `.${s.noSwipingClass}`,
                m = !!(l.target && l.target.shadowRoot);
            if (s.noSwiping && (m ? function (e, t = this) {
                return function t(i) {
                    if (!i || i === d() || i === c()) return null;
                    i.assignedSlot && (i = i.assignedSlot);
                    let r = i.closest(e);
                    return r || i.getRootNode ? r || t(i.getRootNode().host) : null
                }(t)
            }(f, o) : o.closest(f))) {
                this.allowClick = !0;
                return
            }
            if (s.swipeHandler && !o.closest(s.swipeHandler)) return;
            a.currentX = l.pageX, a.currentY = l.pageY;
            let g = a.currentX, v = a.currentY, b = s.edgeSwipeDetection || s.iOSEdgeSwipeDetection,
                y = s.edgeSwipeThreshold || s.iOSEdgeSwipeThreshold;
            if (b && (g <= y || g >= i.innerWidth - y)) {
                if ("prevent" !== b) return;
                e.preventDefault()
            }
            Object.assign(r, {
                isTouched: !0,
                isMoved: !1,
                allowTouchCallbacks: !0,
                isScrolling: void 0,
                startMoving: void 0
            }), a.startX = g, a.startY = v, r.touchStartTime = h(), this.allowClick = !0, this.updateSize(), this.swipeDirection = void 0, s.threshold > 0 && (r.allowThresholdMove = !1);
            let w = !0;
            o.matches(r.focusableElements) && (w = !1, "SELECT" === o.nodeName && (r.isTouched = !1)), t.activeElement && t.activeElement.matches(r.focusableElements) && t.activeElement !== o && t.activeElement.blur();
            let S = w && this.allowTouchMove && s.touchStartPreventDefault;
            (s.touchStartForcePreventDefault || S) && !o.isContentEditable && l.preventDefault(), s.freeMode && s.freeMode.enabled && this.freeMode && this.animating && !s.cssMode && this.freeMode.onTouchStart(), this.emit("touchStart", l)
        }

        function L(e) {
            let t;
            let i = d(), r = this.touchEventsData, {params: s, touches: a, rtlTranslate: n, enabled: l} = this;
            if (!l || !s.simulateTouch && "mouse" === e.pointerType) return;
            let o = e;
            if (o.originalEvent && (o = o.originalEvent), !r.isTouched) {
                r.startMoving && r.isScrolling && this.emit("touchMoveOpposite", o);
                return
            }
            let u = r.evCache.findIndex(e => e.pointerId === o.pointerId);
            u >= 0 && (r.evCache[u] = o);
            let c = r.evCache.length > 1 ? r.evCache[0] : o, p = c.pageX, f = c.pageY;
            if (o.preventedByNestedSwiper) {
                a.startX = p, a.startY = f;
                return
            }
            if (!this.allowTouchMove) {
                o.target.matches(r.focusableElements) || (this.allowClick = !1), r.isTouched && (Object.assign(a, {
                    startX: p,
                    startY: f,
                    prevX: this.touches.currentX,
                    prevY: this.touches.currentY,
                    currentX: p,
                    currentY: f
                }), r.touchStartTime = h());
                return
            }
            if (s.touchReleaseOnEdges && !s.loop) {
                if (this.isVertical()) {
                    if (f < a.startY && this.translate <= this.maxTranslate() || f > a.startY && this.translate >= this.minTranslate()) {
                        r.isTouched = !1, r.isMoved = !1;
                        return
                    }
                } else if (p < a.startX && this.translate <= this.maxTranslate() || p > a.startX && this.translate >= this.minTranslate()) return
            }
            if (i.activeElement && o.target === i.activeElement && o.target.matches(r.focusableElements)) {
                r.isMoved = !0, this.allowClick = !1;
                return
            }
            if (r.allowTouchCallbacks && this.emit("touchMove", o), o.targetTouches && o.targetTouches.length > 1) return;
            a.currentX = p, a.currentY = f;
            let m = a.currentX - a.startX, g = a.currentY - a.startY;
            if (this.params.threshold && Math.sqrt(m ** 2 + g ** 2) < this.params.threshold) return;
            if (void 0 === r.isScrolling) {
                let e;
                this.isHorizontal() && a.currentY === a.startY || this.isVertical() && a.currentX === a.startX ? r.isScrolling = !1 : m * m + g * g >= 25 && (e = 180 * Math.atan2(Math.abs(g), Math.abs(m)) / Math.PI, r.isScrolling = this.isHorizontal() ? e > s.touchAngle : 90 - e > s.touchAngle)
            }
            if (r.isScrolling && this.emit("touchMoveOpposite", o), void 0 === r.startMoving && (a.currentX !== a.startX || a.currentY !== a.startY) && (r.startMoving = !0), r.isScrolling || this.zoom && this.params.zoom && this.params.zoom.enabled && r.evCache.length > 1) {
                r.isTouched = !1;
                return
            }
            if (!r.startMoving) return;
            this.allowClick = !1, !s.cssMode && o.cancelable && o.preventDefault(), s.touchMoveStopPropagation && !s.nested && o.stopPropagation();
            let v = this.isHorizontal() ? m : g,
                b = this.isHorizontal() ? a.currentX - a.previousX : a.currentY - a.previousY;
            s.oneWayMovement && (v = Math.abs(v) * (n ? 1 : -1), b = Math.abs(b) * (n ? 1 : -1)), a.diff = v, v *= s.touchRatio, n && (v = -v, b = -b);
            let y = this.touchesDirection;
            this.swipeDirection = v > 0 ? "prev" : "next", this.touchesDirection = b > 0 ? "prev" : "next";
            let w = this.params.loop && !s.cssMode;
            if (!r.isMoved) {
                if (w && this.loopFix({direction: this.swipeDirection}), r.startTranslate = this.getTranslate(), this.setTransition(0), this.animating) {
                    let e = new window.CustomEvent("transitionend", {bubbles: !0, cancelable: !0});
                    this.wrapperEl.dispatchEvent(e)
                }
                r.allowMomentumBounce = !1, s.grabCursor && (!0 === this.allowSlideNext || !0 === this.allowSlidePrev) && this.setGrabCursor(!0), this.emit("sliderFirstMove", o)
            }
            r.isMoved && y !== this.touchesDirection && w && Math.abs(v) >= 1 && (this.loopFix({
                direction: this.swipeDirection,
                setTranslate: !0
            }), t = !0), this.emit("sliderMove", o), r.isMoved = !0, r.currentTranslate = v + r.startTranslate;
            let S = !0, x = s.resistanceRatio;
            if (s.touchReleaseOnEdges && (x = 0), v > 0 ? (w && !t && r.currentTranslate > (s.centeredSlides ? this.minTranslate() - this.size / 2 : this.minTranslate()) && this.loopFix({
                direction: "prev",
                setTranslate: !0,
                activeSlideIndex: 0
            }), r.currentTranslate > this.minTranslate() && (S = !1, s.resistance && (r.currentTranslate = this.minTranslate() - 1 + (-this.minTranslate() + r.startTranslate + v) ** x))) : v < 0 && (w && !t && r.currentTranslate < (s.centeredSlides ? this.maxTranslate() + this.size / 2 : this.maxTranslate()) && this.loopFix({
                direction: "next",
                setTranslate: !0,
                activeSlideIndex: this.slides.length - ("auto" === s.slidesPerView ? this.slidesPerViewDynamic() : Math.ceil(parseFloat(s.slidesPerView, 10)))
            }), r.currentTranslate < this.maxTranslate() && (S = !1, s.resistance && (r.currentTranslate = this.maxTranslate() + 1 - (this.maxTranslate() - r.startTranslate - v) ** x))), S && (o.preventedByNestedSwiper = !0), !this.allowSlideNext && "next" === this.swipeDirection && r.currentTranslate < r.startTranslate && (r.currentTranslate = r.startTranslate), !this.allowSlidePrev && "prev" === this.swipeDirection && r.currentTranslate > r.startTranslate && (r.currentTranslate = r.startTranslate), this.allowSlidePrev || this.allowSlideNext || (r.currentTranslate = r.startTranslate), s.threshold > 0) {
                if (Math.abs(v) > s.threshold || r.allowThresholdMove) {
                    if (!r.allowThresholdMove) {
                        r.allowThresholdMove = !0, a.startX = a.currentX, a.startY = a.currentY, r.currentTranslate = r.startTranslate, a.diff = this.isHorizontal() ? a.currentX - a.startX : a.currentY - a.startY;
                        return
                    }
                } else {
                    r.currentTranslate = r.startTranslate;
                    return
                }
            }
            s.followFinger && !s.cssMode && ((s.freeMode && s.freeMode.enabled && this.freeMode || s.watchSlidesProgress) && (this.updateActiveIndex(), this.updateSlidesClasses()), s.freeMode && s.freeMode.enabled && this.freeMode && this.freeMode.onTouchMove(), this.updateProgress(r.currentTranslate), this.setTranslate(r.currentTranslate))
        }

        function A(e) {
            let t;
            let i = this, r = i.touchEventsData, s = r.evCache.findIndex(t => t.pointerId === e.pointerId);
            if (s >= 0 && r.evCache.splice(s, 1), ["pointercancel", "pointerout", "pointerleave"].includes(e.type)) {
                let t = "pointercancel" === e.type && (i.browser.isSafari || i.browser.isWebView);
                if (!t) return
            }
            let {params: a, touches: n, rtlTranslate: l, slidesGrid: o, enabled: d} = i;
            if (!d || !a.simulateTouch && "mouse" === e.pointerType) return;
            let u = e;
            if (u.originalEvent && (u = u.originalEvent), r.allowTouchCallbacks && i.emit("touchEnd", u), r.allowTouchCallbacks = !1, !r.isTouched) {
                r.isMoved && a.grabCursor && i.setGrabCursor(!1), r.isMoved = !1, r.startMoving = !1;
                return
            }
            a.grabCursor && r.isMoved && r.isTouched && (!0 === i.allowSlideNext || !0 === i.allowSlidePrev) && i.setGrabCursor(!1);
            let c = h(), f = c - r.touchStartTime;
            if (i.allowClick) {
                let e = u.path || u.composedPath && u.composedPath();
                i.updateClickedSlide(e && e[0] || u.target), i.emit("tap click", u), f < 300 && c - r.lastClickTime < 300 && i.emit("doubleTap doubleClick", u)
            }
            if (r.lastClickTime = h(), p(() => {
                i.destroyed || (i.allowClick = !0)
            }), !r.isTouched || !r.isMoved || !i.swipeDirection || 0 === n.diff || r.currentTranslate === r.startTranslate) {
                r.isTouched = !1, r.isMoved = !1, r.startMoving = !1;
                return
            }
            if (r.isTouched = !1, r.isMoved = !1, r.startMoving = !1, t = a.followFinger ? l ? i.translate : -i.translate : -r.currentTranslate, a.cssMode) return;
            if (a.freeMode && a.freeMode.enabled) {
                i.freeMode.onTouchEnd({currentPos: t});
                return
            }
            let m = 0, g = i.slidesSizesGrid[0];
            for (let e = 0; e < o.length; e += e < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup) {
                let i = e < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
                void 0 !== o[e + i] ? t >= o[e] && t < o[e + i] && (m = e, g = o[e + i] - o[e]) : t >= o[e] && (m = e, g = o[o.length - 1] - o[o.length - 2])
            }
            let v = null, b = null;
            a.rewind && (i.isBeginning ? b = a.virtual && a.virtual.enabled && i.virtual ? i.virtual.slides.length - 1 : i.slides.length - 1 : i.isEnd && (v = 0));
            let y = (t - o[m]) / g, w = m < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
            if (f > a.longSwipesMs) {
                if (!a.longSwipes) {
                    i.slideTo(i.activeIndex);
                    return
                }
                "next" === i.swipeDirection && (y >= a.longSwipesRatio ? i.slideTo(a.rewind && i.isEnd ? v : m + w) : i.slideTo(m)), "prev" === i.swipeDirection && (y > 1 - a.longSwipesRatio ? i.slideTo(m + w) : null !== b && y < 0 && Math.abs(y) > a.longSwipesRatio ? i.slideTo(b) : i.slideTo(m))
            } else {
                if (!a.shortSwipes) {
                    i.slideTo(i.activeIndex);
                    return
                }
                let e = i.navigation && (u.target === i.navigation.nextEl || u.target === i.navigation.prevEl);
                e ? u.target === i.navigation.nextEl ? i.slideTo(m + w) : i.slideTo(m) : ("next" === i.swipeDirection && i.slideTo(null !== v ? v : m + w), "prev" === i.swipeDirection && i.slideTo(null !== b ? b : m))
            }
        }

        function z() {
            let e = this, {params: t, el: i} = e;
            if (i && 0 === i.offsetWidth) return;
            t.breakpoints && e.setBreakpoint();
            let {allowSlideNext: r, allowSlidePrev: s, snapGrid: a} = e, n = e.virtual && e.params.virtual.enabled;
            e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
            let l = n && t.loop;
            "auto" !== t.slidesPerView && !(t.slidesPerView > 1) || !e.isEnd || e.isBeginning || e.params.centeredSlides || l ? e.params.loop && !n ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0) : e.slideTo(e.slides.length - 1, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout), e.autoplay.resizeTimeout = setTimeout(() => {
                e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume()
            }, 500)), e.allowSlidePrev = s, e.allowSlideNext = r, e.params.watchOverflow && a !== e.snapGrid && e.checkOverflow()
        }

        function $(e) {
            this.enabled && !this.allowClick && (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
        }

        function I() {
            let {wrapperEl: e, rtlTranslate: t, enabled: i} = this;
            if (!i) return;
            this.previousTranslate = this.translate, this.isHorizontal() ? this.translate = -e.scrollLeft : this.translate = -e.scrollTop, 0 === this.translate && (this.translate = 0), this.updateActiveIndex(), this.updateSlidesClasses();
            let r = this.maxTranslate() - this.minTranslate();
            (0 === r ? 0 : (this.translate - this.minTranslate()) / r) !== this.progress && this.updateProgress(t ? -this.translate : this.translate), this.emit("setTranslate", this.translate, !1)
        }

        function j(e) {
            k(this, e.target), !this.params.cssMode && ("auto" === this.params.slidesPerView || this.params.autoHeight) && this.update()
        }

        let N = !1;

        function D() {
        }

        let F = (e, t) => {
            let i = d(), {params: r, el: s, wrapperEl: a, device: n} = e, l = !!r.nested,
                o = "on" === t ? "addEventListener" : "removeEventListener";
            s[o]("pointerdown", e.onTouchStart, {passive: !1}), i[o]("pointermove", e.onTouchMove, {
                passive: !1,
                capture: l
            }), i[o]("pointerup", e.onTouchEnd, {passive: !0}), i[o]("pointercancel", e.onTouchEnd, {passive: !0}), i[o]("pointerout", e.onTouchEnd, {passive: !0}), i[o]("pointerleave", e.onTouchEnd, {passive: !0}), (r.preventClicks || r.preventClicksPropagation) && s[o]("click", e.onClick, !0), r.cssMode && a[o]("scroll", e.onScroll), r.updateOnWindowResize ? e[t](n.ios || n.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", z, !0) : e[t]("observerUpdate", z, !0), s[o]("load", e.onLoad, {capture: !0})
        }, G = (e, t) => e.grid && t.grid && t.grid.rows > 1;
        var V = {
            init: !0,
            direction: "horizontal",
            oneWayMovement: !1,
            touchEventsTarget: "wrapper",
            initialSlide: 0,
            speed: 300,
            cssMode: !1,
            updateOnWindowResize: !0,
            resizeObserver: !0,
            nested: !1,
            createElements: !1,
            enabled: !0,
            focusableElements: "input, select, option, textarea, button, video, label",
            width: null,
            height: null,
            preventInteractionOnTransition: !1,
            userAgent: null,
            url: null,
            edgeSwipeDetection: !1,
            edgeSwipeThreshold: 20,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            breakpoints: void 0,
            breakpointsBase: "window",
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            slidesPerGroupAuto: !1,
            centeredSlides: !1,
            centeredSlidesBounds: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: !0,
            centerInsufficientSlides: !1,
            watchOverflow: !0,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: !0,
            allowTouchMove: !0,
            threshold: 5,
            touchMoveStopPropagation: !1,
            touchStartPreventDefault: !0,
            touchStartForcePreventDefault: !1,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            resistance: !0,
            resistanceRatio: .85,
            watchSlidesProgress: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            loop: !1,
            loopedSlides: null,
            loopPreventsSliding: !0,
            rewind: !1,
            allowSlidePrev: !0,
            allowSlideNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: !0,
            maxBackfaceHiddenSlides: 10,
            containerModifierClass: "swiper-",
            slideClass: "swiper-slide",
            slideActiveClass: "swiper-slide-active",
            slideVisibleClass: "swiper-slide-visible",
            slideNextClass: "swiper-slide-next",
            slidePrevClass: "swiper-slide-prev",
            wrapperClass: "swiper-wrapper",
            lazyPreloaderClass: "swiper-lazy-preloader",
            lazyPreloadPrevNext: 0,
            runCallbacksOnInit: !0,
            _emitClasses: !1
        };
        let R = {
            eventsEmitter: {
                on(e, t, i) {
                    let r = this;
                    if (!r.eventsListeners || r.destroyed || "function" != typeof t) return r;
                    let s = i ? "unshift" : "push";
                    return e.split(" ").forEach(e => {
                        r.eventsListeners[e] || (r.eventsListeners[e] = []), r.eventsListeners[e][s](t)
                    }), r
                }, once(e, t, i) {
                    let r = this;
                    if (!r.eventsListeners || r.destroyed || "function" != typeof t) return r;

                    function s(...i) {
                        r.off(e, s), s.__emitterProxy && delete s.__emitterProxy, t.apply(r, i)
                    }

                    return s.__emitterProxy = t, r.on(e, s, i)
                }, onAny(e, t) {
                    return !this.eventsListeners || this.destroyed || "function" != typeof e || 0 > this.eventsAnyListeners.indexOf(e) && this.eventsAnyListeners[t ? "unshift" : "push"](e), this
                }, offAny(e) {
                    if (!this.eventsListeners || this.destroyed || !this.eventsAnyListeners) return this;
                    let t = this.eventsAnyListeners.indexOf(e);
                    return t >= 0 && this.eventsAnyListeners.splice(t, 1), this
                }, off(e, t) {
                    let i = this;
                    return i.eventsListeners && !i.destroyed && i.eventsListeners && e.split(" ").forEach(e => {
                        void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e] && i.eventsListeners[e].forEach((r, s) => {
                            (r === t || r.__emitterProxy && r.__emitterProxy === t) && i.eventsListeners[e].splice(s, 1)
                        })
                    }), i
                }, emit(...e) {
                    let t, i, r;
                    let s = this;
                    if (!s.eventsListeners || s.destroyed || !s.eventsListeners) return s;
                    "string" == typeof e[0] || Array.isArray(e[0]) ? (t = e[0], i = e.slice(1, e.length), r = s) : (t = e[0].events, i = e[0].data, r = e[0].context || s), i.unshift(r);
                    let a = Array.isArray(t) ? t : t.split(" ");
                    return a.forEach(e => {
                        s.eventsAnyListeners && s.eventsAnyListeners.length && s.eventsAnyListeners.forEach(t => {
                            t.apply(r, [e, ...i])
                        }), s.eventsListeners && s.eventsListeners[e] && s.eventsListeners[e].forEach(e => {
                            e.apply(r, i)
                        })
                    }), s
                }
            }, update: {
                updateSize: function () {
                    let e, t;
                    let i = this.el;
                    e = void 0 !== this.params.width && null !== this.params.width ? this.params.width : i.clientWidth, t = void 0 !== this.params.height && null !== this.params.height ? this.params.height : i.clientHeight, 0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt(S(i, "padding-left") || 0, 10) - parseInt(S(i, "padding-right") || 0, 10), t = t - parseInt(S(i, "padding-top") || 0, 10) - parseInt(S(i, "padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(t) && (t = 0), Object.assign(this, {
                        width: e,
                        height: t,
                        size: this.isHorizontal() ? e : t
                    }))
                }, updateSlides: function () {
                    let e;
                    let t = this;

                    function i(e) {
                        return t.isHorizontal() ? e : ({
                            width: "height",
                            "margin-top": "margin-left",
                            "margin-bottom ": "margin-right",
                            "margin-left": "margin-top",
                            "margin-right": "margin-bottom",
                            "padding-left": "padding-top",
                            "padding-right": "padding-bottom",
                            marginRight: "marginBottom"
                        })[e]
                    }

                    function r(e, t) {
                        return parseFloat(e.getPropertyValue(i(t)) || 0)
                    }

                    let s = t.params, {wrapperEl: a, slidesEl: n, size: l, rtlTranslate: o, wrongRTL: d} = t,
                        u = t.virtual && s.virtual.enabled, c = u ? t.virtual.slides.length : t.slides.length,
                        p = y(n, `.${t.params.slideClass}, swiper-slide`), h = u ? t.virtual.slides.length : p.length,
                        f = [], m = [], v = [], b = s.slidesOffsetBefore;
                    "function" == typeof b && (b = s.slidesOffsetBefore.call(t));
                    let w = s.slidesOffsetAfter;
                    "function" == typeof w && (w = s.slidesOffsetAfter.call(t));
                    let x = t.snapGrid.length, E = t.slidesGrid.length, C = s.spaceBetween, k = -b, M = 0, P = 0;
                    if (void 0 === l) return;
                    "string" == typeof C && C.indexOf("%") >= 0 ? C = parseFloat(C.replace("%", "")) / 100 * l : "string" == typeof C && (C = parseFloat(C)), t.virtualSize = -C, p.forEach(e => {
                        o ? e.style.marginLeft = "" : e.style.marginRight = "", e.style.marginBottom = "", e.style.marginTop = ""
                    }), s.centeredSlides && s.cssMode && (g(a, "--swiper-centered-offset-before", ""), g(a, "--swiper-centered-offset-after", ""));
                    let _ = s.grid && s.grid.rows > 1 && t.grid;
                    _ && t.grid.initSlides(h);
                    let O = "auto" === s.slidesPerView && s.breakpoints && Object.keys(s.breakpoints).filter(e => void 0 !== s.breakpoints[e].slidesPerView).length > 0;
                    for (let a = 0; a < h; a += 1) {
                        let n;
                        if (e = 0, p[a] && (n = p[a]), _ && t.grid.updateSlide(a, n, h, i), !p[a] || "none" !== S(n, "display")) {
                            if ("auto" === s.slidesPerView) {
                                O && (p[a].style[i("width")] = "");
                                let l = getComputedStyle(n), o = n.style.transform, d = n.style.webkitTransform;
                                if (o && (n.style.transform = "none"), d && (n.style.webkitTransform = "none"), s.roundLengths) e = t.isHorizontal() ? T(n, "width", !0) : T(n, "height", !0); else {
                                    let t = r(l, "width"), i = r(l, "padding-left"), s = r(l, "padding-right"),
                                        a = r(l, "margin-left"), o = r(l, "margin-right"),
                                        d = l.getPropertyValue("box-sizing");
                                    if (d && "border-box" === d) e = t + a + o; else {
                                        let {clientWidth: r, offsetWidth: l} = n;
                                        e = t + i + s + a + o + (l - r)
                                    }
                                }
                                o && (n.style.transform = o), d && (n.style.webkitTransform = d), s.roundLengths && (e = Math.floor(e))
                            } else e = (l - (s.slidesPerView - 1) * C) / s.slidesPerView, s.roundLengths && (e = Math.floor(e)), p[a] && (p[a].style[i("width")] = `${e}px`);
                            p[a] && (p[a].swiperSlideSize = e), v.push(e), s.centeredSlides ? (k = k + e / 2 + M / 2 + C, 0 === M && 0 !== a && (k = k - l / 2 - C), 0 === a && (k = k - l / 2 - C), .001 > Math.abs(k) && (k = 0), s.roundLengths && (k = Math.floor(k)), P % s.slidesPerGroup == 0 && f.push(k), m.push(k)) : (s.roundLengths && (k = Math.floor(k)), (P - Math.min(t.params.slidesPerGroupSkip, P)) % t.params.slidesPerGroup == 0 && f.push(k), m.push(k), k = k + e + C), t.virtualSize += e + C, M = e, P += 1
                        }
                    }
                    if (t.virtualSize = Math.max(t.virtualSize, l) + w, o && d && ("slide" === s.effect || "coverflow" === s.effect) && (a.style.width = `${t.virtualSize + C}px`), s.setWrapperSize && (a.style[i("width")] = `${t.virtualSize + C}px`), _ && t.grid.updateWrapperSize(e, f, i), !s.centeredSlides) {
                        let e = [];
                        for (let i = 0; i < f.length; i += 1) {
                            let r = f[i];
                            s.roundLengths && (r = Math.floor(r)), f[i] <= t.virtualSize - l && e.push(r)
                        }
                        f = e, Math.floor(t.virtualSize - l) - Math.floor(f[f.length - 1]) > 1 && f.push(t.virtualSize - l)
                    }
                    if (u && s.loop) {
                        let e = v[0] + C;
                        if (s.slidesPerGroup > 1) {
                            let i = Math.ceil((t.virtual.slidesBefore + t.virtual.slidesAfter) / s.slidesPerGroup),
                                r = e * s.slidesPerGroup;
                            for (let e = 0; e < i; e += 1) f.push(f[f.length - 1] + r)
                        }
                        for (let i = 0; i < t.virtual.slidesBefore + t.virtual.slidesAfter; i += 1) 1 === s.slidesPerGroup && f.push(f[f.length - 1] + e), m.push(m[m.length - 1] + e), t.virtualSize += e
                    }
                    if (0 === f.length && (f = [0]), 0 !== C) {
                        let e = t.isHorizontal() && o ? "marginLeft" : i("marginRight");
                        p.filter((e, t) => !s.cssMode || !!s.loop || t !== p.length - 1).forEach(t => {
                            t.style[e] = `${C}px`
                        })
                    }
                    if (s.centeredSlides && s.centeredSlidesBounds) {
                        let e = 0;
                        v.forEach(t => {
                            e += t + (C || 0)
                        }), e -= C;
                        let t = e - l;
                        f = f.map(e => e <= 0 ? -b : e > t ? t + w : e)
                    }
                    if (s.centerInsufficientSlides) {
                        let e = 0;
                        if (v.forEach(t => {
                            e += t + (C || 0)
                        }), (e -= C) < l) {
                            let t = (l - e) / 2;
                            f.forEach((e, i) => {
                                f[i] = e - t
                            }), m.forEach((e, i) => {
                                m[i] = e + t
                            })
                        }
                    }
                    if (Object.assign(t, {
                        slides: p,
                        snapGrid: f,
                        slidesGrid: m,
                        slidesSizesGrid: v
                    }), s.centeredSlides && s.cssMode && !s.centeredSlidesBounds) {
                        g(a, "--swiper-centered-offset-before", `${-f[0]}px`), g(a, "--swiper-centered-offset-after", `${t.size / 2 - v[v.length - 1] / 2}px`);
                        let e = -t.snapGrid[0], i = -t.slidesGrid[0];
                        t.snapGrid = t.snapGrid.map(t => t + e), t.slidesGrid = t.slidesGrid.map(e => e + i)
                    }
                    if (h !== c && t.emit("slidesLengthChange"), f.length !== x && (t.params.watchOverflow && t.checkOverflow(), t.emit("snapGridLengthChange")), m.length !== E && t.emit("slidesGridLengthChange"), s.watchSlidesProgress && t.updateSlidesOffset(), !u && !s.cssMode && ("slide" === s.effect || "fade" === s.effect)) {
                        let e = `${s.containerModifierClass}backface-hidden`, i = t.el.classList.contains(e);
                        h <= s.maxBackfaceHiddenSlides ? i || t.el.classList.add(e) : i && t.el.classList.remove(e)
                    }
                }, updateAutoHeight: function (e) {
                    let t;
                    let i = this, r = [], s = i.virtual && i.params.virtual.enabled, a = 0;
                    "number" == typeof e ? i.setTransition(e) : !0 === e && i.setTransition(i.params.speed);
                    let n = e => s ? i.slides[i.getSlideIndexByData(e)] : i.slides[e];
                    if ("auto" !== i.params.slidesPerView && i.params.slidesPerView > 1) {
                        if (i.params.centeredSlides) (i.visibleSlides || []).forEach(e => {
                            r.push(e)
                        }); else for (t = 0; t < Math.ceil(i.params.slidesPerView); t += 1) {
                            let e = i.activeIndex + t;
                            if (e > i.slides.length && !s) break;
                            r.push(n(e))
                        }
                    } else r.push(n(i.activeIndex));
                    for (t = 0; t < r.length; t += 1) if (void 0 !== r[t]) {
                        let e = r[t].offsetHeight;
                        a = e > a ? e : a
                    }
                    (a || 0 === a) && (i.wrapperEl.style.height = `${a}px`)
                }, updateSlidesOffset: function () {
                    let e = this.slides,
                        t = this.isElement ? this.isHorizontal() ? this.wrapperEl.offsetLeft : this.wrapperEl.offsetTop : 0;
                    for (let i = 0; i < e.length; i += 1) e[i].swiperSlideOffset = (this.isHorizontal() ? e[i].offsetLeft : e[i].offsetTop) - t - this.cssOverflowAdjustment()
                }, updateSlidesProgress: function (e = this && this.translate || 0) {
                    let t = this.params, {slides: i, rtlTranslate: r, snapGrid: s} = this;
                    if (0 === i.length) return;
                    void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
                    let a = -e;
                    r && (a = e), i.forEach(e => {
                        e.classList.remove(t.slideVisibleClass)
                    }), this.visibleSlidesIndexes = [], this.visibleSlides = [];
                    let n = t.spaceBetween;
                    "string" == typeof n && n.indexOf("%") >= 0 ? n = parseFloat(n.replace("%", "")) / 100 * this.size : "string" == typeof n && (n = parseFloat(n));
                    for (let e = 0; e < i.length; e += 1) {
                        let l = i[e], o = l.swiperSlideOffset;
                        t.cssMode && t.centeredSlides && (o -= i[0].swiperSlideOffset);
                        let d = (a + (t.centeredSlides ? this.minTranslate() : 0) - o) / (l.swiperSlideSize + n),
                            u = (a - s[0] + (t.centeredSlides ? this.minTranslate() : 0) - o) / (l.swiperSlideSize + n),
                            c = -(a - o), p = c + this.slidesSizesGrid[e],
                            h = c >= 0 && c < this.size - 1 || p > 1 && p <= this.size || c <= 0 && p >= this.size;
                        h && (this.visibleSlides.push(l), this.visibleSlidesIndexes.push(e), i[e].classList.add(t.slideVisibleClass)), l.progress = r ? -d : d, l.originalProgress = r ? -u : u
                    }
                }, updateProgress: function (e) {
                    if (void 0 === e) {
                        let t = this.rtlTranslate ? -1 : 1;
                        e = this && this.translate && this.translate * t || 0
                    }
                    let t = this.params, i = this.maxTranslate() - this.minTranslate(), {
                        progress: r,
                        isBeginning: s,
                        isEnd: a,
                        progressLoop: n
                    } = this, l = s, o = a;
                    if (0 === i) r = 0, s = !0, a = !0; else {
                        r = (e - this.minTranslate()) / i;
                        let t = 1 > Math.abs(e - this.minTranslate()), n = 1 > Math.abs(e - this.maxTranslate());
                        s = t || r <= 0, a = n || r >= 1, t && (r = 0), n && (r = 1)
                    }
                    if (t.loop) {
                        let t = this.getSlideIndexByData(0), i = this.getSlideIndexByData(this.slides.length - 1),
                            r = this.slidesGrid[t], s = this.slidesGrid[i],
                            a = this.slidesGrid[this.slidesGrid.length - 1], l = Math.abs(e);
                        (n = l >= r ? (l - r) / a : (l + a - s) / a) > 1 && (n -= 1)
                    }
                    Object.assign(this, {
                        progress: r,
                        progressLoop: n,
                        isBeginning: s,
                        isEnd: a
                    }), (t.watchSlidesProgress || t.centeredSlides && t.autoHeight) && this.updateSlidesProgress(e), s && !l && this.emit("reachBeginning toEdge"), a && !o && this.emit("reachEnd toEdge"), (l && !s || o && !a) && this.emit("fromEdge"), this.emit("progress", r)
                }, updateSlidesClasses: function () {
                    let e;
                    let {slides: t, params: i, slidesEl: r, activeIndex: s} = this,
                        a = this.virtual && i.virtual.enabled,
                        n = e => y(r, `.${i.slideClass}${e}, swiper-slide${e}`)[0];
                    if (t.forEach(e => {
                        e.classList.remove(i.slideActiveClass, i.slideNextClass, i.slidePrevClass)
                    }), a) {
                        if (i.loop) {
                            let t = s - this.virtual.slidesBefore;
                            t < 0 && (t = this.virtual.slides.length + t), t >= this.virtual.slides.length && (t -= this.virtual.slides.length), e = n(`[data-swiper-slide-index="${t}"]`)
                        } else e = n(`[data-swiper-slide-index="${s}"]`)
                    } else e = t[s];
                    if (e) {
                        e.classList.add(i.slideActiveClass);
                        let r = function (e, t) {
                            let i = [];
                            for (; e.nextElementSibling;) {
                                let r = e.nextElementSibling;
                                t ? r.matches(t) && i.push(r) : i.push(r), e = r
                            }
                            return i
                        }(e, `.${i.slideClass}, swiper-slide`)[0];
                        i.loop && !r && (r = t[0]), r && r.classList.add(i.slideNextClass);
                        let s = function (e, t) {
                            let i = [];
                            for (; e.previousElementSibling;) {
                                let r = e.previousElementSibling;
                                t ? r.matches(t) && i.push(r) : i.push(r), e = r
                            }
                            return i
                        }(e, `.${i.slideClass}, swiper-slide`)[0];
                        i.loop, s && s.classList.add(i.slidePrevClass)
                    }
                    this.emitSlidesClasses()
                }, updateActiveIndex: function (e) {
                    let t, i;
                    let r = this, s = r.rtlTranslate ? r.translate : -r.translate, {
                        snapGrid: a,
                        params: n,
                        activeIndex: l,
                        realIndex: o,
                        snapIndex: d
                    } = r, u = e, c = e => {
                        let t = e - r.virtual.slidesBefore;
                        return t < 0 && (t = r.virtual.slides.length + t), t >= r.virtual.slides.length && (t -= r.virtual.slides.length), t
                    };
                    if (void 0 === u && (u = function (e) {
                        let t;
                        let {slidesGrid: i, params: r} = e, s = e.rtlTranslate ? e.translate : -e.translate;
                        for (let e = 0; e < i.length; e += 1) void 0 !== i[e + 1] ? s >= i[e] && s < i[e + 1] - (i[e + 1] - i[e]) / 2 ? t = e : s >= i[e] && s < i[e + 1] && (t = e + 1) : s >= i[e] && (t = e);
                        return r.normalizeSlideIndex && (t < 0 || void 0 === t) && (t = 0), t
                    }(r)), a.indexOf(s) >= 0) t = a.indexOf(s); else {
                        let e = Math.min(n.slidesPerGroupSkip, u);
                        t = e + Math.floor((u - e) / n.slidesPerGroup)
                    }
                    if (t >= a.length && (t = a.length - 1), u === l) {
                        t !== d && (r.snapIndex = t, r.emit("snapIndexChange")), r.params.loop && r.virtual && r.params.virtual.enabled && (r.realIndex = c(u));
                        return
                    }
                    i = r.virtual && n.virtual.enabled && n.loop ? c(u) : r.slides[u] ? parseInt(r.slides[u].getAttribute("data-swiper-slide-index") || u, 10) : u, Object.assign(r, {
                        previousSnapIndex: d,
                        snapIndex: t,
                        previousRealIndex: o,
                        realIndex: i,
                        previousIndex: l,
                        activeIndex: u
                    }), r.initialized && P(r), r.emit("activeIndexChange"), r.emit("snapIndexChange"), o !== i && r.emit("realIndexChange"), (r.initialized || r.params.runCallbacksOnInit) && r.emit("slideChange")
                }, updateClickedSlide: function (e) {
                    let t;
                    let i = this.params, r = e.closest(`.${i.slideClass}, swiper-slide`), s = !1;
                    if (r) {
                        for (let e = 0; e < this.slides.length; e += 1) if (this.slides[e] === r) {
                            s = !0, t = e;
                            break
                        }
                    }
                    if (r && s) this.clickedSlide = r, this.virtual && this.params.virtual.enabled ? this.clickedIndex = parseInt(r.getAttribute("data-swiper-slide-index"), 10) : this.clickedIndex = t; else {
                        this.clickedSlide = void 0, this.clickedIndex = void 0;
                        return
                    }
                    i.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide()
                }
            }, translate: {
                getTranslate: function (e = this.isHorizontal() ? "x" : "y") {
                    let {params: t, rtlTranslate: i, translate: r, wrapperEl: s} = this;
                    if (t.virtualTranslate) return i ? -r : r;
                    if (t.cssMode) return r;
                    let a = function (e, t = "x") {
                        let i, r, s;
                        let a = c(), n = function (e) {
                            let t;
                            let i = c();
                            return i.getComputedStyle && (t = i.getComputedStyle(e, null)), !t && e.currentStyle && (t = e.currentStyle), t || (t = e.style), t
                        }(e, null);
                        return a.WebKitCSSMatrix ? ((r = n.transform || n.webkitTransform).split(",").length > 6 && (r = r.split(", ").map(e => e.replace(",", ".")).join(", ")), s = new a.WebKitCSSMatrix("none" === r ? "" : r)) : i = (s = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (r = a.WebKitCSSMatrix ? s.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (r = a.WebKitCSSMatrix ? s.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), r || 0
                    }(s, e);
                    return a += this.cssOverflowAdjustment(), i && (a = -a), a || 0
                }, setTranslate: function (e, t) {
                    let {rtlTranslate: i, params: r, wrapperEl: s, progress: a} = this, n = 0, l = 0;
                    this.isHorizontal() ? n = i ? -e : e : l = e, r.roundLengths && (n = Math.floor(n), l = Math.floor(l)), this.previousTranslate = this.translate, this.translate = this.isHorizontal() ? n : l, r.cssMode ? s[this.isHorizontal() ? "scrollLeft" : "scrollTop"] = this.isHorizontal() ? -n : -l : r.virtualTranslate || (this.isHorizontal() ? n -= this.cssOverflowAdjustment() : l -= this.cssOverflowAdjustment(), s.style.transform = `translate3d(${n}px, ${l}px, 0px)`);
                    let o = this.maxTranslate() - this.minTranslate();
                    (0 === o ? 0 : (e - this.minTranslate()) / o) !== a && this.updateProgress(e), this.emit("setTranslate", this.translate, t)
                }, minTranslate: function () {
                    return -this.snapGrid[0]
                }, maxTranslate: function () {
                    return -this.snapGrid[this.snapGrid.length - 1]
                }, translateTo: function (e = 0, t = this.params.speed, i = !0, r = !0, s) {
                    let a;
                    let n = this, {params: l, wrapperEl: o} = n;
                    if (n.animating && l.preventInteractionOnTransition) return !1;
                    let d = n.minTranslate(), u = n.maxTranslate();
                    if (a = r && e > d ? d : r && e < u ? u : e, n.updateProgress(a), l.cssMode) {
                        let e = n.isHorizontal();
                        if (0 === t) o[e ? "scrollLeft" : "scrollTop"] = -a; else {
                            if (!n.support.smoothScroll) return v({
                                swiper: n,
                                targetPosition: -a,
                                side: e ? "left" : "top"
                            }), !0;
                            o.scrollTo({[e ? "left" : "top"]: -a, behavior: "smooth"})
                        }
                        return !0
                    }
                    return 0 === t ? (n.setTransition(0), n.setTranslate(a), i && (n.emit("beforeTransitionStart", t, s), n.emit("transitionEnd"))) : (n.setTransition(t), n.setTranslate(a), i && (n.emit("beforeTransitionStart", t, s), n.emit("transitionStart")), n.animating || (n.animating = !0, n.onTranslateToWrapperTransitionEnd || (n.onTranslateToWrapperTransitionEnd = function (e) {
                        n && !n.destroyed && e.target === this && (n.wrapperEl.removeEventListener("transitionend", n.onTranslateToWrapperTransitionEnd), n.onTranslateToWrapperTransitionEnd = null, delete n.onTranslateToWrapperTransitionEnd, i && n.emit("transitionEnd"))
                    }), n.wrapperEl.addEventListener("transitionend", n.onTranslateToWrapperTransitionEnd))), !0
                }
            }, transition: {
                setTransition: function (e, t) {
                    this.params.cssMode || (this.wrapperEl.style.transitionDuration = `${e}ms`), this.emit("setTransition", e, t)
                }, transitionStart: function (e = !0, t) {
                    let {params: i} = this;
                    i.cssMode || (i.autoHeight && this.updateAutoHeight(), _({
                        swiper: this,
                        runCallbacks: e,
                        direction: t,
                        step: "Start"
                    }))
                }, transitionEnd: function (e = !0, t) {
                    let {params: i} = this;
                    this.animating = !1, i.cssMode || (this.setTransition(0), _({
                        swiper: this,
                        runCallbacks: e,
                        direction: t,
                        step: "End"
                    }))
                }
            }, slide: {
                slideTo: function (e = 0, t = this.params.speed, i = !0, r, s) {
                    let a;
                    "string" == typeof e && (e = parseInt(e, 10));
                    let n = this, l = e;
                    l < 0 && (l = 0);
                    let {
                        params: o,
                        snapGrid: d,
                        slidesGrid: u,
                        previousIndex: c,
                        activeIndex: p,
                        rtlTranslate: h,
                        wrapperEl: f,
                        enabled: m
                    } = n;
                    if (n.animating && o.preventInteractionOnTransition || !m && !r && !s) return !1;
                    let g = Math.min(n.params.slidesPerGroupSkip, l),
                        b = g + Math.floor((l - g) / n.params.slidesPerGroup);
                    b >= d.length && (b = d.length - 1);
                    let y = -d[b];
                    if (o.normalizeSlideIndex) for (let e = 0; e < u.length; e += 1) {
                        let t = -Math.floor(100 * y), i = Math.floor(100 * u[e]), r = Math.floor(100 * u[e + 1]);
                        void 0 !== u[e + 1] ? t >= i && t < r - (r - i) / 2 ? l = e : t >= i && t < r && (l = e + 1) : t >= i && (l = e)
                    }
                    if (n.initialized && l !== p && (!n.allowSlideNext && (h ? y > n.translate && y > n.minTranslate() : y < n.translate && y < n.minTranslate()) || !n.allowSlidePrev && y > n.translate && y > n.maxTranslate() && (p || 0) !== l)) return !1;
                    if (l !== (c || 0) && i && n.emit("beforeSlideChangeStart"), n.updateProgress(y), a = l > p ? "next" : l < p ? "prev" : "reset", h && -y === n.translate || !h && y === n.translate) return n.updateActiveIndex(l), o.autoHeight && n.updateAutoHeight(), n.updateSlidesClasses(), "slide" !== o.effect && n.setTranslate(y), "reset" !== a && (n.transitionStart(i, a), n.transitionEnd(i, a)), !1;
                    if (o.cssMode) {
                        let e = n.isHorizontal(), i = h ? y : -y;
                        if (0 === t) {
                            let t = n.virtual && n.params.virtual.enabled;
                            t && (n.wrapperEl.style.scrollSnapType = "none", n._immediateVirtual = !0), t && !n._cssModeVirtualInitialSet && n.params.initialSlide > 0 ? (n._cssModeVirtualInitialSet = !0, requestAnimationFrame(() => {
                                f[e ? "scrollLeft" : "scrollTop"] = i
                            })) : f[e ? "scrollLeft" : "scrollTop"] = i, t && requestAnimationFrame(() => {
                                n.wrapperEl.style.scrollSnapType = "", n._immediateVirtual = !1
                            })
                        } else {
                            if (!n.support.smoothScroll) return v({
                                swiper: n,
                                targetPosition: i,
                                side: e ? "left" : "top"
                            }), !0;
                            f.scrollTo({[e ? "left" : "top"]: i, behavior: "smooth"})
                        }
                        return !0
                    }
                    return n.setTransition(t), n.setTranslate(y), n.updateActiveIndex(l), n.updateSlidesClasses(), n.emit("beforeTransitionStart", t, r), n.transitionStart(i, a), 0 === t ? n.transitionEnd(i, a) : n.animating || (n.animating = !0, n.onSlideToWrapperTransitionEnd || (n.onSlideToWrapperTransitionEnd = function (e) {
                        n && !n.destroyed && e.target === this && (n.wrapperEl.removeEventListener("transitionend", n.onSlideToWrapperTransitionEnd), n.onSlideToWrapperTransitionEnd = null, delete n.onSlideToWrapperTransitionEnd, n.transitionEnd(i, a))
                    }), n.wrapperEl.addEventListener("transitionend", n.onSlideToWrapperTransitionEnd)), !0
                }, slideToLoop: function (e = 0, t = this.params.speed, i = !0, r) {
                    if ("string" == typeof e) {
                        let t = parseInt(e, 10);
                        e = t
                    }
                    let s = e;
                    return this.params.loop && (this.virtual && this.params.virtual.enabled ? s += this.virtual.slidesBefore : s = this.getSlideIndexByData(s)), this.slideTo(s, t, i, r)
                }, slideNext: function (e = this.params.speed, t = !0, i) {
                    let {enabled: r, params: s, animating: a} = this;
                    if (!r) return this;
                    let n = s.slidesPerGroup;
                    "auto" === s.slidesPerView && 1 === s.slidesPerGroup && s.slidesPerGroupAuto && (n = Math.max(this.slidesPerViewDynamic("current", !0), 1));
                    let l = this.activeIndex < s.slidesPerGroupSkip ? 1 : n, o = this.virtual && s.virtual.enabled;
                    if (s.loop) {
                        if (a && !o && s.loopPreventsSliding) return !1;
                        this.loopFix({direction: "next"}), this._clientLeft = this.wrapperEl.clientLeft
                    }
                    return s.rewind && this.isEnd ? this.slideTo(0, e, t, i) : this.slideTo(this.activeIndex + l, e, t, i)
                }, slidePrev: function (e = this.params.speed, t = !0, i) {
                    let {params: r, snapGrid: s, slidesGrid: a, rtlTranslate: n, enabled: l, animating: o} = this;
                    if (!l) return this;
                    let d = this.virtual && r.virtual.enabled;
                    if (r.loop) {
                        if (o && !d && r.loopPreventsSliding) return !1;
                        this.loopFix({direction: "prev"}), this._clientLeft = this.wrapperEl.clientLeft
                    }
                    let u = n ? this.translate : -this.translate;

                    function c(e) {
                        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                    }

                    let p = c(u), h = s.map(e => c(e)), f = s[h.indexOf(p) - 1];
                    if (void 0 === f && r.cssMode) {
                        let e;
                        s.forEach((t, i) => {
                            p >= t && (e = i)
                        }), void 0 !== e && (f = s[e > 0 ? e - 1 : e])
                    }
                    let m = 0;
                    if (void 0 !== f && ((m = a.indexOf(f)) < 0 && (m = this.activeIndex - 1), "auto" === r.slidesPerView && 1 === r.slidesPerGroup && r.slidesPerGroupAuto && (m = Math.max(m = m - this.slidesPerViewDynamic("previous", !0) + 1, 0))), r.rewind && this.isBeginning) {
                        let r = this.params.virtual && this.params.virtual.enabled && this.virtual ? this.virtual.slides.length - 1 : this.slides.length - 1;
                        return this.slideTo(r, e, t, i)
                    }
                    return this.slideTo(m, e, t, i)
                }, slideReset: function (e = this.params.speed, t = !0, i) {
                    return this.slideTo(this.activeIndex, e, t, i)
                }, slideToClosest: function (e = this.params.speed, t = !0, i, r = .5) {
                    let s = this.activeIndex, a = Math.min(this.params.slidesPerGroupSkip, s),
                        n = a + Math.floor((s - a) / this.params.slidesPerGroup),
                        l = this.rtlTranslate ? this.translate : -this.translate;
                    if (l >= this.snapGrid[n]) {
                        let e = this.snapGrid[n], t = this.snapGrid[n + 1];
                        l - e > (t - e) * r && (s += this.params.slidesPerGroup)
                    } else {
                        let e = this.snapGrid[n - 1], t = this.snapGrid[n];
                        l - e <= (t - e) * r && (s -= this.params.slidesPerGroup)
                    }
                    return s = Math.min(s = Math.max(s, 0), this.slidesGrid.length - 1), this.slideTo(s, e, t, i)
                }, slideToClickedSlide: function () {
                    let e;
                    let t = this, {params: i, slidesEl: r} = t,
                        s = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView, a = t.clickedIndex,
                        n = t.isElement ? "swiper-slide" : `.${i.slideClass}`;
                    if (i.loop) {
                        if (t.animating) return;
                        e = parseInt(t.clickedSlide.getAttribute("data-swiper-slide-index"), 10), i.centeredSlides ? a < t.loopedSlides - s / 2 || a > t.slides.length - t.loopedSlides + s / 2 ? (t.loopFix(), a = t.getSlideIndex(y(r, `${n}[data-swiper-slide-index="${e}"]`)[0]), p(() => {
                            t.slideTo(a)
                        })) : t.slideTo(a) : a > t.slides.length - s ? (t.loopFix(), a = t.getSlideIndex(y(r, `${n}[data-swiper-slide-index="${e}"]`)[0]), p(() => {
                            t.slideTo(a)
                        })) : t.slideTo(a)
                    } else t.slideTo(a)
                }
            }, loop: {
                loopCreate: function (e) {
                    let {params: t, slidesEl: i} = this;
                    if (!t.loop || this.virtual && this.params.virtual.enabled) return;
                    let r = y(i, `.${t.slideClass}, swiper-slide`);
                    r.forEach((e, t) => {
                        e.setAttribute("data-swiper-slide-index", t)
                    }), this.loopFix({slideRealIndex: e, direction: t.centeredSlides ? void 0 : "next"})
                },
                loopFix: function ({
                                       slideRealIndex: e,
                                       slideTo: t = !0,
                                       direction: i,
                                       setTranslate: r,
                                       activeSlideIndex: s,
                                       byController: a,
                                       byMousewheel: n
                                   } = {}) {
                    let l = this;
                    if (!l.params.loop) return;
                    l.emit("beforeLoopFix");
                    let {slides: o, allowSlidePrev: d, allowSlideNext: u, slidesEl: c, params: p} = l;
                    if (l.allowSlidePrev = !0, l.allowSlideNext = !0, l.virtual && p.virtual.enabled) {
                        t && (p.centeredSlides || 0 !== l.snapIndex ? p.centeredSlides && l.snapIndex < p.slidesPerView ? l.slideTo(l.virtual.slides.length + l.snapIndex, 0, !1, !0) : l.snapIndex === l.snapGrid.length - 1 && l.slideTo(l.virtual.slidesBefore, 0, !1, !0) : l.slideTo(l.virtual.slides.length, 0, !1, !0)), l.allowSlidePrev = d, l.allowSlideNext = u, l.emit("loopFix");
                        return
                    }
                    let h = "auto" === p.slidesPerView ? l.slidesPerViewDynamic() : Math.ceil(parseFloat(p.slidesPerView, 10)),
                        f = p.loopedSlides || h;
                    f % p.slidesPerGroup != 0 && (f += p.slidesPerGroup - f % p.slidesPerGroup), l.loopedSlides = f;
                    let m = [], g = [], v = l.activeIndex;
                    void 0 === s ? s = l.getSlideIndex(l.slides.filter(e => e.classList.contains(p.slideActiveClass))[0]) : v = s;
                    let b = "next" === i || !i, y = "prev" === i || !i, w = 0, S = 0;
                    if (s < f) {
                        w = Math.max(f - s, p.slidesPerGroup);
                        for (let e = 0; e < f - s; e += 1) {
                            let t = e - Math.floor(e / o.length) * o.length;
                            m.push(o.length - t - 1)
                        }
                    } else if (s > l.slides.length - 2 * f) {
                        S = Math.max(s - (l.slides.length - 2 * f), p.slidesPerGroup);
                        for (let e = 0; e < S; e += 1) {
                            let t = e - Math.floor(e / o.length) * o.length;
                            g.push(t)
                        }
                    }
                    if (y && m.forEach(e => {
                        l.slides[e].swiperLoopMoveDOM = !0, c.prepend(l.slides[e]), l.slides[e].swiperLoopMoveDOM = !1
                    }), b && g.forEach(e => {
                        l.slides[e].swiperLoopMoveDOM = !0, c.append(l.slides[e]), l.slides[e].swiperLoopMoveDOM = !1
                    }), l.recalcSlides(), "auto" === p.slidesPerView && l.updateSlides(), p.watchSlidesProgress && l.updateSlidesOffset(), t) {
                        if (m.length > 0 && y) {
                            if (void 0 === e) {
                                let e = l.slidesGrid[v], t = l.slidesGrid[v + w], i = t - e;
                                n ? l.setTranslate(l.translate - i) : (l.slideTo(v + w, 0, !1, !0), r && (l.touches[l.isHorizontal() ? "startX" : "startY"] += i))
                            } else r && l.slideToLoop(e, 0, !1, !0)
                        } else if (g.length > 0 && b) {
                            if (void 0 === e) {
                                let e = l.slidesGrid[v], t = l.slidesGrid[v - S], i = t - e;
                                n ? l.setTranslate(l.translate - i) : (l.slideTo(v - S, 0, !1, !0), r && (l.touches[l.isHorizontal() ? "startX" : "startY"] += i))
                            } else l.slideToLoop(e, 0, !1, !0)
                        }
                    }
                    if (l.allowSlidePrev = d, l.allowSlideNext = u, l.controller && l.controller.control && !a) {
                        let t = {
                            slideRealIndex: e,
                            slideTo: !1,
                            direction: i,
                            setTranslate: r,
                            activeSlideIndex: s,
                            byController: !0
                        };
                        Array.isArray(l.controller.control) ? l.controller.control.forEach(e => {
                            !e.destroyed && e.params.loop && e.loopFix(t)
                        }) : l.controller.control instanceof l.constructor && l.controller.control.params.loop && l.controller.control.loopFix(t)
                    }
                    l.emit("loopFix")
                },
                loopDestroy: function () {
                    let {params: e, slidesEl: t} = this;
                    if (!e.loop || this.virtual && this.params.virtual.enabled) return;
                    this.recalcSlides();
                    let i = [];
                    this.slides.forEach(e => {
                        let t = void 0 === e.swiperSlideIndex ? 1 * e.getAttribute("data-swiper-slide-index") : e.swiperSlideIndex;
                        i[t] = e
                    }), this.slides.forEach(e => {
                        e.removeAttribute("data-swiper-slide-index")
                    }), i.forEach(e => {
                        t.append(e)
                    }), this.recalcSlides(), this.slideTo(this.realIndex, 0)
                }
            }, grabCursor: {
                setGrabCursor: function (e) {
                    let t = this;
                    if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
                    let i = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                    t.isElement && (t.__preventObserver__ = !0), i.style.cursor = "move", i.style.cursor = e ? "grabbing" : "grab", t.isElement && requestAnimationFrame(() => {
                        t.__preventObserver__ = !1
                    })
                }, unsetGrabCursor: function () {
                    let e = this;
                    e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0), e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "", e.isElement && requestAnimationFrame(() => {
                        e.__preventObserver__ = !1
                    }))
                }
            }, events: {
                attachEvents: function () {
                    let e = d(), {params: t} = this;
                    this.onTouchStart = O.bind(this), this.onTouchMove = L.bind(this), this.onTouchEnd = A.bind(this), t.cssMode && (this.onScroll = I.bind(this)), this.onClick = $.bind(this), this.onLoad = j.bind(this), N || (e.addEventListener("touchstart", D), N = !0), F(this, "on")
                }, detachEvents: function () {
                    F(this, "off")
                }
            }, breakpoints: {
                setBreakpoint: function () {
                    let e = this, {realIndex: t, initialized: i, params: r, el: s} = e, a = r.breakpoints;
                    if (!a || a && 0 === Object.keys(a).length) return;
                    let n = e.getBreakpoint(a, e.params.breakpointsBase, e.el);
                    if (!n || e.currentBreakpoint === n) return;
                    let l = n in a ? a[n] : void 0, o = l || e.originalParams, d = G(e, r), u = G(e, o), c = r.enabled;
                    d && !u ? (s.classList.remove(`${r.containerModifierClass}grid`, `${r.containerModifierClass}grid-column`), e.emitContainerClasses()) : !d && u && (s.classList.add(`${r.containerModifierClass}grid`), (o.grid.fill && "column" === o.grid.fill || !o.grid.fill && "column" === r.grid.fill) && s.classList.add(`${r.containerModifierClass}grid-column`), e.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach(t => {
                        if (void 0 === o[t]) return;
                        let i = r[t] && r[t].enabled, s = o[t] && o[t].enabled;
                        i && !s && e[t].disable(), !i && s && e[t].enable()
                    });
                    let p = o.direction && o.direction !== r.direction,
                        h = r.loop && (o.slidesPerView !== r.slidesPerView || p);
                    p && i && e.changeDirection(), m(e.params, o);
                    let f = e.params.enabled;
                    Object.assign(e, {
                        allowTouchMove: e.params.allowTouchMove,
                        allowSlideNext: e.params.allowSlideNext,
                        allowSlidePrev: e.params.allowSlidePrev
                    }), c && !f ? e.disable() : !c && f && e.enable(), e.currentBreakpoint = n, e.emit("_beforeBreakpoint", o), h && i && (e.loopDestroy(), e.loopCreate(t), e.updateSlides()), e.emit("breakpoint", o)
                }, getBreakpoint: function (e, t = "window", i) {
                    if (!e || "container" === t && !i) return;
                    let r = !1, s = c(), a = "window" === t ? s.innerHeight : i.clientHeight,
                        n = Object.keys(e).map(e => {
                            if ("string" == typeof e && 0 === e.indexOf("@")) {
                                let t = parseFloat(e.substr(1));
                                return {value: a * t, point: e}
                            }
                            return {value: e, point: e}
                        });
                    n.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
                    for (let e = 0; e < n.length; e += 1) {
                        let {point: a, value: l} = n[e];
                        "window" === t ? s.matchMedia(`(min-width: ${l}px)`).matches && (r = a) : l <= i.clientWidth && (r = a)
                    }
                    return r || "max"
                }
            }, checkOverflow: {
                checkOverflow: function () {
                    let {isLocked: e, params: t} = this, {slidesOffsetBefore: i} = t;
                    if (i) {
                        let e = this.slides.length - 1, t = this.slidesGrid[e] + this.slidesSizesGrid[e] + 2 * i;
                        this.isLocked = this.size > t
                    } else this.isLocked = 1 === this.snapGrid.length;
                    !0 === t.allowSlideNext && (this.allowSlideNext = !this.isLocked), !0 === t.allowSlidePrev && (this.allowSlidePrev = !this.isLocked), e && e !== this.isLocked && (this.isEnd = !1), e !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock")
                }
            }, classes: {
                addClasses: function () {
                    let {classNames: e, params: t, rtl: i, el: r, device: s} = this, a = function (e, t) {
                        let i = [];
                        return e.forEach(e => {
                            "object" == typeof e ? Object.keys(e).forEach(r => {
                                e[r] && i.push(t + r)
                            }) : "string" == typeof e && i.push(t + e)
                        }), i
                    }(["initialized", t.direction, {"free-mode": this.params.freeMode && t.freeMode.enabled}, {autoheight: t.autoHeight}, {rtl: i}, {grid: t.grid && t.grid.rows > 1}, {"grid-column": t.grid && t.grid.rows > 1 && "column" === t.grid.fill}, {android: s.android}, {ios: s.ios}, {"css-mode": t.cssMode}, {centered: t.cssMode && t.centeredSlides}, {"watch-progress": t.watchSlidesProgress}], t.containerModifierClass);
                    e.push(...a), r.classList.add(...e), this.emitContainerClasses()
                }, removeClasses: function () {
                    let {el: e, classNames: t} = this;
                    e.classList.remove(...t), this.emitContainerClasses()
                }
            }
        }, H = {};

        class B {
            constructor(...e) {
                let t, i;
                1 === e.length && e[0].constructor && "Object" === Object.prototype.toString.call(e[0]).slice(8, -1) ? i = e[0] : [t, i] = e, i || (i = {}), i = m({}, i), t && !i.el && (i.el = t);
                let r = d();
                if (i.el && "string" == typeof i.el && r.querySelectorAll(i.el).length > 1) {
                    let e = [];
                    return r.querySelectorAll(i.el).forEach(t => {
                        let r = m({}, i, {el: t});
                        e.push(new B(r))
                    }), e
                }
                let n = this;
                n.__swiper__ = !0, n.support = C(), n.device = function (e = {}) {
                    return s || (s = function ({userAgent: e} = {}) {
                        let t = C(), i = c(), r = i.navigator.platform, s = e || i.navigator.userAgent,
                            a = {ios: !1, android: !1}, n = i.screen.width, l = i.screen.height,
                            o = s.match(/(Android);?[\s\/]+([\d.]+)?/), d = s.match(/(iPad).*OS\s([\d_]+)/),
                            u = s.match(/(iPod)(.*OS\s([\d_]+))?/), p = !d && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                            h = "MacIntel" === r;
                        return !d && h && t.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${n}x${l}`) >= 0 && ((d = s.match(/(Version)\/([\d.]+)/)) || (d = [0, 1, "13_0_0"]), h = !1), o && "Win32" !== r && (a.os = "android", a.android = !0), (d || p || u) && (a.os = "ios", a.ios = !0), a
                    }(e)), s
                }({userAgent: i.userAgent}), n.browser = (a || (a = function () {
                    let e = c(), t = !1;

                    function i() {
                        let t = e.navigator.userAgent.toLowerCase();
                        return t.indexOf("safari") >= 0 && 0 > t.indexOf("chrome") && 0 > t.indexOf("android")
                    }

                    if (i()) {
                        let i = String(e.navigator.userAgent);
                        if (i.includes("Version/")) {
                            let [e, r] = i.split("Version/")[1].split(" ")[0].split(".").map(e => Number(e));
                            t = e < 16 || 16 === e && r < 2
                        }
                    }
                    return {
                        isSafari: t || i(),
                        needPerspectiveFix: t,
                        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
                    }
                }()), a), n.eventsListeners = {}, n.eventsAnyListeners = [], n.modules = [...n.__modules__], i.modules && Array.isArray(i.modules) && n.modules.push(...i.modules);
                let l = {};
                n.modules.forEach(e => {
                    var t;
                    e({
                        params: i, swiper: n, extendParams: (t = i, function (e = {}) {
                            let i = Object.keys(e)[0], r = e[i];
                            if ("object" != typeof r || null === r || (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 && !0 === t[i] && (t[i] = {auto: !0}), !(i in t && "enabled" in r))) {
                                m(l, e);
                                return
                            }
                            !0 === t[i] && (t[i] = {enabled: !0}), "object" != typeof t[i] || "enabled" in t[i] || (t[i].enabled = !0), t[i] || (t[i] = {enabled: !1}), m(l, e)
                        }), on: n.on.bind(n), once: n.once.bind(n), off: n.off.bind(n), emit: n.emit.bind(n)
                    })
                });
                let o = m({}, V, l);
                return n.params = m({}, o, H, i), n.originalParams = m({}, n.params), n.passedParams = m({}, i), n.params && n.params.on && Object.keys(n.params.on).forEach(e => {
                    n.on(e, n.params.on[e])
                }), n.params && n.params.onAny && n.onAny(n.params.onAny), Object.assign(n, {
                    enabled: n.params.enabled,
                    el: t,
                    classNames: [],
                    slides: [],
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal: () => "horizontal" === n.params.direction,
                    isVertical: () => "vertical" === n.params.direction,
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: !0,
                    isEnd: !1,
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: !1,
                    cssOverflowAdjustment() {
                        return 8388608 * Math.trunc(this.translate / 8388608)
                    },
                    allowSlideNext: n.params.allowSlideNext,
                    allowSlidePrev: n.params.allowSlidePrev,
                    touchEventsData: {
                        isTouched: void 0,
                        isMoved: void 0,
                        allowTouchCallbacks: void 0,
                        touchStartTime: void 0,
                        isScrolling: void 0,
                        currentTranslate: void 0,
                        startTranslate: void 0,
                        allowThresholdMove: void 0,
                        focusableElements: n.params.focusableElements,
                        lastClickTime: 0,
                        clickTimeout: void 0,
                        velocities: [],
                        allowMomentumBounce: void 0,
                        startMoving: void 0,
                        evCache: []
                    },
                    allowClick: !0,
                    allowTouchMove: n.params.allowTouchMove,
                    touches: {startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0},
                    imagesToLoad: [],
                    imagesLoaded: 0
                }), n.emit("_swiper"), n.params.init && n.init(), n
            }

            getSlideIndex(e) {
                let {slidesEl: t, params: i} = this, r = y(t, `.${i.slideClass}, swiper-slide`), s = x(r[0]);
                return x(e) - s
            }

            getSlideIndexByData(e) {
                return this.getSlideIndex(this.slides.filter(t => 1 * t.getAttribute("data-swiper-slide-index") === e)[0])
            }

            recalcSlides() {
                let {slidesEl: e, params: t} = this;
                this.slides = y(e, `.${t.slideClass}, swiper-slide`)
            }

            enable() {
                this.enabled || (this.enabled = !0, this.params.grabCursor && this.setGrabCursor(), this.emit("enable"))
            }

            disable() {
                this.enabled && (this.enabled = !1, this.params.grabCursor && this.unsetGrabCursor(), this.emit("disable"))
            }

            setProgress(e, t) {
                e = Math.min(Math.max(e, 0), 1);
                let i = this.minTranslate(), r = this.maxTranslate(), s = (r - i) * e + i;
                this.translateTo(s, void 0 === t ? 0 : t), this.updateActiveIndex(), this.updateSlidesClasses()
            }

            emitContainerClasses() {
                let e = this;
                if (!e.params._emitClasses || !e.el) return;
                let t = e.el.className.split(" ").filter(t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass));
                e.emit("_containerClasses", t.join(" "))
            }

            getSlideClasses(e) {
                let t = this;
                return t.destroyed ? "" : e.className.split(" ").filter(e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass)).join(" ")
            }

            emitSlidesClasses() {
                let e = this;
                if (!e.params._emitClasses || !e.el) return;
                let t = [];
                e.slides.forEach(i => {
                    let r = e.getSlideClasses(i);
                    t.push({slideEl: i, classNames: r}), e.emit("_slideClass", i, r)
                }), e.emit("_slideClasses", t)
            }

            slidesPerViewDynamic(e = "current", t = !1) {
                let {params: i, slides: r, slidesGrid: s, slidesSizesGrid: a, size: n, activeIndex: l} = this, o = 1;
                if (i.centeredSlides) {
                    let e, t = r[l] ? r[l].swiperSlideSize : 0;
                    for (let i = l + 1; i < r.length; i += 1) r[i] && !e && (t += r[i].swiperSlideSize, o += 1, t > n && (e = !0));
                    for (let i = l - 1; i >= 0; i -= 1) r[i] && !e && (t += r[i].swiperSlideSize, o += 1, t > n && (e = !0))
                } else if ("current" === e) for (let e = l + 1; e < r.length; e += 1) {
                    let i = t ? s[e] + a[e] - s[l] < n : s[e] - s[l] < n;
                    i && (o += 1)
                } else for (let e = l - 1; e >= 0; e -= 1) {
                    let t = s[l] - s[e] < n;
                    t && (o += 1)
                }
                return o
            }

            update() {
                let e;
                let t = this;
                if (!t || t.destroyed) return;
                let {snapGrid: i, params: r} = t;

                function s() {
                    let e = t.rtlTranslate ? -1 * t.translate : t.translate,
                        i = Math.min(Math.max(e, t.maxTranslate()), t.minTranslate());
                    t.setTranslate(i), t.updateActiveIndex(), t.updateSlidesClasses()
                }

                if (r.breakpoints && t.setBreakpoint(), [...t.el.querySelectorAll('[loading="lazy"]')].forEach(e => {
                    e.complete && k(t, e)
                }), t.updateSize(), t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), r.freeMode && r.freeMode.enabled && !r.cssMode) s(), r.autoHeight && t.updateAutoHeight(); else {
                    if (("auto" === r.slidesPerView || r.slidesPerView > 1) && t.isEnd && !r.centeredSlides) {
                        let i = t.virtual && r.virtual.enabled ? t.virtual.slides : t.slides;
                        e = t.slideTo(i.length - 1, 0, !1, !0)
                    } else e = t.slideTo(t.activeIndex, 0, !1, !0);
                    e || s()
                }
                r.watchOverflow && i !== t.snapGrid && t.checkOverflow(), t.emit("update")
            }

            changeDirection(e, t = !0) {
                let i = this.params.direction;
                return e || (e = "horizontal" === i ? "vertical" : "horizontal"), e === i || "horizontal" !== e && "vertical" !== e || (this.el.classList.remove(`${this.params.containerModifierClass}${i}`), this.el.classList.add(`${this.params.containerModifierClass}${e}`), this.emitContainerClasses(), this.params.direction = e, this.slides.forEach(t => {
                    "vertical" === e ? t.style.width = "" : t.style.height = ""
                }), this.emit("changeDirection"), t && this.update()), this
            }

            changeLanguageDirection(e) {
                (!this.rtl || "rtl" !== e) && (this.rtl || "ltr" !== e) && (this.rtl = "rtl" === e, this.rtlTranslate = "horizontal" === this.params.direction && this.rtl, this.rtl ? (this.el.classList.add(`${this.params.containerModifierClass}rtl`), this.el.dir = "rtl") : (this.el.classList.remove(`${this.params.containerModifierClass}rtl`), this.el.dir = "ltr"), this.update())
            }

            mount(e) {
                let t = this;
                if (t.mounted) return !0;
                let i = e || t.params.el;
                if ("string" == typeof i && (i = document.querySelector(i)), !i) return !1;
                i.swiper = t, i.shadowEl && (t.isElement = !0);
                let r = () => `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`, s = (() => {
                    if (i && i.shadowRoot && i.shadowRoot.querySelector) {
                        let e = i.shadowRoot.querySelector(r());
                        return e
                    }
                    return y(i, r())[0]
                })();
                return !s && t.params.createElements && (s = w("div", t.params.wrapperClass), i.append(s), y(i, `.${t.params.slideClass}`).forEach(e => {
                    s.append(e)
                })), Object.assign(t, {
                    el: i,
                    wrapperEl: s,
                    slidesEl: t.isElement ? i : s,
                    mounted: !0,
                    rtl: "rtl" === i.dir.toLowerCase() || "rtl" === S(i, "direction"),
                    rtlTranslate: "horizontal" === t.params.direction && ("rtl" === i.dir.toLowerCase() || "rtl" === S(i, "direction")),
                    wrongRTL: "-webkit-box" === S(s, "display")
                }), !0
            }

            init(e) {
                let t = this;
                if (t.initialized) return t;
                let i = t.mount(e);
                return !1 === i || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(), t.attachEvents(), [...t.el.querySelectorAll('[loading="lazy"]')].forEach(e => {
                    e.complete ? k(t, e) : e.addEventListener("load", e => {
                        k(t, e.target)
                    })
                }), P(t), t.initialized = !0, P(t), t.emit("init"), t.emit("afterInit")), t
            }

            destroy(e = !0, t = !0) {
                let i = this, {params: r, el: s, wrapperEl: a, slides: n} = i;
                return void 0 === i.params || i.destroyed || (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), r.loop && i.loopDestroy(), t && (i.removeClasses(), s.removeAttribute("style"), a.removeAttribute("style"), n && n.length && n.forEach(e => {
                    e.classList.remove(r.slideVisibleClass, r.slideActiveClass, r.slideNextClass, r.slidePrevClass), e.removeAttribute("style"), e.removeAttribute("data-swiper-slide-index")
                })), i.emit("destroy"), Object.keys(i.eventsListeners).forEach(e => {
                    i.off(e)
                }), !1 !== e && (i.el.swiper = null, function (e) {
                    Object.keys(e).forEach(t => {
                        try {
                            e[t] = null
                        } catch (e) {
                        }
                        try {
                            delete e[t]
                        } catch (e) {
                        }
                    })
                }(i)), i.destroyed = !0), null
            }

            static extendDefaults(e) {
                m(H, e)
            }

            static get extendedDefaults() {
                return H
            }

            static get defaults() {
                return V
            }

            static installModule(e) {
                B.prototype.__modules__ || (B.prototype.__modules__ = []);
                let t = B.prototype.__modules__;
                "function" == typeof e && 0 > t.indexOf(e) && t.push(e)
            }

            static use(e) {
                return Array.isArray(e) ? e.forEach(e => B.installModule(e)) : B.installModule(e), B
            }
        }

        Object.keys(R).forEach(e => {
            Object.keys(R[e]).forEach(t => {
                B.prototype[t] = R[e][t]
            })
        }), B.use([function ({swiper: e, on: t, emit: i}) {
            let r = c(), s = null, a = null, n = () => {
                e && !e.destroyed && e.initialized && (i("beforeResize"), i("resize"))
            }, l = () => {
                e && !e.destroyed && e.initialized && (s = new ResizeObserver(t => {
                    a = r.requestAnimationFrame(() => {
                        let {width: i, height: r} = e, s = i, a = r;
                        t.forEach(({contentBoxSize: t, contentRect: i, target: r}) => {
                            r && r !== e.el || (s = i ? i.width : (t[0] || t).inlineSize, a = i ? i.height : (t[0] || t).blockSize)
                        }), (s !== i || a !== r) && n()
                    })
                })).observe(e.el)
            }, o = () => {
                a && r.cancelAnimationFrame(a), s && s.unobserve && e.el && (s.unobserve(e.el), s = null)
            }, d = () => {
                e && !e.destroyed && e.initialized && i("orientationchange")
            };
            t("init", () => {
                if (e.params.resizeObserver && void 0 !== r.ResizeObserver) {
                    l();
                    return
                }
                r.addEventListener("resize", n), r.addEventListener("orientationchange", d)
            }), t("destroy", () => {
                o(), r.removeEventListener("resize", n), r.removeEventListener("orientationchange", d)
            })
        }, function ({swiper: e, extendParams: t, on: i, emit: r}) {
            let s = [], a = c(), n = (t, i = {}) => {
                let n = a.MutationObserver || a.WebkitMutationObserver, l = new n(t => {
                    if (e.__preventObserver__) return;
                    if (1 === t.length) {
                        r("observerUpdate", t[0]);
                        return
                    }
                    let i = function () {
                        r("observerUpdate", t[0])
                    };
                    a.requestAnimationFrame ? a.requestAnimationFrame(i) : a.setTimeout(i, 0)
                });
                l.observe(t, {
                    attributes: void 0 === i.attributes || i.attributes,
                    childList: void 0 === i.childList || i.childList,
                    characterData: void 0 === i.characterData || i.characterData
                }), s.push(l)
            };
            t({observer: !1, observeParents: !1, observeSlideChildren: !1}), i("init", () => {
                if (e.params.observer) {
                    if (e.params.observeParents) {
                        let t = E(e.el);
                        for (let e = 0; e < t.length; e += 1) n(t[e])
                    }
                    n(e.el, {childList: e.params.observeSlideChildren}), n(e.wrapperEl, {attributes: !1})
                }
            }), i("destroy", () => {
                s.forEach(e => {
                    e.disconnect()
                }), s.splice(0, s.length)
            })
        }]);
        var q = B;

        function W(e = "") {
            return `.${e.trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, ".")}`
        }

        function Y({swiper: e, extendParams: t, on: i, emit: r}) {
            let s;
            let a = "swiper-pagination";
            t({
                pagination: {
                    el: null,
                    bulletElement: "span",
                    clickable: !1,
                    hideOnClick: !1,
                    renderBullet: null,
                    renderProgressbar: null,
                    renderFraction: null,
                    renderCustom: null,
                    progressbarOpposite: !1,
                    type: "bullets",
                    dynamicBullets: !1,
                    dynamicMainBullets: 1,
                    formatFractionCurrent: e => e,
                    formatFractionTotal: e => e,
                    bulletClass: `${a}-bullet`,
                    bulletActiveClass: `${a}-bullet-active`,
                    modifierClass: `${a}-`,
                    currentClass: `${a}-current`,
                    totalClass: `${a}-total`,
                    hiddenClass: `${a}-hidden`,
                    progressbarFillClass: `${a}-progressbar-fill`,
                    progressbarOppositeClass: `${a}-progressbar-opposite`,
                    clickableClass: `${a}-clickable`,
                    lockClass: `${a}-lock`,
                    horizontalClass: `${a}-horizontal`,
                    verticalClass: `${a}-vertical`,
                    paginationDisabledClass: `${a}-disabled`
                }
            }), e.pagination = {el: null, bullets: []};
            let n = 0, l = e => (Array.isArray(e) || (e = [e].filter(e => !!e)), e);

            function o() {
                return !e.params.pagination.el || !e.pagination.el || Array.isArray(e.pagination.el) && 0 === e.pagination.el.length
            }

            function d(t, i) {
                let {bulletActiveClass: r} = e.params.pagination;
                t && (t = t[`${"prev" === i ? "previous" : "next"}ElementSibling`]) && (t.classList.add(`${r}-${i}`), (t = t[`${"prev" === i ? "previous" : "next"}ElementSibling`]) && t.classList.add(`${r}-${i}-${i}`))
            }

            function u(t) {
                let i = t.target.closest(W(e.params.pagination.bulletClass));
                if (!i) return;
                t.preventDefault();
                let r = x(i) * e.params.slidesPerGroup;
                if (e.params.loop) {
                    if (e.realIndex === r) return;
                    let t = e.getSlideIndexByData(r), i = e.getSlideIndexByData(e.realIndex);
                    t > e.slides.length - e.loopedSlides && e.loopFix({
                        direction: t > i ? "next" : "prev",
                        activeSlideIndex: t,
                        slideTo: !1
                    }), e.slideToLoop(r)
                } else e.slideTo(r)
            }

            function c() {
                let t, i;
                let a = e.rtl, u = e.params.pagination;
                if (o()) return;
                let c = e.pagination.el;
                c = l(c);
                let p = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                    h = e.params.loop ? Math.ceil(p / e.params.slidesPerGroup) : e.snapGrid.length;
                if (e.params.loop ? (i = e.previousRealIndex || 0, t = e.params.slidesPerGroup > 1 ? Math.floor(e.realIndex / e.params.slidesPerGroup) : e.realIndex) : void 0 !== e.snapIndex ? (t = e.snapIndex, i = e.previousSnapIndex) : (i = e.previousIndex || 0, t = e.activeIndex || 0), "bullets" === u.type && e.pagination.bullets && e.pagination.bullets.length > 0) {
                    let r, l, o;
                    let p = e.pagination.bullets;
                    if (u.dynamicBullets && (s = T(p[0], e.isHorizontal() ? "width" : "height", !0), c.forEach(t => {
                        t.style[e.isHorizontal() ? "width" : "height"] = `${s * (u.dynamicMainBullets + 4)}px`
                    }), u.dynamicMainBullets > 1 && void 0 !== i && ((n += t - (i || 0)) > u.dynamicMainBullets - 1 ? n = u.dynamicMainBullets - 1 : n < 0 && (n = 0)), o = ((l = (r = Math.max(t - n, 0)) + (Math.min(p.length, u.dynamicMainBullets) - 1)) + r) / 2), p.forEach(e => {
                        let t = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(e => `${u.bulletActiveClass}${e}`)].map(e => "string" == typeof e && e.includes(" ") ? e.split(" ") : e).flat();
                        e.classList.remove(...t)
                    }), c.length > 1) p.forEach(i => {
                        let s = x(i);
                        s === t ? i.classList.add(...u.bulletActiveClass.split(" ")) : e.isElement && i.setAttribute("part", "bullet"), u.dynamicBullets && (s >= r && s <= l && i.classList.add(...`${u.bulletActiveClass}-main`.split(" ")), s === r && d(i, "prev"), s === l && d(i, "next"))
                    }); else {
                        let i = p[t];
                        if (i && i.classList.add(...u.bulletActiveClass.split(" ")), e.isElement && p.forEach((e, i) => {
                            e.setAttribute("part", i === t ? "bullet-active" : "bullet")
                        }), u.dynamicBullets) {
                            let e = p[r], t = p[l];
                            for (let e = r; e <= l; e += 1) p[e] && p[e].classList.add(...`${u.bulletActiveClass}-main`.split(" "));
                            d(e, "prev"), d(t, "next")
                        }
                    }
                    if (u.dynamicBullets) {
                        let t = Math.min(p.length, u.dynamicMainBullets + 4), i = (s * t - s) / 2 - o * s,
                            r = a ? "right" : "left";
                        p.forEach(t => {
                            t.style[e.isHorizontal() ? r : "top"] = `${i}px`
                        })
                    }
                }
                c.forEach((i, s) => {
                    if ("fraction" === u.type && (i.querySelectorAll(W(u.currentClass)).forEach(e => {
                        e.textContent = u.formatFractionCurrent(t + 1)
                    }), i.querySelectorAll(W(u.totalClass)).forEach(e => {
                        e.textContent = u.formatFractionTotal(h)
                    })), "progressbar" === u.type) {
                        let r;
                        r = u.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
                        let s = (t + 1) / h, a = 1, n = 1;
                        "horizontal" === r ? a = s : n = s, i.querySelectorAll(W(u.progressbarFillClass)).forEach(t => {
                            t.style.transform = `translate3d(0,0,0) scaleX(${a}) scaleY(${n})`, t.style.transitionDuration = `${e.params.speed}ms`
                        })
                    }
                    "custom" === u.type && u.renderCustom ? (i.innerHTML = u.renderCustom(e, t + 1, h), 0 === s && r("paginationRender", i)) : (0 === s && r("paginationRender", i), r("paginationUpdate", i)), e.params.watchOverflow && e.enabled && i.classList[e.isLocked ? "add" : "remove"](u.lockClass)
                })
            }

            function p() {
                let t = e.params.pagination;
                if (o()) return;
                let i = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                    s = e.pagination.el;
                s = l(s);
                let a = "";
                if ("bullets" === t.type) {
                    let r = e.params.loop ? Math.ceil(i / e.params.slidesPerGroup) : e.snapGrid.length;
                    e.params.freeMode && e.params.freeMode.enabled && r > i && (r = i);
                    for (let i = 0; i < r; i += 1) t.renderBullet ? a += t.renderBullet.call(e, i, t.bulletClass) : a += `<${t.bulletElement} ${e.isElement ? 'part="bullet"' : ""} class="${t.bulletClass}"></${t.bulletElement}>`
                }
                "fraction" === t.type && (a = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`), "progressbar" === t.type && (a = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : `<span class="${t.progressbarFillClass}"></span>`), e.pagination.bullets = [], s.forEach(i => {
                    "custom" !== t.type && (i.innerHTML = a || ""), "bullets" === t.type && e.pagination.bullets.push(...i.querySelectorAll(W(t.bulletClass)))
                }), "custom" !== t.type && r("paginationRender", s[0])
            }

            function h() {
                var t, i, r;
                let s;
                e.params.pagination = (t = e.originalParams.pagination, i = e.params.pagination, r = {el: "swiper-pagination"}, e.params.createElements && Object.keys(r).forEach(s => {
                    if (!i[s] && !0 === i.auto) {
                        let a = y(e.el, `.${r[s]}`)[0];
                        a || ((a = w("div", r[s])).className = r[s], e.el.append(a)), i[s] = a, t[s] = a
                    }
                }), i);
                let a = e.params.pagination;
                a.el && ("string" == typeof a.el && e.isElement && (s = e.el.shadowRoot.querySelector(a.el)), s || "string" != typeof a.el || (s = [...document.querySelectorAll(a.el)]), s || (s = a.el), s && 0 !== s.length && (e.params.uniqueNavElements && "string" == typeof a.el && Array.isArray(s) && s.length > 1 && (s = [...e.el.querySelectorAll(a.el)]).length > 1 && (s = s.filter(t => E(t, ".swiper")[0] === e.el)[0]), Array.isArray(s) && 1 === s.length && (s = s[0]), Object.assign(e.pagination, {el: s}), (s = l(s)).forEach(t => {
                    "bullets" === a.type && a.clickable && t.classList.add(a.clickableClass), t.classList.add(a.modifierClass + a.type), t.classList.add(e.isHorizontal() ? a.horizontalClass : a.verticalClass), "bullets" === a.type && a.dynamicBullets && (t.classList.add(`${a.modifierClass}${a.type}-dynamic`), n = 0, a.dynamicMainBullets < 1 && (a.dynamicMainBullets = 1)), "progressbar" === a.type && a.progressbarOpposite && t.classList.add(a.progressbarOppositeClass), a.clickable && t.addEventListener("click", u), e.enabled || t.classList.add(a.lockClass)
                })))
            }

            function f() {
                let t = e.params.pagination;
                if (o()) return;
                let i = e.pagination.el;
                i && (i = l(i)).forEach(i => {
                    i.classList.remove(t.hiddenClass), i.classList.remove(t.modifierClass + t.type), i.classList.remove(e.isHorizontal() ? t.horizontalClass : t.verticalClass), t.clickable && i.removeEventListener("click", u)
                }), e.pagination.bullets && e.pagination.bullets.forEach(e => e.classList.remove(...t.bulletActiveClass.split(" ")))
            }

            i("changeDirection", () => {
                if (!e.pagination || !e.pagination.el) return;
                let t = e.params.pagination, {el: i} = e.pagination;
                (i = l(i)).forEach(i => {
                    i.classList.remove(t.horizontalClass, t.verticalClass), i.classList.add(e.isHorizontal() ? t.horizontalClass : t.verticalClass)
                })
            }), i("init", () => {
                !1 === e.params.pagination.enabled ? m() : (h(), p(), c())
            }), i("activeIndexChange", () => {
                void 0 === e.snapIndex && c()
            }), i("snapIndexChange", () => {
                c()
            }), i("snapGridLengthChange", () => {
                p(), c()
            }), i("destroy", () => {
                f()
            }), i("enable disable", () => {
                let {el: t} = e.pagination;
                t && (t = l(t)).forEach(t => t.classList[e.enabled ? "remove" : "add"](e.params.pagination.lockClass))
            }), i("lock unlock", () => {
                c()
            }), i("click", (t, i) => {
                let s = i.target, {el: a} = e.pagination;
                if (Array.isArray(a) || (a = [a].filter(e => !!e)), e.params.pagination.el && e.params.pagination.hideOnClick && a && a.length > 0 && !s.classList.contains(e.params.pagination.bulletClass)) {
                    if (e.navigation && (e.navigation.nextEl && s === e.navigation.nextEl || e.navigation.prevEl && s === e.navigation.prevEl)) return;
                    let t = a[0].classList.contains(e.params.pagination.hiddenClass);
                    !0 === t ? r("paginationShow") : r("paginationHide"), a.forEach(t => t.classList.toggle(e.params.pagination.hiddenClass))
                }
            });
            let m = () => {
                e.el.classList.add(e.params.pagination.paginationDisabledClass);
                let {el: t} = e.pagination;
                t && (t = l(t)).forEach(t => t.classList.add(e.params.pagination.paginationDisabledClass)), f()
            };
            Object.assign(e.pagination, {
                enable: () => {
                    e.el.classList.remove(e.params.pagination.paginationDisabledClass);
                    let {el: t} = e.pagination;
                    t && (t = l(t)).forEach(t => t.classList.remove(e.params.pagination.paginationDisabledClass)), h(), p(), c()
                }, disable: m, render: p, update: c, init: h, destroy: f
            })
        }

        function X(e, t, i) {
            let r = `swiper-slide-shadow${i ? `-${i}` : ""}`, s = b(t), a = s.querySelector(`.${r}`);
            return a || (a = w("div", `swiper-slide-shadow${i ? `-${i}` : ""}`), s.append(a)), a
        }

        function U({swiper: e, extendParams: t, on: i}) {
            t({
                coverflowEffect: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    scale: 1,
                    modifier: 1,
                    slideShadows: !0
                }
            }), function (e) {
                let t;
                let {
                    effect: i,
                    swiper: r,
                    on: s,
                    setTranslate: a,
                    setTransition: n,
                    overwriteParams: l,
                    perspective: o,
                    recreateShadows: d,
                    getEffectParams: u
                } = e;
                s("beforeInit", () => {
                    if (r.params.effect !== i) return;
                    r.classNames.push(`${r.params.containerModifierClass}${i}`), o && o() && r.classNames.push(`${r.params.containerModifierClass}3d`);
                    let e = l ? l() : {};
                    Object.assign(r.params, e), Object.assign(r.originalParams, e)
                }), s("setTranslate", () => {
                    r.params.effect === i && a()
                }), s("setTransition", (e, t) => {
                    r.params.effect === i && n(t)
                }), s("transitionEnd", () => {
                    r.params.effect === i && d && u && u().slideShadows && (r.slides.forEach(e => {
                        e.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(e => e.remove())
                    }), d())
                }), s("virtualUpdate", () => {
                    r.params.effect === i && (r.slides.length || (t = !0), requestAnimationFrame(() => {
                        t && r.slides && r.slides.length && (a(), t = !1)
                    }))
                })
            }({
                effect: "coverflow", swiper: e, on: i, setTranslate: () => {
                    let {width: t, height: i, slides: r, slidesSizesGrid: s} = e, a = e.params.coverflowEffect,
                        n = e.isHorizontal(), l = e.translate, o = n ? -l + t / 2 : -l + i / 2,
                        d = n ? a.rotate : -a.rotate, u = a.depth;
                    for (let e = 0, t = r.length; e < t; e += 1) {
                        let t = r[e], i = s[e], l = t.swiperSlideOffset, c = (o - l - i / 2) / i,
                            p = "function" == typeof a.modifier ? a.modifier(c) : c * a.modifier, h = n ? d * p : 0,
                            f = n ? 0 : d * p, m = -u * Math.abs(p), g = a.stretch;
                        "string" == typeof g && -1 !== g.indexOf("%") && (g = parseFloat(a.stretch) / 100 * i);
                        let v = n ? 0 : g * p, y = n ? g * p : 0, w = 1 - (1 - a.scale) * Math.abs(p);
                        .001 > Math.abs(y) && (y = 0), .001 > Math.abs(v) && (v = 0), .001 > Math.abs(m) && (m = 0), .001 > Math.abs(h) && (h = 0), .001 > Math.abs(f) && (f = 0), .001 > Math.abs(w) && (w = 0);
                        let S = `translate3d(${y}px,${v}px,${m}px)  rotateX(${f}deg) rotateY(${h}deg) scale(${w})`,
                            x = function (e, t) {
                                let i = b(t);
                                return i !== t && (i.style.backfaceVisibility = "hidden", i.style["-webkit-backface-visibility"] = "hidden"), i
                            }(0, t);
                        if (x.style.transform = S, t.style.zIndex = -Math.abs(Math.round(p)) + 1, a.slideShadows) {
                            let e = n ? t.querySelector(".swiper-slide-shadow-left") : t.querySelector(".swiper-slide-shadow-top"),
                                i = n ? t.querySelector(".swiper-slide-shadow-right") : t.querySelector(".swiper-slide-shadow-bottom");
                            e || (e = X(a, t, n ? "left" : "top")), i || (i = X(a, t, n ? "right" : "bottom")), e && (e.style.opacity = p > 0 ? p : 0), i && (i.style.opacity = -p > 0 ? -p : 0)
                        }
                    }
                }, setTransition: t => {
                    let i = e.slides.map(e => b(e));
                    i.forEach(e => {
                        e.style.transitionDuration = `${t}ms`, e.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(e => {
                            e.style.transitionDuration = `${t}ms`
                        })
                    })
                }, perspective: () => !0, overwriteParams: () => ({watchSlidesProgress: !0})
            })
        }
    }
}]);