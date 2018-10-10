
window.onload=function()
{
    /*无缝滚动*/
    var uls=document.getElementById("uls");
    var lis=uls.getElementsByTagName("li");
    var als=document.getElementsByClassName("als");
    /*将ul里的内容复制一份*/
    uls.innerHTML+=uls.innerHTML;
    /*ul的宽度等于li的个数宽的乘积*/
    uls.style.width=lis[0].offsetWidth*lis.length+'px';
    var times='';
    /*向左滚动时的滚动速度*/
    var sudu = -3;
    /*页面加载时直接执行无缝滚动定时器*/
    times = setInterval(function()
    {
        /*页面加载时ul的left值减3 向左边一直移动*/
        uls.style.left=uls.offsetLeft+sudu+'px';
        /*判断ul的left值是否小于本身一半的宽度*/
        if(uls.offsetLeft<-uls.offsetWidth/2)
        {
            /*如果是 则ul的left值等于0*/
            uls.style.left=0+'px';

        }
        else if(uls.offsetLeft>0)
        {
            uls.style.left=-uls.offsetWidth/2+'px';

        }
    },30);
    /*指向时清楚定时器 ， 离开时执行定时器*/
    for(var i=2;i<als.length;i++){
        als[i].onmouseover=function(){
            clearInterval(times);
        };
        als[i].onmouseout=function()
        {
            times = setInterval(function()
            {
                uls.style.left=uls.offsetLeft+sudu+'px';
                if(uls.offsetLeft<-uls.offsetWidth/2)
                {
                    uls.style.left=0+'px';

                }
                else if(uls.offsetLeft>0)
                {
                    uls.style.left=-uls.offsetWidth/2+'px';
                    /*alert(uls.offsetWidth/2);*/
                }
            },30);
        }
    }

    /*置顶按钮*/
    var oBtn=document.getElementById("btn1");
    var bSys=true;
    var timer2=null;
    //如何检测用户拖动了滚动条
    window.onscroll=function()
    {
        if(!bSys)
        {
            /*没有默认清除定时器*/
            clearInterval(timer2);
        }
        /*如果拖动了滚动条则显示指定按钮*/
        bSys=false;
        /*如果拖动了滚动条就显示置顶按钮*/
        oBtn.style.display='block';
        /*显示导航条背景颜色*/
        nav.style.backgroundColor='rgba(62,62,62,0.4)';

    };
    /*当按钮点击时置顶*/
    oBtn.onclick=function()
    {
        /*设置定时器*/
        timer2=setInterval(function()
        {
            /*添加按钮距离顶部位置*/
            var scrollTops=document.body.scrollTop||document.documentElement.scrollTop;
            /*添加置顶时的动画速度*/
            var sudu=Math.floor(-scrollTops/8);
            /*判断顶部距离*/
            if(scrollTops==0)
            {
                /*点击置顶按钮时 判断距离顶部的位置是否是0 如果是清楚定时器*/
                clearInterval(timer2);
                oBtn.style.display='none';
                nav.style.backgroundColor='rgba(0,0,0,0)';

            }
            /*如果不是则 返回顶部 运用定时器的做出动画效果*/
            bSys=true;
            document.body.scrollTop=document.documentElement.scrollTop=scrollTops+sudu;

        },30);
    };

    /*设置导航条交互效果*/
    var nav = document.getElementById('nav');
};
