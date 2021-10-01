document.addEventListener('DOMContentLoaded', () => {
    const useCustomSelect = (el) => {
        if( typeof el ===  'string'){
            const element = document.querySelector(el);
            const choices = new Choices(el, {
                placeholder: false,
               
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

    const listSelects = document.querySelectorAll('.promo__selects > li > select');
    listSelects.forEach(item => useCustomSelect(item));
});