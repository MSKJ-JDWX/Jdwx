/**
* 卫宁健康--CTMS交互事件
* @Author jinxl
* @Data 2016-10-08
*/

//消息切换
$("#msg-tab li").click(function () {
    $(this).addClass("active").siblings("li").removeClass("active");
    $("." + $(this).data("key") + "-msg").removeClass("hide").siblings("div").addClass("hide");
});

//显示遮罩
$(".infodel").click(function () {
    $("[data-tip]").fadeIn();
});
//关闭遮罩
$(".tip-btn>a.cancel").click(function () {
    $("[data-tip]").fadeOut();
});
$(document).on('click', 'a[href="#"]', function (e) {
    e.preventDefault();
});
//情况输入框

$(document).on("click", "i.clearAll", function () {
    $(this).hide().prev("input.clearAll").val("");
});
$(document).on("focus", "input.clearAll", function () {
    if ($("input.clearAll").val() != "") {
        $("i.clearAll").show();
    }
});


/*
 *研究阶段详细信息
 * */
$(".pha-radio>label").click(function () {
    var _this = $(this), _phaTit = _this.text(), _index = _this.index(), _infoEditor = $("#infoeditor");
    $("h4.modal-title", _infoEditor).text(_phaTit);//设置弹窗标题
    $(_this.data("index")).removeClass("hide").siblings("table").addClass("hide");//标签页下面table切换
    $("div.modal-body>div:eq(" + _index + ")", _infoEditor).removeClass("hide").siblings(".row").addClass("hide");//设置弹窗主体
});

/*
 *生产商档案
 * */
//弹窗到达楼层
$(".scdj li").click(function () {
    var _indexArr = [0, 580, 760], _top, _this = $(this);
    _top = _indexArr[_this.index()];
    $("#scdScroll").animate({
        scrollTop: _top + "px"
    }, 800);
    $(".scdj li").removeClass("active");
    _this.addClass("active");
});
$("#scdScroll").scroll(function () {
    var _position = $(this).scrollTop();
    $(".scdj li").removeClass("active");
    if (_position < 500) {
        $(".scdj .left li").eq(0).addClass("active");
    } else if (_position >= 500 && _position < 760) {
        $(".scdj .left li").eq(1).addClass("active");
    } else if (_position > 760) {
        $(".scdj .left li").eq(2).addClass("active");
    }
})


/*消息提示操作*/
function setMsgTime(ele, msg, time, flag) {
    $(ele).find("span").html(msg);
    if (flag) {
        return false;
    }
    setTimeout(function () {
        $(ele).slideUp("slow");
    }, time);
};
$("i.close").click(function () {
    $(this).parent().slideUp("fast");
});