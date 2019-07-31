"use strict";
var $window = $(window)
    , APP = window.APP = window.APP || {};
APP.global = function () {
    var t = $('<div class="viewport" />').appendTo("body")
        , e = function () {
            "20px" == t.css("font-size") ? APP.viewport = "large" : "10px" == t.css("font-size") ? APP.viewport = "medium" : APP.viewport = "small"
        };
    e(),
        $window.resize(e);
};
var events = {
    events: {},
    on: function (t, e) {
        this.events[t] = this.events[t] || [],
            this.events[t].push(e)
    },
    off: function (t, e) {
        if (this.events[t])
            for (var i = 0; i < this.events[t].length; i++)
                if (this.events[t][i] === e) {
                    this.events[t].splice(i, 1);
                    break
                }
    },
    emit: function (t, e) {
        this.events[t] && this.events[t].forEach(function (t) {
            t(e)
        })
    }
}
    , googleLoaded = !1
    , youtubeLoaded = !1;

$(window).on("load", function () {
    videoOverlay.init();
});
function scrollToTop() {
    if ($(this).scrollTop() > 100) {
        $('.scrollup').fadeIn();
    } else {
        $('.scrollup').fadeOut();
    }
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });
    $('.scrollup, .product-id').click(function () {
        var _this = $(this);
        $("html, body").animate({
            scrollTop: 0
        }, 600, function () {
            var isIE = detectIE();
            if (isIE && isIE < 12) {
                _this.closest(".nav-sticky").find(".nav-link").removeClass("active").first().addClass("active");
            }
        });
        return false;
    });

}
function loadSection(section, url, callback) {
    $.get(url, function (responseTxt) {
        var $data = $(responseTxt);
        $(section).html($data);
        if (callback && typeof callback === "function") {
            callback();
        }
    }, "html");
}
function topNavigation() {
    var t, e, i, n, a, o, s, r, l, d = 0, c = $("body"), f = $("html"), h = $(".wrapper"), u = $(".nav-container"), p = $(".nav-container:first"), v = u.find(".nav-logo"), m = u.find(".nav-content"), w = m.find(".nav-tier1"), g = w.find(".primary-link"), b = m.find(".nav-tier2"), P = b.find(".secondary-link"), C = b.find("a.additional-link"), y = m.find(".nav-tier3"), A = u.find(".nav-mobile"), k = $("#nav-search-form-mobile"), x = A.find(".search"), D = A.find(".search-input"), T = m.find(".btn-back"), S = A.find(".nav-screen-mobile"), H = A.find(".nav-menu-button"), F = $(".nav-screen"), z = $("#nav-search-form"), N = m.find(".search"), I = m.find(".search-input"), O = (I.find(".search-text"),
        m.find("a")), q = $(".cbyo-nav"), L = $(".nav-mobile-cbyo").find(".nav-menu-button"), M = "section1", j = !1, U = !1, R = 0, W = !1, E = 0, _ = function (t) {
            var e = u.outerHeight();
            t - 1 > d ? $window.scrollTop() > e && u.filter(":not(:animated)").addClass("nav-up") : t + 1 < d && u.filter(":not(:animated)").removeClass("nav-up"),
                d = t;
            if (window.isNavLinkClicked) {
                u.filter(":not(:animated)").addClass("nav-up");
            }
            window.isNavLinkClicked = false;
        },
        headerOnScrollInIE = function (t) {

            var e = u.outerHeight();
            var headerHeight = u.outerHeight();
            B(t);
            $(".nav-sticky").css('transition', 'none');
            t - 1 > d ? $window.scrollTop() > e && (u.addClass("nav-up-ie"), $(".nav-sticky").css("margin-top", "0px")) : t + 1 < d && (u.removeClass("nav-up-ie"), $(".nav-sticky").css("margin-top", headerHeight + "px")),
                d = t;

            if (window.isNavLinkClicked) {
                u.addClass("nav-up-ie");
                $(".nav-sticky").css("margin-top", "0px");
            }
            window.isNavLinkClicked = false;

            /**
             * Sticky nav IE issue fix start
             */
            $window.scrollTop() > e ? (u.hasClass("nav-up-ie") && c.addClass("nav-padding")) : c.removeClass("nav-padding");
            /**
             * Sticky nav IE issue fix end
             */
        },
        B = function (t) {
            t >= u.outerHeight() ? u.removeClass("unscrolled") : u.addClass("unscrolled")
        }, V = function () {
            var t = u.outerHeight();
            $window.scrollTop() > t ? (u.hasClass("nav-up") ? u.hasClass("nav-up") && c.removeClass("global-nav-sticky") : c.addClass("global-nav-sticky"),
                u.css({
                    transition: "top 0.5s ease-in-out"
                }),
                c.addClass("nav-padding")) : (c.removeClass("global-nav-sticky"),
                    u.css({
                        transition: "none"
                    }),
                    c.removeClass("nav-padding"))
        }, Y = function () {
            function t() {
                i.show(),
                    $(".cbyo-save-thankyou").hide()
            }
            var e = $(".cbyo-nav")
                , i = $(".cbyo-save-configuration form")
                , n = function () {
                    i.hide(),
                        $(".cbyo-save-thankyou").show()
                };
            APP.globalForms.initForm(i, n),
                cbyoBuildConfig.products.length > 0 && (e.find(".divider, ul").show(),
                    $(".nav-mobile-cbyo").addClass("visible")),
                $(".cbyo-save-configuration-link").click(function () {
                    t()
                }),
                i.submit(function () {
                    $.fancybox.update()
                }),
                $(".cbyo-start-over-btn").click(function () {
                    event.preventDefault(),
                        $.each(cbyoBuildConfig.products, function (t, e) {
                            Cookies.remove("cbyo-" + e.id)
                        }),
                        Cookies.remove("cbyo-build"),
                        Cookies.remove("cbyo-dealer"),
                        window.location.href = this.href
                })
        }, Q = function () {
            m.scrollTop() > 30 && setTimeout(function () {
                m.animate({
                    scrollTop: 0
                }, 0)
            }, 0)
        }, G = function () {
            switch (dt(),
            u.removeClass("open"),
            nt(),
            it(),
            j = !1,
            R = 0,
            f.css("overflow", ""),
            c.css("overflow", ""),
            h.css({
                left: 0,
                height: ""
            }),
            $(".content").css("min-width", ""),
            m.removeClass("active"),
            b.removeClass("active"),
            y.removeClass("active"),
            //N.removeClass("active"),
            //I.removeClass("active"),
            g.removeClass("active"),
            P.removeClass("active"),
            C.removeClass("active"),
            A.removeClass("open"),
            v.removeClass("open"),
            D.removeClass("active"),
            F.removeClass("active"),
            S.removeClass("active"),
            o) {
                case "mobile":
                    A.css("height", ""),
                        S.css({
                            height: "0px",
                            top: "0px"
                        }),
                        m.css({
                            transition: "left 0s",
                            left: $window.width()
                        }),
                        b.css({
                            transition: "all 0s",
                            width: ""
                        }),
                        y.css({
                            transition: "all 0s",
                            width: ""
                        });
                    break;
                case "tablet":
                    A.css("height", ""),
                        m.css({
                            transition: "left 0s",
                            left: $window.width()
                        }),
                        b.css({
                            transition: "all 0s",
                            width: ""
                        }),
                        y.css({
                            transition: "all 0s",
                            width: ""
                        });
                    break;
                case "desktop":
                    b.css({
                        transition: "all 0s",
                        top: u.outerHeight(),
                        width: "auto",
                        opacity: 0
                    }),
                        w.css({
                            //top: "0px",
                            left: "0px",
                            width: ""
                        }),
                        y.css({
                            transition: "top 0s",
                            top: u.outerHeight(),
                            opacity: 0,
                            width: ""
                        }),
                        v.css({
                            left: "auto",
                            width: ""
                        }),
                        m.css({
                            left: "auto",
                            width: "auto",
                            height: u.outerHeight()
                        })
            }
        }, X = function () {
            dt();
            var t = 0;
            switch (u.addClass("open"),
            o) {
                case "mobile":
                    $window.scrollTop(0),
                        Q(),
                        t = 40,
                        i = w,
                        h.css({
                            height: $window.height()
                        }),
                        D.removeClass("active"),
                        w.css({
                            top: u.outerHeight(),
                            width: "100%"
                        }),
                        b.css({
                            top: u.outerHeight(),
                            width: "100%"
                        }),
                        y.css({
                            top: u.outerHeight(),
                            width: "100%"
                        }),
                        m.addClass("active"),
                        w.addClass("active"),
                        y.css({
                            transition: "left 0s",
                            left: $window.width()
                        }),
                        R < 2 ? (w.css({
                            transition: "left 0s",
                            left: 0
                        }),
                            b.css({
                                transition: "left 0s",
                                left: $window.width()
                            })) : (w.css({
                                transition: "left 0s",
                                left: 0 - $window.width()
                            }),
                                w.css({
                                    transition: "left .5s ease-in-out",
                                    left: 0
                                }),
                                b.css({
                                    transition: "left .5s ease-in-out",
                                    left: $window.width()
                                })),
                        A.css({
                            height: $window.height()
                        }),
                        m.css({
                            width: $window.width() - t,
                            left: $window.width(),
                            height: $window.height()
                        }),
                        S.css("height", $window.height()),
                        h.css("left", 0 - ($window.width() - t)),
                        K();
                    break;
                case "tablet":
                    $window.scrollTop(0),
                        Q(),
                        t = 300,
                        i = w,
                        h.css({
                            height: $window.height()
                        }),
                        D.removeClass("active"),
                        w.css({
                            top: u.outerHeight(),
                            width: "",
                            height: ""
                        }),
                        b.css({
                            top: u.outerHeight(),
                            width: ""
                        }),
                        y.css({
                            top: u.outerHeight(),
                            width: ""
                        }),
                        m.addClass("active"),
                        w.addClass("active"),
                        y.css({
                            transition: "left 0s",
                            left: $window.width()
                        }),
                        R < 2 ? (w.css({
                            transition: "left 0s",
                            left: 0
                        }),
                            b.css({
                                transition: "left 0s",
                                left: $window.width()
                            })) : (w.css({
                                transition: "left 0s",
                                left: 0 - $window.width()
                            }),
                                w.css({
                                    transition: "left .5s ease-in-out",
                                    left: 0
                                }),
                                b.css({
                                    transition: "left .5s ease-in-out",
                                    left: $window.width()
                                })),
                        A.css({
                            height: $window.height()
                        }),
                        m.css({
                            width: $window.width() - t,
                            right: $window.width(),
                            height: $window.height()
                        }),
                        S.css("height", $window.height()),
                        h.css("left", 0 - ($window.width() - t));
                    break;
                case "desktop":
                    m.css({
                        width: "auto",
                        left: "auto",
                        height: "auto"
                    })
            }
            R = 1
        }, J = function (e, n) {
            dt(),
                W = !1;
            var a = 0;
            switch (b.removeClass("active"),
            y.removeClass("active"),
            o) {
                case "mobile":
                    Q(),
                        a = 40,
                        1 == R ? (w.css({
                            transition: "left .5s ease-in-out",
                            left: 0 - ($window.width() + a)
                        }),
                            b.css({
                                transition: "left 0s",
                                left: $window.width(),
                                width: "100%"
                            })) : (b.css({
                                transition: "left 0s",
                                left: 0 - $window.width(),
                                width: "100%"
                            }),
                                y.css({
                                    left: $window.width()
                                })),
                        t = $(n),
                        $(n).addClass("active"),
                        $(n).css({
                            transition: "left .5s ease-in-out",
                            left: 0,
                            opacity: 1,
                            height: ""
                        }),
                        i = $(n),
                        K();
                    break;
                case "tablet":
                    Q(),
                        a = 300,
                        1 == R ? (w.css({
                            transition: "left .5s ease-in-out",
                            left: 0 - ($window.width() + a)
                        }),
                            b.css({
                                transition: "left 0s",
                                left: $window.width()
                            })) : (b.css({
                                transition: "left 0s",
                                left: 0 - $window.width()
                            }),
                                y.css({
                                    left: $window.width()
                                })),
                        t = $(n),
                        $(n).addClass("active"),
                        $(n).css({
                            transition: "left .5s ease-in-out",
                            left: 0,
                            opacity: 1,
                            height: ""
                        }),
                        i = $(n),
                        K();
                    break;
                case "desktop":
                    G(),
                        g.removeClass("active"),
                        P.removeClass("active"),
                        e.addClass("active"),
                        //l = w.position().left + e.position().left, 
                        l = e.offset().left - $(".wrapper").offset().left,/*After issue 59 fix**/
                        t = $(n),
                        $(n).addClass("active"),
                        $(n).css({
                            transition: "height 0s",
                            height: "auto"
                        });
                    var s = $(n).outerHeight();
                    $(n).addClass("active"),
                        $(n).css({
                            transition: "height 0s, top 0s",
                            height: "0px",
                            top: u.outerHeight() - 1
                        }),
                        $(n).css({
                            transition: "left 0s, opacity .5s ease-in-out, height .5s ease-in-out",
                            left: l,
                            height: s,
                            opacity: 1
                        })
            }
            R = 2
        }, Z = function (n, a) {
            dt();
            var s = 0;
            switch (o) {
                case "mobile":
                    Q(),
                        s = 40,
                        e = $(a),
                        b.css({
                            transition: "left .5s ease-in-out",
                            left: 0 - ($window.width() + s)
                        }),
                        y.css({
                            transition: "left 0s",
                            left: $window.width()
                        }),
                        $(a).addClass("active"),
                        $(a).css({
                            transition: "left .5s ease-in-out",
                            left: 0,
                            width: "",
                            opacity: "1",
                            height: "auto"
                        }),
                        i = $(a),
                        K();
                    break;
                case "tablet":
                    Q(),
                        s = 300,
                        e = $(a),
                        b.css({
                            transition: "left .5s ease-in-out",
                            left: 0 - ($window.width() + s)
                        }),
                        y.css({
                            transition: "left 0s",
                            left: $window.width()
                        }),
                        $(a).addClass("active"),
                        $(a).css({
                            transition: "left .5s ease-in-out",
                            left: 0,
                            width: "",
                            opacity: "1",
                            height: "auto"
                        }),
                        i = $(a),
                        K();
                    break;
                case "desktop":
                    var r = .4;
                    P.removeClass("active"),
                        C.removeClass("active"),
                        tt(),
                        n.addClass("active"),
                        (e = $(a)).addClass("active");
                    var tWidth = t.outerWidth();
                    var d = (h.width() - (tWidth + Number(e.attr("data-default-width")))) / 2;
                    l + t.width() + Number(e.attr("data-default-width")) < h.width() && (d = l,
                        r = 0);
                    var c, f = d + tWidth - 1, p = t.outerHeight();
                    t.css({
                        transition: "left .5s ease-in-out",
                        left: d + "px",
                        top: u.outerHeight() - 1
                    }),
                        Number(e.attr("data-default-height")) > p ? (c = Number(e.attr("data-default-height"))) < e.find(".content").outerHeight() + 100 && (c = "auto") : c = p,
                        0 == W ? (e.find(".content").css({
                            "min-width": Number(e.attr("data-default-width")),
                            "transition-delay": "1s"
                        }),
                            e.css({
                                transition: "height 0s ease-in-out, width .5s ease-in-out, opacity .5s",
                                "transition-delay": r + "s",
                                left: f + "px",
                                opacity: 1,
                                width: Number(e.attr("data-default-width")),
                                height: c
                            })) : e.css({
                                transition: "height 0s ease-in-out, width 0s, opacity 0s",
                                "transition-delay": "0s",
                                left: f + "px",
                                opacity: 1,
                                width: Number(e.attr("data-default-width")),
                                height: c
                            }),
                        W = !0
            }
            R = 3
        }, K = function () {
            setTimeout(function () {
                b.each(function () {
                    $(this).css("height", 0)
                }),
                    y.each(function () {
                        $(this).css("height", 0)
                    }),
                    i.css("height", "")
            }, 1e3)
        }, tt = function () {
            y.each(function () {
                var t = $(this);
                t.removeClass("active"),
                    t.css({
                        transition: "all 0s",
                        width: "0px",
                        opacity: 0,
                        height: Number(t.attr("data-default-height")),
                        top: u.outerHeight() - 1
                    })
            })
        }, et = function () {
            var e, i = 1, a = !1, o = $(".wrapper").outerWidth() - t.innerWidth();
            for ($window.width() < o + t.width() && (o = $window.width() - t.width()),
                i = 1; i <= 3; i++)
                n = 0,
                    M = "section" + i,
                    a = !1,
                    $("." + M).each(function () {
                        (e = $(this)).find(".col1").length > 0 && (a = !0)
                    }),
                    1 == a ? ($("." + M).css("width", o),
                        $("." + M).attr("data-default-width", o)) : ($("." + M).css("width", 400),
                            $("." + M).attr("data-default-width", 400))
        }, it = function () {
            var t, e = 1;
            for (e = 1; e <= 3; e++)
                M = "section" + e,
                    $("." + M).each(function () {
                        (t = $(this)).css("height", ""),
                            t.attr("data-default-height", t.outerHeight())
                    })
        }, nt = function () {
            var t;
            b.each(function () {
                (t = $(this)).css("height", "auto"),
                    t.attr("data-default-height", t.outerHeight())
            })
        }, at = function (t, e) {
            if (0 == $(e).find(".col1").length && "desktop" == o && ($(e).css("height", ""),
                $(e).attr("data-default-height", $(e).height()),
                $(e).outerHeight() > 450)) {
                var i, n, a, s = 0, r = $(e).outerHeight(), l = $(e).find(".content ul");
                if (l.length > 1)
                    i = '<div class="col1"></div><div class="col2"></div>',
                        $(e).find(".content").append(i),
                        n = $(e).find(".col1"),
                        a = $(e).find(".col2"),
                        l.each(function () {
                            var t = $(this);
                            (s += t.height()) < r / 2 ? n.append(t) : a.append(t)
                        });
                else {
                    var d = l.find("li")
                        , c = Math.ceil(d.length / 2)
                        , f = 0;
                    i = '<div class="col1"><ul></ul></div><div class="col2"><ul></ul></div>',
                        $(e).find(".content").append(i),
                        n = $(e).find(".col1"),
                        a = $(e).find(".col2"),
                        l.addClass("remove-this"),
                        d.each(function () {
                            var t = $(this);
                            f <= c ? n.find("ul").append(t) : a.find("ul").append(t),
                                f++
                        }),
                        $(e).find(".remove-this").remove()
                }
            }
        }, ot = function () {
            P.each(function () {
                var t = $(this);
                t.closest(".nav-tier2");
                at(0, "#" + t.attr("data-target"))
            }),
                C.each(function () {
                    var t = $(this);
                    t.closest(".nav-tier2");
                    at(0, "#" + t.attr("data-target"))
                })
        }, st = function () {
            o = "mobile",
                s = rt().width,
                r = $window.height(),
                $window.width() > 767 && (o = "tablet"),
                $window.width() > 1024 && (o = "desktop")
        }, rt = function () {
            var t = window
                , e = "inner";
            return "innerWidth" in window || (e = "client",
                t = document.documentElement || document.body),
                {
                    width: t[e + "Width"],
                    height: t[e + "Height"]
                }
        }, lt = function () {
            dt(),
                a = setTimeout(function () {
                    G()
                }, 600)
        }, dt = function () {
            clearTimeout(a)
        }, ct = function (t, e) {
            "_self" != e ? window.open(t) : window.location.href = t
        }, ft = function () {
            V(),
                $window.on("scroll", function () {
                    var isIE = detectIE();
                    if (!isIE || isIE > 11) {
                        if (!c.hasClass("auto-scrolling")) {
                            "large" == APP.viewport && G();
                            var t = $window.scrollTop();
                            B(t),
                                _(t),
                                V(),
                                b.css({
                                    transition: "top 0s",
                                    top: u.outerHeight() - 1
                                }),
                                y.css({
                                    transition: "top 0s",
                                    top: u.outerHeight() - 1
                                }),
                                u.hasClass("open") || m.css({
                                    height: u.outerHeight() - 1
                                })
                            if ($(window).width() > 1024) {
                                headerScrolledAlignment();
                            }

                        }
                    } else {
                        // var t = $window.scrollTop();
                        // headerOnScrollInIE(t);
                    }

                }),
                $window.on("resize", function (t) {
                    st(),
                        "desktop" == o ? (m.css({
                            transition: "left 0s",
                            left: ""
                        }),
                            ot(),
                            G()) : (m.css({
                                transition: "left 0s",
                                left: $window.width()
                            }),
                                s != rt().width && r != $window.height() && (ot(),
                                    D.hasClass("active") || G()))
                }),
                $window.on("orientationchange", function () {
                    st(),
                        ot(),
                        D.hasClass("active") || G()
                }),
                p.hasClass("cbyo-nav-container") && Y(),
                N.click(function () {

                    var t = $(this);
                    1 == t.hasClass("active") ? (N.removeClass("active"),
                        I.removeClass("active")) : (t.addClass("active"),
                            I.addClass("active"),
                            I.find("input").focus())

                }),
                x.click(function () {
                    $(this);
                    D.toggleClass("active")
                    D.find("input").focus()
                }),
                D.find("input").click(function () {
                    A.css({
                        height: $window.height()
                    }),
                        S.css("height", $window.height()),
                        S.addClass("active")
                }),
                g.mouseenter(function (event) {
                    if (!$(event.target).hasClass("primary-link")) { return; }
                    var t = $(this);
                    "desktop" == o && (J(t, "#" + t.attr("data-target")),
                        F.addClass("active"),
                        et())
                }),
                b.mouseenter(function () {
                    dt()
                }),
                y.mouseenter(function () {
                    dt()
                }),
                g.click(function () {
                    var t = $(this);
                    if ("" != t.attr("data-target"))
                        "desktop" != o && (J(t, "#" + t.attr("data-target")),
                            F.addClass("active"));
                    else if ("" != t.attr("href") || "#" != t.attr("href") || void 0 != t.attr("href") || null != t.attr("href")) {
                        var e = t.attr("href")
                            , i = "_self";
                        "" == t.attr("target") && void 0 == t.attr("target") && null == t.attr("target") || (i = t.attr("target")),
                            ct(e, i)
                    }
                }),
                P.click(function (t) {
                    if ($(this).attr("class").indexOf("allow-click") === -1) {
                        t.preventDefault();
                    }
                    var e = $(this);
                    if ("" != e.attr("data-target"))
                        Z(e, "#" + e.attr("data-target"));
                    else if ("" != e.attr("href") || "#" != e.attr("href") || void 0 != e.attr("href") || null != e.attr("href")) {
                        var i = e.attr("href")
                            , n = "_self";
                        "" == e.attr("target") && void 0 == e.attr("target") && null == e.attr("target") || (n = e.attr("target")),
                            ct(i, n)
                    }
                    F.addClass("active")
                }),
                C.click(function (t) {
                    t.preventDefault();
                    var e = $(this);
                    if ("" != e.attr("data-target"))
                        Z(e, "#" + e.attr("data-target"));
                    else if ("" != e.attr("href") || "#" != e.attr("href") || void 0 != e.attr("href") || null != e.attr("href")) {
                        var i = e.attr("href")
                            , n = "_self";
                        "" == e.attr("target") && void 0 == e.attr("target") && null == e.attr("target") || (n = e.attr("target")),
                            ct(i, n)
                    }
                    F.addClass("active")
                }),
                H.click(function (t) {
                    E = $(window).scrollTop();
                    $(this);
                    0 == j ? (f.css("overflow", "hidden"),
                        c.css("overflow", "hidden"),
                        X(),
                        j = !0,
                        A.addClass("open"),
                        v.addClass("open")) : (G(),
                            j = !1,
                            A.removeClass("open"),
                            v.removeClass("open")),
                        t.preventDefault()
                }),
                L.click(function (t) {
                    $(this);
                    q.toggleClass("active"),
                        0 == U ? (U = !0,
                            q.css("height", $window.height())) : (U = !1,
                                q.css("height", "")),
                        t.preventDefault()
                }),
                S.click(function (t) {
                    G(),
                        t.preventDefault()
                }),
                T.click(function (e) {
                    switch (R) {
                        case 1:
                            G(),
                                j = !1;
                            break;
                        case 2:
                            X();
                            break;
                        case 3:
                            J("", "#" + t.attr("id"))
                    }
                    $(window).scrollTop(E),
                        e.preventDefault()
                }),
                O.mouseenter(function () {
                    dt()
                }),
                F.mouseenter(function () {
                    lt()
                }),
                I.find("input").focus(function () {
                    F.addClass("active")
                }),
                I.find("input").focusout(function () {
                    F.removeClass("active")
                }),
                I.find("input").keypress(function (t) {
                    var e = $(this);
                    if (13 == t.which)
                        return "" != e.val() && void 0 != e.val() && null != e.val() && z.submit(),
                            !1
                }),
                D.find("input").keypress(function (t) {
                    var e = $(this);
                    if (13 == t.which)
                        return "" != e.val() && void 0 != e.val() && null != e.val() && k.submit(),
                            !1
                })
            I.find(".tt-menu").append($(".search-text")),
                I.find(".tt-menu").css("width", "333px")
        }();
    return st(),
        ot(),
        nt(),
        m.css({
            height: u.outerHeight() - 1
        }),
        {
            init: ft
        },
        f.click(function (event) {
            if (!$(event.target).hasClass('icon-jd_search') && !$(event.target).hasClass('search-input-field')) {
                N.removeClass("active"),
                    I.removeClass("active");
            }

        });
}
function navSticky() {
    return {
        init: function () {
            var t,
                e = $(arguments[0]),
                i = !1, n = $(window),
                a = $("body"),
                o = a.find(".wrapper:first"),
                s = ($(".nav-container"),
                    $(".nav-section")),
                r = e.find(".nav-links"),
                l = e.find(".left-container"),
                d = e.find(".right-container"),
                c = (e.find(".product-id"),
                    e.find(".nav-cta")),
                f = e.find(".nav-arrow-left"),
                h = e.find(".nav-arrow-right");
            if (0 == o.length && (o = n),
                0 != d.length) {
                var u = function () {
                    var t = r.width() + 10
                        , i = c.outerWidth()
                        , n = l.outerWidth();
                    t > o.width() - i - n ? e.addClass("arrows") : e.removeClass("arrows")
                }
                    , p = function () {
                        // s.each(function () {
                        //     var t = $(this).find(".nav-name").text();
                        //     r.append('<div class="nav-link" data-nav-target="">' + t + "</div>")
                        // });
                        var n = function () {
                            t = r.find(".nav-link"),
                                (i = 0 != t.length) && t.first().addClass("active"),
                                u(),
                                i ? e.removeClass("nav-empty") : e.addClass("nav-empty")
                        };
                        n(),
                            events.on("StickyNavUpdated", function (t) {
                                s = $(".nav-section"),
                                    r.find('[data-nav-target="' + t + '"]').remove(),
                                    n()
                            })
                    }
                    , v = []
                    , m = function () {
                        for (var t = 0; t < s.length; t++) {
                            var i = s.eq(t).attr("id");
                            void 0 === i && (i = "nav-div" + (t + 1),
                                s.eq(t).attr("id", i)),
                                e.find(".nav-links .nav-link:eq(" + t + ")").attr("data-nav-target", i),
                                v.push("nav-div" + (t + 1))
                        }
                    }
                    , w = e.offset().top
                    , g = function () {
                        var t = n.scrollTop()
                            , i = e.outerHeight();
                        if (t >= w - i) {
                            if (e.addClass("stuck"),
                                a.addClass("model-detail-nav"),
                                "small" != APP.viewport) {
                                var o = l.outerWidth();
                                r.css({
                                    "margin-left": 0
                                })
                            }
                        } else
                            e.removeClass("stuck"),
                                a.removeClass("model-detail-nav"),
                                "small" != APP.viewport && r.css({
                                    "margin-left": "-" + o + "px"
                                });
                        u()
                    }
                    , b = function () {
                        t.on("click", function () {
                            var t = $(this).data("nav-target")
                                , e = $("#" + t);
                            window.isNavLinkClicked = true;
                            if ($(this).closest(".nav-sticky").attr("class").indexOf("stuck") === -1) {
                                var headerHeight = $(".nav-container").outerHeight();
                                $(window).scrollTop(e.offset().top - headerHeight - 56);
                            } else {
                                $(window).scrollTop(e.offset().top - 56);
                            }

                        })
                    }
                    , P = function () {
                        var t = e.outerHeight()
                            , a = n.scrollTop(),
                            hh = $(".nav-container").outerHeight();
                        s.each(function () {
                            var i = $(this).offset().top - t - 2 - hh
                                , n = i + $(this).outerHeight();
                            if (a >= i && a <= n) {
                                var o = $(this).attr("id");
                                e.find('.nav-links .nav-link[data-nav-target="' + o + '"]').siblings().removeClass("active"),
                                    e.find('.nav-links .nav-link[data-nav-target="' + o + '"]').addClass("active")
                            }
                        });
                        var c = d.outerWidth()
                            , f = l.outerWidth();
                        if ("small" == APP.viewport) {
                            h = o.width();
                            if (i)
                                u = e.find(".nav-links .nav-link.active").offset().left
                        } else {
                            var h = o.width() - c - f;
                            if (i)
                                var u = e.find(".nav-links .nav-link.active").offset().left - f - o.offset().left
                        }
                        Math.abs(u);
                        var p = r.offset().left - o.offset().left
                            , v = Math.abs(p)
                            , m = e.find(".nav-links .nav-link.active").outerWidth()
                            , w = h - u
                            , g = (h - m) / 2
                            , b = g - u;
                        if ("small" == APP.viewport)
                            if (g < v + u) {
                                y = p + b;
                                r.css("left", y + "px")
                            } else if (p < 0) {
                                y = p + v;
                                r.css("left", y + "px")
                            } else {
                                A = l.outerWidth();
                                r.css({
                                    left: A + "px"
                                })
                            }
                        else if (u < 0) {
                            y = Math.abs(u) + (C = r.offset().left - o.offset().left);
                            if ($window.outerWidth() > 767) {
                                y = y + 24
                            }
                            r.css("left", y + "px")
                        } else if (w < m) {
                            var P = m - w
                                , C = r.offset().left - o.offset().left
                                , y = -P + C;
                            r.css("left", y + "px")
                        } else {
                            var A = l.outerWidth();
                            if ($window.outerWidth() > 767) {
                                A = A + 24
                            }
                            r.css({
                                left: A + "px"
                            })
                        }
                    }
                    , C = function () {
                        if (i) {
                            var e = t.first().offset().left
                                , n = t.last().offset().left + t.last().outerWidth()
                                , a = d.offset().left;
                            e + 1 >= l.outerWidth() ? f.addClass("inactive") : f.removeClass("inactive"),
                                n - 1 <= a ? h.addClass("inactive") : h.removeClass("inactive")
                        }
                    }
                    , y = function () {
                        var t = function () {
                            return "small" == APP.viewport ? 100 : 200
                        };
                        f.on("click", function () {
                            if (!f.hasClass("inactive")) {
                                var e = parseFloat(r.css("left").replace("px", "")) + t();
                                r.css({
                                    left: (l.width() < e ? l.width() : e) + "px"
                                }),
                                    setTimeout(function () {
                                        C()
                                    }, 310)
                            }
                        }),
                            h.on("click", function () {
                                if (!h.hasClass("inactive")) {
                                    var i = parseFloat(r.css("left").replace("px", "")) - t()
                                        , n = (r.outerWidth(),
                                            e.width(),
                                            l.outerWidth(),
                                            d.outerWidth(),
                                            e.width() - (r.width() + d.width()));
                                    r.css({
                                        left: (n > i ? n : i) + "px"
                                    }),
                                        setTimeout(function () {
                                            C()
                                        }, 310)
                                }
                            })
                    }
                    , A = function () {
                        "large" != APP.viewport && r.swipe({
                            swipe: function (i, n, a, s, d, f) {
                                if ("left" == n || "right" == n) {
                                    var h = r.width()
                                        , u = t.first().offset().left
                                        , p = t.last().offset().left + e.find(".nav-links .nav-link").last().outerWidth()
                                        , v = c.offset().left
                                        , m = l.outerWidth()
                                        , w = l.outerWidth()
                                        , g = c.outerWidth();
                                    if ("small" != APP.viewport && e.hasClass("stuck"))
                                        $ = o.width() - g - w;
                                    else
                                        var $ = o.width();
                                    var b = r.offset().left
                                        , P = h - $;
                                    if ("small" != APP.viewport)
                                        C = w;
                                    else
                                        var C = 0;
                                    if ("left" == n) {
                                        if (p - 1 <= v)
                                            return !1;
                                        y = b - $ / 3;
                                        r.css({
                                            left: "-" + Math.min(Math.abs(y), Math.abs(P)) + "px"
                                        })
                                    } else if ("right" == n) {
                                        if (u + 1 >= m)
                                            return !1;
                                        var y = b + $ / 3;
                                        r.css({
                                            left: Math.min(y, C) + "px"
                                        })
                                    }
                                }
                            },
                            threshold: 30,
                            excludedElements: ""
                        })
                    };
                !function () {
                    p(),
                        m(),
                        g(),
                        b(),
                        P(),
                        C(),
                        y()//,
                    // A()
                }(),
                    events.on("productSummarySliderLoaded", function () {
                        w = e.offset().top
                    }),
                    $(document).on("scroll", function () {
                        g(),
                            P(),
                            C()
                    })
                    ,
                    $(window).on("resize", function () {
                        p(),
                            m(),
                            g(),
                            b(),
                            P(),
                            C(),
                            y()
                    })
            }
        }
    }
}
function tableComp() {
    return {
        init: function () {
            var t = $(arguments[0])
                , e = (t.find("> table"),
                    t.find("> table > thead"));
            t.find("> table > tbody > tr");
            t.find("> table > tbody > tr > td").each(function () {
                var t = e.find("th").eq($(this).index()).html();
                //t.length > 0 ? $(this).prepend('<span class="cell-title">' + t + "</span>") : $(this).addClass("not-title")
            });
            var i = function (t) {
                for (var e = 0, i = 0; i < t.length; i++) {
                    t[i].css({
                        height: "auto"
                    });
                    var n = t[i].outerHeight();
                    n > e && (e = n,
                        t[i])
                }
                for (i = 0; i < t.length; i++)
                    t[i].css({
                        height: e + "px"
                    })
            }
                , n = function () {
                    t.find("table > tbody > tr > td").each(function () {
                        $(this).find(".cell-title, .cell-content").css({
                            height: "auto"
                        });
                        var t = Math.max($(this).find(".cell-title").height(), $(this).find(".cell-content").height());
                        $(this).find(".cell-title, .cell-content").css({
                            height: t + "px"
                        })
                    })
                }
                , a = function () {
                    var e = []
                        , n = 0
                        , a = t.find("table.table-reflow > tbody > tr").length
                        , o = a + 1;
                    if (t.find("table.table-reflow > thead").attr("data-width")) {
                        var s = t.find("table.table-reflow > thead")
                            , l = t.find("table.table-reflow > thead").attr("data-width");
                        s.css({
                            width: l + "%"
                        }),
                            t.find("table.table-reflow > tbody > tr").each(function () {
                                var t = $(this).attr("data-width");
                                $(this).css({
                                    width: t + "%"
                                })
                            })
                    } else {
                        var r = 100 / o;
                        t.find("table.table-reflow > thead").css({
                            width: r + "%"
                        }),
                            t.find("table.table-reflow > tbody > tr").each(function () {
                                $(this).css({
                                    width: r + "%"
                                })
                            })
                    }
                    for (t.find("table.table-reflow > thead > tr > th").each(function () {
                        e.push([]),
                            e[n].push($(this)),
                            n++
                    }),
                        c = 0; c < e.length; c++)
                        if (0 != c)
                            for (d = 0; d < a; d++)
                                e[c].push(t.find("table.table-reflow > tbody > tr:eq(" + (e[c].length - 1) + ") > td:not(.first):eq(" + (c - 1) + ")"));
                        else
                            for (var d = 0; d < a; d++)
                                e[c].push(t.find("table.table-reflow > tbody > tr:eq(" + (e[c].length - 1) + ") .first"));
                    for (var c = 0; c < e.length; c++)
                        i(e[c])
                }
                , o = function () {
                    t.find("table.table-reflow > thead").css({
                        width: "auto"
                    }),
                        t.find("table.table-reflow > tbody > tr").each(function () {
                            $(this).css({
                                width: "auto"
                            })
                        }),
                        t.find("table.table-reflow > tbody > tr .first").css({
                            height: "auto"
                        }),
                        t.find("table.table-reflow > tbody > tr > td:not(.first)").css({
                            height: "auto"
                        }),
                        t.find("table.table-reflow > thead > tr > th").css({
                            height: "auto"
                        })
                };
            if ("large" != APP.viewport && n(),
                $(window).on("resize", function () {
                    "large" != APP.viewport && n()
                }),
                t.find("table").hasClass("table-reflow") && "large" == APP.viewport && a(),
                $(window).on("resize", function () {
                    t.find("table").hasClass("table-reflow") && ("large" == APP.viewport ? a() : o())
                }),
                t.find("table").hasClass("table-overflow")) {
                var s = $(window)
                    , l = t.find("table.table-overflow");
                if (t.find("table").hasClass("table-reflow"))
                    var r = l.find("tbody > tr > th:first-child").clone()
                        , d = l.find("thead").clone();
                else
                    var r = l.find("thead").clone()
                        , d = l.find("thead, tbody").clone();
                t.find("table").hasClass("table-reflow") ? l.wrap('<div class="overflow-container overflow-container-reflow" />') : l.wrap('<div class="overflow-container" />'),
                    t.find("table").hasClass("table-reflow") ? l.after('<table class="sticky-thead"><tr></tr></table>') : l.after('<table class="sticky-thead" />'),
                    l.find("tbody th").length > 0 && l.after('<table class="sticky-col" /><table class="sticky-intersect" />');
                var c = t.find(".sticky-thead")
                    , f = t.find(".sticky-col")
                    , h = t.find(".sticky-intersect")
                    , u = t.find(".overflow-container");
                t.find("table").hasClass("table-reflow") ? (c.find("tr").html("<th>" + l.find("thead th:first-child").html() + "</th>").append(r),
                    f.append(d)) : (c.append(r),
                        f.append(d).find("thead th:gt(0)").remove().end().find("tbody td").remove()),
                    h.html("<thead><tr><th>" + l.find("thead th:first-child").html() + "</th></tr></thead>");
                var p = function () {
                    if (t.find("table").hasClass("table-reflow")) {
                        var e = 100 / t.find(".overflow-container-reflow table.sticky-thead tr th").length;
                        c.find("th").css({
                            width: e + "%"
                        }),
                            l.find("thead tr th").each(function (t) {
                                f.find("thead tr th").eq(t).height($(this).height())
                            }),
                            h.find("thead > tr > th").width(l.find("thead tr th:first-child").width())
                    } else
                        l.find("thead th").each(function (t) {
                            c.find("th").eq(t).width($(this).width())
                        }),
                            l.find("tr").each(function (t) {
                                f.find("tr").eq(t).height($(this).height())
                            });
                    c.width(l.width()),
                        t.find("table").hasClass("table-reflow") ? (f.width(l.find("thead th").outerWidth()),
                            f.find("thead").width(l.find("thead th").outerWidth())) : f.find("th").add(h.find("th")).width(l.find("thead th").width())
                }
                    , v = function () {
                        var e = 0;
                        t.find("table").hasClass("table-reflow") ? l.find("tbody tr th:first-child").each(function () {
                            e = Math.max(e, $(this).outerHeight())
                        }) : l.find("thead tr th").each(function () {
                            e = Math.max(e, $(this).outerHeight())
                        }),
                            h.find("thead > tr > th").css({
                                height: e + "px"
                            })
                    }
                    , w = function () {
                        var t = g();
                        l.height() > u.height() ? u.scrollTop() > 0 ? c.add(h).css({
                            opacity: 1,
                            top: u.scrollTop()
                        }) : c.add(h).css({
                            opacity: 0,
                            top: 0
                        }) : s.scrollTop() > l.offset().top && s.scrollTop() < l.offset().top + l.outerHeight() - t ? c.add(h).css({
                            opacity: 1,
                            top: s.scrollTop() - l.offset().top
                        }) : c.add(h).css({
                            opacity: 0,
                            top: 0
                        })
                    }
                    , m = function () {
                        u.scrollLeft() > 0 ? f.add(h).css({
                            opacity: 1,
                            left: u.scrollLeft()
                        }) : f.css({
                            opacity: 0
                        }).add(h).css({
                            left: 0
                        })
                    }
                    , g = function () {
                        var t = 0;
                        return l.find("tbody tr:lt(3)").each(function () {
                            t += $(this).height()
                        }),
                            t > .25 * s.height() && (t = .25 * s.height()),
                            t += c.height()
                    };
                "large" == APP.viewport && (p(),
                    v(),
                    l.parent(".overflow-container").on("scroll", function () {
                        w(),
                            m()
                    }),
                    $(document).on("scroll", function () {
                        w(),
                            m()
                    })),
                    $(window).on("resize", function () {
                        "large" == APP.viewport && (p(),
                            v(),
                            l.parent(".overflow-container").on("scroll", function () {
                                w(),
                                    m()
                            }),
                            $(document).on("scroll", function () {
                                w(),
                                    m()
                            }))
                    })
            }
        }
    };
}
function videoGallery() {
    var t = function () {
        return "large" == APP.viewport ? 6 : 3
    };
    return {
        init: function () {
            var e = $(arguments[0])
                , i = e.find(".playlist")
                , n = i.find(".playlist-wrapper")
                , a = e.find(".main-video")
                , o = Handlebars.compile(a.find(".youtube-template").html())
                , s = Handlebars.compile(a.find(".local-template").html())
                , jd = Handlebars.compile(a.find(".jd-hosted-template").html())
                , l = i.find(".playlist-items")
                , r = l.find(".playlist-item")
                , d = i.find(".show-more")
                , c = Handlebars.compile(i.find(".entry-template").html())
                , f = r.filter(".youtube")
                , h = $('<div class="now-playing-overlay"><div class="now-playing"><span class="text">' + e.data("now-playing") + "</span></div></div>")
                , u = t()
                , p = r.length > 0
                , v = function () {
                    if ("large" == APP.viewport) {
                        var t = a.height();
                        i.height(t)
                    }
                }
                , w = function () {
                    r.on("click", function () {
                        var t = $(this)
                            , i = "";
                        if (!t.hasClass("active")) {
                            if (t.hasClass("youtube")) {
                                a.closest('.row').removeClass('hosted-frame');
                                var n = t.data("youtube-id");
                                i = o({
                                    id: n,
                                    autoplay: !0
                                }),
                                    e.find(".main-video").html(i)
                            } else if (t.hasClass("hosted")) {
                                a.closest('.row').removeClass('hosted-frame');
                                var l = t.data("mp4")
                                    , r = t.data("webm")
                                    , d = t.data("poster")
                                    , c = t.data("captions")
                                    , f = t.data("captions-label")
                                    , u = !!t.data("captions");
                                i = s({
                                    mp4: l,
                                    webm: r,
                                    poster: d,
                                    captions: c,
                                    captionsLabel: f,
                                    hasCaptions: u,
                                    autoplay: !0
                                }),
                                    e.find(".main-video").html(i),
                                    videojs(e.find(".video-player-comp > video")[0], {}, function () { })
                            } else if (t.hasClass("jd-hosted")) {
                                a.closest('.row').addClass('hosted-frame');
                                var ja = jd({ url: t.data("url") });
                                e.find(".main-video").html(ja);
                            }
                            t.siblings(".playlist-item").removeClass("active"),
                                t.addClass("active"),
                                t.find(".thumb").append(h)//,
                            // "large" != APP.viewport && $("html, body").scrollTop(a.offset().top)
                        }
                    })
                }
                , m = function () {
                    (u += t()) >= r.length && d.hide(),
                        g()
                }
                , g = function () {
                    var e = t();
                    u = u > e ? u : e,
                        r.filter(":lt(" + u + ")").show()
                }
                , b = function (t) {
                    var e = t.data("youtube-id");
                    e && "" != e && gapi.client.load("youtube", "v3", function () {
                        gapi.client.youtube.videos.list({
                            id: e,
                            part: "snippet"
                        }).execute(function (e) {
                            "error" in e || (e.items.length > 0 ? (e.items[0],
                                t.html(c({
                                    id: e.items[0].id,
                                    title: e.items[0].snippet.title,
                                    image: e.items[0].snippet.thumbnails ? e.items[0].snippet.thumbnails.medium.url : null
                                })),
                                t.hasClass("active") && y()) : t.remove())
                        })
                    })
                }
                , P = function (t) {
                    var n = [];
                    gapi.client.load("youtube", "v3", function () {
                        var a = function () {
                            if ($.each(n, function (t, e) {
                                var i = $('<div class="playlist-item youtube clearfix">');
                                i.attr("data-youtube-id", e.id),
                                    i.html(c(e)),
                                    l.append(i)
                            }),
                                r = i.find(".playlist-item"),
                                !p) {
                                var t = r.first().data("youtube-id")
                                    , a = o({
                                        id: t
                                    });
                                e.find(".main-video").html(a)
                            }
                            w(),
                                g(),
                                y()
                        }
                            , s = function (e) {
                                gapi.client.youtube.playlistItems.list({
                                    part: "snippet,status",
                                    playlistId: t,
                                    maxResults: 50,
                                    pageToken: e || ""
                                }).execute(function (t) {
                                    for (var e = 0; e < t.items.length; e++)
                                        "public" == t.items[e].status.privacyStatus && n.push({
                                            id: t.items[e].snippet.resourceId.videoId,
                                            title: t.items[e].snippet.title,
                                            image: t.items[e].snippet.thumbnails ? t.items[e].snippet.thumbnails.medium.url : null
                                        });
                                    "string" == typeof t.nextPageToken ? s(t.nextPageToken) : a()
                                })
                            };
                        s()
                    })
                }
                , C = function () {
                    var t = e.data("playlist");
                    t && "" != t && P(t),
                        f.length > 0 && f.each(function (t, e) {
                            var i = $(this);
                            b(i)
                        })
                }
                , y = function () {
                    r.first().addClass("active"),
                        r.first().find(".thumb").append(h)
                };
            googleLoaded ? C() : events.on("googleAPIReady", C),
                v(),
                $(window).on("load", function () {
                    // $window.resize($.throttle(250, function () {
                    //     v(),
                    //         g()
                    // }))
                }),
                d.click(function (t) {
                    t.preventDefault();
                    var e = r.filter(":eq(" + u + ")");
                    m(),
                        $("html, body").scrollTop(e.offset().top)
                }),
                n.scroll(function () {
                    100 * n.scrollTop() / (l.height() - n.height()) > 85 && m()
                }),
                w(),
                g(),
                y()
        }
    }
}
var videoOverlay = {
    init: function () {
        function t() {
            for (var t = 0, e = o.length; t < e; t++)
                l["player" + t] = new YT.Player(o[t], {
                    width: 600,
                    height: 400,
                    videoId: s[t],
                    playerVars: {
                        rel: 0
                    },
                    events: {
                        onStateChange: a
                    }
                })
        }
        function e() {
            for (var t = 0, e = o.length; t < e; t++)
                l["player" + t].pauseVideo();
            $(".video-js").each(function () {
                var t = $(this).attr("id");
                videojs(t).pause()
            })
        }
        function i(t) {
            if (t.find(".video-youtube").length > 0)
                for (var e = 0, i = o.length; e < i; e++)
                    t.find(".video-youtube").attr("id") == o[e] && l["player" + e].playVideo();
            if (t.find(".vjs-tech").length > 0) {
                var n = t.find(".vjs-tech").attr("id")
                    , a = videojs(n);
                a.currentTime(0),
                    a.play()
            }
        }
        function n(t, e) {
            t.find(".video-title").length > 0 && ("show" == e ? t.find(".video-title").addClass("active") : t.find(".video-title").removeClass("active"))
        }
        function a(t) {
            var e = !1
                , i = $("#" + t.target.getIframe().parentNode.getAttribute("id"));
            1 == t.data && (e = !0),
                0 == e ? n(i, "show") : n(i, "hide")
        }
        $(arguments[0]);
        var o = []
            , s = []
            , l = {};
        $(".modal.video-modal").on("hidden.bs.modal", function () {
            e()
        }),
            $(".modal.video-modal").on("click", ".flex-prev, .flex-next", function () {
                e()
            }),
            $(".video-overlay").find(".image-cont, .video-button").click(function (t) {
                i($($(this).attr("data-target"))),
                    t.preventDefault()
            }),
            $.when(void $(".video-youtube").each(function () {
                o.push($(this).attr("id")),
                    s.push($(this).attr("data-youtube"))
            })).done(function () {
                youtubeLoaded ? t() : events.on("youtubeAPIReady", t)
            })
    }
}
var isNavLinkClicked = false;
function expandCollapseComponent() {
    return {
        init: function () {
            function t() {
                var t = 0;
                r.removeClass("shown"),
                    d.length > 0 && d.removeClass("shown"),
                    r.each(function () {
                        var e = $(this);
                        t < w && (e.addClass("shown"),
                            e.parent().find("h3").addClass("shown"),
                            t++)
                    })
            }
            function e() {
                m.addClass("active"),
                    w = r.length,
                    r.each(function () {
                        var t = $(this);
                        0 == t.hasClass("active") && (t.addClass("active"),
                            t.find(".expand-collapse-component-item-content").first().slideToggle("slow"))
                    }),
                    t(),
                    setTimeout(function () {
                        $(window).trigger("resize")
                    }, 1e3)
            }
            function i() {
                m.removeClass("active"),
                    //w = v,
                    r.each(function () {
                        var t = $(this);
                        1 == t.hasClass("active") && (t.removeClass("active"),
                            t.find(".expand-collapse-component-item-content").first().slideToggle("slow"))
                    }),
                    t(),
                    setTimeout(function () {
                        $(window).trigger("resize")
                    }, 1e3)
            }
            function n(t) {
                c.removeClass("shown"),
                    f.removeClass("shown"),
                    "expand" == t ? c.addClass("shown") : f.addClass("shown")
            }
            function a(t) {
                u.removeClass("shown"),
                    p.removeClass("shown"),
                    "show" == t ? u.addClass("shown") : p.addClass("shown")
            }
            function o() {
                r.length > v && h.addClass("shown")
            }
            function s() {
                var t = new Date;
                r.each(function () {
                    if ($(this).hasClass("offer-section")) {
                        var e = $(this)
                            , i = new Date(e.attr("data-expiration-date"));
                        t > i && e.remove()
                    }
                }),
                    0 == (r = l.find(">.expand-collapse-component-section >.expand-collapse-component-item")).length && (l.hasClass("nav-section") && events.emit("StickyNavUpdated", l.attr("id")),
                        l.remove())
            }
            var l = $(arguments[0])
                , r = l.find(">.expand-collapse-component-section >.expand-collapse-component-item")
                , d = l.find(".expand-collapse-component-section > h3")
                , c = l.find(".btn-expand-all")
                , f = l.find(".btn-collapse-all")
                , h = l.find(".show-more-container")
                , u = l.find(".btn-show-more")
                , p = l.find(".btn-show-less")
                , v = 5
                , w = 0
                , m = l.find(".expand-collapse-component-section.collapsible");
            m.length > 0 && (v = 9999),
                $(window).on("load", function () {
                    r.find("table").each(function () {
                        var t = $(this)
                            , e = $("<div />", {
                                class: "g-scrollable",
                                html: "<div />"
                            }).insertBefore(t);
                        t.data("scrollWrapper", e),
                            t.appendTo(e.find("div")),
                            t.outerWidth() > t.parent().outerWidth() && t.data("scrollWrapper").addClass("has-scroll"),
                            $(window).on("resize orientationchange", function () {
                                t.outerWidth() > t.parent().outerWidth() ? t.data("scrollWrapper").addClass("has-scroll") : t.data("scrollWrapper").removeClass("has-scroll")
                            })
                    })
                }),
                r.children("h4:not(.no-link)").click(function () {
                    var t = $(this);
                    t.parent().toggleClass("active"),
                        t.parent().find(".expand-collapse-component-item-content").first().slideToggle("slow"),
                        setTimeout(function () {
                            $(window).trigger("resize")
                        }, 1e3)
                    if (t.parent().hasClass('active')) {
                        var url = t.parent().data('url');
                        if (url) {
                            var no_data_str = "<p>data-url not found for this item</p>";
                            var objectHeight = 500;
                            var windowWidth = $(window).width();
                            if (windowWidth > 767 && windowWidth < 992) {
                                objectHeight = 700;
                            } else if (windowWidth > 991) {
                                objectHeight = 750;
                            }
                            var data_str = '<div class="xx-object-wrapper"><iframe width="100%" class="IFRAMEID" frameborder="0" height=' + objectHeight + ' type="text/html" src=' + url + '>Either data not found at given url or This browser does not support object.</iframe></div>';
                            t.parent().find(".expand-collapse-component-item-content").first().html(url ? data_str : no_data_str);
                            $(".IFRAMEID").css("visibility", "hidden");
                            $(".IFRAMEID").on("load", function () {
                                $(this).contents().find(".featured-head").remove();
                                if (!$(this).closest("#competitive-information").length) {
                                    $(this).contents().find('footer').remove();
                                }
                                $(".IFRAMEID").css("visibility", "visible");
                            });
                        }

                    }
                    event.stopPropagation();
                }),
                c.click(function (t) {
                    n("collapse"),
                        a("hide"),
                        e(),
                        t.preventDefault()
                }),
                f.click(function (t) {
                    n("expand"),
                        a("show"),
                        i(),
                        t.preventDefault()
                }),
                u.click(function (e) {
                    w = r.length,
                        t(),
                        a("hide"),
                        e.preventDefault()
                }),
                p.click(function (e) {
                    w = v,
                        t(),
                        a("show"),
                        e.preventDefault()
                }),
                d.click(function (t) {
                    t.preventDefault(),
                        $(this).parent().toggleClass("active")
                }),
                $.when(s()).done(function () {
                    w = v,
                        r.removeClass("active"),
                        setTimeout(function () {
                            // $(window).trigger("resize")
                        }, 1e3),
                        // t(),
                        n("expand"),
                        a("show"),
                        o(),
                        l.css("opacity", 1)
                })
        }
    }
}
function computeModalWidth($this) {
    var containerWidth = $this.outerWidth();
    var $modal = $this.find('.drop-content');
    var modalWidth = $modal.outerWidth();
    var diff = modalWidth - containerWidth;
    if (diff >= 0) {
        var computedMargin;
        if ($modal.closest('.model-specifications-table').length > 0) {
            computedMargin = -2 - diff / 2;
        } else {
            computedMargin = -22 - diff / 2;
        }

        $modal.css('margin-left', computedMargin);
    }
}
function defaultDropDown() {
    $(".dropdown-component").each(function () {
        computeModalWidth($(this));
    });
    $(".dropdown-component").click(function (event) {
        $('html').one('click', function () {
            $(this).find('.drop-content').removeClass('opened');
        });
        $(".model-data-link").click(function (event) {
            $(this).closest('.drop-content').removeClass('opened');
            $(this).closest('.drop-content').siblings('span:not(.sm-mobile-only)').text($(this).find('a').text().trim());
            computeModalWidth($(this).closest(".dropdown-component"));
            $(".model-data-link").removeClass('active');
            $(this).addClass('active');
            event.stopPropagation();
        });
        $(this).find('.drop-content').toggleClass('opened');
        event.stopPropagation();
    });
    $(".default-dropdown").change(function () {
        $(this).prev("span").text($(this).find("option:selected").text());
    });
}
function showMore() {
    $(".plc-show-more>a").click(function () {
        var moreItemsContainer = $(this).closest('.more-items-container'), moreItems = moreItemsContainer.find("div[class^='more-item'],div[class*=' more-item'],table[class^='more-item'],table[class*=' more-item'],tr[class^='more-item'],tr[class*=' more-item'],p[class^='more-item'],p[class*=' more-item']");
        moreItems.addClass('visible');
        $(this).closest(".plc-show-more").removeClass('shown');
        moreItemsContainer.find(".plc-show-less").addClass('shown');
    });
}
function hideMore() {
    $(".plc-show-less>a").click(function () {
        var moreItemsContainer = $(this).closest('.more-items-container'), moreItems = moreItemsContainer.find("div[class^='more-item'],div[class*=' more-item'],table[class^='more-item'],table[class*=' more-item'],tr[class^='more-item'],tr[class*=' more-item'],p[class^='more-item'],p[class*=' more-item']");
        moreItems.removeClass('visible');
        $(this).closest(".plc-show-less").removeClass('shown');
        moreItemsContainer.find(".plc-show-more").addClass('shown');
    });
}
function setShowMoreItemsLimit($moreItemsContainer, $moreItemSelector, limit) {
    var $totalItems = $moreItemsContainer.find($moreItemSelector),
        $seeMoreButton = $moreItemsContainer.find(".plc-show-more");
    if ($totalItems.length > limit) {
        $seeMoreButton.addClass("shown");
    } else {
        $seeMoreButton.removeClass("shown");
    }
}
function alignChicletsInRowLayout() {
    var $plcRows = $('.plc-row-layout');
    if ($(window).width() > 767) {
        $.each($plcRows, function (i, e) {
            var $plcRowCols = $(this).find("div.panel:visible");
            var i, j, k, $temparray, chunk = 2;
            if ($(window).width() > 991 && !$plcRowCols.closest('.has-long-keyDate').length) {
                chunk = 3;
            } else {
                chunk = 2;
            }
            for (i = 0, j = $plcRowCols.length; i < j; i += chunk) {
                $temparray = $plcRowCols.slice(i, i + chunk);
                $temparray.css('height', 'auto');
                var maxColHeight = 0;
                for (k = 0; k <= $temparray.length - 1; k++) {
                    if ($($temparray[k]).height() > maxColHeight) {
                        maxColHeight = $($temparray[k]).height();
                    }
                }
                $temparray.css('height', maxColHeight + 'px');
            }
        });
    } else {
        $plcRows.find("div.panel").css('height', 'auto');
    }
}
function alignChiclets() {
    var $longKeyDate = $("#long-key-dates");
    if ($longKeyDate && $longKeyDate.length > 0) {
        var keyDatesContent = $longKeyDate.find('.panel').clone();
        var $container = $longKeyDate.closest('.chiclets-container');
        $container.addClass("plc-row-layout");
        $container.find('> .panel-col').removeClass("col-lg-8").addClass("col-lg-12");
        $container.wrap("<div class='col-xs-24 col-lg-16 panel-col has-long-keyDate' />");

        $('.has-long-keyDate').closest('div.chiclets-wrapper').prepend($longKeyDate.find('.key-dates').clone()).addClass("row padding-l-r-20").attr("id", "panel-row");
        $('.has-long-keyDate').find('.padding-l-r-20').removeClass('padding-l-r-20');
        $('.key-dates').wrap("<div class='col-lg-8 col-sm-24 panel-col'></div>");

        $longKeyDate.remove();
    }
    alignChicletsInRowLayout();
    var $panelRow = $('#panel-row'),
        $panelCol = $panelRow.find('.panel-col'),
        col1Panels = $($panelCol[1]).find('div.panel'),
        col2Panels = $($panelCol[2]).find('div.panel');

    if ($(window).width() > 575) {
        $.each(col1Panels, function (i, e) {
            var col1PanelHeight = $(e).height();
            var col2PanelHeight = $(col2Panels[i]).height();
            var diff = col1PanelHeight - col2PanelHeight;
            if (diff) {
                if (diff > 0) {
                    $(col2Panels[i]).css('height', col1PanelHeight + 'px');

                } else if (diff < 0) {
                    $(e).css('height', col2PanelHeight + 'px');
                }
            }

        });
    } else {
        col1Panels.css('height', 'auto');
        col2Panels.css('height', 'auto');
    }


    if ($($panelCol[0]).height() < $($panelCol[1]).height()) {
        if ($(window).width() > 991) {
            $($panelCol[0]).find('div.panel').css('height', $($panelCol[1]).height() - 22 + 'px');
        } else {
            $($panelCol[0]).find('div.panel').css('height', 'auto');
        }

    } else {
        $($panelCol[0]).find('div.panel').css('height', 'auto');
    }
}
function closeVideoDisplay() {
    $('.video-display').removeClass('on').addClass('off');
    setTimeout(function () {
        $('.video-display').remove();
    }, 1250);
    $(".active-thumb-text").remove();
    $('.video-cover').show();
}
function videoDisplayOn(tmpl) {
    $('#model-videos-container').prepend(tmpl);
    $('.video-display').removeClass('off').addClass('on');
    $('.video-display.on .vdo-close').not('.vdo-link-out').on('click', closeVideoDisplay);
    if (isMobileDevice()) {
        if ($(window).height() < 768 && $(window).width() > $(window).height()) {
            $('.video-display').addClass('fullscreen');
        } else {
            $('.video-display').removeClass('fullscreen');
        }
    }

}
function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};
function onVideoThumbClick() {
    var url = $(this).data('url');
    var tmpl = '<div class="col-sm-24 video-display"><iframe src="' + url + '"  frameborder="0" allowfullscreen="" id="yVjKuOsYY1Y" data-sdi="true"></iframe><a class="vdo-link-out vdo-close" target="_blank" href="' + url + '" title="open in new window" onclick="event.stopPropagation()"><i class="fa fa-external-link link-out-icon" aria-hidden="true"></i></a><div class="vdo-close"><i class="material-icons">&#xE5CD;</i></div></div>';
    var now_playing = '<span class="active-thumb-text"><i class="material-icons">&#xE5CD;</i></span>';
    $(".active-thumb-text").remove();
    $(this).find('.video-cover-wrapper').prepend(now_playing);
    $('.video-cover').show();
    $(this).find('.video-cover').hide();

    if ($('.video-display').hasClass('on')) {
        if ($('.video-display iframe').attr('src') !== url) {
            $('.video-display iframe').attr('src', url);
        } else {
            closeVideoDisplay();
        }
    } else if ($('.video-display').hasClass('off')) {
        videoDisplayOn(tmpl);
    } else {
        videoDisplayOn(tmpl);
    }
}
function initExpandables() {
    var $expandWrapper = $('.expand-down-wrapper');
    var i, j, k, $temparray, chunk = 4;
    for (i = 0, j = $expandWrapper.length; i < j; i += chunk) {
        $temparray = $expandWrapper.slice(i, i + chunk);
        for (k = 0; k <= $temparray.length - 1; k++) {
            if ((k === $temparray.length - 1) && !$($temparray[k]).hasClass("md lg")) {
                $($temparray[k]).addClass("md lg");
            } else if (k === 1 && !$($temparray[k]).hasClass("md")) {
                $($temparray[k]).addClass("md");
            }
        }
    }
}
function onExpandableClick() {
    var $xContainer;
    var winWidth = $(window).width();
    var url = $(this).data('url');
    // var tpl = '<object width="100%" class="detailed-features-iframe" type="text/html" id="detailed-feature" data=' + url + '>Either data not found at given url or This browser does not support object.</object>';
    var tpl = '<iframe src="' + url + '"  frameBorder="0" class="detailed-features-iframe" id="detailed-feature" data-sdi="true"></iframe>';
    $('.expand-down-wrapper').hide();
    if (winWidth < 768) {
        //Mobile
        $(this).closest("div[class^='col-']").nextAll('.expand-down-wrapper').first().show();
        $xContainer = $(this).closest("div[class^='col-']").nextAll('.expand-down-wrapper').first().find('.expand-down-container');
        $('.expand-down-wrapper').find('.expand-down-container').removeClass('open');

    } else if (winWidth > 767 && winWidth < 992) {
        //Tablet
        $(this).closest("div[class^='col-']").nextAll('.expand-down-wrapper.md').first().show();
        $xContainer = $(this).closest("div[class^='col-']").nextAll('.expand-down-wrapper.md').first().find('.expand-down-container');
        $('.expand-down-wrapper').find('.expand-down-container').removeClass('open');
    } else {
        //Desktop
        $(this).closest("div[class^='col-']").nextAll('.expand-down-wrapper.lg').first().show();
        $xContainer = $(this).closest("div[class^='col-']").nextAll('.expand-down-wrapper.lg').first().find('.expand-down-container');
        $('.expand-down-wrapper').find('.expand-down-container').removeClass('open');
    }

    if ($(this).hasClass('active')) {
        $($xContainer).removeClass('open');
        $(this).removeClass('active');
    } else {
        $($xContainer).addClass('open');
        $('.expandable').removeClass('active');
        $(this).addClass('active');
    }

    var clickCoordinates = $(this).offset().left - $('.wrapper').offset().left - 67 + $(this).outerWidth() / 2;
    if (clickCoordinates < 41) {
        clickCoordinates = 40;
    } else if (clickCoordinates > 1040) {
        clickCoordinates = 1040;
    }
    if ($($xContainer).hasClass('open')) {
        $($xContainer).find('.arrow').css("left", clickCoordinates + "px");
    }
    $($xContainer).find('.expand-down-content').empty();
    $($xContainer).find('.expand-down-content').append(tpl);
    iFrameResize({ log: false }, '#detailed-feature');

}
function expandableCloseClick() {
    $('.expandable').removeClass('active');
    $(this).closest(".expand-down-container").removeClass('open');
    $(this).closest(".expand-down-wrapper").hide();
}
function onTocChange() {
    $('#toc-title').text($(this).text());
}
function adjustVideoItemHeights($row) {
    var $items = $row.find("div[class^='col-']").not(".video-display");
    if ($(window).width() > 575) {
        var i, j, k, $temparray, chunk = 2;
        if ($(window).width() > 767) {
            chunk = 3;
        }
        for (i = 0, j = $items.length; i < j; i += chunk) {
            $temparray = $items.slice(i, i + chunk);

            if ($temparray.parent().is("div.temp-wrapper")) {
                $temparray.unwrap("div.temp-wrapper");
                $temparray.wrapAll('<div class="temp-wrapper"></div>');
            } else {
                $temparray.wrapAll('<div class="temp-wrapper"></div>');
            }

        }
    } else {
        if ($items.parent().is("div.temp-wrapper")) {
            $items.unwrap("div.temp-wrapper");
        }

    }
}
function layoutColumns($row, colSelector, minWidth, maxWidth, chunk, minWidth2, chunk2) {
    var $items = $row.find(colSelector);
    if ($(window).width() >= minWidth && $(window).width() <= maxWidth) {
        wrapUnwrap($items, chunk);
    } else if (minWidth2 && chunk2 && $(window).width() >= minWidth2) {
        wrapUnwrap($items, chunk2);
    } else {
        if ($items.parent().is("div.temp-wrapper")) {
            $items.unwrap("div.temp-wrapper");
        }

    }
}
function wrapUnwrap($items, chunk) {
    var i, j, k, $temparray;
    for (i = 0, j = $items.length; i < j; i += chunk) {
        $temparray = $items.slice(i, i + chunk);

        if ($temparray.parent().is("div.temp-wrapper")) {
            $temparray.unwrap("div.temp-wrapper");
            $temparray.wrapAll('<div class="temp-wrapper"></div>');
        } else {
            $temparray.wrapAll('<div class="temp-wrapper"></div>');
        }

    }
}
function setHeaderColumnWidth() {
    if ($(window).width() > 1024) {
        $('.nav-tier3').each(function (index, elem) {
            var $columns = $(this).find("div[class^='col']");
            if ($columns.length) {
                if ($columns.length === 2) {
                    $columns.css('width', '40%');
                } else if ($columns.length === 3) {
                    $columns.css('width', '32%');
                } else {
                    $columns.css('width', 'auto');
                }
            }
        });
    } else {
        $('.nav-tier3').find("div[class^='col']").css('width', 'auto');
    }
}
function alignPlaylistItemHeight($videoGallery) {
    var r = $videoGallery.find(".playlist-item");
    if ($(window).width() < 992) {
        r.each(function (ind, elm) {
            var itemheight = $(elm).height(),
                $title = $(this).find(".title"),
                titleHeight = $title.height();
            if (titleHeight > itemheight) {
                $(elm).css("height", titleHeight + 20 + "px");
            } else {
                $(elm).css("height", "auto");
            }
        });
    } else {
        r.css("height", "auto");
    }
}
function playFirstVideoOnLoad() {
    //By default Load first video in iFrame but don't play
    var $activeItem = $(".playlist-items").find(".playlist-item.active:first");
    if ($activeItem.data("youtube-id") && $activeItem.data("youtube-id").indexOf("autoplay=1") !== -1) {
        $activeItem.data("youtube-id", $activeItem.data("youtube-id").replace("autoplay=1", "autoplay=0"));
        $activeItem.removeClass("active").trigger("click");
        $activeItem.data("youtube-id", $activeItem.data("youtube-id").replace("autoplay=0", "autoplay=1"));
    } else if ($activeItem.data("url") && $activeItem.data("url").indexOf("autoPlay=true") !== -1) {
        $activeItem.data("url", $activeItem.data("url").replace("autoPlay=true", "autoPlay=false"));
        $activeItem.removeClass("active").trigger("click");
        $activeItem.data("url", $activeItem.data("url").replace("autoPlay=false", "autoPlay=true"));
    } else {
        $activeItem.removeClass("active").trigger("click");
    }
}
function checkNumberOfVideos($videoThumbsContainer, $videosSection) {
    var $videoThumbs = $videoThumbsContainer.find(".expand-video-thumb"),
        $seeMoreButton = $videosSection.find(".plc-show-more");
    if ($videoThumbs.length > 6) {
        $seeMoreButton.addClass("shown");
        $videosSection.addClass("padding-b-48");

    } else {
        $seeMoreButton.removeClass("shown");
        $videosSection.removeClass("padding-b-48");
    }
}
function adjustButtonsHeight() {
    $('.link-chiclet-container .link-chiclet').css("height", "auto");
    if ($(window).width() > 767) {
        var maxHeight = 0;
        $('.link-chiclet-container .link-chiclet').each(function () {
            if ($(this).outerHeight() > maxHeight) {
                maxHeight = $(this).outerHeight();
            }
        });
        $('.link-chiclet-container .link-chiclet').css("height", maxHeight + "px");
    }
}
/**
 * Load dropdown from include file
 */
