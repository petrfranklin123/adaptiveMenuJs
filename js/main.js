const menuToggle = document.querySelector('#menu_toggle');


const mobileNavConteiner = document.querySelector('#mobile_nav');

menuToggle.onclick = function(){
    //menuToggle.classList.toggle('menu_icon_active');
    document.querySelector('.menu_icon').classList.toggle('menu_icon_active');
    mobileNavConteiner.classList.toggle('mobile_nav_active');
}

//document.querySelector('.menu_icon_wrapper').onclick = function(){
//    document.querySelector('.menu_icon').classList.toggle('menu_icon_active');
//}