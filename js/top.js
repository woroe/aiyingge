var tophtml="<div class= 'menutop'>";
    tophtml+="<img src='./imgs/logo.gif' alt='爱婴阁母婴护理有限公司'>";
    tophtml+="<ul>";
    tophtml+="<li><a href= './index.htm'>首页</a></li>";
    tophtml+="<li><a href= './about.htm'>关于我们</a></li>";
    tophtml+="<li><a href= './services.htm'>服务内容</a></li>";
    tophtml+="<li><a href= './ourprices.htm'>优秀员工</a></li>";
    tophtml+="<li><a href= './contacts.htm'>联系我们</a></li>";
    tophtml+="</ul>";
    tophtml+="</div>";
    tophtml+="<div class= 'clear'></div>";
document.write(tophtml);
function changetopmenu(index){
    var arrli = $('.menutop').find("a");
    $(arrli[index]).css({"color":"#8fc4cb"});
}