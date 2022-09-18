import slider from './modules/slider';
import $ from 'jquery';
import 'slick-carousel';


window.addEventListener('DOMContentLoaded', function () {

    $('.partners__list').slick({
        dots: true,
        infinite: false,
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

    slider({
        container: '.promo__slider',
        slide: '.promo__slide',
        nextArrow: '.promo__slider-next',
        prevArrow: '.promo__slider-prev',
        wrapper: '.promo__slider-wrapper',
        field: '.promo__slider-inner',
        widthSlide: 1,
        padLeftRight: 0
    });

    // slider({
    //     container: '.partners__content',
    //     slide: '.partners__item',
    //     nextArrow: '.partners .promo__slider-next',
    //     prevArrow: '.partners .promo__slider-prev',
    //     wrapper: '.partners__wrapper',
    //     field: '.partners__list',
    //     widthSlide: 5,
    //     padLeftRight: 17.5
    // });
    


    
    

});