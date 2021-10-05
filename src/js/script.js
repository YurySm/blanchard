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


    let stylesBtms =  window.getComputedStyle(slideBtns[0], null);

        console.log(Math.ceil(stylesBtms.height.match(/\d+/).input.replace( 'px',"")));

        slider.style.cssText = `
            height: ${ (Math.ceil(stylesBtms.height.match(/\d+/).input.replace('px',"")) * 2) + 100}px;
          `;

        nextBtn.addEventListener('click', () => {
            let heightWindow = `${(Math.ceil(stylesBtms.height.match(/\d+/).input.replace('px','')) * 2) + 100}`;
            console.log(`${heightWindow}px`);
            sliderRoad.style.cssText = `
                transform: translateY(-${heightWindow}px);
            `;
        });



});