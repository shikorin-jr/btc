import $ from 'jquery';
import 'slick-carousel';
import tabs from './modules/tabs';

window.addEventListener('DOMContentLoaded', function () {

    $('.promo__slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    $('.partners__list').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            }

        ]
    });

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');

});