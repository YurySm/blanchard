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
});