/** Amazing Carousel - Responsive jQuery Carousel and Image Scroller
 * Copyright 2014 Magic Hills Pty Ltd All Rights Reserved
 * Website: http://amazingcarousel.com
 * Version 4.1 
 */
(function($) {
    $.fn.html5lightbox = function(options) {
        var inst = this;
        inst.options = $.extend({
            freelink: "http://html5box.com/",
            defaultvideovolume: 1,
            autoclose: false,
            autoclosedelay: 0,
            resizedelay: 100,
            insideiframe: false,
            autoresizecontent: true,
            defaultwidth: 960,
            defaultheight: 540,
            usedefaultsizeforcontent: false,
            preload: true,
            preloadallonpageload: false,
            preloadalldelay: 5E3,
            autoplay: false,
            loopvideo: false,
            html5player: true,
            responsive: true,
            nativehtml5controls: false,
            videohidecontrols: false,
            nativecontrolsonfirefox: false,
            nativecontrolsonie: false,
            nativecontrolsoniphone: true,
            nativecontrolsonipad: true,
            nativecontrolsonandroid: true,
            nativecontrolsonfullscreen: true,
            nativecontrolsnodownload: true,
            imagekeepratio: true,
            maxheight: false,
            elemautoheight: false,
            useflashonie9: true,
            useflashonie10: true,
            useflashonie11: false,
            useflashformp4onfirefox: false,
            transition: "none",
            transitionduration: 400,
            enablepdfjs: false,
            pdfjsengine: "",
            openpdfinnewtaboniphone: false,
            openpdfinnewtabonipad: false,
            googleanalyticsaccount: "",
            arrowloop: true,
            showall: false,
            userelforgroup: true,
            shownavigation: true,
            thumbwidth: 96,
            thumbheight: 72,
            thumbgap: 4,
            thumbtopmargin: 12,
            thumbbottommargin: 12,
            thumbborder: 1,
            thumbbordercolor: "transparent",
            thumbhighlightbordercolor: "#fff",
            thumbopacity: 1,
            navbuttonwidth: 32,
            navbgcolor: "rgba(0,0,0,0.2)",
            shownavcontrol: true,
            navcontrolimage: "lightbox-navcontrol.png",
            hidenavdefault: false,
            overlaybgcolor: "#000",
            overlayopacity: 0.9,
            bgcolor: "#fff",
            bordersize: 8,
            borderradius: 0,
            bordermargin: 16,
            bordertopmargin: 48,
            barautoheight: true,
            barheight: 64,
            smallscreenheight: 415,
            responsivebarheight: false,
            barheightonsmallheight: 64,
            notkeepratioonsmallheight: false,
            bordertopmarginsmall: 36,
            loadingwidth: 64,
            loadingheight: 64,
            resizespeed: 400,
            fadespeed: 0,
            jsfolder: "",
            skinsfoldername: "skins",
            loadingimage: "lightbox-loading.gif",
            nextimage: "lightbox-next.png",
            previmage: "lightbox-prev.png",
            closeimage: "lightbox-close.png",
            playvideoimage: "lightbox-playvideo.png",
            titlebgimage: "lightbox-titlebg.png",
            navarrowsprevimage: "lightbox-navprev.png",
            navarrowsnextimage: "lightbox-navnext.png",
            navarrowsalwaysshowontouch: true,
            navarrowsbottomscreenwidth: 479,
            closeonoverlay: true,
            alwaysshownavarrows: false,
            showplaybutton: true,
            playimage: "lightbox-play.png",
            pauseimage: "lightbox-pause.png",
            fullscreenmode: false,
            fullscreencloseimage: "lightbox-close-fullscreen.png",
            fullscreennextimage: "lightbox-next-fullscreen.png",
            fullscreenprevimage: "lightbox-prev-fullscreen.png",
            fullscreennomargin: false,
            fullscreenmodeonsmallscreen: false,
            fullscreennomarginonsmallscreen: false,
            fullscreensmallscreenwidth: 800,
            fullscreenbgcolor: "rgba(0, 0, 0, 0.9)",
            fullscreenbordersize: 0,
            fullscreentextinside: false,
            videobgcolor: "#000",
            html5videoposter: "",
            showtitle: true,
            titlestyle: "bottom",
            titleinsidecss: "color:#fff; font-size:16px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; text-align:left; margin:4px 8px;",
            titlebottomcss: "color:#333; font-size:16px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; text-align:left;",
            showonmouseoverinside: false,
            showinsidetitleforimageonly: true,
            showdescription: true,
            descriptioninsidecss: "color:#fff; font-size:12px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; text-align:left; margin:4px 0px 0px; padding: 0px;",
            descriptionbottomcss: "color:#333; font-size:12px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; text-align:left; margin:4px 0px 0px; padding: 0px;",
            fullscreentitlebottomcss: "color:#fff; font-size:16px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; text-align:left; margin:4px 8px 8px;",
            fullscreendescriptionbottomcss: "color:#fff; font-size:12px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; text-align:left; margin:4px 0px 0px; padding: 0px;",
            showsocialmedia: true,
            socialmediaposition: "position:absolute;top:8px;right:8px;",
            showtitleprefix: true,
            titleprefix: "%NUM / %TOTAL",
            autoslide: false,
            slideinterval: 5E3,
            showtimer: true,
            timerposition: "bottom",
            timerheight: 2,
            timercolor: "#dc572e",
            timeropacity: 1,
            initvimeo: true,
            inityoutube: true,
            swipepreventdefaultonandroid: false,
            initsocial: false,
            showsocial: false,
            socialposition: "position:absolute;top:100%;right:0;",
            socialpositionsmallscreen: "position:absolute;top:100%;right:0;left:0;",
            socialdirection: "horizontal",
            socialbuttonsize: 32,
            socialbuttonfontsize: 18,
            socialrotateeffect: true,
            showfacebook: true,
            showtwitter: true,
            showpinterest: true,
            showemail: false,
            imagepercentage: 75,
            sidetobottomscreenwidth: 479,
            errorwidth: 280,
            errorheight: 48,
            errorcss: "text-align:center; color:#ff0000; font-size:14px; font-family:Arial, sans-serif;",
            enabletouchswipe: true,
            mobileresizeevent: false,
            swipedistance: 0,
            bodynoscroll: false,
            useabsolutepos: false,
            useabsoluteposonmobile: false,
            supportesckey: true,
            supportarrowkeys: true,
            version: "3.3",
            stamp: false,
            freemark: "72,84,77,76,53,32,76,105,103,104,116,98,111,120,32,70,114,101,101,32,86,101,114,115,105,111,110",
            watermark: "",
            watermarklink: ""
        }, options);
        if (typeof html5lightbox_options != "undefined" && html5lightbox_options) $.extend(inst.options, html5lightbox_options);
        if ($("div.html5lightbox_options").length) $.each($("div.html5lightbox_options").data(), function(key, value) {
            inst.options[key.toLowerCase()] = value
        });
        if ($("div#html5lightbox_options").length) $.each($("div#html5lightbox_options").data(), function(key, value) {
            inst.options[key.toLowerCase()] = value
        });
        if ($("div#html5lightbox_general_options").length) $.each($("div#html5lightbox_general_options").data(),
            function(key, value) {
                inst.options[key.toLowerCase()] = value
            });
        var ELEM_TYPE = 0,
            ELEM_HREF = 1,
            ELEM_TITLE = 2,
            ELEM_GROUP = 3,
            ELEM_WIDTH = 4,
            ELEM_HEIGHT = 5,
            ELEM_HREF_WEBM = 6,
            ELEM_HREF_OGG = 7,
            ELEM_THUMBNAIL = 8,
            ELEM_DESCRIPTION = 9,
            ELEM_DIV = 10,
            ELEM_ORIGINALWIDTH = 11,
            ELEM_ORIGINALHEIGHT = 12,
            ELEM_SOCIALMEDIA = 13;
        inst.options.types = ["IMAGE", "FLASH", "VIDEO", "YOUTUBE", "VIMEO", "PDF", "MP3", "WEB", "FLV", "DAILYMOTION", "DIV", "WISTIA", "IFRAMEVIDEO"];
        inst.options.htmlfolder = window.location.href.substr(0, window.location.href.lastIndexOf("/") +
            1);
        inst.options.skinsfolder = inst.options.skinsfoldername;
        if (inst.options.skinsfolder.length > 0 && inst.options.skinsfolder[inst.options.skinsfolder.length - 1] != "/") inst.options.skinsfolder += "/";
        if (inst.options.skinsfolder.charAt(0) != "/" && inst.options.skinsfolder.substring(0, 5) != "http:" && inst.options.skinsfolder.substring(0, 6) != "https:") inst.options.skinsfolder = inst.options.jsfolder + inst.options.skinsfolder;
        var image_list = ["loadingimage", "nextimage", "previmage", "closeimage", "playvideoimage", "titlebgimage",
            "navarrowsprevimage", "navarrowsnextimage", "navcontrolimage", "playimage", "pauseimage", "fullscreencloseimage", "fullscreennextimage", "fullscreenprevimage"
        ];
        for (var i = 0; i < image_list.length; i++)
            if (inst.options[image_list[i]])
                if (inst.options[image_list[i]].substring(0, 7).toLowerCase() != "http://" && inst.options[image_list[i]].substring(0, 8).toLowerCase() != "https://") inst.options[image_list[i]] = inst.options.skinsfolder + inst.options[image_list[i]];
        var i;
        var l;
        var mark = "";
        var bytes = inst.options.freemark.split(",");
        for (i = 0; i < bytes.length; i++) mark += String.fromCharCode(bytes[i]);
        inst.options.freemark = mark;
        var d0 = "hmtamgli5cboxh.iclolms";
        for (i = 1; i <= 5; i++) d0 = d0.slice(0, i) + d0.slice(i + 1);
        l = d0.length;
        for (i = 0; i < 5; i++) d0 = d0.slice(0, l - 9 + i) + d0.slice(l - 8 + i);
        if (inst.options.htmlfolder.indexOf(d0) != -1) inst.options.stamp = false;
        inst.options.flashInstalled = false;
        try {
            if (new ActiveXObject("ShockwaveFlash.ShockwaveFlash")) inst.options.flashInstalled = true
        } catch (e) {
            if (navigator.mimeTypes["application/x-shockwave-flash"]) inst.options.flashInstalled =
                true
        }
        inst.options.html5VideoSupported = !!document.createElement("video").canPlayType;
        inst.options.isChrome = navigator.userAgent.match(/Chrome/i) != null;
        inst.options.isFirefox = navigator.userAgent.match(/Firefox/i) != null;
        inst.options.isOpera = navigator.userAgent.match(/Opera/i) != null || navigator.userAgent.match(/OPR\//i) != null;
        inst.options.isSafari = navigator.userAgent.match(/Safari/i) != null;
        inst.options.isIE11 = navigator.userAgent.match(/Trident\/7/) != null && navigator.userAgent.match(/rv:11/) != null;
        inst.options.isIE =
            navigator.userAgent.match(/MSIE/i) != null && !inst.options.isOpera;
        inst.options.isIE10 = navigator.userAgent.match(/MSIE 10/i) != null && !this.options.isOpera;
        inst.options.isIE9 = navigator.userAgent.match(/MSIE 9/i) != null && !inst.options.isOpera;
        inst.options.isIE8 = navigator.userAgent.match(/MSIE 8/i) != null && !inst.options.isOpera;
        inst.options.isIE7 = navigator.userAgent.match(/MSIE 7/i) != null && !inst.options.isOpera;
        inst.options.isIE6 = navigator.userAgent.match(/MSIE 6/i) != null && !inst.options.isOpera;
        inst.options.isIE678 =
            inst.options.isIE6 || inst.options.isIE7 || inst.options.isIE8;
        inst.options.isIE6789 = inst.options.isIE6 || inst.options.isIE7 || inst.options.isIE8 || inst.options.isIE9;
        inst.options.isAndroid = navigator.userAgent.match(/Android/i) != null;
        inst.options.isIPad = navigator.userAgent.match(/iPad/i) != null;
        inst.options.isIPhone = navigator.userAgent.match(/iPod/i) != null || navigator.userAgent.match(/iPhone/i) != null;
        inst.options.isIOS = inst.options.isIPad || inst.options.isIPhone;
        inst.options.isMobile = inst.options.isAndroid ||
            inst.options.isIPad || inst.options.isIPhone;
        inst.options.isIOSLess5 = inst.options.isIPad && inst.options.isIPhone && (navigator.userAgent.match(/OS 4/i) != null || navigator.userAgent.match(/OS 3/i) != null);
        inst.options.supportCSSPositionFixed = !inst.options.isIE6 && !inst.options.isIOSLess5;
        inst.options.iequirksmode = inst.options.isIE6789 && document.compatMode != "CSS1Compat";
        inst.options.isTouch = "ontouchstart" in window;
        if (inst.options.isChrome) {
            var match = navigator.userAgent.match(/Chrome\/([0-9]+)/);
            inst.options.chromeVersion =
                match && match.length >= 2 ? parseInt(match[1], 10) : 0
        }
        if (inst.options.isAndroid) {
            var match = navigator.userAgent.match(/Android\s([0-9\.]*)/i);
            inst.options.androidVersion = match && match.length >= 2 ? parseInt(match[1], 10) : -1
        }
        var v = document.createElement("video");
        inst.options.canplaymp4 = v && v.canPlayType && v.canPlayType("video/mp4").replace(/no/, "");
        if (inst.options.isFirefox && inst.options.nativecontrolsonfirefox || (inst.options.isIE6789 || inst.options.isIE10 || inst.options.isIE11) && inst.options.nativecontrolsonie || inst.options.isIPhone &&
            inst.options.nativecontrolsoniphone || inst.options.isIPad && inst.options.nativecontrolsonipad || inst.options.isAndroid && inst.options.nativecontrolsonandroid) inst.options.nativehtml5controls = true;
        if (inst.options.isIOS || inst.options.isAndroid) inst.options.nativecontrolsonfullscreen = true;
        inst.options.navheight = 0;
        inst.options.thumbgap += 2 * inst.options.thumbborder;
        inst.options.resizeTimeout = -1;
        inst.slideTimeout = null;
        inst.autosliding = false;
        inst.existingElem = -1;
        inst.direction = -3;
        inst.elemArray = new Array;
        inst.options.curElem = -1;
        inst.defaultoptions = $.extend({}, inst.options);
        if (inst.options.googleanalyticsaccount && !window._gaq) {
            window._gaq = window._gaq || [];
            window._gaq.push(["_setAccount", inst.options.googleanalyticsaccount]);
            window._gaq.push(["_trackPageview"]);
            $.getScript("https://ssl.google-analytics.com/ga.js")
        }
        if (inst.options.initvimeo) {
            var tag = document.createElement("script");
            tag.src = inst.options.jsfolder + "froogaloop2.min.js";
            var firstScriptTag = document.getElementsByTagName("script")[0];
            firstScriptTag.parentNode.insertBefore(tag,
                firstScriptTag)
        }
        if (inst.options.inityoutube) {
            var tag = document.createElement("script");
            tag.src = "https://www.youtube.com/iframe_api";
            var firstScriptTag = document.getElementsByTagName("script")[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
        }
        if (inst.options.initsocial) $("head").append('<link rel="stylesheet" href="' + inst.options.jsfolder + 'icons/css/fontello.css" type="text/css" />');
        inst.showing = false;
        inst.navvisible = false;
        inst.disableEscKey = function(isFullscreen) {
            if (isFullscreen) inst.disableesckeyinfullscreen =
                true;
            else setTimeout(function() {
                inst.disableesckeyinfullscreen = false
            }, 1E3)
        };
        inst.supportKeyboard = function() {
            inst.disableesckeyinfullscreen = false;
            $(document).keyup(function(e) {
                if (!inst.showing) return;
                if (!inst.disableesckeyinfullscreen && inst.options.supportesckey && e.keyCode == 27) inst.finish();
                else if (inst.options.supportarrowkeys)
                    if (e.keyCode == 39) inst.gotoSlide(-1);
                    else if (e.keyCode == 37) inst.gotoSlide(-2)
            });
            if (inst.options.supportesckey) {
                document.addEventListener("MSFullscreenChange", function() {
                    inst.disableEscKey(document.msFullscreenElement !=
                        null)
                }, false);
                document.addEventListener("webkitfullscreenchange", function() {
                    inst.disableEscKey(document.webkitIsFullScreen)
                }, false)
            }
        };
        inst.supportKeyboard();
        inst.init = function() {
            inst.showing = false;
            inst.readData();
            inst.createMarkup();
            inst.initSlide()
        };
        inst.readData = function() {
            inst.each(function() {
                if (this.nodeName.toLowerCase() != "a" && this.nodeName.toLowerCase() != "area") return;
                var $this = $(this);
                var fileType = "mediatype" in $this.data() ? $this.data("mediatype") : inst.checkType($this.attr("href"));
                if (fileType <
                    0) return;
                var title = $this.data("title") ? $this.data("title") : $this.attr("title");
                var group = $this.data("group") ? $this.data("group") : inst.options.userelforgroup ? $this.attr("rel") : null;
                for (var i = 0; i < inst.elemArray.length; i++)
                    if ($this.attr("href") == inst.elemArray[i][ELEM_HREF]) {
                        inst.elemArray[i][ELEM_TITLE] = title;
                        inst.elemArray[i][ELEM_GROUP] = group;
                        return
                    } inst.elemArray.push(new Array(fileType, $this.attr("href"), title, group, $this.data("width"), $this.data("height"), $this.data("webm"), $this.data("ogg"), $this.data("thumbnail"),
                    $this.data("description"), null, null, null, $this.data("socialmedia")))
            })
        };
        inst.createMarkup = function() {
            if ($(window).width() <= inst.options.fullscreensmallscreenwidth) {
                if (inst.options.fullscreenmodeonsmallscreen) {
                    inst.options.fullscreenmode = true;
                    if (inst.options.fullscreennomarginonsmallscreen) inst.options.fullscreennomargin = true
                }
                if (inst.options.fullscreenmode && inst.options.fullscreennomarginonsmallscreen) inst.options.fullscreennomargin = true
            }
            if (inst.options.fullscreenmode) {
                inst.options.bgcolor = inst.options.fullscreenbgcolor;
                inst.options.bordersize = inst.options.fullscreenbordersize;
                if (inst.options.fullscreennomargin) {
                    inst.options.bordersize = 0;
                    inst.options.bordermargin = 0;
                    inst.options.bordertopmargin = 0;
                    inst.options.bordertopmarginsmall = 0
                }
                if (inst.options.fullscreentextinside) {
                    inst.options.titlestyle = "inside";
                    inst.options.titlecss = inst.options.titleinsidecss;
                    inst.options.descriptioncss = inst.options.descriptioninsidecss
                } else {
                    inst.options.titlebottomcss = inst.options.fullscreentitlebottomcss;
                    inst.options.descriptionbottomcss =
                        inst.options.fullscreendescriptionbottomcss
                }
            }
            inst.options.barheightoriginal = inst.options.barheight;
            if (inst.options.responsivebarheight) {
                var winH = $(window).height();
                if (winH <= inst.options.smallscreenheight) inst.options.barheight = inst.options.barheightonsmallheight
            }
            if (!inst.options.titlecss) inst.options.titlecss = inst.options.titlestyle == "inside" ? inst.options.titleinsidecss : inst.options.titlebottomcss;
            if (!inst.options.descriptioncss) inst.options.descriptioncss = inst.options.titlestyle == "inside" ? inst.options.descriptioninsidecss :
                inst.options.descriptionbottomcss;
            inst.options.titlecss = $.trim(inst.options.titlecss);
            if (inst.options.titlecss.length > 1) {
                if (inst.options.titlecss.charAt(0) == "{") inst.options.titlecss = inst.options.titlecss.substring(1);
                if (inst.options.titlecss.charAt(inst.options.titlecss.length - 1) == "}") inst.options.titlecss = inst.options.titlecss.substring(0, inst.options.titlecss.length - 1)
            }
            inst.options.descriptioncss = $.trim(inst.options.descriptioncss);
            if (inst.options.descriptioncss.length > 1) {
                if (inst.options.descriptioncss.charAt(0) ==
                    "{") inst.options.descriptioncss = inst.options.descriptioncss.substring(1);
                if (inst.options.descriptioncss.charAt(inst.options.descriptioncss.length - 1) == "}") inst.options.descriptioncss = inst.options.descriptioncss.substring(0, inst.options.descriptioncss.length - 1)
            }
            inst.options.errorcss = $.trim(inst.options.errorcss);
            if (inst.options.errorcss.length > 1) {
                if (inst.options.errorcss.charAt(0) == "{") inst.options.errorcss = inst.options.errorcss.substring(1);
                if (inst.options.errorcss.charAt(inst.options.errorcss.length -
                        1) == "}") inst.options.errorcss = inst.options.errorcss.substring(0, inst.options.errorcss.length - 1)
            }
            var styleCss = ".bodynoscroll {height:100%;overflow:hidden;}";
            styleCss += ".html5-hide {display:none !important;} #carousel-html5-lightbox .html5-text {" + inst.options.titlecss + "}";
            styleCss += "#carousel-html5-lightbox .html5-description {" + inst.options.descriptioncss + "}";
            styleCss += "#carousel-html5-lightbox .html5-error {" + inst.options.errorcss + "}";
            if (inst.options.navarrowsalwaysshowontouch || inst.options.alwaysshownavarrows) {
                styleCss +=
                    "#carousel-html5-lightbox .html5-prev-touch {left:0px;top:50%;margin-top:-16px;margin-left:-32px;} #carousel-html5-lightbox .html5-next-touch {right:0px;top:50%;margin-top:-16px;margin-right:-32px;}";
                styleCss += "@media (max-width: " + inst.options.navarrowsbottomscreenwidth + "px) { #carousel-html5-lightbox .html5-prev-touch {top:100%;left:0;margin:0;} #carousel-html5-lightbox .html5-next-touch {top:100%;right:0;margin:0;} }"
            }
            styleCss += "#carousel-html5-lightbox .html5-prev-fullscreen {display:block;} #carousel-html5-lightbox .html5-next-fullscreen {display:block;} #carousel-html5-lightbox .html5-prev-bottom-fullscreen {display:none;} #carousel-html5-lightbox .html5-next-bottom-fullscreen {display:none;}";
            styleCss += "@media (max-width: " + inst.options.navarrowsbottomscreenwidth + "px) {#carousel-html5-lightbox .html5-prev-fullscreen {display:none;} #carousel-html5-lightbox .html5-next-fullscreen {display:none;} #carousel-html5-lightbox .html5-prev-bottom-fullscreen {display:block;} #carousel-html5-lightbox .html5-next-bottom-fullscreen {display:block;} }";
            if (inst.options.titlestyle == "right") {
                styleCss += "#carousel-html5-lightbox .html5-elem-wrap {width:" + inst.options.imagepercentage + "%;height:100%;} #carousel-html5-lightbox .html5-elem-data-box {min-height:100%;}";
                styleCss += "@media (max-width: " + inst.options.sidetobottomscreenwidth + "px) {#carousel-html5-lightbox .html5-elem-wrap {width:100%;height:auto;} #carousel-html5-lightbox .html5-elem-data-box {width:100%;height:auto;min-height:0;}}"
            } else if (inst.options.titlestyle == "left") {
                styleCss += "#carousel-html5-lightbox .html5-elem-wrap {height:100%;} #carousel-html5-lightbox .html5-elem-data-box {width:" + String(100 - inst.options.imagepercentage) + "%;min-height:100%;}";
                styleCss += "@media (max-width: " + inst.options.sidetobottomscreenwidth +
                    "px) {#carousel-html5-lightbox .html5-elem-wrap {width:100%;height:auto;} #carousel-html5-lightbox .html5-elem-data-box {width:100%;height:auto;min-height:0;}}"
            }
            styleCss += ".html5-rotate { border-radius:50%; -webkit-transition:-webkit-transform .4s ease-in; transition: transform .4s ease-in; } .html5-rotate:hover { -webkit-transform: rotate(360deg); transform: rotate(360deg); }";
            styleCss += "@media (max-width: " + inst.options.navarrowsbottomscreenwidth + "px) {#html5-social {" + inst.options.socialpositionsmallscreen +
                "}}";
            $("head").append("<style type='text/css' data-creator='carousel-html5-lightbox'>" + styleCss + "</style>");
            var elemheight = inst.options.elemautoheight ? "auto" : "100%";
            inst.$lightbox = $("<div id='carousel-html5-lightbox' style='display:none;top:0px;left:0px;width:100%;height:100%;z-index:9999998;text-align:center;'>" + "<div id='html5-lightbox-overlay' style='display:block;position:absolute;top:0px;left:0px;width:100%;min-height:100%;background-color:" + inst.options.overlaybgcolor + ";opacity:" + inst.options.overlayopacity +
                ";filter:alpha(opacity=" + Math.round(inst.options.overlayopacity * 100) + ");'></div>" + "<div id='html5-lightbox-box' style='display:block;position:relative;margin:0px auto;'>" + "<div class='html5-elem-box' style='display:block;position:relative;width:100%;overflow-x:hidden;overflow-y:auto;height:" + elemheight + ";margin:0px auto;text-align:center;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;'>" + "<div class='html5-elem-wrap' style='display:block;position:relative;margin:0px auto;text-align:center;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;background-color:" +
                inst.options.bgcolor + ";'>" + "<div class='html5-loading' style='display:none;position:absolute;top:0px;left:0px;text-align:center;width:100%;height:100%;background:url(\"" + inst.options.loadingimage + "\") no-repeat center center;'></div>" + "<div class='html5-error-box html5-error' style='display:none;position:absolute;padding:" + inst.options.bordersize + "px;text-align:center;width:" + inst.options.errorwidth + "px;height:" + inst.options.errorheight + "px;'>" + "The requested content cannot be loaded.<br />Please try again later." +
                "</div>" + "<div class='html5-image' style='display:none;position:relative;top:0px;left:0px;width:100%;height:100%;" + (inst.options.iequirksmode ? "margin" : "padding") + ":" + inst.options.bordersize + "px;text-align:center;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;'></div>" + "</div>" + "</div>" + "<div id='html5-watermark' style='display:none;position:absolute;left:" + String(inst.options.bordersize + 2) + "px;top:" + String(inst.options.bordersize + 2) + "px;'></div>" + "</div>" + "</div>");
            inst.options.positionFixed = inst.options.supportCSSPositionFixed && inst.options.responsive && !inst.options.iequirksmode;
            if (inst.options.useabsolutepos || inst.options.useabsoluteposonmobile && inst.options.isMobile) inst.options.positionFixed = false;
            if (!inst.options.positionFixed) inst.options.bodynoscroll = true;
            inst.$lightbox.css({
                position: inst.options.positionFixed ? "fixed" : "absolute"
            });
            inst.$lightbox.appendTo("body");
            inst.$lightboxBox = $("#html5-lightbox-box", inst.$lightbox);
            inst.$elem = $(".html5-elem-box",
                inst.$lightbox);
            inst.$elemWrap = $(".html5-elem-wrap", inst.$lightbox);
            inst.$loading = $(".html5-loading", inst.$lightbox);
            inst.$error = $(".html5-error-box", inst.$lightbox);
            inst.$image = $(".html5-image", inst.$lightbox);
            if (inst.options.fullscreenmode && inst.options.fullscreennomargin) inst.$elem.css({
                overflow: "hidden"
            });
            var elemText = "<div class='html5-elem-data-box' style='display:none;box-sizing:border-box;'><div class='html5-text' style='display:block;overflow:hidden;'></div></div>";
            if (inst.options.titlestyle ==
                "left") inst.$elem.prepend(elemText);
            else inst.$elem.append(elemText);
            inst.$elemData = $(".html5-elem-data-box", inst.$lightbox);
            inst.$text = $(".html5-text", inst.$lightbox);
            if (inst.options.borderradius > 0) {
                inst.$elem.css({
                    "border-radius": inst.options.borderradius + "px",
                    "-moz-border-radius": inst.options.borderradius + "px",
                    "-webkit-border-radius": inst.options.borderradius + "px"
                });
                if (inst.options.titlestyle == "inside") inst.$elemWrap.css({
                    "border-radius": inst.options.borderradius + "px",
                    "-moz-border-radius": inst.options.borderradius +
                        "px",
                    "-webkit-border-radius": inst.options.borderradius + "px"
                });
                else if (inst.options.titlestyle == "bottom") {
                    inst.$elemWrap.css({
                        "border-top-left-radius": inst.options.borderradius + "px",
                        "-moz-top-left-border-radius": inst.options.borderradius + "px",
                        "-webkit-top-left-border-radius": inst.options.borderradius + "px",
                        "border-top-right-radius": inst.options.borderradius + "px",
                        "-moz-top-right-border-radius": inst.options.borderradius + "px",
                        "-webkit-top-right-border-radius": inst.options.borderradius + "px"
                    });
                    inst.$elemData.css({
                        "border-bottom-left-radius": inst.options.borderradius +
                            "px",
                        "-moz-top-bottom-border-radius": inst.options.borderradius + "px",
                        "-webkit-bottom-left-border-radius": inst.options.borderradius + "px",
                        "border-bottom-right-radius": inst.options.borderradius + "px",
                        "-moz-bottom-right-border-radius": inst.options.borderradius + "px",
                        "-webkit-bottom-right-border-radius": inst.options.borderradius + "px"
                    })
                }
            }
            if (inst.options.titlestyle == "right" || inst.options.titlestyle == "left") {
                inst.$lightboxBox.css({
                    "background-color": inst.options.bgcolor
                });
                if (inst.options.titlestyle == "right") {
                    inst.$elemWrap.css({
                        position: "relative",
                        "float": "left"
                    });
                    inst.$elemData.css({
                        position: "relative",
                        overflow: "hidden",
                        padding: inst.options.bordersize + "px"
                    })
                } else {
                    inst.$elemWrap.css({
                        position: "relative",
                        overflow: "hidden"
                    });
                    inst.$elemData.css({
                        position: "relative",
                        "float": "left",
                        padding: inst.options.bordersize + "px"
                    })
                }
            } else if (inst.options.titlestyle == "inside") {
                inst.$elemData.css({
                    position: "absolute",
                    margin: inst.options.bordersize + "px",
                    bottom: 0,
                    left: 0,
                    "background-color": "#333",
                    "background-color": "rgba(51, 51, 51, 0.6)"
                });
                if (inst.options.showonmouseoverinside) inst.$elemData.css({
                    opacity: 0
                });
                inst.$text.css({
                    padding: inst.options.bordersize + "px " + 2 * inst.options.bordersize + "px"
                })
            } else {
                inst.$elemData.css({
                    position: "relative",
                    width: "100%",
                    height: inst.options.barautoheight ? "auto" : inst.options.barheight + "px",
                    "padding": "0 0 " + inst.options.bordersize + "px" + " 0",
                    "background-color": inst.options.bgcolor,
                    "text-align": "left"
                });
                if (!inst.options.fullscreenmode || !inst.options.fullscreennomargin) inst.$text.css({
                    "margin": "0 " + inst.options.bordersize + "px"
                })
            }
            if (inst.options.showsocial) {
                var socialCode = '<div id="html5-social" style="display:none;' +
                    inst.options.socialposition + '">';
                var socialBtnCSS = (inst.options.socialdirection == "horizontal" ? "display:inline-block;" : "display:block;") + "margin:4px;";
                var socialCSS = "display:table-cell;width:" + inst.options.socialbuttonsize + "px;height:" + inst.options.socialbuttonsize + "px;font-size:" + inst.options.socialbuttonfontsize + "px;border-radius:50%;color:#fff;vertical-align:middle;text-align:center;cursor:pointer;padding:0;";
                if (inst.options.showemail) socialCode += '<div class="html5-social-btn' + (inst.options.socialrotateeffect ?
                    " html5-rotate" : "") + ' html5-social-email" style="' + socialBtnCSS + '"><div class="mh-icon-mail" style="' + socialCSS + 'background-color:#4d83ff;"></div></div>';
                if (inst.options.showfacebook) socialCode += '<div class="html5-social-btn' + (inst.options.socialrotateeffect ? " html5-rotate" : "") + ' html5-social-facebook" style="' + socialBtnCSS + '"><div class="mh-icon-facebook" style="' + socialCSS + 'background-color:#3b5998;"></div></div>';
                if (inst.options.showtwitter) socialCode += '<div class="html5-social-btn' + (inst.options.socialrotateeffect ?
                    " html5-rotate" : "") + ' html5-social-twitter" style="' + socialBtnCSS + '"><div class="mh-icon-twitter" style="' + socialCSS + 'background-color:#03b3ee;"></div></div>';
                if (inst.options.showpinterest) socialCode += '<div class="html5-social-btn' + (inst.options.socialrotateeffect ? " html5-rotate" : "") + ' html5-social-pinterest" style="' + socialBtnCSS + '"><div class="mh-icon-pinterest" style="' + socialCSS + 'background-color:#c92228;"></div></div>';
                socialCode += '<div style="clear:both;"></div></div>';
                inst.$lightboxBox.append(socialCode);
                $(".html5-social-btn", inst.$lightbox).click(function() {
                    var shareUrl = window.location.href + (window.location.href.indexOf("?") < 0 ? "?" : "&") + "html5lightboxshare=" + encodeURIComponent(inst.currentElem[ELEM_HREF]);
                    var shareTitle = inst.currentElem[ELEM_TITLE];
                    var shareMedia = inst.currentElem[ELEM_HREF];
                    if (inst.currentElem[ELEM_TYPE] == 0) shareMedia = inst.absoluteUrl(inst.currentElem[ELEM_HREF]);
                    else if (inst.currentElem[ELEM_TYPE] == 3) shareMedia = "https://img.youtube.com/vi/" + inst.getYoutubeId(inst.currentElem[ELEM_HREF]) +
                        "/0.jpg";
                    else {
                        var lightboxLink = $('.html5lightbox[href="' + inst.currentElem[ELEM_HREF] + '"]');
                        if (lightboxLink.length > 0)
                            if (lightboxLink.data("shareimage") && lightboxLink.data("shareimage").length > 0) shareMedia = inst.absoluteUrl(lightboxLink.data("shareimage"));
                            else if (lightboxLink.data("thumbnail") && lightboxLink.data("thumbnail").length > 0) shareMedia = inst.absoluteUrl(lightboxLink.data("thumbnail"));
                        else {
                            var lightboxImg = $("img", lightboxLink);
                            if (lightboxImg.length > 0) shareMedia = inst.absoluteUrl(lightboxImg.attr("src"))
                        }
                    }
                    var isVideo =
                        inst.currentElem[ELEM_TYPE] == 2 || inst.currentElem[ELEM_TYPE] == 3 || inst.currentElem[ELEM_TYPE] == 4 || inst.currentElem[ELEM_TYPE] == 8 || inst.currentElem[ELEM_TYPE] == 9 || inst.currentElem[ELEM_TYPE] == 11 || inst.currentElem[ELEM_TYPE] == 12;
                    if (!shareTitle) shareTitle = "";
                    else shareTitle = inst.html2Text(shareTitle);
                    if ($(this).hasClass("html5-social-facebook")) window.open("https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(shareUrl) + "&t=" + encodeURIComponent(shareTitle), "_blank");
                    else if ($(this).hasClass("html5-social-twitter")) window.open("https://twitter.com/share?url=" +
                        encodeURIComponent(shareUrl) + "&text=" + encodeURIComponent(shareTitle), "_blank");
                    else if ($(this).hasClass("html5-social-pinterest")) window.open("https://pinterest.com/pin/create/bookmarklet/?media=" + encodeURIComponent(shareMedia) + "&url=" + encodeURIComponent(shareUrl) + "&description=" + encodeURIComponent(shareTitle) + "&is_video=" + (isVideo ? "true" : "false"), "_blank");
                    else if ($(this).hasClass("html5-social-email")) window.open("mailto:?subject=" + encodeURIComponent(shareTitle) + "&body=Check out this: " + encodeURIComponent(shareUrl));
                    return false
                })
            }
            if (inst.options.fullscreenmode) {
                inst.$lightbox.append("<div class='html5-next-fullscreen' style='cursor:pointer;position:absolute;right:" + inst.options.bordersize + "px;top:50%;margin-top:-16px;'><img alt='' src='" + inst.options.fullscreennextimage + "'></div>" + "<div class='html5-prev-fullscreen' style='cursor:pointer;position:absolute;left:" + inst.options.bordersize + "px;top:50%;margin-top:-16px;'><img alt='' src='" + inst.options.fullscreenprevimage + "'></div>");
                inst.$next = $(".html5-next-fullscreen",
                    inst.$lightbox);
                inst.$prev = $(".html5-prev-fullscreen", inst.$lightbox);
                inst.$lightboxBox.append("<div class='html5-next-bottom-fullscreen' style='cursor:pointer;position:absolute;top:100%;right:0;margin-top:8px;'><img alt='' src='" + inst.options.fullscreennextimage + "'></div>" + "<div class='html5-prev-bottom-fullscreen' style='cursor:pointer;position:absolute;top:100%;left:0;margin-top:8px;'><img alt='' src='" + inst.options.fullscreenprevimage + "'></div>");
                inst.$nextbottom = $(".html5-next-bottom-fullscreen",
                    inst.$lightbox);
                inst.$prevbottom = $(".html5-prev-bottom-fullscreen", inst.$lightbox);
                inst.$nextbottom.click(function() {
                    inst.nextArrowClicked()
                });
                inst.$prevbottom.click(function() {
                    inst.prevArrowClicked()
                });
                inst.$lightbox.append("<div id='html5-close-fullscreen' style='display:block;cursor:pointer;position:absolute;top:0;right:0;margin-top:0;margin-right:0;'><img alt='' src='" + inst.options.fullscreencloseimage + "'></div>");
                inst.$close = $("#html5-close-fullscreen", inst.$lightbox)
            } else {
                inst.$lightboxBox.append("<div class='html5-next' style='display:none;cursor:pointer;position:absolute;right:" +
                    inst.options.bordersize + "px;top:50%;margin-top:-32px;'><img alt='' src='" + inst.options.nextimage + "'></div>" + "<div class='html5-prev' style='display:none;cursor:pointer;position:absolute;left:" + inst.options.bordersize + "px;top:50%;margin-top:-32px;'><img alt='' src='" + inst.options.previmage + "'></div>");
                inst.$next = $(".html5-next", inst.$lightbox);
                inst.$prev = $(".html5-prev", inst.$lightbox);
                if (inst.options.isTouch && inst.options.navarrowsalwaysshowontouch || inst.options.alwaysshownavarrows) {
                    inst.$lightboxBox.append("<div class='html5-next-touch' style='display:block;cursor:pointer;position:absolute;'><img alt='' src='" +
                        inst.options.nextimage + "'></div>" + "<div class='html5-prev-touch' style='display:block;cursor:pointer;position:absolute;'><img alt='' src='" + inst.options.previmage + "'></div>");
                    inst.$nexttouch = $(".html5-next-touch", inst.$lightbox);
                    inst.$prevtouch = $(".html5-prev-touch", inst.$lightbox);
                    inst.$nexttouch.click(function() {
                        inst.nextArrowClicked()
                    });
                    inst.$prevtouch.click(function() {
                        inst.prevArrowClicked()
                    })
                }
                inst.$lightboxBox.append("<div id='html5-close' style='display:none;cursor:pointer;position:absolute;top:0;right:0;margin-top:-16px;margin-right:-16px;'><img alt='' src='" +
                    inst.options.closeimage + "'></div>");
                inst.$close = $("#html5-close", inst.$lightbox)
            }
            if (inst.options.titlestyle == "inside" && inst.options.showonmouseoverinside) inst.$lightboxBox.hover(function() {
                if (inst.currentElem[ELEM_TYPE] == 0 || !inst.options.showinsidetitleforimageonly) inst.$elemData.animate({
                    opacity: 1
                }, 400)
            }, function() {
                inst.$elemData.animate({
                    opacity: 0
                }, 400)
            });
            inst.$watermark = $("#html5-watermark", inst.$lightbox);
            if (inst.options.stamp) inst.$watermark.html("<a href='" + inst.options.freelink + "' style='text-decoration:none;' title='jQuery Lightbox'><div style='display:block;width:170px;height:20px;text-align:center;border-radius:3px;-moz-border-radius:3px;-webkit-border-radius:3px;background-color:#fff;color:#333;font:12px Arial,sans-serif;'><div style='line-height:20px;'>" +
                inst.options.freemark + "</div></div></a>");
            else if (inst.options.watermark) {
                var html = "<img alt='' src='" + inst.options.watermark + "' style='border:none;' />";
                if (inst.options.watermarklink) html = "<a href='" + inst.options.watermarklink + "' target='_blank'>" + html + "</a>";
                inst.$watermark.html(html)
            }
            if (inst.options.closeonoverlay) $("#html5-lightbox-overlay", inst.$lightbox).click(inst.finish);
            inst.$close.click(inst.finish);
            inst.$next.click(function() {
                inst.nextArrowClicked()
            });
            inst.$prev.click(function() {
                inst.prevArrowClicked()
            });
            $(window).resize(function() {
                if (inst.options.isIOS && !inst.options.mobileresizeevent) return;
                clearTimeout(inst.options.resizeTimeout);
                inst.options.resizeTimeout = setTimeout(function() {
                    inst.resizeWindow()
                }, inst.options.resizedelay)
            });
            $(window).scroll(function() {
                if (inst.options.isIOS && !inst.options.mobileresizeevent) return;
                inst.scrollBox()
            });
            $(window).on("orientationchange", function(e) {
                if (inst.options.isMobile) inst.resizeWindow()
            });
            if (inst.options.enabletouchswipe) inst.enableSwipe()
        };
        inst.html2Text = function(html) {
            var tag =
                document.createElement("div");
            tag.innerHTML = html;
            return tag.innerText
        };
        inst.slideTimer = function(interval, callback, updatecallback) {
            var timerInstance = this;
            timerInstance.timeout = interval;
            var updateinterval = 50;
            var updateTimerId = null;
            var runningTime = 0;
            var paused = false;
            var started = false;
            var startedandpaused = false;
            this.pause = function() {
                if (started) {
                    paused = true;
                    clearInterval(updateTimerId)
                }
            };
            this.resume = function(forceresume) {
                if (startedandpaused && !forceresume) return;
                startedandpaused = false;
                if (started && paused) {
                    paused =
                        false;
                    updateTimerId = setInterval(function() {
                        runningTime += updateinterval;
                        if (runningTime > timerInstance.timeout) {
                            clearInterval(updateTimerId);
                            if (callback) callback()
                        }
                        if (updatecallback) updatecallback(runningTime / timerInstance.timeout)
                    }, updateinterval)
                }
            };
            this.stop = function() {
                clearInterval(updateTimerId);
                if (updatecallback) updatecallback(-1);
                runningTime = 0;
                paused = false;
                started = false
            };
            this.start = function() {
                runningTime = 0;
                paused = false;
                started = true;
                updateTimerId = setInterval(function() {
                    runningTime += updateinterval;
                    if (runningTime > timerInstance.timeout) {
                        clearInterval(updateTimerId);
                        if (callback) callback()
                    }
                    if (updatecallback) updatecallback(runningTime / timerInstance.timeout)
                }, updateinterval)
            };
            this.startandpause = function() {
                runningTime = 0;
                paused = true;
                started = true;
                startedandpaused = true
            };
            return this
        };
        inst.updateTimer = function(percent) {
            var w = Math.round(percent * 100);
            if (w > 100) w = 100;
            if (w < 0) w = 0;
            $(".html5-timer", inst.$lightbox).css({
                display: "block",
                width: w + "%"
            })
        };
        inst.initSlide = function() {
            inst.autosliding = false;
            inst.slideTimeout =
                inst.slideTimer(inst.options.slideinterval, function() {
                    inst.gotoSlide(-1)
                }, inst.options.showtimer ? function(percent) {
                    inst.updateTimer(percent)
                } : null);
            if (inst.options.autoslide) {
                inst.slideTimeout.stop();
                inst.autosliding = true
            }
        };
        inst.nextArrowClicked = function() {
            if (inst.options.nextElem <= inst.options.curElem)
                if (inst.options.onlastarrowclicked && window[inst.options.onlastarrowclicked] && typeof window[inst.options.onlastarrowclicked] == "function") window[inst.options.onlastarrowclicked]();
            inst.gotoSlide(-1)
        };
        inst.prevArrowClicked = function() {
            if (inst.options.prevElem >= inst.options.curElem)
                if (inst.options.onfirstarrowclicked && window[inst.options.onfirstarrowclicked] && typeof window[inst.options.onfirstarrowclicked] == "function") window[inst.options.onfirstarrowclicked]();
            inst.gotoSlide(-2)
        };
        inst.calcNextPrevElem = function() {
            inst.options.nextElem = -1;
            inst.options.prevElem = -1;
            inst.options.inGroup = false;
            inst.options.groupIndex = 0;
            inst.options.groupCount = 0;
            var group = inst.elemArray[inst.options.curElem][ELEM_GROUP];
            for (var i = 0; i < inst.elemArray.length; i++)
                if (inst.matchGroup(group, inst.elemArray[i][ELEM_GROUP])) {
                    if (i == inst.options.curElem) inst.options.groupIndex = inst.options.groupCount;
                    inst.options.groupCount++
                } var j, curGroup = inst.elemArray[inst.options.curElem][ELEM_GROUP];
            if (curGroup != undefined && curGroup != null) {
                for (j = inst.options.curElem + 1; j < inst.elemArray.length; j++)
                    if (inst.matchGroup(curGroup, inst.elemArray[j][ELEM_GROUP])) {
                        inst.options.nextElem = j;
                        break
                    } if (inst.options.nextElem < 0)
                    for (j = 0; j < inst.options.curElem; j++)
                        if (inst.matchGroup(curGroup,
                                inst.elemArray[j][ELEM_GROUP])) {
                            inst.options.nextElem = j;
                            break
                        } if (inst.options.nextElem >= 0) {
                    for (j = inst.options.curElem - 1; j >= 0; j--)
                        if (inst.matchGroup(curGroup, inst.elemArray[j][ELEM_GROUP])) {
                            inst.options.prevElem = j;
                            break
                        } if (inst.options.prevElem < 0)
                        for (j = inst.elemArray.length - 1; j > inst.options.curElem; j--)
                            if (inst.matchGroup(curGroup, inst.elemArray[j][ELEM_GROUP])) {
                                inst.options.prevElem = j;
                                break
                            }
                }
            }
            if (inst.options.nextElem >= 0 || inst.options.prevElem >= 0) inst.options.inGroup = true
        };
        inst.calcBoxPosition = function(initW,
            initH) {
            var boxW = initW + 2 * inst.options.bordersize;
            var boxH = initH + 2 * inst.options.bordersize;
            var navH = inst.options.shownavigation && inst.navvisible ? inst.options.navheight : 0;
            var winH = $(window).height();
            var boxT = Math.round((winH - navH) / 2 - boxH / 2);
            if (inst.options.titlestyle == "bottom") boxT -= Math.round(inst.options.barheight / 2);
            var topmargin = $(window).height() < inst.options.smallscreenheight ? inst.options.bordertopmarginsmall : inst.options.bordertopmargin;
            if (boxT < topmargin) boxT = topmargin;
            if (inst.options.insideiframe &&
                window.self != window.top)
                if (parent.window.jQuery && parent.window.jQuery("#" + inst.options.iframeid).length) {
                    var iframetop = parent.window.jQuery("#" + inst.options.iframeid).offset().top;
                    var parentscroll = parent.window.document.body.scrollTop;
                    boxT = topmargin;
                    boxT += parentscroll > iframetop ? parentscroll - iframetop : 0
                } return [boxW, boxH, boxT]
        };
        inst.hideNavArrows = function() {
            var showPrev = false;
            var showNext = false;
            if (inst.options.inGroup) {
                if (inst.options.arrowloop || !inst.options.arrowloop && inst.options.prevElem < inst.options.curElem) showPrev =
                    true;
                if (inst.options.arrowloop || !inst.options.arrowloop && inst.options.nextElem > inst.options.curElem) showNext = true
            }
            if (showPrev) {
                inst.$prev.removeClass("html5-hide");
                if (inst.$prevbottom) inst.$prevbottom.removeClass("html5-hide");
                if (inst.$prevtouch) inst.$prevtouch.removeClass("html5-hide")
            } else {
                inst.$prev.addClass("html5-hide");
                if (inst.$prevbottom) inst.$prevbottom.addClass("html5-hide");
                if (inst.$prevtouch) inst.$prevtouch.addClass("html5-hide")
            }
            if (showNext) {
                inst.$next.removeClass("html5-hide");
                if (inst.$nextbottom) inst.$nextbottom.removeClass("html5-hide");
                if (inst.$nexttouch) inst.$nexttouch.removeClass("html5-hide")
            } else {
                inst.$next.addClass("html5-hide");
                if (inst.$nextbottom) inst.$nextbottom.addClass("html5-hide");
                if (inst.$nexttouch) inst.$nexttouch.addClass("html5-hide")
            }
        };
        inst.clickHandler = function() {
            var $this = $(this);
            var dataoptions = {};
            $.each($this.data(), function(key, value) {
                dataoptions[key.toLowerCase()] = value
            });
            inst.options = $.extend(inst.options, inst.defaultoptions, dataoptions);
            $(window).trigger("html5lightbox.lightboxshow");
            inst.init();
            if (inst.elemArray.length <=
                0) return true;
            inst.hideObjects();
            for (var i = 0; i < inst.elemArray.length; i++)
                if (inst.elemArray[i][ELEM_HREF] == $this.attr("href")) break;
            if (i == inst.elemArray.length) return true;
            inst.options.curElem = i;
            inst.calcNextPrevElem();
            inst.reset();
            inst.$lightbox.show();
            var boxPos = inst.calcBoxPosition(inst.options.loadingwidth, inst.options.loadingheight);
            var boxW = boxPos[0];
            var boxH = boxPos[1];
            var boxT = boxPos[2];
            if (inst.options.iequirksmode) inst.$lightboxBox.css({
                "top": boxT
            });
            else inst.$lightboxBox.css({
                "margin-top": boxT
            });
            if (inst.options.titlestyle == "left" || inst.options.titlestyle == "right") inst.$lightboxBox.css({
                "width": boxW,
                "height": boxH
            });
            else {
                inst.$lightboxBox.css({
                    "width": boxW,
                    "height": "auto"
                });
                inst.$elemWrap.css({
                    "width": boxW,
                    "height": boxH
                })
            }
            inst.loadCurElem();
            return false
        };
        inst.loadThumbnail = function(src, index, title) {
            var imgLoader = new Image;
            $(imgLoader).on("load", function() {
                var style;
                if (this.width / this.height <= inst.options.thumbwidth / inst.options.thumbheight) style = "width:100%;";
                else style = "height:100%;";
                $(".html5-nav-thumb").eq(index).html("<img alt='" +
                    inst.html2Text(title) + "' style='" + style + "' src='" + src + "' />")
            });
            imgLoader.src = src
        };
        inst.matchGroup = function(curGroup, elemGroup) {
            if (inst.options.showall) return true;
            if (!curGroup || !elemGroup) return false;
            var curs = curGroup.split(":");
            var elems = elemGroup.split(":");
            var result = false;
            for (var i in curs)
                if ($.inArray(curs[i], elems) > -1) {
                    result = true;
                    break
                } return result
        };
        inst.showNavigation = function() {
            if (!inst.options.shownavigation) return;
            if (!inst.currentElem || !inst.currentElem[ELEM_GROUP]) return;
            var i;
            var showNav =
                false;
            var group = inst.currentElem[ELEM_GROUP];
            for (i = 0; i < inst.elemArray.length; i++)
                if (inst.matchGroup(group, inst.elemArray[i][ELEM_GROUP]))
                    if (inst.elemArray[i][ELEM_THUMBNAIL] && inst.elemArray[i][ELEM_THUMBNAIL].length > 0) {
                        showNav = true;
                        break
                    } if (!showNav) return;
            inst.options.navheight = inst.options.thumbheight + inst.options.thumbtopmargin + inst.options.thumbbottommargin;
            if ($(".html5-nav").length > 0) return;
            var posCss = inst.options.hidenavdefault ? "top:100%;bottom:auto;left:0;right:0;" : "top:auto;bottom:0;left:0;right:0;";
            var posType = inst.options.positionFixed ? "fixed" : "absolute";
            $("body").append("<div class='html5-nav' style='display:block;position:" + posType + ";" + posCss + "width:100%;height:" + inst.options.navheight + "px;z-index:9999999;" + (inst.options.navbgcolor ? "background-color:" + inst.options.navbgcolor + ";" : "") + "'>" + "<div class='html5-nav-container' style='position:relative;margin:" + inst.options.thumbtopmargin + "px auto " + inst.options.thumbbottommargin + "px;'>" + "<div class='html5-nav-prev' style='display:block;position:absolute;cursor:pointer;width:" +
                inst.options.navbuttonwidth + 'px;height:100%;left:0;top:0;background:url("' + inst.options.navarrowsprevimage + "\") no-repeat left center;'></div>" + "<div class='html5-nav-mask' style='display:block;position:relative;margin:0 auto;overflow:hidden;'>" + "<div class='html5-nav-list'></div>" + "</div>" + "<div class='html5-nav-next' style='display:block;position:absolute;cursor:pointer;width:" + inst.options.navbuttonwidth + 'px;height:100%;right:0;top:0;background:url("' + inst.options.navarrowsnextimage + "\") no-repeat right center;'></div>" +
                "</div>" + "</div>");
            inst.navvisible = inst.options.hidenavdefault ? false : true;
            if (inst.options.shownavcontrol) {
                $(".html5-nav").append('<div class="html5-nav-showcontrol" style="position:absolute;display:block;cursor:pointer;bottom:100%;right:12px;margin:0;padding:0;"><img alt="" src="' + inst.options.navcontrolimage + '"></div>');
                $(".html5-nav-showcontrol").click(function() {
                    var winH = $(window).height();
                    var navH = $(".html5-nav").height();
                    if (inst.navvisible) {
                        inst.navvisible = false;
                        $(".html5-nav").css({
                            top: winH -
                                navH + "px",
                            bottom: "auto"
                        }).animate({
                            top: winH + "px"
                        }, function() {
                            $(this).css({
                                top: "100%",
                                bottom: "auto"
                            })
                        })
                    } else {
                        inst.navvisible = true;
                        var navH = $(".html5-nav").height();
                        $(".html5-nav").css({
                            top: winH + "px",
                            bottom: "auto"
                        }).animate({
                            top: winH - navH + "px"
                        }, function() {
                            $(this).css({
                                top: "auto",
                                bottom: 0
                            })
                        })
                    }
                    inst.resizeWindow()
                })
            }
            var index = 0;
            for (i = 0; i < inst.elemArray.length; i++)
                if (inst.matchGroup(group, inst.elemArray[i][ELEM_GROUP]))
                    if (inst.elemArray[i][ELEM_THUMBNAIL] && inst.elemArray[i][ELEM_THUMBNAIL].length > 0) {
                        $(".html5-nav-list").append("<div class='html5-nav-thumb' data-arrayindex='" +
                            i + "' style='float:left;overflow:hidden;cursor:pointer;opacity:" + inst.options.thumbopacity + ";margin: 0 " + inst.options.thumbgap / 2 + "px;width:" + inst.options.thumbwidth + "px;height:" + inst.options.thumbheight + "px;border:" + inst.options.thumbborder + "px solid " + inst.options.thumbbordercolor + ";'></div>");
                        this.loadThumbnail(inst.elemArray[i][ELEM_THUMBNAIL], index, inst.elemArray[i][ELEM_TITLE]);
                        index++
                    } $(".html5-nav-thumb").hover(function() {
                $(this).css({
                    opacity: 1
                });
                $(this).css({
                    border: inst.options.thumbborder +
                        "px solid " + inst.options.thumbhighlightbordercolor
                })
            }, function() {
                $(this).css({
                    opacity: inst.options.thumbopacity
                });
                $(this).css({
                    border: inst.options.thumbborder + "px solid " + inst.options.thumbbordercolor
                })
            });
            $(".html5-nav-thumb").click(function() {
                var index = $(this).data("arrayindex");
                if (index >= 0) inst.gotoSlide(index)
            });
            inst.options.totalwidth = index * (inst.options.thumbgap + inst.options.thumbwidth + 2 * inst.options.thumbborder);
            $(".html5-nav-list").css({
                display: "block",
                position: "relative",
                "margin-left": 0,
                width: inst.options.totalwidth +
                    "px"
            }).append("<div style='clear:both;'></div>");
            var $navMask = $(".html5-nav-mask");
            var $navPrev = $(".html5-nav-prev");
            var $navNext = $(".html5-nav-next");
            $navPrev.click(function() {
                var $navList = $(".html5-nav-list");
                var $navNext = $(".html5-nav-next");
                var winWidth = $(window).width();
                var maskWidth = winWidth - 2 * inst.options.navbuttonwidth;
                var marginLeft = parseInt($navList.css("margin-left")) + maskWidth;
                if (marginLeft >= 0) {
                    marginLeft = 0;
                    $(this).css({
                        "background-position": "center left"
                    })
                } else $(this).css({
                    "background-position": "center right"
                });
                if (marginLeft <= maskWidth - inst.options.totalwidth) $navNext.css({
                    "background-position": "center left"
                });
                else $navNext.css({
                    "background-position": "center right"
                });
                $navList.animate({
                    "margin-left": marginLeft
                })
            });
            $navNext.click(function() {
                var $navList = $(".html5-nav-list");
                var $navPrev = $(".html5-nav-prev");
                var winWidth = $(window).width();
                var maskWidth = winWidth - 2 * inst.options.navbuttonwidth;
                var marginLeft = parseInt($navList.css("margin-left")) - maskWidth;
                if (marginLeft <= maskWidth - inst.options.totalwidth) {
                    marginLeft =
                        maskWidth - inst.options.totalwidth;
                    $(this).css({
                        "background-position": "center left"
                    })
                } else $(this).css({
                    "background-position": "center right"
                });
                if (marginLeft >= 0) $navPrev.css({
                    "background-position": "center left"
                });
                else $navPrev.css({
                    "background-position": "center right"
                });
                $navList.animate({
                    "margin-left": marginLeft
                })
            });
            var winWidth = $(window).width();
            if (inst.options.totalwidth <= winWidth) {
                $navMask.css({
                    width: inst.options.totalwidth + "px"
                });
                $navPrev.hide();
                $navNext.hide()
            } else {
                $navMask.css({
                    width: winWidth -
                        2 * inst.options.navbuttonwidth + "px"
                });
                $navPrev.show();
                $navNext.show()
            }
        };
        inst.loadElem = function(elem) {
            inst.currentElem = elem;
            inst.showing = true;
            if (inst.options.bodynoscroll) $("html,body").addClass("bodynoscroll");
            if (!(inst.options.showtitle && inst.currentElem[ELEM_TITLE] && inst.currentElem[ELEM_TITLE].length > 0 || inst.options.showdescription && inst.currentElem[ELEM_DESCRIPTION] && inst.currentElem[ELEM_DESCRIPTION].length > 0 || inst.options.inGroup && (inst.options.showplaybutton || inst.options.showtitleprefix))) inst.options.barheight =
                0;
            inst.showNavigation();
            inst.$elem.off("mouseenter").off("mouseleave").off("mousemove");
            inst.$loading.show();
            if (inst.options.onshowitem && window[inst.options.onshowitem] && typeof window[inst.options.onshowitem] == "function") window[inst.options.onshowitem](elem);
            if (inst.options.transition == "slide" && inst.existingElem >= 0) {
                $(".html5-elem-box-previous").remove();
                var newitem = inst.$elem.clone();
                newitem.insertAfter(inst.$elem);
                inst.$prevelem = inst.$elem;
                inst.$elem = newitem;
                inst.$prevelem.addClass("html5-elem-box-previous");
                inst.$elem.addClass("html5-elem-box-current");
                inst.$elemWrap = $(".html5-elem-wrap", inst.$elem);
                inst.$loading = $(".html5-loading", inst.$elem);
                inst.$error = $(".html5-error-box", inst.$elem);
                inst.$image = $(".html5-image", inst.$elem);
                inst.$elemData = $(".html5-elem-data-box", inst.$elem);
                inst.$text = $(".html5-text", inst.$elem);
                inst.$elem.css({
                    position: "absolute",
                    top: 0,
                    left: inst.direction == -1 ? "100%" : "-100%",
                    opacity: 0,
                    height: "auto"
                });
                inst.$prevelem.css({
                    width: inst.$prevelem.width() + "px",
                    height: inst.$prevelem.height() +
                        "px"
                })
            }
            switch (elem[ELEM_TYPE]) {
                case 0:
                    var imgLoader = new Image;
                    $(imgLoader).on("load", function() {
                        elem[ELEM_ORIGINALWIDTH] = imgLoader.width;
                        elem[ELEM_ORIGINALHEIGHT] = imgLoader.height;
                        inst.showImage(elem, imgLoader.width, imgLoader.height)
                    });
                    $(imgLoader).on("error", function() {
                        inst.showError()
                    });
                    imgLoader.src = elem[ELEM_HREF];
                    break;
                case 1:
                    inst.showSWF(elem);
                    break;
                case 2:
                case 8:
                    inst.showVideo(elem);
                    break;
                case 3:
                case 4:
                case 9:
                case 11:
                case 12:
                    inst.showYoutubeVimeo(elem);
                    break;
                case 5:
                    inst.showPDF(elem);
                    break;
                case 6:
                    inst.showMP3(elem);
                    break;
                case 7:
                    inst.showWeb(elem);
                    break;
                case 10:
                    inst.showDiv(elem);
                    break
            }
            if (inst.options.googleanalyticsaccount && window._gaq) window._gaq.push(["_trackEvent", "Lightbox", "Open", elem[ELEM_HREF]]);
            if (inst.options.preload) {
                if (inst.options.nextElem >= 0 && inst.elemArray[inst.options.nextElem][ELEM_TYPE] == 0)(new Image).src = inst.elemArray[inst.options.nextElem][ELEM_HREF];
                if (inst.options.prevElem >= 0 && inst.elemArray[inst.options.prevElem][ELEM_TYPE] == 0)(new Image).src = inst.elemArray[inst.options.prevElem][ELEM_HREF]
            }
        };
        inst.loadCurElem = function() {
            inst.loadElem(inst.elemArray[inst.options.curElem])
        };
        inst.showError = function() {
            inst.$loading.hide();
            inst.resizeLightbox(inst.options.errorwidth, inst.options.errorheight, true, function() {
                inst.$loading.hide();
                inst.$error.show();
                inst.$elem.fadeIn(inst.options.fadespeed, function() {
                    inst.showData()
                })
            })
        };
        inst.calcTextWidth = function(objW) {
            return objW - 36
        };
        inst.showTitle = function(w, t, description) {
                if (inst.options.titlestyle == "inside") inst.$elemData.css({
                    width: w + "px"
                });
                var text = "";
                if (inst.options.showtitle)
                    if (t && t.length > 0) text += t;
                if (inst.options.inGroup) {
                    if (inst.options.showtitleprefix) text = "<span class='html5-title-prefix'>" + inst.options.titleprefix.replace("%NUM", inst.options.groupIndex + 1).replace("%TOTAL", inst.options.groupCount) + "</span> <span class='html5-title-caption'>" + text + "</span>";
                    if (inst.options.showplaybutton) text = "<div class='html5-playpause' style='display:inline-block;cursor:pointer;vertical-align:middle;'><div class='html5-play' style='display:block;'><img alt='' src='" +
                        inst.options.playimage + "'></div><div class='html5-pause' style='display:none;'><img alt='' src='" + inst.options.pauseimage + "'></div></div> " + text
                }
                if (text.length > 0) text = '<div class="html5-title">' + text + "</div>";
                if (inst.options.showdescription && description && description.length > 0) text += '<div class="html5-description">' + description + "</div>";
                inst.$text.html(text);
                if (inst.options.inGroup && inst.options.showplaybutton) {
                    if (inst.autosliding) {
                        $(".html5-play", inst.$lightbox).hide();
                        $(".html5-pause", inst.$lightbox).show()
                    } else {
                        $(".html5-play",
                            inst.$lightbox).show();
                        $(".html5-pause", inst.$lightbox).hide()
                    }
                    $(".html5-play", inst.$lightbox).click(function() {
                        $(".html5-play", inst.$lightbox).hide();
                        $(".html5-pause", inst.$lightbox).show();
                        if (inst.slideTimeout) {
                            inst.slideTimeout.stop();
                            inst.slideTimeout.start();
                            inst.autosliding = true
                        }
                    });
                    $(".html5-pause", inst.$lightbox).click(function() {
                        $(".html5-play", inst.$lightbox).show();
                        $(".html5-pause", inst.$lightbox).hide();
                        if (inst.slideTimeout) {
                            inst.slideTimeout.stop();
                            inst.autosliding = false
                        }
                    })
                }
                $("#html5-social",
                    inst.$lightbox).show();
                if (inst.options.showsocialmedia)
                    if (inst.currentElem[ELEM_SOCIALMEDIA])
                        if ($("#html5-socialmedia", inst.$lightboxBox).length > 0) $("#html5-socialmedia", inst.$lightboxBox).html(inst.currentElem[ELEM_SOCIALMEDIA]);
                        else inst.$lightboxBox.append('<div id="html5-socialmedia" style="' + inst.options.socialmediaposition + '">' + inst.currentElem[ELEM_SOCIALMEDIA] + "</div>");
                else if ($("#html5-socialmedia", inst.$lightboxBox).length > 0) $("#html5-socialmedia", inst.$lightboxBox).remove()
            }, inst.showImage =
            function(elem, imgW, imgH) {
                var elemW, elemH;
                if (elem[ELEM_WIDTH]) elemW = elem[ELEM_WIDTH];
                else {
                    elemW = imgW;
                    elem[ELEM_WIDTH] = imgW
                }
                if (elem[ELEM_HEIGHT]) elemH = elem[ELEM_HEIGHT];
                else {
                    elemH = imgH;
                    elem[ELEM_HEIGHT] = imgH
                }
                var sizeObj = inst.calcElemSize({
                    w: elemW,
                    h: elemH
                }, inst.options.imagekeepratio);
                inst.resizeLightbox(sizeObj.w, sizeObj.h, true, function() {
                    inst.$loading.hide();
                    inst.showTitle(sizeObj.w, elem[ELEM_TITLE], elem[ELEM_DESCRIPTION]);
                    var timercode = !inst.options.showtimer || !inst.options.inGroup ? "" : "<div class='html5-timer' style='display:none;position:absolute;" +
                        inst.options.timerposition + ":0;left:0;width:0;height:" + inst.options.timerheight + "px;background-color:" + inst.options.timercolor + ";opacity:" + inst.options.timeropacity + ";'></div>";
                    inst.$image.hide();
                    inst.$image.html("<div class='html5-image-container' style='display:block;position:relative;width:100%;height:100%;" + (inst.options.imagekeepratio ? "overflow:hidden;" : "overflow:auto;") + "'><img alt='" + inst.html2Text(elem[ELEM_TITLE]) + "' src='" + elem[ELEM_HREF] + "' width='100%' height='" + (inst.options.imagekeepratio ?
                        "100%" : "auto") + "' />" + timercode + "</div>");
                    inst.$image.fadeIn(inst.options.fadespeed);
                    inst.showData();
                    if (inst.autosliding) {
                        inst.slideTimeout.stop();
                        inst.slideTimeout.start()
                    }
                })
            };
        inst.showSWF = function(elem) {
            var dataW = elem[ELEM_WIDTH] ? elem[ELEM_WIDTH] : inst.options.defaultwidth;
            var dataH = elem[ELEM_HEIGHT] ? elem[ELEM_HEIGHT] : inst.options.defaultheight;
            var sizeObj = inst.calcElemSize({
                w: dataW,
                h: dataH
            }, true);
            dataW = sizeObj.w;
            dataH = sizeObj.h;
            inst.resizeLightbox(dataW, dataH, true, function() {
                inst.$loading.hide();
                inst.showTitle(sizeObj.w, elem[ELEM_TITLE], elem[ELEM_DESCRIPTION]);
                inst.$image.html("<div class='html5lightbox-swf' style='display:block;width:100%;height:100%;'></div>").show();
                inst.embedFlash($(".html5lightbox-swf", inst.$image), elem[ELEM_HREF], "window", {
                    width: dataW,
                    height: dataH
                });
                inst.$elem.show();
                inst.showData();
                if (inst.autosliding) {
                    inst.slideTimeout.stop();
                    inst.slideTimeout.start()
                }
            })
        };
        inst.showVideo = function(elem) {
            inst.slideTimeout.stop();
            var dataW = elem[ELEM_WIDTH] ? elem[ELEM_WIDTH] : inst.options.defaultwidth;
            var dataH = elem[ELEM_HEIGHT] ? elem[ELEM_HEIGHT] : inst.options.defaultheight;
            var sizeObj = inst.calcElemSize({
                w: dataW,
                h: dataH
            }, true);
            dataW = sizeObj.w;
            dataH = sizeObj.h;
            inst.resizeLightbox(dataW, dataH, true, function() {
                inst.$loading.hide();
                inst.showTitle(sizeObj.w, elem[ELEM_TITLE], elem[ELEM_DESCRIPTION]);
                inst.$image.html("<div class='html5lightbox-video' style='display:block;width:100%;height:100%;overflow:hidden;background-color:" + inst.options.videobgcolor + ";'></div>").show();
                var isHTML5 = false;
                if (inst.options.isIE678 ||
                    elem[ELEM_TYPE] == 8 || inst.options.isIE9 && inst.options.useflashonie9 || inst.options.isIE10 && inst.options.useflashonie10 || inst.options.isIE11 && inst.options.useflashonie11) isHTML5 = false;
                else if (inst.options.isMobile) isHTML5 = true;
                else if ((inst.options.html5player || !inst.options.flashInstalled) && inst.options.html5VideoSupported) {
                    isHTML5 = true;
                    if (inst.options.isFirefox || inst.options.isOpera)
                        if (!elem[ELEM_HREF_WEBM] && !elem[ELEM_HREF_OGG] && (!inst.options.canplaymp4 || inst.options.useflashformp4onfirefox)) isHTML5 =
                            false
                }
                if (isHTML5) {
                    var videoSrc = elem[ELEM_HREF];
                    if (inst.options.isFirefox || inst.options.isOpera)
                        if (elem[ELEM_HREF_WEBM]) videoSrc = elem[ELEM_HREF_WEBM];
                        else if (elem[ELEM_HREF_OGG]) videoSrc = elem[ELEM_HREF_OGG];
                    inst.embedHTML5Video($(".html5lightbox-video", inst.$image), videoSrc, inst.options.autoplay, inst.options.loopvideo)
                } else {
                    var videoFile = elem[ELEM_HREF];
                    if (videoFile.charAt(0) != "/" && videoFile.substring(0, 5) != "http:" && videoFile.substring(0, 6) != "https:") videoFile = inst.options.htmlfolder + videoFile;
                    inst.embedFlash($(".html5lightbox-video",
                        inst.$image), inst.options.jsfolder + "html5boxplayer.swf", "transparent", {
                        width: dataW,
                        height: dataH,
                        jsobjectname: "html5Lightbox",
                        hidecontrols: inst.options.videohidecontrols ? "1" : "0",
                        hideplaybutton: "0",
                        videofile: videoFile,
                        hdfile: "",
                        ishd: "0",
                        defaultvolume: inst.options.defaultvideovolume,
                        autoplay: inst.options.autoplay ? "1" : "0",
                        loop: inst.options.loopvideo ? "1" : "0",
                        errorcss: ".html5box-error" + inst.options.errorcss,
                        id: 0
                    })
                }
                inst.$elem.show();
                inst.showData()
            })
        };
        inst.loadNext = function() {
            $(window).trigger("html5lightbox.videofinished");
            if (inst.autosliding) inst.gotoSlide(-1);
            else if (inst.options.autoclose) setTimeout(function() {
                inst.finish()
            }, inst.options.autoclosedelay)
        };
        inst.getYoutubeParams = function(href) {
            var result = {};
            if (href.indexOf("?") < 0) return result;
            var params = href.substring(href.indexOf("?") + 1).split("&");
            for (var i = 0; i < params.length; i++) {
                var value = params[i].split("=");
                if (value && value.length == 2 && value[0].toLowerCase() != "v") result[value[0].toLowerCase()] = value[1]
            }
            return result
        };
        inst.getYoutubeId = function(href) {
            var youtubeId =
                "";
            var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\??v?=?))([^#\&\?]*).*/;
            var match = href.match(regExp);
            if (match && match[7] && match[7].length == 11) youtubeId = match[7];
            return youtubeId
        };
        inst.prepareYoutubeHref = function(href) {
            var youtubeId = inst.getYoutubeId(href);
            var protocol = "https:";
            var result = protocol + "//www.youtube.com/embed/" + youtubeId;
            var params = this.getYoutubeParams(href);
            var first = true;
            for (var key in params) {
                if (first) {
                    result += "?";
                    first = false
                } else result += "&";
                result += key + "=" + params[key]
            }
            return result
        };
        inst.prepareDailymotionHref = function(href) {
            if (href.match(/\:\/\/.*(dai\.ly)/i)) {
                var protocol = "https:";
                var id = href.match(/(dai\.ly\/)([a-zA-Z0-9\-\_]+)/)[2];
                href = protocol + "//www.dailymotion.com/embed/video/" + id
            }
            return href
        };
        inst.showYoutubeVimeo = function(elem) {
            inst.slideTimeout.stop();
            var dataW = elem[ELEM_WIDTH] ? elem[ELEM_WIDTH] : inst.options.defaultwidth;
            var dataH = elem[ELEM_HEIGHT] ? elem[ELEM_HEIGHT] : inst.options.defaultheight;
            var sizeObj = inst.calcElemSize({
                w: dataW,
                h: dataH
            }, true);
            dataW = sizeObj.w;
            dataH =
                sizeObj.h;
            inst.resizeLightbox(dataW, dataH, true, function() {
                inst.$loading.hide();
                inst.showTitle(sizeObj.w, elem[ELEM_TITLE], elem[ELEM_DESCRIPTION]);
                inst.$image.html("<div class='html5lightbox-video' style='display:block;width:100%;height:100%;overflow:hidden;'></div>").show();
                var href = elem[ELEM_HREF];
                var youtubeid = "";
                if (elem[ELEM_TYPE] == 3) {
                    youtubeid = inst.getYoutubeId(href);
                    href = inst.prepareYoutubeHref(href)
                }
                if (elem[ELEM_TYPE] == 9) href = inst.prepareDailymotionHref(href);
                if (inst.options.autoplay) {
                    href +=
                        href.indexOf("?") < 0 ? "?" : "&";
                    if (elem[ELEM_TYPE] == 11) href += "autoPlay=true";
                    else href += "autoplay=1"
                }
                if (inst.options.loopvideo) {
                    href += href.indexOf("?") < 0 ? "?" : "&";
                    switch (elem[ELEM_TYPE]) {
                        case 3:
                            href += "loop=1&playlist=" + youtubeid;
                            break;
                        case 4:
                        case 9:
                            href += "loop=1";
                            break;
                        case 11:
                            href += "endVideoBehavior=loop";
                            break
                    }
                }
                if (elem[ELEM_TYPE] == 3) {
                    if (href.indexOf("?") < 0) href += "?wmode=transparent&rel=0";
                    else href += "&wmode=transparent&rel=0";
                    if (inst.options.videohidecontrols) href += "&controls=0&showinfo=0";
                    href += "&enablejsapi=1&origin=" +
                        document.location.protocol + "//" + document.location.hostname
                } else if (elem[ELEM_TYPE] == 4) {
                    href += href.indexOf("?") < 0 ? "?" : "&";
                    href += "api=1&player_id=html5boxiframevideo" + inst.options.curElem
                }
                $(".html5lightbox-video", inst.$image).html("<iframe style='margin:0;padding:0;border:0;' class='html5boxiframevideo' id='html5boxiframevideo" + inst.options.curElem + "' width='100%' height='100%' src='" + href + "' frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>");
                inst.$elem.show();
                inst.showData();
                if (elem[ELEM_TYPE] == 3 && typeof YT === "object" && typeof YT.Player === "function") inst.ytplayer = new YT.Player("html5boxiframevideo" + inst.options.curElem, {
                    events: {
                        "onStateChange": function(event) {
                            if (event.data == YT.PlayerState.ENDED) {
                                $(window).trigger("html5lightbox.videofinished");
                                if (inst.autosliding) inst.gotoSlide(-1);
                                else if (inst.options.autoclose) setTimeout(function() {
                                    inst.finish()
                                }, inst.options.autoclosedelay)
                            }
                        }
                    }
                });
                else if (elem[ELEM_TYPE] == 4 && typeof $f === "function") {
                    var vimeoIframe = $("#html5boxiframevideo" +
                        inst.options.curElem)[0];
                    inst.vimeoPlayer = $f(vimeoIframe);
                    inst.vimeoPlayer.addEvent("ready", function() {
                        inst.vimeoPlayer.addEvent("finish", function(id) {
                            $(window).trigger("html5lightbox.videofinished");
                            if (inst.autosliding) inst.gotoSlide(-1);
                            else if (inst.options.autoclose) setTimeout(function() {
                                inst.finish()
                            }, inst.options.autoclosedelay)
                        })
                    })
                }
            })
        };
        inst.showPDF = function(elem) {
            if (inst.options.enablepdfjs) {
                if (inst.options.isIPhone && inst.options.openpdfinnewtaboniphone || inst.options.isIPad && inst.options.openpdfinnewtabonipad) {
                    var win =
                        window.open(elem[ELEM_HREF], "_blank");
                    win.focus();
                    inst.finish();
                    return
                }
                if (!inst.options.pdfjsengine) inst.options.pdfjsengine = inst.options.jsfolder + "pdfjs/web/viewer.html";
                var href = elem[ELEM_HREF];
                if (href.substring(0, 5) != "http:" && href.substring(0, 6) != "https:") href = inst.absoluteUrl(href);
                var pdfelem = jQuery.extend(true, {}, elem);
                pdfelem[ELEM_HREF] = inst.options.pdfjsengine + (inst.options.pdfjsengine.indexOf("?") < 0 ? "?" : "&") + "file=" + encodeURIComponent(href);
                inst.showWeb(pdfelem)
            } else if (inst.options.isIPhone ||
                inst.options.isIPad || inst.options.isAndroid || inst.options.isIE || inst.options.isIE11) {
                var win = window.open(elem[ELEM_HREF], "_blank");
                win.focus();
                inst.finish();
                return
            } else inst.showWeb(elem)
        };
        inst.showMP3 = function(elem) {};
        inst.showDiv = function(elem) {
            var winWidth = $(window).width();
            var winH = $(window).height();
            var navH = inst.options.shownavigation && inst.navvisible ? inst.options.navheight : 0;
            var dataW = elem[ELEM_WIDTH] ? elem[ELEM_WIDTH] : inst.options.usedefaultsizeforcontent ? inst.options.defaultwidth : winWidth;
            var dataH = elem[ELEM_HEIGHT] ? elem[ELEM_HEIGHT] : inst.options.usedefaultsizeforcontent ? inst.options.defaultheight : winH - navH;
            var sizeObj = inst.calcElemSize({
                w: dataW,
                h: dataH
            }, false);
            dataW = sizeObj.w;
            dataH = sizeObj.h;
            inst.resizeLightbox(dataW, dataH, true, function() {
                inst.$loading.hide();
                inst.showTitle(sizeObj.w, elem[ELEM_TITLE], elem[ELEM_DESCRIPTION]);
                inst.$image.html("<div class='html5lightbox-div' id='html5lightbox-div" + inst.options.curElem + "' style='display:block;width:100%;height:" + (inst.options.autoresizecontent ?
                    "auto" : "100%") + ";" + (inst.options.isIOS ? "-webkit-overflow-scrolling:touch;overflow-y:scroll;" : "overflow:auto;") + "'></div>").show();
                var divID = elem[ELEM_HREF];
                if ($(divID).length > 0) $(divID).children().appendTo($("#html5lightbox-div" + inst.options.curElem, inst.$image));
                else $("#html5lightbox-div" + inst.options.curElem, inst.$image).html("<div class='html5-error'>The specified div ID does not exist.</div>");
                inst.$elem.show();
                inst.showData();
                if (inst.options.autoresizecontent) inst.resizeWindow();
                if (inst.autosliding) {
                    inst.slideTimeout.stop();
                    inst.slideTimeout.start()
                }
            })
        };
        inst.isSameDomain = function(href) {
            if (href.substring(0, 5) != "http:" && href.substring(0, 6) != "https:") return true;
            var link = document.createElement("a");
            link.setAttribute("href", href);
            var result = link.protocol == document.location.protocol && link.host == document.location.host && link.port == document.location.port;
            link = null;
            return result
        };
        inst.showWeb = function(elem) {
            var winWidth = $(window).width();
            var winH = $(window).height();
            var navH = inst.options.shownavigation && inst.navvisible ? inst.options.navheight :
                0;
            var dataW = elem[ELEM_WIDTH] ? elem[ELEM_WIDTH] : inst.options.usedefaultsizeforcontent ? inst.options.defaultwidth : winWidth;
            var dataH = elem[ELEM_HEIGHT] ? elem[ELEM_HEIGHT] : inst.options.usedefaultsizeforcontent ? inst.options.defaultheight : winH - navH;
            var sizeObj = inst.calcElemSize({
                w: dataW,
                h: dataH
            }, false);
            dataW = sizeObj.w;
            dataH = sizeObj.h;
            inst.resizeLightbox(dataW, dataH, true, function() {
                inst.$loading.hide();
                inst.showTitle(sizeObj.w, elem[ELEM_TITLE], elem[ELEM_DESCRIPTION]);
                inst.$image.html("<div class='html5lightbox-web' style='display:block;width:100%;height:100%;" +
                    (inst.options.isIOS ? "-webkit-overflow-scrolling:touch;overflow-y:scroll;" : "") + "'></div>").show();
                $(".html5lightbox-web", inst.$image).html("<iframe style='margin:0;padding:0;border:0;' class='html5lightbox-web-iframe' width='100%' height='100%' src='" + elem[ELEM_HREF] + "' frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>");
                inst.$elem.show();
                inst.showData();
                if (inst.options.autoresizecontent && inst.isSameDomain(elem[ELEM_HREF])) {
                    $(".html5lightbox-web-iframe", inst.$image).data("sameorigin",
                        true);
                    $(".html5lightbox-web-iframe", inst.$image).on("load", function() {
                        $(this).data("sameoriginloaded", true);
                        inst.resizeWindow()
                    })
                }
                if (inst.autosliding) {
                    inst.slideTimeout.stop();
                    inst.slideTimeout.start()
                }
            })
        };
        inst.scrollBox = function() {};
        inst.resizeWindow = function() {
            if (!inst.currentElem) return;
            if (!inst.options.responsive) return;
            var winWidth = $(window).width();
            var winH = $(window).height();
            if (inst.options.responsivebarheight) {
                if (winH <= inst.options.smallscreenheight) inst.options.barheight = inst.options.barheightonsmallheight;
                else inst.options.barheight = inst.options.barheightoriginal;
                if (inst.options.titlestyle == "bottom" && inst.options.barautoheight != "auto") inst.$elemData.css({
                    height: inst.options.barheight + "px",
                    "max-height": inst.options.barheight + "px"
                })
            }
            if (!(inst.options.showtitle && inst.currentElem[ELEM_TITLE] && inst.currentElem[ELEM_TITLE].length > 0 || inst.options.showdescription && inst.currentElem[ELEM_DESCRIPTION] && inst.currentElem[ELEM_DESCRIPTION].length > 0 || inst.options.inGroup && (inst.options.showplaybutton || inst.options.showtitleprefix))) inst.options.barheight =
                0;
            var elemW, elemH, keepratio;
            if (inst.currentElem[ELEM_TYPE] == 5 || inst.currentElem[ELEM_TYPE] == 7 || inst.currentElem[ELEM_TYPE] == 10) {
                var navH = inst.options.shownavigation && inst.navvisible ? inst.options.navheight : 0;
                elemW = inst.currentElem[ELEM_WIDTH] ? inst.currentElem[ELEM_WIDTH] : inst.options.usedefaultsizeforcontent ? inst.options.defaultwidth : winWidth;
                elemH = inst.currentElem[ELEM_HEIGHT] ? inst.currentElem[ELEM_HEIGHT] : inst.options.usedefaultsizeforcontent ? inst.options.defaultheight : winH - navH;
                keepratio = false
            } else {
                elemW =
                    inst.currentElem[ELEM_WIDTH] ? inst.currentElem[ELEM_WIDTH] : inst.options.defaultwidth;
                elemH = inst.currentElem[ELEM_HEIGHT] ? inst.currentElem[ELEM_HEIGHT] : inst.options.defaultheight;
                if (inst.currentElem[ELEM_TYPE] == 0) keepratio = inst.options.imagekeepratio;
                else keepratio = true
            }
            var sizeObj = inst.calcElemSize({
                w: elemW,
                h: elemH
            }, keepratio);
            var boxPos = inst.calcBoxPosition(sizeObj.w, sizeObj.h);
            var boxW = boxPos[0];
            var boxH = boxPos[1];
            var boxT = boxPos[2];
            inst.$lightboxBox.css({
                "margin-top": boxT
            });
            if (inst.options.titlestyle ==
                "left" || inst.options.titlestyle == "right") inst.$lightboxBox.css({
                "width": boxW,
                "height": boxH
            });
            else {
                inst.$lightboxBox.css({
                    "width": boxW,
                    "height": "auto"
                });
                inst.$elemWrap.css({
                    "width": boxW,
                    "height": boxH
                })
            }
            if (inst.options.titlestyle == "inside") inst.$elemData.css({
                width: sizeObj.w + "px"
            });
            if (inst.options.autoresizecontent && (inst.currentElem[ELEM_TYPE] == 5 || inst.currentElem[ELEM_TYPE] == 7 || inst.currentElem[ELEM_TYPE] == 10)) {
                var resizeHeight = false;
                if (inst.currentElem[ELEM_TYPE] == 7 && $(".html5lightbox-web-iframe",
                        inst.$lightbox).length > 0 && $(".html5lightbox-web-iframe", inst.$lightbox).data("sameoriginloaded")) {
                    var iframe = $(".html5lightbox-web-iframe", inst.$lightbox)[0];
                    if (iframe && iframe.contentWindow && iframe.contentWindow.document && iframe.contentWindow.document.documentElement.offsetHeight)
                        if (elemH > iframe.contentWindow.document.documentElement.offsetHeight) {
                            elemH = iframe.contentWindow.document.documentElement.offsetHeight;
                            resizeHeight = true
                        }
                } else if (inst.currentElem[ELEM_TYPE] == 10 && $(".html5lightbox-div", inst.$lightbox).length >
                    0) {
                    var divH = $(".html5lightbox-div", inst.$lightbox).height();
                    if (elemH > divH) {
                        elemH = divH;
                        resizeHeight = true
                    }
                }
                if (resizeHeight) {
                    sizeObj = inst.calcElemSize({
                        w: elemW,
                        h: elemH
                    }, keepratio);
                    boxPos = inst.calcBoxPosition(sizeObj.w, sizeObj.h);
                    boxW = boxPos[0];
                    boxH = boxPos[1];
                    boxT = boxPos[2];
                    inst.$lightboxBox.css({
                        "margin-top": boxT
                    });
                    if (inst.options.titlestyle == "left" || inst.options.titlestyle == "right") inst.$lightboxBox.css({
                        "height": boxH
                    });
                    else {
                        inst.$lightboxBox.css({
                            "height": "auto"
                        });
                        inst.$elemWrap.css({
                            "height": boxH
                        })
                    }
                }
            }
            if ($(".html5-nav").length <=
                0) return;
            $(".html5-nav-list").css({
                "margin-left": 0
            });
            var $navMask = $(".html5-nav-mask");
            var $navPrev = $(".html5-nav-prev");
            var $navNext = $(".html5-nav-next");
            var winWidth = $(window).width();
            if (inst.options.totalwidth <= winWidth) {
                $navMask.css({
                    width: inst.options.totalwidth + "px"
                });
                $navPrev.hide();
                $navNext.hide()
            } else {
                $navMask.css({
                    width: winWidth - 2 * inst.options.navbuttonwidth + "px"
                });
                $navPrev.show();
                $navNext.show()
            }
        };
        inst.calcElemSize = function(sizeObj, keepratio) {
            if (!inst.options.responsive) return sizeObj;
            var winWidth = $(window).width();
            winWidth = winWidth ? winWidth : $(document).width();
            var winH = $(window).height();
            winH = winH ? winH : $(document).height();
            if ((inst.options.titlestyle == "left" || inst.options.titlestyle == "right") && winWidth > inst.options.sidetobottomscreenwidth) sizeObj.w = sizeObj.w * 100 / inst.options.imagepercentage;
            var navH = inst.options.shownavigation && inst.navvisible ? inst.options.navheight : 0;
            var topmargin = $(window).height() < inst.options.smallscreenheight ? inst.options.bordertopmarginsmall : inst.options.bordertopmargin;
            var h0 = winH - navH - 2 * inst.options.bordersize - 2 * topmargin;
            if (inst.options.titlestyle == "bottom") h0 -= inst.options.barheight;
            var w0 = winWidth - 2 * inst.options.bordersize - 2 * inst.options.bordermargin;
            if (inst.options.fullscreenmode && winWidth > inst.options.navarrowsbottomscreenwidth || (inst.options.isTouch && inst.options.navarrowsalwaysshowontouch || inst.options.alwaysshownavarrows) && winWidth > inst.options.navarrowsbottomscreenwidth) w0 -= 64;
            if ((inst.options.titlestyle == "left" || inst.options.titlestyle == "right") && winWidth <=
                inst.options.sidetobottomscreenwidth || inst.options.notkeepratioonsmallheight && winH <= inst.options.smallscreenheight) keepratio = false;
            if (inst.currentElem[ELEM_TYPE] == 0 && keepratio) {
                var ratio = inst.currentElem[ELEM_ORIGINALWIDTH] / inst.currentElem[ELEM_ORIGINALHEIGHT];
                sizeObj.h = Math.round(sizeObj.w / ratio);
                if (sizeObj.h > h0) {
                    sizeObj.w = Math.round(ratio * h0);
                    sizeObj.h = h0
                }
                if (sizeObj.w > w0) {
                    sizeObj.h = Math.round(w0 / ratio);
                    sizeObj.w = w0
                }
            } else {
                if (sizeObj.h > h0) {
                    if (keepratio) sizeObj.w = Math.round(sizeObj.w * h0 / sizeObj.h);
                    sizeObj.h = h0
                } else if (inst.options.maxheight) sizeObj.h = h0;
                if (sizeObj.w > w0) {
                    if (keepratio) sizeObj.h = Math.round(sizeObj.h * w0 / sizeObj.w);
                    sizeObj.w = w0
                }
            }
            return sizeObj
        };
        inst.showData = function() {
            if (inst.$text.text().length > 0) inst.$elemData.show();
            if (inst.options.titlestyle == "bottom" || inst.options.titlestyle == "inside") inst.$lightboxBox.css({
                height: "auto"
            });
            if (inst.$text.text().length > 0 && inst.options.titlestyle == "bottom") inst.$elemData.css({
                "max-height": inst.options.barheight + "px"
            });
            if (inst.options.positionFixed) $("#html5-lightbox-overlay",
                inst.$lightbox).css({
                height: Math.max($(window).height(), $(document).height())
            });
            else $("#html5-lightbox-overlay", inst.$lightbox).css({
                height: "100%"
            });
            $(window).trigger("html5lightbox.lightboxopened")
        };
        inst.resizeLightbox = function(elemW, elemH, bAnimate, onFinish) {
            inst.hideNavArrows();
            var boxPos = inst.calcBoxPosition(elemW, elemH);
            var boxW = boxPos[0];
            var boxH = boxPos[1];
            var boxT = boxPos[2];
            inst.$loading.hide();
            inst.$watermark.hide();
            if (inst.options.nextElem <= inst.options.curElem)
                if (inst.options.onlastitem &&
                    window[inst.options.onlastitem] && typeof window[inst.options.onlastitem] == "function") window[inst.options.onlastitem](inst.currentElem);
            if (inst.options.prevElem >= inst.options.curElem)
                if (inst.options.onfirstitem && window[inst.options.onfirstitem] && typeof window[inst.options.onfirstitem] == "function") window[inst.options.onfirstitem](inst.currentElem);
            if (!inst.options.fullscreenmode && (!inst.options.isTouch || !inst.options.navarrowsalwaysshowontouch) && !inst.options.alwaysshownavarrows) {
                inst.$lightboxBox.on("mouseenter mousemove",
                    function() {
                        if (inst.options.arrowloop && inst.options.prevElem >= 0 || !inst.options.arrowloop && inst.options.prevElem >= 0 && inst.options.prevElem < inst.options.curElem) inst.$prev.fadeIn();
                        if (inst.options.arrowloop && inst.options.nextElem >= 0 || !inst.options.arrowloop && inst.options.nextElem >= 0 && inst.options.nextElem > inst.options.curElem) inst.$next.fadeIn()
                    });
                inst.$lightboxBox.on("mouseleave", function() {
                    inst.$next.fadeOut();
                    inst.$prev.fadeOut()
                })
            }
            var existingBoxT = parseInt(inst.$lightboxBox.css("margin-top"));
            inst.$lightboxBox.css({
                "margin-top": boxT
            });
            var speed = bAnimate ? inst.options.resizespeed : 0;
            if (inst.options.fullscreenmode) speed = 0;
            if (inst.options.transition == "slide" && inst.existingElem >= 0) speed = 0;
            if (inst.options.titlestyle == "left" || inst.options.titlestyle == "right") {
                if (boxW == inst.$lightboxBox.width() && boxH == inst.$lightboxBox.height()) speed = 0;
                inst.$lightboxBox.animate({
                    width: boxW
                }, speed).animate({
                    height: boxH
                }, speed, function() {
                    inst.onAnimateFinish(onFinish)
                })
            } else {
                if (boxW == inst.$elemWrap.width() && boxH == inst.$elemWrap.height()) speed = 0;
                inst.$lightboxBox.css({
                    "width": boxW,
                    "height": "auto"
                });
                if (inst.options.transition == "slide" && inst.existingElem >= 0)
                    if ($(".html5-elem-box-previous", inst.$lightbox).length > 0) $(".html5-elem-box-previous", inst.$lightbox).css({
                        "margin-left": String(boxW / 2 - $(".html5-elem-box-previous", inst.$lightbox).width() / 2) + "px",
                        top: String(existingBoxT - boxT) + "px"
                    });
                inst.$elemWrap.animate({
                    width: boxW
                }, speed).animate({
                    height: boxH
                }, speed, function() {
                    inst.onAnimateFinish(onFinish)
                })
            }
        };
        inst.onAnimateFinish = function(onFinish) {
            inst.$loading.show();
            inst.$watermark.show();
            inst.$close.show();
            inst.$elem.css({
                "background-color": inst.options.bgcolor
            });
            onFinish();
            inst.finishCallback()
        };
        inst.finishCallback = function() {
            if (inst.options.transition == "slide" && inst.existingElem >= 0) {
                inst.$prevelem.animate({
                    left: inst.direction == -1 ? "-100%" : "100%",
                    opacity: 0
                }, {
                    duration: inst.options.transitionduration
                });
                inst.$elem.animate({
                    left: 0,
                    opacity: 1
                }, {
                    duration: inst.options.transitionduration,
                    always: function() {
                        inst.$prevelem.remove();
                        inst.$elem.removeClass("html5-elem-box-current").css({
                            position: "relative",
                            height: "100%"
                        })
                    }
                })
            }
        }, inst.resetDiv = function(elemID) {
            if (inst.elemArray.length > 0 && elemID >= 0)
                if (inst.elemArray[elemID][ELEM_TYPE] == 10) {
                    var divID = inst.elemArray[elemID][ELEM_HREF];
                    if ($(divID).length > 0) $("#html5lightbox-div" + elemID).children().appendTo($(divID))
                }
        };
        inst.reset = function() {
            if (inst.options.stamp) inst.$watermark.hide();
            inst.showing = false;
            inst.$image.empty();
            inst.$text.empty();
            inst.$error.hide();
            inst.$loading.hide();
            inst.$image.hide();
            if (inst.options.titlestyle == "bottom" || inst.options.titlestyle ==
                "inside") inst.$elemData.hide();
            if (!inst.options.fullscreenmode) inst.$close.hide();
            inst.$elem.css({
                "background-color": ""
            })
        };
        inst.resetNavigation = function() {
            inst.options.navheight = 0;
            $(".html5-nav").remove();
            inst.navvisible = false
        };
        inst.finish = function() {
            inst.existingElem = -1;
            inst.resetDiv(inst.options.curElem);
            if ($(".html5-lightbox-video", inst.$lightbox).length) $(".html5-lightbox-video", inst.$lightbox).attr("src", "");
            $("head").find("style").each(function() {
                if ($(this).data("creator") == "carousel-html5-lightbox") $(this).remove()
            });
            if (inst.options.bodynoscroll) $("html,body").removeClass("bodynoscroll");
            inst.slideTimeout.stop();
            inst.reset();
            inst.resetNavigation();
            inst.$lightbox.remove();
            $("#carousel-html5-lightbox").remove();
            inst.showObjects();
            if (inst.options.oncloselightbox && window[inst.options.oncloselightbox] && typeof window[inst.options.oncloselightbox] == "function") window[inst.options.oncloselightbox](inst.currentElem);
            if (inst.onLightboxClosed && typeof inst.onLightboxClosed == "function") inst.onLightboxClosed(inst.currentElem);
            $(window).trigger("html5lightbox.lightboxclosed")
        };
        inst.pauseSlide = function() {};
        inst.playSlide = function() {};
        inst.gotoSlide = function(slide) {
            inst.existingElem = inst.options.curElem;
            inst.direction = slide;
            inst.resetDiv(inst.options.curElem);
            if (slide == -1) {
                if (inst.options.nextElem < 0) return;
                inst.options.curElem = inst.options.nextElem
            } else if (slide == -2) {
                if (inst.options.prevElem < 0) return;
                inst.options.curElem = inst.options.prevElem
            } else if (slide >= 0) {
                inst.direction = slide > inst.options.curElem ? -1 : -2;
                inst.options.curElem =
                    slide
            }
            if (inst.autosliding) inst.slideTimeout.stop();
            inst.calcNextPrevElem();
            if (inst.options.transition != "slide") inst.reset();
            inst.loadCurElem();
            if (inst.options.titlestyle == "inside" && inst.options.showonmouseoverinside && inst.currentElem[ELEM_TYPE] !== 0 && inst.options.showinsidetitleforimageonly) inst.$elemData.css({
                opacity: 0
            })
        };
        inst.enableSwipe = function() {
            var preventDefault = inst.options.isAndroid && (inst.options.swipepreventdefaultonandroid || inst.options.androidVersion >= 0 && inst.options.androidVersion <= 5) ?
                true : false;
            inst.$lightboxBox.carouselTouchSwipe({
                preventWebBrowser: preventDefault,
                swipeDistance: inst.options.swipedistance,
                swipeLeft: function() {
                    inst.gotoSlide(-1)
                },
                swipeRight: function() {
                    inst.gotoSlide(-2)
                }
            })
        };
        inst.hideObjects = function() {
            $("select, embed, object").css({
                "visibility": "hidden"
            })
        };
        inst.showObjects = function() {
            $("select, embed, object").css({
                "visibility": "visible"
            })
        };
        inst.embedHTML5Video = function($container, src, autoplay, loopvideo) {
            $container.html("<div style='display:block;width:100%;height:100%;position:relative;'><video class='html5-lightbox-video' width='100%' height='100%'" +
                (inst.options.html5videoposter && inst.options.html5videoposter.length > 0 ? "poster='" + inst.options.html5videoposter + "'" : "") + (autoplay ? " autoplay" : "") + (loopvideo ? " loop" : "") + (inst.options.nativehtml5controls && !inst.options.videohidecontrols ? " controls='controls'" : "") + (inst.options.nativecontrolsnodownload ? ' controlsList="nodownload"' : "") + " src='" + src + "'></div>");
            if (!inst.options.nativehtml5controls && !inst.options.videohidecontrols) {
                $("video", $container).data("src", src);
                $("video", $container).acHTML5VideoControls(inst.options.skinsfolder,
                    inst, ".html5-lightbox-video", inst.options.videohidecontrols, false, inst.options.defaultvideovolume, inst.options.nativecontrolsonfullscreen, inst.options.nativecontrolsnodownload, null)
            }
            $("video", $container).off("ended").on("ended", function() {
                $(window).trigger("html5lightbox.videofinished");
                if (inst.autosliding) inst.gotoSlide(-1);
                else if (inst.options.autoclose) setTimeout(function() {
                    inst.finish()
                }, inst.options.autoclosedelay)
            })
        };
        inst.embedFlash = function($container, src, wmode, flashVars) {
            if (inst.options.flashInstalled) {
                var htmlOptions = {
                    pluginspage: "http://www.adobe.com/go/getflashplayer",
                    quality: "high",
                    allowFullScreen: "true",
                    allowScriptAccess: "always",
                    type: "application/x-shockwave-flash"
                };
                htmlOptions.width = "100%";
                htmlOptions.height = "100%";
                htmlOptions.src = src;
                htmlOptions.flashVars = $.param(flashVars);
                htmlOptions.wmode = wmode;
                var htmlString = "";
                for (var key in htmlOptions) htmlString += key + "=" + htmlOptions[key] + " ";
                $container.html("<embed " + htmlString + "/>")
            } else $container.html("<div class='html5lightbox-flash-error' style='display:block; position:relative;text-align:center; width:100%; left:0px; top:40%;'><div class='html5-error'><div>The required Adobe Flash Player plugin is not installed</div><br /><div style='display:block;position:relative;text-align:center;width:112px;height:33px;margin:0px auto;'><a href='http://www.adobe.com/go/getflashplayer'><img src='http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif' alt='Get Adobe Flash player' width='112' height='33'></img></a></div></div>")
        };
        inst.checkType = function(href) {
            if (!href) return -1;
            if (href.match(/\.(jpg|gif|png|bmp|jpeg)(.*)?$/i)) return 0;
            if (href.match(/[^\.]\.(swf)\s*$/i)) return 1;
            if (href.match(/\.(mp4|m4v|ogv|ogg|webm)(.*)?$/i)) return 2;
            if (href.match(/\:\/\/.*(youtube\.com)/i) || href.match(/\:\/\/.*(youtu\.be)/i)) return 3;
            if (href.match(/\:\/\/.*(vimeo\.com)/i)) return 4;
            if (href.match(/\:\/\/.*(dailymotion\.com)/i) || href.match(/\:\/\/.*(dai\.ly)/i)) return 9;
            if (href.match(/[^\.]\.(pdf)\s*$/i)) return 5;
            if (href.match(/[^\.]\.(mp3)\s*$/i)) return 6;
            if (href.match(/[^\.]\.(flv)\s*$/i)) return 8;
            if (href.match(/\#\w+/i)) return 10;
            if (href.match(/\:\/\/.*(wistia)/i)) return 11;
            return 7
        };
        inst.getURLParams = function() {
            var result = {};
            var params = window.location.search.substring(1).split("&");
            for (var i = 0; i < params.length; i++) {
                var value = params[i].split("=");
                if (value && value.length == 2) result[value[0].toLowerCase()] = unescape(value[1])
            }
            return result
        };
        inst.absoluteUrl = function(href) {
            var link = document.createElement("a");
            link.href = href;
            return link.protocol + "//" + link.host +
                link.pathname + link.search + link.hash
        };
        inst.showLightbox = function(type, href, title, width, height, webm, ogg, thumbnail, description) {
            inst.options = $.extend(inst.options, inst.defaultoptions);
            $(window).trigger("html5lightbox.lightboxshow");
            inst.init();
            inst.reset();
            inst.$lightbox.show();
            var boxPos = inst.calcBoxPosition(inst.options.loadingwidth, inst.options.loadingheight);
            var boxW = boxPos[0];
            var boxH = boxPos[1];
            var boxT = boxPos[2];
            inst.$lightboxBox.css({
                "margin-top": boxT
            });
            if (inst.options.titlestyle == "left" || inst.options.titlestyle ==
                "right") inst.$lightboxBox.css({
                "width": boxW,
                "height": boxH
            });
            else {
                inst.$lightboxBox.css({
                    "width": boxW,
                    "height": "auto"
                });
                inst.$elemWrap.css({
                    "width": boxW,
                    "height": boxH
                })
            }
            inst.loadElem(new Array(type, href, title, null, width, height, webm, ogg, thumbnail, description))
        };
        inst.addItem = function(href, title, group, width, height, webm, ogg, thumbnail, description, mediatype) {
            type = mediatype && mediatype >= 0 ? mediatype : inst.checkType(href);
            inst.elemArray.push(new Array(type, href, title, group, width, height, webm, ogg, thumbnail, description))
        };
        inst.showItem = function(href) {
            inst.options = $.extend(inst.options, inst.defaultoptions);
            $(window).trigger("html5lightbox.lightboxshow");
            inst.init();
            if (inst.elemArray.length <= 0) return true;
            inst.hideObjects();
            for (var i = 0; i < inst.elemArray.length; i++)
                if (inst.elemArray[i][ELEM_HREF] == href) break;
            if (i == inst.elemArray.length) return true;
            inst.options.curElem = i;
            inst.calcNextPrevElem();
            inst.reset();
            inst.$lightbox.show();
            var boxPos = inst.calcBoxPosition(inst.options.loadingwidth, inst.options.loadingheight);
            var boxW =
                boxPos[0];
            var boxH = boxPos[1];
            var boxT = boxPos[2];
            inst.$lightboxBox.css({
                "margin-top": boxT
            });
            if (inst.options.titlestyle == "left" || inst.options.titlestyle == "right") inst.$lightboxBox.css({
                "width": boxW,
                "height": boxH
            });
            else {
                inst.$lightboxBox.css({
                    "width": boxW,
                    "height": "auto"
                });
                inst.$elemWrap.css({
                    "width": boxW,
                    "height": boxH
                })
            }
            inst.loadCurElem();
            return false
        };
        inst.off("click").click(inst.clickHandler);
        inst.each(function() {
            var self = $(this);
            var autoopen = false;
            var autoopendelay = 0;
            if (typeof html5lightbox_options !=
                "undefined" && html5lightbox_options) {
                if ("autoopen" in html5lightbox_options) autoopen = html5lightbox_options.autoopen;
                if ("autoopendelay" in html5lightbox_options) autoopendelay = html5lightbox_options.autoopendelay
            }
            autoopen = self.data("autoopen") ? self.data("autoopen") : autoopen;
            autoopendelay = self.data("autoopendelay") ? self.data("autoopendelay") : autoopendelay;
            if (autoopen) {
                setTimeout(function() {
                    self.click()
                }, autoopendelay);
                return false
            }
            if (self.data("preloadonpageload")) {
                var fileType = "mediatype" in self.data() ?
                    self.data("mediatype") : inst.checkType(self.attr("href"));
                if (fileType == 0) {
                    var preloaddelay = self.data("preloaddelay") ? self.data("preloaddelay") : 0;
                    setTimeout(function() {
                        (new Image).src = self.attr("href")
                    }, preloaddelay)
                }
            }
        });
        var urlParams = inst.getURLParams();
        if ("html5lightboxshare" in urlParams) {
            var shareUrl = decodeURIComponent(urlParams["html5lightboxshare"]);
            var shareLink = $('.html5lightbox[href="' + shareUrl + '"]');
            if (shareLink.length > 0) shareLink.click()
        }
        if (inst.options.preloadallonpageload) setTimeout(function() {
            inst.each(function() {
                if (this.nodeName.toLowerCase() !=
                    "a" && this.nodeName.toLowerCase() != "area") return;
                var fileType = "mediatype" in $(this).data() ? $(this).data("mediatype") : inst.checkType($(this).attr("href"));
                if (fileType !== 0) return;
                (new Image).src = $(this).attr("href");
                if ($(this).data("thumbnail"))(new Image).src = $(this).data("thumbnail")
            })
        }, inst.options.preloadalldelay);
        return inst
    }
})(jQuery);
(function($) {
    $.fn.acHTML5VideoControls = function(skinFolder, parentInst, videoElem, hideControls, hidePlayButton, defaultVolume, fullscreenNativeControls, html5VideoNoDownload, skinImages) {
        var isTouch = "ontouchstart" in window;
        var eStart = isTouch ? "touchstart" : "mousedown";
        var eMove = isTouch ? "touchmove" : "mousemove";
        var eCancel = isTouch ? "touchcancel" : "mouseup";
        var eClick = "click";
        var BUTTON_SIZE = 32;
        var BAR_HEIGHT = isTouch ? 48 : 36;
        var hideControlsTimerId = null;
        var hideVolumeBarTimeoutId = null;
        var sliderDragging = false;
        var isFullscreen =
            false;
        var userActive = true;
        var isHd = $(this).data("ishd");
        var hd = $(this).data("hd");
        var src = $(this).data("src");
        var $videoObj = $(this);
        $videoObj.get(0).removeAttribute("controls");
        var $videoPlay = $("<div class='html5boxVideoPlay'></div>");
        $videoObj.after($videoPlay);
        var playbuttonImage = skinImages && "playbutton" in skinImages && skinImages.playbutton.length > 0 ? skinImages.playbutton : skinFolder + "html5boxplayer_playvideo.png";
        $videoPlay.css({
            position: "absolute",
            top: "50%",
            left: "50%",
            display: "block",
            cursor: "pointer",
            width: 64,
            height: 64,
            "margin-left": -32,
            "margin-top": -32,
            "background-image": "url('" + playbuttonImage + "')",
            "background-position": "center center",
            "background-repeat": "no-repeat"
        }).on(eClick, function() {
            $videoObj.get(0).play()
        });
        var $videoFullscreenBg = $("<div class='html5boxVideoFullscreenBg'></div>");
        var $videoControls = $("<div class='html5boxVideoControls'>" + "<div class='html5boxVideoControlsBg'></div>" + "<div class='html5boxPlayPause'>" + "<div class='html5boxPlay'></div>" + "<div class='html5boxPause'></div>" +
            "</div>" + "<div class='html5boxTimeCurrent'>--:--</div>" + "<div class='html5boxFullscreen'></div>" + "<div class='html5boxHD'></div>" + "<div class='html5boxVolume'>" + "<div class='html5boxVolumeButton'></div>" + "<div class='html5boxVolumeBar'>" + "<div class='html5boxVolumeBarBg'>" + "<div class='html5boxVolumeBarActive'></div>" + "</div>" + "</div>" + "</div>" + "<div class='html5boxTimeTotal'>--:--</div>" + "<div class='html5boxSeeker'>" + "<div class='html5boxSeekerBuffer'></div>" + "<div class='html5boxSeekerPlay'></div>" +
            "<div class='html5boxSeekerHandler'></div>" + "</div>" + "<div style='clear:both;'></div>" + "</div>");
        $videoObj.after($videoControls);
        $videoObj.after($videoFullscreenBg);
        $videoFullscreenBg.css({
            display: "none",
            position: "fixed",
            left: 0,
            top: 0,
            bottom: 0,
            right: 0
        });
        $videoControls.css({
            display: "block",
            position: "absolute",
            width: "100%",
            height: BAR_HEIGHT,
            left: 0,
            bottom: 0,
            right: 0,
            margin: "0 auto"
        });
        var userActivate = function() {
            userActive = true
        };
        $videoObj.on("touch click mousemove mouseenter", function() {
            userActive = true
        });
        if (!hideControls) setInterval(function() {
            if (userActive) {
                $videoControls.show();
                userActive = false;
                clearTimeout(hideControlsTimerId);
                hideControlsTimerId = setTimeout(function() {
                    if (!$videoObj.get(0).paused) $videoControls.fadeOut()
                }, 5E3)
            }
        }, 250);
        $(".html5boxVideoControlsBg", $videoControls).css({
            display: "block",
            position: "absolute",
            width: "100%",
            height: "100%",
            left: 0,
            top: 0,
            "background-color": "#000000",
            opacity: 0.7,
            filter: "alpha(opacity=70)"
        });
        $(".html5boxPlayPause", $videoControls).css({
            display: "block",
            position: "relative",
            width: BUTTON_SIZE + "px",
            height: BUTTON_SIZE + "px",
            margin: Math.floor((BAR_HEIGHT - BUTTON_SIZE) / 2),
            "float": "left"
        });
        var $videoBtnPlay = $(".html5boxPlay", $videoControls);
        var $videoBtnPause = $(".html5boxPause", $videoControls);
        $videoBtnPlay.css({
            display: "block",
            position: "absolute",
            top: 0,
            left: 0,
            width: BUTTON_SIZE + "px",
            height: BUTTON_SIZE + "px",
            cursor: "pointer",
            "background-image": "url('" + skinFolder + "html5boxplayer_playpause.png" + "')",
            "background-position": "top left"
        }).hover(function() {
                $(this).css({
                    "background-position": "bottom left"
                })
            },
            function() {
                $(this).css({
                    "background-position": "top left"
                })
            }).on(eClick, function() {
            $videoObj.get(0).play()
        });
        $videoBtnPause.css({
            display: "none",
            position: "absolute",
            top: 0,
            left: 0,
            width: BUTTON_SIZE + "px",
            height: BUTTON_SIZE + "px",
            cursor: "pointer",
            "background-image": "url('" + skinFolder + "html5boxplayer_playpause.png" + "')",
            "background-position": "top right"
        }).hover(function() {
            $(this).css({
                "background-position": "bottom right"
            })
        }, function() {
            $(this).css({
                "background-position": "top right"
            })
        }).on(eClick, function() {
            $videoObj.get(0).pause()
        });
        var $videoTimeCurrent = $(".html5boxTimeCurrent", $videoControls);
        var $videoTimeTotal = $(".html5boxTimeTotal", $videoControls);
        var $videoSeeker = $(".html5boxSeeker", $videoControls);
        var $videoSeekerPlay = $(".html5boxSeekerPlay", $videoControls);
        var $videoSeekerBuffer = $(".html5boxSeekerBuffer", $videoControls);
        var $videoSeekerHandler = $(".html5boxSeekerHandler", $videoControls);
        $videoTimeCurrent.css({
            display: "block",
            position: "relative",
            "float": "left",
            "line-height": BAR_HEIGHT + "px",
            "font-weight": "normal",
            "font-size": "12px",
            margin: "0 8px",
            "font-family": "Arial, Helvetica, sans-serif",
            color: "#fff"
        });
        $videoTimeTotal.css({
            display: "block",
            position: "relative",
            "float": "right",
            "line-height": BAR_HEIGHT + "px",
            "font-weight": "normal",
            "font-size": "12px",
            margin: "0 8px",
            "font-family": "Arial, Helvetica, sans-serif",
            color: "#fff"
        });
        $videoSeeker.css({
            display: "block",
            cursor: "pointer",
            overflow: "hidden",
            position: "relative",
            height: "10px",
            "background-color": "#222",
            margin: Math.floor((BAR_HEIGHT - 10) / 2) + "px 4px"
        }).on(eStart, function(e) {
            var e0 =
                isTouch ? e.originalEvent.touches[0] : e;
            var pos = e0.pageX - $videoSeeker.offset().left;
            $videoSeekerPlay.css({
                width: pos
            });
            $videoObj.get(0).currentTime = pos * $videoObj.get(0).duration / $videoSeeker.width();
            $videoSeeker.on(eMove, function(e) {
                var e0 = isTouch ? e.originalEvent.touches[0] : e;
                var pos = e0.pageX - $videoSeeker.offset().left;
                $videoSeekerPlay.css({
                    width: pos
                });
                $videoObj.get(0).currentTime = pos * $videoObj.get(0).duration / $videoSeeker.width()
            })
        }).on(eCancel, function() {
            $videoSeeker.off(eMove)
        });
        $videoSeekerBuffer.css({
            display: "block",
            position: "absolute",
            left: 0,
            top: 0,
            height: "100%",
            "background-color": "#444"
        });
        $videoSeekerPlay.css({
            display: "block",
            position: "absolute",
            left: 0,
            top: 0,
            height: "100%",
            "background-color": "#fcc500"
        });
        var $videoFSObj = fullscreenNativeControls ? $videoObj : $videoObj.parent();
        if ($videoFSObj.get(0).requestFullscreen || $videoFSObj.get(0).webkitRequestFullScreen || $videoFSObj.get(0).mozRequestFullScreen || $videoFSObj.get(0).webkitEnterFullScreen || $videoFSObj.get(0).msRequestFullscreen) {
            var switchScreen = function(fullscreen) {
                if (fullscreen) {
                    if (fullscreenNativeControls) {
                        $videoObj.get(0).setAttribute("controls",
                            "controls");
                        if (html5VideoNoDownload) $videoObj.get(0).setAttribute("controlsList", "nodownload")
                    }
                    if ($videoFSObj.get(0).requestFullscreen) $videoFSObj.get(0).requestFullscreen();
                    else if ($videoFSObj.get(0).webkitRequestFullScreen) $videoFSObj.get(0).webkitRequestFullScreen();
                    else if ($videoFSObj.get(0).mozRequestFullScreen) $videoFSObj.get(0).mozRequestFullScreen();
                    else if ($videoFSObj.get(0).webkitEnterFullScreen) $videoFSObj.get(0).webkitEnterFullScreen();
                    if ($videoFSObj.get(0).msRequestFullscreen) $videoFSObj.get(0).msRequestFullscreen()
                } else if (document.cancelFullScreen) document.cancelFullScreen();
                else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
                else if (document.webkitCancelFullScreen) document.webkitCancelFullScreen();
                else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
                else if (document.msExitFullscreen) document.msExitFullscreen()
            };
            var switchScreenCSS = function(fullscreen) {
                if (fullscreenNativeControls)
                    if (fullscreen) {
                        $videoObj.get(0).setAttribute("controls", "controls");
                        if (html5VideoNoDownload) $videoObj.get(0).setAttribute("controlsList", "nodownload")
                    } else $videoObj.get(0).removeAttribute("controls");
                else if (fullscreen) {
                    $(document).on("mousemove", userActivate);
                    $videoControls.css({
                        "z-index": 2147483647,
                        position: "fixed"
                    });
                    $videoFullscreenBg.css({
                        "z-index": 2147483647,
                        display: "block"
                    });
                    $videoPlay.css({
                        "z-index": 2147483647
                    })
                } else {
                    $(document).off("mousemove", userActivate);
                    $videoControls.css({
                        "z-index": "",
                        position: "absolute"
                    });
                    $videoFullscreenBg.css({
                        "z-index": "",
                        display: "none"
                    });
                    $videoPlay.css({
                        "z-index": ""
                    })
                }
            };
            document.addEventListener("MSFullscreenChange", function() {
                isFullscreen = document.msFullscreenElement !=
                    null;
                switchScreenCSS(isFullscreen)
            }, false);
            document.addEventListener("fullscreenchange", function() {
                isFullscreen = document.fullscreen;
                switchScreenCSS(isFullscreen)
            }, false);
            document.addEventListener("mozfullscreenchange", function() {
                isFullscreen = document.mozFullScreen;
                switchScreenCSS(isFullscreen)
            }, false);
            document.addEventListener("webkitfullscreenchange", function() {
                isFullscreen = document.webkitIsFullScreen;
                switchScreenCSS(isFullscreen)
            }, false);
            $videoFSObj.get(0).addEventListener("webkitbeginfullscreen",
                function() {
                    isFullscreen = true;
                    switchScreenCSS(isFullscreen)
                }, false);
            $videoFSObj.get(0).addEventListener("webkitendfullscreen", function() {
                isFullscreen = false;
                switchScreenCSS(isFullscreen)
            }, false);
            if (!fullscreenNativeControls) $("head").append("<style type='text/css'>video" + videoElem + "::-webkit-media-controls { display:none !important; }</style>");
            var $videoFullscreen = $(".html5boxFullscreen", $videoControls);
            $videoFullscreen.css({
                display: "block",
                position: "relative",
                "float": "right",
                width: BUTTON_SIZE + "px",
                height: BUTTON_SIZE + "px",
                margin: Math.floor((BAR_HEIGHT - BUTTON_SIZE) / 2),
                cursor: "pointer",
                "background-image": "url('" + skinFolder + "html5boxplayer_fullscreen.png" + "')",
                "background-position": "left top"
            }).hover(function() {
                var backgroundPosX = $(this).css("background-position") ? $(this).css("background-position").split(" ")[0] : $(this).css("background-position-x");
                $(this).css({
                    "background-position": backgroundPosX + " bottom"
                })
            }, function() {
                var backgroundPosX = $(this).css("background-position") ? $(this).css("background-position").split(" ")[0] :
                    $(this).css("background-position-x");
                $(this).css({
                    "background-position": backgroundPosX + " top"
                })
            }).on(eClick, function() {
                isFullscreen = !isFullscreen;
                switchScreen(isFullscreen)
            })
        }
        if (hd) {
            var $videoHD = $(".html5boxHD", $videoControls);
            $videoHD.css({
                display: "block",
                position: "relative",
                "float": "right",
                width: BUTTON_SIZE + "px",
                height: BUTTON_SIZE + "px",
                margin: Math.floor((BAR_HEIGHT - BUTTON_SIZE) / 2),
                cursor: "pointer",
                "background-image": "url('" + skinFolder + "html5boxplayer_hd.png" + "')",
                "background-position": (isHd ? "right" :
                    "left") + " center"
            }).on(eClick, function() {
                isHd = !isHd;
                $(this).css({
                    "background-position": (isHd ? "right" : "left") + " center"
                });
                parentInst.isHd = isHd;
                var isPaused = $videoObj.get(0).isPaused;
                $videoObj.get(0).setAttribute("src", (isHd ? hd : src) + "#t=" + $videoObj.get(0).currentTime);
                if (!isPaused) $videoObj.get(0).play();
                else $videoObj.get(0).pause()
            })
        }
        $videoObj.get(0).volume = defaultVolume;
        var volumeSaved = defaultVolume == 0 ? 1 : defaultVolume;
        var volume = $videoObj.get(0).volume;
        $videoObj.get(0).volume = volume / 2 + 0.1;
        if ($videoObj.get(0).volume ===
            volume / 2 + 0.1) {
            $videoObj.get(0).volume = volume;
            var $videoVolume = $(".html5boxVolume", $videoControls);
            var $videoVolumeButton = $(".html5boxVolumeButton", $videoControls);
            var $videoVolumeBar = $(".html5boxVolumeBar", $videoControls);
            var $videoVolumeBarBg = $(".html5boxVolumeBarBg", $videoControls);
            var $videoVolumeBarActive = $(".html5boxVolumeBarActive", $videoControls);
            $videoVolume.css({
                display: "block",
                position: "relative",
                "float": "right",
                width: BUTTON_SIZE + "px",
                height: BUTTON_SIZE + "px",
                margin: Math.floor((BAR_HEIGHT -
                    BUTTON_SIZE) / 2)
            }).hover(function() {
                clearTimeout(hideVolumeBarTimeoutId);
                var volume = $videoObj.get(0).volume;
                $videoVolumeBarActive.css({
                    height: Math.round(volume * 100) + "%"
                });
                $videoVolumeBar.show()
            }, function() {
                clearTimeout(hideVolumeBarTimeoutId);
                hideVolumeBarTimeoutId = setTimeout(function() {
                    $videoVolumeBar.hide()
                }, 1E3)
            });
            $videoVolumeButton.css({
                display: "block",
                position: "absolute",
                top: 0,
                left: 0,
                width: BUTTON_SIZE + "px",
                height: BUTTON_SIZE + "px",
                cursor: "pointer",
                "background-image": "url('" + skinFolder + "html5boxplayer_volume.png" +
                    "')",
                "background-position": "top " + (volume > 0 ? "left" : "right")
            }).hover(function() {
                var backgroundPosX = $(this).css("background-position") ? $(this).css("background-position").split(" ")[0] : $(this).css("background-position-x");
                $(this).css({
                    "background-position": backgroundPosX + " bottom"
                })
            }, function() {
                var backgroundPosX = $(this).css("background-position") ? $(this).css("background-position").split(" ")[0] : $(this).css("background-position-x");
                $(this).css({
                    "background-position": backgroundPosX + " top"
                })
            }).on(eClick,
                function() {
                    var volume = $videoObj.get(0).volume;
                    if (volume > 0) {
                        volumeSaved = volume;
                        volume = 0
                    } else volume = volumeSaved;
                    var backgroundPosY = $(this).css("background-position") ? $(this).css("background-position").split(" ")[1] : $(this).css("background-position-y");
                    $videoVolumeButton.css({
                        "background-position": (volume > 0 ? "left" : "right") + " " + backgroundPosY
                    });
                    $videoObj.get(0).volume = volume;
                    $videoVolumeBarActive.css({
                        height: Math.round(volume * 100) + "%"
                    })
                });
            $videoVolumeBar.css({
                display: "none",
                position: "absolute",
                left: 4,
                bottom: "100%",
                width: 24,
                height: 80,
                "margin-bottom": Math.floor((BAR_HEIGHT - BUTTON_SIZE) / 2),
                "background-color": "#000000",
                opacity: 0.7,
                filter: "alpha(opacity=70)"
            });
            $videoVolumeBarBg.css({
                display: "block",
                position: "relative",
                width: 10,
                height: 68,
                margin: 7,
                cursor: "pointer",
                "background-color": "#222"
            });
            $videoVolumeBarActive.css({
                display: "block",
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                height: "100%",
                "background-color": "#fcc500"
            });
            $videoVolumeBarBg.on(eStart, function(e) {
                var e0 = isTouch ? e.originalEvent.touches[0] :
                    e;
                var vol = 1 - (e0.pageY - $videoVolumeBarBg.offset().top) / $videoVolumeBarBg.height();
                vol = vol > 1 ? 1 : vol < 0 ? 0 : vol;
                $videoVolumeBarActive.css({
                    height: Math.round(vol * 100) + "%"
                });
                $videoVolumeButton.css({
                    "background-position": "left " + (vol > 0 ? "top" : "bottom")
                });
                $videoObj.get(0).volume = vol;
                $videoVolumeBarBg.on(eMove, function(e) {
                    var e0 = isTouch ? e.originalEvent.touches[0] : e;
                    var vol = 1 - (e0.pageY - $videoVolumeBarBg.offset().top) / $videoVolumeBarBg.height();
                    vol = vol > 1 ? 1 : vol < 0 ? 0 : vol;
                    $videoVolumeBarActive.css({
                        height: Math.round(vol *
                            100) + "%"
                    });
                    $videoVolumeButton.css({
                        "background-position": "left " + (vol > 0 ? "top" : "bottom")
                    });
                    $videoObj.get(0).volume = vol
                })
            }).on(eCancel, function() {
                $videoVolumeBarBg.off(eMove)
            })
        }
        var calcTimeFormat = function(seconds) {
            var h0 = Math.floor(seconds / 3600);
            var h = h0 < 10 ? "0" + h0 : h0;
            var m0 = Math.floor((seconds - h0 * 3600) / 60);
            var m = m0 < 10 ? "0" + m0 : m0;
            var s0 = Math.floor(seconds - (h0 * 3600 + m0 * 60));
            var s = s0 < 10 ? "0" + s0 : s0;
            var r = m + ":" + s;
            if (h0 > 0) r = h + ":" + r;
            return r
        };
        if (hidePlayButton) $videoPlay.hide();
        if (hideControls) $videoControls.hide();
        var onVideoPlay = function() {
            if (!hidePlayButton) $videoPlay.hide();
            if (!hideControls) {
                $videoBtnPlay.hide();
                $videoBtnPause.show()
            }
        };
        var onVideoPause = function() {
            if (!hidePlayButton) $videoPlay.show();
            if (!hideControls) {
                $videoControls.show();
                clearTimeout(hideControlsTimerId);
                $videoBtnPlay.show();
                $videoBtnPause.hide()
            }
        };
        var onVideoEnded = function() {
            $(window).trigger("html5lightbox.videoended");
            if (!hidePlayButton) $videoPlay.show();
            if (!hideControls) {
                $videoControls.show();
                clearTimeout(hideControlsTimerId);
                $videoBtnPlay.show();
                $videoBtnPause.hide()
            }
        };
        var onVideoUpdate = function() {
            var curTime = $videoObj.get(0).currentTime;
            if (curTime) {
                $videoTimeCurrent.text(calcTimeFormat(curTime));
                var duration = $videoObj.get(0).duration;
                if (duration) {
                    $videoTimeTotal.text(calcTimeFormat(duration));
                    if (!sliderDragging) {
                        var sliderW = $videoSeeker.width();
                        var pos = Math.round(sliderW * curTime / duration);
                        $videoSeekerPlay.css({
                            width: pos
                        });
                        $videoSeekerHandler.css({
                            left: pos
                        })
                    }
                }
            }
        };
        var onVideoProgress = function() {
            if ($videoObj.get(0).buffered && $videoObj.get(0).buffered.length >
                0 && !isNaN($videoObj.get(0).buffered.end(0)) && !isNaN($videoObj.get(0).duration)) {
                var sliderW = $videoSeeker.width();
                $videoSeekerBuffer.css({
                    width: Math.round(sliderW * $videoObj.get(0).buffered.end(0) / $videoObj.get(0).duration)
                })
            }
        };
        try {
            $videoObj.on("play", onVideoPlay);
            $videoObj.on("pause", onVideoPause);
            $videoObj.on("ended", onVideoEnded);
            $videoObj.on("timeupdate", onVideoUpdate);
            $videoObj.on("progress", onVideoProgress)
        } catch (e) {}
    }
})(jQuery);

function ASTimer(asTimeout, asCallback, asUpdateCallback) {
    var asUpdateInterval = 50;
    var asUpdateTimerId = null;
    var asRunningTime = 0;
    this.pause = function() {
        clearInterval(asUpdateTimerId)
    };
    this.resume = function() {
        clearInterval(asUpdateTimerId);
        if (asTimeout > 0) asUpdateTimerId = setInterval(function() {
            asRunningTime += asUpdateInterval;
            if (asRunningTime > asTimeout) {
                clearInterval(asUpdateTimerId);
                if (asCallback) asCallback()
            }
            if (asUpdateCallback) asUpdateCallback(asRunningTime / asTimeout)
        }, asUpdateInterval);
        else if (asCallback) asCallback()
    };
    this.stop = function() {
        clearInterval(asUpdateTimerId);
        if (asUpdateCallback) asUpdateCallback(-1);
        asRunningTime = 0
    };
    this.start = function() {
        asRunningTime = 0;
        clearInterval(asUpdateTimerId);
        if (asTimeout > 0) asUpdateTimerId = setInterval(function() {
            asRunningTime += asUpdateInterval;
            if (asRunningTime > asTimeout) {
                clearInterval(asUpdateTimerId);
                if (asCallback) asCallback()
            }
            if (asUpdateCallback) asUpdateCallback(asRunningTime / asTimeout)
        }, asUpdateInterval);
        else if (asCallback) asCallback()
    }
}
var ACPlatforms = {
    flashInstalled: function() {
        var flashInstalled = false;
        try {
            if (new ActiveXObject("ShockwaveFlash.ShockwaveFlash")) flashInstalled = true
        } catch (e) {
            if (navigator.mimeTypes["application/x-shockwave-flash"]) flashInstalled = true
        }
        return flashInstalled
    },
    html5VideoSupported: function() {
        return !!document.createElement("video").canPlayType
    },
    canPlayMP4: function() {
        var v = document.createElement("video");
        return v && v.canPlayType && v.canPlayType("video/mp4").replace(/no/, "")
    },
    isChrome: function() {
        return navigator.userAgent.match(/Chrome/i) !=
            null
    },
    isFirefox: function() {
        return navigator.userAgent.match(/Firefox/i) != null
    },
    isOpera: function() {
        return navigator.userAgent.match(/Opera/i) != null || navigator.userAgent.match(/OPR\//i) != null
    },
    isSafari: function() {
        return navigator.userAgent.match(/Safari/i) != null
    },
    isAndroid: function() {
        return navigator.userAgent.match(/Android/i) != null
    },
    androidVersion: function() {
        var match = navigator.userAgent.match(/Android\s([0-9\.]*)/i);
        return match && match.length >= 2 ? parseInt(match[1], 10) : -1
    },
    isIPad: function() {
        return navigator.userAgent.match(/iPad/i) !=
            null
    },
    isIPhone: function() {
        return navigator.userAgent.match(/iPod/i) != null || navigator.userAgent.match(/iPhone/i) != null
    },
    isIOS: function() {
        return this.isIPad() || this.isIPhone()
    },
    isIE11: function() {
        return navigator.userAgent.match(/Trident\/7/) != null && navigator.userAgent.match(/rv:11/) != null
    },
    isIE10: function() {
        return navigator.userAgent.match(/MSIE 10/i) != null && !this.isOpera()
    },
    isIE9: function() {
        return navigator.userAgent.match(/MSIE/i) != null && this.html5VideoSupported() && !this.isOpera()
    },
    isIE8: function() {
        return navigator.userAgent.match(/MSIE 8/i) !=
            null && !this.isOpera()
    },
    isIE7: function() {
        return navigator.userAgent.match(/MSIE 7/i) != null && !this.isOpera()
    },
    isIE6: function() {
        return navigator.userAgent.match(/MSIE 6/i) != null && !this.isOpera()
    },
    isIE678: function() {
        return this.isIE6() || this.isIE7() || this.isIE8()
    },
    isIE6789: function() {
        return this.isIE6() || this.isIE7() || this.isIE8() || this.isIE9()
    },
    css33dTransformSupported: function() {
        return !this.isIE6() && !this.isIE7() && !this.isIE8() && !this.isIE9() && !this.isOpera()
    },
    applyBrowserStyles: function(object, applyToValue) {
        var ret = {};
        for (var key in object) {
            ret[key] = object[key];
            ret["-webkit-" + key] = applyToValue ? "-webkit-" + object[key] : object[key];
            ret["-moz-" + key] = applyToValue ? "-moz-" + object[key] : object[key];
            ret["-ms-" + key] = applyToValue ? "-ms-" + object[key] : object[key];
            ret["-o-" + key] = applyToValue ? "-o-" + object[key] : object[key]
        }
        return ret
    }
};
(function($) {
    $.fn.amazingcarousel = function(options) {
        var ELEM_ID = 0,
            ELEM_SRC = 1,
            ELEM_TITLE = 2,
            ELEM_DESCRIPTION = 3,
            ELEM_LINK = 4,
            ELEM_TARGET = 5,
            ELEM_VIDEO = 6,
            ELEM_THUMBNAIL = 7,
            ELEM_LIGHTBOX = 8,
            ELEM_LIGHTBOXWIDTH = 9,
            ELEM_LIGHTBOXHEIGHT = 10;
        var TYPE_IMAGE = 1,
            TYPE_SWF = 2,
            TYPE_MP3 = 3,
            TYPE_PDF = 4,
            TYPE_VIDEO_FLASH = 5,
            TYPE_VIDEO_MP4 = 6,
            TYPE_VIDEO_OGG = 7,
            TYPE_VIDEO_WEBM = 8,
            TYPE_VIDEO_YOUTUBE = 9,
            TYPE_VIDEO_VIMEO = 10;
        var AmazingCarousel = function(container, options, id) {
            this.container = container;
            this.options = options;
            this.id = id;
            this.transitionTimeout =
                null;
            this.arrowTimeout = null;
            $(".amazingcarousel-engine").css({
                display: "none"
            });
            this.lightboxArray = [];
            this.visibleItems = this.options.visibleitems;
            this.itemSize = this.options.width;
            this.itemHeight = this.options.height;
            this.currentItem = 0;
            this.elemLength = 0;
            this.elemTotalCount = 0;
            this.animProp = {};
            this.transitionTimerId = null;
            this.transitionTiming = 0;
            this.processLightbox();
            this.preprocess(this)
        };
        AmazingCarousel.prototype = {
            initData: function() {
                this.readTags();
                this.init()
            },
            processLightbox: function() {
                if (this.options.lightboxobject) {
                    var instance =
                        this;
                    this.options.lightboxobject.each(function(index) {
                        if ($(this).data("ytplaylist")) instance.options.lightboxobject.splice(index, 1)
                    })
                }
            },
            preprocess: function(instance) {
                var found = false;
                var item_index = 0;
                var youtubeapikey = "";
                var youtubeplaylistid = "";
                var youtubeplaylistmaxresults = "";
                $("li.amazingcarousel-item", this.container).each(function(index) {
                    if ($(this).data("youtubeapikey")) {
                        youtubeapikey = $(this).data("youtubeapikey");
                        youtubeplaylistid = $(this).data("youtubeplaylistid");
                        youtubeplaylistmaxresults = $(this).data("youtubeplaylistmaxresults");
                        item_index = index;
                        found = true;
                        return false
                    }
                });
                if (found) instance.getYouTubePlaylist(youtubeapikey, youtubeplaylistid, youtubeplaylistmaxresults, item_index, item_index, instance.preprocess, instance, null);
                else instance.initData()
            },
            getYouTubePlaylist: function(youtubeapikey, youtubeplaylistid, youtubeplaylistmaxresults, index, insert_index, onsuccess, instance, pagetoken) {
                var youtube_url = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=" + youtubeplaylistid + "&key=" + youtubeapikey;
                if (youtubeplaylistmaxresults)
                    if (youtubeplaylistmaxresults >
                        50) youtube_url += "&maxResults=50";
                    else youtube_url += "&maxResults=" + youtubeplaylistmaxresults;
                if (pagetoken) youtube_url += "&pageToken=" + pagetoken;
                var all_done = true;
                $.getJSON(youtube_url, function(data) {
                    if (data && data.items) {
                        var original_item = $("li.amazingcarousel-item", instance.container).eq(index);
                        for (var i = 0; i < data.items.length; i++) {
                            var video_id = data.items[i]["snippet"]["resourceId"]["videoId"];
                            var thumbnail = "https://img.youtube.com/vi/" + video_id + "/0.jpg";
                            var image = "https://img.youtube.com/vi/" + video_id +
                                "/0.jpg";
                            if (data.items[i]["snippet"]["thumbnails"] && data.items[i]["snippet"]["thumbnails"]["maxres"]) image = data.items[i]["snippet"]["thumbnails"]["maxres"]["url"];
                            var video = "https://www.youtube.com/embed/" + video_id;
                            var title = data.items[i]["snippet"]["title"];
                            var description = data.items[i]["snippet"]["description"];
                            var new_item = original_item.clone();
                            new_item.removeAttr("data-youtubeapikey").removeAttr("data-youtubeplaylistid").removeAttr("data-youtubeplaylistmaxresults");
                            var item_html = new_item.html().replace(/data-srcyt=/g,
                                "src=").replace(/__IMAGE__/g, image).replace(/__THUMBNAIL__/g, thumbnail).replace(/__VIDEO__/g, video).replace(/__TITLE__/g, title).replace(/__DESCRIPTION__/g, description);
                            new_item.html(item_html);
                            if (instance.options.lightboxobject && new_item.find("a").hasClass("html5lightbox")) new_item.find("a").each(function() {
                                instance.options.lightboxobject.push(this);
                                $(this).off("click").click(instance.options.lightboxobject.clickHandler)
                            });
                            $("li.amazingcarousel-item", instance.container).eq(insert_index).after(new_item);
                            insert_index++
                        }
                    }
                    if (data && data.nextPageToken && youtubeplaylistmaxresults && youtubeplaylistmaxresults > 50) {
                        all_done = false;
                        instance.getYouTubePlaylist(youtubeapikey, youtubeplaylistid, youtubeplaylistmaxresults - 50, index, insert_index, onsuccess, instance, data.nextPageToken)
                    }
                }).always(function() {
                    if (all_done) {
                        $("li.amazingcarousel-item", instance.container).eq(index).remove();
                        onsuccess(instance)
                    }
                })
            },
            readTags: function() {
                var items = $("li.amazingcarousel-item", this.container);
                this.elemLength = items.length;
                this.elemTotalCount =
                    this.elemLength;
                var i;
                if (this.options.random) {
                    for (i = this.elemLength - 1; i > 0; i--) {
                        var index = Math.floor(Math.random() * i);
                        items.eq(index).insertBefore(items.eq(i));
                        items.eq(i).insertBefore(items.eq(index))
                    }
                    items = $("li.amazingcarousel-item", this.container)
                }
                items.each(function(index) {
                    $(this).data("itemIndex", index);
                    $(this).addClass("amazingcarousel-item-" + index)
                });
                if (this.options.circular && this.options.donotcircularforless)
                    if (this.elemLength <= this.options.circularlimit) this.options.circular = false;
                if (this.elemLength >
                    1 && this.options.circular) {
                    var cloneCount = this.elemLength;
                    for (i = 0; i < cloneCount; i++) $("ul.amazingcarousel-list", this.container).append(items.eq(i).clone(true));
                    this.elemTotalCount += cloneCount
                }
                $("ul.amazingcarousel-list", this.container).append("<div style='clear:both;'></div>")
            },
            init: function() {
                var instance = this;
                if (instance.elemLength <= 0) return;
                instance.container.css({
                    direction: "ltr"
                });
                if (!instance.options.hidecontaineroninit && !instance.options.hidecontainerbeforeloaded) instance.container.css({
                    display: "block"
                });
                instance.isAnimating = false;
                instance.isPaused = !instance.options.autoplay;
                instance.tempPaused = false;
                instance.mousePaused = false;
                instance.loopCount = 0;
                instance.firstResize = false;
                if (instance.options.initsocialmedia) $("head").append('<link rel="stylesheet" href="' + instance.options.jsfolder + 'icons/css/fontello.css" type="text/css" />');
                instance.createPlayVideo();
                instance.createHoverOverlay();
                instance.createStyle();
                instance.createNav();
                instance.createArrows();
                instance.createBackgroundImage();
                instance.createItemBackgroundImage();
                instance.createBottomShadow();
                instance.createItemBottomShadow();
                instance.createWatermark();
                instance.createSliderTimeout();
                instance.createGoogleFonts();
                instance.enableSwipe();
                if (instance.options.sameheight && instance.options.direction == "horizontal") instance.itemHeight = instance.calcSameHeight();
                var $img = $(".amazingcarousel-image", instance.container).find("img");
                if ($img.length) {
                    instance.totalLength = $img.length;
                    instance.loadindex = 0;
                    instance.firstLoad = true;
                    $img.one("load", function() {
                        if (instance.options.sameheight &&
                            instance.options.direction == "horizontal") $(this).css({
                            width: "auto",
                            height: instance.itemHeight + "px",
                            "max-width": "none",
                            "max-height": "100%",
                            "margin-top": "0px",
                            "margin-left": "0px"
                        });
                        else if (instance.options.fixaspectratio) {
                            $(this).wrap('<div class="amazingcarousel-image-fix-wrapper" style="width:100%;height:100%;overflow:hidden;"></div>');
                            var imgW = $(this).width();
                            var imgH = $(this).height();
                            if (imgW > 0 && imgH && imgW / imgH > instance.options.width / instance.options.height) {
                                $(this).css({
                                    width: "auto",
                                    height: "100%",
                                    "max-width": "none",
                                    "max-height": "100%",
                                    "margin-top": "0px",
                                    "margin-left": "0px"
                                });
                                if (instance.options.centerimage)
                                    if ($(this).width() > 0) {
                                        var ml = ($(this).closest(".amazingcarousel-image").width() - $(this).width()) / 2;
                                        $(this).css({
                                            "margin-left": ml + "px"
                                        })
                                    }
                            } else {
                                $(this).css({
                                    width: "100%",
                                    height: "auto",
                                    "max-width": "100%",
                                    "max-height": "none",
                                    "margin-top": "0px",
                                    "margin-left": "0px"
                                });
                                if (instance.options.centerimage)
                                    if ($(this).height() > 0) {
                                        var mt = ($(this).closest(".amazingcarousel-image").height() - $(this).height()) /
                                            2;
                                        $(this).css({
                                            "margin-top": mt + "px"
                                        })
                                    }
                            }
                        } else if (instance.options.fitimage) {
                            $(this).wrap('<div class="amazingcarousel-image-fit-wrapper" style="width:100%;height:100%;overflow:hidden;"></div>');
                            $(this).css({
                                width: "auto",
                                height: "auto",
                                "max-width": "100%",
                                "max-height": "100%",
                                "margin-top": "0px",
                                "margin-left": "0px"
                            });
                            var imgW = $(this).width();
                            var imgH = $(this).height();
                            if (imgW > 0 && imgH && imgW / imgH > instance.options.width / instance.options.height) {
                                $(this).css({
                                    width: "100%"
                                });
                                if (instance.options.fitcenterimage)
                                    if ($(this).height() >
                                        0) {
                                        var mt = ($(this).closest(".amazingcarousel-image").height() - $(this).height()) / 2;
                                        $(this).css({
                                            "margin-top": mt + "px"
                                        })
                                    }
                            } else {
                                $(this).css({
                                    height: "100%"
                                });
                                if (instance.options.fitcenterimage)
                                    if ($(this).width() > 0) {
                                        var ml = ($(this).closest(".amazingcarousel-image").width() - $(this).width()) / 2;
                                        $(this).css({
                                            "margin-left": ml + "px"
                                        })
                                    }
                            }
                        }
                        if (!instance.firstResize) {
                            instance.firstResize = true;
                            instance.resizeCarousel()
                        }
                        instance.loadindex++;
                        if (instance.options.hidecontainerbeforeloaded && instance.loadindex == instance.totalLength &&
                            instance.firstLoad) {
                            instance.container.trigger("amazingcarousel.allimagesloaded");
                            instance.container.css({
                                display: "block"
                            });
                            $(window).trigger("resize");
                            if (!instance.isPaused && !instance.tempPaused) instance.sliderTimeout.start();
                            instance.firstLoad = false
                        }
                    });
                    $img.each(function() {
                        if (this.complete) $(this).trigger("load")
                    })
                } else instance.resizeCarousel();
                if (instance.options.responsive) $(window).resize(function() {
                    instance.resizeCarousel();
                    instance.resizeNav()
                });
                $(window).on("load", function() {
                    instance.resizeCarousel();
                    instance.resizeNav()
                });
                instance.resizeNav();
                var params = instance.getParams();
                var firstId = 0;
                if ("firstcarouselid" in params && params["firstcarouselid"] >= 0 && params["firstcarouselid"] < instance.elemLength) firstId = parseInt(params["firstcarouselid"]);
                instance.container.trigger("amazingcarousel.switch", [-1, firstId]);
                if (firstId > 0) {
                    instance.slideRun(firstId);
                    if ("clickcarousel" in params) $(".amazingcarousel-item", instance.container).each(function() {
                        if ($(this).data("itemIndex") == firstId) {
                            $(".amazingcarousel-image img",
                                this).click();
                            return false
                        }
                    })
                }
                if (instance.options.hidecontaineroninit && !instance.options.hidecontainerbeforeloaded) {
                    instance.container.css({
                        display: "block"
                    });
                    $(window).trigger("resize")
                }
                instance.container.trigger("amazingcarousel.initsuccess");
                if (!instance.isPaused && !instance.tempPaused && !instance.options.hidecontainerbeforeloaded) instance.sliderTimeout.start()
            },
            getParams: function() {
                var result = {};
                var params = window.location.search.substring(1).split("&");
                for (var i = 0; i < params.length; i++) {
                    var value =
                        params[i].split("=");
                    if (value && value.length == 2) result[value[0].toLowerCase()] = unescape(value[1])
                }
                return result
            },
            enableSwipe: function() {
                if (this.options.enabletouchswipe) {
                    var preventDefault = ACPlatforms.isAndroid && (this.options.swipepreventdefaultonandroid || ACPlatforms.androidVersion >= 0 && ACPlatforms.androidVersion <= 5) ? true : false;
                    var instance = this;
                    $(".amazingcarousel-list-container", this.container).carouselTouchSwipe({
                        preventWebBrowser: preventDefault,
                        swipeLeft: function() {
                            instance.slideRun(-1, true)
                        },
                        swipeRight: function() {
                            instance.slideRun(-2,
                                true)
                        }
                    })
                }
            },
            createPlayVideo: function() {
                if (!this.options.showplayvideo) return;
                var instance = this;
                $(".amazingcarousel-image", this.container).each(function() {
                    var $this = $(this);
                    var isVideo = false;
                    var isLightboxVideo = false;
                    var videoUrl = "";
                    var videoWebmUrl = "";
                    var videoType = null;
                    $("img", $this).each(function() {
                        if ($(this).data("video")) {
                            videoUrl = $(this).data("video");
                            if ($(this).data("videowebm")) videoWebmUrl = $(this).data("videowebm");
                            if ($(this).attr("data-videotype")) videoType = $(this).data("videotype");
                            isVideo =
                                true;
                            return false
                        } else if ($(this).parent()[0].nodeName.toLowerCase() == "a")
                            if ($(this).parent().hasClass("html5lightbox")) {
                                var type = instance.checkVideoType($(this).parent().attr("href"), $(this).parent());
                                if (type == TYPE_VIDEO_YOUTUBE || type == TYPE_VIDEO_VIMEO || type == TYPE_VIDEO_MP4 || type == TYPE_VIDEO_WEBM) isLightboxVideo = true
                            }
                    });
                    if (isVideo || isLightboxVideo) {
                        var pos = "center center";
                        switch (instance.options.playvideoimagepos) {
                            case "topleft":
                                pos = "left top";
                                break;
                            case "topright":
                                pos = "right top";
                                break;
                            case "bottomleft":
                                pos =
                                    "left bottom";
                                break;
                            case "bottomright":
                                pos = "right bottom";
                                break
                        }
                        var $playVideo = $('<div class="amazingcarousel-play-video" style="position:absolute;left:0;top:0;width:100%;height:100%;cursor:pointer;' + "background-image:url('" + instance.options.playvideoimage + "');background-repeat:no-repeat;" + "background-position:" + pos + ';"></div>');
                        $playVideo.appendTo($this);
                        if (isVideo) $this.on("click", ".amazingcarousel-play-video", function() {
                            if (!$this.data("isplayvideo")) {
                                $this.data("isplayvideo", true);
                                $this.find("img").css({
                                    visibility: "hidden"
                                });
                                instance.playVideo($(this), videoUrl, videoWebmUrl, videoType);
                                $(".amazingcarousel-play-video", $this).css({
                                    cursor: "auto"
                                })
                            }
                        });
                        else {
                            var $img = $("img", $this);
                            $playVideo.click(function() {
                                $img.click()
                            })
                        }
                    }
                })
            },
            playVideo: function($videoDiv, videoUrl, videoWebmUrl, videoType) {
                if (videoUrl.length <= 0) return;
                this.sliderTimeout.stop();
                this.tempPaused = true;
                var type = videoType ? videoType : this.checkVideoType(videoUrl);
                if (type == TYPE_VIDEO_YOUTUBE) this.playYoutubeVideo(videoUrl, $videoDiv);
                else if (type == TYPE_VIDEO_VIMEO) this.playVimeoVideo(videoUrl,
                    $videoDiv);
                else if (type == TYPE_VIDEO_MP4) this.playMp4Video(videoUrl, videoWebmUrl, true, $videoDiv)
            },
            playMp4Video: function(href, webmhref, autoplay, $videoWrapper) {
                var isHTML5 = true;
                if (ACPlatforms.isIE6789()) isHTML5 = false;
                if (ACPlatforms.isFirefox() || ACPlatforms.isOpera())
                    if (!ACPlatforms.canPlayMP4() && !webmhref) isHTML5 = false;
                if (isHTML5) {
                    var videoSrc = href;
                    if (ACPlatforms.isFirefox() || ACPlatforms.isOpera())
                        if (webmhref) videoSrc = webmhref;
                    this.embedHTML5Video($videoWrapper, videoSrc, autoplay)
                } else {
                    var videoFile =
                        href;
                    if (videoFile.charAt(0) != "/" && videoFile.substring(0, 5) != "http:" && videoFile.substring(0, 6) != "https:") videoFile = this.options.htmlfolder + videoFile;
                    this.embedFlash($videoWrapper, "100%", "100%", this.options.jsfolder + "html5boxplayer.swf", "transparent", {
                        width: "100%",
                        height: "100%",
                        videofile: videoFile,
                        hdfile: "",
                        ishd: "0",
                        autoplay: autoplay ? "1" : "0",
                        errorcss: ".amazingcarousel-error" + this.options.errorcss,
                        id: this.id,
                        hidecontrols: "0",
                        hideplaybutton: "0",
                        defaultvolume: 1
                    })
                }
            },
            embedHTML5Video: function($container,
                src, autoPlay) {
                if (ACPlatforms.isFirefox() && this.options.nativecontrolsonfirefox || (ACPlatforms.isIE6789() || ACPlatforms.isIE10() || ACPlatforms.isIE11()) && this.options.nativecontrolsonie || ACPlatforms.isIPhone() && this.options.nativecontrolsoniphone || ACPlatforms.isIPad() && this.options.nativecontrolsonipad || ACPlatforms.isAndroid() && this.options.nativecontrolsonandroid) this.options.nativehtml5controls = true;
                if (ACPlatforms.isIOS() || ACPlatforms.isAndroid()) this.options.nativecontrolsonfullscreen = true;
                $container.html("<div class='amazingcarousel-video-container-" +
                    this.id + "' style='position:relative;display:block;width:100%;height:100%;'><video class='carousel-inline-video' style='width:100%;height:100%;'" + (this.options.nativehtml5controls && !this.options.videohidecontrols ? " controls='controls'" : "") + (this.options.nativecontrolsnodownload ? " controlsList='nodownload'" : "") + "></div>");
                $("video", $container).get(0).setAttribute("src", src);
                if (autoPlay) $("video", $container).get(0).play();
                if (!this.options.nativehtml5controls && !this.options.videohidecontrols) {
                    $("video",
                        $container).data("src", src);
                    $("video", $container).acHTML5VideoControls(this.options.skinsfolder, this, ".carousel-inline-video", this.options.videohidecontrols, this.options.videohideplaybutton, this.options.defaultvideovolume, this.options.nativecontrolsonfullscreen, this.options.nativecontrolsnodownload, null)
                }
            },
            embedFlash: function($container, w, h, src, wmode, flashVars) {
                if (ACPlatforms.flashInstalled()) {
                    var htmlOptions = {
                        pluginspage: "http://www.adobe.com/go/getflashplayer",
                        quality: "high",
                        allowFullScreen: "true",
                        allowScriptAccess: "always",
                        type: "application/x-shockwave-flash"
                    };
                    htmlOptions.width = w;
                    htmlOptions.height = h;
                    htmlOptions.src = src;
                    htmlOptions.wmode = wmode;
                    htmlOptions.flashVars = $.param(flashVars);
                    var htmlString = "";
                    for (var key in htmlOptions) htmlString += key + "=" + htmlOptions[key] + " ";
                    $container.html("<embed " + htmlString + "/>")
                } else $container.html("<div class='amazingcarousel-video-error' style='display:block;position:absolute;text-align:center;width:100%;height:100%;left:0px;top:0px;'><div>The required Adobe Flash Player plugin is not installed</div><br /><div style='display:block;position:relative;text-align:center;width:112px;height:33px;margin:0px auto;'><a href='http://www.adobe.com/go/getflashplayer'><img src='https://www.adobe.com/images/shared/download_buttons/get_flash_player.gif' alt='Get Adobe Flash player' width='112' height='33'></img></a></div>")
            },
            playYoutubeVideo: function(href, $videoWrapper) {
                if (this.options.previewmode) {
                    $videoWrapper.html("<div class='amazingcarousel-video-error' style='display:block;position:absolute;left:0;top:0;width:100%;height:100%;color:#fff;background-color:#333;'>To view YouTube video, publish the carousel then open it in your web browser</div>");
                    return
                } else {
                    var src = href + (href.indexOf("?") < 0 ? "?" : "&") + "autoplay=1&wmode=transparent&rel=0&autohide=1";
                    $videoWrapper.html("<iframe width='100%' height='100%' src='" + src + "' frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>")
                }
            },
            playVimeoVideo: function(href, $videoWrapper) {
                if (this.options.previewmode) {
                    $videoWrapper.html("<div class='amazingcarousel-video-error' style='display:block;position:absolute;left:0;top:0;width:100%;height:100%;color:#fff;background-color:#333;'>To view Vimeo video, publish the carousel then open it in your web browser</div>");
                    return
                } else {
                    var src = href + (href.indexOf("?") < 0 ? "?" : "&") + "autoplay=1&api=1";
                    $videoWrapper.html("<iframe width='100%' height='100%' src='" + src + "' frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>")
                }
            },
            checkVideoType: function(href, elem) {
                if (!href) return -1;
                if (elem)
                    if (elem.attr("data-mediatype")) switch (elem.data("mediatype")) {
                        case 0:
                            return TYPE_IMAGE;
                        case 2:
                            return TYPE_VIDEO_MP4;
                        case 3:
                            return TYPE_VIDEO_YOUTUBE;
                        case 4:
                            return TYPE_VIDEO_VIMEO
                    }
                if (href.match(/\.(flv)(.*)?$/i)) return TYPE_VIDEO_FLASH;
                if (href.match(/\.(mp4|m4v)(.*)?$/i)) return TYPE_VIDEO_MP4;
                if (href.match(/\.(ogv|ogg)(.*)?$/i)) return TYPE_VIDEO_OGG;
                if (href.match(/\.(webm)(.*)?$/i)) return TYPE_VIDEO_WEBM;
                if (href.match(/\:\/\/.*(youtube\.com)/i) ||
                    href.match(/\:\/\/.*(youtu\.be)/i)) return TYPE_VIDEO_YOUTUBE;
                if (href.match(/\:\/\/.*(vimeo\.com)/i)) return TYPE_VIDEO_VIMEO;
                return 0
            },
            createHoverOverlay: function() {
                var instance = this;
                $(".amazingcarousel-image", this.container).each(function() {
                    var $this = $(this);
                    var isLightbox = false;
                    var isLink = false;
                    $("img", $this).each(function() {
                        if ($(this).parent()[0].nodeName.toLowerCase() == "a") {
                            isLink = true;
                            if ($(this).parent().hasClass("html5lightbox")) {
                                isLightbox = true;
                                return false
                            }
                        }
                    });
                    if ($(this).siblings(".amazingcarousel-hover").length >
                        0 && !(instance.options.hidehoveroverlayontouch && "ontouchstart" in window)) {
                        $(this).parent().hover(function() {
                            $(this).find(".amazingcarousel-hover").fadeIn(instance.options.hoverdelay)
                        }, function() {
                            $(this).find(".amazingcarousel-hover").fadeOut(instance.options.hoverdelay)
                        });
                        var $img = $("img", $this);
                        $(this).siblings(".amazingcarousel-hover").click(function() {
                            $img.click()
                        })
                    } else if (instance.options.showhoveroverlay && !(instance.options.hidehoveroverlayontouch && "ontouchstart" in window) && (isLightbox || isLink &&
                            instance.options.showhoveroverlayalways)) {
                        var $hoverImage = $('<div class="amazingcarousel-hover-effect" style="display:none;position:absolute;left:0;top:0;width:100%;height:100%;cursor:pointer;' + "background-image:url('" + instance.options.hoveroverlayimage + "');background-repeat:no-repeat;" + 'background-position:center center;"></div>');
                        $hoverImage.appendTo($this);
                        var $img = $("img", $this);
                        $hoverImage.click(function() {
                            $img.click()
                        });
                        $(this).hover(function() {
                                if (ACPlatforms.isIE678()) $hoverImage.show();
                                else $hoverImage.fadeIn()
                            },
                            function() {
                                if (ACPlatforms.isIE678()) $hoverImage.hide();
                                else $hoverImage.fadeOut()
                            })
                    }
                    if ($(this).siblings(".amazingcarousel-flip").length > 0) {
                        if (ACPlatforms.isIE6789()) $(this).parent().hover(function() {
                            $(this).find(".amazingcarousel-flip").hide().insertAfter($(this).find(".amazingcarousel-image")).fadeIn()
                        }, function() {
                            $(this).find(".amazingcarousel-flip").fadeOut()
                        });
                        var $img = $("img", $this);
                        $(this).siblings(".amazingcarousel-flip").click(function() {
                            $img.click()
                        })
                    }
                    if ($(this).closest(".amazingcarousel-flipout").length >
                        0) {
                        var $itemcontainer = $(this).closest(".amazingcarousel-item-container");
                        if (ACPlatforms.isIE6789()) $itemcontainer.hover(function() {
                            $(this).find(".amazingcarousel-flip").hide().insertAfter($(this).find(".amazingcarousel-flipout")).fadeIn()
                        }, function() {
                            $(this).find(".amazingcarousel-flip").fadeOut()
                        });
                        var $img = $("img", $this);
                        $itemcontainer.find(".amazingcarousel-flip").click(function() {
                            $img.click()
                        })
                    }
                })
            },
            createStyle: function() {
                $("ul.amazingcarousel-list", this.container).wrap('<div class="amazingcarousel-list-wrapper"></div>');
                $("ul.amazingcarousel-list", this.container).css({
                    display: "block",
                    position: "relative",
                    "list-style-type": "none",
                    "list-style-image": "none",
                    "background-image": "none",
                    "background-color": "transparent",
                    padding: 0,
                    margin: 0
                });
                $("li.amazingcarousel-item", this.container).css({
                    display: "block",
                    position: "relative",
                    "background-image": "none",
                    "background-color": "transparent",
                    margin: 0,
                    padding: 0,
                    "float": this.options.direction == "horizontal" ? "left" : "top"
                });
                if (this.options.sameheight && this.options.direction == "horizontal") {
                    $("ul.amazingcarousel-list",
                        this.container).css({
                        "white-space": "nowrap"
                    });
                    $("li.amazingcarousel-item", this.container).css({
                        display: "inline-block",
                        "float": "none"
                    })
                }
                var m = 0;
                if (this.options.spacing > 0)
                    if (this.options.direction == "horizontal") {
                        var s = Math.min(this.options.spacing / 2);
                        m = "0 " + s + "px"
                    } else m = "0 0 " + this.options.spacing + "px 0";
                var itemCss = {};
                itemCss["position"] = "relative";
                itemCss["margin"] = m;
                $("div.amazingcarousel-item-container", this.container).css(itemCss);
                var listCss = {};
                listCss["position"] = "relative";
                listCss["margin"] =
                    "0 auto";
                listCss["overflow"] = "visible";
                $("div.amazingcarousel-list-container", this.container).css(listCss);
                var wrapperCss = {};
                wrapperCss["overflow"] = "hidden";
                if (this.options.direction == "vertical") wrapperCss["height"] = "100%";
                $("div.amazingcarousel-list-wrapper", this.container).css(wrapperCss)
            },
            hideVideo: function(start) {
                var instance = this;
                var index = 0;
                $("li.amazingcarousel-item", this.container).each(function() {
                    if (index < start || index >= start + instance.visibleItems) {
                        $(this).find(".amazingcarousel-image").data("isplayvideo",
                            false);
                        $(this).find(".amazingcarousel-image").find("img").css({
                            visibility: "visible"
                        });
                        $(".amazingcarousel-play-video", $(this)).empty().css({
                            cursor: "pointer"
                        })
                    }
                    index++
                })
            },
            calcSameHeight: function() {
                var itemHeight = this.options.height;
                if (this.options.responsive && this.options.sameheightresponsive) {
                    var screenWidth = $(window).width();
                    if (screenWidth < this.options.sameheightsmallscreen) itemHeight = this.options.sameheightsmallheight;
                    else if (screenWidth < this.options.sameheightmediumscreen) itemHeight = this.options.sameheightmediumheight;
                    else itemHeight = this.options.height
                }
                return itemHeight
            },
            checkMK: function() {
                if (this.options.versionmark == "AMF" + "ree")
                    for (var i = 0; i < $(".amazingcarousel-image", this.container).length; i++)
                        if (i % 2 == 0) {
                            var item = $(".amazingcarousel-image", this.container).eq(i);
                            var mklink = $('a[href="' + this.options.watermarklink + '"]', item);
                            if (item.text().indexOf(this.options.wmtext) < 0 || mklink.length < 0) item.append('<a href="' + this.options.watermarklink + '" target="_blank"><div style="z-index:999;position:absolute;bottom:4px;right:4px;padding:3px;border-radius:3px;-moz-border-radius:3px;-webkit-border-radius:3px;background-color:#fff;color:#333;font:12px Arial,sans-serif;">' +
                                this.options.wmtext + "</div></a>");
                            else {
                                var mkdiv = mklink.parent();
                                if (mklink.css("display") == "none" || mklink.css("visibility") == "hidden" || parseInt(mklink.css("font-size")) < 8 || mkdiv.css("display") == "none" || mkdiv.css("visibility") == "hidden" || parseInt(mkdiv.css("font-size")) < 8) {
                                    mklink.attr({
                                        style: (mklink.attr("style") || "") + "font-size:12px!important;"
                                    });
                                    mkdiv.attr({
                                        style: mkdiv.attr("style") + "font-size:12px!important;"
                                    })
                                }
                            }
                        }
            },
            resizeCarousel: function() {
                var instance = this;
                this.visibleItems = this.options.visibleitems;
                this.itemSize = this.options.width;
                if (this.options.responsive)
                    if (this.options.direction == "horizontal") {
                        if (this.options.fullwidth) {
                            this.container.css({
                                "max-width": "100%"
                            });
                            $(".amazingcarousel-list-container", this.container).css({
                                width: "100%",
                                "box-sizing": "border-box"
                            });
                            $(".amazingcarousel-list-wrapper", this.container).css({
                                width: "100%"
                            })
                        }
                        var conWidth;
                        if (this.options.usescreenquery) {
                            conWidth = $(".amazingcarousel-list-container",
                                this.container).width();
                            if (conWidth > 0) {
                                var screenWidth = $(window).width();
                                for (var i in this.options.screenquery)
                                    if (screenWidth < this.options.screenquery[i].screenwidth) this.visibleItems = this.options.screenquery[i].visibleitems;
                                this.itemSize = Math.round(conWidth / this.visibleItems);
                                $(".amazingcarousel-list-wrapper", this.container).width(conWidth)
                            }
                        } else {
                            conWidth = this.container.width();
                            if (conWidth > 0) {
                                this.visibleItems = this.options.fullwidth ? Math.ceil(conWidth / this.options.width) : Math.floor(conWidth / this.options.width);
                                if (this.visibleItems < 1) {
                                    this.visibleItems = 1;
                                    this.itemSize = conWidth
                                } else this.itemSize = this.options.width;
                                if (!this.options.fullwidth) {
                                    $(".amazingcarousel-list-container", this.container).width(this.visibleItems * this.itemSize);
                                    $(".amazingcarousel-list-wrapper", this.container).width(this.visibleItems * this.itemSize)
                                }
                            }
                        }
                    } else {
                        if (this.options.usescreenquery) {
                            var screenWidth = $(window).width();
                            for (var i in this.options.screenquery)
                                if (screenWidth < this.options.screenquery[i].screenwidth) this.visibleItems = this.options.screenquery[i].visibleitems
                        }
                        var itemWidth =
                            $(".amazingcarousel-list-container", this.container).width();
                        if (itemWidth > 0) {
                            this.itemSize = itemWidth;
                            $(".amazingcarousel-list-wrapper", this.container).width(itemWidth)
                        }
                    } if (this.options.sameheight && this.options.direction == "horizontal") {
                    instance.itemHeight = instance.calcSameHeight();
                    $(".amazingcarousel-image", this.container).find("img").each(function() {
                        $(this).css({
                            width: "auto",
                            height: instance.itemHeight + "px"
                        })
                    })
                } else {
                    $("li.amazingcarousel-item", this.container).css({
                        width: this.itemSize + "px"
                    });
                    if (this.options.direction ==
                        "vertical") this.itemSize = $("li.amazingcarousel-item", this.container).height();
                    if (this.options.fixaspectratio) {
                        var imageWidth = $(".amazingcarousel-image", this.container).width();
                        var imageHeight = imageWidth * this.options.height / this.options.width;
                        $(".amazingcarousel-image", this.container).css({
                            height: imageHeight + "px",
                            overflow: "hidden"
                        });
                        $(".amazingcarousel-image", this.container).find("img").each(function() {
                            var imgW = $(this).width();
                            var imgH = $(this).height();
                            if (imgW > 0 && imgH && imgW / imgH > instance.options.width /
                                instance.options.height) {
                                $(this).css({
                                    width: "auto",
                                    height: "100%",
                                    "max-width": "none",
                                    "max-height": "100%",
                                    "margin-top": "0px",
                                    "margin-left": "0px"
                                });
                                if (instance.options.centerimage)
                                    if ($(this).width() > 0) {
                                        var ml = ($(this).closest(".amazingcarousel-image").width() - $(this).width()) / 2;
                                        $(this).css({
                                            "margin-left": ml + "px"
                                        })
                                    }
                            } else {
                                $(this).css({
                                    width: "100%",
                                    height: "auto",
                                    "max-width": "100%",
                                    "max-height": "none",
                                    "margin-top": "0px",
                                    "margin-left": "0px"
                                });
                                if (instance.options.centerimage)
                                    if ($(this).height() > 0) {
                                        var mt =
                                            ($(this).closest(".amazingcarousel-image").height() - $(this).height()) / 2;
                                        $(this).css({
                                            "margin-top": mt + "px"
                                        })
                                    }
                            }
                        })
                    } else if (this.options.fitimage) {
                        var imageWidth = $(".amazingcarousel-image", this.container).width();
                        var imageHeight = imageWidth * this.options.height / this.options.width;
                        $(".amazingcarousel-image", this.container).css({
                            height: imageHeight + "px",
                            overflow: "hidden"
                        });
                        $(".amazingcarousel-image", this.container).find("img").each(function() {
                            $(this).css({
                                width: "auto",
                                height: "auto",
                                "max-width": "100%",
                                "max-height": "100%",
                                "margin-top": "0px",
                                "margin-left": "0px"
                            });
                            var imgW = $(this).width();
                            var imgH = $(this).height();
                            if (imgW > 0 && imgH && imgW / imgH > instance.options.width / instance.options.height) {
                                $(this).css({
                                    width: "100%"
                                });
                                if (instance.options.fitcenterimage)
                                    if ($(this).height() > 0) {
                                        var mt = ($(this).closest(".amazingcarousel-image").height() - $(this).height()) / 2;
                                        $(this).css({
                                            "margin-top": mt + "px"
                                        })
                                    }
                            } else {
                                $(this).css({
                                    height: "100%"
                                });
                                if (instance.options.fitcenterimage)
                                    if ($(this).width() > 0) {
                                        var ml = ($(this).closest(".amazingcarousel-image").width() -
                                            $(this).width()) / 2;
                                        $(this).css({
                                            "margin-left": ml + "px"
                                        })
                                    }
                            }
                        })
                    }
                }
                if (this.options.direction == "horizontal")
                    if (this.options.sameheight) $("ul.amazingcarousel-list", this.container).css({
                        width: "auto"
                    });
                    else $("ul.amazingcarousel-list", this.container).css("width", this.itemSize * (this.options.circular ? this.elemTotalCount : this.elemLength) + "px");
                else $("ul.amazingcarousel-list", this.container).css("height", this.options.height * (this.options.circular ? this.elemTotalCount : this.elemLength) + "px");
                var cssProp = this.options.direction ==
                    "horizontal" ? "margin-left" : "margin-top";
                var itemSize = this.options.direction == "horizontal" ? this.itemSize : this.options.height;
                var pos = -itemSize * this.currentItem;
                $("ul.amazingcarousel-list", this.container).css(cssProp, pos + "px");
                if (this.options.direction == "vertical") {
                    var itemHeight = this.options.height;
                    if (this.options.fixaspectratio) {
                        if ($(".amazingcarousel-item", this.container).height() > 0) itemHeight = $(".amazingcarousel-item", this.container).height()
                    } else {
                        var h0 = $(".amazingcarousel-item", this.container).height();
                        if (h0 > 0) {
                            var equalHeight = true;
                            $(".amazingcarousel-item", this.container).each(function() {
                                if ($(this).height() != h0) {
                                    equalHeight = false;
                                    return false
                                }
                            });
                            if (equalHeight) itemHeight = h0
                        }
                    }
                    $("div.amazingcarousel-list-container", this.container).css({
                        height: String(itemHeight * this.visibleItems + this.options.spacing * (this.visibleItems - 1)) + "px"
                    })
                }
                this.hideVideo(this.currentItem);
                this.hideArrows();
                this.checkMK()
            },
            createGoogleFonts: function() {
                if (this.options.previewmode) return;
                if (this.options.addgooglefonts && this.options.googlefonts &&
                    this.options.googlefonts.length > 0) {
                    var protocol = window.location.protocol == "https:" ? "https:" : "http:";
                    var fontRef = protocol + "//fonts.googleapis.com/css?family=" + this.options.googlefonts;
                    var fontLink = document.createElement("link");
                    fontLink.setAttribute("rel", "stylesheet");
                    fontLink.setAttribute("type", "text/css");
                    fontLink.setAttribute("href", fontRef);
                    document.getElementsByTagName("head")[0].appendChild(fontLink)
                }
            },
            createWatermark: function() {
                if (!this.options.showwatermark) return;
                if (this.options.watermarkstyle ==
                    "text" && this.options.watermarktext.length <= 0) return;
                if (this.options.watermarkstyle == "image" && this.options.watermarkimage.length <= 0) return;
                var wmCode = "<div style='" + this.options.watermarkpositioncss;
                if (this.options.watermarkstyle == "text") wmCode += this.options.watermarktextcss;
                if (this.options.watermarklink) wmCode += "cursor:pointer;";
                wmCode += "'>";
                if (this.options.watermarklink) {
                    wmCode += "<a href='" + this.options.watermarklink + "' style='" + this.options.watermarklinkcss + "'";
                    if (this.options.watermarktarget) wmCode +=
                        " target='" + this.options.watermarktarget + "'";
                    wmCode += ">"
                }
                if (this.options.watermarkstyle == "text") wmCode += this.options.watermarktext;
                else if (this.options.watermarkstyle == "image") wmCode += "<img src='" + this.options.skinsfolder + this.options.watermarkimage + "' style='border:none;' />";
                if (this.options.watermarklink) wmCode += "</a>";
                wmCode += "</div>";
                for (var i = 0; i < $(".amazingcarousel-image", this.container).length; i++) {
                    if (this.options.versionmark != "AMC" + "om" && i % 2 != 0) continue;
                    $(".amazingcarousel-image", this.container).eq(i).append($(wmCode))
                }
            },
            createSliderTimeout: function() {
                var instance = this;
                this.sliderTimeout = new ASTimer(this.options.interval, function() {
                    if (instance.options.autoplaydir == "right") instance.slideRun(-2);
                    else instance.slideRun(-1)
                }, null);
                if (instance.options.pauseonmouseover) this.container.hover(function() {
                    instance.mousePaused = true;
                    if (!instance.isPaused) instance.sliderTimeout.pause();
                    if (instance.options.continuous) {
                        $("ul.amazingcarousel-list", instance.container).stop();
                        clearInterval(instance.transitionTimerId);
                        instance.transitionTimerId =
                            null
                    }
                }, function() {
                    instance.mousePaused = false;
                    if (!instance.isPaused) instance.sliderTimeout.resume();
                    if (instance.options.continuous)
                        if (instance.continuousReset) {
                            instance.continuousReset = false;
                            clearInterval(instance.transitionTimerId);
                            instance.transitionTimerId = null;
                            instance.transitionTiming = instance.options.transitionduration;
                            instance.slideRun(-1)
                        } else {
                            $("ul.amazingcarousel-list", instance.container).animate(instance.animProp, instance.transitionTiming, instance.options.transitioneasing, function() {
                                instance.animationDone()
                            });
                            instance.transitionTimerId = setInterval(function() {
                                instance.transitionTiming -= 100
                            }, 100)
                        }
                })
            },
            createItemBottomShadow: function() {
                if (!this.options.showitembottomshadow) return;
                var l = (100 - this.options.itembottomshadowimagewidth) / 2;
                var shadow = "<div class='amazingcarousel-item-bottom-shadow' " + "style='display:block;position:absolute;left:" + l + "%;top:" + this.options.itembottomshadowimagetop + "%;" + "width:" + this.options.itembottomshadowimagewidth + "%;height:auto;'>" + "<img src='" + this.options.skinsfolder + this.options.itembottomshadowimage +
                    "' style='display:block;position:relative;width:100%;height:auto;" + "border:0;box-shadow:none;-moz-box-shadow:none;-webkit-box-shadow:none;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;" + "' />" + "</div>";
                $("li.amazingcarousel-item", this.container).prepend(shadow)
            },
            createBottomShadow: function() {
                if (!this.options.showbottomshadow) return;
                var l = (100 - this.options.bottomshadowimagewidth) / 2;
                var shadow = "<div class='amazingcarousel-bottom-shadow' " + "style='display:block;position:absolute;left:" +
                    l + "%;top:" + this.options.bottomshadowimagetop + "%;" + "width:" + this.options.bottomshadowimagewidth + "%;height:auto;'>" + "<img src='" + this.options.skinsfolder + this.options.bottomshadowimage + "' style='display:block;position:relative;width:100%;height:auto;" + "border:0;box-shadow:none;-moz-box-shadow:none;-webkit-box-shadow:none;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;" + "' />" + "</div>";
                $(".amazingcarousel-list-container", this.container).prepend(shadow)
            },
            createItemBackgroundImage: function() {
                if (!this.options.showitembackgroundimage ||
                    !this.options.itembackgroundimage) return;
                var l = (100 - this.options.itembackgroundimagewidth) / 2;
                var background = "<div class='amazingcarousel-background-image' " + "style='display:block;position:absolute;left:" + l + "%;top:" + this.options.itembackgroundimagetop + "%;width:" + this.options.itembackgroundimagewidth + "%;height:auto;'>" + "<img src='" + this.options.skinsfolder + this.options.itembackgroundimage + "' style='display:block;position:relative;width:100%;height:auto;" + "border:0;box-shadow:none;-moz-box-shadow:none;-webkit-box-shadow:none;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;" +
                    "' />" + "</div>";
                $("li.amazingcarousel-item", this.container).prepend(background)
            },
            createBackgroundImage: function() {
                if (!this.options.showbackgroundimage || !this.options.backgroundimage) return;
                var l = (100 - this.options.backgroundimagewidth) / 2;
                var background = "<div class='amazingcarousel-background-image' " + "style='display:block;position:absolute;left:" + l + "%;top:" + this.options.backgroundimagetop + "%;width:" + this.options.backgroundimagewidth + "%;height:auto;'>" + "<img src='" + this.options.skinsfolder + this.options.backgroundimage +
                    "' style='display:block;position:relative;width:100%;height:auto;" + "border:0;box-shadow:none;-moz-box-shadow:none;-webkit-box-shadow:none;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;" + "' />" + "</div>";
                this.container.prepend(background)
            },
            createArrows: function() {
                if (this.options.arrowstyle == "none") return;
                var instance = this;
                var $prevArrow = $(".amazingcarousel-prev", this.container);
                var $nextArrow = $(".amazingcarousel-next", this.container);
                $prevArrow.css({
                    overflow: "hidden",
                    position: "absolute",
                    cursor: "pointer",
                    width: this.options.arrowwidth + "px",
                    height: this.options.arrowheight + "px",
                    background: "url('" + this.options.arrowimage + "') no-repeat left top"
                });
                if (ACPlatforms.isIE678()) $prevArrow.css({
                    opacity: "inherit",
                    filter: "inherit"
                });
                $nextArrow.css({
                    overflow: "hidden",
                    position: "absolute",
                    cursor: "pointer",
                    width: this.options.arrowwidth + "px",
                    height: this.options.arrowheight + "px",
                    background: "url('" + this.options.arrowimage + "') no-repeat right top"
                });
                if (ACPlatforms.isIE678()) $nextArrow.css({
                    opacity: "inherit",
                    filter: "inherit"
                });
                $prevArrow.hover(function() {
                    $(this).css({
                        "background-position": "left bottom"
                    })
                }, function() {
                    $(this).css({
                        "background-position": "left top"
                    })
                });
                $nextArrow.hover(function() {
                    $(this).css({
                        "background-position": "right bottom"
                    })
                }, function() {
                    $(this).css({
                        "background-position": "right top"
                    })
                });
                if (this.options.arrowstyle == "always") {
                    $prevArrow.css({
                        display: "block"
                    });
                    $nextArrow.css({
                        display: "block"
                    })
                } else {
                    $prevArrow.css({
                        display: "none"
                    });
                    $nextArrow.css({
                        display: "none"
                    });
                    this.container.hover(function() {
                        clearTimeout(instance.arrowTimeout);
                        if (instance.options.circular || instance.currentItem > 0)
                            if (ACPlatforms.isIE678()) $prevArrow.show();
                            else $prevArrow.fadeIn();
                        if (instance.options.circular || instance.currentItem < instance.elemLength - instance.visibleItems)
                            if (ACPlatforms.isIE678()) $nextArrow.show();
                            else $nextArrow.fadeIn()
                    }, function() {
                        instance.arrowTimeout = setTimeout(function() {
                            if (ACPlatforms.isIE678()) {
                                $prevArrow.hide();
                                $nextArrow.hide()
                            } else {
                                $prevArrow.fadeOut();
                                $nextArrow.fadeOut()
                            }
                        }, instance.options.arrowhideonmouseleave)
                    })
                }
                $prevArrow.click(function() {
                    instance.slideRun(-2,
                        true)
                });
                $nextArrow.click(function() {
                    instance.slideRun(-1, true)
                })
            },
            hideArrows: function() {
                var $prevArrow = $(".amazingcarousel-prev", this.container);
                var $nextArrow = $(".amazingcarousel-next", this.container);
                if (!this.options.circular && this.currentItem <= 0) $prevArrow.hide();
                else if (this.options.arrowstyle == "always") $prevArrow.show();
                if (!this.options.circular && this.currentItem >= this.elemLength - this.visibleItems) $nextArrow.hide();
                else if (this.options.arrowstyle == "always") $nextArrow.show()
            },
            createNav: function() {
                if (this.options.navstyle ==
                    "none") return;
                var $nav = $(".amazingcarousel-nav", this.container);
                var $bulletWrapper = $("<div class='amazingcarousel-bullet-wrapper'></div>");
                $bulletWrapper.appendTo($nav);
                var $bulletList = $("<div class='amazingcarousel-bullet-list'></div>");
                $bulletList.appendTo($bulletWrapper);
                var bulletSize = this.options.navdirection == "vertical" ? this.options.navwidth : this.options.navheight;
                var len = this.elemLength * bulletSize + (this.elemLength - 1) * this.options.navspacing;
                if (this.options.navdirection == "vertical") {
                    $bulletWrapper.css({
                        height: len +
                            "px",
                        width: "auto"
                    });
                    $bulletList.css({
                        height: len + "px",
                        width: "auto"
                    })
                } else {
                    $bulletWrapper.css({
                        width: len + "px",
                        height: "auto"
                    });
                    $bulletList.css({
                        width: len + "px",
                        height: "auto"
                    })
                }
                var $bullet;
                for (var i = 0; i < this.elemLength; i++) {
                    $bullet = this.createNavBullet(i);
                    $bulletList.append($bullet)
                }
                var instance = this;
                this.container.on("amazingcarousel.switch", function(event, prev, cur) {
                    for (var i = 0; i < instance.elemLength; i++) $(".amazingcarousel-bullet-" + i, instance.container)["bulletNormal" + instance.id]();
                    if (cur >= 0) {
                        var curPage =
                            instance.calcCurrentPage(cur);
                        $(".amazingcarousel-bullet-" + curPage, instance.container)["bulletSelected" + instance.id]()
                    }
                })
            },
            calcCurrentPage: function(cur) {
                var instance = this;
                var curPage = cur;
                if (instance.options.navmode == "page") {
                    var totalItems = $("li.amazingcarousel-item", instance.container).length;
                    if (cur + instance.visibleItems >= totalItems) curPage = Math.ceil(totalItems / instance.visibleItems) - 1;
                    else curPage = Math.floor(cur / instance.visibleItems)
                }
                return curPage
            },
            createNavBullet: function(index) {
                var f = this.options.navdirection ==
                    "vertical" ? "top" : "left";
                var marginF = this.options.navdirection == "vertical" ? "bottom" : "right";
                var spacing = index == this.elemLength - 1 ? 0 : this.options.navspacing;
                var w = this.options.navwidth;
                var h = this.options.navheight;
                var $bullet = $("<div class='amazingcarousel-bullet-" + index + "' style='position:relative;float:" + f + ";margin-" + marginF + ":" + spacing + "px;width:" + w + "px;height:" + h + "px;cursor:pointer;'></div>");
                $bullet.data("index", index);
                var instance = this;
                $bullet.hover(function() {
                    var bulletIndex = $(this).data("index");
                    var curPage = instance.calcCurrentPage(instance.currentItem);
                    if (bulletIndex != curPage) $(this)["bulletHighlight" + instance.id]();
                    if (instance.options.navswitchonmouseover) {
                        if (instance.options.navmode == "page") bulletIndex = instance.visibleItems * bulletIndex;
                        instance.slideRun(bulletIndex, true)
                    }
                }, function() {
                    var curPage = instance.calcCurrentPage(instance.currentItem);
                    if ($(this).data("index") != curPage) $(this)["bulletNormal" + instance.id]()
                });
                $bullet.click(function() {
                    var bulletIndex = $(this).data("index");
                    if (instance.options.navmode ==
                        "page") bulletIndex = instance.visibleItems * bulletIndex;
                    instance.slideRun(bulletIndex, true)
                });
                if (this.options.navstyle == "numbering") {
                    $bullet.html(String(index + 1));
                    $bullet.css({
                        "font": this.options.navnumberingfont,
                        "line-height": this.options.navheight + "px",
                        "color": this.options.navnumberingcolor,
                        "background-color": this.options.navnumberingbgcolor,
                        "text-align": "center"
                    });
                    if (this.options.navnumberingbground) $bullet.css({
                        "border-radius": Math.round(this.options.navheight / 2) + "px"
                    });
                    $.fn["bulletNormal" + this.id] =
                        function() {
                            $(this).css({
                                "color": instance.options.navnumberingcolor,
                                "background-color": instance.options.navnumberingbgcolor
                            })
                        };
                    $.fn["bulletHighlight" + this.id] = $.fn["bulletSelected" + this.id] = function() {
                        $(this).css({
                            "color": instance.options.navnumberingcolorhighlight,
                            "background-color": instance.options.navnumberingbgcolorhighlight
                        })
                    }
                } else {
                    $bullet.css({
                        background: "url('" + this.options.navimage + "') no-repeat left top"
                    });
                    $.fn["bulletNormal" + this.id] = function() {
                        $(this).css({
                            "background-position": "left top"
                        })
                    };
                    $.fn["bulletHighlight" + this.id] = $.fn["bulletSelected" + this.id] = function() {
                        $(this).css({
                            "background-position": "left bottom"
                        })
                    }
                }
                return $bullet
            },
            resizeNav: function() {
                if (this.options.navstyle == "none" || this.options.navmode == "item") return;
                var page = Math.ceil(this.elemLength / this.visibleItems);
                var i;
                for (i = 0; i < page; i++) $(".amazingcarousel-bullet-" + i, this.container).css({
                    display: "block"
                });
                for (i = page; i < this.elemLength; i++) $(".amazingcarousel-bullet-" + i, this.container).css({
                    display: "none"
                });
                var curPage = this.calcCurrentPage(this.currentItem);
                for (i = 0; i < this.elemLength; i++) $(".amazingcarousel-bullet-" + i, this.container)["bulletNormal" + this.id];
                $(".amazingcarousel-bullet-" + curPage, this.container)["bulletHighlight" + this.id];
                var bulletSize = this.options.navdirection == "vertical" ? this.options.navwidth : this.options.navheight;
                var len = page * bulletSize + (page - 1) * this.options.navspacing;
                if (this.options.navdirection == "vertical") $(".amazingcarousel-bullet-wrapper", this.container).css({
                    height: len + "px",
                    width: "auto"
                });
                else $(".amazingcarousel-bullet-wrapper",
                    this.container).css({
                    width: len + "px",
                    height: "auto"
                })
            },
            animationDone: function() {
                clearInterval(this.transitionTimerId);
                this.transitionTimerId = null;
                this.transitionTiming = 0;
                this.isAnimating = false;
                if (this.options.loop > 0)
                    if (this.currentItem + this.visibleItems >= this.elemLength) {
                        this.loopCount++;
                        if (this.options.loop <= this.loopCount) this.isPaused = true
                    } if (!this.isPaused && !this.tempPaused && !this.mousePaused) this.sliderTimeout.start();
                else this.sliderTimeout.stop()
            },
            slideRun: function(index, isManual) {
                if (this.isAnimating)
                    if (this.options.continuous &&
                        !isManual) return;
                    else {
                        $("ul.amazingcarousel-list", this.container).finish();
                        this.animationDone();
                        this.isAnimating = false
                    } if (index == this.currentItem || index < -2 || index >= this.elemLength) return;
                var scrollOptions = {
                    transitionduration: this.options.continuous && isManual ? this.options.originaltransitionduration : this.options.transitionduration,
                    transitioneasing: this.options.continuous && isManual ? this.options.originaltransitioneasing : this.options.transitioneasing,
                    scrollmode: this.options.continuous && isManual ? this.options.originalscrollmode : this.options.scrollmode,
                    scrollitems: this.options.continuous && isManual ? this.options.originalscrollitems : this.options.scrollitems
                };
                var scrollItems;
                if (index >= 0) scrollItems = 1;
                else {
                    scrollItems = this.visibleItems;
                    if (scrollOptions.scrollmode == "item")
                        if (scrollItems > scrollOptions.scrollitems) scrollItems = scrollOptions.scrollitems
                }
                var nextItem, dir;
                if (index == -2) {
                    dir = -1;
                    nextItem = this.currentItem - scrollItems
                } else if (index == -1) {
                    dir = 1;
                    nextItem = this.currentItem + scrollItems
                } else {
                    dir = index > this.currentItem ? 1 : -1;
                    nextItem =
                        index
                }
                if (dir < 0) {
                    if (nextItem < 0) nextItem = this.options.circular ? this.elemLength + nextItem : 0
                } else if (this.options.circular) {
                    if (nextItem >= this.elemLength) nextItem = nextItem - this.elemLength
                } else if (nextItem > this.elemLength - this.visibleItems) nextItem = this.elemLength - this.visibleItems;
                if (nextItem == this.currentItem) return;
                this.isAnimating = true;
                this.sliderTimeout.stop();
                this.tempPaused = false;
                var animCss = this.options.direction == "horizontal" ? "margin-left" : "margin-top";
                var animItemSize = this.itemSize;
                if (this.options.direction ==
                    "vertical") animItemSize += this.options.spacing;
                if (this.options.sameheight && this.options.continuous && this.options.direction == "horizontal") {
                    var totalWidth = 0;
                    $("li.amazingcarousel-item", this.container).each(function() {
                        totalWidth += $(this).outerWidth(true)
                    });
                    if (totalWidth > 0 && $("li.amazingcarousel-item", this.container).length > 0) animItemSize = totalWidth / $("li.amazingcarousel-item", this.container).length
                } else if (this.options.direction == "vertical") {
                    animItemSize = this.options.height + this.options.spacing;
                    var totalHeight =
                        0;
                    var instance = this;
                    $("li.amazingcarousel-item", this.container).each(function() {
                        totalHeight += $(this).height() + instance.options.spacing
                    });
                    if (totalHeight > 0 && $("li.amazingcarousel-item", this.container).length > 0) animItemSize = totalHeight / $("li.amazingcarousel-item", this.container).length
                }
                var animInitPos = animItemSize * this.currentItem;
                var animTargetPos = animItemSize * nextItem;
                var showStart = nextItem;
                if (this.options.circular)
                    if (dir < 0) {
                        if (nextItem > this.currentItem) animInitPos = animItemSize * (this.elemLength + this.currentItem)
                    } else if (nextItem >
                    this.elemLength - scrollItems && this.elemLength < 2 * scrollItems) animInitPos = animItemSize * (nextItem - scrollItems);
                else if (nextItem < this.currentItem) {
                    animTargetPos = animItemSize * (this.elemLength + nextItem);
                    showStart = this.elemLength + nextItem
                }
                animInitPos = -animInitPos;
                animTargetPos = -animTargetPos;
                if (this.options.sameheight && !this.options.continuous && this.options.direction == "horizontal") {
                    var listWidth = 0;
                    $("li.amazingcarousel-item", this.container).each(function() {
                        listWidth += $(this).outerWidth(true)
                    });
                    var itemsWidth =
                        listWidth / 2;
                    var wrapperWidth = $(".amazingcarousel-list-wrapper", this.container).width();
                    var initPos = -1 * parseInt($("ul.amazingcarousel-list", this.container).css("margin-left"));
                    var targetPos = initPos;
                    var moveWidth = wrapperWidth;
                    if (scrollOptions.scrollmode == "item")
                        if (dir < 0) moveWidth = $("li.amazingcarousel-item-" + nextItem, this.container).outerWidth(true);
                        else moveWidth = $("li.amazingcarousel-item-" + this.currentItem, this.container).outerWidth(true);
                    if (dir < 0) {
                        targetPos = initPos - moveWidth;
                        if (targetPos < 0) {
                            targetPos +=
                                itemsWidth;
                            initPos += itemsWidth
                        }
                    } else {
                        targetPos = initPos + moveWidth;
                        if (targetPos + wrapperWidth > listWidth) {
                            initPos -= itemsWidth;
                            targetPos -= itemsWidth
                        }
                    }
                    if (index >= 0) {
                        targetPos = 0;
                        $("li.amazingcarousel-item", this.container).each(function(i) {
                            if (i >= index) return false;
                            targetPos += $(this).outerWidth(true)
                        })
                    }
                    animInitPos = -initPos;
                    animTargetPos = -targetPos
                }
                $("ul.amazingcarousel-list", this.container).css(animCss, animInitPos + "px");
                this.animProp = {};
                this.animProp[animCss] = animTargetPos + "px";
                var prevItem = this.currentItem;
                this.currentItem = nextItem;
                this.container.trigger("amazingcarousel.switch", [prevItem, nextItem]);
                this.hideVideo(showStart);
                this.hideArrows();
                if (this.options.continuous && isManual) this.continuousReset = true;
                var instance = this;
                $("ul.amazingcarousel-list", this.container).animate(this.animProp, scrollOptions.transitionduration, scrollOptions.transitioneasing, function() {
                    instance.animationDone()
                });
                if (this.options.continuous && !isManual) {
                    if (this.transitionTimerId) {
                        clearInterval(this.transitionTimerId);
                        this.transitionTimerId =
                            null
                    }
                    this.transitionTiming = scrollOptions.transitionduration;
                    this.transitionTimerId = setInterval(function() {
                        instance.transitionTiming -= 100
                    }, 100)
                }
            }
        };
        options = options || {};
        for (var key in options)
            if (key.toLowerCase() !== key) {
                options[key.toLowerCase()] = options[key];
                delete options[key]
            } this.each(function() {
            this.options = $.extend({}, options);
            if ($(this).data("skin") && typeof AMAZINGCAROUSEL_SKIN_OPTIONS !== "undefined")
                if ($(this).data("skin") in AMAZINGCAROUSEL_SKIN_OPTIONS) this.options = $.extend({}, AMAZINGCAROUSEL_SKIN_OPTIONS[$(this).data("skin")],
                    this.options);
            var instance = this;
            $.each($(this).data(), function(key, value) {
                instance.options[key.toLowerCase()] = value
            });
            var searchoptions = {};
            var searchstring = window.location.search.substring(1).split("&");
            for (var i = 0; i < searchstring.length; i++) {
                var keyvalue = searchstring[i].split("=");
                if (keyvalue && keyvalue.length == 2) {
                    var key = keyvalue[0].toLowerCase();
                    var value = unescape(keyvalue[1]).toLowerCase();
                    if (value == "true") searchoptions[key] = true;
                    else if (value == "false") searchoptions[key] = false;
                    else searchoptions[key] =
                        value
                }
            }
            this.options = $.extend(this.options, searchoptions);
            var defaultOptions = {
                hidecontaineroninit: true,
                hidecontainerbeforeloaded: false,
                watermarklinkdefault: "http://amazingcarousel.com",
                watermarktargetdefault: "_blank",
                wmtext: "jQuery Carousel Free Version",
                previewmode: false,
                initsocialmedia: false,
                direction: "horizontal",
                autoplay: false,
                autoplaydir: "left",
                pauseonmouseover: true,
                interval: 3E3,
                loop: 0,
                random: true,
                fixaspectratio: false,
                centerimage: false,
                fitimage: false,
                fitcenterimage: false,
                sameheight: false,
                sameheightresponsive: false,
                sameheightmediumscreen: 769,
                sameheightmediumheight: 200,
                sameheightsmallscreen: 415,
                sameheightsmallheight: 200,
                fullwidth: false,
                nativehtml5controls: false,
                videohidecontrols: false,
                videohideplaybutton: false,
                defaultvideovolume: 1,
                nativecontrolsonfirefox: false,
                nativecontrolsonie: false,
                nativecontrolsoniphone: true,
                nativecontrolsonipad: true,
                nativecontrolsonandroid: true,
                nativecontrolsonfullscreen: true,
                nativecontrolsnodownload: true,
                circular: true,
                scrollmode: "page",
                scrollitems: 1,
                donotcircularforless: false,
                circularlimit: 3,
                skinsfoldername: "skins",
                showplayvideo: false,
                playvideoimage: "playvideo-64-64-0.png",
                playvideoimagepos: "center",
                showhoveroverlay: true,
                hoveroverlayimage: "hoveroverlay-64-64-0.png",
                showhoveroverlayalways: false,
                hidehoveroverlayontouch: false,
                hoverdelay: 400,
                enabletouchswipe: true,
                swipepreventdefaultonandroid: false,
                responsive: false,
                usescreenquery: true,
                spacing: 24,
                showbackgroundimage: false,
                backgroundimage: "background.png",
                backgroundimagewidth: 110,
                backgroundimagetop: -40,
                showitembackgroundimage: false,
                itembackgroundimage: "background.png",
                itembackgroundimagewidth: 150,
                itembackgroundimagetop: 0,
                showbottomshadow: false,
                bottomshadowimage: "bottomshadow.png",
                bottomshadowimagewidth: 110,
                bottomshadowimagetop: 95,
                showitembottomshadow: false,
                itembottomshadowimage: "bottomshadow.png",
                itembottomshadowimagewidth: 110,
                itembottomshadowimagetop: 100,
                arrowstyle: "always",
                arrowimage: "arrows.png",
                arrowwidth: 48,
                arrowheight: 48,
                arrowhideonmouseleave: 1E3,
                navdirection: "horizontal",
                navstyle: "bullets",
                navmode: "page",
                navswitchonmouseover: false,
                navnumberingfont: "normal 12px Arial",
                navnumberingcolor: "#666",
                navnumberingbgcolor: "#fff",
                navnumberingcolorhighlight: "#fff",
                navnumberingbgcolorhighlight: "#333",
                navnumberingbground: true,
                navwidth: 16,
                navheight: 16,
                navspacing: 8,
                navimage: "bullet.png",
                transitionduration: 1E3,
                transitioneasing: "easeOutQuad",
                continuous: false,
                continuousduration: 2500,
                versionmark: "AMFree",
                showwdefault: true,
                wstyledefault: "text",
                wtextdefault: "106,81,117,101,114,121,32,67,97,114,111,117,115,101,108,32,70,114,101,101,32,86,101,114,115,105,111,110",
                wimagedefault: "",
                wposcss: "visibility:hidden;display:none;position:absolute;bottom:6px;right:6px;",
                wtextcssdefault: "font:12px Arial,Tahoma,Helvetica,sans-serif;color:#666;padding:2px 4px;-webkit-border-radius:2px;-moz-border-radius:2px;border-radius:2px;background-color:#fff;opacity:0.9;filter:alpha(opacity=90);",
                wlinkcssdefault: "visibility:hidden;display:none;text-decoration:none;font:12px Arial,Tahoma,Helvetica,sans-serif;color:#333;"
            };
            this.options = $.extend(defaultOptions, this.options);
            var i;
            var l;
            var mark = "";
            var bytes = this.options.wtextdefault.split(",");
            for (i = 0; i < bytes.length; i++) mark += String.fromCharCode(bytes[i]);
            this.options.fvm =
                mark;
            var d0 = "ammaagziicngcarouselh.iclolms";
            for (i = 1; i <= 5; i++) d0 = d0.slice(0, i) + d0.slice(i + 1);
            l = d0.length;
            for (i = 0; i < 5; i++) d0 = d0.slice(0, l - 9 + i) + d0.slice(l - 8 + i);
            if (this.options.versionmark != "AMC" + "om") {
                this.options.showwatermark = window.location.href.indexOf(d0) >= 0 ? false : this.options.showwdefault;
                this.options.watermarkstyle = this.options.wstyledefault;
                this.options.watermarktext = this.options.fvm;
                this.options.watermarkimage = this.options.wimagedefault;
                this.options.watermarklink = this.options.watermarklinkdefault;
                this.options.watermarktarget = this.options.watermarktargetdefault;
                this.options.watermarkpositioncss = this.options.wposcss;
                this.options.watermarktextcss = this.options.wtextcssdefault;
                this.options.watermarklinkcss = this.options.wlinkcssdefault
            }
            if (this.options.continuous) {
                this.options.originaltransitionduration = this.options.transitionduration;
                this.options.originaltransitioneasing = this.options.transitioneasing;
                this.options.originalscrollmode = this.options.scrollmode;
                this.options.originalscrollitems = this.options.scrollitems;
                this.options.autoplay = true;
                this.options.interval = 0;
                this.options.transitionduration = this.options.continuousduration;
                this.options.transitioneasing = "linear";
                this.options.scrollmode = "item";
                this.options.scrollitems = 1
            }
            if (typeof amazingcarousel_previewmode != "undefined") this.options.previewmode = amazingcarousel_previewmode;
            this.options.htmlfolder = window.location.href.substr(0, window.location.href.lastIndexOf("/") + 1);
            if (this.options.skinsfoldername.length > 0) this.options.skinsfolder = this.options.jsfolder + this.options.skinsfoldername +
                "/";
            else this.options.skinsfolder = this.options.jsfolder;
            if (this.options.arrowimage.substring(0, 7).toLowerCase() != "http://" && this.options.arrowimage.substring(0, 8).toLowerCase() != "https://") this.options.arrowimage = this.options.skinsfolder + this.options.arrowimage;
            if (this.options.navimage.substring(0, 7).toLowerCase() != "http://" && this.options.navimage.substring(0, 8).toLowerCase() != "https://") this.options.navimage = this.options.skinsfolder + this.options.navimage;
            if (this.options.hoveroverlayimage.substring(0,
                    7).toLowerCase() != "http://" && this.options.hoveroverlayimage.substring(0, 8).toLowerCase() != "https://") this.options.hoveroverlayimage = this.options.skinsfolder + this.options.hoveroverlayimage;
            if (this.options.playvideoimage.substring(0, 7).toLowerCase() != "http://" && this.options.playvideoimage.substring(0, 8).toLowerCase() != "https://") this.options.playvideoimage = this.options.skinsfolder + this.options.playvideoimage;
            var carouselid;
            if ("carouselid" in this.options) carouselid = this.options.carouselid;
            else {
                carouselid =
                    amazingcarouselId;
                amazingcarouselId++
            }
            var object = new AmazingCarousel($(this), this.options, carouselid);
            $(this).data("object", object);
            $(this).data("id", carouselid);
            amazingcarouselObjects.addObject(object)
        })
    }
})(jQuery);
(function($) {
    $.fn.carouselTouchSwipe = function(options) {
        var defaults = {
            preventWebBrowser: false,
            swipeLeft: null,
            swipeRight: null,
            swipeTop: null,
            swipeBottom: null
        };
        if (options) $.extend(defaults, options);
        return this.each(function() {
            var startX = -1,
                startY = -1;
            var curX = -1,
                curY = -1;

            function touchStart(event) {
                var e = event.originalEvent;
                if (e.targetTouches.length >= 1) {
                    startX = e.targetTouches[0].pageX;
                    startY = e.targetTouches[0].pageY
                } else touchCancel(event)
            }

            function touchMove(event) {
                if (defaults.preventWebBrowser) event.preventDefault();
                var e = event.originalEvent;
                if (e.targetTouches.length >= 1) {
                    curX = e.targetTouches[0].pageX;
                    curY = e.targetTouches[0].pageY
                } else touchCancel(event)
            }

            function touchEnd(event) {
                if (curX > 0 || curY > 0) {
                    triggerHandler();
                    touchCancel(event)
                } else touchCancel(event)
            }

            function touchCancel(event) {
                startX = -1;
                startY = -1;
                curX = -1;
                curY = -1
            }

            function triggerHandler() {
                if (Math.abs(curX - startX) > Math.abs(curY - startY))
                    if (curX > startX) {
                        if (defaults.swipeRight) defaults.swipeRight.call()
                    } else {
                        if (defaults.swipeLeft) defaults.swipeLeft.call()
                    }
                else if (curY >
                    startY) {
                    if (defaults.swipeBottom) defaults.swipeBottom.call()
                } else if (defaults.swipeTop) defaults.swipeTop.call()
            }
            try {
                $(this).on("touchstart", touchStart);
                $(this).on("touchmove", touchMove);
                $(this).on("touchend", touchEnd);
                $(this).on("touchcancel", touchCancel)
            } catch (e) {}
        })
    }
})(jQuery);
jQuery.easing["jswing"] = jQuery.easing["swing"];
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    easeInQuad: function(x, t, b, c, d) {
        return c * (t /= d) * t + b
    },
    easeOutQuad: function(x, t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b
    },
    easeInOutQuad: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t + b;
        return -c / 2 * (--t * (t - 2) - 1) + b
    },
    easeInCubic: function(x, t, b, c, d) {
        return c * (t /= d) * t * t + b
    },
    easeOutCubic: function(x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t + 1) + b
    },
    easeInOutCubic: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t + 2) + b
    },
    easeInQuart: function(x, t, b, c, d) {
        return c *
            (t /= d) * t * t * t + b
    },
    easeOutQuart: function(x, t, b, c, d) {
        return -c * ((t = t / d - 1) * t * t * t - 1) + b
    },
    easeInOutQuart: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
        return -c / 2 * ((t -= 2) * t * t * t - 2) + b
    },
    easeInQuint: function(x, t, b, c, d) {
        return c * (t /= d) * t * t * t * t + b
    },
    easeOutQuint: function(x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b
    },
    easeInOutQuint: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t * t * t + 2) + b
    },
    easeInSine: function(x, t, b, c, d) {
        return -c * Math.cos(t / d * (Math.PI / 2)) + c + b
    },
    easeOutSine: function(x,
        t, b, c, d) {
        return c * Math.sin(t / d * (Math.PI / 2)) + b
    },
    easeInOutSine: function(x, t, b, c, d) {
        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b
    },
    easeInExpo: function(x, t, b, c, d) {
        return t == 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b
    },
    easeOutExpo: function(x, t, b, c, d) {
        return t == d ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b
    },
    easeInOutExpo: function(x, t, b, c, d) {
        if (t == 0) return b;
        if (t == d) return b + c;
        if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b
    },
    easeInCirc: function(x, t, b, c, d) {
        return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b
    },
    easeOutCirc: function(x,
        t, b, c, d) {
        return c * Math.sqrt(1 - (t = t / d - 1) * t) + b
    },
    easeInOutCirc: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
        return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b
    },
    easeInElastic: function(x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0) return b;
        if ((t /= d) == 1) return b + c;
        if (!p) p = d * 0.3;
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * 2 * Math.PI / p)) + b
    },
    easeOutElastic: function(x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0) return b;
        if ((t /= d) == 1) return b + c;
        if (!p) p = d * 0.3;
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * 2 * Math.PI / p) + c + b
    },
    easeInOutElastic: function(x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0) return b;
        if ((t /= d / 2) == 2) return b + c;
        if (!p) p = d * 0.3 * 1.5;
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        if (t < 1) return -0.5 * a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * 2 * Math.PI / p) + b;
        return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * 2 * Math.PI /
            p) * 0.5 + c + b
    },
    easeInBack: function(x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c * (t /= d) * t * ((s + 1) * t - s) + b
    },
    easeOutBack: function(x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b
    },
    easeInOutBack: function(x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        if ((t /= d / 2) < 1) return c / 2 * t * t * (((s *= 1.525) + 1) * t - s) + b;
        return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b
    },
    easeInBounce: function(x, t, b, c, d) {
        return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b
    },
    easeOutBounce: function(x, t, b, c, d) {
        if ((t /= d) < 1 / 2.75) return c *
            7.5625 * t * t + b;
        else if (t < 2 / 2.75) return c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b;
        else if (t < 2.5 / 2.75) return c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b;
        else return c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b
    },
    easeInOutBounce: function(x, t, b, c, d) {
        if (t < d / 2) return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * 0.5 + b;
        return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b
    }
});
if (typeof amazingcarouselObjects === "undefined") var amazingcarouselObjects = new function() {
    this.objects = [];
    this.addObject = function(obj) {
        this.objects.push(obj)
    }
};
if (typeof ASYouTubeIframeAPIReady === "undefined") {
    var ASYouTubeIframeAPIReady = false;
    var ASYouTubeTimeout = 0;

    function onYouTubeIframeAPIReady() {
        ASYouTubeIframeAPIReady = true
    }
}
if (typeof amazingcarouselId === "undefined") var amazingcarouselId = 0;