function initCustomDropDowns() {
    var $elements = $(".custom-select-container");
    var tpl = '<div class="dropdown-component drop-down-white-bg dropdown-select dropdown-input fixedWidth drop-down-white-bg">' +
        '<span aria-hidden="true" style="user-select:none;"></span>' +
        '<div class="drop-content center-on-mobile">' +

        '<div class="link-list-simple" style="margin-top:0px;margin-bottom:0px;">' +
        '<ul>' +

        '</ul>' +
        '</div>' +

        '</div>' +
        '</div>';
    $elements.each(function (i, elm) {
        if ($(elm).data("include-url")) {
            $.get($(elm).data("include-url"), {}, function (responseTxt) {
                var $data = $(responseTxt);
                $(elm).html($data);
                var _this_select = $(elm).find('select');
                _this_select.before(tpl);
                var $component = _this_select.prev(".dropdown-component");
                var $displaySpan = _this_select.prev(".dropdown-component").find(">span");
                _this_select.find('option').each(function (i, op) {
                    if (i === 0) {
                        $displaySpan.text($(this).text());
                    }
                    var val = $(this).attr("value") ? $(this).attr("value") : "";
                    var display_text = $(this).html() ? $(this).html() : "";
                    $component.find('.link-list-simple>ul').append('<li class="model-data-link" data-value="' + val + '"><a><h5>' + display_text + '</h5></a></li>');
                });
                $displaySpan.on('DOMSubtreeModified', function () {
                    var selectedVal = $(this).text();
                    $component.find('.link-list-simple>ul').find("li.model-data-link>a>h5").each(function () {
                        if (selectedVal === $(this).text()) {
                            _this_select.val($(this).closest("li.model-data-link").data("value"));
                            _this_select.trigger("change");
                        }
                    });
                });
                _this_select.hide();
                defaultDropDown();

            }, "text");
        } else {
            console.log("include url missing");
        }

    });
}

