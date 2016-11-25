/**
 * Created by Administrator on 2016/11/21 0021.
 */
var numresult;
var str = document.getElementById("res");
var m;


function onclicknum(nums) {
    str.value = str.value + nums;
    m =str.value;
    var parr1=/(^0+)([0-9])/;
    if(parr1.test(m)) {   //设定替换语句，将整个运算式第一个数字为0开头的数字去除
       str.value= m.match(parr1)[2];
       m=m.replace(parr1,str.value);
    }

}
function onclickclear() {
    str.value = "0";
}//清除
function onclickresult() {
    numresult = eval(str.value);
    numresult=numresult.toFixed(5);//保留五位小数

    //截取除号至等于之间的字符
    var numX=str.value.substring(str.value.indexOf("/")+1,str.value.length);
        numX=numX*1;
    if(numX==0){
        alert("除数不能为0,请重新输入...");
        onclickclear();
        return ;
    }
        str.value =parseFloat(numresult) ;
}//等号
function onclickremove(){
    var num=str.value;
        m =num.substring(0,num.length-1);
    str.value = m;
}//退格
function onclicksqrt() {
    m = Math.sqrt(str.value);
    m=m.toFixed(5);//保留五位小数
    str.value=parseFloat(m);
}//根号
function sineAngle(){
    m=Math.sin((str.value/180)*Math.PI);
    m=m.toFixed(5);//保留五位小数
    str.value=parseFloat(m);
}//按角度计算sine
function cosineAngle(){
    m=Math.cos((str.value/180)*Math.PI);
    m=m.toFixed(5);//保留五位小数
    str.value=parseFloat(m);
}//按角度计算cosine
function sineRadian(){
    m=Math.sin(str.value);
    m=m.toFixed(5);//保留五位小数
    str.value=parseFloat(m);
}//按弧度计算sine
function cosineRadian(){
    m=Math.cos(str.value);
    m=m.toFixed(5);//保留五位小数
    str.value=parseFloat(m);
}//按弧度计算cosine