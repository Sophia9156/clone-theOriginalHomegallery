const btnContact = document.querySelector('.contact-small');
const btnArrow = document.querySelector('.contact-arrow');
const elContact = document.querySelector('.contact');

btnContact.onclick = function(){
    elContact.classList.toggle('contact-inactive');
    elContact.classList.toggle('contact-active');
}

const elFooter = document.querySelector('footer');
const btnFooter = document.querySelector('.show-footer');
const btnFooterClose = document.querySelector('.close');

btnFooter.onclick = function(){
    elFooter.classList.remove('footer-inactive');
    elFooter.classList.add('footer-active');
}
btnFooterClose.onclick = function(){
    elFooter.classList.remove('footer-active');
    elFooter.classList.add('footer-inactive');
}

