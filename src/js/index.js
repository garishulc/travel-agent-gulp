
// import autoCompleteFunc from "./modules/autocomplete.js";
// autoCompleteFunc();

// //импортируем easepick календаарь из подключенного пакета npm
// import easePick from "./modules/easepick.js";
// easePick();

//импортируем Свайпер JS
import Swiper from 'swiper/bundle';
//импортируем swiper styles
import 'swiper/css';

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
  //колличество карточек
  slidesPerView: 4,
  //расстояние между карточками в пикселях
  spaceBetween: 32,
  // Navigation arrows
  navigation: {
    nextEl: '#swiper-button-next',
    prevEl: '#swiper-button-prev',
  },
});
//в константу передаются 2 аргумента
//(селектор, на который нужно повесить свайпер)
//(объект с найстройками)
//в данном случае мы указываем класс блока к которому
//применяется данный код
  //configure Swiper to use modules
  // modules: [Navigation, Pagination],...

// import mobileNav from './modules/mobile-nav.js';
// mobileNav();
