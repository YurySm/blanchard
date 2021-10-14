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
    function runMySlider({nextSlideBtn, prevSlideBtn, counterSlideItems, sliderItems, sliderWay, sliderWrapper, multiply=1, addHeigth=0, bottomHeight=50}) {
        const nextBtn = document.querySelector(nextSlideBtn),
          prevBtn = document.querySelector(prevSlideBtn),
          counter = document.querySelector(counterSlideItems),
          slideBtns = document.querySelectorAll(sliderItems),
          sliderRoad = document.querySelector(sliderWay),
          slider = document.querySelector(sliderWrapper);
    
    

    let stylesBtms =  window.getComputedStyle(slideBtns[0], null),
        heightWindow = (Math.ceil(stylesBtms.height.match(/\d+/).input.replace('px',"")) * multiply) + addHeigth,
        sliderRoadHeight = (Math.round(window.getComputedStyle(sliderRoad, null).height.replace('px','')) ),
        counterSlide = 1,
        allSlide = Math.round(sliderRoadHeight/heightWindow);

        counter.innerHTML = `${counterSlide} / ${allSlide}`;
    
        console.log(stylesBtms);

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
                transform: translateY(${heightWindow * -(allSlide-1) - bottomHeight }px);
            `;            
        } else {
            counter.innerHTML = `${--counterSlide} / ${allSlide}`;
            sliderRoad.style.cssText = `
                transform: translateY(${curenntRoad + heightWindow + 50}px);
            `;
        }
    });
    }
    runMySlider({
            nextSlideBtn: '.gallery__slider-right', 
            prevSlideBtn: '.gallery__slider-left', 
            counterSlideItems: '.gallery__slider-counter', 
            sliderItems: '.gallery__slide-btn', 
            sliderWay: '.gallery__slider-road', 
            sliderWrapper: '.gallery__slider',
            multiply: 2,
            addHeigth: 50,
            bottomHeight: 150
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

    const listBtns = document.querySelectorAll('.catalog__item-btn'),
          listContents = document.querySelectorAll('.catalog__item-content');

    listContents.forEach(content => {
        content.style.display = 'none';
        content.classList.remove('fade');
    })
    
    listBtns.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            listContents.forEach(content => {
                content.style.display = 'none';
                content.classList.remove('fade');
            });
            if(btn.classList.contains('catalog__item-btn-active')) {
                listContents.forEach(content => {
                    content.style.display = 'none';
                    content.classList.remove('fade');
                });
                btn.classList.remove('catalog__item-btn-active');
            } else {
                listBtns.forEach(btn => {
                    btn.classList.remove('catalog__item-btn-active');
                });
                btn.classList.add('catalog__item-btn-active');

                listContents[i].style.display = 'flex';
                listContents[i].classList.add('fade');
            }
        });
    });

    //event 
    const trigger = document.querySelector('.events__btn');
          fadeCards = document.querySelectorAll('.events__item-add');
    
    trigger.addEventListener('click', () => {
        if(trigger.hasAttribute('data-active')) {
            trigger.removeAttribute('data-active', '');
            trigger.textContent = 'Все события';
            fadeCards.forEach(card => {
                card.classList.remove('fade');
                card.style.display = 'none';
            });
        } else {
            trigger.setAttribute('data-active', '');
            trigger.textContent = 'Свернуть';
            fadeCards.forEach(card => {
                card.classList.add('fade');
                card.style.display = 'flex';
            });
        }
    })

    //editions slider 
    runMySlider({
        nextSlideBtn: '.editions__slider-right', 
        prevSlideBtn: '.editions__slider-left', 
        counterSlideItems: '.editions__slider-counter', 
        sliderItems: '.editions__slide', 
        sliderWay: '.editions__slider-road', 
        sliderWrapper: '.editions__slider-window'
    });


});