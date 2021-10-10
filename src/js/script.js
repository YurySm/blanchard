document.addEventListener('DOMContentLoaded', () => {

    //custom selects
    const useCustomSelect = (el) => {
        if( typeof el ===  'string'){
            const element = document.querySelector(el);
            const choices = new Choices(el, {
                placeholder: false,
                searchEnabled: false,
                searchChoices: false,
                itemSelectText: '',
            });
        } else {
            const choices = new Choices(el, {
                placeholder: false,
                searchEnabled: false,
                searchChoices: false,
                itemSelectText: '',
            });
        }      
    }

    //promo
    const listSelects = document.querySelectorAll('.promo__selects > li > select');
    listSelects.forEach(item => useCustomSelect(item));
    //gallry
    useCustomSelect('.gallery__select');


    //slider promo
    $('.promo__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 1000,
        fade: true,
        cssEase: 'linear'
    });

    //galerry promo
    const nextBtn = document.querySelector('.gallery__slider-right'),
          prevBtn = document.querySelector('.gallery__slider-left'),
          counter = document.querySelector('.gallery__slider-counter'),
          slideBtns = document.querySelectorAll('.gallery__slide-btn'),
          sliderRoad = document.querySelector('.gallery__slider-road'),
          slider = document.querySelector('.gallery__slider');


    let stylesBtms =  window.getComputedStyle(slideBtns[0], null),
        heightWindow = (Math.ceil(stylesBtms.height.match(/\d+/).input.replace('px',"")) * 2) + 50,
        sliderRoadHeight = (Math.round(window.getComputedStyle(sliderRoad, null).height.replace('px','')) ),
        counterSlide = 1,
        allSlide = Math.round(sliderRoadHeight/heightWindow);

        counter.innerHTML = `${counterSlide} / ${allSlide}`;


    slider.style.cssText = `
            height: ${heightWindow}px;
          `;
    sliderRoad.style.cssText = `
          transform: translateY(0px);
      `;

    nextBtn.addEventListener('click', () => {
        let curenntRoad = (Math.ceil(sliderRoad.getAttribute('style').match(/([^\)]+)\((.*)\)/)[2].slice(0,-2)));
        if(counterSlide == allSlide) {
            counterSlide = 1;
            counter.innerHTML = `${counterSlide} / ${allSlide}`;
            
            sliderRoad.style.cssText = `
                transform: translateY(0px);
            `;
            counterSlide = 1;
        } else {
            counter.innerHTML = `${++counterSlide} / ${allSlide}`;
            sliderRoad.style.cssText = `
                transform: translateY(${curenntRoad - heightWindow - 50}px);
            `;
        }
    });
    prevBtn.addEventListener('click', () => {
        let curenntRoad = (Math.ceil(sliderRoad.getAttribute('style').match(/([^\)]+)\((.*)\)/)[2].slice(0,-2)));
        if(counterSlide == 1) {
            counterSlide = allSlide;
            counter.innerHTML = `${counterSlide} / ${allSlide}`;
            sliderRoad.style.cssText = `
                transform: translateY(${heightWindow * -(allSlide-1) - 150 }px);
            `;            
        } else {
            counter.innerHTML = `${--counterSlide} / ${allSlide}`;
            sliderRoad.style.cssText = `
                transform: translateY(${curenntRoad + heightWindow + 50}px);
            `;
        }
    });
    //catalog
    const btnsLands = document.querySelectorAll('.catalog__nav-item > button');

    btnsLands.forEach(btn => {
        btn.addEventListener('click', () => {
            if(btn.classList.contains('btn-active')) {
                btn.classList.remove('btn-active');
            } else {
                btnsLands.forEach(btn => {
                    btn.classList.remove('btn-active');
                });
                btn.classList.add('btn-active');
            }
        });
    });


});