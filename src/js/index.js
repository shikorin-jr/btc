import $ from 'jquery';
import 'slick-carousel';
import tabs from './modules/tabs';
import modal from './modules/modal';
import {openModal} from './modules/modal';

window.addEventListener('DOMContentLoaded', function () {

    $('.promo__slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    $('.news__listen').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        centerPadding: '60px',
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            }

        ]
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
    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 50000);

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modal('[data-modal]', '.modal', modalTimerId);
});