function checkVideoImage() {
    var width = 0, height = 0;
    $(".expand-video-thumb").each(function () {
        var $img = $(this).find("img");
        if ($img.get(0).naturalWidth && $img.get(0).naturalHeight) {
            if ($(this).find("img").width() && $(this).find("img").height()) {
                width = $(this).find("img").outerWidth() > width ? $(this).find("img").outerWidth() : width;
                height = $(this).find("img").outerHeight() > height ? $(this).find("img").outerHeight() : height;
            }

        } else {
            $img.addClass("no-src");
        }
    });
    if (width === 0 || height === 0) {
        width = $(".no-src").closest(".video-cover-wrapper").width();
        height = width / 1.33;
    }
    $(".no-src").css({ "width": width + "px", "height": height + "px", border: "1px solid #c2c2c2" });
    $(".expand-video-thumb img").removeClass("no-src");
}

function layOutdetailedFeatures() {
    $(".detailed-features .rows>.row").find("div[class^='col']").each(function () {
        $(this).next(".expand-down-wrapper").wrap("<div class='df-col'></div>");
        $(this).prependTo($(this).next("div.df-col"));
    });
    layoutColumns($(".detailed-features .rows>.row"), ".df-col", 768, 991, 2, 992, 4);
    $(".detailed-features .rows>.row .df-col>div").unwrap(".df-col");
}

