﻿(function(c) {
    function g() {
        var b = "<head><title>" + d.popTitle + "</title>";
        c(document).find("link").filter(function() {
            return "stylesheet" == c(this).attr("rel").toLowerCase()
        }).filter(function() {
            var a = c(this).attr("media");
            return void 0 == a ? !1 : "" == a.toLowerCase() || "print" == a.toLowerCase()
        }).each(function() {
            b += '<link type="text/css" rel="stylesheet" href="' + c(this).attr("href") + '" >'
        });
        return b += "</head>"
    }
    function h(b) {
        return '<body><div class="' + c(b).attr("class") + '">' + c(b).html() + "</div></body>"
    }
    function k(b) {
        c("input,select,textarea", b).each(function() {
            var a = c(this).attr("type");
            "radio" == a || "checkbox" == a ? c(this).is(":not(:checked)") ? this.removeAttribute("checked") : this.setAttribute("checked", !0) : "text" == a ? this.setAttribute("value", c(this).val()) : "select-multiple" == a || "select-one" == a ? c(this).find("option").each(function() {
                c(this).is(":not(:selected)") ? this.removeAttribute("selected") : this.setAttribute("selected", !0)
            }) : "textarea" == a && (a = c(this).attr("value"),
            c.browser.mozilla ? this.firstChild ? this.firstChild.textContent = a : this.textContent = a : this.innerHTML = a)
        });
        return b
    }
    function l() {
        var b = d.id, a;
        try {
            a = document.createElement("iframe"),
            document.body.appendChild(a),
            c(a).attr({
                style: "border:0;position:absolute;width:0px;height:0px;left:0px;top:0px;",
                id: b,
                src: ""
            }),
            a.doc = null ,
            a.doc = a.contentDocument ? a.contentDocument : a.contentWindow ? a.contentWindow.document : a.document
        } catch (e) {
            throw e + ". iframes may not be supported in this browser.";
        }
        if (null == a.doc)
            throw "Cannot find document.";
        return a
    }
    function m() {
        var b;
        b = "location=no,statusbar=no,directories=no,menubar=no,titlebar=no,toolbar=no,dependent=no,width=595px,height=842px,top=0,left=0,toolbar=no,scrollbars=no,personalbar=no" + (",resizable=yes,screenX=" + d.popX + ",screenY=" + d.popY + "");
        b = window.open("", "_blank", b);
        b.doc = b.document;
        return b
    }
    var f = 0
      , n = {
        mode: "iframe",
        popHt: 500,
        popWd: 400,
        popX: 200,
        popY: 200,
        popTitle: "",
        popClose: !1
    }
      , d = {};
    c.fn.printArea = function(b) {
        c.extend(d, n, b);
        f++;
        c("[id^=printArea_]").remove();
        b = k(c(this));
        d.id = "printArea_" + f;
        var a, e;
        switch (d.mode) {
        case "iframe":
            e = new l;
            a = e.doc;
            e = e.contentWindow || e;
            break;
        case "popup":
            e = new m,
            a = e.doc
        }
        a.open();
        a.write(("iframe" != d.mode && d.strict ? '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01' + (0 == d.strict ? " Trasitional" : "") + '//EN" "http://www.w3.org/TR/html4/' + (0 == d.strict ? "loose" : "strict") + '.dtd">' : "") + "<html>" + g() + h(b) + "</html>");
        a.close();
        e.focus();
        e.print();
        "popup" == d.mode && d.popClose && e.close()
    }
})(jQuery);
