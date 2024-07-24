!(function (t, s) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = s())
    : "function" == typeof define && define.amd
    ? define(s)
    : ((t || self).Typed = s());
})(this, function () {
  function t() {
    return (
      (t = Object.assign
        ? Object.assign.bind()
        : function (t) {
            for (var s = 1; s < arguments.length; s++) {
              var e = arguments[s];
              for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            }
            return t;
          }),
      t.apply(this, arguments)
    );
  }

  var s = {
      strings: [
        `
        Hey there! I’m Zayn Jaber, 
        a dedicated computer science student from Michigan, 
        currently in my second and third year. 
        My journey in technology is fueled by a passion for web development that started at a young age. 
        I thrive on coding and love tackling new challenges.
        I am constantly learning and growing. 
        Every project is an opportunity to expand my skills and understand the intricacies of software development. 
        I may still be in the early stages of my career, 
        but my enthusiasm and commitment drive me to keep improving and exploring new technologies.
      `,
      ],
      stringsElement: null,
      typeSpeed: 0,
      startDelay: 0,
      backSpeed: 0,
      smartBackspace: !0,
      shuffle: !1,
      backDelay: 700,
      fadeOut: !1,
      fadeOutClass: "typed-fade-out",
      fadeOutDelay: 500,
      loop: !1,
      loopCount: Infinity,
      showCursor: !1,
      cursorChar: "|",
      autoInsertCss: !0,
      attr: null,
      bindInputFocusEvents: !1,
      contentType: "html",
      onBegin: function (t) {},
      onComplete: function (t) {},
      preStringTyped: function (t, s) {},
      onStringTyped: function (t, s) {},
      onLastStringBackspaced: function (t) {},
      onTypingPaused: function (t, s) {},
      onTypingResumed: function (t, s) {},
      onReset: function (t) {},
      onStop: function (t, s) {},
      onStart: function (t, s) {},
      onDestroy: function (t) {},
    },
    e = new /*#__PURE__*/ ((function () {
      function e() {}
      var n = e.prototype;
      return (
        (n.load = function (e, n, i) {
          if (
            ((e.el = "string" == typeof i ? document.querySelector(i) : i),
            (e.options = t({}, s, n)),
            (e.isInput = "input" === e.el.tagName.toLowerCase()),
            (e.attr = e.options.attr),
            (e.bindInputFocusEvents = e.options.bindInputFocusEvents),
            (e.showCursor = !e.isInput && e.options.showCursor),
            (e.cursorChar = e.options.cursorChar),
            (e.cursorBlinking = !0),
            (e.elContent = e.attr
              ? e.el.getAttribute(e.attr)
              : e.el.textContent),
            (e.contentType = e.options.contentType),
            (e.typeSpeed = e.options.typeSpeed),
            (e.startDelay = e.options.startDelay),
            (e.backSpeed = e.options.backSpeed),
            (e.smartBackspace = e.options.smartBackspace),
            (e.backDelay = e.options.backDelay),
            (e.fadeOut = e.options.fadeOut),
            (e.fadeOutClass = e.options.fadeOutClass),
            (e.fadeOutDelay = e.options.fadeOutDelay),
            (e.isPaused = !1),
            (e.strings = e.options.strings.map(function (t) {
              return t.trim();
            })),
            (e.stringsElement =
              "string" == typeof e.options.stringsElement
                ? document.querySelector(e.options.stringsElement)
                : e.options.stringsElement),
            e.stringsElement)
          ) {
            (e.strings = []),
              (e.stringsElement.style.cssText =
                "clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;");
            var r = Array.prototype.slice.apply(e.stringsElement.children),
              o = r.length;
            if (o)
              for (var a = 0; a < o; a += 1)
                e.strings.push(r[a].innerHTML.trim());
          }
          for (var u in ((e.strPos = 0),
          (e.currentElContent = this.getCurrentElContent(e)),
          e.currentElContent &&
            e.currentElContent.length > 0 &&
            ((e.strPos = e.currentElContent.length - 1),
            e.strings.unshift(e.currentElContent)),
          (e.sequence = []),
          e.strings))
            e.sequence[u] = u;
          (e.arrayPos = 0),
            (e.stopNum = 0),
            (e.loop = e.options.loop),
            (e.loopCount = e.options.loopCount),
            (e.curLoop = 0),
            (e.shuffle = e.options.shuffle),
            (e.pause = {
              status: !1,
              typewrite: !0,
              curString: "",
              curStrPos: 0,
            }),
            (e.typingComplete = !1),
            (e.autoInsertCss = e.options.autoInsertCss),
            e.autoInsertCss &&
              (this.appendCursorAnimationCss(e),
              this.appendFadeOutAnimationCss(e));
        }),
        (n.getCurrentElContent = function (t) {
          return t.attr
            ? t.el.getAttribute(t.attr)
            : t.isInput
            ? t.el.value
            : "html" === t.contentType
            ? t.el.innerHTML
            : t.el.textContent;
        }),
        (n.appendCursorAnimationCss = function (t) {
          var s = "data-typed-js-cursor-css";
          if (t.showCursor && !document.querySelector("[" + s + "]")) {
            var e = document.createElement("style");
            e.setAttribute(s, "true"),
              (e.innerHTML =
                "\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "),
              document.body.appendChild(e);
          }
        }),
        (n.appendFadeOutAnimationCss = function (t) {
          var s = "data-typed-fadeout-js-css";
          if (t.fadeOut && !document.querySelector("[" + s + "]")) {
            var e = document.createElement("style");
            e.setAttribute(s, "true"),
              (e.innerHTML =
                "\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      "),
              document.body.appendChild(e);
          }
        }),
        e
      );
    })())(),
    n = new /*#__PURE__*/ ((function () {
      function t() {}
      var s = t.prototype;
      return (
        (s.typeHtmlChars = function (t, s, e) {
          if ("html" !== e.contentType) return s;
          var n = t.substring(s).charAt(0);
          if ("<" === n || "&" === n) {
            var i;
            for (
              i = "<" === n ? ">" : ";";
              t.substring(s + 1).charAt(0) !== i && !(1 + ++s > t.length);

            );
            s++;
          }
          return s;
        }),
        (s.backSpaceHtmlChars = function (t, s, e) {
          if ("html" !== e.contentType) return s;
          var n = t.substring(s).charAt(0);
          if (">" === n || ";" === n) {
            var i;
            for (
              i = ">" === n ? "<" : "&";
              t.substring(s - 1).charAt(0) !== i && !(--s < 0);

            );
            s--;
          }
          return s;
        }),
        t
      );
    })())(); /*#__PURE__*/
  return (function () {
    function t(t, s) {
      e.load(this, s, t), this.begin();
    }
    var s = t.prototype;
    return (
      (s.toggle = function () {
        this.pause.status ? this.start() : this.stop();
      }),
      (s.stop = function () {
        this.typingComplete ||
          this.pause.status ||
          (this.toggleBlinking(!0),
          (this.pause.status = !0),
          this.options.onStop(this.arrayPos, this));
      }),
      (s.start = function () {
        this.typingComplete ||
          (this.pause.status &&
            ((this.pause.status = !1),
            this.pause.typewrite
              ? this.typewrite(this.pause.curString, this.pause.curStrPos)
              : this.backspace(this.pause.curString, this.pause.curStrPos),
            this.options.onStart(this.arrayPos, this)));
      }),
      (s.destroy = function () {
        this.reset(!1), this.options.onDestroy(this);
      }),
      (s.reset = function (t) {
        void 0 === t && (t = !0),
          clearInterval(this.timeout),
          this.replaceText(""),
          this.cursor &&
            this.cursor.parentNode &&
            (this.cursor.parentNode.removeChild(this.cursor),
            (this.cursor = null)),
          (this.strPos = 0),
          (this.arrayPos = 0),
          (this.curLoop = 0),
          t && (this.insertCursor(), this.options.onReset(this), this.begin());
      }),
      (s.begin = function () {
        var t = this;
        this.options.onBegin(this),
          (this.typingComplete = !1),
          this.shuffleStringsIfNeeded(this),
          this.insertCursor(),
          this.bindInputFocusEvents && this.bindFocusEvents(),
          (this.timeout = setTimeout(function () {
            0 === t.strPos
              ? t.typewrite(t.strings[t.sequence[t.arrayPos]], t.strPos)
              : t.backspace(t.strings[t.sequence[t.arrayPos]], t.strPos);
          }, this.startDelay));
      }),
      (s.typewrite = function (t, s) {
        var e = this;
        this.fadeOut &&
          this.el.classList.contains(this.fadeOutClass) &&
          (this.el.classList.remove(this.fadeOutClass),
          this.cursor && this.cursor.classList.remove(this.fadeOutClass));
        var i = this.humanizer(this.typeSpeed),
          r = 1;
        !0 !== this.pause.status
          ? (this.timeout = setTimeout(function () {
              s = n.typeHtmlChars(t, s, e);
              var i = 0,
                o = t.substring(s);
              if ("^" === o.charAt(0) && /^\^\d+/.test(o)) {
                var a = 1;
                (a += (o = /\d+/.exec(o)[0]).length),
                  (i = parseInt(o)),
                  (e.temporaryPause = !0),
                  e.options.onTypingPaused(e.arrayPos, e),
                  (t = t.substring(0, s) + t.substring(s + a)),
                  e.toggleBlinking(!0);
              }
              if ("`" === o.charAt(0)) {
                for (
                  ;
                  "`" !== t.substring(s + r).charAt(0) &&
                  (r++, !(s + r > t.length));

                );
                var u = t.substring(0, s),
                  p = t.substring(u.length + 1, s + r),
                  c = t.substring(s + r + 1);
                (t = u + p + c), r--;
              }
              e.timeout = setTimeout(function () {
                e.toggleBlinking(!1),
                  s >= t.length ? e.doneTyping(t, s) : e.keepTyping(t, s, r),
                  e.temporaryPause &&
                    ((e.temporaryPause = !1),
                    e.options.onTypingResumed(e.arrayPos, e));
              }, i);
            }, i))
          : this.setPauseStatus(t, s, !0);
      }),
      (s.keepTyping = function (t, s, e) {
        0 === s &&
          (this.toggleBlinking(!1),
          this.options.preStringTyped(this.arrayPos, this));
        var n = t.substring(0, (s += e));
        this.replaceText(n), this.typewrite(t, s);
      }),
      (s.doneTyping = function (t, s) {
        var e = this;
        this.options.onStringTyped(this.arrayPos, this),
          this.toggleBlinking(!0),
          (this.arrayPos === this.strings.length - 1 &&
            (this.complete(),
            !1 === this.loop || this.curLoop === this.loopCount)) ||
            (this.timeout = setTimeout(function () {
              e.backspace(t, s);
            }, this.backDelay));
      }),
      (s.backspace = function (t, s) {
        var e = this;
        if (!0 !== this.pause.status) {
          if (this.fadeOut) return this.initFadeOut();
          this.toggleBlinking(!1);
          var i = this.humanizer(this.backSpeed);
          this.timeout = setTimeout(function () {
            s = n.backSpaceHtmlChars(t, s, e);
            var i = t.substring(0, s);
            if ((e.replaceText(i), e.smartBackspace)) {
              var r = e.strings[e.arrayPos + 1];
              e.stopNum = r && i === r.substring(0, s) ? s : 0;
            }
            s > e.stopNum
              ? (s--, e.backspace(t, s))
              : s <= e.stopNum &&
                (e.arrayPos++,
                e.arrayPos === e.strings.length
                  ? ((e.arrayPos = 0),
                    e.options.onLastStringBackspaced(),
                    e.shuffleStringsIfNeeded(),
                    e.begin())
                  : e.typewrite(e.strings[e.sequence[e.arrayPos]], s));
          }, i);
        } else this.setPauseStatus(t, s, !1);
      }),
      (s.complete = function () {
        this.options.onComplete(this),
          this.loop ? this.curLoop++ : (this.typingComplete = !0);
      }),
      (s.setPauseStatus = function (t, s, e) {
        (this.pause.typewrite = e),
          (this.pause.curString = t),
          (this.pause.curStrPos = s);
      }),
      (s.toggleBlinking = function (t) {
        this.cursor &&
          (this.pause.status ||
            (this.cursorBlinking !== t &&
              ((this.cursorBlinking = t),
              t
                ? this.cursor.classList.add("typed-cursor--blink")
                : this.cursor.classList.remove("typed-cursor--blink"))));
      }),
      (s.humanizer = function (t) {
        return Math.round((Math.random() * t) / 2) + t;
      }),
      (s.shuffleStringsIfNeeded = function () {
        this.shuffle &&
          (this.sequence = this.sequence.sort(function () {
            return Math.random() - 0.5;
          }));
      }),
      (s.initFadeOut = function () {
        var t = this;
        return (
          (this.el.className += " " + this.fadeOutClass),
          this.cursor && (this.cursor.className += " " + this.fadeOutClass),
          setTimeout(function () {
            t.arrayPos++,
              t.replaceText(""),
              t.strings.length > t.arrayPos
                ? t.typewrite(t.strings[t.sequence[t.arrayPos]], 0)
                : (t.typewrite(t.strings[0], 0), (t.arrayPos = 0));
          }, this.fadeOutDelay)
        );
      }),
      (s.replaceText = function (t) {
        this.attr
          ? this.el.setAttribute(this.attr, t)
          : this.isInput
          ? (this.el.value = t)
          : "html" === this.contentType
          ? (this.el.innerHTML = t)
          : (this.el.textContent = t);
      }),
      (s.bindFocusEvents = function () {
        var t = this;
        this.isInput &&
          (this.el.addEventListener("focus", function (s) {
            t.stop();
          }),
          this.el.addEventListener("blur", function (s) {
            (t.el.value && 0 !== t.el.value.length) || t.start();
          }));
      }),
      (s.insertCursor = function () {
        this.showCursor &&
          (this.cursor ||
            ((this.cursor = document.createElement("span")),
            (this.cursor.className = "typed-cursor"),
            this.cursor.setAttribute("aria-hidden", !0),
            (this.cursor.innerHTML = this.cursorChar),
            this.el.parentNode &&
              this.el.parentNode.insertBefore(
                this.cursor,
                this.el.nextSibling
              )));
      }),
      t
    );
  })();
});
//# sourceMappingURL=typed.umd.js.map
