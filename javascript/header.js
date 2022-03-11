const btnBurger = document.querySelector('.burger');
const elBurger1 = document.querySelector('.burger1');
const elBurger2 = document.querySelector('.burger2');
const elHiddenMenu = document.querySelector('.hidden-menu');
const subMenuTitle = document.querySelector('.sub-menu-title');
const subMenu = document.querySelector('.sub-menu');

btnBurger.onclick = function(){
    elHiddenMenu.classList.toggle('hidden-menu-inactive');
    elHiddenMenu.classList.toggle('hidden-menu-active');
    elBurger1.classList.toggle('active');
    elBurger2.classList.toggle('active');

};
subMenuTitle.addEventListener('mouseenter', function(){
    subMenu.style = "visibility: visible"
});
subMenuTitle.addEventListener('mouseleave', function(){
    subMenu.style = "visibility: hidden"
});
subMenu.addEventListener('mouseenter', function(){
    subMenu.style = "visibility: visible"
});
subMenu.addEventListener('mouseleave', function(){
    subMenu.style = "visibility: hidden"
});