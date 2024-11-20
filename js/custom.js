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

    //play pause, go
    let t = true;
    $('.main_product .player .control').on('click', function () {
        $(this).toggleClass('on');

        if (t) {
            $('.main_product .player video').trigger('pause')
        } else {
            $('.main_product .player video').trigger('play')
        }

        t = !t;
    })
});

//masterpiece 슬라이드
$(function () {
    $('.masterpiece_slide .inner').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        pauseOnHover: false,
        useTransform: false,
    });

    //슬라이드로 탭구현.
    $('.masterpiece_slide .inner').on('afterChange', function (e, s, c) {
        $('.itm .lnk li').removeClass('on');
        $('.itm .lnk li').eq(c).addClass('on')
    });

});



// $('#header .menu').on('click', function () {
//     $(this).toggleClass('on');
//     $('#header .cover').toggleClass('on');
// });


// $('#header .cover a').on('click', function () {
//     $('#header .cover').removeClass('on');
//     $('#header .menu').removeClass('on');
// });


// $('#header .cover').on('wheel', function (e) {
//     e.stopPropagation();
// });

//up_window 올라올수록 visual화면 어두워지게
$(function () {
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();

        let psc = sct / $(document).height();

        $('.main_visual').css({
            filter: `brightness(${1 - psc * 3})`
        })


    })
})

//top으로 올라가는 버튼
$(function () {
    $('.to_top').on('click', function () {
        $('html,body').animate({ scrollTop: 0 }, 1000)
    });



    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();

        if (sct > 800) {
            $('.to_top').addClass('on')
        } else {
            $('.to_top').removeClass('on')
        }

    })
});

$(function () {
    $('.mopen').on('click', function () {
        $('.gnb').toggleClass('on');
        $(this).toggleClass('on');
    });


    $('#header .gnb>ul>li>a').on('click', function (e) {
        e.preventDefault();
        $(this).next().slideToggle();
    })
})