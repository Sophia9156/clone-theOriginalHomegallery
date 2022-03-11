//common.js



$('header').load('inc.html header > div',headerFun);
$('footer').load('inc.html footer > div');

function headerFun(){
    const btnBurger = document.querySelector('.burger');
    const elBurger1 = document.querySelector('.burger1');
    const elBurger2 = document.querySelector('.burger2');
    const elHiddenMenu = document.querySelector('.hidden-menu');
    const subMenuTitle = document.querySelector('.sub-menu-title');
    const subMenu = document.querySelector('.sub-menu');

    const nav = document.querySelector('nav');
    const navA = document.querySelectorAll('nav a');
    const header = document.querySelector('header>div');
    const logo = document.querySelector('#logo');
    const loginA = document.querySelectorAll('.login a');
    const loginSpan = document.querySelector('.login span');


    nav.addEventListener('mouseenter',function(){
        header.style = 'background-color: #fff; ';
        logo.src = './img/logo_ty2.png';
        loginA[0].style = 'color: #555';
        loginA[1].style = 'color: #555';
        loginSpan.style = 'border-left: 1px solid #555';
        elBurger1.style = 'background-color: #000';
        elBurger2.style = 'background-color: #000';

        for(let i=0; i<navA.length; i++){
            navA[i].style = 'color: #000; font-weight: 600; padding: 0 20px;'
        };
    });
    nav.addEventListener('mouseleave',function(){
        header.style = 'background-color: transparent ';
        logo.src = './img/logo_color.png';
        loginA[0].style = 'color: #fff';
        loginA[1].style = 'color: #fff';
        loginSpan.style = 'border-left: 1px solid #fff';
        elBurger1.style = 'background-color: #fff';
        elBurger2.style = 'background-color: #fff';

        for(let i=0; i<navA.length; i++){
            navA[i].style = 'color: #fff; font-weight: 400; padding: 0 20px;'
        };
    });

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

    let pos = {y:0,dy:0,state:true}
    let scrollState = function(){
        pos.y = window.scrollY;
        pos.state = pos.y > pos.dy;
        pos.dy = pos.y;
    }

    window.addEventListener('scroll',function(){
        scrollState();
        if(pos.state){
            header.style = `transform: translateY(-100%)`;
        }else{
            header.style = `transform: translateY(0)`;
        }                        
    });

}



