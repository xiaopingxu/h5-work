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


//��ɫ����
function changeOrange(){

    navgt.style.backgroundColor = "#EE7621";//banner������ɫ
    navgt.style.border = "1px solid #EE7621";//banner�߿�
    rightTop.style.border="1px solid #EE7621";//��ҳ�Ұ벿�ϲ��߿�
    shouye.style.backgroundColor = "#EE7600";//banner�����׸�
    rcmd.style.border="1px solid #EE7621";//Ȩ���Ƽ����߿�
    qwtj.style.color="#EE7600";//����������վ��ɫ
    cpkj.style.color="#EE7600";//����������վ��ɫ
    yhd.style.color="#EE7600";//����������վ��ɫ
    hdj.style.color="#EE7600";//����������վ��ɫ
    atb.style.color="#EE7600";//����������վ��ɫ
    shj.style.color="#EE7600";//����������վ��ɫ
    gw.style.color="#EE7600";//����������վ��ɫ
    setCookie("skin","orange");

}
//��ɫ����
function changeBlue(){

    navgt.style.backgroundColor = "#1C86EE";//banner������ɫ
    navgt.style.border = "1px solid #1C86EE";//banner�߿�
    rightTop.style.border="1px solid #1C86EE";//��ҳ�Ұ벿�ϲ��߿�
    shouye.style.backgroundColor = "#1874CD";//banner�����׸�
    rcmd.style.border="1px solid #1C86EE";//Ȩ���Ƽ����߿�
    qwtj.style.color="#1874CD";//����������վ��ɫ
    cpkj.style.color="#1874CD";//����������վ��ɫ
    yhd.style.color="#1874CD";//����������վ��ɫ
    hdj.style.color="#1874CD";//����������վ��ɫ
    atb.style.color="#1874CD";//����������վ��ɫ
    shj.style.color="#1874CD";//����������վ��ɫ
    gw.style.color="#1874CD";//����������վ��ɫ
    setCookie("skin","blue");

}
//��ɫ����
function changeRed(){

    navgt.style.backgroundColor = "#EE2C2C";//banner������ɫ
    navgt.style.border = "1px solid #EE2C2C";//banner�߿�
    rightTop.style.border="1px solid #EE2C2C";//��ҳ�Ұ벿�ϲ��߿�
    shouye.style.backgroundColor = "#EE0000";//banner�����׸�
    rcmd.style.border="1px solid #EE2C2C";//Ȩ���Ƽ����߿�
    qwtj.style.color="#EE0000";//Ȩ���Ƽ�������ɫ
    cpkj.style.color="#EE0000";//����������վ��ɫ
    yhd.style.color="#EE0000";//����������վ��ɫ
    hdj.style.color="#EE0000";//����������վ��ɫ
    atb.style.color="#EE0000";//����������վ��ɫ
    shj.style.color="#EE0000";//����������վ��ɫ
    gw.style.color="#EE0000";//����������վ��ɫ
    setCookie("skin","red");
}
//��ɫ����
function changeYellow(){

    navgt.style.backgroundColor = "#EEEE00";//banner������ɫ
    navgt.style.border = "1px solid #EEEE00";//banner�߿�
    rightTop.style.border="1px solid #EEEE00";//��ҳ�Ұ벿�ϲ��߿�
    shouye.style.backgroundColor = "#FFD700";//banner�����׸�
    rcmd.style.border="1px solid #EEEE00";//Ȩ���Ƽ����߿�
    qwtj.style.color="#FFD700";//����������վ��ɫ
    cpkj.style.color="#FFD700";//����������վ��ɫ
    yhd.style.color="#FFD700";//����������վ��ɫ
    hdj.style.color="#FFD700";//����������վ��ɫ
    atb.style.color="#FFD700";//����������վ��ɫ
    shj.style.color="#FFD700";//����������վ��ɫ
    gw.style.color="#FFD700";//����������վ��ɫ

    setCookie("skin","yellow");

}
//��ɫ����
function changeGreen(){

    navgt.style.backgroundColor = "#099c6a ";//banner������ɫ
    navgt.style.border = "1px solid #099c6a ";//banner�߿�
    rightTop.style.border="1px solid #099c6a ";//��ҳ�Ұ벿�ϲ��߿�
    shouye.style.backgroundColor = "#2E8B57";//banner�����׸�
    rcmd.style.border="1px solid #099c6a ";//Ȩ���Ƽ����߿�
    qwtj.style.color="#2E8B57";//����������վ��ɫ
    cpkj.style.color="#2E8B57";//����������վ��ɫ
    yhd.style.color="#2E8B57";//����������վ��ɫ
    hdj.style.color="#2E8B57";//����������վ��ɫ
    atb.style.color="#2E8B57";//����������վ��ɫ
    shj.style.color="#2E8B57";//����������վ��ɫ
    gw.style.color="#2E8B57";//����������վ��ɫ

    setCookie("skin","green");

}

//����cookie
function setCookie (name, value){
    //��������Ϊname,ֵΪvalue��Cookie
    var days=30;
    var date=new Date();
    date.setTime(date.getTime()+days*24*60*60*1000); //
    document.cookie= name+"="+value+";"; expires=""+date.toGMTString(); //��date��ֵ��expires
    console.log(expires);
}
// /��ȡcookie
function getCookie(cname){
        var skinval=document.cookie;
    console.log("1-"+skinval);
        var cst=skinval.indexOf(cname + "=");//�����ĳ���
    console.log("2-"+cst);
        if (cst!=-1) {
            cst=cst + cname.length+1;
            //��cst��λ�ÿ�ʼ��ѯ';'
            console.log("3-"+cst);
            var cend=skinval.indexOf(";",cst);
            console.log("4-"+cend);
            if (cend==-1) {
                cend = skinval.length;
                console.log("5-"+cend);
            }
            //��ȡcookie�ַ���
            var value=skinval.substring(cst,cend);
            console.log("6-"+value);
        }
        console.log(value)
        return value;
}

// ���ú���
function onLoad(){
    //��ȡ��ǰcookie
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