function openPrinterfriendlySpecs() {
    var win = window.open();
    win.document.write('<html><head><title>Specs print version</title><link rel="stylesheet" type="text/css" href="assets/css/main.css"/><link rel="stylesheet" type="text/css" href="assets/css/custom.css"/><link rel="stylesheet" type="text/css" href="assets/css/printer-friendly.css"/></head><body><div class="wrapper clearfix model-page">');
    var content = $("#model-specs-table .model-specifications-table").html();
    $(content).find(".section-title").remove();
    $(win.document.body).find(".wrapper").html(content);
    win.document.write('</div></body></html>');
}

$(document).ready(function () {
    onHeaderLoad();
    scrollToTop();
});

function onHeaderLoad() {
    if ($("#headerSection").length > 0) {
        APP.global();
        splashMsgInit();
        topNavigation();
        if ($(window).width() > 1024) {
            headerAlignment();
        } else {
            headerAlignmentMobile();
        }
    }
}

$(window).on('load', function () {
    $(window).resize();
});
$(window).on('beforeunload', function () {
    $(window).scrollTop(0);
});
$(window).on('resize', function () {
    "use strict";
    setHeaderColumnWidth();

    if ($(window).width() > 1024) {
        headerAlignment();
    } else {
        headerAlignmentMobile();
    }

    if ($(window).width() > 767 && $(window).width() < 992) {
        //TABLET
        $('.xx-object-wrapper object').attr('height', 700);
    } else if ($(window).width() > 991) {
        //DESKTOP
        $('.xx-object-wrapper object').attr('height', 750);
    } else {
        //MOBILE
        $('.xx-object-wrapper object').attr('height', 500);
    }

});
var encodeHtmlEntity = function (str) {
    var buf = [];
    for (var i = str.length - 1; i >= 0; i--) {
        buf.unshift(['&#', str[i].charCodeAt(), ';'].join(''));
    }
    return buf.join('').replace(/[&#;]/gi, "");
};
function headerInit() {
    $("a[data-target]").each(function () {
        var attrValue = $(this).attr("data-target");
        var firstIndexofHyphne = attrValue.indexOf("-");
        var secondIndexofHyphen = attrValue.indexOf("-", firstIndexofHyphne + 1);
        var lastSubstr = attrValue.substring(secondIndexofHyphen + 1);
        var firstSubstr = attrValue.substring(0, secondIndexofHyphen + 1);
        var $elem = $("#" + attrValue);
        var newIdSuffix = encodeHtmlEntity(lastSubstr);
        $elem.attr("id", firstSubstr + newIdSuffix);
        $(this).attr("data-target", firstSubstr + newIdSuffix);
    })
}
function stickyNavResize() {
    var nv = $(".nav-sticky").outerWidth() * 0.4;
    $(".nav-sticky.stuck .left-container").css("max-width", nv + "px");
}

function headerAlignment() {
    var available_space = $(".nav-container").outerWidth() - $(".nav-logo").outerWidth() - $(".nav-title").outerWidth() - 10;/*10 is for minimum 5px margin on each side of primary links container*/
    var no_of_links = $(".nav-tier1>li").length - 2;
    var linkMaxWidthValue = (available_space - $(".nav-tier1").find("li.home").outerWidth() - $(".nav-tier1").find("div.search").closest(".primary-link").outerWidth()) / 3;
    $(".nav-tier1>li").find("a.primary-link").css("max-width", linkMaxWidthValue + "px");
    var titleHeight = $(".nav-title").outerHeight();
    var tier1Height = $(".nav-tier1").outerHeight();
    var headerHeight = tier1Height
    if (titleHeight > tier1Height) {
        headerHeight = titleHeight;
    }
    $(".nav-container, .nav-container .nav-content").css("height", headerHeight + "px");
    $(".nav-title").css({ "top": "50%", transform: "translateY(-50%)" });
    $(".nav-container .nav-content .nav-tier1").css({ "top": "50%", transform: "translateY(-50%)" });
    $(".nav-logo").css({ "top": "50%", transform: "translateY(-50%)" });
    $(".nav-container .nav-content .nav-tier3.active").css("top", headerHeight + "px");
    $(".nav-container .nav-content .nav-tier2").css("max-height", "calc(100vh - " + headerHeight + "px)");
    $(".nav-container .nav-content .nav-tier3.active").css("max-height", "calc(100vh - " + headerHeight + "px)");
    $(".nav-content .search-input").css("height", headerHeight + "px");
    $(".nav-content .search-input").css({ "top": "50%", transform: "translateY(-50%)" });
}

function headerScrolledAlignment() {
    var headerHeight = $(".nav-container").not(".unscrolled").outerHeight();
    if ($(".nav-container").hasClass("nav-up")) {
        $(".nav-container").css("top", headerHeight * -1 + "px");
    } else {
        $(".nav-container").css("top", "0px");
        headerAlignment();
    }
    if ($('body').hasClass("global-nav-sticky")) {
        $(".nav-sticky").css("margin-top", headerHeight + "px")
    } else {
        $(".nav-sticky").css("margin-top", "0px");
    }

}

function headerAlignmentMobile() {
    $(".nav-container, .nav-container .nav-content").css("height", "");
    var headerHeight = $(".nav-container").outerHeight();
    if ($("p.mobile-title span").outerWidth() + $("p.region span").outerWidth() + 20 > $(".titleTxt").outerWidth()) {
        $(".titleTxt").find("p").css("width", "100%");
    } else {
        $(".titleTxt").find("p").css("width", "");
    }
    $(".nav-container .nav-content .nav-tier1").css({ "top": headerHeight + "px", transform: "none" });
    $(".nav-logo").css({ "top": "0", transform: "none" });
    $(".nav-container .nav-content .nav-tier3.active").css("top", headerHeight + "px");
    $(".nav-container .nav-content .nav-tier2").css("max-height", "none");
    $(".nav-container .nav-content .nav-tier3.active").css("max-height", "none");
}

function detectIE() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }
    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }
    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
        // Edge (IE 12+) => return version number
        return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }
    // other browser
    return false;
}

function splashMsgInit() {
    var content = $("#whats-new>h4").text().trim();
    if (content) {
        $("#whats-new").show();
        $("#whats-new .close").on("click", function () {
            $(this).closest(".whats-new-container").hide();
        });
    } else {
        $("#whats-new").hide();
        $("#whats-new .close").off("click");
    }
    // if (typeof (Storage) !== "undefined") {
    //     var isVisited = localStorage.getItem("isVisited");
    //     if (!isVisited && content) {
    //         $("#whats-new").show();
    //         localStorage.setItem("isVisited", "true");
    //     } else {
    //         $("#whats-new").hide();
    //     }
    //     $("#whats-new .close").on("click", function () {
    //         $(this).closest(".whats-new-container").hide();
    //     });

    // } else {
    //     console.log("Sorry! No Web Storage support..");
    // }
}

function callDTMSearch(form, page) {
    //START - Calling DTM for search term tracking
    var term = form.query.value;
    window[page + 'term'] = term;
    _satellite.track(page + 'Init');
    // -END-
}