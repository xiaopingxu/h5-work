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
    if(parr1.test(m)) {   //�趨�滻��䣬����������ʽ��һ������Ϊ0��ͷ������ȥ��
       str.value= m.match(parr1)[2];
       m=m.replace(parr1,str.value);
    }

}
function onclickclear() {
    str.value = "0";
}//���
function onclickresult() {
    numresult = eval(str.value);
    numresult=numresult.toFixed(5);//������λС��

    //��ȡ����������֮����ַ�
    var numX=str.value.substring(str.value.indexOf("/")+1,str.value.length);
        numX=numX*1;
    if(numX==0){
        alert("��������Ϊ0,����������...");
        onclickclear();
        return ;
    }
        str.value =parseFloat(numresult) ;
}//�Ⱥ�
function onclickremove(){
    var num=str.value;
        m =num.substring(0,num.length-1);
    str.value = m;
}//�˸�
function onclicksqrt() {
    m = Math.sqrt(str.value);
    m=m.toFixed(5);//������λС��
    str.value=parseFloat(m);
}//����
function sineAngle(){
    m=Math.sin((str.value/180)*Math.PI);
    m=m.toFixed(5);//������λС��
    str.value=parseFloat(m);
}//���Ƕȼ���sine
function cosineAngle(){
    m=Math.cos((str.value/180)*Math.PI);
    m=m.toFixed(5);//������λС��
    str.value=parseFloat(m);
}//���Ƕȼ���cosine
function sineRadian(){
    m=Math.sin(str.value);
    m=m.toFixed(5);//������λС��
    str.value=parseFloat(m);
}//�����ȼ���sine
function cosineRadian(){
    m=Math.cos(str.value);
    m=m.toFixed(5);//������λС��
    str.value=parseFloat(m);
}//�����ȼ���cosine