var screenWid = $(window).width();
var imgwid=screenWid/5;
$(".contentone").css({"padding-left":imgwid/10+"px"});
$(".contentone .grid_3").css({"width":imgwid+"px","margin-left":imgwid/10+"px","margin-right":imgwid/10+"px"});

changwid();
$(window).resize(function() {
    screenWid = $(window).width();
    changwid();
});
function changwid() {
    $(".oneMenu").width(screenWid);
    $("header").width(screenWid);
    $(".content").width(screenWid);
    changebottomimg();//$('#carousel').find("li").css({"width":(screenWid-120)*0.12+"px"});
    $("footer").width(screenWid);
    var imgwid=screenWid/5;
    $(".contentone").css({"padding-left":imgwid/10+"px"});
    $(".contentone .grid_3").css({"width":imgwid+"px","margin-left":imgwid/10+"px","margin-right":imgwid/10+"px"});
    
}
var changImgindex = 0;
var timeImg = window.setInterval(funchangImg, 5000); // 注意函数名没有引号和括弧！ 
//焦点图自动切换
function funchangImg() {
    changImgindex++;
    if (changImgindex > 2) { changImgindex = 0; }
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

//回到顶部
function goToByScroll(id) {
            $('html,body').animate({
                scrollTop: $("#" + id).offset().top
            }, 'slow');
        }
//设置底部 滑动图片的大小 上下距离
function changebottomimg(){
    var wid=(screenWid-120)*0.121;
    var hig=(114-wid*0.82)/2;
    $('#carousel').find("li").css({"width":wid+"px","padding-top":hig+"px"});
}
changebottomimg();
//底部 左右图片划动
$(document).ready(function() {
    var imgliArr = $('#carousel').find("li");
    var imgcount=imgliArr.length/8;
    if(imgliArr.length%8!=0) imgcount++;//取模 求余数 
    var nowImg=1;
    $(".elastislide-next").click(function(){
        nowImg++;if(nowImg>=imgcount){nowImg=imgcount-1;}
        var offset=-(screenWid-120)*nowImg;
        $("#carousel").stop().animate({left:offset},"slow",function(){});
    });
    $(".elastislide-prev").click(function(){
        nowImg--;if(nowImg<0){nowImg=0;}
        var offset=-(screenWid-120)*nowImg-20;
        $("#carousel").stop().animate({left:offset},"slow",function(){});
    });
});