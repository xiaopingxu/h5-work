/**
 * Created by Administrator on 2016/11/21 0021.
 */
var numresult;
var str;
var m;


function onclicknum(nums) {
    str = document.getElementById("res");
    str.value = str.value + nums;
    m =str.value;
    var parr1=/(^0+)([0-9])/;
    if(parr1.test(m))
    {   //�趨�滻��䣬����������ʽ��һ������Ϊ0��ͷ������ȥ��
        str.value= m.match(parr1)[2];
       m=m.replace(parr1,str.value);
    }
}
function onclickclear() {
    str = document.getElementById("res");
    str.value = "0";
}//���
function onclickresult() {
    str = document.getElementById("res");
    numresult = eval(str.value);
    str.value = numresult;
}//�Ⱥ�
function onclickremove(){
    str = document.getElementById("res");
    var num=str.value;
   var newstr =num.substring(0,num.length-1);
    str.value = newstr;
}//�˸�
function onclicksqrt() {
    str = document.getElementById("res");
    m = Math.sqrt(str.value);
    str.value = m;
}//����
