import $ from 'jquery';
import 'slick-carousel';
import tabs from './modules/tabs';
import modal from './modules/modal';
import { openModal } from './modules/modal';

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

    $('.project__listen').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
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

    $('.default__listen').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
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


    const navSlide = () => {
        const hamburger = document.querySelector('.hamburger');
        const hmenu = document.querySelector('.header__right');

        hamburger.addEventListener('click', () => {
            hmenu.classList.toggle('nav-active');
            document.body.classList.toggle('hidden');
            hamburger.classList.toggle('toggle');
        });
    };

    const app = () => {
        navSlide();
    };

    app();



});