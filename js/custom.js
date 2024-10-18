//메인비주얼 슬라이드
$(function () {
    $('.main_visual_slide').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        pauseOnHover: false,
        useTransform: false
    });

    //슬라이드로 탭구현.
    $('.main_visual_slide').on('afterChange', function (e, s, c) {
        $('.main_visual .lnk li').removeClass('on');
        $('.main_visual .lnk li').eq(c).addClass('on')
    });

    //슬라이드 arrow
    $('.main_visual .arrows .prev').on('click', function () {
        $('.main_visual_slide').slick('slickPrev')
    });

    $('.main_visual .arrows .next').on('click', function () {
        $('.main_visual_slide').slick('slickNext')
    });
});





$('#header .menu').on('click', function () {
    $(this).toggleClass('on');
    $('#header .cover').toggleClass('on');
});


$('#header .cover a').on('click', function () {
    $('#header .cover').removeClass('on');
    $('#header .menu').removeClass('on');
});


$('#header .cover').on('wheel', function (e) {
    e.stopPropagation();
});
