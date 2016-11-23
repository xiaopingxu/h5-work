/**
 * Created by Administrator on 2016/11/16 0016.
 */
    var navgt = document.getElementById("navgt");
    var rightTop = document.getElementById("rightTop");
    var shouye = document.getElementById("shouye");
    var rcmd=document.getElementById("rcmd");
    var qwtj=document.getElementById("qwtj");
    var cpkj=document.getElementById("cpkj");
    var yhd=document.getElementById("yhd");
    var hdj=document.getElementById("hdj");
    var atb=document.getElementById("atb");
    var gw=document.getElementById("gw");
    var shj=document.getElementById("shj");
//橘色主题
function changeOrange(){

    navgt.style.backgroundColor = "#EE7621";//banner背景颜色
    navgt.style.border = "1px solid #EE7621";//banner边框
    rightTop.style.border="1px solid #EE7621";//主页右半部上部边框
    shouye.style.backgroundColor = "#EE7600";//banner导航首个
    rcmd.style.border="1px solid #EE7621";//权威推荐栏边框
    qwtj.style.color="#EE7600";//个别热门网站颜色
    cpkj.style.color="#EE7600";//个别热门网站颜色
    yhd.style.color="#EE7600";//个别热门网站颜色
    hdj.style.color="#EE7600";//个别热门网站颜色
    atb.style.color="#EE7600";//个别热门网站颜色
    shj.style.color="#EE7600";//个别热门网站颜色
    gw.style.color="#EE7600";//个别热门网站颜色
    setCookie("skin","orange")

}
//蓝色主题
function changeBlue(){

    navgt.style.backgroundColor = "#1C86EE";//banner背景颜色
    navgt.style.border = "1px solid #1C86EE";//banner边框
    rightTop.style.border="1px solid #1C86EE";//主页右半部上部边框
    shouye.style.backgroundColor = "#1874CD";//banner导航首个
    rcmd.style.border="1px solid #1C86EE";//权威推荐栏边框
    qwtj.style.color="#1874CD";//个别热门网站颜色
    cpkj.style.color="#1874CD";//个别热门网站颜色
    yhd.style.color="#1874CD";//个别热门网站颜色
    hdj.style.color="#1874CD";//个别热门网站颜色
    atb.style.color="#1874CD";//个别热门网站颜色
    shj.style.color="#1874CD";//个别热门网站颜色
    gw.style.color="#1874CD";//个别热门网站颜色
    setCookie("skin","blue")

}
//红色主题
function changeRed(){

    navgt.style.backgroundColor = "#EE2C2C";//banner背景颜色
    navgt.style.border = "1px solid #EE2C2C";//banner边框
    rightTop.style.border="1px solid #EE2C2C";//主页右半部上部边框
    shouye.style.backgroundColor = "#EE0000";//banner导航首个
    rcmd.style.border="1px solid #EE2C2C";//权威推荐栏边框
    qwtj.style.color="#EE0000";//权威推荐字体颜色
    cpkj.style.color="#EE0000";//个别热门网站颜色
    yhd.style.color="#EE0000";//个别热门网站颜色
    hdj.style.color="#EE0000";//个别热门网站颜色
    atb.style.color="#EE0000";//个别热门网站颜色
    shj.style.color="#EE0000";//个别热门网站颜色
    gw.style.color="#EE0000";//个别热门网站颜色
    setCookie("skin","red")
}
//黄色主题
function changeYellow(){

    navgt.style.backgroundColor = "#EEEE00";//banner背景颜色
    navgt.style.border = "1px solid #EEEE00";//banner边框
    rightTop.style.border="1px solid #EEEE00";//主页右半部上部边框
    shouye.style.backgroundColor = "#FFD700";//banner导航首个
    rcmd.style.border="1px solid #EEEE00";//权威推荐栏边框
    qwtj.style.color="#FFD700";//个别热门网站颜色
    cpkj.style.color="#FFD700";//个别热门网站颜色
    yhd.style.color="#FFD700";//个别热门网站颜色
    hdj.style.color="#FFD700";//个别热门网站颜色
    atb.style.color="#FFD700";//个别热门网站颜色
    shj.style.color="#FFD700";//个别热门网站颜色
    gw.style.color="#FFD700";//个别热门网站颜色

    setCookie("skin","yellow")

}
//绿色主题
function changeGreen(){

    navgt.style.backgroundColor = "#099c6a ";//banner背景颜色
    navgt.style.border = "1px solid #099c6a ";//banner边框
    rightTop.style.border="1px solid #099c6a ";//主页右半部上部边框
    shouye.style.backgroundColor = "#2E8B57";//banner导航首个
    rcmd.style.border="1px solid #099c6a ";//权威推荐栏边框
    qwtj.style.color="#2E8B57";//个别热门网站颜色
    cpkj.style.color="#2E8B57";//个别热门网站颜色
    yhd.style.color="#2E8B57";//个别热门网站颜色
    hdj.style.color="#2E8B57";//个别热门网站颜色
    atb.style.color="#2E8B57";//个别热门网站颜色
    shj.style.color="#2E8B57";//个别热门网站颜色
    gw.style.color="#2E8B57";//个别热门网站颜色

    setCookie("skin","green")

}

//设置cookie
function setCookie (name, value){
    //设置名称为name,值为value的Cookie
   //document.cookie = name+"="+value+";";
   // var expdate = new Date();   //初始化时间
   // expdate.setTime(expdate.getTime() + 10 * 1000);   //时间
    //document.cookie = name+"="+value+";expires="+expdate.toGMTString()+";";
    document.cookie = name+"="+value+";";
}


//获取cookie
function getCookie(name){

    if (document.cookie.length>0){
       var c_start=document.cookie.indexOf(name + "=");
        if (c_start!=-1)
        {
            c_start=c_start + name.length+1;
            //从c_start的位置开始查询';'
          var  c_end=document.cookie.indexOf(";",c_start);
            if (c_end==-1) {
                c_end = document.cookie.length;
            }
            //解码
            return unescape(document.cookie.substring(c_start,c_end));


        }
    }
    return "";
}


function onLoad(){
    //获取当前cookie
    var skin = getCookie("skin");
    if(skin=="green"){
        changeGreen();
    }else if(skin=="yellow"){
        changeYellow();
    }else if(skin=="red"){
        changeRed();
    }else if(skin=="blue"){
        changeBlue();
    }else if(skin=="orange"){
        changeOrange();
    }
}