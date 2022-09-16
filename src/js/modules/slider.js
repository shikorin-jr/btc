function slider({container, slide, nextArrow, prevArrow, wrapper, field, widthSlide, padLeftRight}) {
    let offset = 0;
    let slideIndex = 1;

    const slides = document.querySelectorAll(slide),
        slider = document.querySelector(container),
        prev = document.querySelector(prevArrow),
        next = document.querySelector(nextArrow),
        slidesWrapper = document.querySelector(wrapper),
        ms = padLeftRight,
        widthVW = (100 - ms) / widthSlide,
        slidesField = document.querySelector(field);
        
    
    
    slidesField.style.width = widthVW * slides.length + 'vw';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';

    slidesWrapper.style.overflow = 'hidden';

    slides.forEach(slide => {
        slide.style.width = `${widthVW}vw`;
    });

    slider.style.position = 'relative';

    const indicators = document.createElement('ol'),
          dots = [];
    indicators.classList.add('indicators');
    slider.append(indicators);

    for (let i = 0; i < slides.length - widthSlide + 1; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.classList.add('promo__dots');
        if (i == 0) {
            dot.style.opacity = 1;
        }
        indicators.append(dot);
        dots.push(dot);
    }

    next.addEventListener('click', () => {
        if (offset == (widthVW * (slides.length - widthSlide))) {
            offset = 0;
        } else {
            offset += widthVW;
        }

        slidesField.style.transform = `translateX(-${offset}vw)`;
       
        if (slideIndex == (slides.length - widthSlide + 1)) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        dots.forEach(dot => dot.style.opacity = ".5");
        dots[slideIndex-1].style.opacity = 1;
    });

    prev.addEventListener('click', () => {
        if (offset == 0 ) {
            offset = (widthVW * (slides.length - widthSlide));
        } else {
            offset -= widthVW;
        }

        slidesField.style.transform = `translateX(-${offset}vw)`;

        if (slideIndex == 1) {
            slideIndex = (slides.length - widthSlide + 1);
        } else {
            slideIndex--;
        }


        dots.forEach(dot => dot.style.opacity = ".5");
        dots[slideIndex-1].style.opacity = 1;
    });

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');

            slideIndex = slideTo;
            offset = widthVW * (slideTo - 1);

            slidesField.style.transform = `translateX(-${offset}vw)`;


            dots.forEach(dot => dot.style.opacity = ".5");
            dots[slideIndex-1].style.opacity = 1;
        });
    });
}

export default slider;