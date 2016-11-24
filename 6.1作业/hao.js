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
    setCookie("skin","orange");

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
    setCookie("skin","blue");

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
    setCookie("skin","red");
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

    setCookie("skin","yellow");

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

    setCookie("skin","green");

}

//设置cookie
function setCookie (name, value){
    //设置名称为name,值为value的Cookie
    var days=30;
    var date=new Date();
    date.setTime(date.getTime()+days*24*60*60*1000); //
    document.cookie= name+"="+value+";"; expires=""+date.toGMTString(); //将date赋值给expires
    console.log(expires);
}
// /获取cookie
function getCookie(cname){
        var skinval=document.cookie;
    console.log("1-"+skinval);
        var cst=skinval.indexOf(cname + "=");//索引的长度
    console.log("2-"+cst);
        if (cst!=-1) {
            cst=cst + cname.length+1;
            //从cst的位置开始查询';'
            console.log("3-"+cst);
            var cend=skinval.indexOf(";",cst);
            console.log("4-"+cend);
            if (cend==-1) {
                cend = skinval.length;
                console.log("5-"+cend);
            }
            //截取cookie字符串
            var value=skinval.substring(cst,cend);
            console.log("6-"+value);
        }
        console.log(value)
        return value;
}

// 调用函数
function onLoad(){
    //获取当前cookie
    var skin = getCookie("skin");
    if(skin==""){
        changeRed()
    }else if(skin=="green"){
        changeGreen();
    }else if(skin=="yellow"){
        changeYellow();
    }else if(skin=="red"){
        changeRed();
    }else if(skin=="blue"){
       // alert("lan");
        changeBlue();
    }else if(skin=="orange"){
        changeOrange();
    }
}