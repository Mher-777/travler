$(function () {

    $('.traveling-slider').slick({
        arrows: false,
        autoplay: true,
    });

    $('.team__slider').slick({
        arrows: false,
        autoplay: true,
        dots: true,
        dotsClass: 'team__slider-dots',
    });

    $('.main-info__item-btn').on('click', function () {
        $(".main-info__item:nth-child(1)").remove(),
            $(".main-info__item").removeClass('.main-info__item-remove')
    })
    $('.main-info__item-btn').on('click', function () {
        $(".main-info__item-remove").removeClass('main-info__item-remove')
    })
});