var screenWid = $(window).width();
changwid();
$(window).resize(function() {
    screenWid = $(window).width();
    changwid();
});

function changwid() {
    $(".oneMenu").width(screenWid);
    $("header").width(screenWid);
    $(".content").width(screenWid);
    $("footer").width(screenWid);
}
var changImgindex = 0;
var timeImg = window.setInterval(funchangImg, 5000); // 注意函数名没有引号和括弧！ 
$(document).ready(function() {

});
//焦点图自动切换
function funchangImg() {
    changImgindex++;
    changImg(changImgindex);
}
//焦点图左右切换按钮
function changleftRight(left) {
    window.clearTimeout(timeImg); //去掉定时器 
    if (left == 0) {
        changImgindex++;
        if (changImgindex > 2) { changImgindex = 0; }
        changImg(changImgindex);
    } else {
        changImgindex--;
        if (changImgindex < 0) { changImgindex = 2; }
        changImg(changImgindex);
    }
    timeImg = window.setInterval(funchangImg, 5000); // 注意函数名没有引号和括弧！
}
//焦点图下面的小点切换按钮
function changImgDian(index) {
    window.clearTimeout(timeImg); //去掉定时器 
    changImg(index);
    timeImg = window.setInterval(funchangImg, 5000); // 注意函数名没有引号和括弧！
}
//真正的焦点图 切换
function changImg(index) {
    changImgindex = index;
    var arrli = $('#slippry').find("li");
    var dianli = $(".sy-pager").find("li");
    for (var i = 0; i < arrli.length; i++) {
        if (index == i) {
            $(arrli[i]).attr("class", "sy-slide fade useCSS transition sy-active");
            $(arrli[i]).fadeIn("slow");
            $(".sy-caption").html($(arrli[i]).find("img")[0].alt);
            $(dianli[i]).attr("class", "sy-active");
            continue;
        }
        $(arrli[i]).attr("class", "sy-slide fade useCSS transition");
        $(arrli[i]).fadeOut("slow");
        $(dianli[i]).attr("class", "");
    }

}