{
    let mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true,

        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        },

        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    })
}
//首页 search效果
{
    $(".totop").click(function(){
        $("html,body").animate({scrollTop:0})
    })
    $(window).scroll(function(){
        let st=$(window).scrollTop();
        if(st>0.01){
            $(".search_bottom").show();
        }else{
            $(".search_bottom").hide();
        }
        if(st>20){
            $(".totop").show();
        }else{
            $(".totop").hide();
        }
    })
}
//首页
// { //滚动条
//     let iscroll = new IScroll(".c5", {
//         mouseWheel: true,      //设置滚轮滚动
//         scrollbars: false,    //如果有滚动条，就需要加定位
//         shrinkScrollbars: "scale",
//         fadeScrollbars: true
//     })
// }
//type_list页面
// {  let iscroll1=new IScroll(".content_bottom_nav",{
//         mouseWheel: true,      //设置滚轮滚动
//         scrollbars: true ,    //如果有滚动条，就需要加定位
//         shrinkScrollbars:"scale",
//         fadeScrollbars:true,
//         hScrollbar:false
//     })
//
// }
// type_list 页面左侧nav点击效果
{
    $(".c_b_nav_tip").click(function(){
        let index=$(this).index(".c_b_nav_tip");
        $(this).addClass("active").siblings().removeClass("active");
        $(".nav_content").eq(index).addClass("active").siblings().removeClass("active");
    })
}
//goods_detail页面 顶部效果
{
    $(window).scroll(function() {
        let st = $(window).scrollTop();
        if (st > 0.01) {
            $(".g_top1").show();
            $(".g_top").hide();
        } else {
            $(".g_top1").hide();
            $(".g_top").show();
        }
    }  )
}




