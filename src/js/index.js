import $ from 'jquery';
import 'slick-carousel';
import tabs from './modules/tabs';
import modal from './modules/modal';

window.addEventListener('DOMContentLoaded', function () {
    $('.promo__slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    });

    $('.news__listen').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrows: false
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
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrows: false
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
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
    });

    $('.partners__list').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrows: false
                }
            }

        ]
    });

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modal('[data-modal]', '.modal');

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

    function showHeaderByScroll() {
        const   contacts = document.querySelector('.header__feedback'),
                headerHe = document.querySelector('.header .container');
        const scrolled = window.pageYOffset || document.documentElement.scrollTop;

        if ((scrolled >= 150) && (document.documentElement.clientWidth > 1024)) {
            contacts.classList.add('hide');
            
            contacts.classList.remove('show-flex');
            headerHe.classList.add('fade');
            headerHe.style.height = '6vw';
        } else {
            contacts.classList.add('show-flex');
            contacts.classList.remove('hide');
            headerHe.classList.remove('fade');
            headerHe.style.height = '';
        }
    }
    window.addEventListener('scroll', showHeaderByScroll);

});