define(function (require,exports,module) {

    var $ = require('jquery');
    var Swiper = require('swiper');
    var Hammer = require('hammer');

    //轮播图
    var indexSwiper = new Swiper('.public-banner',{
        mode:'horizontal',
        loop: true,
        pagination: '.pagination',
        grabCursor: true,
        paginationClickable: true,
        autoplay: 5000,
        slideElement: 'li'
    });
    var magazineSlide=new Swiper('.magazine-slide',{
        wrapperClass:"magazine-wrapper", //一个页面存在多个轮播图需要改变命名空间
        paginationClickable: true,
        slidesPerView: 'auto',
        slideElement: 'li'
    });
    var zineSlide=new Swiper('.zine-slide',{
        wrapperClass:"zine-wrapper",
        paginationClickable: true,
        slidesPerView: 'auto',
        slideElement: 'li'
    });
    var specialSlide=new Swiper('.special-slide',{
        wrapperClass:"special-wrapper",
        paginationClickable: true,
        slidesPerView: 'auto',
        slideElement: 'li'
    });
    var ruleslSlide=new Swiper('.rules-slide',{
        wrapperClass:"rules-wrapper",
        paginationClickable: true,
        slidesPerView: 'auto',
        slideElement: 'li'
    });
    var submenuSlide=new Swiper('.submenu',{
        wrapperClass:"submenu-wrapper",
        paginationClickable: true,
        slidesPerView: 'auto',
        slideElement: 'li'
    });

    //小电视
    var videoSwiper = new Swiper('.video',{
        paginationClickable: true,
        slidesPerView: 'auto',
        slideElement: 'li'
    });

    //侧边栏
    var isExpand = true;
    var wrap = $('#mobile');
    var oNav = $('.nav-bar');
    var side = $('#side-bar');
    var nav = new Hammer(document.getElementById('mobile-wrap'));
    nav.on('tap',function (event) {
        if ($(event.target).is(oNav)) {
            side.css('visibility','visible');
            wrap.addClass('menuOpen').css({
                'height':'580px',
                'overflow-y':'hidden',
                'overflow-x':'hidden'
            });
            isExpand = false;

        }else {
            if (!isExpand) {
                wrap.removeClass('menuOpen').css({
                    'height':'auto',
                    'overflow-y':'auto',
                    'overflow-x':'hidden'
                });
                setTimeout(function () {
                    side.css('visibility','hidden');
                },500);
            }
        }
    });
});