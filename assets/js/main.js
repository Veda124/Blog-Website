// Grab elements
const selectElement = selector => {
    const element = document.querySelector(selector)
    if(element) return element;
    throw new Error(`Something went wrong make sure ${selector} exists`)
};


//Nav styles on scroll

const scrollHeader = () => {
    const headerElement = selectElement('#header');
    if(this.scrollY >=15){
        headerElement.classList.add('activated')
    }else{
        headerElement.classList.remove('activated')
    }
};

window.addEventListener('scroll',scrollHeader)
// Open menu & search pop-up
const menuToggleIcon = selectElement('#menu-toggle-icon')

const toggleMenu = () => {
    const mobileMenu = selectElement('#menu');
    mobileMenu.classList.toggle('activated');
    menuToggleIcon.classList.toggle('activated');

};
//menuToggleIcon.addEventListener('click',menuToggleIcon);

menuToggleIcon.addEventListener('click',toggleMenu);

// Open/Close search form popup
const formOpenBtn = selectElement('#search-icon');
const formCloseBtn = selectElement('#form-close-btn');
const searchFormContainer = selectElement('#search-form-container');

formOpenBtn.addEventListener('click', () => searchFormContainer.classList.add('activated'));

formCloseBtn.addEventListener('click', () => searchFormContainer.classList.remove('activated'));


// -- Close the search form popup on ESC keypress
//not working
window.addEventListener('keyup', (event) => {
    if(event.key === 'Escape') searchContainer.classList.remove('activated');
});

// Switch theme/add to local storage
const boduElement = document.body;
const themeTogglebtn = selectElement('#theme-toggle-btn');
const currentTheme = localStorage.getItem('currentTheme')

if (currentTheme) {
    boduElement.classList.add('light-theme')
}
themeTogglebtn.addEventListener('click', () => {
    boduElement.classList.toggle('light-theme');
    if(boduElement.classList.contains('light-theme')){
        localStorage.setItem('currentTheme','themeActive');

    }else{
        localStorage.removeItem('currentTheme');
    }

});

// Swiper

const swiper= new Swiper('.swiper',{
    slidesPerView:1,
    spaceBetween:20,
    navigation:{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination:{
        el:'.swiper-pagination'
    },
    breakpoints:{
        700: {
            slidesPerView:2
        },
        1200 : {
            slidesPerView:3
        }
    }
})