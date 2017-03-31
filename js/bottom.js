var bottomHtml="<footer><div class='footerone'><div class='footertwo'>";
    bottomHtml+="<a href= 'http://www.aiyingge.cn/#' onclick= 'goToByScroll(\"top\"); return false; ' class= 'top'></a><br>";
    bottomHtml+="<a href= 'http://www.aiyingge.cn/# ' class= 'f_logo '><img src= './imgs/f_logo.gif ' alt= 'logo'></a>";
    bottomHtml+="<div class= 'copy '>Copyright © 2017.Company name All rights reserved.<a target= '_blank ' href= 'http://www.aiyingge.com/ '>爱婴阁母婴护理有限公司</a></div>";
    bottomHtml+="</div></div><div class= 'clear '></div></footer>";
document.write(bottomHtml);
//回到顶部
function goToByScroll(id) {
            $('html,body').animate({
                scrollTop: $("#" + id).offset().top
            }, 'slow');
        }